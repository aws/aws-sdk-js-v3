// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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

import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput,
} from "../commands/ActivateEventSourceCommand";
import { CancelReplayCommandInput, CancelReplayCommandOutput } from "../commands/CancelReplayCommand";
import {
  CreateApiDestinationCommandInput,
  CreateApiDestinationCommandOutput,
} from "../commands/CreateApiDestinationCommand";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput } from "../commands/CreateArchiveCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput } from "../commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput,
} from "../commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput,
} from "../commands/DeactivateEventSourceCommand";
import {
  DeauthorizeConnectionCommandInput,
  DeauthorizeConnectionCommandOutput,
} from "../commands/DeauthorizeConnectionCommand";
import {
  DeleteApiDestinationCommandInput,
  DeleteApiDestinationCommandOutput,
} from "../commands/DeleteApiDestinationCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "../commands/DeleteArchiveCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput } from "../commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput,
} from "../commands/DeletePartnerEventSourceCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import {
  DescribeApiDestinationCommandInput,
  DescribeApiDestinationCommandOutput,
} from "../commands/DescribeApiDestinationCommand";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput } from "../commands/DescribeArchiveCommand";
import { DescribeConnectionCommandInput, DescribeConnectionCommandOutput } from "../commands/DescribeConnectionCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "../commands/DescribeEndpointCommand";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput } from "../commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput,
} from "../commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput,
} from "../commands/DescribePartnerEventSourceCommand";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput } from "../commands/DescribeReplayCommand";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput } from "../commands/DescribeRuleCommand";
import { DisableRuleCommandInput, DisableRuleCommandOutput } from "../commands/DisableRuleCommand";
import { EnableRuleCommandInput, EnableRuleCommandOutput } from "../commands/EnableRuleCommand";
import {
  ListApiDestinationsCommandInput,
  ListApiDestinationsCommandOutput,
} from "../commands/ListApiDestinationsCommand";
import { ListArchivesCommandInput, ListArchivesCommandOutput } from "../commands/ListArchivesCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput } from "../commands/ListEventBusesCommand";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput } from "../commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput,
} from "../commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput,
} from "../commands/ListPartnerEventSourcesCommand";
import { ListReplaysCommandInput, ListReplaysCommandOutput } from "../commands/ListReplaysCommand";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
} from "../commands/ListRuleNamesByTargetCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput } from "../commands/ListTargetsByRuleCommand";
import { PutEventsCommandInput, PutEventsCommandOutput } from "../commands/PutEventsCommand";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput } from "../commands/PutPartnerEventsCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "../commands/PutPermissionCommand";
import { PutRuleCommandInput, PutRuleCommandOutput } from "../commands/PutRuleCommand";
import { PutTargetsCommandInput, PutTargetsCommandOutput } from "../commands/PutTargetsCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput } from "../commands/RemoveTargetsCommand";
import { StartReplayCommandInput, StartReplayCommandOutput } from "../commands/StartReplayCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput } from "../commands/TestEventPatternCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateApiDestinationCommandInput,
  UpdateApiDestinationCommandOutput,
} from "../commands/UpdateApiDestinationCommand";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput } from "../commands/UpdateArchiveCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
import { UpdateEventBusCommandInput, UpdateEventBusCommandOutput } from "../commands/UpdateEventBusCommand";
import { EventBridgeServiceException as __BaseException } from "../models/EventBridgeServiceException";
import {
  AccessDeniedException,
  ActivateEventSourceRequest,
  ApiDestination,
  AppSyncParameters,
  Archive,
  AwsVpcConfiguration,
  BatchArrayProperties,
  BatchParameters,
  BatchRetryStrategy,
  CancelReplayRequest,
  CapacityProviderStrategyItem,
  ConcurrentModificationException,
  Condition,
  Connection,
  ConnectionBodyParameter,
  ConnectionHeaderParameter,
  ConnectionHttpParameters,
  ConnectionQueryStringParameter,
  ConnectivityResourceConfigurationArn,
  ConnectivityResourceParameters,
  CreateApiDestinationRequest,
  CreateApiDestinationResponse,
  CreateArchiveRequest,
  CreateArchiveResponse,
  CreateConnectionApiKeyAuthRequestParameters,
  CreateConnectionAuthRequestParameters,
  CreateConnectionBasicAuthRequestParameters,
  CreateConnectionOAuthClientRequestParameters,
  CreateConnectionOAuthRequestParameters,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateEndpointRequest,
  CreateEventBusRequest,
  CreatePartnerEventSourceRequest,
  DeactivateEventSourceRequest,
  DeadLetterConfig,
  DeauthorizeConnectionRequest,
  DeauthorizeConnectionResponse,
  DeleteApiDestinationRequest,
  DeleteArchiveRequest,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteEndpointRequest,
  DeleteEventBusRequest,
  DeletePartnerEventSourceRequest,
  DeleteRuleRequest,
  DescribeApiDestinationRequest,
  DescribeApiDestinationResponse,
  DescribeArchiveRequest,
  DescribeArchiveResponse,
  DescribeConnectionRequest,
  DescribeConnectionResponse,
  DescribeEndpointRequest,
  DescribeEndpointResponse,
  DescribeEventBusRequest,
  DescribeEventBusResponse,
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
  DescribePartnerEventSourceRequest,
  DescribeReplayRequest,
  DescribeReplayResponse,
  DescribeRuleRequest,
  DisableRuleRequest,
  EcsParameters,
  EnableRuleRequest,
  Endpoint,
  EndpointEventBus,
  EventBus,
  EventSource,
  FailoverConfig,
  HttpParameters,
  IllegalStatusException,
  InputTransformer,
  InternalException,
  InvalidEventPatternException,
  InvalidStateException,
  KinesisParameters,
  LimitExceededException,
  ListApiDestinationsRequest,
  ListApiDestinationsResponse,
  ListArchivesRequest,
  ListArchivesResponse,
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListEndpointsRequest,
  ListEndpointsResponse,
  ListEventBusesRequest,
  ListEventBusesResponse,
  ListEventSourcesRequest,
  ListEventSourcesResponse,
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourcesRequest,
  ListReplaysRequest,
  ListReplaysResponse,
  ListRuleNamesByTargetRequest,
  ListRulesRequest,
  ListTagsForResourceRequest,
  ListTargetsByRuleRequest,
  LogConfig,
  ManagedRuleException,
  NetworkConfiguration,
  OperationDisabledException,
  PartnerEventSourceAccount,
  PlacementConstraint,
  PlacementStrategy,
  PolicyLengthExceededException,
  Primary,
  PutEventsRequest,
  PutEventsRequestEntry,
  PutPartnerEventsRequest,
  PutPartnerEventsRequestEntry,
  PutPermissionRequest,
  PutRuleRequest,
  PutTargetsRequest,
  RedshiftDataParameters,
  RemovePermissionRequest,
  RemoveTargetsRequest,
  Replay,
  ReplayDestination,
  ReplicationConfig,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryPolicy,
  RoutingConfig,
  RunCommandParameters,
  RunCommandTarget,
  SageMakerPipelineParameter,
  SageMakerPipelineParameters,
  Secondary,
  SqsParameters,
  StartReplayRequest,
  StartReplayResponse,
  Tag,
  TagResourceRequest,
  Target,
  TestEventPatternRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateApiDestinationRequest,
  UpdateApiDestinationResponse,
  UpdateArchiveRequest,
  UpdateArchiveResponse,
  UpdateConnectionApiKeyAuthRequestParameters,
  UpdateConnectionAuthRequestParameters,
  UpdateConnectionBasicAuthRequestParameters,
  UpdateConnectionOAuthClientRequestParameters,
  UpdateConnectionOAuthRequestParameters,
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateEndpointRequest,
  UpdateEventBusRequest,
} from "../models/models_0";

/**
 * serializeAws_json1_1ActivateEventSourceCommand
 */
export const se_ActivateEventSourceCommand = async (
  input: ActivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ActivateEventSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelReplayCommand
 */
export const se_CancelReplayCommand = async (
  input: CancelReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelReplay");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApiDestinationCommand
 */
export const se_CreateApiDestinationCommand = async (
  input: CreateApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApiDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateArchiveCommand
 */
export const se_CreateArchiveCommand = async (
  input: CreateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export const se_CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEventBusCommand
 */
export const se_CreateEventBusCommand = async (
  input: CreateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEventBus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePartnerEventSourceCommand
 */
export const se_CreatePartnerEventSourceCommand = async (
  input: CreatePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePartnerEventSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeactivateEventSourceCommand
 */
export const se_DeactivateEventSourceCommand = async (
  input: DeactivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeactivateEventSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeauthorizeConnectionCommand
 */
export const se_DeauthorizeConnectionCommand = async (
  input: DeauthorizeConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeauthorizeConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApiDestinationCommand
 */
export const se_DeleteApiDestinationCommand = async (
  input: DeleteApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApiDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteArchiveCommand
 */
export const se_DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventBusCommand
 */
export const se_DeleteEventBusCommand = async (
  input: DeleteEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventBus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePartnerEventSourceCommand
 */
export const se_DeletePartnerEventSourceCommand = async (
  input: DeletePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePartnerEventSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApiDestinationCommand
 */
export const se_DescribeApiDestinationCommand = async (
  input: DescribeApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApiDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeArchiveCommand
 */
export const se_DescribeArchiveCommand = async (
  input: DescribeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionCommand
 */
export const se_DescribeConnectionCommand = async (
  input: DescribeConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointCommand
 */
export const se_DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventBusCommand
 */
export const se_DescribeEventBusCommand = async (
  input: DescribeEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventBus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventSourceCommand
 */
export const se_DescribeEventSourceCommand = async (
  input: DescribeEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePartnerEventSourceCommand
 */
export const se_DescribePartnerEventSourceCommand = async (
  input: DescribePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePartnerEventSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplayCommand
 */
export const se_DescribeReplayCommand = async (
  input: DescribeReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeReplay");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRuleCommand
 */
export const se_DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableRuleCommand
 */
export const se_DisableRuleCommand = async (
  input: DisableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableRuleCommand
 */
export const se_EnableRuleCommand = async (
  input: EnableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApiDestinationsCommand
 */
export const se_ListApiDestinationsCommand = async (
  input: ListApiDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApiDestinations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListArchivesCommand
 */
export const se_ListArchivesCommand = async (
  input: ListArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArchives");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointsCommand
 */
export const se_ListEndpointsCommand = async (
  input: ListEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpoints");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventBusesCommand
 */
export const se_ListEventBusesCommand = async (
  input: ListEventBusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventBuses");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventSourcesCommand
 */
export const se_ListEventSourcesCommand = async (
  input: ListEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventSources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPartnerEventSourceAccountsCommand
 */
export const se_ListPartnerEventSourceAccountsCommand = async (
  input: ListPartnerEventSourceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPartnerEventSourceAccounts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPartnerEventSourcesCommand
 */
export const se_ListPartnerEventSourcesCommand = async (
  input: ListPartnerEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPartnerEventSources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReplaysCommand
 */
export const se_ListReplaysCommand = async (
  input: ListReplaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReplays");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRuleNamesByTargetCommand
 */
export const se_ListRuleNamesByTargetCommand = async (
  input: ListRuleNamesByTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRuleNamesByTarget");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRules");
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
 * serializeAws_json1_1ListTargetsByRuleCommand
 */
export const se_ListTargetsByRuleCommand = async (
  input: ListTargetsByRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTargetsByRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEventsCommand
 */
export const se_PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutEvents");
  let body: any;
  body = JSON.stringify(se_PutEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPartnerEventsCommand
 */
export const se_PutPartnerEventsCommand = async (
  input: PutPartnerEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPartnerEvents");
  let body: any;
  body = JSON.stringify(se_PutPartnerEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPermissionCommand
 */
export const se_PutPermissionCommand = async (
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRuleCommand
 */
export const se_PutRuleCommand = async (
  input: PutRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutTargetsCommand
 */
export const se_PutTargetsCommand = async (
  input: PutTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutTargets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemovePermission");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTargetsCommand
 */
export const se_RemoveTargetsCommand = async (
  input: RemoveTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTargets");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReplayCommand
 */
export const se_StartReplayCommand = async (
  input: StartReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartReplay");
  let body: any;
  body = JSON.stringify(se_StartReplayRequest(input, context));
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
 * serializeAws_json1_1TestEventPatternCommand
 */
export const se_TestEventPatternCommand = async (
  input: TestEventPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TestEventPattern");
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
 * serializeAws_json1_1UpdateApiDestinationCommand
 */
export const se_UpdateApiDestinationCommand = async (
  input: UpdateApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApiDestination");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateArchiveCommand
 */
export const se_UpdateArchiveCommand = async (
  input: UpdateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateArchive");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEventBusCommand
 */
export const se_UpdateEventBusCommand = async (
  input: UpdateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEventBus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1ActivateEventSourceCommand
 */
export const de_ActivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ActivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelReplayCommand
 */
export const de_CancelReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApiDestinationCommand
 */
export const de_CreateApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApiDestinationResponse(data, context);
  const response: CreateApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateArchiveCommand
 */
export const de_CreateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateArchiveResponse(data, context);
  const response: CreateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointCommand
 */
export const de_CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEventBusCommand
 */
export const de_CreateEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePartnerEventSourceCommand
 */
export const de_CreatePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeactivateEventSourceCommand
 */
export const de_DeactivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeauthorizeConnectionCommand
 */
export const de_DeauthorizeConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeauthorizeConnectionResponse(data, context);
  const response: DeauthorizeConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApiDestinationCommand
 */
export const de_DeleteApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteArchiveCommand
 */
export const de_DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEventBusCommand
 */
export const de_DeleteEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePartnerEventSourceCommand
 */
export const de_DeletePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApiDestinationCommand
 */
export const de_DescribeApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApiDestinationResponse(data, context);
  const response: DescribeApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeArchiveCommand
 */
export const de_DescribeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeArchiveResponse(data, context);
  const response: DescribeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeConnectionCommand
 */
export const de_DescribeConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectionResponse(data, context);
  const response: DescribeConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointCommand
 */
export const de_DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointResponse(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEventBusCommand
 */
export const de_DescribeEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventBusResponse(data, context);
  const response: DescribeEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEventSourceCommand
 */
export const de_DescribeEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventSourceResponse(data, context);
  const response: DescribeEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePartnerEventSourceCommand
 */
export const de_DescribePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeReplayCommand
 */
export const de_DescribeReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplayResponse(data, context);
  const response: DescribeReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRuleCommand
 */
export const de_DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableRuleCommand
 */
export const de_DisableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableRuleCommand
 */
export const de_EnableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApiDestinationsCommand
 */
export const de_ListApiDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApiDestinationsResponse(data, context);
  const response: ListApiDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListArchivesCommand
 */
export const de_ListArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArchivesResponse(data, context);
  const response: ListArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListConnectionsCommand
 */
export const de_ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConnectionsResponse(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointsCommand
 */
export const de_ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointsResponse(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEventBusesCommand
 */
export const de_ListEventBusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventBusesResponse(data, context);
  const response: ListEventBusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEventSourcesCommand
 */
export const de_ListEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventSourcesResponse(data, context);
  const response: ListEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPartnerEventSourceAccountsCommand
 */
export const de_ListPartnerEventSourceAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPartnerEventSourceAccountsResponse(data, context);
  const response: ListPartnerEventSourceAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPartnerEventSourcesCommand
 */
export const de_ListPartnerEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPartnerEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListReplaysCommand
 */
export const de_ListReplaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReplaysResponse(data, context);
  const response: ListReplaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRuleNamesByTargetCommand
 */
export const de_ListRuleNamesByTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRuleNamesByTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRulesCommandOutput = {
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
 * deserializeAws_json1_1ListTargetsByRuleCommand
 */
export const de_ListTargetsByRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTargetsByRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutEventsCommand
 */
export const de_PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutPartnerEventsCommand
 */
export const de_PutPartnerEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutPartnerEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutPermissionCommand
 */
export const de_PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1PutRuleCommand
 */
export const de_PutRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutTargetsCommand
 */
export const de_PutTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RemoveTargetsCommand
 */
export const de_RemoveTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RemoveTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartReplayCommand
 */
export const de_StartReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartReplayResponse(data, context);
  const response: StartReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TestEventPatternCommand
 */
export const de_TestEventPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TestEventPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApiDestinationCommand
 */
export const de_UpdateApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApiDestinationResponse(data, context);
  const response: UpdateApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateArchiveCommand
 */
export const de_UpdateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateArchiveResponse(data, context);
  const response: UpdateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConnectionResponse(data, context);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointCommand
 */
export const de_UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEventBusCommand
 */
export const de_UpdateEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.eventbridge#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "IllegalStatusException":
    case "com.amazonaws.eventbridge#IllegalStatusException":
      throw await de_IllegalStatusExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.eventbridge#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.eventbridge#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "PolicyLengthExceededException":
    case "com.amazonaws.eventbridge#PolicyLengthExceededException":
      throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IllegalStatusExceptionRes
 */
const de_IllegalStatusExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IllegalStatusException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalExceptionRes
 */
const de_InternalExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEventPatternExceptionRes
 */
const de_InvalidEventPatternExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidEventPatternException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidStateException({
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
 * deserializeAws_json1_1ManagedRuleExceptionRes
 */
const de_ManagedRuleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ManagedRuleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationDisabledExceptionRes
 */
const de_OperationDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OperationDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PolicyLengthExceededExceptionRes
 */
const de_PolicyLengthExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PolicyLengthExceededException({
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

// se_ActivateEventSourceRequest omitted.

// se_AppSyncParameters omitted.

// se_AwsVpcConfiguration omitted.

// se_BatchArrayProperties omitted.

// se_BatchParameters omitted.

// se_BatchRetryStrategy omitted.

// se_CancelReplayRequest omitted.

// se_CapacityProviderStrategy omitted.

// se_CapacityProviderStrategyItem omitted.

// se_Condition omitted.

// se_ConnectionBodyParameter omitted.

// se_ConnectionBodyParametersList omitted.

// se_ConnectionHeaderParameter omitted.

// se_ConnectionHeaderParametersList omitted.

// se_ConnectionHttpParameters omitted.

// se_ConnectionQueryStringParameter omitted.

// se_ConnectionQueryStringParametersList omitted.

// se_ConnectivityResourceConfigurationArn omitted.

// se_ConnectivityResourceParameters omitted.

// se_CreateApiDestinationRequest omitted.

// se_CreateArchiveRequest omitted.

// se_CreateConnectionApiKeyAuthRequestParameters omitted.

// se_CreateConnectionAuthRequestParameters omitted.

// se_CreateConnectionBasicAuthRequestParameters omitted.

// se_CreateConnectionOAuthClientRequestParameters omitted.

// se_CreateConnectionOAuthRequestParameters omitted.

// se_CreateConnectionRequest omitted.

// se_CreateEndpointRequest omitted.

// se_CreateEventBusRequest omitted.

// se_CreatePartnerEventSourceRequest omitted.

// se_DeactivateEventSourceRequest omitted.

// se_DeadLetterConfig omitted.

// se_DeauthorizeConnectionRequest omitted.

// se_DeleteApiDestinationRequest omitted.

// se_DeleteArchiveRequest omitted.

// se_DeleteConnectionRequest omitted.

// se_DeleteEndpointRequest omitted.

// se_DeleteEventBusRequest omitted.

// se_DeletePartnerEventSourceRequest omitted.

// se_DeleteRuleRequest omitted.

// se_DescribeApiDestinationRequest omitted.

// se_DescribeArchiveRequest omitted.

// se_DescribeConnectionRequest omitted.

// se_DescribeEndpointRequest omitted.

// se_DescribeEventBusRequest omitted.

// se_DescribeEventSourceRequest omitted.

// se_DescribePartnerEventSourceRequest omitted.

// se_DescribeReplayRequest omitted.

// se_DescribeRuleRequest omitted.

// se_DisableRuleRequest omitted.

// se_EcsParameters omitted.

// se_EnableRuleRequest omitted.

// se_EndpointEventBus omitted.

// se_EndpointEventBusList omitted.

// se_EventResourceList omitted.

// se_FailoverConfig omitted.

// se_HeaderParametersMap omitted.

// se_HttpParameters omitted.

// se_InputTransformer omitted.

// se_KinesisParameters omitted.

// se_ListApiDestinationsRequest omitted.

// se_ListArchivesRequest omitted.

// se_ListConnectionsRequest omitted.

// se_ListEndpointsRequest omitted.

// se_ListEventBusesRequest omitted.

// se_ListEventSourcesRequest omitted.

// se_ListPartnerEventSourceAccountsRequest omitted.

// se_ListPartnerEventSourcesRequest omitted.

// se_ListReplaysRequest omitted.

// se_ListRuleNamesByTargetRequest omitted.

// se_ListRulesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTargetsByRuleRequest omitted.

// se_LogConfig omitted.

// se_NetworkConfiguration omitted.

// se_PathParameterList omitted.

// se_PlacementConstraint omitted.

// se_PlacementConstraints omitted.

// se_PlacementStrategies omitted.

// se_PlacementStrategy omitted.

// se_Primary omitted.

/**
 * serializeAws_json1_1PutEventsRequest
 */
const se_PutEventsRequest = (input: PutEventsRequest, context: __SerdeContext): any => {
  return take(input, {
    EndpointId: [],
    Entries: (_) => se_PutEventsRequestEntryList(_, context),
  });
};

/**
 * serializeAws_json1_1PutEventsRequestEntry
 */
const se_PutEventsRequestEntry = (input: PutEventsRequestEntry, context: __SerdeContext): any => {
  return take(input, {
    Detail: [],
    DetailType: [],
    EventBusName: [],
    Resources: _json,
    Source: [],
    Time: (_) => _.getTime() / 1_000,
    TraceHeader: [],
  });
};

/**
 * serializeAws_json1_1PutEventsRequestEntryList
 */
const se_PutEventsRequestEntryList = (input: PutEventsRequestEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PutEventsRequestEntry(entry, context);
    });
};

/**
 * serializeAws_json1_1PutPartnerEventsRequest
 */
const se_PutPartnerEventsRequest = (input: PutPartnerEventsRequest, context: __SerdeContext): any => {
  return take(input, {
    Entries: (_) => se_PutPartnerEventsRequestEntryList(_, context),
  });
};

/**
 * serializeAws_json1_1PutPartnerEventsRequestEntry
 */
const se_PutPartnerEventsRequestEntry = (input: PutPartnerEventsRequestEntry, context: __SerdeContext): any => {
  return take(input, {
    Detail: [],
    DetailType: [],
    Resources: _json,
    Source: [],
    Time: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_json1_1PutPartnerEventsRequestEntryList
 */
const se_PutPartnerEventsRequestEntryList = (input: PutPartnerEventsRequestEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PutPartnerEventsRequestEntry(entry, context);
    });
};

// se_PutPermissionRequest omitted.

// se_PutRuleRequest omitted.

// se_PutTargetsRequest omitted.

// se_QueryStringParametersMap omitted.

// se_RedshiftDataParameters omitted.

// se_RemovePermissionRequest omitted.

// se_RemoveTargetsRequest omitted.

// se_ReplayDestination omitted.

// se_ReplayDestinationFilters omitted.

// se_ReplicationConfig omitted.

// se_RetryPolicy omitted.

// se_RoutingConfig omitted.

// se_RunCommandParameters omitted.

// se_RunCommandTarget omitted.

// se_RunCommandTargets omitted.

// se_RunCommandTargetValues omitted.

// se_SageMakerPipelineParameter omitted.

// se_SageMakerPipelineParameterList omitted.

// se_SageMakerPipelineParameters omitted.

// se_Secondary omitted.

// se_Sqls omitted.

// se_SqsParameters omitted.

/**
 * serializeAws_json1_1StartReplayRequest
 */
const se_StartReplayRequest = (input: StartReplayRequest, context: __SerdeContext): any => {
  return take(input, {
    Description: [],
    Destination: _json,
    EventEndTime: (_) => _.getTime() / 1_000,
    EventSourceArn: [],
    EventStartTime: (_) => _.getTime() / 1_000,
    ReplayName: [],
  });
};

// se_StringList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_Target omitted.

// se_TargetIdList omitted.

// se_TargetList omitted.

// se_TestEventPatternRequest omitted.

// se_TransformerPaths omitted.

// se_UntagResourceRequest omitted.

// se_UpdateApiDestinationRequest omitted.

// se_UpdateArchiveRequest omitted.

// se_UpdateConnectionApiKeyAuthRequestParameters omitted.

// se_UpdateConnectionAuthRequestParameters omitted.

// se_UpdateConnectionBasicAuthRequestParameters omitted.

// se_UpdateConnectionOAuthClientRequestParameters omitted.

// se_UpdateConnectionOAuthRequestParameters omitted.

// se_UpdateConnectionRequest omitted.

// se_UpdateEndpointRequest omitted.

// se_UpdateEventBusRequest omitted.

// de_AccessDeniedException omitted.

/**
 * deserializeAws_json1_1ApiDestination
 */
const de_ApiDestination = (output: any, context: __SerdeContext): ApiDestination => {
  return take(output, {
    ApiDestinationArn: __expectString,
    ApiDestinationState: __expectString,
    ConnectionArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HttpMethod: __expectString,
    InvocationEndpoint: __expectString,
    InvocationRateLimitPerSecond: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ApiDestinationResponseList
 */
const de_ApiDestinationResponseList = (output: any, context: __SerdeContext): ApiDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApiDestination(entry, context);
    });
  return retVal;
};

// de_AppSyncParameters omitted.

/**
 * deserializeAws_json1_1Archive
 */
const de_Archive = (output: any, context: __SerdeContext): Archive => {
  return take(output, {
    ArchiveName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventCount: __expectLong,
    EventSourceArn: __expectString,
    RetentionDays: __expectInt32,
    SizeBytes: __expectLong,
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ArchiveResponseList
 */
const de_ArchiveResponseList = (output: any, context: __SerdeContext): Archive[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Archive(entry, context);
    });
  return retVal;
};

// de_AwsVpcConfiguration omitted.

// de_BatchArrayProperties omitted.

// de_BatchParameters omitted.

// de_BatchRetryStrategy omitted.

// de_CancelReplayResponse omitted.

// de_CapacityProviderStrategy omitted.

// de_CapacityProviderStrategyItem omitted.

// de_ConcurrentModificationException omitted.

/**
 * deserializeAws_json1_1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return take(output, {
    AuthorizationType: __expectString,
    ConnectionArn: __expectString,
    ConnectionState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAuthorizedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    StateReason: __expectString,
  }) as any;
};

// de_ConnectionApiKeyAuthResponseParameters omitted.

// de_ConnectionAuthResponseParameters omitted.

// de_ConnectionBasicAuthResponseParameters omitted.

// de_ConnectionBodyParameter omitted.

// de_ConnectionBodyParametersList omitted.

// de_ConnectionHeaderParameter omitted.

// de_ConnectionHeaderParametersList omitted.

// de_ConnectionHttpParameters omitted.

// de_ConnectionOAuthClientResponseParameters omitted.

// de_ConnectionOAuthResponseParameters omitted.

// de_ConnectionQueryStringParameter omitted.

// de_ConnectionQueryStringParametersList omitted.

/**
 * deserializeAws_json1_1ConnectionResponseList
 */
const de_ConnectionResponseList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateApiDestinationResponse
 */
const de_CreateApiDestinationResponse = (output: any, context: __SerdeContext): CreateApiDestinationResponse => {
  return take(output, {
    ApiDestinationArn: __expectString,
    ApiDestinationState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateArchiveResponse
 */
const de_CreateArchiveResponse = (output: any, context: __SerdeContext): CreateArchiveResponse => {
  return take(output, {
    ArchiveArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateConnectionResponse
 */
const de_CreateConnectionResponse = (output: any, context: __SerdeContext): CreateConnectionResponse => {
  return take(output, {
    ConnectionArn: __expectString,
    ConnectionState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CreateEndpointResponse omitted.

// de_CreateEventBusResponse omitted.

// de_CreatePartnerEventSourceResponse omitted.

// de_DeadLetterConfig omitted.

/**
 * deserializeAws_json1_1DeauthorizeConnectionResponse
 */
const de_DeauthorizeConnectionResponse = (output: any, context: __SerdeContext): DeauthorizeConnectionResponse => {
  return take(output, {
    ConnectionArn: __expectString,
    ConnectionState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAuthorizedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DeleteApiDestinationResponse omitted.

// de_DeleteArchiveResponse omitted.

/**
 * deserializeAws_json1_1DeleteConnectionResponse
 */
const de_DeleteConnectionResponse = (output: any, context: __SerdeContext): DeleteConnectionResponse => {
  return take(output, {
    ConnectionArn: __expectString,
    ConnectionState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAuthorizedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DeleteEndpointResponse omitted.

/**
 * deserializeAws_json1_1DescribeApiDestinationResponse
 */
const de_DescribeApiDestinationResponse = (output: any, context: __SerdeContext): DescribeApiDestinationResponse => {
  return take(output, {
    ApiDestinationArn: __expectString,
    ApiDestinationState: __expectString,
    ConnectionArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    HttpMethod: __expectString,
    InvocationEndpoint: __expectString,
    InvocationRateLimitPerSecond: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeArchiveResponse
 */
const de_DescribeArchiveResponse = (output: any, context: __SerdeContext): DescribeArchiveResponse => {
  return take(output, {
    ArchiveArn: __expectString,
    ArchiveName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventCount: __expectLong,
    EventPattern: __expectString,
    EventSourceArn: __expectString,
    KmsKeyIdentifier: __expectString,
    RetentionDays: __expectInt32,
    SizeBytes: __expectLong,
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

// de_DescribeConnectionConnectivityParameters omitted.

// de_DescribeConnectionResourceParameters omitted.

/**
 * deserializeAws_json1_1DescribeConnectionResponse
 */
const de_DescribeConnectionResponse = (output: any, context: __SerdeContext): DescribeConnectionResponse => {
  return take(output, {
    AuthParameters: _json,
    AuthorizationType: __expectString,
    ConnectionArn: __expectString,
    ConnectionState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    InvocationConnectivityParameters: _json,
    KmsKeyIdentifier: __expectString,
    LastAuthorizedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    SecretArn: __expectString,
    StateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointResponse
 */
const de_DescribeEndpointResponse = (output: any, context: __SerdeContext): DescribeEndpointResponse => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EndpointId: __expectString,
    EndpointUrl: __expectString,
    EventBuses: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ReplicationConfig: _json,
    RoleArn: __expectString,
    RoutingConfig: _json,
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventBusResponse
 */
const de_DescribeEventBusResponse = (output: any, context: __SerdeContext): DescribeEventBusResponse => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeadLetterConfig: _json,
    Description: __expectString,
    KmsKeyIdentifier: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogConfig: _json,
    Name: __expectString,
    Policy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventSourceResponse
 */
const de_DescribeEventSourceResponse = (output: any, context: __SerdeContext): DescribeEventSourceResponse => {
  return take(output, {
    Arn: __expectString,
    CreatedBy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
  }) as any;
};

// de_DescribePartnerEventSourceResponse omitted.

/**
 * deserializeAws_json1_1DescribeReplayResponse
 */
const de_DescribeReplayResponse = (output: any, context: __SerdeContext): DescribeReplayResponse => {
  return take(output, {
    Description: __expectString,
    Destination: _json,
    EventEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventLastReplayedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventSourceArn: __expectString,
    EventStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplayArn: __expectString,
    ReplayEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplayName: __expectString,
    ReplayStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

// de_DescribeRuleResponse omitted.

// de_EcsParameters omitted.

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EndpointId: __expectString,
    EndpointUrl: __expectString,
    EventBuses: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ReplicationConfig: _json,
    RoleArn: __expectString,
    RoutingConfig: _json,
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

// de_EndpointEventBus omitted.

// de_EndpointEventBusList omitted.

/**
 * deserializeAws_json1_1EndpointList
 */
const de_EndpointList = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Endpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventBus
 */
const de_EventBus = (output: any, context: __SerdeContext): EventBus => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Policy: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventBusList
 */
const de_EventBusList = (output: any, context: __SerdeContext): EventBus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventBus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventSource
 */
const de_EventSource = (output: any, context: __SerdeContext): EventSource => {
  return take(output, {
    Arn: __expectString,
    CreatedBy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventSourceList
 */
const de_EventSourceList = (output: any, context: __SerdeContext): EventSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventSource(entry, context);
    });
  return retVal;
};

// de_FailoverConfig omitted.

// de_HeaderParametersMap omitted.

// de_HttpParameters omitted.

// de_IllegalStatusException omitted.

// de_InputTransformer omitted.

// de_InternalException omitted.

// de_InvalidEventPatternException omitted.

// de_InvalidStateException omitted.

// de_KinesisParameters omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListApiDestinationsResponse
 */
const de_ListApiDestinationsResponse = (output: any, context: __SerdeContext): ListApiDestinationsResponse => {
  return take(output, {
    ApiDestinations: (_: any) => de_ApiDestinationResponseList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListArchivesResponse
 */
const de_ListArchivesResponse = (output: any, context: __SerdeContext): ListArchivesResponse => {
  return take(output, {
    Archives: (_: any) => de_ArchiveResponseList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListConnectionsResponse
 */
const de_ListConnectionsResponse = (output: any, context: __SerdeContext): ListConnectionsResponse => {
  return take(output, {
    Connections: (_: any) => de_ConnectionResponseList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointsResponse
 */
const de_ListEndpointsResponse = (output: any, context: __SerdeContext): ListEndpointsResponse => {
  return take(output, {
    Endpoints: (_: any) => de_EndpointList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEventBusesResponse
 */
const de_ListEventBusesResponse = (output: any, context: __SerdeContext): ListEventBusesResponse => {
  return take(output, {
    EventBuses: (_: any) => de_EventBusList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEventSourcesResponse
 */
const de_ListEventSourcesResponse = (output: any, context: __SerdeContext): ListEventSourcesResponse => {
  return take(output, {
    EventSources: (_: any) => de_EventSourceList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListPartnerEventSourceAccountsResponse
 */
const de_ListPartnerEventSourceAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourceAccountsResponse => {
  return take(output, {
    NextToken: __expectString,
    PartnerEventSourceAccounts: (_: any) => de_PartnerEventSourceAccountList(_, context),
  }) as any;
};

// de_ListPartnerEventSourcesResponse omitted.

/**
 * deserializeAws_json1_1ListReplaysResponse
 */
const de_ListReplaysResponse = (output: any, context: __SerdeContext): ListReplaysResponse => {
  return take(output, {
    NextToken: __expectString,
    Replays: (_: any) => de_ReplayList(_, context),
  }) as any;
};

// de_ListRuleNamesByTargetResponse omitted.

// de_ListRulesResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_ListTargetsByRuleResponse omitted.

// de_LogConfig omitted.

// de_ManagedRuleException omitted.

// de_NetworkConfiguration omitted.

// de_OperationDisabledException omitted.

// de_PartnerEventSource omitted.

/**
 * deserializeAws_json1_1PartnerEventSourceAccount
 */
const de_PartnerEventSourceAccount = (output: any, context: __SerdeContext): PartnerEventSourceAccount => {
  return take(output, {
    Account: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PartnerEventSourceAccountList
 */
const de_PartnerEventSourceAccountList = (output: any, context: __SerdeContext): PartnerEventSourceAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PartnerEventSourceAccount(entry, context);
    });
  return retVal;
};

// de_PartnerEventSourceList omitted.

// de_PathParameterList omitted.

// de_PlacementConstraint omitted.

// de_PlacementConstraints omitted.

// de_PlacementStrategies omitted.

// de_PlacementStrategy omitted.

// de_PolicyLengthExceededException omitted.

// de_Primary omitted.

// de_PutEventsResponse omitted.

// de_PutEventsResultEntry omitted.

// de_PutEventsResultEntryList omitted.

// de_PutPartnerEventsResponse omitted.

// de_PutPartnerEventsResultEntry omitted.

// de_PutPartnerEventsResultEntryList omitted.

// de_PutRuleResponse omitted.

// de_PutTargetsResponse omitted.

// de_PutTargetsResultEntry omitted.

// de_PutTargetsResultEntryList omitted.

// de_QueryStringParametersMap omitted.

// de_RedshiftDataParameters omitted.

// de_RemoveTargetsResponse omitted.

// de_RemoveTargetsResultEntry omitted.

// de_RemoveTargetsResultEntryList omitted.

/**
 * deserializeAws_json1_1Replay
 */
const de_Replay = (output: any, context: __SerdeContext): Replay => {
  return take(output, {
    EventEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventLastReplayedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventSourceArn: __expectString,
    EventStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplayEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReplayName: __expectString,
    ReplayStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

// de_ReplayDestination omitted.

// de_ReplayDestinationFilters omitted.

/**
 * deserializeAws_json1_1ReplayList
 */
const de_ReplayList = (output: any, context: __SerdeContext): Replay[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Replay(entry, context);
    });
  return retVal;
};

// de_ReplicationConfig omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceNotFoundException omitted.

// de_RetryPolicy omitted.

// de_RoutingConfig omitted.

// de_Rule omitted.

// de_RuleNameList omitted.

// de_RuleResponseList omitted.

// de_RunCommandParameters omitted.

// de_RunCommandTarget omitted.

// de_RunCommandTargets omitted.

// de_RunCommandTargetValues omitted.

// de_SageMakerPipelineParameter omitted.

// de_SageMakerPipelineParameterList omitted.

// de_SageMakerPipelineParameters omitted.

// de_Secondary omitted.

// de_Sqls omitted.

// de_SqsParameters omitted.

/**
 * deserializeAws_json1_1StartReplayResponse
 */
const de_StartReplayResponse = (output: any, context: __SerdeContext): StartReplayResponse => {
  return take(output, {
    ReplayArn: __expectString,
    ReplayStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

// de_StringList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_Target omitted.

// de_TargetList omitted.

// de_TestEventPatternResponse omitted.

// de_ThrottlingException omitted.

// de_TransformerPaths omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateApiDestinationResponse
 */
const de_UpdateApiDestinationResponse = (output: any, context: __SerdeContext): UpdateApiDestinationResponse => {
  return take(output, {
    ApiDestinationArn: __expectString,
    ApiDestinationState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateArchiveResponse
 */
const de_UpdateArchiveResponse = (output: any, context: __SerdeContext): UpdateArchiveResponse => {
  return take(output, {
    ArchiveArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StateReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateConnectionResponse
 */
const de_UpdateConnectionResponse = (output: any, context: __SerdeContext): UpdateConnectionResponse => {
  return take(output, {
    ConnectionArn: __expectString,
    ConnectionState: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastAuthorizedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_UpdateEndpointResponse omitted.

// de_UpdateEventBusResponse omitted.

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
    "x-amz-target": `AWSEvents.${operation}`,
  };
}
