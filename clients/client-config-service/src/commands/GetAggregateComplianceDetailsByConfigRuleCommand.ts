// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAggregateComplianceDetailsByConfigRuleRequest,
  GetAggregateComplianceDetailsByConfigRuleResponse,
} from "../models/models_0";
import {
  de_GetAggregateComplianceDetailsByConfigRuleCommand,
  se_GetAggregateComplianceDetailsByConfigRuleCommand,
} from "../protocols/Aws_json1_1";

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
 *  <p>The requested action is not valid.</p>
 *          <p>For PutStoredQuery, you will see this exception if there are missing required fields or if the input value fails the validation, or if you are trying to create more than 300 queries.</p>
 *          <p>For GetStoredQuery, ListStoredQuery, and DeleteStoredQuery you will see this exception if there are missing required fields or if the input value fails the validation.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "GetAggregateComplianceDetailsByConfigRule", {})
  .n("ConfigServiceClient", "GetAggregateComplianceDetailsByConfigRuleCommand")
  .f(void 0, void 0)
  .ser(se_GetAggregateComplianceDetailsByConfigRuleCommand)
  .de(de_GetAggregateComplianceDetailsByConfigRuleCommand)
  .build() {}
