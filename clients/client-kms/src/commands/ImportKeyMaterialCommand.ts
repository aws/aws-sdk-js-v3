// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ImportKeyMaterialRequest, ImportKeyMaterialResponse } from "../models/models_0";
import { de_ImportKeyMaterialCommand, se_ImportKeyMaterialCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ImportKeyMaterialCommand}.
 */
export interface ImportKeyMaterialCommandInput extends ImportKeyMaterialRequest {}
/**
 * @public
 *
 * The output of {@link ImportKeyMaterialCommand}.
 */
export interface ImportKeyMaterialCommandOutput extends ImportKeyMaterialResponse, __MetadataBearer {}

/**
 * @public
 * <p>Imports or reimports key material into an existing KMS key that was created without key
 *       material. <code>ImportKeyMaterial</code> also sets the expiration model and expiration date of
 *       the imported key material.</p>
 *          <p>By default, KMS keys are created with key material that KMS generates. This operation
 *       supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key
 *         material</a>, an advanced feature that lets you generate and import the cryptographic
 *       key material for a KMS key. For more information about importing key material into KMS, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key
 *         material</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>After you successfully import key material into a KMS key, you can <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#reimport-key-material">reimport
 *         the same key material</a> into that KMS key, but you cannot import different key
 *       material. You might reimport key material to replace key material that expired or key material
 *       that you deleted. You might also reimport key material to change the expiration model or
 *       expiration date of the key material. Before reimporting key material, if necessary, call <a>DeleteImportedKeyMaterial</a> to delete the current imported key material. </p>
 *          <p>Each time you import key material into KMS, you can determine whether
 *         (<code>ExpirationModel</code>) and when (<code>ValidTo</code>) the key material expires. To
 *       change the expiration of your key material, you must import it again, either by calling
 *         <code>ImportKeyMaterial</code> or using the <a href="kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-import-key-material-console">import features</a> of the KMS console.</p>
 *          <p>Before calling <code>ImportKeyMaterial</code>:</p>
 *          <ul>
 *             <li>
 *                <p>Create or identify a KMS key with no key material. The KMS key must have an
 *             <code>Origin</code> value of <code>EXTERNAL</code>, which indicates that the KMS key is
 *           designed for imported key material. </p>
 *                <p>To create an new KMS key for imported key material, call the <a>CreateKey</a> operation with an <code>Origin</code> value of <code>EXTERNAL</code>. You can create a
 *           symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, or asymmetric
 *           signing KMS key. You can also import key material into a <a href="kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any
 *           supported type. However, you can't import key material into a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use the <a>DescribeKey</a> operation to verify that the
 *             <code>KeyState</code> of the KMS key is <code>PendingImport</code>, which indicates that
 *           the KMS key has no key material. </p>
 *                <p>If you are reimporting the same key material into an existing KMS key, you might need
 *           to call the <a>DeleteImportedKeyMaterial</a> to delete its existing key
 *           material.</p>
 *             </li>
 *             <li>
 *                <p>Call the <a>GetParametersForImport</a> operation to get a public key and
 *           import token set for importing key material. </p>
 *             </li>
 *             <li>
 *                <p>Use the public key in the <a>GetParametersForImport</a> response to encrypt
 *           your key material.</p>
 *             </li>
 *          </ul>
 *          <p> Then, in an <code>ImportKeyMaterial</code> request, you submit your encrypted key
 *       material and import token. When calling this operation, you must specify the following
 *       values:</p>
 *          <ul>
 *             <li>
 *                <p>The key ID or key ARN of the KMS key to associate with the imported key material. Its
 *             <code>Origin</code> must be <code>EXTERNAL</code> and its <code>KeyState</code> must be
 *             <code>PendingImport</code>. You cannot perform this operation on a KMS key in a <a href="kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, or on a KMS
 *           key in a different Amazon Web Services account. To get the <code>Origin</code> and <code>KeyState</code>
 *           of a KMS key, call <a>DescribeKey</a>.</p>
 *             </li>
 *             <li>
 *                <p>The encrypted key material. </p>
 *             </li>
 *             <li>
 *                <p>The import token that <a>GetParametersForImport</a> returned. You must use
 *           a public key and token from the same <code>GetParametersForImport</code> response.</p>
 *             </li>
 *             <li>
 *                <p>Whether the key material expires (<code>ExpirationModel</code>) and, if so, when
 *             (<code>ValidTo</code>). For help with this choice, see <a href="https://docs.aws.amazon.com/en_us/kms/latest/developerguide/importing-keys.html#importing-keys-expiration">Setting an expiration time</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p>If you set an expiration date, KMS deletes the key material from the KMS key on the
 *           specified date, making the KMS key unusable. To use the KMS key in cryptographic
 *           operations again, you must reimport the same key material. However, you can delete and
 *           reimport the key material at any time, including before the key material expires. Each
 *           time you reimport, you can eliminate or reset the expiration time.</p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, the key state of the KMS key changes from
 *         <code>PendingImport</code> to <code>Enabled</code>, and you can use the KMS key in
 *       cryptographic operations.</p>
 *          <p>If this operation fails, use the exception to help determine the problem. If the error is
 *       related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the KMS key
 *       and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html#importing-keys-overview">How To Import Key
 *         Material</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ImportKeyMaterial</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteImportedKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetParametersForImport</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ImportKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ImportKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ImportKeyMaterialRequest
 *   KeyId: "STRING_VALUE", // required
 *   ImportToken: "BLOB_VALUE", // required
 *   EncryptedKeyMaterial: "BLOB_VALUE", // required
 *   ValidTo: new Date("TIMESTAMP"),
 *   ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportKeyMaterialCommandInput - {@link ImportKeyMaterialCommandInput}
 * @returns {@link ImportKeyMaterialCommandOutput}
 * @see {@link ImportKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link ImportKeyMaterialCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link ExpiredImportTokenException} (client fault)
 *  <p>The request was rejected because the specified import token is expired. Use <a>GetParametersForImport</a> to get a new import token and public key, use the new
 *       public key to encrypt the key material, and then try the request again.</p>
 *
 * @throws {@link IncorrectKeyMaterialException} (client fault)
 *  <p>The request was rejected because the key material in the request is, expired, invalid, or
 *       is not the same key material that was previously imported into this KMS key.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link InvalidCiphertextException} (client fault)
 *  <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
 *
 * @throws {@link InvalidImportTokenException} (client fault)
 *  <p>The request was rejected because the provided import token is invalid or is associated
 *       with a different KMS key.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To import key material into a KMS key
 * ```javascript
 * // The following example imports key material into the specified KMS key.
 * const input = {
 *   "EncryptedKeyMaterial": "<binary data>",
 *   "ExpirationModel": "KEY_MATERIAL_DOES_NOT_EXPIRE",
 *   "ImportToken": "<binary data>",
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * await client.send(command);
 * // example id: to-import-key-material-into-a-kms-key-1
 * ```
 *
 * @example To import key material into a KMS key
 * ```javascript
 * // The following example imports key material that expires in 3 days. It might be part of an application that frequently reimports the same key material to comply with business rules or regulations.
 * const input = {
 *   "EncryptedKeyMaterial": "<binary data>",
 *   "ExpirationModel": "KEY_MATERIAL_EXPIRES",
 *   "ImportToken": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "ValidTo": "2023-09-30T00:00:00-00:00"
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * await client.send(command);
 * // example id: to-import-key-material-into-a-kms-key-2
 * ```
 *
 */
export class ImportKeyMaterialCommand extends $Command<
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ImportKeyMaterialCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ImportKeyMaterialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ImportKeyMaterialCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ImportKeyMaterialCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportKeyMaterialCommandOutput> {
    return de_ImportKeyMaterialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
