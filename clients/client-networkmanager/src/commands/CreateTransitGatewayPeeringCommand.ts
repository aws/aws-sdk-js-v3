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

import {
  CreateTransitGatewayPeeringRequest,
  CreateTransitGatewayPeeringRequestFilterSensitiveLog,
  CreateTransitGatewayPeeringResponse,
  CreateTransitGatewayPeeringResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1CreateTransitGatewayPeeringCommand,
  serializeAws_restJson1CreateTransitGatewayPeeringCommand,
} from "../protocols/Aws_restJson1";

export interface CreateTransitGatewayPeeringCommandInput extends CreateTransitGatewayPeeringRequest {}
export interface CreateTransitGatewayPeeringCommandOutput
  extends CreateTransitGatewayPeeringResponse,
    __MetadataBearer {}

/**
 * <p>Creates a transit gateway peering connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateTransitGatewayPeeringCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateTransitGatewayPeeringCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateTransitGatewayPeeringCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPeeringCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPeeringCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class CreateTransitGatewayPeeringCommand extends $Command<
  CreateTransitGatewayPeeringCommandInput,
  CreateTransitGatewayPeeringCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: CreateTransitGatewayPeeringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTransitGatewayPeeringCommandInput, CreateTransitGatewayPeeringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTransitGatewayPeeringCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateTransitGatewayPeeringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayPeeringRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayPeeringResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTransitGatewayPeeringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTransitGatewayPeeringCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPeeringCommandOutput> {
    return deserializeAws_restJson1CreateTransitGatewayPeeringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
