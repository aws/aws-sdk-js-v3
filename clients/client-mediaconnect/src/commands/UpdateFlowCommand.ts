// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import type { UpdateFlowRequest, UpdateFlowResponse } from "../models/models_0";
import { UpdateFlow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowCommand}.
 */
export interface UpdateFlowCommandInput extends UpdateFlowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowCommand}.
 */
export interface UpdateFlowCommandOutput extends UpdateFlowResponse, __MetadataBearer {}

/**
 * <p> Updates an existing flow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowRequest
 *   FlowArn: "STRING_VALUE", // required
 *   SourceFailoverConfig: { // UpdateFailoverConfig
 *     FailoverMode: "MERGE" || "FAILOVER",
 *     RecoveryWindow: Number("int"),
 *     SourcePriority: { // SourcePriority
 *       PrimarySource: "STRING_VALUE",
 *     },
 *     State: "ENABLED" || "DISABLED",
 *   },
 *   Maintenance: { // UpdateMaintenance
 *     MaintenanceDay: "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday",
 *     MaintenanceScheduledDate: "STRING_VALUE",
 *     MaintenanceStartHour: "STRING_VALUE",
 *   },
 *   SourceMonitoringConfig: { // MonitoringConfig
 *     ThumbnailState: "ENABLED" || "DISABLED",
 *     AudioMonitoringSettings: [ // __listOfAudioMonitoringSetting
 *       { // AudioMonitoringSetting
 *         SilentAudio: { // SilentAudio
 *           State: "ENABLED" || "DISABLED",
 *           ThresholdSeconds: Number("int"),
 *         },
 *       },
 *     ],
 *     ContentQualityAnalysisState: "ENABLED" || "DISABLED",
 *     VideoMonitoringSettings: [ // __listOfVideoMonitoringSetting
 *       { // VideoMonitoringSetting
 *         BlackFrames: { // BlackFrames
 *           State: "ENABLED" || "DISABLED",
 *           ThresholdSeconds: Number("int"),
 *         },
 *         FrozenFrames: { // FrozenFrames
 *           State: "ENABLED" || "DISABLED",
 *           ThresholdSeconds: Number("int"),
 *         },
 *       },
 *     ],
 *   },
 *   NdiConfig: { // NdiConfig
 *     NdiState: "ENABLED" || "DISABLED",
 *     MachineName: "STRING_VALUE",
 *     NdiDiscoveryServers: [ // __listOfNdiDiscoveryServerConfig
 *       { // NdiDiscoveryServerConfig
 *         DiscoveryServerAddress: "STRING_VALUE", // required
 *         DiscoveryServerPort: Number("int"),
 *         VpcInterfaceAdapter: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   FlowSize: "MEDIUM" || "LARGE",
 * };
 * const command = new UpdateFlowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowResponse
 * //   Flow: { // Flow
 * //     AvailabilityZone: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     EgressIp: "STRING_VALUE",
 * //     Entitlements: [ // __listOfEntitlement // required
 * //       { // Entitlement
 * //         DataTransferSubscriberFeePercent: Number("int"),
 * //         Description: "STRING_VALUE",
 * //         Encryption: { // Encryption
 * //           Algorithm: "aes128" || "aes192" || "aes256",
 * //           ConstantInitializationVector: "STRING_VALUE",
 * //           DeviceId: "STRING_VALUE",
 * //           KeyType: "speke" || "static-key" || "srt-password",
 * //           Region: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           RoleArn: "STRING_VALUE", // required
 * //           SecretArn: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //         EntitlementArn: "STRING_VALUE", // required
 * //         EntitlementStatus: "ENABLED" || "DISABLED",
 * //         Name: "STRING_VALUE", // required
 * //         Subscribers: [ // __listOfString // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     FlowArn: "STRING_VALUE", // required
 * //     MediaStreams: [ // __listOfMediaStream
 * //       { // MediaStream
 * //         Attributes: { // MediaStreamAttributes
 * //           Fmtp: { // Fmtp
 * //             ChannelOrder: "STRING_VALUE",
 * //             Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 * //             ExactFramerate: "STRING_VALUE",
 * //             Par: "STRING_VALUE",
 * //             Range: "NARROW" || "FULL" || "FULLPROTECT",
 * //             ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 * //             Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 * //           },
 * //           Lang: "STRING_VALUE",
 * //         },
 * //         ClockRate: Number("int"),
 * //         Description: "STRING_VALUE",
 * //         Fmt: Number("int"), // required
 * //         MediaStreamId: Number("int"), // required
 * //         MediaStreamName: "STRING_VALUE", // required
 * //         MediaStreamType: "video" || "audio" || "ancillary-data", // required
 * //         VideoFormat: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE", // required
 * //     Outputs: [ // __listOfOutput // required
 * //       { // Output
 * //         DataTransferSubscriberFeePercent: Number("int"),
 * //         Description: "STRING_VALUE",
 * //         Destination: "STRING_VALUE",
 * //         Encryption: {
 * //           Algorithm: "aes128" || "aes192" || "aes256",
 * //           ConstantInitializationVector: "STRING_VALUE",
 * //           DeviceId: "STRING_VALUE",
 * //           KeyType: "speke" || "static-key" || "srt-password",
 * //           Region: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           RoleArn: "STRING_VALUE", // required
 * //           SecretArn: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //         EntitlementArn: "STRING_VALUE",
 * //         ListenerAddress: "STRING_VALUE",
 * //         MediaLiveInputArn: "STRING_VALUE",
 * //         MediaStreamOutputConfigurations: [ // __listOfMediaStreamOutputConfiguration
 * //           { // MediaStreamOutputConfiguration
 * //             DestinationConfigurations: [ // __listOfDestinationConfiguration
 * //               { // DestinationConfiguration
 * //                 DestinationIp: "STRING_VALUE", // required
 * //                 DestinationPort: Number("int"), // required
 * //                 Interface: { // Interface
 * //                   Name: "STRING_VALUE", // required
 * //                 },
 * //                 OutboundIp: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //             EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 * //             EncodingParameters: { // EncodingParameters
 * //               CompressionFactor: Number("double"), // required
 * //               EncoderProfile: "main" || "high", // required
 * //             },
 * //             MediaStreamName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Name: "STRING_VALUE", // required
 * //         OutputArn: "STRING_VALUE", // required
 * //         Port: Number("int"),
 * //         Transport: { // Transport
 * //           CidrAllowList: [
 * //             "STRING_VALUE",
 * //           ],
 * //           MaxBitrate: Number("int"),
 * //           MaxLatency: Number("int"),
 * //           MaxSyncBuffer: Number("int"),
 * //           MinLatency: Number("int"),
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //           RemoteId: "STRING_VALUE",
 * //           SenderControlPort: Number("int"),
 * //           SenderIpAddress: "STRING_VALUE",
 * //           SmoothingLatency: Number("int"),
 * //           SourceListenerAddress: "STRING_VALUE",
 * //           SourceListenerPort: Number("int"),
 * //           StreamId: "STRING_VALUE",
 * //           NdiSpeedHqQuality: Number("int"),
 * //           NdiProgramName: "STRING_VALUE",
 * //         },
 * //         VpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //         BridgeArn: "STRING_VALUE",
 * //         BridgePorts: [ // __listOfInteger
 * //           Number("int"),
 * //         ],
 * //         OutputStatus: "ENABLED" || "DISABLED",
 * //         PeerIpAddress: "STRING_VALUE",
 * //         RouterIntegrationState: "ENABLED" || "DISABLED",
 * //         RouterIntegrationTransitEncryption: { // FlowTransitEncryption
 * //           EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //           EncryptionKeyConfiguration: { // FlowTransitEncryptionKeyConfiguration Union: only one key present
 * //             SecretsManager: { // SecretsManagerEncryptionKeyConfiguration
 * //               SecretArn: "STRING_VALUE", // required
 * //               RoleArn: "STRING_VALUE", // required
 * //             },
 * //             Automatic: {},
 * //           },
 * //         },
 * //         ConnectedRouterInputArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Source: { // Source
 * //       DataTransferSubscriberFeePercent: Number("int"),
 * //       Decryption: {
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
 * //               Interface: {
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
 * //       Transport: {
 * //         CidrAllowList: [
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
 * //         VpcInterfaceAttachment: {
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //       },
 * //       PeerIpAddress: "STRING_VALUE",
 * //       RouterIntegrationState: "ENABLED" || "DISABLED",
 * //       RouterIntegrationTransitDecryption: {
 * //         EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //         EncryptionKeyConfiguration: {//  Union: only one key present
 * //           SecretsManager: {
 * //             SecretArn: "STRING_VALUE", // required
 * //             RoleArn: "STRING_VALUE", // required
 * //           },
 * //           Automatic: {},
 * //         },
 * //       },
 * //       ConnectedRouterOutputArn: "STRING_VALUE",
 * //     },
 * //     SourceFailoverConfig: { // FailoverConfig
 * //       FailoverMode: "MERGE" || "FAILOVER",
 * //       RecoveryWindow: Number("int"),
 * //       SourcePriority: { // SourcePriority
 * //         PrimarySource: "STRING_VALUE",
 * //       },
 * //       State: "ENABLED" || "DISABLED",
 * //     },
 * //     Sources: [ // __listOfSource
 * //       {
 * //         DataTransferSubscriberFeePercent: Number("int"),
 * //         Decryption: {
 * //           Algorithm: "aes128" || "aes192" || "aes256",
 * //           ConstantInitializationVector: "STRING_VALUE",
 * //           DeviceId: "STRING_VALUE",
 * //           KeyType: "speke" || "static-key" || "srt-password",
 * //           Region: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           RoleArn: "STRING_VALUE", // required
 * //           SecretArn: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //         Description: "STRING_VALUE",
 * //         EntitlementArn: "STRING_VALUE",
 * //         IngestIp: "STRING_VALUE",
 * //         IngestPort: Number("int"),
 * //         MediaStreamSourceConfigurations: [
 * //           {
 * //             EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 * //             InputConfigurations: [
 * //               {
 * //                 InputIp: "STRING_VALUE", // required
 * //                 InputPort: Number("int"), // required
 * //                 Interface: {
 * //                   Name: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //             ],
 * //             MediaStreamName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Name: "STRING_VALUE", // required
 * //         SenderControlPort: Number("int"),
 * //         SenderIpAddress: "STRING_VALUE",
 * //         SourceArn: "STRING_VALUE", // required
 * //         Transport: {
 * //           CidrAllowList: [
 * //             "STRING_VALUE",
 * //           ],
 * //           MaxBitrate: Number("int"),
 * //           MaxLatency: Number("int"),
 * //           MaxSyncBuffer: Number("int"),
 * //           MinLatency: Number("int"),
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp" || "ndi-speed-hq", // required
 * //           RemoteId: "STRING_VALUE",
 * //           SenderControlPort: Number("int"),
 * //           SenderIpAddress: "STRING_VALUE",
 * //           SmoothingLatency: Number("int"),
 * //           SourceListenerAddress: "STRING_VALUE",
 * //           SourceListenerPort: Number("int"),
 * //           StreamId: "STRING_VALUE",
 * //           NdiSpeedHqQuality: Number("int"),
 * //           NdiProgramName: "STRING_VALUE",
 * //         },
 * //         VpcInterfaceName: "STRING_VALUE",
 * //         WhitelistCidr: "STRING_VALUE",
 * //         GatewayBridgeSource: {
 * //           BridgeArn: "STRING_VALUE", // required
 * //           VpcInterfaceAttachment: {
 * //             VpcInterfaceName: "STRING_VALUE",
 * //           },
 * //         },
 * //         PeerIpAddress: "STRING_VALUE",
 * //         RouterIntegrationState: "ENABLED" || "DISABLED",
 * //         RouterIntegrationTransitDecryption: {
 * //           EncryptionKeyType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //           EncryptionKeyConfiguration: {//  Union: only one key present
 * //             SecretsManager: {
 * //               SecretArn: "STRING_VALUE", // required
 * //               RoleArn: "STRING_VALUE", // required
 * //             },
 * //             Automatic: {},
 * //           },
 * //         },
 * //         ConnectedRouterOutputArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STANDBY" || "ACTIVE" || "UPDATING" || "DELETING" || "STARTING" || "STOPPING" || "ERROR", // required
 * //     VpcInterfaces: [ // __listOfVpcInterface
 * //       { // VpcInterface
 * //         Name: "STRING_VALUE", // required
 * //         NetworkInterfaceIds: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         NetworkInterfaceType: "ena" || "efa", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //         SecurityGroupIds: "<__listOfString>", // required
 * //         SubnetId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Maintenance: { // Maintenance
 * //       MaintenanceDay: "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday",
 * //       MaintenanceDeadline: "STRING_VALUE",
 * //       MaintenanceScheduledDate: "STRING_VALUE",
 * //       MaintenanceStartHour: "STRING_VALUE",
 * //     },
 * //     SourceMonitoringConfig: { // MonitoringConfig
 * //       ThumbnailState: "ENABLED" || "DISABLED",
 * //       AudioMonitoringSettings: [ // __listOfAudioMonitoringSetting
 * //         { // AudioMonitoringSetting
 * //           SilentAudio: { // SilentAudio
 * //             State: "ENABLED" || "DISABLED",
 * //             ThresholdSeconds: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       ContentQualityAnalysisState: "ENABLED" || "DISABLED",
 * //       VideoMonitoringSettings: [ // __listOfVideoMonitoringSetting
 * //         { // VideoMonitoringSetting
 * //           BlackFrames: { // BlackFrames
 * //             State: "ENABLED" || "DISABLED",
 * //             ThresholdSeconds: Number("int"),
 * //           },
 * //           FrozenFrames: { // FrozenFrames
 * //             State: "ENABLED" || "DISABLED",
 * //             ThresholdSeconds: Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     FlowSize: "MEDIUM" || "LARGE",
 * //     NdiConfig: { // NdiConfig
 * //       NdiState: "ENABLED" || "DISABLED",
 * //       MachineName: "STRING_VALUE",
 * //       NdiDiscoveryServers: [ // __listOfNdiDiscoveryServerConfig
 * //         { // NdiDiscoveryServerConfig
 * //           DiscoveryServerAddress: "STRING_VALUE", // required
 * //           DiscoveryServerPort: Number("int"),
 * //           VpcInterfaceAdapter: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFlowCommandInput - {@link UpdateFlowCommandInput}
 * @returns {@link UpdateFlowCommandOutput}
 * @see {@link UpdateFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowCommandOutput} for command's `response` shape.
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
export class UpdateFlowCommand extends $Command
  .classBuilder<
    UpdateFlowCommandInput,
    UpdateFlowCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "UpdateFlow", {})
  .n("MediaConnectClient", "UpdateFlowCommand")
  .sc(UpdateFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlowRequest;
      output: UpdateFlowResponse;
    };
    sdk: {
      input: UpdateFlowCommandInput;
      output: UpdateFlowCommandOutput;
    };
  };
}
