// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDeploymentConfigInput, CreateDeploymentConfigOutput } from "../models/models_0";
import { CreateDeploymentConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a deployment configuration.
 *
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
 *
 * A deployment configuration with the specified name with the user or Amazon Web Services account already exists.
 *
 * @throws {@link DeploymentConfigLimitExceededException} (client fault)
 *
 * The deployment configurations limit was exceeded.
 *
 * @throws {@link DeploymentConfigNameRequiredException} (client fault)
 *
 * The deployment configuration name was not specified.
 *
 * @throws {@link InvalidComputePlatformException} (client fault)
 *
 * The computePlatform is invalid. The computePlatform should be `Lambda`, `Server`, or `ECS`.
 *
 * @throws {@link InvalidDeploymentConfigNameException} (client fault)
 *
 * The deployment configuration name was specified in an invalid format.
 *
 * @throws {@link InvalidMinimumHealthyHostValueException} (client fault)
 *
 * The minimum healthy instance value was specified in an invalid format.
 *
 * @throws {@link InvalidTrafficRoutingConfigurationException} (client fault)
 *
 * The configuration that specifies how traffic is routed during a deployment is invalid.
 *
 * @throws {@link InvalidZonalDeploymentConfigurationException} (client fault)
 *
 * The `ZonalConfig` object is not valid.
 *
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class CreateDeploymentConfigCommand extends command<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateDeploymentConfig",
  CreateDeploymentConfig$
) {
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
