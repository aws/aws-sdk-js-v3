// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSafetyRuleRequest, CreateSafetyRuleResponse } from "../models/models_0";
import { de_CreateSafetyRuleCommand, se_CreateSafetyRuleCommand } from "../protocols/Aws_restJson1";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSafetyRuleCommand}.
 */
export interface CreateSafetyRuleCommandInput extends CreateSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateSafetyRuleCommand}.
 */
export interface CreateSafetyRuleCommandOutput extends CreateSafetyRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a safety rule in a control panel. Safety rules let you add safeguards around changing routing control states, and for enabling and disabling routing controls, to help prevent unexpected outcomes.</p> <p>There are two types of safety rules: assertion rules and gating rules.</p> <p>Assertion rule: An assertion rule enforces that, when you change a routing control state, that a certain criteria is met. For example, the criteria might be that at least one routing control state is On after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.</p> <p>Gating rule: A gating rule lets you configure a gating routing control as an overall "on/off" switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example by configuring multiple gating routing controls.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html">Safety rules</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, CreateSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, CreateSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // CreateSafetyRuleRequest
 *   AssertionRule: { // NewAssertionRule
 *     AssertedControls: [ // __listOf__stringMin1Max256PatternAZaZ09 // required
 *       "STRING_VALUE",
 *     ],
 *     ControlPanelArn: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     RuleConfig: { // RuleConfig
 *       Inverted: true || false, // required
 *       Threshold: Number("int"), // required
 *       Type: "ATLEAST" || "AND" || "OR", // required
 *     },
 *     WaitPeriodMs: Number("int"), // required
 *   },
 *   ClientToken: "STRING_VALUE",
 *   GatingRule: { // NewGatingRule
 *     ControlPanelArn: "STRING_VALUE", // required
 *     GatingControls: [ // required
 *       "STRING_VALUE",
 *     ],
 *     Name: "STRING_VALUE", // required
 *     RuleConfig: {
 *       Inverted: true || false, // required
 *       Threshold: Number("int"), // required
 *       Type: "ATLEAST" || "AND" || "OR", // required
 *     },
 *     TargetControls: [ // required
 *       "STRING_VALUE",
 *     ],
 *     WaitPeriodMs: Number("int"), // required
 *   },
 *   Tags: { // __mapOf__stringMin0Max256PatternS
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSafetyRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateSafetyRuleResponse
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
 * @param CreateSafetyRuleCommandInput - {@link CreateSafetyRuleCommandInput}
 * @returns {@link CreateSafetyRuleCommandOutput}
 * @see {@link CreateSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
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
export class CreateSafetyRuleCommand extends $Command
  .classBuilder<
    CreateSafetyRuleCommandInput,
    CreateSafetyRuleCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53RecoveryControlConfig", "CreateSafetyRule", {})
  .n("Route53RecoveryControlConfigClient", "CreateSafetyRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateSafetyRuleCommand)
  .de(de_CreateSafetyRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSafetyRuleRequest;
      output: CreateSafetyRuleResponse;
    };
    sdk: {
      input: CreateSafetyRuleCommandInput;
      output: CreateSafetyRuleCommandOutput;
    };
  };
}
