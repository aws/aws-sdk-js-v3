// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_2";
import { de_DescribeInputCommand, se_DescribeInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandInput extends DescribeInputRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {}

/**
 * Produces details about an input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeInputRequest
 *   InputId: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputResponse
 * //   Arn: "STRING_VALUE",
 * //   AttachedChannels: [ // __listOf__string
 * //     "STRING_VALUE",
 * //   ],
 * //   Destinations: [ // __listOfInputDestination
 * //     { // InputDestination
 * //       Ip: "STRING_VALUE",
 * //       Port: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //       Vpc: { // InputDestinationVpc
 * //         AvailabilityZone: "STRING_VALUE",
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //       },
 * //       Network: "STRING_VALUE",
 * //       NetworkRoutes: [ // __listOfInputDestinationRoute
 * //         { // InputDestinationRoute
 * //           Cidr: "STRING_VALUE",
 * //           Gateway: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Id: "STRING_VALUE",
 * //   InputClass: "STANDARD" || "SINGLE_PIPELINE",
 * //   InputDevices: [ // __listOfInputDeviceSettings
 * //     { // InputDeviceSettings
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   InputPartnerIds: [
 * //     "STRING_VALUE",
 * //   ],
 * //   InputSourceType: "STATIC" || "DYNAMIC",
 * //   MediaConnectFlows: [ // __listOfMediaConnectFlow
 * //     { // MediaConnectFlow
 * //       FlowArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Name: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   SecurityGroups: [
 * //     "STRING_VALUE",
 * //   ],
 * //   Sources: [ // __listOfInputSource
 * //     { // InputSource
 * //       PasswordParam: "STRING_VALUE",
 * //       Url: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //     },
 * //   ],
 * //   State: "CREATING" || "DETACHED" || "ATTACHED" || "DELETING" || "DELETED",
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE" || "SRT_CALLER" || "MULTICAST",
 * //   SrtSettings: { // SrtSettings
 * //     SrtCallerSources: [ // __listOfSrtCallerSource
 * //       { // SrtCallerSource
 * //         Decryption: { // SrtCallerDecryption
 * //           Algorithm: "AES128" || "AES192" || "AES256",
 * //           PassphraseSecretArn: "STRING_VALUE",
 * //         },
 * //         MinimumLatency: Number("int"),
 * //         SrtListenerAddress: "STRING_VALUE",
 * //         SrtListenerPort: "STRING_VALUE",
 * //         StreamId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   InputNetworkLocation: "AWS" || "ON_PREMISES",
 * //   MulticastSettings: { // MulticastSettings
 * //     Sources: [ // __listOfMulticastSource
 * //       { // MulticastSource
 * //         SourceIp: "STRING_VALUE",
 * //         Url: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInputCommandInput - {@link DescribeInputCommandInput}
 * @returns {@link DescribeInputCommandOutput}
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
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
export class DescribeInputCommand extends $Command
  .classBuilder<
    DescribeInputCommandInput,
    DescribeInputCommandOutput,
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
  .s("MediaLive", "DescribeInput", {})
  .n("MediaLiveClient", "DescribeInputCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInputCommand)
  .de(de_DescribeInputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInputRequest;
      output: DescribeInputResponse;
    };
    sdk: {
      input: DescribeInputCommandInput;
      output: DescribeInputCommandOutput;
    };
  };
}
