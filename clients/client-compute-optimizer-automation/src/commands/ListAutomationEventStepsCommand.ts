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
import type { ListAutomationEventStepsRequest, ListAutomationEventStepsResponse } from "../models/models_0";
import { ListAutomationEventSteps } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationEventStepsCommand}.
 */
export interface ListAutomationEventStepsCommandInput extends ListAutomationEventStepsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationEventStepsCommand}.
 */
export interface ListAutomationEventStepsCommandOutput extends ListAutomationEventStepsResponse, __MetadataBearer {}

/**
 * <p>Lists the steps for a specific automation event. You can only list steps for events created within the past year. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, ListAutomationEventStepsCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, ListAutomationEventStepsCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // ListAutomationEventStepsRequest
 *   eventId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAutomationEventStepsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationEventStepsResponse
 * //   automationEventSteps: [ // AutomationEventSteps
 * //     { // AutomationEventStep
 * //       eventId: "STRING_VALUE",
 * //       stepId: "STRING_VALUE",
 * //       stepType: "CreateEbsSnapshot" || "DeleteEbsVolume" || "ModifyEbsVolume" || "CreateEbsVolume",
 * //       stepStatus: "Ready" || "InProgress" || "Complete" || "Failed",
 * //       resourceId: "STRING_VALUE",
 * //       startTimestamp: new Date("TIMESTAMP"),
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
 * @param ListAutomationEventStepsCommandInput - {@link ListAutomationEventStepsCommandInput}
 * @returns {@link ListAutomationEventStepsCommandOutput}
 * @see {@link ListAutomationEventStepsCommandInput} for command's `input` shape.
 * @see {@link ListAutomationEventStepsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified resource was not found. </p>
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
export class ListAutomationEventStepsCommand extends $Command
  .classBuilder<
    ListAutomationEventStepsCommandInput,
    ListAutomationEventStepsCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "ListAutomationEventSteps", {})
  .n("ComputeOptimizerAutomationClient", "ListAutomationEventStepsCommand")
  .sc(ListAutomationEventSteps)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutomationEventStepsRequest;
      output: ListAutomationEventStepsResponse;
    };
    sdk: {
      input: ListAutomationEventStepsCommandInput;
      output: ListAutomationEventStepsCommandOutput;
    };
  };
}
