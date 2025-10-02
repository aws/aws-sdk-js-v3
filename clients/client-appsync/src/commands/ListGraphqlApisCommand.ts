// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGraphqlApisRequest, ListGraphqlApisResponse } from "../models/models_0";
import { de_ListGraphqlApisCommand, se_ListGraphqlApisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGraphqlApisCommand}.
 */
export interface ListGraphqlApisCommandInput extends ListGraphqlApisRequest {}
/**
 * @public
 *
 * The output of {@link ListGraphqlApisCommand}.
 */
export interface ListGraphqlApisCommandOutput extends ListGraphqlApisResponse, __MetadataBearer {}

/**
 * <p>Lists your GraphQL APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListGraphqlApisCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListGraphqlApisCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // ListGraphqlApisRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   apiType: "GRAPHQL" || "MERGED",
 *   owner: "CURRENT_ACCOUNT" || "OTHER_ACCOUNTS",
 * };
 * const command = new ListGraphqlApisCommand(input);
 * const response = await client.send(command);
 * // { // ListGraphqlApisResponse
 * //   graphqlApis: [ // GraphqlApis
 * //     { // GraphqlApi
 * //       name: "STRING_VALUE",
 * //       apiId: "STRING_VALUE",
 * //       authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 * //       logConfig: { // LogConfig
 * //         fieldLogLevel: "NONE" || "ERROR" || "ALL" || "INFO" || "DEBUG", // required
 * //         cloudWatchLogsRoleArn: "STRING_VALUE", // required
 * //         excludeVerboseContent: true || false,
 * //       },
 * //       userPoolConfig: { // UserPoolConfig
 * //         userPoolId: "STRING_VALUE", // required
 * //         awsRegion: "STRING_VALUE", // required
 * //         defaultAction: "ALLOW" || "DENY", // required
 * //         appIdClientRegex: "STRING_VALUE",
 * //       },
 * //       openIDConnectConfig: { // OpenIDConnectConfig
 * //         issuer: "STRING_VALUE", // required
 * //         clientId: "STRING_VALUE",
 * //         iatTTL: Number("long"),
 * //         authTTL: Number("long"),
 * //       },
 * //       arn: "STRING_VALUE",
 * //       uris: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       additionalAuthenticationProviders: [ // AdditionalAuthenticationProviders
 * //         { // AdditionalAuthenticationProvider
 * //           authenticationType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA",
 * //           openIDConnectConfig: {
 * //             issuer: "STRING_VALUE", // required
 * //             clientId: "STRING_VALUE",
 * //             iatTTL: Number("long"),
 * //             authTTL: Number("long"),
 * //           },
 * //           userPoolConfig: { // CognitoUserPoolConfig
 * //             userPoolId: "STRING_VALUE", // required
 * //             awsRegion: "STRING_VALUE", // required
 * //             appIdClientRegex: "STRING_VALUE",
 * //           },
 * //           lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 * //             authorizerResultTtlInSeconds: Number("int"),
 * //             authorizerUri: "STRING_VALUE", // required
 * //             identityValidationExpression: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       xrayEnabled: true || false,
 * //       wafWebAclArn: "STRING_VALUE",
 * //       lambdaAuthorizerConfig: {
 * //         authorizerResultTtlInSeconds: Number("int"),
 * //         authorizerUri: "STRING_VALUE", // required
 * //         identityValidationExpression: "STRING_VALUE",
 * //       },
 * //       dns: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       visibility: "GLOBAL" || "PRIVATE",
 * //       apiType: "GRAPHQL" || "MERGED",
 * //       mergedApiExecutionRoleArn: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       ownerContact: "STRING_VALUE",
 * //       introspectionConfig: "ENABLED" || "DISABLED",
 * //       queryDepthLimit: Number("int"),
 * //       resolverCountLimit: Number("int"),
 * //       enhancedMetricsConfig: { // EnhancedMetricsConfig
 * //         resolverLevelMetricsBehavior: "FULL_REQUEST_RESOLVER_METRICS" || "PER_RESOLVER_METRICS", // required
 * //         dataSourceLevelMetricsBehavior: "FULL_REQUEST_DATA_SOURCE_METRICS" || "PER_DATA_SOURCE_METRICS", // required
 * //         operationLevelMetricsConfig: "ENABLED" || "DISABLED", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGraphqlApisCommandInput - {@link ListGraphqlApisCommandInput}
 * @returns {@link ListGraphqlApisCommandOutput}
 * @see {@link ListGraphqlApisCommandInput} for command's `input` shape.
 * @see {@link ListGraphqlApisCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
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
export class ListGraphqlApisCommand extends $Command
  .classBuilder<
    ListGraphqlApisCommandInput,
    ListGraphqlApisCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "ListGraphqlApis", {})
  .n("AppSyncClient", "ListGraphqlApisCommand")
  .f(void 0, void 0)
  .ser(se_ListGraphqlApisCommand)
  .de(de_ListGraphqlApisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGraphqlApisRequest;
      output: ListGraphqlApisResponse;
    };
    sdk: {
      input: ListGraphqlApisCommandInput;
      output: ListGraphqlApisCommandOutput;
    };
  };
}
