// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetIpamDiscoveredResourceCidrsRequest, GetIpamDiscoveredResourceCidrsResult } from "../models/models_6";
import { GetIpamDiscoveredResourceCidrs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamDiscoveredResourceCidrsCommand}.
 */
export interface GetIpamDiscoveredResourceCidrsCommandInput extends GetIpamDiscoveredResourceCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamDiscoveredResourceCidrsCommand}.
 */
export interface GetIpamDiscoveredResourceCidrsCommandOutput
  extends GetIpamDiscoveredResourceCidrsResult,
    __MetadataBearer {}

/**
 * <p>Returns the resource CIDRs that are monitored as part of a resource discovery. A discovered resource is a resource CIDR monitored under a resource discovery. The following resources can be discovered: VPCs, Public IPv4 pools, VPC subnets, and Elastic IP addresses. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamDiscoveredResourceCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamDiscoveredResourceCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamDiscoveredResourceCidrsRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryId: "STRING_VALUE", // required
 *   ResourceRegion: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetIpamDiscoveredResourceCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamDiscoveredResourceCidrsResult
 * //   IpamDiscoveredResourceCidrs: [ // IpamDiscoveredResourceCidrSet
 * //     { // IpamDiscoveredResourceCidr
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceCidr: "STRING_VALUE",
 * //       IpSource: "amazon" || "byoip" || "none",
 * //       ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool" || "eni" || "anycast-ip-list",
 * //       ResourceTags: [ // IpamResourceTagList
 * //         { // IpamResourceTag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpUsage: Number("double"),
 * //       VpcId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       NetworkInterfaceAttachmentStatus: "available" || "in-use",
 * //       SampleTime: new Date("TIMESTAMP"),
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamDiscoveredResourceCidrsCommandInput - {@link GetIpamDiscoveredResourceCidrsCommandInput}
 * @returns {@link GetIpamDiscoveredResourceCidrsCommandOutput}
 * @see {@link GetIpamDiscoveredResourceCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamDiscoveredResourceCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamDiscoveredResourceCidrsCommand extends $Command
  .classBuilder<
    GetIpamDiscoveredResourceCidrsCommandInput,
    GetIpamDiscoveredResourceCidrsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamDiscoveredResourceCidrs", {})
  .n("EC2Client", "GetIpamDiscoveredResourceCidrsCommand")
  .sc(GetIpamDiscoveredResourceCidrs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamDiscoveredResourceCidrsRequest;
      output: GetIpamDiscoveredResourceCidrsResult;
    };
    sdk: {
      input: GetIpamDiscoveredResourceCidrsCommandInput;
      output: GetIpamDiscoveredResourceCidrsCommandOutput;
    };
  };
}
