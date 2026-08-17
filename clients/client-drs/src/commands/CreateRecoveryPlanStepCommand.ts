// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRecoveryPlanStepRequest, CreateRecoveryPlanStepResponse } from "../models/models_0";
import { CreateRecoveryPlanStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRecoveryPlanStepCommand}.
 */
export interface CreateRecoveryPlanStepCommandInput extends CreateRecoveryPlanStepRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecoveryPlanStepCommand}.
 */
export interface CreateRecoveryPlanStepCommandOutput extends CreateRecoveryPlanStepResponse, __MetadataBearer {}

/**
 * <p>Creates a step in a Recovery Plan. A step is either <code>SERVER</code> type (servers to recover in parallel) or <code>WAIT</code> type (timed pause between steps).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateRecoveryPlanStepCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateRecoveryPlanStepCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // CreateRecoveryPlanStepRequest
 *   recoveryPlanArn: "STRING_VALUE", // required
 *   stepName: "STRING_VALUE", // required
 *   stepOrder: Number("int"),
 *   configuration: { // RecoveryPlanStepConfiguration Union: only one key present
 *     serverStepConfiguration: { // ServerStepConfiguration
 *       servers: [ // RecoveryPlanServers // required
 *         { // RecoveryPlanServer
 *           serverArn: "STRING_VALUE", // required
 *           impactLevel: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     waitStepConfiguration: { // WaitStepConfiguration
 *       waitDurationMinutes: Number("int"), // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateRecoveryPlanStepCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecoveryPlanStepResponse
 * //   recoveryPlanStep: { // RecoveryPlanStep
 * //     recoveryPlanStepArn: "STRING_VALUE", // required
 * //     stepOrder: Number("int"), // required
 * //     stepName: "STRING_VALUE", // required
 * //     configuration: { // RecoveryPlanStepConfiguration Union: only one key present
 * //       serverStepConfiguration: { // ServerStepConfiguration
 * //         servers: [ // RecoveryPlanServers // required
 * //           { // RecoveryPlanServer
 * //             serverArn: "STRING_VALUE", // required
 * //             impactLevel: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       waitStepConfiguration: { // WaitStepConfiguration
 * //         waitDurationMinutes: Number("int"), // required
 * //       },
 * //     },
 * //     createdAt: "STRING_VALUE", // required
 * //     updatedAt: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecoveryPlanStepCommandInput - {@link CreateRecoveryPlanStepCommandInput}
 * @returns {@link CreateRecoveryPlanStepCommandOutput}
 * @see {@link CreateRecoveryPlanStepCommandInput} for command's `input` shape.
 * @see {@link CreateRecoveryPlanStepCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
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
export class CreateRecoveryPlanStepCommand extends command<CreateRecoveryPlanStepCommandInput, CreateRecoveryPlanStepCommandOutput>(
  _ep0,
  _mw0,
  "CreateRecoveryPlanStep",
  CreateRecoveryPlanStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRecoveryPlanStepRequest;
      output: CreateRecoveryPlanStepResponse;
    };
    sdk: {
      input: CreateRecoveryPlanStepCommandInput;
      output: CreateRecoveryPlanStepCommandOutput;
    };
  };
}
