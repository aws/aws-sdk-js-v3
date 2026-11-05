// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRolesRequest, ListRolesResponse } from "../models/models_0";
import { ListRoles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRolesCommand}.
 */
export interface ListRolesCommandInput extends ListRolesRequest {}
/**
 * @public
 *
 * The output of {@link ListRolesCommand}.
 */
export interface ListRolesCommandOutput extends ListRolesResponse, __MetadataBearer {}

/**
 * <p>Returns the roles that you are entitled to access within a tenant. The results are paginated. Use a returned role with <code>GetRoleCredentials</code> to obtain temporary credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountAccessRuntimeClient, ListRolesCommand } from "@aws-sdk/client-account-access-runtime"; // ES Modules import
 * // const { AccountAccessRuntimeClient, ListRolesCommand } = require("@aws-sdk/client-account-access-runtime"); // CommonJS import
 * // import type { AccountAccessRuntimeClientConfig } from "@aws-sdk/client-account-access-runtime";
 * const config = {}; // type is AccountAccessRuntimeClientConfig
 * const client = new AccountAccessRuntimeClient(config);
 * const input = { // ListRolesRequest
 *   tenantId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListRolesResponse
 * //   roles: [ // AccessDetailsList // required
 * //     { // AccessDetails
 * //       accountId: "STRING_VALUE", // required
 * //       accountName: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRolesCommandInput - {@link ListRolesCommandInput}
 * @returns {@link ListRolesCommandOutput}
 * @see {@link ListRolesCommandInput} for command's `input` shape.
 * @see {@link ListRolesCommandOutput} for command's `response` shape.
 * @see {@link AccountAccessRuntimeClientResolvedConfig | config} for AccountAccessRuntimeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request. If the problem persists, contact Amazon Web Services Support. This error returns an HTTP 500 status code.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Reduce your request rate, and then retry the request. This error returns an HTTP 429 status code.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The bearer token is missing, invalid, or expired. Obtain a new token, and then retry the request. This error returns an HTTP 401 status code.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is missing a required parameter, or a parameter value doesn't satisfy its constraints, such as its length or pattern. Correct the input, and then retry the request. This error returns an HTTP 400 status code.</p>
 *
 * @throws {@link AccountAccessRuntimeServiceException}
 * <p>Base exception class for all service exceptions from AccountAccessRuntime service.</p>
 *
 *
 * @public
 */
export class ListRolesCommand extends command<ListRolesCommandInput, ListRolesCommandOutput>(
  _ep0,
  _mw0,
  "ListRoles",
  ListRoles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRolesRequest;
      output: ListRolesResponse;
    };
    sdk: {
      input: ListRolesCommandInput;
      output: ListRolesCommandOutput;
    };
  };
}
