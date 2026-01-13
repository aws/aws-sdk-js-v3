import {
  _Record$,
  AlreadyStreamedException,
  AlreadyStreamedException$,
  BulkPublish$,
  BulkPublishCommand,
  BulkPublishRequest$,
  BulkPublishResponse$,
  BulkPublishStatus,
  CognitoStreams$,
  CognitoSync,
  CognitoSyncClient,
  CognitoSyncServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  Dataset$,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetRequest$,
  DeleteDatasetResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeIdentityPoolUsage$,
  DescribeIdentityPoolUsageCommand,
  DescribeIdentityPoolUsageRequest$,
  DescribeIdentityPoolUsageResponse$,
  DescribeIdentityUsage$,
  DescribeIdentityUsageCommand,
  DescribeIdentityUsageRequest$,
  DescribeIdentityUsageResponse$,
  DuplicateRequestException,
  DuplicateRequestException$,
  GetBulkPublishDetails$,
  GetBulkPublishDetailsCommand,
  GetBulkPublishDetailsRequest$,
  GetBulkPublishDetailsResponse$,
  GetCognitoEvents$,
  GetCognitoEventsCommand,
  GetCognitoEventsRequest$,
  GetCognitoEventsResponse$,
  GetIdentityPoolConfiguration$,
  GetIdentityPoolConfigurationCommand,
  GetIdentityPoolConfigurationRequest$,
  GetIdentityPoolConfigurationResponse$,
  IdentityPoolUsage$,
  IdentityUsage$,
  InternalErrorException,
  InternalErrorException$,
  InvalidConfigurationException,
  InvalidConfigurationException$,
  InvalidLambdaFunctionOutputException,
  InvalidLambdaFunctionOutputException$,
  InvalidParameterException,
  InvalidParameterException$,
  LambdaThrottledException,
  LambdaThrottledException$,
  LimitExceededException,
  LimitExceededException$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListIdentityPoolUsage$,
  ListIdentityPoolUsageCommand,
  ListIdentityPoolUsageRequest$,
  ListIdentityPoolUsageResponse$,
  ListRecords$,
  ListRecordsCommand,
  ListRecordsRequest$,
  ListRecordsResponse$,
  NotAuthorizedException,
  NotAuthorizedException$,
  Operation,
  Platform,
  PushSync$,
  RecordPatch$,
  RegisterDevice$,
  RegisterDeviceCommand,
  RegisterDeviceRequest$,
  RegisterDeviceResponse$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SetCognitoEvents$,
  SetCognitoEventsCommand,
  SetCognitoEventsRequest$,
  SetIdentityPoolConfiguration$,
  SetIdentityPoolConfigurationCommand,
  SetIdentityPoolConfigurationRequest$,
  SetIdentityPoolConfigurationResponse$,
  StreamingStatus,
  SubscribeToDataset$,
  SubscribeToDatasetCommand,
  SubscribeToDatasetRequest$,
  SubscribeToDatasetResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnsubscribeFromDataset$,
  UnsubscribeFromDatasetCommand,
  UnsubscribeFromDatasetRequest$,
  UnsubscribeFromDatasetResponse$,
  UpdateRecords$,
  UpdateRecordsCommand,
  UpdateRecordsRequest$,
  UpdateRecordsResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CognitoSyncClient === "function");
assert(typeof CognitoSync === "function");
// commands
assert(typeof BulkPublishCommand === "function");
assert(typeof BulkPublish$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeIdentityPoolUsageCommand === "function");
assert(typeof DescribeIdentityPoolUsage$ === "object");
assert(typeof DescribeIdentityUsageCommand === "function");
assert(typeof DescribeIdentityUsage$ === "object");
assert(typeof GetBulkPublishDetailsCommand === "function");
assert(typeof GetBulkPublishDetails$ === "object");
assert(typeof GetCognitoEventsCommand === "function");
assert(typeof GetCognitoEvents$ === "object");
assert(typeof GetIdentityPoolConfigurationCommand === "function");
assert(typeof GetIdentityPoolConfiguration$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListIdentityPoolUsageCommand === "function");
assert(typeof ListIdentityPoolUsage$ === "object");
assert(typeof ListRecordsCommand === "function");
assert(typeof ListRecords$ === "object");
assert(typeof RegisterDeviceCommand === "function");
assert(typeof RegisterDevice$ === "object");
assert(typeof SetCognitoEventsCommand === "function");
assert(typeof SetCognitoEvents$ === "object");
assert(typeof SetIdentityPoolConfigurationCommand === "function");
assert(typeof SetIdentityPoolConfiguration$ === "object");
assert(typeof SubscribeToDatasetCommand === "function");
assert(typeof SubscribeToDataset$ === "object");
assert(typeof UnsubscribeFromDatasetCommand === "function");
assert(typeof UnsubscribeFromDataset$ === "object");
assert(typeof UpdateRecordsCommand === "function");
assert(typeof UpdateRecords$ === "object");
// structural schemas
assert(typeof BulkPublishRequest$ === "object");
assert(typeof BulkPublishResponse$ === "object");
assert(typeof CognitoStreams$ === "object");
assert(typeof Dataset$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteDatasetResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeIdentityPoolUsageRequest$ === "object");
assert(typeof DescribeIdentityPoolUsageResponse$ === "object");
assert(typeof DescribeIdentityUsageRequest$ === "object");
assert(typeof DescribeIdentityUsageResponse$ === "object");
assert(typeof GetBulkPublishDetailsRequest$ === "object");
assert(typeof GetBulkPublishDetailsResponse$ === "object");
assert(typeof GetCognitoEventsRequest$ === "object");
assert(typeof GetCognitoEventsResponse$ === "object");
assert(typeof GetIdentityPoolConfigurationRequest$ === "object");
assert(typeof GetIdentityPoolConfigurationResponse$ === "object");
assert(typeof IdentityPoolUsage$ === "object");
assert(typeof IdentityUsage$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListIdentityPoolUsageRequest$ === "object");
assert(typeof ListIdentityPoolUsageResponse$ === "object");
assert(typeof ListRecordsRequest$ === "object");
assert(typeof ListRecordsResponse$ === "object");
assert(typeof PushSync$ === "object");
assert(typeof _Record$ === "object");
assert(typeof RecordPatch$ === "object");
assert(typeof RegisterDeviceRequest$ === "object");
assert(typeof RegisterDeviceResponse$ === "object");
assert(typeof SetCognitoEventsRequest$ === "object");
assert(typeof SetIdentityPoolConfigurationRequest$ === "object");
assert(typeof SetIdentityPoolConfigurationResponse$ === "object");
assert(typeof SubscribeToDatasetRequest$ === "object");
assert(typeof SubscribeToDatasetResponse$ === "object");
assert(typeof UnsubscribeFromDatasetRequest$ === "object");
assert(typeof UnsubscribeFromDatasetResponse$ === "object");
assert(typeof UpdateRecordsRequest$ === "object");
assert(typeof UpdateRecordsResponse$ === "object");
// enums
assert(typeof BulkPublishStatus === "object");
assert(typeof Operation === "object");
assert(typeof Platform === "object");
assert(typeof StreamingStatus === "object");
// errors
assert(AlreadyStreamedException.prototype instanceof CognitoSyncServiceException);
assert(typeof AlreadyStreamedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CognitoSyncServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(DuplicateRequestException.prototype instanceof CognitoSyncServiceException);
assert(typeof DuplicateRequestException$ === "object");
assert(InternalErrorException.prototype instanceof CognitoSyncServiceException);
assert(typeof InternalErrorException$ === "object");
assert(InvalidConfigurationException.prototype instanceof CognitoSyncServiceException);
assert(typeof InvalidConfigurationException$ === "object");
assert(InvalidLambdaFunctionOutputException.prototype instanceof CognitoSyncServiceException);
assert(typeof InvalidLambdaFunctionOutputException$ === "object");
assert(InvalidParameterException.prototype instanceof CognitoSyncServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(LambdaThrottledException.prototype instanceof CognitoSyncServiceException);
assert(typeof LambdaThrottledException$ === "object");
assert(LimitExceededException.prototype instanceof CognitoSyncServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotAuthorizedException.prototype instanceof CognitoSyncServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(ResourceConflictException.prototype instanceof CognitoSyncServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CognitoSyncServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof CognitoSyncServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(CognitoSyncServiceException.prototype instanceof Error);
console.log(`CognitoSync index test passed.`);
