// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { ModifyLoadBalancerAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ModifyLoadBalancerAttributesCommandOutput extends ModifyLoadBalancerAttributesOutput, __MetadataBearer {}

/**
 * Modifies the attributes of the specified load balancer.
 *
 *
 *
 * You can modify the load balancer attributes, such as `AccessLogs`, `ConnectionDraining`, and `CrossZoneLoadBalancing` by either enabling or disabling them. Or, you can modify the load balancer attribute `ConnectionSettings` by specifying an idle connection timeout value for your load balancer.
 *
 *
 *
 * For more information, see the following in the *Classic Load Balancers Guide*:
 *
 * - [Cross-Zone Load Balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html)
 * - [Connection Draining](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html)
 * - [Access Logs](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html)
 * - [Idle Connection Timeout](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html)
 *
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
 *
 * The specified load balancer does not exist.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *
 * The requested configuration change is not valid.
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *
 * The specified load balancer attribute does not exist.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 *
 * Base exception class for all service exceptions from ElasticLoadBalancing service.
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
export class ModifyLoadBalancerAttributesCommand extends command<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ModifyLoadBalancerAttributes",
  ModifyLoadBalancerAttributes$
) {
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
