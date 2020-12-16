import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DeleteImportedKeyMaterialRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteImportedKeyMaterialCommand,
  serializeAws_json1_1DeleteImportedKeyMaterialCommand,
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

export type DeleteImportedKeyMaterialCommandInput = DeleteImportedKeyMaterialRequest;
export type DeleteImportedKeyMaterialCommandOutput = __MetadataBearer;

/**
 * <p>Deletes key material that you previously imported. This operation makes the specified
 *       customer master key (CMK) unusable. For more information about importing key material into
 *       AWS KMS, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key
 *         Material</a> in the <i>AWS Key Management Service Developer Guide</i>. You cannot perform this operation on a CMK in a different AWS account.</p>
 *          <p>When the specified CMK is in the <code>PendingDeletion</code> state, this operation does
 *       not change the CMK's state. Otherwise, it changes the CMK's state to
 *         <code>PendingImport</code>.</p>
 *          <p>After you delete key material, you can use <a>ImportKeyMaterial</a> to reimport
 *       the same key material into the CMK.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class DeleteImportedKeyMaterialCommand extends $Command<
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteImportedKeyMaterialCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteImportedKeyMaterialCommandInput, DeleteImportedKeyMaterialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DeleteImportedKeyMaterialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteImportedKeyMaterialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteImportedKeyMaterialCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteImportedKeyMaterialCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteImportedKeyMaterialCommandOutput> {
    return deserializeAws_json1_1DeleteImportedKeyMaterialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
