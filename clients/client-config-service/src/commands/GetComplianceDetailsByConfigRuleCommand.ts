// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetComplianceDetailsByConfigRuleRequest,
  GetComplianceDetailsByConfigRuleResponse,
} from "../models/models_0";
import { GetComplianceDetailsByConfigRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetComplianceDetailsByConfigRuleCommand}.
 */
export interface GetComplianceDetailsByConfigRuleCommandInput extends GetComplianceDetailsByConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetComplianceDetailsByConfigRuleCommand}.
 */
export interface GetComplianceDetailsByConfigRuleCommandOutput extends GetComplianceDetailsByConfigRuleResponse, __MetadataBearer {}

/**
 * <p>Returns the evaluation results for the specified Config
 * 			rule. The results indicate which Amazon Web Services resources were evaluated by the
 * 			rule, when each resource was last evaluated, and whether each
 * 			resource complies with the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, GetComplianceDetailsByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // GetComplianceDetailsByConfigRuleRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ComplianceTypes: [ // ComplianceTypes
 *     "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetComplianceDetailsByConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceDetailsByConfigRuleResponse
 * //   EvaluationResults: [ // EvaluationResults
 * //     { // EvaluationResult
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
 * //       ResultToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetComplianceDetailsByConfigRuleCommandInput - {@link GetComplianceDetailsByConfigRuleCommandInput}
 * @returns {@link GetComplianceDetailsByConfigRuleCommandOutput}
 * @see {@link GetComplianceDetailsByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link GetComplianceDetailsByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class GetComplianceDetailsByConfigRuleCommand extends $Command
  .classBuilder<
    GetComplianceDetailsByConfigRuleCommandInput,
    GetComplianceDetailsByConfigRuleCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "GetComplianceDetailsByConfigRule", {})
  .n("ConfigServiceClient", "GetComplianceDetailsByConfigRuleCommand")
  .sc(GetComplianceDetailsByConfigRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComplianceDetailsByConfigRuleRequest;
      output: GetComplianceDetailsByConfigRuleResponse;
    };
    sdk: {
      input: GetComplianceDetailsByConfigRuleCommandInput;
      output: GetComplianceDetailsByConfigRuleCommandOutput;
    };
  };
}
