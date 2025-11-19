// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/models_0";
import { CreateDefaultSubnet } from "../schemas/schemas_0";

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
 *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/work-with-default-vpc.html#create-default-subnet">Create a default
 *                 subnet</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDefaultSubnetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDefaultSubnetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateDefaultSubnetRequest
 *   AvailabilityZone: "STRING_VALUE",
 *   DryRun: true || false,
 *   Ipv6Native: true || false,
 *   AvailabilityZoneId: "STRING_VALUE",
 * };
 * const command = new CreateDefaultSubnetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDefaultSubnetResult
 * //   Subnet: { // Subnet
 * //     AvailabilityZoneId: "STRING_VALUE",
 * //     EnableLniAtDeviceIndex: Number("int"),
 * //     MapCustomerOwnedIpOnLaunch: true || false,
 * //     CustomerOwnedIpv4Pool: "STRING_VALUE",
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
 * //         Ipv6AddressAttribute: "public" || "private",
 * //         IpSource: "amazon" || "byoip" || "none",
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
 * //     BlockPublicAccessStates: { // BlockPublicAccessStates
 * //       InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress",
 * //     },
 * //     Type: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     State: "pending" || "available" || "unavailable" || "failed" || "failed-insufficient-capacity",
 * //     VpcId: "STRING_VALUE",
 * //     CidrBlock: "STRING_VALUE",
 * //     AvailableIpAddressCount: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     DefaultForAz: true || false,
 * //     MapPublicIpOnLaunch: true || false,
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateDefaultSubnet", {})
  .n("EC2Client", "CreateDefaultSubnetCommand")
  .sc(CreateDefaultSubnet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDefaultSubnetRequest;
      output: CreateDefaultSubnetResult;
    };
    sdk: {
      input: CreateDefaultSubnetCommandInput;
      output: CreateDefaultSubnetCommandOutput;
    };
  };
}
