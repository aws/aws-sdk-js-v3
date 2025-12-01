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
import type { ListAutomationEventSummariesRequest, ListAutomationEventSummariesResponse } from "../models/models_0";
import { ListAutomationEventSummaries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationEventSummariesCommand}.
 */
export interface ListAutomationEventSummariesCommandInput extends ListAutomationEventSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationEventSummariesCommand}.
 */
export interface ListAutomationEventSummariesCommandOutput
  extends ListAutomationEventSummariesResponse,
    __MetadataBearer {}

/**
 * <p>Provides a summary of automation events based on specified filters. Only events created within the past year will be included in the summary. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListAutomationEventSummariesCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListAutomationEventSummariesCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListAutomationEventSummariesRequest
 *   filters: [ // AutomationEventFilterList
 *     { // AutomationEventFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   startDateInclusive: "STRING_VALUE",
 *   endDateExclusive: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomationEventSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationEventSummariesResponse
 * //   automationEventSummaries: [ // AutomationEventSummaryList
 * //     { // AutomationEventSummary
 * //       key: "STRING_VALUE",
 * //       dimensions: [ // SummaryDimensions
 * //         { // SummaryDimension
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       timePeriod: { // TimePeriod
 * //         startTimeInclusive: new Date("TIMESTAMP"),
 * //         endTimeExclusive: new Date("TIMESTAMP"),
 * //       },
 * //       total: { // SummaryTotals
 * //         automationEventCount: Number("int"),
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
 * @param ListAutomationEventSummariesCommandInput - {@link ListAutomationEventSummariesCommandInput}
 * @returns {@link ListAutomationEventSummariesCommandOutput}
 * @see {@link ListAutomationEventSummariesCommandInput} for command's `input` shape.
 * @see {@link ListAutomationEventSummariesCommandOutput} for command's `response` shape.
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
export class ListAutomationEventSummariesCommand extends $Command
  .classBuilder<
    ListAutomationEventSummariesCommandInput,
    ListAutomationEventSummariesCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListAutomationEventSummaries", {})
  .n("ComputeOptimizerAutomationClient", "ListAutomationEventSummariesCommand")
  .sc(ListAutomationEventSummaries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomationEventSummariesRequest;
      output: ListAutomationEventSummariesResponse;
    };
    sdk: {
      input: ListAutomationEventSummariesCommandInput;
      output: ListAutomationEventSummariesCommandOutput;
    };
  };
}
