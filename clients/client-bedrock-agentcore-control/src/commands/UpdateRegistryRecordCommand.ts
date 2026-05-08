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
import type { UpdateRegistryRecordRequest, UpdateRegistryRecordResponse } from "../models/models_1";
import { UpdateRegistryRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRegistryRecordCommand}.
 */
export interface UpdateRegistryRecordCommandInput extends UpdateRegistryRecordRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRegistryRecordCommand}.
 */
export interface UpdateRegistryRecordCommandOutput extends UpdateRegistryRecordResponse, __MetadataBearer {}

/**
 * <p>Updates an existing registry record. This operation uses PATCH semantics, so you only need to specify the fields you want to change. The update is processed asynchronously and returns HTTP 202 Accepted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateRegistryRecordCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateRegistryRecordCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateRegistryRecordRequest
 *   registryId: "STRING_VALUE", // required
 *   recordId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: { // UpdatedDescription
 *     optionalValue: "STRING_VALUE",
 *   },
 *   descriptorType: "MCP" || "A2A" || "CUSTOM" || "AGENT_SKILLS",
 *   descriptors: { // UpdatedDescriptors
 *     optionalValue: { // UpdatedDescriptorsUnion
 *       mcp: { // UpdatedMcpDescriptor
 *         optionalValue: { // UpdatedMcpDescriptorFields
 *           server: { // UpdatedServerDefinition
 *             optionalValue: { // ServerDefinition
 *               schemaVersion: "STRING_VALUE",
 *               inlineContent: "STRING_VALUE",
 *             },
 *           },
 *           tools: { // UpdatedToolsDefinition
 *             optionalValue: { // ToolsDefinition
 *               protocolVersion: "STRING_VALUE",
 *               inlineContent: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       },
 *       a2a: { // UpdatedA2aDescriptor
 *         optionalValue: { // A2aDescriptor
 *           agentCard: { // AgentCardDefinition
 *             schemaVersion: "STRING_VALUE",
 *             inlineContent: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       custom: { // UpdatedCustomDescriptor
 *         optionalValue: { // CustomDescriptor
 *           inlineContent: "STRING_VALUE",
 *         },
 *       },
 *       agentSkills: { // UpdatedAgentSkillsDescriptor
 *         optionalValue: { // UpdatedAgentSkillsDescriptorFields
 *           skillMd: { // UpdatedSkillMdDefinition
 *             optionalValue: { // SkillMdDefinition
 *               inlineContent: "STRING_VALUE",
 *             },
 *           },
 *           skillDefinition: { // UpdatedSkillDefinition
 *             optionalValue: { // SkillDefinition
 *               schemaVersion: "STRING_VALUE",
 *               inlineContent: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       },
 *     },
 *   },
 *   recordVersion: "STRING_VALUE",
 *   synchronizationType: { // UpdatedSynchronizationType
 *     optionalValue: "URL",
 *   },
 *   synchronizationConfiguration: { // UpdatedSynchronizationConfiguration
 *     optionalValue: { // SynchronizationConfiguration
 *       fromUrl: { // FromUrlSynchronizationConfiguration
 *         url: "STRING_VALUE", // required
 *         credentialProviderConfigurations: [ // RegistryRecordCredentialProviderConfigurationList
 *           { // RegistryRecordCredentialProviderConfiguration
 *             credentialProviderType: "OAUTH" || "IAM", // required
 *             credentialProvider: { // RegistryRecordCredentialProviderUnion Union: only one key present
 *               oauthCredentialProvider: { // RegistryRecordOAuthCredentialProvider
 *                 providerArn: "STRING_VALUE", // required
 *                 grantType: "CLIENT_CREDENTIALS",
 *                 scopes: [ // ScopeList
 *                   "STRING_VALUE",
 *                 ],
 *                 customParameters: { // CustomParameterMap
 *                   "<keys>": "STRING_VALUE",
 *                 },
 *               },
 *               iamCredentialProvider: { // RegistryRecordIamCredentialProvider
 *                 roleArn: "STRING_VALUE",
 *                 service: "STRING_VALUE",
 *                 region: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   triggerSynchronization: true || false,
 * };
 * const command = new UpdateRegistryRecordCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegistryRecordResponse
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
 * @param UpdateRegistryRecordCommandInput - {@link UpdateRegistryRecordCommandInput}
 * @returns {@link UpdateRegistryRecordCommandOutput}
 * @see {@link UpdateRegistryRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryRecordCommandOutput} for command's `response` shape.
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
export class UpdateRegistryRecordCommand extends $Command
  .classBuilder<
    UpdateRegistryRecordCommandInput,
    UpdateRegistryRecordCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateRegistryRecord", {})
  .n("BedrockAgentCoreControlClient", "UpdateRegistryRecordCommand")
  .sc(UpdateRegistryRecord$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRegistryRecordRequest;
      output: UpdateRegistryRecordResponse;
    };
    sdk: {
      input: UpdateRegistryRecordCommandInput;
      output: UpdateRegistryRecordCommandOutput;
    };
  };
}
