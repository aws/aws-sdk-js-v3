// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSnapshotRequest, CreateSnapshotResponse } from "../models/models_0";
import { CreateSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotResponse, __MetadataBearer {}

/**
 * <p>Creates an enhanced snapshot of the state data of a running Managed Service for Apache Flink application. The application must be in the <code>RUNNING</code> status, use Apache Flink version 1.20 or later, and use the <code>ENHANCED_SNAPSHOTS</code> snapshot mode.</p>
 *          <p>This operation is asynchronous. The response returns the snapshot ARN with the <code>CREATING</code> status. To check the status of the snapshot, use <code>DescribeSnapshot</code>. To track the progress of the operation, use <code>DescribeSnapshotOperation</code>.</p>
 *          <p>An application can have only one <code>CreateSnapshot</code> operation in progress at a time. For information about limits, see <a href="https://docs.aws.amazon.com/managed-flink/latest/java/limits.html">Managed Service for Apache Flink Quotas</a>. For more information about snapshots, see <a href="https://docs.aws.amazon.com/managed-flink/latest/java/how-snapshots.html">Enhanced Snapshots</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, CreateSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, CreateSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // CreateSnapshotRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   SnapshotName: "STRING_VALUE", // required
 *   SnapshotDescription: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotResponse
 * //   SnapshotArn: "STRING_VALUE", // required
 * //   SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED", // required
 * //   SnapshotOperationId: "STRING_VALUE", // required
 * //   SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application or snapshot. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidApplicationConfigurationException} (client fault)
 *  <p>The user-provided application configuration is not valid.</p>
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
export class CreateSnapshotCommand extends command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "CreateSnapshot",
  CreateSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotRequest;
      output: CreateSnapshotResponse;
    };
    sdk: {
      input: CreateSnapshotCommandInput;
      output: CreateSnapshotCommandOutput;
    };
  };
}
