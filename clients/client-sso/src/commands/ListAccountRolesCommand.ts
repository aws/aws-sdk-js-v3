// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAccountRolesRequest, ListAccountRolesResponse } from "../models/models_0";
import { ListAccountRoles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAccountRolesCommand}.
 */
export interface ListAccountRolesCommandInput extends ListAccountRolesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccountRolesCommand}.
 */
export interface ListAccountRolesCommandOutput extends ListAccountRolesResponse, __MetadataBearer {}

/**
 * <p>Lists all roles that are assigned to the user for a given AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, ListAccountRolesCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, ListAccountRolesCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * // import type { SSOClientConfig } from "@aws-sdk/client-sso";
 * const config = {}; // type is SSOClientConfig
 * const client = new SSOClient(config);
 * const input = { // ListAccountRolesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accessToken: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new ListAccountRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountRolesResponse
 * //   nextToken: "STRING_VALUE",
 * //   roleList: [ // RoleListType
 * //     { // RoleInfo
 * //       roleName: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccountRolesCommandInput - {@link ListAccountRolesCommandInput}
 * @returns {@link ListAccountRolesCommandOutput}
 * @see {@link ListAccountRolesCommandInput} for command's `input` shape.
 * @see {@link ListAccountRolesCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that a problem occurred with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Indicates that the request is being made too frequently and is more than what the server
 *       can handle.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Indicates that the request is not authorized. This can happen due to an invalid access
 *       token in the request.</p>
 *
 * @throws {@link SSOServiceException}
 * <p>Base exception class for all service exceptions from SSO service.</p>
 *
 *
 * @public
 */
export class ListAccountRolesCommand extends command<ListAccountRolesCommandInput, ListAccountRolesCommandOutput>(
  _ep0,
  _mw0,
  "ListAccountRoles",
  ListAccountRoles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountRolesRequest;
      output: ListAccountRolesResponse;
    };
    sdk: {
      input: ListAccountRolesCommandInput;
      output: ListAccountRolesCommandOutput;
    };
  };
}
