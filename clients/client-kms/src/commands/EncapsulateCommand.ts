// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EncapsulateRequest, EncapsulateResponse } from "../models/models_0";
import { Encapsulate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EncapsulateCommand}.
 */
export interface EncapsulateCommandInput extends EncapsulateRequest {}
/**
 * @public
 *
 * The output of {@link EncapsulateCommand}.
 */
export interface EncapsulateCommandOutput extends EncapsulateResponse, __MetadataBearer {}

/**
 * <p>Generates a shared secret and its encapsulated (ciphertext) form using the public key of
 *       an ML-KEM KMS key pair. Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), specified in <a href="https://csrc.nist.gov/pubs/fips/203/final">FIPS 203</a> on the NIST website, is a
 *         post-quantum algorithm for establishing a shared secret between two parties.</p>
 *          <p>For an example of how two parties establish a shared secret over an insecure channel using
 *       ML-KEM, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/pqkeys.html#mlkem">ML-KEM keys in
 *         KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The Encapsulate operation is not available in China Regions.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Encapsulate</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Decapsulate</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeriveSharedSecret</a>
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
 * import { KMSClient, EncapsulateCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EncapsulateCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // EncapsulateRequest
 *   KeyId: "STRING_VALUE", // required
 *   EncapsulationAlgorithm: "ML_KEM", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new EncapsulateCommand(input);
 * const response = await client.send(command);
 * // { // EncapsulateResponse
 * //   KeyId: "STRING_VALUE",
 * //   SharedSecret: new Uint8Array(),
 * //   SharedSecretCiphertextBlob: new Uint8Array(),
 * //   EncapsulationAlgorithm: "ML_KEM",
 * // };
 *
 * ```
 *
 * @param EncapsulateCommandInput - {@link EncapsulateCommandInput}
 * @returns {@link EncapsulateCommandOutput}
 * @see {@link EncapsulateCommandInput} for command's `input` shape.
 * @see {@link EncapsulateCommandOutput} for command's `response` shape.
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
 * @example To generate a shared secret and its encapsulated ciphertext
 * ```javascript
 * // Generates a shared secret and its encapsulated ciphertext (SharedSecretCiphertextBlob) using the public key in an asymmetric ML-KEM KMS key. Send the ciphertext to your peer, who calls Decapsulate to recover the same shared secret.
 * const input = {
 *   EncapsulationAlgorithm: "ML_KEM",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new EncapsulateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EncapsulationAlgorithm: "ML_KEM",
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   SharedSecret: "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8=",
 *   SharedSecretCiphertextBlob: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class EncapsulateCommand extends command<EncapsulateCommandInput, EncapsulateCommandOutput>(
  _ep0,
  _mw0,
  "Encapsulate",
  Encapsulate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EncapsulateRequest;
      output: EncapsulateResponse;
    };
    sdk: {
      input: EncapsulateCommandInput;
      output: EncapsulateCommandOutput;
    };
  };
}
