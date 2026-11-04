// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountsRequest, ListAccountsResponse } from "../models/models_0";
import { ListAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all AWS accounts assigned to the user. These AWS accounts are assigned by the administrator of the account. For more information, see [Assign User Access](https://docs.aws.amazon.com/singlesignon/latest/userguide/useraccess.html#assignusers) in the *IAM Identity Center User Guide*. This operation returns a paginated response.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, ListAccountsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, ListAccountsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * // import type { SSOClientConfig } from "@aws-sdk/client-sso";
 * const config = {}; // type is SSOClientConfig
 * const client = new SSOClient(config);
 * const input = { // ListAccountsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accessToken: "STRING_VALUE", // required
 * };
 * const command = new ListAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountsResponse
 * //   nextToken: "STRING_VALUE",
 * //   accountList: [ // AccountListType
 * //     { // AccountInfo
 * //       accountId: "STRING_VALUE",
 * //       accountName: "STRING_VALUE",
 * //       emailAddress: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccountsCommandInput - {@link ListAccountsCommandInput}
 * @returns {@link ListAccountsCommandOutput}
 * @see {@link ListAccountsCommandInput} for command's `input` shape.
 * @see {@link ListAccountsCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that a problem occurred with the input to the request. For example, a required parameter might be missing or out of range.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Indicates that the request is being made too frequently and is more than what the server can handle.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * Indicates that the request is not authorized. This can happen due to an invalid access token in the request.
 *
 * @throws {@link SSOServiceException}
 *
 * Base exception class for all service exceptions from SSO service.
 *
 * @public
 */
export class ListAccountsCommand extends command<ListAccountsCommandInput, ListAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListAccounts",
  ListAccounts$
) {
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
