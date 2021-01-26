import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  GetTransitGatewayRouteTablePropagationsRequest,
  GetTransitGatewayRouteTablePropagationsResult,
} from "../models/models_4";
import {
  deserializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand,
  serializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand,
} from "../protocols/Aws_ec2";
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

export type GetTransitGatewayRouteTablePropagationsCommandInput = GetTransitGatewayRouteTablePropagationsRequest;
export type GetTransitGatewayRouteTablePropagationsCommandOutput = GetTransitGatewayRouteTablePropagationsResult &
  __MetadataBearer;

/**
 * <p>Gets information about the route table propagations for the specified transit gateway route table.</p>
 */
export class GetTransitGatewayRouteTablePropagationsCommand extends $Command<
  GetTransitGatewayRouteTablePropagationsCommandInput,
  GetTransitGatewayRouteTablePropagationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTransitGatewayRouteTablePropagationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetTransitGatewayRouteTablePropagationsCommandInput,
    GetTransitGatewayRouteTablePropagationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayRouteTablePropagationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayRouteTablePropagationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayRouteTablePropagationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayRouteTablePropagationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayRouteTablePropagationsCommandOutput> {
    return deserializeAws_ec2GetTransitGatewayRouteTablePropagationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
