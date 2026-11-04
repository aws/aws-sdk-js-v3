// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeUserPoolDomainRequest, DescribeUserPoolDomainResponse } from "../models/models_0";
import { DescribeUserPoolDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeUserPoolDomainCommand}.
 */
export interface DescribeUserPoolDomainCommandInput extends DescribeUserPoolDomainRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserPoolDomainCommand}.
 */
export interface DescribeUserPoolDomainCommandOutput extends DescribeUserPoolDomainResponse, __MetadataBearer {}

/**
 * Given a user pool domain name, returns information about the domain configuration.
 *
 * > **Note:** This operation doesn't return results when you query a prefix domain in a secondary Region. Prefix domains are Region-specific and can only be described in the Region where they were created. To describe a prefix domain for a replica user pool, make the request to the primary Region's endpoint.
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
 * import { CognitoIdentityProviderClient, DescribeUserPoolDomainCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeUserPoolDomainCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeUserPoolDomainRequest
 *   Domain: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserPoolDomainCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserPoolDomainResponse
 * //   DomainDescription: { // DomainDescriptionType
 * //     UserPoolId: "STRING_VALUE",
 * //     AWSAccountId: "STRING_VALUE",
 * //     Domain: "STRING_VALUE",
 * //     S3Bucket: "STRING_VALUE",
 * //     CloudFrontDistribution: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     Status: "CREATING" || "DELETING" || "UPDATING" || "ACTIVE" || "FAILED",
 * //     CustomDomainConfig: { // CustomDomainConfigType
 * //       CertificateArn: "STRING_VALUE", // required
 * //       SecurityPolicy: "TLS_V1" || "TLS_V1_2_2021" || "TLS_V1_3_2025",
 * //     },
 * //     ManagedLoginVersion: Number("int"),
 * //     Routing: { // RoutingType
 * //       Failover: { // FailoverType
 * //         SecondaryRegion: "STRING_VALUE", // required
 * //         PrimaryRoute53HealthCheckId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserPoolDomainCommandInput - {@link DescribeUserPoolDomainCommandInput}
 * @returns {@link DescribeUserPoolDomainCommandOutput}
 * @see {@link DescribeUserPoolDomainCommandInput} for command's `input` shape.
 * @see {@link DescribeUserPoolDomainCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class DescribeUserPoolDomainCommand extends command<DescribeUserPoolDomainCommandInput, DescribeUserPoolDomainCommandOutput>(
  _ep0,
  _mw0,
  "DescribeUserPoolDomain",
  DescribeUserPoolDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserPoolDomainRequest;
      output: DescribeUserPoolDomainResponse;
    };
    sdk: {
      input: DescribeUserPoolDomainCommandInput;
      output: DescribeUserPoolDomainCommandOutput;
    };
  };
}
