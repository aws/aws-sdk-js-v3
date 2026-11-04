// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOpenIdTokenInput, GetOpenIdTokenResponse } from "../models/models_0";
import { GetOpenIdToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOpenIdTokenCommand}.
 */
export interface GetOpenIdTokenCommandInput extends GetOpenIdTokenInput {}
/**
 * @public
 *
 * The output of {@link GetOpenIdTokenCommand}.
 */
export interface GetOpenIdTokenCommandOutput extends GetOpenIdTokenResponse, __MetadataBearer {}

/**
 * Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by GetId. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.
 *
 * The OpenID token is valid for 10 minutes.
 *
 * This is a public API. You do not need any credentials to call this API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetOpenIdTokenInput
 *   IdentityId: "STRING_VALUE", // required
 *   Logins: { // LoginsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetOpenIdTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetOpenIdTokenResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Token: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpenIdTokenCommandInput - {@link GetOpenIdTokenCommandInput}
 * @returns {@link GetOpenIdTokenCommandOutput}
 * @see {@link GetOpenIdTokenCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link ExternalServiceException} (client fault)
 *
 * An exception thrown when a dependent service such as Facebook or Twitter is not responding
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
 * @throws {@link ResourceConflictException} (client fault)
 *
 * Thrown when a user tries to use a login which is already linked to another account.
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
export class GetOpenIdTokenCommand extends command<GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput>(
  _ep0,
  _mw0,
  "GetOpenIdToken",
  GetOpenIdToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOpenIdTokenInput;
      output: GetOpenIdTokenResponse;
    };
    sdk: {
      input: GetOpenIdTokenCommandInput;
      output: GetOpenIdTokenCommandOutput;
    };
  };
}
