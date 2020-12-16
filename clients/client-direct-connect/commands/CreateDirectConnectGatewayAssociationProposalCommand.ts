import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  CreateDirectConnectGatewayAssociationProposalRequest,
  CreateDirectConnectGatewayAssociationProposalResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand,
  serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand,
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

export type CreateDirectConnectGatewayAssociationProposalCommandInput = CreateDirectConnectGatewayAssociationProposalRequest;
export type CreateDirectConnectGatewayAssociationProposalCommandOutput = CreateDirectConnectGatewayAssociationProposalResult &
  __MetadataBearer;

/**
 * <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p>
 *          <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any AWS account. </p>
 */
export class CreateDirectConnectGatewayAssociationProposalCommand extends $Command<
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDirectConnectGatewayAssociationProposalCommandInput) {
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
    CreateDirectConnectGatewayAssociationProposalCommandInput,
    CreateDirectConnectGatewayAssociationProposalCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "CreateDirectConnectGatewayAssociationProposalCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDirectConnectGatewayAssociationProposalRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectConnectGatewayAssociationProposalResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateDirectConnectGatewayAssociationProposalCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDirectConnectGatewayAssociationProposalCommandOutput> {
    return deserializeAws_json1_1CreateDirectConnectGatewayAssociationProposalCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
