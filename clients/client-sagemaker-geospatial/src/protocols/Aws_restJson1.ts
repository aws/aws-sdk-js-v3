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
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
  TimeRangeFilterOutput,
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

/**
 * serializeAws_restJson1DeleteEarthObservationJobCommand
 */
export const se_DeleteEarthObservationJobCommand = async (
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

/**
 * serializeAws_restJson1DeleteVectorEnrichmentJobCommand
 */
export const se_DeleteVectorEnrichmentJobCommand = async (
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

/**
 * serializeAws_restJson1ExportEarthObservationJobCommand
 */
export const se_ExportEarthObservationJobCommand = async (
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
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.ExportSourceImages != null && { ExportSourceImages: input.ExportSourceImages }),
    ...(input.OutputConfig != null && { OutputConfig: se_OutputConfigInput(input.OutputConfig, context) }),
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
 * serializeAws_restJson1ExportVectorEnrichmentJobCommand
 */
export const se_ExportVectorEnrichmentJobCommand = async (
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
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.OutputConfig != null && {
      OutputConfig: se_ExportVectorEnrichmentJobOutputConfig(input.OutputConfig, context),
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

/**
 * serializeAws_restJson1GetEarthObservationJobCommand
 */
export const se_GetEarthObservationJobCommand = async (
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

/**
 * serializeAws_restJson1GetRasterDataCollectionCommand
 */
export const se_GetRasterDataCollectionCommand = async (
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

/**
 * serializeAws_restJson1GetTileCommand
 */
export const se_GetTileCommand = async (
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
    ExecutionRoleArn: [, input.ExecutionRoleArn!],
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
 * serializeAws_restJson1GetVectorEnrichmentJobCommand
 */
export const se_GetVectorEnrichmentJobCommand = async (
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

/**
 * serializeAws_restJson1ListEarthObservationJobsCommand
 */
export const se_ListEarthObservationJobsCommand = async (
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

/**
 * serializeAws_restJson1ListRasterDataCollectionsCommand
 */
export const se_ListRasterDataCollectionsCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1ListVectorEnrichmentJobsCommand
 */
export const se_ListVectorEnrichmentJobsCommand = async (
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

/**
 * serializeAws_restJson1SearchRasterDataCollectionCommand
 */
export const se_SearchRasterDataCollectionCommand = async (
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
      RasterDataCollectionQuery: se_RasterDataCollectionQueryWithBandFilterInput(
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

/**
 * serializeAws_restJson1StartEarthObservationJobCommand
 */
export const se_StartEarthObservationJobCommand = async (
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
    ...(input.InputConfig != null && { InputConfig: se_InputConfigInput(input.InputConfig, context) }),
    ...(input.JobConfig != null && { JobConfig: se_JobConfigInput(input.JobConfig, context) }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
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
 * serializeAws_restJson1StartVectorEnrichmentJobCommand
 */
export const se_StartVectorEnrichmentJobCommand = async (
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
    ...(input.InputConfig != null && { InputConfig: se_VectorEnrichmentJobInputConfig(input.InputConfig, context) }),
    ...(input.JobConfig != null && { JobConfig: se_VectorEnrichmentJobConfig(input.JobConfig, context) }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
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
 * serializeAws_restJson1StopEarthObservationJobCommand
 */
export const se_StopEarthObservationJobCommand = async (
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

/**
 * serializeAws_restJson1StopVectorEnrichmentJobCommand
 */
export const se_StopVectorEnrichmentJobCommand = async (
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * deserializeAws_restJson1DeleteEarthObservationJobCommand
 */
export const de_DeleteEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEarthObservationJobCommandError
 */
const de_DeleteEarthObservationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1DeleteVectorEnrichmentJobCommand
 */
export const de_DeleteVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVectorEnrichmentJobCommandError
 */
const de_DeleteVectorEnrichmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1ExportEarthObservationJobCommand
 */
export const de_ExportEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
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
    contents.OutputConfig = de_OutputConfigInput(data.OutputConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ExportEarthObservationJobCommandError
 */
const de_ExportEarthObservationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1ExportVectorEnrichmentJobCommand
 */
export const de_ExportVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.OutputConfig != null) {
    contents.OutputConfig = de_ExportVectorEnrichmentJobOutputConfig(data.OutputConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ExportVectorEnrichmentJobCommandError
 */
const de_ExportVectorEnrichmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1GetEarthObservationJobCommand
 */
export const de_GetEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = de_EarthObservationJobErrorDetails(data.ErrorDetails, context);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportErrorDetails != null) {
    contents.ExportErrorDetails = de_ExportErrorDetails(data.ExportErrorDetails, context);
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = de_InputConfigOutput(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = de_JobConfigInput(__expectUnion(data.JobConfig), context);
  }
  if (data.KmsKeyId != null) {
    contents.KmsKeyId = __expectString(data.KmsKeyId);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.OutputBands != null) {
    contents.OutputBands = de_EarthObservationJobOutputBands(data.OutputBands, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEarthObservationJobCommandError
 */
const de_GetEarthObservationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1GetRasterDataCollectionCommand
 */
export const de_GetRasterDataCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRasterDataCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRasterDataCollectionCommandError(output, context);
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
    contents.ImageSourceBands = de_ImageSourceBandList(data.ImageSourceBands, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.SupportedFilters != null) {
    contents.SupportedFilters = de_FilterList(data.SupportedFilters, context);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRasterDataCollectionCommandError
 */
const de_GetRasterDataCollectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1GetTileCommand
 */
export const de_GetTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.BinaryFile = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetTileCommandError
 */
const de_GetTileCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1GetVectorEnrichmentJobCommand
 */
export const de_GetVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ErrorDetails != null) {
    contents.ErrorDetails = de_VectorEnrichmentJobErrorDetails(data.ErrorDetails, context);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.ExportErrorDetails != null) {
    contents.ExportErrorDetails = de_VectorEnrichmentJobExportErrorDetails(data.ExportErrorDetails, context);
  }
  if (data.ExportStatus != null) {
    contents.ExportStatus = __expectString(data.ExportStatus);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = de_VectorEnrichmentJobInputConfig(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = de_VectorEnrichmentJobConfig(__expectUnion(data.JobConfig), context);
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
    contents.Tags = de_Tags(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetVectorEnrichmentJobCommandError
 */
const de_GetVectorEnrichmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1ListEarthObservationJobsCommand
 */
export const de_ListEarthObservationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEarthObservationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEarthObservationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EarthObservationJobSummaries != null) {
    contents.EarthObservationJobSummaries = de_EarthObservationJobList(data.EarthObservationJobSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEarthObservationJobsCommandError
 */
const de_ListEarthObservationJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1ListRasterDataCollectionsCommand
 */
export const de_ListRasterDataCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRasterDataCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRasterDataCollectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RasterDataCollectionSummaries != null) {
    contents.RasterDataCollectionSummaries = de_DataCollectionsList(data.RasterDataCollectionSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRasterDataCollectionsCommandError
 */
const de_ListRasterDataCollectionsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1ListVectorEnrichmentJobsCommand
 */
export const de_ListVectorEnrichmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVectorEnrichmentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVectorEnrichmentJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.VectorEnrichmentJobSummaries != null) {
    contents.VectorEnrichmentJobSummaries = de_VectorEnrichmentJobList(data.VectorEnrichmentJobSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListVectorEnrichmentJobsCommandError
 */
const de_ListVectorEnrichmentJobsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1SearchRasterDataCollectionCommand
 */
export const de_SearchRasterDataCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRasterDataCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchRasterDataCollectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateResultCount != null) {
    contents.ApproximateResultCount = __expectInt32(data.ApproximateResultCount);
  }
  if (data.Items != null) {
    contents.Items = de_ItemSourceList(data.Items, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchRasterDataCollectionCommandError
 */
const de_SearchRasterDataCollectionCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1StartEarthObservationJobCommand
 */
export const de_StartEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = de_InputConfigOutput(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = de_JobConfigInput(__expectUnion(data.JobConfig), context);
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
    contents.Tags = de_Tags(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartEarthObservationJobCommandError
 */
const de_StartEarthObservationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1StartVectorEnrichmentJobCommand
 */
export const de_StartVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.DurationInSeconds != null) {
    contents.DurationInSeconds = __expectInt32(data.DurationInSeconds);
  }
  if (data.ExecutionRoleArn != null) {
    contents.ExecutionRoleArn = __expectString(data.ExecutionRoleArn);
  }
  if (data.InputConfig != null) {
    contents.InputConfig = de_VectorEnrichmentJobInputConfig(data.InputConfig, context);
  }
  if (data.JobConfig != null) {
    contents.JobConfig = de_VectorEnrichmentJobConfig(__expectUnion(data.JobConfig), context);
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
    contents.Tags = de_Tags(data.Tags, context);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartVectorEnrichmentJobCommandError
 */
const de_StartVectorEnrichmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1StopEarthObservationJobCommand
 */
export const de_StopEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopEarthObservationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopEarthObservationJobCommandError
 */
const de_StopEarthObservationJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
 * deserializeAws_restJson1StopVectorEnrichmentJobCommand
 */
export const de_StopVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopVectorEnrichmentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopVectorEnrichmentJobCommandError
 */
const de_StopVectorEnrichmentJobCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.sagemakergeospatial#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.sagemakergeospatial#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.sagemakergeospatial#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.sagemakergeospatial#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.sagemakergeospatial#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.sagemakergeospatial#ValidationException":
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
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

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
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

/**
 * serializeAws_restJson1AreaOfInterest
 */
const se_AreaOfInterest = (input: AreaOfInterest, context: __SerdeContext): any => {
  return AreaOfInterest.visit(input, {
    AreaOfInterestGeometry: (value) => ({ AreaOfInterestGeometry: se_AreaOfInterestGeometry(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1AreaOfInterestGeometry
 */
const se_AreaOfInterestGeometry = (input: AreaOfInterestGeometry, context: __SerdeContext): any => {
  return AreaOfInterestGeometry.visit(input, {
    MultiPolygonGeometry: (value) => ({ MultiPolygonGeometry: se_MultiPolygonGeometryInput(value, context) }),
    PolygonGeometry: (value) => ({ PolygonGeometry: se_PolygonGeometryInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1BandMathConfigInput
 */
const se_BandMathConfigInput = (input: BandMathConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.CustomIndices != null && { CustomIndices: se_CustomIndicesInput(input.CustomIndices, context) }),
    ...(input.PredefinedIndices != null && { PredefinedIndices: se_StringListInput(input.PredefinedIndices, context) }),
  };
};

/**
 * serializeAws_restJson1CloudMaskingConfigInput
 */
const se_CloudMaskingConfigInput = (input: CloudMaskingConfigInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1CloudRemovalConfigInput
 */
const se_CloudRemovalConfigInput = (input: CloudRemovalConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmName != null && { AlgorithmName: input.AlgorithmName }),
    ...(input.InterpolationValue != null && { InterpolationValue: input.InterpolationValue }),
    ...(input.TargetBands != null && { TargetBands: se_StringListInput(input.TargetBands, context) }),
  };
};

/**
 * serializeAws_restJson1CustomIndicesInput
 */
const se_CustomIndicesInput = (input: CustomIndicesInput, context: __SerdeContext): any => {
  return {
    ...(input.Operations != null && { Operations: se_OperationsListInput(input.Operations, context) }),
  };
};

/**
 * serializeAws_restJson1EoCloudCoverInput
 */
const se_EoCloudCoverInput = (input: EoCloudCoverInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

/**
 * serializeAws_restJson1EojDataSourceConfigInput
 */
const se_EojDataSourceConfigInput = (input: EojDataSourceConfigInput, context: __SerdeContext): any => {
  return EojDataSourceConfigInput.visit(input, {
    S3Data: (value) => ({ S3Data: se_S3DataInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ExportS3DataInput
 */
const se_ExportS3DataInput = (input: ExportS3DataInput, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_restJson1ExportVectorEnrichmentJobOutputConfig
 */
const se_ExportVectorEnrichmentJobOutputConfig = (
  input: ExportVectorEnrichmentJobOutputConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Data != null && { S3Data: se_VectorEnrichmentJobS3Data(input.S3Data, context) }),
  };
};

/**
 * serializeAws_restJson1GeoMosaicConfigInput
 */
const se_GeoMosaicConfigInput = (input: GeoMosaicConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmName != null && { AlgorithmName: input.AlgorithmName }),
    ...(input.TargetBands != null && { TargetBands: se_StringListInput(input.TargetBands, context) }),
  };
};

/**
 * serializeAws_restJson1InputConfigInput
 */
const se_InputConfigInput = (input: InputConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceConfig != null && {
      DataSourceConfig: se_EojDataSourceConfigInput(input.DataSourceConfig, context),
    }),
    ...(input.PreviousEarthObservationJobArn != null && {
      PreviousEarthObservationJobArn: input.PreviousEarthObservationJobArn,
    }),
    ...(input.RasterDataCollectionQuery != null && {
      RasterDataCollectionQuery: se_RasterDataCollectionQueryInput(input.RasterDataCollectionQuery, context),
    }),
  };
};

/**
 * serializeAws_restJson1JobConfigInput
 */
const se_JobConfigInput = (input: JobConfigInput, context: __SerdeContext): any => {
  return JobConfigInput.visit(input, {
    BandMathConfig: (value) => ({ BandMathConfig: se_BandMathConfigInput(value, context) }),
    CloudMaskingConfig: (value) => ({ CloudMaskingConfig: se_CloudMaskingConfigInput(value, context) }),
    CloudRemovalConfig: (value) => ({ CloudRemovalConfig: se_CloudRemovalConfigInput(value, context) }),
    GeoMosaicConfig: (value) => ({ GeoMosaicConfig: se_GeoMosaicConfigInput(value, context) }),
    LandCoverSegmentationConfig: (value) => ({
      LandCoverSegmentationConfig: se_LandCoverSegmentationConfigInput(value, context),
    }),
    ResamplingConfig: (value) => ({ ResamplingConfig: se_ResamplingConfigInput(value, context) }),
    StackConfig: (value) => ({ StackConfig: se_StackConfigInput(value, context) }),
    TemporalStatisticsConfig: (value) => ({
      TemporalStatisticsConfig: se_TemporalStatisticsConfigInput(value, context),
    }),
    ZonalStatisticsConfig: (value) => ({ ZonalStatisticsConfig: se_ZonalStatisticsConfigInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1LandCoverSegmentationConfigInput
 */
const se_LandCoverSegmentationConfigInput = (input: LandCoverSegmentationConfigInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1LandsatCloudCoverLandInput
 */
const se_LandsatCloudCoverLandInput = (input: LandsatCloudCoverLandInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

/**
 * serializeAws_restJson1LinearRing
 */
const se_LinearRing = (input: number[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Position(entry, context);
    });
};

/**
 * serializeAws_restJson1LinearRings
 */
const se_LinearRings = (input: number[][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LinearRing(entry, context);
    });
};

/**
 * serializeAws_restJson1LinearRingsList
 */
const se_LinearRingsList = (input: number[][][][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LinearRings(entry, context);
    });
};

/**
 * serializeAws_restJson1MapMatchingConfig
 */
const se_MapMatchingConfig = (input: MapMatchingConfig, context: __SerdeContext): any => {
  return {
    ...(input.IdAttributeName != null && { IdAttributeName: input.IdAttributeName }),
    ...(input.TimestampAttributeName != null && { TimestampAttributeName: input.TimestampAttributeName }),
    ...(input.XAttributeName != null && { XAttributeName: input.XAttributeName }),
    ...(input.YAttributeName != null && { YAttributeName: input.YAttributeName }),
  };
};

/**
 * serializeAws_restJson1MultiPolygonGeometryInput
 */
const se_MultiPolygonGeometryInput = (input: MultiPolygonGeometryInput, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates != null && { Coordinates: se_LinearRingsList(input.Coordinates, context) }),
  };
};

/**
 * serializeAws_restJson1Operation
 */
const se_Operation = (input: Operation, context: __SerdeContext): any => {
  return {
    ...(input.Equation != null && { Equation: input.Equation }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OutputType != null && { OutputType: input.OutputType }),
  };
};

/**
 * serializeAws_restJson1OperationsListInput
 */
const se_OperationsListInput = (input: Operation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Operation(entry, context);
    });
};

/**
 * serializeAws_restJson1OutputConfigInput
 */
const se_OutputConfigInput = (input: OutputConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.S3Data != null && { S3Data: se_ExportS3DataInput(input.S3Data, context) }),
  };
};

/**
 * serializeAws_restJson1OutputResolutionResamplingInput
 */
const se_OutputResolutionResamplingInput = (input: OutputResolutionResamplingInput, context: __SerdeContext): any => {
  return {
    ...(input.UserDefined != null && { UserDefined: se_UserDefined(input.UserDefined, context) }),
  };
};

/**
 * serializeAws_restJson1OutputResolutionStackInput
 */
const se_OutputResolutionStackInput = (input: OutputResolutionStackInput, context: __SerdeContext): any => {
  return {
    ...(input.Predefined != null && { Predefined: input.Predefined }),
    ...(input.UserDefined != null && { UserDefined: se_UserDefined(input.UserDefined, context) }),
  };
};

/**
 * serializeAws_restJson1PlatformInput
 */
const se_PlatformInput = (input: PlatformInput, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1PolygonGeometryInput
 */
const se_PolygonGeometryInput = (input: PolygonGeometryInput, context: __SerdeContext): any => {
  return {
    ...(input.Coordinates != null && { Coordinates: se_LinearRings(input.Coordinates, context) }),
  };
};

/**
 * serializeAws_restJson1Position
 */
const se_Position = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1Property
 */
const se_Property = (input: Property, context: __SerdeContext): any => {
  return Property.visit(input, {
    EoCloudCover: (value) => ({ EoCloudCover: se_EoCloudCoverInput(value, context) }),
    LandsatCloudCoverLand: (value) => ({ LandsatCloudCoverLand: se_LandsatCloudCoverLandInput(value, context) }),
    Platform: (value) => ({ Platform: se_PlatformInput(value, context) }),
    ViewOffNadir: (value) => ({ ViewOffNadir: se_ViewOffNadirInput(value, context) }),
    ViewSunAzimuth: (value) => ({ ViewSunAzimuth: se_ViewSunAzimuthInput(value, context) }),
    ViewSunElevation: (value) => ({ ViewSunElevation: se_ViewSunElevationInput(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1PropertyFilter
 */
const se_PropertyFilter = (input: PropertyFilter, context: __SerdeContext): any => {
  return {
    ...(input.Property != null && { Property: se_Property(input.Property, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyFilters
 */
const se_PropertyFilters = (input: PropertyFilters, context: __SerdeContext): any => {
  return {
    ...(input.LogicalOperator != null && { LogicalOperator: input.LogicalOperator }),
    ...(input.Properties != null && { Properties: se_PropertyFiltersList(input.Properties, context) }),
  };
};

/**
 * serializeAws_restJson1PropertyFiltersList
 */
const se_PropertyFiltersList = (input: PropertyFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PropertyFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RasterDataCollectionQueryInput
 */
const se_RasterDataCollectionQueryInput = (input: RasterDataCollectionQueryInput, context: __SerdeContext): any => {
  return {
    ...(input.AreaOfInterest != null && { AreaOfInterest: se_AreaOfInterest(input.AreaOfInterest, context) }),
    ...(input.PropertyFilters != null && { PropertyFilters: se_PropertyFilters(input.PropertyFilters, context) }),
    ...(input.RasterDataCollectionArn != null && { RasterDataCollectionArn: input.RasterDataCollectionArn }),
    ...(input.TimeRangeFilter != null && { TimeRangeFilter: se_TimeRangeFilterInput(input.TimeRangeFilter, context) }),
  };
};

/**
 * serializeAws_restJson1RasterDataCollectionQueryWithBandFilterInput
 */
const se_RasterDataCollectionQueryWithBandFilterInput = (
  input: RasterDataCollectionQueryWithBandFilterInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.AreaOfInterest != null && { AreaOfInterest: se_AreaOfInterest(input.AreaOfInterest, context) }),
    ...(input.BandFilter != null && { BandFilter: se_StringListInput(input.BandFilter, context) }),
    ...(input.PropertyFilters != null && { PropertyFilters: se_PropertyFilters(input.PropertyFilters, context) }),
    ...(input.TimeRangeFilter != null && { TimeRangeFilter: se_TimeRangeFilterInput(input.TimeRangeFilter, context) }),
  };
};

/**
 * serializeAws_restJson1ResamplingConfigInput
 */
const se_ResamplingConfigInput = (input: ResamplingConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmName != null && { AlgorithmName: input.AlgorithmName }),
    ...(input.OutputResolution != null && {
      OutputResolution: se_OutputResolutionResamplingInput(input.OutputResolution, context),
    }),
    ...(input.TargetBands != null && { TargetBands: se_StringListInput(input.TargetBands, context) }),
  };
};

/**
 * serializeAws_restJson1ReverseGeocodingConfig
 */
const se_ReverseGeocodingConfig = (input: ReverseGeocodingConfig, context: __SerdeContext): any => {
  return {
    ...(input.XAttributeName != null && { XAttributeName: input.XAttributeName }),
    ...(input.YAttributeName != null && { YAttributeName: input.YAttributeName }),
  };
};

/**
 * serializeAws_restJson1S3DataInput
 */
const se_S3DataInput = (input: S3DataInput, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MetadataProvider != null && { MetadataProvider: input.MetadataProvider }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_restJson1StackConfigInput
 */
const se_StackConfigInput = (input: StackConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.OutputResolution != null && {
      OutputResolution: se_OutputResolutionStackInput(input.OutputResolution, context),
    }),
    ...(input.TargetBands != null && { TargetBands: se_StringListInput(input.TargetBands, context) }),
  };
};

/**
 * serializeAws_restJson1StringListInput
 */
const se_StringListInput = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TemporalStatisticsConfigInput
 */
const se_TemporalStatisticsConfigInput = (input: TemporalStatisticsConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.GroupBy != null && { GroupBy: input.GroupBy }),
    ...(input.Statistics != null && { Statistics: se_TemporalStatisticsListInput(input.Statistics, context) }),
    ...(input.TargetBands != null && { TargetBands: se_StringListInput(input.TargetBands, context) }),
  };
};

/**
 * serializeAws_restJson1TemporalStatisticsListInput
 */
const se_TemporalStatisticsListInput = (input: (TemporalStatistics | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TimeRangeFilterInput
 */
const se_TimeRangeFilterInput = (input: TimeRangeFilterInput, context: __SerdeContext): any => {
  return {
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1UserDefined
 */
const se_UserDefined = (input: UserDefined, context: __SerdeContext): any => {
  return {
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

/**
 * serializeAws_restJson1VectorEnrichmentJobConfig
 */
const se_VectorEnrichmentJobConfig = (input: VectorEnrichmentJobConfig, context: __SerdeContext): any => {
  return VectorEnrichmentJobConfig.visit(input, {
    MapMatchingConfig: (value) => ({ MapMatchingConfig: se_MapMatchingConfig(value, context) }),
    ReverseGeocodingConfig: (value) => ({ ReverseGeocodingConfig: se_ReverseGeocodingConfig(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VectorEnrichmentJobDataSourceConfigInput
 */
const se_VectorEnrichmentJobDataSourceConfigInput = (
  input: VectorEnrichmentJobDataSourceConfigInput,
  context: __SerdeContext
): any => {
  return VectorEnrichmentJobDataSourceConfigInput.visit(input, {
    S3Data: (value) => ({ S3Data: se_VectorEnrichmentJobS3Data(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VectorEnrichmentJobInputConfig
 */
const se_VectorEnrichmentJobInputConfig = (input: VectorEnrichmentJobInputConfig, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceConfig != null && {
      DataSourceConfig: se_VectorEnrichmentJobDataSourceConfigInput(input.DataSourceConfig, context),
    }),
    ...(input.DocumentType != null && { DocumentType: input.DocumentType }),
  };
};

/**
 * serializeAws_restJson1VectorEnrichmentJobS3Data
 */
const se_VectorEnrichmentJobS3Data = (input: VectorEnrichmentJobS3Data, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.S3Uri != null && { S3Uri: input.S3Uri }),
  };
};

/**
 * serializeAws_restJson1ViewOffNadirInput
 */
const se_ViewOffNadirInput = (input: ViewOffNadirInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

/**
 * serializeAws_restJson1ViewSunAzimuthInput
 */
const se_ViewSunAzimuthInput = (input: ViewSunAzimuthInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

/**
 * serializeAws_restJson1ViewSunElevationInput
 */
const se_ViewSunElevationInput = (input: ViewSunElevationInput, context: __SerdeContext): any => {
  return {
    ...(input.LowerBound != null && { LowerBound: __serializeFloat(input.LowerBound) }),
    ...(input.UpperBound != null && { UpperBound: __serializeFloat(input.UpperBound) }),
  };
};

/**
 * serializeAws_restJson1ZonalStatisticsConfigInput
 */
const se_ZonalStatisticsConfigInput = (input: ZonalStatisticsConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.Statistics != null && { Statistics: se_ZonalStatisticsListInput(input.Statistics, context) }),
    ...(input.TargetBands != null && { TargetBands: se_StringListInput(input.TargetBands, context) }),
    ...(input.ZoneS3Path != null && { ZoneS3Path: input.ZoneS3Path }),
    ...(input.ZoneS3PathKmsKeyId != null && { ZoneS3PathKmsKeyId: input.ZoneS3PathKmsKeyId }),
  };
};

/**
 * serializeAws_restJson1ZonalStatisticsListInput
 */
const se_ZonalStatisticsListInput = (input: (ZonalStatistics | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AreaOfInterest
 */
const de_AreaOfInterest = (output: any, context: __SerdeContext): AreaOfInterest => {
  if (output.AreaOfInterestGeometry != null) {
    return {
      AreaOfInterestGeometry: de_AreaOfInterestGeometry(__expectUnion(output.AreaOfInterestGeometry), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AreaOfInterestGeometry
 */
const de_AreaOfInterestGeometry = (output: any, context: __SerdeContext): AreaOfInterestGeometry => {
  if (output.MultiPolygonGeometry != null) {
    return {
      MultiPolygonGeometry: de_MultiPolygonGeometryInput(output.MultiPolygonGeometry, context),
    };
  }
  if (output.PolygonGeometry != null) {
    return {
      PolygonGeometry: de_PolygonGeometryInput(output.PolygonGeometry, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AssetsMap
 */
const de_AssetsMap = (output: any, context: __SerdeContext): Record<string, AssetValue> => {
  return Object.entries(output).reduce((acc: Record<string, AssetValue>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_AssetValue(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AssetValue
 */
const de_AssetValue = (output: any, context: __SerdeContext): AssetValue => {
  return {
    Href: __expectString(output.Href),
  } as any;
};

/**
 * deserializeAws_restJson1BandMathConfigInput
 */
const de_BandMathConfigInput = (output: any, context: __SerdeContext): BandMathConfigInput => {
  return {
    CustomIndices: output.CustomIndices != null ? de_CustomIndicesInput(output.CustomIndices, context) : undefined,
    PredefinedIndices:
      output.PredefinedIndices != null ? de_StringListInput(output.PredefinedIndices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudMaskingConfigInput
 */
const de_CloudMaskingConfigInput = (output: any, context: __SerdeContext): CloudMaskingConfigInput => {
  return {} as any;
};

/**
 * deserializeAws_restJson1CloudRemovalConfigInput
 */
const de_CloudRemovalConfigInput = (output: any, context: __SerdeContext): CloudRemovalConfigInput => {
  return {
    AlgorithmName: __expectString(output.AlgorithmName),
    InterpolationValue: __expectString(output.InterpolationValue),
    TargetBands: output.TargetBands != null ? de_StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomIndicesInput
 */
const de_CustomIndicesInput = (output: any, context: __SerdeContext): CustomIndicesInput => {
  return {
    Operations: output.Operations != null ? de_OperationsListInput(output.Operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataCollectionsList
 */
const de_DataCollectionsList = (output: any, context: __SerdeContext): RasterDataCollectionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RasterDataCollectionMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EarthObservationJobErrorDetails
 */
const de_EarthObservationJobErrorDetails = (output: any, context: __SerdeContext): EarthObservationJobErrorDetails => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1EarthObservationJobList
 */
const de_EarthObservationJobList = (output: any, context: __SerdeContext): ListEarthObservationJobOutputConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListEarthObservationJobOutputConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EarthObservationJobOutputBands
 */
const de_EarthObservationJobOutputBands = (output: any, context: __SerdeContext): OutputBand[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputBand(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EoCloudCoverInput
 */
const de_EoCloudCoverInput = (output: any, context: __SerdeContext): EoCloudCoverInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

/**
 * deserializeAws_restJson1EojDataSourceConfigInput
 */
const de_EojDataSourceConfigInput = (output: any, context: __SerdeContext): EojDataSourceConfigInput => {
  if (output.S3Data != null) {
    return {
      S3Data: de_S3DataInput(output.S3Data, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ExportErrorDetails
 */
const de_ExportErrorDetails = (output: any, context: __SerdeContext): ExportErrorDetails => {
  return {
    ExportResults:
      output.ExportResults != null ? de_ExportErrorDetailsOutput(output.ExportResults, context) : undefined,
    ExportSourceImages:
      output.ExportSourceImages != null ? de_ExportErrorDetailsOutput(output.ExportSourceImages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExportErrorDetailsOutput
 */
const de_ExportErrorDetailsOutput = (output: any, context: __SerdeContext): ExportErrorDetailsOutput => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ExportS3DataInput
 */
const de_ExportS3DataInput = (output: any, context: __SerdeContext): ExportS3DataInput => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1ExportVectorEnrichmentJobOutputConfig
 */
const de_ExportVectorEnrichmentJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ExportVectorEnrichmentJobOutputConfig => {
  return {
    S3Data: output.S3Data != null ? de_VectorEnrichmentJobS3Data(output.S3Data, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    Maximum: __limitedParseFloat32(output.Maximum),
    Minimum: __limitedParseFloat32(output.Minimum),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return {
    Coordinates: output.Coordinates != null ? de_LinearRings(output.Coordinates, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1GeoMosaicConfigInput
 */
const de_GeoMosaicConfigInput = (output: any, context: __SerdeContext): GeoMosaicConfigInput => {
  return {
    AlgorithmName: __expectString(output.AlgorithmName),
    TargetBands: output.TargetBands != null ? de_StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImageSourceBandList
 */
const de_ImageSourceBandList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1InputConfigOutput
 */
const de_InputConfigOutput = (output: any, context: __SerdeContext): InputConfigOutput => {
  return {
    DataSourceConfig:
      output.DataSourceConfig != null
        ? de_EojDataSourceConfigInput(__expectUnion(output.DataSourceConfig), context)
        : undefined,
    PreviousEarthObservationJobArn: __expectString(output.PreviousEarthObservationJobArn),
    RasterDataCollectionQuery:
      output.RasterDataCollectionQuery != null
        ? de_RasterDataCollectionQueryOutput(output.RasterDataCollectionQuery, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ItemSource
 */
const de_ItemSource = (output: any, context: __SerdeContext): ItemSource => {
  return {
    Assets: output.Assets != null ? de_AssetsMap(output.Assets, context) : undefined,
    DateTime:
      output.DateTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DateTime))) : undefined,
    Geometry: output.Geometry != null ? de_Geometry(output.Geometry, context) : undefined,
    Id: __expectString(output.Id),
    Properties: output.Properties != null ? de_Properties(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ItemSourceList
 */
const de_ItemSourceList = (output: any, context: __SerdeContext): ItemSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ItemSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JobConfigInput
 */
const de_JobConfigInput = (output: any, context: __SerdeContext): JobConfigInput => {
  if (output.BandMathConfig != null) {
    return {
      BandMathConfig: de_BandMathConfigInput(output.BandMathConfig, context),
    };
  }
  if (output.CloudMaskingConfig != null) {
    return {
      CloudMaskingConfig: de_CloudMaskingConfigInput(output.CloudMaskingConfig, context),
    };
  }
  if (output.CloudRemovalConfig != null) {
    return {
      CloudRemovalConfig: de_CloudRemovalConfigInput(output.CloudRemovalConfig, context),
    };
  }
  if (output.GeoMosaicConfig != null) {
    return {
      GeoMosaicConfig: de_GeoMosaicConfigInput(output.GeoMosaicConfig, context),
    };
  }
  if (output.LandCoverSegmentationConfig != null) {
    return {
      LandCoverSegmentationConfig: de_LandCoverSegmentationConfigInput(output.LandCoverSegmentationConfig, context),
    };
  }
  if (output.ResamplingConfig != null) {
    return {
      ResamplingConfig: de_ResamplingConfigInput(output.ResamplingConfig, context),
    };
  }
  if (output.StackConfig != null) {
    return {
      StackConfig: de_StackConfigInput(output.StackConfig, context),
    };
  }
  if (output.TemporalStatisticsConfig != null) {
    return {
      TemporalStatisticsConfig: de_TemporalStatisticsConfigInput(output.TemporalStatisticsConfig, context),
    };
  }
  if (output.ZonalStatisticsConfig != null) {
    return {
      ZonalStatisticsConfig: de_ZonalStatisticsConfigInput(output.ZonalStatisticsConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1LandCoverSegmentationConfigInput
 */
const de_LandCoverSegmentationConfigInput = (
  output: any,
  context: __SerdeContext
): LandCoverSegmentationConfigInput => {
  return {} as any;
};

/**
 * deserializeAws_restJson1LandsatCloudCoverLandInput
 */
const de_LandsatCloudCoverLandInput = (output: any, context: __SerdeContext): LandsatCloudCoverLandInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

/**
 * deserializeAws_restJson1LinearRing
 */
const de_LinearRing = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Position(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinearRings
 */
const de_LinearRings = (output: any, context: __SerdeContext): number[][][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LinearRing(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LinearRingsList
 */
const de_LinearRingsList = (output: any, context: __SerdeContext): number[][][][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LinearRings(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListEarthObservationJobOutputConfig
 */
const de_ListEarthObservationJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ListEarthObservationJobOutputConfig => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreationTime)) : undefined,
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
    Name: __expectString(output.Name),
    OperationType: __expectString(output.OperationType),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ListVectorEnrichmentJobOutputConfig
 */
const de_ListVectorEnrichmentJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ListVectorEnrichmentJobOutputConfig => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreationTime)) : undefined,
    DurationInSeconds: __expectInt32(output.DurationInSeconds),
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1MapMatchingConfig
 */
const de_MapMatchingConfig = (output: any, context: __SerdeContext): MapMatchingConfig => {
  return {
    IdAttributeName: __expectString(output.IdAttributeName),
    TimestampAttributeName: __expectString(output.TimestampAttributeName),
    XAttributeName: __expectString(output.XAttributeName),
    YAttributeName: __expectString(output.YAttributeName),
  } as any;
};

/**
 * deserializeAws_restJson1MultiPolygonGeometryInput
 */
const de_MultiPolygonGeometryInput = (output: any, context: __SerdeContext): MultiPolygonGeometryInput => {
  return {
    Coordinates: output.Coordinates != null ? de_LinearRingsList(output.Coordinates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Operation
 */
const de_Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    Equation: __expectString(output.Equation),
    Name: __expectString(output.Name),
    OutputType: __expectString(output.OutputType),
  } as any;
};

/**
 * deserializeAws_restJson1OperationsListInput
 */
const de_OperationsListInput = (output: any, context: __SerdeContext): Operation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Operation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OutputBand
 */
const de_OutputBand = (output: any, context: __SerdeContext): OutputBand => {
  return {
    BandName: __expectString(output.BandName),
    OutputDataType: __expectString(output.OutputDataType),
  } as any;
};

/**
 * deserializeAws_restJson1OutputConfigInput
 */
const de_OutputConfigInput = (output: any, context: __SerdeContext): OutputConfigInput => {
  return {
    S3Data: output.S3Data != null ? de_ExportS3DataInput(output.S3Data, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutputResolutionResamplingInput
 */
const de_OutputResolutionResamplingInput = (output: any, context: __SerdeContext): OutputResolutionResamplingInput => {
  return {
    UserDefined: output.UserDefined != null ? de_UserDefined(output.UserDefined, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutputResolutionStackInput
 */
const de_OutputResolutionStackInput = (output: any, context: __SerdeContext): OutputResolutionStackInput => {
  return {
    Predefined: __expectString(output.Predefined),
    UserDefined: output.UserDefined != null ? de_UserDefined(output.UserDefined, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PlatformInput
 */
const de_PlatformInput = (output: any, context: __SerdeContext): PlatformInput => {
  return {
    ComparisonOperator: __expectString(output.ComparisonOperator),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1PolygonGeometryInput
 */
const de_PolygonGeometryInput = (output: any, context: __SerdeContext): PolygonGeometryInput => {
  return {
    Coordinates: output.Coordinates != null ? de_LinearRings(output.Coordinates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): number[] => {
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

/**
 * deserializeAws_restJson1Properties
 */
const de_Properties = (output: any, context: __SerdeContext): Properties => {
  return {
    EoCloudCover: __limitedParseFloat32(output.EoCloudCover),
    LandsatCloudCoverLand: __limitedParseFloat32(output.LandsatCloudCoverLand),
    Platform: __expectString(output.Platform),
    ViewOffNadir: __limitedParseFloat32(output.ViewOffNadir),
    ViewSunAzimuth: __limitedParseFloat32(output.ViewSunAzimuth),
    ViewSunElevation: __limitedParseFloat32(output.ViewSunElevation),
  } as any;
};

/**
 * deserializeAws_restJson1Property
 */
const de_Property = (output: any, context: __SerdeContext): Property => {
  if (output.EoCloudCover != null) {
    return {
      EoCloudCover: de_EoCloudCoverInput(output.EoCloudCover, context),
    };
  }
  if (output.LandsatCloudCoverLand != null) {
    return {
      LandsatCloudCoverLand: de_LandsatCloudCoverLandInput(output.LandsatCloudCoverLand, context),
    };
  }
  if (output.Platform != null) {
    return {
      Platform: de_PlatformInput(output.Platform, context),
    };
  }
  if (output.ViewOffNadir != null) {
    return {
      ViewOffNadir: de_ViewOffNadirInput(output.ViewOffNadir, context),
    };
  }
  if (output.ViewSunAzimuth != null) {
    return {
      ViewSunAzimuth: de_ViewSunAzimuthInput(output.ViewSunAzimuth, context),
    };
  }
  if (output.ViewSunElevation != null) {
    return {
      ViewSunElevation: de_ViewSunElevationInput(output.ViewSunElevation, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PropertyFilter
 */
const de_PropertyFilter = (output: any, context: __SerdeContext): PropertyFilter => {
  return {
    Property: output.Property != null ? de_Property(__expectUnion(output.Property), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyFilters
 */
const de_PropertyFilters = (output: any, context: __SerdeContext): PropertyFilters => {
  return {
    LogicalOperator: __expectString(output.LogicalOperator),
    Properties: output.Properties != null ? de_PropertyFiltersList(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PropertyFiltersList
 */
const de_PropertyFiltersList = (output: any, context: __SerdeContext): PropertyFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RasterDataCollectionMetadata
 */
const de_RasterDataCollectionMetadata = (output: any, context: __SerdeContext): RasterDataCollectionMetadata => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    DescriptionPageUrl: __expectString(output.DescriptionPageUrl),
    Name: __expectString(output.Name),
    SupportedFilters: output.SupportedFilters != null ? de_FilterList(output.SupportedFilters, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1RasterDataCollectionQueryOutput
 */
const de_RasterDataCollectionQueryOutput = (output: any, context: __SerdeContext): RasterDataCollectionQueryOutput => {
  return {
    AreaOfInterest:
      output.AreaOfInterest != null ? de_AreaOfInterest(__expectUnion(output.AreaOfInterest), context) : undefined,
    PropertyFilters: output.PropertyFilters != null ? de_PropertyFilters(output.PropertyFilters, context) : undefined,
    RasterDataCollectionArn: __expectString(output.RasterDataCollectionArn),
    RasterDataCollectionName: __expectString(output.RasterDataCollectionName),
    TimeRangeFilter:
      output.TimeRangeFilter != null ? de_TimeRangeFilterOutput(output.TimeRangeFilter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResamplingConfigInput
 */
const de_ResamplingConfigInput = (output: any, context: __SerdeContext): ResamplingConfigInput => {
  return {
    AlgorithmName: __expectString(output.AlgorithmName),
    OutputResolution:
      output.OutputResolution != null
        ? de_OutputResolutionResamplingInput(output.OutputResolution, context)
        : undefined,
    TargetBands: output.TargetBands != null ? de_StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReverseGeocodingConfig
 */
const de_ReverseGeocodingConfig = (output: any, context: __SerdeContext): ReverseGeocodingConfig => {
  return {
    XAttributeName: __expectString(output.XAttributeName),
    YAttributeName: __expectString(output.YAttributeName),
  } as any;
};

/**
 * deserializeAws_restJson1S3DataInput
 */
const de_S3DataInput = (output: any, context: __SerdeContext): S3DataInput => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    MetadataProvider: __expectString(output.MetadataProvider),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1StackConfigInput
 */
const de_StackConfigInput = (output: any, context: __SerdeContext): StackConfigInput => {
  return {
    OutputResolution:
      output.OutputResolution != null ? de_OutputResolutionStackInput(output.OutputResolution, context) : undefined,
    TargetBands: output.TargetBands != null ? de_StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StringListInput
 */
const de_StringListInput = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TemporalStatisticsConfigInput
 */
const de_TemporalStatisticsConfigInput = (output: any, context: __SerdeContext): TemporalStatisticsConfigInput => {
  return {
    GroupBy: __expectString(output.GroupBy),
    Statistics: output.Statistics != null ? de_TemporalStatisticsListInput(output.Statistics, context) : undefined,
    TargetBands: output.TargetBands != null ? de_StringListInput(output.TargetBands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TemporalStatisticsListInput
 */
const de_TemporalStatisticsListInput = (output: any, context: __SerdeContext): (TemporalStatistics | string)[] => {
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
 * deserializeAws_restJson1TimeRangeFilterOutput
 */
const de_TimeRangeFilterOutput = (output: any, context: __SerdeContext): TimeRangeFilterOutput => {
  return {
    EndTime: output.EndTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndTime)) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UserDefined
 */
const de_UserDefined = (output: any, context: __SerdeContext): UserDefined => {
  return {
    Unit: __expectString(output.Unit),
    Value: __limitedParseFloat32(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobConfig
 */
const de_VectorEnrichmentJobConfig = (output: any, context: __SerdeContext): VectorEnrichmentJobConfig => {
  if (output.MapMatchingConfig != null) {
    return {
      MapMatchingConfig: de_MapMatchingConfig(output.MapMatchingConfig, context),
    };
  }
  if (output.ReverseGeocodingConfig != null) {
    return {
      ReverseGeocodingConfig: de_ReverseGeocodingConfig(output.ReverseGeocodingConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobDataSourceConfigInput
 */
const de_VectorEnrichmentJobDataSourceConfigInput = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobDataSourceConfigInput => {
  if (output.S3Data != null) {
    return {
      S3Data: de_VectorEnrichmentJobS3Data(output.S3Data, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobErrorDetails
 */
const de_VectorEnrichmentJobErrorDetails = (output: any, context: __SerdeContext): VectorEnrichmentJobErrorDetails => {
  return {
    ErrorMessage: __expectString(output.ErrorMessage),
    ErrorType: __expectString(output.ErrorType),
  } as any;
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobExportErrorDetails
 */
const de_VectorEnrichmentJobExportErrorDetails = (
  output: any,
  context: __SerdeContext
): VectorEnrichmentJobExportErrorDetails => {
  return {
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobInputConfig
 */
const de_VectorEnrichmentJobInputConfig = (output: any, context: __SerdeContext): VectorEnrichmentJobInputConfig => {
  return {
    DataSourceConfig:
      output.DataSourceConfig != null
        ? de_VectorEnrichmentJobDataSourceConfigInput(__expectUnion(output.DataSourceConfig), context)
        : undefined,
    DocumentType: __expectString(output.DocumentType),
  } as any;
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobList
 */
const de_VectorEnrichmentJobList = (output: any, context: __SerdeContext): ListVectorEnrichmentJobOutputConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ListVectorEnrichmentJobOutputConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VectorEnrichmentJobS3Data
 */
const de_VectorEnrichmentJobS3Data = (output: any, context: __SerdeContext): VectorEnrichmentJobS3Data => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    S3Uri: __expectString(output.S3Uri),
  } as any;
};

/**
 * deserializeAws_restJson1ViewOffNadirInput
 */
const de_ViewOffNadirInput = (output: any, context: __SerdeContext): ViewOffNadirInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

/**
 * deserializeAws_restJson1ViewSunAzimuthInput
 */
const de_ViewSunAzimuthInput = (output: any, context: __SerdeContext): ViewSunAzimuthInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

/**
 * deserializeAws_restJson1ViewSunElevationInput
 */
const de_ViewSunElevationInput = (output: any, context: __SerdeContext): ViewSunElevationInput => {
  return {
    LowerBound: __limitedParseFloat32(output.LowerBound),
    UpperBound: __limitedParseFloat32(output.UpperBound),
  } as any;
};

/**
 * deserializeAws_restJson1ZonalStatisticsConfigInput
 */
const de_ZonalStatisticsConfigInput = (output: any, context: __SerdeContext): ZonalStatisticsConfigInput => {
  return {
    Statistics: output.Statistics != null ? de_ZonalStatisticsListInput(output.Statistics, context) : undefined,
    TargetBands: output.TargetBands != null ? de_StringListInput(output.TargetBands, context) : undefined,
    ZoneS3Path: __expectString(output.ZoneS3Path),
    ZoneS3PathKmsKeyId: __expectString(output.ZoneS3PathKmsKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1ZonalStatisticsListInput
 */
const de_ZonalStatisticsListInput = (output: any, context: __SerdeContext): (ZonalStatistics | string)[] => {
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
