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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  CreateDirectConnectGatewayRequest,
  CreateDirectConnectGatewayRequestFilterSensitiveLog,
  CreateDirectConnectGatewayResult,
  CreateDirectConnectGatewayResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDirectConnectGatewayCommand,
  serializeAws_json1_1CreateDirectConnectGatewayCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDirectConnectGatewayCommandInput extends CreateDirectConnectGatewayRequest {}
export interface CreateDirectConnectGatewayCommandOutput extends CreateDirectConnectGatewayResult, __MetadataBearer {}

/**
 * <p>Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set
 *       of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any
 *       Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that
 *       are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to
 *       connect to a VPC in any Region, regardless of the Region in which the virtual interfaces
 *       are located, and pass traffic between them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, CreateDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, CreateDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new CreateDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class CreateDirectConnectGatewayCommand extends $Command<
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
  DirectConnectClientResolvedConfig
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

  constructor(readonly input: CreateDirectConnectGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDirectConnectGatewayCommandInput, CreateDirectConnectGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDirectConnectGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateDirectConnectGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDirectConnectGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectConnectGatewayResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDirectConnectGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectConnectGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDirectConnectGatewayCommandOutput> {
    return deserializeAws_json1_1CreateDirectConnectGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
