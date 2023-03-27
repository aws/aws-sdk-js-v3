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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { UpdateProgramRequest, UpdateProgramResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateProgramCommand,
  serializeAws_restJson1UpdateProgramCommand,
} from "../protocols/Aws_restJson1";

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
 * ```
 *
 * @param UpdateProgramCommandInput - {@link UpdateProgramCommandInput}
 * @returns {@link UpdateProgramCommandOutput}
 * @see {@link UpdateProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
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
    return serializeAws_restJson1UpdateProgramCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProgramCommandOutput> {
    return deserializeAws_restJson1UpdateProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
