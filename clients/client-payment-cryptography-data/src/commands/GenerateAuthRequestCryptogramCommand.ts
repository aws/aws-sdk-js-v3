// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateAuthRequestCryptogramInput, GenerateAuthRequestCryptogramOutput } from "../models/models_0";
import { GenerateAuthRequestCryptogram$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates an Authorization Request Cryptogram (ARQC) for an EMV chip payment card authorization. For more information, see [Generate auth request cryptogram](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.generateauthrequestcryptogram.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * ARQC generation uses an Issuer Master Key (IMK) for application cryptograms (TR31_E0_EMV_MKEY_APP_CRYPTOGRAMS) to derive a session key, which is then used to generate the cryptogram from the provided transaction data (when applicable). To use this operation, you must first create or import an IMK-AC key by calling [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html) or [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html). The `KeyModesOfUse` should be set to `DeriveKey` for the IMK-AC encryption key.
 *
 * > **Important:** This operation is intended for development and testing scenarios only. It is not recommended to use this operation as a substitute for card-based cryptogram generation in production payment flows.
 *
 * For information about valid keys for this operation, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) and [Key types for specific data operations](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * **Cross-account use**: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - VerifyAuthRequestCryptogram
 *
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
 *     UnionPay: { // SessionKeyUnionPay
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was denied due to an invalid resource error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was denied due to an invalid request error.
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptographyData service.
 *
 * @public
 */
export class GenerateAuthRequestCryptogramCommand extends command<GenerateAuthRequestCryptogramCommandInput, GenerateAuthRequestCryptogramCommandOutput>(
  _ep0,
  _mw0,
  "GenerateAuthRequestCryptogram",
  GenerateAuthRequestCryptogram$
) {
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
