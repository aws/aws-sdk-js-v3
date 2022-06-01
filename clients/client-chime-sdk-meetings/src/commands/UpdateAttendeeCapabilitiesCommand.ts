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
import { UpdateAttendeeCapabilitiesRequest, UpdateAttendeeCapabilitiesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAttendeeCapabilitiesCommand,
  serializeAws_restJson1UpdateAttendeeCapabilitiesCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateAttendeeCapabilitiesCommandInput extends UpdateAttendeeCapabilitiesRequest {}
export interface UpdateAttendeeCapabilitiesCommandOutput extends UpdateAttendeeCapabilitiesResponse, __MetadataBearer {}

/**
 * <p>The capabilties that you want to update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, UpdateAttendeeCapabilitiesCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, UpdateAttendeeCapabilitiesCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const command = new UpdateAttendeeCapabilitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAttendeeCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateAttendeeCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 */
export class UpdateAttendeeCapabilitiesCommand extends $Command<
  UpdateAttendeeCapabilitiesCommandInput,
  UpdateAttendeeCapabilitiesCommandOutput,
  ChimeSDKMeetingsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAttendeeCapabilitiesCommandInput) {
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
  ): Handler<UpdateAttendeeCapabilitiesCommandInput, UpdateAttendeeCapabilitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "UpdateAttendeeCapabilitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAttendeeCapabilitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAttendeeCapabilitiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAttendeeCapabilitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAttendeeCapabilitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAttendeeCapabilitiesCommandOutput> {
    return deserializeAws_restJson1UpdateAttendeeCapabilitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
