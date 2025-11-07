// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateDataKeyPairRequest,
  GenerateDataKeyPairResponse,
  GenerateDataKeyPairResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GenerateDataKeyPairCommand, se_GenerateDataKeyPairCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateDataKeyPairCommand}.
 */
export interface GenerateDataKeyPairCommandInput extends GenerateDataKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link GenerateDataKeyPairCommand}.
 */
export interface GenerateDataKeyPairCommandOutput extends GenerateDataKeyPairResponse, __MetadataBearer {}

/**
 * <p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns
 *       a plaintext public key, a plaintext private key, and a copy of the private key that is
 *       encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to
 *       perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes
 *       in the keys are random; they are not related to the caller or to the KMS key that is used to
 *       encrypt the private key. </p>
 *          <p>You can use the public key that <code>GenerateDataKeyPair</code> returns to encrypt data
 *       or verify a signature outside of KMS. Then, store the encrypted private key with the data.
 *       When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *          <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt
 *       the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a
 *       custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p>
 *          <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data
 *       key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that
 *       you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or
 *       signing, but not both. However, KMS cannot enforce any restrictions on the use of data key
 *       pairs outside of KMS.</p>
 *          <p>If you are using the data key pair to encrypt data, or for any operation where you don't
 *       immediately need a private key, consider using the <a>GenerateDataKeyPairWithoutPlaintext</a> operation.
 *         <code>GenerateDataKeyPairWithoutPlaintext</code> returns a plaintext public key and an
 *       encrypted private key, but omits the plaintext private key that you need only to decrypt
 *       ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use
 *       the <a>Decrypt</a> operation to decrypt the encrypted private key in the data key
 *       pair.</p>
 *          <p>
 *             <code>GenerateDataKeyPair</code> returns a unique data key pair for each request. The
 *       bytes in the keys are random; they are not related to the caller or the KMS key that is used
 *       to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as
 *       specified in <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>. The private
 *       key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in <a href="https://tools.ietf.org/html/rfc5958">RFC 5958</a>.</p>
 *          <p>
 *             <code>GenerateDataKeyPair</code> also supports <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html">Amazon Web Services Nitro Enclaves</a>, which provide an
 *       isolated compute environment in Amazon EC2. To call <code>GenerateDataKeyPair</code> for an Amazon Web Services
 *       Nitro enclave or NitroTPM, use the <a href="https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk">Amazon Web Services Nitro Enclaves SDK</a> or any Amazon Web Services SDK. Use the
 *         <code>Recipient</code> parameter to provide the attestation document for the attested
 *       environment. <code>GenerateDataKeyPair</code> returns the public data key and a copy of the
 *       private data key encrypted under the specified KMS key, as usual. But instead of a plaintext
 *       copy of the private data key (<code>PrivateKeyPlaintext</code>), the response includes a copy
 *       of the private data key encrypted under the public key from the attestation document
 *         (<code>CiphertextForRecipient</code>). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html">Cryptographic attestation support in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>You can use an optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html">Encryption Context</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPair</a> (key policy)</p>
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
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyPairCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyPairCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GenerateDataKeyPairRequest
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KeyId: "STRING_VALUE", // required
 *   KeyPairSpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SM2" || "ECC_NIST_EDWARDS25519", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   DryRun: true || false,
 * };
 * const command = new GenerateDataKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // GenerateDataKeyPairResponse
 * //   PrivateKeyCiphertextBlob: new Uint8Array(),
 * //   PrivateKeyPlaintext: new Uint8Array(),
 * //   PublicKey: new Uint8Array(),
 * //   KeyId: "STRING_VALUE",
 * //   KeyPairSpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SM2" || "ECC_NIST_EDWARDS25519",
 * //   CiphertextForRecipient: new Uint8Array(),
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateDataKeyPairCommandInput - {@link GenerateDataKeyPairCommandInput}
 * @returns {@link GenerateDataKeyPairCommandOutput}
 * @see {@link GenerateDataKeyPairCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyPairCommandOutput} for command's `response` shape.
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
 *         <code>GENERATE_VERIFY_MAC</code>. For deriving key agreement secrets, the
 *         <code>KeyUsage</code> must be <code>KEY_AGREEMENT</code>. To find the <code>KeyUsage</code>
 *       of a KMS key, use the <a>DescribeKey</a> operation.</p>
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To generate an RSA key pair for encryption and decryption
 * ```javascript
 * // This example generates an RSA data key pair for encryption and decryption. The operation returns a plaintext public key and private key, and a copy of the private key that is encrypted under a symmetric encryption KMS key that you specify.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyPairSpec: "RSA_3072"
 * };
 * const command = new GenerateDataKeyPairCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6",
 *   KeyPairSpec: "RSA_3072",
 *   PrivateKeyCiphertextBlob: "<binary data>",
 *   PrivateKeyPlaintext: "<binary data>",
 *   PublicKey: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateDataKeyPairCommand extends $Command
  .classBuilder<
    GenerateDataKeyPairCommandInput,
    GenerateDataKeyPairCommandOutput,
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
  .s("TrentService", "GenerateDataKeyPair", {})
  .n("KMSClient", "GenerateDataKeyPairCommand")
  .f(void 0, GenerateDataKeyPairResponseFilterSensitiveLog)
  .ser(se_GenerateDataKeyPairCommand)
  .de(de_GenerateDataKeyPairCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateDataKeyPairRequest;
      output: GenerateDataKeyPairResponse;
    };
    sdk: {
      input: GenerateDataKeyPairCommandInput;
      output: GenerateDataKeyPairCommandOutput;
    };
  };
}
