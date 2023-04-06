// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput } from "../commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "../commands/CancelExportTaskCommand";
import { CreateExportTaskCommandInput, CreateExportTaskCommandOutput } from "../commands/CreateExportTaskCommand";
import { CreateLogGroupCommandInput, CreateLogGroupCommandOutput } from "../commands/CreateLogGroupCommand";
import { CreateLogStreamCommandInput, CreateLogStreamCommandOutput } from "../commands/CreateLogStreamCommand";
import {
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
} from "../commands/DeleteDataProtectionPolicyCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "../commands/DeleteDestinationCommand";
import { DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput } from "../commands/DeleteLogGroupCommand";
import { DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput } from "../commands/DeleteLogStreamCommand";
import { DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput } from "../commands/DeleteMetricFilterCommand";
import {
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
} from "../commands/DeleteQueryDefinitionCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "../commands/DeleteRetentionPolicyCommand";
import {
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "../commands/DeleteSubscriptionFilterCommand";
import {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "../commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import { DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput } from "../commands/DescribeLogGroupsCommand";
import { DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput } from "../commands/DescribeLogStreamsCommand";
import {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "../commands/DescribeMetricFiltersCommand";
import { DescribeQueriesCommandInput, DescribeQueriesCommandOutput } from "../commands/DescribeQueriesCommand";
import {
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
} from "../commands/DescribeQueryDefinitionsCommand";
import {
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
} from "../commands/DescribeResourcePoliciesCommand";
import {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "../commands/DescribeSubscriptionFiltersCommand";
import { DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput } from "../commands/DisassociateKmsKeyCommand";
import { FilterLogEventsCommandInput, FilterLogEventsCommandOutput } from "../commands/FilterLogEventsCommand";
import {
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "../commands/GetDataProtectionPolicyCommand";
import { GetLogEventsCommandInput, GetLogEventsCommandOutput } from "../commands/GetLogEventsCommand";
import { GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput } from "../commands/GetLogGroupFieldsCommand";
import { GetLogRecordCommandInput, GetLogRecordCommandOutput } from "../commands/GetLogRecordCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput } from "../commands/ListTagsLogGroupCommand";
import {
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "../commands/PutDataProtectionPolicyCommand";
import { PutDestinationCommandInput, PutDestinationCommandOutput } from "../commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "../commands/PutDestinationPolicyCommand";
import { PutLogEventsCommandInput, PutLogEventsCommandOutput } from "../commands/PutLogEventsCommand";
import { PutMetricFilterCommandInput, PutMetricFilterCommandOutput } from "../commands/PutMetricFilterCommand";
import { PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput } from "../commands/PutQueryDefinitionCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "../commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "../commands/PutSubscriptionFilterCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import { StopQueryCommandInput, StopQueryCommandOutput } from "../commands/StopQueryCommand";
import { TagLogGroupCommandInput, TagLogGroupCommandOutput } from "../commands/TagLogGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestMetricFilterCommandInput, TestMetricFilterCommandOutput } from "../commands/TestMetricFilterCommand";
import { UntagLogGroupCommandInput, UntagLogGroupCommandOutput } from "../commands/UntagLogGroupCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { CloudWatchLogsServiceException as __BaseException } from "../models/CloudWatchLogsServiceException";
import {
  AssociateKmsKeyRequest,
  CancelExportTaskRequest,
  CreateExportTaskRequest,
  CreateExportTaskResponse,
  CreateLogGroupRequest,
  CreateLogStreamRequest,
  DataAlreadyAcceptedException,
  DeleteDataProtectionPolicyRequest,
  DeleteDestinationRequest,
  DeleteLogGroupRequest,
  DeleteLogStreamRequest,
  DeleteMetricFilterRequest,
  DeleteQueryDefinitionRequest,
  DeleteQueryDefinitionResponse,
  DeleteResourcePolicyRequest,
  DeleteRetentionPolicyRequest,
  DeleteSubscriptionFilterRequest,
  DescribeDestinationsRequest,
  DescribeDestinationsResponse,
  DescribeExportTasksRequest,
  DescribeExportTasksResponse,
  DescribeLogGroupsRequest,
  DescribeLogGroupsResponse,
  DescribeLogStreamsRequest,
  DescribeLogStreamsResponse,
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse,
  DescribeQueriesRequest,
  DescribeQueriesResponse,
  DescribeQueryDefinitionsRequest,
  DescribeQueryDefinitionsResponse,
  DescribeResourcePoliciesRequest,
  DescribeResourcePoliciesResponse,
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse,
  Destination,
  DisassociateKmsKeyRequest,
  ExportTask,
  ExportTaskExecutionInfo,
  ExportTaskStatus,
  FilteredLogEvent,
  FilterLogEventsRequest,
  FilterLogEventsResponse,
  GetDataProtectionPolicyRequest,
  GetDataProtectionPolicyResponse,
  GetLogEventsRequest,
  GetLogEventsResponse,
  GetLogGroupFieldsRequest,
  GetLogGroupFieldsResponse,
  GetLogRecordRequest,
  GetLogRecordResponse,
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  InputLogEvent,
  InvalidOperationException,
  InvalidParameterException,
  InvalidSequenceTokenException,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsLogGroupRequest,
  ListTagsLogGroupResponse,
  LogGroup,
  LogGroupField,
  LogStream,
  MalformedQueryException,
  MetricFilter,
  MetricFilterMatchRecord,
  MetricTransformation,
  OperationAbortedException,
  OutputLogEvent,
  PutDataProtectionPolicyRequest,
  PutDataProtectionPolicyResponse,
  PutDestinationPolicyRequest,
  PutDestinationRequest,
  PutDestinationResponse,
  PutLogEventsRequest,
  PutLogEventsResponse,
  PutMetricFilterRequest,
  PutQueryDefinitionRequest,
  PutQueryDefinitionResponse,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutRetentionPolicyRequest,
  PutSubscriptionFilterRequest,
  QueryCompileError,
  QueryCompileErrorLocation,
  QueryDefinition,
  QueryInfo,
  QueryStatistics,
  RejectedLogEventsInfo,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ResourcePolicy,
  ResultField,
  SearchedLogStream,
  ServiceUnavailableException,
  StartQueryRequest,
  StartQueryResponse,
  StopQueryRequest,
  StopQueryResponse,
  SubscriptionFilter,
  TagLogGroupRequest,
  TagResourceRequest,
  TestMetricFilterRequest,
  TestMetricFilterResponse,
  TooManyTagsException,
  UnrecognizedClientException,
  UntagLogGroupRequest,
  UntagResourceRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateKmsKeyCommand
 */
export const se_AssociateKmsKeyCommand = async (
  input: AssociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.AssociateKmsKey",
  };
  let body: any;
  body = JSON.stringify(se_AssociateKmsKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelExportTaskCommand
 */
export const se_CancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CancelExportTask",
  };
  let body: any;
  body = JSON.stringify(se_CancelExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExportTaskCommand
 */
export const se_CreateExportTaskCommand = async (
  input: CreateExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CreateExportTask",
  };
  let body: any;
  body = JSON.stringify(se_CreateExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogGroupCommand
 */
export const se_CreateLogGroupCommand = async (
  input: CreateLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CreateLogGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogStreamCommand
 */
export const se_CreateLogStreamCommand = async (
  input: CreateLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CreateLogStream",
  };
  let body: any;
  body = JSON.stringify(se_CreateLogStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataProtectionPolicyCommand
 */
export const se_DeleteDataProtectionPolicyCommand = async (
  input: DeleteDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteDataProtectionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDataProtectionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDestinationCommand
 */
export const se_DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteDestination",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogGroupCommand
 */
export const se_DeleteLogGroupCommand = async (
  input: DeleteLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteLogGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogStreamCommand
 */
export const se_DeleteLogStreamCommand = async (
  input: DeleteLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteLogStream",
  };
  let body: any;
  body = JSON.stringify(se_DeleteLogStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMetricFilterCommand
 */
export const se_DeleteMetricFilterCommand = async (
  input: DeleteMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteMetricFilter",
  };
  let body: any;
  body = JSON.stringify(se_DeleteMetricFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteQueryDefinitionCommand
 */
export const se_DeleteQueryDefinitionCommand = async (
  input: DeleteQueryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteQueryDefinition",
  };
  let body: any;
  body = JSON.stringify(se_DeleteQueryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRetentionPolicyCommand
 */
export const se_DeleteRetentionPolicyCommand = async (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSubscriptionFilterCommand
 */
export const se_DeleteSubscriptionFilterCommand = async (
  input: DeleteSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteSubscriptionFilter",
  };
  let body: any;
  body = JSON.stringify(se_DeleteSubscriptionFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDestinationsCommand
 */
export const se_DescribeDestinationsCommand = async (
  input: DescribeDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeDestinations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDestinationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExportTasksCommand
 */
export const se_DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeExportTasks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeExportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLogGroupsCommand
 */
export const se_DescribeLogGroupsCommand = async (
  input: DescribeLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeLogGroups",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLogGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLogStreamsCommand
 */
export const se_DescribeLogStreamsCommand = async (
  input: DescribeLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeLogStreams",
  };
  let body: any;
  body = JSON.stringify(se_DescribeLogStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMetricFiltersCommand
 */
export const se_DescribeMetricFiltersCommand = async (
  input: DescribeMetricFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeMetricFilters",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMetricFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQueriesCommand
 */
export const se_DescribeQueriesCommand = async (
  input: DescribeQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeQueries",
  };
  let body: any;
  body = JSON.stringify(se_DescribeQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQueryDefinitionsCommand
 */
export const se_DescribeQueryDefinitionsCommand = async (
  input: DescribeQueryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeQueryDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeQueryDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourcePoliciesCommand
 */
export const se_DescribeResourcePoliciesCommand = async (
  input: DescribeResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeResourcePolicies",
  };
  let body: any;
  body = JSON.stringify(se_DescribeResourcePoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscriptionFiltersCommand
 */
export const se_DescribeSubscriptionFiltersCommand = async (
  input: DescribeSubscriptionFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeSubscriptionFilters",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSubscriptionFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateKmsKeyCommand
 */
export const se_DisassociateKmsKeyCommand = async (
  input: DisassociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DisassociateKmsKey",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateKmsKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1FilterLogEventsCommand
 */
export const se_FilterLogEventsCommand = async (
  input: FilterLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.FilterLogEvents",
  };
  let body: any;
  body = JSON.stringify(se_FilterLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataProtectionPolicyCommand
 */
export const se_GetDataProtectionPolicyCommand = async (
  input: GetDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetDataProtectionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetDataProtectionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogEventsCommand
 */
export const se_GetLogEventsCommand = async (
  input: GetLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetLogEvents",
  };
  let body: any;
  body = JSON.stringify(se_GetLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogGroupFieldsCommand
 */
export const se_GetLogGroupFieldsCommand = async (
  input: GetLogGroupFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetLogGroupFields",
  };
  let body: any;
  body = JSON.stringify(se_GetLogGroupFieldsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogRecordCommand
 */
export const se_GetLogRecordCommand = async (
  input: GetLogRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetLogRecord",
  };
  let body: any;
  body = JSON.stringify(se_GetLogRecordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQueryResultsCommand
 */
export const se_GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetQueryResults",
  };
  let body: any;
  body = JSON.stringify(se_GetQueryResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsLogGroupCommand
 */
export const se_ListTagsLogGroupCommand = async (
  input: ListTagsLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.ListTagsLogGroup",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDataProtectionPolicyCommand
 */
export const se_PutDataProtectionPolicyCommand = async (
  input: PutDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutDataProtectionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutDataProtectionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDestinationCommand
 */
export const se_PutDestinationCommand = async (
  input: PutDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutDestination",
  };
  let body: any;
  body = JSON.stringify(se_PutDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDestinationPolicyCommand
 */
export const se_PutDestinationPolicyCommand = async (
  input: PutDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutDestinationPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutDestinationPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLogEventsCommand
 */
export const se_PutLogEventsCommand = async (
  input: PutLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutLogEvents",
  };
  let body: any;
  body = JSON.stringify(se_PutLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutMetricFilterCommand
 */
export const se_PutMetricFilterCommand = async (
  input: PutMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutMetricFilter",
  };
  let body: any;
  body = JSON.stringify(se_PutMetricFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutQueryDefinitionCommand
 */
export const se_PutQueryDefinitionCommand = async (
  input: PutQueryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutQueryDefinition",
  };
  let body: any;
  body = JSON.stringify(se_PutQueryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRetentionPolicyCommand
 */
export const se_PutRetentionPolicyCommand = async (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutSubscriptionFilterCommand
 */
export const se_PutSubscriptionFilterCommand = async (
  input: PutSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutSubscriptionFilter",
  };
  let body: any;
  body = JSON.stringify(se_PutSubscriptionFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartQueryCommand
 */
export const se_StartQueryCommand = async (
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.StartQuery",
  };
  let body: any;
  body = JSON.stringify(se_StartQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopQueryCommand
 */
export const se_StopQueryCommand = async (
  input: StopQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.StopQuery",
  };
  let body: any;
  body = JSON.stringify(se_StopQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagLogGroupCommand
 */
export const se_TagLogGroupCommand = async (
  input: TagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.TagLogGroup",
  };
  let body: any;
  body = JSON.stringify(se_TagLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestMetricFilterCommand
 */
export const se_TestMetricFilterCommand = async (
  input: TestMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.TestMetricFilter",
  };
  let body: any;
  body = JSON.stringify(se_TestMetricFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagLogGroupCommand
 */
export const se_UntagLogGroupCommand = async (
  input: UntagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.UntagLogGroup",
  };
  let body: any;
  body = JSON.stringify(se_UntagLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateKmsKeyCommand
 */
export const de_AssociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateKmsKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateKmsKeyCommandError
 */
const de_AssociateKmsKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelExportTaskCommand
 */
export const de_CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelExportTaskCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelExportTaskCommandError
 */
const de_CancelExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.cloudwatchlogs#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateExportTaskCommand
 */
export const de_CreateExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateExportTaskResponse(data, context);
  const response: CreateExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateExportTaskCommandError
 */
const de_CreateExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLogGroupCommand
 */
export const de_CreateLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLogGroupCommandError
 */
const de_CreateLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLogStreamCommand
 */
export const de_CreateLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateLogStreamCommandError
 */
const de_CreateLogStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDataProtectionPolicyCommand
 */
export const de_DeleteDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataProtectionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDataProtectionPolicyCommandError
 */
const de_DeleteDataProtectionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataProtectionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDestinationCommand
 */
export const de_DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDestinationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDestinationCommandError
 */
const de_DeleteDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLogGroupCommand
 */
export const de_DeleteLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLogGroupCommandError
 */
const de_DeleteLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteLogStreamCommand
 */
export const de_DeleteLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteLogStreamCommandError
 */
const de_DeleteLogStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMetricFilterCommand
 */
export const de_DeleteMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMetricFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMetricFilterCommandError
 */
const de_DeleteMetricFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteQueryDefinitionCommand
 */
export const de_DeleteQueryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteQueryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteQueryDefinitionResponse(data, context);
  const response: DeleteQueryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteQueryDefinitionCommandError
 */
const de_DeleteQueryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRetentionPolicyCommand
 */
export const de_DeleteRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRetentionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRetentionPolicyCommandError
 */
const de_DeleteRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSubscriptionFilterCommand
 */
export const de_DeleteSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSubscriptionFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSubscriptionFilterCommandError
 */
const de_DeleteSubscriptionFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDestinationsCommand
 */
export const de_DescribeDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDestinationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDestinationsResponse(data, context);
  const response: DescribeDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDestinationsCommandError
 */
const de_DescribeDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeExportTasksCommand
 */
export const de_DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeExportTasksCommandError
 */
const de_DescribeExportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLogGroupsCommand
 */
export const de_DescribeLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLogGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLogGroupsResponse(data, context);
  const response: DescribeLogGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLogGroupsCommandError
 */
const de_DescribeLogGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLogStreamsCommand
 */
export const de_DescribeLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLogStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLogStreamsResponse(data, context);
  const response: DescribeLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeLogStreamsCommandError
 */
const de_DescribeLogStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMetricFiltersCommand
 */
export const de_DescribeMetricFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMetricFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMetricFiltersResponse(data, context);
  const response: DescribeMetricFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMetricFiltersCommandError
 */
const de_DescribeMetricFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeQueriesCommand
 */
export const de_DescribeQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeQueriesResponse(data, context);
  const response: DescribeQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeQueriesCommandError
 */
const de_DescribeQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeQueryDefinitionsCommand
 */
export const de_DescribeQueryDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeQueryDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeQueryDefinitionsResponse(data, context);
  const response: DescribeQueryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeQueryDefinitionsCommandError
 */
const de_DescribeQueryDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeResourcePoliciesCommand
 */
export const de_DescribeResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourcePoliciesResponse(data, context);
  const response: DescribeResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeResourcePoliciesCommandError
 */
const de_DescribeResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSubscriptionFiltersCommand
 */
export const de_DescribeSubscriptionFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSubscriptionFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSubscriptionFiltersResponse(data, context);
  const response: DescribeSubscriptionFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSubscriptionFiltersCommandError
 */
const de_DescribeSubscriptionFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateKmsKeyCommand
 */
export const de_DisassociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateKmsKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateKmsKeyCommandError
 */
const de_DisassociateKmsKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1FilterLogEventsCommand
 */
export const de_FilterLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_FilterLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_FilterLogEventsResponse(data, context);
  const response: FilterLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1FilterLogEventsCommandError
 */
const de_FilterLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDataProtectionPolicyCommand
 */
export const de_GetDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataProtectionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataProtectionPolicyResponse(data, context);
  const response: GetDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDataProtectionPolicyCommandError
 */
const de_GetDataProtectionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLogEventsCommand
 */
export const de_GetLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLogEventsResponse(data, context);
  const response: GetLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLogEventsCommandError
 */
const de_GetLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLogGroupFieldsCommand
 */
export const de_GetLogGroupFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLogGroupFieldsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLogGroupFieldsResponse(data, context);
  const response: GetLogGroupFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLogGroupFieldsCommandError
 */
const de_GetLogGroupFieldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetLogRecordCommand
 */
export const de_GetLogRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLogRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetLogRecordResponse(data, context);
  const response: GetLogRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetLogRecordCommandError
 */
const de_GetLogRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetQueryResultsCommand
 */
export const de_GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetQueryResultsResponse(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetQueryResultsCommandError
 */
const de_GetQueryResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsLogGroupCommand
 */
export const de_ListTagsLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsLogGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsLogGroupResponse(data, context);
  const response: ListTagsLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsLogGroupCommandError
 */
const de_ListTagsLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutDataProtectionPolicyCommand
 */
export const de_PutDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDataProtectionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutDataProtectionPolicyResponse(data, context);
  const response: PutDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutDataProtectionPolicyCommandError
 */
const de_PutDataProtectionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutDestinationCommand
 */
export const de_PutDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutDestinationResponse(data, context);
  const response: PutDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutDestinationCommandError
 */
const de_PutDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutDestinationPolicyCommand
 */
export const de_PutDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDestinationPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutDestinationPolicyCommandError
 */
const de_PutDestinationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutLogEventsCommand
 */
export const de_PutLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutLogEventsResponse(data, context);
  const response: PutLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutLogEventsCommandError
 */
const de_PutLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DataAlreadyAcceptedException":
    case "com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException":
      throw await de_DataAlreadyAcceptedExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSequenceTokenException":
    case "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException":
      throw await de_InvalidSequenceTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnrecognizedClientException":
    case "com.amazonaws.cloudwatchlogs#UnrecognizedClientException":
      throw await de_UnrecognizedClientExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutMetricFilterCommand
 */
export const de_PutMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMetricFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutMetricFilterCommandError
 */
const de_PutMetricFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutQueryDefinitionCommand
 */
export const de_PutQueryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutQueryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutQueryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutQueryDefinitionResponse(data, context);
  const response: PutQueryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutQueryDefinitionCommandError
 */
const de_PutQueryDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutQueryDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutRetentionPolicyCommand
 */
export const de_PutRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRetentionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRetentionPolicyCommandError
 */
const de_PutRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutSubscriptionFilterCommand
 */
export const de_PutSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutSubscriptionFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutSubscriptionFilterCommandError
 */
const de_PutSubscriptionFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await de_OperationAbortedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartQueryCommand
 */
export const de_StartQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartQueryResponse(data, context);
  const response: StartQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartQueryCommandError
 */
const de_StartQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MalformedQueryException":
    case "com.amazonaws.cloudwatchlogs#MalformedQueryException":
      throw await de_MalformedQueryExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopQueryCommand
 */
export const de_StopQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopQueryResponse(data, context);
  const response: StopQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopQueryCommandError
 */
const de_StopQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagLogGroupCommand
 */
export const de_TagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagLogGroupCommandError
 */
const de_TagLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.cloudwatchlogs#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TestMetricFilterCommand
 */
export const de_TestMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestMetricFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestMetricFilterResponse(data, context);
  const response: TestMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TestMetricFilterCommandError
 */
const de_TestMetricFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagLogGroupCommand
 */
export const de_UntagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagLogGroupCommandError
 */
const de_UntagLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DataAlreadyAcceptedExceptionRes
 */
const de_DataAlreadyAcceptedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataAlreadyAcceptedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DataAlreadyAcceptedException(body, context);
  const exception = new DataAlreadyAcceptedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidOperationException(body, context);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSequenceTokenExceptionRes
 */
const de_InvalidSequenceTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSequenceTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSequenceTokenException(body, context);
  const exception = new InvalidSequenceTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MalformedQueryExceptionRes
 */
const de_MalformedQueryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedQueryException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MalformedQueryException(body, context);
  const exception = new MalformedQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationAbortedExceptionRes
 */
const de_OperationAbortedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationAbortedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationAbortedException(body, context);
  const exception = new OperationAbortedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnrecognizedClientExceptionRes
 */
const de_UnrecognizedClientExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnrecognizedClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnrecognizedClientException(body, context);
  const exception = new UnrecognizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccountIds
 */
const se_AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateKmsKeyRequest
 */
const se_AssociateKmsKeyRequest = (input: AssociateKmsKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1CancelExportTaskRequest
 */
const se_CancelExportTaskRequest = (input: CancelExportTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.taskId != null && { taskId: input.taskId }),
  };
};

/**
 * serializeAws_json1_1CreateExportTaskRequest
 */
const se_CreateExportTaskRequest = (input: CreateExportTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.destinationPrefix != null && { destinationPrefix: input.destinationPrefix }),
    ...(input.from != null && { from: input.from }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
    ...(input.taskName != null && { taskName: input.taskName }),
    ...(input.to != null && { to: input.to }),
  };
};

/**
 * serializeAws_json1_1CreateLogGroupRequest
 */
const se_CreateLogGroupRequest = (input: CreateLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateLogStreamRequest
 */
const se_CreateLogStreamRequest = (input: CreateLogStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
  };
};

/**
 * serializeAws_json1_1DeleteDataProtectionPolicyRequest
 */
const se_DeleteDataProtectionPolicyRequest = (
  input: DeleteDataProtectionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
  };
};

/**
 * serializeAws_json1_1DeleteDestinationRequest
 */
const se_DeleteDestinationRequest = (input: DeleteDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.destinationName != null && { destinationName: input.destinationName }),
  };
};

/**
 * serializeAws_json1_1DeleteLogGroupRequest
 */
const se_DeleteLogGroupRequest = (input: DeleteLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteLogStreamRequest
 */
const se_DeleteLogStreamRequest = (input: DeleteLogStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
  };
};

/**
 * serializeAws_json1_1DeleteMetricFilterRequest
 */
const se_DeleteMetricFilterRequest = (input: DeleteMetricFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteQueryDefinitionRequest
 */
const se_DeleteQueryDefinitionRequest = (input: DeleteQueryDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.queryDefinitionId != null && { queryDefinitionId: input.queryDefinitionId }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.policyName != null && { policyName: input.policyName }),
  };
};

/**
 * serializeAws_json1_1DeleteRetentionPolicyRequest
 */
const se_DeleteRetentionPolicyRequest = (input: DeleteRetentionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1DeleteSubscriptionFilterRequest
 */
const se_DeleteSubscriptionFilterRequest = (input: DeleteSubscriptionFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1DescribeDestinationsRequest
 */
const se_DescribeDestinationsRequest = (input: DescribeDestinationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DestinationNamePrefix != null && { DestinationNamePrefix: input.DestinationNamePrefix }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeExportTasksRequest
 */
const se_DescribeExportTasksRequest = (input: DescribeExportTasksRequest, context: __SerdeContext): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.statusCode != null && { statusCode: input.statusCode }),
    ...(input.taskId != null && { taskId: input.taskId }),
  };
};

/**
 * serializeAws_json1_1DescribeLogGroupsRequest
 */
const se_DescribeLogGroupsRequest = (input: DescribeLogGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.accountIdentifiers != null && { accountIdentifiers: se_AccountIds(input.accountIdentifiers, context) }),
    ...(input.includeLinkedAccounts != null && { includeLinkedAccounts: input.includeLinkedAccounts }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupNamePattern != null && { logGroupNamePattern: input.logGroupNamePattern }),
    ...(input.logGroupNamePrefix != null && { logGroupNamePrefix: input.logGroupNamePrefix }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeLogStreamsRequest
 */
const se_DescribeLogStreamsRequest = (input: DescribeLogStreamsRequest, context: __SerdeContext): any => {
  return {
    ...(input.descending != null && { descending: input.descending }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.orderBy != null && { orderBy: input.orderBy }),
  };
};

/**
 * serializeAws_json1_1DescribeMetricFiltersRequest
 */
const se_DescribeMetricFiltersRequest = (input: DescribeMetricFiltersRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterNamePrefix != null && { filterNamePrefix: input.filterNamePrefix }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.metricNamespace != null && { metricNamespace: input.metricNamespace }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeQueriesRequest
 */
const se_DescribeQueriesRequest = (input: DescribeQueriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1DescribeQueryDefinitionsRequest
 */
const se_DescribeQueryDefinitionsRequest = (input: DescribeQueryDefinitionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.queryDefinitionNamePrefix != null && { queryDefinitionNamePrefix: input.queryDefinitionNamePrefix }),
  };
};

/**
 * serializeAws_json1_1DescribeResourcePoliciesRequest
 */
const se_DescribeResourcePoliciesRequest = (input: DescribeResourcePoliciesRequest, context: __SerdeContext): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeSubscriptionFiltersRequest
 */
const se_DescribeSubscriptionFiltersRequest = (
  input: DescribeSubscriptionFiltersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterNamePrefix != null && { filterNamePrefix: input.filterNamePrefix }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1Dimensions
 */
const se_Dimensions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1DisassociateKmsKeyRequest
 */
const se_DisassociateKmsKeyRequest = (input: DisassociateKmsKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1FilterLogEventsRequest
 */
const se_FilterLogEventsRequest = (input: FilterLogEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.interleaved != null && { interleaved: input.interleaved }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
    ...(input.logStreamNames != null && { logStreamNames: se_InputLogStreamNames(input.logStreamNames, context) }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startTime != null && { startTime: input.startTime }),
    ...(input.unmask != null && { unmask: input.unmask }),
  };
};

/**
 * serializeAws_json1_1GetDataProtectionPolicyRequest
 */
const se_GetDataProtectionPolicyRequest = (input: GetDataProtectionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
  };
};

/**
 * serializeAws_json1_1GetLogEventsRequest
 */
const se_GetLogEventsRequest = (input: GetLogEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startFromHead != null && { startFromHead: input.startFromHead }),
    ...(input.startTime != null && { startTime: input.startTime }),
    ...(input.unmask != null && { unmask: input.unmask }),
  };
};

/**
 * serializeAws_json1_1GetLogGroupFieldsRequest
 */
const se_GetLogGroupFieldsRequest = (input: GetLogGroupFieldsRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.time != null && { time: input.time }),
  };
};

/**
 * serializeAws_json1_1GetLogRecordRequest
 */
const se_GetLogRecordRequest = (input: GetLogRecordRequest, context: __SerdeContext): any => {
  return {
    ...(input.logRecordPointer != null && { logRecordPointer: input.logRecordPointer }),
    ...(input.unmask != null && { unmask: input.unmask }),
  };
};

/**
 * serializeAws_json1_1GetQueryResultsRequest
 */
const se_GetQueryResultsRequest = (input: GetQueryResultsRequest, context: __SerdeContext): any => {
  return {
    ...(input.queryId != null && { queryId: input.queryId }),
  };
};

/**
 * serializeAws_json1_1InputLogEvent
 */
const se_InputLogEvent = (input: InputLogEvent, context: __SerdeContext): any => {
  return {
    ...(input.message != null && { message: input.message }),
    ...(input.timestamp != null && { timestamp: input.timestamp }),
  };
};

/**
 * serializeAws_json1_1InputLogEvents
 */
const se_InputLogEvents = (input: InputLogEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputLogEvent(entry, context);
    });
};

/**
 * serializeAws_json1_1InputLogStreamNames
 */
const se_InputLogStreamNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1ListTagsLogGroupRequest
 */
const se_ListTagsLogGroupRequest = (input: ListTagsLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

/**
 * serializeAws_json1_1LogGroupIdentifiers
 */
const se_LogGroupIdentifiers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LogGroupNames
 */
const se_LogGroupNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MetricTransformation
 */
const se_MetricTransformation = (input: MetricTransformation, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: __serializeFloat(input.defaultValue) }),
    ...(input.dimensions != null && { dimensions: se_Dimensions(input.dimensions, context) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.metricNamespace != null && { metricNamespace: input.metricNamespace }),
    ...(input.metricValue != null && { metricValue: input.metricValue }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

/**
 * serializeAws_json1_1MetricTransformations
 */
const se_MetricTransformations = (input: MetricTransformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricTransformation(entry, context);
    });
};

/**
 * serializeAws_json1_1PutDataProtectionPolicyRequest
 */
const se_PutDataProtectionPolicyRequest = (input: PutDataProtectionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
  };
};

/**
 * serializeAws_json1_1PutDestinationPolicyRequest
 */
const se_PutDestinationPolicyRequest = (input: PutDestinationPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.accessPolicy != null && { accessPolicy: input.accessPolicy }),
    ...(input.destinationName != null && { destinationName: input.destinationName }),
    ...(input.forceUpdate != null && { forceUpdate: input.forceUpdate }),
  };
};

/**
 * serializeAws_json1_1PutDestinationRequest
 */
const se_PutDestinationRequest = (input: PutDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.destinationName != null && { destinationName: input.destinationName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  };
};

/**
 * serializeAws_json1_1PutLogEventsRequest
 */
const se_PutLogEventsRequest = (input: PutLogEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.logEvents != null && { logEvents: se_InputLogEvents(input.logEvents, context) }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
    ...(input.sequenceToken != null && { sequenceToken: input.sequenceToken }),
  };
};

/**
 * serializeAws_json1_1PutMetricFilterRequest
 */
const se_PutMetricFilterRequest = (input: PutMetricFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.metricTransformations != null && {
      metricTransformations: se_MetricTransformations(input.metricTransformations, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutQueryDefinitionRequest
 */
const se_PutQueryDefinitionRequest = (input: PutQueryDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupNames != null && { logGroupNames: se_LogGroupNames(input.logGroupNames, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.queryDefinitionId != null && { queryDefinitionId: input.queryDefinitionId }),
    ...(input.queryString != null && { queryString: input.queryString }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
    ...(input.policyName != null && { policyName: input.policyName }),
  };
};

/**
 * serializeAws_json1_1PutRetentionPolicyRequest
 */
const se_PutRetentionPolicyRequest = (input: PutRetentionPolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.retentionInDays != null && { retentionInDays: input.retentionInDays }),
  };
};

/**
 * serializeAws_json1_1PutSubscriptionFilterRequest
 */
const se_PutSubscriptionFilterRequest = (input: PutSubscriptionFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.destinationArn != null && { destinationArn: input.destinationArn }),
    ...(input.distribution != null && { distribution: input.distribution }),
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_json1_1StartQueryRequest
 */
const se_StartQueryRequest = (input: StartQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupIdentifiers != null && {
      logGroupIdentifiers: se_LogGroupIdentifiers(input.logGroupIdentifiers, context),
    }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logGroupNames != null && { logGroupNames: se_LogGroupNames(input.logGroupNames, context) }),
    ...(input.queryString != null && { queryString: input.queryString }),
    ...(input.startTime != null && { startTime: input.startTime }),
  };
};

/**
 * serializeAws_json1_1StopQueryRequest
 */
const se_StopQueryRequest = (input: StopQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.queryId != null && { queryId: input.queryId }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagLogGroupRequest
 */
const se_TagLogGroupRequest = (input: TagLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TestEventMessages
 */
const se_TestEventMessages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TestMetricFilterRequest
 */
const se_TestMetricFilterRequest = (input: TestMetricFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.logEventMessages != null && { logEventMessages: se_TestEventMessages(input.logEventMessages, context) }),
  };
};

/**
 * serializeAws_json1_1UntagLogGroupRequest
 */
const se_UntagLogGroupRequest = (input: UntagLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1CreateExportTaskResponse
 */
const de_CreateExportTaskResponse = (output: any, context: __SerdeContext): CreateExportTaskResponse => {
  return {
    taskId: __expectString(output.taskId),
  } as any;
};

/**
 * deserializeAws_json1_1DataAlreadyAcceptedException
 */
const de_DataAlreadyAcceptedException = (output: any, context: __SerdeContext): DataAlreadyAcceptedException => {
  return {
    expectedSequenceToken: __expectString(output.expectedSequenceToken),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteQueryDefinitionResponse
 */
const de_DeleteQueryDefinitionResponse = (output: any, context: __SerdeContext): DeleteQueryDefinitionResponse => {
  return {
    success: __expectBoolean(output.success),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDestinationsResponse
 */
const de_DescribeDestinationsResponse = (output: any, context: __SerdeContext): DescribeDestinationsResponse => {
  return {
    destinations: output.destinations != null ? de_Destinations(output.destinations, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExportTasksResponse
 */
const de_DescribeExportTasksResponse = (output: any, context: __SerdeContext): DescribeExportTasksResponse => {
  return {
    exportTasks: output.exportTasks != null ? de_ExportTasks(output.exportTasks, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLogGroupsResponse
 */
const de_DescribeLogGroupsResponse = (output: any, context: __SerdeContext): DescribeLogGroupsResponse => {
  return {
    logGroups: output.logGroups != null ? de_LogGroups(output.logGroups, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeLogStreamsResponse
 */
const de_DescribeLogStreamsResponse = (output: any, context: __SerdeContext): DescribeLogStreamsResponse => {
  return {
    logStreams: output.logStreams != null ? de_LogStreams(output.logStreams, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMetricFiltersResponse
 */
const de_DescribeMetricFiltersResponse = (output: any, context: __SerdeContext): DescribeMetricFiltersResponse => {
  return {
    metricFilters: output.metricFilters != null ? de_MetricFilters(output.metricFilters, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeQueriesResponse
 */
const de_DescribeQueriesResponse = (output: any, context: __SerdeContext): DescribeQueriesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    queries: output.queries != null ? de_QueryInfoList(output.queries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeQueryDefinitionsResponse
 */
const de_DescribeQueryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeQueryDefinitionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    queryDefinitions:
      output.queryDefinitions != null ? de_QueryDefinitionList(output.queryDefinitions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeResourcePoliciesResponse
 */
const de_DescribeResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePoliciesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    resourcePolicies:
      output.resourcePolicies != null ? de_ResourcePolicies(output.resourcePolicies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSubscriptionFiltersResponse
 */
const de_DescribeSubscriptionFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionFiltersResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    subscriptionFilters:
      output.subscriptionFilters != null ? de_SubscriptionFilters(output.subscriptionFilters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    accessPolicy: __expectString(output.accessPolicy),
    arn: __expectString(output.arn),
    creationTime: __expectLong(output.creationTime),
    destinationName: __expectString(output.destinationName),
    roleArn: __expectString(output.roleArn),
    targetArn: __expectString(output.targetArn),
  } as any;
};

/**
 * deserializeAws_json1_1Destinations
 */
const de_Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Destination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Dimensions
 */
const de_Dimensions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ExportTask
 */
const de_ExportTask = (output: any, context: __SerdeContext): ExportTask => {
  return {
    destination: __expectString(output.destination),
    destinationPrefix: __expectString(output.destinationPrefix),
    executionInfo: output.executionInfo != null ? de_ExportTaskExecutionInfo(output.executionInfo, context) : undefined,
    from: __expectLong(output.from),
    logGroupName: __expectString(output.logGroupName),
    status: output.status != null ? de_ExportTaskStatus(output.status, context) : undefined,
    taskId: __expectString(output.taskId),
    taskName: __expectString(output.taskName),
    to: __expectLong(output.to),
  } as any;
};

/**
 * deserializeAws_json1_1ExportTaskExecutionInfo
 */
const de_ExportTaskExecutionInfo = (output: any, context: __SerdeContext): ExportTaskExecutionInfo => {
  return {
    completionTime: __expectLong(output.completionTime),
    creationTime: __expectLong(output.creationTime),
  } as any;
};

/**
 * deserializeAws_json1_1ExportTasks
 */
const de_ExportTasks = (output: any, context: __SerdeContext): ExportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExportTaskStatus
 */
const de_ExportTaskStatus = (output: any, context: __SerdeContext): ExportTaskStatus => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ExtractedValues
 */
const de_ExtractedValues = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FilteredLogEvent
 */
const de_FilteredLogEvent = (output: any, context: __SerdeContext): FilteredLogEvent => {
  return {
    eventId: __expectString(output.eventId),
    ingestionTime: __expectLong(output.ingestionTime),
    logStreamName: __expectString(output.logStreamName),
    message: __expectString(output.message),
    timestamp: __expectLong(output.timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1FilteredLogEvents
 */
const de_FilteredLogEvents = (output: any, context: __SerdeContext): FilteredLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FilteredLogEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterLogEventsResponse
 */
const de_FilterLogEventsResponse = (output: any, context: __SerdeContext): FilterLogEventsResponse => {
  return {
    events: output.events != null ? de_FilteredLogEvents(output.events, context) : undefined,
    nextToken: __expectString(output.nextToken),
    searchedLogStreams:
      output.searchedLogStreams != null ? de_SearchedLogStreams(output.searchedLogStreams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDataProtectionPolicyResponse
 */
const de_GetDataProtectionPolicyResponse = (output: any, context: __SerdeContext): GetDataProtectionPolicyResponse => {
  return {
    lastUpdatedTime: __expectLong(output.lastUpdatedTime),
    logGroupIdentifier: __expectString(output.logGroupIdentifier),
    policyDocument: __expectString(output.policyDocument),
  } as any;
};

/**
 * deserializeAws_json1_1GetLogEventsResponse
 */
const de_GetLogEventsResponse = (output: any, context: __SerdeContext): GetLogEventsResponse => {
  return {
    events: output.events != null ? de_OutputLogEvents(output.events, context) : undefined,
    nextBackwardToken: __expectString(output.nextBackwardToken),
    nextForwardToken: __expectString(output.nextForwardToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetLogGroupFieldsResponse
 */
const de_GetLogGroupFieldsResponse = (output: any, context: __SerdeContext): GetLogGroupFieldsResponse => {
  return {
    logGroupFields: output.logGroupFields != null ? de_LogGroupFieldList(output.logGroupFields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetLogRecordResponse
 */
const de_GetLogRecordResponse = (output: any, context: __SerdeContext): GetLogRecordResponse => {
  return {
    logRecord: output.logRecord != null ? de_LogRecord(output.logRecord, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetQueryResultsResponse
 */
const de_GetQueryResultsResponse = (output: any, context: __SerdeContext): GetQueryResultsResponse => {
  return {
    results: output.results != null ? de_QueryResults(output.results, context) : undefined,
    statistics: output.statistics != null ? de_QueryStatistics(output.statistics, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSequenceTokenException
 */
const de_InvalidSequenceTokenException = (output: any, context: __SerdeContext): InvalidSequenceTokenException => {
  return {
    expectedSequenceToken: __expectString(output.expectedSequenceToken),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsLogGroupResponse
 */
const de_ListTagsLogGroupResponse = (output: any, context: __SerdeContext): ListTagsLogGroupResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogGroup
 */
const de_LogGroup = (output: any, context: __SerdeContext): LogGroup => {
  return {
    arn: __expectString(output.arn),
    creationTime: __expectLong(output.creationTime),
    dataProtectionStatus: __expectString(output.dataProtectionStatus),
    kmsKeyId: __expectString(output.kmsKeyId),
    logGroupName: __expectString(output.logGroupName),
    metricFilterCount: __expectInt32(output.metricFilterCount),
    retentionInDays: __expectInt32(output.retentionInDays),
    storedBytes: __expectLong(output.storedBytes),
  } as any;
};

/**
 * deserializeAws_json1_1LogGroupField
 */
const de_LogGroupField = (output: any, context: __SerdeContext): LogGroupField => {
  return {
    name: __expectString(output.name),
    percent: __expectInt32(output.percent),
  } as any;
};

/**
 * deserializeAws_json1_1LogGroupFieldList
 */
const de_LogGroupFieldList = (output: any, context: __SerdeContext): LogGroupField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogGroupField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LogGroupNames
 */
const de_LogGroupNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LogGroups
 */
const de_LogGroups = (output: any, context: __SerdeContext): LogGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LogRecord
 */
const de_LogRecord = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1LogStream
 */
const de_LogStream = (output: any, context: __SerdeContext): LogStream => {
  return {
    arn: __expectString(output.arn),
    creationTime: __expectLong(output.creationTime),
    firstEventTimestamp: __expectLong(output.firstEventTimestamp),
    lastEventTimestamp: __expectLong(output.lastEventTimestamp),
    lastIngestionTime: __expectLong(output.lastIngestionTime),
    logStreamName: __expectString(output.logStreamName),
    storedBytes: __expectLong(output.storedBytes),
    uploadSequenceToken: __expectString(output.uploadSequenceToken),
  } as any;
};

/**
 * deserializeAws_json1_1LogStreams
 */
const de_LogStreams = (output: any, context: __SerdeContext): LogStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogStream(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MalformedQueryException
 */
const de_MalformedQueryException = (output: any, context: __SerdeContext): MalformedQueryException => {
  return {
    message: __expectString(output.message),
    queryCompileError:
      output.queryCompileError != null ? de_QueryCompileError(output.queryCompileError, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricFilter
 */
const de_MetricFilter = (output: any, context: __SerdeContext): MetricFilter => {
  return {
    creationTime: __expectLong(output.creationTime),
    filterName: __expectString(output.filterName),
    filterPattern: __expectString(output.filterPattern),
    logGroupName: __expectString(output.logGroupName),
    metricTransformations:
      output.metricTransformations != null
        ? de_MetricTransformations(output.metricTransformations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricFilterMatches
 */
const de_MetricFilterMatches = (output: any, context: __SerdeContext): MetricFilterMatchRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricFilterMatchRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricFilterMatchRecord
 */
const de_MetricFilterMatchRecord = (output: any, context: __SerdeContext): MetricFilterMatchRecord => {
  return {
    eventMessage: __expectString(output.eventMessage),
    eventNumber: __expectLong(output.eventNumber),
    extractedValues: output.extractedValues != null ? de_ExtractedValues(output.extractedValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricFilters
 */
const de_MetricFilters = (output: any, context: __SerdeContext): MetricFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricTransformation
 */
const de_MetricTransformation = (output: any, context: __SerdeContext): MetricTransformation => {
  return {
    defaultValue: __limitedParseDouble(output.defaultValue),
    dimensions: output.dimensions != null ? de_Dimensions(output.dimensions, context) : undefined,
    metricName: __expectString(output.metricName),
    metricNamespace: __expectString(output.metricNamespace),
    metricValue: __expectString(output.metricValue),
    unit: __expectString(output.unit),
  } as any;
};

/**
 * deserializeAws_json1_1MetricTransformations
 */
const de_MetricTransformations = (output: any, context: __SerdeContext): MetricTransformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricTransformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperationAbortedException
 */
const de_OperationAbortedException = (output: any, context: __SerdeContext): OperationAbortedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OutputLogEvent
 */
const de_OutputLogEvent = (output: any, context: __SerdeContext): OutputLogEvent => {
  return {
    ingestionTime: __expectLong(output.ingestionTime),
    message: __expectString(output.message),
    timestamp: __expectLong(output.timestamp),
  } as any;
};

/**
 * deserializeAws_json1_1OutputLogEvents
 */
const de_OutputLogEvents = (output: any, context: __SerdeContext): OutputLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputLogEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutDataProtectionPolicyResponse
 */
const de_PutDataProtectionPolicyResponse = (output: any, context: __SerdeContext): PutDataProtectionPolicyResponse => {
  return {
    lastUpdatedTime: __expectLong(output.lastUpdatedTime),
    logGroupIdentifier: __expectString(output.logGroupIdentifier),
    policyDocument: __expectString(output.policyDocument),
  } as any;
};

/**
 * deserializeAws_json1_1PutDestinationResponse
 */
const de_PutDestinationResponse = (output: any, context: __SerdeContext): PutDestinationResponse => {
  return {
    destination: output.destination != null ? de_Destination(output.destination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutLogEventsResponse
 */
const de_PutLogEventsResponse = (output: any, context: __SerdeContext): PutLogEventsResponse => {
  return {
    nextSequenceToken: __expectString(output.nextSequenceToken),
    rejectedLogEventsInfo:
      output.rejectedLogEventsInfo != null
        ? de_RejectedLogEventsInfo(output.rejectedLogEventsInfo, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutQueryDefinitionResponse
 */
const de_PutQueryDefinitionResponse = (output: any, context: __SerdeContext): PutQueryDefinitionResponse => {
  return {
    queryDefinitionId: __expectString(output.queryDefinitionId),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    resourcePolicy: output.resourcePolicy != null ? de_ResourcePolicy(output.resourcePolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryCompileError
 */
const de_QueryCompileError = (output: any, context: __SerdeContext): QueryCompileError => {
  return {
    location: output.location != null ? de_QueryCompileErrorLocation(output.location, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1QueryCompileErrorLocation
 */
const de_QueryCompileErrorLocation = (output: any, context: __SerdeContext): QueryCompileErrorLocation => {
  return {
    endCharOffset: __expectInt32(output.endCharOffset),
    startCharOffset: __expectInt32(output.startCharOffset),
  } as any;
};

/**
 * deserializeAws_json1_1QueryDefinition
 */
const de_QueryDefinition = (output: any, context: __SerdeContext): QueryDefinition => {
  return {
    lastModified: __expectLong(output.lastModified),
    logGroupNames: output.logGroupNames != null ? de_LogGroupNames(output.logGroupNames, context) : undefined,
    name: __expectString(output.name),
    queryDefinitionId: __expectString(output.queryDefinitionId),
    queryString: __expectString(output.queryString),
  } as any;
};

/**
 * deserializeAws_json1_1QueryDefinitionList
 */
const de_QueryDefinitionList = (output: any, context: __SerdeContext): QueryDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryInfo
 */
const de_QueryInfo = (output: any, context: __SerdeContext): QueryInfo => {
  return {
    createTime: __expectLong(output.createTime),
    logGroupName: __expectString(output.logGroupName),
    queryId: __expectString(output.queryId),
    queryString: __expectString(output.queryString),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1QueryInfoList
 */
const de_QueryInfoList = (output: any, context: __SerdeContext): QueryInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryResults
 */
const de_QueryResults = (output: any, context: __SerdeContext): ResultField[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultRows(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryStatistics
 */
const de_QueryStatistics = (output: any, context: __SerdeContext): QueryStatistics => {
  return {
    bytesScanned: __limitedParseDouble(output.bytesScanned),
    recordsMatched: __limitedParseDouble(output.recordsMatched),
    recordsScanned: __limitedParseDouble(output.recordsScanned),
  } as any;
};

/**
 * deserializeAws_json1_1RejectedLogEventsInfo
 */
const de_RejectedLogEventsInfo = (output: any, context: __SerdeContext): RejectedLogEventsInfo => {
  return {
    expiredLogEventEndIndex: __expectInt32(output.expiredLogEventEndIndex),
    tooNewLogEventStartIndex: __expectInt32(output.tooNewLogEventStartIndex),
    tooOldLogEventEndIndex: __expectInt32(output.tooOldLogEventEndIndex),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicies
 */
const de_ResourcePolicies = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourcePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    lastUpdatedTime: __expectLong(output.lastUpdatedTime),
    policyDocument: __expectString(output.policyDocument),
    policyName: __expectString(output.policyName),
  } as any;
};

/**
 * deserializeAws_json1_1ResultField
 */
const de_ResultField = (output: any, context: __SerdeContext): ResultField => {
  return {
    field: __expectString(output.field),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1ResultRows
 */
const de_ResultRows = (output: any, context: __SerdeContext): ResultField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResultField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SearchedLogStream
 */
const de_SearchedLogStream = (output: any, context: __SerdeContext): SearchedLogStream => {
  return {
    logStreamName: __expectString(output.logStreamName),
    searchedCompletely: __expectBoolean(output.searchedCompletely),
  } as any;
};

/**
 * deserializeAws_json1_1SearchedLogStreams
 */
const de_SearchedLogStreams = (output: any, context: __SerdeContext): SearchedLogStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SearchedLogStream(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StartQueryResponse
 */
const de_StartQueryResponse = (output: any, context: __SerdeContext): StartQueryResponse => {
  return {
    queryId: __expectString(output.queryId),
  } as any;
};

/**
 * deserializeAws_json1_1StopQueryResponse
 */
const de_StopQueryResponse = (output: any, context: __SerdeContext): StopQueryResponse => {
  return {
    success: __expectBoolean(output.success),
  } as any;
};

/**
 * deserializeAws_json1_1SubscriptionFilter
 */
const de_SubscriptionFilter = (output: any, context: __SerdeContext): SubscriptionFilter => {
  return {
    creationTime: __expectLong(output.creationTime),
    destinationArn: __expectString(output.destinationArn),
    distribution: __expectString(output.distribution),
    filterName: __expectString(output.filterName),
    filterPattern: __expectString(output.filterPattern),
    logGroupName: __expectString(output.logGroupName),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_json1_1SubscriptionFilters
 */
const de_SubscriptionFilters = (output: any, context: __SerdeContext): SubscriptionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubscriptionFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1TestMetricFilterResponse
 */
const de_TestMetricFilterResponse = (output: any, context: __SerdeContext): TestMetricFilterResponse => {
  return {
    matches: output.matches != null ? de_MetricFilterMatches(output.matches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_1UnrecognizedClientException
 */
const de_UnrecognizedClientException = (output: any, context: __SerdeContext): UnrecognizedClientException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
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
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
