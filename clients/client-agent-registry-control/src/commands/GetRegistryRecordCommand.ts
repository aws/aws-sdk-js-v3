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
 * //   recordType: "MCP" || "AGENT" || "CUSTOM" || "SKILL" || "GATEWAY", // required
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
 * //     http: { // HttpDescriptor
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
 * //     agui: { // AgUiDescriptor
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
 * //   },
 * //   recordVersion: "STRING_VALUE",
 * //   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "DEPRECATED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   statusReason: "STRING_VALUE",
 * //   provenance: [ // ProvenanceList
 * //     { // Provenance
 * //       relation: "DETECTED_FROM", // required
 * //       sourceId: "STRING_VALUE", // required
 * //       sourceType: "AWS::BedrockAgentCore::Runtime" || "AWS::BedrockAgentCore::Gateway",
 * //       sourceDetails: { // SourceDetails Union: only one key present
 * //         agentcoreRuntime: { // AgentCoreRuntimeSourceDetails
 * //           protocolConfiguration: { // AgentCoreRuntimeProtocolConfiguration
 * //             serverProtocol: "HTTP" || "A2A" || "MCP" || "AGUI",
 * //           },
 * //           authorizerConfiguration: { // AuthorizerConfiguration Union: only one key present
 * //             customJWTAuthorizer: { // CustomJWTAuthorizerConfiguration
 * //               discoveryUrl: "STRING_VALUE", // required
 * //               allowedAudience: [ // AllowedAudienceList
 * //                 "STRING_VALUE",
 * //               ],
 * //               allowedClients: [ // AllowedClientsList
 * //                 "STRING_VALUE",
 * //               ],
 * //               allowedScopes: [ // AllowedScopesType
 * //                 "STRING_VALUE",
 * //               ],
 * //               customClaims: [ // CustomClaimValidationsType
 * //                 { // CustomClaimValidationType
 * //                   inboundTokenClaimName: "STRING_VALUE", // required
 * //                   inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 * //                   authorizingClaimMatchValue: { // AuthorizingClaimMatchValueType
 * //                     claimMatchValue: { // ClaimMatchValueType Union: only one key present
 * //                       matchValueString: "STRING_VALUE",
 * //                       matchValueStringList: [ // MatchValueStringList
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 * //                   },
 * //                 },
 * //               ],
 * //               privateEndpoint: { // PrivateEndpoint Union: only one key present
 * //                 selfManagedLatticeResource: { // SelfManagedLatticeResource Union: only one key present
 * //                   resourceConfigurationIdentifier: "STRING_VALUE",
 * //                 },
 * //                 managedVpcResource: { // ManagedVpcResource
 * //                   vpcIdentifier: "STRING_VALUE", // required
 * //                   subnetIds: [ // SubnetIds // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                   securityGroupIds: [ // SecurityGroupIds
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   tags: { // TagsMap
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   routingDomain: "STRING_VALUE",
 * //                 },
 * //               },
 * //               privateEndpointOverrides: [ // PrivateEndpointOverrides
 * //                 { // PrivateEndpointOverride
 * //                   domain: "STRING_VALUE", // required
 * //                   privateEndpoint: {//  Union: only one key present
 * //                     selfManagedLatticeResource: {//  Union: only one key present
 * //                       resourceConfigurationIdentifier: "STRING_VALUE",
 * //                     },
 * //                     managedVpcResource: {
 * //                       vpcIdentifier: "STRING_VALUE", // required
 * //                       subnetIds: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                       securityGroupIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       tags: {
 * //                         "<keys>": "STRING_VALUE",
 * //                       },
 * //                       routingDomain: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           workloadIdentityDetails: { // WorkloadIdentityDetails
 * //             workloadIdentityArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         agentcoreGateway: { // AgentCoreGatewaySourceDetails
 * //           protocolType: "MCP",
 * //           authorizerType: "STRING_VALUE",
 * //           authorizerConfiguration: {//  Union: only one key present
 * //             customJWTAuthorizer: {
 * //               discoveryUrl: "STRING_VALUE", // required
 * //               allowedAudience: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               allowedClients: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               allowedScopes: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               customClaims: [
 * //                 {
 * //                   inboundTokenClaimName: "STRING_VALUE", // required
 * //                   inboundTokenClaimValueType: "STRING" || "STRING_ARRAY", // required
 * //                   authorizingClaimMatchValue: {
 * //                     claimMatchValue: {//  Union: only one key present
 * //                       matchValueString: "STRING_VALUE",
 * //                       matchValueStringList: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     claimMatchOperator: "EQUALS" || "CONTAINS" || "CONTAINS_ANY", // required
 * //                   },
 * //                 },
 * //               ],
 * //               privateEndpoint: {//  Union: only one key present
 * //                 selfManagedLatticeResource: {//  Union: only one key present
 * //                   resourceConfigurationIdentifier: "STRING_VALUE",
 * //                 },
 * //                 managedVpcResource: {
 * //                   vpcIdentifier: "STRING_VALUE", // required
 * //                   subnetIds: [ // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                   securityGroupIds: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   tags: {
 * //                     "<keys>": "STRING_VALUE",
 * //                   },
 * //                   routingDomain: "STRING_VALUE",
 * //                 },
 * //               },
 * //               privateEndpointOverrides: [
 * //                 {
 * //                   domain: "STRING_VALUE", // required
 * //                   privateEndpoint: {//  Union: only one key present
 * //                     selfManagedLatticeResource: {//  Union: only one key present
 * //                       resourceConfigurationIdentifier: "STRING_VALUE",
 * //                     },
 * //                     managedVpcResource: {
 * //                       vpcIdentifier: "STRING_VALUE", // required
 * //                       subnetIds: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       endpointIpAddressType: "IPV4" || "IPV6", // required
 * //                       securityGroupIds: [
 * //                         "STRING_VALUE",
 * //                       ],
 * //                       tags: {
 * //                         "<keys>": "STRING_VALUE",
 * //                       },
 * //                       routingDomain: "STRING_VALUE",
 * //                     },
 * //                   },
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //           workloadIdentityDetails: {
 * //             workloadIdentityArn: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   createdByAutoDetection: true || false,
 * //   createdBy: "STRING_VALUE",
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
