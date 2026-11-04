// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeactivateEventSourceRequest } from "../models/models_0";
import { DeactivateEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted.
 *
 * When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.
 *
 * To activate a deactivated partner event source, use [ActivateEventSource](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeactivateEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeactivateEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
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
export class DeactivateEventSourceCommand extends command<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeactivateEventSource",
  DeactivateEventSource$
) {
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
