// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReEncryptRequest, ReEncryptResponse } from "../models/models_0";
import { ReEncrypt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReEncryptCommand}.
 */
export interface ReEncryptCommandInput extends ReEncryptRequest {}
/**
 * @public
 *
 * The output of {@link ReEncryptCommand}.
 */
export interface ReEncryptCommandOutput extends ReEncryptResponse, __MetadataBearer {}

/**
 * Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this operation to change the KMS key under which data is encrypted, such as when you [manually rotate](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys-manually.html) a KMS key or change the KMS key that protects a ciphertext. You can also use it to reencrypt ciphertext under the same KMS key, such as to change the [encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) of a ciphertext.
 *
 * The `ReEncrypt` operation can decrypt ciphertext that was encrypted by using a KMS key in an KMS operation, such as Encrypt or GenerateDataKey. It can also decrypt ciphertext that was encrypted by using the public key of an [asymmetric KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as the [Amazon Web Services Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/) or [Amazon S3 client-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html). These libraries return a ciphertext format that is incompatible with KMS.
 *
 * When you use the `ReEncrypt` operation, you need to provide information for the decrypt operation and the subsequent encrypt operation.
 *
 * - If your ciphertext was encrypted under an asymmetric KMS key, you must use the `SourceKeyId` parameter to identify the KMS key that encrypted the ciphertext. You must also supply the encryption algorithm that was used. This information is required to decrypt the data.
 * - If your ciphertext was encrypted under a symmetric encryption KMS key, the `SourceKeyId` parameter is optional. KMS can get this information from metadata that it adds to the symmetric ciphertext blob. This feature adds durability to your implementation by ensuring that authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost track of the key ID. However, specifying the source KMS key is always recommended as a best practice. When you use the `SourceKeyId` parameter to specify a KMS key, KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the `ReEncrypt` operation fails. This practice ensures that you use the KMS key that you intend.
 * - To reencrypt the data, you must use the `DestinationKeyId` parameter to specify the KMS key that re-encrypts the data after it is decrypted. If the destination KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The algorithm that you choose must be compatible with the KMS key.
 *
 *   > **Important:**
 *   >
 *   > When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.
 *   >
 *   > You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * > **Note:** When using grants with `SourceArn` constraints for `ReEncrypt` operations, the grants on both the source KMS key (for `ReEncryptFrom`) and the destination KMS key (for `ReEncryptTo`) must specify the same `SourceArn` value.
 *
 * **Cross-account use**: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than the caller. To specify a KMS key in a different account, use the [key ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-ARN) or [alias ARN](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-alias-ARN). A short [key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) is also acceptable for the source key when decrypting symmetric ciphertexts, though using a full key ARN is recommended to be more explicit about the intended KMS key.
 *
 * **Required permissions**:
 *
 * - [kms:ReEncryptFrom](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) permission on the source KMS key (key policy)
 * - [kms:ReEncryptTo](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) permission on the destination KMS key (key policy)
 *
 * To permit reencryption from or to a KMS key, include the `"kms:ReEncrypt*"` permission in your [key policy](https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html). This permission is automatically included in the key policy when you use the console to create a KMS key. But you must include it manually when you create a KMS key programmatically or when you use the PutKeyPolicy operation to set a key policy.
 *
 * **Related operations:**
 *
 * - Decrypt
 * - Encrypt
 * - GenerateDataKey
 * - GenerateDataKeyPair
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ReEncryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ReEncryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // ReEncryptRequest
 *   CiphertextBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   SourceEncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SourceKeyId: "STRING_VALUE",
 *   DestinationKeyId: "STRING_VALUE", // required
 *   DestinationEncryptionContext: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SourceEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   DestinationEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   DryRunModifiers: [ // DryRunModifierList
 *     "IGNORE_CIPHERTEXT",
 *   ],
 * };
 * const command = new ReEncryptCommand(input);
 * const response = await client.send(command);
 * // { // ReEncryptResponse
 * //   CiphertextBlob: new Uint8Array(),
 * //   SourceKeyId: "STRING_VALUE",
 * //   KeyId: "STRING_VALUE",
 * //   SourceEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //   DestinationEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //   SourceKeyMaterialId: "STRING_VALUE",
 * //   DestinationKeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReEncryptCommandInput - {@link ReEncryptCommandInput}
 * @returns {@link ReEncryptCommandOutput}
 * @see {@link ReEncryptCommandInput} for command's `input` shape.
 * @see {@link ReEncryptCommandOutput} for command's `response` shape.
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
 * @example To reencrypt data
 * ```javascript
 * // The following example reencrypts data with the specified KMS key.
 * const input = {
 *   CiphertextBlob: "<binary data>",
 *   DestinationKeyId: "0987dcba-09fe-87dc-65ba-ab0987654321"
 * };
 * const command = new ReEncryptCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CiphertextBlob: "<binary data>",
 *   DestinationEncryptionAlgorithm: "SYMMETRIC_DEFAULT",
 *   DestinationKeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6",
 *   KeyId: "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   SourceEncryptionAlgorithm: "SYMMETRIC_DEFAULT",
 *   SourceKeyId: "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   SourceKeyMaterialId: "1c6be7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ReEncryptCommand extends command<ReEncryptCommandInput, ReEncryptCommandOutput>(
  _ep0,
  _mw0,
  "ReEncrypt",
  ReEncrypt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReEncryptRequest;
      output: ReEncryptResponse;
    };
    sdk: {
      input: ReEncryptCommandInput;
      output: ReEncryptCommandOutput;
    };
  };
}
