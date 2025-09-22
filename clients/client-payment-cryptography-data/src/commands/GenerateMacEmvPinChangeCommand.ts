// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateMacEmvPinChangeInput, GenerateMacEmvPinChangeOutput } from "../models/models_0";
import {
  PaymentCryptographyDataClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PaymentCryptographyDataClient";
import { GenerateMacEmvPinChange } from "../schemas/schemas_1_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateMacEmvPinChangeCommand}.
 */
export interface GenerateMacEmvPinChangeCommandInput extends GenerateMacEmvPinChangeInput {}
/**
 * @public
 *
 * The output of {@link GenerateMacEmvPinChangeCommand}.
 */
export interface GenerateMacEmvPinChangeCommandOutput extends GenerateMacEmvPinChangeOutput, __MetadataBearer {}

/**
 * <p>Generates an issuer script mac for EMV payment cards that use offline PINs as the cardholder verification method (CVM).</p> <p>This operation generates an authenticated issuer script response by appending the incoming message data (APDU command) with the target encrypted PIN block in ISO2 format. The command structure and method to send the issuer script update to the card is not defined by this operation and is typically determined by the applicable payment card scheme.</p> <p>The primary inputs to this operation include the incoming new encrypted pinblock, PIN encryption key (PEK), issuer master key (IMK), primary account number (PAN), and the payment card derivation method.</p> <p>The operation uses two issuer master keys - secure messaging for confidentiality (IMK-SMC) and secure messaging for integrity (IMK-SMI). The SMC key is used to internally derive a key to secure the pin, while SMI key is used to internally derive a key to authenticate the script reponse as per the <a href="https://www.emvco.com/specifications/">EMV 4.4 - Book 2 - Security and Key Management</a> specification. </p> <p>This operation supports Amex, EMV2000, EMVCommon, Mastercard and Visa derivation methods, each requiring specific input parameters. Users must follow the specific derivation method and input parameters defined by the respective payment card scheme.</p> <note> <p>Use <a>GenerateMac</a> operation when sending a script update to an EMV card that does not involve PIN change. When assigning IAM permissions, it is important to understand that <a>EncryptData</a> using EMV keys and <a>GenerateMac</a> perform similar functions to this command.</p> </note> <p> <b>Cross-account use</b>: This operation can't be used across different Amazon Web Services accounts.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>EncryptData</a> </p> </li> <li> <p> <a>GenerateMac</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, GenerateMacEmvPinChangeCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GenerateMacEmvPinChangeCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GenerateMacEmvPinChangeInput
 *   NewPinPekIdentifier: "STRING_VALUE", // required
 *   NewEncryptedPinBlock: "STRING_VALUE", // required
 *   PinBlockFormat: "ISO_FORMAT_0" || "ISO_FORMAT_1" || "ISO_FORMAT_3", // required
 *   SecureMessagingIntegrityKeyIdentifier: "STRING_VALUE", // required
 *   SecureMessagingConfidentialityKeyIdentifier: "STRING_VALUE", // required
 *   MessageData: "STRING_VALUE", // required
 *   DerivationMethodAttributes: { // DerivationMethodAttributes Union: only one key present
 *     EmvCommon: { // EmvCommonAttributes
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationCryptogram: "STRING_VALUE", // required
 *       Mode: "ECB" || "CBC", // required
 *       PinBlockPaddingType: "NO_PADDING" || "ISO_IEC_7816_4", // required
 *       PinBlockLengthPosition: "NONE" || "FRONT_OF_PIN_BLOCK", // required
 *     },
 *     Amex: { // AmexAttributes
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *       AuthorizationRequestKeyIdentifier: "STRING_VALUE", // required
 *       CurrentPinAttributes: { // CurrentPinAttributes
 *         CurrentPinPekIdentifier: "STRING_VALUE", // required
 *         CurrentEncryptedPinBlock: "STRING_VALUE", // required
 *       },
 *     },
 *     Visa: { // VisaAttributes
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *       AuthorizationRequestKeyIdentifier: "STRING_VALUE", // required
 *       CurrentPinAttributes: {
 *         CurrentPinPekIdentifier: "STRING_VALUE", // required
 *         CurrentEncryptedPinBlock: "STRING_VALUE", // required
 *       },
 *     },
 *     Emv2000: { // Emv2000Attributes
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     Mastercard: { // MasterCardAttributes
 *       MajorKeyDerivationMode: "EMV_OPTION_A" || "EMV_OPTION_B", // required
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationCryptogram: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new GenerateMacEmvPinChangeCommand(input);
 * const response = await client.send(command);
 * // { // GenerateMacEmvPinChangeOutput
 * //   NewPinPekArn: "STRING_VALUE", // required
 * //   SecureMessagingIntegrityKeyArn: "STRING_VALUE", // required
 * //   SecureMessagingConfidentialityKeyArn: "STRING_VALUE", // required
 * //   Mac: "STRING_VALUE", // required
 * //   EncryptedPinBlock: "STRING_VALUE", // required
 * //   NewPinPekKeyCheckValue: "STRING_VALUE", // required
 * //   SecureMessagingIntegrityKeyCheckValue: "STRING_VALUE", // required
 * //   SecureMessagingConfidentialityKeyCheckValue: "STRING_VALUE", // required
 * //   VisaAmexDerivationOutputs: { // VisaAmexDerivationOutputs
 * //     AuthorizationRequestKeyArn: "STRING_VALUE", // required
 * //     AuthorizationRequestKeyCheckValue: "STRING_VALUE", // required
 * //     CurrentPinPekArn: "STRING_VALUE",
 * //     CurrentPinPekKeyCheckValue: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GenerateMacEmvPinChangeCommandInput - {@link GenerateMacEmvPinChangeCommandInput}
 * @returns {@link GenerateMacEmvPinChangeCommandOutput}
 * @see {@link GenerateMacEmvPinChangeCommandInput} for command's `input` shape.
 * @see {@link GenerateMacEmvPinChangeCommandOutput} for command's `response` shape.
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
export class GenerateMacEmvPinChangeCommand extends $Command
  .classBuilder<
    GenerateMacEmvPinChangeCommandInput,
    GenerateMacEmvPinChangeCommandOutput,
    PaymentCryptographyDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PaymentCryptographyDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PaymentCryptographyDataPlane", "GenerateMacEmvPinChange", {})
  .n("PaymentCryptographyDataClient", "GenerateMacEmvPinChangeCommand")
  .sc(GenerateMacEmvPinChange)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateMacEmvPinChangeInput;
      output: GenerateMacEmvPinChangeOutput;
    };
    sdk: {
      input: GenerateMacEmvPinChangeCommandInput;
      output: GenerateMacEmvPinChangeCommandOutput;
    };
  };
}
