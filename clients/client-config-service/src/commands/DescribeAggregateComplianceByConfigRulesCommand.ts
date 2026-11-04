// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConfigRulesResponse,
} from "../models/models_0";
import { DescribeAggregateComplianceByConfigRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAggregateComplianceByConfigRulesCommand}.
 */
export interface DescribeAggregateComplianceByConfigRulesCommandInput extends DescribeAggregateComplianceByConfigRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAggregateComplianceByConfigRulesCommand}.
 */
export interface DescribeAggregateComplianceByConfigRulesCommandOutput extends DescribeAggregateComplianceByConfigRulesResponse, __MetadataBearer {}

/**
 * Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results.
 *
 * > **Note:** The results can return an empty result page, but if you have a `nextToken`, the results are displayed on the next page.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeAggregateComplianceByConfigRulesRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   Filters: { // ConfigRuleComplianceFilters
 *     ConfigRuleName: "STRING_VALUE",
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *     AccountId: "STRING_VALUE",
 *     AwsRegion: "STRING_VALUE",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAggregateComplianceByConfigRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAggregateComplianceByConfigRulesResponse
 * //   AggregateComplianceByConfigRules: [ // AggregateComplianceByConfigRuleList
 * //     { // AggregateComplianceByConfigRule
 * //       ConfigRuleName: "STRING_VALUE",
 * //       Compliance: { // Compliance
 * //         ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //         ComplianceContributorCount: { // ComplianceContributorCount
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //       },
 * //       AccountId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAggregateComplianceByConfigRulesCommandInput - {@link DescribeAggregateComplianceByConfigRulesCommandInput}
 * @returns {@link DescribeAggregateComplianceByConfigRulesCommandOutput}
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *
 * The specified limit is outside the allowable range.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *
 * You have specified a configuration aggregator that does not exist.
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
export class DescribeAggregateComplianceByConfigRulesCommand extends command<DescribeAggregateComplianceByConfigRulesCommandInput, DescribeAggregateComplianceByConfigRulesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAggregateComplianceByConfigRules",
  DescribeAggregateComplianceByConfigRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAggregateComplianceByConfigRulesRequest;
      output: DescribeAggregateComplianceByConfigRulesResponse;
    };
    sdk: {
      input: DescribeAggregateComplianceByConfigRulesCommandInput;
      output: DescribeAggregateComplianceByConfigRulesCommandOutput;
    };
  };
}
