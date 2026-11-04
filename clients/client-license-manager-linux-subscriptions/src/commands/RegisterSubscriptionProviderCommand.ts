// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterSubscriptionProviderRequest, RegisterSubscriptionProviderResponse } from "../models/models_0";
import { RegisterSubscriptionProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterSubscriptionProviderCommand}.
 */
export interface RegisterSubscriptionProviderCommandInput extends RegisterSubscriptionProviderRequest {}
/**
 * @public
 *
 * The output of {@link RegisterSubscriptionProviderCommand}.
 */
export interface RegisterSubscriptionProviderCommandOutput extends RegisterSubscriptionProviderResponse, __MetadataBearer {}

/**
 * Register the supported third-party subscription provider for your Bring Your Own License (BYOL) subscription.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, RegisterSubscriptionProviderCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, RegisterSubscriptionProviderCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * // import type { LicenseManagerLinuxSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-linux-subscriptions";
 * const config = {}; // type is LicenseManagerLinuxSubscriptionsClientConfig
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // RegisterSubscriptionProviderRequest
 *   SubscriptionProviderSource: "STRING_VALUE", // required
 *   SecretArn: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new RegisterSubscriptionProviderCommand(input);
 * const response = await client.send(command);
 * // { // RegisterSubscriptionProviderResponse
 * //   SubscriptionProviderSource: "STRING_VALUE",
 * //   SubscriptionProviderArn: "STRING_VALUE",
 * //   SubscriptionProviderStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterSubscriptionProviderCommandInput - {@link RegisterSubscriptionProviderCommandInput}
 * @returns {@link RegisterSubscriptionProviderCommandOutput}
 * @see {@link RegisterSubscriptionProviderCommandInput} for command's `input` shape.
 * @see {@link RegisterSubscriptionProviderCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
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
export class RegisterSubscriptionProviderCommand extends command<RegisterSubscriptionProviderCommandInput, RegisterSubscriptionProviderCommandOutput>(
  _ep0,
  _mw0,
  "RegisterSubscriptionProvider",
  RegisterSubscriptionProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterSubscriptionProviderRequest;
      output: RegisterSubscriptionProviderResponse;
    };
    sdk: {
      input: RegisterSubscriptionProviderCommandInput;
      output: RegisterSubscriptionProviderCommandOutput;
    };
  };
}
