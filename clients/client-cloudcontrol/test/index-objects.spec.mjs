import {
  CancelResourceRequestCommand,
  CloudControl,
  CloudControlClient,
  CloudControlServiceException,
  CreateResourceCommand,
  DeleteResourceCommand,
  GetResourceCommand,
  GetResourceRequestStatusCommand,
  HandlerErrorCode,
  ListResourceRequestsCommand,
  ListResourcesCommand,
  Operation,
  OperationStatus,
  UpdateResourceCommand,
  paginateListResourceRequests,
  paginateListResources,
  waitForResourceRequestSuccess,
  waitUntilResourceRequestSuccess,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudControlClient === "function");
assert(typeof CloudControl === "function");
// commands
assert(typeof CancelResourceRequestCommand === "function");
assert(typeof CreateResourceCommand === "function");
assert(typeof DeleteResourceCommand === "function");
assert(typeof GetResourceCommand === "function");
assert(typeof GetResourceRequestStatusCommand === "function");
assert(typeof ListResourceRequestsCommand === "function");
assert(typeof ListResourcesCommand === "function");
assert(typeof UpdateResourceCommand === "function");
// enums
assert(typeof HandlerErrorCode === "object");
assert(typeof Operation === "object");
assert(typeof OperationStatus === "object");
// errors
assert(CloudControlServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForResourceRequestSuccess === "function");
assert(typeof waitUntilResourceRequestSuccess === "function");
// paginators
assert(typeof paginateListResourceRequests === "function");
assert(typeof paginateListResources === "function");
console.log(`CloudControl index test passed.`);
