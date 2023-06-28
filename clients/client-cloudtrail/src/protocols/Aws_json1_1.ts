// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  StartEventDataStoreIngestionCommandInput,
  StartEventDataStoreIngestionCommandOutput,
} from "../commands/StartEventDataStoreIngestionCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { StartLoggingCommandInput, StartLoggingCommandOutput } from "../commands/StartLoggingCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import {
  StopEventDataStoreIngestionCommandInput,
  StopEventDataStoreIngestionCommandOutput,
} from "../commands/StopEventDataStoreIngestionCommand";
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
  AdvancedEventSelector,
  AdvancedFieldSelector,
  CancelQueryRequest,
  CannotDelegateManagementAccountException,
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
  CreateEventDataStoreRequest,
  CreateEventDataStoreResponse,
  CreateTrailRequest,
  DataResource,
  DelegatedAdminAccountLimitExceededException,
  DeleteChannelRequest,
  DeleteEventDataStoreRequest,
  DeleteResourcePolicyRequest,
  DeleteTrailRequest,
  DeregisterOrganizationDelegatedAdminRequest,
  DescribeQueryRequest,
  DescribeQueryResponse,
  DescribeTrailsRequest,
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
  GetImportRequest,
  GetImportResponse,
  GetInsightSelectorsRequest,
  GetQueryResultsRequest,
  GetResourcePolicyRequest,
  GetTrailRequest,
  GetTrailStatusRequest,
  GetTrailStatusResponse,
  ImportFailureListItem,
  ImportNotFoundException,
  ImportsListItem,
  ImportSource,
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
  ListTrailsRequest,
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
  PutInsightSelectorsRequest,
  PutResourcePolicyRequest,
  Query,
  QueryIdNotFoundException,
  QueryStatisticsForDescribeQuery,
  RegisterOrganizationDelegatedAdminRequest,
  RemoveTagsRequest,
  ResourceARNNotValidException,
  ResourceNotFoundException,
  ResourcePolicyNotFoundException,
  ResourcePolicyNotValidException,
  ResourceTypeNotSupportedException,
  RestoreEventDataStoreRequest,
  RestoreEventDataStoreResponse,
  S3BucketDoesNotExistException,
  S3ImportSource,
  StartEventDataStoreIngestionRequest,
  StartImportRequest,
  StartImportResponse,
  StartLoggingRequest,
  StartQueryRequest,
  StopEventDataStoreIngestionRequest,
  StopImportRequest,
  StopImportResponse,
  StopLoggingRequest,
  Tag,
  TagsLimitExceededException,
  TrailAlreadyExistsException,
  TrailNotFoundException,
  TrailNotProvidedException,
  UnsupportedOperationException,
  UpdateChannelRequest,
  UpdateEventDataStoreRequest,
  UpdateEventDataStoreResponse,
  UpdateTrailRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelQueryCommand
 */
export const se_CancelQueryCommand = async (
  input: CancelQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelQuery");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateChannelCommand
 */
export const se_CreateChannelCommand = async (
  input: CreateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEventDataStoreCommand
 */
export const se_CreateEventDataStoreCommand = async (
  input: CreateEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEventDataStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrailCommand
 */
export const se_CreateTrailCommand = async (
  input: CreateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteChannelCommand
 */
export const se_DeleteChannelCommand = async (
  input: DeleteChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventDataStoreCommand
 */
export const se_DeleteEventDataStoreCommand = async (
  input: DeleteEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventDataStore");
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
 * serializeAws_json1_1DeleteTrailCommand
 */
export const se_DeleteTrailCommand = async (
  input: DeleteTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand
 */
export const se_DeregisterOrganizationDelegatedAdminCommand = async (
  input: DeregisterOrganizationDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterOrganizationDelegatedAdmin");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeQueryCommand
 */
export const se_DescribeQueryCommand = async (
  input: DescribeQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeQuery");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrailsCommand
 */
export const se_DescribeTrailsCommand = async (
  input: DescribeTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetChannelCommand
 */
export const se_GetChannelCommand = async (
  input: GetChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventDataStoreCommand
 */
export const se_GetEventDataStoreCommand = async (
  input: GetEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventDataStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEventSelectorsCommand
 */
export const se_GetEventSelectorsCommand = async (
  input: GetEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEventSelectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetImportCommand
 */
export const se_GetImportCommand = async (
  input: GetImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetImport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInsightSelectorsCommand
 */
export const se_GetInsightSelectorsCommand = async (
  input: GetInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInsightSelectors");
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
 * serializeAws_json1_1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTrailCommand
 */
export const se_GetTrailCommand = async (
  input: GetTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTrail");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTrailStatusCommand
 */
export const se_GetTrailStatusCommand = async (
  input: GetTrailStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTrailStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListChannelsCommand
 */
export const se_ListChannelsCommand = async (
  input: ListChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListChannels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventDataStoresCommand
 */
export const se_ListEventDataStoresCommand = async (
  input: ListEventDataStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventDataStores");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImportFailuresCommand
 */
export const se_ListImportFailuresCommand = async (
  input: ListImportFailuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImportFailures");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImports");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPublicKeysCommand
 */
export const se_ListPublicKeysCommand = async (
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPublicKeys");
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
  const headers: __HeaderBag = sharedHeaders("ListQueries");
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
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrailsCommand
 */
export const se_ListTrailsCommand = async (
  input: ListTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrails");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LookupEventsCommand
 */
export const se_LookupEventsCommand = async (
  input: LookupEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("LookupEvents");
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
  const headers: __HeaderBag = sharedHeaders("PutEventSelectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutInsightSelectorsCommand
 */
export const se_PutInsightSelectorsCommand = async (
  input: PutInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutInsightSelectors");
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
 * serializeAws_json1_1RegisterOrganizationDelegatedAdminCommand
 */
export const se_RegisterOrganizationDelegatedAdminCommand = async (
  input: RegisterOrganizationDelegatedAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterOrganizationDelegatedAdmin");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreEventDataStoreCommand
 */
export const se_RestoreEventDataStoreCommand = async (
  input: RestoreEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreEventDataStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEventDataStoreIngestionCommand
 */
export const se_StartEventDataStoreIngestionCommand = async (
  input: StartEventDataStoreIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEventDataStoreIngestion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartImportCommand
 */
export const se_StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartImport");
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
  const headers: __HeaderBag = sharedHeaders("StartLogging");
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
 * serializeAws_json1_1StopEventDataStoreIngestionCommand
 */
export const se_StopEventDataStoreIngestionCommand = async (
  input: StopEventDataStoreIngestionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEventDataStoreIngestion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopImportCommand
 */
export const se_StopImportCommand = async (
  input: StopImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopImport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopLoggingCommand
 */
export const se_StopLoggingCommand = async (
  input: StopLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopLogging");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateChannelCommand
 */
export const se_UpdateChannelCommand = async (
  input: UpdateChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateChannel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEventDataStoreCommand
 */
export const se_UpdateEventDataStoreCommand = async (
  input: UpdateEventDataStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEventDataStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrailCommand
 */
export const se_UpdateTrailCommand = async (
  input: UpdateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrail");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "ChannelARNInvalidException":
    case "com.amazonaws.cloudtrail#ChannelARNInvalidException":
      throw await de_ChannelARNInvalidExceptionRes(parsedOutput, context);
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CancelQueryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteEventDataStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterOrganizationDelegatedAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
  contents = _json(data);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListChannelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "ChannelARNInvalidException":
    case "com.amazonaws.cloudtrail#ChannelARNInvalidException":
      throw await de_ChannelARNInvalidExceptionRes(parsedOutput, context);
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "ConflictException":
    case "com.amazonaws.cloudtrail#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterOrganizationDelegatedAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
    case "ChannelARNInvalidException":
    case "com.amazonaws.cloudtrail#ChannelARNInvalidException":
      throw await de_ChannelARNInvalidExceptionRes(parsedOutput, context);
    case "ChannelNotFoundException":
    case "com.amazonaws.cloudtrail#ChannelNotFoundException":
      throw await de_ChannelNotFoundExceptionRes(parsedOutput, context);
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail#CloudTrailARNInvalidException":
      throw await de_CloudTrailARNInvalidExceptionRes(parsedOutput, context);
    case "EventDataStoreARNInvalidException":
    case "com.amazonaws.cloudtrail#EventDataStoreARNInvalidException":
      throw await de_EventDataStoreARNInvalidExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartEventDataStoreIngestionCommand
 */
export const de_StartEventDataStoreIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEventDataStoreIngestionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartEventDataStoreIngestionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartEventDataStoreIngestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartEventDataStoreIngestionCommandError
 */
const de_StartEventDataStoreIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEventDataStoreIngestionCommandOutput> => {
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
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreCategoryException":
      throw await de_InvalidEventDataStoreCategoryExceptionRes(parsedOutput, context);
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
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopEventDataStoreIngestionCommand
 */
export const de_StopEventDataStoreIngestionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEventDataStoreIngestionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEventDataStoreIngestionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopEventDataStoreIngestionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEventDataStoreIngestionCommandError
 */
const de_StopEventDataStoreIngestionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEventDataStoreIngestionCommandOutput> => {
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
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail#InsufficientDependencyServiceAccessPermissionException":
      throw await de_InsufficientDependencyServiceAccessPermissionExceptionRes(parsedOutput, context);
    case "InvalidEventDataStoreCategoryException":
    case "com.amazonaws.cloudtrail#InvalidEventDataStoreCategoryException":
      throw await de_InvalidEventDataStoreCategoryExceptionRes(parsedOutput, context);
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
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateChannelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
    case "EventDataStoreAlreadyExistsException":
    case "com.amazonaws.cloudtrail#EventDataStoreAlreadyExistsException":
      throw await de_EventDataStoreAlreadyExistsExceptionRes(parsedOutput, context);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddTagsRequest omitted.

// se_AdvancedEventSelector omitted.

// se_AdvancedEventSelectors omitted.

// se_AdvancedFieldSelector omitted.

// se_AdvancedFieldSelectors omitted.

// se_CancelQueryRequest omitted.

// se_CreateChannelRequest omitted.

// se_CreateEventDataStoreRequest omitted.

// se_CreateTrailRequest omitted.

// se_DataResource omitted.

// se_DataResources omitted.

// se_DataResourceValues omitted.

// se_DeleteChannelRequest omitted.

// se_DeleteEventDataStoreRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteTrailRequest omitted.

// se_DeregisterOrganizationDelegatedAdminRequest omitted.

// se_DescribeQueryRequest omitted.

// se_DescribeTrailsRequest omitted.

// se_Destination omitted.

// se_Destinations omitted.

// se_EventSelector omitted.

// se_EventSelectors omitted.

// se_ExcludeManagementEventSources omitted.

// se_GetChannelRequest omitted.

// se_GetEventDataStoreRequest omitted.

// se_GetEventSelectorsRequest omitted.

// se_GetImportRequest omitted.

// se_GetInsightSelectorsRequest omitted.

// se_GetQueryResultsRequest omitted.

// se_GetResourcePolicyRequest omitted.

// se_GetTrailRequest omitted.

// se_GetTrailStatusRequest omitted.

// se_ImportDestinations omitted.

// se_ImportSource omitted.

// se_InsightSelector omitted.

// se_InsightSelectors omitted.

// se_ListChannelsRequest omitted.

// se_ListEventDataStoresRequest omitted.

// se_ListImportFailuresRequest omitted.

// se_ListImportsRequest omitted.

/**
 * serializeAws_json1_1ListPublicKeysRequest
 */
const se_ListPublicKeysRequest = (input: ListPublicKeysRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    NextToken: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1ListQueriesRequest
 */
const se_ListQueriesRequest = (input: ListQueriesRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    EventDataStore: [],
    MaxResults: [],
    NextToken: [],
    QueryStatus: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ListTagsRequest omitted.

// se_ListTrailsRequest omitted.

// se_LookupAttribute omitted.

// se_LookupAttributesList omitted.

/**
 * serializeAws_json1_1LookupEventsRequest
 */
const se_LookupEventsRequest = (input: LookupEventsRequest, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    EventCategory: [],
    LookupAttributes: _json,
    MaxResults: [],
    NextToken: [],
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_Operator omitted.

// se_PutEventSelectorsRequest omitted.

// se_PutInsightSelectorsRequest omitted.

// se_PutResourcePolicyRequest omitted.

// se_QueryParameters omitted.

// se_RegisterOrganizationDelegatedAdminRequest omitted.

// se_RemoveTagsRequest omitted.

// se_ResourceIdList omitted.

// se_RestoreEventDataStoreRequest omitted.

// se_S3ImportSource omitted.

// se_StartEventDataStoreIngestionRequest omitted.

/**
 * serializeAws_json1_1StartImportRequest
 */
const se_StartImportRequest = (input: StartImportRequest, context: __SerdeContext): any => {
  return take(input, {
    Destinations: _json,
    EndEventTime: (_) => Math.round(_.getTime() / 1000),
    ImportId: [],
    ImportSource: _json,
    StartEventTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_StartLoggingRequest omitted.

// se_StartQueryRequest omitted.

// se_StopEventDataStoreIngestionRequest omitted.

// se_StopImportRequest omitted.

// se_StopLoggingRequest omitted.

// se_Tag omitted.

// se_TagsList omitted.

// se_TrailNameList omitted.

// se_UpdateChannelRequest omitted.

// se_UpdateEventDataStoreRequest omitted.

// se_UpdateTrailRequest omitted.

// de_AccountHasOngoingImportException omitted.

// de_AccountNotFoundException omitted.

// de_AccountNotRegisteredException omitted.

// de_AccountRegisteredException omitted.

// de_AddTagsResponse omitted.

// de_AdvancedEventSelector omitted.

// de_AdvancedEventSelectors omitted.

// de_AdvancedFieldSelector omitted.

// de_AdvancedFieldSelectors omitted.

// de_CancelQueryResponse omitted.

// de_CannotDelegateManagementAccountException omitted.

// de_Channel omitted.

// de_ChannelAlreadyExistsException omitted.

// de_ChannelARNInvalidException omitted.

// de_ChannelExistsForEDSException omitted.

// de_ChannelMaxLimitExceededException omitted.

// de_ChannelNotFoundException omitted.

// de_Channels omitted.

// de_CloudTrailAccessNotEnabledException omitted.

// de_CloudTrailARNInvalidException omitted.

// de_CloudTrailInvalidClientTokenIdException omitted.

// de_CloudWatchLogsDeliveryUnavailableException omitted.

// de_ConflictException omitted.

// de_CreateChannelResponse omitted.

/**
 * deserializeAws_json1_1CreateEventDataStoreResponse
 */
const de_CreateEventDataStoreResponse = (output: any, context: __SerdeContext): CreateEventDataStoreResponse => {
  return take(output, {
    AdvancedEventSelectors: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventDataStoreArn: __expectString,
    KmsKeyId: __expectString,
    MultiRegionEnabled: __expectBoolean,
    Name: __expectString,
    OrganizationEnabled: __expectBoolean,
    RetentionPeriod: __expectInt32,
    Status: __expectString,
    TagsList: _json,
    TerminationProtectionEnabled: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CreateTrailResponse omitted.

// de_DataResource omitted.

// de_DataResources omitted.

// de_DataResourceValues omitted.

// de_DelegatedAdminAccountLimitExceededException omitted.

// de_DeleteChannelResponse omitted.

// de_DeleteEventDataStoreResponse omitted.

// de_DeleteResourcePolicyResponse omitted.

// de_DeleteTrailResponse omitted.

// de_DeregisterOrganizationDelegatedAdminResponse omitted.

/**
 * deserializeAws_json1_1DescribeQueryResponse
 */
const de_DescribeQueryResponse = (output: any, context: __SerdeContext): DescribeQueryResponse => {
  return take(output, {
    DeliveryS3Uri: __expectString,
    DeliveryStatus: __expectString,
    ErrorMessage: __expectString,
    QueryId: __expectString,
    QueryStatistics: (_: any) => de_QueryStatisticsForDescribeQuery(_, context),
    QueryStatus: __expectString,
    QueryString: __expectString,
  }) as any;
};

// de_DescribeTrailsResponse omitted.

// de_Destination omitted.

// de_Destinations omitted.

/**
 * deserializeAws_json1_1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return take(output, {
    AccessKeyId: __expectString,
    CloudTrailEvent: __expectString,
    EventId: __expectString,
    EventName: __expectString,
    EventSource: __expectString,
    EventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReadOnly: __expectString,
    Resources: _json,
    Username: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventDataStore
 */
const de_EventDataStore = (output: any, context: __SerdeContext): EventDataStore => {
  return take(output, {
    AdvancedEventSelectors: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventDataStoreArn: __expectString,
    MultiRegionEnabled: __expectBoolean,
    Name: __expectString,
    OrganizationEnabled: __expectBoolean,
    RetentionPeriod: __expectInt32,
    Status: __expectString,
    TerminationProtectionEnabled: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_EventDataStoreAlreadyExistsException omitted.

// de_EventDataStoreARNInvalidException omitted.

// de_EventDataStoreHasOngoingImportException omitted.

// de_EventDataStoreMaxLimitExceededException omitted.

// de_EventDataStoreNotFoundException omitted.

/**
 * deserializeAws_json1_1EventDataStores
 */
const de_EventDataStores = (output: any, context: __SerdeContext): EventDataStore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventDataStore(entry, context);
    });
  return retVal;
};

// de_EventDataStoreTerminationProtectedException omitted.

// de_EventSelector omitted.

// de_EventSelectors omitted.

/**
 * deserializeAws_json1_1EventsList
 */
const de_EventsList = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Event(entry, context);
    });
  return retVal;
};

// de_ExcludeManagementEventSources omitted.

/**
 * deserializeAws_json1_1GetChannelResponse
 */
const de_GetChannelResponse = (output: any, context: __SerdeContext): GetChannelResponse => {
  return take(output, {
    ChannelArn: __expectString,
    Destinations: _json,
    IngestionStatus: (_: any) => de_IngestionStatus(_, context),
    Name: __expectString,
    Source: __expectString,
    SourceConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1GetEventDataStoreResponse
 */
const de_GetEventDataStoreResponse = (output: any, context: __SerdeContext): GetEventDataStoreResponse => {
  return take(output, {
    AdvancedEventSelectors: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventDataStoreArn: __expectString,
    KmsKeyId: __expectString,
    MultiRegionEnabled: __expectBoolean,
    Name: __expectString,
    OrganizationEnabled: __expectBoolean,
    RetentionPeriod: __expectInt32,
    Status: __expectString,
    TerminationProtectionEnabled: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetEventSelectorsResponse omitted.

/**
 * deserializeAws_json1_1GetImportResponse
 */
const de_GetImportResponse = (output: any, context: __SerdeContext): GetImportResponse => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destinations: _json,
    EndEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImportId: __expectString,
    ImportSource: _json,
    ImportStatistics: _json,
    ImportStatus: __expectString,
    StartEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetInsightSelectorsResponse omitted.

// de_GetQueryResultsResponse omitted.

// de_GetResourcePolicyResponse omitted.

// de_GetTrailResponse omitted.

/**
 * deserializeAws_json1_1GetTrailStatusResponse
 */
const de_GetTrailStatusResponse = (output: any, context: __SerdeContext): GetTrailStatusResponse => {
  return take(output, {
    IsLogging: __expectBoolean,
    LatestCloudWatchLogsDeliveryError: __expectString,
    LatestCloudWatchLogsDeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestDeliveryAttemptSucceeded: __expectString,
    LatestDeliveryAttemptTime: __expectString,
    LatestDeliveryError: __expectString,
    LatestDeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestDigestDeliveryError: __expectString,
    LatestDigestDeliveryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestNotificationAttemptSucceeded: __expectString,
    LatestNotificationAttemptTime: __expectString,
    LatestNotificationError: __expectString,
    LatestNotificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartLoggingTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StopLoggingTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TimeLoggingStarted: __expectString,
    TimeLoggingStopped: __expectString,
  }) as any;
};

// de_ImportDestinations omitted.

/**
 * deserializeAws_json1_1ImportFailureList
 */
const de_ImportFailureList = (output: any, context: __SerdeContext): ImportFailureListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportFailureListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportFailureListItem
 */
const de_ImportFailureListItem = (output: any, context: __SerdeContext): ImportFailureListItem => {
  return take(output, {
    ErrorMessage: __expectString,
    ErrorType: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Location: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ImportNotFoundException omitted.

/**
 * deserializeAws_json1_1ImportsList
 */
const de_ImportsList = (output: any, context: __SerdeContext): ImportsListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportsListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImportsListItem
 */
const de_ImportsListItem = (output: any, context: __SerdeContext): ImportsListItem => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destinations: _json,
    ImportId: __expectString,
    ImportStatus: __expectString,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ImportSource omitted.

// de_ImportStatistics omitted.

// de_InactiveEventDataStoreException omitted.

// de_InactiveQueryException omitted.

/**
 * deserializeAws_json1_1IngestionStatus
 */
const de_IngestionStatus = (output: any, context: __SerdeContext): IngestionStatus => {
  return take(output, {
    LatestIngestionAttemptEventID: __expectString,
    LatestIngestionAttemptTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestIngestionErrorCode: __expectString,
    LatestIngestionSuccessEventID: __expectString,
    LatestIngestionSuccessTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_InsightNotEnabledException omitted.

// de_InsightSelector omitted.

// de_InsightSelectors omitted.

// de_InsufficientDependencyServiceAccessPermissionException omitted.

// de_InsufficientEncryptionPolicyException omitted.

// de_InsufficientS3BucketPolicyException omitted.

// de_InsufficientSnsTopicPolicyException omitted.

// de_InvalidCloudWatchLogsLogGroupArnException omitted.

// de_InvalidCloudWatchLogsRoleArnException omitted.

// de_InvalidDateRangeException omitted.

// de_InvalidEventCategoryException omitted.

// de_InvalidEventDataStoreCategoryException omitted.

// de_InvalidEventDataStoreStatusException omitted.

// de_InvalidEventSelectorsException omitted.

// de_InvalidHomeRegionException omitted.

// de_InvalidImportSourceException omitted.

// de_InvalidInsightSelectorsException omitted.

// de_InvalidKmsKeyIdException omitted.

// de_InvalidLookupAttributesException omitted.

// de_InvalidMaxResultsException omitted.

// de_InvalidNextTokenException omitted.

// de_InvalidParameterCombinationException omitted.

// de_InvalidParameterException omitted.

// de_InvalidQueryStatementException omitted.

// de_InvalidQueryStatusException omitted.

// de_InvalidS3BucketNameException omitted.

// de_InvalidS3PrefixException omitted.

// de_InvalidSnsTopicNameException omitted.

// de_InvalidSourceException omitted.

// de_InvalidTagParameterException omitted.

// de_InvalidTimeRangeException omitted.

// de_InvalidTokenException omitted.

// de_InvalidTrailNameException omitted.

// de_KmsException omitted.

// de_KmsKeyDisabledException omitted.

// de_KmsKeyNotFoundException omitted.

// de_ListChannelsResponse omitted.

/**
 * deserializeAws_json1_1ListEventDataStoresResponse
 */
const de_ListEventDataStoresResponse = (output: any, context: __SerdeContext): ListEventDataStoresResponse => {
  return take(output, {
    EventDataStores: (_: any) => de_EventDataStores(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImportFailuresResponse
 */
const de_ListImportFailuresResponse = (output: any, context: __SerdeContext): ListImportFailuresResponse => {
  return take(output, {
    Failures: (_: any) => de_ImportFailureList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImportsResponse
 */
const de_ListImportsResponse = (output: any, context: __SerdeContext): ListImportsResponse => {
  return take(output, {
    Imports: (_: any) => de_ImportsList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListPublicKeysResponse
 */
const de_ListPublicKeysResponse = (output: any, context: __SerdeContext): ListPublicKeysResponse => {
  return take(output, {
    NextToken: __expectString,
    PublicKeyList: (_: any) => de_PublicKeyList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListQueriesResponse
 */
const de_ListQueriesResponse = (output: any, context: __SerdeContext): ListQueriesResponse => {
  return take(output, {
    NextToken: __expectString,
    Queries: (_: any) => de_Queries(_, context),
  }) as any;
};

// de_ListTagsResponse omitted.

// de_ListTrailsResponse omitted.

/**
 * deserializeAws_json1_1LookupEventsResponse
 */
const de_LookupEventsResponse = (output: any, context: __SerdeContext): LookupEventsResponse => {
  return take(output, {
    Events: (_: any) => de_EventsList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_MaxConcurrentQueriesException omitted.

// de_MaximumNumberOfTrailsExceededException omitted.

// de_NoManagementAccountSLRExistsException omitted.

// de_NotOrganizationManagementAccountException omitted.

// de_NotOrganizationMasterAccountException omitted.

// de_OperationNotPermittedException omitted.

// de_Operator omitted.

// de_OrganizationNotInAllFeaturesModeException omitted.

// de_OrganizationsNotInUseException omitted.

/**
 * deserializeAws_json1_1PublicKey
 */
const de_PublicKey = (output: any, context: __SerdeContext): PublicKey => {
  return take(output, {
    Fingerprint: __expectString,
    ValidityEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ValidityStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: context.base64Decoder,
  }) as any;
};

/**
 * deserializeAws_json1_1PublicKeyList
 */
const de_PublicKeyList = (output: any, context: __SerdeContext): PublicKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PublicKey(entry, context);
    });
  return retVal;
};

// de_PutEventSelectorsResponse omitted.

// de_PutInsightSelectorsResponse omitted.

// de_PutResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_1Queries
 */
const de_Queries = (output: any, context: __SerdeContext): Query[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Query(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Query
 */
const de_Query = (output: any, context: __SerdeContext): Query => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    QueryId: __expectString,
    QueryStatus: __expectString,
  }) as any;
};

// de_QueryIdNotFoundException omitted.

// de_QueryResultColumn omitted.

// de_QueryResultRow omitted.

// de_QueryResultRows omitted.

// de_QueryStatistics omitted.

/**
 * deserializeAws_json1_1QueryStatisticsForDescribeQuery
 */
const de_QueryStatisticsForDescribeQuery = (output: any, context: __SerdeContext): QueryStatisticsForDescribeQuery => {
  return take(output, {
    BytesScanned: __expectLong,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventsMatched: __expectLong,
    EventsScanned: __expectLong,
    ExecutionTimeInMillis: __expectInt32,
  }) as any;
};

// de_RegisterOrganizationDelegatedAdminResponse omitted.

// de_RemoveTagsResponse omitted.

// de_Resource omitted.

// de_ResourceARNNotValidException omitted.

// de_ResourceList omitted.

// de_ResourceNotFoundException omitted.

// de_ResourcePolicyNotFoundException omitted.

// de_ResourcePolicyNotValidException omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

// de_ResourceTypeNotSupportedException omitted.

/**
 * deserializeAws_json1_1RestoreEventDataStoreResponse
 */
const de_RestoreEventDataStoreResponse = (output: any, context: __SerdeContext): RestoreEventDataStoreResponse => {
  return take(output, {
    AdvancedEventSelectors: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventDataStoreArn: __expectString,
    KmsKeyId: __expectString,
    MultiRegionEnabled: __expectBoolean,
    Name: __expectString,
    OrganizationEnabled: __expectBoolean,
    RetentionPeriod: __expectInt32,
    Status: __expectString,
    TerminationProtectionEnabled: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_S3BucketDoesNotExistException omitted.

// de_S3ImportSource omitted.

// de_SourceConfig omitted.

// de_StartEventDataStoreIngestionResponse omitted.

/**
 * deserializeAws_json1_1StartImportResponse
 */
const de_StartImportResponse = (output: any, context: __SerdeContext): StartImportResponse => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destinations: _json,
    EndEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImportId: __expectString,
    ImportSource: _json,
    ImportStatus: __expectString,
    StartEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_StartLoggingResponse omitted.

// de_StartQueryResponse omitted.

// de_StopEventDataStoreIngestionResponse omitted.

/**
 * deserializeAws_json1_1StopImportResponse
 */
const de_StopImportResponse = (output: any, context: __SerdeContext): StopImportResponse => {
  return take(output, {
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destinations: _json,
    EndEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImportId: __expectString,
    ImportSource: _json,
    ImportStatistics: _json,
    ImportStatus: __expectString,
    StartEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_StopLoggingResponse omitted.

// de_Tag omitted.

// de_TagsLimitExceededException omitted.

// de_TagsList omitted.

// de_Trail omitted.

// de_TrailAlreadyExistsException omitted.

// de_TrailInfo omitted.

// de_TrailList omitted.

// de_TrailNotFoundException omitted.

// de_TrailNotProvidedException omitted.

// de_Trails omitted.

// de_UnsupportedOperationException omitted.

// de_UpdateChannelResponse omitted.

/**
 * deserializeAws_json1_1UpdateEventDataStoreResponse
 */
const de_UpdateEventDataStoreResponse = (output: any, context: __SerdeContext): UpdateEventDataStoreResponse => {
  return take(output, {
    AdvancedEventSelectors: _json,
    CreatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventDataStoreArn: __expectString,
    KmsKeyId: __expectString,
    MultiRegionEnabled: __expectBoolean,
    Name: __expectString,
    OrganizationEnabled: __expectBoolean,
    RetentionPeriod: __expectInt32,
    Status: __expectString,
    TerminationProtectionEnabled: __expectBoolean,
    UpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_UpdateTrailResponse omitted.

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
    "x-amz-target": `CloudTrail_20131101.${operation}`,
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
