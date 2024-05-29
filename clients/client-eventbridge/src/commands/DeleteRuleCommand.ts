// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteRuleRequest } from "../models/models_0";
import { de_DeleteRuleCommand, se_DeleteRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteRuleCommand}.
 */
export interface DeleteRuleCommandInput extends DeleteRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleCommand}.
 */
export interface DeleteRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified rule.</p>
 *          <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p>
 *          <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow
 *       a short period of time for changes to take effect.</p>
 *          <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you
 *       call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is
 *       returned.</p>
 *          <p>Managed rules are rules created and managed by another Amazon Web Services service on your
 *       behalf. These rules are created by those other Amazon Web Services services to support
 *       functionality in those services. You can delete these rules using the <code>Force</code>
 *       option, but you should do so only if you are sure the other service is not still using that
 *       rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeleteRuleCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeleteRuleCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // DeleteRuleRequest
 *   Name: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   Force: true || false,
 * };
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleCommandInput - {@link DeleteRuleCommandInput}
 * @returns {@link DeleteRuleCommandOutput}
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ManagedRuleException} (client fault)
 *  <p>This rule was created by an Amazon Web Services service on behalf of your account. It is
 *       managed by that service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 * @public
 */
export class DeleteRuleCommand extends $Command
  .classBuilder<
    DeleteRuleCommandInput,
    DeleteRuleCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "DeleteRule", {})
  .n("EventBridgeClient", "DeleteRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRuleCommand)
  .de(de_DeleteRuleCommand)
  .build() {}
