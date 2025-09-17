// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GenerateMacInput,
  GenerateMacInputFilterSensitiveLog,
  GenerateMacOutput,
  GenerateMacOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { de_GenerateMacCommand, se_GenerateMacCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateMacCommand}.
 */
export interface GenerateMacCommandInput extends GenerateMacInput {}
/**
 * @public
 *
 * The output of {@link GenerateMacCommand}.
 */
export interface GenerateMacCommandOutput extends GenerateMacOutput, __MetadataBearer {}

/**
 * <p>Generates a Message Authentication Code (MAC) cryptogram within Amazon Web Services Payment Cryptography. </p> <p>You can use this operation to authenticate card-related data by using known data values to generate MAC for data validation between the sending and receiving parties. This operation uses message data, a secret encryption key and MAC algorithm to generate a unique MAC value for transmission. The receiving party of the MAC must use the same message data, secret encryption key and MAC algorithm to reproduce another MAC value for comparision.</p> <p>You can use this operation to generate a DUPKT, CMAC, HMAC or EMV MAC by setting generation attributes and algorithm to the associated values. The MAC generation encryption key must have valid values for <code>KeyUsage</code> such as <code>TR31_M7_HMAC_KEY</code> for HMAC generation, and they key must have <code>KeyModesOfUse</code> set to <code>Generate</code> and <code>Verify</code>.</p> <p>For information about valid keys for this operation, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html">Understanding key attributes</a> and <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html">Key types for specific data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>. </p> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>VerifyMac</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, GenerateMacCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GenerateMacCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GenerateMacInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   MessageData: "STRING_VALUE", // required
 *   GenerationAttributes: { // MacAttributes Union: only one key present
 *     Algorithm: "ISO9797_ALGORITHM1" || "ISO9797_ALGORITHM3" || "CMAC" || "HMAC" || "HMAC_SHA224" || "HMAC_SHA256" || "HMAC_SHA384" || "HMAC_SHA512",
 *     EmvMac: { // MacAlgorithmEmv
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       SessionKeyDerivationMode: "EMV_COMMON_SESSION_KEY" || "EMV2000" || "AMEX" || "MASTERCARD_SESSION_KEY" || "VISA", // required
 *       SessionKeyDerivationValue: { // SessionKeyDerivationValue Union: only one key present
 *         ApplicationCryptogram: "STRING_VALUE",
 *         ApplicationTransactionCounter: "STRING_VALUE",
 *       },
 *     },
 *     DukptIso9797Algorithm1: { // MacAlgorithmDukpt
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "BIDIRECTIONAL" || "REQUEST" || "RESPONSE", // required
 *       DukptDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256",
 *     },
 *     DukptIso9797Algorithm3: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "BIDIRECTIONAL" || "REQUEST" || "RESPONSE", // required
 *       DukptDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256",
 *     },
 *     DukptCmac: {
 *       KeySerialNumber: "STRING_VALUE", // required
 *       DukptKeyVariant: "BIDIRECTIONAL" || "REQUEST" || "RESPONSE", // required
 *       DukptDerivationType: "TDES_2KEY" || "TDES_3KEY" || "AES_128" || "AES_192" || "AES_256",
 *     },
 *   },
 *   MacLength: Number("int"),
 * };
 * const command = new GenerateMacCommand(input);
 * const response = await client.send(command);
 * // { // GenerateMacOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   Mac: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateMacCommandInput - {@link GenerateMacCommandInput}
 * @returns {@link GenerateMacCommandOutput}
 * @see {@link GenerateMacCommandInput} for command's `input` shape.
 * @see {@link GenerateMacCommandOutput} for command's `response` shape.
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
export class GenerateMacCommand extends $Command
  .classBuilder<
    GenerateMacCommandInput,
    GenerateMacCommandOutput,
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
  .s("PaymentCryptographyDataPlane", "GenerateMac", {})
  .n("PaymentCryptographyDataClient", "GenerateMacCommand")
  .f(GenerateMacInputFilterSensitiveLog, GenerateMacOutputFilterSensitiveLog)
  .ser(se_GenerateMacCommand)
  .de(de_GenerateMacCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateMacInput;
      output: GenerateMacOutput;
    };
    sdk: {
      input: GenerateMacCommandInput;
      output: GenerateMacCommandOutput;
    };
  };
}
