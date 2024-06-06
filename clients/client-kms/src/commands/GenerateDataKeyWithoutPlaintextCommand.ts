// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyWithoutPlaintextRequest, GenerateDataKeyWithoutPlaintextResponse } from "../models/models_0";
import {
  de_GenerateDataKeyWithoutPlaintextCommand,
  se_GenerateDataKeyWithoutPlaintextCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateDataKeyWithoutPlaintextCommand}.
 */
export interface GenerateDataKeyWithoutPlaintextCommandInput extends GenerateDataKeyWithoutPlaintextRequest {}
/**
 * @public
 *
 * The output of {@link GenerateDataKeyWithoutPlaintextCommand}.
 */
export interface GenerateDataKeyWithoutPlaintextCommandOutput
  extends GenerateDataKeyWithoutPlaintextResponse,
    __MetadataBearer {}

/**
 * <p>Returns a unique symmetric data key for use outside of KMS. This operation returns a
 *       data key that is encrypted under a symmetric encryption KMS key that you specify. The bytes in
 *       the key are random; they are not related to the caller or to the KMS key.</p>
 *          <p>
 *             <code>GenerateDataKeyWithoutPlaintext</code> is identical to the <a>GenerateDataKey</a> operation except that it does not return a plaintext copy of the
 *       data key. </p>
 *          <p>This operation is useful for systems that need to encrypt data at some point, but not
 *       immediately. When you need to encrypt the data, you call the <a>Decrypt</a>
 *       operation on the encrypted copy of the key.</p>
 *          <p>It's also useful in distributed systems with different levels of trust. For example, you
 *       might store encrypted data in containers. One component of your system creates new containers
 *       and stores an encrypted data key with each container. Then, a different component puts the
 *       data into the containers. That component first decrypts the data key, uses the plaintext data
 *       key to encrypt data, puts the encrypted data into the container, and then destroys the
 *       plaintext data key. In this system, the component that creates the containers never sees the
 *       plaintext data key.</p>
 *          <p>To request an asymmetric data key pair, use the <a>GenerateDataKeyPair</a> or
 *         <a>GenerateDataKeyPairWithoutPlaintext</a> operations.</p>
 *          <p>To generate a data key, you must specify the symmetric encryption KMS key that is used to
 *       encrypt the data key. You cannot use an asymmetric KMS key or a key in a custom key store to
 *       generate a data key. To get the type of your KMS key, use the <a>DescribeKey</a>
 *       operation.</p>
 *          <p>You must also specify the length of the data key. Use either the <code>KeySpec</code> or
 *         <code>NumberOfBytes</code> parameters (but not both). For 128-bit and 256-bit data keys, use
 *       the <code>KeySpec</code> parameter.</p>
 *          <p>To generate an SM4 data key (China Regions only), specify a <code>KeySpec</code> value of
 *         <code>AES_128</code> or <code>NumberOfBytes</code> value of <code>16</code>. The symmetric
 *       encryption key used in China Regions to encrypt your data key is an SM4 encryption key.</p>
 *          <p>If the operation succeeds, you will find the encrypted copy of the data key in the
 *         <code>CiphertextBlob</code> field.</p>
 *          <p>You can use an optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyWithoutPlaintext</a> (key
 *       policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyWithoutPlaintextCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyWithoutPlaintextCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // GenerateDataKeyWithoutPlaintextRequest
 *   KeyId: "STRING_VALUE", // required
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KeySpec: "AES_256" || "AES_128",
 *   NumberOfBytes: Number("int"),
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new GenerateDataKeyWithoutPlaintextCommand(input);
 * const response = await client.send(command);
 * // { // GenerateDataKeyWithoutPlaintextResponse
 * //   CiphertextBlob: new Uint8Array(),
 * //   KeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateDataKeyWithoutPlaintextCommandInput - {@link GenerateDataKeyWithoutPlaintextCommandInput}
 * @returns {@link GenerateDataKeyWithoutPlaintextCommandOutput}
 * @see {@link GenerateDataKeyWithoutPlaintextCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyWithoutPlaintextCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p> The request was rejected because the DryRun parameter was specified. </p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
 *
 * @throws {@link InvalidKeyUsageException} (client fault)
 *  <p>The request was rejected for one of the following reasons: </p>
 *          <ul>
 *             <li>
 *                <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *           incompatible with the type of key material in the KMS key <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying
 *       messages, the <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. For generating and
 *       verifying message authentication codes (MACs), the <code>KeyUsage</code> must be
 *         <code>GENERATE_VERIFY_MAC</code>. To find the <code>KeyUsage</code> of a KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *
 * @throws {@link KeyUnavailableException} (server fault)
 *  <p>The request was rejected because the specified KMS key was not available. You can retry
 *       the request.</p>
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @public
 * @example To generate an encrypted data key
 * ```javascript
 * // The following example generates an encrypted copy of a 256-bit symmetric data encryption key (data key). The data key is encrypted with the specified KMS key.
 * const input = {
 *   "KeyId": "alias/ExampleAlias",
 *   "KeySpec": "AES_256"
 * };
 * const command = new GenerateDataKeyWithoutPlaintextCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextBlob": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * // example id: to-generate-an-encrypted-data-key-1478914121134
 * ```
 *
 */
export class GenerateDataKeyWithoutPlaintextCommand extends $Command
  .classBuilder<
    GenerateDataKeyWithoutPlaintextCommandInput,
    GenerateDataKeyWithoutPlaintextCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "GenerateDataKeyWithoutPlaintext", {})
  .n("KMSClient", "GenerateDataKeyWithoutPlaintextCommand")
  .f(void 0, void 0)
  .ser(se_GenerateDataKeyWithoutPlaintextCommand)
  .de(de_GenerateDataKeyWithoutPlaintextCommand)
  .build() {}
