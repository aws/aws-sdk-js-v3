// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateApiRequest, UpdateApiResponse } from "../models/models_0";
import { de_UpdateApiCommand, se_UpdateApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApiCommand}.
 */
export interface UpdateApiCommandInput extends UpdateApiRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiCommand}.
 */
export interface UpdateApiCommandOutput extends UpdateApiResponse, __MetadataBearer {}

/**
 * <p>Updates an <code>Api</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateApiRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   ownerContact: "STRING_VALUE",
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
 * const command = new UpdateApiCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiResponse
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
 * @param UpdateApiCommandInput - {@link UpdateApiCommandInput}
 * @returns {@link UpdateApiCommandOutput}
 * @see {@link UpdateApiCommandInput} for command's `input` shape.
 * @see {@link UpdateApiCommandOutput} for command's `response` shape.
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
export class UpdateApiCommand extends $Command
  .classBuilder<
    UpdateApiCommandInput,
    UpdateApiCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "UpdateApi", {})
  .n("AppSyncClient", "UpdateApiCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApiCommand)
  .de(de_UpdateApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateApiRequest;
      output: UpdateApiResponse;
    };
    sdk: {
      input: UpdateApiCommandInput;
      output: UpdateApiCommandOutput;
    };
  };
}
