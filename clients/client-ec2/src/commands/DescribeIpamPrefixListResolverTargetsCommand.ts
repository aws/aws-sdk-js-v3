// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeIpamPrefixListResolverTargetsRequest,
  DescribeIpamPrefixListResolverTargetsResult,
} from "../models/models_4";
import { DescribeIpamPrefixListResolverTargets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamPrefixListResolverTargetsCommand}.
 */
export interface DescribeIpamPrefixListResolverTargetsCommandInput
  extends DescribeIpamPrefixListResolverTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamPrefixListResolverTargetsCommand}.
 */
export interface DescribeIpamPrefixListResolverTargetsCommandOutput
  extends DescribeIpamPrefixListResolverTargetsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more IPAM prefix list resolver Targets. Use this operation to view the configuration and status of resolver targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamPrefixListResolverTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamPrefixListResolverTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamPrefixListResolverTargetsRequest
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
 *   IpamPrefixListResolverTargetIds: [
 *     "STRING_VALUE",
 *   ],
 *   IpamPrefixListResolverId: "STRING_VALUE",
 * };
 * const command = new DescribeIpamPrefixListResolverTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamPrefixListResolverTargetsResult
 * //   NextToken: "STRING_VALUE",
 * //   IpamPrefixListResolverTargets: [ // IpamPrefixListResolverTargetSet
 * //     { // IpamPrefixListResolverTarget
 * //       IpamPrefixListResolverTargetId: "STRING_VALUE",
 * //       IpamPrefixListResolverTargetArn: "STRING_VALUE",
 * //       IpamPrefixListResolverId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       PrefixListRegion: "STRING_VALUE",
 * //       DesiredVersion: Number("long"),
 * //       LastSyncedVersion: Number("long"),
 * //       TrackLatestVersion: true || false,
 * //       StateMessage: "STRING_VALUE",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "sync-in-progress" || "sync-complete" || "sync-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIpamPrefixListResolverTargetsCommandInput - {@link DescribeIpamPrefixListResolverTargetsCommandInput}
 * @returns {@link DescribeIpamPrefixListResolverTargetsCommandOutput}
 * @see {@link DescribeIpamPrefixListResolverTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamPrefixListResolverTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamPrefixListResolverTargetsCommand extends $Command
  .classBuilder<
    DescribeIpamPrefixListResolverTargetsCommandInput,
    DescribeIpamPrefixListResolverTargetsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpamPrefixListResolverTargets", {})
  .n("EC2Client", "DescribeIpamPrefixListResolverTargetsCommand")
  .sc(DescribeIpamPrefixListResolverTargets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamPrefixListResolverTargetsRequest;
      output: DescribeIpamPrefixListResolverTargetsResult;
    };
    sdk: {
      input: DescribeIpamPrefixListResolverTargetsCommandInput;
      output: DescribeIpamPrefixListResolverTargetsCommandOutput;
    };
  };
}
