// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartPipelineExecutionRequest, StartPipelineExecutionResponse } from "../models/models_5";
import { de_StartPipelineExecutionCommand, se_StartPipelineExecutionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

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
export interface StartPipelineExecutionCommandInput extends StartPipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartPipelineExecutionCommand}.
 */
export interface StartPipelineExecutionCommandOutput extends StartPipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Starts a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartPipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartPipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StartPipelineExecutionRequest
 *   PipelineName: "STRING_VALUE", // required
 *   PipelineExecutionDisplayName: "STRING_VALUE",
 *   PipelineParameters: [ // ParameterList
 *     { // Parameter
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   PipelineExecutionDescription: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   ParallelismConfiguration: { // ParallelismConfiguration
 *     MaxParallelExecutionSteps: Number("int"), // required
 *   },
 *   SelectiveExecutionConfig: { // SelectiveExecutionConfig
 *     SourcePipelineExecutionArn: "STRING_VALUE",
 *     SelectedSteps: [ // SelectedStepList // required
 *       { // SelectedStep
 *         StepName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   PipelineVersionId: Number("long"),
 * };
 * const command = new StartPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartPipelineExecutionResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartPipelineExecutionCommandInput - {@link StartPipelineExecutionCommandInput}
 * @returns {@link StartPipelineExecutionCommandOutput}
 * @see {@link StartPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StartPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StartPipelineExecutionCommand extends $Command
  .classBuilder<
    StartPipelineExecutionCommandInput,
    StartPipelineExecutionCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "StartPipelineExecution", {})
  .n("SageMakerClient", "StartPipelineExecutionCommand")
  .f(void 0, void 0)
  .ser(se_StartPipelineExecutionCommand)
  .de(de_StartPipelineExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipelineExecutionRequest;
      output: StartPipelineExecutionResponse;
    };
    sdk: {
      input: StartPipelineExecutionCommandInput;
      output: StartPipelineExecutionCommandOutput;
    };
  };
}
