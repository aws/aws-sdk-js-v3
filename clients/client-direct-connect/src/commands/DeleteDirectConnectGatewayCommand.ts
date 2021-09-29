import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteDirectConnectGatewayRequest, DeleteDirectConnectGatewayResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayCommand,
} from "../protocols/Aws_json1_1";
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
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDirectConnectGatewayCommand extends $Command<
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectConnectGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectConnectGatewayResult.filterSensitiveLog,
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
