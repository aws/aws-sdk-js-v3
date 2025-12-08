import {
  ChannelInsufficientPermission,
  ChannelNotFound,
  ChannelUnsupportedSchema,
  CloudTrailData,
  CloudTrailDataClient,
  CloudTrailDataServiceException,
  DuplicatedAuditEventId,
  InvalidChannelARN,
  PutAuditEventsCommand,
  UnsupportedOperationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudTrailDataClient === "function");
assert(typeof CloudTrailData === "function");
// commands
assert(typeof PutAuditEventsCommand === "function");
// errors
assert(ChannelInsufficientPermission.prototype instanceof CloudTrailDataServiceException);
assert(ChannelNotFound.prototype instanceof CloudTrailDataServiceException);
assert(ChannelUnsupportedSchema.prototype instanceof CloudTrailDataServiceException);
assert(DuplicatedAuditEventId.prototype instanceof CloudTrailDataServiceException);
assert(InvalidChannelARN.prototype instanceof CloudTrailDataServiceException);
assert(UnsupportedOperationException.prototype instanceof CloudTrailDataServiceException);
assert(CloudTrailDataServiceException.prototype instanceof Error);
console.log(`CloudTrailData index test passed.`);
