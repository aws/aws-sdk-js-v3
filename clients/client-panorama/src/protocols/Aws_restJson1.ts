// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  SignalApplicationInstanceNodeInstancesCommandInput,
  SignalApplicationInstanceNodeInstancesCommandOutput,
} from "../commands/SignalApplicationInstanceNodeInstancesCommand";
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
  Device,
  DeviceJob,
  DeviceJobConfig,
  EthernetPayload,
  InternalServerException,
  JobResourceTags,
  ManifestOverridesPayload,
  ManifestPayload,
  NetworkPayload,
  NetworkStatus,
  Node,
  NodeFromTemplateJob,
  NodeSignal,
  NtpPayload,
  OTAJobConfig,
  PackageImportJob,
  PackageImportJobInputConfig,
  PackageImportJobOutputConfig,
  PackageListItem,
  PackageVersionInputConfig,
  PackageVersionOutputConfig,
  ReportedRuntimeContextState,
  ResourceNotFoundException,
  S3Location,
  ServiceQuotaExceededException,
  StaticIpConnectionInfo,
  ValidationException,
} from "../models/models_0";
import { PanoramaServiceException as __BaseException } from "../models/PanoramaServiceException";

/**
 * serializeAws_restJson1CreateApplicationInstanceCommand
 */
export const se_CreateApplicationInstanceCommand = async (
  input: CreateApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/application-instances");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ApplicationInstanceIdToReplace: [],
      DefaultRuntimeContextDevice: [],
      Description: [],
      ManifestOverridesPayload: (_) => _json(_),
      ManifestPayload: (_) => _json(_),
      Name: [],
      RuntimeRoleArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateJobForDevicesCommand
 */
export const se_CreateJobForDevicesCommand = async (
  input: CreateJobForDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceIds: (_) => _json(_),
      DeviceJobConfig: (_) => _json(_),
      JobType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNodeFromTemplateJobCommand
 */
export const se_CreateNodeFromTemplateJobCommand = async (
  input: CreateNodeFromTemplateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/template-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      JobTags: (_) => _json(_),
      NodeDescription: [],
      NodeName: [],
      OutputPackageName: [],
      OutputPackageVersion: [],
      TemplateParameters: (_) => _json(_),
      TemplateType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePackageCommand
 */
export const se_CreatePackageCommand = async (
  input: CreatePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PackageName: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePackageImportJobCommand
 */
export const se_CreatePackageImportJobCommand = async (
  input: CreatePackageImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/import-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [],
      InputConfig: (_) => _json(_),
      JobTags: (_) => _json(_),
      JobType: [],
      OutputConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeviceCommand
 */
export const se_DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/devices/{DeviceId}");
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{PackageId}");
  b.p("PackageId", () => input.PackageId!, "{PackageId}", false);
  const query: any = map({
    [_FD]: [() => input.ForceDelete !== void 0, () => input[_FD]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterPackageVersionCommand
 */
export const se_DeregisterPackageVersionCommand = async (
  input: DeregisterPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}");
  b.p("PackageId", () => input.PackageId!, "{PackageId}", false);
  b.p("PackageVersion", () => input.PackageVersion!, "{PackageVersion}", false);
  b.p("PatchVersion", () => input.PatchVersion!, "{PatchVersion}", false);
  const query: any = map({
    [_OA]: [, input[_OA]!],
    [_ULPV]: [, input[_ULPV]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeApplicationInstanceCommand
 */
export const se_DescribeApplicationInstanceCommand = async (
  input: DescribeApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/application-instances/{ApplicationInstanceId}");
  b.p("ApplicationInstanceId", () => input.ApplicationInstanceId!, "{ApplicationInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeApplicationInstanceDetailsCommand
 */
export const se_DescribeApplicationInstanceDetailsCommand = async (
  input: DescribeApplicationInstanceDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/application-instances/{ApplicationInstanceId}/details");
  b.p("ApplicationInstanceId", () => input.ApplicationInstanceId!, "{ApplicationInstanceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDeviceCommand
 */
export const se_DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/devices/{DeviceId}");
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDeviceJobCommand
 */
export const se_DescribeDeviceJobCommand = async (
  input: DescribeDeviceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs/{JobId}");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeNodeCommand
 */
export const se_DescribeNodeCommand = async (
  input: DescribeNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/nodes/{NodeId}");
  b.p("NodeId", () => input.NodeId!, "{NodeId}", false);
  const query: any = map({
    [_OA]: [, input[_OA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeNodeFromTemplateJobCommand
 */
export const se_DescribeNodeFromTemplateJobCommand = async (
  input: DescribeNodeFromTemplateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/template-job/{JobId}");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackageCommand
 */
export const se_DescribePackageCommand = async (
  input: DescribePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/metadata/{PackageId}");
  b.p("PackageId", () => input.PackageId!, "{PackageId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackageImportJobCommand
 */
export const se_DescribePackageImportJobCommand = async (
  input: DescribePackageImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/import-jobs/{JobId}");
  b.p("JobId", () => input.JobId!, "{JobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribePackageVersionCommand
 */
export const se_DescribePackageVersionCommand = async (
  input: DescribePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/metadata/{PackageId}/versions/{PackageVersion}");
  b.p("PackageId", () => input.PackageId!, "{PackageId}", false);
  b.p("PackageVersion", () => input.PackageVersion!, "{PackageVersion}", false);
  const query: any = map({
    [_OA]: [, input[_OA]!],
    [_PV]: [, input[_PV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationInstanceDependenciesCommand
 */
export const se_ListApplicationInstanceDependenciesCommand = async (
  input: ListApplicationInstanceDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/application-instances/{ApplicationInstanceId}/package-dependencies");
  b.p("ApplicationInstanceId", () => input.ApplicationInstanceId!, "{ApplicationInstanceId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationInstanceNodeInstancesCommand
 */
export const se_ListApplicationInstanceNodeInstancesCommand = async (
  input: ListApplicationInstanceNodeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/application-instances/{ApplicationInstanceId}/node-instances");
  b.p("ApplicationInstanceId", () => input.ApplicationInstanceId!, "{ApplicationInstanceId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListApplicationInstancesCommand
 */
export const se_ListApplicationInstancesCommand = async (
  input: ListApplicationInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/application-instances");
  const query: any = map({
    [_dI]: [, input[_DI]!],
    [_sF]: [, input[_SF]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/devices");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_SB]: [, input[_SB]!],
    [_SO]: [, input[_SO]!],
    [_NF]: [, input[_NF]!],
    [_DASF]: [, input[_DASF]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevicesJobsCommand
 */
export const se_ListDevicesJobsCommand = async (
  input: ListDevicesJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/jobs");
  const query: any = map({
    [_DI]: [, input[_DI]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNodeFromTemplateJobsCommand
 */
export const se_ListNodeFromTemplateJobsCommand = async (
  input: ListNodeFromTemplateJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/template-job");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNodesCommand
 */
export const se_ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/nodes");
  const query: any = map({
    [_c]: [, input[_C]!],
    [_oA]: [, input[_OA]!],
    [_pN]: [, input[_PN]!],
    [_pV]: [, input[_PVa]!],
    [_pVa]: [, input[_PV]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackageImportJobsCommand
 */
export const se_ListPackageImportJobsCommand = async (
  input: ListPackageImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages/import-jobs");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPackagesCommand
 */
export const se_ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/packages");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ProvisionDeviceCommand
 */
export const se_ProvisionDeviceCommand = async (
  input: ProvisionDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/devices");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      NetworkingConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterPackageVersionCommand
 */
export const se_RegisterPackageVersionCommand = async (
  input: RegisterPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/packages/{PackageId}/versions/{PackageVersion}/patch/{PatchVersion}");
  b.p("PackageId", () => input.PackageId!, "{PackageId}", false);
  b.p("PackageVersion", () => input.PackageVersion!, "{PackageVersion}", false);
  b.p("PatchVersion", () => input.PatchVersion!, "{PatchVersion}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MarkLatest: [],
      OwnerAccount: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveApplicationInstanceCommand
 */
export const se_RemoveApplicationInstanceCommand = async (
  input: RemoveApplicationInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/application-instances/{ApplicationInstanceId}");
  b.p("ApplicationInstanceId", () => input.ApplicationInstanceId!, "{ApplicationInstanceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand
 */
export const se_SignalApplicationInstanceNodeInstancesCommand = async (
  input: SignalApplicationInstanceNodeInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/application-instances/{ApplicationInstanceId}/node-signals");
  b.p("ApplicationInstanceId", () => input.ApplicationInstanceId!, "{ApplicationInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      NodeSignals: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeviceMetadataCommand
 */
export const se_UpdateDeviceMetadataCommand = async (
  input: UpdateDeviceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/devices/{DeviceId}");
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateApplicationInstanceCommand
 */
export const de_CreateApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationInstanceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateJobForDevicesCommand
 */
export const de_CreateJobForDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateJobForDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Jobs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNodeFromTemplateJobCommand
 */
export const de_CreateNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageCommand
 */
export const de_CreatePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    PackageId: __expectString,
    StorageLocation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePackageImportJobCommand
 */
export const de_CreatePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceCommand
 */
export const de_DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeviceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
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
 * deserializeAws_restJson1DeregisterPackageVersionCommand
 */
export const de_DeregisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterPackageVersionCommandOutput> => {
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
 * deserializeAws_restJson1DescribeApplicationInstanceCommand
 */
export const de_DescribeApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationInstanceId: __expectString,
    ApplicationInstanceIdToReplace: __expectString,
    Arn: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultRuntimeContextDevice: __expectString,
    DefaultRuntimeContextDeviceName: __expectString,
    Description: __expectString,
    HealthStatus: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RuntimeContextStates: (_) => de_ReportedRuntimeContextStates(_, context),
    RuntimeRoleArn: __expectString,
    Status: __expectString,
    StatusDescription: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeApplicationInstanceDetailsCommand
 */
export const de_DescribeApplicationInstanceDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationInstanceDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationInstanceId: __expectString,
    ApplicationInstanceIdToReplace: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultRuntimeContextDevice: __expectString,
    Description: __expectString,
    ManifestOverridesPayload: (_) => _json(__expectUnion(_)),
    ManifestPayload: (_) => _json(__expectUnion(_)),
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDeviceCommand
 */
export const de_DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AlternateSoftwares: _json,
    Arn: __expectString,
    Brand: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentNetworkingStatus: (_) => de_NetworkStatus(_, context),
    CurrentSoftware: __expectString,
    Description: __expectString,
    DeviceAggregatedStatus: __expectString,
    DeviceConnectionStatus: __expectString,
    DeviceId: __expectString,
    LatestAlternateSoftware: __expectString,
    LatestDeviceJob: _json,
    LatestSoftware: __expectString,
    LeaseExpirationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NetworkingConfiguration: _json,
    ProvisioningStatus: __expectString,
    SerialNumber: __expectString,
    Tags: _json,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDeviceJobCommand
 */
export const de_DescribeDeviceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceArn: __expectString,
    DeviceId: __expectString,
    DeviceName: __expectString,
    DeviceType: __expectString,
    ImageVersion: __expectString,
    JobId: __expectString,
    JobType: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNodeCommand
 */
export const de_DescribeNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssetName: __expectString,
    Category: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    NodeId: __expectString,
    NodeInterface: _json,
    OwnerAccount: __expectString,
    PackageArn: __expectString,
    PackageId: __expectString,
    PackageName: __expectString,
    PackageVersion: __expectString,
    PatchVersion: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNodeFromTemplateJobCommand
 */
export const de_DescribeNodeFromTemplateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodeFromTemplateJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobId: __expectString,
    JobTags: _json,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NodeDescription: __expectString,
    NodeName: __expectString,
    OutputPackageName: __expectString,
    OutputPackageVersion: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    TemplateParameters: _json,
    TemplateType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageCommand
 */
export const de_DescribePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageId: __expectString,
    PackageName: __expectString,
    ReadAccessPrincipalArns: _json,
    StorageLocation: _json,
    Tags: _json,
    WriteAccessPrincipalArns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageImportJobCommand
 */
export const de_DescribePackageImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClientToken: __expectString,
    CreatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputConfig: _json,
    JobId: __expectString,
    JobTags: _json,
    JobType: __expectString,
    LastUpdatedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Output: _json,
    OutputConfig: _json,
    Status: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageVersionCommand
 */
export const de_DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IsLatestPatch: __expectBoolean,
    OwnerAccount: __expectString,
    PackageArn: __expectString,
    PackageId: __expectString,
    PackageName: __expectString,
    PackageVersion: __expectString,
    PatchVersion: __expectString,
    RegisteredTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusDescription: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationInstanceDependenciesCommand
 */
export const de_ListApplicationInstanceDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PackageObjects: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationInstanceNodeInstancesCommand
 */
export const de_ListApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    NodeInstances: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListApplicationInstancesCommand
 */
export const de_ListApplicationInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationInstances: (_) => de_ApplicationInstances(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Devices: (_) => de_DeviceList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesJobsCommand
 */
export const de_ListDevicesJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeviceJobs: (_) => de_DeviceJobList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNodeFromTemplateJobsCommand
 */
export const de_ListNodeFromTemplateJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodeFromTemplateJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    NodeFromTemplateJobs: (_) => de_NodeFromTemplateJobList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNodesCommand
 */
export const de_ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Nodes: (_) => de_NodesList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageImportJobsCommand
 */
export const de_ListPackageImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PackageImportJobs: (_) => de_PackageImportJobList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesCommand
 */
export const de_ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Packages: (_) => de_PackageList(_, context),
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ProvisionDeviceCommand
 */
export const de_ProvisionDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ProvisionDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Certificates: context.base64Decoder,
    DeviceId: __expectString,
    IotThingName: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterPackageVersionCommand
 */
export const de_RegisterPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterPackageVersionCommandOutput> => {
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
 * deserializeAws_restJson1RemoveApplicationInstanceCommand
 */
export const de_RemoveApplicationInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveApplicationInstanceCommandOutput> => {
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
 * deserializeAws_restJson1SignalApplicationInstanceNodeInstancesCommand
 */
export const de_SignalApplicationInstanceNodeInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalApplicationInstanceNodeInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApplicationInstanceId: __expectString,
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
 * deserializeAws_restJson1UpdateDeviceMetadataCommand
 */
export const de_UpdateDeviceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeviceId: __expectString,
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
    case "com.amazonaws.panorama#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.panorama#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.panorama#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.panorama#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.panorama#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.panorama#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
    Message: __expectString,
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
    ErrorArguments: _json,
    ErrorId: __expectString,
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
  const contents: any = map({
    [_RAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
    QuotaCode: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    ErrorArguments: _json,
    ErrorId: __expectString,
    Fields: _json,
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DeviceIdList omitted.

// se_DeviceJobConfig omitted.

// se_DnsList omitted.

// se_EthernetPayload omitted.

// se_JobResourceTags omitted.

// se_JobTagsList omitted.

// se_ManifestOverridesPayload omitted.

// se_ManifestPayload omitted.

// se_NetworkPayload omitted.

// se_NodeSignal omitted.

// se_NodeSignalList omitted.

// se_NtpPayload omitted.

// se_NtpServerList omitted.

// se_OTAJobConfig omitted.

// se_PackageImportJobInputConfig omitted.

// se_PackageImportJobOutputConfig omitted.

// se_PackageVersionInputConfig omitted.

// se_PackageVersionOutputConfig omitted.

// se_S3Location omitted.

// se_StaticIpConnectionInfo omitted.

// se_TagMap omitted.

// se_TemplateParametersMap omitted.

// de_AlternateSoftwareMetadata omitted.

// de_AlternateSoftwares omitted.

/**
 * deserializeAws_restJson1ApplicationInstance
 */
const de_ApplicationInstance = (output: any, context: __SerdeContext): ApplicationInstance => {
  return take(output, {
    ApplicationInstanceId: __expectString,
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultRuntimeContextDevice: __expectString,
    DefaultRuntimeContextDeviceName: __expectString,
    Description: __expectString,
    HealthStatus: __expectString,
    Name: __expectString,
    RuntimeContextStates: (_: any) => de_ReportedRuntimeContextStates(_, context),
    Status: __expectString,
    StatusDescription: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ApplicationInstances
 */
const de_ApplicationInstances = (output: any, context: __SerdeContext): ApplicationInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ApplicationInstance(entry, context);
    });
  return retVal;
};

// de_ConflictExceptionErrorArgument omitted.

// de_ConflictExceptionErrorArgumentList omitted.

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return take(output, {
    Brand: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CurrentSoftware: __expectString,
    Description: __expectString,
    DeviceAggregatedStatus: __expectString,
    DeviceId: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestDeviceJob: _json,
    LeaseExpirationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    ProvisioningStatus: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeviceJob
 */
const de_DeviceJob = (output: any, context: __SerdeContext): DeviceJob => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceId: __expectString,
    DeviceName: __expectString,
    JobId: __expectString,
    JobType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeviceJobList
 */
const de_DeviceJobList = (output: any, context: __SerdeContext): DeviceJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeviceList
 */
const de_DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Device(entry, context);
    });
  return retVal;
};

// de_DnsList omitted.

// de_EthernetPayload omitted.

// de_EthernetStatus omitted.

// de_InputPortList omitted.

// de_Job omitted.

// de_JobList omitted.

// de_JobResourceTags omitted.

// de_JobTagsList omitted.

// de_LatestDeviceJob omitted.

// de_ManifestOverridesPayload omitted.

// de_ManifestPayload omitted.

// de_NetworkPayload omitted.

/**
 * deserializeAws_restJson1NetworkStatus
 */
const de_NetworkStatus = (output: any, context: __SerdeContext): NetworkStatus => {
  return take(output, {
    Ethernet0Status: _json,
    Ethernet1Status: _json,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NtpStatus: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1Node
 */
const de_Node = (output: any, context: __SerdeContext): Node => {
  return take(output, {
    Category: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Name: __expectString,
    NodeId: __expectString,
    OwnerAccount: __expectString,
    PackageArn: __expectString,
    PackageId: __expectString,
    PackageName: __expectString,
    PackageVersion: __expectString,
    PatchVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NodeFromTemplateJob
 */
const de_NodeFromTemplateJob = (output: any, context: __SerdeContext): NodeFromTemplateJob => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobId: __expectString,
    NodeName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    TemplateType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NodeFromTemplateJobList
 */
const de_NodeFromTemplateJobList = (output: any, context: __SerdeContext): NodeFromTemplateJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NodeFromTemplateJob(entry, context);
    });
  return retVal;
};

// de_NodeInputPort omitted.

// de_NodeInstance omitted.

// de_NodeInstances omitted.

// de_NodeInterface omitted.

// de_NodeOutputPort omitted.

/**
 * deserializeAws_restJson1NodesList
 */
const de_NodesList = (output: any, context: __SerdeContext): Node[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Node(entry, context);
    });
  return retVal;
};

// de_NtpPayload omitted.

// de_NtpServerList omitted.

// de_NtpStatus omitted.

// de_OutputPortList omitted.

// de_OutPutS3Location omitted.

/**
 * deserializeAws_restJson1PackageImportJob
 */
const de_PackageImportJob = (output: any, context: __SerdeContext): PackageImportJob => {
  return take(output, {
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobId: __expectString,
    JobType: __expectString,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_PackageImportJobInputConfig omitted.

/**
 * deserializeAws_restJson1PackageImportJobList
 */
const de_PackageImportJobList = (output: any, context: __SerdeContext): PackageImportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageImportJob(entry, context);
    });
  return retVal;
};

// de_PackageImportJobOutput omitted.

// de_PackageImportJobOutputConfig omitted.

/**
 * deserializeAws_restJson1PackageList
 */
const de_PackageList = (output: any, context: __SerdeContext): PackageListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PackageListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PackageListItem
 */
const de_PackageListItem = (output: any, context: __SerdeContext): PackageListItem => {
  return take(output, {
    Arn: __expectString,
    CreatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PackageId: __expectString,
    PackageName: __expectString,
    Tags: _json,
  }) as any;
};

// de_PackageObject omitted.

// de_PackageObjects omitted.

// de_PackageVersionInputConfig omitted.

// de_PackageVersionOutputConfig omitted.

// de_PrincipalArnsList omitted.

/**
 * deserializeAws_restJson1ReportedRuntimeContextState
 */
const de_ReportedRuntimeContextState = (output: any, context: __SerdeContext): ReportedRuntimeContextState => {
  return take(output, {
    DesiredState: __expectString,
    DeviceReportedStatus: __expectString,
    DeviceReportedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuntimeContextName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReportedRuntimeContextStates
 */
const de_ReportedRuntimeContextStates = (output: any, context: __SerdeContext): ReportedRuntimeContextState[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReportedRuntimeContextState(entry, context);
    });
  return retVal;
};

// de_S3Location omitted.

// de_StaticIpConnectionInfo omitted.

// de_StorageLocation omitted.

// de_TagMap omitted.

// de_TemplateParametersMap omitted.

// de_ValidationExceptionErrorArgument omitted.

// de_ValidationExceptionErrorArgumentList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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

const _C = "Category";
const _DASF = "DeviceAggregatedStatusFilter";
const _DI = "DeviceId";
const _FD = "ForceDelete";
const _MR = "MaxResults";
const _NF = "NameFilter";
const _NT = "NextToken";
const _OA = "OwnerAccount";
const _PN = "PackageName";
const _PV = "PatchVersion";
const _PVa = "PackageVersion";
const _RAS = "RetryAfterSeconds";
const _SB = "SortBy";
const _SF = "StatusFilter";
const _SO = "SortOrder";
const _TK = "TagKeys";
const _ULPV = "UpdatedLatestPatchVersion";
const _c = "category";
const _dI = "deviceId";
const _mR = "maxResults";
const _nT = "nextToken";
const _oA = "ownerAccount";
const _pN = "packageName";
const _pV = "packageVersion";
const _pVa = "patchVersion";
const _ra = "retry-after";
const _sF = "statusFilter";
const _tK = "tagKeys";
