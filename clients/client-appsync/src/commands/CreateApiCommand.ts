// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateApiRequest, CreateApiResponse } from "../models/models_0";
import { de_CreateApiCommand, se_CreateApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApiCommand}.
 */
export interface CreateApiCommandInput extends CreateApiRequest {}
/**
 * @public
 *
 * The output of {@link CreateApiCommand}.
 */
export interface CreateApiCommandOutput extends CreateApiResponse, __MetadataBearer {}

/**
 * <p>Creates an <code>Api</code> object. Use this operation to create an AppSync
 *          API with your preferred configuration, such as an Event API that provides real-time message
 *          publishing and message subscriptions over WebSockets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // CreateApiRequest
 *   name: "STRING_VALUE", // required
 *   ownerContact: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   eventConfig: { // EventConfig
 *     authProviders: [ // AuthProviders // required
 *       { // AuthProvider
 *         authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *         cognitoConfig: { // CognitoConfig
 *           userPoolId: "STRING_VALUE", // required
 *           awsRegion: "STRING_VALUE", // required
 *           appIdClientRegex: "STRING_VALUE",
 *         },
 *         openIDConnectConfig: { // OpenIDConnectConfig
 *           issuer: "STRING_VALUE", // required
 *           clientId: "STRING_VALUE",
 *           iatTTL: Number("long"),
 *           authTTL: Number("long"),
 *         },
 *         lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 *           authorizerResultTtlInSeconds: Number("int"),
 *           authorizerUri: "STRING_VALUE", // required
 *           identityValidationExpression: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *     connectionAuthModes: [ // AuthModes // required
 *       { // AuthMode
 *         authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *       },
 *     ],
 *     defaultPublishAuthModes: [ // required
 *       {
 *         authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *       },
 *     ],
 *     defaultSubscribeAuthModes: [ // required
 *       {
 *         authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 *       },
 *     ],
 *     logConfig: { // EventLogConfig
 *       logLevel: "NONE" || "ERROR" || "ALL" || "INFO" || "DEBUG", // required
 *       cloudWatchLogsRoleArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateApiCommand(input);
 * const response = await client.send(command);
 * // { // CreateApiResponse
 * //   api: { // Api
 * //     apiId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     ownerContact: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     dns: { // MapOfStringToString
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     apiArn: "STRING_VALUE",
 * //     created: new Date("TIMESTAMP"),
 * //     xrayEnabled: true || false,
 * //     wafWebAclArn: "STRING_VALUE",
 * //     eventConfig: { // EventConfig
 * //       authProviders: [ // AuthProviders // required
 * //         { // AuthProvider
 * //           authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //           cognitoConfig: { // CognitoConfig
 * //             userPoolId: "STRING_VALUE", // required
 * //             awsRegion: "STRING_VALUE", // required
 * //             appIdClientRegex: "STRING_VALUE",
 * //           },
 * //           openIDConnectConfig: { // OpenIDConnectConfig
 * //             issuer: "STRING_VALUE", // required
 * //             clientId: "STRING_VALUE",
 * //             iatTTL: Number("long"),
 * //             authTTL: Number("long"),
 * //           },
 * //           lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 * //             authorizerResultTtlInSeconds: Number("int"),
 * //             authorizerUri: "STRING_VALUE", // required
 * //             identityValidationExpression: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       connectionAuthModes: [ // AuthModes // required
 * //         { // AuthMode
 * //           authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //         },
 * //       ],
 * //       defaultPublishAuthModes: [ // required
 * //         {
 * //           authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //         },
 * //       ],
 * //       defaultSubscribeAuthModes: [ // required
 * //         {
 * //           authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //         },
 * //       ],
 * //       logConfig: { // EventLogConfig
 * //         logLevel: "NONE" || "ERROR" || "ALL" || "INFO" || "DEBUG", // required
 * //         cloudWatchLogsRoleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApiCommandInput - {@link CreateApiCommandInput}
 * @returns {@link CreateApiCommandOutput}
 * @see {@link CreateApiCommandInput} for command's `input` shape.
 * @see {@link CreateApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation exceeded the service quota for this resource.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 * @public
 */
export class CreateApiCommand extends $Command
  .classBuilder<
    CreateApiCommandInput,
    CreateApiCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "CreateApi", {})
  .n("AppSyncClient", "CreateApiCommand")
  .f(void 0, void 0)
  .ser(se_CreateApiCommand)
  .de(de_CreateApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApiRequest;
      output: CreateApiResponse;
    };
    sdk: {
      input: CreateApiCommandInput;
      output: CreateApiCommandOutput;
    };
  };
}
