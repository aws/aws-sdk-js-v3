// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSubscriptionRequest, UpdateSubscriptionResponse } from "../models/models_0";
import { UpdateSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSubscriptionCommand}.
 */
export interface UpdateSubscriptionCommandInput extends UpdateSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriptionCommand}.
 */
export interface UpdateSubscriptionCommandOutput extends UpdateSubscriptionResponse, __MetadataBearer {}

/**
 * Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.
 *
 * > **Note:** For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateSubscriptionCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateSubscriptionCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // UpdateSubscriptionRequest
 *   AutoRenew: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSubscriptionCommandInput - {@link UpdateSubscriptionCommandInput}
 * @returns {@link UpdateSubscriptionCommandOutput}
 * @see {@link UpdateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties.
 *
 * @throws {@link LockedSubscriptionException} (client fault)
 *
 * You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the `AutoRenew` parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change `AutoRenew` prior to that period.
 *
 * @throws {@link OptimisticLockException} (client fault)
 *
 * Exception that indicates that the resource state has been modified by another client. Retrieve the resource and then retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties.
 *
 * @throws {@link ShieldServiceException}
 *
 * Base exception class for all service exceptions from Shield service.
 *
 * @public
 */
export class UpdateSubscriptionCommand extends command<UpdateSubscriptionCommandInput, UpdateSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSubscription",
  UpdateSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: UpdateSubscriptionCommandInput;
      output: UpdateSubscriptionCommandOutput;
    };
  };
}
