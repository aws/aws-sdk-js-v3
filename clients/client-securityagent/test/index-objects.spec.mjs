import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessType,
  Actor$,
  AddArtifact$,
  AddArtifactCommand,
  AddArtifactInput$,
  AddArtifactOutput$,
  AgentSpace$,
  AgentSpaceSummary$,
  ApplicationSummary$,
  Artifact$,
  ArtifactMetadataItem$,
  ArtifactSummary$,
  ArtifactType,
  Assets$,
  Authentication$,
  AuthenticationProviderType,
  AWSResources$,
  BatchCreateSecurityRequirementResult$,
  BatchCreateSecurityRequirements$,
  BatchCreateSecurityRequirementsCommand,
  BatchCreateSecurityRequirementsInput$,
  BatchCreateSecurityRequirementsOutput$,
  BatchDeleteCodeReviews$,
  BatchDeleteCodeReviewsCommand,
  BatchDeleteCodeReviewsInput$,
  BatchDeleteCodeReviewsOutput$,
  BatchDeletePentests$,
  BatchDeletePentestsCommand,
  BatchDeletePentestsInput$,
  BatchDeletePentestsOutput$,
  BatchDeleteSecurityRequirements$,
  BatchDeleteSecurityRequirementsCommand,
  BatchDeleteSecurityRequirementsInput$,
  BatchDeleteSecurityRequirementsOutput$,
  BatchDeleteThreatModels$,
  BatchDeleteThreatModelsCommand,
  BatchDeleteThreatModelsInput$,
  BatchDeleteThreatModelsOutput$,
  BatchGetAgentSpaces$,
  BatchGetAgentSpacesCommand,
  BatchGetAgentSpacesInput$,
  BatchGetAgentSpacesOutput$,
  BatchGetArtifactMetadata$,
  BatchGetArtifactMetadataCommand,
  BatchGetArtifactMetadataInput$,
  BatchGetArtifactMetadataOutput$,
  BatchGetCodeReviewJobs$,
  BatchGetCodeReviewJobsCommand,
  BatchGetCodeReviewJobsInput$,
  BatchGetCodeReviewJobsOutput$,
  BatchGetCodeReviewJobTasks$,
  BatchGetCodeReviewJobTasksCommand,
  BatchGetCodeReviewJobTasksInput$,
  BatchGetCodeReviewJobTasksOutput$,
  BatchGetCodeReviews$,
  BatchGetCodeReviewsCommand,
  BatchGetCodeReviewsInput$,
  BatchGetCodeReviewsOutput$,
  BatchGetFindings$,
  BatchGetFindingsCommand,
  BatchGetFindingsInput$,
  BatchGetFindingsOutput$,
  BatchGetPentestJobs$,
  BatchGetPentestJobsCommand,
  BatchGetPentestJobsInput$,
  BatchGetPentestJobsOutput$,
  BatchGetPentestJobTasks$,
  BatchGetPentestJobTasksCommand,
  BatchGetPentestJobTasksInput$,
  BatchGetPentestJobTasksOutput$,
  BatchGetPentests$,
  BatchGetPentestsCommand,
  BatchGetPentestsInput$,
  BatchGetPentestsOutput$,
  BatchGetSecurityRequirementResult$,
  BatchGetSecurityRequirements$,
  BatchGetSecurityRequirementsCommand,
  BatchGetSecurityRequirementsInput$,
  BatchGetSecurityRequirementsOutput$,
  BatchGetTargetDomains$,
  BatchGetTargetDomainsCommand,
  BatchGetTargetDomainsInput$,
  BatchGetTargetDomainsOutput$,
  BatchGetThreatModelJobs$,
  BatchGetThreatModelJobsCommand,
  BatchGetThreatModelJobsInput$,
  BatchGetThreatModelJobsOutput$,
  BatchGetThreatModelJobTasks$,
  BatchGetThreatModelJobTasksCommand,
  BatchGetThreatModelJobTasksInput$,
  BatchGetThreatModelJobTasksOutput$,
  BatchGetThreatModels$,
  BatchGetThreatModelsCommand,
  BatchGetThreatModelsInput$,
  BatchGetThreatModelsOutput$,
  BatchGetThreats$,
  BatchGetThreatsCommand,
  BatchGetThreatsInput$,
  BatchGetThreatsOutput$,
  BatchSecurityRequirementError$,
  BatchUpdateSecurityRequirements$,
  BatchUpdateSecurityRequirementsCommand,
  BatchUpdateSecurityRequirementsInput$,
  BatchUpdateSecurityRequirementsOutput$,
  BitbucketIntegrationInput$,
  BitbucketRepositoryMetadata$,
  BitbucketRepositoryResource$,
  BitbucketResourceCapabilities$,
  Category$,
  CleanUpStrategy,
  CloudWatchLog$,
  CodeLocation$,
  CodeRemediationStrategy,
  CodeRemediationTask$,
  CodeRemediationTaskDetails$,
  CodeRemediationTaskStatus,
  CodeReview$,
  CodeReviewJob$,
  CodeReviewJobSummary$,
  CodeReviewJobTask$,
  CodeReviewJobTaskSummary$,
  CodeReviewSettings$,
  CodeReviewSummary$,
  ConfidenceLevel,
  ConflictException,
  ConflictException$,
  ConfluenceDocumentMetadata$,
  ConfluenceDocumentResource$,
  ConfluenceIntegrationInput$,
  ConfluenceResourceCapabilities$,
  ContextType,
  CreateAgentSpace$,
  CreateAgentSpaceCommand,
  CreateAgentSpaceInput$,
  CreateAgentSpaceOutput$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateCodeReview$,
  CreateCodeReviewCommand,
  CreateCodeReviewInput$,
  CreateCodeReviewOutput$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationInput$,
  CreateIntegrationOutput$,
  CreateMembership$,
  CreateMembershipCommand,
  CreateMembershipRequest$,
  CreateMembershipResponse$,
  CreatePentest$,
  CreatePentestCommand,
  CreatePentestInput$,
  CreatePentestOutput$,
  CreatePrivateConnection$,
  CreatePrivateConnectionCommand,
  CreatePrivateConnectionInput$,
  CreatePrivateConnectionOutput$,
  CreateSecurityRequirementEntry$,
  CreateSecurityRequirementPack$,
  CreateSecurityRequirementPackCommand,
  CreateSecurityRequirementPackInput$,
  CreateSecurityRequirementPackOutput$,
  CreateTargetDomain$,
  CreateTargetDomainCommand,
  CreateTargetDomainInput$,
  CreateTargetDomainOutput$,
  CreateThreat$,
  CreateThreatCommand,
  CreateThreatInput$,
  CreateThreatModel$,
  CreateThreatModelCommand,
  CreateThreatModelInput$,
  CreateThreatModelOutput$,
  CreateThreatOutput$,
  CustomHeader$,
  DeleteAgentSpace$,
  DeleteAgentSpaceCommand,
  DeleteAgentSpaceInput$,
  DeleteAgentSpaceOutput$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteArtifact$,
  DeleteArtifactCommand,
  DeleteArtifactInput$,
  DeleteArtifactOutput$,
  DeleteCodeReviewFailure$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationInput$,
  DeleteIntegrationOutput$,
  DeleteMembership$,
  DeleteMembershipCommand,
  DeleteMembershipRequest$,
  DeleteMembershipResponse$,
  DeletePentestFailure$,
  DeletePrivateConnection$,
  DeletePrivateConnectionCommand,
  DeletePrivateConnectionInput$,
  DeletePrivateConnectionOutput$,
  DeleteSecurityRequirementPack$,
  DeleteSecurityRequirementPackCommand,
  DeleteSecurityRequirementPackInput$,
  DeleteSecurityRequirementPackOutput$,
  DeleteTargetDomain$,
  DeleteTargetDomainCommand,
  DeleteTargetDomainInput$,
  DeleteTargetDomainOutput$,
  DeleteThreatModelFailure$,
  DescribePrivateConnection$,
  DescribePrivateConnectionCommand,
  DescribePrivateConnectionInput$,
  DescribePrivateConnectionOutput$,
  DiffSource$,
  DiscoveredEndpoint$,
  DNSRecordType,
  DnsVerification$,
  DocumentInfo$,
  DomainVerificationMethod,
  Endpoint$,
  ErrorCode,
  ErrorInformation$,
  ExecutionContext$,
  Finding$,
  FindingStatus,
  FindingSummary$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetArtifact$,
  GetArtifactCommand,
  GetArtifactInput$,
  GetArtifactOutput$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationInput$,
  GetIntegrationOutput$,
  GetSecurityRequirementPack$,
  GetSecurityRequirementPackCommand,
  GetSecurityRequirementPackInput$,
  GetSecurityRequirementPackOutput$,
  GitHubIntegrationInput$,
  GitHubRepositoryMetadata$,
  GitHubRepositoryResource$,
  GitHubResourceCapabilities$,
  GitLabIntegrationInput$,
  GitLabRepositoryMetadata$,
  GitLabRepositoryResource$,
  GitLabResourceCapabilities$,
  GitLabTokenType,
  HttpVerification$,
  IdCConfiguration$,
  ImportSecurityRequirements$,
  ImportSecurityRequirementsCommand,
  ImportSecurityRequirementsInput$,
  ImportSecurityRequirementsOutput$,
  ImportSource$,
  InitiateProviderRegistration$,
  InitiateProviderRegistrationCommand,
  InitiateProviderRegistrationInput$,
  InitiateProviderRegistrationOutput$,
  IntegratedDocument$,
  IntegratedRepository$,
  IntegratedResource$,
  IntegratedResourceInputItem$,
  IntegratedResourceMetadata$,
  IntegratedResourceSummary$,
  IntegrationFilter$,
  IntegrationSummary$,
  InternalServerException,
  InternalServerException$,
  IpAddressType,
  JobStatus,
  ListAgentSpaces$,
  ListAgentSpacesCommand,
  ListAgentSpacesInput$,
  ListAgentSpacesOutput$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListArtifacts$,
  ListArtifactsCommand,
  ListArtifactsInput$,
  ListArtifactsOutput$,
  ListCodeReviewJobsForCodeReview$,
  ListCodeReviewJobsForCodeReviewCommand,
  ListCodeReviewJobsForCodeReviewInput$,
  ListCodeReviewJobsForCodeReviewOutput$,
  ListCodeReviewJobTasks$,
  ListCodeReviewJobTasksCommand,
  ListCodeReviewJobTasksInput$,
  ListCodeReviewJobTasksOutput$,
  ListCodeReviews$,
  ListCodeReviewsCommand,
  ListCodeReviewsInput$,
  ListCodeReviewsOutput$,
  ListDiscoveredEndpoints$,
  ListDiscoveredEndpointsCommand,
  ListDiscoveredEndpointsInput$,
  ListDiscoveredEndpointsOutput$,
  ListFindings$,
  ListFindingsCommand,
  ListFindingsInput$,
  ListFindingsOutput$,
  ListIntegratedResources$,
  ListIntegratedResourcesCommand,
  ListIntegratedResourcesInput$,
  ListIntegratedResourcesOutput$,
  ListIntegrations$,
  ListIntegrationsCommand,
  ListIntegrationsInput$,
  ListIntegrationsOutput$,
  ListMemberships$,
  ListMembershipsCommand,
  ListMembershipsRequest$,
  ListMembershipsResponse$,
  ListPentestJobsForPentest$,
  ListPentestJobsForPentestCommand,
  ListPentestJobsForPentestInput$,
  ListPentestJobsForPentestOutput$,
  ListPentestJobTasks$,
  ListPentestJobTasksCommand,
  ListPentestJobTasksInput$,
  ListPentestJobTasksOutput$,
  ListPentests$,
  ListPentestsCommand,
  ListPentestsInput$,
  ListPentestsOutput$,
  ListPrivateConnections$,
  ListPrivateConnectionsCommand,
  ListPrivateConnectionsInput$,
  ListPrivateConnectionsOutput$,
  ListSecurityRequirementPackFilter$,
  ListSecurityRequirementPacks$,
  ListSecurityRequirementPacksCommand,
  ListSecurityRequirementPacksInput$,
  ListSecurityRequirementPacksOutput$,
  ListSecurityRequirements$,
  ListSecurityRequirementsCommand,
  ListSecurityRequirementsInput$,
  ListSecurityRequirementsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListTargetDomains$,
  ListTargetDomainsCommand,
  ListTargetDomainsInput$,
  ListTargetDomainsOutput$,
  ListThreatModelJobs$,
  ListThreatModelJobsCommand,
  ListThreatModelJobsInput$,
  ListThreatModelJobsOutput$,
  ListThreatModelJobTasks$,
  ListThreatModelJobTasksCommand,
  ListThreatModelJobTasksInput$,
  ListThreatModelJobTasksOutput$,
  ListThreatModels$,
  ListThreatModelsCommand,
  ListThreatModelsInput$,
  ListThreatModelsOutput$,
  ListThreats$,
  ListThreatsCommand,
  ListThreatsInput$,
  ListThreatsOutput$,
  LogLocation$,
  LogType,
  ManagementType,
  MemberMetadata$,
  MembershipConfig$,
  MembershipSummary$,
  MembershipType,
  MembershipTypeFilter,
  NetworkTrafficConfig$,
  NetworkTrafficRule$,
  NetworkTrafficRuleEffect,
  NetworkTrafficRuleType,
  paginateListAgentSpaces,
  paginateListApplications,
  paginateListArtifacts,
  paginateListCodeReviewJobsForCodeReview,
  paginateListCodeReviewJobTasks,
  paginateListCodeReviews,
  paginateListDiscoveredEndpoints,
  paginateListFindings,
  paginateListIntegratedResources,
  paginateListIntegrations,
  paginateListMemberships,
  paginateListPentestJobsForPentest,
  paginateListPentestJobTasks,
  paginateListPentests,
  paginateListPrivateConnections,
  paginateListSecurityRequirementPacks,
  paginateListSecurityRequirements,
  paginateListTargetDomains,
  paginateListThreatModelJobs,
  paginateListThreatModelJobTasks,
  paginateListThreatModels,
  paginateListThreats,
  Pentest$,
  PentestJob$,
  PentestJobSummary$,
  PentestSummary$,
  PrivateConnectionMode$,
  PrivateConnectionStatus,
  PrivateConnectionSummary$,
  PrivateConnectionType,
  Provider,
  ProviderInput$,
  ProviderResourceCapabilities$,
  ProviderType,
  ReportDestination$,
  ResourceConfigDnsResolution,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RiskLevel,
  RiskType,
  SecurityAgent,
  SecurityAgentClient,
  SecurityAgentServiceException,
  SecurityRequirementArtifact$,
  SecurityRequirementArtifactFormat,
  SecurityRequirementPackImportStatus,
  SecurityRequirementPackStatus,
  SecurityRequirementPackSummary$,
  SecurityRequirementSummary$,
  SelfManagedInput$,
  ServiceManagedInput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SkillType,
  SourceCodeRepository$,
  StartCodeRemediation$,
  StartCodeRemediationCommand,
  StartCodeRemediationInput$,
  StartCodeRemediationOutput$,
  StartCodeReviewJob$,
  StartCodeReviewJobCommand,
  StartCodeReviewJobInput$,
  StartCodeReviewJobOutput$,
  StartPentestJob$,
  StartPentestJobCommand,
  StartPentestJobInput$,
  StartPentestJobOutput$,
  StartThreatModelJob$,
  StartThreatModelJobCommand,
  StartThreatModelJobInput$,
  StartThreatModelJobOutput$,
  Step$,
  StepName,
  StepStatus,
  StopCodeReviewJob$,
  StopCodeReviewJobCommand,
  StopCodeReviewJobInput$,
  StopCodeReviewJobOutput$,
  StopPentestJob$,
  StopPentestJobCommand,
  StopPentestJobInput$,
  StopPentestJobOutput$,
  StopThreatModelJob$,
  StopThreatModelJobCommand,
  StopThreatModelJobInput$,
  StopThreatModelJobOutput$,
  StrideCategory,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TargetDomain$,
  TargetDomainStatus,
  TargetDomainSummary$,
  Task$,
  TaskExecutionStatus,
  TaskSummary$,
  Threat$,
  ThreatActor,
  ThreatAnchorShape$,
  ThreatEvidenceShape$,
  ThreatModel$,
  ThreatModelJob$,
  ThreatModelJobSummary$,
  ThreatModelJobTask$,
  ThreatModelJobTaskSummary$,
  ThreatModelSummary$,
  ThreatSeverity,
  ThreatStatus,
  ThreatSummary$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateAgentSpace$,
  UpdateAgentSpaceCommand,
  UpdateAgentSpaceInput$,
  UpdateAgentSpaceOutput$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateCodeReview$,
  UpdateCodeReviewCommand,
  UpdateCodeReviewInput$,
  UpdateCodeReviewOutput$,
  UpdateFinding$,
  UpdateFindingCommand,
  UpdateFindingInput$,
  UpdateFindingOutput$,
  UpdateIntegratedResources$,
  UpdateIntegratedResourcesCommand,
  UpdateIntegratedResourcesInput$,
  UpdateIntegratedResourcesOutput$,
  UpdatePentest$,
  UpdatePentestCommand,
  UpdatePentestInput$,
  UpdatePentestOutput$,
  UpdatePrivateConnectionCertificate$,
  UpdatePrivateConnectionCertificateCommand,
  UpdatePrivateConnectionCertificateInput$,
  UpdatePrivateConnectionCertificateOutput$,
  UpdateSecurityRequirementEntry$,
  UpdateSecurityRequirementPack$,
  UpdateSecurityRequirementPackCommand,
  UpdateSecurityRequirementPackInput$,
  UpdateSecurityRequirementPackOutput$,
  UpdateTargetDomain$,
  UpdateTargetDomainCommand,
  UpdateTargetDomainInput$,
  UpdateTargetDomainOutput$,
  UpdateThreat$,
  UpdateThreatCommand,
  UpdateThreatInput$,
  UpdateThreatModel$,
  UpdateThreatModelCommand,
  UpdateThreatModelInput$,
  UpdateThreatModelOutput$,
  UpdateThreatOutput$,
  UserConfig$,
  UserMetadata$,
  UserRole,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationMode,
  ValidationStatus,
  VerificationDetails$,
  VerificationScript$,
  VerificationScriptEnvVar$,
  VerifyTargetDomain$,
  VerifyTargetDomainCommand,
  VerifyTargetDomainInput$,
  VerifyTargetDomainOutput$,
  VpcConfig$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityAgentClient === "function");
assert(typeof SecurityAgent === "function");
// commands
assert(typeof AddArtifactCommand === "function");
assert(typeof AddArtifact$ === "object");
assert(typeof BatchCreateSecurityRequirementsCommand === "function");
assert(typeof BatchCreateSecurityRequirements$ === "object");
assert(typeof BatchDeleteCodeReviewsCommand === "function");
assert(typeof BatchDeleteCodeReviews$ === "object");
assert(typeof BatchDeletePentestsCommand === "function");
assert(typeof BatchDeletePentests$ === "object");
assert(typeof BatchDeleteSecurityRequirementsCommand === "function");
assert(typeof BatchDeleteSecurityRequirements$ === "object");
assert(typeof BatchDeleteThreatModelsCommand === "function");
assert(typeof BatchDeleteThreatModels$ === "object");
assert(typeof BatchGetAgentSpacesCommand === "function");
assert(typeof BatchGetAgentSpaces$ === "object");
assert(typeof BatchGetArtifactMetadataCommand === "function");
assert(typeof BatchGetArtifactMetadata$ === "object");
assert(typeof BatchGetCodeReviewJobsCommand === "function");
assert(typeof BatchGetCodeReviewJobs$ === "object");
assert(typeof BatchGetCodeReviewJobTasksCommand === "function");
assert(typeof BatchGetCodeReviewJobTasks$ === "object");
assert(typeof BatchGetCodeReviewsCommand === "function");
assert(typeof BatchGetCodeReviews$ === "object");
assert(typeof BatchGetFindingsCommand === "function");
assert(typeof BatchGetFindings$ === "object");
assert(typeof BatchGetPentestJobsCommand === "function");
assert(typeof BatchGetPentestJobs$ === "object");
assert(typeof BatchGetPentestJobTasksCommand === "function");
assert(typeof BatchGetPentestJobTasks$ === "object");
assert(typeof BatchGetPentestsCommand === "function");
assert(typeof BatchGetPentests$ === "object");
assert(typeof BatchGetSecurityRequirementsCommand === "function");
assert(typeof BatchGetSecurityRequirements$ === "object");
assert(typeof BatchGetTargetDomainsCommand === "function");
assert(typeof BatchGetTargetDomains$ === "object");
assert(typeof BatchGetThreatModelJobsCommand === "function");
assert(typeof BatchGetThreatModelJobs$ === "object");
assert(typeof BatchGetThreatModelJobTasksCommand === "function");
assert(typeof BatchGetThreatModelJobTasks$ === "object");
assert(typeof BatchGetThreatModelsCommand === "function");
assert(typeof BatchGetThreatModels$ === "object");
assert(typeof BatchGetThreatsCommand === "function");
assert(typeof BatchGetThreats$ === "object");
assert(typeof BatchUpdateSecurityRequirementsCommand === "function");
assert(typeof BatchUpdateSecurityRequirements$ === "object");
assert(typeof CreateAgentSpaceCommand === "function");
assert(typeof CreateAgentSpace$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateCodeReviewCommand === "function");
assert(typeof CreateCodeReview$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof CreateMembershipCommand === "function");
assert(typeof CreateMembership$ === "object");
assert(typeof CreatePentestCommand === "function");
assert(typeof CreatePentest$ === "object");
assert(typeof CreatePrivateConnectionCommand === "function");
assert(typeof CreatePrivateConnection$ === "object");
assert(typeof CreateSecurityRequirementPackCommand === "function");
assert(typeof CreateSecurityRequirementPack$ === "object");
assert(typeof CreateTargetDomainCommand === "function");
assert(typeof CreateTargetDomain$ === "object");
assert(typeof CreateThreatCommand === "function");
assert(typeof CreateThreat$ === "object");
assert(typeof CreateThreatModelCommand === "function");
assert(typeof CreateThreatModel$ === "object");
assert(typeof DeleteAgentSpaceCommand === "function");
assert(typeof DeleteAgentSpace$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteArtifactCommand === "function");
assert(typeof DeleteArtifact$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DeleteMembershipCommand === "function");
assert(typeof DeleteMembership$ === "object");
assert(typeof DeletePrivateConnectionCommand === "function");
assert(typeof DeletePrivateConnection$ === "object");
assert(typeof DeleteSecurityRequirementPackCommand === "function");
assert(typeof DeleteSecurityRequirementPack$ === "object");
assert(typeof DeleteTargetDomainCommand === "function");
assert(typeof DeleteTargetDomain$ === "object");
assert(typeof DescribePrivateConnectionCommand === "function");
assert(typeof DescribePrivateConnection$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetArtifactCommand === "function");
assert(typeof GetArtifact$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetSecurityRequirementPackCommand === "function");
assert(typeof GetSecurityRequirementPack$ === "object");
assert(typeof ImportSecurityRequirementsCommand === "function");
assert(typeof ImportSecurityRequirements$ === "object");
assert(typeof InitiateProviderRegistrationCommand === "function");
assert(typeof InitiateProviderRegistration$ === "object");
assert(typeof ListAgentSpacesCommand === "function");
assert(typeof ListAgentSpaces$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListArtifactsCommand === "function");
assert(typeof ListArtifacts$ === "object");
assert(typeof ListCodeReviewJobsForCodeReviewCommand === "function");
assert(typeof ListCodeReviewJobsForCodeReview$ === "object");
assert(typeof ListCodeReviewJobTasksCommand === "function");
assert(typeof ListCodeReviewJobTasks$ === "object");
assert(typeof ListCodeReviewsCommand === "function");
assert(typeof ListCodeReviews$ === "object");
assert(typeof ListDiscoveredEndpointsCommand === "function");
assert(typeof ListDiscoveredEndpoints$ === "object");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindings$ === "object");
assert(typeof ListIntegratedResourcesCommand === "function");
assert(typeof ListIntegratedResources$ === "object");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListIntegrations$ === "object");
assert(typeof ListMembershipsCommand === "function");
assert(typeof ListMemberships$ === "object");
assert(typeof ListPentestJobsForPentestCommand === "function");
assert(typeof ListPentestJobsForPentest$ === "object");
assert(typeof ListPentestJobTasksCommand === "function");
assert(typeof ListPentestJobTasks$ === "object");
assert(typeof ListPentestsCommand === "function");
assert(typeof ListPentests$ === "object");
assert(typeof ListPrivateConnectionsCommand === "function");
assert(typeof ListPrivateConnections$ === "object");
assert(typeof ListSecurityRequirementPacksCommand === "function");
assert(typeof ListSecurityRequirementPacks$ === "object");
assert(typeof ListSecurityRequirementsCommand === "function");
assert(typeof ListSecurityRequirements$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetDomainsCommand === "function");
assert(typeof ListTargetDomains$ === "object");
assert(typeof ListThreatModelJobsCommand === "function");
assert(typeof ListThreatModelJobs$ === "object");
assert(typeof ListThreatModelJobTasksCommand === "function");
assert(typeof ListThreatModelJobTasks$ === "object");
assert(typeof ListThreatModelsCommand === "function");
assert(typeof ListThreatModels$ === "object");
assert(typeof ListThreatsCommand === "function");
assert(typeof ListThreats$ === "object");
assert(typeof StartCodeRemediationCommand === "function");
assert(typeof StartCodeRemediation$ === "object");
assert(typeof StartCodeReviewJobCommand === "function");
assert(typeof StartCodeReviewJob$ === "object");
assert(typeof StartPentestJobCommand === "function");
assert(typeof StartPentestJob$ === "object");
assert(typeof StartThreatModelJobCommand === "function");
assert(typeof StartThreatModelJob$ === "object");
assert(typeof StopCodeReviewJobCommand === "function");
assert(typeof StopCodeReviewJob$ === "object");
assert(typeof StopPentestJobCommand === "function");
assert(typeof StopPentestJob$ === "object");
assert(typeof StopThreatModelJobCommand === "function");
assert(typeof StopThreatModelJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentSpaceCommand === "function");
assert(typeof UpdateAgentSpace$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateCodeReviewCommand === "function");
assert(typeof UpdateCodeReview$ === "object");
assert(typeof UpdateFindingCommand === "function");
assert(typeof UpdateFinding$ === "object");
assert(typeof UpdateIntegratedResourcesCommand === "function");
assert(typeof UpdateIntegratedResources$ === "object");
assert(typeof UpdatePentestCommand === "function");
assert(typeof UpdatePentest$ === "object");
assert(typeof UpdatePrivateConnectionCertificateCommand === "function");
assert(typeof UpdatePrivateConnectionCertificate$ === "object");
assert(typeof UpdateSecurityRequirementPackCommand === "function");
assert(typeof UpdateSecurityRequirementPack$ === "object");
assert(typeof UpdateTargetDomainCommand === "function");
assert(typeof UpdateTargetDomain$ === "object");
assert(typeof UpdateThreatCommand === "function");
assert(typeof UpdateThreat$ === "object");
assert(typeof UpdateThreatModelCommand === "function");
assert(typeof UpdateThreatModel$ === "object");
assert(typeof VerifyTargetDomainCommand === "function");
assert(typeof VerifyTargetDomain$ === "object");
// structural schemas
assert(typeof Actor$ === "object");
assert(typeof AddArtifactInput$ === "object");
assert(typeof AddArtifactOutput$ === "object");
assert(typeof AgentSpace$ === "object");
assert(typeof AgentSpaceSummary$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof Artifact$ === "object");
assert(typeof ArtifactMetadataItem$ === "object");
assert(typeof ArtifactSummary$ === "object");
assert(typeof Assets$ === "object");
assert(typeof Authentication$ === "object");
assert(typeof AWSResources$ === "object");
assert(typeof BatchCreateSecurityRequirementResult$ === "object");
assert(typeof BatchCreateSecurityRequirementsInput$ === "object");
assert(typeof BatchCreateSecurityRequirementsOutput$ === "object");
assert(typeof BatchDeleteCodeReviewsInput$ === "object");
assert(typeof BatchDeleteCodeReviewsOutput$ === "object");
assert(typeof BatchDeletePentestsInput$ === "object");
assert(typeof BatchDeletePentestsOutput$ === "object");
assert(typeof BatchDeleteSecurityRequirementsInput$ === "object");
assert(typeof BatchDeleteSecurityRequirementsOutput$ === "object");
assert(typeof BatchDeleteThreatModelsInput$ === "object");
assert(typeof BatchDeleteThreatModelsOutput$ === "object");
assert(typeof BatchGetAgentSpacesInput$ === "object");
assert(typeof BatchGetAgentSpacesOutput$ === "object");
assert(typeof BatchGetArtifactMetadataInput$ === "object");
assert(typeof BatchGetArtifactMetadataOutput$ === "object");
assert(typeof BatchGetCodeReviewJobsInput$ === "object");
assert(typeof BatchGetCodeReviewJobsOutput$ === "object");
assert(typeof BatchGetCodeReviewJobTasksInput$ === "object");
assert(typeof BatchGetCodeReviewJobTasksOutput$ === "object");
assert(typeof BatchGetCodeReviewsInput$ === "object");
assert(typeof BatchGetCodeReviewsOutput$ === "object");
assert(typeof BatchGetFindingsInput$ === "object");
assert(typeof BatchGetFindingsOutput$ === "object");
assert(typeof BatchGetPentestJobsInput$ === "object");
assert(typeof BatchGetPentestJobsOutput$ === "object");
assert(typeof BatchGetPentestJobTasksInput$ === "object");
assert(typeof BatchGetPentestJobTasksOutput$ === "object");
assert(typeof BatchGetPentestsInput$ === "object");
assert(typeof BatchGetPentestsOutput$ === "object");
assert(typeof BatchGetSecurityRequirementResult$ === "object");
assert(typeof BatchGetSecurityRequirementsInput$ === "object");
assert(typeof BatchGetSecurityRequirementsOutput$ === "object");
assert(typeof BatchGetTargetDomainsInput$ === "object");
assert(typeof BatchGetTargetDomainsOutput$ === "object");
assert(typeof BatchGetThreatModelJobsInput$ === "object");
assert(typeof BatchGetThreatModelJobsOutput$ === "object");
assert(typeof BatchGetThreatModelJobTasksInput$ === "object");
assert(typeof BatchGetThreatModelJobTasksOutput$ === "object");
assert(typeof BatchGetThreatModelsInput$ === "object");
assert(typeof BatchGetThreatModelsOutput$ === "object");
assert(typeof BatchGetThreatsInput$ === "object");
assert(typeof BatchGetThreatsOutput$ === "object");
assert(typeof BatchSecurityRequirementError$ === "object");
assert(typeof BatchUpdateSecurityRequirementsInput$ === "object");
assert(typeof BatchUpdateSecurityRequirementsOutput$ === "object");
assert(typeof BitbucketIntegrationInput$ === "object");
assert(typeof BitbucketRepositoryMetadata$ === "object");
assert(typeof BitbucketRepositoryResource$ === "object");
assert(typeof BitbucketResourceCapabilities$ === "object");
assert(typeof Category$ === "object");
assert(typeof CloudWatchLog$ === "object");
assert(typeof CodeLocation$ === "object");
assert(typeof CodeRemediationTask$ === "object");
assert(typeof CodeRemediationTaskDetails$ === "object");
assert(typeof CodeReview$ === "object");
assert(typeof CodeReviewJob$ === "object");
assert(typeof CodeReviewJobSummary$ === "object");
assert(typeof CodeReviewJobTask$ === "object");
assert(typeof CodeReviewJobTaskSummary$ === "object");
assert(typeof CodeReviewSettings$ === "object");
assert(typeof CodeReviewSummary$ === "object");
assert(typeof ConfluenceDocumentMetadata$ === "object");
assert(typeof ConfluenceDocumentResource$ === "object");
assert(typeof ConfluenceIntegrationInput$ === "object");
assert(typeof ConfluenceResourceCapabilities$ === "object");
assert(typeof CreateAgentSpaceInput$ === "object");
assert(typeof CreateAgentSpaceOutput$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateCodeReviewInput$ === "object");
assert(typeof CreateCodeReviewOutput$ === "object");
assert(typeof CreateIntegrationInput$ === "object");
assert(typeof CreateIntegrationOutput$ === "object");
assert(typeof CreateMembershipRequest$ === "object");
assert(typeof CreateMembershipResponse$ === "object");
assert(typeof CreatePentestInput$ === "object");
assert(typeof CreatePentestOutput$ === "object");
assert(typeof CreatePrivateConnectionInput$ === "object");
assert(typeof CreatePrivateConnectionOutput$ === "object");
assert(typeof CreateSecurityRequirementEntry$ === "object");
assert(typeof CreateSecurityRequirementPackInput$ === "object");
assert(typeof CreateSecurityRequirementPackOutput$ === "object");
assert(typeof CreateTargetDomainInput$ === "object");
assert(typeof CreateTargetDomainOutput$ === "object");
assert(typeof CreateThreatInput$ === "object");
assert(typeof CreateThreatModelInput$ === "object");
assert(typeof CreateThreatModelOutput$ === "object");
assert(typeof CreateThreatOutput$ === "object");
assert(typeof CustomHeader$ === "object");
assert(typeof DeleteAgentSpaceInput$ === "object");
assert(typeof DeleteAgentSpaceOutput$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteArtifactInput$ === "object");
assert(typeof DeleteArtifactOutput$ === "object");
assert(typeof DeleteCodeReviewFailure$ === "object");
assert(typeof DeleteIntegrationInput$ === "object");
assert(typeof DeleteIntegrationOutput$ === "object");
assert(typeof DeleteMembershipRequest$ === "object");
assert(typeof DeleteMembershipResponse$ === "object");
assert(typeof DeletePentestFailure$ === "object");
assert(typeof DeletePrivateConnectionInput$ === "object");
assert(typeof DeletePrivateConnectionOutput$ === "object");
assert(typeof DeleteSecurityRequirementPackInput$ === "object");
assert(typeof DeleteSecurityRequirementPackOutput$ === "object");
assert(typeof DeleteTargetDomainInput$ === "object");
assert(typeof DeleteTargetDomainOutput$ === "object");
assert(typeof DeleteThreatModelFailure$ === "object");
assert(typeof DescribePrivateConnectionInput$ === "object");
assert(typeof DescribePrivateConnectionOutput$ === "object");
assert(typeof DiffSource$ === "object");
assert(typeof DiscoveredEndpoint$ === "object");
assert(typeof DnsVerification$ === "object");
assert(typeof DocumentInfo$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof ErrorInformation$ === "object");
assert(typeof ExecutionContext$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingSummary$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetArtifactInput$ === "object");
assert(typeof GetArtifactOutput$ === "object");
assert(typeof GetIntegrationInput$ === "object");
assert(typeof GetIntegrationOutput$ === "object");
assert(typeof GetSecurityRequirementPackInput$ === "object");
assert(typeof GetSecurityRequirementPackOutput$ === "object");
assert(typeof GitHubIntegrationInput$ === "object");
assert(typeof GitHubRepositoryMetadata$ === "object");
assert(typeof GitHubRepositoryResource$ === "object");
assert(typeof GitHubResourceCapabilities$ === "object");
assert(typeof GitLabIntegrationInput$ === "object");
assert(typeof GitLabRepositoryMetadata$ === "object");
assert(typeof GitLabRepositoryResource$ === "object");
assert(typeof GitLabResourceCapabilities$ === "object");
assert(typeof HttpVerification$ === "object");
assert(typeof IdCConfiguration$ === "object");
assert(typeof ImportSecurityRequirementsInput$ === "object");
assert(typeof ImportSecurityRequirementsOutput$ === "object");
assert(typeof ImportSource$ === "object");
assert(typeof InitiateProviderRegistrationInput$ === "object");
assert(typeof InitiateProviderRegistrationOutput$ === "object");
assert(typeof IntegratedDocument$ === "object");
assert(typeof IntegratedRepository$ === "object");
assert(typeof IntegratedResource$ === "object");
assert(typeof IntegratedResourceInputItem$ === "object");
assert(typeof IntegratedResourceMetadata$ === "object");
assert(typeof IntegratedResourceSummary$ === "object");
assert(typeof IntegrationFilter$ === "object");
assert(typeof IntegrationSummary$ === "object");
assert(typeof ListAgentSpacesInput$ === "object");
assert(typeof ListAgentSpacesOutput$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListArtifactsInput$ === "object");
assert(typeof ListArtifactsOutput$ === "object");
assert(typeof ListCodeReviewJobsForCodeReviewInput$ === "object");
assert(typeof ListCodeReviewJobsForCodeReviewOutput$ === "object");
assert(typeof ListCodeReviewJobTasksInput$ === "object");
assert(typeof ListCodeReviewJobTasksOutput$ === "object");
assert(typeof ListCodeReviewsInput$ === "object");
assert(typeof ListCodeReviewsOutput$ === "object");
assert(typeof ListDiscoveredEndpointsInput$ === "object");
assert(typeof ListDiscoveredEndpointsOutput$ === "object");
assert(typeof ListFindingsInput$ === "object");
assert(typeof ListFindingsOutput$ === "object");
assert(typeof ListIntegratedResourcesInput$ === "object");
assert(typeof ListIntegratedResourcesOutput$ === "object");
assert(typeof ListIntegrationsInput$ === "object");
assert(typeof ListIntegrationsOutput$ === "object");
assert(typeof ListMembershipsRequest$ === "object");
assert(typeof ListMembershipsResponse$ === "object");
assert(typeof ListPentestJobsForPentestInput$ === "object");
assert(typeof ListPentestJobsForPentestOutput$ === "object");
assert(typeof ListPentestJobTasksInput$ === "object");
assert(typeof ListPentestJobTasksOutput$ === "object");
assert(typeof ListPentestsInput$ === "object");
assert(typeof ListPentestsOutput$ === "object");
assert(typeof ListPrivateConnectionsInput$ === "object");
assert(typeof ListPrivateConnectionsOutput$ === "object");
assert(typeof ListSecurityRequirementPackFilter$ === "object");
assert(typeof ListSecurityRequirementPacksInput$ === "object");
assert(typeof ListSecurityRequirementPacksOutput$ === "object");
assert(typeof ListSecurityRequirementsInput$ === "object");
assert(typeof ListSecurityRequirementsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListTargetDomainsInput$ === "object");
assert(typeof ListTargetDomainsOutput$ === "object");
assert(typeof ListThreatModelJobsInput$ === "object");
assert(typeof ListThreatModelJobsOutput$ === "object");
assert(typeof ListThreatModelJobTasksInput$ === "object");
assert(typeof ListThreatModelJobTasksOutput$ === "object");
assert(typeof ListThreatModelsInput$ === "object");
assert(typeof ListThreatModelsOutput$ === "object");
assert(typeof ListThreatsInput$ === "object");
assert(typeof ListThreatsOutput$ === "object");
assert(typeof LogLocation$ === "object");
assert(typeof MemberMetadata$ === "object");
assert(typeof MembershipConfig$ === "object");
assert(typeof MembershipSummary$ === "object");
assert(typeof NetworkTrafficConfig$ === "object");
assert(typeof NetworkTrafficRule$ === "object");
assert(typeof Pentest$ === "object");
assert(typeof PentestJob$ === "object");
assert(typeof PentestJobSummary$ === "object");
assert(typeof PentestSummary$ === "object");
assert(typeof PrivateConnectionMode$ === "object");
assert(typeof PrivateConnectionSummary$ === "object");
assert(typeof ProviderInput$ === "object");
assert(typeof ProviderResourceCapabilities$ === "object");
assert(typeof ReportDestination$ === "object");
assert(typeof SecurityRequirementArtifact$ === "object");
assert(typeof SecurityRequirementPackSummary$ === "object");
assert(typeof SecurityRequirementSummary$ === "object");
assert(typeof SelfManagedInput$ === "object");
assert(typeof ServiceManagedInput$ === "object");
assert(typeof SourceCodeRepository$ === "object");
assert(typeof StartCodeRemediationInput$ === "object");
assert(typeof StartCodeRemediationOutput$ === "object");
assert(typeof StartCodeReviewJobInput$ === "object");
assert(typeof StartCodeReviewJobOutput$ === "object");
assert(typeof StartPentestJobInput$ === "object");
assert(typeof StartPentestJobOutput$ === "object");
assert(typeof StartThreatModelJobInput$ === "object");
assert(typeof StartThreatModelJobOutput$ === "object");
assert(typeof Step$ === "object");
assert(typeof StopCodeReviewJobInput$ === "object");
assert(typeof StopCodeReviewJobOutput$ === "object");
assert(typeof StopPentestJobInput$ === "object");
assert(typeof StopPentestJobOutput$ === "object");
assert(typeof StopThreatModelJobInput$ === "object");
assert(typeof StopThreatModelJobOutput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TargetDomain$ === "object");
assert(typeof TargetDomainSummary$ === "object");
assert(typeof Task$ === "object");
assert(typeof TaskSummary$ === "object");
assert(typeof Threat$ === "object");
assert(typeof ThreatAnchorShape$ === "object");
assert(typeof ThreatEvidenceShape$ === "object");
assert(typeof ThreatModel$ === "object");
assert(typeof ThreatModelJob$ === "object");
assert(typeof ThreatModelJobSummary$ === "object");
assert(typeof ThreatModelJobTask$ === "object");
assert(typeof ThreatModelJobTaskSummary$ === "object");
assert(typeof ThreatModelSummary$ === "object");
assert(typeof ThreatSummary$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateAgentSpaceInput$ === "object");
assert(typeof UpdateAgentSpaceOutput$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateCodeReviewInput$ === "object");
assert(typeof UpdateCodeReviewOutput$ === "object");
assert(typeof UpdateFindingInput$ === "object");
assert(typeof UpdateFindingOutput$ === "object");
assert(typeof UpdateIntegratedResourcesInput$ === "object");
assert(typeof UpdateIntegratedResourcesOutput$ === "object");
assert(typeof UpdatePentestInput$ === "object");
assert(typeof UpdatePentestOutput$ === "object");
assert(typeof UpdatePrivateConnectionCertificateInput$ === "object");
assert(typeof UpdatePrivateConnectionCertificateOutput$ === "object");
assert(typeof UpdateSecurityRequirementEntry$ === "object");
assert(typeof UpdateSecurityRequirementPackInput$ === "object");
assert(typeof UpdateSecurityRequirementPackOutput$ === "object");
assert(typeof UpdateTargetDomainInput$ === "object");
assert(typeof UpdateTargetDomainOutput$ === "object");
assert(typeof UpdateThreatInput$ === "object");
assert(typeof UpdateThreatModelInput$ === "object");
assert(typeof UpdateThreatModelOutput$ === "object");
assert(typeof UpdateThreatOutput$ === "object");
assert(typeof UserConfig$ === "object");
assert(typeof UserMetadata$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VerificationDetails$ === "object");
assert(typeof VerificationScript$ === "object");
assert(typeof VerificationScriptEnvVar$ === "object");
assert(typeof VerifyTargetDomainInput$ === "object");
assert(typeof VerifyTargetDomainOutput$ === "object");
assert(typeof VpcConfig$ === "object");
// enums
assert(typeof AccessType === "object");
assert(typeof ArtifactType === "object");
assert(typeof AuthenticationProviderType === "object");
assert(typeof CleanUpStrategy === "object");
assert(typeof CodeRemediationStrategy === "object");
assert(typeof CodeRemediationTaskStatus === "object");
assert(typeof ConfidenceLevel === "object");
assert(typeof ContextType === "object");
assert(typeof DNSRecordType === "object");
assert(typeof DomainVerificationMethod === "object");
assert(typeof ErrorCode === "object");
assert(typeof FindingStatus === "object");
assert(typeof GitLabTokenType === "object");
assert(typeof IpAddressType === "object");
assert(typeof JobStatus === "object");
assert(typeof LogType === "object");
assert(typeof ManagementType === "object");
assert(typeof MembershipType === "object");
assert(typeof MembershipTypeFilter === "object");
assert(typeof NetworkTrafficRuleEffect === "object");
assert(typeof NetworkTrafficRuleType === "object");
assert(typeof PrivateConnectionStatus === "object");
assert(typeof PrivateConnectionType === "object");
assert(typeof Provider === "object");
assert(typeof ProviderType === "object");
assert(typeof ResourceConfigDnsResolution === "object");
assert(typeof ResourceType === "object");
assert(typeof RiskLevel === "object");
assert(typeof RiskType === "object");
assert(typeof SecurityRequirementArtifactFormat === "object");
assert(typeof SecurityRequirementPackImportStatus === "object");
assert(typeof SecurityRequirementPackStatus === "object");
assert(typeof SkillType === "object");
assert(typeof StepName === "object");
assert(typeof StepStatus === "object");
assert(typeof StrideCategory === "object");
assert(typeof TargetDomainStatus === "object");
assert(typeof TaskExecutionStatus === "object");
assert(typeof ThreatActor === "object");
assert(typeof ThreatSeverity === "object");
assert(typeof ThreatStatus === "object");
assert(typeof UserRole === "object");
assert(typeof ValidationMode === "object");
assert(typeof ValidationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SecurityAgentServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SecurityAgentServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SecurityAgentServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SecurityAgentServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SecurityAgentServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SecurityAgentServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SecurityAgentServiceException);
assert(typeof ValidationException$ === "object");
assert(SecurityAgentServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAgentSpaces === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListArtifacts === "function");
assert(typeof paginateListCodeReviewJobTasks === "function");
assert(typeof paginateListCodeReviewJobsForCodeReview === "function");
assert(typeof paginateListCodeReviews === "function");
assert(typeof paginateListDiscoveredEndpoints === "function");
assert(typeof paginateListFindings === "function");
assert(typeof paginateListIntegratedResources === "function");
assert(typeof paginateListIntegrations === "function");
assert(typeof paginateListMemberships === "function");
assert(typeof paginateListPentestJobTasks === "function");
assert(typeof paginateListPentestJobsForPentest === "function");
assert(typeof paginateListPentests === "function");
assert(typeof paginateListPrivateConnections === "function");
assert(typeof paginateListSecurityRequirementPacks === "function");
assert(typeof paginateListSecurityRequirements === "function");
assert(typeof paginateListTargetDomains === "function");
assert(typeof paginateListThreatModelJobTasks === "function");
assert(typeof paginateListThreatModelJobs === "function");
assert(typeof paginateListThreatModels === "function");
assert(typeof paginateListThreats === "function");
console.log(`SecurityAgent index test passed.`);
