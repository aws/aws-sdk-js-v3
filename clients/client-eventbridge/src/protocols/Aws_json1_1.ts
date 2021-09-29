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
  DeleteEventBusRequest,
  DeletePartnerEventSourceRequest,
  DeleteRuleRequest,
  DescribeApiDestinationRequest,
  DescribeApiDestinationResponse,
  DescribeArchiveRequest,
  DescribeArchiveResponse,
  DescribeConnectionRequest,
  DescribeConnectionResponse,
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
  EventBus,
  EventSource,
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
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  RetryPolicy,
  Rule,
  RunCommandParameters,
  RunCommandTarget,
  SageMakerPipelineParameter,
  SageMakerPipelineParameters,
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
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1ActivateEventSourceCommand = async (
  input: ActivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ActivateEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ActivateEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelReplayCommand = async (
  input: CancelReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CancelReplay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApiDestinationCommand = async (
  input: CreateApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateApiDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateArchiveCommand = async (
  input: CreateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventBusCommand = async (
  input: CreateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreateEventBus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartnerEventSourceCommand = async (
  input: CreatePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.CreatePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeactivateEventSourceCommand = async (
  input: DeactivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeactivateEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeactivateEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeauthorizeConnectionCommand = async (
  input: DeauthorizeConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeauthorizeConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeauthorizeConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApiDestinationCommand = async (
  input: DeleteApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteApiDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventBusCommand = async (
  input: DeleteEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteEventBus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartnerEventSourceCommand = async (
  input: DeletePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeletePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DeleteRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApiDestinationCommand = async (
  input: DescribeApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeApiDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeArchiveCommand = async (
  input: DescribeArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeConnectionCommand = async (
  input: DescribeConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventBusCommand = async (
  input: DescribeEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeEventBus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventBusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventSourceCommand = async (
  input: DescribeEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePartnerEventSourceCommand = async (
  input: DescribePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribePartnerEventSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePartnerEventSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReplayCommand = async (
  input: DescribeReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeReplay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DescribeRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableRuleCommand = async (
  input: DisableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.DisableRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableRuleCommand = async (
  input: EnableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.EnableRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApiDestinationsCommand = async (
  input: ListApiDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListApiDestinations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApiDestinationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListArchivesCommand = async (
  input: ListArchivesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListArchives",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListArchivesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventBusesCommand = async (
  input: ListEventBusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListEventBuses",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventBusesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventSourcesCommand = async (
  input: ListEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListEventSources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (
  input: ListPartnerEventSourceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListPartnerEventSourceAccounts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourceAccountsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPartnerEventSourcesCommand = async (
  input: ListPartnerEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListPartnerEventSources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPartnerEventSourcesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListReplaysCommand = async (
  input: ListReplaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListReplays",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListReplaysRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRuleNamesByTargetCommand = async (
  input: ListRuleNamesByTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListRuleNamesByTarget",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRuleNamesByTargetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListRules",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTargetsByRuleCommand = async (
  input: ListTargetsByRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.ListTargetsByRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTargetsByRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPartnerEventsCommand = async (
  input: PutPartnerEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutPartnerEvents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPartnerEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPermissionCommand = async (
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutPermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRuleCommand = async (
  input: PutRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutRule",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutTargetsCommand = async (
  input: PutTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.PutTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.RemovePermission",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemovePermissionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTargetsCommand = async (
  input: RemoveTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.RemoveTargets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartReplayCommand = async (
  input: StartReplayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.StartReplay",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartReplayRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestEventPatternCommand = async (
  input: TestEventPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.TestEventPattern",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TestEventPatternRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApiDestinationCommand = async (
  input: UpdateApiDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateApiDestination",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApiDestinationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateArchiveCommand = async (
  input: UpdateArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateArchive",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateArchiveRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSEvents.UpdateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ActivateEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ActivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.eventbridge#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CancelReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelReplayResponse(data, context);
  const response: CancelReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IllegalStatusException":
    case "com.amazonaws.eventbridge#IllegalStatusException":
      response = {
        ...(await deserializeAws_json1_1IllegalStatusExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApiDestinationResponse(data, context);
  const response: CreateApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApiDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateArchiveResponse(data, context);
  const response: CreateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventBusResponse(data, context);
  const response: CreateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.eventbridge#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreatePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePartnerEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartnerEventSourceResponse(data, context);
  const response: CreatePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeactivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeactivateEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeactivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeactivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.eventbridge#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeauthorizeConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeauthorizeConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeauthorizeConnectionResponse(data, context);
  const response: DeauthorizeConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeauthorizeConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeauthorizeConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApiDestinationResponse(data, context);
  const response: DeleteApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApiDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteArchiveResponse(data, context);
  const response: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventBusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeletePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePartnerEventSourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApiDestinationResponse(data, context);
  const response: DescribeApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApiDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeArchiveResponse(data, context);
  const response: DescribeArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeConnectionResponse(data, context);
  const response: DescribeConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventBusResponse(data, context);
  const response: DescribeEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventSourceResponse(data, context);
  const response: DescribeEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePartnerEventSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePartnerEventSourceResponse(data, context);
  const response: DescribePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReplayResponse(data, context);
  const response: DescribeReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRuleResponse(data, context);
  const response: DescribeRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DisableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1EnableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListApiDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiDestinationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApiDestinationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApiDestinationsResponse(data, context);
  const response: ListApiDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApiDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApiDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListArchivesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListArchivesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListArchivesResponse(data, context);
  const response: ListArchivesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListArchivesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArchivesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListConnectionsResponse(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEventBusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventBusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventBusesResponse(data, context);
  const response: ListEventBusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventBusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventSourcesResponse(data, context);
  const response: ListEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourceAccountsResponse(data, context);
  const response: ListPartnerEventSourceAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListPartnerEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPartnerEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourcesResponse(data, context);
  const response: ListPartnerEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPartnerEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListReplaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListReplaysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListReplaysResponse(data, context);
  const response: ListReplaysCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListReplaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReplaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRuleNamesByTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRuleNamesByTargetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRuleNamesByTargetResponse(data, context);
  const response: ListRuleNamesByTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRuleNamesByTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTargetsByRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTargetsByRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetsByRuleResponse(data, context);
  const response: ListTargetsByRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTargetsByRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventsResponse(data, context);
  const response: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutPartnerEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPartnerEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPartnerEventsResponse(data, context);
  const response: PutPartnerEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPartnerEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.eventbridge#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1PolicyLengthExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRuleResponse(data, context);
  const response: PutRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1PutTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutTargetsResponse(data, context);
  const response: PutTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationDisabledException":
    case "com.amazonaws.eventbridge#OperationDisabledException":
      response = {
        ...(await deserializeAws_json1_1OperationDisabledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RemoveTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTargetsResponse(data, context);
  const response: RemoveTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartReplayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartReplayCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartReplayResponse(data, context);
  const response: StartReplayCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartReplayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReplayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.eventbridge#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TestEventPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TestEventPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestEventPatternResponse(data, context);
  const response: TestEventPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestEventPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.eventbridge#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateApiDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApiDestinationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApiDestinationResponse(data, context);
  const response: UpdateApiDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApiDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApiDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateArchiveCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateArchiveResponse(data, context);
  const response: UpdateArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.eventbridge#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateConnectionResponse(data, context);
  const response: UpdateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.eventbridge#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalException":
    case "com.amazonaws.eventbridge#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.eventbridge#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.eventbridge#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IllegalStatusExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalStatusException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalStatusException(body, context);
  const contents: IllegalStatusException = {
    name: "IllegalStatusException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(body, context);
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventPatternException(body, context);
  const contents: InvalidEventPatternException = {
    name: "InvalidEventPatternException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(body, context);
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ManagedRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ManagedRuleException(body, context);
  const contents: ManagedRuleException = {
    name: "ManagedRuleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationDisabledException(body, context);
  const contents: OperationDisabledException = {
    name: "OperationDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1PolicyLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyLengthExceededException(body, context);
  const contents: PolicyLengthExceededException = {
    name: "PolicyLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ActivateEventSourceRequest = (
  input: ActivateEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AwsVpcConfiguration = (input: AwsVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AssignPublicIp !== undefined &&
      input.AssignPublicIp !== null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        SecurityGroups: serializeAws_json1_1StringList(input.SecurityGroups, context),
      }),
    ...(input.Subnets !== undefined &&
      input.Subnets !== null && { Subnets: serializeAws_json1_1StringList(input.Subnets, context) }),
  };
};

const serializeAws_json1_1BatchArrayProperties = (input: BatchArrayProperties, context: __SerdeContext): any => {
  return {
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
  };
};

const serializeAws_json1_1BatchParameters = (input: BatchParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArrayProperties !== undefined &&
      input.ArrayProperties !== null && {
        ArrayProperties: serializeAws_json1_1BatchArrayProperties(input.ArrayProperties, context),
      }),
    ...(input.JobDefinition !== undefined && input.JobDefinition !== null && { JobDefinition: input.JobDefinition }),
    ...(input.JobName !== undefined && input.JobName !== null && { JobName: input.JobName }),
    ...(input.RetryStrategy !== undefined &&
      input.RetryStrategy !== null && {
        RetryStrategy: serializeAws_json1_1BatchRetryStrategy(input.RetryStrategy, context),
      }),
  };
};

const serializeAws_json1_1BatchRetryStrategy = (input: BatchRetryStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Attempts !== undefined && input.Attempts !== null && { Attempts: input.Attempts }),
  };
};

const serializeAws_json1_1CancelReplayRequest = (input: CancelReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
  };
};

const serializeAws_json1_1CapacityProviderStrategy = (
  input: CapacityProviderStrategyItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};

const serializeAws_json1_1CapacityProviderStrategyItem = (
  input: CapacityProviderStrategyItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.base !== undefined && input.base !== null && { base: input.base }),
    ...(input.capacityProvider !== undefined &&
      input.capacityProvider !== null && { capacityProvider: input.capacityProvider }),
    ...(input.weight !== undefined && input.weight !== null && { weight: input.weight }),
  };
};

const serializeAws_json1_1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ConnectionBodyParameter = (input: ConnectionBodyParameter, context: __SerdeContext): any => {
  return {
    ...(input.IsValueSecret !== undefined && input.IsValueSecret !== null && { IsValueSecret: input.IsValueSecret }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ConnectionBodyParametersList = (
  input: ConnectionBodyParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConnectionBodyParameter(entry, context);
    });
};

const serializeAws_json1_1ConnectionHeaderParameter = (
  input: ConnectionHeaderParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsValueSecret !== undefined && input.IsValueSecret !== null && { IsValueSecret: input.IsValueSecret }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ConnectionHeaderParametersList = (
  input: ConnectionHeaderParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConnectionHeaderParameter(entry, context);
    });
};

const serializeAws_json1_1ConnectionHttpParameters = (
  input: ConnectionHttpParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BodyParameters !== undefined &&
      input.BodyParameters !== null && {
        BodyParameters: serializeAws_json1_1ConnectionBodyParametersList(input.BodyParameters, context),
      }),
    ...(input.HeaderParameters !== undefined &&
      input.HeaderParameters !== null && {
        HeaderParameters: serializeAws_json1_1ConnectionHeaderParametersList(input.HeaderParameters, context),
      }),
    ...(input.QueryStringParameters !== undefined &&
      input.QueryStringParameters !== null && {
        QueryStringParameters: serializeAws_json1_1ConnectionQueryStringParametersList(
          input.QueryStringParameters,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ConnectionQueryStringParameter = (
  input: ConnectionQueryStringParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsValueSecret !== undefined && input.IsValueSecret !== null && { IsValueSecret: input.IsValueSecret }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ConnectionQueryStringParametersList = (
  input: ConnectionQueryStringParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ConnectionQueryStringParameter(entry, context);
    });
};

const serializeAws_json1_1CreateApiDestinationRequest = (
  input: CreateApiDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
    ...(input.InvocationEndpoint !== undefined &&
      input.InvocationEndpoint !== null && { InvocationEndpoint: input.InvocationEndpoint }),
    ...(input.InvocationRateLimitPerSecond !== undefined &&
      input.InvocationRateLimitPerSecond !== null && {
        InvocationRateLimitPerSecond: input.InvocationRateLimitPerSecond,
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateArchiveRequest = (input: CreateArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_json1_1CreateConnectionApiKeyAuthRequestParameters = (
  input: CreateConnectionApiKeyAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyName !== undefined && input.ApiKeyName !== null && { ApiKeyName: input.ApiKeyName }),
    ...(input.ApiKeyValue !== undefined && input.ApiKeyValue !== null && { ApiKeyValue: input.ApiKeyValue }),
  };
};

const serializeAws_json1_1CreateConnectionAuthRequestParameters = (
  input: CreateConnectionAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyAuthParameters !== undefined &&
      input.ApiKeyAuthParameters !== null && {
        ApiKeyAuthParameters: serializeAws_json1_1CreateConnectionApiKeyAuthRequestParameters(
          input.ApiKeyAuthParameters,
          context
        ),
      }),
    ...(input.BasicAuthParameters !== undefined &&
      input.BasicAuthParameters !== null && {
        BasicAuthParameters: serializeAws_json1_1CreateConnectionBasicAuthRequestParameters(
          input.BasicAuthParameters,
          context
        ),
      }),
    ...(input.InvocationHttpParameters !== undefined &&
      input.InvocationHttpParameters !== null && {
        InvocationHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.InvocationHttpParameters, context),
      }),
    ...(input.OAuthParameters !== undefined &&
      input.OAuthParameters !== null && {
        OAuthParameters: serializeAws_json1_1CreateConnectionOAuthRequestParameters(input.OAuthParameters, context),
      }),
  };
};

const serializeAws_json1_1CreateConnectionBasicAuthRequestParameters = (
  input: CreateConnectionBasicAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
  };
};

const serializeAws_json1_1CreateConnectionOAuthClientRequestParameters = (
  input: CreateConnectionOAuthClientRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID }),
    ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { ClientSecret: input.ClientSecret }),
  };
};

const serializeAws_json1_1CreateConnectionOAuthRequestParameters = (
  input: CreateConnectionOAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationEndpoint !== undefined &&
      input.AuthorizationEndpoint !== null && { AuthorizationEndpoint: input.AuthorizationEndpoint }),
    ...(input.ClientParameters !== undefined &&
      input.ClientParameters !== null && {
        ClientParameters: serializeAws_json1_1CreateConnectionOAuthClientRequestParameters(
          input.ClientParameters,
          context
        ),
      }),
    ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
    ...(input.OAuthHttpParameters !== undefined &&
      input.OAuthHttpParameters !== null && {
        OAuthHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.OAuthHttpParameters, context),
      }),
  };
};

const serializeAws_json1_1CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthParameters !== undefined &&
      input.AuthParameters !== null && {
        AuthParameters: serializeAws_json1_1CreateConnectionAuthRequestParameters(input.AuthParameters, context),
      }),
    ...(input.AuthorizationType !== undefined &&
      input.AuthorizationType !== null && { AuthorizationType: input.AuthorizationType }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1CreateEventBusRequest = (input: CreateEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceName !== undefined &&
      input.EventSourceName !== null && { EventSourceName: input.EventSourceName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePartnerEventSourceRequest = (
  input: CreatePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Account !== undefined && input.Account !== null && { Account: input.Account }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeactivateEventSourceRequest = (
  input: DeactivateEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeadLetterConfig = (input: DeadLetterConfig, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
  };
};

const serializeAws_json1_1DeauthorizeConnectionRequest = (
  input: DeauthorizeConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteApiDestinationRequest = (
  input: DeleteApiDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteArchiveRequest = (input: DeleteArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
  };
};

const serializeAws_json1_1DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteEventBusRequest = (input: DeleteEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeletePartnerEventSourceRequest = (
  input: DeletePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Account !== undefined && input.Account !== null && { Account: input.Account }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DeleteRuleRequest = (input: DeleteRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeApiDestinationRequest = (
  input: DescribeApiDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeArchiveRequest = (input: DescribeArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
  };
};

const serializeAws_json1_1DescribeConnectionRequest = (
  input: DescribeConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeEventBusRequest = (input: DescribeEventBusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeEventSourceRequest = (
  input: DescribeEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribePartnerEventSourceRequest = (
  input: DescribePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DescribeReplayRequest = (input: DescribeReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
  };
};

const serializeAws_json1_1DescribeRuleRequest = (input: DescribeRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1DisableRuleRequest = (input: DisableRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1EcsParameters = (input: EcsParameters, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviderStrategy !== undefined &&
      input.CapacityProviderStrategy !== null && {
        CapacityProviderStrategy: serializeAws_json1_1CapacityProviderStrategy(input.CapacityProviderStrategy, context),
      }),
    ...(input.EnableECSManagedTags !== undefined &&
      input.EnableECSManagedTags !== null && { EnableECSManagedTags: input.EnableECSManagedTags }),
    ...(input.EnableExecuteCommand !== undefined &&
      input.EnableExecuteCommand !== null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.Group !== undefined && input.Group !== null && { Group: input.Group }),
    ...(input.LaunchType !== undefined && input.LaunchType !== null && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration !== undefined &&
      input.NetworkConfiguration !== null && {
        NetworkConfiguration: serializeAws_json1_1NetworkConfiguration(input.NetworkConfiguration, context),
      }),
    ...(input.PlacementConstraints !== undefined &&
      input.PlacementConstraints !== null && {
        PlacementConstraints: serializeAws_json1_1PlacementConstraints(input.PlacementConstraints, context),
      }),
    ...(input.PlacementStrategy !== undefined &&
      input.PlacementStrategy !== null && {
        PlacementStrategy: serializeAws_json1_1PlacementStrategies(input.PlacementStrategy, context),
      }),
    ...(input.PlatformVersion !== undefined &&
      input.PlatformVersion !== null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags !== undefined && input.PropagateTags !== null && { PropagateTags: input.PropagateTags }),
    ...(input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.TaskCount !== undefined && input.TaskCount !== null && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn !== undefined &&
      input.TaskDefinitionArn !== null && { TaskDefinitionArn: input.TaskDefinitionArn }),
  };
};

const serializeAws_json1_1EnableRuleRequest = (input: EnableRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1EventResourceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1HeaderParametersMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1HttpParameters = (input: HttpParameters, context: __SerdeContext): any => {
  return {
    ...(input.HeaderParameters !== undefined &&
      input.HeaderParameters !== null && {
        HeaderParameters: serializeAws_json1_1HeaderParametersMap(input.HeaderParameters, context),
      }),
    ...(input.PathParameterValues !== undefined &&
      input.PathParameterValues !== null && {
        PathParameterValues: serializeAws_json1_1PathParameterList(input.PathParameterValues, context),
      }),
    ...(input.QueryStringParameters !== undefined &&
      input.QueryStringParameters !== null && {
        QueryStringParameters: serializeAws_json1_1QueryStringParametersMap(input.QueryStringParameters, context),
      }),
  };
};

const serializeAws_json1_1InputTransformer = (input: InputTransformer, context: __SerdeContext): any => {
  return {
    ...(input.InputPathsMap !== undefined &&
      input.InputPathsMap !== null && {
        InputPathsMap: serializeAws_json1_1TransformerPaths(input.InputPathsMap, context),
      }),
    ...(input.InputTemplate !== undefined && input.InputTemplate !== null && { InputTemplate: input.InputTemplate }),
  };
};

const serializeAws_json1_1KinesisParameters = (input: KinesisParameters, context: __SerdeContext): any => {
  return {
    ...(input.PartitionKeyPath !== undefined &&
      input.PartitionKeyPath !== null && { PartitionKeyPath: input.PartitionKeyPath }),
  };
};

const serializeAws_json1_1ListApiDestinationsRequest = (
  input: ListApiDestinationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListArchivesRequest = (input: ListArchivesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_json1_1ListConnectionsRequest = (input: ListConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionState !== undefined &&
      input.ConnectionState !== null && { ConnectionState: input.ConnectionState }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEventBusesRequest = (input: ListEventBusesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListEventSourcesRequest = (input: ListEventSourcesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPartnerEventSourceAccountsRequest = (
  input: ListPartnerEventSourceAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventSourceName !== undefined &&
      input.EventSourceName !== null && { EventSourceName: input.EventSourceName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPartnerEventSourcesRequest = (
  input: ListPartnerEventSourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListReplaysRequest = (input: ListReplaysRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
  };
};

const serializeAws_json1_1ListRuleNamesByTargetRequest = (
  input: ListRuleNamesByTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }),
  };
};

const serializeAws_json1_1ListRulesRequest = (input: ListRulesRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListTargetsByRuleRequest = (
  input: ListTargetsByRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
  };
};

const serializeAws_json1_1NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.awsvpcConfiguration !== undefined &&
      input.awsvpcConfiguration !== null && {
        awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(input.awsvpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1PathParameterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PlacementConstraint = (input: PlacementConstraint, context: __SerdeContext): any => {
  return {
    ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1PlacementConstraints = (input: PlacementConstraint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlacementConstraint(entry, context);
    });
};

const serializeAws_json1_1PlacementStrategies = (input: PlacementStrategy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PlacementStrategy(entry, context);
    });
};

const serializeAws_json1_1PlacementStrategy = (input: PlacementStrategy, context: __SerdeContext): any => {
  return {
    ...(input.field !== undefined && input.field !== null && { field: input.field }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1PutEventsRequest = (input: PutEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Entries !== undefined &&
      input.Entries !== null && { Entries: serializeAws_json1_1PutEventsRequestEntryList(input.Entries, context) }),
  };
};

const serializeAws_json1_1PutEventsRequestEntry = (input: PutEventsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Detail !== undefined && input.Detail !== null && { Detail: input.Detail }),
    ...(input.DetailType !== undefined && input.DetailType !== null && { DetailType: input.DetailType }),
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1EventResourceList(input.Resources, context) }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Time !== undefined && input.Time !== null && { Time: Math.round(input.Time.getTime() / 1000) }),
    ...(input.TraceHeader !== undefined && input.TraceHeader !== null && { TraceHeader: input.TraceHeader }),
  };
};

const serializeAws_json1_1PutEventsRequestEntryList = (
  input: PutEventsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PutEventsRequestEntry(entry, context);
    });
};

const serializeAws_json1_1PutPartnerEventsRequest = (input: PutPartnerEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_json1_1PutPartnerEventsRequestEntryList(input.Entries, context),
      }),
  };
};

const serializeAws_json1_1PutPartnerEventsRequestEntry = (
  input: PutPartnerEventsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Detail !== undefined && input.Detail !== null && { Detail: input.Detail }),
    ...(input.DetailType !== undefined && input.DetailType !== null && { DetailType: input.DetailType }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_json1_1EventResourceList(input.Resources, context) }),
    ...(input.Source !== undefined && input.Source !== null && { Source: input.Source }),
    ...(input.Time !== undefined && input.Time !== null && { Time: Math.round(input.Time.getTime() / 1000) }),
  };
};

const serializeAws_json1_1PutPartnerEventsRequestEntryList = (
  input: PutPartnerEventsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PutPartnerEventsRequestEntry(entry, context);
    });
};

const serializeAws_json1_1PutPermissionRequest = (input: PutPermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
    ...(input.Condition !== undefined &&
      input.Condition !== null && { Condition: serializeAws_json1_1Condition(input.Condition, context) }),
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
    ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
  };
};

const serializeAws_json1_1PutRuleRequest = (input: PutRuleRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.ScheduleExpression !== undefined &&
      input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.State !== undefined && input.State !== null && { State: input.State }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1PutTargetsRequest = (input: PutTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
    ...(input.Targets !== undefined &&
      input.Targets !== null && { Targets: serializeAws_json1_1TargetList(input.Targets, context) }),
  };
};

const serializeAws_json1_1QueryStringParametersMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1RedshiftDataParameters = (input: RedshiftDataParameters, context: __SerdeContext): any => {
  return {
    ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
    ...(input.DbUser !== undefined && input.DbUser !== null && { DbUser: input.DbUser }),
    ...(input.SecretManagerArn !== undefined &&
      input.SecretManagerArn !== null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.Sql !== undefined && input.Sql !== null && { Sql: input.Sql }),
    ...(input.StatementName !== undefined && input.StatementName !== null && { StatementName: input.StatementName }),
    ...(input.WithEvent !== undefined && input.WithEvent !== null && { WithEvent: input.WithEvent }),
  };
};

const serializeAws_json1_1RemovePermissionRequest = (input: RemovePermissionRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.RemoveAllPermissions !== undefined &&
      input.RemoveAllPermissions !== null && { RemoveAllPermissions: input.RemoveAllPermissions }),
    ...(input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId }),
  };
};

const serializeAws_json1_1RemoveTargetsRequest = (input: RemoveTargetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventBusName !== undefined && input.EventBusName !== null && { EventBusName: input.EventBusName }),
    ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
    ...(input.Ids !== undefined && input.Ids !== null && { Ids: serializeAws_json1_1TargetIdList(input.Ids, context) }),
    ...(input.Rule !== undefined && input.Rule !== null && { Rule: input.Rule }),
  };
};

const serializeAws_json1_1ReplayDestination = (input: ReplayDestination, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.FilterArns !== undefined &&
      input.FilterArns !== null && {
        FilterArns: serializeAws_json1_1ReplayDestinationFilters(input.FilterArns, context),
      }),
  };
};

const serializeAws_json1_1ReplayDestinationFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1RetryPolicy = (input: RetryPolicy, context: __SerdeContext): any => {
  return {
    ...(input.MaximumEventAgeInSeconds !== undefined &&
      input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds }),
    ...(input.MaximumRetryAttempts !== undefined &&
      input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts }),
  };
};

const serializeAws_json1_1RunCommandParameters = (input: RunCommandParameters, context: __SerdeContext): any => {
  return {
    ...(input.RunCommandTargets !== undefined &&
      input.RunCommandTargets !== null && {
        RunCommandTargets: serializeAws_json1_1RunCommandTargets(input.RunCommandTargets, context),
      }),
  };
};

const serializeAws_json1_1RunCommandTarget = (input: RunCommandTarget, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1RunCommandTargetValues(input.Values, context) }),
  };
};

const serializeAws_json1_1RunCommandTargets = (input: RunCommandTarget[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RunCommandTarget(entry, context);
    });
};

const serializeAws_json1_1RunCommandTargetValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SageMakerPipelineParameter = (
  input: SageMakerPipelineParameter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1SageMakerPipelineParameterList = (
  input: SageMakerPipelineParameter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SageMakerPipelineParameter(entry, context);
    });
};

const serializeAws_json1_1SageMakerPipelineParameters = (
  input: SageMakerPipelineParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.PipelineParameterList !== undefined &&
      input.PipelineParameterList !== null && {
        PipelineParameterList: serializeAws_json1_1SageMakerPipelineParameterList(input.PipelineParameterList, context),
      }),
  };
};

const serializeAws_json1_1SqsParameters = (input: SqsParameters, context: __SerdeContext): any => {
  return {
    ...(input.MessageGroupId !== undefined &&
      input.MessageGroupId !== null && { MessageGroupId: input.MessageGroupId }),
  };
};

const serializeAws_json1_1StartReplayRequest = (input: StartReplayRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Destination !== undefined &&
      input.Destination !== null && { Destination: serializeAws_json1_1ReplayDestination(input.Destination, context) }),
    ...(input.EventEndTime !== undefined &&
      input.EventEndTime !== null && { EventEndTime: Math.round(input.EventEndTime.getTime() / 1000) }),
    ...(input.EventSourceArn !== undefined &&
      input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn }),
    ...(input.EventStartTime !== undefined &&
      input.EventStartTime !== null && { EventStartTime: Math.round(input.EventStartTime.getTime() / 1000) }),
    ...(input.ReplayName !== undefined && input.ReplayName !== null && { ReplayName: input.ReplayName }),
  };
};

const serializeAws_json1_1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    ...(input.BatchParameters !== undefined &&
      input.BatchParameters !== null && {
        BatchParameters: serializeAws_json1_1BatchParameters(input.BatchParameters, context),
      }),
    ...(input.DeadLetterConfig !== undefined &&
      input.DeadLetterConfig !== null && {
        DeadLetterConfig: serializeAws_json1_1DeadLetterConfig(input.DeadLetterConfig, context),
      }),
    ...(input.EcsParameters !== undefined &&
      input.EcsParameters !== null && {
        EcsParameters: serializeAws_json1_1EcsParameters(input.EcsParameters, context),
      }),
    ...(input.HttpParameters !== undefined &&
      input.HttpParameters !== null && {
        HttpParameters: serializeAws_json1_1HttpParameters(input.HttpParameters, context),
      }),
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Input !== undefined && input.Input !== null && { Input: input.Input }),
    ...(input.InputPath !== undefined && input.InputPath !== null && { InputPath: input.InputPath }),
    ...(input.InputTransformer !== undefined &&
      input.InputTransformer !== null && {
        InputTransformer: serializeAws_json1_1InputTransformer(input.InputTransformer, context),
      }),
    ...(input.KinesisParameters !== undefined &&
      input.KinesisParameters !== null && {
        KinesisParameters: serializeAws_json1_1KinesisParameters(input.KinesisParameters, context),
      }),
    ...(input.RedshiftDataParameters !== undefined &&
      input.RedshiftDataParameters !== null && {
        RedshiftDataParameters: serializeAws_json1_1RedshiftDataParameters(input.RedshiftDataParameters, context),
      }),
    ...(input.RetryPolicy !== undefined &&
      input.RetryPolicy !== null && { RetryPolicy: serializeAws_json1_1RetryPolicy(input.RetryPolicy, context) }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.RunCommandParameters !== undefined &&
      input.RunCommandParameters !== null && {
        RunCommandParameters: serializeAws_json1_1RunCommandParameters(input.RunCommandParameters, context),
      }),
    ...(input.SageMakerPipelineParameters !== undefined &&
      input.SageMakerPipelineParameters !== null && {
        SageMakerPipelineParameters: serializeAws_json1_1SageMakerPipelineParameters(
          input.SageMakerPipelineParameters,
          context
        ),
      }),
    ...(input.SqsParameters !== undefined &&
      input.SqsParameters !== null && {
        SqsParameters: serializeAws_json1_1SqsParameters(input.SqsParameters, context),
      }),
  };
};

const serializeAws_json1_1TargetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TargetList = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Target(entry, context);
    });
};

const serializeAws_json1_1TestEventPatternRequest = (input: TestEventPatternRequest, context: __SerdeContext): any => {
  return {
    ...(input.Event !== undefined && input.Event !== null && { Event: input.Event }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
  };
};

const serializeAws_json1_1TransformerPaths = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApiDestinationRequest = (
  input: UpdateApiDestinationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionArn !== undefined && input.ConnectionArn !== null && { ConnectionArn: input.ConnectionArn }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
    ...(input.InvocationEndpoint !== undefined &&
      input.InvocationEndpoint !== null && { InvocationEndpoint: input.InvocationEndpoint }),
    ...(input.InvocationRateLimitPerSecond !== undefined &&
      input.InvocationRateLimitPerSecond !== null && {
        InvocationRateLimitPerSecond: input.InvocationRateLimitPerSecond,
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UpdateArchiveRequest = (input: UpdateArchiveRequest, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveName !== undefined && input.ArchiveName !== null && { ArchiveName: input.ArchiveName }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.EventPattern !== undefined && input.EventPattern !== null && { EventPattern: input.EventPattern }),
    ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_json1_1UpdateConnectionApiKeyAuthRequestParameters = (
  input: UpdateConnectionApiKeyAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyName !== undefined && input.ApiKeyName !== null && { ApiKeyName: input.ApiKeyName }),
    ...(input.ApiKeyValue !== undefined && input.ApiKeyValue !== null && { ApiKeyValue: input.ApiKeyValue }),
  };
};

const serializeAws_json1_1UpdateConnectionAuthRequestParameters = (
  input: UpdateConnectionAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeyAuthParameters !== undefined &&
      input.ApiKeyAuthParameters !== null && {
        ApiKeyAuthParameters: serializeAws_json1_1UpdateConnectionApiKeyAuthRequestParameters(
          input.ApiKeyAuthParameters,
          context
        ),
      }),
    ...(input.BasicAuthParameters !== undefined &&
      input.BasicAuthParameters !== null && {
        BasicAuthParameters: serializeAws_json1_1UpdateConnectionBasicAuthRequestParameters(
          input.BasicAuthParameters,
          context
        ),
      }),
    ...(input.InvocationHttpParameters !== undefined &&
      input.InvocationHttpParameters !== null && {
        InvocationHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.InvocationHttpParameters, context),
      }),
    ...(input.OAuthParameters !== undefined &&
      input.OAuthParameters !== null && {
        OAuthParameters: serializeAws_json1_1UpdateConnectionOAuthRequestParameters(input.OAuthParameters, context),
      }),
  };
};

const serializeAws_json1_1UpdateConnectionBasicAuthRequestParameters = (
  input: UpdateConnectionBasicAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
  };
};

const serializeAws_json1_1UpdateConnectionOAuthClientRequestParameters = (
  input: UpdateConnectionOAuthClientRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID }),
    ...(input.ClientSecret !== undefined && input.ClientSecret !== null && { ClientSecret: input.ClientSecret }),
  };
};

const serializeAws_json1_1UpdateConnectionOAuthRequestParameters = (
  input: UpdateConnectionOAuthRequestParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationEndpoint !== undefined &&
      input.AuthorizationEndpoint !== null && { AuthorizationEndpoint: input.AuthorizationEndpoint }),
    ...(input.ClientParameters !== undefined &&
      input.ClientParameters !== null && {
        ClientParameters: serializeAws_json1_1UpdateConnectionOAuthClientRequestParameters(
          input.ClientParameters,
          context
        ),
      }),
    ...(input.HttpMethod !== undefined && input.HttpMethod !== null && { HttpMethod: input.HttpMethod }),
    ...(input.OAuthHttpParameters !== undefined &&
      input.OAuthHttpParameters !== null && {
        OAuthHttpParameters: serializeAws_json1_1ConnectionHttpParameters(input.OAuthHttpParameters, context),
      }),
  };
};

const serializeAws_json1_1UpdateConnectionRequest = (input: UpdateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.AuthParameters !== undefined &&
      input.AuthParameters !== null && {
        AuthParameters: serializeAws_json1_1UpdateConnectionAuthRequestParameters(input.AuthParameters, context),
      }),
    ...(input.AuthorizationType !== undefined &&
      input.AuthorizationType !== null && { AuthorizationType: input.AuthorizationType }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const deserializeAws_json1_1ApiDestination = (output: any, context: __SerdeContext): ApiDestination => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    ConnectionArn: __expectString(output.ConnectionArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    HttpMethod: __expectString(output.HttpMethod),
    InvocationEndpoint: __expectString(output.InvocationEndpoint),
    InvocationRateLimitPerSecond: __expectInt32(output.InvocationRateLimitPerSecond),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1ApiDestinationResponseList = (output: any, context: __SerdeContext): ApiDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApiDestination(entry, context);
    });
};

const deserializeAws_json1_1Archive = (output: any, context: __SerdeContext): Archive => {
  return {
    ArchiveName: __expectString(output.ArchiveName),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
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

const deserializeAws_json1_1ArchiveResponseList = (output: any, context: __SerdeContext): Archive[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Archive(entry, context);
    });
};

const deserializeAws_json1_1AwsVpcConfiguration = (output: any, context: __SerdeContext): AwsVpcConfiguration => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_json1_1StringList(output.SecurityGroups, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_json1_1StringList(output.Subnets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchArrayProperties = (output: any, context: __SerdeContext): BatchArrayProperties => {
  return {
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_json1_1BatchParameters = (output: any, context: __SerdeContext): BatchParameters => {
  return {
    ArrayProperties:
      output.ArrayProperties !== undefined && output.ArrayProperties !== null
        ? deserializeAws_json1_1BatchArrayProperties(output.ArrayProperties, context)
        : undefined,
    JobDefinition: __expectString(output.JobDefinition),
    JobName: __expectString(output.JobName),
    RetryStrategy:
      output.RetryStrategy !== undefined && output.RetryStrategy !== null
        ? deserializeAws_json1_1BatchRetryStrategy(output.RetryStrategy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchRetryStrategy = (output: any, context: __SerdeContext): BatchRetryStrategy => {
  return {
    Attempts: __expectInt32(output.Attempts),
  } as any;
};

const deserializeAws_json1_1CancelReplayResponse = (output: any, context: __SerdeContext): CancelReplayResponse => {
  return {
    ReplayArn: __expectString(output.ReplayArn),
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1CapacityProviderStrategy = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CapacityProviderStrategyItem(entry, context);
    });
};

const deserializeAws_json1_1CapacityProviderStrategyItem = (
  output: any,
  context: __SerdeContext
): CapacityProviderStrategyItem => {
  return {
    base: __expectInt32(output.base),
    capacityProvider: __expectString(output.capacityProvider),
    weight: __expectInt32(output.weight),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    AuthorizationType: __expectString(output.AuthorizationType),
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1ConnectionApiKeyAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionApiKeyAuthResponseParameters => {
  return {
    ApiKeyName: __expectString(output.ApiKeyName),
  } as any;
};

const deserializeAws_json1_1ConnectionAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionAuthResponseParameters => {
  return {
    ApiKeyAuthParameters:
      output.ApiKeyAuthParameters !== undefined && output.ApiKeyAuthParameters !== null
        ? deserializeAws_json1_1ConnectionApiKeyAuthResponseParameters(output.ApiKeyAuthParameters, context)
        : undefined,
    BasicAuthParameters:
      output.BasicAuthParameters !== undefined && output.BasicAuthParameters !== null
        ? deserializeAws_json1_1ConnectionBasicAuthResponseParameters(output.BasicAuthParameters, context)
        : undefined,
    InvocationHttpParameters:
      output.InvocationHttpParameters !== undefined && output.InvocationHttpParameters !== null
        ? deserializeAws_json1_1ConnectionHttpParameters(output.InvocationHttpParameters, context)
        : undefined,
    OAuthParameters:
      output.OAuthParameters !== undefined && output.OAuthParameters !== null
        ? deserializeAws_json1_1ConnectionOAuthResponseParameters(output.OAuthParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionBasicAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionBasicAuthResponseParameters => {
  return {
    Username: __expectString(output.Username),
  } as any;
};

const deserializeAws_json1_1ConnectionBodyParameter = (
  output: any,
  context: __SerdeContext
): ConnectionBodyParameter => {
  return {
    IsValueSecret: __expectBoolean(output.IsValueSecret),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ConnectionBodyParametersList = (
  output: any,
  context: __SerdeContext
): ConnectionBodyParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionBodyParameter(entry, context);
    });
};

const deserializeAws_json1_1ConnectionHeaderParameter = (
  output: any,
  context: __SerdeContext
): ConnectionHeaderParameter => {
  return {
    IsValueSecret: __expectBoolean(output.IsValueSecret),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ConnectionHeaderParametersList = (
  output: any,
  context: __SerdeContext
): ConnectionHeaderParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionHeaderParameter(entry, context);
    });
};

const deserializeAws_json1_1ConnectionHttpParameters = (
  output: any,
  context: __SerdeContext
): ConnectionHttpParameters => {
  return {
    BodyParameters:
      output.BodyParameters !== undefined && output.BodyParameters !== null
        ? deserializeAws_json1_1ConnectionBodyParametersList(output.BodyParameters, context)
        : undefined,
    HeaderParameters:
      output.HeaderParameters !== undefined && output.HeaderParameters !== null
        ? deserializeAws_json1_1ConnectionHeaderParametersList(output.HeaderParameters, context)
        : undefined,
    QueryStringParameters:
      output.QueryStringParameters !== undefined && output.QueryStringParameters !== null
        ? deserializeAws_json1_1ConnectionQueryStringParametersList(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionOAuthClientResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionOAuthClientResponseParameters => {
  return {
    ClientID: __expectString(output.ClientID),
  } as any;
};

const deserializeAws_json1_1ConnectionOAuthResponseParameters = (
  output: any,
  context: __SerdeContext
): ConnectionOAuthResponseParameters => {
  return {
    AuthorizationEndpoint: __expectString(output.AuthorizationEndpoint),
    ClientParameters:
      output.ClientParameters !== undefined && output.ClientParameters !== null
        ? deserializeAws_json1_1ConnectionOAuthClientResponseParameters(output.ClientParameters, context)
        : undefined,
    HttpMethod: __expectString(output.HttpMethod),
    OAuthHttpParameters:
      output.OAuthHttpParameters !== undefined && output.OAuthHttpParameters !== null
        ? deserializeAws_json1_1ConnectionHttpParameters(output.OAuthHttpParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ConnectionQueryStringParameter = (
  output: any,
  context: __SerdeContext
): ConnectionQueryStringParameter => {
  return {
    IsValueSecret: __expectBoolean(output.IsValueSecret),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ConnectionQueryStringParametersList = (
  output: any,
  context: __SerdeContext
): ConnectionQueryStringParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ConnectionQueryStringParameter(entry, context);
    });
};

const deserializeAws_json1_1ConnectionResponseList = (output: any, context: __SerdeContext): Connection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Connection(entry, context);
    });
};

const deserializeAws_json1_1CreateApiDestinationResponse = (
  output: any,
  context: __SerdeContext
): CreateApiDestinationResponse => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateArchiveResponse = (output: any, context: __SerdeContext): CreateArchiveResponse => {
  return {
    ArchiveArn: __expectString(output.ArchiveArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1CreateConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateEventBusResponse = (output: any, context: __SerdeContext): CreateEventBusResponse => {
  return {
    EventBusArn: __expectString(output.EventBusArn),
  } as any;
};

const deserializeAws_json1_1CreatePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): CreatePartnerEventSourceResponse => {
  return {
    EventSourceArn: __expectString(output.EventSourceArn),
  } as any;
};

const deserializeAws_json1_1DeadLetterConfig = (output: any, context: __SerdeContext): DeadLetterConfig => {
  return {
    Arn: __expectString(output.Arn),
  } as any;
};

const deserializeAws_json1_1DeauthorizeConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeauthorizeConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteApiDestinationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApiDestinationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteArchiveResponse = (output: any, context: __SerdeContext): DeleteArchiveResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeApiDestinationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApiDestinationResponse => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    ConnectionArn: __expectString(output.ConnectionArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    HttpMethod: __expectString(output.HttpMethod),
    InvocationEndpoint: __expectString(output.InvocationEndpoint),
    InvocationRateLimitPerSecond: __expectInt32(output.InvocationRateLimitPerSecond),
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DescribeArchiveResponse = (
  output: any,
  context: __SerdeContext
): DescribeArchiveResponse => {
  return {
    ArchiveArn: __expectString(output.ArchiveArn),
    ArchiveName: __expectString(output.ArchiveName),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
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

const deserializeAws_json1_1DescribeConnectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeConnectionResponse => {
  return {
    AuthParameters:
      output.AuthParameters !== undefined && output.AuthParameters !== null
        ? deserializeAws_json1_1ConnectionAuthResponseParameters(output.AuthParameters, context)
        : undefined,
    AuthorizationType: __expectString(output.AuthorizationType),
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Description: __expectString(output.Description),
    LastAuthorizedTime:
      output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
    Name: __expectString(output.Name),
    SecretArn: __expectString(output.SecretArn),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1DescribeEventBusResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventBusResponse => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1DescribeEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventSourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    CreatedBy: __expectString(output.CreatedBy),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1DescribePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribePartnerEventSourceResponse => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1DescribeReplayResponse = (output: any, context: __SerdeContext): DescribeReplayResponse => {
  return {
    Description: __expectString(output.Description),
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1ReplayDestination(output.Destination, context)
        : undefined,
    EventEndTime:
      output.EventEndTime !== undefined && output.EventEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventEndTime)))
        : undefined,
    EventLastReplayedTime:
      output.EventLastReplayedTime !== undefined && output.EventLastReplayedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventLastReplayedTime)))
        : undefined,
    EventSourceArn: __expectString(output.EventSourceArn),
    EventStartTime:
      output.EventStartTime !== undefined && output.EventStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventStartTime)))
        : undefined,
    ReplayArn: __expectString(output.ReplayArn),
    ReplayEndTime:
      output.ReplayEndTime !== undefined && output.ReplayEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayEndTime)))
        : undefined,
    ReplayName: __expectString(output.ReplayName),
    ReplayStartTime:
      output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayStartTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1DescribeRuleResponse = (output: any, context: __SerdeContext): DescribeRuleResponse => {
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

const deserializeAws_json1_1EcsParameters = (output: any, context: __SerdeContext): EcsParameters => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy !== undefined && output.CapacityProviderStrategy !== null
        ? deserializeAws_json1_1CapacityProviderStrategy(output.CapacityProviderStrategy, context)
        : undefined,
    EnableECSManagedTags: __expectBoolean(output.EnableECSManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    Group: __expectString(output.Group),
    LaunchType: __expectString(output.LaunchType),
    NetworkConfiguration:
      output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(output.NetworkConfiguration, context)
        : undefined,
    PlacementConstraints:
      output.PlacementConstraints !== undefined && output.PlacementConstraints !== null
        ? deserializeAws_json1_1PlacementConstraints(output.PlacementConstraints, context)
        : undefined,
    PlacementStrategy:
      output.PlacementStrategy !== undefined && output.PlacementStrategy !== null
        ? deserializeAws_json1_1PlacementStrategies(output.PlacementStrategy, context)
        : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    ReferenceId: __expectString(output.ReferenceId),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
    TaskCount: __expectInt32(output.TaskCount),
    TaskDefinitionArn: __expectString(output.TaskDefinitionArn),
  } as any;
};

const deserializeAws_json1_1EventBus = (output: any, context: __SerdeContext): EventBus => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_json1_1EventBusList = (output: any, context: __SerdeContext): EventBus[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventBus(entry, context);
    });
};

const deserializeAws_json1_1EventSource = (output: any, context: __SerdeContext): EventSource => {
  return {
    Arn: __expectString(output.Arn),
    CreatedBy: __expectString(output.CreatedBy),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1EventSourceList = (output: any, context: __SerdeContext): EventSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventSource(entry, context);
    });
};

const deserializeAws_json1_1HeaderParametersMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1HttpParameters = (output: any, context: __SerdeContext): HttpParameters => {
  return {
    HeaderParameters:
      output.HeaderParameters !== undefined && output.HeaderParameters !== null
        ? deserializeAws_json1_1HeaderParametersMap(output.HeaderParameters, context)
        : undefined,
    PathParameterValues:
      output.PathParameterValues !== undefined && output.PathParameterValues !== null
        ? deserializeAws_json1_1PathParameterList(output.PathParameterValues, context)
        : undefined,
    QueryStringParameters:
      output.QueryStringParameters !== undefined && output.QueryStringParameters !== null
        ? deserializeAws_json1_1QueryStringParametersMap(output.QueryStringParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IllegalStatusException = (output: any, context: __SerdeContext): IllegalStatusException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InputTransformer = (output: any, context: __SerdeContext): InputTransformer => {
  return {
    InputPathsMap:
      output.InputPathsMap !== undefined && output.InputPathsMap !== null
        ? deserializeAws_json1_1TransformerPaths(output.InputPathsMap, context)
        : undefined,
    InputTemplate: __expectString(output.InputTemplate),
  } as any;
};

const deserializeAws_json1_1InternalException = (output: any, context: __SerdeContext): InternalException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidEventPatternException = (
  output: any,
  context: __SerdeContext
): InvalidEventPatternException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1KinesisParameters = (output: any, context: __SerdeContext): KinesisParameters => {
  return {
    PartitionKeyPath: __expectString(output.PartitionKeyPath),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListApiDestinationsResponse = (
  output: any,
  context: __SerdeContext
): ListApiDestinationsResponse => {
  return {
    ApiDestinations:
      output.ApiDestinations !== undefined && output.ApiDestinations !== null
        ? deserializeAws_json1_1ApiDestinationResponseList(output.ApiDestinations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListArchivesResponse = (output: any, context: __SerdeContext): ListArchivesResponse => {
  return {
    Archives:
      output.Archives !== undefined && output.Archives !== null
        ? deserializeAws_json1_1ArchiveResponseList(output.Archives, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListConnectionsResponse = (
  output: any,
  context: __SerdeContext
): ListConnectionsResponse => {
  return {
    Connections:
      output.Connections !== undefined && output.Connections !== null
        ? deserializeAws_json1_1ConnectionResponseList(output.Connections, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEventBusesResponse = (output: any, context: __SerdeContext): ListEventBusesResponse => {
  return {
    EventBuses:
      output.EventBuses !== undefined && output.EventBuses !== null
        ? deserializeAws_json1_1EventBusList(output.EventBuses, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListEventSourcesResponse => {
  return {
    EventSources:
      output.EventSources !== undefined && output.EventSources !== null
        ? deserializeAws_json1_1EventSourceList(output.EventSources, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourceAccountsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PartnerEventSourceAccounts:
      output.PartnerEventSourceAccounts !== undefined && output.PartnerEventSourceAccounts !== null
        ? deserializeAws_json1_1PartnerEventSourceAccountList(output.PartnerEventSourceAccounts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPartnerEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourcesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PartnerEventSources:
      output.PartnerEventSources !== undefined && output.PartnerEventSources !== null
        ? deserializeAws_json1_1PartnerEventSourceList(output.PartnerEventSources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListReplaysResponse = (output: any, context: __SerdeContext): ListReplaysResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Replays:
      output.Replays !== undefined && output.Replays !== null
        ? deserializeAws_json1_1ReplayList(output.Replays, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRuleNamesByTargetResponse = (
  output: any,
  context: __SerdeContext
): ListRuleNamesByTargetResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    RuleNames:
      output.RuleNames !== undefined && output.RuleNames !== null
        ? deserializeAws_json1_1RuleNameList(output.RuleNames, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRulesResponse = (output: any, context: __SerdeContext): ListRulesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleResponseList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTargetsByRuleResponse = (
  output: any,
  context: __SerdeContext
): ListTargetsByRuleResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Targets:
      output.Targets !== undefined && output.Targets !== null
        ? deserializeAws_json1_1TargetList(output.Targets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ManagedRuleException = (output: any, context: __SerdeContext): ManagedRuleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    awsvpcConfiguration:
      output.awsvpcConfiguration !== undefined && output.awsvpcConfiguration !== null
        ? deserializeAws_json1_1AwsVpcConfiguration(output.awsvpcConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OperationDisabledException = (
  output: any,
  context: __SerdeContext
): OperationDisabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PartnerEventSource = (output: any, context: __SerdeContext): PartnerEventSource => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1PartnerEventSourceAccount = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount => {
  return {
    Account: __expectString(output.Account),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationTime)))
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1PartnerEventSourceAccountList = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartnerEventSourceAccount(entry, context);
    });
};

const deserializeAws_json1_1PartnerEventSourceList = (output: any, context: __SerdeContext): PartnerEventSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PartnerEventSource(entry, context);
    });
};

const deserializeAws_json1_1PathParameterList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PlacementConstraint = (output: any, context: __SerdeContext): PlacementConstraint => {
  return {
    expression: __expectString(output.expression),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1PlacementConstraints = (output: any, context: __SerdeContext): PlacementConstraint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacementConstraint(entry, context);
    });
};

const deserializeAws_json1_1PlacementStrategies = (output: any, context: __SerdeContext): PlacementStrategy[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PlacementStrategy(entry, context);
    });
};

const deserializeAws_json1_1PlacementStrategy = (output: any, context: __SerdeContext): PlacementStrategy => {
  return {
    field: __expectString(output.field),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1PolicyLengthExceededException = (
  output: any,
  context: __SerdeContext
): PolicyLengthExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PutEventsResponse = (output: any, context: __SerdeContext): PutEventsResponse => {
  return {
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_json1_1PutEventsResultEntryList(output.Entries, context)
        : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

const deserializeAws_json1_1PutEventsResultEntry = (output: any, context: __SerdeContext): PutEventsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    EventId: __expectString(output.EventId),
  } as any;
};

const deserializeAws_json1_1PutEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutEventsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutEventsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1PutPartnerEventsResponse = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResponse => {
  return {
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_json1_1PutPartnerEventsResultEntryList(output.Entries, context)
        : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

const deserializeAws_json1_1PutPartnerEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    EventId: __expectString(output.EventId),
  } as any;
};

const deserializeAws_json1_1PutPartnerEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutPartnerEventsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1PutRuleResponse = (output: any, context: __SerdeContext): PutRuleResponse => {
  return {
    RuleArn: __expectString(output.RuleArn),
  } as any;
};

const deserializeAws_json1_1PutTargetsResponse = (output: any, context: __SerdeContext): PutTargetsResponse => {
  return {
    FailedEntries:
      output.FailedEntries !== undefined && output.FailedEntries !== null
        ? deserializeAws_json1_1PutTargetsResultEntryList(output.FailedEntries, context)
        : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

const deserializeAws_json1_1PutTargetsResultEntry = (output: any, context: __SerdeContext): PutTargetsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    TargetId: __expectString(output.TargetId),
  } as any;
};

const deserializeAws_json1_1PutTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutTargetsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PutTargetsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1QueryStringParametersMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1RedshiftDataParameters = (output: any, context: __SerdeContext): RedshiftDataParameters => {
  return {
    Database: __expectString(output.Database),
    DbUser: __expectString(output.DbUser),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    Sql: __expectString(output.Sql),
    StatementName: __expectString(output.StatementName),
    WithEvent: __expectBoolean(output.WithEvent),
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResponse = (output: any, context: __SerdeContext): RemoveTargetsResponse => {
  return {
    FailedEntries:
      output.FailedEntries !== undefined && output.FailedEntries !== null
        ? deserializeAws_json1_1RemoveTargetsResultEntryList(output.FailedEntries, context)
        : undefined,
    FailedEntryCount: __expectInt32(output.FailedEntryCount),
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResultEntry = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    TargetId: __expectString(output.TargetId),
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemoveTargetsResultEntry(entry, context);
    });
};

const deserializeAws_json1_1Replay = (output: any, context: __SerdeContext): Replay => {
  return {
    EventEndTime:
      output.EventEndTime !== undefined && output.EventEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventEndTime)))
        : undefined,
    EventLastReplayedTime:
      output.EventLastReplayedTime !== undefined && output.EventLastReplayedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventLastReplayedTime)))
        : undefined,
    EventSourceArn: __expectString(output.EventSourceArn),
    EventStartTime:
      output.EventStartTime !== undefined && output.EventStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventStartTime)))
        : undefined,
    ReplayEndTime:
      output.ReplayEndTime !== undefined && output.ReplayEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayEndTime)))
        : undefined,
    ReplayName: __expectString(output.ReplayName),
    ReplayStartTime:
      output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayStartTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1ReplayDestination = (output: any, context: __SerdeContext): ReplayDestination => {
  return {
    Arn: __expectString(output.Arn),
    FilterArns:
      output.FilterArns !== undefined && output.FilterArns !== null
        ? deserializeAws_json1_1ReplayDestinationFilters(output.FilterArns, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ReplayDestinationFilters = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ReplayList = (output: any, context: __SerdeContext): Replay[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Replay(entry, context);
    });
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

const deserializeAws_json1_1RetryPolicy = (output: any, context: __SerdeContext): RetryPolicy => {
  return {
    MaximumEventAgeInSeconds: __expectInt32(output.MaximumEventAgeInSeconds),
    MaximumRetryAttempts: __expectInt32(output.MaximumRetryAttempts),
  } as any;
};

const deserializeAws_json1_1Rule = (output: any, context: __SerdeContext): Rule => {
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

const deserializeAws_json1_1RuleNameList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1RuleResponseList = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Rule(entry, context);
    });
};

const deserializeAws_json1_1RunCommandParameters = (output: any, context: __SerdeContext): RunCommandParameters => {
  return {
    RunCommandTargets:
      output.RunCommandTargets !== undefined && output.RunCommandTargets !== null
        ? deserializeAws_json1_1RunCommandTargets(output.RunCommandTargets, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RunCommandTarget = (output: any, context: __SerdeContext): RunCommandTarget => {
  return {
    Key: __expectString(output.Key),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1RunCommandTargetValues(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RunCommandTargets = (output: any, context: __SerdeContext): RunCommandTarget[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RunCommandTarget(entry, context);
    });
};

const deserializeAws_json1_1RunCommandTargetValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1SageMakerPipelineParameter = (
  output: any,
  context: __SerdeContext
): SageMakerPipelineParameter => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1SageMakerPipelineParameterList = (
  output: any,
  context: __SerdeContext
): SageMakerPipelineParameter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SageMakerPipelineParameter(entry, context);
    });
};

const deserializeAws_json1_1SageMakerPipelineParameters = (
  output: any,
  context: __SerdeContext
): SageMakerPipelineParameters => {
  return {
    PipelineParameterList:
      output.PipelineParameterList !== undefined && output.PipelineParameterList !== null
        ? deserializeAws_json1_1SageMakerPipelineParameterList(output.PipelineParameterList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SqsParameters = (output: any, context: __SerdeContext): SqsParameters => {
  return {
    MessageGroupId: __expectString(output.MessageGroupId),
  } as any;
};

const deserializeAws_json1_1StartReplayResponse = (output: any, context: __SerdeContext): StartReplayResponse => {
  return {
    ReplayArn: __expectString(output.ReplayArn),
    ReplayStartTime:
      output.ReplayStartTime !== undefined && output.ReplayStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReplayStartTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Target = (output: any, context: __SerdeContext): Target => {
  return {
    Arn: __expectString(output.Arn),
    BatchParameters:
      output.BatchParameters !== undefined && output.BatchParameters !== null
        ? deserializeAws_json1_1BatchParameters(output.BatchParameters, context)
        : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_json1_1DeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    EcsParameters:
      output.EcsParameters !== undefined && output.EcsParameters !== null
        ? deserializeAws_json1_1EcsParameters(output.EcsParameters, context)
        : undefined,
    HttpParameters:
      output.HttpParameters !== undefined && output.HttpParameters !== null
        ? deserializeAws_json1_1HttpParameters(output.HttpParameters, context)
        : undefined,
    Id: __expectString(output.Id),
    Input: __expectString(output.Input),
    InputPath: __expectString(output.InputPath),
    InputTransformer:
      output.InputTransformer !== undefined && output.InputTransformer !== null
        ? deserializeAws_json1_1InputTransformer(output.InputTransformer, context)
        : undefined,
    KinesisParameters:
      output.KinesisParameters !== undefined && output.KinesisParameters !== null
        ? deserializeAws_json1_1KinesisParameters(output.KinesisParameters, context)
        : undefined,
    RedshiftDataParameters:
      output.RedshiftDataParameters !== undefined && output.RedshiftDataParameters !== null
        ? deserializeAws_json1_1RedshiftDataParameters(output.RedshiftDataParameters, context)
        : undefined,
    RetryPolicy:
      output.RetryPolicy !== undefined && output.RetryPolicy !== null
        ? deserializeAws_json1_1RetryPolicy(output.RetryPolicy, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    RunCommandParameters:
      output.RunCommandParameters !== undefined && output.RunCommandParameters !== null
        ? deserializeAws_json1_1RunCommandParameters(output.RunCommandParameters, context)
        : undefined,
    SageMakerPipelineParameters:
      output.SageMakerPipelineParameters !== undefined && output.SageMakerPipelineParameters !== null
        ? deserializeAws_json1_1SageMakerPipelineParameters(output.SageMakerPipelineParameters, context)
        : undefined,
    SqsParameters:
      output.SqsParameters !== undefined && output.SqsParameters !== null
        ? deserializeAws_json1_1SqsParameters(output.SqsParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TargetList = (output: any, context: __SerdeContext): Target[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Target(entry, context);
    });
};

const deserializeAws_json1_1TestEventPatternResponse = (
  output: any,
  context: __SerdeContext
): TestEventPatternResponse => {
  return {
    Result: __expectBoolean(output.Result),
  } as any;
};

const deserializeAws_json1_1TransformerPaths = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateApiDestinationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApiDestinationResponse => {
  return {
    ApiDestinationArn: __expectString(output.ApiDestinationArn),
    ApiDestinationState: __expectString(output.ApiDestinationState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateArchiveResponse = (output: any, context: __SerdeContext): UpdateArchiveResponse => {
  return {
    ArchiveArn: __expectString(output.ArchiveArn),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    State: __expectString(output.State),
    StateReason: __expectString(output.StateReason),
  } as any;
};

const deserializeAws_json1_1UpdateConnectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateConnectionResponse => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionState: __expectString(output.ConnectionState),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastAuthorizedTime:
      output.LastAuthorizedTime !== undefined && output.LastAuthorizedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAuthorizedTime)))
        : undefined,
    LastModifiedTime:
      output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedTime)))
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
