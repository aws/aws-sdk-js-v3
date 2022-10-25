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

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import {
  BatchUpdateAttendeeCapabilitiesExceptRequest,
  BatchUpdateAttendeeCapabilitiesExceptRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand,
  serializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand,
} from "../protocols/Aws_restJson1";

export interface BatchUpdateAttendeeCapabilitiesExceptCommandInput
  extends BatchUpdateAttendeeCapabilitiesExceptRequest {}
export interface BatchUpdateAttendeeCapabilitiesExceptCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates <code>AttendeeCapabilities</code> except the capabilities listed in an <code>ExcludedAttendeeIds</code> table.</p>
 *
 *         <note>
 *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
 *             .</p>
 *          </note>
 *
 *         <p>When using capabilities, be aware of these corner cases:</p>
 *         <ul>
 *             <li>
 *                 <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
 *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
 *                     to receive and you set your <code>content</code> capability to not receive.</p>
 *             </li>
 *             <li>
 *                 <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
 *             </li>
 *             <li>
 *                 <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and if the attendee turned on their video or content streams, remote attendess can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, BatchUpdateAttendeeCapabilitiesExceptCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, BatchUpdateAttendeeCapabilitiesExceptCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const command = new BatchUpdateAttendeeCapabilitiesExceptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdateAttendeeCapabilitiesExceptCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateAttendeeCapabilitiesExceptCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 */
export class BatchUpdateAttendeeCapabilitiesExceptCommand extends $Command<
  BatchUpdateAttendeeCapabilitiesExceptCommandInput,
  BatchUpdateAttendeeCapabilitiesExceptCommandOutput,
  ChimeSDKMeetingsClientResolvedConfig
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

  constructor(readonly input: BatchUpdateAttendeeCapabilitiesExceptCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMeetingsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdateAttendeeCapabilitiesExceptCommandInput, BatchUpdateAttendeeCapabilitiesExceptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchUpdateAttendeeCapabilitiesExceptCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "BatchUpdateAttendeeCapabilitiesExceptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateAttendeeCapabilitiesExceptRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchUpdateAttendeeCapabilitiesExceptCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchUpdateAttendeeCapabilitiesExceptCommandOutput> {
    return deserializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
