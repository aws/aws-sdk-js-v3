// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ImportKeyMaterialRequest, ImportKeyMaterialResponse } from "../models/models_0";
import { de_ImportKeyMaterialCommand, se_ImportKeyMaterialCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Imports or reimports key material into an existing KMS key that was created without key
 *       material. You can also use this operation to set or update the expiration model and expiration
 *       date of the imported key material.</p>
 *          <p>By default, KMS creates KMS keys with key material that it generates. You can also
 *       generate and import your own key material. For more information about importing key material,
 *       see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key
 *         material</a>.</p>
 *          <p>For asymmetric, HMAC and multi-Region keys, you cannot change the key material after the
 *       initial import. You can import multiple key materials into single-Region, symmetric encryption
 *       keys and rotate the key material on demand using <code>RotateKeyOnDemand</code>.</p>
 *          <p>After you import key material, you can <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#reimport-key-material">reimport
 *         the same key material</a> into that KMS key or, if the key supports on-demand rotation,
 *       import new key material. You can use the <code>ImportType</code> parameter to indicate whether
 *       you are importing new key material or re-importing previously imported key material. You might
 *       reimport key material to replace key material that expired or key material that you deleted.
 *       You might also reimport key material to change the expiration model or expiration date of the
 *       key material.</p>
 *          <p>Each time you import key material into KMS, you can determine whether
 *         (<code>ExpirationModel</code>) and when (<code>ValidTo</code>) the key material expires. To
 *       change the expiration of your key material, you must import it again, either by calling
 *         <code>ImportKeyMaterial</code> or using the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-import-key-material-console">import features</a> of the KMS console.</p>
 *          <p>Before you call <code>ImportKeyMaterial</code>, complete these steps:</p>
 *          <ul>
 *             <li>
 *                <p>Create or identify a KMS key with <code>EXTERNAL</code> origin, which indicates that
 *           the KMS key is designed for imported key material. </p>
 *                <p>To create a new KMS key for imported key material, call the <a>CreateKey</a> operation with an <code>Origin</code> value of <code>EXTERNAL</code>. You can create a
 *           symmetric encryption KMS key, HMAC KMS key, asymmetric encryption KMS key, asymmetric key
 *           agreement key, or asymmetric signing KMS key. You can also import key material into a
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any supported type. However, you can't import key material
 *           into a KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key store</a>.</p>
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
 *             <code>PendingImport</code>. You cannot perform this operation on a KMS key in a
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key store</a>, or on a KMS key in a different Amazon Web Services account. To get the
 *             <code>Origin</code> and <code>KeyState</code> of a KMS key, call <a>DescribeKey</a>.</p>
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
 *             (<code>ValidTo</code>). For help with this choice, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#importing-keys-expiration">Setting an expiration time</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *                <p>If you set an expiration date, KMS deletes the key material from the KMS key on the
 *           specified date, making the KMS key unusable. To use the KMS key in cryptographic
 *           operations again, you must reimport the same key material. However, you can delete and
 *           reimport the key material at any time, including before the key material expires. Each
 *           time you reimport, you can eliminate or reset the expiration time.</p>
 *             </li>
 *          </ul>
 *          <p>When this operation is successful, the key state of the KMS key changes from
 *         <code>PendingImport</code> to <code>Enabled</code>, and you can use the KMS key in
 *       cryptographic operations. For single-Region, symmetric encryption keys, you will need to
 *       import all of the key materials associated with the KMS key to change its state to
 *         <code>Enabled</code>. Use the <code>ListKeyRotations</code> operation to list the ID and
 *       import state of each key material associated with a KMS key.</p>
 *          <p>If this operation fails, use the exception to help determine the problem. If the error is
 *       related to the key material, the import token, or wrapping key, use <a>GetParametersForImport</a> to get a new public key and import token for the KMS key
 *       and repeat the import procedure. For help, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-conceptual.html">Create a KMS key with imported key
 *         material</a> in the <i>Key Management Service Developer Guide</i>.</p>
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
 *             <li>
 *                <p>
 *                   <a>ListKeyRotations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RotateKeyOnDemand</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ImportKeyMaterialCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ImportKeyMaterialCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ImportKeyMaterialRequest
 *   KeyId: "STRING_VALUE", // required
 *   ImportToken: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   EncryptedKeyMaterial: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ValidTo: new Date("TIMESTAMP"),
 *   ExpirationModel: "KEY_MATERIAL_EXPIRES" || "KEY_MATERIAL_DOES_NOT_EXPIRE",
 *   ImportType: "NEW_KEY_MATERIAL" || "EXISTING_KEY_MATERIAL",
 *   KeyMaterialDescription: "STRING_VALUE",
 *   KeyMaterialId: "STRING_VALUE",
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // { // ImportKeyMaterialResponse
 * //   KeyId: "STRING_VALUE",
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
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
 *       does not meet expectations. For example, it is not the same key material that was previously
 *       imported or KMS expected new key material but the key material being imported is already
 *       associated with the KMS key.</p>
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
 *
 * @example To import key material into a KMS key
 * ```javascript
 * // The following example imports key material into the specified KMS key.
 * const input = {
 *   EncryptedKeyMaterial: "<binary data>",
 *   ExpirationModel: "KEY_MATERIAL_DOES_NOT_EXPIRE",
 *   ImportToken: "<binary data>",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new ImportKeyMaterialCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ImportKeyMaterialCommand extends $Command
  .classBuilder<
    ImportKeyMaterialCommandInput,
    ImportKeyMaterialCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "ImportKeyMaterial", {})
  .n("KMSClient", "ImportKeyMaterialCommand")
  .f(void 0, void 0)
  .ser(se_ImportKeyMaterialCommand)
  .de(de_ImportKeyMaterialCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportKeyMaterialRequest;
      output: ImportKeyMaterialResponse;
    };
    sdk: {
      input: ImportKeyMaterialCommandInput;
      output: ImportKeyMaterialCommandOutput;
    };
  };
}
