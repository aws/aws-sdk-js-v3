// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRecoveryPlanRequest, UpdateRecoveryPlanResponse } from "../models/models_0";
import { UpdateRecoveryPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRecoveryPlanCommand}.
 */
export interface UpdateRecoveryPlanCommandInput extends UpdateRecoveryPlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecoveryPlanCommand}.
 */
export interface UpdateRecoveryPlanCommandOutput extends UpdateRecoveryPlanResponse, __MetadataBearer {}

/**
 * Updates a Recovery Plan's name or description.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, UpdateRecoveryPlanCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, UpdateRecoveryPlanCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // UpdateRecoveryPlanRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateRecoveryPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecoveryPlanResponse
 * //   recoveryPlan: { // RecoveryPlan
 * //     recoveryPlanArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     createdAt: "STRING_VALUE", // required
 * //     updatedAt: "STRING_VALUE", // required
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRecoveryPlanCommandInput - {@link UpdateRecoveryPlanCommandInput}
 * @returns {@link UpdateRecoveryPlanCommandOutput}
 * @see {@link UpdateRecoveryPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryPlanCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the target resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class UpdateRecoveryPlanCommand extends command<UpdateRecoveryPlanCommandInput, UpdateRecoveryPlanCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRecoveryPlan",
  UpdateRecoveryPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecoveryPlanRequest;
      output: UpdateRecoveryPlanResponse;
    };
    sdk: {
      input: UpdateRecoveryPlanCommandInput;
      output: UpdateRecoveryPlanCommandOutput;
    };
  };
}
