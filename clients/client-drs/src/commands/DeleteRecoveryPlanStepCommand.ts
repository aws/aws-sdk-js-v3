// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecoveryPlanStepRequest, DeleteRecoveryPlanStepResponse } from "../models/models_0";
import { DeleteRecoveryPlanStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRecoveryPlanStepCommand}.
 */
export interface DeleteRecoveryPlanStepCommandInput extends DeleteRecoveryPlanStepRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecoveryPlanStepCommand}.
 */
export interface DeleteRecoveryPlanStepCommandOutput extends DeleteRecoveryPlanStepResponse, __MetadataBearer {}

/**
 * <p>Deletes a step from a Recovery Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteRecoveryPlanStepCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteRecoveryPlanStepCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteRecoveryPlanStepRequest
 *   recoveryPlanStepArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecoveryPlanStepCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecoveryPlanStepResponse
 * //   recoveryPlanStepArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteRecoveryPlanStepCommandInput - {@link DeleteRecoveryPlanStepCommandInput}
 * @returns {@link DeleteRecoveryPlanStepCommandOutput}
 * @see {@link DeleteRecoveryPlanStepCommandInput} for command's `input` shape.
 * @see {@link DeleteRecoveryPlanStepCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class DeleteRecoveryPlanStepCommand extends command<DeleteRecoveryPlanStepCommandInput, DeleteRecoveryPlanStepCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecoveryPlanStep",
  DeleteRecoveryPlanStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecoveryPlanStepRequest;
      output: DeleteRecoveryPlanStepResponse;
    };
    sdk: {
      input: DeleteRecoveryPlanStepCommandInput;
      output: DeleteRecoveryPlanStepCommandOutput;
    };
  };
}
