// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutOrganizationConformancePackRequest, PutOrganizationConformancePackResponse } from "../models/models_0";
import { PutOrganizationConformancePack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutOrganizationConformancePackCommand}.
 */
export interface PutOrganizationConformancePackCommandInput extends PutOrganizationConformancePackRequest {}
/**
 * @public
 *
 * The output of {@link PutOrganizationConformancePackCommand}.
 */
export interface PutOrganizationConformancePackCommandOutput extends PutOrganizationConformancePackResponse, __MetadataBearer {}

/**
 * Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
 *
 * Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations `ListDelegatedAdministrator` permissions are added. An organization can have up to 3 delegated administrators.
 *
 * > **Important:**
 * >
 * > When you use `PutOrganizationConformancePack` to deploy conformance packs across member accounts, the operation can create Config rules and remediation actions without requiring `config:PutConfigRule` or `config:PutRemediationConfigurations` permissions in member account IAM policies.
 * >
 * > This API uses the `AWSServiceRoleForConfigConforms` service-linked role in each member account to create conformance pack resources. This service-linked role includes the permissions to create Config rules and remediation configurations, even if member account IAM policies explicitly deny these actions.
 *
 * This API enables organization service access for `config-multiaccountsetup.amazonaws.com` through the `EnableAWSServiceAccess` action and creates a service-linked role `AWSServiceRoleForConfigMultiAccountSetup` in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization `register-delegate-admin` for `config-multiaccountsetup.amazonaws.com`.
 *
 * > **Note:**
 * >
 * > Prerequisite: Ensure you call `EnableAllFeatures` API to enable all features in an organization.
 * >
 * > You must specify either the `TemplateS3Uri` or the `TemplateBody` parameter, but not both. If you provide both Config uses the `TemplateS3Uri` parameter and ignores the `TemplateBody` parameter.
 * >
 * > Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutOrganizationConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutOrganizationConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutOrganizationConformancePackRequest
 *   OrganizationConformancePackName: "STRING_VALUE", // required
 *   TemplateS3Uri: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   DeliveryS3Bucket: "STRING_VALUE",
 *   DeliveryS3KeyPrefix: "STRING_VALUE",
 *   ConformancePackInputParameters: [ // ConformancePackInputParameters
 *     { // ConformancePackInputParameter
 *       ParameterName: "STRING_VALUE", // required
 *       ParameterValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   ExcludedAccounts: [ // ExcludedAccounts
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutOrganizationConformancePackCommand(input);
 * const response = await client.send(command);
 * // { // PutOrganizationConformancePackResponse
 * //   OrganizationConformancePackArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutOrganizationConformancePackCommandInput - {@link PutOrganizationConformancePackCommandInput}
 * @returns {@link PutOrganizationConformancePackCommandOutput}
 * @see {@link PutOrganizationConformancePackCommandInput} for command's `input` shape.
 * @see {@link PutOrganizationConformancePackCommandOutput} for command's `response` shape.
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
 * @throws {@link MaxNumberOfOrganizationConformancePacksExceededException} (client fault)
 *
 * You have reached the limit of the number of organization conformance packs you can create in an account. For more information, see [**Service Limits**](https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html) in the *Config Developer Guide*.
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
 * @throws {@link OrganizationConformancePackTemplateValidationException} (client fault)
 *
 * You have specified a template that is not valid or supported.
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
export class PutOrganizationConformancePackCommand extends command<PutOrganizationConformancePackCommandInput, PutOrganizationConformancePackCommandOutput>(
  _ep0,
  _mw0,
  "PutOrganizationConformancePack",
  PutOrganizationConformancePack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutOrganizationConformancePackRequest;
      output: PutOrganizationConformancePackResponse;
    };
    sdk: {
      input: PutOrganizationConformancePackCommandInput;
      output: PutOrganizationConformancePackCommandOutput;
    };
  };
}
