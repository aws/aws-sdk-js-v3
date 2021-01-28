import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateEgressOnlyInternetGatewayRequest, CreateEgressOnlyInternetGatewayResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand,
  serializeAws_ec2CreateEgressOnlyInternetGatewayCommand,
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

export type CreateEgressOnlyInternetGatewayCommandInput = CreateEgressOnlyInternetGatewayRequest;
export type CreateEgressOnlyInternetGatewayCommandOutput = CreateEgressOnlyInternetGatewayResult & __MetadataBearer;

/**
 * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only
 * 			internet gateway is used to enable outbound communication over IPv6 from instances in
 * 			your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6
 * 			connection with your instance.</p>
 */
export class CreateEgressOnlyInternetGatewayCommand extends $Command<
  CreateEgressOnlyInternetGatewayCommandInput,
  CreateEgressOnlyInternetGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEgressOnlyInternetGatewayCommandInput) {
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
  ): Handler<CreateEgressOnlyInternetGatewayCommandInput, CreateEgressOnlyInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateEgressOnlyInternetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEgressOnlyInternetGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEgressOnlyInternetGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateEgressOnlyInternetGatewayCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateEgressOnlyInternetGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEgressOnlyInternetGatewayCommandOutput> {
    return deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
