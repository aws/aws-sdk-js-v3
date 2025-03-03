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
 * <p>Describes your VPCs. The default is to describe all your VPCs.
 *           Alternatively, you can specify specific VPC IDs or filter the results to
 *           include only the VPCs that match specific criteria.</p>
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
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcsResult
 * //   NextToken: "STRING_VALUE",
 * //   Vpcs: [ // VpcList
 * //     { // Vpc
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
 * //           Ipv6AddressAttribute: "public" || "private",
 * //           IpSource: "amazon" || "byoip" || "none",
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
 * //       EncryptionControl: { // VpcEncryptionControl
 * //         VpcId: "STRING_VALUE",
 * //         VpcEncryptionControlId: "STRING_VALUE",
 * //         Mode: "monitor" || "enforce",
 * //         State: "enforce-in-progress" || "monitor-in-progress" || "enforce-failed" || "monitor-failed" || "deleting" || "deleted" || "available",
 * //         StateMessage: "STRING_VALUE",
 * //         ResourceExclusions: { // VpcEncryptionControlExclusions
 * //           InternetGateway: { // VpcEncryptionControlExclusion
 * //             State: "enabling" || "enabled" || "disabling" || "disabled",
 * //             StateMessage: "STRING_VALUE",
 * //           },
 * //           EgressOnlyInternetGateway: {
 * //             State: "enabling" || "enabled" || "disabling" || "disabled",
 * //             StateMessage: "STRING_VALUE",
 * //           },
 * //           NatGateway: {
 * //             State: "enabling" || "enabled" || "disabling" || "disabled",
 * //             StateMessage: "STRING_VALUE",
 * //           },
 * //           VirtualPrivateGateway: {
 * //             State: "enabling" || "enabled" || "disabling" || "disabled",
 * //             StateMessage: "STRING_VALUE",
 * //           },
 * //           VpcPeering: {
 * //             State: "enabling" || "enabled" || "disabling" || "disabled",
 * //             StateMessage: "STRING_VALUE",
 * //           },
 * //         },
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       BlockPublicAccessStates: { // BlockPublicAccessStates
 * //         InternetGatewayBlockMode: "off" || "block-bidirectional" || "block-ingress",
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       State: "pending" || "available",
 * //       CidrBlock: "STRING_VALUE",
 * //       DhcpOptionsId: "STRING_VALUE",
 * //     },
 * //   ],
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
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcsRequest;
      output: DescribeVpcsResult;
    };
    sdk: {
      input: DescribeVpcsCommandInput;
      output: DescribeVpcsCommandOutput;
    };
  };
}
