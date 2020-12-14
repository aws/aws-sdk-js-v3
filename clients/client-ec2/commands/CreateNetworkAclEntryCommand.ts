import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkAclEntryRequest } from "../models/models_1";
import {
  deserializeAws_ec2CreateNetworkAclEntryCommand,
  serializeAws_ec2CreateNetworkAclEntryCommand,
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

export type CreateNetworkAclEntryCommandInput = CreateNetworkAclEntryRequest;
export type CreateNetworkAclEntryCommandOutput = __MetadataBearer;

/**
 * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules
 * 		        and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated
 * 		        with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of
 * 		        ingress rules and a separate set of egress rules.</p>
 * 		       <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the
 * 		        other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p>
 * 		       <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p>
 *          <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class CreateNetworkAclEntryCommand extends $Command<
  CreateNetworkAclEntryCommandInput,
  CreateNetworkAclEntryCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateNetworkAclEntryCommandInput) {
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
  ): Handler<CreateNetworkAclEntryCommandInput, CreateNetworkAclEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkAclEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkAclEntryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateNetworkAclEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateNetworkAclEntryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkAclEntryCommandOutput> {
    return deserializeAws_ec2CreateNetworkAclEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
