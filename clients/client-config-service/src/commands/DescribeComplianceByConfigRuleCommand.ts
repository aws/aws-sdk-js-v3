// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeComplianceByConfigRuleRequest, DescribeComplianceByConfigRuleResponse } from "../models/models_0";
import { DescribeComplianceByConfigRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeComplianceByConfigRuleCommand}.
 */
export interface DescribeComplianceByConfigRuleCommandInput extends DescribeComplianceByConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComplianceByConfigRuleCommand}.
 */
export interface DescribeComplianceByConfigRuleCommandOutput extends DescribeComplianceByConfigRuleResponse, __MetadataBearer {}

/**
 * Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this operation returns the number of Amazon Web Services resources that do not comply with the rule.
 *
 * A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.
 *
 * If Config has no current evaluation results for the rule, it returns `INSUFFICIENT_DATA`. This result might indicate one of the following conditions:
 *
 * - Config has never invoked an evaluation for the rule. To check whether it has, use the `DescribeConfigRuleEvaluationStatus` action to get the `LastSuccessfulInvocationTime` and `LastFailedInvocationTime`.
 * - The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the `config:PutEvaluations` permission. If the rule is a custom rule, verify that the Lambda execution role includes the `config:PutEvaluations` permission.
 * - The rule's Lambda function has returned `NOT_APPLICABLE` for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeComplianceByConfigRuleRequest
 *   ConfigRuleNames: [ // ConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 *   ComplianceTypes: [ // ComplianceTypes
 *     "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeComplianceByConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComplianceByConfigRuleResponse
 * //   ComplianceByConfigRules: [ // ComplianceByConfigRules
 * //     { // ComplianceByConfigRule
 * //       ConfigRuleName: "STRING_VALUE",
 * //       Compliance: { // Compliance
 * //         ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //         ComplianceContributorCount: { // ComplianceContributorCount
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeComplianceByConfigRuleCommandInput - {@link DescribeComplianceByConfigRuleCommandInput}
 * @returns {@link DescribeComplianceByConfigRuleCommandOutput}
 * @see {@link DescribeComplianceByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeComplianceByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * The specified next token is not valid. Specify the `nextToken` string that was returned in the previous response to get the next page of results.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more of the specified parameters are not valid. Verify that your parameters are valid and try again.
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *
 * The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class DescribeComplianceByConfigRuleCommand extends command<DescribeComplianceByConfigRuleCommandInput, DescribeComplianceByConfigRuleCommandOutput>(
  _ep0,
  _mw0,
  "DescribeComplianceByConfigRule",
  DescribeComplianceByConfigRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeComplianceByConfigRuleRequest;
      output: DescribeComplianceByConfigRuleResponse;
    };
    sdk: {
      input: DescribeComplianceByConfigRuleCommandInput;
      output: DescribeComplianceByConfigRuleCommandOutput;
    };
  };
}
