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
import { ListProductSubscriptionsRequest, ListProductSubscriptionsResponse } from "../models/models_0";
import { de_ListProductSubscriptionsCommand, se_ListProductSubscriptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProductSubscriptionsCommand}.
 */
export interface ListProductSubscriptionsCommandInput extends ListProductSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListProductSubscriptionsCommand}.
 */
export interface ListProductSubscriptionsCommandOutput extends ListProductSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Lists the user-based subscription products available from an identity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, ListProductSubscriptionsCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, ListProductSubscriptionsCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // ListProductSubscriptionsRequest
 *   Product: "STRING_VALUE",
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
 * const command = new ListProductSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListProductSubscriptionsResponse
 * //   ProductUserSummaries: [ // ProductUserSummaryList
 * //     { // ProductUserSummary
 * //       Username: "STRING_VALUE", // required
 * //       Product: "STRING_VALUE", // required
 * //       IdentityProvider: { // IdentityProvider Union: only one key present
 * //         ActiveDirectoryIdentityProvider: { // ActiveDirectoryIdentityProvider
 * //           DirectoryId: "STRING_VALUE",
 * //           ActiveDirectorySettings: { // ActiveDirectorySettings
 * //             DomainName: "STRING_VALUE",
 * //             DomainIpv4List: [ // IpV4List
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
 * //         },
 * //       },
 * //       Status: "STRING_VALUE", // required
 * //       ProductUserArn: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       Domain: "STRING_VALUE",
 * //       SubscriptionStartDate: "STRING_VALUE",
 * //       SubscriptionEndDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProductSubscriptionsCommandInput - {@link ListProductSubscriptionsCommandInput}
 * @returns {@link ListProductSubscriptionsCommandOutput}
 * @see {@link ListProductSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListProductSubscriptionsCommandOutput} for command's `response` shape.
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
export class ListProductSubscriptionsCommand extends $Command
  .classBuilder<
    ListProductSubscriptionsCommandInput,
    ListProductSubscriptionsCommandOutput,
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
  .s("LicenseManagerUserSubscriptions", "ListProductSubscriptions", {})
  .n("LicenseManagerUserSubscriptionsClient", "ListProductSubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_ListProductSubscriptionsCommand)
  .de(de_ListProductSubscriptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProductSubscriptionsRequest;
      output: ListProductSubscriptionsResponse;
    };
    sdk: {
      input: ListProductSubscriptionsCommandInput;
      output: ListProductSubscriptionsCommandOutput;
    };
  };
}
