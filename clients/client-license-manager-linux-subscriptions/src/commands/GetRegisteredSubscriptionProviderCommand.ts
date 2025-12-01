// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import type {
  GetRegisteredSubscriptionProviderRequest,
  GetRegisteredSubscriptionProviderResponse,
} from "../models/models_0";
import { GetRegisteredSubscriptionProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegisteredSubscriptionProviderCommand}.
 */
export interface GetRegisteredSubscriptionProviderCommandInput extends GetRegisteredSubscriptionProviderRequest {}
/**
 * @public
 *
 * The output of {@link GetRegisteredSubscriptionProviderCommand}.
 */
export interface GetRegisteredSubscriptionProviderCommandOutput
  extends GetRegisteredSubscriptionProviderResponse,
    __MetadataBearer {}

/**
 * <p>Get details for a Bring Your Own License (BYOL) subscription that's registered to your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, GetRegisteredSubscriptionProviderCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, GetRegisteredSubscriptionProviderCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * // import type { LicenseManagerLinuxSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-linux-subscriptions";
 * const config = {}; // type is LicenseManagerLinuxSubscriptionsClientConfig
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // GetRegisteredSubscriptionProviderRequest
 *   SubscriptionProviderArn: "STRING_VALUE", // required
 * };
 * const command = new GetRegisteredSubscriptionProviderCommand(input);
 * const response = await client.send(command);
 * // { // GetRegisteredSubscriptionProviderResponse
 * //   SubscriptionProviderArn: "STRING_VALUE",
 * //   SubscriptionProviderSource: "STRING_VALUE",
 * //   SecretArn: "STRING_VALUE",
 * //   SubscriptionProviderStatus: "STRING_VALUE",
 * //   SubscriptionProviderStatusMessage: "STRING_VALUE",
 * //   LastSuccessfulDataRetrievalTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRegisteredSubscriptionProviderCommandInput - {@link GetRegisteredSubscriptionProviderCommandInput}
 * @returns {@link GetRegisteredSubscriptionProviderCommandOutput}
 * @see {@link GetRegisteredSubscriptionProviderCommandInput} for command's `input` shape.
 * @see {@link GetRegisteredSubscriptionProviderCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetRegisteredSubscriptionProviderCommand extends $Command
  .classBuilder<
    GetRegisteredSubscriptionProviderCommandInput,
    GetRegisteredSubscriptionProviderCommandOutput,
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerLinuxSubscriptionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LicenseManagerLinuxSubscriptions", "GetRegisteredSubscriptionProvider", {})
  .n("LicenseManagerLinuxSubscriptionsClient", "GetRegisteredSubscriptionProviderCommand")
  .sc(GetRegisteredSubscriptionProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegisteredSubscriptionProviderRequest;
      output: GetRegisteredSubscriptionProviderResponse;
    };
    sdk: {
      input: GetRegisteredSubscriptionProviderCommandInput;
      output: GetRegisteredSubscriptionProviderCommandOutput;
    };
  };
}
