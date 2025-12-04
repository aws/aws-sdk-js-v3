// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import type { PutPermissionRequest } from "../models/models_0";
import { PutPermission } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandInput extends PutPermissionRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization
 *       to put events to the specified <i>event bus</i>. Amazon EventBridge rules in your account are triggered by these events arriving to an event bus in your
 *       account. </p>
 *          <p>For another account to send events to your account, that external account must have an
 *       EventBridge rule with your account's event bus as a target.</p>
 *          <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run
 *         <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are
 *       members of the same Amazon Web Services organization, you can run <code>PutPermission</code>
 *       once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services
 *       organization ID in <code>Condition</code>, to grant permissions to all accounts in that
 *       organization.</p>
 *          <p>If you grant permissions using an organization, then accounts in that organization must
 *       specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to
 *       add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 *          <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPermissionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutPermissionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // PutPermissionRequest
 *   EventBusName: "STRING_VALUE",
 *   Action: "STRING_VALUE",
 *   Principal: "STRING_VALUE",
 *   StatementId: "STRING_VALUE",
 *   Condition: { // Condition
 *     Type: "STRING_VALUE", // required
 *     Key: "STRING_VALUE", // required
 *     Value: "STRING_VALUE", // required
 *   },
 *   Policy: "STRING_VALUE",
 * };
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionCommandInput - {@link PutPermissionCommandInput}
 * @returns {@link PutPermissionCommandOutput}
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *  <p>The event bus policy is too long. For more information, see the limits.</p>
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
export class PutPermissionCommand extends $Command
  .classBuilder<
    PutPermissionCommandInput,
    PutPermissionCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "PutPermission", {})
  .n("EventBridgeClient", "PutPermissionCommand")
  .sc(PutPermission)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutPermissionRequest;
      output: {};
    };
    sdk: {
      input: PutPermissionCommandInput;
      output: PutPermissionCommandOutput;
    };
  };
}
