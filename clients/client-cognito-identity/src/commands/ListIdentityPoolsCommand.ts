// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdentityPoolsInput, ListIdentityPoolsResponse } from "../models/models_0";
import { ListIdentityPools$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdentityPoolsCommand}.
 */
export interface ListIdentityPoolsCommandInput extends ListIdentityPoolsInput {}
/**
 * @public
 *
 * The output of {@link ListIdentityPoolsCommand}.
 */
export interface ListIdentityPoolsCommandOutput extends ListIdentityPoolsResponse, __MetadataBearer {}

/**
 * Lists all of the Cognito identity pools registered for your account.
 *
 * You must use Amazon Web Services developer credentials to call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, ListIdentityPoolsCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, ListIdentityPoolsCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // ListIdentityPoolsInput
 *   MaxResults: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIdentityPoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentityPoolsResponse
 * //   IdentityPools: [ // IdentityPoolsList
 * //     { // IdentityPoolShortDescription
 * //       IdentityPoolId: "STRING_VALUE",
 * //       IdentityPoolName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIdentityPoolsCommandInput - {@link ListIdentityPoolsCommandInput}
 * @returns {@link ListIdentityPoolsCommandOutput}
 * @see {@link ListIdentityPoolsCommandInput} for command's `input` shape.
 * @see {@link ListIdentityPoolsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Thrown when the service encounters an error during processing the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Thrown for missing or bad input parameter(s).
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Thrown when a user is not authorized to access the requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when the requested resource (for example, a dataset or record) does not exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Thrown when a request is throttled.
 *
 * @throws {@link CognitoIdentityServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentity service.
 *
 * @public
 */
export class ListIdentityPoolsCommand extends command<ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput>(
  _ep0,
  _mw0,
  "ListIdentityPools",
  ListIdentityPools$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentityPoolsInput;
      output: ListIdentityPoolsResponse;
    };
    sdk: {
      input: ListIdentityPoolsCommandInput;
      output: ListIdentityPoolsCommandOutput;
    };
  };
}
