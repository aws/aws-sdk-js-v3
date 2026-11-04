// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RetryRecoveryPlanExecutionStepRequest, RetryRecoveryPlanExecutionStepResponse } from "../models/models_0";
import { RetryRecoveryPlanExecutionStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RetryRecoveryPlanExecutionStepCommand}.
 */
export interface RetryRecoveryPlanExecutionStepCommandInput extends RetryRecoveryPlanExecutionStepRequest {}
/**
 * @public
 *
 * The output of {@link RetryRecoveryPlanExecutionStepCommand}.
 */
export interface RetryRecoveryPlanExecutionStepCommandOutput extends RetryRecoveryPlanExecutionStepResponse, __MetadataBearer {}

/**
 * Retries a failed `SERVER` type execution step.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, RetryRecoveryPlanExecutionStepCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, RetryRecoveryPlanExecutionStepCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // RetryRecoveryPlanExecutionStepRequest
 *   recoveryPlanExecutionStepArn: "STRING_VALUE", // required
 * };
 * const command = new RetryRecoveryPlanExecutionStepCommand(input);
 * const response = await client.send(command);
 * // { // RetryRecoveryPlanExecutionStepResponse
 * //   recoveryPlanExecutionStep: { // RecoveryPlanExecutionStep
 * //     recoveryPlanExecutionStepArn: "STRING_VALUE", // required
 * //     stepIndex: Number("int"), // required
 * //     status: "STRING_VALUE", // required
 * //     stepName: "STRING_VALUE", // required
 * //     configuration: { // RecoveryPlanExecutionStepConfiguration Union: only one key present
 * //       executionServerStepConfiguration: { // ExecutionServerStepConfiguration
 * //         servers: [ // RecoveryPlanExecutionServers // required
 * //           { // RecoveryPlanExecutionServer
 * //             serverArn: "STRING_VALUE", // required
 * //             impactLevel: "STRING_VALUE",
 * //             jobID: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       waitStepConfiguration: { // WaitStepConfiguration
 * //         waitDurationMinutes: Number("int"), // required
 * //       },
 * //     },
 * //     errorDetail: { // ErrorDetail
 * //       message: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //     },
 * //     attempt: Number("int"), // required
 * //     createdAt: "STRING_VALUE", // required
 * //     updatedAt: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param RetryRecoveryPlanExecutionStepCommandInput - {@link RetryRecoveryPlanExecutionStepCommandInput}
 * @returns {@link RetryRecoveryPlanExecutionStepCommandOutput}
 * @see {@link RetryRecoveryPlanExecutionStepCommandInput} for command's `input` shape.
 * @see {@link RetryRecoveryPlanExecutionStepCommandOutput} for command's `response` shape.
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
export class RetryRecoveryPlanExecutionStepCommand extends command<RetryRecoveryPlanExecutionStepCommandInput, RetryRecoveryPlanExecutionStepCommandOutput>(
  _ep0,
  _mw0,
  "RetryRecoveryPlanExecutionStep",
  RetryRecoveryPlanExecutionStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RetryRecoveryPlanExecutionStepRequest;
      output: RetryRecoveryPlanExecutionStepResponse;
    };
    sdk: {
      input: RetryRecoveryPlanExecutionStepCommandInput;
      output: RetryRecoveryPlanExecutionStepCommandOutput;
    };
  };
}
