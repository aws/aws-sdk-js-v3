// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRecoveryPlanExecutionRequest, GetRecoveryPlanExecutionResponse } from "../models/models_0";
import { GetRecoveryPlanExecution$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRecoveryPlanExecutionCommand}.
 */
export interface GetRecoveryPlanExecutionCommandInput extends GetRecoveryPlanExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetRecoveryPlanExecutionCommand}.
 */
export interface GetRecoveryPlanExecutionCommandOutput extends GetRecoveryPlanExecutionResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a Recovery Plan execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, GetRecoveryPlanExecutionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, GetRecoveryPlanExecutionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // GetRecoveryPlanExecutionRequest
 *   recoveryPlanExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new GetRecoveryPlanExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetRecoveryPlanExecutionResponse
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
 * @param GetRecoveryPlanExecutionCommandInput - {@link GetRecoveryPlanExecutionCommandInput}
 * @returns {@link GetRecoveryPlanExecutionCommandOutput}
 * @see {@link GetRecoveryPlanExecutionCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPlanExecutionCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class GetRecoveryPlanExecutionCommand extends command<GetRecoveryPlanExecutionCommandInput, GetRecoveryPlanExecutionCommandOutput>(
  _ep0,
  _mw0,
  "GetRecoveryPlanExecution",
  GetRecoveryPlanExecution$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRecoveryPlanExecutionRequest;
      output: GetRecoveryPlanExecutionResponse;
    };
    sdk: {
      input: GetRecoveryPlanExecutionCommandInput;
      output: GetRecoveryPlanExecutionCommandOutput;
    };
  };
}
