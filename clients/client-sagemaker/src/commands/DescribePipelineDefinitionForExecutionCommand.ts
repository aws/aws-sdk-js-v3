// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribePipelineDefinitionForExecutionRequest,
  DescribePipelineDefinitionForExecutionResponse,
} from "../models/models_3";
import {
  de_DescribePipelineDefinitionForExecutionCommand,
  se_DescribePipelineDefinitionForExecutionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePipelineDefinitionForExecutionCommand}.
 */
export interface DescribePipelineDefinitionForExecutionCommandInput
  extends DescribePipelineDefinitionForExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribePipelineDefinitionForExecutionCommand}.
 */
export interface DescribePipelineDefinitionForExecutionCommandOutput
  extends DescribePipelineDefinitionForExecutionResponse,
    __MetadataBearer {}

/**
 * <p>Describes the details of an execution's pipeline definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribePipelineDefinitionForExecutionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribePipelineDefinitionForExecutionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribePipelineDefinitionForExecutionRequest
 *   PipelineExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribePipelineDefinitionForExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelineDefinitionForExecutionResponse
 * //   PipelineDefinition: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribePipelineDefinitionForExecutionCommandInput - {@link DescribePipelineDefinitionForExecutionCommandInput}
 * @returns {@link DescribePipelineDefinitionForExecutionCommandOutput}
 * @see {@link DescribePipelineDefinitionForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineDefinitionForExecutionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
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
export class DescribePipelineDefinitionForExecutionCommand extends $Command
  .classBuilder<
    DescribePipelineDefinitionForExecutionCommandInput,
    DescribePipelineDefinitionForExecutionCommandOutput,
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
  .s("SageMaker", "DescribePipelineDefinitionForExecution", {})
  .n("SageMakerClient", "DescribePipelineDefinitionForExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DescribePipelineDefinitionForExecutionCommand)
  .de(de_DescribePipelineDefinitionForExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePipelineDefinitionForExecutionRequest;
      output: DescribePipelineDefinitionForExecutionResponse;
    };
    sdk: {
      input: DescribePipelineDefinitionForExecutionCommandInput;
      output: DescribePipelineDefinitionForExecutionCommandOutput;
    };
  };
}
