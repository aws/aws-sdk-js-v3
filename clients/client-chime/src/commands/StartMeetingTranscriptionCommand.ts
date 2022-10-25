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
  StartMeetingTranscriptionRequest,
  StartMeetingTranscriptionRequestFilterSensitiveLog,
  StartMeetingTranscriptionResponse,
  StartMeetingTranscriptionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StartMeetingTranscriptionCommand,
  serializeAws_restJson1StartMeetingTranscriptionCommand,
} from "../protocols/Aws_restJson1";

export interface StartMeetingTranscriptionCommandInput extends StartMeetingTranscriptionRequest {}
export interface StartMeetingTranscriptionCommandOutput extends StartMeetingTranscriptionResponse, __MetadataBearer {}

/**
 * <p>Starts transcription for the specified <code>meetingId</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, StartMeetingTranscriptionCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, StartMeetingTranscriptionCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new StartMeetingTranscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMeetingTranscriptionCommandInput} for command's `input` shape.
 * @see {@link StartMeetingTranscriptionCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class StartMeetingTranscriptionCommand extends $Command<
  StartMeetingTranscriptionCommandInput,
  StartMeetingTranscriptionCommandOutput,
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

  constructor(readonly input: StartMeetingTranscriptionCommandInput) {
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
  ): Handler<StartMeetingTranscriptionCommandInput, StartMeetingTranscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMeetingTranscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "StartMeetingTranscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartMeetingTranscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartMeetingTranscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartMeetingTranscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartMeetingTranscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartMeetingTranscriptionCommandOutput> {
    return deserializeAws_restJson1StartMeetingTranscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
