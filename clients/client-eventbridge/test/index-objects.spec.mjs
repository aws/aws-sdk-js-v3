import {
  AccessDeniedException,
  ActivateEventSourceCommand,
  ApiDestinationHttpMethod,
  ApiDestinationState,
  ArchiveState,
  AssignPublicIp,
  CancelReplayCommand,
  ConcurrentModificationException,
  ConnectionAuthorizationType,
  ConnectionOAuthHttpMethod,
  ConnectionState,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEndpointCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEndpointCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEndpointCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  EndpointState,
  EventBridge,
  EventBridgeClient,
  EventBridgeServiceException,
  EventSourceState,
  IllegalStatusException,
  IncludeDetail,
  InternalException,
  InvalidEventPatternException,
  InvalidStateException,
  LaunchType,
  Level,
  LimitExceededException,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEndpointsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  ManagedRuleException,
  OperationDisabledException,
  PlacementConstraintType,
  PlacementStrategyType,
  PolicyLengthExceededException,
  PropagateTags,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  ReplayState,
  ReplicationState,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RuleState,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
  UpdateEndpointCommand,
  UpdateEventBusCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EventBridgeClient === "function");
assert(typeof EventBridge === "function");
// commands
assert(typeof ActivateEventSourceCommand === "function");
assert(typeof CancelReplayCommand === "function");
assert(typeof CreateApiDestinationCommand === "function");
assert(typeof CreateArchiveCommand === "function");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateEndpointCommand === "function");
assert(typeof CreateEventBusCommand === "function");
assert(typeof CreatePartnerEventSourceCommand === "function");
assert(typeof DeactivateEventSourceCommand === "function");
assert(typeof DeauthorizeConnectionCommand === "function");
assert(typeof DeleteApiDestinationCommand === "function");
assert(typeof DeleteArchiveCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteEndpointCommand === "function");
assert(typeof DeleteEventBusCommand === "function");
assert(typeof DeletePartnerEventSourceCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DescribeApiDestinationCommand === "function");
assert(typeof DescribeArchiveCommand === "function");
assert(typeof DescribeConnectionCommand === "function");
assert(typeof DescribeEndpointCommand === "function");
assert(typeof DescribeEventBusCommand === "function");
assert(typeof DescribeEventSourceCommand === "function");
assert(typeof DescribePartnerEventSourceCommand === "function");
assert(typeof DescribeReplayCommand === "function");
assert(typeof DescribeRuleCommand === "function");
assert(typeof DisableRuleCommand === "function");
assert(typeof EnableRuleCommand === "function");
assert(typeof ListApiDestinationsCommand === "function");
assert(typeof ListArchivesCommand === "function");
assert(typeof ListConnectionsCommand === "function");
assert(typeof ListEndpointsCommand === "function");
assert(typeof ListEventBusesCommand === "function");
assert(typeof ListEventSourcesCommand === "function");
assert(typeof ListPartnerEventSourceAccountsCommand === "function");
assert(typeof ListPartnerEventSourcesCommand === "function");
assert(typeof ListReplaysCommand === "function");
assert(typeof ListRuleNamesByTargetCommand === "function");
assert(typeof ListRulesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetsByRuleCommand === "function");
assert(typeof PutEventsCommand === "function");
assert(typeof PutPartnerEventsCommand === "function");
assert(typeof PutPermissionCommand === "function");
assert(typeof PutRuleCommand === "function");
assert(typeof PutTargetsCommand === "function");
assert(typeof RemovePermissionCommand === "function");
assert(typeof RemoveTargetsCommand === "function");
assert(typeof StartReplayCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestEventPatternCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApiDestinationCommand === "function");
assert(typeof UpdateArchiveCommand === "function");
assert(typeof UpdateConnectionCommand === "function");
assert(typeof UpdateEndpointCommand === "function");
assert(typeof UpdateEventBusCommand === "function");
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
assert(ConcurrentModificationException.prototype instanceof EventBridgeServiceException);
assert(IllegalStatusException.prototype instanceof EventBridgeServiceException);
assert(InternalException.prototype instanceof EventBridgeServiceException);
assert(InvalidEventPatternException.prototype instanceof EventBridgeServiceException);
assert(InvalidStateException.prototype instanceof EventBridgeServiceException);
assert(LimitExceededException.prototype instanceof EventBridgeServiceException);
assert(ManagedRuleException.prototype instanceof EventBridgeServiceException);
assert(OperationDisabledException.prototype instanceof EventBridgeServiceException);
assert(PolicyLengthExceededException.prototype instanceof EventBridgeServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof EventBridgeServiceException);
assert(ResourceNotFoundException.prototype instanceof EventBridgeServiceException);
assert(ThrottlingException.prototype instanceof EventBridgeServiceException);
assert(EventBridgeServiceException.prototype instanceof Error);
console.log(`EventBridge index test passed.`);
