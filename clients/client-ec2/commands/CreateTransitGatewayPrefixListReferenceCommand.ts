import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateTransitGatewayPrefixListReferenceRequest,
  CreateTransitGatewayPrefixListReferenceResult,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand,
  serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand,
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

export type CreateTransitGatewayPrefixListReferenceCommandInput = CreateTransitGatewayPrefixListReferenceRequest;
export type CreateTransitGatewayPrefixListReferenceCommandOutput = CreateTransitGatewayPrefixListReferenceResult &
  __MetadataBearer;

/**
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 */
export class CreateTransitGatewayPrefixListReferenceCommand extends $Command<
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayPrefixListReferenceCommandInput) {
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
    CreateTransitGatewayPrefixListReferenceCommandInput,
    CreateTransitGatewayPrefixListReferenceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayPrefixListReferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayPrefixListReferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
