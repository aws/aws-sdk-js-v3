// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { TranslatePinDataInput, TranslatePinDataOutput } from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { TranslatePinData } from "../schemas/schemas_1_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TranslatePinDataCommand}.
 */
export interface TranslatePinDataCommandInput extends TranslatePinDataInput {}
/**
 * @public
 *
 * The output of {@link TranslatePinDataCommand}.
 */
export interface TranslatePinDataCommandOutput extends TranslatePinDataOutput, __MetadataBearer {}

/**
 * <p>Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/translate-pin-data.html">Translate PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>PIN block translation involves changing a PIN block from one encryption key to another and optionally change its format. PIN block translation occurs entirely within the HSM boundary and PIN data never enters or leaves Amazon Web Services Payment Cryptography in clear text. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK.</p> <p>Amazon Web Services Payment Cryptography also supports use of dynamic keys and ECDH (Elliptic Curve Diffie-Hellman) based key exchange for this operation.</p> <p>Dynamic keys allow you to pass a PEK as a TR-31 WrappedKeyBlock. They can be used when key material is frequently rotated, such as during every card transaction, and there is need to avoid importing short-lived keys into Amazon Web Services Payment Cryptography. To translate PIN block using dynamic keys, the <code>keyARN</code> is the Key Encryption Key (KEK) of the TR-31 wrapped PEK. The incoming wrapped key shall have a key purpose of P0 with a mode of use of B or D. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/use-cases-acquirers-dynamickeys.html">Using Dynamic Keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>Using ECDH key exchange, you can receive cardholder selectable PINs into Amazon Web Services Payment Cryptography. The ECDH derived key protects the incoming PIN block, which is translated to a PEK encrypted PIN block for use within the service. You can also use ECDH for reveal PIN, wherein the service translates the PIN block from PEK to a ECDH derived encryption key. For more information on establishing ECDH derived keys, see the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/create-keys.html">Generating keys</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <note> <p>Amazon Web Services Payment Cryptography currently supports ISO PIN block 4 translation for PIN block built using legacy PAN length. That is, PAN is the right most 12 digits excluding the check digits.</p> </note> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GeneratePinData</a> </p> </li> <li> <p> <a>VerifyPinData</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, TranslatePinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, TranslatePinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // TranslatePinDataInput
 *   IncomingKeyIdentifier: "STRING_VALUE", // required
 *   OutgoingKeyIdentifier: "STRING_VALUE", // required
 *   IncomingTranslationAttributes: { // TranslationIsoFormats Union: only one key present
 *     IsoFormat0: { // TranslationPinDataIsoFormat034
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat1: {},
 *     IsoFormat3: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat4: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *   },
 *   OutgoingTranslationAttributes: {//  Union: only one key present
 *     IsoFormat0: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat1: {},
 *     IsoFormat3: {
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *     },
 *     IsoFormat4: "<TranslationPinDataIsoFormat034>",
 *   },
 *   EncryptedPinBlock: "STRING_VALUE", // required
 *   IncomingDukptAttributes: { // DukptDerivationAttributes
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptKeyDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256",
 *     DukptKeyVariant: "BIDIRECTIONAL" || "REQUEST" || "RESPONSE",
 *   },
 *   OutgoingDukptAttributes: {
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptKeyDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256",
 *     DukptKeyVariant: "BIDIRECTIONAL" || "REQUEST" || "RESPONSE",
 *   },
 *   IncomingWrappedKey: { // WrappedKey
 *     WrappedKeyMaterial: { // WrappedKeyMaterial Union: only one key present
 *       Tr31KeyBlock: "STRING_VALUE",
 *       DiffieHellmanSymmetricKey: { // EcdhDerivationAttributes
 *         CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *         PublicKeyCertificate: "STRING_VALUE", // required
 *         KeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *         KeyDerivationFunction: "NIST_SP800" || "ANSI_X963", // required
 *         KeyDerivationHashAlgorithm: "SHA_256" || "SHA_384" || "SHA_512", // required
 *         SharedInformation: "STRING_VALUE", // required
 *       },
 *     },
 *     KeyCheckValueAlgorithm: "STRING_VALUE",
 *   },
 *   OutgoingWrappedKey: {
 *     WrappedKeyMaterial: {//  Union: only one key present
 *       Tr31KeyBlock: "STRING_VALUE",
 *       DiffieHellmanSymmetricKey: {
 *         CertificateAuthorityPublicKeyIdentifier: "STRING_VALUE", // required
 *         PublicKeyCertificate: "STRING_VALUE", // required
 *         KeyAlgorithm: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512" || "HMAC_SHA224", // required
 *         KeyDerivationFunction: "NIST_SP800" || "ANSI_X963", // required
 *         KeyDerivationHashAlgorithm: "SHA_256" || "SHA_384" || "SHA_512", // required
 *         SharedInformation: "STRING_VALUE", // required
 *       },
 *     },
 *     KeyCheckValueAlgorithm: "STRING_VALUE",
 *   },
 * };
 * const command = new TranslatePinDataCommand(input);
 * const response = await client.send(command);
 * // { // TranslatePinDataOutput
 * //   PinBlock: "STRING_VALUE", // required
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TranslatePinDataCommandInput - {@link TranslatePinDataCommandInput}
 * @returns {@link TranslatePinDataCommandOutput}
 * @see {@link TranslatePinDataCommandInput} for command's `input` shape.
 * @see {@link TranslatePinDataCommandOutput} for command's `response` shape.
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
export class TranslatePinDataCommand extends $Command
  .classBuilder<
    TranslatePinDataCommandInput,
    TranslatePinDataCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyDataPlane", "TranslatePinData", {})
  .n("PaymentCryptographyDataClient", "TranslatePinDataCommand")
  .sc(TranslatePinData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TranslatePinDataInput;
      output: TranslatePinDataOutput;
    };
    sdk: {
      input: TranslatePinDataCommandInput;
      output: TranslatePinDataCommandOutput;
    };
  };
}
