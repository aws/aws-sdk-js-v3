// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeletePartnerEventSourceRequest } from "../models/models_0";
import { DeletePartnerEventSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePartnerEventSourceCommand}.
 */
export interface DeletePartnerEventSourceCommandInput extends DeletePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeletePartnerEventSourceCommand}.
 */
export interface DeletePartnerEventSourceCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation is used by SaaS partners to delete a partner event source. This operation
 *       is not used by Amazon Web Services customers.</p>
 *          <p>When you delete an event source, the status of the corresponding partner event bus in the
 *         Amazon Web Services customer account becomes DELETED.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DeletePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DeletePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // DeletePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 *   Account: "STRING_VALUE", // required
 * };
 * const command = new DeletePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePartnerEventSourceCommandInput - {@link DeletePartnerEventSourceCommandInput}
 * @returns {@link DeletePartnerEventSourceCommandOutput}
 * @see {@link DeletePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerEventSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class DeletePartnerEventSourceCommand extends $Command
  .classBuilder<
    DeletePartnerEventSourceCommandInput,
    DeletePartnerEventSourceCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DeletePartnerEventSource", {})
  .n("EventBridgeClient", "DeletePartnerEventSourceCommand")
  .sc(DeletePartnerEventSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePartnerEventSourceRequest;
      output: {};
    };
    sdk: {
      input: DeletePartnerEventSourceCommandInput;
      output: DeletePartnerEventSourceCommandOutput;
    };
  };
}
