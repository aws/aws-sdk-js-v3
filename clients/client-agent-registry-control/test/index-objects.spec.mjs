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
  AgUiDescriptor$,
  ApprovalConfiguration$,
  AuthorizerConfiguration$,
  AuthorizingClaimMatchValueType$,
  AutoApprovalRule,
  AutoDetection$,
  AutoDetectionConfiguration$,
  AutoDetectionScope,
  AutoDetectionStatus,
  ClaimMatchOperatorType,
  ClaimMatchValueType$,
  ConflictException,
  ConflictException$,
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
  DeleteRegistry$,
  DeleteRegistryCommand,
  DeleteRegistryRecord$,
  DeleteRegistryRecordCommand,
  DeleteRegistryRecordRequest$,
  DeleteRegistryRecordResponse$,
  DeleteRegistryRequest$,
  DeleteRegistryResponse$,
  Descriptors$,
  DescriptorSource$,
  DescriptorSourceFromUrl$,
  DiscoveryConfiguration$,
  EncryptionConfiguration$,
  EndpointIpAddressType,
  GetRegistry$,
  GetRegistryCommand,
  GetRegistryRecord$,
  GetRegistryRecordCommand,
  GetRegistryRecordRequest$,
  GetRegistryRecordResponse$,
  GetRegistryRequest$,
  GetRegistryResponse$,
  HttpDescriptor$,
  InboundTokenClaimValueType,
  InternalServerException,
  InternalServerException$,
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
  paginateListRegistries,
  paginateListRegistryRecords,
  PrivateEndpoint$,
  PrivateEndpointOverride$,
  Provenance$,
  ProvenanceRelation,
  ProvenanceSummary$,
  RecordType,
  RegistryAuthorizerType,
  RegistryFilter$,
  RegistryFilterName,
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
  RegistryStatus,
  RegistrySummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SelfManagedLatticeResource$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
  UpdatedAgUiDescriptor$,
  UpdatedAgUiDescriptorFields$,
  UpdatedApprovalConfiguration$,
  UpdatedAuthorizerConfiguration$,
  UpdatedAutoDetectionConfiguration$,
  UpdatedCustomDescriptor$,
  UpdatedCustomDescriptorFields$,
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
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
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
assert(typeof CreateRegistryCommand === "function");
assert(typeof CreateRegistry$ === "object");
assert(typeof CreateRegistryRecordCommand === "function");
assert(typeof CreateRegistryRecord$ === "object");
assert(typeof DeleteRegistryCommand === "function");
assert(typeof DeleteRegistry$ === "object");
assert(typeof DeleteRegistryRecordCommand === "function");
assert(typeof DeleteRegistryRecord$ === "object");
assert(typeof GetRegistryCommand === "function");
assert(typeof GetRegistry$ === "object");
assert(typeof GetRegistryRecordCommand === "function");
assert(typeof GetRegistryRecord$ === "object");
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
assert(typeof UpdateRegistryCommand === "function");
assert(typeof UpdateRegistry$ === "object");
assert(typeof UpdateRegistryRecordCommand === "function");
assert(typeof UpdateRegistryRecord$ === "object");
assert(typeof UpdateRegistryRecordStatusCommand === "function");
assert(typeof UpdateRegistryRecordStatus$ === "object");
// structural schemas
assert(typeof A2aAgentCardDescriptor$ === "object");
assert(typeof AgentCoreGatewaySourceDetails$ === "object");
assert(typeof AgentCoreRuntimeProtocolConfiguration$ === "object");
assert(typeof AgentCoreRuntimeSourceDetails$ === "object");
assert(typeof AgentSkillsAdditionalData$ === "object");
assert(typeof AgentSkillsDefinitionDescriptor$ === "object");
assert(typeof AgentSkillsMdDescriptor$ === "object");
assert(typeof AgUiDescriptor$ === "object");
assert(typeof ApprovalConfiguration$ === "object");
assert(typeof AuthorizerConfiguration$ === "object");
assert(typeof AuthorizingClaimMatchValueType$ === "object");
assert(typeof AutoDetection$ === "object");
assert(typeof AutoDetectionConfiguration$ === "object");
assert(typeof ClaimMatchValueType$ === "object");
assert(typeof CreateRegistryRecordRequest$ === "object");
assert(typeof CreateRegistryRecordResponse$ === "object");
assert(typeof CreateRegistryRequest$ === "object");
assert(typeof CreateRegistryResponse$ === "object");
assert(typeof CustomClaimValidationType$ === "object");
assert(typeof CustomDescriptor$ === "object");
assert(typeof CustomJWTAuthorizerConfiguration$ === "object");
assert(typeof DeleteRegistryRecordRequest$ === "object");
assert(typeof DeleteRegistryRecordResponse$ === "object");
assert(typeof DeleteRegistryRequest$ === "object");
assert(typeof DeleteRegistryResponse$ === "object");
assert(typeof Descriptors$ === "object");
assert(typeof DescriptorSource$ === "object");
assert(typeof DescriptorSourceFromUrl$ === "object");
assert(typeof DiscoveryConfiguration$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof GetRegistryRecordRequest$ === "object");
assert(typeof GetRegistryRecordResponse$ === "object");
assert(typeof GetRegistryRequest$ === "object");
assert(typeof GetRegistryResponse$ === "object");
assert(typeof HttpDescriptor$ === "object");
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
assert(typeof PrivateEndpoint$ === "object");
assert(typeof PrivateEndpointOverride$ === "object");
assert(typeof Provenance$ === "object");
assert(typeof ProvenanceSummary$ === "object");
assert(typeof RegistryFilter$ === "object");
assert(typeof RegistryRecordCredentialProviderConfiguration$ === "object");
assert(typeof RegistryRecordCredentialProviderUnion$ === "object");
assert(typeof RegistryRecordFilter$ === "object");
assert(typeof RegistryRecordIamCredentialProvider$ === "object");
assert(typeof RegistryRecordOAuthCredentialProvider$ === "object");
assert(typeof RegistryRecordSummary$ === "object");
assert(typeof RegistrySummary$ === "object");
assert(typeof SelfManagedLatticeResource$ === "object");
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
assert(typeof UpdatedAgUiDescriptor$ === "object");
assert(typeof UpdatedAgUiDescriptorFields$ === "object");
assert(typeof UpdatedApprovalConfiguration$ === "object");
assert(typeof UpdatedAuthorizerConfiguration$ === "object");
assert(typeof UpdatedAutoDetectionConfiguration$ === "object");
assert(typeof UpdatedCustomDescriptor$ === "object");
assert(typeof UpdatedCustomDescriptorFields$ === "object");
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
assert(typeof UpdateRegistryRecordRequest$ === "object");
assert(typeof UpdateRegistryRecordResponse$ === "object");
assert(typeof UpdateRegistryRecordStatusRequest$ === "object");
assert(typeof UpdateRegistryRecordStatusResponse$ === "object");
assert(typeof UpdateRegistryRequest$ === "object");
assert(typeof UpdateRegistryResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WorkloadIdentityDetails$ === "object");
// enums
assert(typeof AgentCoreGatewayProtocolType === "object");
assert(typeof AgentCoreRuntimeServerProtocol === "object");
assert(typeof AutoApprovalRule === "object");
assert(typeof AutoDetectionScope === "object");
assert(typeof AutoDetectionStatus === "object");
assert(typeof ClaimMatchOperatorType === "object");
assert(typeof EndpointIpAddressType === "object");
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
// errors
assert(AccessDeniedException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AgentRegistryControlServiceException);
assert(typeof ConflictException$ === "object");
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
assert(typeof paginateListRegistries === "function");
assert(typeof paginateListRegistryRecords === "function");
console.log(`AgentRegistryControl index test passed.`);
