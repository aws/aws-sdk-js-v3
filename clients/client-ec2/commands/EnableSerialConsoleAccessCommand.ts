import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { EnableSerialConsoleAccessRequest, EnableSerialConsoleAccessResult } from "../models/models_4";
import {
  deserializeAws_ec2EnableSerialConsoleAccessCommand,
  serializeAws_ec2EnableSerialConsoleAccessCommand,
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

export type EnableSerialConsoleAccessCommandInput = EnableSerialConsoleAccessRequest;
export type EnableSerialConsoleAccessCommandOutput = EnableSerialConsoleAccessResult & __MetadataBearer;

/**
 * <p>Enables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a>
 * 			in the <i>Amazon EC2 User Guide</i>.</p>
 */
export class EnableSerialConsoleAccessCommand extends $Command<
  EnableSerialConsoleAccessCommandInput,
  EnableSerialConsoleAccessCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableSerialConsoleAccessCommandInput) {
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
  ): Handler<EnableSerialConsoleAccessCommandInput, EnableSerialConsoleAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableSerialConsoleAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSerialConsoleAccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableSerialConsoleAccessResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableSerialConsoleAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableSerialConsoleAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSerialConsoleAccessCommandOutput> {
    return deserializeAws_ec2EnableSerialConsoleAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
