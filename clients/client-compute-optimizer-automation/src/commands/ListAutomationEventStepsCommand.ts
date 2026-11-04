// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutomationEventStepsRequest, ListAutomationEventStepsResponse } from "../models/models_0";
import { ListAutomationEventSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the steps for a specific automation event. You can only list steps for events created within the past year.
 *
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
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
export class ListAutomationEventStepsCommand extends command<ListAutomationEventStepsCommandInput, ListAutomationEventStepsCommandOutput>(
  _ep0,
  _mw0,
  "ListAutomationEventSteps",
  ListAutomationEventSteps$
) {
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
