import {
  AcceptCodeValidation,
  AcceptPage$,
  AcceptPageCommand,
  AcceptPageRequest$,
  AcceptPageResult$,
  AcceptType,
  AccessDeniedException,
  AccessDeniedException$,
  ActivateContactChannel$,
  ActivateContactChannelCommand,
  ActivateContactChannelRequest$,
  ActivateContactChannelResult$,
  ActivationStatus,
  ChannelTargetInfo$,
  ChannelType,
  ConflictException,
  ConflictException$,
  Contact$,
  ContactChannel$,
  ContactChannelAddress$,
  ContactTargetInfo$,
  ContactType,
  CoverageTime$,
  CreateContact$,
  CreateContactChannel$,
  CreateContactChannelCommand,
  CreateContactChannelRequest$,
  CreateContactChannelResult$,
  CreateContactCommand,
  CreateContactRequest$,
  CreateContactResult$,
  CreateRotation$,
  CreateRotationCommand,
  CreateRotationOverride$,
  CreateRotationOverrideCommand,
  CreateRotationOverrideRequest$,
  CreateRotationOverrideResult$,
  CreateRotationRequest$,
  CreateRotationResult$,
  DataEncryptionException,
  DataEncryptionException$,
  DayOfWeek,
  DeactivateContactChannel$,
  DeactivateContactChannelCommand,
  DeactivateContactChannelRequest$,
  DeactivateContactChannelResult$,
  DeleteContact$,
  DeleteContactChannel$,
  DeleteContactChannelCommand,
  DeleteContactChannelRequest$,
  DeleteContactChannelResult$,
  DeleteContactCommand,
  DeleteContactRequest$,
  DeleteContactResult$,
  DeleteRotation$,
  DeleteRotationCommand,
  DeleteRotationOverride$,
  DeleteRotationOverrideCommand,
  DeleteRotationOverrideRequest$,
  DeleteRotationOverrideResult$,
  DeleteRotationRequest$,
  DeleteRotationResult$,
  DependentEntity$,
  DescribeEngagement$,
  DescribeEngagementCommand,
  DescribeEngagementRequest$,
  DescribeEngagementResult$,
  DescribePage$,
  DescribePageCommand,
  DescribePageRequest$,
  DescribePageResult$,
  Engagement$,
  GetContact$,
  GetContactChannel$,
  GetContactChannelCommand,
  GetContactChannelRequest$,
  GetContactChannelResult$,
  GetContactCommand,
  GetContactPolicy$,
  GetContactPolicyCommand,
  GetContactPolicyRequest$,
  GetContactPolicyResult$,
  GetContactRequest$,
  GetContactResult$,
  GetRotation$,
  GetRotationCommand,
  GetRotationOverride$,
  GetRotationOverrideCommand,
  GetRotationOverrideRequest$,
  GetRotationOverrideResult$,
  GetRotationRequest$,
  GetRotationResult$,
  HandOffTime$,
  InternalServerException,
  InternalServerException$,
  ListContactChannels$,
  ListContactChannelsCommand,
  ListContactChannelsRequest$,
  ListContactChannelsResult$,
  ListContacts$,
  ListContactsCommand,
  ListContactsRequest$,
  ListContactsResult$,
  ListEngagements$,
  ListEngagementsCommand,
  ListEngagementsRequest$,
  ListEngagementsResult$,
  ListPageReceipts$,
  ListPageReceiptsCommand,
  ListPageReceiptsRequest$,
  ListPageReceiptsResult$,
  ListPageResolutions$,
  ListPageResolutionsCommand,
  ListPageResolutionsRequest$,
  ListPageResolutionsResult$,
  ListPagesByContact$,
  ListPagesByContactCommand,
  ListPagesByContactRequest$,
  ListPagesByContactResult$,
  ListPagesByEngagement$,
  ListPagesByEngagementCommand,
  ListPagesByEngagementRequest$,
  ListPagesByEngagementResult$,
  ListPreviewRotationShifts$,
  ListPreviewRotationShiftsCommand,
  ListPreviewRotationShiftsRequest$,
  ListPreviewRotationShiftsResult$,
  ListRotationOverrides$,
  ListRotationOverridesCommand,
  ListRotationOverridesRequest$,
  ListRotationOverridesResult$,
  ListRotationShifts$,
  ListRotationShiftsCommand,
  ListRotationShiftsRequest$,
  ListRotationShiftsResult$,
  ListRotations$,
  ListRotationsCommand,
  ListRotationsRequest$,
  ListRotationsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  MonthlySetting$,
  Page$,
  Plan$,
  PreviewOverride$,
  PutContactPolicy$,
  PutContactPolicyCommand,
  PutContactPolicyRequest$,
  PutContactPolicyResult$,
  Receipt$,
  ReceiptType,
  RecurrenceSettings$,
  ResolutionContact$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Rotation$,
  RotationOverride$,
  RotationShift$,
  SSMContacts,
  SSMContactsClient,
  SSMContactsServiceException,
  SendActivationCode$,
  SendActivationCodeCommand,
  SendActivationCodeRequest$,
  SendActivationCodeResult$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ShiftDetails$,
  ShiftType,
  Stage$,
  StartEngagement$,
  StartEngagementCommand,
  StartEngagementRequest$,
  StartEngagementResult$,
  StopEngagement$,
  StopEngagementCommand,
  StopEngagementRequest$,
  StopEngagementResult$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  Target$,
  ThrottlingException,
  ThrottlingException$,
  TimeRange$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdateContact$,
  UpdateContactChannel$,
  UpdateContactChannelCommand,
  UpdateContactChannelRequest$,
  UpdateContactChannelResult$,
  UpdateContactCommand,
  UpdateContactRequest$,
  UpdateContactResult$,
  UpdateRotation$,
  UpdateRotationCommand,
  UpdateRotationRequest$,
  UpdateRotationResult$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  WeeklySetting$,
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
assert(typeof AcceptPage$ === "object");
assert(typeof ActivateContactChannelCommand === "function");
assert(typeof ActivateContactChannel$ === "object");
assert(typeof CreateContactCommand === "function");
assert(typeof CreateContact$ === "object");
assert(typeof CreateContactChannelCommand === "function");
assert(typeof CreateContactChannel$ === "object");
assert(typeof CreateRotationCommand === "function");
assert(typeof CreateRotation$ === "object");
assert(typeof CreateRotationOverrideCommand === "function");
assert(typeof CreateRotationOverride$ === "object");
assert(typeof DeactivateContactChannelCommand === "function");
assert(typeof DeactivateContactChannel$ === "object");
assert(typeof DeleteContactCommand === "function");
assert(typeof DeleteContact$ === "object");
assert(typeof DeleteContactChannelCommand === "function");
assert(typeof DeleteContactChannel$ === "object");
assert(typeof DeleteRotationCommand === "function");
assert(typeof DeleteRotation$ === "object");
assert(typeof DeleteRotationOverrideCommand === "function");
assert(typeof DeleteRotationOverride$ === "object");
assert(typeof DescribeEngagementCommand === "function");
assert(typeof DescribeEngagement$ === "object");
assert(typeof DescribePageCommand === "function");
assert(typeof DescribePage$ === "object");
assert(typeof GetContactCommand === "function");
assert(typeof GetContact$ === "object");
assert(typeof GetContactChannelCommand === "function");
assert(typeof GetContactChannel$ === "object");
assert(typeof GetContactPolicyCommand === "function");
assert(typeof GetContactPolicy$ === "object");
assert(typeof GetRotationCommand === "function");
assert(typeof GetRotation$ === "object");
assert(typeof GetRotationOverrideCommand === "function");
assert(typeof GetRotationOverride$ === "object");
assert(typeof ListContactChannelsCommand === "function");
assert(typeof ListContactChannels$ === "object");
assert(typeof ListContactsCommand === "function");
assert(typeof ListContacts$ === "object");
assert(typeof ListEngagementsCommand === "function");
assert(typeof ListEngagements$ === "object");
assert(typeof ListPageReceiptsCommand === "function");
assert(typeof ListPageReceipts$ === "object");
assert(typeof ListPageResolutionsCommand === "function");
assert(typeof ListPageResolutions$ === "object");
assert(typeof ListPagesByContactCommand === "function");
assert(typeof ListPagesByContact$ === "object");
assert(typeof ListPagesByEngagementCommand === "function");
assert(typeof ListPagesByEngagement$ === "object");
assert(typeof ListPreviewRotationShiftsCommand === "function");
assert(typeof ListPreviewRotationShifts$ === "object");
assert(typeof ListRotationOverridesCommand === "function");
assert(typeof ListRotationOverrides$ === "object");
assert(typeof ListRotationsCommand === "function");
assert(typeof ListRotations$ === "object");
assert(typeof ListRotationShiftsCommand === "function");
assert(typeof ListRotationShifts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutContactPolicyCommand === "function");
assert(typeof PutContactPolicy$ === "object");
assert(typeof SendActivationCodeCommand === "function");
assert(typeof SendActivationCode$ === "object");
assert(typeof StartEngagementCommand === "function");
assert(typeof StartEngagement$ === "object");
assert(typeof StopEngagementCommand === "function");
assert(typeof StopEngagement$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateContactCommand === "function");
assert(typeof UpdateContact$ === "object");
assert(typeof UpdateContactChannelCommand === "function");
assert(typeof UpdateContactChannel$ === "object");
assert(typeof UpdateRotationCommand === "function");
assert(typeof UpdateRotation$ === "object");
// structural schemas
assert(typeof AcceptPageRequest$ === "object");
assert(typeof AcceptPageResult$ === "object");
assert(typeof ActivateContactChannelRequest$ === "object");
assert(typeof ActivateContactChannelResult$ === "object");
assert(typeof ChannelTargetInfo$ === "object");
assert(typeof Contact$ === "object");
assert(typeof ContactChannel$ === "object");
assert(typeof ContactChannelAddress$ === "object");
assert(typeof ContactTargetInfo$ === "object");
assert(typeof CoverageTime$ === "object");
assert(typeof CreateContactChannelRequest$ === "object");
assert(typeof CreateContactChannelResult$ === "object");
assert(typeof CreateContactRequest$ === "object");
assert(typeof CreateContactResult$ === "object");
assert(typeof CreateRotationOverrideRequest$ === "object");
assert(typeof CreateRotationOverrideResult$ === "object");
assert(typeof CreateRotationRequest$ === "object");
assert(typeof CreateRotationResult$ === "object");
assert(typeof DeactivateContactChannelRequest$ === "object");
assert(typeof DeactivateContactChannelResult$ === "object");
assert(typeof DeleteContactChannelRequest$ === "object");
assert(typeof DeleteContactChannelResult$ === "object");
assert(typeof DeleteContactRequest$ === "object");
assert(typeof DeleteContactResult$ === "object");
assert(typeof DeleteRotationOverrideRequest$ === "object");
assert(typeof DeleteRotationOverrideResult$ === "object");
assert(typeof DeleteRotationRequest$ === "object");
assert(typeof DeleteRotationResult$ === "object");
assert(typeof DependentEntity$ === "object");
assert(typeof DescribeEngagementRequest$ === "object");
assert(typeof DescribeEngagementResult$ === "object");
assert(typeof DescribePageRequest$ === "object");
assert(typeof DescribePageResult$ === "object");
assert(typeof Engagement$ === "object");
assert(typeof GetContactChannelRequest$ === "object");
assert(typeof GetContactChannelResult$ === "object");
assert(typeof GetContactPolicyRequest$ === "object");
assert(typeof GetContactPolicyResult$ === "object");
assert(typeof GetContactRequest$ === "object");
assert(typeof GetContactResult$ === "object");
assert(typeof GetRotationOverrideRequest$ === "object");
assert(typeof GetRotationOverrideResult$ === "object");
assert(typeof GetRotationRequest$ === "object");
assert(typeof GetRotationResult$ === "object");
assert(typeof HandOffTime$ === "object");
assert(typeof ListContactChannelsRequest$ === "object");
assert(typeof ListContactChannelsResult$ === "object");
assert(typeof ListContactsRequest$ === "object");
assert(typeof ListContactsResult$ === "object");
assert(typeof ListEngagementsRequest$ === "object");
assert(typeof ListEngagementsResult$ === "object");
assert(typeof ListPageReceiptsRequest$ === "object");
assert(typeof ListPageReceiptsResult$ === "object");
assert(typeof ListPageResolutionsRequest$ === "object");
assert(typeof ListPageResolutionsResult$ === "object");
assert(typeof ListPagesByContactRequest$ === "object");
assert(typeof ListPagesByContactResult$ === "object");
assert(typeof ListPagesByEngagementRequest$ === "object");
assert(typeof ListPagesByEngagementResult$ === "object");
assert(typeof ListPreviewRotationShiftsRequest$ === "object");
assert(typeof ListPreviewRotationShiftsResult$ === "object");
assert(typeof ListRotationOverridesRequest$ === "object");
assert(typeof ListRotationOverridesResult$ === "object");
assert(typeof ListRotationShiftsRequest$ === "object");
assert(typeof ListRotationShiftsResult$ === "object");
assert(typeof ListRotationsRequest$ === "object");
assert(typeof ListRotationsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof MonthlySetting$ === "object");
assert(typeof Page$ === "object");
assert(typeof Plan$ === "object");
assert(typeof PreviewOverride$ === "object");
assert(typeof PutContactPolicyRequest$ === "object");
assert(typeof PutContactPolicyResult$ === "object");
assert(typeof Receipt$ === "object");
assert(typeof RecurrenceSettings$ === "object");
assert(typeof ResolutionContact$ === "object");
assert(typeof Rotation$ === "object");
assert(typeof RotationOverride$ === "object");
assert(typeof RotationShift$ === "object");
assert(typeof SendActivationCodeRequest$ === "object");
assert(typeof SendActivationCodeResult$ === "object");
assert(typeof ShiftDetails$ === "object");
assert(typeof Stage$ === "object");
assert(typeof StartEngagementRequest$ === "object");
assert(typeof StartEngagementResult$ === "object");
assert(typeof StopEngagementRequest$ === "object");
assert(typeof StopEngagementResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof Target$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdateContactChannelRequest$ === "object");
assert(typeof UpdateContactChannelResult$ === "object");
assert(typeof UpdateContactRequest$ === "object");
assert(typeof UpdateContactResult$ === "object");
assert(typeof UpdateRotationRequest$ === "object");
assert(typeof UpdateRotationResult$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WeeklySetting$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SSMContactsServiceException);
assert(typeof ConflictException$ === "object");
assert(DataEncryptionException.prototype instanceof SSMContactsServiceException);
assert(typeof DataEncryptionException$ === "object");
assert(InternalServerException.prototype instanceof SSMContactsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSMContactsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SSMContactsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SSMContactsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SSMContactsServiceException);
assert(typeof ValidationException$ === "object");
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
