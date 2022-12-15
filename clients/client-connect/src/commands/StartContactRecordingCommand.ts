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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  StartContactRecordingRequest,
  StartContactRecordingRequestFilterSensitiveLog,
  StartContactRecordingResponse,
  StartContactRecordingResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1StartContactRecordingCommand,
  serializeAws_restJson1StartContactRecordingCommand,
} from "../protocols/Aws_restJson1";

export interface StartContactRecordingCommandInput extends StartContactRecordingRequest {}
export interface StartContactRecordingCommandOutput extends StartContactRecordingResponse, __MetadataBearer {}

/**
 * <p>Starts recording the contact: </p>
 *          <ul>
 *             <li>
 *                <p>If the API is called <i>before</i> the agent joins the call, recording
 *      starts when the agent joins the call.</p>
 *             </li>
 *             <li>
 *                <p>If the API is called <i>after</i> the agent joins the call, recording starts
 *      at the time of the API call.</p>
 *             </li>
 *          </ul>
 *          <p>StartContactRecording is a one-time action. For example, if you use StopContactRecording to
 *    stop recording an ongoing call, you can't use StartContactRecording to restart it. For scenarios
 *    where the recording has started and you want to suspend and resume it, such as when collecting
 *    sensitive information (for example, a credit card number), use SuspendContactRecording and
 *    ResumeContactRecording.</p>
 *          <p>You can use this API to override the recording behavior configured in the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-recording-behavior.html">Set recording
 *     behavior</a> block.</p>
 *          <p>Only voice recordings are supported at this time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartContactRecordingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartContactRecordingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new StartContactRecordingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartContactRecordingCommandInput} for command's `input` shape.
 * @see {@link StartContactRecordingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class StartContactRecordingCommand extends $Command<
  StartContactRecordingCommandInput,
  StartContactRecordingCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: StartContactRecordingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartContactRecordingCommandInput, StartContactRecordingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartContactRecordingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "StartContactRecordingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartContactRecordingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartContactRecordingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartContactRecordingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartContactRecordingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContactRecordingCommandOutput> {
    return deserializeAws_restJson1StartContactRecordingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
