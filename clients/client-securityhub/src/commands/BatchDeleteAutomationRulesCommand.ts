// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchDeleteAutomationRulesRequest, BatchDeleteAutomationRulesResponse } from "../models/models_2";
import { de_BatchDeleteAutomationRulesCommand, se_BatchDeleteAutomationRulesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteAutomationRulesCommand}.
 */
export interface BatchDeleteAutomationRulesCommandInput extends BatchDeleteAutomationRulesRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteAutomationRulesCommand}.
 */
export interface BatchDeleteAutomationRulesCommandOutput extends BatchDeleteAutomationRulesResponse, __MetadataBearer {}

/**
 * <p>
 *          Deletes one or more automation rules.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchDeleteAutomationRulesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchDeleteAutomationRulesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // BatchDeleteAutomationRulesRequest
 *   AutomationRulesArns: [ // AutomationRulesArnsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchDeleteAutomationRulesCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteAutomationRulesResponse
 * //   ProcessedAutomationRules: [ // AutomationRulesArnsList
 * //     "STRING_VALUE",
 * //   ],
 * //   UnprocessedAutomationRules: [ // UnprocessedAutomationRulesList
 * //     { // UnprocessedAutomationRule
 * //       RuleArn: "STRING_VALUE",
 * //       ErrorCode: Number("int"),
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteAutomationRulesCommandInput - {@link BatchDeleteAutomationRulesCommandInput}
 * @returns {@link BatchDeleteAutomationRulesCommandOutput}
 * @see {@link BatchDeleteAutomationRulesCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteAutomationRulesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To delete one or more automation rules
 * ```javascript
 * // The following example deletes the specified automation rules.
 * const input = {
 *   AutomationRulesArns: [
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *   ]
 * };
 * const command = new BatchDeleteAutomationRulesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProcessedAutomationRules: [
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 *   ],
 *   UnprocessedAutomationRules: [
 *     {
 *       ErrorCode: 500,
 *       ErrorMessage: "InternalException",
 *       RuleArn: "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchDeleteAutomationRulesCommand extends $Command
  .classBuilder<
    BatchDeleteAutomationRulesCommandInput,
    BatchDeleteAutomationRulesCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "BatchDeleteAutomationRules", {})
  .n("SecurityHubClient", "BatchDeleteAutomationRulesCommand")
  .f(void 0, void 0)
  .ser(se_BatchDeleteAutomationRulesCommand)
  .de(de_BatchDeleteAutomationRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteAutomationRulesRequest;
      output: BatchDeleteAutomationRulesResponse;
    };
    sdk: {
      input: BatchDeleteAutomationRulesCommandInput;
      output: BatchDeleteAutomationRulesCommandOutput;
    };
  };
}
