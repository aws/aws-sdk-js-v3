import {
  AcceptLinkCommand,
  CreateInboundExternalLinkCommand,
  CreateLinkCommand,
  CreateOutboundExternalLinkCommand,
  CreateRequesterGatewayCommand,
  CreateResponderGatewayCommand,
  DeleteInboundExternalLinkCommand,
  DeleteLinkCommand,
  DeleteOutboundExternalLinkCommand,
  DeleteRequesterGatewayCommand,
  DeleteResponderGatewayCommand,
  FilterType,
  GetInboundExternalLinkCommand,
  GetLinkCommand,
  GetOutboundExternalLinkCommand,
  GetRequesterGatewayCommand,
  GetResponderGatewayCommand,
  LinkDirection,
  LinkStatus,
  ListLinksCommand,
  ListRequesterGatewaysCommand,
  ListResponderGatewaysCommand,
  ListTagsForResourceCommand,
  Protocol,
  RTBFabric,
  RTBFabricClient,
  RTBFabricServiceException,
  RejectLinkCommand,
  RequesterGatewayStatus,
  ResponderErrorMaskingAction,
  ResponderErrorMaskingLoggingType,
  ResponderGatewayStatus,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLinkCommand,
  UpdateLinkModuleFlowCommand,
  UpdateRequesterGatewayCommand,
  UpdateResponderGatewayCommand,
  paginateListLinks,
  paginateListRequesterGateways,
  paginateListResponderGateways,
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
assert(typeof CreateInboundExternalLinkCommand === "function");
assert(typeof CreateLinkCommand === "function");
assert(typeof CreateOutboundExternalLinkCommand === "function");
assert(typeof CreateRequesterGatewayCommand === "function");
assert(typeof CreateResponderGatewayCommand === "function");
assert(typeof DeleteInboundExternalLinkCommand === "function");
assert(typeof DeleteLinkCommand === "function");
assert(typeof DeleteOutboundExternalLinkCommand === "function");
assert(typeof DeleteRequesterGatewayCommand === "function");
assert(typeof DeleteResponderGatewayCommand === "function");
assert(typeof GetInboundExternalLinkCommand === "function");
assert(typeof GetLinkCommand === "function");
assert(typeof GetOutboundExternalLinkCommand === "function");
assert(typeof GetRequesterGatewayCommand === "function");
assert(typeof GetResponderGatewayCommand === "function");
assert(typeof ListLinksCommand === "function");
assert(typeof ListRequesterGatewaysCommand === "function");
assert(typeof ListResponderGatewaysCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RejectLinkCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateLinkCommand === "function");
assert(typeof UpdateLinkModuleFlowCommand === "function");
assert(typeof UpdateRequesterGatewayCommand === "function");
assert(typeof UpdateResponderGatewayCommand === "function");
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
