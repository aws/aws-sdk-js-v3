import {
  AccessDeniedException,
  AccessDeniedException$,
  AttributeMapping$,
  CertificateField,
  CreateProfile$,
  CreateProfileCommand,
  CreateProfileRequest$,
  CreateTrustAnchor$,
  CreateTrustAnchorCommand,
  CreateTrustAnchorRequest$,
  CredentialSummary$,
  CrlDetail$,
  CrlDetailResponse$,
  DeleteAttributeMapping$,
  DeleteAttributeMappingCommand,
  DeleteAttributeMappingRequest$,
  DeleteAttributeMappingResponse$,
  DeleteCrl$,
  DeleteCrlCommand,
  DeleteProfile$,
  DeleteProfileCommand,
  DeleteTrustAnchor$,
  DeleteTrustAnchorCommand,
  DisableCrl$,
  DisableCrlCommand,
  DisableProfile$,
  DisableProfileCommand,
  DisableTrustAnchor$,
  DisableTrustAnchorCommand,
  EnableCrl$,
  EnableCrlCommand,
  EnableProfile$,
  EnableProfileCommand,
  EnableTrustAnchor$,
  EnableTrustAnchorCommand,
  GetCrl$,
  GetCrlCommand,
  GetProfile$,
  GetProfileCommand,
  GetSubject$,
  GetSubjectCommand,
  GetTrustAnchor$,
  GetTrustAnchorCommand,
  ImportCrl$,
  ImportCrlCommand,
  ImportCrlRequest$,
  InstanceProperty$,
  ListCrls$,
  ListCrlsCommand,
  ListCrlsResponse$,
  ListProfiles$,
  ListProfilesCommand,
  ListProfilesResponse$,
  ListRequest$,
  ListSubjects$,
  ListSubjectsCommand,
  ListSubjectsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTrustAnchors$,
  ListTrustAnchorsCommand,
  ListTrustAnchorsResponse$,
  MappingRule$,
  NotificationChannel,
  NotificationEvent,
  NotificationSetting$,
  NotificationSettingDetail$,
  NotificationSettingKey$,
  paginateListCrls,
  paginateListProfiles,
  paginateListSubjects,
  paginateListTrustAnchors,
  ProfileDetail$,
  ProfileDetailResponse$,
  PutAttributeMapping$,
  PutAttributeMappingCommand,
  PutAttributeMappingRequest$,
  PutAttributeMappingResponse$,
  PutNotificationSettings$,
  PutNotificationSettingsCommand,
  PutNotificationSettingsRequest$,
  PutNotificationSettingsResponse$,
  ResetNotificationSettings$,
  ResetNotificationSettingsCommand,
  ResetNotificationSettingsRequest$,
  ResetNotificationSettingsResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RolesAnywhere,
  RolesAnywhereClient,
  RolesAnywhereServiceException,
  ScalarCrlRequest$,
  ScalarProfileRequest$,
  ScalarSubjectRequest$,
  ScalarTrustAnchorRequest$,
  Source$,
  SourceData$,
  SubjectDetail$,
  SubjectDetailResponse$,
  SubjectSummary$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  TrustAnchorDetail$,
  TrustAnchorDetailResponse$,
  TrustAnchorType,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCrl$,
  UpdateCrlCommand,
  UpdateCrlRequest$,
  UpdateProfile$,
  UpdateProfileCommand,
  UpdateProfileRequest$,
  UpdateTrustAnchor$,
  UpdateTrustAnchorCommand,
  UpdateTrustAnchorRequest$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RolesAnywhereClient === "function");
assert(typeof RolesAnywhere === "function");
// commands
assert(typeof CreateProfileCommand === "function");
assert(typeof CreateProfile$ === "object");
assert(typeof CreateTrustAnchorCommand === "function");
assert(typeof CreateTrustAnchor$ === "object");
assert(typeof DeleteAttributeMappingCommand === "function");
assert(typeof DeleteAttributeMapping$ === "object");
assert(typeof DeleteCrlCommand === "function");
assert(typeof DeleteCrl$ === "object");
assert(typeof DeleteProfileCommand === "function");
assert(typeof DeleteProfile$ === "object");
assert(typeof DeleteTrustAnchorCommand === "function");
assert(typeof DeleteTrustAnchor$ === "object");
assert(typeof DisableCrlCommand === "function");
assert(typeof DisableCrl$ === "object");
assert(typeof DisableProfileCommand === "function");
assert(typeof DisableProfile$ === "object");
assert(typeof DisableTrustAnchorCommand === "function");
assert(typeof DisableTrustAnchor$ === "object");
assert(typeof EnableCrlCommand === "function");
assert(typeof EnableCrl$ === "object");
assert(typeof EnableProfileCommand === "function");
assert(typeof EnableProfile$ === "object");
assert(typeof EnableTrustAnchorCommand === "function");
assert(typeof EnableTrustAnchor$ === "object");
assert(typeof GetCrlCommand === "function");
assert(typeof GetCrl$ === "object");
assert(typeof GetProfileCommand === "function");
assert(typeof GetProfile$ === "object");
assert(typeof GetSubjectCommand === "function");
assert(typeof GetSubject$ === "object");
assert(typeof GetTrustAnchorCommand === "function");
assert(typeof GetTrustAnchor$ === "object");
assert(typeof ImportCrlCommand === "function");
assert(typeof ImportCrl$ === "object");
assert(typeof ListCrlsCommand === "function");
assert(typeof ListCrls$ === "object");
assert(typeof ListProfilesCommand === "function");
assert(typeof ListProfiles$ === "object");
assert(typeof ListSubjectsCommand === "function");
assert(typeof ListSubjects$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTrustAnchorsCommand === "function");
assert(typeof ListTrustAnchors$ === "object");
assert(typeof PutAttributeMappingCommand === "function");
assert(typeof PutAttributeMapping$ === "object");
assert(typeof PutNotificationSettingsCommand === "function");
assert(typeof PutNotificationSettings$ === "object");
assert(typeof ResetNotificationSettingsCommand === "function");
assert(typeof ResetNotificationSettings$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateCrlCommand === "function");
assert(typeof UpdateCrl$ === "object");
assert(typeof UpdateProfileCommand === "function");
assert(typeof UpdateProfile$ === "object");
assert(typeof UpdateTrustAnchorCommand === "function");
assert(typeof UpdateTrustAnchor$ === "object");
// structural schemas
assert(typeof AttributeMapping$ === "object");
assert(typeof CreateProfileRequest$ === "object");
assert(typeof CreateTrustAnchorRequest$ === "object");
assert(typeof CredentialSummary$ === "object");
assert(typeof CrlDetail$ === "object");
assert(typeof CrlDetailResponse$ === "object");
assert(typeof DeleteAttributeMappingRequest$ === "object");
assert(typeof DeleteAttributeMappingResponse$ === "object");
assert(typeof ImportCrlRequest$ === "object");
assert(typeof InstanceProperty$ === "object");
assert(typeof ListCrlsResponse$ === "object");
assert(typeof ListProfilesResponse$ === "object");
assert(typeof ListRequest$ === "object");
assert(typeof ListSubjectsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTrustAnchorsResponse$ === "object");
assert(typeof MappingRule$ === "object");
assert(typeof NotificationSetting$ === "object");
assert(typeof NotificationSettingDetail$ === "object");
assert(typeof NotificationSettingKey$ === "object");
assert(typeof ProfileDetail$ === "object");
assert(typeof ProfileDetailResponse$ === "object");
assert(typeof PutAttributeMappingRequest$ === "object");
assert(typeof PutAttributeMappingResponse$ === "object");
assert(typeof PutNotificationSettingsRequest$ === "object");
assert(typeof PutNotificationSettingsResponse$ === "object");
assert(typeof ResetNotificationSettingsRequest$ === "object");
assert(typeof ResetNotificationSettingsResponse$ === "object");
assert(typeof ScalarCrlRequest$ === "object");
assert(typeof ScalarProfileRequest$ === "object");
assert(typeof ScalarSubjectRequest$ === "object");
assert(typeof ScalarTrustAnchorRequest$ === "object");
assert(typeof Source$ === "object");
assert(typeof SourceData$ === "object");
assert(typeof SubjectDetail$ === "object");
assert(typeof SubjectDetailResponse$ === "object");
assert(typeof SubjectSummary$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TrustAnchorDetail$ === "object");
assert(typeof TrustAnchorDetailResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateCrlRequest$ === "object");
assert(typeof UpdateProfileRequest$ === "object");
assert(typeof UpdateTrustAnchorRequest$ === "object");
// enums
assert(typeof CertificateField === "object");
assert(typeof NotificationChannel === "object");
assert(typeof NotificationEvent === "object");
assert(typeof TrustAnchorType === "object");
// errors
assert(AccessDeniedException.prototype instanceof RolesAnywhereServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RolesAnywhereServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyTagsException.prototype instanceof RolesAnywhereServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof RolesAnywhereServiceException);
assert(typeof ValidationException$ === "object");
assert(RolesAnywhereServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListCrls === "function");
assert(typeof paginateListProfiles === "function");
assert(typeof paginateListSubjects === "function");
assert(typeof paginateListTrustAnchors === "function");
console.log(`RolesAnywhere index test passed.`);
