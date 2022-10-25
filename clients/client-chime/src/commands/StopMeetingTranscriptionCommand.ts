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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  StopMeetingTranscriptionRequest,
  StopMeetingTranscriptionRequestFilterSensitiveLog,
  StopMeetingTranscriptionResponse,
  StopMeetingTranscriptionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StopMeetingTranscriptionCommand,
  serializeAws_restJson1StopMeetingTranscriptionCommand,
} from "../protocols/Aws_restJson1";

export interface StopMeetingTranscriptionCommandInput extends StopMeetingTranscriptionRequest {}
export interface StopMeetingTranscriptionCommandOutput extends StopMeetingTranscriptionResponse, __MetadataBearer {}

/**
 * <p>Stops transcription for the specified <code>meetingId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, StopMeetingTranscriptionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, StopMeetingTranscriptionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new StopMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StopMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class StopMeetingTranscriptionCommand extends $Command<
  StopMeetingTranscriptionCommandInput,
  StopMeetingTranscriptionCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: StopMeetingTranscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopMeetingTranscriptionCommandInput, StopMeetingTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopMeetingTranscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "StopMeetingTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopMeetingTranscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopMeetingTranscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopMeetingTranscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopMeetingTranscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopMeetingTranscriptionCommandOutput> {
    return deserializeAws_restJson1StopMeetingTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
