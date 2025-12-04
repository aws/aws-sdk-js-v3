import {
  AppMesh,
  AppMeshClient,
  AppMeshServiceException,
  CreateGatewayRouteCommand,
  CreateMeshCommand,
  CreateRouteCommand,
  CreateVirtualGatewayCommand,
  CreateVirtualNodeCommand,
  CreateVirtualRouterCommand,
  CreateVirtualServiceCommand,
  DefaultGatewayRouteRewrite,
  DeleteGatewayRouteCommand,
  DeleteMeshCommand,
  DeleteRouteCommand,
  DeleteVirtualGatewayCommand,
  DeleteVirtualNodeCommand,
  DeleteVirtualRouterCommand,
  DeleteVirtualServiceCommand,
  DescribeGatewayRouteCommand,
  DescribeMeshCommand,
  DescribeRouteCommand,
  DescribeVirtualGatewayCommand,
  DescribeVirtualNodeCommand,
  DescribeVirtualRouterCommand,
  DescribeVirtualServiceCommand,
  DnsResponseType,
  DurationUnit,
  EgressFilterType,
  GatewayRouteStatusCode,
  GrpcRetryPolicyEvent,
  HttpMethod,
  HttpScheme,
  IpPreference,
  ListGatewayRoutesCommand,
  ListMeshesCommand,
  ListRoutesCommand,
  ListTagsForResourceCommand,
  ListVirtualGatewaysCommand,
  ListVirtualNodesCommand,
  ListVirtualRoutersCommand,
  ListVirtualServicesCommand,
  ListenerTlsMode,
  MeshStatusCode,
  PortProtocol,
  RouteStatusCode,
  TagResourceCommand,
  TcpRetryPolicyEvent,
  UntagResourceCommand,
  UpdateGatewayRouteCommand,
  UpdateMeshCommand,
  UpdateRouteCommand,
  UpdateVirtualGatewayCommand,
  UpdateVirtualNodeCommand,
  UpdateVirtualRouterCommand,
  UpdateVirtualServiceCommand,
  VirtualGatewayListenerTlsMode,
  VirtualGatewayPortProtocol,
  VirtualGatewayStatusCode,
  VirtualNodeStatusCode,
  VirtualRouterStatusCode,
  VirtualServiceStatusCode,
  paginateListGatewayRoutes,
  paginateListMeshes,
  paginateListRoutes,
  paginateListTagsForResource,
  paginateListVirtualGateways,
  paginateListVirtualNodes,
  paginateListVirtualRouters,
  paginateListVirtualServices,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppMeshClient === "function")
assert(typeof AppMesh === "function")
// commands
assert(typeof CreateGatewayRouteCommand === "function")
assert(typeof CreateMeshCommand === "function")
assert(typeof CreateRouteCommand === "function")
assert(typeof CreateVirtualGatewayCommand === "function")
assert(typeof CreateVirtualNodeCommand === "function")
assert(typeof CreateVirtualRouterCommand === "function")
assert(typeof CreateVirtualServiceCommand === "function")
assert(typeof DeleteGatewayRouteCommand === "function")
assert(typeof DeleteMeshCommand === "function")
assert(typeof DeleteRouteCommand === "function")
assert(typeof DeleteVirtualGatewayCommand === "function")
assert(typeof DeleteVirtualNodeCommand === "function")
assert(typeof DeleteVirtualRouterCommand === "function")
assert(typeof DeleteVirtualServiceCommand === "function")
assert(typeof DescribeGatewayRouteCommand === "function")
assert(typeof DescribeMeshCommand === "function")
assert(typeof DescribeRouteCommand === "function")
assert(typeof DescribeVirtualGatewayCommand === "function")
assert(typeof DescribeVirtualNodeCommand === "function")
assert(typeof DescribeVirtualRouterCommand === "function")
assert(typeof DescribeVirtualServiceCommand === "function")
assert(typeof ListGatewayRoutesCommand === "function")
assert(typeof ListMeshesCommand === "function")
assert(typeof ListRoutesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListVirtualGatewaysCommand === "function")
assert(typeof ListVirtualNodesCommand === "function")
assert(typeof ListVirtualRoutersCommand === "function")
assert(typeof ListVirtualServicesCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateGatewayRouteCommand === "function")
assert(typeof UpdateMeshCommand === "function")
assert(typeof UpdateRouteCommand === "function")
assert(typeof UpdateVirtualGatewayCommand === "function")
assert(typeof UpdateVirtualNodeCommand === "function")
assert(typeof UpdateVirtualRouterCommand === "function")
assert(typeof UpdateVirtualServiceCommand === "function")
// enums
assert(typeof DefaultGatewayRouteRewrite === "object");
assert(typeof DnsResponseType === "object");
assert(typeof DurationUnit === "object");
assert(typeof EgressFilterType === "object");
assert(typeof GatewayRouteStatusCode === "object");
assert(typeof GrpcRetryPolicyEvent === "object");
assert(typeof HttpMethod === "object");
assert(typeof HttpScheme === "object");
assert(typeof IpPreference === "object");
assert(typeof ListenerTlsMode === "object");
assert(typeof MeshStatusCode === "object");
assert(typeof PortProtocol === "object");
assert(typeof RouteStatusCode === "object");
assert(typeof TcpRetryPolicyEvent === "object");
assert(typeof VirtualGatewayListenerTlsMode === "object");
assert(typeof VirtualGatewayPortProtocol === "object");
assert(typeof VirtualGatewayStatusCode === "object");
assert(typeof VirtualNodeStatusCode === "object");
assert(typeof VirtualRouterStatusCode === "object");
assert(typeof VirtualServiceStatusCode === "object");
// errors
assert(AppMeshServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListGatewayRoutes === "function")
assert(typeof paginateListMeshes === "function")
assert(typeof paginateListRoutes === "function")
assert(typeof paginateListTagsForResource === "function")
assert(typeof paginateListVirtualGateways === "function")
assert(typeof paginateListVirtualNodes === "function")
assert(typeof paginateListVirtualRouters === "function")
assert(typeof paginateListVirtualServices === "function")
console.log(`AppMesh index test passed.`);
