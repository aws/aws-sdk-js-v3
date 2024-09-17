// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import { DeregisterSubscriptionProviderRequest, DeregisterSubscriptionProviderResponse } from "../models/models_0";
import {
  de_DeregisterSubscriptionProviderCommand,
  se_DeregisterSubscriptionProviderCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DeregisterSubscriptionProviderCommandOutput
  extends DeregisterSubscriptionProviderResponse,
    __MetadataBearer {}

/**
 * <p>Remove a third-party subscription provider from the Bring Your Own License (BYOL) subscriptions
 * 			registered to your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, DeregisterSubscriptionProviderCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, DeregisterSubscriptionProviderCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
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
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to find the requested Amazon Web Services resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerLinuxSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerLinuxSubscriptions service.</p>
 *
 * @public
 */
export class DeregisterSubscriptionProviderCommand extends $Command
  .classBuilder<
    DeregisterSubscriptionProviderCommandInput,
    DeregisterSubscriptionProviderCommandOutput,
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerLinuxSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerLinuxSubscriptions", "DeregisterSubscriptionProvider", {})
  .n("LicenseManagerLinuxSubscriptionsClient", "DeregisterSubscriptionProviderCommand")
  .f(void 0, void 0)
  .ser(se_DeregisterSubscriptionProviderCommand)
  .de(de_DeregisterSubscriptionProviderCommand)
  .build() {
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
