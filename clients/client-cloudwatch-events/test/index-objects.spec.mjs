import {
  ActivateEventSourceCommand,
  ApiDestinationHttpMethod,
  ApiDestinationState,
  ArchiveState,
  AssignPublicIp,
  CancelReplayCommand,
  CloudWatchEvents,
  CloudWatchEventsClient,
  CloudWatchEventsServiceException,
  ConnectionAuthorizationType,
  ConnectionOAuthHttpMethod,
  ConnectionState,
  CreateApiDestinationCommand,
  CreateArchiveCommand,
  CreateConnectionCommand,
  CreateEventBusCommand,
  CreatePartnerEventSourceCommand,
  DeactivateEventSourceCommand,
  DeauthorizeConnectionCommand,
  DeleteApiDestinationCommand,
  DeleteArchiveCommand,
  DeleteConnectionCommand,
  DeleteEventBusCommand,
  DeletePartnerEventSourceCommand,
  DeleteRuleCommand,
  DescribeApiDestinationCommand,
  DescribeArchiveCommand,
  DescribeConnectionCommand,
  DescribeEventBusCommand,
  DescribeEventSourceCommand,
  DescribePartnerEventSourceCommand,
  DescribeReplayCommand,
  DescribeRuleCommand,
  DisableRuleCommand,
  EnableRuleCommand,
  EventSourceState,
  LaunchType,
  ListApiDestinationsCommand,
  ListArchivesCommand,
  ListConnectionsCommand,
  ListEventBusesCommand,
  ListEventSourcesCommand,
  ListPartnerEventSourceAccountsCommand,
  ListPartnerEventSourcesCommand,
  ListReplaysCommand,
  ListRuleNamesByTargetCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  ListTargetsByRuleCommand,
  PlacementConstraintType,
  PlacementStrategyType,
  PropagateTags,
  PutEventsCommand,
  PutPartnerEventsCommand,
  PutPermissionCommand,
  PutRuleCommand,
  PutTargetsCommand,
  RemovePermissionCommand,
  RemoveTargetsCommand,
  ReplayState,
  RuleState,
  StartReplayCommand,
  TagResourceCommand,
  TestEventPatternCommand,
  UntagResourceCommand,
  UpdateApiDestinationCommand,
  UpdateArchiveCommand,
  UpdateConnectionCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudWatchEventsClient === "function");
assert(typeof CloudWatchEvents === "function");
// commands
assert(typeof ActivateEventSourceCommand === "function");
assert(typeof CancelReplayCommand === "function");
assert(typeof CreateApiDestinationCommand === "function");
assert(typeof CreateArchiveCommand === "function");
assert(typeof CreateConnectionCommand === "function");
assert(typeof CreateEventBusCommand === "function");
assert(typeof CreatePartnerEventSourceCommand === "function");
assert(typeof DeactivateEventSourceCommand === "function");
assert(typeof DeauthorizeConnectionCommand === "function");
assert(typeof DeleteApiDestinationCommand === "function");
assert(typeof DeleteArchiveCommand === "function");
assert(typeof DeleteConnectionCommand === "function");
assert(typeof DeleteEventBusCommand === "function");
assert(typeof DeletePartnerEventSourceCommand === "function");
assert(typeof DeleteRuleCommand === "function");
assert(typeof DescribeApiDestinationCommand === "function");
assert(typeof DescribeArchiveCommand === "function");
assert(typeof DescribeConnectionCommand === "function");
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
// enums
assert(typeof ApiDestinationHttpMethod === "object");
assert(typeof ApiDestinationState === "object");
assert(typeof ArchiveState === "object");
assert(typeof AssignPublicIp === "object");
assert(typeof ConnectionAuthorizationType === "object");
assert(typeof ConnectionOAuthHttpMethod === "object");
assert(typeof ConnectionState === "object");
assert(typeof EventSourceState === "object");
assert(typeof LaunchType === "object");
assert(typeof PlacementConstraintType === "object");
assert(typeof PlacementStrategyType === "object");
assert(typeof PropagateTags === "object");
assert(typeof ReplayState === "object");
assert(typeof RuleState === "object");
// errors
assert(CloudWatchEventsServiceException.prototype instanceof Error);
console.log(`CloudWatchEvents index test passed.`);
