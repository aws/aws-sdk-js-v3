import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeregisterTransitGatewayMulticastGroupMembersRequest,
  DeregisterTransitGatewayMulticastGroupMembersResult,
} from "../models/models_2";
import {
  deserializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand,
  serializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand,
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

export type DeregisterTransitGatewayMulticastGroupMembersCommandInput = DeregisterTransitGatewayMulticastGroupMembersRequest;
export type DeregisterTransitGatewayMulticastGroupMembersCommandOutput = DeregisterTransitGatewayMulticastGroupMembersResult &
  __MetadataBearer;

/**
 * <p>Deregisters the specified members (network interfaces) from the  transit gateway multicast group.</p>
 */
export class DeregisterTransitGatewayMulticastGroupMembersCommand extends $Command<
  DeregisterTransitGatewayMulticastGroupMembersCommandInput,
  DeregisterTransitGatewayMulticastGroupMembersCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTransitGatewayMulticastGroupMembersCommandInput) {
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
    DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    DeregisterTransitGatewayMulticastGroupMembersCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeregisterTransitGatewayMulticastGroupMembersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupMembersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTransitGatewayMulticastGroupMembersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterTransitGatewayMulticastGroupMembersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterTransitGatewayMulticastGroupMembersCommandOutput> {
    return deserializeAws_ec2DeregisterTransitGatewayMulticastGroupMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
