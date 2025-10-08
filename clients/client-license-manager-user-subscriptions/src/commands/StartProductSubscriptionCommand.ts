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
import {
  StartProductSubscriptionRequest,
  StartProductSubscriptionRequestFilterSensitiveLog,
  StartProductSubscriptionResponse,
} from "../models/models_0";
import { de_StartProductSubscriptionCommand, se_StartProductSubscriptionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartProductSubscriptionCommand}.
 */
export interface StartProductSubscriptionCommandInput extends StartProductSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link StartProductSubscriptionCommand}.
 */
export interface StartProductSubscriptionCommandOutput extends StartProductSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, StartProductSubscriptionCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, StartProductSubscriptionCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // StartProductSubscriptionRequest
 *   Username: "STRING_VALUE", // required
 *   IdentityProvider: { // IdentityProvider Union: only one key present
 *     ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 *       DirectoryId: "STRING_VALUE",
 *       ActiveDirectorySettings: { // ActiveDirectorySettings
 *         DomainName: "STRING_VALUE",
 *         DomainIpv4List: [ // IpV4List
 *           "STRING_VALUE",
 *         ],
 *         DomainIpv6List: [ // IpV6List
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
 *       IsSharedActiveDirectory: true || false,
 *     },
 *   },
 *   Product: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartProductSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // StartProductSubscriptionResponse
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
 * //           DomainIpv6List: [ // IpV6List
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
 * //         IsSharedActiveDirectory: true || false,
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
 * @param StartProductSubscriptionCommandInput - {@link StartProductSubscriptionCommandInput}
 * @returns {@link StartProductSubscriptionCommandOutput}
 * @see {@link StartProductSubscriptionCommandInput} for command's `input` shape.
 * @see {@link StartProductSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (server fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
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
 *
 * @public
 */
export class StartProductSubscriptionCommand extends $Command
  .classBuilder<
    StartProductSubscriptionCommandInput,
    StartProductSubscriptionCommandOutput,
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
  .s("LicenseManagerUserSubscriptions", "StartProductSubscription", {})
  .n("LicenseManagerUserSubscriptionsClient", "StartProductSubscriptionCommand")
  .f(StartProductSubscriptionRequestFilterSensitiveLog, void 0)
  .ser(se_StartProductSubscriptionCommand)
  .de(de_StartProductSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartProductSubscriptionRequest;
      output: StartProductSubscriptionResponse;
    };
    sdk: {
      input: StartProductSubscriptionCommandInput;
      output: StartProductSubscriptionCommandOutput;
    };
  };
}
