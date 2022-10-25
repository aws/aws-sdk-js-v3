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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  ListQueuedMessagesRequest,
  ListQueuedMessagesRequestFilterSensitiveLog,
  ListQueuedMessagesResponse,
  ListQueuedMessagesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListQueuedMessagesCommand,
  serializeAws_restJson1ListQueuedMessagesCommand,
} from "../protocols/Aws_restJson1";

export interface ListQueuedMessagesCommandInput extends ListQueuedMessagesRequest {}
export interface ListQueuedMessagesCommandOutput extends ListQueuedMessagesResponse, __MetadataBearer {}

/**
 * <p>List queued messages in the downlink queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListQueuedMessagesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListQueuedMessagesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new ListQueuedMessagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueuedMessagesCommandInput} for command's `input` shape.
 * @see {@link ListQueuedMessagesCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class ListQueuedMessagesCommand extends $Command<
  ListQueuedMessagesCommandInput,
  ListQueuedMessagesCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: ListQueuedMessagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQueuedMessagesCommandInput, ListQueuedMessagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQueuedMessagesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "ListQueuedMessagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQueuedMessagesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQueuedMessagesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQueuedMessagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListQueuedMessagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListQueuedMessagesCommandOutput> {
    return deserializeAws_restJson1ListQueuedMessagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
