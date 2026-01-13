// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { VerifyPinDataInput, VerifyPinDataOutput } from "../models/models_0";
import type {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { VerifyPinData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyPinDataCommand}.
 */
export interface VerifyPinDataCommandInput extends VerifyPinDataInput {}
/**
 * @public
 *
 * The output of {@link VerifyPinDataCommand}.
 */
export interface VerifyPinDataCommandOutput extends VerifyPinDataOutput, __MetadataBearer {}

/**
 * <p>Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-pin-data.html">Verify PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an <code>EncryptedPinBlock</code> for transmission from Amazon Web Services Payment Cryptography. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>GeneratePinData</a> </p> </li> <li> <p> <a>TranslatePinData</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyPinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyPinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyPinDataInput
 *   VerificationKeyIdentifier: "STRING_VALUE", // required
 *   EncryptionKeyIdentifier: "STRING_VALUE", // required
 *   VerificationAttributes: { // PinVerificationAttributes Union: only one key present
 *     VisaPin: { // VisaPinVerification
 *       PinVerificationKeyIndex: Number("int"), // required
 *       VerificationValue: "STRING_VALUE", // required
 *     },
 *     Ibm3624Pin: { // Ibm3624PinVerification
 *       DecimalizationTable: "STRING_VALUE", // required
 *       PinValidationDataPadCharacter: "STRING_VALUE", // required
 *       PinValidationData: "STRING_VALUE", // required
 *       PinOffset: "STRING_VALUE", // required
 *     },
 *   },
 *   EncryptedPinBlock: "STRING_VALUE", // required
 *   PrimaryAccountNumber: "STRING_VALUE",
 *   PinBlockFormat: "ISO_FORMAT_0" || "ISO_FORMAT_1" || "ISO_FORMAT_3" || "ISO_FORMAT_4", // required
 *   PinDataLength: Number("int"),
 *   DukptAttributes: { // DukptAttributes
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256", // required
 *   },
 *   EncryptionWrappedKey: { // WrappedKey
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
 * };
 * const command = new VerifyPinDataCommand(input);
 * const response = await client.send(command);
 * // { // VerifyPinDataOutput
 * //   VerificationKeyArn: "STRING_VALUE", // required
 * //   VerificationKeyCheckValue: "STRING_VALUE", // required
 * //   EncryptionKeyArn: "STRING_VALUE", // required
 * //   EncryptionKeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyPinDataCommandInput - {@link VerifyPinDataCommandInput}
 * @returns {@link VerifyPinDataCommandOutput}
 * @see {@link VerifyPinDataCommandInput} for command's `input` shape.
 * @see {@link VerifyPinDataCommandOutput} for command's `response` shape.
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
 * @throws {@link VerificationFailedException} (client fault)
 *  <p>This request failed verification.</p>
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 * <p>Base exception class for all service exceptions from PaymentCryptographyData service.</p>
 *
 *
 * @public
 */
export class VerifyPinDataCommand extends $Command
  .classBuilder<
    VerifyPinDataCommandInput,
    VerifyPinDataCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyDataPlane", "VerifyPinData", {})
  .n("PaymentCryptographyDataClient", "VerifyPinDataCommand")
  .sc(VerifyPinData$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyPinDataInput;
      output: VerifyPinDataOutput;
    };
    sdk: {
      input: VerifyPinDataCommandInput;
      output: VerifyPinDataCommandOutput;
    };
  };
}
