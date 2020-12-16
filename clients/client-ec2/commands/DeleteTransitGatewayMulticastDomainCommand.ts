import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteTransitGatewayMulticastDomainRequest,
  DeleteTransitGatewayMulticastDomainResult,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteTransitGatewayMulticastDomainCommand,
  serializeAws_ec2DeleteTransitGatewayMulticastDomainCommand,
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

export type DeleteTransitGatewayMulticastDomainCommandInput = DeleteTransitGatewayMulticastDomainRequest;
export type DeleteTransitGatewayMulticastDomainCommandOutput = DeleteTransitGatewayMulticastDomainResult &
  __MetadataBearer;

/**
 * <p>Deletes the specified transit gateway multicast domain.</p>
 */
export class DeleteTransitGatewayMulticastDomainCommand extends $Command<
  DeleteTransitGatewayMulticastDomainCommandInput,
  DeleteTransitGatewayMulticastDomainCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTransitGatewayMulticastDomainCommandInput) {
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
  ): Handler<DeleteTransitGatewayMulticastDomainCommandInput, DeleteTransitGatewayMulticastDomainCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayMulticastDomainCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTransitGatewayMulticastDomainRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTransitGatewayMulticastDomainResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteTransitGatewayMulticastDomainCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTransitGatewayMulticastDomainCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayMulticastDomainCommandOutput> {
    return deserializeAws_ec2DeleteTransitGatewayMulticastDomainCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
