// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeIpamPrefixListResolversRequest, DescribeIpamPrefixListResolversResult } from "../models/models_5";
import { DescribeIpamPrefixListResolvers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamPrefixListResolversCommand}.
 */
export interface DescribeIpamPrefixListResolversCommandInput extends DescribeIpamPrefixListResolversRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamPrefixListResolversCommand}.
 */
export interface DescribeIpamPrefixListResolversCommandOutput
  extends DescribeIpamPrefixListResolversResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more IPAM prefix list resolvers. Use this operation to view the configuration, status, and properties of your resolvers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamPrefixListResolversCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamPrefixListResolversCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamPrefixListResolversRequest
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
 *   IpamPrefixListResolverIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeIpamPrefixListResolversCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamPrefixListResolversResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamPrefixListResolvers: [ // IpamPrefixListResolverSet
 * //     { // IpamPrefixListResolver
 * //       OwnerId: "STRING_VALUE",
 * //       IpamPrefixListResolverId: "STRING_VALUE",
 * //       IpamPrefixListResolverArn: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       AddressFamily: "ipv4" || "ipv6",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LastVersionCreationStatus: "pending" || "success" || "failure",
 * //       LastVersionCreationStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamPrefixListResolversCommandInput - {@link DescribeIpamPrefixListResolversCommandInput}
 * @returns {@link DescribeIpamPrefixListResolversCommandOutput}
 * @see {@link DescribeIpamPrefixListResolversCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamPrefixListResolversCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamPrefixListResolversCommand extends $Command
  .classBuilder<
    DescribeIpamPrefixListResolversCommandInput,
    DescribeIpamPrefixListResolversCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpamPrefixListResolvers", {})
  .n("EC2Client", "DescribeIpamPrefixListResolversCommand")
  .sc(DescribeIpamPrefixListResolvers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamPrefixListResolversRequest;
      output: DescribeIpamPrefixListResolversResult;
    };
    sdk: {
      input: DescribeIpamPrefixListResolversCommandInput;
      output: DescribeIpamPrefixListResolversCommandOutput;
    };
  };
}
