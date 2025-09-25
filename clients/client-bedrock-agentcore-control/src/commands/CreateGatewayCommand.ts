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
import { CreateGatewayRequest, CreateGatewayResponse } from "../models/models_0";
import { CreateGateway } from "../schemas/schemas_7_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandInput extends CreateGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateGatewayCommand}.
 */
export interface CreateGatewayCommandOutput extends CreateGatewayResponse, __MetadataBearer {}

/**
 * <p>Creates a gateway for Amazon Bedrock Agent. A gateway serves as an integration point between your agent and external services.</p> <p>To create a gateway, you must specify a name, protocol type, and IAM role. The role grants the gateway permission to access Amazon Web Services services and resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateGatewayCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateGatewayCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateGatewayRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   roleArn: "STRING_VALUE", // required
 *   protocolType: "MCP", // required
 *   protocolConfiguration: { // GatewayProtocolConfiguration Union: only one key present
 *     mcp: { // MCPGatewayConfiguration
 *       supportedVersions: [ // McpSupportedVersions
 *         "STRING_VALUE",
 *       ],
 *       instructions: "STRING_VALUE",
 *       searchType: "SEMANTIC",
 *     },
 *   },
 *   authorizerType: "CUSTOM_JWT", // required
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
 *   kmsKeyArn: "STRING_VALUE",
 *   exceptionLevel: "DEBUG",
 * };
 * const command = new CreateGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateGatewayResponse
 * //   gatewayArn: "STRING_VALUE", // required
 * //   gatewayId: "STRING_VALUE", // required
 * //   gatewayUrl: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "CREATING" || "UPDATING" || "UPDATE_UNSUCCESSFUL" || "DELETING" || "READY" || "FAILED", // required
 * //   statusReasons: [ // StatusReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   roleArn: "STRING_VALUE",
 * //   protocolType: "MCP", // required
 * //   protocolConfiguration: { // GatewayProtocolConfiguration Union: only one key present
 * //     mcp: { // MCPGatewayConfiguration
 * //       supportedVersions: [ // McpSupportedVersions
 * //         "STRING_VALUE",
 * //       ],
 * //       instructions: "STRING_VALUE",
 * //       searchType: "SEMANTIC",
 * //     },
 * //   },
 * //   authorizerType: "CUSTOM_JWT", // required
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
 * //   kmsKeyArn: "STRING_VALUE",
 * //   workloadIdentityDetails: { // WorkloadIdentityDetails
 * //     workloadIdentityArn: "STRING_VALUE", // required
 * //   },
 * //   exceptionLevel: "DEBUG",
 * // };
 *
 * ```
 *
 * @param CreateGatewayCommandInput - {@link CreateGatewayCommandInput}
 * @returns {@link CreateGatewayCommandOutput}
 * @see {@link CreateGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateGatewayCommandOutput} for command's `response` shape.
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
export class CreateGatewayCommand extends $Command
  .classBuilder<
    CreateGatewayCommandInput,
    CreateGatewayCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateGateway", {})
  .n("BedrockAgentCoreControlClient", "CreateGatewayCommand")
  .sc(CreateGateway)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGatewayRequest;
      output: CreateGatewayResponse;
    };
    sdk: {
      input: CreateGatewayCommandInput;
      output: CreateGatewayCommandOutput;
    };
  };
}
