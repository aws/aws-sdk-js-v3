// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ComputeOptimizerAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRecommendedActionSummariesRequest, ListRecommendedActionSummariesResponse } from "../models/models_0";
import { ListRecommendedActionSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Provides a summary of recommended actions based on specified filters. </p> <note> <p>Management accounts and delegated administrators can retrieve recommended actions that include associated member accounts. You can associate a member account using <code>AssociateAccounts</code>.</p> </note>
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
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal error occurred while processing the request. </p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p> One or more parameter values are not valid. </p>
 *
 * @throws {@link OptInRequiredException} (client fault)
 *  <p> The account must be opted in to Compute Optimizer Automation before performing this action. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p> The service is temporarily unavailable. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link ComputeOptimizerAutomationServiceException}
 * <p>Base exception class for all service exceptions from ComputeOptimizerAutomation service.</p>
 *
 *
 * @public
 */
export class ListRecommendedActionSummariesCommand extends $Command
  .classBuilder<
    ListRecommendedActionSummariesCommandInput,
    ListRecommendedActionSummariesCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListRecommendedActionSummaries", {})
  .n("ComputeOptimizerAutomationClient", "ListRecommendedActionSummariesCommand")
  .sc(ListRecommendedActionSummaries$)
  .build() {
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
