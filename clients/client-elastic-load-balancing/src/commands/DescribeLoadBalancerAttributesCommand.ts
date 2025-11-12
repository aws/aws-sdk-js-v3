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
import { DescribeLoadBalancerAttributesInput, DescribeLoadBalancerAttributesOutput } from "../models/models_0";
import { DescribeLoadBalancerAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandInput extends DescribeLoadBalancerAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeLoadBalancerAttributesCommand}.
 */
export interface DescribeLoadBalancerAttributesCommandOutput
  extends DescribeLoadBalancerAttributesOutput,
    __MetadataBearer {}

/**
 * <p>Describes the attributes for the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeLoadBalancerAttributesInput
 *   LoadBalancerName: "STRING_VALUE", // required
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLoadBalancerAttributesOutput
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
 * @param DescribeLoadBalancerAttributesCommandInput - {@link DescribeLoadBalancerAttributesCommandInput}
 * @returns {@link DescribeLoadBalancerAttributesCommandOutput}
 * @see {@link DescribeLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link LoadBalancerAttributeNotFoundException} (client fault)
 *  <p>The specified load balancer attribute does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To describe the attributes of a load balancer
 * ```javascript
 * // This example describes the attributes of the specified load balancer.
 * const input = {
 *   LoadBalancerName: "my-load-balancer"
 * };
 * const command = new DescribeLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LoadBalancerAttributes: {
 *     AccessLog: {
 *       Enabled: false
 *     },
 *     ConnectionDraining: {
 *       Enabled: false,
 *       Timeout: 300
 *     },
 *     ConnectionSettings: {
 *       IdleTimeout: 60
 *     },
 *     CrossZoneLoadBalancing: {
 *       Enabled: false
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeLoadBalancerAttributesCommand extends $Command
  .classBuilder<
    DescribeLoadBalancerAttributesCommandInput,
    DescribeLoadBalancerAttributesCommandOutput,
    ElasticLoadBalancingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v7", "DescribeLoadBalancerAttributes", {})
  .n("ElasticLoadBalancingClient", "DescribeLoadBalancerAttributesCommand")
  .sc(DescribeLoadBalancerAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLoadBalancerAttributesInput;
      output: DescribeLoadBalancerAttributesOutput;
    };
    sdk: {
      input: DescribeLoadBalancerAttributesCommandInput;
      output: DescribeLoadBalancerAttributesCommandOutput;
    };
  };
}
