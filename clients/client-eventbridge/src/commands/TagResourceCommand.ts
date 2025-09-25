// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { TagResourceRequest, TagResourceResponse } from "../models/models_0";
import { TagResource } from "../schemas/schemas_18_Rule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TagResourceCommand}.
 */
export interface TagResourceCommandInput extends TagResourceRequest {}
/**
 * @public
 *
 * The output of {@link TagResourceCommand}.
 */
export interface TagResourceCommandOutput extends TagResourceResponse, __MetadataBearer {}

/**
 * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can
 *       help you organize and categorize your resources. You can also use them to scope user
 *       permissions by granting a user permission to access or change only resources with certain tag
 *       values. In EventBridge, rules and event buses can be tagged.</p>
 *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as
 *       strings of characters.</p>
 *          <p>You can use the <code>TagResource</code> action with a resource that already has tags. If
 *       you specify a new tag key, this tag is appended to the list of tags associated with the
 *       resource. If you specify a tag key that is already associated with the resource, the new tag
 *       value that you specify replaces the previous value for that tag.</p>
 *          <p>You can associate as many as 50 tags with a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, TagResourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, TagResourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // TagResourceRequest
 *   ResourceARN: "STRING_VALUE", // required
 *   Tags: [ // TagList // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagResourceCommandInput - {@link TagResourceCommandInput}
 * @returns {@link TagResourceCommandOutput}
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class TagResourceCommand extends $Command
  .classBuilder<
    TagResourceCommandInput,
    TagResourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "TagResource", {})
  .n("EventBridgeClient", "TagResourceCommand")
  .sc(TagResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagResourceRequest;
      output: {};
    };
    sdk: {
      input: TagResourceCommandInput;
      output: TagResourceCommandOutput;
    };
  };
}
