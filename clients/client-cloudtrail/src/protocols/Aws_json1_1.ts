// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "../commands/CancelQueryCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "../commands/CreateChannelCommand";
import {
  CreateEventDataStoreCommandInput,
  CreateEventDataStoreCommandOutput,
} from "../commands/CreateEventDataStoreCommand";
import { CreateTrailCommandInput, CreateTrailCommandOutput } from "../commands/CreateTrailCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "../commands/DeleteChannelCommand";
import {
  DeleteEventDataStoreCommandInput,
  DeleteEventDataStoreCommandOutput,
} from "../commands/DeleteEventDataStoreCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteTrailCommandInput, DeleteTrailCommandOutput } from "../commands/DeleteTrailCommand";
import {
  DeregisterOrganizationDelegatedAdminCommandInput,
  DeregisterOrganizationDelegatedAdminCommandOutput,
} from "../commands/DeregisterOrganizationDelegatedAdminCommand";
import { DescribeQueryCommandInput, DescribeQueryCommandOutput } from "../commands/DescribeQueryCommand";
import { DescribeTrailsCommandInput, DescribeTrailsCommandOutput } from "../commands/DescribeTrailsCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "../commands/GetChannelCommand";
import { GetEventDataStoreCommandInput, GetEventDataStoreCommandOutput } from "../commands/GetEventDataStoreCommand";
import { GetEventSelectorsCommandInput, GetEventSelectorsCommandOutput } from "../commands/GetEventSelectorsCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "../commands/GetImportCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput,
} from "../commands/GetInsightSelectorsCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetTrailCommandInput, GetTrailCommandOutput } from "../commands/GetTrailCommand";
import { GetTrailStatusCommandInput, GetTrailStatusCommandOutput } from "../commands/GetTrailStatusCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "../commands/ListChannelsCommand";
import {
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
} from "../commands/ListEventDataStoresCommand";
import { ListImportFailuresCommandInput, ListImportFailuresCommandOutput } from "../commands/ListImportFailuresCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "../commands/ListPublicKeysCommand";
import { ListQueriesCommandInput, ListQueriesCommandOutput } from "../commands/ListQueriesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListTrailsCommandInput, ListTrailsCommandOutput } from "../commands/ListTrailsCommand";
import { LookupEventsCommandInput, LookupEventsCommandOutput } from "../commands/LookupEventsCommand";
import { PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput } from "../commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput,
} from "../commands/PutInsightSelectorsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  RegisterOrganizationDelegatedAdminCommandInput,
  RegisterOrganizationDelegatedAdminCommandOutput,
} from "../commands/RegisterOrganizationDelegatedAdminCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import {
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
} from "../commands/RestoreEventDataStoreCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "../commands/StartLoggingCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import { StopImportCommandInput, StopImportCommandOutput } from "../commands/StopImportCommand";
import { StopLoggingCommandInput, StopLoggingCommandOutput } from "../commands/StopLoggingCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "../commands/UpdateChannelCommand";
import {
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
} from "../commands/UpdateEventDataStoreCommand";
import { UpdateTrailCommandInput, UpdateTrailCommandOutput } from "../commands/UpdateTrailCommand";
import { CloudTrailServiceException as __BaseException } from "../models/CloudTrailServiceException";
import {
  AccountHasOngoingImportException,
  AccountNotFoundException,
  AccountNotRegisteredException,
  AccountRegisteredException,
  AddTagsRequest,
  AddTagsResponse,
  AdvancedEventSelector,
  AdvancedFieldSelector,
  CancelQueryRequest,
  CancelQueryResponse,
  CannotDelegateManagementAccountException,
  Channel,
  ChannelAlreadyExistsException,
  ChannelARNInvalidException,
  ChannelExistsForEDSException,
  ChannelMaxLimitExceededException,
  ChannelNotFoundException,
  CloudTrailAccessNotEnabledException,
  CloudTrailARNInvalidException,
  CloudTrailInvalidClientTokenIdException,
  CloudWatchLogsDeliveryUnavailableException,
  ConflictException,
  CreateChannelRequest,
  CreateChannelResponse,
  CreateEventDataStoreRequest,
  CreateEventDataStoreResponse,
  CreateTrailRequest,
  CreateTrailResponse,
  DataResource,
  DelegatedAdminAccountLimitExceededException,
  DeleteChannelRequest,
  DeleteChannelResponse,
  DeleteEventDataStoreRequest,
  DeleteEventDataStoreResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteTrailRequest,
  DeleteTrailResponse,
  DeregisterOrganizationDelegatedAdminRequest,
  DeregisterOrganizationDelegatedAdminResponse,
  DescribeQueryRequest,
  DescribeQueryResponse,
  DescribeTrailsRequest,
  DescribeTrailsResponse,
  Destination,
  Event,
  EventDataStore,
  EventDataStoreAlreadyExistsException,
  EventDataStoreARNInvalidException,
  EventDataStoreHasOngoingImportException,
  EventDataStoreMaxLimitExceededException,
  EventDataStoreNotFoundException,
  EventDataStoreTerminationProtectedException,
  EventSelector,
  GetChannelRequest,
  GetChannelResponse,
  GetEventDataStoreRequest,
  GetEventDataStoreResponse,
  GetEventSelectorsRequest,
  GetEventSelectorsResponse,
  GetImportRequest,
  GetImportResponse,
  GetInsightSelectorsRequest,
  GetInsightSelectorsResponse,
  GetQueryResultsRequest,
  GetQueryResultsResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetTrailRequest,
  GetTrailResponse,
  GetTrailStatusRequest,
  GetTrailStatusResponse,
  ImportFailureListItem,
  ImportNotFoundException,
  ImportsListItem,
  ImportSource,
  ImportStatistics,
  InactiveEventDataStoreException,
  InactiveQueryException,
  IngestionStatus,
  InsightNotEnabledException,
  InsightSelector,
  InsufficientDependencyServiceAccessPermissionException,
  InsufficientEncryptionPolicyException,
  InsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException,
  InvalidDateRangeException,
  InvalidEventCategoryException,
  InvalidEventDataStoreCategoryException,
  InvalidEventDataStoreStatusException,
  InvalidEventSelectorsException,
  InvalidHomeRegionException,
  InvalidImportSourceException,
  InvalidInsightSelectorsException,
  InvalidKmsKeyIdException,
  InvalidLookupAttributesException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidQueryStatementException,
  InvalidQueryStatusException,
  InvalidS3BucketNameException,
  InvalidS3PrefixException,
  InvalidSnsTopicNameException,
  InvalidSourceException,
  InvalidTagParameterException,
  InvalidTimeRangeException,
  InvalidTokenException,
  InvalidTrailNameException,
  KmsException,
  KmsKeyDisabledException,
  KmsKeyNotFoundException,
  ListChannelsRequest,
  ListChannelsResponse,
  ListEventDataStoresRequest,
  ListEventDataStoresResponse,
  ListImportFailuresRequest,
  ListImportFailuresResponse,
  ListImportsRequest,
  ListImportsResponse,
  ListPublicKeysRequest,
  ListPublicKeysResponse,
  ListQueriesRequest,
  ListQueriesResponse,
  ListTagsRequest,
  ListTagsResponse,
  ListTrailsRequest,
  ListTrailsResponse,
  LookupAttribute,
  LookupEventsRequest,
  LookupEventsResponse,
  MaxConcurrentQueriesException,
  MaximumNumberOfTrailsExceededException,
  NoManagementAccountSLRExistsException,
  NotOrganizationManagementAccountException,
  NotOrganizationMasterAccountException,
  OperationNotPermittedException,
  OrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException,
  PublicKey,
  PutEventSelectorsRequest,
  PutEventSelectorsResponse,
  PutInsightSelectorsRequest,
  PutInsightSelectorsResponse,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  Query,
  QueryIdNotFoundException,
  QueryStatistics,
  QueryStatisticsForDescribeQuery,
  RegisterOrganizationDelegatedAdminRequest,
  RegisterOrganizationDelegatedAdminResponse,
  RemoveTagsRequest,
  RemoveTagsResponse,
  Resource,
  ResourceARNNotValidException,
  ResourceNotFoundException,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotValidException,
  ResourceTag,
  ResourceTypeNotSupportedException,
  RestoreEventDataStoreRequest,
  RestoreEventDataStoreResponse,
  S3BucketDoesNotExistException,
  S3ImportSource,
  SourceConfig,
  StartImportRequest,
  StartImportResponse,
  StartLoggingRequest,
  StartLoggingResponse,
  StartQueryRequest,
  StartQueryResponse,
  StopImportRequest,
  StopImportResponse,
  StopLoggingRequest,
  StopLoggingResponse,
  Tag,
  TagsLimitExceededException,
  Trail,
  TrailAlreadyExistsException,
  TrailInfo,
  TrailNotFoundException,
  TrailNotProvidedException,
  UnsupportedOperationException,
  UpdateChannelRequest,
  UpdateChannelResponse,
  UpdateEventDataStoreRequest,
  UpdateEventDataStoreResponse,
  UpdateTrailRequest,
  UpdateTrailResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.AddTags",
  };
  let body: any;
  body = JSON.stringify(se_AddTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelQueryCommand
 */
export const se_CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CancelQuery",
  };
  let body: any;
  body = JSON.stringify(se_CancelQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CreateChannel",
  };
  let body: any;
  body = JSON.stringify(se_CreateChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEventDataStoreCommand
 */
export const se_CreateEventDataStoreCommand = async (
  input: CreateEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CreateEventDataStore",
  };
  let body: any;
  body = JSON.stringify(se_CreateEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrailCommand
 */
export const se_CreateTrailCommand = async (
  input: CreateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.CreateTrail",
  };
  let body: any;
  body = JSON.stringify(se_CreateTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DeleteChannel",
  };
  let body: any;
  body = JSON.stringify(se_DeleteChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventDataStoreCommand
 */
export const se_DeleteEventDataStoreCommand = async (
  input: DeleteEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DeleteEventDataStore",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEventDataStoreRequest(input, context));
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
    "x-amz-target": "CloudTrail_20131101.DeleteResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrailCommand
 */
export const se_DeleteTrailCommand = async (
  input: DeleteTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DeleteTrail",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand
 */
export const se_DeregisterOrganizationDelegatedAdminCommand = async (
  input: DeregisterOrganizationDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterOrganizationDelegatedAdminRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQueryCommand
 */
export const se_DescribeQueryCommand = async (
  input: DescribeQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DescribeQuery",
  };
  let body: any;
  body = JSON.stringify(se_DescribeQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrailsCommand
 */
export const se_DescribeTrailsCommand = async (
  input: DescribeTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.DescribeTrails",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTrailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetChannelCommand
 */
export const se_GetChannelCommand = async (
  input: GetChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetChannel",
  };
  let body: any;
  body = JSON.stringify(se_GetChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventDataStoreCommand
 */
export const se_GetEventDataStoreCommand = async (
  input: GetEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetEventDataStore",
  };
  let body: any;
  body = JSON.stringify(se_GetEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventSelectorsCommand
 */
export const se_GetEventSelectorsCommand = async (
  input: GetEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetEventSelectors",
  };
  let body: any;
  body = JSON.stringify(se_GetEventSelectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetImportCommand
 */
export const se_GetImportCommand = async (
  input: GetImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetImport",
  };
  let body: any;
  body = JSON.stringify(se_GetImportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInsightSelectorsCommand
 */
export const se_GetInsightSelectorsCommand = async (
  input: GetInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetInsightSelectors",
  };
  let body: any;
  body = JSON.stringify(se_GetInsightSelectorsRequest(input, context));
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
    "x-amz-target": "CloudTrail_20131101.GetQueryResults",
  };
  let body: any;
  body = JSON.stringify(se_GetQueryResultsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_GetResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTrailCommand
 */
export const se_GetTrailCommand = async (
  input: GetTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetTrail",
  };
  let body: any;
  body = JSON.stringify(se_GetTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTrailStatusCommand
 */
export const se_GetTrailStatusCommand = async (
  input: GetTrailStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.GetTrailStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetTrailStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListChannels",
  };
  let body: any;
  body = JSON.stringify(se_ListChannelsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventDataStoresCommand
 */
export const se_ListEventDataStoresCommand = async (
  input: ListEventDataStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListEventDataStores",
  };
  let body: any;
  body = JSON.stringify(se_ListEventDataStoresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImportFailuresCommand
 */
export const se_ListImportFailuresCommand = async (
  input: ListImportFailuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListImportFailures",
  };
  let body: any;
  body = JSON.stringify(se_ListImportFailuresRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListImports",
  };
  let body: any;
  body = JSON.stringify(se_ListImportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPublicKeysCommand
 */
export const se_ListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListPublicKeys",
  };
  let body: any;
  body = JSON.stringify(se_ListPublicKeysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListQueriesCommand
 */
export const se_ListQueriesCommand = async (
  input: ListQueriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListQueries",
  };
  let body: any;
  body = JSON.stringify(se_ListQueriesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListTags",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrailsCommand
 */
export const se_ListTrailsCommand = async (
  input: ListTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.ListTrails",
  };
  let body: any;
  body = JSON.stringify(se_ListTrailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LookupEventsCommand
 */
export const se_LookupEventsCommand = async (
  input: LookupEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.LookupEvents",
  };
  let body: any;
  body = JSON.stringify(se_LookupEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEventSelectorsCommand
 */
export const se_PutEventSelectorsCommand = async (
  input: PutEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.PutEventSelectors",
  };
  let body: any;
  body = JSON.stringify(se_PutEventSelectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInsightSelectorsCommand
 */
export const se_PutInsightSelectorsCommand = async (
  input: PutInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.PutInsightSelectors",
  };
  let body: any;
  body = JSON.stringify(se_PutInsightSelectorsRequest(input, context));
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
    "x-amz-target": "CloudTrail_20131101.PutResourcePolicy",
  };
  let body: any;
  body = JSON.stringify(se_PutResourcePolicyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterOrganizationDelegatedAdminCommand
 */
export const se_RegisterOrganizationDelegatedAdminCommand = async (
  input: RegisterOrganizationDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.RegisterOrganizationDelegatedAdmin",
  };
  let body: any;
  body = JSON.stringify(se_RegisterOrganizationDelegatedAdminRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.RemoveTags",
  };
  let body: any;
  body = JSON.stringify(se_RemoveTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreEventDataStoreCommand
 */
export const se_RestoreEventDataStoreCommand = async (
  input: RestoreEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.RestoreEventDataStore",
  };
  let body: any;
  body = JSON.stringify(se_RestoreEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImportCommand
 */
export const se_StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StartImport",
  };
  let body: any;
  body = JSON.stringify(se_StartImportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartLoggingCommand
 */
export const se_StartLoggingCommand = async (
  input: StartLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StartLogging",
  };
  let body: any;
  body = JSON.stringify(se_StartLoggingRequest(input, context));
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
    "x-amz-target": "CloudTrail_20131101.StartQuery",
  };
  let body: any;
  body = JSON.stringify(se_StartQueryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopImportCommand
 */
export const se_StopImportCommand = async (
  input: StopImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StopImport",
  };
  let body: any;
  body = JSON.stringify(se_StopImportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopLoggingCommand
 */
export const se_StopLoggingCommand = async (
  input: StopLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.StopLogging",
  };
  let body: any;
  body = JSON.stringify(se_StopLoggingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.UpdateChannel",
  };
  let body: any;
  body = JSON.stringify(se_UpdateChannelRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEventDataStoreCommand
 */
export const se_UpdateEventDataStoreCommand = async (
  input: UpdateEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.UpdateEventDataStore",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEventDataStoreRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrailCommand
 */
export const se_UpdateTrailCommand = async (
  input: UpdateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "CloudTrail_20131101.UpdateTrail",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsResponse(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsCommandError
 */
const de_AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "TagsLimitExceededException":
    case "com.amazonaws.cloudtrail#TagsLimitExceededException":
      throw await de_TagsLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CancelQueryCommand
 */
export const de_CancelQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelQueryResponse(data, context);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelQueryCommandError
 */
const de_CancelQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InactiveQueryException":
    case "com.amazonaws.cloudtrail#InactiveQueryException":
      throw await de_InactiveQueryExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "QueryIdNotFoundException":
    case "com.amazonaws.cloudtrail#QueryIdNotFoundException":
      throw await de_QueryIdNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateChannelCommand
 */
export const de_CreateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateChannelResponse(data, context);
  const response: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateChannelCommandError
 */
const de_CreateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelAlreadyExistsException":
    case "com.amazonaws.cloudtrail#ChannelAlreadyExistsException":
      throw await de_ChannelAlreadyExistsExceptionRes(parsedOutput, context);
    case "ChannelMaxLimitExceededException":
    case "com.amazonaws.cloudtrail#ChannelMaxLimitExceededException":
      throw await de_ChannelMaxLimitExceededExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreCategoryException":
      throw await de_InvalidEventDataStoreCategoryExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSourceException":
    case "com.amazonaws.cloudtrail#InvalidSourceException":
      throw await de_InvalidSourceExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TagsLimitExceededException":
    case "com.amazonaws.cloudtrail#TagsLimitExceededException":
      throw await de_TagsLimitExceededExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEventDataStoreCommand
 */
export const de_CreateEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEventDataStoreResponse(data, context);
  const response: CreateEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEventDataStoreCommandError
 */
const de_CreateEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "EventDataStoreAlreadyExistsException":
    case "com.amazonaws.cloudtrail#EventDataStoreAlreadyExistsException":
      throw await de_EventDataStoreAlreadyExistsExceptionRes(parsedOutput, context);
    case "EventDataStoreMaxLimitExceededException":
    case "com.amazonaws.cloudtrail#EventDataStoreMaxLimitExceededException":
      throw await de_EventDataStoreMaxLimitExceededExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
      throw await de_InvalidEventSelectorsExceptionRes(parsedOutput, context);
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
      throw await de_InvalidKmsKeyIdExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
      throw await de_KmsKeyNotFoundExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateTrailCommand
 */
export const de_CreateTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTrailResponse(data, context);
  const response: CreateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateTrailCommandError
 */
const de_CreateTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "CloudTrailInvalidClientTokenIdException":
    case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException":
      throw await de_CloudTrailInvalidClientTokenIdExceptionRes(parsedOutput, context);
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException":
      throw await de_CloudWatchLogsDeliveryUnavailableExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await de_InsufficientS3BucketPolicyExceptionRes(parsedOutput, context);
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException":
      throw await de_InsufficientSnsTopicPolicyExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException":
      throw await de_InvalidCloudWatchLogsLogGroupArnExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException":
      throw await de_InvalidCloudWatchLogsRoleArnExceptionRes(parsedOutput, context);
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
      throw await de_InvalidKmsKeyIdExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
      throw await de_InvalidS3BucketNameExceptionRes(parsedOutput, context);
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
      throw await de_InvalidS3PrefixExceptionRes(parsedOutput, context);
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException":
      throw await de_InvalidSnsTopicNameExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail#KmsKeyDisabledException":
      throw await de_KmsKeyDisabledExceptionRes(parsedOutput, context);
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
      throw await de_KmsKeyNotFoundExceptionRes(parsedOutput, context);
    case "MaximumNumberOfTrailsExceededException":
    case "com.amazonaws.cloudtrail#MaximumNumberOfTrailsExceededException":
      throw await de_MaximumNumberOfTrailsExceededExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await de_S3BucketDoesNotExistExceptionRes(parsedOutput, context);
    case "TagsLimitExceededException":
    case "com.amazonaws.cloudtrail#TagsLimitExceededException":
      throw await de_TagsLimitExceededExceptionRes(parsedOutput, context);
    case "TrailAlreadyExistsException":
    case "com.amazonaws.cloudtrail#TrailAlreadyExistsException":
      throw await de_TrailAlreadyExistsExceptionRes(parsedOutput, context);
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail#TrailNotProvidedException":
      throw await de_TrailNotProvidedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteChannelCommand
 */
export const de_DeleteChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteChannelResponse(data, context);
  const response: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteChannelCommandError
 */
const de_DeleteChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelARNInvalidException":
    case "com.amazonaws.cloudtrail#ChannelARNInvalidException":
      throw await de_ChannelARNInvalidExceptionRes(parsedOutput, context);
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteEventDataStoreCommand
 */
export const de_DeleteEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEventDataStoreResponse(data, context);
  const response: DeleteEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEventDataStoreCommandError
 */
const de_DeleteEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelExistsForEDSException":
    case "com.amazonaws.cloudtrail#ChannelExistsForEDSException":
      throw await de_ChannelExistsForEDSExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreHasOngoingImportException":
    case "com.amazonaws.cloudtrail#EventDataStoreHasOngoingImportException":
      throw await de_EventDataStoreHasOngoingImportExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "EventDataStoreTerminationProtectedException":
    case "com.amazonaws.cloudtrail#EventDataStoreTerminationProtectedException":
      throw await de_EventDataStoreTerminationProtectedExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteResourcePolicyResponse(data, context);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceARNNotValidException":
    case "com.amazonaws.cloudtrail#ResourceARNNotValidException":
      throw await de_ResourceARNNotValidExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePolicyNotFoundException":
    case "com.amazonaws.cloudtrail#ResourcePolicyNotFoundException":
      throw await de_ResourcePolicyNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteTrailCommand
 */
export const de_DeleteTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTrailResponse(data, context);
  const response: DeleteTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTrailCommandError
 */
const de_DeleteTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await de_InvalidHomeRegionExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand
 */
export const de_DeregisterOrganizationDelegatedAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationDelegatedAdminCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterOrganizationDelegatedAdminCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterOrganizationDelegatedAdminResponse(data, context);
  const response: DeregisterOrganizationDelegatedAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterOrganizationDelegatedAdminCommandError
 */
const de_DeregisterOrganizationDelegatedAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterOrganizationDelegatedAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountNotFoundException":
    case "com.amazonaws.cloudtrail#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "AccountNotRegisteredException":
    case "com.amazonaws.cloudtrail#AccountNotRegisteredException":
      throw await de_AccountNotRegisteredExceptionRes(parsedOutput, context);
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotOrganizationManagementAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationManagementAccountException":
      throw await de_NotOrganizationManagementAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeQueryCommand
 */
export const de_DescribeQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeQueryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeQueryResponse(data, context);
  const response: DescribeQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeQueryCommandError
 */
const de_DescribeQueryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeQueryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "QueryIdNotFoundException":
    case "com.amazonaws.cloudtrail#QueryIdNotFoundException":
      throw await de_QueryIdNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeTrailsCommand
 */
export const de_DescribeTrailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrailsResponse(data, context);
  const response: DescribeTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTrailsCommandError
 */
const de_DescribeTrailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetChannelCommand
 */
export const de_GetChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetChannelResponse(data, context);
  const response: GetChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetChannelCommandError
 */
const de_GetChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelARNInvalidException":
    case "com.amazonaws.cloudtrail#ChannelARNInvalidException":
      throw await de_ChannelARNInvalidExceptionRes(parsedOutput, context);
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetEventDataStoreCommand
 */
export const de_GetEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventDataStoreResponse(data, context);
  const response: GetEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEventDataStoreCommandError
 */
const de_GetEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetEventSelectorsCommand
 */
export const de_GetEventSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEventSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEventSelectorsResponse(data, context);
  const response: GetEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEventSelectorsCommandError
 */
const de_GetEventSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetImportCommand
 */
export const de_GetImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetImportResponse(data, context);
  const response: GetImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetImportCommandError
 */
const de_GetImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImportNotFoundException":
    case "com.amazonaws.cloudtrail#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetInsightSelectorsCommand
 */
export const de_GetInsightSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInsightSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInsightSelectorsResponse(data, context);
  const response: GetInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInsightSelectorsCommandError
 */
const de_GetInsightSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "InsightNotEnabledException":
    case "com.amazonaws.cloudtrail#InsightNotEnabledException":
      throw await de_InsightNotEnabledExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "QueryIdNotFoundException":
    case "com.amazonaws.cloudtrail#QueryIdNotFoundException":
      throw await de_QueryIdNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetResourcePolicyResponse(data, context);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommandError
 */
const de_GetResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceARNNotValidException":
    case "com.amazonaws.cloudtrail#ResourceARNNotValidException":
      throw await de_ResourceARNNotValidExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePolicyNotFoundException":
    case "com.amazonaws.cloudtrail#ResourcePolicyNotFoundException":
      throw await de_ResourcePolicyNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTrailCommand
 */
export const de_GetTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTrailResponse(data, context);
  const response: GetTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTrailCommandError
 */
const de_GetTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTrailStatusCommand
 */
export const de_GetTrailStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTrailStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTrailStatusResponse(data, context);
  const response: GetTrailStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetTrailStatusCommandError
 */
const de_GetTrailStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListChannelsCommand
 */
export const de_ListChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListChannelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListChannelsResponse(data, context);
  const response: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListChannelsCommandError
 */
const de_ListChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChannelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEventDataStoresCommand
 */
export const de_ListEventDataStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventDataStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventDataStoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventDataStoresResponse(data, context);
  const response: ListEventDataStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEventDataStoresCommandError
 */
const de_ListEventDataStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventDataStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListImportFailuresCommand
 */
export const de_ListImportFailuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFailuresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImportFailuresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImportFailuresResponse(data, context);
  const response: ListImportFailuresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListImportFailuresCommandError
 */
const de_ListImportFailuresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportFailuresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImportsResponse(data, context);
  const response: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListImportsCommandError
 */
const de_ListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPublicKeysCommand
 */
export const de_ListPublicKeysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPublicKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPublicKeysResponse(data, context);
  const response: ListPublicKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPublicKeysCommandError
 */
const de_ListPublicKeysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail#InvalidTimeRangeException":
      throw await de_InvalidTimeRangeExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListQueriesCommand
 */
export const de_ListQueriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListQueriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListQueriesResponse(data, context);
  const response: ListQueriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListQueriesCommandError
 */
const de_ListQueriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidDateRangeException":
    case "com.amazonaws.cloudtrail#InvalidDateRangeException":
      throw await de_InvalidDateRangeExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidQueryStatusException":
    case "com.amazonaws.cloudtrail#InvalidQueryStatusException":
      throw await de_InvalidQueryStatusExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail#InvalidTokenException":
      throw await de_InvalidTokenExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTrailsCommand
 */
export const de_ListTrailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrailsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTrailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrailsResponse(data, context);
  const response: ListTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTrailsCommandError
 */
const de_ListTrailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1LookupEventsCommand
 */
export const de_LookupEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_LookupEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LookupEventsResponse(data, context);
  const response: LookupEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1LookupEventsCommandError
 */
const de_LookupEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidEventCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventCategoryException":
      throw await de_InvalidEventCategoryExceptionRes(parsedOutput, context);
    case "InvalidLookupAttributesException":
    case "com.amazonaws.cloudtrail#InvalidLookupAttributesException":
      throw await de_InvalidLookupAttributesExceptionRes(parsedOutput, context);
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail#InvalidMaxResultsException":
      throw await de_InvalidMaxResultsExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail#InvalidTimeRangeException":
      throw await de_InvalidTimeRangeExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutEventSelectorsCommand
 */
export const de_PutEventSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEventSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutEventSelectorsResponse(data, context);
  const response: PutEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutEventSelectorsCommandError
 */
const de_PutEventSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
      throw await de_InvalidEventSelectorsExceptionRes(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await de_InvalidHomeRegionExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutInsightSelectorsCommand
 */
export const de_PutInsightSelectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightSelectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInsightSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutInsightSelectorsResponse(data, context);
  const response: PutInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutInsightSelectorsCommandError
 */
const de_PutInsightSelectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightSelectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await de_InsufficientS3BucketPolicyExceptionRes(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await de_InvalidHomeRegionExceptionRes(parsedOutput, context);
    case "InvalidInsightSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidInsightSelectorsException":
      throw await de_InvalidInsightSelectorsExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await de_S3BucketDoesNotExistExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceARNNotValidException":
    case "com.amazonaws.cloudtrail#ResourceARNNotValidException":
      throw await de_ResourceARNNotValidExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourcePolicyNotValidException":
    case "com.amazonaws.cloudtrail#ResourcePolicyNotValidException":
      throw await de_ResourcePolicyNotValidExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RegisterOrganizationDelegatedAdminCommand
 */
export const de_RegisterOrganizationDelegatedAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationDelegatedAdminCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterOrganizationDelegatedAdminCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterOrganizationDelegatedAdminResponse(data, context);
  const response: RegisterOrganizationDelegatedAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterOrganizationDelegatedAdminCommandError
 */
const de_RegisterOrganizationDelegatedAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterOrganizationDelegatedAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountNotFoundException":
    case "com.amazonaws.cloudtrail#AccountNotFoundException":
      throw await de_AccountNotFoundExceptionRes(parsedOutput, context);
    case "AccountRegisteredException":
    case "com.amazonaws.cloudtrail#AccountRegisteredException":
      throw await de_AccountRegisteredExceptionRes(parsedOutput, context);
    case "CannotDelegateManagementAccountException":
    case "com.amazonaws.cloudtrail#CannotDelegateManagementAccountException":
      throw await de_CannotDelegateManagementAccountExceptionRes(parsedOutput, context);
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DelegatedAdminAccountLimitExceededException":
    case "com.amazonaws.cloudtrail#DelegatedAdminAccountLimitExceededException":
      throw await de_DelegatedAdminAccountLimitExceededExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotOrganizationManagementAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationManagementAccountException":
      throw await de_NotOrganizationManagementAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsResponse(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsCommandError
 */
const de_RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail#InvalidTagParameterException":
      throw await de_InvalidTagParameterExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail#ResourceTypeNotSupportedException":
      throw await de_ResourceTypeNotSupportedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RestoreEventDataStoreCommand
 */
export const de_RestoreEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreEventDataStoreResponse(data, context);
  const response: RestoreEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RestoreEventDataStoreCommandError
 */
const de_RestoreEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreMaxLimitExceededException":
    case "com.amazonaws.cloudtrail#EventDataStoreMaxLimitExceededException":
      throw await de_EventDataStoreMaxLimitExceededExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreStatusException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreStatusException":
      throw await de_InvalidEventDataStoreStatusExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartImportCommand
 */
export const de_StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartImportResponse(data, context);
  const response: StartImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartImportCommandError
 */
const de_StartImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccountHasOngoingImportException":
    case "com.amazonaws.cloudtrail#AccountHasOngoingImportException":
      throw await de_AccountHasOngoingImportExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "ImportNotFoundException":
    case "com.amazonaws.cloudtrail#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreCategoryException":
      throw await de_InvalidEventDataStoreCategoryExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreStatusException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreStatusException":
      throw await de_InvalidEventDataStoreStatusExceptionRes(parsedOutput, context);
    case "InvalidImportSourceException":
    case "com.amazonaws.cloudtrail#InvalidImportSourceException":
      throw await de_InvalidImportSourceExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartLoggingCommand
 */
export const de_StartLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartLoggingResponse(data, context);
  const response: StartLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartLoggingCommandError
 */
const de_StartLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await de_InvalidHomeRegionExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await de_InsufficientS3BucketPolicyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidQueryStatementException":
    case "com.amazonaws.cloudtrail#InvalidQueryStatementException":
      throw await de_InvalidQueryStatementExceptionRes(parsedOutput, context);
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
      throw await de_InvalidS3BucketNameExceptionRes(parsedOutput, context);
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
      throw await de_InvalidS3PrefixExceptionRes(parsedOutput, context);
    case "MaxConcurrentQueriesException":
    case "com.amazonaws.cloudtrail#MaxConcurrentQueriesException":
      throw await de_MaxConcurrentQueriesExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await de_S3BucketDoesNotExistExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopImportCommand
 */
export const de_StopImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopImportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopImportResponse(data, context);
  const response: StopImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopImportCommandError
 */
const de_StopImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ImportNotFoundException":
    case "com.amazonaws.cloudtrail#ImportNotFoundException":
      throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopLoggingCommand
 */
export const de_StopLoggingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLoggingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopLoggingResponse(data, context);
  const response: StopLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopLoggingCommandError
 */
const de_StopLoggingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLoggingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await de_InvalidHomeRegionExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateChannelCommand
 */
export const de_UpdateChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateChannelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateChannelResponse(data, context);
  const response: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateChannelCommandError
 */
const de_UpdateChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ChannelARNInvalidException":
    case "com.amazonaws.cloudtrail#ChannelARNInvalidException":
      throw await de_ChannelARNInvalidExceptionRes(parsedOutput, context);
    case "ChannelAlreadyExistsException":
    case "com.amazonaws.cloudtrail#ChannelAlreadyExistsException":
      throw await de_ChannelAlreadyExistsExceptionRes(parsedOutput, context);
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreCategoryException":
      throw await de_InvalidEventDataStoreCategoryExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateEventDataStoreCommand
 */
export const de_UpdateEventDataStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDataStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEventDataStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEventDataStoreResponse(data, context);
  const response: UpdateEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEventDataStoreCommandError
 */
const de_UpdateEventDataStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventDataStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreHasOngoingImportException":
    case "com.amazonaws.cloudtrail#EventDataStoreHasOngoingImportException":
      throw await de_EventDataStoreHasOngoingImportExceptionRes(parsedOutput, context);
    case "EventDataStoreNotFoundException":
    case "com.amazonaws.cloudtrail#EventDataStoreNotFoundException":
      throw await de_EventDataStoreNotFoundExceptionRes(parsedOutput, context);
    case "InactiveEventDataStoreException":
    case "com.amazonaws.cloudtrail#InactiveEventDataStoreException":
      throw await de_InactiveEventDataStoreExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
      throw await de_InvalidEventSelectorsExceptionRes(parsedOutput, context);
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
      throw await de_InvalidKmsKeyIdExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
      throw await de_KmsKeyNotFoundExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateTrailCommand
 */
export const de_UpdateTrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTrailResponse(data, context);
  const response: UpdateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTrailCommandError
 */
const de_UpdateTrailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail#CloudTrailAccessNotEnabledException":
      throw await de_CloudTrailAccessNotEnabledExceptionRes(parsedOutput, context);
    case "CloudTrailInvalidClientTokenIdException":
    case "com.amazonaws.cloudtrail#CloudTrailInvalidClientTokenIdException":
      throw await de_CloudTrailInvalidClientTokenIdExceptionRes(parsedOutput, context);
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail#CloudWatchLogsDeliveryUnavailableException":
      throw await de_CloudWatchLogsDeliveryUnavailableExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientEncryptionPolicyException":
      throw await de_InsufficientEncryptionPolicyExceptionRes(parsedOutput, context);
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientS3BucketPolicyException":
      throw await de_InsufficientS3BucketPolicyExceptionRes(parsedOutput, context);
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail#InsufficientSnsTopicPolicyException":
      throw await de_InsufficientSnsTopicPolicyExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsLogGroupArnException":
      throw await de_InvalidCloudWatchLogsLogGroupArnExceptionRes(parsedOutput, context);
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail#InvalidCloudWatchLogsRoleArnException":
      throw await de_InvalidCloudWatchLogsRoleArnExceptionRes(parsedOutput, context);
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail#InvalidEventSelectorsException":
      throw await de_InvalidEventSelectorsExceptionRes(parsedOutput, context);
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail#InvalidHomeRegionException":
      throw await de_InvalidHomeRegionExceptionRes(parsedOutput, context);
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail#InvalidKmsKeyIdException":
      throw await de_InvalidKmsKeyIdExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cloudtrail#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail#InvalidS3BucketNameException":
      throw await de_InvalidS3BucketNameExceptionRes(parsedOutput, context);
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail#InvalidS3PrefixException":
      throw await de_InvalidS3PrefixExceptionRes(parsedOutput, context);
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail#InvalidSnsTopicNameException":
      throw await de_InvalidSnsTopicNameExceptionRes(parsedOutput, context);
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail#InvalidTrailNameException":
      throw await de_InvalidTrailNameExceptionRes(parsedOutput, context);
    case "KmsException":
    case "com.amazonaws.cloudtrail#KmsException":
      throw await de_KmsExceptionRes(parsedOutput, context);
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail#KmsKeyDisabledException":
      throw await de_KmsKeyDisabledExceptionRes(parsedOutput, context);
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail#KmsKeyNotFoundException":
      throw await de_KmsKeyNotFoundExceptionRes(parsedOutput, context);
    case "NoManagementAccountSLRExistsException":
    case "com.amazonaws.cloudtrail#NoManagementAccountSLRExistsException":
      throw await de_NoManagementAccountSLRExistsExceptionRes(parsedOutput, context);
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail#NotOrganizationMasterAccountException":
      throw await de_NotOrganizationMasterAccountExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail#OrganizationNotInAllFeaturesModeException":
      throw await de_OrganizationNotInAllFeaturesModeExceptionRes(parsedOutput, context);
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail#OrganizationsNotInUseException":
      throw await de_OrganizationsNotInUseExceptionRes(parsedOutput, context);
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail#S3BucketDoesNotExistException":
      throw await de_S3BucketDoesNotExistExceptionRes(parsedOutput, context);
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail#TrailNotFoundException":
      throw await de_TrailNotFoundExceptionRes(parsedOutput, context);
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail#TrailNotProvidedException":
      throw await de_TrailNotProvidedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1AccountHasOngoingImportExceptionRes
 */
const de_AccountHasOngoingImportExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountHasOngoingImportException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountHasOngoingImportException(body, context);
  const exception = new AccountHasOngoingImportException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountNotFoundExceptionRes
 */
const de_AccountNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountNotFoundException(body, context);
  const exception = new AccountNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountNotRegisteredExceptionRes
 */
const de_AccountNotRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountNotRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountNotRegisteredException(body, context);
  const exception = new AccountNotRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1AccountRegisteredExceptionRes
 */
const de_AccountRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccountRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_AccountRegisteredException(body, context);
  const exception = new AccountRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CannotDelegateManagementAccountExceptionRes
 */
const de_CannotDelegateManagementAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDelegateManagementAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CannotDelegateManagementAccountException(body, context);
  const exception = new CannotDelegateManagementAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ChannelAlreadyExistsExceptionRes
 */
const de_ChannelAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChannelAlreadyExistsException(body, context);
  const exception = new ChannelAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ChannelARNInvalidExceptionRes
 */
const de_ChannelARNInvalidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelARNInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChannelARNInvalidException(body, context);
  const exception = new ChannelARNInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ChannelExistsForEDSExceptionRes
 */
const de_ChannelExistsForEDSExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelExistsForEDSException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChannelExistsForEDSException(body, context);
  const exception = new ChannelExistsForEDSException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ChannelMaxLimitExceededExceptionRes
 */
const de_ChannelMaxLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelMaxLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChannelMaxLimitExceededException(body, context);
  const exception = new ChannelMaxLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ChannelNotFoundExceptionRes
 */
const de_ChannelNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ChannelNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ChannelNotFoundException(body, context);
  const exception = new ChannelNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionRes
 */
const de_CloudTrailAccessNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudTrailAccessNotEnabledException(body, context);
  const exception = new CloudTrailAccessNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudTrailARNInvalidExceptionRes
 */
const de_CloudTrailARNInvalidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailARNInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudTrailARNInvalidException(body, context);
  const exception = new CloudTrailARNInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudTrailInvalidClientTokenIdExceptionRes
 */
const de_CloudTrailInvalidClientTokenIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailInvalidClientTokenIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudTrailInvalidClientTokenIdException(body, context);
  const exception = new CloudTrailInvalidClientTokenIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionRes
 */
const de_CloudWatchLogsDeliveryUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudWatchLogsDeliveryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CloudWatchLogsDeliveryUnavailableException(body, context);
  const exception = new CloudWatchLogsDeliveryUnavailableException({
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
  const deserialized: any = de_ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DelegatedAdminAccountLimitExceededExceptionRes
 */
const de_DelegatedAdminAccountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DelegatedAdminAccountLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DelegatedAdminAccountLimitExceededException(body, context);
  const exception = new DelegatedAdminAccountLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EventDataStoreAlreadyExistsExceptionRes
 */
const de_EventDataStoreAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDataStoreAlreadyExistsException(body, context);
  const exception = new EventDataStoreAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EventDataStoreARNInvalidExceptionRes
 */
const de_EventDataStoreARNInvalidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreARNInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDataStoreARNInvalidException(body, context);
  const exception = new EventDataStoreARNInvalidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EventDataStoreHasOngoingImportExceptionRes
 */
const de_EventDataStoreHasOngoingImportExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreHasOngoingImportException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDataStoreHasOngoingImportException(body, context);
  const exception = new EventDataStoreHasOngoingImportException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EventDataStoreMaxLimitExceededExceptionRes
 */
const de_EventDataStoreMaxLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreMaxLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDataStoreMaxLimitExceededException(body, context);
  const exception = new EventDataStoreMaxLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EventDataStoreNotFoundExceptionRes
 */
const de_EventDataStoreNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDataStoreNotFoundException(body, context);
  const exception = new EventDataStoreNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EventDataStoreTerminationProtectedExceptionRes
 */
const de_EventDataStoreTerminationProtectedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EventDataStoreTerminationProtectedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_EventDataStoreTerminationProtectedException(body, context);
  const exception = new EventDataStoreTerminationProtectedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ImportNotFoundExceptionRes
 */
const de_ImportNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ImportNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ImportNotFoundException(body, context);
  const exception = new ImportNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InactiveEventDataStoreExceptionRes
 */
const de_InactiveEventDataStoreExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InactiveEventDataStoreException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InactiveEventDataStoreException(body, context);
  const exception = new InactiveEventDataStoreException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InactiveQueryExceptionRes
 */
const de_InactiveQueryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InactiveQueryException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InactiveQueryException(body, context);
  const exception = new InactiveQueryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsightNotEnabledExceptionRes
 */
const de_InsightNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsightNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsightNotEnabledException(body, context);
  const exception = new InsightNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionRes
 */
const de_InsufficientDependencyServiceAccessPermissionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDependencyServiceAccessPermissionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientDependencyServiceAccessPermissionException(body, context);
  const exception = new InsufficientDependencyServiceAccessPermissionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientEncryptionPolicyExceptionRes
 */
const de_InsufficientEncryptionPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientEncryptionPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientEncryptionPolicyException(body, context);
  const exception = new InsufficientEncryptionPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientS3BucketPolicyExceptionRes
 */
const de_InsufficientS3BucketPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientS3BucketPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientS3BucketPolicyException(body, context);
  const exception = new InsufficientS3BucketPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionRes
 */
const de_InsufficientSnsTopicPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientSnsTopicPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InsufficientSnsTopicPolicyException(body, context);
  const exception = new InsufficientSnsTopicPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionRes
 */
const de_InvalidCloudWatchLogsLogGroupArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsLogGroupArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCloudWatchLogsLogGroupArnException(body, context);
  const exception = new InvalidCloudWatchLogsLogGroupArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionRes
 */
const de_InvalidCloudWatchLogsRoleArnExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsRoleArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidCloudWatchLogsRoleArnException(body, context);
  const exception = new InvalidCloudWatchLogsRoleArnException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDateRangeExceptionRes
 */
const de_InvalidDateRangeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDateRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidDateRangeException(body, context);
  const exception = new InvalidDateRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEventCategoryExceptionRes
 */
const de_InvalidEventCategoryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventCategoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEventCategoryException(body, context);
  const exception = new InvalidEventCategoryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEventDataStoreCategoryExceptionRes
 */
const de_InvalidEventDataStoreCategoryExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventDataStoreCategoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEventDataStoreCategoryException(body, context);
  const exception = new InvalidEventDataStoreCategoryException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEventDataStoreStatusExceptionRes
 */
const de_InvalidEventDataStoreStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventDataStoreStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEventDataStoreStatusException(body, context);
  const exception = new InvalidEventDataStoreStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEventSelectorsExceptionRes
 */
const de_InvalidEventSelectorsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventSelectorsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidEventSelectorsException(body, context);
  const exception = new InvalidEventSelectorsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidHomeRegionExceptionRes
 */
const de_InvalidHomeRegionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHomeRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidHomeRegionException(body, context);
  const exception = new InvalidHomeRegionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidImportSourceExceptionRes
 */
const de_InvalidImportSourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportSourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidImportSourceException(body, context);
  const exception = new InvalidImportSourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInsightSelectorsExceptionRes
 */
const de_InvalidInsightSelectorsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInsightSelectorsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInsightSelectorsException(body, context);
  const exception = new InvalidInsightSelectorsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidKmsKeyIdExceptionRes
 */
const de_InvalidKmsKeyIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKmsKeyIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidKmsKeyIdException(body, context);
  const exception = new InvalidKmsKeyIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLookupAttributesExceptionRes
 */
const de_InvalidLookupAttributesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLookupAttributesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidLookupAttributesException(body, context);
  const exception = new InvalidLookupAttributesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidMaxResultsExceptionRes
 */
const de_InvalidMaxResultsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidMaxResultsException(body, context);
  const exception = new InvalidMaxResultsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterCombinationException(body, context);
  const exception = new InvalidParameterCombinationException({
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
 * deserializeAws_json1_1InvalidQueryStatementExceptionRes
 */
const de_InvalidQueryStatementExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryStatementException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidQueryStatementException(body, context);
  const exception = new InvalidQueryStatementException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidQueryStatusExceptionRes
 */
const de_InvalidQueryStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidQueryStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidQueryStatusException(body, context);
  const exception = new InvalidQueryStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3BucketNameExceptionRes
 */
const de_InvalidS3BucketNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3BucketNameException(body, context);
  const exception = new InvalidS3BucketNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidS3PrefixExceptionRes
 */
const de_InvalidS3PrefixExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3PrefixException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidS3PrefixException(body, context);
  const exception = new InvalidS3PrefixException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSnsTopicNameExceptionRes
 */
const de_InvalidSnsTopicNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSnsTopicNameException(body, context);
  const exception = new InvalidSnsTopicNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSourceExceptionRes
 */
const de_InvalidSourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidSourceException(body, context);
  const exception = new InvalidSourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTagParameterExceptionRes
 */
const de_InvalidTagParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagParameterException(body, context);
  const exception = new InvalidTagParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTimeRangeExceptionRes
 */
const de_InvalidTimeRangeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTimeRangeException(body, context);
  const exception = new InvalidTimeRangeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTokenExceptionRes
 */
const de_InvalidTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTokenException(body, context);
  const exception = new InvalidTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidTrailNameExceptionRes
 */
const de_InvalidTrailNameExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrailNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTrailNameException(body, context);
  const exception = new InvalidTrailNameException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KmsExceptionRes
 */
const de_KmsExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KmsException(body, context);
  const exception = new KmsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KmsKeyDisabledExceptionRes
 */
const de_KmsKeyDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KmsKeyDisabledException(body, context);
  const exception = new KmsKeyDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1KmsKeyNotFoundExceptionRes
 */
const de_KmsKeyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_KmsKeyNotFoundException(body, context);
  const exception = new KmsKeyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaxConcurrentQueriesExceptionRes
 */
const de_MaxConcurrentQueriesExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaxConcurrentQueriesException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaxConcurrentQueriesException(body, context);
  const exception = new MaxConcurrentQueriesException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionRes
 */
const de_MaximumNumberOfTrailsExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumNumberOfTrailsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MaximumNumberOfTrailsExceededException(body, context);
  const exception = new MaximumNumberOfTrailsExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoManagementAccountSLRExistsExceptionRes
 */
const de_NoManagementAccountSLRExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoManagementAccountSLRExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoManagementAccountSLRExistsException(body, context);
  const exception = new NoManagementAccountSLRExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotOrganizationManagementAccountExceptionRes
 */
const de_NotOrganizationManagementAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotOrganizationManagementAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotOrganizationManagementAccountException(body, context);
  const exception = new NotOrganizationManagementAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotOrganizationMasterAccountExceptionRes
 */
const de_NotOrganizationMasterAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotOrganizationMasterAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotOrganizationMasterAccountException(body, context);
  const exception = new NotOrganizationMasterAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionRes
 */
const de_OrganizationNotInAllFeaturesModeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationNotInAllFeaturesModeException(body, context);
  const exception = new OrganizationNotInAllFeaturesModeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OrganizationsNotInUseExceptionRes
 */
const de_OrganizationsNotInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationsNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OrganizationsNotInUseException(body, context);
  const exception = new OrganizationsNotInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1QueryIdNotFoundExceptionRes
 */
const de_QueryIdNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QueryIdNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_QueryIdNotFoundException(body, context);
  const exception = new QueryIdNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceARNNotValidExceptionRes
 */
const de_ResourceARNNotValidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceARNNotValidException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceARNNotValidException(body, context);
  const exception = new ResourceARNNotValidException({
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
 * deserializeAws_json1_1ResourcePolicyNotFoundExceptionRes
 */
const de_ResourcePolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourcePolicyNotFoundException(body, context);
  const exception = new ResourcePolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourcePolicyNotValidExceptionRes
 */
const de_ResourcePolicyNotValidExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePolicyNotValidException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourcePolicyNotValidException(body, context);
  const exception = new ResourcePolicyNotValidException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceTypeNotSupportedExceptionRes
 */
const de_ResourceTypeNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceTypeNotSupportedException(body, context);
  const exception = new ResourceTypeNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1S3BucketDoesNotExistExceptionRes
 */
const de_S3BucketDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3BucketDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_S3BucketDoesNotExistException(body, context);
  const exception = new S3BucketDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagsLimitExceededExceptionRes
 */
const de_TagsLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagsLimitExceededException(body, context);
  const exception = new TagsLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TrailAlreadyExistsExceptionRes
 */
const de_TrailAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrailAlreadyExistsException(body, context);
  const exception = new TrailAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TrailNotFoundExceptionRes
 */
const de_TrailNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrailNotFoundException(body, context);
  const exception = new TrailNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TrailNotProvidedExceptionRes
 */
const de_TrailNotProvidedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailNotProvidedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TrailNotProvidedException(body, context);
  const exception = new TrailNotProvidedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddTagsRequest
 */
const se_AddTagsRequest = (input: AddTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagsList != null && { TagsList: se_TagsList(input.TagsList, context) }),
  };
};

/**
 * serializeAws_json1_1AdvancedEventSelector
 */
const se_AdvancedEventSelector = (input: AdvancedEventSelector, context: __SerdeContext): any => {
  return {
    ...(input.FieldSelectors != null && { FieldSelectors: se_AdvancedFieldSelectors(input.FieldSelectors, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1AdvancedEventSelectors
 */
const se_AdvancedEventSelectors = (input: AdvancedEventSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdvancedEventSelector(entry, context);
    });
};

/**
 * serializeAws_json1_1AdvancedFieldSelector
 */
const se_AdvancedFieldSelector = (input: AdvancedFieldSelector, context: __SerdeContext): any => {
  return {
    ...(input.EndsWith != null && { EndsWith: se_Operator(input.EndsWith, context) }),
    ...(input.Equals != null && { Equals: se_Operator(input.Equals, context) }),
    ...(input.Field != null && { Field: input.Field }),
    ...(input.NotEndsWith != null && { NotEndsWith: se_Operator(input.NotEndsWith, context) }),
    ...(input.NotEquals != null && { NotEquals: se_Operator(input.NotEquals, context) }),
    ...(input.NotStartsWith != null && { NotStartsWith: se_Operator(input.NotStartsWith, context) }),
    ...(input.StartsWith != null && { StartsWith: se_Operator(input.StartsWith, context) }),
  };
};

/**
 * serializeAws_json1_1AdvancedFieldSelectors
 */
const se_AdvancedFieldSelectors = (input: AdvancedFieldSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdvancedFieldSelector(entry, context);
    });
};

/**
 * serializeAws_json1_1CancelQueryRequest
 */
const se_CancelQueryRequest = (input: CancelQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  };
};

/**
 * serializeAws_json1_1CreateChannelRequest
 */
const se_CreateChannelRequest = (input: CreateChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Destinations != null && { Destinations: se_Destinations(input.Destinations, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Tags != null && { Tags: se_TagsList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEventDataStoreRequest
 */
const se_CreateEventDataStoreRequest = (input: CreateEventDataStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedEventSelectors != null && {
      AdvancedEventSelectors: se_AdvancedEventSelectors(input.AdvancedEventSelectors, context),
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MultiRegionEnabled != null && { MultiRegionEnabled: input.MultiRegionEnabled }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationEnabled != null && { OrganizationEnabled: input.OrganizationEnabled }),
    ...(input.RetentionPeriod != null && { RetentionPeriod: input.RetentionPeriod }),
    ...(input.TagsList != null && { TagsList: se_TagsList(input.TagsList, context) }),
    ...(input.TerminationProtectionEnabled != null && {
      TerminationProtectionEnabled: input.TerminationProtectionEnabled,
    }),
  };
};

/**
 * serializeAws_json1_1CreateTrailRequest
 */
const se_CreateTrailRequest = (input: CreateTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.CloudWatchLogsRoleArn != null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.EnableLogFileValidation != null && { EnableLogFileValidation: input.EnableLogFileValidation }),
    ...(input.IncludeGlobalServiceEvents != null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
    ...(input.IsMultiRegionTrail != null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
    ...(input.IsOrganizationTrail != null && { IsOrganizationTrail: input.IsOrganizationTrail }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.SnsTopicName != null && { SnsTopicName: input.SnsTopicName }),
    ...(input.TagsList != null && { TagsList: se_TagsList(input.TagsList, context) }),
  };
};

/**
 * serializeAws_json1_1DataResource
 */
const se_DataResource = (input: DataResource, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Values != null && { Values: se_DataResourceValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1DataResources
 */
const se_DataResources = (input: DataResource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataResource(entry, context);
    });
};

/**
 * serializeAws_json1_1DataResourceValues
 */
const se_DataResourceValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteChannelRequest
 */
const se_DeleteChannelRequest = (input: DeleteChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
  };
};

/**
 * serializeAws_json1_1DeleteEventDataStoreRequest
 */
const se_DeleteEventDataStoreRequest = (input: DeleteEventDataStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
  };
};

/**
 * serializeAws_json1_1DeleteResourcePolicyRequest
 */
const se_DeleteResourcePolicyRequest = (input: DeleteResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteTrailRequest
 */
const se_DeleteTrailRequest = (input: DeleteTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeregisterOrganizationDelegatedAdminRequest
 */
const se_DeregisterOrganizationDelegatedAdminRequest = (
  input: DeregisterOrganizationDelegatedAdminRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DelegatedAdminAccountId != null && { DelegatedAdminAccountId: input.DelegatedAdminAccountId }),
  };
};

/**
 * serializeAws_json1_1DescribeQueryRequest
 */
const se_DescribeQueryRequest = (input: DescribeQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  };
};

/**
 * serializeAws_json1_1DescribeTrailsRequest
 */
const se_DescribeTrailsRequest = (input: DescribeTrailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.includeShadowTrails != null && { includeShadowTrails: input.includeShadowTrails }),
    ...(input.trailNameList != null && { trailNameList: se_TrailNameList(input.trailNameList, context) }),
  };
};

/**
 * serializeAws_json1_1Destination
 */
const se_Destination = (input: Destination, context: __SerdeContext): any => {
  return {
    ...(input.Location != null && { Location: input.Location }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1Destinations
 */
const se_Destinations = (input: Destination[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Destination(entry, context);
    });
};

/**
 * serializeAws_json1_1EventSelector
 */
const se_EventSelector = (input: EventSelector, context: __SerdeContext): any => {
  return {
    ...(input.DataResources != null && { DataResources: se_DataResources(input.DataResources, context) }),
    ...(input.ExcludeManagementEventSources != null && {
      ExcludeManagementEventSources: se_ExcludeManagementEventSources(input.ExcludeManagementEventSources, context),
    }),
    ...(input.IncludeManagementEvents != null && { IncludeManagementEvents: input.IncludeManagementEvents }),
    ...(input.ReadWriteType != null && { ReadWriteType: input.ReadWriteType }),
  };
};

/**
 * serializeAws_json1_1EventSelectors
 */
const se_EventSelectors = (input: EventSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EventSelector(entry, context);
    });
};

/**
 * serializeAws_json1_1ExcludeManagementEventSources
 */
const se_ExcludeManagementEventSources = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetChannelRequest
 */
const se_GetChannelRequest = (input: GetChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
  };
};

/**
 * serializeAws_json1_1GetEventDataStoreRequest
 */
const se_GetEventDataStoreRequest = (input: GetEventDataStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
  };
};

/**
 * serializeAws_json1_1GetEventSelectorsRequest
 */
const se_GetEventSelectorsRequest = (input: GetEventSelectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.TrailName != null && { TrailName: input.TrailName }),
  };
};

/**
 * serializeAws_json1_1GetImportRequest
 */
const se_GetImportRequest = (input: GetImportRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImportId != null && { ImportId: input.ImportId }),
  };
};

/**
 * serializeAws_json1_1GetInsightSelectorsRequest
 */
const se_GetInsightSelectorsRequest = (input: GetInsightSelectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.TrailName != null && { TrailName: input.TrailName }),
  };
};

/**
 * serializeAws_json1_1GetQueryResultsRequest
 */
const se_GetQueryResultsRequest = (input: GetQueryResultsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
    ...(input.MaxQueryResults != null && { MaxQueryResults: input.MaxQueryResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  };
};

/**
 * serializeAws_json1_1GetResourcePolicyRequest
 */
const se_GetResourcePolicyRequest = (input: GetResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1GetTrailRequest
 */
const se_GetTrailRequest = (input: GetTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1GetTrailStatusRequest
 */
const se_GetTrailStatusRequest = (input: GetTrailStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1ImportDestinations
 */
const se_ImportDestinations = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ImportSource
 */
const se_ImportSource = (input: ImportSource, context: __SerdeContext): any => {
  return {
    ...(input.S3 != null && { S3: se_S3ImportSource(input.S3, context) }),
  };
};

/**
 * serializeAws_json1_1InsightSelector
 */
const se_InsightSelector = (input: InsightSelector, context: __SerdeContext): any => {
  return {
    ...(input.InsightType != null && { InsightType: input.InsightType }),
  };
};

/**
 * serializeAws_json1_1InsightSelectors
 */
const se_InsightSelectors = (input: InsightSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InsightSelector(entry, context);
    });
};

/**
 * serializeAws_json1_1ListChannelsRequest
 */
const se_ListChannelsRequest = (input: ListChannelsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEventDataStoresRequest
 */
const se_ListEventDataStoresRequest = (input: ListEventDataStoresRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListImportFailuresRequest
 */
const se_ListImportFailuresRequest = (input: ListImportFailuresRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImportId != null && { ImportId: input.ImportId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListImportsRequest
 */
const se_ListImportsRequest = (input: ListImportsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.ImportStatus != null && { ImportStatus: input.ImportStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPublicKeysRequest
 */
const se_ListPublicKeysRequest = (input: ListPublicKeysRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListQueriesRequest
 */
const se_ListQueriesRequest = (input: ListQueriesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.QueryStatus != null && { QueryStatus: input.QueryStatus }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1ListTagsRequest
 */
const se_ListTagsRequest = (input: ListTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceIdList != null && { ResourceIdList: se_ResourceIdList(input.ResourceIdList, context) }),
  };
};

/**
 * serializeAws_json1_1ListTrailsRequest
 */
const se_ListTrailsRequest = (input: ListTrailsRequest, context: __SerdeContext): any => {
  return {
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1LookupAttribute
 */
const se_LookupAttribute = (input: LookupAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributeKey != null && { AttributeKey: input.AttributeKey }),
    ...(input.AttributeValue != null && { AttributeValue: input.AttributeValue }),
  };
};

/**
 * serializeAws_json1_1LookupAttributesList
 */
const se_LookupAttributesList = (input: LookupAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LookupAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1LookupEventsRequest
 */
const se_LookupEventsRequest = (input: LookupEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EventCategory != null && { EventCategory: input.EventCategory }),
    ...(input.LookupAttributes != null && {
      LookupAttributes: se_LookupAttributesList(input.LookupAttributes, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1Operator
 */
const se_Operator = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PutEventSelectorsRequest
 */
const se_PutEventSelectorsRequest = (input: PutEventSelectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedEventSelectors != null && {
      AdvancedEventSelectors: se_AdvancedEventSelectors(input.AdvancedEventSelectors, context),
    }),
    ...(input.EventSelectors != null && { EventSelectors: se_EventSelectors(input.EventSelectors, context) }),
    ...(input.TrailName != null && { TrailName: input.TrailName }),
  };
};

/**
 * serializeAws_json1_1PutInsightSelectorsRequest
 */
const se_PutInsightSelectorsRequest = (input: PutInsightSelectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.InsightSelectors != null && { InsightSelectors: se_InsightSelectors(input.InsightSelectors, context) }),
    ...(input.TrailName != null && { TrailName: input.TrailName }),
  };
};

/**
 * serializeAws_json1_1PutResourcePolicyRequest
 */
const se_PutResourcePolicyRequest = (input: PutResourcePolicyRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourcePolicy != null && { ResourcePolicy: input.ResourcePolicy }),
  };
};

/**
 * serializeAws_json1_1RegisterOrganizationDelegatedAdminRequest
 */
const se_RegisterOrganizationDelegatedAdminRequest = (
  input: RegisterOrganizationDelegatedAdminRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MemberAccountId != null && { MemberAccountId: input.MemberAccountId }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsRequest
 */
const se_RemoveTagsRequest = (input: RemoveTagsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.TagsList != null && { TagsList: se_TagsList(input.TagsList, context) }),
  };
};

/**
 * serializeAws_json1_1ResourceIdList
 */
const se_ResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RestoreEventDataStoreRequest
 */
const se_RestoreEventDataStoreRequest = (input: RestoreEventDataStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
  };
};

/**
 * serializeAws_json1_1S3ImportSource
 */
const se_S3ImportSource = (input: S3ImportSource, context: __SerdeContext): any => {
  return {
    ...(input.S3BucketAccessRoleArn != null && { S3BucketAccessRoleArn: input.S3BucketAccessRoleArn }),
    ...(input.S3BucketRegion != null && { S3BucketRegion: input.S3BucketRegion }),
    ...(input.S3LocationUri != null && { S3LocationUri: input.S3LocationUri }),
  };
};

/**
 * serializeAws_json1_1StartImportRequest
 */
const se_StartImportRequest = (input: StartImportRequest, context: __SerdeContext): any => {
  return {
    ...(input.Destinations != null && { Destinations: se_ImportDestinations(input.Destinations, context) }),
    ...(input.EndEventTime != null && { EndEventTime: Math.round(input.EndEventTime.getTime() / 1000) }),
    ...(input.ImportId != null && { ImportId: input.ImportId }),
    ...(input.ImportSource != null && { ImportSource: se_ImportSource(input.ImportSource, context) }),
    ...(input.StartEventTime != null && { StartEventTime: Math.round(input.StartEventTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1StartLoggingRequest
 */
const se_StartLoggingRequest = (input: StartLoggingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1StartQueryRequest
 */
const se_StartQueryRequest = (input: StartQueryRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryS3Uri != null && { DeliveryS3Uri: input.DeliveryS3Uri }),
    ...(input.QueryStatement != null && { QueryStatement: input.QueryStatement }),
  };
};

/**
 * serializeAws_json1_1StopImportRequest
 */
const se_StopImportRequest = (input: StopImportRequest, context: __SerdeContext): any => {
  return {
    ...(input.ImportId != null && { ImportId: input.ImportId }),
  };
};

/**
 * serializeAws_json1_1StopLoggingRequest
 */
const se_StopLoggingRequest = (input: StopLoggingRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagsList
 */
const se_TagsList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TrailNameList
 */
const se_TrailNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UpdateChannelRequest
 */
const se_UpdateChannelRequest = (input: UpdateChannelRequest, context: __SerdeContext): any => {
  return {
    ...(input.Channel != null && { Channel: input.Channel }),
    ...(input.Destinations != null && { Destinations: se_Destinations(input.Destinations, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateEventDataStoreRequest
 */
const se_UpdateEventDataStoreRequest = (input: UpdateEventDataStoreRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedEventSelectors != null && {
      AdvancedEventSelectors: se_AdvancedEventSelectors(input.AdvancedEventSelectors, context),
    }),
    ...(input.EventDataStore != null && { EventDataStore: input.EventDataStore }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MultiRegionEnabled != null && { MultiRegionEnabled: input.MultiRegionEnabled }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OrganizationEnabled != null && { OrganizationEnabled: input.OrganizationEnabled }),
    ...(input.RetentionPeriod != null && { RetentionPeriod: input.RetentionPeriod }),
    ...(input.TerminationProtectionEnabled != null && {
      TerminationProtectionEnabled: input.TerminationProtectionEnabled,
    }),
  };
};

/**
 * serializeAws_json1_1UpdateTrailRequest
 */
const se_UpdateTrailRequest = (input: UpdateTrailRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.CloudWatchLogsRoleArn != null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.EnableLogFileValidation != null && { EnableLogFileValidation: input.EnableLogFileValidation }),
    ...(input.IncludeGlobalServiceEvents != null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
    ...(input.IsMultiRegionTrail != null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
    ...(input.IsOrganizationTrail != null && { IsOrganizationTrail: input.IsOrganizationTrail }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.SnsTopicName != null && { SnsTopicName: input.SnsTopicName }),
  };
};

/**
 * deserializeAws_json1_1AccountHasOngoingImportException
 */
const de_AccountHasOngoingImportException = (
  output: any,
  context: __SerdeContext
): AccountHasOngoingImportException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountNotFoundException
 */
const de_AccountNotFoundException = (output: any, context: __SerdeContext): AccountNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountNotRegisteredException
 */
const de_AccountNotRegisteredException = (output: any, context: __SerdeContext): AccountNotRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AccountRegisteredException
 */
const de_AccountRegisteredException = (output: any, context: __SerdeContext): AccountRegisteredException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AddTagsResponse
 */
const de_AddTagsResponse = (output: any, context: __SerdeContext): AddTagsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdvancedEventSelector
 */
const de_AdvancedEventSelector = (output: any, context: __SerdeContext): AdvancedEventSelector => {
  return {
    FieldSelectors:
      output.FieldSelectors != null ? de_AdvancedFieldSelectors(output.FieldSelectors, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AdvancedEventSelectors
 */
const de_AdvancedEventSelectors = (output: any, context: __SerdeContext): AdvancedEventSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdvancedEventSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AdvancedFieldSelector
 */
const de_AdvancedFieldSelector = (output: any, context: __SerdeContext): AdvancedFieldSelector => {
  return {
    EndsWith: output.EndsWith != null ? de_Operator(output.EndsWith, context) : undefined,
    Equals: output.Equals != null ? de_Operator(output.Equals, context) : undefined,
    Field: __expectString(output.Field),
    NotEndsWith: output.NotEndsWith != null ? de_Operator(output.NotEndsWith, context) : undefined,
    NotEquals: output.NotEquals != null ? de_Operator(output.NotEquals, context) : undefined,
    NotStartsWith: output.NotStartsWith != null ? de_Operator(output.NotStartsWith, context) : undefined,
    StartsWith: output.StartsWith != null ? de_Operator(output.StartsWith, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AdvancedFieldSelectors
 */
const de_AdvancedFieldSelectors = (output: any, context: __SerdeContext): AdvancedFieldSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdvancedFieldSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelQueryResponse
 */
const de_CancelQueryResponse = (output: any, context: __SerdeContext): CancelQueryResponse => {
  return {
    QueryId: __expectString(output.QueryId),
    QueryStatus: __expectString(output.QueryStatus),
  } as any;
};

/**
 * deserializeAws_json1_1CannotDelegateManagementAccountException
 */
const de_CannotDelegateManagementAccountException = (
  output: any,
  context: __SerdeContext
): CannotDelegateManagementAccountException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ChannelAlreadyExistsException
 */
const de_ChannelAlreadyExistsException = (output: any, context: __SerdeContext): ChannelAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ChannelARNInvalidException
 */
const de_ChannelARNInvalidException = (output: any, context: __SerdeContext): ChannelARNInvalidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ChannelExistsForEDSException
 */
const de_ChannelExistsForEDSException = (output: any, context: __SerdeContext): ChannelExistsForEDSException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ChannelMaxLimitExceededException
 */
const de_ChannelMaxLimitExceededException = (
  output: any,
  context: __SerdeContext
): ChannelMaxLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ChannelNotFoundException
 */
const de_ChannelNotFoundException = (output: any, context: __SerdeContext): ChannelNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Channels
 */
const de_Channels = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Channel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CloudTrailAccessNotEnabledException
 */
const de_CloudTrailAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): CloudTrailAccessNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudTrailARNInvalidException
 */
const de_CloudTrailARNInvalidException = (output: any, context: __SerdeContext): CloudTrailARNInvalidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudTrailInvalidClientTokenIdException
 */
const de_CloudTrailInvalidClientTokenIdException = (
  output: any,
  context: __SerdeContext
): CloudTrailInvalidClientTokenIdException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException
 */
const de_CloudWatchLogsDeliveryUnavailableException = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDeliveryUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateChannelResponse
 */
const de_CreateChannelResponse = (output: any, context: __SerdeContext): CreateChannelResponse => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Destinations: output.Destinations != null ? de_Destinations(output.Destinations, context) : undefined,
    Name: __expectString(output.Name),
    Source: __expectString(output.Source),
    Tags: output.Tags != null ? de_TagsList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateEventDataStoreResponse
 */
const de_CreateEventDataStoreResponse = (output: any, context: __SerdeContext): CreateEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    KmsKeyId: __expectString(output.KmsKeyId),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TagsList: output.TagsList != null ? de_TagsList(output.TagsList, context) : undefined,
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTrailResponse
 */
const de_CreateTrailResponse = (output: any, context: __SerdeContext): CreateTrailResponse => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicARN: __expectString(output.SnsTopicARN),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1DataResource
 */
const de_DataResource = (output: any, context: __SerdeContext): DataResource => {
  return {
    Type: __expectString(output.Type),
    Values: output.Values != null ? de_DataResourceValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataResources
 */
const de_DataResources = (output: any, context: __SerdeContext): DataResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataResourceValues
 */
const de_DataResourceValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1DelegatedAdminAccountLimitExceededException
 */
const de_DelegatedAdminAccountLimitExceededException = (
  output: any,
  context: __SerdeContext
): DelegatedAdminAccountLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteChannelResponse
 */
const de_DeleteChannelResponse = (output: any, context: __SerdeContext): DeleteChannelResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteEventDataStoreResponse
 */
const de_DeleteEventDataStoreResponse = (output: any, context: __SerdeContext): DeleteEventDataStoreResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteResourcePolicyResponse
 */
const de_DeleteResourcePolicyResponse = (output: any, context: __SerdeContext): DeleteResourcePolicyResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteTrailResponse
 */
const de_DeleteTrailResponse = (output: any, context: __SerdeContext): DeleteTrailResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterOrganizationDelegatedAdminResponse
 */
const de_DeregisterOrganizationDelegatedAdminResponse = (
  output: any,
  context: __SerdeContext
): DeregisterOrganizationDelegatedAdminResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeQueryResponse
 */
const de_DescribeQueryResponse = (output: any, context: __SerdeContext): DescribeQueryResponse => {
  return {
    DeliveryS3Uri: __expectString(output.DeliveryS3Uri),
    DeliveryStatus: __expectString(output.DeliveryStatus),
    ErrorMessage: __expectString(output.ErrorMessage),
    QueryId: __expectString(output.QueryId),
    QueryStatistics:
      output.QueryStatistics != null ? de_QueryStatisticsForDescribeQuery(output.QueryStatistics, context) : undefined,
    QueryStatus: __expectString(output.QueryStatus),
    QueryString: __expectString(output.QueryString),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTrailsResponse
 */
const de_DescribeTrailsResponse = (output: any, context: __SerdeContext): DescribeTrailsResponse => {
  return {
    trailList: output.trailList != null ? de_TrailList(output.trailList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    Location: __expectString(output.Location),
    Type: __expectString(output.Type),
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
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    CloudTrailEvent: __expectString(output.CloudTrailEvent),
    EventId: __expectString(output.EventId),
    EventName: __expectString(output.EventName),
    EventSource: __expectString(output.EventSource),
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    ReadOnly: __expectString(output.ReadOnly),
    Resources: output.Resources != null ? de_ResourceList(output.Resources, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStore
 */
const de_EventDataStore = (output: any, context: __SerdeContext): EventDataStore => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStoreAlreadyExistsException
 */
const de_EventDataStoreAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): EventDataStoreAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStoreARNInvalidException
 */
const de_EventDataStoreARNInvalidException = (
  output: any,
  context: __SerdeContext
): EventDataStoreARNInvalidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStoreHasOngoingImportException
 */
const de_EventDataStoreHasOngoingImportException = (
  output: any,
  context: __SerdeContext
): EventDataStoreHasOngoingImportException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStoreMaxLimitExceededException
 */
const de_EventDataStoreMaxLimitExceededException = (
  output: any,
  context: __SerdeContext
): EventDataStoreMaxLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStoreNotFoundException
 */
const de_EventDataStoreNotFoundException = (output: any, context: __SerdeContext): EventDataStoreNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EventDataStores
 */
const de_EventDataStores = (output: any, context: __SerdeContext): EventDataStore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventDataStore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventDataStoreTerminationProtectedException
 */
const de_EventDataStoreTerminationProtectedException = (
  output: any,
  context: __SerdeContext
): EventDataStoreTerminationProtectedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1EventSelector
 */
const de_EventSelector = (output: any, context: __SerdeContext): EventSelector => {
  return {
    DataResources: output.DataResources != null ? de_DataResources(output.DataResources, context) : undefined,
    ExcludeManagementEventSources:
      output.ExcludeManagementEventSources != null
        ? de_ExcludeManagementEventSources(output.ExcludeManagementEventSources, context)
        : undefined,
    IncludeManagementEvents: __expectBoolean(output.IncludeManagementEvents),
    ReadWriteType: __expectString(output.ReadWriteType),
  } as any;
};

/**
 * deserializeAws_json1_1EventSelectors
 */
const de_EventSelectors = (output: any, context: __SerdeContext): EventSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventsList
 */
const de_EventsList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExcludeManagementEventSources
 */
const de_ExcludeManagementEventSources = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1GetChannelResponse
 */
const de_GetChannelResponse = (output: any, context: __SerdeContext): GetChannelResponse => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Destinations: output.Destinations != null ? de_Destinations(output.Destinations, context) : undefined,
    IngestionStatus: output.IngestionStatus != null ? de_IngestionStatus(output.IngestionStatus, context) : undefined,
    Name: __expectString(output.Name),
    Source: __expectString(output.Source),
    SourceConfig: output.SourceConfig != null ? de_SourceConfig(output.SourceConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetEventDataStoreResponse
 */
const de_GetEventDataStoreResponse = (output: any, context: __SerdeContext): GetEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    KmsKeyId: __expectString(output.KmsKeyId),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetEventSelectorsResponse
 */
const de_GetEventSelectorsResponse = (output: any, context: __SerdeContext): GetEventSelectorsResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    EventSelectors: output.EventSelectors != null ? de_EventSelectors(output.EventSelectors, context) : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1GetImportResponse
 */
const de_GetImportResponse = (output: any, context: __SerdeContext): GetImportResponse => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Destinations: output.Destinations != null ? de_ImportDestinations(output.Destinations, context) : undefined,
    EndEventTime:
      output.EndEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndEventTime)))
        : undefined,
    ImportId: __expectString(output.ImportId),
    ImportSource: output.ImportSource != null ? de_ImportSource(output.ImportSource, context) : undefined,
    ImportStatistics:
      output.ImportStatistics != null ? de_ImportStatistics(output.ImportStatistics, context) : undefined,
    ImportStatus: __expectString(output.ImportStatus),
    StartEventTime:
      output.StartEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartEventTime)))
        : undefined,
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInsightSelectorsResponse
 */
const de_GetInsightSelectorsResponse = (output: any, context: __SerdeContext): GetInsightSelectorsResponse => {
  return {
    InsightSelectors:
      output.InsightSelectors != null ? de_InsightSelectors(output.InsightSelectors, context) : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1GetQueryResultsResponse
 */
const de_GetQueryResultsResponse = (output: any, context: __SerdeContext): GetQueryResultsResponse => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    NextToken: __expectString(output.NextToken),
    QueryResultRows: output.QueryResultRows != null ? de_QueryResultRows(output.QueryResultRows, context) : undefined,
    QueryStatistics: output.QueryStatistics != null ? de_QueryStatistics(output.QueryStatistics, context) : undefined,
    QueryStatus: __expectString(output.QueryStatus),
  } as any;
};

/**
 * deserializeAws_json1_1GetResourcePolicyResponse
 */
const de_GetResourcePolicyResponse = (output: any, context: __SerdeContext): GetResourcePolicyResponse => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    ResourcePolicy: __expectString(output.ResourcePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1GetTrailResponse
 */
const de_GetTrailResponse = (output: any, context: __SerdeContext): GetTrailResponse => {
  return {
    Trail: output.Trail != null ? de_Trail(output.Trail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTrailStatusResponse
 */
const de_GetTrailStatusResponse = (output: any, context: __SerdeContext): GetTrailStatusResponse => {
  return {
    IsLogging: __expectBoolean(output.IsLogging),
    LatestCloudWatchLogsDeliveryError: __expectString(output.LatestCloudWatchLogsDeliveryError),
    LatestCloudWatchLogsDeliveryTime:
      output.LatestCloudWatchLogsDeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestCloudWatchLogsDeliveryTime)))
        : undefined,
    LatestDeliveryAttemptSucceeded: __expectString(output.LatestDeliveryAttemptSucceeded),
    LatestDeliveryAttemptTime: __expectString(output.LatestDeliveryAttemptTime),
    LatestDeliveryError: __expectString(output.LatestDeliveryError),
    LatestDeliveryTime:
      output.LatestDeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestDeliveryTime)))
        : undefined,
    LatestDigestDeliveryError: __expectString(output.LatestDigestDeliveryError),
    LatestDigestDeliveryTime:
      output.LatestDigestDeliveryTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestDigestDeliveryTime)))
        : undefined,
    LatestNotificationAttemptSucceeded: __expectString(output.LatestNotificationAttemptSucceeded),
    LatestNotificationAttemptTime: __expectString(output.LatestNotificationAttemptTime),
    LatestNotificationError: __expectString(output.LatestNotificationError),
    LatestNotificationTime:
      output.LatestNotificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestNotificationTime)))
        : undefined,
    StartLoggingTime:
      output.StartLoggingTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartLoggingTime)))
        : undefined,
    StopLoggingTime:
      output.StopLoggingTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StopLoggingTime)))
        : undefined,
    TimeLoggingStarted: __expectString(output.TimeLoggingStarted),
    TimeLoggingStopped: __expectString(output.TimeLoggingStopped),
  } as any;
};

/**
 * deserializeAws_json1_1ImportDestinations
 */
const de_ImportDestinations = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ImportFailureList
 */
const de_ImportFailureList = (output: any, context: __SerdeContext): ImportFailureListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportFailureListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportFailureListItem
 */
const de_ImportFailureListItem = (output: any, context: __SerdeContext): ImportFailureListItem => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Location: __expectString(output.Location),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ImportNotFoundException
 */
const de_ImportNotFoundException = (output: any, context: __SerdeContext): ImportNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ImportsList
 */
const de_ImportsList = (output: any, context: __SerdeContext): ImportsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportsListItem
 */
const de_ImportsListItem = (output: any, context: __SerdeContext): ImportsListItem => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Destinations: output.Destinations != null ? de_ImportDestinations(output.Destinations, context) : undefined,
    ImportId: __expectString(output.ImportId),
    ImportStatus: __expectString(output.ImportStatus),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportSource
 */
const de_ImportSource = (output: any, context: __SerdeContext): ImportSource => {
  return {
    S3: output.S3 != null ? de_S3ImportSource(output.S3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportStatistics
 */
const de_ImportStatistics = (output: any, context: __SerdeContext): ImportStatistics => {
  return {
    EventsCompleted: __expectLong(output.EventsCompleted),
    FailedEntries: __expectLong(output.FailedEntries),
    FilesCompleted: __expectLong(output.FilesCompleted),
    PrefixesCompleted: __expectLong(output.PrefixesCompleted),
    PrefixesFound: __expectLong(output.PrefixesFound),
  } as any;
};

/**
 * deserializeAws_json1_1InactiveEventDataStoreException
 */
const de_InactiveEventDataStoreException = (output: any, context: __SerdeContext): InactiveEventDataStoreException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InactiveQueryException
 */
const de_InactiveQueryException = (output: any, context: __SerdeContext): InactiveQueryException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1IngestionStatus
 */
const de_IngestionStatus = (output: any, context: __SerdeContext): IngestionStatus => {
  return {
    LatestIngestionAttemptEventID: __expectString(output.LatestIngestionAttemptEventID),
    LatestIngestionAttemptTime:
      output.LatestIngestionAttemptTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestIngestionAttemptTime)))
        : undefined,
    LatestIngestionErrorCode: __expectString(output.LatestIngestionErrorCode),
    LatestIngestionSuccessEventID: __expectString(output.LatestIngestionSuccessEventID),
    LatestIngestionSuccessTime:
      output.LatestIngestionSuccessTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LatestIngestionSuccessTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InsightNotEnabledException
 */
const de_InsightNotEnabledException = (output: any, context: __SerdeContext): InsightNotEnabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InsightSelector
 */
const de_InsightSelector = (output: any, context: __SerdeContext): InsightSelector => {
  return {
    InsightType: __expectString(output.InsightType),
  } as any;
};

/**
 * deserializeAws_json1_1InsightSelectors
 */
const de_InsightSelectors = (output: any, context: __SerdeContext): InsightSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InsightSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException
 */
const de_InsufficientDependencyServiceAccessPermissionException = (
  output: any,
  context: __SerdeContext
): InsufficientDependencyServiceAccessPermissionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientEncryptionPolicyException
 */
const de_InsufficientEncryptionPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientEncryptionPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientS3BucketPolicyException
 */
const de_InsufficientS3BucketPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientS3BucketPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InsufficientSnsTopicPolicyException
 */
const de_InsufficientSnsTopicPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientSnsTopicPolicyException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException
 */
const de_InvalidCloudWatchLogsLogGroupArnException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchLogsLogGroupArnException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException
 */
const de_InvalidCloudWatchLogsRoleArnException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchLogsRoleArnException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDateRangeException
 */
const de_InvalidDateRangeException = (output: any, context: __SerdeContext): InvalidDateRangeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEventCategoryException
 */
const de_InvalidEventCategoryException = (output: any, context: __SerdeContext): InvalidEventCategoryException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEventDataStoreCategoryException
 */
const de_InvalidEventDataStoreCategoryException = (
  output: any,
  context: __SerdeContext
): InvalidEventDataStoreCategoryException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEventDataStoreStatusException
 */
const de_InvalidEventDataStoreStatusException = (
  output: any,
  context: __SerdeContext
): InvalidEventDataStoreStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEventSelectorsException
 */
const de_InvalidEventSelectorsException = (output: any, context: __SerdeContext): InvalidEventSelectorsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidHomeRegionException
 */
const de_InvalidHomeRegionException = (output: any, context: __SerdeContext): InvalidHomeRegionException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidImportSourceException
 */
const de_InvalidImportSourceException = (output: any, context: __SerdeContext): InvalidImportSourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInsightSelectorsException
 */
const de_InvalidInsightSelectorsException = (
  output: any,
  context: __SerdeContext
): InvalidInsightSelectorsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidKmsKeyIdException
 */
const de_InvalidKmsKeyIdException = (output: any, context: __SerdeContext): InvalidKmsKeyIdException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLookupAttributesException
 */
const de_InvalidLookupAttributesException = (
  output: any,
  context: __SerdeContext
): InvalidLookupAttributesException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidMaxResultsException
 */
const de_InvalidMaxResultsException = (output: any, context: __SerdeContext): InvalidMaxResultsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterCombinationException
 */
const de_InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidQueryStatementException
 */
const de_InvalidQueryStatementException = (output: any, context: __SerdeContext): InvalidQueryStatementException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidQueryStatusException
 */
const de_InvalidQueryStatusException = (output: any, context: __SerdeContext): InvalidQueryStatusException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidS3BucketNameException
 */
const de_InvalidS3BucketNameException = (output: any, context: __SerdeContext): InvalidS3BucketNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidS3PrefixException
 */
const de_InvalidS3PrefixException = (output: any, context: __SerdeContext): InvalidS3PrefixException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSnsTopicNameException
 */
const de_InvalidSnsTopicNameException = (output: any, context: __SerdeContext): InvalidSnsTopicNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSourceException
 */
const de_InvalidSourceException = (output: any, context: __SerdeContext): InvalidSourceException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagParameterException
 */
const de_InvalidTagParameterException = (output: any, context: __SerdeContext): InvalidTagParameterException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTimeRangeException
 */
const de_InvalidTimeRangeException = (output: any, context: __SerdeContext): InvalidTimeRangeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTokenException
 */
const de_InvalidTokenException = (output: any, context: __SerdeContext): InvalidTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTrailNameException
 */
const de_InvalidTrailNameException = (output: any, context: __SerdeContext): InvalidTrailNameException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1KmsException
 */
const de_KmsException = (output: any, context: __SerdeContext): KmsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1KmsKeyDisabledException
 */
const de_KmsKeyDisabledException = (output: any, context: __SerdeContext): KmsKeyDisabledException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1KmsKeyNotFoundException
 */
const de_KmsKeyNotFoundException = (output: any, context: __SerdeContext): KmsKeyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListChannelsResponse
 */
const de_ListChannelsResponse = (output: any, context: __SerdeContext): ListChannelsResponse => {
  return {
    Channels: output.Channels != null ? de_Channels(output.Channels, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventDataStoresResponse
 */
const de_ListEventDataStoresResponse = (output: any, context: __SerdeContext): ListEventDataStoresResponse => {
  return {
    EventDataStores: output.EventDataStores != null ? de_EventDataStores(output.EventDataStores, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListImportFailuresResponse
 */
const de_ListImportFailuresResponse = (output: any, context: __SerdeContext): ListImportFailuresResponse => {
  return {
    Failures: output.Failures != null ? de_ImportFailureList(output.Failures, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListImportsResponse
 */
const de_ListImportsResponse = (output: any, context: __SerdeContext): ListImportsResponse => {
  return {
    Imports: output.Imports != null ? de_ImportsList(output.Imports, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPublicKeysResponse
 */
const de_ListPublicKeysResponse = (output: any, context: __SerdeContext): ListPublicKeysResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PublicKeyList: output.PublicKeyList != null ? de_PublicKeyList(output.PublicKeyList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListQueriesResponse
 */
const de_ListQueriesResponse = (output: any, context: __SerdeContext): ListQueriesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Queries: output.Queries != null ? de_Queries(output.Queries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsResponse
 */
const de_ListTagsResponse = (output: any, context: __SerdeContext): ListTagsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceTagList: output.ResourceTagList != null ? de_ResourceTagList(output.ResourceTagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTrailsResponse
 */
const de_ListTrailsResponse = (output: any, context: __SerdeContext): ListTrailsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Trails: output.Trails != null ? de_Trails(output.Trails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LookupEventsResponse
 */
const de_LookupEventsResponse = (output: any, context: __SerdeContext): LookupEventsResponse => {
  return {
    Events: output.Events != null ? de_EventsList(output.Events, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1MaxConcurrentQueriesException
 */
const de_MaxConcurrentQueriesException = (output: any, context: __SerdeContext): MaxConcurrentQueriesException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MaximumNumberOfTrailsExceededException
 */
const de_MaximumNumberOfTrailsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumNumberOfTrailsExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NoManagementAccountSLRExistsException
 */
const de_NoManagementAccountSLRExistsException = (
  output: any,
  context: __SerdeContext
): NoManagementAccountSLRExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NotOrganizationManagementAccountException
 */
const de_NotOrganizationManagementAccountException = (
  output: any,
  context: __SerdeContext
): NotOrganizationManagementAccountException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NotOrganizationMasterAccountException
 */
const de_NotOrganizationMasterAccountException = (
  output: any,
  context: __SerdeContext
): NotOrganizationMasterAccountException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Operator
 */
const de_Operator = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1OrganizationNotInAllFeaturesModeException
 */
const de_OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OrganizationsNotInUseException
 */
const de_OrganizationsNotInUseException = (output: any, context: __SerdeContext): OrganizationsNotInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1PublicKey
 */
const de_PublicKey = (output: any, context: __SerdeContext): PublicKey => {
  return {
    Fingerprint: __expectString(output.Fingerprint),
    ValidityEndTime:
      output.ValidityEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidityEndTime)))
        : undefined,
    ValidityStartTime:
      output.ValidityStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ValidityStartTime)))
        : undefined,
    Value: output.Value != null ? context.base64Decoder(output.Value) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PublicKeyList
 */
const de_PublicKeyList = (output: any, context: __SerdeContext): PublicKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PublicKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutEventSelectorsResponse
 */
const de_PutEventSelectorsResponse = (output: any, context: __SerdeContext): PutEventSelectorsResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    EventSelectors: output.EventSelectors != null ? de_EventSelectors(output.EventSelectors, context) : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1PutInsightSelectorsResponse
 */
const de_PutInsightSelectorsResponse = (output: any, context: __SerdeContext): PutInsightSelectorsResponse => {
  return {
    InsightSelectors:
      output.InsightSelectors != null ? de_InsightSelectors(output.InsightSelectors, context) : undefined,
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1PutResourcePolicyResponse
 */
const de_PutResourcePolicyResponse = (output: any, context: __SerdeContext): PutResourcePolicyResponse => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
    ResourcePolicy: __expectString(output.ResourcePolicy),
  } as any;
};

/**
 * deserializeAws_json1_1Queries
 */
const de_Queries = (output: any, context: __SerdeContext): Query[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Query(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Query
 */
const de_Query = (output: any, context: __SerdeContext): Query => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    QueryId: __expectString(output.QueryId),
    QueryStatus: __expectString(output.QueryStatus),
  } as any;
};

/**
 * deserializeAws_json1_1QueryIdNotFoundException
 */
const de_QueryIdNotFoundException = (output: any, context: __SerdeContext): QueryIdNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1QueryResultColumn
 */
const de_QueryResultColumn = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1QueryResultRow
 */
const de_QueryResultRow = (output: any, context: __SerdeContext): Record<string, string>[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryResultColumn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryResultRows
 */
const de_QueryResultRows = (output: any, context: __SerdeContext): Record<string, string>[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_QueryResultRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryStatistics
 */
const de_QueryStatistics = (output: any, context: __SerdeContext): QueryStatistics => {
  return {
    BytesScanned: __expectLong(output.BytesScanned),
    ResultsCount: __expectInt32(output.ResultsCount),
    TotalResultsCount: __expectInt32(output.TotalResultsCount),
  } as any;
};

/**
 * deserializeAws_json1_1QueryStatisticsForDescribeQuery
 */
const de_QueryStatisticsForDescribeQuery = (output: any, context: __SerdeContext): QueryStatisticsForDescribeQuery => {
  return {
    BytesScanned: __expectLong(output.BytesScanned),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EventsMatched: __expectLong(output.EventsMatched),
    EventsScanned: __expectLong(output.EventsScanned),
    ExecutionTimeInMillis: __expectInt32(output.ExecutionTimeInMillis),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterOrganizationDelegatedAdminResponse
 */
const de_RegisterOrganizationDelegatedAdminResponse = (
  output: any,
  context: __SerdeContext
): RegisterOrganizationDelegatedAdminResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RemoveTagsResponse
 */
const de_RemoveTagsResponse = (output: any, context: __SerdeContext): RemoveTagsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceARNNotValidException
 */
const de_ResourceARNNotValidException = (output: any, context: __SerdeContext): ResourceARNNotValidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Resource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyNotFoundException
 */
const de_ResourcePolicyNotFoundException = (output: any, context: __SerdeContext): ResourcePolicyNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourcePolicyNotValidException
 */
const de_ResourcePolicyNotValidException = (output: any, context: __SerdeContext): ResourcePolicyNotValidException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTag
 */
const de_ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    ResourceId: __expectString(output.ResourceId),
    TagsList: output.TagsList != null ? de_TagsList(output.TagsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceTagList
 */
const de_ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceTypeNotSupportedException
 */
const de_ResourceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ResourceTypeNotSupportedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreEventDataStoreResponse
 */
const de_RestoreEventDataStoreResponse = (output: any, context: __SerdeContext): RestoreEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    KmsKeyId: __expectString(output.KmsKeyId),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1S3BucketDoesNotExistException
 */
const de_S3BucketDoesNotExistException = (output: any, context: __SerdeContext): S3BucketDoesNotExistException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3ImportSource
 */
const de_S3ImportSource = (output: any, context: __SerdeContext): S3ImportSource => {
  return {
    S3BucketAccessRoleArn: __expectString(output.S3BucketAccessRoleArn),
    S3BucketRegion: __expectString(output.S3BucketRegion),
    S3LocationUri: __expectString(output.S3LocationUri),
  } as any;
};

/**
 * deserializeAws_json1_1SourceConfig
 */
const de_SourceConfig = (output: any, context: __SerdeContext): SourceConfig => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    ApplyToAllRegions: __expectBoolean(output.ApplyToAllRegions),
  } as any;
};

/**
 * deserializeAws_json1_1StartImportResponse
 */
const de_StartImportResponse = (output: any, context: __SerdeContext): StartImportResponse => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Destinations: output.Destinations != null ? de_ImportDestinations(output.Destinations, context) : undefined,
    EndEventTime:
      output.EndEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndEventTime)))
        : undefined,
    ImportId: __expectString(output.ImportId),
    ImportSource: output.ImportSource != null ? de_ImportSource(output.ImportSource, context) : undefined,
    ImportStatus: __expectString(output.ImportStatus),
    StartEventTime:
      output.StartEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartEventTime)))
        : undefined,
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartLoggingResponse
 */
const de_StartLoggingResponse = (output: any, context: __SerdeContext): StartLoggingResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartQueryResponse
 */
const de_StartQueryResponse = (output: any, context: __SerdeContext): StartQueryResponse => {
  return {
    QueryId: __expectString(output.QueryId),
  } as any;
};

/**
 * deserializeAws_json1_1StopImportResponse
 */
const de_StopImportResponse = (output: any, context: __SerdeContext): StopImportResponse => {
  return {
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    Destinations: output.Destinations != null ? de_ImportDestinations(output.Destinations, context) : undefined,
    EndEventTime:
      output.EndEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndEventTime)))
        : undefined,
    ImportId: __expectString(output.ImportId),
    ImportSource: output.ImportSource != null ? de_ImportSource(output.ImportSource, context) : undefined,
    ImportStatistics:
      output.ImportStatistics != null ? de_ImportStatistics(output.ImportStatistics, context) : undefined,
    ImportStatus: __expectString(output.ImportStatus),
    StartEventTime:
      output.StartEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartEventTime)))
        : undefined,
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopLoggingResponse
 */
const de_StopLoggingResponse = (output: any, context: __SerdeContext): StopLoggingResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagsLimitExceededException
 */
const de_TagsLimitExceededException = (output: any, context: __SerdeContext): TagsLimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TagsList
 */
const de_TagsList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Trail
 */
const de_Trail = (output: any, context: __SerdeContext): Trail => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    HasCustomEventSelectors: __expectBoolean(output.HasCustomEventSelectors),
    HasInsightSelectors: __expectBoolean(output.HasInsightSelectors),
    HomeRegion: __expectString(output.HomeRegion),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicARN: __expectString(output.SnsTopicARN),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1TrailAlreadyExistsException
 */
const de_TrailAlreadyExistsException = (output: any, context: __SerdeContext): TrailAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TrailInfo
 */
const de_TrailInfo = (output: any, context: __SerdeContext): TrailInfo => {
  return {
    HomeRegion: __expectString(output.HomeRegion),
    Name: __expectString(output.Name),
    TrailARN: __expectString(output.TrailARN),
  } as any;
};

/**
 * deserializeAws_json1_1TrailList
 */
const de_TrailList = (output: any, context: __SerdeContext): Trail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Trail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrailNotFoundException
 */
const de_TrailNotFoundException = (output: any, context: __SerdeContext): TrailNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1TrailNotProvidedException
 */
const de_TrailNotProvidedException = (output: any, context: __SerdeContext): TrailNotProvidedException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Trails
 */
const de_Trails = (output: any, context: __SerdeContext): TrailInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TrailInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateChannelResponse
 */
const de_UpdateChannelResponse = (output: any, context: __SerdeContext): UpdateChannelResponse => {
  return {
    ChannelArn: __expectString(output.ChannelArn),
    Destinations: output.Destinations != null ? de_Destinations(output.Destinations, context) : undefined,
    Name: __expectString(output.Name),
    Source: __expectString(output.Source),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateEventDataStoreResponse
 */
const de_UpdateEventDataStoreResponse = (output: any, context: __SerdeContext): UpdateEventDataStoreResponse => {
  return {
    AdvancedEventSelectors:
      output.AdvancedEventSelectors != null
        ? de_AdvancedEventSelectors(output.AdvancedEventSelectors, context)
        : undefined,
    CreatedTimestamp:
      output.CreatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTimestamp)))
        : undefined,
    EventDataStoreArn: __expectString(output.EventDataStoreArn),
    KmsKeyId: __expectString(output.KmsKeyId),
    MultiRegionEnabled: __expectBoolean(output.MultiRegionEnabled),
    Name: __expectString(output.Name),
    OrganizationEnabled: __expectBoolean(output.OrganizationEnabled),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    Status: __expectString(output.Status),
    TerminationProtectionEnabled: __expectBoolean(output.TerminationProtectionEnabled),
    UpdatedTimestamp:
      output.UpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTrailResponse
 */
const de_UpdateTrailResponse = (output: any, context: __SerdeContext): UpdateTrailResponse => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicARN: __expectString(output.SnsTopicARN),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailARN: __expectString(output.TrailARN),
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
