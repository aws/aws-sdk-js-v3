// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSnapshotRequest, DeleteSnapshotResponse } from "../models/models_0";
import { DeleteSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSnapshotCommand}.
 */
export interface DeleteSnapshotCommandOutput extends DeleteSnapshotResponse, __MetadataBearer {}

/**
 * <p>Deletes an enhanced snapshot. Snapshots are not scoped to an application, so you can delete a snapshot independently of the application that it was created from.</p>
 *          <p>This operation is asynchronous. The response returns the snapshot ARN with the <code>DELETING</code> status. To track the progress of the operation, use <code>DescribeSnapshotOperation</code>.</p>
 *          <p>You can delete a snapshot in the <code>READY</code> or <code>FAILED</code> status. If a snapshot operation, such as an export, uses the snapshot, Managed Service for Apache Flink waits for that operation to finish before it deletes the snapshot. For a snapshot in any other status, <code>ResourceInUseException</code> is returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteSnapshotRequest
 *   SnapshotName: "STRING_VALUE", // required
 *   SnapshotCreationTimestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSnapshotResponse
 * //   SnapshotArn: "STRING_VALUE", // required
 * //   SnapshotStatus: "CREATING" || "READY" || "DELETING" || "FAILED", // required
 * //   SnapshotOperationId: "STRING_VALUE", // required
 * //   SnapshotOperationStatus: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "CANCELLED", // required
 * // };
 *
 * ```
 *
 * @param DeleteSnapshotCommandInput - {@link DeleteSnapshotCommandInput}
 * @returns {@link DeleteSnapshotCommandOutput}
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
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
export class DeleteSnapshotCommand extends command<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSnapshot",
  DeleteSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSnapshotRequest;
      output: DeleteSnapshotResponse;
    };
    sdk: {
      input: DeleteSnapshotCommandInput;
      output: DeleteSnapshotCommandOutput;
    };
  };
}
