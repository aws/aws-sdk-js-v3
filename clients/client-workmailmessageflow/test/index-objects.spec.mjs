import {
  GetRawMessageContent$,
  GetRawMessageContentCommand,
  GetRawMessageContentRequest$,
  GetRawMessageContentResponse$,
  InvalidContentLocation,
  InvalidContentLocation$,
  MessageFrozen,
  MessageFrozen$,
  MessageRejected,
  MessageRejected$,
  PutRawMessageContent$,
  PutRawMessageContentCommand,
  PutRawMessageContentRequest$,
  PutRawMessageContentResponse$,
  RawMessageContent$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Reference$,
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
assert(typeof GetRawMessageContent$ === "object");
assert(typeof PutRawMessageContentCommand === "function");
assert(typeof PutRawMessageContent$ === "object");
// structural schemas
assert(typeof GetRawMessageContentRequest$ === "object");
assert(typeof GetRawMessageContentResponse$ === "object");
assert(typeof PutRawMessageContentRequest$ === "object");
assert(typeof PutRawMessageContentResponse$ === "object");
assert(typeof RawMessageContent$ === "object");
assert(typeof S3Reference$ === "object");
// errors
assert(InvalidContentLocation.prototype instanceof WorkMailMessageFlowServiceException);
assert(typeof InvalidContentLocation$ === "object");
assert(MessageFrozen.prototype instanceof WorkMailMessageFlowServiceException);
assert(typeof MessageFrozen$ === "object");
assert(MessageRejected.prototype instanceof WorkMailMessageFlowServiceException);
assert(typeof MessageRejected$ === "object");
assert(ResourceNotFoundException.prototype instanceof WorkMailMessageFlowServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(WorkMailMessageFlowServiceException.prototype instanceof Error);
console.log(`WorkMailMessageFlow index test passed.`);
