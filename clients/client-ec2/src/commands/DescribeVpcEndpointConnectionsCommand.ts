// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEndpointConnectionsRequest, DescribeVpcEndpointConnectionsResult } from "../models/models_5";
import { DescribeVpcEndpointConnections } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointConnectionsCommand}.
 */
export interface DescribeVpcEndpointConnectionsCommandInput extends DescribeVpcEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointConnectionsCommand}.
 */
export interface DescribeVpcEndpointConnectionsCommandOutput
  extends DescribeVpcEndpointConnectionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any
 *             endpoints that are pending your acceptance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointConnectionsRequest
 *   DryRun: true || false,
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
 * const command = new DescribeVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointConnectionsResult
 * //   VpcEndpointConnections: [ // VpcEndpointConnectionSet
 * //     { // VpcEndpointConnection
 * //       ServiceId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //       VpcEndpointState: "PendingAcceptance" || "Pending" || "Available" || "Deleting" || "Deleted" || "Rejected" || "Failed" || "Expired" || "Partial",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       DnsEntries: [ // DnsEntrySet
 * //         { // DnsEntry
 * //           DnsName: "STRING_VALUE",
 * //           HostedZoneId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NetworkLoadBalancerArns: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       GatewayLoadBalancerArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //       VpcEndpointConnectionId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcEndpointRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointConnectionsCommandInput - {@link DescribeVpcEndpointConnectionsCommandInput}
 * @returns {@link DescribeVpcEndpointConnectionsCommandOutput}
 * @see {@link DescribeVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEndpointConnectionsCommand extends $Command
  .classBuilder<
    DescribeVpcEndpointConnectionsCommandInput,
    DescribeVpcEndpointConnectionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeVpcEndpointConnections", {})
  .n("EC2Client", "DescribeVpcEndpointConnectionsCommand")
  .sc(DescribeVpcEndpointConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEndpointConnectionsRequest;
      output: DescribeVpcEndpointConnectionsResult;
    };
    sdk: {
      input: DescribeVpcEndpointConnectionsCommandInput;
      output: DescribeVpcEndpointConnectionsCommandOutput;
    };
  };
}
