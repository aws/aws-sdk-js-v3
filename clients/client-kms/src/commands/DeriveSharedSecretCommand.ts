// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeriveSharedSecretRequest, DeriveSharedSecretResponse } from "../models/models_0";
import { DeriveSharedSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Derives a shared secret using a key agreement algorithm.
 *
 * > **Note:** You must use an asymmetric NIST-standard elliptic curve (ECC) or SM2 (China Regions only) KMS key pair with a `KeyUsage` value of `KEY_AGREEMENT` to call DeriveSharedSecret.
 *
 * DeriveSharedSecret uses the [Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-56Ar3.pdf#page=60) (ECDH) to establish a key agreement between two peers by deriving a shared secret from their elliptic curve public-private key pairs. You can use the raw shared secret that DeriveSharedSecret returns to derive a symmetric key that can encrypt and decrypt data that is sent between the two peers, or that can generate and verify HMACs. KMS recommends that you follow [NIST recommendations for key derivation](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-56Cr2.pdf) when using the raw shared secret to derive a symmetric key.
 *
 * The following workflow demonstrates how to establish key agreement over an insecure communication channel using DeriveSharedSecret.
 *
 * 1. **Alice** calls CreateKey to create an asymmetric KMS key pair with a `KeyUsage` value of `KEY_AGREEMENT`.
 *
 *    The asymmetric KMS key must use a NIST-standard elliptic curve (ECC) or SM2 (China Regions only) key spec.
 * 2. **Bob** creates an elliptic curve key pair.
 *
 *    Bob can call CreateKey to create an asymmetric KMS key pair or generate a key pair outside of KMS. Bob's key pair must use the same NIST-standard elliptic curve (ECC) or SM2 (China Regions ony) curve as Alice.
 * 3. Alice and Bob **exchange their public keys** through an insecure communication channel (like the internet).
 *
 *    Use GetPublicKey to download the public key of your asymmetric KMS key pair.
 *
 *    > **Note:** KMS strongly recommends verifying that the public key you receive came from the expected party before using it to derive a shared secret.
 * 4. **Alice** calls DeriveSharedSecret.
 *
 *    KMS uses the private key from the KMS key pair generated in **Step 1**, Bob's public key, and the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to derive the shared secret. The private key in your KMS key pair never leaves KMS unencrypted. DeriveSharedSecret returns the raw shared secret.
 * 5. **Bob** uses the Elliptic Curve Cryptography Cofactor Diffie-Hellman Primitive to calculate the same raw secret using his private key and Alice's public key.
 *
 * To derive a shared secret you must provide a key agreement algorithm, the private key of the caller's asymmetric NIST-standard elliptic curve or SM2 (China Regions only) KMS key pair, and the public key from your peer's NIST-standard elliptic curve or SM2 (China Regions only) key pair. The public key can be from another asymmetric KMS key pair or from a key pair generated outside of KMS, but both key pairs must be on the same elliptic curve.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify the key ARN or alias ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:DeriveSharedSecret](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - CreateKey
 * - GetPublicKey
 * - DescribeKey
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DeriveSharedSecretCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DeriveSharedSecretCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
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
 * @example To derive a shared secret
 * ```javascript
 * // The following example derives a shared secret using a key agreement algorithm.
 * const input = {
 *   KeyAgreementAlgorithm: "ECDH",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   PublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvH3Yj0wbkLEpUl95Cv1cJVjsVNSjwGq3tCLnzXfhVwVvmzGN8pYj3U8nKwgouaHbBWNJYjP5VutbbkKS4Kv4GojwZBJyHN17kmxo8yTjRmjR15SKIQ8cqRA2uaERMLnpztIXdZp232PQPbWGxDyXYJ0aJ5EFSag"
 * };
 * const command = new DeriveSharedSecretCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyAgreementAlgorithm: "ECDH",
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyOrigin: "AWS_KMS",
 *   SharedSecret: "MEYCIQCKZLWyTk5runarx6XiAkU9gv3lbwPO/pHa+DXFehzdDwIhANwpsIV2g/9SPWLLsF6p/hiSskuIXMTRwqrMdVKWTMHG"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeriveSharedSecretCommand extends command<DeriveSharedSecretCommandInput, DeriveSharedSecretCommandOutput>(
  _ep0,
  _mw0,
  "DeriveSharedSecret",
  DeriveSharedSecret$
) {
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
