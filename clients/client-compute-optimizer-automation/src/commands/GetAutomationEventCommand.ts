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
import type { GetAutomationEventRequest, GetAutomationEventResponse } from "../models/models_0";
import { GetAutomationEvent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutomationEventCommand}.
 */
export interface GetAutomationEventCommandInput extends GetAutomationEventRequest {}
/**
 * @public
 *
 * The output of {@link GetAutomationEventCommand}.
 */
export interface GetAutomationEventCommandOutput extends GetAutomationEventResponse, __MetadataBearer {}

/**
 * <p> Retrieves details about a specific automation event. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, GetAutomationEventCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, GetAutomationEventCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // GetAutomationEventRequest
 *   eventId: "STRING_VALUE", // required
 * };
 * const command = new GetAutomationEventCommand(input);
 * const response = await client.send(command);
 * // { // GetAutomationEventResponse
 * //   eventId: "STRING_VALUE",
 * //   eventDescription: "STRING_VALUE",
 * //   eventType: "SnapshotAndDeleteUnattachedEbsVolume" || "UpgradeEbsVolumeType",
 * //   eventStatus: "Ready" || "InProgress" || "Complete" || "Failed" || "Cancelled" || "RollbackReady" || "RollbackInProgress" || "RollbackComplete" || "RollbackFailed",
 * //   eventStatusReason: "STRING_VALUE",
 * //   resourceArn: "STRING_VALUE",
 * //   resourceId: "STRING_VALUE",
 * //   recommendedActionId: "STRING_VALUE",
 * //   accountId: "STRING_VALUE",
 * //   region: "STRING_VALUE",
 * //   ruleId: "STRING_VALUE",
 * //   resourceType: "EbsVolume",
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * //   completedTimestamp: new Date("TIMESTAMP"),
 * //   estimatedMonthlySavings: { // EstimatedMonthlySavings
 * //     currency: "STRING_VALUE", // required
 * //     beforeDiscountSavings: Number("double"), // required
 * //     afterDiscountSavings: Number("double"), // required
 * //     savingsEstimationMode: "BeforeDiscount" || "AfterDiscount", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutomationEventCommandInput - {@link GetAutomationEventCommandInput}
 * @returns {@link GetAutomationEventCommandOutput}
 * @see {@link GetAutomationEventCommandInput} for command's `input` shape.
 * @see {@link GetAutomationEventCommandOutput} for command's `response` shape.
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
export class GetAutomationEventCommand extends $Command
  .classBuilder<
    GetAutomationEventCommandInput,
    GetAutomationEventCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "GetAutomationEvent", {})
  .n("ComputeOptimizerAutomationClient", "GetAutomationEventCommand")
  .sc(GetAutomationEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutomationEventRequest;
      output: GetAutomationEventResponse;
    };
    sdk: {
      input: GetAutomationEventCommandInput;
      output: GetAutomationEventCommandOutput;
    };
  };
}
