// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ActivateEventSourceRequest } from "../models/models_0";
import { de_ActivateEventSourceCommand, se_ActivateEventSourceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ActivateEventSourceCommand}.
 */
export interface ActivateEventSourceCommandInput extends ActivateEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link ActivateEventSourceCommand}.
 */
export interface ActivateEventSourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Activates a partner event source that has been deactivated. Once activated, your matching
 *       event bus will start receiving events from the event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ActivateEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ActivateEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ActivateEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new ActivateEventSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ActivateEventSourceCommandInput - {@link ActivateEventSourceCommandInput}
 * @returns {@link ActivateEventSourceCommandOutput}
 * @see {@link ActivateEventSourceCommandInput} for command's `input` shape.
 * @see {@link ActivateEventSourceCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ActivateEventSourceCommand extends $Command
  .classBuilder<
    ActivateEventSourceCommandInput,
    ActivateEventSourceCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "ActivateEventSource", {})
  .n("CloudWatchEventsClient", "ActivateEventSourceCommand")
  .f(void 0, void 0)
  .ser(se_ActivateEventSourceCommand)
  .de(de_ActivateEventSourceCommand)
  .build() {}
