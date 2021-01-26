import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayRouteTableRequest, CreateTransitGatewayRouteTableResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayRouteTableCommand,
  serializeAws_ec2CreateTransitGatewayRouteTableCommand,
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

export type CreateTransitGatewayRouteTableCommandInput = CreateTransitGatewayRouteTableRequest;
export type CreateTransitGatewayRouteTableCommandOutput = CreateTransitGatewayRouteTableResult & __MetadataBearer;

/**
 * <p>Creates a route table for the specified transit gateway.</p>
 */
export class CreateTransitGatewayRouteTableCommand extends $Command<
  CreateTransitGatewayRouteTableCommandInput,
  CreateTransitGatewayRouteTableCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayRouteTableCommandInput) {
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
  ): Handler<CreateTransitGatewayRouteTableCommandInput, CreateTransitGatewayRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayRouteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayRouteTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayRouteTableResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayRouteTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayRouteTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayRouteTableCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
