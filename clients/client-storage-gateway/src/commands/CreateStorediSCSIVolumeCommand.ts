// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateStorediSCSIVolumeInput, CreateStorediSCSIVolumeOutput } from "../models/models_0";
import { CreateStorediSCSIVolume } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStorediSCSIVolumeCommand}.
 */
export interface CreateStorediSCSIVolumeCommandInput extends CreateStorediSCSIVolumeInput {}
/**
 * @public
 *
 * The output of {@link CreateStorediSCSIVolumeCommand}.
 */
export interface CreateStorediSCSIVolumeCommandOutput extends CreateStorediSCSIVolumeOutput, __MetadataBearer {}

/**
 * <p>Creates a volume on a specified gateway. This operation is only supported in the stored
 *          volume gateway type.</p>
 *          <p>The size of the volume to create is inferred from the disk size. You can choose to
 *          preserve existing data on the disk, create volume from an existing snapshot, or create an
 *          empty volume. If you choose to create an empty gateway volume, then any existing data on
 *          the disk is erased.</p>
 *          <p>In the request, you must specify the gateway and the disk information on which you are
 *          creating the volume. In response, the gateway creates the volume and returns volume
 *          information such as the volume Amazon Resource Name (ARN), its size, and the iSCSI target
 *          ARN that initiators can use to connect to the volume target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateStorediSCSIVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateStorediSCSIVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateStorediSCSIVolumeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   DiskId: "STRING_VALUE", // required
 *   SnapshotId: "STRING_VALUE",
 *   PreserveExistingData: true || false, // required
 *   TargetName: "STRING_VALUE", // required
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateStorediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorediSCSIVolumeOutput
 * //   VolumeARN: "STRING_VALUE",
 * //   VolumeSizeInBytes: Number("long"),
 * //   TargetARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStorediSCSIVolumeCommandInput - {@link CreateStorediSCSIVolumeCommandInput}
 * @returns {@link CreateStorediSCSIVolumeCommandOutput}
 * @see {@link CreateStorediSCSIVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateStorediSCSIVolumeCommandOutput} for command's `response` shape.
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
 * @example To create a stored iSCSI volume
 * ```javascript
 * // Creates a stored volume on a specified stored gateway.
 * const input = {
 *   DiskId: "pci-0000:03:00.0-scsi-0:0:0:0",
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   NetworkInterfaceId: "10.1.1.1",
 *   PreserveExistingData: true,
 *   SnapshotId: "snap-f47b7b94",
 *   TargetName: "my-volume"
 * };
 * const command = new CreateStorediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *   VolumeSizeInBytes: 1099511627776
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateStorediSCSIVolumeCommand extends $Command
  .classBuilder<
    CreateStorediSCSIVolumeCommandInput,
    CreateStorediSCSIVolumeCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "CreateStorediSCSIVolume", {})
  .n("StorageGatewayClient", "CreateStorediSCSIVolumeCommand")
  .sc(CreateStorediSCSIVolume)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStorediSCSIVolumeInput;
      output: CreateStorediSCSIVolumeOutput;
    };
    sdk: {
      input: CreateStorediSCSIVolumeCommandInput;
      output: CreateStorediSCSIVolumeCommandOutput;
    };
  };
}
