// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "@smithy/uuid";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import { CreateKxChangesetCommandInput, CreateKxChangesetCommandOutput } from "../commands/CreateKxChangesetCommand";
import { CreateKxClusterCommandInput, CreateKxClusterCommandOutput } from "../commands/CreateKxClusterCommand";
import { CreateKxDatabaseCommandInput, CreateKxDatabaseCommandOutput } from "../commands/CreateKxDatabaseCommand";
import { CreateKxDataviewCommandInput, CreateKxDataviewCommandOutput } from "../commands/CreateKxDataviewCommand";
import {
  CreateKxEnvironmentCommandInput,
  CreateKxEnvironmentCommandOutput,
} from "../commands/CreateKxEnvironmentCommand";
import {
  CreateKxScalingGroupCommandInput,
  CreateKxScalingGroupCommandOutput,
} from "../commands/CreateKxScalingGroupCommand";
import { CreateKxUserCommandInput, CreateKxUserCommandOutput } from "../commands/CreateKxUserCommand";
import { CreateKxVolumeCommandInput, CreateKxVolumeCommandOutput } from "../commands/CreateKxVolumeCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import { DeleteKxClusterCommandInput, DeleteKxClusterCommandOutput } from "../commands/DeleteKxClusterCommand";
import {
  DeleteKxClusterNodeCommandInput,
  DeleteKxClusterNodeCommandOutput,
} from "../commands/DeleteKxClusterNodeCommand";
import { DeleteKxDatabaseCommandInput, DeleteKxDatabaseCommandOutput } from "../commands/DeleteKxDatabaseCommand";
import { DeleteKxDataviewCommandInput, DeleteKxDataviewCommandOutput } from "../commands/DeleteKxDataviewCommand";
import {
  DeleteKxEnvironmentCommandInput,
  DeleteKxEnvironmentCommandOutput,
} from "../commands/DeleteKxEnvironmentCommand";
import {
  DeleteKxScalingGroupCommandInput,
  DeleteKxScalingGroupCommandOutput,
} from "../commands/DeleteKxScalingGroupCommand";
import { DeleteKxUserCommandInput, DeleteKxUserCommandOutput } from "../commands/DeleteKxUserCommand";
import { DeleteKxVolumeCommandInput, DeleteKxVolumeCommandOutput } from "../commands/DeleteKxVolumeCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import { GetKxChangesetCommandInput, GetKxChangesetCommandOutput } from "../commands/GetKxChangesetCommand";
import { GetKxClusterCommandInput, GetKxClusterCommandOutput } from "../commands/GetKxClusterCommand";
import {
  GetKxConnectionStringCommandInput,
  GetKxConnectionStringCommandOutput,
} from "../commands/GetKxConnectionStringCommand";
import { GetKxDatabaseCommandInput, GetKxDatabaseCommandOutput } from "../commands/GetKxDatabaseCommand";
import { GetKxDataviewCommandInput, GetKxDataviewCommandOutput } from "../commands/GetKxDataviewCommand";
import { GetKxEnvironmentCommandInput, GetKxEnvironmentCommandOutput } from "../commands/GetKxEnvironmentCommand";
import { GetKxScalingGroupCommandInput, GetKxScalingGroupCommandOutput } from "../commands/GetKxScalingGroupCommand";
import { GetKxUserCommandInput, GetKxUserCommandOutput } from "../commands/GetKxUserCommand";
import { GetKxVolumeCommandInput, GetKxVolumeCommandOutput } from "../commands/GetKxVolumeCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import { ListKxChangesetsCommandInput, ListKxChangesetsCommandOutput } from "../commands/ListKxChangesetsCommand";
import { ListKxClusterNodesCommandInput, ListKxClusterNodesCommandOutput } from "../commands/ListKxClusterNodesCommand";
import { ListKxClustersCommandInput, ListKxClustersCommandOutput } from "../commands/ListKxClustersCommand";
import { ListKxDatabasesCommandInput, ListKxDatabasesCommandOutput } from "../commands/ListKxDatabasesCommand";
import { ListKxDataviewsCommandInput, ListKxDataviewsCommandOutput } from "../commands/ListKxDataviewsCommand";
import { ListKxEnvironmentsCommandInput, ListKxEnvironmentsCommandOutput } from "../commands/ListKxEnvironmentsCommand";
import {
  ListKxScalingGroupsCommandInput,
  ListKxScalingGroupsCommandOutput,
} from "../commands/ListKxScalingGroupsCommand";
import { ListKxUsersCommandInput, ListKxUsersCommandOutput } from "../commands/ListKxUsersCommand";
import { ListKxVolumesCommandInput, ListKxVolumesCommandOutput } from "../commands/ListKxVolumesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateKxClusterCodeConfigurationCommandInput,
  UpdateKxClusterCodeConfigurationCommandOutput,
} from "../commands/UpdateKxClusterCodeConfigurationCommand";
import {
  UpdateKxClusterDatabasesCommandInput,
  UpdateKxClusterDatabasesCommandOutput,
} from "../commands/UpdateKxClusterDatabasesCommand";
import { UpdateKxDatabaseCommandInput, UpdateKxDatabaseCommandOutput } from "../commands/UpdateKxDatabaseCommand";
import { UpdateKxDataviewCommandInput, UpdateKxDataviewCommandOutput } from "../commands/UpdateKxDataviewCommand";
import {
  UpdateKxEnvironmentCommandInput,
  UpdateKxEnvironmentCommandOutput,
} from "../commands/UpdateKxEnvironmentCommand";
import {
  UpdateKxEnvironmentNetworkCommandInput,
  UpdateKxEnvironmentNetworkCommandOutput,
} from "../commands/UpdateKxEnvironmentNetworkCommand";
import { UpdateKxUserCommandInput, UpdateKxUserCommandOutput } from "../commands/UpdateKxUserCommand";
import { UpdateKxVolumeCommandInput, UpdateKxVolumeCommandOutput } from "../commands/UpdateKxVolumeCommand";
import { FinspaceServiceException as __BaseException } from "../models/FinspaceServiceException";
import {
  AccessDeniedException,
  AutoScalingConfiguration,
  CapacityConfiguration,
  ChangeRequest,
  CodeConfiguration,
  ConflictException,
  CustomDNSServer,
  FederationParameters,
  IcmpTypeCode,
  InternalServerException,
  InvalidRequestException,
  KxCacheStorageConfiguration,
  KxChangesetListEntry,
  KxCluster,
  KxClusterCodeDeploymentConfiguration,
  KxCommandLineArgument,
  KxDatabaseCacheConfiguration,
  KxDatabaseConfiguration,
  KxDatabaseListEntry,
  KxDataviewActiveVersion,
  KxDataviewConfiguration,
  KxDataviewListEntry,
  KxDataviewSegmentConfiguration,
  KxDeploymentConfiguration,
  KxEnvironment,
  KxNAS1Configuration,
  KxNode,
  KxSavedownStorageConfiguration,
  KxScalingGroup,
  KxScalingGroupConfiguration,
  KxUser,
  KxVolume,
  LimitExceededException,
  NetworkACLEntry,
  PortRange,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SuperuserParameters,
  ThrottlingException,
  TickerplantLogConfiguration,
  TransitGatewayConfiguration,
  ValidationException,
  VpcConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/environment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataBundles: (_) => _json(_),
      description: [],
      federationMode: [],
      federationParameters: (_) => _json(_),
      kmsKeyId: [],
      name: [],
      superuserParameters: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxChangesetCommand
 */
export const se_CreateKxChangesetCommand = async (
  input: CreateKxChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/changesets");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      changeRequests: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxClusterCommand
 */
export const se_CreateKxClusterCommand = async (
  input: CreateKxClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/clusters");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoScalingConfiguration: (_) => se_AutoScalingConfiguration(_, context),
      availabilityZoneId: [],
      azMode: [],
      cacheStorageConfigurations: (_) => _json(_),
      capacityConfiguration: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      clusterDescription: [],
      clusterName: [],
      clusterType: [],
      code: (_) => _json(_),
      commandLineArguments: (_) => _json(_),
      databases: (_) => _json(_),
      executionRole: [],
      initializationScript: [],
      releaseLabel: [],
      savedownStorageConfiguration: (_) => _json(_),
      scalingGroupConfiguration: (_) => se_KxScalingGroupConfiguration(_, context),
      tags: (_) => _json(_),
      tickerplantLogConfiguration: (_) => _json(_),
      vpcConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxDatabaseCommand
 */
export const se_CreateKxDatabaseCommand = async (
  input: CreateKxDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/databases");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      databaseName: [],
      description: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxDataviewCommand
 */
export const se_CreateKxDataviewCommand = async (
  input: CreateKxDataviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/dataviews");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      autoUpdate: [],
      availabilityZoneId: [],
      azMode: [],
      changesetId: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      dataviewName: [],
      description: [],
      readWrite: [],
      segmentConfigurations: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxEnvironmentCommand
 */
export const se_CreateKxEnvironmentCommand = async (
  input: CreateKxEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      kmsKeyId: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxScalingGroupCommand
 */
export const se_CreateKxScalingGroupCommand = async (
  input: CreateKxScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/scalingGroups");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      availabilityZoneId: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      hostType: [],
      scalingGroupName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxUserCommand
 */
export const se_CreateKxUserCommand = async (
  input: CreateKxUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/users");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      iamRole: [],
      tags: (_) => _json(_),
      userName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateKxVolumeCommand
 */
export const se_CreateKxVolumeCommand = async (
  input: CreateKxVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/kxvolumes");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      availabilityZoneIds: (_) => _json(_),
      azMode: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      nas1Configuration: (_) => _json(_),
      tags: (_) => _json(_),
      volumeName: [],
      volumeType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/environment/{environmentId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxClusterCommand
 */
export const se_DeleteKxClusterCommand = async (
  input: DeleteKxClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/clusters/{clusterName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxClusterNodeCommand
 */
export const se_DeleteKxClusterNodeCommand = async (
  input: DeleteKxClusterNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/clusters/{clusterName}/nodes/{nodeId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  b.p("nodeId", () => input.nodeId!, "{nodeId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxDatabaseCommand
 */
export const se_DeleteKxDatabaseCommand = async (
  input: DeleteKxDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  const query: any = map({
    [_cT]: [, __expectNonNull(input[_cT]!, `clientToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxDataviewCommand
 */
export const se_DeleteKxDataviewCommand = async (
  input: DeleteKxDataviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  b.p("dataviewName", () => input.dataviewName!, "{dataviewName}", false);
  const query: any = map({
    [_cT]: [, __expectNonNull(input[_cT]!, `clientToken`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxEnvironmentCommand
 */
export const se_DeleteKxEnvironmentCommand = async (
  input: DeleteKxEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxScalingGroupCommand
 */
export const se_DeleteKxScalingGroupCommand = async (
  input: DeleteKxScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/scalingGroups/{scalingGroupName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("scalingGroupName", () => input.scalingGroupName!, "{scalingGroupName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxUserCommand
 */
export const se_DeleteKxUserCommand = async (
  input: DeleteKxUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/users/{userName}");
  b.p("userName", () => input.userName!, "{userName}", false);
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteKxVolumeCommand
 */
export const se_DeleteKxVolumeCommand = async (
  input: DeleteKxVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/kxvolumes/{volumeName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("volumeName", () => input.volumeName!, "{volumeName}", false);
  const query: any = map({
    [_cT]: [, input[_cT] ?? generateIdempotencyToken()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/environment/{environmentId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxChangesetCommand
 */
export const se_GetKxChangesetCommand = async (
  input: GetKxChangesetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/changesets/{changesetId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  b.p("changesetId", () => input.changesetId!, "{changesetId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxClusterCommand
 */
export const se_GetKxClusterCommand = async (
  input: GetKxClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/clusters/{clusterName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxConnectionStringCommand
 */
export const se_GetKxConnectionStringCommand = async (
  input: GetKxConnectionStringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/connectionString");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_uA]: [, __expectNonNull(input[_uA]!, `userArn`)],
    [_cN]: [, __expectNonNull(input[_cN]!, `clusterName`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxDatabaseCommand
 */
export const se_GetKxDatabaseCommand = async (
  input: GetKxDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxDataviewCommand
 */
export const se_GetKxDataviewCommand = async (
  input: GetKxDataviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  b.p("dataviewName", () => input.dataviewName!, "{dataviewName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxEnvironmentCommand
 */
export const se_GetKxEnvironmentCommand = async (
  input: GetKxEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxScalingGroupCommand
 */
export const se_GetKxScalingGroupCommand = async (
  input: GetKxScalingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/scalingGroups/{scalingGroupName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("scalingGroupName", () => input.scalingGroupName!, "{scalingGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxUserCommand
 */
export const se_GetKxUserCommand = async (
  input: GetKxUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/users/{userName}");
  b.p("userName", () => input.userName!, "{userName}", false);
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetKxVolumeCommand
 */
export const se_GetKxVolumeCommand = async (
  input: GetKxVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/kxvolumes/{volumeName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("volumeName", () => input.volumeName!, "{volumeName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/environment");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxChangesetsCommand
 */
export const se_ListKxChangesetsCommand = async (
  input: ListKxChangesetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/changesets");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxClusterNodesCommand
 */
export const se_ListKxClusterNodesCommand = async (
  input: ListKxClusterNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/clusters/{clusterName}/nodes");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxClustersCommand
 */
export const se_ListKxClustersCommand = async (
  input: ListKxClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/clusters");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_cTl]: [, input[_cTl]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxDatabasesCommand
 */
export const se_ListKxDatabasesCommand = async (
  input: ListKxDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxDataviewsCommand
 */
export const se_ListKxDataviewsCommand = async (
  input: ListKxDataviewsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/dataviews");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxEnvironmentsCommand
 */
export const se_ListKxEnvironmentsCommand = async (
  input: ListKxEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxScalingGroupsCommand
 */
export const se_ListKxScalingGroupsCommand = async (
  input: ListKxScalingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/scalingGroups");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxUsersCommand
 */
export const se_ListKxUsersCommand = async (
  input: ListKxUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/users");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListKxVolumesCommand
 */
export const se_ListKxVolumesCommand = async (
  input: ListKxVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/kx/environments/{environmentId}/kxvolumes");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_vT]: [, input[_vT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/environment/{environmentId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      federationMode: [],
      federationParameters: (_) => _json(_),
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxClusterCodeConfigurationCommand
 */
export const se_UpdateKxClusterCodeConfigurationCommand = async (
  input: UpdateKxClusterCodeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/clusters/{clusterName}/configuration/code");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      code: (_) => _json(_),
      commandLineArguments: (_) => _json(_),
      deploymentConfiguration: (_) => _json(_),
      initializationScript: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxClusterDatabasesCommand
 */
export const se_UpdateKxClusterDatabasesCommand = async (
  input: UpdateKxClusterDatabasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/clusters/{clusterName}/configuration/databases");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      databases: (_) => _json(_),
      deploymentConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxDatabaseCommand
 */
export const se_UpdateKxDatabaseCommand = async (
  input: UpdateKxDatabaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxDataviewCommand
 */
export const se_UpdateKxDataviewCommand = async (
  input: UpdateKxDataviewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/databases/{databaseName}/dataviews/{dataviewName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("databaseName", () => input.databaseName!, "{databaseName}", false);
  b.p("dataviewName", () => input.dataviewName!, "{dataviewName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      changesetId: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      segmentConfigurations: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxEnvironmentCommand
 */
export const se_UpdateKxEnvironmentCommand = async (
  input: UpdateKxEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxEnvironmentNetworkCommand
 */
export const se_UpdateKxEnvironmentNetworkCommand = async (
  input: UpdateKxEnvironmentNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/network");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customDNSConfiguration: (_) => _json(_),
      transitGatewayConfiguration: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxUserCommand
 */
export const se_UpdateKxUserCommand = async (
  input: UpdateKxUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/users/{userName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("userName", () => input.userName!, "{userName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      iamRole: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateKxVolumeCommand
 */
export const se_UpdateKxVolumeCommand = async (
  input: UpdateKxVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/kx/environments/{environmentId}/kxvolumes/{volumeName}");
  b.p("environmentId", () => input.environmentId!, "{environmentId}", false);
  b.p("volumeName", () => input.volumeName!, "{volumeName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      nas1Configuration: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environmentArn: __expectString,
    environmentId: __expectString,
    environmentUrl: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxChangesetCommand
 */
export const de_CreateKxChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    changeRequests: _json,
    changesetId: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    environmentId: __expectString,
    errorInfo: _json,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxClusterCommand
 */
export const de_CreateKxClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoScalingConfiguration: (_) => de_AutoScalingConfiguration(_, context),
    availabilityZoneId: __expectString,
    azMode: __expectString,
    cacheStorageConfigurations: _json,
    capacityConfiguration: _json,
    clusterDescription: __expectString,
    clusterName: __expectString,
    clusterType: __expectString,
    code: _json,
    commandLineArguments: _json,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databases: _json,
    environmentId: __expectString,
    executionRole: __expectString,
    initializationScript: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    releaseLabel: __expectString,
    savedownStorageConfiguration: _json,
    scalingGroupConfiguration: (_) => de_KxScalingGroupConfiguration(_, context),
    status: __expectString,
    statusReason: __expectString,
    tickerplantLogConfiguration: _json,
    volumes: _json,
    vpcConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxDatabaseCommand
 */
export const de_CreateKxDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxDatabaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseArn: __expectString,
    databaseName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxDataviewCommand
 */
export const de_CreateKxDataviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxDataviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoUpdate: __expectBoolean,
    availabilityZoneId: __expectString,
    azMode: __expectString,
    changesetId: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    dataviewName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    readWrite: __expectBoolean,
    segmentConfigurations: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxEnvironmentCommand
 */
export const de_CreateKxEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    environmentArn: __expectString,
    environmentId: __expectString,
    kmsKeyId: __expectString,
    name: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxScalingGroupCommand
 */
export const de_CreateKxScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxScalingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    availabilityZoneId: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    environmentId: __expectString,
    hostType: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    scalingGroupName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxUserCommand
 */
export const de_CreateKxUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environmentId: __expectString,
    iamRole: __expectString,
    userArn: __expectString,
    userName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateKxVolumeCommand
 */
export const de_CreateKxVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateKxVolumeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    availabilityZoneIds: _json,
    azMode: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    environmentId: __expectString,
    nas1Configuration: _json,
    status: __expectString,
    statusReason: __expectString,
    volumeArn: __expectString,
    volumeName: __expectString,
    volumeType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxClusterCommand
 */
export const de_DeleteKxClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxClusterNodeCommand
 */
export const de_DeleteKxClusterNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxClusterNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxDatabaseCommand
 */
export const de_DeleteKxDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxDatabaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxDataviewCommand
 */
export const de_DeleteKxDataviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxDataviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxEnvironmentCommand
 */
export const de_DeleteKxEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxScalingGroupCommand
 */
export const de_DeleteKxScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxScalingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxUserCommand
 */
export const de_DeleteKxUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteKxVolumeCommand
 */
export const de_DeleteKxVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteKxVolumeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environment: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxChangesetCommand
 */
export const de_GetKxChangesetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxChangesetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeFromTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    changeRequests: _json,
    changesetId: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    environmentId: __expectString,
    errorInfo: _json,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxClusterCommand
 */
export const de_GetKxClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    autoScalingConfiguration: (_) => de_AutoScalingConfiguration(_, context),
    availabilityZoneId: __expectString,
    azMode: __expectString,
    cacheStorageConfigurations: _json,
    capacityConfiguration: _json,
    clusterDescription: __expectString,
    clusterName: __expectString,
    clusterType: __expectString,
    code: _json,
    commandLineArguments: _json,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databases: _json,
    executionRole: __expectString,
    initializationScript: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    releaseLabel: __expectString,
    savedownStorageConfiguration: _json,
    scalingGroupConfiguration: (_) => de_KxScalingGroupConfiguration(_, context),
    status: __expectString,
    statusReason: __expectString,
    tickerplantLogConfiguration: _json,
    volumes: _json,
    vpcConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxConnectionStringCommand
 */
export const de_GetKxConnectionStringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxConnectionStringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    signedConnectionString: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxDatabaseCommand
 */
export const de_GetKxDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxDatabaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseArn: __expectString,
    databaseName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastCompletedChangesetId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    numBytes: __expectLong,
    numChangesets: __expectInt32,
    numFiles: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxDataviewCommand
 */
export const de_GetKxDataviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxDataviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeVersions: (_) => de_KxDataviewActiveVersionList(_, context),
    autoUpdate: __expectBoolean,
    availabilityZoneId: __expectString,
    azMode: __expectString,
    changesetId: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    dataviewName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    readWrite: __expectBoolean,
    segmentConfigurations: _json,
    status: __expectString,
    statusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxEnvironmentCommand
 */
export const de_GetKxEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    availabilityZoneIds: _json,
    awsAccountId: __expectString,
    certificateAuthorityArn: __expectString,
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customDNSConfiguration: _json,
    dedicatedServiceAccountId: __expectString,
    description: __expectString,
    dnsStatus: __expectString,
    environmentArn: __expectString,
    environmentId: __expectString,
    errorMessage: __expectString,
    kmsKeyId: __expectString,
    name: __expectString,
    status: __expectString,
    tgwStatus: __expectString,
    transitGatewayConfiguration: _json,
    updateTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxScalingGroupCommand
 */
export const de_GetKxScalingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxScalingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    availabilityZoneId: __expectString,
    clusters: _json,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    hostType: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    scalingGroupArn: __expectString,
    scalingGroupName: __expectString,
    status: __expectString,
    statusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxUserCommand
 */
export const de_GetKxUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environmentId: __expectString,
    iamRole: __expectString,
    userArn: __expectString,
    userName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetKxVolumeCommand
 */
export const de_GetKxVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetKxVolumeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachedClusters: _json,
    availabilityZoneIds: _json,
    azMode: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nas1Configuration: _json,
    status: __expectString,
    statusReason: __expectString,
    volumeArn: __expectString,
    volumeName: __expectString,
    volumeType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environments: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxChangesetsCommand
 */
export const de_ListKxChangesetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxChangesetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kxChangesets: (_) => de_KxChangesets(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxClusterNodesCommand
 */
export const de_ListKxClusterNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxClusterNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    nodes: (_) => de_KxNodeSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxClustersCommand
 */
export const de_ListKxClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kxClusterSummaries: (_) => de_KxClusters(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxDatabasesCommand
 */
export const de_ListKxDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxDatabasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kxDatabases: (_) => de_KxDatabases(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxDataviewsCommand
 */
export const de_ListKxDataviewsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxDataviewsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kxDataviews: (_) => de_KxDataviews(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxEnvironmentsCommand
 */
export const de_ListKxEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxEnvironmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environments: (_) => de_KxEnvironmentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxScalingGroupsCommand
 */
export const de_ListKxScalingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxScalingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    scalingGroups: (_) => de_KxScalingGroupList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxUsersCommand
 */
export const de_ListKxUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    users: (_) => de_KxUserList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListKxVolumesCommand
 */
export const de_ListKxVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKxVolumesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    kxVolumeSummaries: (_) => de_KxVolumes(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environment: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxClusterCodeConfigurationCommand
 */
export const de_UpdateKxClusterCodeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxClusterCodeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxClusterDatabasesCommand
 */
export const de_UpdateKxClusterDatabasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxClusterDatabasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxDatabaseCommand
 */
export const de_UpdateKxDatabaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxDatabaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    databaseName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxDataviewCommand
 */
export const de_UpdateKxDataviewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxDataviewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    activeVersions: (_) => de_KxDataviewActiveVersionList(_, context),
    autoUpdate: __expectBoolean,
    availabilityZoneId: __expectString,
    azMode: __expectString,
    changesetId: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    dataviewName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    readWrite: __expectBoolean,
    segmentConfigurations: _json,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxEnvironmentCommand
 */
export const de_UpdateKxEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxEnvironmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    availabilityZoneIds: _json,
    awsAccountId: __expectString,
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customDNSConfiguration: _json,
    dedicatedServiceAccountId: __expectString,
    description: __expectString,
    dnsStatus: __expectString,
    environmentArn: __expectString,
    environmentId: __expectString,
    errorMessage: __expectString,
    kmsKeyId: __expectString,
    name: __expectString,
    status: __expectString,
    tgwStatus: __expectString,
    transitGatewayConfiguration: _json,
    updateTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxEnvironmentNetworkCommand
 */
export const de_UpdateKxEnvironmentNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxEnvironmentNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    availabilityZoneIds: _json,
    awsAccountId: __expectString,
    creationTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customDNSConfiguration: _json,
    dedicatedServiceAccountId: __expectString,
    description: __expectString,
    dnsStatus: __expectString,
    environmentArn: __expectString,
    environmentId: __expectString,
    errorMessage: __expectString,
    kmsKeyId: __expectString,
    name: __expectString,
    status: __expectString,
    tgwStatus: __expectString,
    transitGatewayConfiguration: _json,
    updateTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxUserCommand
 */
export const de_UpdateKxUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    environmentId: __expectString,
    iamRole: __expectString,
    userArn: __expectString,
    userName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateKxVolumeCommand
 */
export const de_UpdateKxVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateKxVolumeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    attachedClusters: _json,
    availabilityZoneIds: _json,
    azMode: __expectString,
    createdTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nas1Configuration: _json,
    status: __expectString,
    statusReason: __expectString,
    volumeArn: __expectString,
    volumeName: __expectString,
    volumeType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.finspace#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.finspace#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.finspace#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.finspace#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.finspace#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.finspace#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.finspace#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.finspace#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.finspace#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.finspace#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AttributeMap omitted.

/**
 * serializeAws_restJson1AutoScalingConfiguration
 */
const se_AutoScalingConfiguration = (input: AutoScalingConfiguration, context: __SerdeContext): any => {
  return take(input, {
    autoScalingMetric: [],
    maxNodeCount: [],
    metricTarget: __serializeFloat,
    minNodeCount: [],
    scaleInCooldownSeconds: __serializeFloat,
    scaleOutCooldownSeconds: __serializeFloat,
  });
};

// se_AvailabilityZoneIds omitted.

// se_CapacityConfiguration omitted.

// se_ChangeRequest omitted.

// se_ChangeRequests omitted.

// se_CodeConfiguration omitted.

// se_CustomDNSConfiguration omitted.

// se_CustomDNSServer omitted.

// se_DataBundleArns omitted.

// se_DbPaths omitted.

// se_FederationParameters omitted.

// se_IcmpTypeCode omitted.

// se_KxCacheStorageConfiguration omitted.

// se_KxCacheStorageConfigurations omitted.

// se_KxClusterCodeDeploymentConfiguration omitted.

// se_KxCommandLineArgument omitted.

// se_KxCommandLineArguments omitted.

// se_KxDatabaseCacheConfiguration omitted.

// se_KxDatabaseCacheConfigurations omitted.

// se_KxDatabaseConfiguration omitted.

// se_KxDatabaseConfigurations omitted.

// se_KxDataviewConfiguration omitted.

// se_KxDataviewSegmentConfiguration omitted.

// se_KxDataviewSegmentConfigurationList omitted.

// se_KxDeploymentConfiguration omitted.

// se_KxNAS1Configuration omitted.

// se_KxSavedownStorageConfiguration omitted.

/**
 * serializeAws_restJson1KxScalingGroupConfiguration
 */
const se_KxScalingGroupConfiguration = (input: KxScalingGroupConfiguration, context: __SerdeContext): any => {
  return take(input, {
    cpu: __serializeFloat,
    memoryLimit: [],
    memoryReservation: [],
    nodeCount: [],
    scalingGroupName: [],
  });
};

// se_NetworkACLConfiguration omitted.

// se_NetworkACLEntry omitted.

// se_PortRange omitted.

// se_SecurityGroupIdList omitted.

// se_SegmentConfigurationDbPathList omitted.

// se_SubnetIdList omitted.

// se_SuperuserParameters omitted.

// se_TagMap omitted.

// se_TickerplantLogConfiguration omitted.

// se_TickerplantLogVolumes omitted.

// se_TransitGatewayConfiguration omitted.

// se_VpcConfiguration omitted.

// de_AttachedClusterList omitted.

// de_AttributeMap omitted.

/**
 * deserializeAws_restJson1AutoScalingConfiguration
 */
const de_AutoScalingConfiguration = (output: any, context: __SerdeContext): AutoScalingConfiguration => {
  return take(output, {
    autoScalingMetric: __expectString,
    maxNodeCount: __expectInt32,
    metricTarget: __limitedParseDouble,
    minNodeCount: __expectInt32,
    scaleInCooldownSeconds: __limitedParseDouble,
    scaleOutCooldownSeconds: __limitedParseDouble,
  }) as any;
};

// de_AvailabilityZoneIds omitted.

// de_CapacityConfiguration omitted.

// de_ChangeRequest omitted.

// de_ChangeRequests omitted.

// de_CodeConfiguration omitted.

// de_CustomDNSConfiguration omitted.

// de_CustomDNSServer omitted.

// de_DbPaths omitted.

// de_Environment omitted.

// de_EnvironmentList omitted.

// de_ErrorInfo omitted.

// de_FederationParameters omitted.

// de_IcmpTypeCode omitted.

// de_KxAttachedCluster omitted.

// de_KxAttachedClusters omitted.

// de_KxCacheStorageConfiguration omitted.

// de_KxCacheStorageConfigurations omitted.

/**
 * deserializeAws_restJson1KxChangesetListEntry
 */
const de_KxChangesetListEntry = (output: any, context: __SerdeContext): KxChangesetListEntry => {
  return take(output, {
    activeFromTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    changesetId: __expectString,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxChangesets
 */
const de_KxChangesets = (output: any, context: __SerdeContext): KxChangesetListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxChangesetListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KxCluster
 */
const de_KxCluster = (output: any, context: __SerdeContext): KxCluster => {
  return take(output, {
    availabilityZoneId: __expectString,
    azMode: __expectString,
    clusterDescription: __expectString,
    clusterName: __expectString,
    clusterType: __expectString,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    executionRole: __expectString,
    initializationScript: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    releaseLabel: __expectString,
    status: __expectString,
    statusReason: __expectString,
    volumes: _json,
  }) as any;
};

// de_KxClusterNameList omitted.

/**
 * deserializeAws_restJson1KxClusters
 */
const de_KxClusters = (output: any, context: __SerdeContext): KxCluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxCluster(entry, context);
    });
  return retVal;
};

// de_KxCommandLineArgument omitted.

// de_KxCommandLineArguments omitted.

// de_KxDatabaseCacheConfiguration omitted.

// de_KxDatabaseCacheConfigurations omitted.

// de_KxDatabaseConfiguration omitted.

// de_KxDatabaseConfigurations omitted.

/**
 * deserializeAws_restJson1KxDatabaseListEntry
 */
const de_KxDatabaseListEntry = (output: any, context: __SerdeContext): KxDatabaseListEntry => {
  return take(output, {
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1KxDatabases
 */
const de_KxDatabases = (output: any, context: __SerdeContext): KxDatabaseListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxDatabaseListEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KxDataviewActiveVersion
 */
const de_KxDataviewActiveVersion = (output: any, context: __SerdeContext): KxDataviewActiveVersion => {
  return take(output, {
    attachedClusters: _json,
    changesetId: __expectString,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    segmentConfigurations: _json,
    versionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxDataviewActiveVersionList
 */
const de_KxDataviewActiveVersionList = (output: any, context: __SerdeContext): KxDataviewActiveVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxDataviewActiveVersion(entry, context);
    });
  return retVal;
};

// de_KxDataviewConfiguration omitted.

/**
 * deserializeAws_restJson1KxDataviewListEntry
 */
const de_KxDataviewListEntry = (output: any, context: __SerdeContext): KxDataviewListEntry => {
  return take(output, {
    activeVersions: (_: any) => de_KxDataviewActiveVersionList(_, context),
    autoUpdate: __expectBoolean,
    availabilityZoneId: __expectString,
    azMode: __expectString,
    changesetId: __expectString,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    databaseName: __expectString,
    dataviewName: __expectString,
    description: __expectString,
    environmentId: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    readWrite: __expectBoolean,
    segmentConfigurations: _json,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxDataviews
 */
const de_KxDataviews = (output: any, context: __SerdeContext): KxDataviewListEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxDataviewListEntry(entry, context);
    });
  return retVal;
};

// de_KxDataviewSegmentConfiguration omitted.

// de_KxDataviewSegmentConfigurationList omitted.

/**
 * deserializeAws_restJson1KxEnvironment
 */
const de_KxEnvironment = (output: any, context: __SerdeContext): KxEnvironment => {
  return take(output, {
    availabilityZoneIds: _json,
    awsAccountId: __expectString,
    certificateAuthorityArn: __expectString,
    creationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customDNSConfiguration: _json,
    dedicatedServiceAccountId: __expectString,
    description: __expectString,
    dnsStatus: __expectString,
    environmentArn: __expectString,
    environmentId: __expectString,
    errorMessage: __expectString,
    kmsKeyId: __expectString,
    name: __expectString,
    status: __expectString,
    tgwStatus: __expectString,
    transitGatewayConfiguration: _json,
    updateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1KxEnvironmentList
 */
const de_KxEnvironmentList = (output: any, context: __SerdeContext): KxEnvironment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxEnvironment(entry, context);
    });
  return retVal;
};

// de_KxNAS1Configuration omitted.

/**
 * deserializeAws_restJson1KxNode
 */
const de_KxNode = (output: any, context: __SerdeContext): KxNode => {
  return take(output, {
    availabilityZoneId: __expectString,
    launchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nodeId: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxNodeSummaries
 */
const de_KxNodeSummaries = (output: any, context: __SerdeContext): KxNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxNode(entry, context);
    });
  return retVal;
};

// de_KxSavedownStorageConfiguration omitted.

/**
 * deserializeAws_restJson1KxScalingGroup
 */
const de_KxScalingGroup = (output: any, context: __SerdeContext): KxScalingGroup => {
  return take(output, {
    availabilityZoneId: __expectString,
    clusters: _json,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    hostType: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    scalingGroupName: __expectString,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxScalingGroupConfiguration
 */
const de_KxScalingGroupConfiguration = (output: any, context: __SerdeContext): KxScalingGroupConfiguration => {
  return take(output, {
    cpu: __limitedParseDouble,
    memoryLimit: __expectInt32,
    memoryReservation: __expectInt32,
    nodeCount: __expectInt32,
    scalingGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxScalingGroupList
 */
const de_KxScalingGroupList = (output: any, context: __SerdeContext): KxScalingGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxScalingGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KxUser
 */
const de_KxUser = (output: any, context: __SerdeContext): KxUser => {
  return take(output, {
    createTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    iamRole: __expectString,
    updateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    userArn: __expectString,
    userName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxUserList
 */
const de_KxUserList = (output: any, context: __SerdeContext): KxUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxUser(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KxVolume
 */
const de_KxVolume = (output: any, context: __SerdeContext): KxVolume => {
  return take(output, {
    availabilityZoneIds: _json,
    azMode: __expectString,
    createdTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    statusReason: __expectString,
    volumeName: __expectString,
    volumeType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1KxVolumes
 */
const de_KxVolumes = (output: any, context: __SerdeContext): KxVolume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_KxVolume(entry, context);
    });
  return retVal;
};

// de_NetworkACLConfiguration omitted.

// de_NetworkACLEntry omitted.

// de_PortRange omitted.

// de_SecurityGroupIdList omitted.

// de_SegmentConfigurationDbPathList omitted.

// de_SubnetIdList omitted.

// de_TagMap omitted.

// de_TickerplantLogConfiguration omitted.

// de_TickerplantLogVolumes omitted.

// de_TransitGatewayConfiguration omitted.

// de_Volume omitted.

// de_Volumes omitted.

// de_VpcConfiguration omitted.

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

const _cN = "clusterName";
const _cT = "clientToken";
const _cTl = "clusterType";
const _mR = "maxResults";
const _nT = "nextToken";
const _tK = "tagKeys";
const _uA = "userArn";
const _vT = "volumeType";
