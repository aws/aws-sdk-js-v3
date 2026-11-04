// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAutomationEventRequest, StartAutomationEventResponse } from "../models/models_0";
import { StartAutomationEvent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAutomationEventCommand}.
 */
export interface StartAutomationEventCommandInput extends StartAutomationEventRequest {}
/**
 * @public
 *
 * The output of {@link StartAutomationEventCommand}.
 */
export interface StartAutomationEventCommandOutput extends StartAutomationEventResponse, __MetadataBearer {}

/**
 * Initiates a one-time, on-demand automation for the specified recommended action.
 *
 * > **Note:** Management accounts and delegated administrators can only initiate recommended actions for associated member accounts. You can associate a member account using `AssociateAccounts`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, StartAutomationEventCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, StartAutomationEventCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // StartAutomationEventRequest
 *   recommendedActionId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartAutomationEventCommand(input);
 * const response = await client.send(command);
 * // { // StartAutomationEventResponse
 * //   recommendedActionId: "STRING_VALUE",
 * //   eventId: "STRING_VALUE",
 * //   eventStatus: "Ready" || "InProgress" || "Complete" || "Failed" || "Cancelled" || "RollbackReady" || "RollbackInProgress" || "RollbackComplete" || "RollbackFailed",
 * // };
 *
 * ```
 *
 * @param StartAutomationEventCommandInput - {@link StartAutomationEventCommandInput}
 * @returns {@link StartAutomationEventCommandOutput}
 * @see {@link StartAutomationEventCommandInput} for command's `input` shape.
 * @see {@link StartAutomationEventCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would exceed service quotas.
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
export class StartAutomationEventCommand extends command<StartAutomationEventCommandInput, StartAutomationEventCommandOutput>(
  _ep0,
  _mw0,
  "StartAutomationEvent",
  StartAutomationEvent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutomationEventRequest;
      output: StartAutomationEventResponse;
    };
    sdk: {
      input: StartAutomationEventCommandInput;
      output: StartAutomationEventCommandOutput;
    };
  };
}
