import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { PurchaseScheduledInstancesRequest, PurchaseScheduledInstancesResult } from "../models/models_4";
import {
  deserializeAws_ec2PurchaseScheduledInstancesCommand,
  serializeAws_ec2PurchaseScheduledInstancesCommand,
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

export type PurchaseScheduledInstancesCommandInput = PurchaseScheduledInstancesRequest;
export type PurchaseScheduledInstancesCommandOutput = PurchaseScheduledInstancesResult & __MetadataBearer;

/**
 * <p>Purchases the Scheduled Instances with the specified schedule.</p>
 *          <p>Scheduled Instances enable you to purchase Amazon EC2 compute capacity by the hour for a one-year term.
 *          Before you can purchase a Scheduled Instance, you must call <a>DescribeScheduledInstanceAvailability</a>
 *          to check for available schedules and obtain a purchase token. After you purchase a Scheduled Instance,
 *          you must call <a>RunScheduledInstances</a> during each scheduled time period.</p>
 *          <p>After you purchase a Scheduled Instance, you can't cancel, modify, or resell your purchase.</p>
 */
export class PurchaseScheduledInstancesCommand extends $Command<
  PurchaseScheduledInstancesCommandInput,
  PurchaseScheduledInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseScheduledInstancesCommandInput) {
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
  ): Handler<PurchaseScheduledInstancesCommandInput, PurchaseScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "PurchaseScheduledInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseScheduledInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseScheduledInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PurchaseScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2PurchaseScheduledInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseScheduledInstancesCommandOutput> {
    return deserializeAws_ec2PurchaseScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
