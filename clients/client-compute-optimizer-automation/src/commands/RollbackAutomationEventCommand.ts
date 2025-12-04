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
import type { RollbackAutomationEventRequest, RollbackAutomationEventResponse } from "../models/models_0";
import { RollbackAutomationEvent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RollbackAutomationEventCommand}.
 */
export interface RollbackAutomationEventCommandInput extends RollbackAutomationEventRequest {}
/**
 * @public
 *
 * The output of {@link RollbackAutomationEventCommand}.
 */
export interface RollbackAutomationEventCommandOutput extends RollbackAutomationEventResponse, __MetadataBearer {}

/**
 * <p> Initiates a rollback for a completed automation event. </p> <note> <p>Management accounts and delegated administrators can only initiate a rollback for events belonging to associated member accounts. You can associate a member account using <code>AssociateAccounts</code>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, RollbackAutomationEventCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, RollbackAutomationEventCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // RollbackAutomationEventRequest
 *   eventId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new RollbackAutomationEventCommand(input);
 * const response = await client.send(command);
 * // { // RollbackAutomationEventResponse
 * //   eventId: "STRING_VALUE",
 * //   eventStatus: "Ready" || "InProgress" || "Complete" || "Failed" || "Cancelled" || "RollbackReady" || "RollbackInProgress" || "RollbackComplete" || "RollbackFailed",
 * // };
 *
 * ```
 *
 * @param RollbackAutomationEventCommandInput - {@link RollbackAutomationEventCommandInput}
 * @returns {@link RollbackAutomationEventCommandOutput}
 * @see {@link RollbackAutomationEventCommandInput} for command's `input` shape.
 * @see {@link RollbackAutomationEventCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerAutomationClientResolvedConfig | config} for ComputeOptimizerAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *  <p> The specified client token is already in use. </p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.</p>
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
export class RollbackAutomationEventCommand extends $Command
  .classBuilder<
    RollbackAutomationEventCommandInput,
    RollbackAutomationEventCommandOutput,
    ComputeOptimizerAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComputeOptimizerAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ComputeOptimizerAutomationService", "RollbackAutomationEvent", {})
  .n("ComputeOptimizerAutomationClient", "RollbackAutomationEventCommand")
  .sc(RollbackAutomationEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackAutomationEventRequest;
      output: RollbackAutomationEventResponse;
    };
    sdk: {
      input: RollbackAutomationEventCommandInput;
      output: RollbackAutomationEventCommandOutput;
    };
  };
}
