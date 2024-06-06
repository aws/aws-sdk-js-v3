// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAggregateConfigRuleComplianceSummaryRequest,
  GetAggregateConfigRuleComplianceSummaryResponse,
} from "../models/models_0";
import {
  de_GetAggregateConfigRuleComplianceSummaryCommand,
  se_GetAggregateConfigRuleComplianceSummaryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAggregateConfigRuleComplianceSummaryCommand}.
 */
export interface GetAggregateConfigRuleComplianceSummaryCommandInput
  extends GetAggregateConfigRuleComplianceSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetAggregateConfigRuleComplianceSummaryCommand}.
 */
export interface GetAggregateConfigRuleComplianceSummaryCommandOutput
  extends GetAggregateConfigRuleComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns the number of compliant and noncompliant rules for one
 * 			or more accounts and regions in an aggregator.</p>
 *          <note>
 *             <p>The results can return an empty result page, but if you
 * 				have a nextToken, the results are displayed on the next
 * 				page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConfigRuleComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
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
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchConfigurationAggregatorException} (client fault)
 *  <p>You have specified a configuration aggregator that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class GetAggregateConfigRuleComplianceSummaryCommand extends $Command
  .classBuilder<
    GetAggregateConfigRuleComplianceSummaryCommandInput,
    GetAggregateConfigRuleComplianceSummaryCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "GetAggregateConfigRuleComplianceSummary", {})
  .n("ConfigServiceClient", "GetAggregateConfigRuleComplianceSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetAggregateConfigRuleComplianceSummaryCommand)
  .de(de_GetAggregateConfigRuleComplianceSummaryCommand)
  .build() {}
