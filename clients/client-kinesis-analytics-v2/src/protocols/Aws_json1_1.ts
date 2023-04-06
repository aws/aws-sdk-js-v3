// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  AddApplicationCloudWatchLoggingOptionResponse,
  AddApplicationInputProcessingConfigurationRequest,
  AddApplicationInputProcessingConfigurationResponse,
  AddApplicationInputRequest,
  AddApplicationInputResponse,
  AddApplicationOutputRequest,
  AddApplicationOutputResponse,
  AddApplicationReferenceDataSourceRequest,
  AddApplicationReferenceDataSourceResponse,
  AddApplicationVpcConfigurationRequest,
  AddApplicationVpcConfigurationResponse,
  ApplicationCodeConfiguration,
  ApplicationCodeConfigurationDescription,
  ApplicationCodeConfigurationUpdate,
  ApplicationConfiguration,
  ApplicationConfigurationDescription,
  ApplicationConfigurationUpdate,
  ApplicationDetail,
  ApplicationMaintenanceConfigurationDescription,
  ApplicationMaintenanceConfigurationUpdate,
  ApplicationRestoreConfiguration,
  ApplicationSnapshotConfiguration,
  ApplicationSnapshotConfigurationDescription,
  ApplicationSnapshotConfigurationUpdate,
  ApplicationSummary,
  ApplicationVersionSummary,
  CatalogConfiguration,
  CatalogConfigurationDescription,
  CatalogConfigurationUpdate,
  CheckpointConfiguration,
  CheckpointConfigurationDescription,
  CheckpointConfigurationUpdate,
  CloudWatchLoggingOption,
  CloudWatchLoggingOptionDescription,
  CloudWatchLoggingOptionUpdate,
  CodeContent,
  CodeContentDescription,
  CodeContentUpdate,
  CodeValidationException,
  ConcurrentModificationException,
  CreateApplicationPresignedUrlRequest,
  CreateApplicationPresignedUrlResponse,
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationSnapshotRequest,
  CreateApplicationSnapshotResponse,
  CSVMappingParameters,
  CustomArtifactConfiguration,
  CustomArtifactConfigurationDescription,
  DeleteApplicationCloudWatchLoggingOptionRequest,
  DeleteApplicationCloudWatchLoggingOptionResponse,
  DeleteApplicationInputProcessingConfigurationRequest,
  DeleteApplicationInputProcessingConfigurationResponse,
  DeleteApplicationOutputRequest,
  DeleteApplicationOutputResponse,
  DeleteApplicationReferenceDataSourceRequest,
  DeleteApplicationReferenceDataSourceResponse,
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationSnapshotRequest,
  DeleteApplicationSnapshotResponse,
  DeleteApplicationVpcConfigurationRequest,
  DeleteApplicationVpcConfigurationResponse,
  DeployAsApplicationConfiguration,
  DeployAsApplicationConfigurationDescription,
  DeployAsApplicationConfigurationUpdate,
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationSnapshotRequest,
  DescribeApplicationSnapshotResponse,
  DescribeApplicationVersionRequest,
  DescribeApplicationVersionResponse,
  DestinationSchema,
  DiscoverInputSchemaRequest,
  DiscoverInputSchemaResponse,
  EnvironmentProperties,
  EnvironmentPropertyDescriptions,
  EnvironmentPropertyUpdates,
  FlinkApplicationConfiguration,
  FlinkApplicationConfigurationDescription,
  FlinkApplicationConfigurationUpdate,
  FlinkRunConfiguration,
  GlueDataCatalogConfiguration,
  GlueDataCatalogConfigurationDescription,
  GlueDataCatalogConfigurationUpdate,
  Input,
  InputDescription,
  InputLambdaProcessor,
  InputLambdaProcessorDescription,
  InputLambdaProcessorUpdate,
  InputParallelism,
  InputParallelismUpdate,
  InputProcessingConfiguration,
  InputProcessingConfigurationDescription,
  InputProcessingConfigurationUpdate,
  InputSchemaUpdate,
  InputStartingPositionConfiguration,
  InputUpdate,
  InvalidApplicationConfigurationException,
  InvalidArgumentException,
  InvalidRequestException,
  JSONMappingParameters,
  KinesisFirehoseInput,
  KinesisFirehoseInputDescription,
  KinesisFirehoseInputUpdate,
  KinesisFirehoseOutput,
  KinesisFirehoseOutputDescription,
  KinesisFirehoseOutputUpdate,
  KinesisStreamsInput,
  KinesisStreamsInputDescription,
  KinesisStreamsInputUpdate,
  KinesisStreamsOutput,
  KinesisStreamsOutputDescription,
  KinesisStreamsOutputUpdate,
  LambdaOutput,
  LambdaOutputDescription,
  LambdaOutputUpdate,
  LimitExceededException,
  ListApplicationSnapshotsRequest,
  ListApplicationSnapshotsResponse,
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationVersionsRequest,
  ListApplicationVersionsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MappingParameters,
  MavenReference,
  MonitoringConfiguration,
  MonitoringConfigurationDescription,
  MonitoringConfigurationUpdate,
  Output,
  OutputDescription,
  OutputUpdate,
  ParallelismConfiguration,
  ParallelismConfigurationDescription,
  ParallelismConfigurationUpdate,
  PropertyGroup,
  RecordColumn,
  RecordFormat,
  ReferenceDataSource,
  ReferenceDataSourceDescription,
  ReferenceDataSourceUpdate,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceProvisionedThroughputExceededException,
  RollbackApplicationRequest,
  RollbackApplicationResponse,
  RunConfiguration,
  RunConfigurationDescription,
  RunConfigurationUpdate,
  S3ApplicationCodeLocationDescription,
  S3Configuration,
  S3ContentBaseLocation,
  S3ContentBaseLocationDescription,
  S3ContentBaseLocationUpdate,
  S3ContentLocation,
  S3ContentLocationUpdate,
  S3ReferenceDataSource,
  S3ReferenceDataSourceDescription,
  S3ReferenceDataSourceUpdate,
  ServiceUnavailableException,
  SnapshotDetails,
  SourceSchema,
  SqlApplicationConfiguration,
  SqlApplicationConfigurationDescription,
  SqlApplicationConfigurationUpdate,
  SqlRunConfiguration,
  StartApplicationRequest,
  StartApplicationResponse,
  StopApplicationRequest,
  StopApplicationResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UnableToDetectSchemaException,
  UnsupportedOperationException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateApplicationMaintenanceConfigurationRequest,
  UpdateApplicationMaintenanceConfigurationResponse,
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  VpcConfiguration,
  VpcConfigurationDescription,
  VpcConfigurationUpdate,
  ZeppelinApplicationConfiguration,
  ZeppelinApplicationConfigurationDescription,
  ZeppelinApplicationConfigurationUpdate,
  ZeppelinMonitoringConfiguration,
  ZeppelinMonitoringConfigurationDescription,
  ZeppelinMonitoringConfigurationUpdate,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand
 */
export const se_AddApplicationCloudWatchLoggingOptionCommand = async (
  input: AddApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
  };
  let body: any;
  body = JSON.stringify(se_AddApplicationCloudWatchLoggingOptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationInputCommand
 */
export const se_AddApplicationInputCommand = async (
  input: AddApplicationInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInput",
  };
  let body: any;
  body = JSON.stringify(se_AddApplicationInputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand
 */
export const se_AddApplicationInputProcessingConfigurationCommand = async (
  input: AddApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_AddApplicationInputProcessingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationOutputCommand
 */
export const se_AddApplicationOutputCommand = async (
  input: AddApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationOutput",
  };
  let body: any;
  body = JSON.stringify(se_AddApplicationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationReferenceDataSourceCommand
 */
export const se_AddApplicationReferenceDataSourceCommand = async (
  input: AddApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationReferenceDataSource",
  };
  let body: any;
  body = JSON.stringify(se_AddApplicationReferenceDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddApplicationVpcConfigurationCommand
 */
export const se_AddApplicationVpcConfigurationCommand = async (
  input: AddApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationVpcConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_AddApplicationVpcConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationCommand
 */
export const se_CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.CreateApplication",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationPresignedUrl",
  };
  let body: any;
  body = JSON.stringify(se_CreateApplicationPresignedUrlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateApplicationSnapshotCommand
 */
export const se_CreateApplicationSnapshotCommand = async (
  input: CreateApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_CreateApplicationSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationCommand
 */
export const se_DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplication",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand
 */
export const se_DeleteApplicationInputProcessingConfigurationCommand = async (
  input: DeleteApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApplicationInputProcessingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationOutputCommand
 */
export const se_DeleteApplicationOutputCommand = async (
  input: DeleteApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationOutput",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApplicationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand
 */
export const se_DeleteApplicationReferenceDataSourceCommand = async (
  input: DeleteApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApplicationReferenceDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteApplicationSnapshotCommand
 */
export const se_DeleteApplicationSnapshotCommand = async (
  input: DeleteApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationSnapshot",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteApplicationVpcConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationCommand
 */
export const se_DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DescribeApplication",
  };
  let body: any;
  body = JSON.stringify(se_DescribeApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationSnapshotCommand
 */
export const se_DescribeApplicationSnapshotCommand = async (
  input: DescribeApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationSnapshot",
  };
  let body: any;
  body = JSON.stringify(se_DescribeApplicationSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeApplicationVersionCommand
 */
export const se_DescribeApplicationVersionCommand = async (
  input: DescribeApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationVersion",
  };
  let body: any;
  body = JSON.stringify(se_DescribeApplicationVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DiscoverInputSchemaCommand
 */
export const se_DiscoverInputSchemaCommand = async (
  input: DiscoverInputSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DiscoverInputSchema",
  };
  let body: any;
  body = JSON.stringify(se_DiscoverInputSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationsCommand
 */
export const se_ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListApplications",
  };
  let body: any;
  body = JSON.stringify(se_ListApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationSnapshotsCommand
 */
export const se_ListApplicationSnapshotsCommand = async (
  input: ListApplicationSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListApplicationSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_ListApplicationSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListApplicationVersionsCommand
 */
export const se_ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListApplicationVersions",
  };
  let body: any;
  body = JSON.stringify(se_ListApplicationVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RollbackApplicationCommand
 */
export const se_RollbackApplicationCommand = async (
  input: RollbackApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.RollbackApplication",
  };
  let body: any;
  body = JSON.stringify(se_RollbackApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartApplicationCommand
 */
export const se_StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.StartApplication",
  };
  let body: any;
  body = JSON.stringify(se_StartApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopApplicationCommand
 */
export const se_StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.StopApplication",
  };
  let body: any;
  body = JSON.stringify(se_StopApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateApplicationCommand
 */
export const se_UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.UpdateApplication",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_UpdateApplicationMaintenanceConfigurationRequest(input, context));
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
  contents = de_AddApplicationCloudWatchLoggingOptionResponse(data, context);
  const response: AddApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AddApplicationInputResponse(data, context);
  const response: AddApplicationInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AddApplicationInputProcessingConfigurationResponse(data, context);
  const response: AddApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AddApplicationOutputResponse(data, context);
  const response: AddApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AddApplicationReferenceDataSourceResponse(data, context);
  const response: AddApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_AddApplicationVpcConfigurationResponse(data, context);
  const response: AddApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateApplicationPresignedUrlResponse(data, context);
  const response: CreateApplicationPresignedUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateApplicationSnapshotResponse(data, context);
  const response: CreateApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationResponse(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationCloudWatchLoggingOptionResponse(data, context);
  const response: DeleteApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationInputProcessingConfigurationResponse(data, context);
  const response: DeleteApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationOutputResponse(data, context);
  const response: DeleteApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationReferenceDataSourceResponse(data, context);
  const response: DeleteApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationSnapshotResponse(data, context);
  const response: DeleteApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteApplicationVpcConfigurationResponse(data, context);
  const response: DeleteApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DiscoverInputSchemaResponse(data, context);
  const response: DiscoverInputSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListApplicationsResponse(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListApplicationVersionsResponse(data, context);
  const response: ListApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartApplicationResponse(data, context);
  const response: StartApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StopApplicationResponse(data, context);
  const response: StopApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateApplicationMaintenanceConfigurationResponse(data, context);
  const response: UpdateApplicationMaintenanceConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_CodeValidationException(body, context);
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
  const deserialized: any = de_ConcurrentModificationException(body, context);
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
  const deserialized: any = de_InvalidApplicationConfigurationException(body, context);
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
  const deserialized: any = de_InvalidArgumentException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_ResourceInUseException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ResourceProvisionedThroughputExceededException(body, context);
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
  const deserialized: any = de_ServiceUnavailableException(body, context);
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
  const deserialized: any = de_TooManyTagsException(body, context);
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
  const deserialized: any = de_UnableToDetectSchemaException(body, context);
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
  const deserialized: any = de_UnsupportedOperationException(body, context);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest
 */
const se_AddApplicationCloudWatchLoggingOptionRequest = (
  input: AddApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOption != null && {
      CloudWatchLoggingOption: se_CloudWatchLoggingOption(input.CloudWatchLoggingOption, context),
    }),
    ...(input.ConditionalToken != null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
  };
};

/**
 * serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest
 */
const se_AddApplicationInputProcessingConfigurationRequest = (
  input: AddApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.InputId != null && { InputId: input.InputId }),
    ...(input.InputProcessingConfiguration != null && {
      InputProcessingConfiguration: se_InputProcessingConfiguration(input.InputProcessingConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1AddApplicationInputRequest
 */
const se_AddApplicationInputRequest = (input: AddApplicationInputRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.Input != null && { Input: se_Input(input.Input, context) }),
  };
};

/**
 * serializeAws_json1_1AddApplicationOutputRequest
 */
const se_AddApplicationOutputRequest = (input: AddApplicationOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.Output != null && { Output: se_Output(input.Output, context) }),
  };
};

/**
 * serializeAws_json1_1AddApplicationReferenceDataSourceRequest
 */
const se_AddApplicationReferenceDataSourceRequest = (
  input: AddApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.ReferenceDataSource != null && {
      ReferenceDataSource: se_ReferenceDataSource(input.ReferenceDataSource, context),
    }),
  };
};

/**
 * serializeAws_json1_1AddApplicationVpcConfigurationRequest
 */
const se_AddApplicationVpcConfigurationRequest = (
  input: AddApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.ConditionalToken != null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_1ApplicationCodeConfiguration
 */
const se_ApplicationCodeConfiguration = (input: ApplicationCodeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CodeContent != null && { CodeContent: se_CodeContent(input.CodeContent, context) }),
    ...(input.CodeContentType != null && { CodeContentType: input.CodeContentType }),
  };
};

/**
 * serializeAws_json1_1ApplicationCodeConfigurationUpdate
 */
const se_ApplicationCodeConfigurationUpdate = (
  input: ApplicationCodeConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeContentTypeUpdate != null && { CodeContentTypeUpdate: input.CodeContentTypeUpdate }),
    ...(input.CodeContentUpdate != null && {
      CodeContentUpdate: se_CodeContentUpdate(input.CodeContentUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1ApplicationConfiguration
 */
const se_ApplicationConfiguration = (input: ApplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationCodeConfiguration != null && {
      ApplicationCodeConfiguration: se_ApplicationCodeConfiguration(input.ApplicationCodeConfiguration, context),
    }),
    ...(input.ApplicationSnapshotConfiguration != null && {
      ApplicationSnapshotConfiguration: se_ApplicationSnapshotConfiguration(
        input.ApplicationSnapshotConfiguration,
        context
      ),
    }),
    ...(input.EnvironmentProperties != null && {
      EnvironmentProperties: se_EnvironmentProperties(input.EnvironmentProperties, context),
    }),
    ...(input.FlinkApplicationConfiguration != null && {
      FlinkApplicationConfiguration: se_FlinkApplicationConfiguration(input.FlinkApplicationConfiguration, context),
    }),
    ...(input.SqlApplicationConfiguration != null && {
      SqlApplicationConfiguration: se_SqlApplicationConfiguration(input.SqlApplicationConfiguration, context),
    }),
    ...(input.VpcConfigurations != null && {
      VpcConfigurations: se_VpcConfigurations(input.VpcConfigurations, context),
    }),
    ...(input.ZeppelinApplicationConfiguration != null && {
      ZeppelinApplicationConfiguration: se_ZeppelinApplicationConfiguration(
        input.ZeppelinApplicationConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1ApplicationConfigurationUpdate
 */
const se_ApplicationConfigurationUpdate = (input: ApplicationConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationCodeConfigurationUpdate != null && {
      ApplicationCodeConfigurationUpdate: se_ApplicationCodeConfigurationUpdate(
        input.ApplicationCodeConfigurationUpdate,
        context
      ),
    }),
    ...(input.ApplicationSnapshotConfigurationUpdate != null && {
      ApplicationSnapshotConfigurationUpdate: se_ApplicationSnapshotConfigurationUpdate(
        input.ApplicationSnapshotConfigurationUpdate,
        context
      ),
    }),
    ...(input.EnvironmentPropertyUpdates != null && {
      EnvironmentPropertyUpdates: se_EnvironmentPropertyUpdates(input.EnvironmentPropertyUpdates, context),
    }),
    ...(input.FlinkApplicationConfigurationUpdate != null && {
      FlinkApplicationConfigurationUpdate: se_FlinkApplicationConfigurationUpdate(
        input.FlinkApplicationConfigurationUpdate,
        context
      ),
    }),
    ...(input.SqlApplicationConfigurationUpdate != null && {
      SqlApplicationConfigurationUpdate: se_SqlApplicationConfigurationUpdate(
        input.SqlApplicationConfigurationUpdate,
        context
      ),
    }),
    ...(input.VpcConfigurationUpdates != null && {
      VpcConfigurationUpdates: se_VpcConfigurationUpdates(input.VpcConfigurationUpdates, context),
    }),
    ...(input.ZeppelinApplicationConfigurationUpdate != null && {
      ZeppelinApplicationConfigurationUpdate: se_ZeppelinApplicationConfigurationUpdate(
        input.ZeppelinApplicationConfigurationUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate
 */
const se_ApplicationMaintenanceConfigurationUpdate = (
  input: ApplicationMaintenanceConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationMaintenanceWindowStartTimeUpdate != null && {
      ApplicationMaintenanceWindowStartTimeUpdate: input.ApplicationMaintenanceWindowStartTimeUpdate,
    }),
  };
};

/**
 * serializeAws_json1_1ApplicationRestoreConfiguration
 */
const se_ApplicationRestoreConfiguration = (input: ApplicationRestoreConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationRestoreType != null && { ApplicationRestoreType: input.ApplicationRestoreType }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
  };
};

/**
 * serializeAws_json1_1ApplicationSnapshotConfiguration
 */
const se_ApplicationSnapshotConfiguration = (input: ApplicationSnapshotConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SnapshotsEnabled != null && { SnapshotsEnabled: input.SnapshotsEnabled }),
  };
};

/**
 * serializeAws_json1_1ApplicationSnapshotConfigurationUpdate
 */
const se_ApplicationSnapshotConfigurationUpdate = (
  input: ApplicationSnapshotConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotsEnabledUpdate != null && { SnapshotsEnabledUpdate: input.SnapshotsEnabledUpdate }),
  };
};

/**
 * serializeAws_json1_1CatalogConfiguration
 */
const se_CatalogConfiguration = (input: CatalogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.GlueDataCatalogConfiguration != null && {
      GlueDataCatalogConfiguration: se_GlueDataCatalogConfiguration(input.GlueDataCatalogConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1CatalogConfigurationUpdate
 */
const se_CatalogConfigurationUpdate = (input: CatalogConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.GlueDataCatalogConfigurationUpdate != null && {
      GlueDataCatalogConfigurationUpdate: se_GlueDataCatalogConfigurationUpdate(
        input.GlueDataCatalogConfigurationUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1CheckpointConfiguration
 */
const se_CheckpointConfiguration = (input: CheckpointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CheckpointInterval != null && { CheckpointInterval: input.CheckpointInterval }),
    ...(input.CheckpointingEnabled != null && { CheckpointingEnabled: input.CheckpointingEnabled }),
    ...(input.ConfigurationType != null && { ConfigurationType: input.ConfigurationType }),
    ...(input.MinPauseBetweenCheckpoints != null && { MinPauseBetweenCheckpoints: input.MinPauseBetweenCheckpoints }),
  };
};

/**
 * serializeAws_json1_1CheckpointConfigurationUpdate
 */
const se_CheckpointConfigurationUpdate = (input: CheckpointConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CheckpointIntervalUpdate != null && { CheckpointIntervalUpdate: input.CheckpointIntervalUpdate }),
    ...(input.CheckpointingEnabledUpdate != null && { CheckpointingEnabledUpdate: input.CheckpointingEnabledUpdate }),
    ...(input.ConfigurationTypeUpdate != null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
    ...(input.MinPauseBetweenCheckpointsUpdate != null && {
      MinPauseBetweenCheckpointsUpdate: input.MinPauseBetweenCheckpointsUpdate,
    }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLoggingOption
 */
const se_CloudWatchLoggingOption = (input: CloudWatchLoggingOption, context: __SerdeContext): any => {
  return {
    ...(input.LogStreamARN != null && { LogStreamARN: input.LogStreamARN }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLoggingOptions
 */
const se_CloudWatchLoggingOptions = (input: CloudWatchLoggingOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CloudWatchLoggingOption(entry, context);
    });
};

/**
 * serializeAws_json1_1CloudWatchLoggingOptionUpdate
 */
const se_CloudWatchLoggingOptionUpdate = (input: CloudWatchLoggingOptionUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLoggingOptionId != null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
    ...(input.LogStreamARNUpdate != null && { LogStreamARNUpdate: input.LogStreamARNUpdate }),
  };
};

/**
 * serializeAws_json1_1CloudWatchLoggingOptionUpdates
 */
const se_CloudWatchLoggingOptionUpdates = (input: CloudWatchLoggingOptionUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CloudWatchLoggingOptionUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1CodeContent
 */
const se_CodeContent = (input: CodeContent, context: __SerdeContext): any => {
  return {
    ...(input.S3ContentLocation != null && {
      S3ContentLocation: se_S3ContentLocation(input.S3ContentLocation, context),
    }),
    ...(input.TextContent != null && { TextContent: input.TextContent }),
    ...(input.ZipFileContent != null && { ZipFileContent: context.base64Encoder(input.ZipFileContent) }),
  };
};

/**
 * serializeAws_json1_1CodeContentUpdate
 */
const se_CodeContentUpdate = (input: CodeContentUpdate, context: __SerdeContext): any => {
  return {
    ...(input.S3ContentLocationUpdate != null && {
      S3ContentLocationUpdate: se_S3ContentLocationUpdate(input.S3ContentLocationUpdate, context),
    }),
    ...(input.TextContentUpdate != null && { TextContentUpdate: input.TextContentUpdate }),
    ...(input.ZipFileContentUpdate != null && {
      ZipFileContentUpdate: context.base64Encoder(input.ZipFileContentUpdate),
    }),
  };
};

/**
 * serializeAws_json1_1CreateApplicationPresignedUrlRequest
 */
const se_CreateApplicationPresignedUrlRequest = (
  input: CreateApplicationPresignedUrlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.SessionExpirationDurationInSeconds != null && {
      SessionExpirationDurationInSeconds: input.SessionExpirationDurationInSeconds,
    }),
    ...(input.UrlType != null && { UrlType: input.UrlType }),
  };
};

/**
 * serializeAws_json1_1CreateApplicationRequest
 */
const se_CreateApplicationRequest = (input: CreateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationConfiguration != null && {
      ApplicationConfiguration: se_ApplicationConfiguration(input.ApplicationConfiguration, context),
    }),
    ...(input.ApplicationDescription != null && { ApplicationDescription: input.ApplicationDescription }),
    ...(input.ApplicationMode != null && { ApplicationMode: input.ApplicationMode }),
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptions != null && {
      CloudWatchLoggingOptions: se_CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
    }),
    ...(input.RuntimeEnvironment != null && { RuntimeEnvironment: input.RuntimeEnvironment }),
    ...(input.ServiceExecutionRole != null && { ServiceExecutionRole: input.ServiceExecutionRole }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateApplicationSnapshotRequest
 */
const se_CreateApplicationSnapshotRequest = (input: CreateApplicationSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
  };
};

/**
 * serializeAws_json1_1CSVMappingParameters
 */
const se_CSVMappingParameters = (input: CSVMappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumnDelimiter != null && { RecordColumnDelimiter: input.RecordColumnDelimiter }),
    ...(input.RecordRowDelimiter != null && { RecordRowDelimiter: input.RecordRowDelimiter }),
  };
};

/**
 * serializeAws_json1_1CustomArtifactConfiguration
 */
const se_CustomArtifactConfiguration = (input: CustomArtifactConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ArtifactType != null && { ArtifactType: input.ArtifactType }),
    ...(input.MavenReference != null && { MavenReference: se_MavenReference(input.MavenReference, context) }),
    ...(input.S3ContentLocation != null && {
      S3ContentLocation: se_S3ContentLocation(input.S3ContentLocation, context),
    }),
  };
};

/**
 * serializeAws_json1_1CustomArtifactsConfigurationList
 */
const se_CustomArtifactsConfigurationList = (input: CustomArtifactConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomArtifactConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest
 */
const se_DeleteApplicationCloudWatchLoggingOptionRequest = (
  input: DeleteApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptionId != null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
    ...(input.ConditionalToken != null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest
 */
const se_DeleteApplicationInputProcessingConfigurationRequest = (
  input: DeleteApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.InputId != null && { InputId: input.InputId }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationOutputRequest
 */
const se_DeleteApplicationOutputRequest = (input: DeleteApplicationOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.OutputId != null && { OutputId: input.OutputId }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest
 */
const se_DeleteApplicationReferenceDataSourceRequest = (
  input: DeleteApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationRequest
 */
const se_DeleteApplicationRequest = (input: DeleteApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CreateTimestamp != null && { CreateTimestamp: Math.round(input.CreateTimestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationSnapshotRequest
 */
const se_DeleteApplicationSnapshotRequest = (input: DeleteApplicationSnapshotRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.SnapshotCreationTimestamp != null && {
      SnapshotCreationTimestamp: Math.round(input.SnapshotCreationTimestamp.getTime() / 1000),
    }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
  };
};

/**
 * serializeAws_json1_1DeleteApplicationVpcConfigurationRequest
 */
const se_DeleteApplicationVpcConfigurationRequest = (
  input: DeleteApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.ConditionalToken != null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.VpcConfigurationId != null && { VpcConfigurationId: input.VpcConfigurationId }),
  };
};

/**
 * serializeAws_json1_1DeployAsApplicationConfiguration
 */
const se_DeployAsApplicationConfiguration = (input: DeployAsApplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.S3ContentLocation != null && {
      S3ContentLocation: se_S3ContentBaseLocation(input.S3ContentLocation, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeployAsApplicationConfigurationUpdate
 */
const se_DeployAsApplicationConfigurationUpdate = (
  input: DeployAsApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3ContentLocationUpdate != null && {
      S3ContentLocationUpdate: se_S3ContentBaseLocationUpdate(input.S3ContentLocationUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeApplicationRequest
 */
const se_DescribeApplicationRequest = (input: DescribeApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.IncludeAdditionalDetails != null && { IncludeAdditionalDetails: input.IncludeAdditionalDetails }),
  };
};

/**
 * serializeAws_json1_1DescribeApplicationSnapshotRequest
 */
const se_DescribeApplicationSnapshotRequest = (
  input: DescribeApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.SnapshotName != null && { SnapshotName: input.SnapshotName }),
  };
};

/**
 * serializeAws_json1_1DescribeApplicationVersionRequest
 */
const se_DescribeApplicationVersionRequest = (
  input: DescribeApplicationVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.ApplicationVersionId != null && { ApplicationVersionId: input.ApplicationVersionId }),
  };
};

/**
 * serializeAws_json1_1DestinationSchema
 */
const se_DestinationSchema = (input: DestinationSchema, context: __SerdeContext): any => {
  return {
    ...(input.RecordFormatType != null && { RecordFormatType: input.RecordFormatType }),
  };
};

/**
 * serializeAws_json1_1DiscoverInputSchemaRequest
 */
const se_DiscoverInputSchemaRequest = (input: DiscoverInputSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.InputProcessingConfiguration != null && {
      InputProcessingConfiguration: se_InputProcessingConfiguration(input.InputProcessingConfiguration, context),
    }),
    ...(input.InputStartingPositionConfiguration != null && {
      InputStartingPositionConfiguration: se_InputStartingPositionConfiguration(
        input.InputStartingPositionConfiguration,
        context
      ),
    }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.S3Configuration != null && { S3Configuration: se_S3Configuration(input.S3Configuration, context) }),
    ...(input.ServiceExecutionRole != null && { ServiceExecutionRole: input.ServiceExecutionRole }),
  };
};

/**
 * serializeAws_json1_1EnvironmentProperties
 */
const se_EnvironmentProperties = (input: EnvironmentProperties, context: __SerdeContext): any => {
  return {
    ...(input.PropertyGroups != null && { PropertyGroups: se_PropertyGroups(input.PropertyGroups, context) }),
  };
};

/**
 * serializeAws_json1_1EnvironmentPropertyUpdates
 */
const se_EnvironmentPropertyUpdates = (input: EnvironmentPropertyUpdates, context: __SerdeContext): any => {
  return {
    ...(input.PropertyGroups != null && { PropertyGroups: se_PropertyGroups(input.PropertyGroups, context) }),
  };
};

/**
 * serializeAws_json1_1FlinkApplicationConfiguration
 */
const se_FlinkApplicationConfiguration = (input: FlinkApplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CheckpointConfiguration != null && {
      CheckpointConfiguration: se_CheckpointConfiguration(input.CheckpointConfiguration, context),
    }),
    ...(input.MonitoringConfiguration != null && {
      MonitoringConfiguration: se_MonitoringConfiguration(input.MonitoringConfiguration, context),
    }),
    ...(input.ParallelismConfiguration != null && {
      ParallelismConfiguration: se_ParallelismConfiguration(input.ParallelismConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1FlinkApplicationConfigurationUpdate
 */
const se_FlinkApplicationConfigurationUpdate = (
  input: FlinkApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointConfigurationUpdate != null && {
      CheckpointConfigurationUpdate: se_CheckpointConfigurationUpdate(input.CheckpointConfigurationUpdate, context),
    }),
    ...(input.MonitoringConfigurationUpdate != null && {
      MonitoringConfigurationUpdate: se_MonitoringConfigurationUpdate(input.MonitoringConfigurationUpdate, context),
    }),
    ...(input.ParallelismConfigurationUpdate != null && {
      ParallelismConfigurationUpdate: se_ParallelismConfigurationUpdate(input.ParallelismConfigurationUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1FlinkRunConfiguration
 */
const se_FlinkRunConfiguration = (input: FlinkRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowNonRestoredState != null && { AllowNonRestoredState: input.AllowNonRestoredState }),
  };
};

/**
 * serializeAws_json1_1GlueDataCatalogConfiguration
 */
const se_GlueDataCatalogConfiguration = (input: GlueDataCatalogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseARN != null && { DatabaseARN: input.DatabaseARN }),
  };
};

/**
 * serializeAws_json1_1GlueDataCatalogConfigurationUpdate
 */
const se_GlueDataCatalogConfigurationUpdate = (
  input: GlueDataCatalogConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseARNUpdate != null && { DatabaseARNUpdate: input.DatabaseARNUpdate }),
  };
};

/**
 * serializeAws_json1_1Input
 */
const se_Input = (input: Input, context: __SerdeContext): any => {
  return {
    ...(input.InputParallelism != null && { InputParallelism: se_InputParallelism(input.InputParallelism, context) }),
    ...(input.InputProcessingConfiguration != null && {
      InputProcessingConfiguration: se_InputProcessingConfiguration(input.InputProcessingConfiguration, context),
    }),
    ...(input.InputSchema != null && { InputSchema: se_SourceSchema(input.InputSchema, context) }),
    ...(input.KinesisFirehoseInput != null && {
      KinesisFirehoseInput: se_KinesisFirehoseInput(input.KinesisFirehoseInput, context),
    }),
    ...(input.KinesisStreamsInput != null && {
      KinesisStreamsInput: se_KinesisStreamsInput(input.KinesisStreamsInput, context),
    }),
    ...(input.NamePrefix != null && { NamePrefix: input.NamePrefix }),
  };
};

/**
 * serializeAws_json1_1InputLambdaProcessor
 */
const se_InputLambdaProcessor = (input: InputLambdaProcessor, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1InputLambdaProcessorUpdate
 */
const se_InputLambdaProcessorUpdate = (input: InputLambdaProcessorUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

/**
 * serializeAws_json1_1InputParallelism
 */
const se_InputParallelism = (input: InputParallelism, context: __SerdeContext): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
  };
};

/**
 * serializeAws_json1_1InputParallelismUpdate
 */
const se_InputParallelismUpdate = (input: InputParallelismUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CountUpdate != null && { CountUpdate: input.CountUpdate }),
  };
};

/**
 * serializeAws_json1_1InputProcessingConfiguration
 */
const se_InputProcessingConfiguration = (input: InputProcessingConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InputLambdaProcessor != null && {
      InputLambdaProcessor: se_InputLambdaProcessor(input.InputLambdaProcessor, context),
    }),
  };
};

/**
 * serializeAws_json1_1InputProcessingConfigurationUpdate
 */
const se_InputProcessingConfigurationUpdate = (
  input: InputProcessingConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessorUpdate != null && {
      InputLambdaProcessorUpdate: se_InputLambdaProcessorUpdate(input.InputLambdaProcessorUpdate, context),
    }),
  };
};

/**
 * serializeAws_json1_1Inputs
 */
const se_Inputs = (input: Input[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Input(entry, context);
    });
};

/**
 * serializeAws_json1_1InputSchemaUpdate
 */
const se_InputSchemaUpdate = (input: InputSchemaUpdate, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumnUpdates != null && {
      RecordColumnUpdates: se_RecordColumns(input.RecordColumnUpdates, context),
    }),
    ...(input.RecordEncodingUpdate != null && { RecordEncodingUpdate: input.RecordEncodingUpdate }),
    ...(input.RecordFormatUpdate != null && { RecordFormatUpdate: se_RecordFormat(input.RecordFormatUpdate, context) }),
  };
};

/**
 * serializeAws_json1_1InputStartingPositionConfiguration
 */
const se_InputStartingPositionConfiguration = (
  input: InputStartingPositionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputStartingPosition != null && { InputStartingPosition: input.InputStartingPosition }),
  };
};

/**
 * serializeAws_json1_1InputUpdate
 */
const se_InputUpdate = (input: InputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.InputId != null && { InputId: input.InputId }),
    ...(input.InputParallelismUpdate != null && {
      InputParallelismUpdate: se_InputParallelismUpdate(input.InputParallelismUpdate, context),
    }),
    ...(input.InputProcessingConfigurationUpdate != null && {
      InputProcessingConfigurationUpdate: se_InputProcessingConfigurationUpdate(
        input.InputProcessingConfigurationUpdate,
        context
      ),
    }),
    ...(input.InputSchemaUpdate != null && {
      InputSchemaUpdate: se_InputSchemaUpdate(input.InputSchemaUpdate, context),
    }),
    ...(input.KinesisFirehoseInputUpdate != null && {
      KinesisFirehoseInputUpdate: se_KinesisFirehoseInputUpdate(input.KinesisFirehoseInputUpdate, context),
    }),
    ...(input.KinesisStreamsInputUpdate != null && {
      KinesisStreamsInputUpdate: se_KinesisStreamsInputUpdate(input.KinesisStreamsInputUpdate, context),
    }),
    ...(input.NamePrefixUpdate != null && { NamePrefixUpdate: input.NamePrefixUpdate }),
  };
};

/**
 * serializeAws_json1_1InputUpdates
 */
const se_InputUpdates = (input: InputUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1JSONMappingParameters
 */
const se_JSONMappingParameters = (input: JSONMappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.RecordRowPath != null && { RecordRowPath: input.RecordRowPath }),
  };
};

/**
 * serializeAws_json1_1KinesisFirehoseInput
 */
const se_KinesisFirehoseInput = (input: KinesisFirehoseInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1KinesisFirehoseInputUpdate
 */
const se_KinesisFirehoseInputUpdate = (input: KinesisFirehoseInputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

/**
 * serializeAws_json1_1KinesisFirehoseOutput
 */
const se_KinesisFirehoseOutput = (input: KinesisFirehoseOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1KinesisFirehoseOutputUpdate
 */
const se_KinesisFirehoseOutputUpdate = (input: KinesisFirehoseOutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

/**
 * serializeAws_json1_1KinesisStreamsInput
 */
const se_KinesisStreamsInput = (input: KinesisStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1KinesisStreamsInputUpdate
 */
const se_KinesisStreamsInputUpdate = (input: KinesisStreamsInputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

/**
 * serializeAws_json1_1KinesisStreamsOutput
 */
const se_KinesisStreamsOutput = (input: KinesisStreamsOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1KinesisStreamsOutputUpdate
 */
const se_KinesisStreamsOutputUpdate = (input: KinesisStreamsOutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

/**
 * serializeAws_json1_1LambdaOutput
 */
const se_LambdaOutput = (input: LambdaOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1LambdaOutputUpdate
 */
const se_LambdaOutputUpdate = (input: LambdaOutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate != null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

/**
 * serializeAws_json1_1ListApplicationSnapshotsRequest
 */
const se_ListApplicationSnapshotsRequest = (input: ListApplicationSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListApplicationsRequest
 */
const se_ListApplicationsRequest = (input: ListApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListApplicationVersionsRequest
 */
const se_ListApplicationVersionsRequest = (input: ListApplicationVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1MappingParameters
 */
const se_MappingParameters = (input: MappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.CSVMappingParameters != null && {
      CSVMappingParameters: se_CSVMappingParameters(input.CSVMappingParameters, context),
    }),
    ...(input.JSONMappingParameters != null && {
      JSONMappingParameters: se_JSONMappingParameters(input.JSONMappingParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1MavenReference
 */
const se_MavenReference = (input: MavenReference, context: __SerdeContext): any => {
  return {
    ...(input.ArtifactId != null && { ArtifactId: input.ArtifactId }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1MonitoringConfiguration
 */
const se_MonitoringConfiguration = (input: MonitoringConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationType != null && { ConfigurationType: input.ConfigurationType }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.MetricsLevel != null && { MetricsLevel: input.MetricsLevel }),
  };
};

/**
 * serializeAws_json1_1MonitoringConfigurationUpdate
 */
const se_MonitoringConfigurationUpdate = (input: MonitoringConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationTypeUpdate != null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
    ...(input.LogLevelUpdate != null && { LogLevelUpdate: input.LogLevelUpdate }),
    ...(input.MetricsLevelUpdate != null && { MetricsLevelUpdate: input.MetricsLevelUpdate }),
  };
};

/**
 * serializeAws_json1_1Output
 */
const se_Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.DestinationSchema != null && {
      DestinationSchema: se_DestinationSchema(input.DestinationSchema, context),
    }),
    ...(input.KinesisFirehoseOutput != null && {
      KinesisFirehoseOutput: se_KinesisFirehoseOutput(input.KinesisFirehoseOutput, context),
    }),
    ...(input.KinesisStreamsOutput != null && {
      KinesisStreamsOutput: se_KinesisStreamsOutput(input.KinesisStreamsOutput, context),
    }),
    ...(input.LambdaOutput != null && { LambdaOutput: se_LambdaOutput(input.LambdaOutput, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1Outputs
 */
const se_Outputs = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Output(entry, context);
    });
};

/**
 * serializeAws_json1_1OutputUpdate
 */
const se_OutputUpdate = (input: OutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.DestinationSchemaUpdate != null && {
      DestinationSchemaUpdate: se_DestinationSchema(input.DestinationSchemaUpdate, context),
    }),
    ...(input.KinesisFirehoseOutputUpdate != null && {
      KinesisFirehoseOutputUpdate: se_KinesisFirehoseOutputUpdate(input.KinesisFirehoseOutputUpdate, context),
    }),
    ...(input.KinesisStreamsOutputUpdate != null && {
      KinesisStreamsOutputUpdate: se_KinesisStreamsOutputUpdate(input.KinesisStreamsOutputUpdate, context),
    }),
    ...(input.LambdaOutputUpdate != null && {
      LambdaOutputUpdate: se_LambdaOutputUpdate(input.LambdaOutputUpdate, context),
    }),
    ...(input.NameUpdate != null && { NameUpdate: input.NameUpdate }),
    ...(input.OutputId != null && { OutputId: input.OutputId }),
  };
};

/**
 * serializeAws_json1_1OutputUpdates
 */
const se_OutputUpdates = (input: OutputUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1ParallelismConfiguration
 */
const se_ParallelismConfiguration = (input: ParallelismConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingEnabled != null && { AutoScalingEnabled: input.AutoScalingEnabled }),
    ...(input.ConfigurationType != null && { ConfigurationType: input.ConfigurationType }),
    ...(input.Parallelism != null && { Parallelism: input.Parallelism }),
    ...(input.ParallelismPerKPU != null && { ParallelismPerKPU: input.ParallelismPerKPU }),
  };
};

/**
 * serializeAws_json1_1ParallelismConfigurationUpdate
 */
const se_ParallelismConfigurationUpdate = (input: ParallelismConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingEnabledUpdate != null && { AutoScalingEnabledUpdate: input.AutoScalingEnabledUpdate }),
    ...(input.ConfigurationTypeUpdate != null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
    ...(input.ParallelismPerKPUUpdate != null && { ParallelismPerKPUUpdate: input.ParallelismPerKPUUpdate }),
    ...(input.ParallelismUpdate != null && { ParallelismUpdate: input.ParallelismUpdate }),
  };
};

/**
 * serializeAws_json1_1PropertyGroup
 */
const se_PropertyGroup = (input: PropertyGroup, context: __SerdeContext): any => {
  return {
    ...(input.PropertyGroupId != null && { PropertyGroupId: input.PropertyGroupId }),
    ...(input.PropertyMap != null && { PropertyMap: se_PropertyMap(input.PropertyMap, context) }),
  };
};

/**
 * serializeAws_json1_1PropertyGroups
 */
const se_PropertyGroups = (input: PropertyGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PropertyGroup(entry, context);
    });
};

/**
 * serializeAws_json1_1PropertyMap
 */
const se_PropertyMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RecordColumn
 */
const se_RecordColumn = (input: RecordColumn, context: __SerdeContext): any => {
  return {
    ...(input.Mapping != null && { Mapping: input.Mapping }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SqlType != null && { SqlType: input.SqlType }),
  };
};

/**
 * serializeAws_json1_1RecordColumns
 */
const se_RecordColumns = (input: RecordColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RecordColumn(entry, context);
    });
};

/**
 * serializeAws_json1_1RecordFormat
 */
const se_RecordFormat = (input: RecordFormat, context: __SerdeContext): any => {
  return {
    ...(input.MappingParameters != null && {
      MappingParameters: se_MappingParameters(input.MappingParameters, context),
    }),
    ...(input.RecordFormatType != null && { RecordFormatType: input.RecordFormatType }),
  };
};

/**
 * serializeAws_json1_1ReferenceDataSource
 */
const se_ReferenceDataSource = (input: ReferenceDataSource, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceSchema != null && { ReferenceSchema: se_SourceSchema(input.ReferenceSchema, context) }),
    ...(input.S3ReferenceDataSource != null && {
      S3ReferenceDataSource: se_S3ReferenceDataSource(input.S3ReferenceDataSource, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_json1_1ReferenceDataSources
 */
const se_ReferenceDataSources = (input: ReferenceDataSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReferenceDataSource(entry, context);
    });
};

/**
 * serializeAws_json1_1ReferenceDataSourceUpdate
 */
const se_ReferenceDataSourceUpdate = (input: ReferenceDataSourceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceId != null && { ReferenceId: input.ReferenceId }),
    ...(input.ReferenceSchemaUpdate != null && {
      ReferenceSchemaUpdate: se_SourceSchema(input.ReferenceSchemaUpdate, context),
    }),
    ...(input.S3ReferenceDataSourceUpdate != null && {
      S3ReferenceDataSourceUpdate: se_S3ReferenceDataSourceUpdate(input.S3ReferenceDataSourceUpdate, context),
    }),
    ...(input.TableNameUpdate != null && { TableNameUpdate: input.TableNameUpdate }),
  };
};

/**
 * serializeAws_json1_1ReferenceDataSourceUpdates
 */
const se_ReferenceDataSourceUpdates = (input: ReferenceDataSourceUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ReferenceDataSourceUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1RollbackApplicationRequest
 */
const se_RollbackApplicationRequest = (input: RollbackApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
  };
};

/**
 * serializeAws_json1_1RunConfiguration
 */
const se_RunConfiguration = (input: RunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationRestoreConfiguration != null && {
      ApplicationRestoreConfiguration: se_ApplicationRestoreConfiguration(
        input.ApplicationRestoreConfiguration,
        context
      ),
    }),
    ...(input.FlinkRunConfiguration != null && {
      FlinkRunConfiguration: se_FlinkRunConfiguration(input.FlinkRunConfiguration, context),
    }),
    ...(input.SqlRunConfigurations != null && {
      SqlRunConfigurations: se_SqlRunConfigurations(input.SqlRunConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1RunConfigurationUpdate
 */
const se_RunConfigurationUpdate = (input: RunConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationRestoreConfiguration != null && {
      ApplicationRestoreConfiguration: se_ApplicationRestoreConfiguration(
        input.ApplicationRestoreConfiguration,
        context
      ),
    }),
    ...(input.FlinkRunConfiguration != null && {
      FlinkRunConfiguration: se_FlinkRunConfiguration(input.FlinkRunConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1S3Configuration
 */
const se_S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.FileKey != null && { FileKey: input.FileKey }),
  };
};

/**
 * serializeAws_json1_1S3ContentBaseLocation
 */
const se_S3ContentBaseLocation = (input: S3ContentBaseLocation, context: __SerdeContext): any => {
  return {
    ...(input.BasePath != null && { BasePath: input.BasePath }),
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
  };
};

/**
 * serializeAws_json1_1S3ContentBaseLocationUpdate
 */
const se_S3ContentBaseLocationUpdate = (input: S3ContentBaseLocationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BasePathUpdate != null && { BasePathUpdate: input.BasePathUpdate }),
    ...(input.BucketARNUpdate != null && { BucketARNUpdate: input.BucketARNUpdate }),
  };
};

/**
 * serializeAws_json1_1S3ContentLocation
 */
const se_S3ContentLocation = (input: S3ContentLocation, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.FileKey != null && { FileKey: input.FileKey }),
    ...(input.ObjectVersion != null && { ObjectVersion: input.ObjectVersion }),
  };
};

/**
 * serializeAws_json1_1S3ContentLocationUpdate
 */
const se_S3ContentLocationUpdate = (input: S3ContentLocationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARNUpdate != null && { BucketARNUpdate: input.BucketARNUpdate }),
    ...(input.FileKeyUpdate != null && { FileKeyUpdate: input.FileKeyUpdate }),
    ...(input.ObjectVersionUpdate != null && { ObjectVersionUpdate: input.ObjectVersionUpdate }),
  };
};

/**
 * serializeAws_json1_1S3ReferenceDataSource
 */
const se_S3ReferenceDataSource = (input: S3ReferenceDataSource, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN != null && { BucketARN: input.BucketARN }),
    ...(input.FileKey != null && { FileKey: input.FileKey }),
  };
};

/**
 * serializeAws_json1_1S3ReferenceDataSourceUpdate
 */
const se_S3ReferenceDataSourceUpdate = (input: S3ReferenceDataSourceUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARNUpdate != null && { BucketARNUpdate: input.BucketARNUpdate }),
    ...(input.FileKeyUpdate != null && { FileKeyUpdate: input.FileKeyUpdate }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SourceSchema
 */
const se_SourceSchema = (input: SourceSchema, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumns != null && { RecordColumns: se_RecordColumns(input.RecordColumns, context) }),
    ...(input.RecordEncoding != null && { RecordEncoding: input.RecordEncoding }),
    ...(input.RecordFormat != null && { RecordFormat: se_RecordFormat(input.RecordFormat, context) }),
  };
};

/**
 * serializeAws_json1_1SqlApplicationConfiguration
 */
const se_SqlApplicationConfiguration = (input: SqlApplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Inputs != null && { Inputs: se_Inputs(input.Inputs, context) }),
    ...(input.Outputs != null && { Outputs: se_Outputs(input.Outputs, context) }),
    ...(input.ReferenceDataSources != null && {
      ReferenceDataSources: se_ReferenceDataSources(input.ReferenceDataSources, context),
    }),
  };
};

/**
 * serializeAws_json1_1SqlApplicationConfigurationUpdate
 */
const se_SqlApplicationConfigurationUpdate = (
  input: SqlApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputUpdates != null && { InputUpdates: se_InputUpdates(input.InputUpdates, context) }),
    ...(input.OutputUpdates != null && { OutputUpdates: se_OutputUpdates(input.OutputUpdates, context) }),
    ...(input.ReferenceDataSourceUpdates != null && {
      ReferenceDataSourceUpdates: se_ReferenceDataSourceUpdates(input.ReferenceDataSourceUpdates, context),
    }),
  };
};

/**
 * serializeAws_json1_1SqlRunConfiguration
 */
const se_SqlRunConfiguration = (input: SqlRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InputId != null && { InputId: input.InputId }),
    ...(input.InputStartingPositionConfiguration != null && {
      InputStartingPositionConfiguration: se_InputStartingPositionConfiguration(
        input.InputStartingPositionConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1SqlRunConfigurations
 */
const se_SqlRunConfigurations = (input: SqlRunConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SqlRunConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1StartApplicationRequest
 */
const se_StartApplicationRequest = (input: StartApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.RunConfiguration != null && { RunConfiguration: se_RunConfiguration(input.RunConfiguration, context) }),
  };
};

/**
 * serializeAws_json1_1StopApplicationRequest
 */
const se_StopApplicationRequest = (input: StopApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.Force != null && { Force: input.Force }),
  };
};

/**
 * serializeAws_json1_1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest
 */
const se_UpdateApplicationMaintenanceConfigurationRequest = (
  input: UpdateApplicationMaintenanceConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationMaintenanceConfigurationUpdate != null && {
      ApplicationMaintenanceConfigurationUpdate: se_ApplicationMaintenanceConfigurationUpdate(
        input.ApplicationMaintenanceConfigurationUpdate,
        context
      ),
    }),
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
  };
};

/**
 * serializeAws_json1_1UpdateApplicationRequest
 */
const se_UpdateApplicationRequest = (input: UpdateApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationConfigurationUpdate != null && {
      ApplicationConfigurationUpdate: se_ApplicationConfigurationUpdate(input.ApplicationConfigurationUpdate, context),
    }),
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptionUpdates != null && {
      CloudWatchLoggingOptionUpdates: se_CloudWatchLoggingOptionUpdates(input.CloudWatchLoggingOptionUpdates, context),
    }),
    ...(input.ConditionalToken != null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId != null && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId,
    }),
    ...(input.RunConfigurationUpdate != null && {
      RunConfigurationUpdate: se_RunConfigurationUpdate(input.RunConfigurationUpdate, context),
    }),
    ...(input.ServiceExecutionRoleUpdate != null && { ServiceExecutionRoleUpdate: input.ServiceExecutionRoleUpdate }),
  };
};

/**
 * serializeAws_json1_1VpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
  };
};

/**
 * serializeAws_json1_1VpcConfigurations
 */
const se_VpcConfigurations = (input: VpcConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VpcConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1VpcConfigurationUpdate
 */
const se_VpcConfigurationUpdate = (input: VpcConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIdUpdates != null && {
      SecurityGroupIdUpdates: se_SecurityGroupIds(input.SecurityGroupIdUpdates, context),
    }),
    ...(input.SubnetIdUpdates != null && { SubnetIdUpdates: se_SubnetIds(input.SubnetIdUpdates, context) }),
    ...(input.VpcConfigurationId != null && { VpcConfigurationId: input.VpcConfigurationId }),
  };
};

/**
 * serializeAws_json1_1VpcConfigurationUpdates
 */
const se_VpcConfigurationUpdates = (input: VpcConfigurationUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VpcConfigurationUpdate(entry, context);
    });
};

/**
 * serializeAws_json1_1ZeppelinApplicationConfiguration
 */
const se_ZeppelinApplicationConfiguration = (input: ZeppelinApplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CatalogConfiguration != null && {
      CatalogConfiguration: se_CatalogConfiguration(input.CatalogConfiguration, context),
    }),
    ...(input.CustomArtifactsConfiguration != null && {
      CustomArtifactsConfiguration: se_CustomArtifactsConfigurationList(input.CustomArtifactsConfiguration, context),
    }),
    ...(input.DeployAsApplicationConfiguration != null && {
      DeployAsApplicationConfiguration: se_DeployAsApplicationConfiguration(
        input.DeployAsApplicationConfiguration,
        context
      ),
    }),
    ...(input.MonitoringConfiguration != null && {
      MonitoringConfiguration: se_ZeppelinMonitoringConfiguration(input.MonitoringConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1ZeppelinApplicationConfigurationUpdate
 */
const se_ZeppelinApplicationConfigurationUpdate = (
  input: ZeppelinApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogConfigurationUpdate != null && {
      CatalogConfigurationUpdate: se_CatalogConfigurationUpdate(input.CatalogConfigurationUpdate, context),
    }),
    ...(input.CustomArtifactsConfigurationUpdate != null && {
      CustomArtifactsConfigurationUpdate: se_CustomArtifactsConfigurationList(
        input.CustomArtifactsConfigurationUpdate,
        context
      ),
    }),
    ...(input.DeployAsApplicationConfigurationUpdate != null && {
      DeployAsApplicationConfigurationUpdate: se_DeployAsApplicationConfigurationUpdate(
        input.DeployAsApplicationConfigurationUpdate,
        context
      ),
    }),
    ...(input.MonitoringConfigurationUpdate != null && {
      MonitoringConfigurationUpdate: se_ZeppelinMonitoringConfigurationUpdate(
        input.MonitoringConfigurationUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1ZeppelinMonitoringConfiguration
 */
const se_ZeppelinMonitoringConfiguration = (input: ZeppelinMonitoringConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
  };
};

/**
 * serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate
 */
const se_ZeppelinMonitoringConfigurationUpdate = (
  input: ZeppelinMonitoringConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogLevelUpdate != null && { LogLevelUpdate: input.LogLevelUpdate }),
  };
};

/**
 * deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse
 */
const de_AddApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationCloudWatchLoggingOptionResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions != null
        ? de_CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse
 */
const de_AddApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputProcessingConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    InputId: __expectString(output.InputId),
    InputProcessingConfigurationDescription:
      output.InputProcessingConfigurationDescription != null
        ? de_InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddApplicationInputResponse
 */
const de_AddApplicationInputResponse = (output: any, context: __SerdeContext): AddApplicationInputResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    InputDescriptions:
      output.InputDescriptions != null ? de_InputDescriptions(output.InputDescriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddApplicationOutputResponse
 */
const de_AddApplicationOutputResponse = (output: any, context: __SerdeContext): AddApplicationOutputResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    OutputDescriptions:
      output.OutputDescriptions != null ? de_OutputDescriptions(output.OutputDescriptions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddApplicationReferenceDataSourceResponse
 */
const de_AddApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationReferenceDataSourceResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions != null
        ? de_ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddApplicationVpcConfigurationResponse
 */
const de_AddApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationVpcConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    VpcConfigurationDescription:
      output.VpcConfigurationDescription != null
        ? de_VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationCodeConfigurationDescription
 */
const de_ApplicationCodeConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationCodeConfigurationDescription => {
  return {
    CodeContentDescription:
      output.CodeContentDescription != null
        ? de_CodeContentDescription(output.CodeContentDescription, context)
        : undefined,
    CodeContentType: __expectString(output.CodeContentType),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationConfigurationDescription
 */
const de_ApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationConfigurationDescription => {
  return {
    ApplicationCodeConfigurationDescription:
      output.ApplicationCodeConfigurationDescription != null
        ? de_ApplicationCodeConfigurationDescription(output.ApplicationCodeConfigurationDescription, context)
        : undefined,
    ApplicationSnapshotConfigurationDescription:
      output.ApplicationSnapshotConfigurationDescription != null
        ? de_ApplicationSnapshotConfigurationDescription(output.ApplicationSnapshotConfigurationDescription, context)
        : undefined,
    EnvironmentPropertyDescriptions:
      output.EnvironmentPropertyDescriptions != null
        ? de_EnvironmentPropertyDescriptions(output.EnvironmentPropertyDescriptions, context)
        : undefined,
    FlinkApplicationConfigurationDescription:
      output.FlinkApplicationConfigurationDescription != null
        ? de_FlinkApplicationConfigurationDescription(output.FlinkApplicationConfigurationDescription, context)
        : undefined,
    RunConfigurationDescription:
      output.RunConfigurationDescription != null
        ? de_RunConfigurationDescription(output.RunConfigurationDescription, context)
        : undefined,
    SqlApplicationConfigurationDescription:
      output.SqlApplicationConfigurationDescription != null
        ? de_SqlApplicationConfigurationDescription(output.SqlApplicationConfigurationDescription, context)
        : undefined,
    VpcConfigurationDescriptions:
      output.VpcConfigurationDescriptions != null
        ? de_VpcConfigurationDescriptions(output.VpcConfigurationDescriptions, context)
        : undefined,
    ZeppelinApplicationConfigurationDescription:
      output.ZeppelinApplicationConfigurationDescription != null
        ? de_ZeppelinApplicationConfigurationDescription(output.ZeppelinApplicationConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationDetail
 */
const de_ApplicationDetail = (output: any, context: __SerdeContext): ApplicationDetail => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationConfigurationDescription:
      output.ApplicationConfigurationDescription != null
        ? de_ApplicationConfigurationDescription(output.ApplicationConfigurationDescription, context)
        : undefined,
    ApplicationDescription: __expectString(output.ApplicationDescription),
    ApplicationMaintenanceConfigurationDescription:
      output.ApplicationMaintenanceConfigurationDescription != null
        ? de_ApplicationMaintenanceConfigurationDescription(
            output.ApplicationMaintenanceConfigurationDescription,
            context
          )
        : undefined,
    ApplicationMode: __expectString(output.ApplicationMode),
    ApplicationName: __expectString(output.ApplicationName),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    ApplicationVersionRolledBackFrom: __expectLong(output.ApplicationVersionRolledBackFrom),
    ApplicationVersionRolledBackTo: __expectLong(output.ApplicationVersionRolledBackTo),
    ApplicationVersionUpdatedFrom: __expectLong(output.ApplicationVersionUpdatedFrom),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions != null
        ? de_CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
    ConditionalToken: __expectString(output.ConditionalToken),
    CreateTimestamp:
      output.CreateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateTimestamp)))
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTimestamp)))
        : undefined,
    RuntimeEnvironment: __expectString(output.RuntimeEnvironment),
    ServiceExecutionRole: __expectString(output.ServiceExecutionRole),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription
 */
const de_ApplicationMaintenanceConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationMaintenanceConfigurationDescription => {
  return {
    ApplicationMaintenanceWindowEndTime: __expectString(output.ApplicationMaintenanceWindowEndTime),
    ApplicationMaintenanceWindowStartTime: __expectString(output.ApplicationMaintenanceWindowStartTime),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationRestoreConfiguration
 */
const de_ApplicationRestoreConfiguration = (output: any, context: __SerdeContext): ApplicationRestoreConfiguration => {
  return {
    ApplicationRestoreType: __expectString(output.ApplicationRestoreType),
    SnapshotName: __expectString(output.SnapshotName),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationSnapshotConfigurationDescription
 */
const de_ApplicationSnapshotConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationSnapshotConfigurationDescription => {
  return {
    SnapshotsEnabled: __expectBoolean(output.SnapshotsEnabled),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationSummaries
 */
const de_ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApplicationSummary
 */
const de_ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationMode: __expectString(output.ApplicationMode),
    ApplicationName: __expectString(output.ApplicationName),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    RuntimeEnvironment: __expectString(output.RuntimeEnvironment),
  } as any;
};

/**
 * deserializeAws_json1_1ApplicationVersionSummaries
 */
const de_ApplicationVersionSummaries = (output: any, context: __SerdeContext): ApplicationVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ApplicationVersionSummary
 */
const de_ApplicationVersionSummary = (output: any, context: __SerdeContext): ApplicationVersionSummary => {
  return {
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
  } as any;
};

/**
 * deserializeAws_json1_1CatalogConfigurationDescription
 */
const de_CatalogConfigurationDescription = (output: any, context: __SerdeContext): CatalogConfigurationDescription => {
  return {
    GlueDataCatalogConfigurationDescription:
      output.GlueDataCatalogConfigurationDescription != null
        ? de_GlueDataCatalogConfigurationDescription(output.GlueDataCatalogConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CheckpointConfigurationDescription
 */
const de_CheckpointConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CheckpointConfigurationDescription => {
  return {
    CheckpointInterval: __expectLong(output.CheckpointInterval),
    CheckpointingEnabled: __expectBoolean(output.CheckpointingEnabled),
    ConfigurationType: __expectString(output.ConfigurationType),
    MinPauseBetweenCheckpoints: __expectLong(output.MinPauseBetweenCheckpoints),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLoggingOptionDescription
 */
const de_CloudWatchLoggingOptionDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription => {
  return {
    CloudWatchLoggingOptionId: __expectString(output.CloudWatchLoggingOptionId),
    LogStreamARN: __expectString(output.LogStreamARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1CloudWatchLoggingOptionDescriptions
 */
const de_CloudWatchLoggingOptionDescriptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CloudWatchLoggingOptionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CodeContentDescription
 */
const de_CodeContentDescription = (output: any, context: __SerdeContext): CodeContentDescription => {
  return {
    CodeMD5: __expectString(output.CodeMD5),
    CodeSize: __expectLong(output.CodeSize),
    S3ApplicationCodeLocationDescription:
      output.S3ApplicationCodeLocationDescription != null
        ? de_S3ApplicationCodeLocationDescription(output.S3ApplicationCodeLocationDescription, context)
        : undefined,
    TextContent: __expectString(output.TextContent),
  } as any;
};

/**
 * deserializeAws_json1_1CodeValidationException
 */
const de_CodeValidationException = (output: any, context: __SerdeContext): CodeValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CreateApplicationPresignedUrlResponse
 */
const de_CreateApplicationPresignedUrlResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationPresignedUrlResponse => {
  return {
    AuthorizedUrl: __expectString(output.AuthorizedUrl),
  } as any;
};

/**
 * deserializeAws_json1_1CreateApplicationResponse
 */
const de_CreateApplicationResponse = (output: any, context: __SerdeContext): CreateApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail != null ? de_ApplicationDetail(output.ApplicationDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateApplicationSnapshotResponse
 */
const de_CreateApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationSnapshotResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CSVMappingParameters
 */
const de_CSVMappingParameters = (output: any, context: __SerdeContext): CSVMappingParameters => {
  return {
    RecordColumnDelimiter: __expectString(output.RecordColumnDelimiter),
    RecordRowDelimiter: __expectString(output.RecordRowDelimiter),
  } as any;
};

/**
 * deserializeAws_json1_1CustomArtifactConfigurationDescription
 */
const de_CustomArtifactConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CustomArtifactConfigurationDescription => {
  return {
    ArtifactType: __expectString(output.ArtifactType),
    MavenReferenceDescription:
      output.MavenReferenceDescription != null
        ? de_MavenReference(output.MavenReferenceDescription, context)
        : undefined,
    S3ContentLocationDescription:
      output.S3ContentLocationDescription != null
        ? de_S3ContentLocation(output.S3ContentLocationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList
 */
const de_CustomArtifactsConfigurationDescriptionList = (
  output: any,
  context: __SerdeContext
): CustomArtifactConfigurationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomArtifactConfigurationDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse
 */
const de_DeleteApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationCloudWatchLoggingOptionResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions != null
        ? de_CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse
 */
const de_DeleteApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationInputProcessingConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationOutputResponse
 */
const de_DeleteApplicationOutputResponse = (output: any, context: __SerdeContext): DeleteApplicationOutputResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse
 */
const de_DeleteApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationReferenceDataSourceResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationResponse
 */
const de_DeleteApplicationResponse = (output: any, context: __SerdeContext): DeleteApplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationSnapshotResponse
 */
const de_DeleteApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationSnapshotResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse
 */
const de_DeleteApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationVpcConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
  } as any;
};

/**
 * deserializeAws_json1_1DeployAsApplicationConfigurationDescription
 */
const de_DeployAsApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): DeployAsApplicationConfigurationDescription => {
  return {
    S3ContentLocationDescription:
      output.S3ContentLocationDescription != null
        ? de_S3ContentBaseLocationDescription(output.S3ContentLocationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationResponse
 */
const de_DescribeApplicationResponse = (output: any, context: __SerdeContext): DescribeApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail != null ? de_ApplicationDetail(output.ApplicationDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationSnapshotResponse
 */
const de_DescribeApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationSnapshotResponse => {
  return {
    SnapshotDetails: output.SnapshotDetails != null ? de_SnapshotDetails(output.SnapshotDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeApplicationVersionResponse
 */
const de_DescribeApplicationVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationVersionResponse => {
  return {
    ApplicationVersionDetail:
      output.ApplicationVersionDetail != null
        ? de_ApplicationDetail(output.ApplicationVersionDetail, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DestinationSchema
 */
const de_DestinationSchema = (output: any, context: __SerdeContext): DestinationSchema => {
  return {
    RecordFormatType: __expectString(output.RecordFormatType),
  } as any;
};

/**
 * deserializeAws_json1_1DiscoverInputSchemaResponse
 */
const de_DiscoverInputSchemaResponse = (output: any, context: __SerdeContext): DiscoverInputSchemaResponse => {
  return {
    InputSchema: output.InputSchema != null ? de_SourceSchema(output.InputSchema, context) : undefined,
    ParsedInputRecords:
      output.ParsedInputRecords != null ? de_ParsedInputRecords(output.ParsedInputRecords, context) : undefined,
    ProcessedInputRecords:
      output.ProcessedInputRecords != null
        ? de_ProcessedInputRecords(output.ProcessedInputRecords, context)
        : undefined,
    RawInputRecords: output.RawInputRecords != null ? de_RawInputRecords(output.RawInputRecords, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EnvironmentPropertyDescriptions
 */
const de_EnvironmentPropertyDescriptions = (output: any, context: __SerdeContext): EnvironmentPropertyDescriptions => {
  return {
    PropertyGroupDescriptions:
      output.PropertyGroupDescriptions != null
        ? de_PropertyGroups(output.PropertyGroupDescriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FlinkApplicationConfigurationDescription
 */
const de_FlinkApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): FlinkApplicationConfigurationDescription => {
  return {
    CheckpointConfigurationDescription:
      output.CheckpointConfigurationDescription != null
        ? de_CheckpointConfigurationDescription(output.CheckpointConfigurationDescription, context)
        : undefined,
    JobPlanDescription: __expectString(output.JobPlanDescription),
    MonitoringConfigurationDescription:
      output.MonitoringConfigurationDescription != null
        ? de_MonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
        : undefined,
    ParallelismConfigurationDescription:
      output.ParallelismConfigurationDescription != null
        ? de_ParallelismConfigurationDescription(output.ParallelismConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FlinkRunConfiguration
 */
const de_FlinkRunConfiguration = (output: any, context: __SerdeContext): FlinkRunConfiguration => {
  return {
    AllowNonRestoredState: __expectBoolean(output.AllowNonRestoredState),
  } as any;
};

/**
 * deserializeAws_json1_1GlueDataCatalogConfigurationDescription
 */
const de_GlueDataCatalogConfigurationDescription = (
  output: any,
  context: __SerdeContext
): GlueDataCatalogConfigurationDescription => {
  return {
    DatabaseARN: __expectString(output.DatabaseARN),
  } as any;
};

/**
 * deserializeAws_json1_1InAppStreamNames
 */
const de_InAppStreamNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InputDescription
 */
const de_InputDescription = (output: any, context: __SerdeContext): InputDescription => {
  return {
    InAppStreamNames:
      output.InAppStreamNames != null ? de_InAppStreamNames(output.InAppStreamNames, context) : undefined,
    InputId: __expectString(output.InputId),
    InputParallelism:
      output.InputParallelism != null ? de_InputParallelism(output.InputParallelism, context) : undefined,
    InputProcessingConfigurationDescription:
      output.InputProcessingConfigurationDescription != null
        ? de_InputProcessingConfigurationDescription(output.InputProcessingConfigurationDescription, context)
        : undefined,
    InputSchema: output.InputSchema != null ? de_SourceSchema(output.InputSchema, context) : undefined,
    InputStartingPositionConfiguration:
      output.InputStartingPositionConfiguration != null
        ? de_InputStartingPositionConfiguration(output.InputStartingPositionConfiguration, context)
        : undefined,
    KinesisFirehoseInputDescription:
      output.KinesisFirehoseInputDescription != null
        ? de_KinesisFirehoseInputDescription(output.KinesisFirehoseInputDescription, context)
        : undefined,
    KinesisStreamsInputDescription:
      output.KinesisStreamsInputDescription != null
        ? de_KinesisStreamsInputDescription(output.KinesisStreamsInputDescription, context)
        : undefined,
    NamePrefix: __expectString(output.NamePrefix),
  } as any;
};

/**
 * deserializeAws_json1_1InputDescriptions
 */
const de_InputDescriptions = (output: any, context: __SerdeContext): InputDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InputLambdaProcessorDescription
 */
const de_InputLambdaProcessorDescription = (output: any, context: __SerdeContext): InputLambdaProcessorDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1InputParallelism
 */
const de_InputParallelism = (output: any, context: __SerdeContext): InputParallelism => {
  return {
    Count: __expectInt32(output.Count),
  } as any;
};

/**
 * deserializeAws_json1_1InputProcessingConfigurationDescription
 */
const de_InputProcessingConfigurationDescription = (
  output: any,
  context: __SerdeContext
): InputProcessingConfigurationDescription => {
  return {
    InputLambdaProcessorDescription:
      output.InputLambdaProcessorDescription != null
        ? de_InputLambdaProcessorDescription(output.InputLambdaProcessorDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InputStartingPositionConfiguration
 */
const de_InputStartingPositionConfiguration = (
  output: any,
  context: __SerdeContext
): InputStartingPositionConfiguration => {
  return {
    InputStartingPosition: __expectString(output.InputStartingPosition),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidApplicationConfigurationException
 */
const de_InvalidApplicationConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidArgumentException
 */
const de_InvalidArgumentException = (output: any, context: __SerdeContext): InvalidArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1JSONMappingParameters
 */
const de_JSONMappingParameters = (output: any, context: __SerdeContext): JSONMappingParameters => {
  return {
    RecordRowPath: __expectString(output.RecordRowPath),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisFirehoseInputDescription
 */
const de_KinesisFirehoseInputDescription = (output: any, context: __SerdeContext): KinesisFirehoseInputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisFirehoseOutputDescription
 */
const de_KinesisFirehoseOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisStreamsInputDescription
 */
const de_KinesisStreamsInputDescription = (output: any, context: __SerdeContext): KinesisStreamsInputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1KinesisStreamsOutputDescription
 */
const de_KinesisStreamsOutputDescription = (output: any, context: __SerdeContext): KinesisStreamsOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1LambdaOutputDescription
 */
const de_LambdaOutputDescription = (output: any, context: __SerdeContext): LambdaOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListApplicationSnapshotsResponse
 */
const de_ListApplicationSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SnapshotSummaries:
      output.SnapshotSummaries != null ? de_SnapshotSummaries(output.SnapshotSummaries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListApplicationsResponse
 */
const de_ListApplicationsResponse = (output: any, context: __SerdeContext): ListApplicationsResponse => {
  return {
    ApplicationSummaries:
      output.ApplicationSummaries != null ? de_ApplicationSummaries(output.ApplicationSummaries, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListApplicationVersionsResponse
 */
const de_ListApplicationVersionsResponse = (output: any, context: __SerdeContext): ListApplicationVersionsResponse => {
  return {
    ApplicationVersionSummaries:
      output.ApplicationVersionSummaries != null
        ? de_ApplicationVersionSummaries(output.ApplicationVersionSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MappingParameters
 */
const de_MappingParameters = (output: any, context: __SerdeContext): MappingParameters => {
  return {
    CSVMappingParameters:
      output.CSVMappingParameters != null ? de_CSVMappingParameters(output.CSVMappingParameters, context) : undefined,
    JSONMappingParameters:
      output.JSONMappingParameters != null
        ? de_JSONMappingParameters(output.JSONMappingParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MavenReference
 */
const de_MavenReference = (output: any, context: __SerdeContext): MavenReference => {
  return {
    ArtifactId: __expectString(output.ArtifactId),
    GroupId: __expectString(output.GroupId),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1MonitoringConfigurationDescription
 */
const de_MonitoringConfigurationDescription = (
  output: any,
  context: __SerdeContext
): MonitoringConfigurationDescription => {
  return {
    ConfigurationType: __expectString(output.ConfigurationType),
    LogLevel: __expectString(output.LogLevel),
    MetricsLevel: __expectString(output.MetricsLevel),
  } as any;
};

/**
 * deserializeAws_json1_1OutputDescription
 */
const de_OutputDescription = (output: any, context: __SerdeContext): OutputDescription => {
  return {
    DestinationSchema:
      output.DestinationSchema != null ? de_DestinationSchema(output.DestinationSchema, context) : undefined,
    KinesisFirehoseOutputDescription:
      output.KinesisFirehoseOutputDescription != null
        ? de_KinesisFirehoseOutputDescription(output.KinesisFirehoseOutputDescription, context)
        : undefined,
    KinesisStreamsOutputDescription:
      output.KinesisStreamsOutputDescription != null
        ? de_KinesisStreamsOutputDescription(output.KinesisStreamsOutputDescription, context)
        : undefined,
    LambdaOutputDescription:
      output.LambdaOutputDescription != null
        ? de_LambdaOutputDescription(output.LambdaOutputDescription, context)
        : undefined,
    Name: __expectString(output.Name),
    OutputId: __expectString(output.OutputId),
  } as any;
};

/**
 * deserializeAws_json1_1OutputDescriptions
 */
const de_OutputDescriptions = (output: any, context: __SerdeContext): OutputDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParallelismConfigurationDescription
 */
const de_ParallelismConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ParallelismConfigurationDescription => {
  return {
    AutoScalingEnabled: __expectBoolean(output.AutoScalingEnabled),
    ConfigurationType: __expectString(output.ConfigurationType),
    CurrentParallelism: __expectInt32(output.CurrentParallelism),
    Parallelism: __expectInt32(output.Parallelism),
    ParallelismPerKPU: __expectInt32(output.ParallelismPerKPU),
  } as any;
};

/**
 * deserializeAws_json1_1ParsedInputRecord
 */
const de_ParsedInputRecord = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ParsedInputRecords
 */
const de_ParsedInputRecords = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParsedInputRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProcessedInputRecords
 */
const de_ProcessedInputRecords = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1PropertyGroup
 */
const de_PropertyGroup = (output: any, context: __SerdeContext): PropertyGroup => {
  return {
    PropertyGroupId: __expectString(output.PropertyGroupId),
    PropertyMap: output.PropertyMap != null ? de_PropertyMap(output.PropertyMap, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PropertyGroups
 */
const de_PropertyGroups = (output: any, context: __SerdeContext): PropertyGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PropertyGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PropertyMap
 */
const de_PropertyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1RawInputRecords
 */
const de_RawInputRecords = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1RecordColumn
 */
const de_RecordColumn = (output: any, context: __SerdeContext): RecordColumn => {
  return {
    Mapping: __expectString(output.Mapping),
    Name: __expectString(output.Name),
    SqlType: __expectString(output.SqlType),
  } as any;
};

/**
 * deserializeAws_json1_1RecordColumns
 */
const de_RecordColumns = (output: any, context: __SerdeContext): RecordColumn[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecordColumn(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecordFormat
 */
const de_RecordFormat = (output: any, context: __SerdeContext): RecordFormat => {
  return {
    MappingParameters:
      output.MappingParameters != null ? de_MappingParameters(output.MappingParameters, context) : undefined,
    RecordFormatType: __expectString(output.RecordFormatType),
  } as any;
};

/**
 * deserializeAws_json1_1ReferenceDataSourceDescription
 */
const de_ReferenceDataSourceDescription = (output: any, context: __SerdeContext): ReferenceDataSourceDescription => {
  return {
    ReferenceId: __expectString(output.ReferenceId),
    ReferenceSchema: output.ReferenceSchema != null ? de_SourceSchema(output.ReferenceSchema, context) : undefined,
    S3ReferenceDataSourceDescription:
      output.S3ReferenceDataSourceDescription != null
        ? de_S3ReferenceDataSourceDescription(output.S3ReferenceDataSourceDescription, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_json1_1ReferenceDataSourceDescriptions
 */
const de_ReferenceDataSourceDescriptions = (output: any, context: __SerdeContext): ReferenceDataSourceDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReferenceDataSourceDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceProvisionedThroughputExceededException
 */
const de_ResourceProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ResourceProvisionedThroughputExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1RollbackApplicationResponse
 */
const de_RollbackApplicationResponse = (output: any, context: __SerdeContext): RollbackApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail != null ? de_ApplicationDetail(output.ApplicationDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RunConfigurationDescription
 */
const de_RunConfigurationDescription = (output: any, context: __SerdeContext): RunConfigurationDescription => {
  return {
    ApplicationRestoreConfigurationDescription:
      output.ApplicationRestoreConfigurationDescription != null
        ? de_ApplicationRestoreConfiguration(output.ApplicationRestoreConfigurationDescription, context)
        : undefined,
    FlinkRunConfigurationDescription:
      output.FlinkRunConfigurationDescription != null
        ? de_FlinkRunConfiguration(output.FlinkRunConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1S3ApplicationCodeLocationDescription
 */
const de_S3ApplicationCodeLocationDescription = (
  output: any,
  context: __SerdeContext
): S3ApplicationCodeLocationDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ObjectVersion: __expectString(output.ObjectVersion),
  } as any;
};

/**
 * deserializeAws_json1_1S3ContentBaseLocationDescription
 */
const de_S3ContentBaseLocationDescription = (
  output: any,
  context: __SerdeContext
): S3ContentBaseLocationDescription => {
  return {
    BasePath: __expectString(output.BasePath),
    BucketARN: __expectString(output.BucketARN),
  } as any;
};

/**
 * deserializeAws_json1_1S3ContentLocation
 */
const de_S3ContentLocation = (output: any, context: __SerdeContext): S3ContentLocation => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ObjectVersion: __expectString(output.ObjectVersion),
  } as any;
};

/**
 * deserializeAws_json1_1S3ReferenceDataSourceDescription
 */
const de_S3ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): S3ReferenceDataSourceDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ReferenceRoleARN: __expectString(output.ReferenceRoleARN),
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ServiceUnavailableException
 */
const de_ServiceUnavailableException = (output: any, context: __SerdeContext): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotDetails
 */
const de_SnapshotDetails = (output: any, context: __SerdeContext): SnapshotDetails => {
  return {
    ApplicationVersionId: __expectLong(output.ApplicationVersionId),
    SnapshotCreationTimestamp:
      output.SnapshotCreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SnapshotCreationTimestamp)))
        : undefined,
    SnapshotName: __expectString(output.SnapshotName),
    SnapshotStatus: __expectString(output.SnapshotStatus),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotSummaries
 */
const de_SnapshotSummaries = (output: any, context: __SerdeContext): SnapshotDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SnapshotDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SourceSchema
 */
const de_SourceSchema = (output: any, context: __SerdeContext): SourceSchema => {
  return {
    RecordColumns: output.RecordColumns != null ? de_RecordColumns(output.RecordColumns, context) : undefined,
    RecordEncoding: __expectString(output.RecordEncoding),
    RecordFormat: output.RecordFormat != null ? de_RecordFormat(output.RecordFormat, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SqlApplicationConfigurationDescription
 */
const de_SqlApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): SqlApplicationConfigurationDescription => {
  return {
    InputDescriptions:
      output.InputDescriptions != null ? de_InputDescriptions(output.InputDescriptions, context) : undefined,
    OutputDescriptions:
      output.OutputDescriptions != null ? de_OutputDescriptions(output.OutputDescriptions, context) : undefined,
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions != null
        ? de_ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartApplicationResponse
 */
const de_StartApplicationResponse = (output: any, context: __SerdeContext): StartApplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StopApplicationResponse
 */
const de_StopApplicationResponse = (output: any, context: __SerdeContext): StopApplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
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

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnableToDetectSchemaException
 */
const de_UnableToDetectSchemaException = (output: any, context: __SerdeContext): UnableToDetectSchemaException => {
  return {
    Message: __expectString(output.Message),
    ProcessedInputRecords:
      output.ProcessedInputRecords != null
        ? de_ProcessedInputRecords(output.ProcessedInputRecords, context)
        : undefined,
    RawInputRecords: output.RawInputRecords != null ? de_RawInputRecords(output.RawInputRecords, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse
 */
const de_UpdateApplicationMaintenanceConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationMaintenanceConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationMaintenanceConfigurationDescription:
      output.ApplicationMaintenanceConfigurationDescription != null
        ? de_ApplicationMaintenanceConfigurationDescription(
            output.ApplicationMaintenanceConfigurationDescription,
            context
          )
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateApplicationResponse
 */
const de_UpdateApplicationResponse = (output: any, context: __SerdeContext): UpdateApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail != null ? de_ApplicationDetail(output.ApplicationDetail, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VpcConfigurationDescription
 */
const de_VpcConfigurationDescription = (output: any, context: __SerdeContext): VpcConfigurationDescription => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null ? de_SecurityGroupIds(output.SecurityGroupIds, context) : undefined,
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcConfigurationId: __expectString(output.VpcConfigurationId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1VpcConfigurationDescriptions
 */
const de_VpcConfigurationDescriptions = (output: any, context: __SerdeContext): VpcConfigurationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcConfigurationDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ZeppelinApplicationConfigurationDescription
 */
const de_ZeppelinApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ZeppelinApplicationConfigurationDescription => {
  return {
    CatalogConfigurationDescription:
      output.CatalogConfigurationDescription != null
        ? de_CatalogConfigurationDescription(output.CatalogConfigurationDescription, context)
        : undefined,
    CustomArtifactsConfigurationDescription:
      output.CustomArtifactsConfigurationDescription != null
        ? de_CustomArtifactsConfigurationDescriptionList(output.CustomArtifactsConfigurationDescription, context)
        : undefined,
    DeployAsApplicationConfigurationDescription:
      output.DeployAsApplicationConfigurationDescription != null
        ? de_DeployAsApplicationConfigurationDescription(output.DeployAsApplicationConfigurationDescription, context)
        : undefined,
    MonitoringConfigurationDescription:
      output.MonitoringConfigurationDescription != null
        ? de_ZeppelinMonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription
 */
const de_ZeppelinMonitoringConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ZeppelinMonitoringConfigurationDescription => {
  return {
    LogLevel: __expectString(output.LogLevel),
  } as any;
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
