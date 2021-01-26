import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceNetworkAclEntryRequest } from "../models/models_4";
import {
  deserializeAws_ec2ReplaceNetworkAclEntryCommand,
  serializeAws_ec2ReplaceNetworkAclEntryCommand,
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

export type ReplaceNetworkAclEntryCommandInput = ReplaceNetworkAclEntryRequest;
export type ReplaceNetworkAclEntryCommandOutput = __MetadataBearer;

/**
 * <p>Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class ReplaceNetworkAclEntryCommand extends $Command<
  ReplaceNetworkAclEntryCommandInput,
  ReplaceNetworkAclEntryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplaceNetworkAclEntryCommandInput) {
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
  ): Handler<ReplaceNetworkAclEntryCommandInput, ReplaceNetworkAclEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceNetworkAclEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplaceNetworkAclEntryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceNetworkAclEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceNetworkAclEntryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceNetworkAclEntryCommandOutput> {
    return deserializeAws_ec2ReplaceNetworkAclEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
