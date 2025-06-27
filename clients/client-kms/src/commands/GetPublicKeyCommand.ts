// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetPublicKeyRequest, GetPublicKeyResponse } from "../models/models_0";
import { de_GetPublicKeyCommand, se_GetPublicKeyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPublicKeyCommand}.
 */
export interface GetPublicKeyCommandInput extends GetPublicKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetPublicKeyCommand}.
 */
export interface GetPublicKeyCommandOutput extends GetPublicKeyResponse, __MetadataBearer {}

/**
 * <p>Returns the public key of an asymmetric KMS key. Unlike the private key of a asymmetric
 *       KMS key, which never leaves KMS unencrypted, callers with <code>kms:GetPublicKey</code>
 *       permission can download the public key of an asymmetric KMS key. You can share the public key
 *       to allow others to encrypt messages and verify signatures outside of KMS.
 *       For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>You do not need to download the public key. Instead, you can use the public key within
 *       KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric KMS key. When you use the
 *       public key within KMS, you benefit from the authentication, authorization, and logging that
 *       are part of every KMS operation. You also reduce of risk of encrypting data that cannot be
 *       decrypted. These features are not effective outside of KMS.</p>
 *          <p>To help you use the public key safely outside of KMS, <code>GetPublicKey</code> returns
 *       important information about the public key in the response, including:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeySpec">KeySpec</a>: The type of key material in the public key, such as
 *             <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption, signing, or deriving a shared
 *           secret.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a>, <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyAgreementAlgorithms">KeyAgreementAlgorithms</a>, or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms, key agreement
 *           algorithms, or signing algorithms for the key.</p>
 *             </li>
 *          </ul>
 *          <p>Although KMS cannot enforce these restrictions on external operations, it is crucial
 *       that you use this information to prevent the public key from being used improperly. For
 *       example, you can prevent a public signing key from being used encrypt data, or prevent a
 *       public key from being used with an encryption algorithm that is not supported by KMS. You
 *       can also avoid errors, such as using the wrong signing algorithm in a verification
 *       operation.</p>
 *          <p>To verify a signature outside of KMS with an SM2 public key (China Regions only), you
 *       must specify the distinguishing ID. By default, KMS uses <code>1234567812345678</code> as
 *       the distinguishing ID. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/offline-operations.html#key-spec-sm-offline-verification">Offline
 *         verification with SM2 key pairs</a>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetPublicKey</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>CreateKey</a>
 *          </p>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetPublicKeyCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetPublicKeyCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // GetPublicKeyRequest
 *   KeyId: "STRING_VALUE", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetPublicKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetPublicKeyResponse
 * //   KeyId: "STRING_VALUE",
 * //   PublicKey: new Uint8Array(),
 * //   CustomerMasterKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2",
 * //   KeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SYMMETRIC_DEFAULT" || "HMAC_224" || "HMAC_256" || "HMAC_384" || "HMAC_512" || "SM2" || "ML_DSA_44" || "ML_DSA_65" || "ML_DSA_87",
 * //   KeyUsage: "SIGN_VERIFY" || "ENCRYPT_DECRYPT" || "GENERATE_VERIFY_MAC" || "KEY_AGREEMENT",
 * //   EncryptionAlgorithms: [ // EncryptionAlgorithmSpecList
 * //     "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //   ],
 * //   SigningAlgorithms: [ // SigningAlgorithmSpecList
 * //     "RSASSA_PSS_SHA_256" || "RSASSA_PSS_SHA_384" || "RSASSA_PSS_SHA_512" || "RSASSA_PKCS1_V1_5_SHA_256" || "RSASSA_PKCS1_V1_5_SHA_384" || "RSASSA_PKCS1_V1_5_SHA_512" || "ECDSA_SHA_256" || "ECDSA_SHA_384" || "ECDSA_SHA_512" || "SM2DSA" || "ML_DSA_SHAKE_256",
 * //   ],
 * //   KeyAgreementAlgorithms: [ // KeyAgreementAlgorithmSpecList
 * //     "ECDH",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPublicKeyCommandInput - {@link GetPublicKeyCommandInput}
 * @returns {@link GetPublicKeyCommandOutput}
 * @see {@link GetPublicKeyCommandInput} for command's `input` shape.
 * @see {@link GetPublicKeyCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
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
 * @example To download the public key of an asymmetric KMS key
 * ```javascript
 * // This example gets the public key of an asymmetric RSA KMS key used for encryption and decryption. The operation returns the key spec, key usage, and encryption or signing algorithms to help you use the public key correctly outside of AWS KMS.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321"
 * };
 * const command = new GetPublicKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomerMasterKeySpec: "RSA_4096",
 *   EncryptionAlgorithms: [
 *     "RSAES_OAEP_SHA_1",
 *     "RSAES_OAEP_SHA_256"
 *   ],
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   KeyUsage: "ENCRYPT_DECRYPT",
 *   PublicKey: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPublicKeyCommand extends $Command
  .classBuilder<
    GetPublicKeyCommandInput,
    GetPublicKeyCommandOutput,
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
  .s("TrentService", "GetPublicKey", {})
  .n("KMSClient", "GetPublicKeyCommand")
  .f(void 0, void 0)
  .ser(se_GetPublicKeyCommand)
  .de(de_GetPublicKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPublicKeyRequest;
      output: GetPublicKeyResponse;
    };
    sdk: {
      input: GetPublicKeyCommandInput;
      output: GetPublicKeyCommandOutput;
    };
  };
}
