import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";
import { ListNotificationsInput, ListNotificationsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListNotificationsCommand,
  serializeAws_restJson1ListNotificationsCommand,
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

export interface ListNotificationsCommandInput extends ListNotificationsInput {}
export interface ListNotificationsCommandOutput extends ListNotificationsOutput, __MetadataBearer {}

/**
 * <p>List lens notifications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListNotificationsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListNotificationsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new ListNotificationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListNotificationsCommand extends $Command<
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
  WellArchitectedClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNotificationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotificationsCommandInput, ListNotificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListNotificationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotificationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListNotificationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotificationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNotificationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotificationsCommandOutput> {
    return deserializeAws_restJson1ListNotificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
