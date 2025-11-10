// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDeploymentConfigInput, CreateDeploymentConfigOutput } from "../models/models_0";
import { CreateDeploymentConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentConfigCommand}.
 */
export interface CreateDeploymentConfigCommandInput extends CreateDeploymentConfigInput {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentConfigCommand}.
 */
export interface CreateDeploymentConfigCommandOutput extends CreateDeploymentConfigOutput, __MetadataBearer {}

/**
 * <p> Creates a deployment configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, CreateDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, CreateDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // CreateDeploymentConfigInput
 *   deploymentConfigName: "STRING_VALUE", // required
 *   minimumHealthyHosts: { // MinimumHealthyHosts
 *     type: "HOST_COUNT" || "FLEET_PERCENT",
 *     value: Number("int"),
 *   },
 *   trafficRoutingConfig: { // TrafficRoutingConfig
 *     type: "TimeBasedCanary" || "TimeBasedLinear" || "AllAtOnce",
 *     timeBasedCanary: { // TimeBasedCanary
 *       canaryPercentage: Number("int"),
 *       canaryInterval: Number("int"),
 *     },
 *     timeBasedLinear: { // TimeBasedLinear
 *       linearPercentage: Number("int"),
 *       linearInterval: Number("int"),
 *     },
 *   },
 *   computePlatform: "Server" || "Lambda" || "ECS",
 *   zonalConfig: { // ZonalConfig
 *     firstZoneMonitorDurationInSeconds: Number("long"),
 *     monitorDurationInSeconds: Number("long"),
 *     minimumHealthyHostsPerZone: { // MinimumHealthyHostsPerZone
 *       type: "HOST_COUNT" || "FLEET_PERCENT",
 *       value: Number("int"),
 *     },
 *   },
 * };
 * const command = new CreateDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentConfigOutput
 * //   deploymentConfigId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentConfigCommandInput - {@link CreateDeploymentConfigCommandInput}
 * @returns {@link CreateDeploymentConfigCommandOutput}
 * @see {@link CreateDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentConfigAlreadyExistsException} (client fault)
 *  <p>A deployment configuration with the specified name with the user or Amazon Web Services account already exists.</p>
 *
 * @throws {@link DeploymentConfigLimitExceededException} (client fault)
 *  <p>The deployment configurations limit was exceeded.</p>
 *
 * @throws {@link DeploymentConfigNameRequiredException} (client fault)
 *  <p>The deployment configuration name was not specified.</p>
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *  <p>The computePlatform is invalid. The computePlatform should be <code>Lambda</code>, <code>Server</code>, or <code>ECS</code>.</p>
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *  <p>The deployment configuration name was specified in an invalid format.</p>
 *
 * @throws {@link InvalidMinimumHealthyHostValueException} (client fault)
 *  <p>The minimum healthy instance value was specified in an invalid format.</p>
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *  <p> The configuration that specifies how traffic is routed during a deployment is
 *             invalid.</p>
 *
 * @throws {@link InvalidZonalDeploymentConfigurationException} (client fault)
 *  <p>The <code>ZonalConfig</code> object is not valid.</p>
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class CreateDeploymentConfigCommand extends $Command
  .classBuilder<
    CreateDeploymentConfigCommandInput,
    CreateDeploymentConfigCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "CreateDeploymentConfig", {})
  .n("CodeDeployClient", "CreateDeploymentConfigCommand")
  .sc(CreateDeploymentConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentConfigInput;
      output: CreateDeploymentConfigOutput;
    };
    sdk: {
      input: CreateDeploymentConfigCommandInput;
      output: CreateDeploymentConfigCommandOutput;
    };
  };
}
