// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutOrganizationConfigRuleRequest, PutOrganizationConfigRuleResponse } from "../models/models_0";
import { PutOrganizationConfigRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations `ListDelegatedAdministrator` permissions are added. An organization can have up to 3 delegated administrators.
 *
 * This API enables organization service access through the `EnableAWSServiceAccess` action and creates a service-linked role `AWSServiceRoleForConfigMultiAccountSetup` in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with `GetRole` action.
 *
 * To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization `register-delegated-administrator` for `config-multiaccountsetup.amazonaws.com`.
 *
 * There are two types of rules: *Config Managed Rules* and *Config Custom Rules*. You can use `PutOrganizationConfigRule` to create both Config Managed Rules and Config Custom Rules.
 *
 * Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see [List of Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html). If you are adding an Config managed rule, you must specify the rule's identifier for the `RuleIdentifier` key.
 *
 * Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions ([Lambda Developer Guide](https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function)) and with Guard ([Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard)), a policy-as-code language. Config custom rules created with Lambda are called *Config Custom Lambda Rules* and Config custom rules created with Guard are called *Config Custom Policy Rules*.
 *
 * If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use `PutOrganizationConfigRule` to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.
 *
 * > **Note:**
 * >
 * > Prerequisite: Ensure you call `EnableAllFeatures` API to enable all features in an organization.
 * >
 * > Make sure to specify one of either `OrganizationCustomPolicyRuleMetadata` for Custom Policy rules, `OrganizationCustomRuleMetadata` for Custom Lambda rules, or `OrganizationManagedRuleMetadata` for managed rules.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
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
 *
 * Indicates one of the following errors:
 *
 * - For [PutConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html), the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.
 * - For [PutConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html), the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.
 * - For [PutOrganizationConfigRule](https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html), organization Config rule cannot be created because you do not have permissions to call IAM `GetRole` action or create a service-linked role.
 * - For [PutConformancePack](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html) and [PutOrganizationConformancePack](https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html), a conformance pack cannot be created because you do not have the following permissions:
 *
 *   - You do not have permission to call IAM `GetRole` action or create a service-linked role.
 *   - You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.
 * - For [PutServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html), a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM `CreateServiceLinkedRole`.
 * - For [PutConnector](https://docs.aws.amazon.com/config/latest/APIReference/API_PutConnector.html), a connector cannot be created because you do not have the following permissions: IAM `CreateServiceLinkedRole`.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link MaxNumberOfOrganizationConfigRulesExceededException} (client fault)
 *
 * You have reached the limit of the number of organization Config rules you can create. For more information, see see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * @throws {@link NoAvailableOrganizationException} (client fault)
 *
 * Organization is no longer available.
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *
 * For `PutConfigurationAggregator` API, you can see this exception for the following reasons:
 *
 * - No permission to call `EnableAWSServiceAccess` API
 * - The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization. Delete this aggregator and create a new one with the current Amazon Web Services Organization.
 * - You are not a registered delegated administrator for Config with permissions to call `ListDelegatedAdministrators` API. Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.
 *
 * For all `OrganizationConfigRule` and `OrganizationConformancePack` APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.
 *
 * @throws {@link OrganizationAllFeaturesNotEnabledException} (client fault)
 *
 * Config resource cannot be created because your organization does not have all features enabled.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * You see this exception in the following cases:
 *
 * - For DeleteConfigRule, Config is deleting this rule. Try your request again later.
 * - For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.
 * - For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.
 * - For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.
 * - For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.
 * - For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 * - For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.
 *
 * For [PutStoredQuery](https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html), one of the following errors:
 *
 * - There are missing required fields.
 * - The input value fails the validation.
 * - You are trying to create more than 300 queries.
 *
 * For [DescribeConfigurationRecorders](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html) and [DescribeConfigurationRecorderStatus](https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html), one of the following errors:
 *
 * - You have specified more than one configuration recorder.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * For [AssociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html) and [DisassociateResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html), one of the following errors:
 *
 * - Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.
 * - One or more of the specified resource types are already associated or disassociated with the configuration recorder.
 * - For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.
 *
 * For [DeleteServiceLinkedConfigurationRecorder](https://docs.aws.amazon.com/config/latest/APIReference/API_DeleteServiceLinkedConfigurationRecorder.html), one of the following errors:
 *
 * - You have provided both `Arn` and `ServicePrincipal`. Only one of `Arn` or `ServicePrincipal` can be specified.
 * - You have provided a service principal for service-linked configuration recorder that is not valid.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutOrganizationConfigRuleCommand extends command<PutOrganizationConfigRuleCommandInput, PutOrganizationConfigRuleCommandOutput>(
  _ep0,
  _mw0,
  "PutOrganizationConfigRule",
  PutOrganizationConfigRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOrganizationConfigRuleRequest;
      output: PutOrganizationConfigRuleResponse;
    };
    sdk: {
      input: PutOrganizationConfigRuleCommandInput;
      output: PutOrganizationConfigRuleCommandOutput;
    };
  };
}
