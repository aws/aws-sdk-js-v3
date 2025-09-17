// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSnapshotInput, CreateSnapshotOutput } from "../models/models_0";
import { de_CreateSnapshotCommand, se_CreateSnapshotCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandInput extends CreateSnapshotInput {}
/**
 * @public
 *
 * The output of {@link CreateSnapshotCommand}.
 */
export interface CreateSnapshotCommandOutput extends CreateSnapshotOutput, __MetadataBearer {}

/**
 * <p>Initiates a snapshot of a volume.</p>
 *          <p>Storage Gateway provides the ability to back up point-in-time snapshots of your
 *          data to Amazon Simple Storage (Amazon S3) for durable off-site recovery, and also
 *          import the data to an Amazon Elastic Block Store (EBS) volume in Amazon Elastic Compute
 *          Cloud (EC2). You can take snapshots of your gateway volume on a scheduled or ad hoc basis.
 *          This API enables you to take an ad hoc snapshot. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#SchedulingSnapshot">Editing a
 *             snapshot schedule</a>.</p>
 *          <p>In the <code>CreateSnapshot</code> request, you identify the volume by providing its
 *          Amazon Resource Name (ARN). You must also provide description for the snapshot. When
 *             Storage Gateway takes the snapshot of specified volume, the snapshot and
 *          description appears in the Storage Gateway console. In response, Storage Gateway
 *          returns you a snapshot ID. You can use this snapshot ID to check the snapshot progress or
 *          later use it when you want to create a volume from a snapshot. This operation is only
 *          supported in stored and cached volume gateway type.</p>
 *          <note>
 *             <p>To list or delete a snapshot, you must use the Amazon EC2 API. For more information,
 *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeSnapshots.html">DescribeSnapshots</a>
 *             or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteSnapshot.html">DeleteSnapshot</a> in the <i>Amazon Elastic Compute Cloud API
 *                Reference</i>.</p>
 *          </note>
 *          <important>
 *             <p>Volume and snapshot IDs are changing to a longer length ID format. For more
 *             information, see the important note on the <a href="https://docs.aws.amazon.com/storagegateway/latest/APIReference/Welcome.html">Welcome</a> page.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSnapshotCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSnapshotCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateSnapshotInput
 *   VolumeARN: "STRING_VALUE", // required
 *   SnapshotDescription: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CreateSnapshotOutput
 * //   VolumeARN: "STRING_VALUE",
 * //   SnapshotId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSnapshotCommandInput - {@link CreateSnapshotCommandInput}
 * @returns {@link CreateSnapshotCommandOutput}
 * @see {@link CreateSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateSnapshotCommandOutput} for command's `response` shape.
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
 * // Initiates an ad-hoc snapshot of a gateway volume.
 * const input = {
 *   SnapshotDescription: "My root volume snapshot as of 10/03/2017",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * };
 * const command = new CreateSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SnapshotId: "snap-78e22663",
 *   VolumeARN: "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/volume/vol-1122AABB"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSnapshotCommand extends $Command
  .classBuilder<
    CreateSnapshotCommandInput,
    CreateSnapshotCommandOutput,
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
  .s("StorageGateway_20130630", "CreateSnapshot", {})
  .n("StorageGatewayClient", "CreateSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CreateSnapshotCommand)
  .de(de_CreateSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSnapshotInput;
      output: CreateSnapshotOutput;
    };
    sdk: {
      input: CreateSnapshotCommandInput;
      output: CreateSnapshotCommandOutput;
    };
  };
}
