import {
  AcceptCodeValidation,
  AcceptPageCommand,
  AcceptType,
  AccessDeniedException,
  ActivateContactChannelCommand,
  ActivationStatus,
  ChannelType,
  ConflictException,
  ContactType,
  CreateContactChannelCommand,
  CreateContactCommand,
  CreateRotationCommand,
  CreateRotationOverrideCommand,
  DataEncryptionException,
  DayOfWeek,
  DeactivateContactChannelCommand,
  DeleteContactChannelCommand,
  DeleteContactCommand,
  DeleteRotationCommand,
  DeleteRotationOverrideCommand,
  DescribeEngagementCommand,
  DescribePageCommand,
  GetContactChannelCommand,
  GetContactCommand,
  GetContactPolicyCommand,
  GetRotationCommand,
  GetRotationOverrideCommand,
  InternalServerException,
  ListContactChannelsCommand,
  ListContactsCommand,
  ListEngagementsCommand,
  ListPageReceiptsCommand,
  ListPageResolutionsCommand,
  ListPagesByContactCommand,
  ListPagesByEngagementCommand,
  ListPreviewRotationShiftsCommand,
  ListRotationOverridesCommand,
  ListRotationShiftsCommand,
  ListRotationsCommand,
  ListTagsForResourceCommand,
  PutContactPolicyCommand,
  ReceiptType,
  ResourceNotFoundException,
  SSMContacts,
  SSMContactsClient,
  SSMContactsServiceException,
  SendActivationCodeCommand,
  ServiceQuotaExceededException,
  ShiftType,
  StartEngagementCommand,
  StopEngagementCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateContactChannelCommand,
  UpdateContactCommand,
  UpdateRotationCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListContactChannels,
  paginateListContacts,
  paginateListEngagements,
  paginateListPageReceipts,
  paginateListPageResolutions,
  paginateListPagesByContact,
  paginateListPagesByEngagement,
  paginateListPreviewRotationShifts,
  paginateListRotationOverrides,
  paginateListRotationShifts,
  paginateListRotations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMContactsClient === "function");
assert(typeof SSMContacts === "function");
// commands
assert(typeof AcceptPageCommand === "function");
assert(typeof ActivateContactChannelCommand === "function");
assert(typeof CreateContactCommand === "function");
assert(typeof CreateContactChannelCommand === "function");
assert(typeof CreateRotationCommand === "function");
assert(typeof CreateRotationOverrideCommand === "function");
assert(typeof DeactivateContactChannelCommand === "function");
assert(typeof DeleteContactCommand === "function");
assert(typeof DeleteContactChannelCommand === "function");
assert(typeof DeleteRotationCommand === "function");
assert(typeof DeleteRotationOverrideCommand === "function");
assert(typeof DescribeEngagementCommand === "function");
assert(typeof DescribePageCommand === "function");
assert(typeof GetContactCommand === "function");
assert(typeof GetContactChannelCommand === "function");
assert(typeof GetContactPolicyCommand === "function");
assert(typeof GetRotationCommand === "function");
assert(typeof GetRotationOverrideCommand === "function");
assert(typeof ListContactChannelsCommand === "function");
assert(typeof ListContactsCommand === "function");
assert(typeof ListEngagementsCommand === "function");
assert(typeof ListPageReceiptsCommand === "function");
assert(typeof ListPageResolutionsCommand === "function");
assert(typeof ListPagesByContactCommand === "function");
assert(typeof ListPagesByEngagementCommand === "function");
assert(typeof ListPreviewRotationShiftsCommand === "function");
assert(typeof ListRotationOverridesCommand === "function");
assert(typeof ListRotationsCommand === "function");
assert(typeof ListRotationShiftsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutContactPolicyCommand === "function");
assert(typeof SendActivationCodeCommand === "function");
assert(typeof StartEngagementCommand === "function");
assert(typeof StopEngagementCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateContactCommand === "function");
assert(typeof UpdateContactChannelCommand === "function");
assert(typeof UpdateRotationCommand === "function");
// enums
assert(typeof AcceptCodeValidation === "object");
assert(typeof AcceptType === "object");
assert(typeof ActivationStatus === "object");
assert(typeof ChannelType === "object");
assert(typeof ContactType === "object");
assert(typeof DayOfWeek === "object");
assert(typeof ReceiptType === "object");
assert(typeof ShiftType === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSMContactsServiceException);
assert(ConflictException.prototype instanceof SSMContactsServiceException);
assert(DataEncryptionException.prototype instanceof SSMContactsServiceException);
assert(InternalServerException.prototype instanceof SSMContactsServiceException);
assert(ResourceNotFoundException.prototype instanceof SSMContactsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SSMContactsServiceException);
assert(ThrottlingException.prototype instanceof SSMContactsServiceException);
assert(ValidationException.prototype instanceof SSMContactsServiceException);
assert(SSMContactsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListContactChannels === "function");
assert(typeof paginateListContacts === "function");
assert(typeof paginateListEngagements === "function");
assert(typeof paginateListPageReceipts === "function");
assert(typeof paginateListPageResolutions === "function");
assert(typeof paginateListPagesByContact === "function");
assert(typeof paginateListPagesByEngagement === "function");
assert(typeof paginateListPreviewRotationShifts === "function");
assert(typeof paginateListRotationOverrides === "function");
assert(typeof paginateListRotationShifts === "function");
assert(typeof paginateListRotations === "function");
console.log(`SSMContacts index test passed.`);
