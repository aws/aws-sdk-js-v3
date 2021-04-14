import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import { SendSerialConsoleSSHPublicKeyRequest, SendSerialConsoleSSHPublicKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand,
  serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand,
} from "../protocols/Aws_json1_1";
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

export type SendSerialConsoleSSHPublicKeyCommandInput = SendSerialConsoleSSHPublicKeyRequest;
export type SendSerialConsoleSSHPublicKeyCommandOutput = SendSerialConsoleSSHPublicKeyResponse & __MetadataBearer;

/**
 * <p>Pushes an SSH public key to the specified EC2 instance. The key remains for 60
 *             seconds, which gives you 60 seconds to establish a serial console connection to the
 *             instance using SSH. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-serial-console.html">EC2 Serial Console</a> in
 *             the <i>Amazon EC2 User Guide</i>.</p>
 */
export class SendSerialConsoleSSHPublicKeyCommand extends $Command<
  SendSerialConsoleSSHPublicKeyCommandInput,
  SendSerialConsoleSSHPublicKeyCommandOutput,
  EC2InstanceConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendSerialConsoleSSHPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2InstanceConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendSerialConsoleSSHPublicKeyCommandInput, SendSerialConsoleSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2InstanceConnectClient";
    const commandName = "SendSerialConsoleSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendSerialConsoleSSHPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendSerialConsoleSSHPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendSerialConsoleSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SendSerialConsoleSSHPublicKeyCommandOutput> {
    return deserializeAws_json1_1SendSerialConsoleSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
