import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DeleteSshPublicKeyRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSshPublicKeyCommand,
  serializeAws_json1_1DeleteSshPublicKeyCommand,
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

export interface DeleteSshPublicKeyCommandInput extends DeleteSshPublicKeyRequest {}
export interface DeleteSshPublicKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a user's Secure Shell (SSH) public key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteSshPublicKeyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteSshPublicKeyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteSshPublicKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSshPublicKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteSshPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSshPublicKeyCommand extends $Command<
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSshPublicKeyCommandInput) {
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
  ): Handler<DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DeleteSshPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSshPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSshPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSshPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSshPublicKeyCommandOutput> {
    return deserializeAws_json1_1DeleteSshPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
