// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateUserRequest, AssociateUserResponse } from "../models/models_0";
import { AssociateUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateUserCommand}.
 */
export interface AssociateUserCommandInput extends AssociateUserRequest {}
/**
 * @public
 *
 * The output of {@link AssociateUserCommand}.
 */
export interface AssociateUserCommandOutput extends AssociateUserResponse, __MetadataBearer {}

/**
 * Associates the user to an EC2 instance to utilize user-based subscriptions.
 *
 * > **Note:** Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as **Pending** billing status) in Amazon Web Services Billing. For more information, see [Viewing your monthly charges](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html) in the *Amazon Web Services Billing User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, AssociateUserCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, AssociateUserCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // AssociateUserRequest
 *   Username: "STRING_VALUE", // required
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
 *   Domain: "STRING_VALUE",
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new AssociateUserCommand(input);
 * const response = await client.send(command);
 * // { // AssociateUserResponse
 * //   InstanceUserSummary: { // InstanceUserSummary
 * //     Username: "STRING_VALUE", // required
 * //     InstanceId: "STRING_VALUE", // required
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
 * //     InstanceUserArn: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     AssociationDate: "STRING_VALUE",
 * //     DisassociationDate: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateUserCommandInput - {@link AssociateUserCommandInput}
 * @returns {@link AssociateUserCommandOutput}
 * @see {@link AssociateUserCommandInput} for command's `input` shape.
 * @see {@link AssociateUserCommandOutput} for command's `response` shape.
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
export class AssociateUserCommand extends command<AssociateUserCommandInput, AssociateUserCommandOutput>(
  _ep0,
  _mw0,
  "AssociateUser",
  AssociateUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateUserRequest;
      output: AssociateUserResponse;
    };
    sdk: {
      input: AssociateUserCommandInput;
      output: AssociateUserCommandOutput;
    };
  };
}
