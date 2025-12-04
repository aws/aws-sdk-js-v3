import {
  AcceptConnectionInvitationCommand,
  AccessType,
  AssociateAwsTrainingCertificationEmailDomainCommand,
  CancelConnectionCommand,
  CancelConnectionInvitationCommand,
  CancelProfileUpdateTaskCommand,
  ConnectionType,
  ConnectionTypeStatus,
  CreateConnectionInvitationCommand,
  CreatePartnerCommand,
  DisassociateAwsTrainingCertificationEmailDomainCommand,
  GetAllianceLeadContactCommand,
  GetConnectionCommand,
  GetConnectionInvitationCommand,
  GetConnectionPreferencesCommand,
  GetPartnerCommand,
  GetProfileUpdateTaskCommand,
  GetProfileVisibilityCommand,
  IndustrySegment,
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
  SendEmailVerificationCodeCommand,
  StartProfileUpdateTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConnectionPreferencesCommand,
  paginateListConnectionInvitations,
  paginateListConnections,
  paginateListPartners,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PartnerCentralAccountClient === "function")
assert(typeof PartnerCentralAccount === "function")
// commands
assert(typeof AcceptConnectionInvitationCommand === "function")
assert(typeof AssociateAwsTrainingCertificationEmailDomainCommand === "function")
assert(typeof CancelConnectionCommand === "function")
assert(typeof CancelConnectionInvitationCommand === "function")
assert(typeof CancelProfileUpdateTaskCommand === "function")
assert(typeof CreateConnectionInvitationCommand === "function")
assert(typeof CreatePartnerCommand === "function")
assert(typeof DisassociateAwsTrainingCertificationEmailDomainCommand === "function")
assert(typeof GetAllianceLeadContactCommand === "function")
assert(typeof GetConnectionCommand === "function")
assert(typeof GetConnectionInvitationCommand === "function")
assert(typeof GetConnectionPreferencesCommand === "function")
assert(typeof GetPartnerCommand === "function")
assert(typeof GetProfileUpdateTaskCommand === "function")
assert(typeof GetProfileVisibilityCommand === "function")
assert(typeof ListConnectionInvitationsCommand === "function")
assert(typeof ListConnectionsCommand === "function")
assert(typeof ListPartnersCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutAllianceLeadContactCommand === "function")
assert(typeof PutProfileVisibilityCommand === "function")
assert(typeof RejectConnectionInvitationCommand === "function")
assert(typeof SendEmailVerificationCodeCommand === "function")
assert(typeof StartProfileUpdateTaskCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateConnectionPreferencesCommand === "function")
// enums
assert(typeof AccessType === "object");
assert(typeof ConnectionType === "object");
assert(typeof ConnectionTypeStatus === "object");
assert(typeof IndustrySegment === "object");
assert(typeof InvitationStatus === "object");
assert(typeof ParticipantType === "object");
assert(typeof PrimarySolutionType === "object");
assert(typeof ProfileTaskStatus === "object");
assert(typeof ProfileValidationErrorReason === "object");
assert(typeof ProfileVisibility === "object");
// errors
assert(PartnerCentralAccountServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListConnectionInvitations === "function")
assert(typeof paginateListConnections === "function")
assert(typeof paginateListPartners === "function")
console.log(`PartnerCentralAccount index test passed.`);
