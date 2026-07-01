// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAutomationRuleRequest, DeleteAutomationRuleResponse } from "../models/models_0";
import { DeleteAutomationRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAutomationRuleCommand}.
 */
export interface DeleteAutomationRuleCommandInput extends DeleteAutomationRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAutomationRuleCommand}.
 */
export interface DeleteAutomationRuleCommandOutput extends DeleteAutomationRuleResponse, __MetadataBearer {}

/**
 * <p> Deletes an existing automation rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerAutomationClient, DeleteAutomationRuleCommand } from "@aws-sdk/client-compute-optimizer-automation"; // ES Modules import
 * // const { ComputeOptimizerAutomationClient, DeleteAutomationRuleCommand } = require("@aws-sdk/client-compute-optimizer-automation"); // CommonJS import
 * // import type { ComputeOptimizerAutomationClientConfig } from "@aws-sdk/client-compute-optimizer-automation";
 * const config = {}; // type is ComputeOptimizerAutomationClientConfig
 * const client = new ComputeOptimizerAutomationClient(config);
 * const input = { // DeleteAutomationRuleRequest
 *   ruleArn: "STRING_VALUE", // required
 *   ruleRevision: Number("long"), // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAutomationRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAutomationRuleCommandInput - {@link DeleteAutomationRuleCommandInput}
 * @returns {@link DeleteAutomationRuleCommandOutput}
 * @see {@link DeleteAutomationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomationRuleCommandOutput} for command's `response` shape.
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
export class DeleteAutomationRuleCommand extends command<DeleteAutomationRuleCommandInput, DeleteAutomationRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAutomationRule",
  DeleteAutomationRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutomationRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteAutomationRuleCommandInput;
      output: DeleteAutomationRuleCommandOutput;
    };
  };
}
