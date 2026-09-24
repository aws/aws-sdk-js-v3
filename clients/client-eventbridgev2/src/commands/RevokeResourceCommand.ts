// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RevokeResourceRequest, RevokeResourceResponse } from "../models/models_0";
import { RevokeResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RevokeResourceCommand}.
 */
export interface RevokeResourceCommandInput extends RevokeResourceRequest {}
/**
 * @public
 *
 * The output of {@link RevokeResourceCommand}.
 */
export interface RevokeResourceCommandOutput extends RevokeResourceResponse, __MetadataBearer {}

/**
 * Revokes a subscriber or an EventSource. The bus owner calls this to withdraw a
 * misbehaving resource attached to their bus. Revocation is terminal: there is no
 * operation that clears it. A revoked resource refuses mutating operations with
 * InvalidStateException; delete stays available for cleanup.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, RevokeResourceCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, RevokeResourceCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // RevokeResourceRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new RevokeResourceCommand(input);
 * const response = await client.send(command);
 * // { // RevokeResourceResponse
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RevokeResourceCommandInput - {@link RevokeResourceCommandInput}
 * @returns {@link RevokeResourceCommandOutput}
 * @see {@link RevokeResourceCommandInput} for command's `input` shape.
 * @see {@link RevokeResourceCommandOutput} for command's `response` shape.
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
export class RevokeResourceCommand extends command<RevokeResourceCommandInput, RevokeResourceCommandOutput>(
  _ep0,
  _mw0,
  "RevokeResource",
  RevokeResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeResourceRequest;
      output: RevokeResourceResponse;
    };
    sdk: {
      input: RevokeResourceCommandInput;
      output: RevokeResourceCommandOutput;
    };
  };
}
