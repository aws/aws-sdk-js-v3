import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AcceptTransitGatewayMulticastDomainAssociationsRequest,
  AcceptTransitGatewayMulticastDomainAssociationsResult,
} from "../models/models_0";
import {
  deserializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand,
  serializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand,
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

export type AcceptTransitGatewayMulticastDomainAssociationsCommandInput = AcceptTransitGatewayMulticastDomainAssociationsRequest;
export type AcceptTransitGatewayMulticastDomainAssociationsCommandOutput = AcceptTransitGatewayMulticastDomainAssociationsResult &
  __MetadataBearer;

/**
 * <p>Accepts a request to associate subnets with a transit gateway multicast domain.</p>
 */
export class AcceptTransitGatewayMulticastDomainAssociationsCommand extends $Command<
  AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
  AcceptTransitGatewayMulticastDomainAssociationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptTransitGatewayMulticastDomainAssociationsCommandInput) {
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
    AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    AcceptTransitGatewayMulticastDomainAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptTransitGatewayMulticastDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptTransitGatewayMulticastDomainAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptTransitGatewayMulticastDomainAssociationsCommandOutput> {
    return deserializeAws_ec2AcceptTransitGatewayMulticastDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
