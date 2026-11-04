// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecommendedActionSummariesRequest, ListRecommendedActionSummariesResponse } from "../models/models_0";
import { ListRecommendedActionSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecommendedActionSummariesCommand}.
 */
export interface ListRecommendedActionSummariesCommandInput extends ListRecommendedActionSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendedActionSummariesCommand}.
 */
export interface ListRecommendedActionSummariesCommandOutput extends ListRecommendedActionSummariesResponse, __MetadataBearer {}

/**
 * Provides a summary of recommended actions based on specified filters.
 *
 * > **Note:** Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using `AssociateAccounts`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListRecommendedActionSummariesCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListRecommendedActionSummariesCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListRecommendedActionSummariesRequest
 *   filters: [ // RecommendedActionFilterList
 *     { // RecommendedActionFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRecommendedActionSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendedActionSummariesResponse
 * //   recommendedActionSummaries: [ // RecommendedActionSummaries
 * //     { // RecommendedActionSummary
 * //       key: "STRING_VALUE", // required
 * //       total: { // RecommendedActionTotal
 * //         recommendedActionCount: Number("int"), // required
 * //         estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //           currency: "STRING_VALUE", // required
 * //           beforeDiscountSavings: Number("double"), // required
 * //           afterDiscountSavings: Number("double"), // required
 * //           savingsEstimationMode: "BeforeDiscount" || "AfterDiscount", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendedActionSummariesCommandInput - {@link ListRecommendedActionSummariesCommandInput}
 * @returns {@link ListRecommendedActionSummariesCommandOutput}
 * @see {@link ListRecommendedActionSummariesCommandInput} for command's `input` shape.
 * @see {@link ListRecommendedActionSummariesCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error occurred while processing the request.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link OptInRequiredException} (client fault)
 *
 * The account must be opted in to Compute Optimizer Automation before performing this action.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 *
 * Base exception class for all service exceptions from ComputeOptimizerAutomation service.
 *
 * @public
 */
export class ListRecommendedActionSummariesCommand extends command<ListRecommendedActionSummariesCommandInput, ListRecommendedActionSummariesCommandOutput>(
  _ep0,
  _mw0,
  "ListRecommendedActionSummaries",
  ListRecommendedActionSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecommendedActionSummariesRequest;
      output: ListRecommendedActionSummariesResponse;
    };
    sdk: {
      input: ListRecommendedActionSummariesCommandInput;
      output: ListRecommendedActionSummariesCommandOutput;
    };
  };
}
