// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSubscriptionRequest, UpdateSubscriptionResponse } from "../models/models_0";
import { UpdateSubscription } from "../schemas/schemas_2_Subscription";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p>
 *          <note>
 *             <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account,
 *               regardless of whether the payer account itself is subscribed. </p>
 *          </note>
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
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link LockedSubscriptionException} (client fault)
 *  <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class UpdateSubscriptionCommand extends $Command
  .classBuilder<
    UpdateSubscriptionCommandInput,
    UpdateSubscriptionCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "UpdateSubscription", {})
  .n("ShieldClient", "UpdateSubscriptionCommand")
  .sc(UpdateSubscription)
  .build() {
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
