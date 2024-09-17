// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  TranslatePinDataInput,
  TranslatePinDataInputFilterSensitiveLog,
  TranslatePinDataOutput,
  TranslatePinDataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_TranslatePinDataCommand, se_TranslatePinDataCommand } from "../protocols/Aws_restJson1";

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
 * <p>Translates encrypted PIN block from and to ISO 9564 formats 0,1,3,4. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/translate-pin-data.html">Translate PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>PIN block translation involves changing the encrytion of PIN block from one encryption key to another encryption key and changing PIN block format from one to another without PIN block data leaving Amazon Web Services Payment Cryptography. The encryption key transformation can be from PEK (Pin Encryption Key) to BDK (Base Derivation Key) for DUKPT or from BDK for DUKPT to PEK. Amazon Web Services Payment Cryptography supports <code>TDES</code> and <code>AES</code> key derivation type for DUKPT translations. </p>
 *          <p>The allowed combinations of PIN block format translations are guided by PCI. It is important to note that not all encrypted PIN block formats (example, format 1) require PAN (Primary Account Number) as input. And as such, PIN block format that requires PAN (example, formats 0,3,4) cannot be translated to a format (format 1) that does not require a PAN for generation. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <note>
 *             <p>Amazon Web Services Payment Cryptography currently supports ISO PIN block 4 translation for PIN block built using legacy PAN length. That is, PAN is the right most 12 digits excluding the check digits.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GeneratePinData</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>VerifyPinData</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, TranslatePinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, TranslatePinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
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
 *     DukptKeyDerivationType: "STRING_VALUE",
 *     DukptKeyVariant: "STRING_VALUE",
 *   },
 *   OutgoingDukptAttributes: {
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptKeyDerivationType: "STRING_VALUE",
 *     DukptKeyVariant: "STRING_VALUE",
 *   },
 *   IncomingWrappedKey: { // WrappedKey
 *     WrappedKeyMaterial: { // WrappedKeyMaterial Union: only one key present
 *       Tr31KeyBlock: "STRING_VALUE",
 *     },
 *     KeyCheckValueAlgorithm: "STRING_VALUE",
 *   },
 *   OutgoingWrappedKey: {
 *     WrappedKeyMaterial: {//  Union: only one key present
 *       Tr31KeyBlock: "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyDataPlane", "TranslatePinData", {})
  .n("PaymentCryptographyDataClient", "TranslatePinDataCommand")
  .f(TranslatePinDataInputFilterSensitiveLog, TranslatePinDataOutputFilterSensitiveLog)
  .ser(se_TranslatePinDataCommand)
  .de(de_TranslatePinDataCommand)
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
