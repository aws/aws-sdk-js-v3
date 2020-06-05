import {
  AssociateKmsKeyCommandInput,
  AssociateKmsKeyCommandOutput
} from "../commands/AssociateKmsKeyCommand";
import {
  CancelExportTaskCommandInput,
  CancelExportTaskCommandOutput
} from "../commands/CancelExportTaskCommand";
import {
  CreateExportTaskCommandInput,
  CreateExportTaskCommandOutput
} from "../commands/CreateExportTaskCommand";
import {
  CreateLogGroupCommandInput,
  CreateLogGroupCommandOutput
} from "../commands/CreateLogGroupCommand";
import {
  CreateLogStreamCommandInput,
  CreateLogStreamCommandOutput
} from "../commands/CreateLogStreamCommand";
import {
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput
} from "../commands/DeleteDestinationCommand";
import {
  DeleteLogGroupCommandInput,
  DeleteLogGroupCommandOutput
} from "../commands/DeleteLogGroupCommand";
import {
  DeleteLogStreamCommandInput,
  DeleteLogStreamCommandOutput
} from "../commands/DeleteLogStreamCommand";
import {
  DeleteMetricFilterCommandInput,
  DeleteMetricFilterCommandOutput
} from "../commands/DeleteMetricFilterCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput
} from "../commands/DeleteRetentionPolicyCommand";
import {
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput
} from "../commands/DeleteSubscriptionFilterCommand";
import {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput
} from "../commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput
} from "../commands/DescribeLogGroupsCommand";
import {
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput
} from "../commands/DescribeLogStreamsCommand";
import {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput
} from "../commands/DescribeMetricFiltersCommand";
import {
  DescribeQueriesCommandInput,
  DescribeQueriesCommandOutput
} from "../commands/DescribeQueriesCommand";
import {
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput
} from "../commands/DescribeResourcePoliciesCommand";
import {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput
} from "../commands/DescribeSubscriptionFiltersCommand";
import {
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput
} from "../commands/DisassociateKmsKeyCommand";
import {
  FilterLogEventsCommandInput,
  FilterLogEventsCommandOutput
} from "../commands/FilterLogEventsCommand";
import {
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput
} from "../commands/GetLogEventsCommand";
import {
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput
} from "../commands/GetLogGroupFieldsCommand";
import {
  GetLogRecordCommandInput,
  GetLogRecordCommandOutput
} from "../commands/GetLogRecordCommand";
import {
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput
} from "../commands/GetQueryResultsCommand";
import {
  ListTagsLogGroupCommandInput,
  ListTagsLogGroupCommandOutput
} from "../commands/ListTagsLogGroupCommand";
import {
  PutDestinationCommandInput,
  PutDestinationCommandOutput
} from "../commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput
} from "../commands/PutDestinationPolicyCommand";
import {
  PutLogEventsCommandInput,
  PutLogEventsCommandOutput
} from "../commands/PutLogEventsCommand";
import {
  PutMetricFilterCommandInput,
  PutMetricFilterCommandOutput
} from "../commands/PutMetricFilterCommand";
import {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput
} from "../commands/PutResourcePolicyCommand";
import {
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput
} from "../commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput
} from "../commands/PutSubscriptionFilterCommand";
import {
  StartQueryCommandInput,
  StartQueryCommandOutput
} from "../commands/StartQueryCommand";
import {
  StopQueryCommandInput,
  StopQueryCommandOutput
} from "../commands/StopQueryCommand";
import {
  TagLogGroupCommandInput,
  TagLogGroupCommandOutput
} from "../commands/TagLogGroupCommand";
import {
  TestMetricFilterCommandInput,
  TestMetricFilterCommandOutput
} from "../commands/TestMetricFilterCommand";
import {
  UntagLogGroupCommandInput,
  UntagLogGroupCommandOutput
} from "../commands/UntagLogGroupCommand";
import {
  AssociateKmsKeyRequest,
  CancelExportTaskRequest,
  CreateExportTaskRequest,
  CreateExportTaskResponse,
  CreateLogGroupRequest,
  CreateLogStreamRequest,
  DataAlreadyAcceptedException,
  DeleteDestinationRequest,
  DeleteLogGroupRequest,
  DeleteLogStreamRequest,
  DeleteMetricFilterRequest,
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
  DescribeResourcePoliciesRequest,
  DescribeResourcePoliciesResponse,
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersResponse,
  Destination,
  DisassociateKmsKeyRequest,
  ExportTask,
  ExportTaskExecutionInfo,
  ExportTaskStatus,
  FilterLogEventsRequest,
  FilterLogEventsResponse,
  FilteredLogEvent,
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
  PutDestinationPolicyRequest,
  PutDestinationRequest,
  PutDestinationResponse,
  PutLogEventsRequest,
  PutLogEventsResponse,
  PutMetricFilterRequest,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutRetentionPolicyRequest,
  PutSubscriptionFilterRequest,
  QueryCompileError,
  QueryCompileErrorLocation,
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
  TestMetricFilterRequest,
  TestMetricFilterResponse,
  UnrecognizedClientException,
  UntagLogGroupRequest
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

export const serializeAws_json1_1AssociateKmsKeyCommand = async (
  input: AssociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.AssociateKmsKey"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateKmsKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.CancelExportTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelExportTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateExportTaskCommand = async (
  input: CreateExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.CreateExportTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateExportTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLogGroupCommand = async (
  input: CreateLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.CreateLogGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLogStreamCommand = async (
  input: CreateLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.CreateLogStream"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLogStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteDestination"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDestinationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLogGroupCommand = async (
  input: DeleteLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteLogGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLogStreamCommand = async (
  input: DeleteLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteLogStream"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLogStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMetricFilterCommand = async (
  input: DeleteMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteMetricFilter"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteMetricFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRetentionPolicyCommand = async (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteRetentionPolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRetentionPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubscriptionFilterCommand = async (
  input: DeleteSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DeleteSubscriptionFilter"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSubscriptionFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDestinationsCommand = async (
  input: DescribeDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeDestinations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDestinationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeExportTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeExportTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLogGroupsCommand = async (
  input: DescribeLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeLogGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLogGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLogStreamsCommand = async (
  input: DescribeLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeLogStreams"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLogStreamsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMetricFiltersCommand = async (
  input: DescribeMetricFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeMetricFilters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMetricFiltersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeQueriesCommand = async (
  input: DescribeQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeQueries"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeQueriesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourcePoliciesCommand = async (
  input: DescribeResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeResourcePolicies"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeResourcePoliciesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubscriptionFiltersCommand = async (
  input: DescribeSubscriptionFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DescribeSubscriptionFilters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSubscriptionFiltersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateKmsKeyCommand = async (
  input: DisassociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.DisassociateKmsKey"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateKmsKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1FilterLogEventsCommand = async (
  input: FilterLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.FilterLogEvents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1FilterLogEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLogEventsCommand = async (
  input: GetLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.GetLogEvents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLogEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLogGroupFieldsCommand = async (
  input: GetLogGroupFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.GetLogGroupFields"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLogGroupFieldsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetLogRecordCommand = async (
  input: GetLogRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.GetLogRecord"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLogRecordRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.GetQueryResults"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQueryResultsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsLogGroupCommand = async (
  input: ListTagsLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.ListTagsLogGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDestinationCommand = async (
  input: PutDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutDestination"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutDestinationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDestinationPolicyCommand = async (
  input: PutDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutDestinationPolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutDestinationPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutLogEventsCommand = async (
  input: PutLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutLogEvents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLogEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutMetricFilterCommand = async (
  input: PutMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutMetricFilter"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutMetricFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutResourcePolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRetentionPolicyCommand = async (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutRetentionPolicy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutRetentionPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutSubscriptionFilterCommand = async (
  input: PutSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.PutSubscriptionFilter"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutSubscriptionFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartQueryCommand = async (
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.StartQuery"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.StopQuery"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.TagLogGroup"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestMetricFilterCommand = async (
  input: TestMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.TestMetricFilter"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TestMetricFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagLogGroupCommand = async (
  input: UntagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Logs_20140328.UntagLogGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateKmsKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateKmsKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelExportTaskCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
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
    case "InvalidOperationException":
    case "com.amazonaws.cloudwatchlogs#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1CreateExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateExportTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExportTaskResponse(data, context);
  const response: CreateExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateExportTaskResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateExportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1CreateLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1CreateLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLogStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDestinationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDestinationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLogStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteMetricFilterCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMetricFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteResourcePolicyCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRetentionPolicyCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DeleteSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSubscriptionFilterCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSubscriptionFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDestinationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDestinationsResponse(data, context);
  const response: DescribeDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDestinationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeExportTasksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExportTasksResponse(data, context);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeExportTasksResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLogGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLogGroupsResponse(data, context);
  const response: DescribeLogGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLogGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLogGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLogStreamsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLogStreamsResponse(data, context);
  const response: DescribeLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLogStreamsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLogStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeMetricFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeMetricFiltersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMetricFiltersResponse(data, context);
  const response: DescribeMetricFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMetricFiltersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMetricFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeQueriesResponse(data, context);
  const response: DescribeQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeQueriesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeResourcePoliciesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourcePoliciesResponse(
    data,
    context
  );
  const response: DescribeResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourcePoliciesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DescribeSubscriptionFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSubscriptionFiltersCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubscriptionFiltersResponse(
    data,
    context
  );
  const response: DescribeSubscriptionFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSubscriptionFiltersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSubscriptionFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1DisassociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateKmsKeyCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DisassociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateKmsKeyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1FilterLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1FilterLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1FilterLogEventsResponse(data, context);
  const response: FilterLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FilterLogEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1FilterLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1GetLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLogEventsResponse(data, context);
  const response: GetLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLogEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1GetLogGroupFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLogGroupFieldsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLogGroupFieldsResponse(data, context);
  const response: GetLogGroupFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLogGroupFieldsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLogGroupFieldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1GetLogRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetLogRecordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetLogRecordResponse(data, context);
  const response: GetLogRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLogRecordResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetLogRecordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetQueryResultsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetQueryResultsResponse(data, context);
  const response: GetQueryResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetQueryResultsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetQueryResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1ListTagsLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsLogGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsLogGroupResponse(data, context);
  const response: ListTagsLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsLogGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1PutDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDestinationResponse(data, context);
  const response: PutDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDestinationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1PutDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutDestinationPolicyCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDestinationPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1PutLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutLogEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutLogEventsResponse(data, context);
  const response: PutLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutLogEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutLogEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> => {
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
    case "DataAlreadyAcceptedException":
    case "com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException":
      response = {
        ...(await deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSequenceTokenException":
    case "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidSequenceTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnrecognizedClientException":
    case "com.amazonaws.cloudwatchlogs#UnrecognizedClientException":
      response = {
        ...(await deserializeAws_json1_1UnrecognizedClientExceptionResponse(
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

export const deserializeAws_json1_1PutMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutMetricFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutMetricFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutResourcePolicyResponse(data, context);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutResourcePolicyResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1PutRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRetentionPolicyCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRetentionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1PutSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutSubscriptionFilterCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: PutSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutSubscriptionFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.cloudwatchlogs#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1StartQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartQueryResponse(data, context);
  const response: StartQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartQueryResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedQueryException":
    case "com.amazonaws.cloudwatchlogs#MalformedQueryException":
      response = {
        ...(await deserializeAws_json1_1MalformedQueryExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1StopQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopQueryResponse(data, context);
  const response: StopQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopQueryResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1TagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1TestMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TestMetricFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestMetricFilterResponse(data, context);
  const response: TestMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestMetricFilterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestMetricFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazonaws.cloudwatchlogs#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
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

export const deserializeAws_json1_1UntagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagLogGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchlogs#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataAlreadyAcceptedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataAlreadyAcceptedException(
    body,
    context
  );
  const contents: DataAlreadyAcceptedException = {
    name: "DataAlreadyAcceptedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(
    body,
    context
  );
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSequenceTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSequenceTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSequenceTokenException(
    body,
    context
  );
  const contents: InvalidSequenceTokenException = {
    name: "InvalidSequenceTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
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

const deserializeAws_json1_1MalformedQueryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedQueryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedQueryException(
    body,
    context
  );
  const contents: MalformedQueryException = {
    name: "MalformedQueryException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationAbortedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationAbortedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationAbortedException(
    body,
    context
  );
  const contents: OperationAbortedException = {
    name: "OperationAbortedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
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

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnrecognizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnrecognizedClientException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnrecognizedClientException(
    body,
    context
  );
  const contents: UnrecognizedClientException = {
    name: "UnrecognizedClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AssociateKmsKeyRequest = (
  input: AssociateKmsKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId !== undefined && { kmsKeyId: input.kmsKeyId }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1CancelExportTaskRequest = (
  input: CancelExportTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.taskId !== undefined && { taskId: input.taskId })
  };
};

const serializeAws_json1_1CreateExportTaskRequest = (
  input: CreateExportTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.destination !== undefined && { destination: input.destination }),
    ...(input.destinationPrefix !== undefined && {
      destinationPrefix: input.destinationPrefix
    }),
    ...(input.from !== undefined && { from: input.from }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamNamePrefix !== undefined && {
      logStreamNamePrefix: input.logStreamNamePrefix
    }),
    ...(input.taskName !== undefined && { taskName: input.taskName }),
    ...(input.to !== undefined && { to: input.to })
  };
};

const serializeAws_json1_1CreateLogGroupRequest = (
  input: CreateLogGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyId !== undefined && { kmsKeyId: input.kmsKeyId }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    })
  };
};

const serializeAws_json1_1CreateLogStreamRequest = (
  input: CreateLogStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamName !== undefined && {
      logStreamName: input.logStreamName
    })
  };
};

const serializeAws_json1_1DeleteDestinationRequest = (
  input: DeleteDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationName !== undefined && {
      destinationName: input.destinationName
    })
  };
};

const serializeAws_json1_1DeleteLogGroupRequest = (
  input: DeleteLogGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1DeleteLogStreamRequest = (
  input: DeleteLogStreamRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamName !== undefined && {
      logStreamName: input.logStreamName
    })
  };
};

const serializeAws_json1_1DeleteMetricFilterRequest = (
  input: DeleteMetricFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterName !== undefined && { filterName: input.filterName }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.policyName !== undefined && { policyName: input.policyName })
  };
};

const serializeAws_json1_1DeleteRetentionPolicyRequest = (
  input: DeleteRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1DeleteSubscriptionFilterRequest = (
  input: DeleteSubscriptionFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterName !== undefined && { filterName: input.filterName }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1DescribeDestinationsRequest = (
  input: DescribeDestinationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationNamePrefix !== undefined && {
      DestinationNamePrefix: input.DestinationNamePrefix
    }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeExportTasksRequest = (
  input: DescribeExportTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.statusCode !== undefined && { statusCode: input.statusCode }),
    ...(input.taskId !== undefined && { taskId: input.taskId })
  };
};

const serializeAws_json1_1DescribeLogGroupsRequest = (
  input: DescribeLogGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupNamePrefix !== undefined && {
      logGroupNamePrefix: input.logGroupNamePrefix
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeLogStreamsRequest = (
  input: DescribeLogStreamsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.descending !== undefined && { descending: input.descending }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamNamePrefix !== undefined && {
      logStreamNamePrefix: input.logStreamNamePrefix
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.orderBy !== undefined && { orderBy: input.orderBy })
  };
};

const serializeAws_json1_1DescribeMetricFiltersRequest = (
  input: DescribeMetricFiltersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterNamePrefix !== undefined && {
      filterNamePrefix: input.filterNamePrefix
    }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.metricNamespace !== undefined && {
      metricNamespace: input.metricNamespace
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeQueriesRequest = (
  input: DescribeQueriesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1DescribeResourcePoliciesRequest = (
  input: DescribeResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DescribeSubscriptionFiltersRequest = (
  input: DescribeSubscriptionFiltersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterNamePrefix !== undefined && {
      filterNamePrefix: input.filterNamePrefix
    }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1DisassociateKmsKeyRequest = (
  input: DisassociateKmsKeyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1FilterLogEventsRequest = (
  input: FilterLogEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: input.endTime }),
    ...(input.filterPattern !== undefined && {
      filterPattern: input.filterPattern
    }),
    ...(input.interleaved !== undefined && { interleaved: input.interleaved }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamNamePrefix !== undefined && {
      logStreamNamePrefix: input.logStreamNamePrefix
    }),
    ...(input.logStreamNames !== undefined && {
      logStreamNames: serializeAws_json1_1InputLogStreamNames(
        input.logStreamNames,
        context
      )
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.startTime !== undefined && { startTime: input.startTime })
  };
};

const serializeAws_json1_1GetLogEventsRequest = (
  input: GetLogEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: input.endTime }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamName !== undefined && {
      logStreamName: input.logStreamName
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.startFromHead !== undefined && {
      startFromHead: input.startFromHead
    }),
    ...(input.startTime !== undefined && { startTime: input.startTime })
  };
};

const serializeAws_json1_1GetLogGroupFieldsRequest = (
  input: GetLogGroupFieldsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.time !== undefined && { time: input.time })
  };
};

const serializeAws_json1_1GetLogRecordRequest = (
  input: GetLogRecordRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logRecordPointer !== undefined && {
      logRecordPointer: input.logRecordPointer
    })
  };
};

const serializeAws_json1_1GetQueryResultsRequest = (
  input: GetQueryResultsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.queryId !== undefined && { queryId: input.queryId })
  };
};

const serializeAws_json1_1InputLogEvent = (
  input: InputLogEvent,
  context: __SerdeContext
): any => {
  return {
    ...(input.message !== undefined && { message: input.message }),
    ...(input.timestamp !== undefined && { timestamp: input.timestamp })
  };
};

const serializeAws_json1_1InputLogEvents = (
  input: InputLogEvent[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1InputLogEvent(entry, context));
};

const serializeAws_json1_1InputLogStreamNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListTagsLogGroupRequest = (
  input: ListTagsLogGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    })
  };
};

const serializeAws_json1_1LogGroupNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1MetricTransformation = (
  input: MetricTransformation,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValue !== undefined && {
      defaultValue: input.defaultValue
    }),
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.metricNamespace !== undefined && {
      metricNamespace: input.metricNamespace
    }),
    ...(input.metricValue !== undefined && { metricValue: input.metricValue })
  };
};

const serializeAws_json1_1MetricTransformations = (
  input: MetricTransformation[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1MetricTransformation(entry, context)
  );
};

const serializeAws_json1_1PutDestinationPolicyRequest = (
  input: PutDestinationPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessPolicy !== undefined && {
      accessPolicy: input.accessPolicy
    }),
    ...(input.destinationName !== undefined && {
      destinationName: input.destinationName
    })
  };
};

const serializeAws_json1_1PutDestinationRequest = (
  input: PutDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationName !== undefined && {
      destinationName: input.destinationName
    }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.targetArn !== undefined && { targetArn: input.targetArn })
  };
};

const serializeAws_json1_1PutLogEventsRequest = (
  input: PutLogEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logEvents !== undefined && {
      logEvents: serializeAws_json1_1InputLogEvents(input.logEvents, context)
    }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logStreamName !== undefined && {
      logStreamName: input.logStreamName
    }),
    ...(input.sequenceToken !== undefined && {
      sequenceToken: input.sequenceToken
    })
  };
};

const serializeAws_json1_1PutMetricFilterRequest = (
  input: PutMetricFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterName !== undefined && { filterName: input.filterName }),
    ...(input.filterPattern !== undefined && {
      filterPattern: input.filterPattern
    }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.metricTransformations !== undefined && {
      metricTransformations: serializeAws_json1_1MetricTransformations(
        input.metricTransformations,
        context
      )
    })
  };
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.policyDocument !== undefined && {
      policyDocument: input.policyDocument
    }),
    ...(input.policyName !== undefined && { policyName: input.policyName })
  };
};

const serializeAws_json1_1PutRetentionPolicyRequest = (
  input: PutRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.retentionInDays !== undefined && {
      retentionInDays: input.retentionInDays
    })
  };
};

const serializeAws_json1_1PutSubscriptionFilterRequest = (
  input: PutSubscriptionFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.destinationArn !== undefined && {
      destinationArn: input.destinationArn
    }),
    ...(input.distribution !== undefined && {
      distribution: input.distribution
    }),
    ...(input.filterName !== undefined && { filterName: input.filterName }),
    ...(input.filterPattern !== undefined && {
      filterPattern: input.filterPattern
    }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn })
  };
};

const serializeAws_json1_1StartQueryRequest = (
  input: StartQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.endTime !== undefined && { endTime: input.endTime }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.logGroupNames !== undefined && {
      logGroupNames: serializeAws_json1_1LogGroupNames(
        input.logGroupNames,
        context
      )
    }),
    ...(input.queryString !== undefined && { queryString: input.queryString }),
    ...(input.startTime !== undefined && { startTime: input.startTime })
  };
};

const serializeAws_json1_1StopQueryRequest = (
  input: StopQueryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.queryId !== undefined && { queryId: input.queryId })
  };
};

const serializeAws_json1_1TagList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagLogGroupRequest = (
  input: TagLogGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1Tags(input.tags, context)
    })
  };
};

const serializeAws_json1_1Tags = (
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

const serializeAws_json1_1TestEventMessages = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TestMetricFilterRequest = (
  input: TestMetricFilterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterPattern !== undefined && {
      filterPattern: input.filterPattern
    }),
    ...(input.logEventMessages !== undefined && {
      logEventMessages: serializeAws_json1_1TestEventMessages(
        input.logEventMessages,
        context
      )
    })
  };
};

const serializeAws_json1_1UntagLogGroupRequest = (
  input: UntagLogGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupName !== undefined && {
      logGroupName: input.logGroupName
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1TagList(input.tags, context)
    })
  };
};

const deserializeAws_json1_1CreateExportTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateExportTaskResponse => {
  return {
    __type: "CreateExportTaskResponse",
    taskId:
      output.taskId !== undefined && output.taskId !== null
        ? output.taskId
        : undefined
  } as any;
};

const deserializeAws_json1_1DataAlreadyAcceptedException = (
  output: any,
  context: __SerdeContext
): DataAlreadyAcceptedException => {
  return {
    __type: "DataAlreadyAcceptedException",
    expectedSequenceToken:
      output.expectedSequenceToken !== undefined &&
      output.expectedSequenceToken !== null
        ? output.expectedSequenceToken
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDestinationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDestinationsResponse => {
  return {
    __type: "DescribeDestinationsResponse",
    destinations:
      output.destinations !== undefined && output.destinations !== null
        ? deserializeAws_json1_1Destinations(output.destinations, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeExportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportTasksResponse => {
  return {
    __type: "DescribeExportTasksResponse",
    exportTasks:
      output.exportTasks !== undefined && output.exportTasks !== null
        ? deserializeAws_json1_1ExportTasks(output.exportTasks, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLogGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogGroupsResponse => {
  return {
    __type: "DescribeLogGroupsResponse",
    logGroups:
      output.logGroups !== undefined && output.logGroups !== null
        ? deserializeAws_json1_1LogGroups(output.logGroups, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLogStreamsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogStreamsResponse => {
  return {
    __type: "DescribeLogStreamsResponse",
    logStreams:
      output.logStreams !== undefined && output.logStreams !== null
        ? deserializeAws_json1_1LogStreams(output.logStreams, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeMetricFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeMetricFiltersResponse => {
  return {
    __type: "DescribeMetricFiltersResponse",
    metricFilters:
      output.metricFilters !== undefined && output.metricFilters !== null
        ? deserializeAws_json1_1MetricFilters(output.metricFilters, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeQueriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeQueriesResponse => {
  return {
    __type: "DescribeQueriesResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    queries:
      output.queries !== undefined && output.queries !== null
        ? deserializeAws_json1_1QueryInfoList(output.queries, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePoliciesResponse => {
  return {
    __type: "DescribeResourcePoliciesResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    resourcePolicies:
      output.resourcePolicies !== undefined && output.resourcePolicies !== null
        ? deserializeAws_json1_1ResourcePolicies(
            output.resourcePolicies,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSubscriptionFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionFiltersResponse => {
  return {
    __type: "DescribeSubscriptionFiltersResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    subscriptionFilters:
      output.subscriptionFilters !== undefined &&
      output.subscriptionFilters !== null
        ? deserializeAws_json1_1SubscriptionFilters(
            output.subscriptionFilters,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Destination = (
  output: any,
  context: __SerdeContext
): Destination => {
  return {
    __type: "Destination",
    accessPolicy:
      output.accessPolicy !== undefined && output.accessPolicy !== null
        ? output.accessPolicy
        : undefined,
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    destinationName:
      output.destinationName !== undefined && output.destinationName !== null
        ? output.destinationName
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    targetArn:
      output.targetArn !== undefined && output.targetArn !== null
        ? output.targetArn
        : undefined
  } as any;
};

const deserializeAws_json1_1Destinations = (
  output: any,
  context: __SerdeContext
): Destination[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Destination(entry, context)
  );
};

const deserializeAws_json1_1ExportTask = (
  output: any,
  context: __SerdeContext
): ExportTask => {
  return {
    __type: "ExportTask",
    destination:
      output.destination !== undefined && output.destination !== null
        ? output.destination
        : undefined,
    destinationPrefix:
      output.destinationPrefix !== undefined &&
      output.destinationPrefix !== null
        ? output.destinationPrefix
        : undefined,
    executionInfo:
      output.executionInfo !== undefined && output.executionInfo !== null
        ? deserializeAws_json1_1ExportTaskExecutionInfo(
            output.executionInfo,
            context
          )
        : undefined,
    from:
      output.from !== undefined && output.from !== null
        ? output.from
        : undefined,
    logGroupName:
      output.logGroupName !== undefined && output.logGroupName !== null
        ? output.logGroupName
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_json1_1ExportTaskStatus(output.status, context)
        : undefined,
    taskId:
      output.taskId !== undefined && output.taskId !== null
        ? output.taskId
        : undefined,
    taskName:
      output.taskName !== undefined && output.taskName !== null
        ? output.taskName
        : undefined,
    to: output.to !== undefined && output.to !== null ? output.to : undefined
  } as any;
};

const deserializeAws_json1_1ExportTaskExecutionInfo = (
  output: any,
  context: __SerdeContext
): ExportTaskExecutionInfo => {
  return {
    __type: "ExportTaskExecutionInfo",
    completionTime:
      output.completionTime !== undefined && output.completionTime !== null
        ? output.completionTime
        : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined
  } as any;
};

const deserializeAws_json1_1ExportTasks = (
  output: any,
  context: __SerdeContext
): ExportTask[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExportTask(entry, context)
  );
};

const deserializeAws_json1_1ExportTaskStatus = (
  output: any,
  context: __SerdeContext
): ExportTaskStatus => {
  return {
    __type: "ExportTaskStatus",
    code:
      output.code !== undefined && output.code !== null
        ? output.code
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ExtractedValues = (
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

const deserializeAws_json1_1FilteredLogEvent = (
  output: any,
  context: __SerdeContext
): FilteredLogEvent => {
  return {
    __type: "FilteredLogEvent",
    eventId:
      output.eventId !== undefined && output.eventId !== null
        ? output.eventId
        : undefined,
    ingestionTime:
      output.ingestionTime !== undefined && output.ingestionTime !== null
        ? output.ingestionTime
        : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null
        ? output.logStreamName
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? output.timestamp
        : undefined
  } as any;
};

const deserializeAws_json1_1FilteredLogEvents = (
  output: any,
  context: __SerdeContext
): FilteredLogEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FilteredLogEvent(entry, context)
  );
};

const deserializeAws_json1_1FilterLogEventsResponse = (
  output: any,
  context: __SerdeContext
): FilterLogEventsResponse => {
  return {
    __type: "FilterLogEventsResponse",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1FilteredLogEvents(output.events, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    searchedLogStreams:
      output.searchedLogStreams !== undefined &&
      output.searchedLogStreams !== null
        ? deserializeAws_json1_1SearchedLogStreams(
            output.searchedLogStreams,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetLogEventsResponse = (
  output: any,
  context: __SerdeContext
): GetLogEventsResponse => {
  return {
    __type: "GetLogEventsResponse",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_1OutputLogEvents(output.events, context)
        : undefined,
    nextBackwardToken:
      output.nextBackwardToken !== undefined &&
      output.nextBackwardToken !== null
        ? output.nextBackwardToken
        : undefined,
    nextForwardToken:
      output.nextForwardToken !== undefined && output.nextForwardToken !== null
        ? output.nextForwardToken
        : undefined
  } as any;
};

const deserializeAws_json1_1GetLogGroupFieldsResponse = (
  output: any,
  context: __SerdeContext
): GetLogGroupFieldsResponse => {
  return {
    __type: "GetLogGroupFieldsResponse",
    logGroupFields:
      output.logGroupFields !== undefined && output.logGroupFields !== null
        ? deserializeAws_json1_1LogGroupFieldList(
            output.logGroupFields,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetLogRecordResponse = (
  output: any,
  context: __SerdeContext
): GetLogRecordResponse => {
  return {
    __type: "GetLogRecordResponse",
    logRecord:
      output.logRecord !== undefined && output.logRecord !== null
        ? deserializeAws_json1_1LogRecord(output.logRecord, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetQueryResultsResponse = (
  output: any,
  context: __SerdeContext
): GetQueryResultsResponse => {
  return {
    __type: "GetQueryResultsResponse",
    results:
      output.results !== undefined && output.results !== null
        ? deserializeAws_json1_1QueryResults(output.results, context)
        : undefined,
    statistics:
      output.statistics !== undefined && output.statistics !== null
        ? deserializeAws_json1_1QueryStatistics(output.statistics, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    __type: "InvalidOperationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidSequenceTokenException = (
  output: any,
  context: __SerdeContext
): InvalidSequenceTokenException => {
  return {
    __type: "InvalidSequenceTokenException",
    expectedSequenceToken:
      output.expectedSequenceToken !== undefined &&
      output.expectedSequenceToken !== null
        ? output.expectedSequenceToken
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
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

const deserializeAws_json1_1ListTagsLogGroupResponse = (
  output: any,
  context: __SerdeContext
): ListTagsLogGroupResponse => {
  return {
    __type: "ListTagsLogGroupResponse",
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1Tags(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LogGroup = (
  output: any,
  context: __SerdeContext
): LogGroup => {
  return {
    __type: "LogGroup",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    kmsKeyId:
      output.kmsKeyId !== undefined && output.kmsKeyId !== null
        ? output.kmsKeyId
        : undefined,
    logGroupName:
      output.logGroupName !== undefined && output.logGroupName !== null
        ? output.logGroupName
        : undefined,
    metricFilterCount:
      output.metricFilterCount !== undefined &&
      output.metricFilterCount !== null
        ? output.metricFilterCount
        : undefined,
    retentionInDays:
      output.retentionInDays !== undefined && output.retentionInDays !== null
        ? output.retentionInDays
        : undefined,
    storedBytes:
      output.storedBytes !== undefined && output.storedBytes !== null
        ? output.storedBytes
        : undefined
  } as any;
};

const deserializeAws_json1_1LogGroupField = (
  output: any,
  context: __SerdeContext
): LogGroupField => {
  return {
    __type: "LogGroupField",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    percent:
      output.percent !== undefined && output.percent !== null
        ? output.percent
        : undefined
  } as any;
};

const deserializeAws_json1_1LogGroupFieldList = (
  output: any,
  context: __SerdeContext
): LogGroupField[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogGroupField(entry, context)
  );
};

const deserializeAws_json1_1LogGroups = (
  output: any,
  context: __SerdeContext
): LogGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogGroup(entry, context)
  );
};

const deserializeAws_json1_1LogRecord = (
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

const deserializeAws_json1_1LogStream = (
  output: any,
  context: __SerdeContext
): LogStream => {
  return {
    __type: "LogStream",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    firstEventTimestamp:
      output.firstEventTimestamp !== undefined &&
      output.firstEventTimestamp !== null
        ? output.firstEventTimestamp
        : undefined,
    lastEventTimestamp:
      output.lastEventTimestamp !== undefined &&
      output.lastEventTimestamp !== null
        ? output.lastEventTimestamp
        : undefined,
    lastIngestionTime:
      output.lastIngestionTime !== undefined &&
      output.lastIngestionTime !== null
        ? output.lastIngestionTime
        : undefined,
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null
        ? output.logStreamName
        : undefined,
    storedBytes:
      output.storedBytes !== undefined && output.storedBytes !== null
        ? output.storedBytes
        : undefined,
    uploadSequenceToken:
      output.uploadSequenceToken !== undefined &&
      output.uploadSequenceToken !== null
        ? output.uploadSequenceToken
        : undefined
  } as any;
};

const deserializeAws_json1_1LogStreams = (
  output: any,
  context: __SerdeContext
): LogStream[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogStream(entry, context)
  );
};

const deserializeAws_json1_1MalformedQueryException = (
  output: any,
  context: __SerdeContext
): MalformedQueryException => {
  return {
    __type: "MalformedQueryException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    queryCompileError:
      output.queryCompileError !== undefined &&
      output.queryCompileError !== null
        ? deserializeAws_json1_1QueryCompileError(
            output.queryCompileError,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricFilter = (
  output: any,
  context: __SerdeContext
): MetricFilter => {
  return {
    __type: "MetricFilter",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    filterName:
      output.filterName !== undefined && output.filterName !== null
        ? output.filterName
        : undefined,
    filterPattern:
      output.filterPattern !== undefined && output.filterPattern !== null
        ? output.filterPattern
        : undefined,
    logGroupName:
      output.logGroupName !== undefined && output.logGroupName !== null
        ? output.logGroupName
        : undefined,
    metricTransformations:
      output.metricTransformations !== undefined &&
      output.metricTransformations !== null
        ? deserializeAws_json1_1MetricTransformations(
            output.metricTransformations,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricFilterMatches = (
  output: any,
  context: __SerdeContext
): MetricFilterMatchRecord[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricFilterMatchRecord(entry, context)
  );
};

const deserializeAws_json1_1MetricFilterMatchRecord = (
  output: any,
  context: __SerdeContext
): MetricFilterMatchRecord => {
  return {
    __type: "MetricFilterMatchRecord",
    eventMessage:
      output.eventMessage !== undefined && output.eventMessage !== null
        ? output.eventMessage
        : undefined,
    eventNumber:
      output.eventNumber !== undefined && output.eventNumber !== null
        ? output.eventNumber
        : undefined,
    extractedValues:
      output.extractedValues !== undefined && output.extractedValues !== null
        ? deserializeAws_json1_1ExtractedValues(output.extractedValues, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricFilters = (
  output: any,
  context: __SerdeContext
): MetricFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricFilter(entry, context)
  );
};

const deserializeAws_json1_1MetricTransformation = (
  output: any,
  context: __SerdeContext
): MetricTransformation => {
  return {
    __type: "MetricTransformation",
    defaultValue:
      output.defaultValue !== undefined && output.defaultValue !== null
        ? output.defaultValue
        : undefined,
    metricName:
      output.metricName !== undefined && output.metricName !== null
        ? output.metricName
        : undefined,
    metricNamespace:
      output.metricNamespace !== undefined && output.metricNamespace !== null
        ? output.metricNamespace
        : undefined,
    metricValue:
      output.metricValue !== undefined && output.metricValue !== null
        ? output.metricValue
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricTransformations = (
  output: any,
  context: __SerdeContext
): MetricTransformation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricTransformation(entry, context)
  );
};

const deserializeAws_json1_1OperationAbortedException = (
  output: any,
  context: __SerdeContext
): OperationAbortedException => {
  return {
    __type: "OperationAbortedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputLogEvent = (
  output: any,
  context: __SerdeContext
): OutputLogEvent => {
  return {
    __type: "OutputLogEvent",
    ingestionTime:
      output.ingestionTime !== undefined && output.ingestionTime !== null
        ? output.ingestionTime
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    timestamp:
      output.timestamp !== undefined && output.timestamp !== null
        ? output.timestamp
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputLogEvents = (
  output: any,
  context: __SerdeContext
): OutputLogEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OutputLogEvent(entry, context)
  );
};

const deserializeAws_json1_1PutDestinationResponse = (
  output: any,
  context: __SerdeContext
): PutDestinationResponse => {
  return {
    __type: "PutDestinationResponse",
    destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_json1_1Destination(output.destination, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutLogEventsResponse = (
  output: any,
  context: __SerdeContext
): PutLogEventsResponse => {
  return {
    __type: "PutLogEventsResponse",
    nextSequenceToken:
      output.nextSequenceToken !== undefined &&
      output.nextSequenceToken !== null
        ? output.nextSequenceToken
        : undefined,
    rejectedLogEventsInfo:
      output.rejectedLogEventsInfo !== undefined &&
      output.rejectedLogEventsInfo !== null
        ? deserializeAws_json1_1RejectedLogEventsInfo(
            output.rejectedLogEventsInfo,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  return {
    __type: "PutResourcePolicyResponse",
    resourcePolicy:
      output.resourcePolicy !== undefined && output.resourcePolicy !== null
        ? deserializeAws_json1_1ResourcePolicy(output.resourcePolicy, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryCompileError = (
  output: any,
  context: __SerdeContext
): QueryCompileError => {
  return {
    __type: "QueryCompileError",
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1QueryCompileErrorLocation(
            output.location,
            context
          )
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryCompileErrorLocation = (
  output: any,
  context: __SerdeContext
): QueryCompileErrorLocation => {
  return {
    __type: "QueryCompileErrorLocation",
    endCharOffset:
      output.endCharOffset !== undefined && output.endCharOffset !== null
        ? output.endCharOffset
        : undefined,
    startCharOffset:
      output.startCharOffset !== undefined && output.startCharOffset !== null
        ? output.startCharOffset
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryInfo = (
  output: any,
  context: __SerdeContext
): QueryInfo => {
  return {
    __type: "QueryInfo",
    createTime:
      output.createTime !== undefined && output.createTime !== null
        ? output.createTime
        : undefined,
    logGroupName:
      output.logGroupName !== undefined && output.logGroupName !== null
        ? output.logGroupName
        : undefined,
    queryId:
      output.queryId !== undefined && output.queryId !== null
        ? output.queryId
        : undefined,
    queryString:
      output.queryString !== undefined && output.queryString !== null
        ? output.queryString
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryInfoList = (
  output: any,
  context: __SerdeContext
): QueryInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QueryInfo(entry, context)
  );
};

const deserializeAws_json1_1QueryResults = (
  output: any,
  context: __SerdeContext
): ResultField[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResultRows(entry, context)
  );
};

const deserializeAws_json1_1QueryStatistics = (
  output: any,
  context: __SerdeContext
): QueryStatistics => {
  return {
    __type: "QueryStatistics",
    bytesScanned:
      output.bytesScanned !== undefined && output.bytesScanned !== null
        ? output.bytesScanned
        : undefined,
    recordsMatched:
      output.recordsMatched !== undefined && output.recordsMatched !== null
        ? output.recordsMatched
        : undefined,
    recordsScanned:
      output.recordsScanned !== undefined && output.recordsScanned !== null
        ? output.recordsScanned
        : undefined
  } as any;
};

const deserializeAws_json1_1RejectedLogEventsInfo = (
  output: any,
  context: __SerdeContext
): RejectedLogEventsInfo => {
  return {
    __type: "RejectedLogEventsInfo",
    expiredLogEventEndIndex:
      output.expiredLogEventEndIndex !== undefined &&
      output.expiredLogEventEndIndex !== null
        ? output.expiredLogEventEndIndex
        : undefined,
    tooNewLogEventStartIndex:
      output.tooNewLogEventStartIndex !== undefined &&
      output.tooNewLogEventStartIndex !== null
        ? output.tooNewLogEventStartIndex
        : undefined,
    tooOldLogEventEndIndex:
      output.tooOldLogEventEndIndex !== undefined &&
      output.tooOldLogEventEndIndex !== null
        ? output.tooOldLogEventEndIndex
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
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

const deserializeAws_json1_1ResourcePolicies = (
  output: any,
  context: __SerdeContext
): ResourcePolicy[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourcePolicy(entry, context)
  );
};

const deserializeAws_json1_1ResourcePolicy = (
  output: any,
  context: __SerdeContext
): ResourcePolicy => {
  return {
    __type: "ResourcePolicy",
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? output.lastUpdatedTime
        : undefined,
    policyDocument:
      output.policyDocument !== undefined && output.policyDocument !== null
        ? output.policyDocument
        : undefined,
    policyName:
      output.policyName !== undefined && output.policyName !== null
        ? output.policyName
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultField = (
  output: any,
  context: __SerdeContext
): ResultField => {
  return {
    __type: "ResultField",
    field:
      output.field !== undefined && output.field !== null
        ? output.field
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_json1_1ResultRows = (
  output: any,
  context: __SerdeContext
): ResultField[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResultField(entry, context)
  );
};

const deserializeAws_json1_1SearchedLogStream = (
  output: any,
  context: __SerdeContext
): SearchedLogStream => {
  return {
    __type: "SearchedLogStream",
    logStreamName:
      output.logStreamName !== undefined && output.logStreamName !== null
        ? output.logStreamName
        : undefined,
    searchedCompletely:
      output.searchedCompletely !== undefined &&
      output.searchedCompletely !== null
        ? output.searchedCompletely
        : undefined
  } as any;
};

const deserializeAws_json1_1SearchedLogStreams = (
  output: any,
  context: __SerdeContext
): SearchedLogStream[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SearchedLogStream(entry, context)
  );
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1StartQueryResponse = (
  output: any,
  context: __SerdeContext
): StartQueryResponse => {
  return {
    __type: "StartQueryResponse",
    queryId:
      output.queryId !== undefined && output.queryId !== null
        ? output.queryId
        : undefined
  } as any;
};

const deserializeAws_json1_1StopQueryResponse = (
  output: any,
  context: __SerdeContext
): StopQueryResponse => {
  return {
    __type: "StopQueryResponse",
    success:
      output.success !== undefined && output.success !== null
        ? output.success
        : undefined
  } as any;
};

const deserializeAws_json1_1SubscriptionFilter = (
  output: any,
  context: __SerdeContext
): SubscriptionFilter => {
  return {
    __type: "SubscriptionFilter",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? output.creationTime
        : undefined,
    destinationArn:
      output.destinationArn !== undefined && output.destinationArn !== null
        ? output.destinationArn
        : undefined,
    distribution:
      output.distribution !== undefined && output.distribution !== null
        ? output.distribution
        : undefined,
    filterName:
      output.filterName !== undefined && output.filterName !== null
        ? output.filterName
        : undefined,
    filterPattern:
      output.filterPattern !== undefined && output.filterPattern !== null
        ? output.filterPattern
        : undefined,
    logGroupName:
      output.logGroupName !== undefined && output.logGroupName !== null
        ? output.logGroupName
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_json1_1SubscriptionFilters = (
  output: any,
  context: __SerdeContext
): SubscriptionFilter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SubscriptionFilter(entry, context)
  );
};

const deserializeAws_json1_1Tags = (
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

const deserializeAws_json1_1TestMetricFilterResponse = (
  output: any,
  context: __SerdeContext
): TestMetricFilterResponse => {
  return {
    __type: "TestMetricFilterResponse",
    matches:
      output.matches !== undefined && output.matches !== null
        ? deserializeAws_json1_1MetricFilterMatches(output.matches, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UnrecognizedClientException = (
  output: any,
  context: __SerdeContext
): UnrecognizedClientException => {
  return {
    __type: "UnrecognizedClientException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
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
