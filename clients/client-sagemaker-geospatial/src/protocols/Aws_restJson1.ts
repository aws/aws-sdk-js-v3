// smithy-typescript generated code
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
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  DeleteEarthObservationJobCommandInput,
  DeleteEarthObservationJobCommandOutput,
} from "../commands/DeleteEarthObservationJobCommand";
import {
  DeleteVectorEnrichmentJobCommandInput,
  DeleteVectorEnrichmentJobCommandOutput,
} from "../commands/DeleteVectorEnrichmentJobCommand";
import {
  ExportEarthObservationJobCommandInput,
  ExportEarthObservationJobCommandOutput,
} from "../commands/ExportEarthObservationJobCommand";
import {
  ExportVectorEnrichmentJobCommandInput,
  ExportVectorEnrichmentJobCommandOutput,
} from "../commands/ExportVectorEnrichmentJobCommand";
import {
  GetEarthObservationJobCommandInput,
  GetEarthObservationJobCommandOutput,
} from "../commands/GetEarthObservationJobCommand";
import {
  GetRasterDataCollectionCommandInput,
  GetRasterDataCollectionCommandOutput,
} from "../commands/GetRasterDataCollectionCommand";
import { GetTileCommandInput, GetTileCommandOutput } from "../commands/GetTileCommand";
import {
  GetVectorEnrichmentJobCommandInput,
  GetVectorEnrichmentJobCommandOutput,
} from "../commands/GetVectorEnrichmentJobCommand";
import {
  ListEarthObservationJobsCommandInput,
  ListEarthObservationJobsCommandOutput,
} from "../commands/ListEarthObservationJobsCommand";
import {
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput,
} from "../commands/ListRasterDataCollectionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListVectorEnrichmentJobsCommandInput,
  ListVectorEnrichmentJobsCommandOutput,
} from "../commands/ListVectorEnrichmentJobsCommand";
import {
  SearchRasterDataCollectionCommandInput,
  SearchRasterDataCollectionCommandOutput,
} from "../commands/SearchRasterDataCollectionCommand";
import {
  StartEarthObservationJobCommandInput,
  StartEarthObservationJobCommandOutput,
} from "../commands/StartEarthObservationJobCommand";
import {
  StartVectorEnrichmentJobCommandInput,
  StartVectorEnrichmentJobCommandOutput,
} from "../commands/StartVectorEnrichmentJobCommand";
import {
  StopEarthObservationJobCommandInput,
  StopEarthObservationJobCommandOutput,
} from "../commands/StopEarthObservationJobCommand";
import {
  StopVectorEnrichmentJobCommandInput,
  StopVectorEnrichmentJobCommandOutput,
} from "../commands/StopVectorEnrichmentJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  AreaOfInterest,
  AreaOfInterestGeometry,
  AssetValue,
  BandMathConfigInput,
  CloudMaskingConfigInput,
  CloudRemovalConfigInput,
  ConflictException,
  CustomIndicesInput,
  EarthObservationJobErrorDetails,
  EoCloudCoverInput,
  EojDataSourceConfigInput,
  ExportErrorDetails,
  ExportErrorDetailsOutput,
  ExportS3DataInput,
  ExportVectorEnrichmentJobOutputConfig,
  Filter,
  Geometry,
  GeoMosaicConfigInput,
  InputConfigInput,
  InputConfigOutput,
  InternalServerException,
  ItemSource,
  JobConfigInput,
  LandCoverSegmentationConfigInput,
  LandsatCloudCoverLandInput,
  ListEarthObservationJobOutputConfig,
  ListVectorEnrichmentJobOutputConfig,
  MapMatchingConfig,
  MultiPolygonGeometryInput,
  Operation,
  OutputBand,
  OutputConfigInput,
  OutputResolutionResamplingInput,
  OutputResolutionStackInput,
  PlatformInput,
  PolygonGeometryInput,
  Properties,
  Property,
  PropertyFilter,
  PropertyFilters,
  RasterDataCollectionMetadata,
  RasterDataCollectionQueryInput,
  RasterDataCollectionQueryOutput,
  RasterDataCollectionQueryWithBandFilterInput,
  ResamplingConfigInput,
  ResourceNotFoundException,
  ReverseGeocodingConfig,
  S3DataInput,
  ServiceQuotaExceededException,
  StackConfigInput,
  TemporalStatistics,
  TemporalStatisticsConfigInput,
  ThrottlingException,
  TimeRangeFilterInput,
  UserDefined,
  ValidationException,
  VectorEnrichmentJobConfig,
  VectorEnrichmentJobDataSourceConfigInput,
  VectorEnrichmentJobErrorDetails,
  VectorEnrichmentJobExportErrorDetails,
  VectorEnrichmentJobInputConfig,
  VectorEnrichmentJobS3Data,
  ViewOffNadirInput,
  ViewSunAzimuthInput,
  ViewSunElevationInput,
  ZonalStatistics,
  ZonalStatisticsConfigInput,
} from "../models/models_0";
import { SageMakerGeospatialServiceException as __BaseException } from "../models/SageMakerGeospatialServiceException";

export const serializeAws_restJson1DeleteEarthObservationJobCommand = async (
  input: DeleteEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/earth-observation-jobs/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

export const serializeAws_restJson1DeleteVectorEnrichmentJobCommand = async (
  input: DeleteVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vector-enrichment-jobs/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

export const serializeAws_restJson1ExportEarthObservationJobCommand = async (
  input: ExportEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/export-earth-observation-job";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.ExportSourceImages != null && { ExportSourceImages: input.ExportSourceImages }),
    ...(input.OutputConfig != null && {
      OutputConfig: serializeAws_restJson1OutputConfigInput(input.OutputConfig, context),
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

export const serializeAws_restJson1ExportVectorEnrichmentJobCommand = async (
  input: ExportVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/export-vector-enrichment-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.OutputConfig != null && {
      OutputConfig: serializeAws_restJson1ExportVectorEnrichmentJobOutputConfig(input.OutputConfig, context),
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

export const serializeAws_restJson1GetEarthObservationJobCommand = async (
  input: GetEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/earth-observation-jobs/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

export const serializeAws_restJson1GetRasterDataCollectionCommand = async (
  input: GetRasterDataCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/raster-data-collection/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

export const serializeAws_restJson1GetTileCommand = async (
  input: GetTileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tile/{z}/{x}/{y}";
  resolvedPath = __resolvedPath(resolvedPath, input, "x", () => input.x!.toString(), "{x}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "y", () => input.y!.toString(), "{y}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "z", () => input.z!.toString(), "{z}", false);
  const query: any = map({
    ImageAssets: [
      __expectNonNull(input.ImageAssets, `ImageAssets`) != null,
      () => (input.ImageAssets! || []).map((_entry) => _entry as any),
    ],
    Target: [, __expectNonNull(input.Target!, `Target`)],
    Arn: [, __expectNonNull(input.Arn!, `Arn`)],
    ImageMask: [() => input.ImageMask !== void 0, () => input.ImageMask!.toString()],
    OutputFormat: [, input.OutputFormat!],
    TimeRangeFilter: [, input.TimeRangeFilter!],
    PropertyFilters: [, input.PropertyFilters!],
    OutputDataType: [, input.OutputDataType!],
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

export const serializeAws_restJson1GetVectorEnrichmentJobCommand = async (
  input: GetVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vector-enrichment-jobs/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

export const serializeAws_restJson1ListEarthObservationJobsCommand = async (
  input: ListEarthObservationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-earth-observation-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
    ...(input.StatusEquals != null && { StatusEquals: input.StatusEquals }),
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

export const serializeAws_restJson1ListRasterDataCollectionsCommand = async (
  input: ListRasterDataCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/raster-data-collections";
  const query: any = map({
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1ListVectorEnrichmentJobsCommand = async (
  input: ListVectorEnrichmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-vector-enrichment-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
    ...(input.StatusEquals != null && { StatusEquals: input.StatusEquals }),
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

export const serializeAws_restJson1SearchRasterDataCollectionCommand = async (
  input: SearchRasterDataCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/search-raster-data-collection";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RasterDataCollectionQuery != null && {
      RasterDataCollectionQuery: serializeAws_restJson1RasterDataCollectionQueryWithBandFilterInput(
        input.RasterDataCollectionQuery,
        context
      ),
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

export const serializeAws_restJson1StartEarthObservationJobCommand = async (
  input: StartEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/earth-observation-jobs";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.InputConfig != null && {
      InputConfig: serializeAws_restJson1InputConfigInput(input.InputConfig, context),
    }),
    ...(input.JobConfig != null && { JobConfig: serializeAws_restJson1JobConfigInput(input.JobConfig, context) }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1StartVectorEnrichmentJobCommand = async (
  input: StartVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vector-enrichment-jobs";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.InputConfig != null && {
      InputConfig: serializeAws_restJson1VectorEnrichmentJobInputConfig(input.InputConfig, context),
    }),
    ...(input.JobConfig != null && {
      JobConfig: serializeAws_restJson1VectorEnrichmentJobConfig(input.JobConfig, context),
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1StopEarthObservationJobCommand = async (
  input: StopEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/earth-observation-jobs/stop";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
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

export const serializeAws_restJson1StopVectorEnrichmentJobCommand = async (
  input: StopVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/vector-enrichment-jobs/stop";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const deserializeAws_restJson1DeleteEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteEarthObservationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEarthObservationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1DeleteVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVectorEnrichmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorEnrichmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1ExportEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportSourceImages != null) {
    contents.ExportSourceImages = __expectBoolean(data.ExportSourceImages);
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.OutputConfig != null) {
    contents.OutputConfig = deserializeAws_restJson1OutputConfigInput(data.OutputConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1ExportEarthObservationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEarthObservationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1ExportVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.OutputConfig != null) {
    contents.OutputConfig = deserializeAws_restJson1ExportVectorEnrichmentJobOutputConfig(data.OutputConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1ExportVectorEnrichmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportVectorEnrichmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1GetEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = deserializeAws_restJson1EarthObservationJobErrorDetails(data.ErrorDetails, context);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportErrorDetails != null) {
    contents.ExportErrorDetails = deserializeAws_restJson1ExportErrorDetails(data.ExportErrorDetails, context);
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = deserializeAws_restJson1InputConfigOutput(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = deserializeAws_restJson1JobConfigInput(__expectUnion(data.JobConfig), context);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OutputBands != null) {
    contents.OutputBands = deserializeAws_restJson1EarthObservationJobOutputBands(data.OutputBands, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetEarthObservationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEarthObservationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1GetRasterDataCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRasterDataCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRasterDataCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.DescriptionPageUrl != null) {
    contents.DescriptionPageUrl = __expectString(data.DescriptionPageUrl);
  }
  if (data.ImageSourceBands != null) {
    contents.ImageSourceBands = deserializeAws_restJson1ImageSourceBandList(data.ImageSourceBands, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.SupportedFilters != null) {
    contents.SupportedFilters = deserializeAws_restJson1FilterList(data.SupportedFilters, context);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1GetRasterDataCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRasterDataCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1GetTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.BinaryFile = data;
  return contents;
};

const deserializeAws_restJson1GetTileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1GetVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = deserializeAws_restJson1VectorEnrichmentJobErrorDetails(data.ErrorDetails, context);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportErrorDetails != null) {
    contents.ExportErrorDetails = deserializeAws_restJson1VectorEnrichmentJobExportErrorDetails(
      data.ExportErrorDetails,
      context
    );
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = deserializeAws_restJson1VectorEnrichmentJobInputConfig(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = deserializeAws_restJson1VectorEnrichmentJobConfig(__expectUnion(data.JobConfig), context);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1GetVectorEnrichmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorEnrichmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1ListEarthObservationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEarthObservationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEarthObservationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EarthObservationJobSummaries != null) {
    contents.EarthObservationJobSummaries = deserializeAws_restJson1EarthObservationJobList(
      data.EarthObservationJobSummaries,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEarthObservationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEarthObservationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1ListRasterDataCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRasterDataCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRasterDataCollectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RasterDataCollectionSummaries != null) {
    contents.RasterDataCollectionSummaries = deserializeAws_restJson1DataCollectionsList(
      data.RasterDataCollectionSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRasterDataCollectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRasterDataCollectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
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
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1ListVectorEnrichmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVectorEnrichmentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVectorEnrichmentJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VectorEnrichmentJobSummaries != null) {
    contents.VectorEnrichmentJobSummaries = deserializeAws_restJson1VectorEnrichmentJobList(
      data.VectorEnrichmentJobSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListVectorEnrichmentJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVectorEnrichmentJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1SearchRasterDataCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRasterDataCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchRasterDataCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateResultCount != null) {
    contents.ApproximateResultCount = __expectInt32(data.ApproximateResultCount);
  }
  if (data.Items != null) {
    contents.Items = deserializeAws_restJson1ItemSourceList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1SearchRasterDataCollectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRasterDataCollectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1StartEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = deserializeAws_restJson1InputConfigOutput(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = deserializeAws_restJson1JobConfigInput(__expectUnion(data.JobConfig), context);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1StartEarthObservationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEarthObservationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1StartVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = deserializeAws_restJson1VectorEnrichmentJobInputConfig(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = deserializeAws_restJson1VectorEnrichmentJobConfig(__expectUnion(data.JobConfig), context);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1StartVectorEnrichmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVectorEnrichmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1StopEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopEarthObservationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEarthObservationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

export const deserializeAws_restJson1StopVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopVectorEnrichmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopVectorEnrichmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
  if (data.Message != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AreaOfInterest = (input: AreaOfInterest, context: __SerdeContext): any => {
  return AreaOfInterest.visit(input, {
    AreaOfInterestGeometry: (value) => ({
      AreaOfInterestGeometry: serializeAws_restJson1AreaOfInterestGeometry(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1AreaOfInterestGeometry = (input: AreaOfInterestGeometry, context: __SerdeContext): any => {
  return AreaOfInterestGeometry.visit(input, {
    MultiPolygonGeometry: (value) => ({
      MultiPolygonGeometry: serializeAws_restJson1MultiPolygonGeometryInput(value, context),
    }),
    PolygonGeometry: (value) => ({ PolygonGeometry: serializeAws_restJson1PolygonGeometryInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1BandMathConfigInput = (input: BandMathConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.CustomIndices != null && {
      CustomIndices: serializeAws_restJson1CustomIndicesInput(input.CustomIndices, context),
    }),
    ...(input.PredefinedIndices != null && {
      PredefinedIndices: serializeAws_restJson1StringListInput(input.PredefinedIndices, context),
    }),
  };
};

const serializeAws_restJson1CloudMaskingConfigInput = (
  input: CloudMaskingConfigInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1CloudRemovalConfigInput = (
  input: CloudRemovalConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlgorithmName != null && { AlgorithmName: input.AlgorithmName }),
    ...(input.InterpolationValue != null && { InterpolationValue: input.InterpolationValue }),
    ...(input.TargetBands != null && {
      TargetBands: serializeAws_restJson1StringListInput(input.TargetBands, context),
    }),
  };
};

const serializeAws_restJson1CustomIndicesInput = (input: CustomIndicesInput, context: __SerdeContext): any => {
  return {
    ...(input.Operations != null && {
      Operations: serializeAws_restJson1OperationsListInput(input.Operations, context),
    }),
  };
};

const serializeAws_restJson1EoCloudCoverInput = (input: EoCloudCoverInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

const serializeAws_restJson1EojDataSourceConfigInput = (
  input: EojDataSourceConfigInput,
  context: __SerdeContext
): any => {
  return EojDataSourceConfigInput.visit(input, {
    S3Data: (value) => ({ S3Data: serializeAws_restJson1S3DataInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1ExportS3DataInput = (input: ExportS3DataInput, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_restJson1ExportVectorEnrichmentJobOutputConfig = (
  input: ExportVectorEnrichmentJobOutputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Data != null && { S3Data: serializeAws_restJson1VectorEnrichmentJobS3Data(input.S3Data, context) }),
  };
};

const serializeAws_restJson1GeoMosaicConfigInput = (input: GeoMosaicConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmName != null && { AlgorithmName: input.AlgorithmName }),
    ...(input.TargetBands != null && {
      TargetBands: serializeAws_restJson1StringListInput(input.TargetBands, context),
    }),
  };
};

const serializeAws_restJson1InputConfigInput = (input: InputConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceConfig != null && {
      DataSourceConfig: serializeAws_restJson1EojDataSourceConfigInput(input.DataSourceConfig, context),
    }),
    ...(input.PreviousEarthObservationJobArn != null && {
      PreviousEarthObservationJobArn: input.PreviousEarthObservationJobArn,
    }),
    ...(input.RasterDataCollectionQuery != null && {
      RasterDataCollectionQuery: serializeAws_restJson1RasterDataCollectionQueryInput(
        input.RasterDataCollectionQuery,
        context
      ),
    }),
  };
};

const serializeAws_restJson1JobConfigInput = (input: JobConfigInput, context: __SerdeContext): any => {
  return JobConfigInput.visit(input, {
    BandMathConfig: (value) => ({ BandMathConfig: serializeAws_restJson1BandMathConfigInput(value, context) }),
    CloudMaskingConfig: (value) => ({
      CloudMaskingConfig: serializeAws_restJson1CloudMaskingConfigInput(value, context),
    }),
    CloudRemovalConfig: (value) => ({
      CloudRemovalConfig: serializeAws_restJson1CloudRemovalConfigInput(value, context),
    }),
    GeoMosaicConfig: (value) => ({ GeoMosaicConfig: serializeAws_restJson1GeoMosaicConfigInput(value, context) }),
    LandCoverSegmentationConfig: (value) => ({
      LandCoverSegmentationConfig: serializeAws_restJson1LandCoverSegmentationConfigInput(value, context),
    }),
    ResamplingConfig: (value) => ({ ResamplingConfig: serializeAws_restJson1ResamplingConfigInput(value, context) }),
    StackConfig: (value) => ({ StackConfig: serializeAws_restJson1StackConfigInput(value, context) }),
    TemporalStatisticsConfig: (value) => ({
      TemporalStatisticsConfig: serializeAws_restJson1TemporalStatisticsConfigInput(value, context),
    }),
    ZonalStatisticsConfig: (value) => ({
      ZonalStatisticsConfig: serializeAws_restJson1ZonalStatisticsConfigInput(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1LandCoverSegmentationConfigInput = (
  input: LandCoverSegmentationConfigInput,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_restJson1LandsatCloudCoverLandInput = (
  input: LandsatCloudCoverLandInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

const serializeAws_restJson1LinearRing = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Position(entry, context);
    });
};

const serializeAws_restJson1LinearRings = (input: number[][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LinearRing(entry, context);
    });
};

const serializeAws_restJson1LinearRingsList = (input: number[][][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LinearRings(entry, context);
    });
};

const serializeAws_restJson1MapMatchingConfig = (input: MapMatchingConfig, context: __SerdeContext): any => {
  return {
    ...(input.IdAttributeName != null && { IdAttributeName: input.IdAttributeName }),
    ...(input.TimestampAttributeName != null && { TimestampAttributeName: input.TimestampAttributeName }),
    ...(input.XAttributeName != null && { XAttributeName: input.XAttributeName }),
    ...(input.YAttributeName != null && { YAttributeName: input.YAttributeName }),
  };
};

const serializeAws_restJson1MultiPolygonGeometryInput = (
  input: MultiPolygonGeometryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Coordinates != null && {
      Coordinates: serializeAws_restJson1LinearRingsList(input.Coordinates, context),
    }),
  };
};

const serializeAws_restJson1Operation = (input: Operation, context: __SerdeContext): any => {
  return {
    ...(input.Equation != null && { Equation: input.Equation }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputType != null && { OutputType: input.OutputType }),
  };
};

const serializeAws_restJson1OperationsListInput = (input: Operation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Operation(entry, context);
    });
};

const serializeAws_restJson1OutputConfigInput = (input: OutputConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.S3Data != null && { S3Data: serializeAws_restJson1ExportS3DataInput(input.S3Data, context) }),
  };
};

const serializeAws_restJson1OutputResolutionResamplingInput = (
  input: OutputResolutionResamplingInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.UserDefined != null && { UserDefined: serializeAws_restJson1UserDefined(input.UserDefined, context) }),
  };
};

const serializeAws_restJson1OutputResolutionStackInput = (
  input: OutputResolutionStackInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Predefined != null && { Predefined: input.Predefined }),
    ...(input.UserDefined != null && { UserDefined: serializeAws_restJson1UserDefined(input.UserDefined, context) }),
  };
};

const serializeAws_restJson1PlatformInput = (input: PlatformInput, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1PolygonGeometryInput = (input: PolygonGeometryInput, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates != null && { Coordinates: serializeAws_restJson1LinearRings(input.Coordinates, context) }),
  };
};

const serializeAws_restJson1Position = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1Property = (input: Property, context: __SerdeContext): any => {
  return Property.visit(input, {
    EoCloudCover: (value) => ({ EoCloudCover: serializeAws_restJson1EoCloudCoverInput(value, context) }),
    LandsatCloudCoverLand: (value) => ({
      LandsatCloudCoverLand: serializeAws_restJson1LandsatCloudCoverLandInput(value, context),
    }),
    Platform: (value) => ({ Platform: serializeAws_restJson1PlatformInput(value, context) }),
    ViewOffNadir: (value) => ({ ViewOffNadir: serializeAws_restJson1ViewOffNadirInput(value, context) }),
    ViewSunAzimuth: (value) => ({ ViewSunAzimuth: serializeAws_restJson1ViewSunAzimuthInput(value, context) }),
    ViewSunElevation: (value) => ({ ViewSunElevation: serializeAws_restJson1ViewSunElevationInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1PropertyFilter = (input: PropertyFilter, context: __SerdeContext): any => {
  return {
    ...(input.Property != null && { Property: serializeAws_restJson1Property(input.Property, context) }),
  };
};

const serializeAws_restJson1PropertyFilters = (input: PropertyFilters, context: __SerdeContext): any => {
  return {
    ...(input.LogicalOperator != null && { LogicalOperator: input.LogicalOperator }),
    ...(input.Properties != null && {
      Properties: serializeAws_restJson1PropertyFiltersList(input.Properties, context),
    }),
  };
};

const serializeAws_restJson1PropertyFiltersList = (input: PropertyFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PropertyFilter(entry, context);
    });
};

const serializeAws_restJson1RasterDataCollectionQueryInput = (
  input: RasterDataCollectionQueryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AreaOfInterest != null && {
      AreaOfInterest: serializeAws_restJson1AreaOfInterest(input.AreaOfInterest, context),
    }),
    ...(input.PropertyFilters != null && {
      PropertyFilters: serializeAws_restJson1PropertyFilters(input.PropertyFilters, context),
    }),
    ...(input.RasterDataCollectionArn != null && { RasterDataCollectionArn: input.RasterDataCollectionArn }),
    ...(input.TimeRangeFilter != null && {
      TimeRangeFilter: serializeAws_restJson1TimeRangeFilterInput(input.TimeRangeFilter, context),
    }),
  };
};

const serializeAws_restJson1RasterDataCollectionQueryWithBandFilterInput = (
  input: RasterDataCollectionQueryWithBandFilterInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AreaOfInterest != null && {
      AreaOfInterest: serializeAws_restJson1AreaOfInterest(input.AreaOfInterest, context),
    }),
    ...(input.BandFilter != null && { BandFilter: serializeAws_restJson1StringListInput(input.BandFilter, context) }),
    ...(input.PropertyFilters != null && {
      PropertyFilters: serializeAws_restJson1PropertyFilters(input.PropertyFilters, context),
    }),
    ...(input.TimeRangeFilter != null && {
      TimeRangeFilter: serializeAws_restJson1TimeRangeFilterInput(input.TimeRangeFilter, context),
    }),
  };
};

const serializeAws_restJson1ResamplingConfigInput = (input: ResamplingConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmName != null && { AlgorithmName: input.AlgorithmName }),
    ...(input.OutputResolution != null && {
      OutputResolution: serializeAws_restJson1OutputResolutionResamplingInput(input.OutputResolution, context),
    }),
    ...(input.TargetBands != null && {
      TargetBands: serializeAws_restJson1StringListInput(input.TargetBands, context),
    }),
  };
};

const serializeAws_restJson1ReverseGeocodingConfig = (input: ReverseGeocodingConfig, context: __SerdeContext): any => {
  return {
    ...(input.XAttributeName != null && { XAttributeName: input.XAttributeName }),
    ...(input.YAttributeName != null && { YAttributeName: input.YAttributeName }),
  };
};

const serializeAws_restJson1S3DataInput = (input: S3DataInput, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MetadataProvider != null && { MetadataProvider: input.MetadataProvider }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_restJson1StackConfigInput = (input: StackConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.OutputResolution != null && {
      OutputResolution: serializeAws_restJson1OutputResolutionStackInput(input.OutputResolution, context),
    }),
    ...(input.TargetBands != null && {
      TargetBands: serializeAws_restJson1StringListInput(input.TargetBands, context),
    }),
  };
};

const serializeAws_restJson1StringListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TemporalStatisticsConfigInput = (
  input: TemporalStatisticsConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupBy != null && { GroupBy: input.GroupBy }),
    ...(input.Statistics != null && {
      Statistics: serializeAws_restJson1TemporalStatisticsListInput(input.Statistics, context),
    }),
    ...(input.TargetBands != null && {
      TargetBands: serializeAws_restJson1StringListInput(input.TargetBands, context),
    }),
  };
};

const serializeAws_restJson1TemporalStatisticsListInput = (
  input: (TemporalStatistics | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TimeRangeFilterInput = (input: TimeRangeFilterInput, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1UserDefined = (input: UserDefined, context: __SerdeContext): any => {
  return {
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

const serializeAws_restJson1VectorEnrichmentJobConfig = (
  input: VectorEnrichmentJobConfig,
  context: __SerdeContext
): any => {
  return VectorEnrichmentJobConfig.visit(input, {
    MapMatchingConfig: (value) => ({ MapMatchingConfig: serializeAws_restJson1MapMatchingConfig(value, context) }),
    ReverseGeocodingConfig: (value) => ({
      ReverseGeocodingConfig: serializeAws_restJson1ReverseGeocodingConfig(value, context),
    }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VectorEnrichmentJobDataSourceConfigInput = (
  input: VectorEnrichmentJobDataSourceConfigInput,
  context: __SerdeContext
): any => {
  return VectorEnrichmentJobDataSourceConfigInput.visit(input, {
    S3Data: (value) => ({ S3Data: serializeAws_restJson1VectorEnrichmentJobS3Data(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VectorEnrichmentJobInputConfig = (
  input: VectorEnrichmentJobInputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSourceConfig != null && {
      DataSourceConfig: serializeAws_restJson1VectorEnrichmentJobDataSourceConfigInput(input.DataSourceConfig, context),
    }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
  };
};

const serializeAws_restJson1VectorEnrichmentJobS3Data = (
  input: VectorEnrichmentJobS3Data,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

const serializeAws_restJson1ViewOffNadirInput = (input: ViewOffNadirInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

const serializeAws_restJson1ViewSunAzimuthInput = (input: ViewSunAzimuthInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

const serializeAws_restJson1ViewSunElevationInput = (input: ViewSunElevationInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

const serializeAws_restJson1ZonalStatisticsConfigInput = (
  input: ZonalStatisticsConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Statistics != null && {
      Statistics: serializeAws_restJson1ZonalStatisticsListInput(input.Statistics, context),
    }),
    ...(input.TargetBands != null && {
      TargetBands: serializeAws_restJson1StringListInput(input.TargetBands, context),
    }),
    ...(input.ZoneS3Path != null && { ZoneS3Path: input.ZoneS3Path }),
  };
};

const serializeAws_restJson1ZonalStatisticsListInput = (
  input: (ZonalStatistics | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1AreaOfInterest = (output: any, context: __SerdeContext): AreaOfInterest => {
  if (output.AreaOfInterestGeometry != null) {
    return {
      AreaOfInterestGeometry: deserializeAws_restJson1AreaOfInterestGeometry(
        __expectUnion(output.AreaOfInterestGeometry),
        context
      ),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AreaOfInterestGeometry = (
  output: any,
  context: __SerdeContext
): AreaOfInterestGeometry => {
  if (output.MultiPolygonGeometry != null) {
    return {
      MultiPolygonGeometry: deserializeAws_restJson1MultiPolygonGeometryInput(output.MultiPolygonGeometry, context),
    };
  }
  if (output.PolygonGeometry != null) {
    return {
      PolygonGeometry: deserializeAws_restJson1PolygonGeometryInput(output.PolygonGeometry, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AssetsMap = (output: any, context: __SerdeContext): Record<string, AssetValue> => {
  return Object.entries(output).reduce((acc: Record<string, AssetValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1AssetValue(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1AssetValue = (output: any, context: __SerdeContext): AssetValue => {
  return {
    Href: __expectString(output.Href),
  } as any;
};

const deserializeAws_restJson1BandMathConfigInput = (output: any, context: __SerdeContext): BandMathConfigInput => {
  return {
    CustomIndices:
      output.CustomIndices != null
        ? deserializeAws_restJson1CustomIndicesInput(output.CustomIndices, context)
        : undefined,
    PredefinedIndices:
      output.PredefinedIndices != null
        ? deserializeAws_restJson1StringListInput(output.PredefinedIndices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CloudMaskingConfigInput = (
  output: any,
  context: __SerdeContext
): CloudMaskingConfigInput => {
  return {} as any;
};

const deserializeAws_restJson1CloudRemovalConfigInput = (
  output: any,
  context: __SerdeContext
): CloudRemovalConfigInput => {
  return {
    AlgorithmName: __expectString(output.AlgorithmName),
    InterpolationValue: __expectString(output.InterpolationValue),
    TargetBands:
      output.TargetBands != null ? deserializeAws_restJson1StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomIndicesInput = (output: any, context: __SerdeContext): CustomIndicesInput => {
  return {
    Operations:
      output.Operations != null ? deserializeAws_restJson1OperationsListInput(output.Operations, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataCollectionsList = (
  output: any,
  context: __SerdeContext
): RasterDataCollectionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RasterDataCollectionMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EarthObservationJobErrorDetails = (
  output: any,
  context: __SerdeContext
): EarthObservationJobErrorDetails => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1EarthObservationJobList = (
  output: any,
  context: __SerdeContext
): ListEarthObservationJobOutputConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListEarthObservationJobOutputConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EarthObservationJobOutputBands = (output: any, context: __SerdeContext): OutputBand[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputBand(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EoCloudCoverInput = (output: any, context: __SerdeContext): EoCloudCoverInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

const deserializeAws_restJson1EojDataSourceConfigInput = (
  output: any,
  context: __SerdeContext
): EojDataSourceConfigInput => {
  if (output.S3Data != null) {
    return {
      S3Data: deserializeAws_restJson1S3DataInput(output.S3Data, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ExportErrorDetails = (output: any, context: __SerdeContext): ExportErrorDetails => {
  return {
    ExportResults:
      output.ExportResults != null
        ? deserializeAws_restJson1ExportErrorDetailsOutput(output.ExportResults, context)
        : undefined,
    ExportSourceImages:
      output.ExportSourceImages != null
        ? deserializeAws_restJson1ExportErrorDetailsOutput(output.ExportSourceImages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportErrorDetailsOutput = (
  output: any,
  context: __SerdeContext
): ExportErrorDetailsOutput => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ExportS3DataInput = (output: any, context: __SerdeContext): ExportS3DataInput => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_restJson1ExportVectorEnrichmentJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ExportVectorEnrichmentJobOutputConfig => {
  return {
    S3Data:
      output.S3Data != null ? deserializeAws_restJson1VectorEnrichmentJobS3Data(output.S3Data, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Maximum: __limitedParseFloat32(output.Maximum),
    Minimum: __limitedParseFloat32(output.Minimum),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Filter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    Coordinates:
      output.Coordinates != null ? deserializeAws_restJson1LinearRings(output.Coordinates, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1GeoMosaicConfigInput = (output: any, context: __SerdeContext): GeoMosaicConfigInput => {
  return {
    AlgorithmName: __expectString(output.AlgorithmName),
    TargetBands:
      output.TargetBands != null ? deserializeAws_restJson1StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ImageSourceBandList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1InputConfigOutput = (output: any, context: __SerdeContext): InputConfigOutput => {
  return {
    DataSourceConfig:
      output.DataSourceConfig != null
        ? deserializeAws_restJson1EojDataSourceConfigInput(__expectUnion(output.DataSourceConfig), context)
        : undefined,
    PreviousEarthObservationJobArn: __expectString(output.PreviousEarthObservationJobArn),
    RasterDataCollectionQuery:
      output.RasterDataCollectionQuery != null
        ? deserializeAws_restJson1RasterDataCollectionQueryOutput(output.RasterDataCollectionQuery, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ItemSource = (output: any, context: __SerdeContext): ItemSource => {
  return {
    Assets: output.Assets != null ? deserializeAws_restJson1AssetsMap(output.Assets, context) : undefined,
    DateTime:
      output.DateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateTime))) : undefined,
    Geometry: output.Geometry != null ? deserializeAws_restJson1Geometry(output.Geometry, context) : undefined,
    Id: __expectString(output.Id),
    Properties: output.Properties != null ? deserializeAws_restJson1Properties(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ItemSourceList = (output: any, context: __SerdeContext): ItemSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ItemSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JobConfigInput = (output: any, context: __SerdeContext): JobConfigInput => {
  if (output.BandMathConfig != null) {
    return {
      BandMathConfig: deserializeAws_restJson1BandMathConfigInput(output.BandMathConfig, context),
    };
  }
  if (output.CloudMaskingConfig != null) {
    return {
      CloudMaskingConfig: deserializeAws_restJson1CloudMaskingConfigInput(output.CloudMaskingConfig, context),
    };
  }
  if (output.CloudRemovalConfig != null) {
    return {
      CloudRemovalConfig: deserializeAws_restJson1CloudRemovalConfigInput(output.CloudRemovalConfig, context),
    };
  }
  if (output.GeoMosaicConfig != null) {
    return {
      GeoMosaicConfig: deserializeAws_restJson1GeoMosaicConfigInput(output.GeoMosaicConfig, context),
    };
  }
  if (output.LandCoverSegmentationConfig != null) {
    return {
      LandCoverSegmentationConfig: deserializeAws_restJson1LandCoverSegmentationConfigInput(
        output.LandCoverSegmentationConfig,
        context
      ),
    };
  }
  if (output.ResamplingConfig != null) {
    return {
      ResamplingConfig: deserializeAws_restJson1ResamplingConfigInput(output.ResamplingConfig, context),
    };
  }
  if (output.StackConfig != null) {
    return {
      StackConfig: deserializeAws_restJson1StackConfigInput(output.StackConfig, context),
    };
  }
  if (output.TemporalStatisticsConfig != null) {
    return {
      TemporalStatisticsConfig: deserializeAws_restJson1TemporalStatisticsConfigInput(
        output.TemporalStatisticsConfig,
        context
      ),
    };
  }
  if (output.ZonalStatisticsConfig != null) {
    return {
      ZonalStatisticsConfig: deserializeAws_restJson1ZonalStatisticsConfigInput(output.ZonalStatisticsConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1LandCoverSegmentationConfigInput = (
  output: any,
  context: __SerdeContext
): LandCoverSegmentationConfigInput => {
  return {} as any;
};

const deserializeAws_restJson1LandsatCloudCoverLandInput = (
  output: any,
  context: __SerdeContext
): LandsatCloudCoverLandInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

const deserializeAws_restJson1LinearRing = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Position(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LinearRings = (output: any, context: __SerdeContext): number[][][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LinearRing(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LinearRingsList = (output: any, context: __SerdeContext): number[][][][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LinearRings(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ListEarthObservationJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ListEarthObservationJobOutputConfig => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
    Name: __expectString(output.Name),
    OperationType: __expectString(output.OperationType),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ListVectorEnrichmentJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ListVectorEnrichmentJobOutputConfig => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? deserializeAws_restJson1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1MapMatchingConfig = (output: any, context: __SerdeContext): MapMatchingConfig => {
  return {
    IdAttributeName: __expectString(output.IdAttributeName),
    TimestampAttributeName: __expectString(output.TimestampAttributeName),
    XAttributeName: __expectString(output.XAttributeName),
    YAttributeName: __expectString(output.YAttributeName),
  } as any;
};

const deserializeAws_restJson1MultiPolygonGeometryInput = (
  output: any,
  context: __SerdeContext
): MultiPolygonGeometryInput => {
  return {
    Coordinates:
      output.Coordinates != null ? deserializeAws_restJson1LinearRingsList(output.Coordinates, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    Equation: __expectString(output.Equation),
    Name: __expectString(output.Name),
    OutputType: __expectString(output.OutputType),
  } as any;
};

const deserializeAws_restJson1OperationsListInput = (output: any, context: __SerdeContext): Operation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Operation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OutputBand = (output: any, context: __SerdeContext): OutputBand => {
  return {
    BandName: __expectString(output.BandName),
    OutputDataType: __expectString(output.OutputDataType),
  } as any;
};

const deserializeAws_restJson1OutputConfigInput = (output: any, context: __SerdeContext): OutputConfigInput => {
  return {
    S3Data: output.S3Data != null ? deserializeAws_restJson1ExportS3DataInput(output.S3Data, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OutputResolutionResamplingInput = (
  output: any,
  context: __SerdeContext
): OutputResolutionResamplingInput => {
  return {
    UserDefined:
      output.UserDefined != null ? deserializeAws_restJson1UserDefined(output.UserDefined, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OutputResolutionStackInput = (
  output: any,
  context: __SerdeContext
): OutputResolutionStackInput => {
  return {
    Predefined: __expectString(output.Predefined),
    UserDefined:
      output.UserDefined != null ? deserializeAws_restJson1UserDefined(output.UserDefined, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PlatformInput = (output: any, context: __SerdeContext): PlatformInput => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1PolygonGeometryInput = (output: any, context: __SerdeContext): PolygonGeometryInput => {
  return {
    Coordinates:
      output.Coordinates != null ? deserializeAws_restJson1LinearRings(output.Coordinates, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Position = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Properties = (output: any, context: __SerdeContext): Properties => {
  return {
    EoCloudCover: __limitedParseFloat32(output.EoCloudCover),
    LandsatCloudCoverLand: __limitedParseFloat32(output.LandsatCloudCoverLand),
    Platform: __expectString(output.Platform),
    ViewOffNadir: __limitedParseFloat32(output.ViewOffNadir),
    ViewSunAzimuth: __limitedParseFloat32(output.ViewSunAzimuth),
    ViewSunElevation: __limitedParseFloat32(output.ViewSunElevation),
  } as any;
};

const deserializeAws_restJson1Property = (output: any, context: __SerdeContext): Property => {
  if (output.EoCloudCover != null) {
    return {
      EoCloudCover: deserializeAws_restJson1EoCloudCoverInput(output.EoCloudCover, context),
    };
  }
  if (output.LandsatCloudCoverLand != null) {
    return {
      LandsatCloudCoverLand: deserializeAws_restJson1LandsatCloudCoverLandInput(output.LandsatCloudCoverLand, context),
    };
  }
  if (output.Platform != null) {
    return {
      Platform: deserializeAws_restJson1PlatformInput(output.Platform, context),
    };
  }
  if (output.ViewOffNadir != null) {
    return {
      ViewOffNadir: deserializeAws_restJson1ViewOffNadirInput(output.ViewOffNadir, context),
    };
  }
  if (output.ViewSunAzimuth != null) {
    return {
      ViewSunAzimuth: deserializeAws_restJson1ViewSunAzimuthInput(output.ViewSunAzimuth, context),
    };
  }
  if (output.ViewSunElevation != null) {
    return {
      ViewSunElevation: deserializeAws_restJson1ViewSunElevationInput(output.ViewSunElevation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1PropertyFilter = (output: any, context: __SerdeContext): PropertyFilter => {
  return {
    Property:
      output.Property != null ? deserializeAws_restJson1Property(__expectUnion(output.Property), context) : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyFilters = (output: any, context: __SerdeContext): PropertyFilters => {
  return {
    LogicalOperator: __expectString(output.LogicalOperator),
    Properties:
      output.Properties != null ? deserializeAws_restJson1PropertyFiltersList(output.Properties, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PropertyFiltersList = (output: any, context: __SerdeContext): PropertyFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PropertyFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RasterDataCollectionMetadata = (
  output: any,
  context: __SerdeContext
): RasterDataCollectionMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    DescriptionPageUrl: __expectString(output.DescriptionPageUrl),
    Name: __expectString(output.Name),
    SupportedFilters:
      output.SupportedFilters != null
        ? deserializeAws_restJson1FilterList(output.SupportedFilters, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1RasterDataCollectionQueryOutput = (
  output: any,
  context: __SerdeContext
): RasterDataCollectionQueryOutput => {
  return {
    AreaOfInterest:
      output.AreaOfInterest != null
        ? deserializeAws_restJson1AreaOfInterest(__expectUnion(output.AreaOfInterest), context)
        : undefined,
    PropertyFilters:
      output.PropertyFilters != null
        ? deserializeAws_restJson1PropertyFilters(output.PropertyFilters, context)
        : undefined,
    RasterDataCollectionArn: __expectString(output.RasterDataCollectionArn),
    RasterDataCollectionName: __expectString(output.RasterDataCollectionName),
    TimeRangeFilter:
      output.TimeRangeFilter != null
        ? deserializeAws_restJson1TimeRangeFilterInput(output.TimeRangeFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResamplingConfigInput = (output: any, context: __SerdeContext): ResamplingConfigInput => {
  return {
    AlgorithmName: __expectString(output.AlgorithmName),
    OutputResolution:
      output.OutputResolution != null
        ? deserializeAws_restJson1OutputResolutionResamplingInput(output.OutputResolution, context)
        : undefined,
    TargetBands:
      output.TargetBands != null ? deserializeAws_restJson1StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ReverseGeocodingConfig = (
  output: any,
  context: __SerdeContext
): ReverseGeocodingConfig => {
  return {
    XAttributeName: __expectString(output.XAttributeName),
    YAttributeName: __expectString(output.YAttributeName),
  } as any;
};

const deserializeAws_restJson1S3DataInput = (output: any, context: __SerdeContext): S3DataInput => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    MetadataProvider: __expectString(output.MetadataProvider),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_restJson1StackConfigInput = (output: any, context: __SerdeContext): StackConfigInput => {
  return {
    OutputResolution:
      output.OutputResolution != null
        ? deserializeAws_restJson1OutputResolutionStackInput(output.OutputResolution, context)
        : undefined,
    TargetBands:
      output.TargetBands != null ? deserializeAws_restJson1StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

const deserializeAws_restJson1StringListInput = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemporalStatisticsConfigInput = (
  output: any,
  context: __SerdeContext
): TemporalStatisticsConfigInput => {
  return {
    GroupBy: __expectString(output.GroupBy),
    Statistics:
      output.Statistics != null
        ? deserializeAws_restJson1TemporalStatisticsListInput(output.Statistics, context)
        : undefined,
    TargetBands:
      output.TargetBands != null ? deserializeAws_restJson1StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TemporalStatisticsListInput = (
  output: any,
  context: __SerdeContext
): (TemporalStatistics | string)[] => {
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

const deserializeAws_restJson1TimeRangeFilterInput = (output: any, context: __SerdeContext): TimeRangeFilterInput => {
  return {
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1UserDefined = (output: any, context: __SerdeContext): UserDefined => {
  return {
    Unit: __expectString(output.Unit),
    Value: __limitedParseFloat32(output.Value),
  } as any;
};

const deserializeAws_restJson1VectorEnrichmentJobConfig = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobConfig => {
  if (output.MapMatchingConfig != null) {
    return {
      MapMatchingConfig: deserializeAws_restJson1MapMatchingConfig(output.MapMatchingConfig, context),
    };
  }
  if (output.ReverseGeocodingConfig != null) {
    return {
      ReverseGeocodingConfig: deserializeAws_restJson1ReverseGeocodingConfig(output.ReverseGeocodingConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VectorEnrichmentJobDataSourceConfigInput = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobDataSourceConfigInput => {
  if (output.S3Data != null) {
    return {
      S3Data: deserializeAws_restJson1VectorEnrichmentJobS3Data(output.S3Data, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1VectorEnrichmentJobErrorDetails = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobErrorDetails => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

const deserializeAws_restJson1VectorEnrichmentJobExportErrorDetails = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobExportErrorDetails => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1VectorEnrichmentJobInputConfig = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobInputConfig => {
  return {
    DataSourceConfig:
      output.DataSourceConfig != null
        ? deserializeAws_restJson1VectorEnrichmentJobDataSourceConfigInput(
            __expectUnion(output.DataSourceConfig),
            context
          )
        : undefined,
    DocumentType: __expectString(output.DocumentType),
  } as any;
};

const deserializeAws_restJson1VectorEnrichmentJobList = (
  output: any,
  context: __SerdeContext
): ListVectorEnrichmentJobOutputConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListVectorEnrichmentJobOutputConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VectorEnrichmentJobS3Data = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobS3Data => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

const deserializeAws_restJson1ViewOffNadirInput = (output: any, context: __SerdeContext): ViewOffNadirInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

const deserializeAws_restJson1ViewSunAzimuthInput = (output: any, context: __SerdeContext): ViewSunAzimuthInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

const deserializeAws_restJson1ViewSunElevationInput = (output: any, context: __SerdeContext): ViewSunElevationInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

const deserializeAws_restJson1ZonalStatisticsConfigInput = (
  output: any,
  context: __SerdeContext
): ZonalStatisticsConfigInput => {
  return {
    Statistics:
      output.Statistics != null
        ? deserializeAws_restJson1ZonalStatisticsListInput(output.Statistics, context)
        : undefined,
    TargetBands:
      output.TargetBands != null ? deserializeAws_restJson1StringListInput(output.TargetBands, context) : undefined,
    ZoneS3Path: __expectString(output.ZoneS3Path),
  } as any;
};

const deserializeAws_restJson1ZonalStatisticsListInput = (
  output: any,
  context: __SerdeContext
): (ZonalStatistics | string)[] => {
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
