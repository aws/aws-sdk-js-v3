import {
  Action$,
  ActionInteraction$,
  Event$,
  InvalidInputException,
  InvalidInputException$,
  Item$,
  MetricAttribution$,
  PersonalizeEvents,
  PersonalizeEventsClient,
  PersonalizeEventsServiceException,
  PutActionInteractions$,
  PutActionInteractionsCommand,
  PutActionInteractionsRequest$,
  PutActions$,
  PutActionsCommand,
  PutActionsRequest$,
  PutEvents$,
  PutEventsCommand,
  PutEventsRequest$,
  PutItems$,
  PutItemsCommand,
  PutItemsRequest$,
  PutUsers$,
  PutUsersCommand,
  PutUsersRequest$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  User$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PersonalizeEventsClient === "function");
assert(typeof PersonalizeEvents === "function");
// commands
assert(typeof PutActionInteractionsCommand === "function");
assert(typeof PutActionInteractions$ === "object");
assert(typeof PutActionsCommand === "function");
assert(typeof PutActions$ === "object");
assert(typeof PutEventsCommand === "function");
assert(typeof PutEvents$ === "object");
assert(typeof PutItemsCommand === "function");
assert(typeof PutItems$ === "object");
assert(typeof PutUsersCommand === "function");
assert(typeof PutUsers$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof ActionInteraction$ === "object");
assert(typeof Event$ === "object");
assert(typeof Item$ === "object");
assert(typeof MetricAttribution$ === "object");
assert(typeof PutActionInteractionsRequest$ === "object");
assert(typeof PutActionsRequest$ === "object");
assert(typeof PutEventsRequest$ === "object");
assert(typeof PutItemsRequest$ === "object");
assert(typeof PutUsersRequest$ === "object");
assert(typeof User$ === "object");
// errors
assert(InvalidInputException.prototype instanceof PersonalizeEventsServiceException);
assert(typeof InvalidInputException$ === "object");
assert(ResourceInUseException.prototype instanceof PersonalizeEventsServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PersonalizeEventsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(PersonalizeEventsServiceException.prototype instanceof Error);
console.log(`PersonalizeEvents index test passed.`);
