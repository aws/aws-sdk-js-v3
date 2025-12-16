// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import type { UpdateMediaStorageConfigurationInput, UpdateMediaStorageConfigurationOutput } from "../models/models_0";
import { UpdateMediaStorageConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMediaStorageConfigurationCommand}.
 */
export interface UpdateMediaStorageConfigurationCommandInput extends UpdateMediaStorageConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateMediaStorageConfigurationCommand}.
 */
export interface UpdateMediaStorageConfigurationCommandOutput
  extends UpdateMediaStorageConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Associates a <code>SignalingChannel</code> to a stream to store the media. There are
 *             two signaling modes that you can specify :</p>
 *          <ul>
 *             <li>
 *                <p>If <code>StorageStatus</code> is enabled, the data will be stored in the
 *                         <code>StreamARN</code> provided. In order for WebRTC Ingestion to work, the stream must have data retention
 *                     enabled.</p>
 *             </li>
 *             <li>
 *                <p>If <code>StorageStatus</code> is disabled, no data will be stored, and the
 *                         <code>StreamARN</code> parameter will not be needed. </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If <code>StorageStatus</code> is enabled, direct peer-to-peer (master-viewer) connections no
 *                 longer occur. Peers connect directly to the storage session. You must call the
 *                     <code>JoinStorageSession</code> API to trigger an SDP offer send and establish a
 *                 connection between a peer and the storage session. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, UpdateMediaStorageConfigurationCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, UpdateMediaStorageConfigurationCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * // import type { KinesisVideoClientConfig } from "@aws-sdk/client-kinesis-video";
 * const config = {}; // type is KinesisVideoClientConfig
 * const client = new KinesisVideoClient(config);
 * const input = { // UpdateMediaStorageConfigurationInput
 *   ChannelARN: "STRING_VALUE", // required
 *   MediaStorageConfiguration: { // MediaStorageConfiguration
 *     StreamARN: "STRING_VALUE",
 *     Status: "ENABLED" || "DISABLED", // required
 *   },
 * };
 * const command = new UpdateMediaStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMediaStorageConfigurationCommandInput - {@link UpdateMediaStorageConfigurationCommandInput}
 * @returns {@link UpdateMediaStorageConfigurationCommandOutput}
 * @see {@link UpdateMediaStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMediaStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NoDataRetentionException} (client fault)
 *  <p>The Stream data retention in hours is equal to zero.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>When the input <code>StreamARN</code> or <code>ChannelARN</code>
 *             in <code>CLOUD_STORAGE_MODE</code> is already mapped to a different
 *             Kinesis Video Stream resource, or if the provided input <code>StreamARN</code>
 *             or <code>ChannelARN</code> is not in Active status, try one of the following : </p>
 *          <ol>
 *             <li>
 *                <p>The <code>DescribeMediaStorageConfiguration</code> API to determine what the stream given channel is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeMappedResourceConfiguration</code> API to determine the channel that the given stream is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeStream</code> or <code>DescribeSignalingChannel</code> API to determine the status of the resource.
 *             </p>
 *             </li>
 *          </ol>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 *
 * @public
 */
export class UpdateMediaStorageConfigurationCommand extends $Command
  .classBuilder<
    UpdateMediaStorageConfigurationCommandInput,
    UpdateMediaStorageConfigurationCommandOutput,
    KinesisVideoClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisVideoClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisVideo_20170930", "UpdateMediaStorageConfiguration", {})
  .n("KinesisVideoClient", "UpdateMediaStorageConfigurationCommand")
  .sc(UpdateMediaStorageConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMediaStorageConfigurationInput;
      output: {};
    };
    sdk: {
      input: UpdateMediaStorageConfigurationCommandInput;
      output: UpdateMediaStorageConfigurationCommandOutput;
    };
  };
}
