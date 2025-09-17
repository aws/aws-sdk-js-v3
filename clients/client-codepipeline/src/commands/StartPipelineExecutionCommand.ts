// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartPipelineExecutionInput, StartPipelineExecutionOutput } from "../models/models_0";
import { de_StartPipelineExecutionCommand, se_StartPipelineExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionInput {}
/**
 * @public
 *
 * The output of {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit
 *             to the source location specified as part of the pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StartPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * // import type { CodePipelineClientConfig } from "@aws-sdk/client-codepipeline";
 * const config = {}; // type is CodePipelineClientConfig
 * const client = new CodePipelineClient(config);
 * const input = { // StartPipelineExecutionInput
 *   name: "STRING_VALUE", // required
 *   variables: [ // PipelineVariableList
 *     { // PipelineVariable
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE",
 *   sourceRevisions: [ // SourceRevisionOverrideList
 *     { // SourceRevisionOverride
 *       actionName: "STRING_VALUE", // required
 *       revisionType: "COMMIT_ID" || "IMAGE_DIGEST" || "S3_OBJECT_VERSION_ID" || "S3_OBJECT_KEY", // required
 *       revisionValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineExecutionOutput
 * //   pipelineExecutionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPipelineExecutionCommandInput - {@link StartPipelineExecutionCommandInput}
 * @returns {@link StartPipelineExecutionCommandOutput}
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 * @throws {@link ConcurrentPipelineExecutionsLimitExceededException} (client fault)
 *  <p>The pipeline has reached the limit for concurrent pipeline executions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request cannot be handled because the pipeline is busy handling ongoing
 *             activities. Try again later.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The pipeline was specified in an invalid format or cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The validation was specified in an invalid format.</p>
 *
 * @throws {@link CodePipelineServiceException}
 * <p>Base exception class for all service exceptions from CodePipeline service.</p>
 *
 *
 * @public
 */
export class StartPipelineExecutionCommand extends $Command
  .classBuilder<
    StartPipelineExecutionCommandInput,
    StartPipelineExecutionCommandOutput,
    CodePipelineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodePipelineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodePipeline_20150709", "StartPipelineExecution", {})
  .n("CodePipelineClient", "StartPipelineExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StartPipelineExecutionCommand)
  .de(de_StartPipelineExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipelineExecutionInput;
      output: StartPipelineExecutionOutput;
    };
    sdk: {
      input: StartPipelineExecutionCommandInput;
      output: StartPipelineExecutionCommandOutput;
    };
  };
}
