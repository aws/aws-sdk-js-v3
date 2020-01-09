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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_0DescribeEndpointsCommand(
  input: DescribeEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeEndpoints";
  let body: any = {};
  const wrappedBody: any = {
    DescribeEndpointsRequest: serializeAws_json1_0DescribeEndpointsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeEndpoints",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0BatchGetItemCommand(
  input: BatchGetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.BatchGetItem";
  let body: any = {};
  const wrappedBody: any = {
    BatchGetItemInput: serializeAws_json1_0BatchGetItemInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchGetItem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0BatchWriteItemCommand(
  input: BatchWriteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.BatchWriteItem";
  let body: any = {};
  const wrappedBody: any = {
    BatchWriteItemInput: serializeAws_json1_0BatchWriteItemInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/BatchWriteItem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0CreateBackupCommand(
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.CreateBackup";
  let body: any = {};
  const wrappedBody: any = {
    CreateBackupInput: serializeAws_json1_0CreateBackupInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0CreateGlobalTableCommand(
  input: CreateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.CreateGlobalTable";
  let body: any = {};
  const wrappedBody: any = {
    CreateGlobalTableInput: serializeAws_json1_0CreateGlobalTableInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateGlobalTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0CreateTableCommand(
  input: CreateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.CreateTable";
  let body: any = {};
  const wrappedBody: any = {
    CreateTableInput: serializeAws_json1_0CreateTableInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeleteBackupCommand(
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DeleteBackup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteBackupInput: serializeAws_json1_0DeleteBackupInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeleteItemCommand(
  input: DeleteItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DeleteItem";
  let body: any = {};
  const wrappedBody: any = {
    DeleteItemInput: serializeAws_json1_0DeleteItemInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteItem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeleteTableCommand(
  input: DeleteTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DeleteTable";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTableInput: serializeAws_json1_0DeleteTableInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeBackupCommand(
  input: DescribeBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeBackup";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBackupInput: serializeAws_json1_0DescribeBackupInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeContinuousBackupsCommand(
  input: DescribeContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeContinuousBackups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeContinuousBackupsInput: serializeAws_json1_0DescribeContinuousBackupsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeContinuousBackups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeContributorInsightsCommand(
  input: DescribeContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeContributorInsights";
  let body: any = {};
  const wrappedBody: any = {
    DescribeContributorInsightsInput: serializeAws_json1_0DescribeContributorInsightsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeContributorInsights",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeGlobalTableCommand(
  input: DescribeGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeGlobalTable";
  let body: any = {};
  const wrappedBody: any = {
    DescribeGlobalTableInput: serializeAws_json1_0DescribeGlobalTableInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeGlobalTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeGlobalTableSettingsCommand(
  input: DescribeGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeGlobalTableSettings";
  let body: any = {};
  const wrappedBody: any = {
    DescribeGlobalTableSettingsInput: serializeAws_json1_0DescribeGlobalTableSettingsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeGlobalTableSettings",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeLimitsCommand(
  input: DescribeLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeLimits";
  let body: any = {};
  const wrappedBody: any = {
    DescribeLimitsInput: serializeAws_json1_0DescribeLimitsInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeLimits",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeTableCommand(
  input: DescribeTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeTable";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTableInput: serializeAws_json1_0DescribeTableInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeTableReplicaAutoScalingCommand(
  input: DescribeTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeTableReplicaAutoScaling";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTableReplicaAutoScalingInput: serializeAws_json1_0DescribeTableReplicaAutoScalingInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTableReplicaAutoScaling",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeTimeToLiveCommand(
  input: DescribeTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.DescribeTimeToLive";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTimeToLiveInput: serializeAws_json1_0DescribeTimeToLiveInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTimeToLive",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetItemCommand(
  input: GetItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.GetItem";
  let body: any = {};
  const wrappedBody: any = {
    GetItemInput: serializeAws_json1_0GetItemInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetItem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListBackupsCommand(
  input: ListBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.ListBackups";
  let body: any = {};
  const wrappedBody: any = {
    ListBackupsInput: serializeAws_json1_0ListBackupsInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListBackups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListContributorInsightsCommand(
  input: ListContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.ListContributorInsights";
  let body: any = {};
  const wrappedBody: any = {
    ListContributorInsightsInput: serializeAws_json1_0ListContributorInsightsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListContributorInsights",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListGlobalTablesCommand(
  input: ListGlobalTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.ListGlobalTables";
  let body: any = {};
  const wrappedBody: any = {
    ListGlobalTablesInput: serializeAws_json1_0ListGlobalTablesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListGlobalTables",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListTablesCommand(
  input: ListTablesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.ListTables";
  let body: any = {};
  const wrappedBody: any = {
    ListTablesInput: serializeAws_json1_0ListTablesInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTables",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListTagsOfResourceCommand(
  input: ListTagsOfResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.ListTagsOfResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsOfResourceInput: serializeAws_json1_0ListTagsOfResourceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsOfResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0PutItemCommand(
  input: PutItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.PutItem";
  let body: any = {};
  const wrappedBody: any = {
    PutItemInput: serializeAws_json1_0PutItemInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutItem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0QueryCommand(
  input: QueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.Query";
  let body: any = {};
  const wrappedBody: any = {
    QueryInput: serializeAws_json1_0QueryInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Query",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RestoreTableFromBackupCommand(
  input: RestoreTableFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.RestoreTableFromBackup";
  let body: any = {};
  const wrappedBody: any = {
    RestoreTableFromBackupInput: serializeAws_json1_0RestoreTableFromBackupInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RestoreTableFromBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RestoreTableToPointInTimeCommand(
  input: RestoreTableToPointInTimeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.RestoreTableToPointInTime";
  let body: any = {};
  const wrappedBody: any = {
    RestoreTableToPointInTimeInput: serializeAws_json1_0RestoreTableToPointInTimeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RestoreTableToPointInTime",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ScanCommand(
  input: ScanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.Scan";
  let body: any = {};
  const wrappedBody: any = {
    ScanInput: serializeAws_json1_0ScanInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/Scan",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceInput: serializeAws_json1_0TagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0TransactGetItemsCommand(
  input: TransactGetItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.TransactGetItems";
  let body: any = {};
  const wrappedBody: any = {
    TransactGetItemsInput: serializeAws_json1_0TransactGetItemsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TransactGetItems",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0TransactWriteItemsCommand(
  input: TransactWriteItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.TransactWriteItems";
  let body: any = {};
  const wrappedBody: any = {
    TransactWriteItemsInput: serializeAws_json1_0TransactWriteItemsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TransactWriteItems",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceInput: serializeAws_json1_0UntagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateContinuousBackupsCommand(
  input: UpdateContinuousBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateContinuousBackups";
  let body: any = {};
  const wrappedBody: any = {
    UpdateContinuousBackupsInput: serializeAws_json1_0UpdateContinuousBackupsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateContinuousBackups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateContributorInsightsCommand(
  input: UpdateContributorInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateContributorInsights";
  let body: any = {};
  const wrappedBody: any = {
    UpdateContributorInsightsInput: serializeAws_json1_0UpdateContributorInsightsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateContributorInsights",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateGlobalTableCommand(
  input: UpdateGlobalTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateGlobalTable";
  let body: any = {};
  const wrappedBody: any = {
    UpdateGlobalTableInput: serializeAws_json1_0UpdateGlobalTableInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateGlobalTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateGlobalTableSettingsCommand(
  input: UpdateGlobalTableSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateGlobalTableSettings";
  let body: any = {};
  const wrappedBody: any = {
    UpdateGlobalTableSettingsInput: serializeAws_json1_0UpdateGlobalTableSettingsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateGlobalTableSettings",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateItemCommand(
  input: UpdateItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateItem";
  let body: any = {};
  const wrappedBody: any = {
    UpdateItemInput: serializeAws_json1_0UpdateItemInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateItem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateTableCommand(
  input: UpdateTableCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateTable";
  let body: any = {};
  const wrappedBody: any = {
    UpdateTableInput: serializeAws_json1_0UpdateTableInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateTable",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateTableReplicaAutoScalingCommand(
  input: UpdateTableReplicaAutoScalingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateTableReplicaAutoScaling";
  let body: any = {};
  const wrappedBody: any = {
    UpdateTableReplicaAutoScalingInput: serializeAws_json1_0UpdateTableReplicaAutoScalingInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateTableReplicaAutoScaling",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UpdateTimeToLiveCommand(
  input: UpdateTimeToLiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "DynamoDB_20120810.UpdateTimeToLive";
  let body: any = {};
  const wrappedBody: any = {
    UpdateTimeToLiveInput: serializeAws_json1_0UpdateTimeToLiveInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateTimeToLive",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_0DescribeEndpointsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeEndpointsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    default:
      response = {
        __type: `com.amazon.aws.sdk.endpointdiscovery#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0BatchGetItemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> {
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
}

async function deserializeAws_json1_0BatchGetItemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetItemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0BatchWriteItemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> {
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
}

async function deserializeAws_json1_0BatchWriteItemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchWriteItemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
      response = await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0CreateBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> {
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
}

async function deserializeAws_json1_0CreateBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupInUseException":
    case "com.amazonaws.dynamodb.v20120810#BackupInUseException":
      response = await deserializeAws_json1_0BackupInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb.v20120810#ContinuousBackupsUnavailableException":
      response = await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableInUseException":
    case "com.amazonaws.dynamodb.v20120810#TableInUseException":
      response = await deserializeAws_json1_0TableInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
      response = await deserializeAws_json1_0TableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0CreateGlobalTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> {
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
}

async function deserializeAws_json1_0CreateGlobalTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "GlobalTableAlreadyExistsException":
    case "com.amazonaws.dynamodb.v20120810#GlobalTableAlreadyExistsException":
      response = await deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
      response = await deserializeAws_json1_0TableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0CreateTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> {
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
}

async function deserializeAws_json1_0CreateTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DeleteBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
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
}

async function deserializeAws_json1_0DeleteBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupInUseException":
    case "com.amazonaws.dynamodb.v20120810#BackupInUseException":
      response = await deserializeAws_json1_0BackupInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#BackupNotFoundException":
      response = await deserializeAws_json1_0BackupNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DeleteItemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> {
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
}

async function deserializeAws_json1_0DeleteItemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteItemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException":
      response = await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
      response = await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb.v20120810#TransactionConflictException":
      response = await deserializeAws_json1_0TransactionConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DeleteTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> {
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
}

async function deserializeAws_json1_0DeleteTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#BackupNotFoundException":
      response = await deserializeAws_json1_0BackupNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeContinuousBackupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeContinuousBackupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContinuousBackupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
      response = await deserializeAws_json1_0TableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeContributorInsightsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeContributorInsightsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContributorInsightsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeGlobalTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeGlobalTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
      response = await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeGlobalTableSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalTableSettingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
      response = await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeLimitsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeLimitsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLimitsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTableReplicaAutoScalingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeTimeToLiveCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeTimeToLiveCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTimeToLiveCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0GetItemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> {
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
}

async function deserializeAws_json1_0GetItemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetItemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListBackupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> {
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
}

async function deserializeAws_json1_0ListBackupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListContributorInsightsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> {
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
}

async function deserializeAws_json1_0ListContributorInsightsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContributorInsightsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListGlobalTablesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> {
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
}

async function deserializeAws_json1_0ListGlobalTablesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGlobalTablesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListTablesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> {
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
}

async function deserializeAws_json1_0ListTablesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTablesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListTagsOfResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> {
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
}

async function deserializeAws_json1_0ListTagsOfResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsOfResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0PutItemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> {
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
}

async function deserializeAws_json1_0PutItemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutItemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException":
      response = await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
      response = await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb.v20120810#TransactionConflictException":
      response = await deserializeAws_json1_0TransactionConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0QueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> {
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
}

async function deserializeAws_json1_0QueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RestoreTableFromBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> {
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
}

async function deserializeAws_json1_0RestoreTableFromBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupInUseException":
    case "com.amazonaws.dynamodb.v20120810#BackupInUseException":
      response = await deserializeAws_json1_0BackupInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#BackupNotFoundException":
      response = await deserializeAws_json1_0BackupNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb.v20120810#TableAlreadyExistsException":
      response = await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableInUseException":
    case "com.amazonaws.dynamodb.v20120810#TableInUseException":
      response = await deserializeAws_json1_0TableInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RestoreTableToPointInTimeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> {
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
}

async function deserializeAws_json1_0RestoreTableToPointInTimeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableToPointInTimeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRestoreTimeException":
    case "com.amazonaws.dynamodb.v20120810#InvalidRestoreTimeException":
      response = await deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "PointInTimeRecoveryUnavailableException":
    case "com.amazonaws.dynamodb.v20120810#PointInTimeRecoveryUnavailableException":
      response = await deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableAlreadyExistsException":
    case "com.amazonaws.dynamodb.v20120810#TableAlreadyExistsException":
      response = await deserializeAws_json1_0TableAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableInUseException":
    case "com.amazonaws.dynamodb.v20120810#TableInUseException":
      response = await deserializeAws_json1_0TableInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
      response = await deserializeAws_json1_0TableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ScanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanCommandOutput> {
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
}

async function deserializeAws_json1_0ScanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScanCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0TransactGetItemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> {
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
}

async function deserializeAws_json1_0TransactGetItemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactGetItemsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb.v20120810#TransactionCanceledException":
      response = await deserializeAws_json1_0TransactionCanceledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0TransactWriteItemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> {
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
}

async function deserializeAws_json1_0TransactWriteItemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransactWriteItemsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.dynamodb.v20120810#IdempotentParameterMismatchException":
      response = await deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TransactionCanceledException":
    case "com.amazonaws.dynamodb.v20120810#TransactionCanceledException":
      response = await deserializeAws_json1_0TransactionCanceledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TransactionInProgressException":
    case "com.amazonaws.dynamodb.v20120810#TransactionInProgressException":
      response = await deserializeAws_json1_0TransactionInProgressExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateContinuousBackupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateContinuousBackupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContinuousBackupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ContinuousBackupsUnavailableException":
    case "com.amazonaws.dynamodb.v20120810#ContinuousBackupsUnavailableException":
      response = await deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
      response = await deserializeAws_json1_0TableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateContributorInsightsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateContributorInsightsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContributorInsightsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateGlobalTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateGlobalTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
      response = await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicaAlreadyExistsException":
    case "com.amazonaws.dynamodb.v20120810#ReplicaAlreadyExistsException":
      response = await deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ReplicaNotFoundException":
      response = await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#TableNotFoundException":
      response = await deserializeAws_json1_0TableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateGlobalTableSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalTableSettingsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "GlobalTableNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#GlobalTableNotFoundException":
      response = await deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "IndexNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#IndexNotFoundException":
      response = await deserializeAws_json1_0IndexNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ReplicaNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ReplicaNotFoundException":
      response = await deserializeAws_json1_0ReplicaNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateItemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateItemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateItemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ConditionalCheckFailedException":
    case "com.amazonaws.dynamodb.v20120810#ConditionalCheckFailedException":
      response = await deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ItemCollectionSizeLimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#ItemCollectionSizeLimitExceededException":
      response = await deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ProvisionedThroughputExceededException":
    case "com.amazonaws.dynamodb.v20120810#ProvisionedThroughputExceededException":
      response = await deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.dynamodb.v20120810#RequestLimitExceeded":
      response = await deserializeAws_json1_0RequestLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TransactionConflictException":
    case "com.amazonaws.dynamodb.v20120810#TransactionConflictException":
      response = await deserializeAws_json1_0TransactionConflictExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateTableCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateTableCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableReplicaAutoScalingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UpdateTimeToLiveCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> {
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
}

async function deserializeAws_json1_0UpdateTimeToLiveCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTimeToLiveCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEndpointException":
    case "com.amazon.aws.sdk.endpointdiscovery#InvalidEndpointException":
      response = await deserializeAws_json1_0InvalidEndpointExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.dynamodb.v20120810#InternalServerError":
      response = await deserializeAws_json1_0InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.dynamodb.v20120810#LimitExceededException":
      response = await deserializeAws_json1_0LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.dynamodb.v20120810#ResourceInUseException":
      response = await deserializeAws_json1_0ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.dynamodb.v20120810#ResourceNotFoundException":
      response = await deserializeAws_json1_0ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.dynamodb.v20120810#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_0InvalidEndpointExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEndpointException> => {
  const deserialized: any = deserializeAws_json1_0InvalidEndpointException(
    output.body,
    context
  );
  const contents: InvalidEndpointException = {
    __type: "InvalidEndpointException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0BackupInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BackupInUseException> => {
  const deserialized: any = deserializeAws_json1_0BackupInUseException(
    output.body,
    context
  );
  const contents: BackupInUseException = {
    __type: "BackupInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0BackupNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BackupNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0BackupNotFoundException(
    output.body,
    context
  );
  const contents: BackupNotFoundException = {
    __type: "BackupNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConditionalCheckFailedException> => {
  const deserialized: any = deserializeAws_json1_0ConditionalCheckFailedException(
    output.body,
    context
  );
  const contents: ConditionalCheckFailedException = {
    __type: "ConditionalCheckFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ContinuousBackupsUnavailableException> => {
  const deserialized: any = deserializeAws_json1_0ContinuousBackupsUnavailableException(
    output.body,
    context
  );
  const contents: ContinuousBackupsUnavailableException = {
    __type: "ContinuousBackupsUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GlobalTableAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_0GlobalTableAlreadyExistsException(
    output.body,
    context
  );
  const contents: GlobalTableAlreadyExistsException = {
    __type: "GlobalTableAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GlobalTableNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0GlobalTableNotFoundException(
    output.body,
    context
  );
  const contents: GlobalTableNotFoundException = {
    __type: "GlobalTableNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const deserialized: any = deserializeAws_json1_0IdempotentParameterMismatchException(
    output.body,
    context
  );
  const contents: IdempotentParameterMismatchException = {
    __type: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0IndexNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IndexNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0IndexNotFoundException(
    output.body,
    context
  );
  const contents: IndexNotFoundException = {
    __type: "IndexNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const deserialized: any = deserializeAws_json1_0InternalServerError(
    output.body,
    context
  );
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRestoreTimeException> => {
  const deserialized: any = deserializeAws_json1_0InvalidRestoreTimeException(
    output.body,
    context
  );
  const contents: InvalidRestoreTimeException = {
    __type: "InvalidRestoreTimeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ItemCollectionSizeLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(
    output.body,
    context
  );
  const contents: ItemCollectionSizeLimitExceededException = {
    __type: "ItemCollectionSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_0LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PointInTimeRecoveryUnavailableException> => {
  const deserialized: any = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(
    output.body,
    context
  );
  const contents: PointInTimeRecoveryUnavailableException = {
    __type: "PointInTimeRecoveryUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ProvisionedThroughputExceededException> => {
  const deserialized: any = deserializeAws_json1_0ProvisionedThroughputExceededException(
    output.body,
    context
  );
  const contents: ProvisionedThroughputExceededException = {
    __type: "ProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ReplicaAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_0ReplicaAlreadyExistsException(
    output.body,
    context
  );
  const contents: ReplicaAlreadyExistsException = {
    __type: "ReplicaAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ReplicaNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ReplicaNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0ReplicaNotFoundException(
    output.body,
    context
  );
  const contents: ReplicaNotFoundException = {
    __type: "ReplicaNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0RequestLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestLimitExceeded> => {
  const deserialized: any = deserializeAws_json1_0RequestLimitExceeded(
    output.body,
    context
  );
  const contents: RequestLimitExceeded = {
    __type: "RequestLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const deserialized: any = deserializeAws_json1_0ResourceInUseException(
    output.body,
    context
  );
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TableAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TableAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_0TableAlreadyExistsException(
    output.body,
    context
  );
  const contents: TableAlreadyExistsException = {
    __type: "TableAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TableInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TableInUseException> => {
  const deserialized: any = deserializeAws_json1_0TableInUseException(
    output.body,
    context
  );
  const contents: TableInUseException = {
    __type: "TableInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TableNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TableNotFoundException> => {
  const deserialized: any = deserializeAws_json1_0TableNotFoundException(
    output.body,
    context
  );
  const contents: TableNotFoundException = {
    __type: "TableNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TransactionCanceledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TransactionCanceledException> => {
  const deserialized: any = deserializeAws_json1_0TransactionCanceledException(
    output.body,
    context
  );
  const contents: TransactionCanceledException = {
    __type: "TransactionCanceledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TransactionConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TransactionConflictException> => {
  const deserialized: any = deserializeAws_json1_0TransactionConflictException(
    output.body,
    context
  );
  const contents: TransactionConflictException = {
    __type: "TransactionConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TransactionInProgressExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TransactionInProgressException> => {
  const deserialized: any = deserializeAws_json1_0TransactionInProgressException(
    output.body,
    context
  );
  const contents: TransactionInProgressException = {
    __type: "TransactionInProgressException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0DescribeEndpointsRequest = (
  input: DescribeEndpointsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_0AttributeDefinition = (
  input: AttributeDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeType !== undefined) {
    bodyParams["AttributeType"] = input.AttributeType;
  }
  return bodyParams;
};

const serializeAws_json1_0AttributeDefinitions = (
  input: Array<AttributeDefinition>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0AttributeDefinition(entry, context)
  );
};

const serializeAws_json1_0AttributeNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0AttributeUpdates = (
  input: { [key: string]: AttributeValueUpdate },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0AttributeValueUpdate(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_json1_0AttributeValue = (
  input: AttributeValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.B !== undefined) {
    bodyParams["B"] = context.base64Encoder(input.B);
  }
  if (input.BOOL !== undefined) {
    bodyParams["BOOL"] = input.BOOL;
  }
  if (input.BS !== undefined) {
    bodyParams["BS"] = serializeAws_json1_0BinarySetAttributeValue(
      input.BS,
      context
    );
  }
  if (input.L !== undefined) {
    bodyParams["L"] = serializeAws_json1_0ListAttributeValue(input.L, context);
  }
  if (input.M !== undefined) {
    bodyParams["M"] = serializeAws_json1_0MapAttributeValue(input.M, context);
  }
  if (input.N !== undefined) {
    bodyParams["N"] = input.N;
  }
  if (input.NS !== undefined) {
    bodyParams["NS"] = serializeAws_json1_0NumberSetAttributeValue(
      input.NS,
      context
    );
  }
  if (input.NULL !== undefined) {
    bodyParams["NULL"] = input.NULL;
  }
  if (input.S !== undefined) {
    bodyParams["S"] = input.S;
  }
  if (input.SS !== undefined) {
    bodyParams["SS"] = serializeAws_json1_0StringSetAttributeValue(
      input.SS,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0AttributeValueList = (
  input: Array<AttributeValue>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0AttributeValue(entry, context)
  );
};

const serializeAws_json1_0AttributeValueUpdate = (
  input: AttributeValueUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = serializeAws_json1_0AttributeValue(
      input.Value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0AutoScalingPolicyUpdate = (
  input: AutoScalingPolicyUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PolicyName !== undefined) {
    bodyParams["PolicyName"] = input.PolicyName;
  }
  if (input.TargetTrackingScalingPolicyConfiguration !== undefined) {
    bodyParams[
      "TargetTrackingScalingPolicyConfiguration"
    ] = serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(
      input.TargetTrackingScalingPolicyConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0AutoScalingSettingsUpdate = (
  input: AutoScalingSettingsUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AutoScalingDisabled !== undefined) {
    bodyParams["AutoScalingDisabled"] = input.AutoScalingDisabled;
  }
  if (input.AutoScalingRoleArn !== undefined) {
    bodyParams["AutoScalingRoleArn"] = input.AutoScalingRoleArn;
  }
  if (input.MaximumUnits !== undefined) {
    bodyParams["MaximumUnits"] = input.MaximumUnits;
  }
  if (input.MinimumUnits !== undefined) {
    bodyParams["MinimumUnits"] = input.MinimumUnits;
  }
  if (input.ScalingPolicyUpdate !== undefined) {
    bodyParams[
      "ScalingPolicyUpdate"
    ] = serializeAws_json1_0AutoScalingPolicyUpdate(
      input.ScalingPolicyUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (
  input: AutoScalingTargetTrackingScalingPolicyConfigurationUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DisableScaleIn !== undefined) {
    bodyParams["DisableScaleIn"] = input.DisableScaleIn;
  }
  if (input.ScaleInCooldown !== undefined) {
    bodyParams["ScaleInCooldown"] = input.ScaleInCooldown;
  }
  if (input.ScaleOutCooldown !== undefined) {
    bodyParams["ScaleOutCooldown"] = input.ScaleOutCooldown;
  }
  if (input.TargetValue !== undefined) {
    bodyParams["TargetValue"] = input.TargetValue;
  }
  return bodyParams;
};

const serializeAws_json1_0BatchGetItemInput = (
  input: BatchGetItemInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RequestItems !== undefined) {
    bodyParams["RequestItems"] = serializeAws_json1_0BatchGetRequestMap(
      input.RequestItems,
      context
    );
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  return bodyParams;
};

const serializeAws_json1_0BatchGetRequestMap = (
  input: { [key: string]: KeysAndAttributes },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0KeysAndAttributes(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0BatchWriteItemInput = (
  input: BatchWriteItemInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RequestItems !== undefined) {
    bodyParams["RequestItems"] = serializeAws_json1_0BatchWriteItemRequestMap(
      input.RequestItems,
      context
    );
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ReturnItemCollectionMetrics !== undefined) {
    bodyParams["ReturnItemCollectionMetrics"] =
      input.ReturnItemCollectionMetrics;
  }
  return bodyParams;
};

const serializeAws_json1_0BatchWriteItemRequestMap = (
  input: { [key: string]: Array<WriteRequest> },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0WriteRequests(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0BinarySetAttributeValue = (
  input: Array<Uint8Array>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => context.base64Encoder(entry));
};

const serializeAws_json1_0Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeValueList !== undefined) {
    bodyParams["AttributeValueList"] = serializeAws_json1_0AttributeValueList(
      input.AttributeValueList,
      context
    );
  }
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  return bodyParams;
};

const serializeAws_json1_0ConditionCheck = (
  input: ConditionCheck,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
    bodyParams["ReturnValuesOnConditionCheckFailure"] =
      input.ReturnValuesOnConditionCheckFailure;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0CreateBackupInput = (
  input: CreateBackupInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupName !== undefined) {
    bodyParams["BackupName"] = input.BackupName;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0CreateGlobalSecondaryIndexAction = (
  input: CreateGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.KeySchema !== undefined) {
    bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(
      input.KeySchema,
      context
    );
  }
  if (input.Projection !== undefined) {
    bodyParams["Projection"] = serializeAws_json1_0Projection(
      input.Projection,
      context
    );
  }
  if (input.ProvisionedThroughput !== undefined) {
    bodyParams[
      "ProvisionedThroughput"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughput,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0CreateGlobalTableInput = (
  input: CreateGlobalTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalTableName !== undefined) {
    bodyParams["GlobalTableName"] = input.GlobalTableName;
  }
  if (input.ReplicationGroup !== undefined) {
    bodyParams["ReplicationGroup"] = serializeAws_json1_0ReplicaList(
      input.ReplicationGroup,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0CreateReplicaAction = (
  input: CreateReplicaAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0CreateReplicationGroupMemberAction = (
  input: CreateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalSecondaryIndexes !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexes"
    ] = serializeAws_json1_0ReplicaGlobalSecondaryIndexList(
      input.GlobalSecondaryIndexes,
      context
    );
  }
  if (input.KMSMasterKeyId !== undefined) {
    bodyParams["KMSMasterKeyId"] = input.KMSMasterKeyId;
  }
  if (input.ProvisionedThroughputOverride !== undefined) {
    bodyParams[
      "ProvisionedThroughputOverride"
    ] = serializeAws_json1_0ProvisionedThroughputOverride(
      input.ProvisionedThroughputOverride,
      context
    );
  }
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0CreateTableInput = (
  input: CreateTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeDefinitions !== undefined) {
    bodyParams[
      "AttributeDefinitions"
    ] = serializeAws_json1_0AttributeDefinitions(
      input.AttributeDefinitions,
      context
    );
  }
  if (input.BillingMode !== undefined) {
    bodyParams["BillingMode"] = input.BillingMode;
  }
  if (input.GlobalSecondaryIndexes !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexes"
    ] = serializeAws_json1_0GlobalSecondaryIndexList(
      input.GlobalSecondaryIndexes,
      context
    );
  }
  if (input.KeySchema !== undefined) {
    bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(
      input.KeySchema,
      context
    );
  }
  if (input.LocalSecondaryIndexes !== undefined) {
    bodyParams[
      "LocalSecondaryIndexes"
    ] = serializeAws_json1_0LocalSecondaryIndexList(
      input.LocalSecondaryIndexes,
      context
    );
  }
  if (input.ProvisionedThroughput !== undefined) {
    bodyParams[
      "ProvisionedThroughput"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughput,
      context
    );
  }
  if (input.SSESpecification !== undefined) {
    bodyParams["SSESpecification"] = serializeAws_json1_0SSESpecification(
      input.SSESpecification,
      context
    );
  }
  if (input.StreamSpecification !== undefined) {
    bodyParams["StreamSpecification"] = serializeAws_json1_0StreamSpecification(
      input.StreamSpecification,
      context
    );
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_0TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_0Delete = (
  input: Delete,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
    bodyParams["ReturnValuesOnConditionCheckFailure"] =
      input.ReturnValuesOnConditionCheckFailure;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteBackupInput = (
  input: DeleteBackupInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupArn !== undefined) {
    bodyParams["BackupArn"] = input.BackupArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteGlobalSecondaryIndexAction = (
  input: DeleteGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteItemInput = (
  input: DeleteItemInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ConditionalOperator !== undefined) {
    bodyParams["ConditionalOperator"] = input.ConditionalOperator;
  }
  if (input.Expected !== undefined) {
    bodyParams["Expected"] = serializeAws_json1_0ExpectedAttributeMap(
      input.Expected,
      context
    );
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ReturnItemCollectionMetrics !== undefined) {
    bodyParams["ReturnItemCollectionMetrics"] =
      input.ReturnItemCollectionMetrics;
  }
  if (input.ReturnValues !== undefined) {
    bodyParams["ReturnValues"] = input.ReturnValues;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteReplicaAction = (
  input: DeleteReplicaAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteReplicationGroupMemberAction = (
  input: DeleteReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteRequest = (
  input: DeleteRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteTableInput = (
  input: DeleteTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeBackupInput = (
  input: DescribeBackupInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupArn !== undefined) {
    bodyParams["BackupArn"] = input.BackupArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeContinuousBackupsInput = (
  input: DescribeContinuousBackupsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeContributorInsightsInput = (
  input: DescribeContributorInsightsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeGlobalTableInput = (
  input: DescribeGlobalTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalTableName !== undefined) {
    bodyParams["GlobalTableName"] = input.GlobalTableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeGlobalTableSettingsInput = (
  input: DescribeGlobalTableSettingsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalTableName !== undefined) {
    bodyParams["GlobalTableName"] = input.GlobalTableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeLimitsInput = (
  input: DescribeLimitsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_0DescribeTableInput = (
  input: DescribeTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeTableReplicaAutoScalingInput = (
  input: DescribeTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeTimeToLiveInput = (
  input: DescribeTimeToLiveInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0ExpectedAttributeMap = (
  input: { [key: string]: ExpectedAttributeValue },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0ExpectedAttributeValue(
      input[key],
      context
    );
  });
  return mapParams;
};

const serializeAws_json1_0ExpectedAttributeValue = (
  input: ExpectedAttributeValue,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeValueList !== undefined) {
    bodyParams["AttributeValueList"] = serializeAws_json1_0AttributeValueList(
      input.AttributeValueList,
      context
    );
  }
  if (input.ComparisonOperator !== undefined) {
    bodyParams["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.Exists !== undefined) {
    bodyParams["Exists"] = input.Exists;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = serializeAws_json1_0AttributeValue(
      input.Value,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ExpressionAttributeNameMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_0ExpressionAttributeValueMap = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0FilterConditionMap = (
  input: { [key: string]: Condition },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0Condition(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0Get = (input: Get, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ProjectionExpression !== undefined) {
    bodyParams["ProjectionExpression"] = input.ProjectionExpression;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0GetItemInput = (
  input: GetItemInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributesToGet !== undefined) {
    bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(
      input.AttributesToGet,
      context
    );
  }
  if (input.ConsistentRead !== undefined) {
    bodyParams["ConsistentRead"] = input.ConsistentRead;
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ProjectionExpression !== undefined) {
    bodyParams["ProjectionExpression"] = input.ProjectionExpression;
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0GlobalSecondaryIndex = (
  input: GlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.KeySchema !== undefined) {
    bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(
      input.KeySchema,
      context
    );
  }
  if (input.Projection !== undefined) {
    bodyParams["Projection"] = serializeAws_json1_0Projection(
      input.Projection,
      context
    );
  }
  if (input.ProvisionedThroughput !== undefined) {
    bodyParams[
      "ProvisionedThroughput"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughput,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = (
  input: GlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined) {
    bodyParams[
      "ProvisionedWriteCapacityAutoScalingUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ProvisionedWriteCapacityAutoScalingUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = (
  input: Array<GlobalSecondaryIndexAutoScalingUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context)
  );
};

const serializeAws_json1_0GlobalSecondaryIndexList = (
  input: Array<GlobalSecondaryIndex>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0GlobalSecondaryIndex(entry, context)
  );
};

const serializeAws_json1_0GlobalSecondaryIndexUpdate = (
  input: GlobalSecondaryIndexUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Create !== undefined) {
    bodyParams["Create"] = serializeAws_json1_0CreateGlobalSecondaryIndexAction(
      input.Create,
      context
    );
  }
  if (input.Delete !== undefined) {
    bodyParams["Delete"] = serializeAws_json1_0DeleteGlobalSecondaryIndexAction(
      input.Delete,
      context
    );
  }
  if (input.Update !== undefined) {
    bodyParams["Update"] = serializeAws_json1_0UpdateGlobalSecondaryIndexAction(
      input.Update,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0GlobalSecondaryIndexUpdateList = (
  input: Array<GlobalSecondaryIndexUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context)
  );
};

const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = (
  input: GlobalTableGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== undefined) {
    bodyParams[
      "ProvisionedWriteCapacityAutoScalingSettingsUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ProvisionedWriteCapacityAutoScalingSettingsUpdate,
      context
    );
  }
  if (input.ProvisionedWriteCapacityUnits !== undefined) {
    bodyParams["ProvisionedWriteCapacityUnits"] =
      input.ProvisionedWriteCapacityUnits;
  }
  return bodyParams;
};

const serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = (
  input: Array<GlobalTableGlobalSecondaryIndexSettingsUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(
      entry,
      context
    )
  );
};

const serializeAws_json1_0Key = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0KeyConditions = (
  input: { [key: string]: Condition },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0Condition(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0KeyList = (
  input: Array<{ [key: string]: AttributeValue }>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_0Key(entry, context));
};

const serializeAws_json1_0KeySchema = (
  input: Array<KeySchemaElement>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0KeySchemaElement(entry, context)
  );
};

const serializeAws_json1_0KeySchemaElement = (
  input: KeySchemaElement,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.KeyType !== undefined) {
    bodyParams["KeyType"] = input.KeyType;
  }
  return bodyParams;
};

const serializeAws_json1_0KeysAndAttributes = (
  input: KeysAndAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributesToGet !== undefined) {
    bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(
      input.AttributesToGet,
      context
    );
  }
  if (input.ConsistentRead !== undefined) {
    bodyParams["ConsistentRead"] = input.ConsistentRead;
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.Keys !== undefined) {
    bodyParams["Keys"] = serializeAws_json1_0KeyList(input.Keys, context);
  }
  if (input.ProjectionExpression !== undefined) {
    bodyParams["ProjectionExpression"] = input.ProjectionExpression;
  }
  return bodyParams;
};

const serializeAws_json1_0ListAttributeValue = (
  input: Array<AttributeValue>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0AttributeValue(entry, context)
  );
};

const serializeAws_json1_0ListBackupsInput = (
  input: ListBackupsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupType !== undefined) {
    bodyParams["BackupType"] = input.BackupType;
  }
  if (input.ExclusiveStartBackupArn !== undefined) {
    bodyParams["ExclusiveStartBackupArn"] = input.ExclusiveStartBackupArn;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.TimeRangeLowerBound !== undefined) {
    bodyParams["TimeRangeLowerBound"] = Math.round(
      input.TimeRangeLowerBound.getTime() / 1000
    );
  }
  if (input.TimeRangeUpperBound !== undefined) {
    bodyParams["TimeRangeUpperBound"] = Math.round(
      input.TimeRangeUpperBound.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ListContributorInsightsInput = (
  input: ListContributorInsightsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0ListGlobalTablesInput = (
  input: ListGlobalTablesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExclusiveStartGlobalTableName !== undefined) {
    bodyParams["ExclusiveStartGlobalTableName"] =
      input.ExclusiveStartGlobalTableName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0ListTablesInput = (
  input: ListTablesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExclusiveStartTableName !== undefined) {
    bodyParams["ExclusiveStartTableName"] = input.ExclusiveStartTableName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  return bodyParams;
};

const serializeAws_json1_0ListTagsOfResourceInput = (
  input: ListTagsOfResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_0LocalSecondaryIndex = (
  input: LocalSecondaryIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.KeySchema !== undefined) {
    bodyParams["KeySchema"] = serializeAws_json1_0KeySchema(
      input.KeySchema,
      context
    );
  }
  if (input.Projection !== undefined) {
    bodyParams["Projection"] = serializeAws_json1_0Projection(
      input.Projection,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0LocalSecondaryIndexList = (
  input: Array<LocalSecondaryIndex>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0LocalSecondaryIndex(entry, context)
  );
};

const serializeAws_json1_0MapAttributeValue = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0NonKeyAttributeNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0NumberSetAttributeValue = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0PointInTimeRecoverySpecification = (
  input: PointInTimeRecoverySpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PointInTimeRecoveryEnabled !== undefined) {
    bodyParams["PointInTimeRecoveryEnabled"] = input.PointInTimeRecoveryEnabled;
  }
  return bodyParams;
};

const serializeAws_json1_0Projection = (
  input: Projection,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NonKeyAttributes !== undefined) {
    bodyParams[
      "NonKeyAttributes"
    ] = serializeAws_json1_0NonKeyAttributeNameList(
      input.NonKeyAttributes,
      context
    );
  }
  if (input.ProjectionType !== undefined) {
    bodyParams["ProjectionType"] = input.ProjectionType;
  }
  return bodyParams;
};

const serializeAws_json1_0ProvisionedThroughput = (
  input: ProvisionedThroughput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ReadCapacityUnits !== undefined) {
    bodyParams["ReadCapacityUnits"] = input.ReadCapacityUnits;
  }
  if (input.WriteCapacityUnits !== undefined) {
    bodyParams["WriteCapacityUnits"] = input.WriteCapacityUnits;
  }
  return bodyParams;
};

const serializeAws_json1_0ProvisionedThroughputOverride = (
  input: ProvisionedThroughputOverride,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ReadCapacityUnits !== undefined) {
    bodyParams["ReadCapacityUnits"] = input.ReadCapacityUnits;
  }
  return bodyParams;
};

const serializeAws_json1_0Put = (input: Put, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Item !== undefined) {
    bodyParams["Item"] = serializeAws_json1_0PutItemInputAttributeMap(
      input.Item,
      context
    );
  }
  if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
    bodyParams["ReturnValuesOnConditionCheckFailure"] =
      input.ReturnValuesOnConditionCheckFailure;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0PutItemInput = (
  input: PutItemInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ConditionalOperator !== undefined) {
    bodyParams["ConditionalOperator"] = input.ConditionalOperator;
  }
  if (input.Expected !== undefined) {
    bodyParams["Expected"] = serializeAws_json1_0ExpectedAttributeMap(
      input.Expected,
      context
    );
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Item !== undefined) {
    bodyParams["Item"] = serializeAws_json1_0PutItemInputAttributeMap(
      input.Item,
      context
    );
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ReturnItemCollectionMetrics !== undefined) {
    bodyParams["ReturnItemCollectionMetrics"] =
      input.ReturnItemCollectionMetrics;
  }
  if (input.ReturnValues !== undefined) {
    bodyParams["ReturnValues"] = input.ReturnValues;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0PutItemInputAttributeMap = (
  input: { [key: string]: AttributeValue },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_0AttributeValue(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_0PutRequest = (
  input: PutRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Item !== undefined) {
    bodyParams["Item"] = serializeAws_json1_0PutItemInputAttributeMap(
      input.Item,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0QueryInput = (
  input: QueryInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributesToGet !== undefined) {
    bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(
      input.AttributesToGet,
      context
    );
  }
  if (input.ConditionalOperator !== undefined) {
    bodyParams["ConditionalOperator"] = input.ConditionalOperator;
  }
  if (input.ConsistentRead !== undefined) {
    bodyParams["ConsistentRead"] = input.ConsistentRead;
  }
  if (input.ExclusiveStartKey !== undefined) {
    bodyParams["ExclusiveStartKey"] = serializeAws_json1_0Key(
      input.ExclusiveStartKey,
      context
    );
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.FilterExpression !== undefined) {
    bodyParams["FilterExpression"] = input.FilterExpression;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.KeyConditionExpression !== undefined) {
    bodyParams["KeyConditionExpression"] = input.KeyConditionExpression;
  }
  if (input.KeyConditions !== undefined) {
    bodyParams["KeyConditions"] = serializeAws_json1_0KeyConditions(
      input.KeyConditions,
      context
    );
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.ProjectionExpression !== undefined) {
    bodyParams["ProjectionExpression"] = input.ProjectionExpression;
  }
  if (input.QueryFilter !== undefined) {
    bodyParams["QueryFilter"] = serializeAws_json1_0FilterConditionMap(
      input.QueryFilter,
      context
    );
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ScanIndexForward !== undefined) {
    bodyParams["ScanIndexForward"] = input.ScanIndexForward;
  }
  if (input.Select !== undefined) {
    bodyParams["Select"] = input.Select;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0Replica = (
  input: Replica,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaAutoScalingUpdate = (
  input: ReplicaAutoScalingUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  if (input.ReplicaGlobalSecondaryIndexUpdates !== undefined) {
    bodyParams[
      "ReplicaGlobalSecondaryIndexUpdates"
    ] = serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(
      input.ReplicaGlobalSecondaryIndexUpdates,
      context
    );
  }
  if (input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== undefined) {
    bodyParams[
      "ReplicaProvisionedReadCapacityAutoScalingUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ReplicaProvisionedReadCapacityAutoScalingUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaAutoScalingUpdateList = (
  input: Array<ReplicaAutoScalingUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context)
  );
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndex = (
  input: ReplicaGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.ProvisionedThroughputOverride !== undefined) {
    bodyParams[
      "ProvisionedThroughputOverride"
    ] = serializeAws_json1_0ProvisionedThroughputOverride(
      input.ProvisionedThroughputOverride,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = (
  input: ReplicaGlobalSecondaryIndexAutoScalingUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.ProvisionedReadCapacityAutoScalingUpdate !== undefined) {
    bodyParams[
      "ProvisionedReadCapacityAutoScalingUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ProvisionedReadCapacityAutoScalingUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (
  input: Array<ReplicaGlobalSecondaryIndexAutoScalingUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(
      entry,
      context
    )
  );
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexList = (
  input: Array<ReplicaGlobalSecondaryIndex>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context)
  );
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = (
  input: ReplicaGlobalSecondaryIndexSettingsUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined) {
    bodyParams[
      "ProvisionedReadCapacityAutoScalingSettingsUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ProvisionedReadCapacityAutoScalingSettingsUpdate,
      context
    );
  }
  if (input.ProvisionedReadCapacityUnits !== undefined) {
    bodyParams["ProvisionedReadCapacityUnits"] =
      input.ProvisionedReadCapacityUnits;
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = (
  input: Array<ReplicaGlobalSecondaryIndexSettingsUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(
      entry,
      context
    )
  );
};

const serializeAws_json1_0ReplicaList = (
  input: Array<Replica>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0Replica(entry, context)
  );
};

const serializeAws_json1_0ReplicaSettingsUpdate = (
  input: ReplicaSettingsUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  if (input.ReplicaGlobalSecondaryIndexSettingsUpdate !== undefined) {
    bodyParams[
      "ReplicaGlobalSecondaryIndexSettingsUpdate"
    ] = serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(
      input.ReplicaGlobalSecondaryIndexSettingsUpdate,
      context
    );
  }
  if (
    input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined
  ) {
    bodyParams[
      "ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate,
      context
    );
  }
  if (input.ReplicaProvisionedReadCapacityUnits !== undefined) {
    bodyParams["ReplicaProvisionedReadCapacityUnits"] =
      input.ReplicaProvisionedReadCapacityUnits;
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaSettingsUpdateList = (
  input: Array<ReplicaSettingsUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicaSettingsUpdate(entry, context)
  );
};

const serializeAws_json1_0ReplicaUpdate = (
  input: ReplicaUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Create !== undefined) {
    bodyParams["Create"] = serializeAws_json1_0CreateReplicaAction(
      input.Create,
      context
    );
  }
  if (input.Delete !== undefined) {
    bodyParams["Delete"] = serializeAws_json1_0DeleteReplicaAction(
      input.Delete,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicaUpdateList = (
  input: Array<ReplicaUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicaUpdate(entry, context)
  );
};

const serializeAws_json1_0ReplicationGroupUpdate = (
  input: ReplicationGroupUpdate,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Create !== undefined) {
    bodyParams[
      "Create"
    ] = serializeAws_json1_0CreateReplicationGroupMemberAction(
      input.Create,
      context
    );
  }
  if (input.Delete !== undefined) {
    bodyParams[
      "Delete"
    ] = serializeAws_json1_0DeleteReplicationGroupMemberAction(
      input.Delete,
      context
    );
  }
  if (input.Update !== undefined) {
    bodyParams[
      "Update"
    ] = serializeAws_json1_0UpdateReplicationGroupMemberAction(
      input.Update,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ReplicationGroupUpdateList = (
  input: Array<ReplicationGroupUpdate>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ReplicationGroupUpdate(entry, context)
  );
};

const serializeAws_json1_0RestoreTableFromBackupInput = (
  input: RestoreTableFromBackupInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupArn !== undefined) {
    bodyParams["BackupArn"] = input.BackupArn;
  }
  if (input.BillingModeOverride !== undefined) {
    bodyParams["BillingModeOverride"] = input.BillingModeOverride;
  }
  if (input.GlobalSecondaryIndexOverride !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexOverride"
    ] = serializeAws_json1_0GlobalSecondaryIndexList(
      input.GlobalSecondaryIndexOverride,
      context
    );
  }
  if (input.LocalSecondaryIndexOverride !== undefined) {
    bodyParams[
      "LocalSecondaryIndexOverride"
    ] = serializeAws_json1_0LocalSecondaryIndexList(
      input.LocalSecondaryIndexOverride,
      context
    );
  }
  if (input.ProvisionedThroughputOverride !== undefined) {
    bodyParams[
      "ProvisionedThroughputOverride"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughputOverride,
      context
    );
  }
  if (input.TargetTableName !== undefined) {
    bodyParams["TargetTableName"] = input.TargetTableName;
  }
  return bodyParams;
};

const serializeAws_json1_0RestoreTableToPointInTimeInput = (
  input: RestoreTableToPointInTimeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BillingModeOverride !== undefined) {
    bodyParams["BillingModeOverride"] = input.BillingModeOverride;
  }
  if (input.GlobalSecondaryIndexOverride !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexOverride"
    ] = serializeAws_json1_0GlobalSecondaryIndexList(
      input.GlobalSecondaryIndexOverride,
      context
    );
  }
  if (input.LocalSecondaryIndexOverride !== undefined) {
    bodyParams[
      "LocalSecondaryIndexOverride"
    ] = serializeAws_json1_0LocalSecondaryIndexList(
      input.LocalSecondaryIndexOverride,
      context
    );
  }
  if (input.ProvisionedThroughputOverride !== undefined) {
    bodyParams[
      "ProvisionedThroughputOverride"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughputOverride,
      context
    );
  }
  if (input.RestoreDateTime !== undefined) {
    bodyParams["RestoreDateTime"] = Math.round(
      input.RestoreDateTime.getTime() / 1000
    );
  }
  if (input.SourceTableName !== undefined) {
    bodyParams["SourceTableName"] = input.SourceTableName;
  }
  if (input.TargetTableName !== undefined) {
    bodyParams["TargetTableName"] = input.TargetTableName;
  }
  if (input.UseLatestRestorableTime !== undefined) {
    bodyParams["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
  }
  return bodyParams;
};

const serializeAws_json1_0SSESpecification = (
  input: SSESpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.KMSMasterKeyId !== undefined) {
    bodyParams["KMSMasterKeyId"] = input.KMSMasterKeyId;
  }
  if (input.SSEType !== undefined) {
    bodyParams["SSEType"] = input.SSEType;
  }
  return bodyParams;
};

const serializeAws_json1_0ScanInput = (
  input: ScanInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributesToGet !== undefined) {
    bodyParams["AttributesToGet"] = serializeAws_json1_0AttributeNameList(
      input.AttributesToGet,
      context
    );
  }
  if (input.ConditionalOperator !== undefined) {
    bodyParams["ConditionalOperator"] = input.ConditionalOperator;
  }
  if (input.ConsistentRead !== undefined) {
    bodyParams["ConsistentRead"] = input.ConsistentRead;
  }
  if (input.ExclusiveStartKey !== undefined) {
    bodyParams["ExclusiveStartKey"] = serializeAws_json1_0Key(
      input.ExclusiveStartKey,
      context
    );
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.FilterExpression !== undefined) {
    bodyParams["FilterExpression"] = input.FilterExpression;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.ProjectionExpression !== undefined) {
    bodyParams["ProjectionExpression"] = input.ProjectionExpression;
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ScanFilter !== undefined) {
    bodyParams["ScanFilter"] = serializeAws_json1_0FilterConditionMap(
      input.ScanFilter,
      context
    );
  }
  if (input.Segment !== undefined) {
    bodyParams["Segment"] = input.Segment;
  }
  if (input.Select !== undefined) {
    bodyParams["Select"] = input.Select;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.TotalSegments !== undefined) {
    bodyParams["TotalSegments"] = input.TotalSegments;
  }
  return bodyParams;
};

const serializeAws_json1_0StreamSpecification = (
  input: StreamSpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.StreamEnabled !== undefined) {
    bodyParams["StreamEnabled"] = input.StreamEnabled;
  }
  if (input.StreamViewType !== undefined) {
    bodyParams["StreamViewType"] = input.StreamViewType;
  }
  return bodyParams;
};

const serializeAws_json1_0StringSetAttributeValue = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_0TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_0Tag(entry, context));
};

const serializeAws_json1_0TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_0TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_0TimeToLiveSpecification = (
  input: TimeToLiveSpecification,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  return bodyParams;
};

const serializeAws_json1_0TransactGetItem = (
  input: TransactGetItem,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Get !== undefined) {
    bodyParams["Get"] = serializeAws_json1_0Get(input.Get, context);
  }
  return bodyParams;
};

const serializeAws_json1_0TransactGetItemList = (
  input: Array<TransactGetItem>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0TransactGetItem(entry, context)
  );
};

const serializeAws_json1_0TransactGetItemsInput = (
  input: TransactGetItemsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.TransactItems !== undefined) {
    bodyParams["TransactItems"] = serializeAws_json1_0TransactGetItemList(
      input.TransactItems,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0TransactWriteItem = (
  input: TransactWriteItem,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConditionCheck !== undefined) {
    bodyParams["ConditionCheck"] = serializeAws_json1_0ConditionCheck(
      input.ConditionCheck,
      context
    );
  }
  if (input.Delete !== undefined) {
    bodyParams["Delete"] = serializeAws_json1_0Delete(input.Delete, context);
  }
  if (input.Put !== undefined) {
    bodyParams["Put"] = serializeAws_json1_0Put(input.Put, context);
  }
  if (input.Update !== undefined) {
    bodyParams["Update"] = serializeAws_json1_0Update(input.Update, context);
  }
  return bodyParams;
};

const serializeAws_json1_0TransactWriteItemList = (
  input: Array<TransactWriteItem>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0TransactWriteItem(entry, context)
  );
};

const serializeAws_json1_0TransactWriteItemsInput = (
  input: TransactWriteItemsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ReturnItemCollectionMetrics !== undefined) {
    bodyParams["ReturnItemCollectionMetrics"] =
      input.ReturnItemCollectionMetrics;
  }
  if (input.TransactItems !== undefined) {
    bodyParams["TransactItems"] = serializeAws_json1_0TransactWriteItemList(
      input.TransactItems,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_0TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0Update = (
  input: Update,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ReturnValuesOnConditionCheckFailure !== undefined) {
    bodyParams["ReturnValuesOnConditionCheckFailure"] =
      input.ReturnValuesOnConditionCheckFailure;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.UpdateExpression !== undefined) {
    bodyParams["UpdateExpression"] = input.UpdateExpression;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateContinuousBackupsInput = (
  input: UpdateContinuousBackupsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PointInTimeRecoverySpecification !== undefined) {
    bodyParams[
      "PointInTimeRecoverySpecification"
    ] = serializeAws_json1_0PointInTimeRecoverySpecification(
      input.PointInTimeRecoverySpecification,
      context
    );
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateContributorInsightsInput = (
  input: UpdateContributorInsightsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ContributorInsightsAction !== undefined) {
    bodyParams["ContributorInsightsAction"] = input.ContributorInsightsAction;
  }
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateGlobalSecondaryIndexAction = (
  input: UpdateGlobalSecondaryIndexAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IndexName !== undefined) {
    bodyParams["IndexName"] = input.IndexName;
  }
  if (input.ProvisionedThroughput !== undefined) {
    bodyParams[
      "ProvisionedThroughput"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughput,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateGlobalTableInput = (
  input: UpdateGlobalTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalTableName !== undefined) {
    bodyParams["GlobalTableName"] = input.GlobalTableName;
  }
  if (input.ReplicaUpdates !== undefined) {
    bodyParams["ReplicaUpdates"] = serializeAws_json1_0ReplicaUpdateList(
      input.ReplicaUpdates,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateGlobalTableSettingsInput = (
  input: UpdateGlobalTableSettingsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalTableBillingMode !== undefined) {
    bodyParams["GlobalTableBillingMode"] = input.GlobalTableBillingMode;
  }
  if (input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== undefined) {
    bodyParams[
      "GlobalTableGlobalSecondaryIndexSettingsUpdate"
    ] = serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(
      input.GlobalTableGlobalSecondaryIndexSettingsUpdate,
      context
    );
  }
  if (input.GlobalTableName !== undefined) {
    bodyParams["GlobalTableName"] = input.GlobalTableName;
  }
  if (
    input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !==
    undefined
  ) {
    bodyParams[
      "GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate,
      context
    );
  }
  if (input.GlobalTableProvisionedWriteCapacityUnits !== undefined) {
    bodyParams["GlobalTableProvisionedWriteCapacityUnits"] =
      input.GlobalTableProvisionedWriteCapacityUnits;
  }
  if (input.ReplicaSettingsUpdate !== undefined) {
    bodyParams[
      "ReplicaSettingsUpdate"
    ] = serializeAws_json1_0ReplicaSettingsUpdateList(
      input.ReplicaSettingsUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateItemInput = (
  input: UpdateItemInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeUpdates !== undefined) {
    bodyParams["AttributeUpdates"] = serializeAws_json1_0AttributeUpdates(
      input.AttributeUpdates,
      context
    );
  }
  if (input.ConditionExpression !== undefined) {
    bodyParams["ConditionExpression"] = input.ConditionExpression;
  }
  if (input.ConditionalOperator !== undefined) {
    bodyParams["ConditionalOperator"] = input.ConditionalOperator;
  }
  if (input.Expected !== undefined) {
    bodyParams["Expected"] = serializeAws_json1_0ExpectedAttributeMap(
      input.Expected,
      context
    );
  }
  if (input.ExpressionAttributeNames !== undefined) {
    bodyParams[
      "ExpressionAttributeNames"
    ] = serializeAws_json1_0ExpressionAttributeNameMap(
      input.ExpressionAttributeNames,
      context
    );
  }
  if (input.ExpressionAttributeValues !== undefined) {
    bodyParams[
      "ExpressionAttributeValues"
    ] = serializeAws_json1_0ExpressionAttributeValueMap(
      input.ExpressionAttributeValues,
      context
    );
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = serializeAws_json1_0Key(input.Key, context);
  }
  if (input.ReturnConsumedCapacity !== undefined) {
    bodyParams["ReturnConsumedCapacity"] = input.ReturnConsumedCapacity;
  }
  if (input.ReturnItemCollectionMetrics !== undefined) {
    bodyParams["ReturnItemCollectionMetrics"] =
      input.ReturnItemCollectionMetrics;
  }
  if (input.ReturnValues !== undefined) {
    bodyParams["ReturnValues"] = input.ReturnValues;
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.UpdateExpression !== undefined) {
    bodyParams["UpdateExpression"] = input.UpdateExpression;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateReplicationGroupMemberAction = (
  input: UpdateReplicationGroupMemberAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalSecondaryIndexes !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexes"
    ] = serializeAws_json1_0ReplicaGlobalSecondaryIndexList(
      input.GlobalSecondaryIndexes,
      context
    );
  }
  if (input.KMSMasterKeyId !== undefined) {
    bodyParams["KMSMasterKeyId"] = input.KMSMasterKeyId;
  }
  if (input.ProvisionedThroughputOverride !== undefined) {
    bodyParams[
      "ProvisionedThroughputOverride"
    ] = serializeAws_json1_0ProvisionedThroughputOverride(
      input.ProvisionedThroughputOverride,
      context
    );
  }
  if (input.RegionName !== undefined) {
    bodyParams["RegionName"] = input.RegionName;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateTableInput = (
  input: UpdateTableInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeDefinitions !== undefined) {
    bodyParams[
      "AttributeDefinitions"
    ] = serializeAws_json1_0AttributeDefinitions(
      input.AttributeDefinitions,
      context
    );
  }
  if (input.BillingMode !== undefined) {
    bodyParams["BillingMode"] = input.BillingMode;
  }
  if (input.GlobalSecondaryIndexUpdates !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexUpdates"
    ] = serializeAws_json1_0GlobalSecondaryIndexUpdateList(
      input.GlobalSecondaryIndexUpdates,
      context
    );
  }
  if (input.ProvisionedThroughput !== undefined) {
    bodyParams[
      "ProvisionedThroughput"
    ] = serializeAws_json1_0ProvisionedThroughput(
      input.ProvisionedThroughput,
      context
    );
  }
  if (input.ReplicaUpdates !== undefined) {
    bodyParams[
      "ReplicaUpdates"
    ] = serializeAws_json1_0ReplicationGroupUpdateList(
      input.ReplicaUpdates,
      context
    );
  }
  if (input.SSESpecification !== undefined) {
    bodyParams["SSESpecification"] = serializeAws_json1_0SSESpecification(
      input.SSESpecification,
      context
    );
  }
  if (input.StreamSpecification !== undefined) {
    bodyParams["StreamSpecification"] = serializeAws_json1_0StreamSpecification(
      input.StreamSpecification,
      context
    );
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateTableReplicaAutoScalingInput = (
  input: UpdateTableReplicaAutoScalingInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.GlobalSecondaryIndexUpdates !== undefined) {
    bodyParams[
      "GlobalSecondaryIndexUpdates"
    ] = serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(
      input.GlobalSecondaryIndexUpdates,
      context
    );
  }
  if (input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined) {
    bodyParams[
      "ProvisionedWriteCapacityAutoScalingUpdate"
    ] = serializeAws_json1_0AutoScalingSettingsUpdate(
      input.ProvisionedWriteCapacityAutoScalingUpdate,
      context
    );
  }
  if (input.ReplicaUpdates !== undefined) {
    bodyParams[
      "ReplicaUpdates"
    ] = serializeAws_json1_0ReplicaAutoScalingUpdateList(
      input.ReplicaUpdates,
      context
    );
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateTimeToLiveInput = (
  input: UpdateTimeToLiveInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  if (input.TimeToLiveSpecification !== undefined) {
    bodyParams[
      "TimeToLiveSpecification"
    ] = serializeAws_json1_0TimeToLiveSpecification(
      input.TimeToLiveSpecification,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0WriteRequest = (
  input: WriteRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DeleteRequest !== undefined) {
    bodyParams["DeleteRequest"] = serializeAws_json1_0DeleteRequest(
      input.DeleteRequest,
      context
    );
  }
  if (input.PutRequest !== undefined) {
    bodyParams["PutRequest"] = serializeAws_json1_0PutRequest(
      input.PutRequest,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0WriteRequests = (
  input: Array<WriteRequest>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0WriteRequest(entry, context)
  );
};

const deserializeAws_json1_0DescribeEndpointsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEndpointsResponse => {
  let contents: any = {
    __type: "DescribeEndpointsResponse",
    Endpoints: undefined
  };
  if (output.Endpoints !== undefined) {
    contents.Endpoints = deserializeAws_json1_0Endpoints(
      output.Endpoints,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0Endpoint = (
  output: any,
  context: __SerdeContext
): Endpoint => {
  let contents: any = {
    __type: "Endpoint",
    Address: undefined,
    CachePeriodInMinutes: undefined
  };
  if (output.Address !== undefined) {
    contents.Address = output.Address;
  }
  if (output.CachePeriodInMinutes !== undefined) {
    contents.CachePeriodInMinutes = output.CachePeriodInMinutes;
  }
  return contents;
};

const deserializeAws_json1_0Endpoints = (
  output: any,
  context: __SerdeContext
): Array<Endpoint> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Endpoint(entry, context)
  );
};

const deserializeAws_json1_0InvalidEndpointException = (
  output: any,
  context: __SerdeContext
): InvalidEndpointException => {
  let contents: any = {
    __type: "InvalidEndpointException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0ArchivalSummary = (
  output: any,
  context: __SerdeContext
): ArchivalSummary => {
  let contents: any = {
    __type: "ArchivalSummary",
    ArchivalBackupArn: undefined,
    ArchivalDateTime: undefined,
    ArchivalReason: undefined
  };
  if (output.ArchivalBackupArn !== undefined) {
    contents.ArchivalBackupArn = output.ArchivalBackupArn;
  }
  if (output.ArchivalDateTime !== undefined) {
    contents.ArchivalDateTime = new Date(
      output.ArchivalDateTime % 1 != 0
        ? Math.round(output.ArchivalDateTime * 1000)
        : output.ArchivalDateTime
    );
  }
  if (output.ArchivalReason !== undefined) {
    contents.ArchivalReason = output.ArchivalReason;
  }
  return contents;
};

const deserializeAws_json1_0AttributeDefinition = (
  output: any,
  context: __SerdeContext
): AttributeDefinition => {
  let contents: any = {
    __type: "AttributeDefinition",
    AttributeName: undefined,
    AttributeType: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.AttributeType !== undefined) {
    contents.AttributeType = output.AttributeType;
  }
  return contents;
};

const deserializeAws_json1_0AttributeDefinitions = (
  output: any,
  context: __SerdeContext
): Array<AttributeDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeDefinition(entry, context)
  );
};

const deserializeAws_json1_0AttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0AttributeNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0AttributeValue = (
  output: any,
  context: __SerdeContext
): AttributeValue => {
  let contents: any = {
    __type: "AttributeValue",
    B: undefined,
    BOOL: undefined,
    BS: undefined,
    L: undefined,
    M: undefined,
    N: undefined,
    NS: undefined,
    NULL: undefined,
    S: undefined,
    SS: undefined
  };
  if (output.B !== undefined) {
    contents.B = context.base64Decoder(output.B);
  }
  if (output.BOOL !== undefined) {
    contents.BOOL = output.BOOL;
  }
  if (output.BS !== undefined) {
    contents.BS = deserializeAws_json1_0BinarySetAttributeValue(
      output.BS,
      context
    );
  }
  if (output.L !== undefined) {
    contents.L = deserializeAws_json1_0ListAttributeValue(output.L, context);
  }
  if (output.M !== undefined) {
    contents.M = deserializeAws_json1_0MapAttributeValue(output.M, context);
  }
  if (output.N !== undefined) {
    contents.N = output.N;
  }
  if (output.NS !== undefined) {
    contents.NS = deserializeAws_json1_0NumberSetAttributeValue(
      output.NS,
      context
    );
  }
  if (output.NULL !== undefined) {
    contents.NULL = output.NULL;
  }
  if (output.S !== undefined) {
    contents.S = output.S;
  }
  if (output.SS !== undefined) {
    contents.SS = deserializeAws_json1_0StringSetAttributeValue(
      output.SS,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingPolicyDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingPolicyDescription => {
  let contents: any = {
    __type: "AutoScalingPolicyDescription",
    PolicyName: undefined,
    TargetTrackingScalingPolicyConfiguration: undefined
  };
  if (output.PolicyName !== undefined) {
    contents.PolicyName = output.PolicyName;
  }
  if (output.TargetTrackingScalingPolicyConfiguration !== undefined) {
    contents.TargetTrackingScalingPolicyConfiguration = deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(
      output.TargetTrackingScalingPolicyConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingPolicyDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<AutoScalingPolicyDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AutoScalingPolicyDescription(entry, context)
  );
};

const deserializeAws_json1_0AutoScalingSettingsDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingSettingsDescription => {
  let contents: any = {
    __type: "AutoScalingSettingsDescription",
    AutoScalingDisabled: undefined,
    AutoScalingRoleArn: undefined,
    MaximumUnits: undefined,
    MinimumUnits: undefined,
    ScalingPolicies: undefined
  };
  if (output.AutoScalingDisabled !== undefined) {
    contents.AutoScalingDisabled = output.AutoScalingDisabled;
  }
  if (output.AutoScalingRoleArn !== undefined) {
    contents.AutoScalingRoleArn = output.AutoScalingRoleArn;
  }
  if (output.MaximumUnits !== undefined) {
    contents.MaximumUnits = output.MaximumUnits;
  }
  if (output.MinimumUnits !== undefined) {
    contents.MinimumUnits = output.MinimumUnits;
  }
  if (output.ScalingPolicies !== undefined) {
    contents.ScalingPolicies = deserializeAws_json1_0AutoScalingPolicyDescriptionList(
      output.ScalingPolicies,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (
  output: any,
  context: __SerdeContext
): AutoScalingTargetTrackingScalingPolicyConfigurationDescription => {
  let contents: any = {
    __type: "AutoScalingTargetTrackingScalingPolicyConfigurationDescription",
    DisableScaleIn: undefined,
    ScaleInCooldown: undefined,
    ScaleOutCooldown: undefined,
    TargetValue: undefined
  };
  if (output.DisableScaleIn !== undefined) {
    contents.DisableScaleIn = output.DisableScaleIn;
  }
  if (output.ScaleInCooldown !== undefined) {
    contents.ScaleInCooldown = output.ScaleInCooldown;
  }
  if (output.ScaleOutCooldown !== undefined) {
    contents.ScaleOutCooldown = output.ScaleOutCooldown;
  }
  if (output.TargetValue !== undefined) {
    contents.TargetValue = output.TargetValue;
  }
  return contents;
};

const deserializeAws_json1_0BackupDescription = (
  output: any,
  context: __SerdeContext
): BackupDescription => {
  let contents: any = {
    __type: "BackupDescription",
    BackupDetails: undefined,
    SourceTableDetails: undefined,
    SourceTableFeatureDetails: undefined
  };
  if (output.BackupDetails !== undefined) {
    contents.BackupDetails = deserializeAws_json1_0BackupDetails(
      output.BackupDetails,
      context
    );
  }
  if (output.SourceTableDetails !== undefined) {
    contents.SourceTableDetails = deserializeAws_json1_0SourceTableDetails(
      output.SourceTableDetails,
      context
    );
  }
  if (output.SourceTableFeatureDetails !== undefined) {
    contents.SourceTableFeatureDetails = deserializeAws_json1_0SourceTableFeatureDetails(
      output.SourceTableFeatureDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0BackupDetails = (
  output: any,
  context: __SerdeContext
): BackupDetails => {
  let contents: any = {
    __type: "BackupDetails",
    BackupArn: undefined,
    BackupCreationDateTime: undefined,
    BackupExpiryDateTime: undefined,
    BackupName: undefined,
    BackupSizeBytes: undefined,
    BackupStatus: undefined,
    BackupType: undefined
  };
  if (output.BackupArn !== undefined) {
    contents.BackupArn = output.BackupArn;
  }
  if (output.BackupCreationDateTime !== undefined) {
    contents.BackupCreationDateTime = new Date(
      output.BackupCreationDateTime % 1 != 0
        ? Math.round(output.BackupCreationDateTime * 1000)
        : output.BackupCreationDateTime
    );
  }
  if (output.BackupExpiryDateTime !== undefined) {
    contents.BackupExpiryDateTime = new Date(
      output.BackupExpiryDateTime % 1 != 0
        ? Math.round(output.BackupExpiryDateTime * 1000)
        : output.BackupExpiryDateTime
    );
  }
  if (output.BackupName !== undefined) {
    contents.BackupName = output.BackupName;
  }
  if (output.BackupSizeBytes !== undefined) {
    contents.BackupSizeBytes = output.BackupSizeBytes;
  }
  if (output.BackupStatus !== undefined) {
    contents.BackupStatus = output.BackupStatus;
  }
  if (output.BackupType !== undefined) {
    contents.BackupType = output.BackupType;
  }
  return contents;
};

const deserializeAws_json1_0BackupInUseException = (
  output: any,
  context: __SerdeContext
): BackupInUseException => {
  let contents: any = {
    __type: "BackupInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0BackupNotFoundException = (
  output: any,
  context: __SerdeContext
): BackupNotFoundException => {
  let contents: any = {
    __type: "BackupNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0BackupSummaries = (
  output: any,
  context: __SerdeContext
): Array<BackupSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0BackupSummary(entry, context)
  );
};

const deserializeAws_json1_0BackupSummary = (
  output: any,
  context: __SerdeContext
): BackupSummary => {
  let contents: any = {
    __type: "BackupSummary",
    BackupArn: undefined,
    BackupCreationDateTime: undefined,
    BackupExpiryDateTime: undefined,
    BackupName: undefined,
    BackupSizeBytes: undefined,
    BackupStatus: undefined,
    BackupType: undefined,
    TableArn: undefined,
    TableId: undefined,
    TableName: undefined
  };
  if (output.BackupArn !== undefined) {
    contents.BackupArn = output.BackupArn;
  }
  if (output.BackupCreationDateTime !== undefined) {
    contents.BackupCreationDateTime = new Date(
      output.BackupCreationDateTime % 1 != 0
        ? Math.round(output.BackupCreationDateTime * 1000)
        : output.BackupCreationDateTime
    );
  }
  if (output.BackupExpiryDateTime !== undefined) {
    contents.BackupExpiryDateTime = new Date(
      output.BackupExpiryDateTime % 1 != 0
        ? Math.round(output.BackupExpiryDateTime * 1000)
        : output.BackupExpiryDateTime
    );
  }
  if (output.BackupName !== undefined) {
    contents.BackupName = output.BackupName;
  }
  if (output.BackupSizeBytes !== undefined) {
    contents.BackupSizeBytes = output.BackupSizeBytes;
  }
  if (output.BackupStatus !== undefined) {
    contents.BackupStatus = output.BackupStatus;
  }
  if (output.BackupType !== undefined) {
    contents.BackupType = output.BackupType;
  }
  if (output.TableArn !== undefined) {
    contents.TableArn = output.TableArn;
  }
  if (output.TableId !== undefined) {
    contents.TableId = output.TableId;
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_0BatchGetItemOutput = (
  output: any,
  context: __SerdeContext
): BatchGetItemOutput => {
  let contents: any = {
    __type: "BatchGetItemOutput",
    ConsumedCapacity: undefined,
    Responses: undefined,
    UnprocessedKeys: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.Responses !== undefined) {
    contents.Responses = deserializeAws_json1_0BatchGetResponseMap(
      output.Responses,
      context
    );
  }
  if (output.UnprocessedKeys !== undefined) {
    contents.UnprocessedKeys = deserializeAws_json1_0BatchGetRequestMap(
      output.UnprocessedKeys,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0BatchGetRequestMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: KeysAndAttributes } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0KeysAndAttributes(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_json1_0BatchGetResponseMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<{ [key: string]: AttributeValue }> } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0ItemList(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0BatchWriteItemOutput = (
  output: any,
  context: __SerdeContext
): BatchWriteItemOutput => {
  let contents: any = {
    __type: "BatchWriteItemOutput",
    ConsumedCapacity: undefined,
    ItemCollectionMetrics: undefined,
    UnprocessedItems: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.ItemCollectionMetrics !== undefined) {
    contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetricsPerTable(
      output.ItemCollectionMetrics,
      context
    );
  }
  if (output.UnprocessedItems !== undefined) {
    contents.UnprocessedItems = deserializeAws_json1_0BatchWriteItemRequestMap(
      output.UnprocessedItems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0BatchWriteItemRequestMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<WriteRequest> } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0WriteRequests(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0BillingModeSummary = (
  output: any,
  context: __SerdeContext
): BillingModeSummary => {
  let contents: any = {
    __type: "BillingModeSummary",
    BillingMode: undefined,
    LastUpdateToPayPerRequestDateTime: undefined
  };
  if (output.BillingMode !== undefined) {
    contents.BillingMode = output.BillingMode;
  }
  if (output.LastUpdateToPayPerRequestDateTime !== undefined) {
    contents.LastUpdateToPayPerRequestDateTime = new Date(
      output.LastUpdateToPayPerRequestDateTime % 1 != 0
        ? Math.round(output.LastUpdateToPayPerRequestDateTime * 1000)
        : output.LastUpdateToPayPerRequestDateTime
    );
  }
  return contents;
};

const deserializeAws_json1_0BinarySetAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<Uint8Array> => {
  return (output || []).map((entry: any) => context.base64Decoder(entry));
};

const deserializeAws_json1_0CancellationReason = (
  output: any,
  context: __SerdeContext
): CancellationReason => {
  let contents: any = {
    __type: "CancellationReason",
    Code: undefined,
    Item: undefined,
    Message: undefined
  };
  if (output.Code !== undefined) {
    contents.Code = output.Code;
  }
  if (output.Item !== undefined) {
    contents.Item = deserializeAws_json1_0AttributeMap(output.Item, context);
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0CancellationReasonList = (
  output: any,
  context: __SerdeContext
): Array<CancellationReason> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0CancellationReason(entry, context)
  );
};

const deserializeAws_json1_0Capacity = (
  output: any,
  context: __SerdeContext
): Capacity => {
  let contents: any = {
    __type: "Capacity",
    CapacityUnits: undefined,
    ReadCapacityUnits: undefined,
    WriteCapacityUnits: undefined
  };
  if (output.CapacityUnits !== undefined) {
    contents.CapacityUnits = output.CapacityUnits;
  }
  if (output.ReadCapacityUnits !== undefined) {
    contents.ReadCapacityUnits = output.ReadCapacityUnits;
  }
  if (output.WriteCapacityUnits !== undefined) {
    contents.WriteCapacityUnits = output.WriteCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0ConditionalCheckFailedException = (
  output: any,
  context: __SerdeContext
): ConditionalCheckFailedException => {
  let contents: any = {
    __type: "ConditionalCheckFailedException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ConsumedCapacity = (
  output: any,
  context: __SerdeContext
): ConsumedCapacity => {
  let contents: any = {
    __type: "ConsumedCapacity",
    CapacityUnits: undefined,
    GlobalSecondaryIndexes: undefined,
    LocalSecondaryIndexes: undefined,
    ReadCapacityUnits: undefined,
    Table: undefined,
    TableName: undefined,
    WriteCapacityUnits: undefined
  };
  if (output.CapacityUnits !== undefined) {
    contents.CapacityUnits = output.CapacityUnits;
  }
  if (output.GlobalSecondaryIndexes !== undefined) {
    contents.GlobalSecondaryIndexes = deserializeAws_json1_0SecondaryIndexesCapacityMap(
      output.GlobalSecondaryIndexes,
      context
    );
  }
  if (output.LocalSecondaryIndexes !== undefined) {
    contents.LocalSecondaryIndexes = deserializeAws_json1_0SecondaryIndexesCapacityMap(
      output.LocalSecondaryIndexes,
      context
    );
  }
  if (output.ReadCapacityUnits !== undefined) {
    contents.ReadCapacityUnits = output.ReadCapacityUnits;
  }
  if (output.Table !== undefined) {
    contents.Table = deserializeAws_json1_0Capacity(output.Table, context);
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  if (output.WriteCapacityUnits !== undefined) {
    contents.WriteCapacityUnits = output.WriteCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0ConsumedCapacityMultiple = (
  output: any,
  context: __SerdeContext
): Array<ConsumedCapacity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ConsumedCapacity(entry, context)
  );
};

const deserializeAws_json1_0ContinuousBackupsDescription = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsDescription => {
  let contents: any = {
    __type: "ContinuousBackupsDescription",
    ContinuousBackupsStatus: undefined,
    PointInTimeRecoveryDescription: undefined
  };
  if (output.ContinuousBackupsStatus !== undefined) {
    contents.ContinuousBackupsStatus = output.ContinuousBackupsStatus;
  }
  if (output.PointInTimeRecoveryDescription !== undefined) {
    contents.PointInTimeRecoveryDescription = deserializeAws_json1_0PointInTimeRecoveryDescription(
      output.PointInTimeRecoveryDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ContinuousBackupsUnavailableException = (
  output: any,
  context: __SerdeContext
): ContinuousBackupsUnavailableException => {
  let contents: any = {
    __type: "ContinuousBackupsUnavailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ContributorInsightsRuleList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0ContributorInsightsSummaries = (
  output: any,
  context: __SerdeContext
): Array<ContributorInsightsSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ContributorInsightsSummary(entry, context)
  );
};

const deserializeAws_json1_0ContributorInsightsSummary = (
  output: any,
  context: __SerdeContext
): ContributorInsightsSummary => {
  let contents: any = {
    __type: "ContributorInsightsSummary",
    ContributorInsightsStatus: undefined,
    IndexName: undefined,
    TableName: undefined
  };
  if (output.ContributorInsightsStatus !== undefined) {
    contents.ContributorInsightsStatus = output.ContributorInsightsStatus;
  }
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_0CreateBackupOutput = (
  output: any,
  context: __SerdeContext
): CreateBackupOutput => {
  let contents: any = {
    __type: "CreateBackupOutput",
    BackupDetails: undefined
  };
  if (output.BackupDetails !== undefined) {
    contents.BackupDetails = deserializeAws_json1_0BackupDetails(
      output.BackupDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0CreateGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): CreateGlobalTableOutput => {
  let contents: any = {
    __type: "CreateGlobalTableOutput",
    GlobalTableDescription: undefined
  };
  if (output.GlobalTableDescription !== undefined) {
    contents.GlobalTableDescription = deserializeAws_json1_0GlobalTableDescription(
      output.GlobalTableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0CreateTableOutput = (
  output: any,
  context: __SerdeContext
): CreateTableOutput => {
  let contents: any = {
    __type: "CreateTableOutput",
    TableDescription: undefined
  };
  if (output.TableDescription !== undefined) {
    contents.TableDescription = deserializeAws_json1_0TableDescription(
      output.TableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DeleteBackupOutput = (
  output: any,
  context: __SerdeContext
): DeleteBackupOutput => {
  let contents: any = {
    __type: "DeleteBackupOutput",
    BackupDescription: undefined
  };
  if (output.BackupDescription !== undefined) {
    contents.BackupDescription = deserializeAws_json1_0BackupDescription(
      output.BackupDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DeleteItemOutput = (
  output: any,
  context: __SerdeContext
): DeleteItemOutput => {
  let contents: any = {
    __type: "DeleteItemOutput",
    Attributes: undefined,
    ConsumedCapacity: undefined,
    ItemCollectionMetrics: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_0AttributeMap(
      output.Attributes,
      context
    );
  }
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.ItemCollectionMetrics !== undefined) {
    contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetrics(
      output.ItemCollectionMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DeleteRequest = (
  output: any,
  context: __SerdeContext
): DeleteRequest => {
  let contents: any = {
    __type: "DeleteRequest",
    Key: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = deserializeAws_json1_0Key(output.Key, context);
  }
  return contents;
};

const deserializeAws_json1_0DeleteTableOutput = (
  output: any,
  context: __SerdeContext
): DeleteTableOutput => {
  let contents: any = {
    __type: "DeleteTableOutput",
    TableDescription: undefined
  };
  if (output.TableDescription !== undefined) {
    contents.TableDescription = deserializeAws_json1_0TableDescription(
      output.TableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeBackupOutput = (
  output: any,
  context: __SerdeContext
): DescribeBackupOutput => {
  let contents: any = {
    __type: "DescribeBackupOutput",
    BackupDescription: undefined
  };
  if (output.BackupDescription !== undefined) {
    contents.BackupDescription = deserializeAws_json1_0BackupDescription(
      output.BackupDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeContinuousBackupsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContinuousBackupsOutput => {
  let contents: any = {
    __type: "DescribeContinuousBackupsOutput",
    ContinuousBackupsDescription: undefined
  };
  if (output.ContinuousBackupsDescription !== undefined) {
    contents.ContinuousBackupsDescription = deserializeAws_json1_0ContinuousBackupsDescription(
      output.ContinuousBackupsDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): DescribeContributorInsightsOutput => {
  let contents: any = {
    __type: "DescribeContributorInsightsOutput",
    ContributorInsightsRuleList: undefined,
    ContributorInsightsStatus: undefined,
    FailureException: undefined,
    IndexName: undefined,
    LastUpdateDateTime: undefined,
    TableName: undefined
  };
  if (output.ContributorInsightsRuleList !== undefined) {
    contents.ContributorInsightsRuleList = deserializeAws_json1_0ContributorInsightsRuleList(
      output.ContributorInsightsRuleList,
      context
    );
  }
  if (output.ContributorInsightsStatus !== undefined) {
    contents.ContributorInsightsStatus = output.ContributorInsightsStatus;
  }
  if (output.FailureException !== undefined) {
    contents.FailureException = deserializeAws_json1_0FailureException(
      output.FailureException,
      context
    );
  }
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.LastUpdateDateTime !== undefined) {
    contents.LastUpdateDateTime = new Date(
      output.LastUpdateDateTime % 1 != 0
        ? Math.round(output.LastUpdateDateTime * 1000)
        : output.LastUpdateDateTime
    );
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_0DescribeGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableOutput => {
  let contents: any = {
    __type: "DescribeGlobalTableOutput",
    GlobalTableDescription: undefined
  };
  if (output.GlobalTableDescription !== undefined) {
    contents.GlobalTableDescription = deserializeAws_json1_0GlobalTableDescription(
      output.GlobalTableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): DescribeGlobalTableSettingsOutput => {
  let contents: any = {
    __type: "DescribeGlobalTableSettingsOutput",
    GlobalTableName: undefined,
    ReplicaSettings: undefined
  };
  if (output.GlobalTableName !== undefined) {
    contents.GlobalTableName = output.GlobalTableName;
  }
  if (output.ReplicaSettings !== undefined) {
    contents.ReplicaSettings = deserializeAws_json1_0ReplicaSettingsDescriptionList(
      output.ReplicaSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeLimitsOutput = (
  output: any,
  context: __SerdeContext
): DescribeLimitsOutput => {
  let contents: any = {
    __type: "DescribeLimitsOutput",
    AccountMaxReadCapacityUnits: undefined,
    AccountMaxWriteCapacityUnits: undefined,
    TableMaxReadCapacityUnits: undefined,
    TableMaxWriteCapacityUnits: undefined
  };
  if (output.AccountMaxReadCapacityUnits !== undefined) {
    contents.AccountMaxReadCapacityUnits = output.AccountMaxReadCapacityUnits;
  }
  if (output.AccountMaxWriteCapacityUnits !== undefined) {
    contents.AccountMaxWriteCapacityUnits = output.AccountMaxWriteCapacityUnits;
  }
  if (output.TableMaxReadCapacityUnits !== undefined) {
    contents.TableMaxReadCapacityUnits = output.TableMaxReadCapacityUnits;
  }
  if (output.TableMaxWriteCapacityUnits !== undefined) {
    contents.TableMaxWriteCapacityUnits = output.TableMaxWriteCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0DescribeTableOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableOutput => {
  let contents: any = {
    __type: "DescribeTableOutput",
    Table: undefined
  };
  if (output.Table !== undefined) {
    contents.Table = deserializeAws_json1_0TableDescription(
      output.Table,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): DescribeTableReplicaAutoScalingOutput => {
  let contents: any = {
    __type: "DescribeTableReplicaAutoScalingOutput",
    TableAutoScalingDescription: undefined
  };
  if (output.TableAutoScalingDescription !== undefined) {
    contents.TableAutoScalingDescription = deserializeAws_json1_0TableAutoScalingDescription(
      output.TableAutoScalingDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DescribeTimeToLiveOutput = (
  output: any,
  context: __SerdeContext
): DescribeTimeToLiveOutput => {
  let contents: any = {
    __type: "DescribeTimeToLiveOutput",
    TimeToLiveDescription: undefined
  };
  if (output.TimeToLiveDescription !== undefined) {
    contents.TimeToLiveDescription = deserializeAws_json1_0TimeToLiveDescription(
      output.TimeToLiveDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ExpressionAttributeNameMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_0FailureException = (
  output: any,
  context: __SerdeContext
): FailureException => {
  let contents: any = {
    __type: "FailureException",
    ExceptionDescription: undefined,
    ExceptionName: undefined
  };
  if (output.ExceptionDescription !== undefined) {
    contents.ExceptionDescription = output.ExceptionDescription;
  }
  if (output.ExceptionName !== undefined) {
    contents.ExceptionName = output.ExceptionName;
  }
  return contents;
};

const deserializeAws_json1_0GetItemOutput = (
  output: any,
  context: __SerdeContext
): GetItemOutput => {
  let contents: any = {
    __type: "GetItemOutput",
    ConsumedCapacity: undefined,
    Item: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.Item !== undefined) {
    contents.Item = deserializeAws_json1_0AttributeMap(output.Item, context);
  }
  return contents;
};

const deserializeAws_json1_0GlobalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexDescription => {
  let contents: any = {
    __type: "GlobalSecondaryIndexDescription",
    Backfilling: undefined,
    IndexArn: undefined,
    IndexName: undefined,
    IndexSizeBytes: undefined,
    IndexStatus: undefined,
    ItemCount: undefined,
    KeySchema: undefined,
    Projection: undefined,
    ProvisionedThroughput: undefined
  };
  if (output.Backfilling !== undefined) {
    contents.Backfilling = output.Backfilling;
  }
  if (output.IndexArn !== undefined) {
    contents.IndexArn = output.IndexArn;
  }
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.IndexSizeBytes !== undefined) {
    contents.IndexSizeBytes = output.IndexSizeBytes;
  }
  if (output.IndexStatus !== undefined) {
    contents.IndexStatus = output.IndexStatus;
  }
  if (output.ItemCount !== undefined) {
    contents.ItemCount = output.ItemCount;
  }
  if (output.KeySchema !== undefined) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (output.Projection !== undefined) {
    contents.Projection = deserializeAws_json1_0Projection(
      output.Projection,
      context
    );
  }
  if (output.ProvisionedThroughput !== undefined) {
    contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughputDescription(
      output.ProvisionedThroughput,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<GlobalSecondaryIndexDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context)
  );
};

const deserializeAws_json1_0GlobalSecondaryIndexInfo = (
  output: any,
  context: __SerdeContext
): GlobalSecondaryIndexInfo => {
  let contents: any = {
    __type: "GlobalSecondaryIndexInfo",
    IndexName: undefined,
    KeySchema: undefined,
    Projection: undefined,
    ProvisionedThroughput: undefined
  };
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.KeySchema !== undefined) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (output.Projection !== undefined) {
    contents.Projection = deserializeAws_json1_0Projection(
      output.Projection,
      context
    );
  }
  if (output.ProvisionedThroughput !== undefined) {
    contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughput(
      output.ProvisionedThroughput,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0GlobalSecondaryIndexes = (
  output: any,
  context: __SerdeContext
): Array<GlobalSecondaryIndexInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context)
  );
};

const deserializeAws_json1_0GlobalTable = (
  output: any,
  context: __SerdeContext
): GlobalTable => {
  let contents: any = {
    __type: "GlobalTable",
    GlobalTableName: undefined,
    ReplicationGroup: undefined
  };
  if (output.GlobalTableName !== undefined) {
    contents.GlobalTableName = output.GlobalTableName;
  }
  if (output.ReplicationGroup !== undefined) {
    contents.ReplicationGroup = deserializeAws_json1_0ReplicaList(
      output.ReplicationGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0GlobalTableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): GlobalTableAlreadyExistsException => {
  let contents: any = {
    __type: "GlobalTableAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0GlobalTableDescription = (
  output: any,
  context: __SerdeContext
): GlobalTableDescription => {
  let contents: any = {
    __type: "GlobalTableDescription",
    CreationDateTime: undefined,
    GlobalTableArn: undefined,
    GlobalTableName: undefined,
    GlobalTableStatus: undefined,
    ReplicationGroup: undefined
  };
  if (output.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      output.CreationDateTime % 1 != 0
        ? Math.round(output.CreationDateTime * 1000)
        : output.CreationDateTime
    );
  }
  if (output.GlobalTableArn !== undefined) {
    contents.GlobalTableArn = output.GlobalTableArn;
  }
  if (output.GlobalTableName !== undefined) {
    contents.GlobalTableName = output.GlobalTableName;
  }
  if (output.GlobalTableStatus !== undefined) {
    contents.GlobalTableStatus = output.GlobalTableStatus;
  }
  if (output.ReplicationGroup !== undefined) {
    contents.ReplicationGroup = deserializeAws_json1_0ReplicaDescriptionList(
      output.ReplicationGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0GlobalTableList = (
  output: any,
  context: __SerdeContext
): Array<GlobalTable> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0GlobalTable(entry, context)
  );
};

const deserializeAws_json1_0GlobalTableNotFoundException = (
  output: any,
  context: __SerdeContext
): GlobalTableNotFoundException => {
  let contents: any = {
    __type: "GlobalTableNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  let contents: any = {
    __type: "IdempotentParameterMismatchException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0IndexNotFoundException = (
  output: any,
  context: __SerdeContext
): IndexNotFoundException => {
  let contents: any = {
    __type: "IndexNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidRestoreTimeException = (
  output: any,
  context: __SerdeContext
): InvalidRestoreTimeException => {
  let contents: any = {
    __type: "InvalidRestoreTimeException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ItemCollectionKeyAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0ItemCollectionMetrics = (
  output: any,
  context: __SerdeContext
): ItemCollectionMetrics => {
  let contents: any = {
    __type: "ItemCollectionMetrics",
    ItemCollectionKey: undefined,
    SizeEstimateRangeGB: undefined
  };
  if (output.ItemCollectionKey !== undefined) {
    contents.ItemCollectionKey = deserializeAws_json1_0ItemCollectionKeyAttributeMap(
      output.ItemCollectionKey,
      context
    );
  }
  if (output.SizeEstimateRangeGB !== undefined) {
    contents.SizeEstimateRangeGB = deserializeAws_json1_0ItemCollectionSizeEstimateRange(
      output.SizeEstimateRangeGB,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ItemCollectionMetricsMultiple = (
  output: any,
  context: __SerdeContext
): Array<ItemCollectionMetrics> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ItemCollectionMetrics(entry, context)
  );
};

const deserializeAws_json1_0ItemCollectionMetricsPerTable = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<ItemCollectionMetrics> } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0ItemCollectionMetricsMultiple(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_json1_0ItemCollectionSizeEstimateRange = (
  output: any,
  context: __SerdeContext
): Array<number> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0ItemCollectionSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): ItemCollectionSizeLimitExceededException => {
  let contents: any = {
    __type: "ItemCollectionSizeLimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ItemList = (
  output: any,
  context: __SerdeContext
): Array<{ [key: string]: AttributeValue }> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeMap(entry, context)
  );
};

const deserializeAws_json1_0ItemResponse = (
  output: any,
  context: __SerdeContext
): ItemResponse => {
  let contents: any = {
    __type: "ItemResponse",
    Item: undefined
  };
  if (output.Item !== undefined) {
    contents.Item = deserializeAws_json1_0AttributeMap(output.Item, context);
  }
  return contents;
};

const deserializeAws_json1_0ItemResponseList = (
  output: any,
  context: __SerdeContext
): Array<ItemResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ItemResponse(entry, context)
  );
};

const deserializeAws_json1_0Key = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0KeyList = (
  output: any,
  context: __SerdeContext
): Array<{ [key: string]: AttributeValue }> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Key(entry, context)
  );
};

const deserializeAws_json1_0KeySchema = (
  output: any,
  context: __SerdeContext
): Array<KeySchemaElement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0KeySchemaElement(entry, context)
  );
};

const deserializeAws_json1_0KeySchemaElement = (
  output: any,
  context: __SerdeContext
): KeySchemaElement => {
  let contents: any = {
    __type: "KeySchemaElement",
    AttributeName: undefined,
    KeyType: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.KeyType !== undefined) {
    contents.KeyType = output.KeyType;
  }
  return contents;
};

const deserializeAws_json1_0KeysAndAttributes = (
  output: any,
  context: __SerdeContext
): KeysAndAttributes => {
  let contents: any = {
    __type: "KeysAndAttributes",
    AttributesToGet: undefined,
    ConsistentRead: undefined,
    ExpressionAttributeNames: undefined,
    Keys: undefined,
    ProjectionExpression: undefined
  };
  if (output.AttributesToGet !== undefined) {
    contents.AttributesToGet = deserializeAws_json1_0AttributeNameList(
      output.AttributesToGet,
      context
    );
  }
  if (output.ConsistentRead !== undefined) {
    contents.ConsistentRead = output.ConsistentRead;
  }
  if (output.ExpressionAttributeNames !== undefined) {
    contents.ExpressionAttributeNames = deserializeAws_json1_0ExpressionAttributeNameMap(
      output.ExpressionAttributeNames,
      context
    );
  }
  if (output.Keys !== undefined) {
    contents.Keys = deserializeAws_json1_0KeyList(output.Keys, context);
  }
  if (output.ProjectionExpression !== undefined) {
    contents.ProjectionExpression = output.ProjectionExpression;
  }
  return contents;
};

const deserializeAws_json1_0LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ListAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<AttributeValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0AttributeValue(entry, context)
  );
};

const deserializeAws_json1_0ListBackupsOutput = (
  output: any,
  context: __SerdeContext
): ListBackupsOutput => {
  let contents: any = {
    __type: "ListBackupsOutput",
    BackupSummaries: undefined,
    LastEvaluatedBackupArn: undefined
  };
  if (output.BackupSummaries !== undefined) {
    contents.BackupSummaries = deserializeAws_json1_0BackupSummaries(
      output.BackupSummaries,
      context
    );
  }
  if (output.LastEvaluatedBackupArn !== undefined) {
    contents.LastEvaluatedBackupArn = output.LastEvaluatedBackupArn;
  }
  return contents;
};

const deserializeAws_json1_0ListContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): ListContributorInsightsOutput => {
  let contents: any = {
    __type: "ListContributorInsightsOutput",
    ContributorInsightsSummaries: undefined,
    NextToken: undefined
  };
  if (output.ContributorInsightsSummaries !== undefined) {
    contents.ContributorInsightsSummaries = deserializeAws_json1_0ContributorInsightsSummaries(
      output.ContributorInsightsSummaries,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_0ListGlobalTablesOutput = (
  output: any,
  context: __SerdeContext
): ListGlobalTablesOutput => {
  let contents: any = {
    __type: "ListGlobalTablesOutput",
    GlobalTables: undefined,
    LastEvaluatedGlobalTableName: undefined
  };
  if (output.GlobalTables !== undefined) {
    contents.GlobalTables = deserializeAws_json1_0GlobalTableList(
      output.GlobalTables,
      context
    );
  }
  if (output.LastEvaluatedGlobalTableName !== undefined) {
    contents.LastEvaluatedGlobalTableName = output.LastEvaluatedGlobalTableName;
  }
  return contents;
};

const deserializeAws_json1_0ListTablesOutput = (
  output: any,
  context: __SerdeContext
): ListTablesOutput => {
  let contents: any = {
    __type: "ListTablesOutput",
    LastEvaluatedTableName: undefined,
    TableNames: undefined
  };
  if (output.LastEvaluatedTableName !== undefined) {
    contents.LastEvaluatedTableName = output.LastEvaluatedTableName;
  }
  if (output.TableNames !== undefined) {
    contents.TableNames = deserializeAws_json1_0TableNameList(
      output.TableNames,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ListTagsOfResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsOfResourceOutput => {
  let contents: any = {
    __type: "ListTagsOfResourceOutput",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_0TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_0LocalSecondaryIndexDescription = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexDescription => {
  let contents: any = {
    __type: "LocalSecondaryIndexDescription",
    IndexArn: undefined,
    IndexName: undefined,
    IndexSizeBytes: undefined,
    ItemCount: undefined,
    KeySchema: undefined,
    Projection: undefined
  };
  if (output.IndexArn !== undefined) {
    contents.IndexArn = output.IndexArn;
  }
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.IndexSizeBytes !== undefined) {
    contents.IndexSizeBytes = output.IndexSizeBytes;
  }
  if (output.ItemCount !== undefined) {
    contents.ItemCount = output.ItemCount;
  }
  if (output.KeySchema !== undefined) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (output.Projection !== undefined) {
    contents.Projection = deserializeAws_json1_0Projection(
      output.Projection,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0LocalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<LocalSecondaryIndexDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context)
  );
};

const deserializeAws_json1_0LocalSecondaryIndexInfo = (
  output: any,
  context: __SerdeContext
): LocalSecondaryIndexInfo => {
  let contents: any = {
    __type: "LocalSecondaryIndexInfo",
    IndexName: undefined,
    KeySchema: undefined,
    Projection: undefined
  };
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.KeySchema !== undefined) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (output.Projection !== undefined) {
    contents.Projection = deserializeAws_json1_0Projection(
      output.Projection,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0LocalSecondaryIndexes = (
  output: any,
  context: __SerdeContext
): Array<LocalSecondaryIndexInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context)
  );
};

const deserializeAws_json1_0MapAttributeValue = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0NonKeyAttributeNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0NumberSetAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0PointInTimeRecoveryDescription = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryDescription => {
  let contents: any = {
    __type: "PointInTimeRecoveryDescription",
    EarliestRestorableDateTime: undefined,
    LatestRestorableDateTime: undefined,
    PointInTimeRecoveryStatus: undefined
  };
  if (output.EarliestRestorableDateTime !== undefined) {
    contents.EarliestRestorableDateTime = new Date(
      output.EarliestRestorableDateTime % 1 != 0
        ? Math.round(output.EarliestRestorableDateTime * 1000)
        : output.EarliestRestorableDateTime
    );
  }
  if (output.LatestRestorableDateTime !== undefined) {
    contents.LatestRestorableDateTime = new Date(
      output.LatestRestorableDateTime % 1 != 0
        ? Math.round(output.LatestRestorableDateTime * 1000)
        : output.LatestRestorableDateTime
    );
  }
  if (output.PointInTimeRecoveryStatus !== undefined) {
    contents.PointInTimeRecoveryStatus = output.PointInTimeRecoveryStatus;
  }
  return contents;
};

const deserializeAws_json1_0PointInTimeRecoveryUnavailableException = (
  output: any,
  context: __SerdeContext
): PointInTimeRecoveryUnavailableException => {
  let contents: any = {
    __type: "PointInTimeRecoveryUnavailableException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0Projection = (
  output: any,
  context: __SerdeContext
): Projection => {
  let contents: any = {
    __type: "Projection",
    NonKeyAttributes: undefined,
    ProjectionType: undefined
  };
  if (output.NonKeyAttributes !== undefined) {
    contents.NonKeyAttributes = deserializeAws_json1_0NonKeyAttributeNameList(
      output.NonKeyAttributes,
      context
    );
  }
  if (output.ProjectionType !== undefined) {
    contents.ProjectionType = output.ProjectionType;
  }
  return contents;
};

const deserializeAws_json1_0ProvisionedThroughput = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughput => {
  let contents: any = {
    __type: "ProvisionedThroughput",
    ReadCapacityUnits: undefined,
    WriteCapacityUnits: undefined
  };
  if (output.ReadCapacityUnits !== undefined) {
    contents.ReadCapacityUnits = output.ReadCapacityUnits;
  }
  if (output.WriteCapacityUnits !== undefined) {
    contents.WriteCapacityUnits = output.WriteCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0ProvisionedThroughputDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputDescription => {
  let contents: any = {
    __type: "ProvisionedThroughputDescription",
    LastDecreaseDateTime: undefined,
    LastIncreaseDateTime: undefined,
    NumberOfDecreasesToday: undefined,
    ReadCapacityUnits: undefined,
    WriteCapacityUnits: undefined
  };
  if (output.LastDecreaseDateTime !== undefined) {
    contents.LastDecreaseDateTime = new Date(
      output.LastDecreaseDateTime % 1 != 0
        ? Math.round(output.LastDecreaseDateTime * 1000)
        : output.LastDecreaseDateTime
    );
  }
  if (output.LastIncreaseDateTime !== undefined) {
    contents.LastIncreaseDateTime = new Date(
      output.LastIncreaseDateTime % 1 != 0
        ? Math.round(output.LastIncreaseDateTime * 1000)
        : output.LastIncreaseDateTime
    );
  }
  if (output.NumberOfDecreasesToday !== undefined) {
    contents.NumberOfDecreasesToday = output.NumberOfDecreasesToday;
  }
  if (output.ReadCapacityUnits !== undefined) {
    contents.ReadCapacityUnits = output.ReadCapacityUnits;
  }
  if (output.WriteCapacityUnits !== undefined) {
    contents.WriteCapacityUnits = output.WriteCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0ProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputExceededException => {
  let contents: any = {
    __type: "ProvisionedThroughputExceededException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ProvisionedThroughputOverride = (
  output: any,
  context: __SerdeContext
): ProvisionedThroughputOverride => {
  let contents: any = {
    __type: "ProvisionedThroughputOverride",
    ReadCapacityUnits: undefined
  };
  if (output.ReadCapacityUnits !== undefined) {
    contents.ReadCapacityUnits = output.ReadCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0PutItemInputAttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: AttributeValue } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0AttributeValue(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0PutItemOutput = (
  output: any,
  context: __SerdeContext
): PutItemOutput => {
  let contents: any = {
    __type: "PutItemOutput",
    Attributes: undefined,
    ConsumedCapacity: undefined,
    ItemCollectionMetrics: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_0AttributeMap(
      output.Attributes,
      context
    );
  }
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.ItemCollectionMetrics !== undefined) {
    contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetrics(
      output.ItemCollectionMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0PutRequest = (
  output: any,
  context: __SerdeContext
): PutRequest => {
  let contents: any = {
    __type: "PutRequest",
    Item: undefined
  };
  if (output.Item !== undefined) {
    contents.Item = deserializeAws_json1_0PutItemInputAttributeMap(
      output.Item,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0QueryOutput = (
  output: any,
  context: __SerdeContext
): QueryOutput => {
  let contents: any = {
    __type: "QueryOutput",
    ConsumedCapacity: undefined,
    Count: undefined,
    Items: undefined,
    LastEvaluatedKey: undefined,
    ScannedCount: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.Count !== undefined) {
    contents.Count = output.Count;
  }
  if (output.Items !== undefined) {
    contents.Items = deserializeAws_json1_0ItemList(output.Items, context);
  }
  if (output.LastEvaluatedKey !== undefined) {
    contents.LastEvaluatedKey = deserializeAws_json1_0Key(
      output.LastEvaluatedKey,
      context
    );
  }
  if (output.ScannedCount !== undefined) {
    contents.ScannedCount = output.ScannedCount;
  }
  return contents;
};

const deserializeAws_json1_0Replica = (
  output: any,
  context: __SerdeContext
): Replica => {
  let contents: any = {
    __type: "Replica",
    RegionName: undefined
  };
  if (output.RegionName !== undefined) {
    contents.RegionName = output.RegionName;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReplicaAlreadyExistsException => {
  let contents: any = {
    __type: "ReplicaAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaAutoScalingDescription => {
  let contents: any = {
    __type: "ReplicaAutoScalingDescription",
    GlobalSecondaryIndexes: undefined,
    RegionName: undefined,
    ReplicaProvisionedReadCapacityAutoScalingSettings: undefined,
    ReplicaProvisionedWriteCapacityAutoScalingSettings: undefined,
    ReplicaStatus: undefined
  };
  if (output.GlobalSecondaryIndexes !== undefined) {
    contents.GlobalSecondaryIndexes = deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(
      output.GlobalSecondaryIndexes,
      context
    );
  }
  if (output.RegionName !== undefined) {
    contents.RegionName = output.RegionName;
  }
  if (output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined) {
    contents.ReplicaProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ReplicaProvisionedReadCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined) {
    contents.ReplicaProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ReplicaStatus !== undefined) {
    contents.ReplicaStatus = output.ReplicaStatus;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ReplicaAutoScalingDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context)
  );
};

const deserializeAws_json1_0ReplicaDescription = (
  output: any,
  context: __SerdeContext
): ReplicaDescription => {
  let contents: any = {
    __type: "ReplicaDescription",
    GlobalSecondaryIndexes: undefined,
    KMSMasterKeyId: undefined,
    ProvisionedThroughputOverride: undefined,
    RegionName: undefined,
    ReplicaStatus: undefined,
    ReplicaStatusDescription: undefined,
    ReplicaStatusPercentProgress: undefined
  };
  if (output.GlobalSecondaryIndexes !== undefined) {
    contents.GlobalSecondaryIndexes = deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(
      output.GlobalSecondaryIndexes,
      context
    );
  }
  if (output.KMSMasterKeyId !== undefined) {
    contents.KMSMasterKeyId = output.KMSMasterKeyId;
  }
  if (output.ProvisionedThroughputOverride !== undefined) {
    contents.ProvisionedThroughputOverride = deserializeAws_json1_0ProvisionedThroughputOverride(
      output.ProvisionedThroughputOverride,
      context
    );
  }
  if (output.RegionName !== undefined) {
    contents.RegionName = output.RegionName;
  }
  if (output.ReplicaStatus !== undefined) {
    contents.ReplicaStatus = output.ReplicaStatus;
  }
  if (output.ReplicaStatusDescription !== undefined) {
    contents.ReplicaStatusDescription = output.ReplicaStatusDescription;
  }
  if (output.ReplicaStatusPercentProgress !== undefined) {
    contents.ReplicaStatusPercentProgress = output.ReplicaStatusPercentProgress;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ReplicaDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaDescription(entry, context)
  );
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexAutoScalingDescription => {
  let contents: any = {
    __type: "ReplicaGlobalSecondaryIndexAutoScalingDescription",
    IndexName: undefined,
    IndexStatus: undefined,
    ProvisionedReadCapacityAutoScalingSettings: undefined,
    ProvisionedWriteCapacityAutoScalingSettings: undefined
  };
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.IndexStatus !== undefined) {
    contents.IndexStatus = output.IndexStatus;
  }
  if (output.ProvisionedReadCapacityAutoScalingSettings !== undefined) {
    contents.ProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ProvisionedReadCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ProvisionedWriteCapacityAutoScalingSettings !== undefined) {
    contents.ProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ProvisionedWriteCapacityAutoScalingSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ReplicaGlobalSecondaryIndexAutoScalingDescription> => {
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
  let contents: any = {
    __type: "ReplicaGlobalSecondaryIndexDescription",
    IndexName: undefined,
    ProvisionedThroughputOverride: undefined
  };
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.ProvisionedThroughputOverride !== undefined) {
    contents.ProvisionedThroughputOverride = deserializeAws_json1_0ProvisionedThroughputOverride(
      output.ProvisionedThroughputOverride,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ReplicaGlobalSecondaryIndexDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context)
  );
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaGlobalSecondaryIndexSettingsDescription => {
  let contents: any = {
    __type: "ReplicaGlobalSecondaryIndexSettingsDescription",
    IndexName: undefined,
    IndexStatus: undefined,
    ProvisionedReadCapacityAutoScalingSettings: undefined,
    ProvisionedReadCapacityUnits: undefined,
    ProvisionedWriteCapacityAutoScalingSettings: undefined,
    ProvisionedWriteCapacityUnits: undefined
  };
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.IndexStatus !== undefined) {
    contents.IndexStatus = output.IndexStatus;
  }
  if (output.ProvisionedReadCapacityAutoScalingSettings !== undefined) {
    contents.ProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ProvisionedReadCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ProvisionedReadCapacityUnits !== undefined) {
    contents.ProvisionedReadCapacityUnits = output.ProvisionedReadCapacityUnits;
  }
  if (output.ProvisionedWriteCapacityAutoScalingSettings !== undefined) {
    contents.ProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ProvisionedWriteCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ProvisionedWriteCapacityUnits !== undefined) {
    contents.ProvisionedWriteCapacityUnits =
      output.ProvisionedWriteCapacityUnits;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ReplicaGlobalSecondaryIndexSettingsDescription> => {
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
): Array<Replica> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Replica(entry, context)
  );
};

const deserializeAws_json1_0ReplicaNotFoundException = (
  output: any,
  context: __SerdeContext
): ReplicaNotFoundException => {
  let contents: any = {
    __type: "ReplicaNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaSettingsDescription = (
  output: any,
  context: __SerdeContext
): ReplicaSettingsDescription => {
  let contents: any = {
    __type: "ReplicaSettingsDescription",
    RegionName: undefined,
    ReplicaBillingModeSummary: undefined,
    ReplicaGlobalSecondaryIndexSettings: undefined,
    ReplicaProvisionedReadCapacityAutoScalingSettings: undefined,
    ReplicaProvisionedReadCapacityUnits: undefined,
    ReplicaProvisionedWriteCapacityAutoScalingSettings: undefined,
    ReplicaProvisionedWriteCapacityUnits: undefined,
    ReplicaStatus: undefined
  };
  if (output.RegionName !== undefined) {
    contents.RegionName = output.RegionName;
  }
  if (output.ReplicaBillingModeSummary !== undefined) {
    contents.ReplicaBillingModeSummary = deserializeAws_json1_0BillingModeSummary(
      output.ReplicaBillingModeSummary,
      context
    );
  }
  if (output.ReplicaGlobalSecondaryIndexSettings !== undefined) {
    contents.ReplicaGlobalSecondaryIndexSettings = deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(
      output.ReplicaGlobalSecondaryIndexSettings,
      context
    );
  }
  if (output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined) {
    contents.ReplicaProvisionedReadCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ReplicaProvisionedReadCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ReplicaProvisionedReadCapacityUnits !== undefined) {
    contents.ReplicaProvisionedReadCapacityUnits =
      output.ReplicaProvisionedReadCapacityUnits;
  }
  if (output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined) {
    contents.ReplicaProvisionedWriteCapacityAutoScalingSettings = deserializeAws_json1_0AutoScalingSettingsDescription(
      output.ReplicaProvisionedWriteCapacityAutoScalingSettings,
      context
    );
  }
  if (output.ReplicaProvisionedWriteCapacityUnits !== undefined) {
    contents.ReplicaProvisionedWriteCapacityUnits =
      output.ReplicaProvisionedWriteCapacityUnits;
  }
  if (output.ReplicaStatus !== undefined) {
    contents.ReplicaStatus = output.ReplicaStatus;
  }
  return contents;
};

const deserializeAws_json1_0ReplicaSettingsDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<ReplicaSettingsDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ReplicaSettingsDescription(entry, context)
  );
};

const deserializeAws_json1_0RequestLimitExceeded = (
  output: any,
  context: __SerdeContext
): RequestLimitExceeded => {
  let contents: any = {
    __type: "RequestLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0RestoreSummary = (
  output: any,
  context: __SerdeContext
): RestoreSummary => {
  let contents: any = {
    __type: "RestoreSummary",
    RestoreDateTime: undefined,
    RestoreInProgress: undefined,
    SourceBackupArn: undefined,
    SourceTableArn: undefined
  };
  if (output.RestoreDateTime !== undefined) {
    contents.RestoreDateTime = new Date(
      output.RestoreDateTime % 1 != 0
        ? Math.round(output.RestoreDateTime * 1000)
        : output.RestoreDateTime
    );
  }
  if (output.RestoreInProgress !== undefined) {
    contents.RestoreInProgress = output.RestoreInProgress;
  }
  if (output.SourceBackupArn !== undefined) {
    contents.SourceBackupArn = output.SourceBackupArn;
  }
  if (output.SourceTableArn !== undefined) {
    contents.SourceTableArn = output.SourceTableArn;
  }
  return contents;
};

const deserializeAws_json1_0RestoreTableFromBackupOutput = (
  output: any,
  context: __SerdeContext
): RestoreTableFromBackupOutput => {
  let contents: any = {
    __type: "RestoreTableFromBackupOutput",
    TableDescription: undefined
  };
  if (output.TableDescription !== undefined) {
    contents.TableDescription = deserializeAws_json1_0TableDescription(
      output.TableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0RestoreTableToPointInTimeOutput = (
  output: any,
  context: __SerdeContext
): RestoreTableToPointInTimeOutput => {
  let contents: any = {
    __type: "RestoreTableToPointInTimeOutput",
    TableDescription: undefined
  };
  if (output.TableDescription !== undefined) {
    contents.TableDescription = deserializeAws_json1_0TableDescription(
      output.TableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0SSEDescription = (
  output: any,
  context: __SerdeContext
): SSEDescription => {
  let contents: any = {
    __type: "SSEDescription",
    InaccessibleEncryptionDateTime: undefined,
    KMSMasterKeyArn: undefined,
    SSEType: undefined,
    Status: undefined
  };
  if (output.InaccessibleEncryptionDateTime !== undefined) {
    contents.InaccessibleEncryptionDateTime = new Date(
      output.InaccessibleEncryptionDateTime % 1 != 0
        ? Math.round(output.InaccessibleEncryptionDateTime * 1000)
        : output.InaccessibleEncryptionDateTime
    );
  }
  if (output.KMSMasterKeyArn !== undefined) {
    contents.KMSMasterKeyArn = output.KMSMasterKeyArn;
  }
  if (output.SSEType !== undefined) {
    contents.SSEType = output.SSEType;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_0ScanOutput = (
  output: any,
  context: __SerdeContext
): ScanOutput => {
  let contents: any = {
    __type: "ScanOutput",
    ConsumedCapacity: undefined,
    Count: undefined,
    Items: undefined,
    LastEvaluatedKey: undefined,
    ScannedCount: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.Count !== undefined) {
    contents.Count = output.Count;
  }
  if (output.Items !== undefined) {
    contents.Items = deserializeAws_json1_0ItemList(output.Items, context);
  }
  if (output.LastEvaluatedKey !== undefined) {
    contents.LastEvaluatedKey = deserializeAws_json1_0Key(
      output.LastEvaluatedKey,
      context
    );
  }
  if (output.ScannedCount !== undefined) {
    contents.ScannedCount = output.ScannedCount;
  }
  return contents;
};

const deserializeAws_json1_0SecondaryIndexesCapacityMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Capacity } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_0Capacity(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_0SourceTableDetails = (
  output: any,
  context: __SerdeContext
): SourceTableDetails => {
  let contents: any = {
    __type: "SourceTableDetails",
    BillingMode: undefined,
    ItemCount: undefined,
    KeySchema: undefined,
    ProvisionedThroughput: undefined,
    TableArn: undefined,
    TableCreationDateTime: undefined,
    TableId: undefined,
    TableName: undefined,
    TableSizeBytes: undefined
  };
  if (output.BillingMode !== undefined) {
    contents.BillingMode = output.BillingMode;
  }
  if (output.ItemCount !== undefined) {
    contents.ItemCount = output.ItemCount;
  }
  if (output.KeySchema !== undefined) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (output.ProvisionedThroughput !== undefined) {
    contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughput(
      output.ProvisionedThroughput,
      context
    );
  }
  if (output.TableArn !== undefined) {
    contents.TableArn = output.TableArn;
  }
  if (output.TableCreationDateTime !== undefined) {
    contents.TableCreationDateTime = new Date(
      output.TableCreationDateTime % 1 != 0
        ? Math.round(output.TableCreationDateTime * 1000)
        : output.TableCreationDateTime
    );
  }
  if (output.TableId !== undefined) {
    contents.TableId = output.TableId;
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  if (output.TableSizeBytes !== undefined) {
    contents.TableSizeBytes = output.TableSizeBytes;
  }
  return contents;
};

const deserializeAws_json1_0SourceTableFeatureDetails = (
  output: any,
  context: __SerdeContext
): SourceTableFeatureDetails => {
  let contents: any = {
    __type: "SourceTableFeatureDetails",
    GlobalSecondaryIndexes: undefined,
    LocalSecondaryIndexes: undefined,
    SSEDescription: undefined,
    StreamDescription: undefined,
    TimeToLiveDescription: undefined
  };
  if (output.GlobalSecondaryIndexes !== undefined) {
    contents.GlobalSecondaryIndexes = deserializeAws_json1_0GlobalSecondaryIndexes(
      output.GlobalSecondaryIndexes,
      context
    );
  }
  if (output.LocalSecondaryIndexes !== undefined) {
    contents.LocalSecondaryIndexes = deserializeAws_json1_0LocalSecondaryIndexes(
      output.LocalSecondaryIndexes,
      context
    );
  }
  if (output.SSEDescription !== undefined) {
    contents.SSEDescription = deserializeAws_json1_0SSEDescription(
      output.SSEDescription,
      context
    );
  }
  if (output.StreamDescription !== undefined) {
    contents.StreamDescription = deserializeAws_json1_0StreamSpecification(
      output.StreamDescription,
      context
    );
  }
  if (output.TimeToLiveDescription !== undefined) {
    contents.TimeToLiveDescription = deserializeAws_json1_0TimeToLiveDescription(
      output.TimeToLiveDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0StreamSpecification = (
  output: any,
  context: __SerdeContext
): StreamSpecification => {
  let contents: any = {
    __type: "StreamSpecification",
    StreamEnabled: undefined,
    StreamViewType: undefined
  };
  if (output.StreamEnabled !== undefined) {
    contents.StreamEnabled = output.StreamEnabled;
  }
  if (output.StreamViewType !== undefined) {
    contents.StreamViewType = output.StreamViewType;
  }
  return contents;
};

const deserializeAws_json1_0StringSetAttributeValue = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0TableAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TableAlreadyExistsException => {
  let contents: any = {
    __type: "TableAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TableAutoScalingDescription = (
  output: any,
  context: __SerdeContext
): TableAutoScalingDescription => {
  let contents: any = {
    __type: "TableAutoScalingDescription",
    Replicas: undefined,
    TableName: undefined,
    TableStatus: undefined
  };
  if (output.Replicas !== undefined) {
    contents.Replicas = deserializeAws_json1_0ReplicaAutoScalingDescriptionList(
      output.Replicas,
      context
    );
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  if (output.TableStatus !== undefined) {
    contents.TableStatus = output.TableStatus;
  }
  return contents;
};

const deserializeAws_json1_0TableDescription = (
  output: any,
  context: __SerdeContext
): TableDescription => {
  let contents: any = {
    __type: "TableDescription",
    ArchivalSummary: undefined,
    AttributeDefinitions: undefined,
    BillingModeSummary: undefined,
    CreationDateTime: undefined,
    GlobalSecondaryIndexes: undefined,
    GlobalTableVersion: undefined,
    ItemCount: undefined,
    KeySchema: undefined,
    LatestStreamArn: undefined,
    LatestStreamLabel: undefined,
    LocalSecondaryIndexes: undefined,
    ProvisionedThroughput: undefined,
    Replicas: undefined,
    RestoreSummary: undefined,
    SSEDescription: undefined,
    StreamSpecification: undefined,
    TableArn: undefined,
    TableId: undefined,
    TableName: undefined,
    TableSizeBytes: undefined,
    TableStatus: undefined
  };
  if (output.ArchivalSummary !== undefined) {
    contents.ArchivalSummary = deserializeAws_json1_0ArchivalSummary(
      output.ArchivalSummary,
      context
    );
  }
  if (output.AttributeDefinitions !== undefined) {
    contents.AttributeDefinitions = deserializeAws_json1_0AttributeDefinitions(
      output.AttributeDefinitions,
      context
    );
  }
  if (output.BillingModeSummary !== undefined) {
    contents.BillingModeSummary = deserializeAws_json1_0BillingModeSummary(
      output.BillingModeSummary,
      context
    );
  }
  if (output.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      output.CreationDateTime % 1 != 0
        ? Math.round(output.CreationDateTime * 1000)
        : output.CreationDateTime
    );
  }
  if (output.GlobalSecondaryIndexes !== undefined) {
    contents.GlobalSecondaryIndexes = deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(
      output.GlobalSecondaryIndexes,
      context
    );
  }
  if (output.GlobalTableVersion !== undefined) {
    contents.GlobalTableVersion = output.GlobalTableVersion;
  }
  if (output.ItemCount !== undefined) {
    contents.ItemCount = output.ItemCount;
  }
  if (output.KeySchema !== undefined) {
    contents.KeySchema = deserializeAws_json1_0KeySchema(
      output.KeySchema,
      context
    );
  }
  if (output.LatestStreamArn !== undefined) {
    contents.LatestStreamArn = output.LatestStreamArn;
  }
  if (output.LatestStreamLabel !== undefined) {
    contents.LatestStreamLabel = output.LatestStreamLabel;
  }
  if (output.LocalSecondaryIndexes !== undefined) {
    contents.LocalSecondaryIndexes = deserializeAws_json1_0LocalSecondaryIndexDescriptionList(
      output.LocalSecondaryIndexes,
      context
    );
  }
  if (output.ProvisionedThroughput !== undefined) {
    contents.ProvisionedThroughput = deserializeAws_json1_0ProvisionedThroughputDescription(
      output.ProvisionedThroughput,
      context
    );
  }
  if (output.Replicas !== undefined) {
    contents.Replicas = deserializeAws_json1_0ReplicaDescriptionList(
      output.Replicas,
      context
    );
  }
  if (output.RestoreSummary !== undefined) {
    contents.RestoreSummary = deserializeAws_json1_0RestoreSummary(
      output.RestoreSummary,
      context
    );
  }
  if (output.SSEDescription !== undefined) {
    contents.SSEDescription = deserializeAws_json1_0SSEDescription(
      output.SSEDescription,
      context
    );
  }
  if (output.StreamSpecification !== undefined) {
    contents.StreamSpecification = deserializeAws_json1_0StreamSpecification(
      output.StreamSpecification,
      context
    );
  }
  if (output.TableArn !== undefined) {
    contents.TableArn = output.TableArn;
  }
  if (output.TableId !== undefined) {
    contents.TableId = output.TableId;
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  if (output.TableSizeBytes !== undefined) {
    contents.TableSizeBytes = output.TableSizeBytes;
  }
  if (output.TableStatus !== undefined) {
    contents.TableStatus = output.TableStatus;
  }
  return contents;
};

const deserializeAws_json1_0TableInUseException = (
  output: any,
  context: __SerdeContext
): TableInUseException => {
  let contents: any = {
    __type: "TableInUseException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TableNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0TableNotFoundException = (
  output: any,
  context: __SerdeContext
): TableNotFoundException => {
  let contents: any = {
    __type: "TableNotFoundException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_0TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Tag(entry, context)
  );
};

const deserializeAws_json1_0TimeToLiveDescription = (
  output: any,
  context: __SerdeContext
): TimeToLiveDescription => {
  let contents: any = {
    __type: "TimeToLiveDescription",
    AttributeName: undefined,
    TimeToLiveStatus: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.TimeToLiveStatus !== undefined) {
    contents.TimeToLiveStatus = output.TimeToLiveStatus;
  }
  return contents;
};

const deserializeAws_json1_0TimeToLiveSpecification = (
  output: any,
  context: __SerdeContext
): TimeToLiveSpecification => {
  let contents: any = {
    __type: "TimeToLiveSpecification",
    AttributeName: undefined,
    Enabled: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.Enabled !== undefined) {
    contents.Enabled = output.Enabled;
  }
  return contents;
};

const deserializeAws_json1_0TransactGetItemsOutput = (
  output: any,
  context: __SerdeContext
): TransactGetItemsOutput => {
  let contents: any = {
    __type: "TransactGetItemsOutput",
    ConsumedCapacity: undefined,
    Responses: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.Responses !== undefined) {
    contents.Responses = deserializeAws_json1_0ItemResponseList(
      output.Responses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0TransactWriteItemsOutput = (
  output: any,
  context: __SerdeContext
): TransactWriteItemsOutput => {
  let contents: any = {
    __type: "TransactWriteItemsOutput",
    ConsumedCapacity: undefined,
    ItemCollectionMetrics: undefined
  };
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacityMultiple(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.ItemCollectionMetrics !== undefined) {
    contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetricsPerTable(
      output.ItemCollectionMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0TransactionCanceledException = (
  output: any,
  context: __SerdeContext
): TransactionCanceledException => {
  let contents: any = {
    __type: "TransactionCanceledException",
    CancellationReasons: undefined,
    Message: undefined
  };
  if (output.CancellationReasons !== undefined) {
    contents.CancellationReasons = deserializeAws_json1_0CancellationReasonList(
      output.CancellationReasons,
      context
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0TransactionConflictException = (
  output: any,
  context: __SerdeContext
): TransactionConflictException => {
  let contents: any = {
    __type: "TransactionConflictException",
    message: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TransactionInProgressException = (
  output: any,
  context: __SerdeContext
): TransactionInProgressException => {
  let contents: any = {
    __type: "TransactionInProgressException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_0UpdateContinuousBackupsOutput = (
  output: any,
  context: __SerdeContext
): UpdateContinuousBackupsOutput => {
  let contents: any = {
    __type: "UpdateContinuousBackupsOutput",
    ContinuousBackupsDescription: undefined
  };
  if (output.ContinuousBackupsDescription !== undefined) {
    contents.ContinuousBackupsDescription = deserializeAws_json1_0ContinuousBackupsDescription(
      output.ContinuousBackupsDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0UpdateContributorInsightsOutput = (
  output: any,
  context: __SerdeContext
): UpdateContributorInsightsOutput => {
  let contents: any = {
    __type: "UpdateContributorInsightsOutput",
    ContributorInsightsStatus: undefined,
    IndexName: undefined,
    TableName: undefined
  };
  if (output.ContributorInsightsStatus !== undefined) {
    contents.ContributorInsightsStatus = output.ContributorInsightsStatus;
  }
  if (output.IndexName !== undefined) {
    contents.IndexName = output.IndexName;
  }
  if (output.TableName !== undefined) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_0UpdateGlobalTableOutput = (
  output: any,
  context: __SerdeContext
): UpdateGlobalTableOutput => {
  let contents: any = {
    __type: "UpdateGlobalTableOutput",
    GlobalTableDescription: undefined
  };
  if (output.GlobalTableDescription !== undefined) {
    contents.GlobalTableDescription = deserializeAws_json1_0GlobalTableDescription(
      output.GlobalTableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0UpdateGlobalTableSettingsOutput = (
  output: any,
  context: __SerdeContext
): UpdateGlobalTableSettingsOutput => {
  let contents: any = {
    __type: "UpdateGlobalTableSettingsOutput",
    GlobalTableName: undefined,
    ReplicaSettings: undefined
  };
  if (output.GlobalTableName !== undefined) {
    contents.GlobalTableName = output.GlobalTableName;
  }
  if (output.ReplicaSettings !== undefined) {
    contents.ReplicaSettings = deserializeAws_json1_0ReplicaSettingsDescriptionList(
      output.ReplicaSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0UpdateItemOutput = (
  output: any,
  context: __SerdeContext
): UpdateItemOutput => {
  let contents: any = {
    __type: "UpdateItemOutput",
    Attributes: undefined,
    ConsumedCapacity: undefined,
    ItemCollectionMetrics: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_0AttributeMap(
      output.Attributes,
      context
    );
  }
  if (output.ConsumedCapacity !== undefined) {
    contents.ConsumedCapacity = deserializeAws_json1_0ConsumedCapacity(
      output.ConsumedCapacity,
      context
    );
  }
  if (output.ItemCollectionMetrics !== undefined) {
    contents.ItemCollectionMetrics = deserializeAws_json1_0ItemCollectionMetrics(
      output.ItemCollectionMetrics,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0UpdateTableOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableOutput => {
  let contents: any = {
    __type: "UpdateTableOutput",
    TableDescription: undefined
  };
  if (output.TableDescription !== undefined) {
    contents.TableDescription = deserializeAws_json1_0TableDescription(
      output.TableDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = (
  output: any,
  context: __SerdeContext
): UpdateTableReplicaAutoScalingOutput => {
  let contents: any = {
    __type: "UpdateTableReplicaAutoScalingOutput",
    TableAutoScalingDescription: undefined
  };
  if (output.TableAutoScalingDescription !== undefined) {
    contents.TableAutoScalingDescription = deserializeAws_json1_0TableAutoScalingDescription(
      output.TableAutoScalingDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0UpdateTimeToLiveOutput = (
  output: any,
  context: __SerdeContext
): UpdateTimeToLiveOutput => {
  let contents: any = {
    __type: "UpdateTimeToLiveOutput",
    TimeToLiveSpecification: undefined
  };
  if (output.TimeToLiveSpecification !== undefined) {
    contents.TimeToLiveSpecification = deserializeAws_json1_0TimeToLiveSpecification(
      output.TimeToLiveSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WriteRequest = (
  output: any,
  context: __SerdeContext
): WriteRequest => {
  let contents: any = {
    __type: "WriteRequest",
    DeleteRequest: undefined,
    PutRequest: undefined
  };
  if (output.DeleteRequest !== undefined) {
    contents.DeleteRequest = deserializeAws_json1_0DeleteRequest(
      output.DeleteRequest,
      context
    );
  }
  if (output.PutRequest !== undefined) {
    contents.PutRequest = deserializeAws_json1_0PutRequest(
      output.PutRequest,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WriteRequests = (
  output: any,
  context: __SerdeContext
): Array<WriteRequest> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0WriteRequest(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
