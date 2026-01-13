import {
  AccessDeniedException,
  AccessDeniedException$,
  InspectorScan,
  InspectorScanClient,
  InspectorScanServiceException,
  InternalServerException,
  InternalServerException$,
  InternalServerExceptionReason,
  OutputFormat,
  ScanSbom$,
  ScanSbomCommand,
  ScanSbomRequest$,
  ScanSbomResponse$,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InspectorScanClient === "function");
assert(typeof InspectorScan === "function");
// commands
assert(typeof ScanSbomCommand === "function");
assert(typeof ScanSbom$ === "object");
// structural schemas
assert(typeof ScanSbomRequest$ === "object");
assert(typeof ScanSbomResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof InternalServerExceptionReason === "object");
assert(typeof OutputFormat === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof InspectorScanServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof InspectorScanServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof InspectorScanServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof InspectorScanServiceException);
assert(typeof ValidationException$ === "object");
assert(InspectorScanServiceException.prototype instanceof Error);
console.log(`InspectorScan index test passed.`);
