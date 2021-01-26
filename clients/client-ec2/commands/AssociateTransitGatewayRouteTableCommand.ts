import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateTransitGatewayRouteTableRequest, AssociateTransitGatewayRouteTableResult } from "../models/models_0";
import {
  deserializeAws_ec2AssociateTransitGatewayRouteTableCommand,
  serializeAws_ec2AssociateTransitGatewayRouteTableCommand,
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

export type AssociateTransitGatewayRouteTableCommandInput = AssociateTransitGatewayRouteTableRequest;
export type AssociateTransitGatewayRouteTableCommandOutput = AssociateTransitGatewayRouteTableResult & __MetadataBearer;

/**
 * <p>Associates the specified attachment with the specified transit gateway route table. You can
 *         associate only one route table with an attachment.</p>
 */
export class AssociateTransitGatewayRouteTableCommand extends $Command<
  AssociateTransitGatewayRouteTableCommandInput,
  AssociateTransitGatewayRouteTableCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateTransitGatewayRouteTableCommandInput) {
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
  ): Handler<AssociateTransitGatewayRouteTableCommandInput, AssociateTransitGatewayRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateTransitGatewayRouteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateTransitGatewayRouteTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateTransitGatewayRouteTableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateTransitGatewayRouteTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateTransitGatewayRouteTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTransitGatewayRouteTableCommandOutput> {
    return deserializeAws_ec2AssociateTransitGatewayRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
