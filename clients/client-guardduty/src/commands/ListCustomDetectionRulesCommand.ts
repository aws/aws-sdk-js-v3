// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomDetectionRulesRequest, ListCustomDetectionRulesResponse } from "../models/models_1";
import { ListCustomDetectionRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCustomDetectionRulesCommand}.
 */
export interface ListCustomDetectionRulesCommandInput extends ListCustomDetectionRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomDetectionRulesCommand}.
 */
export interface ListCustomDetectionRulesCommandOutput extends ListCustomDetectionRulesResponse, __MetadataBearer {}

/**
 * <p>Returns all available custom detection rules in GuardDuty. You can filter the results by data source, severity, tactic, technique, and service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListCustomDetectionRulesCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListCustomDetectionRulesCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListCustomDetectionRulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // DetectionRuleFilterList
 *     { // DetectionRuleFilter
 *       Name: "name" || "description" || "dataSource" || "severity" || "tactic" || "technique" || "service", // required
 *       Values: [ // DetectionRuleFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Condition: "EQUALS" || "CONTAINS",
 *     },
 *   ],
 * };
 * const command = new ListCustomDetectionRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomDetectionRulesResponse
 * //   Rules: [ // RuleSummaryList // required
 * //     { // RuleSummary
 * //       RuleId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW", // required
 * //       DataSource: "CloudTrailManagementEvent", // required
 * //       Tactic: "STRING_VALUE", // required
 * //       Technique: "STRING_VALUE", // required
 * //       Service: "STRING_VALUE", // required
 * //       Language: "SQL",
 * //       Schema: "CloudTrail",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomDetectionRulesCommandInput - {@link ListCustomDetectionRulesCommandInput}
 * @returns {@link ListCustomDetectionRulesCommandOutput}
 * @see {@link ListCustomDetectionRulesCommandInput} for command's `input` shape.
 * @see {@link ListCustomDetectionRulesCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An access denied exception object.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class ListCustomDetectionRulesCommand extends command<ListCustomDetectionRulesCommandInput, ListCustomDetectionRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomDetectionRules",
  ListCustomDetectionRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomDetectionRulesRequest;
      output: ListCustomDetectionRulesResponse;
    };
    sdk: {
      input: ListCustomDetectionRulesCommandInput;
      output: ListCustomDetectionRulesCommandOutput;
    };
  };
}
