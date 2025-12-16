// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateUserPoolDomainRequest, CreateUserPoolDomainResponse } from "../models/models_0";
import { CreateUserPoolDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUserPoolDomainCommand}.
 */
export interface CreateUserPoolDomainCommandInput extends CreateUserPoolDomainRequest {}
/**
 * @public
 *
 * The output of {@link CreateUserPoolDomainCommand}.
 */
export interface CreateUserPoolDomainCommandOutput extends CreateUserPoolDomainResponse, __MetadataBearer {}

/**
 * <p>A user pool domain hosts managed login, an authorization server and web server for
 *             authentication in your application. This operation creates a new user pool prefix domain
 *             or custom domain and sets the managed login branding version. Set the branding version
 *             to <code>1</code> for hosted UI (classic) or <code>2</code> for managed login. When you
 *             choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia)
 *             Amazon Web Services Region in your request.</p>
 *          <p>Your prefix domain might take up to one minute to take effect. Your custom domain is
 *             online within five minutes, but it can take up to one hour to distribute your SSL
 *             certificate.</p>
 *          <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Configuring a user pool domain</a>.</p>
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
 * import { CognitoIdentityProviderClient, CreateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CreateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CreateUserPoolDomainRequest
 *   Domain: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   ManagedLoginVersion: Number("int"),
 *   CustomDomainConfig: { // CustomDomainConfigType
 *     CertificateArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserPoolDomainResponse
 * //   ManagedLoginVersion: Number("int"),
 * //   CloudFrontDomain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUserPoolDomainCommandInput - {@link CreateUserPoolDomainCommandInput}
 * @returns {@link CreateUserPoolDomainCommandOutput}
 * @see {@link CreateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *  <p>This exception is thrown when a feature you attempted to configure isn't
 *             available in your current feature plan.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class CreateUserPoolDomainCommand extends $Command
  .classBuilder<
    CreateUserPoolDomainCommandInput,
    CreateUserPoolDomainCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "CreateUserPoolDomain", {})
  .n("CognitoIdentityProviderClient", "CreateUserPoolDomainCommand")
  .sc(CreateUserPoolDomain$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUserPoolDomainRequest;
      output: CreateUserPoolDomainResponse;
    };
    sdk: {
      input: CreateUserPoolDomainCommandInput;
      output: CreateUserPoolDomainCommandOutput;
    };
  };
}
