import {
  ConflictException,
  ConflictException$,
  ExportStatus,
  ExportSummary$,
  GetExport$,
  GetExportCommand,
  GetExportRequest$,
  GetExportResponse$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  ListExports$,
  ListExportsCommand,
  ListExportsRequest$,
  ListExportsResponse$,
  NoSuchDomainException,
  NoSuchDomainException$,
  NoSuchExportException,
  NoSuchExportException$,
  NumberExportsLimitExceeded,
  NumberExportsLimitExceeded$,
  paginateListExports,
  S3SseAlgorithm,
  SimpleDBv2,
  SimpleDBv2Client,
  SimpleDBv2ServiceException,
  StartDomainExport$,
  StartDomainExportCommand,
  StartDomainExportRequest$,
  StartDomainExportResponse$,
  waitForExportSucceeded,
  waitUntilExportSucceeded,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SimpleDBv2Client === "function");
assert(typeof SimpleDBv2 === "function");
// commands
assert(typeof GetExportCommand === "function");
assert(typeof GetExport$ === "object");
assert(typeof ListExportsCommand === "function");
assert(typeof ListExports$ === "object");
assert(typeof StartDomainExportCommand === "function");
assert(typeof StartDomainExport$ === "object");
// structural schemas
assert(typeof ExportSummary$ === "object");
assert(typeof GetExportRequest$ === "object");
assert(typeof GetExportResponse$ === "object");
assert(typeof ListExportsRequest$ === "object");
assert(typeof ListExportsResponse$ === "object");
assert(typeof StartDomainExportRequest$ === "object");
assert(typeof StartDomainExportResponse$ === "object");
// enums
assert(typeof ExportStatus === "object");
assert(typeof S3SseAlgorithm === "object");
// errors
assert(ConflictException.prototype instanceof SimpleDBv2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InvalidNextTokenException.prototype instanceof SimpleDBv2ServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof SimpleDBv2ServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterValueException.prototype instanceof SimpleDBv2ServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(NoSuchDomainException.prototype instanceof SimpleDBv2ServiceException);
assert(typeof NoSuchDomainException$ === "object");
assert(NoSuchExportException.prototype instanceof SimpleDBv2ServiceException);
assert(typeof NoSuchExportException$ === "object");
assert(NumberExportsLimitExceeded.prototype instanceof SimpleDBv2ServiceException);
assert(typeof NumberExportsLimitExceeded$ === "object");
assert(SimpleDBv2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForExportSucceeded === "function");
assert(typeof waitUntilExportSucceeded === "function");
// paginators
assert(typeof paginateListExports === "function");
console.log(`SimpleDBv2 index test passed.`);
