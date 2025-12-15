// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { TranslateKeyMaterialInput, TranslateKeyMaterialOutput } from "../models/models_0";
import type {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { TranslateKeyMaterial$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TranslateKeyMaterialCommand}.
 */
export interface TranslateKeyMaterialCommandInput extends TranslateKeyMaterialInput {}
/**
 * @public
 *
 * The output of {@link TranslateKeyMaterialCommand}.
 */
export interface TranslateKeyMaterialCommandOutput extends TranslateKeyMaterialOutput, __MetadataBearer {}

/**
 * <p>Translates an encryption key between different wrapping keys without importing the key into Amazon Web Services Payment Cryptography.</p> <p>This operation can be used when key material is frequently rotated, such as during every card transaction, and there is a need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. It translates short-lived transaction keys such as Pin Encryption Key (PEK) generated for each transaction and wrapped with an ECDH (Elliptic Curve Diffie-Hellman) derived wrapping key to another KEK (Key Encryption Key) wrapping key. </p> <p>Before using this operation, you must first request the public key certificate of the ECC key pair generated within Amazon Web Services Payment Cryptography to establish an ECDH key agreement. In <code>TranslateKeyData</code>, the service uses its own ECC key pair, public certificate of receiving ECC key pair, and the key derivation parameters to generate a derived key. The service uses this derived key to unwrap the incoming transaction key received as a TR31WrappedKeyBlock and re-wrap using a user provided KEK to generate an outgoing Tr31WrappedKeyBlock. For more information on establishing ECDH derived keys, see the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/create-keys.html">Creating keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetPublicKeyCertificate.html">GetPublicCertificate</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, TranslateKeyMaterialCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, TranslateKeyMaterialCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // TranslateKeyMaterialInput
 *   IncomingKeyMaterial: { // IncomingKeyMaterial Union: only one key present
 *     DiffieHellmanTr31KeyBlock: { // IncomingDiffieHellmanTr31KeyBlock
 *       PrivateKeyIdentifier: "STRING_VALUE", // required
 *       CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *       PublicKeyCertificate: "STRING_VALUE", // required
 *       DeriveKeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *       KeyDerivationFunction: "NIST_SP800" || "ANSI_X963", // required
 *       KeyDerivationHashAlgorithm: "SHA_256" || "SHA_384" || "SHA_512", // required
 *       DerivationData: { // DiffieHellmanDerivationData Union: only one key present
 *         SharedInformation: "STRING_VALUE",
 *       },
 *       WrappedKeyBlock: "STRING_VALUE", // required
 *     },
 *   },
 *   OutgoingKeyMaterial: { // OutgoingKeyMaterial Union: only one key present
 *     Tr31KeyBlock: { // OutgoingTr31KeyBlock
 *       WrappingKeyIdentifier: "STRING_VALUE", // required
 *     },
 *   },
 *   KeyCheckValueAlgorithm: "STRING_VALUE",
 * };
 * const command = new TranslateKeyMaterialCommand(input);
 * const response = await client.send(command);
 * // { // TranslateKeyMaterialOutput
 * //   WrappedKey: { // WrappedWorkingKey
 * //     WrappedKeyMaterial: "STRING_VALUE", // required
 * //     KeyCheckValue: "STRING_VALUE", // required
 * //     WrappedKeyMaterialFormat: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param TranslateKeyMaterialCommandInput - {@link TranslateKeyMaterialCommandInput}
 * @returns {@link TranslateKeyMaterialCommandOutput}
 * @see {@link TranslateKeyMaterialCommandInput} for command's `input` shape.
 * @see {@link TranslateKeyMaterialCommandOutput} for command's `response` shape.
 * @see {@link PaymentCryptographyDataClientResolvedConfig | config} for PaymentCryptographyDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied due to an invalid resource error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied due to an invalid request error.</p>
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptographyData service.</p>
 *
 *
 * @public
 */
export class TranslateKeyMaterialCommand extends $Command
  .classBuilder<
    TranslateKeyMaterialCommandInput,
    TranslateKeyMaterialCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyDataPlane", "TranslateKeyMaterial", {})
  .n("PaymentCryptographyDataClient", "TranslateKeyMaterialCommand")
  .sc(TranslateKeyMaterial$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TranslateKeyMaterialInput;
      output: TranslateKeyMaterialOutput;
    };
    sdk: {
      input: TranslateKeyMaterialCommandInput;
      output: TranslateKeyMaterialCommandOutput;
    };
  };
}
