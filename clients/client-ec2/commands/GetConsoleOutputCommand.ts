import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetConsoleOutputRequest, GetConsoleOutputResult } from "../models/models_4";
import {
  deserializeAws_ec2GetConsoleOutputCommand,
  serializeAws_ec2GetConsoleOutputCommand,
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

export type GetConsoleOutputCommandInput = GetConsoleOutputRequest;
export type GetConsoleOutputCommandOutput = GetConsoleOutputResult & __MetadataBearer;

/**
 * <p>Gets the console output for the specified instance. For Linux instances, the instance
 *             console output displays the exact console output that would normally be displayed on a
 *             physical monitor attached to a computer. For Windows instances, the instance console
 *             output includes the last three system event log errors.</p>
 *         <p>By default, the console output returns buffered information that was posted shortly
 *             after an instance transition state (start, stop, reboot, or terminate). This information
 *             is available for at least one hour after the most recent post. Only the most recent 64
 *             KB of console output is available.</p>
 *         <p>You can optionally retrieve the latest serial console output at any time during the
 *             instance lifecycle. This option is supported on instance types that use the Nitro
 *             hypervisor.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-console.html#instance-console-console-output">Instance
 *                 Console Output</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class GetConsoleOutputCommand extends $Command<
  GetConsoleOutputCommandInput,
  GetConsoleOutputCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetConsoleOutputCommandInput) {
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
  ): Handler<GetConsoleOutputCommandInput, GetConsoleOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetConsoleOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConsoleOutputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetConsoleOutputResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConsoleOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetConsoleOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConsoleOutputCommandOutput> {
    return deserializeAws_ec2GetConsoleOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
