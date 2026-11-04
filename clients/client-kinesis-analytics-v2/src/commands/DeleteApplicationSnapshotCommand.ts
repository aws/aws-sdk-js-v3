// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApplicationSnapshotRequest, DeleteApplicationSnapshotResponse } from "../models/models_0";
import { DeleteApplicationSnapshot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApplicationSnapshotCommand}.
 */
export interface DeleteApplicationSnapshotCommandInput extends DeleteApplicationSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApplicationSnapshotCommand}.
 */
export interface DeleteApplicationSnapshotCommandOutput extends DeleteApplicationSnapshotResponse, __MetadataBearer {}

/**
 * Deletes a snapshot of application state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DeleteApplicationSnapshotCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DeleteApplicationSnapshotRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   SnapshotName: "STRING_VALUE", // required
 *   SnapshotCreationTimestamp: new Date("TIMESTAMP"), // required
 * };
 * const command = new DeleteApplicationSnapshotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApplicationSnapshotCommandInput - {@link DeleteApplicationSnapshotCommandInput}
 * @returns {@link DeleteApplicationSnapshotCommandOutput}
 * @see {@link DeleteApplicationSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationSnapshotCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modifications to an application. This error can be the result of attempting to modify an application without using the current application ID.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The specified input parameter value is not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request JSON is not valid for the operation.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The application is not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Specified application can't be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalyticsV2 service.
 *
 * @public
 */
export class DeleteApplicationSnapshotCommand extends command<DeleteApplicationSnapshotCommandInput, DeleteApplicationSnapshotCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApplicationSnapshot",
  DeleteApplicationSnapshot$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApplicationSnapshotRequest;
      output: {};
    };
    sdk: {
      input: DeleteApplicationSnapshotCommandInput;
      output: DeleteApplicationSnapshotCommandOutput;
    };
  };
}
