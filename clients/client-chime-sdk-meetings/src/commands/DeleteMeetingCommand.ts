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
import { DeleteMeetingRequest, DeleteMeetingRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMeetingCommand,
  serializeAws_restJson1DeleteMeetingCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteMeetingCommandInput extends DeleteMeetingRequest {}
export interface DeleteMeetingCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified Amazon Chime SDK meeting. The operation deletes all attendees, disconnects all clients, and prevents new clients from
 *            joining the meeting. For more information about the Amazon Chime SDK, see
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
 *            <i>Amazon Chime Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, DeleteMeetingCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, DeleteMeetingCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const command = new DeleteMeetingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMeetingCommandInput} for command's `input` shape.
 * @see {@link DeleteMeetingCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 */
export class DeleteMeetingCommand extends $Command<
  DeleteMeetingCommandInput,
  DeleteMeetingCommandOutput,
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

  constructor(readonly input: DeleteMeetingCommandInput) {
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
  ): Handler<DeleteMeetingCommandInput, DeleteMeetingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMeetingCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMeetingsClient";
    const commandName = "DeleteMeetingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMeetingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMeetingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMeetingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMeetingCommandOutput> {
    return deserializeAws_restJson1DeleteMeetingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
