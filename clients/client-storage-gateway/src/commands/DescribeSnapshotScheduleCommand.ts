// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeSnapshotScheduleInput, DescribeSnapshotScheduleOutput } from "../models/models_0";
import { DescribeSnapshotSchedule } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotScheduleCommand}.
 */
export interface DescribeSnapshotScheduleCommandInput extends DescribeSnapshotScheduleInput {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotScheduleCommand}.
 */
export interface DescribeSnapshotScheduleCommandOutput extends DescribeSnapshotScheduleOutput, __MetadataBearer {}

/**
 * <p>Describes the snapshot schedule for the specified gateway volume. The snapshot schedule
 *          information includes intervals at which snapshots are automatically initiated on the
 *          volume. This operation is only supported in the cached volume and stored volume
 *          types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSnapshotScheduleCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSnapshotScheduleCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeSnapshotScheduleInput
 *   VolumeARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotScheduleOutput
 * //   VolumeARN: "STRING_VALUE",
 * //   StartAt: Number("int"),
 * //   RecurrenceInHours: Number("int"),
 * //   Description: "STRING_VALUE",
 * //   Timezone: "STRING_VALUE",
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotScheduleCommandInput - {@link DescribeSnapshotScheduleCommandInput}
 * @returns {@link DescribeSnapshotScheduleCommandOutput}
 * @see {@link DescribeSnapshotScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotScheduleCommandOutput} for command's `response` shape.
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
 * @example To describe snapshot schedule for gateway volume
 * ```javascript
 * // Describes the snapshot schedule for the specified gateway volume including intervals at which snapshots are automatically initiated.
 * const input = {
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new DescribeSnapshotScheduleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Description: "sgw-AABB1122:vol-AABB1122:Schedule",
 *   RecurrenceInHours: 24,
 *   StartAt: 6,
 *   Timezone: "GMT+7:00",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSnapshotScheduleCommand extends $Command
  .classBuilder<
    DescribeSnapshotScheduleCommandInput,
    DescribeSnapshotScheduleCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeSnapshotSchedule", {})
  .n("StorageGatewayClient", "DescribeSnapshotScheduleCommand")
  .sc(DescribeSnapshotSchedule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotScheduleInput;
      output: DescribeSnapshotScheduleOutput;
    };
    sdk: {
      input: DescribeSnapshotScheduleCommandInput;
      output: DescribeSnapshotScheduleCommandOutput;
    };
  };
}
