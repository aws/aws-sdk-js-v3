// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdentityPoolInput, IdentityPool } from "../models/models_0";
import { CreateIdentityPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdentityPoolCommand}.
 */
export interface CreateIdentityPoolCommandInput extends CreateIdentityPoolInput {}
/**
 * @public
 *
 * The output of {@link CreateIdentityPoolCommand}.
 */
export interface CreateIdentityPoolCommandOutput extends IdentityPool, __MetadataBearer {}

/**
 * Creates a new identity pool. The identity pool is a store of user identity information that is specific to your Amazon Web Services account. The keys for `SupportedLoginProviders` are as follows:
 *
 * - Facebook: `graph.facebook.com`
 * - Google: `accounts.google.com`
 * - Sign in With Apple: `appleid.apple.com`
 * - Amazon: `www.amazon.com`
 * - Twitter: `api.twitter.com`
 * - Digits: `www.digits.com`
 *
 * > **Important:** If you don't provide a value for a parameter, Amazon Cognito sets it to its default value.
 *
 * You must use Amazon Web Services developer credentials to call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, CreateIdentityPoolCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, CreateIdentityPoolCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // CreateIdentityPoolInput
 *   IdentityPoolName: "STRING_VALUE", // required
 *   AllowUnauthenticatedIdentities: true || false, // required
 *   AllowClassicFlow: true || false,
 *   SupportedLoginProviders: { // IdentityProviders
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DeveloperProviderName: "STRING_VALUE",
 *   OpenIdConnectProviderARNs: [ // OIDCProviderList
 *     "STRING_VALUE",
 *   ],
 *   CognitoIdentityProviders: [ // CognitoIdentityProviderList
 *     { // CognitoIdentityProvider
 *       ProviderName: "STRING_VALUE",
 *       ClientId: "STRING_VALUE",
 *       ServerSideTokenCheck: true || false,
 *     },
 *   ],
 *   SamlProviderARNs: [ // SAMLProviderList
 *     "STRING_VALUE",
 *   ],
 *   IdentityPoolTags: { // IdentityPoolTagsType
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIdentityPoolCommand(input);
 * const response = await client.send(command);
 * // { // IdentityPool
 * //   IdentityPoolId: "STRING_VALUE", // required
 * //   IdentityPoolName: "STRING_VALUE", // required
 * //   AllowUnauthenticatedIdentities: true || false, // required
 * //   AllowClassicFlow: true || false,
 * //   SupportedLoginProviders: { // IdentityProviders
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   DeveloperProviderName: "STRING_VALUE",
 * //   OpenIdConnectProviderARNs: [ // OIDCProviderList
 * //     "STRING_VALUE",
 * //   ],
 * //   CognitoIdentityProviders: [ // CognitoIdentityProviderList
 * //     { // CognitoIdentityProvider
 * //       ProviderName: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       ServerSideTokenCheck: true || false,
 * //     },
 * //   ],
 * //   SamlProviderARNs: [ // SAMLProviderList
 * //     "STRING_VALUE",
 * //   ],
 * //   IdentityPoolTags: { // IdentityPoolTagsType
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIdentityPoolCommandInput - {@link CreateIdentityPoolCommandInput}
 * @returns {@link CreateIdentityPoolCommandOutput}
 * @see {@link CreateIdentityPoolCommandInput} for command's `input` shape.
 * @see {@link CreateIdentityPoolCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * Thrown when the total number of user pools has exceeded a preset limit.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Thrown when a user is not authorized to access the requested resource.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * Thrown when a user tries to use a login which is already linked to another account.
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
export class CreateIdentityPoolCommand extends command<CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdentityPool",
  CreateIdentityPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdentityPoolInput;
      output: IdentityPool;
    };
    sdk: {
      input: CreateIdentityPoolCommandInput;
      output: CreateIdentityPoolCommandOutput;
    };
  };
}
