// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import type { ListInstancesRequest, ListInstancesResponse } from "../models/models_0";
import { ListInstances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandInput extends ListInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstancesCommand}.
 */
export interface ListInstancesCommandOutput extends ListInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists the EC2 instances providing user-based subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, ListInstancesCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, ListInstancesCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * // import type { LicenseManagerUserSubscriptionsClientConfig } from "@aws-sdk/client-license-manager-user-subscriptions";
 * const config = {}; // type is LicenseManagerUserSubscriptionsClientConfig
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const input = { // ListInstancesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Attribute: "STRING_VALUE",
 *       Operation: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstancesResponse
 * //   InstanceSummaries: [ // InstanceSummaryList
 * //     { // InstanceSummary
 * //       InstanceId: "STRING_VALUE", // required
 * //       Status: "STRING_VALUE", // required
 * //       Products: [ // StringList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       LastStatusCheckDate: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstancesCommandInput - {@link ListInstancesCommandInput}
 * @returns {@link ListInstancesCommandOutput}
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
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
export class ListInstancesCommand extends $Command
  .classBuilder<
    ListInstancesCommandInput,
    ListInstancesCommandOutput,
    LicenseManagerUserSubscriptionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerUserSubscriptionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LicenseManagerUserSubscriptions", "ListInstances", {})
  .n("LicenseManagerUserSubscriptionsClient", "ListInstancesCommand")
  .sc(ListInstances$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstancesRequest;
      output: ListInstancesResponse;
    };
    sdk: {
      input: ListInstancesCommandInput;
      output: ListInstancesCommandOutput;
    };
  };
}
