import {
  AcceptConnectionInvitation$,
  AcceptConnectionInvitationCommand,
  AcceptConnectionInvitationRequest$,
  AcceptConnectionInvitationResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AccessType,
  AccountSummary$,
  AllianceLeadContact$,
  AssociateAwsTrainingCertificationEmailDomain$,
  AssociateAwsTrainingCertificationEmailDomainCommand,
  AssociateAwsTrainingCertificationEmailDomainRequest$,
  AssociateAwsTrainingCertificationEmailDomainResponse$,
  BusinessValidationCode,
  BusinessValidationError$,
  BusinessVerificationDetails$,
  BusinessVerificationResponse$,
  CancelConnection$,
  CancelConnectionCommand,
  CancelConnectionInvitation$,
  CancelConnectionInvitationCommand,
  CancelConnectionInvitationRequest$,
  CancelConnectionInvitationResponse$,
  CancelConnectionRequest$,
  CancelConnectionResponse$,
  CancelProfileUpdateTask$,
  CancelProfileUpdateTaskCommand,
  CancelProfileUpdateTaskRequest$,
  CancelProfileUpdateTaskResponse$,
  ConflictException,
  ConflictException$,
  ConflictExceptionReason,
  Connection$,
  ConnectionInvitationSummary$,
  ConnectionSummary$,
  ConnectionType,
  ConnectionTypeDetail$,
  ConnectionTypeStatus,
  ConnectionTypeSummary$,
  CreateConnectionInvitation$,
  CreateConnectionInvitationCommand,
  CreateConnectionInvitationRequest$,
  CreateConnectionInvitationResponse$,
  CreatePartner$,
  CreatePartnerCommand,
  CreatePartnerRequest$,
  CreatePartnerResponse$,
  DisassociateAwsTrainingCertificationEmailDomain$,
  DisassociateAwsTrainingCertificationEmailDomainCommand,
  DisassociateAwsTrainingCertificationEmailDomainRequest$,
  DisassociateAwsTrainingCertificationEmailDomainResponse$,
  ErrorDetail$,
  FieldValidationCode,
  FieldValidationError$,
  GetAllianceLeadContact$,
  GetAllianceLeadContactCommand,
  GetAllianceLeadContactRequest$,
  GetAllianceLeadContactResponse$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionInvitation$,
  GetConnectionInvitationCommand,
  GetConnectionInvitationRequest$,
  GetConnectionInvitationResponse$,
  GetConnectionPreferences$,
  GetConnectionPreferencesCommand,
  GetConnectionPreferencesRequest$,
  GetConnectionPreferencesResponse$,
  GetConnectionRequest$,
  GetConnectionResponse$,
  GetPartner$,
  GetPartnerCommand,
  GetPartnerRequest$,
  GetPartnerResponse$,
  GetProfileUpdateTask$,
  GetProfileUpdateTaskCommand,
  GetProfileUpdateTaskRequest$,
  GetProfileUpdateTaskResponse$,
  GetProfileVisibility$,
  GetProfileVisibilityCommand,
  GetProfileVisibilityRequest$,
  GetProfileVisibilityResponse$,
  GetVerification$,
  GetVerificationCommand,
  GetVerificationRequest$,
  GetVerificationResponse$,
  IndustrySegment,
  InternalServerException,
  InternalServerException$,
  InvitationStatus,
  ListConnectionInvitations$,
  ListConnectionInvitationsCommand,
  ListConnectionInvitationsRequest$,
  ListConnectionInvitationsResponse$,
  ListConnections$,
  ListConnectionsCommand,
  ListConnectionsRequest$,
  ListConnectionsResponse$,
  ListPartners$,
  ListPartnersCommand,
  ListPartnersRequest$,
  ListPartnersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LocalizedContent$,
  paginateListConnectionInvitations,
  paginateListConnections,
  paginateListPartners,
  Participant$,
  ParticipantType,
  PartnerCentralAccount,
  PartnerCentralAccountClient,
  PartnerCentralAccountServiceException,
  PartnerDomain$,
  PartnerProfile$,
  PartnerProfileSummary$,
  PartnerSummary$,
  PrimarySolutionType,
  ProfileTaskStatus,
  ProfileValidationErrorReason,
  ProfileVisibility,
  PutAllianceLeadContact$,
  PutAllianceLeadContactCommand,
  PutAllianceLeadContactRequest$,
  PutAllianceLeadContactResponse$,
  PutProfileVisibility$,
  PutProfileVisibilityCommand,
  PutProfileVisibilityRequest$,
  PutProfileVisibilityResponse$,
  RegistrantVerificationDetails$,
  RegistrantVerificationResponse$,
  RejectConnectionInvitation$,
  RejectConnectionInvitationCommand,
  RejectConnectionInvitationRequest$,
  RejectConnectionInvitationResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceNotFoundExceptionReason,
  SellerProfileSummary$,
  SendEmailVerificationCode$,
  SendEmailVerificationCodeCommand,
  SendEmailVerificationCodeRequest$,
  SendEmailVerificationCodeResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceQuotaExceededExceptionReason,
  StartProfileUpdateTask$,
  StartProfileUpdateTaskCommand,
  StartProfileUpdateTaskRequest$,
  StartProfileUpdateTaskResponse$,
  StartVerification$,
  StartVerificationCommand,
  StartVerificationRequest$,
  StartVerificationResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskDetails$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnectionPreferences$,
  UpdateConnectionPreferencesCommand,
  UpdateConnectionPreferencesRequest$,
  UpdateConnectionPreferencesResponse$,
  ValidationError$,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  VerificationDetails$,
  VerificationResponseDetails$,
  VerificationStatus,
  VerificationType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralAccountClient === "function");
assert(typeof PartnerCentralAccount === "function");
// commands
assert(typeof AcceptConnectionInvitationCommand === "function");
assert(typeof AcceptConnectionInvitation$ === "object");
assert(typeof AssociateAwsTrainingCertificationEmailDomainCommand === "function");
assert(typeof AssociateAwsTrainingCertificationEmailDomain$ === "object");
assert(typeof CancelConnectionCommand === "function");
assert(typeof CancelConnection$ === "object");
assert(typeof CancelConnectionInvitationCommand === "function");
assert(typeof CancelConnectionInvitation$ === "object");
assert(typeof CancelProfileUpdateTaskCommand === "function");
assert(typeof CancelProfileUpdateTask$ === "object");
assert(typeof CreateConnectionInvitationCommand === "function");
assert(typeof CreateConnectionInvitation$ === "object");
assert(typeof CreatePartnerCommand === "function");
assert(typeof CreatePartner$ === "object");
assert(typeof DisassociateAwsTrainingCertificationEmailDomainCommand === "function");
assert(typeof DisassociateAwsTrainingCertificationEmailDomain$ === "object");
assert(typeof GetAllianceLeadContactCommand === "function");
assert(typeof GetAllianceLeadContact$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetConnectionInvitationCommand === "function");
assert(typeof GetConnectionInvitation$ === "object");
assert(typeof GetConnectionPreferencesCommand === "function");
assert(typeof GetConnectionPreferences$ === "object");
assert(typeof GetPartnerCommand === "function");
assert(typeof GetPartner$ === "object");
assert(typeof GetProfileUpdateTaskCommand === "function");
assert(typeof GetProfileUpdateTask$ === "object");
assert(typeof GetProfileVisibilityCommand === "function");
assert(typeof GetProfileVisibility$ === "object");
assert(typeof GetVerificationCommand === "function");
assert(typeof GetVerification$ === "object");
assert(typeof ListConnectionInvitationsCommand === "function");
assert(typeof ListConnectionInvitations$ === "object");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListConnections$ === "object");
assert(typeof ListPartnersCommand === "function");
assert(typeof ListPartners$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAllianceLeadContactCommand === "function");
assert(typeof PutAllianceLeadContact$ === "object");
assert(typeof PutProfileVisibilityCommand === "function");
assert(typeof PutProfileVisibility$ === "object");
assert(typeof RejectConnectionInvitationCommand === "function");
assert(typeof RejectConnectionInvitation$ === "object");
assert(typeof SendEmailVerificationCodeCommand === "function");
assert(typeof SendEmailVerificationCode$ === "object");
assert(typeof StartProfileUpdateTaskCommand === "function");
assert(typeof StartProfileUpdateTask$ === "object");
assert(typeof StartVerificationCommand === "function");
assert(typeof StartVerification$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectionPreferencesCommand === "function");
assert(typeof UpdateConnectionPreferences$ === "object");
// structural schemas
assert(typeof AcceptConnectionInvitationRequest$ === "object");
assert(typeof AcceptConnectionInvitationResponse$ === "object");
assert(typeof AccountSummary$ === "object");
assert(typeof AllianceLeadContact$ === "object");
assert(typeof AssociateAwsTrainingCertificationEmailDomainRequest$ === "object");
assert(typeof AssociateAwsTrainingCertificationEmailDomainResponse$ === "object");
assert(typeof BusinessValidationError$ === "object");
assert(typeof BusinessVerificationDetails$ === "object");
assert(typeof BusinessVerificationResponse$ === "object");
assert(typeof CancelConnectionInvitationRequest$ === "object");
assert(typeof CancelConnectionInvitationResponse$ === "object");
assert(typeof CancelConnectionRequest$ === "object");
assert(typeof CancelConnectionResponse$ === "object");
assert(typeof CancelProfileUpdateTaskRequest$ === "object");
assert(typeof CancelProfileUpdateTaskResponse$ === "object");
assert(typeof Connection$ === "object");
assert(typeof ConnectionInvitationSummary$ === "object");
assert(typeof ConnectionSummary$ === "object");
assert(typeof ConnectionTypeDetail$ === "object");
assert(typeof ConnectionTypeSummary$ === "object");
assert(typeof CreateConnectionInvitationRequest$ === "object");
assert(typeof CreateConnectionInvitationResponse$ === "object");
assert(typeof CreatePartnerRequest$ === "object");
assert(typeof CreatePartnerResponse$ === "object");
assert(typeof DisassociateAwsTrainingCertificationEmailDomainRequest$ === "object");
assert(typeof DisassociateAwsTrainingCertificationEmailDomainResponse$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof FieldValidationError$ === "object");
assert(typeof GetAllianceLeadContactRequest$ === "object");
assert(typeof GetAllianceLeadContactResponse$ === "object");
assert(typeof GetConnectionInvitationRequest$ === "object");
assert(typeof GetConnectionInvitationResponse$ === "object");
assert(typeof GetConnectionPreferencesRequest$ === "object");
assert(typeof GetConnectionPreferencesResponse$ === "object");
assert(typeof GetConnectionRequest$ === "object");
assert(typeof GetConnectionResponse$ === "object");
assert(typeof GetPartnerRequest$ === "object");
assert(typeof GetPartnerResponse$ === "object");
assert(typeof GetProfileUpdateTaskRequest$ === "object");
assert(typeof GetProfileUpdateTaskResponse$ === "object");
assert(typeof GetProfileVisibilityRequest$ === "object");
assert(typeof GetProfileVisibilityResponse$ === "object");
assert(typeof GetVerificationRequest$ === "object");
assert(typeof GetVerificationResponse$ === "object");
assert(typeof ListConnectionInvitationsRequest$ === "object");
assert(typeof ListConnectionInvitationsResponse$ === "object");
assert(typeof ListConnectionsRequest$ === "object");
assert(typeof ListConnectionsResponse$ === "object");
assert(typeof ListPartnersRequest$ === "object");
assert(typeof ListPartnersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LocalizedContent$ === "object");
assert(typeof Participant$ === "object");
assert(typeof PartnerDomain$ === "object");
assert(typeof PartnerProfile$ === "object");
assert(typeof PartnerProfileSummary$ === "object");
assert(typeof PartnerSummary$ === "object");
assert(typeof PutAllianceLeadContactRequest$ === "object");
assert(typeof PutAllianceLeadContactResponse$ === "object");
assert(typeof PutProfileVisibilityRequest$ === "object");
assert(typeof PutProfileVisibilityResponse$ === "object");
assert(typeof RegistrantVerificationDetails$ === "object");
assert(typeof RegistrantVerificationResponse$ === "object");
assert(typeof RejectConnectionInvitationRequest$ === "object");
assert(typeof RejectConnectionInvitationResponse$ === "object");
assert(typeof SellerProfileSummary$ === "object");
assert(typeof SendEmailVerificationCodeRequest$ === "object");
assert(typeof SendEmailVerificationCodeResponse$ === "object");
assert(typeof StartProfileUpdateTaskRequest$ === "object");
assert(typeof StartProfileUpdateTaskResponse$ === "object");
assert(typeof StartVerificationRequest$ === "object");
assert(typeof StartVerificationResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TaskDetails$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectionPreferencesRequest$ === "object");
assert(typeof UpdateConnectionPreferencesResponse$ === "object");
assert(typeof ValidationError$ === "object");
assert(typeof VerificationDetails$ === "object");
assert(typeof VerificationResponseDetails$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof AccessType === "object");
assert(typeof BusinessValidationCode === "object");
assert(typeof ConflictExceptionReason === "object");
assert(typeof ConnectionType === "object");
assert(typeof ConnectionTypeStatus === "object");
assert(typeof FieldValidationCode === "object");
assert(typeof IndustrySegment === "object");
assert(typeof InvitationStatus === "object");
assert(typeof ParticipantType === "object");
assert(typeof PrimarySolutionType === "object");
assert(typeof ProfileTaskStatus === "object");
assert(typeof ProfileValidationErrorReason === "object");
assert(typeof ProfileVisibility === "object");
assert(typeof ResourceNotFoundExceptionReason === "object");
assert(typeof ServiceQuotaExceededExceptionReason === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VerificationStatus === "object");
assert(typeof VerificationType === "object");
// errors
assert(AccessDeniedException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PartnerCentralAccountServiceException);
assert(typeof ValidationException$ === "object");
assert(PartnerCentralAccountServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnectionInvitations === "function");
assert(typeof paginateListConnections === "function");
assert(typeof paginateListPartners === "function");
console.log(`PartnerCentralAccount index test passed.`);
