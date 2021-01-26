import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteEgressOnlyInternetGatewayRequest, DeleteEgressOnlyInternetGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2DeleteEgressOnlyInternetGatewayCommand,
  serializeAws_ec2DeleteEgressOnlyInternetGatewayCommand,
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

export type DeleteEgressOnlyInternetGatewayCommandInput = DeleteEgressOnlyInternetGatewayRequest;
export type DeleteEgressOnlyInternetGatewayCommandOutput = DeleteEgressOnlyInternetGatewayResult & __MetadataBearer;

/**
 * <p>Deletes an egress-only internet gateway.</p>
 */
export class DeleteEgressOnlyInternetGatewayCommand extends $Command<
  DeleteEgressOnlyInternetGatewayCommandInput,
  DeleteEgressOnlyInternetGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteEgressOnlyInternetGatewayCommandInput) {
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
  ): Handler<DeleteEgressOnlyInternetGatewayCommandInput, DeleteEgressOnlyInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteEgressOnlyInternetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEgressOnlyInternetGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteEgressOnlyInternetGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteEgressOnlyInternetGatewayCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteEgressOnlyInternetGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteEgressOnlyInternetGatewayCommandOutput> {
    return deserializeAws_ec2DeleteEgressOnlyInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
