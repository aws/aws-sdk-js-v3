import {
  EC2InstanceConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../EC2InstanceConnectClient";
import { SendSSHPublicKeyRequest, SendSSHPublicKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SendSSHPublicKeyCommand,
  serializeAws_json1_1SendSSHPublicKeyCommand,
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

export type SendSSHPublicKeyCommandInput = SendSSHPublicKeyRequest;
export type SendSSHPublicKeyCommandOutput = SendSSHPublicKeyResponse & __MetadataBearer;

/**
 * <p>Pushes an SSH public key to a particular OS user on a given EC2 instance for 60 seconds.</p>
 */
export class SendSSHPublicKeyCommand extends $Command<
  SendSSHPublicKeyCommandInput,
  SendSSHPublicKeyCommandOutput,
  EC2InstanceConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendSSHPublicKeyCommandInput) {
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
  ): Handler<SendSSHPublicKeyCommandInput, SendSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2InstanceConnectClient";
    const commandName = "SendSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendSSHPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendSSHPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendSSHPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendSSHPublicKeyCommandOutput> {
    return deserializeAws_json1_1SendSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
