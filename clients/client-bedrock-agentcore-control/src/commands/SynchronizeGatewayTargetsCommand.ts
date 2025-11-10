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
import { SynchronizeGatewayTargetsRequest, SynchronizeGatewayTargetsResponse } from "../models/models_0";
import { SynchronizeGatewayTargets } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SynchronizeGatewayTargetsCommand}.
 */
export interface SynchronizeGatewayTargetsCommandInput extends SynchronizeGatewayTargetsRequest {}
/**
 * @public
 *
 * The output of {@link SynchronizeGatewayTargetsCommand}.
 */
export interface SynchronizeGatewayTargetsCommandOutput extends SynchronizeGatewayTargetsResponse, __MetadataBearer {}

/**
 * <p>The gateway targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, SynchronizeGatewayTargetsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, SynchronizeGatewayTargetsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // SynchronizeGatewayTargetsRequest
 *   gatewayIdentifier: "STRING_VALUE", // required
 *   targetIdList: [ // TargetIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new SynchronizeGatewayTargetsCommand(input);
 * const response = await client.send(command);
 * // { // SynchronizeGatewayTargetsResponse
 * //   targets: [ // GatewayTargetList
 * //     { // GatewayTarget
 * //       gatewayArn: "STRING_VALUE", // required
 * //       targetId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED" || "SYNCHRONIZING" || "SYNCHRONIZE_UNSUCCESSFUL", // required
 * //       statusReasons: [ // StatusReasons
 * //         "STRING_VALUE",
 * //       ],
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       targetConfiguration: { // TargetConfiguration Union: only one key present
 * //         mcp: { // McpTargetConfiguration Union: only one key present
 * //           openApiSchema: { // ApiSchemaConfiguration Union: only one key present
 * //             s3: { // S3Configuration
 * //               uri: "STRING_VALUE",
 * //               bucketOwnerAccountId: "STRING_VALUE",
 * //             },
 * //             inlinePayload: "STRING_VALUE",
 * //           },
 * //           smithyModel: {//  Union: only one key present
 * //             s3: {
 * //               uri: "STRING_VALUE",
 * //               bucketOwnerAccountId: "STRING_VALUE",
 * //             },
 * //             inlinePayload: "STRING_VALUE",
 * //           },
 * //           lambda: { // McpLambdaTargetConfiguration
 * //             lambdaArn: "STRING_VALUE", // required
 * //             toolSchema: { // ToolSchema Union: only one key present
 * //               s3: {
 * //                 uri: "STRING_VALUE",
 * //                 bucketOwnerAccountId: "STRING_VALUE",
 * //               },
 * //               inlinePayload: [ // ToolDefinitions
 * //                 { // ToolDefinition
 * //                   name: "STRING_VALUE", // required
 * //                   description: "STRING_VALUE", // required
 * //                   inputSchema: { // SchemaDefinition
 * //                     type: "string" || "number" || "object" || "array" || "boolean" || "integer", // required
 * //                     properties: { // SchemaProperties
 * //                       "<keys>": {
 * //                         type: "string" || "number" || "object" || "array" || "boolean" || "integer", // required
 * //                         properties: {
 * //                           "<keys>": "<SchemaDefinition>",
 * //                         },
 * //                         required: [ // RequiredProperties
 * //                           "STRING_VALUE",
 * //                         ],
 * //                         items: "<SchemaDefinition>",
 * //                         description: "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     required: [
 * //                       "STRING_VALUE",
 * //                     ],
 * //                     items: "<SchemaDefinition>",
 * //                     description: "STRING_VALUE",
 * //                   },
 * //                   outputSchema: "<SchemaDefinition>",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           mcpServer: { // McpServerTargetConfiguration
 * //             endpoint: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //       credentialProviderConfigurations: [ // CredentialProviderConfigurations // required
 * //         { // CredentialProviderConfiguration
 * //           credentialProviderType: "GATEWAY_IAM_ROLE" || "OAUTH" || "API_KEY", // required
 * //           credentialProvider: { // CredentialProvider Union: only one key present
 * //             oauthCredentialProvider: { // OAuthCredentialProvider
 * //               providerArn: "STRING_VALUE", // required
 * //               scopes: [ // OAuthScopes // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               customParameters: { // OAuthCustomParameters
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             apiKeyCredentialProvider: { // GatewayApiKeyCredentialProvider
 * //               providerArn: "STRING_VALUE", // required
 * //               credentialParameterName: "STRING_VALUE",
 * //               credentialPrefix: "STRING_VALUE",
 * //               credentialLocation: "HEADER" || "QUERY_PARAMETER",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       lastSynchronizedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SynchronizeGatewayTargetsCommandInput - {@link SynchronizeGatewayTargetsCommandInput}
 * @returns {@link SynchronizeGatewayTargetsCommandOutput}
 * @see {@link SynchronizeGatewayTargetsCommandInput} for command's `input` shape.
 * @see {@link SynchronizeGatewayTargetsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
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
export class SynchronizeGatewayTargetsCommand extends $Command
  .classBuilder<
    SynchronizeGatewayTargetsCommandInput,
    SynchronizeGatewayTargetsCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "SynchronizeGatewayTargets", {})
  .n("BedrockAgentCoreControlClient", "SynchronizeGatewayTargetsCommand")
  .sc(SynchronizeGatewayTargets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SynchronizeGatewayTargetsRequest;
      output: SynchronizeGatewayTargetsResponse;
    };
    sdk: {
      input: SynchronizeGatewayTargetsCommandInput;
      output: SynchronizeGatewayTargetsCommandOutput;
    };
  };
}
