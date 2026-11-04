// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMemberAccountsRequest, ListMemberAccountsResponse } from "../models/models_0";
import { ListMemberAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMemberAccountsCommand}.
 */
export interface ListMemberAccountsCommandInput extends ListMemberAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListMemberAccountsCommand}.
 */
export interface ListMemberAccountsCommandOutput extends ListMemberAccountsResponse, __MetadataBearer {}

/**
 * Returns a `MemberAccounts` object that lists the member accounts in the administrator's Amazon Web Services organization.
 *
 * Either an Firewall Manager administrator or the organization's management account can make this request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListMemberAccountsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListMemberAccountsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListMemberAccountsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMemberAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListMemberAccountsResponse
 * //   MemberAccounts: [ // MemberAccounts
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMemberAccountsCommandInput - {@link ListMemberAccountsCommandInput}
 * @returns {@link ListMemberAccountsCommandOutput}
 * @see {@link ListMemberAccountsCommandInput} for command's `input` shape.
 * @see {@link ListMemberAccountsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link FMSServiceException}
 *
 * Base exception class for all service exceptions from FMS service.
 *
 * @public
 */
export class ListMemberAccountsCommand extends command<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListMemberAccounts",
  ListMemberAccounts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMemberAccountsRequest;
      output: ListMemberAccountsResponse;
    };
    sdk: {
      input: ListMemberAccountsCommandInput;
      output: ListMemberAccountsCommandOutput;
    };
  };
}
