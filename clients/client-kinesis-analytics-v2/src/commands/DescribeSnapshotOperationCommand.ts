// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSnapshotOperationRequest, DescribeSnapshotOperationResponse } from "../models/models_0";
import { DescribeSnapshotOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotOperationCommand}.
 */
export interface DescribeSnapshotOperationCommandInput extends DescribeSnapshotOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotOperationCommand}.
 */
export interface DescribeSnapshotOperationCommandOutput extends DescribeSnapshotOperationResponse, __MetadataBearer {}

/**
 * <p>Provides a detailed description of a specified operation that was performed on an enhanced snapshot. To see a list of the operations of a snapshot, use <code>ListSnapshotOperations</code>.</p>
 *          <p>Snapshot operations are available for 90 days after they are created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeSnapshotOperationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeSnapshotOperationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DescribeSnapshotOperationRequest
 *   SnapshotName: "STRING_VALUE", // required
 *   SnapshotOperationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSnapshotOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotOperationResponse
 * //   SnapshotOperationInfoDetails: { // SnapshotOperationInfoDetails
 * //     SnapshotOperationId: "STRING_VALUE", // required
 * //     SnapshotOperation: "CreateSnapshot" || "DeleteSnapshot" || "ImportSnapshot" || "ExportSnapshot" || "SystemCreateSnapshot", // required
 * //     SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED", // required
 * //     SnapshotArn: "STRING_VALUE", // required
 * //     SourceEncryptionConfigurationDescription: { // EncryptionConfigurationDescription
 * //       KeyId: "STRING_VALUE",
 * //       KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     DestinationEncryptionConfigurationDescription: {
 * //       KeyId: "STRING_VALUE",
 * //       KeyType: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KEY", // required
 * //     },
 * //     SnapshotSourceLocationDescription: { // SnapshotOperationLocationDescription
 * //       LocationType: "S3", // required
 * //       S3PrefixLocation: { // SnapshotOperationS3PrefixLocation
 * //         BucketARN: "STRING_VALUE", // required
 * //         KeyPrefix: "STRING_VALUE", // required
 * //         ExportedPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     SnapshotDestinationLocationDescription: {
 * //       LocationType: "S3", // required
 * //       S3PrefixLocation: {
 * //         BucketARN: "STRING_VALUE", // required
 * //         KeyPrefix: "STRING_VALUE", // required
 * //         ExportedPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     ApplicationOperationDescription: { // ApplicationOperationDescription
 * //       ApplicationOperationId: "STRING_VALUE",
 * //       ApplicationName: "STRING_VALUE",
 * //     },
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     SnapshotOperationFailureDetails: { // SnapshotOperationFailureDetails
 * //       ErrorInfo: { // SnapshotErrorInfo
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorString: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotOperationCommandInput - {@link DescribeSnapshotOperationCommandInput}
 * @returns {@link DescribeSnapshotOperationCommandOutput}
 * @see {@link DescribeSnapshotOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotOperationCommandOutput} for command's `response` shape.
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
export class DescribeSnapshotOperationCommand extends command<DescribeSnapshotOperationCommandInput, DescribeSnapshotOperationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSnapshotOperation",
  DescribeSnapshotOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotOperationRequest;
      output: DescribeSnapshotOperationResponse;
    };
    sdk: {
      input: DescribeSnapshotOperationCommandInput;
      output: DescribeSnapshotOperationCommandOutput;
    };
  };
}
