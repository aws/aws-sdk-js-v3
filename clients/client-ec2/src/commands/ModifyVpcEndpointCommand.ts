// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyVpcEndpointRequest, ModifyVpcEndpointResult } from "../models/models_6";
import { de_ModifyVpcEndpointCommand, se_ModifyVpcEndpointCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointCommand}.
 */
export interface ModifyVpcEndpointCommandInput extends ModifyVpcEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointCommand}.
 */
export interface ModifyVpcEndpointCommandOutput extends ModifyVpcEndpointResult, __MetadataBearer {}

/**
 * <p>Modifies attributes of a specified VPC endpoint. The attributes that you can modify
 *             depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information,
 *             see the <a href="https://docs.aws.amazon.com/vpc/latest/privatelink/">Amazon Web Services PrivateLink
 *                 Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointRequest
 *   DryRun: true || false,
 *   VpcEndpointId: "STRING_VALUE", // required
 *   ResetPolicy: true || false,
 *   PolicyDocument: "STRING_VALUE",
 *   AddRouteTableIds: [ // VpcEndpointRouteTableIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveRouteTableIds: [
 *     "STRING_VALUE",
 *   ],
 *   AddSubnetIds: [ // VpcEndpointSubnetIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSubnetIds: [
 *     "STRING_VALUE",
 *   ],
 *   AddSecurityGroupIds: [ // VpcEndpointSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   RemoveSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   IpAddressType: "ipv4" || "dualstack" || "ipv6",
 *   DnsOptions: { // DnsOptionsSpecification
 *     DnsRecordIpType: "ipv4" || "dualstack" || "ipv6" || "service-defined",
 *     PrivateDnsOnlyForInboundResolverEndpoint: true || false,
 *   },
 *   PrivateDnsEnabled: true || false,
 *   SubnetConfigurations: [ // SubnetConfigurationsList
 *     { // SubnetConfiguration
 *       SubnetId: "STRING_VALUE",
 *       Ipv4: "STRING_VALUE",
 *       Ipv6: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyVpcEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointCommandInput - {@link ModifyVpcEndpointCommandInput}
 * @returns {@link ModifyVpcEndpointCommandOutput}
 * @see {@link ModifyVpcEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyVpcEndpointCommand extends $Command
  .classBuilder<
    ModifyVpcEndpointCommandInput,
    ModifyVpcEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyVpcEndpoint", {})
  .n("EC2Client", "ModifyVpcEndpointCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVpcEndpointCommand)
  .de(de_ModifyVpcEndpointCommand)
  .build() {}
