import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutOrganizationConfigRuleRequest, PutOrganizationConfigRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutOrganizationConfigRuleCommand,
  serializeAws_json1_1PutOrganizationConfigRuleCommand,
} from "../protocols/Aws_json1_1";
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

export type PutOrganizationConfigRuleCommandInput = PutOrganizationConfigRuleRequest;
export type PutOrganizationConfigRuleCommandOutput = PutOrganizationConfigRuleResponse & __MetadataBearer;

/**
 * <p>Adds or updates organization config rule for your entire organization evaluating whether your AWS resources comply with your
 * 			desired configurations.</p>
 * 	        <p> Only a master account and a delegated administrator can create or update an organization config rule.
 * 		When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added. </p>
 * 		       <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked
 * 			role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization.
 * 			The service linked role is created only when the role does not exist in the caller account.
 * 			AWS Config verifies the existence of role with <code>GetRole</code> action.</p>
 * 		       <p>To use this API with delegated administrator, register a delegated administrator by calling AWS Organization
 * 			<code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p>
 * 		       <p>You can use this action to create both custom AWS Config rules and AWS managed Config rules.
 * 			If you are adding a new custom AWS Config rule, you must first create AWS Lambda function in the master account or a delegated
 * 			administrator that the rule invokes to evaluate your resources.
 * 			When you use the <code>PutOrganizationConfigRule</code> action to add the rule to AWS Config, you must
 * 			specify the Amazon Resource Name (ARN) that AWS Lambda assigns to the function.
 * 			If you are adding an AWS managed Config rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
 * 		       <p>The maximum number of organization config rules that AWS Config supports is 150 and 3 delegated administrator per organization. </p>
 * 		       <note>
 *             <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p>
 * 			      </note>
 */
export class PutOrganizationConfigRuleCommand extends $Command<
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutOrganizationConfigRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutOrganizationConfigRuleCommandInput, PutOrganizationConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutOrganizationConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutOrganizationConfigRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutOrganizationConfigRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutOrganizationConfigRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutOrganizationConfigRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutOrganizationConfigRuleCommandOutput> {
    return deserializeAws_json1_1PutOrganizationConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
