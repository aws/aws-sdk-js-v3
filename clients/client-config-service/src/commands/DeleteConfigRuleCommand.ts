// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfigRuleRequest } from "../models/models_0";
import { DeleteConfigRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfigRuleCommand}.
 */
export interface DeleteConfigRuleCommandInput extends DeleteConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConfigRuleCommand}.
 */
export interface DeleteConfigRuleCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified Config rule and all of its evaluation results.
 *
 * Config sets the state of a rule to `DELETING` until the deletion is complete. You cannot update a rule while it is in this state. If you make a `PutConfigRule` or `DeleteConfigRule` request for the rule, you will receive a `ResourceInUseException`.
 *
 * You can check the state of a rule by using the `DescribeConfigRules` request.
 *
 * > **Note:**
 * >
 * > **Recommendation: Consider excluding the `AWS::Config::ResourceCompliance` resource type from recording before deleting rules**
 * >
 * > Deleting rules creates configuration items (CIs) for `AWS::Config::ResourceCompliance` that can affect your costs for the configuration recorder. If you are deleting rules which evaluate a large number of resource types, this can lead to a spike in the number of CIs recorded.
 * >
 * > To avoid the associated costs, you can opt to disable recording for the `AWS::Config::ResourceCompliance` resource type before deleting rules, and re-enable recording after the rules have been deleted.
 * >
 * > However, since deleting rules is an asynchronous process, it might take an hour or more to complete. During the time when recording is disabled for `AWS::Config::ResourceCompliance`, rule evaluations will not be recorded in the associated resource’s history.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteConfigRuleRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigRuleCommandInput - {@link DeleteConfigRuleCommandInput}
 * @returns {@link DeleteConfigRuleCommandOutput}
 * @see {@link DeleteConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *
 * The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * You see this exception in the following cases:
 *
 * - For DeleteConfigRule, Config is deleting this rule. Try your request again later.
 * - For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.
 * - For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.
 * - For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.
 * - For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.
 * - For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 * - For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.
 *
 * @throws {@link ConfigServiceServiceException}
 *
 * Base exception class for all service exceptions from ConfigService service.
 *
 * @public
 */
export class DeleteConfigRuleCommand extends command<DeleteConfigRuleCommandInput, DeleteConfigRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfigRule",
  DeleteConfigRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteConfigRuleCommandInput;
      output: DeleteConfigRuleCommandOutput;
    };
  };
}
