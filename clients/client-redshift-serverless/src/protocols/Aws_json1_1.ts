// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
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
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";

import {
  ConvertRecoveryPointToSnapshotCommandInput,
  ConvertRecoveryPointToSnapshotCommandOutput,
} from "../commands/ConvertRecoveryPointToSnapshotCommand";
import {
  CreateCustomDomainAssociationCommandInput,
  CreateCustomDomainAssociationCommandOutput,
} from "../commands/CreateCustomDomainAssociationCommand";
import {
  CreateEndpointAccessCommandInput,
  CreateEndpointAccessCommandOutput,
} from "../commands/CreateEndpointAccessCommand";
import { CreateNamespaceCommandInput, CreateNamespaceCommandOutput } from "../commands/CreateNamespaceCommand";
import { CreateReservationCommandInput, CreateReservationCommandOutput } from "../commands/CreateReservationCommand";
import {
  CreateScheduledActionCommandInput,
  CreateScheduledActionCommandOutput,
} from "../commands/CreateScheduledActionCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import {
  CreateSnapshotCopyConfigurationCommandInput,
  CreateSnapshotCopyConfigurationCommandOutput,
} from "../commands/CreateSnapshotCopyConfigurationCommand";
import { CreateUsageLimitCommandInput, CreateUsageLimitCommandOutput } from "../commands/CreateUsageLimitCommand";
import { CreateWorkgroupCommandInput, CreateWorkgroupCommandOutput } from "../commands/CreateWorkgroupCommand";
import {
  DeleteCustomDomainAssociationCommandInput,
  DeleteCustomDomainAssociationCommandOutput,
} from "../commands/DeleteCustomDomainAssociationCommand";
import {
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
} from "../commands/DeleteEndpointAccessCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteScheduledActionCommandInput,
  DeleteScheduledActionCommandOutput,
} from "../commands/DeleteScheduledActionCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import {
  DeleteSnapshotCopyConfigurationCommandInput,
  DeleteSnapshotCopyConfigurationCommandOutput,
} from "../commands/DeleteSnapshotCopyConfigurationCommand";
import { DeleteUsageLimitCommandInput, DeleteUsageLimitCommandOutput } from "../commands/DeleteUsageLimitCommand";
import { DeleteWorkgroupCommandInput, DeleteWorkgroupCommandOutput } from "../commands/DeleteWorkgroupCommand";
import { GetCredentialsCommandInput, GetCredentialsCommandOutput } from "../commands/GetCredentialsCommand";
import {
  GetCustomDomainAssociationCommandInput,
  GetCustomDomainAssociationCommandOutput,
} from "../commands/GetCustomDomainAssociationCommand";
import { GetEndpointAccessCommandInput, GetEndpointAccessCommandOutput } from "../commands/GetEndpointAccessCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "../commands/GetNamespaceCommand";
import { GetRecoveryPointCommandInput, GetRecoveryPointCommandOutput } from "../commands/GetRecoveryPointCommand";
import { GetReservationCommandInput, GetReservationCommandOutput } from "../commands/GetReservationCommand";
import {
  GetReservationOfferingCommandInput,
  GetReservationOfferingCommandOutput,
} from "../commands/GetReservationOfferingCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { GetScheduledActionCommandInput, GetScheduledActionCommandOutput } from "../commands/GetScheduledActionCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "../commands/GetSnapshotCommand";
import {
  GetTableRestoreStatusCommandInput,
  GetTableRestoreStatusCommandOutput,
} from "../commands/GetTableRestoreStatusCommand";
import { GetTrackCommandInput, GetTrackCommandOutput } from "../commands/GetTrackCommand";
import { GetUsageLimitCommandInput, GetUsageLimitCommandOutput } from "../commands/GetUsageLimitCommand";
import { GetWorkgroupCommandInput, GetWorkgroupCommandOutput } from "../commands/GetWorkgroupCommand";
import {
  ListCustomDomainAssociationsCommandInput,
  ListCustomDomainAssociationsCommandOutput,
} from "../commands/ListCustomDomainAssociationsCommand";
import { ListEndpointAccessCommandInput, ListEndpointAccessCommandOutput } from "../commands/ListEndpointAccessCommand";
import {
  ListManagedWorkgroupsCommandInput,
  ListManagedWorkgroupsCommandOutput,
} from "../commands/ListManagedWorkgroupsCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import { ListRecoveryPointsCommandInput, ListRecoveryPointsCommandOutput } from "../commands/ListRecoveryPointsCommand";
import {
  ListReservationOfferingsCommandInput,
  ListReservationOfferingsCommandOutput,
} from "../commands/ListReservationOfferingsCommand";
import { ListReservationsCommandInput, ListReservationsCommandOutput } from "../commands/ListReservationsCommand";
import {
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "../commands/ListScheduledActionsCommand";
import {
  ListSnapshotCopyConfigurationsCommandInput,
  ListSnapshotCopyConfigurationsCommandOutput,
} from "../commands/ListSnapshotCopyConfigurationsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "../commands/ListSnapshotsCommand";
import {
  ListTableRestoreStatusCommandInput,
  ListTableRestoreStatusCommandOutput,
} from "../commands/ListTableRestoreStatusCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTracksCommandInput, ListTracksCommandOutput } from "../commands/ListTracksCommand";
import { ListUsageLimitsCommandInput, ListUsageLimitsCommandOutput } from "../commands/ListUsageLimitsCommand";
import { ListWorkgroupsCommandInput, ListWorkgroupsCommandOutput } from "../commands/ListWorkgroupsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
} from "../commands/RestoreFromRecoveryPointCommand";
import {
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
} from "../commands/RestoreFromSnapshotCommand";
import {
  RestoreTableFromRecoveryPointCommandInput,
  RestoreTableFromRecoveryPointCommandOutput,
} from "../commands/RestoreTableFromRecoveryPointCommand";
import {
  RestoreTableFromSnapshotCommandInput,
  RestoreTableFromSnapshotCommandOutput,
} from "../commands/RestoreTableFromSnapshotCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCustomDomainAssociationCommandInput,
  UpdateCustomDomainAssociationCommandOutput,
} from "../commands/UpdateCustomDomainAssociationCommand";
import {
  UpdateEndpointAccessCommandInput,
  UpdateEndpointAccessCommandOutput,
} from "../commands/UpdateEndpointAccessCommand";
import { UpdateNamespaceCommandInput, UpdateNamespaceCommandOutput } from "../commands/UpdateNamespaceCommand";
import {
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "../commands/UpdateScheduledActionCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "../commands/UpdateSnapshotCommand";
import {
  UpdateSnapshotCopyConfigurationCommandInput,
  UpdateSnapshotCopyConfigurationCommandOutput,
} from "../commands/UpdateSnapshotCopyConfigurationCommand";
import { UpdateUsageLimitCommandInput, UpdateUsageLimitCommandOutput } from "../commands/UpdateUsageLimitCommand";
import { UpdateWorkgroupCommandInput, UpdateWorkgroupCommandOutput } from "../commands/UpdateWorkgroupCommand";
import {
  AccessDeniedException,
  Association,
  ConfigParameter,
  ConflictException,
  ConvertRecoveryPointToSnapshotRequest,
  ConvertRecoveryPointToSnapshotResponse,
  CreateCustomDomainAssociationRequest,
  CreateCustomDomainAssociationResponse,
  CreateEndpointAccessRequest,
  CreateEndpointAccessResponse,
  CreateNamespaceRequest,
  CreateNamespaceResponse,
  CreateReservationRequest,
  CreateReservationResponse,
  CreateScheduledActionRequest,
  CreateScheduledActionResponse,
  CreateSnapshotCopyConfigurationRequest,
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateSnapshotScheduleActionParameters,
  CreateUsageLimitRequest,
  CreateWorkgroupRequest,
  CreateWorkgroupResponse,
  DeleteCustomDomainAssociationRequest,
  DeleteEndpointAccessRequest,
  DeleteEndpointAccessResponse,
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteResourcePolicyRequest,
  DeleteScheduledActionRequest,
  DeleteScheduledActionResponse,
  DeleteSnapshotCopyConfigurationRequest,
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteUsageLimitRequest,
  DeleteWorkgroupRequest,
  DeleteWorkgroupResponse,
  EndpointAccess,
  GetCredentialsRequest,
  GetCredentialsResponse,
  GetCustomDomainAssociationRequest,
  GetCustomDomainAssociationResponse,
  GetEndpointAccessRequest,
  GetEndpointAccessResponse,
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetRecoveryPointRequest,
  GetRecoveryPointResponse,
  GetReservationOfferingRequest,
  GetReservationOfferingResponse,
  GetReservationRequest,
  GetReservationResponse,
  GetResourcePolicyRequest,
  GetScheduledActionRequest,
  GetScheduledActionResponse,
  GetSnapshotRequest,
  GetSnapshotResponse,
  GetTableRestoreStatusRequest,
  GetTableRestoreStatusResponse,
  GetTrackRequest,
  GetUsageLimitRequest,
  GetWorkgroupRequest,
  GetWorkgroupResponse,
  InsufficientCapacityException,
  InternalServerException,
  InvalidPaginationException,
  Ipv6CidrBlockNotFoundException,
  ListCustomDomainAssociationsRequest,
  ListCustomDomainAssociationsResponse,
  ListEndpointAccessRequest,
  ListEndpointAccessResponse,
  ListManagedWorkgroupsRequest,
  ListManagedWorkgroupsResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListRecoveryPointsRequest,
  ListRecoveryPointsResponse,
  ListReservationOfferingsRequest,
  ListReservationOfferingsResponse,
  ListReservationsRequest,
  ListReservationsResponse,
  ListScheduledActionsRequest,
  ListSnapshotCopyConfigurationsRequest,
  ListSnapshotsRequest,
  ListSnapshotsResponse,
  ListTableRestoreStatusRequest,
  ListTableRestoreStatusResponse,
  ListTagsForResourceRequest,
  ListTracksRequest,
  ListUsageLimitsRequest,
  ListWorkgroupsRequest,
  ListWorkgroupsResponse,
  LogExport,
  ManagedWorkgroupListItem,
  Namespace,
  PerformanceTarget,
  PutResourcePolicyRequest,
  RecoveryPoint,
  Reservation,
  ReservationOffering,
  ResourceNotFoundException,
  RestoreFromRecoveryPointRequest,
  RestoreFromRecoveryPointResponse,
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotResponse,
  RestoreTableFromRecoveryPointRequest,
  RestoreTableFromRecoveryPointResponse,
  RestoreTableFromSnapshotRequest,
  RestoreTableFromSnapshotResponse,
  Schedule,
  ScheduledActionResponse,
  ServiceQuotaExceededException,
  Snapshot,
  TableRestoreStatus,
  Tag,
  TagResourceRequest,
  TargetAction,
  ThrottlingException,
  TooManyTagsException,
  UntagResourceRequest,
  UpdateCustomDomainAssociationRequest,
  UpdateCustomDomainAssociationResponse,
  UpdateEndpointAccessRequest,
  UpdateEndpointAccessResponse,
  UpdateNamespaceRequest,
  UpdateNamespaceResponse,
  UpdateScheduledActionRequest,
  UpdateScheduledActionResponse,
  UpdateSnapshotCopyConfigurationRequest,
  UpdateSnapshotRequest,
  UpdateSnapshotResponse,
  UpdateUsageLimitRequest,
  UpdateWorkgroupRequest,
  UpdateWorkgroupResponse,
  ValidationException,
  Workgroup,
} from "../models/models_0";
import { RedshiftServerlessServiceException as __BaseException } from "../models/RedshiftServerlessServiceException";

/**
 * serializeAws_json1_1ConvertRecoveryPointToSnapshotCommand
 */
export const se_ConvertRecoveryPointToSnapshotCommand = async (
  input: ConvertRecoveryPointToSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConvertRecoveryPointToSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCustomDomainAssociationCommand
 */
export const se_CreateCustomDomainAssociationCommand = async (
  input: CreateCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCustomDomainAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointAccessCommand
 */
export const se_CreateEndpointAccessCommand = async (
  input: CreateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpointAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNamespaceCommand
 */
export const se_CreateNamespaceCommand = async (
  input: CreateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNamespace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReservationCommand
 */
export const se_CreateReservationCommand = async (
  input: CreateReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReservation");
  let body: any;
  body = JSON.stringify(se_CreateReservationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateScheduledActionCommand
 */
export const se_CreateScheduledActionCommand = async (
  input: CreateScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateScheduledAction");
  let body: any;
  body = JSON.stringify(se_CreateScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCopyConfigurationCommand
 */
export const se_CreateSnapshotCopyConfigurationCommand = async (
  input: CreateSnapshotCopyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshotCopyConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUsageLimitCommand
 */
export const se_CreateUsageLimitCommand = async (
  input: CreateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUsageLimit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkgroupCommand
 */
export const se_CreateWorkgroupCommand = async (
  input: CreateWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkgroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCustomDomainAssociationCommand
 */
export const se_DeleteCustomDomainAssociationCommand = async (
  input: DeleteCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCustomDomainAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointAccessCommand
 */
export const se_DeleteEndpointAccessCommand = async (
  input: DeleteEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpointAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNamespaceCommand
 */
export const se_DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNamespace");
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
 * serializeAws_json1_1DeleteScheduledActionCommand
 */
export const se_DeleteScheduledActionCommand = async (
  input: DeleteScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteScheduledAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotCommand
 */
export const se_DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotCopyConfigurationCommand
 */
export const se_DeleteSnapshotCopyConfigurationCommand = async (
  input: DeleteSnapshotCopyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSnapshotCopyConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUsageLimitCommand
 */
export const se_DeleteUsageLimitCommand = async (
  input: DeleteUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUsageLimit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkgroupCommand
 */
export const se_DeleteWorkgroupCommand = async (
  input: DeleteWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkgroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCredentialsCommand
 */
export const se_GetCredentialsCommand = async (
  input: GetCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCustomDomainAssociationCommand
 */
export const se_GetCustomDomainAssociationCommand = async (
  input: GetCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCustomDomainAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEndpointAccessCommand
 */
export const se_GetEndpointAccessCommand = async (
  input: GetEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEndpointAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNamespaceCommand
 */
export const se_GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNamespace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRecoveryPointCommand
 */
export const se_GetRecoveryPointCommand = async (
  input: GetRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRecoveryPoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReservationCommand
 */
export const se_GetReservationCommand = async (
  input: GetReservationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetReservation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReservationOfferingCommand
 */
export const se_GetReservationOfferingCommand = async (
  input: GetReservationOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetReservationOffering");
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
 * serializeAws_json1_1GetScheduledActionCommand
 */
export const se_GetScheduledActionCommand = async (
  input: GetScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetScheduledAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSnapshotCommand
 */
export const se_GetSnapshotCommand = async (
  input: GetSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTableRestoreStatusCommand
 */
export const se_GetTableRestoreStatusCommand = async (
  input: GetTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTableRestoreStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTrackCommand
 */
export const se_GetTrackCommand = async (
  input: GetTrackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTrack");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUsageLimitCommand
 */
export const se_GetUsageLimitCommand = async (
  input: GetUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUsageLimit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetWorkgroupCommand
 */
export const se_GetWorkgroupCommand = async (
  input: GetWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkgroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCustomDomainAssociationsCommand
 */
export const se_ListCustomDomainAssociationsCommand = async (
  input: ListCustomDomainAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCustomDomainAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointAccessCommand
 */
export const se_ListEndpointAccessCommand = async (
  input: ListEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpointAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListManagedWorkgroupsCommand
 */
export const se_ListManagedWorkgroupsCommand = async (
  input: ListManagedWorkgroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListManagedWorkgroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNamespacesCommand
 */
export const se_ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNamespaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRecoveryPointsCommand
 */
export const se_ListRecoveryPointsCommand = async (
  input: ListRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecoveryPoints");
  let body: any;
  body = JSON.stringify(se_ListRecoveryPointsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReservationOfferingsCommand
 */
export const se_ListReservationOfferingsCommand = async (
  input: ListReservationOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReservationOfferings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListReservationsCommand
 */
export const se_ListReservationsCommand = async (
  input: ListReservationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListReservations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListScheduledActionsCommand
 */
export const se_ListScheduledActionsCommand = async (
  input: ListScheduledActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListScheduledActions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSnapshotCopyConfigurationsCommand
 */
export const se_ListSnapshotCopyConfigurationsCommand = async (
  input: ListSnapshotCopyConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSnapshotCopyConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSnapshotsCommand
 */
export const se_ListSnapshotsCommand = async (
  input: ListSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSnapshots");
  let body: any;
  body = JSON.stringify(se_ListSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTableRestoreStatusCommand
 */
export const se_ListTableRestoreStatusCommand = async (
  input: ListTableRestoreStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTableRestoreStatus");
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
 * serializeAws_json1_1ListTracksCommand
 */
export const se_ListTracksCommand = async (
  input: ListTracksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTracks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsageLimitsCommand
 */
export const se_ListUsageLimitsCommand = async (
  input: ListUsageLimitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsageLimits");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkgroupsCommand
 */
export const se_ListWorkgroupsCommand = async (
  input: ListWorkgroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkgroups");
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
 * serializeAws_json1_1RestoreFromRecoveryPointCommand
 */
export const se_RestoreFromRecoveryPointCommand = async (
  input: RestoreFromRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreFromRecoveryPoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreFromSnapshotCommand
 */
export const se_RestoreFromSnapshotCommand = async (
  input: RestoreFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreFromSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreTableFromRecoveryPointCommand
 */
export const se_RestoreTableFromRecoveryPointCommand = async (
  input: RestoreTableFromRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTableFromRecoveryPoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreTableFromSnapshotCommand
 */
export const se_RestoreTableFromSnapshotCommand = async (
  input: RestoreTableFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreTableFromSnapshot");
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
 * serializeAws_json1_1UpdateCustomDomainAssociationCommand
 */
export const se_UpdateCustomDomainAssociationCommand = async (
  input: UpdateCustomDomainAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCustomDomainAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointAccessCommand
 */
export const se_UpdateEndpointAccessCommand = async (
  input: UpdateEndpointAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpointAccess");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNamespaceCommand
 */
export const se_UpdateNamespaceCommand = async (
  input: UpdateNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNamespace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateScheduledActionCommand
 */
export const se_UpdateScheduledActionCommand = async (
  input: UpdateScheduledActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateScheduledAction");
  let body: any;
  body = JSON.stringify(se_UpdateScheduledActionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSnapshotCommand
 */
export const se_UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSnapshotCopyConfigurationCommand
 */
export const se_UpdateSnapshotCopyConfigurationCommand = async (
  input: UpdateSnapshotCopyConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSnapshotCopyConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUsageLimitCommand
 */
export const se_UpdateUsageLimitCommand = async (
  input: UpdateUsageLimitCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUsageLimit");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkgroupCommand
 */
export const se_UpdateWorkgroupCommand = async (
  input: UpdateWorkgroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkgroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1ConvertRecoveryPointToSnapshotCommand
 */
export const de_ConvertRecoveryPointToSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConvertRecoveryPointToSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConvertRecoveryPointToSnapshotResponse(data, context);
  const response: ConvertRecoveryPointToSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCustomDomainAssociationCommand
 */
export const de_CreateCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCustomDomainAssociationResponse(data, context);
  const response: CreateCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointAccessCommand
 */
export const de_CreateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEndpointAccessResponse(data, context);
  const response: CreateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNamespaceCommand
 */
export const de_CreateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateNamespaceResponse(data, context);
  const response: CreateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateReservationCommand
 */
export const de_CreateReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReservationResponse(data, context);
  const response: CreateReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateScheduledActionCommand
 */
export const de_CreateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateScheduledActionResponse(data, context);
  const response: CreateScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotResponse(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSnapshotCopyConfigurationCommand
 */
export const de_CreateSnapshotCopyConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCopyConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSnapshotCopyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUsageLimitCommand
 */
export const de_CreateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkgroupCommand
 */
export const de_CreateWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWorkgroupResponse(data, context);
  const response: CreateWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCustomDomainAssociationCommand
 */
export const de_DeleteCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointAccessCommand
 */
export const de_DeleteEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEndpointAccessResponse(data, context);
  const response: DeleteEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNamespaceCommand
 */
export const de_DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
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
 * deserializeAws_json1_1DeleteScheduledActionCommand
 */
export const de_DeleteScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteScheduledActionResponse(data, context);
  const response: DeleteScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSnapshotCommand
 */
export const de_DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteSnapshotResponse(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSnapshotCopyConfigurationCommand
 */
export const de_DeleteSnapshotCopyConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCopyConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSnapshotCopyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUsageLimitCommand
 */
export const de_DeleteUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkgroupCommand
 */
export const de_DeleteWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteWorkgroupResponse(data, context);
  const response: DeleteWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCredentialsCommand
 */
export const de_GetCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCredentialsResponse(data, context);
  const response: GetCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCustomDomainAssociationCommand
 */
export const de_GetCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCustomDomainAssociationResponse(data, context);
  const response: GetCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetEndpointAccessCommand
 */
export const de_GetEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEndpointAccessResponse(data, context);
  const response: GetEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetNamespaceCommand
 */
export const de_GetNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNamespaceResponse(data, context);
  const response: GetNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRecoveryPointCommand
 */
export const de_GetRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRecoveryPointResponse(data, context);
  const response: GetRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetReservationCommand
 */
export const de_GetReservationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservationResponse(data, context);
  const response: GetReservationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetReservationOfferingCommand
 */
export const de_GetReservationOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReservationOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReservationOfferingResponse(data, context);
  const response: GetReservationOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1GetScheduledActionCommand
 */
export const de_GetScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetScheduledActionResponse(data, context);
  const response: GetScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSnapshotCommand
 */
export const de_GetSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSnapshotResponse(data, context);
  const response: GetSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTableRestoreStatusCommand
 */
export const de_GetTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTableRestoreStatusResponse(data, context);
  const response: GetTableRestoreStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTrackCommand
 */
export const de_GetTrackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTrackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUsageLimitCommand
 */
export const de_GetUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetWorkgroupCommand
 */
export const de_GetWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetWorkgroupResponse(data, context);
  const response: GetWorkgroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCustomDomainAssociationsCommand
 */
export const de_ListCustomDomainAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomDomainAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCustomDomainAssociationsResponse(data, context);
  const response: ListCustomDomainAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointAccessCommand
 */
export const de_ListEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointAccessResponse(data, context);
  const response: ListEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListManagedWorkgroupsCommand
 */
export const de_ListManagedWorkgroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedWorkgroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListManagedWorkgroupsResponse(data, context);
  const response: ListManagedWorkgroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListNamespacesCommand
 */
export const de_ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNamespacesResponse(data, context);
  const response: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRecoveryPointsCommand
 */
export const de_ListRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecoveryPointsResponse(data, context);
  const response: ListRecoveryPointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListReservationOfferingsCommand
 */
export const de_ListReservationOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReservationOfferingsResponse(data, context);
  const response: ListReservationOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListReservationsCommand
 */
export const de_ListReservationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReservationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListReservationsResponse(data, context);
  const response: ListReservationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListScheduledActionsCommand
 */
export const de_ListScheduledActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScheduledActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListScheduledActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSnapshotCopyConfigurationsCommand
 */
export const de_ListSnapshotCopyConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotCopyConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSnapshotCopyConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSnapshotsCommand
 */
export const de_ListSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSnapshotsResponse(data, context);
  const response: ListSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTableRestoreStatusCommand
 */
export const de_ListTableRestoreStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableRestoreStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTableRestoreStatusResponse(data, context);
  const response: ListTableRestoreStatusCommandOutput = {
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
 * deserializeAws_json1_1ListTracksCommand
 */
export const de_ListTracksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTracksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTracksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUsageLimitsCommand
 */
export const de_ListUsageLimitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsageLimitsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListUsageLimitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkgroupsCommand
 */
export const de_ListWorkgroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkgroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkgroupsResponse(data, context);
  const response: ListWorkgroupsCommandOutput = {
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
 * deserializeAws_json1_1RestoreFromRecoveryPointCommand
 */
export const de_RestoreFromRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreFromRecoveryPointResponse(data, context);
  const response: RestoreFromRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RestoreFromSnapshotCommand
 */
export const de_RestoreFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreFromSnapshotResponse(data, context);
  const response: RestoreFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RestoreTableFromRecoveryPointCommand
 */
export const de_RestoreTableFromRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromRecoveryPointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableFromRecoveryPointResponse(data, context);
  const response: RestoreTableFromRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RestoreTableFromSnapshotCommand
 */
export const de_RestoreTableFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreTableFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreTableFromSnapshotResponse(data, context);
  const response: RestoreTableFromSnapshotCommandOutput = {
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
 * deserializeAws_json1_1UpdateCustomDomainAssociationCommand
 */
export const de_UpdateCustomDomainAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCustomDomainAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCustomDomainAssociationResponse(data, context);
  const response: UpdateCustomDomainAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointAccessCommand
 */
export const de_UpdateEndpointAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointAccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEndpointAccessResponse(data, context);
  const response: UpdateEndpointAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNamespaceCommand
 */
export const de_UpdateNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateNamespaceResponse(data, context);
  const response: UpdateNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateScheduledActionCommand
 */
export const de_UpdateScheduledActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScheduledActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateScheduledActionResponse(data, context);
  const response: UpdateScheduledActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSnapshotCommand
 */
export const de_UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSnapshotResponse(data, context);
  const response: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSnapshotCopyConfigurationCommand
 */
export const de_UpdateSnapshotCopyConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCopyConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSnapshotCopyConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUsageLimitCommand
 */
export const de_UpdateUsageLimitCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUsageLimitCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUsageLimitCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkgroupCommand
 */
export const de_UpdateWorkgroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkgroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkgroupResponse(data, context);
  const response: UpdateWorkgroupCommandOutput = {
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
    case "ConflictException":
    case "com.amazonaws.redshiftserverless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.redshiftserverless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.redshiftserverless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.redshiftserverless#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.redshiftserverless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.redshiftserverless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.redshiftserverless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.redshiftserverless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "InsufficientCapacityException":
    case "com.amazonaws.redshiftserverless#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "Ipv6CidrBlockNotFoundException":
    case "com.amazonaws.redshiftserverless#Ipv6CidrBlockNotFoundException":
      throw await de_Ipv6CidrBlockNotFoundExceptionRes(parsedOutput, context);
    case "InvalidPaginationException":
    case "com.amazonaws.redshiftserverless#InvalidPaginationException":
      throw await de_InvalidPaginationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InsufficientCapacityExceptionRes
 */
const de_InsufficientCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPaginationExceptionRes
 */
const de_InvalidPaginationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPaginationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1Ipv6CidrBlockNotFoundExceptionRes
 */
const de_Ipv6CidrBlockNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<Ipv6CidrBlockNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new Ipv6CidrBlockNotFoundException({
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

// se_ConfigParameter omitted.

// se_ConfigParameterList omitted.

// se_ConvertRecoveryPointToSnapshotRequest omitted.

// se_CreateCustomDomainAssociationRequest omitted.

// se_CreateEndpointAccessRequest omitted.

// se_CreateNamespaceRequest omitted.

/**
 * serializeAws_json1_1CreateReservationRequest
 */
const se_CreateReservationRequest = (input: CreateReservationRequest, context: __SerdeContext): any => {
  return take(input, {
    capacity: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    offeringId: [],
  });
};

/**
 * serializeAws_json1_1CreateScheduledActionRequest
 */
const se_CreateScheduledActionRequest = (input: CreateScheduledActionRequest, context: __SerdeContext): any => {
  return take(input, {
    enabled: [],
    endTime: (_) => _.getTime() / 1_000,
    namespaceName: [],
    roleArn: [],
    schedule: (_) => se_Schedule(_, context),
    scheduledActionDescription: [],
    scheduledActionName: [],
    startTime: (_) => _.getTime() / 1_000,
    targetAction: _json,
  });
};

// se_CreateSnapshotCopyConfigurationRequest omitted.

// se_CreateSnapshotRequest omitted.

// se_CreateSnapshotScheduleActionParameters omitted.

// se_CreateUsageLimitRequest omitted.

// se_CreateWorkgroupRequest omitted.

// se_DeleteCustomDomainAssociationRequest omitted.

// se_DeleteEndpointAccessRequest omitted.

// se_DeleteNamespaceRequest omitted.

// se_DeleteResourcePolicyRequest omitted.

// se_DeleteScheduledActionRequest omitted.

// se_DeleteSnapshotCopyConfigurationRequest omitted.

// se_DeleteSnapshotRequest omitted.

// se_DeleteUsageLimitRequest omitted.

// se_DeleteWorkgroupRequest omitted.

// se_GetCredentialsRequest omitted.

// se_GetCustomDomainAssociationRequest omitted.

// se_GetEndpointAccessRequest omitted.

// se_GetNamespaceRequest omitted.

// se_GetRecoveryPointRequest omitted.

// se_GetReservationOfferingRequest omitted.

// se_GetReservationRequest omitted.

// se_GetResourcePolicyRequest omitted.

// se_GetScheduledActionRequest omitted.

// se_GetSnapshotRequest omitted.

// se_GetTableRestoreStatusRequest omitted.

// se_GetTrackRequest omitted.

// se_GetUsageLimitRequest omitted.

// se_GetWorkgroupRequest omitted.

// se_IamRoleArnList omitted.

// se_ListCustomDomainAssociationsRequest omitted.

// se_ListEndpointAccessRequest omitted.

// se_ListManagedWorkgroupsRequest omitted.

// se_ListNamespacesRequest omitted.

/**
 * serializeAws_json1_1ListRecoveryPointsRequest
 */
const se_ListRecoveryPointsRequest = (input: ListRecoveryPointsRequest, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => _.getTime() / 1_000,
    maxResults: [],
    namespaceArn: [],
    namespaceName: [],
    nextToken: [],
    startTime: (_) => _.getTime() / 1_000,
  });
};

// se_ListReservationOfferingsRequest omitted.

// se_ListReservationsRequest omitted.

// se_ListScheduledActionsRequest omitted.

// se_ListSnapshotCopyConfigurationsRequest omitted.

/**
 * serializeAws_json1_1ListSnapshotsRequest
 */
const se_ListSnapshotsRequest = (input: ListSnapshotsRequest, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => _.getTime() / 1_000,
    maxResults: [],
    namespaceArn: [],
    namespaceName: [],
    nextToken: [],
    ownerAccount: [],
    startTime: (_) => _.getTime() / 1_000,
  });
};

// se_ListTableRestoreStatusRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTracksRequest omitted.

// se_ListUsageLimitsRequest omitted.

// se_ListWorkgroupsRequest omitted.

// se_LogExportList omitted.

// se_PerformanceTarget omitted.

// se_PutResourcePolicyRequest omitted.

// se_RestoreFromRecoveryPointRequest omitted.

// se_RestoreFromSnapshotRequest omitted.

// se_RestoreTableFromRecoveryPointRequest omitted.

// se_RestoreTableFromSnapshotRequest omitted.

/**
 * serializeAws_json1_1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return Schedule.visit(input, {
    at: (value) => ({ at: value.getTime() / 1_000 }),
    cron: (value) => ({ cron: value }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_SecurityGroupIdList omitted.

// se_SubnetIdList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TargetAction omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCustomDomainAssociationRequest omitted.

// se_UpdateEndpointAccessRequest omitted.

// se_UpdateNamespaceRequest omitted.

/**
 * serializeAws_json1_1UpdateScheduledActionRequest
 */
const se_UpdateScheduledActionRequest = (input: UpdateScheduledActionRequest, context: __SerdeContext): any => {
  return take(input, {
    enabled: [],
    endTime: (_) => _.getTime() / 1_000,
    roleArn: [],
    schedule: (_) => se_Schedule(_, context),
    scheduledActionDescription: [],
    scheduledActionName: [],
    startTime: (_) => _.getTime() / 1_000,
    targetAction: _json,
  });
};

// se_UpdateSnapshotCopyConfigurationRequest omitted.

// se_UpdateSnapshotRequest omitted.

// se_UpdateUsageLimitRequest omitted.

// se_UpdateWorkgroupRequest omitted.

// se_VpcSecurityGroupIdList omitted.

// de_AccessDeniedException omitted.

// de_AccountIdList omitted.

/**
 * deserializeAws_json1_1Association
 */
const de_Association = (output: any, context: __SerdeContext): Association => {
  return take(output, {
    customDomainCertificateArn: __expectString,
    customDomainCertificateExpiryTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AssociationList
 */
const de_AssociationList = (output: any, context: __SerdeContext): Association[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Association(entry, context);
    });
  return retVal;
};

// de_ConfigParameter omitted.

// de_ConfigParameterList omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_1ConvertRecoveryPointToSnapshotResponse
 */
const de_ConvertRecoveryPointToSnapshotResponse = (
  output: any,
  context: __SerdeContext
): ConvertRecoveryPointToSnapshotResponse => {
  return take(output, {
    snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateCustomDomainAssociationResponse
 */
const de_CreateCustomDomainAssociationResponse = (
  output: any,
  context: __SerdeContext
): CreateCustomDomainAssociationResponse => {
  return take(output, {
    customDomainCertificateArn: __expectString,
    customDomainCertificateExpiryTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateEndpointAccessResponse
 */
const de_CreateEndpointAccessResponse = (output: any, context: __SerdeContext): CreateEndpointAccessResponse => {
  return take(output, {
    endpoint: (_: any) => de_EndpointAccess(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateNamespaceResponse
 */
const de_CreateNamespaceResponse = (output: any, context: __SerdeContext): CreateNamespaceResponse => {
  return take(output, {
    namespace: (_: any) => de_Namespace(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateReservationResponse
 */
const de_CreateReservationResponse = (output: any, context: __SerdeContext): CreateReservationResponse => {
  return take(output, {
    reservation: (_: any) => de_Reservation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateScheduledActionResponse
 */
const de_CreateScheduledActionResponse = (output: any, context: __SerdeContext): CreateScheduledActionResponse => {
  return take(output, {
    scheduledAction: (_: any) => de_ScheduledActionResponse(_, context),
  }) as any;
};

// de_CreateSnapshotCopyConfigurationResponse omitted.

/**
 * deserializeAws_json1_1CreateSnapshotResponse
 */
const de_CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return take(output, {
    snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

// de_CreateSnapshotScheduleActionParameters omitted.

// de_CreateUsageLimitResponse omitted.

/**
 * deserializeAws_json1_1CreateWorkgroupResponse
 */
const de_CreateWorkgroupResponse = (output: any, context: __SerdeContext): CreateWorkgroupResponse => {
  return take(output, {
    workgroup: (_: any) => de_Workgroup(_, context),
  }) as any;
};

// de_DeleteCustomDomainAssociationResponse omitted.

/**
 * deserializeAws_json1_1DeleteEndpointAccessResponse
 */
const de_DeleteEndpointAccessResponse = (output: any, context: __SerdeContext): DeleteEndpointAccessResponse => {
  return take(output, {
    endpoint: (_: any) => de_EndpointAccess(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeleteNamespaceResponse
 */
const de_DeleteNamespaceResponse = (output: any, context: __SerdeContext): DeleteNamespaceResponse => {
  return take(output, {
    namespace: (_: any) => de_Namespace(_, context),
  }) as any;
};

// de_DeleteResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_1DeleteScheduledActionResponse
 */
const de_DeleteScheduledActionResponse = (output: any, context: __SerdeContext): DeleteScheduledActionResponse => {
  return take(output, {
    scheduledAction: (_: any) => de_ScheduledActionResponse(_, context),
  }) as any;
};

// de_DeleteSnapshotCopyConfigurationResponse omitted.

/**
 * deserializeAws_json1_1DeleteSnapshotResponse
 */
const de_DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return take(output, {
    snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

// de_DeleteUsageLimitResponse omitted.

/**
 * deserializeAws_json1_1DeleteWorkgroupResponse
 */
const de_DeleteWorkgroupResponse = (output: any, context: __SerdeContext): DeleteWorkgroupResponse => {
  return take(output, {
    workgroup: (_: any) => de_Workgroup(_, context),
  }) as any;
};

// de_Endpoint omitted.

/**
 * deserializeAws_json1_1EndpointAccess
 */
const de_EndpointAccess = (output: any, context: __SerdeContext): EndpointAccess => {
  return take(output, {
    address: __expectString,
    endpointArn: __expectString,
    endpointCreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endpointName: __expectString,
    endpointStatus: __expectString,
    port: __expectInt32,
    subnetIds: _json,
    vpcEndpoint: _json,
    vpcSecurityGroups: _json,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointAccessList
 */
const de_EndpointAccessList = (output: any, context: __SerdeContext): EndpointAccess[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointAccess(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetCredentialsResponse
 */
const de_GetCredentialsResponse = (output: any, context: __SerdeContext): GetCredentialsResponse => {
  return take(output, {
    dbPassword: __expectString,
    dbUser: __expectString,
    expiration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nextRefreshTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1GetCustomDomainAssociationResponse
 */
const de_GetCustomDomainAssociationResponse = (
  output: any,
  context: __SerdeContext
): GetCustomDomainAssociationResponse => {
  return take(output, {
    customDomainCertificateArn: __expectString,
    customDomainCertificateExpiryTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetEndpointAccessResponse
 */
const de_GetEndpointAccessResponse = (output: any, context: __SerdeContext): GetEndpointAccessResponse => {
  return take(output, {
    endpoint: (_: any) => de_EndpointAccess(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetNamespaceResponse
 */
const de_GetNamespaceResponse = (output: any, context: __SerdeContext): GetNamespaceResponse => {
  return take(output, {
    namespace: (_: any) => de_Namespace(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRecoveryPointResponse
 */
const de_GetRecoveryPointResponse = (output: any, context: __SerdeContext): GetRecoveryPointResponse => {
  return take(output, {
    recoveryPoint: (_: any) => de_RecoveryPoint(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetReservationOfferingResponse
 */
const de_GetReservationOfferingResponse = (output: any, context: __SerdeContext): GetReservationOfferingResponse => {
  return take(output, {
    reservationOffering: (_: any) => de_ReservationOffering(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetReservationResponse
 */
const de_GetReservationResponse = (output: any, context: __SerdeContext): GetReservationResponse => {
  return take(output, {
    reservation: (_: any) => de_Reservation(_, context),
  }) as any;
};

// de_GetResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_1GetScheduledActionResponse
 */
const de_GetScheduledActionResponse = (output: any, context: __SerdeContext): GetScheduledActionResponse => {
  return take(output, {
    scheduledAction: (_: any) => de_ScheduledActionResponse(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSnapshotResponse
 */
const de_GetSnapshotResponse = (output: any, context: __SerdeContext): GetSnapshotResponse => {
  return take(output, {
    snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTableRestoreStatusResponse
 */
const de_GetTableRestoreStatusResponse = (output: any, context: __SerdeContext): GetTableRestoreStatusResponse => {
  return take(output, {
    tableRestoreStatus: (_: any) => de_TableRestoreStatus(_, context),
  }) as any;
};

// de_GetTrackResponse omitted.

// de_GetUsageLimitResponse omitted.

/**
 * deserializeAws_json1_1GetWorkgroupResponse
 */
const de_GetWorkgroupResponse = (output: any, context: __SerdeContext): GetWorkgroupResponse => {
  return take(output, {
    workgroup: (_: any) => de_Workgroup(_, context),
  }) as any;
};

// de_IamRoleArnList omitted.

// de_InsufficientCapacityException omitted.

// de_InternalServerException omitted.

// de_InvalidPaginationException omitted.

// de_Ipv6CidrBlockNotFoundException omitted.

/**
 * deserializeAws_json1_1ListCustomDomainAssociationsResponse
 */
const de_ListCustomDomainAssociationsResponse = (
  output: any,
  context: __SerdeContext
): ListCustomDomainAssociationsResponse => {
  return take(output, {
    associations: (_: any) => de_AssociationList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointAccessResponse
 */
const de_ListEndpointAccessResponse = (output: any, context: __SerdeContext): ListEndpointAccessResponse => {
  return take(output, {
    endpoints: (_: any) => de_EndpointAccessList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListManagedWorkgroupsResponse
 */
const de_ListManagedWorkgroupsResponse = (output: any, context: __SerdeContext): ListManagedWorkgroupsResponse => {
  return take(output, {
    managedWorkgroups: (_: any) => de_ManagedWorkgroups(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListNamespacesResponse
 */
const de_ListNamespacesResponse = (output: any, context: __SerdeContext): ListNamespacesResponse => {
  return take(output, {
    namespaces: (_: any) => de_NamespaceList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListRecoveryPointsResponse
 */
const de_ListRecoveryPointsResponse = (output: any, context: __SerdeContext): ListRecoveryPointsResponse => {
  return take(output, {
    nextToken: __expectString,
    recoveryPoints: (_: any) => de_RecoveryPointList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListReservationOfferingsResponse
 */
const de_ListReservationOfferingsResponse = (
  output: any,
  context: __SerdeContext
): ListReservationOfferingsResponse => {
  return take(output, {
    nextToken: __expectString,
    reservationOfferingsList: (_: any) => de_ReservationOfferingsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListReservationsResponse
 */
const de_ListReservationsResponse = (output: any, context: __SerdeContext): ListReservationsResponse => {
  return take(output, {
    nextToken: __expectString,
    reservationsList: (_: any) => de_ReservationsList(_, context),
  }) as any;
};

// de_ListScheduledActionsResponse omitted.

// de_ListSnapshotCopyConfigurationsResponse omitted.

/**
 * deserializeAws_json1_1ListSnapshotsResponse
 */
const de_ListSnapshotsResponse = (output: any, context: __SerdeContext): ListSnapshotsResponse => {
  return take(output, {
    nextToken: __expectString,
    snapshots: (_: any) => de_SnapshotList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTableRestoreStatusResponse
 */
const de_ListTableRestoreStatusResponse = (output: any, context: __SerdeContext): ListTableRestoreStatusResponse => {
  return take(output, {
    nextToken: __expectString,
    tableRestoreStatuses: (_: any) => de_TableRestoreStatusList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_ListTracksResponse omitted.

// de_ListUsageLimitsResponse omitted.

/**
 * deserializeAws_json1_1ListWorkgroupsResponse
 */
const de_ListWorkgroupsResponse = (output: any, context: __SerdeContext): ListWorkgroupsResponse => {
  return take(output, {
    nextToken: __expectString,
    workgroups: (_: any) => de_WorkgroupList(_, context),
  }) as any;
};

// de_LogExportList omitted.

/**
 * deserializeAws_json1_1ManagedWorkgroupListItem
 */
const de_ManagedWorkgroupListItem = (output: any, context: __SerdeContext): ManagedWorkgroupListItem => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    managedWorkgroupId: __expectString,
    managedWorkgroupName: __expectString,
    sourceArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ManagedWorkgroups
 */
const de_ManagedWorkgroups = (output: any, context: __SerdeContext): ManagedWorkgroupListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedWorkgroupListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Namespace
 */
const de_Namespace = (output: any, context: __SerdeContext): Namespace => {
  return take(output, {
    adminPasswordSecretArn: __expectString,
    adminPasswordSecretKmsKeyId: __expectString,
    adminUsername: __expectString,
    creationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dbName: __expectString,
    defaultIamRoleArn: __expectString,
    iamRoles: _json,
    kmsKeyId: __expectString,
    logExports: _json,
    namespaceArn: __expectString,
    namespaceId: __expectString,
    namespaceName: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NamespaceList
 */
const de_NamespaceList = (output: any, context: __SerdeContext): Namespace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Namespace(entry, context);
    });
  return retVal;
};

// de_NetworkInterface omitted.

// de_NetworkInterfaceList omitted.

/**
 * deserializeAws_json1_1NextInvocationsList
 */
const de_NextInvocationsList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

// de_PerformanceTarget omitted.

// de_PutResourcePolicyResponse omitted.

/**
 * deserializeAws_json1_1RecoveryPoint
 */
const de_RecoveryPoint = (output: any, context: __SerdeContext): RecoveryPoint => {
  return take(output, {
    namespaceArn: __expectString,
    namespaceName: __expectString,
    recoveryPointCreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    recoveryPointId: __expectString,
    totalSizeInMegaBytes: __limitedParseDouble,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecoveryPointList
 */
const de_RecoveryPointList = (output: any, context: __SerdeContext): RecoveryPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecoveryPoint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Reservation
 */
const de_Reservation = (output: any, context: __SerdeContext): Reservation => {
  return take(output, {
    capacity: __expectInt32,
    endDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    offering: (_: any) => de_ReservationOffering(_, context),
    reservationArn: __expectString,
    reservationId: __expectString,
    startDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ReservationOffering
 */
const de_ReservationOffering = (output: any, context: __SerdeContext): ReservationOffering => {
  return take(output, {
    currencyCode: __expectString,
    duration: __expectInt32,
    hourlyCharge: __limitedParseDouble,
    offeringId: __expectString,
    offeringType: __expectString,
    upfrontCharge: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1ReservationOfferingsList
 */
const de_ReservationOfferingsList = (output: any, context: __SerdeContext): ReservationOffering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReservationOffering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReservationsList
 */
const de_ReservationsList = (output: any, context: __SerdeContext): Reservation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Reservation(entry, context);
    });
  return retVal;
};

// de_ResourceNotFoundException omitted.

// de_ResourcePolicy omitted.

/**
 * deserializeAws_json1_1RestoreFromRecoveryPointResponse
 */
const de_RestoreFromRecoveryPointResponse = (
  output: any,
  context: __SerdeContext
): RestoreFromRecoveryPointResponse => {
  return take(output, {
    namespace: (_: any) => de_Namespace(_, context),
    recoveryPointId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RestoreFromSnapshotResponse
 */
const de_RestoreFromSnapshotResponse = (output: any, context: __SerdeContext): RestoreFromSnapshotResponse => {
  return take(output, {
    namespace: (_: any) => de_Namespace(_, context),
    ownerAccount: __expectString,
    snapshotName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RestoreTableFromRecoveryPointResponse
 */
const de_RestoreTableFromRecoveryPointResponse = (
  output: any,
  context: __SerdeContext
): RestoreTableFromRecoveryPointResponse => {
  return take(output, {
    tableRestoreStatus: (_: any) => de_TableRestoreStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1RestoreTableFromSnapshotResponse
 */
const de_RestoreTableFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreTableFromSnapshotResponse => {
  return take(output, {
    tableRestoreStatus: (_: any) => de_TableRestoreStatus(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  if (output.at != null) {
    return {
      at: __expectNonNull(__parseEpochTimestamp(__expectNumber(output.at))),
    };
  }
  if (__expectString(output.cron) !== undefined) {
    return { cron: __expectString(output.cron) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_ScheduledActionAssociation omitted.

/**
 * deserializeAws_json1_1ScheduledActionResponse
 */
const de_ScheduledActionResponse = (output: any, context: __SerdeContext): ScheduledActionResponse => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    namespaceName: __expectString,
    nextInvocations: (_: any) => de_NextInvocationsList(_, context),
    roleArn: __expectString,
    schedule: (_: any) => de_Schedule(__expectUnion(_), context),
    scheduledActionDescription: __expectString,
    scheduledActionName: __expectString,
    scheduledActionUuid: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: __expectString,
    targetAction: (_: any) => _json(__expectUnion(_)),
  }) as any;
};

// de_ScheduledActionsList omitted.

// de_SecurityGroupIdList omitted.

// de_ServerlessTrack omitted.

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return take(output, {
    accountsWithProvisionedRestoreAccess: _json,
    accountsWithRestoreAccess: _json,
    actualIncrementalBackupSizeInMegaBytes: __limitedParseDouble,
    adminPasswordSecretArn: __expectString,
    adminPasswordSecretKmsKeyId: __expectString,
    adminUsername: __expectString,
    backupProgressInMegaBytes: __limitedParseDouble,
    currentBackupRateInMegaBytesPerSecond: __limitedParseDouble,
    elapsedTimeInSeconds: __expectLong,
    estimatedSecondsToCompletion: __expectLong,
    kmsKeyId: __expectString,
    namespaceArn: __expectString,
    namespaceName: __expectString,
    ownerAccount: __expectString,
    snapshotArn: __expectString,
    snapshotCreateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    snapshotName: __expectString,
    snapshotRemainingDays: __expectInt32,
    snapshotRetentionPeriod: __expectInt32,
    snapshotRetentionStartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    totalBackupSizeInMegaBytes: __limitedParseDouble,
  }) as any;
};

// de_SnapshotCopyConfiguration omitted.

// de_SnapshotCopyConfigurations omitted.

/**
 * deserializeAws_json1_1SnapshotList
 */
const de_SnapshotList = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
  return retVal;
};

// de_SubnetIdList omitted.

/**
 * deserializeAws_json1_1TableRestoreStatus
 */
const de_TableRestoreStatus = (output: any, context: __SerdeContext): TableRestoreStatus => {
  return take(output, {
    message: __expectString,
    namespaceName: __expectString,
    newTableName: __expectString,
    progressInMegaBytes: __expectLong,
    recoveryPointId: __expectString,
    requestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    snapshotName: __expectString,
    sourceDatabaseName: __expectString,
    sourceSchemaName: __expectString,
    sourceTableName: __expectString,
    status: __expectString,
    tableRestoreRequestId: __expectString,
    targetDatabaseName: __expectString,
    targetSchemaName: __expectString,
    totalDataInMegaBytes: __expectLong,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TableRestoreStatusList
 */
const de_TableRestoreStatusList = (output: any, context: __SerdeContext): TableRestoreStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TableRestoreStatus(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TargetAction omitted.

// de_ThrottlingException omitted.

// de_TooManyTagsException omitted.

// de_TrackList omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateCustomDomainAssociationResponse
 */
const de_UpdateCustomDomainAssociationResponse = (
  output: any,
  context: __SerdeContext
): UpdateCustomDomainAssociationResponse => {
  return take(output, {
    customDomainCertificateArn: __expectString,
    customDomainCertificateExpiryTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    workgroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateEndpointAccessResponse
 */
const de_UpdateEndpointAccessResponse = (output: any, context: __SerdeContext): UpdateEndpointAccessResponse => {
  return take(output, {
    endpoint: (_: any) => de_EndpointAccess(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateNamespaceResponse
 */
const de_UpdateNamespaceResponse = (output: any, context: __SerdeContext): UpdateNamespaceResponse => {
  return take(output, {
    namespace: (_: any) => de_Namespace(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateScheduledActionResponse
 */
const de_UpdateScheduledActionResponse = (output: any, context: __SerdeContext): UpdateScheduledActionResponse => {
  return take(output, {
    scheduledAction: (_: any) => de_ScheduledActionResponse(_, context),
  }) as any;
};

// de_UpdateSnapshotCopyConfigurationResponse omitted.

/**
 * deserializeAws_json1_1UpdateSnapshotResponse
 */
const de_UpdateSnapshotResponse = (output: any, context: __SerdeContext): UpdateSnapshotResponse => {
  return take(output, {
    snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

// de_UpdateTarget omitted.

// de_UpdateTargetsList omitted.

// de_UpdateUsageLimitResponse omitted.

/**
 * deserializeAws_json1_1UpdateWorkgroupResponse
 */
const de_UpdateWorkgroupResponse = (output: any, context: __SerdeContext): UpdateWorkgroupResponse => {
  return take(output, {
    workgroup: (_: any) => de_Workgroup(_, context),
  }) as any;
};

// de_UsageLimit omitted.

// de_UsageLimits omitted.

// de_ValidationException omitted.

// de_VpcEndpoint omitted.

// de_VpcEndpointList omitted.

// de_VpcIds omitted.

// de_VpcSecurityGroupMembership omitted.

// de_VpcSecurityGroupMembershipList omitted.

/**
 * deserializeAws_json1_1Workgroup
 */
const de_Workgroup = (output: any, context: __SerdeContext): Workgroup => {
  return take(output, {
    baseCapacity: __expectInt32,
    configParameters: _json,
    creationDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    crossAccountVpcs: _json,
    customDomainCertificateArn: __expectString,
    customDomainCertificateExpiryTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    endpoint: _json,
    enhancedVpcRouting: __expectBoolean,
    ipAddressType: __expectString,
    maxCapacity: __expectInt32,
    namespaceName: __expectString,
    patchVersion: __expectString,
    pendingTrackName: __expectString,
    port: __expectInt32,
    pricePerformanceTarget: _json,
    publiclyAccessible: __expectBoolean,
    securityGroupIds: _json,
    status: __expectString,
    subnetIds: _json,
    trackName: __expectString,
    workgroupArn: __expectString,
    workgroupId: __expectString,
    workgroupName: __expectString,
    workgroupVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WorkgroupList
 */
const de_WorkgroupList = (output: any, context: __SerdeContext): Workgroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workgroup(entry, context);
    });
  return retVal;
};

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
    "x-amz-target": `RedshiftServerless.${operation}`,
  };
}
