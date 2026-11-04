// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOrganizationAdminAccountsRequest, ListOrganizationAdminAccountsResponse } from "../models/models_0";
import { ListOrganizationAdminAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListOrganizationAdminAccountsCommandOutput extends ListOrganizationAdminAccountsResponse, __MetadataBearer {}

/**
 * Returns information about the Detective administrator account for an organization. Can only be called by the organization management account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListOrganizationAdminAccountsCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListOrganizationAdminAccountsCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListOrganizationAdminAccountsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOrganizationAdminAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListOrganizationAdminAccountsResponse
 * //   Administrators: [ // AdministratorList
 * //     { // Administrator
 * //       AccountId: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       DelegationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrganizationAdminAccountsCommandInput - {@link ListOrganizationAdminAccountsCommandInput}
 * @returns {@link ListOrganizationAdminAccountsCommandOutput}
 * @see {@link ListOrganizationAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request issuer does not have permission to access this resource or perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request was valid but failed because of a problem with the service.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request cannot be completed because too many other requests are occurring at the same time.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters are invalid.
 *
 * @throws {@link DetectiveServiceException}
 *
 * Base exception class for all service exceptions from Detective service.
 *
 * @public
 */
export class ListOrganizationAdminAccountsCommand extends command<ListOrganizationAdminAccountsCommandInput, ListOrganizationAdminAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListOrganizationAdminAccounts",
  ListOrganizationAdminAccounts$
) {
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
