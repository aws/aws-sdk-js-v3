// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAggregateConformancePackComplianceSummaryRequest,
  GetAggregateConformancePackComplianceSummaryResponse,
} from "../models/models_0";
import {
  de_GetAggregateConformancePackComplianceSummaryCommand,
  se_GetAggregateConformancePackComplianceSummaryCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAggregateConformancePackComplianceSummaryCommand}.
 */
export interface GetAggregateConformancePackComplianceSummaryCommandInput
  extends GetAggregateConformancePackComplianceSummaryRequest {}
/**
 * @public
 *
 * The output of {@link GetAggregateConformancePackComplianceSummaryCommand}.
 */
export interface GetAggregateConformancePackComplianceSummaryCommandOutput
  extends GetAggregateConformancePackComplianceSummaryResponse,
    __MetadataBearer {}

/**
 * <p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p>
 *          <note>
 *             <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateConformancePackComplianceSummaryCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // GetAggregateConformancePackComplianceSummaryRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   Filters: { // AggregateConformancePackComplianceSummaryFilters
 *     AccountId: "STRING_VALUE",
 *     AwsRegion: "STRING_VALUE",
 *   },
 *   GroupByKey: "ACCOUNT_ID" || "AWS_REGION",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetAggregateConformancePackComplianceSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetAggregateConformancePackComplianceSummaryResponse
 * //   AggregateConformancePackComplianceSummaries: [ // AggregateConformancePackComplianceSummaryList
 * //     { // AggregateConformancePackComplianceSummary
 * //       ComplianceSummary: { // AggregateConformancePackComplianceCount
 * //         CompliantConformancePackCount: Number("int"),
 * //         NonCompliantConformancePackCount: Number("int"),
 * //       },
 * //       GroupName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   GroupByKey: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAggregateConformancePackComplianceSummaryCommandInput - {@link GetAggregateConformancePackComplianceSummaryCommandInput}
 * @returns {@link GetAggregateConformancePackComplianceSummaryCommandOutput}
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAggregateConformancePackComplianceSummaryCommandOutput} for command's `response` shape.
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
export class GetAggregateConformancePackComplianceSummaryCommand extends $Command
  .classBuilder<
    GetAggregateConformancePackComplianceSummaryCommandInput,
    GetAggregateConformancePackComplianceSummaryCommandOutput,
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
  .s("StarlingDoveService", "GetAggregateConformancePackComplianceSummary", {})
  .n("ConfigServiceClient", "GetAggregateConformancePackComplianceSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetAggregateConformancePackComplianceSummaryCommand)
  .de(de_GetAggregateConformancePackComplianceSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAggregateConformancePackComplianceSummaryRequest;
      output: GetAggregateConformancePackComplianceSummaryResponse;
    };
    sdk: {
      input: GetAggregateConformancePackComplianceSummaryCommandInput;
      output: GetAggregateConformancePackComplianceSummaryCommandOutput;
    };
  };
}
