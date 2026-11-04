// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartRecoveryPlanExecutionRequest, StartRecoveryPlanExecutionResponse } from "../models/models_0";
import { StartRecoveryPlanExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartRecoveryPlanExecutionCommand}.
 */
export interface StartRecoveryPlanExecutionCommandInput extends StartRecoveryPlanExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartRecoveryPlanExecutionCommand}.
 */
export interface StartRecoveryPlanExecutionCommandOutput extends StartRecoveryPlanExecutionResponse, __MetadataBearer {}

/**
 * Starts executing a Recovery Plan in `DRILL` or `RECOVERY` mode. A plan cannot have more than one execution in a non-terminal status at a time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StartRecoveryPlanExecutionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StartRecoveryPlanExecutionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // StartRecoveryPlanExecutionRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 *   mode: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   sourceServers: [ // RecoveryPlanExecutionSourceServerList
 *     { // RecoveryPlanExecutionSourceServer
 *       sourceServerID: "STRING_VALUE", // required
 *       recoverySnapshotID: "STRING_VALUE", // required
 *     },
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartRecoveryPlanExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartRecoveryPlanExecutionResponse
 * //   recoveryPlanExecution: { // RecoveryPlanExecution
 * //     recoveryPlanExecutionArn: "STRING_VALUE", // required
 * //     recoveryPlanArn: "STRING_VALUE", // required
 * //     mode: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     startedAt: "STRING_VALUE", // required
 * //     completedAt: "STRING_VALUE",
 * //     errorDetail: { // ErrorDetail
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //     },
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartRecoveryPlanExecutionCommandInput - {@link StartRecoveryPlanExecutionCommandInput}
 * @returns {@link StartRecoveryPlanExecutionCommandOutput}
 * @see {@link StartRecoveryPlanExecutionCommandInput} for command's `input` shape.
 * @see {@link StartRecoveryPlanExecutionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request could not be completed because its exceeded the service quota.
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
export class StartRecoveryPlanExecutionCommand extends command<StartRecoveryPlanExecutionCommandInput, StartRecoveryPlanExecutionCommandOutput>(
  _ep0,
  _mw0,
  "StartRecoveryPlanExecution",
  StartRecoveryPlanExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartRecoveryPlanExecutionRequest;
      output: StartRecoveryPlanExecutionResponse;
    };
    sdk: {
      input: StartRecoveryPlanExecutionCommandInput;
      output: StartRecoveryPlanExecutionCommandOutput;
    };
  };
}
