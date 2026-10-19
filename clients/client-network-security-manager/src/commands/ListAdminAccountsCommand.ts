// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAdminAccountsRequest, ListAdminAccountsResponse } from "../models/models_0";
import { ListAdminAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAdminAccountsCommand}.
 */
export interface ListAdminAccountsCommandInput extends ListAdminAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListAdminAccountsCommand}.
 */
export interface ListAdminAccountsCommandOutput extends ListAdminAccountsResponse, __MetadataBearer {}

/**
 * <p>Lists the AWS Network Security Manager administrator accounts in the organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkSecurityManagerClient, ListAdminAccountsCommand } from "@aws-sdk/client-network-security-manager"; // ES Modules import
 * // const { NetworkSecurityManagerClient, ListAdminAccountsCommand } = require("@aws-sdk/client-network-security-manager"); // CommonJS import
 * // import type { NetworkSecurityManagerClientConfig } from "@aws-sdk/client-network-security-manager";
 * const config = {}; // type is NetworkSecurityManagerClientConfig
 * const client = new NetworkSecurityManagerClient(config);
 * const input = { // ListAdminAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAdminAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAdminAccountsResponse
 * //   nextToken: "STRING_VALUE",
 * //   adminAccounts: [ // AdminAccountSummaryList // required
 * //     { // AdminAccountSummary
 * //       accountId: "STRING_VALUE", // required
 * //       priority: Number("int"),
 * //       name: "STRING_VALUE",
 * //       email: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAdminAccountsCommandInput - {@link ListAdminAccountsCommandInput}
 * @returns {@link ListAdminAccountsCommandOutput}
 * @see {@link ListAdminAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAdminAccountsCommandOutput} for command's `response` shape.
 * @see {@link NetworkSecurityManagerClientResolvedConfig | config} for NetworkSecurityManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an internal error in the service. This is a retryable error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Reduce your request rate and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For details, see the <code>reason</code> and <code>fieldList</code> members of the response.</p>
 *
 * @throws {@link NetworkSecurityManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkSecurityManager service.</p>
 *
 *
 * @example List administrator accounts
 * ```javascript
 * // Lists the Network Security Manager administrator accounts for the organization.
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListAdminAccountsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   adminAccounts: [
 *     {
 *       accountId: "234567890123",
 *       priority: 2
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAdminAccountsCommand extends command<ListAdminAccountsCommandInput, ListAdminAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListAdminAccounts",
  ListAdminAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdminAccountsRequest;
      output: ListAdminAccountsResponse;
    };
    sdk: {
      input: ListAdminAccountsCommandInput;
      output: ListAdminAccountsCommandOutput;
    };
  };
}
