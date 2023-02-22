// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CancelSolNetworkOperationCommandInput,
  CancelSolNetworkOperationCommandOutput,
} from "../commands/CancelSolNetworkOperationCommand";
import {
  CreateSolFunctionPackageCommandInput,
  CreateSolFunctionPackageCommandOutput,
} from "../commands/CreateSolFunctionPackageCommand";
import {
  CreateSolNetworkInstanceCommandInput,
  CreateSolNetworkInstanceCommandOutput,
} from "../commands/CreateSolNetworkInstanceCommand";
import {
  CreateSolNetworkPackageCommandInput,
  CreateSolNetworkPackageCommandOutput,
} from "../commands/CreateSolNetworkPackageCommand";
import {
  DeleteSolFunctionPackageCommandInput,
  DeleteSolFunctionPackageCommandOutput,
} from "../commands/DeleteSolFunctionPackageCommand";
import {
  DeleteSolNetworkInstanceCommandInput,
  DeleteSolNetworkInstanceCommandOutput,
} from "../commands/DeleteSolNetworkInstanceCommand";
import {
  DeleteSolNetworkPackageCommandInput,
  DeleteSolNetworkPackageCommandOutput,
} from "../commands/DeleteSolNetworkPackageCommand";
import {
  GetSolFunctionInstanceCommandInput,
  GetSolFunctionInstanceCommandOutput,
} from "../commands/GetSolFunctionInstanceCommand";
import {
  GetSolFunctionPackageCommandInput,
  GetSolFunctionPackageCommandOutput,
} from "../commands/GetSolFunctionPackageCommand";
import {
  GetSolFunctionPackageContentCommandInput,
  GetSolFunctionPackageContentCommandOutput,
} from "../commands/GetSolFunctionPackageContentCommand";
import {
  GetSolFunctionPackageDescriptorCommandInput,
  GetSolFunctionPackageDescriptorCommandOutput,
} from "../commands/GetSolFunctionPackageDescriptorCommand";
import {
  GetSolNetworkInstanceCommandInput,
  GetSolNetworkInstanceCommandOutput,
} from "../commands/GetSolNetworkInstanceCommand";
import {
  GetSolNetworkOperationCommandInput,
  GetSolNetworkOperationCommandOutput,
} from "../commands/GetSolNetworkOperationCommand";
import {
  GetSolNetworkPackageCommandInput,
  GetSolNetworkPackageCommandOutput,
} from "../commands/GetSolNetworkPackageCommand";
import {
  GetSolNetworkPackageContentCommandInput,
  GetSolNetworkPackageContentCommandOutput,
} from "../commands/GetSolNetworkPackageContentCommand";
import {
  GetSolNetworkPackageDescriptorCommandInput,
  GetSolNetworkPackageDescriptorCommandOutput,
} from "../commands/GetSolNetworkPackageDescriptorCommand";
import {
  InstantiateSolNetworkInstanceCommandInput,
  InstantiateSolNetworkInstanceCommandOutput,
} from "../commands/InstantiateSolNetworkInstanceCommand";
import {
  ListSolFunctionInstancesCommandInput,
  ListSolFunctionInstancesCommandOutput,
} from "../commands/ListSolFunctionInstancesCommand";
import {
  ListSolFunctionPackagesCommandInput,
  ListSolFunctionPackagesCommandOutput,
} from "../commands/ListSolFunctionPackagesCommand";
import {
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
} from "../commands/ListSolNetworkInstancesCommand";
import {
  ListSolNetworkOperationsCommandInput,
  ListSolNetworkOperationsCommandOutput,
} from "../commands/ListSolNetworkOperationsCommand";
import {
  ListSolNetworkPackagesCommandInput,
  ListSolNetworkPackagesCommandOutput,
} from "../commands/ListSolNetworkPackagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutSolFunctionPackageContentCommandInput,
  PutSolFunctionPackageContentCommandOutput,
} from "../commands/PutSolFunctionPackageContentCommand";
import {
  PutSolNetworkPackageContentCommandInput,
  PutSolNetworkPackageContentCommandOutput,
} from "../commands/PutSolNetworkPackageContentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateSolNetworkInstanceCommandInput,
  TerminateSolNetworkInstanceCommandOutput,
} from "../commands/TerminateSolNetworkInstanceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateSolFunctionPackageCommandInput,
  UpdateSolFunctionPackageCommandOutput,
} from "../commands/UpdateSolFunctionPackageCommand";
import {
  UpdateSolNetworkInstanceCommandInput,
  UpdateSolNetworkInstanceCommandOutput,
} from "../commands/UpdateSolNetworkInstanceCommand";
import {
  UpdateSolNetworkPackageCommandInput,
  UpdateSolNetworkPackageCommandOutput,
} from "../commands/UpdateSolNetworkPackageCommand";
import {
  ValidateSolFunctionPackageContentCommandInput,
  ValidateSolFunctionPackageContentCommandOutput,
} from "../commands/ValidateSolFunctionPackageContentCommand";
import {
  ValidateSolNetworkPackageContentCommandInput,
  ValidateSolNetworkPackageContentCommandOutput,
} from "../commands/ValidateSolNetworkPackageContentCommand";
import {
  AccessDeniedException,
  ErrorInfo,
  FunctionArtifactMeta,
  GetSolFunctionInstanceMetadata,
  GetSolFunctionPackageMetadata,
  GetSolInstantiatedVnfInfo,
  GetSolNetworkInstanceMetadata,
  GetSolNetworkOperationMetadata,
  GetSolNetworkOperationTaskDetails,
  GetSolNetworkPackageMetadata,
  GetSolVnfcResourceInfo,
  GetSolVnfcResourceInfoMetadata,
  GetSolVnfInfo,
  InternalServerException,
  LcmOperationInfo,
  ListSolFunctionInstanceInfo,
  ListSolFunctionInstanceMetadata,
  ListSolFunctionPackageInfo,
  ListSolFunctionPackageMetadata,
  ListSolNetworkInstanceInfo,
  ListSolNetworkInstanceMetadata,
  ListSolNetworkOperationsInfo,
  ListSolNetworkOperationsMetadata,
  ListSolNetworkPackageInfo,
  ListSolNetworkPackageMetadata,
  NetworkArtifactMeta,
  ProblemDetails,
  PutSolFunctionPackageContentMetadata,
  PutSolNetworkPackageContentMetadata,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ToscaOverride,
  UpdateSolNetworkModify,
  ValidateSolFunctionPackageContentMetadata,
  ValidateSolNetworkPackageContentMetadata,
  ValidationException,
} from "../models/models_0";
import { TnbServiceException as __BaseException } from "../models/TnbServiceException";

export const serializeAws_restJson1CancelSolNetworkOperationCommand = async (
  input: CancelSolNetworkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}/cancel";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsLcmOpOccId",
    () => input.nsLcmOpOccId!,
    "{nsLcmOpOccId}",
    false
  );
  let body: any;
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

export const serializeAws_restJson1CreateSolFunctionPackageCommand = async (
  input: CreateSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/vnfpkgm/v1/vnf_packages";
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateSolNetworkInstanceCommand = async (
  input: CreateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nslcm/v1/ns_instances";
  let body: any;
  body = JSON.stringify({
    ...(input.nsDescription != null && { nsDescription: input.nsDescription }),
    ...(input.nsName != null && { nsName: input.nsName }),
    ...(input.nsdInfoId != null && { nsdInfoId: input.nsdInfoId }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateSolNetworkPackageCommand = async (
  input: CreateSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nsd/v1/ns_descriptors";
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteSolFunctionPackageCommand = async (
  input: DeleteSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
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

export const serializeAws_restJson1DeleteSolNetworkInstanceCommand = async (
  input: DeleteSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nslcm/v1/ns_instances/{nsInstanceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsInstanceId",
    () => input.nsInstanceId!,
    "{nsInstanceId}",
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

export const serializeAws_restJson1DeleteSolNetworkPackageCommand = async (
  input: DeleteSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nsd/v1/ns_descriptors/{nsdInfoId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
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

export const serializeAws_restJson1GetSolFunctionInstanceCommand = async (
  input: GetSolFunctionInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/vnflcm/v1/vnf_instances/{vnfInstanceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "vnfInstanceId",
    () => input.vnfInstanceId!,
    "{vnfInstanceId}",
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

export const serializeAws_restJson1GetSolFunctionPackageCommand = async (
  input: GetSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
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

export const serializeAws_restJson1GetSolFunctionPackageContentCommand = async (
  input: GetSolFunctionPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    accept: input.accept!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
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

export const serializeAws_restJson1GetSolFunctionPackageDescriptorCommand = async (
  input: GetSolFunctionPackageDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    accept: input.accept!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/vnfd";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
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

export const serializeAws_restJson1GetSolNetworkInstanceCommand = async (
  input: GetSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nslcm/v1/ns_instances/{nsInstanceId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsInstanceId",
    () => input.nsInstanceId!,
    "{nsInstanceId}",
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

export const serializeAws_restJson1GetSolNetworkOperationCommand = async (
  input: GetSolNetworkOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nslcm/v1/ns_lcm_op_occs/{nsLcmOpOccId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsLcmOpOccId",
    () => input.nsLcmOpOccId!,
    "{nsLcmOpOccId}",
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

export const serializeAws_restJson1GetSolNetworkPackageCommand = async (
  input: GetSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nsd/v1/ns_descriptors/{nsdInfoId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
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

export const serializeAws_restJson1GetSolNetworkPackageContentCommand = async (
  input: GetSolNetworkPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    accept: input.accept!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
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

export const serializeAws_restJson1GetSolNetworkPackageDescriptorCommand = async (
  input: GetSolNetworkPackageDescriptorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
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

export const serializeAws_restJson1InstantiateSolNetworkInstanceCommand = async (
  input: InstantiateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nslcm/v1/ns_instances/{nsInstanceId}/instantiate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsInstanceId",
    () => input.nsInstanceId!,
    "{nsInstanceId}",
    false
  );
  const query: any = map({
    dry_run: [() => input.dryRun !== void 0, () => input.dryRun!.toString()],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.additionalParamsForNs != null && {
      additionalParamsForNs: serializeAws_restJson1Document(input.additionalParamsForNs, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListSolFunctionInstancesCommand = async (
  input: ListSolFunctionInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/vnflcm/v1/vnf_instances";
  const query: any = map({
    max_results: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextpage_opaque_marker: [, input.nextToken!],
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

export const serializeAws_restJson1ListSolFunctionPackagesCommand = async (
  input: ListSolFunctionPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/vnfpkgm/v1/vnf_packages";
  const query: any = map({
    max_results: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextpage_opaque_marker: [, input.nextToken!],
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

export const serializeAws_restJson1ListSolNetworkInstancesCommand = async (
  input: ListSolNetworkInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nslcm/v1/ns_instances";
  const query: any = map({
    max_results: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextpage_opaque_marker: [, input.nextToken!],
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

export const serializeAws_restJson1ListSolNetworkOperationsCommand = async (
  input: ListSolNetworkOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nslcm/v1/ns_lcm_op_occs";
  const query: any = map({
    max_results: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextpage_opaque_marker: [, input.nextToken!],
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

export const serializeAws_restJson1ListSolNetworkPackagesCommand = async (
  input: ListSolNetworkPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nsd/v1/ns_descriptors";
  const query: any = map({
    max_results: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextpage_opaque_marker: [, input.nextToken!],
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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

export const serializeAws_restJson1PutSolFunctionPackageContentCommand = async (
  input: PutSolFunctionPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
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

export const serializeAws_restJson1PutSolNetworkPackageContentCommand = async (
  input: PutSolNetworkPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1TerminateSolNetworkInstanceCommand = async (
  input: TerminateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nslcm/v1/ns_instances/{nsInstanceId}/terminate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsInstanceId",
    () => input.nsInstanceId!,
    "{nsInstanceId}",
    false
  );
  let body: any;
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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

export const serializeAws_restJson1UpdateSolFunctionPackageCommand = async (
  input: UpdateSolFunctionPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.operationalState != null && { operationalState: input.operationalState }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSolNetworkInstanceCommand = async (
  input: UpdateSolNetworkInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nslcm/v1/ns_instances/{nsInstanceId}/update";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nsInstanceId",
    () => input.nsInstanceId!,
    "{nsInstanceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.modifyVnfInfoData != null && {
      modifyVnfInfoData: serializeAws_restJson1UpdateSolNetworkModify(input.modifyVnfInfoData, context),
    }),
    ...(input.updateType != null && { updateType: input.updateType }),
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

export const serializeAws_restJson1UpdateSolNetworkPackageCommand = async (
  input: UpdateSolNetworkPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sol/nsd/v1/ns_descriptors/{nsdInfoId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.nsdOperationalState != null && { nsdOperationalState: input.nsdOperationalState }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ValidateSolFunctionPackageContentCommand = async (
  input: ValidateSolFunctionPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/vnfpkgm/v1/vnf_packages/{vnfPkgId}/package_content/validate";
  resolvedPath = __resolvedPath(resolvedPath, input, "vnfPkgId", () => input.vnfPkgId!, "{vnfPkgId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
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

export const serializeAws_restJson1ValidateSolNetworkPackageContentCommand = async (
  input: ValidateSolNetworkPackageContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/sol/nsd/v1/ns_descriptors/{nsdInfoId}/nsd_content/validate";
  resolvedPath = __resolvedPath(resolvedPath, input, "nsdInfoId", () => input.nsdInfoId!, "{nsdInfoId}", false);
  let body: any;
  if (input.file !== undefined) {
    body = input.file;
  }
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

export const deserializeAws_restJson1CancelSolNetworkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSolNetworkOperationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSolNetworkOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelSolNetworkOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSolNetworkOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSolFunctionPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.onboardingState != null) {
    contents.onboardingState = __expectString(data.onboardingState);
  }
  if (data.operationalState != null) {
    contents.operationalState = __expectString(data.operationalState);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.usageState != null) {
    contents.usageState = __expectString(data.usageState);
  }
  return contents;
};

const deserializeAws_restJson1CreateSolFunctionPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolFunctionPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSolNetworkInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.nsInstanceName != null) {
    contents.nsInstanceName = __expectString(data.nsInstanceName);
  }
  if (data.nsdInfoId != null) {
    contents.nsdInfoId = __expectString(data.nsdInfoId);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSolNetworkInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolNetworkInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSolNetworkPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.nsdOnboardingState != null) {
    contents.nsdOnboardingState = __expectString(data.nsdOnboardingState);
  }
  if (data.nsdOperationalState != null) {
    contents.nsdOperationalState = __expectString(data.nsdOperationalState);
  }
  if (data.nsdUsageState != null) {
    contents.nsdUsageState = __expectString(data.nsdUsageState);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSolNetworkPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolNetworkPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSolFunctionPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSolFunctionPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolFunctionPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSolNetworkInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSolNetworkInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolNetworkInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSolNetworkPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSolNetworkPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolNetworkPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolFunctionInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolFunctionInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.instantiatedVnfInfo != null) {
    contents.instantiatedVnfInfo = deserializeAws_restJson1GetSolVnfInfo(data.instantiatedVnfInfo, context);
  }
  if (data.instantiationState != null) {
    contents.instantiationState = __expectString(data.instantiationState);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1GetSolFunctionInstanceMetadata(data.metadata, context);
  }
  if (data.nsInstanceId != null) {
    contents.nsInstanceId = __expectString(data.nsInstanceId);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vnfPkgId != null) {
    contents.vnfPkgId = __expectString(data.vnfPkgId);
  }
  if (data.vnfProductName != null) {
    contents.vnfProductName = __expectString(data.vnfProductName);
  }
  if (data.vnfProvider != null) {
    contents.vnfProvider = __expectString(data.vnfProvider);
  }
  if (data.vnfdId != null) {
    contents.vnfdId = __expectString(data.vnfdId);
  }
  if (data.vnfdVersion != null) {
    contents.vnfdVersion = __expectString(data.vnfdVersion);
  }
  return contents;
};

const deserializeAws_restJson1GetSolFunctionInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolFunctionPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1GetSolFunctionPackageMetadata(data.metadata, context);
  }
  if (data.onboardingState != null) {
    contents.onboardingState = __expectString(data.onboardingState);
  }
  if (data.operationalState != null) {
    contents.operationalState = __expectString(data.operationalState);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.usageState != null) {
    contents.usageState = __expectString(data.usageState);
  }
  if (data.vnfProductName != null) {
    contents.vnfProductName = __expectString(data.vnfProductName);
  }
  if (data.vnfProvider != null) {
    contents.vnfProvider = __expectString(data.vnfProvider);
  }
  if (data.vnfdId != null) {
    contents.vnfdId = __expectString(data.vnfdId);
  }
  if (data.vnfdVersion != null) {
    contents.vnfdVersion = __expectString(data.vnfdVersion);
  }
  return contents;
};

const deserializeAws_restJson1GetSolFunctionPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolFunctionPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolFunctionPackageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.packageContent = data;
  return contents;
};

const deserializeAws_restJson1GetSolFunctionPackageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolFunctionPackageDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolFunctionPackageDescriptorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.vnfd = data;
  return contents;
};

const deserializeAws_restJson1GetSolFunctionPackageDescriptorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolFunctionPackageDescriptorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolNetworkInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lcmOpInfo != null) {
    contents.lcmOpInfo = deserializeAws_restJson1LcmOperationInfo(data.lcmOpInfo, context);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1GetSolNetworkInstanceMetadata(data.metadata, context);
  }
  if (data.nsInstanceDescription != null) {
    contents.nsInstanceDescription = __expectString(data.nsInstanceDescription);
  }
  if (data.nsInstanceName != null) {
    contents.nsInstanceName = __expectString(data.nsInstanceName);
  }
  if (data.nsState != null) {
    contents.nsState = __expectString(data.nsState);
  }
  if (data.nsdId != null) {
    contents.nsdId = __expectString(data.nsdId);
  }
  if (data.nsdInfoId != null) {
    contents.nsdInfoId = __expectString(data.nsdInfoId);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSolNetworkInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolNetworkOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolNetworkOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.error != null) {
    contents.error = deserializeAws_restJson1ProblemDetails(data.error, context);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.lcmOperationType != null) {
    contents.lcmOperationType = __expectString(data.lcmOperationType);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1GetSolNetworkOperationMetadata(data.metadata, context);
  }
  if (data.nsInstanceId != null) {
    contents.nsInstanceId = __expectString(data.nsInstanceId);
  }
  if (data.operationState != null) {
    contents.operationState = __expectString(data.operationState);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.tasks != null) {
    contents.tasks = deserializeAws_restJson1GetSolNetworkOperationTasksList(data.tasks, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSolNetworkOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolNetworkPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1GetSolNetworkPackageMetadata(data.metadata, context);
  }
  if (data.nsdId != null) {
    contents.nsdId = __expectString(data.nsdId);
  }
  if (data.nsdName != null) {
    contents.nsdName = __expectString(data.nsdName);
  }
  if (data.nsdOnboardingState != null) {
    contents.nsdOnboardingState = __expectString(data.nsdOnboardingState);
  }
  if (data.nsdOperationalState != null) {
    contents.nsdOperationalState = __expectString(data.nsdOperationalState);
  }
  if (data.nsdUsageState != null) {
    contents.nsdUsageState = __expectString(data.nsdUsageState);
  }
  if (data.nsdVersion != null) {
    contents.nsdVersion = __expectString(data.nsdVersion);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vnfPkgIds != null) {
    contents.vnfPkgIds = deserializeAws_restJson1VnfPkgIdList(data.vnfPkgIds, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSolNetworkPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolNetworkPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolNetworkPackageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.nsdContent = data;
  return contents;
};

const deserializeAws_restJson1GetSolNetworkPackageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSolNetworkPackageDescriptorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageDescriptorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSolNetworkPackageDescriptorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.nsd = data;
  return contents;
};

const deserializeAws_restJson1GetSolNetworkPackageDescriptorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolNetworkPackageDescriptorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InstantiateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstantiateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InstantiateSolNetworkInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nsLcmOpOccId != null) {
    contents.nsLcmOpOccId = __expectString(data.nsLcmOpOccId);
  }
  return contents;
};

const deserializeAws_restJson1InstantiateSolNetworkInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstantiateSolNetworkInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSolFunctionInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolFunctionInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSolFunctionInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionInstances != null) {
    contents.functionInstances = deserializeAws_restJson1ListSolFunctionInstanceResources(
      data.functionInstances,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSolFunctionInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolFunctionInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSolFunctionPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolFunctionPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSolFunctionPackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.functionPackages != null) {
    contents.functionPackages = deserializeAws_restJson1ListSolFunctionPackageResources(data.functionPackages, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSolFunctionPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolFunctionPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSolNetworkInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSolNetworkInstancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkInstances != null) {
    contents.networkInstances = deserializeAws_restJson1ListSolNetworkInstanceResources(data.networkInstances, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSolNetworkInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSolNetworkOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSolNetworkOperationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkOperations != null) {
    contents.networkOperations = deserializeAws_restJson1ListSolNetworkOperationsResources(
      data.networkOperations,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSolNetworkOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSolNetworkPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSolNetworkPackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkPackages != null) {
    contents.networkPackages = deserializeAws_restJson1ListSolNetworkPackageResources(data.networkPackages, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListSolNetworkPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolNetworkPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutSolFunctionPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSolFunctionPackageContentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSolFunctionPackageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1PutSolFunctionPackageContentMetadata(data.metadata, context);
  }
  if (data.vnfProductName != null) {
    contents.vnfProductName = __expectString(data.vnfProductName);
  }
  if (data.vnfProvider != null) {
    contents.vnfProvider = __expectString(data.vnfProvider);
  }
  if (data.vnfdId != null) {
    contents.vnfdId = __expectString(data.vnfdId);
  }
  if (data.vnfdVersion != null) {
    contents.vnfdVersion = __expectString(data.vnfdVersion);
  }
  return contents;
};

const deserializeAws_restJson1PutSolFunctionPackageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSolFunctionPackageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutSolNetworkPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSolNetworkPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSolNetworkPackageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1PutSolNetworkPackageContentMetadata(data.metadata, context);
  }
  if (data.nsdId != null) {
    contents.nsdId = __expectString(data.nsdId);
  }
  if (data.nsdName != null) {
    contents.nsdName = __expectString(data.nsdName);
  }
  if (data.nsdVersion != null) {
    contents.nsdVersion = __expectString(data.nsdVersion);
  }
  if (data.vnfPkgIds != null) {
    contents.vnfPkgIds = deserializeAws_restJson1VnfPkgIdList(data.vnfPkgIds, context);
  }
  return contents;
};

const deserializeAws_restJson1PutSolNetworkPackageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSolNetworkPackageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TerminateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1TerminateSolNetworkInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nsLcmOpOccId != null) {
    contents.nsLcmOpOccId = __expectString(data.nsLcmOpOccId);
  }
  return contents;
};

const deserializeAws_restJson1TerminateSolNetworkInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateSolNetworkInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSolFunctionPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolFunctionPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSolFunctionPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.operationalState != null) {
    contents.operationalState = __expectString(data.operationalState);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSolFunctionPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolFunctionPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSolNetworkInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolNetworkInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSolNetworkInstanceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nsLcmOpOccId != null) {
    contents.nsLcmOpOccId = __expectString(data.nsLcmOpOccId);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSolNetworkInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolNetworkInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.tnb#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSolNetworkPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolNetworkPackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSolNetworkPackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nsdOperationalState != null) {
    contents.nsdOperationalState = __expectString(data.nsdOperationalState);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSolNetworkPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSolNetworkPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ValidateSolFunctionPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSolFunctionPackageContentCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidateSolFunctionPackageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1ValidateSolFunctionPackageContentMetadata(data.metadata, context);
  }
  if (data.vnfProductName != null) {
    contents.vnfProductName = __expectString(data.vnfProductName);
  }
  if (data.vnfProvider != null) {
    contents.vnfProvider = __expectString(data.vnfProvider);
  }
  if (data.vnfdId != null) {
    contents.vnfdId = __expectString(data.vnfdId);
  }
  if (data.vnfdVersion != null) {
    contents.vnfdVersion = __expectString(data.vnfdVersion);
  }
  return contents;
};

const deserializeAws_restJson1ValidateSolFunctionPackageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSolFunctionPackageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ValidateSolNetworkPackageContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSolNetworkPackageContentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ValidateSolNetworkPackageContentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.id != null) {
    contents.id = __expectString(data.id);
  }
  if (data.metadata != null) {
    contents.metadata = deserializeAws_restJson1ValidateSolNetworkPackageContentMetadata(data.metadata, context);
  }
  if (data.nsdId != null) {
    contents.nsdId = __expectString(data.nsdId);
  }
  if (data.nsdName != null) {
    contents.nsdName = __expectString(data.nsdName);
  }
  if (data.nsdVersion != null) {
    contents.nsdVersion = __expectString(data.nsdVersion);
  }
  if (data.vnfPkgIds != null) {
    contents.vnfPkgIds = deserializeAws_restJson1VnfPkgIdList(data.vnfPkgIds, context);
  }
  return contents;
};

const deserializeAws_restJson1ValidateSolNetworkPackageContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidateSolNetworkPackageContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.tnb#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.tnb#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.tnb#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.tnb#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.tnb#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UpdateSolNetworkModify = (input: UpdateSolNetworkModify, context: __SerdeContext): any => {
  return {
    ...(input.vnfConfigurableProperties != null && {
      vnfConfigurableProperties: serializeAws_restJson1Document(input.vnfConfigurableProperties, context),
    }),
    ...(input.vnfInstanceId != null && { vnfInstanceId: input.vnfInstanceId }),
  };
};

const serializeAws_restJson1Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

const deserializeAws_restJson1ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    cause: __expectString(output.cause),
    details: __expectString(output.details),
  } as any;
};

const deserializeAws_restJson1FunctionArtifactMeta = (output: any, context: __SerdeContext): FunctionArtifactMeta => {
  return {
    overrides: output.overrides != null ? deserializeAws_restJson1OverrideList(output.overrides, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolFunctionInstanceMetadata = (
  output: any,
  context: __SerdeContext
): GetSolFunctionInstanceMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolFunctionPackageMetadata = (
  output: any,
  context: __SerdeContext
): GetSolFunctionPackageMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
    vnfd: output.vnfd != null ? deserializeAws_restJson1FunctionArtifactMeta(output.vnfd, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolInstantiatedVnfInfo = (
  output: any,
  context: __SerdeContext
): GetSolInstantiatedVnfInfo => {
  return {
    vnfState: __expectString(output.vnfState),
  } as any;
};

const deserializeAws_restJson1GetSolNetworkInstanceMetadata = (
  output: any,
  context: __SerdeContext
): GetSolNetworkInstanceMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolNetworkOperationMetadata = (
  output: any,
  context: __SerdeContext
): GetSolNetworkOperationMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolNetworkOperationTaskDetails = (
  output: any,
  context: __SerdeContext
): GetSolNetworkOperationTaskDetails => {
  return {
    taskContext:
      output.taskContext != null ? deserializeAws_restJson1StringMap(output.taskContext, context) : undefined,
    taskEndTime:
      output.taskEndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.taskEndTime)) : undefined,
    taskErrorDetails:
      output.taskErrorDetails != null ? deserializeAws_restJson1ErrorInfo(output.taskErrorDetails, context) : undefined,
    taskName: __expectString(output.taskName),
    taskStartTime:
      output.taskStartTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.taskStartTime))
        : undefined,
    taskStatus: __expectString(output.taskStatus),
  } as any;
};

const deserializeAws_restJson1GetSolNetworkOperationTasksList = (
  output: any,
  context: __SerdeContext
): GetSolNetworkOperationTaskDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GetSolNetworkOperationTaskDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GetSolNetworkPackageMetadata = (
  output: any,
  context: __SerdeContext
): GetSolNetworkPackageMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
    nsd: output.nsd != null ? deserializeAws_restJson1NetworkArtifactMeta(output.nsd, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolVnfcResourceInfo = (
  output: any,
  context: __SerdeContext
): GetSolVnfcResourceInfo => {
  return {
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1GetSolVnfcResourceInfoMetadata(output.metadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GetSolVnfcResourceInfoList = (
  output: any,
  context: __SerdeContext
): GetSolVnfcResourceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GetSolVnfcResourceInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GetSolVnfcResourceInfoMetadata = (
  output: any,
  context: __SerdeContext
): GetSolVnfcResourceInfoMetadata => {
  return {
    cluster: __expectString(output.cluster),
    helmChart: __expectString(output.helmChart),
    nodeGroup: __expectString(output.nodeGroup),
  } as any;
};

const deserializeAws_restJson1GetSolVnfInfo = (output: any, context: __SerdeContext): GetSolVnfInfo => {
  return {
    vnfState: __expectString(output.vnfState),
    vnfcResourceInfo:
      output.vnfcResourceInfo != null
        ? deserializeAws_restJson1GetSolVnfcResourceInfoList(output.vnfcResourceInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LcmOperationInfo = (output: any, context: __SerdeContext): LcmOperationInfo => {
  return {
    nsLcmOpOccId: __expectString(output.nsLcmOpOccId),
  } as any;
};

const deserializeAws_restJson1ListSolFunctionInstanceInfo = (
  output: any,
  context: __SerdeContext
): ListSolFunctionInstanceInfo => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    instantiatedVnfInfo:
      output.instantiatedVnfInfo != null
        ? deserializeAws_restJson1GetSolInstantiatedVnfInfo(output.instantiatedVnfInfo, context)
        : undefined,
    instantiationState: __expectString(output.instantiationState),
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1ListSolFunctionInstanceMetadata(output.metadata, context)
        : undefined,
    nsInstanceId: __expectString(output.nsInstanceId),
    vnfPkgId: __expectString(output.vnfPkgId),
    vnfPkgName: __expectString(output.vnfPkgName),
  } as any;
};

const deserializeAws_restJson1ListSolFunctionInstanceMetadata = (
  output: any,
  context: __SerdeContext
): ListSolFunctionInstanceMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListSolFunctionInstanceResources = (
  output: any,
  context: __SerdeContext
): ListSolFunctionInstanceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSolFunctionInstanceInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListSolFunctionPackageInfo = (
  output: any,
  context: __SerdeContext
): ListSolFunctionPackageInfo => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1ListSolFunctionPackageMetadata(output.metadata, context)
        : undefined,
    onboardingState: __expectString(output.onboardingState),
    operationalState: __expectString(output.operationalState),
    usageState: __expectString(output.usageState),
    vnfProductName: __expectString(output.vnfProductName),
    vnfProvider: __expectString(output.vnfProvider),
    vnfdId: __expectString(output.vnfdId),
    vnfdVersion: __expectString(output.vnfdVersion),
  } as any;
};

const deserializeAws_restJson1ListSolFunctionPackageMetadata = (
  output: any,
  context: __SerdeContext
): ListSolFunctionPackageMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListSolFunctionPackageResources = (
  output: any,
  context: __SerdeContext
): ListSolFunctionPackageInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSolFunctionPackageInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListSolNetworkInstanceInfo = (
  output: any,
  context: __SerdeContext
): ListSolNetworkInstanceInfo => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1ListSolNetworkInstanceMetadata(output.metadata, context)
        : undefined,
    nsInstanceDescription: __expectString(output.nsInstanceDescription),
    nsInstanceName: __expectString(output.nsInstanceName),
    nsState: __expectString(output.nsState),
    nsdId: __expectString(output.nsdId),
    nsdInfoId: __expectString(output.nsdInfoId),
  } as any;
};

const deserializeAws_restJson1ListSolNetworkInstanceMetadata = (
  output: any,
  context: __SerdeContext
): ListSolNetworkInstanceMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListSolNetworkInstanceResources = (
  output: any,
  context: __SerdeContext
): ListSolNetworkInstanceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSolNetworkInstanceInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListSolNetworkOperationsInfo = (
  output: any,
  context: __SerdeContext
): ListSolNetworkOperationsInfo => {
  return {
    arn: __expectString(output.arn),
    error: output.error != null ? deserializeAws_restJson1ProblemDetails(output.error, context) : undefined,
    id: __expectString(output.id),
    lcmOperationType: __expectString(output.lcmOperationType),
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1ListSolNetworkOperationsMetadata(output.metadata, context)
        : undefined,
    nsInstanceId: __expectString(output.nsInstanceId),
    operationState: __expectString(output.operationState),
  } as any;
};

const deserializeAws_restJson1ListSolNetworkOperationsMetadata = (
  output: any,
  context: __SerdeContext
): ListSolNetworkOperationsMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListSolNetworkOperationsResources = (
  output: any,
  context: __SerdeContext
): ListSolNetworkOperationsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSolNetworkOperationsInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListSolNetworkPackageInfo = (
  output: any,
  context: __SerdeContext
): ListSolNetworkPackageInfo => {
  return {
    arn: __expectString(output.arn),
    id: __expectString(output.id),
    metadata:
      output.metadata != null
        ? deserializeAws_restJson1ListSolNetworkPackageMetadata(output.metadata, context)
        : undefined,
    nsdDesigner: __expectString(output.nsdDesigner),
    nsdId: __expectString(output.nsdId),
    nsdInvariantId: __expectString(output.nsdInvariantId),
    nsdName: __expectString(output.nsdName),
    nsdOnboardingState: __expectString(output.nsdOnboardingState),
    nsdOperationalState: __expectString(output.nsdOperationalState),
    nsdUsageState: __expectString(output.nsdUsageState),
    nsdVersion: __expectString(output.nsdVersion),
    vnfPkgIds: output.vnfPkgIds != null ? deserializeAws_restJson1VnfPkgIdList(output.vnfPkgIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ListSolNetworkPackageMetadata = (
  output: any,
  context: __SerdeContext
): ListSolNetworkPackageMetadata => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    lastModified:
      output.lastModified != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastModified)) : undefined,
  } as any;
};

const deserializeAws_restJson1ListSolNetworkPackageResources = (
  output: any,
  context: __SerdeContext
): ListSolNetworkPackageInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListSolNetworkPackageInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkArtifactMeta = (output: any, context: __SerdeContext): NetworkArtifactMeta => {
  return {
    overrides: output.overrides != null ? deserializeAws_restJson1OverrideList(output.overrides, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OverrideList = (output: any, context: __SerdeContext): ToscaOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ToscaOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProblemDetails = (output: any, context: __SerdeContext): ProblemDetails => {
  return {
    detail: __expectString(output.detail),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1PutSolFunctionPackageContentMetadata = (
  output: any,
  context: __SerdeContext
): PutSolFunctionPackageContentMetadata => {
  return {
    vnfd: output.vnfd != null ? deserializeAws_restJson1FunctionArtifactMeta(output.vnfd, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PutSolNetworkPackageContentMetadata = (
  output: any,
  context: __SerdeContext
): PutSolNetworkPackageContentMetadata => {
  return {
    nsd: output.nsd != null ? deserializeAws_restJson1NetworkArtifactMeta(output.nsd, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ToscaOverride = (output: any, context: __SerdeContext): ToscaOverride => {
  return {
    defaultValue: __expectString(output.defaultValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidateSolFunctionPackageContentMetadata = (
  output: any,
  context: __SerdeContext
): ValidateSolFunctionPackageContentMetadata => {
  return {
    vnfd: output.vnfd != null ? deserializeAws_restJson1FunctionArtifactMeta(output.vnfd, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ValidateSolNetworkPackageContentMetadata = (
  output: any,
  context: __SerdeContext
): ValidateSolNetworkPackageContentMetadata => {
  return {
    nsd: output.nsd != null ? deserializeAws_restJson1NetworkArtifactMeta(output.nsd, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VnfPkgIdList = (output: any, context: __SerdeContext): string[] => {
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
