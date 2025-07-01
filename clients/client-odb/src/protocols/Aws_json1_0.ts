// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AcceptMarketplaceRegistrationCommandInput,
  AcceptMarketplaceRegistrationCommandOutput,
} from "../commands/AcceptMarketplaceRegistrationCommand";
import {
  CreateCloudAutonomousVmClusterCommandInput,
  CreateCloudAutonomousVmClusterCommandOutput,
} from "../commands/CreateCloudAutonomousVmClusterCommand";
import {
  CreateCloudExadataInfrastructureCommandInput,
  CreateCloudExadataInfrastructureCommandOutput,
} from "../commands/CreateCloudExadataInfrastructureCommand";
import {
  CreateCloudVmClusterCommandInput,
  CreateCloudVmClusterCommandOutput,
} from "../commands/CreateCloudVmClusterCommand";
import { CreateOdbNetworkCommandInput, CreateOdbNetworkCommandOutput } from "../commands/CreateOdbNetworkCommand";
import {
  CreateOdbPeeringConnectionCommandInput,
  CreateOdbPeeringConnectionCommandOutput,
} from "../commands/CreateOdbPeeringConnectionCommand";
import {
  DeleteCloudAutonomousVmClusterCommandInput,
  DeleteCloudAutonomousVmClusterCommandOutput,
} from "../commands/DeleteCloudAutonomousVmClusterCommand";
import {
  DeleteCloudExadataInfrastructureCommandInput,
  DeleteCloudExadataInfrastructureCommandOutput,
} from "../commands/DeleteCloudExadataInfrastructureCommand";
import {
  DeleteCloudVmClusterCommandInput,
  DeleteCloudVmClusterCommandOutput,
} from "../commands/DeleteCloudVmClusterCommand";
import { DeleteOdbNetworkCommandInput, DeleteOdbNetworkCommandOutput } from "../commands/DeleteOdbNetworkCommand";
import {
  DeleteOdbPeeringConnectionCommandInput,
  DeleteOdbPeeringConnectionCommandOutput,
} from "../commands/DeleteOdbPeeringConnectionCommand";
import {
  GetCloudAutonomousVmClusterCommandInput,
  GetCloudAutonomousVmClusterCommandOutput,
} from "../commands/GetCloudAutonomousVmClusterCommand";
import {
  GetCloudExadataInfrastructureCommandInput,
  GetCloudExadataInfrastructureCommandOutput,
} from "../commands/GetCloudExadataInfrastructureCommand";
import {
  GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
  GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput,
} from "../commands/GetCloudExadataInfrastructureUnallocatedResourcesCommand";
import { GetCloudVmClusterCommandInput, GetCloudVmClusterCommandOutput } from "../commands/GetCloudVmClusterCommand";
import { GetDbNodeCommandInput, GetDbNodeCommandOutput } from "../commands/GetDbNodeCommand";
import { GetDbServerCommandInput, GetDbServerCommandOutput } from "../commands/GetDbServerCommand";
import {
  GetOciOnboardingStatusCommandInput,
  GetOciOnboardingStatusCommandOutput,
} from "../commands/GetOciOnboardingStatusCommand";
import { GetOdbNetworkCommandInput, GetOdbNetworkCommandOutput } from "../commands/GetOdbNetworkCommand";
import {
  GetOdbPeeringConnectionCommandInput,
  GetOdbPeeringConnectionCommandOutput,
} from "../commands/GetOdbPeeringConnectionCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "../commands/InitializeServiceCommand";
import {
  ListAutonomousVirtualMachinesCommandInput,
  ListAutonomousVirtualMachinesCommandOutput,
} from "../commands/ListAutonomousVirtualMachinesCommand";
import {
  ListCloudAutonomousVmClustersCommandInput,
  ListCloudAutonomousVmClustersCommandOutput,
} from "../commands/ListCloudAutonomousVmClustersCommand";
import {
  ListCloudExadataInfrastructuresCommandInput,
  ListCloudExadataInfrastructuresCommandOutput,
} from "../commands/ListCloudExadataInfrastructuresCommand";
import {
  ListCloudVmClustersCommandInput,
  ListCloudVmClustersCommandOutput,
} from "../commands/ListCloudVmClustersCommand";
import { ListDbNodesCommandInput, ListDbNodesCommandOutput } from "../commands/ListDbNodesCommand";
import { ListDbServersCommandInput, ListDbServersCommandOutput } from "../commands/ListDbServersCommand";
import { ListDbSystemShapesCommandInput, ListDbSystemShapesCommandOutput } from "../commands/ListDbSystemShapesCommand";
import { ListGiVersionsCommandInput, ListGiVersionsCommandOutput } from "../commands/ListGiVersionsCommand";
import { ListOdbNetworksCommandInput, ListOdbNetworksCommandOutput } from "../commands/ListOdbNetworksCommand";
import {
  ListOdbPeeringConnectionsCommandInput,
  ListOdbPeeringConnectionsCommandOutput,
} from "../commands/ListOdbPeeringConnectionsCommand";
import { ListSystemVersionsCommandInput, ListSystemVersionsCommandOutput } from "../commands/ListSystemVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RebootDbNodeCommandInput, RebootDbNodeCommandOutput } from "../commands/RebootDbNodeCommand";
import { StartDbNodeCommandInput, StartDbNodeCommandOutput } from "../commands/StartDbNodeCommand";
import { StopDbNodeCommandInput, StopDbNodeCommandOutput } from "../commands/StopDbNodeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateCloudExadataInfrastructureCommandInput,
  UpdateCloudExadataInfrastructureCommandOutput,
} from "../commands/UpdateCloudExadataInfrastructureCommand";
import { UpdateOdbNetworkCommandInput, UpdateOdbNetworkCommandOutput } from "../commands/UpdateOdbNetworkCommand";
import {
  AcceptMarketplaceRegistrationInput,
  AccessDeniedException,
  CloudAutonomousVmCluster,
  CloudAutonomousVmClusterResourceDetails,
  CloudAutonomousVmClusterSummary,
  CloudExadataInfrastructure,
  CloudExadataInfrastructureSummary,
  CloudExadataInfrastructureUnallocatedResources,
  CloudVmCluster,
  CloudVmClusterSummary,
  ConflictException,
  CreateCloudAutonomousVmClusterInput,
  CreateCloudExadataInfrastructureInput,
  CreateCloudVmClusterInput,
  CreateOdbNetworkInput,
  CreateOdbPeeringConnectionInput,
  CustomerContact,
  DataCollectionOptions,
  DayOfWeek,
  DbNode,
  DbNodeSummary,
  DbServer,
  DbServerSummary,
  DeleteCloudAutonomousVmClusterInput,
  DeleteCloudExadataInfrastructureInput,
  DeleteCloudVmClusterInput,
  DeleteOdbNetworkInput,
  DeleteOdbPeeringConnectionInput,
  GetCloudAutonomousVmClusterInput,
  GetCloudAutonomousVmClusterOutput,
  GetCloudExadataInfrastructureInput,
  GetCloudExadataInfrastructureOutput,
  GetCloudExadataInfrastructureUnallocatedResourcesInput,
  GetCloudExadataInfrastructureUnallocatedResourcesOutput,
  GetCloudVmClusterInput,
  GetCloudVmClusterOutput,
  GetDbNodeInput,
  GetDbNodeOutput,
  GetDbServerInput,
  GetDbServerOutput,
  GetOciOnboardingStatusInput,
  GetOdbNetworkInput,
  GetOdbNetworkOutput,
  GetOdbPeeringConnectionInput,
  GetOdbPeeringConnectionOutput,
  InitializeServiceInput,
  InternalServerException,
  ListAutonomousVirtualMachinesInput,
  ListCloudAutonomousVmClustersInput,
  ListCloudAutonomousVmClustersOutput,
  ListCloudExadataInfrastructuresInput,
  ListCloudExadataInfrastructuresOutput,
  ListCloudVmClustersInput,
  ListCloudVmClustersOutput,
  ListDbNodesInput,
  ListDbNodesOutput,
  ListDbServersInput,
  ListDbServersOutput,
  ListDbSystemShapesInput,
  ListGiVersionsInput,
  ListOdbNetworksInput,
  ListOdbNetworksOutput,
  ListOdbPeeringConnectionsInput,
  ListOdbPeeringConnectionsOutput,
  ListSystemVersionsInput,
  ListTagsForResourceRequest,
  MaintenanceWindow,
  Month,
  OdbNetwork,
  OdbNetworkSummary,
  OdbPeeringConnection,
  OdbPeeringConnectionSummary,
  RebootDbNodeInput,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  StartDbNodeInput,
  StopDbNodeInput,
  TagResourceRequest,
  ThrottlingException,
  UntagResourceRequest,
  UpdateCloudExadataInfrastructureInput,
  UpdateOdbNetworkInput,
  ValidationException,
} from "../models/models_0";
import { OdbServiceException as __BaseException } from "../models/OdbServiceException";

/**
 * serializeAws_json1_0AcceptMarketplaceRegistrationCommand
 */
export const se_AcceptMarketplaceRegistrationCommand = async (
  input: AcceptMarketplaceRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptMarketplaceRegistration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateCloudAutonomousVmClusterCommand
 */
export const se_CreateCloudAutonomousVmClusterCommand = async (
  input: CreateCloudAutonomousVmClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCloudAutonomousVmCluster");
  let body: any;
  body = JSON.stringify(se_CreateCloudAutonomousVmClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateCloudExadataInfrastructureCommand
 */
export const se_CreateCloudExadataInfrastructureCommand = async (
  input: CreateCloudExadataInfrastructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCloudExadataInfrastructure");
  let body: any;
  body = JSON.stringify(se_CreateCloudExadataInfrastructureInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateCloudVmClusterCommand
 */
export const se_CreateCloudVmClusterCommand = async (
  input: CreateCloudVmClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCloudVmCluster");
  let body: any;
  body = JSON.stringify(se_CreateCloudVmClusterInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateOdbNetworkCommand
 */
export const se_CreateOdbNetworkCommand = async (
  input: CreateOdbNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOdbNetwork");
  let body: any;
  body = JSON.stringify(se_CreateOdbNetworkInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateOdbPeeringConnectionCommand
 */
export const se_CreateOdbPeeringConnectionCommand = async (
  input: CreateOdbPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateOdbPeeringConnection");
  let body: any;
  body = JSON.stringify(se_CreateOdbPeeringConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCloudAutonomousVmClusterCommand
 */
export const se_DeleteCloudAutonomousVmClusterCommand = async (
  input: DeleteCloudAutonomousVmClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCloudAutonomousVmCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCloudExadataInfrastructureCommand
 */
export const se_DeleteCloudExadataInfrastructureCommand = async (
  input: DeleteCloudExadataInfrastructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCloudExadataInfrastructure");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteCloudVmClusterCommand
 */
export const se_DeleteCloudVmClusterCommand = async (
  input: DeleteCloudVmClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCloudVmCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteOdbNetworkCommand
 */
export const se_DeleteOdbNetworkCommand = async (
  input: DeleteOdbNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOdbNetwork");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteOdbPeeringConnectionCommand
 */
export const se_DeleteOdbPeeringConnectionCommand = async (
  input: DeleteOdbPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteOdbPeeringConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCloudAutonomousVmClusterCommand
 */
export const se_GetCloudAutonomousVmClusterCommand = async (
  input: GetCloudAutonomousVmClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCloudAutonomousVmCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCloudExadataInfrastructureCommand
 */
export const se_GetCloudExadataInfrastructureCommand = async (
  input: GetCloudExadataInfrastructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCloudExadataInfrastructure");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCloudExadataInfrastructureUnallocatedResourcesCommand
 */
export const se_GetCloudExadataInfrastructureUnallocatedResourcesCommand = async (
  input: GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCloudExadataInfrastructureUnallocatedResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetCloudVmClusterCommand
 */
export const se_GetCloudVmClusterCommand = async (
  input: GetCloudVmClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCloudVmCluster");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDbNodeCommand
 */
export const se_GetDbNodeCommand = async (
  input: GetDbNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDbNode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDbServerCommand
 */
export const se_GetDbServerCommand = async (
  input: GetDbServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDbServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetOciOnboardingStatusCommand
 */
export const se_GetOciOnboardingStatusCommand = async (
  input: GetOciOnboardingStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOciOnboardingStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetOdbNetworkCommand
 */
export const se_GetOdbNetworkCommand = async (
  input: GetOdbNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOdbNetwork");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetOdbPeeringConnectionCommand
 */
export const se_GetOdbPeeringConnectionCommand = async (
  input: GetOdbPeeringConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOdbPeeringConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0InitializeServiceCommand
 */
export const se_InitializeServiceCommand = async (
  input: InitializeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InitializeService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAutonomousVirtualMachinesCommand
 */
export const se_ListAutonomousVirtualMachinesCommand = async (
  input: ListAutonomousVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAutonomousVirtualMachines");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCloudAutonomousVmClustersCommand
 */
export const se_ListCloudAutonomousVmClustersCommand = async (
  input: ListCloudAutonomousVmClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCloudAutonomousVmClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCloudExadataInfrastructuresCommand
 */
export const se_ListCloudExadataInfrastructuresCommand = async (
  input: ListCloudExadataInfrastructuresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCloudExadataInfrastructures");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListCloudVmClustersCommand
 */
export const se_ListCloudVmClustersCommand = async (
  input: ListCloudVmClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCloudVmClusters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbNodesCommand
 */
export const se_ListDbNodesCommand = async (
  input: ListDbNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbNodes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbServersCommand
 */
export const se_ListDbServersCommand = async (
  input: ListDbServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbServers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDbSystemShapesCommand
 */
export const se_ListDbSystemShapesCommand = async (
  input: ListDbSystemShapesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDbSystemShapes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListGiVersionsCommand
 */
export const se_ListGiVersionsCommand = async (
  input: ListGiVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGiVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOdbNetworksCommand
 */
export const se_ListOdbNetworksCommand = async (
  input: ListOdbNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOdbNetworks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOdbPeeringConnectionsCommand
 */
export const se_ListOdbPeeringConnectionsCommand = async (
  input: ListOdbPeeringConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOdbPeeringConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListSystemVersionsCommand
 */
export const se_ListSystemVersionsCommand = async (
  input: ListSystemVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSystemVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0RebootDbNodeCommand
 */
export const se_RebootDbNodeCommand = async (
  input: RebootDbNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RebootDbNode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartDbNodeCommand
 */
export const se_StartDbNodeCommand = async (
  input: StartDbNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDbNode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StopDbNodeCommand
 */
export const se_StopDbNodeCommand = async (
  input: StopDbNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDbNode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * serializeAws_json1_0UpdateCloudExadataInfrastructureCommand
 */
export const se_UpdateCloudExadataInfrastructureCommand = async (
  input: UpdateCloudExadataInfrastructureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCloudExadataInfrastructure");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateOdbNetworkCommand
 */
export const se_UpdateOdbNetworkCommand = async (
  input: UpdateOdbNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateOdbNetwork");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AcceptMarketplaceRegistrationCommand
 */
export const de_AcceptMarketplaceRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptMarketplaceRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AcceptMarketplaceRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateCloudAutonomousVmClusterCommand
 */
export const de_CreateCloudAutonomousVmClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudAutonomousVmClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCloudAutonomousVmClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateCloudExadataInfrastructureCommand
 */
export const de_CreateCloudExadataInfrastructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudExadataInfrastructureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCloudExadataInfrastructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateCloudVmClusterCommand
 */
export const de_CreateCloudVmClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCloudVmClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCloudVmClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateOdbNetworkCommand
 */
export const de_CreateOdbNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOdbNetworkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateOdbNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateOdbPeeringConnectionCommand
 */
export const de_CreateOdbPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOdbPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateOdbPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteCloudAutonomousVmClusterCommand
 */
export const de_DeleteCloudAutonomousVmClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudAutonomousVmClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCloudAutonomousVmClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteCloudExadataInfrastructureCommand
 */
export const de_DeleteCloudExadataInfrastructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudExadataInfrastructureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCloudExadataInfrastructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteCloudVmClusterCommand
 */
export const de_DeleteCloudVmClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCloudVmClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCloudVmClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteOdbNetworkCommand
 */
export const de_DeleteOdbNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOdbNetworkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteOdbNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteOdbPeeringConnectionCommand
 */
export const de_DeleteOdbPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOdbPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteOdbPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetCloudAutonomousVmClusterCommand
 */
export const de_GetCloudAutonomousVmClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudAutonomousVmClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCloudAutonomousVmClusterOutput(data, context);
  const response: GetCloudAutonomousVmClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetCloudExadataInfrastructureCommand
 */
export const de_GetCloudExadataInfrastructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudExadataInfrastructureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCloudExadataInfrastructureOutput(data, context);
  const response: GetCloudExadataInfrastructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetCloudExadataInfrastructureUnallocatedResourcesCommand
 */
export const de_GetCloudExadataInfrastructureUnallocatedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCloudExadataInfrastructureUnallocatedResourcesOutput(data, context);
  const response: GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetCloudVmClusterCommand
 */
export const de_GetCloudVmClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCloudVmClusterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCloudVmClusterOutput(data, context);
  const response: GetCloudVmClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDbNodeCommand
 */
export const de_GetDbNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDbNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDbNodeOutput(data, context);
  const response: GetDbNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDbServerCommand
 */
export const de_GetDbServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDbServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDbServerOutput(data, context);
  const response: GetDbServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetOciOnboardingStatusCommand
 */
export const de_GetOciOnboardingStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOciOnboardingStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetOciOnboardingStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetOdbNetworkCommand
 */
export const de_GetOdbNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOdbNetworkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOdbNetworkOutput(data, context);
  const response: GetOdbNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetOdbPeeringConnectionCommand
 */
export const de_GetOdbPeeringConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOdbPeeringConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOdbPeeringConnectionOutput(data, context);
  const response: GetOdbPeeringConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0InitializeServiceCommand
 */
export const de_InitializeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: InitializeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAutonomousVirtualMachinesCommand
 */
export const de_ListAutonomousVirtualMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutonomousVirtualMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAutonomousVirtualMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListCloudAutonomousVmClustersCommand
 */
export const de_ListCloudAutonomousVmClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudAutonomousVmClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCloudAutonomousVmClustersOutput(data, context);
  const response: ListCloudAutonomousVmClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListCloudExadataInfrastructuresCommand
 */
export const de_ListCloudExadataInfrastructuresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudExadataInfrastructuresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCloudExadataInfrastructuresOutput(data, context);
  const response: ListCloudExadataInfrastructuresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListCloudVmClustersCommand
 */
export const de_ListCloudVmClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCloudVmClustersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCloudVmClustersOutput(data, context);
  const response: ListCloudVmClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbNodesCommand
 */
export const de_ListDbNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbNodesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDbNodesOutput(data, context);
  const response: ListDbNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbServersCommand
 */
export const de_ListDbServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDbServersOutput(data, context);
  const response: ListDbServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDbSystemShapesCommand
 */
export const de_ListDbSystemShapesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDbSystemShapesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDbSystemShapesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListGiVersionsCommand
 */
export const de_ListGiVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGiVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListGiVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListOdbNetworksCommand
 */
export const de_ListOdbNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOdbNetworksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOdbNetworksOutput(data, context);
  const response: ListOdbNetworksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListOdbPeeringConnectionsCommand
 */
export const de_ListOdbPeeringConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOdbPeeringConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOdbPeeringConnectionsOutput(data, context);
  const response: ListOdbPeeringConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListSystemVersionsCommand
 */
export const de_ListSystemVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSystemVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSystemVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0RebootDbNodeCommand
 */
export const de_RebootDbNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootDbNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RebootDbNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartDbNodeCommand
 */
export const de_StartDbNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDbNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDbNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StopDbNodeCommand
 */
export const de_StopDbNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDbNodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopDbNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UpdateCloudExadataInfrastructureCommand
 */
export const de_UpdateCloudExadataInfrastructureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCloudExadataInfrastructureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCloudExadataInfrastructureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateOdbNetworkCommand
 */
export const de_UpdateOdbNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOdbNetworkCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateOdbNetworkCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_0CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.odb#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.odb#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.odb#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.odb#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.odb#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.odb#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.odb#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
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
 * deserializeAws_json1_0ConflictExceptionRes
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
 * deserializeAws_json1_0InternalServerExceptionRes
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
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
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
 * deserializeAws_json1_0ThrottlingExceptionRes
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
 * deserializeAws_json1_0ValidationExceptionRes
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

// se_AcceptMarketplaceRegistrationInput omitted.

/**
 * serializeAws_json1_0CreateCloudAutonomousVmClusterInput
 */
const se_CreateCloudAutonomousVmClusterInput = (
  input: CreateCloudAutonomousVmClusterInput,
  context: __SerdeContext
): any => {
  return take(input, {
    autonomousDataStorageSizeInTBs: __serializeFloat,
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    cloudExadataInfrastructureId: [],
    cpuCoreCountPerNode: [],
    dbServers: _json,
    description: [],
    displayName: [],
    isMtlsEnabledVmCluster: [],
    licenseModel: [],
    maintenanceWindow: _json,
    memoryPerOracleComputeUnitInGBs: [],
    odbNetworkId: [],
    scanListenerPortNonTls: [],
    scanListenerPortTls: [],
    tags: _json,
    timeZone: [],
    totalContainerDatabases: [],
  });
};

/**
 * serializeAws_json1_0CreateCloudExadataInfrastructureInput
 */
const se_CreateCloudExadataInfrastructureInput = (
  input: CreateCloudExadataInfrastructureInput,
  context: __SerdeContext
): any => {
  return take(input, {
    availabilityZone: [],
    availabilityZoneId: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    computeCount: [],
    customerContactsToSendToOCI: _json,
    databaseServerType: [],
    displayName: [],
    maintenanceWindow: _json,
    shape: [],
    storageCount: [],
    storageServerType: [],
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateCloudVmClusterInput
 */
const se_CreateCloudVmClusterInput = (input: CreateCloudVmClusterInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    cloudExadataInfrastructureId: [],
    clusterName: [],
    cpuCoreCount: [],
    dataCollectionOptions: _json,
    dataStorageSizeInTBs: __serializeFloat,
    dbNodeStorageSizeInGBs: [],
    dbServers: _json,
    displayName: [],
    giVersion: [],
    hostname: [],
    isLocalBackupEnabled: [],
    isSparseDiskgroupEnabled: [],
    licenseModel: [],
    memorySizeInGBs: [],
    odbNetworkId: [],
    scanListenerPortTcp: [],
    sshPublicKeys: _json,
    systemVersion: [],
    tags: _json,
    timeZone: [],
  });
};

/**
 * serializeAws_json1_0CreateOdbNetworkInput
 */
const se_CreateOdbNetworkInput = (input: CreateOdbNetworkInput, context: __SerdeContext): any => {
  return take(input, {
    availabilityZone: [],
    availabilityZoneId: [],
    backupSubnetCidr: [],
    clientSubnetCidr: [],
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    customDomainName: [],
    defaultDnsPrefix: [],
    displayName: [],
    s3Access: [],
    s3PolicyDocument: [],
    tags: _json,
    zeroEtlAccess: [],
  });
};

/**
 * serializeAws_json1_0CreateOdbPeeringConnectionInput
 */
const se_CreateOdbPeeringConnectionInput = (input: CreateOdbPeeringConnectionInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    displayName: [],
    odbNetworkId: [],
    peerNetworkId: [],
    tags: _json,
  });
};

// se_CustomerContact omitted.

// se_CustomerContacts omitted.

// se_DataCollectionOptions omitted.

// se_DayOfWeek omitted.

// se_DaysOfWeek omitted.

// se_DeleteCloudAutonomousVmClusterInput omitted.

// se_DeleteCloudExadataInfrastructureInput omitted.

// se_DeleteCloudVmClusterInput omitted.

// se_DeleteOdbNetworkInput omitted.

// se_DeleteOdbPeeringConnectionInput omitted.

// se_GetCloudAutonomousVmClusterInput omitted.

// se_GetCloudExadataInfrastructureInput omitted.

// se_GetCloudExadataInfrastructureUnallocatedResourcesInput omitted.

// se_GetCloudVmClusterInput omitted.

// se_GetDbNodeInput omitted.

// se_GetDbServerInput omitted.

// se_GetOciOnboardingStatusInput omitted.

// se_GetOdbNetworkInput omitted.

// se_GetOdbPeeringConnectionInput omitted.

// se_HoursOfDay omitted.

// se_InitializeServiceInput omitted.

// se_ListAutonomousVirtualMachinesInput omitted.

// se_ListCloudAutonomousVmClustersInput omitted.

// se_ListCloudExadataInfrastructuresInput omitted.

// se_ListCloudVmClustersInput omitted.

// se_ListDbNodesInput omitted.

// se_ListDbServersInput omitted.

// se_ListDbSystemShapesInput omitted.

// se_ListGiVersionsInput omitted.

// se_ListOdbNetworksInput omitted.

// se_ListOdbPeeringConnectionsInput omitted.

// se_ListSystemVersionsInput omitted.

// se_ListTagsForResourceRequest omitted.

// se_MaintenanceWindow omitted.

// se_Month omitted.

// se_Months omitted.

// se_RebootDbNodeInput omitted.

// se_RequestTagMap omitted.

// se_StartDbNodeInput omitted.

// se_StopDbNodeInput omitted.

// se_StringList omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCloudExadataInfrastructureInput omitted.

// se_UpdateOdbNetworkInput omitted.

// se_WeeksOfMonth omitted.

// de_AcceptMarketplaceRegistrationOutput omitted.

// de_AccessDeniedException omitted.

// de_AutonomousVirtualMachineList omitted.

// de_AutonomousVirtualMachineSummary omitted.

/**
 * deserializeAws_json1_0CloudAutonomousVmCluster
 */
const de_CloudAutonomousVmCluster = (output: any, context: __SerdeContext): CloudAutonomousVmCluster => {
  return take(output, {
    autonomousDataStoragePercentage: __limitedParseFloat32,
    autonomousDataStorageSizeInTBs: __limitedParseDouble,
    availableAutonomousDataStorageSizeInTBs: __limitedParseDouble,
    availableContainerDatabases: __expectInt32,
    availableCpus: __limitedParseFloat32,
    cloudAutonomousVmClusterArn: __expectString,
    cloudAutonomousVmClusterId: __expectString,
    cloudExadataInfrastructureId: __expectString,
    computeModel: __expectString,
    cpuCoreCount: __expectInt32,
    cpuCoreCountPerNode: __expectInt32,
    cpuPercentage: __limitedParseFloat32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataStorageSizeInGBs: __limitedParseDouble,
    dataStorageSizeInTBs: __limitedParseDouble,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServers: _json,
    description: __expectString,
    displayName: __expectString,
    domain: __expectString,
    exadataStorageInTBsLowestScaledValue: __limitedParseDouble,
    hostname: __expectString,
    isMtlsEnabledVmCluster: __expectBoolean,
    licenseModel: __expectString,
    maintenanceWindow: _json,
    maxAcdsLowestScaledValue: __expectInt32,
    memoryPerOracleComputeUnitInGBs: __expectInt32,
    memorySizeInGBs: __expectInt32,
    nodeCount: __expectInt32,
    nonProvisionableAutonomousContainerDatabases: __expectInt32,
    ociResourceAnchorName: __expectString,
    ociUrl: __expectString,
    ocid: __expectString,
    odbNetworkId: __expectString,
    percentProgress: __limitedParseFloat32,
    provisionableAutonomousContainerDatabases: __expectInt32,
    provisionedAutonomousContainerDatabases: __expectInt32,
    provisionedCpus: __limitedParseFloat32,
    reclaimableCpus: __limitedParseFloat32,
    reservedCpus: __limitedParseFloat32,
    scanListenerPortNonTls: __expectInt32,
    scanListenerPortTls: __expectInt32,
    shape: __expectString,
    status: __expectString,
    statusReason: __expectString,
    timeDatabaseSslCertificateExpires: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    timeOrdsCertificateExpires: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    timeZone: __expectString,
    totalContainerDatabases: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudAutonomousVmClusterList
 */
const de_CloudAutonomousVmClusterList = (output: any, context: __SerdeContext): CloudAutonomousVmClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudAutonomousVmClusterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CloudAutonomousVmClusterResourceDetails
 */
const de_CloudAutonomousVmClusterResourceDetails = (
  output: any,
  context: __SerdeContext
): CloudAutonomousVmClusterResourceDetails => {
  return take(output, {
    cloudAutonomousVmClusterId: __expectString,
    unallocatedAdbStorageInTBs: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudAutonomousVmClusterResourceDetailsList
 */
const de_CloudAutonomousVmClusterResourceDetailsList = (
  output: any,
  context: __SerdeContext
): CloudAutonomousVmClusterResourceDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudAutonomousVmClusterResourceDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CloudAutonomousVmClusterSummary
 */
const de_CloudAutonomousVmClusterSummary = (output: any, context: __SerdeContext): CloudAutonomousVmClusterSummary => {
  return take(output, {
    autonomousDataStoragePercentage: __limitedParseFloat32,
    autonomousDataStorageSizeInTBs: __limitedParseDouble,
    availableAutonomousDataStorageSizeInTBs: __limitedParseDouble,
    availableContainerDatabases: __expectInt32,
    availableCpus: __limitedParseFloat32,
    cloudAutonomousVmClusterArn: __expectString,
    cloudAutonomousVmClusterId: __expectString,
    cloudExadataInfrastructureId: __expectString,
    computeModel: __expectString,
    cpuCoreCount: __expectInt32,
    cpuCoreCountPerNode: __expectInt32,
    cpuPercentage: __limitedParseFloat32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataStorageSizeInGBs: __limitedParseDouble,
    dataStorageSizeInTBs: __limitedParseDouble,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServers: _json,
    description: __expectString,
    displayName: __expectString,
    domain: __expectString,
    exadataStorageInTBsLowestScaledValue: __limitedParseDouble,
    hostname: __expectString,
    isMtlsEnabledVmCluster: __expectBoolean,
    licenseModel: __expectString,
    maintenanceWindow: _json,
    maxAcdsLowestScaledValue: __expectInt32,
    memoryPerOracleComputeUnitInGBs: __expectInt32,
    memorySizeInGBs: __expectInt32,
    nodeCount: __expectInt32,
    nonProvisionableAutonomousContainerDatabases: __expectInt32,
    ociResourceAnchorName: __expectString,
    ociUrl: __expectString,
    ocid: __expectString,
    odbNetworkId: __expectString,
    percentProgress: __limitedParseFloat32,
    provisionableAutonomousContainerDatabases: __expectInt32,
    provisionedAutonomousContainerDatabases: __expectInt32,
    provisionedCpus: __limitedParseFloat32,
    reclaimableCpus: __limitedParseFloat32,
    reservedCpus: __limitedParseFloat32,
    scanListenerPortNonTls: __expectInt32,
    scanListenerPortTls: __expectInt32,
    shape: __expectString,
    status: __expectString,
    statusReason: __expectString,
    timeDatabaseSslCertificateExpires: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    timeOrdsCertificateExpires: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    timeZone: __expectString,
    totalContainerDatabases: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudExadataInfrastructure
 */
const de_CloudExadataInfrastructure = (output: any, context: __SerdeContext): CloudExadataInfrastructure => {
  return take(output, {
    activatedStorageCount: __expectInt32,
    additionalStorageCount: __expectInt32,
    availabilityZone: __expectString,
    availabilityZoneId: __expectString,
    availableStorageSizeInGBs: __expectInt32,
    cloudExadataInfrastructureArn: __expectString,
    cloudExadataInfrastructureId: __expectString,
    computeCount: __expectInt32,
    computeModel: __expectString,
    cpuCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerContactsToSendToOCI: _json,
    dataStorageSizeInTBs: __limitedParseDouble,
    databaseServerType: __expectString,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServerVersion: __expectString,
    displayName: __expectString,
    lastMaintenanceRunId: __expectString,
    maintenanceWindow: _json,
    maxCpuCount: __expectInt32,
    maxDataStorageInTBs: __limitedParseDouble,
    maxDbNodeStorageSizeInGBs: __expectInt32,
    maxMemoryInGBs: __expectInt32,
    memorySizeInGBs: __expectInt32,
    monthlyDbServerVersion: __expectString,
    monthlyStorageServerVersion: __expectString,
    nextMaintenanceRunId: __expectString,
    ociResourceAnchorName: __expectString,
    ociUrl: __expectString,
    ocid: __expectString,
    percentProgress: __limitedParseFloat32,
    shape: __expectString,
    status: __expectString,
    statusReason: __expectString,
    storageCount: __expectInt32,
    storageServerType: __expectString,
    storageServerVersion: __expectString,
    totalStorageSizeInGBs: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudExadataInfrastructureList
 */
const de_CloudExadataInfrastructureList = (
  output: any,
  context: __SerdeContext
): CloudExadataInfrastructureSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudExadataInfrastructureSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CloudExadataInfrastructureSummary
 */
const de_CloudExadataInfrastructureSummary = (
  output: any,
  context: __SerdeContext
): CloudExadataInfrastructureSummary => {
  return take(output, {
    activatedStorageCount: __expectInt32,
    additionalStorageCount: __expectInt32,
    availabilityZone: __expectString,
    availabilityZoneId: __expectString,
    availableStorageSizeInGBs: __expectInt32,
    cloudExadataInfrastructureArn: __expectString,
    cloudExadataInfrastructureId: __expectString,
    computeCount: __expectInt32,
    computeModel: __expectString,
    cpuCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerContactsToSendToOCI: _json,
    dataStorageSizeInTBs: __limitedParseDouble,
    databaseServerType: __expectString,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServerVersion: __expectString,
    displayName: __expectString,
    lastMaintenanceRunId: __expectString,
    maintenanceWindow: _json,
    maxCpuCount: __expectInt32,
    maxDataStorageInTBs: __limitedParseDouble,
    maxDbNodeStorageSizeInGBs: __expectInt32,
    maxMemoryInGBs: __expectInt32,
    memorySizeInGBs: __expectInt32,
    monthlyDbServerVersion: __expectString,
    monthlyStorageServerVersion: __expectString,
    nextMaintenanceRunId: __expectString,
    ociResourceAnchorName: __expectString,
    ociUrl: __expectString,
    ocid: __expectString,
    percentProgress: __limitedParseFloat32,
    shape: __expectString,
    status: __expectString,
    statusReason: __expectString,
    storageCount: __expectInt32,
    storageServerType: __expectString,
    storageServerVersion: __expectString,
    totalStorageSizeInGBs: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudExadataInfrastructureUnallocatedResources
 */
const de_CloudExadataInfrastructureUnallocatedResources = (
  output: any,
  context: __SerdeContext
): CloudExadataInfrastructureUnallocatedResources => {
  return take(output, {
    cloudAutonomousVmClusters: (_: any) => de_CloudAutonomousVmClusterResourceDetailsList(_, context),
    cloudExadataInfrastructureDisplayName: __expectString,
    cloudExadataInfrastructureId: __expectString,
    exadataStorageInTBs: __limitedParseDouble,
    localStorageInGBs: __expectInt32,
    memoryInGBs: __expectInt32,
    ocpus: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudVmCluster
 */
const de_CloudVmCluster = (output: any, context: __SerdeContext): CloudVmCluster => {
  return take(output, {
    cloudExadataInfrastructureId: __expectString,
    cloudVmClusterArn: __expectString,
    cloudVmClusterId: __expectString,
    clusterName: __expectString,
    computeModel: __expectString,
    cpuCoreCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataCollectionOptions: _json,
    dataStorageSizeInTBs: __limitedParseDouble,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServers: _json,
    diskRedundancy: __expectString,
    displayName: __expectString,
    domain: __expectString,
    giVersion: __expectString,
    hostname: __expectString,
    iormConfigCache: _json,
    isLocalBackupEnabled: __expectBoolean,
    isSparseDiskgroupEnabled: __expectBoolean,
    lastUpdateHistoryEntryId: __expectString,
    licenseModel: __expectString,
    listenerPort: __expectInt32,
    memorySizeInGBs: __expectInt32,
    nodeCount: __expectInt32,
    ociResourceAnchorName: __expectString,
    ociUrl: __expectString,
    ocid: __expectString,
    odbNetworkId: __expectString,
    percentProgress: __limitedParseFloat32,
    scanDnsName: __expectString,
    scanDnsRecordId: __expectString,
    scanIpIds: _json,
    shape: __expectString,
    sshPublicKeys: _json,
    status: __expectString,
    statusReason: __expectString,
    storageSizeInGBs: __expectInt32,
    systemVersion: __expectString,
    timeZone: __expectString,
    vipIds: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0CloudVmClusterList
 */
const de_CloudVmClusterList = (output: any, context: __SerdeContext): CloudVmClusterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CloudVmClusterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CloudVmClusterSummary
 */
const de_CloudVmClusterSummary = (output: any, context: __SerdeContext): CloudVmClusterSummary => {
  return take(output, {
    cloudExadataInfrastructureId: __expectString,
    cloudVmClusterArn: __expectString,
    cloudVmClusterId: __expectString,
    clusterName: __expectString,
    computeModel: __expectString,
    cpuCoreCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataCollectionOptions: _json,
    dataStorageSizeInTBs: __limitedParseDouble,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServers: _json,
    diskRedundancy: __expectString,
    displayName: __expectString,
    domain: __expectString,
    giVersion: __expectString,
    hostname: __expectString,
    iormConfigCache: _json,
    isLocalBackupEnabled: __expectBoolean,
    isSparseDiskgroupEnabled: __expectBoolean,
    lastUpdateHistoryEntryId: __expectString,
    licenseModel: __expectString,
    listenerPort: __expectInt32,
    memorySizeInGBs: __expectInt32,
    nodeCount: __expectInt32,
    ociResourceAnchorName: __expectString,
    ociUrl: __expectString,
    ocid: __expectString,
    odbNetworkId: __expectString,
    percentProgress: __limitedParseFloat32,
    scanDnsName: __expectString,
    scanDnsRecordId: __expectString,
    scanIpIds: _json,
    shape: __expectString,
    sshPublicKeys: _json,
    status: __expectString,
    statusReason: __expectString,
    storageSizeInGBs: __expectInt32,
    systemVersion: __expectString,
    timeZone: __expectString,
    vipIds: _json,
  }) as any;
};

// de_ConflictException omitted.

// de_CreateCloudAutonomousVmClusterOutput omitted.

// de_CreateCloudExadataInfrastructureOutput omitted.

// de_CreateCloudVmClusterOutput omitted.

// de_CreateOdbNetworkOutput omitted.

// de_CreateOdbPeeringConnectionOutput omitted.

// de_CustomerContact omitted.

// de_CustomerContacts omitted.

// de_DataCollectionOptions omitted.

// de_DayOfWeek omitted.

// de_DaysOfWeek omitted.

// de_DbIormConfig omitted.

// de_DbIormConfigList omitted.

/**
 * deserializeAws_json1_0DbNode
 */
const de_DbNode = (output: any, context: __SerdeContext): DbNode => {
  return take(output, {
    additionalDetails: __expectString,
    backupIpId: __expectString,
    backupVnic2Id: __expectString,
    backupVnicId: __expectString,
    cpuCoreCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dbNodeArn: __expectString,
    dbNodeId: __expectString,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServerId: __expectString,
    dbSystemId: __expectString,
    faultDomain: __expectString,
    floatingIpAddress: __expectString,
    hostIpId: __expectString,
    hostname: __expectString,
    maintenanceType: __expectString,
    memorySizeInGBs: __expectInt32,
    ociResourceAnchorName: __expectString,
    ocid: __expectString,
    privateIpAddress: __expectString,
    softwareStorageSizeInGB: __expectInt32,
    status: __expectString,
    statusReason: __expectString,
    timeMaintenanceWindowEnd: __expectString,
    timeMaintenanceWindowStart: __expectString,
    totalCpuCoreCount: __expectInt32,
    vnic2Id: __expectString,
    vnicId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DbNodeList
 */
const de_DbNodeList = (output: any, context: __SerdeContext): DbNodeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DbNodeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DbNodeSummary
 */
const de_DbNodeSummary = (output: any, context: __SerdeContext): DbNodeSummary => {
  return take(output, {
    additionalDetails: __expectString,
    backupIpId: __expectString,
    backupVnic2Id: __expectString,
    backupVnicId: __expectString,
    cpuCoreCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dbNodeArn: __expectString,
    dbNodeId: __expectString,
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServerId: __expectString,
    dbSystemId: __expectString,
    faultDomain: __expectString,
    hostIpId: __expectString,
    hostname: __expectString,
    maintenanceType: __expectString,
    memorySizeInGBs: __expectInt32,
    ociResourceAnchorName: __expectString,
    ocid: __expectString,
    softwareStorageSizeInGB: __expectInt32,
    status: __expectString,
    statusReason: __expectString,
    timeMaintenanceWindowEnd: __expectString,
    timeMaintenanceWindowStart: __expectString,
    totalCpuCoreCount: __expectInt32,
    vnic2Id: __expectString,
    vnicId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DbServer
 */
const de_DbServer = (output: any, context: __SerdeContext): DbServer => {
  return take(output, {
    autonomousVirtualMachineIds: _json,
    autonomousVmClusterIds: _json,
    computeModel: __expectString,
    cpuCoreCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServerId: __expectString,
    dbServerPatchingDetails: _json,
    displayName: __expectString,
    exadataInfrastructureId: __expectString,
    maxCpuCount: __expectInt32,
    maxDbNodeStorageInGBs: __expectInt32,
    maxMemoryInGBs: __expectInt32,
    memorySizeInGBs: __expectInt32,
    ociResourceAnchorName: __expectString,
    ocid: __expectString,
    shape: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vmClusterIds: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0DbServerList
 */
const de_DbServerList = (output: any, context: __SerdeContext): DbServerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DbServerSummary(entry, context);
    });
  return retVal;
};

// de_DbServerPatchingDetails omitted.

/**
 * deserializeAws_json1_0DbServerSummary
 */
const de_DbServerSummary = (output: any, context: __SerdeContext): DbServerSummary => {
  return take(output, {
    autonomousVirtualMachineIds: _json,
    autonomousVmClusterIds: _json,
    computeModel: __expectString,
    cpuCoreCount: __expectInt32,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dbNodeStorageSizeInGBs: __expectInt32,
    dbServerId: __expectString,
    dbServerPatchingDetails: _json,
    displayName: __expectString,
    exadataInfrastructureId: __expectString,
    maxCpuCount: __expectInt32,
    maxDbNodeStorageInGBs: __expectInt32,
    maxMemoryInGBs: __expectInt32,
    memorySizeInGBs: __expectInt32,
    ociResourceAnchorName: __expectString,
    ocid: __expectString,
    shape: __expectString,
    status: __expectString,
    statusReason: __expectString,
    vmClusterIds: _json,
  }) as any;
};

// de_DbSystemShapeList omitted.

// de_DbSystemShapeSummary omitted.

// de_DeleteCloudAutonomousVmClusterOutput omitted.

// de_DeleteCloudExadataInfrastructureOutput omitted.

// de_DeleteCloudVmClusterOutput omitted.

// de_DeleteOdbNetworkOutput omitted.

// de_DeleteOdbPeeringConnectionOutput omitted.

// de_ExadataIormConfig omitted.

/**
 * deserializeAws_json1_0GetCloudAutonomousVmClusterOutput
 */
const de_GetCloudAutonomousVmClusterOutput = (
  output: any,
  context: __SerdeContext
): GetCloudAutonomousVmClusterOutput => {
  return take(output, {
    cloudAutonomousVmCluster: (_: any) => de_CloudAutonomousVmCluster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetCloudExadataInfrastructureOutput
 */
const de_GetCloudExadataInfrastructureOutput = (
  output: any,
  context: __SerdeContext
): GetCloudExadataInfrastructureOutput => {
  return take(output, {
    cloudExadataInfrastructure: (_: any) => de_CloudExadataInfrastructure(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetCloudExadataInfrastructureUnallocatedResourcesOutput
 */
const de_GetCloudExadataInfrastructureUnallocatedResourcesOutput = (
  output: any,
  context: __SerdeContext
): GetCloudExadataInfrastructureUnallocatedResourcesOutput => {
  return take(output, {
    cloudExadataInfrastructureUnallocatedResources: (_: any) =>
      de_CloudExadataInfrastructureUnallocatedResources(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetCloudVmClusterOutput
 */
const de_GetCloudVmClusterOutput = (output: any, context: __SerdeContext): GetCloudVmClusterOutput => {
  return take(output, {
    cloudVmCluster: (_: any) => de_CloudVmCluster(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetDbNodeOutput
 */
const de_GetDbNodeOutput = (output: any, context: __SerdeContext): GetDbNodeOutput => {
  return take(output, {
    dbNode: (_: any) => de_DbNode(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetDbServerOutput
 */
const de_GetDbServerOutput = (output: any, context: __SerdeContext): GetDbServerOutput => {
  return take(output, {
    dbServer: (_: any) => de_DbServer(_, context),
  }) as any;
};

// de_GetOciOnboardingStatusOutput omitted.

/**
 * deserializeAws_json1_0GetOdbNetworkOutput
 */
const de_GetOdbNetworkOutput = (output: any, context: __SerdeContext): GetOdbNetworkOutput => {
  return take(output, {
    odbNetwork: (_: any) => de_OdbNetwork(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetOdbPeeringConnectionOutput
 */
const de_GetOdbPeeringConnectionOutput = (output: any, context: __SerdeContext): GetOdbPeeringConnectionOutput => {
  return take(output, {
    odbPeeringConnection: (_: any) => de_OdbPeeringConnection(_, context),
  }) as any;
};

// de_GiVersionList omitted.

// de_GiVersionSummary omitted.

// de_HoursOfDay omitted.

// de_InitializeServiceOutput omitted.

// de_InternalServerException omitted.

// de_ListAutonomousVirtualMachinesOutput omitted.

/**
 * deserializeAws_json1_0ListCloudAutonomousVmClustersOutput
 */
const de_ListCloudAutonomousVmClustersOutput = (
  output: any,
  context: __SerdeContext
): ListCloudAutonomousVmClustersOutput => {
  return take(output, {
    cloudAutonomousVmClusters: (_: any) => de_CloudAutonomousVmClusterList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListCloudExadataInfrastructuresOutput
 */
const de_ListCloudExadataInfrastructuresOutput = (
  output: any,
  context: __SerdeContext
): ListCloudExadataInfrastructuresOutput => {
  return take(output, {
    cloudExadataInfrastructures: (_: any) => de_CloudExadataInfrastructureList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListCloudVmClustersOutput
 */
const de_ListCloudVmClustersOutput = (output: any, context: __SerdeContext): ListCloudVmClustersOutput => {
  return take(output, {
    cloudVmClusters: (_: any) => de_CloudVmClusterList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListDbNodesOutput
 */
const de_ListDbNodesOutput = (output: any, context: __SerdeContext): ListDbNodesOutput => {
  return take(output, {
    dbNodes: (_: any) => de_DbNodeList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListDbServersOutput
 */
const de_ListDbServersOutput = (output: any, context: __SerdeContext): ListDbServersOutput => {
  return take(output, {
    dbServers: (_: any) => de_DbServerList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListDbSystemShapesOutput omitted.

// de_ListGiVersionsOutput omitted.

/**
 * deserializeAws_json1_0ListOdbNetworksOutput
 */
const de_ListOdbNetworksOutput = (output: any, context: __SerdeContext): ListOdbNetworksOutput => {
  return take(output, {
    nextToken: __expectString,
    odbNetworks: (_: any) => de_OdbNetworkList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListOdbPeeringConnectionsOutput
 */
const de_ListOdbPeeringConnectionsOutput = (output: any, context: __SerdeContext): ListOdbPeeringConnectionsOutput => {
  return take(output, {
    nextToken: __expectString,
    odbPeeringConnections: (_: any) => de_OdbPeeringConnectionList(_, context),
  }) as any;
};

// de_ListSystemVersionsOutput omitted.

// de_ListTagsForResourceResponse omitted.

// de_MaintenanceWindow omitted.

// de_ManagedS3BackupAccess omitted.

// de_ManagedServices omitted.

// de_Month omitted.

// de_Months omitted.

// de_OciDnsForwardingConfig omitted.

// de_OciDnsForwardingConfigList omitted.

/**
 * deserializeAws_json1_0OdbNetwork
 */
const de_OdbNetwork = (output: any, context: __SerdeContext): OdbNetwork => {
  return take(output, {
    availabilityZone: __expectString,
    availabilityZoneId: __expectString,
    backupSubnetCidr: __expectString,
    clientSubnetCidr: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    defaultDnsPrefix: __expectString,
    displayName: __expectString,
    managedServices: _json,
    ociDnsForwardingConfigs: _json,
    ociNetworkAnchorId: __expectString,
    ociNetworkAnchorUrl: __expectString,
    ociResourceAnchorName: __expectString,
    ociVcnId: __expectString,
    ociVcnUrl: __expectString,
    odbNetworkArn: __expectString,
    odbNetworkId: __expectString,
    peeredCidrs: _json,
    percentProgress: __limitedParseFloat32,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0OdbNetworkList
 */
const de_OdbNetworkList = (output: any, context: __SerdeContext): OdbNetworkSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OdbNetworkSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OdbNetworkSummary
 */
const de_OdbNetworkSummary = (output: any, context: __SerdeContext): OdbNetworkSummary => {
  return take(output, {
    availabilityZone: __expectString,
    availabilityZoneId: __expectString,
    backupSubnetCidr: __expectString,
    clientSubnetCidr: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customDomainName: __expectString,
    defaultDnsPrefix: __expectString,
    displayName: __expectString,
    managedServices: _json,
    ociDnsForwardingConfigs: _json,
    ociNetworkAnchorId: __expectString,
    ociNetworkAnchorUrl: __expectString,
    ociResourceAnchorName: __expectString,
    ociVcnId: __expectString,
    ociVcnUrl: __expectString,
    odbNetworkArn: __expectString,
    odbNetworkId: __expectString,
    peeredCidrs: _json,
    percentProgress: __limitedParseFloat32,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0OdbPeeringConnection
 */
const de_OdbPeeringConnection = (output: any, context: __SerdeContext): OdbPeeringConnection => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    displayName: __expectString,
    odbNetworkArn: __expectString,
    odbPeeringConnectionArn: __expectString,
    odbPeeringConnectionId: __expectString,
    odbPeeringConnectionType: __expectString,
    peerNetworkArn: __expectString,
    percentProgress: __limitedParseFloat32,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0OdbPeeringConnectionList
 */
const de_OdbPeeringConnectionList = (output: any, context: __SerdeContext): OdbPeeringConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OdbPeeringConnectionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OdbPeeringConnectionSummary
 */
const de_OdbPeeringConnectionSummary = (output: any, context: __SerdeContext): OdbPeeringConnectionSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    displayName: __expectString,
    odbNetworkArn: __expectString,
    odbPeeringConnectionArn: __expectString,
    odbPeeringConnectionId: __expectString,
    odbPeeringConnectionType: __expectString,
    peerNetworkArn: __expectString,
    percentProgress: __limitedParseFloat32,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

// de_RebootDbNodeOutput omitted.

// de_ResourceNotFoundException omitted.

// de_ResponseTagMap omitted.

// de_S3Access omitted.

// de_SensitiveStringList omitted.

// de_ServiceNetworkEndpoint omitted.

// de_ServiceQuotaExceededException omitted.

// de_StartDbNodeOutput omitted.

// de_StopDbNodeOutput omitted.

// de_StringList omitted.

// de_SystemVersionList omitted.

// de_SystemVersionSummary omitted.

// de_TagResourceResponse omitted.

// de_ThrottlingException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateCloudExadataInfrastructureOutput omitted.

// de_UpdateOdbNetworkOutput omitted.

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_WeeksOfMonth omitted.

// de_ZeroEtlAccess omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `Odb.${operation}`,
  };
}
