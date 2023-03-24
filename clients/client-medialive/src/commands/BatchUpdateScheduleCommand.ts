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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { BatchUpdateScheduleRequest, BatchUpdateScheduleResponse } from "../models/models_1";
import {
  deserializeAws_restJson1BatchUpdateScheduleCommand,
  serializeAws_restJson1BatchUpdateScheduleCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link BatchUpdateScheduleCommand}.
 */
export interface BatchUpdateScheduleCommandInput extends BatchUpdateScheduleRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateScheduleCommand}.
 */
export interface BatchUpdateScheduleCommandOutput extends BatchUpdateScheduleResponse, __MetadataBearer {}

/**
 * @public
 * Update a channel schedule
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, BatchUpdateScheduleCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, BatchUpdateScheduleCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = {
 *   ChannelId: "STRING_VALUE", // required
 *   Creates: {
 *     ScheduleActions: [ // required
 *       {
 *         ActionName: "STRING_VALUE", // required
 *         ScheduleActionSettings: {
 *           HlsId3SegmentTaggingSettings: {
 *             Tag: "STRING_VALUE", // required
 *           },
 *           HlsTimedMetadataSettings: {
 *             Id3: "STRING_VALUE", // required
 *           },
 *           InputPrepareSettings: {
 *             InputAttachmentNameReference: "STRING_VALUE",
 *             InputClippingSettings: {
 *               InputTimecodeSource: "ZEROBASED" || "EMBEDDED", // required
 *               StartTimecode: {
 *                 Timecode: "STRING_VALUE",
 *               },
 *               StopTimecode: {
 *                 LastFrameClippingBehavior: "EXCLUDE_LAST_FRAME" || "INCLUDE_LAST_FRAME",
 *                 Timecode: "STRING_VALUE",
 *               },
 *             },
 *             UrlPath: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           InputSwitchSettings: {
 *             InputAttachmentNameReference: "STRING_VALUE", // required
 *             InputClippingSettings: {
 *               InputTimecodeSource: "ZEROBASED" || "EMBEDDED", // required
 *               StartTimecode: {
 *                 Timecode: "STRING_VALUE",
 *               },
 *               StopTimecode: {
 *                 LastFrameClippingBehavior: "EXCLUDE_LAST_FRAME" || "INCLUDE_LAST_FRAME",
 *                 Timecode: "STRING_VALUE",
 *               },
 *             },
 *             UrlPath: [
 *               "STRING_VALUE",
 *             ],
 *           },
 *           MotionGraphicsImageActivateSettings: {
 *             Duration: Number("long"),
 *             PasswordParam: "STRING_VALUE",
 *             Url: "STRING_VALUE",
 *             Username: "STRING_VALUE",
 *           },
 *           MotionGraphicsImageDeactivateSettings: {},
 *           PauseStateSettings: {
 *             Pipelines: [
 *               {
 *                 PipelineId: "PIPELINE_0" || "PIPELINE_1", // required
 *               },
 *             ],
 *           },
 *           Scte35InputSettings: {
 *             InputAttachmentNameReference: "STRING_VALUE",
 *             Mode: "FIXED" || "FOLLOW_ACTIVE", // required
 *           },
 *           Scte35ReturnToNetworkSettings: {
 *             SpliceEventId: Number("long"), // required
 *           },
 *           Scte35SpliceInsertSettings: {
 *             Duration: Number("long"),
 *             SpliceEventId: Number("long"), // required
 *           },
 *           Scte35TimeSignalSettings: {
 *             Scte35Descriptors: [ // required
 *               {
 *                 Scte35DescriptorSettings: {
 *                   SegmentationDescriptorScte35DescriptorSettings: {
 *                     DeliveryRestrictions: {
 *                       ArchiveAllowedFlag: "ARCHIVE_NOT_ALLOWED" || "ARCHIVE_ALLOWED", // required
 *                       DeviceRestrictions: "NONE" || "RESTRICT_GROUP0" || "RESTRICT_GROUP1" || "RESTRICT_GROUP2", // required
 *                       NoRegionalBlackoutFlag: "REGIONAL_BLACKOUT" || "NO_REGIONAL_BLACKOUT", // required
 *                       WebDeliveryAllowedFlag: "WEB_DELIVERY_NOT_ALLOWED" || "WEB_DELIVERY_ALLOWED", // required
 *                     },
 *                     SegmentNum: Number("int"),
 *                     SegmentationCancelIndicator: "SEGMENTATION_EVENT_NOT_CANCELED" || "SEGMENTATION_EVENT_CANCELED", // required
 *                     SegmentationDuration: Number("long"),
 *                     SegmentationEventId: Number("long"), // required
 *                     SegmentationTypeId: Number("int"),
 *                     SegmentationUpid: "STRING_VALUE",
 *                     SegmentationUpidType: Number("int"),
 *                     SegmentsExpected: Number("int"),
 *                     SubSegmentNum: Number("int"),
 *                     SubSegmentsExpected: Number("int"),
 *                   },
 *                 },
 *               },
 *             ],
 *           },
 *           StaticImageActivateSettings: {
 *             Duration: Number("int"),
 *             FadeIn: Number("int"),
 *             FadeOut: Number("int"),
 *             Height: Number("int"),
 *             Image: {
 *               PasswordParam: "STRING_VALUE",
 *               Uri: "STRING_VALUE", // required
 *               Username: "STRING_VALUE",
 *             },
 *             ImageX: Number("int"),
 *             ImageY: Number("int"),
 *             Layer: Number("int"),
 *             Opacity: Number("int"),
 *             Width: Number("int"),
 *           },
 *           StaticImageDeactivateSettings: {
 *             FadeOut: Number("int"),
 *             Layer: Number("int"),
 *           },
 *         },
 *         ScheduleActionStartSettings: {
 *           FixedModeScheduleActionStartSettings: {
 *             Time: "STRING_VALUE", // required
 *           },
 *           FollowModeScheduleActionStartSettings: {
 *             FollowPoint: "END" || "START", // required
 *             ReferenceActionName: "STRING_VALUE", // required
 *           },
 *           ImmediateModeScheduleActionStartSettings: {},
 *         },
 *       },
 *     ],
 *   },
 *   Deletes: {
 *     ActionNames: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new BatchUpdateScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param BatchUpdateScheduleCommandInput - {@link BatchUpdateScheduleCommandInput}
 * @returns {@link BatchUpdateScheduleCommandOutput}
 * @see {@link BatchUpdateScheduleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateScheduleCommandOutput} for command's `response` shape.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 *
 */
export class BatchUpdateScheduleCommand extends $Command<
  BatchUpdateScheduleCommandInput,
  BatchUpdateScheduleCommandOutput,
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
  constructor(readonly input: BatchUpdateScheduleCommandInput) {
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
  ): Handler<BatchUpdateScheduleCommandInput, BatchUpdateScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "BatchUpdateScheduleCommand";
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
  private serialize(input: BatchUpdateScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdateScheduleCommandOutput> {
    return deserializeAws_restJson1BatchUpdateScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
