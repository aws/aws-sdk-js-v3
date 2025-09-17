// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StopEdgeDeploymentStageRequest } from "../models/models_5";
import { de_StopEdgeDeploymentStageCommand, se_StopEdgeDeploymentStageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopEdgeDeploymentStageCommand}.
 */
export interface StopEdgeDeploymentStageCommandInput extends StopEdgeDeploymentStageRequest {}
/**
 * @public
 *
 * The output of {@link StopEdgeDeploymentStageCommand}.
 */
export interface StopEdgeDeploymentStageCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops a stage in an edge deployment plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopEdgeDeploymentStageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopEdgeDeploymentStageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // StopEdgeDeploymentStageRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new StopEdgeDeploymentStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopEdgeDeploymentStageCommandInput - {@link StopEdgeDeploymentStageCommandInput}
 * @returns {@link StopEdgeDeploymentStageCommandOutput}
 * @see {@link StopEdgeDeploymentStageCommandInput} for command's `input` shape.
 * @see {@link StopEdgeDeploymentStageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StopEdgeDeploymentStageCommand extends $Command
  .classBuilder<
    StopEdgeDeploymentStageCommandInput,
    StopEdgeDeploymentStageCommandOutput,
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
  .s("SageMaker", "StopEdgeDeploymentStage", {})
  .n("SageMakerClient", "StopEdgeDeploymentStageCommand")
  .f(void 0, void 0)
  .ser(se_StopEdgeDeploymentStageCommand)
  .de(de_StopEdgeDeploymentStageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopEdgeDeploymentStageRequest;
      output: {};
    };
    sdk: {
      input: StopEdgeDeploymentStageCommandInput;
      output: StopEdgeDeploymentStageCommandOutput;
    };
  };
}
