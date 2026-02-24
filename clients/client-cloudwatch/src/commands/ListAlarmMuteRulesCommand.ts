// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAlarmMuteRulesInput, ListAlarmMuteRulesOutput } from "../models/models_0";
import { ListAlarmMuteRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAlarmMuteRulesCommand}.
 */
export interface ListAlarmMuteRulesCommandInput extends ListAlarmMuteRulesInput {}
/**
 * @public
 *
 * The output of {@link ListAlarmMuteRulesCommand}.
 */
export interface ListAlarmMuteRulesCommandOutput extends ListAlarmMuteRulesOutput, __MetadataBearer {}

/**
 * <p>Lists alarm mute rules in your Amazon Web Services account and region.</p>
 *          <p>You can filter the results by alarm name to find all mute rules targeting a specific alarm, or by status to find rules that are scheduled, active, or expired.</p>
 *          <p>This operation supports pagination for accounts with many mute rules. Use the <code>MaxRecords</code> and <code>NextToken</code> parameters to retrieve results in multiple calls.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To list mute rules, you need the <code>cloudwatch:ListAlarmMuteRules</code> permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListAlarmMuteRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListAlarmMuteRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // ListAlarmMuteRulesInput
 *   AlarmName: "STRING_VALUE",
 *   Statuses: [ // AlarmMuteRuleStatuses
 *     "SCHEDULED" || "ACTIVE" || "EXPIRED",
 *   ],
 *   MaxRecords: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAlarmMuteRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAlarmMuteRulesOutput
 * //   AlarmMuteRuleSummaries: [ // AlarmMuteRuleSummaries
 * //     { // AlarmMuteRuleSummary
 * //       AlarmMuteRuleArn: "STRING_VALUE",
 * //       ExpireDate: new Date("TIMESTAMP"),
 * //       Status: "SCHEDULED" || "ACTIVE" || "EXPIRED",
 * //       MuteType: "STRING_VALUE",
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAlarmMuteRulesCommandInput - {@link ListAlarmMuteRulesCommandInput}
 * @returns {@link ListAlarmMuteRulesCommandOutput}
 * @see {@link ListAlarmMuteRulesCommandInput} for command's `input` shape.
 * @see {@link ListAlarmMuteRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class ListAlarmMuteRulesCommand extends $Command
  .classBuilder<
    ListAlarmMuteRulesCommandInput,
    ListAlarmMuteRulesCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "ListAlarmMuteRules", {})
  .n("CloudWatchClient", "ListAlarmMuteRulesCommand")
  .sc(ListAlarmMuteRules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAlarmMuteRulesInput;
      output: ListAlarmMuteRulesOutput;
    };
    sdk: {
      input: ListAlarmMuteRulesCommandInput;
      output: ListAlarmMuteRulesCommandOutput;
    };
  };
}
