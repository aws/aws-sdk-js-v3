// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateNatGatewayAddressRequest, AssociateNatGatewayAddressResult } from "../models/models_0";
import { de_AssociateNatGatewayAddressCommand, se_AssociateNatGatewayAddressCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateNatGatewayAddressCommand}.
 */
export interface AssociateNatGatewayAddressCommandInput extends AssociateNatGatewayAddressRequest {}
/**
 * @public
 *
 * The output of {@link AssociateNatGatewayAddressCommand}.
 */
export interface AssociateNatGatewayAddressCommandOutput extends AssociateNatGatewayAddressResult, __MetadataBearer {}

/**
 * <p>Associates Elastic IP addresses (EIPs) and private IPv4 addresses with a public NAT gateway. For more information,
 *             see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html#nat-gateway-working-with">Work with NAT gateways</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>By default, you can associate up to 2 Elastic IP addresses per public NAT gateway. You can increase the limit by requesting a quota adjustment. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html#vpc-limits-eips">Elastic IP address quotas</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <important>
 *             <p>When you associate an EIP or secondary EIPs with a public NAT gateway, the network border group of the EIPs must match the network border group of the Availability Zone (AZ) that the public NAT gateway is in. If it's not the same, the EIP will fail to associate. You can see the network border group for the subnet's AZ by viewing the details of the subnet. Similarly, you can view the network border group of an EIP by viewing the details of the EIP address. For more information about network border groups and EIPs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#allocate-eip">Allocate an Elastic IP address</a> in the <i>Amazon VPC User Guide</i>.
 *         </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateNatGatewayAddressCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateNatGatewayAddressCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateNatGatewayAddressRequest
 *   NatGatewayId: "STRING_VALUE", // required
 *   AllocationIds: [ // AllocationIdList // required
 *     "STRING_VALUE",
 *   ],
 *   PrivateIpAddresses: [ // IpList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new AssociateNatGatewayAddressCommand(input);
 * const response = await client.send(command);
 * // { // AssociateNatGatewayAddressResult
 * //   NatGatewayId: "STRING_VALUE",
 * //   NatGatewayAddresses: [ // NatGatewayAddressList
 * //     { // NatGatewayAddress
 * //       AllocationId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       PrivateIp: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       IsPrimary: true || false,
 * //       FailureMessage: "STRING_VALUE",
 * //       Status: "assigning" || "unassigning" || "associating" || "disassociating" || "succeeded" || "failed",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateNatGatewayAddressCommandInput - {@link AssociateNatGatewayAddressCommandInput}
 * @returns {@link AssociateNatGatewayAddressCommandOutput}
 * @see {@link AssociateNatGatewayAddressCommandInput} for command's `input` shape.
 * @see {@link AssociateNatGatewayAddressCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class AssociateNatGatewayAddressCommand extends $Command
  .classBuilder<
    AssociateNatGatewayAddressCommandInput,
    AssociateNatGatewayAddressCommandOutput,
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
  .s("AmazonEC2", "AssociateNatGatewayAddress", {})
  .n("EC2Client", "AssociateNatGatewayAddressCommand")
  .f(void 0, void 0)
  .ser(se_AssociateNatGatewayAddressCommand)
  .de(de_AssociateNatGatewayAddressCommand)
  .build() {}
