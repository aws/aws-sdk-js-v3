// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRegistryRecordRequest, UpdateRegistryRecordResponse } from "../models/models_0";
import { UpdateRegistryRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Updates a registry record. The update is asynchronous: the record is returned with the UPDATING status while it is processed. Fields that use update wrappers follow PATCH semantics: omit the field to leave it unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, UpdateRegistryRecordCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, UpdateRegistryRecordCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
 * const input = { // UpdateRegistryRecordRequest
 *   registryId: "STRING_VALUE", // required
 *   recordId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   displayName: { // UpdatedDisplayName
 *     optionalValue: "STRING_VALUE",
 *   },
 *   description: { // UpdatedDescription
 *     optionalValue: "STRING_VALUE",
 *   },
 *   recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL",
 *   descriptors: { // UpdatedDescriptors
 *     optionalValue: { // UpdatedDescriptorsFields
 *       mcpServer: { // UpdatedMcpServerDescriptor
 *         optionalValue: { // UpdatedMcpServerDescriptorFields
 *           data: { // UpdatedDescriptorData
 *             optionalValue: "STRING_VALUE",
 *           },
 *           dataSchemaVersion: { // UpdatedDataSchemaVersion
 *             optionalValue: "STRING_VALUE",
 *           },
 *           source: { // UpdatedDescriptorSource
 *             optionalValue: { // DescriptorSource
 *               fromUrl: { // DescriptorSourceFromUrl
 *                 url: "STRING_VALUE", // required
 *                 credentialProviderConfigurations: [ // RegistryRecordCredentialProviderConfigurationList
 *                   { // RegistryRecordCredentialProviderConfiguration
 *                     credentialProviderType: "OAUTH" || "IAM", // required
 *                     credentialProvider: { // RegistryRecordCredentialProviderUnion Union: only one key present
 *                       oauthCredentialProvider: { // RegistryRecordOAuthCredentialProvider
 *                         providerArn: "STRING_VALUE", // required
 *                         grantType: "CLIENT_CREDENTIALS",
 *                         scopes: [ // ScopeList
 *                           "STRING_VALUE",
 *                         ],
 *                         customParameters: { // CustomParameterMap
 *                           "<keys>": "STRING_VALUE",
 *                         },
 *                       },
 *                       iamCredentialProvider: { // RegistryRecordIamCredentialProvider
 *                         roleArn: "STRING_VALUE",
 *                         service: "STRING_VALUE",
 *                         region: "STRING_VALUE",
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *           additionalData: { // UpdatedMcpServerAdditionalData
 *             optionalValue: { // UpdatedMcpServerAdditionalDataFields
 *               tools: { // UpdatedMcpToolsDescriptor
 *                 optionalValue: { // UpdatedMcpToolsDescriptorFields
 *                   data: {
 *                     optionalValue: "STRING_VALUE",
 *                   },
 *                   dataSchemaVersion: {
 *                     optionalValue: "STRING_VALUE",
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         },
 *       },
 *       a2aAgentCard: { // UpdatedA2aAgentCardDescriptor
 *         optionalValue: { // UpdatedA2aAgentCardDescriptorFields
 *           data: {
 *             optionalValue: "STRING_VALUE",
 *           },
 *           dataSchemaVersion: {
 *             optionalValue: "STRING_VALUE",
 *           },
 *           source: {
 *             optionalValue: {
 *               fromUrl: {
 *                 url: "STRING_VALUE", // required
 *                 credentialProviderConfigurations: [
 *                   {
 *                     credentialProviderType: "OAUTH" || "IAM", // required
 *                     credentialProvider: {//  Union: only one key present
 *                       oauthCredentialProvider: {
 *                         providerArn: "STRING_VALUE", // required
 *                         grantType: "CLIENT_CREDENTIALS",
 *                         scopes: [
 *                           "STRING_VALUE",
 *                         ],
 *                         customParameters: {
 *                           "<keys>": "STRING_VALUE",
 *                         },
 *                       },
 *                       iamCredentialProvider: {
 *                         roleArn: "STRING_VALUE",
 *                         service: "STRING_VALUE",
 *                         region: "STRING_VALUE",
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *         },
 *       },
 *       agentSkillsDefinition: { // UpdatedAgentSkillsDefinitionDescriptor
 *         optionalValue: { // UpdatedAgentSkillsDefinitionDescriptorFields
 *           data: {
 *             optionalValue: "STRING_VALUE",
 *           },
 *           dataSchemaVersion: {
 *             optionalValue: "STRING_VALUE",
 *           },
 *           additionalData: { // UpdatedAgentSkillsAdditionalData
 *             optionalValue: { // UpdatedAgentSkillsAdditionalDataFields
 *               skillMd: { // UpdatedAgentSkillsMdDescriptor
 *                 optionalValue: { // UpdatedAgentSkillsMdDescriptorFields
 *                   data: {
 *                     optionalValue: "STRING_VALUE",
 *                   },
 *                   dataSchemaVersion: {
 *                     optionalValue: "STRING_VALUE",
 *                   },
 *                   source: {
 *                     optionalValue: {
 *                       fromUrl: {
 *                         url: "STRING_VALUE", // required
 *                         credentialProviderConfigurations: [
 *                           {
 *                             credentialProviderType: "OAUTH" || "IAM", // required
 *                             credentialProvider: {//  Union: only one key present
 *                               oauthCredentialProvider: {
 *                                 providerArn: "STRING_VALUE", // required
 *                                 grantType: "CLIENT_CREDENTIALS",
 *                                 scopes: [
 *                                   "STRING_VALUE",
 *                                 ],
 *                                 customParameters: {
 *                                   "<keys>": "STRING_VALUE",
 *                                 },
 *                               },
 *                               iamCredentialProvider: {
 *                                 roleArn: "STRING_VALUE",
 *                                 service: "STRING_VALUE",
 *                                 region: "STRING_VALUE",
 *                               },
 *                             },
 *                           },
 *                         ],
 *                       },
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         },
 *       },
 *       custom: { // UpdatedCustomDescriptor
 *         optionalValue: { // UpdatedCustomDescriptorFields
 *           data: "<UpdatedDescriptorData>",
 *         },
 *       },
 *     },
 *   },
 *   recordVersion: "STRING_VALUE",
 *   triggerSynchronization: true || false,
 * };
 * const command = new UpdateRegistryRecordCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRegistryRecordResponse
 * //   registryArn: "STRING_VALUE", // required
 * //   recordArn: "STRING_VALUE", // required
 * //   recordId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL", // required
 * //   descriptors: { // Descriptors
 * //     mcpServer: { // McpServerDescriptor
 * //       data: "STRING_VALUE",
 * //       dataSchemaVersion: "STRING_VALUE",
 * //       additionalData: { // McpServerAdditionalData
 * //         tools: { // McpToolsDescriptor
 * //           data: "STRING_VALUE",
 * //           dataSchemaVersion: "STRING_VALUE",
 * //         },
 * //       },
 * //       source: { // DescriptorSource
 * //         fromUrl: { // DescriptorSourceFromUrl
 * //           url: "STRING_VALUE", // required
 * //           credentialProviderConfigurations: [ // RegistryRecordCredentialProviderConfigurationList
 * //             { // RegistryRecordCredentialProviderConfiguration
 * //               credentialProviderType: "OAUTH" || "IAM", // required
 * //               credentialProvider: { // RegistryRecordCredentialProviderUnion Union: only one key present
 * //                 oauthCredentialProvider: { // RegistryRecordOAuthCredentialProvider
 * //                   providerArn: "STRING_VALUE", // required
 * //                   grantType: "CLIENT_CREDENTIALS",
 * //                   scopes: [ // ScopeList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   customParameters: { // CustomParameterMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 iamCredentialProvider: { // RegistryRecordIamCredentialProvider
 * //                   roleArn: "STRING_VALUE",
 * //                   service: "STRING_VALUE",
 * //                   region: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     a2aAgentCard: { // A2aAgentCardDescriptor
 * //       data: "STRING_VALUE",
 * //       dataSchemaVersion: "STRING_VALUE",
 * //       source: {
 * //         fromUrl: {
 * //           url: "STRING_VALUE", // required
 * //           credentialProviderConfigurations: [
 * //             {
 * //               credentialProviderType: "OAUTH" || "IAM", // required
 * //               credentialProvider: {//  Union: only one key present
 * //                 oauthCredentialProvider: {
 * //                   providerArn: "STRING_VALUE", // required
 * //                   grantType: "CLIENT_CREDENTIALS",
 * //                   scopes: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   customParameters: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                 },
 * //                 iamCredentialProvider: {
 * //                   roleArn: "STRING_VALUE",
 * //                   service: "STRING_VALUE",
 * //                   region: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     agentSkillsDefinition: { // AgentSkillsDefinitionDescriptor
 * //       data: "STRING_VALUE",
 * //       dataSchemaVersion: "STRING_VALUE",
 * //       additionalData: { // AgentSkillsAdditionalData
 * //         skillMd: { // AgentSkillsMdDescriptor
 * //           data: "STRING_VALUE",
 * //           dataSchemaVersion: "STRING_VALUE",
 * //           source: {
 * //             fromUrl: {
 * //               url: "STRING_VALUE", // required
 * //               credentialProviderConfigurations: [
 * //                 {
 * //                   credentialProviderType: "OAUTH" || "IAM", // required
 * //                   credentialProvider: {//  Union: only one key present
 * //                     oauthCredentialProvider: {
 * //                       providerArn: "STRING_VALUE", // required
 * //                       grantType: "CLIENT_CREDENTIALS",
 * //                       scopes: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       customParameters: {
 * //                         "<keys>": "STRING_VALUE",
 * //                       },
 * //                     },
 * //                     iamCredentialProvider: {
 * //                       roleArn: "STRING_VALUE",
 * //                       service: "STRING_VALUE",
 * //                       region: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     custom: { // CustomDescriptor
 * //       data: "STRING_VALUE",
 * //     },
 * //   },
 * //   recordVersion: "STRING_VALUE",
 * //   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRegistryRecordCommandInput - {@link UpdateRegistryRecordCommandInput}
 * @returns {@link UpdateRegistryRecordCommandOutput}
 * @see {@link UpdateRegistryRecordCommandInput} for command's `input` shape.
 * @see {@link UpdateRegistryRecordCommandOutput} for command's `response` shape.
 * @see {@link AgentRegistryControlClientResolvedConfig | config} for AgentRegistryControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The caller is not authorized to perform the requested action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed due to an unexpected internal error; the caller may retry.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling; the caller may retry after a delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation of one or more input fields.</p>
 *
 * @throws {@link AgentRegistryControlServiceException}
 * <p>Base exception class for all service exceptions from AgentRegistryControl service.</p>
 *
 *
 * @public
 */
export class UpdateRegistryRecordCommand extends command<UpdateRegistryRecordCommandInput, UpdateRegistryRecordCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRegistryRecord",
  UpdateRegistryRecord$
) {
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
