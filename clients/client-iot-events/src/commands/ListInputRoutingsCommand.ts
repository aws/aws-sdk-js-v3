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

import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import {
  ListInputRoutingsRequest,
  ListInputRoutingsRequestFilterSensitiveLog,
  ListInputRoutingsResponse,
  ListInputRoutingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListInputRoutingsCommand,
  serializeAws_restJson1ListInputRoutingsCommand,
} from "../protocols/Aws_restJson1";

export interface ListInputRoutingsCommandInput extends ListInputRoutingsRequest {}
export interface ListInputRoutingsCommandOutput extends ListInputRoutingsResponse, __MetadataBearer {}

/**
 * <p>
 *       Lists one or more input routings.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, ListInputRoutingsCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, ListInputRoutingsCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const command = new ListInputRoutingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInputRoutingsCommandInput} for command's `input` shape.
 * @see {@link ListInputRoutingsCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 */
export class ListInputRoutingsCommand extends $Command<
  ListInputRoutingsCommandInput,
  ListInputRoutingsCommandOutput,
  IoTEventsClientResolvedConfig
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

  constructor(readonly input: ListInputRoutingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInputRoutingsCommandInput, ListInputRoutingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInputRoutingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTEventsClient";
    const commandName = "ListInputRoutingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInputRoutingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInputRoutingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInputRoutingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInputRoutingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInputRoutingsCommandOutput> {
    return deserializeAws_restJson1ListInputRoutingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
