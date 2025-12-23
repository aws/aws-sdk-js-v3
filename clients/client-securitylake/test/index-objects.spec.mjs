import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessType,
  AwsIdentity$,
  AwsLogSourceConfiguration$,
  AwsLogSourceName,
  AwsLogSourceResource$,
  BadRequestException,
  BadRequestException$,
  ConflictException,
  ConflictException$,
  CreateAwsLogSource$,
  CreateAwsLogSourceCommand,
  CreateAwsLogSourceRequest$,
  CreateAwsLogSourceResponse$,
  CreateCustomLogSource$,
  CreateCustomLogSourceCommand,
  CreateCustomLogSourceRequest$,
  CreateCustomLogSourceResponse$,
  CreateDataLake$,
  CreateDataLakeCommand,
  CreateDataLakeExceptionSubscription$,
  CreateDataLakeExceptionSubscriptionCommand,
  CreateDataLakeExceptionSubscriptionRequest$,
  CreateDataLakeExceptionSubscriptionResponse$,
  CreateDataLakeOrganizationConfiguration$,
  CreateDataLakeOrganizationConfigurationCommand,
  CreateDataLakeOrganizationConfigurationRequest$,
  CreateDataLakeOrganizationConfigurationResponse$,
  CreateDataLakeRequest$,
  CreateDataLakeResponse$,
  CreateSubscriber$,
  CreateSubscriberCommand,
  CreateSubscriberNotification$,
  CreateSubscriberNotificationCommand,
  CreateSubscriberNotificationRequest$,
  CreateSubscriberNotificationResponse$,
  CreateSubscriberRequest$,
  CreateSubscriberResponse$,
  CustomLogSourceAttributes$,
  CustomLogSourceConfiguration$,
  CustomLogSourceCrawlerConfiguration$,
  CustomLogSourceProvider$,
  CustomLogSourceResource$,
  DataLakeAutoEnableNewAccountConfiguration$,
  DataLakeConfiguration$,
  DataLakeEncryptionConfiguration$,
  DataLakeException$,
  DataLakeLifecycleConfiguration$,
  DataLakeLifecycleExpiration$,
  DataLakeLifecycleTransition$,
  DataLakeReplicationConfiguration$,
  DataLakeResource$,
  DataLakeSource$,
  DataLakeSourceStatus$,
  DataLakeStatus,
  DataLakeUpdateException$,
  DataLakeUpdateStatus$,
  DeleteAwsLogSource$,
  DeleteAwsLogSourceCommand,
  DeleteAwsLogSourceRequest$,
  DeleteAwsLogSourceResponse$,
  DeleteCustomLogSource$,
  DeleteCustomLogSourceCommand,
  DeleteCustomLogSourceRequest$,
  DeleteCustomLogSourceResponse$,
  DeleteDataLake$,
  DeleteDataLakeCommand,
  DeleteDataLakeExceptionSubscription$,
  DeleteDataLakeExceptionSubscriptionCommand,
  DeleteDataLakeExceptionSubscriptionRequest$,
  DeleteDataLakeExceptionSubscriptionResponse$,
  DeleteDataLakeOrganizationConfiguration$,
  DeleteDataLakeOrganizationConfigurationCommand,
  DeleteDataLakeOrganizationConfigurationRequest$,
  DeleteDataLakeOrganizationConfigurationResponse$,
  DeleteDataLakeRequest$,
  DeleteDataLakeResponse$,
  DeleteSubscriber$,
  DeleteSubscriberCommand,
  DeleteSubscriberNotification$,
  DeleteSubscriberNotificationCommand,
  DeleteSubscriberNotificationRequest$,
  DeleteSubscriberNotificationResponse$,
  DeleteSubscriberRequest$,
  DeleteSubscriberResponse$,
  DeregisterDataLakeDelegatedAdministrator$,
  DeregisterDataLakeDelegatedAdministratorCommand,
  DeregisterDataLakeDelegatedAdministratorRequest$,
  DeregisterDataLakeDelegatedAdministratorResponse$,
  GetDataLakeExceptionSubscription$,
  GetDataLakeExceptionSubscriptionCommand,
  GetDataLakeExceptionSubscriptionRequest$,
  GetDataLakeExceptionSubscriptionResponse$,
  GetDataLakeOrganizationConfiguration$,
  GetDataLakeOrganizationConfigurationCommand,
  GetDataLakeOrganizationConfigurationRequest$,
  GetDataLakeOrganizationConfigurationResponse$,
  GetDataLakeSources$,
  GetDataLakeSourcesCommand,
  GetDataLakeSourcesRequest$,
  GetDataLakeSourcesResponse$,
  GetSubscriber$,
  GetSubscriberCommand,
  GetSubscriberRequest$,
  GetSubscriberResponse$,
  HttpMethod,
  HttpsNotificationConfiguration$,
  InternalServerException,
  InternalServerException$,
  ListDataLakeExceptions$,
  ListDataLakeExceptionsCommand,
  ListDataLakeExceptionsRequest$,
  ListDataLakeExceptionsResponse$,
  ListDataLakes$,
  ListDataLakesCommand,
  ListDataLakesRequest$,
  ListDataLakesResponse$,
  ListLogSources$,
  ListLogSourcesCommand,
  ListLogSourcesRequest$,
  ListLogSourcesResponse$,
  ListSubscribers$,
  ListSubscribersCommand,
  ListSubscribersRequest$,
  ListSubscribersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LogSource$,
  LogSourceResource$,
  NotificationConfiguration$,
  paginateGetDataLakeSources,
  paginateListDataLakeExceptions,
  paginateListLogSources,
  paginateListSubscribers,
  RegisterDataLakeDelegatedAdministrator$,
  RegisterDataLakeDelegatedAdministratorCommand,
  RegisterDataLakeDelegatedAdministratorRequest$,
  RegisterDataLakeDelegatedAdministratorResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SecurityLake,
  SecurityLakeClient,
  SecurityLakeServiceException,
  SourceCollectionStatus,
  SqsNotificationConfiguration$,
  SubscriberResource$,
  SubscriberStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDataLake$,
  UpdateDataLakeCommand,
  UpdateDataLakeExceptionSubscription$,
  UpdateDataLakeExceptionSubscriptionCommand,
  UpdateDataLakeExceptionSubscriptionRequest$,
  UpdateDataLakeExceptionSubscriptionResponse$,
  UpdateDataLakeRequest$,
  UpdateDataLakeResponse$,
  UpdateSubscriber$,
  UpdateSubscriberCommand,
  UpdateSubscriberNotification$,
  UpdateSubscriberNotificationCommand,
  UpdateSubscriberNotificationRequest$,
  UpdateSubscriberNotificationResponse$,
  UpdateSubscriberRequest$,
  UpdateSubscriberResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityLakeClient === "function");
assert(typeof SecurityLake === "function");
// commands
assert(typeof CreateAwsLogSourceCommand === "function");
assert(typeof CreateAwsLogSource$ === "object");
assert(typeof CreateCustomLogSourceCommand === "function");
assert(typeof CreateCustomLogSource$ === "object");
assert(typeof CreateDataLakeCommand === "function");
assert(typeof CreateDataLake$ === "object");
assert(typeof CreateDataLakeExceptionSubscriptionCommand === "function");
assert(typeof CreateDataLakeExceptionSubscription$ === "object");
assert(typeof CreateDataLakeOrganizationConfigurationCommand === "function");
assert(typeof CreateDataLakeOrganizationConfiguration$ === "object");
assert(typeof CreateSubscriberCommand === "function");
assert(typeof CreateSubscriber$ === "object");
assert(typeof CreateSubscriberNotificationCommand === "function");
assert(typeof CreateSubscriberNotification$ === "object");
assert(typeof DeleteAwsLogSourceCommand === "function");
assert(typeof DeleteAwsLogSource$ === "object");
assert(typeof DeleteCustomLogSourceCommand === "function");
assert(typeof DeleteCustomLogSource$ === "object");
assert(typeof DeleteDataLakeCommand === "function");
assert(typeof DeleteDataLake$ === "object");
assert(typeof DeleteDataLakeExceptionSubscriptionCommand === "function");
assert(typeof DeleteDataLakeExceptionSubscription$ === "object");
assert(typeof DeleteDataLakeOrganizationConfigurationCommand === "function");
assert(typeof DeleteDataLakeOrganizationConfiguration$ === "object");
assert(typeof DeleteSubscriberCommand === "function");
assert(typeof DeleteSubscriber$ === "object");
assert(typeof DeleteSubscriberNotificationCommand === "function");
assert(typeof DeleteSubscriberNotification$ === "object");
assert(typeof DeregisterDataLakeDelegatedAdministratorCommand === "function");
assert(typeof DeregisterDataLakeDelegatedAdministrator$ === "object");
assert(typeof GetDataLakeExceptionSubscriptionCommand === "function");
assert(typeof GetDataLakeExceptionSubscription$ === "object");
assert(typeof GetDataLakeOrganizationConfigurationCommand === "function");
assert(typeof GetDataLakeOrganizationConfiguration$ === "object");
assert(typeof GetDataLakeSourcesCommand === "function");
assert(typeof GetDataLakeSources$ === "object");
assert(typeof GetSubscriberCommand === "function");
assert(typeof GetSubscriber$ === "object");
assert(typeof ListDataLakeExceptionsCommand === "function");
assert(typeof ListDataLakeExceptions$ === "object");
assert(typeof ListDataLakesCommand === "function");
assert(typeof ListDataLakes$ === "object");
assert(typeof ListLogSourcesCommand === "function");
assert(typeof ListLogSources$ === "object");
assert(typeof ListSubscribersCommand === "function");
assert(typeof ListSubscribers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterDataLakeDelegatedAdministratorCommand === "function");
assert(typeof RegisterDataLakeDelegatedAdministrator$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDataLakeCommand === "function");
assert(typeof UpdateDataLake$ === "object");
assert(typeof UpdateDataLakeExceptionSubscriptionCommand === "function");
assert(typeof UpdateDataLakeExceptionSubscription$ === "object");
assert(typeof UpdateSubscriberCommand === "function");
assert(typeof UpdateSubscriber$ === "object");
assert(typeof UpdateSubscriberNotificationCommand === "function");
assert(typeof UpdateSubscriberNotification$ === "object");
// structural schemas
assert(typeof AwsIdentity$ === "object");
assert(typeof AwsLogSourceConfiguration$ === "object");
assert(typeof AwsLogSourceResource$ === "object");
assert(typeof CreateAwsLogSourceRequest$ === "object");
assert(typeof CreateAwsLogSourceResponse$ === "object");
assert(typeof CreateCustomLogSourceRequest$ === "object");
assert(typeof CreateCustomLogSourceResponse$ === "object");
assert(typeof CreateDataLakeExceptionSubscriptionRequest$ === "object");
assert(typeof CreateDataLakeExceptionSubscriptionResponse$ === "object");
assert(typeof CreateDataLakeOrganizationConfigurationRequest$ === "object");
assert(typeof CreateDataLakeOrganizationConfigurationResponse$ === "object");
assert(typeof CreateDataLakeRequest$ === "object");
assert(typeof CreateDataLakeResponse$ === "object");
assert(typeof CreateSubscriberNotificationRequest$ === "object");
assert(typeof CreateSubscriberNotificationResponse$ === "object");
assert(typeof CreateSubscriberRequest$ === "object");
assert(typeof CreateSubscriberResponse$ === "object");
assert(typeof CustomLogSourceAttributes$ === "object");
assert(typeof CustomLogSourceConfiguration$ === "object");
assert(typeof CustomLogSourceCrawlerConfiguration$ === "object");
assert(typeof CustomLogSourceProvider$ === "object");
assert(typeof CustomLogSourceResource$ === "object");
assert(typeof DataLakeAutoEnableNewAccountConfiguration$ === "object");
assert(typeof DataLakeConfiguration$ === "object");
assert(typeof DataLakeEncryptionConfiguration$ === "object");
assert(typeof DataLakeException$ === "object");
assert(typeof DataLakeLifecycleConfiguration$ === "object");
assert(typeof DataLakeLifecycleExpiration$ === "object");
assert(typeof DataLakeLifecycleTransition$ === "object");
assert(typeof DataLakeReplicationConfiguration$ === "object");
assert(typeof DataLakeResource$ === "object");
assert(typeof DataLakeSource$ === "object");
assert(typeof DataLakeSourceStatus$ === "object");
assert(typeof DataLakeUpdateException$ === "object");
assert(typeof DataLakeUpdateStatus$ === "object");
assert(typeof DeleteAwsLogSourceRequest$ === "object");
assert(typeof DeleteAwsLogSourceResponse$ === "object");
assert(typeof DeleteCustomLogSourceRequest$ === "object");
assert(typeof DeleteCustomLogSourceResponse$ === "object");
assert(typeof DeleteDataLakeExceptionSubscriptionRequest$ === "object");
assert(typeof DeleteDataLakeExceptionSubscriptionResponse$ === "object");
assert(typeof DeleteDataLakeOrganizationConfigurationRequest$ === "object");
assert(typeof DeleteDataLakeOrganizationConfigurationResponse$ === "object");
assert(typeof DeleteDataLakeRequest$ === "object");
assert(typeof DeleteDataLakeResponse$ === "object");
assert(typeof DeleteSubscriberNotificationRequest$ === "object");
assert(typeof DeleteSubscriberNotificationResponse$ === "object");
assert(typeof DeleteSubscriberRequest$ === "object");
assert(typeof DeleteSubscriberResponse$ === "object");
assert(typeof DeregisterDataLakeDelegatedAdministratorRequest$ === "object");
assert(typeof DeregisterDataLakeDelegatedAdministratorResponse$ === "object");
assert(typeof GetDataLakeExceptionSubscriptionRequest$ === "object");
assert(typeof GetDataLakeExceptionSubscriptionResponse$ === "object");
assert(typeof GetDataLakeOrganizationConfigurationRequest$ === "object");
assert(typeof GetDataLakeOrganizationConfigurationResponse$ === "object");
assert(typeof GetDataLakeSourcesRequest$ === "object");
assert(typeof GetDataLakeSourcesResponse$ === "object");
assert(typeof GetSubscriberRequest$ === "object");
assert(typeof GetSubscriberResponse$ === "object");
assert(typeof HttpsNotificationConfiguration$ === "object");
assert(typeof ListDataLakeExceptionsRequest$ === "object");
assert(typeof ListDataLakeExceptionsResponse$ === "object");
assert(typeof ListDataLakesRequest$ === "object");
assert(typeof ListDataLakesResponse$ === "object");
assert(typeof ListLogSourcesRequest$ === "object");
assert(typeof ListLogSourcesResponse$ === "object");
assert(typeof ListSubscribersRequest$ === "object");
assert(typeof ListSubscribersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LogSource$ === "object");
assert(typeof LogSourceResource$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof RegisterDataLakeDelegatedAdministratorRequest$ === "object");
assert(typeof RegisterDataLakeDelegatedAdministratorResponse$ === "object");
assert(typeof SqsNotificationConfiguration$ === "object");
assert(typeof SubscriberResource$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDataLakeExceptionSubscriptionRequest$ === "object");
assert(typeof UpdateDataLakeExceptionSubscriptionResponse$ === "object");
assert(typeof UpdateDataLakeRequest$ === "object");
assert(typeof UpdateDataLakeResponse$ === "object");
assert(typeof UpdateSubscriberNotificationRequest$ === "object");
assert(typeof UpdateSubscriberNotificationResponse$ === "object");
assert(typeof UpdateSubscriberRequest$ === "object");
assert(typeof UpdateSubscriberResponse$ === "object");
// enums
assert(typeof AccessType === "object");
assert(typeof AwsLogSourceName === "object");
assert(typeof DataLakeStatus === "object");
assert(typeof HttpMethod === "object");
assert(typeof SourceCollectionStatus === "object");
assert(typeof SubscriberStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SecurityLakeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof SecurityLakeServiceException);
assert(typeof BadRequestException$ === "object");
assert(ConflictException.prototype instanceof SecurityLakeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SecurityLakeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SecurityLakeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof SecurityLakeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(SecurityLakeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetDataLakeSources === "function");
assert(typeof paginateListDataLakeExceptions === "function");
assert(typeof paginateListLogSources === "function");
assert(typeof paginateListSubscribers === "function");
console.log(`SecurityLake index test passed.`);
