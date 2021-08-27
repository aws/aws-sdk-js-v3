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
import {
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "../commands/ListApplicationSnapshotsCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "../commands/ListApplicationVersionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
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
  CSVMappingParameters,
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
  ListApplicationVersionsRequest,
  ListApplicationVersionsResponse,
  ListApplicationsRequest,
  ListApplicationsResponse,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (
  input: AddApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationInputCommand = async (
  input: AddApplicationInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationInputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (
  input: AddApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationOutputCommand = async (
  input: AddApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (
  input: AddApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationReferenceDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationVpcConfigurationCommand = async (
  input: AddApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.AddApplicationVpcConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddApplicationVpcConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.CreateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationPresignedUrlCommand = async (
  input: CreateApplicationPresignedUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationPresignedUrl",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationPresignedUrlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationSnapshotCommand = async (
  input: CreateApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.CreateApplicationSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateApplicationSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (
  input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (
  input: DeleteApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationOutputCommand = async (
  input: DeleteApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (
  input: DeleteApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationSnapshotCommand = async (
  input: DeleteApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = async (
  input: DeleteApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteApplicationVpcConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DescribeApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationSnapshotCommand = async (
  input: DescribeApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationVersionCommand = async (
  input: DescribeApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DescribeApplicationVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeApplicationVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DiscoverInputSchemaCommand = async (
  input: DiscoverInputSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.DiscoverInputSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DiscoverInputSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListApplications",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationSnapshotsCommand = async (
  input: ListApplicationSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListApplicationSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationVersionsCommand = async (
  input: ListApplicationVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListApplicationVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListApplicationVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RollbackApplicationCommand = async (
  input: RollbackApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.RollbackApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RollbackApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.StartApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.StopApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.UpdateApplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = async (
  input: UpdateApplicationMaintenanceConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse(data, context);
  const response: AddApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddApplicationInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationInputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationInputResponse(data, context);
  const response: AddApplicationInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse(data, context);
  const response: AddApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddApplicationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationOutputResponse(data, context);
  const response: AddApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationReferenceDataSourceResponse(data, context);
  const response: AddApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1AddApplicationVpcConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationVpcConfigurationResponse(data, context);
  const response: AddApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationVpcConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateApplicationPresignedUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationPresignedUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationPresignedUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationPresignedUrlResponse(data, context);
  const response: CreateApplicationPresignedUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationPresignedUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationPresignedUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1CreateApplicationSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateApplicationSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationSnapshotResponse(data, context);
  const response: CreateApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse(data, context);
  const response: DeleteApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse(data, context);
  const response: DeleteApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationOutputResponse(data, context);
  const response: DeleteApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse(data, context);
  const response: DeleteApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationSnapshotResponse(data, context);
  const response: DeleteApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse(data, context);
  const response: DeleteApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeApplicationSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationSnapshotResponse(data, context);
  const response: DescribeApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeApplicationVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationVersionResponse(data, context);
  const response: DescribeApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DiscoverInputSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DiscoverInputSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverInputSchemaResponse(data, context);
  const response: DiscoverInputSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DiscoverInputSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceProvisionedThroughputExceededException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kinesisanalyticsv2#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnableToDetectSchemaException":
    case "com.amazonaws.kinesisanalyticsv2#UnableToDetectSchemaException":
      response = {
        ...(await deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListApplicationSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationSnapshotsResponse(data, context);
  const response: ListApplicationSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListApplicationVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListApplicationVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationVersionsResponse(data, context);
  const response: ListApplicationVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1RollbackApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RollbackApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RollbackApplicationResponse(data, context);
  const response: RollbackApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RollbackApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RollbackApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StartApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartApplicationResponse(data, context);
  const response: StartApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1StopApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopApplicationResponse(data, context);
  const response: StopApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse(data, context);
  const response: UpdateApplicationMaintenanceConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationMaintenanceConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1CodeValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CodeValidationException(body, context);
  const contents: CodeValidationException = {
    name: "CodeValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApplicationConfigurationException(body, context);
  const contents: InvalidApplicationConfigurationException = {
    name: "InvalidApplicationConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(body, context);
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceProvisionedThroughputExceededException(body, context);
  const contents: ResourceProvisionedThroughputExceededException = {
    name: "ResourceProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(body, context);
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnableToDetectSchemaExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnableToDetectSchemaException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnableToDetectSchemaException(body, context);
  const contents: UnableToDetectSchemaException = {
    name: "UnableToDetectSchemaException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(body, context);
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest = (
  input: AddApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOption !== undefined &&
      input.CloudWatchLoggingOption !== null && {
        CloudWatchLoggingOption: serializeAws_json1_1CloudWatchLoggingOption(input.CloudWatchLoggingOption, context),
      }),
    ...(input.ConditionalToken !== undefined &&
      input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
  };
};

const serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = (
  input: AddApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
    ...(input.InputProcessingConfiguration !== undefined &&
      input.InputProcessingConfiguration !== null && {
        InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
          input.InputProcessingConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1AddApplicationInputRequest = (
  input: AddApplicationInputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.Input !== undefined &&
      input.Input !== null && { Input: serializeAws_json1_1Input(input.Input, context) }),
  };
};

const serializeAws_json1_1AddApplicationOutputRequest = (
  input: AddApplicationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.Output !== undefined &&
      input.Output !== null && { Output: serializeAws_json1_1Output(input.Output, context) }),
  };
};

const serializeAws_json1_1AddApplicationReferenceDataSourceRequest = (
  input: AddApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.ReferenceDataSource !== undefined &&
      input.ReferenceDataSource !== null && {
        ReferenceDataSource: serializeAws_json1_1ReferenceDataSource(input.ReferenceDataSource, context),
      }),
  };
};

const serializeAws_json1_1AddApplicationVpcConfigurationRequest = (
  input: AddApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.ConditionalToken !== undefined &&
      input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.VpcConfiguration !== undefined &&
      input.VpcConfiguration !== null && {
        VpcConfiguration: serializeAws_json1_1VpcConfiguration(input.VpcConfiguration, context),
      }),
  };
};

const serializeAws_json1_1ApplicationCodeConfiguration = (
  input: ApplicationCodeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeContent !== undefined &&
      input.CodeContent !== null && { CodeContent: serializeAws_json1_1CodeContent(input.CodeContent, context) }),
    ...(input.CodeContentType !== undefined &&
      input.CodeContentType !== null && { CodeContentType: input.CodeContentType }),
  };
};

const serializeAws_json1_1ApplicationCodeConfigurationUpdate = (
  input: ApplicationCodeConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeContentTypeUpdate !== undefined &&
      input.CodeContentTypeUpdate !== null && { CodeContentTypeUpdate: input.CodeContentTypeUpdate }),
    ...(input.CodeContentUpdate !== undefined &&
      input.CodeContentUpdate !== null && {
        CodeContentUpdate: serializeAws_json1_1CodeContentUpdate(input.CodeContentUpdate, context),
      }),
  };
};

const serializeAws_json1_1ApplicationConfiguration = (
  input: ApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationCodeConfiguration !== undefined &&
      input.ApplicationCodeConfiguration !== null && {
        ApplicationCodeConfiguration: serializeAws_json1_1ApplicationCodeConfiguration(
          input.ApplicationCodeConfiguration,
          context
        ),
      }),
    ...(input.ApplicationSnapshotConfiguration !== undefined &&
      input.ApplicationSnapshotConfiguration !== null && {
        ApplicationSnapshotConfiguration: serializeAws_json1_1ApplicationSnapshotConfiguration(
          input.ApplicationSnapshotConfiguration,
          context
        ),
      }),
    ...(input.EnvironmentProperties !== undefined &&
      input.EnvironmentProperties !== null && {
        EnvironmentProperties: serializeAws_json1_1EnvironmentProperties(input.EnvironmentProperties, context),
      }),
    ...(input.FlinkApplicationConfiguration !== undefined &&
      input.FlinkApplicationConfiguration !== null && {
        FlinkApplicationConfiguration: serializeAws_json1_1FlinkApplicationConfiguration(
          input.FlinkApplicationConfiguration,
          context
        ),
      }),
    ...(input.SqlApplicationConfiguration !== undefined &&
      input.SqlApplicationConfiguration !== null && {
        SqlApplicationConfiguration: serializeAws_json1_1SqlApplicationConfiguration(
          input.SqlApplicationConfiguration,
          context
        ),
      }),
    ...(input.VpcConfigurations !== undefined &&
      input.VpcConfigurations !== null && {
        VpcConfigurations: serializeAws_json1_1VpcConfigurations(input.VpcConfigurations, context),
      }),
    ...(input.ZeppelinApplicationConfiguration !== undefined &&
      input.ZeppelinApplicationConfiguration !== null && {
        ZeppelinApplicationConfiguration: serializeAws_json1_1ZeppelinApplicationConfiguration(
          input.ZeppelinApplicationConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ApplicationConfigurationUpdate = (
  input: ApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationCodeConfigurationUpdate !== undefined &&
      input.ApplicationCodeConfigurationUpdate !== null && {
        ApplicationCodeConfigurationUpdate: serializeAws_json1_1ApplicationCodeConfigurationUpdate(
          input.ApplicationCodeConfigurationUpdate,
          context
        ),
      }),
    ...(input.ApplicationSnapshotConfigurationUpdate !== undefined &&
      input.ApplicationSnapshotConfigurationUpdate !== null && {
        ApplicationSnapshotConfigurationUpdate: serializeAws_json1_1ApplicationSnapshotConfigurationUpdate(
          input.ApplicationSnapshotConfigurationUpdate,
          context
        ),
      }),
    ...(input.EnvironmentPropertyUpdates !== undefined &&
      input.EnvironmentPropertyUpdates !== null && {
        EnvironmentPropertyUpdates: serializeAws_json1_1EnvironmentPropertyUpdates(
          input.EnvironmentPropertyUpdates,
          context
        ),
      }),
    ...(input.FlinkApplicationConfigurationUpdate !== undefined &&
      input.FlinkApplicationConfigurationUpdate !== null && {
        FlinkApplicationConfigurationUpdate: serializeAws_json1_1FlinkApplicationConfigurationUpdate(
          input.FlinkApplicationConfigurationUpdate,
          context
        ),
      }),
    ...(input.SqlApplicationConfigurationUpdate !== undefined &&
      input.SqlApplicationConfigurationUpdate !== null && {
        SqlApplicationConfigurationUpdate: serializeAws_json1_1SqlApplicationConfigurationUpdate(
          input.SqlApplicationConfigurationUpdate,
          context
        ),
      }),
    ...(input.VpcConfigurationUpdates !== undefined &&
      input.VpcConfigurationUpdates !== null && {
        VpcConfigurationUpdates: serializeAws_json1_1VpcConfigurationUpdates(input.VpcConfigurationUpdates, context),
      }),
    ...(input.ZeppelinApplicationConfigurationUpdate !== undefined &&
      input.ZeppelinApplicationConfigurationUpdate !== null && {
        ZeppelinApplicationConfigurationUpdate: serializeAws_json1_1ZeppelinApplicationConfigurationUpdate(
          input.ZeppelinApplicationConfigurationUpdate,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate = (
  input: ApplicationMaintenanceConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationMaintenanceWindowStartTimeUpdate !== undefined &&
      input.ApplicationMaintenanceWindowStartTimeUpdate !== null && {
        ApplicationMaintenanceWindowStartTimeUpdate: input.ApplicationMaintenanceWindowStartTimeUpdate,
      }),
  };
};

const serializeAws_json1_1ApplicationRestoreConfiguration = (
  input: ApplicationRestoreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationRestoreType !== undefined &&
      input.ApplicationRestoreType !== null && { ApplicationRestoreType: input.ApplicationRestoreType }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
  };
};

const serializeAws_json1_1ApplicationSnapshotConfiguration = (
  input: ApplicationSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotsEnabled !== undefined &&
      input.SnapshotsEnabled !== null && { SnapshotsEnabled: input.SnapshotsEnabled }),
  };
};

const serializeAws_json1_1ApplicationSnapshotConfigurationUpdate = (
  input: ApplicationSnapshotConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotsEnabledUpdate !== undefined &&
      input.SnapshotsEnabledUpdate !== null && { SnapshotsEnabledUpdate: input.SnapshotsEnabledUpdate }),
  };
};

const serializeAws_json1_1CatalogConfiguration = (input: CatalogConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.GlueDataCatalogConfiguration !== undefined &&
      input.GlueDataCatalogConfiguration !== null && {
        GlueDataCatalogConfiguration: serializeAws_json1_1GlueDataCatalogConfiguration(
          input.GlueDataCatalogConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1CatalogConfigurationUpdate = (
  input: CatalogConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlueDataCatalogConfigurationUpdate !== undefined &&
      input.GlueDataCatalogConfigurationUpdate !== null && {
        GlueDataCatalogConfigurationUpdate: serializeAws_json1_1GlueDataCatalogConfigurationUpdate(
          input.GlueDataCatalogConfigurationUpdate,
          context
        ),
      }),
  };
};

const serializeAws_json1_1CheckpointConfiguration = (input: CheckpointConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CheckpointInterval !== undefined &&
      input.CheckpointInterval !== null && { CheckpointInterval: input.CheckpointInterval }),
    ...(input.CheckpointingEnabled !== undefined &&
      input.CheckpointingEnabled !== null && { CheckpointingEnabled: input.CheckpointingEnabled }),
    ...(input.ConfigurationType !== undefined &&
      input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType }),
    ...(input.MinPauseBetweenCheckpoints !== undefined &&
      input.MinPauseBetweenCheckpoints !== null && { MinPauseBetweenCheckpoints: input.MinPauseBetweenCheckpoints }),
  };
};

const serializeAws_json1_1CheckpointConfigurationUpdate = (
  input: CheckpointConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointIntervalUpdate !== undefined &&
      input.CheckpointIntervalUpdate !== null && { CheckpointIntervalUpdate: input.CheckpointIntervalUpdate }),
    ...(input.CheckpointingEnabledUpdate !== undefined &&
      input.CheckpointingEnabledUpdate !== null && { CheckpointingEnabledUpdate: input.CheckpointingEnabledUpdate }),
    ...(input.ConfigurationTypeUpdate !== undefined &&
      input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
    ...(input.MinPauseBetweenCheckpointsUpdate !== undefined &&
      input.MinPauseBetweenCheckpointsUpdate !== null && {
        MinPauseBetweenCheckpointsUpdate: input.MinPauseBetweenCheckpointsUpdate,
      }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOption = (input: CloudWatchLoggingOption, context: __SerdeContext): any => {
  return {
    ...(input.LogStreamARN !== undefined && input.LogStreamARN !== null && { LogStreamARN: input.LogStreamARN }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CloudWatchLoggingOption(entry, context);
    });
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdate = (
  input: CloudWatchLoggingOptionUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptionId !== undefined &&
      input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
    ...(input.LogStreamARNUpdate !== undefined &&
      input.LogStreamARNUpdate !== null && { LogStreamARNUpdate: input.LogStreamARNUpdate }),
  };
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdates = (
  input: CloudWatchLoggingOptionUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context);
    });
};

const serializeAws_json1_1CodeContent = (input: CodeContent, context: __SerdeContext): any => {
  return {
    ...(input.S3ContentLocation !== undefined &&
      input.S3ContentLocation !== null && {
        S3ContentLocation: serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context),
      }),
    ...(input.TextContent !== undefined && input.TextContent !== null && { TextContent: input.TextContent }),
    ...(input.ZipFileContent !== undefined &&
      input.ZipFileContent !== null && { ZipFileContent: context.base64Encoder(input.ZipFileContent) }),
  };
};

const serializeAws_json1_1CodeContentUpdate = (input: CodeContentUpdate, context: __SerdeContext): any => {
  return {
    ...(input.S3ContentLocationUpdate !== undefined &&
      input.S3ContentLocationUpdate !== null && {
        S3ContentLocationUpdate: serializeAws_json1_1S3ContentLocationUpdate(input.S3ContentLocationUpdate, context),
      }),
    ...(input.TextContentUpdate !== undefined &&
      input.TextContentUpdate !== null && { TextContentUpdate: input.TextContentUpdate }),
    ...(input.ZipFileContentUpdate !== undefined &&
      input.ZipFileContentUpdate !== null && {
        ZipFileContentUpdate: context.base64Encoder(input.ZipFileContentUpdate),
      }),
  };
};

const serializeAws_json1_1CreateApplicationPresignedUrlRequest = (
  input: CreateApplicationPresignedUrlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.SessionExpirationDurationInSeconds !== undefined &&
      input.SessionExpirationDurationInSeconds !== null && {
        SessionExpirationDurationInSeconds: input.SessionExpirationDurationInSeconds,
      }),
    ...(input.UrlType !== undefined && input.UrlType !== null && { UrlType: input.UrlType }),
  };
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationConfiguration !== undefined &&
      input.ApplicationConfiguration !== null && {
        ApplicationConfiguration: serializeAws_json1_1ApplicationConfiguration(input.ApplicationConfiguration, context),
      }),
    ...(input.ApplicationDescription !== undefined &&
      input.ApplicationDescription !== null && { ApplicationDescription: input.ApplicationDescription }),
    ...(input.ApplicationMode !== undefined &&
      input.ApplicationMode !== null && { ApplicationMode: input.ApplicationMode }),
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptions !== undefined &&
      input.CloudWatchLoggingOptions !== null && {
        CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(input.CloudWatchLoggingOptions, context),
      }),
    ...(input.RuntimeEnvironment !== undefined &&
      input.RuntimeEnvironment !== null && { RuntimeEnvironment: input.RuntimeEnvironment }),
    ...(input.ServiceExecutionRole !== undefined &&
      input.ServiceExecutionRole !== null && { ServiceExecutionRole: input.ServiceExecutionRole }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateApplicationSnapshotRequest = (
  input: CreateApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
  };
};

const serializeAws_json1_1CSVMappingParameters = (input: CSVMappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumnDelimiter !== undefined &&
      input.RecordColumnDelimiter !== null && { RecordColumnDelimiter: input.RecordColumnDelimiter }),
    ...(input.RecordRowDelimiter !== undefined &&
      input.RecordRowDelimiter !== null && { RecordRowDelimiter: input.RecordRowDelimiter }),
  };
};

const serializeAws_json1_1CustomArtifactConfiguration = (
  input: CustomArtifactConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactType !== undefined && input.ArtifactType !== null && { ArtifactType: input.ArtifactType }),
    ...(input.MavenReference !== undefined &&
      input.MavenReference !== null && {
        MavenReference: serializeAws_json1_1MavenReference(input.MavenReference, context),
      }),
    ...(input.S3ContentLocation !== undefined &&
      input.S3ContentLocation !== null && {
        S3ContentLocation: serializeAws_json1_1S3ContentLocation(input.S3ContentLocation, context),
      }),
  };
};

const serializeAws_json1_1CustomArtifactsConfigurationList = (
  input: CustomArtifactConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CustomArtifactConfiguration(entry, context);
    });
};

const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (
  input: DeleteApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptionId !== undefined &&
      input.CloudWatchLoggingOptionId !== null && { CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId }),
    ...(input.ConditionalToken !== undefined &&
      input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
  };
};

const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = (
  input: DeleteApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
  };
};

const serializeAws_json1_1DeleteApplicationOutputRequest = (
  input: DeleteApplicationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.OutputId !== undefined && input.OutputId !== null && { OutputId: input.OutputId }),
  };
};

const serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = (
  input: DeleteApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId }),
  };
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CreateTimestamp !== undefined &&
      input.CreateTimestamp !== null && { CreateTimestamp: Math.round(input.CreateTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1DeleteApplicationSnapshotRequest = (
  input: DeleteApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.SnapshotCreationTimestamp !== undefined &&
      input.SnapshotCreationTimestamp !== null && {
        SnapshotCreationTimestamp: Math.round(input.SnapshotCreationTimestamp.getTime() / 1000),
      }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
  };
};

const serializeAws_json1_1DeleteApplicationVpcConfigurationRequest = (
  input: DeleteApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.ConditionalToken !== undefined &&
      input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.VpcConfigurationId !== undefined &&
      input.VpcConfigurationId !== null && { VpcConfigurationId: input.VpcConfigurationId }),
  };
};

const serializeAws_json1_1DeployAsApplicationConfiguration = (
  input: DeployAsApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3ContentLocation !== undefined &&
      input.S3ContentLocation !== null && {
        S3ContentLocation: serializeAws_json1_1S3ContentBaseLocation(input.S3ContentLocation, context),
      }),
  };
};

const serializeAws_json1_1DeployAsApplicationConfigurationUpdate = (
  input: DeployAsApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3ContentLocationUpdate !== undefined &&
      input.S3ContentLocationUpdate !== null && {
        S3ContentLocationUpdate: serializeAws_json1_1S3ContentBaseLocationUpdate(
          input.S3ContentLocationUpdate,
          context
        ),
      }),
  };
};

const serializeAws_json1_1DescribeApplicationRequest = (
  input: DescribeApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.IncludeAdditionalDetails !== undefined &&
      input.IncludeAdditionalDetails !== null && { IncludeAdditionalDetails: input.IncludeAdditionalDetails }),
  };
};

const serializeAws_json1_1DescribeApplicationSnapshotRequest = (
  input: DescribeApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.SnapshotName !== undefined && input.SnapshotName !== null && { SnapshotName: input.SnapshotName }),
  };
};

const serializeAws_json1_1DescribeApplicationVersionRequest = (
  input: DescribeApplicationVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.ApplicationVersionId !== undefined &&
      input.ApplicationVersionId !== null && { ApplicationVersionId: input.ApplicationVersionId }),
  };
};

const serializeAws_json1_1DestinationSchema = (input: DestinationSchema, context: __SerdeContext): any => {
  return {
    ...(input.RecordFormatType !== undefined &&
      input.RecordFormatType !== null && { RecordFormatType: input.RecordFormatType }),
  };
};

const serializeAws_json1_1DiscoverInputSchemaRequest = (
  input: DiscoverInputSchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputProcessingConfiguration !== undefined &&
      input.InputProcessingConfiguration !== null && {
        InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
          input.InputProcessingConfiguration,
          context
        ),
      }),
    ...(input.InputStartingPositionConfiguration !== undefined &&
      input.InputStartingPositionConfiguration !== null && {
        InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(
          input.InputStartingPositionConfiguration,
          context
        ),
      }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.S3Configuration !== undefined &&
      input.S3Configuration !== null && {
        S3Configuration: serializeAws_json1_1S3Configuration(input.S3Configuration, context),
      }),
    ...(input.ServiceExecutionRole !== undefined &&
      input.ServiceExecutionRole !== null && { ServiceExecutionRole: input.ServiceExecutionRole }),
  };
};

const serializeAws_json1_1EnvironmentProperties = (input: EnvironmentProperties, context: __SerdeContext): any => {
  return {
    ...(input.PropertyGroups !== undefined &&
      input.PropertyGroups !== null && {
        PropertyGroups: serializeAws_json1_1PropertyGroups(input.PropertyGroups, context),
      }),
  };
};

const serializeAws_json1_1EnvironmentPropertyUpdates = (
  input: EnvironmentPropertyUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.PropertyGroups !== undefined &&
      input.PropertyGroups !== null && {
        PropertyGroups: serializeAws_json1_1PropertyGroups(input.PropertyGroups, context),
      }),
  };
};

const serializeAws_json1_1FlinkApplicationConfiguration = (
  input: FlinkApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointConfiguration !== undefined &&
      input.CheckpointConfiguration !== null && {
        CheckpointConfiguration: serializeAws_json1_1CheckpointConfiguration(input.CheckpointConfiguration, context),
      }),
    ...(input.MonitoringConfiguration !== undefined &&
      input.MonitoringConfiguration !== null && {
        MonitoringConfiguration: serializeAws_json1_1MonitoringConfiguration(input.MonitoringConfiguration, context),
      }),
    ...(input.ParallelismConfiguration !== undefined &&
      input.ParallelismConfiguration !== null && {
        ParallelismConfiguration: serializeAws_json1_1ParallelismConfiguration(input.ParallelismConfiguration, context),
      }),
  };
};

const serializeAws_json1_1FlinkApplicationConfigurationUpdate = (
  input: FlinkApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointConfigurationUpdate !== undefined &&
      input.CheckpointConfigurationUpdate !== null && {
        CheckpointConfigurationUpdate: serializeAws_json1_1CheckpointConfigurationUpdate(
          input.CheckpointConfigurationUpdate,
          context
        ),
      }),
    ...(input.MonitoringConfigurationUpdate !== undefined &&
      input.MonitoringConfigurationUpdate !== null && {
        MonitoringConfigurationUpdate: serializeAws_json1_1MonitoringConfigurationUpdate(
          input.MonitoringConfigurationUpdate,
          context
        ),
      }),
    ...(input.ParallelismConfigurationUpdate !== undefined &&
      input.ParallelismConfigurationUpdate !== null && {
        ParallelismConfigurationUpdate: serializeAws_json1_1ParallelismConfigurationUpdate(
          input.ParallelismConfigurationUpdate,
          context
        ),
      }),
  };
};

const serializeAws_json1_1FlinkRunConfiguration = (input: FlinkRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowNonRestoredState !== undefined &&
      input.AllowNonRestoredState !== null && { AllowNonRestoredState: input.AllowNonRestoredState }),
  };
};

const serializeAws_json1_1GlueDataCatalogConfiguration = (
  input: GlueDataCatalogConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseARN !== undefined && input.DatabaseARN !== null && { DatabaseARN: input.DatabaseARN }),
  };
};

const serializeAws_json1_1GlueDataCatalogConfigurationUpdate = (
  input: GlueDataCatalogConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseARNUpdate !== undefined &&
      input.DatabaseARNUpdate !== null && { DatabaseARNUpdate: input.DatabaseARNUpdate }),
  };
};

const serializeAws_json1_1Input = (input: Input, context: __SerdeContext): any => {
  return {
    ...(input.InputParallelism !== undefined &&
      input.InputParallelism !== null && {
        InputParallelism: serializeAws_json1_1InputParallelism(input.InputParallelism, context),
      }),
    ...(input.InputProcessingConfiguration !== undefined &&
      input.InputProcessingConfiguration !== null && {
        InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
          input.InputProcessingConfiguration,
          context
        ),
      }),
    ...(input.InputSchema !== undefined &&
      input.InputSchema !== null && { InputSchema: serializeAws_json1_1SourceSchema(input.InputSchema, context) }),
    ...(input.KinesisFirehoseInput !== undefined &&
      input.KinesisFirehoseInput !== null && {
        KinesisFirehoseInput: serializeAws_json1_1KinesisFirehoseInput(input.KinesisFirehoseInput, context),
      }),
    ...(input.KinesisStreamsInput !== undefined &&
      input.KinesisStreamsInput !== null && {
        KinesisStreamsInput: serializeAws_json1_1KinesisStreamsInput(input.KinesisStreamsInput, context),
      }),
    ...(input.NamePrefix !== undefined && input.NamePrefix !== null && { NamePrefix: input.NamePrefix }),
  };
};

const serializeAws_json1_1InputLambdaProcessor = (input: InputLambdaProcessor, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1InputLambdaProcessorUpdate = (
  input: InputLambdaProcessorUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined &&
      input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

const serializeAws_json1_1InputParallelism = (input: InputParallelism, context: __SerdeContext): any => {
  return {
    ...(input.Count !== undefined && input.Count !== null && { Count: input.Count }),
  };
};

const serializeAws_json1_1InputParallelismUpdate = (input: InputParallelismUpdate, context: __SerdeContext): any => {
  return {
    ...(input.CountUpdate !== undefined && input.CountUpdate !== null && { CountUpdate: input.CountUpdate }),
  };
};

const serializeAws_json1_1InputProcessingConfiguration = (
  input: InputProcessingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessor !== undefined &&
      input.InputLambdaProcessor !== null && {
        InputLambdaProcessor: serializeAws_json1_1InputLambdaProcessor(input.InputLambdaProcessor, context),
      }),
  };
};

const serializeAws_json1_1InputProcessingConfigurationUpdate = (
  input: InputProcessingConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessorUpdate !== undefined &&
      input.InputLambdaProcessorUpdate !== null && {
        InputLambdaProcessorUpdate: serializeAws_json1_1InputLambdaProcessorUpdate(
          input.InputLambdaProcessorUpdate,
          context
        ),
      }),
  };
};

const serializeAws_json1_1Inputs = (input: Input[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Input(entry, context);
    });
};

const serializeAws_json1_1InputSchemaUpdate = (input: InputSchemaUpdate, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumnUpdates !== undefined &&
      input.RecordColumnUpdates !== null && {
        RecordColumnUpdates: serializeAws_json1_1RecordColumns(input.RecordColumnUpdates, context),
      }),
    ...(input.RecordEncodingUpdate !== undefined &&
      input.RecordEncodingUpdate !== null && { RecordEncodingUpdate: input.RecordEncodingUpdate }),
    ...(input.RecordFormatUpdate !== undefined &&
      input.RecordFormatUpdate !== null && {
        RecordFormatUpdate: serializeAws_json1_1RecordFormat(input.RecordFormatUpdate, context),
      }),
  };
};

const serializeAws_json1_1InputStartingPositionConfiguration = (
  input: InputStartingPositionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputStartingPosition !== undefined &&
      input.InputStartingPosition !== null && { InputStartingPosition: input.InputStartingPosition }),
  };
};

const serializeAws_json1_1InputUpdate = (input: InputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
    ...(input.InputParallelismUpdate !== undefined &&
      input.InputParallelismUpdate !== null && {
        InputParallelismUpdate: serializeAws_json1_1InputParallelismUpdate(input.InputParallelismUpdate, context),
      }),
    ...(input.InputProcessingConfigurationUpdate !== undefined &&
      input.InputProcessingConfigurationUpdate !== null && {
        InputProcessingConfigurationUpdate: serializeAws_json1_1InputProcessingConfigurationUpdate(
          input.InputProcessingConfigurationUpdate,
          context
        ),
      }),
    ...(input.InputSchemaUpdate !== undefined &&
      input.InputSchemaUpdate !== null && {
        InputSchemaUpdate: serializeAws_json1_1InputSchemaUpdate(input.InputSchemaUpdate, context),
      }),
    ...(input.KinesisFirehoseInputUpdate !== undefined &&
      input.KinesisFirehoseInputUpdate !== null && {
        KinesisFirehoseInputUpdate: serializeAws_json1_1KinesisFirehoseInputUpdate(
          input.KinesisFirehoseInputUpdate,
          context
        ),
      }),
    ...(input.KinesisStreamsInputUpdate !== undefined &&
      input.KinesisStreamsInputUpdate !== null && {
        KinesisStreamsInputUpdate: serializeAws_json1_1KinesisStreamsInputUpdate(
          input.KinesisStreamsInputUpdate,
          context
        ),
      }),
    ...(input.NamePrefixUpdate !== undefined &&
      input.NamePrefixUpdate !== null && { NamePrefixUpdate: input.NamePrefixUpdate }),
  };
};

const serializeAws_json1_1InputUpdates = (input: InputUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1InputUpdate(entry, context);
    });
};

const serializeAws_json1_1JSONMappingParameters = (input: JSONMappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.RecordRowPath !== undefined && input.RecordRowPath !== null && { RecordRowPath: input.RecordRowPath }),
  };
};

const serializeAws_json1_1KinesisFirehoseInput = (input: KinesisFirehoseInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1KinesisFirehoseInputUpdate = (
  input: KinesisFirehoseInputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined &&
      input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

const serializeAws_json1_1KinesisFirehoseOutput = (input: KinesisFirehoseOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1KinesisFirehoseOutputUpdate = (
  input: KinesisFirehoseOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined &&
      input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

const serializeAws_json1_1KinesisStreamsInput = (input: KinesisStreamsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1KinesisStreamsInputUpdate = (
  input: KinesisStreamsInputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined &&
      input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

const serializeAws_json1_1KinesisStreamsOutput = (input: KinesisStreamsOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1KinesisStreamsOutputUpdate = (
  input: KinesisStreamsOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined &&
      input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

const serializeAws_json1_1LambdaOutput = (input: LambdaOutput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1LambdaOutputUpdate = (input: LambdaOutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined &&
      input.ResourceARNUpdate !== null && { ResourceARNUpdate: input.ResourceARNUpdate }),
  };
};

const serializeAws_json1_1ListApplicationSnapshotsRequest = (
  input: ListApplicationSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListApplicationsRequest = (input: ListApplicationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListApplicationVersionsRequest = (
  input: ListApplicationVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1MappingParameters = (input: MappingParameters, context: __SerdeContext): any => {
  return {
    ...(input.CSVMappingParameters !== undefined &&
      input.CSVMappingParameters !== null && {
        CSVMappingParameters: serializeAws_json1_1CSVMappingParameters(input.CSVMappingParameters, context),
      }),
    ...(input.JSONMappingParameters !== undefined &&
      input.JSONMappingParameters !== null && {
        JSONMappingParameters: serializeAws_json1_1JSONMappingParameters(input.JSONMappingParameters, context),
      }),
  };
};

const serializeAws_json1_1MavenReference = (input: MavenReference, context: __SerdeContext): any => {
  return {
    ...(input.ArtifactId !== undefined && input.ArtifactId !== null && { ArtifactId: input.ArtifactId }),
    ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_json1_1MonitoringConfiguration = (input: MonitoringConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationType !== undefined &&
      input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType }),
    ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
    ...(input.MetricsLevel !== undefined && input.MetricsLevel !== null && { MetricsLevel: input.MetricsLevel }),
  };
};

const serializeAws_json1_1MonitoringConfigurationUpdate = (
  input: MonitoringConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationTypeUpdate !== undefined &&
      input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
    ...(input.LogLevelUpdate !== undefined &&
      input.LogLevelUpdate !== null && { LogLevelUpdate: input.LogLevelUpdate }),
    ...(input.MetricsLevelUpdate !== undefined &&
      input.MetricsLevelUpdate !== null && { MetricsLevelUpdate: input.MetricsLevelUpdate }),
  };
};

const serializeAws_json1_1Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.DestinationSchema !== undefined &&
      input.DestinationSchema !== null && {
        DestinationSchema: serializeAws_json1_1DestinationSchema(input.DestinationSchema, context),
      }),
    ...(input.KinesisFirehoseOutput !== undefined &&
      input.KinesisFirehoseOutput !== null && {
        KinesisFirehoseOutput: serializeAws_json1_1KinesisFirehoseOutput(input.KinesisFirehoseOutput, context),
      }),
    ...(input.KinesisStreamsOutput !== undefined &&
      input.KinesisStreamsOutput !== null && {
        KinesisStreamsOutput: serializeAws_json1_1KinesisStreamsOutput(input.KinesisStreamsOutput, context),
      }),
    ...(input.LambdaOutput !== undefined &&
      input.LambdaOutput !== null && { LambdaOutput: serializeAws_json1_1LambdaOutput(input.LambdaOutput, context) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1Outputs = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Output(entry, context);
    });
};

const serializeAws_json1_1OutputUpdate = (input: OutputUpdate, context: __SerdeContext): any => {
  return {
    ...(input.DestinationSchemaUpdate !== undefined &&
      input.DestinationSchemaUpdate !== null && {
        DestinationSchemaUpdate: serializeAws_json1_1DestinationSchema(input.DestinationSchemaUpdate, context),
      }),
    ...(input.KinesisFirehoseOutputUpdate !== undefined &&
      input.KinesisFirehoseOutputUpdate !== null && {
        KinesisFirehoseOutputUpdate: serializeAws_json1_1KinesisFirehoseOutputUpdate(
          input.KinesisFirehoseOutputUpdate,
          context
        ),
      }),
    ...(input.KinesisStreamsOutputUpdate !== undefined &&
      input.KinesisStreamsOutputUpdate !== null && {
        KinesisStreamsOutputUpdate: serializeAws_json1_1KinesisStreamsOutputUpdate(
          input.KinesisStreamsOutputUpdate,
          context
        ),
      }),
    ...(input.LambdaOutputUpdate !== undefined &&
      input.LambdaOutputUpdate !== null && {
        LambdaOutputUpdate: serializeAws_json1_1LambdaOutputUpdate(input.LambdaOutputUpdate, context),
      }),
    ...(input.NameUpdate !== undefined && input.NameUpdate !== null && { NameUpdate: input.NameUpdate }),
    ...(input.OutputId !== undefined && input.OutputId !== null && { OutputId: input.OutputId }),
  };
};

const serializeAws_json1_1OutputUpdates = (input: OutputUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1OutputUpdate(entry, context);
    });
};

const serializeAws_json1_1ParallelismConfiguration = (
  input: ParallelismConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingEnabled !== undefined &&
      input.AutoScalingEnabled !== null && { AutoScalingEnabled: input.AutoScalingEnabled }),
    ...(input.ConfigurationType !== undefined &&
      input.ConfigurationType !== null && { ConfigurationType: input.ConfigurationType }),
    ...(input.Parallelism !== undefined && input.Parallelism !== null && { Parallelism: input.Parallelism }),
    ...(input.ParallelismPerKPU !== undefined &&
      input.ParallelismPerKPU !== null && { ParallelismPerKPU: input.ParallelismPerKPU }),
  };
};

const serializeAws_json1_1ParallelismConfigurationUpdate = (
  input: ParallelismConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingEnabledUpdate !== undefined &&
      input.AutoScalingEnabledUpdate !== null && { AutoScalingEnabledUpdate: input.AutoScalingEnabledUpdate }),
    ...(input.ConfigurationTypeUpdate !== undefined &&
      input.ConfigurationTypeUpdate !== null && { ConfigurationTypeUpdate: input.ConfigurationTypeUpdate }),
    ...(input.ParallelismPerKPUUpdate !== undefined &&
      input.ParallelismPerKPUUpdate !== null && { ParallelismPerKPUUpdate: input.ParallelismPerKPUUpdate }),
    ...(input.ParallelismUpdate !== undefined &&
      input.ParallelismUpdate !== null && { ParallelismUpdate: input.ParallelismUpdate }),
  };
};

const serializeAws_json1_1PropertyGroup = (input: PropertyGroup, context: __SerdeContext): any => {
  return {
    ...(input.PropertyGroupId !== undefined &&
      input.PropertyGroupId !== null && { PropertyGroupId: input.PropertyGroupId }),
    ...(input.PropertyMap !== undefined &&
      input.PropertyMap !== null && { PropertyMap: serializeAws_json1_1PropertyMap(input.PropertyMap, context) }),
  };
};

const serializeAws_json1_1PropertyGroups = (input: PropertyGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1PropertyGroup(entry, context);
    });
};

const serializeAws_json1_1PropertyMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_json1_1RecordColumn = (input: RecordColumn, context: __SerdeContext): any => {
  return {
    ...(input.Mapping !== undefined && input.Mapping !== null && { Mapping: input.Mapping }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SqlType !== undefined && input.SqlType !== null && { SqlType: input.SqlType }),
  };
};

const serializeAws_json1_1RecordColumns = (input: RecordColumn[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1RecordColumn(entry, context);
    });
};

const serializeAws_json1_1RecordFormat = (input: RecordFormat, context: __SerdeContext): any => {
  return {
    ...(input.MappingParameters !== undefined &&
      input.MappingParameters !== null && {
        MappingParameters: serializeAws_json1_1MappingParameters(input.MappingParameters, context),
      }),
    ...(input.RecordFormatType !== undefined &&
      input.RecordFormatType !== null && { RecordFormatType: input.RecordFormatType }),
  };
};

const serializeAws_json1_1ReferenceDataSource = (input: ReferenceDataSource, context: __SerdeContext): any => {
  return {
    ...(input.ReferenceSchema !== undefined &&
      input.ReferenceSchema !== null && {
        ReferenceSchema: serializeAws_json1_1SourceSchema(input.ReferenceSchema, context),
      }),
    ...(input.S3ReferenceDataSource !== undefined &&
      input.S3ReferenceDataSource !== null && {
        S3ReferenceDataSource: serializeAws_json1_1S3ReferenceDataSource(input.S3ReferenceDataSource, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_json1_1ReferenceDataSources = (input: ReferenceDataSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ReferenceDataSource(entry, context);
    });
};

const serializeAws_json1_1ReferenceDataSourceUpdate = (
  input: ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReferenceId !== undefined && input.ReferenceId !== null && { ReferenceId: input.ReferenceId }),
    ...(input.ReferenceSchemaUpdate !== undefined &&
      input.ReferenceSchemaUpdate !== null && {
        ReferenceSchemaUpdate: serializeAws_json1_1SourceSchema(input.ReferenceSchemaUpdate, context),
      }),
    ...(input.S3ReferenceDataSourceUpdate !== undefined &&
      input.S3ReferenceDataSourceUpdate !== null && {
        S3ReferenceDataSourceUpdate: serializeAws_json1_1S3ReferenceDataSourceUpdate(
          input.S3ReferenceDataSourceUpdate,
          context
        ),
      }),
    ...(input.TableNameUpdate !== undefined &&
      input.TableNameUpdate !== null && { TableNameUpdate: input.TableNameUpdate }),
  };
};

const serializeAws_json1_1ReferenceDataSourceUpdates = (
  input: ReferenceDataSourceUpdate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ReferenceDataSourceUpdate(entry, context);
    });
};

const serializeAws_json1_1RollbackApplicationRequest = (
  input: RollbackApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
  };
};

const serializeAws_json1_1RunConfiguration = (input: RunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationRestoreConfiguration !== undefined &&
      input.ApplicationRestoreConfiguration !== null && {
        ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(
          input.ApplicationRestoreConfiguration,
          context
        ),
      }),
    ...(input.FlinkRunConfiguration !== undefined &&
      input.FlinkRunConfiguration !== null && {
        FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context),
      }),
    ...(input.SqlRunConfigurations !== undefined &&
      input.SqlRunConfigurations !== null && {
        SqlRunConfigurations: serializeAws_json1_1SqlRunConfigurations(input.SqlRunConfigurations, context),
      }),
  };
};

const serializeAws_json1_1RunConfigurationUpdate = (input: RunConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationRestoreConfiguration !== undefined &&
      input.ApplicationRestoreConfiguration !== null && {
        ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(
          input.ApplicationRestoreConfiguration,
          context
        ),
      }),
    ...(input.FlinkRunConfiguration !== undefined &&
      input.FlinkRunConfiguration !== null && {
        FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(input.FlinkRunConfiguration, context),
      }),
  };
};

const serializeAws_json1_1S3Configuration = (input: S3Configuration, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
    ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
  };
};

const serializeAws_json1_1S3ContentBaseLocation = (input: S3ContentBaseLocation, context: __SerdeContext): any => {
  return {
    ...(input.BasePath !== undefined && input.BasePath !== null && { BasePath: input.BasePath }),
    ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
  };
};

const serializeAws_json1_1S3ContentBaseLocationUpdate = (
  input: S3ContentBaseLocationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BasePathUpdate !== undefined &&
      input.BasePathUpdate !== null && { BasePathUpdate: input.BasePathUpdate }),
    ...(input.BucketARNUpdate !== undefined &&
      input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
  };
};

const serializeAws_json1_1S3ContentLocation = (input: S3ContentLocation, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
    ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
    ...(input.ObjectVersion !== undefined && input.ObjectVersion !== null && { ObjectVersion: input.ObjectVersion }),
  };
};

const serializeAws_json1_1S3ContentLocationUpdate = (input: S3ContentLocationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.BucketARNUpdate !== undefined &&
      input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
    ...(input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate }),
    ...(input.ObjectVersionUpdate !== undefined &&
      input.ObjectVersionUpdate !== null && { ObjectVersionUpdate: input.ObjectVersionUpdate }),
  };
};

const serializeAws_json1_1S3ReferenceDataSource = (input: S3ReferenceDataSource, context: __SerdeContext): any => {
  return {
    ...(input.BucketARN !== undefined && input.BucketARN !== null && { BucketARN: input.BucketARN }),
    ...(input.FileKey !== undefined && input.FileKey !== null && { FileKey: input.FileKey }),
  };
};

const serializeAws_json1_1S3ReferenceDataSourceUpdate = (
  input: S3ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARNUpdate !== undefined &&
      input.BucketARNUpdate !== null && { BucketARNUpdate: input.BucketARNUpdate }),
    ...(input.FileKeyUpdate !== undefined && input.FileKeyUpdate !== null && { FileKeyUpdate: input.FileKeyUpdate }),
  };
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1SourceSchema = (input: SourceSchema, context: __SerdeContext): any => {
  return {
    ...(input.RecordColumns !== undefined &&
      input.RecordColumns !== null && {
        RecordColumns: serializeAws_json1_1RecordColumns(input.RecordColumns, context),
      }),
    ...(input.RecordEncoding !== undefined &&
      input.RecordEncoding !== null && { RecordEncoding: input.RecordEncoding }),
    ...(input.RecordFormat !== undefined &&
      input.RecordFormat !== null && { RecordFormat: serializeAws_json1_1RecordFormat(input.RecordFormat, context) }),
  };
};

const serializeAws_json1_1SqlApplicationConfiguration = (
  input: SqlApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Inputs !== undefined &&
      input.Inputs !== null && { Inputs: serializeAws_json1_1Inputs(input.Inputs, context) }),
    ...(input.Outputs !== undefined &&
      input.Outputs !== null && { Outputs: serializeAws_json1_1Outputs(input.Outputs, context) }),
    ...(input.ReferenceDataSources !== undefined &&
      input.ReferenceDataSources !== null && {
        ReferenceDataSources: serializeAws_json1_1ReferenceDataSources(input.ReferenceDataSources, context),
      }),
  };
};

const serializeAws_json1_1SqlApplicationConfigurationUpdate = (
  input: SqlApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputUpdates !== undefined &&
      input.InputUpdates !== null && { InputUpdates: serializeAws_json1_1InputUpdates(input.InputUpdates, context) }),
    ...(input.OutputUpdates !== undefined &&
      input.OutputUpdates !== null && {
        OutputUpdates: serializeAws_json1_1OutputUpdates(input.OutputUpdates, context),
      }),
    ...(input.ReferenceDataSourceUpdates !== undefined &&
      input.ReferenceDataSourceUpdates !== null && {
        ReferenceDataSourceUpdates: serializeAws_json1_1ReferenceDataSourceUpdates(
          input.ReferenceDataSourceUpdates,
          context
        ),
      }),
  };
};

const serializeAws_json1_1SqlRunConfiguration = (input: SqlRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InputId !== undefined && input.InputId !== null && { InputId: input.InputId }),
    ...(input.InputStartingPositionConfiguration !== undefined &&
      input.InputStartingPositionConfiguration !== null && {
        InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(
          input.InputStartingPositionConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1SqlRunConfigurations = (input: SqlRunConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SqlRunConfiguration(entry, context);
    });
};

const serializeAws_json1_1StartApplicationRequest = (input: StartApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.RunConfiguration !== undefined &&
      input.RunConfiguration !== null && {
        RunConfiguration: serializeAws_json1_1RunConfiguration(input.RunConfiguration, context),
      }),
  };
};

const serializeAws_json1_1StopApplicationRequest = (input: StopApplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.Force !== undefined && input.Force !== null && { Force: input.Force }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateApplicationMaintenanceConfigurationRequest = (
  input: UpdateApplicationMaintenanceConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationMaintenanceConfigurationUpdate !== undefined &&
      input.ApplicationMaintenanceConfigurationUpdate !== null && {
        ApplicationMaintenanceConfigurationUpdate: serializeAws_json1_1ApplicationMaintenanceConfigurationUpdate(
          input.ApplicationMaintenanceConfigurationUpdate,
          context
        ),
      }),
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
  };
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationConfigurationUpdate !== undefined &&
      input.ApplicationConfigurationUpdate !== null && {
        ApplicationConfigurationUpdate: serializeAws_json1_1ApplicationConfigurationUpdate(
          input.ApplicationConfigurationUpdate,
          context
        ),
      }),
    ...(input.ApplicationName !== undefined &&
      input.ApplicationName !== null && { ApplicationName: input.ApplicationName }),
    ...(input.CloudWatchLoggingOptionUpdates !== undefined &&
      input.CloudWatchLoggingOptionUpdates !== null && {
        CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(
          input.CloudWatchLoggingOptionUpdates,
          context
        ),
      }),
    ...(input.ConditionalToken !== undefined &&
      input.ConditionalToken !== null && { ConditionalToken: input.ConditionalToken }),
    ...(input.CurrentApplicationVersionId !== undefined &&
      input.CurrentApplicationVersionId !== null && { CurrentApplicationVersionId: input.CurrentApplicationVersionId }),
    ...(input.RunConfigurationUpdate !== undefined &&
      input.RunConfigurationUpdate !== null && {
        RunConfigurationUpdate: serializeAws_json1_1RunConfigurationUpdate(input.RunConfigurationUpdate, context),
      }),
    ...(input.ServiceExecutionRoleUpdate !== undefined &&
      input.ServiceExecutionRoleUpdate !== null && { ServiceExecutionRoleUpdate: input.ServiceExecutionRoleUpdate }),
  };
};

const serializeAws_json1_1VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
  };
};

const serializeAws_json1_1VpcConfigurations = (input: VpcConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1VpcConfiguration(entry, context);
    });
};

const serializeAws_json1_1VpcConfigurationUpdate = (input: VpcConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIdUpdates !== undefined &&
      input.SecurityGroupIdUpdates !== null && {
        SecurityGroupIdUpdates: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIdUpdates, context),
      }),
    ...(input.SubnetIdUpdates !== undefined &&
      input.SubnetIdUpdates !== null && {
        SubnetIdUpdates: serializeAws_json1_1SubnetIds(input.SubnetIdUpdates, context),
      }),
    ...(input.VpcConfigurationId !== undefined &&
      input.VpcConfigurationId !== null && { VpcConfigurationId: input.VpcConfigurationId }),
  };
};

const serializeAws_json1_1VpcConfigurationUpdates = (input: VpcConfigurationUpdate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1VpcConfigurationUpdate(entry, context);
    });
};

const serializeAws_json1_1ZeppelinApplicationConfiguration = (
  input: ZeppelinApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogConfiguration !== undefined &&
      input.CatalogConfiguration !== null && {
        CatalogConfiguration: serializeAws_json1_1CatalogConfiguration(input.CatalogConfiguration, context),
      }),
    ...(input.CustomArtifactsConfiguration !== undefined &&
      input.CustomArtifactsConfiguration !== null && {
        CustomArtifactsConfiguration: serializeAws_json1_1CustomArtifactsConfigurationList(
          input.CustomArtifactsConfiguration,
          context
        ),
      }),
    ...(input.DeployAsApplicationConfiguration !== undefined &&
      input.DeployAsApplicationConfiguration !== null && {
        DeployAsApplicationConfiguration: serializeAws_json1_1DeployAsApplicationConfiguration(
          input.DeployAsApplicationConfiguration,
          context
        ),
      }),
    ...(input.MonitoringConfiguration !== undefined &&
      input.MonitoringConfiguration !== null && {
        MonitoringConfiguration: serializeAws_json1_1ZeppelinMonitoringConfiguration(
          input.MonitoringConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ZeppelinApplicationConfigurationUpdate = (
  input: ZeppelinApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogConfigurationUpdate !== undefined &&
      input.CatalogConfigurationUpdate !== null && {
        CatalogConfigurationUpdate: serializeAws_json1_1CatalogConfigurationUpdate(
          input.CatalogConfigurationUpdate,
          context
        ),
      }),
    ...(input.CustomArtifactsConfigurationUpdate !== undefined &&
      input.CustomArtifactsConfigurationUpdate !== null && {
        CustomArtifactsConfigurationUpdate: serializeAws_json1_1CustomArtifactsConfigurationList(
          input.CustomArtifactsConfigurationUpdate,
          context
        ),
      }),
    ...(input.DeployAsApplicationConfigurationUpdate !== undefined &&
      input.DeployAsApplicationConfigurationUpdate !== null && {
        DeployAsApplicationConfigurationUpdate: serializeAws_json1_1DeployAsApplicationConfigurationUpdate(
          input.DeployAsApplicationConfigurationUpdate,
          context
        ),
      }),
    ...(input.MonitoringConfigurationUpdate !== undefined &&
      input.MonitoringConfigurationUpdate !== null && {
        MonitoringConfigurationUpdate: serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate(
          input.MonitoringConfigurationUpdate,
          context
        ),
      }),
  };
};

const serializeAws_json1_1ZeppelinMonitoringConfiguration = (
  input: ZeppelinMonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }),
  };
};

const serializeAws_json1_1ZeppelinMonitoringConfigurationUpdate = (
  input: ZeppelinMonitoringConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogLevelUpdate !== undefined &&
      input.LogLevelUpdate !== null && { LogLevelUpdate: input.LogLevelUpdate }),
  };
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationCloudWatchLoggingOptionResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputProcessingConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    InputId: __expectString(output.InputId),
    InputProcessingConfigurationDescription:
      output.InputProcessingConfigurationDescription !== undefined &&
      output.InputProcessingConfigurationDescription !== null
        ? deserializeAws_json1_1InputProcessingConfigurationDescription(
            output.InputProcessingConfigurationDescription,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1AddApplicationInputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    InputDescriptions:
      output.InputDescriptions !== undefined && output.InputDescriptions !== null
        ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AddApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationOutputResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    OutputDescriptions:
      output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
        ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationReferenceDataSourceResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
        ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AddApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationVpcConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    VpcConfigurationDescription:
      output.VpcConfigurationDescription !== undefined && output.VpcConfigurationDescription !== null
        ? deserializeAws_json1_1VpcConfigurationDescription(output.VpcConfigurationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ApplicationCodeConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationCodeConfigurationDescription => {
  return {
    CodeContentDescription:
      output.CodeContentDescription !== undefined && output.CodeContentDescription !== null
        ? deserializeAws_json1_1CodeContentDescription(output.CodeContentDescription, context)
        : undefined,
    CodeContentType: __expectString(output.CodeContentType),
  } as any;
};

const deserializeAws_json1_1ApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationConfigurationDescription => {
  return {
    ApplicationCodeConfigurationDescription:
      output.ApplicationCodeConfigurationDescription !== undefined &&
      output.ApplicationCodeConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationCodeConfigurationDescription(
            output.ApplicationCodeConfigurationDescription,
            context
          )
        : undefined,
    ApplicationSnapshotConfigurationDescription:
      output.ApplicationSnapshotConfigurationDescription !== undefined &&
      output.ApplicationSnapshotConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationSnapshotConfigurationDescription(
            output.ApplicationSnapshotConfigurationDescription,
            context
          )
        : undefined,
    EnvironmentPropertyDescriptions:
      output.EnvironmentPropertyDescriptions !== undefined && output.EnvironmentPropertyDescriptions !== null
        ? deserializeAws_json1_1EnvironmentPropertyDescriptions(output.EnvironmentPropertyDescriptions, context)
        : undefined,
    FlinkApplicationConfigurationDescription:
      output.FlinkApplicationConfigurationDescription !== undefined &&
      output.FlinkApplicationConfigurationDescription !== null
        ? deserializeAws_json1_1FlinkApplicationConfigurationDescription(
            output.FlinkApplicationConfigurationDescription,
            context
          )
        : undefined,
    RunConfigurationDescription:
      output.RunConfigurationDescription !== undefined && output.RunConfigurationDescription !== null
        ? deserializeAws_json1_1RunConfigurationDescription(output.RunConfigurationDescription, context)
        : undefined,
    SqlApplicationConfigurationDescription:
      output.SqlApplicationConfigurationDescription !== undefined &&
      output.SqlApplicationConfigurationDescription !== null
        ? deserializeAws_json1_1SqlApplicationConfigurationDescription(
            output.SqlApplicationConfigurationDescription,
            context
          )
        : undefined,
    VpcConfigurationDescriptions:
      output.VpcConfigurationDescriptions !== undefined && output.VpcConfigurationDescriptions !== null
        ? deserializeAws_json1_1VpcConfigurationDescriptions(output.VpcConfigurationDescriptions, context)
        : undefined,
    ZeppelinApplicationConfigurationDescription:
      output.ZeppelinApplicationConfigurationDescription !== undefined &&
      output.ZeppelinApplicationConfigurationDescription !== null
        ? deserializeAws_json1_1ZeppelinApplicationConfigurationDescription(
            output.ZeppelinApplicationConfigurationDescription,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ApplicationDetail = (output: any, context: __SerdeContext): ApplicationDetail => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationConfigurationDescription:
      output.ApplicationConfigurationDescription !== undefined && output.ApplicationConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationConfigurationDescription(output.ApplicationConfigurationDescription, context)
        : undefined,
    ApplicationDescription: __expectString(output.ApplicationDescription),
    ApplicationMaintenanceConfigurationDescription:
      output.ApplicationMaintenanceConfigurationDescription !== undefined &&
      output.ApplicationMaintenanceConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription(
            output.ApplicationMaintenanceConfigurationDescription,
            context
          )
        : undefined,
    ApplicationMode: __expectString(output.ApplicationMode),
    ApplicationName: __expectString(output.ApplicationName),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    ApplicationVersionRolledBackFrom: __expectInt(output.ApplicationVersionRolledBackFrom),
    ApplicationVersionRolledBackTo: __expectInt(output.ApplicationVersionRolledBackTo),
    ApplicationVersionUpdatedFrom: __expectInt(output.ApplicationVersionUpdatedFrom),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
    ConditionalToken: __expectString(output.ConditionalToken),
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp !== undefined && output.LastUpdateTimestamp !== null
        ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
        : undefined,
    RuntimeEnvironment: __expectString(output.RuntimeEnvironment),
    ServiceExecutionRole: __expectString(output.ServiceExecutionRole),
  } as any;
};

const deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationMaintenanceConfigurationDescription => {
  return {
    ApplicationMaintenanceWindowEndTime: __expectString(output.ApplicationMaintenanceWindowEndTime),
    ApplicationMaintenanceWindowStartTime: __expectString(output.ApplicationMaintenanceWindowStartTime),
  } as any;
};

const deserializeAws_json1_1ApplicationRestoreConfiguration = (
  output: any,
  context: __SerdeContext
): ApplicationRestoreConfiguration => {
  return {
    ApplicationRestoreType: __expectString(output.ApplicationRestoreType),
    SnapshotName: __expectString(output.SnapshotName),
  } as any;
};

const deserializeAws_json1_1ApplicationSnapshotConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationSnapshotConfigurationDescription => {
  return {
    SnapshotsEnabled: __expectBoolean(output.SnapshotsEnabled),
  } as any;
};

const deserializeAws_json1_1ApplicationSummaries = (output: any, context: __SerdeContext): ApplicationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationSummary(entry, context);
    });
};

const deserializeAws_json1_1ApplicationSummary = (output: any, context: __SerdeContext): ApplicationSummary => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationMode: __expectString(output.ApplicationMode),
    ApplicationName: __expectString(output.ApplicationName),
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    RuntimeEnvironment: __expectString(output.RuntimeEnvironment),
  } as any;
};

const deserializeAws_json1_1ApplicationVersionSummaries = (
  output: any,
  context: __SerdeContext
): ApplicationVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ApplicationVersionSummary(entry, context);
    });
};

const deserializeAws_json1_1ApplicationVersionSummary = (
  output: any,
  context: __SerdeContext
): ApplicationVersionSummary => {
  return {
    ApplicationStatus: __expectString(output.ApplicationStatus),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
  } as any;
};

const deserializeAws_json1_1CatalogConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CatalogConfigurationDescription => {
  return {
    GlueDataCatalogConfigurationDescription:
      output.GlueDataCatalogConfigurationDescription !== undefined &&
      output.GlueDataCatalogConfigurationDescription !== null
        ? deserializeAws_json1_1GlueDataCatalogConfigurationDescription(
            output.GlueDataCatalogConfigurationDescription,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1CheckpointConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CheckpointConfigurationDescription => {
  return {
    CheckpointInterval: __expectInt(output.CheckpointInterval),
    CheckpointingEnabled: __expectBoolean(output.CheckpointingEnabled),
    ConfigurationType: __expectString(output.ConfigurationType),
    MinPauseBetweenCheckpoints: __expectInt(output.MinPauseBetweenCheckpoints),
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription => {
  return {
    CloudWatchLoggingOptionId: __expectString(output.CloudWatchLoggingOptionId),
    LogStreamARN: __expectString(output.LogStreamARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context);
    });
};

const deserializeAws_json1_1CodeContentDescription = (output: any, context: __SerdeContext): CodeContentDescription => {
  return {
    CodeMD5: __expectString(output.CodeMD5),
    CodeSize: __expectInt(output.CodeSize),
    S3ApplicationCodeLocationDescription:
      output.S3ApplicationCodeLocationDescription !== undefined && output.S3ApplicationCodeLocationDescription !== null
        ? deserializeAws_json1_1S3ApplicationCodeLocationDescription(
            output.S3ApplicationCodeLocationDescription,
            context
          )
        : undefined,
    TextContent: __expectString(output.TextContent),
  } as any;
};

const deserializeAws_json1_1CodeValidationException = (
  output: any,
  context: __SerdeContext
): CodeValidationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CreateApplicationPresignedUrlResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationPresignedUrlResponse => {
  return {
    AuthorizedUrl: __expectString(output.AuthorizedUrl),
  } as any;
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationSnapshotResponse => {
  return {} as any;
};

const deserializeAws_json1_1CSVMappingParameters = (output: any, context: __SerdeContext): CSVMappingParameters => {
  return {
    RecordColumnDelimiter: __expectString(output.RecordColumnDelimiter),
    RecordRowDelimiter: __expectString(output.RecordRowDelimiter),
  } as any;
};

const deserializeAws_json1_1CustomArtifactConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CustomArtifactConfigurationDescription => {
  return {
    ArtifactType: __expectString(output.ArtifactType),
    MavenReferenceDescription:
      output.MavenReferenceDescription !== undefined && output.MavenReferenceDescription !== null
        ? deserializeAws_json1_1MavenReference(output.MavenReferenceDescription, context)
        : undefined,
    S3ContentLocationDescription:
      output.S3ContentLocationDescription !== undefined && output.S3ContentLocationDescription !== null
        ? deserializeAws_json1_1S3ContentLocation(output.S3ContentLocationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList = (
  output: any,
  context: __SerdeContext
): CustomArtifactConfigurationDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CustomArtifactConfigurationDescription(entry, context);
    });
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationCloudWatchLoggingOptionResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions !== undefined && output.CloudWatchLoggingOptionDescriptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(output.CloudWatchLoggingOptionDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationInputProcessingConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
  } as any;
};

const deserializeAws_json1_1DeleteApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationOutputResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
  } as any;
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationReferenceDataSourceResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
  } as any;
};

const deserializeAws_json1_1DeleteApplicationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationSnapshotResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationVpcConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
  } as any;
};

const deserializeAws_json1_1DeployAsApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): DeployAsApplicationConfigurationDescription => {
  return {
    S3ContentLocationDescription:
      output.S3ContentLocationDescription !== undefined && output.S3ContentLocationDescription !== null
        ? deserializeAws_json1_1S3ContentBaseLocationDescription(output.S3ContentLocationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeApplicationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationSnapshotResponse => {
  return {
    SnapshotDetails:
      output.SnapshotDetails !== undefined && output.SnapshotDetails !== null
        ? deserializeAws_json1_1SnapshotDetails(output.SnapshotDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeApplicationVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationVersionResponse => {
  return {
    ApplicationVersionDetail:
      output.ApplicationVersionDetail !== undefined && output.ApplicationVersionDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(output.ApplicationVersionDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DestinationSchema = (output: any, context: __SerdeContext): DestinationSchema => {
  return {
    RecordFormatType: __expectString(output.RecordFormatType),
  } as any;
};

const deserializeAws_json1_1DiscoverInputSchemaResponse = (
  output: any,
  context: __SerdeContext
): DiscoverInputSchemaResponse => {
  return {
    InputSchema:
      output.InputSchema !== undefined && output.InputSchema !== null
        ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
        : undefined,
    ParsedInputRecords:
      output.ParsedInputRecords !== undefined && output.ParsedInputRecords !== null
        ? deserializeAws_json1_1ParsedInputRecords(output.ParsedInputRecords, context)
        : undefined,
    ProcessedInputRecords:
      output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
        ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
        : undefined,
    RawInputRecords:
      output.RawInputRecords !== undefined && output.RawInputRecords !== null
        ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EnvironmentPropertyDescriptions = (
  output: any,
  context: __SerdeContext
): EnvironmentPropertyDescriptions => {
  return {
    PropertyGroupDescriptions:
      output.PropertyGroupDescriptions !== undefined && output.PropertyGroupDescriptions !== null
        ? deserializeAws_json1_1PropertyGroups(output.PropertyGroupDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FlinkApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): FlinkApplicationConfigurationDescription => {
  return {
    CheckpointConfigurationDescription:
      output.CheckpointConfigurationDescription !== undefined && output.CheckpointConfigurationDescription !== null
        ? deserializeAws_json1_1CheckpointConfigurationDescription(output.CheckpointConfigurationDescription, context)
        : undefined,
    JobPlanDescription: __expectString(output.JobPlanDescription),
    MonitoringConfigurationDescription:
      output.MonitoringConfigurationDescription !== undefined && output.MonitoringConfigurationDescription !== null
        ? deserializeAws_json1_1MonitoringConfigurationDescription(output.MonitoringConfigurationDescription, context)
        : undefined,
    ParallelismConfigurationDescription:
      output.ParallelismConfigurationDescription !== undefined && output.ParallelismConfigurationDescription !== null
        ? deserializeAws_json1_1ParallelismConfigurationDescription(output.ParallelismConfigurationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FlinkRunConfiguration = (output: any, context: __SerdeContext): FlinkRunConfiguration => {
  return {
    AllowNonRestoredState: __expectBoolean(output.AllowNonRestoredState),
  } as any;
};

const deserializeAws_json1_1GlueDataCatalogConfigurationDescription = (
  output: any,
  context: __SerdeContext
): GlueDataCatalogConfigurationDescription => {
  return {
    DatabaseARN: __expectString(output.DatabaseARN),
  } as any;
};

const deserializeAws_json1_1InAppStreamNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InputDescription = (output: any, context: __SerdeContext): InputDescription => {
  return {
    InAppStreamNames:
      output.InAppStreamNames !== undefined && output.InAppStreamNames !== null
        ? deserializeAws_json1_1InAppStreamNames(output.InAppStreamNames, context)
        : undefined,
    InputId: __expectString(output.InputId),
    InputParallelism:
      output.InputParallelism !== undefined && output.InputParallelism !== null
        ? deserializeAws_json1_1InputParallelism(output.InputParallelism, context)
        : undefined,
    InputProcessingConfigurationDescription:
      output.InputProcessingConfigurationDescription !== undefined &&
      output.InputProcessingConfigurationDescription !== null
        ? deserializeAws_json1_1InputProcessingConfigurationDescription(
            output.InputProcessingConfigurationDescription,
            context
          )
        : undefined,
    InputSchema:
      output.InputSchema !== undefined && output.InputSchema !== null
        ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
        : undefined,
    InputStartingPositionConfiguration:
      output.InputStartingPositionConfiguration !== undefined && output.InputStartingPositionConfiguration !== null
        ? deserializeAws_json1_1InputStartingPositionConfiguration(output.InputStartingPositionConfiguration, context)
        : undefined,
    KinesisFirehoseInputDescription:
      output.KinesisFirehoseInputDescription !== undefined && output.KinesisFirehoseInputDescription !== null
        ? deserializeAws_json1_1KinesisFirehoseInputDescription(output.KinesisFirehoseInputDescription, context)
        : undefined,
    KinesisStreamsInputDescription:
      output.KinesisStreamsInputDescription !== undefined && output.KinesisStreamsInputDescription !== null
        ? deserializeAws_json1_1KinesisStreamsInputDescription(output.KinesisStreamsInputDescription, context)
        : undefined,
    NamePrefix: __expectString(output.NamePrefix),
  } as any;
};

const deserializeAws_json1_1InputDescriptions = (output: any, context: __SerdeContext): InputDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InputDescription(entry, context);
    });
};

const deserializeAws_json1_1InputLambdaProcessorDescription = (
  output: any,
  context: __SerdeContext
): InputLambdaProcessorDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1InputParallelism = (output: any, context: __SerdeContext): InputParallelism => {
  return {
    Count: __expectInt(output.Count),
  } as any;
};

const deserializeAws_json1_1InputProcessingConfigurationDescription = (
  output: any,
  context: __SerdeContext
): InputProcessingConfigurationDescription => {
  return {
    InputLambdaProcessorDescription:
      output.InputLambdaProcessorDescription !== undefined && output.InputLambdaProcessorDescription !== null
        ? deserializeAws_json1_1InputLambdaProcessorDescription(output.InputLambdaProcessorDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputStartingPositionConfiguration = (
  output: any,
  context: __SerdeContext
): InputStartingPositionConfiguration => {
  return {
    InputStartingPosition: __expectString(output.InputStartingPosition),
  } as any;
};

const deserializeAws_json1_1InvalidApplicationConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationConfigurationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1JSONMappingParameters = (output: any, context: __SerdeContext): JSONMappingParameters => {
  return {
    RecordRowPath: __expectString(output.RecordRowPath),
  } as any;
};

const deserializeAws_json1_1KinesisFirehoseInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseInputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KinesisFirehoseOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KinesisStreamsInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsInputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1KinesisStreamsOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1LambdaOutputDescription = (
  output: any,
  context: __SerdeContext
): LambdaOutputDescription => {
  return {
    ResourceARN: __expectString(output.ResourceARN),
    RoleARN: __expectString(output.RoleARN),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListApplicationSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    SnapshotSummaries:
      output.SnapshotSummaries !== undefined && output.SnapshotSummaries !== null
        ? deserializeAws_json1_1SnapshotSummaries(output.SnapshotSummaries, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationsResponse => {
  return {
    ApplicationSummaries:
      output.ApplicationSummaries !== undefined && output.ApplicationSummaries !== null
        ? deserializeAws_json1_1ApplicationSummaries(output.ApplicationSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListApplicationVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationVersionsResponse => {
  return {
    ApplicationVersionSummaries:
      output.ApplicationVersionSummaries !== undefined && output.ApplicationVersionSummaries !== null
        ? deserializeAws_json1_1ApplicationVersionSummaries(output.ApplicationVersionSummaries, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MappingParameters = (output: any, context: __SerdeContext): MappingParameters => {
  return {
    CSVMappingParameters:
      output.CSVMappingParameters !== undefined && output.CSVMappingParameters !== null
        ? deserializeAws_json1_1CSVMappingParameters(output.CSVMappingParameters, context)
        : undefined,
    JSONMappingParameters:
      output.JSONMappingParameters !== undefined && output.JSONMappingParameters !== null
        ? deserializeAws_json1_1JSONMappingParameters(output.JSONMappingParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MavenReference = (output: any, context: __SerdeContext): MavenReference => {
  return {
    ArtifactId: __expectString(output.ArtifactId),
    GroupId: __expectString(output.GroupId),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1MonitoringConfigurationDescription = (
  output: any,
  context: __SerdeContext
): MonitoringConfigurationDescription => {
  return {
    ConfigurationType: __expectString(output.ConfigurationType),
    LogLevel: __expectString(output.LogLevel),
    MetricsLevel: __expectString(output.MetricsLevel),
  } as any;
};

const deserializeAws_json1_1OutputDescription = (output: any, context: __SerdeContext): OutputDescription => {
  return {
    DestinationSchema:
      output.DestinationSchema !== undefined && output.DestinationSchema !== null
        ? deserializeAws_json1_1DestinationSchema(output.DestinationSchema, context)
        : undefined,
    KinesisFirehoseOutputDescription:
      output.KinesisFirehoseOutputDescription !== undefined && output.KinesisFirehoseOutputDescription !== null
        ? deserializeAws_json1_1KinesisFirehoseOutputDescription(output.KinesisFirehoseOutputDescription, context)
        : undefined,
    KinesisStreamsOutputDescription:
      output.KinesisStreamsOutputDescription !== undefined && output.KinesisStreamsOutputDescription !== null
        ? deserializeAws_json1_1KinesisStreamsOutputDescription(output.KinesisStreamsOutputDescription, context)
        : undefined,
    LambdaOutputDescription:
      output.LambdaOutputDescription !== undefined && output.LambdaOutputDescription !== null
        ? deserializeAws_json1_1LambdaOutputDescription(output.LambdaOutputDescription, context)
        : undefined,
    Name: __expectString(output.Name),
    OutputId: __expectString(output.OutputId),
  } as any;
};

const deserializeAws_json1_1OutputDescriptions = (output: any, context: __SerdeContext): OutputDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OutputDescription(entry, context);
    });
};

const deserializeAws_json1_1ParallelismConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ParallelismConfigurationDescription => {
  return {
    AutoScalingEnabled: __expectBoolean(output.AutoScalingEnabled),
    ConfigurationType: __expectString(output.ConfigurationType),
    CurrentParallelism: __expectInt(output.CurrentParallelism),
    Parallelism: __expectInt(output.Parallelism),
    ParallelismPerKPU: __expectInt(output.ParallelismPerKPU),
  } as any;
};

const deserializeAws_json1_1ParsedInputRecord = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ParsedInputRecords = (output: any, context: __SerdeContext): string[][] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParsedInputRecord(entry, context);
    });
};

const deserializeAws_json1_1ProcessedInputRecords = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1PropertyGroup = (output: any, context: __SerdeContext): PropertyGroup => {
  return {
    PropertyGroupId: __expectString(output.PropertyGroupId),
    PropertyMap:
      output.PropertyMap !== undefined && output.PropertyMap !== null
        ? deserializeAws_json1_1PropertyMap(output.PropertyMap, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PropertyGroups = (output: any, context: __SerdeContext): PropertyGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PropertyGroup(entry, context);
    });
};

const deserializeAws_json1_1PropertyMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_json1_1RawInputRecords = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1RecordColumn = (output: any, context: __SerdeContext): RecordColumn => {
  return {
    Mapping: __expectString(output.Mapping),
    Name: __expectString(output.Name),
    SqlType: __expectString(output.SqlType),
  } as any;
};

const deserializeAws_json1_1RecordColumns = (output: any, context: __SerdeContext): RecordColumn[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecordColumn(entry, context);
    });
};

const deserializeAws_json1_1RecordFormat = (output: any, context: __SerdeContext): RecordFormat => {
  return {
    MappingParameters:
      output.MappingParameters !== undefined && output.MappingParameters !== null
        ? deserializeAws_json1_1MappingParameters(output.MappingParameters, context)
        : undefined,
    RecordFormatType: __expectString(output.RecordFormatType),
  } as any;
};

const deserializeAws_json1_1ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription => {
  return {
    ReferenceId: __expectString(output.ReferenceId),
    ReferenceSchema:
      output.ReferenceSchema !== undefined && output.ReferenceSchema !== null
        ? deserializeAws_json1_1SourceSchema(output.ReferenceSchema, context)
        : undefined,
    S3ReferenceDataSourceDescription:
      output.S3ReferenceDataSourceDescription !== undefined && output.S3ReferenceDataSourceDescription !== null
        ? deserializeAws_json1_1S3ReferenceDataSourceDescription(output.S3ReferenceDataSourceDescription, context)
        : undefined,
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_json1_1ReferenceDataSourceDescriptions = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReferenceDataSourceDescription(entry, context);
    });
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ResourceProvisionedThroughputExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1RollbackApplicationResponse = (
  output: any,
  context: __SerdeContext
): RollbackApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1RunConfigurationDescription = (
  output: any,
  context: __SerdeContext
): RunConfigurationDescription => {
  return {
    ApplicationRestoreConfigurationDescription:
      output.ApplicationRestoreConfigurationDescription !== undefined &&
      output.ApplicationRestoreConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationRestoreConfiguration(
            output.ApplicationRestoreConfigurationDescription,
            context
          )
        : undefined,
    FlinkRunConfigurationDescription:
      output.FlinkRunConfigurationDescription !== undefined && output.FlinkRunConfigurationDescription !== null
        ? deserializeAws_json1_1FlinkRunConfiguration(output.FlinkRunConfigurationDescription, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1S3ApplicationCodeLocationDescription = (
  output: any,
  context: __SerdeContext
): S3ApplicationCodeLocationDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ObjectVersion: __expectString(output.ObjectVersion),
  } as any;
};

const deserializeAws_json1_1S3ContentBaseLocationDescription = (
  output: any,
  context: __SerdeContext
): S3ContentBaseLocationDescription => {
  return {
    BasePath: __expectString(output.BasePath),
    BucketARN: __expectString(output.BucketARN),
  } as any;
};

const deserializeAws_json1_1S3ContentLocation = (output: any, context: __SerdeContext): S3ContentLocation => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ObjectVersion: __expectString(output.ObjectVersion),
  } as any;
};

const deserializeAws_json1_1S3ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): S3ReferenceDataSourceDescription => {
  return {
    BucketARN: __expectString(output.BucketARN),
    FileKey: __expectString(output.FileKey),
    ReferenceRoleARN: __expectString(output.ReferenceRoleARN),
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1SnapshotDetails = (output: any, context: __SerdeContext): SnapshotDetails => {
  return {
    ApplicationVersionId: __expectInt(output.ApplicationVersionId),
    SnapshotCreationTimestamp:
      output.SnapshotCreationTimestamp !== undefined && output.SnapshotCreationTimestamp !== null
        ? new Date(Math.round(output.SnapshotCreationTimestamp * 1000))
        : undefined,
    SnapshotName: __expectString(output.SnapshotName),
    SnapshotStatus: __expectString(output.SnapshotStatus),
  } as any;
};

const deserializeAws_json1_1SnapshotSummaries = (output: any, context: __SerdeContext): SnapshotDetails[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SnapshotDetails(entry, context);
    });
};

const deserializeAws_json1_1SourceSchema = (output: any, context: __SerdeContext): SourceSchema => {
  return {
    RecordColumns:
      output.RecordColumns !== undefined && output.RecordColumns !== null
        ? deserializeAws_json1_1RecordColumns(output.RecordColumns, context)
        : undefined,
    RecordEncoding: __expectString(output.RecordEncoding),
    RecordFormat:
      output.RecordFormat !== undefined && output.RecordFormat !== null
        ? deserializeAws_json1_1RecordFormat(output.RecordFormat, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SqlApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): SqlApplicationConfigurationDescription => {
  return {
    InputDescriptions:
      output.InputDescriptions !== undefined && output.InputDescriptions !== null
        ? deserializeAws_json1_1InputDescriptions(output.InputDescriptions, context)
        : undefined,
    OutputDescriptions:
      output.OutputDescriptions !== undefined && output.OutputDescriptions !== null
        ? deserializeAws_json1_1OutputDescriptions(output.OutputDescriptions, context)
        : undefined,
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions !== undefined && output.ReferenceDataSourceDescriptions !== null
        ? deserializeAws_json1_1ReferenceDataSourceDescriptions(output.ReferenceDataSourceDescriptions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StartApplicationResponse = (
  output: any,
  context: __SerdeContext
): StartApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1StopApplicationResponse = (
  output: any,
  context: __SerdeContext
): StopApplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UnableToDetectSchemaException = (
  output: any,
  context: __SerdeContext
): UnableToDetectSchemaException => {
  return {
    Message: __expectString(output.Message),
    ProcessedInputRecords:
      output.ProcessedInputRecords !== undefined && output.ProcessedInputRecords !== null
        ? deserializeAws_json1_1ProcessedInputRecords(output.ProcessedInputRecords, context)
        : undefined,
    RawInputRecords:
      output.RawInputRecords !== undefined && output.RawInputRecords !== null
        ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateApplicationMaintenanceConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationMaintenanceConfigurationResponse => {
  return {
    ApplicationARN: __expectString(output.ApplicationARN),
    ApplicationMaintenanceConfigurationDescription:
      output.ApplicationMaintenanceConfigurationDescription !== undefined &&
      output.ApplicationMaintenanceConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationMaintenanceConfigurationDescription(
            output.ApplicationMaintenanceConfigurationDescription,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  return {
    ApplicationDetail:
      output.ApplicationDetail !== undefined && output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(output.ApplicationDetail, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VpcConfigurationDescription = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcConfigurationId: __expectString(output.VpcConfigurationId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1VpcConfigurationDescriptions = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VpcConfigurationDescription(entry, context);
    });
};

const deserializeAws_json1_1ZeppelinApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ZeppelinApplicationConfigurationDescription => {
  return {
    CatalogConfigurationDescription:
      output.CatalogConfigurationDescription !== undefined && output.CatalogConfigurationDescription !== null
        ? deserializeAws_json1_1CatalogConfigurationDescription(output.CatalogConfigurationDescription, context)
        : undefined,
    CustomArtifactsConfigurationDescription:
      output.CustomArtifactsConfigurationDescription !== undefined &&
      output.CustomArtifactsConfigurationDescription !== null
        ? deserializeAws_json1_1CustomArtifactsConfigurationDescriptionList(
            output.CustomArtifactsConfigurationDescription,
            context
          )
        : undefined,
    DeployAsApplicationConfigurationDescription:
      output.DeployAsApplicationConfigurationDescription !== undefined &&
      output.DeployAsApplicationConfigurationDescription !== null
        ? deserializeAws_json1_1DeployAsApplicationConfigurationDescription(
            output.DeployAsApplicationConfigurationDescription,
            context
          )
        : undefined,
    MonitoringConfigurationDescription:
      output.MonitoringConfigurationDescription !== undefined && output.MonitoringConfigurationDescription !== null
        ? deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription(
            output.MonitoringConfigurationDescription,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1ZeppelinMonitoringConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ZeppelinMonitoringConfigurationDescription => {
  return {
    LogLevel: __expectString(output.LogLevel),
  } as any;
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
