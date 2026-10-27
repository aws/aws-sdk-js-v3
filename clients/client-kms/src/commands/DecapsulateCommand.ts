// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DecapsulateRequest, DecapsulateResponse } from "../models/models_0";
import { Decapsulate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DecapsulateCommand}.
 */
export interface DecapsulateCommandInput extends DecapsulateRequest {}
/**
 * @public
 *
 * The output of {@link DecapsulateCommand}.
 */
export interface DecapsulateCommandOutput extends DecapsulateResponse, __MetadataBearer {}

/**
 * <p>Recovers the shared secret that was encapsulated with the public key of an ML-KEM KMS key.
 *       Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), specified in <a href="https://csrc.nist.gov/pubs/fips/203/final">FIPS 203</a> on the NIST website, is a
 *       post-quantum algorithm for establishing a shared secret between two parties. For an example
 *       of how two parties establish a shared secret over an insecure channel using ML-KEM, see
 *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/pqkeys.html#mlkem">ML-KEM
 *       keys in KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The Decapsulate operation is not available in China Regions.</p>
 *          <p>
 *             <code>Decapsulate</code> returns the shared secret as a 32-byte value. You can use it directly
 *     as key material, or run it through a key derivation function to derive multiple keys and nonces.</p>
 *          <important>
 *             <p>
 *                <code>Decapsulate</code> returns an <code>InvalidCiphertextException</code> when the
 *           length of the <code>SharedSecretCiphertextBlob</code> is inconsistent with the ML-KEM key
 *           spec. In all other cases, <code>Decapsulate</code> returns a 32-byte pseudo-random
 *           value. This is true even when the <code>SharedSecretCiphertextBlob</code> was created using
 *           a different ML-KEM key or altered from its original value. This behavior is a security
 *           feature called <i>implicit rejection</i> that helps protect against
 *           chosen-ciphertext attacks.</p>
 *             <p>Because a response does not indicate that the ciphertext and key are valid, confirm the
 *           two parties derived the same shared secret before using it.</p>
 *          </important>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decapsulate</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encapsulate</a>
 *                </p>
 *             </li>
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
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DecapsulateCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DecapsulateCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DecapsulateRequest
 *   KeyId: "STRING_VALUE", // required
 *   SharedSecretCiphertextBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   EncapsulationAlgorithm: "ML_KEM", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DecapsulateCommand(input);
 * const response = await client.send(command);
 * // { // DecapsulateResponse
 * //   KeyId: "STRING_VALUE",
 * //   SharedSecret: new Uint8Array(),
 * //   EncapsulationAlgorithm: "ML_KEM",
 * // };
 *
 * ```
 *
 * @param DecapsulateCommandInput - {@link DecapsulateCommandInput}
 * @returns {@link DecapsulateCommandOutput}
 * @see {@link DecapsulateCommandInput} for command's `input` shape.
 * @see {@link DecapsulateCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidCiphertextException} (client fault)
 *  <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
 *          <p>From the <a>Decapsulate</a> operation, the request was rejected because the
 *       length of the <code>SharedSecretCiphertextBlob</code> is inconsistent with the specified ML-KEM
 *       key spec.</p>
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
 *         <code>KeyUsage</code> must be <code>KEY_AGREEMENT</code>. For encapsulating and decapsulating
 *       shared secrets, the <code>KeyUsage</code> must be <code>ENCAPSULATE_DECAPSULATE</code>. To find
 *       the <code>KeyUsage</code> of a KMS key, use the <a>DescribeKey</a> operation.</p>
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
 * @example To recover a shared secret from its encapsulated ciphertext
 * ```javascript
 * // Recovers a shared secret from its encapsulated ciphertext (SharedSecretCiphertextBlob) using the private key in an asymmetric ML-KEM KMS key. Your peer calls Encapsulate to generate the shared secret and ciphertext.
 * const input = {
 *   EncapsulationAlgorithm: "ML_KEM",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   SharedSecretCiphertextBlob: "<binary data>"
 * };
 * const command = new DecapsulateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EncapsulationAlgorithm: "ML_KEM",
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   SharedSecret: "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DecapsulateCommand extends command<DecapsulateCommandInput, DecapsulateCommandOutput>(
  _ep0,
  _mw0,
  "Decapsulate",
  Decapsulate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DecapsulateRequest;
      output: DecapsulateResponse;
    };
    sdk: {
      input: DecapsulateCommandInput;
      output: DecapsulateCommandOutput;
    };
  };
}
