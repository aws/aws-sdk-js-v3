// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ConfigureHealthCheckInput, ConfigureHealthCheckOutput } from "../models/models_0";
import { ConfigureHealthCheck } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfigureHealthCheckCommand}.
 */
export interface ConfigureHealthCheckCommandInput extends ConfigureHealthCheckInput {}
/**
 * @public
 *
 * The output of {@link ConfigureHealthCheckCommand}.
 */
export interface ConfigureHealthCheckCommandOutput extends ConfigureHealthCheckOutput, __MetadataBearer {}

/**
 * <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ConfigureHealthCheckCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // ConfigureHealthCheckInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   HealthCheck: { // HealthCheck
 *     Target: "STRING_VALUE", // required
 *     Interval: Number("int"), // required
 *     Timeout: Number("int"), // required
 *     UnhealthyThreshold: Number("int"), // required
 *     HealthyThreshold: Number("int"), // required
 *   },
 * };
 * const command = new ConfigureHealthCheckCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureHealthCheckOutput
 * //   HealthCheck: { // HealthCheck
 * //     Target: "STRING_VALUE", // required
 * //     Interval: Number("int"), // required
 * //     Timeout: Number("int"), // required
 * //     UnhealthyThreshold: Number("int"), // required
 * //     HealthyThreshold: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param ConfigureHealthCheckCommandInput - {@link ConfigureHealthCheckCommandInput}
 * @returns {@link ConfigureHealthCheckCommandOutput}
 * @see {@link ConfigureHealthCheckCommandInput} for command's `input` shape.
 * @see {@link ConfigureHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To specify the health check settings for your backend EC2 instances
 * ```javascript
 * // This example specifies the health check settings used to evaluate the health of your backend EC2 instances.
 * const input = {
 *   HealthCheck: {
 *     HealthyThreshold: 2,
 *     Interval: 30,
 *     Target: "HTTP:80/png",
 *     Timeout: 3,
 *     UnhealthyThreshold: 2
 *   },
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new ConfigureHealthCheckCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   HealthCheck: {
 *     HealthyThreshold: 2,
 *     Interval: 30,
 *     Target: "HTTP:80/png",
 *     Timeout: 3,
 *     UnhealthyThreshold: 2
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ConfigureHealthCheckCommand extends $Command
  .classBuilder<
    ConfigureHealthCheckCommandInput,
    ConfigureHealthCheckCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "ConfigureHealthCheck", {})
  .n("ElasticLoadBalancingClient", "ConfigureHealthCheckCommand")
  .sc(ConfigureHealthCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfigureHealthCheckInput;
      output: ConfigureHealthCheckOutput;
    };
    sdk: {
      input: ConfigureHealthCheckCommandInput;
      output: ConfigureHealthCheckCommandOutput;
    };
  };
}
