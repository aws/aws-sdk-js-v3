// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutRemediationConfigurationsRequest, PutRemediationConfigurationsResponse } from "../models/models_1";
import {
  de_PutRemediationConfigurationsCommand,
  se_PutRemediationConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface PutRemediationConfigurationsCommandOutput
  extends PutRemediationConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Adds or updates the remediation configuration with a specific Config rule with the
 * 			selected target or action.
 * 			The API creates the <code>RemediationConfiguration</code> object for the Config rule.
 * 		The Config rule must already exist for you to add a remediation configuration.
 * 		The target (SSM document) must exist and have permissions to use the target. </p>
 *          <note>
 *             <p>
 *                <b>Be aware of backward incompatible changes</b>
 *             </p>
 *             <p>If you make backward incompatible changes to the SSM document,
 * 			you must call this again to ensure the remediations can run.</p>
 *             <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules,
 * 				the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <b>Required fields</b>
 *             </p>
 *             <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field  to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p>
 *             <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <b>Auto remediation can be initiated even for compliant resources</b>
 *             </p>
 *             <p>If you enable auto remediation for a specific Config rule using the <a href="https://docs.aws.amazon.com/config/latest/APIReference/emAPI_PutRemediationConfigurations.html">PutRemediationConfigurations</a> API or the Config console,
 * 				it initiates the remediation process for all non-compliant resources for that specific rule.
 * 				The auto remediation process relies on the compliance data snapshot which is captured on a periodic basis.
 * 				Any non-compliant resource that is updated between the snapshot schedule will continue to be remediated based on the last known compliance data snapshot.</p>
 *             <p>This means that in some cases auto remediation can be initiated even for compliant resources, since the bootstrap processor uses a database that can have stale evaluation results based on the last known compliance data snapshot.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
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
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html">PutOrganizationConfigRule</a>, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html">PutOrganizationConformancePack</a>, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM <code>CreateServiceLinkedRole</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class PutRemediationConfigurationsCommand extends $Command
  .classBuilder<
    PutRemediationConfigurationsCommandInput,
    PutRemediationConfigurationsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "PutRemediationConfigurations", {})
  .n("ConfigServiceClient", "PutRemediationConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_PutRemediationConfigurationsCommand)
  .de(de_PutRemediationConfigurationsCommand)
  .build() {
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
