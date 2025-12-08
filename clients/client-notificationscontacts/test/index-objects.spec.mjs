import {
  AccessDeniedException,
  ActivateEmailContactCommand,
  ConflictException,
  CreateEmailContactCommand,
  DeleteEmailContactCommand,
  EmailContactStatus,
  GetEmailContactCommand,
  InternalServerException,
  ListEmailContactsCommand,
  ListTagsForResourceCommand,
  NotificationsContacts,
  NotificationsContactsClient,
  NotificationsContactsServiceException,
  ResourceNotFoundException,
  SendActivationCodeCommand,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListEmailContacts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NotificationsContactsClient === "function");
assert(typeof NotificationsContacts === "function");
// commands
assert(typeof ActivateEmailContactCommand === "function");
assert(typeof CreateEmailContactCommand === "function");
assert(typeof DeleteEmailContactCommand === "function");
assert(typeof GetEmailContactCommand === "function");
assert(typeof ListEmailContactsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof SendActivationCodeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof EmailContactStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof NotificationsContactsServiceException);
assert(ConflictException.prototype instanceof NotificationsContactsServiceException);
assert(InternalServerException.prototype instanceof NotificationsContactsServiceException);
assert(ResourceNotFoundException.prototype instanceof NotificationsContactsServiceException);
assert(ServiceQuotaExceededException.prototype instanceof NotificationsContactsServiceException);
assert(ThrottlingException.prototype instanceof NotificationsContactsServiceException);
assert(ValidationException.prototype instanceof NotificationsContactsServiceException);
assert(NotificationsContactsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEmailContacts === "function");
console.log(`NotificationsContacts index test passed.`);
