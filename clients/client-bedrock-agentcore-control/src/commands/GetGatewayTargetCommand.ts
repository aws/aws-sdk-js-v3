// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetGatewayTargetRequest } from "../models/models_0";
import { GetGatewayTargetResponse } from "../models/models_1";
import { GetGatewayTarget } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGatewayTargetCommand}.
 */
export interface GetGatewayTargetCommandInput extends GetGatewayTargetRequest {}
/**
 * @public
 *
 * The output of {@link GetGatewayTargetCommand}.
 */
export interface GetGatewayTargetCommandOutput extends GetGatewayTargetResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific gateway target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetGatewayTargetCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetGatewayTargetCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetGatewayTargetRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   targetId: "STRING_VALUE", // required
 * };
 * const command = new GetGatewayTargetCommand(input);
 * const response = await client.send(command);
 * // { // GetGatewayTargetResponse
 * //   gatewayArn: "STRING_VALUE", // required
 * //   targetId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED" || "SYNCHRONIZING" || "SYNCHRONIZE_UNSUCCESSFUL", // required
 * //   statusReasons: [ // StatusReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   targetConfiguration: { // TargetConfiguration Union: only one key present
 * //     mcp: { // McpTargetConfiguration Union: only one key present
 * //       openApiSchema: { // ApiSchemaConfiguration Union: only one key present
 * //         s3: { // S3Configuration
 * //           uri: "STRING_VALUE",
 * //           bucketOwnerAccountId: "STRING_VALUE",
 * //         },
 * //         inlinePayload: "STRING_VALUE",
 * //       },
 * //       smithyModel: {//  Union: only one key present
 * //         s3: {
 * //           uri: "STRING_VALUE",
 * //           bucketOwnerAccountId: "STRING_VALUE",
 * //         },
 * //         inlinePayload: "STRING_VALUE",
 * //       },
 * //       lambda: { // McpLambdaTargetConfiguration
 * //         lambdaArn: "STRING_VALUE", // required
 * //         toolSchema: { // ToolSchema Union: only one key present
 * //           s3: {
 * //             uri: "STRING_VALUE",
 * //             bucketOwnerAccountId: "STRING_VALUE",
 * //           },
 * //           inlinePayload: [ // ToolDefinitions
 * //             { // ToolDefinition
 * //               name: "STRING_VALUE", // required
 * //               description: "STRING_VALUE", // required
 * //               inputSchema: { // SchemaDefinition
 * //                 type: "string" || "number" || "object" || "array" || "boolean" || "integer", // required
 * //                 properties: { // SchemaProperties
 * //                   "<keys>": {
 * //                     type: "string" || "number" || "object" || "array" || "boolean" || "integer", // required
 * //                     properties: {
 * //                       "<keys>": "<SchemaDefinition>",
 * //                     },
 * //                     required: [ // RequiredProperties
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     items: "<SchemaDefinition>",
 * //                     description: "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 required: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 items: "<SchemaDefinition>",
 * //                 description: "STRING_VALUE",
 * //               },
 * //               outputSchema: "<SchemaDefinition>",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       mcpServer: { // McpServerTargetConfiguration
 * //         endpoint: "STRING_VALUE", // required
 * //       },
 * //       apiGateway: { // ApiGatewayTargetConfiguration
 * //         restApiId: "STRING_VALUE", // required
 * //         stage: "STRING_VALUE", // required
 * //         apiGatewayToolConfiguration: { // ApiGatewayToolConfiguration
 * //           toolOverrides: [ // ApiGatewayToolOverrides
 * //             { // ApiGatewayToolOverride
 * //               name: "STRING_VALUE", // required
 * //               description: "STRING_VALUE",
 * //               path: "STRING_VALUE", // required
 * //               method: "GET" || "DELETE" || "HEAD" || "OPTIONS" || "PATCH" || "PUT" || "POST", // required
 * //             },
 * //           ],
 * //           toolFilters: [ // ApiGatewayToolFilters // required
 * //             { // ApiGatewayToolFilter
 * //               filterPath: "STRING_VALUE", // required
 * //               methods: [ // RestApiMethods // required
 * //                 "GET" || "DELETE" || "HEAD" || "OPTIONS" || "PATCH" || "PUT" || "POST",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   },
 * //   credentialProviderConfigurations: [ // CredentialProviderConfigurations // required
 * //     { // CredentialProviderConfiguration
 * //       credentialProviderType: "GATEWAY_IAM_ROLE" || "OAUTH" || "API_KEY", // required
 * //       credentialProvider: { // CredentialProvider Union: only one key present
 * //         oauthCredentialProvider: { // OAuthCredentialProvider
 * //           providerArn: "STRING_VALUE", // required
 * //           scopes: [ // OAuthScopes // required
 * //             "STRING_VALUE",
 * //           ],
 * //           customParameters: { // OAuthCustomParameters
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           grantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE",
 * //           defaultReturnUrl: "STRING_VALUE",
 * //         },
 * //         apiKeyCredentialProvider: { // GatewayApiKeyCredentialProvider
 * //           providerArn: "STRING_VALUE", // required
 * //           credentialParameterName: "STRING_VALUE",
 * //           credentialPrefix: "STRING_VALUE",
 * //           credentialLocation: "HEADER" || "QUERY_PARAMETER",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   lastSynchronizedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetGatewayTargetCommandInput - {@link GetGatewayTargetCommandInput}
 * @returns {@link GetGatewayTargetCommandOutput}
 * @see {@link GetGatewayTargetCommandInput} for command's `input` shape.
 * @see {@link GetGatewayTargetCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class GetGatewayTargetCommand extends $Command
  .classBuilder<
    GetGatewayTargetCommandInput,
    GetGatewayTargetCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetGatewayTarget", {})
  .n("BedrockAgentCoreControlClient", "GetGatewayTargetCommand")
  .sc(GetGatewayTarget)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGatewayTargetRequest;
      output: GetGatewayTargetResponse;
    };
    sdk: {
      input: GetGatewayTargetCommandInput;
      output: GetGatewayTargetCommandOutput;
    };
  };
}
