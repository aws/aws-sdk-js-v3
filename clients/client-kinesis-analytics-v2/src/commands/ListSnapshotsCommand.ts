// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSnapshotsRequest, ListSnapshotsResponse } from "../models/models_0";
import { ListSnapshots$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSnapshotsCommand}.
 */
export interface ListSnapshotsCommandInput extends ListSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotsCommand}.
 */
export interface ListSnapshotsCommandOutput extends ListSnapshotsResponse, __MetadataBearer {}

/**
 * <p>Lists the enhanced snapshots in your account. Snapshots are not scoped to an application. To list the snapshots that were created from a specific application, use the <code>SourceApplicationName</code> parameter.</p>
 *          <p>You can specify only one of the following filters in a request: <code>SourceApplicationName</code>, <code>SnapshotInitiator</code>, <code>SnapshotInitiatorOperation</code>, or <code>SnapshotStatus</code>. If you specify more than one filter, <code>InvalidArgumentException</code> is returned.</p>
 *          <p>The results are sorted in descending order of snapshot creation timestamp. To get detailed information about a specific snapshot, use <code>DescribeSnapshot</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListSnapshotsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListSnapshotsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ListSnapshotsRequest
 *   SourceApplicationName: "STRING_VALUE",
 *   SnapshotInitiator: "USER" || "SYSTEM",
 *   SnapshotInitiatorOperation: "CreateSnapshot" || "ImportSnapshot" || "SystemCreateSnapshot",
 *   SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotsResponse
 * //   SnapshotInfoList: [ // SnapshotInfoList // required
 * //     { // SnapshotInfo
 * //       SnapshotName: "STRING_VALUE", // required
 * //       SnapshotArn: "STRING_VALUE", // required
 * //       SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED", // required
 * //       SnapshotCreationTimestamp: new Date("TIMESTAMP"), // required
 * //       SnapshotInitiator: "USER" || "SYSTEM", // required
 * //       SnapshotInitiatorOperation: "CreateSnapshot" || "ImportSnapshot" || "SystemCreateSnapshot", // required
 * //       SourceApplicationName: "STRING_VALUE",
 * //       SnapshotFormat: "CANONICAL", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSnapshotsCommandInput - {@link ListSnapshotsCommandInput}
 * @returns {@link ListSnapshotsCommandOutput}
 * @see {@link ListSnapshotsCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
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
export class ListSnapshotsCommand extends command<ListSnapshotsCommandInput, ListSnapshotsCommandOutput>(
  _ep0,
  _mw0,
  "ListSnapshots",
  ListSnapshots$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSnapshotsRequest;
      output: ListSnapshotsResponse;
    };
    sdk: {
      input: ListSnapshotsCommandInput;
      output: ListSnapshotsCommandOutput;
    };
  };
}
