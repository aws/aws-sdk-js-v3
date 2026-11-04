// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EncryptRequest, EncryptResponse } from "../models/models_0";
import { Encrypt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EncryptCommand}.
 */
export interface EncryptCommandInput extends EncryptRequest {}
/**
 * @public
 *
 * The output of {@link EncryptCommand}.
 */
export interface EncryptCommandOutput extends EncryptResponse, __MetadataBearer {}

/**
 * Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or asymmetric KMS key with a `KeyUsage` of `ENCRYPT_DECRYPT`.
 *
 * You can use this operation to encrypt small amounts of arbitrary data, such as a personal identifier or database password, or other sensitive information. You don't need to use the `Encrypt` operation to encrypt a data key. The GenerateDataKey and GenerateDataKeyPair operations return a plaintext data key and an encrypted copy of that data key.
 *
 * If you use a symmetric encryption KMS key, you can use an encryption context to add additional security to your encryption operation. If you specify an `EncryptionContext` when encrypting data, you must specify the same encryption context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to decrypt fails with an `InvalidCiphertextException`. For more information, see [Encryption Context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
 *
 * If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The algorithm must be compatible with the KMS key spec.
 *
 * > **Important:**
 * >
 * > When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.
 * >
 * > You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.
 *
 * The maximum size of the data that you can encrypt varies with the type of KMS key and the encryption algorithm that you choose.
 *
 * - Symmetric encryption KMS keys
 *
 *   - `SYMMETRIC_DEFAULT`: 4096 bytes
 * - `RSA_2048`
 *
 *   - `RSAES_OAEP_SHA_1`: 214 bytes
 *   - `RSAES_OAEP_SHA_256`: 190 bytes
 * - `RSA_3072`
 *
 *   - `RSAES_OAEP_SHA_1`: 342 bytes
 *   - `RSAES_OAEP_SHA_256`: 318 bytes
 * - `RSA_4096`
 *
 *   - `RSAES_OAEP_SHA_1`: 470 bytes
 *   - `RSAES_OAEP_SHA_256`: 446 bytes
 * - `SM2PKE`: 1024 bytes (China Regions only)
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:Encrypt](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - Decrypt
 * - GenerateDataKey
 * - GenerateDataKeyPair
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, EncryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EncryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // EncryptRequest
 *   KeyId: "STRING_VALUE", // required
 *   Plaintext: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   EncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   DryRun: true || false,
 * };
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * // { // EncryptResponse
 * //   CiphertextBlob: new Uint8Array(),
 * //   KeyId: "STRING_VALUE",
 * //   EncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * // };
 *
 * ```
 *
 * @param EncryptCommandInput - {@link EncryptCommandInput}
 * @returns {@link EncryptCommandOutput}
 * @see {@link EncryptCommandInput} for command's `input` shape.
 * @see {@link EncryptCommandOutput} for command's `response` shape.
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
 * @example To encrypt data with a symmetric encryption KMS key
 * ```javascript
 * // The following example encrypts data with the specified symmetric encryption KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   Plaintext: "<binary data>"
 * };
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CiphertextBlob: "<binary data>",
 *   EncryptionAlgorithm: "SYMMETRIC_DEFAULT",
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * ```
 *
 * @example To encrypt data with an asymmetric encryption KMS key
 * ```javascript
 * // The following example encrypts data with the specified RSA asymmetric KMS key. When you encrypt with an asymmetric key, you must specify the encryption algorithm.
 * const input = {
 *   EncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *   KeyId: "0987dcba-09fe-87dc-65ba-ab0987654321",
 *   Plaintext: "<binary data>"
 * };
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CiphertextBlob: "<binary data>",
 *   EncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class EncryptCommand extends command<EncryptCommandInput, EncryptCommandOutput>(
  _ep0,
  _mw0,
  "Encrypt",
  Encrypt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EncryptRequest;
      output: EncryptResponse;
    };
    sdk: {
      input: EncryptCommandInput;
      output: EncryptCommandOutput;
    };
  };
}
