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

import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import {
  SendEventRequest,
  SendEventRequestFilterSensitiveLog,
  SendEventResponse,
  SendEventResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SendEventCommand,
  serializeAws_restJson1SendEventCommand,
} from "../protocols/Aws_restJson1";

export interface SendEventCommandInput extends SendEventRequest {}
export interface SendEventCommandOutput extends SendEventResponse, __MetadataBearer {}

/**
 * <p>Sends an event to a room. Use this within your application’s business logic to send
 *          events to clients of a room; e.g., to notify clients to change the way the chat UI is
 *          rendered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, SendEventCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, SendEventCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * const client = new IvschatClient(config);
 * const command = new SendEventCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendEventCommandInput} for command's `input` shape.
 * @see {@link SendEventCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 */
export class SendEventCommand extends $Command<
  SendEventCommandInput,
  SendEventCommandOutput,
  IvschatClientResolvedConfig
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

  constructor(readonly input: SendEventCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvschatClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendEventCommandInput, SendEventCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SendEventCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvschatClient";
    const commandName = "SendEventCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendEventRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendEventResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendEventCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SendEventCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendEventCommandOutput> {
    return deserializeAws_restJson1SendEventCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
