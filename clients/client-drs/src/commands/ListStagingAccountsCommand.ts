// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStagingAccountsRequest, ListStagingAccountsResponse } from "../models/models_0";
import { ListStagingAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListStagingAccountsCommand}.
 */
export interface ListStagingAccountsCommandInput extends ListStagingAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListStagingAccountsCommand}.
 */
export interface ListStagingAccountsCommandOutput extends ListStagingAccountsResponse, __MetadataBearer {}

/**
 * Returns an array of staging accounts for existing extended source servers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ListStagingAccountsCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ListStagingAccountsCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // ListStagingAccountsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListStagingAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListStagingAccountsResponse
 * //   accounts: [ // Accounts
 * //     { // Account
 * //       accountID: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStagingAccountsCommandInput - {@link ListStagingAccountsCommandInput}
 * @returns {@link ListStagingAccountsCommandOutput}
 * @see {@link ListStagingAccountsCommandInput} for command's `input` shape.
 * @see {@link ListStagingAccountsCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class ListStagingAccountsCommand extends command<ListStagingAccountsCommandInput, ListStagingAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListStagingAccounts",
  ListStagingAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStagingAccountsRequest;
      output: ListStagingAccountsResponse;
    };
    sdk: {
      input: ListStagingAccountsCommandInput;
      output: ListStagingAccountsCommandOutput;
    };
  };
}
