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

export const serializeAws_json1_1AssociateKmsKeyCommand = async (
  input: AssociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.AssociateKmsKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateKmsKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CancelExportTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateExportTaskCommand = async (
  input: CreateExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CreateExportTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateExportTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLogGroupCommand = async (
  input: CreateLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CreateLogGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLogStreamCommand = async (
  input: CreateLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.CreateLogStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateLogStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataProtectionPolicyCommand = async (
  input: DeleteDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteDataProtectionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDataProtectionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLogGroupCommand = async (
  input: DeleteLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteLogGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLogStreamCommand = async (
  input: DeleteLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteLogStream",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteLogStreamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMetricFilterCommand = async (
  input: DeleteMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteMetricFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMetricFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteQueryDefinitionCommand = async (
  input: DeleteQueryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteQueryDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteQueryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRetentionPolicyCommand = async (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubscriptionFilterCommand = async (
  input: DeleteSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DeleteSubscriptionFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSubscriptionFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDestinationsCommand = async (
  input: DescribeDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeDestinations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDestinationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeExportTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExportTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLogGroupsCommand = async (
  input: DescribeLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeLogGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLogGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLogStreamsCommand = async (
  input: DescribeLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeLogStreams",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeLogStreamsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMetricFiltersCommand = async (
  input: DescribeMetricFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeMetricFilters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMetricFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeQueriesCommand = async (
  input: DescribeQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeQueries",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeQueryDefinitionsCommand = async (
  input: DescribeQueryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeQueryDefinitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeQueryDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourcePoliciesCommand = async (
  input: DescribeResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeResourcePolicies",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeResourcePoliciesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubscriptionFiltersCommand = async (
  input: DescribeSubscriptionFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DescribeSubscriptionFilters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSubscriptionFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateKmsKeyCommand = async (
  input: DisassociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.DisassociateKmsKey",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateKmsKeyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1FilterLogEventsCommand = async (
  input: FilterLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.FilterLogEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1FilterLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataProtectionPolicyCommand = async (
  input: GetDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetDataProtectionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataProtectionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLogEventsCommand = async (
  input: GetLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetLogEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLogGroupFieldsCommand = async (
  input: GetLogGroupFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetLogGroupFields",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLogGroupFieldsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLogRecordCommand = async (
  input: GetLogRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetLogRecord",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetLogRecordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.GetQueryResults",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetQueryResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsLogGroupCommand = async (
  input: ListTagsLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.ListTagsLogGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDataProtectionPolicyCommand = async (
  input: PutDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutDataProtectionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDataProtectionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDestinationCommand = async (
  input: PutDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDestinationPolicyCommand = async (
  input: PutDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutDestinationPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutDestinationPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLogEventsCommand = async (
  input: PutLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutLogEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutLogEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutMetricFilterCommand = async (
  input: PutMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutMetricFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutMetricFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutQueryDefinitionCommand = async (
  input: PutQueryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutQueryDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutQueryDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRetentionPolicyCommand = async (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutRetentionPolicy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRetentionPolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSubscriptionFilterCommand = async (
  input: PutSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.PutSubscriptionFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutSubscriptionFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartQueryCommand = async (
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.StartQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopQueryCommand = async (
  input: StopQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.StopQuery",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagLogGroupCommand = async (
  input: TagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.TagLogGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestMetricFilterCommand = async (
  input: TestMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.TestMetricFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestMetricFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagLogGroupCommand = async (
  input: UntagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.UntagLogGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Logs_20140328.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateKmsKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateKmsKeyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelExportTaskCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelExportTaskCommandError = async (
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
      throw await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExportTaskResponse(data, context);
  const response: CreateExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateExportTaskCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLogGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLogStreamCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataProtectionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataProtectionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDestinationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDestinationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLogGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLogStreamCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMetricFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMetricFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteQueryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteQueryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteQueryDefinitionResponse(data, context);
  const response: DeleteQueryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteQueryDefinitionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRetentionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRetentionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSubscriptionFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubscriptionFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDestinationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDestinationsResponse(data, context);
  const response: DescribeDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDestinationsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExportTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExportTasksCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLogGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLogGroupsResponse(data, context);
  const response: DescribeLogGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLogGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeLogStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLogStreamsResponse(data, context);
  const response: DescribeLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLogStreamsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMetricFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMetricFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMetricFiltersResponse(data, context);
  const response: DescribeMetricFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMetricFiltersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeQueriesResponse(data, context);
  const response: DescribeQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeQueriesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeQueryDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeQueryDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeQueryDefinitionsResponse(data, context);
  const response: DescribeQueryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeQueryDefinitionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeResourcePoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourcePoliciesResponse(data, context);
  const response: DescribeResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourcePoliciesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSubscriptionFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSubscriptionFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubscriptionFiltersResponse(data, context);
  const response: DescribeSubscriptionFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubscriptionFiltersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateKmsKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateKmsKeyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1FilterLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1FilterLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1FilterLogEventsResponse(data, context);
  const response: FilterLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1FilterLogEventsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataProtectionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataProtectionPolicyResponse(data, context);
  const response: GetDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataProtectionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLogEventsResponse(data, context);
  const response: GetLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLogEventsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLogGroupFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLogGroupFieldsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLogGroupFieldsResponse(data, context);
  const response: GetLogGroupFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLogGroupFieldsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetLogRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetLogRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLogRecordResponse(data, context);
  const response: GetLogRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLogRecordCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryResultsResponse(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryResultsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsLogGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsLogGroupResponse(data, context);
  const response: ListTagsLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsLogGroupCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDataProtectionPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDataProtectionPolicyResponse(data, context);
  const response: PutDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDataProtectionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDestinationResponse(data, context);
  const response: PutDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDestinationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutDestinationPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDestinationPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLogEventsResponse(data, context);
  const response: PutLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLogEventsCommandError = async (
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
      throw await deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidSequenceTokenException":
    case "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException":
      throw await deserializeAws_json1_1InvalidSequenceTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnrecognizedClientException":
    case "com.amazonaws.cloudwatchlogs#UnrecognizedClientException":
      throw await deserializeAws_json1_1UnrecognizedClientExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutMetricFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutMetricFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutQueryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutQueryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutQueryDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutQueryDefinitionResponse(data, context);
  const response: PutQueryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutQueryDefinitionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRetentionPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRetentionPolicyCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutSubscriptionFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSubscriptionFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      throw await deserializeAws_json1_1OperationAbortedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartQueryResponse(data, context);
  const response: StartQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartQueryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "MalformedQueryException":
    case "com.amazonaws.cloudwatchlogs#MalformedQueryException":
      throw await deserializeAws_json1_1MalformedQueryExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopQueryResponse(data, context);
  const response: StopQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopQueryCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagLogGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.cloudwatchlogs#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TestMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestMetricFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestMetricFilterResponse(data, context);
  const response: TestMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestMetricFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagLogGroupCommandError = async (
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
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataAlreadyAcceptedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataAlreadyAcceptedException(body, context);
  const exception = new DataAlreadyAcceptedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(body, context);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSequenceTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSequenceTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSequenceTokenException(body, context);
  const exception = new InvalidSequenceTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MalformedQueryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedQueryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedQueryException(body, context);
  const exception = new MalformedQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationAbortedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationAbortedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationAbortedException(body, context);
  const exception = new OperationAbortedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnrecognizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnrecognizedClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnrecognizedClientException(body, context);
  const exception = new UnrecognizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AccountIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateKmsKeyRequest = (input: AssociateKmsKeyRequest, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1CancelExportTaskRequest = (input: CancelExportTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.taskId != null && { taskId: input.taskId }),
  };
};

const serializeAws_json1_1CreateExportTaskRequest = (input: CreateExportTaskRequest, context: __SerdeContext): any => {
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

const serializeAws_json1_1CreateLogGroupRequest = (input: CreateLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateLogStreamRequest = (input: CreateLogStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
  };
};

const serializeAws_json1_1DeleteDataProtectionPolicyRequest = (
  input: DeleteDataProtectionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
  };
};

const serializeAws_json1_1DeleteDestinationRequest = (
  input: DeleteDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationName != null && { destinationName: input.destinationName }),
  };
};

const serializeAws_json1_1DeleteLogGroupRequest = (input: DeleteLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1DeleteLogStreamRequest = (input: DeleteLogStreamRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
  };
};

const serializeAws_json1_1DeleteMetricFilterRequest = (
  input: DeleteMetricFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1DeleteQueryDefinitionRequest = (
  input: DeleteQueryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.queryDefinitionId != null && { queryDefinitionId: input.queryDefinitionId }),
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.policyName != null && { policyName: input.policyName }),
  };
};

const serializeAws_json1_1DeleteRetentionPolicyRequest = (
  input: DeleteRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1DeleteSubscriptionFilterRequest = (
  input: DeleteSubscriptionFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1DescribeDestinationsRequest = (
  input: DescribeDestinationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationNamePrefix != null && { DestinationNamePrefix: input.DestinationNamePrefix }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeExportTasksRequest = (
  input: DescribeExportTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.statusCode != null && { statusCode: input.statusCode }),
    ...(input.taskId != null && { taskId: input.taskId }),
  };
};

const serializeAws_json1_1DescribeLogGroupsRequest = (
  input: DescribeLogGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accountIdentifiers != null && {
      accountIdentifiers: serializeAws_json1_1AccountIds(input.accountIdentifiers, context),
    }),
    ...(input.includeLinkedAccounts != null && { includeLinkedAccounts: input.includeLinkedAccounts }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupNamePattern != null && { logGroupNamePattern: input.logGroupNamePattern }),
    ...(input.logGroupNamePrefix != null && { logGroupNamePrefix: input.logGroupNamePrefix }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeLogStreamsRequest = (
  input: DescribeLogStreamsRequest,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_1DescribeMetricFiltersRequest = (
  input: DescribeMetricFiltersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterNamePrefix != null && { filterNamePrefix: input.filterNamePrefix }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.metricNamespace != null && { metricNamespace: input.metricNamespace }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeQueriesRequest = (input: DescribeQueriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1DescribeQueryDefinitionsRequest = (
  input: DescribeQueryDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.queryDefinitionNamePrefix != null && { queryDefinitionNamePrefix: input.queryDefinitionNamePrefix }),
  };
};

const serializeAws_json1_1DescribeResourcePoliciesRequest = (
  input: DescribeResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1DescribeSubscriptionFiltersRequest = (
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

const serializeAws_json1_1Dimensions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1DisassociateKmsKeyRequest = (
  input: DisassociateKmsKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1FilterLogEventsRequest = (input: FilterLogEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.interleaved != null && { interleaved: input.interleaved }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamNamePrefix != null && { logStreamNamePrefix: input.logStreamNamePrefix }),
    ...(input.logStreamNames != null && {
      logStreamNames: serializeAws_json1_1InputLogStreamNames(input.logStreamNames, context),
    }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.startTime != null && { startTime: input.startTime }),
    ...(input.unmask != null && { unmask: input.unmask }),
  };
};

const serializeAws_json1_1GetDataProtectionPolicyRequest = (
  input: GetDataProtectionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
  };
};

const serializeAws_json1_1GetLogEventsRequest = (input: GetLogEventsRequest, context: __SerdeContext): any => {
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

const serializeAws_json1_1GetLogGroupFieldsRequest = (
  input: GetLogGroupFieldsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.time != null && { time: input.time }),
  };
};

const serializeAws_json1_1GetLogRecordRequest = (input: GetLogRecordRequest, context: __SerdeContext): any => {
  return {
    ...(input.logRecordPointer != null && { logRecordPointer: input.logRecordPointer }),
    ...(input.unmask != null && { unmask: input.unmask }),
  };
};

const serializeAws_json1_1GetQueryResultsRequest = (input: GetQueryResultsRequest, context: __SerdeContext): any => {
  return {
    ...(input.queryId != null && { queryId: input.queryId }),
  };
};

const serializeAws_json1_1InputLogEvent = (input: InputLogEvent, context: __SerdeContext): any => {
  return {
    ...(input.message != null && { message: input.message }),
    ...(input.timestamp != null && { timestamp: input.timestamp }),
  };
};

const serializeAws_json1_1InputLogEvents = (input: InputLogEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1InputLogEvent(entry, context);
    });
};

const serializeAws_json1_1InputLogStreamNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1ListTagsLogGroupRequest = (input: ListTagsLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
  };
};

const serializeAws_json1_1LogGroupIdentifiers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LogGroupNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MetricTransformation = (input: MetricTransformation, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: __serializeFloat(input.defaultValue) }),
    ...(input.dimensions != null && { dimensions: serializeAws_json1_1Dimensions(input.dimensions, context) }),
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.metricNamespace != null && { metricNamespace: input.metricNamespace }),
    ...(input.metricValue != null && { metricValue: input.metricValue }),
    ...(input.unit != null && { unit: input.unit }),
  };
};

const serializeAws_json1_1MetricTransformations = (input: MetricTransformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MetricTransformation(entry, context);
    });
};

const serializeAws_json1_1PutDataProtectionPolicyRequest = (
  input: PutDataProtectionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupIdentifier != null && { logGroupIdentifier: input.logGroupIdentifier }),
    ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
  };
};

const serializeAws_json1_1PutDestinationPolicyRequest = (
  input: PutDestinationPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessPolicy != null && { accessPolicy: input.accessPolicy }),
    ...(input.destinationName != null && { destinationName: input.destinationName }),
    ...(input.forceUpdate != null && { forceUpdate: input.forceUpdate }),
  };
};

const serializeAws_json1_1PutDestinationRequest = (input: PutDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.destinationName != null && { destinationName: input.destinationName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  };
};

const serializeAws_json1_1PutLogEventsRequest = (input: PutLogEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.logEvents != null && { logEvents: serializeAws_json1_1InputLogEvents(input.logEvents, context) }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logStreamName != null && { logStreamName: input.logStreamName }),
    ...(input.sequenceToken != null && { sequenceToken: input.sequenceToken }),
  };
};

const serializeAws_json1_1PutMetricFilterRequest = (input: PutMetricFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.metricTransformations != null && {
      metricTransformations: serializeAws_json1_1MetricTransformations(input.metricTransformations, context),
    }),
  };
};

const serializeAws_json1_1PutQueryDefinitionRequest = (
  input: PutQueryDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupNames != null && {
      logGroupNames: serializeAws_json1_1LogGroupNames(input.logGroupNames, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.queryDefinitionId != null && { queryDefinitionId: input.queryDefinitionId }),
    ...(input.queryString != null && { queryString: input.queryString }),
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.policyDocument != null && { policyDocument: input.policyDocument }),
    ...(input.policyName != null && { policyName: input.policyName }),
  };
};

const serializeAws_json1_1PutRetentionPolicyRequest = (
  input: PutRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.retentionInDays != null && { retentionInDays: input.retentionInDays }),
  };
};

const serializeAws_json1_1PutSubscriptionFilterRequest = (
  input: PutSubscriptionFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationArn != null && { destinationArn: input.destinationArn }),
    ...(input.distribution != null && { distribution: input.distribution }),
    ...(input.filterName != null && { filterName: input.filterName }),
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_json1_1StartQueryRequest = (input: StartQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: input.endTime }),
    ...(input.limit != null && { limit: input.limit }),
    ...(input.logGroupIdentifiers != null && {
      logGroupIdentifiers: serializeAws_json1_1LogGroupIdentifiers(input.logGroupIdentifiers, context),
    }),
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.logGroupNames != null && {
      logGroupNames: serializeAws_json1_1LogGroupNames(input.logGroupNames, context),
    }),
    ...(input.queryString != null && { queryString: input.queryString }),
    ...(input.startTime != null && { startTime: input.startTime }),
  };
};

const serializeAws_json1_1StopQueryRequest = (input: StopQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.queryId != null && { queryId: input.queryId }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagLogGroupRequest = (input: TagLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1TestEventMessages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TestMetricFilterRequest = (input: TestMetricFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterPattern != null && { filterPattern: input.filterPattern }),
    ...(input.logEventMessages != null && {
      logEventMessages: serializeAws_json1_1TestEventMessages(input.logEventMessages, context),
    }),
  };
};

const serializeAws_json1_1UntagLogGroupRequest = (input: UntagLogGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.logGroupName != null && { logGroupName: input.logGroupName }),
    ...(input.tags != null && { tags: serializeAws_json1_1TagList(input.tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeyList(input.tagKeys, context) }),
  };
};

const deserializeAws_json1_1CreateExportTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateExportTaskResponse => {
  return {
    taskId: __expectString(output.taskId),
  } as any;
};

const deserializeAws_json1_1DataAlreadyAcceptedException = (
  output: any,
  context: __SerdeContext
): DataAlreadyAcceptedException => {
  return {
    expectedSequenceToken: __expectString(output.expectedSequenceToken),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DeleteQueryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteQueryDefinitionResponse => {
  return {
    success: __expectBoolean(output.success),
  } as any;
};

const deserializeAws_json1_1DescribeDestinationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDestinationsResponse => {
  return {
    destinations:
      output.destinations != null ? deserializeAws_json1_1Destinations(output.destinations, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeExportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportTasksResponse => {
  return {
    exportTasks:
      output.exportTasks != null ? deserializeAws_json1_1ExportTasks(output.exportTasks, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeLogGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogGroupsResponse => {
  return {
    logGroups: output.logGroups != null ? deserializeAws_json1_1LogGroups(output.logGroups, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeLogStreamsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogStreamsResponse => {
  return {
    logStreams: output.logStreams != null ? deserializeAws_json1_1LogStreams(output.logStreams, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeMetricFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeMetricFiltersResponse => {
  return {
    metricFilters:
      output.metricFilters != null ? deserializeAws_json1_1MetricFilters(output.metricFilters, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1DescribeQueriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeQueriesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    queries: output.queries != null ? deserializeAws_json1_1QueryInfoList(output.queries, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeQueryDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeQueryDefinitionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    queryDefinitions:
      output.queryDefinitions != null
        ? deserializeAws_json1_1QueryDefinitionList(output.queryDefinitions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePoliciesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    resourcePolicies:
      output.resourcePolicies != null
        ? deserializeAws_json1_1ResourcePolicies(output.resourcePolicies, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSubscriptionFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionFiltersResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    subscriptionFilters:
      output.subscriptionFilters != null
        ? deserializeAws_json1_1SubscriptionFilters(output.subscriptionFilters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    accessPolicy: __expectString(output.accessPolicy),
    arn: __expectString(output.arn),
    creationTime: __expectLong(output.creationTime),
    destinationName: __expectString(output.destinationName),
    roleArn: __expectString(output.roleArn),
    targetArn: __expectString(output.targetArn),
  } as any;
};

const deserializeAws_json1_1Destinations = (output: any, context: __SerdeContext): Destination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Destination(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Dimensions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ExportTask = (output: any, context: __SerdeContext): ExportTask => {
  return {
    destination: __expectString(output.destination),
    destinationPrefix: __expectString(output.destinationPrefix),
    executionInfo:
      output.executionInfo != null
        ? deserializeAws_json1_1ExportTaskExecutionInfo(output.executionInfo, context)
        : undefined,
    from: __expectLong(output.from),
    logGroupName: __expectString(output.logGroupName),
    status: output.status != null ? deserializeAws_json1_1ExportTaskStatus(output.status, context) : undefined,
    taskId: __expectString(output.taskId),
    taskName: __expectString(output.taskName),
    to: __expectLong(output.to),
  } as any;
};

const deserializeAws_json1_1ExportTaskExecutionInfo = (
  output: any,
  context: __SerdeContext
): ExportTaskExecutionInfo => {
  return {
    completionTime: __expectLong(output.completionTime),
    creationTime: __expectLong(output.creationTime),
  } as any;
};

const deserializeAws_json1_1ExportTasks = (output: any, context: __SerdeContext): ExportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExportTask(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExportTaskStatus = (output: any, context: __SerdeContext): ExportTaskStatus => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ExtractedValues = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1FilteredLogEvent = (output: any, context: __SerdeContext): FilteredLogEvent => {
  return {
    eventId: __expectString(output.eventId),
    ingestionTime: __expectLong(output.ingestionTime),
    logStreamName: __expectString(output.logStreamName),
    message: __expectString(output.message),
    timestamp: __expectLong(output.timestamp),
  } as any;
};

const deserializeAws_json1_1FilteredLogEvents = (output: any, context: __SerdeContext): FilteredLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilteredLogEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterLogEventsResponse = (
  output: any,
  context: __SerdeContext
): FilterLogEventsResponse => {
  return {
    events: output.events != null ? deserializeAws_json1_1FilteredLogEvents(output.events, context) : undefined,
    nextToken: __expectString(output.nextToken),
    searchedLogStreams:
      output.searchedLogStreams != null
        ? deserializeAws_json1_1SearchedLogStreams(output.searchedLogStreams, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDataProtectionPolicyResponse = (
  output: any,
  context: __SerdeContext
): GetDataProtectionPolicyResponse => {
  return {
    lastUpdatedTime: __expectLong(output.lastUpdatedTime),
    logGroupIdentifier: __expectString(output.logGroupIdentifier),
    policyDocument: __expectString(output.policyDocument),
  } as any;
};

const deserializeAws_json1_1GetLogEventsResponse = (output: any, context: __SerdeContext): GetLogEventsResponse => {
  return {
    events: output.events != null ? deserializeAws_json1_1OutputLogEvents(output.events, context) : undefined,
    nextBackwardToken: __expectString(output.nextBackwardToken),
    nextForwardToken: __expectString(output.nextForwardToken),
  } as any;
};

const deserializeAws_json1_1GetLogGroupFieldsResponse = (
  output: any,
  context: __SerdeContext
): GetLogGroupFieldsResponse => {
  return {
    logGroupFields:
      output.logGroupFields != null
        ? deserializeAws_json1_1LogGroupFieldList(output.logGroupFields, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetLogRecordResponse = (output: any, context: __SerdeContext): GetLogRecordResponse => {
  return {
    logRecord: output.logRecord != null ? deserializeAws_json1_1LogRecord(output.logRecord, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetQueryResultsResponse = (
  output: any,
  context: __SerdeContext
): GetQueryResultsResponse => {
  return {
    results: output.results != null ? deserializeAws_json1_1QueryResults(output.results, context) : undefined,
    statistics:
      output.statistics != null ? deserializeAws_json1_1QueryStatistics(output.statistics, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidSequenceTokenException = (
  output: any,
  context: __SerdeContext
): InvalidSequenceTokenException => {
  return {
    expectedSequenceToken: __expectString(output.expectedSequenceToken),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsLogGroupResponse = (
  output: any,
  context: __SerdeContext
): ListTagsLogGroupResponse => {
  return {
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LogGroup = (output: any, context: __SerdeContext): LogGroup => {
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

const deserializeAws_json1_1LogGroupField = (output: any, context: __SerdeContext): LogGroupField => {
  return {
    name: __expectString(output.name),
    percent: __expectInt32(output.percent),
  } as any;
};

const deserializeAws_json1_1LogGroupFieldList = (output: any, context: __SerdeContext): LogGroupField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogGroupField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LogGroupNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1LogGroups = (output: any, context: __SerdeContext): LogGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1LogRecord = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1LogStream = (output: any, context: __SerdeContext): LogStream => {
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

const deserializeAws_json1_1LogStreams = (output: any, context: __SerdeContext): LogStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1LogStream(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MalformedQueryException = (
  output: any,
  context: __SerdeContext
): MalformedQueryException => {
  return {
    message: __expectString(output.message),
    queryCompileError:
      output.queryCompileError != null
        ? deserializeAws_json1_1QueryCompileError(output.queryCompileError, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricFilter = (output: any, context: __SerdeContext): MetricFilter => {
  return {
    creationTime: __expectLong(output.creationTime),
    filterName: __expectString(output.filterName),
    filterPattern: __expectString(output.filterPattern),
    logGroupName: __expectString(output.logGroupName),
    metricTransformations:
      output.metricTransformations != null
        ? deserializeAws_json1_1MetricTransformations(output.metricTransformations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricFilterMatches = (output: any, context: __SerdeContext): MetricFilterMatchRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricFilterMatchRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricFilterMatchRecord = (
  output: any,
  context: __SerdeContext
): MetricFilterMatchRecord => {
  return {
    eventMessage: __expectString(output.eventMessage),
    eventNumber: __expectLong(output.eventNumber),
    extractedValues:
      output.extractedValues != null
        ? deserializeAws_json1_1ExtractedValues(output.extractedValues, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricFilters = (output: any, context: __SerdeContext): MetricFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricTransformation = (output: any, context: __SerdeContext): MetricTransformation => {
  return {
    defaultValue: __limitedParseDouble(output.defaultValue),
    dimensions: output.dimensions != null ? deserializeAws_json1_1Dimensions(output.dimensions, context) : undefined,
    metricName: __expectString(output.metricName),
    metricNamespace: __expectString(output.metricNamespace),
    metricValue: __expectString(output.metricValue),
    unit: __expectString(output.unit),
  } as any;
};

const deserializeAws_json1_1MetricTransformations = (output: any, context: __SerdeContext): MetricTransformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricTransformation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OperationAbortedException = (
  output: any,
  context: __SerdeContext
): OperationAbortedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OutputLogEvent = (output: any, context: __SerdeContext): OutputLogEvent => {
  return {
    ingestionTime: __expectLong(output.ingestionTime),
    message: __expectString(output.message),
    timestamp: __expectLong(output.timestamp),
  } as any;
};

const deserializeAws_json1_1OutputLogEvents = (output: any, context: __SerdeContext): OutputLogEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OutputLogEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PutDataProtectionPolicyResponse = (
  output: any,
  context: __SerdeContext
): PutDataProtectionPolicyResponse => {
  return {
    lastUpdatedTime: __expectLong(output.lastUpdatedTime),
    logGroupIdentifier: __expectString(output.logGroupIdentifier),
    policyDocument: __expectString(output.policyDocument),
  } as any;
};

const deserializeAws_json1_1PutDestinationResponse = (output: any, context: __SerdeContext): PutDestinationResponse => {
  return {
    destination:
      output.destination != null ? deserializeAws_json1_1Destination(output.destination, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PutLogEventsResponse = (output: any, context: __SerdeContext): PutLogEventsResponse => {
  return {
    nextSequenceToken: __expectString(output.nextSequenceToken),
    rejectedLogEventsInfo:
      output.rejectedLogEventsInfo != null
        ? deserializeAws_json1_1RejectedLogEventsInfo(output.rejectedLogEventsInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PutQueryDefinitionResponse = (
  output: any,
  context: __SerdeContext
): PutQueryDefinitionResponse => {
  return {
    queryDefinitionId: __expectString(output.queryDefinitionId),
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    resourcePolicy:
      output.resourcePolicy != null ? deserializeAws_json1_1ResourcePolicy(output.resourcePolicy, context) : undefined,
  } as any;
};

const deserializeAws_json1_1QueryCompileError = (output: any, context: __SerdeContext): QueryCompileError => {
  return {
    location:
      output.location != null ? deserializeAws_json1_1QueryCompileErrorLocation(output.location, context) : undefined,
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1QueryCompileErrorLocation = (
  output: any,
  context: __SerdeContext
): QueryCompileErrorLocation => {
  return {
    endCharOffset: __expectInt32(output.endCharOffset),
    startCharOffset: __expectInt32(output.startCharOffset),
  } as any;
};

const deserializeAws_json1_1QueryDefinition = (output: any, context: __SerdeContext): QueryDefinition => {
  return {
    lastModified: __expectLong(output.lastModified),
    logGroupNames:
      output.logGroupNames != null ? deserializeAws_json1_1LogGroupNames(output.logGroupNames, context) : undefined,
    name: __expectString(output.name),
    queryDefinitionId: __expectString(output.queryDefinitionId),
    queryString: __expectString(output.queryString),
  } as any;
};

const deserializeAws_json1_1QueryDefinitionList = (output: any, context: __SerdeContext): QueryDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryInfo = (output: any, context: __SerdeContext): QueryInfo => {
  return {
    createTime: __expectLong(output.createTime),
    logGroupName: __expectString(output.logGroupName),
    queryId: __expectString(output.queryId),
    queryString: __expectString(output.queryString),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1QueryInfoList = (output: any, context: __SerdeContext): QueryInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1QueryInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryResults = (output: any, context: __SerdeContext): ResultField[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResultRows(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1QueryStatistics = (output: any, context: __SerdeContext): QueryStatistics => {
  return {
    bytesScanned: __limitedParseDouble(output.bytesScanned),
    recordsMatched: __limitedParseDouble(output.recordsMatched),
    recordsScanned: __limitedParseDouble(output.recordsScanned),
  } as any;
};

const deserializeAws_json1_1RejectedLogEventsInfo = (output: any, context: __SerdeContext): RejectedLogEventsInfo => {
  return {
    expiredLogEventEndIndex: __expectInt32(output.expiredLogEventEndIndex),
    tooNewLogEventStartIndex: __expectInt32(output.tooNewLogEventStartIndex),
    tooOldLogEventEndIndex: __expectInt32(output.tooOldLogEventEndIndex),
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourcePolicies = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResourcePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    lastUpdatedTime: __expectLong(output.lastUpdatedTime),
    policyDocument: __expectString(output.policyDocument),
    policyName: __expectString(output.policyName),
  } as any;
};

const deserializeAws_json1_1ResultField = (output: any, context: __SerdeContext): ResultField => {
  return {
    field: __expectString(output.field),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1ResultRows = (output: any, context: __SerdeContext): ResultField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ResultField(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SearchedLogStream = (output: any, context: __SerdeContext): SearchedLogStream => {
  return {
    logStreamName: __expectString(output.logStreamName),
    searchedCompletely: __expectBoolean(output.searchedCompletely),
  } as any;
};

const deserializeAws_json1_1SearchedLogStreams = (output: any, context: __SerdeContext): SearchedLogStream[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SearchedLogStream(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StartQueryResponse = (output: any, context: __SerdeContext): StartQueryResponse => {
  return {
    queryId: __expectString(output.queryId),
  } as any;
};

const deserializeAws_json1_1StopQueryResponse = (output: any, context: __SerdeContext): StopQueryResponse => {
  return {
    success: __expectBoolean(output.success),
  } as any;
};

const deserializeAws_json1_1SubscriptionFilter = (output: any, context: __SerdeContext): SubscriptionFilter => {
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

const deserializeAws_json1_1SubscriptionFilters = (output: any, context: __SerdeContext): SubscriptionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SubscriptionFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1TestMetricFilterResponse = (
  output: any,
  context: __SerdeContext
): TestMetricFilterResponse => {
  return {
    matches: output.matches != null ? deserializeAws_json1_1MetricFilterMatches(output.matches, context) : undefined,
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

const deserializeAws_json1_1UnrecognizedClientException = (
  output: any,
  context: __SerdeContext
): UnrecognizedClientException => {
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
