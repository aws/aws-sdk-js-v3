// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRemediationConfigurationsRequest, PutRemediationConfigurationsResponse } from "../models/models_0";
import { PutRemediationConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRemediationConfigurationsCommand}.
 */
export interface PutRemediationConfigurationsCommandInput extends PutRemediationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link PutRemediationConfigurationsCommand}.
 */
export interface PutRemediationConfigurationsCommandOutput extends PutRemediationConfigurationsResponse, __MetadataBearer {}

/**
 * Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the `RemediationConfiguration` object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target.
 *
 * > **Note:**
 * >
 * > **Be aware of backward incompatible changes**
 * >
 * > If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.
 * >
 * > This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.
 *
 * > **Note:**
 * >
 * > **Required fields**
 * >
 * > For manual remediation configuration, you need to provide a value for `automationAssumeRole` or use a value in the `assumeRole`field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.
 * >
 * > However, for automatic remediation configuration, the only valid `assumeRole` field value is `AutomationAssumeRole` and you need to provide a value for `AutomationAssumeRole` to remediate your resources.
 *
 * > **Note:**
 * >
 * > **Auto remediation can be initiated even for compliant resources**
 * >
 * > If you enable auto remediation for a specific Config rule using the [PutRemediationConfigurations](https://docs.aws.amazon.com/config/latest/APIReference/emAPI_PutRemediationConfigurations.html) API or the Config console, it initiates the remediation process for all non-compliant resources for that specific rule. The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis. Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot.
 * >
 * > This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRemediationConfigurationsRequest
 *   RemediationConfigurations: [ // RemediationConfigurations // required
 *     { // RemediationConfiguration
 *       ConfigRuleName: "STRING_VALUE", // required
 *       TargetType: "SSM_DOCUMENT", // required
 *       TargetId: "STRING_VALUE", // required
 *       TargetVersion: "STRING_VALUE",
 *       Parameters: { // RemediationParameters
 *         "<keys>": { // RemediationParameterValue
 *           ResourceValue: { // ResourceValue
 *             Value: "RESOURCE_ID", // required
 *           },
 *           StaticValue: { // StaticValue
 *             Values: [ // StaticParameterValues // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *       ResourceType: "STRING_VALUE",
 *       Automatic: true || false,
 *       ExecutionControls: { // ExecutionControls
 *         SsmControls: { // SsmControls
 *           ConcurrentExecutionRatePercentage: Number("int"),
 *           ErrorPercentage: Number("int"),
 *         },
 *       },
 *       MaximumAutomaticAttempts: Number("int"),
 *       RetryAttemptSeconds: Number("long"),
 *       Arn: "STRING_VALUE",
 *       CreatedByService: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // PutRemediationConfigurationsResponse
 * //   FailedBatches: [ // FailedRemediationBatches
 * //     { // FailedRemediationBatch
 * //       FailureMessage: "STRING_VALUE",
 * //       FailedItems: [ // RemediationConfigurations
 * //         { // RemediationConfiguration
 * //           ConfigRuleName: "STRING_VALUE", // required
 * //           TargetType: "SSM_DOCUMENT", // required
 * //           TargetId: "STRING_VALUE", // required
 * //           TargetVersion: "STRING_VALUE",
 * //           Parameters: { // RemediationParameters
 * //             "<keys>": { // RemediationParameterValue
 * //               ResourceValue: { // ResourceValue
 * //                 Value: "RESOURCE_ID", // required
 * //               },
 * //               StaticValue: { // StaticValue
 * //                 Values: [ // StaticParameterValues // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //           ResourceType: "STRING_VALUE",
 * //           Automatic: true || false,
 * //           ExecutionControls: { // ExecutionControls
 * //             SsmControls: { // SsmControls
 * //               ConcurrentExecutionRatePercentage: Number("int"),
 * //               ErrorPercentage: Number("int"),
 * //             },
 * //           },
 * //           MaximumAutomaticAttempts: Number("int"),
 * //           RetryAttemptSeconds: Number("long"),
 * //           Arn: "STRING_VALUE",
 * //           CreatedByService: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutRemediationConfigurationsCommandInput - {@link PutRemediationConfigurationsCommandInput}
 * @returns {@link PutRemediationConfigurationsCommandOutput}
 * @see {@link PutRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationConfigurationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutRemediationConfigurationsCommand extends command<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "PutRemediationConfigurations",
  PutRemediationConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRemediationConfigurationsRequest;
      output: PutRemediationConfigurationsResponse;
    };
    sdk: {
      input: PutRemediationConfigurationsCommandInput;
      output: PutRemediationConfigurationsCommandOutput;
    };
  };
}
