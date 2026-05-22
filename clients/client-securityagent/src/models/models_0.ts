// smithy-typescript generated code
import type {
  AccessType,
  ArtifactType,
  AuthenticationProviderType,
  CodeRemediationStrategy,
  CodeRemediationTaskStatus,
  ConfidenceLevel,
  ContextType,
  DNSRecordType,
  DomainVerificationMethod,
  ErrorCode,
  FindingStatus,
  JobStatus,
  LogType,
  MembershipType,
  MembershipTypeFilter,
  NetworkTrafficRuleEffect,
  NetworkTrafficRuleType,
  Provider,
  ProviderType,
  ResourceType,
  RiskLevel,
  RiskType,
  StepName,
  StepStatus,
  TargetDomainStatus,
  TaskExecutionStatus,
  UserRole,
} from "./enums";

/**
 * <p>The authentication configuration for an actor, specifying the provider type and credentials.</p>
 * @public
 */
export interface Authentication {
  /**
   * <p>The type of authentication provider. Valid values include SECRETS_MANAGER, AWS_LAMBDA, AWS_IAM_ROLE, and AWS_INTERNAL.</p>
   * @public
   */
  providerType?: AuthenticationProviderType | undefined;

  /**
   * <p>The authentication value, such as a secret ARN, Lambda function ARN, or IAM role ARN, depending on the provider type.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Represents an actor used during penetration testing. An actor defines a user or entity that interacts with the target application, including authentication credentials and target URIs.</p>
 * @public
 */
export interface Actor {
  /**
   * <p>The unique identifier for the actor.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>The list of URIs that the actor targets during testing.</p>
   * @public
   */
  uris?: string[] | undefined;

  /**
   * <p>The authentication configuration for the actor.</p>
   * @public
   */
  authentication?: Authentication | undefined;

  /**
   * <p>A description of the actor.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AddArtifactInput {
  /**
   * <p>The unique identifier of the agent space to add the artifact to.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The binary content of the artifact to upload.</p>
   * @public
   */
  artifactContent: Uint8Array | undefined;

  /**
   * <p>The file type of the artifact. Valid values include TXT, PNG, JPEG, MD, PDF, DOCX, DOC, JSON, and YAML.</p>
   * @public
   */
  artifactType: ArtifactType | undefined;

  /**
   * <p>The file name of the artifact.</p>
   * @public
   */
  fileName: string | undefined;
}

/**
 * @public
 */
export interface AddArtifactOutput {
  /**
   * <p>The unique identifier assigned to the uploaded artifact.</p>
   * @public
   */
  artifactId: string | undefined;
}

/**
 * <p>Describes one specific validation failure for an input member.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>A JSONPointer expression to the structure member whose value failed to satisfy the modeled constraint.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>A detailed description of the validation failure.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The VPC configuration for a pentest, specifying the VPC, security groups, and subnets to use during testing.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the VPC.</p>
   * @public
   */
  vpcArn?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the security groups for the VPC configuration.</p>
   * @public
   */
  securityGroupArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the subnets for the VPC configuration.</p>
   * @public
   */
  subnetArns?: string[] | undefined;
}

/**
 * <p>The AWS resources associated with an agent space, including VPCs, log groups, S3 buckets, secrets, Lambda functions, and IAM roles.</p>
 * @public
 */
export interface AWSResources {
  /**
   * <p>The VPC configurations associated with the agent space.</p>
   * @public
   */
  vpcs?: VpcConfig[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the CloudWatch log groups associated with the agent space.</p>
   * @public
   */
  logGroups?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the S3 buckets associated with the agent space.</p>
   * @public
   */
  s3Buckets?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Secrets Manager secrets associated with the agent space.</p>
   * @public
   */
  secretArns?: string[] | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the Lambda functions associated with the agent space.</p>
   * @public
   */
  lambdaFunctionArns?: string[] | undefined;

  /**
   * <p>The IAM roles associated with the agent space.</p>
   * @public
   */
  iamRoles?: string[] | undefined;
}

/**
 * <p>The code review settings for an agent space, controlling which types of scanning are enabled.</p>
 * @public
 */
export interface CodeReviewSettings {
  /**
   * <p>Indicates whether controls scanning is enabled for code reviews.</p>
   * @public
   */
  controlsScanning: boolean | undefined;

  /**
   * <p>Indicates whether general-purpose scanning is enabled for code reviews.</p>
   * @public
   */
  generalPurposeScanning: boolean | undefined;
}

/**
 * <p>Represents an agent space, which is a dedicated workspace for securing a specific application. An agent space contains the configuration, resources, and settings needed for security testing.</p>
 * @public
 */
export interface AgentSpace {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The name of the agent space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the agent space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS resources associated with the agent space.</p>
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * <p>The list of target domain identifiers associated with the agent space.</p>
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * <p>The code review settings for the agent space.</p>
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * <p>The identifier of the AWS KMS key used to encrypt data in the agent space.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The date and time the agent space was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the agent space was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Input for batch retrieving agent spaces.</p>
 * @public
 */
export interface BatchGetAgentSpacesInput {
  /**
   * <p>The list of agent space identifiers to retrieve.</p>
   * @public
   */
  agentSpaceIds: string[] | undefined;
}

/**
 * <p>Output for the BatchGetAgentSpaces operation.</p>
 * @public
 */
export interface BatchGetAgentSpacesOutput {
  /**
   * <p>The list of agent spaces that were found.</p>
   * @public
   */
  agentSpaces?: AgentSpace[] | undefined;

  /**
   * <p>The list of agent space identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for creating a new agent space.</p>
 * @public
 */
export interface CreateAgentSpaceInput {
  /**
   * <p>The name of the agent space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the agent space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS resources to associate with the agent space.</p>
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * <p>The list of target domain identifiers to associate with the agent space.</p>
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * <p>The code review settings for the agent space.</p>
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * <p>The identifier of the AWS KMS key to use for encrypting data in the agent space.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags to associate with the agent space.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Output for the CreateAgentSpace operation.</p>
 * @public
 */
export interface CreateAgentSpaceOutput {
  /**
   * <p>The unique identifier of the created agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The name of the agent space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the agent space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS resources associated with the agent space.</p>
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * <p>The list of target domain identifiers associated with the agent space.</p>
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * <p>The code review settings for the agent space.</p>
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * <p>The identifier of the AWS KMS key used to encrypt data in the agent space.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The date and time the agent space was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the agent space was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Input for deleting an agent space.</p>
 * @public
 */
export interface DeleteAgentSpaceInput {
  /**
   * <p>The unique identifier of the agent space to delete.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Output for the DeleteAgentSpace operation.</p>
 * @public
 */
export interface DeleteAgentSpaceOutput {
  /**
   * <p>The unique identifier of the deleted agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * <p>Input for listing agent spaces.</p>
 * @public
 */
export interface ListAgentSpacesInput {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about an agent space.</p>
 * @public
 */
export interface AgentSpaceSummary {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The name of the agent space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time the agent space was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the agent space was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the ListAgentSpaces operation.</p>
 * @public
 */
export interface ListAgentSpacesOutput {
  /**
   * <p>The list of agent space summaries.</p>
   * @public
   */
  agentSpaceSummaries?: AgentSpaceSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for updating an agent space.</p>
 * @public
 */
export interface UpdateAgentSpaceInput {
  /**
   * <p>The unique identifier of the agent space to update.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated name of the agent space.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the agent space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated AWS resources to associate with the agent space.</p>
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * <p>The updated list of target domain identifiers to associate with the agent space.</p>
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * <p>The updated code review settings for the agent space.</p>
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;
}

/**
 * <p>Output for the UpdateAgentSpace operation.</p>
 * @public
 */
export interface UpdateAgentSpaceOutput {
  /**
   * <p>The unique identifier of the updated agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The name of the agent space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the agent space.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS resources associated with the agent space.</p>
   * @public
   */
  awsResources?: AWSResources | undefined;

  /**
   * <p>The list of target domain identifiers associated with the agent space.</p>
   * @public
   */
  targetDomainIds?: string[] | undefined;

  /**
   * <p>The code review settings for the agent space.</p>
   * @public
   */
  codeReviewSettings?: CodeReviewSettings | undefined;

  /**
   * <p>The date and time the agent space was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the agent space was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center instance to associate with the application.</p>
   * @public
   */
  idcInstanceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the application.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The identifier of the default AWS KMS key to use for encrypting data in the application.</p>
   * @public
   */
  defaultKmsKeyId?: string | undefined;

  /**
   * <p>The tags to associate with the application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The unique identifier of the created application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The unique identifier of the application to delete.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The unique identifier of the application to retrieve.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * <p>The IAM Identity Center configuration for an application.</p>
 * @public
 */
export interface IdCConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center application.</p>
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center instance.</p>
   * @public
   */
  idcInstanceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The domain associated with the application.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The IAM Identity Center configuration for the application.</p>
   * @public
   */
  idcConfiguration?: IdCConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the application.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The identifier of the default AWS KMS key used to encrypt data for the application.</p>
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about an application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  applicationName: string | undefined;

  /**
   * <p>The domain associated with the application.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The identifier of the default AWS KMS key used to encrypt data for the application.</p>
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The list of application summaries.</p>
   * @public
   */
  applicationSummaries: ApplicationSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The unique identifier of the application to update.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The updated Amazon Resource Name (ARN) of the IAM role for the application.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The updated identifier of the default AWS KMS key for the application.</p>
   * @public
   */
  defaultKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>The unique identifier of the updated application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * <p>Represents an artifact that provides context for security testing, such as documentation, diagrams, or configuration files.</p>
 * @public
 */
export interface Artifact {
  /**
   * <p>The content of the artifact.</p>
   * @public
   */
  contents: string | undefined;

  /**
   * <p>The file type of the artifact.</p>
   * @public
   */
  type: ArtifactType | undefined;
}

/**
 * <p>Contains metadata about an artifact.</p>
 * @public
 */
export interface ArtifactMetadataItem {
  /**
   * <p>The unique identifier of the agent space that contains the artifact.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the artifact.</p>
   * @public
   */
  artifactId: string | undefined;

  /**
   * <p>The file name of the artifact.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The date and time the artifact was last updated, in UTC format.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Contains summary information about an artifact.</p>
 * @public
 */
export interface ArtifactSummary {
  /**
   * <p>The unique identifier of the artifact.</p>
   * @public
   */
  artifactId: string | undefined;

  /**
   * <p>The file name of the artifact.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The file type of the artifact.</p>
   * @public
   */
  artifactType: ArtifactType | undefined;
}

/**
 * <p>Represents a document that provides context for security testing.</p>
 * @public
 */
export interface DocumentInfo {
  /**
   * <p>The Amazon S3 location of the document.</p>
   * @public
   */
  s3Location?: string | undefined;

  /**
   * <p>The unique identifier of the artifact associated with the document.</p>
   * @public
   */
  artifactId?: string | undefined;
}

/**
 * <p>Represents a target endpoint for penetration testing.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The URI of the endpoint.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * <p>Represents a code repository that is integrated with the service through a third-party provider.</p>
 * @public
 */
export interface IntegratedRepository {
  /**
   * <p>The unique identifier of the integration that provides access to the repository.</p>
   * @public
   */
  integrationId: string | undefined;

  /**
   * <p>The provider-specific resource identifier for the repository.</p>
   * @public
   */
  providerResourceId: string | undefined;
}

/**
 * <p>Represents a source code repository used for security analysis during a pentest.</p>
 * @public
 */
export interface SourceCodeRepository {
  /**
   * <p>The Amazon S3 location of the source code repository archive.</p>
   * @public
   */
  s3Location?: string | undefined;
}

/**
 * <p>The collection of assets used in a pentest configuration, including endpoints, actors, documents, source code repositories, and integrated repositories.</p>
 * @public
 */
export interface Assets {
  /**
   * <p>The list of endpoints to test during the pentest.</p>
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * <p>The list of actors used during penetration testing.</p>
   * @public
   */
  actors?: Actor[] | undefined;

  /**
   * <p>The list of documents that provide context for the pentest.</p>
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * <p>The list of source code repositories to analyze during the pentest.</p>
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * <p>The list of integrated repositories associated with the pentest.</p>
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;
}

/**
 * <p>Input for deleting multiple code reviews.</p>
 * @public
 */
export interface BatchDeleteCodeReviewsInput {
  /**
   * <p>The list of code review identifiers to delete.</p>
   * @public
   */
  codeReviewIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code reviews to delete.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Contains information about a code review that failed to delete.</p>
 * @public
 */
export interface DeleteCodeReviewFailure {
  /**
   * <p>The unique identifier of the code review that failed to delete.</p>
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * <p>The reason the code review failed to delete.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Output for the BatchDeleteCodeReviews operation.</p>
 * @public
 */
export interface BatchDeleteCodeReviewsOutput {
  /**
   * <p>The list of identifiers of the code reviews that were successfully deleted.</p>
   * @public
   */
  deleted?: string[] | undefined;

  /**
   * <p>The list of code reviews that failed to delete, including the reason for each failure.</p>
   * @public
   */
  failed?: DeleteCodeReviewFailure[] | undefined;
}

/**
 * <p>Input for deleting multiple pentests.</p>
 * @public
 */
export interface BatchDeletePentestsInput {
  /**
   * <p>The list of pentest identifiers to delete.</p>
   * @public
   */
  pentestIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentests to delete.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>The Amazon CloudWatch Logs configuration for pentest job logging.</p>
 * @public
 */
export interface CloudWatchLog {
  /**
   * <p>The name of the CloudWatch log group.</p>
   * @public
   */
  logGroup?: string | undefined;

  /**
   * <p>The name of the CloudWatch log stream.</p>
   * @public
   */
  logStream?: string | undefined;
}

/**
 * <p>A custom HTTP header to include in network traffic during penetration testing.</p>
 * @public
 */
export interface CustomHeader {
  /**
   * <p>The name of the custom header.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the custom header.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>A rule that controls network traffic during penetration testing by allowing or denying traffic to specific URL patterns.</p>
 * @public
 */
export interface NetworkTrafficRule {
  /**
   * <p>The effect of the rule. Valid values are ALLOW and DENY.</p>
   * @public
   */
  effect?: NetworkTrafficRuleEffect | undefined;

  /**
   * <p>The URL pattern to match for the rule.</p>
   * @public
   */
  pattern?: string | undefined;

  /**
   * <p>The type of the network traffic rule. Currently, only URL is supported.</p>
   * @public
   */
  networkTrafficRuleType?: NetworkTrafficRuleType | undefined;
}

/**
 * <p>The network traffic configuration for a pentest, including custom headers and traffic rules.</p>
 * @public
 */
export interface NetworkTrafficConfig {
  /**
   * <p>The list of network traffic rules that control which URLs are allowed or denied during testing.</p>
   * @public
   */
  rules?: NetworkTrafficRule[] | undefined;

  /**
   * <p>The list of custom HTTP headers to include in network traffic during testing.</p>
   * @public
   */
  customHeaders?: CustomHeader[] | undefined;
}

/**
 * <p>Represents a pentest configuration that defines the parameters for security testing, including target assets, risk type exclusions, and infrastructure settings.</p>
 * @public
 */
export interface Pentest {
  /**
   * <p>The unique identifier of the pentest.</p>
   * @public
   */
  pentestId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The title of the pentest.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The assets included in the pentest.</p>
   * @public
   */
  assets: Assets | undefined;

  /**
   * <p>The list of risk types excluded from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The IAM service role used for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The VPC configuration for the pentest.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The network traffic configuration for the pentest.</p>
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * <p>The code remediation strategy for the pentest.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * <p>The date and time the pentest was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Contains information about a pentest that failed to delete.</p>
 * @public
 */
export interface DeletePentestFailure {
  /**
   * <p>The unique identifier of the pentest that failed to delete.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The reason the pentest failed to delete.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Output for the BatchDeletePentests operation.</p>
 * @public
 */
export interface BatchDeletePentestsOutput {
  /**
   * <p>The list of pentests that were successfully deleted.</p>
   * @public
   */
  deleted?: Pentest[] | undefined;

  /**
   * <p>The list of pentests that failed to delete, including the reason for each failure.</p>
   * @public
   */
  failed?: DeletePentestFailure[] | undefined;
}

/**
 * @public
 */
export interface BatchGetArtifactMetadataInput {
  /**
   * <p>The unique identifier of the agent space that contains the artifacts.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The list of artifact identifiers to retrieve metadata for.</p>
   * @public
   */
  artifactIds: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetArtifactMetadataOutput {
  /**
   * <p>The list of artifact metadata items that were found.</p>
   * @public
   */
  artifactMetadataList: ArtifactMetadataItem[] | undefined;
}

/**
 * <p>Input for BatchGetCodeReviewJobs operation.</p>
 * @public
 */
export interface BatchGetCodeReviewJobsInput {
  /**
   * <p>The list of code review job identifiers to retrieve.</p>
   * @public
   */
  codeReviewJobIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review jobs.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Contains error information for a pentest job that encountered an error.</p>
 * @public
 */
export interface ErrorInformation {
  /**
   * <p>The error code. Valid values include CLIENT_ERROR, INTERNAL_ERROR, and STOPPED_BY_USER.</p>
   * @public
   */
  code?: ErrorCode | undefined;

  /**
   * <p>A message describing the error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Contains contextual information about the execution of a pentest job, such as errors, warnings, or informational messages.</p>
 * @public
 */
export interface ExecutionContext {
  /**
   * <p>The type of context. Valid values include ERROR, CLIENT_ERROR, WARNING, and INFO.</p>
   * @public
   */
  contextType?: ContextType | undefined;

  /**
   * <p>The context message.</p>
   * @public
   */
  context?: string | undefined;

  /**
   * <p>The date and time the context was recorded, in UTC format.</p>
   * @public
   */
  timestamp?: Date | undefined;
}

/**
 * <p>Represents a step in the pentest job execution pipeline. Steps include preflight, static analysis, pentest, and finalizing.</p>
 * @public
 */
export interface Step {
  /**
   * <p>The name of the step. Valid values include PREFLIGHT, STATIC_ANALYSIS, PENTEST, and FINALIZING.</p>
   * @public
   */
  name?: StepName | undefined;

  /**
   * <p>The current status of the step.</p>
   * @public
   */
  status?: StepStatus | undefined;

  /**
   * <p>The date and time the step was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the step was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Represents a code review job, which is an execution instance of a code review. A code review job progresses through preflight, static analysis, and finalizing steps.</p>
 * @public
 */
export interface CodeReviewJob {
  /**
   * <p>The unique identifier of the code review job.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The unique identifier of the code review associated with the job.</p>
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * <p>The title of the code review job.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>An overview of the code review job results.</p>
   * @public
   */
  overview?: string | undefined;

  /**
   * <p>The current status of the code review job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The list of documents providing context for the code review job.</p>
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * <p>The list of source code repositories analyzed during the code review job.</p>
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * <p>The list of steps in the code review job execution.</p>
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * <p>The execution context messages for the code review job.</p>
   * @public
   */
  executionContext?: ExecutionContext[] | undefined;

  /**
   * <p>The IAM service role used for the code review job.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the code review job.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>Error information if the code review job encountered an error.</p>
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * <p>The list of integrated repositories associated with the code review job.</p>
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * <p>The code remediation strategy for the code review job.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * <p>The date and time the code review job was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review job was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetCodeReviewJobs operation.</p>
 * @public
 */
export interface BatchGetCodeReviewJobsOutput {
  /**
   * <p>The list of code review jobs that were found.</p>
   * @public
   */
  codeReviewJobs?: CodeReviewJob[] | undefined;

  /**
   * <p>The list of code review job identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for retrieving multiple tasks associated with a code review job.</p>
 * @public
 */
export interface BatchGetCodeReviewJobTasksInput {
  /**
   * <p>The unique identifier of the agent space that contains the tasks.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The list of task identifiers to retrieve.</p>
   * @public
   */
  codeReviewJobTaskIds: string[] | undefined;
}

/**
 * <p>Represents a category assigned to a security testing task.</p>
 * @public
 */
export interface Category {
  /**
   * <p>The name of the category.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Indicates whether this is the primary category for the task.</p>
   * @public
   */
  isPrimary?: boolean | undefined;
}

/**
 * <p>The log location for a task, specifying where task execution logs are stored.</p>
 * @public
 */
export interface LogLocation {
  /**
   * <p>The type of log storage. Currently, only CLOUDWATCH is supported.</p>
   * @public
   */
  logType?: LogType | undefined;

  /**
   * <p>The CloudWatch Logs location for the task logs.</p>
   * @public
   */
  cloudWatchLog?: CloudWatchLog | undefined;
}

/**
 * <p>Represents an individual security test task within a code review job. Each task targets a specific risk type and executes independently.</p>
 * @public
 */
export interface CodeReviewJobTask {
  /**
   * <p>The unique identifier of the task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The unique identifier of the code review associated with the task.</p>
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * <p>The unique identifier of the code review job that contains the task.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The title of the task.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A description of the task.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The list of categories assigned to the task.</p>
   * @public
   */
  categories?: Category[] | undefined;

  /**
   * <p>The type of security risk the task is testing for.</p>
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * <p>The current execution status of the task.</p>
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * <p>The location of the task execution logs.</p>
   * @public
   */
  logsLocation?: LogLocation | undefined;

  /**
   * <p>The date and time the task was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the task was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetCodeReviewJobTasks operation.</p>
 * @public
 */
export interface BatchGetCodeReviewJobTasksOutput {
  /**
   * <p>The list of code review job tasks that were found.</p>
   * @public
   */
  codeReviewJobTasks?: CodeReviewJobTask[] | undefined;

  /**
   * <p>The list of task identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for retrieving multiple code reviews by their IDs.</p>
 * @public
 */
export interface BatchGetCodeReviewsInput {
  /**
   * <p>The list of code review identifiers to retrieve.</p>
   * @public
   */
  codeReviewIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code reviews.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Represents a code review configuration that defines the parameters for automated security-focused code analysis, including target assets and logging configuration.</p>
 * @public
 */
export interface CodeReview {
  /**
   * <p>The unique identifier of the code review.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The title of the code review.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The assets included in the code review.</p>
   * @public
   */
  assets: Assets | undefined;

  /**
   * <p>The IAM service role used for the code review.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the code review.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The code remediation strategy for the code review.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * <p>The date and time the code review was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetCodeReviews operation.</p>
 * @public
 */
export interface BatchGetCodeReviewsOutput {
  /**
   * <p>The list of code reviews that were found.</p>
   * @public
   */
  codeReviews?: CodeReview[] | undefined;

  /**
   * <p>The list of code review identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for BatchGetFindings operation.</p>
 * @public
 */
export interface BatchGetFindingsInput {
  /**
   * <p>The list of finding identifiers to retrieve.</p>
   * @public
   */
  findingIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the findings.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Represents a location in source code associated with a security finding.</p>
 * @public
 */
export interface CodeLocation {
  /**
   * <p>The absolute path to the file containing the code location.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The starting line number of the code location.</p>
   * @public
   */
  lineStart?: number | undefined;

  /**
   * <p>The ending line number of the code location.</p>
   * @public
   */
  lineEnd?: number | undefined;

  /**
   * <p>The role of this location in the vulnerability, such as source or sink.</p>
   * @public
   */
  label?: string | undefined;
}

/**
 * <p>Contains details about a code remediation task, including links to the code diff and pull request.</p>
 * @public
 */
export interface CodeRemediationTaskDetails {
  /**
   * <p>The name of the repository where the remediation was applied.</p>
   * @public
   */
  repoName?: string | undefined;

  /**
   * <p>The link to the code diff for the remediation.</p>
   * @public
   */
  codeDiffLink?: string | undefined;

  /**
   * <p>The link to the pull request created for the remediation.</p>
   * @public
   */
  pullRequestLink?: string | undefined;
}

/**
 * <p>Represents a code remediation task that was initiated to fix a security finding.</p>
 * @public
 */
export interface CodeRemediationTask {
  /**
   * <p>The current status of the code remediation task.</p>
   * @public
   */
  status: CodeRemediationTaskStatus | undefined;

  /**
   * <p>The reason for the current status of the code remediation task.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The list of details for the code remediation task, including repository name, code diff link, and pull request link.</p>
   * @public
   */
  taskDetails?: CodeRemediationTaskDetails[] | undefined;
}

/**
 * <p>Represents an environment variable required to run a verification script.</p>
 * @public
 */
export interface VerificationScriptEnvVar {
  /**
   * <p>The name of the environment variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value of the environment variable.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Contains metadata for a verification script that can be used to reproduce a security finding.</p>
 * @public
 */
export interface VerificationScript {
  /**
   * <p>The type of script. Valid values are python and bash.</p>
   * @public
   */
  scriptType?: string | undefined;

  /**
   * <p>URL to download the verification script.</p>
   * @public
   */
  scriptUrl?: string | undefined;

  /**
   * <p>Instructions for running the verification script, including prerequisites and how to interpret results.</p>
   * @public
   */
  instructions?: string | undefined;

  /**
   * <p>The list of environment variables required to run the verification script.</p>
   * @public
   */
  envVars?: VerificationScriptEnvVar[] | undefined;
}

/**
 * <p>Represents a security finding discovered during a pentest job. A finding contains details about a vulnerability, including its risk level, confidence, and remediation status.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The unique identifier of the finding.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>The unique identifier of the agent space associated with the finding.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the pentest associated with the finding.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The unique identifier of the pentest job that produced the finding.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the code review associated with the finding.</p>
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * <p>The unique identifier of the code review job that produced the finding.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The unique identifier of the task that produced the finding.</p>
   * @public
   */
  taskId?: string | undefined;

  /**
   * <p>The name of the finding.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the finding.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the finding. Valid values include ACTIVE, RESOLVED, ACCEPTED, and FALSE_POSITIVE.</p>
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * <p>The type of security risk identified by the finding.</p>
   * @public
   */
  riskType?: string | undefined;

  /**
   * <p>The risk level of the finding. Valid values include UNKNOWN, INFORMATIONAL, LOW, MEDIUM, HIGH, and CRITICAL.</p>
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * <p>The numerical risk score of the finding.</p>
   * @public
   */
  riskScore?: string | undefined;

  /**
   * <p>The reasoning behind the finding, explaining why it was identified as a vulnerability.</p>
   * @public
   */
  reasoning?: string | undefined;

  /**
   * <p>The confidence level of the finding. Valid values include FALSE_POSITIVE, UNCONFIRMED, LOW, MEDIUM, and HIGH.</p>
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * <p>The attack script used to reproduce the finding.</p>
   * @public
   */
  attackScript?: string | undefined;

  /**
   * <p>The code remediation task associated with the finding, if code remediation was initiated.</p>
   * @public
   */
  codeRemediationTask?: CodeRemediationTask | undefined;

  /**
   * <p>The identifier of the entity that last updated the finding.</p>
   * @public
   */
  lastUpdatedBy?: string | undefined;

  /**
   * <p>The file locations involved in the vulnerability, as reported by the code scanner.</p>
   * @public
   */
  codeLocations?: CodeLocation[] | undefined;

  /**
   * <p>The verification script metadata for reproducing the finding, including download URL, instructions, and required environment variables.</p>
   * @public
   */
  verificationScript?: VerificationScript | undefined;

  /**
   * <p>The date and time the finding was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the finding was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetFindings operation.</p>
 * @public
 */
export interface BatchGetFindingsOutput {
  /**
   * <p>The list of findings that were found.</p>
   * @public
   */
  findings?: Finding[] | undefined;

  /**
   * <p>The list of finding identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for BatchGetPentestJobs operation.</p>
 * @public
 */
export interface BatchGetPentestJobsInput {
  /**
   * <p>The list of pentest job identifiers to retrieve.</p>
   * @public
   */
  pentestJobIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest jobs.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Represents a pentest job, which is an execution instance of a pentest. A pentest job progresses through preflight, static analysis, pentest, and finalizing steps.</p>
 * @public
 */
export interface PentestJob {
  /**
   * <p>The unique identifier of the pentest job.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the pentest associated with the job.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The title of the pentest job.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>An overview of the pentest job results.</p>
   * @public
   */
  overview?: string | undefined;

  /**
   * <p>The current status of the pentest job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The list of endpoints being tested in the pentest job.</p>
   * @public
   */
  endpoints?: Endpoint[] | undefined;

  /**
   * <p>The list of actors used during the pentest job.</p>
   * @public
   */
  actors?: Actor[] | undefined;

  /**
   * <p>The list of documents providing context for the pentest job.</p>
   * @public
   */
  documents?: DocumentInfo[] | undefined;

  /**
   * <p>The list of source code repositories analyzed during the pentest job.</p>
   * @public
   */
  sourceCode?: SourceCodeRepository[] | undefined;

  /**
   * <p>The list of paths excluded from the pentest job.</p>
   * @public
   */
  excludePaths?: Endpoint[] | undefined;

  /**
   * <p>The list of domains allowed during the pentest job.</p>
   * @public
   */
  allowedDomains?: Endpoint[] | undefined;

  /**
   * <p>The list of risk types excluded from the pentest job.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The list of steps in the pentest job execution.</p>
   * @public
   */
  steps?: Step[] | undefined;

  /**
   * <p>The execution context messages for the pentest job.</p>
   * @public
   */
  executionContext?: ExecutionContext[] | undefined;

  /**
   * <p>The IAM service role used for the pentest job.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pentest job.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The VPC configuration for the pentest job.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The network traffic configuration for the pentest job.</p>
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * <p>Error information if the pentest job encountered an error.</p>
   * @public
   */
  errorInformation?: ErrorInformation | undefined;

  /**
   * <p>The list of integrated repositories associated with the pentest job.</p>
   * @public
   */
  integratedRepositories?: IntegratedRepository[] | undefined;

  /**
   * <p>The code remediation strategy for the pentest job.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;

  /**
   * <p>The date and time the pentest job was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest job was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetPentestJobs operation.</p>
 * @public
 */
export interface BatchGetPentestJobsOutput {
  /**
   * <p>The list of pentest jobs that were found.</p>
   * @public
   */
  pentestJobs?: PentestJob[] | undefined;

  /**
   * <p>The list of pentest job identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for retrieving multiple tasks associated with a pentest job.</p>
 * @public
 */
export interface BatchGetPentestJobTasksInput {
  /**
   * <p>The unique identifier of the agent space that contains the tasks.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The list of task identifiers to retrieve.</p>
   * @public
   */
  taskIds: string[] | undefined;
}

/**
 * <p>Represents an individual security test task within a pentest job. Each task targets a specific risk type or endpoint and executes independently.</p>
 * @public
 */
export interface Task {
  /**
   * <p>The unique identifier of the task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The unique identifier of the pentest associated with the task.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The unique identifier of the pentest job that contains the task.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The title of the task.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>A description of the task.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The list of categories assigned to the task.</p>
   * @public
   */
  categories?: Category[] | undefined;

  /**
   * <p>The type of security risk the task is testing for.</p>
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * <p>The target endpoint being tested by the task.</p>
   * @public
   */
  targetEndpoint?: Endpoint | undefined;

  /**
   * <p>The current execution status of the task.</p>
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * <p>The location of the task execution logs.</p>
   * @public
   */
  logsLocation?: LogLocation | undefined;

  /**
   * <p>The date and time the task was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the task was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetPentestJobTasks operation.</p>
 * @public
 */
export interface BatchGetPentestJobTasksOutput {
  /**
   * <p>The list of tasks that were found.</p>
   * @public
   */
  tasks?: Task[] | undefined;

  /**
   * <p>The list of task identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for retrieving multiple pentests by their IDs.</p>
 * @public
 */
export interface BatchGetPentestsInput {
  /**
   * <p>The list of pentest identifiers to retrieve.</p>
   * @public
   */
  pentestIds: string[] | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentests.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Output for the BatchGetPentests operation.</p>
 * @public
 */
export interface BatchGetPentestsOutput {
  /**
   * <p>The list of pentests that were found.</p>
   * @public
   */
  pentests?: Pentest[] | undefined;

  /**
   * <p>The list of pentest identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Input for batch retrieving target domains.</p>
 * @public
 */
export interface BatchGetTargetDomainsInput {
  /**
   * <p>The list of target domain identifiers to retrieve.</p>
   * @public
   */
  targetDomainIds: string[] | undefined;
}

/**
 * <p>Contains DNS verification details for a target domain, including the DNS record to create for domain ownership verification.</p>
 * @public
 */
export interface DnsVerification {
  /**
   * <p>The verification token to include in the DNS record value.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>The name of the DNS record to create for verification.</p>
   * @public
   */
  dnsRecordName?: string | undefined;

  /**
   * <p>The type of DNS record to create. Currently, only TXT is supported.</p>
   * @public
   */
  dnsRecordType?: DNSRecordType | undefined;
}

/**
 * <p>Contains HTTP route verification details for a target domain, including the route path and token to serve for domain ownership verification.</p>
 * @public
 */
export interface HttpVerification {
  /**
   * <p>The verification token to serve at the specified route path.</p>
   * @public
   */
  token?: string | undefined;

  /**
   * <p>The HTTP route path where the verification token must be served.</p>
   * @public
   */
  routePath?: string | undefined;
}

/**
 * <p>Contains the verification details for a target domain, including the verification method and provider-specific details.</p>
 * @public
 */
export interface VerificationDetails {
  /**
   * <p>The verification method used for the target domain.</p>
   * @public
   */
  method?: DomainVerificationMethod | undefined;

  /**
   * <p>The DNS TXT verification details.</p>
   * @public
   */
  dnsTxt?: DnsVerification | undefined;

  /**
   * <p>The HTTP route verification details.</p>
   * @public
   */
  httpRoute?: HttpVerification | undefined;
}

/**
 * <p>Represents a target domain registered for penetration testing. A target domain must be verified through DNS TXT or HTTP route verification before it can be used in pentests.</p>
 * @public
 */
export interface TargetDomain {
  /**
   * <p>The unique identifier of the target domain.</p>
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The current verification status of the target domain.</p>
   * @public
   */
  verificationStatus?: TargetDomainStatus | undefined;

  /**
   * <p>The reason for the current target domain verification status.</p>
   * @public
   */
  verificationStatusReason?: string | undefined;

  /**
   * <p>The verification details for the target domain.</p>
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * <p>The date and time the target domain was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was verified, in UTC format.</p>
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * <p>Output for the BatchGetTargetDomains operation.</p>
 * @public
 */
export interface BatchGetTargetDomainsOutput {
  /**
   * <p>The list of target domains that were found.</p>
   * @public
   */
  targetDomains?: TargetDomain[] | undefined;

  /**
   * <p>The list of target domain identifiers that were not found.</p>
   * @public
   */
  notFound?: string[] | undefined;
}

/**
 * <p>Contains summary information about a code review job.</p>
 * @public
 */
export interface CodeReviewJobSummary {
  /**
   * <p>The unique identifier of the code review job.</p>
   * @public
   */
  codeReviewJobId: string | undefined;

  /**
   * <p>The unique identifier of the code review associated with the job.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The title of the code review job.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The current status of the code review job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The date and time the code review job was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review job was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Contains summary information about a code review job task.</p>
 * @public
 */
export interface CodeReviewJobTaskSummary {
  /**
   * <p>The unique identifier of the task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The unique identifier of the code review associated with the task.</p>
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * <p>The unique identifier of the code review job that contains the task.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The title of the task.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The type of security risk the task is testing for.</p>
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * <p>The current execution status of the task.</p>
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * <p>The date and time the task was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the task was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Contains summary information about a code review.</p>
 * @public
 */
export interface CodeReviewSummary {
  /**
   * <p>The unique identifier of the code review.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The title of the code review.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The date and time the code review was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Input for creating a new code review.</p>
 * @public
 */
export interface CreateCodeReviewInput {
  /**
   * <p>The title of the code review.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the agent space to create the code review in.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The assets to include in the code review, such as documents and source code.</p>
   * @public
   */
  assets: Assets | undefined;

  /**
   * <p>The IAM service role to use for the code review.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the code review.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The code remediation strategy for the code review. Valid values are AUTOMATIC and DISABLED.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * <p>Output for the CreateCodeReview operation.</p>
 * @public
 */
export interface CreateCodeReviewOutput {
  /**
   * <p>The unique identifier of the created code review.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The title of the code review.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The date and time the code review was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The assets included in the code review.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The IAM service role used for the code review.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the code review.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The code remediation strategy for the code review.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * <p>The input required to create a GitHub integration, including the OAuth authorization code and CSRF state.</p>
 * @public
 */
export interface GitHubIntegrationInput {
  /**
   * <p>The OAuth authorization code received from GitHub.</p>
   * @public
   */
  code: string | undefined;

  /**
   * <p>The CSRF state token for validating the OAuth flow.</p>
   * @public
   */
  state: string | undefined;

  /**
   * <p>The name of the GitHub organization to integrate with.</p>
   * @public
   */
  organizationName?: string | undefined;
}

/**
 * <p>The provider-specific input for creating an integration. This is a union type that contains provider-specific configuration.</p>
 * @public
 */
export type ProviderInput =
  | ProviderInput.GithubMember
  | ProviderInput.$UnknownMember;

/**
 * @public
 */
export namespace ProviderInput {
  /**
   * <p>The GitHub-specific input for creating an integration.</p>
   * @public
   */
  export interface GithubMember {
    github: GitHubIntegrationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubIntegrationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateIntegrationInput {
  /**
   * <p>The integration provider. Currently, only GITHUB is supported.</p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The provider-specific input required to create the integration.</p>
   * @public
   */
  input: ProviderInput | undefined;

  /**
   * <p>The display name for the integration.</p>
   * @public
   */
  integrationDisplayName: string | undefined;

  /**
   * <p>The identifier of the AWS KMS key to use for encrypting data associated with the integration.</p>
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * <p>The tags to associate with the integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationOutput {
  /**
   * <p>The unique identifier of the created integration.</p>
   * @public
   */
  integrationId: string | undefined;
}

/**
 * <p>The configuration for a user membership, including the role assigned to the user within the agent space.</p>
 * @public
 */
export interface UserConfig {
  /**
   * <p>The role assigned to the user. Currently, only MEMBER is supported.</p>
   * @public
   */
  role?: UserRole | undefined;
}

/**
 * <p>The configuration for a membership. This is a union type that contains member-type-specific configuration.</p>
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
   * <p>The user configuration for the membership.</p>
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
 * <p>Request structure for adding a single member to an agent space.</p>
 * @public
 */
export interface CreateMembershipRequest {
  /**
   * <p>The unique identifier of the application that contains the agent space.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the agent space to grant access to.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier for the membership.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The type of member. Currently, only USER is supported.</p>
   * @public
   */
  memberType: MembershipType | undefined;

  /**
   * <p>The configuration for the membership, such as the user role.</p>
   * @public
   */
  config?: MembershipConfig | undefined;
}

/**
 * <p>Response structure for adding a single member to an agent space.</p>
 * @public
 */
export interface CreateMembershipResponse {}

/**
 * <p>Input for creating a new pentest.</p>
 * @public
 */
export interface CreatePentestInput {
  /**
   * <p>The title of the pentest.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The unique identifier of the agent space to create the pentest in.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The assets to include in the pentest, such as endpoints, actors, documents, and source code.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The list of risk types to exclude from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The IAM service role to use for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The VPC configuration for the pentest.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The network traffic configuration for the pentest, including custom headers and traffic rules.</p>
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * <p>The code remediation strategy for the pentest. Valid values are AUTOMATIC and DISABLED.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * <p>Output for the CreatePentest operation.</p>
 * @public
 */
export interface CreatePentestOutput {
  /**
   * <p>The unique identifier of the created pentest.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The title of the pentest.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The date and time the pentest was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The assets included in the pentest.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The list of risk types excluded from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The IAM service role used for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * <p>Input for creating a new target domain.</p>
 * @public
 */
export interface CreateTargetDomainInput {
  /**
   * <p>The domain name to register as a target domain.</p>
   * @public
   */
  targetDomainName: string | undefined;

  /**
   * <p>The method to use for verifying domain ownership. Valid values are DNS_TXT, HTTP_ROUTE, and PRIVATE_VPC.</p>
   * @public
   */
  verificationMethod: DomainVerificationMethod | undefined;

  /**
   * <p>The tags to associate with the target domain.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Output for the CreateTargetDomain operation.</p>
 * @public
 */
export interface CreateTargetDomainOutput {
  /**
   * <p>The unique identifier of the created target domain.</p>
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The current verification status of the target domain.</p>
   * @public
   */
  verificationStatus: TargetDomainStatus | undefined;

  /**
   * <p>The reason for the current target domain verification status.</p>
   * @public
   */
  verificationStatusReason?: string | undefined;

  /**
   * <p>The verification details for the target domain, including the verification token and instructions.</p>
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * <p>The date and time the target domain was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was verified, in UTC format.</p>
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteArtifactInput {
  /**
   * <p>The unique identifier of the agent space that contains the artifact.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the artifact to delete.</p>
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
   * <p>The unique identifier of the integration to delete.</p>
   * @public
   */
  integrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationOutput {}

/**
 * <p>Request structure for removing a single member from an agent space.</p>
 * @public
 */
export interface DeleteMembershipRequest {
  /**
   * <p>The unique identifier of the application that contains the agent space.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the agent space to revoke access from.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the membership to delete.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The type of member to remove.</p>
   * @public
   */
  memberType?: MembershipType | undefined;
}

/**
 * <p>Response structure for removing a single member from an agent space.</p>
 * @public
 */
export interface DeleteMembershipResponse {}

/**
 * <p>Input for deleting a target domain.</p>
 * @public
 */
export interface DeleteTargetDomainInput {
  /**
   * <p>The unique identifier of the target domain to delete.</p>
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * <p>Output for the DeleteTargetDomain operation.</p>
 * @public
 */
export interface DeleteTargetDomainOutput {
  /**
   * <p>The unique identifier of the deleted target domain.</p>
   * @public
   */
  targetDomainId?: string | undefined;
}

/**
 * <p>Represents an endpoint discovered during a pentest job.</p>
 * @public
 */
export interface DiscoveredEndpoint {
  /**
   * <p>The URI of the discovered endpoint.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>The unique identifier of the pentest job that discovered the endpoint.</p>
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * <p>The unique identifier of the task that discovered the endpoint.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The unique identifier of the agent space associated with the discovered endpoint.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The evidence that led to the discovery of the endpoint.</p>
   * @public
   */
  evidence?: string | undefined;

  /**
   * <p>The HTTP operation associated with the discovered endpoint.</p>
   * @public
   */
  operation?: string | undefined;

  /**
   * <p>A description of the discovered endpoint.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Contains summary information about a security finding.</p>
 * @public
 */
export interface FindingSummary {
  /**
   * <p>The unique identifier of the finding.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>The unique identifier of the agent space associated with the finding.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the pentest associated with the finding.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The unique identifier of the pentest job that produced the finding.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the code review associated with the finding.</p>
   * @public
   */
  codeReviewId?: string | undefined;

  /**
   * <p>The unique identifier of the code review job that produced the finding.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The name of the finding.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The current status of the finding.</p>
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * <p>The type of security risk identified by the finding.</p>
   * @public
   */
  riskType?: string | undefined;

  /**
   * <p>The risk level of the finding.</p>
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * <p>The confidence level of the finding.</p>
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * <p>The date and time the finding was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the finding was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetArtifactInput {
  /**
   * <p>The unique identifier of the agent space that contains the artifact.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the artifact to retrieve.</p>
   * @public
   */
  artifactId: string | undefined;
}

/**
 * @public
 */
export interface GetArtifactOutput {
  /**
   * <p>The unique identifier of the agent space that contains the artifact.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the artifact.</p>
   * @public
   */
  artifactId: string | undefined;

  /**
   * <p>The artifact content and type.</p>
   * @public
   */
  artifact: Artifact | undefined;

  /**
   * <p>The file name of the artifact.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The date and time the artifact was last updated, in UTC format.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetIntegrationInput {
  /**
   * <p>The unique identifier of the integration to retrieve.</p>
   * @public
   */
  integrationId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationOutput {
  /**
   * <p>The unique identifier of the integration.</p>
   * @public
   */
  integrationId: string | undefined;

  /**
   * <p>The installation identifier from the integration provider.</p>
   * @public
   */
  installationId: string | undefined;

  /**
   * <p>The integration provider.</p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The type of the integration provider.</p>
   * @public
   */
  providerType: ProviderType | undefined;

  /**
   * <p>The display name of the integration.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The identifier of the AWS KMS key used to encrypt data associated with the integration.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * <p>Contains metadata about a GitHub repository that is integrated with the service.</p>
 * @public
 */
export interface GitHubRepositoryMetadata {
  /**
   * <p>The name of the GitHub repository.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The provider-specific resource identifier for the GitHub repository.</p>
   * @public
   */
  providerResourceId: string | undefined;

  /**
   * <p>The owner of the GitHub repository.</p>
   * @public
   */
  owner: string | undefined;

  /**
   * <p>The access type of the GitHub repository. Valid values are PRIVATE and PUBLIC.</p>
   * @public
   */
  accessType?: AccessType | undefined;
}

/**
 * <p>Represents a GitHub repository resource used in an integration.</p>
 * @public
 */
export interface GitHubRepositoryResource {
  /**
   * <p>The name of the GitHub repository.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The owner of the GitHub repository.</p>
   * @public
   */
  owner: string | undefined;
}

/**
 * <p>The capabilities enabled for a GitHub resource integration.</p>
 * @public
 */
export interface GitHubResourceCapabilities {
  /**
   * <p>Indicates whether the integration can leave comments on pull requests.</p>
   * @public
   */
  leaveComments?: boolean | undefined;

  /**
   * <p>Indicates whether the integration can create code remediation pull requests.</p>
   * @public
   */
  remediateCode?: boolean | undefined;
}

/**
 * @public
 */
export interface InitiateProviderRegistrationInput {
  /**
   * <p>The provider to initiate registration with. Currently, only GITHUB is supported.</p>
   * @public
   */
  provider: Provider | undefined;
}

/**
 * @public
 */
export interface InitiateProviderRegistrationOutput {
  /**
   * <p>The URL to redirect the user to for completing the OAuth authorization.</p>
   * @public
   */
  redirectTo: string | undefined;

  /**
   * <p>The CSRF state token to use when completing the OAuth flow.</p>
   * @public
   */
  csrfState: string | undefined;
}

/**
 * <p>Represents an integrated resource from a third-party provider. This is a union type that contains provider-specific resource information.</p>
 * @public
 */
export type IntegratedResource =
  | IntegratedResource.GithubRepositoryMember
  | IntegratedResource.$UnknownMember;

/**
 * @public
 */
export namespace IntegratedResource {
  /**
   * <p>The GitHub repository resource information.</p>
   * @public
   */
  export interface GithubRepositoryMember {
    githubRepository: GitHubRepositoryResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    githubRepository?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    githubRepository: (value: GitHubRepositoryResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The capabilities for an integrated resource from a third-party provider. This is a union type that contains provider-specific capabilities.</p>
 * @public
 */
export type ProviderResourceCapabilities =
  | ProviderResourceCapabilities.GithubMember
  | ProviderResourceCapabilities.$UnknownMember;

/**
 * @public
 */
export namespace ProviderResourceCapabilities {
  /**
   * <p>The GitHub-specific resource capabilities.</p>
   * @public
   */
  export interface GithubMember {
    github: GitHubResourceCapabilities;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    github: (value: GitHubResourceCapabilities) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Represents an input item for updating integrated resources, including the resource and its capabilities.</p>
 * @public
 */
export interface IntegratedResourceInputItem {
  /**
   * <p>The integrated resource to update.</p>
   * @public
   */
  resource: IntegratedResource | undefined;

  /**
   * <p>The capabilities to enable for the integrated resource.</p>
   * @public
   */
  capabilities?: ProviderResourceCapabilities | undefined;
}

/**
 * <p>Contains metadata about an integrated resource. This is a union type that contains provider-specific metadata.</p>
 * @public
 */
export type IntegratedResourceMetadata =
  | IntegratedResourceMetadata.GithubRepositoryMember
  | IntegratedResourceMetadata.$UnknownMember;

/**
 * @public
 */
export namespace IntegratedResourceMetadata {
  /**
   * <p>The GitHub repository metadata.</p>
   * @public
   */
  export interface GithubRepositoryMember {
    githubRepository: GitHubRepositoryMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    githubRepository?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    githubRepository: (value: GitHubRepositoryMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains summary information about an integrated resource.</p>
 * @public
 */
export interface IntegratedResourceSummary {
  /**
   * <p>The unique identifier of the integration that provides access to the resource.</p>
   * @public
   */
  integrationId: string | undefined;

  /**
   * <p>The metadata for the integrated resource.</p>
   * @public
   */
  resource: IntegratedResourceMetadata | undefined;

  /**
   * <p>The capabilities enabled for the integrated resource.</p>
   * @public
   */
  capabilities?: ProviderResourceCapabilities | undefined;
}

/**
 * <p>A filter for listing integrations. This is a union type where you can filter by provider or provider type.</p>
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
   * <p>Filter integrations by provider.</p>
   * @public
   */
  export interface ProviderMember {
    provider: Provider;
    providerType?: never;
    $unknown?: never;
  }

  /**
   * <p>Filter integrations by provider type.</p>
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
   * <p>A filter to apply to the list of integrations.</p>
   * @public
   */
  filter?: IntegrationFilter | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about an integration.</p>
 * @public
 */
export interface IntegrationSummary {
  /**
   * <p>The unique identifier of the integration.</p>
   * @public
   */
  integrationId: string | undefined;

  /**
   * <p>The installation identifier from the integration provider.</p>
   * @public
   */
  installationId: string | undefined;

  /**
   * <p>The integration provider.</p>
   * @public
   */
  provider: Provider | undefined;

  /**
   * <p>The type of the integration provider.</p>
   * @public
   */
  providerType: ProviderType | undefined;

  /**
   * <p>The display name of the integration.</p>
   * @public
   */
  displayName: string | undefined;
}

/**
 * @public
 */
export interface ListIntegrationsOutput {
  /**
   * <p>The list of integration summaries.</p>
   * @public
   */
  integrationSummaries: IntegrationSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListArtifactsInput {
  /**
   * <p>The unique identifier of the agent space to list artifacts for.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListArtifactsOutput {
  /**
   * <p>The list of artifact summaries.</p>
   * @public
   */
  artifactSummaries: ArtifactSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for ListCodeReviewJobsForCodeReview operation.</p>
 * @public
 */
export interface ListCodeReviewJobsForCodeReviewInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier of the code review to list jobs for.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Output for the ListCodeReviewJobsForCodeReview operation.</p>
 * @public
 */
export interface ListCodeReviewJobsForCodeReviewOutput {
  /**
   * <p>The list of code review job summaries.</p>
   * @public
   */
  codeReviewJobSummaries?: CodeReviewJobSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for listing tasks associated with a code review job.</p>
 * @public
 */
export interface ListCodeReviewJobTasksInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier of the code review job to list tasks for.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>Filter tasks by step name.</p>
   * @public
   */
  stepName?: StepName | undefined;

  /**
   * <p>Filter tasks by category name.</p>
   * @public
   */
  categoryName?: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Output for the ListCodeReviewJobTasks operation.</p>
 * @public
 */
export interface ListCodeReviewJobTasksOutput {
  /**
   * <p>The list of code review job task summaries.</p>
   * @public
   */
  codeReviewJobTaskSummaries?: CodeReviewJobTaskSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for listing code reviews with optional filtering.</p>
 * @public
 */
export interface ListCodeReviewsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier of the agent space to list code reviews for.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Output for the ListCodeReviews operation.</p>
 * @public
 */
export interface ListCodeReviewsOutput {
  /**
   * <p>The list of code review summaries.</p>
   * @public
   */
  codeReviewSummaries?: CodeReviewSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for ListDiscoveredEndpoints operation.</p>
 * @public
 */
export interface ListDiscoveredEndpointsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier of the pentest job to list discovered endpoints for.</p>
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>A prefix to filter discovered endpoints by URI.</p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Output for the ListDiscoveredEndpoints operation.</p>
 * @public
 */
export interface ListDiscoveredEndpointsOutput {
  /**
   * <p>The list of discovered endpoints.</p>
   * @public
   */
  discoveredEndpoints?: DiscoveredEndpoint[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for ListFindings operation with filtering support.</p>
 * @public
 */
export interface ListFindingsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier of the pentest job to list findings for.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the code review job to list findings for. Mutually exclusive with pentestJobId.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter findings by risk type.</p>
   * @public
   */
  riskType?: string | undefined;

  /**
   * <p>Filter findings by risk level.</p>
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * <p>Filter findings by status.</p>
   * @public
   */
  status?: FindingStatus | undefined;

  /**
   * <p>Filter findings by confidence level.</p>
   * @public
   */
  confidence?: ConfidenceLevel | undefined;

  /**
   * <p>Filter findings by name.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Output for the ListFindings operation.</p>
 * @public
 */
export interface ListFindingsOutput {
  /**
   * <p>The list of finding summaries.</p>
   * @public
   */
  findingsSummaries?: FindingSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIntegratedResourcesInput {
  /**
   * <p>The unique identifier of the agent space to list integrated resources for.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the integration to filter by.</p>
   * @public
   */
  integrationId?: string | undefined;

  /**
   * <p>The type of resource to filter by.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListIntegratedResourcesOutput {
  /**
   * <p>The list of integrated resource summaries.</p>
   * @public
   */
  integratedResourceSummaries: IntegratedResourceSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Request structure for listing agent space members.</p>
 * @public
 */
export interface ListMembershipsRequest {
  /**
   * <p>The unique identifier of the application that contains the agent space.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the agent space to list memberships for.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>Filter memberships by member type.</p>
   * @public
   */
  memberType?: MembershipTypeFilter | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains metadata about a user member, including the username and email address.</p>
 * @public
 */
export interface UserMetadata {
  /**
   * <p>The username of the user.</p>
   * @public
   */
  username: string | undefined;

  /**
   * <p>The email address of the user.</p>
   * @public
   */
  email: string | undefined;
}

/**
 * <p>Contains metadata about a member. This is a union type that contains member-type-specific metadata.</p>
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
   * <p>The user metadata for the member.</p>
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
 * <p>Contains summary information about a membership.</p>
 * @public
 */
export interface MembershipSummary {
  /**
   * <p>The unique identifier of the membership.</p>
   * @public
   */
  membershipId: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The type of member.</p>
   * @public
   */
  memberType: MembershipType | undefined;

  /**
   * <p>The configuration for the membership.</p>
   * @public
   */
  config?: MembershipConfig | undefined;

  /**
   * <p>The metadata for the member.</p>
   * @public
   */
  metadata?: MemberMetadata | undefined;

  /**
   * <p>The date and time the membership was created, in UTC format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the membership was last updated, in UTC format.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The identifier of the entity that created the membership.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The identifier of the entity that last updated the membership.</p>
   * @public
   */
  updatedBy: string | undefined;
}

/**
 * <p>Response structure for listing members associated to an agent space.</p>
 * @public
 */
export interface ListMembershipsResponse {
  /**
   * <p>The list of membership summaries.</p>
   * @public
   */
  membershipSummaries: MembershipSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for ListPentestJobsForPentest operation.</p>
 * @public
 */
export interface ListPentestJobsForPentestInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier of the pentest to list jobs for.</p>
   * @public
   */
  pentestId: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a pentest job.</p>
 * @public
 */
export interface PentestJobSummary {
  /**
   * <p>The unique identifier of the pentest job.</p>
   * @public
   */
  pentestJobId: string | undefined;

  /**
   * <p>The unique identifier of the pentest associated with the job.</p>
   * @public
   */
  pentestId: string | undefined;

  /**
   * <p>The title of the pentest job.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The current status of the pentest job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The date and time the pentest job was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest job was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the ListPentestJobsForPentest operation.</p>
 * @public
 */
export interface ListPentestJobsForPentestOutput {
  /**
   * <p>The list of pentest job summaries.</p>
   * @public
   */
  pentestJobSummaries?: PentestJobSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for listing tasks associated with a pentest job.</p>
 * @public
 */
export interface ListPentestJobTasksInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The unique identifier of the pentest job to list tasks for.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>Filter tasks by step name. Valid values include PREFLIGHT, STATIC_ANALYSIS, PENTEST, and FINALIZING.</p>
   * @public
   */
  stepName?: StepName | undefined;

  /**
   * <p>Filter tasks by category name.</p>
   * @public
   */
  categoryName?: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a task.</p>
 * @public
 */
export interface TaskSummary {
  /**
   * <p>The unique identifier of the task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>The unique identifier of the pentest associated with the task.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The unique identifier of the pentest job that contains the task.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The title of the task.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The type of security risk the task is testing for.</p>
   * @public
   */
  riskType?: RiskType | undefined;

  /**
   * <p>The current execution status of the task.</p>
   * @public
   */
  executionStatus?: TaskExecutionStatus | undefined;

  /**
   * <p>The date and time the task was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the task was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the ListPentestJobTasks operation.</p>
 * @public
 */
export interface ListPentestJobTasksOutput {
  /**
   * <p>The list of task summaries.</p>
   * @public
   */
  taskSummaries?: TaskSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for listing pentests with optional filtering.</p>
 * @public
 */
export interface ListPentestsInput {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The unique identifier of the agent space to list pentests for.</p>
   * @public
   */
  agentSpaceId: string | undefined;
}

/**
 * <p>Contains summary information about a pentest.</p>
 * @public
 */
export interface PentestSummary {
  /**
   * <p>The unique identifier of the pentest.</p>
   * @public
   */
  pentestId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The title of the pentest.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The date and time the pentest was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>Output for the ListPentests operation.</p>
 * @public
 */
export interface ListPentestsOutput {
  /**
   * <p>The list of pentest summaries.</p>
   * @public
   */
  pentestSummaries?: PentestSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for ListTagsForResource operation.</p>
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Output for ListTagsForResource operation.</p>
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Input for listing target domains.</p>
 * @public
 */
export interface ListTargetDomainsInput {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a target domain.</p>
 * @public
 */
export interface TargetDomainSummary {
  /**
   * <p>The unique identifier of the target domain.</p>
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The current verification status of the target domain.</p>
   * @public
   */
  verificationStatus?: TargetDomainStatus | undefined;
}

/**
 * <p>Output for the ListTargetDomains operation.</p>
 * @public
 */
export interface ListTargetDomainsOutput {
  /**
   * <p>The list of target domain summaries.</p>
   * @public
   */
  targetDomainSummaries?: TargetDomainSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request. For subsequent calls, use the nextToken value returned from the previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for the StartCodeRemediation operation.</p>
 * @public
 */
export interface StartCodeRemediationInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the pentest job that produced the findings. Mutually exclusive with <code>codeReviewJobId</code>.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the code review job that produced the findings. Mutually exclusive with <code>pentestJobId</code>.</p>
   * @public
   */
  codeReviewJobId?: string | undefined;

  /**
   * <p>The list of finding identifiers to initiate code remediation for.</p>
   * @public
   */
  findingIds: string[] | undefined;
}

/**
 * <p>Output for the StartCodeRemediation operation.</p>
 * @public
 */
export interface StartCodeRemediationOutput {}

/**
 * <p>Input for starting the execution of a code review.</p>
 * @public
 */
export interface StartCodeReviewJobInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the code review to start a job for.</p>
   * @public
   */
  codeReviewId: string | undefined;
}

/**
 * <p>Output for the StartCodeReviewJob operation.</p>
 * @public
 */
export interface StartCodeReviewJobOutput {
  /**
   * <p>The title of the code review job.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The current status of the code review job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The date and time the code review job was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review job was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The unique identifier of the code review.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The unique identifier of the started code review job.</p>
   * @public
   */
  codeReviewJobId: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * <p>Input for starting the execution of a pentest.</p>
 * @public
 */
export interface StartPentestJobInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the pentest to start a job for.</p>
   * @public
   */
  pentestId: string | undefined;
}

/**
 * <p>Output for the StartPentestJob operation.</p>
 * @public
 */
export interface StartPentestJobOutput {
  /**
   * <p>The title of the pentest job.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The current status of the pentest job.</p>
   * @public
   */
  status?: JobStatus | undefined;

  /**
   * <p>The date and time the pentest job was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest job was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The unique identifier of the pentest.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The unique identifier of the started pentest job.</p>
   * @public
   */
  pentestJobId?: string | undefined;

  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * <p>Input for stopping the execution of a code review job.</p>
 * @public
 */
export interface StopCodeReviewJobInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the code review job to stop.</p>
   * @public
   */
  codeReviewJobId: string | undefined;
}

/**
 * <p>Output for the StopCodeReviewJob operation.</p>
 * @public
 */
export interface StopCodeReviewJobOutput {}

/**
 * <p>Input for stopping the execution of a pentest.</p>
 * @public
 */
export interface StopPentestJobInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the pentest job to stop.</p>
   * @public
   */
  pentestJobId: string | undefined;
}

/**
 * <p>Output for the StopPentestJob operation.</p>
 * @public
 */
export interface StopPentestJobOutput {}

/**
 * <p>Input for TagResource operation.</p>
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p>Output for TagResource operation.</p>
 * @public
 */
export interface TagResourceOutput {}

/**
 * <p>Input for updating a target domain.</p>
 * @public
 */
export interface UpdateTargetDomainInput {
  /**
   * <p>The unique identifier of the target domain to update.</p>
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * <p>The updated verification method for the target domain.</p>
   * @public
   */
  verificationMethod: DomainVerificationMethod | undefined;
}

/**
 * <p>Output for the UpdateTargetDomain operation.</p>
 * @public
 */
export interface UpdateTargetDomainOutput {
  /**
   * <p>The unique identifier of the target domain.</p>
   * @public
   */
  targetDomainId: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName: string | undefined;

  /**
   * <p>The current verification status of the target domain.</p>
   * @public
   */
  verificationStatus: TargetDomainStatus | undefined;

  /**
   * <p>The reason for the current target domain verification status.</p>
   * @public
   */
  verificationStatusReason?: string | undefined;

  /**
   * <p>The updated verification details for the target domain.</p>
   * @public
   */
  verificationDetails?: VerificationDetails | undefined;

  /**
   * <p>The date and time the target domain was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was verified, in UTC format.</p>
   * @public
   */
  verifiedAt?: Date | undefined;
}

/**
 * <p>Input for UntagResource operation.</p>
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p>Output for UntagResource operation.</p>
 * @public
 */
export interface UntagResourceOutput {}

/**
 * <p>Input for updating an existing code review.</p>
 * @public
 */
export interface UpdateCodeReviewInput {
  /**
   * <p>The unique identifier of the code review to update.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated title of the code review.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The updated assets for the code review.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The updated IAM service role for the code review.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The updated CloudWatch Logs configuration for the code review.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The updated code remediation strategy for the code review.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * <p>Output for the UpdateCodeReview operation.</p>
 * @public
 */
export interface UpdateCodeReviewOutput {
  /**
   * <p>The unique identifier of the code review.</p>
   * @public
   */
  codeReviewId: string | undefined;

  /**
   * <p>The title of the code review.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The date and time the code review was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the code review was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The assets included in the code review.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The IAM service role used for the code review.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the code review.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the code review.</p>
   * @public
   */
  agentSpaceId?: string | undefined;

  /**
   * <p>The code remediation strategy for the code review.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * <p>Input for updating an existing security finding.</p>
 * @public
 */
export interface UpdateFindingInput {
  /**
   * <p>The unique identifier of the finding to update.</p>
   * @public
   */
  findingId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the finding.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated risk level for the finding.</p>
   * @public
   */
  riskLevel?: RiskLevel | undefined;

  /**
   * <p>The updated status for the finding.</p>
   * @public
   */
  status?: FindingStatus | undefined;
}

/**
 * <p>Output for the UpdateFinding operation.</p>
 * @public
 */
export interface UpdateFindingOutput {}

/**
 * @public
 */
export interface UpdateIntegratedResourcesInput {
  /**
   * <p>The unique identifier of the agent space.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The unique identifier of the integration.</p>
   * @public
   */
  integrationId: string | undefined;

  /**
   * <p>The list of integrated resource items to update.</p>
   * @public
   */
  items: IntegratedResourceInputItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateIntegratedResourcesOutput {}

/**
 * <p>Input for updating an existing pentest.</p>
 * @public
 */
export interface UpdatePentestInput {
  /**
   * <p>The unique identifier of the pentest to update.</p>
   * @public
   */
  pentestId: string | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId: string | undefined;

  /**
   * <p>The updated title of the pentest.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The updated assets for the pentest.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The updated list of risk types to exclude from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The updated IAM service role for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The updated CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The updated VPC configuration for the pentest.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The updated network traffic configuration for the pentest.</p>
   * @public
   */
  networkTrafficConfig?: NetworkTrafficConfig | undefined;

  /**
   * <p>The updated code remediation strategy for the pentest.</p>
   * @public
   */
  codeRemediationStrategy?: CodeRemediationStrategy | undefined;
}

/**
 * <p>Output for the UpdatePentest operation.</p>
 * @public
 */
export interface UpdatePentestOutput {
  /**
   * <p>The unique identifier of the pentest.</p>
   * @public
   */
  pentestId?: string | undefined;

  /**
   * <p>The title of the pentest.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The date and time the pentest was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the pentest was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The assets included in the pentest.</p>
   * @public
   */
  assets?: Assets | undefined;

  /**
   * <p>The list of risk types excluded from the pentest.</p>
   * @public
   */
  excludeRiskTypes?: RiskType[] | undefined;

  /**
   * <p>The IAM service role used for the pentest.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The CloudWatch Logs configuration for the pentest.</p>
   * @public
   */
  logConfig?: CloudWatchLog | undefined;

  /**
   * <p>The unique identifier of the agent space that contains the pentest.</p>
   * @public
   */
  agentSpaceId?: string | undefined;
}

/**
 * <p>Input for verifying ownership for a registered target domain in an agent space.</p>
 * @public
 */
export interface VerifyTargetDomainInput {
  /**
   * <p>The unique identifier of the target domain to verify.</p>
   * @public
   */
  targetDomainId: string | undefined;
}

/**
 * <p>Output for verifying ownership for a registered target domain in an agent space.</p>
 * @public
 */
export interface VerifyTargetDomainOutput {
  /**
   * <p>The unique identifier of the target domain.</p>
   * @public
   */
  targetDomainId?: string | undefined;

  /**
   * <p>The domain name of the target domain.</p>
   * @public
   */
  domainName?: string | undefined;

  /**
   * <p>The date and time the target domain was created, in UTC format.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was last updated, in UTC format.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The date and time the target domain was verified, in UTC format.</p>
   * @public
   */
  verifiedAt?: Date | undefined;

  /**
   * <p>The verification status of the target domain.</p>
   * @public
   */
  status?: TargetDomainStatus | undefined;

  /**
   * <p>The reason for the current target domain verification status.</p>
   * @public
   */
  verificationStatusReason?: string | undefined;
}
