import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/models_0";
import {
  deserializeAws_ec2CreateDefaultSubnetCommand,
  serializeAws_ec2CreateDefaultSubnetCommand,
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

export type CreateDefaultSubnetCommandInput = CreateDefaultSubnetRequest;
export type CreateDefaultSubnetCommandOutput = CreateDefaultSubnetResult & __MetadataBearer;

/**
 * <p>Creates a default subnet with a size <code>/20</code> IPv4 CIDR block in the
 *             specified Availability Zone in your default VPC. You can have only one default subnet
 *             per Availability Zone. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-subnet">Creating a Default
 *                 Subnet</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class CreateDefaultSubnetCommand extends $Command<
  CreateDefaultSubnetCommandInput,
  CreateDefaultSubnetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDefaultSubnetCommandInput) {
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
  ): Handler<CreateDefaultSubnetCommandInput, CreateDefaultSubnetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateDefaultSubnetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDefaultSubnetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDefaultSubnetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDefaultSubnetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateDefaultSubnetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDefaultSubnetCommandOutput> {
    return deserializeAws_ec2CreateDefaultSubnetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
