// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
} from "../models/models_0";
import { GetOpenIdTokenForDeveloperIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOpenIdTokenForDeveloperIdentityCommand}.
 */
export interface GetOpenIdTokenForDeveloperIdentityCommandInput extends GetOpenIdTokenForDeveloperIdentityInput {}
/**
 * @public
 *
 * The output of {@link GetOpenIdTokenForDeveloperIdentityCommand}.
 */
export interface GetOpenIdTokenForDeveloperIdentityCommandOutput extends GetOpenIdTokenForDeveloperIdentityResponse, __MetadataBearer {}

/**
 * Registers (or retrieves) a Cognito `IdentityId` and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the `Logins` map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.
 *
 * You can use `GetOpenIdTokenForDeveloperIdentity` to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the `IdentityId` should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing `IdentityId`. This API will create the identity in the specified `IdentityPoolId`.
 *
 * You must use Amazon Web Services developer credentials to call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetOpenIdTokenForDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetOpenIdTokenForDeveloperIdentityInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   Logins: { // LoginsMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   PrincipalTags: { // PrincipalTags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TokenDuration: Number("long"),
 * };
 * const command = new GetOpenIdTokenForDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * // { // GetOpenIdTokenForDeveloperIdentityResponse
 * //   IdentityId: "STRING_VALUE",
 * //   Token: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpenIdTokenForDeveloperIdentityCommandInput - {@link GetOpenIdTokenForDeveloperIdentityCommandInput}
 * @returns {@link GetOpenIdTokenForDeveloperIdentityCommandOutput}
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link GetOpenIdTokenForDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link DeveloperUserAlreadyRegisteredException} (client fault)
 *
 * The provided developer user identifier is already registered with Cognito under a different identity ID.
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
export class GetOpenIdTokenForDeveloperIdentityCommand extends command<GetOpenIdTokenForDeveloperIdentityCommandInput, GetOpenIdTokenForDeveloperIdentityCommandOutput>(
  _ep0,
  _mw0,
  "GetOpenIdTokenForDeveloperIdentity",
  GetOpenIdTokenForDeveloperIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOpenIdTokenForDeveloperIdentityInput;
      output: GetOpenIdTokenForDeveloperIdentityResponse;
    };
    sdk: {
      input: GetOpenIdTokenForDeveloperIdentityCommandInput;
      output: GetOpenIdTokenForDeveloperIdentityCommandOutput;
    };
  };
}
