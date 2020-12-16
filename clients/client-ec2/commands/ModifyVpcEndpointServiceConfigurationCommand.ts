import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVpcEndpointServiceConfigurationRequest,
  ModifyVpcEndpointServiceConfigurationResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand,
  serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand,
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

export type ModifyVpcEndpointServiceConfigurationCommandInput = ModifyVpcEndpointServiceConfigurationRequest;
export type ModifyVpcEndpointServiceConfigurationCommandOutput = ModifyVpcEndpointServiceConfigurationResult &
  __MetadataBearer;

/**
 * <p>Modifies the attributes of your VPC endpoint service configuration. You can change the
 *             Network Load Balancers or Gateway Load Balancers for your service, and you can specify whether acceptance is
 *             required for requests to connect to your endpoint service through an interface VPC
 *             endpoint.</p>
 * 	        <p>If you set or modify the private DNS name, you must prove that you own the private DNS
 *             domain name. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html">VPC Endpoint Service
 *                 Private DNS Name Verification</a> in the
 *             <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class ModifyVpcEndpointServiceConfigurationCommand extends $Command<
  ModifyVpcEndpointServiceConfigurationCommandInput,
  ModifyVpcEndpointServiceConfigurationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcEndpointServiceConfigurationCommandInput) {
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
  ): Handler<ModifyVpcEndpointServiceConfigurationCommandInput, ModifyVpcEndpointServiceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServiceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointServiceConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointServiceConfigurationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcEndpointServiceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServiceConfigurationCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointServiceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
