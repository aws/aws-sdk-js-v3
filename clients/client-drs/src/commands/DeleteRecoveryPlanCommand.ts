// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRecoveryPlanRequest, DeleteRecoveryPlanResponse } from "../models/models_0";
import { DeleteRecoveryPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRecoveryPlanCommand}.
 */
export interface DeleteRecoveryPlanCommandInput extends DeleteRecoveryPlanRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecoveryPlanCommand}.
 */
export interface DeleteRecoveryPlanCommandOutput extends DeleteRecoveryPlanResponse, __MetadataBearer {}

/**
 * <p>Deletes a Recovery Plan. Cannot delete a plan that has an execution in a non-terminal status (<code>CREATED</code>, <code>IN_PROGRESS</code>).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteRecoveryPlanCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteRecoveryPlanCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteRecoveryPlanRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRecoveryPlanCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecoveryPlanResponse
 * //   recoveryPlanArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteRecoveryPlanCommandInput - {@link DeleteRecoveryPlanCommandInput}
 * @returns {@link DeleteRecoveryPlanCommandOutput}
 * @see {@link DeleteRecoveryPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteRecoveryPlanCommandOutput} for command's `response` shape.
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
export class DeleteRecoveryPlanCommand extends command<DeleteRecoveryPlanCommandInput, DeleteRecoveryPlanCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRecoveryPlan",
  DeleteRecoveryPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecoveryPlanRequest;
      output: DeleteRecoveryPlanResponse;
    };
    sdk: {
      input: DeleteRecoveryPlanCommandInput;
      output: DeleteRecoveryPlanCommandOutput;
    };
  };
}
