// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import type { ListRulesRequest, ListRulesResponse } from "../models/models_0";
import { ListRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRulesCommand}.
 */
export interface ListRulesCommandInput extends ListRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesCommand}.
 */
export interface ListRulesCommandOutput extends ListRulesResponse, __MetadataBearer {}

/**
 * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can
 *       provide a prefix to match to the rule names.</p>
 *          <p>The maximum number of results per page for requests is 100.</p>
 *          <p>ListRules does not list the targets of a rule. To see the targets associated with a rule,
 *       use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, ListRulesCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, ListRulesCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // ListRulesRequest
 *   NamePrefix: "STRING_VALUE",
 *   EventBusName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesResponse
 * //   Rules: [ // RuleResponseList
 * //     { // Rule
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       EventPattern: "STRING_VALUE",
 * //       State: "ENABLED" || "DISABLED" || "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS",
 * //       Description: "STRING_VALUE",
 * //       ScheduleExpression: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       ManagedBy: "STRING_VALUE",
 * //       EventBusName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesCommandInput - {@link ListRulesCommandInput}
 * @returns {@link ListRulesCommandOutput}
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class ListRulesCommand extends $Command
  .classBuilder<
    ListRulesCommandInput,
    ListRulesCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "ListRules", {})
  .n("EventBridgeClient", "ListRulesCommand")
  .sc(ListRules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRulesRequest;
      output: ListRulesResponse;
    };
    sdk: {
      input: ListRulesCommandInput;
      output: ListRulesCommandOutput;
    };
  };
}
