// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamResourceCidrsRequest, GetIpamResourceCidrsResult } from "../models/models_7";
import { GetIpamResourceCidrs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamResourceCidrsCommand}.
 */
export interface GetIpamResourceCidrsCommandInput extends GetIpamResourceCidrsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamResourceCidrsCommand}.
 */
export interface GetIpamResourceCidrsCommandOutput extends GetIpamResourceCidrsResult, __MetadataBearer {}

/**
 * <p>Returns resource CIDRs managed by IPAM in a given scope. If an IPAM is associated with more than one resource discovery, the resource CIDRs across all of the resource discoveries is returned. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamResourceCidrsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamResourceCidrsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamResourceCidrsRequest
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
 *   IpamScopeId: "STRING_VALUE", // required
 *   IpamPoolId: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE",
 *   ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool" || "eni",
 *   ResourceTag: { // RequestIpamResourceTag
 *     Key: "STRING_VALUE",
 *     Value: "STRING_VALUE",
 *   },
 *   ResourceOwner: "STRING_VALUE",
 * };
 * const command = new GetIpamResourceCidrsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamResourceCidrsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamResourceCidrs: [ // IpamResourceCidrSet
 * //     { // IpamResourceCidr
 * //       IpamId: "STRING_VALUE",
 * //       IpamScopeId: "STRING_VALUE",
 * //       IpamPoolId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //       ResourceCidr: "STRING_VALUE",
 * //       ResourceType: "vpc" || "subnet" || "eip" || "public-ipv4-pool" || "ipv6-pool" || "eni",
 * //       ResourceTags: [ // IpamResourceTagList
 * //         { // IpamResourceTag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpUsage: Number("double"),
 * //       ComplianceStatus: "compliant" || "noncompliant" || "unmanaged" || "ignored",
 * //       ManagementState: "managed" || "unmanaged" || "ignored",
 * //       OverlapStatus: "overlapping" || "nonoverlapping" || "ignored",
 * //       VpcId: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIpamResourceCidrsCommandInput - {@link GetIpamResourceCidrsCommandInput}
 * @returns {@link GetIpamResourceCidrsCommandOutput}
 * @see {@link GetIpamResourceCidrsCommandInput} for command's `input` shape.
 * @see {@link GetIpamResourceCidrsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamResourceCidrsCommand extends $Command
  .classBuilder<
    GetIpamResourceCidrsCommandInput,
    GetIpamResourceCidrsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamResourceCidrs", {})
  .n("EC2Client", "GetIpamResourceCidrsCommand")
  .sc(GetIpamResourceCidrs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamResourceCidrsRequest;
      output: GetIpamResourceCidrsResult;
    };
    sdk: {
      input: GetIpamResourceCidrsCommandInput;
      output: GetIpamResourceCidrsCommandOutput;
    };
  };
}
