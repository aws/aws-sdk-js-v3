// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowSourcesRequest, AddFlowSourcesResponse } from "../models/models_0";
import { de_AddFlowSourcesCommand, se_AddFlowSourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddFlowSourcesCommand}.
 */
export interface AddFlowSourcesCommandInput extends AddFlowSourcesRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowSourcesCommand}.
 */
export interface AddFlowSourcesCommandOutput extends AddFlowSourcesResponse, __MetadataBearer {}

/**
 * <p> Adds sources to a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowSourcesRequest
 *   FlowArn: "STRING_VALUE", // required
 *   Sources: [ // __listOfSetSourceRequest // required
 *     { // SetSourceRequest
 *       Decryption: { // Encryption
 *         Algorithm: "aes128" || "aes192" || "aes256",
 *         ConstantInitializationVector: "STRING_VALUE",
 *         DeviceId: "STRING_VALUE",
 *         KeyType: "speke" || "static-key" || "srt-password",
 *         Region: "STRING_VALUE",
 *         ResourceId: "STRING_VALUE",
 *         RoleArn: "STRING_VALUE", // required
 *         SecretArn: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       Description: "STRING_VALUE",
 *       EntitlementArn: "STRING_VALUE",
 *       IngestPort: Number("int"),
 *       MaxBitrate: Number("int"),
 *       MaxLatency: Number("int"),
 *       MaxSyncBuffer: Number("int"),
 *       MediaStreamSourceConfigurations: [ // __listOfMediaStreamSourceConfigurationRequest
 *         { // MediaStreamSourceConfigurationRequest
 *           EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *           InputConfigurations: [ // __listOfInputConfigurationRequest
 *             { // InputConfigurationRequest
 *               InputPort: Number("int"), // required
 *               Interface: { // InterfaceRequest
 *                 Name: "STRING_VALUE", // required
 *               },
 *             },
 *           ],
 *           MediaStreamName: "STRING_VALUE", // required
 *         },
 *       ],
 *       MinLatency: Number("int"),
 *       Name: "STRING_VALUE",
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq",
 *       SenderControlPort: Number("int"),
 *       SenderIpAddress: "STRING_VALUE",
 *       SourceListenerAddress: "STRING_VALUE",
 *       SourceListenerPort: Number("int"),
 *       StreamId: "STRING_VALUE",
 *       VpcInterfaceName: "STRING_VALUE",
 *       WhitelistCidr: "STRING_VALUE",
 *       GatewayBridgeSource: { // SetGatewayBridgeSourceRequest
 *         BridgeArn: "STRING_VALUE", // required
 *         VpcInterfaceAttachment: { // VpcInterfaceAttachment
 *           VpcInterfaceName: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new AddFlowSourcesCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowSourcesResponse
 * //   FlowArn: "STRING_VALUE",
 * //   Sources: [ // __listOfSource
 * //     { // Source
 * //       DataTransferSubscriberFeePercent: Number("int"),
 * //       Decryption: { // Encryption
 * //         Algorithm: "aes128" || "aes192" || "aes256",
 * //         ConstantInitializationVector: "STRING_VALUE",
 * //         DeviceId: "STRING_VALUE",
 * //         KeyType: "speke" || "static-key" || "srt-password",
 * //         Region: "STRING_VALUE",
 * //         ResourceId: "STRING_VALUE",
 * //         RoleArn: "STRING_VALUE", // required
 * //         SecretArn: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       EntitlementArn: "STRING_VALUE",
 * //       IngestIp: "STRING_VALUE",
 * //       IngestPort: Number("int"),
 * //       MediaStreamSourceConfigurations: [ // __listOfMediaStreamSourceConfiguration
 * //         { // MediaStreamSourceConfiguration
 * //           EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 * //           InputConfigurations: [ // __listOfInputConfiguration
 * //             { // InputConfiguration
 * //               InputIp: "STRING_VALUE", // required
 * //               InputPort: Number("int"), // required
 * //               Interface: { // Interface
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           ],
 * //           MediaStreamName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE", // required
 * //       SenderControlPort: Number("int"),
 * //       SenderIpAddress: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE", // required
 * //       Transport: { // Transport
 * //         CidrAllowList: [ // __listOfString
 * //           "STRING_VALUE",
 * //         ],
 * //         MaxBitrate: Number("int"),
 * //         MaxLatency: Number("int"),
 * //         MaxSyncBuffer: Number("int"),
 * //         MinLatency: Number("int"),
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //         RemoteId: "STRING_VALUE",
 * //         SenderControlPort: Number("int"),
 * //         SenderIpAddress: "STRING_VALUE",
 * //         SmoothingLatency: Number("int"),
 * //         SourceListenerAddress: "STRING_VALUE",
 * //         SourceListenerPort: Number("int"),
 * //         StreamId: "STRING_VALUE",
 * //         NdiSpeedHqQuality: Number("int"),
 * //         NdiProgramName: "STRING_VALUE",
 * //       },
 * //       VpcInterfaceName: "STRING_VALUE",
 * //       WhitelistCidr: "STRING_VALUE",
 * //       GatewayBridgeSource: { // GatewayBridgeSource
 * //         BridgeArn: "STRING_VALUE", // required
 * //         VpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //       },
 * //       PeerIpAddress: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowSourcesCommandInput - {@link AddFlowSourcesCommandInput}
 * @returns {@link AddFlowSourcesCommandOutput}
 * @see {@link AddFlowSourcesCommandInput} for command's `input` shape.
 * @see {@link AddFlowSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class AddFlowSourcesCommand extends $Command
  .classBuilder<
    AddFlowSourcesCommandInput,
    AddFlowSourcesCommandOutput,
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
  .s("MediaConnect", "AddFlowSources", {})
  .n("MediaConnectClient", "AddFlowSourcesCommand")
  .f(void 0, void 0)
  .ser(se_AddFlowSourcesCommand)
  .de(de_AddFlowSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddFlowSourcesRequest;
      output: AddFlowSourcesResponse;
    };
    sdk: {
      input: AddFlowSourcesCommandInput;
      output: AddFlowSourcesCommandOutput;
    };
  };
}
