import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeScheduledInstanceAvailabilityRequest,
  DescribeScheduledInstanceAvailabilityResult,
} from "../models/models_3";
import {
  deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand,
  serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type DescribeScheduledInstanceAvailabilityCommandInput = DescribeScheduledInstanceAvailabilityRequest;
export type DescribeScheduledInstanceAvailabilityCommandOutput = DescribeScheduledInstanceAvailabilityResult &
  __MetadataBearer;

/**
 * <p>Finds available schedules that meet the specified criteria.</p>
 *          <p>You can search for an available schedule no more than 3 months in advance. You must meet the minimum required duration of 1,200 hours per year. For example, the minimum daily schedule is 4 hours, the minimum weekly schedule is 24 hours, and the minimum monthly schedule is 100 hours.</p>
 *          <p>After you find a schedule that meets your needs, call <a>PurchaseScheduledInstances</a>
 *          to purchase Scheduled Instances with that schedule.</p>
 */
export class DescribeScheduledInstanceAvailabilityCommand extends $Command<
  DescribeScheduledInstanceAvailabilityCommandInput,
  DescribeScheduledInstanceAvailabilityCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScheduledInstanceAvailabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScheduledInstanceAvailabilityCommandInput, DescribeScheduledInstanceAvailabilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeScheduledInstanceAvailabilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScheduledInstanceAvailabilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScheduledInstanceAvailabilityResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeScheduledInstanceAvailabilityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScheduledInstanceAvailabilityCommandOutput> {
    return deserializeAws_ec2DescribeScheduledInstanceAvailabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
