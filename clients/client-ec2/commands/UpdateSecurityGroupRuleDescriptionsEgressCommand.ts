import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  UpdateSecurityGroupRuleDescriptionsEgressRequest,
  UpdateSecurityGroupRuleDescriptionsEgressResult,
} from "../models/models_5";
import {
  deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand,
  serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand,
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

export type UpdateSecurityGroupRuleDescriptionsEgressCommandInput = UpdateSecurityGroupRuleDescriptionsEgressRequest;
export type UpdateSecurityGroupRuleDescriptionsEgressCommandOutput = UpdateSecurityGroupRuleDescriptionsEgressResult &
  __MetadataBearer;

/**
 * <p>[VPC only] Updates the description of an egress (outbound) security group rule. You
 * 			can replace an existing description, or add a description to a rule that did not have one
 * 			previously.</p>
 * 		       <p>You specify the description as part of the IP permissions structure. You can remove a
 * 			description for a security group rule by omitting the description parameter in the
 * 			request.</p>
 */
export class UpdateSecurityGroupRuleDescriptionsEgressCommand extends $Command<
  UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
  UpdateSecurityGroupRuleDescriptionsEgressCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput) {
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
  ): Handler<
    UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    UpdateSecurityGroupRuleDescriptionsEgressCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "UpdateSecurityGroupRuleDescriptionsEgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsEgressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSecurityGroupRuleDescriptionsEgressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSecurityGroupRuleDescriptionsEgressCommandOutput> {
    return deserializeAws_ec2UpdateSecurityGroupRuleDescriptionsEgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
