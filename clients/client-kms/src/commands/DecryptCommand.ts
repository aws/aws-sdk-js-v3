// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DecryptRequest, DecryptResponse } from "../models/models_0";
import { Decrypt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DecryptCommand}.
 */
export interface DecryptCommandInput extends DecryptRequest {}
/**
 * @public
 *
 * The output of {@link DecryptCommand}.
 */
export interface DecryptCommandOutput extends DecryptResponse, __MetadataBearer {}

/**
 * Decrypts ciphertext that was encrypted by a KMS key using any of the following operations:
 *
 * - Encrypt
 * - GenerateDataKey
 * - GenerateDataKeyPair
 * - GenerateDataKeyWithoutPlaintext
 * - GenerateDataKeyPairWithoutPlaintext
 *
 * You can use this operation to decrypt ciphertext that was encrypted under a symmetric encryption KMS key or an asymmetric encryption KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption algorithm that was used to encrypt the ciphertext. For information about asymmetric KMS keys, see [Asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
 *
 * The `Decrypt` operation also decrypts ciphertext that was encrypted outside of KMS by the public key in an KMS asymmetric KMS key. However, it cannot decrypt symmetric ciphertext produced by other libraries, such as the [Amazon Web Services Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/) or [Amazon S3 client-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html). These libraries return a ciphertext format that is incompatible with KMS.
 *
 * If the ciphertext was encrypted under a symmetric encryption KMS key, the `KeyId` parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the KMS key is always recommended as a best practice. When you use the `KeyId` parameter to specify a KMS key, KMS only uses the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the `Decrypt` operation fails. This practice ensures that you use the KMS key that you intend.
 *
 * Whenever possible, use key policies to give users permission to call the `Decrypt` operation on a particular KMS key, instead of using IAM policies. Otherwise, you might create an IAM policy that gives the user `Decrypt` permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy for `Decrypt` permissions, limit the user to particular KMS keys or particular trusted accounts. For details, see [Best practices for IAM policies](https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices) in the *Key Management Service Developer Guide*.
 *
 * `Decrypt` also supports [Amazon Web Services Nitro Enclaves](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html) and NitroTPM, which provide attested environments in Amazon EC2. To call `Decrypt` for a Nitro enclave or NitroTPM, use the [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) or any Amazon Web Services SDK. Use the `Recipient` parameter to provide the attestation document for the attested environment. Instead of the plaintext data, the response includes the plaintext data encrypted with the public key from the attestation document (`CiphertextForRecipient`). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To specify a KMS key in a different Amazon Web Services account, use the [key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) or [alias ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-alias-ARN). A short [key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) is also acceptable when decrypting symmetric ciphertexts, though using a full key ARN is recommended to be more explicit about the intended KMS key.
 *
 * **Required permissions**: [kms:Decrypt](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - Encrypt
 * - GenerateDataKey
 * - GenerateDataKeyPair
 * - ReEncrypt
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DecryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DecryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // DecryptRequest
 *   CiphertextBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   KeyId: "STRING_VALUE",
 *   EncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   DryRun: true || false,
 *   DryRunModifiers: [ // DryRunModifierList
 *     "IGNORE_CIPHERTEXT",
 *   ],
 * };
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * // { // DecryptResponse
 * //   KeyId: "STRING_VALUE",
 * //   Plaintext: new Uint8Array(),
 * //   EncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //   CiphertextForRecipient: new Uint8Array(),
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DecryptCommandInput - {@link DecryptCommandInput}
 * @returns {@link DecryptCommandOutput}
 * @see {@link DecryptCommandInput} for command's `input` shape.
 * @see {@link DecryptCommandOutput} for command's `response` shape.
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
 * @throws {@link IncorrectKeyException} (client fault)
 *
 * The request was rejected because the specified KMS key cannot decrypt the data. The `KeyId` in a Decrypt request and the `SourceKeyId` in a ReEncrypt request must identify the same KMS key that was used to encrypt the ciphertext.
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
 * @example To decrypt data with an asymmetric encryption KMS key
 * ```javascript
 * // The following example decrypts data that was encrypted with an asymmetric encryption KMS key. When the KMS encryption key is asymmetric, you must specify the KMS key ID and the encryption algorithm that was used to encrypt the data.
 * const input = {
 *   CiphertextBlob: "<binary data>",
 *   EncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *   KeyId: "0987dcba-09fe-87dc-65ba-ab0987654321"
 * };
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   Plaintext: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @example To decrypt data with a symmetric encryption KMS key
 * ```javascript
 * // The following example decrypts data that was encrypted with a symmetric encryption KMS key. The KeyId is not required when decrypting with a symmetric encryption key, but it is a best practice.
 * const input = {
 *   CiphertextBlob: "<binary data>",
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EncryptionAlgorithm: "SYMMETRIC_DEFAULT",
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6",
 *   Plaintext: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DecryptCommand extends command<DecryptCommandInput, DecryptCommandOutput>(
  _ep0,
  _mw0,
  "Decrypt",
  Decrypt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DecryptRequest;
      output: DecryptResponse;
    };
    sdk: {
      input: DecryptCommandInput;
      output: DecryptCommandOutput;
    };
  };
}
