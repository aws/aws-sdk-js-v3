import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteCarrierGatewayRequest, DeleteCarrierGatewayResult } from "../models/models_1";
import {
  deserializeAws_ec2DeleteCarrierGatewayCommand,
  serializeAws_ec2DeleteCarrierGatewayCommand,
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

export type DeleteCarrierGatewayCommandInput = DeleteCarrierGatewayRequest;
export type DeleteCarrierGatewayCommandOutput = DeleteCarrierGatewayResult & __MetadataBearer;

/**
 * <p>Deletes a carrier gateway.</p>
 *         <important>
 *             <p>If you do not delete the route that contains the carrier gateway as the
 *                 Target, the route is a blackhole route. For information about how to delete a route, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DeleteRoute.html">DeleteRoute</a>.</p>
 *         </important>
 */
export class DeleteCarrierGatewayCommand extends $Command<
  DeleteCarrierGatewayCommandInput,
  DeleteCarrierGatewayCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCarrierGatewayCommandInput) {
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
  ): Handler<DeleteCarrierGatewayCommandInput, DeleteCarrierGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteCarrierGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCarrierGatewayRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCarrierGatewayResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCarrierGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteCarrierGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCarrierGatewayCommandOutput> {
    return deserializeAws_ec2DeleteCarrierGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
