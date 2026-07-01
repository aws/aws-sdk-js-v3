// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRecoveryGroupRequest, UpdateRecoveryGroupResponse } from "../models/models_0";
import { UpdateRecoveryGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRecoveryGroupCommand}.
 */
export interface UpdateRecoveryGroupCommandInput extends UpdateRecoveryGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecoveryGroupCommand}.
 */
export interface UpdateRecoveryGroupCommandOutput extends UpdateRecoveryGroupResponse, __MetadataBearer {}

/**
 * <p>Updates a recovery group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, UpdateRecoveryGroupCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, UpdateRecoveryGroupCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // UpdateRecoveryGroupRequest
 *   Cells: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 *   RecoveryGroupName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRecoveryGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecoveryGroupResponse
 * //   Cells: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   RecoveryGroupArn: "STRING_VALUE",
 * //   RecoveryGroupName: "STRING_VALUE",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRecoveryGroupCommandInput - {@link UpdateRecoveryGroupCommandInput}
 * @returns {@link UpdateRecoveryGroupCommandOutput}
 * @see {@link UpdateRecoveryGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRecoveryGroupCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 *
 * @public
 */
export class UpdateRecoveryGroupCommand extends command<UpdateRecoveryGroupCommandInput, UpdateRecoveryGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRecoveryGroup",
  UpdateRecoveryGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRecoveryGroupRequest;
      output: UpdateRecoveryGroupResponse;
    };
    sdk: {
      input: UpdateRecoveryGroupCommandInput;
      output: UpdateRecoveryGroupCommandOutput;
    };
  };
}
