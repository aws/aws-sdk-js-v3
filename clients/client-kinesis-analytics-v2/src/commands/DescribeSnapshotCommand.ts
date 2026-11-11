// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSnapshotRequest, DescribeSnapshotResponse } from "../models/models_0";
import { DescribeSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotCommand}.
 */
export interface DescribeSnapshotCommandInput extends DescribeSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotCommand}.
 */
export interface DescribeSnapshotCommandOutput extends DescribeSnapshotResponse, __MetadataBearer {}

/**
 * <p>Returns information about an enhanced snapshot. To see a list of the snapshots in your account, use <code>ListSnapshots</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DescribeSnapshotRequest
 *   SnapshotName: "STRING_VALUE", // required
 * };
 * const command = new DescribeSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotResponse
 * //   SnapshotInfoDetails: { // SnapshotInfoDetails
 * //     SnapshotName: "STRING_VALUE", // required
 * //     SnapshotArn: "STRING_VALUE", // required
 * //     SnapshotDescription: "STRING_VALUE",
 * //     SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED", // required
 * //     SnapshotCreationTimestamp: new Date("TIMESTAMP"), // required
 * //     RuntimeEnvironment: "SQL-1_0" || "FLINK-1_6" || "FLINK-1_8" || "ZEPPELIN-FLINK-1_0" || "FLINK-1_11" || "FLINK-1_13" || "ZEPPELIN-FLINK-2_0" || "FLINK-1_15" || "ZEPPELIN-FLINK-3_0" || "FLINK-1_18" || "FLINK-1_19" || "FLINK-1_20" || "FLINK-2_2" || "FLINK-2_3",
 * //     SnapshotSizeInBytes: Number("long"),
 * //     SnapshotEncryptionConfigurationDescription: { // SnapshotEncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     SnapshotInitiator: "USER" || "SYSTEM", // required
 * //     SnapshotInitiatorOperation: "CreateSnapshot" || "ImportSnapshot" || "SystemCreateSnapshot", // required
 * //     SnapshotSourceDescription: { // SnapshotSourceDescription
 * //       S3PrefixLocation: { // S3PrefixLocation
 * //         BucketARN: "STRING_VALUE", // required
 * //         KeyPrefix: "STRING_VALUE", // required
 * //       },
 * //       SourceApplicationDescription: { // SourceApplicationDescription
 * //         ApplicationName: "STRING_VALUE", // required
 * //         ApplicationCreationTimestamp: new Date("TIMESTAMP"), // required
 * //         ApplicationVersionId: Number("long"), // required
 * //       },
 * //     },
 * //     SnapshotFormat: "CANONICAL", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotCommandInput - {@link DescribeSnapshotCommandInput}
 * @returns {@link DescribeSnapshotCommandOutput}
 * @see {@link DescribeSnapshotCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
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
export class DescribeSnapshotCommand extends command<DescribeSnapshotCommandInput, DescribeSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSnapshot",
  DescribeSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotRequest;
      output: DescribeSnapshotResponse;
    };
    sdk: {
      input: DescribeSnapshotCommandInput;
      output: DescribeSnapshotCommandOutput;
    };
  };
}
