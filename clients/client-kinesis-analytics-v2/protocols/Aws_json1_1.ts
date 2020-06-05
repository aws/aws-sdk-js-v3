import {
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput
} from "../commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput
} from "../commands/AddApplicationInputCommand";
import {
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput
} from "../commands/AddApplicationInputProcessingConfigurationCommand";
import {
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput
} from "../commands/AddApplicationOutputCommand";
import {
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput
} from "../commands/AddApplicationReferenceDataSourceCommand";
import {
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput
} from "../commands/AddApplicationVpcConfigurationCommand";
import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "../commands/CreateApplicationCommand";
import {
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput
} from "../commands/CreateApplicationSnapshotCommand";
import {
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput
} from "../commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "../commands/DeleteApplicationCommand";
import {
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput
} from "../commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput
} from "../commands/DeleteApplicationOutputCommand";
import {
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput
} from "../commands/DeleteApplicationReferenceDataSourceCommand";
import {
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput
} from "../commands/DeleteApplicationSnapshotCommand";
import {
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput
} from "../commands/DeleteApplicationVpcConfigurationCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput
} from "../commands/DescribeApplicationCommand";
import {
  DescribeApplicationSnapshotCommandInput,
  DescribeApplicationSnapshotCommandOutput
} from "../commands/DescribeApplicationSnapshotCommand";
import {
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput
} from "../commands/DiscoverInputSchemaCommand";
import {
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput
} from "../commands/ListApplicationSnapshotsCommand";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "../commands/ListApplicationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  StartApplicationCommandInput,
  StartApplicationCommandOutput
} from "../commands/StartApplicationCommand";
import {
  StopApplicationCommandInput,
  StopApplicationCommandOutput
} from "../commands/StopApplicationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "../commands/UpdateApplicationCommand";
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
  ApplicationRestoreConfiguration,
  ApplicationSnapshotConfiguration,
  ApplicationSnapshotConfigurationDescription,
  ApplicationSnapshotConfigurationUpdate,
  ApplicationSummary,
  CSVMappingParameters,
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
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationSnapshotRequest,
  CreateApplicationSnapshotResponse,
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
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationSnapshotRequest,
  DescribeApplicationSnapshotResponse,
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
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MappingParameters,
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
  RunConfiguration,
  RunConfigurationDescription,
  RunConfigurationUpdate,
  S3ApplicationCodeLocationDescription,
  S3Configuration,
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
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  VpcConfiguration,
  VpcConfigurationDescription,
  VpcConfigurationUpdate
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (
  input: AddApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationInputCommand = async (
  input: AddApplicationInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.AddApplicationInput"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationInputRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand = async (
  input: AddApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationOutputCommand = async (
  input: AddApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.AddApplicationOutput"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationOutputRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationReferenceDataSourceCommand = async (
  input: AddApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.AddApplicationReferenceDataSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddApplicationVpcConfigurationCommand = async (
  input: AddApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.AddApplicationVpcConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationVpcConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationCommand = async (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.CreateApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateApplicationSnapshotCommand = async (
  input: CreateApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.CreateApplicationSnapshot"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationSnapshotRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCommand = async (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.DeleteApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand = async (
  input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand = async (
  input: DeleteApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationOutputCommand = async (
  input: DeleteApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.DeleteApplicationOutput"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationOutputRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand = async (
  input: DeleteApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationSnapshotCommand = async (
  input: DeleteApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.DeleteApplicationSnapshot"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationSnapshotRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteApplicationVpcConfigurationCommand = async (
  input: DeleteApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationVpcConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationCommand = async (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.DescribeApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeApplicationSnapshotCommand = async (
  input: DescribeApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.DescribeApplicationSnapshot"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationSnapshotRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DiscoverInputSchemaCommand = async (
  input: DiscoverInputSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.DiscoverInputSchema"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DiscoverInputSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationsCommand = async (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.ListApplications"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListApplicationSnapshotsCommand = async (
  input: ListApplicationSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.ListApplicationSnapshots"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationSnapshotsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartApplicationCommand = async (
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.StartApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopApplicationCommand = async (
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.StopApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.TagResource"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateApplicationCommand = async (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "KinesisAnalytics_20180523.UpdateApplication"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse(
    data,
    context
  );
  const response: AddApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddApplicationCloudWatchLoggingOptionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddApplicationInputCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationInputResponse(data, context);
  const response: AddApplicationInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddApplicationInputResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse(
    data,
    context
  );
  const response: AddApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddApplicationInputProcessingConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddApplicationOutputCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationOutputResponse(data, context);
  const response: AddApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddApplicationOutputResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationReferenceDataSourceResponse(
    data,
    context
  );
  const response: AddApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddApplicationReferenceDataSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddApplicationVpcConfigurationResponse(
    data,
    context
  );
  const response: AddApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddApplicationVpcConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddApplicationVpcConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationResponse(data, context);
  const response: CreateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateApplicationSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateApplicationSnapshotResponse(
    data,
    context
  );
  const response: CreateApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateApplicationSnapshotResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesisanalyticsv2#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationResponse(data, context);
  const response: DeleteApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse(
    data,
    context
  );
  const response: DeleteApplicationCloudWatchLoggingOptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationCloudWatchLoggingOptionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse(
    data,
    context
  );
  const response: DeleteApplicationInputProcessingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationInputProcessingConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationOutputCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationOutputResponse(
    data,
    context
  );
  const response: DeleteApplicationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationOutputResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse(
    data,
    context
  );
  const response: DeleteApplicationReferenceDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationReferenceDataSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationSnapshotResponse(
    data,
    context
  );
  const response: DeleteApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationSnapshotResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse(
    data,
    context
  );
  const response: DeleteApplicationVpcConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteApplicationVpcConfigurationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeApplicationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationResponse(data, context);
  const response: DescribeApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeApplicationSnapshotCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeApplicationSnapshotResponse(
    data,
    context
  );
  const response: DescribeApplicationSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeApplicationSnapshotResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeApplicationSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DiscoverInputSchemaCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverInputSchemaResponse(data, context);
  const response: DiscoverInputSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DiscoverInputSchemaResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DiscoverInputSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceProvisionedThroughputExceededException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kinesisanalyticsv2#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnableToDetectSchemaException":
    case "com.amazonaws.kinesisanalyticsv2#UnableToDetectSchemaException":
      response = {
        ...(await deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListApplicationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationsResponse(data, context);
  const response: ListApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListApplicationSnapshotsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListApplicationSnapshotsResponse(
    data,
    context
  );
  const response: ListApplicationSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListApplicationSnapshotsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListApplicationSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesisanalyticsv2#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartApplicationResponse(data, context);
  const response: StartApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopApplicationResponse(data, context);
  const response: StopApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesisanalyticsv2#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateApplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateApplicationResponse(data, context);
  const response: UpdateApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateApplicationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesisanalyticsv2#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesisanalyticsv2#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesisanalyticsv2#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesisanalyticsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1CodeValidationException(
    body,
    context
  );
  const contents: CodeValidationException = {
    name: "CodeValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidApplicationConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidApplicationConfigurationException(
    body,
    context
  );
  const contents: InvalidApplicationConfigurationException = {
    name: "InvalidApplicationConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgumentException(
    body,
    context
  );
  const contents: InvalidArgumentException = {
    name: "InvalidArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceProvisionedThroughputExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceProvisionedThroughputExceededException(
    body,
    context
  );
  const contents: ResourceProvisionedThroughputExceededException = {
    name: "ResourceProvisionedThroughputExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    body,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnableToDetectSchemaExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnableToDetectSchemaException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnableToDetectSchemaException(
    body,
    context
  );
  const contents: UnableToDetectSchemaException = {
    name: "UnableToDetectSchemaException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(
    body,
    context
  );
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest = (
  input: AddApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CloudWatchLoggingOption !== undefined && {
      CloudWatchLoggingOption: serializeAws_json1_1CloudWatchLoggingOption(
        input.CloudWatchLoggingOption,
        context
      )
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    })
  };
};

const serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = (
  input: AddApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.InputId !== undefined && { InputId: input.InputId }),
    ...(input.InputProcessingConfiguration !== undefined && {
      InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
        input.InputProcessingConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1AddApplicationInputRequest = (
  input: AddApplicationInputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.Input !== undefined && {
      Input: serializeAws_json1_1Input(input.Input, context)
    })
  };
};

const serializeAws_json1_1AddApplicationOutputRequest = (
  input: AddApplicationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.Output !== undefined && {
      Output: serializeAws_json1_1Output(input.Output, context)
    })
  };
};

const serializeAws_json1_1AddApplicationReferenceDataSourceRequest = (
  input: AddApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.ReferenceDataSource !== undefined && {
      ReferenceDataSource: serializeAws_json1_1ReferenceDataSource(
        input.ReferenceDataSource,
        context
      )
    })
  };
};

const serializeAws_json1_1AddApplicationVpcConfigurationRequest = (
  input: AddApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.VpcConfiguration !== undefined && {
      VpcConfiguration: serializeAws_json1_1VpcConfiguration(
        input.VpcConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1ApplicationCodeConfiguration = (
  input: ApplicationCodeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeContent !== undefined && {
      CodeContent: serializeAws_json1_1CodeContent(input.CodeContent, context)
    }),
    ...(input.CodeContentType !== undefined && {
      CodeContentType: input.CodeContentType
    })
  };
};

const serializeAws_json1_1ApplicationCodeConfigurationUpdate = (
  input: ApplicationCodeConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CodeContentTypeUpdate !== undefined && {
      CodeContentTypeUpdate: input.CodeContentTypeUpdate
    }),
    ...(input.CodeContentUpdate !== undefined && {
      CodeContentUpdate: serializeAws_json1_1CodeContentUpdate(
        input.CodeContentUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_1ApplicationConfiguration = (
  input: ApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationCodeConfiguration !== undefined && {
      ApplicationCodeConfiguration: serializeAws_json1_1ApplicationCodeConfiguration(
        input.ApplicationCodeConfiguration,
        context
      )
    }),
    ...(input.ApplicationSnapshotConfiguration !== undefined && {
      ApplicationSnapshotConfiguration: serializeAws_json1_1ApplicationSnapshotConfiguration(
        input.ApplicationSnapshotConfiguration,
        context
      )
    }),
    ...(input.EnvironmentProperties !== undefined && {
      EnvironmentProperties: serializeAws_json1_1EnvironmentProperties(
        input.EnvironmentProperties,
        context
      )
    }),
    ...(input.FlinkApplicationConfiguration !== undefined && {
      FlinkApplicationConfiguration: serializeAws_json1_1FlinkApplicationConfiguration(
        input.FlinkApplicationConfiguration,
        context
      )
    }),
    ...(input.SqlApplicationConfiguration !== undefined && {
      SqlApplicationConfiguration: serializeAws_json1_1SqlApplicationConfiguration(
        input.SqlApplicationConfiguration,
        context
      )
    }),
    ...(input.VpcConfigurations !== undefined && {
      VpcConfigurations: serializeAws_json1_1VpcConfigurations(
        input.VpcConfigurations,
        context
      )
    })
  };
};

const serializeAws_json1_1ApplicationConfigurationUpdate = (
  input: ApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationCodeConfigurationUpdate !== undefined && {
      ApplicationCodeConfigurationUpdate: serializeAws_json1_1ApplicationCodeConfigurationUpdate(
        input.ApplicationCodeConfigurationUpdate,
        context
      )
    }),
    ...(input.ApplicationSnapshotConfigurationUpdate !== undefined && {
      ApplicationSnapshotConfigurationUpdate: serializeAws_json1_1ApplicationSnapshotConfigurationUpdate(
        input.ApplicationSnapshotConfigurationUpdate,
        context
      )
    }),
    ...(input.EnvironmentPropertyUpdates !== undefined && {
      EnvironmentPropertyUpdates: serializeAws_json1_1EnvironmentPropertyUpdates(
        input.EnvironmentPropertyUpdates,
        context
      )
    }),
    ...(input.FlinkApplicationConfigurationUpdate !== undefined && {
      FlinkApplicationConfigurationUpdate: serializeAws_json1_1FlinkApplicationConfigurationUpdate(
        input.FlinkApplicationConfigurationUpdate,
        context
      )
    }),
    ...(input.SqlApplicationConfigurationUpdate !== undefined && {
      SqlApplicationConfigurationUpdate: serializeAws_json1_1SqlApplicationConfigurationUpdate(
        input.SqlApplicationConfigurationUpdate,
        context
      )
    }),
    ...(input.VpcConfigurationUpdates !== undefined && {
      VpcConfigurationUpdates: serializeAws_json1_1VpcConfigurationUpdates(
        input.VpcConfigurationUpdates,
        context
      )
    })
  };
};

const serializeAws_json1_1ApplicationRestoreConfiguration = (
  input: ApplicationRestoreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationRestoreType !== undefined && {
      ApplicationRestoreType: input.ApplicationRestoreType
    }),
    ...(input.SnapshotName !== undefined && {
      SnapshotName: input.SnapshotName
    })
  };
};

const serializeAws_json1_1ApplicationSnapshotConfiguration = (
  input: ApplicationSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotsEnabled !== undefined && {
      SnapshotsEnabled: input.SnapshotsEnabled
    })
  };
};

const serializeAws_json1_1ApplicationSnapshotConfigurationUpdate = (
  input: ApplicationSnapshotConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.SnapshotsEnabledUpdate !== undefined && {
      SnapshotsEnabledUpdate: input.SnapshotsEnabledUpdate
    })
  };
};

const serializeAws_json1_1CheckpointConfiguration = (
  input: CheckpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointInterval !== undefined && {
      CheckpointInterval: input.CheckpointInterval
    }),
    ...(input.CheckpointingEnabled !== undefined && {
      CheckpointingEnabled: input.CheckpointingEnabled
    }),
    ...(input.ConfigurationType !== undefined && {
      ConfigurationType: input.ConfigurationType
    }),
    ...(input.MinPauseBetweenCheckpoints !== undefined && {
      MinPauseBetweenCheckpoints: input.MinPauseBetweenCheckpoints
    })
  };
};

const serializeAws_json1_1CheckpointConfigurationUpdate = (
  input: CheckpointConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointIntervalUpdate !== undefined && {
      CheckpointIntervalUpdate: input.CheckpointIntervalUpdate
    }),
    ...(input.CheckpointingEnabledUpdate !== undefined && {
      CheckpointingEnabledUpdate: input.CheckpointingEnabledUpdate
    }),
    ...(input.ConfigurationTypeUpdate !== undefined && {
      ConfigurationTypeUpdate: input.ConfigurationTypeUpdate
    }),
    ...(input.MinPauseBetweenCheckpointsUpdate !== undefined && {
      MinPauseBetweenCheckpointsUpdate: input.MinPauseBetweenCheckpointsUpdate
    })
  };
};

const serializeAws_json1_1CloudWatchLoggingOption = (
  input: CloudWatchLoggingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogStreamARN !== undefined && {
      LogStreamARN: input.LogStreamARN
    })
  };
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: CloudWatchLoggingOption[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1CloudWatchLoggingOption(entry, context)
  );
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdate = (
  input: CloudWatchLoggingOptionUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLoggingOptionId !== undefined && {
      CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId
    }),
    ...(input.LogStreamARNUpdate !== undefined && {
      LogStreamARNUpdate: input.LogStreamARNUpdate
    })
  };
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdates = (
  input: CloudWatchLoggingOptionUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context)
  );
};

const serializeAws_json1_1CodeContent = (
  input: CodeContent,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3ContentLocation !== undefined && {
      S3ContentLocation: serializeAws_json1_1S3ContentLocation(
        input.S3ContentLocation,
        context
      )
    }),
    ...(input.TextContent !== undefined && { TextContent: input.TextContent }),
    ...(input.ZipFileContent !== undefined && {
      ZipFileContent: context.base64Encoder(input.ZipFileContent)
    })
  };
};

const serializeAws_json1_1CodeContentUpdate = (
  input: CodeContentUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3ContentLocationUpdate !== undefined && {
      S3ContentLocationUpdate: serializeAws_json1_1S3ContentLocationUpdate(
        input.S3ContentLocationUpdate,
        context
      )
    }),
    ...(input.TextContentUpdate !== undefined && {
      TextContentUpdate: input.TextContentUpdate
    }),
    ...(input.ZipFileContentUpdate !== undefined && {
      ZipFileContentUpdate: context.base64Encoder(input.ZipFileContentUpdate)
    })
  };
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationConfiguration !== undefined && {
      ApplicationConfiguration: serializeAws_json1_1ApplicationConfiguration(
        input.ApplicationConfiguration,
        context
      )
    }),
    ...(input.ApplicationDescription !== undefined && {
      ApplicationDescription: input.ApplicationDescription
    }),
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CloudWatchLoggingOptions !== undefined && {
      CloudWatchLoggingOptions: serializeAws_json1_1CloudWatchLoggingOptions(
        input.CloudWatchLoggingOptions,
        context
      )
    }),
    ...(input.RuntimeEnvironment !== undefined && {
      RuntimeEnvironment: input.RuntimeEnvironment
    }),
    ...(input.ServiceExecutionRole !== undefined && {
      ServiceExecutionRole: input.ServiceExecutionRole
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreateApplicationSnapshotRequest = (
  input: CreateApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.SnapshotName !== undefined && {
      SnapshotName: input.SnapshotName
    })
  };
};

const serializeAws_json1_1CSVMappingParameters = (
  input: CSVMappingParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.RecordColumnDelimiter !== undefined && {
      RecordColumnDelimiter: input.RecordColumnDelimiter
    }),
    ...(input.RecordRowDelimiter !== undefined && {
      RecordRowDelimiter: input.RecordRowDelimiter
    })
  };
};

const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (
  input: DeleteApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CloudWatchLoggingOptionId !== undefined && {
      CloudWatchLoggingOptionId: input.CloudWatchLoggingOptionId
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    })
  };
};

const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = (
  input: DeleteApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.InputId !== undefined && { InputId: input.InputId })
  };
};

const serializeAws_json1_1DeleteApplicationOutputRequest = (
  input: DeleteApplicationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.OutputId !== undefined && { OutputId: input.OutputId })
  };
};

const serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = (
  input: DeleteApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.ReferenceId !== undefined && { ReferenceId: input.ReferenceId })
  };
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CreateTimestamp !== undefined && {
      CreateTimestamp: Math.round(input.CreateTimestamp.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1DeleteApplicationSnapshotRequest = (
  input: DeleteApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.SnapshotCreationTimestamp !== undefined && {
      SnapshotCreationTimestamp: Math.round(
        input.SnapshotCreationTimestamp.getTime() / 1000
      )
    }),
    ...(input.SnapshotName !== undefined && {
      SnapshotName: input.SnapshotName
    })
  };
};

const serializeAws_json1_1DeleteApplicationVpcConfigurationRequest = (
  input: DeleteApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.VpcConfigurationId !== undefined && {
      VpcConfigurationId: input.VpcConfigurationId
    })
  };
};

const serializeAws_json1_1DescribeApplicationRequest = (
  input: DescribeApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.IncludeAdditionalDetails !== undefined && {
      IncludeAdditionalDetails: input.IncludeAdditionalDetails
    })
  };
};

const serializeAws_json1_1DescribeApplicationSnapshotRequest = (
  input: DescribeApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.SnapshotName !== undefined && {
      SnapshotName: input.SnapshotName
    })
  };
};

const serializeAws_json1_1DestinationSchema = (
  input: DestinationSchema,
  context: __SerdeContext
): any => {
  return {
    ...(input.RecordFormatType !== undefined && {
      RecordFormatType: input.RecordFormatType
    })
  };
};

const serializeAws_json1_1DiscoverInputSchemaRequest = (
  input: DiscoverInputSchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputProcessingConfiguration !== undefined && {
      InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
        input.InputProcessingConfiguration,
        context
      )
    }),
    ...(input.InputStartingPositionConfiguration !== undefined && {
      InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(
        input.InputStartingPositionConfiguration,
        context
      )
    }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.S3Configuration !== undefined && {
      S3Configuration: serializeAws_json1_1S3Configuration(
        input.S3Configuration,
        context
      )
    }),
    ...(input.ServiceExecutionRole !== undefined && {
      ServiceExecutionRole: input.ServiceExecutionRole
    })
  };
};

const serializeAws_json1_1EnvironmentProperties = (
  input: EnvironmentProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.PropertyGroups !== undefined && {
      PropertyGroups: serializeAws_json1_1PropertyGroups(
        input.PropertyGroups,
        context
      )
    })
  };
};

const serializeAws_json1_1EnvironmentPropertyUpdates = (
  input: EnvironmentPropertyUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.PropertyGroups !== undefined && {
      PropertyGroups: serializeAws_json1_1PropertyGroups(
        input.PropertyGroups,
        context
      )
    })
  };
};

const serializeAws_json1_1FlinkApplicationConfiguration = (
  input: FlinkApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointConfiguration !== undefined && {
      CheckpointConfiguration: serializeAws_json1_1CheckpointConfiguration(
        input.CheckpointConfiguration,
        context
      )
    }),
    ...(input.MonitoringConfiguration !== undefined && {
      MonitoringConfiguration: serializeAws_json1_1MonitoringConfiguration(
        input.MonitoringConfiguration,
        context
      )
    }),
    ...(input.ParallelismConfiguration !== undefined && {
      ParallelismConfiguration: serializeAws_json1_1ParallelismConfiguration(
        input.ParallelismConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1FlinkApplicationConfigurationUpdate = (
  input: FlinkApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CheckpointConfigurationUpdate !== undefined && {
      CheckpointConfigurationUpdate: serializeAws_json1_1CheckpointConfigurationUpdate(
        input.CheckpointConfigurationUpdate,
        context
      )
    }),
    ...(input.MonitoringConfigurationUpdate !== undefined && {
      MonitoringConfigurationUpdate: serializeAws_json1_1MonitoringConfigurationUpdate(
        input.MonitoringConfigurationUpdate,
        context
      )
    }),
    ...(input.ParallelismConfigurationUpdate !== undefined && {
      ParallelismConfigurationUpdate: serializeAws_json1_1ParallelismConfigurationUpdate(
        input.ParallelismConfigurationUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_1FlinkRunConfiguration = (
  input: FlinkRunConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowNonRestoredState !== undefined && {
      AllowNonRestoredState: input.AllowNonRestoredState
    })
  };
};

const serializeAws_json1_1Input = (
  input: Input,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputParallelism !== undefined && {
      InputParallelism: serializeAws_json1_1InputParallelism(
        input.InputParallelism,
        context
      )
    }),
    ...(input.InputProcessingConfiguration !== undefined && {
      InputProcessingConfiguration: serializeAws_json1_1InputProcessingConfiguration(
        input.InputProcessingConfiguration,
        context
      )
    }),
    ...(input.InputSchema !== undefined && {
      InputSchema: serializeAws_json1_1SourceSchema(input.InputSchema, context)
    }),
    ...(input.KinesisFirehoseInput !== undefined && {
      KinesisFirehoseInput: serializeAws_json1_1KinesisFirehoseInput(
        input.KinesisFirehoseInput,
        context
      )
    }),
    ...(input.KinesisStreamsInput !== undefined && {
      KinesisStreamsInput: serializeAws_json1_1KinesisStreamsInput(
        input.KinesisStreamsInput,
        context
      )
    }),
    ...(input.NamePrefix !== undefined && { NamePrefix: input.NamePrefix })
  };
};

const serializeAws_json1_1InputLambdaProcessor = (
  input: InputLambdaProcessor,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1InputLambdaProcessorUpdate = (
  input: InputLambdaProcessorUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined && {
      ResourceARNUpdate: input.ResourceARNUpdate
    })
  };
};

const serializeAws_json1_1InputParallelism = (
  input: InputParallelism,
  context: __SerdeContext
): any => {
  return {
    ...(input.Count !== undefined && { Count: input.Count })
  };
};

const serializeAws_json1_1InputParallelismUpdate = (
  input: InputParallelismUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CountUpdate !== undefined && { CountUpdate: input.CountUpdate })
  };
};

const serializeAws_json1_1InputProcessingConfiguration = (
  input: InputProcessingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessor !== undefined && {
      InputLambdaProcessor: serializeAws_json1_1InputLambdaProcessor(
        input.InputLambdaProcessor,
        context
      )
    })
  };
};

const serializeAws_json1_1InputProcessingConfigurationUpdate = (
  input: InputProcessingConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputLambdaProcessorUpdate !== undefined && {
      InputLambdaProcessorUpdate: serializeAws_json1_1InputLambdaProcessorUpdate(
        input.InputLambdaProcessorUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_1Inputs = (
  input: Input[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Input(entry, context));
};

const serializeAws_json1_1InputSchemaUpdate = (
  input: InputSchemaUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.RecordColumnUpdates !== undefined && {
      RecordColumnUpdates: serializeAws_json1_1RecordColumns(
        input.RecordColumnUpdates,
        context
      )
    }),
    ...(input.RecordEncodingUpdate !== undefined && {
      RecordEncodingUpdate: input.RecordEncodingUpdate
    }),
    ...(input.RecordFormatUpdate !== undefined && {
      RecordFormatUpdate: serializeAws_json1_1RecordFormat(
        input.RecordFormatUpdate,
        context
      )
    })
  };
};

const serializeAws_json1_1InputStartingPositionConfiguration = (
  input: InputStartingPositionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputStartingPosition !== undefined && {
      InputStartingPosition: input.InputStartingPosition
    })
  };
};

const serializeAws_json1_1InputUpdate = (
  input: InputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputId !== undefined && { InputId: input.InputId }),
    ...(input.InputParallelismUpdate !== undefined && {
      InputParallelismUpdate: serializeAws_json1_1InputParallelismUpdate(
        input.InputParallelismUpdate,
        context
      )
    }),
    ...(input.InputProcessingConfigurationUpdate !== undefined && {
      InputProcessingConfigurationUpdate: serializeAws_json1_1InputProcessingConfigurationUpdate(
        input.InputProcessingConfigurationUpdate,
        context
      )
    }),
    ...(input.InputSchemaUpdate !== undefined && {
      InputSchemaUpdate: serializeAws_json1_1InputSchemaUpdate(
        input.InputSchemaUpdate,
        context
      )
    }),
    ...(input.KinesisFirehoseInputUpdate !== undefined && {
      KinesisFirehoseInputUpdate: serializeAws_json1_1KinesisFirehoseInputUpdate(
        input.KinesisFirehoseInputUpdate,
        context
      )
    }),
    ...(input.KinesisStreamsInputUpdate !== undefined && {
      KinesisStreamsInputUpdate: serializeAws_json1_1KinesisStreamsInputUpdate(
        input.KinesisStreamsInputUpdate,
        context
      )
    }),
    ...(input.NamePrefixUpdate !== undefined && {
      NamePrefixUpdate: input.NamePrefixUpdate
    })
  };
};

const serializeAws_json1_1InputUpdates = (
  input: InputUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1InputUpdate(entry, context));
};

const serializeAws_json1_1JSONMappingParameters = (
  input: JSONMappingParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.RecordRowPath !== undefined && {
      RecordRowPath: input.RecordRowPath
    })
  };
};

const serializeAws_json1_1KinesisFirehoseInput = (
  input: KinesisFirehoseInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1KinesisFirehoseInputUpdate = (
  input: KinesisFirehoseInputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined && {
      ResourceARNUpdate: input.ResourceARNUpdate
    })
  };
};

const serializeAws_json1_1KinesisFirehoseOutput = (
  input: KinesisFirehoseOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1KinesisFirehoseOutputUpdate = (
  input: KinesisFirehoseOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined && {
      ResourceARNUpdate: input.ResourceARNUpdate
    })
  };
};

const serializeAws_json1_1KinesisStreamsInput = (
  input: KinesisStreamsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1KinesisStreamsInputUpdate = (
  input: KinesisStreamsInputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined && {
      ResourceARNUpdate: input.ResourceARNUpdate
    })
  };
};

const serializeAws_json1_1KinesisStreamsOutput = (
  input: KinesisStreamsOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1KinesisStreamsOutputUpdate = (
  input: KinesisStreamsOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined && {
      ResourceARNUpdate: input.ResourceARNUpdate
    })
  };
};

const serializeAws_json1_1LambdaOutput = (
  input: LambdaOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1LambdaOutputUpdate = (
  input: LambdaOutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARNUpdate !== undefined && {
      ResourceARNUpdate: input.ResourceARNUpdate
    })
  };
};

const serializeAws_json1_1ListApplicationSnapshotsRequest = (
  input: ListApplicationSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListApplicationsRequest = (
  input: ListApplicationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1MappingParameters = (
  input: MappingParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.CSVMappingParameters !== undefined && {
      CSVMappingParameters: serializeAws_json1_1CSVMappingParameters(
        input.CSVMappingParameters,
        context
      )
    }),
    ...(input.JSONMappingParameters !== undefined && {
      JSONMappingParameters: serializeAws_json1_1JSONMappingParameters(
        input.JSONMappingParameters,
        context
      )
    })
  };
};

const serializeAws_json1_1MonitoringConfiguration = (
  input: MonitoringConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationType !== undefined && {
      ConfigurationType: input.ConfigurationType
    }),
    ...(input.LogLevel !== undefined && { LogLevel: input.LogLevel }),
    ...(input.MetricsLevel !== undefined && {
      MetricsLevel: input.MetricsLevel
    })
  };
};

const serializeAws_json1_1MonitoringConfigurationUpdate = (
  input: MonitoringConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConfigurationTypeUpdate !== undefined && {
      ConfigurationTypeUpdate: input.ConfigurationTypeUpdate
    }),
    ...(input.LogLevelUpdate !== undefined && {
      LogLevelUpdate: input.LogLevelUpdate
    }),
    ...(input.MetricsLevelUpdate !== undefined && {
      MetricsLevelUpdate: input.MetricsLevelUpdate
    })
  };
};

const serializeAws_json1_1Output = (
  input: Output,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationSchema !== undefined && {
      DestinationSchema: serializeAws_json1_1DestinationSchema(
        input.DestinationSchema,
        context
      )
    }),
    ...(input.KinesisFirehoseOutput !== undefined && {
      KinesisFirehoseOutput: serializeAws_json1_1KinesisFirehoseOutput(
        input.KinesisFirehoseOutput,
        context
      )
    }),
    ...(input.KinesisStreamsOutput !== undefined && {
      KinesisStreamsOutput: serializeAws_json1_1KinesisStreamsOutput(
        input.KinesisStreamsOutput,
        context
      )
    }),
    ...(input.LambdaOutput !== undefined && {
      LambdaOutput: serializeAws_json1_1LambdaOutput(
        input.LambdaOutput,
        context
      )
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1Outputs = (
  input: Output[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Output(entry, context));
};

const serializeAws_json1_1OutputUpdate = (
  input: OutputUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationSchemaUpdate !== undefined && {
      DestinationSchemaUpdate: serializeAws_json1_1DestinationSchema(
        input.DestinationSchemaUpdate,
        context
      )
    }),
    ...(input.KinesisFirehoseOutputUpdate !== undefined && {
      KinesisFirehoseOutputUpdate: serializeAws_json1_1KinesisFirehoseOutputUpdate(
        input.KinesisFirehoseOutputUpdate,
        context
      )
    }),
    ...(input.KinesisStreamsOutputUpdate !== undefined && {
      KinesisStreamsOutputUpdate: serializeAws_json1_1KinesisStreamsOutputUpdate(
        input.KinesisStreamsOutputUpdate,
        context
      )
    }),
    ...(input.LambdaOutputUpdate !== undefined && {
      LambdaOutputUpdate: serializeAws_json1_1LambdaOutputUpdate(
        input.LambdaOutputUpdate,
        context
      )
    }),
    ...(input.NameUpdate !== undefined && { NameUpdate: input.NameUpdate }),
    ...(input.OutputId !== undefined && { OutputId: input.OutputId })
  };
};

const serializeAws_json1_1OutputUpdates = (
  input: OutputUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1OutputUpdate(entry, context));
};

const serializeAws_json1_1ParallelismConfiguration = (
  input: ParallelismConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingEnabled !== undefined && {
      AutoScalingEnabled: input.AutoScalingEnabled
    }),
    ...(input.ConfigurationType !== undefined && {
      ConfigurationType: input.ConfigurationType
    }),
    ...(input.Parallelism !== undefined && { Parallelism: input.Parallelism }),
    ...(input.ParallelismPerKPU !== undefined && {
      ParallelismPerKPU: input.ParallelismPerKPU
    })
  };
};

const serializeAws_json1_1ParallelismConfigurationUpdate = (
  input: ParallelismConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingEnabledUpdate !== undefined && {
      AutoScalingEnabledUpdate: input.AutoScalingEnabledUpdate
    }),
    ...(input.ConfigurationTypeUpdate !== undefined && {
      ConfigurationTypeUpdate: input.ConfigurationTypeUpdate
    }),
    ...(input.ParallelismPerKPUUpdate !== undefined && {
      ParallelismPerKPUUpdate: input.ParallelismPerKPUUpdate
    }),
    ...(input.ParallelismUpdate !== undefined && {
      ParallelismUpdate: input.ParallelismUpdate
    })
  };
};

const serializeAws_json1_1PropertyGroup = (
  input: PropertyGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.PropertyGroupId !== undefined && {
      PropertyGroupId: input.PropertyGroupId
    }),
    ...(input.PropertyMap !== undefined && {
      PropertyMap: serializeAws_json1_1PropertyMap(input.PropertyMap, context)
    })
  };
};

const serializeAws_json1_1PropertyGroups = (
  input: PropertyGroup[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1PropertyGroup(entry, context));
};

const serializeAws_json1_1PropertyMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1RecordColumn = (
  input: RecordColumn,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mapping !== undefined && { Mapping: input.Mapping }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SqlType !== undefined && { SqlType: input.SqlType })
  };
};

const serializeAws_json1_1RecordColumns = (
  input: RecordColumn[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1RecordColumn(entry, context));
};

const serializeAws_json1_1RecordFormat = (
  input: RecordFormat,
  context: __SerdeContext
): any => {
  return {
    ...(input.MappingParameters !== undefined && {
      MappingParameters: serializeAws_json1_1MappingParameters(
        input.MappingParameters,
        context
      )
    }),
    ...(input.RecordFormatType !== undefined && {
      RecordFormatType: input.RecordFormatType
    })
  };
};

const serializeAws_json1_1ReferenceDataSource = (
  input: ReferenceDataSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReferenceSchema !== undefined && {
      ReferenceSchema: serializeAws_json1_1SourceSchema(
        input.ReferenceSchema,
        context
      )
    }),
    ...(input.S3ReferenceDataSource !== undefined && {
      S3ReferenceDataSource: serializeAws_json1_1S3ReferenceDataSource(
        input.S3ReferenceDataSource,
        context
      )
    }),
    ...(input.TableName !== undefined && { TableName: input.TableName })
  };
};

const serializeAws_json1_1ReferenceDataSources = (
  input: ReferenceDataSource[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ReferenceDataSource(entry, context)
  );
};

const serializeAws_json1_1ReferenceDataSourceUpdate = (
  input: ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReferenceId !== undefined && { ReferenceId: input.ReferenceId }),
    ...(input.ReferenceSchemaUpdate !== undefined && {
      ReferenceSchemaUpdate: serializeAws_json1_1SourceSchema(
        input.ReferenceSchemaUpdate,
        context
      )
    }),
    ...(input.S3ReferenceDataSourceUpdate !== undefined && {
      S3ReferenceDataSourceUpdate: serializeAws_json1_1S3ReferenceDataSourceUpdate(
        input.S3ReferenceDataSourceUpdate,
        context
      )
    }),
    ...(input.TableNameUpdate !== undefined && {
      TableNameUpdate: input.TableNameUpdate
    })
  };
};

const serializeAws_json1_1ReferenceDataSourceUpdates = (
  input: ReferenceDataSourceUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ReferenceDataSourceUpdate(entry, context)
  );
};

const serializeAws_json1_1RunConfiguration = (
  input: RunConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationRestoreConfiguration !== undefined && {
      ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(
        input.ApplicationRestoreConfiguration,
        context
      )
    }),
    ...(input.FlinkRunConfiguration !== undefined && {
      FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(
        input.FlinkRunConfiguration,
        context
      )
    }),
    ...(input.SqlRunConfigurations !== undefined && {
      SqlRunConfigurations: serializeAws_json1_1SqlRunConfigurations(
        input.SqlRunConfigurations,
        context
      )
    })
  };
};

const serializeAws_json1_1RunConfigurationUpdate = (
  input: RunConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationRestoreConfiguration !== undefined && {
      ApplicationRestoreConfiguration: serializeAws_json1_1ApplicationRestoreConfiguration(
        input.ApplicationRestoreConfiguration,
        context
      )
    }),
    ...(input.FlinkRunConfiguration !== undefined && {
      FlinkRunConfiguration: serializeAws_json1_1FlinkRunConfiguration(
        input.FlinkRunConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1S3Configuration = (
  input: S3Configuration,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.FileKey !== undefined && { FileKey: input.FileKey })
  };
};

const serializeAws_json1_1S3ContentLocation = (
  input: S3ContentLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.FileKey !== undefined && { FileKey: input.FileKey }),
    ...(input.ObjectVersion !== undefined && {
      ObjectVersion: input.ObjectVersion
    })
  };
};

const serializeAws_json1_1S3ContentLocationUpdate = (
  input: S3ContentLocationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARNUpdate !== undefined && {
      BucketARNUpdate: input.BucketARNUpdate
    }),
    ...(input.FileKeyUpdate !== undefined && {
      FileKeyUpdate: input.FileKeyUpdate
    }),
    ...(input.ObjectVersionUpdate !== undefined && {
      ObjectVersionUpdate: input.ObjectVersionUpdate
    })
  };
};

const serializeAws_json1_1S3ReferenceDataSource = (
  input: S3ReferenceDataSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARN !== undefined && { BucketARN: input.BucketARN }),
    ...(input.FileKey !== undefined && { FileKey: input.FileKey })
  };
};

const serializeAws_json1_1S3ReferenceDataSourceUpdate = (
  input: S3ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketARNUpdate !== undefined && {
      BucketARNUpdate: input.BucketARNUpdate
    }),
    ...(input.FileKeyUpdate !== undefined && {
      FileKeyUpdate: input.FileKeyUpdate
    })
  };
};

const serializeAws_json1_1SecurityGroupIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SourceSchema = (
  input: SourceSchema,
  context: __SerdeContext
): any => {
  return {
    ...(input.RecordColumns !== undefined && {
      RecordColumns: serializeAws_json1_1RecordColumns(
        input.RecordColumns,
        context
      )
    }),
    ...(input.RecordEncoding !== undefined && {
      RecordEncoding: input.RecordEncoding
    }),
    ...(input.RecordFormat !== undefined && {
      RecordFormat: serializeAws_json1_1RecordFormat(
        input.RecordFormat,
        context
      )
    })
  };
};

const serializeAws_json1_1SqlApplicationConfiguration = (
  input: SqlApplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Inputs !== undefined && {
      Inputs: serializeAws_json1_1Inputs(input.Inputs, context)
    }),
    ...(input.Outputs !== undefined && {
      Outputs: serializeAws_json1_1Outputs(input.Outputs, context)
    }),
    ...(input.ReferenceDataSources !== undefined && {
      ReferenceDataSources: serializeAws_json1_1ReferenceDataSources(
        input.ReferenceDataSources,
        context
      )
    })
  };
};

const serializeAws_json1_1SqlApplicationConfigurationUpdate = (
  input: SqlApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputUpdates !== undefined && {
      InputUpdates: serializeAws_json1_1InputUpdates(
        input.InputUpdates,
        context
      )
    }),
    ...(input.OutputUpdates !== undefined && {
      OutputUpdates: serializeAws_json1_1OutputUpdates(
        input.OutputUpdates,
        context
      )
    }),
    ...(input.ReferenceDataSourceUpdates !== undefined && {
      ReferenceDataSourceUpdates: serializeAws_json1_1ReferenceDataSourceUpdates(
        input.ReferenceDataSourceUpdates,
        context
      )
    })
  };
};

const serializeAws_json1_1SqlRunConfiguration = (
  input: SqlRunConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputId !== undefined && { InputId: input.InputId }),
    ...(input.InputStartingPositionConfiguration !== undefined && {
      InputStartingPositionConfiguration: serializeAws_json1_1InputStartingPositionConfiguration(
        input.InputStartingPositionConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1SqlRunConfigurations = (
  input: SqlRunConfiguration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1SqlRunConfiguration(entry, context)
  );
};

const serializeAws_json1_1StartApplicationRequest = (
  input: StartApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.RunConfiguration !== undefined && {
      RunConfiguration: serializeAws_json1_1RunConfiguration(
        input.RunConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1StopApplicationRequest = (
  input: StopApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    })
  };
};

const serializeAws_json1_1SubnetIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeys = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1Tags(input.Tags, context)
    })
  };
};

const serializeAws_json1_1Tags = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context)
    })
  };
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationConfigurationUpdate !== undefined && {
      ApplicationConfigurationUpdate: serializeAws_json1_1ApplicationConfigurationUpdate(
        input.ApplicationConfigurationUpdate,
        context
      )
    }),
    ...(input.ApplicationName !== undefined && {
      ApplicationName: input.ApplicationName
    }),
    ...(input.CloudWatchLoggingOptionUpdates !== undefined && {
      CloudWatchLoggingOptionUpdates: serializeAws_json1_1CloudWatchLoggingOptionUpdates(
        input.CloudWatchLoggingOptionUpdates,
        context
      )
    }),
    ...(input.CurrentApplicationVersionId !== undefined && {
      CurrentApplicationVersionId: input.CurrentApplicationVersionId
    }),
    ...(input.RunConfigurationUpdate !== undefined && {
      RunConfigurationUpdate: serializeAws_json1_1RunConfigurationUpdate(
        input.RunConfigurationUpdate,
        context
      )
    }),
    ...(input.ServiceExecutionRoleUpdate !== undefined && {
      ServiceExecutionRoleUpdate: input.ServiceExecutionRoleUpdate
    })
  };
};

const serializeAws_json1_1VpcConfiguration = (
  input: VpcConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context)
    })
  };
};

const serializeAws_json1_1VpcConfigurations = (
  input: VpcConfiguration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1VpcConfiguration(entry, context)
  );
};

const serializeAws_json1_1VpcConfigurationUpdate = (
  input: VpcConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIdUpdates !== undefined && {
      SecurityGroupIdUpdates: serializeAws_json1_1SecurityGroupIds(
        input.SecurityGroupIdUpdates,
        context
      )
    }),
    ...(input.SubnetIdUpdates !== undefined && {
      SubnetIdUpdates: serializeAws_json1_1SubnetIds(
        input.SubnetIdUpdates,
        context
      )
    }),
    ...(input.VpcConfigurationId !== undefined && {
      VpcConfigurationId: input.VpcConfigurationId
    })
  };
};

const serializeAws_json1_1VpcConfigurationUpdates = (
  input: VpcConfigurationUpdate[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1VpcConfigurationUpdate(entry, context)
  );
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationCloudWatchLoggingOptionResponse => {
  return {
    __type: "AddApplicationCloudWatchLoggingOptionResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions !== undefined &&
      output.CloudWatchLoggingOptionDescriptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(
            output.CloudWatchLoggingOptionDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputProcessingConfigurationResponse => {
  return {
    __type: "AddApplicationInputProcessingConfigurationResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    InputId:
      output.InputId !== undefined && output.InputId !== null
        ? output.InputId
        : undefined,
    InputProcessingConfigurationDescription:
      output.InputProcessingConfigurationDescription !== undefined &&
      output.InputProcessingConfigurationDescription !== null
        ? deserializeAws_json1_1InputProcessingConfigurationDescription(
            output.InputProcessingConfigurationDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AddApplicationInputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputResponse => {
  return {
    __type: "AddApplicationInputResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    InputDescriptions:
      output.InputDescriptions !== undefined &&
      output.InputDescriptions !== null
        ? deserializeAws_json1_1InputDescriptions(
            output.InputDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AddApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationOutputResponse => {
  return {
    __type: "AddApplicationOutputResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    OutputDescriptions:
      output.OutputDescriptions !== undefined &&
      output.OutputDescriptions !== null
        ? deserializeAws_json1_1OutputDescriptions(
            output.OutputDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationReferenceDataSourceResponse => {
  return {
    __type: "AddApplicationReferenceDataSourceResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions !== undefined &&
      output.ReferenceDataSourceDescriptions !== null
        ? deserializeAws_json1_1ReferenceDataSourceDescriptions(
            output.ReferenceDataSourceDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AddApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationVpcConfigurationResponse => {
  return {
    __type: "AddApplicationVpcConfigurationResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    VpcConfigurationDescription:
      output.VpcConfigurationDescription !== undefined &&
      output.VpcConfigurationDescription !== null
        ? deserializeAws_json1_1VpcConfigurationDescription(
            output.VpcConfigurationDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationCodeConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationCodeConfigurationDescription => {
  return {
    __type: "ApplicationCodeConfigurationDescription",
    CodeContentDescription:
      output.CodeContentDescription !== undefined &&
      output.CodeContentDescription !== null
        ? deserializeAws_json1_1CodeContentDescription(
            output.CodeContentDescription,
            context
          )
        : undefined,
    CodeContentType:
      output.CodeContentType !== undefined && output.CodeContentType !== null
        ? output.CodeContentType
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationConfigurationDescription => {
  return {
    __type: "ApplicationConfigurationDescription",
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
      output.EnvironmentPropertyDescriptions !== undefined &&
      output.EnvironmentPropertyDescriptions !== null
        ? deserializeAws_json1_1EnvironmentPropertyDescriptions(
            output.EnvironmentPropertyDescriptions,
            context
          )
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
      output.RunConfigurationDescription !== undefined &&
      output.RunConfigurationDescription !== null
        ? deserializeAws_json1_1RunConfigurationDescription(
            output.RunConfigurationDescription,
            context
          )
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
      output.VpcConfigurationDescriptions !== undefined &&
      output.VpcConfigurationDescriptions !== null
        ? deserializeAws_json1_1VpcConfigurationDescriptions(
            output.VpcConfigurationDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationDetail = (
  output: any,
  context: __SerdeContext
): ApplicationDetail => {
  return {
    __type: "ApplicationDetail",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationConfigurationDescription:
      output.ApplicationConfigurationDescription !== undefined &&
      output.ApplicationConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationConfigurationDescription(
            output.ApplicationConfigurationDescription,
            context
          )
        : undefined,
    ApplicationDescription:
      output.ApplicationDescription !== undefined &&
      output.ApplicationDescription !== null
        ? output.ApplicationDescription
        : undefined,
    ApplicationName:
      output.ApplicationName !== undefined && output.ApplicationName !== null
        ? output.ApplicationName
        : undefined,
    ApplicationStatus:
      output.ApplicationStatus !== undefined &&
      output.ApplicationStatus !== null
        ? output.ApplicationStatus
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions !== undefined &&
      output.CloudWatchLoggingOptionDescriptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(
            output.CloudWatchLoggingOptionDescriptions,
            context
          )
        : undefined,
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    LastUpdateTimestamp:
      output.LastUpdateTimestamp !== undefined &&
      output.LastUpdateTimestamp !== null
        ? new Date(Math.round(output.LastUpdateTimestamp * 1000))
        : undefined,
    RuntimeEnvironment:
      output.RuntimeEnvironment !== undefined &&
      output.RuntimeEnvironment !== null
        ? output.RuntimeEnvironment
        : undefined,
    ServiceExecutionRole:
      output.ServiceExecutionRole !== undefined &&
      output.ServiceExecutionRole !== null
        ? output.ServiceExecutionRole
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationRestoreConfiguration = (
  output: any,
  context: __SerdeContext
): ApplicationRestoreConfiguration => {
  return {
    __type: "ApplicationRestoreConfiguration",
    ApplicationRestoreType:
      output.ApplicationRestoreType !== undefined &&
      output.ApplicationRestoreType !== null
        ? output.ApplicationRestoreType
        : undefined,
    SnapshotName:
      output.SnapshotName !== undefined && output.SnapshotName !== null
        ? output.SnapshotName
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationSnapshotConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationSnapshotConfigurationDescription => {
  return {
    __type: "ApplicationSnapshotConfigurationDescription",
    SnapshotsEnabled:
      output.SnapshotsEnabled !== undefined && output.SnapshotsEnabled !== null
        ? output.SnapshotsEnabled
        : undefined
  } as any;
};

const deserializeAws_json1_1ApplicationSummaries = (
  output: any,
  context: __SerdeContext
): ApplicationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationSummary(entry, context)
  );
};

const deserializeAws_json1_1ApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary => {
  return {
    __type: "ApplicationSummary",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationName:
      output.ApplicationName !== undefined && output.ApplicationName !== null
        ? output.ApplicationName
        : undefined,
    ApplicationStatus:
      output.ApplicationStatus !== undefined &&
      output.ApplicationStatus !== null
        ? output.ApplicationStatus
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    RuntimeEnvironment:
      output.RuntimeEnvironment !== undefined &&
      output.RuntimeEnvironment !== null
        ? output.RuntimeEnvironment
        : undefined
  } as any;
};

const deserializeAws_json1_1CheckpointConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CheckpointConfigurationDescription => {
  return {
    __type: "CheckpointConfigurationDescription",
    CheckpointInterval:
      output.CheckpointInterval !== undefined &&
      output.CheckpointInterval !== null
        ? output.CheckpointInterval
        : undefined,
    CheckpointingEnabled:
      output.CheckpointingEnabled !== undefined &&
      output.CheckpointingEnabled !== null
        ? output.CheckpointingEnabled
        : undefined,
    ConfigurationType:
      output.ConfigurationType !== undefined &&
      output.ConfigurationType !== null
        ? output.ConfigurationType
        : undefined,
    MinPauseBetweenCheckpoints:
      output.MinPauseBetweenCheckpoints !== undefined &&
      output.MinPauseBetweenCheckpoints !== null
        ? output.MinPauseBetweenCheckpoints
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription => {
  return {
    __type: "CloudWatchLoggingOptionDescription",
    CloudWatchLoggingOptionId:
      output.CloudWatchLoggingOptionId !== undefined &&
      output.CloudWatchLoggingOptionId !== null
        ? output.CloudWatchLoggingOptionId
        : undefined,
    LogStreamARN:
      output.LogStreamARN !== undefined && output.LogStreamARN !== null
        ? output.LogStreamARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context)
  );
};

const deserializeAws_json1_1CodeContentDescription = (
  output: any,
  context: __SerdeContext
): CodeContentDescription => {
  return {
    __type: "CodeContentDescription",
    CodeMD5:
      output.CodeMD5 !== undefined && output.CodeMD5 !== null
        ? output.CodeMD5
        : undefined,
    CodeSize:
      output.CodeSize !== undefined && output.CodeSize !== null
        ? output.CodeSize
        : undefined,
    S3ApplicationCodeLocationDescription:
      output.S3ApplicationCodeLocationDescription !== undefined &&
      output.S3ApplicationCodeLocationDescription !== null
        ? deserializeAws_json1_1S3ApplicationCodeLocationDescription(
            output.S3ApplicationCodeLocationDescription,
            context
          )
        : undefined,
    TextContent:
      output.TextContent !== undefined && output.TextContent !== null
        ? output.TextContent
        : undefined
  } as any;
};

const deserializeAws_json1_1CodeValidationException = (
  output: any,
  context: __SerdeContext
): CodeValidationException => {
  return {
    __type: "CodeValidationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  return {
    __type: "CreateApplicationResponse",
    ApplicationDetail:
      output.ApplicationDetail !== undefined &&
      output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(
            output.ApplicationDetail,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationSnapshotResponse => {
  return {
    __type: "CreateApplicationSnapshotResponse"
  } as any;
};

const deserializeAws_json1_1CSVMappingParameters = (
  output: any,
  context: __SerdeContext
): CSVMappingParameters => {
  return {
    __type: "CSVMappingParameters",
    RecordColumnDelimiter:
      output.RecordColumnDelimiter !== undefined &&
      output.RecordColumnDelimiter !== null
        ? output.RecordColumnDelimiter
        : undefined,
    RecordRowDelimiter:
      output.RecordRowDelimiter !== undefined &&
      output.RecordRowDelimiter !== null
        ? output.RecordRowDelimiter
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationCloudWatchLoggingOptionResponse => {
  return {
    __type: "DeleteApplicationCloudWatchLoggingOptionResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    CloudWatchLoggingOptionDescriptions:
      output.CloudWatchLoggingOptionDescriptions !== undefined &&
      output.CloudWatchLoggingOptionDescriptions !== null
        ? deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(
            output.CloudWatchLoggingOptionDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationInputProcessingConfigurationResponse => {
  return {
    __type: "DeleteApplicationInputProcessingConfigurationResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationOutputResponse => {
  return {
    __type: "DeleteApplicationOutputResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationReferenceDataSourceResponse => {
  return {
    __type: "DeleteApplicationReferenceDataSourceResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteApplicationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResponse => {
  return {
    __type: "DeleteApplicationResponse"
  } as any;
};

const deserializeAws_json1_1DeleteApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationSnapshotResponse => {
  return {
    __type: "DeleteApplicationSnapshotResponse"
  } as any;
};

const deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationVpcConfigurationResponse => {
  return {
    __type: "DeleteApplicationVpcConfigurationResponse",
    ApplicationARN:
      output.ApplicationARN !== undefined && output.ApplicationARN !== null
        ? output.ApplicationARN
        : undefined,
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeApplicationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationResponse => {
  return {
    __type: "DescribeApplicationResponse",
    ApplicationDetail:
      output.ApplicationDetail !== undefined &&
      output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(
            output.ApplicationDetail,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationSnapshotResponse => {
  return {
    __type: "DescribeApplicationSnapshotResponse",
    SnapshotDetails:
      output.SnapshotDetails !== undefined && output.SnapshotDetails !== null
        ? deserializeAws_json1_1SnapshotDetails(output.SnapshotDetails, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DestinationSchema = (
  output: any,
  context: __SerdeContext
): DestinationSchema => {
  return {
    __type: "DestinationSchema",
    RecordFormatType:
      output.RecordFormatType !== undefined && output.RecordFormatType !== null
        ? output.RecordFormatType
        : undefined
  } as any;
};

const deserializeAws_json1_1DiscoverInputSchemaResponse = (
  output: any,
  context: __SerdeContext
): DiscoverInputSchemaResponse => {
  return {
    __type: "DiscoverInputSchemaResponse",
    InputSchema:
      output.InputSchema !== undefined && output.InputSchema !== null
        ? deserializeAws_json1_1SourceSchema(output.InputSchema, context)
        : undefined,
    ParsedInputRecords:
      output.ParsedInputRecords !== undefined &&
      output.ParsedInputRecords !== null
        ? deserializeAws_json1_1ParsedInputRecords(
            output.ParsedInputRecords,
            context
          )
        : undefined,
    ProcessedInputRecords:
      output.ProcessedInputRecords !== undefined &&
      output.ProcessedInputRecords !== null
        ? deserializeAws_json1_1ProcessedInputRecords(
            output.ProcessedInputRecords,
            context
          )
        : undefined,
    RawInputRecords:
      output.RawInputRecords !== undefined && output.RawInputRecords !== null
        ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EnvironmentPropertyDescriptions = (
  output: any,
  context: __SerdeContext
): EnvironmentPropertyDescriptions => {
  return {
    __type: "EnvironmentPropertyDescriptions",
    PropertyGroupDescriptions:
      output.PropertyGroupDescriptions !== undefined &&
      output.PropertyGroupDescriptions !== null
        ? deserializeAws_json1_1PropertyGroups(
            output.PropertyGroupDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1FlinkApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): FlinkApplicationConfigurationDescription => {
  return {
    __type: "FlinkApplicationConfigurationDescription",
    CheckpointConfigurationDescription:
      output.CheckpointConfigurationDescription !== undefined &&
      output.CheckpointConfigurationDescription !== null
        ? deserializeAws_json1_1CheckpointConfigurationDescription(
            output.CheckpointConfigurationDescription,
            context
          )
        : undefined,
    JobPlanDescription:
      output.JobPlanDescription !== undefined &&
      output.JobPlanDescription !== null
        ? output.JobPlanDescription
        : undefined,
    MonitoringConfigurationDescription:
      output.MonitoringConfigurationDescription !== undefined &&
      output.MonitoringConfigurationDescription !== null
        ? deserializeAws_json1_1MonitoringConfigurationDescription(
            output.MonitoringConfigurationDescription,
            context
          )
        : undefined,
    ParallelismConfigurationDescription:
      output.ParallelismConfigurationDescription !== undefined &&
      output.ParallelismConfigurationDescription !== null
        ? deserializeAws_json1_1ParallelismConfigurationDescription(
            output.ParallelismConfigurationDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1InAppStreamNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InputDescription = (
  output: any,
  context: __SerdeContext
): InputDescription => {
  return {
    __type: "InputDescription",
    InAppStreamNames:
      output.InAppStreamNames !== undefined && output.InAppStreamNames !== null
        ? deserializeAws_json1_1InAppStreamNames(
            output.InAppStreamNames,
            context
          )
        : undefined,
    InputId:
      output.InputId !== undefined && output.InputId !== null
        ? output.InputId
        : undefined,
    InputParallelism:
      output.InputParallelism !== undefined && output.InputParallelism !== null
        ? deserializeAws_json1_1InputParallelism(
            output.InputParallelism,
            context
          )
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
      output.InputStartingPositionConfiguration !== undefined &&
      output.InputStartingPositionConfiguration !== null
        ? deserializeAws_json1_1InputStartingPositionConfiguration(
            output.InputStartingPositionConfiguration,
            context
          )
        : undefined,
    KinesisFirehoseInputDescription:
      output.KinesisFirehoseInputDescription !== undefined &&
      output.KinesisFirehoseInputDescription !== null
        ? deserializeAws_json1_1KinesisFirehoseInputDescription(
            output.KinesisFirehoseInputDescription,
            context
          )
        : undefined,
    KinesisStreamsInputDescription:
      output.KinesisStreamsInputDescription !== undefined &&
      output.KinesisStreamsInputDescription !== null
        ? deserializeAws_json1_1KinesisStreamsInputDescription(
            output.KinesisStreamsInputDescription,
            context
          )
        : undefined,
    NamePrefix:
      output.NamePrefix !== undefined && output.NamePrefix !== null
        ? output.NamePrefix
        : undefined
  } as any;
};

const deserializeAws_json1_1InputDescriptions = (
  output: any,
  context: __SerdeContext
): InputDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InputDescription(entry, context)
  );
};

const deserializeAws_json1_1InputLambdaProcessorDescription = (
  output: any,
  context: __SerdeContext
): InputLambdaProcessorDescription => {
  return {
    __type: "InputLambdaProcessorDescription",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1InputParallelism = (
  output: any,
  context: __SerdeContext
): InputParallelism => {
  return {
    __type: "InputParallelism",
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined
  } as any;
};

const deserializeAws_json1_1InputProcessingConfigurationDescription = (
  output: any,
  context: __SerdeContext
): InputProcessingConfigurationDescription => {
  return {
    __type: "InputProcessingConfigurationDescription",
    InputLambdaProcessorDescription:
      output.InputLambdaProcessorDescription !== undefined &&
      output.InputLambdaProcessorDescription !== null
        ? deserializeAws_json1_1InputLambdaProcessorDescription(
            output.InputLambdaProcessorDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1InputStartingPositionConfiguration = (
  output: any,
  context: __SerdeContext
): InputStartingPositionConfiguration => {
  return {
    __type: "InputStartingPositionConfiguration",
    InputStartingPosition:
      output.InputStartingPosition !== undefined &&
      output.InputStartingPosition !== null
        ? output.InputStartingPosition
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidApplicationConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationConfigurationException => {
  return {
    __type: "InvalidApplicationConfigurationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  return {
    __type: "InvalidArgumentException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1JSONMappingParameters = (
  output: any,
  context: __SerdeContext
): JSONMappingParameters => {
  return {
    __type: "JSONMappingParameters",
    RecordRowPath:
      output.RecordRowPath !== undefined && output.RecordRowPath !== null
        ? output.RecordRowPath
        : undefined
  } as any;
};

const deserializeAws_json1_1KinesisFirehoseInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseInputDescription => {
  return {
    __type: "KinesisFirehoseInputDescription",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1KinesisFirehoseOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseOutputDescription => {
  return {
    __type: "KinesisFirehoseOutputDescription",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1KinesisStreamsInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsInputDescription => {
  return {
    __type: "KinesisStreamsInputDescription",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1KinesisStreamsOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsOutputDescription => {
  return {
    __type: "KinesisStreamsOutputDescription",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1LambdaOutputDescription = (
  output: any,
  context: __SerdeContext
): LambdaOutputDescription => {
  return {
    __type: "LambdaOutputDescription",
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RoleARN:
      output.RoleARN !== undefined && output.RoleARN !== null
        ? output.RoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListApplicationSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationSnapshotsResponse => {
  return {
    __type: "ListApplicationSnapshotsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    SnapshotSummaries:
      output.SnapshotSummaries !== undefined &&
      output.SnapshotSummaries !== null
        ? deserializeAws_json1_1SnapshotSummaries(
            output.SnapshotSummaries,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationsResponse => {
  return {
    __type: "ListApplicationsResponse",
    ApplicationSummaries:
      output.ApplicationSummaries !== undefined &&
      output.ApplicationSummaries !== null
        ? deserializeAws_json1_1ApplicationSummaries(
            output.ApplicationSummaries,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1Tags(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MappingParameters = (
  output: any,
  context: __SerdeContext
): MappingParameters => {
  return {
    __type: "MappingParameters",
    CSVMappingParameters:
      output.CSVMappingParameters !== undefined &&
      output.CSVMappingParameters !== null
        ? deserializeAws_json1_1CSVMappingParameters(
            output.CSVMappingParameters,
            context
          )
        : undefined,
    JSONMappingParameters:
      output.JSONMappingParameters !== undefined &&
      output.JSONMappingParameters !== null
        ? deserializeAws_json1_1JSONMappingParameters(
            output.JSONMappingParameters,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MonitoringConfigurationDescription = (
  output: any,
  context: __SerdeContext
): MonitoringConfigurationDescription => {
  return {
    __type: "MonitoringConfigurationDescription",
    ConfigurationType:
      output.ConfigurationType !== undefined &&
      output.ConfigurationType !== null
        ? output.ConfigurationType
        : undefined,
    LogLevel:
      output.LogLevel !== undefined && output.LogLevel !== null
        ? output.LogLevel
        : undefined,
    MetricsLevel:
      output.MetricsLevel !== undefined && output.MetricsLevel !== null
        ? output.MetricsLevel
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputDescription = (
  output: any,
  context: __SerdeContext
): OutputDescription => {
  return {
    __type: "OutputDescription",
    DestinationSchema:
      output.DestinationSchema !== undefined &&
      output.DestinationSchema !== null
        ? deserializeAws_json1_1DestinationSchema(
            output.DestinationSchema,
            context
          )
        : undefined,
    KinesisFirehoseOutputDescription:
      output.KinesisFirehoseOutputDescription !== undefined &&
      output.KinesisFirehoseOutputDescription !== null
        ? deserializeAws_json1_1KinesisFirehoseOutputDescription(
            output.KinesisFirehoseOutputDescription,
            context
          )
        : undefined,
    KinesisStreamsOutputDescription:
      output.KinesisStreamsOutputDescription !== undefined &&
      output.KinesisStreamsOutputDescription !== null
        ? deserializeAws_json1_1KinesisStreamsOutputDescription(
            output.KinesisStreamsOutputDescription,
            context
          )
        : undefined,
    LambdaOutputDescription:
      output.LambdaOutputDescription !== undefined &&
      output.LambdaOutputDescription !== null
        ? deserializeAws_json1_1LambdaOutputDescription(
            output.LambdaOutputDescription,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OutputId:
      output.OutputId !== undefined && output.OutputId !== null
        ? output.OutputId
        : undefined
  } as any;
};

const deserializeAws_json1_1OutputDescriptions = (
  output: any,
  context: __SerdeContext
): OutputDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OutputDescription(entry, context)
  );
};

const deserializeAws_json1_1ParallelismConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ParallelismConfigurationDescription => {
  return {
    __type: "ParallelismConfigurationDescription",
    AutoScalingEnabled:
      output.AutoScalingEnabled !== undefined &&
      output.AutoScalingEnabled !== null
        ? output.AutoScalingEnabled
        : undefined,
    ConfigurationType:
      output.ConfigurationType !== undefined &&
      output.ConfigurationType !== null
        ? output.ConfigurationType
        : undefined,
    CurrentParallelism:
      output.CurrentParallelism !== undefined &&
      output.CurrentParallelism !== null
        ? output.CurrentParallelism
        : undefined,
    Parallelism:
      output.Parallelism !== undefined && output.Parallelism !== null
        ? output.Parallelism
        : undefined,
    ParallelismPerKPU:
      output.ParallelismPerKPU !== undefined &&
      output.ParallelismPerKPU !== null
        ? output.ParallelismPerKPU
        : undefined
  } as any;
};

const deserializeAws_json1_1ParsedInputRecord = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ParsedInputRecords = (
  output: any,
  context: __SerdeContext
): string[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParsedInputRecord(entry, context)
  );
};

const deserializeAws_json1_1ProcessedInputRecords = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PropertyGroup = (
  output: any,
  context: __SerdeContext
): PropertyGroup => {
  return {
    __type: "PropertyGroup",
    PropertyGroupId:
      output.PropertyGroupId !== undefined && output.PropertyGroupId !== null
        ? output.PropertyGroupId
        : undefined,
    PropertyMap:
      output.PropertyMap !== undefined && output.PropertyMap !== null
        ? deserializeAws_json1_1PropertyMap(output.PropertyMap, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PropertyGroups = (
  output: any,
  context: __SerdeContext
): PropertyGroup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PropertyGroup(entry, context)
  );
};

const deserializeAws_json1_1PropertyMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1RawInputRecords = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RecordColumn = (
  output: any,
  context: __SerdeContext
): RecordColumn => {
  return {
    __type: "RecordColumn",
    Mapping:
      output.Mapping !== undefined && output.Mapping !== null
        ? output.Mapping
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    SqlType:
      output.SqlType !== undefined && output.SqlType !== null
        ? output.SqlType
        : undefined
  } as any;
};

const deserializeAws_json1_1RecordColumns = (
  output: any,
  context: __SerdeContext
): RecordColumn[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RecordColumn(entry, context)
  );
};

const deserializeAws_json1_1RecordFormat = (
  output: any,
  context: __SerdeContext
): RecordFormat => {
  return {
    __type: "RecordFormat",
    MappingParameters:
      output.MappingParameters !== undefined &&
      output.MappingParameters !== null
        ? deserializeAws_json1_1MappingParameters(
            output.MappingParameters,
            context
          )
        : undefined,
    RecordFormatType:
      output.RecordFormatType !== undefined && output.RecordFormatType !== null
        ? output.RecordFormatType
        : undefined
  } as any;
};

const deserializeAws_json1_1ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription => {
  return {
    __type: "ReferenceDataSourceDescription",
    ReferenceId:
      output.ReferenceId !== undefined && output.ReferenceId !== null
        ? output.ReferenceId
        : undefined,
    ReferenceSchema:
      output.ReferenceSchema !== undefined && output.ReferenceSchema !== null
        ? deserializeAws_json1_1SourceSchema(output.ReferenceSchema, context)
        : undefined,
    S3ReferenceDataSourceDescription:
      output.S3ReferenceDataSourceDescription !== undefined &&
      output.S3ReferenceDataSourceDescription !== null
        ? deserializeAws_json1_1S3ReferenceDataSourceDescription(
            output.S3ReferenceDataSourceDescription,
            context
          )
        : undefined,
    TableName:
      output.TableName !== undefined && output.TableName !== null
        ? output.TableName
        : undefined
  } as any;
};

const deserializeAws_json1_1ReferenceDataSourceDescriptions = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReferenceDataSourceDescription(entry, context)
  );
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ResourceProvisionedThroughputExceededException => {
  return {
    __type: "ResourceProvisionedThroughputExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1RunConfigurationDescription = (
  output: any,
  context: __SerdeContext
): RunConfigurationDescription => {
  return {
    __type: "RunConfigurationDescription",
    ApplicationRestoreConfigurationDescription:
      output.ApplicationRestoreConfigurationDescription !== undefined &&
      output.ApplicationRestoreConfigurationDescription !== null
        ? deserializeAws_json1_1ApplicationRestoreConfiguration(
            output.ApplicationRestoreConfigurationDescription,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1S3ApplicationCodeLocationDescription = (
  output: any,
  context: __SerdeContext
): S3ApplicationCodeLocationDescription => {
  return {
    __type: "S3ApplicationCodeLocationDescription",
    BucketARN:
      output.BucketARN !== undefined && output.BucketARN !== null
        ? output.BucketARN
        : undefined,
    FileKey:
      output.FileKey !== undefined && output.FileKey !== null
        ? output.FileKey
        : undefined,
    ObjectVersion:
      output.ObjectVersion !== undefined && output.ObjectVersion !== null
        ? output.ObjectVersion
        : undefined
  } as any;
};

const deserializeAws_json1_1S3ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): S3ReferenceDataSourceDescription => {
  return {
    __type: "S3ReferenceDataSourceDescription",
    BucketARN:
      output.BucketARN !== undefined && output.BucketARN !== null
        ? output.BucketARN
        : undefined,
    FileKey:
      output.FileKey !== undefined && output.FileKey !== null
        ? output.FileKey
        : undefined,
    ReferenceRoleARN:
      output.ReferenceRoleARN !== undefined && output.ReferenceRoleARN !== null
        ? output.ReferenceRoleARN
        : undefined
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  return {
    __type: "ServiceUnavailableException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1SnapshotDetails = (
  output: any,
  context: __SerdeContext
): SnapshotDetails => {
  return {
    __type: "SnapshotDetails",
    ApplicationVersionId:
      output.ApplicationVersionId !== undefined &&
      output.ApplicationVersionId !== null
        ? output.ApplicationVersionId
        : undefined,
    SnapshotCreationTimestamp:
      output.SnapshotCreationTimestamp !== undefined &&
      output.SnapshotCreationTimestamp !== null
        ? new Date(Math.round(output.SnapshotCreationTimestamp * 1000))
        : undefined,
    SnapshotName:
      output.SnapshotName !== undefined && output.SnapshotName !== null
        ? output.SnapshotName
        : undefined,
    SnapshotStatus:
      output.SnapshotStatus !== undefined && output.SnapshotStatus !== null
        ? output.SnapshotStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1SnapshotSummaries = (
  output: any,
  context: __SerdeContext
): SnapshotDetails[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SnapshotDetails(entry, context)
  );
};

const deserializeAws_json1_1SourceSchema = (
  output: any,
  context: __SerdeContext
): SourceSchema => {
  return {
    __type: "SourceSchema",
    RecordColumns:
      output.RecordColumns !== undefined && output.RecordColumns !== null
        ? deserializeAws_json1_1RecordColumns(output.RecordColumns, context)
        : undefined,
    RecordEncoding:
      output.RecordEncoding !== undefined && output.RecordEncoding !== null
        ? output.RecordEncoding
        : undefined,
    RecordFormat:
      output.RecordFormat !== undefined && output.RecordFormat !== null
        ? deserializeAws_json1_1RecordFormat(output.RecordFormat, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1SqlApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): SqlApplicationConfigurationDescription => {
  return {
    __type: "SqlApplicationConfigurationDescription",
    InputDescriptions:
      output.InputDescriptions !== undefined &&
      output.InputDescriptions !== null
        ? deserializeAws_json1_1InputDescriptions(
            output.InputDescriptions,
            context
          )
        : undefined,
    OutputDescriptions:
      output.OutputDescriptions !== undefined &&
      output.OutputDescriptions !== null
        ? deserializeAws_json1_1OutputDescriptions(
            output.OutputDescriptions,
            context
          )
        : undefined,
    ReferenceDataSourceDescriptions:
      output.ReferenceDataSourceDescriptions !== undefined &&
      output.ReferenceDataSourceDescriptions !== null
        ? deserializeAws_json1_1ReferenceDataSourceDescriptions(
            output.ReferenceDataSourceDescriptions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1StartApplicationResponse = (
  output: any,
  context: __SerdeContext
): StartApplicationResponse => {
  return {
    __type: "StartApplicationResponse"
  } as any;
};

const deserializeAws_json1_1StopApplicationResponse = (
  output: any,
  context: __SerdeContext
): StopApplicationResponse => {
  return {
    __type: "StopApplicationResponse"
  } as any;
};

const deserializeAws_json1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  return {
    __type: "TooManyTagsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UnableToDetectSchemaException = (
  output: any,
  context: __SerdeContext
): UnableToDetectSchemaException => {
  return {
    __type: "UnableToDetectSchemaException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    ProcessedInputRecords:
      output.ProcessedInputRecords !== undefined &&
      output.ProcessedInputRecords !== null
        ? deserializeAws_json1_1ProcessedInputRecords(
            output.ProcessedInputRecords,
            context
          )
        : undefined,
    RawInputRecords:
      output.RawInputRecords !== undefined && output.RawInputRecords !== null
        ? deserializeAws_json1_1RawInputRecords(output.RawInputRecords, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  return {
    __type: "UnsupportedOperationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  return {
    __type: "UpdateApplicationResponse",
    ApplicationDetail:
      output.ApplicationDetail !== undefined &&
      output.ApplicationDetail !== null
        ? deserializeAws_json1_1ApplicationDetail(
            output.ApplicationDetail,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1VpcConfigurationDescription = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription => {
  return {
    __type: "VpcConfigurationDescription",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(
            output.SecurityGroupIds,
            context
          )
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcConfigurationId:
      output.VpcConfigurationId !== undefined &&
      output.VpcConfigurationId !== null
        ? output.VpcConfigurationId
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_json1_1VpcConfigurationDescriptions = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VpcConfigurationDescription(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
