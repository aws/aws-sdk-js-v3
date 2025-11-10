// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSafetyRuleRequest, DescribeSafetyRuleResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { DescribeSafetyRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSafetyRuleCommand}.
 */
export interface DescribeSafetyRuleCommandInput extends DescribeSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSafetyRuleCommand}.
 */
export interface DescribeSafetyRuleCommandOutput extends DescribeSafetyRuleResponse, __MetadataBearer {}

/**
 * <p>Returns information about a safety rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DescribeSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DescribeSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DescribeSafetyRuleRequest
 *   SafetyRuleArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeSafetyRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSafetyRuleResponse
 * //   AssertionRule: { // AssertionRule
 * //     AssertedControls: [ // __listOf__stringMin1Max256PatternAZaZ09 // required
 * //       "STRING_VALUE",
 * //     ],
 * //     ControlPanelArn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     RuleConfig: { // RuleConfig
 * //       Inverted: true || false, // required
 * //       Threshold: Number("int"), // required
 * //       Type: "ATLEAST" || "AND" || "OR", // required
 * //     },
 * //     SafetyRuleArn: "STRING_VALUE", // required
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //     WaitPeriodMs: Number("int"), // required
 * //     Owner: "STRING_VALUE",
 * //   },
 * //   GatingRule: { // GatingRule
 * //     ControlPanelArn: "STRING_VALUE", // required
 * //     GatingControls: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Name: "STRING_VALUE", // required
 * //     RuleConfig: {
 * //       Inverted: true || false, // required
 * //       Threshold: Number("int"), // required
 * //       Type: "ATLEAST" || "AND" || "OR", // required
 * //     },
 * //     SafetyRuleArn: "STRING_VALUE", // required
 * //     Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //     TargetControls: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     WaitPeriodMs: Number("int"), // required
 * //     Owner: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeSafetyRuleCommandInput - {@link DescribeSafetyRuleCommandInput}
 * @returns {@link DescribeSafetyRuleCommandOutput}
 * @see {@link DescribeSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.</p>
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryControlConfig service.</p>
 *
 *
 * @public
 */
export class DescribeSafetyRuleCommand extends $Command
  .classBuilder<
    DescribeSafetyRuleCommandInput,
    DescribeSafetyRuleCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "DescribeSafetyRule", {})
  .n("Route53RecoveryControlConfigClient", "DescribeSafetyRuleCommand")
  .sc(DescribeSafetyRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSafetyRuleRequest;
      output: DescribeSafetyRuleResponse;
    };
    sdk: {
      input: DescribeSafetyRuleCommandInput;
      output: DescribeSafetyRuleCommandOutput;
    };
  };
}
