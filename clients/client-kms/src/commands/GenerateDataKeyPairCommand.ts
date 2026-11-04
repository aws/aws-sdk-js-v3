// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateDataKeyPairRequest, GenerateDataKeyPairResponse } from "../models/models_0";
import { GenerateDataKeyPair$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateDataKeyPairCommand}.
 */
export interface GenerateDataKeyPairCommandInput extends GenerateDataKeyPairRequest {}
/**
 * @public
 *
 * The output of {@link GenerateDataKeyPairCommand}.
 */
export interface GenerateDataKeyPairCommandOutput extends GenerateDataKeyPairResponse, __MetadataBearer {}

/**
 * Returns a unique asymmetric data key pair for use outside of KMS. This operation returns a plaintext public key, a plaintext private key, and a copy of the private key that is encrypted under the symmetric encryption KMS key you specify. You can use the data key pair to perform asymmetric cryptography and implement digital signatures outside of KMS. The bytes in the keys are random; they are not related to the caller or to the KMS key that is used to encrypt the private key.
 *
 * You can use the public key that `GenerateDataKeyPair` returns to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key with the data. When you are ready to decrypt data or sign a message, you can use the Decrypt operation to decrypt the encrypted private key.
 *
 * To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a custom key store. To get the type and origin of your KMS key, use the DescribeKey operation.
 *
 * Use the `KeyPairSpec` parameter to choose an RSA or Elliptic Curve (ECC) data key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or signing, but not both. However, KMS cannot enforce any restrictions on the use of data key pairs outside of KMS.
 *
 * If you are using the data key pair to encrypt data, or for any operation where you don't immediately need a private key, consider using the GenerateDataKeyPairWithoutPlaintext operation. `GenerateDataKeyPairWithoutPlaintext` returns a plaintext public key and an encrypted private key, but omits the plaintext private key that you need only to decrypt ciphertext or sign a message. Later, when you need to decrypt the data or sign a message, use the Decrypt operation to decrypt the encrypted private key in the data key pair.
 *
 * `GenerateDataKeyPair` returns a unique data key pair for each request. The bytes in the keys are random; they are not related to the caller or the KMS key that is used to encrypt the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in [RFC 5280](https://tools.ietf.org/html/rfc5280). The private key is a DER-encoded PKCS8 PrivateKeyInfo, as specified in [RFC 5958](https://tools.ietf.org/html/rfc5958).
 *
 * > **Note:** For ML-KEM data key pairs, the DER-encoded PKCS8 PrivateKeyInfo contains the private key in seed format. As a result, the length of the private key is the same for all ML-KEM key pair specs.
 *
 * `GenerateDataKeyPair` also supports [Amazon Web Services Nitro Enclaves](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/nitro-enclave.html), which provide an isolated compute environment in Amazon EC2. To call `GenerateDataKeyPair` for an Amazon Web Services Nitro enclave or NitroTPM, use the [Amazon Web Services Nitro Enclaves SDK](https://docs.aws.amazon.com/enclaves/latest/user/developing-applications.html#sdk) or any Amazon Web Services SDK. Use the `Recipient` parameter to provide the attestation document for the attested environment. `GenerateDataKeyPair` returns the public data key and a copy of the private data key encrypted under the specified KMS key, as usual. But instead of a plaintext copy of the private data key (`PrivateKeyPlaintext`), the response includes a copy of the private data key encrypted under the public key from the attestation document (`CiphertextForRecipient`). For information about the interaction between KMS and Amazon Web Services Nitro Enclaves or Amazon Web Services NitroTPM, see [Cryptographic attestation support in KMS](https://docs.aws.amazon.com/kms/latest/developerguide/cryptographic-attestation.html) in the *Key Management Service Developer Guide*.
 *
 * You can use an optional encryption context to add additional security to the encryption operation. If you specify an `EncryptionContext`, you must specify the same encryption context (a case-sensitive exact match) when decrypting the encrypted data key. Otherwise, the request to decrypt fails with an `InvalidCiphertextException`. For more information, see [Encryption Context](https://docs.aws.amazon.com/kms/latest/developerguide/encrypt_context.html) in the *Key Management Service Developer Guide*.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:GenerateDataKeyPair](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - Decrypt
 * - Encrypt
 * - GenerateDataKey
 * - GenerateDataKeyPairWithoutPlaintext
 * - GenerateDataKeyWithoutPlaintext
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyPairCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyPairCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GenerateDataKeyPairRequest
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KeyId: "STRING_VALUE", // required
 *   KeyPairSpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SM2" || "ECC_NIST_EDWARDS25519" || "ML_KEM_512" || "ML_KEM_768" || "ML_KEM_1024", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   Recipient: { // RecipientInfo
 *     KeyEncryptionAlgorithm: "RSAES_OAEP_SHA_256",
 *     AttestationDocument: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   DryRun: true || false,
 * };
 * const command = new GenerateDataKeyPairCommand(input);
 * const response = await client.send(command);
 * // { // GenerateDataKeyPairResponse
 * //   PrivateKeyCiphertextBlob: new Uint8Array(),
 * //   PrivateKeyPlaintext: new Uint8Array(),
 * //   PublicKey: new Uint8Array(),
 * //   KeyId: "STRING_VALUE",
 * //   KeyPairSpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SM2" || "ECC_NIST_EDWARDS25519" || "ML_KEM_512" || "ML_KEM_768" || "ML_KEM_1024",
 * //   CiphertextForRecipient: new Uint8Array(),
 * //   KeyMaterialId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateDataKeyPairCommandInput - {@link GenerateDataKeyPairCommandInput}
 * @returns {@link GenerateDataKeyPairCommandOutput}
 * @see {@link GenerateDataKeyPairCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyPairCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To generate an RSA key pair for encryption and decryption
 * ```javascript
 * // This example generates an RSA data key pair for encryption and decryption. The operation returns a plaintext public key and private key, and a copy of the private key that is encrypted under a symmetric encryption KMS key that you specify.
 * const input = {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyPairSpec: "RSA_3072"
 * };
 * const command = new GenerateDataKeyPairCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyMaterialId: "0b7fd7ddbac6eef27907413567cad8c810e2883dc8a7534067a82ee1142fc1e6",
 *   KeyPairSpec: "RSA_3072",
 *   PrivateKeyCiphertextBlob: "<binary data>",
 *   PrivateKeyPlaintext: "<binary data>",
 *   PublicKey: "<binary data>"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GenerateDataKeyPairCommand extends command<GenerateDataKeyPairCommandInput, GenerateDataKeyPairCommandOutput>(
  _ep0,
  _mw0,
  "GenerateDataKeyPair",
  GenerateDataKeyPair$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateDataKeyPairRequest;
      output: GenerateDataKeyPairResponse;
    };
    sdk: {
      input: GenerateDataKeyPairCommandInput;
      output: GenerateDataKeyPairCommandOutput;
    };
  };
}
