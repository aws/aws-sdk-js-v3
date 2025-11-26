// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { ModifyLoadBalancerAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandInput extends ModifyLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link ModifyLoadBalancerAttributesCommand}.
 */
export interface ModifyLoadBalancerAttributesCommandOutput
  extends ModifyLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Modifies the attributes of the specified load balancer.</p>
 *         <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and
 *             <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute
 *             <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p>
 *         <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // ModifyLoadBalancerAttributesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 *   LoadBalancerAttributes: { // LoadBalancerAttributes
 *     CrossZoneLoadBalancing: { // CrossZoneLoadBalancing
 *       Enabled: true || false, // required
 *     },
 *     AccessLog: { // AccessLog
 *       Enabled: true || false, // required
 *       S3BucketName: "STRING_VALUE",
 *       EmitInterval: Number("int"),
 *       S3BucketPrefix: "STRING_VALUE",
 *     },
 *     ConnectionDraining: { // ConnectionDraining
 *       Enabled: true || false, // required
 *       Timeout: Number("int"),
 *     },
 *     ConnectionSettings: { // ConnectionSettings
 *       IdleTimeout: Number("int"), // required
 *     },
 *     AdditionalAttributes: [ // AdditionalAttributes
 *       { // AdditionalAttribute
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLoadBalancerAttributesOutput
 * //   LoadBalancerName: "STRING_VALUE",
 * //   LoadBalancerAttributes: { // LoadBalancerAttributes
 * //     CrossZoneLoadBalancing: { // CrossZoneLoadBalancing
 * //       Enabled: true || false, // required
 * //     },
 * //     AccessLog: { // AccessLog
 * //       Enabled: true || false, // required
 * //       S3BucketName: "STRING_VALUE",
 * //       EmitInterval: Number("int"),
 * //       S3BucketPrefix: "STRING_VALUE",
 * //     },
 * //     ConnectionDraining: { // ConnectionDraining
 * //       Enabled: true || false, // required
 * //       Timeout: Number("int"),
 * //     },
 * //     ConnectionSettings: { // ConnectionSettings
 * //       IdleTimeout: Number("int"), // required
 * //     },
 * //     AdditionalAttributes: [ // AdditionalAttributes
 * //       { // AdditionalAttribute
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyLoadBalancerAttributesCommandInput - {@link ModifyLoadBalancerAttributesCommandInput}
 * @returns {@link ModifyLoadBalancerAttributesCommandOutput}
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration change is not valid.</p>
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *  <p>The specified load balancer attribute does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To enable cross-zone load balancing
 * ```javascript
 * // This example enables cross-zone load balancing for the specified load balancer.
 * const input = {
 *   LoadBalancerAttributes: {
 *     CrossZoneLoadBalancing: {
 *       Enabled: true
 *     }
 *   },
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancerAttributes: {
 *     CrossZoneLoadBalancing: {
 *       Enabled: true
 *     }
 *   },
 *   LoadBalancerName: "my-load-balancer"
 * }
 * *\/
 * ```
 *
 * @example To enable connection draining
 * ```javascript
 * // This example enables connection draining for the specified load balancer.
 * const input = {
 *   LoadBalancerAttributes: {
 *     ConnectionDraining: {
 *       Enabled: true,
 *       Timeout: 300
 *     }
 *   },
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancerAttributes: {
 *     ConnectionDraining: {
 *       Enabled: true,
 *       Timeout: 300
 *     }
 *   },
 *   LoadBalancerName: "my-load-balancer"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyLoadBalancerAttributesCommand extends $Command
  .classBuilder<
    ModifyLoadBalancerAttributesCommandInput,
    ModifyLoadBalancerAttributesCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "ModifyLoadBalancerAttributes", {})
  .n("ElasticLoadBalancingClient", "ModifyLoadBalancerAttributesCommand")
  .sc(ModifyLoadBalancerAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyLoadBalancerAttributesInput;
      output: ModifyLoadBalancerAttributesOutput;
    };
    sdk: {
      input: ModifyLoadBalancerAttributesCommandInput;
      output: ModifyLoadBalancerAttributesCommandOutput;
    };
  };
}
