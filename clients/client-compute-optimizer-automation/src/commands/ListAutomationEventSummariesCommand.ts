// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutomationEventSummariesRequest, ListAutomationEventSummariesResponse } from "../models/models_0";
import { ListAutomationEventSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListAutomationEventSummariesCommandOutput extends ListAutomationEventSummariesResponse, __MetadataBearer {}

/**
 * Provides a summary of automation events based on specified filters. Only events created within the past year will be included in the summary.
 *
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
export class ListAutomationEventSummariesCommand extends command<ListAutomationEventSummariesCommandInput, ListAutomationEventSummariesCommandOutput>(
  _ep0,
  _mw0,
  "ListAutomationEventSummaries",
  ListAutomationEventSummaries$
) {
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
