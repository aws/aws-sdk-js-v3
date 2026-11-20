import {
  A2aAgentCardDescriptor$,
  AccessDeniedException,
  AccessDeniedException$,
  AgentCoreGatewayProtocolType,
  AgentCoreGatewaySourceDetails$,
  AgentCoreRuntimeProtocolConfiguration$,
  AgentCoreRuntimeServerProtocol,
  AgentCoreRuntimeSourceDetails$,
  AgentRegistryControl,
  AgentRegistryControlClient,
  AgentRegistryControlServiceException,
  AgentSkillsAdditionalData$,
  AgentSkillsDefinitionDescriptor$,
  AgentSkillsMdDescriptor$,
  AgentSkillsPackageDescriptor$,
  AgentSkillsRepositoryProvider,
  AgentSkillsSourceConfiguration$,
  AgUiDescriptor$,
  ApprovalConfiguration$,
  AssociatePublisher$,
  AssociatePublisherCommand,
  AssociatePublisherRequest$,
  AssociatePublisherResponse$,
  AssociationApprovalStatus,
  AssociationStatus,
  AuthorizationData$,
  AuthorizerConfiguration$,
  AuthorizingClaimMatchValueType$,
  AutoApprovalRule,
  AutoDetection$,
  AutoDetectionConfiguration$,
  AutoDetectionScope,
  AutoDetectionStatus,
  BotCategory,
  ClaimMatchOperatorType,
  ClaimMatchValueType$,
  ConflictException,
  ConflictException$,
  CreatePublisher$,
  CreatePublisherCommand,
  CreatePublisherRequest$,
  CreatePublisherResponse$,
  CreateRegistry$,
  CreateRegistryCommand,
  CreateRegistryRecord$,
  CreateRegistryRecordCommand,
  CreateRegistryRecordRequest$,
  CreateRegistryRecordResponse$,
  CreateRegistryRequest$,
  CreateRegistryResponse$,
  CustomClaimValidationType$,
  CustomDescriptor$,
  CustomJWTAuthorizerConfiguration$,
  CustomMetadataSchemaComplianceStatus,
  CustomMetadataSchemaConfiguration$,
  DeletePublisher$,
  DeletePublisherCommand,
  DeletePublisherRequest$,
  DeleteRegistry$,
  DeleteRegistryCommand,
  DeleteRegistryRecord$,
  DeleteRegistryRecordCommand,
  DeleteRegistryRecordRequest$,
  DeleteRegistryRecordResponse$,
  DeleteRegistryRequest$,
  DeleteRegistryResponse$,
  DependencyException,
  DependencyException$,
  Descriptors$,
  DescriptorSource$,
  DescriptorSourceFromUrl$,
  DisassociatePublisher$,
  DisassociatePublisherCommand,
  DisassociatePublisherRequest$,
  DiscoveryConfiguration$,
  DomainChallenge$,
  EncryptionConfiguration$,
  EndpointIpAddressType,
  GetPublisher$,
  GetPublisherCommand,
  GetPublisherRequest$,
  GetRegistry$,
  GetRegistryCommand,
  GetRegistryRecord$,
  GetRegistryRecordCommand,
  GetRegistryRecordRequest$,
  GetRegistryRecordResponse$,
  GetRegistryRequest$,
  GetRegistryResponse$,
  GitHubSynchronizedSource$,
  HttpDescriptor$,
  Identifier$,
  IdentifierType,
  InboundTokenClaimValueType,
  InternalServerException,
  InternalServerException$,
  ListPublisherAssociations$,
  ListPublisherAssociationsCommand,
  ListPublisherAssociationsRequest$,
  ListPublisherAssociationsResponse$,
  ListPublishers$,
  ListPublishersCommand,
  ListPublishersRequest$,
  ListPublishersResponse$,
  ListRegistries$,
  ListRegistriesCommand,
  ListRegistriesRequest$,
  ListRegistriesResponse$,
  ListRegistryRecords$,
  ListRegistryRecordsCommand,
  ListRegistryRecordsRequest$,
  ListRegistryRecordsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedVpcResource$,
  McpServerAdditionalData$,
  McpServerDescriptor$,
  McpToolsDescriptor$,
  OAuth2AuthorizationData$,
  paginateListPublisherAssociations,
  paginateListPublishers,
  paginateListRegistries,
  paginateListRegistryRecords,
  PrivateEndpoint$,
  PrivateEndpointOverride$,
  Provenance$,
  ProvenanceRelation,
  ProvenanceSummary$,
  Publisher$,
  PublisherAssociation$,
  PublisherSummary$,
  RecordType,
  RecordTypeSchemaOverride$,
  RegistryAuthorizerType,
  RegistryFilter$,
  RegistryFilterName,
  RegistryRecordArtifactDownload$,
  RegistryRecordArtifactUpload$,
  RegistryRecordCredentialProviderConfiguration$,
  RegistryRecordCredentialProviderType,
  RegistryRecordCredentialProviderUnion$,
  RegistryRecordFilter$,
  RegistryRecordFilterName,
  RegistryRecordIamCredentialProvider$,
  RegistryRecordOAuthCredentialProvider$,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryRecordSummary$,
  RegistryRecordSynchronizedSource$,
  RegistryStatus,
  RegistrySummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3SourceConfiguration$,
  S3SynchronizedSource$,
  SelfManagedLatticeResource$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SignatureAgentCardAdditionalData$,
  SignatureAgentCardDescriptor$,
  SourceDetails$,
  SourceType,
  SubmitRegistryRecordForApproval$,
  SubmitRegistryRecordForApprovalCommand,
  SubmitRegistryRecordForApprovalRequest$,
  SubmitRegistryRecordForApprovalResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdatedA2aAgentCardDescriptor$,
  UpdatedA2aAgentCardDescriptorFields$,
  UpdatedAgentSkillsAdditionalData$,
  UpdatedAgentSkillsAdditionalDataFields$,
  UpdatedAgentSkillsDefinitionDescriptor$,
  UpdatedAgentSkillsDefinitionDescriptorFields$,
  UpdatedAgentSkillsMdDescriptor$,
  UpdatedAgentSkillsMdDescriptorFields$,
  UpdatedAgentSkillsPackageDescriptor$,
  UpdatedAgentSkillsRepositoryProvider$,
  UpdatedAgentSkillsSourceConfiguration$,
  UpdatedAgUiDescriptor$,
  UpdatedAgUiDescriptorFields$,
  UpdatedApprovalConfiguration$,
  UpdatedAuthorizerConfiguration$,
  UpdatedAutoDetectionConfiguration$,
  UpdatedBotCategory$,
  UpdatedCustomDescriptor$,
  UpdatedCustomDescriptorFields$,
  UpdatedCustomMetadataMap$,
  UpdatedCustomMetadataSchemaConfiguration$,
  UpdatedDataSchemaVersion$,
  UpdatedDescription$,
  UpdatedDescriptorData$,
  UpdatedDescriptors$,
  UpdatedDescriptorsFields$,
  UpdatedDescriptorSource$,
  UpdatedDiscoveryConfiguration$,
  UpdatedDisplayName$,
  UpdatedHttpDescriptor$,
  UpdatedHttpDescriptorFields$,
  UpdatedMcpServerAdditionalData$,
  UpdatedMcpServerAdditionalDataFields$,
  UpdatedMcpServerDescriptor$,
  UpdatedMcpServerDescriptorFields$,
  UpdatedMcpToolsDescriptor$,
  UpdatedMcpToolsDescriptorFields$,
  UpdatedRegistryRecordArtifact$,
  UpdatedSignatureAgentCardAdditionalData$,
  UpdatedSignatureAgentCardAdditionalDataFields$,
  UpdatedSignatureAgentCardDescriptor$,
  UpdatedSignatureAgentCardDescriptorFields$,
  UpdatePublisherAssociationApprovalStatus$,
  UpdatePublisherAssociationApprovalStatusCommand,
  UpdatePublisherAssociationApprovalStatusRequest$,
  UpdatePublisherAssociationApprovalStatusResponse$,
  UpdateRegistry$,
  UpdateRegistryCommand,
  UpdateRegistryRecord$,
  UpdateRegistryRecordCommand,
  UpdateRegistryRecordRequest$,
  UpdateRegistryRecordResponse$,
  UpdateRegistryRecordStatus$,
  UpdateRegistryRecordStatusCommand,
  UpdateRegistryRecordStatusRequest$,
  UpdateRegistryRecordStatusResponse$,
  UpdateRegistryRequest$,
  UpdateRegistryResponse$,
  ValidatePublisher$,
  ValidatePublisherCommand,
  ValidatePublisherRequest$,
  ValidatePublisherResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VerificationStatus,
  waitForRegistryReady,
  waitForRegistryRecordApproved,
  waitUntilRegistryReady,
  waitUntilRegistryRecordApproved,
  WorkloadIdentityDetails$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AgentRegistryControlClient === "function");
assert(typeof AgentRegistryControl === "function");
// commands
assert(typeof AssociatePublisherCommand === "function");
assert(typeof AssociatePublisher$ === "object");
assert(typeof CreatePublisherCommand === "function");
assert(typeof CreatePublisher$ === "object");
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateRegistry$ === "object");
assert(typeof CreateRegistryRecordCommand === "function");
assert(typeof CreateRegistryRecord$ === "object");
assert(typeof DeletePublisherCommand === "function");
assert(typeof DeletePublisher$ === "object");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteRegistry$ === "object");
assert(typeof DeleteRegistryRecordCommand === "function");
assert(typeof DeleteRegistryRecord$ === "object");
assert(typeof DisassociatePublisherCommand === "function");
assert(typeof DisassociatePublisher$ === "object");
assert(typeof GetPublisherCommand === "function");
assert(typeof GetPublisher$ === "object");
assert(typeof GetRegistryCommand === "function");
assert(typeof GetRegistry$ === "object");
assert(typeof GetRegistryRecordCommand === "function");
assert(typeof GetRegistryRecord$ === "object");
assert(typeof ListPublisherAssociationsCommand === "function");
assert(typeof ListPublisherAssociations$ === "object");
assert(typeof ListPublishersCommand === "function");
assert(typeof ListPublishers$ === "object");
assert(typeof ListRegistriesCommand === "function");
assert(typeof ListRegistries$ === "object");
assert(typeof ListRegistryRecordsCommand === "function");
assert(typeof ListRegistryRecords$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SubmitRegistryRecordForApprovalCommand === "function");
assert(typeof SubmitRegistryRecordForApproval$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePublisherAssociationApprovalStatusCommand === "function");
assert(typeof UpdatePublisherAssociationApprovalStatus$ === "object");
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateRegistry$ === "object");
assert(typeof UpdateRegistryRecordCommand === "function");
assert(typeof UpdateRegistryRecord$ === "object");
assert(typeof UpdateRegistryRecordStatusCommand === "function");
assert(typeof UpdateRegistryRecordStatus$ === "object");
assert(typeof ValidatePublisherCommand === "function");
assert(typeof ValidatePublisher$ === "object");
// structural schemas
assert(typeof A2aAgentCardDescriptor$ === "object");
assert(typeof AgentCoreGatewaySourceDetails$ === "object");
assert(typeof AgentCoreRuntimeProtocolConfiguration$ === "object");
assert(typeof AgentCoreRuntimeSourceDetails$ === "object");
assert(typeof AgentSkillsAdditionalData$ === "object");
assert(typeof AgentSkillsDefinitionDescriptor$ === "object");
assert(typeof AgentSkillsMdDescriptor$ === "object");
assert(typeof AgentSkillsPackageDescriptor$ === "object");
assert(typeof AgentSkillsSourceConfiguration$ === "object");
assert(typeof AgUiDescriptor$ === "object");
assert(typeof ApprovalConfiguration$ === "object");
assert(typeof AssociatePublisherRequest$ === "object");
assert(typeof AssociatePublisherResponse$ === "object");
assert(typeof AuthorizationData$ === "object");
assert(typeof AuthorizerConfiguration$ === "object");
assert(typeof AuthorizingClaimMatchValueType$ === "object");
assert(typeof AutoDetection$ === "object");
assert(typeof AutoDetectionConfiguration$ === "object");
assert(typeof ClaimMatchValueType$ === "object");
assert(typeof CreatePublisherRequest$ === "object");
assert(typeof CreatePublisherResponse$ === "object");
assert(typeof CreateRegistryRecordRequest$ === "object");
assert(typeof CreateRegistryRecordResponse$ === "object");
assert(typeof CreateRegistryRequest$ === "object");
assert(typeof CreateRegistryResponse$ === "object");
assert(typeof CustomClaimValidationType$ === "object");
assert(typeof CustomDescriptor$ === "object");
assert(typeof CustomJWTAuthorizerConfiguration$ === "object");
assert(typeof CustomMetadataSchemaConfiguration$ === "object");
assert(typeof DeletePublisherRequest$ === "object");
assert(typeof DeleteRegistryRecordRequest$ === "object");
assert(typeof DeleteRegistryRecordResponse$ === "object");
assert(typeof DeleteRegistryRequest$ === "object");
assert(typeof DeleteRegistryResponse$ === "object");
assert(typeof Descriptors$ === "object");
assert(typeof DescriptorSource$ === "object");
assert(typeof DescriptorSourceFromUrl$ === "object");
assert(typeof DisassociatePublisherRequest$ === "object");
assert(typeof DiscoveryConfiguration$ === "object");
assert(typeof DomainChallenge$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetPublisherRequest$ === "object");
assert(typeof GetRegistryRecordRequest$ === "object");
assert(typeof GetRegistryRecordResponse$ === "object");
assert(typeof GetRegistryRequest$ === "object");
assert(typeof GetRegistryResponse$ === "object");
assert(typeof GitHubSynchronizedSource$ === "object");
assert(typeof HttpDescriptor$ === "object");
assert(typeof Identifier$ === "object");
assert(typeof ListPublisherAssociationsRequest$ === "object");
assert(typeof ListPublisherAssociationsResponse$ === "object");
assert(typeof ListPublishersRequest$ === "object");
assert(typeof ListPublishersResponse$ === "object");
assert(typeof ListRegistriesRequest$ === "object");
assert(typeof ListRegistriesResponse$ === "object");
assert(typeof ListRegistryRecordsRequest$ === "object");
assert(typeof ListRegistryRecordsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedVpcResource$ === "object");
assert(typeof McpServerAdditionalData$ === "object");
assert(typeof McpServerDescriptor$ === "object");
assert(typeof McpToolsDescriptor$ === "object");
assert(typeof OAuth2AuthorizationData$ === "object");
assert(typeof PrivateEndpoint$ === "object");
assert(typeof PrivateEndpointOverride$ === "object");
assert(typeof Provenance$ === "object");
assert(typeof ProvenanceSummary$ === "object");
assert(typeof Publisher$ === "object");
assert(typeof PublisherAssociation$ === "object");
assert(typeof PublisherSummary$ === "object");
assert(typeof RecordTypeSchemaOverride$ === "object");
assert(typeof RegistryFilter$ === "object");
assert(typeof RegistryRecordArtifactDownload$ === "object");
assert(typeof RegistryRecordArtifactUpload$ === "object");
assert(typeof RegistryRecordCredentialProviderConfiguration$ === "object");
assert(typeof RegistryRecordCredentialProviderUnion$ === "object");
assert(typeof RegistryRecordFilter$ === "object");
assert(typeof RegistryRecordIamCredentialProvider$ === "object");
assert(typeof RegistryRecordOAuthCredentialProvider$ === "object");
assert(typeof RegistryRecordSummary$ === "object");
assert(typeof RegistryRecordSynchronizedSource$ === "object");
assert(typeof RegistrySummary$ === "object");
assert(typeof S3SourceConfiguration$ === "object");
assert(typeof S3SynchronizedSource$ === "object");
assert(typeof SelfManagedLatticeResource$ === "object");
assert(typeof SignatureAgentCardAdditionalData$ === "object");
assert(typeof SignatureAgentCardDescriptor$ === "object");
assert(typeof SourceDetails$ === "object");
assert(typeof SubmitRegistryRecordForApprovalRequest$ === "object");
assert(typeof SubmitRegistryRecordForApprovalResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdatedA2aAgentCardDescriptor$ === "object");
assert(typeof UpdatedA2aAgentCardDescriptorFields$ === "object");
assert(typeof UpdatedAgentSkillsAdditionalData$ === "object");
assert(typeof UpdatedAgentSkillsAdditionalDataFields$ === "object");
assert(typeof UpdatedAgentSkillsDefinitionDescriptor$ === "object");
assert(typeof UpdatedAgentSkillsDefinitionDescriptorFields$ === "object");
assert(typeof UpdatedAgentSkillsMdDescriptor$ === "object");
assert(typeof UpdatedAgentSkillsMdDescriptorFields$ === "object");
assert(typeof UpdatedAgentSkillsPackageDescriptor$ === "object");
assert(typeof UpdatedAgentSkillsRepositoryProvider$ === "object");
assert(typeof UpdatedAgentSkillsSourceConfiguration$ === "object");
assert(typeof UpdatedAgUiDescriptor$ === "object");
assert(typeof UpdatedAgUiDescriptorFields$ === "object");
assert(typeof UpdatedApprovalConfiguration$ === "object");
assert(typeof UpdatedAuthorizerConfiguration$ === "object");
assert(typeof UpdatedAutoDetectionConfiguration$ === "object");
assert(typeof UpdatedBotCategory$ === "object");
assert(typeof UpdatedCustomDescriptor$ === "object");
assert(typeof UpdatedCustomDescriptorFields$ === "object");
assert(typeof UpdatedCustomMetadataMap$ === "object");
assert(typeof UpdatedCustomMetadataSchemaConfiguration$ === "object");
assert(typeof UpdatedDataSchemaVersion$ === "object");
assert(typeof UpdatedDescription$ === "object");
assert(typeof UpdatedDescriptorData$ === "object");
assert(typeof UpdatedDescriptors$ === "object");
assert(typeof UpdatedDescriptorsFields$ === "object");
assert(typeof UpdatedDescriptorSource$ === "object");
assert(typeof UpdatedDiscoveryConfiguration$ === "object");
assert(typeof UpdatedDisplayName$ === "object");
assert(typeof UpdatedHttpDescriptor$ === "object");
assert(typeof UpdatedHttpDescriptorFields$ === "object");
assert(typeof UpdatedMcpServerAdditionalData$ === "object");
assert(typeof UpdatedMcpServerAdditionalDataFields$ === "object");
assert(typeof UpdatedMcpServerDescriptor$ === "object");
assert(typeof UpdatedMcpServerDescriptorFields$ === "object");
assert(typeof UpdatedMcpToolsDescriptor$ === "object");
assert(typeof UpdatedMcpToolsDescriptorFields$ === "object");
assert(typeof UpdatedRegistryRecordArtifact$ === "object");
assert(typeof UpdatedSignatureAgentCardAdditionalData$ === "object");
assert(typeof UpdatedSignatureAgentCardAdditionalDataFields$ === "object");
assert(typeof UpdatedSignatureAgentCardDescriptor$ === "object");
assert(typeof UpdatedSignatureAgentCardDescriptorFields$ === "object");
assert(typeof UpdatePublisherAssociationApprovalStatusRequest$ === "object");
assert(typeof UpdatePublisherAssociationApprovalStatusResponse$ === "object");
assert(typeof UpdateRegistryRecordRequest$ === "object");
assert(typeof UpdateRegistryRecordResponse$ === "object");
assert(typeof UpdateRegistryRecordStatusRequest$ === "object");
assert(typeof UpdateRegistryRecordStatusResponse$ === "object");
assert(typeof UpdateRegistryRequest$ === "object");
assert(typeof UpdateRegistryResponse$ === "object");
assert(typeof ValidatePublisherRequest$ === "object");
assert(typeof ValidatePublisherResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WorkloadIdentityDetails$ === "object");
// enums
assert(typeof AgentCoreGatewayProtocolType === "object");
assert(typeof AgentCoreRuntimeServerProtocol === "object");
assert(typeof AgentSkillsRepositoryProvider === "object");
assert(typeof AssociationApprovalStatus === "object");
assert(typeof AssociationStatus === "object");
assert(typeof AutoApprovalRule === "object");
assert(typeof AutoDetectionScope === "object");
assert(typeof AutoDetectionStatus === "object");
assert(typeof BotCategory === "object");
assert(typeof ClaimMatchOperatorType === "object");
assert(typeof CustomMetadataSchemaComplianceStatus === "object");
assert(typeof EndpointIpAddressType === "object");
assert(typeof IdentifierType === "object");
assert(typeof InboundTokenClaimValueType === "object");
assert(typeof ProvenanceRelation === "object");
assert(typeof RecordType === "object");
assert(typeof RegistryAuthorizerType === "object");
assert(typeof RegistryFilterName === "object");
assert(typeof RegistryRecordCredentialProviderType === "object");
assert(typeof RegistryRecordFilterName === "object");
assert(typeof RegistryRecordOAuthGrantType === "object");
assert(typeof RegistryRecordStatus === "object");
assert(typeof RegistryStatus === "object");
assert(typeof SourceType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VerificationStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof DependencyException$ === "object");
assert(InternalServerException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof ValidationException$ === "object");
assert(AgentRegistryControlServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForRegistryReady === "function");
assert(typeof waitForRegistryRecordApproved === "function");
assert(typeof waitUntilRegistryReady === "function");
assert(typeof waitUntilRegistryRecordApproved === "function");
// paginators
assert(typeof paginateListPublisherAssociations === "function");
assert(typeof paginateListPublishers === "function");
assert(typeof paginateListRegistries === "function");
assert(typeof paginateListRegistryRecords === "function");
console.log(`AgentRegistryControl index test passed.`);
