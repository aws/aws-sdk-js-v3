import { IoTDataPlaneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTDataPlaneClient";
import { ListNamedShadowsForThingRequest, ListNamedShadowsForThingResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListNamedShadowsForThingCommand,
  serializeAws_restJson1ListNamedShadowsForThingCommand,
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

export interface ListNamedShadowsForThingCommandInput extends ListNamedShadowsForThingRequest {}
export interface ListNamedShadowsForThingCommandOutput extends ListNamedShadowsForThingResponse, __MetadataBearer {}

/**
 * <p>Lists the shadows for the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTDataPlaneClient, ListNamedShadowsForThingCommand } from "@aws-sdk/client-iot-data-plane"; // ES Modules import
 * // const { IoTDataPlaneClient, ListNamedShadowsForThingCommand } = require("@aws-sdk/client-iot-data-plane"); // CommonJS import
 * const client = new IoTDataPlaneClient(config);
 * const command = new ListNamedShadowsForThingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNamedShadowsForThingCommandInput} for command's `input` shape.
 * @see {@link ListNamedShadowsForThingCommandOutput} for command's `response` shape.
 * @see {@link IoTDataPlaneClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListNamedShadowsForThingCommand extends $Command<
  ListNamedShadowsForThingCommandInput,
  ListNamedShadowsForThingCommandOutput,
  IoTDataPlaneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListNamedShadowsForThingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTDataPlaneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNamedShadowsForThingCommandInput, ListNamedShadowsForThingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTDataPlaneClient";
    const commandName = "ListNamedShadowsForThingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNamedShadowsForThingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListNamedShadowsForThingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNamedShadowsForThingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNamedShadowsForThingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNamedShadowsForThingCommandOutput> {
    return deserializeAws_restJson1ListNamedShadowsForThingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
