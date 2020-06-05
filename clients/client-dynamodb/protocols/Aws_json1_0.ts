import {
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput
} from "../commands/BatchGetItemCommand";
import {
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput
} from "../commands/BatchWriteItemCommand";
import {
  CreateBackupCommandInput,
  CreateBackupCommandOutput
} from "../commands/CreateBackupCommand";
import {
  CreateGlobalTableCommandInput,
  CreateGlobalTableCommandOutput
} from "../commands/CreateGlobalTableCommand";
import {
  CreateTableCommandInput,
  CreateTableCommandOutput
} from "../commands/CreateTableCommand";
import {
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput
} from "../commands/DeleteBackupCommand";
import {
  DeleteItemCommandInput,
  DeleteItemCommandOutput
} from "../commands/DeleteItemCommand";
import {
  DeleteTableCommandInput,
  DeleteTableCommandOutput
} from "../commands/DeleteTableCommand";
import {
  DescribeBackupCommandInput,
  DescribeBackupCommandOutput
} from "../commands/DescribeBackupCommand";
import {
  DescribeContinuousBackupsCommandInput,
  DescribeContinuousBackupsCommandOutput
} from "../commands/DescribeContinuousBackupsCommand";
import {
  DescribeContributorInsightsCommandInput,
  DescribeContributorInsightsCommandOutput
} from "../commands/DescribeContributorInsightsCommand";
import {
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput
} from "../commands/DescribeEndpointsCommand";
import {
  DescribeGlobalTableCommandInput,
  DescribeGlobalTableCommandOutput
} from "../commands/DescribeGlobalTableCommand";
import {
  DescribeGlobalTableSettingsCommandInput,
  DescribeGlobalTableSettingsCommandOutput
} from "../commands/DescribeGlobalTableSettingsCommand";
import {
  DescribeLimitsCommandInput,
  DescribeLimitsCommandOutput
} from "../commands/DescribeLimitsCommand";
import {
  DescribeTableCommandInput,
  DescribeTableCommandOutput
} from "../commands/DescribeTableCommand";
import {
  DescribeTableReplicaAutoScalingCommandInput,
  DescribeTableReplicaAutoScalingCommandOutput
} from "../commands/DescribeTableReplicaAutoScalingCommand";
import {
  DescribeTimeToLiveCommandInput,
  DescribeTimeToLiveCommandOutput
} from "../commands/DescribeTimeToLiveCommand";
import {
  GetItemCommandInput,
  GetItemCommandOutput
} from "../commands/GetItemCommand";
import {
  ListBackupsCommandInput,
  ListBackupsCommandOutput
} from "../commands/ListBackupsCommand";
import {
  ListContributorInsightsCommandInput,
  ListContributorInsightsCommandOutput
} from "../commands/ListContributorInsightsCommand";
import {
  ListGlobalTablesCommandInput,
  ListGlobalTablesCommandOutput
} from "../commands/ListGlobalTablesCommand";
import {
  ListTablesCommandInput,
  ListTablesCommandOutput
} from "../commands/ListTablesCommand";
import {
  ListTagsOfResourceCommandInput,
  ListTagsOfResourceCommandOutput
} from "../commands/ListTagsOfResourceCommand";
import {
  PutItemCommandInput,
  PutItemCommandOutput
} from "../commands/PutItemCommand";
import {
  QueryCommandInput,
  QueryCommandOutput
} from "../commands/QueryCommand";
import {
  RestoreTableFromBackupCommandInput,
  RestoreTableFromBackupCommandOutput
} from "../commands/RestoreTableFromBackupCommand";
import {
  RestoreTableToPointInTimeCommandInput,
  RestoreTableToPointInTimeCommandOutput
} from "../commands/RestoreTableToPointInTimeCommand";
import { ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput
} from "../commands/TransactGetItemsCommand";
import {
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput
} from "../commands/TransactWriteItemsCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateContinuousBackupsCommandInput,
  UpdateContinuousBackupsCommandOutput
} from "../commands/UpdateContinuousBackupsCommand";
import {
  UpdateContributorInsightsCommandInput,
  UpdateContributorInsightsCommandOutput
} from "../commands/UpdateContributorInsightsCommand";
import {
  UpdateGlobalTableCommandInput,
  UpdateGlobalTableCommandOutput
} from "../commands/UpdateGlobalTableCommand";
import {
  UpdateGlobalTableSettingsCommandInput,
  UpdateGlobalTableSettingsCommandOutput
} from "../commands/UpdateGlobalTableSettingsCommand";
import {
  UpdateItemCommandInput,
  UpdateItemCommandOutput
} from "../commands/UpdateItemCommand";
import {
  UpdateTableCommandInput,
  UpdateTableCommandOutput
} from "../commands/UpdateTableCommand";
import {
  UpdateTableReplicaAutoScalingCommandInput,
  UpdateTableReplicaAutoScalingCommandOutput
} from "../commands/UpdateTableReplicaAutoScalingCommand";
import {
  UpdateTimeToLiveCommandInput,
  UpdateTimeToLiveCommandOutput
} from "../commands/UpdateTimeToLiveCommand";
import {
  ArchivalSummary,
  AttributeDefinition,
  AttributeValue,
  AttributeValueUpdate,
  AutoScalingPolicyDescription,
  AutoScalingPolicyUpdate,
  AutoScalingSettingsDescription,
  AutoScalingSettingsUpdate,
  AutoScalingTargetTrackingScalingPolicyConfigurationDescription,
  AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  BackupDescription,
  BackupDetails,
  BackupInUseException,
  BackupNotFoundException,
  BackupSummary,
  BatchGetItemInput,
  BatchGetItemOutput,
  BatchResponse,
  BatchWriteItemInput,
  BatchWriteItemOutput,
  BillingModeSummary,
  CancellationReason,
  Capacity,
  Condition,
  ConditionCheck,
  ConditionalCheckFailedException,
  ConsumedCapacity,
  ContinuousBackupsDescription,
  ContinuousBackupsUnavailableException,
  ContributorInsightsSummary,
  CreateBackupInput,
  CreateBackupOutput,
  CreateGlobalSecondaryIndexAction,
  CreateGlobalTableInput,
  CreateGlobalTableOutput,
  CreateReplicaAction,
  CreateReplicationGroupMemberAction,
  CreateTableInput,
  CreateTableOutput,
  Delete,
  DeleteBackupInput,
  DeleteBackupOutput,
  DeleteGlobalSecondaryIndexAction,
  DeleteItemInput,
  DeleteItemOutput,
  DeleteReplicaAction,
  DeleteReplicationGroupMemberAction,
  DeleteRequest,
  DeleteTableInput,
  DeleteTableOutput,
  DescribeBackupInput,
  DescribeBackupOutput,
  DescribeContinuousBackupsInput,
  DescribeContinuousBackupsOutput,
  DescribeContributorInsightsInput,
  DescribeContributorInsightsOutput,
  DescribeEndpointsRequest,
  DescribeEndpointsResponse,
  DescribeGlobalTableInput,
  DescribeGlobalTableOutput,
  DescribeGlobalTableSettingsInput,
  DescribeGlobalTableSettingsOutput,
  DescribeLimitsInput,
  DescribeLimitsOutput,
  DescribeTableInput,
  DescribeTableOutput,
  DescribeTableReplicaAutoScalingInput,
  DescribeTableReplicaAutoScalingOutput,
  DescribeTimeToLiveInput,
  DescribeTimeToLiveOutput,
  Endpoint,
  ExpectedAttributeValue,
  FailureException,
  Get,
  GetItemInput,
  GetItemOutput,
  GlobalSecondaryIndex,
  GlobalSecondaryIndexAutoScalingUpdate,
  GlobalSecondaryIndexDescription,
  GlobalSecondaryIndexInfo,
  GlobalSecondaryIndexUpdate,
  GlobalTable,
  GlobalTableAlreadyExistsException,
  GlobalTableDescription,
  GlobalTableGlobalSecondaryIndexSettingsUpdate,
  GlobalTableNotFoundException,
  IdempotentParameterMismatchException,
  IndexNotFoundException,
  InternalServerError,
  InvalidEndpointException,
  InvalidRestoreTimeException,
  ItemCollectionMetrics,
  ItemCollectionSizeLimitExceededException,
  ItemResponse,
  Key,
  KeySchema,
  KeySchemaElement,
  KeysAndAttributes,
  LimitExceededException,
  ListBackupsInput,
  ListBackupsOutput,
  ListContributorInsightsInput,
  ListContributorInsightsOutput,
  ListGlobalTablesInput,
  ListGlobalTablesOutput,
  ListTablesInput,
  ListTablesOutput,
  ListTagsOfResourceInput,
  ListTagsOfResourceOutput,
  LocalSecondaryIndex,
  LocalSecondaryIndexDescription,
  LocalSecondaryIndexInfo,
  PointInTimeRecoveryDescription,
  PointInTimeRecoverySpecification,
  PointInTimeRecoveryUnavailableException,
  Projection,
  ProvisionedThroughput,
  ProvisionedThroughputDescription,
  ProvisionedThroughputExceededException,
  ProvisionedThroughputOverride,
  Put,
  PutItemInput,
  PutItemOutput,
  PutRequest,
  QueryInput,
  QueryOutput,
  Replica,
  ReplicaAlreadyExistsException,
  ReplicaAutoScalingDescription,
  ReplicaAutoScalingUpdate,
  ReplicaDescription,
  ReplicaGlobalSecondaryIndex,
  ReplicaGlobalSecondaryIndexAutoScalingDescription,
  ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  ReplicaGlobalSecondaryIndexDescription,
  ReplicaGlobalSecondaryIndexSettingsDescription,
  ReplicaGlobalSecondaryIndexSettingsUpdate,
  ReplicaNotFoundException,
  ReplicaSettingsDescription,
  ReplicaSettingsUpdate,
  ReplicaUpdate,
  ReplicationGroupUpdate,
  RequestLimitExceeded,
  ResourceInUseException,
  ResourceNotFoundException,
  RestoreSummary,
  RestoreTableFromBackupInput,
  RestoreTableFromBackupOutput,
  RestoreTableToPointInTimeInput,
  RestoreTableToPointInTimeOutput,
  SSEDescription,
  SSESpecification,
  ScanInput,
  ScanOutput,
  SourceTableDetails,
  SourceTableFeatureDetails,
  StreamSpecification,
  TableAlreadyExistsException,
  TableAutoScalingDescription,
  TableDescription,
  TableInUseException,
  TableNotFoundException,
  Tag,
  TagResourceInput,
  TimeToLiveDescription,
  TimeToLiveSpecification,
  TransactGetItem,
  TransactGetItemsInput,
  TransactGetItemsOutput,
  TransactWriteItem,
  TransactWriteItemsInput,
  TransactWriteItemsOutput,
  TransactionCanceledException,
  TransactionConflictException,
  TransactionInProgressException,
  UntagResourceInput,
  Update,
  UpdateContinuousBackupsInput,
  UpdateContinuousBackupsOutput,
  UpdateContributorInsightsInput,
  UpdateContributorInsightsOutput,
  UpdateGlobalSecondaryIndexAction,
  UpdateGlobalTableInput,
  UpdateGlobalTableOutput,
  UpdateGlobalTableSettingsInput,
  UpdateGlobalTableSettingsOutput,
  UpdateItemInput,
  UpdateItemOutput,
  UpdateReplicationGroupMemberAction,
  UpdateTableInput,
  UpdateTableOutput,
  UpdateTableReplicaAutoScalingInput,
  UpdateTableReplicaAutoScalingOutput,
  UpdateTimeToLiveInput,
  UpdateTimeToLiveOutput,
  WriteRequest
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_0BatchGetItemCommand = async (
  input: BatchGetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.BatchGetItem"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0BatchGetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0BatchWriteItemCommand = async (
  input: BatchWriteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.BatchWriteItem"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0BatchWriteItemInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.CreateBackup"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateGlobalTableCommand = async (
  input: CreateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.CreateGlobalTable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CreateGlobalTableInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateTableCommand = async (
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.CreateTable"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DeleteBackup"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteBackupInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteItemCommand = async (
  input: DeleteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DeleteItem"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteTableCommand = async (
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DeleteTable"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeBackupCommand = async (
  input: DescribeBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeBackup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeBackupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeContinuousBackupsCommand = async (
  input: DescribeContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeContinuousBackups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeContinuousBackupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeContributorInsightsCommand = async (
  input: DescribeContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeContributorInsights"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeContributorInsightsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeEndpointsCommand = async (
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeEndpoints"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeEndpointsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeGlobalTableCommand = async (
  input: DescribeGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeGlobalTable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeGlobalTableInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeGlobalTableSettingsCommand = async (
  input: DescribeGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeGlobalTableSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeGlobalTableSettingsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeLimitsCommand = async (
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeLimits"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeLimitsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeTableCommand = async (
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeTable"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (
  input: DescribeTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeTableReplicaAutoScalingInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeTimeToLiveCommand = async (
  input: DescribeTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.DescribeTimeToLive"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeTimeToLiveInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetItemCommand = async (
  input: GetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.GetItem"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListBackupsCommand = async (
  input: ListBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.ListBackups"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListBackupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListContributorInsightsCommand = async (
  input: ListContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.ListContributorInsights"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListContributorInsightsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListGlobalTablesCommand = async (
  input: ListGlobalTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.ListGlobalTables"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListGlobalTablesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTablesCommand = async (
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.ListTables"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTablesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsOfResourceCommand = async (
  input: ListTagsOfResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.ListTagsOfResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListTagsOfResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PutItemCommand = async (
  input: PutItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.PutItem"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PutItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0QueryCommand = async (
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.Query"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0QueryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RestoreTableFromBackupCommand = async (
  input: RestoreTableFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.RestoreTableFromBackup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RestoreTableFromBackupInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RestoreTableToPointInTimeCommand = async (
  input: RestoreTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.RestoreTableToPointInTime"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RestoreTableToPointInTimeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ScanCommand = async (
  input: ScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.Scan"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ScanInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TransactGetItemsCommand = async (
  input: TransactGetItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.TransactGetItems"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0TransactGetItemsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TransactWriteItemsCommand = async (
  input: TransactWriteItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.TransactWriteItems"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0TransactWriteItemsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UntagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateContinuousBackupsCommand = async (
  input: UpdateContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateContinuousBackups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateContinuousBackupsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateContributorInsightsCommand = async (
  input: UpdateContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateContributorInsights"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateContributorInsightsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateGlobalTableCommand = async (
  input: UpdateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateGlobalTable"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateGlobalTableInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateGlobalTableSettingsCommand = async (
  input: UpdateGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateGlobalTableSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateGlobalTableSettingsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateItemCommand = async (
  input: UpdateItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateItem"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateItemInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTableCommand = async (
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateTable"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateTableInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (
  input: UpdateTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateTableReplicaAutoScaling"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateTableReplicaAutoScalingInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTimeToLiveCommand = async (
  input: UpdateTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "DynamoDB_20120810.UpdateTimeToLive"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateTimeToLiveInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0BatchGetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0BatchGetItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchGetItemOutput(data, context);
  const response: BatchGetItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetItemOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchGetItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0BatchWriteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0BatchWriteItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0BatchWriteItemOutput(data, context);
  const response: BatchWriteItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchWriteItemOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0BatchWriteItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateBackupOutput(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      response = {
        ...(await deserializeAws_json1_0BackupInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      response = {
        ...(await deserializeAws_json1_0TableInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0CreateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CreateGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateGlobalTableOutput(data, context);
  const response: CreateGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGlobalTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateGlobalTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0CreateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CreateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateTableOutput(data, context);
  const response: CreateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteBackupOutput(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      response = {
        ...(await deserializeAws_json1_0BackupInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      response = {
        ...(await deserializeAws_json1_0BackupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DeleteItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeleteItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteItemOutput(data, context);
  const response: DeleteItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteItemOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      response = {
        ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      response = {
        ...(await deserializeAws_json1_0TransactionConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DeleteTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeleteTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteTableOutput(data, context);
  const response: DeleteTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeBackupOutput(data, context);
  const response: DescribeBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      response = {
        ...(await deserializeAws_json1_0BackupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeContinuousBackupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeContinuousBackupsOutput(
    data,
    context
  );
  const response: DescribeContinuousBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeContinuousBackupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeContinuousBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeContributorInsightsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeContributorInsightsOutput(
    data,
    context
  );
  const response: DescribeContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeContributorInsightsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeContributorInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
  const response: DescribeEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEndpointsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeGlobalTableCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeGlobalTableOutput(data, context);
  const response: DescribeGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGlobalTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeGlobalTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeGlobalTableSettingsOutput(
    data,
    context
  );
  const response: DescribeGlobalTableSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeGlobalTableSettingsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeGlobalTableSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeLimitsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeLimitsOutput(data, context);
  const response: DescribeLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLimitsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeLimitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeTableOutput(data, context);
  const response: DescribeTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput(
    data,
    context
  );
  const response: DescribeTableReplicaAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTableReplicaAutoScalingOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeTimeToLiveCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeTimeToLiveOutput(data, context);
  const response: DescribeTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTimeToLiveOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeTimeToLiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0GetItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetItemOutput(data, context);
  const response: GetItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetItemOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListBackupsOutput(data, context);
  const response: ListBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListContributorInsightsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListContributorInsightsOutput(data, context);
  const response: ListContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListContributorInsightsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListContributorInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListGlobalTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListGlobalTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListGlobalTablesOutput(data, context);
  const response: ListGlobalTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGlobalTablesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListGlobalTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListTablesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListTablesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTablesOutput(data, context);
  const response: ListTablesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTablesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTablesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListTagsOfResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListTagsOfResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsOfResourceOutput(data, context);
  const response: ListTagsOfResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsOfResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsOfResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0PutItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0PutItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PutItemOutput(data, context);
  const response: PutItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutItemOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PutItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      response = {
        ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0QueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0QueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0QueryOutput(data, context);
  const response: QueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "QueryOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0QueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RestoreTableFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RestoreTableFromBackupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RestoreTableFromBackupOutput(data, context);
  const response: RestoreTableFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreTableFromBackupOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RestoreTableFromBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupInUseException":
    case "com.amazonaws.dynamodb#BackupInUseException":
      response = {
        ...(await deserializeAws_json1_0BackupInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb#BackupNotFoundException":
      response = {
        ...(await deserializeAws_json1_0BackupNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      response = {
        ...(await deserializeAws_json1_0TableInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RestoreTableToPointInTimeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RestoreTableToPointInTimeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RestoreTableToPointInTimeOutput(
    data,
    context
  );
  const response: RestoreTableToPointInTimeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreTableToPointInTimeOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RestoreTableToPointInTimeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
      response = {
        ...(await deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
      response = {
        ...(await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb#TableAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableInUseException":
    case "com.amazonaws.dynamodb#TableInUseException":
      response = {
        ...(await deserializeAws_json1_0TableInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ScanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ScanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ScanOutput(data, context);
  const response: ScanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ScanOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ScanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0TransactGetItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TransactGetItemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TransactGetItemsOutput(data, context);
  const response: TransactGetItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TransactGetItemsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TransactGetItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      response = {
        ...(await deserializeAws_json1_0TransactionCanceledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0TransactWriteItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TransactWriteItemsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TransactWriteItemsOutput(data, context);
  const response: TransactWriteItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TransactWriteItemsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TransactWriteItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb#TransactionCanceledException":
      response = {
        ...(await deserializeAws_json1_0TransactionCanceledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb#TransactionInProgressException":
      response = {
        ...(await deserializeAws_json1_0TransactionInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateContinuousBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateContinuousBackupsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateContinuousBackupsOutput(data, context);
  const response: UpdateContinuousBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateContinuousBackupsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateContinuousBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
      response = {
        ...(await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateContributorInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateContributorInsightsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateContributorInsightsOutput(
    data,
    context
  );
  const response: UpdateContributorInsightsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateContributorInsightsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateContributorInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateGlobalTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateGlobalTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateGlobalTableOutput(data, context);
  const response: UpdateGlobalTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGlobalTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateGlobalTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb#TableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0TableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateGlobalTableSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateGlobalTableSettingsOutput(
    data,
    context
  );
  const response: UpdateGlobalTableSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGlobalTableSettingsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateGlobalTableSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
      response = {
        ...(await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb#IndexNotFoundException":
      response = {
        ...(await deserializeAws_json1_0IndexNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb#ReplicaNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateItemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateItemOutput(data, context);
  const response: UpdateItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateItemOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
      response = {
        ...(await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0RequestLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb#TransactionConflictException":
      response = {
        ...(await deserializeAws_json1_0TransactionConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateTableCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateTableCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTableOutput(data, context);
  const response: UpdateTableCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTableOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTableCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput(
    data,
    context
  );
  const response: UpdateTableReplicaAutoScalingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTableReplicaAutoScalingOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UpdateTimeToLiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTimeToLiveOutput(data, context);
  const response: UpdateTimeToLiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTimeToLiveOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTimeToLiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb#InternalServerError":
      response = {
        ...(await deserializeAws_json1_0InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEndpointException":
    case "com.amazonaws.dynamodb#InvalidEndpointException":
      response = {
        ...(await deserializeAws_json1_0InvalidEndpointExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_0LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_0ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_0BackupInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0BackupInUseException(
    body,
    context
  );
  const contents: BackupInUseException = {
    name: "BackupInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0BackupNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0BackupNotFoundException(
    body,
    context
  );
  const contents: BackupNotFoundException = {
    name: "BackupNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConditionalCheckFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConditionalCheckFailedException(
    body,
    context
  );
  const contents: ConditionalCheckFailedException = {
    name: "ConditionalCheckFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContinuousBackupsUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ContinuousBackupsUnavailableException(
    body,
    context
  );
  const contents: ContinuousBackupsUnavailableException = {
    name: "ContinuousBackupsUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalTableAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0GlobalTableAlreadyExistsException(
    body,
    context
  );
  const contents: GlobalTableAlreadyExistsException = {
    name: "GlobalTableAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlobalTableNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0GlobalTableNotFoundException(
    body,
    context
  );
  const contents: GlobalTableNotFoundException = {
    name: "GlobalTableNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0IdempotentParameterMismatchException(
    body,
    context
  );
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0IndexNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IndexNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0IndexNotFoundException(
    body,
    context
  );
  const contents: IndexNotFoundException = {
    name: "IndexNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerError(
    body,
    context
  );
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidEndpointException(
    body,
    context
  );
  const contents: InvalidEndpointException = {
    name: "InvalidEndpointException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRestoreTimeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidRestoreTimeException(
    body,
    context
  );
  const contents: InvalidRestoreTimeException = {
    name: "InvalidRestoreTimeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ItemCollectionSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(
    body,
    context
  );
  const contents: ItemCollectionSizeLimitExceededException = {
    name: "ItemCollectionSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PointInTimeRecoveryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(
    body,
    context
  );
  const contents: PointInTimeRecoveryUnavailableException = {
    name: "PointInTimeRecoveryUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ProvisionedThroughputExceededException(
    body,
    context
  );
  const contents: ProvisionedThroughputExceededException = {
    name: "ProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicaAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ReplicaAlreadyExistsException(
    body,
    context
  );
  const contents: ReplicaAlreadyExistsException = {
    name: "ReplicaAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ReplicaNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicaNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ReplicaNotFoundException(
    body,
    context
  );
  const contents: ReplicaNotFoundException = {
    name: "ReplicaNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0RequestLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0RequestLimitExceeded(
    body,
    context
  );
  const contents: RequestLimitExceeded = {
    name: "RequestLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TableAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TableAlreadyExistsException(
    body,
    context
  );
  const contents: TableAlreadyExistsException = {
    name: "TableAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TableInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TableInUseException(
    body,
    context
  );
  const contents: TableInUseException = {
    name: "TableInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TableNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TableNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TableNotFoundException(
    body,
    context
  );
  const contents: TableNotFoundException = {
    name: "TableNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TransactionCanceledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCanceledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TransactionCanceledException(
    body,
    context
  );
  const contents: TransactionCanceledException = {
    name: "TransactionCanceledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TransactionConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TransactionConflictException(
    body,
    context
  );
  const contents: TransactionConflictException = {
    name: "TransactionConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TransactionInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TransactionInProgressException(
    body,
    context
  );
  const contents: TransactionInProgressException = {
    name: "TransactionInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0AttributeDefinition = (
  input: AttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.AttributeType !== undefined && {
      AttributeType: input.AttributeType
    })
  };
};

const serializeAws_json1_0AttributeDefinitions = (
  input: AttributeDefinition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0AttributeDefinition(entry, context)
  );
};

const serializeAws_json1_0AttributeNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0AttributeUpdates = (
  input: { [key: string]: AttributeValueUpdate },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: AttributeValueUpdate },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_0AttributeValueUpdate(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0AttributeValue = (
  input: AttributeValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.B !== undefined && { B: context.base64Encoder(input.B) }),
    ...(input.BS !== undefined && {
      BS: serializeAws_json1_0BinarySetAttributeValue(input.BS, context)
    }),
    ...(input.N !== undefined && { N: input.N }),
    ...(input.NS !== undefined && {
      NS: serializeAws_json1_0NumberSetAttributeValue(input.NS, context)
    }),
    ...(input.S !== undefined && { S: input.S }),
    ...(input.SS !== undefined && {
      SS: serializeAws_json1_0StringSetAttributeValue(input.SS, context)
    })
  };
};

const serializeAws_json1_0AttributeValueList = (
  input: AttributeValue[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0AttributeValue(entry, context));
};

const serializeAws_json1_0AttributeValueUpdate = (
  input: AttributeValueUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Value !== undefined && {
      Value: serializeAws_json1_0AttributeValue(input.Value, context)
    })
  };
};

const serializeAws_json1_0AutoScalingPolicyUpdate = (
  input: AutoScalingPolicyUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyName !== undefined && { PolicyName: input.PolicyName }),
    ...(input.TargetTrackingScalingPolicyConfiguration !== undefined && {
      TargetTrackingScalingPolicyConfiguration: serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(
        input.TargetTrackingScalingPolicyConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_0AutoScalingSettingsUpdate = (
  input: AutoScalingSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingDisabled !== undefined && {
      AutoScalingDisabled: input.AutoScalingDisabled
    }),
    ...(input.AutoScalingRoleArn !== undefined && {
      AutoScalingRoleArn: input.AutoScalingRoleArn
    }),
    ...(input.MaximumUnits !== undefined && {
      MaximumUnits: input.MaximumUnits
    }),
    ...(input.MinimumUnits !== undefined && {
      MinimumUnits: input.MinimumUnits
    }),
    ...(input.ScalingPolicyUpdate !== undefined && {
      ScalingPolicyUpdate: serializeAws_json1_0AutoScalingPolicyUpdate(
        input.ScalingPolicyUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (
  input: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DisableScaleIn !== undefined && {
      DisableScaleIn: input.DisableScaleIn
    }),
    ...(input.ScaleInCooldown !== undefined && {
      ScaleInCooldown: input.ScaleInCooldown
    }),
    ...(input.ScaleOutCooldown !== undefined && {
      ScaleOutCooldown: input.ScaleOutCooldown
    }),
    ...(input.TargetValue !== undefined && { TargetValue: input.TargetValue })
  };
};

const serializeAws_json1_0BatchGetItemInput = (
  input: BatchGetItemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestItems !== undefined && {
      RequestItems: serializeAws_json1_0BatchGetRequestMap(
        input.RequestItems,
        context
      )
    })
  };
};

const serializeAws_json1_0BatchGetRequestMap = (
  input: { [key: string]: KeysAndAttributes },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: KeysAndAttributes },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_0KeysAndAttributes(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0BatchWriteItemInput = (
  input: BatchWriteItemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestItems !== undefined && {
      RequestItems: serializeAws_json1_0BatchWriteItemRequestMap(
        input.RequestItems,
        context
      )
    })
  };
};

const serializeAws_json1_0BatchWriteItemRequestMap = (
  input: { [key: string]: WriteRequest[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: WriteRequest[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_0WriteRequests(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0BinarySetAttributeValue = (
  input: Uint8Array[],
  context: __SerdeContext
): any => {
  return input.map(entry => context.base64Encoder(entry));
};

const serializeAws_json1_0Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeValueList !== undefined && {
      AttributeValueList: serializeAws_json1_0AttributeValueList(
        input.AttributeValueList,
        context
      )
    }),
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    })
  };
};

const serializeAws_json1_0ConditionCheck = (
  input: ConditionCheck,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConditionExpression !== undefined && {
      ConditionExpression: input.ConditionExpression
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.ExpressionAttributeValues !== undefined && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ReturnValuesOnConditionCheckFailure !== undefined && {
      ReturnValuesOnConditionCheckFailure:
        input.ReturnValuesOnConditionCheckFailure
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0CreateBackupInput = (
  input: CreateBackupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupName !== undefined && { BackupName: input.BackupName }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0CreateGlobalSecondaryIndexAction = (
  input: CreateGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.KeySchema !== undefined && {
      KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)
    }),
    ...(input.Projection !== undefined && {
      Projection: serializeAws_json1_0Projection(input.Projection, context)
    }),
    ...(input.ProvisionedThroughput !== undefined && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      )
    })
  };
};

const serializeAws_json1_0CreateGlobalTableInput = (
  input: CreateGlobalTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableName !== undefined && {
      GlobalTableName: input.GlobalTableName
    }),
    ...(input.ReplicationGroup !== undefined && {
      ReplicationGroup: serializeAws_json1_0ReplicaList(
        input.ReplicationGroup,
        context
      )
    })
  };
};

const serializeAws_json1_0CreateReplicaAction = (
  input: CreateReplicaAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0CreateReplicationGroupMemberAction = (
  input: CreateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes !== undefined && {
      GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      )
    }),
    ...(input.KMSMasterKeyId !== undefined && {
      KMSMasterKeyId: input.KMSMasterKeyId
    }),
    ...(input.ProvisionedThroughputOverride !== undefined && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      )
    }),
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0CreateTableInput = (
  input: CreateTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeDefinitions !== undefined && {
      AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(
        input.AttributeDefinitions,
        context
      )
    }),
    ...(input.BillingMode !== undefined && { BillingMode: input.BillingMode }),
    ...(input.GlobalSecondaryIndexes !== undefined && {
      GlobalSecondaryIndexes: serializeAws_json1_0GlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      )
    }),
    ...(input.KeySchema !== undefined && {
      KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)
    }),
    ...(input.LocalSecondaryIndexes !== undefined && {
      LocalSecondaryIndexes: serializeAws_json1_0LocalSecondaryIndexList(
        input.LocalSecondaryIndexes,
        context
      )
    }),
    ...(input.ProvisionedThroughput !== undefined && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      )
    }),
    ...(input.SSESpecification !== undefined && {
      SSESpecification: serializeAws_json1_0SSESpecification(
        input.SSESpecification,
        context
      )
    }),
    ...(input.StreamSpecification !== undefined && {
      StreamSpecification: serializeAws_json1_0StreamSpecification(
        input.StreamSpecification,
        context
      )
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_0TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_0Delete = (
  input: Delete,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConditionExpression !== undefined && {
      ConditionExpression: input.ConditionExpression
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.ExpressionAttributeValues !== undefined && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ReturnValuesOnConditionCheckFailure !== undefined && {
      ReturnValuesOnConditionCheckFailure:
        input.ReturnValuesOnConditionCheckFailure
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DeleteBackupInput = (
  input: DeleteBackupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupArn !== undefined && { BackupArn: input.BackupArn })
  };
};

const serializeAws_json1_0DeleteGlobalSecondaryIndexAction = (
  input: DeleteGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName })
  };
};

const serializeAws_json1_0DeleteItemInput = (
  input: DeleteItemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expected !== undefined && {
      Expected: serializeAws_json1_0ExpectedAttributeMap(
        input.Expected,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ReturnValues !== undefined && {
      ReturnValues: input.ReturnValues
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DeleteReplicaAction = (
  input: DeleteReplicaAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0DeleteReplicationGroupMemberAction = (
  input: DeleteReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0DeleteRequest = (
  input: DeleteRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    })
  };
};

const serializeAws_json1_0DeleteTableInput = (
  input: DeleteTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DescribeBackupInput = (
  input: DescribeBackupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupArn !== undefined && { BackupArn: input.BackupArn })
  };
};

const serializeAws_json1_0DescribeContinuousBackupsInput = (
  input: DescribeContinuousBackupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DescribeContributorInsightsInput = (
  input: DescribeContributorInsightsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DescribeEndpointsRequest = (
  input: DescribeEndpointsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0DescribeGlobalTableInput = (
  input: DescribeGlobalTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableName !== undefined && {
      GlobalTableName: input.GlobalTableName
    })
  };
};

const serializeAws_json1_0DescribeGlobalTableSettingsInput = (
  input: DescribeGlobalTableSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableName !== undefined && {
      GlobalTableName: input.GlobalTableName
    })
  };
};

const serializeAws_json1_0DescribeLimitsInput = (
  input: DescribeLimitsInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_0DescribeTableInput = (
  input: DescribeTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DescribeTableReplicaAutoScalingInput = (
  input: DescribeTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0DescribeTimeToLiveInput = (
  input: DescribeTimeToLiveInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0ExpectedAttributeMap = (
  input: { [key: string]: ExpectedAttributeValue },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: ExpectedAttributeValue },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_0ExpectedAttributeValue(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0ExpectedAttributeValue = (
  input: ExpectedAttributeValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeValueList !== undefined && {
      AttributeValueList: serializeAws_json1_0AttributeValueList(
        input.AttributeValueList,
        context
      )
    }),
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    }),
    ...(input.Exists !== undefined && { Exists: input.Exists }),
    ...(input.Value !== undefined && {
      Value: serializeAws_json1_0AttributeValue(input.Value, context)
    })
  };
};

const serializeAws_json1_0ExpressionAttributeNameMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_0ExpressionAttributeValueMap = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0FilterConditionMap = (
  input: { [key: string]: Condition },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: Condition }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_0Condition(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0Get = (input: Get, context: __SerdeContext): any => {
  return {
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ProjectionExpression !== undefined && {
      ProjectionExpression: input.ProjectionExpression
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0GetItemInput = (
  input: GetItemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributesToGet !== undefined && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(
        input.AttributesToGet,
        context
      )
    }),
    ...(input.ConsistentRead !== undefined && {
      ConsistentRead: input.ConsistentRead
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ProjectionExpression !== undefined && {
      ProjectionExpression: input.ProjectionExpression
    }),
    ...(input.ReturnConsumedCapacity !== undefined && {
      ReturnConsumedCapacity: input.ReturnConsumedCapacity
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0GlobalSecondaryIndex = (
  input: GlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.KeySchema !== undefined && {
      KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)
    }),
    ...(input.Projection !== undefined && {
      Projection: serializeAws_json1_0Projection(input.Projection, context)
    }),
    ...(input.ProvisionedThroughput !== undefined && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      )
    })
  };
};

const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = (
  input: GlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined && {
      ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = (
  input: GlobalSecondaryIndexAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context)
  );
};

const serializeAws_json1_0GlobalSecondaryIndexList = (
  input: GlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0GlobalSecondaryIndex(entry, context)
  );
};

const serializeAws_json1_0GlobalSecondaryIndexUpdate = (
  input: GlobalSecondaryIndexUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Create !== undefined && {
      Create: serializeAws_json1_0CreateGlobalSecondaryIndexAction(
        input.Create,
        context
      )
    }),
    ...(input.Delete !== undefined && {
      Delete: serializeAws_json1_0DeleteGlobalSecondaryIndexAction(
        input.Delete,
        context
      )
    }),
    ...(input.Update !== undefined && {
      Update: serializeAws_json1_0UpdateGlobalSecondaryIndexAction(
        input.Update,
        context
      )
    })
  };
};

const serializeAws_json1_0GlobalSecondaryIndexUpdateList = (
  input: GlobalSecondaryIndexUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context)
  );
};

const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !==
      undefined && {
      ProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingSettingsUpdate,
        context
      )
    }),
    ...(input.ProvisionedWriteCapacityUnits !== undefined && {
      ProvisionedWriteCapacityUnits: input.ProvisionedWriteCapacityUnits
    })
  };
};

const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(
      entry,
      context
    )
  );
};

const serializeAws_json1_0Key = (input: Key, context: __SerdeContext): any => {
  return {
    ...(input.HashKeyElement !== undefined && {
      HashKeyElement: serializeAws_json1_0AttributeValue(
        input.HashKeyElement,
        context
      )
    }),
    ...(input.RangeKeyElement !== undefined && {
      RangeKeyElement: serializeAws_json1_0AttributeValue(
        input.RangeKeyElement,
        context
      )
    })
  };
};

const serializeAws_json1_0KeyList = (
  input: Key[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0Key(entry, context));
};

const serializeAws_json1_0KeysAndAttributes = (
  input: KeysAndAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributesToGet !== undefined && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(
        input.AttributesToGet,
        context
      )
    }),
    ...(input.ConsistentRead !== undefined && {
      ConsistentRead: input.ConsistentRead
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.Keys !== undefined && {
      Keys: serializeAws_json1_0KeyList(input.Keys, context)
    }),
    ...(input.ProjectionExpression !== undefined && {
      ProjectionExpression: input.ProjectionExpression
    })
  };
};

const serializeAws_json1_0KeySchema = (
  input: KeySchema,
  context: __SerdeContext
): any => {
  return {
    ...(input.HashKeyElement !== undefined && {
      HashKeyElement: serializeAws_json1_0KeySchemaElement(
        input.HashKeyElement,
        context
      )
    }),
    ...(input.RangeKeyElement !== undefined && {
      RangeKeyElement: serializeAws_json1_0KeySchemaElement(
        input.RangeKeyElement,
        context
      )
    })
  };
};

const serializeAws_json1_0KeySchemaElement = (
  input: KeySchemaElement,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.AttributeType !== undefined && {
      AttributeType: input.AttributeType
    })
  };
};

const serializeAws_json1_0ListBackupsInput = (
  input: ListBackupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupType !== undefined && { BackupType: input.BackupType }),
    ...(input.ExclusiveStartBackupArn !== undefined && {
      ExclusiveStartBackupArn: input.ExclusiveStartBackupArn
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.TableName !== undefined && { TableName: input.TableName }),
    ...(input.TimeRangeLowerBound !== undefined && {
      TimeRangeLowerBound: Math.round(
        input.TimeRangeLowerBound.getTime() / 1000
      )
    }),
    ...(input.TimeRangeUpperBound !== undefined && {
      TimeRangeUpperBound: Math.round(
        input.TimeRangeUpperBound.getTime() / 1000
      )
    })
  };
};

const serializeAws_json1_0ListContributorInsightsInput = (
  input: ListContributorInsightsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0ListGlobalTablesInput = (
  input: ListGlobalTablesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExclusiveStartGlobalTableName !== undefined && {
      ExclusiveStartGlobalTableName: input.ExclusiveStartGlobalTableName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0ListTablesInput = (
  input: ListTablesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExclusiveStartTableName !== undefined && {
      ExclusiveStartTableName: input.ExclusiveStartTableName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit })
  };
};

const serializeAws_json1_0ListTagsOfResourceInput = (
  input: ListTagsOfResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_0LocalSecondaryIndex = (
  input: LocalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.KeySchema !== undefined && {
      KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context)
    }),
    ...(input.Projection !== undefined && {
      Projection: serializeAws_json1_0Projection(input.Projection, context)
    })
  };
};

const serializeAws_json1_0LocalSecondaryIndexList = (
  input: LocalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0LocalSecondaryIndex(entry, context)
  );
};

const serializeAws_json1_0NonKeyAttributeNameList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0NumberSetAttributeValue = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0PointInTimeRecoverySpecification = (
  input: PointInTimeRecoverySpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.PointInTimeRecoveryEnabled !== undefined && {
      PointInTimeRecoveryEnabled: input.PointInTimeRecoveryEnabled
    })
  };
};

const serializeAws_json1_0Projection = (
  input: Projection,
  context: __SerdeContext
): any => {
  return {
    ...(input.NonKeyAttributes !== undefined && {
      NonKeyAttributes: serializeAws_json1_0NonKeyAttributeNameList(
        input.NonKeyAttributes,
        context
      )
    }),
    ...(input.ProjectionType !== undefined && {
      ProjectionType: input.ProjectionType
    })
  };
};

const serializeAws_json1_0ProvisionedThroughput = (
  input: ProvisionedThroughput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadCapacityUnits !== undefined && {
      ReadCapacityUnits: input.ReadCapacityUnits
    }),
    ...(input.WriteCapacityUnits !== undefined && {
      WriteCapacityUnits: input.WriteCapacityUnits
    })
  };
};

const serializeAws_json1_0ProvisionedThroughputOverride = (
  input: ProvisionedThroughputOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadCapacityUnits !== undefined && {
      ReadCapacityUnits: input.ReadCapacityUnits
    })
  };
};

const serializeAws_json1_0Put = (input: Put, context: __SerdeContext): any => {
  return {
    ...(input.ConditionExpression !== undefined && {
      ConditionExpression: input.ConditionExpression
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.ExpressionAttributeValues !== undefined && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      )
    }),
    ...(input.Item !== undefined && {
      Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context)
    }),
    ...(input.ReturnValuesOnConditionCheckFailure !== undefined && {
      ReturnValuesOnConditionCheckFailure:
        input.ReturnValuesOnConditionCheckFailure
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0PutItemInput = (
  input: PutItemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConditionExpression !== undefined && {
      ConditionExpression: input.ConditionExpression
    }),
    ...(input.ConditionalOperator !== undefined && {
      ConditionalOperator: input.ConditionalOperator
    }),
    ...(input.Expected !== undefined && {
      Expected: serializeAws_json1_0ExpectedAttributeMap(
        input.Expected,
        context
      )
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.ExpressionAttributeValues !== undefined && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      )
    }),
    ...(input.Item !== undefined && {
      Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context)
    }),
    ...(input.ReturnConsumedCapacity !== undefined && {
      ReturnConsumedCapacity: input.ReturnConsumedCapacity
    }),
    ...(input.ReturnItemCollectionMetrics !== undefined && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics
    }),
    ...(input.ReturnValues !== undefined && {
      ReturnValues: input.ReturnValues
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0PutItemInputAttributeMap = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const serializeAws_json1_0PutRequest = (
  input: PutRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Item !== undefined && {
      Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context)
    })
  };
};

const serializeAws_json1_0QueryInput = (
  input: QueryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributesToGet !== undefined && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(
        input.AttributesToGet,
        context
      )
    }),
    ...(input.ConsistentRead !== undefined && {
      ConsistentRead: input.ConsistentRead
    }),
    ...(input.Count !== undefined && { Count: input.Count }),
    ...(input.ExclusiveStartKey !== undefined && {
      ExclusiveStartKey: serializeAws_json1_0Key(
        input.ExclusiveStartKey,
        context
      )
    }),
    ...(input.HashKeyValue !== undefined && {
      HashKeyValue: serializeAws_json1_0AttributeValue(
        input.HashKeyValue,
        context
      )
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.RangeKeyCondition !== undefined && {
      RangeKeyCondition: serializeAws_json1_0Condition(
        input.RangeKeyCondition,
        context
      )
    }),
    ...(input.ScanIndexForward !== undefined && {
      ScanIndexForward: input.ScanIndexForward
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0Replica = (
  input: Replica,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0ReplicaAutoScalingUpdate = (
  input: ReplicaAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName !== undefined && { RegionName: input.RegionName }),
    ...(input.ReplicaGlobalSecondaryIndexUpdates !== undefined && {
      ReplicaGlobalSecondaryIndexUpdates: serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(
        input.ReplicaGlobalSecondaryIndexUpdates,
        context
      )
    }),
    ...(input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== undefined && {
      ReplicaProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ReplicaProvisionedReadCapacityAutoScalingUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_0ReplicaAutoScalingUpdateList = (
  input: ReplicaAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context)
  );
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndex = (
  input: ReplicaGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughputOverride !== undefined && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      )
    })
  };
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.ProvisionedReadCapacityAutoScalingUpdate !== undefined && {
      ProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedReadCapacityAutoScalingUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(
      entry,
      context
    )
  );
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexList = (
  input: ReplicaGlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context)
  );
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.ProvisionedReadCapacityAutoScalingSettingsUpdate !==
      undefined && {
      ProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedReadCapacityAutoScalingSettingsUpdate,
        context
      )
    }),
    ...(input.ProvisionedReadCapacityUnits !== undefined && {
      ProvisionedReadCapacityUnits: input.ProvisionedReadCapacityUnits
    })
  };
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(
      entry,
      context
    )
  );
};

const serializeAws_json1_0ReplicaList = (
  input: Replica[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0Replica(entry, context));
};

const serializeAws_json1_0ReplicaSettingsUpdate = (
  input: ReplicaSettingsUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.RegionName !== undefined && { RegionName: input.RegionName }),
    ...(input.ReplicaGlobalSecondaryIndexSettingsUpdate !== undefined && {
      ReplicaGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(
        input.ReplicaGlobalSecondaryIndexSettingsUpdate,
        context
      )
    }),
    ...(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !==
      undefined && {
      ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate,
        context
      )
    }),
    ...(input.ReplicaProvisionedReadCapacityUnits !== undefined && {
      ReplicaProvisionedReadCapacityUnits:
        input.ReplicaProvisionedReadCapacityUnits
    })
  };
};

const serializeAws_json1_0ReplicaSettingsUpdateList = (
  input: ReplicaSettingsUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0ReplicaSettingsUpdate(entry, context)
  );
};

const serializeAws_json1_0ReplicationGroupUpdate = (
  input: ReplicationGroupUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Create !== undefined && {
      Create: serializeAws_json1_0CreateReplicationGroupMemberAction(
        input.Create,
        context
      )
    }),
    ...(input.Delete !== undefined && {
      Delete: serializeAws_json1_0DeleteReplicationGroupMemberAction(
        input.Delete,
        context
      )
    }),
    ...(input.Update !== undefined && {
      Update: serializeAws_json1_0UpdateReplicationGroupMemberAction(
        input.Update,
        context
      )
    })
  };
};

const serializeAws_json1_0ReplicationGroupUpdateList = (
  input: ReplicationGroupUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0ReplicationGroupUpdate(entry, context)
  );
};

const serializeAws_json1_0ReplicaUpdate = (
  input: ReplicaUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Create !== undefined && {
      Create: serializeAws_json1_0CreateReplicaAction(input.Create, context)
    }),
    ...(input.Delete !== undefined && {
      Delete: serializeAws_json1_0DeleteReplicaAction(input.Delete, context)
    })
  };
};

const serializeAws_json1_0ReplicaUpdateList = (
  input: ReplicaUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0ReplicaUpdate(entry, context));
};

const serializeAws_json1_0RestoreTableFromBackupInput = (
  input: RestoreTableFromBackupInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupArn !== undefined && { BackupArn: input.BackupArn }),
    ...(input.BillingModeOverride !== undefined && {
      BillingModeOverride: input.BillingModeOverride
    }),
    ...(input.GlobalSecondaryIndexOverride !== undefined && {
      GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(
        input.GlobalSecondaryIndexOverride,
        context
      )
    }),
    ...(input.LocalSecondaryIndexOverride !== undefined && {
      LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(
        input.LocalSecondaryIndexOverride,
        context
      )
    }),
    ...(input.ProvisionedThroughputOverride !== undefined && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughputOverride,
        context
      )
    }),
    ...(input.TargetTableName !== undefined && {
      TargetTableName: input.TargetTableName
    })
  };
};

const serializeAws_json1_0RestoreTableToPointInTimeInput = (
  input: RestoreTableToPointInTimeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BillingModeOverride !== undefined && {
      BillingModeOverride: input.BillingModeOverride
    }),
    ...(input.GlobalSecondaryIndexOverride !== undefined && {
      GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(
        input.GlobalSecondaryIndexOverride,
        context
      )
    }),
    ...(input.LocalSecondaryIndexOverride !== undefined && {
      LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(
        input.LocalSecondaryIndexOverride,
        context
      )
    }),
    ...(input.ProvisionedThroughputOverride !== undefined && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughputOverride,
        context
      )
    }),
    ...(input.RestoreDateTime !== undefined && {
      RestoreDateTime: Math.round(input.RestoreDateTime.getTime() / 1000)
    }),
    ...(input.SourceTableName !== undefined && {
      SourceTableName: input.SourceTableName
    }),
    ...(input.TargetTableName !== undefined && {
      TargetTableName: input.TargetTableName
    }),
    ...(input.UseLatestRestorableTime !== undefined && {
      UseLatestRestorableTime: input.UseLatestRestorableTime
    })
  };
};

const serializeAws_json1_0ScanInput = (
  input: ScanInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributesToGet !== undefined && {
      AttributesToGet: serializeAws_json1_0AttributeNameList(
        input.AttributesToGet,
        context
      )
    }),
    ...(input.Count !== undefined && { Count: input.Count }),
    ...(input.ExclusiveStartKey !== undefined && {
      ExclusiveStartKey: serializeAws_json1_0Key(
        input.ExclusiveStartKey,
        context
      )
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.ScanFilter !== undefined && {
      ScanFilter: serializeAws_json1_0FilterConditionMap(
        input.ScanFilter,
        context
      )
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0SSESpecification = (
  input: SSESpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.KMSMasterKeyId !== undefined && {
      KMSMasterKeyId: input.KMSMasterKeyId
    }),
    ...(input.SSEType !== undefined && { SSEType: input.SSEType })
  };
};

const serializeAws_json1_0StreamSpecification = (
  input: StreamSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamEnabled !== undefined && {
      StreamEnabled: input.StreamEnabled
    }),
    ...(input.StreamViewType !== undefined && {
      StreamViewType: input.StreamViewType
    })
  };
};

const serializeAws_json1_0StringSetAttributeValue = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_0TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0Tag(entry, context));
};

const serializeAws_json1_0TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_0TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_0TimeToLiveSpecification = (
  input: TimeToLiveSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled })
  };
};

const serializeAws_json1_0TransactGetItem = (
  input: TransactGetItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.Get !== undefined && {
      Get: serializeAws_json1_0Get(input.Get, context)
    })
  };
};

const serializeAws_json1_0TransactGetItemList = (
  input: TransactGetItem[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0TransactGetItem(entry, context)
  );
};

const serializeAws_json1_0TransactGetItemsInput = (
  input: TransactGetItemsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReturnConsumedCapacity !== undefined && {
      ReturnConsumedCapacity: input.ReturnConsumedCapacity
    }),
    ...(input.TransactItems !== undefined && {
      TransactItems: serializeAws_json1_0TransactGetItemList(
        input.TransactItems,
        context
      )
    })
  };
};

const serializeAws_json1_0TransactWriteItem = (
  input: TransactWriteItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConditionCheck !== undefined && {
      ConditionCheck: serializeAws_json1_0ConditionCheck(
        input.ConditionCheck,
        context
      )
    }),
    ...(input.Delete !== undefined && {
      Delete: serializeAws_json1_0Delete(input.Delete, context)
    }),
    ...(input.Put !== undefined && {
      Put: serializeAws_json1_0Put(input.Put, context)
    }),
    ...(input.Update !== undefined && {
      Update: serializeAws_json1_0Update(input.Update, context)
    })
  };
};

const serializeAws_json1_0TransactWriteItemList = (
  input: TransactWriteItem[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_0TransactWriteItem(entry, context)
  );
};

const serializeAws_json1_0TransactWriteItemsInput = (
  input: TransactWriteItemsInput,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ReturnConsumedCapacity !== undefined && {
      ReturnConsumedCapacity: input.ReturnConsumedCapacity
    }),
    ...(input.ReturnItemCollectionMetrics !== undefined && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics
    }),
    ...(input.TransactItems !== undefined && {
      TransactItems: serializeAws_json1_0TransactWriteItemList(
        input.TransactItems,
        context
      )
    })
  };
};

const serializeAws_json1_0UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_0Update = (
  input: Update,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConditionExpression !== undefined && {
      ConditionExpression: input.ConditionExpression
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.ExpressionAttributeValues !== undefined && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ReturnValuesOnConditionCheckFailure !== undefined && {
      ReturnValuesOnConditionCheckFailure:
        input.ReturnValuesOnConditionCheckFailure
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName }),
    ...(input.UpdateExpression !== undefined && {
      UpdateExpression: input.UpdateExpression
    })
  };
};

const serializeAws_json1_0UpdateContinuousBackupsInput = (
  input: UpdateContinuousBackupsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.PointInTimeRecoverySpecification !== undefined && {
      PointInTimeRecoverySpecification: serializeAws_json1_0PointInTimeRecoverySpecification(
        input.PointInTimeRecoverySpecification,
        context
      )
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0UpdateContributorInsightsInput = (
  input: UpdateContributorInsightsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContributorInsightsAction !== undefined && {
      ContributorInsightsAction: input.ContributorInsightsAction
    }),
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0UpdateGlobalSecondaryIndexAction = (
  input: UpdateGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName !== undefined && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughput !== undefined && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      )
    })
  };
};

const serializeAws_json1_0UpdateGlobalTableInput = (
  input: UpdateGlobalTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableName !== undefined && {
      GlobalTableName: input.GlobalTableName
    }),
    ...(input.ReplicaUpdates !== undefined && {
      ReplicaUpdates: serializeAws_json1_0ReplicaUpdateList(
        input.ReplicaUpdates,
        context
      )
    })
  };
};

const serializeAws_json1_0UpdateGlobalTableSettingsInput = (
  input: UpdateGlobalTableSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalTableBillingMode !== undefined && {
      GlobalTableBillingMode: input.GlobalTableBillingMode
    }),
    ...(input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== undefined && {
      GlobalTableGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(
        input.GlobalTableGlobalSecondaryIndexSettingsUpdate,
        context
      )
    }),
    ...(input.GlobalTableName !== undefined && {
      GlobalTableName: input.GlobalTableName
    }),
    ...(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !==
      undefined && {
      GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate,
        context
      )
    }),
    ...(input.GlobalTableProvisionedWriteCapacityUnits !== undefined && {
      GlobalTableProvisionedWriteCapacityUnits:
        input.GlobalTableProvisionedWriteCapacityUnits
    }),
    ...(input.ReplicaSettingsUpdate !== undefined && {
      ReplicaSettingsUpdate: serializeAws_json1_0ReplicaSettingsUpdateList(
        input.ReplicaSettingsUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_0UpdateItemInput = (
  input: UpdateItemInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeUpdates !== undefined && {
      AttributeUpdates: serializeAws_json1_0AttributeUpdates(
        input.AttributeUpdates,
        context
      )
    }),
    ...(input.ConditionExpression !== undefined && {
      ConditionExpression: input.ConditionExpression
    }),
    ...(input.ConditionalOperator !== undefined && {
      ConditionalOperator: input.ConditionalOperator
    }),
    ...(input.Expected !== undefined && {
      Expected: serializeAws_json1_0ExpectedAttributeMap(
        input.Expected,
        context
      )
    }),
    ...(input.ExpressionAttributeNames !== undefined && {
      ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(
        input.ExpressionAttributeNames,
        context
      )
    }),
    ...(input.ExpressionAttributeValues !== undefined && {
      ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(
        input.ExpressionAttributeValues,
        context
      )
    }),
    ...(input.Key !== undefined && {
      Key: serializeAws_json1_0Key(input.Key, context)
    }),
    ...(input.ReturnConsumedCapacity !== undefined && {
      ReturnConsumedCapacity: input.ReturnConsumedCapacity
    }),
    ...(input.ReturnItemCollectionMetrics !== undefined && {
      ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics
    }),
    ...(input.ReturnValues !== undefined && {
      ReturnValues: input.ReturnValues
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName }),
    ...(input.UpdateExpression !== undefined && {
      UpdateExpression: input.UpdateExpression
    })
  };
};

const serializeAws_json1_0UpdateReplicationGroupMemberAction = (
  input: UpdateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes !== undefined && {
      GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      )
    }),
    ...(input.KMSMasterKeyId !== undefined && {
      KMSMasterKeyId: input.KMSMasterKeyId
    }),
    ...(input.ProvisionedThroughputOverride !== undefined && {
      ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      )
    }),
    ...(input.RegionName !== undefined && { RegionName: input.RegionName })
  };
};

const serializeAws_json1_0UpdateTableInput = (
  input: UpdateTableInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeDefinitions !== undefined && {
      AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(
        input.AttributeDefinitions,
        context
      )
    }),
    ...(input.BillingMode !== undefined && { BillingMode: input.BillingMode }),
    ...(input.GlobalSecondaryIndexUpdates !== undefined && {
      GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexUpdateList(
        input.GlobalSecondaryIndexUpdates,
        context
      )
    }),
    ...(input.ProvisionedThroughput !== undefined && {
      ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      )
    }),
    ...(input.ReplicaUpdates !== undefined && {
      ReplicaUpdates: serializeAws_json1_0ReplicationGroupUpdateList(
        input.ReplicaUpdates,
        context
      )
    }),
    ...(input.SSESpecification !== undefined && {
      SSESpecification: serializeAws_json1_0SSESpecification(
        input.SSESpecification,
        context
      )
    }),
    ...(input.StreamSpecification !== undefined && {
      StreamSpecification: serializeAws_json1_0StreamSpecification(
        input.StreamSpecification,
        context
      )
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0UpdateTableReplicaAutoScalingInput = (
  input: UpdateTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexUpdates !== undefined && {
      GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(
        input.GlobalSecondaryIndexUpdates,
        context
      )
    }),
    ...(input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined && {
      ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(
        input.ProvisionedWriteCapacityAutoScalingUpdate,
        context
      )
    }),
    ...(input.ReplicaUpdates !== undefined && {
      ReplicaUpdates: serializeAws_json1_0ReplicaAutoScalingUpdateList(
        input.ReplicaUpdates,
        context
      )
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_0UpdateTimeToLiveInput = (
  input: UpdateTimeToLiveInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.TableName !== undefined && { TableName: input.TableName }),
    ...(input.TimeToLiveSpecification !== undefined && {
      TimeToLiveSpecification: serializeAws_json1_0TimeToLiveSpecification(
        input.TimeToLiveSpecification,
        context
      )
    })
  };
};

const serializeAws_json1_0WriteRequest = (
  input: WriteRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteRequest !== undefined && {
      DeleteRequest: serializeAws_json1_0DeleteRequest(
        input.DeleteRequest,
        context
      )
    }),
    ...(input.PutRequest !== undefined && {
      PutRequest: serializeAws_json1_0PutRequest(input.PutRequest, context)
    })
  };
};

const serializeAws_json1_0WriteRequests = (
  input: WriteRequest[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0WriteRequest(entry, context));
};

const deserializeAws_json1_0ArchivalSummary = (
  output: any,
  context: __SerdeContext
): ArchivalSummary => {
  return {
    __type: "ArchivalSummary",
    ArchivalBackupArn:
      output.ArchivalBackupArn !== undefined &&
      output.ArchivalBackupArn !== null
        ? output.ArchivalBackupArn
        : undefined,
    ArchivalDateTime:
      output.ArchivalDateTime !== undefined && output.ArchivalDateTime !== null
        ? new Date(Math.round(output.ArchivalDateTime * 1000))
        : undefined,
    ArchivalReason:
      output.ArchivalReason !== undefined && output.ArchivalReason !== null
        ? output.ArchivalReason
        : undefined
  } as any;
};

const deserializeAws_json1_0AttributeDefinition = (
  output: any,
  context: __SerdeContext
): AttributeDefinition => {
  return {
    __type: "AttributeDefinition",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null
        ? output.AttributeName
        : undefined,
    AttributeType:
      output.AttributeType !== undefined && output.AttributeType !== null
        ? output.AttributeType
        : undefined
  } as any;
};

const deserializeAws_json1_0AttributeDefinitions = (
  output: any,
  context: __SerdeContext
): AttributeDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeDefinition(entry, context)
  );
};

const deserializeAws_json1_0AttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0AttributeNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0AttributeValue = (
  output: any,
  context: __SerdeContext
): AttributeValue => {
  return {
    __type: "AttributeValue",
    B:
      output.B !== undefined && output.B !== null
        ? context.base64Decoder(output.B)
        : undefined,
    BS:
      output.BS !== undefined && output.BS !== null
        ? deserializeAws_json1_0BinarySetAttributeValue(output.BS, context)
        : undefined,
    N: output.N !== undefined && output.N !== null ? output.N : undefined,
    NS:
      output.NS !== undefined && output.NS !== null
        ? deserializeAws_json1_0NumberSetAttributeValue(output.NS, context)
        : undefined,
    S: output.S !== undefined && output.S !== null ? output.S : undefined,
    SS:
      output.SS !== undefined && output.SS !== null
        ? deserializeAws_json1_0StringSetAttributeValue(output.SS, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  return {
    __type: "AutoScalingPolicyDescription",
    PolicyName:
      output.PolicyName !== undefined && output.PolicyName !== null
        ? output.PolicyName
        : undefined,
    TargetTrackingScalingPolicyConfiguration:
      output.TargetTrackingScalingPolicyConfiguration !== undefined &&
      output.TargetTrackingScalingPolicyConfiguration !== null
        ? deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(
            output.TargetTrackingScalingPolicyConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingPolicyDescriptionList = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AutoScalingPolicyDescription(entry, context)
  );
};

const deserializeAws_json1_0AutoScalingSettingsDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingSettingsDescription => {
  return {
    __type: "AutoScalingSettingsDescription",
    AutoScalingDisabled:
      output.AutoScalingDisabled !== undefined &&
      output.AutoScalingDisabled !== null
        ? output.AutoScalingDisabled
        : undefined,
    AutoScalingRoleArn:
      output.AutoScalingRoleArn !== undefined &&
      output.AutoScalingRoleArn !== null
        ? output.AutoScalingRoleArn
        : undefined,
    MaximumUnits:
      output.MaximumUnits !== undefined && output.MaximumUnits !== null
        ? output.MaximumUnits
        : undefined,
    MinimumUnits:
      output.MinimumUnits !== undefined && output.MinimumUnits !== null
        ? output.MinimumUnits
        : undefined,
    ScalingPolicies:
      output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
        ? deserializeAws_json1_0AutoScalingPolicyDescriptionList(
            output.ScalingPolicies,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingTargetTrackingScalingPolicyConfigurationDescription => {
  return {
    __type: "AutoScalingTargetTrackingScalingPolicyConfigurationDescription",
    DisableScaleIn:
      output.DisableScaleIn !== undefined && output.DisableScaleIn !== null
        ? output.DisableScaleIn
        : undefined,
    ScaleInCooldown:
      output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null
        ? output.ScaleInCooldown
        : undefined,
    ScaleOutCooldown:
      output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null
        ? output.ScaleOutCooldown
        : undefined,
    TargetValue:
      output.TargetValue !== undefined && output.TargetValue !== null
        ? output.TargetValue
        : undefined
  } as any;
};

const deserializeAws_json1_0BackupDescription = (
  output: any,
  context: __SerdeContext
): BackupDescription => {
  return {
    __type: "BackupDescription",
    BackupDetails:
      output.BackupDetails !== undefined && output.BackupDetails !== null
        ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context)
        : undefined,
    SourceTableDetails:
      output.SourceTableDetails !== undefined &&
      output.SourceTableDetails !== null
        ? deserializeAws_json1_0SourceTableDetails(
            output.SourceTableDetails,
            context
          )
        : undefined,
    SourceTableFeatureDetails:
      output.SourceTableFeatureDetails !== undefined &&
      output.SourceTableFeatureDetails !== null
        ? deserializeAws_json1_0SourceTableFeatureDetails(
            output.SourceTableFeatureDetails,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0BackupDetails = (
  output: any,
  context: __SerdeContext
): BackupDetails => {
  return {
    __type: "BackupDetails",
    BackupArn:
      output.BackupArn !== undefined && output.BackupArn !== null
        ? output.BackupArn
        : undefined,
    BackupCreationDateTime:
      output.BackupCreationDateTime !== undefined &&
      output.BackupCreationDateTime !== null
        ? new Date(Math.round(output.BackupCreationDateTime * 1000))
        : undefined,
    BackupExpiryDateTime:
      output.BackupExpiryDateTime !== undefined &&
      output.BackupExpiryDateTime !== null
        ? new Date(Math.round(output.BackupExpiryDateTime * 1000))
        : undefined,
    BackupName:
      output.BackupName !== undefined && output.BackupName !== null
        ? output.BackupName
        : undefined,
    BackupSizeBytes:
      output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null
        ? output.BackupSizeBytes
        : undefined,
    BackupStatus:
      output.BackupStatus !== undefined && output.BackupStatus !== null
        ? output.BackupStatus
        : undefined,
    BackupType:
      output.BackupType !== undefined && output.BackupType !== null
        ? output.BackupType
        : undefined
  } as any;
};

const deserializeAws_json1_0BackupInUseException = (
  output: any,
  context: __SerdeContext
): BackupInUseException => {
  return {
    __type: "BackupInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0BackupNotFoundException = (
  output: any,
  context: __SerdeContext
): BackupNotFoundException => {
  return {
    __type: "BackupNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0BackupSummaries = (
  output: any,
  context: __SerdeContext
): BackupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0BackupSummary(entry, context)
  );
};

const deserializeAws_json1_0BackupSummary = (
  output: any,
  context: __SerdeContext
): BackupSummary => {
  return {
    __type: "BackupSummary",
    BackupArn:
      output.BackupArn !== undefined && output.BackupArn !== null
        ? output.BackupArn
        : undefined,
    BackupCreationDateTime:
      output.BackupCreationDateTime !== undefined &&
      output.BackupCreationDateTime !== null
        ? new Date(Math.round(output.BackupCreationDateTime * 1000))
        : undefined,
    BackupExpiryDateTime:
      output.BackupExpiryDateTime !== undefined &&
      output.BackupExpiryDateTime !== null
        ? new Date(Math.round(output.BackupExpiryDateTime * 1000))
        : undefined,
    BackupName:
      output.BackupName !== undefined && output.BackupName !== null
        ? output.BackupName
        : undefined,
    BackupSizeBytes:
      output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null
        ? output.BackupSizeBytes
        : undefined,
    BackupStatus:
      output.BackupStatus !== undefined && output.BackupStatus !== null
        ? output.BackupStatus
        : undefined,
    BackupType:
      output.BackupType !== undefined && output.BackupType !== null
        ? output.BackupType
        : undefined,
    TableArn:
      output.TableArn !== undefined && output.TableArn !== null
        ? output.TableArn
        : undefined,
    TableId:
      output.TableId !== undefined && output.TableId !== null
        ? output.TableId
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_0BatchGetItemOutput = (
  output: any,
  context: __SerdeContext
): BatchGetItemOutput => {
  return {
    __type: "BatchGetItemOutput",
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    Responses:
      output.Responses !== undefined && output.Responses !== null
        ? deserializeAws_json1_0BatchGetResponseMap(output.Responses, context)
        : undefined,
    UnprocessedKeys:
      output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null
        ? deserializeAws_json1_0BatchGetRequestMap(
            output.UnprocessedKeys,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0BatchGetRequestMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: KeysAndAttributes } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: KeysAndAttributes },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_json1_0KeysAndAttributes(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0BatchGetResponseMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: BatchResponse } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: BatchResponse }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0BatchResponse(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0BatchResponse = (
  output: any,
  context: __SerdeContext
): BatchResponse => {
  return {
    __type: "BatchResponse",
    ConsumedCapacityUnits:
      output.ConsumedCapacityUnits !== undefined &&
      output.ConsumedCapacityUnits !== null
        ? output.ConsumedCapacityUnits
        : undefined,
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_json1_0ItemList(output.Items, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0BatchWriteItemOutput = (
  output: any,
  context: __SerdeContext
): BatchWriteItemOutput => {
  return {
    __type: "BatchWriteItemOutput",
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics !== undefined &&
      output.ItemCollectionMetrics !== null
        ? deserializeAws_json1_0ItemCollectionMetricsPerTable(
            output.ItemCollectionMetrics,
            context
          )
        : undefined,
    UnprocessedItems:
      output.UnprocessedItems !== undefined && output.UnprocessedItems !== null
        ? deserializeAws_json1_0BatchWriteItemRequestMap(
            output.UnprocessedItems,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0BatchWriteItemRequestMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: WriteRequest[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: WriteRequest[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0WriteRequests(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0BillingModeSummary = (
  output: any,
  context: __SerdeContext
): BillingModeSummary => {
  return {
    __type: "BillingModeSummary",
    BillingMode:
      output.BillingMode !== undefined && output.BillingMode !== null
        ? output.BillingMode
        : undefined,
    LastUpdateToPayPerRequestDateTime:
      output.LastUpdateToPayPerRequestDateTime !== undefined &&
      output.LastUpdateToPayPerRequestDateTime !== null
        ? new Date(Math.round(output.LastUpdateToPayPerRequestDateTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_0BinarySetAttributeValue = (
  output: any,
  context: __SerdeContext
): Uint8Array[] => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_json1_0CancellationReason = (
  output: any,
  context: __SerdeContext
): CancellationReason => {
  return {
    __type: "CancellationReason",
    Code:
      output.Code !== undefined && output.Code !== null
        ? output.Code
        : undefined,
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_json1_0AttributeMap(output.Item, context)
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0CancellationReasonList = (
  output: any,
  context: __SerdeContext
): CancellationReason[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0CancellationReason(entry, context)
  );
};

const deserializeAws_json1_0Capacity = (
  output: any,
  context: __SerdeContext
): Capacity => {
  return {
    __type: "Capacity",
    CapacityUnits:
      output.CapacityUnits !== undefined && output.CapacityUnits !== null
        ? output.CapacityUnits
        : undefined,
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined &&
      output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined,
    WriteCapacityUnits:
      output.WriteCapacityUnits !== undefined &&
      output.WriteCapacityUnits !== null
        ? output.WriteCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0ConditionalCheckFailedException = (
  output: any,
  context: __SerdeContext
): ConditionalCheckFailedException => {
  return {
    __type: "ConditionalCheckFailedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ConsumedCapacity = (
  output: any,
  context: __SerdeContext
): ConsumedCapacity => {
  return {
    __type: "ConsumedCapacity",
    CapacityUnits:
      output.CapacityUnits !== undefined && output.CapacityUnits !== null
        ? output.CapacityUnits
        : undefined,
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined &&
      output.GlobalSecondaryIndexes !== null
        ? deserializeAws_json1_0SecondaryIndexesCapacityMap(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes !== undefined &&
      output.LocalSecondaryIndexes !== null
        ? deserializeAws_json1_0SecondaryIndexesCapacityMap(
            output.LocalSecondaryIndexes,
            context
          )
        : undefined,
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined &&
      output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined,
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_json1_0Capacity(output.Table, context)
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined,
    WriteCapacityUnits:
      output.WriteCapacityUnits !== undefined &&
      output.WriteCapacityUnits !== null
        ? output.WriteCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0ConsumedCapacityMultiple = (
  output: any,
  context: __SerdeContext
): ConsumedCapacity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ConsumedCapacity(entry, context)
  );
};

const deserializeAws_json1_0ContinuousBackupsDescription = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsDescription => {
  return {
    __type: "ContinuousBackupsDescription",
    ContinuousBackupsStatus:
      output.ContinuousBackupsStatus !== undefined &&
      output.ContinuousBackupsStatus !== null
        ? output.ContinuousBackupsStatus
        : undefined,
    PointInTimeRecoveryDescription:
      output.PointInTimeRecoveryDescription !== undefined &&
      output.PointInTimeRecoveryDescription !== null
        ? deserializeAws_json1_0PointInTimeRecoveryDescription(
            output.PointInTimeRecoveryDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0ContinuousBackupsUnavailableException = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsUnavailableException => {
  return {
    __type: "ContinuousBackupsUnavailableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ContributorInsightsRuleList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0ContributorInsightsSummaries = (
  output: any,
  context: __SerdeContext
): ContributorInsightsSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ContributorInsightsSummary(entry, context)
  );
};

const deserializeAws_json1_0ContributorInsightsSummary = (
  output: any,
  context: __SerdeContext
): ContributorInsightsSummary => {
  return {
    __type: "ContributorInsightsSummary",
    ContributorInsightsStatus:
      output.ContributorInsightsStatus !== undefined &&
      output.ContributorInsightsStatus !== null
        ? output.ContributorInsightsStatus
        : undefined,
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_0CreateBackupOutput = (
  output: any,
  context: __SerdeContext
): CreateBackupOutput => {
  return {
    __type: "CreateBackupOutput",
    BackupDetails:
      output.BackupDetails !== undefined && output.BackupDetails !== null
        ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0CreateGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): CreateGlobalTableOutput => {
  return {
    __type: "CreateGlobalTableOutput",
    GlobalTableDescription:
      output.GlobalTableDescription !== undefined &&
      output.GlobalTableDescription !== null
        ? deserializeAws_json1_0GlobalTableDescription(
            output.GlobalTableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0CreateTableOutput = (
  output: any,
  context: __SerdeContext
): CreateTableOutput => {
  return {
    __type: "CreateTableOutput",
    TableDescription:
      output.TableDescription !== undefined && output.TableDescription !== null
        ? deserializeAws_json1_0TableDescription(
            output.TableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DeleteBackupOutput = (
  output: any,
  context: __SerdeContext
): DeleteBackupOutput => {
  return {
    __type: "DeleteBackupOutput",
    BackupDescription:
      output.BackupDescription !== undefined &&
      output.BackupDescription !== null
        ? deserializeAws_json1_0BackupDescription(
            output.BackupDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DeleteItemOutput = (
  output: any,
  context: __SerdeContext
): DeleteItemOutput => {
  return {
    __type: "DeleteItemOutput",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
        : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacity(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics !== undefined &&
      output.ItemCollectionMetrics !== null
        ? deserializeAws_json1_0ItemCollectionMetrics(
            output.ItemCollectionMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DeleteRequest = (
  output: any,
  context: __SerdeContext
): DeleteRequest => {
  return {
    __type: "DeleteRequest",
    Key:
      output.Key !== undefined && output.Key !== null
        ? deserializeAws_json1_0Key(output.Key, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0DeleteTableOutput = (
  output: any,
  context: __SerdeContext
): DeleteTableOutput => {
  return {
    __type: "DeleteTableOutput",
    TableDescription:
      output.TableDescription !== undefined && output.TableDescription !== null
        ? deserializeAws_json1_0TableDescription(
            output.TableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeBackupOutput = (
  output: any,
  context: __SerdeContext
): DescribeBackupOutput => {
  return {
    __type: "DescribeBackupOutput",
    BackupDescription:
      output.BackupDescription !== undefined &&
      output.BackupDescription !== null
        ? deserializeAws_json1_0BackupDescription(
            output.BackupDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeContinuousBackupsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContinuousBackupsOutput => {
  return {
    __type: "DescribeContinuousBackupsOutput",
    ContinuousBackupsDescription:
      output.ContinuousBackupsDescription !== undefined &&
      output.ContinuousBackupsDescription !== null
        ? deserializeAws_json1_0ContinuousBackupsDescription(
            output.ContinuousBackupsDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContributorInsightsOutput => {
  return {
    __type: "DescribeContributorInsightsOutput",
    ContributorInsightsRuleList:
      output.ContributorInsightsRuleList !== undefined &&
      output.ContributorInsightsRuleList !== null
        ? deserializeAws_json1_0ContributorInsightsRuleList(
            output.ContributorInsightsRuleList,
            context
          )
        : undefined,
    ContributorInsightsStatus:
      output.ContributorInsightsStatus !== undefined &&
      output.ContributorInsightsStatus !== null
        ? output.ContributorInsightsStatus
        : undefined,
    FailureException:
      output.FailureException !== undefined && output.FailureException !== null
        ? deserializeAws_json1_0FailureException(
            output.FailureException,
            context
          )
        : undefined,
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    LastUpdateDateTime:
      output.LastUpdateDateTime !== undefined &&
      output.LastUpdateDateTime !== null
        ? new Date(Math.round(output.LastUpdateDateTime * 1000))
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointsResponse => {
  return {
    __type: "DescribeEndpointsResponse",
    Endpoints:
      output.Endpoints !== undefined && output.Endpoints !== null
        ? deserializeAws_json1_0Endpoints(output.Endpoints, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableOutput => {
  return {
    __type: "DescribeGlobalTableOutput",
    GlobalTableDescription:
      output.GlobalTableDescription !== undefined &&
      output.GlobalTableDescription !== null
        ? deserializeAws_json1_0GlobalTableDescription(
            output.GlobalTableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableSettingsOutput => {
  return {
    __type: "DescribeGlobalTableSettingsOutput",
    GlobalTableName:
      output.GlobalTableName !== undefined && output.GlobalTableName !== null
        ? output.GlobalTableName
        : undefined,
    ReplicaSettings:
      output.ReplicaSettings !== undefined && output.ReplicaSettings !== null
        ? deserializeAws_json1_0ReplicaSettingsDescriptionList(
            output.ReplicaSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeLimitsOutput => {
  return {
    __type: "DescribeLimitsOutput",
    AccountMaxReadCapacityUnits:
      output.AccountMaxReadCapacityUnits !== undefined &&
      output.AccountMaxReadCapacityUnits !== null
        ? output.AccountMaxReadCapacityUnits
        : undefined,
    AccountMaxWriteCapacityUnits:
      output.AccountMaxWriteCapacityUnits !== undefined &&
      output.AccountMaxWriteCapacityUnits !== null
        ? output.AccountMaxWriteCapacityUnits
        : undefined,
    TableMaxReadCapacityUnits:
      output.TableMaxReadCapacityUnits !== undefined &&
      output.TableMaxReadCapacityUnits !== null
        ? output.TableMaxReadCapacityUnits
        : undefined,
    TableMaxWriteCapacityUnits:
      output.TableMaxWriteCapacityUnits !== undefined &&
      output.TableMaxWriteCapacityUnits !== null
        ? output.TableMaxWriteCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeTableOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableOutput => {
  return {
    __type: "DescribeTableOutput",
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_json1_0TableDescription(output.Table, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableReplicaAutoScalingOutput => {
  return {
    __type: "DescribeTableReplicaAutoScalingOutput",
    TableAutoScalingDescription:
      output.TableAutoScalingDescription !== undefined &&
      output.TableAutoScalingDescription !== null
        ? deserializeAws_json1_0TableAutoScalingDescription(
            output.TableAutoScalingDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0DescribeTimeToLiveOutput = (
  output: any,
  context: __SerdeContext
): DescribeTimeToLiveOutput => {
  return {
    __type: "DescribeTimeToLiveOutput",
    TimeToLiveDescription:
      output.TimeToLiveDescription !== undefined &&
      output.TimeToLiveDescription !== null
        ? deserializeAws_json1_0TimeToLiveDescription(
            output.TimeToLiveDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  return {
    __type: "Endpoint",
    Address:
      output.Address !== undefined && output.Address !== null
        ? output.Address
        : undefined,
    CachePeriodInMinutes:
      output.CachePeriodInMinutes !== undefined &&
      output.CachePeriodInMinutes !== null
        ? output.CachePeriodInMinutes
        : undefined
  } as any;
};

const deserializeAws_json1_0Endpoints = (
  output: any,
  context: __SerdeContext
): Endpoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Endpoint(entry, context)
  );
};

const deserializeAws_json1_0ExpressionAttributeNameMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_0FailureException = (
  output: any,
  context: __SerdeContext
): FailureException => {
  return {
    __type: "FailureException",
    ExceptionDescription:
      output.ExceptionDescription !== undefined &&
      output.ExceptionDescription !== null
        ? output.ExceptionDescription
        : undefined,
    ExceptionName:
      output.ExceptionName !== undefined && output.ExceptionName !== null
        ? output.ExceptionName
        : undefined
  } as any;
};

const deserializeAws_json1_0GetItemOutput = (
  output: any,
  context: __SerdeContext
): GetItemOutput => {
  return {
    __type: "GetItemOutput",
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacity(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_json1_0AttributeMap(output.Item, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0GlobalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription => {
  return {
    __type: "GlobalSecondaryIndexDescription",
    Backfilling:
      output.Backfilling !== undefined && output.Backfilling !== null
        ? output.Backfilling
        : undefined,
    IndexArn:
      output.IndexArn !== undefined && output.IndexArn !== null
        ? output.IndexArn
        : undefined,
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    IndexSizeBytes:
      output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null
        ? output.IndexSizeBytes
        : undefined,
    IndexStatus:
      output.IndexStatus !== undefined && output.IndexStatus !== null
        ? output.IndexStatus
        : undefined,
    ItemCount:
      output.ItemCount !== undefined && output.ItemCount !== null
        ? output.ItemCount
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection !== undefined && output.Projection !== null
        ? deserializeAws_json1_0Projection(output.Projection, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput !== undefined &&
      output.ProvisionedThroughput !== null
        ? deserializeAws_json1_0ProvisionedThroughputDescription(
            output.ProvisionedThroughput,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context)
  );
};

const deserializeAws_json1_0GlobalSecondaryIndexes = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context)
  );
};

const deserializeAws_json1_0GlobalSecondaryIndexInfo = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexInfo => {
  return {
    __type: "GlobalSecondaryIndexInfo",
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection !== undefined && output.Projection !== null
        ? deserializeAws_json1_0Projection(output.Projection, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput !== undefined &&
      output.ProvisionedThroughput !== null
        ? deserializeAws_json1_0ProvisionedThroughput(
            output.ProvisionedThroughput,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0GlobalTable = (
  output: any,
  context: __SerdeContext
): GlobalTable => {
  return {
    __type: "GlobalTable",
    GlobalTableName:
      output.GlobalTableName !== undefined && output.GlobalTableName !== null
        ? output.GlobalTableName
        : undefined,
    ReplicationGroup:
      output.ReplicationGroup !== undefined && output.ReplicationGroup !== null
        ? deserializeAws_json1_0ReplicaList(output.ReplicationGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0GlobalTableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): GlobalTableAlreadyExistsException => {
  return {
    __type: "GlobalTableAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0GlobalTableDescription = (
  output: any,
  context: __SerdeContext
): GlobalTableDescription => {
  return {
    __type: "GlobalTableDescription",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    GlobalTableArn:
      output.GlobalTableArn !== undefined && output.GlobalTableArn !== null
        ? output.GlobalTableArn
        : undefined,
    GlobalTableName:
      output.GlobalTableName !== undefined && output.GlobalTableName !== null
        ? output.GlobalTableName
        : undefined,
    GlobalTableStatus:
      output.GlobalTableStatus !== undefined &&
      output.GlobalTableStatus !== null
        ? output.GlobalTableStatus
        : undefined,
    ReplicationGroup:
      output.ReplicationGroup !== undefined && output.ReplicationGroup !== null
        ? deserializeAws_json1_0ReplicaDescriptionList(
            output.ReplicationGroup,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0GlobalTableList = (
  output: any,
  context: __SerdeContext
): GlobalTable[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GlobalTable(entry, context)
  );
};

const deserializeAws_json1_0GlobalTableNotFoundException = (
  output: any,
  context: __SerdeContext
): GlobalTableNotFoundException => {
  return {
    __type: "GlobalTableNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    __type: "IdempotentParameterMismatchException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0IndexNotFoundException = (
  output: any,
  context: __SerdeContext
): IndexNotFoundException => {
  return {
    __type: "IndexNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  return {
    __type: "InternalServerError",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0InvalidEndpointException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointException => {
  return {
    __type: "InvalidEndpointException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0InvalidRestoreTimeException = (
  output: any,
  context: __SerdeContext
): InvalidRestoreTimeException => {
  return {
    __type: "InvalidRestoreTimeException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ItemCollectionKeyAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0ItemCollectionMetrics = (
  output: any,
  context: __SerdeContext
): ItemCollectionMetrics => {
  return {
    __type: "ItemCollectionMetrics",
    ItemCollectionKey:
      output.ItemCollectionKey !== undefined &&
      output.ItemCollectionKey !== null
        ? deserializeAws_json1_0ItemCollectionKeyAttributeMap(
            output.ItemCollectionKey,
            context
          )
        : undefined,
    SizeEstimateRangeGB:
      output.SizeEstimateRangeGB !== undefined &&
      output.SizeEstimateRangeGB !== null
        ? deserializeAws_json1_0ItemCollectionSizeEstimateRange(
            output.SizeEstimateRangeGB,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0ItemCollectionMetricsMultiple = (
  output: any,
  context: __SerdeContext
): ItemCollectionMetrics[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ItemCollectionMetrics(entry, context)
  );
};

const deserializeAws_json1_0ItemCollectionMetricsPerTable = (
  output: any,
  context: __SerdeContext
): { [key: string]: ItemCollectionMetrics[] } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: ItemCollectionMetrics[] },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_json1_0ItemCollectionMetricsMultiple(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0ItemCollectionSizeEstimateRange = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0ItemCollectionSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): ItemCollectionSizeLimitExceededException => {
  return {
    __type: "ItemCollectionSizeLimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ItemList = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue }[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeMap(entry, context)
  );
};

const deserializeAws_json1_0ItemResponse = (
  output: any,
  context: __SerdeContext
): ItemResponse => {
  return {
    __type: "ItemResponse",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_json1_0AttributeMap(output.Item, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0ItemResponseList = (
  output: any,
  context: __SerdeContext
): ItemResponse[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ItemResponse(entry, context)
  );
};

const deserializeAws_json1_0Key = (
  output: any,
  context: __SerdeContext
): Key => {
  return {
    __type: "Key",
    HashKeyElement:
      output.HashKeyElement !== undefined && output.HashKeyElement !== null
        ? deserializeAws_json1_0AttributeValue(output.HashKeyElement, context)
        : undefined,
    RangeKeyElement:
      output.RangeKeyElement !== undefined && output.RangeKeyElement !== null
        ? deserializeAws_json1_0AttributeValue(output.RangeKeyElement, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0KeyList = (
  output: any,
  context: __SerdeContext
): Key[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Key(entry, context)
  );
};

const deserializeAws_json1_0KeysAndAttributes = (
  output: any,
  context: __SerdeContext
): KeysAndAttributes => {
  return {
    __type: "KeysAndAttributes",
    AttributesToGet:
      output.AttributesToGet !== undefined && output.AttributesToGet !== null
        ? deserializeAws_json1_0AttributeNameList(
            output.AttributesToGet,
            context
          )
        : undefined,
    ConsistentRead:
      output.ConsistentRead !== undefined && output.ConsistentRead !== null
        ? output.ConsistentRead
        : undefined,
    ExpressionAttributeNames:
      output.ExpressionAttributeNames !== undefined &&
      output.ExpressionAttributeNames !== null
        ? deserializeAws_json1_0ExpressionAttributeNameMap(
            output.ExpressionAttributeNames,
            context
          )
        : undefined,
    Keys:
      output.Keys !== undefined && output.Keys !== null
        ? deserializeAws_json1_0KeyList(output.Keys, context)
        : undefined,
    ProjectionExpression:
      output.ProjectionExpression !== undefined &&
      output.ProjectionExpression !== null
        ? output.ProjectionExpression
        : undefined
  } as any;
};

const deserializeAws_json1_0KeySchema = (
  output: any,
  context: __SerdeContext
): KeySchema => {
  return {
    __type: "KeySchema",
    HashKeyElement:
      output.HashKeyElement !== undefined && output.HashKeyElement !== null
        ? deserializeAws_json1_0KeySchemaElement(output.HashKeyElement, context)
        : undefined,
    RangeKeyElement:
      output.RangeKeyElement !== undefined && output.RangeKeyElement !== null
        ? deserializeAws_json1_0KeySchemaElement(
            output.RangeKeyElement,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0KeySchemaElement = (
  output: any,
  context: __SerdeContext
): KeySchemaElement => {
  return {
    __type: "KeySchemaElement",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null
        ? output.AttributeName
        : undefined,
    AttributeType:
      output.AttributeType !== undefined && output.AttributeType !== null
        ? output.AttributeType
        : undefined
  } as any;
};

const deserializeAws_json1_0LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ListBackupsOutput = (
  output: any,
  context: __SerdeContext
): ListBackupsOutput => {
  return {
    __type: "ListBackupsOutput",
    BackupSummaries:
      output.BackupSummaries !== undefined && output.BackupSummaries !== null
        ? deserializeAws_json1_0BackupSummaries(output.BackupSummaries, context)
        : undefined,
    LastEvaluatedBackupArn:
      output.LastEvaluatedBackupArn !== undefined &&
      output.LastEvaluatedBackupArn !== null
        ? output.LastEvaluatedBackupArn
        : undefined
  } as any;
};

const deserializeAws_json1_0ListContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): ListContributorInsightsOutput => {
  return {
    __type: "ListContributorInsightsOutput",
    ContributorInsightsSummaries:
      output.ContributorInsightsSummaries !== undefined &&
      output.ContributorInsightsSummaries !== null
        ? deserializeAws_json1_0ContributorInsightsSummaries(
            output.ContributorInsightsSummaries,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_0ListGlobalTablesOutput = (
  output: any,
  context: __SerdeContext
): ListGlobalTablesOutput => {
  return {
    __type: "ListGlobalTablesOutput",
    GlobalTables:
      output.GlobalTables !== undefined && output.GlobalTables !== null
        ? deserializeAws_json1_0GlobalTableList(output.GlobalTables, context)
        : undefined,
    LastEvaluatedGlobalTableName:
      output.LastEvaluatedGlobalTableName !== undefined &&
      output.LastEvaluatedGlobalTableName !== null
        ? output.LastEvaluatedGlobalTableName
        : undefined
  } as any;
};

const deserializeAws_json1_0ListTablesOutput = (
  output: any,
  context: __SerdeContext
): ListTablesOutput => {
  return {
    __type: "ListTablesOutput",
    LastEvaluatedTableName:
      output.LastEvaluatedTableName !== undefined &&
      output.LastEvaluatedTableName !== null
        ? output.LastEvaluatedTableName
        : undefined,
    TableNames:
      output.TableNames !== undefined && output.TableNames !== null
        ? deserializeAws_json1_0TableNameList(output.TableNames, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0ListTagsOfResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsOfResourceOutput => {
  return {
    __type: "ListTagsOfResourceOutput",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_0TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0LocalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexDescription => {
  return {
    __type: "LocalSecondaryIndexDescription",
    IndexArn:
      output.IndexArn !== undefined && output.IndexArn !== null
        ? output.IndexArn
        : undefined,
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    IndexSizeBytes:
      output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null
        ? output.IndexSizeBytes
        : undefined,
    ItemCount:
      output.ItemCount !== undefined && output.ItemCount !== null
        ? output.ItemCount
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection !== undefined && output.Projection !== null
        ? deserializeAws_json1_0Projection(output.Projection, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0LocalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context)
  );
};

const deserializeAws_json1_0LocalSecondaryIndexes = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context)
  );
};

const deserializeAws_json1_0LocalSecondaryIndexInfo = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexInfo => {
  return {
    __type: "LocalSecondaryIndexInfo",
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection !== undefined && output.Projection !== null
        ? deserializeAws_json1_0Projection(output.Projection, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0NonKeyAttributeNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0NumberSetAttributeValue = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0PointInTimeRecoveryDescription = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryDescription => {
  return {
    __type: "PointInTimeRecoveryDescription",
    EarliestRestorableDateTime:
      output.EarliestRestorableDateTime !== undefined &&
      output.EarliestRestorableDateTime !== null
        ? new Date(Math.round(output.EarliestRestorableDateTime * 1000))
        : undefined,
    LatestRestorableDateTime:
      output.LatestRestorableDateTime !== undefined &&
      output.LatestRestorableDateTime !== null
        ? new Date(Math.round(output.LatestRestorableDateTime * 1000))
        : undefined,
    PointInTimeRecoveryStatus:
      output.PointInTimeRecoveryStatus !== undefined &&
      output.PointInTimeRecoveryStatus !== null
        ? output.PointInTimeRecoveryStatus
        : undefined
  } as any;
};

const deserializeAws_json1_0PointInTimeRecoveryUnavailableException = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryUnavailableException => {
  return {
    __type: "PointInTimeRecoveryUnavailableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0Projection = (
  output: any,
  context: __SerdeContext
): Projection => {
  return {
    __type: "Projection",
    NonKeyAttributes:
      output.NonKeyAttributes !== undefined && output.NonKeyAttributes !== null
        ? deserializeAws_json1_0NonKeyAttributeNameList(
            output.NonKeyAttributes,
            context
          )
        : undefined,
    ProjectionType:
      output.ProjectionType !== undefined && output.ProjectionType !== null
        ? output.ProjectionType
        : undefined
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughput = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughput => {
  return {
    __type: "ProvisionedThroughput",
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined &&
      output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined,
    WriteCapacityUnits:
      output.WriteCapacityUnits !== undefined &&
      output.WriteCapacityUnits !== null
        ? output.WriteCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughputDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputDescription => {
  return {
    __type: "ProvisionedThroughputDescription",
    LastDecreaseDateTime:
      output.LastDecreaseDateTime !== undefined &&
      output.LastDecreaseDateTime !== null
        ? new Date(Math.round(output.LastDecreaseDateTime * 1000))
        : undefined,
    LastIncreaseDateTime:
      output.LastIncreaseDateTime !== undefined &&
      output.LastIncreaseDateTime !== null
        ? new Date(Math.round(output.LastIncreaseDateTime * 1000))
        : undefined,
    NumberOfDecreasesToday:
      output.NumberOfDecreasesToday !== undefined &&
      output.NumberOfDecreasesToday !== null
        ? output.NumberOfDecreasesToday
        : undefined,
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined &&
      output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined,
    WriteCapacityUnits:
      output.WriteCapacityUnits !== undefined &&
      output.WriteCapacityUnits !== null
        ? output.WriteCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  return {
    __type: "ProvisionedThroughputExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ProvisionedThroughputOverride = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputOverride => {
  return {
    __type: "ProvisionedThroughputOverride",
    ReadCapacityUnits:
      output.ReadCapacityUnits !== undefined &&
      output.ReadCapacityUnits !== null
        ? output.ReadCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0PutItemInputAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: AttributeValue }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0AttributeValue(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0PutItemOutput = (
  output: any,
  context: __SerdeContext
): PutItemOutput => {
  return {
    __type: "PutItemOutput",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
        : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacity(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics !== undefined &&
      output.ItemCollectionMetrics !== null
        ? deserializeAws_json1_0ItemCollectionMetrics(
            output.ItemCollectionMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0PutRequest = (
  output: any,
  context: __SerdeContext
): PutRequest => {
  return {
    __type: "PutRequest",
    Item:
      output.Item !== undefined && output.Item !== null
        ? deserializeAws_json1_0PutItemInputAttributeMap(output.Item, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0QueryOutput = (
  output: any,
  context: __SerdeContext
): QueryOutput => {
  return {
    __type: "QueryOutput",
    ConsumedCapacityUnits:
      output.ConsumedCapacityUnits !== undefined &&
      output.ConsumedCapacityUnits !== null
        ? output.ConsumedCapacityUnits
        : undefined,
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined,
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_json1_0ItemList(output.Items, context)
        : undefined,
    LastEvaluatedKey:
      output.LastEvaluatedKey !== undefined && output.LastEvaluatedKey !== null
        ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0Replica = (
  output: any,
  context: __SerdeContext
): Replica => {
  return {
    __type: "Replica",
    RegionName:
      output.RegionName !== undefined && output.RegionName !== null
        ? output.RegionName
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReplicaAlreadyExistsException => {
  return {
    __type: "ReplicaAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription => {
  return {
    __type: "ReplicaAutoScalingDescription",
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined &&
      output.GlobalSecondaryIndexes !== null
        ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    RegionName:
      output.RegionName !== undefined && output.RegionName !== null
        ? output.RegionName
        : undefined,
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
      output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaStatus:
      output.ReplicaStatus !== undefined && output.ReplicaStatus !== null
        ? output.ReplicaStatus
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context)
  );
};

const deserializeAws_json1_0ReplicaDescription = (
  output: any,
  context: __SerdeContext
): ReplicaDescription => {
  return {
    __type: "ReplicaDescription",
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined &&
      output.GlobalSecondaryIndexes !== null
        ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    KMSMasterKeyId:
      output.KMSMasterKeyId !== undefined && output.KMSMasterKeyId !== null
        ? output.KMSMasterKeyId
        : undefined,
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride !== undefined &&
      output.ProvisionedThroughputOverride !== null
        ? deserializeAws_json1_0ProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined,
    RegionName:
      output.RegionName !== undefined && output.RegionName !== null
        ? output.RegionName
        : undefined,
    ReplicaStatus:
      output.ReplicaStatus !== undefined && output.ReplicaStatus !== null
        ? output.ReplicaStatus
        : undefined,
    ReplicaStatusDescription:
      output.ReplicaStatusDescription !== undefined &&
      output.ReplicaStatusDescription !== null
        ? output.ReplicaStatusDescription
        : undefined,
    ReplicaStatusPercentProgress:
      output.ReplicaStatusPercentProgress !== undefined &&
      output.ReplicaStatusPercentProgress !== null
        ? output.ReplicaStatusPercentProgress
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaDescription(entry, context)
  );
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription => {
  return {
    __type: "ReplicaGlobalSecondaryIndexAutoScalingDescription",
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    IndexStatus:
      output.IndexStatus !== undefined && output.IndexStatus !== null
        ? output.IndexStatus
        : undefined,
    ProvisionedReadCapacityAutoScalingSettings:
      output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
      output.ProvisionedReadCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ProvisionedWriteCapacityAutoScalingSettings:
      output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
      output.ProvisionedWriteCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription(
      entry,
      context
    )
  );
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexDescription => {
  return {
    __type: "ReplicaGlobalSecondaryIndexDescription",
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride !== undefined &&
      output.ProvisionedThroughputOverride !== null
        ? deserializeAws_json1_0ProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context)
  );
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription => {
  return {
    __type: "ReplicaGlobalSecondaryIndexSettingsDescription",
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    IndexStatus:
      output.IndexStatus !== undefined && output.IndexStatus !== null
        ? output.IndexStatus
        : undefined,
    ProvisionedReadCapacityAutoScalingSettings:
      output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
      output.ProvisionedReadCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ProvisionedReadCapacityUnits:
      output.ProvisionedReadCapacityUnits !== undefined &&
      output.ProvisionedReadCapacityUnits !== null
        ? output.ProvisionedReadCapacityUnits
        : undefined,
    ProvisionedWriteCapacityAutoScalingSettings:
      output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
      output.ProvisionedWriteCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ProvisionedWriteCapacityUnits:
      output.ProvisionedWriteCapacityUnits !== undefined &&
      output.ProvisionedWriteCapacityUnits !== null
        ? output.ProvisionedWriteCapacityUnits
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription(
      entry,
      context
    )
  );
};

const deserializeAws_json1_0ReplicaList = (
  output: any,
  context: __SerdeContext
): Replica[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Replica(entry, context)
  );
};

const deserializeAws_json1_0ReplicaNotFoundException = (
  output: any,
  context: __SerdeContext
): ReplicaNotFoundException => {
  return {
    __type: "ReplicaNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaSettingsDescription => {
  return {
    __type: "ReplicaSettingsDescription",
    RegionName:
      output.RegionName !== undefined && output.RegionName !== null
        ? output.RegionName
        : undefined,
    ReplicaBillingModeSummary:
      output.ReplicaBillingModeSummary !== undefined &&
      output.ReplicaBillingModeSummary !== null
        ? deserializeAws_json1_0BillingModeSummary(
            output.ReplicaBillingModeSummary,
            context
          )
        : undefined,
    ReplicaGlobalSecondaryIndexSettings:
      output.ReplicaGlobalSecondaryIndexSettings !== undefined &&
      output.ReplicaGlobalSecondaryIndexSettings !== null
        ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(
            output.ReplicaGlobalSecondaryIndexSettings,
            context
          )
        : undefined,
    ReplicaProvisionedReadCapacityAutoScalingSettings:
      output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
      output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedReadCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaProvisionedReadCapacityUnits:
      output.ReplicaProvisionedReadCapacityUnits !== undefined &&
      output.ReplicaProvisionedReadCapacityUnits !== null
        ? output.ReplicaProvisionedReadCapacityUnits
        : undefined,
    ReplicaProvisionedWriteCapacityAutoScalingSettings:
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null
        ? deserializeAws_json1_0AutoScalingSettingsDescription(
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings,
            context
          )
        : undefined,
    ReplicaProvisionedWriteCapacityUnits:
      output.ReplicaProvisionedWriteCapacityUnits !== undefined &&
      output.ReplicaProvisionedWriteCapacityUnits !== null
        ? output.ReplicaProvisionedWriteCapacityUnits
        : undefined,
    ReplicaStatus:
      output.ReplicaStatus !== undefined && output.ReplicaStatus !== null
        ? output.ReplicaStatus
        : undefined
  } as any;
};

const deserializeAws_json1_0ReplicaSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): ReplicaSettingsDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaSettingsDescription(entry, context)
  );
};

const deserializeAws_json1_0RequestLimitExceeded = (
  output: any,
  context: __SerdeContext
): RequestLimitExceeded => {
  return {
    __type: "RequestLimitExceeded",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0RestoreSummary = (
  output: any,
  context: __SerdeContext
): RestoreSummary => {
  return {
    __type: "RestoreSummary",
    RestoreDateTime:
      output.RestoreDateTime !== undefined && output.RestoreDateTime !== null
        ? new Date(Math.round(output.RestoreDateTime * 1000))
        : undefined,
    RestoreInProgress:
      output.RestoreInProgress !== undefined &&
      output.RestoreInProgress !== null
        ? output.RestoreInProgress
        : undefined,
    SourceBackupArn:
      output.SourceBackupArn !== undefined && output.SourceBackupArn !== null
        ? output.SourceBackupArn
        : undefined,
    SourceTableArn:
      output.SourceTableArn !== undefined && output.SourceTableArn !== null
        ? output.SourceTableArn
        : undefined
  } as any;
};

const deserializeAws_json1_0RestoreTableFromBackupOutput = (
  output: any,
  context: __SerdeContext
): RestoreTableFromBackupOutput => {
  return {
    __type: "RestoreTableFromBackupOutput",
    TableDescription:
      output.TableDescription !== undefined && output.TableDescription !== null
        ? deserializeAws_json1_0TableDescription(
            output.TableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0RestoreTableToPointInTimeOutput = (
  output: any,
  context: __SerdeContext
): RestoreTableToPointInTimeOutput => {
  return {
    __type: "RestoreTableToPointInTimeOutput",
    TableDescription:
      output.TableDescription !== undefined && output.TableDescription !== null
        ? deserializeAws_json1_0TableDescription(
            output.TableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0ScanOutput = (
  output: any,
  context: __SerdeContext
): ScanOutput => {
  return {
    __type: "ScanOutput",
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacity(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined,
    Items:
      output.Items !== undefined && output.Items !== null
        ? deserializeAws_json1_0ItemList(output.Items, context)
        : undefined,
    LastEvaluatedKey:
      output.LastEvaluatedKey !== undefined && output.LastEvaluatedKey !== null
        ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context)
        : undefined,
    ScannedCount:
      output.ScannedCount !== undefined && output.ScannedCount !== null
        ? output.ScannedCount
        : undefined
  } as any;
};

const deserializeAws_json1_0SecondaryIndexesCapacityMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Capacity } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: Capacity }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_0Capacity(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_0SourceTableDetails = (
  output: any,
  context: __SerdeContext
): SourceTableDetails => {
  return {
    __type: "SourceTableDetails",
    BillingMode:
      output.BillingMode !== undefined && output.BillingMode !== null
        ? output.BillingMode
        : undefined,
    ItemCount:
      output.ItemCount !== undefined && output.ItemCount !== null
        ? output.ItemCount
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput !== undefined &&
      output.ProvisionedThroughput !== null
        ? deserializeAws_json1_0ProvisionedThroughput(
            output.ProvisionedThroughput,
            context
          )
        : undefined,
    TableArn:
      output.TableArn !== undefined && output.TableArn !== null
        ? output.TableArn
        : undefined,
    TableCreationDateTime:
      output.TableCreationDateTime !== undefined &&
      output.TableCreationDateTime !== null
        ? new Date(Math.round(output.TableCreationDateTime * 1000))
        : undefined,
    TableId:
      output.TableId !== undefined && output.TableId !== null
        ? output.TableId
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined,
    TableSizeBytes:
      output.TableSizeBytes !== undefined && output.TableSizeBytes !== null
        ? output.TableSizeBytes
        : undefined
  } as any;
};

const deserializeAws_json1_0SourceTableFeatureDetails = (
  output: any,
  context: __SerdeContext
): SourceTableFeatureDetails => {
  return {
    __type: "SourceTableFeatureDetails",
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined &&
      output.GlobalSecondaryIndexes !== null
        ? deserializeAws_json1_0GlobalSecondaryIndexes(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes !== undefined &&
      output.LocalSecondaryIndexes !== null
        ? deserializeAws_json1_0LocalSecondaryIndexes(
            output.LocalSecondaryIndexes,
            context
          )
        : undefined,
    SSEDescription:
      output.SSEDescription !== undefined && output.SSEDescription !== null
        ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context)
        : undefined,
    StreamDescription:
      output.StreamDescription !== undefined &&
      output.StreamDescription !== null
        ? deserializeAws_json1_0StreamSpecification(
            output.StreamDescription,
            context
          )
        : undefined,
    TimeToLiveDescription:
      output.TimeToLiveDescription !== undefined &&
      output.TimeToLiveDescription !== null
        ? deserializeAws_json1_0TimeToLiveDescription(
            output.TimeToLiveDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0SSEDescription = (
  output: any,
  context: __SerdeContext
): SSEDescription => {
  return {
    __type: "SSEDescription",
    InaccessibleEncryptionDateTime:
      output.InaccessibleEncryptionDateTime !== undefined &&
      output.InaccessibleEncryptionDateTime !== null
        ? new Date(Math.round(output.InaccessibleEncryptionDateTime * 1000))
        : undefined,
    KMSMasterKeyArn:
      output.KMSMasterKeyArn !== undefined && output.KMSMasterKeyArn !== null
        ? output.KMSMasterKeyArn
        : undefined,
    SSEType:
      output.SSEType !== undefined && output.SSEType !== null
        ? output.SSEType
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_0StreamSpecification = (
  output: any,
  context: __SerdeContext
): StreamSpecification => {
  return {
    __type: "StreamSpecification",
    StreamEnabled:
      output.StreamEnabled !== undefined && output.StreamEnabled !== null
        ? output.StreamEnabled
        : undefined,
    StreamViewType:
      output.StreamViewType !== undefined && output.StreamViewType !== null
        ? output.StreamViewType
        : undefined
  } as any;
};

const deserializeAws_json1_0StringSetAttributeValue = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0TableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TableAlreadyExistsException => {
  return {
    __type: "TableAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0TableAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): TableAutoScalingDescription => {
  return {
    __type: "TableAutoScalingDescription",
    Replicas:
      output.Replicas !== undefined && output.Replicas !== null
        ? deserializeAws_json1_0ReplicaAutoScalingDescriptionList(
            output.Replicas,
            context
          )
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined,
    TableStatus:
      output.TableStatus !== undefined && output.TableStatus !== null
        ? output.TableStatus
        : undefined
  } as any;
};

const deserializeAws_json1_0TableDescription = (
  output: any,
  context: __SerdeContext
): TableDescription => {
  return {
    __type: "TableDescription",
    ArchivalSummary:
      output.ArchivalSummary !== undefined && output.ArchivalSummary !== null
        ? deserializeAws_json1_0ArchivalSummary(output.ArchivalSummary, context)
        : undefined,
    AttributeDefinitions:
      output.AttributeDefinitions !== undefined &&
      output.AttributeDefinitions !== null
        ? deserializeAws_json1_0AttributeDefinitions(
            output.AttributeDefinitions,
            context
          )
        : undefined,
    BillingModeSummary:
      output.BillingModeSummary !== undefined &&
      output.BillingModeSummary !== null
        ? deserializeAws_json1_0BillingModeSummary(
            output.BillingModeSummary,
            context
          )
        : undefined,
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes !== undefined &&
      output.GlobalSecondaryIndexes !== null
        ? deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    GlobalTableVersion:
      output.GlobalTableVersion !== undefined &&
      output.GlobalTableVersion !== null
        ? output.GlobalTableVersion
        : undefined,
    ItemCount:
      output.ItemCount !== undefined && output.ItemCount !== null
        ? output.ItemCount
        : undefined,
    KeySchema:
      output.KeySchema !== undefined && output.KeySchema !== null
        ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
        : undefined,
    LatestStreamArn:
      output.LatestStreamArn !== undefined && output.LatestStreamArn !== null
        ? output.LatestStreamArn
        : undefined,
    LatestStreamLabel:
      output.LatestStreamLabel !== undefined &&
      output.LatestStreamLabel !== null
        ? output.LatestStreamLabel
        : undefined,
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes !== undefined &&
      output.LocalSecondaryIndexes !== null
        ? deserializeAws_json1_0LocalSecondaryIndexDescriptionList(
            output.LocalSecondaryIndexes,
            context
          )
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput !== undefined &&
      output.ProvisionedThroughput !== null
        ? deserializeAws_json1_0ProvisionedThroughputDescription(
            output.ProvisionedThroughput,
            context
          )
        : undefined,
    Replicas:
      output.Replicas !== undefined && output.Replicas !== null
        ? deserializeAws_json1_0ReplicaDescriptionList(output.Replicas, context)
        : undefined,
    RestoreSummary:
      output.RestoreSummary !== undefined && output.RestoreSummary !== null
        ? deserializeAws_json1_0RestoreSummary(output.RestoreSummary, context)
        : undefined,
    SSEDescription:
      output.SSEDescription !== undefined && output.SSEDescription !== null
        ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context)
        : undefined,
    StreamSpecification:
      output.StreamSpecification !== undefined &&
      output.StreamSpecification !== null
        ? deserializeAws_json1_0StreamSpecification(
            output.StreamSpecification,
            context
          )
        : undefined,
    TableArn:
      output.TableArn !== undefined && output.TableArn !== null
        ? output.TableArn
        : undefined,
    TableId:
      output.TableId !== undefined && output.TableId !== null
        ? output.TableId
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined,
    TableSizeBytes:
      output.TableSizeBytes !== undefined && output.TableSizeBytes !== null
        ? output.TableSizeBytes
        : undefined,
    TableStatus:
      output.TableStatus !== undefined && output.TableStatus !== null
        ? output.TableStatus
        : undefined
  } as any;
};

const deserializeAws_json1_0TableInUseException = (
  output: any,
  context: __SerdeContext
): TableInUseException => {
  return {
    __type: "TableInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0TableNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0TableNotFoundException = (
  output: any,
  context: __SerdeContext
): TableNotFoundException => {
  return {
    __type: "TableNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_0TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Tag(entry, context)
  );
};

const deserializeAws_json1_0TimeToLiveDescription = (
  output: any,
  context: __SerdeContext
): TimeToLiveDescription => {
  return {
    __type: "TimeToLiveDescription",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null
        ? output.AttributeName
        : undefined,
    TimeToLiveStatus:
      output.TimeToLiveStatus !== undefined && output.TimeToLiveStatus !== null
        ? output.TimeToLiveStatus
        : undefined
  } as any;
};

const deserializeAws_json1_0TimeToLiveSpecification = (
  output: any,
  context: __SerdeContext
): TimeToLiveSpecification => {
  return {
    __type: "TimeToLiveSpecification",
    AttributeName:
      output.AttributeName !== undefined && output.AttributeName !== null
        ? output.AttributeName
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined
  } as any;
};

const deserializeAws_json1_0TransactGetItemsOutput = (
  output: any,
  context: __SerdeContext
): TransactGetItemsOutput => {
  return {
    __type: "TransactGetItemsOutput",
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    Responses:
      output.Responses !== undefined && output.Responses !== null
        ? deserializeAws_json1_0ItemResponseList(output.Responses, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0TransactionCanceledException = (
  output: any,
  context: __SerdeContext
): TransactionCanceledException => {
  return {
    __type: "TransactionCanceledException",
    CancellationReasons:
      output.CancellationReasons !== undefined &&
      output.CancellationReasons !== null
        ? deserializeAws_json1_0CancellationReasonList(
            output.CancellationReasons,
            context
          )
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0TransactionConflictException = (
  output: any,
  context: __SerdeContext
): TransactionConflictException => {
  return {
    __type: "TransactionConflictException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_0TransactionInProgressException = (
  output: any,
  context: __SerdeContext
): TransactionInProgressException => {
  return {
    __type: "TransactionInProgressException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_0TransactWriteItemsOutput = (
  output: any,
  context: __SerdeContext
): TransactWriteItemsOutput => {
  return {
    __type: "TransactWriteItemsOutput",
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacityMultiple(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics !== undefined &&
      output.ItemCollectionMetrics !== null
        ? deserializeAws_json1_0ItemCollectionMetricsPerTable(
            output.ItemCollectionMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateContinuousBackupsOutput = (
  output: any,
  context: __SerdeContext
): UpdateContinuousBackupsOutput => {
  return {
    __type: "UpdateContinuousBackupsOutput",
    ContinuousBackupsDescription:
      output.ContinuousBackupsDescription !== undefined &&
      output.ContinuousBackupsDescription !== null
        ? deserializeAws_json1_0ContinuousBackupsDescription(
            output.ContinuousBackupsDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): UpdateContributorInsightsOutput => {
  return {
    __type: "UpdateContributorInsightsOutput",
    ContributorInsightsStatus:
      output.ContributorInsightsStatus !== undefined &&
      output.ContributorInsightsStatus !== null
        ? output.ContributorInsightsStatus
        : undefined,
    IndexName:
      output.IndexName !== undefined && output.IndexName !== null
        ? output.IndexName
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): UpdateGlobalTableOutput => {
  return {
    __type: "UpdateGlobalTableOutput",
    GlobalTableDescription:
      output.GlobalTableDescription !== undefined &&
      output.GlobalTableDescription !== null
        ? deserializeAws_json1_0GlobalTableDescription(
            output.GlobalTableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): UpdateGlobalTableSettingsOutput => {
  return {
    __type: "UpdateGlobalTableSettingsOutput",
    GlobalTableName:
      output.GlobalTableName !== undefined && output.GlobalTableName !== null
        ? output.GlobalTableName
        : undefined,
    ReplicaSettings:
      output.ReplicaSettings !== undefined && output.ReplicaSettings !== null
        ? deserializeAws_json1_0ReplicaSettingsDescriptionList(
            output.ReplicaSettings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateItemOutput = (
  output: any,
  context: __SerdeContext
): UpdateItemOutput => {
  return {
    __type: "UpdateItemOutput",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
        : undefined,
    ConsumedCapacity:
      output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
        ? deserializeAws_json1_0ConsumedCapacity(
            output.ConsumedCapacity,
            context
          )
        : undefined,
    ItemCollectionMetrics:
      output.ItemCollectionMetrics !== undefined &&
      output.ItemCollectionMetrics !== null
        ? deserializeAws_json1_0ItemCollectionMetrics(
            output.ItemCollectionMetrics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateTableOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableOutput => {
  return {
    __type: "UpdateTableOutput",
    TableDescription:
      output.TableDescription !== undefined && output.TableDescription !== null
        ? deserializeAws_json1_0TableDescription(
            output.TableDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableReplicaAutoScalingOutput => {
  return {
    __type: "UpdateTableReplicaAutoScalingOutput",
    TableAutoScalingDescription:
      output.TableAutoScalingDescription !== undefined &&
      output.TableAutoScalingDescription !== null
        ? deserializeAws_json1_0TableAutoScalingDescription(
            output.TableAutoScalingDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0UpdateTimeToLiveOutput = (
  output: any,
  context: __SerdeContext
): UpdateTimeToLiveOutput => {
  return {
    __type: "UpdateTimeToLiveOutput",
    TimeToLiveSpecification:
      output.TimeToLiveSpecification !== undefined &&
      output.TimeToLiveSpecification !== null
        ? deserializeAws_json1_0TimeToLiveSpecification(
            output.TimeToLiveSpecification,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_0WriteRequest = (
  output: any,
  context: __SerdeContext
): WriteRequest => {
  return {
    __type: "WriteRequest",
    DeleteRequest:
      output.DeleteRequest !== undefined && output.DeleteRequest !== null
        ? deserializeAws_json1_0DeleteRequest(output.DeleteRequest, context)
        : undefined,
    PutRequest:
      output.PutRequest !== undefined && output.PutRequest !== null
        ? deserializeAws_json1_0PutRequest(output.PutRequest, context)
        : undefined
  } as any;
};

const deserializeAws_json1_0WriteRequests = (
  output: any,
  context: __SerdeContext
): WriteRequest[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0WriteRequest(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
