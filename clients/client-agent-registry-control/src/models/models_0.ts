// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentCoreGatewayProtocolType,
  AgentCoreRuntimeServerProtocol,
  AgentSkillsRepositoryProvider,
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
 * <p>The configuration for an IAM role credential provider that signs requests to a registry record's source with Amazon Web Services Signature Version 4 (SigV4). For an Amazon S3 skill source (an <code>s3://</code> URL), Amazon Web Services Agent Registry assumes the role to read the object. The role must be in your Amazon Web Services account.</p>
 * @public
 */
export interface RegistryRecordIamCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assume for request signing.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The service name to use for request signing, such as execute-api. For an Amazon S3 skill source, omit it or set it to <code>s3</code>.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The Amazon Web Services Region to use for request signing. If not specified, the Region is derived from the source URL hostname, falling back to the Region of the registry. For an Amazon S3 skill source, omit it or set it to the Region of the registry.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p>The configuration for an OAuth 2.0 credential provider that authenticates requests to a registry record's source.</p>
 * @public
 */
export interface RegistryRecordOAuthCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth 2.0 credential provider resource in Amazon Bedrock AgentCore Identity.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The OAuth 2.0 grant type used to obtain access tokens. A GitHub skill source requires <code>AUTHORIZATION_CODE</code>. Other sources, such as MCP server and A2A agent card sources, use <code>CLIENT_CREDENTIALS</code>. A GitHub source takes exactly one OAuth credential provider, in the registry's Amazon Web Services account and Region. Only an IAM role or IAM user in the account that owns the registry can set, synchronize, or reauthorize it, and the caller needs <code>bedrock-agentcore:GetWorkloadAccessTokenForUserId</code> and <code>bedrock-agentcore:GetResourceOauth2Token</code> on the registry's workload identity, <code>registry-</code> followed by the registry ID.</p>
   * @public
   */
  grantType?: RegistryRecordOAuthGrantType | undefined;

  /**
   * <p>The OAuth 2.0 scopes to request when obtaining access tokens.</p>
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * <p>Additional parameters to include in the OAuth 2.0 token request.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * <p>The URL that the user's browser returns to after the user approves access on GitHub, for the <code>AUTHORIZATION_CODE</code> grant. There, your application completes the authorization by calling the Amazon Bedrock AgentCore Identity <code>CompleteResourceTokenAuth</code> operation with the <code>userId</code> from <code>authorizationData</code>. If you omit it, the user returns to the Amazon Web Services Agent Registry console, which completes the authorization when the user is signed in as the IAM principal that made the request. A request that joins an authorization already in progress uses the return URL of the request that started it.</p>
   * @public
   */
  returnUrl?: string | undefined;
}

/**
 * <p>The credential provider details for a registry record. Exactly one member is populated, matching the configured credential provider type.</p>
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
   * <p>The OAuth 2.0 credential provider details.</p>
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM role credential provider details.</p>
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
 * <p>A credential provider configuration that specifies how to authenticate when fetching descriptor content from a registry record's source URL.</p>
 * @public
 */
export interface RegistryRecordCredentialProviderConfiguration {
  /**
   * <p>The type of credential provider.</p>
   * @public
   */
  credentialProviderType: RegistryRecordCredentialProviderType | undefined;

  /**
   * <p>The credential provider details corresponding to the specified credential provider type.</p>
   * @public
   */
  credentialProvider: RegistryRecordCredentialProviderUnion | undefined;
}

/**
 * <p>URL-based descriptor source configuration, with credential provider configurations for authenticated URL retrieval.</p>
 * @public
 */
export interface DescriptorSourceFromUrl {
  /**
   * <p>The URL from which the descriptor content is retrieved. For an agent skill source, specify an <code>s3://</code> URL of an object in a bucket in the same Amazon Web Services Region as the registry. For a GitHub skill source, specify a GitHub folder URL in the form <code>https://host/owner/repo/tree/branch-or-tag/path</code>. Other descriptor sources use <code>https://</code> URLs.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The credential providers used to authenticate when fetching descriptor content from the source URL.</p>
   * @public
   */
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[] | undefined;
}

/**
 * <p>The source configuration that defines where descriptor content is retrieved from.</p>
 * @public
 */
export interface DescriptorSource {
  /**
   * <p>URL-based descriptor source, populated when descriptor content is synchronized from a URL.</p>
   * @public
   */
  fromUrl?: DescriptorSourceFromUrl | undefined;
}

/**
 * <p>Descriptor that defines the content of an A2A (Agent-to-Agent) agent card registry record. The content is validated against the A2A protocol schema.</p>
 * @public
 */
export interface A2aAgentCardDescriptor {
  /**
   * <p>The A2A agent card content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>The optional source configuration used to synchronize the A2A agent card descriptor content.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>The expected value used to match a claim. Exactly one member is set.</p>
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
   * <p>A single string value to match the claim against.</p>
   * @public
   */
  export interface MatchValueStringMember {
    matchValueString: string;
    matchValueStringList?: never;
    $unknown?: never;
  }

  /**
   * <p>A list of string values to match the claim against.</p>
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
 * <p>The value and match operator used to authorize a claim during JWT validation.</p>
 * @public
 */
export interface AuthorizingClaimMatchValueType {
  /**
   * <p>The expected value or values that the claim is compared against.</p>
   * @public
   */
  claimMatchValue: ClaimMatchValueType | undefined;

  /**
   * <p>The operator used to compare the claim value against the expected value.</p>
   * @public
   */
  claimMatchOperator: ClaimMatchOperatorType | undefined;
}

/**
 * <p>A validation rule applied to a single claim of an inbound JWT.</p>
 * @public
 */
export interface CustomClaimValidationType {
  /**
   * <p>The name of the claim in the inbound token to validate.</p>
   * @public
   */
  inboundTokenClaimName: string | undefined;

  /**
   * <p>The value type of the claim in the inbound token, either a string or an array of strings.</p>
   * @public
   */
  inboundTokenClaimValueType: InboundTokenClaimValueType | undefined;

  /**
   * <p>The value and match operator used to authorize the claim.</p>
   * @public
   */
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType | undefined;
}

/**
 * <p>A service-managed private endpoint provisioned within a customer VPC.</p>
 * @public
 */
export interface ManagedVpcResource {
  /**
   * <p>The identifier of the VPC in which the private endpoint is provisioned.</p>
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * <p>The identifiers of the subnets in which the private endpoint network interfaces are placed.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The IP address type used by the private endpoint, either IPV4 or IPV6.</p>
   * @public
   */
  endpointIpAddressType: EndpointIpAddressType | undefined;

  /**
   * <p>The identifiers of the security groups associated with the private endpoint network interfaces.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The tags applied to the service-managed VPC resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The routing domain used to resolve traffic through the private endpoint.</p>
   * @public
   */
  routingDomain?: string | undefined;
}

/**
 * <p>A self-managed private endpoint backed by a VPC Lattice resource configuration. Exactly one member is set.</p>
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
   * <p>The identifier of the VPC Lattice resource configuration, specified as a resource configuration ID or ARN.</p>
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
 * <p>A private network endpoint used to reach a resource over a private path. Exactly one member is set.</p>
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
   * <p>A private endpoint backed by a self-managed VPC Lattice resource configuration.</p>
   * @public
   */
  export interface SelfManagedLatticeResourceMember {
    selfManagedLatticeResource: SelfManagedLatticeResource;
    managedVpcResource?: never;
    $unknown?: never;
  }

  /**
   * <p>A private endpoint backed by a service-managed VPC resource.</p>
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
 * <p>A mapping of a domain to the private endpoint used to reach it.</p>
 * @public
 */
export interface PrivateEndpointOverride {
  /**
   * <p>The domain name to which this private endpoint override applies.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The private endpoint used to reach the specified domain.</p>
   * @public
   */
  privateEndpoint: PrivateEndpoint | undefined;
}

/**
 * <p>Configuration for a custom JWT authorizer that validates inbound bearer tokens against an OpenID Connect identity provider.</p>
 * @public
 */
export interface CustomJWTAuthorizerConfiguration {
  /**
   * <p>The OpenID Connect discovery or OAuth 2.0 authorization server metadata URL used to retrieve the identity provider's metadata and signing keys.</p>
   * @public
   */
  discoveryUrl: string | undefined;

  /**
   * <p>The audience values accepted during JWT validation. A token is rejected if none of its audience claims match.</p>
   * @public
   */
  allowedAudience?: string[] | undefined;

  /**
   * <p>The client identifiers accepted during JWT validation. A token is rejected if it was not issued to one of these clients.</p>
   * @public
   */
  allowedClients?: string[] | undefined;

  /**
   * <p>The scopes accepted during JWT validation. A token is rejected if it does not carry one of these scopes.</p>
   * @public
   */
  allowedScopes?: string[] | undefined;

  /**
   * <p>Additional custom claim validations applied to the inbound JWT.</p>
   * @public
   */
  customClaims?: CustomClaimValidationType[] | undefined;

  /**
   * <p>The private endpoint used to reach the identity provider's discovery URL over a private network path.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>Per-domain private endpoint overrides that route specific identity provider domains through distinct private endpoints.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;
}

/**
 * <p>The authorizer configuration for a registry. Exactly one member is set.</p>
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
   * <p>Configuration for a custom JWT authorizer.</p>
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
 * <p>The workload identity details associated with a source resource. Present on the source details of a provenance entry when the upstream resource has a workload identity configured.</p>
 * @public
 */
export interface WorkloadIdentityDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity associated with the source resource.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * <p>The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Gateway resource.</p>
 * @public
 */
export interface AgentCoreGatewaySourceDetails {
  /**
   * <p>The protocol type of the AgentCore Gateway resource that the registry record was detected from, for example <code>MCP</code>.</p>
   * @public
   */
  protocolType?: AgentCoreGatewayProtocolType | undefined;

  /**
   * <p>The type of authorizer configured on the AgentCore Gateway resource that the registry record was detected from.</p>
   * @public
   */
  authorizerType?: string | undefined;

  /**
   * <p>The authorizer configuration for a registry. Exactly one member is set.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The workload identity details for the AgentCore Gateway resource. Present when the gateway has a workload identity configured.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;
}

/**
 * <p>The protocol configuration of an AgentCore Runtime resource that a registry record was auto-detected from.</p>
 * @public
 */
export interface AgentCoreRuntimeProtocolConfiguration {
  /**
   * <p>The server protocol used by the AgentCore Runtime, such as <code>MCP</code>, <code>HTTP</code>, <code>A2A</code>, or <code>AGUI</code>.</p>
   * @public
   */
  serverProtocol?: AgentCoreRuntimeServerProtocol | undefined;
}

/**
 * <p>The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Runtime resource.</p>
 * @public
 */
export interface AgentCoreRuntimeSourceDetails {
  /**
   * <p>The protocol configuration of the AgentCore Runtime resource that the registry record was detected from.</p>
   * @public
   */
  protocolConfiguration?: AgentCoreRuntimeProtocolConfiguration | undefined;

  /**
   * <p>The authorizer configuration for a registry. Exactly one member is set.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The workload identity details for the AgentCore Runtime resource. Present when the runtime has a workload identity configured.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for. Supported resources include registries and registry records.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags currently associated with the resource, as a map of tag keys to tag values.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Describes a single input field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>A skill package to upload with a registry record: a ZIP archive of a skill that follows the Agent Skills specification. The registry validates the package asynchronously, stores it, and sets <code>skillMd.data</code> from the package's SKILL.md.</p>
 * @public
 */
export interface RegistryRecordArtifactUpload {
  /**
   * <p>The ZIP archive of the skill package, up to 5 MiB (5,242,880 bytes). In a JSON request, the content is base64-encoded. The Amazon Web Services SDKs encode it for you.</p>
   * @public
   */
  content: Uint8Array | undefined;

  /**
   * <p>The optional SHA-256 checksum of the ZIP archive, as 64 lowercase hexadecimal characters, computed over the archive's bytes rather than its base64 text. If it doesn't match the content, the request fails with a <code>ValidationException</code>.</p>
   * @public
   */
  sha256?: string | undefined;
}

/**
 * <p>Markdown-format descriptor containing an agent skills document.</p>
 * @public
 */
export interface AgentSkillsMdDescriptor {
  /**
   * <p>The agent skills markdown content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>The optional source of the skill's SKILL.md only. The registry synchronizes the SKILL.md from this source into <code>data</code>. Specify an <code>s3://</code> URL of a SKILL.md object, or a GitHub folder URL together with <code>repositoryProvider</code> set to <code>GITHUB</code>. The registry rejects a new <code>https://</code> URL without <code>repositoryProvider</code>, and you can't set both this source and <code>skillPackage.source</code>.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>Descriptor that names the source that the registry synchronizes a full skill package from. It holds only the source. The record's <code>artifact</code> member returns the package that the registry reads from this source.</p>
 * @public
 */
export interface AgentSkillsPackageDescriptor {
  /**
   * <p>The source of the skill package. Specify an <code>s3://</code> URL of a ZIP object, or a GitHub folder URL together with <code>repositoryProvider</code> set to <code>GITHUB</code>. For a GitHub folder, the registry builds the package from every file in the folder.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>The settings of a source that the registry reads from Amazon S3.</p>
 * @public
 */
export interface S3SourceConfiguration {
  /**
   * <p>The ID of the Amazon Web Services account that owns the source bucket. The registry checks that the bucket belongs to this account each time it reads the source. If you omit it for a source that uses an IAM role, the registry expects the bucket to be in the role's account. If you omit it for a source that has no credential provider, which the registry reads as a public object, the request fails with a <code>ValidationException</code>.</p>
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * <p>The provider-specific settings of a skill source. Specify the member that matches the source's provider, such as <code>s3</code> for an Amazon S3 source.</p>
 * @public
 */
export type AgentSkillsSourceConfiguration =
  | AgentSkillsSourceConfiguration.S3Member
  | AgentSkillsSourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AgentSkillsSourceConfiguration {
  /**
   * <p>The settings of an Amazon S3 source.</p>
   * @public
   */
  export interface S3Member {
    s3: S3SourceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3SourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Additional data associated with an agent skills definition descriptor: the skill's SKILL.md and the source that the registry synchronizes the skill from. A record synchronizes from one source at most, either <code>skillMd.source</code> for SKILL.md only or <code>skillPackage.source</code> for the full skill package. When the record has a skill package or a synchronized source, the registry sets <code>skillMd.data</code> from the SKILL.md in that package or source.</p>
 * @public
 */
export interface AgentSkillsAdditionalData {
  /**
   * <p>The markdown skill content associated with an agent skills definition.</p>
   * @public
   */
  skillMd?: AgentSkillsMdDescriptor | undefined;

  /**
   * <p>The source that the registry synchronizes the full skill package from. The registry validates and stores the package, sets <code>skillMd.data</code> from its SKILL.md, and returns the package in the <code>artifact</code> member of <code>GetRegistryRecord</code>. You can't set both this source and <code>skillMd.source</code>.</p>
   * @public
   */
  skillPackage?: AgentSkillsPackageDescriptor | undefined;

  /**
   * <p>The repository provider of the record's skill source. Set it to <code>GITHUB</code> when <code>skillMd.source</code> or <code>skillPackage.source</code> is a GitHub folder URL. The registry treats an <code>https://</code> source as a GitHub source only when this member is set. Don't set it for an Amazon S3 source.</p>
   * @public
   */
  repositoryProvider?: AgentSkillsRepositoryProvider | undefined;

  /**
   * <p>The provider-specific settings of the record's skill source. For an Amazon S3 source, <code>s3.bucketOwnerAccountId</code> specifies the account that owns the source bucket.</p>
   * @public
   */
  sourceConfiguration?: AgentSkillsSourceConfiguration | undefined;
}

/**
 * <p>Descriptor that defines an agent skills registry record and its associated content.</p>
 * @public
 */
export interface AgentSkillsDefinitionDescriptor {
  /**
   * <p>The agent skills definition content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>Additional data associated with the agent skills definition descriptor.</p>
   * @public
   */
  additionalData?: AgentSkillsAdditionalData | undefined;
}

/**
 * <p>A registry record descriptor for the AG-UI (Agent-User Interaction) protocol.</p>
 * @public
 */
export interface AgUiDescriptor {
  /**
   * <p>The source configuration that defines where descriptor content is retrieved from.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>Custom descriptor for user-defined content</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p>The custom descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;
}

/**
 * <p>A registry record descriptor for the HTTP protocol. This descriptor is source-only: its content is synchronized from the configured source URL rather than supplied inline.</p>
 * @public
 */
export interface HttpDescriptor {
  /**
   * <p>The source configuration that defines where descriptor content is retrieved from.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>MCP tools descriptor containing tool definitions</p>
 * @public
 */
export interface McpToolsDescriptor {
  /**
   * <p>The MCP tools descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;
}

/**
 * <p>Additional data for an MCP server descriptor</p>
 * @public
 */
export interface McpServerAdditionalData {
  /**
   * <p>The MCP tools descriptor that defines the tools exposed by the MCP server.</p>
   * @public
   */
  tools?: McpToolsDescriptor | undefined;
}

/**
 * <p>Descriptor that defines the content of an MCP (Model Context Protocol) server registry record, including the server definition and its tool definitions. The content is validated against the MCP protocol schema.</p>
 * @public
 */
export interface McpServerDescriptor {
  /**
   * <p>The MCP server descriptor content, serialized as descriptor payload data.</p>
   * @public
   */
  data?: string | undefined;

  /**
   * <p>The schema version of the descriptor payload.</p>
   * @public
   */
  dataSchemaVersion?: string | undefined;

  /**
   * <p>Additional data associated with the MCP server descriptor, such as tool definitions.</p>
   * @public
   */
  additionalData?: McpServerAdditionalData | undefined;

  /**
   * <p>The optional source configuration used to synchronize the MCP server descriptor content.</p>
   * @public
   */
  source?: DescriptorSource | undefined;
}

/**
 * <p>The typed set of descriptors for a registry record. Exactly one descriptor field is populated based on the record type.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p>The MCP server descriptor, populated when the record type is MCP.</p>
   * @public
   */
  mcpServer?: McpServerDescriptor | undefined;

  /**
   * <p>The A2A agent card descriptor, populated when the record type is AGENT.</p>
   * @public
   */
  a2aAgentCard?: A2aAgentCardDescriptor | undefined;

  /**
   * <p>The agent skills definition descriptor, populated when the record type is SKILL.</p>
   * @public
   */
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor | undefined;

  /**
   * <p>The custom descriptor, populated when the record type is CUSTOM.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p>The HTTP descriptor, populated for records detected from an HTTP protocol source.</p>
   * @public
   */
  http?: HttpDescriptor | undefined;

  /**
   * <p>The AG-UI descriptor, populated for records detected from an AG-UI protocol source.</p>
   * @public
   */
  agui?: AgUiDescriptor | undefined;
}

/**
 * <p>The details about the upstream source from which a registry record was detected. Exactly one member is populated, corresponding to the source type.</p>
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
   * <p>The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Runtime resource. Populated when the source type is <code>AWS::BedrockAgentCore::Runtime</code>.</p>
   * @public
   */
  export interface AgentcoreRuntimeMember {
    agentcoreRuntime: AgentCoreRuntimeSourceDetails;
    agentcoreGateway?: never;
    $unknown?: never;
  }

  /**
   * <p>The source details for a registry record that was auto-detected from an Amazon Bedrock AgentCore Gateway resource. Populated when the source type is <code>AWS::BedrockAgentCore::Gateway</code>.</p>
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
 * <p>A provenance entry that describes the lineage of a registry record. Records that were auto-detected by Amazon Web Services Agent Registry carry a provenance entry that links the record back to its upstream source.</p>
 * @public
 */
export interface Provenance {
  /**
   * <p>The relationship between the registry record and its upstream source. <code>DETECTED_FROM</code> indicates that the record was auto-detected from the source resource.</p>
   * @public
   */
  relation: ProvenanceRelation | undefined;

  /**
   * <p>The identifier of the upstream source that the registry record was detected from.</p>
   * @public
   */
  sourceId: string | undefined;

  /**
   * <p>The type of the upstream source that the registry record was detected from.</p>
   * @public
   */
  sourceType?: SourceType | undefined;

  /**
   * <p>Additional details about the upstream source that the registry record was detected from, such as the AgentCore Gateway or Runtime configuration. The populated member corresponds to the source type.</p>
   * @public
   */
  sourceDetails?: SourceDetails | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry in which to create the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The name of the registry record</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the registry record</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, which determines the descriptor format</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The typed descriptor content for the registry record</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The skill package to store with the record, for a record of type <code>SKILL</code> with an <code>agentSkillsDefinition</code> descriptor. The registry validates the package after the operation returns and sets <code>skillMd.data</code> from the package's SKILL.md. A request that uploads a package can't also set a skill source or send new <code>skillMd.data</code>.</p>
   * @public
   */
  artifact?: RegistryRecordArtifactUpload | undefined;

  /**
   * <p>The version of the registry record</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>Client token for idempotency</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The provenance lineage entries for the registry record. This field is reserved for the Amazon Web Services Agent Registry auto-detection service principal. Requests that include this field from other callers are rejected.</p>
   * @public
   */
  provenance?: Provenance[] | undefined;

  /**
   * <p>The custom metadata for the record. Values are strings or JSON booleans.</p>
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * <p>Tags to associate with the registry record</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>An OAuth 2.0 authorization that waits for a user's approval. The user opens <code>authorizationUrl</code> and approves access on GitHub. Amazon Bedrock AgentCore Identity then redirects the browser to the source's <code>returnUrl</code>. There, your application completes the authorization by calling the AgentCore Identity <code>CompleteResourceTokenAuth</code> operation with <code>userId</code>. If the source has no <code>returnUrl</code>, the user returns to the Amazon Web Services Agent Registry console, which completes the authorization. After the authorization completes, the registry synchronizes the record without another request. If the user doesn't approve access before <code>expiresAt</code>, the record moves to <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code>. To start again, call <code>UpdateRegistryRecord</code> with <code>triggerSynchronization</code>.</p>
 * @public
 */
export interface OAuth2AuthorizationData {
  /**
   * <p>The URL that the user opens to approve access. The link is valid for up to 10 minutes. Treat it as sensitive and give it only to the user who approves access.</p>
   * @public
   */
  authorizationUrl: string | undefined;

  /**
   * <p>The AgentCore Identity user ID that the authorization is for. Store it with your signed-in user and pass it as <code>userIdentifier.userId</code> when your application calls <code>CompleteResourceTokenAuth</code>.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The identifier of this authorization attempt.</p>
   * @public
   */
  authorizationAttemptId?: string | undefined;

  /**
   * <p>The timestamp when the authorization link expires, 10 minutes after the authorization started. A request that joins an authorization in progress gets less time, and the link might stop working shortly before this time.</p>
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * <p>The authorization that a user must complete before a registry record can synchronize from its source. Only <code>CreateRegistryRecord</code> and <code>UpdateRegistryRecord</code> return it. <code>GetRegistryRecord</code> and <code>ListRegistryRecords</code> never do.</p>
 * @public
 */
export type AuthorizationData =
  | AuthorizationData.Oauth2Member
  | AuthorizationData.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizationData {
  /**
   * <p>The OAuth 2.0 authorization that a GitHub user must approve.</p>
   * @public
   */
  export interface Oauth2Member {
    oauth2: OAuth2AuthorizationData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauth2?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauth2: (value: OAuth2AuthorizationData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Response structure for creating a registry record</p>
 * @public
 */
export interface CreateRegistryRecordResponse {
  /**
   * <p>The ARN of the created registry record</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The status of the registry record. <code>CREATING</code> means that the asynchronous workflow is in progress. <code>CREATE_PENDING_AUTH</code> means that the record waits for a GitHub user to authorize access before it synchronizes from its GitHub source. For the authorization link, see <code>authorizationData</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The authorization that a GitHub user must complete before the record's synchronization starts. Present only in this response, and only while the status is <code>CREATE_PENDING_AUTH</code>. If the status is <code>CREATE_PENDING_AUTH</code> but this member is absent, call <code>UpdateRegistryRecord</code> with <code>triggerSynchronization</code> to get a new authorization link.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to delete (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * <p>Response structure for deleting a registry record</p>
 * @public
 */
export interface DeleteRegistryRecordResponse {}

/**
 * @public
 */
export interface GetRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to retrieve (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * <p>The skill package of a registry record, as a short-lived download URL and the package's SHA-256 checksum. Responses never include the package bytes.</p>
 * @public
 */
export interface RegistryRecordArtifactDownload {
  /**
   * <p>The SHA-256 checksum of the package, as 64 lowercase hexadecimal characters. The download response carries no signature that you can check, so compare the checksum of the file that you download with this value before you use the package.</p>
   * @public
   */
  sha256?: string | undefined;

  /**
   * <p>A presigned Amazon S3 URL that downloads the package. The URL is valid for up to 5 minutes, and the response doesn't include its expiry time. To get a new URL, call the operation again. Anyone who has the URL can download the package until it expires, so don't log, store, or share it.</p>
   * @public
   */
  downloadUrl?: string | undefined;
}

/**
 * <p>A GitHub source that a skill record's content was synchronized from, and the commit that the registry read.</p>
 * @public
 */
export interface GitHubSynchronizedSource {
  /**
   * <p>The source URL that the registry read.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The timestamp when the registry read the source.</p>
   * @public
   */
  synchronizedAt: Date | undefined;

  /**
   * <p>The commit that the source's branch or tag pointed to when the registry read it.</p>
   * @public
   */
  commitId: string | undefined;
}

/**
 * <p>An Amazon S3 source that a skill record's content was synchronized from, and the object version that the registry read. At most one of <code>versionId</code> and <code>eTag</code> is set.</p>
 * @public
 */
export interface S3SynchronizedSource {
  /**
   * <p>The source URL that the registry read.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The timestamp when the registry read the source.</p>
   * @public
   */
  synchronizedAt: Date | undefined;

  /**
   * <p>The version ID of the object that the registry read. Absent when the bucket isn't versioned.</p>
   * @public
   */
  versionId?: string | undefined;

  /**
   * <p>The entity tag (ETag) of the object that the registry read, without quotes, when the object has no version ID. Not recorded for a SKILL.md source on a registry that is encrypted with a customer managed key.</p>
   * @public
   */
  eTag?: string | undefined;
}

/**
 * <p>The source that a skill record's content was last synchronized from. Exactly one member is set, for the source's provider.</p>
 * @public
 */
export type RegistryRecordSynchronizedSource =
  | RegistryRecordSynchronizedSource.GitHubMember
  | RegistryRecordSynchronizedSource.S3Member
  | RegistryRecordSynchronizedSource.$UnknownMember;

/**
 * @public
 */
export namespace RegistryRecordSynchronizedSource {
  /**
   * <p>The Amazon S3 source that the registry read.</p>
   * @public
   */
  export interface S3Member {
    s3: S3SynchronizedSource;
    gitHub?: never;
    $unknown?: never;
  }

  /**
   * <p>The GitHub source that the registry read.</p>
   * @public
   */
  export interface GitHubMember {
    s3?: never;
    gitHub: GitHubSynchronizedSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    gitHub?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3SynchronizedSource) => T;
    gitHub: (value: GitHubSynchronizedSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Response structure for retrieving a registry record</p>
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The typed descriptors that define the content of the registry record. For a skill record with a skill package or a synchronized source, <code>skillMd.data</code> contains the SKILL.md that the registry took from the package or the source.</p>
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * <p>The version identifier of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The lifecycle status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The provenance lineage entries for the registry record. Populated for records created by auto-detection; each entry identifies the upstream source that the record was detected from.</p>
   * @public
   */
  provenance?: Provenance[] | undefined;

  /**
   * <p>Specifies whether the registry record was created by auto-detection. <code>true</code> indicates the record was automatically created by the service based on the registry's auto-detection configuration; <code>false</code> indicates the record was created through a control-plane API call.</p>
   * @public
   */
  createdByAutoDetection?: boolean | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that created the registry record.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The custom metadata attached to this registry record. Values are strings (maximum 128 characters) or booleans.</p>
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * <p>Indicates whether this record's custom metadata conforms to the registry's current schema. This status is computed at read time against the latest schema.</p>
   * @public
   */
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus | undefined;

  /**
   * <p>The skill package of the record's latest revision, including a revision in <code>DRAFT</code> or <code>PENDING_APPROVAL</code> status, as a download URL and a SHA-256 checksum. While an update of the record is in progress or after it fails, this is the last package that passed validation, unless the update switches between an uploaded package and a synchronized one: then it is absent until the update succeeds. Absent while the record is being created or after its creation fails, and when the record has no package, for example when its content is inline or it synchronizes only SKILL.md.</p>
   * @public
   */
  artifact?: RegistryRecordArtifactDownload | undefined;

  /**
   * <p>The source that the registry last synchronized the record's skill content from, including when the registry read the source and which version it read. Absent until the first successful synchronization, and after an update replaces the synchronized content, for example with an uploaded package. A failed synchronization leaves this member unchanged. After you change the source, this member shows the previous source until the registry successfully synchronizes from the new source.</p>
   * @public
   */
  synchronizedSource?: RegistryRecordSynchronizedSource | undefined;
}

/**
 * <p>A single filter applied to a ListRegistryRecords request.</p>
 * @public
 */
export interface RegistryRecordFilter {
  /**
   * <p>The attribute to filter on</p>
   * @public
   */
  name: RegistryRecordFilterName | undefined;

  /**
   * <p>The values to match for the attribute</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * <p>The identifier of the registry to list records from (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>Maximum number of records to return</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters to apply to the registry record list</p>
   * @public
   */
  filters?: RegistryRecordFilter[] | undefined;
}

/**
 * <p>A condensed provenance entry surfaced in list results. Contains the source identity of a lineage entry without the source details returned by <code>GetRegistryRecord</code>.</p>
 * @public
 */
export interface ProvenanceSummary {
  /**
   * <p>The relationship between the registry record and its upstream source. <code>DETECTED_FROM</code> indicates that the record was auto-detected from the source resource.</p>
   * @public
   */
  relation: ProvenanceRelation | undefined;

  /**
   * <p>The identifier of the upstream source that the registry record was detected from.</p>
   * @public
   */
  sourceId: string | undefined;

  /**
   * <p>The type of the upstream source that the registry record was detected from.</p>
   * @public
   */
  sourceType?: SourceType | undefined;
}

/**
 * <p>A summary of a registry record returned by list operations. Contains identifying and lifecycle fields but omits descriptor content.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The version identifier of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>The lifecycle status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Specifies whether the registry record was created by auto-detection. <code>true</code> indicates the record was automatically created by the service based on the registry's auto-detection configuration; <code>false</code> indicates the record was created through a control-plane API call.</p>
   * @public
   */
  createdByAutoDetection?: boolean | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that created the registry record.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The condensed provenance lineage for the registry record. Each entry contains the source relation, source identifier, and source type of an auto-detection lineage entry. Populated for records created by auto-detection.</p>
   * @public
   */
  provenanceSummaryList?: ProvenanceSummary[] | undefined;

  /**
   * <p>Indicates whether this record's custom metadata conforms to the registry's current schema.</p>
   * @public
   */
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus | undefined;
}

/**
 * <p>Response structure for listing registry records</p>
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * <p>List of registry record summaries</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p>Token for next page of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to submit for approval (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * <p>Response structure for submitting a registry record for approval</p>
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The ARN of the registry record</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The ID of the registry record</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the record was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>The skill package patch wrapper. Omit to leave the package unchanged; supply an empty object to remove an uploaded package; supply optionalValue to upload a new package.</p>
 * @public
 */
export interface UpdatedRegistryRecordArtifact {
  /**
   * <p>The skill package to upload. It replaces the record's current package or its synchronized content.</p>
   * @public
   */
  optionalValue?: RegistryRecordArtifactUpload | undefined;
}

/**
 * <p>The custom metadata patch wrapper. Omit to leave the existing metadata unchanged; supply with a null value to clear all metadata; supply with key-value pairs to replace the existing metadata.</p>
 * @public
 */
export interface UpdatedCustomMetadataMap {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: __DocumentType | undefined;
}

/**
 * <p>Wrapper for updating an optional Description field with PATCH semantics</p>
 * @public
 */
export interface UpdatedDescription {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * <p>Leaf patch wrapper for descriptor data. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDescriptorData {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * <p>Leaf patch wrapper for a descriptor's data schema version. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDataSchemaVersion {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * <p>Leaf patch wrapper for a descriptor's source configuration. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDescriptorSource {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: DescriptorSource | undefined;
}

/**
 * <p>The set of A2A agent card descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedA2aAgentCardDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * <p>The A2A agent card descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedA2aAgentCardDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedA2aAgentCardDescriptorFields | undefined;
}

/**
 * <p>The repository provider patch wrapper. Omit to leave the repository provider unchanged; supply an empty object to remove it; supply optionalValue to set it. When you remove it, also remove or replace the GitHub source in the same request.</p>
 * @public
 */
export interface UpdatedAgentSkillsRepositoryProvider {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: AgentSkillsRepositoryProvider | undefined;
}

/**
 * <p>The set of agent skills markdown descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgentSkillsMdDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * <p>The agent skills markdown descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgentSkillsMdDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsMdDescriptorFields | undefined;
}

/**
 * <p>The skill package source patch wrapper. Omit to leave the source unchanged; supply an empty object to remove it and stop synchronizing the package; supply optionalValue to replace it.</p>
 * @public
 */
export interface UpdatedAgentSkillsPackageDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: AgentSkillsPackageDescriptor | undefined;
}

/**
 * <p>The source configuration patch wrapper. Omit to leave the configuration unchanged; supply an empty object to remove it; supply optionalValue to replace it. When you move an Amazon S3 source to another bucket, the record keeps its configuration. In the same request, specify the new bucket's owner, or specify an empty object so that the registry expects the bucket in the role's account.</p>
 * @public
 */
export interface UpdatedAgentSkillsSourceConfiguration {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: AgentSkillsSourceConfiguration | undefined;
}

/**
 * <p>The set of agent skills additional-data fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgentSkillsAdditionalDataFields {
  /**
   * <p>The patch for the agent skills markdown descriptor field.</p>
   * @public
   */
  skillMd?: UpdatedAgentSkillsMdDescriptor | undefined;

  /**
   * <p>The patch for the skill package source field.</p>
   * @public
   */
  skillPackage?: UpdatedAgentSkillsPackageDescriptor | undefined;

  /**
   * <p>The patch for the repository provider field.</p>
   * @public
   */
  repositoryProvider?: UpdatedAgentSkillsRepositoryProvider | undefined;

  /**
   * <p>The patch for the source configuration field.</p>
   * @public
   */
  sourceConfiguration?: UpdatedAgentSkillsSourceConfiguration | undefined;
}

/**
 * <p>The agent skills additional-data patch wrapper. Omit to leave the additional data unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgentSkillsAdditionalData {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsAdditionalDataFields | undefined;
}

/**
 * <p>The set of agent skills definition descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgentSkillsDefinitionDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's additional data field.</p>
   * @public
   */
  additionalData?: UpdatedAgentSkillsAdditionalData | undefined;
}

/**
 * <p>The agent skills definition descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgentSkillsDefinitionDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDefinitionDescriptorFields | undefined;
}

/**
 * <p>The set of AG-UI descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedAgUiDescriptorFields {
  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * <p>The AG-UI descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedAgUiDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedAgUiDescriptorFields | undefined;
}

/**
 * <p>The set of custom descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedCustomDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;
}

/**
 * <p>The custom descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedCustomDescriptorFields | undefined;
}

/**
 * <p>The set of HTTP descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedHttpDescriptorFields {
  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;
}

/**
 * <p>The HTTP descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedHttpDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedHttpDescriptorFields | undefined;
}

/**
 * <p>The set of MCP tools descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedMcpToolsDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;
}

/**
 * <p>The MCP tools descriptor patch wrapper. Omit to leave the tools descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedMcpToolsDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedMcpToolsDescriptorFields | undefined;
}

/**
 * <p>The set of MCP server additional-data fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedMcpServerAdditionalDataFields {
  /**
   * <p>The patch for the MCP tools descriptor field.</p>
   * @public
   */
  tools?: UpdatedMcpToolsDescriptor | undefined;
}

/**
 * <p>The MCP server additional-data patch wrapper. Omit to leave the additional data unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedMcpServerAdditionalData {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedMcpServerAdditionalDataFields | undefined;
}

/**
 * <p>The set of MCP server descriptor fields that can be individually updated.</p>
 * @public
 */
export interface UpdatedMcpServerDescriptorFields {
  /**
   * <p>The patch for the descriptor's data field.</p>
   * @public
   */
  data?: UpdatedDescriptorData | undefined;

  /**
   * <p>The patch for the descriptor's data schema version field.</p>
   * @public
   */
  dataSchemaVersion?: UpdatedDataSchemaVersion | undefined;

  /**
   * <p>The patch for the descriptor's source field.</p>
   * @public
   */
  source?: UpdatedDescriptorSource | undefined;

  /**
   * <p>The patch for the descriptor's additional data field.</p>
   * @public
   */
  additionalData?: UpdatedMcpServerAdditionalData | undefined;
}

/**
 * <p>The MCP server descriptor patch wrapper. Omit to leave the descriptor unchanged; supply an empty object to remove it; supply optionalValue to patch its fields.</p>
 * @public
 */
export interface UpdatedMcpServerDescriptor {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedMcpServerDescriptorFields | undefined;
}

/**
 * <p>The patchable descriptor fields applied during an UpdateRegistryRecord call. Each field is independently patchable.</p>
 * @public
 */
export interface UpdatedDescriptorsFields {
  /**
   * <p>The patch for the MCP server descriptor.</p>
   * @public
   */
  mcpServer?: UpdatedMcpServerDescriptor | undefined;

  /**
   * <p>The patch for the A2A agent card descriptor.</p>
   * @public
   */
  a2aAgentCard?: UpdatedA2aAgentCardDescriptor | undefined;

  /**
   * <p>The patch for the agent skills definition descriptor.</p>
   * @public
   */
  agentSkillsDefinition?: UpdatedAgentSkillsDefinitionDescriptor | undefined;

  /**
   * <p>The patch for the custom descriptor.</p>
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;

  /**
   * <p>The patch for the HTTP descriptor.</p>
   * @public
   */
  http?: UpdatedHttpDescriptor | undefined;

  /**
   * <p>The patch for the AG-UI descriptor.</p>
   * @public
   */
  agui?: UpdatedAgUiDescriptor | undefined;
}

/**
 * <p>The top-level descriptors patch wrapper used in UpdateRegistryRecord. Omit to leave the current descriptors unchanged; supply an empty object to clear them; supply optionalValue to apply a per-field patch.</p>
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: UpdatedDescriptorsFields | undefined;
}

/**
 * <p>Leaf patch wrapper for a registry record's display name. Omit to leave unchanged; supply an empty object to unset; supply optionalValue to set.</p>
 * @public
 */
export interface UpdatedDisplayName {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The updated name of the registry record. Omit to leave the name unchanged.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated display name of the registry record. Omit to leave the display name unchanged; provide an empty wrapper to unset it.</p>
   * @public
   */
  displayName?: UpdatedDisplayName | undefined;

  /**
   * <p>The updated description of the registry record. Omit to leave the description unchanged; provide an empty wrapper to unset it.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated type of the registry record. Omit to leave the record type unchanged.</p>
   * @public
   */
  recordType?: RecordType | undefined;

  /**
   * <p>The updated typed descriptor content for the registry record. Omit to leave the descriptors unchanged.</p>
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * <p>The change to the record's uploaded skill package. Omit it to keep the current package, specify an empty object to remove an uploaded package, or specify <code>optionalValue</code> to upload a new package. An empty object doesn't remove a package that the record synchronizes from a source. To stop that synchronization, remove <code>skillPackage</code>. A request that changes <code>skillMd.data</code> replaces the record's package with that text, even if you omit this member.</p>
   * @public
   */
  artifact?: UpdatedRegistryRecordArtifact | undefined;

  /**
   * <p>The updated version of the registry record. Omit to leave the version unchanged.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The updated custom metadata for the registry record. Values can be strings (maximum 128 characters) or native JSON booleans (<code>true</code> or <code>false</code>). Omit to leave the existing metadata unchanged. Supply the wrapper with a full replacement set to update, or with a null value to clear all metadata.</p>
   * @public
   */
  customMetadata?: UpdatedCustomMetadataMap | undefined;

  /**
   * <p>Specifies whether to synchronize the record's descriptor content from its source. For a skill record, the registry reads the stored <code>skillMd.source</code> or <code>skillPackage.source</code> again, because it doesn't watch the source for changes. For a GitHub source, the operation also returns a new authorization link when one is needed. An update that sets a different skill source starts a synchronization even if you omit this member.</p>
   * @public
   */
  triggerSynchronization?: boolean | undefined;

  /**
   * <p>Specifies whether to ask a GitHub user to authorize access again, even when the current authorization still works, for example to use a different GitHub account. You can use it only together with <code>triggerSynchronization</code>, for a GitHub source whose credential provider uses the <code>AUTHORIZATION_CODE</code> grant. The new authorization also replaces the one that the same IAM principal's other records in the registry use for the same host, credential provider, scopes, and custom parameters.</p>
   * @public
   */
  forceAuthentication?: boolean | undefined;

  /**
   * <p>The provenance lineage re-assertion for the registry record. This field is reserved for the Amazon Web Services Agent Registry auto-detection service principal. Requests that include this field from other callers are rejected. The source identity of an existing lineage is immutable; a re-assertion may only refresh the source details.</p>
   * @public
   */
  provenance?: Provenance[] | undefined;
}

/**
 * <p>Response structure for updating a registry record</p>
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent registry that owns the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record. Names are unique within a registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The human-readable display name of the registry record.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the registry record, such as MCP, AGENT, SKILL, or CUSTOM.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>The typed descriptors that define the content of the registry record.</p>
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * <p>The version identifier of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The lifecycle status of the registry record. <code>UPDATE_PENDING_AUTH</code> means that the update waits for a GitHub user to authorize access before the record synchronizes from its GitHub source. For the authorization link, see <code>authorizationData</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The provenance lineage entries for the registry record. Populated for records created by auto-detection; each entry identifies the upstream source that the record was detected from.</p>
   * @public
   */
  provenance?: Provenance[] | undefined;

  /**
   * <p>Specifies whether the registry record was created by auto-detection. <code>true</code> indicates the record was automatically created by the service based on the registry's auto-detection configuration; <code>false</code> indicates the record was created through a control-plane API call.</p>
   * @public
   */
  createdByAutoDetection?: boolean | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that created the registry record.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The custom metadata attached to this registry record. Values are strings (maximum 128 characters) or booleans.</p>
   * @public
   */
  customMetadata?: __DocumentType | undefined;

  /**
   * <p>Indicates whether this record's custom metadata conforms to the registry's current schema. This status is computed at read time against the latest schema.</p>
   * @public
   */
  customMetadataSchemaComplianceStatus?: CustomMetadataSchemaComplianceStatus | undefined;

  /**
   * <p>The authorization that a GitHub user must complete before the record's synchronization starts. Present only in this response, and only while the status is <code>UPDATE_PENDING_AUTH</code>. If the status is <code>UPDATE_PENDING_AUTH</code> but this member is absent, call <code>UpdateRegistryRecord</code> again with <code>triggerSynchronization</code> to get a new authorization link.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * <p>The identifier of the registry containing the record (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update the status of (ARN or ID)</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The target status for the registry record</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change, for example why the record was approved, rejected, or deprecated</p>
   * @public
   */
  statusReason: string | undefined;
}

/**
 * <p>Response structure for updating a registry record status</p>
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The ARN of the registry record</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The ID of the registry record</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the record was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Configuration for the registry's record approval workflow. Controls whether records submitted for approval require manual review before they become approved and discoverable, or are auto-approved. When no auto-approval rules are configured, submitted records require manual review.</p>
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * <p>The rules that determine which registry records are automatically approved on submission. When omitted or empty, submitted records require manual review.</p>
   * @public
   */
  autoApprovalRules?: AutoApprovalRule[] | undefined;
}

/**
 * <p>The customer-defined auto-detection settings for a registry.</p>
 * @public
 */
export interface AutoDetectionConfiguration {
  /**
   * <p>The source from which resources are detected. For example, <code>ORGANIZATION</code> sources resources from all member accounts of an Amazon Web Services organization.</p>
   * @public
   */
  scope: AutoDetectionScope | undefined;

  /**
   * <p>Specifies whether auto-detection is requested for the registry. Setting this to <code>true</code> is necessary but not sufficient for auto-detection to become active; the preconditions of the configured scope must also be met.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>The custom metadata fields for one record type, in addition to the common attributes defined in <code>defaultSchema</code>.</p>
 * @public
 */
export interface RecordTypeSchemaOverride {
  /**
   * <p>The record type these fields apply to.</p>
   * @public
   */
  recordType: RecordType | undefined;

  /**
   * <p>A JSON Schema with the fields for this record type.</p>
   * @public
   */
  schema: string | undefined;
}

/**
 * <p>The custom metadata fields that records in the registry can carry. <code>defaultSchema</code> defines the common attributes for every record type, and <code>recordTypeSchemaOverrides</code> adds fields for individual record types.</p>
 * @public
 */
export interface CustomMetadataSchemaConfiguration {
  /**
   * <p>A JSON Schema with the common attributes: fields that records of every record type can carry.</p>
   * @public
   */
  defaultSchema?: string | undefined;

  /**
   * <p>The fields for individual record types. Records of a record type can carry the common attributes defined in <code>defaultSchema</code> plus that record type's fields.</p>
   * @public
   */
  recordTypeSchemaOverrides?: RecordTypeSchemaOverride[] | undefined;
}

/**
 * <p>Discovery configuration for the registry. Controls how consumers are authorized to search the registry and invoke its MCP endpoint.</p>
 * @public
 */
export interface DiscoveryConfiguration {
  /**
   * <p>The authorizer configuration for the registry. Required when authorizerType is CUSTOM_JWT.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The type of authorizer that controls how consumers access the registry's search and MCP invoke operations.</p>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;
}

/**
 * <p>The server-side encryption configuration for a registry. Specifies a customer-managed Amazon Web Services KMS key used to encrypt the registry's content.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the customer-managed Amazon Web Services KMS key used to encrypt the registry's content. The key must be a symmetric encryption key in the same Amazon Web Services account and Region as the registry.</p>
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * <p>Request structure for creating a registry</p>
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * <p>The name of the registry</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The optional server-side encryption configuration for the registry. When you provide this field, the specified customer-managed Amazon Web Services KMS key encrypts the registry's content. Omit this field to use an Amazon Web Services-owned encryption key. You cannot change the encryption configuration after registry creation.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request, but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Tags to associate with the registry</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Approval configuration for registry records</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The optional custom metadata schema configuration for the registry. When provided, registry records can carry structured metadata validated against this schema.</p>
   * @public
   */
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration | undefined;

  /**
   * <p>The optional auto-detection configuration for the registry. When provided, the registry is automatically populated with resources discovered according to the configuration. Omit this field for registries whose records are managed exclusively through the Agent Registry Control API.</p>
   * @public
   */
  autoDetectionConfiguration?: AutoDetectionConfiguration | undefined;
}

/**
 * <p>Response structure for creating a registry</p>
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The ARN of the created registry</p>
   * @public
   */
  registryArn: string | undefined;
}

/**
 * <p>Request structure for deleting a registry</p>
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * <p>The identifier of the registry to delete (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * <p>Response structure for deleting a registry</p>
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>Current status of the registry, set to DELETING when deletion is initiated</p>
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * <p>Request structure for getting a registry</p>
 * @public
 */
export interface GetRegistryRequest {
  /**
   * <p>The identifier of the registry to retrieve (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * <p>The auto-detection properties for a registry, including the requested configuration and the current detection status. When auto-detection is enabled and the scope preconditions are met, the registry is automatically populated with discovered resources.</p>
 * @public
 */
export interface AutoDetection {
  /**
   * <p>The auto-detection settings that control how resources are discovered for the registry.</p>
   * @public
   */
  configuration: AutoDetectionConfiguration | undefined;

  /**
   * <p>The current auto-detection status. <code>ACTIVE</code> indicates that the registry is actively being populated with detected resources. <code>INACTIVE</code> indicates that the preconditions required at the configured scope are not currently met.</p>
   * @public
   */
  status: AutoDetectionStatus | undefined;

  /**
   * <p>A human-readable explanation of the current auto-detection status. Typically populated when the status requires additional context.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Response structure for getting a registry</p>
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>The server-side encryption configuration for the registry. Appears only when a customer-managed Amazon Web Services KMS key encrypts the registry.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Approval configuration for registry records</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The custom metadata schema configuration for this registry, if one has been defined.</p>
   * @public
   */
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration | undefined;

  /**
   * <p>Current status of the registry</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The registry's auto-detection properties, including the requested configuration and the current detection status. Present only when auto-detection was configured for the registry.</p>
   * @public
   */
  autoDetection?: AutoDetection | undefined;

  /**
   * <p>The timestamp when the registry was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>A single filter applied to a ListRegistries request.</p>
 * @public
 */
export interface RegistryFilter {
  /**
   * <p>The attribute to filter on</p>
   * @public
   */
  name: RegistryFilterName | undefined;

  /**
   * <p>The values to match for the attribute</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Request structure for listing registries</p>
 * @public
 */
export interface ListRegistriesRequest {
  /**
   * <p>Maximum number of results to return</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Token for pagination</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filters to apply to the registry list</p>
   * @public
   */
  filters?: RegistryFilter[] | undefined;
}

/**
 * <p>Registry summary for list operations</p>
 * @public
 */
export interface RegistrySummary {
  /**
   * <p>Registry name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Registry description</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Unique registry identifier</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>Registry Amazon Resource Name</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>Current status of the registry</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The registry's auto-detection properties, including the requested configuration and the current detection status. Present only when auto-detection was configured for the registry.</p>
   * @public
   */
  autoDetection?: AutoDetection | undefined;

  /**
   * <p>The timestamp when the registry was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for listing registries</p>
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>List of registry summaries</p>
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * <p>Token for next page of results</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A wrapper for updating the approval configuration of a registry. Include this wrapper to replace the approval configuration with the specified value; omit it to leave the approval configuration unchanged.</p>
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
}

/**
 * <p>A wrapper for updating the auto-detection configuration of a registry with PATCH semantics. Include this wrapper to replace the auto-detection configuration with the specified value. Omit it to leave the auto-detection configuration unchanged. To clear the configuration, include the wrapper with a null <code>optionalValue</code>.</p>
 * @public
 */
export interface UpdatedAutoDetectionConfiguration {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: AutoDetectionConfiguration | undefined;
}

/**
 * <p>The custom metadata schema configuration patch wrapper. Omit to leave the existing schema unchanged.</p>
 * @public
 */
export interface UpdatedCustomMetadataSchemaConfiguration {
  /**
   * <p>The value to set for this field. Omit the wrapper to leave the field unchanged.</p>
   * @public
   */
  optionalValue?: CustomMetadataSchemaConfiguration | undefined;
}

/**
 * <p>Wrapper for updating an optional authorizer configuration with PATCH semantics.</p>
 * @public
 */
export interface UpdatedAuthorizerConfiguration {
  /**
   * <p>The new authorizer configuration to set. Omit to leave the existing configuration unchanged.</p>
   * @public
   */
  optionalValue?: AuthorizerConfiguration | undefined;
}

/**
 * <p>The discovery configuration fields to update on a registry. Omit this structure to leave the discovery configuration unchanged.</p>
 * @public
 */
export interface UpdatedDiscoveryConfiguration {
  /**
   * <p>Authorization configuration for the registry, with PATCH semantics</p>
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;
}

/**
 * <p>Request structure for updating a registry</p>
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The identifier of the registry to update (ARN or ID)</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The updated name of the registry</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the registry</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated discovery configuration. Changing the discovery authorization can break existing consumers that rely on the previous authorization type.</p>
   * @public
   */
  discoveryConfiguration?: UpdatedDiscoveryConfiguration | undefined;

  /**
   * <p>The updated approval configuration. The change applies only to records that move to PENDING_APPROVAL after the update; records already in PENDING_APPROVAL are unaffected.</p>
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;

  /**
   * <p>The new custom metadata schema configuration, which replaces the current one. You can add fields and allowed values, but you can't remove a field or an allowed value, or change a field's type.</p>
   * @public
   */
  customMetadataSchemaConfiguration?: UpdatedCustomMetadataSchemaConfiguration | undefined;

  /**
   * <p>The updated auto-detection configuration for the registry, with PATCH semantics. Omit this field to leave the current configuration unchanged. Supply an empty wrapper to unset it. Supply <code>optionalValue</code> to replace it.</p>
   * @public
   */
  autoDetectionConfiguration?: UpdatedAutoDetectionConfiguration | undefined;
}

/**
 * <p>Response structure for updating a registry</p>
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The name of the registry</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The ARN of the registry</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>Discovery configuration for the registry</p>
   * @public
   */
  discoveryConfiguration?: DiscoveryConfiguration | undefined;

  /**
   * <p>The server-side encryption configuration for the registry. Appears only when a customer-managed Amazon Web Services KMS key encrypts the registry.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Approval configuration for registry records</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The custom metadata schema configuration for this registry, if one has been defined.</p>
   * @public
   */
  customMetadataSchemaConfiguration?: CustomMetadataSchemaConfiguration | undefined;

  /**
   * <p>Current status of the registry</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status. Typically populated when the status indicates a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The registry's auto-detection properties, including the requested configuration and the current detection status. Present only when auto-detection was configured for the registry.</p>
   * @public
   */
  autoDetection?: AutoDetection | undefined;

  /**
   * <p>The timestamp when the registry was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag. Supported resources include registries and registry records.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to apply to the resource, as a map of tag keys to tag values. Tag keys must be unique within the request.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from. Supported resources include registries and registry records.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the resource. Tags with keys not included in this list remain on the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
