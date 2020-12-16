import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { ImportSshPublicKeyRequest, ImportSshPublicKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ImportSshPublicKeyCommand,
  serializeAws_json1_1ImportSshPublicKeyCommand,
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

export type ImportSshPublicKeyCommandInput = ImportSshPublicKeyRequest;
export type ImportSshPublicKeyCommandOutput = ImportSshPublicKeyResponse & __MetadataBearer;

/**
 * <p>Adds a Secure Shell (SSH) public key to a user account identified by a
 *         <code>UserName</code> value assigned to the specific file transfer protocol-enabled server,
 *       identified by <code>ServerId</code>.</p>
 *
 *          <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and
 *       the name of the <code>SshPublicKeyId</code>.</p>
 */
export class ImportSshPublicKeyCommand extends $Command<
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportSshPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportSshPublicKeyCommandInput, ImportSshPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ImportSshPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportSshPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportSshPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportSshPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportSshPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportSshPublicKeyCommandOutput> {
    return deserializeAws_json1_1ImportSshPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
