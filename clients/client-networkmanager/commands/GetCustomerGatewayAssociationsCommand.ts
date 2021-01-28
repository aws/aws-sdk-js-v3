import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetCustomerGatewayAssociationsRequest, GetCustomerGatewayAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetCustomerGatewayAssociationsCommand,
  serializeAws_restJson1GetCustomerGatewayAssociationsCommand,
} from "../protocols/Aws_restJson1";
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

export type GetCustomerGatewayAssociationsCommandInput = GetCustomerGatewayAssociationsRequest;
export type GetCustomerGatewayAssociationsCommandOutput = GetCustomerGatewayAssociationsResponse & __MetadataBearer;

/**
 * <p>Gets the association information for customer gateways that are associated with
 *             devices and links in your global network.</p>
 */
export class GetCustomerGatewayAssociationsCommand extends $Command<
  GetCustomerGatewayAssociationsCommandInput,
  GetCustomerGatewayAssociationsCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCustomerGatewayAssociationsCommandInput) {
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
  ): Handler<GetCustomerGatewayAssociationsCommandInput, GetCustomerGatewayAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetCustomerGatewayAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCustomerGatewayAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCustomerGatewayAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCustomerGatewayAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCustomerGatewayAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCustomerGatewayAssociationsCommandOutput> {
    return deserializeAws_restJson1GetCustomerGatewayAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
