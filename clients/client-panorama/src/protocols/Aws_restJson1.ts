import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateApplicationInstanceCommandInput,
  CreateApplicationInstanceCommandOutput,
} from "../commands/CreateApplicationInstanceCommand";
import {
  CreateJobForDevicesCommandInput,
  CreateJobForDevicesCommandOutput,
} from "../commands/CreateJobForDevicesCommand";
import {
  CreateNodeFromTemplateJobCommandInput,
  CreateNodeFromTemplateJobCommandOutput,
} from "../commands/CreateNodeFromTemplateJobCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "../commands/CreatePackageCommand";
import {
  CreatePackageImportJobCommandInput,
  CreatePackageImportJobCommandOutput,
} from "../commands/CreatePackageImportJobCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import {
  DeregisterPackageVersionCommandInput,
  DeregisterPackageVersionCommandOutput,
} from "../commands/DeregisterPackageVersionCommand";
import {
  DescribeApplicationInstanceCommandInput,
  DescribeApplicationInstanceCommandOutput,
} from "../commands/DescribeApplicationInstanceCommand";
import {
  DescribeApplicationInstanceDetailsCommandInput,
  DescribeApplicationInstanceDetailsCommandOutput,
} from "../commands/DescribeApplicationInstanceDetailsCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "../commands/DescribeDeviceCommand";
import { DescribeDeviceJobCommandInput, DescribeDeviceJobCommandOutput } from "../commands/DescribeDeviceJobCommand";
import { DescribeNodeCommandInput, DescribeNodeCommandOutput } from "../commands/DescribeNodeCommand";
import {
  DescribeNodeFromTemplateJobCommandInput,
  DescribeNodeFromTemplateJobCommandOutput,
} from "../commands/DescribeNodeFromTemplateJobCommand";
import { DescribePackageCommandInput, DescribePackageCommandOutput } from "../commands/DescribePackageCommand";
import {
  DescribePackageImportJobCommandInput,
  DescribePackageImportJobCommandOutput,
} from "../commands/DescribePackageImportJobCommand";
import {
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "../commands/DescribePackageVersionCommand";
import {
  ListApplicationInstanceDependenciesCommandInput,
  ListApplicationInstanceDependenciesCommandOutput,
} from "../commands/ListApplicationInstanceDependenciesCommand";
import {
  ListApplicationInstanceNodeInstancesCommandInput,
  ListApplicationInstanceNodeInstancesCommandOutput,
} from "../commands/ListApplicationInstanceNodeInstancesCommand";
import {
  ListApplicationInstancesCommandInput,
  ListApplicationInstancesCommandOutput,
} from "../commands/ListApplicationInstancesCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListDevicesJobsCommandInput, ListDevicesJobsCommandOutput } from "../commands/ListDevicesJobsCommand";
import {
  ListNodeFromTemplateJobsCommandInput,
  ListNodeFromTemplateJobsCommandOutput,
} from "../commands/ListNodeFromTemplateJobsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import {
  ListPackageImportJobsCommandInput,
  ListPackageImportJobsCommandOutput,
} from "../commands/ListPackageImportJobsCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ProvisionDeviceCommandInput, ProvisionDeviceCommandOutput } from "../commands/ProvisionDeviceCommand";
import {
  RegisterPackageVersionCommandInput,
  RegisterPackageVersionCommandOutput,
} from "../commands/RegisterPackageVersionCommand";
import {
  RemoveApplicationInstanceCommandInput,
  RemoveApplicationInstanceCommandOutput,
} from "../commands/RemoveApplicationInstanceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDeviceMetadataCommandInput,
  UpdateDeviceMetadataCommandOutput,
} from "../commands/UpdateDeviceMetadataCommand";
import {
  AccessDeniedException,
  ApplicationInstance,
  ConflictException,
  ConflictExceptionErrorArgument,
  Device,
  DeviceJob,
  DeviceJobConfig,
  EthernetPayload,
  EthernetStatus,
  InternalServerException,
  Job,
  JobResourceTags,
  ManifestOverridesPayload,
  ManifestPayload,
  NetworkPayload,
  NetworkStatus,
  Node,
  NodeFromTemplateJob,
  NodeInputPort,
  NodeInstance,
  NodeInterface,
  NodeOutputPort,
  OTAJobConfig,
  OutPutS3Location,
  PackageImportJob,
  PackageImportJobInputConfig,
  PackageImportJobOutput,
  PackageImportJobOutputConfig,
  PackageListItem,
  PackageObject,
  PackageVersionInputConfig,
  PackageVersionOutputConfig,
  ResourceNotFoundException,
  S3Location,
  ServiceQuotaExceededException,
  StaticIpConnectionInfo,
  StorageLocation,
  ValidationException,
  ValidationExceptionErrorArgument,
  ValidationExceptionField,
} from "../models/models_0";
import { PanoramaServiceException as __BaseException } from "../models/PanoramaServiceException";

export const serializeAws_restJson1CreateApplicationInstanceCommand = async (
  input: CreateApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/application-instances";
  let body: any;
  body = JSON.stringify({
    ...(input.ApplicationInstanceIdToReplace !== undefined &&
      input.ApplicationInstanceIdToReplace !== null && {
        ApplicationInstanceIdToReplace: input.ApplicationInstanceIdToReplace,
      }),
    ...(input.DefaultRuntimeContextDevice !== undefined &&
      input.DefaultRuntimeContextDevice !== null && { DefaultRuntimeContextDevice: input.DefaultRuntimeContextDevice }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.ManifestOverridesPayload !== undefined &&
      input.ManifestOverridesPayload !== null && {
        ManifestOverridesPayload: serializeAws_restJson1ManifestOverridesPayload(
          input.ManifestOverridesPayload,
          context
        ),
      }),
    ...(input.ManifestPayload !== undefined &&
      input.ManifestPayload !== null && {
        ManifestPayload: serializeAws_restJson1ManifestPayload(input.ManifestPayload, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RuntimeRoleArn !== undefined &&
      input.RuntimeRoleArn !== null && { RuntimeRoleArn: input.RuntimeRoleArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateJobForDevicesCommand = async (
  input: CreateJobForDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceIds !== undefined &&
      input.DeviceIds !== null && { DeviceIds: serializeAws_restJson1DeviceIdList(input.DeviceIds, context) }),
    ...(input.DeviceJobConfig !== undefined &&
      input.DeviceJobConfig !== null && {
        DeviceJobConfig: serializeAws_restJson1DeviceJobConfig(input.DeviceJobConfig, context),
      }),
    ...(input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType }),
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

export const serializeAws_restJson1CreateNodeFromTemplateJobCommand = async (
  input: CreateNodeFromTemplateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/template-job";
  let body: any;
  body = JSON.stringify({
    ...(input.JobTags !== undefined &&
      input.JobTags !== null && { JobTags: serializeAws_restJson1JobTagsList(input.JobTags, context) }),
    ...(input.NodeDescription !== undefined &&
      input.NodeDescription !== null && { NodeDescription: input.NodeDescription }),
    ...(input.NodeName !== undefined && input.NodeName !== null && { NodeName: input.NodeName }),
    ...(input.OutputPackageName !== undefined &&
      input.OutputPackageName !== null && { OutputPackageName: input.OutputPackageName }),
    ...(input.OutputPackageVersion !== undefined &&
      input.OutputPackageVersion !== null && { OutputPackageVersion: input.OutputPackageVersion }),
    ...(input.TemplateParameters !== undefined &&
      input.TemplateParameters !== null && {
        TemplateParameters: serializeAws_restJson1TemplateParametersMap(input.TemplateParameters, context),
      }),
    ...(input.TemplateType !== undefined && input.TemplateType !== null && { TemplateType: input.TemplateType }),
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

export const serializeAws_restJson1CreatePackageCommand = async (
  input: CreatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages";
  let body: any;
  body = JSON.stringify({
    ...(input.PackageName !== undefined && input.PackageName !== null && { PackageName: input.PackageName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreatePackageImportJobCommand = async (
  input: CreatePackageImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/import-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.InputConfig !== undefined &&
      input.InputConfig !== null && {
        InputConfig: serializeAws_restJson1PackageImportJobInputConfig(input.InputConfig, context),
      }),
    ...(input.JobTags !== undefined &&
      input.JobTags !== null && { JobTags: serializeAws_restJson1JobTagsList(input.JobTags, context) }),
    ...(input.JobType !== undefined && input.JobType !== null && { JobType: input.JobType }),
    ...(input.OutputConfig !== undefined &&
      input.OutputConfig !== null && {
        OutputConfig: serializeAws_restJson1PackageImportJobOutputConfig(input.OutputConfig, context),
      }),
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

export const serializeAws_restJson1DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices/{DeviceId}";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
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

export const serializeAws_restJson1DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/{PackageId}";
  if (input.PackageId !== undefined) {
    const labelValue: string = input.PackageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageId.");
    }
    resolvedPath = resolvedPath.replace("{PackageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageId.");
  }
  const query: any = {
    ...(input.ForceDelete !== undefined && { ForceDelete: input.ForceDelete.toString() }),
  };
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

export const serializeAws_restJson1DeregisterPackageVersionCommand = async (
  input: DeregisterPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}";
  if (input.PackageId !== undefined) {
    const labelValue: string = input.PackageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageId.");
    }
    resolvedPath = resolvedPath.replace("{PackageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageId.");
  }
  if (input.PackageVersion !== undefined) {
    const labelValue: string = input.PackageVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageVersion.");
    }
    resolvedPath = resolvedPath.replace("{PackageVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageVersion.");
  }
  if (input.PatchVersion !== undefined) {
    const labelValue: string = input.PatchVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PatchVersion.");
    }
    resolvedPath = resolvedPath.replace("{PatchVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PatchVersion.");
  }
  const query: any = {
    ...(input.OwnerAccount !== undefined && { OwnerAccount: input.OwnerAccount }),
    ...(input.UpdatedLatestPatchVersion !== undefined && {
      UpdatedLatestPatchVersion: input.UpdatedLatestPatchVersion,
    }),
  };
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

export const serializeAws_restJson1DescribeApplicationInstanceCommand = async (
  input: DescribeApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}";
  if (input.ApplicationInstanceId !== undefined) {
    const labelValue: string = input.ApplicationInstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationInstanceId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationInstanceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationInstanceId.");
  }
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

export const serializeAws_restJson1DescribeApplicationInstanceDetailsCommand = async (
  input: DescribeApplicationInstanceDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/details";
  if (input.ApplicationInstanceId !== undefined) {
    const labelValue: string = input.ApplicationInstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationInstanceId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationInstanceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationInstanceId.");
  }
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

export const serializeAws_restJson1DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices/{DeviceId}";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
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

export const serializeAws_restJson1DescribeDeviceJobCommand = async (
  input: DescribeDeviceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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

export const serializeAws_restJson1DescribeNodeCommand = async (
  input: DescribeNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/nodes/{NodeId}";
  if (input.NodeId !== undefined) {
    const labelValue: string = input.NodeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: NodeId.");
    }
    resolvedPath = resolvedPath.replace("{NodeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: NodeId.");
  }
  const query: any = {
    ...(input.OwnerAccount !== undefined && { OwnerAccount: input.OwnerAccount }),
  };
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

export const serializeAws_restJson1DescribeNodeFromTemplateJobCommand = async (
  input: DescribeNodeFromTemplateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/template-job/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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

export const serializeAws_restJson1DescribePackageCommand = async (
  input: DescribePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/metadata/{PackageId}";
  if (input.PackageId !== undefined) {
    const labelValue: string = input.PackageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageId.");
    }
    resolvedPath = resolvedPath.replace("{PackageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageId.");
  }
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

export const serializeAws_restJson1DescribePackageImportJobCommand = async (
  input: DescribePackageImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/import-jobs/{JobId}";
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
  }
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

export const serializeAws_restJson1DescribePackageVersionCommand = async (
  input: DescribePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/packages/metadata/{PackageId}/versions/{PackageVersion}";
  if (input.PackageId !== undefined) {
    const labelValue: string = input.PackageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageId.");
    }
    resolvedPath = resolvedPath.replace("{PackageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageId.");
  }
  if (input.PackageVersion !== undefined) {
    const labelValue: string = input.PackageVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageVersion.");
    }
    resolvedPath = resolvedPath.replace("{PackageVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageVersion.");
  }
  const query: any = {
    ...(input.OwnerAccount !== undefined && { OwnerAccount: input.OwnerAccount }),
    ...(input.PatchVersion !== undefined && { PatchVersion: input.PatchVersion }),
  };
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

export const serializeAws_restJson1ListApplicationInstanceDependenciesCommand = async (
  input: ListApplicationInstanceDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/package-dependencies";
  if (input.ApplicationInstanceId !== undefined) {
    const labelValue: string = input.ApplicationInstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationInstanceId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationInstanceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationInstanceId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListApplicationInstanceNodeInstancesCommand = async (
  input: ListApplicationInstanceNodeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}/node-instances";
  if (input.ApplicationInstanceId !== undefined) {
    const labelValue: string = input.ApplicationInstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationInstanceId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationInstanceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationInstanceId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListApplicationInstancesCommand = async (
  input: ListApplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/application-instances";
  const query: any = {
    ...(input.DeviceId !== undefined && { deviceId: input.DeviceId }),
    ...(input.StatusFilter !== undefined && { statusFilter: input.StatusFilter }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1ListDevicesJobsCommand = async (
  input: ListDevicesJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/jobs";
  const query: any = {
    ...(input.DeviceId !== undefined && { DeviceId: input.DeviceId }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1ListNodeFromTemplateJobsCommand = async (
  input: ListNodeFromTemplateJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/template-job";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/nodes";
  const query: any = {
    ...(input.Category !== undefined && { category: input.Category }),
    ...(input.OwnerAccount !== undefined && { ownerAccount: input.OwnerAccount }),
    ...(input.PackageName !== undefined && { packageName: input.PackageName }),
    ...(input.PackageVersion !== undefined && { packageVersion: input.PackageVersion }),
    ...(input.PatchVersion !== undefined && { patchVersion: input.PatchVersion }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1ListPackageImportJobsCommand = async (
  input: ListPackageImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages/import-jobs";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
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

export const serializeAws_restJson1ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/packages";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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

export const serializeAws_restJson1ProvisionDeviceCommand = async (
  input: ProvisionDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NetworkingConfiguration !== undefined &&
      input.NetworkingConfiguration !== null && {
        NetworkingConfiguration: serializeAws_restJson1NetworkPayload(input.NetworkingConfiguration, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1RegisterPackageVersionCommand = async (
  input: RegisterPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}";
  if (input.PackageId !== undefined) {
    const labelValue: string = input.PackageId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageId.");
    }
    resolvedPath = resolvedPath.replace("{PackageId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageId.");
  }
  if (input.PackageVersion !== undefined) {
    const labelValue: string = input.PackageVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PackageVersion.");
    }
    resolvedPath = resolvedPath.replace("{PackageVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PackageVersion.");
  }
  if (input.PatchVersion !== undefined) {
    const labelValue: string = input.PatchVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PatchVersion.");
    }
    resolvedPath = resolvedPath.replace("{PatchVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PatchVersion.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.MarkLatest !== undefined && input.MarkLatest !== null && { MarkLatest: input.MarkLatest }),
    ...(input.OwnerAccount !== undefined && input.OwnerAccount !== null && { OwnerAccount: input.OwnerAccount }),
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

export const serializeAws_restJson1RemoveApplicationInstanceCommand = async (
  input: RemoveApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/application-instances/{ApplicationInstanceId}";
  if (input.ApplicationInstanceId !== undefined) {
    const labelValue: string = input.ApplicationInstanceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApplicationInstanceId.");
    }
    resolvedPath = resolvedPath.replace("{ApplicationInstanceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApplicationInstanceId.");
  }
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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

export const serializeAws_restJson1UpdateDeviceMetadataCommand = async (
  input: UpdateDeviceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/devices/{DeviceId}";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace("{DeviceId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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

export const deserializeAws_restJson1CreateApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApplicationInstanceCommandError(output, context);
  }
  const contents: CreateApplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationInstanceId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId !== undefined && data.ApplicationInstanceId !== null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateApplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateJobForDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobForDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateJobForDevicesCommandError(output, context);
  }
  const contents: CreateJobForDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Jobs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Jobs !== undefined && data.Jobs !== null) {
    contents.Jobs = deserializeAws_restJson1JobList(data.Jobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateJobForDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobForDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNodeFromTemplateJobCommandError(output, context);
  }
  const contents: CreateNodeFromTemplateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateNodeFromTemplateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeFromTemplateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackageCommandError(output, context);
  }
  const contents: CreatePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    PackageId: undefined,
    StorageLocation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.PackageId !== undefined && data.PackageId !== null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.StorageLocation !== undefined && data.StorageLocation !== null) {
    contents.StorageLocation = deserializeAws_restJson1StorageLocation(data.StorageLocation, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreatePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreatePackageImportJobCommandError(output, context);
  }
  const contents: CreatePackageImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreatePackageImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeviceCommandError(output, context);
  }
  const contents: DeleteDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeviceId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeletePackageCommandError(output, context);
  }
  const contents: DeletePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeregisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterPackageVersionCommandError(output, context);
  }
  const contents: DeregisterPackageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterPackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeApplicationInstanceCommandError(output, context);
  }
  const contents: DescribeApplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationInstanceId: undefined,
    ApplicationInstanceIdToReplace: undefined,
    Arn: undefined,
    CreatedTime: undefined,
    DefaultRuntimeContextDevice: undefined,
    DefaultRuntimeContextDeviceName: undefined,
    Description: undefined,
    HealthStatus: undefined,
    LastUpdatedTime: undefined,
    Name: undefined,
    RuntimeRoleArn: undefined,
    Status: undefined,
    StatusDescription: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId !== undefined && data.ApplicationInstanceId !== null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  if (data.ApplicationInstanceIdToReplace !== undefined && data.ApplicationInstanceIdToReplace !== null) {
    contents.ApplicationInstanceIdToReplace = __expectString(data.ApplicationInstanceIdToReplace);
  }
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DefaultRuntimeContextDevice !== undefined && data.DefaultRuntimeContextDevice !== null) {
    contents.DefaultRuntimeContextDevice = __expectString(data.DefaultRuntimeContextDevice);
  }
  if (data.DefaultRuntimeContextDeviceName !== undefined && data.DefaultRuntimeContextDeviceName !== null) {
    contents.DefaultRuntimeContextDeviceName = __expectString(data.DefaultRuntimeContextDeviceName);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.HealthStatus !== undefined && data.HealthStatus !== null) {
    contents.HealthStatus = __expectString(data.HealthStatus);
  }
  if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RuntimeRoleArn !== undefined && data.RuntimeRoleArn !== null) {
    contents.RuntimeRoleArn = __expectString(data.RuntimeRoleArn);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusDescription !== undefined && data.StatusDescription !== null) {
    contents.StatusDescription = __expectString(data.StatusDescription);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeApplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeApplicationInstanceDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeApplicationInstanceDetailsCommandError(output, context);
  }
  const contents: DescribeApplicationInstanceDetailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationInstanceId: undefined,
    ApplicationInstanceIdToReplace: undefined,
    CreatedTime: undefined,
    DefaultRuntimeContextDevice: undefined,
    Description: undefined,
    ManifestOverridesPayload: undefined,
    ManifestPayload: undefined,
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstanceId !== undefined && data.ApplicationInstanceId !== null) {
    contents.ApplicationInstanceId = __expectString(data.ApplicationInstanceId);
  }
  if (data.ApplicationInstanceIdToReplace !== undefined && data.ApplicationInstanceIdToReplace !== null) {
    contents.ApplicationInstanceIdToReplace = __expectString(data.ApplicationInstanceIdToReplace);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DefaultRuntimeContextDevice !== undefined && data.DefaultRuntimeContextDevice !== null) {
    contents.DefaultRuntimeContextDevice = __expectString(data.DefaultRuntimeContextDevice);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.ManifestOverridesPayload !== undefined && data.ManifestOverridesPayload !== null) {
    contents.ManifestOverridesPayload = deserializeAws_restJson1ManifestOverridesPayload(
      __expectUnion(data.ManifestOverridesPayload),
      context
    );
  }
  if (data.ManifestPayload !== undefined && data.ManifestPayload !== null) {
    contents.ManifestPayload = deserializeAws_restJson1ManifestPayload(__expectUnion(data.ManifestPayload), context);
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeApplicationInstanceDetailsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceDetailsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceCommandError(output, context);
  }
  const contents: DescribeDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreatedTime: undefined,
    CurrentNetworkingStatus: undefined,
    CurrentSoftware: undefined,
    Description: undefined,
    DeviceConnectionStatus: undefined,
    DeviceId: undefined,
    LatestSoftware: undefined,
    LeaseExpirationTime: undefined,
    Name: undefined,
    NetworkingConfiguration: undefined,
    ProvisioningStatus: undefined,
    SerialNumber: undefined,
    Tags: undefined,
    Type: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.CurrentNetworkingStatus !== undefined && data.CurrentNetworkingStatus !== null) {
    contents.CurrentNetworkingStatus = deserializeAws_restJson1NetworkStatus(data.CurrentNetworkingStatus, context);
  }
  if (data.CurrentSoftware !== undefined && data.CurrentSoftware !== null) {
    contents.CurrentSoftware = __expectString(data.CurrentSoftware);
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.DeviceConnectionStatus !== undefined && data.DeviceConnectionStatus !== null) {
    contents.DeviceConnectionStatus = __expectString(data.DeviceConnectionStatus);
  }
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.LatestSoftware !== undefined && data.LatestSoftware !== null) {
    contents.LatestSoftware = __expectString(data.LatestSoftware);
  }
  if (data.LeaseExpirationTime !== undefined && data.LeaseExpirationTime !== null) {
    contents.LeaseExpirationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LeaseExpirationTime)));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NetworkingConfiguration !== undefined && data.NetworkingConfiguration !== null) {
    contents.NetworkingConfiguration = deserializeAws_restJson1NetworkPayload(data.NetworkingConfiguration, context);
  }
  if (data.ProvisioningStatus !== undefined && data.ProvisioningStatus !== null) {
    contents.ProvisioningStatus = __expectString(data.ProvisioningStatus);
  }
  if (data.SerialNumber !== undefined && data.SerialNumber !== null) {
    contents.SerialNumber = __expectString(data.SerialNumber);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeDeviceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeviceJobCommandError(output, context);
  }
  const contents: DescribeDeviceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedTime: undefined,
    DeviceArn: undefined,
    DeviceId: undefined,
    DeviceName: undefined,
    DeviceType: undefined,
    ImageVersion: undefined,
    JobId: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.DeviceArn !== undefined && data.DeviceArn !== null) {
    contents.DeviceArn = __expectString(data.DeviceArn);
  }
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.DeviceName !== undefined && data.DeviceName !== null) {
    contents.DeviceName = __expectString(data.DeviceName);
  }
  if (data.DeviceType !== undefined && data.DeviceType !== null) {
    contents.DeviceType = __expectString(data.DeviceType);
  }
  if (data.ImageVersion !== undefined && data.ImageVersion !== null) {
    contents.ImageVersion = __expectString(data.ImageVersion);
  }
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDeviceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNodeCommandError(output, context);
  }
  const contents: DescribeNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    AssetName: undefined,
    Category: undefined,
    CreatedTime: undefined,
    Description: undefined,
    LastUpdatedTime: undefined,
    Name: undefined,
    NodeId: undefined,
    NodeInterface: undefined,
    OwnerAccount: undefined,
    PackageArn: undefined,
    PackageId: undefined,
    PackageName: undefined,
    PackageVersion: undefined,
    PatchVersion: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssetName !== undefined && data.AssetName !== null) {
    contents.AssetName = __expectString(data.AssetName);
  }
  if (data.Category !== undefined && data.Category !== null) {
    contents.Category = __expectString(data.Category);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.NodeId !== undefined && data.NodeId !== null) {
    contents.NodeId = __expectString(data.NodeId);
  }
  if (data.NodeInterface !== undefined && data.NodeInterface !== null) {
    contents.NodeInterface = deserializeAws_restJson1NodeInterface(data.NodeInterface, context);
  }
  if (data.OwnerAccount !== undefined && data.OwnerAccount !== null) {
    contents.OwnerAccount = __expectString(data.OwnerAccount);
  }
  if (data.PackageArn !== undefined && data.PackageArn !== null) {
    contents.PackageArn = __expectString(data.PackageArn);
  }
  if (data.PackageId !== undefined && data.PackageId !== null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.PackageName !== undefined && data.PackageName !== null) {
    contents.PackageName = __expectString(data.PackageName);
  }
  if (data.PackageVersion !== undefined && data.PackageVersion !== null) {
    contents.PackageVersion = __expectString(data.PackageVersion);
  }
  if (data.PatchVersion !== undefined && data.PatchVersion !== null) {
    contents.PatchVersion = __expectString(data.PatchVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNodeFromTemplateJobCommandError(output, context);
  }
  const contents: DescribeNodeFromTemplateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreatedTime: undefined,
    JobId: undefined,
    JobTags: undefined,
    LastUpdatedTime: undefined,
    NodeDescription: undefined,
    NodeName: undefined,
    OutputPackageName: undefined,
    OutputPackageVersion: undefined,
    Status: undefined,
    StatusMessage: undefined,
    TemplateParameters: undefined,
    TemplateType: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobTags !== undefined && data.JobTags !== null) {
    contents.JobTags = deserializeAws_restJson1JobTagsList(data.JobTags, context);
  }
  if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.NodeDescription !== undefined && data.NodeDescription !== null) {
    contents.NodeDescription = __expectString(data.NodeDescription);
  }
  if (data.NodeName !== undefined && data.NodeName !== null) {
    contents.NodeName = __expectString(data.NodeName);
  }
  if (data.OutputPackageName !== undefined && data.OutputPackageName !== null) {
    contents.OutputPackageName = __expectString(data.OutputPackageName);
  }
  if (data.OutputPackageVersion !== undefined && data.OutputPackageVersion !== null) {
    contents.OutputPackageVersion = __expectString(data.OutputPackageVersion);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  if (data.TemplateParameters !== undefined && data.TemplateParameters !== null) {
    contents.TemplateParameters = deserializeAws_restJson1TemplateParametersMap(data.TemplateParameters, context);
  }
  if (data.TemplateType !== undefined && data.TemplateType !== null) {
    contents.TemplateType = __expectString(data.TemplateType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeNodeFromTemplateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeFromTemplateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackageCommandError(output, context);
  }
  const contents: DescribePackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreatedTime: undefined,
    PackageId: undefined,
    PackageName: undefined,
    ReadAccessPrincipalArns: undefined,
    StorageLocation: undefined,
    Tags: undefined,
    WriteAccessPrincipalArns: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.PackageId !== undefined && data.PackageId !== null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.PackageName !== undefined && data.PackageName !== null) {
    contents.PackageName = __expectString(data.PackageName);
  }
  if (data.ReadAccessPrincipalArns !== undefined && data.ReadAccessPrincipalArns !== null) {
    contents.ReadAccessPrincipalArns = deserializeAws_restJson1PrincipalArnsList(data.ReadAccessPrincipalArns, context);
  }
  if (data.StorageLocation !== undefined && data.StorageLocation !== null) {
    contents.StorageLocation = deserializeAws_restJson1StorageLocation(data.StorageLocation, context);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  if (data.WriteAccessPrincipalArns !== undefined && data.WriteAccessPrincipalArns !== null) {
    contents.WriteAccessPrincipalArns = deserializeAws_restJson1PrincipalArnsList(
      data.WriteAccessPrincipalArns,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackageImportJobCommandError(output, context);
  }
  const contents: DescribePackageImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClientToken: undefined,
    CreatedTime: undefined,
    InputConfig: undefined,
    JobId: undefined,
    JobTags: undefined,
    JobType: undefined,
    LastUpdatedTime: undefined,
    Output: undefined,
    OutputConfig: undefined,
    Status: undefined,
    StatusMessage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ClientToken !== undefined && data.ClientToken !== null) {
    contents.ClientToken = __expectString(data.ClientToken);
  }
  if (data.CreatedTime !== undefined && data.CreatedTime !== null) {
    contents.CreatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTime)));
  }
  if (data.InputConfig !== undefined && data.InputConfig !== null) {
    contents.InputConfig = deserializeAws_restJson1PackageImportJobInputConfig(data.InputConfig, context);
  }
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobTags !== undefined && data.JobTags !== null) {
    contents.JobTags = deserializeAws_restJson1JobTagsList(data.JobTags, context);
  }
  if (data.JobType !== undefined && data.JobType !== null) {
    contents.JobType = __expectString(data.JobType);
  }
  if (data.LastUpdatedTime !== undefined && data.LastUpdatedTime !== null) {
    contents.LastUpdatedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdatedTime)));
  }
  if (data.Output !== undefined && data.Output !== null) {
    contents.Output = deserializeAws_restJson1PackageImportJobOutput(data.Output, context);
  }
  if (data.OutputConfig !== undefined && data.OutputConfig !== null) {
    contents.OutputConfig = deserializeAws_restJson1PackageImportJobOutputConfig(data.OutputConfig, context);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackageImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribePackageVersionCommandError(output, context);
  }
  const contents: DescribePackageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    IsLatestPatch: undefined,
    OwnerAccount: undefined,
    PackageArn: undefined,
    PackageId: undefined,
    PackageName: undefined,
    PackageVersion: undefined,
    PatchVersion: undefined,
    RegisteredTime: undefined,
    Status: undefined,
    StatusDescription: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IsLatestPatch !== undefined && data.IsLatestPatch !== null) {
    contents.IsLatestPatch = __expectBoolean(data.IsLatestPatch);
  }
  if (data.OwnerAccount !== undefined && data.OwnerAccount !== null) {
    contents.OwnerAccount = __expectString(data.OwnerAccount);
  }
  if (data.PackageArn !== undefined && data.PackageArn !== null) {
    contents.PackageArn = __expectString(data.PackageArn);
  }
  if (data.PackageId !== undefined && data.PackageId !== null) {
    contents.PackageId = __expectString(data.PackageId);
  }
  if (data.PackageName !== undefined && data.PackageName !== null) {
    contents.PackageName = __expectString(data.PackageName);
  }
  if (data.PackageVersion !== undefined && data.PackageVersion !== null) {
    contents.PackageVersion = __expectString(data.PackageVersion);
  }
  if (data.PatchVersion !== undefined && data.PatchVersion !== null) {
    contents.PatchVersion = __expectString(data.PatchVersion);
  }
  if (data.RegisteredTime !== undefined && data.RegisteredTime !== null) {
    contents.RegisteredTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.RegisteredTime)));
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusDescription !== undefined && data.StatusDescription !== null) {
    contents.StatusDescription = __expectString(data.StatusDescription);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationInstanceDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationInstanceDependenciesCommandError(output, context);
  }
  const contents: ListApplicationInstanceDependenciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PackageObjects: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageObjects !== undefined && data.PackageObjects !== null) {
    contents.PackageObjects = deserializeAws_restJson1PackageObjects(data.PackageObjects, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationInstanceDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommandError(output, context);
  }
  const contents: ListApplicationInstanceNodeInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    NodeInstances: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NodeInstances !== undefined && data.NodeInstances !== null) {
    contents.NodeInstances = deserializeAws_restJson1NodeInstances(data.NodeInstances, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListApplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApplicationInstancesCommandError(output, context);
  }
  const contents: ListApplicationInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApplicationInstances: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApplicationInstances !== undefined && data.ApplicationInstances !== null) {
    contents.ApplicationInstances = deserializeAws_restJson1ApplicationInstances(data.ApplicationInstances, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListApplicationInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicesCommandError(output, context);
  }
  const contents: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Devices: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Devices !== undefined && data.Devices !== null) {
    contents.Devices = deserializeAws_restJson1DeviceList(data.Devices, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDevicesJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDevicesJobsCommandError(output, context);
  }
  const contents: ListDevicesJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeviceJobs: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceJobs !== undefined && data.DeviceJobs !== null) {
    contents.DeviceJobs = deserializeAws_restJson1DeviceJobList(data.DeviceJobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDevicesJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListNodeFromTemplateJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodeFromTemplateJobsCommandError(output, context);
  }
  const contents: ListNodeFromTemplateJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    NodeFromTemplateJobs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NodeFromTemplateJobs !== undefined && data.NodeFromTemplateJobs !== null) {
    contents.NodeFromTemplateJobs = deserializeAws_restJson1NodeFromTemplateJobList(data.NodeFromTemplateJobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodeFromTemplateJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
  }
  const contents: ListNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Nodes: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Nodes !== undefined && data.Nodes !== null) {
    contents.Nodes = deserializeAws_restJson1NodesList(data.Nodes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPackageImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackageImportJobsCommandError(output, context);
  }
  const contents: ListPackageImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PackageImportJobs: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PackageImportJobs !== undefined && data.PackageImportJobs !== null) {
    contents.PackageImportJobs = deserializeAws_restJson1PackageImportJobList(data.PackageImportJobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackageImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPackagesCommandError(output, context);
  }
  const contents: ListPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Packages: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Packages !== undefined && data.Packages !== null) {
    contents.Packages = deserializeAws_restJson1PackageList(data.Packages, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ProvisionDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ProvisionDeviceCommandError(output, context);
  }
  const contents: ProvisionDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Certificates: undefined,
    DeviceId: undefined,
    IotThingName: undefined,
    Status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Certificates !== undefined && data.Certificates !== null) {
    contents.Certificates = context.base64Decoder(data.Certificates);
  }
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  if (data.IotThingName !== undefined && data.IotThingName !== null) {
    contents.IotThingName = __expectString(data.IotThingName);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ProvisionDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RegisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterPackageVersionCommandError(output, context);
  }
  const contents: RegisterPackageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterPackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RemoveApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveApplicationInstanceCommandError(output, context);
  }
  const contents: RemoveApplicationInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveApplicationInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveApplicationInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateDeviceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeviceMetadataCommandError(output, context);
  }
  const contents: UpdateDeviceMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    DeviceId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceId !== undefined && data.DeviceId !== null) {
    contents.DeviceId = __expectString(data.DeviceId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDeviceMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorArguments !== undefined && data.ErrorArguments !== null) {
    contents.ErrorArguments = deserializeAws_restJson1ConflictExceptionErrorArgumentList(data.ErrorArguments, context);
  }
  if (data.ErrorId !== undefined && data.ErrorId !== null) {
    contents.ErrorId = __expectString(data.ErrorId);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId !== undefined && data.ResourceId !== null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.ErrorArguments !== undefined && data.ErrorArguments !== null) {
    contents.ErrorArguments = deserializeAws_restJson1ValidationExceptionErrorArgumentList(
      data.ErrorArguments,
      context
    );
  }
  if (data.ErrorId !== undefined && data.ErrorId !== null) {
    contents.ErrorId = __expectString(data.ErrorId);
  }
  if (data.Fields !== undefined && data.Fields !== null) {
    contents.Fields = deserializeAws_restJson1ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1DeviceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1DeviceJobConfig = (input: DeviceJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.OTAJobConfig !== undefined &&
      input.OTAJobConfig !== null && { OTAJobConfig: serializeAws_restJson1OTAJobConfig(input.OTAJobConfig, context) }),
  };
};

const serializeAws_restJson1DnsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1EthernetPayload = (input: EthernetPayload, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { ConnectionType: input.ConnectionType }),
    ...(input.StaticIpConnectionInfo !== undefined &&
      input.StaticIpConnectionInfo !== null && {
        StaticIpConnectionInfo: serializeAws_restJson1StaticIpConnectionInfo(input.StaticIpConnectionInfo, context),
      }),
  };
};

const serializeAws_restJson1JobResourceTags = (input: JobResourceTags, context: __SerdeContext): any => {
  return {
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  };
};

const serializeAws_restJson1JobTagsList = (input: JobResourceTags[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1JobResourceTags(entry, context);
    });
};

const serializeAws_restJson1ManifestOverridesPayload = (
  input: ManifestOverridesPayload,
  context: __SerdeContext
): any => {
  return ManifestOverridesPayload.visit(input, {
    PayloadData: (value) => ({ PayloadData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ManifestPayload = (input: ManifestPayload, context: __SerdeContext): any => {
  return ManifestPayload.visit(input, {
    PayloadData: (value) => ({ PayloadData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1NetworkPayload = (input: NetworkPayload, context: __SerdeContext): any => {
  return {
    ...(input.Ethernet0 !== undefined &&
      input.Ethernet0 !== null && { Ethernet0: serializeAws_restJson1EthernetPayload(input.Ethernet0, context) }),
    ...(input.Ethernet1 !== undefined &&
      input.Ethernet1 !== null && { Ethernet1: serializeAws_restJson1EthernetPayload(input.Ethernet1, context) }),
  };
};

const serializeAws_restJson1OTAJobConfig = (input: OTAJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.ImageVersion !== undefined && input.ImageVersion !== null && { ImageVersion: input.ImageVersion }),
  };
};

const serializeAws_restJson1PackageImportJobInputConfig = (
  input: PackageImportJobInputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.PackageVersionInputConfig !== undefined &&
      input.PackageVersionInputConfig !== null && {
        PackageVersionInputConfig: serializeAws_restJson1PackageVersionInputConfig(
          input.PackageVersionInputConfig,
          context
        ),
      }),
  };
};

const serializeAws_restJson1PackageImportJobOutputConfig = (
  input: PackageImportJobOutputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.PackageVersionOutputConfig !== undefined &&
      input.PackageVersionOutputConfig !== null && {
        PackageVersionOutputConfig: serializeAws_restJson1PackageVersionOutputConfig(
          input.PackageVersionOutputConfig,
          context
        ),
      }),
  };
};

const serializeAws_restJson1PackageVersionInputConfig = (
  input: PackageVersionInputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Location !== undefined &&
      input.S3Location !== null && { S3Location: serializeAws_restJson1S3Location(input.S3Location, context) }),
  };
};

const serializeAws_restJson1PackageVersionOutputConfig = (
  input: PackageVersionOutputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.MarkLatest !== undefined && input.MarkLatest !== null && { MarkLatest: input.MarkLatest }),
    ...(input.PackageName !== undefined && input.PackageName !== null && { PackageName: input.PackageName }),
    ...(input.PackageVersion !== undefined &&
      input.PackageVersion !== null && { PackageVersion: input.PackageVersion }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
    ...(input.ObjectKey !== undefined && input.ObjectKey !== null && { ObjectKey: input.ObjectKey }),
    ...(input.Region !== undefined && input.Region !== null && { Region: input.Region }),
  };
};

const serializeAws_restJson1StaticIpConnectionInfo = (input: StaticIpConnectionInfo, context: __SerdeContext): any => {
  return {
    ...(input.DefaultGateway !== undefined &&
      input.DefaultGateway !== null && { DefaultGateway: input.DefaultGateway }),
    ...(input.Dns !== undefined && input.Dns !== null && { Dns: serializeAws_restJson1DnsList(input.Dns, context) }),
    ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
    ...(input.Mask !== undefined && input.Mask !== null && { Mask: input.Mask }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1TemplateParametersMap = (
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

const deserializeAws_restJson1ApplicationInstance = (output: any, context: __SerdeContext): ApplicationInstance => {
  return {
    ApplicationInstanceId: __expectString(output.ApplicationInstanceId),
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DefaultRuntimeContextDevice: __expectString(output.DefaultRuntimeContextDevice),
    DefaultRuntimeContextDeviceName: __expectString(output.DefaultRuntimeContextDeviceName),
    Description: __expectString(output.Description),
    HealthStatus: __expectString(output.HealthStatus),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    StatusDescription: __expectString(output.StatusDescription),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ApplicationInstances = (output: any, context: __SerdeContext): ApplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConflictExceptionErrorArgument = (
  output: any,
  context: __SerdeContext
): ConflictExceptionErrorArgument => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ConflictExceptionErrorArgumentList = (
  output: any,
  context: __SerdeContext
): ConflictExceptionErrorArgument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConflictExceptionErrorArgument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DeviceId: __expectString(output.DeviceId),
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    LeaseExpirationTime:
      output.LeaseExpirationTime !== undefined && output.LeaseExpirationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LeaseExpirationTime)))
        : undefined,
    Name: __expectString(output.Name),
    ProvisioningStatus: __expectString(output.ProvisioningStatus),
  } as any;
};

const deserializeAws_restJson1DeviceJob = (output: any, context: __SerdeContext): DeviceJob => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    DeviceId: __expectString(output.DeviceId),
    DeviceName: __expectString(output.DeviceName),
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_restJson1DeviceJobList = (output: any, context: __SerdeContext): DeviceJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DnsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EthernetPayload = (output: any, context: __SerdeContext): EthernetPayload => {
  return {
    ConnectionType: __expectString(output.ConnectionType),
    StaticIpConnectionInfo:
      output.StaticIpConnectionInfo !== undefined && output.StaticIpConnectionInfo !== null
        ? deserializeAws_restJson1StaticIpConnectionInfo(output.StaticIpConnectionInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EthernetStatus = (output: any, context: __SerdeContext): EthernetStatus => {
  return {
    ConnectionStatus: __expectString(output.ConnectionStatus),
    HwAddress: __expectString(output.HwAddress),
    IpAddress: __expectString(output.IpAddress),
  } as any;
};

const deserializeAws_restJson1InputPortList = (output: any, context: __SerdeContext): NodeInputPort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeInputPort(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Job = (output: any, context: __SerdeContext): Job => {
  return {
    DeviceId: __expectString(output.DeviceId),
    JobId: __expectString(output.JobId),
  } as any;
};

const deserializeAws_restJson1JobList = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Job(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobResourceTags = (output: any, context: __SerdeContext): JobResourceTags => {
  return {
    ResourceType: __expectString(output.ResourceType),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1JobTagsList = (output: any, context: __SerdeContext): JobResourceTags[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JobResourceTags(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ManifestOverridesPayload = (
  output: any,
  context: __SerdeContext
): ManifestOverridesPayload => {
  if (__expectString(output.PayloadData) !== undefined) {
    return { PayloadData: __expectString(output.PayloadData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ManifestPayload = (output: any, context: __SerdeContext): ManifestPayload => {
  if (__expectString(output.PayloadData) !== undefined) {
    return { PayloadData: __expectString(output.PayloadData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1NetworkPayload = (output: any, context: __SerdeContext): NetworkPayload => {
  return {
    Ethernet0:
      output.Ethernet0 !== undefined && output.Ethernet0 !== null
        ? deserializeAws_restJson1EthernetPayload(output.Ethernet0, context)
        : undefined,
    Ethernet1:
      output.Ethernet1 !== undefined && output.Ethernet1 !== null
        ? deserializeAws_restJson1EthernetPayload(output.Ethernet1, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkStatus = (output: any, context: __SerdeContext): NetworkStatus => {
  return {
    Ethernet0Status:
      output.Ethernet0Status !== undefined && output.Ethernet0Status !== null
        ? deserializeAws_restJson1EthernetStatus(output.Ethernet0Status, context)
        : undefined,
    Ethernet1Status:
      output.Ethernet1Status !== undefined && output.Ethernet1Status !== null
        ? deserializeAws_restJson1EthernetStatus(output.Ethernet1Status, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Node = (output: any, context: __SerdeContext): Node => {
  return {
    Category: __expectString(output.Category),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    NodeId: __expectString(output.NodeId),
    OwnerAccount: __expectString(output.OwnerAccount),
    PackageArn: __expectString(output.PackageArn),
    PackageId: __expectString(output.PackageId),
    PackageName: __expectString(output.PackageName),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

const deserializeAws_restJson1NodeFromTemplateJob = (output: any, context: __SerdeContext): NodeFromTemplateJob => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    JobId: __expectString(output.JobId),
    NodeName: __expectString(output.NodeName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    TemplateType: __expectString(output.TemplateType),
  } as any;
};

const deserializeAws_restJson1NodeFromTemplateJobList = (
  output: any,
  context: __SerdeContext
): NodeFromTemplateJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeFromTemplateJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NodeInputPort = (output: any, context: __SerdeContext): NodeInputPort => {
  return {
    DefaultValue: __expectString(output.DefaultValue),
    Description: __expectString(output.Description),
    MaxConnections: __expectInt32(output.MaxConnections),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1NodeInstance = (output: any, context: __SerdeContext): NodeInstance => {
  return {
    CurrentStatus: __expectString(output.CurrentStatus),
    NodeId: __expectString(output.NodeId),
    NodeInstanceId: __expectString(output.NodeInstanceId),
    NodeName: __expectString(output.NodeName),
    PackageName: __expectString(output.PackageName),
    PackagePatchVersion: __expectString(output.PackagePatchVersion),
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

const deserializeAws_restJson1NodeInstances = (output: any, context: __SerdeContext): NodeInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NodeInterface = (output: any, context: __SerdeContext): NodeInterface => {
  return {
    Inputs:
      output.Inputs !== undefined && output.Inputs !== null
        ? deserializeAws_restJson1InputPortList(output.Inputs, context)
        : undefined,
    Outputs:
      output.Outputs !== undefined && output.Outputs !== null
        ? deserializeAws_restJson1OutputPortList(output.Outputs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodeOutputPort = (output: any, context: __SerdeContext): NodeOutputPort => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1NodesList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Node(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutputPortList = (output: any, context: __SerdeContext): NodeOutputPort[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeOutputPort(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutPutS3Location = (output: any, context: __SerdeContext): OutPutS3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
  } as any;
};

const deserializeAws_restJson1PackageImportJob = (output: any, context: __SerdeContext): PackageImportJob => {
  return {
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    JobId: __expectString(output.JobId),
    JobType: __expectString(output.JobType),
    LastUpdatedTime:
      output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1PackageImportJobInputConfig = (
  output: any,
  context: __SerdeContext
): PackageImportJobInputConfig => {
  return {
    PackageVersionInputConfig:
      output.PackageVersionInputConfig !== undefined && output.PackageVersionInputConfig !== null
        ? deserializeAws_restJson1PackageVersionInputConfig(output.PackageVersionInputConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageImportJobList = (output: any, context: __SerdeContext): PackageImportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageImportJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageImportJobOutput = (
  output: any,
  context: __SerdeContext
): PackageImportJobOutput => {
  return {
    OutputS3Location:
      output.OutputS3Location !== undefined && output.OutputS3Location !== null
        ? deserializeAws_restJson1OutPutS3Location(output.OutputS3Location, context)
        : undefined,
    PackageId: __expectString(output.PackageId),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

const deserializeAws_restJson1PackageImportJobOutputConfig = (
  output: any,
  context: __SerdeContext
): PackageImportJobOutputConfig => {
  return {
    PackageVersionOutputConfig:
      output.PackageVersionOutputConfig !== undefined && output.PackageVersionOutputConfig !== null
        ? deserializeAws_restJson1PackageVersionOutputConfig(output.PackageVersionOutputConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageList = (output: any, context: __SerdeContext): PackageListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageListItem = (output: any, context: __SerdeContext): PackageListItem => {
  return {
    Arn: __expectString(output.Arn),
    CreatedTime:
      output.CreatedTime !== undefined && output.CreatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedTime)))
        : undefined,
    PackageId: __expectString(output.PackageId),
    PackageName: __expectString(output.PackageName),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageObject = (output: any, context: __SerdeContext): PackageObject => {
  return {
    Name: __expectString(output.Name),
    PackageVersion: __expectString(output.PackageVersion),
    PatchVersion: __expectString(output.PatchVersion),
  } as any;
};

const deserializeAws_restJson1PackageObjects = (output: any, context: __SerdeContext): PackageObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PackageObject(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PackageVersionInputConfig = (
  output: any,
  context: __SerdeContext
): PackageVersionInputConfig => {
  return {
    S3Location:
      output.S3Location !== undefined && output.S3Location !== null
        ? deserializeAws_restJson1S3Location(output.S3Location, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageVersionOutputConfig = (
  output: any,
  context: __SerdeContext
): PackageVersionOutputConfig => {
  return {
    MarkLatest: __expectBoolean(output.MarkLatest),
    PackageName: __expectString(output.PackageName),
    PackageVersion: __expectString(output.PackageVersion),
  } as any;
};

const deserializeAws_restJson1PrincipalArnsList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    BucketName: __expectString(output.BucketName),
    ObjectKey: __expectString(output.ObjectKey),
    Region: __expectString(output.Region),
  } as any;
};

const deserializeAws_restJson1StaticIpConnectionInfo = (
  output: any,
  context: __SerdeContext
): StaticIpConnectionInfo => {
  return {
    DefaultGateway: __expectString(output.DefaultGateway),
    Dns:
      output.Dns !== undefined && output.Dns !== null
        ? deserializeAws_restJson1DnsList(output.Dns, context)
        : undefined,
    IpAddress: __expectString(output.IpAddress),
    Mask: __expectString(output.Mask),
  } as any;
};

const deserializeAws_restJson1StorageLocation = (output: any, context: __SerdeContext): StorageLocation => {
  return {
    BinaryPrefixLocation: __expectString(output.BinaryPrefixLocation),
    Bucket: __expectString(output.Bucket),
    GeneratedPrefixLocation: __expectString(output.GeneratedPrefixLocation),
    ManifestPrefixLocation: __expectString(output.ManifestPrefixLocation),
    RepoPrefixLocation: __expectString(output.RepoPrefixLocation),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1TemplateParametersMap = (
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

const deserializeAws_restJson1ValidationExceptionErrorArgument = (
  output: any,
  context: __SerdeContext
): ValidationExceptionErrorArgument => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionErrorArgumentList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionErrorArgument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionErrorArgument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
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
