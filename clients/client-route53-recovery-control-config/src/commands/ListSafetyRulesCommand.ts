// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSafetyRulesRequest, ListSafetyRulesResponse } from "../models/models_0";
import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { ListSafetyRules } from "../schemas/schemas_2_Control";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSafetyRulesCommand}.
 */
export interface ListSafetyRulesCommandInput extends ListSafetyRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListSafetyRulesCommand}.
 */
export interface ListSafetyRulesCommandOutput extends ListSafetyRulesResponse, __MetadataBearer {}

/**
 * <p>List the safety rules (the assertion rules and gating rules) that you've defined for the routing controls in a control panel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListSafetyRulesCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListSafetyRulesCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // ListSafetyRulesRequest
 *   ControlPanelArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSafetyRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListSafetyRulesResponse
 * //   NextToken: "STRING_VALUE",
 * //   SafetyRules: [ // __listOfRule
 * //     { // Rule
 * //       ASSERTION: { // AssertionRule
 * //         AssertedControls: [ // __listOf__stringMin1Max256PatternAZaZ09 // required
 * //           "STRING_VALUE",
 * //         ],
 * //         ControlPanelArn: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         RuleConfig: { // RuleConfig
 * //           Inverted: true || false, // required
 * //           Threshold: Number("int"), // required
 * //           Type: "ATLEAST" || "AND" || "OR", // required
 * //         },
 * //         SafetyRuleArn: "STRING_VALUE", // required
 * //         Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //         WaitPeriodMs: Number("int"), // required
 * //         Owner: "STRING_VALUE",
 * //       },
 * //       GATING: { // GatingRule
 * //         ControlPanelArn: "STRING_VALUE", // required
 * //         GatingControls: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Name: "STRING_VALUE", // required
 * //         RuleConfig: {
 * //           Inverted: true || false, // required
 * //           Threshold: Number("int"), // required
 * //           Type: "ATLEAST" || "AND" || "OR", // required
 * //         },
 * //         SafetyRuleArn: "STRING_VALUE", // required
 * //         Status: "PENDING" || "DEPLOYED" || "PENDING_DELETION", // required
 * //         TargetControls: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //         WaitPeriodMs: Number("int"), // required
 * //         Owner: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSafetyRulesCommandInput - {@link ListSafetyRulesCommandInput}
 * @returns {@link ListSafetyRulesCommandOutput}
 * @see {@link ListSafetyRulesCommandInput} for command's `input` shape.
 * @see {@link ListSafetyRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>403 response - You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>500 response - InternalServiceError. Temporary service error. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>404 response - MalformedQueryString. The query string contains a syntax error or resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>429 response - LimitExceededException or TooManyRequestsException.</p>
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
export class ListSafetyRulesCommand extends $Command
  .classBuilder<
    ListSafetyRulesCommandInput,
    ListSafetyRulesCommandOutput,
    Route53RecoveryControlConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryControlConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryControlConfig", "ListSafetyRules", {})
  .n("Route53RecoveryControlConfigClient", "ListSafetyRulesCommand")
  .sc(ListSafetyRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSafetyRulesRequest;
      output: ListSafetyRulesResponse;
    };
    sdk: {
      input: ListSafetyRulesCommandInput;
      output: ListSafetyRulesCommandOutput;
    };
  };
}
