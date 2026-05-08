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
import type { GetRegistryRecordRequest, GetRegistryRecordResponse } from "../models/models_1";
import { GetRegistryRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRegistryRecordCommand}.
 */
export interface GetRegistryRecordCommandInput extends GetRegistryRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetRegistryRecordCommand}.
 */
export interface GetRegistryRecordCommandOutput extends GetRegistryRecordResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific registry record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetRegistryRecordCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetRegistryRecordCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetRegistryRecordRequest
 *   registryId: "STRING_VALUE", // required
 *   recordId: "STRING_VALUE", // required
 * };
 * const command = new GetRegistryRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetRegistryRecordResponse
 * //   registryArn: "STRING_VALUE", // required
 * //   recordArn: "STRING_VALUE", // required
 * //   recordId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   descriptorType: "MCP" || "A2A" || "CUSTOM" || "AGENT_SKILLS", // required
 * //   descriptors: { // Descriptors
 * //     mcp: { // McpDescriptor
 * //       server: { // ServerDefinition
 * //         schemaVersion: "STRING_VALUE",
 * //         inlineContent: "STRING_VALUE",
 * //       },
 * //       tools: { // ToolsDefinition
 * //         protocolVersion: "STRING_VALUE",
 * //         inlineContent: "STRING_VALUE",
 * //       },
 * //     },
 * //     a2a: { // A2aDescriptor
 * //       agentCard: { // AgentCardDefinition
 * //         schemaVersion: "STRING_VALUE",
 * //         inlineContent: "STRING_VALUE",
 * //       },
 * //     },
 * //     custom: { // CustomDescriptor
 * //       inlineContent: "STRING_VALUE",
 * //     },
 * //     agentSkills: { // AgentSkillsDescriptor
 * //       skillMd: { // SkillMdDefinition
 * //         inlineContent: "STRING_VALUE",
 * //       },
 * //       skillDefinition: { // SkillDefinition
 * //         schemaVersion: "STRING_VALUE",
 * //         inlineContent: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   recordVersion: "STRING_VALUE",
 * //   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   statusReason: "STRING_VALUE",
 * //   synchronizationType: "URL",
 * //   synchronizationConfiguration: { // SynchronizationConfiguration
 * //     fromUrl: { // FromUrlSynchronizationConfiguration
 * //       url: "STRING_VALUE", // required
 * //       credentialProviderConfigurations: [ // RegistryRecordCredentialProviderConfigurationList
 * //         { // RegistryRecordCredentialProviderConfiguration
 * //           credentialProviderType: "OAUTH" || "IAM", // required
 * //           credentialProvider: { // RegistryRecordCredentialProviderUnion Union: only one key present
 * //             oauthCredentialProvider: { // RegistryRecordOAuthCredentialProvider
 * //               providerArn: "STRING_VALUE", // required
 * //               grantType: "CLIENT_CREDENTIALS",
 * //               scopes: [ // ScopeList
 * //                 "STRING_VALUE",
 * //               ],
 * //               customParameters: { // CustomParameterMap
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //             },
 * //             iamCredentialProvider: { // RegistryRecordIamCredentialProvider
 * //               roleArn: "STRING_VALUE",
 * //               service: "STRING_VALUE",
 * //               region: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRegistryRecordCommandInput - {@link GetRegistryRecordCommandInput}
 * @returns {@link GetRegistryRecordCommandOutput}
 * @see {@link GetRegistryRecordCommandInput} for command's `input` shape.
 * @see {@link GetRegistryRecordCommandOutput} for command's `response` shape.
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
export class GetRegistryRecordCommand extends $Command
  .classBuilder<
    GetRegistryRecordCommandInput,
    GetRegistryRecordCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetRegistryRecord", {})
  .n("BedrockAgentCoreControlClient", "GetRegistryRecordCommand")
  .sc(GetRegistryRecord$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRegistryRecordRequest;
      output: GetRegistryRecordResponse;
    };
    sdk: {
      input: GetRegistryRecordCommandInput;
      output: GetRegistryRecordCommandOutput;
    };
  };
}
