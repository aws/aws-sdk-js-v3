// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSnapshotOperationsRequest, ListSnapshotOperationsResponse } from "../models/models_0";
import { ListSnapshotOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSnapshotOperationsCommand}.
 */
export interface ListSnapshotOperationsCommandInput extends ListSnapshotOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSnapshotOperationsCommand}.
 */
export interface ListSnapshotOperationsCommandOutput extends ListSnapshotOperationsResponse, __MetadataBearer {}

/**
 * <p>Lists the operations that were performed on the specified enhanced snapshot, such as <code>CreateSnapshot</code>, <code>ImportSnapshot</code>, and <code>ExportSnapshot</code>. The response includes a summary of each operation.</p>
 *          <p>You can specify only one of the <code>SnapshotOperation</code> or <code>SnapshotOperationStatus</code> filters in a request. If you specify both, <code>InvalidArgumentException</code> is returned.</p>
 *          <p>To get the complete description of a specific operation, use <code>DescribeSnapshotOperation</code>. Snapshot operations are available for 90 days after they are created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListSnapshotOperationsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListSnapshotOperationsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ListSnapshotOperationsRequest
 *   SnapshotName: "STRING_VALUE", // required
 *   SnapshotOperation: "CreateSnapshot" || "DeleteSnapshot" || "ImportSnapshot" || "ExportSnapshot" || "SystemCreateSnapshot",
 *   SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSnapshotOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSnapshotOperationsResponse
 * //   SnapshotOperationInfoList: [ // SnapshotOperationInfoList // required
 * //     { // SnapshotOperationInfo
 * //       SnapshotOperationId: "STRING_VALUE", // required
 * //       SnapshotOperation: "CreateSnapshot" || "DeleteSnapshot" || "ImportSnapshot" || "ExportSnapshot" || "SystemCreateSnapshot", // required
 * //       SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED", // required
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSnapshotOperationsCommandInput - {@link ListSnapshotOperationsCommandInput}
 * @returns {@link ListSnapshotOperationsCommandOutput}
 * @see {@link ListSnapshotOperationsCommandInput} for command's `input` shape.
 * @see {@link ListSnapshotOperationsCommandOutput} for command's `response` shape.
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
export class ListSnapshotOperationsCommand extends command<ListSnapshotOperationsCommandInput, ListSnapshotOperationsCommandOutput>(
  _ep0,
  _mw0,
  "ListSnapshotOperations",
  ListSnapshotOperations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSnapshotOperationsRequest;
      output: ListSnapshotOperationsResponse;
    };
    sdk: {
      input: ListSnapshotOperationsCommandInput;
      output: ListSnapshotOperationsCommandOutput;
    };
  };
}
