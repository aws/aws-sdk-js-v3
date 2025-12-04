import {
  AddBridgeOutputsCommand,
  AddBridgeSourcesCommand,
  AddFlowMediaStreamsCommand,
  AddFlowOutputsCommand,
  AddFlowSourcesCommand,
  AddFlowVpcInterfacesCommand,
  Algorithm,
  BatchGetRouterInputCommand,
  BatchGetRouterNetworkInterfaceCommand,
  BatchGetRouterOutputCommand,
  BridgePlacement,
  BridgeState,
  Colorimetry,
  ConnectionStatus,
  ContentQualityAnalysisState,
  CreateBridgeCommand,
  CreateFlowCommand,
  CreateGatewayCommand,
  CreateRouterInputCommand,
  CreateRouterNetworkInterfaceCommand,
  CreateRouterOutputCommand,
  Day,
  DeleteBridgeCommand,
  DeleteFlowCommand,
  DeleteGatewayCommand,
  DeleteRouterInputCommand,
  DeleteRouterNetworkInterfaceCommand,
  DeleteRouterOutputCommand,
  DeregisterGatewayInstanceCommand,
  DescribeBridgeCommand,
  DescribeFlowCommand,
  DescribeFlowSourceMetadataCommand,
  DescribeFlowSourceThumbnailCommand,
  DescribeGatewayCommand,
  DescribeGatewayInstanceCommand,
  DescribeOfferingCommand,
  DescribeReservationCommand,
  DesiredState,
  DurationUnits,
  EncoderProfile,
  EncodingName,
  EntitlementStatus,
  FailoverInputSourcePriorityMode,
  FailoverMode,
  FlowSize,
  FlowTransitEncryptionKeyType,
  ForwardErrorCorrectionState,
  GatewayState,
  GetRouterInputCommand,
  GetRouterInputSourceMetadataCommand,
  GetRouterInputThumbnailCommand,
  GetRouterNetworkInterfaceCommand,
  GetRouterOutputCommand,
  GrantFlowEntitlementsCommand,
  InstanceState,
  KeyType,
  ListBridgesCommand,
  ListEntitlementsCommand,
  ListFlowsCommand,
  ListGatewayInstancesCommand,
  ListGatewaysCommand,
  ListOfferingsCommand,
  ListReservationsCommand,
  ListRouterInputsCommand,
  ListRouterNetworkInterfacesCommand,
  ListRouterOutputsCommand,
  ListTagsForGlobalResourceCommand,
  ListTagsForResourceCommand,
  MaintenanceDay,
  MaintenanceScheduleType,
  MaintenanceType,
  MediaConnect,
  MediaConnectClient,
  MediaConnectServiceException,
  MediaLiveInputPipelineId,
  MediaLiveTransitEncryptionKeyType,
  MediaStreamType,
  NdiState,
  NetworkInterfaceType,
  OutputStatus,
  PriceUnits,
  Protocol,
  PurchaseOfferingCommand,
  Range,
  RemoveBridgeOutputCommand,
  RemoveBridgeSourceCommand,
  RemoveFlowMediaStreamCommand,
  RemoveFlowOutputCommand,
  RemoveFlowSourceCommand,
  RemoveFlowVpcInterfaceCommand,
  ReservationState,
  ResourceType,
  RestartRouterInputCommand,
  RestartRouterOutputCommand,
  RevokeFlowEntitlementCommand,
  RouterInputProtocol,
  RouterInputState,
  RouterInputTier,
  RouterInputTransitEncryptionKeyType,
  RouterInputType,
  RouterNetworkInterfaceState,
  RouterNetworkInterfaceType,
  RouterOutputProtocol,
  RouterOutputRoutedState,
  RouterOutputState,
  RouterOutputTier,
  RouterOutputType,
  RoutingScope,
  ScanMode,
  SourceType,
  StartFlowCommand,
  StartRouterInputCommand,
  StartRouterOutputCommand,
  State,
  Status,
  StopFlowCommand,
  StopRouterInputCommand,
  StopRouterOutputCommand,
  TagGlobalResourceCommand,
  TagResourceCommand,
  TakeRouterInputCommand,
  Tcs,
  ThumbnailState,
  UntagGlobalResourceCommand,
  UntagResourceCommand,
  UpdateBridgeCommand,
  UpdateBridgeOutputCommand,
  UpdateBridgeSourceCommand,
  UpdateBridgeStateCommand,
  UpdateFlowCommand,
  UpdateFlowEntitlementCommand,
  UpdateFlowMediaStreamCommand,
  UpdateFlowOutputCommand,
  UpdateFlowSourceCommand,
  UpdateGatewayInstanceCommand,
  UpdateRouterInputCommand,
  UpdateRouterNetworkInterfaceCommand,
  UpdateRouterOutputCommand,
  paginateListBridges,
  paginateListEntitlements,
  paginateListFlows,
  paginateListGatewayInstances,
  paginateListGateways,
  paginateListOfferings,
  paginateListReservations,
  paginateListRouterInputs,
  paginateListRouterNetworkInterfaces,
  paginateListRouterOutputs,
  waitForFlowActive,
  waitForFlowDeleted,
  waitForFlowStandby,
  waitForInputActive,
  waitForInputDeleted,
  waitForInputStandby,
  waitForOutputActive,
  waitForOutputDeleted,
  waitForOutputRouted,
  waitForOutputStandby,
  waitUntilFlowActive,
  waitUntilFlowDeleted,
  waitUntilFlowStandby,
  waitUntilInputActive,
  waitUntilInputDeleted,
  waitUntilInputStandby,
  waitUntilOutputActive,
  waitUntilOutputDeleted,
  waitUntilOutputRouted,
  waitUntilOutputStandby,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaConnectClient === "function")
assert(typeof MediaConnect === "function")
// commands
assert(typeof AddBridgeOutputsCommand === "function")
assert(typeof AddBridgeSourcesCommand === "function")
assert(typeof AddFlowMediaStreamsCommand === "function")
assert(typeof AddFlowOutputsCommand === "function")
assert(typeof AddFlowSourcesCommand === "function")
assert(typeof AddFlowVpcInterfacesCommand === "function")
assert(typeof BatchGetRouterInputCommand === "function")
assert(typeof BatchGetRouterNetworkInterfaceCommand === "function")
assert(typeof BatchGetRouterOutputCommand === "function")
assert(typeof CreateBridgeCommand === "function")
assert(typeof CreateFlowCommand === "function")
assert(typeof CreateGatewayCommand === "function")
assert(typeof CreateRouterInputCommand === "function")
assert(typeof CreateRouterNetworkInterfaceCommand === "function")
assert(typeof CreateRouterOutputCommand === "function")
assert(typeof DeleteBridgeCommand === "function")
assert(typeof DeleteFlowCommand === "function")
assert(typeof DeleteGatewayCommand === "function")
assert(typeof DeleteRouterInputCommand === "function")
assert(typeof DeleteRouterNetworkInterfaceCommand === "function")
assert(typeof DeleteRouterOutputCommand === "function")
assert(typeof DeregisterGatewayInstanceCommand === "function")
assert(typeof DescribeBridgeCommand === "function")
assert(typeof DescribeFlowCommand === "function")
assert(typeof DescribeFlowSourceMetadataCommand === "function")
assert(typeof DescribeFlowSourceThumbnailCommand === "function")
assert(typeof DescribeGatewayCommand === "function")
assert(typeof DescribeGatewayInstanceCommand === "function")
assert(typeof DescribeOfferingCommand === "function")
assert(typeof DescribeReservationCommand === "function")
assert(typeof GetRouterInputCommand === "function")
assert(typeof GetRouterInputSourceMetadataCommand === "function")
assert(typeof GetRouterInputThumbnailCommand === "function")
assert(typeof GetRouterNetworkInterfaceCommand === "function")
assert(typeof GetRouterOutputCommand === "function")
assert(typeof GrantFlowEntitlementsCommand === "function")
assert(typeof ListBridgesCommand === "function")
assert(typeof ListEntitlementsCommand === "function")
assert(typeof ListFlowsCommand === "function")
assert(typeof ListGatewayInstancesCommand === "function")
assert(typeof ListGatewaysCommand === "function")
assert(typeof ListOfferingsCommand === "function")
assert(typeof ListReservationsCommand === "function")
assert(typeof ListRouterInputsCommand === "function")
assert(typeof ListRouterNetworkInterfacesCommand === "function")
assert(typeof ListRouterOutputsCommand === "function")
assert(typeof ListTagsForGlobalResourceCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PurchaseOfferingCommand === "function")
assert(typeof RemoveBridgeOutputCommand === "function")
assert(typeof RemoveBridgeSourceCommand === "function")
assert(typeof RemoveFlowMediaStreamCommand === "function")
assert(typeof RemoveFlowOutputCommand === "function")
assert(typeof RemoveFlowSourceCommand === "function")
assert(typeof RemoveFlowVpcInterfaceCommand === "function")
assert(typeof RestartRouterInputCommand === "function")
assert(typeof RestartRouterOutputCommand === "function")
assert(typeof RevokeFlowEntitlementCommand === "function")
assert(typeof StartFlowCommand === "function")
assert(typeof StartRouterInputCommand === "function")
assert(typeof StartRouterOutputCommand === "function")
assert(typeof StopFlowCommand === "function")
assert(typeof StopRouterInputCommand === "function")
assert(typeof StopRouterOutputCommand === "function")
assert(typeof TagGlobalResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof TakeRouterInputCommand === "function")
assert(typeof UntagGlobalResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateBridgeCommand === "function")
assert(typeof UpdateBridgeOutputCommand === "function")
assert(typeof UpdateBridgeSourceCommand === "function")
assert(typeof UpdateBridgeStateCommand === "function")
assert(typeof UpdateFlowCommand === "function")
assert(typeof UpdateFlowEntitlementCommand === "function")
assert(typeof UpdateFlowMediaStreamCommand === "function")
assert(typeof UpdateFlowOutputCommand === "function")
assert(typeof UpdateFlowSourceCommand === "function")
assert(typeof UpdateGatewayInstanceCommand === "function")
assert(typeof UpdateRouterInputCommand === "function")
assert(typeof UpdateRouterNetworkInterfaceCommand === "function")
assert(typeof UpdateRouterOutputCommand === "function")
// enums
assert(typeof Algorithm === "object");
assert(typeof BridgePlacement === "object");
assert(typeof BridgeState === "object");
assert(typeof Colorimetry === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof ContentQualityAnalysisState === "object");
assert(typeof Day === "object");
assert(typeof DesiredState === "object");
assert(typeof DurationUnits === "object");
assert(typeof EncoderProfile === "object");
assert(typeof EncodingName === "object");
assert(typeof EntitlementStatus === "object");
assert(typeof FailoverInputSourcePriorityMode === "object");
assert(typeof FailoverMode === "object");
assert(typeof FlowSize === "object");
assert(typeof FlowTransitEncryptionKeyType === "object");
assert(typeof ForwardErrorCorrectionState === "object");
assert(typeof GatewayState === "object");
assert(typeof InstanceState === "object");
assert(typeof KeyType === "object");
assert(typeof MaintenanceDay === "object");
assert(typeof MaintenanceScheduleType === "object");
assert(typeof MaintenanceType === "object");
assert(typeof MediaLiveInputPipelineId === "object");
assert(typeof MediaLiveTransitEncryptionKeyType === "object");
assert(typeof MediaStreamType === "object");
assert(typeof NdiState === "object");
assert(typeof NetworkInterfaceType === "object");
assert(typeof OutputStatus === "object");
assert(typeof PriceUnits === "object");
assert(typeof Protocol === "object");
assert(typeof Range === "object");
assert(typeof ReservationState === "object");
assert(typeof ResourceType === "object");
assert(typeof RouterInputProtocol === "object");
assert(typeof RouterInputState === "object");
assert(typeof RouterInputTier === "object");
assert(typeof RouterInputTransitEncryptionKeyType === "object");
assert(typeof RouterInputType === "object");
assert(typeof RouterNetworkInterfaceState === "object");
assert(typeof RouterNetworkInterfaceType === "object");
assert(typeof RouterOutputProtocol === "object");
assert(typeof RouterOutputRoutedState === "object");
assert(typeof RouterOutputState === "object");
assert(typeof RouterOutputTier === "object");
assert(typeof RouterOutputType === "object");
assert(typeof RoutingScope === "object");
assert(typeof ScanMode === "object");
assert(typeof SourceType === "object");
assert(typeof State === "object");
assert(typeof Status === "object");
assert(typeof Tcs === "object");
assert(typeof ThumbnailState === "object");
// errors
assert(MediaConnectServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForFlowActive === "function")
assert(typeof waitForFlowDeleted === "function")
assert(typeof waitForFlowStandby === "function")
assert(typeof waitForInputActive === "function")
assert(typeof waitForInputDeleted === "function")
assert(typeof waitForInputStandby === "function")
assert(typeof waitForOutputActive === "function")
assert(typeof waitForOutputDeleted === "function")
assert(typeof waitForOutputRouted === "function")
assert(typeof waitForOutputStandby === "function")
assert(typeof waitUntilFlowActive === "function")
assert(typeof waitUntilFlowDeleted === "function")
assert(typeof waitUntilFlowStandby === "function")
assert(typeof waitUntilInputActive === "function")
assert(typeof waitUntilInputDeleted === "function")
assert(typeof waitUntilInputStandby === "function")
assert(typeof waitUntilOutputActive === "function")
assert(typeof waitUntilOutputDeleted === "function")
assert(typeof waitUntilOutputRouted === "function")
assert(typeof waitUntilOutputStandby === "function")
// paginators
assert(typeof paginateListBridges === "function")
assert(typeof paginateListEntitlements === "function")
assert(typeof paginateListFlows === "function")
assert(typeof paginateListGatewayInstances === "function")
assert(typeof paginateListGateways === "function")
assert(typeof paginateListOfferings === "function")
assert(typeof paginateListReservations === "function")
assert(typeof paginateListRouterInputs === "function")
assert(typeof paginateListRouterNetworkInterfaces === "function")
assert(typeof paginateListRouterOutputs === "function")
console.log(`MediaConnect index test passed.`);
