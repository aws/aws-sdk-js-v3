// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutOrganizationConfigRuleRequest, PutOrganizationConfigRuleResponse } from "../models/models_1";
import { de_PutOrganizationConfigRuleCommand, se_PutOrganizationConfigRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutOrganizationConfigRuleCommand}.
 */
export interface PutOrganizationConfigRuleCommandInput extends PutOrganizationConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link PutOrganizationConfigRuleCommand}.
 */
export interface PutOrganizationConfigRuleCommandOutput extends PutOrganizationConfigRuleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your
 * 			desired configurations. For information on how many organization Config rules you can have per account,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 *          <p> Only a management account and a delegated administrator can create or update an organization Config rule.
 * 		When calling this API with a delegated administrator, you must ensure Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p>
 *          <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked
 * 			role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization.
 * 			The service-linked role is created only when the role does not exist in the caller account.
 * 			Config verifies the existence of role with <code>GetRole</code> action.</p>
 *          <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization
 * 			<code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p>
 *          <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.
 * 			You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p>
 *          <p>Config Managed Rules are predefined,
 * 			customizable rules created by Config. For a list of managed rules, see
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config
 * 				Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule's identifier for the <code>RuleIdentifier</code> key.</p>
 *          <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions
 * 			(<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
 * 					Repository</a>), a policy-as-code language.
 *
 * 			Config custom rules created with Lambda
 * 			are called <i>Config Custom Lambda Rules</i> and Config custom rules created with
 * 			Guard are called <i>Config Custom Policy Rules</i>.</p>
 *          <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated
 * 		administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function.
 * 		When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must
 * 			specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p>
 *          <note>
 *             <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p>
 *             <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutOrganizationConfigRuleRequest
 *   OrganizationConfigRuleName: "STRING_VALUE", // required
 *   OrganizationManagedRuleMetadata: { // OrganizationManagedRuleMetadata
 *     Description: "STRING_VALUE",
 *     RuleIdentifier: "STRING_VALUE", // required
 *     InputParameters: "STRING_VALUE",
 *     MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *     ResourceTypesScope: [ // ResourceTypesScope
 *       "STRING_VALUE",
 *     ],
 *     ResourceIdScope: "STRING_VALUE",
 *     TagKeyScope: "STRING_VALUE",
 *     TagValueScope: "STRING_VALUE",
 *   },
 *   OrganizationCustomRuleMetadata: { // OrganizationCustomRuleMetadata
 *     Description: "STRING_VALUE",
 *     LambdaFunctionArn: "STRING_VALUE", // required
 *     OrganizationConfigRuleTriggerTypes: [ // OrganizationConfigRuleTriggerTypes // required
 *       "ConfigurationItemChangeNotification" || "OversizedConfigurationItemChangeNotification" || "ScheduledNotification",
 *     ],
 *     InputParameters: "STRING_VALUE",
 *     MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *     ResourceTypesScope: [
 *       "STRING_VALUE",
 *     ],
 *     ResourceIdScope: "STRING_VALUE",
 *     TagKeyScope: "STRING_VALUE",
 *     TagValueScope: "STRING_VALUE",
 *   },
 *   ExcludedAccounts: [ // ExcludedAccounts
 *     "STRING_VALUE",
 *   ],
 *   OrganizationCustomPolicyRuleMetadata: { // OrganizationCustomPolicyRuleMetadata
 *     Description: "STRING_VALUE",
 *     OrganizationConfigRuleTriggerTypes: [ // OrganizationConfigRuleTriggerTypeNoSNs
 *       "ConfigurationItemChangeNotification" || "OversizedConfigurationItemChangeNotification",
 *     ],
 *     InputParameters: "STRING_VALUE",
 *     MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *     ResourceTypesScope: [
 *       "STRING_VALUE",
 *     ],
 *     ResourceIdScope: "STRING_VALUE",
 *     TagKeyScope: "STRING_VALUE",
 *     TagValueScope: "STRING_VALUE",
 *     PolicyRuntime: "STRING_VALUE", // required
 *     PolicyText: "STRING_VALUE", // required
 *     DebugLogDeliveryAccounts: [ // DebugLogDeliveryAccounts
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new PutOrganizationConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // PutOrganizationConfigRuleResponse
 * //   OrganizationConfigRuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutOrganizationConfigRuleCommandInput - {@link PutOrganizationConfigRuleCommandInput}
 * @returns {@link PutOrganizationConfigRuleCommandOutput}
 * @see {@link PutOrganizationConfigRuleCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link MaxNumberOfOrganizationConfigRulesExceededException} (client fault)
 *  <p>You have reached the limit of the number of organization Config rules you can create. For more information, see see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 *
 * @throws {@link NoAvailableOrganizationException} (client fault)
 *  <p>Organization is no longer available.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principle name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 * @throws {@link OrganizationAllFeaturesNotEnabledException} (client fault)
 *  <p>Config resource cannot be created because your organization does not have all features enabled.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutOrganizationConfigRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutOrganizationConfigRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutOrganizationConfigRuleCommandOutput> {
    return de_PutOrganizationConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
