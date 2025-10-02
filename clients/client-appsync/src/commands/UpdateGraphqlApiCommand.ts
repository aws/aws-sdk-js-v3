// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGraphqlApiRequest, UpdateGraphqlApiResponse } from "../models/models_0";
import { de_UpdateGraphqlApiCommand, se_UpdateGraphqlApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGraphqlApiCommand}.
 */
export interface UpdateGraphqlApiCommandInput extends UpdateGraphqlApiRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGraphqlApiCommand}.
 */
export interface UpdateGraphqlApiCommandOutput extends UpdateGraphqlApiResponse, __MetadataBearer {}

/**
 * <p>Updates a <code>GraphqlApi</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateGraphqlApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateGraphqlApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateGraphqlApiRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   logConfig: { // LogConfig
 *     fieldLogLevel: "NONE" || "ERROR" || "ALL" || "INFO" || "DEBUG", // required
 *     cloudWatchLogsRoleArn: "STRING_VALUE", // required
 *     excludeVerboseContent: true || false,
 *   },
 *   authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *   userPoolConfig: { // UserPoolConfig
 *     userPoolId: "STRING_VALUE", // required
 *     awsRegion: "STRING_VALUE", // required
 *     defaultAction: "ALLOW" || "DENY", // required
 *     appIdClientRegex: "STRING_VALUE",
 *   },
 *   openIDConnectConfig: { // OpenIDConnectConfig
 *     issuer: "STRING_VALUE", // required
 *     clientId: "STRING_VALUE",
 *     iatTTL: Number("long"),
 *     authTTL: Number("long"),
 *   },
 *   additionalAuthenticationProviders: [ // AdditionalAuthenticationProviders
 *     { // AdditionalAuthenticationProvider
 *       authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 *       openIDConnectConfig: {
 *         issuer: "STRING_VALUE", // required
 *         clientId: "STRING_VALUE",
 *         iatTTL: Number("long"),
 *         authTTL: Number("long"),
 *       },
 *       userPoolConfig: { // CognitoUserPoolConfig
 *         userPoolId: "STRING_VALUE", // required
 *         awsRegion: "STRING_VALUE", // required
 *         appIdClientRegex: "STRING_VALUE",
 *       },
 *       lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 *         authorizerResultTtlInSeconds: Number("int"),
 *         authorizerUri: "STRING_VALUE", // required
 *         identityValidationExpression: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   xrayEnabled: true || false,
 *   lambdaAuthorizerConfig: {
 *     authorizerResultTtlInSeconds: Number("int"),
 *     authorizerUri: "STRING_VALUE", // required
 *     identityValidationExpression: "STRING_VALUE",
 *   },
 *   mergedApiExecutionRoleArn: "STRING_VALUE",
 *   ownerContact: "STRING_VALUE",
 *   introspectionConfig: "ENABLED" || "DISABLED",
 *   queryDepthLimit: Number("int"),
 *   resolverCountLimit: Number("int"),
 *   enhancedMetricsConfig: { // EnhancedMetricsConfig
 *     resolverLevelMetricsBehavior: "FULL_REQUEST_RESOLVER_METRICS" || "PER_RESOLVER_METRICS", // required
 *     dataSourceLevelMetricsBehavior: "FULL_REQUEST_DATA_SOURCE_METRICS" || "PER_DATA_SOURCE_METRICS", // required
 *     operationLevelMetricsConfig: "ENABLED" || "DISABLED", // required
 *   },
 * };
 * const command = new UpdateGraphqlApiCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGraphqlApiResponse
 * //   graphqlApi: { // GraphqlApi
 * //     name: "STRING_VALUE",
 * //     apiId: "STRING_VALUE",
 * //     authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 * //     logConfig: { // LogConfig
 * //       fieldLogLevel: "NONE" || "ERROR" || "ALL" || "INFO" || "DEBUG", // required
 * //       cloudWatchLogsRoleArn: "STRING_VALUE", // required
 * //       excludeVerboseContent: true || false,
 * //     },
 * //     userPoolConfig: { // UserPoolConfig
 * //       userPoolId: "STRING_VALUE", // required
 * //       awsRegion: "STRING_VALUE", // required
 * //       defaultAction: "ALLOW" || "DENY", // required
 * //       appIdClientRegex: "STRING_VALUE",
 * //     },
 * //     openIDConnectConfig: { // OpenIDConnectConfig
 * //       issuer: "STRING_VALUE", // required
 * //       clientId: "STRING_VALUE",
 * //       iatTTL: Number("long"),
 * //       authTTL: Number("long"),
 * //     },
 * //     arn: "STRING_VALUE",
 * //     uris: { // MapOfStringToString
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     additionalAuthenticationProviders: [ // AdditionalAuthenticationProviders
 * //       { // AdditionalAuthenticationProvider
 * //         authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 * //         openIDConnectConfig: {
 * //           issuer: "STRING_VALUE", // required
 * //           clientId: "STRING_VALUE",
 * //           iatTTL: Number("long"),
 * //           authTTL: Number("long"),
 * //         },
 * //         userPoolConfig: { // CognitoUserPoolConfig
 * //           userPoolId: "STRING_VALUE", // required
 * //           awsRegion: "STRING_VALUE", // required
 * //           appIdClientRegex: "STRING_VALUE",
 * //         },
 * //         lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 * //           authorizerResultTtlInSeconds: Number("int"),
 * //           authorizerUri: "STRING_VALUE", // required
 * //           identityValidationExpression: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     xrayEnabled: true || false,
 * //     wafWebAclArn: "STRING_VALUE",
 * //     lambdaAuthorizerConfig: {
 * //       authorizerResultTtlInSeconds: Number("int"),
 * //       authorizerUri: "STRING_VALUE", // required
 * //       identityValidationExpression: "STRING_VALUE",
 * //     },
 * //     dns: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     visibility: "GLOBAL" || "PRIVATE",
 * //     apiType: "GRAPHQL" || "MERGED",
 * //     mergedApiExecutionRoleArn: "STRING_VALUE",
 * //     owner: "STRING_VALUE",
 * //     ownerContact: "STRING_VALUE",
 * //     introspectionConfig: "ENABLED" || "DISABLED",
 * //     queryDepthLimit: Number("int"),
 * //     resolverCountLimit: Number("int"),
 * //     enhancedMetricsConfig: { // EnhancedMetricsConfig
 * //       resolverLevelMetricsBehavior: "FULL_REQUEST_RESOLVER_METRICS" || "PER_RESOLVER_METRICS", // required
 * //       dataSourceLevelMetricsBehavior: "FULL_REQUEST_DATA_SOURCE_METRICS" || "PER_DATA_SOURCE_METRICS", // required
 * //       operationLevelMetricsConfig: "ENABLED" || "DISABLED", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGraphqlApiCommandInput - {@link UpdateGraphqlApiCommandInput}
 * @returns {@link UpdateGraphqlApiCommandOutput}
 * @see {@link UpdateGraphqlApiCommandInput} for command's `input` shape.
 * @see {@link UpdateGraphqlApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class UpdateGraphqlApiCommand extends $Command
  .classBuilder<
    UpdateGraphqlApiCommandInput,
    UpdateGraphqlApiCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "UpdateGraphqlApi", {})
  .n("AppSyncClient", "UpdateGraphqlApiCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGraphqlApiCommand)
  .de(de_UpdateGraphqlApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGraphqlApiRequest;
      output: UpdateGraphqlApiResponse;
    };
    sdk: {
      input: UpdateGraphqlApiCommandInput;
      output: UpdateGraphqlApiCommandOutput;
    };
  };
}
