// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListInputsRequest, ListInputsResponse } from "../models/models_2";
import { de_ListInputsCommand, se_ListInputsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInputsCommand}.
 */
export interface ListInputsCommandInput extends ListInputsRequest {}
/**
 * @public
 *
 * The output of {@link ListInputsCommand}.
 */
export interface ListInputsCommandOutput extends ListInputsResponse, __MetadataBearer {}

/**
 * Produces list of inputs that have been created
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListInputsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListInputsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListInputsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListInputsCommand(input);
 * const response = await client.send(command);
 * // { // ListInputsResponse
 * //   Inputs: [ // __listOfInput
 * //     { // Input
 * //       Arn: "STRING_VALUE",
 * //       AttachedChannels: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //       Destinations: [ // __listOfInputDestination
 * //         { // InputDestination
 * //           Ip: "STRING_VALUE",
 * //           Port: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           Vpc: { // InputDestinationVpc
 * //             AvailabilityZone: "STRING_VALUE",
 * //             NetworkInterfaceId: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Id: "STRING_VALUE",
 * //       InputClass: "STANDARD" || "SINGLE_PIPELINE",
 * //       InputDevices: [ // __listOfInputDeviceSettings
 * //         { // InputDeviceSettings
 * //           Id: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InputPartnerIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       InputSourceType: "STATIC" || "DYNAMIC",
 * //       MediaConnectFlows: [ // __listOfMediaConnectFlow
 * //         { // MediaConnectFlow
 * //           FlowArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       SecurityGroups: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Sources: [ // __listOfInputSource
 * //         { // InputSource
 * //           PasswordParam: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //           Username: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "CREATING" || "DETACHED" || "ATTACHED" || "DELETING" || "DELETED",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Type: "UDP_PUSH" || "RTP_PUSH" || "RTMP_PUSH" || "RTMP_PULL" || "URL_PULL" || "MP4_FILE" || "MEDIACONNECT" || "INPUT_DEVICE" || "AWS_CDI" || "TS_FILE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInputsCommandInput - {@link ListInputsCommandInput}
 * @returns {@link ListInputsCommandOutput}
 * @see {@link ListInputsCommandInput} for command's `input` shape.
 * @see {@link ListInputsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListInputsCommand extends $Command
  .classBuilder<
    ListInputsCommandInput,
    ListInputsCommandOutput,
    MediaLiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaLiveClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaLive", "ListInputs", {})
  .n("MediaLiveClient", "ListInputsCommand")
  .f(void 0, void 0)
  .ser(se_ListInputsCommand)
  .de(de_ListInputsCommand)
  .build() {}
