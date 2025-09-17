// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  VerifyAuthRequestCryptogramInput,
  VerifyAuthRequestCryptogramInputFilterSensitiveLog,
  VerifyAuthRequestCryptogramOutput,
  VerifyAuthRequestCryptogramOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import {
  de_VerifyAuthRequestCryptogramCommand,
  se_VerifyAuthRequestCryptogramCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyAuthRequestCryptogramCommand}.
 */
export interface VerifyAuthRequestCryptogramCommandInput extends VerifyAuthRequestCryptogramInput {}
/**
 * @public
 *
 * The output of {@link VerifyAuthRequestCryptogramCommand}.
 */
export interface VerifyAuthRequestCryptogramCommandOutput extends VerifyAuthRequestCryptogramOutput, __MetadataBearer {}

/**
 * <p>Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.verifyauthrequestcryptogram.html">Verify auth request cryptogram</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html">ImportKey</a>. This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html">CreateKey</a> to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The <code>ARPC_METHOD_1</code> uses <code>AuthResponseCode</code> to generate ARPC and <code>ARPC_METHOD_2</code> uses <code>CardStatusUpdate</code> to generate ARPC. </p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>VerifyCardValidationData</a> </p> </li> <li> <p> <a>VerifyPinData</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyAuthRequestCryptogramCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyAuthRequestCryptogramCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyAuthRequestCryptogramInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   TransactionData: "STRING_VALUE", // required
 *   AuthRequestCryptogram: "STRING_VALUE", // required
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
 *   AuthResponseAttributes: { // CryptogramAuthResponse Union: only one key present
 *     ArpcMethod1: { // CryptogramVerificationArpcMethod1
 *       AuthResponseCode: "STRING_VALUE", // required
 *     },
 *     ArpcMethod2: { // CryptogramVerificationArpcMethod2
 *       CardStatusUpdate: "STRING_VALUE", // required
 *       ProprietaryAuthenticationData: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new VerifyAuthRequestCryptogramCommand(input);
 * const response = await client.send(command);
 * // { // VerifyAuthRequestCryptogramOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   AuthResponseValue: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifyAuthRequestCryptogramCommandInput - {@link VerifyAuthRequestCryptogramCommandInput}
 * @returns {@link VerifyAuthRequestCryptogramCommandOutput}
 * @see {@link VerifyAuthRequestCryptogramCommandInput} for command's `input` shape.
 * @see {@link VerifyAuthRequestCryptogramCommandOutput} for command's `response` shape.
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
export class VerifyAuthRequestCryptogramCommand extends $Command
  .classBuilder<
    VerifyAuthRequestCryptogramCommandInput,
    VerifyAuthRequestCryptogramCommandOutput,
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
  .s("PaymentCryptographyDataPlane", "VerifyAuthRequestCryptogram", {})
  .n("PaymentCryptographyDataClient", "VerifyAuthRequestCryptogramCommand")
  .f(VerifyAuthRequestCryptogramInputFilterSensitiveLog, VerifyAuthRequestCryptogramOutputFilterSensitiveLog)
  .ser(se_VerifyAuthRequestCryptogramCommand)
  .de(de_VerifyAuthRequestCryptogramCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyAuthRequestCryptogramInput;
      output: VerifyAuthRequestCryptogramOutput;
    };
    sdk: {
      input: VerifyAuthRequestCryptogramCommandInput;
      output: VerifyAuthRequestCryptogramCommandOutput;
    };
  };
}
