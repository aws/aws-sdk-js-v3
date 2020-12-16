import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ImportKeyMaterialRequest, ImportKeyMaterialResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ImportKeyMaterialCommand,
  serializeAws_json1_1ImportKeyMaterialCommand,
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

export type ImportKeyMaterialCommandInput = ImportKeyMaterialRequest;
export type ImportKeyMaterialCommandOutput = ImportKeyMaterialResponse & __MetadataBearer;

/**
 * <p>Imports key material into an existing symmetric AWS KMS customer master key (CMK) that was
 *       created without key material. After you successfully import key material into a CMK, you can
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport the same key material</a> into that CMK, but you cannot import different key
 *       material.</p>
 *          <p>You cannot perform this operation on an asymmetric CMK or on any CMK in a different AWS account. For more information about creating CMKs with no key material and
 *       then importing key material, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>Before using this operation, call <a>GetParametersForImport</a>. Its response
 *       includes a public key and an import token. Use the public key to encrypt the key material.
 *       Then, submit the import token from the same <code>GetParametersForImport</code>
 *       response.</p>
 *          <p>When calling this operation, you must specify the following values:</p>
 *          <ul>
 *             <li>
 *                <p>The key ID or key ARN of a CMK with no key material. Its <code>Origin</code> must be
 *             <code>EXTERNAL</code>.</p>
 *                <p>To create a CMK with no key material, call <a>CreateKey</a> and set the
 *           value of its <code>Origin</code> parameter to <code>EXTERNAL</code>. To get the
 *             <code>Origin</code> of a CMK, call <a>DescribeKey</a>.)</p>
 *             </li>
 *             <li>
 *                <p>The encrypted key material. To get the public key to encrypt the key material, call
 *             <a>GetParametersForImport</a>.</p>
 *             </li>
 *             <li>
 *                <p>The import token that <a>GetParametersForImport</a> returned. You must use
 *           a public key and token from the same <code>GetParametersForImport</code> response.</p>
 *             </li>
 *             <li>
 *                <p>Whether the key material expires and if so, when. If you set an expiration date, AWS KMS
 *           deletes the key material from the CMK on the specified date, and the CMK becomes unusable.
 *           To use the CMK again, you must reimport the same key material. The only way to change an
 *           expiration date is by reimporting the same key material and specifying a new expiration
 *           date. </p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, the key state of the CMK changes from
 *         <code>PendingImport</code> to <code>Enabled</code>, and you can use the CMK.</p>
 *          <p>If this operation fails, use the exception to help determine the problem. If the error is
 *       related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the CMK and
 *       repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key
 *         Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class ImportKeyMaterialCommand extends $Command<
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportKeyMaterialCommandInput) {
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
  ): Handler<ImportKeyMaterialCommandInput, ImportKeyMaterialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ImportKeyMaterialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportKeyMaterialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportKeyMaterialResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportKeyMaterialCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportKeyMaterialCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportKeyMaterialCommandOutput> {
    return deserializeAws_json1_1ImportKeyMaterialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
