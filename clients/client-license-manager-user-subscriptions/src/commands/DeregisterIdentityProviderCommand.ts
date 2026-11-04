// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeregisterIdentityProviderRequest, DeregisterIdentityProviderResponse } from "../models/models_0";
import { DeregisterIdentityProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterIdentityProviderCommand}.
 */
export interface DeregisterIdentityProviderCommandInput extends DeregisterIdentityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterIdentityProviderCommand}.
 */
export interface DeregisterIdentityProviderCommandOutput extends DeregisterIdentityProviderResponse, __MetadataBearer {}

/**
 * Deregisters the Active Directory identity provider from License Manager user-based subscriptions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, DeregisterIdentityProviderCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, DeregisterIdentityProviderCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // DeregisterIdentityProviderRequest
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
 * };
 * const command = new DeregisterIdentityProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterIdentityProviderResponse
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
 * @param DeregisterIdentityProviderCommandInput - {@link DeregisterIdentityProviderCommandInput}
 * @returns {@link DeregisterIdentityProviderCommandOutput}
 * @see {@link DeregisterIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link DeregisterIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (server fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because a service quota is exceeded.
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
export class DeregisterIdentityProviderCommand extends command<DeregisterIdentityProviderCommandInput, DeregisterIdentityProviderCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterIdentityProvider",
  DeregisterIdentityProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterIdentityProviderRequest;
      output: DeregisterIdentityProviderResponse;
    };
    sdk: {
      input: DeregisterIdentityProviderCommandInput;
      output: DeregisterIdentityProviderCommandOutput;
    };
  };
}
