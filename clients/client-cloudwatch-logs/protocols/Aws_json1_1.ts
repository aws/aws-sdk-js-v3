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

export async function serializeAws_json1_1AssociateKmsKeyCommand(
  input: AssociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.AssociateKmsKey";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateKmsKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CancelExportTaskCommand(
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.CancelExportTask";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CancelExportTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateExportTaskCommand(
  input: CreateExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.CreateExportTask";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateExportTaskRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateLogGroupCommand(
  input: CreateLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.CreateLogGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateLogStreamCommand(
  input: CreateLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.CreateLogStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLogStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDestinationCommand(
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteDestination";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDestinationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteLogGroupCommand(
  input: DeleteLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteLogGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteLogStreamCommand(
  input: DeleteLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteLogStream";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLogStreamRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteMetricFilterCommand(
  input: DeleteMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteMetricFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteMetricFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteResourcePolicyCommand(
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteResourcePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRetentionPolicyCommand(
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteRetentionPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRetentionPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSubscriptionFilterCommand(
  input: DeleteSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DeleteSubscriptionFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSubscriptionFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDestinationsCommand(
  input: DescribeDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeDestinations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDestinationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeExportTasksCommand(
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeExportTasks";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeExportTasksRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeLogGroupsCommand(
  input: DescribeLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeLogGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLogGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeLogStreamsCommand(
  input: DescribeLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeLogStreams";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLogStreamsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeMetricFiltersCommand(
  input: DescribeMetricFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeMetricFilters";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeMetricFiltersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeQueriesCommand(
  input: DescribeQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeQueries";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeQueriesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeResourcePoliciesCommand(
  input: DescribeResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeResourcePolicies";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeResourcePoliciesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSubscriptionFiltersCommand(
  input: DescribeSubscriptionFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DescribeSubscriptionFilters";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSubscriptionFiltersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateKmsKeyCommand(
  input: DisassociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.DisassociateKmsKey";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateKmsKeyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1FilterLogEventsCommand(
  input: FilterLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.FilterLogEvents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1FilterLogEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLogEventsCommand(
  input: GetLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.GetLogEvents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLogEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLogGroupFieldsCommand(
  input: GetLogGroupFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.GetLogGroupFields";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLogGroupFieldsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetLogRecordCommand(
  input: GetLogRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.GetLogRecord";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetLogRecordRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetQueryResultsCommand(
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.GetQueryResults";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetQueryResultsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsLogGroupCommand(
  input: ListTagsLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.ListTagsLogGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutDestinationCommand(
  input: PutDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutDestination";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutDestinationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutDestinationPolicyCommand(
  input: PutDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutDestinationPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutDestinationPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutLogEventsCommand(
  input: PutLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutLogEvents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutLogEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutMetricFilterCommand(
  input: PutMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutMetricFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutMetricFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutResourcePolicyCommand(
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutResourcePolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutResourcePolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutRetentionPolicyCommand(
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutRetentionPolicy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutRetentionPolicyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutSubscriptionFilterCommand(
  input: PutSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.PutSubscriptionFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutSubscriptionFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartQueryCommand(
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.StartQuery";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopQueryCommand(
  input: StopQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.StopQuery";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagLogGroupCommand(
  input: TagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.TagLogGroup";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagLogGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TestMetricFilterCommand(
  input: TestMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.TestMetricFilter";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TestMetricFilterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagLogGroupCommand(
  input: UntagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Logs_20140328.UntagLogGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagLogGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateKmsKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateKmsKeyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateKmsKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateKmsKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CancelExportTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CancelExportTaskCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CancelExportTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidOperationException":
    case "com.amazonaws.logs.v20140328#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateExportTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> {
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
}

async function deserializeAws_json1_1CreateExportTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.logs.v20140328#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateLogGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateLogGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.logs.v20140328#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateLogStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateLogStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.logs.v20140328#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDestinationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDestinationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteLogGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLogGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteLogStreamCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLogStreamCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteLogStreamCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteMetricFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteMetricFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteResourcePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteResourcePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteRetentionPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteRetentionPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteSubscriptionFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteSubscriptionFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeDestinationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeDestinationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeExportTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeExportTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeLogGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeLogGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeLogStreamsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeLogStreamsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeMetricFiltersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeMetricFiltersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeQueriesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeQueriesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeResourcePoliciesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeResourcePoliciesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSubscriptionFiltersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSubscriptionFiltersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DisassociateKmsKeyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> {
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
}

async function deserializeAws_json1_1DisassociateKmsKeyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1FilterLogEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> {
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
}

async function deserializeAws_json1_1FilterLogEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetLogEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> {
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
}

async function deserializeAws_json1_1GetLogEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetLogGroupFieldsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> {
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
}

async function deserializeAws_json1_1GetLogGroupFieldsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetLogRecordCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> {
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
}

async function deserializeAws_json1_1GetLogRecordCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetQueryResultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> {
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
}

async function deserializeAws_json1_1GetQueryResultsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsLogGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsLogGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> {
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
}

async function deserializeAws_json1_1PutDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutDestinationPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> {
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
}

async function deserializeAws_json1_1PutDestinationPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutLogEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> {
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
}

async function deserializeAws_json1_1PutLogEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DataAlreadyAcceptedException":
    case "com.amazonaws.logs.v20140328#DataAlreadyAcceptedException":
      response = {
        ...(await deserializeAws_json1_1DataAlreadyAcceptedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSequenceTokenException":
    case "com.amazonaws.logs.v20140328#InvalidSequenceTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidSequenceTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnrecognizedClientException":
    case "com.amazonaws.logs.v20140328#UnrecognizedClientException":
      response = {
        ...(await deserializeAws_json1_1UnrecognizedClientExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutMetricFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutMetricFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutMetricFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutResourcePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> {
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
}

async function deserializeAws_json1_1PutResourcePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutRetentionPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> {
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
}

async function deserializeAws_json1_1PutRetentionPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutSubscriptionFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> {
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
}

async function deserializeAws_json1_1PutSubscriptionFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationAbortedException":
    case "com.amazonaws.logs.v20140328#OperationAbortedException":
      response = {
        ...(await deserializeAws_json1_1OperationAbortedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> {
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
}

async function deserializeAws_json1_1StartQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.logs.v20140328#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedQueryException":
    case "com.amazonaws.logs.v20140328#MalformedQueryException":
      response = {
        ...(await deserializeAws_json1_1MalformedQueryExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopQueryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> {
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
}

async function deserializeAws_json1_1StopQueryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagLogGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagLogGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TestMetricFilterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> {
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
}

async function deserializeAws_json1_1TestMetricFilterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.logs.v20140328#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.logs.v20140328#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagLogGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagLogGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagLogGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.logs.v20140328#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1CancelExportTaskRequest = (
  input: CancelExportTaskRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.taskId !== undefined) {
    bodyParams["taskId"] = input.taskId;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateExportTaskRequest = (
  input: CreateExportTaskRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destination !== undefined) {
    bodyParams["destination"] = input.destination;
  }
  if (input.destinationPrefix !== undefined) {
    bodyParams["destinationPrefix"] = input.destinationPrefix;
  }
  if (input.from !== undefined) {
    bodyParams["from"] = input.from;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamNamePrefix !== undefined) {
    bodyParams["logStreamNamePrefix"] = input.logStreamNamePrefix;
  }
  if (input.taskName !== undefined) {
    bodyParams["taskName"] = input.taskName;
  }
  if (input.to !== undefined) {
    bodyParams["to"] = input.to;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateLogGroupRequest = (
  input: CreateLogGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateLogStreamRequest = (
  input: CreateLogStreamRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamName !== undefined) {
    bodyParams["logStreamName"] = input.logStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDestinationRequest = (
  input: DeleteDestinationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destinationName !== undefined) {
    bodyParams["destinationName"] = input.destinationName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLogGroupRequest = (
  input: DeleteLogGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLogStreamRequest = (
  input: DeleteLogStreamRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamName !== undefined) {
    bodyParams["logStreamName"] = input.logStreamName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteMetricFilterRequest = (
  input: DeleteMetricFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filterName !== undefined) {
    bodyParams["filterName"] = input.filterName;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteResourcePolicyRequest = (
  input: DeleteResourcePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.policyName !== undefined) {
    bodyParams["policyName"] = input.policyName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRetentionPolicyRequest = (
  input: DeleteRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSubscriptionFilterRequest = (
  input: DeleteSubscriptionFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filterName !== undefined) {
    bodyParams["filterName"] = input.filterName;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDestinationsRequest = (
  input: DescribeDestinationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationNamePrefix !== undefined) {
    bodyParams["DestinationNamePrefix"] = input.DestinationNamePrefix;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeExportTasksRequest = (
  input: DescribeExportTasksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.statusCode !== undefined) {
    bodyParams["statusCode"] = input.statusCode;
  }
  if (input.taskId !== undefined) {
    bodyParams["taskId"] = input.taskId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeLogGroupsRequest = (
  input: DescribeLogGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupNamePrefix !== undefined) {
    bodyParams["logGroupNamePrefix"] = input.logGroupNamePrefix;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeLogStreamsRequest = (
  input: DescribeLogStreamsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.descending !== undefined) {
    bodyParams["descending"] = input.descending;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamNamePrefix !== undefined) {
    bodyParams["logStreamNamePrefix"] = input.logStreamNamePrefix;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.orderBy !== undefined) {
    bodyParams["orderBy"] = input.orderBy;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeMetricFiltersRequest = (
  input: DescribeMetricFiltersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filterNamePrefix !== undefined) {
    bodyParams["filterNamePrefix"] = input.filterNamePrefix;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.metricNamespace !== undefined) {
    bodyParams["metricNamespace"] = input.metricNamespace;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeQueriesRequest = (
  input: DescribeQueriesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeResourcePoliciesRequest = (
  input: DescribeResourcePoliciesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSubscriptionFiltersRequest = (
  input: DescribeSubscriptionFiltersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filterNamePrefix !== undefined) {
    bodyParams["filterNamePrefix"] = input.filterNamePrefix;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateKmsKeyRequest = (
  input: DisassociateKmsKeyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1FilterLogEventsRequest = (
  input: FilterLogEventsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = input.endTime;
  }
  if (input.filterPattern !== undefined) {
    bodyParams["filterPattern"] = input.filterPattern;
  }
  if (input.interleaved !== undefined) {
    bodyParams["interleaved"] = input.interleaved;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamNamePrefix !== undefined) {
    bodyParams["logStreamNamePrefix"] = input.logStreamNamePrefix;
  }
  if (input.logStreamNames !== undefined) {
    bodyParams["logStreamNames"] = serializeAws_json1_1InputLogStreamNames(
      input.logStreamNames,
      context
    );
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = input.startTime;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLogEventsRequest = (
  input: GetLogEventsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = input.endTime;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamName !== undefined) {
    bodyParams["logStreamName"] = input.logStreamName;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.startFromHead !== undefined) {
    bodyParams["startFromHead"] = input.startFromHead;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = input.startTime;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLogGroupFieldsRequest = (
  input: GetLogGroupFieldsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.time !== undefined) {
    bodyParams["time"] = input.time;
  }
  return bodyParams;
};

const serializeAws_json1_1GetLogRecordRequest = (
  input: GetLogRecordRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logRecordPointer !== undefined) {
    bodyParams["logRecordPointer"] = input.logRecordPointer;
  }
  return bodyParams;
};

const serializeAws_json1_1GetQueryResultsRequest = (
  input: GetQueryResultsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.queryId !== undefined) {
    bodyParams["queryId"] = input.queryId;
  }
  return bodyParams;
};

const serializeAws_json1_1InputLogEvent = (
  input: InputLogEvent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.message !== undefined) {
    bodyParams["message"] = input.message;
  }
  if (input.timestamp !== undefined) {
    bodyParams["timestamp"] = input.timestamp;
  }
  return bodyParams;
};

const serializeAws_json1_1InputLogEvents = (
  input: Array<InputLogEvent>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InputLogEvent(entry, context));
  }
  return contents;
};

const serializeAws_json1_1InputLogStreamNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListTagsLogGroupRequest = (
  input: ListTagsLogGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  return bodyParams;
};

const serializeAws_json1_1LogGroupNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1MetricTransformation = (
  input: MetricTransformation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.defaultValue !== undefined) {
    bodyParams["defaultValue"] = input.defaultValue;
  }
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.metricNamespace !== undefined) {
    bodyParams["metricNamespace"] = input.metricNamespace;
  }
  if (input.metricValue !== undefined) {
    bodyParams["metricValue"] = input.metricValue;
  }
  return bodyParams;
};

const serializeAws_json1_1MetricTransformations = (
  input: Array<MetricTransformation>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1MetricTransformation(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PutDestinationPolicyRequest = (
  input: PutDestinationPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.accessPolicy !== undefined) {
    bodyParams["accessPolicy"] = input.accessPolicy;
  }
  if (input.destinationName !== undefined) {
    bodyParams["destinationName"] = input.destinationName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutDestinationRequest = (
  input: PutDestinationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destinationName !== undefined) {
    bodyParams["destinationName"] = input.destinationName;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.targetArn !== undefined) {
    bodyParams["targetArn"] = input.targetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1PutLogEventsRequest = (
  input: PutLogEventsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logEvents !== undefined) {
    bodyParams["logEvents"] = serializeAws_json1_1InputLogEvents(
      input.logEvents,
      context
    );
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logStreamName !== undefined) {
    bodyParams["logStreamName"] = input.logStreamName;
  }
  if (input.sequenceToken !== undefined) {
    bodyParams["sequenceToken"] = input.sequenceToken;
  }
  return bodyParams;
};

const serializeAws_json1_1PutMetricFilterRequest = (
  input: PutMetricFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filterName !== undefined) {
    bodyParams["filterName"] = input.filterName;
  }
  if (input.filterPattern !== undefined) {
    bodyParams["filterPattern"] = input.filterPattern;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.metricTransformations !== undefined) {
    bodyParams[
      "metricTransformations"
    ] = serializeAws_json1_1MetricTransformations(
      input.metricTransformations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PutResourcePolicyRequest = (
  input: PutResourcePolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.policyDocument !== undefined) {
    bodyParams["policyDocument"] = input.policyDocument;
  }
  if (input.policyName !== undefined) {
    bodyParams["policyName"] = input.policyName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutRetentionPolicyRequest = (
  input: PutRetentionPolicyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.retentionInDays !== undefined) {
    bodyParams["retentionInDays"] = input.retentionInDays;
  }
  return bodyParams;
};

const serializeAws_json1_1PutSubscriptionFilterRequest = (
  input: PutSubscriptionFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destinationArn !== undefined) {
    bodyParams["destinationArn"] = input.destinationArn;
  }
  if (input.distribution !== undefined) {
    bodyParams["distribution"] = input.distribution;
  }
  if (input.filterName !== undefined) {
    bodyParams["filterName"] = input.filterName;
  }
  if (input.filterPattern !== undefined) {
    bodyParams["filterPattern"] = input.filterPattern;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1StartQueryRequest = (
  input: StartQueryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = input.endTime;
  }
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.logGroupNames !== undefined) {
    bodyParams["logGroupNames"] = serializeAws_json1_1LogGroupNames(
      input.logGroupNames,
      context
    );
  }
  if (input.queryString !== undefined) {
    bodyParams["queryString"] = input.queryString;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = input.startTime;
  }
  return bodyParams;
};

const serializeAws_json1_1StopQueryRequest = (
  input: StopQueryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.queryId !== undefined) {
    bodyParams["queryId"] = input.queryId;
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagLogGroupRequest = (
  input: TagLogGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1Tags(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1TestEventMessages = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TestMetricFilterRequest = (
  input: TestMetricFilterRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filterPattern !== undefined) {
    bodyParams["filterPattern"] = input.filterPattern;
  }
  if (input.logEventMessages !== undefined) {
    bodyParams["logEventMessages"] = serializeAws_json1_1TestEventMessages(
      input.logEventMessages,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UntagLogGroupRequest = (
  input: UntagLogGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupName !== undefined) {
    bodyParams["logGroupName"] = input.logGroupName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1TagList(input.tags, context);
  }
  return bodyParams;
};

const deserializeAws_json1_1CreateExportTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateExportTaskResponse => {
  let contents: any = {
    __type: "CreateExportTaskResponse",
    taskId: undefined
  };
  if (output.taskId !== undefined && output.taskId !== null) {
    contents.taskId = output.taskId;
  }
  return contents;
};

const deserializeAws_json1_1DataAlreadyAcceptedException = (
  output: any,
  context: __SerdeContext
): DataAlreadyAcceptedException => {
  let contents: any = {
    __type: "DataAlreadyAcceptedException",
    expectedSequenceToken: undefined,
    message: undefined
  };
  if (
    output.expectedSequenceToken !== undefined &&
    output.expectedSequenceToken !== null
  ) {
    contents.expectedSequenceToken = output.expectedSequenceToken;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DescribeDestinationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDestinationsResponse => {
  let contents: any = {
    __type: "DescribeDestinationsResponse",
    destinations: undefined,
    nextToken: undefined
  };
  if (output.destinations !== undefined && output.destinations !== null) {
    contents.destinations = deserializeAws_json1_1Destinations(
      output.destinations,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeExportTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeExportTasksResponse => {
  let contents: any = {
    __type: "DescribeExportTasksResponse",
    exportTasks: undefined,
    nextToken: undefined
  };
  if (output.exportTasks !== undefined && output.exportTasks !== null) {
    contents.exportTasks = deserializeAws_json1_1ExportTasks(
      output.exportTasks,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeLogGroupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogGroupsResponse => {
  let contents: any = {
    __type: "DescribeLogGroupsResponse",
    logGroups: undefined,
    nextToken: undefined
  };
  if (output.logGroups !== undefined && output.logGroups !== null) {
    contents.logGroups = deserializeAws_json1_1LogGroups(
      output.logGroups,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeLogStreamsResponse = (
  output: any,
  context: __SerdeContext
): DescribeLogStreamsResponse => {
  let contents: any = {
    __type: "DescribeLogStreamsResponse",
    logStreams: undefined,
    nextToken: undefined
  };
  if (output.logStreams !== undefined && output.logStreams !== null) {
    contents.logStreams = deserializeAws_json1_1LogStreams(
      output.logStreams,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeMetricFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeMetricFiltersResponse => {
  let contents: any = {
    __type: "DescribeMetricFiltersResponse",
    metricFilters: undefined,
    nextToken: undefined
  };
  if (output.metricFilters !== undefined && output.metricFilters !== null) {
    contents.metricFilters = deserializeAws_json1_1MetricFilters(
      output.metricFilters,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeQueriesResponse = (
  output: any,
  context: __SerdeContext
): DescribeQueriesResponse => {
  let contents: any = {
    __type: "DescribeQueriesResponse",
    nextToken: undefined,
    queries: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.queries !== undefined && output.queries !== null) {
    contents.queries = deserializeAws_json1_1QueryInfoList(
      output.queries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeResourcePoliciesResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourcePoliciesResponse => {
  let contents: any = {
    __type: "DescribeResourcePoliciesResponse",
    nextToken: undefined,
    resourcePolicies: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.resourcePolicies !== undefined &&
    output.resourcePolicies !== null
  ) {
    contents.resourcePolicies = deserializeAws_json1_1ResourcePolicies(
      output.resourcePolicies,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSubscriptionFiltersResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionFiltersResponse => {
  let contents: any = {
    __type: "DescribeSubscriptionFiltersResponse",
    nextToken: undefined,
    subscriptionFilters: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.subscriptionFilters !== undefined &&
    output.subscriptionFilters !== null
  ) {
    contents.subscriptionFilters = deserializeAws_json1_1SubscriptionFilters(
      output.subscriptionFilters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Destination = (
  output: any,
  context: __SerdeContext
): Destination => {
  let contents: any = {
    __type: "Destination",
    accessPolicy: undefined,
    arn: undefined,
    creationTime: undefined,
    destinationName: undefined,
    roleArn: undefined,
    targetArn: undefined
  };
  if (output.accessPolicy !== undefined && output.accessPolicy !== null) {
    contents.accessPolicy = output.accessPolicy;
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = output.creationTime;
  }
  if (output.destinationName !== undefined && output.destinationName !== null) {
    contents.destinationName = output.destinationName;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.targetArn !== undefined && output.targetArn !== null) {
    contents.targetArn = output.targetArn;
  }
  return contents;
};

const deserializeAws_json1_1Destinations = (
  output: any,
  context: __SerdeContext
): Array<Destination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Destination(entry, context)
  );
};

const deserializeAws_json1_1ExportTask = (
  output: any,
  context: __SerdeContext
): ExportTask => {
  let contents: any = {
    __type: "ExportTask",
    destination: undefined,
    destinationPrefix: undefined,
    executionInfo: undefined,
    from: undefined,
    logGroupName: undefined,
    status: undefined,
    taskId: undefined,
    taskName: undefined,
    to: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.destination = output.destination;
  }
  if (
    output.destinationPrefix !== undefined &&
    output.destinationPrefix !== null
  ) {
    contents.destinationPrefix = output.destinationPrefix;
  }
  if (output.executionInfo !== undefined && output.executionInfo !== null) {
    contents.executionInfo = deserializeAws_json1_1ExportTaskExecutionInfo(
      output.executionInfo,
      context
    );
  }
  if (output.from !== undefined && output.from !== null) {
    contents.from = output.from;
  }
  if (output.logGroupName !== undefined && output.logGroupName !== null) {
    contents.logGroupName = output.logGroupName;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = deserializeAws_json1_1ExportTaskStatus(
      output.status,
      context
    );
  }
  if (output.taskId !== undefined && output.taskId !== null) {
    contents.taskId = output.taskId;
  }
  if (output.taskName !== undefined && output.taskName !== null) {
    contents.taskName = output.taskName;
  }
  if (output.to !== undefined && output.to !== null) {
    contents.to = output.to;
  }
  return contents;
};

const deserializeAws_json1_1ExportTaskExecutionInfo = (
  output: any,
  context: __SerdeContext
): ExportTaskExecutionInfo => {
  let contents: any = {
    __type: "ExportTaskExecutionInfo",
    completionTime: undefined,
    creationTime: undefined
  };
  if (output.completionTime !== undefined && output.completionTime !== null) {
    contents.completionTime = output.completionTime;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = output.creationTime;
  }
  return contents;
};

const deserializeAws_json1_1ExportTaskStatus = (
  output: any,
  context: __SerdeContext
): ExportTaskStatus => {
  let contents: any = {
    __type: "ExportTaskStatus",
    code: undefined,
    message: undefined
  };
  if (output.code !== undefined && output.code !== null) {
    contents.code = output.code;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ExportTasks = (
  output: any,
  context: __SerdeContext
): Array<ExportTask> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExportTask(entry, context)
  );
};

const deserializeAws_json1_1ExtractedValues = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1FilterLogEventsResponse = (
  output: any,
  context: __SerdeContext
): FilterLogEventsResponse => {
  let contents: any = {
    __type: "FilterLogEventsResponse",
    events: undefined,
    nextToken: undefined,
    searchedLogStreams: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_json1_1FilteredLogEvents(
      output.events,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.searchedLogStreams !== undefined &&
    output.searchedLogStreams !== null
  ) {
    contents.searchedLogStreams = deserializeAws_json1_1SearchedLogStreams(
      output.searchedLogStreams,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FilteredLogEvent = (
  output: any,
  context: __SerdeContext
): FilteredLogEvent => {
  let contents: any = {
    __type: "FilteredLogEvent",
    eventId: undefined,
    ingestionTime: undefined,
    logStreamName: undefined,
    message: undefined,
    timestamp: undefined
  };
  if (output.eventId !== undefined && output.eventId !== null) {
    contents.eventId = output.eventId;
  }
  if (output.ingestionTime !== undefined && output.ingestionTime !== null) {
    contents.ingestionTime = output.ingestionTime;
  }
  if (output.logStreamName !== undefined && output.logStreamName !== null) {
    contents.logStreamName = output.logStreamName;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = output.timestamp;
  }
  return contents;
};

const deserializeAws_json1_1FilteredLogEvents = (
  output: any,
  context: __SerdeContext
): Array<FilteredLogEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FilteredLogEvent(entry, context)
  );
};

const deserializeAws_json1_1GetLogEventsResponse = (
  output: any,
  context: __SerdeContext
): GetLogEventsResponse => {
  let contents: any = {
    __type: "GetLogEventsResponse",
    events: undefined,
    nextBackwardToken: undefined,
    nextForwardToken: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_json1_1OutputLogEvents(
      output.events,
      context
    );
  }
  if (
    output.nextBackwardToken !== undefined &&
    output.nextBackwardToken !== null
  ) {
    contents.nextBackwardToken = output.nextBackwardToken;
  }
  if (
    output.nextForwardToken !== undefined &&
    output.nextForwardToken !== null
  ) {
    contents.nextForwardToken = output.nextForwardToken;
  }
  return contents;
};

const deserializeAws_json1_1GetLogGroupFieldsResponse = (
  output: any,
  context: __SerdeContext
): GetLogGroupFieldsResponse => {
  let contents: any = {
    __type: "GetLogGroupFieldsResponse",
    logGroupFields: undefined
  };
  if (output.logGroupFields !== undefined && output.logGroupFields !== null) {
    contents.logGroupFields = deserializeAws_json1_1LogGroupFieldList(
      output.logGroupFields,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetLogRecordResponse = (
  output: any,
  context: __SerdeContext
): GetLogRecordResponse => {
  let contents: any = {
    __type: "GetLogRecordResponse",
    logRecord: undefined
  };
  if (output.logRecord !== undefined && output.logRecord !== null) {
    contents.logRecord = deserializeAws_json1_1LogRecord(
      output.logRecord,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetQueryResultsResponse = (
  output: any,
  context: __SerdeContext
): GetQueryResultsResponse => {
  let contents: any = {
    __type: "GetQueryResultsResponse",
    results: undefined,
    statistics: undefined,
    status: undefined
  };
  if (output.results !== undefined && output.results !== null) {
    contents.results = deserializeAws_json1_1QueryResults(
      output.results,
      context
    );
  }
  if (output.statistics !== undefined && output.statistics !== null) {
    contents.statistics = deserializeAws_json1_1QueryStatistics(
      output.statistics,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    __type: "InvalidOperationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidSequenceTokenException = (
  output: any,
  context: __SerdeContext
): InvalidSequenceTokenException => {
  let contents: any = {
    __type: "InvalidSequenceTokenException",
    expectedSequenceToken: undefined,
    message: undefined
  };
  if (
    output.expectedSequenceToken !== undefined &&
    output.expectedSequenceToken !== null
  ) {
    contents.expectedSequenceToken = output.expectedSequenceToken;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsLogGroupResponse = (
  output: any,
  context: __SerdeContext
): ListTagsLogGroupResponse => {
  let contents: any = {
    __type: "ListTagsLogGroupResponse",
    tags: undefined
  };
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1LogGroup = (
  output: any,
  context: __SerdeContext
): LogGroup => {
  let contents: any = {
    __type: "LogGroup",
    arn: undefined,
    creationTime: undefined,
    kmsKeyId: undefined,
    logGroupName: undefined,
    metricFilterCount: undefined,
    retentionInDays: undefined,
    storedBytes: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = output.creationTime;
  }
  if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
    contents.kmsKeyId = output.kmsKeyId;
  }
  if (output.logGroupName !== undefined && output.logGroupName !== null) {
    contents.logGroupName = output.logGroupName;
  }
  if (
    output.metricFilterCount !== undefined &&
    output.metricFilterCount !== null
  ) {
    contents.metricFilterCount = output.metricFilterCount;
  }
  if (output.retentionInDays !== undefined && output.retentionInDays !== null) {
    contents.retentionInDays = output.retentionInDays;
  }
  if (output.storedBytes !== undefined && output.storedBytes !== null) {
    contents.storedBytes = output.storedBytes;
  }
  return contents;
};

const deserializeAws_json1_1LogGroupField = (
  output: any,
  context: __SerdeContext
): LogGroupField => {
  let contents: any = {
    __type: "LogGroupField",
    name: undefined,
    percent: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.percent !== undefined && output.percent !== null) {
    contents.percent = output.percent;
  }
  return contents;
};

const deserializeAws_json1_1LogGroupFieldList = (
  output: any,
  context: __SerdeContext
): Array<LogGroupField> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogGroupField(entry, context)
  );
};

const deserializeAws_json1_1LogGroups = (
  output: any,
  context: __SerdeContext
): Array<LogGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogGroup(entry, context)
  );
};

const deserializeAws_json1_1LogRecord = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1LogStream = (
  output: any,
  context: __SerdeContext
): LogStream => {
  let contents: any = {
    __type: "LogStream",
    arn: undefined,
    creationTime: undefined,
    firstEventTimestamp: undefined,
    lastEventTimestamp: undefined,
    lastIngestionTime: undefined,
    logStreamName: undefined,
    storedBytes: undefined,
    uploadSequenceToken: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = output.creationTime;
  }
  if (
    output.firstEventTimestamp !== undefined &&
    output.firstEventTimestamp !== null
  ) {
    contents.firstEventTimestamp = output.firstEventTimestamp;
  }
  if (
    output.lastEventTimestamp !== undefined &&
    output.lastEventTimestamp !== null
  ) {
    contents.lastEventTimestamp = output.lastEventTimestamp;
  }
  if (
    output.lastIngestionTime !== undefined &&
    output.lastIngestionTime !== null
  ) {
    contents.lastIngestionTime = output.lastIngestionTime;
  }
  if (output.logStreamName !== undefined && output.logStreamName !== null) {
    contents.logStreamName = output.logStreamName;
  }
  if (output.storedBytes !== undefined && output.storedBytes !== null) {
    contents.storedBytes = output.storedBytes;
  }
  if (
    output.uploadSequenceToken !== undefined &&
    output.uploadSequenceToken !== null
  ) {
    contents.uploadSequenceToken = output.uploadSequenceToken;
  }
  return contents;
};

const deserializeAws_json1_1LogStreams = (
  output: any,
  context: __SerdeContext
): Array<LogStream> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1LogStream(entry, context)
  );
};

const deserializeAws_json1_1MalformedQueryException = (
  output: any,
  context: __SerdeContext
): MalformedQueryException => {
  let contents: any = {
    __type: "MalformedQueryException",
    message: undefined,
    queryCompileError: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (
    output.queryCompileError !== undefined &&
    output.queryCompileError !== null
  ) {
    contents.queryCompileError = deserializeAws_json1_1QueryCompileError(
      output.queryCompileError,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MetricFilter = (
  output: any,
  context: __SerdeContext
): MetricFilter => {
  let contents: any = {
    __type: "MetricFilter",
    creationTime: undefined,
    filterName: undefined,
    filterPattern: undefined,
    logGroupName: undefined,
    metricTransformations: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = output.creationTime;
  }
  if (output.filterName !== undefined && output.filterName !== null) {
    contents.filterName = output.filterName;
  }
  if (output.filterPattern !== undefined && output.filterPattern !== null) {
    contents.filterPattern = output.filterPattern;
  }
  if (output.logGroupName !== undefined && output.logGroupName !== null) {
    contents.logGroupName = output.logGroupName;
  }
  if (
    output.metricTransformations !== undefined &&
    output.metricTransformations !== null
  ) {
    contents.metricTransformations = deserializeAws_json1_1MetricTransformations(
      output.metricTransformations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MetricFilterMatchRecord = (
  output: any,
  context: __SerdeContext
): MetricFilterMatchRecord => {
  let contents: any = {
    __type: "MetricFilterMatchRecord",
    eventMessage: undefined,
    eventNumber: undefined,
    extractedValues: undefined
  };
  if (output.eventMessage !== undefined && output.eventMessage !== null) {
    contents.eventMessage = output.eventMessage;
  }
  if (output.eventNumber !== undefined && output.eventNumber !== null) {
    contents.eventNumber = output.eventNumber;
  }
  if (output.extractedValues !== undefined && output.extractedValues !== null) {
    contents.extractedValues = deserializeAws_json1_1ExtractedValues(
      output.extractedValues,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MetricFilterMatches = (
  output: any,
  context: __SerdeContext
): Array<MetricFilterMatchRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricFilterMatchRecord(entry, context)
  );
};

const deserializeAws_json1_1MetricFilters = (
  output: any,
  context: __SerdeContext
): Array<MetricFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricFilter(entry, context)
  );
};

const deserializeAws_json1_1MetricTransformation = (
  output: any,
  context: __SerdeContext
): MetricTransformation => {
  let contents: any = {
    __type: "MetricTransformation",
    defaultValue: undefined,
    metricName: undefined,
    metricNamespace: undefined,
    metricValue: undefined
  };
  if (output.defaultValue !== undefined && output.defaultValue !== null) {
    contents.defaultValue = output.defaultValue;
  }
  if (output.metricName !== undefined && output.metricName !== null) {
    contents.metricName = output.metricName;
  }
  if (output.metricNamespace !== undefined && output.metricNamespace !== null) {
    contents.metricNamespace = output.metricNamespace;
  }
  if (output.metricValue !== undefined && output.metricValue !== null) {
    contents.metricValue = output.metricValue;
  }
  return contents;
};

const deserializeAws_json1_1MetricTransformations = (
  output: any,
  context: __SerdeContext
): Array<MetricTransformation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1MetricTransformation(entry, context)
  );
};

const deserializeAws_json1_1OperationAbortedException = (
  output: any,
  context: __SerdeContext
): OperationAbortedException => {
  let contents: any = {
    __type: "OperationAbortedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OutputLogEvent = (
  output: any,
  context: __SerdeContext
): OutputLogEvent => {
  let contents: any = {
    __type: "OutputLogEvent",
    ingestionTime: undefined,
    message: undefined,
    timestamp: undefined
  };
  if (output.ingestionTime !== undefined && output.ingestionTime !== null) {
    contents.ingestionTime = output.ingestionTime;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = output.timestamp;
  }
  return contents;
};

const deserializeAws_json1_1OutputLogEvents = (
  output: any,
  context: __SerdeContext
): Array<OutputLogEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OutputLogEvent(entry, context)
  );
};

const deserializeAws_json1_1PutDestinationResponse = (
  output: any,
  context: __SerdeContext
): PutDestinationResponse => {
  let contents: any = {
    __type: "PutDestinationResponse",
    destination: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.destination = deserializeAws_json1_1Destination(
      output.destination,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutLogEventsResponse = (
  output: any,
  context: __SerdeContext
): PutLogEventsResponse => {
  let contents: any = {
    __type: "PutLogEventsResponse",
    nextSequenceToken: undefined,
    rejectedLogEventsInfo: undefined
  };
  if (
    output.nextSequenceToken !== undefined &&
    output.nextSequenceToken !== null
  ) {
    contents.nextSequenceToken = output.nextSequenceToken;
  }
  if (
    output.rejectedLogEventsInfo !== undefined &&
    output.rejectedLogEventsInfo !== null
  ) {
    contents.rejectedLogEventsInfo = deserializeAws_json1_1RejectedLogEventsInfo(
      output.rejectedLogEventsInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutResourcePolicyResponse = (
  output: any,
  context: __SerdeContext
): PutResourcePolicyResponse => {
  let contents: any = {
    __type: "PutResourcePolicyResponse",
    resourcePolicy: undefined
  };
  if (output.resourcePolicy !== undefined && output.resourcePolicy !== null) {
    contents.resourcePolicy = deserializeAws_json1_1ResourcePolicy(
      output.resourcePolicy,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1QueryCompileError = (
  output: any,
  context: __SerdeContext
): QueryCompileError => {
  let contents: any = {
    __type: "QueryCompileError",
    location: undefined,
    message: undefined
  };
  if (output.location !== undefined && output.location !== null) {
    contents.location = deserializeAws_json1_1QueryCompileErrorLocation(
      output.location,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1QueryCompileErrorLocation = (
  output: any,
  context: __SerdeContext
): QueryCompileErrorLocation => {
  let contents: any = {
    __type: "QueryCompileErrorLocation",
    endCharOffset: undefined,
    startCharOffset: undefined
  };
  if (output.endCharOffset !== undefined && output.endCharOffset !== null) {
    contents.endCharOffset = output.endCharOffset;
  }
  if (output.startCharOffset !== undefined && output.startCharOffset !== null) {
    contents.startCharOffset = output.startCharOffset;
  }
  return contents;
};

const deserializeAws_json1_1QueryInfo = (
  output: any,
  context: __SerdeContext
): QueryInfo => {
  let contents: any = {
    __type: "QueryInfo",
    createTime: undefined,
    logGroupName: undefined,
    queryId: undefined,
    queryString: undefined,
    status: undefined
  };
  if (output.createTime !== undefined && output.createTime !== null) {
    contents.createTime = output.createTime;
  }
  if (output.logGroupName !== undefined && output.logGroupName !== null) {
    contents.logGroupName = output.logGroupName;
  }
  if (output.queryId !== undefined && output.queryId !== null) {
    contents.queryId = output.queryId;
  }
  if (output.queryString !== undefined && output.queryString !== null) {
    contents.queryString = output.queryString;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1QueryInfoList = (
  output: any,
  context: __SerdeContext
): Array<QueryInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1QueryInfo(entry, context)
  );
};

const deserializeAws_json1_1QueryResults = (
  output: any,
  context: __SerdeContext
): Array<Array<ResultField>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResultRows(entry, context)
  );
};

const deserializeAws_json1_1QueryStatistics = (
  output: any,
  context: __SerdeContext
): QueryStatistics => {
  let contents: any = {
    __type: "QueryStatistics",
    bytesScanned: undefined,
    recordsMatched: undefined,
    recordsScanned: undefined
  };
  if (output.bytesScanned !== undefined && output.bytesScanned !== null) {
    contents.bytesScanned = output.bytesScanned;
  }
  if (output.recordsMatched !== undefined && output.recordsMatched !== null) {
    contents.recordsMatched = output.recordsMatched;
  }
  if (output.recordsScanned !== undefined && output.recordsScanned !== null) {
    contents.recordsScanned = output.recordsScanned;
  }
  return contents;
};

const deserializeAws_json1_1RejectedLogEventsInfo = (
  output: any,
  context: __SerdeContext
): RejectedLogEventsInfo => {
  let contents: any = {
    __type: "RejectedLogEventsInfo",
    expiredLogEventEndIndex: undefined,
    tooNewLogEventStartIndex: undefined,
    tooOldLogEventEndIndex: undefined
  };
  if (
    output.expiredLogEventEndIndex !== undefined &&
    output.expiredLogEventEndIndex !== null
  ) {
    contents.expiredLogEventEndIndex = output.expiredLogEventEndIndex;
  }
  if (
    output.tooNewLogEventStartIndex !== undefined &&
    output.tooNewLogEventStartIndex !== null
  ) {
    contents.tooNewLogEventStartIndex = output.tooNewLogEventStartIndex;
  }
  if (
    output.tooOldLogEventEndIndex !== undefined &&
    output.tooOldLogEventEndIndex !== null
  ) {
    contents.tooOldLogEventEndIndex = output.tooOldLogEventEndIndex;
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourcePolicies = (
  output: any,
  context: __SerdeContext
): Array<ResourcePolicy> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourcePolicy(entry, context)
  );
};

const deserializeAws_json1_1ResourcePolicy = (
  output: any,
  context: __SerdeContext
): ResourcePolicy => {
  let contents: any = {
    __type: "ResourcePolicy",
    lastUpdatedTime: undefined,
    policyDocument: undefined,
    policyName: undefined
  };
  if (output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null) {
    contents.lastUpdatedTime = output.lastUpdatedTime;
  }
  if (output.policyDocument !== undefined && output.policyDocument !== null) {
    contents.policyDocument = output.policyDocument;
  }
  if (output.policyName !== undefined && output.policyName !== null) {
    contents.policyName = output.policyName;
  }
  return contents;
};

const deserializeAws_json1_1ResultField = (
  output: any,
  context: __SerdeContext
): ResultField => {
  let contents: any = {
    __type: "ResultField",
    field: undefined,
    value: undefined
  };
  if (output.field !== undefined && output.field !== null) {
    contents.field = output.field;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1ResultRows = (
  output: any,
  context: __SerdeContext
): Array<ResultField> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResultField(entry, context)
  );
};

const deserializeAws_json1_1SearchedLogStream = (
  output: any,
  context: __SerdeContext
): SearchedLogStream => {
  let contents: any = {
    __type: "SearchedLogStream",
    logStreamName: undefined,
    searchedCompletely: undefined
  };
  if (output.logStreamName !== undefined && output.logStreamName !== null) {
    contents.logStreamName = output.logStreamName;
  }
  if (
    output.searchedCompletely !== undefined &&
    output.searchedCompletely !== null
  ) {
    contents.searchedCompletely = output.searchedCompletely;
  }
  return contents;
};

const deserializeAws_json1_1SearchedLogStreams = (
  output: any,
  context: __SerdeContext
): Array<SearchedLogStream> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SearchedLogStream(entry, context)
  );
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StartQueryResponse = (
  output: any,
  context: __SerdeContext
): StartQueryResponse => {
  let contents: any = {
    __type: "StartQueryResponse",
    queryId: undefined
  };
  if (output.queryId !== undefined && output.queryId !== null) {
    contents.queryId = output.queryId;
  }
  return contents;
};

const deserializeAws_json1_1StopQueryResponse = (
  output: any,
  context: __SerdeContext
): StopQueryResponse => {
  let contents: any = {
    __type: "StopQueryResponse",
    success: undefined
  };
  if (output.success !== undefined && output.success !== null) {
    contents.success = output.success;
  }
  return contents;
};

const deserializeAws_json1_1SubscriptionFilter = (
  output: any,
  context: __SerdeContext
): SubscriptionFilter => {
  let contents: any = {
    __type: "SubscriptionFilter",
    creationTime: undefined,
    destinationArn: undefined,
    distribution: undefined,
    filterName: undefined,
    filterPattern: undefined,
    logGroupName: undefined,
    roleArn: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = output.creationTime;
  }
  if (output.destinationArn !== undefined && output.destinationArn !== null) {
    contents.destinationArn = output.destinationArn;
  }
  if (output.distribution !== undefined && output.distribution !== null) {
    contents.distribution = output.distribution;
  }
  if (output.filterName !== undefined && output.filterName !== null) {
    contents.filterName = output.filterName;
  }
  if (output.filterPattern !== undefined && output.filterPattern !== null) {
    contents.filterPattern = output.filterPattern;
  }
  if (output.logGroupName !== undefined && output.logGroupName !== null) {
    contents.logGroupName = output.logGroupName;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_json1_1SubscriptionFilters = (
  output: any,
  context: __SerdeContext
): Array<SubscriptionFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SubscriptionFilter(entry, context)
  );
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1TestMetricFilterResponse = (
  output: any,
  context: __SerdeContext
): TestMetricFilterResponse => {
  let contents: any = {
    __type: "TestMetricFilterResponse",
    matches: undefined
  };
  if (output.matches !== undefined && output.matches !== null) {
    contents.matches = deserializeAws_json1_1MetricFilterMatches(
      output.matches,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UnrecognizedClientException = (
  output: any,
  context: __SerdeContext
): UnrecognizedClientException => {
  let contents: any = {
    __type: "UnrecognizedClientException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
