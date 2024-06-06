// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { VerifyMacInput, VerifyMacInputFilterSensitiveLog, VerifyMacOutput } from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_VerifyMacCommand, se_VerifyMacCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandInput extends VerifyMacInput {}
/**
 * @public
 *
 * The output of {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandOutput extends VerifyMacOutput, __MetadataBearer {}

/**
 * <p>Verifies a Message Authentication Code (MAC). </p>
 *          <p>You can use this operation to verify MAC for message data authentication such as . In this operation, you must use the same message data, secret encryption key and MAC algorithm that was used to generate MAC. You can use this operation to verify a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. </p>
 *          <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p>
 *          <p>
 *             <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GenerateMac</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyMacCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyMacCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyMacInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   MessageData: "STRING_VALUE", // required
 *   Mac: "STRING_VALUE", // required
 *   VerificationAttributes: { // MacAttributes Union: only one key present
 *     Algorithm: "STRING_VALUE",
 *     EmvMac: { // MacAlgorithmEmv
 *       MajorKeyDerivationMode: "STRING_VALUE", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       SessionKeyDerivationMode: "STRING_VALUE", // required
 *       SessionKeyDerivationValue: { // SessionKeyDerivationValue Union: only one key present
 *         ApplicationCryptogram: "STRING_VALUE",
 *         ApplicationTransactionCounter: "STRING_VALUE",
 *       },
 *     },
 *     DukptIso9797Algorithm1: { // MacAlgorithmDukpt
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "STRING_VALUE", // required
 *       DukptDerivationType: "STRING_VALUE",
 *     },
 *     DukptIso9797Algorithm3: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "STRING_VALUE", // required
 *       DukptDerivationType: "STRING_VALUE",
 *     },
 *     DukptCmac: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "STRING_VALUE", // required
 *       DukptDerivationType: "STRING_VALUE",
 *     },
 *   },
 *   MacLength: Number("int"),
 * };
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * // { // VerifyMacOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyMacCommandInput - {@link VerifyMacCommandInput}
 * @returns {@link VerifyMacCommandOutput}
 * @see {@link VerifyMacCommandInput} for command's `input` shape.
 * @see {@link VerifyMacCommandOutput} for command's `response` shape.
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
export class VerifyMacCommand extends $Command
  .classBuilder<
    VerifyMacCommandInput,
    VerifyMacCommandOutput,
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
  .s("PaymentCryptographyDataPlane", "VerifyMac", {})
  .n("PaymentCryptographyDataClient", "VerifyMacCommand")
  .f(VerifyMacInputFilterSensitiveLog, void 0)
  .ser(se_VerifyMacCommand)
  .de(de_VerifyMacCommand)
  .build() {}
