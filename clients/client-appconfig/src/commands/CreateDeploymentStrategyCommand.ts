// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDeploymentStrategyRequest, DeploymentStrategy } from "../models/models_0";
import { CreateDeploymentStrategy } from "../schemas/schemas_11_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandInput extends CreateDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentStrategyCommand}.
 */
export interface CreateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * <p>Creates a deployment strategy that defines important criteria for rolling out your
 *          configuration to the designated targets. A deployment strategy includes the overall
 *          duration required, a percentage of targets to receive the deployment during each interval,
 *          an algorithm that defines how percentage grows, and bake time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, CreateDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, CreateDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * // import type { AppConfigClientConfig } from "@aws-sdk/client-appconfig";
 * const config = {}; // type is AppConfigClientConfig
 * const client = new AppConfigClient(config);
 * const input = { // CreateDeploymentStrategyRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DeploymentDurationInMinutes: Number("int"), // required
 *   FinalBakeTimeInMinutes: Number("int"),
 *   GrowthFactor: Number("float"), // required
 *   GrowthType: "LINEAR" || "EXPONENTIAL",
 *   ReplicateTo: "NONE" || "SSM_DOCUMENT",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDeploymentStrategyCommand(input);
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
 * @param CreateDeploymentStrategyCommandInput - {@link CreateDeploymentStrategyCommandInput}
 * @returns {@link CreateDeploymentStrategyCommandOutput}
 * @see {@link CreateDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of one more AppConfig resources exceeds the maximum allowed. Verify that your
 *          environment doesn't exceed the following service quotas:</p>
 *          <p>Applications: 100 max</p>
 *          <p>Deployment strategies: 20 max</p>
 *          <p>Configuration profiles: 100 max per application</p>
 *          <p>Environments: 20 max per application</p>
 *          <p>To resolve this issue, you can delete one or more resources and try again. Or, you can
 *          request a quota increase. For more information about quotas and to request an increase, see
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/appconfig.html#limits_appconfig">Service quotas for AppConfig</a> in the Amazon Web Services General Reference.</p>
 *
 * @throws {@link AppConfigServiceException}
 * <p>Base exception class for all service exceptions from AppConfig service.</p>
 *
 *
 * @example To create a deployment strategy
 * ```javascript
 * // The following create-deployment-strategy example creates a deployment strategy called Example-Deployment that takes 15 minutes and deploys the configuration to 25% of the application at a time. The strategy is also copied to an SSM Document.
 * const input = {
 *   DeploymentDurationInMinutes: 15,
 *   GrowthFactor: 25,
 *   Name: "Example-Deployment",
 *   ReplicateTo: "SSM_DOCUMENT"
 * };
 * const command = new CreateDeploymentStrategyCommand(input);
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
export class CreateDeploymentStrategyCommand extends $Command
  .classBuilder<
    CreateDeploymentStrategyCommandInput,
    CreateDeploymentStrategyCommandOutput,
    AppConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppConfig", "CreateDeploymentStrategy", {})
  .n("AppConfigClient", "CreateDeploymentStrategyCommand")
  .sc(CreateDeploymentStrategy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentStrategyRequest;
      output: DeploymentStrategy;
    };
    sdk: {
      input: CreateDeploymentStrategyCommandInput;
      output: CreateDeploymentStrategyCommandOutput;
    };
  };
}
