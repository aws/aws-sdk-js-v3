import {
  AcceleratorStatus,
  AddCustomRoutingEndpointsCommand,
  AddEndpointsCommand,
  AdvertiseByoipCidrCommand,
  AllowCustomRoutingTrafficCommand,
  ByoipCidrState,
  ClientAffinity,
  CreateAcceleratorCommand,
  CreateCrossAccountAttachmentCommand,
  CreateCustomRoutingAcceleratorCommand,
  CreateCustomRoutingEndpointGroupCommand,
  CreateCustomRoutingListenerCommand,
  CreateEndpointGroupCommand,
  CreateListenerCommand,
  CustomRoutingAcceleratorStatus,
  CustomRoutingDestinationTrafficState,
  CustomRoutingProtocol,
  DeleteAcceleratorCommand,
  DeleteCrossAccountAttachmentCommand,
  DeleteCustomRoutingAcceleratorCommand,
  DeleteCustomRoutingEndpointGroupCommand,
  DeleteCustomRoutingListenerCommand,
  DeleteEndpointGroupCommand,
  DeleteListenerCommand,
  DenyCustomRoutingTrafficCommand,
  DeprovisionByoipCidrCommand,
  DescribeAcceleratorAttributesCommand,
  DescribeAcceleratorCommand,
  DescribeCrossAccountAttachmentCommand,
  DescribeCustomRoutingAcceleratorAttributesCommand,
  DescribeCustomRoutingAcceleratorCommand,
  DescribeCustomRoutingEndpointGroupCommand,
  DescribeCustomRoutingListenerCommand,
  DescribeEndpointGroupCommand,
  DescribeListenerCommand,
  GlobalAccelerator,
  GlobalAcceleratorClient,
  GlobalAcceleratorServiceException,
  HealthCheckProtocol,
  HealthState,
  IpAddressFamily,
  IpAddressType,
  ListAcceleratorsCommand,
  ListByoipCidrsCommand,
  ListCrossAccountAttachmentsCommand,
  ListCrossAccountResourceAccountsCommand,
  ListCrossAccountResourcesCommand,
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingListenersCommand,
  ListCustomRoutingPortMappingsByDestinationCommand,
  ListCustomRoutingPortMappingsCommand,
  ListEndpointGroupsCommand,
  ListListenersCommand,
  ListTagsForResourceCommand,
  Protocol,
  ProvisionByoipCidrCommand,
  RemoveCustomRoutingEndpointsCommand,
  RemoveEndpointsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAcceleratorAttributesCommand,
  UpdateAcceleratorCommand,
  UpdateCrossAccountAttachmentCommand,
  UpdateCustomRoutingAcceleratorAttributesCommand,
  UpdateCustomRoutingAcceleratorCommand,
  UpdateCustomRoutingListenerCommand,
  UpdateEndpointGroupCommand,
  UpdateListenerCommand,
  WithdrawByoipCidrCommand,
  paginateListAccelerators,
  paginateListByoipCidrs,
  paginateListCrossAccountAttachments,
  paginateListCrossAccountResources,
  paginateListCustomRoutingAccelerators,
  paginateListCustomRoutingEndpointGroups,
  paginateListCustomRoutingListeners,
  paginateListCustomRoutingPortMappings,
  paginateListCustomRoutingPortMappingsByDestination,
  paginateListEndpointGroups,
  paginateListListeners,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GlobalAcceleratorClient === "function");
assert(typeof GlobalAccelerator === "function");
// commands
assert(typeof AddCustomRoutingEndpointsCommand === "function");
assert(typeof AddEndpointsCommand === "function");
assert(typeof AdvertiseByoipCidrCommand === "function");
assert(typeof AllowCustomRoutingTrafficCommand === "function");
assert(typeof CreateAcceleratorCommand === "function");
assert(typeof CreateCrossAccountAttachmentCommand === "function");
assert(typeof CreateCustomRoutingAcceleratorCommand === "function");
assert(typeof CreateCustomRoutingEndpointGroupCommand === "function");
assert(typeof CreateCustomRoutingListenerCommand === "function");
assert(typeof CreateEndpointGroupCommand === "function");
assert(typeof CreateListenerCommand === "function");
assert(typeof DeleteAcceleratorCommand === "function");
assert(typeof DeleteCrossAccountAttachmentCommand === "function");
assert(typeof DeleteCustomRoutingAcceleratorCommand === "function");
assert(typeof DeleteCustomRoutingEndpointGroupCommand === "function");
assert(typeof DeleteCustomRoutingListenerCommand === "function");
assert(typeof DeleteEndpointGroupCommand === "function");
assert(typeof DeleteListenerCommand === "function");
assert(typeof DenyCustomRoutingTrafficCommand === "function");
assert(typeof DeprovisionByoipCidrCommand === "function");
assert(typeof DescribeAcceleratorCommand === "function");
assert(typeof DescribeAcceleratorAttributesCommand === "function");
assert(typeof DescribeCrossAccountAttachmentCommand === "function");
assert(typeof DescribeCustomRoutingAcceleratorCommand === "function");
assert(typeof DescribeCustomRoutingAcceleratorAttributesCommand === "function");
assert(typeof DescribeCustomRoutingEndpointGroupCommand === "function");
assert(typeof DescribeCustomRoutingListenerCommand === "function");
assert(typeof DescribeEndpointGroupCommand === "function");
assert(typeof DescribeListenerCommand === "function");
assert(typeof ListAcceleratorsCommand === "function");
assert(typeof ListByoipCidrsCommand === "function");
assert(typeof ListCrossAccountAttachmentsCommand === "function");
assert(typeof ListCrossAccountResourceAccountsCommand === "function");
assert(typeof ListCrossAccountResourcesCommand === "function");
assert(typeof ListCustomRoutingAcceleratorsCommand === "function");
assert(typeof ListCustomRoutingEndpointGroupsCommand === "function");
assert(typeof ListCustomRoutingListenersCommand === "function");
assert(typeof ListCustomRoutingPortMappingsCommand === "function");
assert(typeof ListCustomRoutingPortMappingsByDestinationCommand === "function");
assert(typeof ListEndpointGroupsCommand === "function");
assert(typeof ListListenersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ProvisionByoipCidrCommand === "function");
assert(typeof RemoveCustomRoutingEndpointsCommand === "function");
assert(typeof RemoveEndpointsCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAcceleratorCommand === "function");
assert(typeof UpdateAcceleratorAttributesCommand === "function");
assert(typeof UpdateCrossAccountAttachmentCommand === "function");
assert(typeof UpdateCustomRoutingAcceleratorCommand === "function");
assert(typeof UpdateCustomRoutingAcceleratorAttributesCommand === "function");
assert(typeof UpdateCustomRoutingListenerCommand === "function");
assert(typeof UpdateEndpointGroupCommand === "function");
assert(typeof UpdateListenerCommand === "function");
assert(typeof WithdrawByoipCidrCommand === "function");
// enums
assert(typeof AcceleratorStatus === "object");
assert(typeof ByoipCidrState === "object");
assert(typeof ClientAffinity === "object");
assert(typeof CustomRoutingAcceleratorStatus === "object");
assert(typeof CustomRoutingDestinationTrafficState === "object");
assert(typeof CustomRoutingProtocol === "object");
assert(typeof HealthCheckProtocol === "object");
assert(typeof HealthState === "object");
assert(typeof IpAddressFamily === "object");
assert(typeof IpAddressType === "object");
assert(typeof Protocol === "object");
// errors
assert(GlobalAcceleratorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccelerators === "function");
assert(typeof paginateListByoipCidrs === "function");
assert(typeof paginateListCrossAccountAttachments === "function");
assert(typeof paginateListCrossAccountResources === "function");
assert(typeof paginateListCustomRoutingAccelerators === "function");
assert(typeof paginateListCustomRoutingEndpointGroups === "function");
assert(typeof paginateListCustomRoutingListeners === "function");
assert(typeof paginateListCustomRoutingPortMappings === "function");
assert(typeof paginateListCustomRoutingPortMappingsByDestination === "function");
assert(typeof paginateListEndpointGroups === "function");
assert(typeof paginateListListeners === "function");
console.log(`GlobalAccelerator index test passed.`);
