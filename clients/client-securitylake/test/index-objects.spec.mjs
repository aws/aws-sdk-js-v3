import {
  AccessDeniedException,
  AccessType,
  AwsLogSourceName,
  BadRequestException,
  ConflictException,
  CreateAwsLogSourceCommand,
  CreateCustomLogSourceCommand,
  CreateDataLakeCommand,
  CreateDataLakeExceptionSubscriptionCommand,
  CreateDataLakeOrganizationConfigurationCommand,
  CreateSubscriberCommand,
  CreateSubscriberNotificationCommand,
  DataLakeStatus,
  DeleteAwsLogSourceCommand,
  DeleteCustomLogSourceCommand,
  DeleteDataLakeCommand,
  DeleteDataLakeExceptionSubscriptionCommand,
  DeleteDataLakeOrganizationConfigurationCommand,
  DeleteSubscriberCommand,
  DeleteSubscriberNotificationCommand,
  DeregisterDataLakeDelegatedAdministratorCommand,
  GetDataLakeExceptionSubscriptionCommand,
  GetDataLakeOrganizationConfigurationCommand,
  GetDataLakeSourcesCommand,
  GetSubscriberCommand,
  HttpMethod,
  InternalServerException,
  ListDataLakeExceptionsCommand,
  ListDataLakesCommand,
  ListLogSourcesCommand,
  ListSubscribersCommand,
  ListTagsForResourceCommand,
  RegisterDataLakeDelegatedAdministratorCommand,
  ResourceNotFoundException,
  SecurityLake,
  SecurityLakeClient,
  SecurityLakeServiceException,
  SourceCollectionStatus,
  SubscriberStatus,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateDataLakeCommand,
  UpdateDataLakeExceptionSubscriptionCommand,
  UpdateSubscriberCommand,
  UpdateSubscriberNotificationCommand,
  paginateGetDataLakeSources,
  paginateListDataLakeExceptions,
  paginateListLogSources,
  paginateListSubscribers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityLakeClient === "function");
assert(typeof SecurityLake === "function");
// commands
assert(typeof CreateAwsLogSourceCommand === "function");
assert(typeof CreateCustomLogSourceCommand === "function");
assert(typeof CreateDataLakeCommand === "function");
assert(typeof CreateDataLakeExceptionSubscriptionCommand === "function");
assert(typeof CreateDataLakeOrganizationConfigurationCommand === "function");
assert(typeof CreateSubscriberCommand === "function");
assert(typeof CreateSubscriberNotificationCommand === "function");
assert(typeof DeleteAwsLogSourceCommand === "function");
assert(typeof DeleteCustomLogSourceCommand === "function");
assert(typeof DeleteDataLakeCommand === "function");
assert(typeof DeleteDataLakeExceptionSubscriptionCommand === "function");
assert(typeof DeleteDataLakeOrganizationConfigurationCommand === "function");
assert(typeof DeleteSubscriberCommand === "function");
assert(typeof DeleteSubscriberNotificationCommand === "function");
assert(typeof DeregisterDataLakeDelegatedAdministratorCommand === "function");
assert(typeof GetDataLakeExceptionSubscriptionCommand === "function");
assert(typeof GetDataLakeOrganizationConfigurationCommand === "function");
assert(typeof GetDataLakeSourcesCommand === "function");
assert(typeof GetSubscriberCommand === "function");
assert(typeof ListDataLakeExceptionsCommand === "function");
assert(typeof ListDataLakesCommand === "function");
assert(typeof ListLogSourcesCommand === "function");
assert(typeof ListSubscribersCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterDataLakeDelegatedAdministratorCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDataLakeCommand === "function");
assert(typeof UpdateDataLakeExceptionSubscriptionCommand === "function");
assert(typeof UpdateSubscriberCommand === "function");
assert(typeof UpdateSubscriberNotificationCommand === "function");
// enums
assert(typeof AccessType === "object");
assert(typeof AwsLogSourceName === "object");
assert(typeof DataLakeStatus === "object");
assert(typeof HttpMethod === "object");
assert(typeof SourceCollectionStatus === "object");
assert(typeof SubscriberStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SecurityLakeServiceException);
assert(BadRequestException.prototype instanceof SecurityLakeServiceException);
assert(ConflictException.prototype instanceof SecurityLakeServiceException);
assert(InternalServerException.prototype instanceof SecurityLakeServiceException);
assert(ResourceNotFoundException.prototype instanceof SecurityLakeServiceException);
assert(ThrottlingException.prototype instanceof SecurityLakeServiceException);
assert(SecurityLakeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetDataLakeSources === "function");
assert(typeof paginateListDataLakeExceptions === "function");
assert(typeof paginateListLogSources === "function");
assert(typeof paginateListSubscribers === "function");
console.log(`SecurityLake index test passed.`);
