// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SignRequest, SignResponse } from "../models/models_0";
import { Sign$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a [digital signature](https://en.wikipedia.org/wiki/Digital_signature) for a message or message digest by using the private key in an asymmetric signing KMS key. To verify the signature, use the Verify operation, or use the public key in the same asymmetric KMS key outside of KMS. For information about asymmetric KMS keys, see [Asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
 *
 * Digital signatures are generated and verified by using asymmetric key pair, such as an RSA, ECC, or ML-DSA pair that is represented by an asymmetric KMS key. The key owner (or an authorized user) uses their private key to sign a message. Anyone with the public key can verify that the message was signed with that particular private key and that the message hasn't changed since it was signed.
 *
 * To use the `Sign` operation, provide the following information:
 *
 * - Use the `KeyId` parameter to identify an asymmetric KMS key with a `KeyUsage` value of `SIGN_VERIFY`. To get the `KeyUsage` value of a KMS key, use the DescribeKey operation. The caller must have `kms:Sign` permission on the KMS key.
 * - Use the `Message` parameter to specify the message or message digest to sign. You can submit messages of up to 4096 bytes. To sign a larger message, generate a hash digest of the message, and then provide the hash digest in the `Message` parameter. To indicate whether the message is a full message, a digest, or an ML-DSA EXTERNAL_MU, use the `MessageType` parameter.
 * - Choose a signing algorithm that is compatible with the KMS key.
 *
 * > **Important:** When signing a message, be sure to record the KMS key and the signing algorithm. This information is required to verify the signature.
 *
 * > **Note:** Best practices recommend that you limit the time during which any signature is effective. This deters an attack where the actor uses a signed message to establish validity repeatedly or long after the message is superseded. Signatures do not include a timestamp, but you can include a timestamp in the signed message to help you detect when its time to refresh the signature.
 *
 * To verify the signature that this operation generates, use the Verify operation. Or use the GetPublicKey operation to download the public key and then use the public key to verify the signature outside of KMS.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:Sign](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations**: Verify
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
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
export class SignCommand extends command<SignCommandInput, SignCommandOutput>(
  _ep0,
  _mw0,
  "Sign",
  Sign$
) {
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
