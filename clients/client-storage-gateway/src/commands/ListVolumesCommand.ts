// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListVolumesInput, ListVolumesOutput } from "../models/models_0";
import { ListVolumes } from "../schemas/schemas_4_Describe";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandInput extends ListVolumesInput {}
/**
 * @public
 *
 * The output of {@link ListVolumesCommand}.
 */
export interface ListVolumesCommandOutput extends ListVolumesOutput, __MetadataBearer {}

/**
 * <p>Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN. The
 *          response includes only the volume ARNs. If you want additional volume information, use the
 *             <a>DescribeStorediSCSIVolumes</a> or the <a>DescribeCachediSCSIVolumes</a> API.</p>
 *          <p>The operation supports pagination. By default, the operation returns a maximum of up to
 *          100 volumes. You can optionally specify the <code>Limit</code> field in the body to limit
 *          the number of volumes in the response. If the number of volumes returned in the response is
 *          truncated, the response includes a Marker field. You can use this Marker value in your
 *          subsequent request to retrieve the next set of volumes. This operation is only supported in
 *          the cached volume and stored volume gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListVolumesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListVolumesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // ListVolumesInput
 *   GatewayARN: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * // { // ListVolumesOutput
 * //   GatewayARN: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   VolumeInfos: [ // VolumeInfos
 * //     { // VolumeInfo
 * //       VolumeARN: "STRING_VALUE",
 * //       VolumeId: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       GatewayId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       VolumeSizeInBytes: Number("long"),
 * //       VolumeAttachmentStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVolumesCommandInput - {@link ListVolumesCommandInput}
 * @returns {@link ListVolumesCommandOutput}
 * @see {@link ListVolumesCommandInput} for command's `input` shape.
 * @see {@link ListVolumesCommandOutput} for command's `response` shape.
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
 * @example To list the iSCSI stored volumes of a gateway
 * ```javascript
 * // Lists the iSCSI stored volumes of a gateway. Results are sorted by volume ARN up to a maximum of 100 volumes.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   Limit: 2,
 *   Marker: "1"
 * };
 * const command = new ListVolumesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   Marker: "1",
 *   VolumeInfos: [
 *     {
 *       GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *       GatewayId: "sgw-12A3456B",
 *       VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *       VolumeId: "vol-1122AABB",
 *       VolumeSizeInBytes: 107374182400,
 *       VolumeType: "STORED"
 *     },
 *     {
 *       GatewayARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C",
 *       GatewayId: "sgw-gw-13B4567C",
 *       VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-13B4567C/volume/vol-3344CCDD",
 *       VolumeId: "vol-1122AABB",
 *       VolumeSizeInBytes: 107374182400,
 *       VolumeType: "STORED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListVolumesCommand extends $Command
  .classBuilder<
    ListVolumesCommandInput,
    ListVolumesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "ListVolumes", {})
  .n("StorageGatewayClient", "ListVolumesCommand")
  .sc(ListVolumes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVolumesInput;
      output: ListVolumesOutput;
    };
    sdk: {
      input: ListVolumesCommandInput;
      output: ListVolumesCommandOutput;
    };
  };
}
