import {
  AccessDeniedException,
  AccessDeniedException$,
  AddressFamily,
  ConflictException,
  ConflictException$,
  CreateMonitor$,
  CreateMonitorCommand,
  CreateMonitorInput$,
  CreateMonitorOutput$,
  CreateMonitorProbeInput$,
  CreateProbe$,
  CreateProbeCommand,
  CreateProbeInput$,
  CreateProbeOutput$,
  DeleteMonitor$,
  DeleteMonitorCommand,
  DeleteMonitorInput$,
  DeleteMonitorOutput$,
  DeleteProbe$,
  DeleteProbeCommand,
  DeleteProbeInput$,
  DeleteProbeOutput$,
  GetMonitor$,
  GetMonitorCommand,
  GetMonitorInput$,
  GetMonitorOutput$,
  GetProbe$,
  GetProbeCommand,
  GetProbeInput$,
  GetProbeOutput$,
  InternalServerException,
  InternalServerException$,
  ListMonitors$,
  ListMonitorsCommand,
  ListMonitorsInput$,
  ListMonitorsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  MonitorState,
  MonitorSummary$,
  NetworkMonitor,
  NetworkMonitorClient,
  NetworkMonitorServiceException,
  paginateListMonitors,
  Probe$,
  ProbeInput$,
  ProbeState,
  Protocol,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateMonitor$,
  UpdateMonitorCommand,
  UpdateMonitorInput$,
  UpdateMonitorOutput$,
  UpdateProbe$,
  UpdateProbeCommand,
  UpdateProbeInput$,
  UpdateProbeOutput$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkMonitorClient === "function");
assert(typeof NetworkMonitor === "function");
// commands
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateMonitor$ === "object");
assert(typeof CreateProbeCommand === "function");
assert(typeof CreateProbe$ === "object");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteMonitor$ === "object");
assert(typeof DeleteProbeCommand === "function");
assert(typeof DeleteProbe$ === "object");
assert(typeof GetMonitorCommand === "function");
assert(typeof GetMonitor$ === "object");
assert(typeof GetProbeCommand === "function");
assert(typeof GetProbe$ === "object");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListMonitors$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMonitorCommand === "function");
assert(typeof UpdateMonitor$ === "object");
assert(typeof UpdateProbeCommand === "function");
assert(typeof UpdateProbe$ === "object");
// structural schemas
assert(typeof CreateMonitorInput$ === "object");
assert(typeof CreateMonitorOutput$ === "object");
assert(typeof CreateMonitorProbeInput$ === "object");
assert(typeof CreateProbeInput$ === "object");
assert(typeof CreateProbeOutput$ === "object");
assert(typeof DeleteMonitorInput$ === "object");
assert(typeof DeleteMonitorOutput$ === "object");
assert(typeof DeleteProbeInput$ === "object");
assert(typeof DeleteProbeOutput$ === "object");
assert(typeof GetMonitorInput$ === "object");
assert(typeof GetMonitorOutput$ === "object");
assert(typeof GetProbeInput$ === "object");
assert(typeof GetProbeOutput$ === "object");
assert(typeof ListMonitorsInput$ === "object");
assert(typeof ListMonitorsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof MonitorSummary$ === "object");
assert(typeof Probe$ === "object");
assert(typeof ProbeInput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateMonitorInput$ === "object");
assert(typeof UpdateMonitorOutput$ === "object");
assert(typeof UpdateProbeInput$ === "object");
assert(typeof UpdateProbeOutput$ === "object");
// enums
assert(typeof AddressFamily === "object");
assert(typeof MonitorState === "object");
assert(typeof ProbeState === "object");
assert(typeof Protocol === "object");
// errors
assert(AccessDeniedException.prototype instanceof NetworkMonitorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof NetworkMonitorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof NetworkMonitorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NetworkMonitorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof NetworkMonitorServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof NetworkMonitorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof NetworkMonitorServiceException);
assert(typeof ValidationException$ === "object");
assert(NetworkMonitorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListMonitors === "function");
console.log(`NetworkMonitor index test passed.`);
