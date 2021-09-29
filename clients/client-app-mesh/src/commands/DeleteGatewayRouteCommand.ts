import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteGatewayRouteInput, DeleteGatewayRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteGatewayRouteCommand,
  serializeAws_restJson1DeleteGatewayRouteCommand,
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

export interface DeleteGatewayRouteCommandInput extends DeleteGatewayRouteInput {}
export interface DeleteGatewayRouteCommandOutput extends DeleteGatewayRouteOutput, __MetadataBearer {}

/**
 * <p>Deletes an existing gateway route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DeleteGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DeleteGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new DeleteGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link DeleteGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteGatewayRouteCommand extends $Command<
  DeleteGatewayRouteCommandInput,
  DeleteGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGatewayRouteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayRouteCommandInput, DeleteGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DeleteGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGatewayRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGatewayRouteOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteGatewayRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGatewayRouteCommandOutput> {
    return deserializeAws_restJson1DeleteGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
