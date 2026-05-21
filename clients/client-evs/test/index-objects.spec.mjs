import {
  _InstanceType,
  AssociateEipToVlan$,
  AssociateEipToVlanCommand,
  AssociateEipToVlanRequest$,
  AssociateEipToVlanResponse$,
  Check$,
  CheckResult,
  CheckType,
  ConnectivityInfo$,
  Connector$,
  ConnectorCheck$,
  ConnectorState,
  ConnectorType,
  CreateEntitlement$,
  CreateEntitlementCommand,
  CreateEntitlementRequest$,
  CreateEntitlementResponse$,
  CreateEnvironment$,
  CreateEnvironmentCommand,
  CreateEnvironmentConnector$,
  CreateEnvironmentConnectorCommand,
  CreateEnvironmentConnectorRequest$,
  CreateEnvironmentConnectorResponse$,
  CreateEnvironmentHost$,
  CreateEnvironmentHostCommand,
  CreateEnvironmentHostRequest$,
  CreateEnvironmentHostResponse$,
  CreateEnvironmentRequest$,
  CreateEnvironmentResponse$,
  DeleteEntitlement$,
  DeleteEntitlementCommand,
  DeleteEntitlementRequest$,
  DeleteEntitlementResponse$,
  DeleteEnvironment$,
  DeleteEnvironmentCommand,
  DeleteEnvironmentConnector$,
  DeleteEnvironmentConnectorCommand,
  DeleteEnvironmentConnectorRequest$,
  DeleteEnvironmentConnectorResponse$,
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
  EntitlementStatus,
  EntitlementType,
  Environment$,
  EnvironmentState,
  EnvironmentSummary$,
  ErrorDetail$,
  Evs,
  EvsClient,
  EvsServiceException,
  GetDepotUrl$,
  GetDepotUrlCommand,
  GetDepotUrlRequest$,
  GetDepotUrlResponse$,
  GetEnvironment$,
  GetEnvironmentCommand,
  GetEnvironmentRequest$,
  GetEnvironmentResponse$,
  GetVersions$,
  GetVersionsCommand,
  GetVersionsRequest$,
  GetVersionsResponse$,
  Host$,
  HostInfoForCreate$,
  HostState,
  InitialVlanInfo$,
  InitialVlans$,
  InstanceTypeEsxVersionsInfo$,
  InternalServerException,
  InternalServerException$,
  LicenseInfo$,
  ListEnvironmentConnectors$,
  ListEnvironmentConnectorsCommand,
  ListEnvironmentConnectorsRequest$,
  ListEnvironmentConnectorsResponse$,
  ListEnvironmentHosts$,
  ListEnvironmentHostsCommand,
  ListEnvironmentHostsRequest$,
  ListEnvironmentHostsResponse$,
  ListEnvironments$,
  ListEnvironmentsCommand,
  ListEnvironmentsRequest$,
  ListEnvironmentsResponse$,
  ListEnvironmentVlans$,
  ListEnvironmentVlansCommand,
  ListEnvironmentVlansRequest$,
  ListEnvironmentVlansResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVmEntitlements$,
  ListVmEntitlementsCommand,
  ListVmEntitlementsRequest$,
  ListVmEntitlementsResponse$,
  NetworkInterface$,
  paginateListEnvironmentConnectors,
  paginateListEnvironmentHosts,
  paginateListEnvironments,
  paginateListEnvironmentVlans,
  paginateListVmEntitlements,
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
  UpdateEnvironmentConnector$,
  UpdateEnvironmentConnectorCommand,
  UpdateEnvironmentConnectorRequest$,
  UpdateEnvironmentConnectorResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VcfHostnames$,
  VcfVersion,
  VcfVersionInfo$,
  Vlan$,
  VlanState,
  VmEntitlement$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EvsClient === "function");
assert(typeof Evs === "function");
// commands
assert(typeof AssociateEipToVlanCommand === "function");
assert(typeof AssociateEipToVlan$ === "object");
assert(typeof CreateEntitlementCommand === "function");
assert(typeof CreateEntitlement$ === "object");
assert(typeof CreateEnvironmentCommand === "function");
assert(typeof CreateEnvironment$ === "object");
assert(typeof CreateEnvironmentConnectorCommand === "function");
assert(typeof CreateEnvironmentConnector$ === "object");
assert(typeof CreateEnvironmentHostCommand === "function");
assert(typeof CreateEnvironmentHost$ === "object");
assert(typeof DeleteEntitlementCommand === "function");
assert(typeof DeleteEntitlement$ === "object");
assert(typeof DeleteEnvironmentCommand === "function");
assert(typeof DeleteEnvironment$ === "object");
assert(typeof DeleteEnvironmentConnectorCommand === "function");
assert(typeof DeleteEnvironmentConnector$ === "object");
assert(typeof DeleteEnvironmentHostCommand === "function");
assert(typeof DeleteEnvironmentHost$ === "object");
assert(typeof DisassociateEipFromVlanCommand === "function");
assert(typeof DisassociateEipFromVlan$ === "object");
assert(typeof GetDepotUrlCommand === "function");
assert(typeof GetDepotUrl$ === "object");
assert(typeof GetEnvironmentCommand === "function");
assert(typeof GetEnvironment$ === "object");
assert(typeof GetVersionsCommand === "function");
assert(typeof GetVersions$ === "object");
assert(typeof ListEnvironmentConnectorsCommand === "function");
assert(typeof ListEnvironmentConnectors$ === "object");
assert(typeof ListEnvironmentHostsCommand === "function");
assert(typeof ListEnvironmentHosts$ === "object");
assert(typeof ListEnvironmentsCommand === "function");
assert(typeof ListEnvironments$ === "object");
assert(typeof ListEnvironmentVlansCommand === "function");
assert(typeof ListEnvironmentVlans$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVmEntitlementsCommand === "function");
assert(typeof ListVmEntitlements$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEnvironmentConnectorCommand === "function");
assert(typeof UpdateEnvironmentConnector$ === "object");
// structural schemas
assert(typeof AssociateEipToVlanRequest$ === "object");
assert(typeof AssociateEipToVlanResponse$ === "object");
assert(typeof Check$ === "object");
assert(typeof ConnectivityInfo$ === "object");
assert(typeof Connector$ === "object");
assert(typeof ConnectorCheck$ === "object");
assert(typeof CreateEntitlementRequest$ === "object");
assert(typeof CreateEntitlementResponse$ === "object");
assert(typeof CreateEnvironmentConnectorRequest$ === "object");
assert(typeof CreateEnvironmentConnectorResponse$ === "object");
assert(typeof CreateEnvironmentHostRequest$ === "object");
assert(typeof CreateEnvironmentHostResponse$ === "object");
assert(typeof CreateEnvironmentRequest$ === "object");
assert(typeof CreateEnvironmentResponse$ === "object");
assert(typeof DeleteEntitlementRequest$ === "object");
assert(typeof DeleteEntitlementResponse$ === "object");
assert(typeof DeleteEnvironmentConnectorRequest$ === "object");
assert(typeof DeleteEnvironmentConnectorResponse$ === "object");
assert(typeof DeleteEnvironmentHostRequest$ === "object");
assert(typeof DeleteEnvironmentHostResponse$ === "object");
assert(typeof DeleteEnvironmentRequest$ === "object");
assert(typeof DeleteEnvironmentResponse$ === "object");
assert(typeof DisassociateEipFromVlanRequest$ === "object");
assert(typeof DisassociateEipFromVlanResponse$ === "object");
assert(typeof EipAssociation$ === "object");
assert(typeof Environment$ === "object");
assert(typeof EnvironmentSummary$ === "object");
assert(typeof ErrorDetail$ === "object");
assert(typeof GetDepotUrlRequest$ === "object");
assert(typeof GetDepotUrlResponse$ === "object");
assert(typeof GetEnvironmentRequest$ === "object");
assert(typeof GetEnvironmentResponse$ === "object");
assert(typeof GetVersionsRequest$ === "object");
assert(typeof GetVersionsResponse$ === "object");
assert(typeof Host$ === "object");
assert(typeof HostInfoForCreate$ === "object");
assert(typeof InitialVlanInfo$ === "object");
assert(typeof InitialVlans$ === "object");
assert(typeof InstanceTypeEsxVersionsInfo$ === "object");
assert(typeof LicenseInfo$ === "object");
assert(typeof ListEnvironmentConnectorsRequest$ === "object");
assert(typeof ListEnvironmentConnectorsResponse$ === "object");
assert(typeof ListEnvironmentHostsRequest$ === "object");
assert(typeof ListEnvironmentHostsResponse$ === "object");
assert(typeof ListEnvironmentsRequest$ === "object");
assert(typeof ListEnvironmentsResponse$ === "object");
assert(typeof ListEnvironmentVlansRequest$ === "object");
assert(typeof ListEnvironmentVlansResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVmEntitlementsRequest$ === "object");
assert(typeof ListVmEntitlementsResponse$ === "object");
assert(typeof NetworkInterface$ === "object");
assert(typeof Secret$ === "object");
assert(typeof ServiceAccessSecurityGroups$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateEnvironmentConnectorRequest$ === "object");
assert(typeof UpdateEnvironmentConnectorResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VcfHostnames$ === "object");
assert(typeof VcfVersionInfo$ === "object");
assert(typeof Vlan$ === "object");
assert(typeof VmEntitlement$ === "object");
// enums
assert(typeof CheckResult === "object");
assert(typeof CheckType === "object");
assert(typeof ConnectorState === "object");
assert(typeof ConnectorType === "object");
assert(typeof EntitlementStatus === "object");
assert(typeof EntitlementType === "object");
assert(typeof EnvironmentState === "object");
assert(typeof HostState === "object");
assert(typeof _InstanceType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VcfVersion === "object");
assert(typeof VlanState === "object");
// errors
assert(InternalServerException.prototype instanceof EvsServiceException);
assert(typeof InternalServerException$ === "object");
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
assert(typeof paginateListEnvironmentConnectors === "function");
assert(typeof paginateListEnvironmentHosts === "function");
assert(typeof paginateListEnvironmentVlans === "function");
assert(typeof paginateListEnvironments === "function");
assert(typeof paginateListVmEntitlements === "function");
console.log(`Evs index test passed.`);
