// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ModifyVpcEndpointServiceConfigurationRequest,
  ModifyVpcEndpointServiceConfigurationResult,
} from "../models/models_7";
import { ModifyVpcEndpointServiceConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServiceConfigurationCommand}.
 */
export interface ModifyVpcEndpointServiceConfigurationCommandInput
  extends ModifyVpcEndpointServiceConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServiceConfigurationCommand}.
 */
export interface ModifyVpcEndpointServiceConfigurationCommandOutput
  extends ModifyVpcEndpointServiceConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Modifies the attributes of the specified VPC endpoint service configuration.</p>
 *          <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServiceConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointServiceConfigurationRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   PrivateDnsName: "STRING_VALUE",
 *   RemovePrivateDnsName: true || false,
 *   AcceptanceRequired: true || false,
 *   AddNetworkLoadBalancerArns: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   RemoveNetworkLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   AddGatewayLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   RemoveGatewayLoadBalancerArns: [
 *     "STRING_VALUE",
 *   ],
 *   AddSupportedIpAddressTypes: [
 *     "STRING_VALUE",
 *   ],
 *   RemoveSupportedIpAddressTypes: "<ValueStringList>",
 *   AddSupportedRegions: "<ValueStringList>",
 *   RemoveSupportedRegions: "<ValueStringList>",
 * };
 * const command = new ModifyVpcEndpointServiceConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointServiceConfigurationResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointServiceConfigurationCommandInput - {@link ModifyVpcEndpointServiceConfigurationCommandInput}
 * @returns {@link ModifyVpcEndpointServiceConfigurationCommandOutput}
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServiceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcEndpointServiceConfigurationCommand extends $Command
  .classBuilder<
    ModifyVpcEndpointServiceConfigurationCommandInput,
    ModifyVpcEndpointServiceConfigurationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVpcEndpointServiceConfiguration", {})
  .n("EC2Client", "ModifyVpcEndpointServiceConfigurationCommand")
  .sc(ModifyVpcEndpointServiceConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcEndpointServiceConfigurationRequest;
      output: ModifyVpcEndpointServiceConfigurationResult;
    };
    sdk: {
      input: ModifyVpcEndpointServiceConfigurationCommandInput;
      output: ModifyVpcEndpointServiceConfigurationCommandOutput;
    };
  };
}
