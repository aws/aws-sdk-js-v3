// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeConfigRuleEvaluationStatusRequest,
  DescribeConfigRuleEvaluationStatusResponse,
} from "../models/models_0";
import { DescribeConfigRuleEvaluationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeConfigRuleEvaluationStatusCommand}.
 */
export interface DescribeConfigRuleEvaluationStatusCommandInput extends DescribeConfigRuleEvaluationStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeConfigRuleEvaluationStatusCommand}.
 */
export interface DescribeConfigRuleEvaluationStatusCommandOutput extends DescribeConfigRuleEvaluationStatusResponse, __MetadataBearer {}

/**
 * <p>Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke
 * 			the rule, and the related error for the last failure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeConfigRuleEvaluationStatusCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeConfigRuleEvaluationStatusRequest
 *   ConfigRuleNames: [ // ConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeConfigRuleEvaluationStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeConfigRuleEvaluationStatusResponse
 * //   ConfigRulesEvaluationStatus: [ // ConfigRuleEvaluationStatusList
 * //     { // ConfigRuleEvaluationStatus
 * //       ConfigRuleName: "STRING_VALUE",
 * //       ConfigRuleArn: "STRING_VALUE",
 * //       ConfigRuleId: "STRING_VALUE",
 * //       LastSuccessfulInvocationTime: new Date("TIMESTAMP"),
 * //       LastFailedInvocationTime: new Date("TIMESTAMP"),
 * //       LastSuccessfulEvaluationTime: new Date("TIMESTAMP"),
 * //       LastFailedEvaluationTime: new Date("TIMESTAMP"),
 * //       FirstActivatedTime: new Date("TIMESTAMP"),
 * //       LastDeactivatedTime: new Date("TIMESTAMP"),
 * //       LastErrorCode: "STRING_VALUE",
 * //       LastErrorMessage: "STRING_VALUE",
 * //       FirstEvaluationStarted: true || false,
 * //       LastDebugLogDeliveryStatus: "STRING_VALUE",
 * //       LastDebugLogDeliveryStatusReason: "STRING_VALUE",
 * //       LastDebugLogDeliveryTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeConfigRuleEvaluationStatusCommandInput - {@link DescribeConfigRuleEvaluationStatusCommandInput}
 * @returns {@link DescribeConfigRuleEvaluationStatusCommandOutput}
 * @see {@link DescribeConfigRuleEvaluationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigRuleEvaluationStatusCommandOutput} for command's `response` shape.
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
export class DescribeConfigRuleEvaluationStatusCommand extends $Command
  .classBuilder<
    DescribeConfigRuleEvaluationStatusCommandInput,
    DescribeConfigRuleEvaluationStatusCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeConfigRuleEvaluationStatus", {})
  .n("ConfigServiceClient", "DescribeConfigRuleEvaluationStatusCommand")
  .sc(DescribeConfigRuleEvaluationStatus$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeConfigRuleEvaluationStatusRequest;
      output: DescribeConfigRuleEvaluationStatusResponse;
    };
    sdk: {
      input: DescribeConfigRuleEvaluationStatusCommandInput;
      output: DescribeConfigRuleEvaluationStatusCommandOutput;
    };
  };
}
