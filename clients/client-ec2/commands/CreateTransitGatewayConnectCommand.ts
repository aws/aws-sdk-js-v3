import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayConnectRequest, CreateTransitGatewayConnectResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayConnectCommand,
  serializeAws_ec2CreateTransitGatewayConnectCommand,
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

export type CreateTransitGatewayConnectCommandInput = CreateTransitGatewayConnectRequest;
export type CreateTransitGatewayConnectCommandOutput = CreateTransitGatewayConnectResult & __MetadataBearer;

/**
 * <p>Creates a Connect attachment from a specified transit gateway attachment. A Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a transit gateway and an appliance.</p>
 *         <p>A Connect attachment uses an existing VPC or AWS Direct Connect attachment as the underlying transport mechanism. </p>
 */
export class CreateTransitGatewayConnectCommand extends $Command<
  CreateTransitGatewayConnectCommandInput,
  CreateTransitGatewayConnectCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayConnectCommandInput) {
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
  ): Handler<CreateTransitGatewayConnectCommandInput, CreateTransitGatewayConnectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayConnectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayConnectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayConnectResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTransitGatewayConnectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayConnectCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayConnectCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayConnectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
