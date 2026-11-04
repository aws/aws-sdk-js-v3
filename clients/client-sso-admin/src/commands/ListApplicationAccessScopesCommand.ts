// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApplicationAccessScopesRequest, ListApplicationAccessScopesResponse } from "../models/models_0";
import { ListApplicationAccessScopes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationAccessScopesCommand}.
 */
export interface ListApplicationAccessScopesCommandInput extends ListApplicationAccessScopesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAccessScopesCommand}.
 */
export interface ListApplicationAccessScopesCommandOutput extends ListApplicationAccessScopesResponse, __MetadataBearer {}

/**
 * Lists the access scopes and authorized targets associated with an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAccessScopesCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAccessScopesCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAccessScopesRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationAccessScopesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAccessScopesResponse
 * //   Scopes: [ // Scopes // required
 * //     { // ScopeDetails
 * //       Scope: "STRING_VALUE", // required
 * //       AuthorizedTargets: [ // ScopeTargets
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAccessScopesCommandInput - {@link ListApplicationAccessScopesCommandInput}
 * @returns {@link ListApplicationAccessScopesCommandOutput}
 * @see {@link ListApplicationAccessScopesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAccessScopesCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class ListApplicationAccessScopesCommand extends command<ListApplicationAccessScopesCommandInput, ListApplicationAccessScopesCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationAccessScopes",
  ListApplicationAccessScopes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationAccessScopesRequest;
      output: ListApplicationAccessScopesResponse;
    };
    sdk: {
      input: ListApplicationAccessScopesCommandInput;
      output: ListApplicationAccessScopesCommandOutput;
    };
  };
}
