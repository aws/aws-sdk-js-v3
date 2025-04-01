// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/models_0";
import { de_RemoveTargetsCommand, se_RemoveTargetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveTargetsCommand}.
 */
export interface RemoveTargetsCommandInput extends RemoveTargetsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveTargetsCommand}.
 */
export interface RemoveTargetsCommandOutput extends RemoveTargetsResponse, __MetadataBearer {}

/**
 * <p>Removes the specified targets from the specified rule. When the rule is triggered, those
 *       targets are no longer be invoked.</p>
 *          <note>
 *             <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are
 *         removed from the rule, it means that the target(s) listed in the request are removed.</p>
 *          </note>
 *          <p>When you remove a target, when the associated rule triggers, removed targets might
 *       continue to be invoked. Allow a short period of time for changes to take effect.</p>
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 *          <p>The maximum number of entries per request is 10.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemoveTargetsCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemoveTargetsCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // RemoveTargetsRequest
 *   Rule: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 *   Ids: [ // TargetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   Force: true || false,
 * };
 * const command = new RemoveTargetsCommand(input);
 * const response = await client.send(command);
 * // { // RemoveTargetsResponse
 * //   FailedEntryCount: Number("int"),
 * //   FailedEntries: [ // RemoveTargetsResultEntryList
 * //     { // RemoveTargetsResultEntry
 * //       TargetId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RemoveTargetsCommandInput - {@link RemoveTargetsCommandInput}
 * @returns {@link RemoveTargetsCommandOutput}
 * @see {@link RemoveTargetsCommandInput} for command's `input` shape.
 * @see {@link RemoveTargetsCommandOutput} for command's `response` shape.
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
export class RemoveTargetsCommand extends $Command
  .classBuilder<
    RemoveTargetsCommandInput,
    RemoveTargetsCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "RemoveTargets", {})
  .n("EventBridgeClient", "RemoveTargetsCommand")
  .f(void 0, void 0)
  .ser(se_RemoveTargetsCommand)
  .de(de_RemoveTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveTargetsRequest;
      output: RemoveTargetsResponse;
    };
    sdk: {
      input: RemoveTargetsCommandInput;
      output: RemoveTargetsCommandOutput;
    };
  };
}
