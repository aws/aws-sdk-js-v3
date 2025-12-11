// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEdgeDeploymentStageRequest } from "../models/models_2";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteEdgeDeploymentStage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEdgeDeploymentStageCommand}.
 */
export interface DeleteEdgeDeploymentStageCommandInput extends DeleteEdgeDeploymentStageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEdgeDeploymentStageCommand}.
 */
export interface DeleteEdgeDeploymentStageCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a stage in an edge deployment plan if (and only if) the stage is inactive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteEdgeDeploymentStageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteEdgeDeploymentStageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DeleteEdgeDeploymentStageRequest
 *   EdgeDeploymentPlanName: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEdgeDeploymentStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEdgeDeploymentStageCommandInput - {@link DeleteEdgeDeploymentStageCommandInput}
 * @returns {@link DeleteEdgeDeploymentStageCommandOutput}
 * @see {@link DeleteEdgeDeploymentStageCommandInput} for command's `input` shape.
 * @see {@link DeleteEdgeDeploymentStageCommandOutput} for command's `response` shape.
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
export class DeleteEdgeDeploymentStageCommand extends $Command
  .classBuilder<
    DeleteEdgeDeploymentStageCommandInput,
    DeleteEdgeDeploymentStageCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "DeleteEdgeDeploymentStage", {})
  .n("SageMakerClient", "DeleteEdgeDeploymentStageCommand")
  .sc(DeleteEdgeDeploymentStage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEdgeDeploymentStageRequest;
      output: {};
    };
    sdk: {
      input: DeleteEdgeDeploymentStageCommandInput;
      output: DeleteEdgeDeploymentStageCommandOutput;
    };
  };
}
