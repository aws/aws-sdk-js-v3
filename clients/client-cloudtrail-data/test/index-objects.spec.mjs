import {
  AuditEvent$,
  AuditEventResultEntry$,
  ChannelInsufficientPermission,
  ChannelInsufficientPermission$,
  ChannelNotFound,
  ChannelNotFound$,
  ChannelUnsupportedSchema,
  ChannelUnsupportedSchema$,
  CloudTrailData,
  CloudTrailDataClient,
  CloudTrailDataServiceException,
  DuplicatedAuditEventId,
  DuplicatedAuditEventId$,
  InvalidChannelARN,
  InvalidChannelARN$,
  PutAuditEvents$,
  PutAuditEventsCommand,
  PutAuditEventsRequest$,
  PutAuditEventsResponse$,
  ResultErrorEntry$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudTrailDataClient === "function");
assert(typeof CloudTrailData === "function");
// commands
assert(typeof PutAuditEventsCommand === "function");
assert(typeof PutAuditEvents$ === "object");
// structural schemas
assert(typeof AuditEvent$ === "object");
assert(typeof AuditEventResultEntry$ === "object");
assert(typeof PutAuditEventsRequest$ === "object");
assert(typeof PutAuditEventsResponse$ === "object");
assert(typeof ResultErrorEntry$ === "object");
// errors
assert(ChannelInsufficientPermission.prototype instanceof CloudTrailDataServiceException);
assert(typeof ChannelInsufficientPermission$ === "object");
assert(ChannelNotFound.prototype instanceof CloudTrailDataServiceException);
assert(typeof ChannelNotFound$ === "object");
assert(ChannelUnsupportedSchema.prototype instanceof CloudTrailDataServiceException);
assert(typeof ChannelUnsupportedSchema$ === "object");
assert(DuplicatedAuditEventId.prototype instanceof CloudTrailDataServiceException);
assert(typeof DuplicatedAuditEventId$ === "object");
assert(InvalidChannelARN.prototype instanceof CloudTrailDataServiceException);
assert(typeof InvalidChannelARN$ === "object");
assert(UnsupportedOperationException.prototype instanceof CloudTrailDataServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(CloudTrailDataServiceException.prototype instanceof Error);
console.log(`CloudTrailData index test passed.`);
