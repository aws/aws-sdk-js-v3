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
  RegisterTransitGatewayRequest,
  RegisterTransitGatewayRequestFilterSensitiveLog,
  RegisterTransitGatewayResponse,
  RegisterTransitGatewayResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1RegisterTransitGatewayCommand,
  serializeAws_restJson1RegisterTransitGatewayCommand,
} from "../protocols/Aws_restJson1";

export interface RegisterTransitGatewayCommandInput extends RegisterTransitGatewayRequest {}
export interface RegisterTransitGatewayCommandOutput extends RegisterTransitGatewayResponse, __MetadataBearer {}

/**
 * <p>Registers a transit gateway in your global network. The transit gateway can be in any
 *             Amazon Web Services Region, but it must be owned by the same Amazon Web Services account that owns
 *             the global network. You cannot register a transit gateway in more than one global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RegisterTransitGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RegisterTransitGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new RegisterTransitGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link RegisterTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class RegisterTransitGatewayCommand extends $Command<
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
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

  constructor(readonly input: RegisterTransitGatewayCommandInput) {
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
  ): Handler<RegisterTransitGatewayCommandInput, RegisterTransitGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterTransitGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "RegisterTransitGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTransitGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterTransitGatewayResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterTransitGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterTransitGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTransitGatewayCommandOutput> {
    return deserializeAws_restJson1RegisterTransitGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
