// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentCoreGatewayProtocolType,
  AgentCoreRuntimeServerProtocol,
  AutoApprovalRule,
  AutoDetectionScope,
  AutoDetectionStatus,
  ClaimMatchOperatorType,
  CustomMetadataSchemaComplianceStatus,
  EndpointIpAddressType,
  InboundTokenClaimValueType,
  ProvenanceRelation,
  RecordType,
  RegistryAuthorizerType,
  RegistryFilterName,
  RegistryRecordCredentialProviderType,
  RegistryRecordFilterName,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryStatus,
  SourceType,
} from "./enums";

/**
 * The configuration for an IAM role credential provider that signs requests to a registry record's source with Amazon Web Services Signature Version 4 (SigV4).
 *
 * @public
 */
export interface RegistryRecordIamCredentialProvider {
  /**
   * The Amazon Resource Name (ARN) of the IAM role to assume for request signing.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The service name to use for request signing, such as execute-api.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The Amazon Web Services Region to use for request signing. If not specified, the Region is derived from the source URL hostname, falling back to the Region of the registry.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * The configuration for an OAuth 2.0 credential provider that authenticates requests to a registry record's source.
 *
 * @public
 */
export interface RegistryRecordOAuthCredentialProvider {
  /**
   * The Amazon Resource Name (ARN) of the OAuth 2.0 credential provider resource in Amazon Bedrock AgentCore Identity.
   *
   * @public
   */
  providerArn: string | undefined;

  /**
   * The OAuth 2.0 grant type used to obtain access tokens.
   *
   * @public
   */
  grantType?: RegistryRecordOAuthGrantType | undefined;

  /**
   * The OAuth 2.0 scopes to request when obtaining access tokens.
   *
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * Additional parameters to include in the OAuth 2.0 token request.
   *
   * @public
   */
  customParameters?: Record<string, string> | undefined;
}

/**
 * The credential provider details for a registry record. Exactly one member is populated, matching the configured credential provider type.
 *
 * @public
 */
export type RegistryRecordCredentialProviderUnion =
  | RegistryRecordCredentialProviderUnion.IamCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.OauthCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.$UnknownMember;

/**
 * @public
 */
export namespace RegistryRecordCredentialProviderUnion {
  /**
   * The OAuth 2.0 credential provider details.
   *
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * The IAM role credential provider details.
   *
   * @public
   */
  export interface IamCredentialProviderMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider: RegistryRecordIamCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: RegistryRecordOAuthCredentialProvider) => T;
    iamCredentialProvider: (value: RegistryRecordIamCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A credential provider configuration that specifies how to authenticate when fetching descriptor content from a registry record's source URL.
 *
 * @public
 */
export interface RegistryRecordCredentialProviderConfiguration {
  /**
   * The type of credential provider.
   *
   * @public
   */
  credentialProviderType: RegistryRecordCredentialProviderType | undefined;

  /**
   * The credential provider details corresponding to the specified credential provider type.
   *
   * @public
   */
  credentialProvider: RegistryRecordCredentialProviderUnion | undefined;
}

/**
 * URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.
 *
 * @public
 */
export interface DescriptorSourceFromUrl {
  /**
   * The URL from which the descriptor content is retrieved.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The credential providers used to authenticate when fetching descriptor content from the source URL.
   *
   * @public
   */
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[] | undefined;
}

/**
 * The source configuration that defines where descriptor content is retrieved from.
 *
 * @public
 */
export interface DescriptorSource {
  /**
   * URL-based descriptor source, populated when descriptor content is synchronized from a URL.
   *
   * @public
   */
  fromUrl?: DescriptorSourceFromUrl | undefined;
}

/**
 * Descriptor that defines the content of an A2A (Agent-to-Agent) agent card registry record. The content is validated against the A2A protocol schema.
 *
 * @public
 */
export interface A2aAgentCardDescriptor {
  /**
   * The A2A agent card content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * The optional source configuration used to synchronize the A2A agent card descriptor content.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * The expected value used to match a claim. Exactly one member is set.
 *
 * @public
 */
export type ClaimMatchValueType =
  | ClaimMatchValueType.MatchValueStringMember
  | ClaimMatchValueType.MatchValueStringListMember
  | ClaimMatchValueType.$UnknownMember;

/**
 * @public
 */
export namespace ClaimMatchValueType {
  /**
   * A single string value to match the claim against.
   *
   * @public
   */
  export interface MatchValueStringMember {
    matchValueString: string;
    matchValueStringList?: never;
    $unknown?: never;
  }

  /**
   * A list of string values to match the claim against.
   *
   * @public
   */
  export interface MatchValueStringListMember {
    matchValueString?: never;
    matchValueStringList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    matchValueString?: never;
    matchValueStringList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    matchValueString: (value: string) => T;
    matchValueStringList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The value and match operator used to authorize a claim during JWT validation.
 *
 * @public
 */
export interface AuthorizingClaimMatchValueType {
  /**
   * The expected value or values that the claim is compared against.
   *
   * @public
   */
  claimMatchValue: ClaimMatchValueType | undefined;

  /**
   * The operator used to compare the claim value against the expected value.
   *
   * @public
   */
  claimMatchOperator: ClaimMatchOperatorType | undefined;
}

/**
 * A validation rule applied to a single claim of an inbound JWT.
 *
 * @public
 */
export interface CustomClaimValidationType {
  /**
   * The name of the claim in the inbound token to validate.
   *
   * @public
   */
  inboundTokenClaimName: string | undefined;

  /**
   * The value type of the claim in the inbound token, either a string or an array of strings.
   *
   * @public
   */
  inboundTokenClaimValueType: InboundTokenClaimValueType | undefined;

  /**
   * The value and match operator used to authorize the claim.
   *
   * @public
   */
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType | undefined;
}

/**
 * A service-managed private endpoint provisioned within a customer VPC.
 *
 * @public
 */
export interface ManagedVpcResource {
  /**
   * The identifier of the VPC in which the private endpoint is provisioned.
   *
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * The identifiers of the subnets in which the private endpoint network interfaces are placed.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The IP address type used by the private endpoint, either IPV4 or IPV6.
   *
   * @public
   */
  endpointIpAddressType: EndpointIpAddressType | undefined;

  /**
   * The identifiers of the security groups associated with the private endpoint network interfaces.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The tags applied to the service-managed VPC resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The routing domain used to resolve traffic through the private endpoint.
   *
   * @public
   */
  routingDomain?: string | undefined;
}

/**
 * A self-managed private endpoint backed by a VPC Lattice resource configuration. Exactly one member is set.
 *
 * @public
 */
export type SelfManagedLatticeResource =
  | SelfManagedLatticeResource.ResourceConfigurationIdentifierMember
  | SelfManagedLatticeResource.$UnknownMember;

/**
 * @public
 */
export namespace SelfManagedLatticeResource {
  /**
   * The identifier of the VPC Lattice resource configuration, specified as a resource configuration ID or ARN.
   *
   * @public
   */
  export interface ResourceConfigurationIdentifierMember {
    resourceConfigurationIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resourceConfigurationIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resourceConfigurationIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A private network endpoint used to reach a resource over a private path. Exactly one member is set.
 *
 * @public
 */
export type PrivateEndpoint =
  | PrivateEndpoint.ManagedVpcResourceMember
  | PrivateEndpoint.SelfManagedLatticeResourceMember
  | PrivateEndpoint.$UnknownMember;

/**
 * @public
 */
export namespace PrivateEndpoint {
  /**
   * A private endpoint backed by a self-managed VPC Lattice resource configuration.
   *
   * @public
   */
  export interface SelfManagedLatticeResourceMember {
    selfManagedLatticeResource: SelfManagedLatticeResource;
    managedVpcResource?: never;
    $unknown?: never;
  }

  /**
   * A private endpoint backed by a service-managed VPC resource.
   *
   * @public
   */
  export interface ManagedVpcResourceMember {
    selfManagedLatticeResource?: never;
    managedVpcResource: ManagedVpcResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    selfManagedLatticeResource?: never;
    managedVpcResource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    selfManagedLatticeResource: (value: SelfManagedLatticeResource) => T;
    managedVpcResource: (value: ManagedVpcResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A mapping of a domain to the private endpoint used to reach it.
 *
 * @public
 */
export interface PrivateEndpointOverride {
  /**
   * The domain name to which this private endpoint override applies.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The private endpoint used to reach the specified domain.
   *
   * @public
   */
  privateEndpoint: PrivateEndpoint | undefined;
}

/**
 * Configuration for a custom JWT authorizer that validates inbound bearer tokens against an OpenID Connect identity provider.
 *
 * @public
 */
export interface CustomJWTAuthorizerConfiguration {
  /**
   * The OpenID Connect discovery URL used to retrieve the identity provider's metadata and signing keys.
   *
   * @public
   */
  discoveryUrl: string | undefined;

  /**
   * The audience values accepted during JWT validation. A token is rejected if none of its audience claims match.
   *
   * @public
   */
  allowedAudience?: string[] | undefined;

  /**
   * The client identifiers accepted during JWT validation. A token is rejected if it was not issued to one of these clients.
   *
   * @public
   */
  allowedClients?: string[] | undefined;

  /**
   * The scopes accepted during JWT validation. A token is rejected if it does not carry one of these scopes.
   *
   * @public
   */
  allowedScopes?: string[] | undefined;

  /**
   * Additional custom claim validations applied to the inbound JWT.
   *
   * @public
   */
  customClaims?: CustomClaimValidationType[] | undefined;

  /**
   * The private endpoint used to reach the identity provider's discovery URL over a private network path.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * Per-domain private endpoint overrides that route specific identity provider domains through distinct private endpoints.
   *
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;
}

/**
 * The authorizer configuration for a registry. Exactly one member is set.
 *
 * @public
 */
export type AuthorizerConfiguration =
  | AuthorizerConfiguration.CustomJWTAuthorizerMember
  | AuthorizerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizerConfiguration {
  /**
   * Configuration for a custom JWT authorizer.
   *
   * @public
   */
  export interface CustomJWTAuthorizerMember {
    customJWTAuthorizer: CustomJWTAuthorizerConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customJWTAuthorizer?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customJWTAuthorizer: (value: CustomJWTAuthorizerConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The workload identity details associated with a source resource. Present on the source details of a provenance entry when the upstream resource has a workload identity configured.
 *
 * @public
 */
export interface WorkloadIdentityDetails {
  /**
   * The Amazon Resource Name (ARN) of the workload identity associated with the source resource.
   *
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Gateway resource.
 *
 * @public
 */
export interface AgentCoreGatewaySourceDetails {
  /**
   * The protocol type of the AgentCore Gateway resource that the registry record was detected from, for example `MCP`.
   *
   * @public
   */
  protocolType?: AgentCoreGatewayProtocolType | undefined;

  /**
   * The type of authorizer configured on the AgentCore Gateway resource that the registry record was detected from.
   *
   * @public
   */
  authorizerType?: string | undefined;

  /**
   * The authorizer configuration for a registry. Exactly one member is set.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The workload identity details for the AgentCore Gateway resource. Present when the gateway has a workload identity configured.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;
}

/**
 * The protocol configuration of an AgentCore Runtime resource that a registry record was auto-detected from.
 *
 * @public
 */
export interface AgentCoreRuntimeProtocolConfiguration {
  /**
   * The server protocol used by the AgentCore Runtime, such as `MCP`, `HTTP`, `A2A`, or `AGUI`.
   *
   * @public
   */
  serverProtocol?: AgentCoreRuntimeServerProtocol | undefined;
}

/**
 * The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Runtime resource.
 *
 * @public
 */
export interface AgentCoreRuntimeSourceDetails {
  /**
   * The protocol configuration of the AgentCore Runtime resource that the registry record was detected from.
   *
   * @public
   */
  protocolConfiguration?: AgentCoreRuntimeProtocolConfiguration | undefined;

  /**
   * The authorizer configuration for a registry. Exactly one member is set.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The workload identity details for the AgentCore Runtime resource. Present when the runtime has a workload identity configured.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for. Supported resources include registries and registry records.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags currently associated with the resource, as a map of tag keys to tag values.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Describes a single input field that failed validation.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of why the field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Markdown-format descriptor containing an agent skills document.
 *
 * @public
 */
export interface AgentSkillsMdDescriptor {
  /**
   * The agent skills markdown content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * The optional source configuration used to synchronize the agent skills markdown content.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * Additional data associated with an agent skills definition descriptor.
 *
 * @public
 */
export interface AgentSkillsAdditionalData {
  /**
   * The markdown skill content associated with an agent skills definition.
   *
   * @public
   */
  skillMd?: AgentSkillsMdDescriptor | undefined;
}

/**
 * Descriptor that defines an agent skills registry record and its associated content.
 *
 * @public
 */
export interface AgentSkillsDefinitionDescriptor {
  /**
   * The agent skills definition content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * Additional data associated with the agent skills definition descriptor.
   *
   * @public
   */
  additionalData?: AgentSkillsAdditionalData | undefined;
}

/**
 * A registry record descriptor for the AG-UI (Agent-User Interaction) protocol.
 *
 * @public
 */
export interface AgUiDescriptor {
  /**
   * The source configuration that defines where descriptor content is retrieved from.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * Custom descriptor for user-defined content
 *
 * @public
 */
export interface CustomDescriptor {
  /**
   * The custom descriptor content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * A registry record descriptor for the HTTP protocol. This descriptor is source-only: its content is synchronized from the configured source URL rather than supplied inline.
 *
 * @public
 */
export interface HttpDescriptor {
  /**
   * The source configuration that defines where descriptor content is retrieved from.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * MCP tools descriptor containing tool definitions
 *
 * @public
 */
export interface McpToolsDescriptor {
  /**
   * The MCP tools descriptor content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;
}

/**
 * Additional data for an MCP server descriptor
 *
 * @public
 */
export interface McpServerAdditionalData {
  /**
   * The MCP tools descriptor that defines the tools exposed by the MCP server.
   *
   * @public
   */
  tools?: McpToolsDescriptor | undefined;
}

/**
 * Descriptor that defines the content of an MCP (Model Context Protocol) server registry record, including the server definition and its tool definitions. The content is validated against the MCP protocol schema.
 *
 * @public
 */
export interface McpServerDescriptor {
  /**
   * The MCP server descriptor content, serialized as descriptor payload data.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * The schema version of the descriptor payload.
   *
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * Additional data associated with the MCP server descriptor, such as tool definitions.
   *
   * @public
   */
  additionalData?: McpServerAdditionalData | undefined;

  /**
   * The optional source configuration used to synchronize the MCP server descriptor content.
   *
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.
 *
 * @public
 */
export interface Descriptors {
  /**
   * The MCP server descriptor, populated when the record type is MCP.
   *
   * @public
   */
  mcpServer?: McpServerDescriptor | undefined;

  /**
   * The A2A agent card descriptor, populated when the record type is AGENT.
   *
   * @public
   */
  a2aAgentCard?: A2aAgentCardDescriptor | undefined;

  /**
   * The agent skills definition descriptor, populated when the record type is SKILL.
   *
   * @public
   */
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor | undefined;

  /**
   * The custom descriptor, populated when the record type is CUSTOM.
   *
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * The HTTP descriptor, populated for records detected from an HTTP protocol source.
   *
   * @public
   */
  http?: HttpDescriptor | undefined;

  /**
   * The AG-UI descriptor, populated for records detected from an AG-UI protocol source.
   *
   * @public
   */
  agui?: AgUiDescriptor | undefined;
}

/**
 * The details about the upstream source from which a registry record was detected. Exactly one member is populated, corresponding to the source type.
 *
 * @public
 */
export type SourceDetails =
  | SourceDetails.AgentcoreGatewayMember
  | SourceDetails.AgentcoreRuntimeMember
  | SourceDetails.$UnknownMember;

/**
 * @public
 */
export namespace SourceDetails {
  /**
   * The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Runtime resource. Populated when the source type is `AWS::BedrockAgentCore::Runtime`.
   *
   * @public
   */
  export interface AgentcoreRuntimeMember {
    agentcoreRuntime: AgentCoreRuntimeSourceDetails;
    agentcoreGateway?: never;
    $unknown?: never;
  }

  /**
   * The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Gateway resource. Populated when the source type is `AWS::BedrockAgentCore::Gateway`.
   *
   * @public
   */
  export interface AgentcoreGatewayMember {
    agentcoreRuntime?: never;
    agentcoreGateway: AgentCoreGatewaySourceDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentcoreRuntime?: never;
    agentcoreGateway?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentcoreRuntime: (value: AgentCoreRuntimeSourceDetails) => T;
    agentcoreGateway: (value: AgentCoreGatewaySourceDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A provenance entry that describes the lineage of a registry record. Records that were auto-detected by Amazon Web Services Agent Registry carry a provenance entry that links the record back to its upstream source.
 *
 * @public
 */
export interface Provenance {
  /**
   * The relationship between the registry record and its upstream source. `DETECTED_FROM` indicates that the record was auto-detected from the source resource.
   *
   * @public
   */
  relation: ProvenanceRelation | undefined;

  /**
   * The identifier of the upstream source that the registry record was detected from.
   *
   * @public
   */
  sourceId: string | undefined;

  /**
   * The type of the upstream source that the registry record was detected from.
   *
   * @public
   */
  sourceType?: SourceType | undefined;

  /**
   * Additional details about the upstream source that the registry record was detected from, such as the AgentCore Gateway or Runtime configuration. The populated member corresponds to the source type.
   *
   * @public
   */
  sourceDetails?: SourceDetails | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordRequest {
  /**
   * The identifier of the registry in which to create the record (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The name of the registry record
   *
   * @public
   */
  name: string | undefined;

  /**
   * The human-readable display name of the registry record
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the registry record
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the registry record, which determines the descriptor format
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * The typed descriptor content for the registry record
   *
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * The version of the registry record
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * Client token for idempotency
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The provenance lineage entries for the registry record. This field is reserved for the Amazon Web Services Agent Registry auto-detection service principal. Requests that include this field from other callers are rejected.
   *
   * @public
   */
  provenance?: Provenance[] | undefined;

  /**
   * The custom metadata for the record. Values are strings or JSON booleans.
   *
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * Tags to associate with the registry record
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Response structure for creating a registry record
 *
 * @public
 */
export interface CreateRegistryRecordResponse {
  /**
   * The ARN of the created registry record
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The status of the registry record, set to CREATING while the asynchronous workflow is in progress
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordRequest {
  /**
   * The identifier of the registry containing the record (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to delete (ARN or ID)
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * Response structure for deleting a registry record
 *
 * @public
 */
export interface DeleteRegistryRecordResponse {}

/**
 * @public
 */
export interface GetRegistryRecordRequest {
  /**
   * The identifier of the registry containing the record (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to retrieve (ARN or ID)
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * Response structure for retrieving a registry record
 *
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * The Amazon Resource Name (ARN) of the parent registry that owns the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record. Names are unique within a registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The human-readable display name of the registry record.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * The typed descriptors that define the content of the registry record.
   *
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * The version identifier of the registry record.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The lifecycle status of the registry record.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the current status. Typically populated when the status indicates a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The provenance lineage entries for the registry record. Populated for records created by auto-detection; each entry identifies the upstream source that the record was detected from.
   *
   * @public
   */
  provenance?: Provenance[] | undefined;

  /**
   * Specifies whether the registry record was created by auto-detection. `true` indicates the record was automatically created by the service based on the registry's auto-detection configuration; `false` indicates the record was created through a control-plane API call.
   *
   * @public
   */
  createdByAutoDetection?: boolean | undefined;

  /**
   * The ID of the Amazon Web Services account that created the registry record.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The custom metadata attached to this registry record. Values are strings (maximum 128 characters) or booleans.
   *
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * Indicates whether this record's custom metadata conforms to the registry's current schema. This status is computed at read time against the latest schema.
   *
   * @public
   */
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus | undefined;
}

/**
 * A single filter applied to a ListRegistryRecords request.
 *
 * @public
 */
export interface RegistryRecordFilter {
  /**
   * The attribute to filter on
   *
   * @public
   */
  name: RegistryRecordFilterName | undefined;

  /**
   * The values to match for the attribute
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * The identifier of the registry to list records from (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * Maximum number of records to return
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters to apply to the registry record list
   *
   * @public
   */
  filters?: RegistryRecordFilter[] | undefined;
}

/**
 * A condensed provenance entry surfaced in list results. Contains the source identity of a lineage entry without the source details returned by `GetRegistryRecord`.
 *
 * @public
 */
export interface ProvenanceSummary {
  /**
   * The relationship between the registry record and its upstream source. `DETECTED_FROM` indicates that the record was auto-detected from the source resource.
   *
   * @public
   */
  relation: ProvenanceRelation | undefined;

  /**
   * The identifier of the upstream source that the registry record was detected from.
   *
   * @public
   */
  sourceId: string | undefined;

  /**
   * The type of the upstream source that the registry record was detected from.
   *
   * @public
   */
  sourceType?: SourceType | undefined;
}

/**
 * A summary of a registry record returned by list operations. Contains identifying and lifecycle fields but omits descriptor content.
 *
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * The Amazon Resource Name (ARN) of the parent registry that owns the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record. Names are unique within a registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The human-readable display name of the registry record.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * The version identifier of the registry record.
   *
   * @public
   */
  recordVersion: string | undefined;

  /**
   * The lifecycle status of the registry record.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Specifies whether the registry record was created by auto-detection. `true` indicates the record was automatically created by the service based on the registry's auto-detection configuration; `false` indicates the record was created through a control-plane API call.
   *
   * @public
   */
  createdByAutoDetection?: boolean | undefined;

  /**
   * The ID of the Amazon Web Services account that created the registry record.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The condensed provenance lineage for the registry record. Each entry contains the source relation, source identifier, and source type of an auto-detection lineage entry. Populated for records created by auto-detection.
   *
   * @public
   */
  provenanceSummaryList?: ProvenanceSummary[] | undefined;

  /**
   * Indicates whether this record's custom metadata conforms to the registry's current schema.
   *
   * @public
   */
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus | undefined;
}

/**
 * Response structure for listing registry records
 *
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * List of registry record summaries
   *
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * Token for next page of results
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * The identifier of the registry containing the record (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to submit for approval (ARN or ID)
   *
   * @public
   */
  recordId: string | undefined;
}

/**
 * Response structure for submitting a registry record for approval
 *
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * The ARN of the registry
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The ARN of the registry record
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The ID of the registry record
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The resulting status of the registry record
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the record was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The custom metadata patch wrapper. Omit to leave the existing metadata unchanged; supply with a null value to clear all metadata; supply with key-value pairs to replace the existing metadata.
 *
 * @public
 */
export interface UpdatedCustomMetadataMap {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: __DocumentType | undefined;
}

/**
 * Wrapper for updating an optional Description field with PATCH semantics
 *
 * @public
 */
export interface UpdatedDescription {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * Leaf patch wrapper for descriptor data. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.
 *
 * @public
 */
export interface UpdatedDescriptorData {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * Leaf patch wrapper for a descriptor's data schema version. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.
 *
 * @public
 */
export interface UpdatedDataSchemaVersion {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * Leaf patch wrapper for a descriptor's source configuration. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.
 *
 * @public
 */
export interface UpdatedDescriptorSource {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: DescriptorSource | undefined;
}

/**
 * The set of A2A agent card descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedA2aAgentCardDescriptorFields {
  /**
   * The patch for the descriptor's data field.
   *
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * The patch for the descriptor's data schema version field.
   *
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * The patch for the descriptor's source field.
   *
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * The A2A agent card descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedA2aAgentCardDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedA2aAgentCardDescriptorFields | undefined;
}

/**
 * The set of agent skills markdown descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedAgentSkillsMdDescriptorFields {
  /**
   * The patch for the descriptor's data field.
   *
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * The patch for the descriptor's data schema version field.
   *
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * The patch for the descriptor's source field.
   *
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * The agent skills markdown descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedAgentSkillsMdDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedAgentSkillsMdDescriptorFields | undefined;
}

/**
 * The set of agent skills additional-data fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedAgentSkillsAdditionalDataFields {
  /**
   * The patch for the agent skills markdown descriptor field.
   *
   * @public
   */
  skillMd?: UpdatedAgentSkillsMdDescriptor | undefined;
}

/**
 * The agent skills additional-data patch wrapper. Omit to leave the additional data unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedAgentSkillsAdditionalData {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedAgentSkillsAdditionalDataFields | undefined;
}

/**
 * The set of agent skills definition descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedAgentSkillsDefinitionDescriptorFields {
  /**
   * The patch for the descriptor's data field.
   *
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * The patch for the descriptor's data schema version field.
   *
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * The patch for the descriptor's additional data field.
   *
   * @public
   */
  additionalData?: UpdatedAgentSkillsAdditionalData | undefined;
}

/**
 * The agent skills definition descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedAgentSkillsDefinitionDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDefinitionDescriptorFields | undefined;
}

/**
 * The set of AG-UI descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedAgUiDescriptorFields {
  /**
   * The patch for the descriptor's source field.
   *
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * The AG-UI descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedAgUiDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedAgUiDescriptorFields | undefined;
}

/**
 * The set of custom descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedCustomDescriptorFields {
  /**
   * The patch for the descriptor's data field.
   *
   * @public
   */
  data?: UpdatedDescriptorData | undefined;
}

/**
 * The custom descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedCustomDescriptorFields | undefined;
}

/**
 * The set of HTTP descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedHttpDescriptorFields {
  /**
   * The patch for the descriptor's source field.
   *
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * The HTTP descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedHttpDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedHttpDescriptorFields | undefined;
}

/**
 * The set of MCP tools descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedMcpToolsDescriptorFields {
  /**
   * The patch for the descriptor's data field.
   *
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * The patch for the descriptor's data schema version field.
   *
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;
}

/**
 * The MCP tools descriptor patch wrapper. Omit to leave the tools descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedMcpToolsDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedMcpToolsDescriptorFields | undefined;
}

/**
 * The set of MCP server additional-data fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedMcpServerAdditionalDataFields {
  /**
   * The patch for the MCP tools descriptor field.
   *
   * @public
   */
  tools?: UpdatedMcpToolsDescriptor | undefined;
}

/**
 * The MCP server additional-data patch wrapper. Omit to leave the additional data unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedMcpServerAdditionalData {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedMcpServerAdditionalDataFields | undefined;
}

/**
 * The set of MCP server descriptor fields that can be individually updated.
 *
 * @public
 */
export interface UpdatedMcpServerDescriptorFields {
  /**
   * The patch for the descriptor's data field.
   *
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * The patch for the descriptor's data schema version field.
   *
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * The patch for the descriptor's source field.
   *
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;

  /**
   * The patch for the descriptor's additional data field.
   *
   * @public
   */
  additionalData?: UpdatedMcpServerAdditionalData | undefined;
}

/**
 * The MCP server descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.
 *
 * @public
 */
export interface UpdatedMcpServerDescriptor {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedMcpServerDescriptorFields | undefined;
}

/**
 * The patchable descriptor fields applied during an UpdateRegistryRecord call. Each field is independently patchable.
 *
 * @public
 */
export interface UpdatedDescriptorsFields {
  /**
   * The patch for the MCP server descriptor.
   *
   * @public
   */
  mcpServer?: UpdatedMcpServerDescriptor | undefined;

  /**
   * The patch for the A2A agent card descriptor.
   *
   * @public
   */
  a2aAgentCard?: UpdatedA2aAgentCardDescriptor | undefined;

  /**
   * The patch for the agent skills definition descriptor.
   *
   * @public
   */
  agentSkillsDefinition?: UpdatedAgentSkillsDefinitionDescriptor | undefined;

  /**
   * The patch for the custom descriptor.
   *
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;

  /**
   * The patch for the HTTP descriptor.
   *
   * @public
   */
  http?: UpdatedHttpDescriptor | undefined;

  /**
   * The patch for the AG-UI descriptor.
   *
   * @public
   */
  agui?: UpdatedAgUiDescriptor | undefined;
}

/**
 * The top-level descriptors patch wrapper used in UpdateRegistryRecord. Omit to leave the current descriptors unchanged; supply an empty object to clear them; supply optionalValue to apply a per-field patch.
 *
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: UpdatedDescriptorsFields | undefined;
}

/**
 * Leaf patch wrapper for a registry record's display name. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.
 *
 * @public
 */
export interface UpdatedDisplayName {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * The identifier of the registry containing the record (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to update (ARN or ID)
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The updated name of the registry record. Omit to leave the name unchanged.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated display name of the registry record. Omit to leave the display name unchanged; provide an empty wrapper to unset it.
   *
   * @public
   */
  displayName?: UpdatedDisplayName | undefined;

  /**
   * The updated description of the registry record. Omit to leave the description unchanged; provide an empty wrapper to unset it.
   *
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * The updated type of the registry record. Omit to leave the record type unchanged.
   *
   * @public
   */
  recordType?: RecordType | undefined;

  /**
   * The updated typed descriptor content for the registry record. Omit to leave the descriptors unchanged.
   *
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * The updated version of the registry record. Omit to leave the version unchanged.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The updated custom metadata for the registry record. Values can be strings (maximum 128 characters) or native JSON booleans (`true` or `false`). Omit to leave the existing metadata unchanged. Supply the wrapper with a full replacement set to update, or with a null value to clear all metadata.
   *
   * @public
   */
  customMetadata?: UpdatedCustomMetadataMap | undefined;

  /**
   * Whether to trigger synchronization of the record's descriptor content from its source
   *
   * @public
   */
  triggerSynchronization?: boolean | undefined;

  /**
   * The provenance lineage re-assertion for the registry record. This field is reserved for the Amazon Web Services Agent Registry auto-detection service principal. Requests that include this field from other callers are rejected. The source identity of an existing lineage is immutable; a re-assertion may only refresh the source details.
   *
   * @public
   */
  provenance?: Provenance[] | undefined;
}

/**
 * Response structure for updating a registry record
 *
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * The Amazon Resource Name (ARN) of the parent registry that owns the record.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record. Names are unique within a registry.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The human-readable display name of the registry record.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * A description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * The typed descriptors that define the content of the registry record.
   *
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * The version identifier of the registry record.
   *
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * The lifecycle status of the registry record.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The timestamp when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for the current status. Typically populated when the status indicates a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The provenance lineage entries for the registry record. Populated for records created by auto-detection; each entry identifies the upstream source that the record was detected from.
   *
   * @public
   */
  provenance?: Provenance[] | undefined;

  /**
   * Specifies whether the registry record was created by auto-detection. `true` indicates the record was automatically created by the service based on the registry's auto-detection configuration; `false` indicates the record was created through a control-plane API call.
   *
   * @public
   */
  createdByAutoDetection?: boolean | undefined;

  /**
   * The ID of the Amazon Web Services account that created the registry record.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The custom metadata attached to this registry record. Values are strings (maximum 128 characters) or booleans.
   *
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * Indicates whether this record's custom metadata conforms to the registry's current schema. This status is computed at read time against the latest schema.
   *
   * @public
   */
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * The identifier of the registry containing the record (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The identifier of the registry record to update the status of (ARN or ID)
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The target status for the registry record
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The reason for the status change, for example why the record was approved, rejected, or deprecated
   *
   * @public
   */
  statusReason: string | undefined;
}

/**
 * Response structure for updating a registry record status
 *
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * The ARN of the registry
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The ARN of the registry record
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The ID of the registry record
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The resulting status of the registry record
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The reason for the status change
   *
   * @public
   */
  statusReason: string | undefined;

  /**
   * The timestamp when the record was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Configuration for the registry's record approval workflow. Controls whether records submitted for approval require manual review before they become approved and discoverable, or are auto-approved. When no auto-approval rules are configured, submitted records require manual review.
 *
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * The rules that determine which registry records are automatically approved on submission. When omitted or empty, submitted records require manual review.
   *
   * @public
   */
  autoApprovalRules?: AutoApprovalRule[] | undefined;
}

/**
 * The customer-defined auto-detection settings for a registry.
 *
 * @public
 */
export interface AutoDetectionConfiguration {
  /**
   * The source from which resources are detected. For example, `ORGANIZATION` sources resources from all member accounts of an Amazon Web Services organization.
   *
   * @public
   */
  scope: AutoDetectionScope | undefined;

  /**
   * Specifies whether auto-detection is requested for the registry. Setting this to `true` is necessary but not sufficient for auto-detection to become active; the preconditions of the configured scope must also be met.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * The custom metadata fields for one record type, in addition to the common attributes defined in `defaultSchema`.
 *
 * @public
 */
export interface RecordTypeSchemaOverride {
  /**
   * The record type these fields apply to.
   *
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * A JSON Schema with the fields for this record type.
   *
   * @public
   */
  schema: string | undefined;
}

/**
 * The custom metadata fields that records in the registry can carry. `defaultSchema` defines the common attributes for every record type, and `recordTypeSchemaOverrides` adds fields for individual record types.
 *
 * @public
 */
export interface CustomMetadataSchemaConfiguration {
  /**
   * A JSON Schema with the common attributes: fields that records of every record type can carry.
   *
   * @public
   */
  defaultSchema?: string | undefined;

  /**
   * The fields for individual record types. Records of a record type can carry the common attributes defined in `defaultSchema` plus that record type's fields.
   *
   * @public
   */
  recordTypeSchemaOverrides?: RecordTypeSchemaOverride[] | undefined;
}

/**
 * Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.
 *
 * @public
 */
export interface DiscoveryConfiguration {
  /**
   * The authorizer configuration for the registry. Required when authorizerType is CUSTOM_JWT.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The type of authorizer that controls how consumers access the registry's search and MCP invoke operations.
   *
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;
}

/**
 * The server-side encryption configuration for a registry. Specifies a customer-managed Amazon Web Services KMS key used to encrypt the registry's content.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the customer-managed Amazon Web Services KMS key used to encrypt the registry's content. The key must be a symmetric encryption key in the same Amazon Web Services account and Region as the registry.
   *
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * Request structure for creating a registry
 *
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * The name of the registry
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The optional server-side encryption configuration for the registry. When you provide this field, the specified customer-managed Amazon Web Services KMS key encrypts the registry's content. Omit this field to use an Amazon Web Services-owned encryption key. You cannot change the encryption configuration after registry creation.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Discovery configuration for the registry
   *
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Tags to associate with the registry
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Approval configuration for registry records
   *
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * The optional custom metadata schema configuration for the registry. When provided, registry records can carry structured metadata validated against this schema.
   *
   * @public
   */
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration | undefined;

  /**
   * The optional auto-detection configuration for the registry. When provided, the registry is automatically populated with resources discovered according to the configuration. Omit this field for registries whose records are managed exclusively through the Agent Registry Control API.
   *
   * @public
   */
  autoDetectionConfiguration?: AutoDetectionConfiguration | undefined;
}

/**
 * Response structure for creating a registry
 *
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * The ARN of the created registry
   *
   * @public
   */
  registryArn: string | undefined;
}

/**
 * Request structure for deleting a registry
 *
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * The identifier of the registry to delete (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;
}

/**
 * Response structure for deleting a registry
 *
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * Current status of the registry, set to DELETING when deletion is initiated
   *
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * Request structure for getting a registry
 *
 * @public
 */
export interface GetRegistryRequest {
  /**
   * The identifier of the registry to retrieve (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;
}

/**
 * The auto-detection properties for a registry, including the requested configuration and the current detection status. When auto-detection is enabled and the scope preconditions are met, the registry is automatically populated with discovered resources.
 *
 * @public
 */
export interface AutoDetection {
  /**
   * The auto-detection settings that control how resources are discovered for the registry.
   *
   * @public
   */
  configuration: AutoDetectionConfiguration | undefined;

  /**
   * The current auto-detection status. `ACTIVE` indicates that the registry is actively being populated with detected resources. `INACTIVE` indicates that the preconditions required at the configured scope are not currently met.
   *
   * @public
   */
  status: AutoDetectionStatus | undefined;

  /**
   * A human-readable explanation of the current auto-detection status. Typically populated when the status requires additional context.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Response structure for getting a registry
 *
 * @public
 */
export interface GetRegistryResponse {
  /**
   * The name of the registry
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the registry
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The ARN of the registry
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * Discovery configuration for the registry
   *
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * The server-side encryption configuration for the registry. Appears only when a customer-managed Amazon Web Services KMS key encrypts the registry.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Approval configuration for registry records
   *
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * The custom metadata schema configuration for this registry, if one has been defined.
   *
   * @public
   */
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration | undefined;

  /**
   * Current status of the registry
   *
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * The reason for the current status. Typically populated when the status indicates a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The registry's auto-detection properties, including the requested configuration and the current detection status. Present only when auto-detection was configured for the registry.
   *
   * @public
   */
  autoDetection?: AutoDetection | undefined;

  /**
   * The timestamp when the registry was created
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * A single filter applied to a ListRegistries request.
 *
 * @public
 */
export interface RegistryFilter {
  /**
   * The attribute to filter on
   *
   * @public
   */
  name: RegistryFilterName | undefined;

  /**
   * The values to match for the attribute
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * Request structure for listing registries
 *
 * @public
 */
export interface ListRegistriesRequest {
  /**
   * Maximum number of results to return
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Token for pagination
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters to apply to the registry list
   *
   * @public
   */
  filters?: RegistryFilter[] | undefined;
}

/**
 * Registry summary for list operations
 *
 * @public
 */
export interface RegistrySummary {
  /**
   * Registry name
   *
   * @public
   */
  name: string | undefined;

  /**
   * Registry description
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Unique registry identifier
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * Registry Amazon Resource Name
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * Discovery configuration for the registry
   *
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * Current status of the registry
   *
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * The reason for the current status. Typically populated when the status indicates a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The registry's auto-detection properties, including the requested configuration and the current detection status. Present only when auto-detection was configured for the registry.
   *
   * @public
   */
  autoDetection?: AutoDetection | undefined;

  /**
   * The timestamp when the registry was created
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for listing registries
 *
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * List of registry summaries
   *
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * Token for next page of results
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A wrapper for updating the approval configuration of a registry. Include this wrapper to replace the approval configuration with the specified value; omit it to leave the approval configuration unchanged.
 *
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
}

/**
 * A wrapper for updating the auto-detection configuration of a registry with PATCH semantics. Include this wrapper to replace the auto-detection configuration with the specified value. Omit it to leave the auto-detection configuration unchanged. To clear the configuration, include the wrapper with a null `optionalValue`.
 *
 * @public
 */
export interface UpdatedAutoDetectionConfiguration {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: AutoDetectionConfiguration | undefined;
}

/**
 * The custom metadata schema configuration patch wrapper. Omit to leave the existing schema unchanged.
 *
 * @public
 */
export interface UpdatedCustomMetadataSchemaConfiguration {
  /**
   * The value to set for this field. Omit the wrapper to leave the field unchanged.
   *
   * @public
   */
  optionalValue?: CustomMetadataSchemaConfiguration | undefined;
}

/**
 * Wrapper for updating an optional authorizer configuration with PATCH semantics.
 *
 * @public
 */
export interface UpdatedAuthorizerConfiguration {
  /**
   * The new authorizer configuration to set. Omit to leave the existing configuration unchanged.
   *
   * @public
   */
  optionalValue?: AuthorizerConfiguration | undefined;
}

/**
 * The discovery configuration fields to update on a registry. Omit this structure to leave the discovery configuration unchanged.
 *
 * @public
 */
export interface UpdatedDiscoveryConfiguration {
  /**
   * Authorization configuration for the registry, with PATCH semantics
   *
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;
}

/**
 * Request structure for updating a registry
 *
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * The identifier of the registry to update (ARN or ID)
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The updated name of the registry
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the registry
   *
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * The updated discovery configuration. Changing the discovery authorization can break existing consumers that rely on the previous authorization type.
   *
   * @public
   */
  discoveryConfiguration?: UpdatedDiscoveryConfiguration | undefined;

  /**
   * The updated approval configuration. The change applies only to records that move to PENDING_APPROVAL after the update; records already in PENDING_APPROVAL are unaffected.
   *
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;

  /**
   * The new custom metadata schema configuration, which replaces the current one. You can add fields and allowed values, but you can't remove a field or an allowed value, or change a field's type.
   *
   * @public
   */
  customMetadataSchemaConfiguration?: UpdatedCustomMetadataSchemaConfiguration | undefined;

  /**
   * The updated auto-detection configuration for the registry, with PATCH semantics. Omit this field to leave the current configuration unchanged. Supply an empty wrapper to unset it. Supply `optionalValue` to replace it.
   *
   * @public
   */
  autoDetectionConfiguration?: UpdatedAutoDetectionConfiguration | undefined;
}

/**
 * Response structure for updating a registry
 *
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * The name of the registry
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the registry
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The unique identifier of the registry
   *
   * @public
   */
  registryId: string | undefined;

  /**
   * The ARN of the registry
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * Discovery configuration for the registry
   *
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * The server-side encryption configuration for the registry. Appears only when a customer-managed Amazon Web Services KMS key encrypts the registry.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Approval configuration for registry records
   *
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * The custom metadata schema configuration for this registry, if one has been defined.
   *
   * @public
   */
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration | undefined;

  /**
   * Current status of the registry
   *
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * The reason for the current status. Typically populated when the status indicates a failure state.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The registry's auto-detection properties, including the requested configuration and the current detection status. Present only when auto-detection was configured for the registry.
   *
   * @public
   */
  autoDetection?: AutoDetection | undefined;

  /**
   * The timestamp when the registry was created
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the registry was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag. Supported resources include registries and registry records.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags to apply to the resource, as a map of tag keys to tag values. Tag keys must be unique within the request.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove tags from. Supported resources include registries and registry records.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove from the resource. Tags with keys not included in this list remain on the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
