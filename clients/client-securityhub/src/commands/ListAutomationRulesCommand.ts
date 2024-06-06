// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutomationRulesRequest, ListAutomationRulesResponse } from "../models/models_2";
import { de_ListAutomationRulesCommand, se_ListAutomationRulesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutomationRulesCommand}.
 */
export interface ListAutomationRulesCommandInput extends ListAutomationRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListAutomationRulesCommand}.
 */
export interface ListAutomationRulesCommandOutput extends ListAutomationRulesResponse, __MetadataBearer {}

/**
 * <p>
 *          A list of automation rules and their metadata for the calling account.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListAutomationRulesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListAutomationRulesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // ListAutomationRulesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAutomationRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutomationRulesResponse
 * //   AutomationRulesMetadata: [ // AutomationRulesMetadataList
 * //     { // AutomationRulesMetadata
 * //       RuleArn: "STRING_VALUE",
 * //       RuleStatus: "ENABLED" || "DISABLED",
 * //       RuleOrder: Number("int"),
 * //       RuleName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IsTerminal: true || false,
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutomationRulesCommandInput - {@link ListAutomationRulesCommandInput}
 * @returns {@link ListAutomationRulesCommandOutput}
 * @see {@link ListAutomationRulesCommandInput} for command's `input` shape.
 * @see {@link ListAutomationRulesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 * @example To list automation rules
 * ```javascript
 * // The following example lists automation rules and rule metadata in the calling account.
 * const input = {
 *   "MaxResults": 2,
 *   "NextToken": "example-token"
 * };
 * const command = new ListAutomationRulesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutomationRulesMetadata": [
 *     {
 *       "CreatedAt": "2022-08-31T01:52:33.250Z",
 *       "CreatedBy": "AROAJURBUYQQNL5OL2TIM:TEST-16MJ75L9VBK14",
 *       "Description": "IAM.8 is a known issue and can be resolved",
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "RuleName": "sample-rule-name-1",
 *       "RuleOrder": 1,
 *       "RuleStatus": "ENABLED",
 *       "UpdatedAt": "2022-08-31T01:52:33.250Z"
 *     },
 *     {
 *       "CreatedAt": "2022-08-31T01:52:33.250Z",
 *       "CreatedBy": "AROAJURBUYQQNL5OL2TIM:TEST-16MJ75L9VBK14",
 *       "Description": "Lambda.2 is a known issue and can be resolved",
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       "RuleName": "sample-rule-name-2",
 *       "RuleOrder": 2,
 *       "RuleStatus": "ENABLED",
 *       "UpdatedAt": "2022-08-31T01:52:33.250Z"
 *     }
 *   ],
 *   "NextToken": "example-token"
 * }
 * *\/
 * // example id: to-list-automation-rules-1684770582059
 * ```
 *
 */
export class ListAutomationRulesCommand extends $Command
  .classBuilder<
    ListAutomationRulesCommandInput,
    ListAutomationRulesCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListAutomationRules", {})
  .n("SecurityHubClient", "ListAutomationRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListAutomationRulesCommand)
  .de(de_ListAutomationRulesCommand)
  .build() {}
