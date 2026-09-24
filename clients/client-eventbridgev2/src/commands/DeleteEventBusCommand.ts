// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { DeleteEventBusRequest, DeleteEventBusResponse } from "../models/models_0";
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
export interface DeleteEventBusCommandOutput extends DeleteEventBusResponse, __MetadataBearer {}

/**
 * Deletes an event bus. Deletion is asynchronous: the bus moves to DELETING and
 * disappears when complete (see the EventBusDeleted waiter). A bus with
 * subscribers or event sources cannot be deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, DeleteEventBusCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, DeleteEventBusCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // DeleteEventBusRequest
 *   EventBusArn: "STRING_VALUE", // required
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
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  Another change to the resource is already in progress. Retry the request.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  The resource is in use and cannot be deleted. For example, an event bus with
 * subscribers or event sources cannot be deleted until they are deleted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller does not have the permissions required to perform the operation.
 * This error is also returned when the operation cannot use the AWS KMS key for
 * the event bus.
 *
 * @throws {@link InternalException} (server fault)
 *  The request failed because of an internal service error. Retry the request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  A request parameter is missing or not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled because it exceeds a request rate limit. Retry the
 * request with backoff.
 *
 * @throws {@link EventBridgeV2ServiceException}
 * <p>Base exception class for all service exceptions from EventBridgeV2 service.</p>
 *
 *
 * @public
 */
export class DeleteEventBusCommand extends command<DeleteEventBusCommandInput, DeleteEventBusCommandOutput>(
  _ep1,
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
