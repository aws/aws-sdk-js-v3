// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeInstanceConnectEndpointsRequest,
  DescribeInstanceConnectEndpointsResult,
} from "../models/models_3";
import { DescribeInstanceConnectEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceConnectEndpointsCommand}.
 */
export interface DescribeInstanceConnectEndpointsCommandInput extends DescribeInstanceConnectEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceConnectEndpointsCommand}.
 */
export interface DescribeInstanceConnectEndpointsCommandOutput extends DescribeInstanceConnectEndpointsResult, __MetadataBearer {}

/**
 * <p>Describes the specified EC2 Instance Connect Endpoints or all EC2 Instance Connect Endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceConnectEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceConnectEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceConnectEndpointsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   InstanceConnectEndpointIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeInstanceConnectEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceConnectEndpointsResult
 * //   InstanceConnectEndpoints: [ // InstanceConnectEndpointSet
 * //     { // Ec2InstanceConnectEndpoint
 * //       OwnerId: "STRING_VALUE",
 * //       InstanceConnectEndpointId: "STRING_VALUE",
 * //       InstanceConnectEndpointArn: "STRING_VALUE",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "update-in-progress" || "update-complete" || "update-failed",
 * //       StateMessage: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       FipsDnsName: "STRING_VALUE",
 * //       NetworkInterfaceIds: [ // NetworkInterfaceIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       SubnetId: "STRING_VALUE",
 * //       PreserveClientIp: true || false,
 * //       SecurityGroupIds: [ // SecurityGroupIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //       PublicDnsNames: { // InstanceConnectEndpointPublicDnsNames
 * //         Ipv4: { // InstanceConnectEndpointDnsNames
 * //           DnsName: "STRING_VALUE",
 * //           FipsDnsName: "STRING_VALUE",
 * //         },
 * //         Dualstack: {
 * //           DnsName: "STRING_VALUE",
 * //           FipsDnsName: "STRING_VALUE",
 * //         },
 * //       },
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceConnectEndpointsCommandInput - {@link DescribeInstanceConnectEndpointsCommandInput}
 * @returns {@link DescribeInstanceConnectEndpointsCommandOutput}
 * @see {@link DescribeInstanceConnectEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceConnectEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceConnectEndpointsCommand extends $Command
  .classBuilder<
    DescribeInstanceConnectEndpointsCommandInput,
    DescribeInstanceConnectEndpointsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeInstanceConnectEndpoints", {})
  .n("EC2Client", "DescribeInstanceConnectEndpointsCommand")
  .sc(DescribeInstanceConnectEndpoints$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceConnectEndpointsRequest;
      output: DescribeInstanceConnectEndpointsResult;
    };
    sdk: {
      input: DescribeInstanceConnectEndpointsCommandInput;
      output: DescribeInstanceConnectEndpointsCommandOutput;
    };
  };
}
