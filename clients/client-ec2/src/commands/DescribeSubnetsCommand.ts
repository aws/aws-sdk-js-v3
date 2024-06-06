// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSubnetsRequest, DescribeSubnetsResult } from "../models/models_5";
import { de_DescribeSubnetsCommand, se_DescribeSubnetsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubnetsCommand}.
 */
export interface DescribeSubnetsCommandInput extends DescribeSubnetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubnetsCommand}.
 */
export interface DescribeSubnetsCommandOutput extends DescribeSubnetsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your subnets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/configure-subnets.html">Subnets</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSubnetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSubnetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSubnetsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SubnetIds: [ // SubnetIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSubnetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubnetsResult
 * //   Subnets: [ // SubnetList
 * //     { // Subnet
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       AvailableIpAddressCount: Number("int"),
 * //       CidrBlock: "STRING_VALUE",
 * //       DefaultForAz: true || false,
 * //       EnableLniAtDeviceIndex: Number("int"),
 * //       MapPublicIpOnLaunch: true || false,
 * //       MapCustomerOwnedIpOnLaunch: true || false,
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       State: "pending" || "available" || "unavailable",
 * //       SubnetId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       AssignIpv6AddressOnCreation: true || false,
 * //       Ipv6CidrBlockAssociationSet: [ // SubnetIpv6CidrBlockAssociationSet
 * //         { // SubnetIpv6CidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //           Ipv6CidrBlockState: { // SubnetCidrBlockState
 * //             State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //             StatusMessage: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SubnetArn: "STRING_VALUE",
 * //       OutpostArn: "STRING_VALUE",
 * //       EnableDns64: true || false,
 * //       Ipv6Native: true || false,
 * //       PrivateDnsNameOptionsOnLaunch: { // PrivateDnsNameOptionsOnLaunch
 * //         HostnameType: "ip-name" || "resource-name",
 * //         EnableResourceNameDnsARecord: true || false,
 * //         EnableResourceNameDnsAAAARecord: true || false,
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSubnetsCommandInput - {@link DescribeSubnetsCommandInput}
 * @returns {@link DescribeSubnetsCommandOutput}
 * @see {@link DescribeSubnetsCommandInput} for command's `input` shape.
 * @see {@link DescribeSubnetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe the subnets for a VPC
 * ```javascript
 * // This example describes the subnets for the specified VPC.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "vpc-id",
 *       "Values": [
 *         "vpc-a01106c2"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeSubnetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Subnets": [
 *     {
 *       "AvailabilityZone": "us-east-1c",
 *       "AvailableIpAddressCount": 251,
 *       "CidrBlock": "10.0.1.0/24",
 *       "DefaultForAz": false,
 *       "MapPublicIpOnLaunch": false,
 *       "State": "available",
 *       "SubnetId": "subnet-9d4a7b6c",
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-subnets-1
 * ```
 *
 */
export class DescribeSubnetsCommand extends $Command
  .classBuilder<
    DescribeSubnetsCommandInput,
    DescribeSubnetsCommandOutput,
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
  .s("AmazonEC2", "DescribeSubnets", {})
  .n("EC2Client", "DescribeSubnetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSubnetsCommand)
  .de(de_DescribeSubnetsCommand)
  .build() {}
