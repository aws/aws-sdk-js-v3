// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { UpdateFlowSourceRequest, UpdateFlowSourceResponse } from "../models/models_0";
import { UpdateFlowSource$ } from "../schemas/schemas_0";

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
 * <p> Updates the source of a flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
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
 *   Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq",
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
 *   RouterIntegrationState: "ENABLED" || "DISABLED",
 *   RouterIntegrationTransitDecryption: { // FlowTransitEncryption
 *     EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 *     EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 *       SecretsManager: { // SecretsManagerEncryptionKeyConfiguration
 *         SecretArn: "STRING_VALUE", // required
 *         RoleArn: "STRING_VALUE", // required
 *       },
 *       Automatic: {},
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
 * //       CidrAllowList: [ // __listOfString
 * //         "STRING_VALUE",
 * //       ],
 * //       MaxBitrate: Number("int"),
 * //       MaxLatency: Number("int"),
 * //       MaxSyncBuffer: Number("int"),
 * //       MinLatency: Number("int"),
 * //       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //       RemoteId: "STRING_VALUE",
 * //       SenderControlPort: Number("int"),
 * //       SenderIpAddress: "STRING_VALUE",
 * //       SmoothingLatency: Number("int"),
 * //       SourceListenerAddress: "STRING_VALUE",
 * //       SourceListenerPort: Number("int"),
 * //       StreamId: "STRING_VALUE",
 * //       NdiSpeedHqQuality: Number("int"),
 * //       NdiProgramName: "STRING_VALUE",
 * //     },
 * //     VpcInterfaceName: "STRING_VALUE",
 * //     WhitelistCidr: "STRING_VALUE",
 * //     GatewayBridgeSource: { // GatewayBridgeSource
 * //       BridgeArn: "STRING_VALUE", // required
 * //       VpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //         VpcInterfaceName: "STRING_VALUE",
 * //       },
 * //     },
 * //     PeerIpAddress: "STRING_VALUE",
 * //     RouterIntegrationState: "ENABLED" || "DISABLED",
 * //     RouterIntegrationTransitDecryption: { // FlowTransitEncryption
 * //       EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //       EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 * //         SecretsManager: { // SecretsManagerEncryptionKeyConfiguration
 * //           SecretArn: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //         },
 * //         Automatic: {},
 * //       },
 * //     },
 * //     ConnectedRouterOutputArn: "STRING_VALUE",
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "UpdateFlowSource", {})
  .n("MediaConnectClient", "UpdateFlowSourceCommand")
  .sc(UpdateFlowSource$)
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
