// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateKeyInput, CreateKeyOutput } from "../models/models_0";
import type {
  PaymentCryptographyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyClient";
import { CreateKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandInput extends CreateKeyInput {}
/**
 * @public
 *
 * The output of {@link CreateKeyCommand}.
 */
export interface CreateKeyCommandOutput extends CreateKeyOutput, __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services Payment Cryptography key, a logical representation of a cryptographic key, that is unique in your account and Amazon Web Services Region. You use keys for cryptographic functions such as encryption and decryption. </p> <p>In addition to the key material used in cryptographic operations, an Amazon Web Services Payment Cryptography key includes metadata such as the key ARN, key usage, key origin, creation date, description, and key state.</p> <p>When you create a key, you specify both immutable and mutable data about the key. The immutable data contains key attributes that define the scope and cryptographic operations that you can perform using the key, for example key class (example: <code>SYMMETRIC_KEY</code>), key algorithm (example: <code>TDES_2KEY</code>), key usage (example: <code>TR31_P0_PIN_ENCRYPTION_KEY</code>) and key modes of use (example: <code>Encrypt</code>). Amazon Web Services Payment Cryptography binds key attributes to keys using key blocks when you store or export them. Amazon Web Services Payment Cryptography stores the key contents wrapped and never stores or transmits them in the clear.</p> <p>For information about valid combinations of key attributes, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. The mutable data contained within a key includes usage timestamp and key deletion timestamp and can be modified after creation.</p> <p>You can use the <code>CreateKey</code> operation to generate an ECC (Elliptic Curve Cryptography) key pair used for establishing an ECDH (Elliptic Curve Diffie-Hellman) key agreement between two parties. In the ECDH key agreement process, both parties generate their own ECC key pair with key usage K3 and exchange the public keys. Each party then use their private key, the received public key from the other party, and the key derivation parameters including key derivation function, hash algorithm, derivation data, and key algorithm to derive a shared key.</p> <p>To maintain the single-use principle of cryptographic keys in payments, ECDH derived keys should not be used for multiple purposes, such as a <code>TR31_P0_PIN_ENCRYPTION_KEY</code> and <code>TR31_K1_KEY_BLOCK_PROTECTION_KEY</code>. When creating ECC key pairs in Amazon Web Services Payment Cryptography you can optionally set the <code>DeriveKeyUsage</code> parameter, which defines the key usage bound to the symmetric key that will be derived using the ECC key pair.</p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteKey.html">DeleteKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetKey.html">GetKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListKeys.html">ListKeys</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyClient, CreateKeyCommand } from "@aws-sdk/client-payment-cryptography"; // ES Modules import
 * // const { PaymentCryptographyClient, CreateKeyCommand } = require("@aws-sdk/client-payment-cryptography"); // CommonJS import
 * // import type { PaymentCryptographyClientConfig } from "@aws-sdk/client-payment-cryptography";
 * const config = {}; // type is PaymentCryptographyClientConfig
 * const client = new PaymentCryptographyClient(config);
 * const input = { // CreateKeyInput
 *   KeyAttributes: { // KeyAttributes
 *     KeyUsage: "STRING_VALUE", // required
 *     KeyClass: "STRING_VALUE", // required
 *     KeyAlgorithm: "STRING_VALUE", // required
 *     KeyModesOfUse: { // KeyModesOfUse
 *       Encrypt: true || false,
 *       Decrypt: true || false,
 *       Wrap: true || false,
 *       Unwrap: true || false,
 *       Generate: true || false,
 *       Sign: true || false,
 *       Verify: true || false,
 *       DeriveKey: true || false,
 *       NoRestrictions: true || false,
 *     },
 *   },
 *   KeyCheckValueAlgorithm: "STRING_VALUE",
 *   Exportable: true || false, // required
 *   Enabled: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DeriveKeyUsage: "STRING_VALUE",
 *   ReplicationRegions: [ // Regions
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyOutput
 * //   Key: { // Key
 * //     KeyArn: "STRING_VALUE", // required
 * //     KeyAttributes: { // KeyAttributes
 * //       KeyUsage: "STRING_VALUE", // required
 * //       KeyClass: "STRING_VALUE", // required
 * //       KeyAlgorithm: "STRING_VALUE", // required
 * //       KeyModesOfUse: { // KeyModesOfUse
 * //         Encrypt: true || false,
 * //         Decrypt: true || false,
 * //         Wrap: true || false,
 * //         Unwrap: true || false,
 * //         Generate: true || false,
 * //         Sign: true || false,
 * //         Verify: true || false,
 * //         DeriveKey: true || false,
 * //         NoRestrictions: true || false,
 * //       },
 * //     },
 * //     KeyCheckValue: "STRING_VALUE", // required
 * //     KeyCheckValueAlgorithm: "STRING_VALUE", // required
 * //     Enabled: true || false, // required
 * //     Exportable: true || false, // required
 * //     KeyState: "STRING_VALUE", // required
 * //     KeyOrigin: "STRING_VALUE", // required
 * //     CreateTimestamp: new Date("TIMESTAMP"), // required
 * //     UsageStartTimestamp: new Date("TIMESTAMP"),
 * //     UsageStopTimestamp: new Date("TIMESTAMP"),
 * //     DeletePendingTimestamp: new Date("TIMESTAMP"),
 * //     DeleteTimestamp: new Date("TIMESTAMP"),
 * //     DeriveKeyUsage: "STRING_VALUE",
 * //     MultiRegionKeyType: "STRING_VALUE",
 * //     PrimaryRegion: "STRING_VALUE",
 * //     ReplicationStatus: { // ReplicationStatus
 * //       "<keys>": { // ReplicationStatusType
 * //         Status: "STRING_VALUE", // required
 * //         StatusMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //     UsingDefaultReplicationRegions: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateKeyCommandInput - {@link CreateKeyCommandInput}
 * @returns {@link CreateKeyCommandOutput}
 * @see {@link CreateKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeyCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyClientResolvedConfig | config} for PaymentCryptographyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>This exception is thrown when the caller lacks the necessary IAM permissions to perform the requested operation. Verify that your IAM policy includes the required permissions for the specific Amazon Web Services Payment Cryptography action you're attempting.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This request can cause an inconsistent state for the resource.</p> <p>The requested operation conflicts with the current state of the resource. For example, attempting to delete a key that is currently being used, or trying to create a resource that already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>This indicates a server-side error within the Amazon Web Services Payment Cryptography service. If this error persists, contact support for assistance.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to resource not found.</p> <p>The specified key, alias, or other resource does not exist in your account or region. Verify that the resource identifier is correct and that the resource exists in the expected region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request would cause a service quota to be exceeded.</p> <p>You have reached the maximum number of keys, aliases, or other resources allowed in your account. Review your current usage and consider deleting unused resources or requesting a quota increase.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p> <p>The Amazon Web Services Payment Cryptography service is temporarily unavailable. This is typically a temporary condition - retry your request after a brief delay.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p> <p>You have exceeded the rate limits for Amazon Web Services Payment Cryptography API calls. Implement exponential backoff and retry logic in your application to handle throttling gracefully.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p> <p>One or more parameters in your request are invalid. Check the parameter values, formats, and constraints specified in the API documentation.</p>
 *
 * @throws {@link PaymentCryptographyServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptography service.</p>
 *
 *
 * @public
 */
export class CreateKeyCommand extends $Command
  .classBuilder<
    CreateKeyCommandInput,
    CreateKeyCommandOutput,
    PaymentCryptographyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyControlPlane", "CreateKey", {})
  .n("PaymentCryptographyClient", "CreateKeyCommand")
  .sc(CreateKey$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyInput;
      output: CreateKeyOutput;
    };
    sdk: {
      input: CreateKeyCommandInput;
      output: CreateKeyCommandOutput;
    };
  };
}
