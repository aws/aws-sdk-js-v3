// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GenerateCardValidationDataInput, GenerateCardValidationDataOutput } from "../models/models_0";
import { GenerateCardValidationData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GenerateCardValidationDataCommand}.
 */
export interface GenerateCardValidationDataCommandInput extends GenerateCardValidationDataInput {}
/**
 * @public
 *
 * The output of {@link GenerateCardValidationDataCommand}.
 */
export interface GenerateCardValidationDataCommandOutput extends GenerateCardValidationDataOutput, __MetadataBearer {}

/**
 * Generates card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2), or Card Security Codes (CSC). For more information, see [Generate card data](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/generate-card-data.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * This operation generates a CVV or CSC value that is printed on a payment credit or debit card during card production. The CVV or CSC, PAN (Primary Account Number) and expiration date of the card are required to check its validity during transaction processing. To begin this operation, a CVK (Card Verification Key) encryption key is required. You can use [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html) or [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html) to establish a CVK within Amazon Web Services Payment Cryptography. The `KeyModesOfUse` should be set to `Generate` and `Verify` for a CVK encryption key.
 *
 * For information about valid keys for this operation, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) and [Key types for specific data operations](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * **Cross-account use**: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html)
 * - VerifyCardValidationData
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, GenerateCardValidationDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, GenerateCardValidationDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // GenerateCardValidationDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   GenerationAttributes: { // CardGenerationAttributes Union: only one key present
 *     AmexCardSecurityCodeVersion1: { // AmexCardSecurityCodeVersion1
 *       CardExpiryDate: "STRING_VALUE", // required
 *     },
 *     AmexCardSecurityCodeVersion2: { // AmexCardSecurityCodeVersion2
 *       CardExpiryDate: "STRING_VALUE", // required
 *       ServiceCode: "STRING_VALUE", // required
 *     },
 *     CardVerificationValue1: { // CardVerificationValue1
 *       CardExpiryDate: "STRING_VALUE", // required
 *       ServiceCode: "STRING_VALUE", // required
 *     },
 *     CardVerificationValue2: { // CardVerificationValue2
 *       CardExpiryDate: "STRING_VALUE", // required
 *     },
 *     CardHolderVerificationValue: { // CardHolderVerificationValue
 *       UnpredictableNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *     DynamicCardVerificationCode: { // DynamicCardVerificationCode
 *       UnpredictableNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *       TrackData: "STRING_VALUE", // required
 *     },
 *     DynamicCardVerificationValue: { // DynamicCardVerificationValue
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       CardExpiryDate: "STRING_VALUE", // required
 *       ServiceCode: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *   },
 *   ValidationDataLength: Number("int"),
 * };
 * const command = new GenerateCardValidationDataCommand(input);
 * const response = await client.send(command);
 * // { // GenerateCardValidationDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * //   ValidationData: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GenerateCardValidationDataCommandInput - {@link GenerateCardValidationDataCommandInput}
 * @returns {@link GenerateCardValidationDataCommandOutput}
 * @see {@link GenerateCardValidationDataCommandInput} for command's `input` shape.
 * @see {@link GenerateCardValidationDataCommandOutput} for command's `response` shape.
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
export class GenerateCardValidationDataCommand extends command<GenerateCardValidationDataCommandInput, GenerateCardValidationDataCommandOutput>(
  _ep0,
  _mw0,
  "GenerateCardValidationData",
  GenerateCardValidationData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateCardValidationDataInput;
      output: GenerateCardValidationDataOutput;
    };
    sdk: {
      input: GenerateCardValidationDataCommandInput;
      output: GenerateCardValidationDataCommandOutput;
    };
  };
}
