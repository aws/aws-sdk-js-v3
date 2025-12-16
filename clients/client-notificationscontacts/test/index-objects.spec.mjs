import {
  AccessDeniedException,
  AccessDeniedException$,
  ActivateEmailContact$,
  ActivateEmailContactCommand,
  ActivateEmailContactRequest$,
  ActivateEmailContactResponse$,
  ConflictException,
  ConflictException$,
  CreateEmailContact$,
  CreateEmailContactCommand,
  CreateEmailContactRequest$,
  CreateEmailContactResponse$,
  DeleteEmailContact$,
  DeleteEmailContactCommand,
  DeleteEmailContactRequest$,
  DeleteEmailContactResponse$,
  EmailContact$,
  EmailContactStatus,
  GetEmailContact$,
  GetEmailContactCommand,
  GetEmailContactRequest$,
  GetEmailContactResponse$,
  InternalServerException,
  InternalServerException$,
  ListEmailContacts$,
  ListEmailContactsCommand,
  ListEmailContactsRequest$,
  ListEmailContactsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NotificationsContacts,
  NotificationsContactsClient,
  NotificationsContactsServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SendActivationCode$,
  SendActivationCodeCommand,
  SendActivationCodeRequest$,
  SendActivationCodeResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListEmailContacts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NotificationsContactsClient === "function");
assert(typeof NotificationsContacts === "function");
// commands
assert(typeof ActivateEmailContactCommand === "function");
assert(typeof ActivateEmailContact$ === "object");
assert(typeof CreateEmailContactCommand === "function");
assert(typeof CreateEmailContact$ === "object");
assert(typeof DeleteEmailContactCommand === "function");
assert(typeof DeleteEmailContact$ === "object");
assert(typeof GetEmailContactCommand === "function");
assert(typeof GetEmailContact$ === "object");
assert(typeof ListEmailContactsCommand === "function");
assert(typeof ListEmailContacts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof SendActivationCodeCommand === "function");
assert(typeof SendActivationCode$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof ActivateEmailContactRequest$ === "object");
assert(typeof ActivateEmailContactResponse$ === "object");
assert(typeof CreateEmailContactRequest$ === "object");
assert(typeof CreateEmailContactResponse$ === "object");
assert(typeof DeleteEmailContactRequest$ === "object");
assert(typeof DeleteEmailContactResponse$ === "object");
assert(typeof EmailContact$ === "object");
assert(typeof GetEmailContactRequest$ === "object");
assert(typeof GetEmailContactResponse$ === "object");
assert(typeof ListEmailContactsRequest$ === "object");
assert(typeof ListEmailContactsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof SendActivationCodeRequest$ === "object");
assert(typeof SendActivationCodeResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof EmailContactStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof NotificationsContactsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NotificationsContactsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NotificationsContactsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NotificationsContactsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NotificationsContactsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NotificationsContactsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NotificationsContactsServiceException);
assert(typeof ValidationException$ === "object");
assert(NotificationsContactsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEmailContacts === "function");
console.log(`NotificationsContacts index test passed.`);
