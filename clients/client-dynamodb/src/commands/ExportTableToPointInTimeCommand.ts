// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportTableToPointInTimeInput, ExportTableToPointInTimeOutput } from "../models/models_0";
import { de_ExportTableToPointInTimeCommand, se_ExportTableToPointInTimeCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportTableToPointInTimeCommand}.
 */
export interface ExportTableToPointInTimeCommandInput extends ExportTableToPointInTimeInput {}
/**
 * @public
 *
 * The output of {@link ExportTableToPointInTimeCommand}.
 */
export interface ExportTableToPointInTimeCommandOutput extends ExportTableToPointInTimeOutput, __MetadataBearer {}

/**
 * <p>Exports table data to an S3 bucket. The table must have point in time recovery
 *             enabled, and you can export data from any time within the point in time recovery
 *             window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExportTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExportTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // ExportTableToPointInTimeInput
 *   TableArn: "STRING_VALUE", // required
 *   ExportTime: new Date("TIMESTAMP"),
 *   ClientToken: "STRING_VALUE",
 *   S3Bucket: "STRING_VALUE", // required
 *   S3BucketOwner: "STRING_VALUE",
 *   S3Prefix: "STRING_VALUE",
 *   S3SseAlgorithm: "AES256" || "KMS",
 *   S3SseKmsKeyId: "STRING_VALUE",
 *   ExportFormat: "DYNAMODB_JSON" || "ION",
 *   ExportType: "FULL_EXPORT" || "INCREMENTAL_EXPORT",
 *   IncrementalExportSpecification: { // IncrementalExportSpecification
 *     ExportFromTime: new Date("TIMESTAMP"),
 *     ExportToTime: new Date("TIMESTAMP"),
 *     ExportViewType: "NEW_IMAGE" || "NEW_AND_OLD_IMAGES",
 *   },
 * };
 * const command = new ExportTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * // { // ExportTableToPointInTimeOutput
 * //   ExportDescription: { // ExportDescription
 * //     ExportArn: "STRING_VALUE",
 * //     ExportStatus: "IN_PROGRESS" || "COMPLETED" || "FAILED",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ExportManifest: "STRING_VALUE",
 * //     TableArn: "STRING_VALUE",
 * //     TableId: "STRING_VALUE",
 * //     ExportTime: new Date("TIMESTAMP"),
 * //     ClientToken: "STRING_VALUE",
 * //     S3Bucket: "STRING_VALUE",
 * //     S3BucketOwner: "STRING_VALUE",
 * //     S3Prefix: "STRING_VALUE",
 * //     S3SseAlgorithm: "AES256" || "KMS",
 * //     S3SseKmsKeyId: "STRING_VALUE",
 * //     FailureCode: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     ExportFormat: "DYNAMODB_JSON" || "ION",
 * //     BilledSizeBytes: Number("long"),
 * //     ItemCount: Number("long"),
 * //     ExportType: "FULL_EXPORT" || "INCREMENTAL_EXPORT",
 * //     IncrementalExportSpecification: { // IncrementalExportSpecification
 * //       ExportFromTime: new Date("TIMESTAMP"),
 * //       ExportToTime: new Date("TIMESTAMP"),
 * //       ExportViewType: "NEW_IMAGE" || "NEW_AND_OLD_IMAGES",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportTableToPointInTimeCommandInput - {@link ExportTableToPointInTimeCommandInput}
 * @returns {@link ExportTableToPointInTimeCommandOutput}
 * @see {@link ExportTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link ExportTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link ExportConflictException} (client fault)
 *  <p>There was a conflict when writing to the specified S3 bucket.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidExportTimeException} (client fault)
 *  <p>The specified <code>ExportTime</code> is outside of the point in time recovery
 *             window.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *             indexes, you can have up to 250 such requests running at a time. However, if the table or
 *             index specifications are complex, then DynamoDB might temporarily reduce the number
 *             of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *             this limit may result in request throttling.</p>
 *
 * @throws {@link PointInTimeRecoveryUnavailableException} (client fault)
 *  <p>Point in time recovery has not yet been enabled for this source table.</p>
 *
 * @throws {@link TableNotFoundException} (client fault)
 *  <p>A source table with the name <code>TableName</code> does not currently exist within
 *             the subscriber's account or the subscriber is operating in the wrong Amazon Web Services Region.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 *
 * @public
 */
export class ExportTableToPointInTimeCommand extends $Command
  .classBuilder<
    ExportTableToPointInTimeCommandInput,
    ExportTableToPointInTimeCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ResourceArn: { type: "contextParams", name: "TableArn" },
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "ExportTableToPointInTime", {})
  .n("DynamoDBClient", "ExportTableToPointInTimeCommand")
  .f(void 0, void 0)
  .ser(se_ExportTableToPointInTimeCommand)
  .de(de_ExportTableToPointInTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportTableToPointInTimeInput;
      output: ExportTableToPointInTimeOutput;
    };
    sdk: {
      input: ExportTableToPointInTimeCommandInput;
      output: ExportTableToPointInTimeCommandOutput;
    };
  };
}
