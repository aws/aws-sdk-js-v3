// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/models_1";
import { de_CreateDefaultSubnetCommand, se_CreateDefaultSubnetCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDefaultSubnetCommand}.
 */
export interface CreateDefaultSubnetCommandInput extends CreateDefaultSubnetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDefaultSubnetCommand}.
 */
export interface CreateDefaultSubnetCommandOutput extends CreateDefaultSubnetResult, __MetadataBearer {}

/**
 * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the
 *             specified Availability Zone in your default VPC. You can have only one default subnet
 *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Create a default
 *                 subnet</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateDefaultSubnetRequest
 *   AvailabilityZone: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   Ipv6Native: true || false,
 * };
 * const command = new CreateDefaultSubnetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDefaultSubnetResult
 * //   Subnet: { // Subnet
 * //     AvailabilityZone: "STRING_VALUE",
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     AvailableIpAddressCount: Number("int"),
 * //     CidrBlock: "STRING_VALUE",
 * //     DefaultForAz: true || false,
 * //     EnableLniAtDeviceIndex: Number("int"),
 * //     MapPublicIpOnLaunch: true || false,
 * //     MapCustomerOwnedIpOnLaunch: true || false,
 * //     CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //     State: "pending" || "available" || "unavailable",
 * //     SubnetId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     AssignIpv6AddressOnCreation: true || false,
 * //     Ipv6CidrBlockAssociationSet: [ // SubnetIpv6CidrBlockAssociationSet
 * //       { // SubnetIpv6CidrBlockAssociation
 * //         AssociationId: "STRING_VALUE",
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //           State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //           StatusMessage: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SubnetArn: "STRING_VALUE",
 * //     OutpostArn: "STRING_VALUE",
 * //     EnableDns64: true || false,
 * //     Ipv6Native: true || false,
 * //     PrivateDnsNameOptionsOnLaunch: { // PrivateDnsNameOptionsOnLaunch
 * //       HostnameType: "ip-name" || "resource-name",
 * //       EnableResourceNameDnsARecord: true || false,
 * //       EnableResourceNameDnsAAAARecord: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDefaultSubnetCommandInput - {@link CreateDefaultSubnetCommandInput}
 * @returns {@link CreateDefaultSubnetCommandOutput}
 * @see {@link CreateDefaultSubnetCommandInput} for command's `input` shape.
 * @see {@link CreateDefaultSubnetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateDefaultSubnetCommand extends $Command
  .classBuilder<
    CreateDefaultSubnetCommandInput,
    CreateDefaultSubnetCommandOutput,
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
  .s("AmazonEC2", "CreateDefaultSubnet", {})
  .n("EC2Client", "CreateDefaultSubnetCommand")
  .f(void 0, void 0)
  .ser(se_CreateDefaultSubnetCommand)
  .de(de_CreateDefaultSubnetCommand)
  .build() {}
