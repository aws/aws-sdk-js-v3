import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeDirectConnectGatewayAssociationsRequest,
  DescribeDirectConnectGatewayAssociationsResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand,
  serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand,
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

export type DescribeDirectConnectGatewayAssociationsCommandInput = DescribeDirectConnectGatewayAssociationsRequest;
export type DescribeDirectConnectGatewayAssociationsCommandOutput = DescribeDirectConnectGatewayAssociationsResult &
  __MetadataBearer;

/**
 * <p>Lists the associations between your Direct Connect gateways and virtual private gateways.
 *       You must specify a Direct Connect gateway, a virtual private gateway, or both. If you specify
 *       a Direct Connect gateway, the response contains all virtual private gateways associated with
 *       the Direct Connect gateway. If you specify a virtual private gateway, the response contains
 *       all Direct Connect gateways associated with the virtual private gateway. If you specify both,
 *       the response contains the association between the Direct Connect gateway and the virtual
 *       private gateway.</p>
 */
export class DescribeDirectConnectGatewayAssociationsCommand extends $Command<
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDirectConnectGatewayAssociationsCommandInput) {
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
    DescribeDirectConnectGatewayAssociationsCommandInput,
    DescribeDirectConnectGatewayAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewayAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDirectConnectGatewayAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
