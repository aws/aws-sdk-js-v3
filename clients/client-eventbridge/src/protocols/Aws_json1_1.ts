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
import { EventBridgeServiceException as __BaseException } from "../models/EventBridgeServiceException";
import {
  ActivateEventSourceRequest,
  ApiDestination,
  Archive,
  AwsVpcConfiguration,
  BatchArrayProperties,
  BatchParameters,
  BatchRetryStrategy,
  CancelReplayRequest,
  CancelReplayResponse,
  CapacityProviderStrategyItem,
  ConcurrentModificationException,
  Condition,
  Connection,
  ConnectionApiKeyAuthResponseParameters,
  ConnectionAuthResponseParameters,
  ConnectionBasicAuthResponseParameters,
  ConnectionBodyParameter,
  ConnectionHeaderParameter,
  ConnectionHttpParameters,
  ConnectionOAuthClientResponseParameters,
  ConnectionOAuthResponseParameters,
  ConnectionQueryStringParameter,
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
  CreateEndpointResponse,
  CreateEventBusRequest,
  CreateEventBusResponse,
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
  DeactivateEventSourceRequest,
  DeadLetterConfig,
  DeauthorizeConnectionRequest,
  DeauthorizeConnectionResponse,
  DeleteApiDestinationRequest,
  DeleteApiDestinationResponse,
  DeleteArchiveRequest,
  DeleteArchiveResponse,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteEndpointRequest,
  DeleteEndpointResponse,
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
  DescribePartnerEventSourceResponse,
  DescribeReplayRequest,
  DescribeReplayResponse,
  DescribeRuleRequest,
  DescribeRuleResponse,
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
  ListPartnerEventSourcesResponse,
  ListReplaysRequest,
  ListReplaysResponse,
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
  ManagedRuleException,
  NetworkConfiguration,
  OperationDisabledException,
  PartnerEventSource,
  PartnerEventSourceAccount,
  PlacementConstraint,
  PlacementStrategy,
  PolicyLengthExceededException,
  Primary,
  PutEventsRequest,
  PutEventsRequestEntry,
  PutEventsResponse,
  PutEventsResultEntry,
  PutPartnerEventsRequest,
  PutPartnerEventsRequestEntry,
  PutPartnerEventsResponse,
  PutPartnerEventsResultEntry,
  PutPermissionRequest,
  PutRuleRequest,
  PutRuleResponse,
  PutTargetsRequest,
  PutTargetsResponse,
  PutTargetsResultEntry,
  RedshiftDataParameters,
  RemovePermissionRequest,
  RemoveTargetsRequest,
  RemoveTargetsResponse,
  RemoveTargetsResultEntry,
  Replay,
  ReplayDestination,
  ReplicationConfig,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryPolicy,
  RoutingConfig,
  Rule,
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
  TagResourceResponse,
  Target,
  TestEventPatternRequest,
  TestEventPatternResponse,
  UntagResourceRequest,
  UntagResourceResponse,
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
  UpdateEndpointResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1ActivateEventSourceCommand
 */
export const se_ActivateEventSourceCommand = async (
  input: ActivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ActivateEventSource",
  };
  let body: any;
  body = JSON.stringify(se_ActivateEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelReplayCommand
 */
export const se_CancelReplayCommand = async (
  input: CancelReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CancelReplay",
  };
  let body: any;
  body = JSON.stringify(se_CancelReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApiDestinationCommand
 */
export const se_CreateApiDestinationCommand = async (
  input: CreateApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateApiDestination",
  };
  let body: any;
  body = JSON.stringify(se_CreateApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateArchiveCommand
 */
export const se_CreateArchiveCommand = async (
  input: CreateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateArchive",
  };
  let body: any;
  body = JSON.stringify(se_CreateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(se_CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export const se_CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_CreateEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEventBusCommand
 */
export const se_CreateEventBusCommand = async (
  input: CreateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateEventBus",
  };
  let body: any;
  body = JSON.stringify(se_CreateEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePartnerEventSourceCommand
 */
export const se_CreatePartnerEventSourceCommand = async (
  input: CreatePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreatePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(se_CreatePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeactivateEventSourceCommand
 */
export const se_DeactivateEventSourceCommand = async (
  input: DeactivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeactivateEventSource",
  };
  let body: any;
  body = JSON.stringify(se_DeactivateEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeauthorizeConnectionCommand
 */
export const se_DeauthorizeConnectionCommand = async (
  input: DeauthorizeConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeauthorizeConnection",
  };
  let body: any;
  body = JSON.stringify(se_DeauthorizeConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApiDestinationCommand
 */
export const se_DeleteApiDestinationCommand = async (
  input: DeleteApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteApiDestination",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteArchiveCommand
 */
export const se_DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteArchive",
  };
  let body: any;
  body = JSON.stringify(se_DeleteArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventBusCommand
 */
export const se_DeleteEventBusCommand = async (
  input: DeleteEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteEventBus",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePartnerEventSourceCommand
 */
export const se_DeletePartnerEventSourceCommand = async (
  input: DeletePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeletePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(se_DeletePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRuleCommand
 */
export const se_DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteRule",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApiDestinationCommand
 */
export const se_DescribeApiDestinationCommand = async (
  input: DescribeApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeApiDestination",
  };
  let body: any;
  body = JSON.stringify(se_DescribeApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeArchiveCommand
 */
export const se_DescribeArchiveCommand = async (
  input: DescribeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeArchive",
  };
  let body: any;
  body = JSON.stringify(se_DescribeArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeConnectionCommand
 */
export const se_DescribeConnectionCommand = async (
  input: DescribeConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeConnection",
  };
  let body: any;
  body = JSON.stringify(se_DescribeConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointCommand
 */
export const se_DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEndpointRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventBusCommand
 */
export const se_DescribeEventBusCommand = async (
  input: DescribeEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeEventBus",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventSourceCommand
 */
export const se_DescribeEventSourceCommand = async (
  input: DescribeEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeEventSource",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePartnerEventSourceCommand
 */
export const se_DescribePartnerEventSourceCommand = async (
  input: DescribePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(se_DescribePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeReplayCommand
 */
export const se_DescribeReplayCommand = async (
  input: DescribeReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeReplay",
  };
  let body: any;
  body = JSON.stringify(se_DescribeReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRuleCommand
 */
export const se_DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeRule",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableRuleCommand
 */
export const se_DisableRuleCommand = async (
  input: DisableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DisableRule",
  };
  let body: any;
  body = JSON.stringify(se_DisableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableRuleCommand
 */
export const se_EnableRuleCommand = async (
  input: EnableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.EnableRule",
  };
  let body: any;
  body = JSON.stringify(se_EnableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApiDestinationsCommand
 */
export const se_ListApiDestinationsCommand = async (
  input: ListApiDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListApiDestinations",
  };
  let body: any;
  body = JSON.stringify(se_ListApiDestinationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListArchivesCommand
 */
export const se_ListArchivesCommand = async (
  input: ListArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListArchives",
  };
  let body: any;
  body = JSON.stringify(se_ListArchivesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListConnections",
  };
  let body: any;
  body = JSON.stringify(se_ListConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointsCommand
 */
export const se_ListEndpointsCommand = async (
  input: ListEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListEndpoints",
  };
  let body: any;
  body = JSON.stringify(se_ListEndpointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventBusesCommand
 */
export const se_ListEventBusesCommand = async (
  input: ListEventBusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListEventBuses",
  };
  let body: any;
  body = JSON.stringify(se_ListEventBusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventSourcesCommand
 */
export const se_ListEventSourcesCommand = async (
  input: ListEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListEventSources",
  };
  let body: any;
  body = JSON.stringify(se_ListEventSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPartnerEventSourceAccountsCommand
 */
export const se_ListPartnerEventSourceAccountsCommand = async (
  input: ListPartnerEventSourceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListPartnerEventSourceAccounts",
  };
  let body: any;
  body = JSON.stringify(se_ListPartnerEventSourceAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPartnerEventSourcesCommand
 */
export const se_ListPartnerEventSourcesCommand = async (
  input: ListPartnerEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListPartnerEventSources",
  };
  let body: any;
  body = JSON.stringify(se_ListPartnerEventSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReplaysCommand
 */
export const se_ListReplaysCommand = async (
  input: ListReplaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListReplays",
  };
  let body: any;
  body = JSON.stringify(se_ListReplaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRuleNamesByTargetCommand
 */
export const se_ListRuleNamesByTargetCommand = async (
  input: ListRuleNamesByTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListRuleNamesByTarget",
  };
  let body: any;
  body = JSON.stringify(se_ListRuleNamesByTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRulesCommand
 */
export const se_ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListRules",
  };
  let body: any;
  body = JSON.stringify(se_ListRulesRequest(input, context));
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
    "x-amz-target": "AWSEvents.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTargetsByRuleCommand
 */
export const se_ListTargetsByRuleCommand = async (
  input: ListTargetsByRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListTargetsByRule",
  };
  let body: any;
  body = JSON.stringify(se_ListTargetsByRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutEventsCommand
 */
export const se_PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutEvents",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutPartnerEvents",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutPermission",
  };
  let body: any;
  body = JSON.stringify(se_PutPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRuleCommand
 */
export const se_PutRuleCommand = async (
  input: PutRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutRule",
  };
  let body: any;
  body = JSON.stringify(se_PutRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutTargetsCommand
 */
export const se_PutTargetsCommand = async (
  input: PutTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutTargets",
  };
  let body: any;
  body = JSON.stringify(se_PutTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.RemovePermission",
  };
  let body: any;
  body = JSON.stringify(se_RemovePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTargetsCommand
 */
export const se_RemoveTargetsCommand = async (
  input: RemoveTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.RemoveTargets",
  };
  let body: any;
  body = JSON.stringify(se_RemoveTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartReplayCommand
 */
export const se_StartReplayCommand = async (
  input: StartReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.StartReplay",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TestEventPatternCommand
 */
export const se_TestEventPatternCommand = async (
  input: TestEventPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.TestEventPattern",
  };
  let body: any;
  body = JSON.stringify(se_TestEventPatternRequest(input, context));
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
    "x-amz-target": "AWSEvents.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApiDestinationCommand
 */
export const se_UpdateApiDestinationCommand = async (
  input: UpdateApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateApiDestination",
  };
  let body: any;
  body = JSON.stringify(se_UpdateApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateArchiveCommand
 */
export const se_UpdateArchiveCommand = async (
  input: UpdateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateArchive",
  };
  let body: any;
  body = JSON.stringify(se_UpdateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateConnection",
  };
  let body: any;
  body = JSON.stringify(se_UpdateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEndpointRequest(input, context));
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
    return de_ActivateEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ActivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ActivateEventSourceCommandError
 */
const de_ActivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
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
 * deserializeAws_json1_1CancelReplayCommand
 */
export const de_CancelReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelReplayResponse(data, context);
  const response: CancelReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelReplayCommandError
 */
const de_CancelReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "IllegalStatusException":
    case "com.amazonaws.eventbridge#IllegalStatusException":
      throw await de_IllegalStatusExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreateApiDestinationCommand
 */
export const de_CreateApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApiDestinationResponse(data, context);
  const response: CreateApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateApiDestinationCommandError
 */
const de_CreateApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreateArchiveCommand
 */
export const de_CreateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateArchiveResponse(data, context);
  const response: CreateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateArchiveCommandError
 */
const de_CreateArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
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
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateConnectionCommandError
 */
const de_CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEndpointCommand
 */
export const de_CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointResponse(data, context);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEndpointCommandError
 */
const de_CreateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEventBusCommand
 */
export const de_CreateEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEventBusResponse(data, context);
  const response: CreateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEventBusCommandError
 */
const de_CreateEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1CreatePartnerEventSourceCommand
 */
export const de_CreatePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePartnerEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePartnerEventSourceResponse(data, context);
  const response: CreatePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePartnerEventSourceCommandError
 */
const de_CreatePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeactivateEventSourceCommand
 */
export const de_DeactivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeactivateEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeactivateEventSourceCommandError
 */
const de_DeactivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
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
 * deserializeAws_json1_1DeauthorizeConnectionCommand
 */
export const de_DeauthorizeConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeauthorizeConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeauthorizeConnectionResponse(data, context);
  const response: DeauthorizeConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeauthorizeConnectionCommandError
 */
const de_DeauthorizeConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeConnectionCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteApiDestinationCommand
 */
export const de_DeleteApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteApiDestinationResponse(data, context);
  const response: DeleteApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteApiDestinationCommandError
 */
const de_DeleteApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiDestinationCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteArchiveCommand
 */
export const de_DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteArchiveResponse(data, context);
  const response: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteArchiveCommandError
 */
const de_DeleteArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEndpointResponse(data, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEndpointCommandError
 */
const de_DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteEventBusCommand
 */
export const de_DeleteEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventBusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEventBusCommandError
 */
const de_DeleteEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
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
 * deserializeAws_json1_1DeletePartnerEventSourceCommand
 */
export const de_DeletePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePartnerEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePartnerEventSourceCommandError
 */
const de_DeletePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
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
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRuleCommand
 */
export const de_DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRuleCommandError
 */
const de_DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
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
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeApiDestinationCommand
 */
export const de_DescribeApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApiDestinationResponse(data, context);
  const response: DescribeApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeApiDestinationCommandError
 */
const de_DescribeApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApiDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeArchiveCommand
 */
export const de_DescribeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeArchiveResponse(data, context);
  const response: DescribeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeArchiveCommandError
 */
const de_DescribeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeConnectionCommand
 */
export const de_DescribeConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeConnectionResponse(data, context);
  const response: DescribeConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeConnectionCommandError
 */
const de_DescribeConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeEndpointCommand
 */
export const de_DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointResponse(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEndpointCommandError
 */
const de_DescribeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeEventBusCommand
 */
export const de_DescribeEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventBusResponse(data, context);
  const response: DescribeEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventBusCommandError
 */
const de_DescribeEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeEventSourceCommand
 */
export const de_DescribeEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventSourceResponse(data, context);
  const response: DescribeEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventSourceCommandError
 */
const de_DescribeEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribePartnerEventSourceCommand
 */
export const de_DescribePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePartnerEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePartnerEventSourceResponse(data, context);
  const response: DescribePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePartnerEventSourceCommandError
 */
const de_DescribePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeReplayCommand
 */
export const de_DescribeReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeReplayResponse(data, context);
  const response: DescribeReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeReplayCommandError
 */
const de_DescribeReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeRuleCommand
 */
export const de_DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRuleResponse(data, context);
  const response: DescribeRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRuleCommandError
 */
const de_DescribeRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1DisableRuleCommand
 */
export const de_DisableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableRuleCommandError
 */
const de_DisableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
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
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1EnableRuleCommand
 */
export const de_EnableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableRuleCommandError
 */
const de_EnableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
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
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListApiDestinationsCommand
 */
export const de_ListApiDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApiDestinationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApiDestinationsResponse(data, context);
  const response: ListApiDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListApiDestinationsCommandError
 */
const de_ListApiDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListArchivesCommand
 */
export const de_ListArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListArchivesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArchivesResponse(data, context);
  const response: ListArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListArchivesCommandError
 */
const de_ListArchivesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListConnectionsCommand
 */
export const de_ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConnectionsResponse(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListConnectionsCommandError
 */
const de_ListConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEndpointsCommand
 */
export const de_ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointsResponse(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEndpointsCommandError
 */
const de_ListEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEventBusesCommand
 */
export const de_ListEventBusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventBusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventBusesResponse(data, context);
  const response: ListEventBusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEventBusesCommandError
 */
const de_ListEventBusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListEventSourcesCommand
 */
export const de_ListEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventSourcesResponse(data, context);
  const response: ListEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEventSourcesCommandError
 */
const de_ListEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPartnerEventSourceAccountsCommand
 */
export const de_ListPartnerEventSourceAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPartnerEventSourceAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPartnerEventSourceAccountsResponse(data, context);
  const response: ListPartnerEventSourceAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError
 */
const de_ListPartnerEventSourceAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListPartnerEventSourcesCommand
 */
export const de_ListPartnerEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPartnerEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPartnerEventSourcesResponse(data, context);
  const response: ListPartnerEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPartnerEventSourcesCommandError
 */
const de_ListPartnerEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListReplaysCommand
 */
export const de_ListReplaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListReplaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReplaysResponse(data, context);
  const response: ListReplaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListReplaysCommandError
 */
const de_ListReplaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRuleNamesByTargetCommand
 */
export const de_ListRuleNamesByTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRuleNamesByTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRuleNamesByTargetResponse(data, context);
  const response: ListRuleNamesByTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRuleNamesByTargetCommandError
 */
const de_ListRuleNamesByTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListRulesCommand
 */
export const de_ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRulesCommandError
 */
const de_ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1ListTargetsByRuleCommand
 */
export const de_ListTargetsByRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTargetsByRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTargetsByRuleResponse(data, context);
  const response: ListTargetsByRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTargetsByRuleCommandError
 */
const de_ListTargetsByRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutEventsCommand
 */
export const de_PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutEventsResponse(data, context);
  const response: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutEventsCommandError
 */
const de_PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutPartnerEventsCommand
 */
export const de_PutPartnerEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPartnerEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutPartnerEventsResponse(data, context);
  const response: PutPartnerEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutPartnerEventsCommandError
 */
const de_PutPartnerEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutPermissionCommand
 */
export const de_PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutPermissionCommandError
 */
const de_PutPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
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
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "PolicyLengthExceededException":
    case "com.amazonaws.eventbridge#PolicyLengthExceededException":
      throw await de_PolicyLengthExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutRuleCommand
 */
export const de_PutRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutRuleResponse(data, context);
  const response: PutRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutRuleCommandError
 */
const de_PutRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
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
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1PutTargetsCommand
 */
export const de_PutTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutTargetsResponse(data, context);
  const response: PutTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutTargetsCommandError
 */
const de_PutTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1RemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemovePermissionCommandError
 */
const de_RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
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
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      throw await de_OperationDisabledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1RemoveTargetsCommand
 */
export const de_RemoveTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTargetsResponse(data, context);
  const response: RemoveTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTargetsCommandError
 */
const de_RemoveTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
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
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1StartReplayCommand
 */
export const de_StartReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartReplayResponse(data, context);
  const response: StartReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartReplayCommandError
 */
const de_StartReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1TestEventPatternCommand
 */
export const de_TestEventPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TestEventPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TestEventPatternResponse(data, context);
  const response: TestEventPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TestEventPatternCommandError
 */
const de_TestEventPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
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
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
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
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      throw await de_InternalExceptionRes(parsedOutput, context);
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      throw await de_ManagedRuleExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateApiDestinationCommand
 */
export const de_UpdateApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApiDestinationResponse(data, context);
  const response: UpdateApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateApiDestinationCommandError
 */
const de_UpdateApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiDestinationCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateArchiveCommand
 */
export const de_UpdateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateArchiveResponse(data, context);
  const response: UpdateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateArchiveCommandError
 */
const de_UpdateArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
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
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      throw await de_InvalidEventPatternExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateConnectionResponse(data, context);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateConnectionCommandError
 */
const de_UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateEndpointCommand
 */
export const de_UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEndpointResponse(data, context);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEndpointCommandError
 */
const de_UpdateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
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
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
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
  const deserialized: any = de_IllegalStatusException(body, context);
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
  const deserialized: any = de_InternalException(body, context);
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
  const deserialized: any = de_InvalidEventPatternException(body, context);
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
  const deserialized: any = de_InvalidStateException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_ManagedRuleException(body, context);
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
  const deserialized: any = de_OperationDisabledException(body, context);
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
  const deserialized: any = de_PolicyLengthExceededException(body, context);
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
 * serializeAws_json1_1ActivateEventSourceRequest
 */
const se_ActivateEventSourceRequest = (input: ActivateEventSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1AwsVpcConfiguration
 */
const se_AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AssignPublicIp != null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups != null && { SecurityGroups: se_StringList(input.SecurityGroups, context) }),
    ...(input.Subnets != null && { Subnets: se_StringList(input.Subnets, context) }),
  };
};

/**
 * serializeAws_json1_1BatchArrayProperties
 */
const se_BatchArrayProperties = (input: BatchArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.Size != null && { Size: input.Size }),
  };
};

/**
 * serializeAws_json1_1BatchParameters
 */
const se_BatchParameters = (input: BatchParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArrayProperties != null && { ArrayProperties: se_BatchArrayProperties(input.ArrayProperties, context) }),
    ...(input.JobDefinition != null && { JobDefinition: input.JobDefinition }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.RetryStrategy != null && { RetryStrategy: se_BatchRetryStrategy(input.RetryStrategy, context) }),
  };
};

/**
 * serializeAws_json1_1BatchRetryStrategy
 */
const se_BatchRetryStrategy = (input: BatchRetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Attempts != null && { Attempts: input.Attempts }),
  };
};

/**
 * serializeAws_json1_1CancelReplayRequest
 */
const se_CancelReplayRequest = (input: CancelReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplayName != null && { ReplayName: input.ReplayName }),
  };
};

/**
 * serializeAws_json1_1CapacityProviderStrategy
 */
const se_CapacityProviderStrategy = (input: CapacityProviderStrategyItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CapacityProviderStrategyItem(entry, context);
    });
};

/**
 * serializeAws_json1_1CapacityProviderStrategyItem
 */
const se_CapacityProviderStrategyItem = (input: CapacityProviderStrategyItem, context: __SerdeContext): any => {
  return {
    ...(input.base != null && { base: input.base }),
    ...(input.capacityProvider != null && { capacityProvider: input.capacityProvider }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_json1_1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ConnectionBodyParameter
 */
const se_ConnectionBodyParameter = (input: ConnectionBodyParameter, context: __SerdeContext): any => {
  return {
    ...(input.IsValueSecret != null && { IsValueSecret: input.IsValueSecret }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ConnectionBodyParametersList
 */
const se_ConnectionBodyParametersList = (input: ConnectionBodyParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConnectionBodyParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1ConnectionHeaderParameter
 */
const se_ConnectionHeaderParameter = (input: ConnectionHeaderParameter, context: __SerdeContext): any => {
  return {
    ...(input.IsValueSecret != null && { IsValueSecret: input.IsValueSecret }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ConnectionHeaderParametersList
 */
const se_ConnectionHeaderParametersList = (input: ConnectionHeaderParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConnectionHeaderParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1ConnectionHttpParameters
 */
const se_ConnectionHttpParameters = (input: ConnectionHttpParameters, context: __SerdeContext): any => {
  return {
    ...(input.BodyParameters != null && {
      BodyParameters: se_ConnectionBodyParametersList(input.BodyParameters, context),
    }),
    ...(input.HeaderParameters != null && {
      HeaderParameters: se_ConnectionHeaderParametersList(input.HeaderParameters, context),
    }),
    ...(input.QueryStringParameters != null && {
      QueryStringParameters: se_ConnectionQueryStringParametersList(input.QueryStringParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConnectionQueryStringParameter
 */
const se_ConnectionQueryStringParameter = (input: ConnectionQueryStringParameter, context: __SerdeContext): any => {
  return {
    ...(input.IsValueSecret != null && { IsValueSecret: input.IsValueSecret }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ConnectionQueryStringParametersList
 */
const se_ConnectionQueryStringParametersList = (
  input: ConnectionQueryStringParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConnectionQueryStringParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateApiDestinationRequest
 */
const se_CreateApiDestinationRequest = (input: CreateApiDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HttpMethod != null && { HttpMethod: input.HttpMethod }),
    ...(input.InvocationEndpoint != null && { InvocationEndpoint: input.InvocationEndpoint }),
    ...(input.InvocationRateLimitPerSecond != null && {
      InvocationRateLimitPerSecond: input.InvocationRateLimitPerSecond,
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateArchiveRequest
 */
const se_CreateArchiveRequest = (input: CreateArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName != null && { ArchiveName: input.ArchiveName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventPattern != null && { EventPattern: input.EventPattern }),
    ...(input.EventSourceArn != null && { EventSourceArn: input.EventSourceArn }),
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionApiKeyAuthRequestParameters
 */
const se_CreateConnectionApiKeyAuthRequestParameters = (
  input: CreateConnectionApiKeyAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyName != null && { ApiKeyName: input.ApiKeyName }),
    ...(input.ApiKeyValue != null && { ApiKeyValue: input.ApiKeyValue }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionAuthRequestParameters
 */
const se_CreateConnectionAuthRequestParameters = (
  input: CreateConnectionAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyAuthParameters != null && {
      ApiKeyAuthParameters: se_CreateConnectionApiKeyAuthRequestParameters(input.ApiKeyAuthParameters, context),
    }),
    ...(input.BasicAuthParameters != null && {
      BasicAuthParameters: se_CreateConnectionBasicAuthRequestParameters(input.BasicAuthParameters, context),
    }),
    ...(input.InvocationHttpParameters != null && {
      InvocationHttpParameters: se_ConnectionHttpParameters(input.InvocationHttpParameters, context),
    }),
    ...(input.OAuthParameters != null && {
      OAuthParameters: se_CreateConnectionOAuthRequestParameters(input.OAuthParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionBasicAuthRequestParameters
 */
const se_CreateConnectionBasicAuthRequestParameters = (
  input: CreateConnectionBasicAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionOAuthClientRequestParameters
 */
const se_CreateConnectionOAuthClientRequestParameters = (
  input: CreateConnectionOAuthClientRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientID != null && { ClientID: input.ClientID }),
    ...(input.ClientSecret != null && { ClientSecret: input.ClientSecret }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionOAuthRequestParameters
 */
const se_CreateConnectionOAuthRequestParameters = (
  input: CreateConnectionOAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationEndpoint != null && { AuthorizationEndpoint: input.AuthorizationEndpoint }),
    ...(input.ClientParameters != null && {
      ClientParameters: se_CreateConnectionOAuthClientRequestParameters(input.ClientParameters, context),
    }),
    ...(input.HttpMethod != null && { HttpMethod: input.HttpMethod }),
    ...(input.OAuthHttpParameters != null && {
      OAuthHttpParameters: se_ConnectionHttpParameters(input.OAuthHttpParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateConnectionRequest
 */
const se_CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthParameters != null && {
      AuthParameters: se_CreateConnectionAuthRequestParameters(input.AuthParameters, context),
    }),
    ...(input.AuthorizationType != null && { AuthorizationType: input.AuthorizationType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1CreateEndpointRequest
 */
const se_CreateEndpointRequest = (input: CreateEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventBuses != null && { EventBuses: se_EndpointEventBusList(input.EventBuses, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ReplicationConfig != null && {
      ReplicationConfig: se_ReplicationConfig(input.ReplicationConfig, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.RoutingConfig != null && { RoutingConfig: se_RoutingConfig(input.RoutingConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEventBusRequest
 */
const se_CreateEventBusRequest = (input: CreateEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceName != null && { EventSourceName: input.EventSourceName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePartnerEventSourceRequest
 */
const se_CreatePartnerEventSourceRequest = (input: CreatePartnerEventSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Account != null && { Account: input.Account }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeactivateEventSourceRequest
 */
const se_DeactivateEventSourceRequest = (input: DeactivateEventSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeadLetterConfig
 */
const se_DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
  };
};

/**
 * serializeAws_json1_1DeauthorizeConnectionRequest
 */
const se_DeauthorizeConnectionRequest = (input: DeauthorizeConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteApiDestinationRequest
 */
const se_DeleteApiDestinationRequest = (input: DeleteApiDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteArchiveRequest
 */
const se_DeleteArchiveRequest = (input: DeleteArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName != null && { ArchiveName: input.ArchiveName }),
  };
};

/**
 * serializeAws_json1_1DeleteConnectionRequest
 */
const se_DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteEndpointRequest
 */
const se_DeleteEndpointRequest = (input: DeleteEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteEventBusRequest
 */
const se_DeleteEventBusRequest = (input: DeleteEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeletePartnerEventSourceRequest
 */
const se_DeletePartnerEventSourceRequest = (input: DeletePartnerEventSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Account != null && { Account: input.Account }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DeleteRuleRequest
 */
const se_DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Force != null && { Force: input.Force }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeApiDestinationRequest
 */
const se_DescribeApiDestinationRequest = (input: DescribeApiDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeArchiveRequest
 */
const se_DescribeArchiveRequest = (input: DescribeArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName != null && { ArchiveName: input.ArchiveName }),
  };
};

/**
 * serializeAws_json1_1DescribeConnectionRequest
 */
const se_DescribeConnectionRequest = (input: DescribeConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeEndpointRequest
 */
const se_DescribeEndpointRequest = (input: DescribeEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeEventBusRequest
 */
const se_DescribeEventBusRequest = (input: DescribeEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeEventSourceRequest
 */
const se_DescribeEventSourceRequest = (input: DescribeEventSourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribePartnerEventSourceRequest
 */
const se_DescribePartnerEventSourceRequest = (
  input: DescribePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DescribeReplayRequest
 */
const se_DescribeReplayRequest = (input: DescribeReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplayName != null && { ReplayName: input.ReplayName }),
  };
};

/**
 * serializeAws_json1_1DescribeRuleRequest
 */
const se_DescribeRuleRequest = (input: DescribeRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1DisableRuleRequest
 */
const se_DisableRuleRequest = (input: DisableRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1EcsParameters
 */
const se_EcsParameters = (input: EcsParameters, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviderStrategy != null && {
      CapacityProviderStrategy: se_CapacityProviderStrategy(input.CapacityProviderStrategy, context),
    }),
    ...(input.EnableECSManagedTags != null && { EnableECSManagedTags: input.EnableECSManagedTags }),
    ...(input.EnableExecuteCommand != null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.LaunchType != null && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: se_NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.PlacementConstraints != null && {
      PlacementConstraints: se_PlacementConstraints(input.PlacementConstraints, context),
    }),
    ...(input.PlacementStrategy != null && {
      PlacementStrategy: se_PlacementStrategies(input.PlacementStrategy, context),
    }),
    ...(input.PlatformVersion != null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags != null && { PropagateTags: input.PropagateTags }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TaskCount != null && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn != null && { TaskDefinitionArn: input.TaskDefinitionArn }),
  };
};

/**
 * serializeAws_json1_1EnableRuleRequest
 */
const se_EnableRuleRequest = (input: EnableRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1EndpointEventBus
 */
const se_EndpointEventBus = (input: EndpointEventBus, context: __SerdeContext): any => {
  return {
    ...(input.EventBusArn != null && { EventBusArn: input.EventBusArn }),
  };
};

/**
 * serializeAws_json1_1EndpointEventBusList
 */
const se_EndpointEventBusList = (input: EndpointEventBus[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EndpointEventBus(entry, context);
    });
};

/**
 * serializeAws_json1_1EventResourceList
 */
const se_EventResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FailoverConfig
 */
const se_FailoverConfig = (input: FailoverConfig, context: __SerdeContext): any => {
  return {
    ...(input.Primary != null && { Primary: se_Primary(input.Primary, context) }),
    ...(input.Secondary != null && { Secondary: se_Secondary(input.Secondary, context) }),
  };
};

/**
 * serializeAws_json1_1HeaderParametersMap
 */
const se_HeaderParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1HttpParameters
 */
const se_HttpParameters = (input: HttpParameters, context: __SerdeContext): any => {
  return {
    ...(input.HeaderParameters != null && {
      HeaderParameters: se_HeaderParametersMap(input.HeaderParameters, context),
    }),
    ...(input.PathParameterValues != null && {
      PathParameterValues: se_PathParameterList(input.PathParameterValues, context),
    }),
    ...(input.QueryStringParameters != null && {
      QueryStringParameters: se_QueryStringParametersMap(input.QueryStringParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1InputTransformer
 */
const se_InputTransformer = (input: InputTransformer, context: __SerdeContext): any => {
  return {
    ...(input.InputPathsMap != null && { InputPathsMap: se_TransformerPaths(input.InputPathsMap, context) }),
    ...(input.InputTemplate != null && { InputTemplate: input.InputTemplate }),
  };
};

/**
 * serializeAws_json1_1KinesisParameters
 */
const se_KinesisParameters = (input: KinesisParameters, context: __SerdeContext): any => {
  return {
    ...(input.PartitionKeyPath != null && { PartitionKeyPath: input.PartitionKeyPath }),
  };
};

/**
 * serializeAws_json1_1ListApiDestinationsRequest
 */
const se_ListApiDestinationsRequest = (input: ListApiDestinationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListArchivesRequest
 */
const se_ListArchivesRequest = (input: ListArchivesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceArn != null && { EventSourceArn: input.EventSourceArn }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_json1_1ListConnectionsRequest
 */
const se_ListConnectionsRequest = (input: ListConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionState != null && { ConnectionState: input.ConnectionState }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEndpointsRequest
 */
const se_ListEndpointsRequest = (input: ListEndpointsRequest, context: __SerdeContext): any => {
  return {
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEventBusesRequest
 */
const se_ListEventBusesRequest = (input: ListEventBusesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListEventSourcesRequest
 */
const se_ListEventSourcesRequest = (input: ListEventSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPartnerEventSourceAccountsRequest
 */
const se_ListPartnerEventSourceAccountsRequest = (
  input: ListPartnerEventSourceAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventSourceName != null && { EventSourceName: input.EventSourceName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPartnerEventSourcesRequest
 */
const se_ListPartnerEventSourcesRequest = (input: ListPartnerEventSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListReplaysRequest
 */
const se_ListReplaysRequest = (input: ListReplaysRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceArn != null && { EventSourceArn: input.EventSourceArn }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_json1_1ListRuleNamesByTargetRequest
 */
const se_ListRuleNamesByTargetRequest = (input: ListRuleNamesByTargetRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  };
};

/**
 * serializeAws_json1_1ListRulesRequest
 */
const se_ListRulesRequest = (input: ListRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListTargetsByRuleRequest
 */
const se_ListTargetsByRuleRequest = (input: ListTargetsByRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Rule != null && { Rule: input.Rule }),
  };
};

/**
 * serializeAws_json1_1NetworkConfiguration
 */
const se_NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration != null && {
      awsvpcConfiguration: se_AwsVpcConfiguration(input.awsvpcConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1PathParameterList
 */
const se_PathParameterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PlacementConstraint
 */
const se_PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1PlacementConstraints
 */
const se_PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementConstraint(entry, context);
    });
};

/**
 * serializeAws_json1_1PlacementStrategies
 */
const se_PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PlacementStrategy(entry, context);
    });
};

/**
 * serializeAws_json1_1PlacementStrategy
 */
const se_PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field != null && { field: input.field }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1Primary
 */
const se_Primary = (input: Primary, context: __SerdeContext): any => {
  return {
    ...(input.HealthCheck != null && { HealthCheck: input.HealthCheck }),
  };
};

/**
 * serializeAws_json1_1PutEventsRequest
 */
const se_PutEventsRequest = (input: PutEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EndpointId != null && { EndpointId: input.EndpointId }),
    ...(input.Entries != null && { Entries: se_PutEventsRequestEntryList(input.Entries, context) }),
  };
};

/**
 * serializeAws_json1_1PutEventsRequestEntry
 */
const se_PutEventsRequestEntry = (input: PutEventsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Detail != null && { Detail: input.Detail }),
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Resources != null && { Resources: se_EventResourceList(input.Resources, context) }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Time != null && { Time: Math.round(input.Time.getTime() / 1000) }),
    ...(input.TraceHeader != null && { TraceHeader: input.TraceHeader }),
  };
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
  return {
    ...(input.Entries != null && { Entries: se_PutPartnerEventsRequestEntryList(input.Entries, context) }),
  };
};

/**
 * serializeAws_json1_1PutPartnerEventsRequestEntry
 */
const se_PutPartnerEventsRequestEntry = (input: PutPartnerEventsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Detail != null && { Detail: input.Detail }),
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.Resources != null && { Resources: se_EventResourceList(input.Resources, context) }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Time != null && { Time: Math.round(input.Time.getTime() / 1000) }),
  };
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

/**
 * serializeAws_json1_1PutPermissionRequest
 */
const se_PutPermissionRequest = (input: PutPermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Condition != null && { Condition: se_Condition(input.Condition, context) }),
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Policy != null && { Policy: input.Policy }),
    ...(input.Principal != null && { Principal: input.Principal }),
    ...(input.StatementId != null && { StatementId: input.StatementId }),
  };
};

/**
 * serializeAws_json1_1PutRuleRequest
 */
const se_PutRuleRequest = (input: PutRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.EventPattern != null && { EventPattern: input.EventPattern }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.State != null && { State: input.State }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1PutTargetsRequest
 */
const se_PutTargetsRequest = (input: PutTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Rule != null && { Rule: input.Rule }),
    ...(input.Targets != null && { Targets: se_TargetList(input.Targets, context) }),
  };
};

/**
 * serializeAws_json1_1QueryStringParametersMap
 */
const se_QueryStringParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RedshiftDataParameters
 */
const se_RedshiftDataParameters = (input: RedshiftDataParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database != null && { Database: input.Database }),
    ...(input.DbUser != null && { DbUser: input.DbUser }),
    ...(input.SecretManagerArn != null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.Sql != null && { Sql: input.Sql }),
    ...(input.StatementName != null && { StatementName: input.StatementName }),
    ...(input.WithEvent != null && { WithEvent: input.WithEvent }),
  };
};

/**
 * serializeAws_json1_1RemovePermissionRequest
 */
const se_RemovePermissionRequest = (input: RemovePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.RemoveAllPermissions != null && { RemoveAllPermissions: input.RemoveAllPermissions }),
    ...(input.StatementId != null && { StatementId: input.StatementId }),
  };
};

/**
 * serializeAws_json1_1RemoveTargetsRequest
 */
const se_RemoveTargetsRequest = (input: RemoveTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName != null && { EventBusName: input.EventBusName }),
    ...(input.Force != null && { Force: input.Force }),
    ...(input.Ids != null && { Ids: se_TargetIdList(input.Ids, context) }),
    ...(input.Rule != null && { Rule: input.Rule }),
  };
};

/**
 * serializeAws_json1_1ReplayDestination
 */
const se_ReplayDestination = (input: ReplayDestination, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.FilterArns != null && { FilterArns: se_ReplayDestinationFilters(input.FilterArns, context) }),
  };
};

/**
 * serializeAws_json1_1ReplayDestinationFilters
 */
const se_ReplayDestinationFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ReplicationConfig
 */
const se_ReplicationConfig = (input: ReplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.State != null && { State: input.State }),
  };
};

/**
 * serializeAws_json1_1RetryPolicy
 */
const se_RetryPolicy = (input: RetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumEventAgeInSeconds != null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts != null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  };
};

/**
 * serializeAws_json1_1RoutingConfig
 */
const se_RoutingConfig = (input: RoutingConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailoverConfig != null && { FailoverConfig: se_FailoverConfig(input.FailoverConfig, context) }),
  };
};

/**
 * serializeAws_json1_1RunCommandParameters
 */
const se_RunCommandParameters = (input: RunCommandParameters, context: __SerdeContext): any => {
  return {
    ...(input.RunCommandTargets != null && {
      RunCommandTargets: se_RunCommandTargets(input.RunCommandTargets, context),
    }),
  };
};

/**
 * serializeAws_json1_1RunCommandTarget
 */
const se_RunCommandTarget = (input: RunCommandTarget, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Values != null && { Values: se_RunCommandTargetValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1RunCommandTargets
 */
const se_RunCommandTargets = (input: RunCommandTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RunCommandTarget(entry, context);
    });
};

/**
 * serializeAws_json1_1RunCommandTargetValues
 */
const se_RunCommandTargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SageMakerPipelineParameter
 */
const se_SageMakerPipelineParameter = (input: SageMakerPipelineParameter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1SageMakerPipelineParameterList
 */
const se_SageMakerPipelineParameterList = (input: SageMakerPipelineParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SageMakerPipelineParameter(entry, context);
    });
};

/**
 * serializeAws_json1_1SageMakerPipelineParameters
 */
const se_SageMakerPipelineParameters = (input: SageMakerPipelineParameters, context: __SerdeContext): any => {
  return {
    ...(input.PipelineParameterList != null && {
      PipelineParameterList: se_SageMakerPipelineParameterList(input.PipelineParameterList, context),
    }),
  };
};

/**
 * serializeAws_json1_1Secondary
 */
const se_Secondary = (input: Secondary, context: __SerdeContext): any => {
  return {
    ...(input.Route != null && { Route: input.Route }),
  };
};

/**
 * serializeAws_json1_1SqsParameters
 */
const se_SqsParameters = (input: SqsParameters, context: __SerdeContext): any => {
  return {
    ...(input.MessageGroupId != null && { MessageGroupId: input.MessageGroupId }),
  };
};

/**
 * serializeAws_json1_1StartReplayRequest
 */
const se_StartReplayRequest = (input: StartReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Destination != null && { Destination: se_ReplayDestination(input.Destination, context) }),
    ...(input.EventEndTime != null && { EventEndTime: Math.round(input.EventEndTime.getTime() / 1000) }),
    ...(input.EventSourceArn != null && { EventSourceArn: input.EventSourceArn }),
    ...(input.EventStartTime != null && { EventStartTime: Math.round(input.EventStartTime.getTime() / 1000) }),
    ...(input.ReplayName != null && { ReplayName: input.ReplayName }),
  };
};

/**
 * serializeAws_json1_1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Target
 */
const se_Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.BatchParameters != null && { BatchParameters: se_BatchParameters(input.BatchParameters, context) }),
    ...(input.DeadLetterConfig != null && { DeadLetterConfig: se_DeadLetterConfig(input.DeadLetterConfig, context) }),
    ...(input.EcsParameters != null && { EcsParameters: se_EcsParameters(input.EcsParameters, context) }),
    ...(input.HttpParameters != null && { HttpParameters: se_HttpParameters(input.HttpParameters, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Input != null && { Input: input.Input }),
    ...(input.InputPath != null && { InputPath: input.InputPath }),
    ...(input.InputTransformer != null && { InputTransformer: se_InputTransformer(input.InputTransformer, context) }),
    ...(input.KinesisParameters != null && {
      KinesisParameters: se_KinesisParameters(input.KinesisParameters, context),
    }),
    ...(input.RedshiftDataParameters != null && {
      RedshiftDataParameters: se_RedshiftDataParameters(input.RedshiftDataParameters, context),
    }),
    ...(input.RetryPolicy != null && { RetryPolicy: se_RetryPolicy(input.RetryPolicy, context) }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.RunCommandParameters != null && {
      RunCommandParameters: se_RunCommandParameters(input.RunCommandParameters, context),
    }),
    ...(input.SageMakerPipelineParameters != null && {
      SageMakerPipelineParameters: se_SageMakerPipelineParameters(input.SageMakerPipelineParameters, context),
    }),
    ...(input.SqsParameters != null && { SqsParameters: se_SqsParameters(input.SqsParameters, context) }),
  };
};

/**
 * serializeAws_json1_1TargetIdList
 */
const se_TargetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TargetList
 */
const se_TargetList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Target(entry, context);
    });
};

/**
 * serializeAws_json1_1TestEventPatternRequest
 */
const se_TestEventPatternRequest = (input: TestEventPatternRequest, context: __SerdeContext): any => {
  return {
    ...(input.Event != null && { Event: input.Event }),
    ...(input.EventPattern != null && { EventPattern: input.EventPattern }),
  };
};

/**
 * serializeAws_json1_1TransformerPaths
 */
const se_TransformerPaths = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateApiDestinationRequest
 */
const se_UpdateApiDestinationRequest = (input: UpdateApiDestinationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.HttpMethod != null && { HttpMethod: input.HttpMethod }),
    ...(input.InvocationEndpoint != null && { InvocationEndpoint: input.InvocationEndpoint }),
    ...(input.InvocationRateLimitPerSecond != null && {
      InvocationRateLimitPerSecond: input.InvocationRateLimitPerSecond,
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateArchiveRequest
 */
const se_UpdateArchiveRequest = (input: UpdateArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName != null && { ArchiveName: input.ArchiveName }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventPattern != null && { EventPattern: input.EventPattern }),
    ...(input.RetentionDays != null && { RetentionDays: input.RetentionDays }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionApiKeyAuthRequestParameters
 */
const se_UpdateConnectionApiKeyAuthRequestParameters = (
  input: UpdateConnectionApiKeyAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyName != null && { ApiKeyName: input.ApiKeyName }),
    ...(input.ApiKeyValue != null && { ApiKeyValue: input.ApiKeyValue }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionAuthRequestParameters
 */
const se_UpdateConnectionAuthRequestParameters = (
  input: UpdateConnectionAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyAuthParameters != null && {
      ApiKeyAuthParameters: se_UpdateConnectionApiKeyAuthRequestParameters(input.ApiKeyAuthParameters, context),
    }),
    ...(input.BasicAuthParameters != null && {
      BasicAuthParameters: se_UpdateConnectionBasicAuthRequestParameters(input.BasicAuthParameters, context),
    }),
    ...(input.InvocationHttpParameters != null && {
      InvocationHttpParameters: se_ConnectionHttpParameters(input.InvocationHttpParameters, context),
    }),
    ...(input.OAuthParameters != null && {
      OAuthParameters: se_UpdateConnectionOAuthRequestParameters(input.OAuthParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionBasicAuthRequestParameters
 */
const se_UpdateConnectionBasicAuthRequestParameters = (
  input: UpdateConnectionBasicAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionOAuthClientRequestParameters
 */
const se_UpdateConnectionOAuthClientRequestParameters = (
  input: UpdateConnectionOAuthClientRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientID != null && { ClientID: input.ClientID }),
    ...(input.ClientSecret != null && { ClientSecret: input.ClientSecret }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionOAuthRequestParameters
 */
const se_UpdateConnectionOAuthRequestParameters = (
  input: UpdateConnectionOAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationEndpoint != null && { AuthorizationEndpoint: input.AuthorizationEndpoint }),
    ...(input.ClientParameters != null && {
      ClientParameters: se_UpdateConnectionOAuthClientRequestParameters(input.ClientParameters, context),
    }),
    ...(input.HttpMethod != null && { HttpMethod: input.HttpMethod }),
    ...(input.OAuthHttpParameters != null && {
      OAuthHttpParameters: se_ConnectionHttpParameters(input.OAuthHttpParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateConnectionRequest
 */
const se_UpdateConnectionRequest = (input: UpdateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthParameters != null && {
      AuthParameters: se_UpdateConnectionAuthRequestParameters(input.AuthParameters, context),
    }),
    ...(input.AuthorizationType != null && { AuthorizationType: input.AuthorizationType }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UpdateEndpointRequest
 */
const se_UpdateEndpointRequest = (input: UpdateEndpointRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EventBuses != null && { EventBuses: se_EndpointEventBusList(input.EventBuses, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ReplicationConfig != null && {
      ReplicationConfig: se_ReplicationConfig(input.ReplicationConfig, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.RoutingConfig != null && { RoutingConfig: se_RoutingConfig(input.RoutingConfig, context) }),
  };
};

/**
 * deserializeAws_json1_1ApiDestination
 */
const de_ApiDestination = (output: any, context: __SerdeContext): ApiDestination => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    ConnectionArn: __expectString(output.ConnectionArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    HttpMethod: __expectString(output.HttpMethod),
    InvocationEndpoint: __expectString(output.InvocationEndpoint),
    InvocationRateLimitPerSecond: __expectInt32(output.InvocationRateLimitPerSecond),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1ApiDestinationResponseList
 */
const de_ApiDestinationResponseList = (output: any, context: __SerdeContext): ApiDestination[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApiDestination(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Archive
 */
const de_Archive = (output: any, context: __SerdeContext): Archive => {
  return {
    ArchiveName: __expectString(output.ArchiveName),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EventCount: __expectLong(output.EventCount),
    EventSourceArn: __expectString(output.EventSourceArn),
    RetentionDays: __expectInt32(output.RetentionDays),
    SizeBytes: __expectLong(output.SizeBytes),
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1ArchiveResponseList
 */
const de_ArchiveResponseList = (output: any, context: __SerdeContext): Archive[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Archive(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AwsVpcConfiguration
 */
const de_AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups: output.SecurityGroups != null ? de_StringList(output.SecurityGroups, context) : undefined,
    Subnets: output.Subnets != null ? de_StringList(output.Subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchArrayProperties
 */
const de_BatchArrayProperties = (output: any, context: __SerdeContext): BatchArrayProperties => {
  return {
    Size: __expectInt32(output.Size),
  } as any;
};

/**
 * deserializeAws_json1_1BatchParameters
 */
const de_BatchParameters = (output: any, context: __SerdeContext): BatchParameters => {
  return {
    ArrayProperties:
      output.ArrayProperties != null ? de_BatchArrayProperties(output.ArrayProperties, context) : undefined,
    JobDefinition: __expectString(output.JobDefinition),
    JobName: __expectString(output.JobName),
    RetryStrategy: output.RetryStrategy != null ? de_BatchRetryStrategy(output.RetryStrategy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchRetryStrategy
 */
const de_BatchRetryStrategy = (output: any, context: __SerdeContext): BatchRetryStrategy => {
  return {
    Attempts: __expectInt32(output.Attempts),
  } as any;
};

/**
 * deserializeAws_json1_1CancelReplayResponse
 */
const de_CancelReplayResponse = (output: any, context: __SerdeContext): CancelReplayResponse => {
  return {
    ReplayArn: __expectString(output.ReplayArn),
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1CapacityProviderStrategy
 */
const de_CapacityProviderStrategy = (output: any, context: __SerdeContext): CapacityProviderStrategyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CapacityProviderStrategyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CapacityProviderStrategyItem
 */
const de_CapacityProviderStrategyItem = (output: any, context: __SerdeContext): CapacityProviderStrategyItem => {
  return {
    base: __expectInt32(output.base),
    capacityProvider: __expectString(output.capacityProvider),
    weight: __expectInt32(output.weight),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    AuthorizationType: __expectString(output.AuthorizationType),
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionApiKeyAuthResponseParameters
 */
const de_ConnectionApiKeyAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionApiKeyAuthResponseParameters => {
  return {
    ApiKeyName: __expectString(output.ApiKeyName),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionAuthResponseParameters
 */
const de_ConnectionAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionAuthResponseParameters => {
  return {
    ApiKeyAuthParameters:
      output.ApiKeyAuthParameters != null
        ? de_ConnectionApiKeyAuthResponseParameters(output.ApiKeyAuthParameters, context)
        : undefined,
    BasicAuthParameters:
      output.BasicAuthParameters != null
        ? de_ConnectionBasicAuthResponseParameters(output.BasicAuthParameters, context)
        : undefined,
    InvocationHttpParameters:
      output.InvocationHttpParameters != null
        ? de_ConnectionHttpParameters(output.InvocationHttpParameters, context)
        : undefined,
    OAuthParameters:
      output.OAuthParameters != null
        ? de_ConnectionOAuthResponseParameters(output.OAuthParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionBasicAuthResponseParameters
 */
const de_ConnectionBasicAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionBasicAuthResponseParameters => {
  return {
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionBodyParameter
 */
const de_ConnectionBodyParameter = (output: any, context: __SerdeContext): ConnectionBodyParameter => {
  return {
    IsValueSecret: __expectBoolean(output.IsValueSecret),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionBodyParametersList
 */
const de_ConnectionBodyParametersList = (output: any, context: __SerdeContext): ConnectionBodyParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectionBodyParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectionHeaderParameter
 */
const de_ConnectionHeaderParameter = (output: any, context: __SerdeContext): ConnectionHeaderParameter => {
  return {
    IsValueSecret: __expectBoolean(output.IsValueSecret),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionHeaderParametersList
 */
const de_ConnectionHeaderParametersList = (output: any, context: __SerdeContext): ConnectionHeaderParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectionHeaderParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectionHttpParameters
 */
const de_ConnectionHttpParameters = (output: any, context: __SerdeContext): ConnectionHttpParameters => {
  return {
    BodyParameters:
      output.BodyParameters != null ? de_ConnectionBodyParametersList(output.BodyParameters, context) : undefined,
    HeaderParameters:
      output.HeaderParameters != null ? de_ConnectionHeaderParametersList(output.HeaderParameters, context) : undefined,
    QueryStringParameters:
      output.QueryStringParameters != null
        ? de_ConnectionQueryStringParametersList(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionOAuthClientResponseParameters
 */
const de_ConnectionOAuthClientResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionOAuthClientResponseParameters => {
  return {
    ClientID: __expectString(output.ClientID),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionOAuthResponseParameters
 */
const de_ConnectionOAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionOAuthResponseParameters => {
  return {
    AuthorizationEndpoint: __expectString(output.AuthorizationEndpoint),
    ClientParameters:
      output.ClientParameters != null
        ? de_ConnectionOAuthClientResponseParameters(output.ClientParameters, context)
        : undefined,
    HttpMethod: __expectString(output.HttpMethod),
    OAuthHttpParameters:
      output.OAuthHttpParameters != null ? de_ConnectionHttpParameters(output.OAuthHttpParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionQueryStringParameter
 */
const de_ConnectionQueryStringParameter = (output: any, context: __SerdeContext): ConnectionQueryStringParameter => {
  return {
    IsValueSecret: __expectBoolean(output.IsValueSecret),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ConnectionQueryStringParametersList
 */
const de_ConnectionQueryStringParametersList = (
  output: any,
  context: __SerdeContext
): ConnectionQueryStringParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectionQueryStringParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConnectionResponseList
 */
const de_ConnectionResponseList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateApiDestinationResponse
 */
const de_CreateApiDestinationResponse = (output: any, context: __SerdeContext): CreateApiDestinationResponse => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateArchiveResponse
 */
const de_CreateArchiveResponse = (output: any, context: __SerdeContext): CreateArchiveResponse => {
  return {
    ArchiveArn: __expectString(output.ArchiveArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1CreateConnectionResponse
 */
const de_CreateConnectionResponse = (output: any, context: __SerdeContext): CreateConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateEndpointResponse
 */
const de_CreateEndpointResponse = (output: any, context: __SerdeContext): CreateEndpointResponse => {
  return {
    Arn: __expectString(output.Arn),
    EventBuses: output.EventBuses != null ? de_EndpointEventBusList(output.EventBuses, context) : undefined,
    Name: __expectString(output.Name),
    ReplicationConfig:
      output.ReplicationConfig != null ? de_ReplicationConfig(output.ReplicationConfig, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    RoutingConfig: output.RoutingConfig != null ? de_RoutingConfig(output.RoutingConfig, context) : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEventBusResponse
 */
const de_CreateEventBusResponse = (output: any, context: __SerdeContext): CreateEventBusResponse => {
  return {
    EventBusArn: __expectString(output.EventBusArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePartnerEventSourceResponse
 */
const de_CreatePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): CreatePartnerEventSourceResponse => {
  return {
    EventSourceArn: __expectString(output.EventSourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1DeadLetterConfig
 */
const de_DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

/**
 * deserializeAws_json1_1DeauthorizeConnectionResponse
 */
const de_DeauthorizeConnectionResponse = (output: any, context: __SerdeContext): DeauthorizeConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApiDestinationResponse
 */
const de_DeleteApiDestinationResponse = (output: any, context: __SerdeContext): DeleteApiDestinationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteArchiveResponse
 */
const de_DeleteArchiveResponse = (output: any, context: __SerdeContext): DeleteArchiveResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteConnectionResponse
 */
const de_DeleteConnectionResponse = (output: any, context: __SerdeContext): DeleteConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEndpointResponse
 */
const de_DeleteEndpointResponse = (output: any, context: __SerdeContext): DeleteEndpointResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeApiDestinationResponse
 */
const de_DescribeApiDestinationResponse = (output: any, context: __SerdeContext): DescribeApiDestinationResponse => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    ConnectionArn: __expectString(output.ConnectionArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    HttpMethod: __expectString(output.HttpMethod),
    InvocationEndpoint: __expectString(output.InvocationEndpoint),
    InvocationRateLimitPerSecond: __expectInt32(output.InvocationRateLimitPerSecond),
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeArchiveResponse
 */
const de_DescribeArchiveResponse = (output: any, context: __SerdeContext): DescribeArchiveResponse => {
  return {
    ArchiveArn: __expectString(output.ArchiveArn),
    ArchiveName: __expectString(output.ArchiveName),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    EventCount: __expectLong(output.EventCount),
    EventPattern: __expectString(output.EventPattern),
    EventSourceArn: __expectString(output.EventSourceArn),
    RetentionDays: __expectInt32(output.RetentionDays),
    SizeBytes: __expectLong(output.SizeBytes),
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeConnectionResponse
 */
const de_DescribeConnectionResponse = (output: any, context: __SerdeContext): DescribeConnectionResponse => {
  return {
    AuthParameters:
      output.AuthParameters != null ? de_ConnectionAuthResponseParameters(output.AuthParameters, context) : undefined,
    AuthorizationType: __expectString(output.AuthorizationType),
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastAuthorizedTime:
      output.LastAuthorizedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    SecretArn: __expectString(output.SecretArn),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointResponse
 */
const de_DescribeEndpointResponse = (output: any, context: __SerdeContext): DescribeEndpointResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    EndpointId: __expectString(output.EndpointId),
    EndpointUrl: __expectString(output.EndpointUrl),
    EventBuses: output.EventBuses != null ? de_EndpointEventBusList(output.EventBuses, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    ReplicationConfig:
      output.ReplicationConfig != null ? de_ReplicationConfig(output.ReplicationConfig, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    RoutingConfig: output.RoutingConfig != null ? de_RoutingConfig(output.RoutingConfig, context) : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventBusResponse
 */
const de_DescribeEventBusResponse = (output: any, context: __SerdeContext): DescribeEventBusResponse => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventSourceResponse
 */
const de_DescribeEventSourceResponse = (output: any, context: __SerdeContext): DescribeEventSourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreatedBy: __expectString(output.CreatedBy),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePartnerEventSourceResponse
 */
const de_DescribePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribePartnerEventSourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeReplayResponse
 */
const de_DescribeReplayResponse = (output: any, context: __SerdeContext): DescribeReplayResponse => {
  return {
    Description: __expectString(output.Description),
    Destination: output.Destination != null ? de_ReplayDestination(output.Destination, context) : undefined,
    EventEndTime:
      output.EventEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventEndTime)))
        : undefined,
    EventLastReplayedTime:
      output.EventLastReplayedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventLastReplayedTime)))
        : undefined,
    EventSourceArn: __expectString(output.EventSourceArn),
    EventStartTime:
      output.EventStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventStartTime)))
        : undefined,
    ReplayArn: __expectString(output.ReplayArn),
    ReplayEndTime:
      output.ReplayEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayEndTime)))
        : undefined,
    ReplayName: __expectString(output.ReplayName),
    ReplayStartTime:
      output.ReplayStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayStartTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRuleResponse
 */
const de_DescribeRuleResponse = (output: any, context: __SerdeContext): DescribeRuleResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreatedBy: __expectString(output.CreatedBy),
    Description: __expectString(output.Description),
    EventBusName: __expectString(output.EventBusName),
    EventPattern: __expectString(output.EventPattern),
    ManagedBy: __expectString(output.ManagedBy),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    ScheduleExpression: __expectString(output.ScheduleExpression),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1EcsParameters
 */
const de_EcsParameters = (output: any, context: __SerdeContext): EcsParameters => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy != null
        ? de_CapacityProviderStrategy(output.CapacityProviderStrategy, context)
        : undefined,
    EnableECSManagedTags: __expectBoolean(output.EnableECSManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    Group: __expectString(output.Group),
    LaunchType: __expectString(output.LaunchType),
    NetworkConfiguration:
      output.NetworkConfiguration != null ? de_NetworkConfiguration(output.NetworkConfiguration, context) : undefined,
    PlacementConstraints:
      output.PlacementConstraints != null ? de_PlacementConstraints(output.PlacementConstraints, context) : undefined,
    PlacementStrategy:
      output.PlacementStrategy != null ? de_PlacementStrategies(output.PlacementStrategy, context) : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    ReferenceId: __expectString(output.ReferenceId),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
    TaskCount: __expectInt32(output.TaskCount),
    TaskDefinitionArn: __expectString(output.TaskDefinitionArn),
  } as any;
};

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    EndpointId: __expectString(output.EndpointId),
    EndpointUrl: __expectString(output.EndpointUrl),
    EventBuses: output.EventBuses != null ? de_EndpointEventBusList(output.EventBuses, context) : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    ReplicationConfig:
      output.ReplicationConfig != null ? de_ReplicationConfig(output.ReplicationConfig, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    RoutingConfig: output.RoutingConfig != null ? de_RoutingConfig(output.RoutingConfig, context) : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointEventBus
 */
const de_EndpointEventBus = (output: any, context: __SerdeContext): EndpointEventBus => {
  return {
    EventBusArn: __expectString(output.EventBusArn),
  } as any;
};

/**
 * deserializeAws_json1_1EndpointEventBusList
 */
const de_EndpointEventBusList = (output: any, context: __SerdeContext): EndpointEventBus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointEventBus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EndpointList
 */
const de_EndpointList = (output: any, context: __SerdeContext): Endpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Endpoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventBus
 */
const de_EventBus = (output: any, context: __SerdeContext): EventBus => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_json1_1EventBusList
 */
const de_EventBusList = (output: any, context: __SerdeContext): EventBus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventBus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventSource
 */
const de_EventSource = (output: any, context: __SerdeContext): EventSource => {
  return {
    Arn: __expectString(output.Arn),
    CreatedBy: __expectString(output.CreatedBy),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1EventSourceList
 */
const de_EventSourceList = (output: any, context: __SerdeContext): EventSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FailoverConfig
 */
const de_FailoverConfig = (output: any, context: __SerdeContext): FailoverConfig => {
  return {
    Primary: output.Primary != null ? de_Primary(output.Primary, context) : undefined,
    Secondary: output.Secondary != null ? de_Secondary(output.Secondary, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HeaderParametersMap
 */
const de_HeaderParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1HttpParameters
 */
const de_HttpParameters = (output: any, context: __SerdeContext): HttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters != null ? de_HeaderParametersMap(output.HeaderParameters, context) : undefined,
    PathParameterValues:
      output.PathParameterValues != null ? de_PathParameterList(output.PathParameterValues, context) : undefined,
    QueryStringParameters:
      output.QueryStringParameters != null
        ? de_QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IllegalStatusException
 */
const de_IllegalStatusException = (output: any, context: __SerdeContext): IllegalStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InputTransformer
 */
const de_InputTransformer = (output: any, context: __SerdeContext): InputTransformer => {
  return {
    InputPathsMap: output.InputPathsMap != null ? de_TransformerPaths(output.InputPathsMap, context) : undefined,
    InputTemplate: __expectString(output.InputTemplate),
  } as any;
};

/**
 * deserializeAws_json1_1InternalException
 */
const de_InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEventPatternException
 */
const de_InvalidEventPatternException = (output: any, context: __SerdeContext): InvalidEventPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidStateException
 */
const de_InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisParameters
 */
const de_KinesisParameters = (output: any, context: __SerdeContext): KinesisParameters => {
  return {
    PartitionKeyPath: __expectString(output.PartitionKeyPath),
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
 * deserializeAws_json1_1ListApiDestinationsResponse
 */
const de_ListApiDestinationsResponse = (output: any, context: __SerdeContext): ListApiDestinationsResponse => {
  return {
    ApiDestinations:
      output.ApiDestinations != null ? de_ApiDestinationResponseList(output.ApiDestinations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListArchivesResponse
 */
const de_ListArchivesResponse = (output: any, context: __SerdeContext): ListArchivesResponse => {
  return {
    Archives: output.Archives != null ? de_ArchiveResponseList(output.Archives, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListConnectionsResponse
 */
const de_ListConnectionsResponse = (output: any, context: __SerdeContext): ListConnectionsResponse => {
  return {
    Connections: output.Connections != null ? de_ConnectionResponseList(output.Connections, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEndpointsResponse
 */
const de_ListEndpointsResponse = (output: any, context: __SerdeContext): ListEndpointsResponse => {
  return {
    Endpoints: output.Endpoints != null ? de_EndpointList(output.Endpoints, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventBusesResponse
 */
const de_ListEventBusesResponse = (output: any, context: __SerdeContext): ListEventBusesResponse => {
  return {
    EventBuses: output.EventBuses != null ? de_EventBusList(output.EventBuses, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventSourcesResponse
 */
const de_ListEventSourcesResponse = (output: any, context: __SerdeContext): ListEventSourcesResponse => {
  return {
    EventSources: output.EventSources != null ? de_EventSourceList(output.EventSources, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPartnerEventSourceAccountsResponse
 */
const de_ListPartnerEventSourceAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourceAccountsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PartnerEventSourceAccounts:
      output.PartnerEventSourceAccounts != null
        ? de_PartnerEventSourceAccountList(output.PartnerEventSourceAccounts, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPartnerEventSourcesResponse
 */
const de_ListPartnerEventSourcesResponse = (output: any, context: __SerdeContext): ListPartnerEventSourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PartnerEventSources:
      output.PartnerEventSources != null ? de_PartnerEventSourceList(output.PartnerEventSources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListReplaysResponse
 */
const de_ListReplaysResponse = (output: any, context: __SerdeContext): ListReplaysResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Replays: output.Replays != null ? de_ReplayList(output.Replays, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRuleNamesByTargetResponse
 */
const de_ListRuleNamesByTargetResponse = (output: any, context: __SerdeContext): ListRuleNamesByTargetResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleNames: output.RuleNames != null ? de_RuleNameList(output.RuleNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRulesResponse
 */
const de_ListRulesResponse = (output: any, context: __SerdeContext): ListRulesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Rules: output.Rules != null ? de_RuleResponseList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTargetsByRuleResponse
 */
const de_ListTargetsByRuleResponse = (output: any, context: __SerdeContext): ListTargetsByRuleResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Targets: output.Targets != null ? de_TargetList(output.Targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ManagedRuleException
 */
const de_ManagedRuleException = (output: any, context: __SerdeContext): ManagedRuleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkConfiguration
 */
const de_NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration != null ? de_AwsVpcConfiguration(output.awsvpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OperationDisabledException
 */
const de_OperationDisabledException = (output: any, context: __SerdeContext): OperationDisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PartnerEventSource
 */
const de_PartnerEventSource = (output: any, context: __SerdeContext): PartnerEventSource => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1PartnerEventSourceAccount
 */
const de_PartnerEventSourceAccount = (output: any, context: __SerdeContext): PartnerEventSourceAccount => {
  return {
    Account: __expectString(output.Account),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1PartnerEventSourceAccountList
 */
const de_PartnerEventSourceAccountList = (output: any, context: __SerdeContext): PartnerEventSourceAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PartnerEventSourceAccount(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PartnerEventSourceList
 */
const de_PartnerEventSourceList = (output: any, context: __SerdeContext): PartnerEventSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PartnerEventSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PathParameterList
 */
const de_PathParameterList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PlacementConstraint
 */
const de_PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1PlacementConstraints
 */
const de_PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementConstraint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlacementStrategies
 */
const de_PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PlacementStrategy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PlacementStrategy
 */
const de_PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: __expectString(output.field),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1PolicyLengthExceededException
 */
const de_PolicyLengthExceededException = (output: any, context: __SerdeContext): PolicyLengthExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Primary
 */
const de_Primary = (output: any, context: __SerdeContext): Primary => {
  return {
    HealthCheck: __expectString(output.HealthCheck),
  } as any;
};

/**
 * deserializeAws_json1_1PutEventsResponse
 */
const de_PutEventsResponse = (output: any, context: __SerdeContext): PutEventsResponse => {
  return {
    Entries: output.Entries != null ? de_PutEventsResultEntryList(output.Entries, context) : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

/**
 * deserializeAws_json1_1PutEventsResultEntry
 */
const de_PutEventsResultEntry = (output: any, context: __SerdeContext): PutEventsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    EventId: __expectString(output.EventId),
  } as any;
};

/**
 * deserializeAws_json1_1PutEventsResultEntryList
 */
const de_PutEventsResultEntryList = (output: any, context: __SerdeContext): PutEventsResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PutEventsResultEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutPartnerEventsResponse
 */
const de_PutPartnerEventsResponse = (output: any, context: __SerdeContext): PutPartnerEventsResponse => {
  return {
    Entries: output.Entries != null ? de_PutPartnerEventsResultEntryList(output.Entries, context) : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

/**
 * deserializeAws_json1_1PutPartnerEventsResultEntry
 */
const de_PutPartnerEventsResultEntry = (output: any, context: __SerdeContext): PutPartnerEventsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    EventId: __expectString(output.EventId),
  } as any;
};

/**
 * deserializeAws_json1_1PutPartnerEventsResultEntryList
 */
const de_PutPartnerEventsResultEntryList = (output: any, context: __SerdeContext): PutPartnerEventsResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PutPartnerEventsResultEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PutRuleResponse
 */
const de_PutRuleResponse = (output: any, context: __SerdeContext): PutRuleResponse => {
  return {
    RuleArn: __expectString(output.RuleArn),
  } as any;
};

/**
 * deserializeAws_json1_1PutTargetsResponse
 */
const de_PutTargetsResponse = (output: any, context: __SerdeContext): PutTargetsResponse => {
  return {
    FailedEntries:
      output.FailedEntries != null ? de_PutTargetsResultEntryList(output.FailedEntries, context) : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

/**
 * deserializeAws_json1_1PutTargetsResultEntry
 */
const de_PutTargetsResultEntry = (output: any, context: __SerdeContext): PutTargetsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    TargetId: __expectString(output.TargetId),
  } as any;
};

/**
 * deserializeAws_json1_1PutTargetsResultEntryList
 */
const de_PutTargetsResultEntryList = (output: any, context: __SerdeContext): PutTargetsResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PutTargetsResultEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1QueryStringParametersMap
 */
const de_QueryStringParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1RedshiftDataParameters
 */
const de_RedshiftDataParameters = (output: any, context: __SerdeContext): RedshiftDataParameters => {
  return {
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    Sql: __expectString(output.Sql),
    StatementName: __expectString(output.StatementName),
    WithEvent: __expectBoolean(output.WithEvent),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveTargetsResponse
 */
const de_RemoveTargetsResponse = (output: any, context: __SerdeContext): RemoveTargetsResponse => {
  return {
    FailedEntries:
      output.FailedEntries != null ? de_RemoveTargetsResultEntryList(output.FailedEntries, context) : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveTargetsResultEntry
 */
const de_RemoveTargetsResultEntry = (output: any, context: __SerdeContext): RemoveTargetsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    TargetId: __expectString(output.TargetId),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveTargetsResultEntryList
 */
const de_RemoveTargetsResultEntryList = (output: any, context: __SerdeContext): RemoveTargetsResultEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemoveTargetsResultEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Replay
 */
const de_Replay = (output: any, context: __SerdeContext): Replay => {
  return {
    EventEndTime:
      output.EventEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventEndTime)))
        : undefined,
    EventLastReplayedTime:
      output.EventLastReplayedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventLastReplayedTime)))
        : undefined,
    EventSourceArn: __expectString(output.EventSourceArn),
    EventStartTime:
      output.EventStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventStartTime)))
        : undefined,
    ReplayEndTime:
      output.ReplayEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayEndTime)))
        : undefined,
    ReplayName: __expectString(output.ReplayName),
    ReplayStartTime:
      output.ReplayStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayStartTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1ReplayDestination
 */
const de_ReplayDestination = (output: any, context: __SerdeContext): ReplayDestination => {
  return {
    Arn: __expectString(output.Arn),
    FilterArns: output.FilterArns != null ? de_ReplayDestinationFilters(output.FilterArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplayDestinationFilters
 */
const de_ReplayDestinationFilters = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ReplayList
 */
const de_ReplayList = (output: any, context: __SerdeContext): Replay[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Replay(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationConfig
 */
const de_ReplicationConfig = (output: any, context: __SerdeContext): ReplicationConfig => {
  return {
    State: __expectString(output.State),
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
 * deserializeAws_json1_1RetryPolicy
 */
const de_RetryPolicy = (output: any, context: __SerdeContext): RetryPolicy => {
  return {
    MaximumEventAgeInSeconds: __expectInt32(output.MaximumEventAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
  } as any;
};

/**
 * deserializeAws_json1_1RoutingConfig
 */
const de_RoutingConfig = (output: any, context: __SerdeContext): RoutingConfig => {
  return {
    FailoverConfig: output.FailoverConfig != null ? de_FailoverConfig(output.FailoverConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    EventBusName: __expectString(output.EventBusName),
    EventPattern: __expectString(output.EventPattern),
    ManagedBy: __expectString(output.ManagedBy),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
    ScheduleExpression: __expectString(output.ScheduleExpression),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1RuleNameList
 */
const de_RuleNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1RuleResponseList
 */
const de_RuleResponseList = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Rule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RunCommandParameters
 */
const de_RunCommandParameters = (output: any, context: __SerdeContext): RunCommandParameters => {
  return {
    RunCommandTargets:
      output.RunCommandTargets != null ? de_RunCommandTargets(output.RunCommandTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RunCommandTarget
 */
const de_RunCommandTarget = (output: any, context: __SerdeContext): RunCommandTarget => {
  return {
    Key: __expectString(output.Key),
    Values: output.Values != null ? de_RunCommandTargetValues(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RunCommandTargets
 */
const de_RunCommandTargets = (output: any, context: __SerdeContext): RunCommandTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RunCommandTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RunCommandTargetValues
 */
const de_RunCommandTargetValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1SageMakerPipelineParameter
 */
const de_SageMakerPipelineParameter = (output: any, context: __SerdeContext): SageMakerPipelineParameter => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1SageMakerPipelineParameterList
 */
const de_SageMakerPipelineParameterList = (output: any, context: __SerdeContext): SageMakerPipelineParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SageMakerPipelineParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SageMakerPipelineParameters
 */
const de_SageMakerPipelineParameters = (output: any, context: __SerdeContext): SageMakerPipelineParameters => {
  return {
    PipelineParameterList:
      output.PipelineParameterList != null
        ? de_SageMakerPipelineParameterList(output.PipelineParameterList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Secondary
 */
const de_Secondary = (output: any, context: __SerdeContext): Secondary => {
  return {
    Route: __expectString(output.Route),
  } as any;
};

/**
 * deserializeAws_json1_1SqsParameters
 */
const de_SqsParameters = (output: any, context: __SerdeContext): SqsParameters => {
  return {
    MessageGroupId: __expectString(output.MessageGroupId),
  } as any;
};

/**
 * deserializeAws_json1_1StartReplayResponse
 */
const de_StartReplayResponse = (output: any, context: __SerdeContext): StartReplayResponse => {
  return {
    ReplayArn: __expectString(output.ReplayArn),
    ReplayStartTime:
      output.ReplayStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayStartTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Target
 */
const de_Target = (output: any, context: __SerdeContext): Target => {
  return {
    Arn: __expectString(output.Arn),
    BatchParameters: output.BatchParameters != null ? de_BatchParameters(output.BatchParameters, context) : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig != null ? de_DeadLetterConfig(output.DeadLetterConfig, context) : undefined,
    EcsParameters: output.EcsParameters != null ? de_EcsParameters(output.EcsParameters, context) : undefined,
    HttpParameters: output.HttpParameters != null ? de_HttpParameters(output.HttpParameters, context) : undefined,
    Id: __expectString(output.Id),
    Input: __expectString(output.Input),
    InputPath: __expectString(output.InputPath),
    InputTransformer:
      output.InputTransformer != null ? de_InputTransformer(output.InputTransformer, context) : undefined,
    KinesisParameters:
      output.KinesisParameters != null ? de_KinesisParameters(output.KinesisParameters, context) : undefined,
    RedshiftDataParameters:
      output.RedshiftDataParameters != null
        ? de_RedshiftDataParameters(output.RedshiftDataParameters, context)
        : undefined,
    RetryPolicy: output.RetryPolicy != null ? de_RetryPolicy(output.RetryPolicy, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    RunCommandParameters:
      output.RunCommandParameters != null ? de_RunCommandParameters(output.RunCommandParameters, context) : undefined,
    SageMakerPipelineParameters:
      output.SageMakerPipelineParameters != null
        ? de_SageMakerPipelineParameters(output.SageMakerPipelineParameters, context)
        : undefined,
    SqsParameters: output.SqsParameters != null ? de_SqsParameters(output.SqsParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TargetList
 */
const de_TargetList = (output: any, context: __SerdeContext): Target[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Target(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestEventPatternResponse
 */
const de_TestEventPatternResponse = (output: any, context: __SerdeContext): TestEventPatternResponse => {
  return {
    Result: __expectBoolean(output.Result),
  } as any;
};

/**
 * deserializeAws_json1_1TransformerPaths
 */
const de_TransformerPaths = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateApiDestinationResponse
 */
const de_UpdateApiDestinationResponse = (output: any, context: __SerdeContext): UpdateApiDestinationResponse => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateArchiveResponse
 */
const de_UpdateArchiveResponse = (output: any, context: __SerdeContext): UpdateArchiveResponse => {
  return {
    ArchiveArn: __expectString(output.ArchiveArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateConnectionResponse
 */
const de_UpdateConnectionResponse = (output: any, context: __SerdeContext): UpdateConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointResponse
 */
const de_UpdateEndpointResponse = (output: any, context: __SerdeContext): UpdateEndpointResponse => {
  return {
    Arn: __expectString(output.Arn),
    EndpointId: __expectString(output.EndpointId),
    EndpointUrl: __expectString(output.EndpointUrl),
    EventBuses: output.EventBuses != null ? de_EndpointEventBusList(output.EventBuses, context) : undefined,
    Name: __expectString(output.Name),
    ReplicationConfig:
      output.ReplicationConfig != null ? de_ReplicationConfig(output.ReplicationConfig, context) : undefined,
    RoleArn: __expectString(output.RoleArn),
    RoutingConfig: output.RoutingConfig != null ? de_RoutingConfig(output.RoutingConfig, context) : undefined,
    State: __expectString(output.State),
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
