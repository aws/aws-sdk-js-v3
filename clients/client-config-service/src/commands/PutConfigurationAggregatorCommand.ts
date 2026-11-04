// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutConfigurationAggregatorRequest, PutConfigurationAggregatorResponse } from "../models/models_0";
import { PutConfigurationAggregator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.
 *
 * `accountIds` that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call `DescribeConfigurationAggregators` to get the previous accounts and then append new ones.
 *
 * > **Note:**
 * >
 * > Config should be enabled in source accounts and regions you want to aggregate.
 * >
 * > If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls `EnableAwsServiceAccess` API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls `ListDelegatedAdministrators` API to verify whether the caller is a valid delegated administrator.
 * >
 * > To register a delegated administrator, see [Register a Delegated Administrator](https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli) in the *Config developer guide*.
 *
 * > **Note:**
 * >
 * > **Tags are added at creation and cannot be updated with this operation**
 * >
 * > `PutConfigurationAggregator` is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different `tags` values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, `tags` will not be updated, even if they are different.
 * >
 * > Use [TagResource](https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html) and [UntagResource](https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html) to update tags after creation.
 *
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
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link InvalidRoleException} (client fault)
 *
 * You have provided a null or empty Amazon Resource Name (ARN) for the IAM role assumed by Config and used by the customer managed configuration recorder.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * For `PutServiceLinkedConfigurationRecorder` API, this exception is thrown if the number of service-linked roles in the account exceeds the limit.
 *
 * For `StartConfigRulesEvaluation` API, this exception is thrown if an evaluation is in progress or if you call the StartConfigRulesEvaluation API more than once per minute.
 *
 * For `PutConfigurationAggregator` API, this exception is thrown if the number of accounts and aggregators exceeds the limit.
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
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class PutConfigurationAggregatorCommand extends command<PutConfigurationAggregatorCommandInput, PutConfigurationAggregatorCommandOutput>(
  _ep0,
  _mw0,
  "PutConfigurationAggregator",
  PutConfigurationAggregator$
) {
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
