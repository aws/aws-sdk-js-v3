// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListApplicationAuthenticationMethodsRequest,
  ListApplicationAuthenticationMethodsResponse,
} from "../models/models_0";
import { ListApplicationAuthenticationMethods$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApplicationAuthenticationMethodsCommand}.
 */
export interface ListApplicationAuthenticationMethodsCommandInput extends ListApplicationAuthenticationMethodsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAuthenticationMethodsCommand}.
 */
export interface ListApplicationAuthenticationMethodsCommandOutput extends ListApplicationAuthenticationMethodsResponse, __MetadataBearer {}

/**
 * Lists all of the authentication methods supported by the specified application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAuthenticationMethodsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAuthenticationMethodsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAuthenticationMethodsRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationAuthenticationMethodsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAuthenticationMethodsResponse
 * //   AuthenticationMethods: [ // AuthenticationMethods
 * //     { // AuthenticationMethodItem
 * //       AuthenticationMethodType: "IAM",
 * //       AuthenticationMethod: { // AuthenticationMethod Union: only one key present
 * //         Iam: { // IamAuthenticationMethod
 * //           ActorPolicy: "DOCUMENT_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAuthenticationMethodsCommandInput - {@link ListApplicationAuthenticationMethodsCommandInput}
 * @returns {@link ListApplicationAuthenticationMethodsCommandOutput}
 * @see {@link ListApplicationAuthenticationMethodsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAuthenticationMethodsCommandOutput} for command's `response` shape.
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
export class ListApplicationAuthenticationMethodsCommand extends command<ListApplicationAuthenticationMethodsCommandInput, ListApplicationAuthenticationMethodsCommandOutput>(
  _ep0,
  _mw0,
  "ListApplicationAuthenticationMethods",
  ListApplicationAuthenticationMethods$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationAuthenticationMethodsRequest;
      output: ListApplicationAuthenticationMethodsResponse;
    };
    sdk: {
      input: ListApplicationAuthenticationMethodsCommandInput;
      output: ListApplicationAuthenticationMethodsCommandOutput;
    };
  };
}
