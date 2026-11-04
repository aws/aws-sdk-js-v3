// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUserPoolDomainRequest, CreateUserPoolDomainResponse } from "../models/models_0";
import { CreateUserPoolDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * A user pool domain hosts managed login, an authorization server and web server for authentication in your application. This operation creates a new user pool prefix domain or custom domain and sets the managed login branding version. Set the branding version to `1` for hosted UI (classic) or `2` for managed login. When you choose a custom domain, you must provide an SSL certificate in the US East (N. Virginia) Amazon Web Services Region in your request.
 *
 * Your prefix domain might take up to one minute to take effect. Your custom domain is online within five minutes, but it can take up to one hour to distribute your SSL certificate.
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
 *     SecurityPolicy: "TLS_V1" || "TLS_V1_2_2021" || "TLS_V1_3_2025",
 *   },
 *   Routing: { // RoutingType
 *     Failover: { // FailoverType
 *       SecondaryRegion: "STRING_VALUE", // required
 *       PrimaryRoute53HealthCheckId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // { // CreateUserPoolDomainResponse
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
 * @param CreateUserPoolDomainCommandInput - {@link CreateUserPoolDomainCommandInput}
 * @returns {@link CreateUserPoolDomainCommandOutput}
 * @see {@link CreateUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link CreateUserPoolDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class CreateUserPoolDomainCommand extends command<CreateUserPoolDomainCommandInput, CreateUserPoolDomainCommandOutput>(
  _ep0,
  _mw0,
  "CreateUserPoolDomain",
  CreateUserPoolDomain$
) {
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
