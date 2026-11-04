// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableRuleRequest } from "../models/models_0";
import { EnableRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enables the specified rule. If the rule does not exist, the operation fails.
 *
 * When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.
 *
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
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link ManagedRuleException} (client fault)
 *
 * This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that service. If you see this error in response to `DeleteRule` or `RemoveTargets`, you can use the `Force` parameter in those calls to delete the rule or remove targets from the rule. You cannot modify these managed rules by using `DisableRule`, `EnableRule`, `PutTargets`, `PutRule`, `TagResource`, or `UntagResource`.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link CloudWatchEventsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchEvents service.
 *
 * @public
 */
export class EnableRuleCommand extends command<EnableRuleCommandInput, EnableRuleCommandOutput>(
  _ep0,
  _mw0,
  "EnableRule",
  EnableRule$
) {
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
