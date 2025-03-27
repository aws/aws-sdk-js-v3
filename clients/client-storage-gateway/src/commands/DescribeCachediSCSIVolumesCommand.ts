// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCachediSCSIVolumesInput, DescribeCachediSCSIVolumesOutput } from "../models/models_0";
import { de_DescribeCachediSCSIVolumesCommand, se_DescribeCachediSCSIVolumesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCachediSCSIVolumesCommand}.
 */
export interface DescribeCachediSCSIVolumesCommandInput extends DescribeCachediSCSIVolumesInput {}
/**
 * @public
 *
 * The output of {@link DescribeCachediSCSIVolumesCommand}.
 */
export interface DescribeCachediSCSIVolumesCommandOutput extends DescribeCachediSCSIVolumesOutput, __MetadataBearer {}

/**
 * <p>Returns a description of the gateway volumes specified in the request. This operation is
 *          only supported in the cached volume gateway types.</p>
 *          <p>The list of gateway volumes in the request must be from one gateway. In the response,
 *             Storage Gateway returns volume information sorted by volume Amazon Resource Name
 *          (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeCachediSCSIVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeCachediSCSIVolumesInput
 *   VolumeARNs: [ // VolumeARNs // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeCachediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCachediSCSIVolumesOutput
 * //   CachediSCSIVolumes: [ // CachediSCSIVolumes
 * //     { // CachediSCSIVolume
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       VolumeStatus: "STRING_VALUE",
 * //       VolumeAttachmentStatus: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeProgress: Number("double"),
 * //       SourceSnapshotId: "STRING_VALUE",
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
 * @param DescribeCachediSCSIVolumesCommandInput - {@link DescribeCachediSCSIVolumesCommandInput}
 * @returns {@link DescribeCachediSCSIVolumesCommandOutput}
 * @see {@link DescribeCachediSCSIVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeCachediSCSIVolumesCommandOutput} for command's `response` shape.
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
 * @example To describe gateway cached iSCSI volumes
 * ```javascript
 * // Returns a description of the gateway cached iSCSI volumes specified in the request.
 * const input = {
 *   VolumeARNs: [
 *     "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 *   ]
 * };
 * const command = new DescribeCachediSCSIVolumesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CachediSCSIVolumes: [
 *     {
 *       VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       VolumeId: "vol-1122AABB",
 *       VolumeSizeInBytes: 1099511627776,
 *       VolumeStatus: "AVAILABLE",
 *       VolumeType: "CACHED iSCSI",
 *       VolumeiSCSIAttributes: {
 *         ChapEnabled: true,
 *         LunNumber: 1,
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
export class DescribeCachediSCSIVolumesCommand extends $Command
  .classBuilder<
    DescribeCachediSCSIVolumesCommandInput,
    DescribeCachediSCSIVolumesCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeCachediSCSIVolumes", {})
  .n("StorageGatewayClient", "DescribeCachediSCSIVolumesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCachediSCSIVolumesCommand)
  .de(de_DescribeCachediSCSIVolumesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCachediSCSIVolumesInput;
      output: DescribeCachediSCSIVolumesOutput;
    };
    sdk: {
      input: DescribeCachediSCSIVolumesCommandInput;
      output: DescribeCachediSCSIVolumesCommandOutput;
    };
  };
}
