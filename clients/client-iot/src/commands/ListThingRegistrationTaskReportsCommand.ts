import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListThingRegistrationTaskReportsRequest, ListThingRegistrationTaskReportsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListThingRegistrationTaskReportsCommand,
  serializeAws_restJson1ListThingRegistrationTaskReportsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListThingRegistrationTaskReportsCommandInput extends ListThingRegistrationTaskReportsRequest {}
export interface ListThingRegistrationTaskReportsCommandOutput
  extends ListThingRegistrationTaskReportsResponse,
    __MetadataBearer {}

/**
 * <p>Information about the thing registration tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListThingRegistrationTaskReportsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListThingRegistrationTaskReportsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListThingRegistrationTaskReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThingRegistrationTaskReportsCommandInput} for command's `input` shape.
 * @see {@link ListThingRegistrationTaskReportsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListThingRegistrationTaskReportsCommand extends $Command<
  ListThingRegistrationTaskReportsCommandInput,
  ListThingRegistrationTaskReportsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListThingRegistrationTaskReportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListThingRegistrationTaskReportsCommandInput, ListThingRegistrationTaskReportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListThingRegistrationTaskReportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListThingRegistrationTaskReportsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListThingRegistrationTaskReportsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListThingRegistrationTaskReportsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListThingRegistrationTaskReportsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListThingRegistrationTaskReportsCommandOutput> {
    return deserializeAws_restJson1ListThingRegistrationTaskReportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
