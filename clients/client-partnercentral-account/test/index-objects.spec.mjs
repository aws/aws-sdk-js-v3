import {
  AcceptConnectionInvitationCommand,
  AccessDeniedException,
  AccessDeniedExceptionReason,
  AccessType,
  AssociateAwsTrainingCertificationEmailDomainCommand,
  BusinessValidationCode,
  CancelConnectionCommand,
  CancelConnectionInvitationCommand,
  CancelProfileUpdateTaskCommand,
  ConflictException,
  ConflictExceptionReason,
  ConnectionType,
  ConnectionTypeStatus,
  CreateConnectionInvitationCommand,
  CreatePartnerCommand,
  DisassociateAwsTrainingCertificationEmailDomainCommand,
  FieldValidationCode,
  GetAllianceLeadContactCommand,
  GetConnectionCommand,
  GetConnectionInvitationCommand,
  GetConnectionPreferencesCommand,
  GetPartnerCommand,
  GetProfileUpdateTaskCommand,
  GetProfileVisibilityCommand,
  GetVerificationCommand,
  IndustrySegment,
  InternalServerException,
  InvitationStatus,
  ListConnectionInvitationsCommand,
  ListConnectionsCommand,
  ListPartnersCommand,
  ListTagsForResourceCommand,
  ParticipantType,
  PartnerCentralAccount,
  PartnerCentralAccountClient,
  PartnerCentralAccountServiceException,
  PrimarySolutionType,
  ProfileTaskStatus,
  ProfileValidationErrorReason,
  ProfileVisibility,
  PutAllianceLeadContactCommand,
  PutProfileVisibilityCommand,
  RejectConnectionInvitationCommand,
  ResourceNotFoundException,
  ResourceNotFoundExceptionReason,
  SendEmailVerificationCodeCommand,
  ServiceQuotaExceededException,
  ServiceQuotaExceededExceptionReason,
  StartProfileUpdateTaskCommand,
  StartVerificationCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateConnectionPreferencesCommand,
  ValidationException,
  ValidationExceptionReason,
  VerificationStatus,
  VerificationType,
  paginateListConnectionInvitations,
  paginateListConnections,
  paginateListPartners,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralAccountClient === "function");
assert(typeof PartnerCentralAccount === "function");
// commands
assert(typeof AcceptConnectionInvitationCommand === "function");
assert(typeof AssociateAwsTrainingCertificationEmailDomainCommand === "function");
assert(typeof CancelConnectionCommand === "function");
assert(typeof CancelConnectionInvitationCommand === "function");
assert(typeof CancelProfileUpdateTaskCommand === "function");
assert(typeof CreateConnectionInvitationCommand === "function");
assert(typeof CreatePartnerCommand === "function");
assert(typeof DisassociateAwsTrainingCertificationEmailDomainCommand === "function");
assert(typeof GetAllianceLeadContactCommand === "function");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnectionInvitationCommand === "function");
assert(typeof GetConnectionPreferencesCommand === "function");
assert(typeof GetPartnerCommand === "function");
assert(typeof GetProfileUpdateTaskCommand === "function");
assert(typeof GetProfileVisibilityCommand === "function");
assert(typeof GetVerificationCommand === "function");
assert(typeof ListConnectionInvitationsCommand === "function");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListPartnersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAllianceLeadContactCommand === "function");
assert(typeof PutProfileVisibilityCommand === "function");
assert(typeof RejectConnectionInvitationCommand === "function");
assert(typeof SendEmailVerificationCodeCommand === "function");
assert(typeof StartProfileUpdateTaskCommand === "function");
assert(typeof StartVerificationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateConnectionPreferencesCommand === "function");
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
assert(ConflictException.prototype instanceof PartnerCentralAccountServiceException);
assert(InternalServerException.prototype instanceof PartnerCentralAccountServiceException);
assert(ResourceNotFoundException.prototype instanceof PartnerCentralAccountServiceException);
assert(ServiceQuotaExceededException.prototype instanceof PartnerCentralAccountServiceException);
assert(ThrottlingException.prototype instanceof PartnerCentralAccountServiceException);
assert(ValidationException.prototype instanceof PartnerCentralAccountServiceException);
assert(PartnerCentralAccountServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListConnectionInvitations === "function");
assert(typeof paginateListConnections === "function");
assert(typeof paginateListPartners === "function");
console.log(`PartnerCentralAccount index test passed.`);
