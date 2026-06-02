// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CompleteRolloutRequest, CompleteRolloutResponse } from "../models/models_0";
import type {
  SagemakerJobRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SagemakerJobRuntimeClient";
import { CompleteRollout$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteRolloutCommand}.
 */
export interface CompleteRolloutCommandInput extends CompleteRolloutRequest {}
/**
 * @public
 *
 * The output of {@link CompleteRolloutCommand}.
 */
export interface CompleteRolloutCommandOutput extends CompleteRolloutResponse, __MetadataBearer {}

/**
 * Marks a rollout as complete, indicating that no further turns will be appended
 * to the trajectory. After calling this operation, the trajectory is sealed and
 * eligible for reward submission via the UpdateReward operation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SagemakerJobRuntimeClient, CompleteRolloutCommand } from "@aws-sdk/client-sagemakerjobruntime"; // ES Modules import
 * // const { SagemakerJobRuntimeClient, CompleteRolloutCommand } = require("@aws-sdk/client-sagemakerjobruntime"); // CommonJS import
 * // import type { SagemakerJobRuntimeClientConfig } from "@aws-sdk/client-sagemakerjobruntime";
 * const config = {}; // type is SagemakerJobRuntimeClientConfig
 * const client = new SagemakerJobRuntimeClient(config);
 * const input = { // CompleteRolloutRequest
 *   JobArn: "STRING_VALUE", // required
 *   TrajectoryId: "STRING_VALUE", // required
 *   Status: "ready" || "failed",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CompleteRolloutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteRolloutCommandInput - {@link CompleteRolloutCommandInput}
 * @returns {@link CompleteRolloutCommandOutput}
 * @see {@link CompleteRolloutCommandInput} for command's `input` shape.
 * @see {@link CompleteRolloutCommandOutput} for command's `response` shape.
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
 * @example Invoke CompleteRollout
 * ```javascript
 * // Marks a rollout as complete so the trajectory is sealed and eligible for reward submission.
 * const input = {
 *   JobArn: "arn:aws:sagemaker:us-east-1:123456789012:job/AgentRFT/my-training-job",
 *   Status: "ready",
 *   TrajectoryId: "trajectory-001"
 * };
 * const command = new CompleteRolloutCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CompleteRolloutCommand extends $Command
  .classBuilder<
    CompleteRolloutCommandInput,
    CompleteRolloutCommandOutput,
    SagemakerJobRuntimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SagemakerJobRuntimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AgenticRFTRuntimeService", "CompleteRollout", {})
  .n("SagemakerJobRuntimeClient", "CompleteRolloutCommand")
  .sc(CompleteRollout$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteRolloutRequest;
      output: {};
    };
    sdk: {
      input: CompleteRolloutCommandInput;
      output: CompleteRolloutCommandOutput;
    };
  };
}
