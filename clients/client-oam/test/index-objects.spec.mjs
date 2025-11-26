import {
  CreateLinkCommand,
  CreateSinkCommand,
  DeleteLinkCommand,
  DeleteSinkCommand,
  GetLinkCommand,
  GetSinkCommand,
  GetSinkPolicyCommand,
  ListAttachedLinksCommand,
  ListLinksCommand,
  ListSinksCommand,
  ListTagsForResourceCommand,
  OAM,
  OAMClient,
  OAMServiceException,
  PutSinkPolicyCommand,
  ResourceType,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLinkCommand,
  paginateListAttachedLinks,
  paginateListLinks,
  paginateListSinks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OAMClient === "function")
assert(typeof OAM === "function")
// commands
assert(typeof CreateLinkCommand === "function")
assert(typeof CreateSinkCommand === "function")
assert(typeof DeleteLinkCommand === "function")
assert(typeof DeleteSinkCommand === "function")
assert(typeof GetLinkCommand === "function")
assert(typeof GetSinkCommand === "function")
assert(typeof GetSinkPolicyCommand === "function")
assert(typeof ListAttachedLinksCommand === "function")
assert(typeof ListLinksCommand === "function")
assert(typeof ListSinksCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutSinkPolicyCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateLinkCommand === "function")
// enums
assert(typeof ResourceType === "object");
// errors
assert(OAMServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAttachedLinks === "function")
assert(typeof paginateListLinks === "function")
assert(typeof paginateListSinks === "function")
console.log(`OAM index test passed.`);
