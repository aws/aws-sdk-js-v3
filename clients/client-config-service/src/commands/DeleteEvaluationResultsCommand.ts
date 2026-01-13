// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteEvaluationResultsRequest, DeleteEvaluationResultsResponse } from "../models/models_0";
import { DeleteEvaluationResults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEvaluationResultsCommand}.
 */
export interface DeleteEvaluationResultsCommandInput extends DeleteEvaluationResultsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEvaluationResultsCommand}.
 */
export interface DeleteEvaluationResultsCommandOutput extends DeleteEvaluationResultsResponse, __MetadataBearer {}

/**
 * <p>Deletes the evaluation results for the specified Config
 * 			rule. You can specify one Config rule per request. After you
 * 			delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating
 * 			your Amazon Web Services resources against the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteEvaluationResultsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteEvaluationResultsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteEvaluationResultsRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEvaluationResultsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEvaluationResultsCommandInput - {@link DeleteEvaluationResultsCommandInput}
 * @returns {@link DeleteEvaluationResultsCommandOutput}
 * @see {@link DeleteEvaluationResultsCommandInput} for command's `input` shape.
 * @see {@link DeleteEvaluationResultsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DeleteEvaluationResultsCommand extends $Command
  .classBuilder<
    DeleteEvaluationResultsCommandInput,
    DeleteEvaluationResultsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteEvaluationResults", {})
  .n("ConfigServiceClient", "DeleteEvaluationResultsCommand")
  .sc(DeleteEvaluationResults$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEvaluationResultsRequest;
      output: {};
    };
    sdk: {
      input: DeleteEvaluationResultsCommandInput;
      output: DeleteEvaluationResultsCommandOutput;
    };
  };
}
