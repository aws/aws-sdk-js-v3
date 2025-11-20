// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamPoolsRequest, DescribeIpamPoolsResult } from "../models/models_4";
import { DescribeIpamPools } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamPoolsCommand}.
 */
export interface DescribeIpamPoolsCommandInput extends DescribeIpamPoolsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamPoolsCommand}.
 */
export interface DescribeIpamPoolsCommandOutput extends DescribeIpamPoolsResult, __MetadataBearer {}

/**
 * <p>Get information about your IPAM pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamPoolsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamPoolsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamPoolsRequest
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
 *   IpamPoolIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamPoolsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamPoolsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamPools: [ // IpamPoolSet
 * //     { // IpamPool
 * //       OwnerId: "STRING_VALUE",
 * //       IpamPoolId: "STRING_VALUE",
 * //       SourceIpamPoolId: "STRING_VALUE",
 * //       IpamPoolArn: "STRING_VALUE",
 * //       IpamScopeArn: "STRING_VALUE",
 * //       IpamScopeType: "public" || "private",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       Locale: "STRING_VALUE",
 * //       PoolDepth: Number("int"),
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       StateMessage: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AutoImport: true || false,
 * //       PubliclyAdvertisable: true || false,
 * //       AddressFamily: "ipv4" || "ipv6",
 * //       AllocationMinNetmaskLength: Number("int"),
 * //       AllocationMaxNetmaskLength: Number("int"),
 * //       AllocationDefaultNetmaskLength: Number("int"),
 * //       AllocationResourceTags: [ // IpamResourceTagList
 * //         { // IpamResourceTag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AwsService: "ec2" || "global-services",
 * //       PublicIpSource: "amazon" || "byoip",
 * //       SourceResource: { // IpamPoolSourceResource
 * //         ResourceId: "STRING_VALUE",
 * //         ResourceType: "vpc",
 * //         ResourceRegion: "STRING_VALUE",
 * //         ResourceOwner: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamPoolsCommandInput - {@link DescribeIpamPoolsCommandInput}
 * @returns {@link DescribeIpamPoolsCommandOutput}
 * @see {@link DescribeIpamPoolsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamPoolsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamPoolsCommand extends $Command
  .classBuilder<
    DescribeIpamPoolsCommandInput,
    DescribeIpamPoolsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpamPools", {})
  .n("EC2Client", "DescribeIpamPoolsCommand")
  .sc(DescribeIpamPools)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamPoolsRequest;
      output: DescribeIpamPoolsResult;
    };
    sdk: {
      input: DescribeIpamPoolsCommandInput;
      output: DescribeIpamPoolsCommandOutput;
    };
  };
}
