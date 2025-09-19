// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateAgentRuntimeRequest,
  CreateAgentRuntimeRequestFilterSensitiveLog,
  CreateAgentRuntimeResponse,
} from "../models/models_0";
import { de_CreateAgentRuntimeCommand, se_CreateAgentRuntimeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgentRuntimeCommand}.
 */
export interface CreateAgentRuntimeCommandInput extends CreateAgentRuntimeRequest {}
/**
 * @public
 *
 * The output of {@link CreateAgentRuntimeCommand}.
 */
export interface CreateAgentRuntimeCommandOutput extends CreateAgentRuntimeResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Bedrock AgentCore Runtime.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateAgentRuntimeCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateAgentRuntimeCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateAgentRuntimeRequest
 *   agentRuntimeName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   agentRuntimeArtifact: { // AgentRuntimeArtifact Union: only one key present
 *     containerConfiguration: { // ContainerConfiguration
 *       containerUri: "STRING_VALUE", // required
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   networkConfiguration: { // NetworkConfiguration
 *     networkMode: "PUBLIC" || "VPC", // required
 *     networkModeConfig: { // VpcConfig
 *       securityGroups: [ // SecurityGroups // required
 *         "STRING_VALUE",
 *       ],
 *       subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   protocolConfiguration: { // ProtocolConfiguration
 *     serverProtocol: "MCP" || "HTTP", // required
 *   },
 *   clientToken: "STRING_VALUE",
 *   environmentVariables: { // EnvironmentVariablesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 *     customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 *       discoveryUrl: "STRING_VALUE", // required
 *       allowedAudience: [ // AllowedAudienceList
 *         "STRING_VALUE",
 *       ],
 *       allowedClients: [ // AllowedClientsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   requestHeaderConfiguration: { // RequestHeaderConfiguration Union: only one key present
 *     requestHeaderAllowlist: [ // RequestHeaderAllowlist
 *       "STRING_VALUE",
 *     ],
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentRuntimeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentRuntimeResponse
 * //   agentRuntimeArn: "STRING_VALUE", // required
 * //   workloadIdentityDetails: { // WorkloadIdentityDetails
 * //     workloadIdentityArn: "STRING_VALUE", // required
 * //   },
 * //   agentRuntimeId: "STRING_VALUE", // required
 * //   agentRuntimeVersion: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "READY" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateAgentRuntimeCommandInput - {@link CreateAgentRuntimeCommandInput}
 * @returns {@link CreateAgentRuntimeCommandOutput}
 * @see {@link CreateAgentRuntimeCommandInput} for command's `input` shape.
 * @see {@link CreateAgentRuntimeCommandOutput} for command's `response` shape.
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
export class CreateAgentRuntimeCommand extends $Command
  .classBuilder<
    CreateAgentRuntimeCommandInput,
    CreateAgentRuntimeCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateAgentRuntime", {})
  .n("BedrockAgentCoreControlClient", "CreateAgentRuntimeCommand")
  .f(CreateAgentRuntimeRequestFilterSensitiveLog, void 0)
  .ser(se_CreateAgentRuntimeCommand)
  .de(de_CreateAgentRuntimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentRuntimeRequest;
      output: CreateAgentRuntimeResponse;
    };
    sdk: {
      input: CreateAgentRuntimeCommandInput;
      output: CreateAgentRuntimeCommandOutput;
    };
  };
}
