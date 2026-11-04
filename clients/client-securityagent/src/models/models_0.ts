// smithy-typescript generated code
import type {
  AccessType,
  ArtifactType,
  AuthenticationProviderType,
  CleanUpStrategy,
  CodeRemediationStrategy,
  CodeRemediationTaskStatus,
  ConfidenceLevel,
  ContextType,
  DNSRecordType,
  DomainVerificationMethod,
  ErrorCode,
  FindingStatus,
  GitLabTokenType,
  IpAddressType,
  JobStatus,
  JobType,
  LogType,
  ManagementType,
  MembershipType,
  MembershipTypeFilter,
  NetworkTrafficRuleEffect,
  NetworkTrafficRuleType,
  PrivateConnectionStatus,
  PrivateConnectionType,
  Provider,
  ProviderType,
  ResourceConfigDnsResolution,
  ResourceType,
  RiskLevel,
  RiskType,
  ScopeDecision,
  SecurityRequirementArtifactFormat,
  SecurityRequirementPackImportStatus,
  SecurityRequirementPackStatus,
  SkillType,
  StepName,
  StepStatus,
  StrideCategory,
  TargetDomainStatus,
  TaskExecutionStatus,
  TestScopeType,
  ThreatActor,
  ThreatSeverity,
  ThreatStatus,
  TriggerEvent,
  TriggerFilterMatchMode,
  TriggerFilterType,
  UserRole,
  ValidationMode,
  ValidationStatus,
  WebhookAction,
} from "./enums";

/**
 * The authentication configuration for an actor, specifying the provider type and credentials.
 *
 * @public
 */
export interface Authentication {
  /**
   * The type of authentication provider. Valid values include SECRETS_MANAGER, AWS_LAMBDA, AWS_IAM_ROLE, and AWS_INTERNAL.
   *
   * @public
   */
  providerType?: AuthenticationProviderType | undefined;

  /**
   * The authentication value, such as a secret ARN, Lambda function ARN, or IAM role ARN, depending on the provider type.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Represents an actor used during penetration testing. An actor defines a user or entity that interacts with the target application, including authentication credentials and target URIs.
 *
 * @public
 */
export interface Actor {
  /**
   * The unique identifier for the actor.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The list of URIs that the actor targets during testing.
   *
   * @public
   */
  uris?: string[] | undefined;

  /**
   * The authentication configuration for the actor.
   *
   * @public
   */
  authentication?: Authentication | undefined;

  /**
   * A description of the actor.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether email-based MFA is enabled for this actor.
   *
   * @public
   */
  enableEmailMfa?: boolean | undefined;

  /**
   * Server-generated email forwarding address for receiving MFA codes.
   *
   * @public
   */
  mfaForwardingAddress?: string | undefined;
}

/**
 * A message received at an actor's server-generated email MFA address.
 *
 * @public
 */
export interface ActorMessage {
  /**
   * The address the message was sent from.
   *
   * @public
   */
  sender?: string | undefined;

  /**
   * The subject line of the message.
   *
   * @public
   */
  subject?: string | undefined;

  /**
   * The plain-text body of the message, containing the MFA code or verification link.
   *
   * @public
   */
  body?: string | undefined;

  /**
   * The time the message was received.
   *
   * @public
   */
  receivedAt?: Date | undefined;
}

/**
 * @public
 */
export interface AddArtifactInput {
  /**
   * The unique identifier of the agent space to add the artifact to.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The binary content of the artifact to upload.
   *
   * @public
   */
  artifactContent: Uint8Array | undefined;

  /**
   * The file type of the artifact. Valid values include TXT, PNG, JPEG, MD, PDF, DOCX, DOC, JSON, and YAML.
   *
   * @public
   */
  artifactType: ArtifactType | undefined;

  /**
   * The file name of the artifact.
   *
   * @public
   */
  fileName: string | undefined;
}

/**
 * @public
 */
export interface AddArtifactOutput {
  /**
   * The unique identifier assigned to the uploaded artifact.
   *
   * @public
   */
  artifactId: string | undefined;
}

/**
 * Describes one specific validation failure for an input member.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraint.
   *
   * @public
   */
  path: string | undefined;

  /**
   * A detailed description of the validation failure.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The VPC configuration for a pentest, specifying the VPC, security groups, and subnets to use during testing.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The Amazon Resource Name (ARN) or ID of the VPC.
   *
   * @public
   */
  vpcArn?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) or IDs of the security groups for the VPC configuration.
   *
   * @public
   */
  securityGroupArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) or IDs of the subnets for the VPC configuration.
   *
   * @public
   */
  subnetArns?: string[] | undefined;
}

/**
 * The AWS resources associated with an agent space, including VPCs, log groups, S3 buckets, secrets, Lambda functions, and IAM roles.
 *
 * @public
 */
export interface AWSResources {
  /**
   * The VPC configurations associated with the agent space.
   *
   * @public
   */
  vpcs?: VpcConfig[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the CloudWatch log groups associated with the agent space.
   *
   * @public
   */
  logGroups?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the S3 buckets associated with the agent space.
   *
   * @public
   */
  s3Buckets?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Secrets Manager secrets associated with the agent space.
   *
   * @public
   */
  secretArns?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the Lambda functions associated with the agent space.
   *
   * @public
   */
  lambdaFunctionArns?: string[] | undefined;

  /**
   * The IAM roles associated with the agent space.
   *
   * @public
   */
  iamRoles?: string[] | undefined;
}

/**
 * The code review settings for an agent space, controlling which types of scanning are enabled.
 *
 * @public
 */
export interface CodeReviewSettings {
  /**
   * Indicates whether controls scanning is enabled for code reviews.
   *
   * @public
   */
  controlsScanning: boolean | undefined;

  /**
   * Indicates whether general-purpose scanning is enabled for code reviews.
   *
   * @public
   */
  generalPurposeScanning: boolean | undefined;
}

/**
 * Represents an agent space, which is a dedicated workspace for securing a specific application. An agent space contains the configuration, resources, and settings needed for security testing.
 *
 * @public
 */
export interface AgentSpace {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The name of the agent space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the agent space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The AWS resources associated with the agent space.
   *
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * The list of target domain identifiers associated with the agent space.
   *
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * The code review settings for the agent space.
   *
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * The identifier of the AWS KMS key used to encrypt data in the agent space.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The date and time the agent space was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the agent space was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Input for batch retrieving agent spaces.
 *
 * @public
 */
export interface BatchGetAgentSpacesInput {
  /**
   * The list of agent space identifiers to retrieve.
   *
   * @public
   */
  agentSpaceIds: string[] | undefined;
}

/**
 * Output for the BatchGetAgentSpaces operation.
 *
 * @public
 */
export interface BatchGetAgentSpacesOutput {
  /**
   * The list of agent spaces that were found.
   *
   * @public
   */
  agentSpaces?: AgentSpace[] | undefined;

  /**
   * The list of agent space identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for creating a new agent space.
 *
 * @public
 */
export interface CreateAgentSpaceInput {
  /**
   * The name of the agent space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the agent space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The AWS resources to associate with the agent space.
   *
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * The list of target domain identifiers to associate with the agent space.
   *
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * The code review settings for the agent space.
   *
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * The identifier of the AWS KMS key to use for encrypting data in the agent space.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The tags to associate with the agent space.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output for the CreateAgentSpace operation.
 *
 * @public
 */
export interface CreateAgentSpaceOutput {
  /**
   * The unique identifier of the created agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The name of the agent space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the agent space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The AWS resources associated with the agent space.
   *
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * The list of target domain identifiers associated with the agent space.
   *
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * The code review settings for the agent space.
   *
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * The identifier of the AWS KMS key used to encrypt data in the agent space.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The date and time the agent space was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the agent space was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Input for deleting an agent space.
 *
 * @public
 */
export interface DeleteAgentSpaceInput {
  /**
   * The unique identifier of the agent space to delete.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output for the DeleteAgentSpace operation.
 *
 * @public
 */
export interface DeleteAgentSpaceOutput {
  /**
   * The unique identifier of the deleted agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for listing agent spaces.
 *
 * @public
 */
export interface ListAgentSpacesInput {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about an agent space.
 *
 * @public
 */
export interface AgentSpaceSummary {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The name of the agent space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time the agent space was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the agent space was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListAgentSpaces operation.
 *
 * @public
 */
export interface ListAgentSpacesOutput {
  /**
   * The list of agent space summaries.
   *
   * @public
   */
  agentSpaceSummaries?: AgentSpaceSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for updating an agent space.
 *
 * @public
 */
export interface UpdateAgentSpaceInput {
  /**
   * The unique identifier of the agent space to update.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The updated name of the agent space.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the agent space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated AWS resources to associate with the agent space.
   *
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * The updated list of target domain identifiers to associate with the agent space.
   *
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * The updated code review settings for the agent space.
   *
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;
}

/**
 * Output for the UpdateAgentSpace operation.
 *
 * @public
 */
export interface UpdateAgentSpaceOutput {
  /**
   * The unique identifier of the updated agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The name of the agent space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the agent space.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The AWS resources associated with the agent space.
   *
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * The list of target domain identifiers associated with the agent space.
   *
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * The code review settings for the agent space.
   *
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * The date and time the agent space was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the agent space was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center instance to associate with the application.
   *
   * @public
   */
  idcInstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the application.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The identifier of the default AWS KMS key to use for encrypting data in the application.
   *
   * @public
   */
  defaultKmsKeyId?: string | undefined;

  /**
   * The tags to associate with the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The unique identifier of the created application.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The unique identifier of the application to delete.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The unique identifier of the application to retrieve.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * The IAM Identity Center configuration for an application.
 *
 * @public
 */
export interface IdCConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center application.
   *
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center instance.
   *
   * @public
   */
  idcInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The unique identifier of the application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The domain associated with the application.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The IAM Identity Center configuration for the application.
   *
   * @public
   */
  idcConfiguration?: IdCConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the application.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The identifier of the default AWS KMS key used to encrypt data for the application.
   *
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about an application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The unique identifier of the application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  applicationName: string | undefined;

  /**
   * The domain associated with the application.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The identifier of the default AWS KMS key used to encrypt data for the application.
   *
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * The list of application summaries.
   *
   * @public
   */
  applicationSummaries: ApplicationSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The unique identifier of the application to update.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The updated Amazon Resource Name (ARN) of the IAM role for the application.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The updated identifier of the default AWS KMS key for the application.
   *
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * The unique identifier of the updated application.
   *
   * @public
   */
  applicationId: string | undefined;
}

/**
 * Represents an artifact that provides context for security testing, such as documentation, diagrams, or configuration files.
 *
 * @public
 */
export interface Artifact {
  /**
   * The content of the artifact.
   *
   * @public
   */
  contents: string | undefined;

  /**
   * The file type of the artifact.
   *
   * @public
   */
  type: ArtifactType | undefined;
}

/**
 * Contains metadata about an artifact.
 *
 * @public
 */
export interface ArtifactMetadataItem {
  /**
   * The unique identifier of the agent space that contains the artifact.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the artifact.
   *
   * @public
   */
  artifactId: string | undefined;

  /**
   * The file name of the artifact.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The date and time the artifact was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains summary information about an artifact.
 *
 * @public
 */
export interface ArtifactSummary {
  /**
   * The unique identifier of the artifact.
   *
   * @public
   */
  artifactId: string | undefined;

  /**
   * The file name of the artifact.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The file type of the artifact.
   *
   * @public
   */
  artifactType: ArtifactType | undefined;
}

/**
 * A client certificate for mutual TLS (mTLS) authentication to target hosts.
 *
 * @public
 */
export interface ClientCertificate {
  /**
   * A customer-chosen name for this client certificate, used in error messages and console display.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the Secrets Manager secret containing the certificate and private key.
   *
   * @public
   */
  secretArn: string | undefined;

  /**
   * The origins (scheme://host[:port]) this certificate applies to. Paths are not supported. Each hostname can have at most one client certificate.
   *
   * @public
   */
  origins: string[] | undefined;
}

/**
 * A reference to a document in a third-party provider, such as a Confluence page linked via an integration.
 *
 * @public
 */
export interface IntegratedDocument {
  /**
   * The identifier of the integration that provides access to the document.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The provider-specific resource identifier for the document.
   *
   * @public
   */
  resourceId: string | undefined;
}

/**
 * Represents a document that provides context for security testing.
 *
 * @public
 */
export interface DocumentInfo {
  /**
   * The Amazon S3 location of the document.
   *
   * @public
   */
  s3Location?: string | undefined;

  /**
   * The unique identifier of the artifact associated with the document.
   *
   * @public
   */
  artifactId?: string | undefined;

  /**
   * A reference to a document in an integrated third-party provider.
   *
   * @public
   */
  integratedDocument?: IntegratedDocument | undefined;
}

/**
 * Represents a target endpoint for penetration testing.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The URI of the endpoint.
   *
   * @public
   */
  uri?: string | undefined;
}

/**
 * Represents a code repository that is integrated with the service through a third-party provider.
 *
 * @public
 */
export interface IntegratedRepository {
  /**
   * The unique identifier of the integration that provides access to the repository.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The provider-specific resource identifier for the repository.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * An optional override for the repository branch.
   *
   * @public
   */
  branch?: string | undefined;
}

/**
 * Represents a source code repository used for security analysis during a pentest.
 *
 * @public
 */
export interface SourceCodeRepository {
  /**
   * The Amazon S3 location of the source code repository archive.
   *
   * @public
   */
  s3Location?: string | undefined;
}

/**
 * The source of a trusted CA certificate. Exactly one member must be set.
 *
 * @public
 */
export type CaCertificateSource =
  | CaCertificateSource.ArtifactIdMember
  | CaCertificateSource.InlinePemMember
  | CaCertificateSource.S3LocationMember
  | CaCertificateSource.$UnknownMember;

/**
 * @public
 */
export namespace CaCertificateSource {
  /**
   * A PEM-encoded X.509 certificate supplied inline.
   *
   * @public
   */
  export interface InlinePemMember {
    inlinePem: string;
    artifactId?: never;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * The artifact ID of an uploaded certificate file.
   *
   * @public
   */
  export interface ArtifactIdMember {
    inlinePem?: never;
    artifactId: string;
    s3Location?: never;
    $unknown?: never;
  }

  /**
   * The Amazon S3 location URI of a customer-staged certificate.
   *
   * @public
   */
  export interface S3LocationMember {
    inlinePem?: never;
    artifactId?: never;
    s3Location: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    inlinePem?: never;
    artifactId?: never;
    s3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    inlinePem: (value: string) => T;
    artifactId: (value: string) => T;
    s3Location: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A trust anchor used when validating a target endpoint's TLS certificate.
 *
 * @public
 */
export interface TrustedCaCertificate {
  /**
   * The source that Security Agent reads the certificate from.
   *
   * @public
   */
  source: CaCertificateSource | undefined;
}

/**
 * The collection of assets used in a pentest configuration, including endpoints, actors, documents, source code repositories, and integrated repositories.
 *
 * @public
 */
export interface Assets {
  /**
   * The list of endpoints to test during the pentest.
   *
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * The list of actors used during penetration testing.
   *
   * @public
   */
  actors?: Actor[] | undefined;

  /**
   * The list of documents that provide context for the pentest.
   *
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * The list of source code repositories to analyze during the pentest.
   *
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * The list of integrated repositories associated with the pentest.
   *
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * The trust anchors used to validate target endpoint TLS certificates. Provide these for endpoints served by a private or internal certificate authority (CA), an intermediate CA, or a self-signed certificate.
   *
   * @public
   */
  trustedCaCertificates?: TrustedCaCertificate[] | undefined;

  /**
   * The client certificates for mutual TLS (mTLS) authentication to target hosts. Each certificate is stored in Secrets Manager and scoped to specific target origins.
   *
   * @public
   */
  clientCertificates?: ClientCertificate[] | undefined;
}

/**
 * Connection details for an Azure DevOps integration.
 *
 * @public
 */
export interface AzureDevOpsIntegrationInput {
  /**
   * The OAuth 2.0 authorization code returned to your redirect URL after the connection is authorized.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The CSRF state value returned by `InitiateProviderRegistration` and echoed back on the authorization redirect.
   *
   * @public
   */
  state: string | undefined;

  /**
   * The name of the Azure DevOps organization to connect, for example `my-org`.
   *
   * @public
   */
  organizationName: string | undefined;
}

/**
 * Metadata for an integrated Azure DevOps repository.
 *
 * @public
 */
export interface AzureDevOpsRepositoryMetadata {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Provider Id of the resource e.g. GitHub repository id, etc.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The name of the Azure DevOps organization that owns the repository.
   *
   * @public
   */
  organization: string | undefined;

  /**
   * The name of the Azure DevOps project that contains the repository.
   *
   * @public
   */
  project?: string | undefined;

  /**
   * The GUID of the Azure DevOps project that contains the repository.
   *
   * @public
   */
  projectId?: string | undefined;

  /**
   * Defines the visibility level of provider resources. PRIVATE indicates restricted access, while PUBLIC indicates open access.
   *
   * @public
   */
  accessType?: AccessType | undefined;
}

/**
 * An Azure DevOps repository integrated as a resource.
 *
 * @public
 */
export interface AzureDevOpsRepositoryResource {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the Azure DevOps organization that owns the repository.
   *
   * @public
   */
  organization: string | undefined;

  /**
   * The name of the Azure DevOps project that contains the repository.
   *
   * @public
   */
  project?: string | undefined;
}

/**
 * A condition on a pull request value.
 *
 * @public
 */
export interface TriggerFilter {
  /**
   * The pull request value to match.
   *
   * @public
   */
  type: TriggerFilterType | undefined;

  /**
   * The regular expressions to match against the value.
   *
   * @public
   */
  patterns: string[] | undefined;

  /**
   * Whether the value must match the patterns. The default is `INCLUDE`.
   *
   * @public
   */
  matchMode?: TriggerFilterMatchMode | undefined;
}

/**
 * A set of conditions that start an automatic code review when they all pass. A filter group must include `events`, `filters`, or both.
 *
 * @public
 */
export interface TriggerFilterGroup {
  /**
   * Passes when the pull request event is one of the listed events. If you omit this, the group matches `PULL_REQUEST_READY_FOR_REVIEW` and `PULL_REQUEST_DRAFT` events only.
   *
   * @public
   */
  events?: TriggerEvent[] | undefined;

  /**
   * Passes when every filter passes. If you omit this, the group matches its events on any target branch and with any labels.
   *
   * @public
   */
  filters?: TriggerFilter[] | undefined;
}

/**
 * Capabilities for an integrated Azure DevOps repository.
 *
 * @public
 */
export interface AzureDevOpsResourceCapabilities {
  /**
   * The filter groups that control which pull request events start an automatic code review when `leaveComments` is enabled. A review starts when any group matches. If you omit this, a review starts on `PULL_REQUEST_READY_FOR_REVIEW` events.
   *
   * @public
   */
  triggerFilterGroups?: TriggerFilterGroup[] | undefined;

  /**
   * Whether to post code review comments on pull requests.
   *
   * @public
   */
  leaveComments?: boolean | undefined;

  /**
   * Whether to create pull requests with automated fixes.
   *
   * @public
   */
  remediateCode?: boolean | undefined;
}

/**
 * Contains information about a successfully created security requirement.
 *
 * @public
 */
export interface BatchCreateSecurityRequirementResult {
  /**
   * The unique identifier of the pack containing the security requirement.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The name of the security requirement.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The security domain the requirement belongs to.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The evaluation criteria used to assess compliance with this requirement.
   *
   * @public
   */
  evaluation: string | undefined;

  /**
   * The recommended remediation steps when the requirement is not met.
   *
   * @public
   */
  remediation?: string | undefined;

  /**
   * The date and time the security requirement was created, in UTC format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the security requirement was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Contains the details for a security requirement to create within a pack.
 *
 * @public
 */
export interface CreateSecurityRequirementEntry {
  /**
   * The name of the security requirement.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The security domain the requirement belongs to.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The evaluation criteria used to assess compliance with this requirement.
   *
   * @public
   */
  evaluation: string | undefined;

  /**
   * The recommended remediation steps when the requirement is not met.
   *
   * @public
   */
  remediation?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateSecurityRequirementsInput {
  /**
   * The unique identifier of the security requirement pack to add requirements to.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The list of security requirements to create.
   *
   * @public
   */
  securityRequirements: CreateSecurityRequirementEntry[] | undefined;
}

/**
 * Contains information about an error that occurred for a specific security requirement during a batch operation.
 *
 * @public
 */
export interface BatchSecurityRequirementError {
  /**
   * The name of the security requirement that caused the error.
   *
   * @public
   */
  securityRequirementName: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateSecurityRequirementsOutput {
  /**
   * The list of security requirements that were successfully created.
   *
   * @public
   */
  securityRequirements: BatchCreateSecurityRequirementResult[] | undefined;

  /**
   * The list of errors for security requirements that failed to be created.
   *
   * @public
   */
  errors: BatchSecurityRequirementError[] | undefined;
}

/**
 * Input for deleting multiple code reviews.
 *
 * @public
 */
export interface BatchDeleteCodeReviewsInput {
  /**
   * The list of code review identifiers to delete.
   *
   * @public
   */
  codeReviewIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the code reviews to delete.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Contains information about a code review that failed to delete.
 *
 * @public
 */
export interface DeleteCodeReviewFailure {
  /**
   * The unique identifier of the code review that failed to delete.
   *
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * The reason the code review failed to delete.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Output for the BatchDeleteCodeReviews operation.
 *
 * @public
 */
export interface BatchDeleteCodeReviewsOutput {
  /**
   * The list of identifiers of the code reviews that were successfully deleted.
   *
   * @public
   */
  deleted?: string[] | undefined;

  /**
   * The list of code reviews that failed to delete, including the reason for each failure.
   *
   * @public
   */
  failed?: DeleteCodeReviewFailure[] | undefined;
}

/**
 * Input for deleting multiple pentests.
 *
 * @public
 */
export interface BatchDeletePentestsInput {
  /**
   * The list of pentest identifiers to delete.
   *
   * @public
   */
  pentestIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the pentests to delete.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * The configuration that enables a pentest to run as part of a CI/CD pipeline, scoped to the code changes in each pipeline run.
 *
 * @public
 */
export interface CiCdConfiguration {
  /**
   * Whether CI/CD pentesting is enabled for this pentest.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * The Amazon CloudWatch Logs configuration for pentest job logging.
 *
 * @public
 */
export interface CloudWatchLog {
  /**
   * The name of the CloudWatch log group.
   *
   * @public
   */
  logGroup?: string | undefined;

  /**
   * The name of the CloudWatch log stream.
   *
   * @public
   */
  logStream?: string | undefined;
}

/**
 * A custom HTTP header to include in network traffic during penetration testing.
 *
 * @public
 */
export interface CustomHeader {
  /**
   * The name of the custom header.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the custom header.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A rule that controls network traffic during penetration testing by allowing or denying traffic to specific URL patterns.
 *
 * @public
 */
export interface NetworkTrafficRule {
  /**
   * The effect of the rule. Valid values are ALLOW and DENY.
   *
   * @public
   */
  effect?: NetworkTrafficRuleEffect | undefined;

  /**
   * The URL pattern to match for the rule.
   *
   * @public
   */
  pattern?: string | undefined;

  /**
   * The type of the network traffic rule. Currently, only URL is supported.
   *
   * @public
   */
  networkTrafficRuleType?: NetworkTrafficRuleType | undefined;
}

/**
 * The network traffic configuration for a pentest, including custom headers and traffic rules.
 *
 * @public
 */
export interface NetworkTrafficConfig {
  /**
   * The list of network traffic rules that control which URLs are allowed or denied during testing.
   *
   * @public
   */
  rules?: NetworkTrafficRule[] | undefined;

  /**
   * The list of custom HTTP headers to include in network traffic during testing.
   *
   * @public
   */
  customHeaders?: CustomHeader[] | undefined;
}

/**
 * Destination for publishing scan reports to an integrated document provider.
 *
 * @public
 */
export interface ReportDestination {
  /**
   * The integration identifier for the document provider.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The container identifier where the report will be published.
   *
   * @public
   */
  containerId: string | undefined;

  /**
   * The parent document identifier under which the report will be created.
   *
   * @public
   */
  parentId?: string | undefined;

  /**
   * The existing document identifier to update instead of creating a new document.
   *
   * @public
   */
  documentId?: string | undefined;
}

/**
 * The report-generation filters applied when a pentest or code review report is exported.
 *
 * @public
 */
export interface ReportFilters {
  /**
   * The severity levels to include in the report.
   *
   * @public
   */
  riskLevels?: RiskLevel[] | undefined;

  /**
   * The confidence levels to include in the report.
   *
   * @public
   */
  confidenceLevels?: ConfidenceLevel[] | undefined;

  /**
   * The finding statuses to include in the report.
   *
   * @public
   */
  statuses?: FindingStatus[] | undefined;

  /**
   * The risk types to include in the report.
   *
   * @public
   */
  riskTypes?: RiskType[] | undefined;

  /**
   * The finding types to include in the report.
   *
   * @public
   */
  findingTypes?: string[] | undefined;

  /**
   * The task execution statuses to include in the report's task table.
   *
   * @public
   */
  taskStatuses?: TaskExecutionStatus[] | undefined;

  /**
   * Whether to include reviewer annotation notes under each finding.
   *
   * @public
   */
  annotationNotes?: boolean | undefined;

  /**
   * Whether to include the compliance-ready report additions.
   *
   * @public
   */
  complianceReport?: boolean | undefined;
}

/**
 * The category of application a pentest targets.
 *
 * @public
 */
export interface TestScope {
  /**
   * The category of application under test.
   *
   * @public
   */
  type: TestScopeType | undefined;
}

/**
 * Represents a pentest configuration that defines the parameters for security testing, including target assets, risk type exclusions, and infrastructure settings.
 *
 * @public
 */
export interface Pentest {
  /**
   * The unique identifier of the pentest.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the pentest.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The title of the pentest.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The assets included in the pentest.
   *
   * @public
   */
  assets: Assets | undefined;

  /**
   * The list of risk types excluded from the pentest.
   *
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * The IAM service role used for the pentest.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the pentest.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The VPC configuration for the pentest.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The network traffic configuration for the pentest.
   *
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * The code remediation strategy for the pentest.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * Strategy for cleaning up resources after pentest job completion.
   *
   * @public
   */
  cleanUpStrategy?: CleanUpStrategy | undefined;

  /**
   * A list of managed skills to disable for this pentest. Valid values include FINDING_PERSONALIZATION and LOGIN_OPTIMIZATION.
   *
   * @public
   */
  disableManagedSkills?: SkillType[] | undefined;

  /**
   * The maximum number of billable task hours allowed for jobs started from this pentest. If a job reaches the configured limit, it is gracefully stopped. If not set, jobs run to completion with no budget cap.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * The CI/CD pentesting configuration for this pentest. Present when the pentest is set up to run from a CI/CD pipeline.
   *
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * The category of application a pentest targets.
   *
   * @public
   */
  testScope?: TestScope | undefined;

  /**
   * The date and time the pentest was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Contains information about a pentest that failed to delete.
 *
 * @public
 */
export interface DeletePentestFailure {
  /**
   * The unique identifier of the pentest that failed to delete.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The reason the pentest failed to delete.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Output for the BatchDeletePentests operation.
 *
 * @public
 */
export interface BatchDeletePentestsOutput {
  /**
   * The list of pentests that were successfully deleted.
   *
   * @public
   */
  deleted?: Pentest[] | undefined;

  /**
   * The list of pentests that failed to delete, including the reason for each failure.
   *
   * @public
   */
  failed?: DeletePentestFailure[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteSecurityRequirementsInput {
  /**
   * The unique identifier of the security requirement pack to remove requirements from.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The list of security requirement names to delete.
   *
   * @public
   */
  securityRequirementNames: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteSecurityRequirementsOutput {
  /**
   * The list of security requirement names that were successfully deleted.
   *
   * @public
   */
  deletedSecurityRequirementNames: string[] | undefined;

  /**
   * The list of errors for security requirements that failed to be deleted.
   *
   * @public
   */
  errors: BatchSecurityRequirementError[] | undefined;
}

/**
 * Input for deleting multiple threat models.
 *
 * @public
 */
export interface BatchDeleteThreatModelsInput {
  /**
   * The list of threat model identifiers to delete.
   *
   * @public
   */
  threatModelIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the threat models to delete.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Contains information about a threat model that failed to delete.
 *
 * @public
 */
export interface DeleteThreatModelFailure {
  /**
   * The unique identifier of the threat model that failed to delete.
   *
   * @public
   */
  threatModelId?: string | undefined;

  /**
   * The reason the threat model failed to delete.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Output for the BatchDeleteThreatModels operation.
 *
 * @public
 */
export interface BatchDeleteThreatModelsOutput {
  /**
   * The list of threat model identifiers that were successfully deleted.
   *
   * @public
   */
  deleted?: string[] | undefined;

  /**
   * The list of threat models that failed to delete, including the reason for each failure.
   *
   * @public
   */
  failed?: DeleteThreatModelFailure[] | undefined;
}

/**
 * The input for the BatchDisassociateFindingIssue operation.
 *
 * @public
 */
export interface BatchDisassociateFindingIssueInput {
  /**
   * The identifier of the agent space where the job exists.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The identifier of the penetration test job. This parameter is mutually exclusive with `codeReviewJobId`.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The identifier of the code review job. This parameter is mutually exclusive with `pentestJobId`.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The identifiers of the findings to disassociate from their issues. Each must belong to the specified job.
   *
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * A finding that failed to disassociate, with the cause of the failure.
 *
 * @public
 */
export interface BatchDisassociateFindingIssueError {
  /**
   * The identifier of the finding that failed to disassociate.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The machine-readable failure category.
   *
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * A customer-facing explanation of the failure.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The output for the BatchDisassociateFindingIssue operation.
 *
 * @public
 */
export interface BatchDisassociateFindingIssueOutput {
  /**
   * The findings whose issue could not be disassociated.
   *
   * @public
   */
  errors: BatchDisassociateFindingIssueError[] | undefined;
}

/**
 * A finding whose issue could not be created, with the cause of the failure.
 *
 * @public
 */
export interface BatchExportFindingError {
  /**
   * The identifier of the finding this error corresponds to.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The machine-readable failure category.
   *
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * A customer-facing explanation of why the issue could not be created.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * A reference to an issue created for a finding in a third-party issue tracker.
 *
 * @public
 */
export interface LinkedIssue {
  /**
   * The issue-tracker provider.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * The integration identifier for the issue-tracker provider.
   *
   * @public
   */
  integrationId?: string | undefined;

  /**
   * The key of the project the issue belongs to.
   *
   * @public
   */
  projectKey?: string | undefined;

  /**
   * The issue key.
   *
   * @public
   */
  issueKey?: string | undefined;

  /**
   * The stable numeric issue identifier.
   *
   * @public
   */
  issueId?: string | undefined;

  /**
   * The issue URL.
   *
   * @public
   */
  issueUrl?: string | undefined;

  /**
   * The Atlassian Cloud site URL.
   *
   * @public
   */
  siteUrl?: string | undefined;
}

/**
 * A finding whose issue was created.
 *
 * @public
 */
export interface BatchExportFindingResult {
  /**
   * The identifier of the finding this result corresponds to.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The issue that was created for the finding.
   *
   * @public
   */
  linkedIssue: LinkedIssue | undefined;
}

/**
 * The destination for filing findings as issues in an integrated issue tracker.
 *
 * @public
 */
export interface IssueDestination {
  /**
   * The integration identifier for the issue-tracker provider.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The identifier of the project the issues are filed under.
   *
   * @public
   */
  projectKey: string | undefined;
}

/**
 * The input for the BatchExportFindings operation.
 *
 * @public
 */
export interface BatchExportFindingsInput {
  /**
   * The identifier of the agent space where the job exists.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The identifier of the penetration test job. This parameter is mutually exclusive with `codeReviewJobId`.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The identifier of the code review job. This parameter is mutually exclusive with `pentestJobId`.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The destination issue-tracker project the findings are exported to. Must be a connected capability of the agent space.
   *
   * @public
   */
  issueDestination: IssueDestination | undefined;

  /**
   * The identifiers of the findings to export. Each must belong to the specified job.
   *
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * The output for the BatchExportFindings operation.
 *
 * @public
 */
export interface BatchExportFindingsOutput {
  /**
   * The findings whose issue was created, each with its linked issue.
   *
   * @public
   */
  results: BatchExportFindingResult[] | undefined;

  /**
   * The findings whose issue could not be created, each with a customer-facing reason.
   *
   * @public
   */
  errors: BatchExportFindingError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetArtifactMetadataInput {
  /**
   * The unique identifier of the agent space that contains the artifacts.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The list of artifact identifiers to retrieve metadata for.
   *
   * @public
   */
  artifactIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetArtifactMetadataOutput {
  /**
   * The list of artifact metadata items that were found.
   *
   * @public
   */
  artifactMetadataList: ArtifactMetadataItem[] | undefined;
}

/**
 * Input for BatchGetCodeReviewJobs operation.
 *
 * @public
 */
export interface BatchGetCodeReviewJobsInput {
  /**
   * The list of code review job identifiers to retrieve.
   *
   * @public
   */
  codeReviewJobIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the code review jobs.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Contains error information for a pentest job that encountered an error.
 *
 * @public
 */
export interface ErrorInformation {
  /**
   * The error code. Valid values include CLIENT_ERROR, INTERNAL_ERROR, and STOPPED_BY_USER.
   *
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * A message describing the error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains contextual information about the execution of a pentest job, such as errors, warnings, or informational messages.
 *
 * @public
 */
export interface ExecutionContext {
  /**
   * The type of context. Valid values include ERROR, CLIENT_ERROR, WARNING, and INFO.
   *
   * @public
   */
  contextType?: ContextType | undefined;

  /**
   * The context message.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * The date and time the context was recorded, in UTC format.
   *
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * Represents a step in the pentest job execution pipeline. Steps include preflight, static analysis, pentest, and finalizing.
 *
 * @public
 */
export interface Step {
  /**
   * The name of the step. Valid values include PREFLIGHT, STATIC_ANALYSIS, PENTEST, VALIDATION, and FINALIZING.
   *
   * @public
   */
  name?: StepName | undefined;

  /**
   * The current status of the step.
   *
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * The date and time the step was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the step was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Represents a code review job, which is an execution instance of a code review. A code review job progresses through preflight, static analysis, and finalizing steps.
 *
 * @public
 */
export interface CodeReviewJob {
  /**
   * The unique identifier of the code review job.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The unique identifier of the code review associated with the job.
   *
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * The title of the code review job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * An overview of the code review job results.
   *
   * @public
   */
  overview?: string | undefined;

  /**
   * The current status of the code review job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The list of documents providing context for the code review job.
   *
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * The list of source code repositories analyzed during the code review job.
   *
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * The list of steps in the code review job execution.
   *
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * The execution context messages for the code review job.
   *
   * @public
   */
  executionContext?: ExecutionContext[] | undefined;

  /**
   * The IAM service role used for the code review job.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the code review job.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * Error information if the code review job encountered an error.
   *
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * The list of integrated repositories associated with the code review job.
   *
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * The code remediation strategy for the code review job.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The maximum number of billable task hours allowed for this code review job. If the cumulative task hours reach this limit, the job is gracefully stopped.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The date and time the code review job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetCodeReviewJobs operation.
 *
 * @public
 */
export interface BatchGetCodeReviewJobsOutput {
  /**
   * The list of code review jobs that were found.
   *
   * @public
   */
  codeReviewJobs?: CodeReviewJob[] | undefined;

  /**
   * The list of code review job identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple tasks associated with a code review job.
 *
 * @public
 */
export interface BatchGetCodeReviewJobTasksInput {
  /**
   * The unique identifier of the agent space that contains the tasks.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The list of task identifiers to retrieve.
   *
   * @public
   */
  codeReviewJobTaskIds: string[] | undefined;
}

/**
 * Represents a category assigned to a security testing task.
 *
 * @public
 */
export interface Category {
  /**
   * The name of the category.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Indicates whether this is the primary category for the task.
   *
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * The log location for a task, specifying where task execution logs are stored.
 *
 * @public
 */
export interface LogLocation {
  /**
   * The type of log storage. Currently, only CLOUDWATCH is supported.
   *
   * @public
   */
  logType?: LogType | undefined;

  /**
   * The CloudWatch Logs location for the task logs.
   *
   * @public
   */
  cloudWatchLog?: CloudWatchLog | undefined;
}

/**
 * Represents an individual security test task within a code review job. Each task targets a specific risk type and executes independently.
 *
 * @public
 */
export interface CodeReviewJobTask {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the code review associated with the task.
   *
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * The unique identifier of the code review job that contains the task.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the task.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A description of the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of categories assigned to the task.
   *
   * @public
   */
  categories?: Category[] | undefined;

  /**
   * The type of security risk the task is testing for.
   *
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * The current execution status of the task.
   *
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * The location of the task execution logs.
   *
   * @public
   */
  logsLocation?: LogLocation | undefined;

  /**
   * The date and time the task was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the task was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetCodeReviewJobTasks operation.
 *
 * @public
 */
export interface BatchGetCodeReviewJobTasksOutput {
  /**
   * The list of code review job tasks that were found.
   *
   * @public
   */
  codeReviewJobTasks?: CodeReviewJobTask[] | undefined;

  /**
   * The list of task identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple code reviews by their IDs.
 *
 * @public
 */
export interface BatchGetCodeReviewsInput {
  /**
   * The list of code review identifiers to retrieve.
   *
   * @public
   */
  codeReviewIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the code reviews.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Represents a code review configuration that defines the parameters for automated security-focused code analysis, including target assets and logging configuration.
 *
 * @public
 */
export interface CodeReview {
  /**
   * The unique identifier of the code review.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the code review.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The title of the code review.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The assets included in the code review.
   *
   * @public
   */
  assets: Assets | undefined;

  /**
   * The IAM service role used for the code review.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the code review.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The code remediation strategy for the code review.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The validation mode for the code review. Valid values are SIMULATED and DISABLED.
   *
   * @public
   */
  validationMode?: ValidationMode | undefined;

  /**
   * The maximum number of billable task hours allowed for jobs started from this code review. If a job reaches the configured limit, it is gracefully stopped. If not set, jobs run to completion with no budget cap.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * The date and time the code review was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetCodeReviews operation.
 *
 * @public
 */
export interface BatchGetCodeReviewsOutput {
  /**
   * The list of code reviews that were found.
   *
   * @public
   */
  codeReviews?: CodeReview[] | undefined;

  /**
   * The list of code review identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for BatchGetFindings operation.
 *
 * @public
 */
export interface BatchGetFindingsInput {
  /**
   * The list of finding identifiers to retrieve.
   *
   * @public
   */
  findingIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the findings.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Represents a location in source code associated with a security finding.
 *
 * @public
 */
export interface CodeLocation {
  /**
   * The absolute path to the file containing the code location.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The starting line number of the code location.
   *
   * @public
   */
  lineStart?: number | undefined;

  /**
   * The ending line number of the code location.
   *
   * @public
   */
  lineEnd?: number | undefined;

  /**
   * The role of this location in the vulnerability, such as source or sink.
   *
   * @public
   */
  label?: string | undefined;
}

/**
 * Contains details about a code remediation task, including links to the code diff and pull request.
 *
 * @public
 */
export interface CodeRemediationTaskDetails {
  /**
   * The name of the repository where the remediation was applied.
   *
   * @public
   */
  repoName?: string | undefined;

  /**
   * The link to the code diff for the remediation.
   *
   * @public
   */
  codeDiffLink?: string | undefined;

  /**
   * The link to the pull request created for the remediation.
   *
   * @public
   */
  pullRequestLink?: string | undefined;
}

/**
 * Represents a code remediation task that was initiated to fix a security finding.
 *
 * @public
 */
export interface CodeRemediationTask {
  /**
   * The current status of the code remediation task.
   *
   * @public
   */
  status: CodeRemediationTaskStatus | undefined;

  /**
   * The reason for the current status of the code remediation task.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The list of details for the code remediation task, including repository name, code diff link, and pull request link.
   *
   * @public
   */
  taskDetails?: CodeRemediationTaskDetails[] | undefined;
}

/**
 * Represents an environment variable required to run a verification script.
 *
 * @public
 */
export interface VerificationScriptEnvVar {
  /**
   * The name of the environment variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value of the environment variable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Contains metadata for a verification script that can be used to reproduce a security finding.
 *
 * @public
 */
export interface VerificationScript {
  /**
   * The type of script. Valid values are python and bash.
   *
   * @public
   */
  scriptType?: string | undefined;

  /**
   * URL to download the verification script.
   *
   * @public
   */
  scriptUrl?: string | undefined;

  /**
   * Instructions for running the verification script, including prerequisites and how to interpret results.
   *
   * @public
   */
  instructions?: string | undefined;

  /**
   * The list of environment variables required to run the verification script.
   *
   * @public
   */
  envVars?: VerificationScriptEnvVar[] | undefined;
}

/**
 * Represents a security finding discovered during a pentest job. A finding contains details about a vulnerability, including its risk level, confidence, and remediation status.
 *
 * @public
 */
export interface Finding {
  /**
   * The unique identifier of the finding.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The unique identifier of the agent space associated with the finding.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the pentest associated with the finding.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The unique identifier of the pentest job that produced the finding.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the code review associated with the finding.
   *
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * The unique identifier of the code review job that produced the finding.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The unique identifier of the task that produced the finding.
   *
   * @public
   */
  taskId?: string | undefined;

  /**
   * The name of the finding.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the finding.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the finding. Valid values include ACTIVE, RESOLVED, ACCEPTED, and FALSE_POSITIVE.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * The type of security risk identified by the finding.
   *
   * @public
   */
  riskType?: string | undefined;

  /**
   * The risk level of the finding. Valid values include UNKNOWN, INFORMATIONAL, LOW, MEDIUM, HIGH, and CRITICAL.
   *
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * The numerical risk score of the finding.
   *
   * @public
   */
  riskScore?: string | undefined;

  /**
   * The reasoning behind the finding, explaining why it was identified as a vulnerability.
   *
   * @public
   */
  reasoning?: string | undefined;

  /**
   * The confidence level of the finding. Valid values include FALSE_POSITIVE, UNCONFIRMED, LOW, MEDIUM, and HIGH.
   *
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * The simulated validation status of the finding. Valid values are NOT_VALIDATED, VALIDATING, CONFIRMED, NOT_REPRODUCED, and VALIDATION_FAILED.
   *
   * @public
   */
  validationStatus?: ValidationStatus | undefined;

  /**
   * The attack script used to reproduce the finding.
   *
   * @public
   */
  attackScript?: string | undefined;

  /**
   * The suggested fix for the finding, describing the changes recommended to remediate the vulnerability, with example code or configuration.
   *
   * @public
   */
  remediationCode?: string | undefined;

  /**
   * The code remediation task associated with the finding, if code remediation was initiated.
   *
   * @public
   */
  codeRemediationTask?: CodeRemediationTask | undefined;

  /**
   * The identifier of the entity that last updated the finding.
   *
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * A customer-provided note on the finding.
   *
   * @public
   */
  customerNote?: string | undefined;

  /**
   * The file locations involved in the vulnerability, as reported by the code scanner.
   *
   * @public
   */
  codeLocations?: CodeLocation[] | undefined;

  /**
   * The verification script metadata for reproducing the finding, including download URL, instructions, and required environment variables.
   *
   * @public
   */
  verificationScript?: VerificationScript | undefined;

  /**
   * The rationale provided by the alignment agent explaining how the finding was adjusted based on customer preferences.
   *
   * @public
   */
  alignmentRationale?: string | undefined;

  /**
   * The list of pentest job identifiers for revalidation jobs that retested this finding.
   *
   * @public
   */
  revalidationJobIds?: string[] | undefined;

  /**
   * The identifier of the original finding that this revalidation finding was produced from.
   *
   * @public
   */
  originalFindingId?: string | undefined;

  /**
   * The issue in a third-party issue tracker that this finding has been exported to.
   *
   * @public
   */
  linkedIssue?: LinkedIssue | undefined;

  /**
   * The date and time the finding was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the finding was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetFindings operation.
 *
 * @public
 */
export interface BatchGetFindingsOutput {
  /**
   * The list of findings that were found.
   *
   * @public
   */
  findings?: Finding[] | undefined;

  /**
   * The list of finding identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for BatchGetPentestJobs operation.
 *
 * @public
 */
export interface BatchGetPentestJobsInput {
  /**
   * The list of pentest job identifiers to retrieve.
   *
   * @public
   */
  pentestJobIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the pentest jobs.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * A code change in a CI/CD pipeline run that defines what a CI/CD pentest job tests. Each scope change identifies an integrated repository and the commit range for the change.
 *
 * @public
 */
export interface ScopeChange {
  /**
   * The identifier of the integration for the source-code provider that hosts the repository.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The provider-specific identifier of the repository the change belongs to.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The commit SHA that the change is compared against. When omitted, the change is evaluated against the head commit alone.
   *
   * @public
   */
  baseCommitSha?: string | undefined;

  /**
   * The commit SHA at the tip of the change to be tested.
   *
   * @public
   */
  headCommitSha: string | undefined;

  /**
   * The identifier of the CI/CD pipeline run that triggered this pentest job.
   *
   * @public
   */
  triggerRunId?: string | undefined;
}

/**
 * The outcome of scoping a CI/CD pentest job's code changes, including the decision and the reason for it.
 *
 * @public
 */
export interface ScopeResult {
  /**
   * The scoping decision for the job's code changes.
   *
   * @public
   */
  decision: ScopeDecision | undefined;

  /**
   * A human-readable explanation of the scoping decision.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * Represents a pentest job, which is an execution instance of a pentest. A pentest job progresses through preflight, static analysis, pentest, and finalizing steps.
 *
 * @public
 */
export interface PentestJob {
  /**
   * The unique identifier of the pentest job.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the pentest associated with the job.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The title of the pentest job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * An overview of the pentest job results.
   *
   * @public
   */
  overview?: string | undefined;

  /**
   * The current status of the pentest job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The list of endpoints being tested in the pentest job.
   *
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * The list of actors used during the pentest job.
   *
   * @public
   */
  actors?: Actor[] | undefined;

  /**
   * The list of documents providing context for the pentest job.
   *
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * The list of source code repositories analyzed during the pentest job.
   *
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * The list of paths excluded from the pentest job.
   *
   * @public
   */
  excludePaths?: Endpoint[] | undefined;

  /**
   * The list of domains allowed during the pentest job.
   *
   * @public
   */
  allowedDomains?: Endpoint[] | undefined;

  /**
   * The list of risk types excluded from the pentest job.
   *
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * The list of steps in the pentest job execution.
   *
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * The execution context messages for the pentest job.
   *
   * @public
   */
  executionContext?: ExecutionContext[] | undefined;

  /**
   * The IAM service role used for the pentest job.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the pentest job.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The VPC configuration for the pentest job.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The network traffic configuration for the pentest job.
   *
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * Error information if the pentest job encountered an error.
   *
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * The list of integrated repositories associated with the pentest job.
   *
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * The trust anchors used to validate target endpoint TLS certificates during the pentest job.
   *
   * @public
   */
  trustedCaCertificates?: TrustedCaCertificate[] | undefined;

  /**
   * The client certificates for mutual TLS (mTLS) authentication to target hosts during the pentest job.
   *
   * @public
   */
  clientCertificates?: ClientCertificate[] | undefined;

  /**
   * The code remediation strategy for the pentest job.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * Strategy for cleaning up resources after pentest job completion.
   *
   * @public
   */
  cleanUpStrategy?: CleanUpStrategy | undefined;

  /**
   * A list of managed skills disabled for this pentest job. Valid values include FINDING_PERSONALIZATION and LOGIN_OPTIMIZATION.
   *
   * @public
   */
  disableManagedSkills?: SkillType[] | undefined;

  /**
   * The maximum number of billable task hours allowed for this pentest job. If the cumulative task hours reach this limit, the job is gracefully stopped.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The type of the pentest job. Valid values are FULL, REVALIDATION, and CICD.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * The list of finding identifiers selected for revalidation. Present only when jobType is REVALIDATION.
   *
   * @public
   */
  selectedFindingIds?: string[] | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The URL to view this pentest job's findings report in the console.
   *
   * @public
   */
  reportUrl?: string | undefined;

  /**
   * The scoping outcome for this CI/CD pentest job. Present only for jobs of type CICD.
   *
   * @public
   */
  scopeResult?: ScopeResult | undefined;

  /**
   * The code changes that defined the scope of this CI/CD pentest job. Present only for jobs of type CICD.
   *
   * @public
   */
  scopeChanges?: ScopeChange[] | undefined;

  /**
   * The configuration that enables a pentest to run as part of a CI/CD pipeline, scoped to the code changes in each pipeline run.
   *
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * The category of application a pentest targets.
   *
   * @public
   */
  testScope?: TestScope | undefined;

  /**
   * The date and time the pentest job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetPentestJobs operation.
 *
 * @public
 */
export interface BatchGetPentestJobsOutput {
  /**
   * The list of pentest jobs that were found.
   *
   * @public
   */
  pentestJobs?: PentestJob[] | undefined;

  /**
   * The list of pentest job identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple tasks associated with a pentest job.
 *
 * @public
 */
export interface BatchGetPentestJobTasksInput {
  /**
   * The unique identifier of the agent space that contains the tasks.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The list of task identifiers to retrieve.
   *
   * @public
   */
  taskIds: string[] | undefined;
}

/**
 * Represents an individual security test task within a pentest job. Each task targets a specific risk type or endpoint and executes independently.
 *
 * @public
 */
export interface Task {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the pentest associated with the task.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The unique identifier of the pentest job that contains the task.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the task.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A description of the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The list of categories assigned to the task.
   *
   * @public
   */
  categories?: Category[] | undefined;

  /**
   * The type of security risk the task is testing for.
   *
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * The target endpoint being tested by the task.
   *
   * @public
   */
  targetEndpoint?: Endpoint | undefined;

  /**
   * The current execution status of the task.
   *
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * The location of the task execution logs.
   *
   * @public
   */
  logsLocation?: LogLocation | undefined;

  /**
   * The number of active work hours consumed by the task during execution.
   *
   * @public
   */
  taskHours?: number | undefined;

  /**
   * The date and time the task was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the task was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetPentestJobTasks operation.
 *
 * @public
 */
export interface BatchGetPentestJobTasksOutput {
  /**
   * The list of tasks that were found.
   *
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * The list of task identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple pentests by their IDs.
 *
 * @public
 */
export interface BatchGetPentestsInput {
  /**
   * The list of pentest identifiers to retrieve.
   *
   * @public
   */
  pentestIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the pentests.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output for the BatchGetPentests operation.
 *
 * @public
 */
export interface BatchGetPentestsOutput {
  /**
   * The list of pentests that were found.
   *
   * @public
   */
  pentests?: Pentest[] | undefined;

  /**
   * The list of pentest identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Contains information about a successfully retrieved security requirement.
 *
 * @public
 */
export interface BatchGetSecurityRequirementResult {
  /**
   * The unique identifier of the pack containing the security requirement.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The name of the security requirement.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The security domain the requirement belongs to.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The evaluation criteria used to assess compliance with this requirement.
   *
   * @public
   */
  evaluation: string | undefined;

  /**
   * The recommended remediation steps when the requirement is not met.
   *
   * @public
   */
  remediation?: string | undefined;

  /**
   * The date and time the security requirement was created, in UTC format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the security requirement was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetSecurityRequirementsInput {
  /**
   * The unique identifier of the security requirement pack to retrieve requirements from.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The list of security requirement names to retrieve.
   *
   * @public
   */
  securityRequirementNames: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSecurityRequirementsOutput {
  /**
   * The list of security requirements that were successfully retrieved.
   *
   * @public
   */
  securityRequirements: BatchGetSecurityRequirementResult[] | undefined;

  /**
   * The list of errors for security requirements that failed to be retrieved.
   *
   * @public
   */
  errors: BatchSecurityRequirementError[] | undefined;
}

/**
 * Input for batch retrieving target domains.
 *
 * @public
 */
export interface BatchGetTargetDomainsInput {
  /**
   * The list of target domain identifiers to retrieve.
   *
   * @public
   */
  targetDomainIds: string[] | undefined;
}

/**
 * Contains DNS verification details for a target domain, including the DNS record to create for domain ownership verification.
 *
 * @public
 */
export interface DnsVerification {
  /**
   * The verification token to include in the DNS record value.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The name of the DNS record to create for verification.
   *
   * @public
   */
  dnsRecordName?: string | undefined;

  /**
   * The type of DNS record to create. Currently, only TXT is supported.
   *
   * @public
   */
  dnsRecordType?: DNSRecordType | undefined;
}

/**
 * Contains HTTP route verification details for a target domain, including the route path and token to serve for domain ownership verification.
 *
 * @public
 */
export interface HttpVerification {
  /**
   * The verification token to serve at the specified route path.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The HTTP route path where the verification token must be served.
   *
   * @public
   */
  routePath?: string | undefined;
}

/**
 * Contains the verification details for a target domain, including the verification method and provider-specific details.
 *
 * @public
 */
export interface VerificationDetails {
  /**
   * The verification method used for the target domain.
   *
   * @public
   */
  method?: DomainVerificationMethod | undefined;

  /**
   * The DNS TXT verification details.
   *
   * @public
   */
  dnsTxt?: DnsVerification | undefined;

  /**
   * The HTTP route verification details.
   *
   * @public
   */
  httpRoute?: HttpVerification | undefined;
}

/**
 * Represents a target domain registered for penetration testing. A target domain must be verified through DNS TXT or HTTP route verification before it can be used in pentests.
 *
 * @public
 */
export interface TargetDomain {
  /**
   * The unique identifier of the target domain.
   *
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * The domain name of the target domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current verification status of the target domain.
   *
   * @public
   */
  verificationStatus?: TargetDomainStatus | undefined;

  /**
   * The reason for the current target domain verification status.
   *
   * @public
   */
  verificationStatusReason?: string | undefined;

  /**
   * The verification details for the target domain.
   *
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * The date and time the target domain was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the target domain was verified, in UTC format.
   *
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * Output for the BatchGetTargetDomains operation.
 *
 * @public
 */
export interface BatchGetTargetDomainsOutput {
  /**
   * The list of target domains that were found.
   *
   * @public
   */
  targetDomains?: TargetDomain[] | undefined;

  /**
   * The list of target domain identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for BatchGetThreatModelJobs operation.
 *
 * @public
 */
export interface BatchGetThreatModelJobsInput {
  /**
   * The list of threat model job identifiers to retrieve.
   *
   * @public
   */
  threatModelJobIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the threat model jobs.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Represents a threat model job, which is an execution instance of a threat model.
 *
 * @public
 */
export interface ThreatModelJob {
  /**
   * The unique identifier of the threat model job.
   *
   * @public
   */
  threatModelJobId?: string | undefined;

  /**
   * The unique identifier of the threat model associated with the job.
   *
   * @public
   */
  threatModelId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the threat model job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the threat model job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the threat model job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The date and time the threat model job execution started, in UTC format.
   *
   * @public
   */
  executionStartTime?: Date | undefined;

  /**
   * The date and time the threat model job execution ended, in UTC format.
   *
   * @public
   */
  executionEndTime?: Date | undefined;

  /**
   * The list of source code repositories used for threat modeling.
   *
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * The list of integrated repositories used for threat modeling.
   *
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * The list of documents used for threat modeling.
   *
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * The scoped documents for the agent to focus on during threat modeling.
   *
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * Error information if the threat model job encountered an error.
   *
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * The system overview generated during threat modeling.
   *
   * @public
   */
  systemOverview?: string | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * Output for the BatchGetThreatModelJobs operation.
 *
 * @public
 */
export interface BatchGetThreatModelJobsOutput {
  /**
   * The list of threat model jobs that were found.
   *
   * @public
   */
  threatModelJobs?: ThreatModelJob[] | undefined;

  /**
   * The list of threat model job identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple tasks associated with a threat model job.
 *
 * @public
 */
export interface BatchGetThreatModelJobTasksInput {
  /**
   * The unique identifier of the agent space that contains the tasks.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The list of task identifiers to retrieve.
   *
   * @public
   */
  threatModelJobTaskIds: string[] | undefined;
}

/**
 * Represents an individual task within a threat model job.
 *
 * @public
 */
export interface ThreatModelJobTask {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the threat model associated with the task.
   *
   * @public
   */
  threatModelId?: string | undefined;

  /**
   * The unique identifier of the threat model job that contains the task.
   *
   * @public
   */
  threatModelJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the task.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * A description of the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current execution status of the task.
   *
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * The location of the task execution logs.
   *
   * @public
   */
  logsLocation?: LogLocation | undefined;

  /**
   * The date and time the task was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the task was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetThreatModelJobTasks operation.
 *
 * @public
 */
export interface BatchGetThreatModelJobTasksOutput {
  /**
   * The list of threat model job tasks that were found.
   *
   * @public
   */
  threatModelJobTasks?: ThreatModelJobTask[] | undefined;

  /**
   * The list of task identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple threat models by their IDs.
 *
 * @public
 */
export interface BatchGetThreatModelsInput {
  /**
   * The list of threat model identifiers to retrieve.
   *
   * @public
   */
  threatModelIds: string[] | undefined;

  /**
   * The unique identifier of the agent space that contains the threat models.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Represents a threat model configuration that defines the parameters for automated threat analysis, including target assets and logging configuration.
 *
 * @public
 */
export interface ThreatModel {
  /**
   * The unique identifier of the threat model.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the threat model.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The title of the threat model.
   *
   * @public
   */
  title: string | undefined;

  /**
   * A description of the application or system being threat modeled.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The assets included in the threat model.
   *
   * @public
   */
  assets: Assets | undefined;

  /**
   * The scoped documents for the agent to focus on during threat modeling.
   *
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * The IAM service role used for the threat model.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the threat model.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The date and time the threat model was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetThreatModels operation.
 *
 * @public
 */
export interface BatchGetThreatModelsOutput {
  /**
   * The list of threat models that were found.
   *
   * @public
   */
  threatModels?: ThreatModel[] | undefined;

  /**
   * The list of threat model identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Input for retrieving multiple threats.
 *
 * @public
 */
export interface BatchGetThreatsInput {
  /**
   * The list of threat identifiers to retrieve.
   *
   * @public
   */
  threatIds: string[] | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * DFD element that a threat is anchored to.
 *
 * @public
 */
export interface ThreatAnchorShape {
  /**
   * The kind of DFD element.
   *
   * @public
   */
  kind?: string | undefined;

  /**
   * The identifier of the DFD element.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The package identifier containing the DFD element.
   *
   * @public
   */
  packageId?: string | undefined;
}

/**
 * Source code file supporting a threat.
 *
 * @public
 */
export interface ThreatEvidenceShape {
  /**
   * The package identifier containing the evidence file.
   *
   * @public
   */
  packageId?: string | undefined;

  /**
   * The file path of the evidence.
   *
   * @public
   */
  path?: string | undefined;
}

/**
 * Represents a threat identified during threat modeling.
 *
 * @public
 */
export interface Threat {
  /**
   * The unique identifier of the threat.
   *
   * @public
   */
  threatId?: string | undefined;

  /**
   * The unique identifier of the threat model job that produced the threat.
   *
   * @public
   */
  threatJobId?: string | undefined;

  /**
   * A short title summarizing the threat.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The natural-language threat statement.
   *
   * @public
   */
  statement?: string | undefined;

  /**
   * The severity level of the threat.
   *
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * The current status of the threat.
   *
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * Optional customer comment on the threat.
   *
   * @public
   */
  comments?: string | undefined;

  /**
   * The actor or origin of the threat.
   *
   * @public
   */
  threatSource?: string | undefined;

  /**
   * The conditions required for the threat to be exploitable.
   *
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * What the threat source can do.
   *
   * @public
   */
  threatAction?: string | undefined;

  /**
   * The direct consequence of the threat action.
   *
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * The security goals affected by the threat.
   *
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * The specific assets affected by the threat.
   *
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * The DFD element this threat is anchored to.
   *
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * The source code files supporting the threat.
   *
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * The STRIDE categories applicable to this threat.
   *
   * @public
   */
  stride?: StrideCategory[] | undefined;

  /**
   * The recommended mitigation guidance for this threat.
   *
   * @public
   */
  recommendation?: string | undefined;

  /**
   * Who created this threat.
   *
   * @public
   */
  createdBy?: ThreatActor | undefined;

  /**
   * Who last updated this threat.
   *
   * @public
   */
  updatedBy?: ThreatActor | undefined;

  /**
   * The date and time the threat was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the BatchGetThreats operation.
 *
 * @public
 */
export interface BatchGetThreatsOutput {
  /**
   * The list of threats that were found.
   *
   * @public
   */
  threats?: Threat[] | undefined;

  /**
   * The list of threat identifiers that were not found.
   *
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * Contains the details for updating an existing security requirement within a pack. The name is an immutable identifier used to locate the requirement and cannot be modified.
 *
 * @public
 */
export interface UpdateSecurityRequirementEntry {
  /**
   * The name of the security requirement to update. This is an immutable identifier and cannot be changed once the requirement is created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The updated description of the security requirement.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated security domain the requirement belongs to.
   *
   * @public
   */
  domain?: string | undefined;

  /**
   * The updated evaluation criteria used to assess compliance with this requirement.
   *
   * @public
   */
  evaluation?: string | undefined;

  /**
   * The updated remediation steps when the requirement is not met.
   *
   * @public
   */
  remediation?: string | undefined;
}

/**
 * @public
 */
export interface BatchUpdateSecurityRequirementsInput {
  /**
   * The unique identifier of the security requirement pack containing the requirements to update.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The list of security requirement updates to apply.
   *
   * @public
   */
  securityRequirements: UpdateSecurityRequirementEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateSecurityRequirementsOutput {
  /**
   * The list of security requirement names that were successfully updated.
   *
   * @public
   */
  updatedSecurityRequirementNames: string[] | undefined;

  /**
   * The list of errors for security requirements that failed to be updated.
   *
   * @public
   */
  errors: BatchSecurityRequirementError[] | undefined;
}

/**
 * Connection details for a self-managed Bitbucket Data Center integration.
 *
 * @public
 */
export interface BitbucketDataCenterIntegrationInput {
  /**
   * The HTTPS URL of your Bitbucket Data Center instance, for example `https://bitbucket.example.com`.
   *
   * @public
   */
  targetUrl: string | undefined;

  /**
   * The OAuth 2.0 authorization code returned to your redirect URL after the connection is authorized.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The CSRF state value returned by `InitiateProviderRegistration` and echoed back on the authorization redirect.
   *
   * @public
   */
  state: string | undefined;
}

/**
 * The configuration for creating a Bitbucket integration.
 *
 * @public
 */
export interface BitbucketIntegrationInput {
  /**
   * The Atlassian installation identifier, available from the Atlassian administration console.
   *
   * @public
   */
  installationId: string | undefined;

  /**
   * The Bitbucket workspace slug that identifies the workspace to integrate, for example acme-corp.
   *
   * @public
   */
  workspace: string | undefined;

  /**
   * The OAuth 2.0 authorization code returned from the consent redirect.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The CSRF state token echoed back from the OAuth redirect.
   *
   * @public
   */
  state: string | undefined;
}

/**
 * Metadata for an integrated Bitbucket repository.
 *
 * @public
 */
export interface BitbucketRepositoryMetadata {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Provider Id of the resource e.g. GitHub repository id, etc.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The workspace slug that owns the repository.
   *
   * @public
   */
  workspace: string | undefined;

  /**
   * Defines the visibility level of provider resources. PRIVATE indicates restricted access, while PUBLIC indicates open access.
   *
   * @public
   */
  accessType?: AccessType | undefined;
}

/**
 * A Bitbucket repository integrated as a resource.
 *
 * @public
 */
export interface BitbucketRepositoryResource {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The workspace slug that owns the repository.
   *
   * @public
   */
  workspace: string | undefined;
}

/**
 * Capabilities for an integrated Bitbucket repository.
 *
 * @public
 */
export interface BitbucketResourceCapabilities {
  /**
   * The filter groups that control which pull request events start an automatic code review when `leaveComments` is enabled. A review starts when any group matches. If you omit this, a review starts on `PULL_REQUEST_READY_FOR_REVIEW` events.
   *
   * @public
   */
  triggerFilterGroups?: TriggerFilterGroup[] | undefined;

  /**
   * Whether to post code review comments on pull requests.
   *
   * @public
   */
  leaveComments?: boolean | undefined;

  /**
   * Whether to create pull requests with automated fixes.
   *
   * @public
   */
  remediateCode?: boolean | undefined;
}

/**
 * Contains summary information about a code review job.
 *
 * @public
 */
export interface CodeReviewJobSummary {
  /**
   * The unique identifier of the code review job.
   *
   * @public
   */
  codeReviewJobId: string | undefined;

  /**
   * The unique identifier of the code review associated with the job.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The title of the code review job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the code review job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the code review job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Contains summary information about a code review job task.
 *
 * @public
 */
export interface CodeReviewJobTaskSummary {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the code review associated with the task.
   *
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * The unique identifier of the code review job that contains the task.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the task.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The type of security risk the task is testing for.
   *
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * The current execution status of the task.
   *
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * The date and time the task was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the task was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Contains summary information about a code review.
 *
 * @public
 */
export interface CodeReviewSummary {
  /**
   * The unique identifier of the code review.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the code review.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The title of the code review.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The date and time the code review was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Metadata for an integrated Confluence document.
 *
 * @public
 */
export interface ConfluenceDocumentMetadata {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Provider Id of the resource e.g. GitHub repository id, etc.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The Confluence space key containing the document.
   *
   * @public
   */
  spaceKey: string | undefined;

  /**
   * The Confluence page identifier.
   *
   * @public
   */
  pageId: string | undefined;

  /**
   * The display title of the Confluence page.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The display title of the Confluence space.
   *
   * @public
   */
  spaceTitle?: string | undefined;
}

/**
 * A Confluence document (page) integrated as a resource.
 *
 * @public
 */
export interface ConfluenceDocumentResource {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Confluence space key containing the document.
   *
   * @public
   */
  spaceKey: string | undefined;

  /**
   * The Confluence page identifier.
   *
   * @public
   */
  pageId: string | undefined;

  /**
   * The display title of the Confluence page.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The display title of the Confluence space.
   *
   * @public
   */
  spaceTitle?: string | undefined;
}

/**
 * The configuration for creating a Confluence integration.
 *
 * @public
 */
export interface ConfluenceIntegrationInput {
  /**
   * The Atlassian installation identifier, available from the Atlassian administration console.
   *
   * @public
   */
  installationId: string | undefined;

  /**
   * The OAuth 2.0 authorization code returned from the consent redirect.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The CSRF state token echoed back from the OAuth redirect.
   *
   * @public
   */
  state: string | undefined;

  /**
   * The Confluence Cloud site URL, for example https://mysite.atlassian.net.
   *
   * @public
   */
  siteUrl: string | undefined;
}

/**
 * Capabilities for an integrated Confluence space.
 *
 * @public
 */
export interface ConfluenceResourceCapabilities {
  /**
   * Whether to fetch documents from this space.
   *
   * @public
   */
  fetchDocument?: boolean | undefined;

  /**
   * Whether to create documents in this space.
   *
   * @public
   */
  createDocument?: boolean | undefined;

  /**
   * Whether to update documents in this space.
   *
   * @public
   */
  updateDocument?: boolean | undefined;
}

/**
 * Input for creating a new code review.
 *
 * @public
 */
export interface CreateCodeReviewInput {
  /**
   * The title of the code review.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the agent space to create the code review in.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The assets to include in the code review, such as documents and source code.
   *
   * @public
   */
  assets: Assets | undefined;

  /**
   * The IAM service role to use for the code review.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the code review.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The code remediation strategy for the code review. Valid values are AUTOMATIC and DISABLED.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The validation mode for the code review. Valid values are SIMULATED and DISABLED.
   *
   * @public
   */
  validationMode?: ValidationMode | undefined;

  /**
   * The maximum number of billable task hours allowed for jobs started from this code review. Must be a positive number. If not set, jobs run to completion with no budget cap.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;
}

/**
 * Output for the CreateCodeReview operation.
 *
 * @public
 */
export interface CreateCodeReviewOutput {
  /**
   * The unique identifier of the created code review.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The title of the code review.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The date and time the code review was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The assets included in the code review.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The IAM service role used for the code review.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the code review.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The unique identifier of the agent space that contains the code review.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The code remediation strategy for the code review.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * The validation mode for the code review.
   *
   * @public
   */
  validationMode?: ValidationMode | undefined;

  /**
   * The maximum number of billable task hours configured for jobs started from this code review. Null if no budget cap is set.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;
}

/**
 * The input required to create a GitHub integration, including the OAuth authorization code and CSRF state.
 *
 * @public
 */
export interface GitHubIntegrationInput {
  /**
   * The OAuth authorization code received from GitHub.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The CSRF state token for validating the OAuth flow.
   *
   * @public
   */
  state: string | undefined;

  /**
   * The name of the GitHub organization to integrate with.
   *
   * @public
   */
  organizationName?: string | undefined;

  /**
   * The HTTPS URL of a self-hosted GitHub Enterprise Server instance. Omit this value for GitHub.com.
   *
   * @public
   */
  targetUrl?: string | undefined;

  /**
   * The installation identifier provided by GitHub Enterprise Server on the install callback. Required for GitHub Enterprise Server integrations and ignored for GitHub.com.
   *
   * @public
   */
  installationId?: string | undefined;
}

/**
 * The configuration for creating a GitLab integration.
 *
 * @public
 */
export interface GitLabIntegrationInput {
  /**
   * The GitLab access token used to authenticate. This can be a personal access token or a group access token.
   *
   * @public
   */
  accessToken: string | undefined;

  /**
   * The HTTPS URL of a self-managed GitLab instance. Omit this value for GitLab SaaS (gitlab.com).
   *
   * @public
   */
  targetUrl?: string | undefined;

  /**
   * The type of GitLab access token provided in accessToken.
   *
   * @public
   */
  tokenType: GitLabTokenType | undefined;

  /**
   * The identifier of the GitLab group. Required when tokenType is group and ignored for personal tokens.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * The configuration for creating a Jira integration.
 *
 * @public
 */
export interface JiraIntegrationInput {
  /**
   * The Atlassian installation identifier, available from the Atlassian administration console.
   *
   * @public
   */
  installationId: string | undefined;

  /**
   * The OAuth 2.0 authorization code returned from the consent redirect.
   *
   * @public
   */
  code: string | undefined;

  /**
   * The CSRF state token echoed back from the OAuth redirect.
   *
   * @public
   */
  state: string | undefined;

  /**
   * The Jira Cloud site URL, for example https://mysite.atlassian.net.
   *
   * @public
   */
  siteUrl: string | undefined;
}

/**
 * The provider-specific input for creating an integration. This is a union type that contains provider-specific configuration.
 *
 * @public
 */
export type ProviderInput =
  | ProviderInput.AzureDevOpsMember
  | ProviderInput.BitbucketMember
  | ProviderInput.BitbucketDataCenterMember
  | ProviderInput.ConfluenceMember
  | ProviderInput.GithubMember
  | ProviderInput.GitlabMember
  | ProviderInput.JiraMember
  | ProviderInput.$UnknownMember;

/**
 * @public
 */
export namespace ProviderInput {
  /**
   * The GitHub-specific input for creating an integration.
   *
   * @public
   */
  export interface GithubMember {
    github: GitHubIntegrationInput;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    bitbucketDataCenter?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a GitLab integration.
   *
   * @public
   */
  export interface GitlabMember {
    github?: never;
    gitlab: GitLabIntegrationInput;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    bitbucketDataCenter?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Bitbucket integration.
   *
   * @public
   */
  export interface BitbucketMember {
    github?: never;
    gitlab?: never;
    bitbucket: BitbucketIntegrationInput;
    confluence?: never;
    azureDevOps?: never;
    bitbucketDataCenter?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Confluence integration.
   *
   * @public
   */
  export interface ConfluenceMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence: ConfluenceIntegrationInput;
    azureDevOps?: never;
    bitbucketDataCenter?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The Azure DevOps-specific input for creating an integration.
   *
   * @public
   */
  export interface AzureDevOpsMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps: AzureDevOpsIntegrationInput;
    bitbucketDataCenter?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The Bitbucket Data Center-specific input for creating an integration.
   *
   * @public
   */
  export interface BitbucketDataCenterMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    bitbucketDataCenter: BitbucketDataCenterIntegrationInput;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Jira integration.
   *
   * @public
   */
  export interface JiraMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    bitbucketDataCenter?: never;
    jira: JiraIntegrationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    bitbucketDataCenter?: never;
    jira?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubIntegrationInput) => T;
    gitlab: (value: GitLabIntegrationInput) => T;
    bitbucket: (value: BitbucketIntegrationInput) => T;
    confluence: (value: ConfluenceIntegrationInput) => T;
    azureDevOps: (value: AzureDevOpsIntegrationInput) => T;
    bitbucketDataCenter: (value: BitbucketDataCenterIntegrationInput) => T;
    jira: (value: JiraIntegrationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIntegrationInput {
  /**
   * The integration provider.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The provider-specific input required to create the integration.
   *
   * @public
   */
  input: ProviderInput | undefined;

  /**
   * The display name for the integration.
   *
   * @public
   */
  integrationDisplayName: string | undefined;

  /**
   * The identifier of the AWS KMS key to use for encrypting data associated with the integration.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The tags to associate with the integration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The name of an active private connection used to reach a self-hosted provider instance over private networking. Specify this when the instance is not publicly reachable.
   *
   * @public
   */
  privateConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationOutput {
  /**
   * The unique identifier of the created integration.
   *
   * @public
   */
  integrationId: string | undefined;
}

/**
 * The configuration for a user membership, including the role assigned to the user within the agent space.
 *
 * @public
 */
export interface UserConfig {
  /**
   * The role assigned to the user. Currently, only MEMBER is supported.
   *
   * @public
   */
  role?: UserRole | undefined;
}

/**
 * The configuration for a membership. This is a union type that contains member-type-specific configuration.
 *
 * @public
 */
export type MembershipConfig =
  | MembershipConfig.UserMember
  | MembershipConfig.$UnknownMember;

/**
 * @public
 */
export namespace MembershipConfig {
  /**
   * The user configuration for the membership.
   *
   * @public
   */
  export interface UserMember {
    user: UserConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: UserConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Request structure for adding a single member to an agent space.
 *
 * @public
 */
export interface CreateMembershipRequest {
  /**
   * The unique identifier of the application that contains the agent space.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the agent space to grant access to.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier for the membership.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The type of member. Currently, only USER is supported.
   *
   * @public
   */
  memberType: MembershipType | undefined;

  /**
   * The configuration for the membership, such as the user role.
   *
   * @public
   */
  config?: MembershipConfig | undefined;
}

/**
 * Response structure for adding a single member to an agent space.
 *
 * @public
 */
export interface CreateMembershipResponse {}

/**
 * Input for creating a new pentest.
 *
 * @public
 */
export interface CreatePentestInput {
  /**
   * The title of the pentest.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the agent space to create the pentest in.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The assets to include in the pentest, such as endpoints, actors, documents, and source code.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The list of risk types to exclude from the pentest.
   *
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * The IAM service role to use for the pentest.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the pentest.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The VPC configuration for the pentest.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The network traffic configuration for the pentest, including custom headers and traffic rules.
   *
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * The code remediation strategy for the pentest. Valid values are AUTOMATIC and DISABLED.
   *
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * A list of managed skills to disable for this pentest. Valid values include FINDING_PERSONALIZATION and LOGIN_OPTIMIZATION.
   *
   * @public
   */
  disableManagedSkills?: SkillType[] | undefined;

  /**
   * The maximum number of billable task hours allowed for jobs started from this pentest. Must be a positive number. If not set, jobs run to completion with no budget cap.
   *
   * @public
   */
  maxTaskHours?: number | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * The CI/CD pentesting configuration to apply to the pentest.
   *
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * The category of application a pentest targets.
   *
   * @public
   */
  testScope?: TestScope | undefined;
}

/**
 * Output for the CreatePentest operation.
 *
 * @public
 */
export interface CreatePentestOutput {
  /**
   * The unique identifier of the created pentest.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The title of the pentest.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The date and time the pentest was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The assets included in the pentest.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The list of risk types excluded from the pentest.
   *
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * The IAM service role used for the pentest.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the pentest.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The unique identifier of the agent space that contains the pentest.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;

  /**
   * The report-generation filters applied when the report is exported.
   *
   * @public
   */
  reportFilters?: ReportFilters | undefined;

  /**
   * The CI/CD pentesting configuration applied to the pentest.
   *
   * @public
   */
  cicdConfiguration?: CiCdConfiguration | undefined;

  /**
   * The category of application a pentest targets.
   *
   * @public
   */
  testScope?: TestScope | undefined;
}

/**
 * The configuration for a self-managed private connection.
 *
 * @public
 */
export interface SelfManagedInput {
  /**
   * The identifier or ARN of the resource configuration.
   *
   * @public
   */
  resourceConfigurationId: string | undefined;

  /**
   * The certificate for the private connection.
   *
   * @public
   */
  certificate?: string | undefined;
}

/**
 * The configuration for a service-managed private connection.
 *
 * @public
 */
export interface ServiceManagedInput {
  /**
   * The IP address or DNS name of the target resource.
   *
   * @public
   */
  hostAddress: string | undefined;

  /**
   * The VPC to create the service-managed resource gateway in.
   *
   * @public
   */
  vpcId: string | undefined;

  /**
   * The subnets that the service-managed resource gateway spans.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The security groups to attach to the service-managed resource gateway.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The IP address type of the service-managed resource gateway.
   *
   * @public
   */
  ipAddressType?: IpAddressType | undefined;

  /**
   * The number of IPv4 addresses in each elastic network interface for the service-managed resource gateway.
   *
   * @public
   */
  ipv4AddressesPerEni?: number | undefined;

  /**
   * The TCP port ranges that a consumer can use to access the resource.
   *
   * @public
   */
  portRanges?: string[] | undefined;

  /**
   * The certificate for the private connection.
   *
   * @public
   */
  certificate?: string | undefined;

  /**
   * The DNS resolution mode for the resource gateway. Defaults to PUBLIC when not set.
   *
   * @public
   */
  dnsResolution?: ResourceConfigDnsResolution | undefined;
}

/**
 * The configuration for a private connection. Specify either a service-managed or a self-managed mode.
 *
 * @public
 */
export type PrivateConnectionMode =
  | PrivateConnectionMode.SelfManagedMember
  | PrivateConnectionMode.ServiceManagedMember
  | PrivateConnectionMode.$UnknownMember;

/**
 * @public
 */
export namespace PrivateConnectionMode {
  /**
   * The configuration for a service-managed private connection, where the service manages the resource gateway lifecycle.
   *
   * @public
   */
  export interface ServiceManagedMember {
    serviceManaged: ServiceManagedInput;
    selfManaged?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a self-managed private connection, where you manage your own resource configuration.
   *
   * @public
   */
  export interface SelfManagedMember {
    serviceManaged?: never;
    selfManaged: SelfManagedInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    serviceManaged?: never;
    selfManaged?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    serviceManaged: (value: ServiceManagedInput) => T;
    selfManaged: (value: SelfManagedInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePrivateConnectionInput {
  /**
   * A unique name for the private connection within your account.
   *
   * @public
   */
  privateConnectionName: string | undefined;

  /**
   * The configuration for the private connection. Specify either a service-managed or a self-managed mode.
   *
   * @public
   */
  mode: PrivateConnectionMode | undefined;

  /**
   * The tags to attach to the private connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePrivateConnectionOutput {
  /**
   * The name of the private connection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the private connection, indicating whether it is service-managed or self-managed.
   *
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The current status of the private connection.
   *
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource gateway.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The IP address or DNS name of the target resource.
   *
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * The identifier of the VPC the resource gateway is created in.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The date and time the connection's certificate expires, in UTC format.
   *
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * The DNS resolution mode for the resource gateway.
   *
   * @public
   */
  dnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * A message describing why the private connection entered a failed state, if applicable.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The tags attached to the private connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSecurityRequirementPackInput {
  /**
   * The name of the security requirement pack.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement pack.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the pack. Defaults to ENABLED if not provided.
   *
   * @public
   */
  status?: SecurityRequirementPackStatus | undefined;

  /**
   * The identifier of the AWS KMS key used to encrypt pack contents.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The tags to associate with the security requirement pack.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateSecurityRequirementPackOutput {
  /**
   * The unique identifier of the created security requirement pack.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The status of the created security requirement pack.
   *
   * @public
   */
  status: SecurityRequirementPackStatus | undefined;

  /**
   * The identifier of the AWS KMS key used to encrypt pack contents.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Input for creating a new target domain.
 *
 * @public
 */
export interface CreateTargetDomainInput {
  /**
   * The domain name to register as a target domain.
   *
   * @public
   */
  targetDomainName: string | undefined;

  /**
   * The method to use for verifying domain ownership. Valid values are DNS_TXT, HTTP_ROUTE, and PRIVATE_VPC.
   *
   * @public
   */
  verificationMethod: DomainVerificationMethod | undefined;

  /**
   * The tags to associate with the target domain.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Output for the CreateTargetDomain operation.
 *
 * @public
 */
export interface CreateTargetDomainOutput {
  /**
   * The unique identifier of the created target domain.
   *
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * The domain name of the target domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current verification status of the target domain.
   *
   * @public
   */
  verificationStatus: TargetDomainStatus | undefined;

  /**
   * The reason for the current target domain verification status.
   *
   * @public
   */
  verificationStatusReason?: string | undefined;

  /**
   * The verification details for the target domain, including the verification token and instructions.
   *
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * The date and time the target domain was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the target domain was verified, in UTC format.
   *
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * Input for creating a new threat.
 *
 * @public
 */
export interface CreateThreatInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the threat model job the threat belongs to.
   *
   * @public
   */
  threatJobId: string | undefined;

  /**
   * A short title summarizing the threat.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The natural-language threat statement.
   *
   * @public
   */
  statement?: string | undefined;

  /**
   * The severity level of the threat.
   *
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * Optional customer comment on the threat.
   *
   * @public
   */
  comments?: string | undefined;

  /**
   * The STRIDE categories applicable to this threat.
   *
   * @public
   */
  stride?: StrideCategory[] | undefined;

  /**
   * The actor or origin of the threat.
   *
   * @public
   */
  threatSource?: string | undefined;

  /**
   * The conditions required for the threat to be exploitable.
   *
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * What the threat source can do.
   *
   * @public
   */
  threatAction?: string | undefined;

  /**
   * The direct consequence of the threat action.
   *
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * The security goals affected by the threat.
   *
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * The specific assets affected by the threat.
   *
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * The DFD element this threat is anchored to.
   *
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * The source code files supporting the threat.
   *
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * The recommended mitigation guidance for this threat.
   *
   * @public
   */
  recommendation?: string | undefined;
}

/**
 * Output for the CreateThreat operation.
 *
 * @public
 */
export interface CreateThreatOutput {
  /**
   * The unique identifier of the created threat.
   *
   * @public
   */
  threatId: string | undefined;

  /**
   * The unique identifier of the threat model job the threat belongs to.
   *
   * @public
   */
  threatJobId: string | undefined;

  /**
   * A short title summarizing the threat.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The natural-language threat statement.
   *
   * @public
   */
  statement?: string | undefined;

  /**
   * The severity level of the threat.
   *
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * The current status of the threat.
   *
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * Optional customer comment on the threat.
   *
   * @public
   */
  comments?: string | undefined;

  /**
   * The STRIDE categories applicable to this threat.
   *
   * @public
   */
  stride?: StrideCategory[] | undefined;

  /**
   * The actor or origin of the threat.
   *
   * @public
   */
  threatSource?: string | undefined;

  /**
   * The conditions required for the threat to be exploitable.
   *
   * @public
   */
  prerequisites?: string | undefined;

  /**
   * What the threat source can do.
   *
   * @public
   */
  threatAction?: string | undefined;

  /**
   * The direct consequence of the threat action.
   *
   * @public
   */
  threatImpact?: string | undefined;

  /**
   * The security goals affected by the threat.
   *
   * @public
   */
  impactedGoal?: string[] | undefined;

  /**
   * The specific assets affected by the threat.
   *
   * @public
   */
  impactedAssets?: string[] | undefined;

  /**
   * The DFD element this threat is anchored to.
   *
   * @public
   */
  anchor?: ThreatAnchorShape | undefined;

  /**
   * The source code files supporting the threat.
   *
   * @public
   */
  evidence?: ThreatEvidenceShape[] | undefined;

  /**
   * The recommended mitigation guidance for this threat.
   *
   * @public
   */
  recommendation?: string | undefined;

  /**
   * Who created this threat.
   *
   * @public
   */
  createdBy?: ThreatActor | undefined;

  /**
   * Who last updated this threat.
   *
   * @public
   */
  updatedBy?: ThreatActor | undefined;

  /**
   * The date and time the threat was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Input for creating a new threat model.
 *
 * @public
 */
export interface CreateThreatModelInput {
  /**
   * The title of the threat model.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The unique identifier of the agent space to create the threat model in.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A description of the application or system being threat modeled.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The assets to include in the threat model.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The scoped documents for the agent to focus on during threat modeling.
   *
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * The IAM service role to use for the threat model.
   *
   * @public
   */
  serviceRole: string | undefined;

  /**
   * The CloudWatch Logs configuration for the threat model.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * Output for the CreateThreatModel operation.
 *
 * @public
 */
export interface CreateThreatModelOutput {
  /**
   * The unique identifier of the created threat model.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The title of the threat model.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The unique identifier of the agent space that contains the threat model.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * A description of the application or system being threat modeled.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The assets included in the threat model.
   *
   * @public
   */
  assets?: Assets | undefined;

  /**
   * The scoped documents for the agent to focus on during threat modeling.
   *
   * @public
   */
  scopeDocs?: DocumentInfo[] | undefined;

  /**
   * The IAM service role used for the threat model.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The CloudWatch Logs configuration for the threat model.
   *
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * The date and time the threat model was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The destination for publishing scan reports to an integrated document provider.
   *
   * @public
   */
  reportDestination?: ReportDestination | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactInput {
  /**
   * The unique identifier of the agent space that contains the artifact.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the artifact to delete.
   *
   * @public
   */
  artifactId: string | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactOutput {}

/**
 * @public
 */
export interface DeleteIntegrationInput {
  /**
   * The unique identifier of the integration to delete.
   *
   * @public
   */
  integrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationOutput {}

/**
 * Request structure for removing a single member from an agent space.
 *
 * @public
 */
export interface DeleteMembershipRequest {
  /**
   * The unique identifier of the application that contains the agent space.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the agent space to revoke access from.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the membership to delete.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The type of member to remove.
   *
   * @public
   */
  memberType?: MembershipType | undefined;
}

/**
 * Response structure for removing a single member from an agent space.
 *
 * @public
 */
export interface DeleteMembershipResponse {}

/**
 * @public
 */
export interface DeletePrivateConnectionInput {
  /**
   * The name of the private connection to delete.
   *
   * @public
   */
  privateConnectionName: string | undefined;
}

/**
 * @public
 */
export interface DeletePrivateConnectionOutput {
  /**
   * The name of the private connection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the private connection, indicating whether it is service-managed or self-managed.
   *
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The current status of the private connection.
   *
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource gateway.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The IP address or DNS name of the target resource.
   *
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * The identifier of the VPC the resource gateway is created in.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The date and time the connection's certificate expires, in UTC format.
   *
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * The DNS resolution mode for the resource gateway.
   *
   * @public
   */
  dnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * A message describing why the private connection entered a failed state, if applicable.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The tags attached to the private connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityRequirementPackInput {
  /**
   * The unique identifier of the security requirement pack to delete.
   *
   * @public
   */
  packId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityRequirementPackOutput {}

/**
 * Input for deleting a target domain.
 *
 * @public
 */
export interface DeleteTargetDomainInput {
  /**
   * The unique identifier of the target domain to delete.
   *
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * Output for the DeleteTargetDomain operation.
 *
 * @public
 */
export interface DeleteTargetDomainOutput {
  /**
   * The unique identifier of the deleted target domain.
   *
   * @public
   */
  targetDomainId?: string | undefined;
}

/**
 * @public
 */
export interface DescribePrivateConnectionInput {
  /**
   * The name of the private connection to describe.
   *
   * @public
   */
  privateConnectionName: string | undefined;
}

/**
 * @public
 */
export interface DescribePrivateConnectionOutput {
  /**
   * The name of the private connection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the private connection, indicating whether it is service-managed or self-managed.
   *
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The current status of the private connection.
   *
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource gateway.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The IP address or DNS name of the target resource.
   *
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * The identifier of the VPC the resource gateway is created in.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The date and time the connection's certificate expires, in UTC format.
   *
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * The DNS resolution mode for the resource gateway.
   *
   * @public
   */
  dnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * A message describing why the private connection entered a failed state, if applicable.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The tags attached to the private connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Source of the diff for a differential code scan.
 *
 * @public
 */
export type DiffSource =
  | DiffSource.S3UriMember
  | DiffSource.$UnknownMember;

/**
 * @public
 */
export namespace DiffSource {
  /**
   * S3 URI pointing to a unified diff file. The file must be in standard unified diff format and stored in an S3 bucket connected to your Agent Space.
   *
   * @public
   */
  export interface S3UriMember {
    s3Uri: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Uri?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Uri: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents an endpoint discovered during a pentest job.
 *
 * @public
 */
export interface DiscoveredEndpoint {
  /**
   * The URI of the discovered endpoint.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * The unique identifier of the pentest job that discovered the endpoint.
   *
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * The unique identifier of the task that discovered the endpoint.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the agent space associated with the discovered endpoint.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The evidence that led to the discovery of the endpoint.
   *
   * @public
   */
  evidence?: string | undefined;

  /**
   * The HTTP operation associated with the discovered endpoint.
   *
   * @public
   */
  operation?: string | undefined;

  /**
   * A description of the discovered endpoint.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Contains summary information about a security finding.
 *
 * @public
 */
export interface FindingSummary {
  /**
   * The unique identifier of the finding.
   *
   * @public
   */
  findingId: string | undefined;

  /**
   * The unique identifier of the agent space associated with the finding.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the pentest associated with the finding.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The unique identifier of the pentest job that produced the finding.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the code review associated with the finding.
   *
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * The unique identifier of the code review job that produced the finding.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The name of the finding.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The current status of the finding.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * The type of security risk identified by the finding.
   *
   * @public
   */
  riskType?: string | undefined;

  /**
   * The risk level of the finding.
   *
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * The confidence level of the finding.
   *
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * The simulated validation status of the finding.
   *
   * @public
   */
  validationStatus?: ValidationStatus | undefined;

  /**
   * The date and time the finding was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the finding was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetArtifactInput {
  /**
   * The unique identifier of the agent space that contains the artifact.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the artifact to retrieve.
   *
   * @public
   */
  artifactId: string | undefined;
}

/**
 * @public
 */
export interface GetArtifactOutput {
  /**
   * The unique identifier of the agent space that contains the artifact.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the artifact.
   *
   * @public
   */
  artifactId: string | undefined;

  /**
   * The artifact content and type.
   *
   * @public
   */
  artifact: Artifact | undefined;

  /**
   * The file name of the artifact.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The date and time the artifact was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIntegrationInput {
  /**
   * The unique identifier of the integration to retrieve.
   *
   * @public
   */
  integrationId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationOutput {
  /**
   * The unique identifier of the integration.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The installation identifier from the integration provider.
   *
   * @public
   */
  installationId: string | undefined;

  /**
   * The integration provider.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The type of the integration provider.
   *
   * @public
   */
  providerType: ProviderType | undefined;

  /**
   * The display name of the integration.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The identifier of the AWS KMS key used to encrypt data associated with the integration.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The HTTPS URL of the customer self-hosted instance, such as a GitHub Enterprise Server or self-managed GitLab instance. This value is absent for SaaS integrations.
   *
   * @public
   */
  targetUrl?: string | undefined;

  /**
   * The Atlassian Cloud site URL for Atlassian integrations.
   *
   * @public
   */
  siteUrl?: string | undefined;

  /**
   * The payload URL of the integration's webhook, once it has been created. The signing secret is never returned on a read.
   *
   * @public
   */
  webhookUrl?: string | undefined;

  /**
   * The name of the private connection used to reach the integration's self-hosted instance over private networking, if one is configured.
   *
   * @public
   */
  privateConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityRequirementPackInput {
  /**
   * The unique identifier of the security requirement pack to retrieve.
   *
   * @public
   */
  packId: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityRequirementPackOutput {
  /**
   * The unique identifier of the security requirement pack.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The name of the security requirement pack.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement pack.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The vendor name for AWS managed packs, such as ISO or NIST.
   *
   * @public
   */
  vendorName?: string | undefined;

  /**
   * The management type of the pack. Valid values are AWS_MANAGED and CUSTOMER_MANAGED.
   *
   * @public
   */
  managementType: ManagementType | undefined;

  /**
   * The status of the security requirement pack.
   *
   * @public
   */
  status: SecurityRequirementPackStatus | undefined;

  /**
   * The status of the security requirements import workflow for this pack.
   *
   * @public
   */
  importStatus?: SecurityRequirementPackImportStatus | undefined;

  /**
   * The date and time the security requirement pack was created, in UTC format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the security requirement pack was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The identifier of the AWS KMS key used to encrypt pack contents.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Contains metadata about a GitHub repository that is integrated with the service.
 *
 * @public
 */
export interface GitHubRepositoryMetadata {
  /**
   * The name of the GitHub repository.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The provider-specific resource identifier for the GitHub repository.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The owner of the GitHub repository.
   *
   * @public
   */
  owner: string | undefined;

  /**
   * The access type of the GitHub repository. Valid values are PRIVATE and PUBLIC.
   *
   * @public
   */
  accessType?: AccessType | undefined;
}

/**
 * Represents a GitHub repository resource used in an integration.
 *
 * @public
 */
export interface GitHubRepositoryResource {
  /**
   * The name of the GitHub repository.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The owner of the GitHub repository.
   *
   * @public
   */
  owner: string | undefined;
}

/**
 * The capabilities enabled for a GitHub resource integration.
 *
 * @public
 */
export interface GitHubResourceCapabilities {
  /**
   * The filter groups that control which pull request events start an automatic code review when `leaveComments` is enabled. A review starts when any group matches. If you omit this, a review starts on `PULL_REQUEST_READY_FOR_REVIEW` events.
   *
   * @public
   */
  triggerFilterGroups?: TriggerFilterGroup[] | undefined;

  /**
   * Indicates whether the integration can leave comments on pull requests.
   *
   * @public
   */
  leaveComments?: boolean | undefined;

  /**
   * Indicates whether the integration can create code remediation pull requests.
   *
   * @public
   */
  remediateCode?: boolean | undefined;
}

/**
 * Metadata for an integrated GitLab repository.
 *
 * @public
 */
export interface GitLabRepositoryMetadata {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Provider Id of the resource e.g. GitHub repository id, etc.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The namespace (group or user path) that owns the project.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * Defines the visibility level of provider resources. PRIVATE indicates restricted access, while PUBLIC indicates open access.
   *
   * @public
   */
  accessType?: AccessType | undefined;
}

/**
 * A GitLab repository integrated as a resource.
 *
 * @public
 */
export interface GitLabRepositoryResource {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The namespace (group or user path) that owns the project.
   *
   * @public
   */
  namespace: string | undefined;
}

/**
 * Capabilities for an integrated GitLab repository.
 *
 * @public
 */
export interface GitLabResourceCapabilities {
  /**
   * The filter groups that control which merge request events start an automatic code review when `leaveComments` is enabled. A review starts when any group matches. If you omit this, a review starts on `PULL_REQUEST_READY_FOR_REVIEW` events.
   *
   * @public
   */
  triggerFilterGroups?: TriggerFilterGroup[] | undefined;

  /**
   * Whether to post code review comments on merge request discussions.
   *
   * @public
   */
  leaveComments?: boolean | undefined;

  /**
   * Whether to create merge requests with automated fixes.
   *
   * @public
   */
  remediateCode?: boolean | undefined;
}

/**
 * A document used as source material for importing security requirements.
 *
 * @public
 */
export interface SecurityRequirementArtifact {
  /**
   * The file name of the document.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The format of the document. Valid values are MD, PDF, TXT, DOCX, and DOC.
   *
   * @public
   */
  format: SecurityRequirementArtifactFormat | undefined;

  /**
   * The binary content of the document.
   *
   * @public
   */
  content: Uint8Array | undefined;
}

/**
 * The source from which to import security requirements. Currently supports document uploads.
 *
 * @public
 */
export type ImportSource =
  | ImportSource.DocumentsMember
  | ImportSource.$UnknownMember;

/**
 * @public
 */
export namespace ImportSource {
  /**
   * The list of documents to extract security requirements from.
   *
   * @public
   */
  export interface DocumentsMember {
    documents: SecurityRequirementArtifact[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    documents?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    documents: (value: SecurityRequirementArtifact[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ImportSecurityRequirementsInput {
  /**
   * The unique identifier of the security requirement pack to import requirements into.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The import source containing the documents to extract security requirements from.
   *
   * @public
   */
  input: ImportSource | undefined;
}

/**
 * @public
 */
export interface ImportSecurityRequirementsOutput {
  /**
   * The unique identifier of the security requirement pack.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The status of the import workflow.
   *
   * @public
   */
  importStatus: SecurityRequirementPackImportStatus | undefined;
}

/**
 * @public
 */
export interface InitiateProviderRegistrationInput {
  /**
   * The provider to initiate registration with.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The HTTPS URL of a self-managed provider instance. Omit for SaaS providers.
   *
   * @public
   */
  targetUrl?: string | undefined;

  /**
   * The name of the organization to connect.
   *
   * @public
   */
  organizationName?: string | undefined;

  /**
   * The client ID of the OAuth application registered on your self-managed provider instance.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The client secret of the OAuth application registered on your self-managed provider instance.
   *
   * @public
   */
  clientSecret?: string | undefined;
}

/**
 * @public
 */
export interface InitiateProviderRegistrationOutput {
  /**
   * The URL to redirect the user to for completing the OAuth authorization.
   *
   * @public
   */
  redirectTo: string | undefined;

  /**
   * The CSRF state token to use when completing the OAuth flow.
   *
   * @public
   */
  csrfState: string | undefined;
}

/**
 * Represents a Jira project resource used in an integration.
 *
 * @public
 */
export interface JiraProjectResource {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Jira project key, for example PROJ.
   *
   * @public
   */
  projectKey: string | undefined;

  /**
   * The Jira project identifier.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The display name of the Jira project.
   *
   * @public
   */
  projectName?: string | undefined;
}

/**
 * Represents an integrated resource from a third-party provider. This is a union type that contains provider-specific resource information.
 *
 * @public
 */
export type IntegratedResource =
  | IntegratedResource.AzureDevOpsRepositoryMember
  | IntegratedResource.BitbucketRepositoryMember
  | IntegratedResource.ConfluenceDocumentMember
  | IntegratedResource.GithubRepositoryMember
  | IntegratedResource.GitlabRepositoryMember
  | IntegratedResource.JiraProjectMember
  | IntegratedResource.$UnknownMember;

/**
 * @public
 */
export namespace IntegratedResource {
  /**
   * The GitHub repository resource information.
   *
   * @public
   */
  export interface GithubRepositoryMember {
    githubRepository: GitHubRepositoryResource;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * A GitLab repository integrated as a resource.
   *
   * @public
   */
  export interface GitlabRepositoryMember {
    githubRepository?: never;
    gitlabRepository: GitLabRepositoryResource;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * A Bitbucket repository integrated as a resource.
   *
   * @public
   */
  export interface BitbucketRepositoryMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository: BitbucketRepositoryResource;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * A Confluence document (page) integrated as a resource.
   *
   * @public
   */
  export interface ConfluenceDocumentMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument: ConfluenceDocumentResource;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * The Azure DevOps repository resource information.
   *
   * @public
   */
  export interface AzureDevOpsRepositoryMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository: AzureDevOpsRepositoryResource;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * The Jira project resource information.
   *
   * @public
   */
  export interface JiraProjectMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject: JiraProjectResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    githubRepository: (value: GitHubRepositoryResource) => T;
    gitlabRepository: (value: GitLabRepositoryResource) => T;
    bitbucketRepository: (value: BitbucketRepositoryResource) => T;
    confluenceDocument: (value: ConfluenceDocumentResource) => T;
    azureDevOpsRepository: (value: AzureDevOpsRepositoryResource) => T;
    jiraProject: (value: JiraProjectResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Capabilities for an integrated Jira project.
 *
 * @public
 */
export interface JiraResourceCapabilities {
  /**
   * Whether to create issues in the integrated jira project.
   *
   * @public
   */
  createIssue?: boolean | undefined;

  /**
   * Whether to post comments on issues in the integrated jira project.
   *
   * @public
   */
  commentIssue?: boolean | undefined;
}

/**
 * The capabilities for an integrated resource from a third-party provider. This is a union type that contains provider-specific capabilities.
 *
 * @public
 */
export type ProviderResourceCapabilities =
  | ProviderResourceCapabilities.AzureDevOpsMember
  | ProviderResourceCapabilities.BitbucketMember
  | ProviderResourceCapabilities.ConfluenceMember
  | ProviderResourceCapabilities.GithubMember
  | ProviderResourceCapabilities.GitlabMember
  | ProviderResourceCapabilities.JiraMember
  | ProviderResourceCapabilities.$UnknownMember;

/**
 * @public
 */
export namespace ProviderResourceCapabilities {
  /**
   * The GitHub-specific resource capabilities.
   *
   * @public
   */
  export interface GithubMember {
    github: GitHubResourceCapabilities;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * Capabilities for an integrated GitLab repository.
   *
   * @public
   */
  export interface GitlabMember {
    github?: never;
    gitlab: GitLabResourceCapabilities;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * Capabilities for an integrated Bitbucket repository.
   *
   * @public
   */
  export interface BitbucketMember {
    github?: never;
    gitlab?: never;
    bitbucket: BitbucketResourceCapabilities;
    confluence?: never;
    azureDevOps?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * Capabilities for an integrated Confluence space.
   *
   * @public
   */
  export interface ConfluenceMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence: ConfluenceResourceCapabilities;
    azureDevOps?: never;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The Azure DevOps-specific resource capabilities.
   *
   * @public
   */
  export interface AzureDevOpsMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps: AzureDevOpsResourceCapabilities;
    jira?: never;
    $unknown?: never;
  }

  /**
   * The Jira-specific resource capabilities.
   *
   * @public
   */
  export interface JiraMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    jira: JiraResourceCapabilities;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    gitlab?: never;
    bitbucket?: never;
    confluence?: never;
    azureDevOps?: never;
    jira?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubResourceCapabilities) => T;
    gitlab: (value: GitLabResourceCapabilities) => T;
    bitbucket: (value: BitbucketResourceCapabilities) => T;
    confluence: (value: ConfluenceResourceCapabilities) => T;
    azureDevOps: (value: AzureDevOpsResourceCapabilities) => T;
    jira: (value: JiraResourceCapabilities) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Represents an input item for updating integrated resources, including the resource and its capabilities.
 *
 * @public
 */
export interface IntegratedResourceInputItem {
  /**
   * The integrated resource to update.
   *
   * @public
   */
  resource: IntegratedResource | undefined;

  /**
   * The capabilities to enable for the integrated resource.
   *
   * @public
   */
  capabilities?: ProviderResourceCapabilities | undefined;
}

/**
 * Contains metadata about a Jira project that is integrated with the service.
 *
 * @public
 */
export interface JiraProjectMetadata {
  /**
   * Name of the resource e.g. repository name, etc.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Provider Id of the resource e.g. GitHub repository id, etc.
   *
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * The Jira project key, for example PROJ.
   *
   * @public
   */
  projectKey: string | undefined;

  /**
   * The Jira project identifier.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The display name of the Jira project.
   *
   * @public
   */
  projectName?: string | undefined;
}

/**
 * Contains metadata about an integrated resource. This is a union type that contains provider-specific metadata.
 *
 * @public
 */
export type IntegratedResourceMetadata =
  | IntegratedResourceMetadata.AzureDevOpsRepositoryMember
  | IntegratedResourceMetadata.BitbucketRepositoryMember
  | IntegratedResourceMetadata.ConfluenceDocumentMember
  | IntegratedResourceMetadata.GithubRepositoryMember
  | IntegratedResourceMetadata.GitlabRepositoryMember
  | IntegratedResourceMetadata.JiraProjectMember
  | IntegratedResourceMetadata.$UnknownMember;

/**
 * @public
 */
export namespace IntegratedResourceMetadata {
  /**
   * The GitHub repository metadata.
   *
   * @public
   */
  export interface GithubRepositoryMember {
    githubRepository: GitHubRepositoryMetadata;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * Metadata for an integrated GitLab repository.
   *
   * @public
   */
  export interface GitlabRepositoryMember {
    githubRepository?: never;
    gitlabRepository: GitLabRepositoryMetadata;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * Metadata for an integrated Bitbucket repository.
   *
   * @public
   */
  export interface BitbucketRepositoryMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository: BitbucketRepositoryMetadata;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * Metadata for an integrated Confluence document.
   *
   * @public
   */
  export interface ConfluenceDocumentMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument: ConfluenceDocumentMetadata;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * The Azure DevOps repository metadata.
   *
   * @public
   */
  export interface AzureDevOpsRepositoryMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository: AzureDevOpsRepositoryMetadata;
    jiraProject?: never;
    $unknown?: never;
  }

  /**
   * The Jira project metadata.
   *
   * @public
   */
  export interface JiraProjectMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject: JiraProjectMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    githubRepository?: never;
    gitlabRepository?: never;
    bitbucketRepository?: never;
    confluenceDocument?: never;
    azureDevOpsRepository?: never;
    jiraProject?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    githubRepository: (value: GitHubRepositoryMetadata) => T;
    gitlabRepository: (value: GitLabRepositoryMetadata) => T;
    bitbucketRepository: (value: BitbucketRepositoryMetadata) => T;
    confluenceDocument: (value: ConfluenceDocumentMetadata) => T;
    azureDevOpsRepository: (value: AzureDevOpsRepositoryMetadata) => T;
    jiraProject: (value: JiraProjectMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains summary information about an integrated resource.
 *
 * @public
 */
export interface IntegratedResourceSummary {
  /**
   * The unique identifier of the integration that provides access to the resource.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The metadata for the integrated resource.
   *
   * @public
   */
  resource: IntegratedResourceMetadata | undefined;

  /**
   * The capabilities enabled for the integrated resource.
   *
   * @public
   */
  capabilities?: ProviderResourceCapabilities | undefined;
}

/**
 * A filter for listing integrations. This is a union type where you can filter by provider or provider type.
 *
 * @public
 */
export type IntegrationFilter =
  | IntegrationFilter.ProviderMember
  | IntegrationFilter.ProviderTypeMember
  | IntegrationFilter.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationFilter {
  /**
   * Filter integrations by provider.
   *
   * @public
   */
  export interface ProviderMember {
    provider: Provider;
    providerType?: never;
    $unknown?: never;
  }

  /**
   * Filter integrations by provider type.
   *
   * @public
   */
  export interface ProviderTypeMember {
    provider?: never;
    providerType: ProviderType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    provider?: never;
    providerType?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    provider: (value: Provider) => T;
    providerType: (value: ProviderType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListIntegrationsInput {
  /**
   * A filter to apply to the list of integrations.
   *
   * @public
   */
  filter?: IntegrationFilter | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about an integration.
 *
 * @public
 */
export interface IntegrationSummary {
  /**
   * The unique identifier of the integration.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The installation identifier from the integration provider.
   *
   * @public
   */
  installationId: string | undefined;

  /**
   * The integration provider.
   *
   * @public
   */
  provider: Provider | undefined;

  /**
   * The type of the integration provider.
   *
   * @public
   */
  providerType: ProviderType | undefined;

  /**
   * The display name of the integration.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The HTTPS URL of the customer self-hosted instance, such as a GitHub Enterprise Server or self-managed GitLab instance. This value is absent for SaaS integrations.
   *
   * @public
   */
  targetUrl?: string | undefined;

  /**
   * The payload URL of the integration's webhook, once it has been created. The signing secret is never returned on a read.
   *
   * @public
   */
  webhookUrl?: string | undefined;

  /**
   * The name of the private connection used to reach the integration's self-hosted instance over private networking, if one is configured.
   *
   * @public
   */
  privateConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsOutput {
  /**
   * The list of integration summaries.
   *
   * @public
   */
  integrationSummaries: IntegrationSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for creating or rotating an integration's webhook.
 *
 * @public
 */
export interface UpdateIntegrationInput {
  /**
   * The ID of the integration whose webhook you want to create or rotate.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The action to perform on the integration's webhook.
   *
   * @public
   */
  webhookAction: WebhookAction | undefined;
}

/**
 * Output for the UpdateIntegration operation.
 *
 * @public
 */
export interface UpdateIntegrationOutput {
  /**
   * The ID of the integration.
   *
   * @public
   */
  integrationId: string | undefined;

  /**
   * The payload URL to configure on your provider instance. Returned when a webhook is created; unchanged by a rotate.
   *
   * @public
   */
  webhookUrl?: string | undefined;

  /**
   * The HMAC signing secret for the webhook. Returned only once, in this response; it is never returned again.
   *
   * @public
   */
  secret?: string | undefined;
}

/**
 * @public
 */
export interface ListActorMessagesInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier of the agent space that owns the pentest.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the pentest that the actor belongs to.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The identifier of the actor whose messages to list. The identifier is case-insensitive.
   *
   * @public
   */
  actorIdentifier: string | undefined;
}

/**
 * @public
 */
export interface ListActorMessagesOutput {
  /**
   * The list of messages received for the actor, most recent first.
   *
   * @public
   */
  messages?: ActorMessage[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListArtifactsInput {
  /**
   * The unique identifier of the agent space to list artifacts for.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListArtifactsOutput {
  /**
   * The list of artifact summaries.
   *
   * @public
   */
  artifactSummaries: ArtifactSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListCodeReviewJobsForCodeReview operation.
 *
 * @public
 */
export interface ListCodeReviewJobsForCodeReviewInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the code review to list jobs for.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Output for the ListCodeReviewJobsForCodeReview operation.
 *
 * @public
 */
export interface ListCodeReviewJobsForCodeReviewOutput {
  /**
   * The list of code review job summaries.
   *
   * @public
   */
  codeReviewJobSummaries?: CodeReviewJobSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing tasks associated with a code review job.
 *
 * @public
 */
export interface ListCodeReviewJobTasksInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the code review job to list tasks for.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * Filter tasks by step name.
   *
   * @public
   */
  stepName?: StepName | undefined;

  /**
   * Filter tasks by category name.
   *
   * @public
   */
  categoryName?: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Output for the ListCodeReviewJobTasks operation.
 *
 * @public
 */
export interface ListCodeReviewJobTasksOutput {
  /**
   * The list of code review job task summaries.
   *
   * @public
   */
  codeReviewJobTaskSummaries?: CodeReviewJobTaskSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing code reviews with optional filtering.
 *
 * @public
 */
export interface ListCodeReviewsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier of the agent space to list code reviews for.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Output for the ListCodeReviews operation.
 *
 * @public
 */
export interface ListCodeReviewsOutput {
  /**
   * The list of code review summaries.
   *
   * @public
   */
  codeReviewSummaries?: CodeReviewSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListDiscoveredEndpoints operation.
 *
 * @public
 */
export interface ListDiscoveredEndpointsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the pentest job to list discovered endpoints for.
   *
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A prefix to filter discovered endpoints by URI.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Output for the ListDiscoveredEndpoints operation.
 *
 * @public
 */
export interface ListDiscoveredEndpointsOutput {
  /**
   * The list of discovered endpoints.
   *
   * @public
   */
  discoveredEndpoints?: DiscoveredEndpoint[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListFindings operation with filtering support.
 *
 * @public
 */
export interface ListFindingsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the pentest job to list findings for.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the code review job to list findings for. Mutually exclusive with pentestJobId.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter findings by risk type.
   *
   * @public
   */
  riskType?: string | undefined;

  /**
   * Filter findings by risk level.
   *
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * Filter findings by status.
   *
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * Filter findings by confidence level.
   *
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * Filter findings by name.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Output for the ListFindings operation.
 *
 * @public
 */
export interface ListFindingsOutput {
  /**
   * The list of finding summaries.
   *
   * @public
   */
  findingsSummaries?: FindingSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegratedResourcesInput {
  /**
   * The unique identifier of the agent space to list integrated resources for.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the integration to filter by.
   *
   * @public
   */
  integrationId?: string | undefined;

  /**
   * The type of resource to filter by.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIntegratedResourcesOutput {
  /**
   * The list of integrated resource summaries.
   *
   * @public
   */
  integratedResourceSummaries: IntegratedResourceSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Request structure for listing agent space members.
 *
 * @public
 */
export interface ListMembershipsRequest {
  /**
   * The unique identifier of the application that contains the agent space.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the agent space to list memberships for.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * Filter memberships by member type.
   *
   * @public
   */
  memberType?: MembershipTypeFilter | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains metadata about a user member, including the username and email address.
 *
 * @public
 */
export interface UserMetadata {
  /**
   * The username of the user.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The email address of the user.
   *
   * @public
   */
  email: string | undefined;
}

/**
 * Contains metadata about a member. This is a union type that contains member-type-specific metadata.
 *
 * @public
 */
export type MemberMetadata =
  | MemberMetadata.UserMember
  | MemberMetadata.$UnknownMember;

/**
 * @public
 */
export namespace MemberMetadata {
  /**
   * The user metadata for the member.
   *
   * @public
   */
  export interface UserMember {
    user: UserMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    user?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    user: (value: UserMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains summary information about a membership.
 *
 * @public
 */
export interface MembershipSummary {
  /**
   * The unique identifier of the membership.
   *
   * @public
   */
  membershipId: string | undefined;

  /**
   * The unique identifier of the application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The type of member.
   *
   * @public
   */
  memberType: MembershipType | undefined;

  /**
   * The configuration for the membership.
   *
   * @public
   */
  config?: MembershipConfig | undefined;

  /**
   * The metadata for the member.
   *
   * @public
   */
  metadata?: MemberMetadata | undefined;

  /**
   * The date and time the membership was created, in UTC format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the membership was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The identifier of the entity that created the membership.
   *
   * @public
   */
  createdBy: string | undefined;

  /**
   * The identifier of the entity that last updated the membership.
   *
   * @public
   */
  updatedBy: string | undefined;
}

/**
 * Response structure for listing members associated to an agent space.
 *
 * @public
 */
export interface ListMembershipsResponse {
  /**
   * The list of membership summaries.
   *
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListPentestJobsForPentest operation.
 *
 * @public
 */
export interface ListPentestJobsForPentestInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the pentest to list jobs for.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filters the returned pentest jobs to only those of the specified job type.
   *
   * @public
   */
  jobType?: JobType | undefined;
}

/**
 * Contains summary information about a pentest job.
 *
 * @public
 */
export interface PentestJobSummary {
  /**
   * The unique identifier of the pentest job.
   *
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * The unique identifier of the pentest associated with the job.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The title of the pentest job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the pentest job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the pentest job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The type of the pentest job. Valid values are FULL, REVALIDATION, and CICD.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * The URL to view this pentest job's findings report in the console.
   *
   * @public
   */
  reportUrl?: string | undefined;
}

/**
 * Output for the ListPentestJobsForPentest operation.
 *
 * @public
 */
export interface ListPentestJobsForPentestOutput {
  /**
   * The list of pentest job summaries.
   *
   * @public
   */
  pentestJobSummaries?: PentestJobSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing tasks associated with a pentest job.
 *
 * @public
 */
export interface ListPentestJobTasksInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the pentest job to list tasks for.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * Filter tasks by step name. Valid values include PREFLIGHT, STATIC_ANALYSIS, PENTEST, VALIDATION, and FINALIZING.
   *
   * @public
   */
  stepName?: StepName | undefined;

  /**
   * Filter tasks by category name.
   *
   * @public
   */
  categoryName?: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a task.
 *
 * @public
 */
export interface TaskSummary {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the pentest associated with the task.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The unique identifier of the pentest job that contains the task.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the task.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The type of security risk the task is testing for.
   *
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * The current execution status of the task.
   *
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * The number of active work hours consumed by the task during execution.
   *
   * @public
   */
  taskHours?: number | undefined;

  /**
   * The date and time the task was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the task was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListPentestJobTasks operation.
 *
 * @public
 */
export interface ListPentestJobTasksOutput {
  /**
   * The list of task summaries.
   *
   * @public
   */
  taskSummaries?: TaskSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing pentests with optional filtering.
 *
 * @public
 */
export interface ListPentestsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier of the agent space to list pentests for.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Contains summary information about a pentest.
 *
 * @public
 */
export interface PentestSummary {
  /**
   * The unique identifier of the pentest.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the pentest.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The title of the pentest.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The date and time the pentest was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListPentests operation.
 *
 * @public
 */
export interface ListPentestsOutput {
  /**
   * The list of pentest summaries.
   *
   * @public
   */
  pentestSummaries?: PentestSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPrivateConnectionsInput {
  /**
   * The maximum number of private connections to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summarizes a private connection.
 *
 * @public
 */
export interface PrivateConnectionSummary {
  /**
   * The name of the private connection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the private connection, indicating whether it is service-managed or self-managed.
   *
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The current status of the private connection.
   *
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource gateway.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The IP address or DNS name of the target resource.
   *
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * The identifier of the VPC the resource gateway is created in.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The date and time the connection's certificate expires, in UTC format.
   *
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * The DNS resolution mode for the resource gateway.
   *
   * @public
   */
  dnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * A message describing why the private connection entered a failed state, if applicable.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The tags attached to the private connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPrivateConnectionsOutput {
  /**
   * The list of private connections.
   *
   * @public
   */
  privateConnections: PrivateConnectionSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results, if more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filter criteria for listing security requirement packs.
 *
 * @public
 */
export interface ListSecurityRequirementPackFilter {
  /**
   * Filter packs by management type. Valid values are AWS_MANAGED and CUSTOMER_MANAGED.
   *
   * @public
   */
  managementType?: ManagementType | undefined;

  /**
   * Filter packs by status. Valid values are ENABLED and DISABLED.
   *
   * @public
   */
  status?: SecurityRequirementPackStatus | undefined;
}

/**
 * @public
 */
export interface ListSecurityRequirementPacksInput {
  /**
   * The filter criteria for listing security requirement packs.
   *
   * @public
   */
  filter?: ListSecurityRequirementPackFilter | undefined;

  /**
   * The pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a security requirement pack.
 *
 * @public
 */
export interface SecurityRequirementPackSummary {
  /**
   * The unique identifier of the security requirement pack.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The name of the security requirement pack.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement pack.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The vendor name for AWS managed packs.
   *
   * @public
   */
  vendorName?: string | undefined;

  /**
   * The management type of the pack.
   *
   * @public
   */
  managementType: ManagementType | undefined;

  /**
   * The status of the security requirement pack.
   *
   * @public
   */
  status: SecurityRequirementPackStatus | undefined;

  /**
   * The date and time the security requirement pack was created, in UTC format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the security requirement pack was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSecurityRequirementPacksOutput {
  /**
   * The list of security requirement pack summaries.
   *
   * @public
   */
  securityRequirementPackSummaries: SecurityRequirementPackSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityRequirementsInput {
  /**
   * The unique identifier of the security requirement pack to list requirements for.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single request.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a security requirement.
 *
 * @public
 */
export interface SecurityRequirementSummary {
  /**
   * The unique identifier of the pack containing the security requirement.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The name of the security requirement.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the security requirement.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The date and time the security requirement was created, in UTC format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the security requirement was last updated, in UTC format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSecurityRequirementsOutput {
  /**
   * The list of security requirement summaries.
   *
   * @public
   */
  securityRequirementSummaries: SecurityRequirementSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListTagsForResource operation.
 *
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Output for ListTagsForResource operation.
 *
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for listing target domains.
 *
 * @public
 */
export interface ListTargetDomainsInput {
  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a target domain.
 *
 * @public
 */
export interface TargetDomainSummary {
  /**
   * The unique identifier of the target domain.
   *
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * The domain name of the target domain.
   *
   * @public
   */
  domainName: string | undefined;

  /**
   * The current verification status of the target domain.
   *
   * @public
   */
  verificationStatus?: TargetDomainStatus | undefined;
}

/**
 * Output for the ListTargetDomains operation.
 *
 * @public
 */
export interface ListTargetDomainsOutput {
  /**
   * The list of target domain summaries.
   *
   * @public
   */
  targetDomainSummaries?: TargetDomainSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for ListThreatModelJobs operation.
 *
 * @public
 */
export interface ListThreatModelJobsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the threat model to list jobs for.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a threat model job.
 *
 * @public
 */
export interface ThreatModelJobSummary {
  /**
   * The unique identifier of the threat model job.
   *
   * @public
   */
  threatModelJobId: string | undefined;

  /**
   * The unique identifier of the threat model associated with the job.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the threat model job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the threat model job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the threat model job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListThreatModelJobs operation.
 *
 * @public
 */
export interface ListThreatModelJobsOutput {
  /**
   * The list of threat model job summaries.
   *
   * @public
   */
  threatModelJobSummaries?: ThreatModelJobSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing tasks associated with a threat model job.
 *
 * @public
 */
export interface ListThreatModelJobTasksInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The unique identifier of the threat model job to list tasks for.
   *
   * @public
   */
  threatModelJobId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a threat model job task.
 *
 * @public
 */
export interface ThreatModelJobTaskSummary {
  /**
   * The unique identifier of the task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * The unique identifier of the threat model associated with the task.
   *
   * @public
   */
  threatModelId?: string | undefined;

  /**
   * The unique identifier of the threat model job that contains the task.
   *
   * @public
   */
  threatModelJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * The title of the task.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current execution status of the task.
   *
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * The date and time the task was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the task was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListThreatModelJobTasks operation.
 *
 * @public
 */
export interface ListThreatModelJobTasksOutput {
  /**
   * The list of threat model job task summaries.
   *
   * @public
   */
  threatModelJobTaskSummaries?: ThreatModelJobTaskSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing threat models.
 *
 * @public
 */
export interface ListThreatModelsInput {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The unique identifier of the agent space to list threat models for.
   *
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * Contains summary information about a threat model.
 *
 * @public
 */
export interface ThreatModelSummary {
  /**
   * The unique identifier of the threat model.
   *
   * @public
   */
  threatModelId: string | undefined;

  /**
   * The unique identifier of the agent space that contains the threat model.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The title of the threat model.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The date and time the threat model was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat model was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListThreatModels operation.
 *
 * @public
 */
export interface ListThreatModelsOutput {
  /**
   * The list of threat model summaries.
   *
   * @public
   */
  threatModelSummaries?: ThreatModelSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for listing threats.
 *
 * @public
 */
export interface ListThreatsInput {
  /**
   * The unique identifier of the threat model job to list threats for.
   *
   * @public
   */
  threatJobId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a threat.
 *
 * @public
 */
export interface ThreatSummary {
  /**
   * The unique identifier of the threat.
   *
   * @public
   */
  threatId?: string | undefined;

  /**
   * The unique identifier of the threat model job that produced the threat.
   *
   * @public
   */
  threatJobId?: string | undefined;

  /**
   * A short title summarizing the threat.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The natural-language threat statement.
   *
   * @public
   */
  statement?: string | undefined;

  /**
   * The severity level of the threat.
   *
   * @public
   */
  severity?: ThreatSeverity | undefined;

  /**
   * The current status of the threat.
   *
   * @public
   */
  status?: ThreatStatus | undefined;

  /**
   * The STRIDE categories applicable to this threat.
   *
   * @public
   */
  stride?: StrideCategory[] | undefined;

  /**
   * Who created this threat.
   *
   * @public
   */
  createdBy?: ThreatActor | undefined;

  /**
   * Who last updated this threat.
   *
   * @public
   */
  updatedBy?: ThreatActor | undefined;

  /**
   * The date and time the threat was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the threat was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Output for the ListThreats operation.
 *
 * @public
 */
export interface ListThreatsOutput {
  /**
   * The list of threat summaries.
   *
   * @public
   */
  threats?: ThreatSummary[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePrivateConnectionCertificateInput {
  /**
   * The name of the private connection to update.
   *
   * @public
   */
  privateConnectionName: string | undefined;

  /**
   * The PEM-encoded certificate chain for the private connection.
   *
   * @public
   */
  certificate: string | undefined;
}

/**
 * @public
 */
export interface UpdatePrivateConnectionCertificateOutput {
  /**
   * The name of the private connection.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the private connection, indicating whether it is service-managed or self-managed.
   *
   * @public
   */
  type: PrivateConnectionType | undefined;

  /**
   * The current status of the private connection.
   *
   * @public
   */
  status: PrivateConnectionStatus | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource gateway.
   *
   * @public
   */
  resourceGatewayId?: string | undefined;

  /**
   * The IP address or DNS name of the target resource.
   *
   * @public
   */
  hostAddress?: string | undefined;

  /**
   * The identifier of the VPC the resource gateway is created in.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The identifier or ARN of the VPC Lattice resource configuration.
   *
   * @public
   */
  resourceConfigurationId?: string | undefined;

  /**
   * The date and time the connection's certificate expires, in UTC format.
   *
   * @public
   */
  certificateExpiryTime?: Date | undefined;

  /**
   * The DNS resolution mode for the resource gateway.
   *
   * @public
   */
  dnsResolution?: ResourceConfigDnsResolution | undefined;

  /**
   * A message describing why the private connection entered a failed state, if applicable.
   *
   * @public
   */
  failureMessage?: string | undefined;

  /**
   * The tags attached to the private connection.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityRequirementPackInput {
  /**
   * The unique identifier of the security requirement pack to update.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The updated name of the security requirement pack.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated description of the security requirement pack.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated status of the security requirement pack.
   *
   * @public
   */
  status?: SecurityRequirementPackStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityRequirementPackOutput {
  /**
   * The unique identifier of the security requirement pack.
   *
   * @public
   */
  packId: string | undefined;

  /**
   * The name of the security requirement pack.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the security requirement pack.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the security requirement pack.
   *
   * @public
   */
  status?: SecurityRequirementPackStatus | undefined;
}

/**
 * Input for the StartCodeRemediation operation.
 *
 * @public
 */
export interface StartCodeRemediationInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the pentest job that produced the findings. Mutually exclusive with `codeReviewJobId`.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the code review job that produced the findings. Mutually exclusive with `pentestJobId`.
   *
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * The list of finding identifiers to initiate code remediation for.
   *
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * Output for the StartCodeRemediation operation.
 *
 * @public
 */
export interface StartCodeRemediationOutput {}

/**
 * Input for starting the execution of a code review.
 *
 * @public
 */
export interface StartCodeReviewJobInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the code review to start a job for.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * Source of the diff for a differential scan. When present, the job analyzes only the changed lines instead of performing a full scan.
   *
   * @public
   */
  diffSource?: DiffSource | undefined;
}

/**
 * Output for the StartCodeReviewJob operation.
 *
 * @public
 */
export interface StartCodeReviewJobOutput {
  /**
   * The title of the code review job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the code review job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the code review job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the code review job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The unique identifier of the code review.
   *
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * The unique identifier of the started code review job.
   *
   * @public
   */
  codeReviewJobId: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for starting the execution of a pentest.
 *
 * @public
 */
export interface StartPentestJobInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the pentest to start a job for.
   *
   * @public
   */
  pentestId: string | undefined;

  /**
   * The type of pentest job to start. Valid values are FULL, REVALIDATION, and CICD. When set to REVALIDATION, the selectedFindingIds parameter is required. When set to CICD, the scopeChanges parameter defines the code changes to test.
   *
   * @public
   */
  jobType?: JobType | undefined;

  /**
   * The list of finding identifiers to revalidate. Required when jobType is REVALIDATION. Each finding must belong to the same agent space and pentest.
   *
   * @public
   */
  selectedFindingIds?: string[] | undefined;

  /**
   * The code changes that define the scope of a CI/CD pentest job. Provide this when starting a job with jobType CICD to test only the changes in the current pipeline run.
   *
   * @public
   */
  scopeChanges?: ScopeChange[] | undefined;
}

/**
 * Output for the StartPentestJob operation.
 *
 * @public
 */
export interface StartPentestJobOutput {
  /**
   * The title of the pentest job.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The current status of the pentest job.
   *
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * The date and time the pentest job was created, in UTC format.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time the pentest job was last updated, in UTC format.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The unique identifier of the pentest.
   *
   * @public
   */
  pentestId?: string | undefined;

  /**
   * The unique identifier of the started pentest job.
   *
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * Input for starting a threat model job.
 *
 * @public
 */
export interface StartThreatModelJobInput {
  /**
   * The unique identifier of the agent space.
   *
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * The unique identifier of the threat model to start a job for.
   *
   * @public
   */
  threatModelId: string | undefined;
}
