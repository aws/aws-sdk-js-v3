// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeInputDeviceRequest, DescribeInputDeviceResponse } from "../models/models_1";
import { DescribeInputDevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputDeviceCommand}.
 */
export interface DescribeInputDeviceCommandInput extends DescribeInputDeviceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputDeviceCommand}.
 */
export interface DescribeInputDeviceCommandOutput extends DescribeInputDeviceResponse, __MetadataBearer {}

/**
 * Gets the details for the input device
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputDeviceCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputDeviceCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputDeviceRequest
 *   InputDeviceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputDeviceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputDeviceResponse
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
 * //     InputResolution: "STRING_VALUE",
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
 * @param DescribeInputDeviceCommandInput - {@link DescribeInputDeviceCommandInput}
 * @returns {@link DescribeInputDeviceCommandOutput}
 * @see {@link DescribeInputDeviceCommandInput} for command's `input` shape.
 * @see {@link DescribeInputDeviceCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class DescribeInputDeviceCommand extends $Command
  .classBuilder<
    DescribeInputDeviceCommandInput,
    DescribeInputDeviceCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "DescribeInputDevice", {})
  .n("MediaLiveClient", "DescribeInputDeviceCommand")
  .sc(DescribeInputDevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInputDeviceRequest;
      output: DescribeInputDeviceResponse;
    };
    sdk: {
      input: DescribeInputDeviceCommandInput;
      output: DescribeInputDeviceCommandOutput;
    };
  };
}
