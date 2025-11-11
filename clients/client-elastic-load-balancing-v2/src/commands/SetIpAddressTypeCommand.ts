// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SetIpAddressTypeInput, SetIpAddressTypeOutput } from "../models/models_0";
import { SetIpAddressType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetIpAddressTypeCommand}.
 */
export interface SetIpAddressTypeCommandInput extends SetIpAddressTypeInput {}
/**
 * @public
 *
 * The output of {@link SetIpAddressTypeCommand}.
 */
export interface SetIpAddressTypeCommandOutput extends SetIpAddressTypeOutput, __MetadataBearer {}

/**
 * <p>Sets the type of IP addresses used by the subnets of the specified load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, SetIpAddressTypeCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // SetIpAddressTypeInput
 *   LoadBalancerArn: "STRING_VALUE", // required
 *   IpAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4", // required
 * };
 * const command = new SetIpAddressTypeCommand(input);
 * const response = await client.send(command);
 * // { // SetIpAddressTypeOutput
 * //   IpAddressType: "ipv4" || "dualstack" || "dualstack-without-public-ipv4",
 * // };
 *
 * ```
 *
 * @param SetIpAddressTypeCommandInput - {@link SetIpAddressTypeCommandInput}
 * @returns {@link SetIpAddressTypeCommandOutput}
 * @see {@link SetIpAddressTypeCommandInput} for command's `input` shape.
 * @see {@link SetIpAddressTypeCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link InvalidSubnetException} (client fault)
 *  <p>The specified subnet is out of available addresses.</p>
 *
 * @throws {@link LoadBalancerNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @public
 */
export class SetIpAddressTypeCommand extends $Command
  .classBuilder<
    SetIpAddressTypeCommandInput,
    SetIpAddressTypeCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "SetIpAddressType", {})
  .n("ElasticLoadBalancingV2Client", "SetIpAddressTypeCommand")
  .sc(SetIpAddressType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetIpAddressTypeInput;
      output: SetIpAddressTypeOutput;
    };
    sdk: {
      input: SetIpAddressTypeCommandInput;
      output: SetIpAddressTypeCommandOutput;
    };
  };
}
