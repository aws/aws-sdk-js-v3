// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTermsByClientRequest, DescribeTermsByClientResponse } from "../models/models_0";
import { DescribeTermsByClient$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTermsByClientCommand}.
 */
export interface DescribeTermsByClientCommandInput extends DescribeTermsByClientRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTermsByClientCommand}.
 */
export interface DescribeTermsByClientCommandOutput extends DescribeTermsByClientResponse, __MetadataBearer {}

/**
 * <p>Returns details for the terms documents that are associated with an app client,
 *             identified by the app client ID, user pool ID, and terms name. For
 *             more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents">Terms documents</a>.</p>
 *          <p>To call <code>DescribeTermsByClient</code>, you must have the
 *             <code>cognito-idp:DescribeTermsByClient</code> Identity and Access Management (IAM) permission. This
 *             operation additionally validates your permission for
 *             <code>cognito-idp:DescribeTerms</code>, the action for . As a result, an IAM policy that denies
 *             <code>cognito-idp:DescribeTerms</code> also denies requests to
 *             <code>DescribeTermsByClient</code>.</p>
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
 * import { CognitoIdentityProviderClient, DescribeTermsByClientCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeTermsByClientCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeTermsByClientRequest
 *   ClientId: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   TermsName: "STRING_VALUE", // required
 * };
 * const command = new DescribeTermsByClientCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTermsByClientResponse
 * //   Terms: { // TermsType
 * //     TermsId: "STRING_VALUE", // required
 * //     UserPoolId: "STRING_VALUE", // required
 * //     ClientId: "STRING_VALUE", // required
 * //     TermsName: "STRING_VALUE", // required
 * //     TermsSource: "LINK", // required
 * //     Enforcement: "NONE", // required
 * //     Links: { // LinksType // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreationDate: new Date("TIMESTAMP"), // required
 * //     LastModifiedDate: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTermsByClientCommandInput - {@link DescribeTermsByClientCommandInput}
 * @returns {@link DescribeTermsByClientCommandOutput}
 * @see {@link DescribeTermsByClientCommandInput} for command's `input` shape.
 * @see {@link DescribeTermsByClientCommandOutput} for command's `response` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class DescribeTermsByClientCommand extends command<DescribeTermsByClientCommandInput, DescribeTermsByClientCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTermsByClient",
  DescribeTermsByClient$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTermsByClientRequest;
      output: DescribeTermsByClientResponse;
    };
    sdk: {
      input: DescribeTermsByClientCommandInput;
      output: DescribeTermsByClientCommandOutput;
    };
  };
}
