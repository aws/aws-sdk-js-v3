// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AdminDisableProviderForUserRequest, AdminDisableProviderForUserResponse } from "../models/models_0";
import { AdminDisableProviderForUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminDisableProviderForUserCommand}.
 */
export interface AdminDisableProviderForUserCommandInput extends AdminDisableProviderForUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminDisableProviderForUserCommand}.
 */
export interface AdminDisableProviderForUserCommandOutput
  extends AdminDisableProviderForUserResponse,
    __MetadataBearer {}

/**
 * <p>Prevents the user from signing in with the specified external (SAML or social)
 *             identity provider (IdP). If the user that you want to deactivate is a Amazon Cognito user pools
 *             native username + password user, they can't use their password to sign in. If the user
 *             to deactivate is a linked external IdP user, any link between that user and an existing
 *             user is removed. When the external user signs in again, and the user is no longer
 *             attached to the previously linked <code>DestinationUser</code>, the user must create a
 *             new user account.</p>
 *          <p>The value of <code>ProviderName</code> must match the name of a user pool IdP.</p>
 *          <p>To deactivate a local user, set <code>ProviderName</code> to <code>Cognito</code> and
 *             the <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>. The
 *                 <code>ProviderAttributeValue</code> must be user's local username.</p>
 *          <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for
 *             social IdPs. The <code>ProviderAttributeValue</code> must always be the exact subject
 *             that was used when the user was originally linked as a source user.</p>
 *          <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has
 *             not yet been used to sign in, the <code>ProviderAttributeName</code> and
 *                 <code>ProviderAttributeValue</code> must be the same values that were used for the
 *                 <code>SourceUser</code> when the identities were originally linked using <code>
 *                 AdminLinkProviderForUser</code> call. This is also true if the linking was done with
 *                 <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>. If the user
 *             has already signed in, the <code>ProviderAttributeName</code> must be
 *                 <code>Cognito_Subject</code> and <code>ProviderAttributeValue</code> must be the
 *                 <code>NameID</code> from their SAML assertion.</p>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminDisableProviderForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDisableProviderForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminDisableProviderForUserRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   User: { // ProviderUserIdentifierType
 *     ProviderName: "STRING_VALUE",
 *     ProviderAttributeName: "STRING_VALUE",
 *     ProviderAttributeValue: "STRING_VALUE",
 *   },
 * };
 * const command = new AdminDisableProviderForUserCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminDisableProviderForUserCommandInput - {@link AdminDisableProviderForUserCommandInput}
 * @returns {@link AdminDisableProviderForUserCommandOutput}
 * @see {@link AdminDisableProviderForUserCommandInput} for command's `input` shape.
 * @see {@link AdminDisableProviderForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link AliasExistsException} (client fault)
 *  <p>This exception is thrown when a user tries to confirm the account with an email
 *             address or phone number that has already been supplied as an alias for a different user
 *             profile. This exception indicates that an account with this email address or phone
 *             already exists in a user pool that you've configured to use email address or phone
 *             number as a sign-in alias.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class AdminDisableProviderForUserCommand extends $Command
  .classBuilder<
    AdminDisableProviderForUserCommandInput,
    AdminDisableProviderForUserCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "AdminDisableProviderForUser", {})
  .n("CognitoIdentityProviderClient", "AdminDisableProviderForUserCommand")
  .sc(AdminDisableProviderForUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminDisableProviderForUserRequest;
      output: {};
    };
    sdk: {
      input: AdminDisableProviderForUserCommandInput;
      output: AdminDisableProviderForUserCommandOutput;
    };
  };
}
