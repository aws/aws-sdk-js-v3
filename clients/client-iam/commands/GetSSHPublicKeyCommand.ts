import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSSHPublicKeyRequest, GetSSHPublicKeyResponse } from "../models/models_0";
import {
  deserializeAws_queryGetSSHPublicKeyCommand,
  serializeAws_queryGetSSHPublicKeyCommand,
} from "../protocols/Aws_query";
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

export type GetSSHPublicKeyCommandInput = GetSSHPublicKeyRequest;
export type GetSSHPublicKeyCommandOutput = GetSSHPublicKeyResponse & __MetadataBearer;

/**
 * <p>Retrieves the specified SSH public key, including metadata about the key.</p>
 *          <p>The SSH public key retrieved by this operation is used only for authenticating the
 *          associated IAM user to an AWS CodeCommit repository. For more information about using SSH keys to
 *          authenticate to an AWS CodeCommit repository, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-credentials-ssh.html">Set up AWS CodeCommit for SSH
 *             Connections</a> in the <i>AWS CodeCommit User Guide</i>.</p>
 */
export class GetSSHPublicKeyCommand extends $Command<
  GetSSHPublicKeyCommandInput,
  GetSSHPublicKeyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSSHPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetSSHPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSSHPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSSHPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSSHPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSSHPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSSHPublicKeyCommandOutput> {
    return deserializeAws_queryGetSSHPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
