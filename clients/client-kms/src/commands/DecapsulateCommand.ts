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
 * Recovers the shared secret that was encapsulated with the public key of an ML-KEM KMS key. Module-Lattice-Based Key-Encapsulation Mechanism (ML-KEM), specified in [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final) on the NIST website, is a post-quantum algorithm for establishing a shared secret between two parties. For an example of how two parties establish a shared secret over an insecure channel using ML-KEM, see [ML-KEM keys in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/pqkeys.html#mlkem) in the *Key Management Service Developer Guide*.
 *
 * The Decapsulate operation is not available in China Regions.
 *
 * `Decapsulate` returns the shared secret as a 32-byte value. You can use it directly as key material, or run it through a key derivation function to derive multiple keys and nonces.
 *
 * > **Important:**
 * >
 * > `Decapsulate` returns an `InvalidCiphertextException` when the length of the `SharedSecretCiphertextBlob` is inconsistent with the ML-KEM key spec. In all other cases, `Decapsulate` returns a 32-byte pseudo-random value. This is true even when the `SharedSecretCiphertextBlob` was created using a different ML-KEM key or altered from its original value. This behavior is a security feature called *implicit rejection* that helps protect against chosen-ciphertext attacks.
 * >
 * > Because a response does not indicate that the ciphertext and key are valid, confirm the two parties derived the same shared secret before using it.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:Decapsulate](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - Encapsulate
 * - CreateKey
 * - GetPublicKey
 * - DescribeKey
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
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
 * @throws {@link InvalidCiphertextException} (client fault)
 *
 * From the Decrypt or ReEncrypt operation, the request was rejected because the specified ciphertext, or additional authenticated data incorporated into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise invalid.
 *
 * From the ImportKeyMaterial operation, the request was rejected because KMS could not decrypt the encrypted (wrapped) key material.
 *
 * From the Decapsulate operation, the request was rejected because the length of the `SharedSecretCiphertextBlob` is inconsistent with the specified ML-KEM key spec.
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
