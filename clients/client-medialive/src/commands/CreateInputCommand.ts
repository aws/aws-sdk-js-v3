// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateInputRequest, CreateInputResponse } from "../models/models_2";
import { de_CreateInputCommand, se_CreateInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInputCommand}.
 */
export interface CreateInputCommandInput extends CreateInputRequest {}
/**
 * @public
 *
 * The output of {@link CreateInputCommand}.
 */
export interface CreateInputCommandOutput extends CreateInputResponse, __MetadataBearer {}

/**
 * Create an input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // CreateInputRequest
 *   Destinations: [ // __listOfInputDestinationRequest
 *     { // InputDestinationRequest
 *       StreamName: "STRING_VALUE",
 *       Network: "STRING_VALUE",
 *       NetworkRoutes: [ // __listOfInputRequestDestinationRoute
 *         { // InputRequestDestinationRoute
 *           Cidr: "STRING_VALUE",
 *           Gateway: "STRING_VALUE",
 *         },
 *       ],
 *       StaticIpAddress: "STRING_VALUE",
 *     },
 *   ],
 *   InputDevices: [ // __listOfInputDeviceSettings
 *     { // InputDeviceSettings
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   InputSecurityGroups: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   MediaConnectFlows: [ // __listOfMediaConnectFlowRequest
 *     { // MediaConnectFlowRequest
 *       FlowArn: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE",
 *   RequestId: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE",
 *   Sources: [ // __listOfInputSourceRequest
 *     { // InputSourceRequest
 *       PasswordParam: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *       Username: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE" || "SRT_CALLER" || "MULTICAST",
 *   Vpc: { // InputVpcRequest
 *     SecurityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     SubnetIds: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SrtSettings: { // SrtSettingsRequest
 *     SrtCallerSources: [ // __listOfSrtCallerSourceRequest
 *       { // SrtCallerSourceRequest
 *         Decryption: { // SrtCallerDecryptionRequest
 *           Algorithm: "AES128" || "AES192" || "AES256",
 *           PassphraseSecretArn: "STRING_VALUE",
 *         },
 *         MinimumLatency: Number("int"),
 *         SrtListenerAddress: "STRING_VALUE",
 *         SrtListenerPort: "STRING_VALUE",
 *         StreamId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   InputNetworkLocation: "AWS" || "ON_PREMISES",
 *   MulticastSettings: { // MulticastSettingsCreateRequest
 *     Sources: [ // __listOfMulticastSourceCreateRequest
 *       { // MulticastSourceCreateRequest
 *         SourceIp: "STRING_VALUE",
 *         Url: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateInputCommand(input);
 * const response = await client.send(command);
 * // { // CreateInputResponse
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
 * //     Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE" || "SRT_CALLER" || "MULTICAST",
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
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInputCommandInput - {@link CreateInputCommandInput}
 * @returns {@link CreateInputCommandOutput}
 * @see {@link CreateInputCommandInput} for command's `input` shape.
 * @see {@link CreateInputCommandOutput} for command's `response` shape.
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
export class CreateInputCommand extends $Command
  .classBuilder<
    CreateInputCommandInput,
    CreateInputCommandOutput,
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
  .s("MediaLive", "CreateInput", {})
  .n("MediaLiveClient", "CreateInputCommand")
  .f(void 0, void 0)
  .ser(se_CreateInputCommand)
  .de(de_CreateInputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInputRequest;
      output: CreateInputResponse;
    };
    sdk: {
      input: CreateInputCommandInput;
      output: CreateInputCommandOutput;
    };
  };
}
