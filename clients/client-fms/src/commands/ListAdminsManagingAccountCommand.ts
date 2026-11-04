// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAdminsManagingAccountRequest, ListAdminsManagingAccountResponse } from "../models/models_0";
import { ListAdminsManagingAccount$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAdminsManagingAccountCommand}.
 */
export interface ListAdminsManagingAccountCommandInput extends ListAdminsManagingAccountRequest {}
/**
 * @public
 *
 * The output of {@link ListAdminsManagingAccountCommand}.
 */
export interface ListAdminsManagingAccountCommandOutput extends ListAdminsManagingAccountResponse, __MetadataBearer {}

/**
 * Lists the accounts that are managing the specified Organizations member account. This is useful for any member account so that they can view the accounts who are managing their account. This operation only returns the managing administrators that have the requested account within their AdminScope.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListAdminsManagingAccountCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListAdminsManagingAccountCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * // import type { FMSClientConfig } from "@aws-sdk/client-fms";
 * const config = {}; // type is FMSClientConfig
 * const client = new FMSClient(config);
 * const input = { // ListAdminsManagingAccountRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAdminsManagingAccountCommand(input);
 * const response = await client.send(command);
 * // { // ListAdminsManagingAccountResponse
 * //   AdminAccounts: [ // AccountIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAdminsManagingAccountCommandInput - {@link ListAdminsManagingAccountCommandInput}
 * @returns {@link ListAdminsManagingAccountCommandOutput}
 * @see {@link ListAdminsManagingAccountCommandInput} for command's `input` shape.
 * @see {@link ListAdminsManagingAccountCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *
 * The operation failed because of a system problem, even though the request was valid. Retry your request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The parameters of the request were invalid.
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
export class ListAdminsManagingAccountCommand extends command<ListAdminsManagingAccountCommandInput, ListAdminsManagingAccountCommandOutput>(
  _ep0,
  _mw0,
  "ListAdminsManagingAccount",
  ListAdminsManagingAccount$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAdminsManagingAccountRequest;
      output: ListAdminsManagingAccountResponse;
    };
    sdk: {
      input: ListAdminsManagingAccountCommandInput;
      output: ListAdminsManagingAccountCommandOutput;
    };
  };
}
