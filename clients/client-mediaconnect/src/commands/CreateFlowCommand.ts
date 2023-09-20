// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateFlowRequest, CreateFlowResponse } from "../models/models_0";
import { de_CreateFlowCommand, se_CreateFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandInput extends CreateFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlowCommand}.
 */
export interface CreateFlowCommandOutput extends CreateFlowResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new flow. The request must include one source. The request optionally can include outputs (up to 50) and entitlements (up to 50).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // CreateFlowRequest
 *   AvailabilityZone: "STRING_VALUE",
 *   Entitlements: [ // __listOfGrantEntitlementRequest
 *     { // GrantEntitlementRequest
 *       DataTransferSubscriberFeePercent: Number("int"),
 *       Description: "STRING_VALUE",
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
 *       EntitlementStatus: "ENABLED" || "DISABLED",
 *       Name: "STRING_VALUE",
 *       Subscribers: [ // __listOf__string // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MediaStreams: [ // __listOfAddMediaStreamRequest
 *     { // AddMediaStreamRequest
 *       Attributes: { // MediaStreamAttributesRequest
 *         Fmtp: { // FmtpRequest
 *           ChannelOrder: "STRING_VALUE",
 *           Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 *           ExactFramerate: "STRING_VALUE",
 *           Par: "STRING_VALUE",
 *           Range: "NARROW" || "FULL" || "FULLPROTECT",
 *           ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 *           Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 *         },
 *         Lang: "STRING_VALUE",
 *       },
 *       ClockRate: Number("int"),
 *       Description: "STRING_VALUE",
 *       MediaStreamId: Number("int"), // required
 *       MediaStreamName: "STRING_VALUE", // required
 *       MediaStreamType: "video" || "audio" || "ancillary-data", // required
 *       VideoFormat: "STRING_VALUE",
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 *   Outputs: [ // __listOfAddOutputRequest
 *     { // AddOutputRequest
 *       CidrAllowList: [
 *         "STRING_VALUE",
 *       ],
 *       Description: "STRING_VALUE",
 *       Destination: "STRING_VALUE",
 *       Encryption: {
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
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 *       RemoteId: "STRING_VALUE",
 *       SenderControlPort: Number("int"),
 *       SmoothingLatency: Number("int"),
 *       StreamId: "STRING_VALUE",
 *       VpcInterfaceAttachment: { // VpcInterfaceAttachment
 *         VpcInterfaceName: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   Source: { // SetSourceRequest
 *     Decryption: {
 *       Algorithm: "aes128" || "aes192" || "aes256",
 *       ConstantInitializationVector: "STRING_VALUE",
 *       DeviceId: "STRING_VALUE",
 *       KeyType: "speke" || "static-key" || "srt-password",
 *       Region: "STRING_VALUE",
 *       ResourceId: "STRING_VALUE",
 *       RoleArn: "STRING_VALUE", // required
 *       SecretArn: "STRING_VALUE",
 *       Url: "STRING_VALUE",
 *     },
 *     Description: "STRING_VALUE",
 *     EntitlementArn: "STRING_VALUE",
 *     IngestPort: Number("int"),
 *     MaxBitrate: Number("int"),
 *     MaxLatency: Number("int"),
 *     MaxSyncBuffer: Number("int"),
 *     MediaStreamSourceConfigurations: [ // __listOfMediaStreamSourceConfigurationRequest
 *       { // MediaStreamSourceConfigurationRequest
 *         EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *         InputConfigurations: [ // __listOfInputConfigurationRequest
 *           { // InputConfigurationRequest
 *             InputPort: Number("int"), // required
 *             Interface: {
 *               Name: "STRING_VALUE", // required
 *             },
 *           },
 *         ],
 *         MediaStreamName: "STRING_VALUE", // required
 *       },
 *     ],
 *     MinLatency: Number("int"),
 *     Name: "STRING_VALUE",
 *     Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp",
 *     SenderControlPort: Number("int"),
 *     SenderIpAddress: "STRING_VALUE",
 *     SourceListenerAddress: "STRING_VALUE",
 *     SourceListenerPort: Number("int"),
 *     StreamId: "STRING_VALUE",
 *     VpcInterfaceName: "STRING_VALUE",
 *     WhitelistCidr: "STRING_VALUE",
 *     GatewayBridgeSource: { // SetGatewayBridgeSourceRequest
 *       BridgeArn: "STRING_VALUE", // required
 *       VpcInterfaceAttachment: {
 *         VpcInterfaceName: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   SourceFailoverConfig: { // FailoverConfig
 *     FailoverMode: "MERGE" || "FAILOVER",
 *     RecoveryWindow: Number("int"),
 *     SourcePriority: { // SourcePriority
 *       PrimarySource: "STRING_VALUE",
 *     },
 *     State: "ENABLED" || "DISABLED",
 *   },
 *   Sources: [ // __listOfSetSourceRequest
 *     {
 *       Decryption: {
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
 *       MediaStreamSourceConfigurations: [
 *         {
 *           EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *           InputConfigurations: [
 *             {
 *               InputPort: Number("int"), // required
 *               Interface: {
 *                 Name: "STRING_VALUE", // required
 *               },
 *             },
 *           ],
 *           MediaStreamName: "STRING_VALUE", // required
 *         },
 *       ],
 *       MinLatency: Number("int"),
 *       Name: "STRING_VALUE",
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp",
 *       SenderControlPort: Number("int"),
 *       SenderIpAddress: "STRING_VALUE",
 *       SourceListenerAddress: "STRING_VALUE",
 *       SourceListenerPort: Number("int"),
 *       StreamId: "STRING_VALUE",
 *       VpcInterfaceName: "STRING_VALUE",
 *       WhitelistCidr: "STRING_VALUE",
 *       GatewayBridgeSource: {
 *         BridgeArn: "STRING_VALUE", // required
 *         VpcInterfaceAttachment: {
 *           VpcInterfaceName: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   VpcInterfaces: [ // __listOfVpcInterfaceRequest
 *     { // VpcInterfaceRequest
 *       Name: "STRING_VALUE", // required
 *       NetworkInterfaceType: "ena" || "efa",
 *       RoleArn: "STRING_VALUE", // required
 *       SecurityGroupIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *       SubnetId: "STRING_VALUE", // required
 *     },
 *   ],
 *   Maintenance: { // AddMaintenance
 *     MaintenanceDay: "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday", // required
 *     MaintenanceStartHour: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlowResponse
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
 * //         Subscribers: [ // __listOf__string // required
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
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //           RemoteId: "STRING_VALUE",
 * //           SenderControlPort: Number("int"),
 * //           SenderIpAddress: "STRING_VALUE",
 * //           SmoothingLatency: Number("int"),
 * //           SourceListenerAddress: "STRING_VALUE",
 * //           SourceListenerPort: Number("int"),
 * //           StreamId: "STRING_VALUE",
 * //         },
 * //         VpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //         BridgeArn: "STRING_VALUE",
 * //         BridgePorts: [ // __listOf__integer
 * //           Number("int"),
 * //         ],
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
 * //         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //         RemoteId: "STRING_VALUE",
 * //         SenderControlPort: Number("int"),
 * //         SenderIpAddress: "STRING_VALUE",
 * //         SmoothingLatency: Number("int"),
 * //         SourceListenerAddress: "STRING_VALUE",
 * //         SourceListenerPort: Number("int"),
 * //         StreamId: "STRING_VALUE",
 * //       },
 * //       VpcInterfaceName: "STRING_VALUE",
 * //       WhitelistCidr: "STRING_VALUE",
 * //       GatewayBridgeSource: { // GatewayBridgeSource
 * //         BridgeArn: "STRING_VALUE", // required
 * //         VpcInterfaceAttachment: {
 * //           VpcInterfaceName: "STRING_VALUE",
 * //         },
 * //       },
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
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //           RemoteId: "STRING_VALUE",
 * //           SenderControlPort: Number("int"),
 * //           SenderIpAddress: "STRING_VALUE",
 * //           SmoothingLatency: Number("int"),
 * //           SourceListenerAddress: "STRING_VALUE",
 * //           SourceListenerPort: Number("int"),
 * //           StreamId: "STRING_VALUE",
 * //         },
 * //         VpcInterfaceName: "STRING_VALUE",
 * //         WhitelistCidr: "STRING_VALUE",
 * //         GatewayBridgeSource: {
 * //           BridgeArn: "STRING_VALUE", // required
 * //           VpcInterfaceAttachment: {
 * //             VpcInterfaceName: "STRING_VALUE",
 * //           },
 * //         },
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
 * //         SecurityGroupIds: "<__listOf__string>", // required
 * //         SubnetId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     Maintenance: { // Maintenance
 * //       MaintenanceDay: "Monday" || "Tuesday" || "Wednesday" || "Thursday" || "Friday" || "Saturday" || "Sunday",
 * //       MaintenanceDeadline: "STRING_VALUE",
 * //       MaintenanceScheduledDate: "STRING_VALUE",
 * //       MaintenanceStartHour: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateFlowCommandInput - {@link CreateFlowCommandInput}
 * @returns {@link CreateFlowCommandOutput}
 * @see {@link CreateFlowCommandInput} for command's `input` shape.
 * @see {@link CreateFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link CreateFlow420Exception} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class CreateFlowCommand extends $Command<
  CreateFlowCommandInput,
  CreateFlowCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFlowCommandInput, CreateFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "CreateFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "CreateFlow",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFlowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlowCommandOutput> {
    return de_CreateFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
