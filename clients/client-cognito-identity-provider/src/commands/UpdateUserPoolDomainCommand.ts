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
 * <p>Updates the Secure Sockets Layer (SSL) certificate for the custom domain for your user
 *             pool.</p>
 *          <p>You can use this operation to provide the Amazon Resource Name (ARN) of a new
 *             certificate to Amazon Cognito. You can't use it to change the domain for a user pool.</p>
 *          <p>A custom domain is used to host the Amazon Cognito hosted UI, which provides sign-up and
 *             sign-in pages for your application. When you set up a custom domain, you provide a
 *             certificate that you manage with Certificate Manager (ACM). When necessary, you can use this
 *             operation to change the certificate that you applied to your custom domain.</p>
 *          <p>Usually, this is unnecessary following routine certificate renewal with ACM. When
 *             you renew your existing certificate in ACM, the ARN for your certificate remains the
 *             same, and your custom domain uses the new certificate automatically.</p>
 *          <p>However, if you replace your existing certificate with a new one, ACM gives the new
 *             certificate a new ARN. To apply the new certificate to your custom domain, you must
 *             provide this ARN to Amazon Cognito.</p>
 *          <p>When you add your new certificate in ACM, you must choose US East (N. Virginia) as
 *             the Amazon Web Services Region.</p>
 *          <p>After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new
 *             certificate to your custom domain.</p>
 *          <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
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
