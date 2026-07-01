// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeImportSnapshotTasksRequest, DescribeImportSnapshotTasksResult } from "../models/models_4";
import { DescribeImportSnapshotTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeImportSnapshotTasksCommand}.
 */
export interface DescribeImportSnapshotTasksCommandInput extends DescribeImportSnapshotTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportSnapshotTasksCommand}.
 */
export interface DescribeImportSnapshotTasksCommandOutput extends DescribeImportSnapshotTasksResult, __MetadataBearer {}

/**
 * <p>Describes your import snapshot tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeImportSnapshotTasksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeImportSnapshotTasksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeImportSnapshotTasksRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ImportTaskIds: [ // ImportSnapshotTaskIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportSnapshotTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportSnapshotTasksResult
 * //   ImportSnapshotTasks: [ // ImportSnapshotTaskList
 * //     { // ImportSnapshotTask
 * //       Description: "STRING_VALUE",
 * //       ImportTaskId: "STRING_VALUE",
 * //       SnapshotTaskDetail: { // SnapshotTaskDetail
 * //         Description: "STRING_VALUE",
 * //         DiskImageSize: Number("double"),
 * //         Encrypted: true || false,
 * //         Format: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //         Progress: "STRING_VALUE",
 * //         SnapshotId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         StatusMessage: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         UserBucket: { // UserBucketDetails
 * //           S3Bucket: "STRING_VALUE",
 * //           S3Key: "STRING_VALUE",
 * //         },
 * //       },
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImportSnapshotTasksCommandInput - {@link DescribeImportSnapshotTasksCommandInput}
 * @returns {@link DescribeImportSnapshotTasksCommandOutput}
 * @see {@link DescribeImportSnapshotTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportSnapshotTasksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeImportSnapshotTasksCommand extends command<DescribeImportSnapshotTasksCommandInput, DescribeImportSnapshotTasksCommandOutput>(
  _ep0,
  _mw0,
  "DescribeImportSnapshotTasks",
  DescribeImportSnapshotTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImportSnapshotTasksRequest;
      output: DescribeImportSnapshotTasksResult;
    };
    sdk: {
      input: DescribeImportSnapshotTasksCommandInput;
      output: DescribeImportSnapshotTasksCommandOutput;
    };
  };
}
