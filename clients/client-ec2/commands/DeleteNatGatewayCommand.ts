import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteNatGatewayRequest, DeleteNatGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2DeleteNatGatewayCommand,
  serializeAws_ec2DeleteNatGatewayCommand,
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

export type DeleteNatGatewayCommandInput = DeleteNatGatewayRequest;
export type DeleteNatGatewayCommandOutput = DeleteNatGatewayResult & __MetadataBearer;

/**
 * <p>Deletes the specified NAT gateway. Deleting a NAT gateway disassociates its Elastic IP address, but does not release the address from your account. Deleting a NAT gateway does not delete any NAT gateway routes in your route tables.</p>
 */
export class DeleteNatGatewayCommand extends $Command<
  DeleteNatGatewayCommandInput,
  DeleteNatGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNatGatewayCommandInput) {
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
  ): Handler<DeleteNatGatewayCommandInput, DeleteNatGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteNatGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNatGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNatGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNatGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteNatGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNatGatewayCommandOutput> {
    return deserializeAws_ec2DeleteNatGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
