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
  DeleteDirectConnectGatewayRequest,
  DeleteDirectConnectGatewayRequestFilterSensitiveLog,
  DeleteDirectConnectGatewayResult,
  DeleteDirectConnectGatewayResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDirectConnectGatewayCommandInput extends DeleteDirectConnectGatewayRequest {}
export interface DeleteDirectConnectGatewayCommandOutput extends DeleteDirectConnectGatewayResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are
 *       attached to the Direct Connect gateway and disassociate all virtual private gateways associated
 *       with the Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DeleteDirectConnectGatewayCommand extends $Command<
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
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

  constructor(readonly input: DeleteDirectConnectGatewayCommandInput) {
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
  ): Handler<DeleteDirectConnectGatewayCommandInput, DeleteDirectConnectGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDirectConnectGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectConnectGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectConnectGatewayResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDirectConnectGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectConnectGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayCommandOutput> {
    return deserializeAws_json1_1DeleteDirectConnectGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
