// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleResponse,
} from "../models/models_0";
import { GetAggregateComplianceDetailsByConfigRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAggregateComplianceDetailsByConfigRuleCommand}.
 */
export interface GetAggregateComplianceDetailsByConfigRuleCommandInput
  extends GetAggregateComplianceDetailsByConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetAggregateComplianceDetailsByConfigRuleCommand}.
 */
export interface GetAggregateComplianceDetailsByConfigRuleCommandOutput
  extends GetAggregateComplianceDetailsByConfigRuleResponse,
    __MetadataBearer {}

/**
 * <p>Returns the evaluation results for the specified Config
 * 			rule for a specific resource in a rule. The results indicate which
 * 			Amazon Web Services resources were evaluated by the rule, when each resource was
 * 			last evaluated, and whether each resource complies with the rule. </p>
 *          <note>
 *             <p>The results can return an empty result page. But if you
 * 				have a <code>nextToken</code>, the results are displayed on the next
 * 				page.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetAggregateComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetAggregateComplianceDetailsByConfigRuleRequest
 *   ConfigurationAggregatorName: "STRING_VALUE", // required
 *   ConfigRuleName: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE", // required
 *   AwsRegion: "STRING_VALUE", // required
 *   ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetAggregateComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetAggregateComplianceDetailsByConfigRuleResponse
 * //   AggregateEvaluationResults: [ // AggregateEvaluationResultList
 * //     { // AggregateEvaluationResult
 * //       EvaluationResultIdentifier: { // EvaluationResultIdentifier
 * //         EvaluationResultQualifier: { // EvaluationResultQualifier
 * //           ConfigRuleName: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //           EvaluationMode: "DETECTIVE" || "PROACTIVE",
 * //         },
 * //         OrderingTimestamp: new Date("TIMESTAMP"),
 * //         ResourceEvaluationId: "STRING_VALUE",
 * //       },
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //       ResultRecordedTime: new Date("TIMESTAMP"),
 * //       ConfigRuleInvokedTime: new Date("TIMESTAMP"),
 * //       Annotation: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       AwsRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAggregateComplianceDetailsByConfigRuleCommandInput - {@link GetAggregateComplianceDetailsByConfigRuleCommandInput}
 * @returns {@link GetAggregateComplianceDetailsByConfigRuleCommandOutput}
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetAggregateComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetAggregateComplianceDetailsByConfigRuleCommand extends $Command
  .classBuilder<
    GetAggregateComplianceDetailsByConfigRuleCommandInput,
    GetAggregateComplianceDetailsByConfigRuleCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetAggregateComplianceDetailsByConfigRule", {})
  .n("ConfigServiceClient", "GetAggregateComplianceDetailsByConfigRuleCommand")
  .sc(GetAggregateComplianceDetailsByConfigRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAggregateComplianceDetailsByConfigRuleRequest;
      output: GetAggregateComplianceDetailsByConfigRuleResponse;
    };
    sdk: {
      input: GetAggregateComplianceDetailsByConfigRuleCommandInput;
      output: GetAggregateComplianceDetailsByConfigRuleCommandOutput;
    };
  };
}
