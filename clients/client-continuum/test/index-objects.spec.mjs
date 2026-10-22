import {
  AccessDeniedException,
  AccessDeniedException$,
  AffectedPackage$,
  ArtifactHttpMethod,
  AssociateCollector$,
  AssociateCollectorCommand,
  AssociateCollectorInput$,
  AssociateCollectorOutput$,
  AssociatedCollector$,
  AssociatedEnvironment$,
  CodeConfigurationDetails$,
  CodeScanData$,
  CodeScanSummary$,
  CollectorDetails$,
  CollectorStatus,
  CollectorSummary$,
  CollectorType,
  ConflictException,
  ConflictException$,
  Continuum,
  ContinuumClient,
  ContinuumServiceException,
  CreateCodeConfiguration$,
  CreateCodeFinding$,
  CreateCodeFindingCommand,
  CreateCodeFindingInput$,
  CreateCodeFindingOutput$,
  CreateCodeScan$,
  CreateCodeScanCommand,
  CreateCodeScanInput$,
  CreateCodeScanOutput$,
  CreateCollector$,
  CreateCollectorCommand,
  CreateCollectorInput$,
  CreateCollectorOutput$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentConfiguration$,
  CreateEnvironmentInput$,
  CreateEnvironmentOutput$,
  CreateIntegration$,
  CreateIntegrationCommand,
  CreateIntegrationInput$,
  CreateIntegrationOutput$,
  DeleteCollector$,
  DeleteCollectorCommand,
  DeleteCollectorInput$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentInput$,
  DeleteIntegration$,
  DeleteIntegrationCommand,
  DeleteIntegrationInput$,
  DeliveryReason,
  DeliveryStatus,
  DestinationTarget$,
  DisassociateCollector$,
  DisassociateCollectorCommand,
  DisassociateCollectorInput$,
  EnvironmentConfiguration$,
  EnvironmentConfigurationDetails$,
  EnvironmentListEntry$,
  EnvironmentNetworkConfiguration$,
  EnvironmentRepositorySource$,
  EnvironmentS3IntegrationSource$,
  EnvironmentSourceConfiguration$,
  EnvironmentStatus,
  ExploitabilityVerdict,
  ExploitEffect,
  FindingBlockingReason,
  FindingComplianceCheck$,
  FindingDiscardReason,
  FindingEvidence$,
  FindingLocation$,
  FindingOcsfClass,
  FindingPosture$,
  FindingResource$,
  FindingSeverityAdjustment,
  FindingSeverityId,
  FindingStatus,
  FindingSummary$,
  FindingType,
  FindingValidation$,
  FindingVerdict,
  FindingVulnerability$,
  FlowVerdict$,
  FlowVerdictValue,
  GetCodeFinding$,
  GetCodeFindingCommand,
  GetCodeFindingInput$,
  GetCodeFindingOutput$,
  GetCodeIssue$,
  GetCodeIssueArtifact$,
  GetCodeIssueArtifactCommand,
  GetCodeIssueArtifactInput$,
  GetCodeIssueArtifactOutput$,
  GetCodeIssueCommand,
  GetCodeIssueInput$,
  GetCodeIssueOutput$,
  GetCodeScan$,
  GetCodeScanCommand,
  GetCodeScanInput$,
  GetCodeScanOutput$,
  GetCollector$,
  GetCollectorCommand,
  GetCollectorDataAccessAuthorization$,
  GetCollectorDataAccessAuthorizationCommand,
  GetCollectorDataAccessAuthorizationInput$,
  GetCollectorDataAccessAuthorizationOutput$,
  GetCollectorInput$,
  GetCollectorOutput$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentInput$,
  GetEnvironmentOutput$,
  GetIntegration$,
  GetIntegrationCommand,
  GetIntegrationInput$,
  GetIntegrationOutput$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyInput$,
  GetResourcePolicyOutput$,
  GitHubAuthorizationConfiguration$,
  GitHubConfiguration$,
  GitHubDetails$,
  GitHubTarget$,
  GitLabConfiguration$,
  GitLabDetails$,
  GitLabTargetType,
  GitLabTokenRotation,
  IntegrationAuthorizationProviderType,
  IntegrationSummary$,
  IntegrationType,
  InternalServerException,
  InternalServerException$,
  IssueArtifactBody$,
  IssueArtifactItem$,
  IssueArtifactProducerSummary$,
  IssueArtifactType,
  IssueEvidenceAvailability,
  IssuePatchDelivery$,
  IssuePatchDeliveryStatus,
  IssuePhase,
  IssueSeverity,
  IssueStatus,
  IssueStatusReason,
  IssueSummary$,
  KubernetesClusterRoleConfiguration$,
  KubernetesClusterRoleUpdate$,
  ListAssociatedCollectors$,
  ListAssociatedCollectorsCommand,
  ListAssociatedCollectorsInput$,
  ListAssociatedCollectorsOutput$,
  ListAssociatedEnvironments$,
  ListAssociatedEnvironmentsCommand,
  ListAssociatedEnvironmentsInput$,
  ListAssociatedEnvironmentsOutput$,
  ListCodeFindings$,
  ListCodeFindingsCommand,
  ListCodeFindingsInput$,
  ListCodeFindingsOutput$,
  ListCodeIssueArtifacts$,
  ListCodeIssueArtifactsCommand,
  ListCodeIssueArtifactsInput$,
  ListCodeIssueArtifactsOutput$,
  ListCodeIssues$,
  ListCodeIssuesCommand,
  ListCodeIssuesInput$,
  ListCodeIssuesOutput$,
  ListCodeScans$,
  ListCodeScansCommand,
  ListCodeScansInput$,
  ListCodeScansOutput$,
  ListCollectors$,
  ListCollectorsCommand,
  ListCollectorsInput$,
  ListCollectorsOutput$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsInput$,
  ListEnvironmentsOutput$,
  ListIntegrations$,
  ListIntegrationsCommand,
  ListIntegrationsInput$,
  ListIntegrationsOutput$,
  OAuthCodeChallengeMethod,
  paginateListAssociatedCollectors,
  paginateListAssociatedEnvironments,
  paginateListCodeFindings,
  paginateListCodeIssueArtifacts,
  paginateListCodeIssues,
  paginateListCodeScans,
  paginateListEnvironments,
  paginateListIntegrations,
  PatchBody$,
  PatchCreationPolicy,
  PatchDelivery$,
  PatchFormat,
  PerFindingResult$,
  PrevalidationSignal$,
  PrevalidationSignalsBody$,
  ProviderConfiguration$,
  ProviderDetails$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyInput$,
  PutResourcePolicyOutput$,
  ReasoningStep$,
  RemediationProposalBody$,
  RemoveKubernetesClusterRole$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Configuration$,
  S3Details$,
  S3Target$,
  ScanFailureStage,
  ScanOrigin,
  ScanStatus,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SignalAccessLevel,
  SignalAccessPrecondition$,
  SignalAttackerGains,
  SignalAttackerGainsDimension$,
  SignalBand,
  SignalBasis,
  SignalBlastRadius,
  SignalBlastRadiusDimension$,
  SignalComputation$,
  SignalConfidenceReasoning$,
  SignalDimension,
  SignalExploitability$,
  SignalImpactDimensions$,
  SignalPrecondition$,
  SignalPreconditions$,
  SignalStrength,
  SignalTargetValue,
  SignalTargetValueDimension$,
  StartIntegrationAuthorization$,
  StartIntegrationAuthorizationCommand,
  StartIntegrationAuthorizationInput$,
  StartIntegrationAuthorizationOutput$,
  ThrottlingException,
  ThrottlingException$,
  UpdateCodeConfiguration$,
  UpdateCollector$,
  UpdateCollectorCommand,
  UpdateCollectorInput$,
  UpdateCollectorOutput$,
  UpdateEnvironment$,
  UpdateEnvironmentCommand,
  UpdateEnvironmentConfiguration$,
  UpdateEnvironmentInput$,
  UpdateEnvironmentOutput$,
  UpdateIntegration$,
  UpdateIntegrationCommand,
  UpdateIntegrationInput$,
  UpdateIntegrationOutput$,
  UpdateProviderConfiguration$,
  UpdateS3Configuration$,
  ValidationConfidenceTier,
  ValidationEvidenceBody$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExecutedProof$,
  ValidationExploitArtifact$,
  ValidationProofCode$,
  ValidationProofMaterial$,
  ValidationProofOutput$,
  ValidationSourceAnalysis$,
  ValidationTerminalStatus,
  waitForCodeScanSucceeded,
  waitUntilCodeScanSucceeded,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ContinuumClient === "function");
assert(typeof Continuum === "function");
// commands
assert(typeof AssociateCollectorCommand === "function");
assert(typeof AssociateCollector$ === "object");
assert(typeof CreateCodeFindingCommand === "function");
assert(typeof CreateCodeFinding$ === "object");
assert(typeof CreateCodeScanCommand === "function");
assert(typeof CreateCodeScan$ === "object");
assert(typeof CreateCollectorCommand === "function");
assert(typeof CreateCollector$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateIntegrationCommand === "function");
assert(typeof CreateIntegration$ === "object");
assert(typeof DeleteCollectorCommand === "function");
assert(typeof DeleteCollector$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteIntegrationCommand === "function");
assert(typeof DeleteIntegration$ === "object");
assert(typeof DisassociateCollectorCommand === "function");
assert(typeof DisassociateCollector$ === "object");
assert(typeof GetCodeFindingCommand === "function");
assert(typeof GetCodeFinding$ === "object");
assert(typeof GetCodeIssueCommand === "function");
assert(typeof GetCodeIssue$ === "object");
assert(typeof GetCodeIssueArtifactCommand === "function");
assert(typeof GetCodeIssueArtifact$ === "object");
assert(typeof GetCodeScanCommand === "function");
assert(typeof GetCodeScan$ === "object");
assert(typeof GetCollectorCommand === "function");
assert(typeof GetCollector$ === "object");
assert(typeof GetCollectorDataAccessAuthorizationCommand === "function");
assert(typeof GetCollectorDataAccessAuthorization$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetIntegrationCommand === "function");
assert(typeof GetIntegration$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListAssociatedCollectorsCommand === "function");
assert(typeof ListAssociatedCollectors$ === "object");
assert(typeof ListAssociatedEnvironmentsCommand === "function");
assert(typeof ListAssociatedEnvironments$ === "object");
assert(typeof ListCodeFindingsCommand === "function");
assert(typeof ListCodeFindings$ === "object");
assert(typeof ListCodeIssueArtifactsCommand === "function");
assert(typeof ListCodeIssueArtifacts$ === "object");
assert(typeof ListCodeIssuesCommand === "function");
assert(typeof ListCodeIssues$ === "object");
assert(typeof ListCodeScansCommand === "function");
assert(typeof ListCodeScans$ === "object");
assert(typeof ListCollectorsCommand === "function");
assert(typeof ListCollectors$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListIntegrationsCommand === "function");
assert(typeof ListIntegrations$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof StartIntegrationAuthorizationCommand === "function");
assert(typeof StartIntegrationAuthorization$ === "object");
assert(typeof UpdateCollectorCommand === "function");
assert(typeof UpdateCollector$ === "object");
assert(typeof UpdateEnvironmentCommand === "function");
assert(typeof UpdateEnvironment$ === "object");
assert(typeof UpdateIntegrationCommand === "function");
assert(typeof UpdateIntegration$ === "object");
// structural schemas
assert(typeof AffectedPackage$ === "object");
assert(typeof AssociateCollectorInput$ === "object");
assert(typeof AssociateCollectorOutput$ === "object");
assert(typeof AssociatedCollector$ === "object");
assert(typeof AssociatedEnvironment$ === "object");
assert(typeof CodeConfigurationDetails$ === "object");
assert(typeof CodeScanData$ === "object");
assert(typeof CodeScanSummary$ === "object");
assert(typeof CollectorDetails$ === "object");
assert(typeof CollectorSummary$ === "object");
assert(typeof CreateCodeConfiguration$ === "object");
assert(typeof CreateCodeFindingInput$ === "object");
assert(typeof CreateCodeFindingOutput$ === "object");
assert(typeof CreateCodeScanInput$ === "object");
assert(typeof CreateCodeScanOutput$ === "object");
assert(typeof CreateCollectorInput$ === "object");
assert(typeof CreateCollectorOutput$ === "object");
assert(typeof CreateEnvironmentConfiguration$ === "object");
assert(typeof CreateEnvironmentInput$ === "object");
assert(typeof CreateEnvironmentOutput$ === "object");
assert(typeof CreateIntegrationInput$ === "object");
assert(typeof CreateIntegrationOutput$ === "object");
assert(typeof DeleteCollectorInput$ === "object");
assert(typeof DeleteEnvironmentInput$ === "object");
assert(typeof DeleteIntegrationInput$ === "object");
assert(typeof DestinationTarget$ === "object");
assert(typeof DisassociateCollectorInput$ === "object");
assert(typeof EnvironmentConfiguration$ === "object");
assert(typeof EnvironmentConfigurationDetails$ === "object");
assert(typeof EnvironmentListEntry$ === "object");
assert(typeof EnvironmentNetworkConfiguration$ === "object");
assert(typeof EnvironmentRepositorySource$ === "object");
assert(typeof EnvironmentS3IntegrationSource$ === "object");
assert(typeof EnvironmentSourceConfiguration$ === "object");
assert(typeof FindingComplianceCheck$ === "object");
assert(typeof FindingEvidence$ === "object");
assert(typeof FindingLocation$ === "object");
assert(typeof FindingPosture$ === "object");
assert(typeof FindingResource$ === "object");
assert(typeof FindingSummary$ === "object");
assert(typeof FindingValidation$ === "object");
assert(typeof FindingVulnerability$ === "object");
assert(typeof FlowVerdict$ === "object");
assert(typeof GetCodeFindingInput$ === "object");
assert(typeof GetCodeFindingOutput$ === "object");
assert(typeof GetCodeIssueArtifactInput$ === "object");
assert(typeof GetCodeIssueArtifactOutput$ === "object");
assert(typeof GetCodeIssueInput$ === "object");
assert(typeof GetCodeIssueOutput$ === "object");
assert(typeof GetCodeScanInput$ === "object");
assert(typeof GetCodeScanOutput$ === "object");
assert(typeof GetCollectorDataAccessAuthorizationInput$ === "object");
assert(typeof GetCollectorDataAccessAuthorizationOutput$ === "object");
assert(typeof GetCollectorInput$ === "object");
assert(typeof GetCollectorOutput$ === "object");
assert(typeof GetEnvironmentInput$ === "object");
assert(typeof GetEnvironmentOutput$ === "object");
assert(typeof GetIntegrationInput$ === "object");
assert(typeof GetIntegrationOutput$ === "object");
assert(typeof GetResourcePolicyInput$ === "object");
assert(typeof GetResourcePolicyOutput$ === "object");
assert(typeof GitHubAuthorizationConfiguration$ === "object");
assert(typeof GitHubConfiguration$ === "object");
assert(typeof GitHubDetails$ === "object");
assert(typeof GitHubTarget$ === "object");
assert(typeof GitLabConfiguration$ === "object");
assert(typeof GitLabDetails$ === "object");
assert(typeof IntegrationSummary$ === "object");
assert(typeof IssueArtifactBody$ === "object");
assert(typeof IssueArtifactItem$ === "object");
assert(typeof IssueArtifactProducerSummary$ === "object");
assert(typeof IssuePatchDelivery$ === "object");
assert(typeof IssueSummary$ === "object");
assert(typeof KubernetesClusterRoleConfiguration$ === "object");
assert(typeof KubernetesClusterRoleUpdate$ === "object");
assert(typeof ListAssociatedCollectorsInput$ === "object");
assert(typeof ListAssociatedCollectorsOutput$ === "object");
assert(typeof ListAssociatedEnvironmentsInput$ === "object");
assert(typeof ListAssociatedEnvironmentsOutput$ === "object");
assert(typeof ListCodeFindingsInput$ === "object");
assert(typeof ListCodeFindingsOutput$ === "object");
assert(typeof ListCodeIssueArtifactsInput$ === "object");
assert(typeof ListCodeIssueArtifactsOutput$ === "object");
assert(typeof ListCodeIssuesInput$ === "object");
assert(typeof ListCodeIssuesOutput$ === "object");
assert(typeof ListCodeScansInput$ === "object");
assert(typeof ListCodeScansOutput$ === "object");
assert(typeof ListCollectorsInput$ === "object");
assert(typeof ListCollectorsOutput$ === "object");
assert(typeof ListEnvironmentsInput$ === "object");
assert(typeof ListEnvironmentsOutput$ === "object");
assert(typeof ListIntegrationsInput$ === "object");
assert(typeof ListIntegrationsOutput$ === "object");
assert(typeof PatchBody$ === "object");
assert(typeof PatchDelivery$ === "object");
assert(typeof PerFindingResult$ === "object");
assert(typeof PrevalidationSignal$ === "object");
assert(typeof PrevalidationSignalsBody$ === "object");
assert(typeof ProviderConfiguration$ === "object");
assert(typeof ProviderDetails$ === "object");
assert(typeof PutResourcePolicyInput$ === "object");
assert(typeof PutResourcePolicyOutput$ === "object");
assert(typeof ReasoningStep$ === "object");
assert(typeof RemediationProposalBody$ === "object");
assert(typeof RemoveKubernetesClusterRole$ === "object");
assert(typeof S3Configuration$ === "object");
assert(typeof S3Details$ === "object");
assert(typeof S3Target$ === "object");
assert(typeof SignalAccessPrecondition$ === "object");
assert(typeof SignalAttackerGainsDimension$ === "object");
assert(typeof SignalBlastRadiusDimension$ === "object");
assert(typeof SignalComputation$ === "object");
assert(typeof SignalConfidenceReasoning$ === "object");
assert(typeof SignalExploitability$ === "object");
assert(typeof SignalImpactDimensions$ === "object");
assert(typeof SignalPrecondition$ === "object");
assert(typeof SignalPreconditions$ === "object");
assert(typeof SignalTargetValueDimension$ === "object");
assert(typeof StartIntegrationAuthorizationInput$ === "object");
assert(typeof StartIntegrationAuthorizationOutput$ === "object");
assert(typeof UpdateCodeConfiguration$ === "object");
assert(typeof UpdateCollectorInput$ === "object");
assert(typeof UpdateCollectorOutput$ === "object");
assert(typeof UpdateEnvironmentConfiguration$ === "object");
assert(typeof UpdateEnvironmentInput$ === "object");
assert(typeof UpdateEnvironmentOutput$ === "object");
assert(typeof UpdateIntegrationInput$ === "object");
assert(typeof UpdateIntegrationOutput$ === "object");
assert(typeof UpdateProviderConfiguration$ === "object");
assert(typeof UpdateS3Configuration$ === "object");
assert(typeof ValidationEvidenceBody$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof ValidationExecutedProof$ === "object");
assert(typeof ValidationExploitArtifact$ === "object");
assert(typeof ValidationProofCode$ === "object");
assert(typeof ValidationProofMaterial$ === "object");
assert(typeof ValidationProofOutput$ === "object");
assert(typeof ValidationSourceAnalysis$ === "object");
// enums
assert(typeof ArtifactHttpMethod === "object");
assert(typeof CollectorStatus === "object");
assert(typeof CollectorType === "object");
assert(typeof DeliveryReason === "object");
assert(typeof DeliveryStatus === "object");
assert(typeof EnvironmentStatus === "object");
assert(typeof ExploitabilityVerdict === "object");
assert(typeof ExploitEffect === "object");
assert(typeof FindingBlockingReason === "object");
assert(typeof FindingDiscardReason === "object");
assert(typeof FindingOcsfClass === "object");
assert(typeof FindingSeverityAdjustment === "object");
assert(typeof FindingSeverityId === "object");
assert(typeof FindingStatus === "object");
assert(typeof FindingType === "object");
assert(typeof FindingVerdict === "object");
assert(typeof FlowVerdictValue === "object");
assert(typeof GitLabTargetType === "object");
assert(typeof GitLabTokenRotation === "object");
assert(typeof IntegrationAuthorizationProviderType === "object");
assert(typeof IntegrationType === "object");
assert(typeof IssueArtifactType === "object");
assert(typeof IssueEvidenceAvailability === "object");
assert(typeof IssuePatchDeliveryStatus === "object");
assert(typeof IssuePhase === "object");
assert(typeof IssueSeverity === "object");
assert(typeof IssueStatus === "object");
assert(typeof IssueStatusReason === "object");
assert(typeof OAuthCodeChallengeMethod === "object");
assert(typeof PatchCreationPolicy === "object");
assert(typeof PatchFormat === "object");
assert(typeof ScanFailureStage === "object");
assert(typeof ScanOrigin === "object");
assert(typeof ScanStatus === "object");
assert(typeof SignalAccessLevel === "object");
assert(typeof SignalAttackerGains === "object");
assert(typeof SignalBand === "object");
assert(typeof SignalBasis === "object");
assert(typeof SignalBlastRadius === "object");
assert(typeof SignalDimension === "object");
assert(typeof SignalStrength === "object");
assert(typeof SignalTargetValue === "object");
assert(typeof ValidationConfidenceTier === "object");
assert(typeof ValidationTerminalStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof ContinuumServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ContinuumServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ContinuumServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ContinuumServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ContinuumServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ContinuumServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ContinuumServiceException);
assert(typeof ValidationException$ === "object");
assert(ContinuumServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForCodeScanSucceeded === "function");
assert(typeof waitUntilCodeScanSucceeded === "function");
// paginators
assert(typeof paginateListAssociatedCollectors === "function");
assert(typeof paginateListAssociatedEnvironments === "function");
assert(typeof paginateListCodeFindings === "function");
assert(typeof paginateListCodeIssueArtifacts === "function");
assert(typeof paginateListCodeIssues === "function");
assert(typeof paginateListCodeScans === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListIntegrations === "function");
console.log(`Continuum index test passed.`);
