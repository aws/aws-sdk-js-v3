import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { UpdateGatewayRouteInput, UpdateGatewayRouteOutput } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateGatewayRouteCommand,
  serializeAws_restJson1UpdateGatewayRouteCommand,
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

export type UpdateGatewayRouteCommandInput = UpdateGatewayRouteInput;
export type UpdateGatewayRouteCommandOutput = UpdateGatewayRouteOutput & __MetadataBearer;

/**
 * <p>Updates an existing gateway route that is associated to a specified virtual gateway in a
 *          service mesh.</p>
 */
export class UpdateGatewayRouteCommand extends $Command<
  UpdateGatewayRouteCommandInput,
  UpdateGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGatewayRouteCommandInput) {
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
  ): Handler<UpdateGatewayRouteCommandInput, UpdateGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "UpdateGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGatewayRouteInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewayRouteOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateGatewayRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewayRouteCommandOutput> {
    return deserializeAws_restJson1UpdateGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
