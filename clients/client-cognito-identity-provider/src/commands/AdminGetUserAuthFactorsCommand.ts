// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminGetUserAuthFactorsRequest, AdminGetUserAuthFactorsResponse } from "../models/models_0";
import { AdminGetUserAuthFactors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AdminGetUserAuthFactorsCommand}.
 */
export interface AdminGetUserAuthFactorsCommandInput extends AdminGetUserAuthFactorsRequest {}
/**
 * @public
 *
 * The output of {@link AdminGetUserAuthFactorsCommand}.
 */
export interface AdminGetUserAuthFactorsCommandOutput extends AdminGetUserAuthFactorsResponse, __MetadataBearer {}

/**
 * <p>Lists the authentication options for a user in a user pool. Returns the
 *             following:</p>
 *          <ol>
 *             <li>
 *                <p>The user's multi-factor authentication (MFA) preferences.</p>
 *             </li>
 *             <li>
 *                <p>The user's options for choice-based authentication with the
 *                         <code>USER_AUTH</code> flow.</p>
 *             </li>
 *          </ol>
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
 * import { CognitoIdentityProviderClient, AdminGetUserAuthFactorsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminGetUserAuthFactorsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminGetUserAuthFactorsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminGetUserAuthFactorsCommand(input);
 * const response = await client.send(command);
 * // { // AdminGetUserAuthFactorsResponse
 * //   Username: "STRING_VALUE", // required
 * //   PreferredMfaSetting: "STRING_VALUE",
 * //   UserMFASettingList: [ // UserMFASettingListType
 * //     "STRING_VALUE",
 * //   ],
 * //   ConfiguredUserAuthFactors: [ // ConfiguredUserAuthFactorsListType
 * //     "PASSWORD" || "EMAIL_OTP" || "SMS_OTP" || "WEB_AUTHN" || "SOFTWARE_TOKEN",
 * //   ],
 * // };
 *
 * ```
 *
 * @param AdminGetUserAuthFactorsCommandInput - {@link AdminGetUserAuthFactorsCommandInput}
 * @returns {@link AdminGetUserAuthFactorsCommandOutput}
 * @see {@link AdminGetUserAuthFactorsCommandInput} for command's `input` shape.
 * @see {@link AdminGetUserAuthFactorsCommandOutput} for command's `response` shape.
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
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class AdminGetUserAuthFactorsCommand extends command<AdminGetUserAuthFactorsCommandInput, AdminGetUserAuthFactorsCommandOutput>(
  _ep0,
  _mw0,
  "AdminGetUserAuthFactors",
  AdminGetUserAuthFactors$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminGetUserAuthFactorsRequest;
      output: AdminGetUserAuthFactorsResponse;
    };
    sdk: {
      input: AdminGetUserAuthFactorsCommandInput;
      output: AdminGetUserAuthFactorsCommandOutput;
    };
  };
}
