import {
  GetRawMessageContentCommand,
  InvalidContentLocation,
  MessageFrozen,
  MessageRejected,
  PutRawMessageContentCommand,
  ResourceNotFoundException,
  WorkMailMessageFlow,
  WorkMailMessageFlowClient,
  WorkMailMessageFlowServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkMailMessageFlowClient === "function");
assert(typeof WorkMailMessageFlow === "function");
// commands
assert(typeof GetRawMessageContentCommand === "function");
assert(typeof PutRawMessageContentCommand === "function");
// errors
assert(InvalidContentLocation.prototype instanceof WorkMailMessageFlowServiceException);
assert(MessageFrozen.prototype instanceof WorkMailMessageFlowServiceException);
assert(MessageRejected.prototype instanceof WorkMailMessageFlowServiceException);
assert(ResourceNotFoundException.prototype instanceof WorkMailMessageFlowServiceException);
assert(WorkMailMessageFlowServiceException.prototype instanceof Error);
console.log(`WorkMailMessageFlow index test passed.`);
