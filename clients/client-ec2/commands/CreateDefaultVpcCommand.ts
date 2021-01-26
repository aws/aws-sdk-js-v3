import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDefaultVpcRequest, CreateDefaultVpcResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateDefaultVpcCommand,
  serializeAws_ec2CreateDefaultVpcCommand,
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

export type CreateDefaultVpcCommandInput = CreateDefaultVpcRequest;
export type CreateDefaultVpcCommandOutput = CreateDefaultVpcResult & __MetadataBearer;

/**
 * <p>Creates a default VPC with a size <code>/16</code> IPv4 CIDR block and a default subnet
 * 			in each Availability Zone. For more information about the components of a default VPC,
 * 			see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html">Default VPC and
 * 			Default Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>. You cannot
 * 			specify the components of the default VPC yourself.</p>
 * 		       <p>If you deleted your previous default VPC, you can create a default VPC. You cannot have
 * 			more than one default VPC per Region.</p>
 * 		       <p>If your account supports EC2-Classic, you cannot use this action to create a default VPC
 * 			in a Region that supports EC2-Classic. If you want a default VPC in a Region that
 * 			supports EC2-Classic, see "I really want a default VPC for my existing EC2 account. Is
 * 			that possible?" in the <a href="http://aws.amazon.com/vpc/faqs/#Default_VPCs">Default VPCs
 * 			FAQ</a>.</p>
 */
export class CreateDefaultVpcCommand extends $Command<
  CreateDefaultVpcCommandInput,
  CreateDefaultVpcCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDefaultVpcCommandInput) {
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
  ): Handler<CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateDefaultVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDefaultVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDefaultVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDefaultVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateDefaultVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDefaultVpcCommandOutput> {
    return deserializeAws_ec2CreateDefaultVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
