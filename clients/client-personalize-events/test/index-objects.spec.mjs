import {
  InvalidInputException,
  PersonalizeEvents,
  PersonalizeEventsClient,
  PersonalizeEventsServiceException,
  PutActionInteractionsCommand,
  PutActionsCommand,
  PutEventsCommand,
  PutItemsCommand,
  PutUsersCommand,
  ResourceInUseException,
  ResourceNotFoundException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PersonalizeEventsClient === "function");
assert(typeof PersonalizeEvents === "function");
// commands
assert(typeof PutActionInteractionsCommand === "function");
assert(typeof PutActionsCommand === "function");
assert(typeof PutEventsCommand === "function");
assert(typeof PutItemsCommand === "function");
assert(typeof PutUsersCommand === "function");
// errors
assert(InvalidInputException.prototype instanceof PersonalizeEventsServiceException);
assert(ResourceInUseException.prototype instanceof PersonalizeEventsServiceException);
assert(ResourceNotFoundException.prototype instanceof PersonalizeEventsServiceException);
assert(PersonalizeEventsServiceException.prototype instanceof Error);
console.log(`PersonalizeEvents index test passed.`);
