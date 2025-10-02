// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/models_0";
import { de_ModifyLoadBalancerAttributesCommand, se_ModifyLoadBalancerAttributesCommand } from "../protocols/Aws_query";

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
 * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load
 *       Balancer, or Gateway Load Balancer.</p>
 *          <p>If any of the specified attributes can't be modified as requested, the call fails. Any
 *       existing attributes that you do not modify retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyLoadBalancerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyLoadBalancerAttributesInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   Attributes: [ // LoadBalancerAttributes // required
 *     { // LoadBalancerAttribute
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyLoadBalancerAttributesOutput
 * //   Attributes: [ // LoadBalancerAttributes
 * //     { // LoadBalancerAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyLoadBalancerAttributesCommandInput - {@link ModifyLoadBalancerAttributesCommandInput}
 * @returns {@link ModifyLoadBalancerAttributesCommandOutput}
 * @see {@link ModifyLoadBalancerAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyLoadBalancerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To enable deletion protection
 * ```javascript
 * // This example enables deletion protection for the specified load balancer.
 * const input = {
 *   Attributes: [
 *     {
 *       Key: "deletion_protection.enabled",
 *       Value: "true"
 *     }
 *   ],
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       Key: "deletion_protection.enabled",
 *       Value: "true"
 *     },
 *     {
 *       Key: "access_logs.s3.enabled",
 *       Value: "false"
 *     },
 *     {
 *       Key: "idle_timeout.timeout_seconds",
 *       Value: "60"
 *     },
 *     {
 *       Key: "access_logs.s3.prefix",
 *       Value: ""
 *     },
 *     {
 *       Key: "access_logs.s3.bucket",
 *       Value: ""
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To change the idle timeout
 * ```javascript
 * // This example changes the idle timeout value for the specified load balancer.
 * const input = {
 *   Attributes: [
 *     {
 *       Key: "idle_timeout.timeout_seconds",
 *       Value: "30"
 *     }
 *   ],
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       Key: "idle_timeout.timeout_seconds",
 *       Value: "30"
 *     },
 *     {
 *       Key: "access_logs.s3.enabled",
 *       Value: "false"
 *     },
 *     {
 *       Key: "access_logs.s3.prefix",
 *       Value: ""
 *     },
 *     {
 *       Key: "deletion_protection.enabled",
 *       Value: "true"
 *     },
 *     {
 *       Key: "access_logs.s3.bucket",
 *       Value: ""
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To enable access logs
 * ```javascript
 * // This example enables access logs for the specified load balancer. Note that the S3 bucket must exist in the same region as the load balancer and must have a policy attached that grants access to the Elastic Load Balancing service.
 * const input = {
 *   Attributes: [
 *     {
 *       Key: "access_logs.s3.enabled",
 *       Value: "true"
 *     },
 *     {
 *       Key: "access_logs.s3.bucket",
 *       Value: "my-loadbalancer-logs"
 *     },
 *     {
 *       Key: "access_logs.s3.prefix",
 *       Value: "myapp"
 *     }
 *   ],
 *   LoadBalancerArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188"
 * };
 * const command = new ModifyLoadBalancerAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       Key: "access_logs.s3.enabled",
 *       Value: "true"
 *     },
 *     {
 *       Key: "access_logs.s3.bucket",
 *       Value: "my-load-balancer-logs"
 *     },
 *     {
 *       Key: "access_logs.s3.prefix",
 *       Value: "myapp"
 *     },
 *     {
 *       Key: "idle_timeout.timeout_seconds",
 *       Value: "60"
 *     },
 *     {
 *       Key: "deletion_protection.enabled",
 *       Value: "false"
 *     }
 *   ]
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
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "ModifyLoadBalancerAttributes", {})
  .n("ElasticLoadBalancingV2Client", "ModifyLoadBalancerAttributesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyLoadBalancerAttributesCommand)
  .de(de_ModifyLoadBalancerAttributesCommand)
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
