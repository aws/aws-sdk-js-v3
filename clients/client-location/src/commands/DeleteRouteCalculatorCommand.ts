import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DeleteRouteCalculatorRequest, DeleteRouteCalculatorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRouteCalculatorCommand,
  serializeAws_restJson1DeleteRouteCalculatorCommand,
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

export interface DeleteRouteCalculatorCommandInput extends DeleteRouteCalculatorRequest {}
export interface DeleteRouteCalculatorCommandOutput extends DeleteRouteCalculatorResponse, __MetadataBearer {}

/**
 * <p>Deletes a route calculator resource from your AWS account.</p>
 *         <note>
 *             <p>This operation deletes the resource permanently.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new DeleteRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link DeleteRouteCalculatorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRouteCalculatorCommand extends $Command<
  DeleteRouteCalculatorCommandInput,
  DeleteRouteCalculatorCommandOutput,
  LocationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRouteCalculatorCommandInput) {
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
  ): Handler<DeleteRouteCalculatorCommandInput, DeleteRouteCalculatorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "DeleteRouteCalculatorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRouteCalculatorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRouteCalculatorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRouteCalculatorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRouteCalculatorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRouteCalculatorCommandOutput> {
    return deserializeAws_restJson1DeleteRouteCalculatorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
