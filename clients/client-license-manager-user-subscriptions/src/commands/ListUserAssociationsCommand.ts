// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserAssociationsRequest, ListUserAssociationsResponse } from "../models/models_0";
import { ListUserAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListUserAssociationsCommand}.
 */
export interface ListUserAssociationsCommandInput extends ListUserAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserAssociationsCommand}.
 */
export interface ListUserAssociationsCommandOutput extends ListUserAssociationsResponse, __MetadataBearer {}

/**
 * Lists user associations for an identity provider.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, ListUserAssociationsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, ListUserAssociationsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // ListUserAssociationsRequest
 *   InstanceId: "STRING_VALUE", // required
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
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Attribute: "STRING_VALUE",
 *       Operation: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUserAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserAssociationsResponse
 * //   InstanceUserSummaries: [ // InstanceUserSummaryList
 * //     { // InstanceUserSummary
 * //       Username: "STRING_VALUE", // required
 * //       InstanceId: "STRING_VALUE", // required
 * //       IdentityProvider: { // IdentityProvider Union: only one key present
 * //         ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //           DirectoryId: "STRING_VALUE",
 * //           ActiveDirectorySettings: { // ActiveDirectorySettings
 * //             DomainName: "STRING_VALUE",
 * //             DomainIpv4List: [ // IpV4List
 * //               "STRING_VALUE",
 * //             ],
 * //             DomainIpv6List: [ // IpV6List
 * //               "STRING_VALUE",
 * //             ],
 * //             DomainCredentialsProvider: { // CredentialsProvider Union: only one key present
 * //               SecretsManagerCredentialsProvider: { // SecretsManagerCredentialsProvider
 * //                 SecretId: "STRING_VALUE",
 * //               },
 * //             },
 * //             DomainNetworkSettings: { // DomainNetworkSettings
 * //               Subnets: [ // Subnets // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //           ActiveDirectoryType: "STRING_VALUE",
 * //           IsSharedActiveDirectory: true || false,
 * //         },
 * //       },
 * //       Status: "STRING_VALUE", // required
 * //       InstanceUserArn: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       Domain: "STRING_VALUE",
 * //       AssociationDate: "STRING_VALUE",
 * //       DisassociationDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserAssociationsCommandInput - {@link ListUserAssociationsCommandInput}
 * @returns {@link ListUserAssociationsCommandOutput}
 * @see {@link ListUserAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListUserAssociationsCommandOutput} for command's `response` shape.
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
export class ListUserAssociationsCommand extends command<ListUserAssociationsCommandInput, ListUserAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListUserAssociations",
  ListUserAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserAssociationsRequest;
      output: ListUserAssociationsResponse;
    };
    sdk: {
      input: ListUserAssociationsCommandInput;
      output: ListUserAssociationsCommandOutput;
    };
  };
}
