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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import {
  CreateGatewayRouteInput,
  CreateGatewayRouteInputFilterSensitiveLog,
  CreateGatewayRouteOutput,
  CreateGatewayRouteOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateGatewayRouteCommand,
  serializeAws_restJson1CreateGatewayRouteCommand,
} from "../protocols/Aws_restJson1";

export interface CreateGatewayRouteCommandInput extends CreateGatewayRouteInput {}
export interface CreateGatewayRouteCommandOutput extends CreateGatewayRouteOutput, __MetadataBearer {}

/**
 * <p>Creates a gateway route.</p>
 *          <p>A gateway route is attached to a virtual gateway and routes traffic to an existing
 *          virtual service. If a route matches a request, it can distribute traffic to a target
 *          virtual service.</p>
 *          <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateGatewayRouteCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateGatewayRouteCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const command = new CreateGatewayRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGatewayRouteCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayRouteCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 */
export class CreateGatewayRouteCommand extends $Command<
  CreateGatewayRouteCommandInput,
  CreateGatewayRouteCommandOutput,
  AppMeshClientResolvedConfig
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

  constructor(readonly input: CreateGatewayRouteCommandInput) {
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
  ): Handler<CreateGatewayRouteCommandInput, CreateGatewayRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateGatewayRouteCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateGatewayRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGatewayRouteInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateGatewayRouteOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGatewayRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateGatewayRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGatewayRouteCommandOutput> {
    return deserializeAws_restJson1CreateGatewayRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
