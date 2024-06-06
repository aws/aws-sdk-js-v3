// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcsRequest, DescribeVpcsResult } from "../models/models_5";
import { de_DescribeVpcsCommand, se_DescribeVpcsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcsCommand}.
 */
export interface DescribeVpcsCommandInput extends DescribeVpcsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcsCommand}.
 */
export interface DescribeVpcsCommandOutput extends DescribeVpcsResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpcIds: [ // VpcIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcsResult
 * //   Vpcs: [ // VpcList
 * //     { // Vpc
 * //       CidrBlock: "STRING_VALUE",
 * //       DhcpOptionsId: "STRING_VALUE",
 * //       State: "pending" || "available",
 * //       VpcId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       InstanceTenancy: "default" || "dedicated" || "host",
 * //       Ipv6CidrBlockAssociationSet: [ // VpcIpv6CidrBlockAssociationSet
 * //         { // VpcIpv6CidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //           Ipv6CidrBlockState: { // VpcCidrBlockState
 * //             State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //             StatusMessage: "STRING_VALUE",
 * //           },
 * //           NetworkBorderGroup: "STRING_VALUE",
 * //           Ipv6Pool: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockAssociationSet: [ // VpcCidrBlockAssociationSet
 * //         { // VpcCidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           CidrBlock: "STRING_VALUE",
 * //           CidrBlockState: {
 * //             State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //             StatusMessage: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       IsDefault: true || false,
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcsCommandInput - {@link DescribeVpcsCommandInput}
 * @returns {@link DescribeVpcsCommandOutput}
 * @see {@link DescribeVpcsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 * @example To describe a VPC
 * ```javascript
 * // This example describes the specified VPC.
 * const input = {
 *   "VpcIds": [
 *     "vpc-a01106c2"
 *   ]
 * };
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Vpcs": [
 *     {
 *       "CidrBlock": "10.0.0.0/16",
 *       "DhcpOptionsId": "dopt-7a8b9c2d",
 *       "InstanceTenancy": "default",
 *       "IsDefault": false,
 *       "State": "available",
 *       "Tags": [
 *         {
 *           "Key": "Name",
 *           "Value": "MyVPC"
 *         }
 *       ],
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-vpcs-1
 * ```
 *
 */
export class DescribeVpcsCommand extends $Command
  .classBuilder<
    DescribeVpcsCommandInput,
    DescribeVpcsCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcs", {})
  .n("EC2Client", "DescribeVpcsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcsCommand)
  .de(de_DescribeVpcsCommand)
  .build() {}
