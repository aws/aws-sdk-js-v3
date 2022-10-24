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
  DeleteDirectConnectGatewayAssociationRequest,
  DeleteDirectConnectGatewayAssociationRequestFilterSensitiveLog,
  DeleteDirectConnectGatewayAssociationResult,
  DeleteDirectConnectGatewayAssociationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDirectConnectGatewayAssociationCommandInput
  extends DeleteDirectConnectGatewayAssociationRequest {}
export interface DeleteDirectConnectGatewayAssociationCommandOutput
  extends DeleteDirectConnectGatewayAssociationResult,
    __MetadataBearer {}

/**
 * <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p>
 *          <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayAssociationCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayAssociationCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteDirectConnectGatewayAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectConnectGatewayAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayAssociationCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DeleteDirectConnectGatewayAssociationCommand extends $Command<
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
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

  constructor(readonly input: DeleteDirectConnectGatewayAssociationCommandInput) {
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
  ): Handler<DeleteDirectConnectGatewayAssociationCommandInput, DeleteDirectConnectGatewayAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDirectConnectGatewayAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDirectConnectGatewayAssociationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayAssociationCommandOutput> {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
