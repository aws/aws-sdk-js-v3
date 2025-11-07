// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateSnapshotFromVolumeRecoveryPointInput,
  CreateSnapshotFromVolumeRecoveryPointOutput,
} from "../models/models_0";
import { CreateSnapshotFromVolumeRecoveryPoint } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotFromVolumeRecoveryPointCommand}.
 */
export interface CreateSnapshotFromVolumeRecoveryPointCommandInput extends CreateSnapshotFromVolumeRecoveryPointInput {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotFromVolumeRecoveryPointCommand}.
 */
export interface CreateSnapshotFromVolumeRecoveryPointCommandOutput
  extends CreateSnapshotFromVolumeRecoveryPointOutput,
    __MetadataBearer {}

/**
 * <p>Initiates a snapshot of a gateway from a volume recovery point. This operation is only
 *          supported in the cached volume gateway type.</p>
 *          <p>A volume recovery point is a point in time at which all data of the volume is consistent
 *          and from which you can create a snapshot. To get a list of volume recovery point for cached
 *          volume gateway, use <a>ListVolumeRecoveryPoints</a>.</p>
 *          <p>In the <code>CreateSnapshotFromVolumeRecoveryPoint</code> request, you identify the
 *          volume by providing its Amazon Resource Name (ARN). You must also provide a description for
 *          the snapshot. When the gateway takes a snapshot of the specified volume, the snapshot and
 *          its description appear in the Storage Gateway console.
 *           In response, the gateway returns
 *          you a snapshot ID. You can use this snapshot ID to check the snapshot progress or later use
 *          it when you want to create a volume from a snapshot.</p>
 *          <note>
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
 *                Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSnapshotFromVolumeRecoveryPointCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSnapshotFromVolumeRecoveryPointCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateSnapshotFromVolumeRecoveryPointInput
 *   VolumeARN: "STRING_VALUE", // required
 *   SnapshotDescription: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotFromVolumeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotFromVolumeRecoveryPointOutput
 * //   SnapshotId: "STRING_VALUE",
 * //   VolumeARN: "STRING_VALUE",
 * //   VolumeRecoveryPointTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSnapshotFromVolumeRecoveryPointCommandInput - {@link CreateSnapshotFromVolumeRecoveryPointCommandInput}
 * @returns {@link CreateSnapshotFromVolumeRecoveryPointCommandOutput}
 * @see {@link CreateSnapshotFromVolumeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotFromVolumeRecoveryPointCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>An internal server error has occurred because the service is unavailable. For more
 *          information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @example To create a snapshot of a gateway volume
 * ```javascript
 * // Initiates a snapshot of a gateway from a volume recovery point.
 * const input = {
 *   SnapshotDescription: "My root volume snapshot as of 2017-06-30T10:10:10.000Z",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new CreateSnapshotFromVolumeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SnapshotId: "snap-78e22663",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB",
 *   VolumeRecoveryPointTime: "2017-06-30T10:10:10.000Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSnapshotFromVolumeRecoveryPointCommand extends $Command
  .classBuilder<
    CreateSnapshotFromVolumeRecoveryPointCommandInput,
    CreateSnapshotFromVolumeRecoveryPointCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "CreateSnapshotFromVolumeRecoveryPoint", {})
  .n("StorageGatewayClient", "CreateSnapshotFromVolumeRecoveryPointCommand")
  .sc(CreateSnapshotFromVolumeRecoveryPoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotFromVolumeRecoveryPointInput;
      output: CreateSnapshotFromVolumeRecoveryPointOutput;
    };
    sdk: {
      input: CreateSnapshotFromVolumeRecoveryPointCommandInput;
      output: CreateSnapshotFromVolumeRecoveryPointCommandOutput;
    };
  };
}
