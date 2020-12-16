import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/models_4";
import {
  deserializeAws_ec2ReplaceNetworkAclAssociationCommand,
  serializeAws_ec2ReplaceNetworkAclAssociationCommand,
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

export type ReplaceNetworkAclAssociationCommandInput = ReplaceNetworkAclAssociationRequest;
export type ReplaceNetworkAclAssociationCommandOutput = ReplaceNetworkAclAssociationResult & __MetadataBearer;

/**
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network
 * 			ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *         <p>This is an idempotent operation.</p>
 */
export class ReplaceNetworkAclAssociationCommand extends $Command<
  ReplaceNetworkAclAssociationCommandInput,
  ReplaceNetworkAclAssociationCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplaceNetworkAclAssociationCommandInput) {
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
  ): Handler<ReplaceNetworkAclAssociationCommandInput, ReplaceNetworkAclAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceNetworkAclAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplaceNetworkAclAssociationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReplaceNetworkAclAssociationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceNetworkAclAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceNetworkAclAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceNetworkAclAssociationCommandOutput> {
    return deserializeAws_ec2ReplaceNetworkAclAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
