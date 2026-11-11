// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportSnapshotRequest, ExportSnapshotResponse } from "../models/models_0";
import { ExportSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportSnapshotCommand}.
 */
export interface ExportSnapshotCommandInput extends ExportSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link ExportSnapshotCommand}.
 */
export interface ExportSnapshotCommandOutput extends ExportSnapshotResponse, __MetadataBearer {}

/**
 * <p>Exports the data of an enhanced snapshot to an Amazon S3 location. Managed Service for Apache Flink assumes the IAM role that you specify in <code>ExportDestinationConfiguration</code> to write the snapshot data. The snapshot must be in the <code>READY</code> status.</p>
 *          <p>This operation is asynchronous. To track the progress of the export, use <code>DescribeSnapshotOperation</code>.</p>
 *          <p>A snapshot can have only one export in progress at a time. If an export of the snapshot is already in progress, <code>LimitExceededException</code> is returned.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/managed-flink/latest/java/snapshots-import-export.html">Import and export</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ExportSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ExportSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ExportSnapshotRequest
 *   SnapshotName: "STRING_VALUE", // required
 *   ExportDestinationConfiguration: { // ExportDestinationConfiguration
 *     DestinationType: "S3", // required
 *     ExportRoleArn: "STRING_VALUE", // required
 *     DestinationEncryptionConfiguration: { // SnapshotEncryptionConfiguration
 *       KeyId: "STRING_VALUE",
 *       KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 *     },
 *     DestinationS3PrefixLocation: { // S3PrefixLocation
 *       BucketARN: "STRING_VALUE", // required
 *       KeyPrefix: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new ExportSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ExportSnapshotResponse
 * //   SnapshotOperationId: "STRING_VALUE", // required
 * //   SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param ExportSnapshotCommandInput - {@link ExportSnapshotCommandInput}
 * @returns {@link ExportSnapshotCommandOutput}
 * @see {@link ExportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application or snapshot. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The number of allowed resources has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application or snapshot is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified application, snapshot, or snapshot operation can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 *
 * @public
 */
export class ExportSnapshotCommand extends command<ExportSnapshotCommandInput, ExportSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "ExportSnapshot",
  ExportSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportSnapshotRequest;
      output: ExportSnapshotResponse;
    };
    sdk: {
      input: ExportSnapshotCommandInput;
      output: ExportSnapshotCommandOutput;
    };
  };
}
