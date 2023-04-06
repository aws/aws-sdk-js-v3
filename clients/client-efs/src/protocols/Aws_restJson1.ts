// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "../commands/CreateAccessPointCommand";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "../commands/CreateFileSystemCommand";
import { CreateMountTargetCommandInput, CreateMountTargetCommandOutput } from "../commands/CreateMountTargetCommand";
import {
  CreateReplicationConfigurationCommandInput,
  CreateReplicationConfigurationCommandOutput,
} from "../commands/CreateReplicationConfigurationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "../commands/DeleteAccessPointCommand";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "../commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "../commands/DeleteFileSystemPolicyCommand";
import { DeleteMountTargetCommandInput, DeleteMountTargetCommandOutput } from "../commands/DeleteMountTargetCommand";
import {
  DeleteReplicationConfigurationCommandInput,
  DeleteReplicationConfigurationCommandOutput,
} from "../commands/DeleteReplicationConfigurationCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "../commands/DescribeAccessPointsCommand";
import {
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
} from "../commands/DescribeAccountPreferencesCommand";
import {
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "../commands/DescribeBackupPolicyCommand";
import {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "../commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "../commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "../commands/DescribeMountTargetsCommand";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "../commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput,
} from "../commands/DescribeReplicationConfigurationsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "../commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
} from "../commands/PutAccountPreferencesCommand";
import { PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput } from "../commands/PutBackupPolicyCommand";
import {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "../commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "../commands/PutLifecycleConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "../commands/UpdateFileSystemCommand";
import { EFSServiceException as __BaseException } from "../models/EFSServiceException";
import {
  AccessPointAlreadyExists,
  AccessPointDescription,
  AccessPointLimitExceeded,
  AccessPointNotFound,
  AvailabilityZonesMismatch,
  BackupPolicy,
  BadRequest,
  CreationInfo,
  DependencyTimeout,
  Destination,
  DestinationToCreate,
  FileSystemAlreadyExists,
  FileSystemDescription,
  FileSystemInUse,
  FileSystemLimitExceeded,
  FileSystemNotFound,
  FileSystemSize,
  IncorrectFileSystemLifeCycleState,
  IncorrectMountTargetState,
  InsufficientThroughputCapacity,
  InternalServerError,
  InvalidPolicyException,
  IpAddressInUse,
  LifecyclePolicy,
  MountTargetConflict,
  MountTargetDescription,
  MountTargetNotFound,
  NetworkInterfaceLimitExceeded,
  NoFreeAddressesInSubnet,
  PolicyNotFound,
  PosixUser,
  ReplicationConfigurationDescription,
  ReplicationNotFound,
  Resource,
  ResourceIdPreference,
  RootDirectory,
  SecurityGroupLimitExceeded,
  SecurityGroupNotFound,
  SubnetNotFound,
  Tag,
  ThrottlingException,
  ThroughputLimitExceeded,
  TooManyRequests,
  UnsupportedAvailabilityZone,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAccessPointCommand
 */
export const se_CreateAccessPointCommand = async (
  input: CreateAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/access-points";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.PosixUser != null && { PosixUser: se_PosixUser(input.PosixUser, context) }),
    ...(input.RootDirectory != null && { RootDirectory: se_RootDirectory(input.RootDirectory, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFileSystemCommand
 */
export const se_CreateFileSystemCommand = async (
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZoneName != null && { AvailabilityZoneName: input.AvailabilityZoneName }),
    ...(input.Backup != null && { Backup: input.Backup }),
    CreationToken: input.CreationToken ?? generateIdempotencyToken(),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.PerformanceMode != null && { PerformanceMode: input.PerformanceMode }),
    ...(input.ProvisionedThroughputInMibps != null && {
      ProvisionedThroughputInMibps: __serializeFloat(input.ProvisionedThroughputInMibps),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.ThroughputMode != null && { ThroughputMode: input.ThroughputMode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateMountTargetCommand
 */
export const se_CreateMountTargetCommand = async (
  input: CreateMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/mount-targets";
  let body: any;
  body = JSON.stringify({
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.SecurityGroups != null && { SecurityGroups: se_SecurityGroups(input.SecurityGroups, context) }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateReplicationConfigurationCommand
 */
export const se_CreateReplicationConfigurationCommand = async (
  input: CreateReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceFileSystemId",
    () => input.SourceFileSystemId!,
    "{SourceFileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Destinations != null && { Destinations: se_DestinationsToCreate(input.Destinations, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateTagsCommand
 */
export const se_CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/create-tags/{FileSystemId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAccessPointCommand
 */
export const se_DeleteAccessPointCommand = async (
  input: DeleteAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/access-points/{AccessPointId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AccessPointId",
    () => input.AccessPointId!,
    "{AccessPointId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFileSystemCommand
 */
export const se_DeleteFileSystemCommand = async (
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems/{FileSystemId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFileSystemPolicyCommand
 */
export const se_DeleteFileSystemPolicyCommand = async (
  input: DeleteFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteMountTargetCommand
 */
export const se_DeleteMountTargetCommand = async (
  input: DeleteMountTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/mount-targets/{MountTargetId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MountTargetId",
    () => input.MountTargetId!,
    "{MountTargetId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteReplicationConfigurationCommand
 */
export const se_DeleteReplicationConfigurationCommand = async (
  input: DeleteReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{SourceFileSystemId}/replication-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "SourceFileSystemId",
    () => input.SourceFileSystemId!,
    "{SourceFileSystemId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/delete-tags/{FileSystemId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAccessPointsCommand
 */
export const se_DescribeAccessPointsCommand = async (
  input: DescribeAccessPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/access-points";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
    AccessPointId: [, input.AccessPointId!],
    FileSystemId: [, input.FileSystemId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAccountPreferencesCommand
 */
export const se_DescribeAccountPreferencesCommand = async (
  input: DescribeAccountPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/account-preferences";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeBackupPolicyCommand
 */
export const se_DescribeBackupPolicyCommand = async (
  input: DescribeBackupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeFileSystemPolicyCommand
 */
export const se_DescribeFileSystemPolicyCommand = async (
  input: DescribeFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeFileSystemsCommand
 */
export const se_DescribeFileSystemsCommand = async (
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems";
  const query: any = map({
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    Marker: [, input.Marker!],
    CreationToken: [, input.CreationToken!],
    FileSystemId: [, input.FileSystemId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeLifecycleConfigurationCommand
 */
export const se_DescribeLifecycleConfigurationCommand = async (
  input: DescribeLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeMountTargetsCommand
 */
export const se_DescribeMountTargetsCommand = async (
  input: DescribeMountTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/mount-targets";
  const query: any = map({
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    Marker: [, input.Marker!],
    FileSystemId: [, input.FileSystemId!],
    MountTargetId: [, input.MountTargetId!],
    AccessPointId: [, input.AccessPointId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand
 */
export const se_DescribeMountTargetSecurityGroupsCommand = async (
  input: DescribeMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MountTargetId",
    () => input.MountTargetId!,
    "{MountTargetId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeReplicationConfigurationsCommand
 */
export const se_DescribeReplicationConfigurationsCommand = async (
  input: DescribeReplicationConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/replication-configurations";
  const query: any = map({
    FileSystemId: [, input.FileSystemId!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/tags/{FileSystemId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  const query: any = map({
    MaxItems: [() => input.MaxItems !== void 0, () => input.MaxItems!.toString()],
    Marker: [, input.Marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/resource-tags/{ResourceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand
 */
export const se_ModifyMountTargetSecurityGroupsCommand = async (
  input: ModifyMountTargetSecurityGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MountTargetId",
    () => input.MountTargetId!,
    "{MountTargetId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.SecurityGroups != null && { SecurityGroups: se_SecurityGroups(input.SecurityGroups, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutAccountPreferencesCommand
 */
export const se_PutAccountPreferencesCommand = async (
  input: PutAccountPreferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/account-preferences";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceIdType != null && { ResourceIdType: input.ResourceIdType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutBackupPolicyCommand
 */
export const se_PutBackupPolicyCommand = async (
  input: PutBackupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.BackupPolicy != null && { BackupPolicy: se_BackupPolicy(input.BackupPolicy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutFileSystemPolicyCommand
 */
export const se_PutFileSystemPolicyCommand = async (
  input: PutFileSystemPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.BypassPolicyLockoutSafetyCheck != null && {
      BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
    }),
    ...(input.Policy != null && { Policy: input.Policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutLifecycleConfigurationCommand
 */
export const se_PutLifecycleConfigurationCommand = async (
  input: PutLifecycleConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.LifecyclePolicies != null && {
      LifecyclePolicies: se_LifecyclePolicies(input.LifecyclePolicies, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/resource-tags/{ResourceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/resource-tags/{ResourceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFileSystemCommand
 */
export const se_UpdateFileSystemCommand = async (
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2015-02-01/file-systems/{FileSystemId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FileSystemId",
    () => input.FileSystemId!,
    "{FileSystemId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ProvisionedThroughputInMibps != null && {
      ProvisionedThroughputInMibps: __serializeFloat(input.ProvisionedThroughputInMibps),
    }),
    ...(input.ThroughputMode != null && { ThroughputMode: input.ThroughputMode }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateAccessPointCommand
 */
export const de_CreateAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPointArn != null) {
    contents.AccessPointArn = __expectString(data.AccessPointArn);
  }
  if (data.AccessPointId != null) {
    contents.AccessPointId = __expectString(data.AccessPointId);
  }
  if (data.ClientToken != null) {
    contents.ClientToken = __expectString(data.ClientToken);
  }
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.LifeCycleState != null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OwnerId != null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.PosixUser != null) {
    contents.PosixUser = de_PosixUser(data.PosixUser, context);
  }
  if (data.RootDirectory != null) {
    contents.RootDirectory = de_RootDirectory(data.RootDirectory, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAccessPointCommandError
 */
const de_CreateAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointAlreadyExists":
    case "com.amazonaws.efs#AccessPointAlreadyExists":
      throw await de_AccessPointAlreadyExistsRes(parsedOutput, context);
    case "AccessPointLimitExceeded":
    case "com.amazonaws.efs#AccessPointLimitExceeded":
      throw await de_AccessPointLimitExceededRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.efs#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateFileSystemCommand
 */
export const de_CreateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFileSystemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailabilityZoneId != null) {
    contents.AvailabilityZoneId = __expectString(data.AvailabilityZoneId);
  }
  if (data.AvailabilityZoneName != null) {
    contents.AvailabilityZoneName = __expectString(data.AvailabilityZoneName);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CreationToken != null) {
    contents.CreationToken = __expectString(data.CreationToken);
  }
  if (data.Encrypted != null) {
    contents.Encrypted = __expectBoolean(data.Encrypted);
  }
  if (data.FileSystemArn != null) {
    contents.FileSystemArn = __expectString(data.FileSystemArn);
  }
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.LifeCycleState != null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NumberOfMountTargets != null) {
    contents.NumberOfMountTargets = __expectInt32(data.NumberOfMountTargets);
  }
  if (data.OwnerId != null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.PerformanceMode != null) {
    contents.PerformanceMode = __expectString(data.PerformanceMode);
  }
  if (data.ProvisionedThroughputInMibps != null) {
    contents.ProvisionedThroughputInMibps = __limitedParseDouble(data.ProvisionedThroughputInMibps);
  }
  if (data.SizeInBytes != null) {
    contents.SizeInBytes = de_FileSystemSize(data.SizeInBytes, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  if (data.ThroughputMode != null) {
    contents.ThroughputMode = __expectString(data.ThroughputMode);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFileSystemCommandError
 */
const de_CreateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemAlreadyExists":
    case "com.amazonaws.efs#FileSystemAlreadyExists":
      throw await de_FileSystemAlreadyExistsRes(parsedOutput, context);
    case "FileSystemLimitExceeded":
    case "com.amazonaws.efs#FileSystemLimitExceeded":
      throw await de_FileSystemLimitExceededRes(parsedOutput, context);
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      throw await de_InsufficientThroughputCapacityRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      throw await de_ThroughputLimitExceededRes(parsedOutput, context);
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      throw await de_UnsupportedAvailabilityZoneRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMountTargetCommand
 */
export const de_CreateMountTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMountTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailabilityZoneId != null) {
    contents.AvailabilityZoneId = __expectString(data.AvailabilityZoneId);
  }
  if (data.AvailabilityZoneName != null) {
    contents.AvailabilityZoneName = __expectString(data.AvailabilityZoneName);
  }
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.IpAddress != null) {
    contents.IpAddress = __expectString(data.IpAddress);
  }
  if (data.LifeCycleState != null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.MountTargetId != null) {
    contents.MountTargetId = __expectString(data.MountTargetId);
  }
  if (data.NetworkInterfaceId != null) {
    contents.NetworkInterfaceId = __expectString(data.NetworkInterfaceId);
  }
  if (data.OwnerId != null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.SubnetId != null) {
    contents.SubnetId = __expectString(data.SubnetId);
  }
  if (data.VpcId != null) {
    contents.VpcId = __expectString(data.VpcId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMountTargetCommandError
 */
const de_CreateMountTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMountTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AvailabilityZonesMismatch":
    case "com.amazonaws.efs#AvailabilityZonesMismatch":
      throw await de_AvailabilityZonesMismatchRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "IpAddressInUse":
    case "com.amazonaws.efs#IpAddressInUse":
      throw await de_IpAddressInUseRes(parsedOutput, context);
    case "MountTargetConflict":
    case "com.amazonaws.efs#MountTargetConflict":
      throw await de_MountTargetConflictRes(parsedOutput, context);
    case "NetworkInterfaceLimitExceeded":
    case "com.amazonaws.efs#NetworkInterfaceLimitExceeded":
      throw await de_NetworkInterfaceLimitExceededRes(parsedOutput, context);
    case "NoFreeAddressesInSubnet":
    case "com.amazonaws.efs#NoFreeAddressesInSubnet":
      throw await de_NoFreeAddressesInSubnetRes(parsedOutput, context);
    case "SecurityGroupLimitExceeded":
    case "com.amazonaws.efs#SecurityGroupLimitExceeded":
      throw await de_SecurityGroupLimitExceededRes(parsedOutput, context);
    case "SecurityGroupNotFound":
    case "com.amazonaws.efs#SecurityGroupNotFound":
      throw await de_SecurityGroupNotFoundRes(parsedOutput, context);
    case "SubnetNotFound":
    case "com.amazonaws.efs#SubnetNotFound":
      throw await de_SubnetNotFoundRes(parsedOutput, context);
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      throw await de_UnsupportedAvailabilityZoneRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateReplicationConfigurationCommand
 */
export const de_CreateReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateReplicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.Destinations != null) {
    contents.Destinations = de_Destinations(data.Destinations, context);
  }
  if (data.OriginalSourceFileSystemArn != null) {
    contents.OriginalSourceFileSystemArn = __expectString(data.OriginalSourceFileSystemArn);
  }
  if (data.SourceFileSystemArn != null) {
    contents.SourceFileSystemArn = __expectString(data.SourceFileSystemArn);
  }
  if (data.SourceFileSystemId != null) {
    contents.SourceFileSystemId = __expectString(data.SourceFileSystemId);
  }
  if (data.SourceFileSystemRegion != null) {
    contents.SourceFileSystemRegion = __expectString(data.SourceFileSystemRegion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateReplicationConfigurationCommandError
 */
const de_CreateReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemLimitExceeded":
    case "com.amazonaws.efs#FileSystemLimitExceeded":
      throw await de_FileSystemLimitExceededRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      throw await de_InsufficientThroughputCapacityRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ReplicationNotFound":
    case "com.amazonaws.efs#ReplicationNotFound":
      throw await de_ReplicationNotFoundRes(parsedOutput, context);
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      throw await de_ThroughputLimitExceededRes(parsedOutput, context);
    case "UnsupportedAvailabilityZone":
    case "com.amazonaws.efs#UnsupportedAvailabilityZone":
      throw await de_UnsupportedAvailabilityZoneRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateTagsCommand
 */
export const de_CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CreateTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTagsCommandError
 */
const de_CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAccessPointCommand
 */
export const de_DeleteAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAccessPointCommandError
 */
const de_DeleteAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await de_AccessPointNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteFileSystemCommand
 */
export const de_DeleteFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFileSystemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFileSystemCommandError
 */
const de_DeleteFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemInUse":
    case "com.amazonaws.efs#FileSystemInUse":
      throw await de_FileSystemInUseRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteFileSystemPolicyCommand
 */
export const de_DeleteFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFileSystemPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFileSystemPolicyCommandError
 */
const de_DeleteFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMountTargetCommand
 */
export const de_DeleteMountTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMountTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMountTargetCommandError
 */
const de_DeleteMountTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMountTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DependencyTimeout":
    case "com.amazonaws.efs#DependencyTimeout":
      throw await de_DependencyTimeoutRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await de_MountTargetNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteReplicationConfigurationCommand
 */
export const de_DeleteReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteReplicationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReplicationConfigurationCommandError
 */
const de_DeleteReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ReplicationNotFound":
    case "com.amazonaws.efs#ReplicationNotFound":
      throw await de_ReplicationNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAccessPointsCommand
 */
export const de_DescribeAccessPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAccessPointsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessPoints != null) {
    contents.AccessPoints = de_AccessPointDescriptions(data.AccessPoints, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccessPointsCommandError
 */
const de_DescribeAccessPointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccessPointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await de_AccessPointNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAccountPreferencesCommand
 */
export const de_DescribeAccountPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAccountPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceIdPreference != null) {
    contents.ResourceIdPreference = de_ResourceIdPreference(data.ResourceIdPreference, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAccountPreferencesCommandError
 */
const de_DescribeAccountPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAccountPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeBackupPolicyCommand
 */
export const de_DescribeBackupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBackupPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPolicy != null) {
    contents.BackupPolicy = de_BackupPolicy(data.BackupPolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBackupPolicyCommandError
 */
const de_DescribeBackupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.efs#PolicyNotFound":
      throw await de_PolicyNotFoundRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeFileSystemPolicyCommand
 */
export const de_DescribeFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFileSystemPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFileSystemPolicyCommandError
 */
const de_DescribeFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "PolicyNotFound":
    case "com.amazonaws.efs#PolicyNotFound":
      throw await de_PolicyNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeFileSystemsCommand
 */
export const de_DescribeFileSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFileSystemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FileSystems != null) {
    contents.FileSystems = de_FileSystemDescriptions(data.FileSystems, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFileSystemsCommandError
 */
const de_DescribeFileSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeLifecycleConfigurationCommand
 */
export const de_DescribeLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LifecyclePolicies != null) {
    contents.LifecyclePolicies = de_LifecyclePolicies(data.LifecyclePolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLifecycleConfigurationCommandError
 */
const de_DescribeLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeMountTargetsCommand
 */
export const de_DescribeMountTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMountTargetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.MountTargets != null) {
    contents.MountTargets = de_MountTargetDescriptions(data.MountTargets, context);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMountTargetsCommandError
 */
const de_DescribeMountTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await de_AccessPointNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await de_MountTargetNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand
 */
export const de_DescribeMountTargetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMountTargetSecurityGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SecurityGroups != null) {
    contents.SecurityGroups = de_SecurityGroups(data.SecurityGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError
 */
const de_DescribeMountTargetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMountTargetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncorrectMountTargetState":
    case "com.amazonaws.efs#IncorrectMountTargetState":
      throw await de_IncorrectMountTargetStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await de_MountTargetNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeReplicationConfigurationsCommand
 */
export const de_DescribeReplicationConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReplicationConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Replications != null) {
    contents.Replications = de_ReplicationConfigurationDescriptions(data.Replications, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReplicationConfigurationsCommandError
 */
const de_DescribeReplicationConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReplicationConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ReplicationNotFound":
    case "com.amazonaws.efs#ReplicationNotFound":
      throw await de_ReplicationNotFoundRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.NextMarker != null) {
    contents.NextMarker = __expectString(data.NextMarker);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await de_AccessPointNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand
 */
export const de_ModifyMountTargetSecurityGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_ModifyMountTargetSecurityGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError
 */
const de_ModifyMountTargetSecurityGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyMountTargetSecurityGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncorrectMountTargetState":
    case "com.amazonaws.efs#IncorrectMountTargetState":
      throw await de_IncorrectMountTargetStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MountTargetNotFound":
    case "com.amazonaws.efs#MountTargetNotFound":
      throw await de_MountTargetNotFoundRes(parsedOutput, context);
    case "SecurityGroupLimitExceeded":
    case "com.amazonaws.efs#SecurityGroupLimitExceeded":
      throw await de_SecurityGroupLimitExceededRes(parsedOutput, context);
    case "SecurityGroupNotFound":
    case "com.amazonaws.efs#SecurityGroupNotFound":
      throw await de_SecurityGroupNotFoundRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutAccountPreferencesCommand
 */
export const de_PutAccountPreferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPreferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutAccountPreferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceIdPreference != null) {
    contents.ResourceIdPreference = de_ResourceIdPreference(data.ResourceIdPreference, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutAccountPreferencesCommandError
 */
const de_PutAccountPreferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAccountPreferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutBackupPolicyCommand
 */
export const de_PutBackupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBackupPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPolicy != null) {
    contents.BackupPolicy = de_BackupPolicy(data.BackupPolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutBackupPolicyCommandError
 */
const de_PutBackupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.efs#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutFileSystemPolicyCommand
 */
export const de_PutFileSystemPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFileSystemPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutFileSystemPolicyCommandError
 */
const de_PutFileSystemPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFileSystemPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidPolicyException":
    case "com.amazonaws.efs#InvalidPolicyException":
      throw await de_InvalidPolicyExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutLifecycleConfigurationCommand
 */
export const de_PutLifecycleConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutLifecycleConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LifecyclePolicies != null) {
    contents.LifecyclePolicies = de_LifecyclePolicies(data.LifecyclePolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutLifecycleConfigurationCommandError
 */
const de_PutLifecycleConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLifecycleConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await de_AccessPointNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "AccessPointNotFound":
    case "com.amazonaws.efs#AccessPointNotFound":
      throw await de_AccessPointNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateFileSystemCommand
 */
export const de_UpdateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateFileSystemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AvailabilityZoneId != null) {
    contents.AvailabilityZoneId = __expectString(data.AvailabilityZoneId);
  }
  if (data.AvailabilityZoneName != null) {
    contents.AvailabilityZoneName = __expectString(data.AvailabilityZoneName);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.CreationToken != null) {
    contents.CreationToken = __expectString(data.CreationToken);
  }
  if (data.Encrypted != null) {
    contents.Encrypted = __expectBoolean(data.Encrypted);
  }
  if (data.FileSystemArn != null) {
    contents.FileSystemArn = __expectString(data.FileSystemArn);
  }
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.LifeCycleState != null) {
    contents.LifeCycleState = __expectString(data.LifeCycleState);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NumberOfMountTargets != null) {
    contents.NumberOfMountTargets = __expectInt32(data.NumberOfMountTargets);
  }
  if (data.OwnerId != null) {
    contents.OwnerId = __expectString(data.OwnerId);
  }
  if (data.PerformanceMode != null) {
    contents.PerformanceMode = __expectString(data.PerformanceMode);
  }
  if (data.ProvisionedThroughputInMibps != null) {
    contents.ProvisionedThroughputInMibps = __limitedParseDouble(data.ProvisionedThroughputInMibps);
  }
  if (data.SizeInBytes != null) {
    contents.SizeInBytes = de_FileSystemSize(data.SizeInBytes, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  if (data.ThroughputMode != null) {
    contents.ThroughputMode = __expectString(data.ThroughputMode);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFileSystemCommandError
 */
const de_UpdateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.efs#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.efs#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncorrectFileSystemLifeCycleState":
    case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
      throw await de_IncorrectFileSystemLifeCycleStateRes(parsedOutput, context);
    case "InsufficientThroughputCapacity":
    case "com.amazonaws.efs#InsufficientThroughputCapacity":
      throw await de_InsufficientThroughputCapacityRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.efs#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ThroughputLimitExceeded":
    case "com.amazonaws.efs#ThroughputLimitExceeded":
      throw await de_ThroughputLimitExceededRes(parsedOutput, context);
    case "TooManyRequests":
    case "com.amazonaws.efs#TooManyRequests":
      throw await de_TooManyRequestsRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1AccessPointAlreadyExistsRes
 */
const de_AccessPointAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.AccessPointId != null) {
    contents.AccessPointId = __expectString(data.AccessPointId);
  }
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessPointAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AccessPointLimitExceededRes
 */
const de_AccessPointLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessPointLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessPointLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AccessPointNotFoundRes
 */
const de_AccessPointNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<AccessPointNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessPointNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AvailabilityZonesMismatchRes
 */
const de_AvailabilityZonesMismatchRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AvailabilityZonesMismatch> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AvailabilityZonesMismatch({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestRes
 */
const de_BadRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequest> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new BadRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyTimeoutRes
 */
const de_DependencyTimeoutRes = async (parsedOutput: any, context: __SerdeContext): Promise<DependencyTimeout> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new DependencyTimeout({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FileSystemAlreadyExistsRes
 */
const de_FileSystemAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemAlreadyExists> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.FileSystemId != null) {
    contents.FileSystemId = __expectString(data.FileSystemId);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FileSystemInUseRes
 */
const de_FileSystemInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<FileSystemInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FileSystemLimitExceededRes
 */
const de_FileSystemLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1FileSystemNotFoundRes
 */
const de_FileSystemNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<FileSystemNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new FileSystemNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IncorrectFileSystemLifeCycleStateRes
 */
const de_IncorrectFileSystemLifeCycleStateRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectFileSystemLifeCycleState> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IncorrectFileSystemLifeCycleState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IncorrectMountTargetStateRes
 */
const de_IncorrectMountTargetStateRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncorrectMountTargetState> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IncorrectMountTargetState({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InsufficientThroughputCapacityRes
 */
const de_InsufficientThroughputCapacityRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientThroughputCapacity> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InsufficientThroughputCapacity({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidPolicyExceptionRes
 */
const de_InvalidPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IpAddressInUseRes
 */
const de_IpAddressInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<IpAddressInUse> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new IpAddressInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MountTargetConflictRes
 */
const de_MountTargetConflictRes = async (parsedOutput: any, context: __SerdeContext): Promise<MountTargetConflict> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MountTargetConflict({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MountTargetNotFoundRes
 */
const de_MountTargetNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<MountTargetNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MountTargetNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NetworkInterfaceLimitExceededRes
 */
const de_NetworkInterfaceLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NetworkInterfaceLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NetworkInterfaceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NoFreeAddressesInSubnetRes
 */
const de_NoFreeAddressesInSubnetRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoFreeAddressesInSubnet> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NoFreeAddressesInSubnet({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PolicyNotFoundRes
 */
const de_PolicyNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<PolicyNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new PolicyNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ReplicationNotFoundRes
 */
const de_ReplicationNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ReplicationNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ReplicationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SecurityGroupLimitExceededRes
 */
const de_SecurityGroupLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityGroupLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SecurityGroupLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SecurityGroupNotFoundRes
 */
const de_SecurityGroupNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SecurityGroupNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SecurityGroupNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1SubnetNotFoundRes
 */
const de_SubnetNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<SubnetNotFound> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new SubnetNotFound({
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
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThroughputLimitExceededRes
 */
const de_ThroughputLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThroughputLimitExceeded> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThroughputLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsRes
 */
const de_TooManyRequestsRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyRequests> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequests({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedAvailabilityZoneRes
 */
const de_UnsupportedAvailabilityZoneRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZone> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new UnsupportedAvailabilityZone({
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
  if (data.ErrorCode != null) {
    contents.ErrorCode = __expectString(data.ErrorCode);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1BackupPolicy
 */
const se_BackupPolicy = (input: BackupPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_restJson1CreationInfo
 */
const se_CreationInfo = (input: CreationInfo, context: __SerdeContext): any => {
  return {
    ...(input.OwnerGid != null && { OwnerGid: input.OwnerGid }),
    ...(input.OwnerUid != null && { OwnerUid: input.OwnerUid }),
    ...(input.Permissions != null && { Permissions: input.Permissions }),
  };
};

/**
 * serializeAws_restJson1DestinationsToCreate
 */
const se_DestinationsToCreate = (input: DestinationToCreate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DestinationToCreate(entry, context);
    });
};

/**
 * serializeAws_restJson1DestinationToCreate
 */
const se_DestinationToCreate = (input: DestinationToCreate, context: __SerdeContext): any => {
  return {
    ...(input.AvailabilityZoneName != null && { AvailabilityZoneName: input.AvailabilityZoneName }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Region != null && { Region: input.Region }),
  };
};

/**
 * serializeAws_restJson1LifecyclePolicies
 */
const se_LifecyclePolicies = (input: LifecyclePolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LifecyclePolicy(entry, context);
    });
};

/**
 * serializeAws_restJson1LifecyclePolicy
 */
const se_LifecyclePolicy = (input: LifecyclePolicy, context: __SerdeContext): any => {
  return {
    ...(input.TransitionToIA != null && { TransitionToIA: input.TransitionToIA }),
    ...(input.TransitionToPrimaryStorageClass != null && {
      TransitionToPrimaryStorageClass: input.TransitionToPrimaryStorageClass,
    }),
  };
};

/**
 * serializeAws_restJson1PosixUser
 */
const se_PosixUser = (input: PosixUser, context: __SerdeContext): any => {
  return {
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.SecondaryGids != null && { SecondaryGids: se_SecondaryGids(input.SecondaryGids, context) }),
    ...(input.Uid != null && { Uid: input.Uid }),
  };
};

/**
 * serializeAws_restJson1RootDirectory
 */
const se_RootDirectory = (input: RootDirectory, context: __SerdeContext): any => {
  return {
    ...(input.CreationInfo != null && { CreationInfo: se_CreationInfo(input.CreationInfo, context) }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

/**
 * serializeAws_restJson1SecondaryGids
 */
const se_SecondaryGids = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * deserializeAws_restJson1AccessPointDescription
 */
const de_AccessPointDescription = (output: any, context: __SerdeContext): AccessPointDescription => {
  return {
    AccessPointArn: __expectString(output.AccessPointArn),
    AccessPointId: __expectString(output.AccessPointId),
    ClientToken: __expectString(output.ClientToken),
    FileSystemId: __expectString(output.FileSystemId),
    LifeCycleState: __expectString(output.LifeCycleState),
    Name: __expectString(output.Name),
    OwnerId: __expectString(output.OwnerId),
    PosixUser: output.PosixUser != null ? de_PosixUser(output.PosixUser, context) : undefined,
    RootDirectory: output.RootDirectory != null ? de_RootDirectory(output.RootDirectory, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccessPointDescriptions
 */
const de_AccessPointDescriptions = (output: any, context: __SerdeContext): AccessPointDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AccessPointDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupPolicy
 */
const de_BackupPolicy = (output: any, context: __SerdeContext): BackupPolicy => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1CreationInfo
 */
const de_CreationInfo = (output: any, context: __SerdeContext): CreationInfo => {
  return {
    OwnerGid: __expectLong(output.OwnerGid),
    OwnerUid: __expectLong(output.OwnerUid),
    Permissions: __expectString(output.Permissions),
  } as any;
};

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    LastReplicatedTimestamp:
      output.LastReplicatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastReplicatedTimestamp)))
        : undefined,
    Region: __expectString(output.Region),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1Destinations
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
 * deserializeAws_restJson1FileSystemDescription
 */
const de_FileSystemDescription = (output: any, context: __SerdeContext): FileSystemDescription => {
  return {
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    AvailabilityZoneName: __expectString(output.AvailabilityZoneName),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    CreationToken: __expectString(output.CreationToken),
    Encrypted: __expectBoolean(output.Encrypted),
    FileSystemArn: __expectString(output.FileSystemArn),
    FileSystemId: __expectString(output.FileSystemId),
    KmsKeyId: __expectString(output.KmsKeyId),
    LifeCycleState: __expectString(output.LifeCycleState),
    Name: __expectString(output.Name),
    NumberOfMountTargets: __expectInt32(output.NumberOfMountTargets),
    OwnerId: __expectString(output.OwnerId),
    PerformanceMode: __expectString(output.PerformanceMode),
    ProvisionedThroughputInMibps: __limitedParseDouble(output.ProvisionedThroughputInMibps),
    SizeInBytes: output.SizeInBytes != null ? de_FileSystemSize(output.SizeInBytes, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    ThroughputMode: __expectString(output.ThroughputMode),
  } as any;
};

/**
 * deserializeAws_restJson1FileSystemDescriptions
 */
const de_FileSystemDescriptions = (output: any, context: __SerdeContext): FileSystemDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileSystemDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FileSystemSize
 */
const de_FileSystemSize = (output: any, context: __SerdeContext): FileSystemSize => {
  return {
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
    Value: __expectLong(output.Value),
    ValueInIA: __expectLong(output.ValueInIA),
    ValueInStandard: __expectLong(output.ValueInStandard),
  } as any;
};

/**
 * deserializeAws_restJson1LifecyclePolicies
 */
const de_LifecyclePolicies = (output: any, context: __SerdeContext): LifecyclePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LifecyclePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LifecyclePolicy
 */
const de_LifecyclePolicy = (output: any, context: __SerdeContext): LifecyclePolicy => {
  return {
    TransitionToIA: __expectString(output.TransitionToIA),
    TransitionToPrimaryStorageClass: __expectString(output.TransitionToPrimaryStorageClass),
  } as any;
};

/**
 * deserializeAws_restJson1MountTargetDescription
 */
const de_MountTargetDescription = (output: any, context: __SerdeContext): MountTargetDescription => {
  return {
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    AvailabilityZoneName: __expectString(output.AvailabilityZoneName),
    FileSystemId: __expectString(output.FileSystemId),
    IpAddress: __expectString(output.IpAddress),
    LifeCycleState: __expectString(output.LifeCycleState),
    MountTargetId: __expectString(output.MountTargetId),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    OwnerId: __expectString(output.OwnerId),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_restJson1MountTargetDescriptions
 */
const de_MountTargetDescriptions = (output: any, context: __SerdeContext): MountTargetDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MountTargetDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PosixUser
 */
const de_PosixUser = (output: any, context: __SerdeContext): PosixUser => {
  return {
    Gid: __expectLong(output.Gid),
    SecondaryGids: output.SecondaryGids != null ? de_SecondaryGids(output.SecondaryGids, context) : undefined,
    Uid: __expectLong(output.Uid),
  } as any;
};

/**
 * deserializeAws_restJson1ReplicationConfigurationDescription
 */
const de_ReplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationDescription => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destinations: output.Destinations != null ? de_Destinations(output.Destinations, context) : undefined,
    OriginalSourceFileSystemArn: __expectString(output.OriginalSourceFileSystemArn),
    SourceFileSystemArn: __expectString(output.SourceFileSystemArn),
    SourceFileSystemId: __expectString(output.SourceFileSystemId),
    SourceFileSystemRegion: __expectString(output.SourceFileSystemRegion),
  } as any;
};

/**
 * deserializeAws_restJson1ReplicationConfigurationDescriptions
 */
const de_ReplicationConfigurationDescriptions = (
  output: any,
  context: __SerdeContext
): ReplicationConfigurationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationConfigurationDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceIdPreference
 */
const de_ResourceIdPreference = (output: any, context: __SerdeContext): ResourceIdPreference => {
  return {
    ResourceIdType: __expectString(output.ResourceIdType),
    Resources: output.Resources != null ? de_Resources(output.Resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Resources
 */
const de_Resources = (output: any, context: __SerdeContext): (Resource | string)[] => {
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
 * deserializeAws_restJson1RootDirectory
 */
const de_RootDirectory = (output: any, context: __SerdeContext): RootDirectory => {
  return {
    CreationInfo: output.CreationInfo != null ? de_CreationInfo(output.CreationInfo, context) : undefined,
    Path: __expectString(output.Path),
  } as any;
};

/**
 * deserializeAws_restJson1SecondaryGids
 */
const de_SecondaryGids = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectLong(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
