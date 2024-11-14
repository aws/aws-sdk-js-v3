// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import { StopProductSubscriptionRequest, StopProductSubscriptionResponse } from "../models/models_0";
import { de_StopProductSubscriptionCommand, se_StopProductSubscriptionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopProductSubscriptionCommand}.
 */
export interface StopProductSubscriptionCommandInput extends StopProductSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StopProductSubscriptionCommand}.
 */
export interface StopProductSubscriptionCommandOutput extends StopProductSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Stops a product subscription for a user with the specified identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, StopProductSubscriptionCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, StopProductSubscriptionCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // StopProductSubscriptionRequest
 *   Username: "STRING_VALUE",
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *       ActiveDirectorySettings: { // ActiveDirectorySettings
 *         DomainName: "STRING_VALUE",
 *         DomainIpv4List: [ // IpV4List
 *           "STRING_VALUE",
 *         ],
 *         DomainCredentialsProvider: { // CredentialsProvider Union: only one key present
 *           SecretsManagerCredentialsProvider: { // SecretsManagerCredentialsProvider
 *             SecretId: "STRING_VALUE",
 *           },
 *         },
 *         DomainNetworkSettings: { // DomainNetworkSettings
 *           Subnets: [ // Subnets // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       ActiveDirectoryType: "STRING_VALUE",
 *     },
 *   },
 *   Product: "STRING_VALUE",
 *   ProductUserArn: "STRING_VALUE",
 *   Domain: "STRING_VALUE",
 * };
 * const command = new StopProductSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // StopProductSubscriptionResponse
 * //   ProductUserSummary: { // ProductUserSummary
 * //     Username: "STRING_VALUE", // required
 * //     Product: "STRING_VALUE", // required
 * //     IdentityProvider: { // IdentityProvider Union: only one key present
 * //       ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //         DirectoryId: "STRING_VALUE",
 * //         ActiveDirectorySettings: { // ActiveDirectorySettings
 * //           DomainName: "STRING_VALUE",
 * //           DomainIpv4List: [ // IpV4List
 * //             "STRING_VALUE",
 * //           ],
 * //           DomainCredentialsProvider: { // CredentialsProvider Union: only one key present
 * //             SecretsManagerCredentialsProvider: { // SecretsManagerCredentialsProvider
 * //               SecretId: "STRING_VALUE",
 * //             },
 * //           },
 * //           DomainNetworkSettings: { // DomainNetworkSettings
 * //             Subnets: [ // Subnets // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         ActiveDirectoryType: "STRING_VALUE",
 * //       },
 * //     },
 * //     Status: "STRING_VALUE", // required
 * //     ProductUserArn: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     SubscriptionStartDate: "STRING_VALUE",
 * //     SubscriptionEndDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StopProductSubscriptionCommandInput - {@link StopProductSubscriptionCommandInput}
 * @returns {@link StopProductSubscriptionCommandOutput}
 * @see {@link StopProductSubscriptionCommandInput} for command's `input` shape.
 * @see {@link StopProductSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the
 * 			resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request failed because a service quota is exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 * <p>Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.</p>
 *
 * @public
 */
export class StopProductSubscriptionCommand extends $Command
  .classBuilder<
    StopProductSubscriptionCommandInput,
    StopProductSubscriptionCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LicenseManagerUserSubscriptions", "StopProductSubscription", {})
  .n("LicenseManagerUserSubscriptionsClient", "StopProductSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_StopProductSubscriptionCommand)
  .de(de_StopProductSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopProductSubscriptionRequest;
      output: StopProductSubscriptionResponse;
    };
    sdk: {
      input: StopProductSubscriptionCommandInput;
      output: StopProductSubscriptionCommandOutput;
    };
  };
}
