import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVpcEndpointServicePermissionsRequest,
  ModifyVpcEndpointServicePermissionsResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpcEndpointServicePermissionsCommand,
  serializeAws_ec2ModifyVpcEndpointServicePermissionsCommand,
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

export type ModifyVpcEndpointServicePermissionsCommandInput = ModifyVpcEndpointServicePermissionsRequest;
export type ModifyVpcEndpointServicePermissionsCommandOutput = ModifyVpcEndpointServicePermissionsResult &
  __MetadataBearer;

/**
 * <p>Modifies the permissions for your <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-service.html">VPC endpoint service</a>. You can add or remove permissions for service consumers (IAM users,
 * 	        IAM roles, and AWS accounts) to connect to your endpoint service.</p>
 * 	        <p>If you grant permissions to all principals, the service is public. Any users who know the name of a
 * 	        public service can send a request to attach an endpoint. If the service does not require manual approval,
 * 	        attachments are automatically approved.</p>
 */
export class ModifyVpcEndpointServicePermissionsCommand extends $Command<
  ModifyVpcEndpointServicePermissionsCommandInput,
  ModifyVpcEndpointServicePermissionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcEndpointServicePermissionsCommandInput) {
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
  ): Handler<ModifyVpcEndpointServicePermissionsCommandInput, ModifyVpcEndpointServicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointServicePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointServicePermissionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcEndpointServicePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointServicePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServicePermissionsCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointServicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
