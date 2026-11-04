// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifyAuthRequestCryptogramInput, VerifyAuthRequestCryptogramOutput } from "../models/models_0";
import { VerifyAuthRequestCryptogram$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Verifies Authorization Request Cryptogram (ARQC) for a EMV chip payment card authorization. For more information, see [Verify auth request cryptogram](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.verifyauthrequestcryptogram.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * ARQC generation is done outside of Amazon Web Services Payment Cryptography and is typically generated on a point of sale terminal for an EMV chip card to obtain payment authorization during transaction time. For ARQC verification, you must first import the ARQC generated outside of Amazon Web Services Payment Cryptography by calling [ImportKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ImportKey.html). This operation uses the imported ARQC and an major encryption key (DUKPT) created by calling [CreateKey](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_CreateKey.html) to either provide a boolean ARQC verification result or provide an APRC (Authorization Response Cryptogram) response using Method 1 or Method 2. The `ARPC_METHOD_1` uses `AuthResponseCode` to generate ARPC and `ARPC_METHOD_2` uses `CardStatusUpdate` to generate ARPC.
 *
 * For information about valid keys for this operation, see [Understanding key attributes](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/keys-validattributes.html) and [Key types for specific data operations](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/crypto-ops-validkeys-ops.html) in the *Amazon Web Services Payment Cryptography User Guide*.
 *
 * **Cross-account use**: This operation supports cross-account use when the key has a resource-based policy that grants access. For more information, see [Resource-based policies](https://docs.aws.amazon.com/payment-cryptography/latest/userguide/security_iam_resource-based-policies.html).
 *
 * **Related operations:**
 *
 * - VerifyCardValidationData
 * - VerifyPinData
 *
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
 *     UnionPay: { // SessionKeyUnionPay
 *       PrimaryAccountNumber: "STRING_VALUE", // required
 *       PanSequenceNumber: "STRING_VALUE", // required
 *       ApplicationTransactionCounter: "STRING_VALUE", // required
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
export class VerifyAuthRequestCryptogramCommand extends command<VerifyAuthRequestCryptogramCommandInput, VerifyAuthRequestCryptogramCommandOutput>(
  _ep0,
  _mw0,
  "VerifyAuthRequestCryptogram",
  VerifyAuthRequestCryptogram$
) {
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
