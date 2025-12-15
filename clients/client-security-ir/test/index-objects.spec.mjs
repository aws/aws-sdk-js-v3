import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionType,
  AwsRegion,
  BatchGetMemberAccountDetails$,
  BatchGetMemberAccountDetailsCommand,
  BatchGetMemberAccountDetailsRequest$,
  BatchGetMemberAccountDetailsResponse$,
  CancelMembership$,
  CancelMembershipCommand,
  CancelMembershipRequest$,
  CancelMembershipResponse$,
  CaseAttachmentAttributes$,
  CaseAttachmentStatus,
  CaseEditItem$,
  CaseMetadataEntry$,
  CaseStatus,
  CloseCase$,
  CloseCaseCommand,
  CloseCaseRequest$,
  CloseCaseResponse$,
  ClosureCode,
  CommunicationType,
  ConflictException,
  ConflictException$,
  CreateCase$,
  CreateCaseCommand,
  CreateCaseComment$,
  CreateCaseCommentCommand,
  CreateCaseCommentRequest$,
  CreateCaseCommentResponse$,
  CreateCaseRequest$,
  CreateCaseResponse$,
  CreateMembership$,
  CreateMembershipCommand,
  CreateMembershipRequest$,
  CreateMembershipResponse$,
  CustomerType,
  EngagementType,
  ExecutionStatus,
  GetCase$,
  GetCaseAttachmentDownloadUrl$,
  GetCaseAttachmentDownloadUrlCommand,
  GetCaseAttachmentDownloadUrlRequest$,
  GetCaseAttachmentDownloadUrlResponse$,
  GetCaseAttachmentUploadUrl$,
  GetCaseAttachmentUploadUrlCommand,
  GetCaseAttachmentUploadUrlRequest$,
  GetCaseAttachmentUploadUrlResponse$,
  GetCaseCommand,
  GetCaseRequest$,
  GetCaseResponse$,
  GetMembership$,
  GetMembershipAccountDetailError$,
  GetMembershipAccountDetailItem$,
  GetMembershipCommand,
  GetMembershipRequest$,
  GetMembershipResponse$,
  ImpactedAwsRegion$,
  IncidentResponder$,
  InternalServerException,
  InternalServerException$,
  InvalidTokenException,
  InvalidTokenException$,
  InvestigationAction$,
  InvestigationFeedback$,
  ListCaseEdits$,
  ListCaseEditsCommand,
  ListCaseEditsRequest$,
  ListCaseEditsResponse$,
  ListCases$,
  ListCasesCommand,
  ListCasesItem$,
  ListCasesRequest$,
  ListCasesResponse$,
  ListComments$,
  ListCommentsCommand,
  ListCommentsItem$,
  ListCommentsRequest$,
  ListCommentsResponse$,
  ListInvestigations$,
  ListInvestigationsCommand,
  ListInvestigationsRequest$,
  ListInvestigationsResponse$,
  ListMembershipItem$,
  ListMemberships$,
  ListMembershipsCommand,
  ListMembershipsRequest$,
  ListMembershipsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MembershipAccountRelationshipStatus,
  MembershipAccountRelationshipType,
  MembershipAccountsConfigurations$,
  MembershipAccountsConfigurationsUpdate$,
  MembershipStatus,
  OptInFeature$,
  OptInFeatureName,
  PendingAction,
  ResolverType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SecurityIR,
  SecurityIRClient,
  SecurityIRServiceException,
  SecurityIncidentResponseNotActiveException,
  SecurityIncidentResponseNotActiveException$,
  SelfManagedCaseStatus,
  SendFeedback$,
  SendFeedbackCommand,
  SendFeedbackRequest$,
  SendFeedbackResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThreatActorIp$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateCase$,
  UpdateCaseCommand,
  UpdateCaseComment$,
  UpdateCaseCommentCommand,
  UpdateCaseCommentRequest$,
  UpdateCaseCommentResponse$,
  UpdateCaseRequest$,
  UpdateCaseResponse$,
  UpdateCaseStatus$,
  UpdateCaseStatusCommand,
  UpdateCaseStatusRequest$,
  UpdateCaseStatusResponse$,
  UpdateMembership$,
  UpdateMembershipCommand,
  UpdateMembershipRequest$,
  UpdateMembershipResponse$,
  UpdateResolverType$,
  UpdateResolverTypeCommand,
  UpdateResolverTypeRequest$,
  UpdateResolverTypeResponse$,
  UsefulnessRating,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  Watcher$,
  paginateListCaseEdits,
  paginateListCases,
  paginateListComments,
  paginateListInvestigations,
  paginateListMemberships,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityIRClient === "function");
assert(typeof SecurityIR === "function");
// commands
assert(typeof BatchGetMemberAccountDetailsCommand === "function");
assert(typeof BatchGetMemberAccountDetails$ === "object");
assert(typeof CancelMembershipCommand === "function");
assert(typeof CancelMembership$ === "object");
assert(typeof CloseCaseCommand === "function");
assert(typeof CloseCase$ === "object");
assert(typeof CreateCaseCommand === "function");
assert(typeof CreateCase$ === "object");
assert(typeof CreateCaseCommentCommand === "function");
assert(typeof CreateCaseComment$ === "object");
assert(typeof CreateMembershipCommand === "function");
assert(typeof CreateMembership$ === "object");
assert(typeof GetCaseCommand === "function");
assert(typeof GetCase$ === "object");
assert(typeof GetCaseAttachmentDownloadUrlCommand === "function");
assert(typeof GetCaseAttachmentDownloadUrl$ === "object");
assert(typeof GetCaseAttachmentUploadUrlCommand === "function");
assert(typeof GetCaseAttachmentUploadUrl$ === "object");
assert(typeof GetMembershipCommand === "function");
assert(typeof GetMembership$ === "object");
assert(typeof ListCaseEditsCommand === "function");
assert(typeof ListCaseEdits$ === "object");
assert(typeof ListCasesCommand === "function");
assert(typeof ListCases$ === "object");
assert(typeof ListCommentsCommand === "function");
assert(typeof ListComments$ === "object");
assert(typeof ListInvestigationsCommand === "function");
assert(typeof ListInvestigations$ === "object");
assert(typeof ListMembershipsCommand === "function");
assert(typeof ListMemberships$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SendFeedbackCommand === "function");
assert(typeof SendFeedback$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCaseCommand === "function");
assert(typeof UpdateCase$ === "object");
assert(typeof UpdateCaseCommentCommand === "function");
assert(typeof UpdateCaseComment$ === "object");
assert(typeof UpdateCaseStatusCommand === "function");
assert(typeof UpdateCaseStatus$ === "object");
assert(typeof UpdateMembershipCommand === "function");
assert(typeof UpdateMembership$ === "object");
assert(typeof UpdateResolverTypeCommand === "function");
assert(typeof UpdateResolverType$ === "object");
// structural schemas
assert(typeof BatchGetMemberAccountDetailsRequest$ === "object");
assert(typeof BatchGetMemberAccountDetailsResponse$ === "object");
assert(typeof CancelMembershipRequest$ === "object");
assert(typeof CancelMembershipResponse$ === "object");
assert(typeof CaseAttachmentAttributes$ === "object");
assert(typeof CaseEditItem$ === "object");
assert(typeof CaseMetadataEntry$ === "object");
assert(typeof CloseCaseRequest$ === "object");
assert(typeof CloseCaseResponse$ === "object");
assert(typeof CreateCaseCommentRequest$ === "object");
assert(typeof CreateCaseCommentResponse$ === "object");
assert(typeof CreateCaseRequest$ === "object");
assert(typeof CreateCaseResponse$ === "object");
assert(typeof CreateMembershipRequest$ === "object");
assert(typeof CreateMembershipResponse$ === "object");
assert(typeof GetCaseAttachmentDownloadUrlRequest$ === "object");
assert(typeof GetCaseAttachmentDownloadUrlResponse$ === "object");
assert(typeof GetCaseAttachmentUploadUrlRequest$ === "object");
assert(typeof GetCaseAttachmentUploadUrlResponse$ === "object");
assert(typeof GetCaseRequest$ === "object");
assert(typeof GetCaseResponse$ === "object");
assert(typeof GetMembershipAccountDetailError$ === "object");
assert(typeof GetMembershipAccountDetailItem$ === "object");
assert(typeof GetMembershipRequest$ === "object");
assert(typeof GetMembershipResponse$ === "object");
assert(typeof ImpactedAwsRegion$ === "object");
assert(typeof IncidentResponder$ === "object");
assert(typeof InvestigationAction$ === "object");
assert(typeof InvestigationFeedback$ === "object");
assert(typeof ListCaseEditsRequest$ === "object");
assert(typeof ListCaseEditsResponse$ === "object");
assert(typeof ListCasesItem$ === "object");
assert(typeof ListCasesRequest$ === "object");
assert(typeof ListCasesResponse$ === "object");
assert(typeof ListCommentsItem$ === "object");
assert(typeof ListCommentsRequest$ === "object");
assert(typeof ListCommentsResponse$ === "object");
assert(typeof ListInvestigationsRequest$ === "object");
assert(typeof ListInvestigationsResponse$ === "object");
assert(typeof ListMembershipItem$ === "object");
assert(typeof ListMembershipsRequest$ === "object");
assert(typeof ListMembershipsResponse$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MembershipAccountsConfigurations$ === "object");
assert(typeof MembershipAccountsConfigurationsUpdate$ === "object");
assert(typeof OptInFeature$ === "object");
assert(typeof SendFeedbackRequest$ === "object");
assert(typeof SendFeedbackResponse$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof ThreatActorIp$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateCaseCommentRequest$ === "object");
assert(typeof UpdateCaseCommentResponse$ === "object");
assert(typeof UpdateCaseRequest$ === "object");
assert(typeof UpdateCaseResponse$ === "object");
assert(typeof UpdateCaseStatusRequest$ === "object");
assert(typeof UpdateCaseStatusResponse$ === "object");
assert(typeof UpdateMembershipRequest$ === "object");
assert(typeof UpdateMembershipResponse$ === "object");
assert(typeof UpdateResolverTypeRequest$ === "object");
assert(typeof UpdateResolverTypeResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof Watcher$ === "object");
// enums
assert(typeof ActionType === "object");
assert(typeof AwsRegion === "object");
assert(typeof CaseAttachmentStatus === "object");
assert(typeof CaseStatus === "object");
assert(typeof ClosureCode === "object");
assert(typeof CommunicationType === "object");
assert(typeof CustomerType === "object");
assert(typeof EngagementType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof MembershipAccountRelationshipStatus === "object");
assert(typeof MembershipAccountRelationshipType === "object");
assert(typeof MembershipStatus === "object");
assert(typeof OptInFeatureName === "object");
assert(typeof PendingAction === "object");
assert(typeof ResolverType === "object");
assert(typeof SelfManagedCaseStatus === "object");
assert(typeof UsefulnessRating === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof SecurityIRServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SecurityIRServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SecurityIRServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidTokenException.prototype instanceof SecurityIRServiceException);
assert(typeof InvalidTokenException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SecurityIRServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SecurityIncidentResponseNotActiveException.prototype instanceof SecurityIRServiceException);
assert(typeof SecurityIncidentResponseNotActiveException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SecurityIRServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SecurityIRServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SecurityIRServiceException);
assert(typeof ValidationException$ === "object");
assert(SecurityIRServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCaseEdits === "function");
assert(typeof paginateListCases === "function");
assert(typeof paginateListComments === "function");
assert(typeof paginateListInvestigations === "function");
assert(typeof paginateListMemberships === "function");
console.log(`SecurityIR index test passed.`);
