// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeactivateEventSourceRequest } from "../models/models_0";
import { de_DeactivateEventSourceCommand, se_DeactivateEventSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateEventSourceCommand}.
 */
export interface DeactivateEventSourceCommandInput extends DeactivateEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateEventSourceCommand}.
 */
export interface DeactivateEventSourceCommandOutput extends __MetadataBearer {}

/**
 * <p>You can use this operation to temporarily stop receiving events from the specified partner
 *       event source. The matching event bus is not deleted. </p>
 *          <p>When you deactivate a partner event source, the source goes into PENDING state. If it
 *       remains in PENDING state for more than two weeks, it is deleted.</p>
 *          <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeactivateEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeactivateEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DeactivateEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeactivateEventSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateEventSourceCommandInput - {@link DeactivateEventSourceCommandInput}
 * @returns {@link DeactivateEventSourceCommandOutput}
 * @see {@link DeactivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeactivateEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>The specified state is not a valid state for an event source.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
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
export class DeactivateEventSourceCommand extends $Command
  .classBuilder<
    DeactivateEventSourceCommandInput,
    DeactivateEventSourceCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "DeactivateEventSource", {})
  .n("CloudWatchEventsClient", "DeactivateEventSourceCommand")
  .f(void 0, void 0)
  .ser(se_DeactivateEventSourceCommand)
  .de(de_DeactivateEventSourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateEventSourceRequest;
      output: {};
    };
    sdk: {
      input: DeactivateEventSourceCommandInput;
      output: DeactivateEventSourceCommandOutput;
    };
  };
}
