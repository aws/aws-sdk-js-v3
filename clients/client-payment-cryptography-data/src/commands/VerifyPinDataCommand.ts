// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyPinDataInput, VerifyPinDataInputFilterSensitiveLog, VerifyPinDataOutput } from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_VerifyPinDataCommand, se_VerifyPinDataCommand } from "../protocols/Aws_restJson1";

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
 * <p>Verifies pin-related data such as PIN and PIN Offset using algorithms including VISA PVV and IBM3624. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-pin-data.html">Verify PIN data</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>This operation verifies PIN data for user payment card. A card holder PIN data is never transmitted in clear to or from Amazon Web Services Payment Cryptography. This operation uses PIN Verification Key (PVK) for PIN or PIN Offset generation and then encrypts it using PIN Encryption Key (PEK) to create an <code>EncryptedPinBlock</code> for transmission from Amazon Web Services Payment Cryptography.  </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
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
 *                   <a>TranslatePinData</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyPinDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyPinDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
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
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   PinBlockFormat: "STRING_VALUE", // required
 *   PinDataLength: Number("int"),
 *   DukptAttributes: { // DukptAttributes
 *     KeySerialNumber: "STRING_VALUE", // required
 *     DukptDerivationType: "STRING_VALUE", // required
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PaymentCryptographyDataPlane", "VerifyPinData", {})
  .n("PaymentCryptographyDataClient", "VerifyPinDataCommand")
  .f(VerifyPinDataInputFilterSensitiveLog, void 0)
  .ser(se_VerifyPinDataCommand)
  .de(de_VerifyPinDataCommand)
  .build() {}
