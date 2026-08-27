// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminDeleteSoftwareTokenRequest, AdminDeleteSoftwareTokenResponse } from "../models/models_0";
import { AdminDeleteSoftwareToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminDeleteSoftwareTokenCommand}.
 */
export interface AdminDeleteSoftwareTokenCommandInput extends AdminDeleteSoftwareTokenRequest {}
/**
 * @public
 *
 * The output of {@link AdminDeleteSoftwareTokenCommand}.
 */
export interface AdminDeleteSoftwareTokenCommandOutput extends AdminDeleteSoftwareTokenResponse, __MetadataBearer {}

/**
 * <p>Deletes a user's registered time-based one-time password (TOTP) multi-factor
 *             authentication (MFA) factor, also known as a software token. After this operation, the
 *             user can no longer sign in with TOTP MFA, and can register a new TOTP factor with
 *                 <code>AssociateSoftwareToken</code>. Use this operation when a user loses access to
 *             their TOTP-generating device, for example, a lost or reset phone, and needs to register
 *             a new one.</p>
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
 * import { CognitoIdentityProviderClient, AdminDeleteSoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminDeleteSoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminDeleteSoftwareTokenRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminDeleteSoftwareTokenCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminDeleteSoftwareTokenCommandInput - {@link AdminDeleteSoftwareTokenCommandInput}
 * @returns {@link AdminDeleteSoftwareTokenCommandOutput}
 * @see {@link AdminDeleteSoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link AdminDeleteSoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link OperationNotEnabledException} (client fault)
 *  <p>This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
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
export class AdminDeleteSoftwareTokenCommand extends command<AdminDeleteSoftwareTokenCommandInput, AdminDeleteSoftwareTokenCommandOutput>(
  _ep0,
  _mw0,
  "AdminDeleteSoftwareToken",
  AdminDeleteSoftwareToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminDeleteSoftwareTokenRequest;
      output: {};
    };
    sdk: {
      input: AdminDeleteSoftwareTokenCommandInput;
      output: AdminDeleteSoftwareTokenCommandOutput;
    };
  };
}
