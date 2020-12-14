import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RejectTransitGatewayMulticastDomainAssociationsRequest,
  RejectTransitGatewayMulticastDomainAssociationsResult,
} from "../models/models_4";
import {
  deserializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand,
  serializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand,
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

export type RejectTransitGatewayMulticastDomainAssociationsCommandInput = RejectTransitGatewayMulticastDomainAssociationsRequest;
export type RejectTransitGatewayMulticastDomainAssociationsCommandOutput = RejectTransitGatewayMulticastDomainAssociationsResult &
  __MetadataBearer;

/**
 * <p>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</p>
 */
export class RejectTransitGatewayMulticastDomainAssociationsCommand extends $Command<
  RejectTransitGatewayMulticastDomainAssociationsCommandInput,
  RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectTransitGatewayMulticastDomainAssociationsCommandInput) {
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
    RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    RejectTransitGatewayMulticastDomainAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectTransitGatewayMulticastDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectTransitGatewayMulticastDomainAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectTransitGatewayMulticastDomainAssociationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayMulticastDomainAssociationsCommandOutput> {
    return deserializeAws_ec2RejectTransitGatewayMulticastDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
