// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEdgeDeploymentPlanRequest } from "../models/models_2";
import { de_DeleteEdgeDeploymentPlanCommand, se_DeleteEdgeDeploymentPlanCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEdgeDeploymentPlanCommand}.
 */
export interface DeleteEdgeDeploymentPlanCommandInput extends DeleteEdgeDeploymentPlanRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEdgeDeploymentPlanCommand}.
 */
export interface DeleteEdgeDeploymentPlanCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an edge deployment plan if (and only if) all the stages in the plan are
 *             inactive or there are no stages in the plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEdgeDeploymentPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEdgeDeploymentPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerClient(config);
 * const input = { // DeleteEdgeDeploymentPlanRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEdgeDeploymentPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEdgeDeploymentPlanCommandInput - {@link DeleteEdgeDeploymentPlanCommandInput}
 * @returns {@link DeleteEdgeDeploymentPlanCommandOutput}
 * @see {@link DeleteEdgeDeploymentPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteEdgeDeploymentPlanCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 * @public
 */
export class DeleteEdgeDeploymentPlanCommand extends $Command
  .classBuilder<
    DeleteEdgeDeploymentPlanCommandInput,
    DeleteEdgeDeploymentPlanCommandOutput,
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
  .s("SageMaker", "DeleteEdgeDeploymentPlan", {})
  .n("SageMakerClient", "DeleteEdgeDeploymentPlanCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEdgeDeploymentPlanCommand)
  .de(de_DeleteEdgeDeploymentPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEdgeDeploymentPlanRequest;
      output: {};
    };
    sdk: {
      input: DeleteEdgeDeploymentPlanCommandInput;
      output: DeleteEdgeDeploymentPlanCommandOutput;
    };
  };
}
