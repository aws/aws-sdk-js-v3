// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRegistryRecordRequest, GetRegistryRecordResponse } from "../models/models_0";
import { GetRegistryRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Retrieves the details of a registry record</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AgentRegistryControlClient, GetRegistryRecordCommand } from "@aws-sdk/client-agent-registry-control"; // ES Modules import
 * // const { AgentRegistryControlClient, GetRegistryRecordCommand } = require("@aws-sdk/client-agent-registry-control"); // CommonJS import
 * // import type { AgentRegistryControlClientConfig } from "@aws-sdk/client-agent-registry-control";
 * const config = {}; // type is AgentRegistryControlClientConfig
 * const client = new AgentRegistryControlClient(config);
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
 * @param GetRegistryRecordCommandInput - {@link GetRegistryRecordCommandInput}
 * @returns {@link GetRegistryRecordCommandOutput}
 * @see {@link GetRegistryRecordCommandInput} for command's `input` shape.
 * @see {@link GetRegistryRecordCommandOutput} for command's `response` shape.
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
export class GetRegistryRecordCommand extends command<GetRegistryRecordCommandInput, GetRegistryRecordCommandOutput>(
  _ep0,
  _mw0,
  "GetRegistryRecord",
  GetRegistryRecord$
) {
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
