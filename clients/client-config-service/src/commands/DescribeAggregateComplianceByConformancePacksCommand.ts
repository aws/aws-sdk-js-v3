// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAggregateComplianceByConformancePacksRequest,
  DescribeAggregateComplianceByConformancePacksResponse,
} from "../models/models_0";
import {
  de_DescribeAggregateComplianceByConformancePacksCommand,
  se_DescribeAggregateComplianceByConformancePacksCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAggregateComplianceByConformancePacksCommand}.
 */
export interface DescribeAggregateComplianceByConformancePacksCommandInput
  extends DescribeAggregateComplianceByConformancePacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAggregateComplianceByConformancePacksCommand}.
 */
export interface DescribeAggregateComplianceByConformancePacksCommandOutput
  extends DescribeAggregateComplianceByConformancePacksResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each
 * 			conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p>
 *          <note>
 *             <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConformancePacksCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeAggregateComplianceByConformancePacksRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   Filters: { // AggregateConformancePackComplianceFilters
 *     ConformancePackName: "STRING_VALUE",
 *     ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 *     AccountId: "STRING_VALUE",
 *     AwsRegion: "STRING_VALUE",
 *   },
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAggregateComplianceByConformancePacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAggregateComplianceByConformancePacksResponse
 * //   AggregateComplianceByConformancePacks: [ // AggregateComplianceByConformancePackList
 * //     { // AggregateComplianceByConformancePack
 * //       ConformancePackName: "STRING_VALUE",
 * //       Compliance: { // AggregateConformancePackCompliance
 * //         ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "INSUFFICIENT_DATA",
 * //         CompliantRuleCount: Number("int"),
 * //         NonCompliantRuleCount: Number("int"),
 * //         TotalRuleCount: Number("int"),
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
 * @param DescribeAggregateComplianceByConformancePacksCommandInput - {@link DescribeAggregateComplianceByConformancePacksCommandInput}
 * @returns {@link DescribeAggregateComplianceByConformancePacksCommandOutput}
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandInput} for command's `input` shape.
 * @see {@link DescribeAggregateComplianceByConformancePacksCommandOutput} for command's `response` shape.
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
export class DescribeAggregateComplianceByConformancePacksCommand extends $Command
  .classBuilder<
    DescribeAggregateComplianceByConformancePacksCommandInput,
    DescribeAggregateComplianceByConformancePacksCommandOutput,
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
  .s("StarlingDoveService", "DescribeAggregateComplianceByConformancePacks", {})
  .n("ConfigServiceClient", "DescribeAggregateComplianceByConformancePacksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAggregateComplianceByConformancePacksCommand)
  .de(de_DescribeAggregateComplianceByConformancePacksCommand)
  .build() {}
