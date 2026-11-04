// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifyCardValidationDataInput, VerifyCardValidationDataOutput } from "../models/models_0";
import { VerifyCardValidationData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link VerifyCardValidationDataCommand}.
 */
export interface VerifyCardValidationDataCommandInput extends VerifyCardValidationDataInput {}
/**
 * @public
 *
 * The output of {@link VerifyCardValidationDataCommand}.
 */
export interface VerifyCardValidationDataCommandOutput extends VerifyCardValidationDataOutput, __MetadataBearer {}

/**
 * Verifies card-related validation data using algorithms such as Card Verification Values (CVV/CVV2), Dynamic Card Verification Values (dCVV/dCVV2) and Card Security Codes (CSC). For more information, see [Verify card data](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/verify-card-data.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * This operation validates the CVV or CSC codes that is printed on a payment credit or debit card during card payment transaction. The input values are typically provided as part of an inbound transaction to an issuer or supporting platform partner. Amazon Web Services Payment Cryptography uses CVV or CSC, PAN (Primary Account Number) and expiration date of the card to check its validity during transaction processing. In this operation, the CVK (Card Verification Key) encryption key for use with card data verification is same as the one in used for GenerateCardValidationData.
 *
 * For information about valid keys for this operation, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) and [Key types for specific data operations](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * **Cross-account use**: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - GenerateCardValidationData
 * - VerifyAuthRequestCryptogram
 * - VerifyPinData
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentCryptographyDataClient, VerifyCardValidationDataCommand } from "@aws-sdk/client-payment-cryptography-data"; // ES Modules import
 * // const { PaymentCryptographyDataClient, VerifyCardValidationDataCommand } = require("@aws-sdk/client-payment-cryptography-data"); // CommonJS import
 * // import type { PaymentCryptographyDataClientConfig } from "@aws-sdk/client-payment-cryptography-data";
 * const config = {}; // type is PaymentCryptographyDataClientConfig
 * const client = new PaymentCryptographyDataClient(config);
 * const input = { // VerifyCardValidationDataInput
 *   KeyIdentifier: "STRING_VALUE", // required
 *   PrimaryAccountNumber: "STRING_VALUE", // required
 *   VerificationAttributes: { // CardVerificationAttributes Union: only one key present
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
 *     DiscoverDynamicCardVerificationCode: { // DiscoverDynamicCardVerificationCode
 *       CardExpiryDate: "STRING_VALUE", // required
 *       UnpredictableNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
 *     },
 *   },
 *   ValidationData: "STRING_VALUE", // required
 * };
 * const command = new VerifyCardValidationDataCommand(input);
 * const response = await client.send(command);
 * // { // VerifyCardValidationDataOutput
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyCheckValue: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param VerifyCardValidationDataCommandInput - {@link VerifyCardValidationDataCommandInput}
 * @returns {@link VerifyCardValidationDataCommandOutput}
 * @see {@link VerifyCardValidationDataCommandInput} for command's `input` shape.
 * @see {@link VerifyCardValidationDataCommandOutput} for command's `response` shape.
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
 * @throws {@link VerificationFailedException} (client fault)
 *
 * This request failed verification.
 *
 * @throws {@link PaymentCryptographyDataServiceException}
 *
 * Base exception class for all service exceptions from PaymentCryptographyData service.
 *
 * @public
 */
export class VerifyCardValidationDataCommand extends command<VerifyCardValidationDataCommandInput, VerifyCardValidationDataCommandOutput>(
  _ep0,
  _mw0,
  "VerifyCardValidationData",
  VerifyCardValidationData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyCardValidationDataInput;
      output: VerifyCardValidationDataOutput;
    };
    sdk: {
      input: VerifyCardValidationDataCommandInput;
      output: VerifyCardValidationDataCommandOutput;
    };
  };
}
