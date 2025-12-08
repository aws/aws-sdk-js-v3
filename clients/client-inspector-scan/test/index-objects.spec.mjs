import {
  AccessDeniedException,
  InspectorScan,
  InspectorScanClient,
  InspectorScanServiceException,
  InternalServerException,
  InternalServerExceptionReason,
  OutputFormat,
  ScanSbomCommand,
  ThrottlingException,
  ValidationException,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InspectorScanClient === "function");
assert(typeof InspectorScan === "function");
// commands
assert(typeof ScanSbomCommand === "function");
// enums
assert(typeof InternalServerExceptionReason === "object");
assert(typeof OutputFormat === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof InspectorScanServiceException);
assert(InternalServerException.prototype instanceof InspectorScanServiceException);
assert(ThrottlingException.prototype instanceof InspectorScanServiceException);
assert(ValidationException.prototype instanceof InspectorScanServiceException);
assert(InspectorScanServiceException.prototype instanceof Error);
console.log(`InspectorScan index test passed.`);
