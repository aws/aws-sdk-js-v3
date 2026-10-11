import {
  AccessDeniedException,
  AccessDeniedException$,
  AwsServiceEventsSourceConfiguration$,
  BatchConfiguration$,
  BusState,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConflictException,
  ConflictException$,
  ConfluentPublicRegistryConfiguration$,
  CreateEventBus$,
  CreateEventBusCommand,
  CreateEventBusRequest$,
  CreateEventBusResponse$,
  CreateEventSource$,
  CreateEventSourceCommand,
  CreateEventSourceRequest$,
  CreateEventSourceResponse$,
  CreateSubscriber$,
  CreateSubscriberCommand,
  CreateSubscriberRequest$,
  CreateSubscriberResponse$,
  DeduplicationConfiguration$,
  DeduplicationType,
  DeleteEventBus$,
  DeleteEventBusCommand,
  DeleteEventBusRequest$,
  DeleteEventBusResponse$,
  DeleteEventSource$,
  DeleteEventSourceCommand,
  DeleteEventSourceRequest$,
  DeleteEventSourceResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteSubscriber$,
  DeleteSubscriberCommand,
  DeleteSubscriberRequest$,
  DeleteSubscriberResponse$,
  DescribeEventBus$,
  DescribeEventBusCommand,
  DescribeEventBusRequest$,
  DescribeEventBusResponse$,
  DescribeEventSource$,
  DescribeEventSourceCommand,
  DescribeEventSourceRequest$,
  DescribeEventSourceResponse$,
  DescribeSubscriber$,
  DescribeSubscriberCommand,
  DescribeSubscriberRequest$,
  DescribeSubscriberResponse$,
  EncryptionConfiguration$,
  EventBridgeV2,
  EventBridgeV2Client,
  EventBridgeV2ServiceException,
  EventBusSummary$,
  EventBusV2Parameters$,
  EventBusV2SystemMetadata$,
  EventSourceConfiguration$,
  EventSourceState,
  EventSourceSummary$,
  EventSourceType,
  Filter$,
  FilterConfiguration$,
  FilterLanguage,
  FilterScope,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  HttpParameters$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  IncludePayload,
  InternalException,
  InternalException$,
  InvalidInputException,
  InvalidInputException$,
  InvalidStateException,
  InvalidStateException$,
  InvocationType,
  InvokeConfiguration$,
  JsonataConfiguration$,
  KinesisParameters$,
  LambdaParameters$,
  LimitExceededException,
  LimitExceededException$,
  ListEventBuses$,
  ListEventBusesCommand,
  ListEventBusesRequest$,
  ListEventBusesResponse$,
  ListEventSources$,
  ListEventSourcesCommand,
  ListEventSourcesRequest$,
  ListEventSourcesResponse$,
  ListResourcePolicies$,
  ListResourcePoliciesCommand,
  ListResourcePoliciesRequest$,
  ListResourcePoliciesResponse$,
  ListSubscribers$,
  ListSubscribersCommand,
  ListSubscribersRequest$,
  ListSubscribersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogConfiguration$,
  LogLevel,
  OnFailureConfiguration$,
  OrderingType,
  paginateListEventBuses,
  paginateListEventSources,
  paginateListResourcePolicies,
  paginateListSubscribers,
  PartnerEventsSourceConfiguration$,
  PointInTimeConfiguration$,
  PointType,
  PolicyLengthExceededException,
  PolicyLengthExceededException$,
  PublicPolicyException,
  PublicPolicyException$,
  PutEvents$,
  PutEventsCommand,
  PutEventsRequest$,
  PutEventsRequestEntry$,
  PutEventsResponse$,
  PutEventsResultEntry$,
  PutEventsSystemMetadata$,
  PutRawEvents$,
  PutRawEventsCommand,
  PutRawEventsRequest$,
  PutRawEventsRequestEntry$,
  PutRawEventsResponse$,
  PutRawEventsResultEntry$,
  PutRawEventsSystemMetadata$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicySummary$,
  ResumePosition,
  RetryPolicy$,
  RetryStrategy,
  RevokeResource$,
  RevokeResourceCommand,
  RevokeResourceRequest$,
  RevokeResourceResponse$,
  SchemaRegistryConfiguration$,
  SchemaRegistryUnavailableException,
  SchemaRegistryUnavailableException$,
  SnsMessageAttributeValue$,
  SnsParameters$,
  SqsMessageAttributeValue$,
  SqsParameters$,
  StartingPosition,
  StepFunctionsParameters$,
  StorageConfiguration$,
  StorageConfigurationOutput$,
  SubscriberState,
  SubscriberSummary$,
  SuccessCode,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  Transformer$,
  TransformerType,
  UniversalTargetParameters$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateEventBus$,
  UpdateEventBusCommand,
  UpdateEventBusRequest$,
  UpdateEventBusResponse$,
  UpdateEventSource$,
  UpdateEventSourceCommand,
  UpdateEventSourceRequest$,
  UpdateEventSourceResponse$,
  UpdateInvokeConfiguration$,
  UpdateSubscriber$,
  UpdateSubscriberCommand,
  UpdateSubscriberRequest$,
  UpdateSubscriberResponse$,
  waitForEventBusActive,
  waitForEventBusDeleted,
  waitUntilEventBusActive,
  waitUntilEventBusDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EventBridgeV2Client === "function");
assert(typeof EventBridgeV2 === "function");
// commands
assert(typeof CreateEventBusCommand === "function");
assert(typeof CreateEventBus$ === "object");
assert(typeof CreateEventSourceCommand === "function");
assert(typeof CreateEventSource$ === "object");
assert(typeof CreateSubscriberCommand === "function");
assert(typeof CreateSubscriber$ === "object");
assert(typeof DeleteEventBusCommand === "function");
assert(typeof DeleteEventBus$ === "object");
assert(typeof DeleteEventSourceCommand === "function");
assert(typeof DeleteEventSource$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSubscriberCommand === "function");
assert(typeof DeleteSubscriber$ === "object");
assert(typeof DescribeEventBusCommand === "function");
assert(typeof DescribeEventBus$ === "object");
assert(typeof DescribeEventSourceCommand === "function");
assert(typeof DescribeEventSource$ === "object");
assert(typeof DescribeSubscriberCommand === "function");
assert(typeof DescribeSubscriber$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListEventBusesCommand === "function");
assert(typeof ListEventBuses$ === "object");
assert(typeof ListEventSourcesCommand === "function");
assert(typeof ListEventSources$ === "object");
assert(typeof ListResourcePoliciesCommand === "function");
assert(typeof ListResourcePolicies$ === "object");
assert(typeof ListSubscribersCommand === "function");
assert(typeof ListSubscribers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutEventsCommand === "function");
assert(typeof PutEvents$ === "object");
assert(typeof PutRawEventsCommand === "function");
assert(typeof PutRawEvents$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RevokeResourceCommand === "function");
assert(typeof RevokeResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateEventBusCommand === "function");
assert(typeof UpdateEventBus$ === "object");
assert(typeof UpdateEventSourceCommand === "function");
assert(typeof UpdateEventSource$ === "object");
assert(typeof UpdateSubscriberCommand === "function");
assert(typeof UpdateSubscriber$ === "object");
// structural schemas
assert(typeof AwsServiceEventsSourceConfiguration$ === "object");
assert(typeof BatchConfiguration$ === "object");
assert(typeof ConfluentPublicRegistryConfiguration$ === "object");
assert(typeof CreateEventBusRequest$ === "object");
assert(typeof CreateEventBusResponse$ === "object");
assert(typeof CreateEventSourceRequest$ === "object");
assert(typeof CreateEventSourceResponse$ === "object");
assert(typeof CreateSubscriberRequest$ === "object");
assert(typeof CreateSubscriberResponse$ === "object");
assert(typeof DeduplicationConfiguration$ === "object");
assert(typeof DeleteEventBusRequest$ === "object");
assert(typeof DeleteEventBusResponse$ === "object");
assert(typeof DeleteEventSourceRequest$ === "object");
assert(typeof DeleteEventSourceResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteSubscriberRequest$ === "object");
assert(typeof DeleteSubscriberResponse$ === "object");
assert(typeof DescribeEventBusRequest$ === "object");
assert(typeof DescribeEventBusResponse$ === "object");
assert(typeof DescribeEventSourceRequest$ === "object");
assert(typeof DescribeEventSourceResponse$ === "object");
assert(typeof DescribeSubscriberRequest$ === "object");
assert(typeof DescribeSubscriberResponse$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EventBusSummary$ === "object");
assert(typeof EventBusV2Parameters$ === "object");
assert(typeof EventBusV2SystemMetadata$ === "object");
assert(typeof EventSourceConfiguration$ === "object");
assert(typeof EventSourceSummary$ === "object");
assert(typeof Filter$ === "object");
assert(typeof FilterConfiguration$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof HttpParameters$ === "object");
assert(typeof InvokeConfiguration$ === "object");
assert(typeof JsonataConfiguration$ === "object");
assert(typeof KinesisParameters$ === "object");
assert(typeof LambdaParameters$ === "object");
assert(typeof ListEventBusesRequest$ === "object");
assert(typeof ListEventBusesResponse$ === "object");
assert(typeof ListEventSourcesRequest$ === "object");
assert(typeof ListEventSourcesResponse$ === "object");
assert(typeof ListResourcePoliciesRequest$ === "object");
assert(typeof ListResourcePoliciesResponse$ === "object");
assert(typeof ListSubscribersRequest$ === "object");
assert(typeof ListSubscribersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogConfiguration$ === "object");
assert(typeof OnFailureConfiguration$ === "object");
assert(typeof PartnerEventsSourceConfiguration$ === "object");
assert(typeof PointInTimeConfiguration$ === "object");
assert(typeof PutEventsRequest$ === "object");
assert(typeof PutEventsRequestEntry$ === "object");
assert(typeof PutEventsResponse$ === "object");
assert(typeof PutEventsResultEntry$ === "object");
assert(typeof PutEventsSystemMetadata$ === "object");
assert(typeof PutRawEventsRequest$ === "object");
assert(typeof PutRawEventsRequestEntry$ === "object");
assert(typeof PutRawEventsResponse$ === "object");
assert(typeof PutRawEventsResultEntry$ === "object");
assert(typeof PutRawEventsSystemMetadata$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof ResourcePolicySummary$ === "object");
assert(typeof RetryPolicy$ === "object");
assert(typeof RevokeResourceRequest$ === "object");
assert(typeof RevokeResourceResponse$ === "object");
assert(typeof SchemaRegistryConfiguration$ === "object");
assert(typeof SnsMessageAttributeValue$ === "object");
assert(typeof SnsParameters$ === "object");
assert(typeof SqsMessageAttributeValue$ === "object");
assert(typeof SqsParameters$ === "object");
assert(typeof StepFunctionsParameters$ === "object");
assert(typeof StorageConfiguration$ === "object");
assert(typeof StorageConfigurationOutput$ === "object");
assert(typeof SubscriberSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Transformer$ === "object");
assert(typeof UniversalTargetParameters$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateEventBusRequest$ === "object");
assert(typeof UpdateEventBusResponse$ === "object");
assert(typeof UpdateEventSourceRequest$ === "object");
assert(typeof UpdateEventSourceResponse$ === "object");
assert(typeof UpdateInvokeConfiguration$ === "object");
assert(typeof UpdateSubscriberRequest$ === "object");
assert(typeof UpdateSubscriberResponse$ === "object");
// enums
assert(typeof BusState === "object");
assert(typeof DeduplicationType === "object");
assert(typeof EventSourceState === "object");
assert(typeof EventSourceType === "object");
assert(typeof FilterLanguage === "object");
assert(typeof FilterScope === "object");
assert(typeof IncludePayload === "object");
assert(typeof InvocationType === "object");
assert(typeof LogLevel === "object");
assert(typeof OrderingType === "object");
assert(typeof PointType === "object");
assert(typeof ResumePosition === "object");
assert(typeof RetryStrategy === "object");
assert(typeof StartingPosition === "object");
assert(typeof SubscriberState === "object");
assert(typeof SuccessCode === "object");
assert(typeof TransformerType === "object");
// errors
assert(AccessDeniedException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConflictException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InternalException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidInputException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidStateException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof InvalidStateException$ === "object");
assert(LimitExceededException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PolicyLengthExceededException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof PolicyLengthExceededException$ === "object");
assert(PublicPolicyException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof PublicPolicyException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SchemaRegistryUnavailableException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof SchemaRegistryUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof EventBridgeV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(EventBridgeV2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForEventBusActive === "function");
assert(typeof waitForEventBusDeleted === "function");
assert(typeof waitUntilEventBusActive === "function");
assert(typeof waitUntilEventBusDeleted === "function");
// paginators
assert(typeof paginateListEventBuses === "function");
assert(typeof paginateListEventSources === "function");
assert(typeof paginateListResourcePolicies === "function");
assert(typeof paginateListSubscribers === "function");
console.log(`EventBridgeV2 index test passed.`);
