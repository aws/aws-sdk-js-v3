// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAgentRuntimeRequest, GetAgentRuntimeResponse } from "../models/models_0";
import { GetAgentRuntime } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgentRuntimeCommand}.
 */
export interface GetAgentRuntimeCommandInput extends GetAgentRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentRuntimeCommand}.
 */
export interface GetAgentRuntimeCommandOutput extends GetAgentRuntimeResponse, __MetadataBearer {}

/**
 * <p>Gets an Amazon Bedrock AgentCore Runtime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetAgentRuntimeCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetAgentRuntimeCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetAgentRuntimeRequest
 *   agentRuntimeId: "STRING_VALUE", // required
 *   agentRuntimeVersion: "STRING_VALUE",
 * };
 * const command = new GetAgentRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentRuntimeResponse
 * //   agentRuntimeArn: "STRING_VALUE", // required
 * //   agentRuntimeName: "STRING_VALUE", // required
 * //   agentRuntimeId: "STRING_VALUE", // required
 * //   agentRuntimeVersion: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   roleArn: "STRING_VALUE", // required
 * //   networkConfiguration: { // NetworkConfiguration
 * //     networkMode: "PUBLIC" || "VPC", // required
 * //     networkModeConfig: { // VpcConfig
 * //       securityGroups: [ // SecurityGroups // required
 * //         "STRING_VALUE",
 * //       ],
 * //       subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * //   lifecycleConfiguration: { // LifecycleConfiguration
 * //     idleRuntimeSessionTimeout: Number("int"),
 * //     maxLifetime: Number("int"),
 * //   },
 * //   description: "STRING_VALUE",
 * //   workloadIdentityDetails: { // WorkloadIdentityDetails
 * //     workloadIdentityArn: "STRING_VALUE", // required
 * //   },
 * //   agentRuntimeArtifact: { // AgentRuntimeArtifact Union: only one key present
 * //     containerConfiguration: { // ContainerConfiguration
 * //       containerUri: "STRING_VALUE", // required
 * //     },
 * //     codeConfiguration: { // CodeConfiguration
 * //       code: { // Code Union: only one key present
 * //         s3: { // S3Location
 * //           bucket: "STRING_VALUE", // required
 * //           prefix: "STRING_VALUE", // required
 * //           versionId: "STRING_VALUE",
 * //         },
 * //       },
 * //       runtime: "PYTHON_3_10" || "PYTHON_3_11" || "PYTHON_3_12" || "PYTHON_3_13", // required
 * //       entryPoint: [ // EntryPoints // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   protocolConfiguration: { // ProtocolConfiguration
 * //     serverProtocol: "MCP" || "HTTP" || "A2A", // required
 * //   },
 * //   environmentVariables: { // EnvironmentVariablesMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //     customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //       discoveryUrl: "STRING_VALUE", // required
 * //       allowedAudience: [ // AllowedAudienceList
 * //         "STRING_VALUE",
 * //       ],
 * //       allowedClients: [ // AllowedClientsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   requestHeaderConfiguration: { // RequestHeaderConfiguration Union: only one key present
 * //     requestHeaderAllowlist: [ // RequestHeaderAllowlist
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgentRuntimeCommandInput - {@link GetAgentRuntimeCommandInput}
 * @returns {@link GetAgentRuntimeCommandOutput}
 * @see {@link GetAgentRuntimeCommandInput} for command's `input` shape.
 * @see {@link GetAgentRuntimeCommandOutput} for command's `response` shape.
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
export class GetAgentRuntimeCommand extends $Command
  .classBuilder<
    GetAgentRuntimeCommandInput,
    GetAgentRuntimeCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetAgentRuntime", {})
  .n("BedrockAgentCoreControlClient", "GetAgentRuntimeCommand")
  .sc(GetAgentRuntime)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentRuntimeRequest;
      output: GetAgentRuntimeResponse;
    };
    sdk: {
      input: GetAgentRuntimeCommandInput;
      output: GetAgentRuntimeCommandOutput;
    };
  };
}
