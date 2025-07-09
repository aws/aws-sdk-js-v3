// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcPeeringConnectionsRequest, DescribeVpcPeeringConnectionsResult } from "../models/models_6";
import { de_DescribeVpcPeeringConnectionsCommand, se_DescribeVpcPeeringConnectionsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcPeeringConnectionsCommand}.
 */
export interface DescribeVpcPeeringConnectionsCommandInput extends DescribeVpcPeeringConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcPeeringConnectionsCommand}.
 */
export interface DescribeVpcPeeringConnectionsCommandOutput
  extends DescribeVpcPeeringConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Describes your VPC peering connections. The default is to describe all your VPC peering connections.
 *           Alternatively, you can specify specific VPC peering connection IDs or filter the results to
 *           include only the VPC peering connections that match specific criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcPeeringConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcPeeringConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcPeeringConnectionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 *   VpcPeeringConnectionIds: [ // VpcPeeringConnectionIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeVpcPeeringConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcPeeringConnectionsResult
 * //   VpcPeeringConnections: [ // VpcPeeringConnectionList
 * //     { // VpcPeeringConnection
 * //       AccepterVpcInfo: { // VpcPeeringConnectionVpcInfo
 * //         CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockSet: [ // Ipv6CidrBlockSet
 * //           { // Ipv6CidrBlock
 * //             Ipv6CidrBlock: "STRING_VALUE",
 * //           },
 * //         ],
 * //         CidrBlockSet: [ // CidrBlockSet
 * //           { // CidrBlock
 * //             CidrBlock: "STRING_VALUE",
 * //           },
 * //         ],
 * //         OwnerId: "STRING_VALUE",
 * //         PeeringOptions: { // VpcPeeringConnectionOptionsDescription
 * //           AllowDnsResolutionFromRemoteVpc: true || false,
 * //           AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //           AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //         },
 * //         VpcId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //       RequesterVpcInfo: {
 * //         CidrBlock: "STRING_VALUE",
 * //         Ipv6CidrBlockSet: [
 * //           {
 * //             Ipv6CidrBlock: "STRING_VALUE",
 * //           },
 * //         ],
 * //         CidrBlockSet: [
 * //           {
 * //             CidrBlock: "STRING_VALUE",
 * //           },
 * //         ],
 * //         OwnerId: "STRING_VALUE",
 * //         PeeringOptions: {
 * //           AllowDnsResolutionFromRemoteVpc: true || false,
 * //           AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //           AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //         },
 * //         VpcId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
 * //       Status: { // VpcPeeringConnectionStateReason
 * //         Code: "initiating-request" || "pending-acceptance" || "active" || "deleted" || "rejected" || "failed" || "expired" || "provisioning" || "deleting",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcPeeringConnectionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcPeeringConnectionsCommandInput - {@link DescribeVpcPeeringConnectionsCommandInput}
 * @returns {@link DescribeVpcPeeringConnectionsCommandOutput}
 * @see {@link DescribeVpcPeeringConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcPeeringConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcPeeringConnectionsCommand extends $Command
  .classBuilder<
    DescribeVpcPeeringConnectionsCommandInput,
    DescribeVpcPeeringConnectionsCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcPeeringConnections", {})
  .n("EC2Client", "DescribeVpcPeeringConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcPeeringConnectionsCommand)
  .de(de_DescribeVpcPeeringConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcPeeringConnectionsRequest;
      output: DescribeVpcPeeringConnectionsResult;
    };
    sdk: {
      input: DescribeVpcPeeringConnectionsCommandInput;
      output: DescribeVpcPeeringConnectionsCommandOutput;
    };
  };
}
