// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEventSourceRequest, DeleteEventSourceResponse } from "../models/models_0";
import { DeleteEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEventSourceCommand}.
 */
export interface DeleteEventSourceCommandInput extends DeleteEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventSourceCommand}.
 */
export interface DeleteEventSourceCommandOutput extends DeleteEventSourceResponse, __MetadataBearer {}

/**
 * Deletes an EventSource. Forwarding from its origin stops.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, DeleteEventSourceCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, DeleteEventSourceCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // DeleteEventSourceRequest
 *   EventSourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventSourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventSourceCommandInput - {@link DeleteEventSourceCommandInput}
 * @returns {@link DeleteEventSourceCommandOutput}
 * @see {@link DeleteEventSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  Another change to the resource is already in progress. Retry the request.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
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
export class DeleteEventSourceCommand extends command<DeleteEventSourceCommandInput, DeleteEventSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEventSource",
  DeleteEventSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventSourceRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventSourceCommandInput;
      output: DeleteEventSourceCommandOutput;
    };
  };
}
