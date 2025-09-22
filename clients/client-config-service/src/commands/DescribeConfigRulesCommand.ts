// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeConfigRulesRequest, DescribeConfigRulesResponse } from "../models/models_0";
import { DescribeConfigRules } from "../schemas/schemas_15_Compliance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigRulesCommand}.
 */
export interface DescribeConfigRulesCommandInput extends DescribeConfigRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigRulesCommand}.
 */
export interface DescribeConfigRulesCommandOutput extends DescribeConfigRulesResponse, __MetadataBearer {}

/**
 * <p>Returns details about your Config rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigRulesRequest
 *   ConfigRuleNames: [ // ConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Filters: { // DescribeConfigRulesFilters
 *     EvaluationMode: "DETECTIVE" || "PROACTIVE",
 *   },
 * };
 * const command = new DescribeConfigRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigRulesResponse
 * //   ConfigRules: [ // ConfigRules
 * //     { // ConfigRule
 * //       ConfigRuleName: "STRING_VALUE",
 * //       ConfigRuleArn: "STRING_VALUE",
 * //       ConfigRuleId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Scope: { // Scope
 * //         ComplianceResourceTypes: [ // ComplianceResourceTypes
 * //           "STRING_VALUE",
 * //         ],
 * //         TagKey: "STRING_VALUE",
 * //         TagValue: "STRING_VALUE",
 * //         ComplianceResourceId: "STRING_VALUE",
 * //       },
 * //       Source: { // Source
 * //         Owner: "CUSTOM_LAMBDA" || "AWS" || "CUSTOM_POLICY", // required
 * //         SourceIdentifier: "STRING_VALUE",
 * //         SourceDetails: [ // SourceDetails
 * //           { // SourceDetail
 * //             EventSource: "aws.config",
 * //             MessageType: "ConfigurationItemChangeNotification" || "ConfigurationSnapshotDeliveryCompleted" || "ScheduledNotification" || "OversizedConfigurationItemChangeNotification",
 * //             MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //           },
 * //         ],
 * //         CustomPolicyDetails: { // CustomPolicyDetails
 * //           PolicyRuntime: "STRING_VALUE", // required
 * //           PolicyText: "STRING_VALUE", // required
 * //           EnableDebugLogDelivery: true || false,
 * //         },
 * //       },
 * //       InputParameters: "STRING_VALUE",
 * //       MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //       ConfigRuleState: "ACTIVE" || "DELETING" || "DELETING_RESULTS" || "EVALUATING",
 * //       CreatedBy: "STRING_VALUE",
 * //       EvaluationModes: [ // EvaluationModes
 * //         { // EvaluationModeConfiguration
 * //           Mode: "DETECTIVE" || "PROACTIVE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigRulesCommandInput - {@link DescribeConfigRulesCommandInput}
 * @returns {@link DescribeConfigRulesCommandOutput}
 * @see {@link DescribeConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigRulesCommandOutput} for command's `response` shape.
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
export class DescribeConfigRulesCommand extends $Command
  .classBuilder<
    DescribeConfigRulesCommandInput,
    DescribeConfigRulesCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeConfigRules", {})
  .n("ConfigServiceClient", "DescribeConfigRulesCommand")
  .sc(DescribeConfigRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigRulesRequest;
      output: DescribeConfigRulesResponse;
    };
    sdk: {
      input: DescribeConfigRulesCommandInput;
      output: DescribeConfigRulesCommandOutput;
    };
  };
}
