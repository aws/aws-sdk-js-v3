// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExportTask } from "../models/models_0";
import { StartExportTaskMessage } from "../models/models_1";
import { de_StartExportTaskCommand, se_StartExportTaskCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandInput extends StartExportTaskMessage {}
/**
 * @public
 *
 * The output of {@link StartExportTaskCommand}.
 */
export interface StartExportTaskCommandOutput extends ExportTask, __MetadataBearer {}

/**
 * <p>Starts an export of DB snapshot or DB cluster data to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.</p>
 *          <p>You can't export snapshot data from RDS Custom DB instances. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RDS_Fea_Regions_DB-eng.Feature.ExportSnapshotToS3.html">
 *                 Supported Regions and DB engines for exporting snapshots to S3 in Amazon RDS</a>.</p>
 *          <p>For more information on exporting DB snapshot data, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html">Exporting DB snapshot
 *             data to Amazon S3</a> in the <i>Amazon RDS User Guide</i>
 *             or <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-export-snapshot.html">Exporting DB
 *             cluster snapshot data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on exporting DB cluster data, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/export-cluster-data.html">Exporting DB
 *             cluster data to Amazon S3</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // StartExportTaskMessage
 *   ExportTaskIdentifier: "STRING_VALUE", // required
 *   SourceArn: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 *   IamRoleArn: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE", // required
 *   S3Prefix: "STRING_VALUE",
 *   ExportOnly: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // ExportTask
 * //   ExportTaskIdentifier: "STRING_VALUE",
 * //   SourceArn: "STRING_VALUE",
 * //   ExportOnly: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   SnapshotTime: new Date("TIMESTAMP"),
 * //   TaskStartTime: new Date("TIMESTAMP"),
 * //   TaskEndTime: new Date("TIMESTAMP"),
 * //   S3Bucket: "STRING_VALUE",
 * //   S3Prefix: "STRING_VALUE",
 * //   IamRoleArn: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   PercentProgress: Number("int"),
 * //   TotalExtractedDataInGB: Number("int"),
 * //   FailureCause: "STRING_VALUE",
 * //   WarningMessage: "STRING_VALUE",
 * //   SourceType: "SNAPSHOT" || "CLUSTER",
 * // };
 *
 * ```
 *
 * @param StartExportTaskCommandInput - {@link StartExportTaskCommandInput}
 * @returns {@link StartExportTaskCommandOutput}
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link ExportTaskAlreadyExistsFault} (client fault)
 *  <p>You can't start an export task that's already running.</p>
 *
 * @throws {@link IamRoleMissingPermissionsFault} (client fault)
 *  <p>The IAM role requires additional permissions to export to an Amazon S3 bucket.</p>
 *
 * @throws {@link IamRoleNotFoundFault} (client fault)
 *  <p>The IAM role is missing for exporting to an Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidExportOnlyFault} (client fault)
 *  <p>The export is invalid for exporting to an Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidExportSourceStateFault} (client fault)
 *  <p>The state of the export snapshot is invalid for exporting to an Amazon S3 bucket.</p>
 *
 * @throws {@link InvalidS3BucketFault} (client fault)
 *  <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To export a snapshot to Amazon S3
 * ```javascript
 * // The following example exports a DB snapshot named db5-snapshot-test to the Amazon S3 bucket named mybucket.
 * const input = {
 *   ExportTaskIdentifier: "my-s3-export",
 *   IamRoleArn: "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *   KmsKeyId: "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *   S3BucketName: "mybucket",
 *   SourceArn: "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-test"
 * };
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ExportTaskIdentifier: "my-s3-export",
 *   IamRoleArn: "arn:aws:iam::123456789012:role/service-role/ExportRole",
 *   KmsKeyId: "arn:aws:kms:us-west-2:123456789012:key/abcd0000-7fca-4128-82f2-aabbccddeeff",
 *   PercentProgress: 0,
 *   S3Bucket: "mybucket",
 *   SnapshotTime: "2020-03-27T20:48:42.023Z",
 *   SourceArn: "arn:aws:rds:us-west-2:123456789012:snapshot:db5-snapshot-test",
 *   Status: "STARTING",
 *   TotalExtractedDataInGB: 0
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartExportTaskCommand extends $Command
  .classBuilder<
    StartExportTaskCommandInput,
    StartExportTaskCommandOutput,
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
  .s("AmazonRDSv19", "StartExportTask", {})
  .n("RDSClient", "StartExportTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartExportTaskCommand)
  .de(de_StartExportTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartExportTaskMessage;
      output: ExportTask;
    };
    sdk: {
      input: StartExportTaskCommandInput;
      output: StartExportTaskCommandOutput;
    };
  };
}
