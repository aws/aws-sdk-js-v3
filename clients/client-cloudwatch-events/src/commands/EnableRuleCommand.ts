// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableRuleRequest } from "../models/models_0";
import { EnableRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableRuleCommand}.
 */
export interface EnableRuleCommandInput extends EnableRuleRequest {}
/**
 * @public
 *
 * The output of {@link EnableRuleCommand}.
 */
export interface EnableRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p>
 *          <p>When you enable a rule, incoming events might not immediately start matching to a newly
 *       enabled rule. Allow a short period of time for changes to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, EnableRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, EnableRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // EnableRuleRequest
 *   Name: "STRING_VALUE", // required
 *   EventBusName: "STRING_VALUE",
 * };
 * const command = new EnableRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableRuleCommandInput - {@link EnableRuleCommandInput}
 * @returns {@link EnableRuleCommandOutput}
 * @see {@link EnableRuleCommandInput} for command's `input` shape.
 * @see {@link EnableRuleCommandOutput} for command's `response` shape.
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
export class EnableRuleCommand extends $Command
  .classBuilder<
    EnableRuleCommandInput,
    EnableRuleCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "EnableRule", {})
  .n("CloudWatchEventsClient", "EnableRuleCommand")
  .sc(EnableRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableRuleRequest;
      output: {};
    };
    sdk: {
      input: EnableRuleCommandInput;
      output: EnableRuleCommandOutput;
    };
  };
}
