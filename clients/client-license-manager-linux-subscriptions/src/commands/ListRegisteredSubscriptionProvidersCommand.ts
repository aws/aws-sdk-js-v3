// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import {
  ListRegisteredSubscriptionProvidersRequest,
  ListRegisteredSubscriptionProvidersResponse,
} from "../models/models_0";
import { ListRegisteredSubscriptionProviders } from "../schemas/schemas_1_Subscription";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRegisteredSubscriptionProvidersCommand}.
 */
export interface ListRegisteredSubscriptionProvidersCommandInput extends ListRegisteredSubscriptionProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListRegisteredSubscriptionProvidersCommand}.
 */
export interface ListRegisteredSubscriptionProvidersCommandOutput
  extends ListRegisteredSubscriptionProvidersResponse,
    __MetadataBearer {}

/**
 * <p>List Bring Your Own License (BYOL) subscription registration resources for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, ListRegisteredSubscriptionProvidersCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, ListRegisteredSubscriptionProvidersCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * // import type { LicenseManagerLinuxSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-linux-subscriptions";
 * const config = {}; // type is LicenseManagerLinuxSubscriptionsClientConfig
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const input = { // ListRegisteredSubscriptionProvidersRequest
 *   SubscriptionProviderSources: [ // SubscriptionProviderSourceList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRegisteredSubscriptionProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListRegisteredSubscriptionProvidersResponse
 * //   RegisteredSubscriptionProviders: [ // RegisteredSubscriptionProviderList
 * //     { // RegisteredSubscriptionProvider
 * //       SubscriptionProviderArn: "STRING_VALUE",
 * //       SubscriptionProviderSource: "STRING_VALUE",
 * //       SecretArn: "STRING_VALUE",
 * //       SubscriptionProviderStatus: "STRING_VALUE",
 * //       SubscriptionProviderStatusMessage: "STRING_VALUE",
 * //       LastSuccessfulDataRetrievalTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRegisteredSubscriptionProvidersCommandInput - {@link ListRegisteredSubscriptionProvidersCommandInput}
 * @returns {@link ListRegisteredSubscriptionProvidersCommandOutput}
 * @see {@link ListRegisteredSubscriptionProvidersCommandInput} for command's `input` shape.
 * @see {@link ListRegisteredSubscriptionProvidersCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
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
export class ListRegisteredSubscriptionProvidersCommand extends $Command
  .classBuilder<
    ListRegisteredSubscriptionProvidersCommandInput,
    ListRegisteredSubscriptionProvidersCommandOutput,
    LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerLinuxSubscriptionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LicenseManagerLinuxSubscriptions", "ListRegisteredSubscriptionProviders", {})
  .n("LicenseManagerLinuxSubscriptionsClient", "ListRegisteredSubscriptionProvidersCommand")
  .sc(ListRegisteredSubscriptionProviders)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegisteredSubscriptionProvidersRequest;
      output: ListRegisteredSubscriptionProvidersResponse;
    };
    sdk: {
      input: ListRegisteredSubscriptionProvidersCommandInput;
      output: ListRegisteredSubscriptionProvidersCommandOutput;
    };
  };
}
