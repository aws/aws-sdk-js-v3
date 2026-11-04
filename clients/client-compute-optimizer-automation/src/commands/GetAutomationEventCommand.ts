// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAutomationEventRequest, GetAutomationEventResponse } from "../models/models_0";
import { GetAutomationEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves details about a specific automation event.
 *
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
export class GetAutomationEventCommand extends command<GetAutomationEventCommandInput, GetAutomationEventCommandOutput>(
  _ep0,
  _mw0,
  "GetAutomationEvent",
  GetAutomationEvent$
) {
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
