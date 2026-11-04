// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentConfigInput, GetDeploymentConfigOutput } from "../models/models_0";
import { GetDeploymentConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeploymentConfigCommand}.
 */
export interface GetDeploymentConfigCommandInput extends GetDeploymentConfigInput {}
/**
 * @public
 *
 * The output of {@link GetDeploymentConfigCommand}.
 */
export interface GetDeploymentConfigCommandOutput extends GetDeploymentConfigOutput, __MetadataBearer {}

/**
 * Gets information about a deployment configuration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, GetDeploymentConfigCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, GetDeploymentConfigCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * // import type { CodeDeployClientConfig } from "@aws-sdk/client-codedeploy";
 * const config = {}; // type is CodeDeployClientConfig
 * const client = new CodeDeployClient(config);
 * const input = { // GetDeploymentConfigInput
 *   deploymentConfigName: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentConfigOutput
 * //   deploymentConfigInfo: { // DeploymentConfigInfo
 * //     deploymentConfigId: "STRING_VALUE",
 * //     deploymentConfigName: "STRING_VALUE",
 * //     minimumHealthyHosts: { // MinimumHealthyHosts
 * //       type: "HOST_COUNT" || "FLEET_PERCENT",
 * //       value: Number("int"),
 * //     },
 * //     createTime: new Date("TIMESTAMP"),
 * //     computePlatform: "Server" || "Lambda" || "ECS",
 * //     trafficRoutingConfig: { // TrafficRoutingConfig
 * //       type: "TimeBasedCanary" || "TimeBasedLinear" || "AllAtOnce",
 * //       timeBasedCanary: { // TimeBasedCanary
 * //         canaryPercentage: Number("int"),
 * //         canaryInterval: Number("int"),
 * //       },
 * //       timeBasedLinear: { // TimeBasedLinear
 * //         linearPercentage: Number("int"),
 * //         linearInterval: Number("int"),
 * //       },
 * //     },
 * //     zonalConfig: { // ZonalConfig
 * //       firstZoneMonitorDurationInSeconds: Number("long"),
 * //       monitorDurationInSeconds: Number("long"),
 * //       minimumHealthyHostsPerZone: { // MinimumHealthyHostsPerZone
 * //         type: "HOST_COUNT" || "FLEET_PERCENT",
 * //         value: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentConfigCommandInput - {@link GetDeploymentConfigCommandInput}
 * @returns {@link GetDeploymentConfigCommandOutput}
 * @see {@link GetDeploymentConfigCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentConfigCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link DeploymentConfigDoesNotExistException} (client fault)
 *
 * The deployment configuration does not exist with the user or Amazon Web Services account.
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
 * @throws {@link CodeDeployServiceException}
 *
 * Base exception class for all service exceptions from CodeDeploy service.
 *
 * @public
 */
export class GetDeploymentConfigCommand extends command<GetDeploymentConfigCommandInput, GetDeploymentConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetDeploymentConfig",
  GetDeploymentConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentConfigInput;
      output: GetDeploymentConfigOutput;
    };
    sdk: {
      input: GetDeploymentConfigCommandInput;
      output: GetDeploymentConfigCommandOutput;
    };
  };
}
