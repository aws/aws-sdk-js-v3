// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRewardRequest, UpdateRewardResponse } from "../models/models_0";
import { UpdateReward$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRewardCommand}.
 */
export interface UpdateRewardCommandInput extends UpdateRewardRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRewardCommand}.
 */
export interface UpdateRewardCommandOutput extends UpdateRewardResponse, __MetadataBearer {}

/**
 * Updates the reward values for a trajectory and transitions it to
 * reward-received status, signaling that it is eligible for processing. Call this
 * operation after CompleteRollout to provide the computed reward scores.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerJobRuntimeClient, UpdateRewardCommand } from "@aws-sdk/client-sagemakerjobruntime"; // ES Modules import
 * // const { SagemakerJobRuntimeClient, UpdateRewardCommand } = require("@aws-sdk/client-sagemakerjobruntime"); // CommonJS import
 * // import type { SagemakerJobRuntimeClientConfig } from "@aws-sdk/client-sagemakerjobruntime";
 * const config = {}; // type is SagemakerJobRuntimeClientConfig
 * const client = new SagemakerJobRuntimeClient(config);
 * const input = { // UpdateRewardRequest
 *   JobArn: "STRING_VALUE", // required
 *   TrajectoryId: "STRING_VALUE", // required
 *   Rewards: [ // DoubleList // required
 *     Number("double"),
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateRewardCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRewardCommandInput - {@link UpdateRewardCommandInput}
 * @returns {@link UpdateRewardCommandOutput}
 * @see {@link UpdateRewardCommandInput} for command's `input` shape.
 * @see {@link UpdateRewardCommandOutput} for command's `response` shape.
 * @see {@link SagemakerJobRuntimeClientResolvedConfig | config} for SagemakerJobRuntimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request conflicts with the current state of the resource.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  An internal service error occurred. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You have exceeded a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled. Retry the request after a brief wait.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request is not valid. Check the request syntax and parameters
 *
 * @throws {@link SagemakerJobRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SagemakerJobRuntime service.</p>
 *
 *
 * @example Invoke UpdateReward
 * ```javascript
 * // Updates the reward values for a completed trajectory.
 * const input = {
 *   JobArn: "arn:aws:sagemaker:us-east-1:123456789012:job/AgentRFT/my-training-job",
 *   Rewards: [
 *     0.85,
 *     0.92,
 *     0.78
 *   ],
 *   TrajectoryId: "trajectory-001"
 * };
 * const command = new UpdateRewardCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRewardCommand extends command<UpdateRewardCommandInput, UpdateRewardCommandOutput>(
  _ep0,
  _mw0,
  "UpdateReward",
  UpdateReward$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRewardRequest;
      output: {};
    };
    sdk: {
      input: UpdateRewardCommandInput;
      output: UpdateRewardCommandOutput;
    };
  };
}
