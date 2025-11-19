// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReplaceRootVolumeTasksRequest, DescribeReplaceRootVolumeTasksResult } from "../models/models_4";
import { DescribeReplaceRootVolumeTasks } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplaceRootVolumeTasksCommand}.
 */
export interface DescribeReplaceRootVolumeTasksCommandInput extends DescribeReplaceRootVolumeTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReplaceRootVolumeTasksCommand}.
 */
export interface DescribeReplaceRootVolumeTasksCommandOutput
  extends DescribeReplaceRootVolumeTasksResult,
    __MetadataBearer {}

/**
 * <p>Describes a root volume replacement task. For more information, see
 *       <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/replace-root.html">Replace a root volume</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReplaceRootVolumeTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReplaceRootVolumeTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeReplaceRootVolumeTasksRequest
 *   ReplaceRootVolumeTaskIds: [ // ReplaceRootVolumeTaskIds
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeReplaceRootVolumeTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplaceRootVolumeTasksResult
 * //   ReplaceRootVolumeTasks: [ // ReplaceRootVolumeTasks
 * //     { // ReplaceRootVolumeTask
 * //       ReplaceRootVolumeTaskId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       TaskState: "pending" || "in-progress" || "failing" || "succeeded" || "failed" || "failed-detached",
 * //       StartTime: "STRING_VALUE",
 * //       CompleteTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ImageId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       DeleteReplacedRootVolume: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReplaceRootVolumeTasksCommandInput - {@link DescribeReplaceRootVolumeTasksCommandInput}
 * @returns {@link DescribeReplaceRootVolumeTasksCommandOutput}
 * @see {@link DescribeReplaceRootVolumeTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplaceRootVolumeTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeReplaceRootVolumeTasksCommand extends $Command
  .classBuilder<
    DescribeReplaceRootVolumeTasksCommandInput,
    DescribeReplaceRootVolumeTasksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeReplaceRootVolumeTasks", {})
  .n("EC2Client", "DescribeReplaceRootVolumeTasksCommand")
  .sc(DescribeReplaceRootVolumeTasks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplaceRootVolumeTasksRequest;
      output: DescribeReplaceRootVolumeTasksResult;
    };
    sdk: {
      input: DescribeReplaceRootVolumeTasksCommandInput;
      output: DescribeReplaceRootVolumeTasksCommandOutput;
    };
  };
}
