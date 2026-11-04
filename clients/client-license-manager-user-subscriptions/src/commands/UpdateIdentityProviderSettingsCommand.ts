// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIdentityProviderSettingsRequest, UpdateIdentityProviderSettingsResponse } from "../models/models_0";
import { UpdateIdentityProviderSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateIdentityProviderSettingsCommand}.
 */
export interface UpdateIdentityProviderSettingsCommandInput extends UpdateIdentityProviderSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIdentityProviderSettingsCommand}.
 */
export interface UpdateIdentityProviderSettingsCommandOutput extends UpdateIdentityProviderSettingsResponse, __MetadataBearer {}

/**
 * Updates additional product configuration settings for the registered identity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, UpdateIdentityProviderSettingsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, UpdateIdentityProviderSettingsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // UpdateIdentityProviderSettingsRequest
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
 *   Product: "STRING_VALUE",
 *   IdentityProviderArn: "STRING_VALUE",
 *   UpdateSettings: { // UpdateSettings
 *     AddSubnets: [ // required
 *       "STRING_VALUE",
 *     ],
 *     RemoveSubnets: [ // required
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateIdentityProviderSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateIdentityProviderSettingsResponse
 * //   IdentityProviderSummary: { // IdentityProviderSummary
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
 * //     Settings: { // Settings
 * //       Subnets: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupId: "STRING_VALUE", // required
 * //     },
 * //     Product: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     IdentityProviderArn: "STRING_VALUE",
 * //     FailureMessage: "STRING_VALUE",
 * //     OwnerAccountId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateIdentityProviderSettingsCommandInput - {@link UpdateIdentityProviderSettingsCommandInput}
 * @returns {@link UpdateIdentityProviderSettingsCommandOutput}
 * @see {@link UpdateIdentityProviderSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateIdentityProviderSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling. Retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link LicenseManagerUserSubscriptionsServiceException}
 *
 * Base exception class for all service exceptions from LicenseManagerUserSubscriptions service.
 *
 * @public
 */
export class UpdateIdentityProviderSettingsCommand extends command<UpdateIdentityProviderSettingsCommandInput, UpdateIdentityProviderSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIdentityProviderSettings",
  UpdateIdentityProviderSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIdentityProviderSettingsRequest;
      output: UpdateIdentityProviderSettingsResponse;
    };
    sdk: {
      input: UpdateIdentityProviderSettingsCommandInput;
      output: UpdateIdentityProviderSettingsCommandOutput;
    };
  };
}
