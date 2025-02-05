// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  DeriveSharedSecretRequest,
  DeriveSharedSecretResponse,
  DeriveSharedSecretResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DeriveSharedSecretCommand, se_DeriveSharedSecretCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeriveSharedSecretCommand}.
 */
export interface DeriveSharedSecretCommandInput extends DeriveSharedSecretRequest {}
/**
 * @public
 *
 * The output of {@link DeriveSharedSecretCommand}.
 */
export interface DeriveSharedSecretCommandOutput extends DeriveSharedSecretResponse, __MetadataBearer {}

/**
 * <p>Derives a shared secret using a key agreement algorithm.</p>
 *          <note>
 *             <p>You must use an asymmetric NIST-recommended elliptic curve (ECC) or SM2 (China Regions only)
 *         KMS key pair with a <code>KeyUsage</code> value of <code>KEY_AGREEMENT</code> to call DeriveSharedSecret.</p>
 *          </note>
 *          <p>DeriveSharedSecret uses the <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-56Ar3.pdf#page=60">Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive</a> (ECDH) to
 *       establish a key agreement between two peers by deriving a shared secret from their elliptic curve
 *       public-private key pairs. You can use the raw shared secret that DeriveSharedSecret returns to derive
 *       a symmetric key that can encrypt and decrypt data that is sent between the two peers, or that can
 *       generate and verify HMACs. KMS recommends that you follow <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-56Cr2.pdf">NIST recommendations for key derivation</a> when using the raw shared secret to derive a
 *       symmetric key.</p>
 *          <p>The following workflow demonstrates how to establish key agreement over an insecure communication
 *       channel using DeriveSharedSecret.</p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <b>Alice</b> calls <a>CreateKey</a> to create an asymmetric
 *          KMS key pair with a <code>KeyUsage</code> value of <code>KEY_AGREEMENT</code>.</p>
 *                <p>The asymmetric KMS key must use a NIST-recommended elliptic curve (ECC) or SM2 (China Regions only) key spec.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Bob</b> creates an elliptic curve key pair.</p>
 *                <p>Bob can call <a>CreateKey</a> to create an asymmetric KMS key
 *          pair or generate a key pair outside of KMS. Bob's key pair must use the same NIST-recommended elliptic curve (ECC)
 *          or SM2 (China Regions ony) curve as Alice.</p>
 *             </li>
 *             <li>
 *                <p>Alice and Bob <b>exchange their public keys</b>
 *          through an insecure communication channel (like the internet).</p>
 *                <p>Use <a>GetPublicKey</a> to download the public key of your asymmetric KMS key pair.</p>
 *                <note>
 *                   <p>KMS strongly recommends verifying that the public key you receive came from the expected
 *            party before using it to derive a shared secret.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Alice</b> calls DeriveSharedSecret.</p>
 *                <p>KMS uses the private key from the KMS key pair generated in <b>Step 1</b>,
 *          Bob's public key, and the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to derive the
 *          shared secret. The private key in your KMS key pair never leaves KMS unencrypted. DeriveSharedSecret
 *          returns the raw shared secret.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Bob</b> uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman
 *          Primitive to calculate the same raw secret using his private key and Alice's public key.</p>
 *             </li>
 *          </ol>
 *          <p>To derive a shared secret you must provide a key agreement algorithm, the private key of the caller's asymmetric NIST-recommended
 *       elliptic curve or SM2 (China Regions only) KMS key pair, and the public key from your peer's NIST-recommended elliptic curve
 *       or SM2 (China Regions only) key pair. The public key can be from another asymmetric KMS key pair or from a key pair generated outside
 *       of KMS, but both key pairs must be on the same elliptic curve.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:DeriveSharedSecret</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPublicKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeriveSharedSecretCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeriveSharedSecretCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KMSClient(config);
 * const input = { // DeriveSharedSecretRequest
 *   KeyId: "STRING_VALUE", // required
 *   KeyAgreementAlgorithm: "ECDH", // required
 *   PublicKey: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 * };
 * const command = new DeriveSharedSecretCommand(input);
 * const response = await client.send(command);
 * // { // DeriveSharedSecretResponse
 * //   KeyId: "STRING_VALUE",
 * //   SharedSecret: new Uint8Array(),
 * //   CiphertextForRecipient: new Uint8Array(),
 * //   KeyAgreementAlgorithm: "ECDH",
 * //   KeyOrigin: "AWS_KMS" || "EXTERNAL" || "AWS_CLOUDHSM" || "EXTERNAL_KEY_STORE",
 * // };
 *
 * ```
 *
 * @param DeriveSharedSecretCommandInput - {@link DeriveSharedSecretCommandInput}
 * @returns {@link DeriveSharedSecretCommandOutput}
 * @see {@link DeriveSharedSecretCommandInput} for command's `input` shape.
 * @see {@link DeriveSharedSecretCommandOutput} for command's `response` shape.
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
 *       <code>KeyUsage</code> must be <code>KEY_AGREEMENT</code>. To find the <code>KeyUsage</code> of a KMS key, use the
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
 * @example To derive a shared secret
 * ```javascript
 * // The following example derives a shared secret using a key agreement algorithm.
 * const input = {
 *   "KeyAgreementAlgorithm": "ECDH",
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "PublicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvH3Yj0wbkLEpUl95Cv1cJVjsVNSjwGq3tCLnzXfhVwVvmzGN8pYj3U8nKwgouaHbBWNJYjP5VutbbkKS4Kv4GojwZBJyHN17kmxo8yTjRmjR15SKIQ8cqRA2uaERMLnpztIXdZp232PQPbWGxDyXYJ0aJ5EFSag"
 * };
 * const command = new DeriveSharedSecretCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyAgreementAlgorithm": "ECDH",
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "KeyOrigin": "AWS_KMS",
 *   "SharedSecret": "MEYCIQCKZLWyTk5runarx6XiAkU9gv3lbwPO/pHa+DXFehzdDwIhANwpsIV2g/9SPWLLsF6p/hiSskuIXMTRwqrMdVKWTMHG"
 * }
 * *\/
 * // example id: to-derive-a-shared-secret-1718381818754
 * ```
 *
 */
export class DeriveSharedSecretCommand extends $Command
  .classBuilder<
    DeriveSharedSecretCommandInput,
    DeriveSharedSecretCommandOutput,
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
  .s("TrentService", "DeriveSharedSecret", {})
  .n("KMSClient", "DeriveSharedSecretCommand")
  .f(void 0, DeriveSharedSecretResponseFilterSensitiveLog)
  .ser(se_DeriveSharedSecretCommand)
  .de(de_DeriveSharedSecretCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeriveSharedSecretRequest;
      output: DeriveSharedSecretResponse;
    };
    sdk: {
      input: DeriveSharedSecretCommandInput;
      output: DeriveSharedSecretCommandOutput;
    };
  };
}
