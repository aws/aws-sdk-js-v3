import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListDevicePositionsRequest, ListDevicePositionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDevicePositionsCommand,
  serializeAws_restJson1ListDevicePositionsCommand,
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

export interface ListDevicePositionsCommandInput extends ListDevicePositionsRequest {}
export interface ListDevicePositionsCommandOutput extends ListDevicePositionsResponse, __MetadataBearer {}

/**
 * <p>Lists the latest device positions for requested devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListDevicePositionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListDevicePositionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListDevicePositionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevicePositionsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePositionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDevicePositionsCommand extends $Command<
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDevicePositionsCommandInput) {
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
  ): Handler<ListDevicePositionsCommandInput, ListDevicePositionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListDevicePositionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDevicePositionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDevicePositionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDevicePositionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListDevicePositionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDevicePositionsCommandOutput> {
    return deserializeAws_restJson1ListDevicePositionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
