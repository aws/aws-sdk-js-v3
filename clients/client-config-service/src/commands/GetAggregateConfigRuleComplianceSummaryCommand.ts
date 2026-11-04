// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAggregateConfigRuleComplianceSummaryRequest,
  GetAggregateConfigRuleComplianceSummaryResponse,
} from "../models/models_0";
import { GetAggregateConfigRuleComplianceSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAggregateConfigRuleComplianceSummaryCommand}.
 */
export interface GetAggregateConfigRuleComplianceSummaryCommandInput extends GetAggregateConfigRuleComplianceSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetAggregateConfigRuleComplianceSummaryCommand}.
 */
export interface GetAggregateConfigRuleComplianceSummaryCommandOutput extends GetAggregateConfigRuleComplianceSummaryResponse, __MetadataBearer {}

/**
 * Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.
 *
 * > **Note:** The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetAggregateConfigRuleComplianceSummaryRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   Filters: { // ConfigRuleComplianceSummaryFilters
 *     AccountId: "STRING_VALUE",
 *     AwsRegion: "STRING_VALUE",
 *   },
 *   GroupByKey: "ACCOUNT_ID" || "AWS_REGION",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetAggregateConfigRuleComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetAggregateConfigRuleComplianceSummaryResponse
 * //   GroupByKey: "STRING_VALUE",
 * //   AggregateComplianceCounts: [ // AggregateComplianceCountList
 * //     { // AggregateComplianceCount
 * //       GroupName: "STRING_VALUE",
 * //       ComplianceSummary: { // ComplianceSummary
 * //         CompliantResourceCount: { // ComplianceContributorCount
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //         NonCompliantResourceCount: {
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //         ComplianceSummaryTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAggregateConfigRuleComplianceSummaryCommandInput - {@link GetAggregateConfigRuleComplianceSummaryCommandInput}
 * @returns {@link GetAggregateConfigRuleComplianceSummaryCommandOutput}
 * @see {@link GetAggregateConfigRuleComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAggregateConfigRuleComplianceSummaryCommandOutput} for command's `response` shape.
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
export class GetAggregateConfigRuleComplianceSummaryCommand extends command<GetAggregateConfigRuleComplianceSummaryCommandInput, GetAggregateConfigRuleComplianceSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetAggregateConfigRuleComplianceSummary",
  GetAggregateConfigRuleComplianceSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAggregateConfigRuleComplianceSummaryRequest;
      output: GetAggregateConfigRuleComplianceSummaryResponse;
    };
    sdk: {
      input: GetAggregateConfigRuleComplianceSummaryCommandInput;
      output: GetAggregateConfigRuleComplianceSummaryCommandOutput;
    };
  };
}
