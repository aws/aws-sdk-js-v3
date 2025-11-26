// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAccountsRequest, ListAccountsResponse } from "../models/models_0";
import { ListAccounts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandInput extends ListAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountsCommand}.
 */
export interface ListAccountsCommandOutput extends ListAccountsResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon Chime accounts under the administrator's AWS account. You can filter accounts
 *             by account name prefix. To find out which Amazon Chime account a user belongs to, you can
 *             filter by the user's email address, which returns one account result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListAccountsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListAccountsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListAccountsRequest
 *   Name: "STRING_VALUE",
 *   UserEmail: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsResponse
 * //   Accounts: [ // AccountList
 * //     { // Account
 * //       AwsAccountId: "STRING_VALUE", // required
 * //       AccountId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       AccountType: "Team" || "EnterpriseDirectory" || "EnterpriseLWA" || "EnterpriseOIDC",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       DefaultLicense: "Basic" || "Plus" || "Pro" || "ProTrial",
 * //       SupportedLicenses: [ // LicenseList
 * //         "Basic" || "Plus" || "Pro" || "ProTrial",
 * //       ],
 * //       AccountStatus: "Suspended" || "Active",
 * //       SigninDelegateGroups: [ // SigninDelegateGroupList
 * //         { // SigninDelegateGroup
 * //           GroupName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountsCommandInput - {@link ListAccountsCommandInput}
 * @returns {@link ListAccountsCommandOutput}
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class ListAccountsCommand extends $Command
  .classBuilder<
    ListAccountsCommandInput,
    ListAccountsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "ListAccounts", {})
  .n("ChimeClient", "ListAccountsCommand")
  .sc(ListAccounts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountsRequest;
      output: ListAccountsResponse;
    };
    sdk: {
      input: ListAccountsCommandInput;
      output: ListAccountsCommandOutput;
    };
  };
}
