// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateFlowRequest, CreateFlowResponse } from "../models/models_0";
import { de_CreateFlowCommand, se_CreateFlowCommand } from "../protocols/Aws_restJson1";

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
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos", // required
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
 *     Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos",
 *     SenderControlPort: Number("int"),
 *     SenderIpAddress: "STRING_VALUE",
 *     SourceListenerAddress: "STRING_VALUE",
 *     SourceListenerPort: Number("int"),
 *     StreamId: "STRING_VALUE",
 *     VpcInterfaceName: "STRING_VALUE",
 *     WhitelistCidr: "STRING_VALUE",
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
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos",
 *       SenderControlPort: Number("int"),
 *       SenderIpAddress: "STRING_VALUE",
 *       SourceListenerAddress: "STRING_VALUE",
 *       SourceListenerPort: Number("int"),
 *       StreamId: "STRING_VALUE",
 *       VpcInterfaceName: "STRING_VALUE",
 *       WhitelistCidr: "STRING_VALUE",
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
