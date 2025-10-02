// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListApisRequest, ListApisResponse } from "../models/models_0";
import { de_ListApisCommand, se_ListApisCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApisCommand}.
 */
export interface ListApisCommandInput extends ListApisRequest {}
/**
 * @public
 *
 * The output of {@link ListApisCommand}.
 */
export interface ListApisCommandOutput extends ListApisResponse, __MetadataBearer {}

/**
 * <p>Lists the APIs in your AppSync account.</p>
 *          <p>
 *             <code>ListApis</code> returns only the high level API details. For more detailed
 *          information about an API, use <code>GetApi</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListApisCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListApisCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // ListApisRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApisCommand(input);
 * const response = await client.send(command);
 * // { // ListApisResponse
 * //   apis: [ // Apis
 * //     { // Api
 * //       apiId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       ownerContact: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       dns: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       apiArn: "STRING_VALUE",
 * //       created: new Date("TIMESTAMP"),
 * //       xrayEnabled: true || false,
 * //       wafWebAclArn: "STRING_VALUE",
 * //       eventConfig: { // EventConfig
 * //         authProviders: [ // AuthProviders // required
 * //           { // AuthProvider
 * //             authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //             cognitoConfig: { // CognitoConfig
 * //               userPoolId: "STRING_VALUE", // required
 * //               awsRegion: "STRING_VALUE", // required
 * //               appIdClientRegex: "STRING_VALUE",
 * //             },
 * //             openIDConnectConfig: { // OpenIDConnectConfig
 * //               issuer: "STRING_VALUE", // required
 * //               clientId: "STRING_VALUE",
 * //               iatTTL: Number("long"),
 * //               authTTL: Number("long"),
 * //             },
 * //             lambdaAuthorizerConfig: { // LambdaAuthorizerConfig
 * //               authorizerResultTtlInSeconds: Number("int"),
 * //               authorizerUri: "STRING_VALUE", // required
 * //               identityValidationExpression: "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //         connectionAuthModes: [ // AuthModes // required
 * //           { // AuthMode
 * //             authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //           },
 * //         ],
 * //         defaultPublishAuthModes: [ // required
 * //           {
 * //             authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //           },
 * //         ],
 * //         defaultSubscribeAuthModes: [ // required
 * //           {
 * //             authType: "API_KEY" || "AWS_IAM" || "AMAZON_COGNITO_USER_POOLS" || "OPENID_CONNECT" || "AWS_LAMBDA", // required
 * //           },
 * //         ],
 * //         logConfig: { // EventLogConfig
 * //           logLevel: "NONE" || "ERROR" || "ALL" || "INFO" || "DEBUG", // required
 * //           cloudWatchLogsRoleArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApisCommandInput - {@link ListApisCommandInput}
 * @returns {@link ListApisCommandOutput}
 * @see {@link ListApisCommandInput} for command's `input` shape.
 * @see {@link ListApisCommandOutput} for command's `response` shape.
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
export class ListApisCommand extends $Command
  .classBuilder<
    ListApisCommandInput,
    ListApisCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "ListApis", {})
  .n("AppSyncClient", "ListApisCommand")
  .f(void 0, void 0)
  .ser(se_ListApisCommand)
  .de(de_ListApisCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApisRequest;
      output: ListApisResponse;
    };
    sdk: {
      input: ListApisCommandInput;
      output: ListApisCommandOutput;
    };
  };
}
