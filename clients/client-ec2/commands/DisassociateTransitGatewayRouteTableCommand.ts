import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DisassociateTransitGatewayRouteTableRequest,
  DisassociateTransitGatewayRouteTableResult,
} from "../models/models_4";
import {
  deserializeAws_ec2DisassociateTransitGatewayRouteTableCommand,
  serializeAws_ec2DisassociateTransitGatewayRouteTableCommand,
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

export type DisassociateTransitGatewayRouteTableCommandInput = DisassociateTransitGatewayRouteTableRequest;
export type DisassociateTransitGatewayRouteTableCommandOutput = DisassociateTransitGatewayRouteTableResult &
  __MetadataBearer;

/**
 * <p>Disassociates a resource attachment from a transit gateway route table.</p>
 */
export class DisassociateTransitGatewayRouteTableCommand extends $Command<
  DisassociateTransitGatewayRouteTableCommandInput,
  DisassociateTransitGatewayRouteTableCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTransitGatewayRouteTableCommandInput) {
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
  ): Handler<DisassociateTransitGatewayRouteTableCommandInput, DisassociateTransitGatewayRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateTransitGatewayRouteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTransitGatewayRouteTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTransitGatewayRouteTableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateTransitGatewayRouteTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateTransitGatewayRouteTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTransitGatewayRouteTableCommandOutput> {
    return deserializeAws_ec2DisassociateTransitGatewayRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
