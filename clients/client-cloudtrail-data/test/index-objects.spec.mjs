import {
  CloudTrailData,
  CloudTrailDataClient,
  CloudTrailDataServiceException,
  PutAuditEventsCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudTrailDataClient === "function");
assert(typeof CloudTrailData === "function");
// commands
assert(typeof PutAuditEventsCommand === "function");
// errors
assert(CloudTrailDataServiceException.prototype instanceof Error);
console.log(`CloudTrailData index test passed.`);
