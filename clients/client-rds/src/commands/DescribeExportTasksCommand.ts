// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_1";
import { de_DescribeExportTasksCommand, se_DescribeExportTasksCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandInput extends DescribeExportTasksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeExportTasksCommand}.
 */
export interface DescribeExportTasksCommandOutput extends ExportTasksMessage, __MetadataBearer {}

/**
 * <p>Returns information about a snapshot or cluster export to Amazon S3. This API operation supports
 *             pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeExportTasksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeExportTasksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DescribeExportTasksMessage
 *   ExportTaskIdentifier: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   SourceType: "SNAPSHOT" || "CLUSTER",
 * };
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ExportTasksMessage
 * //   Marker: "STRING_VALUE",
 * //   ExportTasks: [ // ExportTasksList
 * //     { // ExportTask
 * //       ExportTaskIdentifier: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       ExportOnly: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SnapshotTime: new Date("TIMESTAMP"),
 * //       TaskStartTime: new Date("TIMESTAMP"),
 * //       TaskEndTime: new Date("TIMESTAMP"),
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Prefix: "STRING_VALUE",
 * //       IamRoleArn: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       TotalExtractedDataInGB: Number("int"),
 * //       FailureCause: "STRING_VALUE",
 * //       WarningMessage: "STRING_VALUE",
 * //       SourceType: "SNAPSHOT" || "CLUSTER",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeExportTasksCommandInput - {@link DescribeExportTasksCommandInput}
 * @returns {@link DescribeExportTasksCommandOutput}
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link ExportTaskNotFoundFault} (client fault)
 *  <p>The export task doesn't exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To describe snapshot export tasks
 * ```javascript
 * // The following example returns information about snapshot exports to Amazon S3.
 * const input = {};
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ExportTasks": [
 *     {
 *       "ExportTaskIdentifier": "test-snapshot-export",
 *       "IamRoleArn": "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *       "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *       "PercentProgress": 100,
 *       "S3Bucket": "mybucket",
 *       "S3Prefix": "",
 *       "SnapshotTime": "2020-03-02T18:26:28.163Z",
 *       "SourceArn": "arn:aws:rds:us-west-2:123456789012:snapshot:test-snapshot",
 *       "Status": "COMPLETE",
 *       "TaskEndTime": "2020-03-02T19:10:31.985Z",
 *       "TaskStartTime": "2020-03-02T18:57:56.896Z",
 *       "TotalExtractedDataInGB": 0
 *     },
 *     {
 *       "ExportTaskIdentifier": "my-s3-export",
 *       "IamRoleArn": "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *       "KmsKeyId": "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *       "PercentProgress": 0,
 *       "S3Bucket": "mybucket",
 *       "S3Prefix": "",
 *       "SnapshotTime": "2020-03-27T20:48:42.023Z",
 *       "SourceArn": "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-test",
 *       "Status": "STARTING",
 *       "TotalExtractedDataInGB": 0
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-snapshot-export-tasks-1680282299489
 * ```
 *
 */
export class DescribeExportTasksCommand extends $Command
  .classBuilder<
    DescribeExportTasksCommandInput,
    DescribeExportTasksCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeExportTasks", {})
  .n("RDSClient", "DescribeExportTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExportTasksCommand)
  .de(de_DescribeExportTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExportTasksMessage;
      output: ExportTasksMessage;
    };
    sdk: {
      input: DescribeExportTasksCommandInput;
      output: DescribeExportTasksCommandOutput;
    };
  };
}
