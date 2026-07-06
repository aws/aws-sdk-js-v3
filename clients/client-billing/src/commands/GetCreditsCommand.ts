// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCreditsRequest, GetCreditsResponse } from "../models/models_0";
import { GetCredits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCreditsCommand}.
 */
export interface GetCreditsCommandInput extends GetCreditsRequest {}
/**
 * @public
 *
 * The output of {@link GetCreditsCommand}.
 */
export interface GetCreditsCommandOutput extends GetCreditsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of Amazon Web Services account credits for the specified account. Each credit includes its identifier, type, monetary amounts, applicable products, expiration, sharing configuration, and current enabled status.</p> <p>When the caller is the management account of a consolidated billing family and <code>payerAccountFlag</code> is <code>true</code>, the response aggregates credits across the entire family. Otherwise, the response includes only credits owned by the account specified in <code>accountId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, GetCreditsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, GetCreditsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // GetCreditsRequest
 *   accountId: "STRING_VALUE", // required
 *   startDate: new Date("TIMESTAMP"), // required
 *   endDate: new Date("TIMESTAMP"),
 *   payerAccountFlag: true || false,
 * };
 * const command = new GetCreditsCommand(input);
 * const response = await client.send(command);
 * // { // GetCreditsResponse
 * //   credits: [ // CreditDataList
 * //     { // CreditData
 * //       creditId: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE", // required
 * //       creditType: "STRING_VALUE", // required
 * //       initialAmount: { // Amount
 * //         currencyCode: "STRING_VALUE", // required
 * //         currencyAmount: "STRING_VALUE", // required
 * //       },
 * //       remainingAmount: {
 * //         currencyCode: "STRING_VALUE", // required
 * //         currencyAmount: "STRING_VALUE", // required
 * //       },
 * //       estimatedAmount: {
 * //         currencyCode: "STRING_VALUE", // required
 * //         currencyAmount: "STRING_VALUE", // required
 * //       },
 * //       applicableProductNames: [ // ProductNames
 * //         "STRING_VALUE",
 * //       ],
 * //       description: "STRING_VALUE", // required
 * //       startDate: new Date("TIMESTAMP"), // required
 * //       endDate: new Date("TIMESTAMP"),
 * //       exhaustDate: new Date("TIMESTAMP"),
 * //       applicationType: "BEFORE_CROSS_SERVICE_DISCOUNTS" || "AFTER_DISCOUNTS",
 * //       shareableAccounts: [ // ShareableAccountIds
 * //         "STRING_VALUE",
 * //       ],
 * //       accountHasCreditSharingEnabled: true || false,
 * //       creditConsoleVisibility: "STRING_VALUE",
 * //       creditSharingType: "DEFAULT" || "DISABLED" || "CUSTOM" || "COST_CATEGORY_RULE",
 * //       costCategoryArn: "STRING_VALUE",
 * //       ruleName: "STRING_VALUE",
 * //       creditStatus: "ENABLED" || "DISABLED",
 * //       purchaseTypeApplications: [ // PurchaseTypeApplications
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCreditsCommandInput - {@link GetCreditsCommandInput}
 * @returns {@link GetCreditsCommandOutput}
 * @see {@link GetCreditsCommandInput} for command's `input` shape.
 * @see {@link GetCreditsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @public
 */
export class GetCreditsCommand extends command<GetCreditsCommandInput, GetCreditsCommandOutput>(
  _ep0,
  _mw0,
  "GetCredits",
  GetCredits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCreditsRequest;
      output: GetCreditsResponse;
    };
    sdk: {
      input: GetCreditsCommandInput;
      output: GetCreditsCommandOutput;
    };
  };
}
