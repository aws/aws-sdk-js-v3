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
  DeleteDirectConnectGatewayAssociationProposalRequest,
  DeleteDirectConnectGatewayAssociationProposalRequestFilterSensitiveLog,
  DeleteDirectConnectGatewayAssociationProposalResult,
  DeleteDirectConnectGatewayAssociationProposalResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand,
  serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDirectConnectGatewayAssociationProposalCommandInput
  extends DeleteDirectConnectGatewayAssociationProposalRequest {}
export interface DeleteDirectConnectGatewayAssociationProposalCommandOutput
  extends DeleteDirectConnectGatewayAssociationProposalResult,
    __MetadataBearer {}

/**
 * <p>Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayAssociationProposalCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayAssociationProposalCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DeleteDirectConnectGatewayAssociationProposalCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDirectConnectGatewayAssociationProposalCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayAssociationProposalCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DeleteDirectConnectGatewayAssociationProposalCommand extends $Command<
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
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

  constructor(readonly input: DeleteDirectConnectGatewayAssociationProposalCommandInput) {
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
  ): Handler<
    DeleteDirectConnectGatewayAssociationProposalCommandInput,
    DeleteDirectConnectGatewayAssociationProposalCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteDirectConnectGatewayAssociationProposalCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayAssociationProposalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationProposalRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDirectConnectGatewayAssociationProposalResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDirectConnectGatewayAssociationProposalCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayAssociationProposalCommandOutput> {
    return deserializeAws_json1_1DeleteDirectConnectGatewayAssociationProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
