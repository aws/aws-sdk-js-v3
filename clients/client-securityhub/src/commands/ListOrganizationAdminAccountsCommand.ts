// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_2";
import { ListOrganizationAdminAccounts$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOrganizationAdminAccountsCommand}.
 */
export interface ListOrganizationAdminAccountsCommandInput extends ListOrganizationAdminAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListOrganizationAdminAccountsCommand}.
 */
export interface ListOrganizationAdminAccountsCommandOutput
  extends ListOrganizationAdminAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Security Hub administrator accounts. Can only be called by the organization
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListOrganizationAdminAccountsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Feature: "SecurityHub" || "SecurityHubV2",
 * };
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationAdminAccountsResponse
 * //   AdminAccounts: [ // AdminAccounts
 * //     { // AdminAccount
 * //       AccountId: "STRING_VALUE",
 * //       Status: "ENABLED" || "DISABLE_IN_PROGRESS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Feature: "SecurityHub" || "SecurityHubV2",
 * // };
 *
 * ```
 *
 * @param ListOrganizationAdminAccountsCommandInput - {@link ListOrganizationAdminAccountsCommandInput}
 * @returns {@link ListOrganizationAdminAccountsCommandOutput}
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To list administrator acccounts for an organization
 * ```javascript
 * // The following example lists the Security  Hub administrator accounts for an organization. Only the organization management account can call this operation.
 * const input = { /* empty *\/ };
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AdminAccounts: [
 *     {
 *       AccountId: "777788889999"
 *     },
 *     {
 *       Status: "ENABLED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOrganizationAdminAccountsCommand extends $Command
  .classBuilder<
    ListOrganizationAdminAccountsCommandInput,
    ListOrganizationAdminAccountsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "ListOrganizationAdminAccounts", {})
  .n("SecurityHubClient", "ListOrganizationAdminAccountsCommand")
  .sc(ListOrganizationAdminAccounts$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrganizationAdminAccountsRequest;
      output: ListOrganizationAdminAccountsResponse;
    };
    sdk: {
      input: ListOrganizationAdminAccountsCommandInput;
      output: ListOrganizationAdminAccountsCommandOutput;
    };
  };
}
