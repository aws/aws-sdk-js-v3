import {
  GetRawMessageContentCommand,
  PutRawMessageContentCommand,
  WorkMailMessageFlow,
  WorkMailMessageFlowClient,
  WorkMailMessageFlowServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkMailMessageFlowClient === "function")
assert(typeof WorkMailMessageFlow === "function")
// commands
assert(typeof GetRawMessageContentCommand === "function")
assert(typeof PutRawMessageContentCommand === "function")
// errors
assert(WorkMailMessageFlowServiceException.prototype instanceof Error)
console.log(`WorkMailMessageFlow index test passed.`);
