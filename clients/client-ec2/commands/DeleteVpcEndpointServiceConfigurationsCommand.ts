import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteVpcEndpointServiceConfigurationsRequest,
  DeleteVpcEndpointServiceConfigurationsResult,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand,
  serializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand,
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

export type DeleteVpcEndpointServiceConfigurationsCommandInput = DeleteVpcEndpointServiceConfigurationsRequest;
export type DeleteVpcEndpointServiceConfigurationsCommandOutput = DeleteVpcEndpointServiceConfigurationsResult &
  __MetadataBearer;

/**
 * <p>Deletes one or more VPC endpoint service configurations in your account. Before you
 *             delete the endpoint service configuration, you must reject any <code>Available</code> or
 *                 <code>PendingAcceptance</code> interface endpoint connections that are attached to
 *             the service.</p>
 */
export class DeleteVpcEndpointServiceConfigurationsCommand extends $Command<
  DeleteVpcEndpointServiceConfigurationsCommandInput,
  DeleteVpcEndpointServiceConfigurationsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteVpcEndpointServiceConfigurationsCommandInput) {
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
  ): Handler<DeleteVpcEndpointServiceConfigurationsCommandInput, DeleteVpcEndpointServiceConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointServiceConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointServiceConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointServiceConfigurationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteVpcEndpointServiceConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteVpcEndpointServiceConfigurationsCommandOutput> {
    return deserializeAws_ec2DeleteVpcEndpointServiceConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
