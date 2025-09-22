// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreatePartnerInputRequest, CreatePartnerInputResponse } from "../models/models_2";
import { CreatePartnerInput } from "../schemas/schemas_2_Input";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePartnerInputCommand}.
 */
export interface CreatePartnerInputCommandInput extends CreatePartnerInputRequest {}
/**
 * @public
 *
 * The output of {@link CreatePartnerInputCommand}.
 */
export interface CreatePartnerInputCommandOutput extends CreatePartnerInputResponse, __MetadataBearer {}

/**
 * Create a partner input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreatePartnerInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreatePartnerInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * // import type { MediaLiveClientConfig } from "@aws-sdk/client-medialive";
 * const config = {}; // type is MediaLiveClientConfig
 * const client = new MediaLiveClient(config);
 * const input = { // CreatePartnerInputRequest
 *   InputId: "STRING_VALUE", // required
 *   RequestId: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePartnerInputCommand(input);
 * const response = await client.send(command);
 * // { // CreatePartnerInputResponse
 * //   Input: { // Input
 * //     Arn: "STRING_VALUE",
 * //     AttachedChannels: [ // __listOf__string
 * //       "STRING_VALUE",
 * //     ],
 * //     Destinations: [ // __listOfInputDestination
 * //       { // InputDestination
 * //         Ip: "STRING_VALUE",
 * //         Port: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Vpc: { // InputDestinationVpc
 * //           AvailabilityZone: "STRING_VALUE",
 * //           NetworkInterfaceId: "STRING_VALUE",
 * //         },
 * //         Network: "STRING_VALUE",
 * //         NetworkRoutes: [ // __listOfInputDestinationRoute
 * //           { // InputDestinationRoute
 * //             Cidr: "STRING_VALUE",
 * //             Gateway: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Id: "STRING_VALUE",
 * //     InputClass: "STANDARD" || "SINGLE_PIPELINE",
 * //     InputDevices: [ // __listOfInputDeviceSettings
 * //       { // InputDeviceSettings
 * //         Id: "STRING_VALUE",
 * //       },
 * //     ],
 * //     InputPartnerIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     InputSourceType: "STATIC" || "DYNAMIC",
 * //     MediaConnectFlows: [ // __listOfMediaConnectFlow
 * //       { // MediaConnectFlow
 * //         FlowArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE",
 * //     SecurityGroups: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Sources: [ // __listOfInputSource
 * //       { // InputSource
 * //         PasswordParam: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "CREATING" || "DETACHED" || "ATTACHED" || "DELETING" || "DELETED",
 * //     Tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE" || "SRT_CALLER" || "MULTICAST" || "SMPTE_2110_RECEIVER_GROUP" || "SDI",
 * //     SrtSettings: { // SrtSettings
 * //       SrtCallerSources: [ // __listOfSrtCallerSource
 * //         { // SrtCallerSource
 * //           Decryption: { // SrtCallerDecryption
 * //             Algorithm: "AES128" || "AES192" || "AES256",
 * //             PassphraseSecretArn: "STRING_VALUE",
 * //           },
 * //           MinimumLatency: Number("int"),
 * //           SrtListenerAddress: "STRING_VALUE",
 * //           SrtListenerPort: "STRING_VALUE",
 * //           StreamId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     InputNetworkLocation: "AWS" || "ON_PREMISES",
 * //     MulticastSettings: { // MulticastSettings
 * //       Sources: [ // __listOfMulticastSource
 * //         { // MulticastSource
 * //           SourceIp: "STRING_VALUE",
 * //           Url: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     Smpte2110ReceiverGroupSettings: { // Smpte2110ReceiverGroupSettings
 * //       Smpte2110ReceiverGroups: [ // __listOfSmpte2110ReceiverGroup
 * //         { // Smpte2110ReceiverGroup
 * //           SdpSettings: { // Smpte2110ReceiverGroupSdpSettings
 * //             AncillarySdps: [ // __listOfInputSdpLocation
 * //               { // InputSdpLocation
 * //                 MediaIndex: Number("int"),
 * //                 SdpUrl: "STRING_VALUE",
 * //               },
 * //             ],
 * //             AudioSdps: [
 * //               {
 * //                 MediaIndex: Number("int"),
 * //                 SdpUrl: "STRING_VALUE",
 * //               },
 * //             ],
 * //             VideoSdp: {
 * //               MediaIndex: Number("int"),
 * //               SdpUrl: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     SdiSources: [ // InputSdiSources
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreatePartnerInputCommandInput - {@link CreatePartnerInputCommandInput}
 * @returns {@link CreatePartnerInputCommandOutput}
 * @see {@link CreatePartnerInputCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerInputCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 *
 * @public
 */
export class CreatePartnerInputCommand extends $Command
  .classBuilder<
    CreatePartnerInputCommandInput,
    CreatePartnerInputCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaLive", "CreatePartnerInput", {})
  .n("MediaLiveClient", "CreatePartnerInputCommand")
  .sc(CreatePartnerInput)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePartnerInputRequest;
      output: CreatePartnerInputResponse;
    };
    sdk: {
      input: CreatePartnerInputCommandInput;
      output: CreatePartnerInputCommandOutput;
    };
  };
}
