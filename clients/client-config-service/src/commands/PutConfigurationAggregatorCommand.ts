// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutConfigurationAggregatorRequest, PutConfigurationAggregatorResponse } from "../models/models_0";
import { PutConfigurationAggregator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationAggregatorCommand}.
 */
export interface PutConfigurationAggregatorCommandInput extends PutConfigurationAggregatorRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationAggregatorCommand}.
 */
export interface PutConfigurationAggregatorCommandOutput extends PutConfigurationAggregatorResponse, __MetadataBearer {}

/**
 * <p>Creates and updates the configuration aggregator with the
 * 			selected source accounts and regions. The source account can be
 * 			individual account(s) or an organization.</p>
 *          <p>
 *             <code>accountIds</code> that are passed will be replaced with existing accounts.
 * 			If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p>
 *          <note>
 *             <p>Config should be enabled in source accounts and regions
 * 				you want to aggregate.</p>
 *             <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization.
 * 				If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations.
 * 				If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p>
 *             <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p>
 *          </note>
 *          <note>
 *             <p>
 *                <b>Tags are added at creation and cannot be updated with this operation</b>
 *             </p>
 *             <p>
 *                <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values,
 * 			Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p>
 *             <p>Use <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html">UntagResource</a> to update tags after creation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConfigurationAggregatorCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConfigurationAggregatorCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // PutConfigurationAggregatorRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   AccountAggregationSources: [ // AccountAggregationSourceList
 *     { // AccountAggregationSource
 *       AccountIds: [ // AccountAggregationSourceAccountList // required
 *         "STRING_VALUE",
 *       ],
 *       AllAwsRegions: true || false,
 *       AwsRegions: [ // AggregatorRegionList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   OrganizationAggregationSource: { // OrganizationAggregationSource
 *     RoleArn: "STRING_VALUE", // required
 *     AwsRegions: [
 *       "STRING_VALUE",
 *     ],
 *     AllAwsRegions: true || false,
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   AggregatorFilters: { // AggregatorFilters
 *     ResourceType: { // AggregatorFilterResourceType
 *       Type: "INCLUDE",
 *       Value: [ // ResourceTypeValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ServicePrincipal: { // AggregatorFilterServicePrincipal
 *       Type: "INCLUDE",
 *       Value: [ // ServicePrincipalValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new PutConfigurationAggregatorCommand(input);
 * const response = await client.send(command);
 * // { // PutConfigurationAggregatorResponse
 * //   ConfigurationAggregator: { // ConfigurationAggregator
 * //     ConfigurationAggregatorName: "STRING_VALUE",
 * //     ConfigurationAggregatorArn: "STRING_VALUE",
 * //     AccountAggregationSources: [ // AccountAggregationSourceList
 * //       { // AccountAggregationSource
 * //         AccountIds: [ // AccountAggregationSourceAccountList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         AllAwsRegions: true || false,
 * //         AwsRegions: [ // AggregatorRegionList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     OrganizationAggregationSource: { // OrganizationAggregationSource
 * //       RoleArn: "STRING_VALUE", // required
 * //       AwsRegions: [
 * //         "STRING_VALUE",
 * //       ],
 * //       AllAwsRegions: true || false,
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     CreatedBy: "STRING_VALUE",
 * //     AggregatorFilters: { // AggregatorFilters
 * //       ResourceType: { // AggregatorFilterResourceType
 * //         Type: "INCLUDE",
 * //         Value: [ // ResourceTypeValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ServicePrincipal: { // AggregatorFilterServicePrincipal
 * //         Type: "INCLUDE",
 * //         Value: [ // ServicePrincipalValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutConfigurationAggregatorCommandInput - {@link PutConfigurationAggregatorCommandInput}
 * @returns {@link PutConfigurationAggregatorCommandOutput}
 * @see {@link PutConfigurationAggregatorCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationAggregatorCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link InvalidRoleException} (client fault)
 *  <p>You have provided a null or empty Amazon Resource Name (ARN) for the IAM role assumed by Config and used by the customer managed configuration recorder.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>For <code>PutServiceLinkedConfigurationRecorder</code> API, this exception
 * 			is thrown if the number of service-linked roles in the account exceeds the limit.</p>
 *          <p>For <code>StartConfigRulesEvaluation</code> API, this exception
 * 			is thrown if an evaluation is in progress or if you call the <a>StartConfigRulesEvaluation</a> API more than once per
 * 			minute.</p>
 *          <p>For <code>PutConfigurationAggregator</code> API, this exception
 * 			is thrown if the number of accounts and aggregators exceeds the
 * 			limit.</p>
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
 * 			Ensure that the management account registers delagated administrator for Config service principal name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 * @throws {@link OrganizationAllFeaturesNotEnabledException} (client fault)
 *  <p>Config resource cannot be created because your organization does not have all features enabled.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class PutConfigurationAggregatorCommand extends $Command
  .classBuilder<
    PutConfigurationAggregatorCommandInput,
    PutConfigurationAggregatorCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "PutConfigurationAggregator", {})
  .n("ConfigServiceClient", "PutConfigurationAggregatorCommand")
  .sc(PutConfigurationAggregator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationAggregatorRequest;
      output: PutConfigurationAggregatorResponse;
    };
    sdk: {
      input: PutConfigurationAggregatorCommandInput;
      output: PutConfigurationAggregatorCommandOutput;
    };
  };
}
