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
} from "@smithy/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { ListChannelsRequest, ListChannelsResponse } from "../models/models_1";
import { de_ListChannelsCommand, se_ListChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandInput extends ListChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsCommand}.
 */
export interface ListChannelsCommandOutput extends ListChannelsResponse, __MetadataBearer {}

/**
 * @public
 * Produces list of channels that have been created
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListChannelsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListChannelsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListChannelsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsResponse
 * //   Channels: [ // __listOfChannelSummary
 * //     { // ChannelSummary
 * //       Arn: "STRING_VALUE",
 * //       CdiInputSpecification: { // CdiInputSpecification
 * //         Resolution: "SD" || "HD" || "FHD" || "UHD",
 * //       },
 * //       ChannelClass: "STANDARD" || "SINGLE_PIPELINE",
 * //       Destinations: [ // __listOfOutputDestination
 * //         { // OutputDestination
 * //           Id: "STRING_VALUE",
 * //           MediaPackageSettings: [ // __listOfMediaPackageOutputDestinationSettings
 * //             { // MediaPackageOutputDestinationSettings
 * //               ChannelId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           MultiplexSettings: { // MultiplexProgramChannelDestinationSettings
 * //             MultiplexId: "STRING_VALUE",
 * //             ProgramName: "STRING_VALUE",
 * //           },
 * //           Settings: [ // __listOfOutputDestinationSettings
 * //             { // OutputDestinationSettings
 * //               PasswordParam: "STRING_VALUE",
 * //               StreamName: "STRING_VALUE",
 * //               Url: "STRING_VALUE",
 * //               Username: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       EgressEndpoints: [ // __listOfChannelEgressEndpoint
 * //         { // ChannelEgressEndpoint
 * //           SourceIp: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Id: "STRING_VALUE",
 * //       InputAttachments: [ // __listOfInputAttachment
 * //         { // InputAttachment
 * //           AutomaticInputFailoverSettings: { // AutomaticInputFailoverSettings
 * //             ErrorClearTimeMsec: Number("int"),
 * //             FailoverConditions: [ // __listOfFailoverCondition
 * //               { // FailoverCondition
 * //                 FailoverConditionSettings: { // FailoverConditionSettings
 * //                   AudioSilenceSettings: { // AudioSilenceFailoverSettings
 * //                     AudioSelectorName: "STRING_VALUE", // required
 * //                     AudioSilenceThresholdMsec: Number("int"),
 * //                   },
 * //                   InputLossSettings: { // InputLossFailoverSettings
 * //                     InputLossThresholdMsec: Number("int"),
 * //                   },
 * //                   VideoBlackSettings: { // VideoBlackFailoverSettings
 * //                     BlackDetectThreshold: Number("double"),
 * //                     VideoBlackThresholdMsec: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             InputPreference: "EQUAL_INPUT_PREFERENCE" || "PRIMARY_INPUT_PREFERRED",
 * //             SecondaryInputId: "STRING_VALUE", // required
 * //           },
 * //           InputAttachmentName: "STRING_VALUE",
 * //           InputId: "STRING_VALUE",
 * //           InputSettings: { // InputSettings
 * //             AudioSelectors: [ // __listOfAudioSelector
 * //               { // AudioSelector
 * //                 Name: "STRING_VALUE", // required
 * //                 SelectorSettings: { // AudioSelectorSettings
 * //                   AudioHlsRenditionSelection: { // AudioHlsRenditionSelection
 * //                     GroupId: "STRING_VALUE", // required
 * //                     Name: "STRING_VALUE", // required
 * //                   },
 * //                   AudioLanguageSelection: { // AudioLanguageSelection
 * //                     LanguageCode: "STRING_VALUE", // required
 * //                     LanguageSelectionPolicy: "LOOSE" || "STRICT",
 * //                   },
 * //                   AudioPidSelection: { // AudioPidSelection
 * //                     Pid: Number("int"), // required
 * //                   },
 * //                   AudioTrackSelection: { // AudioTrackSelection
 * //                     Tracks: [ // __listOfAudioTrack // required
 * //                       { // AudioTrack
 * //                         Track: Number("int"), // required
 * //                       },
 * //                     ],
 * //                     DolbyEDecode: { // AudioDolbyEDecode
 * //                       ProgramSelection: "ALL_CHANNELS" || "PROGRAM_1" || "PROGRAM_2" || "PROGRAM_3" || "PROGRAM_4" || "PROGRAM_5" || "PROGRAM_6" || "PROGRAM_7" || "PROGRAM_8", // required
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             CaptionSelectors: [ // __listOfCaptionSelector
 * //               { // CaptionSelector
 * //                 LanguageCode: "STRING_VALUE",
 * //                 Name: "STRING_VALUE", // required
 * //                 SelectorSettings: { // CaptionSelectorSettings
 * //                   AncillarySourceSettings: { // AncillarySourceSettings
 * //                     SourceAncillaryChannelNumber: Number("int"),
 * //                   },
 * //                   AribSourceSettings: {},
 * //                   DvbSubSourceSettings: { // DvbSubSourceSettings
 * //                     OcrLanguage: "DEU" || "ENG" || "FRA" || "NLD" || "POR" || "SPA",
 * //                     Pid: Number("int"),
 * //                   },
 * //                   EmbeddedSourceSettings: { // EmbeddedSourceSettings
 * //                     Convert608To708: "DISABLED" || "UPCONVERT",
 * //                     Scte20Detection: "AUTO" || "OFF",
 * //                     Source608ChannelNumber: Number("int"),
 * //                     Source608TrackNumber: Number("int"),
 * //                   },
 * //                   Scte20SourceSettings: { // Scte20SourceSettings
 * //                     Convert608To708: "DISABLED" || "UPCONVERT",
 * //                     Source608ChannelNumber: Number("int"),
 * //                   },
 * //                   Scte27SourceSettings: { // Scte27SourceSettings
 * //                     OcrLanguage: "DEU" || "ENG" || "FRA" || "NLD" || "POR" || "SPA",
 * //                     Pid: Number("int"),
 * //                   },
 * //                   TeletextSourceSettings: { // TeletextSourceSettings
 * //                     OutputRectangle: { // CaptionRectangle
 * //                       Height: Number("double"), // required
 * //                       LeftOffset: Number("double"), // required
 * //                       TopOffset: Number("double"), // required
 * //                       Width: Number("double"), // required
 * //                     },
 * //                     PageNumber: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             DeblockFilter: "DISABLED" || "ENABLED",
 * //             DenoiseFilter: "DISABLED" || "ENABLED",
 * //             FilterStrength: Number("int"),
 * //             InputFilter: "AUTO" || "DISABLED" || "FORCED",
 * //             NetworkInputSettings: { // NetworkInputSettings
 * //               HlsInputSettings: { // HlsInputSettings
 * //                 Bandwidth: Number("int"),
 * //                 BufferSegments: Number("int"),
 * //                 Retries: Number("int"),
 * //                 RetryInterval: Number("int"),
 * //                 Scte35Source: "MANIFEST" || "SEGMENTS",
 * //               },
 * //               ServerValidation: "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME" || "CHECK_CRYPTOGRAPHY_ONLY",
 * //             },
 * //             Scte35Pid: Number("int"),
 * //             Smpte2038DataPreference: "IGNORE" || "PREFER",
 * //             SourceEndBehavior: "CONTINUE" || "LOOP",
 * //             VideoSelector: { // VideoSelector
 * //               ColorSpace: "FOLLOW" || "HDR10" || "HLG_2020" || "REC_601" || "REC_709",
 * //               ColorSpaceSettings: { // VideoSelectorColorSpaceSettings
 * //                 Hdr10Settings: { // Hdr10Settings
 * //                   MaxCll: Number("int"),
 * //                   MaxFall: Number("int"),
 * //                 },
 * //               },
 * //               ColorSpaceUsage: "FALLBACK" || "FORCE",
 * //               SelectorSettings: { // VideoSelectorSettings
 * //                 VideoSelectorPid: { // VideoSelectorPid
 * //                   Pid: Number("int"),
 * //                 },
 * //                 VideoSelectorProgramId: { // VideoSelectorProgramId
 * //                   ProgramId: Number("int"),
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       InputSpecification: { // InputSpecification
 * //         Codec: "MPEG2" || "AVC" || "HEVC",
 * //         MaximumBitrate: "MAX_10_MBPS" || "MAX_20_MBPS" || "MAX_50_MBPS",
 * //         Resolution: "SD" || "HD" || "UHD",
 * //       },
 * //       LogLevel: "ERROR" || "WARNING" || "INFO" || "DEBUG" || "DISABLED",
 * //       Maintenance: { // MaintenanceStatus
 * //         MaintenanceDay: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //         MaintenanceDeadline: "STRING_VALUE",
 * //         MaintenanceScheduledDate: "STRING_VALUE",
 * //         MaintenanceStartTime: "STRING_VALUE",
 * //       },
 * //       Name: "STRING_VALUE",
 * //       PipelinesRunningCount: Number("int"),
 * //       RoleArn: "STRING_VALUE",
 * //       State: "CREATING" || "CREATE_FAILED" || "IDLE" || "STARTING" || "RUNNING" || "RECOVERING" || "STOPPING" || "DELETING" || "DELETED" || "UPDATING" || "UPDATE_FAILED",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Vpc: { // VpcOutputSettingsDescription
 * //         AvailabilityZones: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //         NetworkInterfaceIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SubnetIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsCommandInput - {@link ListChannelsCommandInput}
 * @returns {@link ListChannelsCommandOutput}
 * @see {@link ListChannelsCommandInput} for command's `input` shape.
 * @see {@link ListChannelsCommandOutput} for command's `response` shape.
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
 */
export class ListChannelsCommand extends $Command<
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: ListChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChannelsCommandInput, ListChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListChannelsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListChannelsCommand";
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
  private serialize(input: ListChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChannelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChannelsCommandOutput> {
    return de_ListChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
