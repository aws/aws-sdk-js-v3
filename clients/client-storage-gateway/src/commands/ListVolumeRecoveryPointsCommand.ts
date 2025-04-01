// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVolumeRecoveryPointsInput, ListVolumeRecoveryPointsOutput } from "../models/models_0";
import { de_ListVolumeRecoveryPointsCommand, se_ListVolumeRecoveryPointsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVolumeRecoveryPointsCommand}.
 */
export interface ListVolumeRecoveryPointsCommandInput extends ListVolumeRecoveryPointsInput {}
/**
 * @public
 *
 * The output of {@link ListVolumeRecoveryPointsCommand}.
 */
export interface ListVolumeRecoveryPointsCommandOutput extends ListVolumeRecoveryPointsOutput, __MetadataBearer {}

/**
 * <p>Lists the recovery points for a specified gateway. This operation is only supported in
 *          the cached volume gateway type.</p>
 *          <p>Each cache volume has one recovery point. A volume recovery point is a point in time at
 *          which all data of the volume is consistent and from which you can create a snapshot or
 *          clone a new cached volume from a source volume. To create a snapshot from a volume recovery
 *          point use the <a>CreateSnapshotFromVolumeRecoveryPoint</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumeRecoveryPointsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumeRecoveryPointsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListVolumeRecoveryPointsInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ListVolumeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumeRecoveryPointsOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   VolumeRecoveryPointInfos: [ // VolumeRecoveryPointInfos
 * //     { // VolumeRecoveryPointInfo
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeUsageInBytes: Number("long"),
 * //       VolumeRecoveryPointTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVolumeRecoveryPointsCommandInput - {@link ListVolumeRecoveryPointsCommandInput}
 * @returns {@link ListVolumeRecoveryPointsCommandOutput}
 * @see {@link ListVolumeRecoveryPointsCommandInput} for command's `input` shape.
 * @see {@link ListVolumeRecoveryPointsCommandOutput} for command's `response` shape.
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
 * @example To list recovery points for a gateway
 * ```javascript
 * // Lists the recovery points for a specified gateway in which all data of the volume is consistent and can be used to create a snapshot.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new ListVolumeRecoveryPointsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   VolumeRecoveryPointInfos: [
 *     {
 *       VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       VolumeRecoveryPointTime: "2012-09-04T21:08:44.627Z",
 *       VolumeSizeInBytes: 536870912000
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListVolumeRecoveryPointsCommand extends $Command
  .classBuilder<
    ListVolumeRecoveryPointsCommandInput,
    ListVolumeRecoveryPointsCommandOutput,
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
  .s("StorageGateway_20130630", "ListVolumeRecoveryPoints", {})
  .n("StorageGatewayClient", "ListVolumeRecoveryPointsCommand")
  .f(void 0, void 0)
  .ser(se_ListVolumeRecoveryPointsCommand)
  .de(de_ListVolumeRecoveryPointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVolumeRecoveryPointsInput;
      output: ListVolumeRecoveryPointsOutput;
    };
    sdk: {
      input: ListVolumeRecoveryPointsCommandInput;
      output: ListVolumeRecoveryPointsCommandOutput;
    };
  };
}
