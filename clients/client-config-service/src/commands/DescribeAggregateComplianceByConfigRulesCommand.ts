// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAggregateComplianceByConfigRulesRequest,
  DescribeAggregateComplianceByConfigRulesResponse,
} from "../models/models_0";
import {
  de_DescribeAggregateComplianceByConfigRulesCommand,
  se_DescribeAggregateComplianceByConfigRulesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAggregateComplianceByConfigRulesCommand}.
 */
export interface DescribeAggregateComplianceByConfigRulesCommandInput
  extends DescribeAggregateComplianceByConfigRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAggregateComplianceByConfigRulesCommand}.
 */
export interface DescribeAggregateComplianceByConfigRulesCommandOutput
  extends DescribeAggregateComplianceByConfigRulesResponse,
    __MetadataBearer {}

/**
 * <p>Returns a list of compliant and noncompliant rules with the
 * 			number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results.
 * 			</p>
 *          <note>
 *             <p>The results can return an empty result page, but if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeAggregateComplianceByConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
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
 *  <p>The requested operation is not valid. You will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutStoredQuery.html">PutStoredQuery</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>There are missing required fields.</p>
 *             </li>
 *             <li>
 *                <p>The input value fails the validation.</p>
 *             </li>
 *             <li>
 *                <p>You are trying to create more than 300 queries.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorders.html">DescribeConfigurationRecorders</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DescribeConfigurationRecorderStatus.html">DescribeConfigurationRecorderStatus</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>You have specified more than one configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>You have provided a service principal for service-linked configuration recorder that is not valid.</p>
 *             </li>
 *          </ul>
 *          <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_AssociateResourceTypes.html">AssociateResourceTypes</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DisassociateResourceTypes.html">DisassociateResourceTypes</a>, one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>Your configuraiton recorder has a recording strategy that does not allow the association or disassociation of resource types.</p>
 *             </li>
 *             <li>
 *                <p>One or more of the specified resource types are already associated or disassociated with the configuration recorder.</p>
 *             </li>
 *             <li>
 *                <p>For service-linked configuration recorders, the configuration recorder does not record one or more of the specified resource types.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 * @public
 */
export class DescribeAggregateComplianceByConfigRulesCommand extends $Command
  .classBuilder<
    DescribeAggregateComplianceByConfigRulesCommandInput,
    DescribeAggregateComplianceByConfigRulesCommandOutput,
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
  .s("StarlingDoveService", "DescribeAggregateComplianceByConfigRules", {})
  .n("ConfigServiceClient", "DescribeAggregateComplianceByConfigRulesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAggregateComplianceByConfigRulesCommand)
  .de(de_DescribeAggregateComplianceByConfigRulesCommand)
  .build() {
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
