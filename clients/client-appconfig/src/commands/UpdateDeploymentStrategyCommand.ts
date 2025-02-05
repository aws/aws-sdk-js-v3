// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeploymentStrategy, UpdateDeploymentStrategyRequest } from "../models/models_0";
import { de_UpdateDeploymentStrategyCommand, se_UpdateDeploymentStrategyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeploymentStrategyCommand}.
 */
export interface UpdateDeploymentStrategyCommandInput extends UpdateDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeploymentStrategyCommand}.
 */
export interface UpdateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * <p>Updates a deployment strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppConfigClient(config);
 * const input = { // UpdateDeploymentStrategyRequest
 *   DeploymentStrategyId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DeploymentDurationInMinutes: Number("int"),
 *   FinalBakeTimeInMinutes: Number("int"),
 *   GrowthFactor: Number("float"),
 *   GrowthType: "LINEAR" || "EXPONENTIAL",
 * };
 * const command = new UpdateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * // { // DeploymentStrategy
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DeploymentDurationInMinutes: Number("int"),
 * //   GrowthType: "LINEAR" || "EXPONENTIAL",
 * //   GrowthFactor: Number("float"),
 * //   FinalBakeTimeInMinutes: Number("int"),
 * //   ReplicateTo: "NONE" || "SSM_DOCUMENT",
 * // };
 *
 * ```
 *
 * @param UpdateDeploymentStrategyCommandInput - {@link UpdateDeploymentStrategyCommandInput}
 * @returns {@link UpdateDeploymentStrategyCommandOutput}
 * @see {@link UpdateDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 * @public
 * @example To update a deployment strategy
 * ```javascript
 * // The following update-deployment-strategy example updates final bake time to 20 minutes in the specified deployment strategy. ::
 * //
 * const input = {
 *   "DeploymentStrategyId": "1225qzk",
 *   "FinalBakeTimeInMinutes": 20
 * };
 * const command = new UpdateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DeploymentDurationInMinutes": 15,
 *   "FinalBakeTimeInMinutes": 20,
 *   "GrowthFactor": 25,
 *   "GrowthType": "LINEAR",
 *   "Id": "1225qzk",
 *   "Name": "Example-Deployment",
 *   "ReplicateTo": "SSM_DOCUMENT"
 * }
 * *\/
 * // example id: to-update-a-deployment-strategy-1632330896602
 * ```
 *
 */
export class UpdateDeploymentStrategyCommand extends $Command
  .classBuilder<
    UpdateDeploymentStrategyCommandInput,
    UpdateDeploymentStrategyCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppConfig", "UpdateDeploymentStrategy", {})
  .n("AppConfigClient", "UpdateDeploymentStrategyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDeploymentStrategyCommand)
  .de(de_UpdateDeploymentStrategyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeploymentStrategyRequest;
      output: DeploymentStrategy;
    };
    sdk: {
      input: UpdateDeploymentStrategyCommandInput;
      output: UpdateDeploymentStrategyCommandOutput;
    };
  };
}
