import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReportInstanceStatusRequest } from "../models/models_4";
import {
  deserializeAws_ec2ReportInstanceStatusCommand,
  serializeAws_ec2ReportInstanceStatusCommand,
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

export type ReportInstanceStatusCommandInput = ReportInstanceStatusRequest;
export type ReportInstanceStatusCommandOutput = __MetadataBearer;

/**
 * <p>Submits feedback about the status of an instance. The instance must be in the
 *                 <code>running</code> state. If your experience with the instance differs from the
 *             instance status returned by <a>DescribeInstanceStatus</a>, use <a>ReportInstanceStatus</a> to report your experience with the instance. Amazon
 *             EC2 collects this information to improve the accuracy of status checks.</p>
 *         <p>Use of this action does not change the value returned by <a>DescribeInstanceStatus</a>.</p>
 */
export class ReportInstanceStatusCommand extends $Command<
  ReportInstanceStatusCommandInput,
  ReportInstanceStatusCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReportInstanceStatusCommandInput) {
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
  ): Handler<ReportInstanceStatusCommandInput, ReportInstanceStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReportInstanceStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReportInstanceStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReportInstanceStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReportInstanceStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReportInstanceStatusCommandOutput> {
    return deserializeAws_ec2ReportInstanceStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
