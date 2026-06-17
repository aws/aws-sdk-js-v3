// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetHarnessRequest, GetHarnessResponse } from "../models/models_1";
import { GetHarness$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHarnessCommand}.
 */
export interface GetHarnessCommandInput extends GetHarnessRequest {}
/**
 * @public
 *
 * The output of {@link GetHarnessCommand}.
 */
export interface GetHarnessCommandOutput extends GetHarnessResponse, __MetadataBearer {}

/**
 * <p>Operation to get a single harness.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetHarnessCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetHarnessCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetHarnessRequest
 *   harnessId: "STRING_VALUE", // required
 *   harnessVersion: "STRING_VALUE",
 * };
 * const command = new GetHarnessCommand(input);
 * const response = await client.send(command);
 * // { // GetHarnessResponse
 * //   harness: { // Harness
 * //     harnessId: "STRING_VALUE", // required
 * //     harnessName: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING" || "DELETE_FAILED", // required
 * //     harnessVersion: "STRING_VALUE",
 * //     executionRoleArn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     model: { // HarnessModelConfiguration Union: only one key present
 * //       bedrockModelConfig: { // HarnessBedrockModelConfig
 * //         modelId: "STRING_VALUE", // required
 * //         maxTokens: Number("int"),
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         apiFormat: "converse_stream" || "responses" || "chat_completions",
 * //         additionalParams: "DOCUMENT_VALUE",
 * //       },
 * //       openAiModelConfig: { // HarnessOpenAiModelConfig
 * //         modelId: "STRING_VALUE", // required
 * //         apiKeyArn: "STRING_VALUE", // required
 * //         maxTokens: Number("int"),
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         apiFormat: "chat_completions" || "responses",
 * //         additionalParams: "DOCUMENT_VALUE",
 * //       },
 * //       geminiModelConfig: { // HarnessGeminiModelConfig
 * //         modelId: "STRING_VALUE", // required
 * //         apiKeyArn: "STRING_VALUE", // required
 * //         maxTokens: Number("int"),
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         topK: Number("int"),
 * //       },
 * //       liteLlmModelConfig: { // HarnessLiteLlmModelConfig
 * //         modelId: "STRING_VALUE", // required
 * //         apiKeyArn: "STRING_VALUE",
 * //         apiBase: "STRING_VALUE",
 * //         maxTokens: Number("int"),
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         additionalParams: "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //     systemPrompt: [ // HarnessSystemPrompt // required
 * //       { // HarnessSystemContentBlock Union: only one key present
 * //         text: "STRING_VALUE",
 * //       },
 * //     ],
 * //     tools: [ // HarnessTools // required
 * //       { // HarnessTool
 * //         type: "remote_mcp" || "agentcore_browser" || "agentcore_gateway" || "inline_function" || "agentcore_code_interpreter", // required
 * //         name: "STRING_VALUE",
 * //         config: { // HarnessToolConfiguration Union: only one key present
 * //           remoteMcp: { // HarnessRemoteMcpConfig
 * //             url: "STRING_VALUE", // required
 * //             headers: { // HttpHeadersMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           agentCoreBrowser: { // HarnessAgentCoreBrowserConfig
 * //             browserArn: "STRING_VALUE",
 * //           },
 * //           agentCoreGateway: { // HarnessAgentCoreGatewayConfig
 * //             gatewayArn: "STRING_VALUE", // required
 * //             outboundAuth: { // HarnessGatewayOutboundAuth Union: only one key present
 * //               awsIam: {},
 * //               none: {},
 * //               oauth: { // OAuthCredentialProvider
 * //                 providerArn: "STRING_VALUE", // required
 * //                 scopes: [ // OAuthScopes // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 customParameters: { // OAuthCustomParameters
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 grantType: "CLIENT_CREDENTIALS" || "AUTHORIZATION_CODE" || "TOKEN_EXCHANGE",
 * //                 defaultReturnUrl: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //           inlineFunction: { // HarnessInlineFunctionConfig
 * //             description: "STRING_VALUE", // required
 * //             inputSchema: "DOCUMENT_VALUE", // required
 * //           },
 * //           agentCoreCodeInterpreter: { // HarnessAgentCoreCodeInterpreterConfig
 * //             codeInterpreterArn: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     skills: [ // HarnessSkills // required
 * //       { // HarnessSkill Union: only one key present
 * //         path: "STRING_VALUE",
 * //         s3: { // HarnessSkillS3Source
 * //           uri: "STRING_VALUE", // required
 * //         },
 * //         git: { // HarnessSkillGitSource
 * //           url: "STRING_VALUE", // required
 * //           path: "STRING_VALUE",
 * //           auth: { // HarnessSkillGitAuth
 * //             credentialArn: "STRING_VALUE", // required
 * //             username: "STRING_VALUE",
 * //           },
 * //         },
 * //         awsSkills: { // HarnessSkillAwsSkillsSource
 * //           paths: [ // HarnessAwsSkillPaths
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     allowedTools: [ // HarnessAllowedTools // required
 * //       "STRING_VALUE",
 * //     ],
 * //     truncation: { // HarnessTruncationConfiguration
 * //       strategy: "sliding_window" || "summarization" || "none", // required
 * //       config: { // HarnessTruncationStrategyConfiguration Union: only one key present
 * //         slidingWindow: { // HarnessSlidingWindowConfiguration
 * //           messagesCount: Number("int"),
 * //         },
 * //         summarization: { // HarnessSummarizationConfiguration
 * //           summaryRatio: Number("float"),
 * //           preserveRecentMessages: Number("int"),
 * //           summarizationSystemPrompt: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     environment: { // HarnessEnvironmentProvider Union: only one key present
 * //       agentCoreRuntimeEnvironment: { // HarnessAgentCoreRuntimeEnvironment
 * //         agentRuntimeArn: "STRING_VALUE", // required
 * //         agentRuntimeName: "STRING_VALUE", // required
 * //         agentRuntimeId: "STRING_VALUE", // required
 * //         lifecycleConfiguration: { // LifecycleConfiguration
 * //           idleRuntimeSessionTimeout: Number("int"),
 * //           maxLifetime: Number("int"),
 * //         },
 * //         networkConfiguration: { // NetworkConfiguration
 * //           networkMode: "PUBLIC" || "VPC", // required
 * //           networkModeConfig: { // VpcConfig
 * //             securityGroups: [ // SecurityGroups // required
 * //               "STRING_VALUE",
 * //             ],
 * //             subnets: [ // Subnets // required
 * //               "STRING_VALUE",
 * //             ],
 * //             requireServiceS3Endpoint: true || false,
 * //           },
 * //         },
 * //         filesystemConfigurations: [ // FilesystemConfigurations
 * //           { // FilesystemConfiguration Union: only one key present
 * //             sessionStorage: { // SessionStorageConfiguration
 * //               mountPath: "STRING_VALUE", // required
 * //             },
 * //             s3FilesAccessPoint: { // S3FilesAccessPointConfiguration
 * //               accessPointArn: "STRING_VALUE", // required
 * //               mountPath: "STRING_VALUE", // required
 * //             },
 * //             efsAccessPoint: { // EfsAccessPointConfiguration
 * //               accessPointArn: "STRING_VALUE", // required
 * //               mountPath: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     environmentArtifact: { // HarnessEnvironmentArtifact Union: only one key present
 * //       containerConfiguration: { // ContainerConfiguration
 * //         containerUri: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     environmentVariables: { // EnvironmentVariablesMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //       customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //         discoveryUrl: "STRING_VALUE", // required
 * //         allowedAudience: [ // AllowedAudienceList
 * //           "STRING_VALUE",
 * //         ],
 * //         allowedClients: [ // AllowedClientsList
 * //           "STRING_VALUE",
 * //         ],
 * //         allowedScopes: [ // AllowedScopesType
 * //           "STRING_VALUE",
 * //         ],
 * //         customClaims: [ // CustomClaimValidationsType
 * //           { // CustomClaimValidationType
 * //             inboundTokenClaimName: "STRING_VALUE", // required
 * //             inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 * //             authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 * //               claimMatchValue: { // ClaimMatchValueType Union: only one key present
 * //                 matchValueString: "STRING_VALUE",
 * //                 matchValueStringList: [ // MatchValueStringList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //               claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 * //             },
 * //           },
 * //         ],
 * //         privateEndpoint: { // PrivateEndpoint Union: only one key present
 * //           selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 * //             resourceConfigurationIdentifier: "STRING_VALUE",
 * //           },
 * //           managedVpcResource: { // ManagedVpcResource
 * //             vpcIdentifier: "STRING_VALUE", // required
 * //             subnetIds: [ // SubnetIds // required
 * //               "STRING_VALUE",
 * //             ],
 * //             endpointIpAddressType: "IPV4" || "IPV6", // required
 * //             securityGroupIds: [ // SecurityGroupIds
 * //               "STRING_VALUE",
 * //             ],
 * //             tags: { // TagsMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             routingDomain: "STRING_VALUE",
 * //           },
 * //         },
 * //         privateEndpointOverrides: [ // PrivateEndpointOverrides
 * //           { // PrivateEndpointOverride
 * //             domain: "STRING_VALUE", // required
 * //             privateEndpoint: {//  Union: only one key present
 * //               selfManagedLatticeResource: {//  Union: only one key present
 * //                 resourceConfigurationIdentifier: "STRING_VALUE",
 * //               },
 * //               managedVpcResource: {
 * //                 vpcIdentifier: "STRING_VALUE", // required
 * //                 subnetIds: [ // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                 securityGroupIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 tags: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 routingDomain: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         allowedWorkloadConfiguration: { // AllowedWorkloadConfiguration
 * //           hostingEnvironments: [ // HostingEnvironmentListType
 * //             { // HostingEnvironment
 * //               arn: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           workloadIdentities: [ // WorkloadIdentityNameListType
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     memory: { // HarnessMemoryConfiguration Union: only one key present
 * //       agentCoreMemoryConfiguration: { // HarnessAgentCoreMemoryConfiguration
 * //         arn: "STRING_VALUE", // required
 * //         actorId: "STRING_VALUE",
 * //         messagesCount: Number("int"),
 * //         retrievalConfig: { // HarnessAgentCoreMemoryRetrievalConfigs
 * //           "<keys>": { // HarnessAgentCoreMemoryRetrievalConfig
 * //             topK: Number("int"),
 * //             relevanceScore: Number("float"),
 * //             strategyId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       managedMemoryConfiguration: { // HarnessManagedMemoryConfiguration
 * //         arn: "STRING_VALUE",
 * //         strategies: [ // HarnessManagedMemoryStrategyList
 * //           "SEMANTIC" || "SUMMARIZATION" || "USER_PREFERENCE" || "EPISODIC",
 * //         ],
 * //         eventExpiryDuration: Number("int"),
 * //         encryptionKeyArn: "STRING_VALUE",
 * //       },
 * //       disabled: {},
 * //     },
 * //     maxIterations: Number("int"),
 * //     maxTokens: Number("int"),
 * //     timeoutSeconds: Number("int"),
 * //     failureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHarnessCommandInput - {@link GetHarnessCommandInput}
 * @returns {@link GetHarnessCommandOutput}
 * @see {@link GetHarnessCommandInput} for command's `input` shape.
 * @see {@link GetHarnessCommandOutput} for command's `response` shape.
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
export class GetHarnessCommand extends $Command
  .classBuilder<
    GetHarnessCommandInput,
    GetHarnessCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetHarness", {})
  .n("BedrockAgentCoreControlClient", "GetHarnessCommand")
  .sc(GetHarness$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHarnessRequest;
      output: GetHarnessResponse;
    };
    sdk: {
      input: GetHarnessCommandInput;
      output: GetHarnessCommandOutput;
    };
  };
}
