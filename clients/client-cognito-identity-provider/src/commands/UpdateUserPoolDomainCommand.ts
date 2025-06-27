// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserPoolDomainRequest, UpdateUserPoolDomainResponse } from "../models/models_1";
import { de_UpdateUserPoolDomainCommand, se_UpdateUserPoolDomainCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserPoolDomainCommand}.
 */
export interface UpdateUserPoolDomainCommandInput extends UpdateUserPoolDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserPoolDomainCommand}.
 */
export interface UpdateUserPoolDomainCommandOutput extends UpdateUserPoolDomainResponse, __MetadataBearer {}

/**
 * <p>A user pool domain hosts managed login, an authorization server and web server for
 *             authentication in your application. This operation updates the branding version for user
 *             pool domains between <code>1</code> for hosted UI (classic) and <code>2</code> for
 *             managed login. It also updates the SSL certificate for user pool custom domains.</p>
 *          <p>Changes to the domain branding version take up to one minute to take effect for a
 *             prefix domain and up to five minutes for a custom domain.</p>
 *          <p>This operation doesn't change the name of your user pool domain. To change your
 *             domain, delete it with <code>DeleteUserPoolDomain</code> and create a new domain with
 *                 <code>CreateUserPoolDomain</code>.</p>
 *          <p>You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM
 *             certificates automatically renew and you user pool can continue to use the same ARN. But
 *             if you generate a new certificate for your custom domain name, replace the original
 *             configuration with the new ARN in this request.</p>
 *          <p>ACM certificates for custom domains must be in the US East (N. Virginia)
 *             Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute
 *             your new certificate to your custom domain.</p>
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
 * import { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateUserPoolDomainRequest
 *   Domain: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   ManagedLoginVersion: Number("int"),
 *   CustomDomainConfig: { // CustomDomainConfigType
 *     CertificateArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UpdateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserPoolDomainResponse
 * //   ManagedLoginVersion: Number("int"),
 * //   CloudFrontDomain: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateUserPoolDomainCommandInput - {@link UpdateUserPoolDomainCommandInput}
 * @returns {@link UpdateUserPoolDomainCommandOutput}
 * @see {@link UpdateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPoolDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class UpdateUserPoolDomainCommand extends $Command
  .classBuilder<
    UpdateUserPoolDomainCommandInput,
    UpdateUserPoolDomainCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "UpdateUserPoolDomain", {})
  .n("CognitoIdentityProviderClient", "UpdateUserPoolDomainCommand")
  .f(void 0, void 0)
  .ser(se_UpdateUserPoolDomainCommand)
  .de(de_UpdateUserPoolDomainCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserPoolDomainRequest;
      output: UpdateUserPoolDomainResponse;
    };
    sdk: {
      input: UpdateUserPoolDomainCommandInput;
      output: UpdateUserPoolDomainCommandOutput;
    };
  };
}
