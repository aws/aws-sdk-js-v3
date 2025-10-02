// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCachediSCSIVolumeInput, CreateCachediSCSIVolumeOutput } from "../models/models_0";
import { de_CreateCachediSCSIVolumeCommand, se_CreateCachediSCSIVolumeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCachediSCSIVolumeCommand}.
 */
export interface CreateCachediSCSIVolumeCommandInput extends CreateCachediSCSIVolumeInput {}
/**
 * @public
 *
 * The output of {@link CreateCachediSCSIVolumeCommand}.
 */
export interface CreateCachediSCSIVolumeCommandOutput extends CreateCachediSCSIVolumeOutput, __MetadataBearer {}

/**
 * <p>Creates a cached volume on a specified cached volume gateway. This operation is only
 *          supported in the cached volume gateway type.</p>
 *          <note>
 *             <p>Cache storage must be allocated to the gateway before you can create a cached volume.
 *             Use the <a>AddCache</a> operation to add cache storage to a gateway.</p>
 *          </note>
 *          <p>In the request, you must specify the gateway, size of the volume in bytes, the iSCSI
 *          target name, an IP address on which to expose the target, and a unique client token. In
 *          response, the gateway creates the volume and returns information about it. This information
 *          includes the volume Amazon Resource Name (ARN), its size, and the iSCSI target ARN that
 *          initiators can use to connect to the volume target.</p>
 *          <p>Optionally, you can provide the ARN for an existing volume as the
 *             <code>SourceVolumeARN</code> for this cached volume, which creates an exact copy of the
 *          existing volume’s latest recovery point. The <code>VolumeSizeInBytes</code> value must be
 *          equal to or larger than the size of the copied volume, in bytes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateCachediSCSIVolumeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateCachediSCSIVolumeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateCachediSCSIVolumeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   VolumeSizeInBytes: Number("long"), // required
 *   SnapshotId: "STRING_VALUE",
 *   TargetName: "STRING_VALUE", // required
 *   SourceVolumeARN: "STRING_VALUE",
 *   NetworkInterfaceId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCachediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCachediSCSIVolumeOutput
 * //   VolumeARN: "STRING_VALUE",
 * //   TargetARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCachediSCSIVolumeCommandInput - {@link CreateCachediSCSIVolumeCommandInput}
 * @returns {@link CreateCachediSCSIVolumeCommandOutput}
 * @see {@link CreateCachediSCSIVolumeCommandInput} for command's `input` shape.
 * @see {@link CreateCachediSCSIVolumeCommandOutput} for command's `response` shape.
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
 * @example To create a cached iSCSI volume
 * ```javascript
 * // Creates a cached volume on a specified cached gateway.
 * const input = {
 *   ClientToken: "cachedvol112233",
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   NetworkInterfaceId: "10.1.1.1",
 *   SnapshotId: "snap-f47b7b94",
 *   TargetName: "my-volume",
 *   VolumeSizeInBytes: 536870912000
 * };
 * const command = new CreateCachediSCSIVolumeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCachediSCSIVolumeCommand extends $Command
  .classBuilder<
    CreateCachediSCSIVolumeCommandInput,
    CreateCachediSCSIVolumeCommandOutput,
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
  .s("StorageGateway_20130630", "CreateCachediSCSIVolume", {})
  .n("StorageGatewayClient", "CreateCachediSCSIVolumeCommand")
  .f(void 0, void 0)
  .ser(se_CreateCachediSCSIVolumeCommand)
  .de(de_CreateCachediSCSIVolumeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCachediSCSIVolumeInput;
      output: CreateCachediSCSIVolumeOutput;
    };
    sdk: {
      input: CreateCachediSCSIVolumeCommandInput;
      output: CreateCachediSCSIVolumeCommandOutput;
    };
  };
}
