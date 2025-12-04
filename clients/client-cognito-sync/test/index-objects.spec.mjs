import {
  BulkPublishCommand,
  BulkPublishStatus,
  CognitoSync,
  CognitoSyncClient,
  CognitoSyncServiceException,
  DeleteDatasetCommand,
  DescribeDatasetCommand,
  DescribeIdentityPoolUsageCommand,
  DescribeIdentityUsageCommand,
  GetBulkPublishDetailsCommand,
  GetCognitoEventsCommand,
  GetIdentityPoolConfigurationCommand,
  ListDatasetsCommand,
  ListIdentityPoolUsageCommand,
  ListRecordsCommand,
  Operation,
  Platform,
  RegisterDeviceCommand,
  SetCognitoEventsCommand,
  SetIdentityPoolConfigurationCommand,
  StreamingStatus,
  SubscribeToDatasetCommand,
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
assert(CognitoSyncServiceException.prototype instanceof Error);
console.log(`CognitoSync index test passed.`);
