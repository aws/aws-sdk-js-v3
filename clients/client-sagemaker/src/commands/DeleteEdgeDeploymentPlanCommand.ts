// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEdgeDeploymentPlanRequest } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteEdgeDeploymentPlan } from "../schemas/schemas_0";

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
 * <p>Deletes an edge deployment plan if (and only if) all the stages in the plan are inactive or there are no stages in the plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEdgeDeploymentPlanCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEdgeDeploymentPlanCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteEdgeDeploymentPlan", {})
  .n("SageMakerClient", "DeleteEdgeDeploymentPlanCommand")
  .sc(DeleteEdgeDeploymentPlan)
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
