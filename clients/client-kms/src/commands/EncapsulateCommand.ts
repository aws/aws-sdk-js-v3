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
 * Generates a shared secret and its encapsulated (ciphertext) form using the public key of an ML-KEM KMS key pair. Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), specified in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) on the NIST website, is a post-quantum algorithm for establishing a shared secret between two parties.
 *
 * For an example of how two parties establish a shared secret over an insecure channel using ML-KEM, see [ML-KEM keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/pqkeys.html#mlkem) in the *Key Management Service Developer Guide*.
 *
 * The Encapsulate operation is not available in China Regions.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:Encapsulate](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - Decapsulate
 * - DeriveSharedSecret
 * - CreateKey
 * - GetPublicKey
 * - DescribeKey
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
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
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link DisabledException} (client fault)
 *
 * The request was rejected because the specified KMS key is not enabled.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was rejected because the DryRun parameter was specified.
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *
 * The request was rejected because the specified grant token is not valid.
 *
 * @throws {@link InvalidKeyUsageException} (client fault)
 *
 * The request was rejected for one of the following reasons:
 *
 * - The `KeyUsage` value of the KMS key is incompatible with the API operation.
 * - The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key `(KeySpec`).
 *
 * For encrypting, decrypting, re-encrypting, and generating data keys, the `KeyUsage` must be `ENCRYPT_DECRYPT`. For signing and verifying messages, the `KeyUsage` must be `SIGN_VERIFY`. For generating and verifying message authentication codes (MACs), the `KeyUsage` must be `GENERATE_VERIFY_MAC`. For deriving key agreement secrets, the `KeyUsage` must be `KEY_AGREEMENT`. For encapsulating and decapsulating shared secrets, the `KeyUsage` must be `ENCAPSULATE_DECAPSULATE`. To find the `KeyUsage` of a KMS key, use the DescribeKey operation.
 *
 * To find the encryption or signing algorithms supported for a particular KMS key, use the DescribeKey operation.
 *
 * @throws {@link KeyUnavailableException} (server fault)
 *
 * The request was rejected because the specified KMS key was not available. You can retry the request.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * This exceptions means one of the following:
 *
 * - The key state of the KMS key is not compatible with the operation.
 *
 *   To find the key state, use the DescribeKey operation. For more information about which key states are compatible with each KMS operation, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the **Key Management Service Developer Guide** .
 * - For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
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
