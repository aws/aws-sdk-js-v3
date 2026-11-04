// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWebAuthnCredentialsRequest, ListWebAuthnCredentialsResponse } from "../models/models_0";
import { ListWebAuthnCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWebAuthnCredentialsCommand}.
 */
export interface ListWebAuthnCredentialsCommandInput extends ListWebAuthnCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebAuthnCredentialsCommand}.
 */
export interface ListWebAuthnCredentialsCommandOutput extends ListWebAuthnCredentialsResponse, __MetadataBearer {}

/**
 * Generates a list of the currently signed-in user's registered passkey, or WebAuthn, credentials.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListWebAuthnCredentialsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListWebAuthnCredentialsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListWebAuthnCredentialsRequest
 *   AccessToken: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWebAuthnCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebAuthnCredentialsResponse
 * //   Credentials: [ // WebAuthnCredentialDescriptionListType // required
 * //     { // WebAuthnCredentialDescription
 * //       CredentialId: "STRING_VALUE", // required
 * //       FriendlyCredentialName: "STRING_VALUE", // required
 * //       RelyingPartyId: "STRING_VALUE", // required
 * //       AuthenticatorAttachment: "STRING_VALUE",
 * //       AuthenticatorTransports: [ // WebAuthnAuthenticatorTransportsList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebAuthnCredentialsCommandInput - {@link ListWebAuthnCredentialsCommandInput}
 * @returns {@link ListWebAuthnCredentialsCommandOutput}
 * @see {@link ListWebAuthnCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListWebAuthnCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * This exception is thrown when a user exceeds the limit for a requested Amazon Web Services resource.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *
 * This exception is thrown when a password reset is required.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class ListWebAuthnCredentialsCommand extends command<ListWebAuthnCredentialsCommandInput, ListWebAuthnCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "ListWebAuthnCredentials",
  ListWebAuthnCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebAuthnCredentialsRequest;
      output: ListWebAuthnCredentialsResponse;
    };
    sdk: {
      input: ListWebAuthnCredentialsCommandInput;
      output: ListWebAuthnCredentialsCommandOutput;
    };
  };
}
