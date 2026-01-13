import {
  AcceptLink$,
  AcceptLinkCommand,
  AcceptLinkRequest$,
  AcceptLinkResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  Action$,
  AutoScalingGroupsConfiguration$,
  ConflictException,
  ConflictException$,
  CreateInboundExternalLink$,
  CreateInboundExternalLinkCommand,
  CreateInboundExternalLinkRequest$,
  CreateInboundExternalLinkResponse$,
  CreateLink$,
  CreateLinkCommand,
  CreateLinkRequest$,
  CreateLinkResponse$,
  CreateOutboundExternalLink$,
  CreateOutboundExternalLinkCommand,
  CreateOutboundExternalLinkRequest$,
  CreateOutboundExternalLinkResponse$,
  CreateRequesterGateway$,
  CreateRequesterGatewayCommand,
  CreateRequesterGatewayRequest$,
  CreateRequesterGatewayResponse$,
  CreateResponderGateway$,
  CreateResponderGatewayCommand,
  CreateResponderGatewayRequest$,
  CreateResponderGatewayResponse$,
  DeleteInboundExternalLink$,
  DeleteInboundExternalLinkCommand,
  DeleteInboundExternalLinkRequest$,
  DeleteInboundExternalLinkResponse$,
  DeleteLink$,
  DeleteLinkCommand,
  DeleteLinkRequest$,
  DeleteLinkResponse$,
  DeleteOutboundExternalLink$,
  DeleteOutboundExternalLinkCommand,
  DeleteOutboundExternalLinkRequest$,
  DeleteOutboundExternalLinkResponse$,
  DeleteRequesterGateway$,
  DeleteRequesterGatewayCommand,
  DeleteRequesterGatewayRequest$,
  DeleteRequesterGatewayResponse$,
  DeleteResponderGateway$,
  DeleteResponderGatewayCommand,
  DeleteResponderGatewayRequest$,
  DeleteResponderGatewayResponse$,
  EksEndpointsConfiguration$,
  Filter$,
  FilterCriterion$,
  FilterType,
  GetInboundExternalLink$,
  GetInboundExternalLinkCommand,
  GetInboundExternalLinkRequest$,
  GetInboundExternalLinkResponse$,
  GetLink$,
  GetLinkCommand,
  GetLinkRequest$,
  GetLinkResponse$,
  GetOutboundExternalLink$,
  GetOutboundExternalLinkCommand,
  GetOutboundExternalLinkRequest$,
  GetOutboundExternalLinkResponse$,
  GetRequesterGateway$,
  GetRequesterGatewayCommand,
  GetRequesterGatewayRequest$,
  GetRequesterGatewayResponse$,
  GetResponderGateway$,
  GetResponderGatewayCommand,
  GetResponderGatewayRequest$,
  GetResponderGatewayResponse$,
  HeaderTagAction$,
  InternalServerException,
  InternalServerException$,
  LinkApplicationLogConfiguration$,
  LinkApplicationLogSampling$,
  LinkAttributes$,
  LinkDirection,
  LinkLogSettings$,
  LinkStatus,
  ListLinks$,
  ListLinksCommand,
  ListLinksRequest$,
  ListLinksResponse$,
  ListLinksResponseStructure$,
  ListRequesterGateways$,
  ListRequesterGatewaysCommand,
  ListRequesterGatewaysRequest$,
  ListRequesterGatewaysResponse$,
  ListResponderGateways$,
  ListResponderGatewaysCommand,
  ListResponderGatewaysRequest$,
  ListResponderGatewaysResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ManagedEndpointConfiguration$,
  ModuleConfiguration$,
  ModuleParameters$,
  NoBidAction$,
  NoBidModuleParameters$,
  OpenRtbAttributeModuleParameters$,
  paginateListLinks,
  paginateListRequesterGateways,
  paginateListResponderGateways,
  Protocol,
  RateLimiterModuleParameters$,
  RejectLink$,
  RejectLinkCommand,
  RejectLinkRequest$,
  RejectLinkResponse$,
  RequesterGatewayStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponderErrorMaskingAction,
  ResponderErrorMaskingForHttpCode$,
  ResponderErrorMaskingLoggingType,
  ResponderGatewayStatus,
  RTBFabric,
  RTBFabricClient,
  RTBFabricServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TrustStoreConfiguration$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateLink$,
  UpdateLinkCommand,
  UpdateLinkModuleFlow$,
  UpdateLinkModuleFlowCommand,
  UpdateLinkModuleFlowRequest$,
  UpdateLinkModuleFlowResponse$,
  UpdateLinkRequest$,
  UpdateLinkResponse$,
  UpdateRequesterGateway$,
  UpdateRequesterGatewayCommand,
  UpdateRequesterGatewayRequest$,
  UpdateRequesterGatewayResponse$,
  UpdateResponderGateway$,
  UpdateResponderGatewayCommand,
  UpdateResponderGatewayRequest$,
  UpdateResponderGatewayResponse$,
  ValidationException,
  ValidationException$,
  waitForInboundExternalLinkActive,
  waitForLinkAccepted,
  waitForLinkActive,
  waitForOutboundExternalLinkActive,
  waitForRequesterGatewayActive,
  waitForRequesterGatewayDeleted,
  waitForResponderGatewayActive,
  waitForResponderGatewayDeleted,
  waitUntilInboundExternalLinkActive,
  waitUntilLinkAccepted,
  waitUntilLinkActive,
  waitUntilOutboundExternalLinkActive,
  waitUntilRequesterGatewayActive,
  waitUntilRequesterGatewayDeleted,
  waitUntilResponderGatewayActive,
  waitUntilResponderGatewayDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof RTBFabricClient === "function");
assert(typeof RTBFabric === "function");
// commands
assert(typeof AcceptLinkCommand === "function");
assert(typeof AcceptLink$ === "object");
assert(typeof CreateInboundExternalLinkCommand === "function");
assert(typeof CreateInboundExternalLink$ === "object");
assert(typeof CreateLinkCommand === "function");
assert(typeof CreateLink$ === "object");
assert(typeof CreateOutboundExternalLinkCommand === "function");
assert(typeof CreateOutboundExternalLink$ === "object");
assert(typeof CreateRequesterGatewayCommand === "function");
assert(typeof CreateRequesterGateway$ === "object");
assert(typeof CreateResponderGatewayCommand === "function");
assert(typeof CreateResponderGateway$ === "object");
assert(typeof DeleteInboundExternalLinkCommand === "function");
assert(typeof DeleteInboundExternalLink$ === "object");
assert(typeof DeleteLinkCommand === "function");
assert(typeof DeleteLink$ === "object");
assert(typeof DeleteOutboundExternalLinkCommand === "function");
assert(typeof DeleteOutboundExternalLink$ === "object");
assert(typeof DeleteRequesterGatewayCommand === "function");
assert(typeof DeleteRequesterGateway$ === "object");
assert(typeof DeleteResponderGatewayCommand === "function");
assert(typeof DeleteResponderGateway$ === "object");
assert(typeof GetInboundExternalLinkCommand === "function");
assert(typeof GetInboundExternalLink$ === "object");
assert(typeof GetLinkCommand === "function");
assert(typeof GetLink$ === "object");
assert(typeof GetOutboundExternalLinkCommand === "function");
assert(typeof GetOutboundExternalLink$ === "object");
assert(typeof GetRequesterGatewayCommand === "function");
assert(typeof GetRequesterGateway$ === "object");
assert(typeof GetResponderGatewayCommand === "function");
assert(typeof GetResponderGateway$ === "object");
assert(typeof ListLinksCommand === "function");
assert(typeof ListLinks$ === "object");
assert(typeof ListRequesterGatewaysCommand === "function");
assert(typeof ListRequesterGateways$ === "object");
assert(typeof ListResponderGatewaysCommand === "function");
assert(typeof ListResponderGateways$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RejectLinkCommand === "function");
assert(typeof RejectLink$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateLinkCommand === "function");
assert(typeof UpdateLink$ === "object");
assert(typeof UpdateLinkModuleFlowCommand === "function");
assert(typeof UpdateLinkModuleFlow$ === "object");
assert(typeof UpdateRequesterGatewayCommand === "function");
assert(typeof UpdateRequesterGateway$ === "object");
assert(typeof UpdateResponderGatewayCommand === "function");
assert(typeof UpdateResponderGateway$ === "object");
// structural schemas
assert(typeof AcceptLinkRequest$ === "object");
assert(typeof AcceptLinkResponse$ === "object");
assert(typeof Action$ === "object");
assert(typeof AutoScalingGroupsConfiguration$ === "object");
assert(typeof CreateInboundExternalLinkRequest$ === "object");
assert(typeof CreateInboundExternalLinkResponse$ === "object");
assert(typeof CreateLinkRequest$ === "object");
assert(typeof CreateLinkResponse$ === "object");
assert(typeof CreateOutboundExternalLinkRequest$ === "object");
assert(typeof CreateOutboundExternalLinkResponse$ === "object");
assert(typeof CreateRequesterGatewayRequest$ === "object");
assert(typeof CreateRequesterGatewayResponse$ === "object");
assert(typeof CreateResponderGatewayRequest$ === "object");
assert(typeof CreateResponderGatewayResponse$ === "object");
assert(typeof DeleteInboundExternalLinkRequest$ === "object");
assert(typeof DeleteInboundExternalLinkResponse$ === "object");
assert(typeof DeleteLinkRequest$ === "object");
assert(typeof DeleteLinkResponse$ === "object");
assert(typeof DeleteOutboundExternalLinkRequest$ === "object");
assert(typeof DeleteOutboundExternalLinkResponse$ === "object");
assert(typeof DeleteRequesterGatewayRequest$ === "object");
assert(typeof DeleteRequesterGatewayResponse$ === "object");
assert(typeof DeleteResponderGatewayRequest$ === "object");
assert(typeof DeleteResponderGatewayResponse$ === "object");
assert(typeof EksEndpointsConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterCriterion$ === "object");
assert(typeof GetInboundExternalLinkRequest$ === "object");
assert(typeof GetInboundExternalLinkResponse$ === "object");
assert(typeof GetLinkRequest$ === "object");
assert(typeof GetLinkResponse$ === "object");
assert(typeof GetOutboundExternalLinkRequest$ === "object");
assert(typeof GetOutboundExternalLinkResponse$ === "object");
assert(typeof GetRequesterGatewayRequest$ === "object");
assert(typeof GetRequesterGatewayResponse$ === "object");
assert(typeof GetResponderGatewayRequest$ === "object");
assert(typeof GetResponderGatewayResponse$ === "object");
assert(typeof HeaderTagAction$ === "object");
assert(typeof LinkApplicationLogConfiguration$ === "object");
assert(typeof LinkApplicationLogSampling$ === "object");
assert(typeof LinkAttributes$ === "object");
assert(typeof LinkLogSettings$ === "object");
assert(typeof ListLinksRequest$ === "object");
assert(typeof ListLinksResponse$ === "object");
assert(typeof ListLinksResponseStructure$ === "object");
assert(typeof ListRequesterGatewaysRequest$ === "object");
assert(typeof ListRequesterGatewaysResponse$ === "object");
assert(typeof ListResponderGatewaysRequest$ === "object");
assert(typeof ListResponderGatewaysResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedEndpointConfiguration$ === "object");
assert(typeof ModuleConfiguration$ === "object");
assert(typeof ModuleParameters$ === "object");
assert(typeof NoBidAction$ === "object");
assert(typeof NoBidModuleParameters$ === "object");
assert(typeof OpenRtbAttributeModuleParameters$ === "object");
assert(typeof RateLimiterModuleParameters$ === "object");
assert(typeof RejectLinkRequest$ === "object");
assert(typeof RejectLinkResponse$ === "object");
assert(typeof ResponderErrorMaskingForHttpCode$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TrustStoreConfiguration$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateLinkModuleFlowRequest$ === "object");
assert(typeof UpdateLinkModuleFlowResponse$ === "object");
assert(typeof UpdateLinkRequest$ === "object");
assert(typeof UpdateLinkResponse$ === "object");
assert(typeof UpdateRequesterGatewayRequest$ === "object");
assert(typeof UpdateRequesterGatewayResponse$ === "object");
assert(typeof UpdateResponderGatewayRequest$ === "object");
assert(typeof UpdateResponderGatewayResponse$ === "object");
// enums
assert(typeof FilterType === "object");
assert(typeof LinkDirection === "object");
assert(typeof LinkStatus === "object");
assert(typeof Protocol === "object");
assert(typeof RequesterGatewayStatus === "object");
assert(typeof ResponderErrorMaskingAction === "object");
assert(typeof ResponderErrorMaskingLoggingType === "object");
assert(typeof ResponderGatewayStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof RTBFabricServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof RTBFabricServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof RTBFabricServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof RTBFabricServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof RTBFabricServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof RTBFabricServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof RTBFabricServiceException);
assert(typeof ValidationException$ === "object");
assert(RTBFabricServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForInboundExternalLinkActive === "function");
assert(typeof waitForLinkAccepted === "function");
assert(typeof waitForLinkActive === "function");
assert(typeof waitForOutboundExternalLinkActive === "function");
assert(typeof waitForRequesterGatewayActive === "function");
assert(typeof waitForRequesterGatewayDeleted === "function");
assert(typeof waitForResponderGatewayActive === "function");
assert(typeof waitForResponderGatewayDeleted === "function");
assert(typeof waitUntilInboundExternalLinkActive === "function");
assert(typeof waitUntilLinkAccepted === "function");
assert(typeof waitUntilLinkActive === "function");
assert(typeof waitUntilOutboundExternalLinkActive === "function");
assert(typeof waitUntilRequesterGatewayActive === "function");
assert(typeof waitUntilRequesterGatewayDeleted === "function");
assert(typeof waitUntilResponderGatewayActive === "function");
assert(typeof waitUntilResponderGatewayDeleted === "function");
// paginators
assert(typeof paginateListLinks === "function");
assert(typeof paginateListRequesterGateways === "function");
assert(typeof paginateListResponderGateways === "function");
console.log(`RTBFabric index test passed.`);
