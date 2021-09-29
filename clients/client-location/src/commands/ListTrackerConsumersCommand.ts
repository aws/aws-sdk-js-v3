import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListTrackerConsumersRequest, ListTrackerConsumersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListTrackerConsumersCommand,
  serializeAws_restJson1ListTrackerConsumersCommand,
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

export interface ListTrackerConsumersCommandInput extends ListTrackerConsumersRequest {}
export interface ListTrackerConsumersCommandOutput extends ListTrackerConsumersResponse, __MetadataBearer {}

/**
 * <p>Lists geofence collections currently associated to the given tracker resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListTrackerConsumersCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListTrackerConsumersCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListTrackerConsumersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrackerConsumersCommandInput} for command's `input` shape.
 * @see {@link ListTrackerConsumersCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTrackerConsumersCommand extends $Command<
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrackerConsumersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTrackerConsumersCommandInput, ListTrackerConsumersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListTrackerConsumersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrackerConsumersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrackerConsumersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrackerConsumersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTrackerConsumersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrackerConsumersCommandOutput> {
    return deserializeAws_restJson1ListTrackerConsumersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
