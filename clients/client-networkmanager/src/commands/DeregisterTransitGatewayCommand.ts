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
  DeregisterTransitGatewayRequest,
  DeregisterTransitGatewayRequestFilterSensitiveLog,
  DeregisterTransitGatewayResponse,
  DeregisterTransitGatewayResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1DeregisterTransitGatewayCommand,
  serializeAws_restJson1DeregisterTransitGatewayCommand,
} from "../protocols/Aws_restJson1";

export interface DeregisterTransitGatewayCommandInput extends DeregisterTransitGatewayRequest {}
export interface DeregisterTransitGatewayCommandOutput extends DeregisterTransitGatewayResponse, __MetadataBearer {}

/**
 * <p>Deregisters a transit gateway from your global network. This action does not delete
 *             your transit gateway, or modify any of its attachments. This action removes any customer gateway associations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DeregisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DeregisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DeregisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeregisterTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class DeregisterTransitGatewayCommand extends $Command<
  DeregisterTransitGatewayCommandInput,
  DeregisterTransitGatewayCommandOutput,
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

  constructor(readonly input: DeregisterTransitGatewayCommandInput) {
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
  ): Handler<DeregisterTransitGatewayCommandInput, DeregisterTransitGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterTransitGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DeregisterTransitGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTransitGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTransitGatewayResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterTransitGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeregisterTransitGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterTransitGatewayCommandOutput> {
    return deserializeAws_restJson1DeregisterTransitGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
