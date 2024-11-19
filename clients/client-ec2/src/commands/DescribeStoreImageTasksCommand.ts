// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStoreImageTasksRequest, DescribeStoreImageTasksResult } from "../models/models_5";
import { de_DescribeStoreImageTasksCommand, se_DescribeStoreImageTasksCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStoreImageTasksCommand}.
 */
export interface DescribeStoreImageTasksCommandInput extends DescribeStoreImageTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStoreImageTasksCommand}.
 */
export interface DescribeStoreImageTasksCommandOutput extends DescribeStoreImageTasksResult, __MetadataBearer {}

/**
 * <p>Describes the progress of the AMI store tasks. You can describe the store tasks for
 *       specified AMIs. If you don't specify the AMIs, you get a paginated list of store tasks from
 *       the last 31 days.</p>
 *          <p>For each AMI task, the response indicates if the task is <code>InProgress</code>,
 *         <code>Completed</code>, or <code>Failed</code>. For tasks <code>InProgress</code>, the
 *       response shows the estimated progress as a percentage.</p>
 *          <p>Tasks are listed in reverse chronological order. Currently, only tasks from the past 31
 *       days can be viewed.</p>
 *          <p>To use this API, you must have the required permissions. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html#ami-s3-permissions">Permissions for storing and restoring AMIs using Amazon S3</a> in the
 *         <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-store-restore.html">Store and restore an AMI using
 *         Amazon S3</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStoreImageTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStoreImageTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeStoreImageTasksRequest
 *   ImageIds: [ // ImageIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
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
 * const command = new DescribeStoreImageTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStoreImageTasksResult
 * //   StoreImageTaskResults: [ // StoreImageTaskResultSet
 * //     { // StoreImageTaskResult
 * //       AmiId: "STRING_VALUE",
 * //       TaskStartTime: new Date("TIMESTAMP"),
 * //       Bucket: "STRING_VALUE",
 * //       S3objectKey: "STRING_VALUE",
 * //       ProgressPercentage: Number("int"),
 * //       StoreTaskState: "STRING_VALUE",
 * //       StoreTaskFailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStoreImageTasksCommandInput - {@link DescribeStoreImageTasksCommandInput}
 * @returns {@link DescribeStoreImageTasksCommandOutput}
 * @see {@link DescribeStoreImageTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeStoreImageTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeStoreImageTasksCommand extends $Command
  .classBuilder<
    DescribeStoreImageTasksCommandInput,
    DescribeStoreImageTasksCommandOutput,
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
  .s("AmazonEC2", "DescribeStoreImageTasks", {})
  .n("EC2Client", "DescribeStoreImageTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStoreImageTasksCommand)
  .de(de_DescribeStoreImageTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStoreImageTasksRequest;
      output: DescribeStoreImageTasksResult;
    };
    sdk: {
      input: DescribeStoreImageTasksCommandInput;
      output: DescribeStoreImageTasksCommandOutput;
    };
  };
}
