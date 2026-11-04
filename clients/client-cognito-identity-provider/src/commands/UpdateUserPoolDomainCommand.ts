// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateUserPoolDomainRequest, UpdateUserPoolDomainResponse } from "../models/models_1";
import { UpdateUserPoolDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation updates the branding version for user pool domains between `1` for hosted UI (classic) and `2` for managed login. It also updates the SSL certificate for user pool custom domains.
 *
 * Changes to the domain branding version take up to one minute to take effect for a prefix domain and up to five minutes for a custom domain.
 *
 * This operation doesn't change the name of your user pool domain. To change your domain, delete it with `DeleteUserPoolDomain` and create a new domain with `CreateUserPoolDomain`.
 *
 * You can pass the ARN of a new Certificate Manager certificate in this request. Typically, ACM certificates automatically renew and you user pool can continue to use the same ARN. But if you generate a new certificate for your custom domain name, replace the original configuration with the new ARN in this request.
 *
 * ACM certificates for custom domains must be in the US East (N. Virginia) Amazon Web Services Region. After you submit your request, Amazon Cognito requires up to 1 hour to distribute your new certificate to your custom domain.
 *
 * For more information about adding a custom domain to your user pool, see [Configuring a user pool domain](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html).
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateUserPoolDomainRequest
 *   Domain: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 *   ManagedLoginVersion: Number("int"),
 *   CustomDomainConfig: { // CustomDomainConfigType
 *     CertificateArn: "STRING_VALUE", // required
 *     SecurityPolicy: "TLS_V1" || "TLS_V1_2_2021" || "TLS_V1_3_2025",
 *   },
 *   Routing: { // RoutingType
 *     Failover: { // FailoverType
 *       SecondaryRegion: "STRING_VALUE", // required
 *       PrimaryRoute53HealthCheckId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateUserPoolDomainResponse
 * //   ManagedLoginVersion: Number("int"),
 * //   CloudFrontDomain: "STRING_VALUE",
 * //   Routing: { // RoutingType
 * //     Failover: { // FailoverType
 * //       SecondaryRegion: "STRING_VALUE", // required
 * //       PrimaryRoute53HealthCheckId: "STRING_VALUE", // required
 * //     },
 * //   },
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
 *
 * This exception is thrown if two or more modifications are happening concurrently.
 *
 * @throws {@link FeatureUnavailableInTierException} (client fault)
 *
 * This exception is thrown when a feature that you attempted to use or configure isn't included in your user pool's current feature plan. This can occur when:
 *
 * - You configure a feature that your feature plan doesn't support.
 * - You make a request that uses a feature that requires a higher feature plan.
 *
 * To resolve this issue, upgrade your user pool to a feature plan that includes the feature.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
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
export class UpdateUserPoolDomainCommand extends command<UpdateUserPoolDomainCommandInput, UpdateUserPoolDomainCommandOutput>(
  _ep0,
  _mw0,
  "UpdateUserPoolDomain",
  UpdateUserPoolDomain$
) {
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
