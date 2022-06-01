// smithy-typescript generated code
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
import { BatchUpdateAttendeeCapabilitiesExceptRequest } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand,
  serializeAws_restJson1BatchUpdateAttendeeCapabilitiesExceptCommand,
} from "../protocols/Aws_restJson1";

export interface BatchUpdateAttendeeCapabilitiesExceptCommandInput
  extends BatchUpdateAttendeeCapabilitiesExceptRequest {}
export interface BatchUpdateAttendeeCapabilitiesExceptCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates <code>AttendeeCapabilities</code> except the capabilities listed in an <code>ExcludedAttendeeIds</code> table.</p>
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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "BatchUpdateAttendeeCapabilitiesExceptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdateAttendeeCapabilitiesExceptRequest.filterSensitiveLog,
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
