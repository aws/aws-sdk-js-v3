// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ComputeOptimizerAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ComputeOptimizerAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutomationEventsRequest, ListAutomationEventsResponse } from "../models/models_0";
import { ListAutomationEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationEventsCommand}.
 */
export interface ListAutomationEventsCommandInput extends ListAutomationEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationEventsCommand}.
 */
export interface ListAutomationEventsCommandOutput extends ListAutomationEventsResponse, __MetadataBearer {}

/**
 * <p>Lists automation events based on specified filters. You can retrieve events that were created within the past year. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListAutomationEventsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListAutomationEventsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListAutomationEventsRequest
 *   filters: [ // AutomationEventFilterList
 *     { // AutomationEventFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   startTimeInclusive: new Date("TIMESTAMP"),
 *   endTimeExclusive: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomationEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationEventsResponse
 * //   automationEvents: [ // AutomationEvents
 * //     { // AutomationEvent
 * //       eventId: "STRING_VALUE",
 * //       eventDescription: "STRING_VALUE",
 * //       eventType: "SnapshotAndDeleteUnattachedEbsVolume" || "UpgradeEbsVolumeType",
 * //       eventStatus: "Ready" || "InProgress" || "Complete" || "Failed" || "Cancelled" || "RollbackReady" || "RollbackInProgress" || "RollbackComplete" || "RollbackFailed",
 * //       eventStatusReason: "STRING_VALUE",
 * //       resourceArn: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       recommendedActionId: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       ruleId: "STRING_VALUE",
 * //       resourceType: "EbsVolume",
 * //       createdTimestamp: new Date("TIMESTAMP"),
 * //       completedTimestamp: new Date("TIMESTAMP"),
 * //       estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //         currency: "STRING_VALUE", // required
 * //         beforeDiscountSavings: Number("double"), // required
 * //         afterDiscountSavings: Number("double"), // required
 * //         savingsEstimationMode: "BeforeDiscount" || "AfterDiscount", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomationEventsCommandInput - {@link ListAutomationEventsCommandInput}
 * @returns {@link ListAutomationEventsCommandOutput}
 * @see {@link ListAutomationEventsCommandInput} for command's `input` shape.
 * @see {@link ListAutomationEventsCommandOutput} for command's `response` shape.
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
export class ListAutomationEventsCommand extends $Command
  .classBuilder<
    ListAutomationEventsCommandInput,
    ListAutomationEventsCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListAutomationEvents", {})
  .n("ComputeOptimizerAutomationClient", "ListAutomationEventsCommand")
  .sc(ListAutomationEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomationEventsRequest;
      output: ListAutomationEventsResponse;
    };
    sdk: {
      input: ListAutomationEventsCommandInput;
      output: ListAutomationEventsCommandOutput;
    };
  };
}
