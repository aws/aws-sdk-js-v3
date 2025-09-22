// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStorediSCSIVolumesInput, DescribeStorediSCSIVolumesOutput } from "../models/models_0";
import { DescribeStorediSCSIVolumes } from "../schemas/schemas_4_Describe";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorediSCSIVolumesCommand}.
 */
export interface DescribeStorediSCSIVolumesCommandInput extends DescribeStorediSCSIVolumesInput {}
/**
 * @public
 *
 * The output of {@link DescribeStorediSCSIVolumesCommand}.
 */
export interface DescribeStorediSCSIVolumesCommandOutput extends DescribeStorediSCSIVolumesOutput, __MetadataBearer {}

/**
 * <p>Returns the description of the gateway volumes specified in the request. The list of
 *          gateway volumes in the request must be from one gateway. In the response, Storage Gateway returns volume information sorted by volume ARNs. This operation is only
 *          supported in stored volume gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeStorediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeStorediSCSIVolumesInput
 *   VolumeARNs: [ // VolumeARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeStorediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorediSCSIVolumesOutput
 * //   StorediSCSIVolumes: [ // StorediSCSIVolumes
 * //     { // StorediSCSIVolume
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       VolumeStatus: "STRING_VALUE",
 * //       VolumeAttachmentStatus: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeProgress: Number("double"),
 * //       VolumeDiskId: "STRING_VALUE",
 * //       SourceSnapshotId: "STRING_VALUE",
 * //       PreservedExistingData: true || false,
 * //       VolumeiSCSIAttributes: { // VolumeiSCSIAttributes
 * //         TargetARN: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         NetworkInterfacePort: Number("int"),
 * //         LunNumber: Number("int"),
 * //         ChapEnabled: true || false,
 * //       },
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       VolumeUsedInBytes: Number("long"),
 * //       KMSKey: "STRING_VALUE",
 * //       TargetName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeStorediSCSIVolumesCommandInput - {@link DescribeStorediSCSIVolumesCommandInput}
 * @returns {@link DescribeStorediSCSIVolumesCommandOutput}
 * @see {@link DescribeStorediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorediSCSIVolumesCommandOutput} for command's `response` shape.
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
 * @example To describe the volumes of a gateway
 * ```javascript
 * // Returns the description of the gateway volumes specified in the request belonging to the same gateway.
 * const input = {
 *   VolumeARNs: [
 *     "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 *   ]
 * };
 * const command = new DescribeStorediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   StorediSCSIVolumes: [
 *     {
 *       PreservedExistingData: false,
 *       VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       VolumeDiskId: "pci-0000:03:00.0-scsi-0:0:0:0",
 *       VolumeId: "vol-1122AABB",
 *       VolumeProgress: 23.7,
 *       VolumeSizeInBytes: 1099511627776,
 *       VolumeStatus: "BOOTSTRAPPING",
 *       VolumeiSCSIAttributes: {
 *         ChapEnabled: true,
 *         NetworkInterfaceId: "10.243.43.207",
 *         NetworkInterfacePort: 3260,
 *         TargetARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeStorediSCSIVolumesCommand extends $Command
  .classBuilder<
    DescribeStorediSCSIVolumesCommandInput,
    DescribeStorediSCSIVolumesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeStorediSCSIVolumes", {})
  .n("StorageGatewayClient", "DescribeStorediSCSIVolumesCommand")
  .sc(DescribeStorediSCSIVolumes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStorediSCSIVolumesInput;
      output: DescribeStorediSCSIVolumesOutput;
    };
    sdk: {
      input: DescribeStorediSCSIVolumesCommandInput;
      output: DescribeStorediSCSIVolumesCommandOutput;
    };
  };
}
