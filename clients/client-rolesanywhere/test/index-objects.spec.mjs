import {
  CertificateField,
  CreateProfileCommand,
  CreateTrustAnchorCommand,
  DeleteAttributeMappingCommand,
  DeleteCrlCommand,
  DeleteProfileCommand,
  DeleteTrustAnchorCommand,
  DisableCrlCommand,
  DisableProfileCommand,
  DisableTrustAnchorCommand,
  EnableCrlCommand,
  EnableProfileCommand,
  EnableTrustAnchorCommand,
  GetCrlCommand,
  GetProfileCommand,
  GetSubjectCommand,
  GetTrustAnchorCommand,
  ImportCrlCommand,
  ListCrlsCommand,
  ListProfilesCommand,
  ListSubjectsCommand,
  ListTagsForResourceCommand,
  ListTrustAnchorsCommand,
  NotificationChannel,
  NotificationEvent,
  PutAttributeMappingCommand,
  PutNotificationSettingsCommand,
  ResetNotificationSettingsCommand,
  RolesAnywhere,
  RolesAnywhereClient,
  RolesAnywhereServiceException,
  TagResourceCommand,
  TrustAnchorType,
  UntagResourceCommand,
  UpdateCrlCommand,
  UpdateProfileCommand,
  UpdateTrustAnchorCommand,
  paginateListCrls,
  paginateListProfiles,
  paginateListSubjects,
  paginateListTrustAnchors,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RolesAnywhereClient === "function")
assert(typeof RolesAnywhere === "function")
// commands
assert(typeof CreateProfileCommand === "function")
assert(typeof CreateTrustAnchorCommand === "function")
assert(typeof DeleteAttributeMappingCommand === "function")
assert(typeof DeleteCrlCommand === "function")
assert(typeof DeleteProfileCommand === "function")
assert(typeof DeleteTrustAnchorCommand === "function")
assert(typeof DisableCrlCommand === "function")
assert(typeof DisableProfileCommand === "function")
assert(typeof DisableTrustAnchorCommand === "function")
assert(typeof EnableCrlCommand === "function")
assert(typeof EnableProfileCommand === "function")
assert(typeof EnableTrustAnchorCommand === "function")
assert(typeof GetCrlCommand === "function")
assert(typeof GetProfileCommand === "function")
assert(typeof GetSubjectCommand === "function")
assert(typeof GetTrustAnchorCommand === "function")
assert(typeof ImportCrlCommand === "function")
assert(typeof ListCrlsCommand === "function")
assert(typeof ListProfilesCommand === "function")
assert(typeof ListSubjectsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTrustAnchorsCommand === "function")
assert(typeof PutAttributeMappingCommand === "function")
assert(typeof PutNotificationSettingsCommand === "function")
assert(typeof ResetNotificationSettingsCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCrlCommand === "function")
assert(typeof UpdateProfileCommand === "function")
assert(typeof UpdateTrustAnchorCommand === "function")
// enums
assert(typeof CertificateField === "object");
assert(typeof NotificationChannel === "object");
assert(typeof NotificationEvent === "object");
assert(typeof TrustAnchorType === "object");
// errors
assert(RolesAnywhereServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCrls === "function")
assert(typeof paginateListProfiles === "function")
assert(typeof paginateListSubjects === "function")
assert(typeof paginateListTrustAnchors === "function")
console.log(`RolesAnywhere index test passed.`);
