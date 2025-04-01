// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartEdgeDeploymentStageRequest } from "../models/models_4";
import { de_StartEdgeDeploymentStageCommand, se_StartEdgeDeploymentStageCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartEdgeDeploymentStageCommand}.
 */
export interface StartEdgeDeploymentStageCommandInput extends StartEdgeDeploymentStageRequest {}
/**
 * @public
 *
 * The output of {@link StartEdgeDeploymentStageCommand}.
 */
export interface StartEdgeDeploymentStageCommandOutput extends __MetadataBearer {}

/**
 * <p>Starts a stage in an edge deployment plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StartEdgeDeploymentStageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StartEdgeDeploymentStageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // StartEdgeDeploymentStageRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new StartEdgeDeploymentStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartEdgeDeploymentStageCommandInput - {@link StartEdgeDeploymentStageCommandInput}
 * @returns {@link StartEdgeDeploymentStageCommandOutput}
 * @see {@link StartEdgeDeploymentStageCommandInput} for command's `input` shape.
 * @see {@link StartEdgeDeploymentStageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class StartEdgeDeploymentStageCommand extends $Command
  .classBuilder<
    StartEdgeDeploymentStageCommandInput,
    StartEdgeDeploymentStageCommandOutput,
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
  .s("SageMaker", "StartEdgeDeploymentStage", {})
  .n("SageMakerClient", "StartEdgeDeploymentStageCommand")
  .f(void 0, void 0)
  .ser(se_StartEdgeDeploymentStageCommand)
  .de(de_StartEdgeDeploymentStageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEdgeDeploymentStageRequest;
      output: {};
    };
    sdk: {
      input: StartEdgeDeploymentStageCommandInput;
      output: StartEdgeDeploymentStageCommandOutput;
    };
  };
}
