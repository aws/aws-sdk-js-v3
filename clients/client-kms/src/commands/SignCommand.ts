// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { SignRequest, SignResponse } from "../models/models_0";
import { Sign } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SignCommand}.
 */
export interface SignCommandInput extends SignRequest {}
/**
 * @public
 *
 * The output of {@link SignCommand}.
 */
export interface SignCommandOutput extends SignResponse, __MetadataBearer {}

/**
 * <p>Creates a <a href="https://en.wikipedia.org/wiki/Digital_signature">digital
 *         signature</a> for a message or message digest by using the private key in an asymmetric
 *       signing KMS key. To verify the signature, use the <a>Verify</a> operation, or use
 *       the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Digital signatures are generated and verified by using asymmetric key pair, such as an
 *       RSA, ECC, or ML-DSA pair that is represented by an asymmetric KMS key. The key owner (or an
 *       authorized user) uses their private key to sign a message. Anyone with the public key can
 *       verify that the message was signed with that particular private key and that the message
 *       hasn't changed since it was signed. </p>
 *          <p>To use the <code>Sign</code> operation, provide the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>KeyId</code> parameter to identify an asymmetric KMS key with a
 *             <code>KeyUsage</code> value of <code>SIGN_VERIFY</code>. To get the
 *             <code>KeyUsage</code> value of a KMS key, use the <a>DescribeKey</a>
 *           operation. The caller must have <code>kms:Sign</code> permission on the KMS key.</p>
 *             </li>
 *             <li>
 *                <p>Use the <code>Message</code> parameter to specify the message or message digest to
 *           sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a
 *           hash digest of the message, and then provide the hash digest in the <code>Message</code>
 *           parameter. To indicate whether the message is a full message, a digest, or an ML-DSA
 *           EXTERNAL_MU, use the <code>MessageType</code> parameter.</p>
 *             </li>
 *             <li>
 *                <p>Choose a signing algorithm that is compatible with the KMS key. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>When signing a message, be sure to record the KMS key and the signing algorithm. This
 *         information is required to verify the signature.</p>
 *          </important>
 *          <note>
 *             <p>Best practices recommend that you limit the time during which any signature is
 *         effective. This deters an attack where the actor uses a signed message to establish validity
 *         repeatedly or long after the message is superseded. Signatures do not include a timestamp,
 *         but you can include a timestamp in the signed message to help you detect when its time to
 *         refresh the signature. </p>
 *          </note>
 *          <p>To verify the signature that this operation generates, use the <a>Verify</a>
 *       operation. Or use the <a>GetPublicKey</a> operation to download the public key and
 *       then use the public key to verify the signature outside of KMS. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Sign</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>Verify</a>
 *          </p>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, SignCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, SignCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // SignRequest
 *   KeyId: "STRING_VALUE", // required
 *   Message: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   MessageType: "RAW" || "DIGEST" || "EXTERNAL_MU",
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   SigningAlgorithm: "RSASSA_PSS_SHA_256" || "RSASSA_PSS_SHA_384" || "RSASSA_PSS_SHA_512" || "RSASSA_PKCS1_V1_5_SHA_256" || "RSASSA_PKCS1_V1_5_SHA_384" || "RSASSA_PKCS1_V1_5_SHA_512" || "ECDSA_SHA_256" || "ECDSA_SHA_384" || "ECDSA_SHA_512" || "SM2DSA" || "ML_DSA_SHAKE_256" || "ED25519_SHA_512" || "ED25519_PH_SHA_512", // required
 *   DryRun: true || false,
 * };
 * const command = new SignCommand(input);
 * const response = await client.send(command);
 * // { // SignResponse
 * //   KeyId: "STRING_VALUE",
 * //   Signature: new Uint8Array(),
 * //   SigningAlgorithm: "RSASSA_PSS_SHA_256" || "RSASSA_PSS_SHA_384" || "RSASSA_PSS_SHA_512" || "RSASSA_PKCS1_V1_5_SHA_256" || "RSASSA_PKCS1_V1_5_SHA_384" || "RSASSA_PKCS1_V1_5_SHA_512" || "ECDSA_SHA_256" || "ECDSA_SHA_384" || "ECDSA_SHA_512" || "SM2DSA" || "ML_DSA_SHAKE_256" || "ED25519_SHA_512" || "ED25519_PH_SHA_512",
 * // };
 *
 * ```
 *
 * @param SignCommandInput - {@link SignCommandInput}
 * @returns {@link SignCommandOutput}
 * @see {@link SignCommandInput} for command's `input` shape.
 * @see {@link SignCommandOutput} for command's `response` shape.
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To digitally sign a message digest with an asymmetric KMS key.
 * ```javascript
 * // This operation uses the private key in an asymmetric RSA signing KMS key to generate a digital signature for a message digest. In this example, a large message was hashed and the resulting digest is provided in the Message parameter. To tell KMS not to hash the message again, the MessageType field is set to DIGEST
 * const input = {
 *   KeyId: "alias/RSA_signing_key",
 *   Message: "<message digest to be signed>",
 *   MessageType: "DIGEST",
 *   SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256"
 * };
 * const command = new SignCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   Signature: "<binary data>",
 *   SigningAlgorithm: "RSASSA_PKCS1_V1_5_SHA_256"
 * }
 * *\/
 * ```
 *
 * @example To digitally sign a message with an asymmetric KMS key.
 * ```javascript
 * // This operation uses the private key in an asymmetric elliptic curve (ECC) KMS key to generate a digital signature for a given message.
 * const input = {
 *   KeyId: "alias/ECC_signing_key",
 *   Message: "<message to be signed>",
 *   MessageType: "RAW",
 *   SigningAlgorithm: "ECDSA_SHA_384"
 * };
 * const command = new SignCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   Signature: "<binary data>",
 *   SigningAlgorithm: "ECDSA_SHA_384"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SignCommand extends $Command
  .classBuilder<SignCommandInput, SignCommandOutput, KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes>()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "Sign", {})
  .n("KMSClient", "SignCommand")
  .sc(Sign)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SignRequest;
      output: SignResponse;
    };
    sdk: {
      input: SignCommandInput;
      output: SignCommandOutput;
    };
  };
}
