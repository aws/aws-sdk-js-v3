// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePipelineExecutionRequest, UpdatePipelineExecutionResponse } from "../models/models_5";
import { de_UpdatePipelineExecutionCommand, se_UpdatePipelineExecutionCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineExecutionCommand}.
 */
export interface UpdatePipelineExecutionCommandInput extends UpdatePipelineExecutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineExecutionCommand}.
 */
export interface UpdatePipelineExecutionCommandOutput extends UpdatePipelineExecutionResponse, __MetadataBearer {}

/**
 * <p>Updates a pipeline execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdatePipelineExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 *   PipelineExecutionDescription: "STRING_VALUE",
 *   PipelineExecutionDisplayName: "STRING_VALUE",
 *   ParallelismConfiguration: { // ParallelismConfiguration
 *     MaxParallelExecutionSteps: Number("int"), // required
 *   },
 * };
 * const command = new UpdatePipelineExecutionCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineExecutionResponse
 * //   PipelineExecutionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePipelineExecutionCommandInput - {@link UpdatePipelineExecutionCommandInput}
 * @returns {@link UpdatePipelineExecutionCommandOutput}
 * @see {@link UpdatePipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class UpdatePipelineExecutionCommand extends $Command
  .classBuilder<
    UpdatePipelineExecutionCommandInput,
    UpdatePipelineExecutionCommandOutput,
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
  .s("SageMaker", "UpdatePipelineExecution", {})
  .n("SageMakerClient", "UpdatePipelineExecutionCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePipelineExecutionCommand)
  .de(de_UpdatePipelineExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineExecutionRequest;
      output: UpdatePipelineExecutionResponse;
    };
    sdk: {
      input: UpdatePipelineExecutionCommandInput;
      output: UpdatePipelineExecutionCommandOutput;
    };
  };
}
