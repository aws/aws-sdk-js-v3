// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMRecommendedActionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMRecommendedActionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecommendedActionsRequest, ListRecommendedActionsResponse } from "../models/models_0";
import { ListRecommendedActions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendedActionsCommand}.
 */
export interface ListRecommendedActionsCommandInput extends ListRecommendedActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendedActionsCommand}.
 */
export interface ListRecommendedActionsCommandOutput extends ListRecommendedActionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of recommended actions that match the filter criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMRecommendedActionsClient, ListRecommendedActionsCommand } from "@aws-sdk/client-bcm-recommended-actions"; // ES Modules import
 * // const { BCMRecommendedActionsClient, ListRecommendedActionsCommand } = require("@aws-sdk/client-bcm-recommended-actions"); // CommonJS import
 * // import type { BCMRecommendedActionsClientConfig } from "@aws-sdk/client-bcm-recommended-actions";
 * const config = {}; // type is BCMRecommendedActionsClientConfig
 * const client = new BCMRecommendedActionsClient(config);
 * const input = { // ListRecommendedActionsRequest
 *   filter: { // RequestFilter
 *     actions: [ // ActionFilterList
 *       { // ActionFilter
 *         key: "FEATURE" || "SEVERITY" || "TYPE", // required
 *         matchOption: "EQUALS" || "NOT_EQUALS", // required
 *         values: [ // FilterValues // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendedActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendedActionsResponse
 * //   recommendedActions: [ // RecommendedActions // required
 * //     { // RecommendedAction
 * //       id: "STRING_VALUE",
 * //       type: "ADD_ALTERNATE_BILLING_CONTACT" || "CREATE_ANOMALY_MONITOR" || "CREATE_BUDGET" || "ENABLE_COST_OPTIMIZATION_HUB" || "MIGRATE_TO_GRANULAR_PERMISSIONS" || "PAYMENTS_DUE" || "PAYMENTS_PAST_DUE" || "REVIEW_ANOMALIES" || "REVIEW_BUDGET_ALERTS" || "REVIEW_BUDGETS_EXCEEDED" || "REVIEW_EXPIRING_RI" || "REVIEW_EXPIRING_SP" || "REVIEW_FREETIER_USAGE_ALERTS" || "REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS" || "UPDATE_EXPIRED_PAYMENT_METHOD" || "UPDATE_INVALID_PAYMENT_METHOD" || "UPDATE_TAX_EXEMPTION_CERTIFICATE" || "UPDATE_TAX_REGISTRATION_NUMBER",
 * //       accountId: "STRING_VALUE",
 * //       severity: "INFO" || "WARNING" || "CRITICAL",
 * //       feature: "ACCOUNT" || "BUDGETS" || "COST_ANOMALY_DETECTION" || "COST_OPTIMIZATION_HUB" || "FREE_TIER" || "IAM" || "PAYMENTS" || "RESERVATIONS" || "SAVINGS_PLANS" || "TAX_SETTINGS",
 * //       context: { // Context
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       nextSteps: [ // NextSteps
 * //         "STRING_VALUE",
 * //       ],
 * //       lastUpdatedTimeStamp: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendedActionsCommandInput - {@link ListRecommendedActionsCommandInput}
 * @returns {@link ListRecommendedActionsCommandOutput}
 * @see {@link ListRecommendedActionsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendedActionsCommandOutput} for command's `response` shape.
 * @see {@link BCMRecommendedActionsClientResolvedConfig | config} for BCMRecommendedActionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link BCMRecommendedActionsServiceException}
 * <p>Base exception class for all service exceptions from BCMRecommendedActions service.</p>
 *
 *
 * @public
 */
export class ListRecommendedActionsCommand extends $Command
  .classBuilder<
    ListRecommendedActionsCommandInput,
    ListRecommendedActionsCommandOutput,
    BCMRecommendedActionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMRecommendedActionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingAndCostManagementRecommendedActions", "ListRecommendedActions", {})
  .n("BCMRecommendedActionsClient", "ListRecommendedActionsCommand")
  .sc(ListRecommendedActions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendedActionsRequest;
      output: ListRecommendedActionsResponse;
    };
    sdk: {
      input: ListRecommendedActionsCommandInput;
      output: ListRecommendedActionsCommandOutput;
    };
  };
}
