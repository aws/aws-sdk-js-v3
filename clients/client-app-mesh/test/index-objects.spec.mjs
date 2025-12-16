import {
  AccessLog$,
  AppMesh,
  AppMeshClient,
  AppMeshServiceException,
  AwsCloudMapInstanceAttribute$,
  AwsCloudMapServiceDiscovery$,
  Backend$,
  BackendDefaults$,
  BadRequestException,
  BadRequestException$,
  ClientPolicy$,
  ClientPolicyTls$,
  ClientTlsCertificate$,
  ConflictException,
  ConflictException$,
  CreateGatewayRoute$,
  CreateGatewayRouteCommand,
  CreateGatewayRouteInput$,
  CreateGatewayRouteOutput$,
  CreateMesh$,
  CreateMeshCommand,
  CreateMeshInput$,
  CreateMeshOutput$,
  CreateRoute$,
  CreateRouteCommand,
  CreateRouteInput$,
  CreateRouteOutput$,
  CreateVirtualGateway$,
  CreateVirtualGatewayCommand,
  CreateVirtualGatewayInput$,
  CreateVirtualGatewayOutput$,
  CreateVirtualNode$,
  CreateVirtualNodeCommand,
  CreateVirtualNodeInput$,
  CreateVirtualNodeOutput$,
  CreateVirtualRouter$,
  CreateVirtualRouterCommand,
  CreateVirtualRouterInput$,
  CreateVirtualRouterOutput$,
  CreateVirtualService$,
  CreateVirtualServiceCommand,
  CreateVirtualServiceInput$,
  CreateVirtualServiceOutput$,
  DefaultGatewayRouteRewrite,
  DeleteGatewayRoute$,
  DeleteGatewayRouteCommand,
  DeleteGatewayRouteInput$,
  DeleteGatewayRouteOutput$,
  DeleteMesh$,
  DeleteMeshCommand,
  DeleteMeshInput$,
  DeleteMeshOutput$,
  DeleteRoute$,
  DeleteRouteCommand,
  DeleteRouteInput$,
  DeleteRouteOutput$,
  DeleteVirtualGateway$,
  DeleteVirtualGatewayCommand,
  DeleteVirtualGatewayInput$,
  DeleteVirtualGatewayOutput$,
  DeleteVirtualNode$,
  DeleteVirtualNodeCommand,
  DeleteVirtualNodeInput$,
  DeleteVirtualNodeOutput$,
  DeleteVirtualRouter$,
  DeleteVirtualRouterCommand,
  DeleteVirtualRouterInput$,
  DeleteVirtualRouterOutput$,
  DeleteVirtualService$,
  DeleteVirtualServiceCommand,
  DeleteVirtualServiceInput$,
  DeleteVirtualServiceOutput$,
  DescribeGatewayRoute$,
  DescribeGatewayRouteCommand,
  DescribeGatewayRouteInput$,
  DescribeGatewayRouteOutput$,
  DescribeMesh$,
  DescribeMeshCommand,
  DescribeMeshInput$,
  DescribeMeshOutput$,
  DescribeRoute$,
  DescribeRouteCommand,
  DescribeRouteInput$,
  DescribeRouteOutput$,
  DescribeVirtualGateway$,
  DescribeVirtualGatewayCommand,
  DescribeVirtualGatewayInput$,
  DescribeVirtualGatewayOutput$,
  DescribeVirtualNode$,
  DescribeVirtualNodeCommand,
  DescribeVirtualNodeInput$,
  DescribeVirtualNodeOutput$,
  DescribeVirtualRouter$,
  DescribeVirtualRouterCommand,
  DescribeVirtualRouterInput$,
  DescribeVirtualRouterOutput$,
  DescribeVirtualService$,
  DescribeVirtualServiceCommand,
  DescribeVirtualServiceInput$,
  DescribeVirtualServiceOutput$,
  DnsResponseType,
  DnsServiceDiscovery$,
  Duration$,
  DurationUnit,
  EgressFilter$,
  EgressFilterType,
  FileAccessLog$,
  ForbiddenException,
  ForbiddenException$,
  GatewayRouteData$,
  GatewayRouteHostnameMatch$,
  GatewayRouteHostnameRewrite$,
  GatewayRouteRef$,
  GatewayRouteSpec$,
  GatewayRouteStatus$,
  GatewayRouteStatusCode,
  GatewayRouteTarget$,
  GatewayRouteVirtualService$,
  GrpcGatewayRoute$,
  GrpcGatewayRouteAction$,
  GrpcGatewayRouteMatch$,
  GrpcGatewayRouteMetadata$,
  GrpcGatewayRouteRewrite$,
  GrpcMetadataMatchMethod$,
  GrpcRetryPolicy$,
  GrpcRetryPolicyEvent,
  GrpcRoute$,
  GrpcRouteAction$,
  GrpcRouteMatch$,
  GrpcRouteMetadata$,
  GrpcRouteMetadataMatchMethod$,
  GrpcTimeout$,
  HeaderMatchMethod$,
  HealthCheckPolicy$,
  HttpGatewayRoute$,
  HttpGatewayRouteAction$,
  HttpGatewayRouteHeader$,
  HttpGatewayRouteMatch$,
  HttpGatewayRoutePathRewrite$,
  HttpGatewayRoutePrefixRewrite$,
  HttpGatewayRouteRewrite$,
  HttpMethod,
  HttpPathMatch$,
  HttpQueryParameter$,
  HttpRetryPolicy$,
  HttpRoute$,
  HttpRouteAction$,
  HttpRouteHeader$,
  HttpRouteMatch$,
  HttpScheme,
  HttpTimeout$,
  InternalServerErrorException,
  InternalServerErrorException$,
  IpPreference,
  JsonFormatRef$,
  LimitExceededException,
  LimitExceededException$,
  ListGatewayRoutes$,
  ListGatewayRoutesCommand,
  ListGatewayRoutesInput$,
  ListGatewayRoutesOutput$,
  ListMeshes$,
  ListMeshesCommand,
  ListMeshesInput$,
  ListMeshesOutput$,
  ListRoutes$,
  ListRoutesCommand,
  ListRoutesInput$,
  ListRoutesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListVirtualGateways$,
  ListVirtualGatewaysCommand,
  ListVirtualGatewaysInput$,
  ListVirtualGatewaysOutput$,
  ListVirtualNodes$,
  ListVirtualNodesCommand,
  ListVirtualNodesInput$,
  ListVirtualNodesOutput$,
  ListVirtualRouters$,
  ListVirtualRoutersCommand,
  ListVirtualRoutersInput$,
  ListVirtualRoutersOutput$,
  ListVirtualServices$,
  ListVirtualServicesCommand,
  ListVirtualServicesInput$,
  ListVirtualServicesOutput$,
  Listener$,
  ListenerTimeout$,
  ListenerTls$,
  ListenerTlsAcmCertificate$,
  ListenerTlsCertificate$,
  ListenerTlsFileCertificate$,
  ListenerTlsMode,
  ListenerTlsSdsCertificate$,
  ListenerTlsValidationContext$,
  ListenerTlsValidationContextTrust$,
  Logging$,
  LoggingFormat$,
  MatchRange$,
  MeshData$,
  MeshRef$,
  MeshServiceDiscovery$,
  MeshSpec$,
  MeshStatus$,
  MeshStatusCode,
  NotFoundException,
  NotFoundException$,
  OutlierDetection$,
  PortMapping$,
  PortProtocol,
  QueryParameterMatch$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceMetadata$,
  RouteData$,
  RouteRef$,
  RouteSpec$,
  RouteStatus$,
  RouteStatusCode,
  ServiceDiscovery$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SubjectAlternativeNameMatchers$,
  SubjectAlternativeNames$,
  TagRef$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TcpRetryPolicyEvent,
  TcpRoute$,
  TcpRouteAction$,
  TcpRouteMatch$,
  TcpTimeout$,
  TlsValidationContext$,
  TlsValidationContextAcmTrust$,
  TlsValidationContextFileTrust$,
  TlsValidationContextSdsTrust$,
  TlsValidationContextTrust$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateGatewayRoute$,
  UpdateGatewayRouteCommand,
  UpdateGatewayRouteInput$,
  UpdateGatewayRouteOutput$,
  UpdateMesh$,
  UpdateMeshCommand,
  UpdateMeshInput$,
  UpdateMeshOutput$,
  UpdateRoute$,
  UpdateRouteCommand,
  UpdateRouteInput$,
  UpdateRouteOutput$,
  UpdateVirtualGateway$,
  UpdateVirtualGatewayCommand,
  UpdateVirtualGatewayInput$,
  UpdateVirtualGatewayOutput$,
  UpdateVirtualNode$,
  UpdateVirtualNodeCommand,
  UpdateVirtualNodeInput$,
  UpdateVirtualNodeOutput$,
  UpdateVirtualRouter$,
  UpdateVirtualRouterCommand,
  UpdateVirtualRouterInput$,
  UpdateVirtualRouterOutput$,
  UpdateVirtualService$,
  UpdateVirtualServiceCommand,
  UpdateVirtualServiceInput$,
  UpdateVirtualServiceOutput$,
  VirtualGatewayAccessLog$,
  VirtualGatewayBackendDefaults$,
  VirtualGatewayClientPolicy$,
  VirtualGatewayClientPolicyTls$,
  VirtualGatewayClientTlsCertificate$,
  VirtualGatewayConnectionPool$,
  VirtualGatewayData$,
  VirtualGatewayFileAccessLog$,
  VirtualGatewayGrpcConnectionPool$,
  VirtualGatewayHealthCheckPolicy$,
  VirtualGatewayHttp2ConnectionPool$,
  VirtualGatewayHttpConnectionPool$,
  VirtualGatewayListener$,
  VirtualGatewayListenerTls$,
  VirtualGatewayListenerTlsAcmCertificate$,
  VirtualGatewayListenerTlsCertificate$,
  VirtualGatewayListenerTlsFileCertificate$,
  VirtualGatewayListenerTlsMode,
  VirtualGatewayListenerTlsSdsCertificate$,
  VirtualGatewayListenerTlsValidationContext$,
  VirtualGatewayListenerTlsValidationContextTrust$,
  VirtualGatewayLogging$,
  VirtualGatewayPortMapping$,
  VirtualGatewayPortProtocol,
  VirtualGatewayRef$,
  VirtualGatewaySpec$,
  VirtualGatewayStatus$,
  VirtualGatewayStatusCode,
  VirtualGatewayTlsValidationContext$,
  VirtualGatewayTlsValidationContextAcmTrust$,
  VirtualGatewayTlsValidationContextFileTrust$,
  VirtualGatewayTlsValidationContextSdsTrust$,
  VirtualGatewayTlsValidationContextTrust$,
  VirtualNodeConnectionPool$,
  VirtualNodeData$,
  VirtualNodeGrpcConnectionPool$,
  VirtualNodeHttp2ConnectionPool$,
  VirtualNodeHttpConnectionPool$,
  VirtualNodeRef$,
  VirtualNodeServiceProvider$,
  VirtualNodeSpec$,
  VirtualNodeStatus$,
  VirtualNodeStatusCode,
  VirtualNodeTcpConnectionPool$,
  VirtualRouterData$,
  VirtualRouterListener$,
  VirtualRouterRef$,
  VirtualRouterServiceProvider$,
  VirtualRouterSpec$,
  VirtualRouterStatus$,
  VirtualRouterStatusCode,
  VirtualServiceBackend$,
  VirtualServiceData$,
  VirtualServiceProvider$,
  VirtualServiceRef$,
  VirtualServiceSpec$,
  VirtualServiceStatus$,
  VirtualServiceStatusCode,
  WeightedTarget$,
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
assert(typeof AppMeshClient === "function");
assert(typeof AppMesh === "function");
// commands
assert(typeof CreateGatewayRouteCommand === "function");
assert(typeof CreateGatewayRoute$ === "object");
assert(typeof CreateMeshCommand === "function");
assert(typeof CreateMesh$ === "object");
assert(typeof CreateRouteCommand === "function");
assert(typeof CreateRoute$ === "object");
assert(typeof CreateVirtualGatewayCommand === "function");
assert(typeof CreateVirtualGateway$ === "object");
assert(typeof CreateVirtualNodeCommand === "function");
assert(typeof CreateVirtualNode$ === "object");
assert(typeof CreateVirtualRouterCommand === "function");
assert(typeof CreateVirtualRouter$ === "object");
assert(typeof CreateVirtualServiceCommand === "function");
assert(typeof CreateVirtualService$ === "object");
assert(typeof DeleteGatewayRouteCommand === "function");
assert(typeof DeleteGatewayRoute$ === "object");
assert(typeof DeleteMeshCommand === "function");
assert(typeof DeleteMesh$ === "object");
assert(typeof DeleteRouteCommand === "function");
assert(typeof DeleteRoute$ === "object");
assert(typeof DeleteVirtualGatewayCommand === "function");
assert(typeof DeleteVirtualGateway$ === "object");
assert(typeof DeleteVirtualNodeCommand === "function");
assert(typeof DeleteVirtualNode$ === "object");
assert(typeof DeleteVirtualRouterCommand === "function");
assert(typeof DeleteVirtualRouter$ === "object");
assert(typeof DeleteVirtualServiceCommand === "function");
assert(typeof DeleteVirtualService$ === "object");
assert(typeof DescribeGatewayRouteCommand === "function");
assert(typeof DescribeGatewayRoute$ === "object");
assert(typeof DescribeMeshCommand === "function");
assert(typeof DescribeMesh$ === "object");
assert(typeof DescribeRouteCommand === "function");
assert(typeof DescribeRoute$ === "object");
assert(typeof DescribeVirtualGatewayCommand === "function");
assert(typeof DescribeVirtualGateway$ === "object");
assert(typeof DescribeVirtualNodeCommand === "function");
assert(typeof DescribeVirtualNode$ === "object");
assert(typeof DescribeVirtualRouterCommand === "function");
assert(typeof DescribeVirtualRouter$ === "object");
assert(typeof DescribeVirtualServiceCommand === "function");
assert(typeof DescribeVirtualService$ === "object");
assert(typeof ListGatewayRoutesCommand === "function");
assert(typeof ListGatewayRoutes$ === "object");
assert(typeof ListMeshesCommand === "function");
assert(typeof ListMeshes$ === "object");
assert(typeof ListRoutesCommand === "function");
assert(typeof ListRoutes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVirtualGatewaysCommand === "function");
assert(typeof ListVirtualGateways$ === "object");
assert(typeof ListVirtualNodesCommand === "function");
assert(typeof ListVirtualNodes$ === "object");
assert(typeof ListVirtualRoutersCommand === "function");
assert(typeof ListVirtualRouters$ === "object");
assert(typeof ListVirtualServicesCommand === "function");
assert(typeof ListVirtualServices$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateGatewayRouteCommand === "function");
assert(typeof UpdateGatewayRoute$ === "object");
assert(typeof UpdateMeshCommand === "function");
assert(typeof UpdateMesh$ === "object");
assert(typeof UpdateRouteCommand === "function");
assert(typeof UpdateRoute$ === "object");
assert(typeof UpdateVirtualGatewayCommand === "function");
assert(typeof UpdateVirtualGateway$ === "object");
assert(typeof UpdateVirtualNodeCommand === "function");
assert(typeof UpdateVirtualNode$ === "object");
assert(typeof UpdateVirtualRouterCommand === "function");
assert(typeof UpdateVirtualRouter$ === "object");
assert(typeof UpdateVirtualServiceCommand === "function");
assert(typeof UpdateVirtualService$ === "object");
// structural schemas
assert(typeof AccessLog$ === "object");
assert(typeof AwsCloudMapInstanceAttribute$ === "object");
assert(typeof AwsCloudMapServiceDiscovery$ === "object");
assert(typeof Backend$ === "object");
assert(typeof BackendDefaults$ === "object");
assert(typeof ClientPolicy$ === "object");
assert(typeof ClientPolicyTls$ === "object");
assert(typeof ClientTlsCertificate$ === "object");
assert(typeof CreateGatewayRouteInput$ === "object");
assert(typeof CreateGatewayRouteOutput$ === "object");
assert(typeof CreateMeshInput$ === "object");
assert(typeof CreateMeshOutput$ === "object");
assert(typeof CreateRouteInput$ === "object");
assert(typeof CreateRouteOutput$ === "object");
assert(typeof CreateVirtualGatewayInput$ === "object");
assert(typeof CreateVirtualGatewayOutput$ === "object");
assert(typeof CreateVirtualNodeInput$ === "object");
assert(typeof CreateVirtualNodeOutput$ === "object");
assert(typeof CreateVirtualRouterInput$ === "object");
assert(typeof CreateVirtualRouterOutput$ === "object");
assert(typeof CreateVirtualServiceInput$ === "object");
assert(typeof CreateVirtualServiceOutput$ === "object");
assert(typeof DeleteGatewayRouteInput$ === "object");
assert(typeof DeleteGatewayRouteOutput$ === "object");
assert(typeof DeleteMeshInput$ === "object");
assert(typeof DeleteMeshOutput$ === "object");
assert(typeof DeleteRouteInput$ === "object");
assert(typeof DeleteRouteOutput$ === "object");
assert(typeof DeleteVirtualGatewayInput$ === "object");
assert(typeof DeleteVirtualGatewayOutput$ === "object");
assert(typeof DeleteVirtualNodeInput$ === "object");
assert(typeof DeleteVirtualNodeOutput$ === "object");
assert(typeof DeleteVirtualRouterInput$ === "object");
assert(typeof DeleteVirtualRouterOutput$ === "object");
assert(typeof DeleteVirtualServiceInput$ === "object");
assert(typeof DeleteVirtualServiceOutput$ === "object");
assert(typeof DescribeGatewayRouteInput$ === "object");
assert(typeof DescribeGatewayRouteOutput$ === "object");
assert(typeof DescribeMeshInput$ === "object");
assert(typeof DescribeMeshOutput$ === "object");
assert(typeof DescribeRouteInput$ === "object");
assert(typeof DescribeRouteOutput$ === "object");
assert(typeof DescribeVirtualGatewayInput$ === "object");
assert(typeof DescribeVirtualGatewayOutput$ === "object");
assert(typeof DescribeVirtualNodeInput$ === "object");
assert(typeof DescribeVirtualNodeOutput$ === "object");
assert(typeof DescribeVirtualRouterInput$ === "object");
assert(typeof DescribeVirtualRouterOutput$ === "object");
assert(typeof DescribeVirtualServiceInput$ === "object");
assert(typeof DescribeVirtualServiceOutput$ === "object");
assert(typeof DnsServiceDiscovery$ === "object");
assert(typeof Duration$ === "object");
assert(typeof EgressFilter$ === "object");
assert(typeof FileAccessLog$ === "object");
assert(typeof GatewayRouteData$ === "object");
assert(typeof GatewayRouteHostnameMatch$ === "object");
assert(typeof GatewayRouteHostnameRewrite$ === "object");
assert(typeof GatewayRouteRef$ === "object");
assert(typeof GatewayRouteSpec$ === "object");
assert(typeof GatewayRouteStatus$ === "object");
assert(typeof GatewayRouteTarget$ === "object");
assert(typeof GatewayRouteVirtualService$ === "object");
assert(typeof GrpcGatewayRoute$ === "object");
assert(typeof GrpcGatewayRouteAction$ === "object");
assert(typeof GrpcGatewayRouteMatch$ === "object");
assert(typeof GrpcGatewayRouteMetadata$ === "object");
assert(typeof GrpcGatewayRouteRewrite$ === "object");
assert(typeof GrpcMetadataMatchMethod$ === "object");
assert(typeof GrpcRetryPolicy$ === "object");
assert(typeof GrpcRoute$ === "object");
assert(typeof GrpcRouteAction$ === "object");
assert(typeof GrpcRouteMatch$ === "object");
assert(typeof GrpcRouteMetadata$ === "object");
assert(typeof GrpcRouteMetadataMatchMethod$ === "object");
assert(typeof GrpcTimeout$ === "object");
assert(typeof HeaderMatchMethod$ === "object");
assert(typeof HealthCheckPolicy$ === "object");
assert(typeof HttpGatewayRoute$ === "object");
assert(typeof HttpGatewayRouteAction$ === "object");
assert(typeof HttpGatewayRouteHeader$ === "object");
assert(typeof HttpGatewayRouteMatch$ === "object");
assert(typeof HttpGatewayRoutePathRewrite$ === "object");
assert(typeof HttpGatewayRoutePrefixRewrite$ === "object");
assert(typeof HttpGatewayRouteRewrite$ === "object");
assert(typeof HttpPathMatch$ === "object");
assert(typeof HttpQueryParameter$ === "object");
assert(typeof HttpRetryPolicy$ === "object");
assert(typeof HttpRoute$ === "object");
assert(typeof HttpRouteAction$ === "object");
assert(typeof HttpRouteHeader$ === "object");
assert(typeof HttpRouteMatch$ === "object");
assert(typeof HttpTimeout$ === "object");
assert(typeof JsonFormatRef$ === "object");
assert(typeof Listener$ === "object");
assert(typeof ListenerTimeout$ === "object");
assert(typeof ListenerTls$ === "object");
assert(typeof ListenerTlsAcmCertificate$ === "object");
assert(typeof ListenerTlsCertificate$ === "object");
assert(typeof ListenerTlsFileCertificate$ === "object");
assert(typeof ListenerTlsSdsCertificate$ === "object");
assert(typeof ListenerTlsValidationContext$ === "object");
assert(typeof ListenerTlsValidationContextTrust$ === "object");
assert(typeof ListGatewayRoutesInput$ === "object");
assert(typeof ListGatewayRoutesOutput$ === "object");
assert(typeof ListMeshesInput$ === "object");
assert(typeof ListMeshesOutput$ === "object");
assert(typeof ListRoutesInput$ === "object");
assert(typeof ListRoutesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListVirtualGatewaysInput$ === "object");
assert(typeof ListVirtualGatewaysOutput$ === "object");
assert(typeof ListVirtualNodesInput$ === "object");
assert(typeof ListVirtualNodesOutput$ === "object");
assert(typeof ListVirtualRoutersInput$ === "object");
assert(typeof ListVirtualRoutersOutput$ === "object");
assert(typeof ListVirtualServicesInput$ === "object");
assert(typeof ListVirtualServicesOutput$ === "object");
assert(typeof Logging$ === "object");
assert(typeof LoggingFormat$ === "object");
assert(typeof MatchRange$ === "object");
assert(typeof MeshData$ === "object");
assert(typeof MeshRef$ === "object");
assert(typeof MeshServiceDiscovery$ === "object");
assert(typeof MeshSpec$ === "object");
assert(typeof MeshStatus$ === "object");
assert(typeof OutlierDetection$ === "object");
assert(typeof PortMapping$ === "object");
assert(typeof QueryParameterMatch$ === "object");
assert(typeof ResourceMetadata$ === "object");
assert(typeof RouteData$ === "object");
assert(typeof RouteRef$ === "object");
assert(typeof RouteSpec$ === "object");
assert(typeof RouteStatus$ === "object");
assert(typeof ServiceDiscovery$ === "object");
assert(typeof SubjectAlternativeNameMatchers$ === "object");
assert(typeof SubjectAlternativeNames$ === "object");
assert(typeof TagRef$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TcpRoute$ === "object");
assert(typeof TcpRouteAction$ === "object");
assert(typeof TcpRouteMatch$ === "object");
assert(typeof TcpTimeout$ === "object");
assert(typeof TlsValidationContext$ === "object");
assert(typeof TlsValidationContextAcmTrust$ === "object");
assert(typeof TlsValidationContextFileTrust$ === "object");
assert(typeof TlsValidationContextSdsTrust$ === "object");
assert(typeof TlsValidationContextTrust$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateGatewayRouteInput$ === "object");
assert(typeof UpdateGatewayRouteOutput$ === "object");
assert(typeof UpdateMeshInput$ === "object");
assert(typeof UpdateMeshOutput$ === "object");
assert(typeof UpdateRouteInput$ === "object");
assert(typeof UpdateRouteOutput$ === "object");
assert(typeof UpdateVirtualGatewayInput$ === "object");
assert(typeof UpdateVirtualGatewayOutput$ === "object");
assert(typeof UpdateVirtualNodeInput$ === "object");
assert(typeof UpdateVirtualNodeOutput$ === "object");
assert(typeof UpdateVirtualRouterInput$ === "object");
assert(typeof UpdateVirtualRouterOutput$ === "object");
assert(typeof UpdateVirtualServiceInput$ === "object");
assert(typeof UpdateVirtualServiceOutput$ === "object");
assert(typeof VirtualGatewayAccessLog$ === "object");
assert(typeof VirtualGatewayBackendDefaults$ === "object");
assert(typeof VirtualGatewayClientPolicy$ === "object");
assert(typeof VirtualGatewayClientPolicyTls$ === "object");
assert(typeof VirtualGatewayClientTlsCertificate$ === "object");
assert(typeof VirtualGatewayConnectionPool$ === "object");
assert(typeof VirtualGatewayData$ === "object");
assert(typeof VirtualGatewayFileAccessLog$ === "object");
assert(typeof VirtualGatewayGrpcConnectionPool$ === "object");
assert(typeof VirtualGatewayHealthCheckPolicy$ === "object");
assert(typeof VirtualGatewayHttp2ConnectionPool$ === "object");
assert(typeof VirtualGatewayHttpConnectionPool$ === "object");
assert(typeof VirtualGatewayListener$ === "object");
assert(typeof VirtualGatewayListenerTls$ === "object");
assert(typeof VirtualGatewayListenerTlsAcmCertificate$ === "object");
assert(typeof VirtualGatewayListenerTlsCertificate$ === "object");
assert(typeof VirtualGatewayListenerTlsFileCertificate$ === "object");
assert(typeof VirtualGatewayListenerTlsSdsCertificate$ === "object");
assert(typeof VirtualGatewayListenerTlsValidationContext$ === "object");
assert(typeof VirtualGatewayListenerTlsValidationContextTrust$ === "object");
assert(typeof VirtualGatewayLogging$ === "object");
assert(typeof VirtualGatewayPortMapping$ === "object");
assert(typeof VirtualGatewayRef$ === "object");
assert(typeof VirtualGatewaySpec$ === "object");
assert(typeof VirtualGatewayStatus$ === "object");
assert(typeof VirtualGatewayTlsValidationContext$ === "object");
assert(typeof VirtualGatewayTlsValidationContextAcmTrust$ === "object");
assert(typeof VirtualGatewayTlsValidationContextFileTrust$ === "object");
assert(typeof VirtualGatewayTlsValidationContextSdsTrust$ === "object");
assert(typeof VirtualGatewayTlsValidationContextTrust$ === "object");
assert(typeof VirtualNodeConnectionPool$ === "object");
assert(typeof VirtualNodeData$ === "object");
assert(typeof VirtualNodeGrpcConnectionPool$ === "object");
assert(typeof VirtualNodeHttp2ConnectionPool$ === "object");
assert(typeof VirtualNodeHttpConnectionPool$ === "object");
assert(typeof VirtualNodeRef$ === "object");
assert(typeof VirtualNodeServiceProvider$ === "object");
assert(typeof VirtualNodeSpec$ === "object");
assert(typeof VirtualNodeStatus$ === "object");
assert(typeof VirtualNodeTcpConnectionPool$ === "object");
assert(typeof VirtualRouterData$ === "object");
assert(typeof VirtualRouterListener$ === "object");
assert(typeof VirtualRouterRef$ === "object");
assert(typeof VirtualRouterServiceProvider$ === "object");
assert(typeof VirtualRouterSpec$ === "object");
assert(typeof VirtualRouterStatus$ === "object");
assert(typeof VirtualServiceBackend$ === "object");
assert(typeof VirtualServiceData$ === "object");
assert(typeof VirtualServiceProvider$ === "object");
assert(typeof VirtualServiceRef$ === "object");
assert(typeof VirtualServiceSpec$ === "object");
assert(typeof VirtualServiceStatus$ === "object");
assert(typeof WeightedTarget$ === "object");
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
assert(BadRequestException.prototype instanceof AppMeshServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof AppMeshServiceException);
assert(typeof ConflictException$ === "object");
assert(ForbiddenException.prototype instanceof AppMeshServiceException);
assert(typeof ForbiddenException$ === "object");
assert(InternalServerErrorException.prototype instanceof AppMeshServiceException);
assert(typeof InternalServerErrorException$ === "object");
assert(LimitExceededException.prototype instanceof AppMeshServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotFoundException.prototype instanceof AppMeshServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceInUseException.prototype instanceof AppMeshServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ServiceUnavailableException.prototype instanceof AppMeshServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof AppMeshServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(TooManyTagsException.prototype instanceof AppMeshServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(AppMeshServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListGatewayRoutes === "function");
assert(typeof paginateListMeshes === "function");
assert(typeof paginateListRoutes === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListVirtualGateways === "function");
assert(typeof paginateListVirtualNodes === "function");
assert(typeof paginateListVirtualRouters === "function");
assert(typeof paginateListVirtualServices === "function");
console.log(`AppMesh index test passed.`);
