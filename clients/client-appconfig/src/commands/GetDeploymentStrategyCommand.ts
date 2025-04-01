// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeploymentStrategy, GetDeploymentStrategyRequest } from "../models/models_0";
import { de_GetDeploymentStrategyCommand, se_GetDeploymentStrategyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentStrategyCommand}.
 */
export interface GetDeploymentStrategyCommandInput extends GetDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentStrategyCommand}.
 */
export interface GetDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * <p>Retrieves information about a deployment strategy. A deployment strategy defines
 *          important criteria for rolling out your configuration to the designated targets. A
 *          deployment strategy includes the overall duration required, a percentage of targets to
 *          receive the deployment during each interval, an algorithm that defines how percentage
 *          grows, and bake time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, GetDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, GetDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // GetDeploymentStrategyRequest
 *   DeploymentStrategyId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentStrategyCommand(input);
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
 * @param GetDeploymentStrategyCommandInput - {@link GetDeploymentStrategyCommandInput}
 * @returns {@link GetDeploymentStrategyCommandOutput}
 * @see {@link GetDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStrategyCommandOutput} for command's `response` shape.
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
 *
 * @example To retrieve details of a deployment strategy
 * ```javascript
 * // The following get-deployment-strategy example lists the details of the specified deployment strategy.
 * const input = {
 *   DeploymentStrategyId: "1225qzk"
 * };
 * const command = new GetDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DeploymentDurationInMinutes: 15,
 *   FinalBakeTimeInMinutes: 0,
 *   GrowthFactor: 25,
 *   GrowthType: "LINEAR",
 *   Id: "1225qzk",
 *   Name: "Example-Deployment",
 *   ReplicateTo: "SSM_DOCUMENT"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDeploymentStrategyCommand extends $Command
  .classBuilder<
    GetDeploymentStrategyCommandInput,
    GetDeploymentStrategyCommandOutput,
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
  .s("AmazonAppConfig", "GetDeploymentStrategy", {})
  .n("AppConfigClient", "GetDeploymentStrategyCommand")
  .f(void 0, void 0)
  .ser(se_GetDeploymentStrategyCommand)
  .de(de_GetDeploymentStrategyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentStrategyRequest;
      output: DeploymentStrategy;
    };
    sdk: {
      input: GetDeploymentStrategyCommandInput;
      output: GetDeploymentStrategyCommandOutput;
    };
  };
}
