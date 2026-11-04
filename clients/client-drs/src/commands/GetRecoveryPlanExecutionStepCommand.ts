// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecoveryPlanExecutionStepRequest, GetRecoveryPlanExecutionStepResponse } from "../models/models_0";
import { GetRecoveryPlanExecutionStep$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecoveryPlanExecutionStepCommand}.
 */
export interface GetRecoveryPlanExecutionStepCommandInput extends GetRecoveryPlanExecutionStepRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPlanExecutionStepCommand}.
 */
export interface GetRecoveryPlanExecutionStepCommandOutput extends GetRecoveryPlanExecutionStepResponse, __MetadataBearer {}

/**
 * Gets the details of a step within a Recovery Plan execution.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetRecoveryPlanExecutionStepCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetRecoveryPlanExecutionStepCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // GetRecoveryPlanExecutionStepRequest
 *   recoveryPlanExecutionStepArn: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryPlanExecutionStepCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPlanExecutionStepResponse
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
 * @param GetRecoveryPlanExecutionStepCommandInput - {@link GetRecoveryPlanExecutionStepCommandInput}
 * @returns {@link GetRecoveryPlanExecutionStepCommandOutput}
 * @see {@link GetRecoveryPlanExecutionStepCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPlanExecutionStepCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
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
export class GetRecoveryPlanExecutionStepCommand extends command<GetRecoveryPlanExecutionStepCommandInput, GetRecoveryPlanExecutionStepCommandOutput>(
  _ep0,
  _mw0,
  "GetRecoveryPlanExecutionStep",
  GetRecoveryPlanExecutionStep$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryPlanExecutionStepRequest;
      output: GetRecoveryPlanExecutionStepResponse;
    };
    sdk: {
      input: GetRecoveryPlanExecutionStepCommandInput;
      output: GetRecoveryPlanExecutionStepCommandOutput;
    };
  };
}
