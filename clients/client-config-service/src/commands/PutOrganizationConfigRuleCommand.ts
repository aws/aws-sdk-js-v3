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

export interface PutOrganizationConfigRuleCommandInput extends PutOrganizationConfigRuleRequest {}
export interface PutOrganizationConfigRuleCommandOutput extends PutOrganizationConfigRuleResponse, __MetadataBearer {}

/**
 * <p>Adds or updates organization config rule for your entire organization evaluating whether your Amazon Web Services resources comply with your
 * 			desired configurations.</p>
 * 	        <p> Only a master account and a delegated administrator can create or update an organization config rule.
 * 		When calling this API with a delegated administrator, you must ensure Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added. </p>
 * 		       <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service linked
 * 			role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the master or delegated administrator account of your organization.
 * 			The service linked role is created only when the role does not exist in the caller account.
 * 			Config verifies the existence of role with <code>GetRole</code> action.</p>
 * 		       <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization
 * 			<code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p>
 * 		       <p>You can use this action to create both custom Config rules and Config managed rules.
 * 			If you are adding a new custom Config rule, you must first create Lambda function in the master account or a delegated
 * 			administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed-account that can be assumed by the Lambda function.
 * 			When you use the <code>PutOrganizationConfigRule</code> action to add the rule to Config, you must
 * 			specify the Amazon Resource Name (ARN) that Lambda assigns to the function.
 * 			If you are adding an Config managed rule, specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
 * 		       <p>The maximum number of organization config rules that Config supports is 150 and 3 delegated administrator per organization. </p>
 * 		       <note>
 *             <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>Specify either <code>OrganizationCustomRuleMetadata</code> or <code>OrganizationManagedRuleMetadata</code>.</p>
 * 			      </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
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
