// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPaymentInstrumentRequest, GetPaymentInstrumentResponse } from "../models/models_0";
import { GetPaymentInstrument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPaymentInstrumentCommand}.
 */
export interface GetPaymentInstrumentCommandInput extends GetPaymentInstrumentRequest {}
/**
 * @public
 *
 * The output of {@link GetPaymentInstrumentCommand}.
 */
export interface GetPaymentInstrumentCommandOutput extends GetPaymentInstrumentResponse, __MetadataBearer {}

/**
 * <p>Retrieves a payment instrument on your account, including the details that are specific to its payment method, such as a card's last four digits. Identify the instrument by its Amazon Resource Name (ARN) or by its ID. <code>ListPaymentInstruments</code> returns both.</p> <p>To use this operation, you must have Amazon Web Services Identity and Access Management (IAM) permission for <code>payments:GetPaymentInstrument</code>. You can scope this permission to the instrument's ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PaymentsClient, GetPaymentInstrumentCommand } from "@aws-sdk/client-payments"; // ES Modules import
 * // const { PaymentsClient, GetPaymentInstrumentCommand } = require("@aws-sdk/client-payments"); // CommonJS import
 * // import type { PaymentsClientConfig } from "@aws-sdk/client-payments";
 * const config = {}; // type is PaymentsClientConfig
 * const client = new PaymentsClient(config);
 * const input = { // GetPaymentInstrumentRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetPaymentInstrumentCommand(input);
 * const response = await client.send(command);
 * // { // GetPaymentInstrumentResponse
 * //   paymentInstrument: { // PaymentInstrument
 * //     arn: "STRING_VALUE", // required
 * //     paymentMethod: "CARD" || "US_ACH_BANK_ACCOUNT" || "SEPA_BANK_ACCOUNT" || "UK_BACS_BANK_ACCOUNT" || "IN_NET_BANKING" || "CN_BANK_REDIRECT" || "UPI" || "PIX" || "PAY_BY_INVOICE", // required
 * //     status: "ACTIVE" || "PENDING_SETUP" || "SETUP_IN_PROGRESS" || "INVALID", // required
 * //     details: { // PaymentInstrumentDetails Union: only one key present
 * //       card: { // Card
 * //         brand: "VISA" || "MASTERCARD" || "AMEX" || "DISCOVER" || "JCB" || "RUPAY" || "CHINA_UNIONPAY",
 * //         last4: "STRING_VALUE", // required
 * //         expirationMonth: Number("int"),
 * //         expirationYear: Number("int"),
 * //         cardType: "CREDIT" || "DEBIT",
 * //         issuingBank: "STRING_VALUE",
 * //         issuerCountry: "STRING_VALUE",
 * //       },
 * //       usAchBankAccount: { // UsAchBankAccount
 * //         accountNumberTail: "STRING_VALUE",
 * //         accountHolderName: "STRING_VALUE",
 * //         bankName: "STRING_VALUE",
 * //         accountType: "CHECKING" || "SAVINGS",
 * //       },
 * //       sepaBankAccount: { // SepaBankAccount
 * //         accountNumberTail: "STRING_VALUE",
 * //         accountHolderName: "STRING_VALUE",
 * //         bankName: "STRING_VALUE",
 * //         accountType: "CHECKING" || "SAVINGS",
 * //       },
 * //       ukBacsBankAccount: { // UkBacsBankAccount
 * //         accountNumberTail: "STRING_VALUE",
 * //         accountHolderName: "STRING_VALUE",
 * //         bankName: "STRING_VALUE",
 * //         accountType: "CHECKING" || "SAVINGS",
 * //       },
 * //       inNetBanking: { // InNetBanking
 * //         bankCode: "STRING_VALUE", // required
 * //         bankName: "STRING_VALUE",
 * //       },
 * //       cnBankRedirect: { // CnBankRedirect
 * //         bankCode: "STRING_VALUE",
 * //       },
 * //       upi: { // Upi
 * //         appName: "STRING_VALUE",
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPaymentInstrumentCommandInput - {@link GetPaymentInstrumentCommandInput}
 * @returns {@link GetPaymentInstrumentCommandOutput}
 * @see {@link GetPaymentInstrumentCommandInput} for command's `input` shape.
 * @see {@link GetPaymentInstrumentCommandOutput} for command's `response` shape.
 * @see {@link PaymentsClientResolvedConfig | config} for PaymentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because you don't have sufficient access to perform this operation. Verify that you have the required permissions and try again. This error is also returned, instead of <code>ResourceNotFoundException</code>, when you aren't authorized for the resource, so the response doesn't reveal whether the resource exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource couldn't be found. Verify that the resource ID is correct. This error is returned only when you're authorized for the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Reduce the frequency of your requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check <code>reason</code> and <code>fieldList</code> for the cause, correct the request, and try again.</p>
 *
 * @throws {@link PaymentsServiceException}
 * <p>Base exception class for all service exceptions from Payments service.</p>
 *
 *
 * @example Invoke GetPaymentInstrument
 * ```javascript
 * //
 * const input = {
 *   identifier: "arn:aws:payments::123456789012:payment-instrument:1a2b3c4d-5e6f-7a8b-9c0d-111122223333"
 * };
 * const command = new GetPaymentInstrumentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   paymentInstrument: {
 *     arn: "arn:aws:payments::123456789012:payment-instrument:1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *     createdAt: 1735689600,
 *     details: {
 *       card: {
 *         brand: "VISA",
 *         cardType: "CREDIT",
 *         expirationMonth: 7,
 *         expirationYear: 2030,
 *         issuerCountry: "US",
 *         issuingBank: "Example Bank",
 *         last4: "1111"
 *       }
 *     },
 *     paymentMethod: "CARD",
 *     status: "ACTIVE",
 *     updatedAt: 1738368000
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPaymentInstrumentCommand extends command<GetPaymentInstrumentCommandInput, GetPaymentInstrumentCommandOutput>(
  _ep0,
  _mw0,
  "GetPaymentInstrument",
  GetPaymentInstrument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPaymentInstrumentRequest;
      output: GetPaymentInstrumentResponse;
    };
    sdk: {
      input: GetPaymentInstrumentCommandInput;
      output: GetPaymentInstrumentCommandOutput;
    };
  };
}
