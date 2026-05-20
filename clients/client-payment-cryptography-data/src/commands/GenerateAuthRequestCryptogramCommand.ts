// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GenerateAuthRequestCryptogramInput, GenerateAuthRequestCryptogramOutput } from "../models/models_0";
import type {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { GenerateAuthRequestCryptogram$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateAuthRequestCryptogramCommand}.
 */
export interface GenerateAuthRequestCryptogramCommandInput extends GenerateAuthRequestCryptogramInput {}
/**
 * @public
 *
 * The output of {@link GenerateAuthRequestCryptogramCommand}.
 */
export interface GenerateAuthRequestCryptogramCommandOutput extends GenerateAuthRequestCryptogramOutput, __MetadataBearer {}

/**
 * <p>Generates an Authorization Request Cryptogram (ARQC) for an EMV chip payment card authorization. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.generateauthrequestcryptogram.html">Generate auth request cryptogram</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>ARQC generation uses an Issuer Master Key (IMK) for application cryptograms (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) to derive a session key, which is then used to generate the cryptogram from the provided transaction data (when applicable). To use this operation, you must first create or import an IMK-AC key by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> or <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. The <code>KeyModesOfUse</code> should be set to <code>DeriveKey</code> for the IMK-AC encryption key.</p> <important> <p>This operation is intended for development and testing scenarios only. It is not recommended to use this operation as a substitute for card-based cryptogram generation in production payment flows.</p> </important> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html">Resource-based policies</a>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>VerifyAuthRequestCryptogram</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, GenerateAuthRequestCryptogramCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GenerateAuthRequestCryptogramCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GenerateAuthRequestCryptogramInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   TransactionData: "STRING_VALUE", // required
 *   MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *   SessionKeyDerivationAttributes: { // SessionKeyDerivation Union: only one key present
 *     EmvCommon: { // SessionKeyEmvCommon
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     Mastercard: { // SessionKeyMastercard
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *       UnpredictableNumber: "STRING_VALUE", // required
 *     },
 *     Emv2000: { // SessionKeyEmv2000
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     Amex: { // SessionKeyAmex
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *     },
 *     Visa: { // SessionKeyVisa
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new GenerateAuthRequestCryptogramCommand(input);
 * const response = await client.send(command);
 * // { // GenerateAuthRequestCryptogramOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   AuthRequestCryptogram: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateAuthRequestCryptogramCommandInput - {@link GenerateAuthRequestCryptogramCommandInput}
 * @returns {@link GenerateAuthRequestCryptogramCommandOutput}
 * @see {@link GenerateAuthRequestCryptogramCommandInput} for command's `input` shape.
 * @see {@link GenerateAuthRequestCryptogramCommandOutput} for command's `response` shape.
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
export class GenerateAuthRequestCryptogramCommand extends $Command
  .classBuilder<
    GenerateAuthRequestCryptogramCommandInput,
    GenerateAuthRequestCryptogramCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyDataPlane", "GenerateAuthRequestCryptogram", {})
  .n("PaymentCryptographyDataClient", "GenerateAuthRequestCryptogramCommand")
  .sc(GenerateAuthRequestCryptogram$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateAuthRequestCryptogramInput;
      output: GenerateAuthRequestCryptogramOutput;
    };
    sdk: {
      input: GenerateAuthRequestCryptogramCommandInput;
      output: GenerateAuthRequestCryptogramCommandOutput;
    };
  };
}
