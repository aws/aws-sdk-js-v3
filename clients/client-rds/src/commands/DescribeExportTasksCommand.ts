// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeExportTasks } from "../schemas/schemas_0";

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
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * @example To describe snapshot export tasks
 * ```javascript
 * // The following example returns information about snapshot exports to Amazon S3.
 * const input = { /* empty *\/ };
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExportTasks: [
 *     {
 *       ExportTaskIdentifier: "test-snapshot-export",
 *       IamRoleArn: "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *       KmsKeyId: "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *       PercentProgress: 100,
 *       S3Bucket: "mybucket",
 *       S3Prefix: "",
 *       SnapshotTime: "2020-03-02T18:26:28.163Z",
 *       SourceArn: "arn:aws:rds:us-west-2:123456789012:snapshot:test-snapshot",
 *       Status: "COMPLETE",
 *       TaskEndTime: "2020-03-02T19:10:31.985Z",
 *       TaskStartTime: "2020-03-02T18:57:56.896Z",
 *       TotalExtractedDataInGB: 0
 *     },
 *     {
 *       ExportTaskIdentifier: "my-s3-export",
 *       IamRoleArn: "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *       KmsKeyId: "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *       PercentProgress: 0,
 *       S3Bucket: "mybucket",
 *       S3Prefix: "",
 *       SnapshotTime: "2020-03-27T20:48:42.023Z",
 *       SourceArn: "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-test",
 *       Status: "STARTING",
 *       TotalExtractedDataInGB: 0
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeExportTasks", {})
  .n("RDSClient", "DescribeExportTasksCommand")
  .sc(DescribeExportTasks)
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
