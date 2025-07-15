// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdatePipelineRequest, UpdatePipelineResponse } from "../models/models_5";
import { de_UpdatePipelineCommand, se_UpdatePipelineCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandInput extends UpdatePipelineRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePipelineCommand}.
 */
export interface UpdatePipelineCommandOutput extends UpdatePipelineResponse, __MetadataBearer {}

/**
 * <p>Updates a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdatePipelineCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdatePipelineCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdatePipelineRequest
 *   PipelineName: "STRING_VALUE", // required
 *   PipelineDisplayName: "STRING_VALUE",
 *   PipelineDefinition: "STRING_VALUE",
 *   PipelineDefinitionS3Location: { // PipelineDefinitionS3Location
 *     Bucket: "STRING_VALUE", // required
 *     ObjectKey: "STRING_VALUE", // required
 *     VersionId: "STRING_VALUE",
 *   },
 *   PipelineDescription: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   ParallelismConfiguration: { // ParallelismConfiguration
 *     MaxParallelExecutionSteps: Number("int"), // required
 *   },
 * };
 * const command = new UpdatePipelineCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePipelineResponse
 * //   PipelineArn: "STRING_VALUE",
 * //   PipelineVersionId: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdatePipelineCommandInput - {@link UpdatePipelineCommandInput}
 * @returns {@link UpdatePipelineCommandOutput}
 * @see {@link UpdatePipelineCommandInput} for command's `input` shape.
 * @see {@link UpdatePipelineCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an <code>Experiment</code> or <code>Artifact</code>.</p>
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
export class UpdatePipelineCommand extends $Command
  .classBuilder<
    UpdatePipelineCommandInput,
    UpdatePipelineCommandOutput,
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
  .s("SageMaker", "UpdatePipeline", {})
  .n("SageMakerClient", "UpdatePipelineCommand")
  .f(void 0, void 0)
  .ser(se_UpdatePipelineCommand)
  .de(de_UpdatePipelineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePipelineRequest;
      output: UpdatePipelineResponse;
    };
    sdk: {
      input: UpdatePipelineCommandInput;
      output: UpdatePipelineCommandOutput;
    };
  };
}
