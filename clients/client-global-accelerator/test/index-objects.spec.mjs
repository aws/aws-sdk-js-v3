import {
  Accelerator$,
  AcceleratorAttributes$,
  AcceleratorEvent$,
  AcceleratorNotDisabledException,
  AcceleratorNotDisabledException$,
  AcceleratorNotFoundException,
  AcceleratorNotFoundException$,
  AcceleratorStatus,
  AccessDeniedException,
  AccessDeniedException$,
  AddCustomRoutingEndpoints$,
  AddCustomRoutingEndpointsCommand,
  AddCustomRoutingEndpointsRequest$,
  AddCustomRoutingEndpointsResponse$,
  AddEndpoints$,
  AddEndpointsCommand,
  AddEndpointsRequest$,
  AddEndpointsResponse$,
  AdvertiseByoipCidr$,
  AdvertiseByoipCidrCommand,
  AdvertiseByoipCidrRequest$,
  AdvertiseByoipCidrResponse$,
  AllowCustomRoutingTraffic$,
  AllowCustomRoutingTrafficCommand,
  AllowCustomRoutingTrafficRequest$,
  AssociatedEndpointGroupFoundException,
  AssociatedEndpointGroupFoundException$,
  AssociatedListenerFoundException,
  AssociatedListenerFoundException$,
  Attachment$,
  AttachmentNotFoundException,
  AttachmentNotFoundException$,
  ByoipCidr$,
  ByoipCidrEvent$,
  ByoipCidrNotFoundException,
  ByoipCidrNotFoundException$,
  ByoipCidrState,
  CidrAuthorizationContext$,
  ClientAffinity,
  ConflictException,
  ConflictException$,
  CreateAccelerator$,
  CreateAcceleratorCommand,
  CreateAcceleratorRequest$,
  CreateAcceleratorResponse$,
  CreateCrossAccountAttachment$,
  CreateCrossAccountAttachmentCommand,
  CreateCrossAccountAttachmentRequest$,
  CreateCrossAccountAttachmentResponse$,
  CreateCustomRoutingAccelerator$,
  CreateCustomRoutingAcceleratorCommand,
  CreateCustomRoutingAcceleratorRequest$,
  CreateCustomRoutingAcceleratorResponse$,
  CreateCustomRoutingEndpointGroup$,
  CreateCustomRoutingEndpointGroupCommand,
  CreateCustomRoutingEndpointGroupRequest$,
  CreateCustomRoutingEndpointGroupResponse$,
  CreateCustomRoutingListener$,
  CreateCustomRoutingListenerCommand,
  CreateCustomRoutingListenerRequest$,
  CreateCustomRoutingListenerResponse$,
  CreateEndpointGroup$,
  CreateEndpointGroupCommand,
  CreateEndpointGroupRequest$,
  CreateEndpointGroupResponse$,
  CreateListener$,
  CreateListenerCommand,
  CreateListenerRequest$,
  CreateListenerResponse$,
  CrossAccountResource$,
  CustomRoutingAccelerator$,
  CustomRoutingAcceleratorAttributes$,
  CustomRoutingAcceleratorStatus,
  CustomRoutingDestinationConfiguration$,
  CustomRoutingDestinationDescription$,
  CustomRoutingDestinationTrafficState,
  CustomRoutingEndpointConfiguration$,
  CustomRoutingEndpointDescription$,
  CustomRoutingEndpointGroup$,
  CustomRoutingListener$,
  CustomRoutingProtocol,
  DeleteAccelerator$,
  DeleteAcceleratorCommand,
  DeleteAcceleratorRequest$,
  DeleteCrossAccountAttachment$,
  DeleteCrossAccountAttachmentCommand,
  DeleteCrossAccountAttachmentRequest$,
  DeleteCustomRoutingAccelerator$,
  DeleteCustomRoutingAcceleratorCommand,
  DeleteCustomRoutingAcceleratorRequest$,
  DeleteCustomRoutingEndpointGroup$,
  DeleteCustomRoutingEndpointGroupCommand,
  DeleteCustomRoutingEndpointGroupRequest$,
  DeleteCustomRoutingListener$,
  DeleteCustomRoutingListenerCommand,
  DeleteCustomRoutingListenerRequest$,
  DeleteEndpointGroup$,
  DeleteEndpointGroupCommand,
  DeleteEndpointGroupRequest$,
  DeleteListener$,
  DeleteListenerCommand,
  DeleteListenerRequest$,
  DenyCustomRoutingTraffic$,
  DenyCustomRoutingTrafficCommand,
  DenyCustomRoutingTrafficRequest$,
  DeprovisionByoipCidr$,
  DeprovisionByoipCidrCommand,
  DeprovisionByoipCidrRequest$,
  DeprovisionByoipCidrResponse$,
  DescribeAccelerator$,
  DescribeAcceleratorAttributes$,
  DescribeAcceleratorAttributesCommand,
  DescribeAcceleratorAttributesRequest$,
  DescribeAcceleratorAttributesResponse$,
  DescribeAcceleratorCommand,
  DescribeAcceleratorRequest$,
  DescribeAcceleratorResponse$,
  DescribeCrossAccountAttachment$,
  DescribeCrossAccountAttachmentCommand,
  DescribeCrossAccountAttachmentRequest$,
  DescribeCrossAccountAttachmentResponse$,
  DescribeCustomRoutingAccelerator$,
  DescribeCustomRoutingAcceleratorAttributes$,
  DescribeCustomRoutingAcceleratorAttributesCommand,
  DescribeCustomRoutingAcceleratorAttributesRequest$,
  DescribeCustomRoutingAcceleratorAttributesResponse$,
  DescribeCustomRoutingAcceleratorCommand,
  DescribeCustomRoutingAcceleratorRequest$,
  DescribeCustomRoutingAcceleratorResponse$,
  DescribeCustomRoutingEndpointGroup$,
  DescribeCustomRoutingEndpointGroupCommand,
  DescribeCustomRoutingEndpointGroupRequest$,
  DescribeCustomRoutingEndpointGroupResponse$,
  DescribeCustomRoutingListener$,
  DescribeCustomRoutingListenerCommand,
  DescribeCustomRoutingListenerRequest$,
  DescribeCustomRoutingListenerResponse$,
  DescribeEndpointGroup$,
  DescribeEndpointGroupCommand,
  DescribeEndpointGroupRequest$,
  DescribeEndpointGroupResponse$,
  DescribeListener$,
  DescribeListenerCommand,
  DescribeListenerRequest$,
  DescribeListenerResponse$,
  DestinationPortMapping$,
  EndpointAlreadyExistsException,
  EndpointAlreadyExistsException$,
  EndpointConfiguration$,
  EndpointDescription$,
  EndpointGroup$,
  EndpointGroupAlreadyExistsException,
  EndpointGroupAlreadyExistsException$,
  EndpointGroupNotFoundException,
  EndpointGroupNotFoundException$,
  EndpointIdentifier$,
  EndpointNotFoundException,
  EndpointNotFoundException$,
  GlobalAccelerator,
  GlobalAcceleratorClient,
  GlobalAcceleratorServiceException,
  HealthCheckProtocol,
  HealthState,
  IncorrectCidrStateException,
  IncorrectCidrStateException$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidPortRangeException,
  InvalidPortRangeException$,
  IpAddressFamily,
  IpAddressType,
  IpSet$,
  LimitExceededException,
  LimitExceededException$,
  ListAccelerators$,
  ListAcceleratorsCommand,
  ListAcceleratorsRequest$,
  ListAcceleratorsResponse$,
  ListByoipCidrs$,
  ListByoipCidrsCommand,
  ListByoipCidrsRequest$,
  ListByoipCidrsResponse$,
  ListCrossAccountAttachments$,
  ListCrossAccountAttachmentsCommand,
  ListCrossAccountAttachmentsRequest$,
  ListCrossAccountAttachmentsResponse$,
  ListCrossAccountResourceAccounts$,
  ListCrossAccountResourceAccountsCommand,
  ListCrossAccountResourceAccountsRequest$,
  ListCrossAccountResourceAccountsResponse$,
  ListCrossAccountResources$,
  ListCrossAccountResourcesCommand,
  ListCrossAccountResourcesRequest$,
  ListCrossAccountResourcesResponse$,
  ListCustomRoutingAccelerators$,
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingAcceleratorsRequest$,
  ListCustomRoutingAcceleratorsResponse$,
  ListCustomRoutingEndpointGroups$,
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingEndpointGroupsRequest$,
  ListCustomRoutingEndpointGroupsResponse$,
  ListCustomRoutingListeners$,
  ListCustomRoutingListenersCommand,
  ListCustomRoutingListenersRequest$,
  ListCustomRoutingListenersResponse$,
  ListCustomRoutingPortMappings$,
  ListCustomRoutingPortMappingsByDestination$,
  ListCustomRoutingPortMappingsByDestinationCommand,
  ListCustomRoutingPortMappingsByDestinationRequest$,
  ListCustomRoutingPortMappingsByDestinationResponse$,
  ListCustomRoutingPortMappingsCommand,
  ListCustomRoutingPortMappingsRequest$,
  ListCustomRoutingPortMappingsResponse$,
  ListEndpointGroups$,
  ListEndpointGroupsCommand,
  ListEndpointGroupsRequest$,
  ListEndpointGroupsResponse$,
  ListListeners$,
  ListListenersCommand,
  ListListenersRequest$,
  ListListenersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Listener$,
  ListenerNotFoundException,
  ListenerNotFoundException$,
  PortMapping$,
  PortOverride$,
  PortRange$,
  Protocol,
  ProvisionByoipCidr$,
  ProvisionByoipCidrCommand,
  ProvisionByoipCidrRequest$,
  ProvisionByoipCidrResponse$,
  RemoveCustomRoutingEndpoints$,
  RemoveCustomRoutingEndpointsCommand,
  RemoveCustomRoutingEndpointsRequest$,
  RemoveEndpoints$,
  RemoveEndpointsCommand,
  RemoveEndpointsRequest$,
  Resource$,
  SocketAddress$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TransactionInProgressException,
  TransactionInProgressException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAccelerator$,
  UpdateAcceleratorAttributes$,
  UpdateAcceleratorAttributesCommand,
  UpdateAcceleratorAttributesRequest$,
  UpdateAcceleratorAttributesResponse$,
  UpdateAcceleratorCommand,
  UpdateAcceleratorRequest$,
  UpdateAcceleratorResponse$,
  UpdateCrossAccountAttachment$,
  UpdateCrossAccountAttachmentCommand,
  UpdateCrossAccountAttachmentRequest$,
  UpdateCrossAccountAttachmentResponse$,
  UpdateCustomRoutingAccelerator$,
  UpdateCustomRoutingAcceleratorAttributes$,
  UpdateCustomRoutingAcceleratorAttributesCommand,
  UpdateCustomRoutingAcceleratorAttributesRequest$,
  UpdateCustomRoutingAcceleratorAttributesResponse$,
  UpdateCustomRoutingAcceleratorCommand,
  UpdateCustomRoutingAcceleratorRequest$,
  UpdateCustomRoutingAcceleratorResponse$,
  UpdateCustomRoutingListener$,
  UpdateCustomRoutingListenerCommand,
  UpdateCustomRoutingListenerRequest$,
  UpdateCustomRoutingListenerResponse$,
  UpdateEndpointGroup$,
  UpdateEndpointGroupCommand,
  UpdateEndpointGroupRequest$,
  UpdateEndpointGroupResponse$,
  UpdateListener$,
  UpdateListenerCommand,
  UpdateListenerRequest$,
  UpdateListenerResponse$,
  WithdrawByoipCidr$,
  WithdrawByoipCidrCommand,
  WithdrawByoipCidrRequest$,
  WithdrawByoipCidrResponse$,
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
assert(typeof AddCustomRoutingEndpoints$ === "object");
assert(typeof AddEndpointsCommand === "function");
assert(typeof AddEndpoints$ === "object");
assert(typeof AdvertiseByoipCidrCommand === "function");
assert(typeof AdvertiseByoipCidr$ === "object");
assert(typeof AllowCustomRoutingTrafficCommand === "function");
assert(typeof AllowCustomRoutingTraffic$ === "object");
assert(typeof CreateAcceleratorCommand === "function");
assert(typeof CreateAccelerator$ === "object");
assert(typeof CreateCrossAccountAttachmentCommand === "function");
assert(typeof CreateCrossAccountAttachment$ === "object");
assert(typeof CreateCustomRoutingAcceleratorCommand === "function");
assert(typeof CreateCustomRoutingAccelerator$ === "object");
assert(typeof CreateCustomRoutingEndpointGroupCommand === "function");
assert(typeof CreateCustomRoutingEndpointGroup$ === "object");
assert(typeof CreateCustomRoutingListenerCommand === "function");
assert(typeof CreateCustomRoutingListener$ === "object");
assert(typeof CreateEndpointGroupCommand === "function");
assert(typeof CreateEndpointGroup$ === "object");
assert(typeof CreateListenerCommand === "function");
assert(typeof CreateListener$ === "object");
assert(typeof DeleteAcceleratorCommand === "function");
assert(typeof DeleteAccelerator$ === "object");
assert(typeof DeleteCrossAccountAttachmentCommand === "function");
assert(typeof DeleteCrossAccountAttachment$ === "object");
assert(typeof DeleteCustomRoutingAcceleratorCommand === "function");
assert(typeof DeleteCustomRoutingAccelerator$ === "object");
assert(typeof DeleteCustomRoutingEndpointGroupCommand === "function");
assert(typeof DeleteCustomRoutingEndpointGroup$ === "object");
assert(typeof DeleteCustomRoutingListenerCommand === "function");
assert(typeof DeleteCustomRoutingListener$ === "object");
assert(typeof DeleteEndpointGroupCommand === "function");
assert(typeof DeleteEndpointGroup$ === "object");
assert(typeof DeleteListenerCommand === "function");
assert(typeof DeleteListener$ === "object");
assert(typeof DenyCustomRoutingTrafficCommand === "function");
assert(typeof DenyCustomRoutingTraffic$ === "object");
assert(typeof DeprovisionByoipCidrCommand === "function");
assert(typeof DeprovisionByoipCidr$ === "object");
assert(typeof DescribeAcceleratorCommand === "function");
assert(typeof DescribeAccelerator$ === "object");
assert(typeof DescribeAcceleratorAttributesCommand === "function");
assert(typeof DescribeAcceleratorAttributes$ === "object");
assert(typeof DescribeCrossAccountAttachmentCommand === "function");
assert(typeof DescribeCrossAccountAttachment$ === "object");
assert(typeof DescribeCustomRoutingAcceleratorCommand === "function");
assert(typeof DescribeCustomRoutingAccelerator$ === "object");
assert(typeof DescribeCustomRoutingAcceleratorAttributesCommand === "function");
assert(typeof DescribeCustomRoutingAcceleratorAttributes$ === "object");
assert(typeof DescribeCustomRoutingEndpointGroupCommand === "function");
assert(typeof DescribeCustomRoutingEndpointGroup$ === "object");
assert(typeof DescribeCustomRoutingListenerCommand === "function");
assert(typeof DescribeCustomRoutingListener$ === "object");
assert(typeof DescribeEndpointGroupCommand === "function");
assert(typeof DescribeEndpointGroup$ === "object");
assert(typeof DescribeListenerCommand === "function");
assert(typeof DescribeListener$ === "object");
assert(typeof ListAcceleratorsCommand === "function");
assert(typeof ListAccelerators$ === "object");
assert(typeof ListByoipCidrsCommand === "function");
assert(typeof ListByoipCidrs$ === "object");
assert(typeof ListCrossAccountAttachmentsCommand === "function");
assert(typeof ListCrossAccountAttachments$ === "object");
assert(typeof ListCrossAccountResourceAccountsCommand === "function");
assert(typeof ListCrossAccountResourceAccounts$ === "object");
assert(typeof ListCrossAccountResourcesCommand === "function");
assert(typeof ListCrossAccountResources$ === "object");
assert(typeof ListCustomRoutingAcceleratorsCommand === "function");
assert(typeof ListCustomRoutingAccelerators$ === "object");
assert(typeof ListCustomRoutingEndpointGroupsCommand === "function");
assert(typeof ListCustomRoutingEndpointGroups$ === "object");
assert(typeof ListCustomRoutingListenersCommand === "function");
assert(typeof ListCustomRoutingListeners$ === "object");
assert(typeof ListCustomRoutingPortMappingsCommand === "function");
assert(typeof ListCustomRoutingPortMappings$ === "object");
assert(typeof ListCustomRoutingPortMappingsByDestinationCommand === "function");
assert(typeof ListCustomRoutingPortMappingsByDestination$ === "object");
assert(typeof ListEndpointGroupsCommand === "function");
assert(typeof ListEndpointGroups$ === "object");
assert(typeof ListListenersCommand === "function");
assert(typeof ListListeners$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ProvisionByoipCidrCommand === "function");
assert(typeof ProvisionByoipCidr$ === "object");
assert(typeof RemoveCustomRoutingEndpointsCommand === "function");
assert(typeof RemoveCustomRoutingEndpoints$ === "object");
assert(typeof RemoveEndpointsCommand === "function");
assert(typeof RemoveEndpoints$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAcceleratorCommand === "function");
assert(typeof UpdateAccelerator$ === "object");
assert(typeof UpdateAcceleratorAttributesCommand === "function");
assert(typeof UpdateAcceleratorAttributes$ === "object");
assert(typeof UpdateCrossAccountAttachmentCommand === "function");
assert(typeof UpdateCrossAccountAttachment$ === "object");
assert(typeof UpdateCustomRoutingAcceleratorCommand === "function");
assert(typeof UpdateCustomRoutingAccelerator$ === "object");
assert(typeof UpdateCustomRoutingAcceleratorAttributesCommand === "function");
assert(typeof UpdateCustomRoutingAcceleratorAttributes$ === "object");
assert(typeof UpdateCustomRoutingListenerCommand === "function");
assert(typeof UpdateCustomRoutingListener$ === "object");
assert(typeof UpdateEndpointGroupCommand === "function");
assert(typeof UpdateEndpointGroup$ === "object");
assert(typeof UpdateListenerCommand === "function");
assert(typeof UpdateListener$ === "object");
assert(typeof WithdrawByoipCidrCommand === "function");
assert(typeof WithdrawByoipCidr$ === "object");
// structural schemas
assert(typeof Accelerator$ === "object");
assert(typeof AcceleratorAttributes$ === "object");
assert(typeof AcceleratorEvent$ === "object");
assert(typeof AddCustomRoutingEndpointsRequest$ === "object");
assert(typeof AddCustomRoutingEndpointsResponse$ === "object");
assert(typeof AddEndpointsRequest$ === "object");
assert(typeof AddEndpointsResponse$ === "object");
assert(typeof AdvertiseByoipCidrRequest$ === "object");
assert(typeof AdvertiseByoipCidrResponse$ === "object");
assert(typeof AllowCustomRoutingTrafficRequest$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof ByoipCidr$ === "object");
assert(typeof ByoipCidrEvent$ === "object");
assert(typeof CidrAuthorizationContext$ === "object");
assert(typeof CreateAcceleratorRequest$ === "object");
assert(typeof CreateAcceleratorResponse$ === "object");
assert(typeof CreateCrossAccountAttachmentRequest$ === "object");
assert(typeof CreateCrossAccountAttachmentResponse$ === "object");
assert(typeof CreateCustomRoutingAcceleratorRequest$ === "object");
assert(typeof CreateCustomRoutingAcceleratorResponse$ === "object");
assert(typeof CreateCustomRoutingEndpointGroupRequest$ === "object");
assert(typeof CreateCustomRoutingEndpointGroupResponse$ === "object");
assert(typeof CreateCustomRoutingListenerRequest$ === "object");
assert(typeof CreateCustomRoutingListenerResponse$ === "object");
assert(typeof CreateEndpointGroupRequest$ === "object");
assert(typeof CreateEndpointGroupResponse$ === "object");
assert(typeof CreateListenerRequest$ === "object");
assert(typeof CreateListenerResponse$ === "object");
assert(typeof CrossAccountResource$ === "object");
assert(typeof CustomRoutingAccelerator$ === "object");
assert(typeof CustomRoutingAcceleratorAttributes$ === "object");
assert(typeof CustomRoutingDestinationConfiguration$ === "object");
assert(typeof CustomRoutingDestinationDescription$ === "object");
assert(typeof CustomRoutingEndpointConfiguration$ === "object");
assert(typeof CustomRoutingEndpointDescription$ === "object");
assert(typeof CustomRoutingEndpointGroup$ === "object");
assert(typeof CustomRoutingListener$ === "object");
assert(typeof DeleteAcceleratorRequest$ === "object");
assert(typeof DeleteCrossAccountAttachmentRequest$ === "object");
assert(typeof DeleteCustomRoutingAcceleratorRequest$ === "object");
assert(typeof DeleteCustomRoutingEndpointGroupRequest$ === "object");
assert(typeof DeleteCustomRoutingListenerRequest$ === "object");
assert(typeof DeleteEndpointGroupRequest$ === "object");
assert(typeof DeleteListenerRequest$ === "object");
assert(typeof DenyCustomRoutingTrafficRequest$ === "object");
assert(typeof DeprovisionByoipCidrRequest$ === "object");
assert(typeof DeprovisionByoipCidrResponse$ === "object");
assert(typeof DescribeAcceleratorAttributesRequest$ === "object");
assert(typeof DescribeAcceleratorAttributesResponse$ === "object");
assert(typeof DescribeAcceleratorRequest$ === "object");
assert(typeof DescribeAcceleratorResponse$ === "object");
assert(typeof DescribeCrossAccountAttachmentRequest$ === "object");
assert(typeof DescribeCrossAccountAttachmentResponse$ === "object");
assert(typeof DescribeCustomRoutingAcceleratorAttributesRequest$ === "object");
assert(typeof DescribeCustomRoutingAcceleratorAttributesResponse$ === "object");
assert(typeof DescribeCustomRoutingAcceleratorRequest$ === "object");
assert(typeof DescribeCustomRoutingAcceleratorResponse$ === "object");
assert(typeof DescribeCustomRoutingEndpointGroupRequest$ === "object");
assert(typeof DescribeCustomRoutingEndpointGroupResponse$ === "object");
assert(typeof DescribeCustomRoutingListenerRequest$ === "object");
assert(typeof DescribeCustomRoutingListenerResponse$ === "object");
assert(typeof DescribeEndpointGroupRequest$ === "object");
assert(typeof DescribeEndpointGroupResponse$ === "object");
assert(typeof DescribeListenerRequest$ === "object");
assert(typeof DescribeListenerResponse$ === "object");
assert(typeof DestinationPortMapping$ === "object");
assert(typeof EndpointConfiguration$ === "object");
assert(typeof EndpointDescription$ === "object");
assert(typeof EndpointGroup$ === "object");
assert(typeof EndpointIdentifier$ === "object");
assert(typeof IpSet$ === "object");
assert(typeof ListAcceleratorsRequest$ === "object");
assert(typeof ListAcceleratorsResponse$ === "object");
assert(typeof ListByoipCidrsRequest$ === "object");
assert(typeof ListByoipCidrsResponse$ === "object");
assert(typeof ListCrossAccountAttachmentsRequest$ === "object");
assert(typeof ListCrossAccountAttachmentsResponse$ === "object");
assert(typeof ListCrossAccountResourceAccountsRequest$ === "object");
assert(typeof ListCrossAccountResourceAccountsResponse$ === "object");
assert(typeof ListCrossAccountResourcesRequest$ === "object");
assert(typeof ListCrossAccountResourcesResponse$ === "object");
assert(typeof ListCustomRoutingAcceleratorsRequest$ === "object");
assert(typeof ListCustomRoutingAcceleratorsResponse$ === "object");
assert(typeof ListCustomRoutingEndpointGroupsRequest$ === "object");
assert(typeof ListCustomRoutingEndpointGroupsResponse$ === "object");
assert(typeof ListCustomRoutingListenersRequest$ === "object");
assert(typeof ListCustomRoutingListenersResponse$ === "object");
assert(typeof ListCustomRoutingPortMappingsByDestinationRequest$ === "object");
assert(typeof ListCustomRoutingPortMappingsByDestinationResponse$ === "object");
assert(typeof ListCustomRoutingPortMappingsRequest$ === "object");
assert(typeof ListCustomRoutingPortMappingsResponse$ === "object");
assert(typeof ListEndpointGroupsRequest$ === "object");
assert(typeof ListEndpointGroupsResponse$ === "object");
assert(typeof Listener$ === "object");
assert(typeof ListListenersRequest$ === "object");
assert(typeof ListListenersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PortMapping$ === "object");
assert(typeof PortOverride$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof ProvisionByoipCidrRequest$ === "object");
assert(typeof ProvisionByoipCidrResponse$ === "object");
assert(typeof RemoveCustomRoutingEndpointsRequest$ === "object");
assert(typeof RemoveEndpointsRequest$ === "object");
assert(typeof Resource$ === "object");
assert(typeof SocketAddress$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAcceleratorAttributesRequest$ === "object");
assert(typeof UpdateAcceleratorAttributesResponse$ === "object");
assert(typeof UpdateAcceleratorRequest$ === "object");
assert(typeof UpdateAcceleratorResponse$ === "object");
assert(typeof UpdateCrossAccountAttachmentRequest$ === "object");
assert(typeof UpdateCrossAccountAttachmentResponse$ === "object");
assert(typeof UpdateCustomRoutingAcceleratorAttributesRequest$ === "object");
assert(typeof UpdateCustomRoutingAcceleratorAttributesResponse$ === "object");
assert(typeof UpdateCustomRoutingAcceleratorRequest$ === "object");
assert(typeof UpdateCustomRoutingAcceleratorResponse$ === "object");
assert(typeof UpdateCustomRoutingListenerRequest$ === "object");
assert(typeof UpdateCustomRoutingListenerResponse$ === "object");
assert(typeof UpdateEndpointGroupRequest$ === "object");
assert(typeof UpdateEndpointGroupResponse$ === "object");
assert(typeof UpdateListenerRequest$ === "object");
assert(typeof UpdateListenerResponse$ === "object");
assert(typeof WithdrawByoipCidrRequest$ === "object");
assert(typeof WithdrawByoipCidrResponse$ === "object");
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
assert(AcceleratorNotDisabledException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof AcceleratorNotDisabledException$ === "object");
assert(AcceleratorNotFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof AcceleratorNotFoundException$ === "object");
assert(AccessDeniedException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(AssociatedEndpointGroupFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof AssociatedEndpointGroupFoundException$ === "object");
assert(AssociatedListenerFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof AssociatedListenerFoundException$ === "object");
assert(AttachmentNotFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof AttachmentNotFoundException$ === "object");
assert(ByoipCidrNotFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof ByoipCidrNotFoundException$ === "object");
assert(ConflictException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof ConflictException$ === "object");
assert(EndpointAlreadyExistsException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof EndpointAlreadyExistsException$ === "object");
assert(EndpointGroupAlreadyExistsException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof EndpointGroupAlreadyExistsException$ === "object");
assert(EndpointGroupNotFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof EndpointGroupNotFoundException$ === "object");
assert(EndpointNotFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof EndpointNotFoundException$ === "object");
assert(IncorrectCidrStateException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof IncorrectCidrStateException$ === "object");
assert(InternalServiceErrorException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidArgumentException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidNextTokenException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidPortRangeException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof InvalidPortRangeException$ === "object");
assert(LimitExceededException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ListenerNotFoundException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof ListenerNotFoundException$ === "object");
assert(TransactionInProgressException.prototype instanceof GlobalAcceleratorServiceException);
assert(typeof TransactionInProgressException$ === "object");
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
