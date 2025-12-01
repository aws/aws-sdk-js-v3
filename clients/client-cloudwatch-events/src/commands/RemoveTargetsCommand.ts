// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/models_0";
import { RemoveTargets } from "../schemas/schemas_0";

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
 *          <p>When you remove a target, when the associated rule triggers, removed targets might
 *       continue to be invoked. Allow a short period of time for changes to take effect.</p>
 *          <p>This action can partially fail if too many requests are made at the same time. If that
 *       happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in
 *         <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, RemoveTargetsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, RemoveTargetsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
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
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ManagedRuleException} (client fault)
 *  <p>This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that
 *       service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class RemoveTargetsCommand extends $Command
  .classBuilder<
    RemoveTargetsCommandInput,
    RemoveTargetsCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "RemoveTargets", {})
  .n("CloudWatchEventsClient", "RemoveTargetsCommand")
  .sc(RemoveTargets)
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
