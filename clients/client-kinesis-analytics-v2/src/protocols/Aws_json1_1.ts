// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput,
} from "../commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
} from "../commands/AddApplicationInputCommand";
import {
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput,
} from "../commands/AddApplicationInputProcessingConfigurationCommand";
import {
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
} from "../commands/AddApplicationOutputCommand";
import {
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
} from "../commands/AddApplicationReferenceDataSourceCommand";
import {
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput,
} from "../commands/AddApplicationVpcConfigurationCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import {
  CreateApplicationPresignedUrlCommandInput,
  CreateApplicationPresignedUrlCommandOutput,
} from "../commands/CreateApplicationPresignedUrlCommand";
import {
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput,
} from "../commands/CreateApplicationSnapshotCommand";
import {
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
} from "../commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
} from "../commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput,
} from "../commands/DeleteApplicationOutputCommand";
import {
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput,
} from "../commands/DeleteApplicationReferenceDataSourceCommand";
import {
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput,
} from "../commands/DeleteApplicationSnapshotCommand";
import {
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput,
} from "../commands/DeleteApplicationVpcConfigurationCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "../commands/DescribeApplicationCommand";
import {
  DescribeApplicationSnapshotCommandInput,
  DescribeApplicationSnapshotCommandOutput,
} from "../commands/DescribeApplicationSnapshotCommand";
import {
  DescribeApplicationVersionCommandInput,
  DescribeApplicationVersionCommandOutput,
} from "../commands/DescribeApplicationVersionCommand";
import {
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
} from "../commands/DiscoverInputSchemaCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import {
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "../commands/ListApplicationSnapshotsCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RollbackApplicationCommandInput,
  RollbackApplicationCommandOutput,
} from "../commands/RollbackApplicationCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "../commands/StartApplicationCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "../commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import {
  UpdateApplicationMaintenanceConfigurationCommandInput,
  UpdateApplicationMaintenanceConfigurationCommandOutput,
} from "../commands/UpdateApplicationMaintenanceConfigurationCommand";
import { KinesisAnalyticsV2ServiceException as __BaseException } from "../models/KinesisAnalyticsV2ServiceException";
import {
  AddApplicationCloudWatchLoggingOptionRequest,
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputRequest,
  AddApplicationOutputRequest,
  AddApplicationReferenceDataSourceRequest,
  AddApplicationVpcConfigurationRequest,
  ApplicationCodeConfiguration,
  ApplicationCodeConfigurationUpdate,
  ApplicationConfiguration,
  ApplicationConfigurationUpdate,
  ApplicationDetail,
  ApplicationMaintenanceConfigurationUpdate,
  ApplicationRestoreConfiguration,
  ApplicationSnapshotConfiguration,
  ApplicationSnapshotConfigurationUpdate,
  CatalogConfiguration,
  CatalogConfigurationUpdate,
  CheckpointConfiguration,
  CheckpointConfigurationUpdate,
  CloudWatchLoggingOption,
  CloudWatchLoggingOptionUpdate,
  CodeContent,
  CodeContentUpdate,
  CodeValidationException,
  ConcurrentModificationException,
  CreateApplicationPresignedUrlRequest,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationSnapshotRequest,
  CSVMappingParameters,
  CustomArtifactConfiguration,
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationOutputRequest,
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationRequest,
  DeleteApplicationSnapshotRequest,
  DeleteApplicationVpcConfigurationRequest,
  DeployAsApplicationConfiguration,
  DeployAsApplicationConfigurationUpdate,
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationSnapshotRequest,
  DescribeApplicationSnapshotResponse,
  DescribeApplicationVersionRequest,
  DescribeApplicationVersionResponse,
  DestinationSchema,
  DiscoverInputSchemaRequest,
  EnvironmentProperties,
  EnvironmentPropertyUpdates,
  FlinkApplicationConfiguration,
  FlinkApplicationConfigurationUpdate,
  FlinkRunConfiguration,
  GlueDataCatalogConfiguration,
  GlueDataCatalogConfigurationUpdate,
  Input,
  InputLambdaProcessor,
  InputLambdaProcessorUpdate,
  InputParallelism,
  InputParallelismUpdate,
  InputProcessingConfiguration,
  InputProcessingConfigurationUpdate,
  InputSchemaUpdate,
  InputStartingPositionConfiguration,
  InputUpdate,
  InvalidApplicationConfigurationException,
  InvalidArgumentException,
  InvalidRequestException,
  JSONMappingParameters,
  KinesisFirehoseInput,
  KinesisFirehoseInputUpdate,
  KinesisFirehoseOutput,
  KinesisFirehoseOutputUpdate,
  KinesisStreamsInput,
  KinesisStreamsInputUpdate,
  KinesisStreamsOutput,
  KinesisStreamsOutputUpdate,
  LambdaOutput,
  LambdaOutputUpdate,
  LimitExceededException,
  ListApplicationSnapshotsRequest,
  ListApplicationSnapshotsResponse,
  ListApplicationsRequest,
  ListApplicationVersionsRequest,
  ListTagsForResourceRequest,
  MappingParameters,
  MavenReference,
  MonitoringConfiguration,
  MonitoringConfigurationUpdate,
  Output,
  OutputUpdate,
  ParallelismConfiguration,
  ParallelismConfigurationUpdate,
  PropertyGroup,
  RecordColumn,
  RecordFormat,
  ReferenceDataSource,
  ReferenceDataSourceUpdate,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceProvisionedThroughputExceededException,
  RollbackApplicationRequest,
  RollbackApplicationResponse,
  RunConfiguration,
  RunConfigurationUpdate,
  S3Configuration,
  S3ContentBaseLocation,
  S3ContentBaseLocationUpdate,
  S3ContentLocation,
  S3ContentLocationUpdate,
  S3ReferenceDataSource,
  S3ReferenceDataSourceUpdate,
  ServiceUnavailableException,
  SnapshotDetails,
  SourceSchema,
  SqlApplicationConfiguration,
  SqlApplicationConfigurationUpdate,
  SqlRunConfiguration,
  StartApplicationRequest,
  StopApplicationRequest,
  Tag,
  TagResourceRequest,
  TooManyTagsException,
  UnableToDetectSchemaException,
  UnsupportedOperationException,
  UntagResourceRequest,
  UpdateApplicationMaintenanceConfigurationRequest,
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  VpcConfiguration,
  VpcConfigurationUpdate,
  ZeppelinApplicationConfiguration,
  ZeppelinApplicationConfigurationUpdate,
  ZeppelinMonitoringConfiguration,
  ZeppelinMonitoringConfigurationUpdate,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand
 */
export const se_AddApplicationCloudWatchLoggingOptionCommand = async (
  input: AddApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddApplicationCloudWatchLoggingOption");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationInputCommand
 */
export const se_AddApplicationInputCommand = async (
  input: AddApplicationInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddApplicationInput");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand
 */
export const se_AddApplicationInputProcessingConfigurationCommand = async (
  input: AddApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddApplicationInputProcessingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationOutputCommand
 */
export const se_AddApplicationOutputCommand = async (
  input: AddApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddApplicationOutput");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationReferenceDataSourceCommand
 */
export const se_AddApplicationReferenceDataSourceCommand = async (
  input: AddApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddApplicationReferenceDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationVpcConfigurationCommand
 */
export const se_AddApplicationVpcConfigurationCommand = async (
  input: AddApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddApplicationVpcConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplication");
  let body: any;
  body = JSON.stringify(se_CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationPresignedUrlCommand
 */
export const se_CreateApplicationPresignedUrlCommand = async (
  input: CreateApplicationPresignedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplicationPresignedUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationSnapshotCommand
 */
export const se_CreateApplicationSnapshotCommand = async (
  input: CreateApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApplicationSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplication");
  let body: any;
  body = JSON.stringify(se_DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand
 */
export const se_DeleteApplicationCloudWatchLoggingOptionCommand = async (
  input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationCloudWatchLoggingOption");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand
 */
export const se_DeleteApplicationInputProcessingConfigurationCommand = async (
  input: DeleteApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationInputProcessingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationOutputCommand
 */
export const se_DeleteApplicationOutputCommand = async (
  input: DeleteApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationOutput");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand
 */
export const se_DeleteApplicationReferenceDataSourceCommand = async (
  input: DeleteApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationReferenceDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationSnapshotCommand
 */
export const se_DeleteApplicationSnapshotCommand = async (
  input: DeleteApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationSnapshot");
  let body: any;
  body = JSON.stringify(se_DeleteApplicationSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationVpcConfigurationCommand
 */
export const se_DeleteApplicationVpcConfigurationCommand = async (
  input: DeleteApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApplicationVpcConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationCommand
 */
export const se_DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationSnapshotCommand
 */
export const se_DescribeApplicationSnapshotCommand = async (
  input: DescribeApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationSnapshot");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationVersionCommand
 */
export const se_DescribeApplicationVersionCommand = async (
  input: DescribeApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApplicationVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DiscoverInputSchemaCommand
 */
export const se_DiscoverInputSchemaCommand = async (
  input: DiscoverInputSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DiscoverInputSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplications");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationSnapshotsCommand
 */
export const se_ListApplicationSnapshotsCommand = async (
  input: ListApplicationSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationVersionsCommand
 */
export const se_ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApplicationVersions");
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
 * serializeAws_json1_1RollbackApplicationCommand
 */
export const se_RollbackApplicationCommand = async (
  input: RollbackApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RollbackApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartApplicationCommand
 */
export const se_StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartApplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopApplicationCommand
 */
export const se_StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopApplication");
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
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplication");
  let body: any;
  body = JSON.stringify(se_UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand
 */
export const se_UpdateApplicationMaintenanceConfigurationCommand = async (
  input: UpdateApplicationMaintenanceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApplicationMaintenanceConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand
 */
export const de_AddApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddApplicationCloudWatchLoggingOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError
 */
const de_AddApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddApplicationInputCommand
 */
export const de_AddApplicationInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddApplicationInputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddApplicationInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddApplicationInputCommandError
 */
const de_AddApplicationInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      throw await de_CodeValidationExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand
 */
export const de_AddApplicationInputProcessingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddApplicationInputProcessingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError
 */
const de_AddApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddApplicationOutputCommand
 */
export const de_AddApplicationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddApplicationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddApplicationOutputCommandError
 */
const de_AddApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddApplicationReferenceDataSourceCommand
 */
export const de_AddApplicationReferenceDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddApplicationReferenceDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError
 */
const de_AddApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddApplicationVpcConfigurationCommand
 */
export const de_AddApplicationVpcConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddApplicationVpcConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddApplicationVpcConfigurationCommandError
 */
const de_AddApplicationVpcConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateApplicationCommand
 */
export const de_CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApplicationCommandError
 */
const de_CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      throw await de_CodeValidationExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateApplicationPresignedUrlCommand
 */
export const de_CreateApplicationPresignedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationPresignedUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationPresignedUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateApplicationPresignedUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApplicationPresignedUrlCommandError
 */
const de_CreateApplicationPresignedUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationPresignedUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateApplicationSnapshotCommand
 */
export const de_CreateApplicationSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateApplicationSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateApplicationSnapshotCommandError
 */
const de_CreateApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationCommand
 */
export const de_DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationCommandError
 */
const de_DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand
 */
export const de_DeleteApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationCloudWatchLoggingOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError
 */
const de_DeleteApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand
 */
export const de_DeleteApplicationInputProcessingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationInputProcessingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError
 */
const de_DeleteApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationOutputCommand
 */
export const de_DeleteApplicationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationOutputCommandError
 */
const de_DeleteApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand
 */
export const de_DeleteApplicationReferenceDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationReferenceDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError
 */
const de_DeleteApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationSnapshotCommand
 */
export const de_DeleteApplicationSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationSnapshotCommandError
 */
const de_DeleteApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand
 */
export const de_DeleteApplicationVpcConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteApplicationVpcConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError
 */
const de_DeleteApplicationVpcConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeApplicationCommand
 */
export const de_DescribeApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationResponse(data, context);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationCommandError
 */
const de_DescribeApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeApplicationSnapshotCommand
 */
export const de_DescribeApplicationSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationSnapshotResponse(data, context);
  const response: DescribeApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationSnapshotCommandError
 */
const de_DescribeApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeApplicationVersionCommand
 */
export const de_DescribeApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeApplicationVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeApplicationVersionResponse(data, context);
  const response: DescribeApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeApplicationVersionCommandError
 */
const de_DescribeApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DiscoverInputSchemaCommand
 */
export const de_DiscoverInputSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DiscoverInputSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DiscoverInputSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DiscoverInputSchemaCommandError
 */
const de_DiscoverInputSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceProvisionedThroughputExceededException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceProvisionedThroughputExceededException":
      throw await de_ResourceProvisionedThroughputExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kinesisanalyticsv2#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnableToDetectSchemaException":
    case "com.amazonaws.kinesisanalyticsv2#UnableToDetectSchemaException":
      throw await de_UnableToDetectSchemaExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListApplicationsCommand
 */
export const de_ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationsCommandError
 */
const de_ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListApplicationSnapshotsCommand
 */
export const de_ListApplicationSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListApplicationSnapshotsResponse(data, context);
  const response: ListApplicationSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationSnapshotsCommandError
 */
const de_ListApplicationSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListApplicationVersionsCommand
 */
export const de_ListApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListApplicationVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListApplicationVersionsCommandError
 */
const de_ListApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RollbackApplicationCommand
 */
export const de_RollbackApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RollbackApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RollbackApplicationResponse(data, context);
  const response: RollbackApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RollbackApplicationCommandError
 */
const de_RollbackApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartApplicationCommand
 */
export const de_StartApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartApplicationCommandError
 */
const de_StartApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopApplicationCommand
 */
export const de_StopApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopApplicationCommandError
 */
const de_StopApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
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
 * deserializeAws_json1_1TagResourceCommandError
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
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
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApplicationCommand
 */
export const de_UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApplicationCommandError
 */
const de_UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      throw await de_CodeValidationExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      throw await de_InvalidApplicationConfigurationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand
 */
export const de_UpdateApplicationMaintenanceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateApplicationMaintenanceConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateApplicationMaintenanceConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError
 */
const de_UpdateApplicationMaintenanceConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CodeValidationExceptionRes
 */
const de_CodeValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CodeValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidApplicationConfigurationExceptionRes
 */
const de_InvalidApplicationConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidApplicationConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidArgumentExceptionRes
 */
const de_InvalidArgumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUseException({
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
 * deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionRes
 */
const de_ResourceProvisionedThroughputExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceProvisionedThroughputExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceUnavailableException({
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
 * deserializeAws_json1_1UnableToDetectSchemaExceptionRes
 */
const de_UnableToDetectSchemaExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnableToDetectSchemaException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnableToDetectSchemaException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddApplicationCloudWatchLoggingOptionRequest omitted.

// se_AddApplicationInputProcessingConfigurationRequest omitted.

// se_AddApplicationInputRequest omitted.

// se_AddApplicationOutputRequest omitted.

// se_AddApplicationReferenceDataSourceRequest omitted.

// se_AddApplicationVpcConfigurationRequest omitted.

/**
 * serializeAws_json1_1ApplicationCodeConfiguration
 */
const se_ApplicationCodeConfiguration = (input: ApplicationCodeConfiguration, context: __SerdeContext): any => {
  return take(input, {
    CodeContent: (_) => se_CodeContent(_, context),
    CodeContentType: [],
  });
};

/**
 * serializeAws_json1_1ApplicationCodeConfigurationUpdate
 */
const se_ApplicationCodeConfigurationUpdate = (
  input: ApplicationCodeConfigurationUpdate,
  context: __SerdeContext
): any => {
  return take(input, {
    CodeContentTypeUpdate: [],
    CodeContentUpdate: (_) => se_CodeContentUpdate(_, context),
  });
};

/**
 * serializeAws_json1_1ApplicationConfiguration
 */
const se_ApplicationConfiguration = (input: ApplicationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ApplicationCodeConfiguration: (_) => se_ApplicationCodeConfiguration(_, context),
    ApplicationSnapshotConfiguration: _json,
    EnvironmentProperties: _json,
    FlinkApplicationConfiguration: _json,
    SqlApplicationConfiguration: _json,
    VpcConfigurations: _json,
    ZeppelinApplicationConfiguration: _json,
  });
};

/**
 * serializeAws_json1_1ApplicationConfigurationUpdate
 */
const se_ApplicationConfigurationUpdate = (input: ApplicationConfigurationUpdate, context: __SerdeContext): any => {
  return take(input, {
    ApplicationCodeConfigurationUpdate: (_) => se_ApplicationCodeConfigurationUpdate(_, context),
    ApplicationSnapshotConfigurationUpdate: _json,
    EnvironmentPropertyUpdates: _json,
    FlinkApplicationConfigurationUpdate: _json,
    SqlApplicationConfigurationUpdate: _json,
    VpcConfigurationUpdates: _json,
    ZeppelinApplicationConfigurationUpdate: _json,
  });
};

// se_ApplicationMaintenanceConfigurationUpdate omitted.

// se_ApplicationRestoreConfiguration omitted.

// se_ApplicationSnapshotConfiguration omitted.

// se_ApplicationSnapshotConfigurationUpdate omitted.

// se_CatalogConfiguration omitted.

// se_CatalogConfigurationUpdate omitted.

// se_CheckpointConfiguration omitted.

// se_CheckpointConfigurationUpdate omitted.

// se_CloudWatchLoggingOption omitted.

// se_CloudWatchLoggingOptions omitted.

// se_CloudWatchLoggingOptionUpdate omitted.

// se_CloudWatchLoggingOptionUpdates omitted.

/**
 * serializeAws_json1_1CodeContent
 */
const se_CodeContent = (input: CodeContent, context: __SerdeContext): any => {
  return take(input, {
    S3ContentLocation: _json,
    TextContent: [],
    ZipFileContent: context.base64Encoder,
  });
};

/**
 * serializeAws_json1_1CodeContentUpdate
 */
const se_CodeContentUpdate = (input: CodeContentUpdate, context: __SerdeContext): any => {
  return take(input, {
    S3ContentLocationUpdate: _json,
    TextContentUpdate: [],
    ZipFileContentUpdate: context.base64Encoder,
  });
};

// se_CreateApplicationPresignedUrlRequest omitted.

/**
 * serializeAws_json1_1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationConfiguration: (_) => se_ApplicationConfiguration(_, context),
    ApplicationDescription: [],
    ApplicationMode: [],
    ApplicationName: [],
    CloudWatchLoggingOptions: _json,
    RuntimeEnvironment: [],
    ServiceExecutionRole: [],
    Tags: _json,
  });
};

// se_CreateApplicationSnapshotRequest omitted.

// se_CSVMappingParameters omitted.

// se_CustomArtifactConfiguration omitted.

// se_CustomArtifactsConfigurationList omitted.

// se_DeleteApplicationCloudWatchLoggingOptionRequest omitted.

// se_DeleteApplicationInputProcessingConfigurationRequest omitted.

// se_DeleteApplicationOutputRequest omitted.

// se_DeleteApplicationReferenceDataSourceRequest omitted.

/**
 * serializeAws_json1_1DeleteApplicationRequest
 */
const se_DeleteApplicationRequest = (input: DeleteApplicationRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationName: [],
    CreateTimestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_json1_1DeleteApplicationSnapshotRequest
 */
const se_DeleteApplicationSnapshotRequest = (input: DeleteApplicationSnapshotRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationName: [],
    SnapshotCreationTimestamp: (_) => Math.round(_.getTime() / 1000),
    SnapshotName: [],
  });
};

// se_DeleteApplicationVpcConfigurationRequest omitted.

// se_DeployAsApplicationConfiguration omitted.

// se_DeployAsApplicationConfigurationUpdate omitted.

// se_DescribeApplicationRequest omitted.

// se_DescribeApplicationSnapshotRequest omitted.

// se_DescribeApplicationVersionRequest omitted.

// se_DestinationSchema omitted.

// se_DiscoverInputSchemaRequest omitted.

// se_EnvironmentProperties omitted.

// se_EnvironmentPropertyUpdates omitted.

// se_FlinkApplicationConfiguration omitted.

// se_FlinkApplicationConfigurationUpdate omitted.

// se_FlinkRunConfiguration omitted.

// se_GlueDataCatalogConfiguration omitted.

// se_GlueDataCatalogConfigurationUpdate omitted.

// se_Input omitted.

// se_InputLambdaProcessor omitted.

// se_InputLambdaProcessorUpdate omitted.

// se_InputParallelism omitted.

// se_InputParallelismUpdate omitted.

// se_InputProcessingConfiguration omitted.

// se_InputProcessingConfigurationUpdate omitted.

// se_Inputs omitted.

// se_InputSchemaUpdate omitted.

// se_InputStartingPositionConfiguration omitted.

// se_InputUpdate omitted.

// se_InputUpdates omitted.

// se_JSONMappingParameters omitted.

// se_KinesisFirehoseInput omitted.

// se_KinesisFirehoseInputUpdate omitted.

// se_KinesisFirehoseOutput omitted.

// se_KinesisFirehoseOutputUpdate omitted.

// se_KinesisStreamsInput omitted.

// se_KinesisStreamsInputUpdate omitted.

// se_KinesisStreamsOutput omitted.

// se_KinesisStreamsOutputUpdate omitted.

// se_LambdaOutput omitted.

// se_LambdaOutputUpdate omitted.

// se_ListApplicationSnapshotsRequest omitted.

// se_ListApplicationsRequest omitted.

// se_ListApplicationVersionsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MappingParameters omitted.

// se_MavenReference omitted.

// se_MonitoringConfiguration omitted.

// se_MonitoringConfigurationUpdate omitted.

// se_Output omitted.

// se_Outputs omitted.

// se_OutputUpdate omitted.

// se_OutputUpdates omitted.

// se_ParallelismConfiguration omitted.

// se_ParallelismConfigurationUpdate omitted.

// se_PropertyGroup omitted.

// se_PropertyGroups omitted.

// se_PropertyMap omitted.

// se_RecordColumn omitted.

// se_RecordColumns omitted.

// se_RecordFormat omitted.

// se_ReferenceDataSource omitted.

// se_ReferenceDataSources omitted.

// se_ReferenceDataSourceUpdate omitted.

// se_ReferenceDataSourceUpdates omitted.

// se_RollbackApplicationRequest omitted.

// se_RunConfiguration omitted.

// se_RunConfigurationUpdate omitted.

// se_S3Configuration omitted.

// se_S3ContentBaseLocation omitted.

// se_S3ContentBaseLocationUpdate omitted.

// se_S3ContentLocation omitted.

// se_S3ContentLocationUpdate omitted.

// se_S3ReferenceDataSource omitted.

// se_S3ReferenceDataSourceUpdate omitted.

// se_SecurityGroupIds omitted.

// se_SourceSchema omitted.

// se_SqlApplicationConfiguration omitted.

// se_SqlApplicationConfigurationUpdate omitted.

// se_SqlRunConfiguration omitted.

// se_SqlRunConfigurations omitted.

// se_StartApplicationRequest omitted.

// se_StopApplicationRequest omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_UntagResourceRequest omitted.

// se_UpdateApplicationMaintenanceConfigurationRequest omitted.

/**
 * serializeAws_json1_1UpdateApplicationRequest
 */
const se_UpdateApplicationRequest = (input: UpdateApplicationRequest, context: __SerdeContext): any => {
  return take(input, {
    ApplicationConfigurationUpdate: (_) => se_ApplicationConfigurationUpdate(_, context),
    ApplicationName: [],
    CloudWatchLoggingOptionUpdates: _json,
    ConditionalToken: [],
    CurrentApplicationVersionId: [],
    RunConfigurationUpdate: _json,
    ServiceExecutionRoleUpdate: [],
  });
};

// se_VpcConfiguration omitted.

// se_VpcConfigurations omitted.

// se_VpcConfigurationUpdate omitted.

// se_VpcConfigurationUpdates omitted.

// se_ZeppelinApplicationConfiguration omitted.

// se_ZeppelinApplicationConfigurationUpdate omitted.

// se_ZeppelinMonitoringConfiguration omitted.

// se_ZeppelinMonitoringConfigurationUpdate omitted.

// de_AddApplicationCloudWatchLoggingOptionResponse omitted.

// de_AddApplicationInputProcessingConfigurationResponse omitted.

// de_AddApplicationInputResponse omitted.

// de_AddApplicationOutputResponse omitted.

// de_AddApplicationReferenceDataSourceResponse omitted.

// de_AddApplicationVpcConfigurationResponse omitted.

// de_ApplicationCodeConfigurationDescription omitted.

// de_ApplicationConfigurationDescription omitted.

/**
 * deserializeAws_json1_1ApplicationDetail
 */
const de_ApplicationDetail = (output: any, context: __SerdeContext): ApplicationDetail => {
  return take(output, {
    ApplicationARN: __expectString,
    ApplicationConfigurationDescription: _json,
    ApplicationDescription: __expectString,
    ApplicationMaintenanceConfigurationDescription: _json,
    ApplicationMode: __expectString,
    ApplicationName: __expectString,
    ApplicationStatus: __expectString,
    ApplicationVersionId: __expectLong,
    ApplicationVersionRolledBackFrom: __expectLong,
    ApplicationVersionRolledBackTo: __expectLong,
    ApplicationVersionUpdatedFrom: __expectLong,
    CloudWatchLoggingOptionDescriptions: _json,
    ConditionalToken: __expectString,
    CreateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuntimeEnvironment: __expectString,
    ServiceExecutionRole: __expectString,
  }) as any;
};

// de_ApplicationMaintenanceConfigurationDescription omitted.

// de_ApplicationRestoreConfiguration omitted.

// de_ApplicationSnapshotConfigurationDescription omitted.

// de_ApplicationSummaries omitted.

// de_ApplicationSummary omitted.

// de_ApplicationVersionSummaries omitted.

// de_ApplicationVersionSummary omitted.

// de_CatalogConfigurationDescription omitted.

// de_CheckpointConfigurationDescription omitted.

// de_CloudWatchLoggingOptionDescription omitted.

// de_CloudWatchLoggingOptionDescriptions omitted.

// de_CodeContentDescription omitted.

// de_CodeValidationException omitted.

// de_ConcurrentModificationException omitted.

// de_CreateApplicationPresignedUrlResponse omitted.

/**
 * deserializeAws_json1_1CreateApplicationResponse
 */
const de_CreateApplicationResponse = (output: any, context: __SerdeContext): CreateApplicationResponse => {
  return take(output, {
    ApplicationDetail: (_: any) => de_ApplicationDetail(_, context),
  }) as any;
};

// de_CreateApplicationSnapshotResponse omitted.

// de_CSVMappingParameters omitted.

// de_CustomArtifactConfigurationDescription omitted.

// de_CustomArtifactsConfigurationDescriptionList omitted.

// de_DeleteApplicationCloudWatchLoggingOptionResponse omitted.

// de_DeleteApplicationInputProcessingConfigurationResponse omitted.

// de_DeleteApplicationOutputResponse omitted.

// de_DeleteApplicationReferenceDataSourceResponse omitted.

// de_DeleteApplicationResponse omitted.

// de_DeleteApplicationSnapshotResponse omitted.

// de_DeleteApplicationVpcConfigurationResponse omitted.

// de_DeployAsApplicationConfigurationDescription omitted.

/**
 * deserializeAws_json1_1DescribeApplicationResponse
 */
const de_DescribeApplicationResponse = (output: any, context: __SerdeContext): DescribeApplicationResponse => {
  return take(output, {
    ApplicationDetail: (_: any) => de_ApplicationDetail(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationSnapshotResponse
 */
const de_DescribeApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationSnapshotResponse => {
  return take(output, {
    SnapshotDetails: (_: any) => de_SnapshotDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationVersionResponse
 */
const de_DescribeApplicationVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationVersionResponse => {
  return take(output, {
    ApplicationVersionDetail: (_: any) => de_ApplicationDetail(_, context),
  }) as any;
};

// de_DestinationSchema omitted.

// de_DiscoverInputSchemaResponse omitted.

// de_EnvironmentPropertyDescriptions omitted.

// de_FlinkApplicationConfigurationDescription omitted.

// de_FlinkRunConfiguration omitted.

// de_GlueDataCatalogConfigurationDescription omitted.

// de_InAppStreamNames omitted.

// de_InputDescription omitted.

// de_InputDescriptions omitted.

// de_InputLambdaProcessorDescription omitted.

// de_InputParallelism omitted.

// de_InputProcessingConfigurationDescription omitted.

// de_InputStartingPositionConfiguration omitted.

// de_InvalidApplicationConfigurationException omitted.

// de_InvalidArgumentException omitted.

// de_InvalidRequestException omitted.

// de_JSONMappingParameters omitted.

// de_KinesisFirehoseInputDescription omitted.

// de_KinesisFirehoseOutputDescription omitted.

// de_KinesisStreamsInputDescription omitted.

// de_KinesisStreamsOutputDescription omitted.

// de_LambdaOutputDescription omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListApplicationSnapshotsResponse
 */
const de_ListApplicationSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationSnapshotsResponse => {
  return take(output, {
    NextToken: __expectString,
    SnapshotSummaries: (_: any) => de_SnapshotSummaries(_, context),
  }) as any;
};

// de_ListApplicationsResponse omitted.

// de_ListApplicationVersionsResponse omitted.

// de_ListTagsForResourceResponse omitted.

// de_MappingParameters omitted.

// de_MavenReference omitted.

// de_MonitoringConfigurationDescription omitted.

// de_OutputDescription omitted.

// de_OutputDescriptions omitted.

// de_ParallelismConfigurationDescription omitted.

// de_ParsedInputRecord omitted.

// de_ParsedInputRecords omitted.

// de_ProcessedInputRecords omitted.

// de_PropertyGroup omitted.

// de_PropertyGroups omitted.

// de_PropertyMap omitted.

// de_RawInputRecords omitted.

// de_RecordColumn omitted.

// de_RecordColumns omitted.

// de_RecordFormat omitted.

// de_ReferenceDataSourceDescription omitted.

// de_ReferenceDataSourceDescriptions omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceProvisionedThroughputExceededException omitted.

/**
 * deserializeAws_json1_1RollbackApplicationResponse
 */
const de_RollbackApplicationResponse = (output: any, context: __SerdeContext): RollbackApplicationResponse => {
  return take(output, {
    ApplicationDetail: (_: any) => de_ApplicationDetail(_, context),
  }) as any;
};

// de_RunConfigurationDescription omitted.

// de_S3ApplicationCodeLocationDescription omitted.

// de_S3ContentBaseLocationDescription omitted.

// de_S3ContentLocation omitted.

// de_S3ReferenceDataSourceDescription omitted.

// de_SecurityGroupIds omitted.

// de_ServiceUnavailableException omitted.

/**
 * deserializeAws_json1_1SnapshotDetails
 */
const de_SnapshotDetails = (output: any, context: __SerdeContext): SnapshotDetails => {
  return take(output, {
    ApplicationVersionId: __expectLong,
    SnapshotCreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SnapshotName: __expectString,
    SnapshotStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SnapshotSummaries
 */
const de_SnapshotSummaries = (output: any, context: __SerdeContext): SnapshotDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SnapshotDetails(entry, context);
    });
  return retVal;
};

// de_SourceSchema omitted.

// de_SqlApplicationConfigurationDescription omitted.

// de_StartApplicationResponse omitted.

// de_StopApplicationResponse omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_TooManyTagsException omitted.

// de_UnableToDetectSchemaException omitted.

// de_UnsupportedOperationException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateApplicationMaintenanceConfigurationResponse omitted.

/**
 * deserializeAws_json1_1UpdateApplicationResponse
 */
const de_UpdateApplicationResponse = (output: any, context: __SerdeContext): UpdateApplicationResponse => {
  return take(output, {
    ApplicationDetail: (_: any) => de_ApplicationDetail(_, context),
  }) as any;
};

// de_VpcConfigurationDescription omitted.

// de_VpcConfigurationDescriptions omitted.

// de_ZeppelinApplicationConfigurationDescription omitted.

// de_ZeppelinMonitoringConfigurationDescription omitted.

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
    "x-amz-target": `KinesisAnalytics_20180523.${operation}`,
  };
}

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
