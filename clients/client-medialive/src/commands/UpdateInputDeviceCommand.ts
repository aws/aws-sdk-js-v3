// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateInputDeviceRequest, UpdateInputDeviceResponse } from "../models/models_2";
import { de_UpdateInputDeviceCommand, se_UpdateInputDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateInputDeviceCommand}.
 */
export interface UpdateInputDeviceCommandInput extends UpdateInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInputDeviceCommand}.
 */
export interface UpdateInputDeviceCommandOutput extends UpdateInputDeviceResponse, __MetadataBearer {}

/**
 * Updates the parameters for the input device.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateInputDeviceRequest
 *   HdDeviceSettings: { // InputDeviceConfigurableSettings
 *     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 *     MaxBitrate: Number("int"),
 *     LatencyMs: Number("int"),
 *     Codec: "HEVC" || "AVC",
 *     MediaconnectSettings: { // InputDeviceMediaConnectConfigurableSettings
 *       FlowArn: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       SecretArn: "STRING_VALUE",
 *       SourceName: "STRING_VALUE",
 *     },
 *     AudioChannelPairs: [ // __listOfInputDeviceConfigurableAudioChannelPairConfig
 *       { // InputDeviceConfigurableAudioChannelPairConfig
 *         Id: Number("int"),
 *         Profile: "DISABLED" || "VBR-AAC_HHE-16000" || "VBR-AAC_HE-64000" || "VBR-AAC_LC-128000" || "CBR-AAC_HQ-192000" || "CBR-AAC_HQ-256000" || "CBR-AAC_HQ-384000" || "CBR-AAC_HQ-512000",
 *       },
 *     ],
 *   },
 *   InputDeviceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   UhdDeviceSettings: {
 *     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 *     MaxBitrate: Number("int"),
 *     LatencyMs: Number("int"),
 *     Codec: "HEVC" || "AVC",
 *     MediaconnectSettings: {
 *       FlowArn: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE",
 *       SecretArn: "STRING_VALUE",
 *       SourceName: "STRING_VALUE",
 *     },
 *     AudioChannelPairs: [
 *       {
 *         Id: Number("int"),
 *         Profile: "DISABLED" || "VBR-AAC_HHE-16000" || "VBR-AAC_HE-64000" || "VBR-AAC_LC-128000" || "CBR-AAC_HQ-192000" || "CBR-AAC_HQ-256000" || "CBR-AAC_HQ-384000" || "CBR-AAC_HQ-512000",
 *       },
 *     ],
 *   },
 *   AvailabilityZone: "STRING_VALUE",
 * };
 * const command = new UpdateInputDeviceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInputDeviceResponse
 * //   Arn: "STRING_VALUE",
 * //   ConnectionState: "DISCONNECTED" || "CONNECTED",
 * //   DeviceSettingsSyncState: "SYNCED" || "SYNCING",
 * //   DeviceUpdateStatus: "UP_TO_DATE" || "NOT_UP_TO_DATE" || "UPDATING",
 * //   HdDeviceSettings: { // InputDeviceHdSettings
 * //     ActiveInput: "HDMI" || "SDI",
 * //     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 * //     DeviceState: "IDLE" || "STREAMING",
 * //     Framerate: Number("double"),
 * //     Height: Number("int"),
 * //     MaxBitrate: Number("int"),
 * //     ScanType: "INTERLACED" || "PROGRESSIVE",
 * //     Width: Number("int"),
 * //     LatencyMs: Number("int"),
 * //   },
 * //   Id: "STRING_VALUE",
 * //   MacAddress: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   NetworkSettings: { // InputDeviceNetworkSettings
 * //     DnsAddresses: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Gateway: "STRING_VALUE",
 * //     IpAddress: "STRING_VALUE",
 * //     IpScheme: "STATIC" || "DHCP",
 * //     SubnetMask: "STRING_VALUE",
 * //   },
 * //   SerialNumber: "STRING_VALUE",
 * //   Type: "HD" || "UHD",
 * //   UhdDeviceSettings: { // InputDeviceUhdSettings
 * //     ActiveInput: "HDMI" || "SDI",
 * //     ConfiguredInput: "AUTO" || "HDMI" || "SDI",
 * //     DeviceState: "IDLE" || "STREAMING",
 * //     Framerate: Number("double"),
 * //     Height: Number("int"),
 * //     MaxBitrate: Number("int"),
 * //     ScanType: "INTERLACED" || "PROGRESSIVE",
 * //     Width: Number("int"),
 * //     LatencyMs: Number("int"),
 * //     Codec: "HEVC" || "AVC",
 * //     MediaconnectSettings: { // InputDeviceMediaConnectSettings
 * //       FlowArn: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //       SourceName: "STRING_VALUE",
 * //     },
 * //     AudioChannelPairs: [ // __listOfInputDeviceUhdAudioChannelPairConfig
 * //       { // InputDeviceUhdAudioChannelPairConfig
 * //         Id: Number("int"),
 * //         Profile: "DISABLED" || "VBR-AAC_HHE-16000" || "VBR-AAC_HE-64000" || "VBR-AAC_LC-128000" || "CBR-AAC_HQ-192000" || "CBR-AAC_HQ-256000" || "CBR-AAC_HQ-384000" || "CBR-AAC_HQ-512000",
 * //       },
 * //     ],
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   AvailabilityZone: "STRING_VALUE",
 * //   MedialiveInputArns: [
 * //     "STRING_VALUE",
 * //   ],
 * //   OutputType: "NONE" || "MEDIALIVE_INPUT" || "MEDIACONNECT_FLOW",
 * // };
 *
 * ```
 *
 * @param UpdateInputDeviceCommandInput - {@link UpdateInputDeviceCommandInput}
 * @returns {@link UpdateInputDeviceCommandOutput}
 * @see {@link UpdateInputDeviceCommandInput} for command's `input` shape.
 * @see {@link UpdateInputDeviceCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 * @public
 */
export class UpdateInputDeviceCommand extends $Command
  .classBuilder<
    UpdateInputDeviceCommandInput,
    UpdateInputDeviceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "UpdateInputDevice", {})
  .n("MediaLiveClient", "UpdateInputDeviceCommand")
  .f(void 0, void 0)
  .ser(se_UpdateInputDeviceCommand)
  .de(de_UpdateInputDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInputDeviceRequest;
      output: UpdateInputDeviceResponse;
    };
    sdk: {
      input: UpdateInputDeviceCommandInput;
      output: UpdateInputDeviceCommandOutput;
    };
  };
}
