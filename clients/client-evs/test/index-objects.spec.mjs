import {
  AssociateEipToVlan$,
  AssociateEipToVlanCommand,
  AssociateEipToVlanRequest$,
  AssociateEipToVlanResponse$,
  Check$,
  CheckResult,
  CheckType,
  ConnectivityInfo$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentHost$,
  CreateEnvironmentHostCommand,
  CreateEnvironmentHostRequest$,
  CreateEnvironmentHostResponse$,
  CreateEnvironmentRequest$,
  CreateEnvironmentResponse$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentHost$,
  DeleteEnvironmentHostCommand,
  DeleteEnvironmentHostRequest$,
  DeleteEnvironmentHostResponse$,
  DeleteEnvironmentRequest$,
  DeleteEnvironmentResponse$,
  DisassociateEipFromVlan$,
  DisassociateEipFromVlanCommand,
  DisassociateEipFromVlanRequest$,
  DisassociateEipFromVlanResponse$,
  EipAssociation$,
  Environment$,
  EnvironmentState,
  EnvironmentSummary$,
  Evs,
  EvsClient,
  EvsServiceException,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  Host$,
  HostInfoForCreate$,
  HostState,
  InitialVlanInfo$,
  InitialVlans$,
  LicenseInfo$,
  ListEnvironmentHosts$,
  ListEnvironmentHostsCommand,
  ListEnvironmentHostsRequest$,
  ListEnvironmentHostsResponse$,
  ListEnvironmentVlans$,
  ListEnvironmentVlansCommand,
  ListEnvironmentVlansRequest$,
  ListEnvironmentVlansResponse$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NetworkInterface$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Secret$,
  ServiceAccessSecurityGroups$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagPolicyException,
  TagPolicyException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VcfHostnames$,
  VcfVersion,
  Vlan$,
  VlanState,
  _InstanceType,
  paginateListEnvironmentHosts,
  paginateListEnvironmentVlans,
  paginateListEnvironments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EvsClient === "function");
assert(typeof Evs === "function");
// commands
assert(typeof AssociateEipToVlanCommand === "function");
assert(typeof AssociateEipToVlan$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateEnvironmentHostCommand === "function");
assert(typeof CreateEnvironmentHost$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteEnvironmentHostCommand === "function");
assert(typeof DeleteEnvironmentHost$ === "object");
assert(typeof DisassociateEipFromVlanCommand === "function");
assert(typeof DisassociateEipFromVlan$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof ListEnvironmentHostsCommand === "function");
assert(typeof ListEnvironmentHosts$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListEnvironmentVlansCommand === "function");
assert(typeof ListEnvironmentVlans$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AssociateEipToVlanRequest$ === "object");
assert(typeof AssociateEipToVlanResponse$ === "object");
assert(typeof Check$ === "object");
assert(typeof ConnectivityInfo$ === "object");
assert(typeof CreateEnvironmentHostRequest$ === "object");
assert(typeof CreateEnvironmentHostResponse$ === "object");
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateEnvironmentResponse$ === "object");
assert(typeof DeleteEnvironmentHostRequest$ === "object");
assert(typeof DeleteEnvironmentHostResponse$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResponse$ === "object");
assert(typeof DisassociateEipFromVlanRequest$ === "object");
assert(typeof DisassociateEipFromVlanResponse$ === "object");
assert(typeof EipAssociation$ === "object");
assert(typeof Environment$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof Host$ === "object");
assert(typeof HostInfoForCreate$ === "object");
assert(typeof InitialVlanInfo$ === "object");
assert(typeof InitialVlans$ === "object");
assert(typeof LicenseInfo$ === "object");
assert(typeof ListEnvironmentHostsRequest$ === "object");
assert(typeof ListEnvironmentHostsResponse$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListEnvironmentVlansRequest$ === "object");
assert(typeof ListEnvironmentVlansResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof Secret$ === "object");
assert(typeof ServiceAccessSecurityGroups$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VcfHostnames$ === "object");
assert(typeof Vlan$ === "object");
// enums
assert(typeof CheckResult === "object");
assert(typeof CheckType === "object");
assert(typeof EnvironmentState === "object");
assert(typeof HostState === "object");
assert(typeof _InstanceType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VcfVersion === "object");
assert(typeof VlanState === "object");
// errors
assert(ResourceNotFoundException.prototype instanceof EvsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof EvsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TagPolicyException.prototype instanceof EvsServiceException);
assert(typeof TagPolicyException$ === "object");
assert(ThrottlingException.prototype instanceof EvsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof EvsServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof EvsServiceException);
assert(typeof ValidationException$ === "object");
assert(EvsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEnvironmentHosts === "function");
assert(typeof paginateListEnvironmentVlans === "function");
assert(typeof paginateListEnvironments === "function");
console.log(`Evs index test passed.`);
