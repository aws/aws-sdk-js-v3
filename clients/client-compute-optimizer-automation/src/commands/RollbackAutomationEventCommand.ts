// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RollbackAutomationEventRequest, RollbackAutomationEventResponse } from "../models/models_0";
import { RollbackAutomationEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Initiates a rollback for a completed automation event.
 *
 * > **Note:** Management accounts and delegated administrators can only initiate a rollback for events belonging to associated member accounts. You can associate a member account using `AssociateAccounts`.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You are not authorized to perform this action.
 *
 * @throws {@link IdempotencyTokenInUseException} (client fault)
 *
 * The specified client token is already in use.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * Exception thrown when the same client token is used with different parameters, indicating a mismatch in idempotent request parameters.
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
export class RollbackAutomationEventCommand extends command<RollbackAutomationEventCommandInput, RollbackAutomationEventCommandOutput>(
  _ep0,
  _mw0,
  "RollbackAutomationEvent",
  RollbackAutomationEvent$
) {
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
