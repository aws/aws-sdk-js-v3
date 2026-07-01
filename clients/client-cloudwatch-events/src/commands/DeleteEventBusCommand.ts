// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventBusRequest } from "../models/models_0";
import { DeleteEventBus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventBusCommand}.
 */
export interface DeleteEventBusCommandInput extends DeleteEventBusRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventBusCommand}.
 */
export interface DeleteEventBusCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified custom event bus or partner event bus. All rules associated with
 *       this event bus need to be deleted. You can't delete your account's default event bus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeleteEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeleteEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DeleteEventBusRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventBusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventBusCommandInput - {@link DeleteEventBusCommandInput}
 * @returns {@link DeleteEventBusCommandOutput}
 * @see {@link DeleteEventBusCommandInput} for command's `input` shape.
 * @see {@link DeleteEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class DeleteEventBusCommand extends command<DeleteEventBusCommandInput, DeleteEventBusCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventBus",
  DeleteEventBus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventBusRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventBusCommandInput;
      output: DeleteEventBusCommandOutput;
    };
  };
}
