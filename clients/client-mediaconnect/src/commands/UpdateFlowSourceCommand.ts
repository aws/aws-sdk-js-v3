// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowSourceRequest, UpdateFlowSourceResponse } from "../models/models_0";
import { de_UpdateFlowSourceCommand, se_UpdateFlowSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowSourceCommand}.
 */
export interface UpdateFlowSourceCommandInput extends UpdateFlowSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowSourceCommand}.
 */
export interface UpdateFlowSourceCommandOutput extends UpdateFlowSourceResponse, __MetadataBearer {}

/**
 * Updates the source of a flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowSourceRequest
 *   Decryption: { // UpdateEncryption
 *     Algorithm: "aes128" || "aes192" || "aes256",
 *     ConstantInitializationVector: "STRING_VALUE",
 *     DeviceId: "STRING_VALUE",
 *     KeyType: "speke" || "static-key" || "srt-password",
 *     Region: "STRING_VALUE",
 *     ResourceId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *     Url: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   EntitlementArn: "STRING_VALUE",
 *   FlowArn: "STRING_VALUE", // required
 *   IngestPort: Number("int"),
 *   MaxBitrate: Number("int"),
 *   MaxLatency: Number("int"),
 *   MaxSyncBuffer: Number("int"),
 *   MediaStreamSourceConfigurations: [ // __listOfMediaStreamSourceConfigurationRequest
 *     { // MediaStreamSourceConfigurationRequest
 *       EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *       InputConfigurations: [ // __listOfInputConfigurationRequest
 *         { // InputConfigurationRequest
 *           InputPort: Number("int"), // required
 *           Interface: { // InterfaceRequest
 *             Name: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *       MediaStreamName: "STRING_VALUE", // required
 *     },
 *   ],
 *   MinLatency: Number("int"),
 *   Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp",
 *   SenderControlPort: Number("int"),
 *   SenderIpAddress: "STRING_VALUE",
 *   SourceArn: "STRING_VALUE", // required
 *   SourceListenerAddress: "STRING_VALUE",
 *   SourceListenerPort: Number("int"),
 *   StreamId: "STRING_VALUE",
 *   VpcInterfaceName: "STRING_VALUE",
 *   WhitelistCidr: "STRING_VALUE",
 *   GatewayBridgeSource: { // UpdateGatewayBridgeSourceRequest
 *     BridgeArn: "STRING_VALUE",
 *     VpcInterfaceAttachment: { // VpcInterfaceAttachment
 *       VpcInterfaceName: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateFlowSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowSourceResponse
 * //   FlowArn: "STRING_VALUE",
 * //   Source: { // Source
 * //     DataTransferSubscriberFeePercent: Number("int"),
 * //     Decryption: { // Encryption
 * //       Algorithm: "aes128" || "aes192" || "aes256",
 * //       ConstantInitializationVector: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       KeyType: "speke" || "static-key" || "srt-password",
 * //       Region: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE", // required
 * //       SecretArn: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     EntitlementArn: "STRING_VALUE",
 * //     IngestIp: "STRING_VALUE",
 * //     IngestPort: Number("int"),
 * //     MediaStreamSourceConfigurations: [ // __listOfMediaStreamSourceConfiguration
 * //       { // MediaStreamSourceConfiguration
 * //         EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 * //         InputConfigurations: [ // __listOfInputConfiguration
 * //           { // InputConfiguration
 * //             InputIp: "STRING_VALUE", // required
 * //             InputPort: Number("int"), // required
 * //             Interface: { // Interface
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //         MediaStreamName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE", // required
 * //     SenderControlPort: Number("int"),
 * //     SenderIpAddress: "STRING_VALUE",
 * //     SourceArn: "STRING_VALUE", // required
 * //     Transport: { // Transport
 * //       CidrAllowList: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       MaxBitrate: Number("int"),
 * //       MaxLatency: Number("int"),
 * //       MaxSyncBuffer: Number("int"),
 * //       MinLatency: Number("int"),
 * //       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //       RemoteId: "STRING_VALUE",
 * //       SenderControlPort: Number("int"),
 * //       SenderIpAddress: "STRING_VALUE",
 * //       SmoothingLatency: Number("int"),
 * //       SourceListenerAddress: "STRING_VALUE",
 * //       SourceListenerPort: Number("int"),
 * //       StreamId: "STRING_VALUE",
 * //     },
 * //     VpcInterfaceName: "STRING_VALUE",
 * //     WhitelistCidr: "STRING_VALUE",
 * //     GatewayBridgeSource: { // GatewayBridgeSource
 * //       BridgeArn: "STRING_VALUE", // required
 * //       VpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //         VpcInterfaceName: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFlowSourceCommandInput - {@link UpdateFlowSourceCommandInput}
 * @returns {@link UpdateFlowSourceCommandOutput}
 * @see {@link UpdateFlowSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 * @public
 */
export class UpdateFlowSourceCommand extends $Command
  .classBuilder<
    UpdateFlowSourceCommandInput,
    UpdateFlowSourceCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConnect", "UpdateFlowSource", {})
  .n("MediaConnectClient", "UpdateFlowSourceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateFlowSourceCommand)
  .de(de_UpdateFlowSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlowSourceRequest;
      output: UpdateFlowSourceResponse;
    };
    sdk: {
      input: UpdateFlowSourceCommandInput;
      output: UpdateFlowSourceCommandOutput;
    };
  };
}
