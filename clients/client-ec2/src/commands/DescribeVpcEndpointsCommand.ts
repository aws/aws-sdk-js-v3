// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointsRequest } from "../models/models_5";
import { DescribeVpcEndpointsResult } from "../models/models_6";
import { de_DescribeVpcEndpointsCommand, se_DescribeVpcEndpointsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointsCommand}.
 */
export interface DescribeVpcEndpointsCommandInput extends DescribeVpcEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointsCommand}.
 */
export interface DescribeVpcEndpointsCommandOutput extends DescribeVpcEndpointsResult, __MetadataBearer {}

/**
 * <p>Describes your VPC endpoints. The default is to describe all your VPC endpoints.
 *             Alternatively, you can specify specific VPC endpoint IDs or filter the results to
 *             include only the VPC endpoints that match specific criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointsRequest
 *   DryRun: true || false,
 *   VpcEndpointIds: [ // VpcEndpointIdList
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
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointsResult
 * //   VpcEndpoints: [ // VpcEndpointSet
 * //     { // VpcEndpoint
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointType: "Interface" || "Gateway" || "GatewayLoadBalancer" || "Resource" || "ServiceNetwork",
 * //       VpcId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       State: "PendingAcceptance" || "Pending" || "Available" || "Deleting" || "Deleted" || "Rejected" || "Failed" || "Expired" || "Partial",
 * //       PolicyDocument: "STRING_VALUE",
 * //       RouteTableIds: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Groups: [ // GroupIdentifierSet
 * //         { // SecurityGroupIdentifier
 * //           GroupId: "STRING_VALUE",
 * //           GroupName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //       DnsOptions: { // DnsOptions
 * //         DnsRecordIpType: "ipv4" || "dualstack" || "ipv6" || "service-defined",
 * //         PrivateDnsOnlyForInboundResolverEndpoint: true || false,
 * //       },
 * //       PrivateDnsEnabled: true || false,
 * //       RequesterManaged: true || false,
 * //       NetworkInterfaceIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsEntries: [ // DnsEntrySet
 * //         { // DnsEntry
 * //           DnsName: "STRING_VALUE",
 * //           HostedZoneId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       LastError: { // LastError
 * //         Message: "STRING_VALUE",
 * //         Code: "STRING_VALUE",
 * //       },
 * //       Ipv4Prefixes: [ // SubnetIpPrefixesList
 * //         { // SubnetIpPrefixes
 * //           SubnetId: "STRING_VALUE",
 * //           IpPrefixes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       Ipv6Prefixes: [
 * //         {
 * //           SubnetId: "STRING_VALUE",
 * //           IpPrefixes: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       FailureReason: "STRING_VALUE",
 * //       ServiceNetworkArn: "STRING_VALUE",
 * //       ResourceConfigurationArn: "STRING_VALUE",
 * //       ServiceRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointsCommandInput - {@link DescribeVpcEndpointsCommandInput}
 * @returns {@link DescribeVpcEndpointsCommandOutput}
 * @see {@link DescribeVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointsCommandInput,
    DescribeVpcEndpointsCommandOutput,
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
  .s("AmazonEC2", "DescribeVpcEndpoints", {})
  .n("EC2Client", "DescribeVpcEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeVpcEndpointsCommand)
  .de(de_DescribeVpcEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointsRequest;
      output: DescribeVpcEndpointsResult;
    };
    sdk: {
      input: DescribeVpcEndpointsCommandInput;
      output: DescribeVpcEndpointsCommandOutput;
    };
  };
}
