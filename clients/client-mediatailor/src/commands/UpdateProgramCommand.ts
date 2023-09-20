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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateProgramRequest, UpdateProgramResponse } from "../models/models_0";
import { de_UpdateProgramCommand, se_UpdateProgramCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProgramCommand}.
 */
export interface UpdateProgramCommandInput extends UpdateProgramRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProgramCommand}.
 */
export interface UpdateProgramCommandOutput extends UpdateProgramResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a program within a channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, UpdateProgramCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, UpdateProgramCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // UpdateProgramRequest
 *   AdBreaks: [ // __listOfAdBreak
 *     { // AdBreak
 *       MessageType: "SPLICE_INSERT" || "TIME_SIGNAL",
 *       OffsetMillis: Number("long"),
 *       Slate: { // SlateSource
 *         SourceLocationName: "STRING_VALUE",
 *         VodSourceName: "STRING_VALUE",
 *       },
 *       SpliceInsertMessage: { // SpliceInsertMessage
 *         AvailNum: Number("int"),
 *         AvailsExpected: Number("int"),
 *         SpliceEventId: Number("int"),
 *         UniqueProgramId: Number("int"),
 *       },
 *       TimeSignalMessage: { // TimeSignalMessage
 *         SegmentationDescriptors: [ // SegmentationDescriptorList
 *           { // SegmentationDescriptor
 *             SegmentationEventId: Number("int"),
 *             SegmentationUpidType: Number("int"),
 *             SegmentationUpid: "STRING_VALUE",
 *             SegmentationTypeId: Number("int"),
 *             SegmentNum: Number("int"),
 *             SegmentsExpected: Number("int"),
 *             SubSegmentNum: Number("int"),
 *             SubSegmentsExpected: Number("int"),
 *           },
 *         ],
 *       },
 *       AdBreakMetadata: [ // AdBreakMetadataList
 *         { // KeyValuePair
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   ChannelName: "STRING_VALUE", // required
 *   ProgramName: "STRING_VALUE", // required
 *   ScheduleConfiguration: { // UpdateProgramScheduleConfiguration
 *     Transition: { // UpdateProgramTransition
 *       ScheduledStartTimeMillis: Number("long"),
 *       DurationMillis: Number("long"),
 *     },
 *     ClipRange: { // ClipRange
 *       EndOffsetMillis: Number("long"), // required
 *     },
 *   },
 * };
 * const command = new UpdateProgramCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProgramResponse
 * //   AdBreaks: [ // __listOfAdBreak
 * //     { // AdBreak
 * //       MessageType: "SPLICE_INSERT" || "TIME_SIGNAL",
 * //       OffsetMillis: Number("long"),
 * //       Slate: { // SlateSource
 * //         SourceLocationName: "STRING_VALUE",
 * //         VodSourceName: "STRING_VALUE",
 * //       },
 * //       SpliceInsertMessage: { // SpliceInsertMessage
 * //         AvailNum: Number("int"),
 * //         AvailsExpected: Number("int"),
 * //         SpliceEventId: Number("int"),
 * //         UniqueProgramId: Number("int"),
 * //       },
 * //       TimeSignalMessage: { // TimeSignalMessage
 * //         SegmentationDescriptors: [ // SegmentationDescriptorList
 * //           { // SegmentationDescriptor
 * //             SegmentationEventId: Number("int"),
 * //             SegmentationUpidType: Number("int"),
 * //             SegmentationUpid: "STRING_VALUE",
 * //             SegmentationTypeId: Number("int"),
 * //             SegmentNum: Number("int"),
 * //             SegmentsExpected: Number("int"),
 * //             SubSegmentNum: Number("int"),
 * //             SubSegmentsExpected: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       AdBreakMetadata: [ // AdBreakMetadataList
 * //         { // KeyValuePair
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Arn: "STRING_VALUE",
 * //   ChannelName: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ProgramName: "STRING_VALUE",
 * //   SourceLocationName: "STRING_VALUE",
 * //   VodSourceName: "STRING_VALUE",
 * //   LiveSourceName: "STRING_VALUE",
 * //   ClipRange: { // ClipRange
 * //     EndOffsetMillis: Number("long"), // required
 * //   },
 * //   DurationMillis: Number("long"),
 * //   ScheduledStartTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateProgramCommandInput - {@link UpdateProgramCommandInput}
 * @returns {@link UpdateProgramCommandOutput}
 * @see {@link UpdateProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class UpdateProgramCommand extends $Command<
  UpdateProgramCommandInput,
  UpdateProgramCommandOutput,
  MediaTailorClientResolvedConfig
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
  constructor(readonly input: UpdateProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateProgramCommandInput, UpdateProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateProgramCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "UpdateProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "UpdateProgram",
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
  private serialize(input: UpdateProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProgramCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProgramCommandOutput> {
    return de_UpdateProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
