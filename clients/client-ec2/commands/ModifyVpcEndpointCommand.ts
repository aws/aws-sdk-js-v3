import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcEndpointRequest, ModifyVpcEndpointResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpcEndpointCommand,
  serializeAws_ec2ModifyVpcEndpointCommand,
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

export type ModifyVpcEndpointCommandInput = ModifyVpcEndpointRequest;
export type ModifyVpcEndpointCommandOutput = ModifyVpcEndpointResult & __MetadataBearer;

/**
 * <p>Modifies attributes of a specified VPC endpoint. The attributes that you can modify
 *             depend on the type of VPC endpoint (interface, gateway, or Gateway Load Balancer). For more information, see
 *             <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html">VPC
 *                 Endpoints</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class ModifyVpcEndpointCommand extends $Command<
  ModifyVpcEndpointCommandInput,
  ModifyVpcEndpointCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcEndpointCommandInput) {
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
  ): Handler<ModifyVpcEndpointCommandInput, ModifyVpcEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVpcEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyVpcEndpointCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
