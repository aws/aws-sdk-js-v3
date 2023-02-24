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

import {
  StartStreamingSessionRequest,
  StartStreamingSessionRequestFilterSensitiveLog,
  StartStreamingSessionResponse,
  StartStreamingSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import { NimbleClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NimbleClient";
import {
  deserializeAws_restJson1StartStreamingSessionCommand,
  serializeAws_restJson1StartStreamingSessionCommand,
} from "../protocols/Aws_restJson1";

export interface StartStreamingSessionCommandInput extends StartStreamingSessionRequest {}
export interface StartStreamingSessionCommandOutput extends StartStreamingSessionResponse, __MetadataBearer {}

/**
 * <p>Transitions sessions from the <code>STOPPED</code> state into the <code>READY</code>
 *             state. The <code>START_IN_PROGRESS</code> state is the intermediate state between the
 *                 <code>STOPPED</code> and <code>READY</code> states.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, StartStreamingSessionCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, StartStreamingSessionCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new StartStreamingSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartStreamingSessionCommandInput} for command's `input` shape.
 * @see {@link StartStreamingSessionCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for NimbleClient's `config` shape.
 *
 */
export class StartStreamingSessionCommand extends $Command<
  StartStreamingSessionCommandInput,
  StartStreamingSessionCommandOutput,
  NimbleClientResolvedConfig
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

  constructor(readonly input: StartStreamingSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NimbleClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartStreamingSessionCommandInput, StartStreamingSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartStreamingSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NimbleClient";
    const commandName = "StartStreamingSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartStreamingSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartStreamingSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartStreamingSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartStreamingSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartStreamingSessionCommandOutput> {
    return deserializeAws_restJson1StartStreamingSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
