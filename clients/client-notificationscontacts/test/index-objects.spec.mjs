import {
  ActivateEmailContactCommand,
  CreateEmailContactCommand,
  DeleteEmailContactCommand,
  EmailContactStatus,
  GetEmailContactCommand,
  ListEmailContactsCommand,
  ListTagsForResourceCommand,
  NotificationsContacts,
  NotificationsContactsClient,
  NotificationsContactsServiceException,
  SendActivationCodeCommand,
  TagResourceCommand,
  UntagResourceCommand,
  paginateListEmailContacts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NotificationsContactsClient === "function")
assert(typeof NotificationsContacts === "function")
// commands
assert(typeof ActivateEmailContactCommand === "function")
assert(typeof CreateEmailContactCommand === "function")
assert(typeof DeleteEmailContactCommand === "function")
assert(typeof GetEmailContactCommand === "function")
assert(typeof ListEmailContactsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof SendActivationCodeCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
// enums
assert(typeof EmailContactStatus === "object");
// errors
assert(NotificationsContactsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListEmailContacts === "function")
console.log(`NotificationsContacts index test passed.`);
