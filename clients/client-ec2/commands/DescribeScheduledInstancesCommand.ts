import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeScheduledInstancesRequest, DescribeScheduledInstancesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeScheduledInstancesCommand,
  serializeAws_ec2DescribeScheduledInstancesCommand,
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

export type DescribeScheduledInstancesCommandInput = DescribeScheduledInstancesRequest;
export type DescribeScheduledInstancesCommandOutput = DescribeScheduledInstancesResult & __MetadataBearer;

/**
 * <p>Describes the specified Scheduled Instances or all your Scheduled Instances.</p>
 */
export class DescribeScheduledInstancesCommand extends $Command<
  DescribeScheduledInstancesCommandInput,
  DescribeScheduledInstancesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeScheduledInstancesCommandInput) {
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
  ): Handler<DescribeScheduledInstancesCommandInput, DescribeScheduledInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeScheduledInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScheduledInstancesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScheduledInstancesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScheduledInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeScheduledInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScheduledInstancesCommandOutput> {
    return deserializeAws_ec2DescribeScheduledInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
