import {
  AccessDeniedException,
  AddressFamily,
  ConflictException,
  CreateMonitorCommand,
  CreateProbeCommand,
  DeleteMonitorCommand,
  DeleteProbeCommand,
  GetMonitorCommand,
  GetProbeCommand,
  InternalServerException,
  ListMonitorsCommand,
  ListTagsForResourceCommand,
  MonitorState,
  NetworkMonitor,
  NetworkMonitorClient,
  NetworkMonitorServiceException,
  ProbeState,
  Protocol,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateMonitorCommand,
  UpdateProbeCommand,
  ValidationException,
  paginateListMonitors,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkMonitorClient === "function");
assert(typeof NetworkMonitor === "function");
// commands
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateProbeCommand === "function");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteProbeCommand === "function");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetProbeCommand === "function");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateProbeCommand === "function");
// enums
assert(typeof AddressFamily === "object");
assert(typeof MonitorState === "object");
assert(typeof ProbeState === "object");
assert(typeof Protocol === "object");
// errors
assert(AccessDeniedException.prototype instanceof NetworkMonitorServiceException);
assert(ConflictException.prototype instanceof NetworkMonitorServiceException);
assert(InternalServerException.prototype instanceof NetworkMonitorServiceException);
assert(ResourceNotFoundException.prototype instanceof NetworkMonitorServiceException);
assert(ServiceQuotaExceededException.prototype instanceof NetworkMonitorServiceException);
assert(ThrottlingException.prototype instanceof NetworkMonitorServiceException);
assert(ValidationException.prototype instanceof NetworkMonitorServiceException);
assert(NetworkMonitorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListMonitors === "function");
console.log(`NetworkMonitor index test passed.`);
