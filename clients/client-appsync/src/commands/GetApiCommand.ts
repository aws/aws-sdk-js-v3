// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApiRequest, GetApiResponse } from "../models/models_0";
import { GetApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApiCommand}.
 */
export interface GetApiCommandInput extends GetApiRequest {}
/**
 * @public
 *
 * The output of {@link GetApiCommand}.
 */
export interface GetApiCommandOutput extends GetApiResponse, __MetadataBearer {}

/**
 * Retrieves an `Api` object.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetApiCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetApiCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // GetApiRequest
 *   apiId: "STRING_VALUE", // required
 * };
 * const command = new GetApiCommand(input);
 * const response = await client.send(command);
 * // { // GetApiResponse
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
 * @param GetApiCommandInput - {@link GetApiCommandInput}
 * @returns {@link GetApiCommandOutput}
 * @see {@link GetApiCommandInput} for command's `input` shape.
 * @see {@link GetApiCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to perform this operation on this resource.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class GetApiCommand extends command<GetApiCommandInput, GetApiCommandOutput>(
  _ep0,
  _mw0,
  "GetApi",
  GetApi$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiRequest;
      output: GetApiResponse;
    };
    sdk: {
      input: GetApiCommandInput;
      output: GetApiCommandOutput;
    };
  };
}
