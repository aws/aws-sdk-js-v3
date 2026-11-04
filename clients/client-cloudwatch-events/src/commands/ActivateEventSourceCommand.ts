// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ActivateEventSourceRequest } from "../models/models_0";
import { ActivateEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ActivateEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ActivateEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
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
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The specified state is not a valid state for an event source.
 *
 * @throws {@link OperationDisabledException} (client fault)
 *
 * The operation you are attempting is not available in this region.
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
export class ActivateEventSourceCommand extends command<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput>(
  _ep0,
  _mw0,
  "ActivateEventSource",
  ActivateEventSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ActivateEventSourceRequest;
      output: {};
    };
    sdk: {
      input: ActivateEventSourceCommandInput;
      output: ActivateEventSourceCommandOutput;
    };
  };
}
