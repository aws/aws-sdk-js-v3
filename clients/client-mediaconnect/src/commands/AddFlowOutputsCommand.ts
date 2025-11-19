// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowOutputsRequest, AddFlowOutputsResponse } from "../models/models_0";
import { AddFlowOutputs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddFlowOutputsCommand}.
 */
export interface AddFlowOutputsCommandInput extends AddFlowOutputsRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowOutputsCommand}.
 */
export interface AddFlowOutputsCommandOutput extends AddFlowOutputsResponse, __MetadataBearer {}

/**
 * <p> Adds outputs to an existing flow. You can create up to 50 outputs per flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowOutputsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowOutputsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowOutputsRequest
 *   FlowArn: "STRING_VALUE", // required
 *   Outputs: [ // __listOfAddOutputRequest // required
 *     { // AddOutputRequest
 *       CidrAllowList: [ // __listOfString
 *         "STRING_VALUE",
 *       ],
 *       Description: "STRING_VALUE",
 *       Destination: "STRING_VALUE",
 *       Encryption: { // Encryption
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
 *       MaxLatency: Number("int"),
 *       MediaStreamOutputConfigurations: [ // __listOfMediaStreamOutputConfigurationRequest
 *         { // MediaStreamOutputConfigurationRequest
 *           DestinationConfigurations: [ // __listOfDestinationConfigurationRequest
 *             { // DestinationConfigurationRequest
 *               DestinationIp: "STRING_VALUE", // required
 *               DestinationPort: Number("int"), // required
 *               Interface: { // InterfaceRequest
 *                 Name: "STRING_VALUE", // required
 *               },
 *             },
 *           ],
 *           EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *           EncodingParameters: { // EncodingParametersRequest
 *             CompressionFactor: Number("double"), // required
 *             EncoderProfile: "main" || "high", // required
 *           },
 *           MediaStreamName: "STRING_VALUE", // required
 *         },
 *       ],
 *       MinLatency: Number("int"),
 *       Name: "STRING_VALUE",
 *       Port: Number("int"),
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq",
 *       RemoteId: "STRING_VALUE",
 *       SenderControlPort: Number("int"),
 *       SmoothingLatency: Number("int"),
 *       StreamId: "STRING_VALUE",
 *       VpcInterfaceAttachment: { // VpcInterfaceAttachment
 *         VpcInterfaceName: "STRING_VALUE",
 *       },
 *       OutputStatus: "ENABLED" || "DISABLED",
 *       NdiSpeedHqQuality: Number("int"),
 *       NdiProgramName: "STRING_VALUE",
 *       OutputTags: { // __mapOfString
 *         "<keys>": "STRING_VALUE",
 *       },
 *       RouterIntegrationState: "ENABLED" || "DISABLED",
 *       RouterIntegrationTransitEncryption: { // FlowTransitEncryption
 *         EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 *         EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 *           SecretsManager: { // SecretsManagerEncryptionKeyConfiguration
 *             SecretArn: "STRING_VALUE", // required
 *             RoleArn: "STRING_VALUE", // required
 *           },
 *           Automatic: {},
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new AddFlowOutputsCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowOutputsResponse
 * //   FlowArn: "STRING_VALUE",
 * //   Outputs: [ // __listOfOutput
 * //     { // Output
 * //       DataTransferSubscriberFeePercent: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       Destination: "STRING_VALUE",
 * //       Encryption: { // Encryption
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
 * //       EntitlementArn: "STRING_VALUE",
 * //       ListenerAddress: "STRING_VALUE",
 * //       MediaLiveInputArn: "STRING_VALUE",
 * //       MediaStreamOutputConfigurations: [ // __listOfMediaStreamOutputConfiguration
 * //         { // MediaStreamOutputConfiguration
 * //           DestinationConfigurations: [ // __listOfDestinationConfiguration
 * //             { // DestinationConfiguration
 * //               DestinationIp: "STRING_VALUE", // required
 * //               DestinationPort: Number("int"), // required
 * //               Interface: { // Interface
 * //                 Name: "STRING_VALUE", // required
 * //               },
 * //               OutboundIp: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 * //           EncodingParameters: { // EncodingParameters
 * //             CompressionFactor: Number("double"), // required
 * //             EncoderProfile: "main" || "high", // required
 * //           },
 * //           MediaStreamName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Name: "STRING_VALUE", // required
 * //       OutputArn: "STRING_VALUE", // required
 * //       Port: Number("int"),
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
 * //       VpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //         VpcInterfaceName: "STRING_VALUE",
 * //       },
 * //       BridgeArn: "STRING_VALUE",
 * //       BridgePorts: [ // __listOfInteger
 * //         Number("int"),
 * //       ],
 * //       OutputStatus: "ENABLED" || "DISABLED",
 * //       PeerIpAddress: "STRING_VALUE",
 * //       RouterIntegrationState: "ENABLED" || "DISABLED",
 * //       RouterIntegrationTransitEncryption: { // FlowTransitEncryption
 * //         EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //         EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 * //           SecretsManager: { // SecretsManagerEncryptionKeyConfiguration
 * //             SecretArn: "STRING_VALUE", // required
 * //             RoleArn: "STRING_VALUE", // required
 * //           },
 * //           Automatic: {},
 * //         },
 * //       },
 * //       ConnectedRouterInputArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowOutputsCommandInput - {@link AddFlowOutputsCommandInput}
 * @returns {@link AddFlowOutputsCommandOutput}
 * @see {@link AddFlowOutputsCommandInput} for command's `input` shape.
 * @see {@link AddFlowOutputsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link AddFlowOutputs420Exception} (client fault)
 *  <p>Exception raised by Elemental MediaConnect when adding the flow output. See the error message for the operation for more information on the cause of this exception. </p>
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
export class AddFlowOutputsCommand extends $Command
  .classBuilder<
    AddFlowOutputsCommandInput,
    AddFlowOutputsCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "AddFlowOutputs", {})
  .n("MediaConnectClient", "AddFlowOutputsCommand")
  .sc(AddFlowOutputs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddFlowOutputsRequest;
      output: AddFlowOutputsResponse;
    };
    sdk: {
      input: AddFlowOutputsCommandInput;
      output: AddFlowOutputsCommandOutput;
    };
  };
}
