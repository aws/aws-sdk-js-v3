import {
  AccessDeniedException,
  AccessDeniedException$,
  ActivateEventSource$,
  ActivateEventSourceCommand,
  ActivateEventSourceRequest$,
  ApiDestination$,
  ApiDestinationHttpMethod,
  ApiDestinationState,
  AppSyncParameters$,
  Archive$,
  ArchiveState,
  AssignPublicIp,
  AwsVpcConfiguration$,
  BatchArrayProperties$,
  BatchParameters$,
  BatchRetryStrategy$,
  CancelReplay$,
  CancelReplayCommand,
  CancelReplayRequest$,
  CancelReplayResponse$,
  CapacityProviderStrategyItem$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  Condition$,
  Connection$,
  ConnectionApiKeyAuthResponseParameters$,
  ConnectionAuthorizationType,
  ConnectionAuthResponseParameters$,
  ConnectionBasicAuthResponseParameters$,
  ConnectionBodyParameter$,
  ConnectionHeaderParameter$,
  ConnectionHttpParameters$,
  ConnectionOAuthClientResponseParameters$,
  ConnectionOAuthHttpMethod,
  ConnectionOAuthResponseParameters$,
  ConnectionQueryStringParameter$,
  ConnectionState,
  ConnectivityResourceConfigurationArn$,
  ConnectivityResourceParameters$,
  CreateApiDestination$,
  CreateApiDestinationCommand,
  CreateApiDestinationRequest$,
  CreateApiDestinationResponse$,
  CreateArchive$,
  CreateArchiveCommand,
  CreateArchiveRequest$,
  CreateArchiveResponse$,
  CreateConnection$,
  CreateConnectionApiKeyAuthRequestParameters$,
  CreateConnectionAuthRequestParameters$,
  CreateConnectionBasicAuthRequestParameters$,
  CreateConnectionCommand,
  CreateConnectionOAuthClientRequestParameters$,
  CreateConnectionOAuthRequestParameters$,
  CreateConnectionRequest$,
  CreateConnectionResponse$,
  CreateEndpoint$,
  CreateEndpointCommand,
  CreateEndpointRequest$,
  CreateEndpointResponse$,
  CreateEventBus$,
  CreateEventBusCommand,
  CreateEventBusRequest$,
  CreateEventBusResponse$,
  CreatePartnerEventSource$,
  CreatePartnerEventSourceCommand,
  CreatePartnerEventSourceRequest$,
  CreatePartnerEventSourceResponse$,
  DeactivateEventSource$,
  DeactivateEventSourceCommand,
  DeactivateEventSourceRequest$,
  DeadLetterConfig$,
  DeauthorizeConnection$,
  DeauthorizeConnectionCommand,
  DeauthorizeConnectionRequest$,
  DeauthorizeConnectionResponse$,
  DeleteApiDestination$,
  DeleteApiDestinationCommand,
  DeleteApiDestinationRequest$,
  DeleteApiDestinationResponse$,
  DeleteArchive$,
  DeleteArchiveCommand,
  DeleteArchiveRequest$,
  DeleteArchiveResponse$,
  DeleteConnection$,
  DeleteConnectionCommand,
  DeleteConnectionRequest$,
  DeleteConnectionResponse$,
  DeleteEndpoint$,
  DeleteEndpointCommand,
  DeleteEndpointRequest$,
  DeleteEndpointResponse$,
  DeleteEventBus$,
  DeleteEventBusCommand,
  DeleteEventBusRequest$,
  DeletePartnerEventSource$,
  DeletePartnerEventSourceCommand,
  DeletePartnerEventSourceRequest$,
  DeleteRule$,
  DeleteRuleCommand,
  DeleteRuleRequest$,
  DescribeApiDestination$,
  DescribeApiDestinationCommand,
  DescribeApiDestinationRequest$,
  DescribeApiDestinationResponse$,
  DescribeArchive$,
  DescribeArchiveCommand,
  DescribeArchiveRequest$,
  DescribeArchiveResponse$,
  DescribeConnection$,
  DescribeConnectionCommand,
  DescribeConnectionConnectivityParameters$,
  DescribeConnectionRequest$,
  DescribeConnectionResourceParameters$,
  DescribeConnectionResponse$,
  DescribeEndpoint$,
  DescribeEndpointCommand,
  DescribeEndpointRequest$,
  DescribeEndpointResponse$,
  DescribeEventBus$,
  DescribeEventBusCommand,
  DescribeEventBusRequest$,
  DescribeEventBusResponse$,
  DescribeEventSource$,
  DescribeEventSourceCommand,
  DescribeEventSourceRequest$,
  DescribeEventSourceResponse$,
  DescribePartnerEventSource$,
  DescribePartnerEventSourceCommand,
  DescribePartnerEventSourceRequest$,
  DescribePartnerEventSourceResponse$,
  DescribeReplay$,
  DescribeReplayCommand,
  DescribeReplayRequest$,
  DescribeReplayResponse$,
  DescribeRule$,
  DescribeRuleCommand,
  DescribeRuleRequest$,
  DescribeRuleResponse$,
  DisableRule$,
  DisableRuleCommand,
  DisableRuleRequest$,
  EcsParameters$,
  EnableRule$,
  EnableRuleCommand,
  EnableRuleRequest$,
  Endpoint$,
  EndpointEventBus$,
  EndpointState,
  EventBridge,
  EventBridgeClient,
  EventBridgeServiceException,
  EventBus$,
  EventSource$,
  EventSourceState,
  FailoverConfig$,
  HttpParameters$,
  IllegalStatusException,
  IllegalStatusException$,
  IncludeDetail,
  InputTransformer$,
  InternalException,
  InternalException$,
  InvalidEventPatternException,
  InvalidEventPatternException$,
  InvalidStateException,
  InvalidStateException$,
  KinesisParameters$,
  LaunchType,
  Level,
  LimitExceededException,
  LimitExceededException$,
  ListApiDestinations$,
  ListApiDestinationsCommand,
  ListApiDestinationsRequest$,
  ListApiDestinationsResponse$,
  ListArchives$,
  ListArchivesCommand,
  ListArchivesRequest$,
  ListArchivesResponse$,
  ListConnections$,
  ListConnectionsCommand,
  ListConnectionsRequest$,
  ListConnectionsResponse$,
  ListEndpoints$,
  ListEndpointsCommand,
  ListEndpointsRequest$,
  ListEndpointsResponse$,
  ListEventBuses$,
  ListEventBusesCommand,
  ListEventBusesRequest$,
  ListEventBusesResponse$,
  ListEventSources$,
  ListEventSourcesCommand,
  ListEventSourcesRequest$,
  ListEventSourcesResponse$,
  ListPartnerEventSourceAccounts$,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourceAccountsRequest$,
  ListPartnerEventSourceAccountsResponse$,
  ListPartnerEventSources$,
  ListPartnerEventSourcesCommand,
  ListPartnerEventSourcesRequest$,
  ListPartnerEventSourcesResponse$,
  ListReplays$,
  ListReplaysCommand,
  ListReplaysRequest$,
  ListReplaysResponse$,
  ListRuleNamesByTarget$,
  ListRuleNamesByTargetCommand,
  ListRuleNamesByTargetRequest$,
  ListRuleNamesByTargetResponse$,
  ListRules$,
  ListRulesCommand,
  ListRulesRequest$,
  ListRulesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTargetsByRule$,
  ListTargetsByRuleCommand,
  ListTargetsByRuleRequest$,
  ListTargetsByRuleResponse$,
  LogConfig$,
  ManagedRuleException,
  ManagedRuleException$,
  NetworkConfiguration$,
  OperationDisabledException,
  OperationDisabledException$,
  PartnerEventSource$,
  PartnerEventSourceAccount$,
  PlacementConstraint$,
  PlacementConstraintType,
  PlacementStrategy$,
  PlacementStrategyType,
  PolicyLengthExceededException,
  PolicyLengthExceededException$,
  Primary$,
  PropagateTags,
  PutEvents$,
  PutEventsCommand,
  PutEventsRequest$,
  PutEventsRequestEntry$,
  PutEventsResponse$,
  PutEventsResultEntry$,
  PutPartnerEvents$,
  PutPartnerEventsCommand,
  PutPartnerEventsRequest$,
  PutPartnerEventsRequestEntry$,
  PutPartnerEventsResponse$,
  PutPartnerEventsResultEntry$,
  PutPermission$,
  PutPermissionCommand,
  PutPermissionRequest$,
  PutRule$,
  PutRuleCommand,
  PutRuleRequest$,
  PutRuleResponse$,
  PutTargets$,
  PutTargetsCommand,
  PutTargetsRequest$,
  PutTargetsResponse$,
  PutTargetsResultEntry$,
  RedshiftDataParameters$,
  RemovePermission$,
  RemovePermissionCommand,
  RemovePermissionRequest$,
  RemoveTargets$,
  RemoveTargetsCommand,
  RemoveTargetsRequest$,
  RemoveTargetsResponse$,
  RemoveTargetsResultEntry$,
  Replay$,
  ReplayDestination$,
  ReplayState,
  ReplicationConfig$,
  ReplicationState,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetryPolicy$,
  RoutingConfig$,
  Rule$,
  RuleState,
  RunCommandParameters$,
  RunCommandTarget$,
  SageMakerPipelineParameter$,
  SageMakerPipelineParameters$,
  Secondary$,
  SqsParameters$,
  StartReplay$,
  StartReplayCommand,
  StartReplayRequest$,
  StartReplayResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Target$,
  TestEventPattern$,
  TestEventPatternCommand,
  TestEventPatternRequest$,
  TestEventPatternResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApiDestination$,
  UpdateApiDestinationCommand,
  UpdateApiDestinationRequest$,
  UpdateApiDestinationResponse$,
  UpdateArchive$,
  UpdateArchiveCommand,
  UpdateArchiveRequest$,
  UpdateArchiveResponse$,
  UpdateConnection$,
  UpdateConnectionApiKeyAuthRequestParameters$,
  UpdateConnectionAuthRequestParameters$,
  UpdateConnectionBasicAuthRequestParameters$,
  UpdateConnectionCommand,
  UpdateConnectionOAuthClientRequestParameters$,
  UpdateConnectionOAuthRequestParameters$,
  UpdateConnectionRequest$,
  UpdateConnectionResponse$,
  UpdateEndpoint$,
  UpdateEndpointCommand,
  UpdateEndpointRequest$,
  UpdateEndpointResponse$,
  UpdateEventBus$,
  UpdateEventBusCommand,
  UpdateEventBusRequest$,
  UpdateEventBusResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EventBridgeClient === "function");
assert(typeof EventBridge === "function");
// commands
assert(typeof ActivateEventSourceCommand === "function");
assert(typeof ActivateEventSource$ === "object");
assert(typeof CancelReplayCommand === "function");
assert(typeof CancelReplay$ === "object");
assert(typeof CreateApiDestinationCommand === "function");
assert(typeof CreateApiDestination$ === "object");
assert(typeof CreateArchiveCommand === "function");
assert(typeof CreateArchive$ === "object");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateConnection$ === "object");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEndpoint$ === "object");
assert(typeof CreateEventBusCommand === "function");
assert(typeof CreateEventBus$ === "object");
assert(typeof CreatePartnerEventSourceCommand === "function");
assert(typeof CreatePartnerEventSource$ === "object");
assert(typeof DeactivateEventSourceCommand === "function");
assert(typeof DeactivateEventSource$ === "object");
assert(typeof DeauthorizeConnectionCommand === "function");
assert(typeof DeauthorizeConnection$ === "object");
assert(typeof DeleteApiDestinationCommand === "function");
assert(typeof DeleteApiDestination$ === "object");
assert(typeof DeleteArchiveCommand === "function");
assert(typeof DeleteArchive$ === "object");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteConnection$ === "object");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEndpoint$ === "object");
assert(typeof DeleteEventBusCommand === "function");
assert(typeof DeleteEventBus$ === "object");
assert(typeof DeletePartnerEventSourceCommand === "function");
assert(typeof DeletePartnerEventSource$ === "object");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DeleteRule$ === "object");
assert(typeof DescribeApiDestinationCommand === "function");
assert(typeof DescribeApiDestination$ === "object");
assert(typeof DescribeArchiveCommand === "function");
assert(typeof DescribeArchive$ === "object");
assert(typeof DescribeConnectionCommand === "function");
assert(typeof DescribeConnection$ === "object");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEndpoint$ === "object");
assert(typeof DescribeEventBusCommand === "function");
assert(typeof DescribeEventBus$ === "object");
assert(typeof DescribeEventSourceCommand === "function");
assert(typeof DescribeEventSource$ === "object");
assert(typeof DescribePartnerEventSourceCommand === "function");
assert(typeof DescribePartnerEventSource$ === "object");
assert(typeof DescribeReplayCommand === "function");
assert(typeof DescribeReplay$ === "object");
assert(typeof DescribeRuleCommand === "function");
assert(typeof DescribeRule$ === "object");
assert(typeof DisableRuleCommand === "function");
assert(typeof DisableRule$ === "object");
assert(typeof EnableRuleCommand === "function");
assert(typeof EnableRule$ === "object");
assert(typeof ListApiDestinationsCommand === "function");
assert(typeof ListApiDestinations$ === "object");
assert(typeof ListArchivesCommand === "function");
assert(typeof ListArchives$ === "object");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListConnections$ === "object");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListEndpoints$ === "object");
assert(typeof ListEventBusesCommand === "function");
assert(typeof ListEventBuses$ === "object");
assert(typeof ListEventSourcesCommand === "function");
assert(typeof ListEventSources$ === "object");
assert(typeof ListPartnerEventSourceAccountsCommand === "function");
assert(typeof ListPartnerEventSourceAccounts$ === "object");
assert(typeof ListPartnerEventSourcesCommand === "function");
assert(typeof ListPartnerEventSources$ === "object");
assert(typeof ListReplaysCommand === "function");
assert(typeof ListReplays$ === "object");
assert(typeof ListRuleNamesByTargetCommand === "function");
assert(typeof ListRuleNamesByTarget$ === "object");
assert(typeof ListRulesCommand === "function");
assert(typeof ListRules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetsByRuleCommand === "function");
assert(typeof ListTargetsByRule$ === "object");
assert(typeof PutEventsCommand === "function");
assert(typeof PutEvents$ === "object");
assert(typeof PutPartnerEventsCommand === "function");
assert(typeof PutPartnerEvents$ === "object");
assert(typeof PutPermissionCommand === "function");
assert(typeof PutPermission$ === "object");
assert(typeof PutRuleCommand === "function");
assert(typeof PutRule$ === "object");
assert(typeof PutTargetsCommand === "function");
assert(typeof PutTargets$ === "object");
assert(typeof RemovePermissionCommand === "function");
assert(typeof RemovePermission$ === "object");
assert(typeof RemoveTargetsCommand === "function");
assert(typeof RemoveTargets$ === "object");
assert(typeof StartReplayCommand === "function");
assert(typeof StartReplay$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestEventPatternCommand === "function");
assert(typeof TestEventPattern$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApiDestinationCommand === "function");
assert(typeof UpdateApiDestination$ === "object");
assert(typeof UpdateArchiveCommand === "function");
assert(typeof UpdateArchive$ === "object");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateConnection$ === "object");
assert(typeof UpdateEndpointCommand === "function");
assert(typeof UpdateEndpoint$ === "object");
assert(typeof UpdateEventBusCommand === "function");
assert(typeof UpdateEventBus$ === "object");
// structural schemas
assert(typeof ActivateEventSourceRequest$ === "object");
assert(typeof ApiDestination$ === "object");
assert(typeof AppSyncParameters$ === "object");
assert(typeof Archive$ === "object");
assert(typeof AwsVpcConfiguration$ === "object");
assert(typeof BatchArrayProperties$ === "object");
assert(typeof BatchParameters$ === "object");
assert(typeof BatchRetryStrategy$ === "object");
assert(typeof CancelReplayRequest$ === "object");
assert(typeof CancelReplayResponse$ === "object");
assert(typeof CapacityProviderStrategyItem$ === "object");
assert(typeof Condition$ === "object");
assert(typeof Connection$ === "object");
assert(typeof ConnectionApiKeyAuthResponseParameters$ === "object");
assert(typeof ConnectionAuthResponseParameters$ === "object");
assert(typeof ConnectionBasicAuthResponseParameters$ === "object");
assert(typeof ConnectionBodyParameter$ === "object");
assert(typeof ConnectionHeaderParameter$ === "object");
assert(typeof ConnectionHttpParameters$ === "object");
assert(typeof ConnectionOAuthClientResponseParameters$ === "object");
assert(typeof ConnectionOAuthResponseParameters$ === "object");
assert(typeof ConnectionQueryStringParameter$ === "object");
assert(typeof ConnectivityResourceConfigurationArn$ === "object");
assert(typeof ConnectivityResourceParameters$ === "object");
assert(typeof CreateApiDestinationRequest$ === "object");
assert(typeof CreateApiDestinationResponse$ === "object");
assert(typeof CreateArchiveRequest$ === "object");
assert(typeof CreateArchiveResponse$ === "object");
assert(typeof CreateConnectionApiKeyAuthRequestParameters$ === "object");
assert(typeof CreateConnectionAuthRequestParameters$ === "object");
assert(typeof CreateConnectionBasicAuthRequestParameters$ === "object");
assert(typeof CreateConnectionOAuthClientRequestParameters$ === "object");
assert(typeof CreateConnectionOAuthRequestParameters$ === "object");
assert(typeof CreateConnectionRequest$ === "object");
assert(typeof CreateConnectionResponse$ === "object");
assert(typeof CreateEndpointRequest$ === "object");
assert(typeof CreateEndpointResponse$ === "object");
assert(typeof CreateEventBusRequest$ === "object");
assert(typeof CreateEventBusResponse$ === "object");
assert(typeof CreatePartnerEventSourceRequest$ === "object");
assert(typeof CreatePartnerEventSourceResponse$ === "object");
assert(typeof DeactivateEventSourceRequest$ === "object");
assert(typeof DeadLetterConfig$ === "object");
assert(typeof DeauthorizeConnectionRequest$ === "object");
assert(typeof DeauthorizeConnectionResponse$ === "object");
assert(typeof DeleteApiDestinationRequest$ === "object");
assert(typeof DeleteApiDestinationResponse$ === "object");
assert(typeof DeleteArchiveRequest$ === "object");
assert(typeof DeleteArchiveResponse$ === "object");
assert(typeof DeleteConnectionRequest$ === "object");
assert(typeof DeleteConnectionResponse$ === "object");
assert(typeof DeleteEndpointRequest$ === "object");
assert(typeof DeleteEndpointResponse$ === "object");
assert(typeof DeleteEventBusRequest$ === "object");
assert(typeof DeletePartnerEventSourceRequest$ === "object");
assert(typeof DeleteRuleRequest$ === "object");
assert(typeof DescribeApiDestinationRequest$ === "object");
assert(typeof DescribeApiDestinationResponse$ === "object");
assert(typeof DescribeArchiveRequest$ === "object");
assert(typeof DescribeArchiveResponse$ === "object");
assert(typeof DescribeConnectionConnectivityParameters$ === "object");
assert(typeof DescribeConnectionRequest$ === "object");
assert(typeof DescribeConnectionResourceParameters$ === "object");
assert(typeof DescribeConnectionResponse$ === "object");
assert(typeof DescribeEndpointRequest$ === "object");
assert(typeof DescribeEndpointResponse$ === "object");
assert(typeof DescribeEventBusRequest$ === "object");
assert(typeof DescribeEventBusResponse$ === "object");
assert(typeof DescribeEventSourceRequest$ === "object");
assert(typeof DescribeEventSourceResponse$ === "object");
assert(typeof DescribePartnerEventSourceRequest$ === "object");
assert(typeof DescribePartnerEventSourceResponse$ === "object");
assert(typeof DescribeReplayRequest$ === "object");
assert(typeof DescribeReplayResponse$ === "object");
assert(typeof DescribeRuleRequest$ === "object");
assert(typeof DescribeRuleResponse$ === "object");
assert(typeof DisableRuleRequest$ === "object");
assert(typeof EcsParameters$ === "object");
assert(typeof EnableRuleRequest$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EndpointEventBus$ === "object");
assert(typeof EventBus$ === "object");
assert(typeof EventSource$ === "object");
assert(typeof FailoverConfig$ === "object");
assert(typeof HttpParameters$ === "object");
assert(typeof InputTransformer$ === "object");
assert(typeof KinesisParameters$ === "object");
assert(typeof ListApiDestinationsRequest$ === "object");
assert(typeof ListApiDestinationsResponse$ === "object");
assert(typeof ListArchivesRequest$ === "object");
assert(typeof ListArchivesResponse$ === "object");
assert(typeof ListConnectionsRequest$ === "object");
assert(typeof ListConnectionsResponse$ === "object");
assert(typeof ListEndpointsRequest$ === "object");
assert(typeof ListEndpointsResponse$ === "object");
assert(typeof ListEventBusesRequest$ === "object");
assert(typeof ListEventBusesResponse$ === "object");
assert(typeof ListEventSourcesRequest$ === "object");
assert(typeof ListEventSourcesResponse$ === "object");
assert(typeof ListPartnerEventSourceAccountsRequest$ === "object");
assert(typeof ListPartnerEventSourceAccountsResponse$ === "object");
assert(typeof ListPartnerEventSourcesRequest$ === "object");
assert(typeof ListPartnerEventSourcesResponse$ === "object");
assert(typeof ListReplaysRequest$ === "object");
assert(typeof ListReplaysResponse$ === "object");
assert(typeof ListRuleNamesByTargetRequest$ === "object");
assert(typeof ListRuleNamesByTargetResponse$ === "object");
assert(typeof ListRulesRequest$ === "object");
assert(typeof ListRulesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTargetsByRuleRequest$ === "object");
assert(typeof ListTargetsByRuleResponse$ === "object");
assert(typeof LogConfig$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof PartnerEventSource$ === "object");
assert(typeof PartnerEventSourceAccount$ === "object");
assert(typeof PlacementConstraint$ === "object");
assert(typeof PlacementStrategy$ === "object");
assert(typeof Primary$ === "object");
assert(typeof PutEventsRequest$ === "object");
assert(typeof PutEventsRequestEntry$ === "object");
assert(typeof PutEventsResponse$ === "object");
assert(typeof PutEventsResultEntry$ === "object");
assert(typeof PutPartnerEventsRequest$ === "object");
assert(typeof PutPartnerEventsRequestEntry$ === "object");
assert(typeof PutPartnerEventsResponse$ === "object");
assert(typeof PutPartnerEventsResultEntry$ === "object");
assert(typeof PutPermissionRequest$ === "object");
assert(typeof PutRuleRequest$ === "object");
assert(typeof PutRuleResponse$ === "object");
assert(typeof PutTargetsRequest$ === "object");
assert(typeof PutTargetsResponse$ === "object");
assert(typeof PutTargetsResultEntry$ === "object");
assert(typeof RedshiftDataParameters$ === "object");
assert(typeof RemovePermissionRequest$ === "object");
assert(typeof RemoveTargetsRequest$ === "object");
assert(typeof RemoveTargetsResponse$ === "object");
assert(typeof RemoveTargetsResultEntry$ === "object");
assert(typeof Replay$ === "object");
assert(typeof ReplayDestination$ === "object");
assert(typeof ReplicationConfig$ === "object");
assert(typeof RetryPolicy$ === "object");
assert(typeof RoutingConfig$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RunCommandParameters$ === "object");
assert(typeof RunCommandTarget$ === "object");
assert(typeof SageMakerPipelineParameter$ === "object");
assert(typeof SageMakerPipelineParameters$ === "object");
assert(typeof Secondary$ === "object");
assert(typeof SqsParameters$ === "object");
assert(typeof StartReplayRequest$ === "object");
assert(typeof StartReplayResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Target$ === "object");
assert(typeof TestEventPatternRequest$ === "object");
assert(typeof TestEventPatternResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApiDestinationRequest$ === "object");
assert(typeof UpdateApiDestinationResponse$ === "object");
assert(typeof UpdateArchiveRequest$ === "object");
assert(typeof UpdateArchiveResponse$ === "object");
assert(typeof UpdateConnectionApiKeyAuthRequestParameters$ === "object");
assert(typeof UpdateConnectionAuthRequestParameters$ === "object");
assert(typeof UpdateConnectionBasicAuthRequestParameters$ === "object");
assert(typeof UpdateConnectionOAuthClientRequestParameters$ === "object");
assert(typeof UpdateConnectionOAuthRequestParameters$ === "object");
assert(typeof UpdateConnectionRequest$ === "object");
assert(typeof UpdateConnectionResponse$ === "object");
assert(typeof UpdateEndpointRequest$ === "object");
assert(typeof UpdateEndpointResponse$ === "object");
assert(typeof UpdateEventBusRequest$ === "object");
assert(typeof UpdateEventBusResponse$ === "object");
// enums
assert(typeof ApiDestinationHttpMethod === "object");
assert(typeof ApiDestinationState === "object");
assert(typeof ArchiveState === "object");
assert(typeof AssignPublicIp === "object");
assert(typeof ConnectionAuthorizationType === "object");
assert(typeof ConnectionOAuthHttpMethod === "object");
assert(typeof ConnectionState === "object");
assert(typeof EndpointState === "object");
assert(typeof EventSourceState === "object");
assert(typeof IncludeDetail === "object");
assert(typeof LaunchType === "object");
assert(typeof Level === "object");
assert(typeof PlacementConstraintType === "object");
assert(typeof PlacementStrategyType === "object");
assert(typeof PropagateTags === "object");
assert(typeof ReplayState === "object");
assert(typeof ReplicationState === "object");
assert(typeof RuleState === "object");
// errors
assert(AccessDeniedException.prototype instanceof EventBridgeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof EventBridgeServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(IllegalStatusException.prototype instanceof EventBridgeServiceException);
assert(typeof IllegalStatusException$ === "object");
assert(InternalException.prototype instanceof EventBridgeServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidEventPatternException.prototype instanceof EventBridgeServiceException);
assert(typeof InvalidEventPatternException$ === "object");
assert(InvalidStateException.prototype instanceof EventBridgeServiceException);
assert(typeof InvalidStateException$ === "object");
assert(LimitExceededException.prototype instanceof EventBridgeServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ManagedRuleException.prototype instanceof EventBridgeServiceException);
assert(typeof ManagedRuleException$ === "object");
assert(OperationDisabledException.prototype instanceof EventBridgeServiceException);
assert(typeof OperationDisabledException$ === "object");
assert(PolicyLengthExceededException.prototype instanceof EventBridgeServiceException);
assert(typeof PolicyLengthExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof EventBridgeServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EventBridgeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof EventBridgeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(EventBridgeServiceException.prototype instanceof Error);
console.log(`EventBridge index test passed.`);
