// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSnapshotScheduleInput, UpdateSnapshotScheduleOutput } from "../models/models_0";
import { de_UpdateSnapshotScheduleCommand, se_UpdateSnapshotScheduleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example To update a volume snapshot schedule
 * ```javascript
 * // Updates a snapshot schedule configured for a gateway volume.
 * const input = {
 *   "Description": "Hourly snapshot",
 *   "RecurrenceInHours": 1,
 *   "StartAt": 0,
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new UpdateSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "VolumeARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * // example id: to-update-a-volume-snapshot-schedule-1472152757068
 * ```
 *
 */
export class UpdateSnapshotScheduleCommand extends $Command
  .classBuilder<
    UpdateSnapshotScheduleCommandInput,
    UpdateSnapshotScheduleCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "UpdateSnapshotSchedule", {})
  .n("StorageGatewayClient", "UpdateSnapshotScheduleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSnapshotScheduleCommand)
  .de(de_UpdateSnapshotScheduleCommand)
  .build() {
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
