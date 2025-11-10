// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSafetyRuleRequest, UpdateSafetyRuleResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { UpdateSafetyRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSafetyRuleCommand}.
 */
export interface UpdateSafetyRuleCommandInput extends UpdateSafetyRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSafetyRuleCommand}.
 */
export interface UpdateSafetyRuleCommandOutput extends UpdateSafetyRuleResponse, __MetadataBearer {}

/**
 * <p>Update a safety rule (an assertion rule or gating rule). You can only update the name and the waiting period for a safety rule. To make other updates, delete the safety rule and create a new one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, UpdateSafetyRuleCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, UpdateSafetyRuleCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // UpdateSafetyRuleRequest
 *   AssertionRuleUpdate: { // AssertionRuleUpdate
 *     Name: "STRING_VALUE", // required
 *     SafetyRuleArn: "STRING_VALUE", // required
 *     WaitPeriodMs: Number("int"), // required
 *   },
 *   GatingRuleUpdate: { // GatingRuleUpdate
 *     Name: "STRING_VALUE", // required
 *     SafetyRuleArn: "STRING_VALUE", // required
 *     WaitPeriodMs: Number("int"), // required
 *   },
 * };
 * const command = new UpdateSafetyRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSafetyRuleResponse
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
 * @param UpdateSafetyRuleCommandInput - {@link UpdateSafetyRuleCommandInput}
 * @returns {@link UpdateSafetyRuleCommandOutput}
 * @see {@link UpdateSafetyRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSafetyRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
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
export class UpdateSafetyRuleCommand extends $Command
  .classBuilder<
    UpdateSafetyRuleCommandInput,
    UpdateSafetyRuleCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "UpdateSafetyRule", {})
  .n("Route53RecoveryControlConfigClient", "UpdateSafetyRuleCommand")
  .sc(UpdateSafetyRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSafetyRuleRequest;
      output: UpdateSafetyRuleResponse;
    };
    sdk: {
      input: UpdateSafetyRuleCommandInput;
      output: UpdateSafetyRuleCommandOutput;
    };
  };
}
