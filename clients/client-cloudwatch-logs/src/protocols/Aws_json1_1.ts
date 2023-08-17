// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput } from "../commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "../commands/CancelExportTaskCommand";
import { CreateExportTaskCommandInput, CreateExportTaskCommandOutput } from "../commands/CreateExportTaskCommand";
import { CreateLogGroupCommandInput, CreateLogGroupCommandOutput } from "../commands/CreateLogGroupCommand";
import { CreateLogStreamCommandInput, CreateLogStreamCommandOutput } from "../commands/CreateLogStreamCommand";
import {
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
} from "../commands/DeleteAccountPolicyCommand";
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
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "../commands/DescribeAccountPoliciesCommand";
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
import { PutAccountPolicyCommandInput, PutAccountPolicyCommandOutput } from "../commands/PutAccountPolicyCommand";
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
  CreateLogGroupRequest,
  CreateLogStreamRequest,
  DataAlreadyAcceptedException,
  DeleteAccountPolicyRequest,
  DeleteDataProtectionPolicyRequest,
  DeleteDestinationRequest,
  DeleteLogGroupRequest,
  DeleteLogStreamRequest,
  DeleteMetricFilterRequest,
  DeleteQueryDefinitionRequest,
  DeleteResourcePolicyRequest,
  DeleteRetentionPolicyRequest,
  DeleteSubscriptionFilterRequest,
  DescribeAccountPoliciesRequest,
  DescribeDestinationsRequest,
  DescribeExportTasksRequest,
  DescribeLogGroupsRequest,
  DescribeLogStreamsRequest,
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse,
  DescribeQueriesRequest,
  DescribeQueryDefinitionsRequest,
  DescribeResourcePoliciesRequest,
  DescribeSubscriptionFiltersRequest,
  DisassociateKmsKeyRequest,
  FilterLogEventsRequest,
  GetDataProtectionPolicyRequest,
  GetLogEventsRequest,
  GetLogGroupFieldsRequest,
  GetLogRecordRequest,
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  InputLogEvent,
  InvalidOperationException,
  InvalidParameterException,
  InvalidSequenceTokenException,
  LimitExceededException,
  ListTagsForResourceRequest,
  ListTagsLogGroupRequest,
  MalformedQueryException,
  MetricFilter,
  MetricTransformation,
  OperationAbortedException,
  PutAccountPolicyRequest,
  PutDataProtectionPolicyRequest,
  PutDestinationPolicyRequest,
  PutDestinationRequest,
  PutLogEventsRequest,
  PutMetricFilterRequest,
  PutQueryDefinitionRequest,
  PutResourcePolicyRequest,
  PutRetentionPolicyRequest,
  PutSubscriptionFilterRequest,
  QueryStatistics,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  StartQueryRequest,
  StopQueryRequest,
  TagLogGroupRequest,
  TagResourceRequest,
  TestMetricFilterRequest,
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
  const headers: __HeaderBag = sharedHeaders("AssociateKmsKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelExportTaskCommand
 */
export const se_CancelExportTaskCommand = async (
  input: CancelExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelExportTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExportTaskCommand
 */
export const se_CreateExportTaskCommand = async (
  input: CreateExportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExportTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogGroupCommand
 */
export const se_CreateLogGroupCommand = async (
  input: CreateLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLogGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLogStreamCommand
 */
export const se_CreateLogStreamCommand = async (
  input: CreateLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLogStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAccountPolicyCommand
 */
export const se_DeleteAccountPolicyCommand = async (
  input: DeleteAccountPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAccountPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataProtectionPolicyCommand
 */
export const se_DeleteDataProtectionPolicyCommand = async (
  input: DeleteDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataProtectionPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDestinationCommand
 */
export const se_DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogGroupCommand
 */
export const se_DeleteLogGroupCommand = async (
  input: DeleteLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLogGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogStreamCommand
 */
export const se_DeleteLogStreamCommand = async (
  input: DeleteLogStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLogStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMetricFilterCommand
 */
export const se_DeleteMetricFilterCommand = async (
  input: DeleteMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMetricFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteQueryDefinitionCommand
 */
export const se_DeleteQueryDefinitionCommand = async (
  input: DeleteQueryDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteQueryDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRetentionPolicyCommand
 */
export const se_DeleteRetentionPolicyCommand = async (
  input: DeleteRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRetentionPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSubscriptionFilterCommand
 */
export const se_DeleteSubscriptionFilterCommand = async (
  input: DeleteSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSubscriptionFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAccountPoliciesCommand
 */
export const se_DescribeAccountPoliciesCommand = async (
  input: DescribeAccountPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAccountPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDestinationsCommand
 */
export const se_DescribeDestinationsCommand = async (
  input: DescribeDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDestinations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExportTasksCommand
 */
export const se_DescribeExportTasksCommand = async (
  input: DescribeExportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExportTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLogGroupsCommand
 */
export const se_DescribeLogGroupsCommand = async (
  input: DescribeLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLogGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLogStreamsCommand
 */
export const se_DescribeLogStreamsCommand = async (
  input: DescribeLogStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLogStreams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMetricFiltersCommand
 */
export const se_DescribeMetricFiltersCommand = async (
  input: DescribeMetricFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMetricFilters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQueriesCommand
 */
export const se_DescribeQueriesCommand = async (
  input: DescribeQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeQueries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQueryDefinitionsCommand
 */
export const se_DescribeQueryDefinitionsCommand = async (
  input: DescribeQueryDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeQueryDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourcePoliciesCommand
 */
export const se_DescribeResourcePoliciesCommand = async (
  input: DescribeResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResourcePolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscriptionFiltersCommand
 */
export const se_DescribeSubscriptionFiltersCommand = async (
  input: DescribeSubscriptionFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubscriptionFilters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateKmsKeyCommand
 */
export const se_DisassociateKmsKeyCommand = async (
  input: DisassociateKmsKeyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateKmsKey");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1FilterLogEventsCommand
 */
export const se_FilterLogEventsCommand = async (
  input: FilterLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("FilterLogEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataProtectionPolicyCommand
 */
export const se_GetDataProtectionPolicyCommand = async (
  input: GetDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataProtectionPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogEventsCommand
 */
export const se_GetLogEventsCommand = async (
  input: GetLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLogEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogGroupFieldsCommand
 */
export const se_GetLogGroupFieldsCommand = async (
  input: GetLogGroupFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLogGroupFields");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogRecordCommand
 */
export const se_GetLogRecordCommand = async (
  input: GetLogRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLogRecord");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetQueryResultsCommand
 */
export const se_GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetQueryResults");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsLogGroupCommand
 */
export const se_ListTagsLogGroupCommand = async (
  input: ListTagsLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsLogGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAccountPolicyCommand
 */
export const se_PutAccountPolicyCommand = async (
  input: PutAccountPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAccountPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDataProtectionPolicyCommand
 */
export const se_PutDataProtectionPolicyCommand = async (
  input: PutDataProtectionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDataProtectionPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDestinationCommand
 */
export const se_PutDestinationCommand = async (
  input: PutDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDestinationPolicyCommand
 */
export const se_PutDestinationPolicyCommand = async (
  input: PutDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDestinationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutLogEventsCommand
 */
export const se_PutLogEventsCommand = async (
  input: PutLogEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutLogEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutMetricFilterCommand
 */
export const se_PutMetricFilterCommand = async (
  input: PutMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutMetricFilter");
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
  const headers: __HeaderBag = sharedHeaders("PutQueryDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRetentionPolicyCommand
 */
export const se_PutRetentionPolicyCommand = async (
  input: PutRetentionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRetentionPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutSubscriptionFilterCommand
 */
export const se_PutSubscriptionFilterCommand = async (
  input: PutSubscriptionFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutSubscriptionFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartQueryCommand
 */
export const se_StartQueryCommand = async (
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartQuery");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopQueryCommand
 */
export const se_StopQueryCommand = async (
  input: StopQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopQuery");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagLogGroupCommand
 */
export const se_TagLogGroupCommand = async (
  input: TagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagLogGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestMetricFilterCommand
 */
export const se_TestMetricFilterCommand = async (
  input: TestMetricFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestMetricFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagLogGroupCommand
 */
export const se_UntagLogGroupCommand = async (
  input: UntagLogGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagLogGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAccountPolicyCommand
 */
export const de_DeleteAccountPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAccountPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccountPolicyCommandError
 */
const de_DeleteAccountPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPolicyCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteQueryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAccountPoliciesCommand
 */
export const de_DescribeAccountPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAccountPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeAccountPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountPoliciesCommandError
 */
const de_DescribeAccountPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPoliciesCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeExportTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeLogGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeLogStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeQueryDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeResourcePoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeSubscriptionFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: FilterLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLogGroupFieldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetLogRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1PutAccountPolicyCommand
 */
export const de_PutAccountPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAccountPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutAccountPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutAccountPolicyCommandError
 */
const de_PutAccountPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPolicyCommandOutput> => {
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
    case "ServiceUnavailableException":
    case "com.amazonaws.cloudwatchlogs#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutLogEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutQueryDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TestMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnrecognizedClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountIds omitted.

// se_AssociateKmsKeyRequest omitted.

// se_CancelExportTaskRequest omitted.

// se_CreateExportTaskRequest omitted.

// se_CreateLogGroupRequest omitted.

// se_CreateLogStreamRequest omitted.

// se_DeleteAccountPolicyRequest omitted.

// se_DeleteDataProtectionPolicyRequest omitted.

// se_DeleteDestinationRequest omitted.

// se_DeleteLogGroupRequest omitted.

// se_DeleteLogStreamRequest omitted.

// se_DeleteMetricFilterRequest omitted.

// se_DeleteQueryDefinitionRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteRetentionPolicyRequest omitted.

// se_DeleteSubscriptionFilterRequest omitted.

// se_DescribeAccountPoliciesRequest omitted.

// se_DescribeDestinationsRequest omitted.

// se_DescribeExportTasksRequest omitted.

// se_DescribeLogGroupsRequest omitted.

// se_DescribeLogStreamsRequest omitted.

// se_DescribeMetricFiltersRequest omitted.

// se_DescribeQueriesRequest omitted.

// se_DescribeQueryDefinitionsRequest omitted.

// se_DescribeResourcePoliciesRequest omitted.

// se_DescribeSubscriptionFiltersRequest omitted.

// se_Dimensions omitted.

// se_DisassociateKmsKeyRequest omitted.

// se_FilterLogEventsRequest omitted.

// se_GetDataProtectionPolicyRequest omitted.

// se_GetLogEventsRequest omitted.

// se_GetLogGroupFieldsRequest omitted.

// se_GetLogRecordRequest omitted.

// se_GetQueryResultsRequest omitted.

// se_InputLogEvent omitted.

// se_InputLogEvents omitted.

// se_InputLogStreamNames omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTagsLogGroupRequest omitted.

// se_LogGroupIdentifiers omitted.

// se_LogGroupNames omitted.

/**
 * serializeAws_json1_1MetricTransformation
 */
const se_MetricTransformation = (input: MetricTransformation, context: __SerdeContext): any => {
  return take(input, {
    defaultValue: __serializeFloat,
    dimensions: _json,
    metricName: [],
    metricNamespace: [],
    metricValue: [],
    unit: [],
  });
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

// se_PutAccountPolicyRequest omitted.

// se_PutDataProtectionPolicyRequest omitted.

// se_PutDestinationPolicyRequest omitted.

// se_PutDestinationRequest omitted.

// se_PutLogEventsRequest omitted.

/**
 * serializeAws_json1_1PutMetricFilterRequest
 */
const se_PutMetricFilterRequest = (input: PutMetricFilterRequest, context: __SerdeContext): any => {
  return take(input, {
    filterName: [],
    filterPattern: [],
    logGroupName: [],
    metricTransformations: (_) => se_MetricTransformations(_, context),
  });
};

// se_PutQueryDefinitionRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_PutRetentionPolicyRequest omitted.

// se_PutSubscriptionFilterRequest omitted.

// se_StartQueryRequest omitted.

// se_StopQueryRequest omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagLogGroupRequest omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TestEventMessages omitted.

// se_TestMetricFilterRequest omitted.

// se_UntagLogGroupRequest omitted.

// se_UntagResourceRequest omitted.

// de_AccountPolicies omitted.

// de_AccountPolicy omitted.

// de_CreateExportTaskResponse omitted.

// de_DataAlreadyAcceptedException omitted.

// de_DeleteQueryDefinitionResponse omitted.

// de_DescribeAccountPoliciesResponse omitted.

// de_DescribeDestinationsResponse omitted.

// de_DescribeExportTasksResponse omitted.

// de_DescribeLogGroupsResponse omitted.

// de_DescribeLogStreamsResponse omitted.

/**
 * deserializeAws_json1_1DescribeMetricFiltersResponse
 */
const de_DescribeMetricFiltersResponse = (output: any, context: __SerdeContext): DescribeMetricFiltersResponse => {
  return take(output, {
    metricFilters: (_: any) => de_MetricFilters(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_DescribeQueriesResponse omitted.

// de_DescribeQueryDefinitionsResponse omitted.

// de_DescribeResourcePoliciesResponse omitted.

// de_DescribeSubscriptionFiltersResponse omitted.

// de_Destination omitted.

// de_Destinations omitted.

// de_Dimensions omitted.

// de_ExportTask omitted.

// de_ExportTaskExecutionInfo omitted.

// de_ExportTasks omitted.

// de_ExportTaskStatus omitted.

// de_ExtractedValues omitted.

// de_FilteredLogEvent omitted.

// de_FilteredLogEvents omitted.

// de_FilterLogEventsResponse omitted.

// de_GetDataProtectionPolicyResponse omitted.

// de_GetLogEventsResponse omitted.

// de_GetLogGroupFieldsResponse omitted.

// de_GetLogRecordResponse omitted.

/**
 * deserializeAws_json1_1GetQueryResultsResponse
 */
const de_GetQueryResultsResponse = (output: any, context: __SerdeContext): GetQueryResultsResponse => {
  return take(output, {
    encryptionKey: __expectString,
    results: _json,
    statistics: (_: any) => de_QueryStatistics(_, context),
    status: __expectString,
  }) as any;
};

// de_InheritedProperties omitted.

// de_InvalidOperationException omitted.

// de_InvalidParameterException omitted.

// de_InvalidSequenceTokenException omitted.

// de_LimitExceededException omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTagsLogGroupResponse omitted.

// de_LogGroup omitted.

// de_LogGroupField omitted.

// de_LogGroupFieldList omitted.

// de_LogGroupNames omitted.

// de_LogGroups omitted.

// de_LogRecord omitted.

// de_LogStream omitted.

// de_LogStreams omitted.

// de_MalformedQueryException omitted.

/**
 * deserializeAws_json1_1MetricFilter
 */
const de_MetricFilter = (output: any, context: __SerdeContext): MetricFilter => {
  return take(output, {
    creationTime: __expectLong,
    filterName: __expectString,
    filterPattern: __expectString,
    logGroupName: __expectString,
    metricTransformations: (_: any) => de_MetricTransformations(_, context),
  }) as any;
};

// de_MetricFilterMatches omitted.

// de_MetricFilterMatchRecord omitted.

/**
 * deserializeAws_json1_1MetricFilters
 */
const de_MetricFilters = (output: any, context: __SerdeContext): MetricFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricTransformation
 */
const de_MetricTransformation = (output: any, context: __SerdeContext): MetricTransformation => {
  return take(output, {
    defaultValue: __limitedParseDouble,
    dimensions: _json,
    metricName: __expectString,
    metricNamespace: __expectString,
    metricValue: __expectString,
    unit: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricTransformations
 */
const de_MetricTransformations = (output: any, context: __SerdeContext): MetricTransformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricTransformation(entry, context);
    });
  return retVal;
};

// de_OperationAbortedException omitted.

// de_OutputLogEvent omitted.

// de_OutputLogEvents omitted.

// de_PutAccountPolicyResponse omitted.

// de_PutDataProtectionPolicyResponse omitted.

// de_PutDestinationResponse omitted.

// de_PutLogEventsResponse omitted.

// de_PutQueryDefinitionResponse omitted.

// de_PutResourcePolicyResponse omitted.

// de_QueryCompileError omitted.

// de_QueryCompileErrorLocation omitted.

// de_QueryDefinition omitted.

// de_QueryDefinitionList omitted.

// de_QueryInfo omitted.

// de_QueryInfoList omitted.

// de_QueryResults omitted.

/**
 * deserializeAws_json1_1QueryStatistics
 */
const de_QueryStatistics = (output: any, context: __SerdeContext): QueryStatistics => {
  return take(output, {
    bytesScanned: __limitedParseDouble,
    recordsMatched: __limitedParseDouble,
    recordsScanned: __limitedParseDouble,
  }) as any;
};

// de_RejectedLogEventsInfo omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourcePolicies omitted.

// de_ResourcePolicy omitted.

// de_ResultField omitted.

// de_ResultRows omitted.

// de_SearchedLogStream omitted.

// de_SearchedLogStreams omitted.

// de_ServiceUnavailableException omitted.

// de_StartQueryResponse omitted.

// de_StopQueryResponse omitted.

// de_SubscriptionFilter omitted.

// de_SubscriptionFilters omitted.

// de_Tags omitted.

// de_TestMetricFilterResponse omitted.

// de_TooManyTagsException omitted.

// de_UnrecognizedClientException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Logs_20140328.${operation}`,
  };
}

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
