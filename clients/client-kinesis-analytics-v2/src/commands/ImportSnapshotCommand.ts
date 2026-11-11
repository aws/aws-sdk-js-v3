// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportSnapshotRequest, ImportSnapshotResponse } from "../models/models_0";
import { ImportSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportSnapshotCommand}.
 */
export interface ImportSnapshotCommandInput extends ImportSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link ImportSnapshotCommand}.
 */
export interface ImportSnapshotCommandOutput extends ImportSnapshotResponse, __MetadataBearer {}

/**
 * <p>Imports an Apache Flink savepoint from an Amazon S3 location as an enhanced snapshot. Managed Service for Apache Flink assumes the IAM role that you specify in <code>ImportSourceConfiguration</code> to read the savepoint data.</p>
 *          <p>This operation is asynchronous. The response returns the snapshot ARN with the <code>CREATING</code> status. To track the progress of the import, use <code>DescribeSnapshotOperation</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/managed-flink/latest/java/snapshots-import-export.html">Import and export</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ImportSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ImportSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ImportSnapshotRequest
 *   SnapshotName: "STRING_VALUE", // required
 *   ImportSourceConfiguration: { // ImportSourceConfiguration
 *     SourceType: "S3", // required
 *     ImportRoleArn: "STRING_VALUE", // required
 *     SourceEncryptionConfiguration: { // SnapshotEncryptionConfiguration
 *       KeyId: "STRING_VALUE",
 *       KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 *     },
 *     SourceS3PrefixLocation: { // S3PrefixLocation
 *       BucketARN: "STRING_VALUE", // required
 *       KeyPrefix: "STRING_VALUE", // required
 *     },
 *   },
 *   DestinationEncryptionConfiguration: {
 *     KeyId: "STRING_VALUE",
 *     KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 *   },
 *   SnapshotDescription: "STRING_VALUE",
 *   SnapshotFormat: "CANONICAL",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ImportSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ImportSnapshotResponse
 * //   SnapshotArn: "STRING_VALUE", // required
 * //   SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED", // required
 * //   SnapshotOperationId: "STRING_VALUE", // required
 * //   SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param ImportSnapshotCommandInput - {@link ImportSnapshotCommandInput}
 * @returns {@link ImportSnapshotCommandOutput}
 * @see {@link ImportSnapshotCommandInput} for command's `input` shape.
 * @see {@link ImportSnapshotCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>Application created with too many tags, or too many tags added to an application. Note that the maximum
 *         number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
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
export class ImportSnapshotCommand extends command<ImportSnapshotCommandInput, ImportSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "ImportSnapshot",
  ImportSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportSnapshotRequest;
      output: ImportSnapshotResponse;
    };
    sdk: {
      input: ImportSnapshotCommandInput;
      output: ImportSnapshotCommandOutput;
    };
  };
}
