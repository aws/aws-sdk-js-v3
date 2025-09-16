// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  EventStreamSerdeContext as __EventStreamSerdeContext,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput } from "../commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "../commands/CancelExportTaskCommand";
import { CreateDeliveryCommandInput, CreateDeliveryCommandOutput } from "../commands/CreateDeliveryCommand";
import { CreateExportTaskCommandInput, CreateExportTaskCommandOutput } from "../commands/CreateExportTaskCommand";
import {
  CreateLogAnomalyDetectorCommandInput,
  CreateLogAnomalyDetectorCommandOutput,
} from "../commands/CreateLogAnomalyDetectorCommand";
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
import { DeleteDeliveryCommandInput, DeleteDeliveryCommandOutput } from "../commands/DeleteDeliveryCommand";
import {
  DeleteDeliveryDestinationCommandInput,
  DeleteDeliveryDestinationCommandOutput,
} from "../commands/DeleteDeliveryDestinationCommand";
import {
  DeleteDeliveryDestinationPolicyCommandInput,
  DeleteDeliveryDestinationPolicyCommandOutput,
} from "../commands/DeleteDeliveryDestinationPolicyCommand";
import {
  DeleteDeliverySourceCommandInput,
  DeleteDeliverySourceCommandOutput,
} from "../commands/DeleteDeliverySourceCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "../commands/DeleteDestinationCommand";
import { DeleteIndexPolicyCommandInput, DeleteIndexPolicyCommandOutput } from "../commands/DeleteIndexPolicyCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "../commands/DeleteIntegrationCommand";
import {
  DeleteLogAnomalyDetectorCommandInput,
  DeleteLogAnomalyDetectorCommandOutput,
} from "../commands/DeleteLogAnomalyDetectorCommand";
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
import { DeleteTransformerCommandInput, DeleteTransformerCommandOutput } from "../commands/DeleteTransformerCommand";
import {
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "../commands/DescribeAccountPoliciesCommand";
import {
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "../commands/DescribeConfigurationTemplatesCommand";
import { DescribeDeliveriesCommandInput, DescribeDeliveriesCommandOutput } from "../commands/DescribeDeliveriesCommand";
import {
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "../commands/DescribeDeliveryDestinationsCommand";
import {
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "../commands/DescribeDeliverySourcesCommand";
import {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "../commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "../commands/DescribeExportTasksCommand";
import {
  DescribeFieldIndexesCommandInput,
  DescribeFieldIndexesCommandOutput,
} from "../commands/DescribeFieldIndexesCommand";
import {
  DescribeIndexPoliciesCommandInput,
  DescribeIndexPoliciesCommandOutput,
} from "../commands/DescribeIndexPoliciesCommand";
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
import { GetDeliveryCommandInput, GetDeliveryCommandOutput } from "../commands/GetDeliveryCommand";
import {
  GetDeliveryDestinationCommandInput,
  GetDeliveryDestinationCommandOutput,
} from "../commands/GetDeliveryDestinationCommand";
import {
  GetDeliveryDestinationPolicyCommandInput,
  GetDeliveryDestinationPolicyCommandOutput,
} from "../commands/GetDeliveryDestinationPolicyCommand";
import { GetDeliverySourceCommandInput, GetDeliverySourceCommandOutput } from "../commands/GetDeliverySourceCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "../commands/GetIntegrationCommand";
import {
  GetLogAnomalyDetectorCommandInput,
  GetLogAnomalyDetectorCommandOutput,
} from "../commands/GetLogAnomalyDetectorCommand";
import { GetLogEventsCommandInput, GetLogEventsCommandOutput } from "../commands/GetLogEventsCommand";
import { GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput } from "../commands/GetLogGroupFieldsCommand";
import { GetLogObjectCommandInput, GetLogObjectCommandOutput } from "../commands/GetLogObjectCommand";
import { GetLogRecordCommandInput, GetLogRecordCommandOutput } from "../commands/GetLogRecordCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { GetTransformerCommandInput, GetTransformerCommandOutput } from "../commands/GetTransformerCommand";
import { ListAnomaliesCommandInput, ListAnomaliesCommandOutput } from "../commands/ListAnomaliesCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "../commands/ListIntegrationsCommand";
import {
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
} from "../commands/ListLogAnomalyDetectorsCommand";
import { ListLogGroupsCommandInput, ListLogGroupsCommandOutput } from "../commands/ListLogGroupsCommand";
import {
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "../commands/ListLogGroupsForQueryCommand";
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
import {
  PutDeliveryDestinationCommandInput,
  PutDeliveryDestinationCommandOutput,
} from "../commands/PutDeliveryDestinationCommand";
import {
  PutDeliveryDestinationPolicyCommandInput,
  PutDeliveryDestinationPolicyCommandOutput,
} from "../commands/PutDeliveryDestinationPolicyCommand";
import { PutDeliverySourceCommandInput, PutDeliverySourceCommandOutput } from "../commands/PutDeliverySourceCommand";
import { PutDestinationCommandInput, PutDestinationCommandOutput } from "../commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "../commands/PutDestinationPolicyCommand";
import { PutIndexPolicyCommandInput, PutIndexPolicyCommandOutput } from "../commands/PutIndexPolicyCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "../commands/PutIntegrationCommand";
import { PutLogEventsCommandInput, PutLogEventsCommandOutput } from "../commands/PutLogEventsCommand";
import { PutMetricFilterCommandInput, PutMetricFilterCommandOutput } from "../commands/PutMetricFilterCommand";
import { PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput } from "../commands/PutQueryDefinitionCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "../commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "../commands/PutSubscriptionFilterCommand";
import { PutTransformerCommandInput, PutTransformerCommandOutput } from "../commands/PutTransformerCommand";
import { StartLiveTailCommandInput, StartLiveTailCommandOutput } from "../commands/StartLiveTailCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import { StopQueryCommandInput, StopQueryCommandOutput } from "../commands/StopQueryCommand";
import { TagLogGroupCommandInput, TagLogGroupCommandOutput } from "../commands/TagLogGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestMetricFilterCommandInput, TestMetricFilterCommandOutput } from "../commands/TestMetricFilterCommand";
import { TestTransformerCommandInput, TestTransformerCommandOutput } from "../commands/TestTransformerCommand";
import { UntagLogGroupCommandInput, UntagLogGroupCommandOutput } from "../commands/UntagLogGroupCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAnomalyCommandInput, UpdateAnomalyCommandOutput } from "../commands/UpdateAnomalyCommand";
import {
  UpdateDeliveryConfigurationCommandInput,
  UpdateDeliveryConfigurationCommandOutput,
} from "../commands/UpdateDeliveryConfigurationCommand";
import {
  UpdateLogAnomalyDetectorCommandInput,
  UpdateLogAnomalyDetectorCommandOutput,
} from "../commands/UpdateLogAnomalyDetectorCommand";
import { CloudWatchLogsServiceException as __BaseException } from "../models/CloudWatchLogsServiceException";
import {
  AccessDeniedException,
  AddKeyEntry,
  AddKeys,
  AssociateKmsKeyRequest,
  CancelExportTaskRequest,
  ConflictException,
  CopyValue,
  CopyValueEntry,
  CreateDeliveryRequest,
  CreateExportTaskRequest,
  CreateLogAnomalyDetectorRequest,
  CreateLogGroupRequest,
  CreateLogStreamRequest,
  CSV,
  DataAlreadyAcceptedException,
  DateTimeConverter,
  DeleteAccountPolicyRequest,
  DeleteDataProtectionPolicyRequest,
  DeleteDeliveryDestinationPolicyRequest,
  DeleteDeliveryDestinationRequest,
  DeleteDeliveryRequest,
  DeleteDeliverySourceRequest,
  DeleteDestinationRequest,
  DeleteIndexPolicyRequest,
  DeleteIntegrationRequest,
  DeleteKeys,
  DeleteLogAnomalyDetectorRequest,
  DeleteLogGroupRequest,
  DeleteLogStreamRequest,
  DeleteMetricFilterRequest,
  DeleteQueryDefinitionRequest,
  DeleteResourcePolicyRequest,
  DeleteRetentionPolicyRequest,
  DeleteSubscriptionFilterRequest,
  DeleteTransformerRequest,
  DeliveryDestinationConfiguration,
  DeliveryDestinationType,
  DescribeAccountPoliciesRequest,
  DescribeConfigurationTemplatesRequest,
  DescribeDeliveriesRequest,
  DescribeDeliveryDestinationsRequest,
  DescribeDeliverySourcesRequest,
  DescribeDestinationsRequest,
  DescribeExportTasksRequest,
  DescribeFieldIndexesRequest,
  DescribeIndexPoliciesRequest,
  DescribeLogGroupsRequest,
  DescribeLogStreamsRequest,
  DescribeMetricFiltersRequest,
  DescribeMetricFiltersResponse,
  DescribeQueriesRequest,
  DescribeQueryDefinitionsRequest,
  DescribeResourcePoliciesRequest,
  DescribeSubscriptionFiltersRequest,
  DisassociateKmsKeyRequest,
  Entity,
  FieldsData,
  FilterLogEventsRequest,
  GetDataProtectionPolicyRequest,
  GetDeliveryDestinationPolicyRequest,
  GetDeliveryDestinationRequest,
  GetDeliveryRequest,
  GetDeliverySourceRequest,
  GetIntegrationRequest,
  GetLogAnomalyDetectorRequest,
  GetLogEventsRequest,
  GetLogGroupFieldsRequest,
  GetLogObjectRequest,
  GetLogObjectResponseStream,
  GetLogRecordRequest,
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  GetTransformerRequest,
  Grok,
  InputLogEvent,
  InternalStreamingException,
  InvalidOperationException,
  InvalidParameterException,
  InvalidSequenceTokenException,
  LimitExceededException,
  ListAnomaliesRequest,
  ListIntegrationsRequest,
  ListLogAnomalyDetectorsRequest,
  ListLogGroupsForQueryRequest,
  ListLogGroupsRequest,
  ListTagsForResourceRequest,
  ListTagsLogGroupRequest,
  ListToMap,
  LiveTailSessionStart,
  LiveTailSessionUpdate,
  LowerCaseString,
  MalformedQueryException,
  MetricFilter,
  MetricTransformation,
  MoveKeyEntry,
  MoveKeys,
  OpenSearchResourceConfig,
  OperationAbortedException,
  ParseCloudfront,
  ParseJSON,
  ParseKeyValue,
  ParsePostgres,
  ParseRoute53,
  ParseToOCSF,
  ParseVPC,
  ParseWAF,
  Processor,
  PutAccountPolicyRequest,
  PutDataProtectionPolicyRequest,
  PutDeliveryDestinationPolicyRequest,
  PutDeliveryDestinationRequest,
  PutDeliverySourceRequest,
  PutDestinationPolicyRequest,
  PutDestinationRequest,
  PutIndexPolicyRequest,
  PutIntegrationRequest,
  PutLogEventsRequest,
  PutMetricFilterRequest,
  PutQueryDefinitionRequest,
  PutResourcePolicyRequest,
  PutRetentionPolicyRequest,
  PutSubscriptionFilterRequest,
  PutTransformerRequest,
  QueryStatistics,
  RenameKeyEntry,
  RenameKeys,
  ResourceAlreadyExistsException,
  ResourceConfig,
  ResourceNotFoundException,
  S3DeliveryConfiguration,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SessionStreamingException,
  SessionTimeoutException,
  SplitString,
  SplitStringEntry,
  StartLiveTailRequest,
  StartLiveTailResponseStream,
  StartQueryRequest,
  StopQueryRequest,
  SubstituteString,
  SubstituteStringEntry,
  SuppressionPeriod,
  TagLogGroupRequest,
  TagResourceRequest,
  TestMetricFilterRequest,
  TestTransformerRequest,
  ThrottlingException,
  TooManyTagsException,
  TrimString,
  TypeConverter,
  TypeConverterEntry,
  UnrecognizedClientException,
  UntagLogGroupRequest,
  UntagResourceRequest,
  UpdateAnomalyRequest,
  UpdateDeliveryConfigurationRequest,
  UpdateLogAnomalyDetectorRequest,
  UpperCaseString,
  ValidationException,
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
 * serializeAws_json1_1CreateDeliveryCommand
 */
export const se_CreateDeliveryCommand = async (
  input: CreateDeliveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDelivery");
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
 * serializeAws_json1_1CreateLogAnomalyDetectorCommand
 */
export const se_CreateLogAnomalyDetectorCommand = async (
  input: CreateLogAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLogAnomalyDetector");
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
 * serializeAws_json1_1DeleteDeliveryCommand
 */
export const se_DeleteDeliveryCommand = async (
  input: DeleteDeliveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDelivery");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeliveryDestinationCommand
 */
export const se_DeleteDeliveryDestinationCommand = async (
  input: DeleteDeliveryDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeliveryDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeliveryDestinationPolicyCommand
 */
export const se_DeleteDeliveryDestinationPolicyCommand = async (
  input: DeleteDeliveryDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeliveryDestinationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeliverySourceCommand
 */
export const se_DeleteDeliverySourceCommand = async (
  input: DeleteDeliverySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeliverySource");
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
 * serializeAws_json1_1DeleteIndexPolicyCommand
 */
export const se_DeleteIndexPolicyCommand = async (
  input: DeleteIndexPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIndexPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIntegrationCommand
 */
export const se_DeleteIntegrationCommand = async (
  input: DeleteIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIntegration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLogAnomalyDetectorCommand
 */
export const se_DeleteLogAnomalyDetectorCommand = async (
  input: DeleteLogAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLogAnomalyDetector");
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
 * serializeAws_json1_1DeleteTransformerCommand
 */
export const se_DeleteTransformerCommand = async (
  input: DeleteTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTransformer");
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
 * serializeAws_json1_1DescribeConfigurationTemplatesCommand
 */
export const se_DescribeConfigurationTemplatesCommand = async (
  input: DescribeConfigurationTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConfigurationTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliveriesCommand
 */
export const se_DescribeDeliveriesCommand = async (
  input: DescribeDeliveriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliveries");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliveryDestinationsCommand
 */
export const se_DescribeDeliveryDestinationsCommand = async (
  input: DescribeDeliveryDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliveryDestinations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliverySourcesCommand
 */
export const se_DescribeDeliverySourcesCommand = async (
  input: DescribeDeliverySourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliverySources");
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
 * serializeAws_json1_1DescribeFieldIndexesCommand
 */
export const se_DescribeFieldIndexesCommand = async (
  input: DescribeFieldIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFieldIndexes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIndexPoliciesCommand
 */
export const se_DescribeIndexPoliciesCommand = async (
  input: DescribeIndexPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeIndexPolicies");
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
 * serializeAws_json1_1GetDeliveryCommand
 */
export const se_GetDeliveryCommand = async (
  input: GetDeliveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDelivery");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeliveryDestinationCommand
 */
export const se_GetDeliveryDestinationCommand = async (
  input: GetDeliveryDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeliveryDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeliveryDestinationPolicyCommand
 */
export const se_GetDeliveryDestinationPolicyCommand = async (
  input: GetDeliveryDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeliveryDestinationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeliverySourceCommand
 */
export const se_GetDeliverySourceCommand = async (
  input: GetDeliverySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeliverySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIntegrationCommand
 */
export const se_GetIntegrationCommand = async (
  input: GetIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetIntegration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogAnomalyDetectorCommand
 */
export const se_GetLogAnomalyDetectorCommand = async (
  input: GetLogAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLogAnomalyDetector");
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
 * serializeAws_json1_1GetLogObjectCommand
 */
export const se_GetLogObjectCommand = async (
  input: GetLogObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLogObject");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "streaming-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1GetTransformerCommand
 */
export const se_GetTransformerCommand = async (
  input: GetTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTransformer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAnomaliesCommand
 */
export const se_ListAnomaliesCommand = async (
  input: ListAnomaliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAnomalies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIntegrationsCommand
 */
export const se_ListIntegrationsCommand = async (
  input: ListIntegrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIntegrations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogAnomalyDetectorsCommand
 */
export const se_ListLogAnomalyDetectorsCommand = async (
  input: ListLogAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLogAnomalyDetectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogGroupsCommand
 */
export const se_ListLogGroupsCommand = async (
  input: ListLogGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLogGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLogGroupsForQueryCommand
 */
export const se_ListLogGroupsForQueryCommand = async (
  input: ListLogGroupsForQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLogGroupsForQuery");
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
 * serializeAws_json1_1PutDeliveryDestinationCommand
 */
export const se_PutDeliveryDestinationCommand = async (
  input: PutDeliveryDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDeliveryDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDeliveryDestinationPolicyCommand
 */
export const se_PutDeliveryDestinationPolicyCommand = async (
  input: PutDeliveryDestinationPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDeliveryDestinationPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutDeliverySourceCommand
 */
export const se_PutDeliverySourceCommand = async (
  input: PutDeliverySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutDeliverySource");
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
 * serializeAws_json1_1PutIndexPolicyCommand
 */
export const se_PutIndexPolicyCommand = async (
  input: PutIndexPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutIndexPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutIntegrationCommand
 */
export const se_PutIntegrationCommand = async (
  input: PutIntegrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutIntegration");
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
 * serializeAws_json1_1PutTransformerCommand
 */
export const se_PutTransformerCommand = async (
  input: PutTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutTransformer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartLiveTailCommand
 */
export const se_StartLiveTailCommand = async (
  input: StartLiveTailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartLiveTail");
  let body: any;
  body = JSON.stringify(_json(input));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "streaming-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
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
 * serializeAws_json1_1TestTransformerCommand
 */
export const se_TestTransformerCommand = async (
  input: TestTransformerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestTransformer");
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
 * serializeAws_json1_1UpdateAnomalyCommand
 */
export const se_UpdateAnomalyCommand = async (
  input: UpdateAnomalyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAnomaly");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeliveryConfigurationCommand
 */
export const se_UpdateDeliveryConfigurationCommand = async (
  input: UpdateDeliveryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDeliveryConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateLogAnomalyDetectorCommand
 */
export const se_UpdateLogAnomalyDetectorCommand = async (
  input: UpdateLogAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateLogAnomalyDetector");
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
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AssociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelExportTaskCommand
 */
export const de_CancelExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CancelExportTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDeliveryCommand
 */
export const de_CreateDeliveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDeliveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateExportTaskCommand
 */
export const de_CreateExportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1CreateLogAnomalyDetectorCommand
 */
export const de_CreateLogAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLogAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLogGroupCommand
 */
export const de_CreateLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLogStreamCommand
 */
export const de_CreateLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAccountPolicyCommand
 */
export const de_DeleteAccountPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccountPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAccountPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDataProtectionPolicyCommand
 */
export const de_DeleteDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataProtectionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeliveryCommand
 */
export const de_DeleteDeliveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeliveryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeliveryDestinationCommand
 */
export const de_DeleteDeliveryDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeliveryDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeliveryDestinationPolicyCommand
 */
export const de_DeleteDeliveryDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeliveryDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeliverySourceCommand
 */
export const de_DeleteDeliverySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliverySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeliverySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDestinationCommand
 */
export const de_DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteIndexPolicyCommand
 */
export const de_DeleteIndexPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteIndexPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteIntegrationCommand
 */
export const de_DeleteIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLogAnomalyDetectorCommand
 */
export const de_DeleteLogAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLogGroupCommand
 */
export const de_DeleteLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLogStreamCommand
 */
export const de_DeleteLogStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLogStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLogStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMetricFilterCommand
 */
export const de_DeleteMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteQueryDefinitionCommand
 */
export const de_DeleteQueryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRetentionPolicyCommand
 */
export const de_DeleteRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSubscriptionFilterCommand
 */
export const de_DeleteSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTransformerCommand
 */
export const de_DeleteTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAccountPoliciesCommand
 */
export const de_DescribeAccountPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeConfigurationTemplatesCommand
 */
export const de_DescribeConfigurationTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeConfigurationTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeliveriesCommand
 */
export const de_DescribeDeliveriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDeliveriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeliveryDestinationsCommand
 */
export const de_DescribeDeliveryDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDeliveryDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeliverySourcesCommand
 */
export const de_DescribeDeliverySourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliverySourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDeliverySourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDestinationsCommand
 */
export const de_DescribeDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeExportTasksCommand
 */
export const de_DescribeExportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeFieldIndexesCommand
 */
export const de_DescribeFieldIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFieldIndexesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFieldIndexesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeIndexPoliciesCommand
 */
export const de_DescribeIndexPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIndexPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeIndexPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLogGroupsCommand
 */
export const de_DescribeLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeLogStreamsCommand
 */
export const de_DescribeLogStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLogStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeMetricFiltersCommand
 */
export const de_DescribeMetricFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeQueriesCommand
 */
export const de_DescribeQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeQueryDefinitionsCommand
 */
export const de_DescribeQueryDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeResourcePoliciesCommand
 */
export const de_DescribeResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DescribeSubscriptionFiltersCommand
 */
export const de_DescribeSubscriptionFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1DisassociateKmsKeyCommand
 */
export const de_DisassociateKmsKeyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateKmsKeyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisassociateKmsKeyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1FilterLogEventsCommand
 */
export const de_FilterLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FilterLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetDataProtectionPolicyCommand
 */
export const de_GetDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetDeliveryCommand
 */
export const de_GetDeliveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliveryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDeliveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeliveryDestinationCommand
 */
export const de_GetDeliveryDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliveryDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDeliveryDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeliveryDestinationPolicyCommand
 */
export const de_GetDeliveryDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliveryDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDeliveryDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeliverySourceCommand
 */
export const de_GetDeliverySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeliverySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDeliverySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetIntegrationCommand
 */
export const de_GetIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLogAnomalyDetectorCommand
 */
export const de_GetLogAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetLogAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLogEventsCommand
 */
export const de_GetLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetLogGroupFieldsCommand
 */
export const de_GetLogGroupFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogGroupFieldsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetLogObjectCommand
 */
export const de_GetLogObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<GetLogObjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = { fieldStream: de_GetLogObjectResponseStream(output.body, context) };
  const response: GetLogObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLogRecordCommand
 */
export const de_GetLogRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetQueryResultsCommand
 */
export const de_GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetTransformerCommand
 */
export const de_GetTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAnomaliesCommand
 */
export const de_ListAnomaliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomaliesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAnomaliesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListIntegrationsCommand
 */
export const de_ListIntegrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntegrationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListIntegrationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLogAnomalyDetectorsCommand
 */
export const de_ListLogAnomalyDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogAnomalyDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLogAnomalyDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLogGroupsCommand
 */
export const de_ListLogGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLogGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLogGroupsForQueryCommand
 */
export const de_ListLogGroupsForQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLogGroupsForQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListLogGroupsForQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListTagsLogGroupCommand
 */
export const de_ListTagsLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutAccountPolicyCommand
 */
export const de_PutAccountPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutDataProtectionPolicyCommand
 */
export const de_PutDataProtectionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataProtectionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutDeliveryDestinationCommand
 */
export const de_PutDeliveryDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliveryDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutDeliveryDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutDeliveryDestinationPolicyCommand
 */
export const de_PutDeliveryDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliveryDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutDeliveryDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutDeliverySourceCommand
 */
export const de_PutDeliverySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDeliverySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutDeliverySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutDestinationCommand
 */
export const de_PutDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutDestinationPolicyCommand
 */
export const de_PutDestinationPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDestinationPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutDestinationPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutIndexPolicyCommand
 */
export const de_PutIndexPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIndexPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutIndexPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutIntegrationCommand
 */
export const de_PutIntegrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntegrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutIntegrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutLogEventsCommand
 */
export const de_PutLogEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLogEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutMetricFilterCommand
 */
export const de_PutMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutQueryDefinitionCommand
 */
export const de_PutQueryDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutQueryDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1PutRetentionPolicyCommand
 */
export const de_PutRetentionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRetentionPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutRetentionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutSubscriptionFilterCommand
 */
export const de_PutSubscriptionFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSubscriptionFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutSubscriptionFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutTransformerCommand
 */
export const de_PutTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartLiveTailCommand
 */
export const de_StartLiveTailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __EventStreamSerdeContext
): Promise<StartLiveTailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = { responseStream: de_StartLiveTailResponseStream(output.body, context) };
  const response: StartLiveTailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartQueryCommand
 */
export const de_StartQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1StopQueryCommand
 */
export const de_StopQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1TagLogGroupCommand
 */
export const de_TagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1TestMetricFilterCommand
 */
export const de_TestMetricFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestMetricFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1TestTransformerCommand
 */
export const de_TestTransformerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestTransformerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestTransformerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagLogGroupCommand
 */
export const de_UntagLogGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagLogGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagLogGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAnomalyCommand
 */
export const de_UpdateAnomalyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateAnomalyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDeliveryConfigurationCommand
 */
export const de_UpdateDeliveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeliveryConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDeliveryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateLogAnomalyDetectorCommand
 */
export const de_UpdateLogAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateLogAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InvalidOperationException":
    case "com.amazonaws.cloudwatchlogs#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.cloudwatchlogs#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudwatchlogs#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cloudwatchlogs#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cloudwatchlogs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cloudwatchlogs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchlogs#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchlogs#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "DataAlreadyAcceptedException":
    case "com.amazonaws.cloudwatchlogs#DataAlreadyAcceptedException":
      throw await de_DataAlreadyAcceptedExceptionRes(parsedOutput, context);
    case "InvalidSequenceTokenException":
    case "com.amazonaws.cloudwatchlogs#InvalidSequenceTokenException":
      throw await de_InvalidSequenceTokenExceptionRes(parsedOutput, context);
    case "UnrecognizedClientException":
    case "com.amazonaws.cloudwatchlogs#UnrecognizedClientException":
      throw await de_UnrecognizedClientExceptionRes(parsedOutput, context);
    case "MalformedQueryException":
    case "com.amazonaws.cloudwatchlogs#MalformedQueryException":
      throw await de_MalformedQueryExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.cloudwatchlogs#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
 * deserializeAws_json1_1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
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
 * deserializeAws_json1_1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
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

/**
 * deserializeAws_json1_1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GetLogObjectResponseStream
 */
const de_GetLogObjectResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<GetLogObjectResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["fields"] != null) {
      return {
        fields: await de_FieldsData_event(event["fields"], context),
      };
    }
    if (event["InternalStreamingException"] != null) {
      return {
        InternalStreamingException: await de_InternalStreamingException_event(
          event["InternalStreamingException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
/**
 * deserializeAws_json1_1StartLiveTailResponseStream
 */
const de_StartLiveTailResponseStream = (
  output: any,
  context: __SerdeContext & __EventStreamSerdeContext
): AsyncIterable<StartLiveTailResponseStream> => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["sessionStart"] != null) {
      return {
        sessionStart: await de_LiveTailSessionStart_event(event["sessionStart"], context),
      };
    }
    if (event["sessionUpdate"] != null) {
      return {
        sessionUpdate: await de_LiveTailSessionUpdate_event(event["sessionUpdate"], context),
      };
    }
    if (event["SessionTimeoutException"] != null) {
      return {
        SessionTimeoutException: await de_SessionTimeoutException_event(event["SessionTimeoutException"], context),
      };
    }
    if (event["SessionStreamingException"] != null) {
      return {
        SessionStreamingException: await de_SessionStreamingException_event(
          event["SessionStreamingException"],
          context
        ),
      };
    }
    return { $unknown: event as any };
  });
};
const de_FieldsData_event = async (output: any, context: __SerdeContext): Promise<FieldsData> => {
  const contents: FieldsData = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, de_FieldsData(data, context));
  return contents;
};
const de_InternalStreamingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<InternalStreamingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_InternalStreamingExceptionRes(parsedOutput, context);
};
const de_LiveTailSessionStart_event = async (output: any, context: __SerdeContext): Promise<LiveTailSessionStart> => {
  const contents: LiveTailSessionStart = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_LiveTailSessionUpdate_event = async (output: any, context: __SerdeContext): Promise<LiveTailSessionUpdate> => {
  const contents: LiveTailSessionUpdate = {} as any;
  const data: any = await parseBody(output.body, context);
  Object.assign(contents, _json(data));
  return contents;
};
const de_SessionStreamingException_event = async (
  output: any,
  context: __SerdeContext
): Promise<SessionStreamingException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_SessionStreamingExceptionRes(parsedOutput, context);
};
const de_SessionTimeoutException_event = async (
  output: any,
  context: __SerdeContext
): Promise<SessionTimeoutException> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  return de_SessionTimeoutExceptionRes(parsedOutput, context);
};
/**
 * deserializeAws_json1_1InternalStreamingExceptionRes
 */
const de_InternalStreamingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalStreamingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalStreamingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SessionStreamingExceptionRes
 */
const de_SessionStreamingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionStreamingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SessionStreamingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SessionTimeoutExceptionRes
 */
const de_SessionTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SessionTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SessionTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountIds omitted.

// se_AddKeyEntries omitted.

// se_AddKeyEntry omitted.

// se_AddKeys omitted.

// se_AssociateKmsKeyRequest omitted.

// se_CancelExportTaskRequest omitted.

// se_Columns omitted.

// se_CopyValue omitted.

// se_CopyValueEntries omitted.

// se_CopyValueEntry omitted.

// se_CreateDeliveryRequest omitted.

// se_CreateExportTaskRequest omitted.

// se_CreateLogAnomalyDetectorRequest omitted.

// se_CreateLogGroupRequest omitted.

// se_CreateLogStreamRequest omitted.

// se_CSV omitted.

// se_DashboardViewerPrincipals omitted.

// se_DateTimeConverter omitted.

// se_DeleteAccountPolicyRequest omitted.

// se_DeleteDataProtectionPolicyRequest omitted.

// se_DeleteDeliveryDestinationPolicyRequest omitted.

// se_DeleteDeliveryDestinationRequest omitted.

// se_DeleteDeliveryRequest omitted.

// se_DeleteDeliverySourceRequest omitted.

// se_DeleteDestinationRequest omitted.

// se_DeleteIndexPolicyRequest omitted.

// se_DeleteIntegrationRequest omitted.

// se_DeleteKeys omitted.

// se_DeleteLogAnomalyDetectorRequest omitted.

// se_DeleteLogGroupRequest omitted.

// se_DeleteLogStreamRequest omitted.

// se_DeleteMetricFilterRequest omitted.

// se_DeleteQueryDefinitionRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteRetentionPolicyRequest omitted.

// se_DeleteSubscriptionFilterRequest omitted.

// se_DeleteTransformerRequest omitted.

// se_DeleteWithKeys omitted.

// se_DeliveryDestinationConfiguration omitted.

// se_DeliveryDestinationTypes omitted.

// se_DescribeAccountPoliciesRequest omitted.

// se_DescribeConfigurationTemplatesRequest omitted.

// se_DescribeDeliveriesRequest omitted.

// se_DescribeDeliveryDestinationsRequest omitted.

// se_DescribeDeliverySourcesRequest omitted.

// se_DescribeDestinationsRequest omitted.

// se_DescribeExportTasksRequest omitted.

// se_DescribeFieldIndexesLogGroupIdentifiers omitted.

// se_DescribeFieldIndexesRequest omitted.

// se_DescribeIndexPoliciesLogGroupIdentifiers omitted.

// se_DescribeIndexPoliciesRequest omitted.

// se_DescribeLogGroupsLogGroupIdentifiers omitted.

// se_DescribeLogGroupsRequest omitted.

// se_DescribeLogStreamsRequest omitted.

// se_DescribeMetricFiltersRequest omitted.

// se_DescribeQueriesRequest omitted.

// se_DescribeQueryDefinitionsRequest omitted.

// se_DescribeResourcePoliciesRequest omitted.

// se_DescribeSubscriptionFiltersRequest omitted.

// se_Dimensions omitted.

// se_DisassociateKmsKeyRequest omitted.

// se_EmitSystemFields omitted.

// se_Entity omitted.

// se_EntityAttributes omitted.

// se_EntityKeyAttributes omitted.

// se_FilterLogEventsRequest omitted.

// se_GetDataProtectionPolicyRequest omitted.

// se_GetDeliveryDestinationPolicyRequest omitted.

// se_GetDeliveryDestinationRequest omitted.

// se_GetDeliveryRequest omitted.

// se_GetDeliverySourceRequest omitted.

// se_GetIntegrationRequest omitted.

// se_GetLogAnomalyDetectorRequest omitted.

// se_GetLogEventsRequest omitted.

// se_GetLogGroupFieldsRequest omitted.

// se_GetLogObjectRequest omitted.

// se_GetLogRecordRequest omitted.

// se_GetQueryResultsRequest omitted.

// se_GetTransformerRequest omitted.

// se_Grok omitted.

// se_InputLogEvent omitted.

// se_InputLogEvents omitted.

// se_InputLogStreamNames omitted.

// se_ListAnomaliesRequest omitted.

// se_ListIntegrationsRequest omitted.

// se_ListLogAnomalyDetectorsRequest omitted.

// se_ListLogGroupsForQueryRequest omitted.

// se_ListLogGroupsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTagsLogGroupRequest omitted.

// se_ListToMap omitted.

// se_LogGroupArnList omitted.

// se_LogGroupIdentifiers omitted.

// se_LogGroupNames omitted.

// se_LogTypes omitted.

// se_LowerCaseString omitted.

// se_LowerCaseStringWithKeys omitted.

// se_MatchPatterns omitted.

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

// se_MoveKeyEntries omitted.

// se_MoveKeyEntry omitted.

// se_MoveKeys omitted.

// se_OpenSearchResourceConfig omitted.

// se_ParseCloudfront omitted.

// se_ParseJSON omitted.

// se_ParseKeyValue omitted.

// se_ParsePostgres omitted.

// se_ParseRoute53 omitted.

// se_ParseToOCSF omitted.

// se_ParseVPC omitted.

// se_ParseWAF omitted.

// se_Processor omitted.

// se_Processors omitted.

// se_PutAccountPolicyRequest omitted.

// se_PutDataProtectionPolicyRequest omitted.

// se_PutDeliveryDestinationPolicyRequest omitted.

// se_PutDeliveryDestinationRequest omitted.

// se_PutDeliverySourceRequest omitted.

// se_PutDestinationPolicyRequest omitted.

// se_PutDestinationRequest omitted.

// se_PutIndexPolicyRequest omitted.

// se_PutIntegrationRequest omitted.

// se_PutLogEventsRequest omitted.

/**
 * serializeAws_json1_1PutMetricFilterRequest
 */
const se_PutMetricFilterRequest = (input: PutMetricFilterRequest, context: __SerdeContext): any => {
  return take(input, {
    applyOnTransformedLogs: [],
    emitSystemFieldDimensions: _json,
    fieldSelectionCriteria: [],
    filterName: [],
    filterPattern: [],
    logGroupName: [],
    metricTransformations: (_) => se_MetricTransformations(_, context),
  });
};

/**
 * serializeAws_json1_1PutQueryDefinitionRequest
 */
const se_PutQueryDefinitionRequest = (input: PutQueryDefinitionRequest, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    logGroupNames: _json,
    name: [],
    queryDefinitionId: [],
    queryLanguage: [],
    queryString: [],
  });
};

// se_PutResourcePolicyRequest omitted.

// se_PutRetentionPolicyRequest omitted.

// se_PutSubscriptionFilterRequest omitted.

// se_PutTransformerRequest omitted.

// se_RecordFields omitted.

// se_RenameKeyEntries omitted.

// se_RenameKeyEntry omitted.

// se_RenameKeys omitted.

// se_ResourceConfig omitted.

// se_ResourceTypes omitted.

// se_S3DeliveryConfiguration omitted.

// se_SplitString omitted.

// se_SplitStringEntries omitted.

// se_SplitStringEntry omitted.

// se_StartLiveTailLogGroupIdentifiers omitted.

// se_StartLiveTailRequest omitted.

// se_StartQueryRequest omitted.

// se_StopQueryRequest omitted.

// se_SubstituteString omitted.

// se_SubstituteStringEntries omitted.

// se_SubstituteStringEntry omitted.

// se_SuppressionPeriod omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagLogGroupRequest omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TestEventMessages omitted.

// se_TestMetricFilterRequest omitted.

// se_TestTransformerRequest omitted.

// se_TrimString omitted.

// se_TrimStringWithKeys omitted.

// se_TypeConverter omitted.

// se_TypeConverterEntries omitted.

// se_TypeConverterEntry omitted.

// se_UntagLogGroupRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAnomalyRequest omitted.

// se_UpdateDeliveryConfigurationRequest omitted.

// se_UpdateLogAnomalyDetectorRequest omitted.

// se_UpperCaseString omitted.

// se_UpperCaseStringWithKeys omitted.

// de_AccessDeniedException omitted.

// de_AccountPolicies omitted.

// de_AccountPolicy omitted.

// de_AddKeyEntries omitted.

// de_AddKeyEntry omitted.

// de_AddKeys omitted.

// de_AllowedFieldDelimiters omitted.

// de_AllowedFields omitted.

// de_Anomalies omitted.

// de_Anomaly omitted.

// de_AnomalyDetector omitted.

// de_AnomalyDetectors omitted.

// de_Columns omitted.

// de_ConfigurationTemplate omitted.

// de_ConfigurationTemplateDeliveryConfigValues omitted.

// de_ConfigurationTemplates omitted.

// de_ConflictException omitted.

// de_CopyValue omitted.

// de_CopyValueEntries omitted.

// de_CopyValueEntry omitted.

// de_CreateDeliveryResponse omitted.

// de_CreateExportTaskResponse omitted.

// de_CreateLogAnomalyDetectorResponse omitted.

// de_CSV omitted.

// de_DataAlreadyAcceptedException omitted.

// de_DateTimeConverter omitted.

// de_DeleteIndexPolicyResponse omitted.

// de_DeleteIntegrationResponse omitted.

// de_DeleteKeys omitted.

// de_DeleteQueryDefinitionResponse omitted.

// de_DeleteWithKeys omitted.

// de_Deliveries omitted.

// de_Delivery omitted.

// de_DeliveryDestination omitted.

// de_DeliveryDestinationConfiguration omitted.

// de_DeliveryDestinations omitted.

// de_DeliverySource omitted.

// de_DeliverySources omitted.

// de_DescribeAccountPoliciesResponse omitted.

// de_DescribeConfigurationTemplatesResponse omitted.

// de_DescribeDeliveriesResponse omitted.

// de_DescribeDeliveryDestinationsResponse omitted.

// de_DescribeDeliverySourcesResponse omitted.

// de_DescribeDestinationsResponse omitted.

// de_DescribeExportTasksResponse omitted.

// de_DescribeFieldIndexesResponse omitted.

// de_DescribeIndexPoliciesResponse omitted.

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

// de_EmitSystemFields omitted.

// de_Enumerations omitted.

// de_ExportTask omitted.

// de_ExportTaskExecutionInfo omitted.

// de_ExportTasks omitted.

// de_ExportTaskStatus omitted.

// de_ExtractedValues omitted.

// de_FieldIndex omitted.

// de_FieldIndexes omitted.

/**
 * deserializeAws_json1_1FieldsData
 */
const de_FieldsData = (output: any, context: __SerdeContext): FieldsData => {
  return take(output, {
    data: context.base64Decoder,
  }) as any;
};

// de_FilteredLogEvent omitted.

// de_FilteredLogEvents omitted.

// de_FilterLogEventsResponse omitted.

// de_GetDataProtectionPolicyResponse omitted.

// de_GetDeliveryDestinationPolicyResponse omitted.

// de_GetDeliveryDestinationResponse omitted.

// de_GetDeliveryResponse omitted.

// de_GetDeliverySourceResponse omitted.

// de_GetIntegrationResponse omitted.

// de_GetLogAnomalyDetectorResponse omitted.

// de_GetLogEventsResponse omitted.

// de_GetLogGroupFieldsResponse omitted.

// de_GetLogRecordResponse omitted.

/**
 * deserializeAws_json1_1GetQueryResultsResponse
 */
const de_GetQueryResultsResponse = (output: any, context: __SerdeContext): GetQueryResultsResponse => {
  return take(output, {
    encryptionKey: __expectString,
    queryLanguage: __expectString,
    results: _json,
    statistics: (_: any) => de_QueryStatistics(_, context),
    status: __expectString,
  }) as any;
};

// de_GetTransformerResponse omitted.

// de_Grok omitted.

// de_Histogram omitted.

// de_IndexPolicies omitted.

// de_IndexPolicy omitted.

// de_InheritedProperties omitted.

// de_InputLogStreamNames omitted.

// de_IntegrationDetails omitted.

// de_IntegrationSummaries omitted.

// de_IntegrationSummary omitted.

// de_InternalStreamingException omitted.

// de_InvalidOperationException omitted.

// de_InvalidParameterException omitted.

// de_InvalidSequenceTokenException omitted.

// de_LimitExceededException omitted.

// de_ListAnomaliesResponse omitted.

// de_ListIntegrationsResponse omitted.

// de_ListLogAnomalyDetectorsResponse omitted.

// de_ListLogGroupsForQueryResponse omitted.

// de_ListLogGroupsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTagsLogGroupResponse omitted.

// de_ListToMap omitted.

// de_LiveTailSessionLogEvent omitted.

// de_LiveTailSessionMetadata omitted.

// de_LiveTailSessionResults omitted.

// de_LiveTailSessionStart omitted.

// de_LiveTailSessionUpdate omitted.

// de_LogEvent omitted.

// de_LogGroup omitted.

// de_LogGroupArnList omitted.

// de_LogGroupField omitted.

// de_LogGroupFieldList omitted.

// de_LogGroupIdentifiers omitted.

// de_LogGroupNames omitted.

// de_LogGroups omitted.

// de_LogGroupSummaries omitted.

// de_LogGroupSummary omitted.

// de_LogRecord omitted.

// de_LogSamples omitted.

// de_LogStream omitted.

// de_LogStreams omitted.

// de_LowerCaseString omitted.

// de_LowerCaseStringWithKeys omitted.

// de_MalformedQueryException omitted.

// de_MatchPatterns omitted.

/**
 * deserializeAws_json1_1MetricFilter
 */
const de_MetricFilter = (output: any, context: __SerdeContext): MetricFilter => {
  return take(output, {
    applyOnTransformedLogs: __expectBoolean,
    creationTime: __expectLong,
    emitSystemFieldDimensions: _json,
    fieldSelectionCriteria: __expectString,
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

// de_MoveKeyEntries omitted.

// de_MoveKeyEntry omitted.

// de_MoveKeys omitted.

// de_OpenSearchApplication omitted.

// de_OpenSearchCollection omitted.

// de_OpenSearchDataAccessPolicy omitted.

// de_OpenSearchDataSource omitted.

// de_OpenSearchEncryptionPolicy omitted.

// de_OpenSearchIntegrationDetails omitted.

// de_OpenSearchLifecyclePolicy omitted.

// de_OpenSearchNetworkPolicy omitted.

// de_OpenSearchResourceStatus omitted.

// de_OpenSearchWorkspace omitted.

// de_OperationAbortedException omitted.

// de_OutputFormats omitted.

// de_OutputLogEvent omitted.

// de_OutputLogEvents omitted.

// de_ParseCloudfront omitted.

// de_ParseJSON omitted.

// de_ParseKeyValue omitted.

// de_ParsePostgres omitted.

// de_ParseRoute53 omitted.

// de_ParseToOCSF omitted.

// de_ParseVPC omitted.

// de_ParseWAF omitted.

// de_PatternToken omitted.

// de_PatternTokens omitted.

// de_Policy omitted.

// de_Processor omitted.

// de_Processors omitted.

// de_PutAccountPolicyResponse omitted.

// de_PutDataProtectionPolicyResponse omitted.

// de_PutDeliveryDestinationPolicyResponse omitted.

// de_PutDeliveryDestinationResponse omitted.

// de_PutDeliverySourceResponse omitted.

// de_PutDestinationResponse omitted.

// de_PutIndexPolicyResponse omitted.

// de_PutIntegrationResponse omitted.

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
    estimatedBytesSkipped: __limitedParseDouble,
    estimatedRecordsSkipped: __limitedParseDouble,
    logGroupsScanned: __limitedParseDouble,
    recordsMatched: __limitedParseDouble,
    recordsScanned: __limitedParseDouble,
  }) as any;
};

// de_RecordField omitted.

// de_RecordFields omitted.

// de_RejectedEntityInfo omitted.

// de_RejectedLogEventsInfo omitted.

// de_RenameKeyEntries omitted.

// de_RenameKeyEntry omitted.

// de_RenameKeys omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceArns omitted.

// de_ResourceNotFoundException omitted.

// de_ResourcePolicies omitted.

// de_ResourcePolicy omitted.

// de_ResultField omitted.

// de_ResultRows omitted.

// de_S3DeliveryConfiguration omitted.

// de_SearchedLogStream omitted.

// de_SearchedLogStreams omitted.

// de_ServiceQuotaExceededException omitted.

// de_ServiceUnavailableException omitted.

// de_SessionStreamingException omitted.

// de_SessionTimeoutException omitted.

// de_SplitString omitted.

// de_SplitStringEntries omitted.

// de_SplitStringEntry omitted.

// de_StartLiveTailLogGroupIdentifiers omitted.

// de_StartQueryResponse omitted.

// de_StopQueryResponse omitted.

// de_SubscriptionFilter omitted.

// de_SubscriptionFilters omitted.

// de_SubstituteString omitted.

// de_SubstituteStringEntries omitted.

// de_SubstituteStringEntry omitted.

// de_Tags omitted.

// de_TestMetricFilterResponse omitted.

// de_TestTransformerResponse omitted.

// de_ThrottlingException omitted.

// de_TooManyTagsException omitted.

// de_TransformedLogRecord omitted.

// de_TransformedLogs omitted.

// de_TrimString omitted.

// de_TrimStringWithKeys omitted.

// de_TypeConverter omitted.

// de_TypeConverterEntries omitted.

// de_TypeConverterEntry omitted.

// de_UnrecognizedClientException omitted.

// de_UpdateDeliveryConfigurationResponse omitted.

// de_UpperCaseString omitted.

// de_UpperCaseStringWithKeys omitted.

// de_ValidationException omitted.

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
