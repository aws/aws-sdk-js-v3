import {
  InspectorScan,
  InspectorScanClient,
  InspectorScanServiceException,
  OutputFormat,
  ScanSbomCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof InspectorScanClient === "function");
assert(typeof InspectorScan === "function");
// commands
assert(typeof ScanSbomCommand === "function");
// enums
assert(typeof OutputFormat === "object");
// errors
assert(InspectorScanServiceException.prototype instanceof Error);
console.log(`InspectorScan index test passed.`);
