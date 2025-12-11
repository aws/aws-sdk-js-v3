import {
  AlreadyStreamedException,
  BulkPublishCommand,
  BulkPublishStatus,
  CognitoSync,
  CognitoSyncClient,
  CognitoSyncServiceException,
  ConcurrentModificationException,
  DeleteDatasetCommand,
  DescribeDatasetCommand,
  DescribeIdentityPoolUsageCommand,
  DescribeIdentityUsageCommand,
  DuplicateRequestException,
  GetBulkPublishDetailsCommand,
  GetCognitoEventsCommand,
  GetIdentityPoolConfigurationCommand,
  InternalErrorException,
  InvalidConfigurationException,
  InvalidLambdaFunctionOutputException,
  InvalidParameterException,
  LambdaThrottledException,
  LimitExceededException,
  ListDatasetsCommand,
  ListIdentityPoolUsageCommand,
  ListRecordsCommand,
  NotAuthorizedException,
  Operation,
  Platform,
  RegisterDeviceCommand,
  ResourceConflictException,
  ResourceNotFoundException,
  SetCognitoEventsCommand,
  SetIdentityPoolConfigurationCommand,
  StreamingStatus,
  SubscribeToDatasetCommand,
  TooManyRequestsException,
  UnsubscribeFromDatasetCommand,
  UpdateRecordsCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CognitoSyncClient === "function");
assert(typeof CognitoSync === "function");
// commands
assert(typeof BulkPublishCommand === "function");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeIdentityPoolUsageCommand === "function");
assert(typeof DescribeIdentityUsageCommand === "function");
assert(typeof GetBulkPublishDetailsCommand === "function");
assert(typeof GetCognitoEventsCommand === "function");
assert(typeof GetIdentityPoolConfigurationCommand === "function");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListIdentityPoolUsageCommand === "function");
assert(typeof ListRecordsCommand === "function");
assert(typeof RegisterDeviceCommand === "function");
assert(typeof SetCognitoEventsCommand === "function");
assert(typeof SetIdentityPoolConfigurationCommand === "function");
assert(typeof SubscribeToDatasetCommand === "function");
assert(typeof UnsubscribeFromDatasetCommand === "function");
assert(typeof UpdateRecordsCommand === "function");
// enums
assert(typeof BulkPublishStatus === "object");
assert(typeof Operation === "object");
assert(typeof Platform === "object");
assert(typeof StreamingStatus === "object");
// errors
assert(AlreadyStreamedException.prototype instanceof CognitoSyncServiceException);
assert(ConcurrentModificationException.prototype instanceof CognitoSyncServiceException);
assert(DuplicateRequestException.prototype instanceof CognitoSyncServiceException);
assert(InternalErrorException.prototype instanceof CognitoSyncServiceException);
assert(InvalidConfigurationException.prototype instanceof CognitoSyncServiceException);
assert(InvalidLambdaFunctionOutputException.prototype instanceof CognitoSyncServiceException);
assert(InvalidParameterException.prototype instanceof CognitoSyncServiceException);
assert(LambdaThrottledException.prototype instanceof CognitoSyncServiceException);
assert(LimitExceededException.prototype instanceof CognitoSyncServiceException);
assert(NotAuthorizedException.prototype instanceof CognitoSyncServiceException);
assert(ResourceConflictException.prototype instanceof CognitoSyncServiceException);
assert(ResourceNotFoundException.prototype instanceof CognitoSyncServiceException);
assert(TooManyRequestsException.prototype instanceof CognitoSyncServiceException);
assert(CognitoSyncServiceException.prototype instanceof Error);
console.log(`CognitoSync index test passed.`);
