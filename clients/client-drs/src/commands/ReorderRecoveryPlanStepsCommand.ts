// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ReorderRecoveryPlanStepsRequest, ReorderRecoveryPlanStepsResponse } from "../models/models_0";
import { ReorderRecoveryPlanSteps$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ReorderRecoveryPlanStepsCommand}.
 */
export interface ReorderRecoveryPlanStepsCommandInput extends ReorderRecoveryPlanStepsRequest {}
/**
 * @public
 *
 * The output of {@link ReorderRecoveryPlanStepsCommand}.
 */
export interface ReorderRecoveryPlanStepsCommandOutput extends ReorderRecoveryPlanStepsResponse, __MetadataBearer {}

/**
 * Reorders steps in a Recovery Plan. Accepts a complete ordered list of step ARNs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ReorderRecoveryPlanStepsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ReorderRecoveryPlanStepsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ReorderRecoveryPlanStepsRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 *   orderedStepArns: [ // RecoveryPlanStepArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ReorderRecoveryPlanStepsCommand(input);
 * const response = await client.send(command);
 * // { // ReorderRecoveryPlanStepsResponse
 * //   recoveryPlanSteps: [ // RecoveryPlanStepList // required
 * //     { // RecoveryPlanStep
 * //       recoveryPlanStepArn: "STRING_VALUE", // required
 * //       stepOrder: Number("int"), // required
 * //       stepName: "STRING_VALUE", // required
 * //       configuration: { // RecoveryPlanStepConfiguration Union: only one key present
 * //         serverStepConfiguration: { // ServerStepConfiguration
 * //           servers: [ // RecoveryPlanServers // required
 * //             { // RecoveryPlanServer
 * //               serverArn: "STRING_VALUE", // required
 * //               impactLevel: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         waitStepConfiguration: { // WaitStepConfiguration
 * //           waitDurationMinutes: Number("int"), // required
 * //         },
 * //       },
 * //       createdAt: "STRING_VALUE", // required
 * //       updatedAt: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReorderRecoveryPlanStepsCommandInput - {@link ReorderRecoveryPlanStepsCommandInput}
 * @returns {@link ReorderRecoveryPlanStepsCommandOutput}
 * @see {@link ReorderRecoveryPlanStepsCommandInput} for command's `input` shape.
 * @see {@link ReorderRecoveryPlanStepsCommandOutput} for command's `response` shape.
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
export class ReorderRecoveryPlanStepsCommand extends command<ReorderRecoveryPlanStepsCommandInput, ReorderRecoveryPlanStepsCommandOutput>(
  _ep0,
  _mw0,
  "ReorderRecoveryPlanSteps",
  ReorderRecoveryPlanSteps$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReorderRecoveryPlanStepsRequest;
      output: ReorderRecoveryPlanStepsResponse;
    };
    sdk: {
      input: ReorderRecoveryPlanStepsCommandInput;
      output: ReorderRecoveryPlanStepsCommandOutput;
    };
  };
}
