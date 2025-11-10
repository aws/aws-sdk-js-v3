// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartMLEvaluationTaskRunRequest, StartMLEvaluationTaskRunResponse } from "../models/models_3";
import { StartMLEvaluationTaskRun } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMLEvaluationTaskRunCommand}.
 */
export interface StartMLEvaluationTaskRunCommandInput extends StartMLEvaluationTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartMLEvaluationTaskRunCommand}.
 */
export interface StartMLEvaluationTaskRunCommandOutput extends StartMLEvaluationTaskRunResponse, __MetadataBearer {}

/**
 * <p>Starts a task to estimate the quality of the transform. </p>
 *          <p>When you provide label sets as examples of truth, Glue machine learning uses some of
 *       those examples to learn from them. The rest of the labels are used as a test to estimate
 *       quality.</p>
 *          <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more
 *       information about the stats of the <code>EvaluationTaskRun</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartMLEvaluationTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartMLEvaluationTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartMLEvaluationTaskRunRequest
 *   TransformId: "STRING_VALUE", // required
 * };
 * const command = new StartMLEvaluationTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartMLEvaluationTaskRunResponse
 * //   TaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMLEvaluationTaskRunCommandInput - {@link StartMLEvaluationTaskRunCommandInput}
 * @returns {@link StartMLEvaluationTaskRunCommandOutput}
 * @see {@link StartMLEvaluationTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartMLEvaluationTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentRunsExceededException} (client fault)
 *  <p>Too many jobs are being run concurrently.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link MLTransformNotReadyException} (client fault)
 *  <p>The machine learning transform is not ready to run.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StartMLEvaluationTaskRunCommand extends $Command
  .classBuilder<
    StartMLEvaluationTaskRunCommandInput,
    StartMLEvaluationTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StartMLEvaluationTaskRun", {})
  .n("GlueClient", "StartMLEvaluationTaskRunCommand")
  .sc(StartMLEvaluationTaskRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMLEvaluationTaskRunRequest;
      output: StartMLEvaluationTaskRunResponse;
    };
    sdk: {
      input: StartMLEvaluationTaskRunCommandInput;
      output: StartMLEvaluationTaskRunCommandOutput;
    };
  };
}
