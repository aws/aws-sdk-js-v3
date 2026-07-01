// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/models_0";
import { UpdateSnapshotSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSnapshotScheduleCommand}.
 */
export interface UpdateSnapshotScheduleCommandInput extends UpdateSnapshotScheduleInput {}
/**
 * @public
 *
 * The output of {@link UpdateSnapshotScheduleCommand}.
 */
export interface UpdateSnapshotScheduleCommandOutput extends UpdateSnapshotScheduleOutput, __MetadataBearer {}

/**
 * <p>Updates a snapshot schedule configured for a gateway volume. This operation is only
 *          supported in the cached volume and stored volume gateway types.</p>
 *          <p>The default snapshot schedule for volume is once every 24 hours, starting at the
 *          creation time of the volume. You can use this API to change the snapshot schedule
 *          configured for the volume.</p>
 *          <p>In the request you must identify the gateway volume whose snapshot schedule you want to
 *          update, and the schedule information, including when you want the snapshot to begin on a
 *          day and the frequency (in hours) of snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSnapshotScheduleInput
 *   VolumeARN: "STRING_VALUE", // required
 *   StartAt: Number("int"), // required
 *   RecurrenceInHours: Number("int"), // required
 *   Description: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSnapshotScheduleOutput
 * //   VolumeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSnapshotScheduleCommandInput - {@link UpdateSnapshotScheduleCommandInput}
 * @returns {@link UpdateSnapshotScheduleCommandOutput}
 * @see {@link UpdateSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateSnapshotScheduleCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To update a volume snapshot schedule
 * ```javascript
 * // Updates a snapshot schedule configured for a gateway volume.
 * const input = {
 *   Description: "Hourly snapshot",
 *   RecurrenceInHours: 1,
 *   StartAt: 0,
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateSnapshotScheduleCommand extends command<UpdateSnapshotScheduleCommandInput, UpdateSnapshotScheduleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSnapshotSchedule",
  UpdateSnapshotSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSnapshotScheduleInput;
      output: UpdateSnapshotScheduleOutput;
    };
    sdk: {
      input: UpdateSnapshotScheduleCommandInput;
      output: UpdateSnapshotScheduleCommandOutput;
    };
  };
}
