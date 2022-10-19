// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  PutOrganizationConfigRuleRequest,
  PutOrganizationConfigRuleRequestFilterSensitiveLog,
  PutOrganizationConfigRuleResponse,
  PutOrganizationConfigRuleResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1PutOrganizationConfigRuleCommand,
  serializeAws_json1_1PutOrganizationConfigRuleCommand,
} from "../protocols/Aws_json1_1";

export interface PutOrganizationConfigRuleCommandInput extends PutOrganizationConfigRuleRequest {}
export interface PutOrganizationConfigRuleCommandOutput extends PutOrganizationConfigRuleResponse, __MetadataBearer {}

/**
 * <p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your
 * 			desired configurations. For information on how many organization Config rules you can have per account,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 * 	        <p> Only a management account and a delegated administrator can create or update an organization Config rule.
 * 		When calling this API with a delegated administrator, you must ensure Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p>
 * 		       <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked
 * 			role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization.
 * 			The service-linked role is created only when the role does not exist in the caller account.
 * 			Config verifies the existence of role with <code>GetRole</code> action.</p>
 * 		       <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization
 * 			<code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p>
 *
 * 		       <p>There are two types of rules: Config Custom Rules and Config Managed Rules.
 * 			You can use <code>PutOrganizationConfigRule</code> to create both Config custom rules and Config managed rules.</p>
 *
 * 		       <p>Custom rules are rules that you can create using either Guard or Lambda functions.
 * 			Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
 * 				Repository</a>) is a policy-as-code language that allows you to write policies that
 * 			are enforced by Config Custom Policy rules. Lambda uses custom code that you upload to
 * 			evaluate a custom rule. If you are adding a new Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated
 * 		administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function.
 * 		When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must
 * 			specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p>
 *
 * 		       <p>Managed rules are predefined,
 * 			customizable rules created by Config. For a list of managed rules, see
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config
 * 				Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
 *
 *
 * 		       <note>
 *             <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 * 			         <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p>
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
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class PutOrganizationConfigRuleCommand extends $Command<
  PutOrganizationConfigRuleCommandInput,
  PutOrganizationConfigRuleCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutOrganizationConfigRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutOrganizationConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutOrganizationConfigRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutOrganizationConfigRuleResponseFilterSensitiveLog,
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
