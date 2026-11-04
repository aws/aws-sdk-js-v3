// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterSubscriptionProviderRequest, DeregisterSubscriptionProviderResponse } from "../models/models_0";
import { DeregisterSubscriptionProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterSubscriptionProviderCommand}.
 */
export interface DeregisterSubscriptionProviderCommandInput extends DeregisterSubscriptionProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterSubscriptionProviderCommand}.
 */
export interface DeregisterSubscriptionProviderCommandOutput extends DeregisterSubscriptionProviderResponse, __MetadataBearer {}

/**
 * Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions registered to your account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, DeregisterSubscriptionProviderCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, DeregisterSubscriptionProviderCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * // import type { LicenseManagerLinuxSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-linux-subscriptions";
 * const config = {}; // type is LicenseManagerLinuxSubscriptionsClientConfig
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // DeregisterSubscriptionProviderRequest
 *   SubscriptionProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DeregisterSubscriptionProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterSubscriptionProviderCommandInput - {@link DeregisterSubscriptionProviderCommandInput}
 * @returns {@link DeregisterSubscriptionProviderCommandOutput}
 * @see {@link DeregisterSubscriptionProviderCommandInput} for command's `input` shape.
 * @see {@link DeregisterSubscriptionProviderCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Unable to find the requested Amazon Web Services resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerLinuxSubscriptionsServiceException}
 *
 * Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.
 *
 * @public
 */
export class DeregisterSubscriptionProviderCommand extends command<DeregisterSubscriptionProviderCommandInput, DeregisterSubscriptionProviderCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterSubscriptionProvider",
  DeregisterSubscriptionProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterSubscriptionProviderRequest;
      output: {};
    };
    sdk: {
      input: DeregisterSubscriptionProviderCommandInput;
      output: DeregisterSubscriptionProviderCommandOutput;
    };
  };
}
