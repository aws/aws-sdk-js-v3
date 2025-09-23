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
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  BandMathConfigInput,
  CloudMaskingConfigInput,
  CloudRemovalConfigInput,
  ConflictException,
  CustomIndicesInput,
  EoCloudCoverInput,
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
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/earth-observation-jobs/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVectorEnrichmentJobCommand
 */
export const se_DeleteVectorEnrichmentJobCommand = async (
  input: DeleteVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/vector-enrichment-jobs/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportEarthObservationJobCommand
 */
export const se_ExportEarthObservationJobCommand = async (
  input: ExportEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/export-earth-observation-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExecutionRoleArn: [],
      ExportSourceImages: [],
      OutputConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportVectorEnrichmentJobCommand
 */
export const se_ExportVectorEnrichmentJobCommand = async (
  input: ExportVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/export-vector-enrichment-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExecutionRoleArn: [],
      OutputConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEarthObservationJobCommand
 */
export const se_GetEarthObservationJobCommand = async (
  input: GetEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/earth-observation-jobs/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRasterDataCollectionCommand
 */
export const se_GetRasterDataCollectionCommand = async (
  input: GetRasterDataCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/raster-data-collection/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTileCommand
 */
export const se_GetTileCommand = async (
  input: GetTileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tile/{z}/{x}/{y}");
  b.p("x", () => input.x!.toString(), "{x}", false);
  b.p("y", () => input.y!.toString(), "{y}", false);
  b.p("z", () => input.z!.toString(), "{z}", false);
  const query: any = map({
    [_IA]: [__expectNonNull(input.ImageAssets, `ImageAssets`) != null, () => input[_IA]! || []],
    [_T]: [, __expectNonNull(input[_T]!, `Target`)],
    [_A]: [, __expectNonNull(input[_A]!, `Arn`)],
    [_IM]: [() => input.ImageMask !== void 0, () => input[_IM]!.toString()],
    [_OF]: [, input[_OF]!],
    [_TRF]: [, input[_TRF]!],
    [_PF]: [, input[_PF]!],
    [_ODT]: [, input[_ODT]!],
    [_ERA]: [, input[_ERA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVectorEnrichmentJobCommand
 */
export const se_GetVectorEnrichmentJobCommand = async (
  input: GetVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/vector-enrichment-jobs/{Arn}");
  b.p("Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEarthObservationJobsCommand
 */
export const se_ListEarthObservationJobsCommand = async (
  input: ListEarthObservationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-earth-observation-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      SortBy: [],
      SortOrder: [],
      StatusEquals: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRasterDataCollectionsCommand
 */
export const se_ListRasterDataCollectionsCommand = async (
  input: ListRasterDataCollectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/raster-data-collections");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
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
 * serializeAws_restJson1ListVectorEnrichmentJobsCommand
 */
export const se_ListVectorEnrichmentJobsCommand = async (
  input: ListVectorEnrichmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-vector-enrichment-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      SortBy: [],
      SortOrder: [],
      StatusEquals: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchRasterDataCollectionCommand
 */
export const se_SearchRasterDataCollectionCommand = async (
  input: SearchRasterDataCollectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/search-raster-data-collection");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
      NextToken: [],
      RasterDataCollectionQuery: (_) => se_RasterDataCollectionQueryWithBandFilterInput(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartEarthObservationJobCommand
 */
export const se_StartEarthObservationJobCommand = async (
  input: StartEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/earth-observation-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExecutionRoleArn: [],
      InputConfig: (_) => se_InputConfigInput(_, context),
      JobConfig: (_) => se_JobConfigInput(_, context),
      KmsKeyId: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartVectorEnrichmentJobCommand
 */
export const se_StartVectorEnrichmentJobCommand = async (
  input: StartVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vector-enrichment-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ExecutionRoleArn: [],
      InputConfig: (_) => _json(_),
      JobConfig: (_) => _json(_),
      KmsKeyId: [],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopEarthObservationJobCommand
 */
export const se_StopEarthObservationJobCommand = async (
  input: StopEarthObservationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/earth-observation-jobs/stop");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopVectorEnrichmentJobCommand
 */
export const se_StopVectorEnrichmentJobCommand = async (
  input: StopVectorEnrichmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vector-enrichment-jobs/stop");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Arn: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.m("PUT").h(headers).b(body);
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
 * deserializeAws_restJson1DeleteEarthObservationJobCommand
 */
export const de_DeleteEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEarthObservationJobCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVectorEnrichmentJobCommand
 */
export const de_DeleteVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorEnrichmentJobCommandOutput> => {
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
 * deserializeAws_restJson1ExportEarthObservationJobCommand
 */
export const de_ExportEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExecutionRoleArn: __expectString,
    ExportSourceImages: __expectBoolean,
    ExportStatus: __expectString,
    OutputConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportVectorEnrichmentJobCommand
 */
export const de_ExportVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    ExecutionRoleArn: __expectString,
    ExportStatus: __expectString,
    OutputConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEarthObservationJobCommand
 */
export const de_GetEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DurationInSeconds: __expectInt32,
    ErrorDetails: _json,
    ExecutionRoleArn: __expectString,
    ExportErrorDetails: _json,
    ExportStatus: __expectString,
    InputConfig: (_) => de_InputConfigOutput(_, context),
    JobConfig: (_) => de_JobConfigInput(__expectUnion(_), context),
    KmsKeyId: __expectString,
    Name: __expectString,
    OutputBands: _json,
    Status: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRasterDataCollectionCommand
 */
export const de_GetRasterDataCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRasterDataCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    DescriptionPageUrl: __expectString,
    ImageSourceBands: _json,
    Name: __expectString,
    SupportedFilters: (_) => de_FilterList(_, context),
    Tags: _json,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTileCommand
 */
export const de_GetTileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetTileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetVectorEnrichmentJobCommand
 */
export const de_GetVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DurationInSeconds: __expectInt32,
    ErrorDetails: _json,
    ExecutionRoleArn: __expectString,
    ExportErrorDetails: _json,
    ExportStatus: __expectString,
    InputConfig: _json,
    JobConfig: (_) => _json(__expectUnion(_)),
    KmsKeyId: __expectString,
    Name: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEarthObservationJobsCommand
 */
export const de_ListEarthObservationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEarthObservationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EarthObservationJobSummaries: (_) => de_EarthObservationJobList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRasterDataCollectionsCommand
 */
export const de_ListRasterDataCollectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRasterDataCollectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RasterDataCollectionSummaries: (_) => de_DataCollectionsList(_, context),
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
 * deserializeAws_restJson1ListVectorEnrichmentJobsCommand
 */
export const de_ListVectorEnrichmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVectorEnrichmentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    VectorEnrichmentJobSummaries: (_) => de_VectorEnrichmentJobList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchRasterDataCollectionCommand
 */
export const de_SearchRasterDataCollectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRasterDataCollectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ApproximateResultCount: __expectInt32,
    Items: (_) => de_ItemSourceList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartEarthObservationJobCommand
 */
export const de_StartEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEarthObservationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DurationInSeconds: __expectInt32,
    ExecutionRoleArn: __expectString,
    InputConfig: (_) => de_InputConfigOutput(_, context),
    JobConfig: (_) => de_JobConfigInput(__expectUnion(_), context),
    KmsKeyId: __expectString,
    Name: __expectString,
    Status: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartVectorEnrichmentJobCommand
 */
export const de_StartVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartVectorEnrichmentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DurationInSeconds: __expectInt32,
    ExecutionRoleArn: __expectString,
    InputConfig: _json,
    JobConfig: (_) => _json(__expectUnion(_)),
    KmsKeyId: __expectString,
    Name: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopEarthObservationJobCommand
 */
export const de_StopEarthObservationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEarthObservationJobCommandOutput> => {
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
 * deserializeAws_restJson1StopVectorEnrichmentJobCommand
 */
export const de_StopVectorEnrichmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopVectorEnrichmentJobCommandOutput> => {
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
    case "ServiceQuotaExceededException":
    case "com.amazonaws.sagemakergeospatial#ServiceQuotaExceededException":
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
    Message: __expectString,
    ResourceId: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
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
    ResourceId: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
  });
  Object.assign(contents, doc);
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
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1AreaOfInterestGeometry
 */
const se_AreaOfInterestGeometry = (input: AreaOfInterestGeometry, context: __SerdeContext): any => {
  return AreaOfInterestGeometry.visit(input, {
    MultiPolygonGeometry: (value) => ({ MultiPolygonGeometry: se_MultiPolygonGeometryInput(value, context) }),
    PolygonGeometry: (value) => ({ PolygonGeometry: se_PolygonGeometryInput(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_BandMathConfigInput omitted.

// se_CloudMaskingConfigInput omitted.

// se_CloudRemovalConfigInput omitted.

// se_CustomIndicesInput omitted.

/**
 * serializeAws_restJson1EoCloudCoverInput
 */
const se_EoCloudCoverInput = (input: EoCloudCoverInput, context: __SerdeContext): any => {
  return take(input, {
    LowerBound: __serializeFloat,
    UpperBound: __serializeFloat,
  });
};

// se_ExportS3DataInput omitted.

// se_ExportVectorEnrichmentJobOutputConfig omitted.

// se_GeoMosaicConfigInput omitted.

/**
 * serializeAws_restJson1InputConfigInput
 */
const se_InputConfigInput = (input: InputConfigInput, context: __SerdeContext): any => {
  return take(input, {
    PreviousEarthObservationJobArn: [],
    RasterDataCollectionQuery: (_) => se_RasterDataCollectionQueryInput(_, context),
  });
};

/**
 * serializeAws_restJson1JobConfigInput
 */
const se_JobConfigInput = (input: JobConfigInput, context: __SerdeContext): any => {
  return JobConfigInput.visit(input, {
    BandMathConfig: (value) => ({ BandMathConfig: _json(value) }),
    CloudMaskingConfig: (value) => ({ CloudMaskingConfig: _json(value) }),
    CloudRemovalConfig: (value) => ({ CloudRemovalConfig: _json(value) }),
    GeoMosaicConfig: (value) => ({ GeoMosaicConfig: _json(value) }),
    LandCoverSegmentationConfig: (value) => ({ LandCoverSegmentationConfig: _json(value) }),
    ResamplingConfig: (value) => ({ ResamplingConfig: se_ResamplingConfigInput(value, context) }),
    StackConfig: (value) => ({ StackConfig: se_StackConfigInput(value, context) }),
    TemporalStatisticsConfig: (value) => ({ TemporalStatisticsConfig: _json(value) }),
    ZonalStatisticsConfig: (value) => ({ ZonalStatisticsConfig: _json(value) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_LandCoverSegmentationConfigInput omitted.

/**
 * serializeAws_restJson1LandsatCloudCoverLandInput
 */
const se_LandsatCloudCoverLandInput = (input: LandsatCloudCoverLandInput, context: __SerdeContext): any => {
  return take(input, {
    LowerBound: __serializeFloat,
    UpperBound: __serializeFloat,
  });
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

// se_MapMatchingConfig omitted.

/**
 * serializeAws_restJson1MultiPolygonGeometryInput
 */
const se_MultiPolygonGeometryInput = (input: MultiPolygonGeometryInput, context: __SerdeContext): any => {
  return take(input, {
    Coordinates: (_) => se_LinearRingsList(_, context),
  });
};

// se_Operation omitted.

// se_OperationsListInput omitted.

// se_OutputConfigInput omitted.

/**
 * serializeAws_restJson1OutputResolutionResamplingInput
 */
const se_OutputResolutionResamplingInput = (input: OutputResolutionResamplingInput, context: __SerdeContext): any => {
  return take(input, {
    UserDefined: (_) => se_UserDefined(_, context),
  });
};

/**
 * serializeAws_restJson1OutputResolutionStackInput
 */
const se_OutputResolutionStackInput = (input: OutputResolutionStackInput, context: __SerdeContext): any => {
  return take(input, {
    Predefined: [],
    UserDefined: (_) => se_UserDefined(_, context),
  });
};

// se_PlatformInput omitted.

/**
 * serializeAws_restJson1PolygonGeometryInput
 */
const se_PolygonGeometryInput = (input: PolygonGeometryInput, context: __SerdeContext): any => {
  return take(input, {
    Coordinates: (_) => se_LinearRings(_, context),
  });
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
    Platform: (value) => ({ Platform: _json(value) }),
    ViewOffNadir: (value) => ({ ViewOffNadir: se_ViewOffNadirInput(value, context) }),
    ViewSunAzimuth: (value) => ({ ViewSunAzimuth: se_ViewSunAzimuthInput(value, context) }),
    ViewSunElevation: (value) => ({ ViewSunElevation: se_ViewSunElevationInput(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1PropertyFilter
 */
const se_PropertyFilter = (input: PropertyFilter, context: __SerdeContext): any => {
  return take(input, {
    Property: (_) => se_Property(_, context),
  });
};

/**
 * serializeAws_restJson1PropertyFilters
 */
const se_PropertyFilters = (input: PropertyFilters, context: __SerdeContext): any => {
  return take(input, {
    LogicalOperator: [],
    Properties: (_) => se_PropertyFiltersList(_, context),
  });
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
  return take(input, {
    AreaOfInterest: (_) => se_AreaOfInterest(_, context),
    PropertyFilters: (_) => se_PropertyFilters(_, context),
    RasterDataCollectionArn: [],
    TimeRangeFilter: (_) => se_TimeRangeFilterInput(_, context),
  });
};

/**
 * serializeAws_restJson1RasterDataCollectionQueryWithBandFilterInput
 */
const se_RasterDataCollectionQueryWithBandFilterInput = (
  input: RasterDataCollectionQueryWithBandFilterInput,
  context: __SerdeContext
): any => {
  return take(input, {
    AreaOfInterest: (_) => se_AreaOfInterest(_, context),
    BandFilter: _json,
    PropertyFilters: (_) => se_PropertyFilters(_, context),
    TimeRangeFilter: (_) => se_TimeRangeFilterInput(_, context),
  });
};

/**
 * serializeAws_restJson1ResamplingConfigInput
 */
const se_ResamplingConfigInput = (input: ResamplingConfigInput, context: __SerdeContext): any => {
  return take(input, {
    AlgorithmName: [],
    OutputResolution: (_) => se_OutputResolutionResamplingInput(_, context),
    TargetBands: _json,
  });
};

// se_ReverseGeocodingConfig omitted.

/**
 * serializeAws_restJson1StackConfigInput
 */
const se_StackConfigInput = (input: StackConfigInput, context: __SerdeContext): any => {
  return take(input, {
    OutputResolution: (_) => se_OutputResolutionStackInput(_, context),
    TargetBands: _json,
  });
};

// se_StringListInput omitted.

// se_Tags omitted.

// se_TemporalStatisticsConfigInput omitted.

// se_TemporalStatisticsListInput omitted.

/**
 * serializeAws_restJson1TimeRangeFilterInput
 */
const se_TimeRangeFilterInput = (input: TimeRangeFilterInput, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1UserDefined
 */
const se_UserDefined = (input: UserDefined, context: __SerdeContext): any => {
  return take(input, {
    Unit: [],
    Value: __serializeFloat,
  });
};

// se_VectorEnrichmentJobConfig omitted.

// se_VectorEnrichmentJobDataSourceConfigInput omitted.

// se_VectorEnrichmentJobInputConfig omitted.

// se_VectorEnrichmentJobS3Data omitted.

/**
 * serializeAws_restJson1ViewOffNadirInput
 */
const se_ViewOffNadirInput = (input: ViewOffNadirInput, context: __SerdeContext): any => {
  return take(input, {
    LowerBound: __serializeFloat,
    UpperBound: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1ViewSunAzimuthInput
 */
const se_ViewSunAzimuthInput = (input: ViewSunAzimuthInput, context: __SerdeContext): any => {
  return take(input, {
    LowerBound: __serializeFloat,
    UpperBound: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1ViewSunElevationInput
 */
const se_ViewSunElevationInput = (input: ViewSunElevationInput, context: __SerdeContext): any => {
  return take(input, {
    LowerBound: __serializeFloat,
    UpperBound: __serializeFloat,
  });
};

// se_ZonalStatisticsConfigInput omitted.

// se_ZonalStatisticsListInput omitted.

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

// de_AssetsMap omitted.

// de_AssetValue omitted.

// de_BandMathConfigInput omitted.

// de_CloudMaskingConfigInput omitted.

// de_CloudRemovalConfigInput omitted.

// de_CustomIndicesInput omitted.

/**
 * deserializeAws_restJson1DataCollectionsList
 */
const de_DataCollectionsList = (output: any, context: __SerdeContext): RasterDataCollectionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RasterDataCollectionMetadata(entry, context);
    });
  return retVal;
};

// de_EarthObservationJobErrorDetails omitted.

/**
 * deserializeAws_restJson1EarthObservationJobList
 */
const de_EarthObservationJobList = (output: any, context: __SerdeContext): ListEarthObservationJobOutputConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListEarthObservationJobOutputConfig(entry, context);
    });
  return retVal;
};

// de_EarthObservationJobOutputBands omitted.

/**
 * deserializeAws_restJson1EoCloudCoverInput
 */
const de_EoCloudCoverInput = (output: any, context: __SerdeContext): EoCloudCoverInput => {
  return take(output, {
    LowerBound: __limitedParseFloat32,
    UpperBound: __limitedParseFloat32,
  }) as any;
};

// de_ExportErrorDetails omitted.

// de_ExportErrorDetailsOutput omitted.

// de_ExportS3DataInput omitted.

// de_ExportVectorEnrichmentJobOutputConfig omitted.

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return take(output, {
    Maximum: __limitedParseFloat32,
    Minimum: __limitedParseFloat32,
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Geometry
 */
const de_Geometry = (output: any, context: __SerdeContext): Geometry => {
  return take(output, {
    Coordinates: (_: any) => de_LinearRings(_, context),
    Type: __expectString,
  }) as any;
};

// de_GeoMosaicConfigInput omitted.

// de_ImageSourceBandList omitted.

/**
 * deserializeAws_restJson1InputConfigOutput
 */
const de_InputConfigOutput = (output: any, context: __SerdeContext): InputConfigOutput => {
  return take(output, {
    PreviousEarthObservationJobArn: __expectString,
    RasterDataCollectionQuery: (_: any) => de_RasterDataCollectionQueryOutput(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ItemSource
 */
const de_ItemSource = (output: any, context: __SerdeContext): ItemSource => {
  return take(output, {
    Assets: _json,
    DateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Geometry: (_: any) => de_Geometry(_, context),
    Id: __expectString,
    Properties: (_: any) => de_Properties(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ItemSourceList
 */
const de_ItemSourceList = (output: any, context: __SerdeContext): ItemSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      BandMathConfig: _json(output.BandMathConfig),
    };
  }
  if (output.CloudMaskingConfig != null) {
    return {
      CloudMaskingConfig: _json(output.CloudMaskingConfig),
    };
  }
  if (output.CloudRemovalConfig != null) {
    return {
      CloudRemovalConfig: _json(output.CloudRemovalConfig),
    };
  }
  if (output.GeoMosaicConfig != null) {
    return {
      GeoMosaicConfig: _json(output.GeoMosaicConfig),
    };
  }
  if (output.LandCoverSegmentationConfig != null) {
    return {
      LandCoverSegmentationConfig: _json(output.LandCoverSegmentationConfig),
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
      TemporalStatisticsConfig: _json(output.TemporalStatisticsConfig),
    };
  }
  if (output.ZonalStatisticsConfig != null) {
    return {
      ZonalStatisticsConfig: _json(output.ZonalStatisticsConfig),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_LandCoverSegmentationConfigInput omitted.

/**
 * deserializeAws_restJson1LandsatCloudCoverLandInput
 */
const de_LandsatCloudCoverLandInput = (output: any, context: __SerdeContext): LandsatCloudCoverLandInput => {
  return take(output, {
    LowerBound: __limitedParseFloat32,
    UpperBound: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1LinearRing
 */
const de_LinearRing = (output: any, context: __SerdeContext): number[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DurationInSeconds: __expectInt32,
    Name: __expectString,
    OperationType: __expectString,
    Status: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ListVectorEnrichmentJobOutputConfig
 */
const de_ListVectorEnrichmentJobOutputConfig = (
  output: any,
  context: __SerdeContext
): ListVectorEnrichmentJobOutputConfig => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DurationInSeconds: __expectInt32,
    Name: __expectString,
    Status: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

// de_MapMatchingConfig omitted.

/**
 * deserializeAws_restJson1MultiPolygonGeometryInput
 */
const de_MultiPolygonGeometryInput = (output: any, context: __SerdeContext): MultiPolygonGeometryInput => {
  return take(output, {
    Coordinates: (_: any) => de_LinearRingsList(_, context),
  }) as any;
};

// de_Operation omitted.

// de_OperationsListInput omitted.

// de_OutputBand omitted.

// de_OutputConfigInput omitted.

/**
 * deserializeAws_restJson1OutputResolutionResamplingInput
 */
const de_OutputResolutionResamplingInput = (output: any, context: __SerdeContext): OutputResolutionResamplingInput => {
  return take(output, {
    UserDefined: (_: any) => de_UserDefined(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1OutputResolutionStackInput
 */
const de_OutputResolutionStackInput = (output: any, context: __SerdeContext): OutputResolutionStackInput => {
  return take(output, {
    Predefined: __expectString,
    UserDefined: (_: any) => de_UserDefined(_, context),
  }) as any;
};

// de_PlatformInput omitted.

/**
 * deserializeAws_restJson1PolygonGeometryInput
 */
const de_PolygonGeometryInput = (output: any, context: __SerdeContext): PolygonGeometryInput => {
  return take(output, {
    Coordinates: (_: any) => de_LinearRings(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Properties
 */
const de_Properties = (output: any, context: __SerdeContext): Properties => {
  return take(output, {
    EoCloudCover: __limitedParseFloat32,
    LandsatCloudCoverLand: __limitedParseFloat32,
    Platform: __expectString,
    ViewOffNadir: __limitedParseFloat32,
    ViewSunAzimuth: __limitedParseFloat32,
    ViewSunElevation: __limitedParseFloat32,
  }) as any;
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
      Platform: _json(output.Platform),
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
  return take(output, {
    Property: (_: any) => de_Property(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyFilters
 */
const de_PropertyFilters = (output: any, context: __SerdeContext): PropertyFilters => {
  return take(output, {
    LogicalOperator: __expectString,
    Properties: (_: any) => de_PropertyFiltersList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PropertyFiltersList
 */
const de_PropertyFiltersList = (output: any, context: __SerdeContext): PropertyFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PropertyFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RasterDataCollectionMetadata
 */
const de_RasterDataCollectionMetadata = (output: any, context: __SerdeContext): RasterDataCollectionMetadata => {
  return take(output, {
    Arn: __expectString,
    Description: __expectString,
    DescriptionPageUrl: __expectString,
    Name: __expectString,
    SupportedFilters: (_: any) => de_FilterList(_, context),
    Tags: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RasterDataCollectionQueryOutput
 */
const de_RasterDataCollectionQueryOutput = (output: any, context: __SerdeContext): RasterDataCollectionQueryOutput => {
  return take(output, {
    AreaOfInterest: (_: any) => de_AreaOfInterest(__expectUnion(_), context),
    PropertyFilters: (_: any) => de_PropertyFilters(_, context),
    RasterDataCollectionArn: __expectString,
    RasterDataCollectionName: __expectString,
    TimeRangeFilter: (_: any) => de_TimeRangeFilterOutput(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ResamplingConfigInput
 */
const de_ResamplingConfigInput = (output: any, context: __SerdeContext): ResamplingConfigInput => {
  return take(output, {
    AlgorithmName: __expectString,
    OutputResolution: (_: any) => de_OutputResolutionResamplingInput(_, context),
    TargetBands: _json,
  }) as any;
};

// de_ReverseGeocodingConfig omitted.

/**
 * deserializeAws_restJson1StackConfigInput
 */
const de_StackConfigInput = (output: any, context: __SerdeContext): StackConfigInput => {
  return take(output, {
    OutputResolution: (_: any) => de_OutputResolutionStackInput(_, context),
    TargetBands: _json,
  }) as any;
};

// de_StringListInput omitted.

// de_Tags omitted.

// de_TemporalStatisticsConfigInput omitted.

// de_TemporalStatisticsListInput omitted.

/**
 * deserializeAws_restJson1TimeRangeFilterOutput
 */
const de_TimeRangeFilterOutput = (output: any, context: __SerdeContext): TimeRangeFilterOutput => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1UserDefined
 */
const de_UserDefined = (output: any, context: __SerdeContext): UserDefined => {
  return take(output, {
    Unit: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

// de_VectorEnrichmentJobConfig omitted.

// de_VectorEnrichmentJobDataSourceConfigInput omitted.

// de_VectorEnrichmentJobErrorDetails omitted.

// de_VectorEnrichmentJobExportErrorDetails omitted.

// de_VectorEnrichmentJobInputConfig omitted.

/**
 * deserializeAws_restJson1VectorEnrichmentJobList
 */
const de_VectorEnrichmentJobList = (output: any, context: __SerdeContext): ListVectorEnrichmentJobOutputConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListVectorEnrichmentJobOutputConfig(entry, context);
    });
  return retVal;
};

// de_VectorEnrichmentJobS3Data omitted.

/**
 * deserializeAws_restJson1ViewOffNadirInput
 */
const de_ViewOffNadirInput = (output: any, context: __SerdeContext): ViewOffNadirInput => {
  return take(output, {
    LowerBound: __limitedParseFloat32,
    UpperBound: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1ViewSunAzimuthInput
 */
const de_ViewSunAzimuthInput = (output: any, context: __SerdeContext): ViewSunAzimuthInput => {
  return take(output, {
    LowerBound: __limitedParseFloat32,
    UpperBound: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1ViewSunElevationInput
 */
const de_ViewSunElevationInput = (output: any, context: __SerdeContext): ViewSunElevationInput => {
  return take(output, {
    LowerBound: __limitedParseFloat32,
    UpperBound: __limitedParseFloat32,
  }) as any;
};

// de_ZonalStatisticsConfigInput omitted.

// de_ZonalStatisticsListInput omitted.

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

const _A = "Arn";
const _ERA = "ExecutionRoleArn";
const _IA = "ImageAssets";
const _IM = "ImageMask";
const _MR = "MaxResults";
const _NT = "NextToken";
const _ODT = "OutputDataType";
const _OF = "OutputFormat";
const _PF = "PropertyFilters";
const _T = "Target";
const _TK = "TagKeys";
const _TRF = "TimeRangeFilter";
const _tK = "tagKeys";
