// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDeploymentConfigInput, GetDeploymentConfigOutput } from "../models/models_0";
import { GetDeploymentConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about a deployment configuration.</p>
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
 *  <p>The deployment configuration does not exist with the user or Amazon Web Services account.</p>
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
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 *
 * @public
 */
export class GetDeploymentConfigCommand extends $Command
  .classBuilder<
    GetDeploymentConfigCommandInput,
    GetDeploymentConfigCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeDeploy_20141006", "GetDeploymentConfig", {})
  .n("CodeDeployClient", "GetDeploymentConfigCommand")
  .sc(GetDeploymentConfig$)
  .build() {
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
