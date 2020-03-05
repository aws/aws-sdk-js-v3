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

export async function serializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(
  input: AddApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationCloudWatchLoggingOptionRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddApplicationInputCommand(
  input: AddApplicationInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.AddApplicationInput";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationInputRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(
  input: AddApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.AddApplicationInputProcessingConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddApplicationOutputCommand(
  input: AddApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.AddApplicationOutput";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationOutputRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddApplicationReferenceDataSourceCommand(
  input: AddApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.AddApplicationReferenceDataSource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationReferenceDataSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddApplicationVpcConfigurationCommand(
  input: AddApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.AddApplicationVpcConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddApplicationVpcConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateApplicationCommand(
  input: CreateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.CreateApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateApplicationSnapshotCommand(
  input: CreateApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.CreateApplicationSnapshot";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateApplicationSnapshotRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationCommand(
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DeleteApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(
  input: DeleteApplicationCloudWatchLoggingOptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.DeleteApplicationCloudWatchLoggingOption";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(
  input: DeleteApplicationInputProcessingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.DeleteApplicationInputProcessingConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationOutputCommand(
  input: DeleteApplicationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DeleteApplicationOutput";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationOutputRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(
  input: DeleteApplicationReferenceDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationSnapshotCommand(
  input: DeleteApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.DeleteApplicationSnapshot";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationSnapshotRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteApplicationVpcConfigurationCommand(
  input: DeleteApplicationVpcConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.DeleteApplicationVpcConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteApplicationVpcConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeApplicationCommand(
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DescribeApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeApplicationSnapshotCommand(
  input: DescribeApplicationSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.DescribeApplicationSnapshot";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeApplicationSnapshotRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DiscoverInputSchemaCommand(
  input: DiscoverInputSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.DiscoverInputSchema";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DiscoverInputSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListApplicationSnapshotsCommand(
  input: ListApplicationSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "KinesisAnalytics_20180523.ListApplicationSnapshots";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationSnapshotsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListApplicationsCommand(
  input: ListApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.ListApplications";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListApplicationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartApplicationCommand(
  input: StartApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.StartApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopApplicationCommand(
  input: StopApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.StopApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateApplicationCommand(
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "KinesisAnalytics_20180523.UpdateApplication";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateApplicationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> {
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
}

async function deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationCloudWatchLoggingOptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddApplicationInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> {
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
}

async function deserializeAws_json1_1AddApplicationInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesis.analytics.v20180523#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1AddApplicationInputProcessingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationInputProcessingConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddApplicationOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> {
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
}

async function deserializeAws_json1_1AddApplicationOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddApplicationReferenceDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> {
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
}

async function deserializeAws_json1_1AddApplicationReferenceDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationReferenceDataSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddApplicationVpcConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1AddApplicationVpcConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddApplicationVpcConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1CreateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesis.analytics.v20180523#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesis.analytics.v20180523#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesis.analytics.v20180523#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateApplicationSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> {
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
}

async function deserializeAws_json1_1CreateApplicationSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateApplicationSnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.kinesis.analytics.v20180523#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationCloudWatchLoggingOptionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationInputProcessingConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationOutputCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationReferenceDataSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationReferenceDataSourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationSnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteApplicationVpcConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteApplicationVpcConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteApplicationVpcConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeApplicationSnapshotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeApplicationSnapshotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeApplicationSnapshotCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DiscoverInputSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> {
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
}

async function deserializeAws_json1_1DiscoverInputSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInputSchemaCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceProvisionedThroughputExceededException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceProvisionedThroughputExceededException":
      response = {
        ...(await deserializeAws_json1_1ResourceProvisionedThroughputExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kinesis.analytics.v20180523#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnableToDetectSchemaException":
    case "com.amazonaws.kinesis.analytics.v20180523#UnableToDetectSchemaException":
      response = {
        ...(await deserializeAws_json1_1UnableToDetectSchemaExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListApplicationSnapshotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> {
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
}

async function deserializeAws_json1_1ListApplicationSnapshotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationSnapshotsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.kinesis.analytics.v20180523#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListApplicationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StartApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1StartApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1StopApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesis.analytics.v20180523#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.kinesis.analytics.v20180523#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateApplicationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CodeValidationException":
    case "com.amazonaws.kinesis.analytics.v20180523#CodeValidationException":
      response = {
        ...(await deserializeAws_json1_1CodeValidationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.kinesis.analytics.v20180523#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidApplicationConfigurationException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidApplicationConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidApplicationConfigurationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgumentException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidArgumentException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.kinesis.analytics.v20180523#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.kinesis.analytics.v20180523#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CloudWatchLoggingOption !== undefined) {
    bodyParams[
      "CloudWatchLoggingOption"
    ] = serializeAws_json1_1CloudWatchLoggingOption(
      input.CloudWatchLoggingOption,
      context
    );
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1AddApplicationInputProcessingConfigurationRequest = (
  input: AddApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.InputId !== undefined) {
    bodyParams["InputId"] = input.InputId;
  }
  if (input.InputProcessingConfiguration !== undefined) {
    bodyParams[
      "InputProcessingConfiguration"
    ] = serializeAws_json1_1InputProcessingConfiguration(
      input.InputProcessingConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddApplicationInputRequest = (
  input: AddApplicationInputRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.Input !== undefined) {
    bodyParams["Input"] = serializeAws_json1_1Input(input.Input, context);
  }
  return bodyParams;
};

const serializeAws_json1_1AddApplicationOutputRequest = (
  input: AddApplicationOutputRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.Output !== undefined) {
    bodyParams["Output"] = serializeAws_json1_1Output(input.Output, context);
  }
  return bodyParams;
};

const serializeAws_json1_1AddApplicationReferenceDataSourceRequest = (
  input: AddApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.ReferenceDataSource !== undefined) {
    bodyParams["ReferenceDataSource"] = serializeAws_json1_1ReferenceDataSource(
      input.ReferenceDataSource,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddApplicationVpcConfigurationRequest = (
  input: AddApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.VpcConfiguration !== undefined) {
    bodyParams["VpcConfiguration"] = serializeAws_json1_1VpcConfiguration(
      input.VpcConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationCodeConfiguration = (
  input: ApplicationCodeConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CodeContent !== undefined) {
    bodyParams["CodeContent"] = serializeAws_json1_1CodeContent(
      input.CodeContent,
      context
    );
  }
  if (input.CodeContentType !== undefined) {
    bodyParams["CodeContentType"] = input.CodeContentType;
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationCodeConfigurationUpdate = (
  input: ApplicationCodeConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CodeContentTypeUpdate !== undefined) {
    bodyParams["CodeContentTypeUpdate"] = input.CodeContentTypeUpdate;
  }
  if (input.CodeContentUpdate !== undefined) {
    bodyParams["CodeContentUpdate"] = serializeAws_json1_1CodeContentUpdate(
      input.CodeContentUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationConfiguration = (
  input: ApplicationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationCodeConfiguration !== undefined) {
    bodyParams[
      "ApplicationCodeConfiguration"
    ] = serializeAws_json1_1ApplicationCodeConfiguration(
      input.ApplicationCodeConfiguration,
      context
    );
  }
  if (input.ApplicationSnapshotConfiguration !== undefined) {
    bodyParams[
      "ApplicationSnapshotConfiguration"
    ] = serializeAws_json1_1ApplicationSnapshotConfiguration(
      input.ApplicationSnapshotConfiguration,
      context
    );
  }
  if (input.EnvironmentProperties !== undefined) {
    bodyParams[
      "EnvironmentProperties"
    ] = serializeAws_json1_1EnvironmentProperties(
      input.EnvironmentProperties,
      context
    );
  }
  if (input.FlinkApplicationConfiguration !== undefined) {
    bodyParams[
      "FlinkApplicationConfiguration"
    ] = serializeAws_json1_1FlinkApplicationConfiguration(
      input.FlinkApplicationConfiguration,
      context
    );
  }
  if (input.SqlApplicationConfiguration !== undefined) {
    bodyParams[
      "SqlApplicationConfiguration"
    ] = serializeAws_json1_1SqlApplicationConfiguration(
      input.SqlApplicationConfiguration,
      context
    );
  }
  if (input.VpcConfigurations !== undefined) {
    bodyParams["VpcConfigurations"] = serializeAws_json1_1VpcConfigurations(
      input.VpcConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationConfigurationUpdate = (
  input: ApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationCodeConfigurationUpdate !== undefined) {
    bodyParams[
      "ApplicationCodeConfigurationUpdate"
    ] = serializeAws_json1_1ApplicationCodeConfigurationUpdate(
      input.ApplicationCodeConfigurationUpdate,
      context
    );
  }
  if (input.ApplicationSnapshotConfigurationUpdate !== undefined) {
    bodyParams[
      "ApplicationSnapshotConfigurationUpdate"
    ] = serializeAws_json1_1ApplicationSnapshotConfigurationUpdate(
      input.ApplicationSnapshotConfigurationUpdate,
      context
    );
  }
  if (input.EnvironmentPropertyUpdates !== undefined) {
    bodyParams[
      "EnvironmentPropertyUpdates"
    ] = serializeAws_json1_1EnvironmentPropertyUpdates(
      input.EnvironmentPropertyUpdates,
      context
    );
  }
  if (input.FlinkApplicationConfigurationUpdate !== undefined) {
    bodyParams[
      "FlinkApplicationConfigurationUpdate"
    ] = serializeAws_json1_1FlinkApplicationConfigurationUpdate(
      input.FlinkApplicationConfigurationUpdate,
      context
    );
  }
  if (input.SqlApplicationConfigurationUpdate !== undefined) {
    bodyParams[
      "SqlApplicationConfigurationUpdate"
    ] = serializeAws_json1_1SqlApplicationConfigurationUpdate(
      input.SqlApplicationConfigurationUpdate,
      context
    );
  }
  if (input.VpcConfigurationUpdates !== undefined) {
    bodyParams[
      "VpcConfigurationUpdates"
    ] = serializeAws_json1_1VpcConfigurationUpdates(
      input.VpcConfigurationUpdates,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationRestoreConfiguration = (
  input: ApplicationRestoreConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationRestoreType !== undefined) {
    bodyParams["ApplicationRestoreType"] = input.ApplicationRestoreType;
  }
  if (input.SnapshotName !== undefined) {
    bodyParams["SnapshotName"] = input.SnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationSnapshotConfiguration = (
  input: ApplicationSnapshotConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SnapshotsEnabled !== undefined) {
    bodyParams["SnapshotsEnabled"] = input.SnapshotsEnabled;
  }
  return bodyParams;
};

const serializeAws_json1_1ApplicationSnapshotConfigurationUpdate = (
  input: ApplicationSnapshotConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SnapshotsEnabledUpdate !== undefined) {
    bodyParams["SnapshotsEnabledUpdate"] = input.SnapshotsEnabledUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1CSVMappingParameters = (
  input: CSVMappingParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RecordColumnDelimiter !== undefined) {
    bodyParams["RecordColumnDelimiter"] = input.RecordColumnDelimiter;
  }
  if (input.RecordRowDelimiter !== undefined) {
    bodyParams["RecordRowDelimiter"] = input.RecordRowDelimiter;
  }
  return bodyParams;
};

const serializeAws_json1_1CheckpointConfiguration = (
  input: CheckpointConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CheckpointInterval !== undefined) {
    bodyParams["CheckpointInterval"] = input.CheckpointInterval;
  }
  if (input.CheckpointingEnabled !== undefined) {
    bodyParams["CheckpointingEnabled"] = input.CheckpointingEnabled;
  }
  if (input.ConfigurationType !== undefined) {
    bodyParams["ConfigurationType"] = input.ConfigurationType;
  }
  if (input.MinPauseBetweenCheckpoints !== undefined) {
    bodyParams["MinPauseBetweenCheckpoints"] = input.MinPauseBetweenCheckpoints;
  }
  return bodyParams;
};

const serializeAws_json1_1CheckpointConfigurationUpdate = (
  input: CheckpointConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CheckpointIntervalUpdate !== undefined) {
    bodyParams["CheckpointIntervalUpdate"] = input.CheckpointIntervalUpdate;
  }
  if (input.CheckpointingEnabledUpdate !== undefined) {
    bodyParams["CheckpointingEnabledUpdate"] = input.CheckpointingEnabledUpdate;
  }
  if (input.ConfigurationTypeUpdate !== undefined) {
    bodyParams["ConfigurationTypeUpdate"] = input.ConfigurationTypeUpdate;
  }
  if (input.MinPauseBetweenCheckpointsUpdate !== undefined) {
    bodyParams["MinPauseBetweenCheckpointsUpdate"] =
      input.MinPauseBetweenCheckpointsUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1CloudWatchLoggingOption = (
  input: CloudWatchLoggingOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LogStreamARN !== undefined) {
    bodyParams["LogStreamARN"] = input.LogStreamARN;
  }
  return bodyParams;
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdate = (
  input: CloudWatchLoggingOptionUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLoggingOptionId !== undefined) {
    bodyParams["CloudWatchLoggingOptionId"] = input.CloudWatchLoggingOptionId;
  }
  if (input.LogStreamARNUpdate !== undefined) {
    bodyParams["LogStreamARNUpdate"] = input.LogStreamARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1CloudWatchLoggingOptionUpdates = (
  input: Array<CloudWatchLoggingOptionUpdate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1CloudWatchLoggingOptionUpdate(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1CloudWatchLoggingOptions = (
  input: Array<CloudWatchLoggingOption>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1CloudWatchLoggingOption(entry, context));
  }
  return contents;
};

const serializeAws_json1_1CodeContent = (
  input: CodeContent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3ContentLocation !== undefined) {
    bodyParams["S3ContentLocation"] = serializeAws_json1_1S3ContentLocation(
      input.S3ContentLocation,
      context
    );
  }
  if (input.TextContent !== undefined) {
    bodyParams["TextContent"] = input.TextContent;
  }
  if (input.ZipFileContent !== undefined) {
    bodyParams["ZipFileContent"] = context.base64Encoder(input.ZipFileContent);
  }
  return bodyParams;
};

const serializeAws_json1_1CodeContentUpdate = (
  input: CodeContentUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3ContentLocationUpdate !== undefined) {
    bodyParams[
      "S3ContentLocationUpdate"
    ] = serializeAws_json1_1S3ContentLocationUpdate(
      input.S3ContentLocationUpdate,
      context
    );
  }
  if (input.TextContentUpdate !== undefined) {
    bodyParams["TextContentUpdate"] = input.TextContentUpdate;
  }
  if (input.ZipFileContentUpdate !== undefined) {
    bodyParams["ZipFileContentUpdate"] = context.base64Encoder(
      input.ZipFileContentUpdate
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateApplicationRequest = (
  input: CreateApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationConfiguration !== undefined) {
    bodyParams[
      "ApplicationConfiguration"
    ] = serializeAws_json1_1ApplicationConfiguration(
      input.ApplicationConfiguration,
      context
    );
  }
  if (input.ApplicationDescription !== undefined) {
    bodyParams["ApplicationDescription"] = input.ApplicationDescription;
  }
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CloudWatchLoggingOptions !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptions"
    ] = serializeAws_json1_1CloudWatchLoggingOptions(
      input.CloudWatchLoggingOptions,
      context
    );
  }
  if (input.RuntimeEnvironment !== undefined) {
    bodyParams["RuntimeEnvironment"] = input.RuntimeEnvironment;
  }
  if (input.ServiceExecutionRole !== undefined) {
    bodyParams["ServiceExecutionRole"] = input.ServiceExecutionRole;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateApplicationSnapshotRequest = (
  input: CreateApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.SnapshotName !== undefined) {
    bodyParams["SnapshotName"] = input.SnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionRequest = (
  input: DeleteApplicationCloudWatchLoggingOptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CloudWatchLoggingOptionId !== undefined) {
    bodyParams["CloudWatchLoggingOptionId"] = input.CloudWatchLoggingOptionId;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationInputProcessingConfigurationRequest = (
  input: DeleteApplicationInputProcessingConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.InputId !== undefined) {
    bodyParams["InputId"] = input.InputId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationOutputRequest = (
  input: DeleteApplicationOutputRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.OutputId !== undefined) {
    bodyParams["OutputId"] = input.OutputId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationReferenceDataSourceRequest = (
  input: DeleteApplicationReferenceDataSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.ReferenceId !== undefined) {
    bodyParams["ReferenceId"] = input.ReferenceId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationRequest = (
  input: DeleteApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CreateTimestamp !== undefined) {
    bodyParams["CreateTimestamp"] = Math.round(
      input.CreateTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationSnapshotRequest = (
  input: DeleteApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.SnapshotCreationTimestamp !== undefined) {
    bodyParams["SnapshotCreationTimestamp"] = Math.round(
      input.SnapshotCreationTimestamp.getTime() / 1000
    );
  }
  if (input.SnapshotName !== undefined) {
    bodyParams["SnapshotName"] = input.SnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteApplicationVpcConfigurationRequest = (
  input: DeleteApplicationVpcConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.VpcConfigurationId !== undefined) {
    bodyParams["VpcConfigurationId"] = input.VpcConfigurationId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeApplicationRequest = (
  input: DescribeApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.IncludeAdditionalDetails !== undefined) {
    bodyParams["IncludeAdditionalDetails"] = input.IncludeAdditionalDetails;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeApplicationSnapshotRequest = (
  input: DescribeApplicationSnapshotRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.SnapshotName !== undefined) {
    bodyParams["SnapshotName"] = input.SnapshotName;
  }
  return bodyParams;
};

const serializeAws_json1_1DestinationSchema = (
  input: DestinationSchema,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RecordFormatType !== undefined) {
    bodyParams["RecordFormatType"] = input.RecordFormatType;
  }
  return bodyParams;
};

const serializeAws_json1_1DiscoverInputSchemaRequest = (
  input: DiscoverInputSchemaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputProcessingConfiguration !== undefined) {
    bodyParams[
      "InputProcessingConfiguration"
    ] = serializeAws_json1_1InputProcessingConfiguration(
      input.InputProcessingConfiguration,
      context
    );
  }
  if (input.InputStartingPositionConfiguration !== undefined) {
    bodyParams[
      "InputStartingPositionConfiguration"
    ] = serializeAws_json1_1InputStartingPositionConfiguration(
      input.InputStartingPositionConfiguration,
      context
    );
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.S3Configuration !== undefined) {
    bodyParams["S3Configuration"] = serializeAws_json1_1S3Configuration(
      input.S3Configuration,
      context
    );
  }
  if (input.ServiceExecutionRole !== undefined) {
    bodyParams["ServiceExecutionRole"] = input.ServiceExecutionRole;
  }
  return bodyParams;
};

const serializeAws_json1_1EnvironmentProperties = (
  input: EnvironmentProperties,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PropertyGroups !== undefined) {
    bodyParams["PropertyGroups"] = serializeAws_json1_1PropertyGroups(
      input.PropertyGroups,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1EnvironmentPropertyUpdates = (
  input: EnvironmentPropertyUpdates,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PropertyGroups !== undefined) {
    bodyParams["PropertyGroups"] = serializeAws_json1_1PropertyGroups(
      input.PropertyGroups,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FlinkApplicationConfiguration = (
  input: FlinkApplicationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CheckpointConfiguration !== undefined) {
    bodyParams[
      "CheckpointConfiguration"
    ] = serializeAws_json1_1CheckpointConfiguration(
      input.CheckpointConfiguration,
      context
    );
  }
  if (input.MonitoringConfiguration !== undefined) {
    bodyParams[
      "MonitoringConfiguration"
    ] = serializeAws_json1_1MonitoringConfiguration(
      input.MonitoringConfiguration,
      context
    );
  }
  if (input.ParallelismConfiguration !== undefined) {
    bodyParams[
      "ParallelismConfiguration"
    ] = serializeAws_json1_1ParallelismConfiguration(
      input.ParallelismConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FlinkApplicationConfigurationUpdate = (
  input: FlinkApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CheckpointConfigurationUpdate !== undefined) {
    bodyParams[
      "CheckpointConfigurationUpdate"
    ] = serializeAws_json1_1CheckpointConfigurationUpdate(
      input.CheckpointConfigurationUpdate,
      context
    );
  }
  if (input.MonitoringConfigurationUpdate !== undefined) {
    bodyParams[
      "MonitoringConfigurationUpdate"
    ] = serializeAws_json1_1MonitoringConfigurationUpdate(
      input.MonitoringConfigurationUpdate,
      context
    );
  }
  if (input.ParallelismConfigurationUpdate !== undefined) {
    bodyParams[
      "ParallelismConfigurationUpdate"
    ] = serializeAws_json1_1ParallelismConfigurationUpdate(
      input.ParallelismConfigurationUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FlinkRunConfiguration = (
  input: FlinkRunConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AllowNonRestoredState !== undefined) {
    bodyParams["AllowNonRestoredState"] = input.AllowNonRestoredState;
  }
  return bodyParams;
};

const serializeAws_json1_1Input = (
  input: Input,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputParallelism !== undefined) {
    bodyParams["InputParallelism"] = serializeAws_json1_1InputParallelism(
      input.InputParallelism,
      context
    );
  }
  if (input.InputProcessingConfiguration !== undefined) {
    bodyParams[
      "InputProcessingConfiguration"
    ] = serializeAws_json1_1InputProcessingConfiguration(
      input.InputProcessingConfiguration,
      context
    );
  }
  if (input.InputSchema !== undefined) {
    bodyParams["InputSchema"] = serializeAws_json1_1SourceSchema(
      input.InputSchema,
      context
    );
  }
  if (input.KinesisFirehoseInput !== undefined) {
    bodyParams[
      "KinesisFirehoseInput"
    ] = serializeAws_json1_1KinesisFirehoseInput(
      input.KinesisFirehoseInput,
      context
    );
  }
  if (input.KinesisStreamsInput !== undefined) {
    bodyParams["KinesisStreamsInput"] = serializeAws_json1_1KinesisStreamsInput(
      input.KinesisStreamsInput,
      context
    );
  }
  if (input.NamePrefix !== undefined) {
    bodyParams["NamePrefix"] = input.NamePrefix;
  }
  return bodyParams;
};

const serializeAws_json1_1InputLambdaProcessor = (
  input: InputLambdaProcessor,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1InputLambdaProcessorUpdate = (
  input: InputLambdaProcessorUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNUpdate !== undefined) {
    bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1InputParallelism = (
  input: InputParallelism,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Count !== undefined) {
    bodyParams["Count"] = input.Count;
  }
  return bodyParams;
};

const serializeAws_json1_1InputParallelismUpdate = (
  input: InputParallelismUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CountUpdate !== undefined) {
    bodyParams["CountUpdate"] = input.CountUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1InputProcessingConfiguration = (
  input: InputProcessingConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputLambdaProcessor !== undefined) {
    bodyParams[
      "InputLambdaProcessor"
    ] = serializeAws_json1_1InputLambdaProcessor(
      input.InputLambdaProcessor,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputProcessingConfigurationUpdate = (
  input: InputProcessingConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputLambdaProcessorUpdate !== undefined) {
    bodyParams[
      "InputLambdaProcessorUpdate"
    ] = serializeAws_json1_1InputLambdaProcessorUpdate(
      input.InputLambdaProcessorUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputSchemaUpdate = (
  input: InputSchemaUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RecordColumnUpdates !== undefined) {
    bodyParams["RecordColumnUpdates"] = serializeAws_json1_1RecordColumns(
      input.RecordColumnUpdates,
      context
    );
  }
  if (input.RecordEncodingUpdate !== undefined) {
    bodyParams["RecordEncodingUpdate"] = input.RecordEncodingUpdate;
  }
  if (input.RecordFormatUpdate !== undefined) {
    bodyParams["RecordFormatUpdate"] = serializeAws_json1_1RecordFormat(
      input.RecordFormatUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputStartingPositionConfiguration = (
  input: InputStartingPositionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputStartingPosition !== undefined) {
    bodyParams["InputStartingPosition"] = input.InputStartingPosition;
  }
  return bodyParams;
};

const serializeAws_json1_1InputUpdate = (
  input: InputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputId !== undefined) {
    bodyParams["InputId"] = input.InputId;
  }
  if (input.InputParallelismUpdate !== undefined) {
    bodyParams[
      "InputParallelismUpdate"
    ] = serializeAws_json1_1InputParallelismUpdate(
      input.InputParallelismUpdate,
      context
    );
  }
  if (input.InputProcessingConfigurationUpdate !== undefined) {
    bodyParams[
      "InputProcessingConfigurationUpdate"
    ] = serializeAws_json1_1InputProcessingConfigurationUpdate(
      input.InputProcessingConfigurationUpdate,
      context
    );
  }
  if (input.InputSchemaUpdate !== undefined) {
    bodyParams["InputSchemaUpdate"] = serializeAws_json1_1InputSchemaUpdate(
      input.InputSchemaUpdate,
      context
    );
  }
  if (input.KinesisFirehoseInputUpdate !== undefined) {
    bodyParams[
      "KinesisFirehoseInputUpdate"
    ] = serializeAws_json1_1KinesisFirehoseInputUpdate(
      input.KinesisFirehoseInputUpdate,
      context
    );
  }
  if (input.KinesisStreamsInputUpdate !== undefined) {
    bodyParams[
      "KinesisStreamsInputUpdate"
    ] = serializeAws_json1_1KinesisStreamsInputUpdate(
      input.KinesisStreamsInputUpdate,
      context
    );
  }
  if (input.NamePrefixUpdate !== undefined) {
    bodyParams["NamePrefixUpdate"] = input.NamePrefixUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1InputUpdates = (
  input: Array<InputUpdate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InputUpdate(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Inputs = (
  input: Array<Input>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Input(entry, context));
  }
  return contents;
};

const serializeAws_json1_1JSONMappingParameters = (
  input: JSONMappingParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RecordRowPath !== undefined) {
    bodyParams["RecordRowPath"] = input.RecordRowPath;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisFirehoseInput = (
  input: KinesisFirehoseInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisFirehoseInputUpdate = (
  input: KinesisFirehoseInputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNUpdate !== undefined) {
    bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisFirehoseOutput = (
  input: KinesisFirehoseOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisFirehoseOutputUpdate = (
  input: KinesisFirehoseOutputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNUpdate !== undefined) {
    bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisStreamsInput = (
  input: KinesisStreamsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisStreamsInputUpdate = (
  input: KinesisStreamsInputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNUpdate !== undefined) {
    bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisStreamsOutput = (
  input: KinesisStreamsOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1KinesisStreamsOutputUpdate = (
  input: KinesisStreamsOutputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNUpdate !== undefined) {
    bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1LambdaOutput = (
  input: LambdaOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1LambdaOutputUpdate = (
  input: LambdaOutputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARNUpdate !== undefined) {
    bodyParams["ResourceARNUpdate"] = input.ResourceARNUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1ListApplicationSnapshotsRequest = (
  input: ListApplicationSnapshotsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListApplicationsRequest = (
  input: ListApplicationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1MappingParameters = (
  input: MappingParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CSVMappingParameters !== undefined) {
    bodyParams[
      "CSVMappingParameters"
    ] = serializeAws_json1_1CSVMappingParameters(
      input.CSVMappingParameters,
      context
    );
  }
  if (input.JSONMappingParameters !== undefined) {
    bodyParams[
      "JSONMappingParameters"
    ] = serializeAws_json1_1JSONMappingParameters(
      input.JSONMappingParameters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1MonitoringConfiguration = (
  input: MonitoringConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConfigurationType !== undefined) {
    bodyParams["ConfigurationType"] = input.ConfigurationType;
  }
  if (input.LogLevel !== undefined) {
    bodyParams["LogLevel"] = input.LogLevel;
  }
  if (input.MetricsLevel !== undefined) {
    bodyParams["MetricsLevel"] = input.MetricsLevel;
  }
  return bodyParams;
};

const serializeAws_json1_1MonitoringConfigurationUpdate = (
  input: MonitoringConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConfigurationTypeUpdate !== undefined) {
    bodyParams["ConfigurationTypeUpdate"] = input.ConfigurationTypeUpdate;
  }
  if (input.LogLevelUpdate !== undefined) {
    bodyParams["LogLevelUpdate"] = input.LogLevelUpdate;
  }
  if (input.MetricsLevelUpdate !== undefined) {
    bodyParams["MetricsLevelUpdate"] = input.MetricsLevelUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1Output = (
  input: Output,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationSchema !== undefined) {
    bodyParams["DestinationSchema"] = serializeAws_json1_1DestinationSchema(
      input.DestinationSchema,
      context
    );
  }
  if (input.KinesisFirehoseOutput !== undefined) {
    bodyParams[
      "KinesisFirehoseOutput"
    ] = serializeAws_json1_1KinesisFirehoseOutput(
      input.KinesisFirehoseOutput,
      context
    );
  }
  if (input.KinesisStreamsOutput !== undefined) {
    bodyParams[
      "KinesisStreamsOutput"
    ] = serializeAws_json1_1KinesisStreamsOutput(
      input.KinesisStreamsOutput,
      context
    );
  }
  if (input.LambdaOutput !== undefined) {
    bodyParams["LambdaOutput"] = serializeAws_json1_1LambdaOutput(
      input.LambdaOutput,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputUpdate = (
  input: OutputUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationSchemaUpdate !== undefined) {
    bodyParams[
      "DestinationSchemaUpdate"
    ] = serializeAws_json1_1DestinationSchema(
      input.DestinationSchemaUpdate,
      context
    );
  }
  if (input.KinesisFirehoseOutputUpdate !== undefined) {
    bodyParams[
      "KinesisFirehoseOutputUpdate"
    ] = serializeAws_json1_1KinesisFirehoseOutputUpdate(
      input.KinesisFirehoseOutputUpdate,
      context
    );
  }
  if (input.KinesisStreamsOutputUpdate !== undefined) {
    bodyParams[
      "KinesisStreamsOutputUpdate"
    ] = serializeAws_json1_1KinesisStreamsOutputUpdate(
      input.KinesisStreamsOutputUpdate,
      context
    );
  }
  if (input.LambdaOutputUpdate !== undefined) {
    bodyParams["LambdaOutputUpdate"] = serializeAws_json1_1LambdaOutputUpdate(
      input.LambdaOutputUpdate,
      context
    );
  }
  if (input.NameUpdate !== undefined) {
    bodyParams["NameUpdate"] = input.NameUpdate;
  }
  if (input.OutputId !== undefined) {
    bodyParams["OutputId"] = input.OutputId;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputUpdates = (
  input: Array<OutputUpdate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1OutputUpdate(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Outputs = (
  input: Array<Output>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Output(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ParallelismConfiguration = (
  input: ParallelismConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutoScalingEnabled !== undefined) {
    bodyParams["AutoScalingEnabled"] = input.AutoScalingEnabled;
  }
  if (input.ConfigurationType !== undefined) {
    bodyParams["ConfigurationType"] = input.ConfigurationType;
  }
  if (input.Parallelism !== undefined) {
    bodyParams["Parallelism"] = input.Parallelism;
  }
  if (input.ParallelismPerKPU !== undefined) {
    bodyParams["ParallelismPerKPU"] = input.ParallelismPerKPU;
  }
  return bodyParams;
};

const serializeAws_json1_1ParallelismConfigurationUpdate = (
  input: ParallelismConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutoScalingEnabledUpdate !== undefined) {
    bodyParams["AutoScalingEnabledUpdate"] = input.AutoScalingEnabledUpdate;
  }
  if (input.ConfigurationTypeUpdate !== undefined) {
    bodyParams["ConfigurationTypeUpdate"] = input.ConfigurationTypeUpdate;
  }
  if (input.ParallelismPerKPUUpdate !== undefined) {
    bodyParams["ParallelismPerKPUUpdate"] = input.ParallelismPerKPUUpdate;
  }
  if (input.ParallelismUpdate !== undefined) {
    bodyParams["ParallelismUpdate"] = input.ParallelismUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1PropertyGroup = (
  input: PropertyGroup,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PropertyGroupId !== undefined) {
    bodyParams["PropertyGroupId"] = input.PropertyGroupId;
  }
  if (input.PropertyMap !== undefined) {
    bodyParams["PropertyMap"] = serializeAws_json1_1PropertyMap(
      input.PropertyMap,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1PropertyGroups = (
  input: Array<PropertyGroup>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1PropertyGroup(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PropertyMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1RecordColumn = (
  input: RecordColumn,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Mapping !== undefined) {
    bodyParams["Mapping"] = input.Mapping;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SqlType !== undefined) {
    bodyParams["SqlType"] = input.SqlType;
  }
  return bodyParams;
};

const serializeAws_json1_1RecordColumns = (
  input: Array<RecordColumn>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1RecordColumn(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RecordFormat = (
  input: RecordFormat,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MappingParameters !== undefined) {
    bodyParams["MappingParameters"] = serializeAws_json1_1MappingParameters(
      input.MappingParameters,
      context
    );
  }
  if (input.RecordFormatType !== undefined) {
    bodyParams["RecordFormatType"] = input.RecordFormatType;
  }
  return bodyParams;
};

const serializeAws_json1_1ReferenceDataSource = (
  input: ReferenceDataSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ReferenceSchema !== undefined) {
    bodyParams["ReferenceSchema"] = serializeAws_json1_1SourceSchema(
      input.ReferenceSchema,
      context
    );
  }
  if (input.S3ReferenceDataSource !== undefined) {
    bodyParams[
      "S3ReferenceDataSource"
    ] = serializeAws_json1_1S3ReferenceDataSource(
      input.S3ReferenceDataSource,
      context
    );
  }
  if (input.TableName !== undefined) {
    bodyParams["TableName"] = input.TableName;
  }
  return bodyParams;
};

const serializeAws_json1_1ReferenceDataSourceUpdate = (
  input: ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ReferenceId !== undefined) {
    bodyParams["ReferenceId"] = input.ReferenceId;
  }
  if (input.ReferenceSchemaUpdate !== undefined) {
    bodyParams["ReferenceSchemaUpdate"] = serializeAws_json1_1SourceSchema(
      input.ReferenceSchemaUpdate,
      context
    );
  }
  if (input.S3ReferenceDataSourceUpdate !== undefined) {
    bodyParams[
      "S3ReferenceDataSourceUpdate"
    ] = serializeAws_json1_1S3ReferenceDataSourceUpdate(
      input.S3ReferenceDataSourceUpdate,
      context
    );
  }
  if (input.TableNameUpdate !== undefined) {
    bodyParams["TableNameUpdate"] = input.TableNameUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1ReferenceDataSourceUpdates = (
  input: Array<ReferenceDataSourceUpdate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1ReferenceDataSourceUpdate(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1ReferenceDataSources = (
  input: Array<ReferenceDataSource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ReferenceDataSource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RunConfiguration = (
  input: RunConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationRestoreConfiguration !== undefined) {
    bodyParams[
      "ApplicationRestoreConfiguration"
    ] = serializeAws_json1_1ApplicationRestoreConfiguration(
      input.ApplicationRestoreConfiguration,
      context
    );
  }
  if (input.FlinkRunConfiguration !== undefined) {
    bodyParams[
      "FlinkRunConfiguration"
    ] = serializeAws_json1_1FlinkRunConfiguration(
      input.FlinkRunConfiguration,
      context
    );
  }
  if (input.SqlRunConfigurations !== undefined) {
    bodyParams[
      "SqlRunConfigurations"
    ] = serializeAws_json1_1SqlRunConfigurations(
      input.SqlRunConfigurations,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RunConfigurationUpdate = (
  input: RunConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationRestoreConfiguration !== undefined) {
    bodyParams[
      "ApplicationRestoreConfiguration"
    ] = serializeAws_json1_1ApplicationRestoreConfiguration(
      input.ApplicationRestoreConfiguration,
      context
    );
  }
  if (input.FlinkRunConfiguration !== undefined) {
    bodyParams[
      "FlinkRunConfiguration"
    ] = serializeAws_json1_1FlinkRunConfiguration(
      input.FlinkRunConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1S3Configuration = (
  input: S3Configuration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.FileKey !== undefined) {
    bodyParams["FileKey"] = input.FileKey;
  }
  return bodyParams;
};

const serializeAws_json1_1S3ContentLocation = (
  input: S3ContentLocation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.FileKey !== undefined) {
    bodyParams["FileKey"] = input.FileKey;
  }
  if (input.ObjectVersion !== undefined) {
    bodyParams["ObjectVersion"] = input.ObjectVersion;
  }
  return bodyParams;
};

const serializeAws_json1_1S3ContentLocationUpdate = (
  input: S3ContentLocationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARNUpdate !== undefined) {
    bodyParams["BucketARNUpdate"] = input.BucketARNUpdate;
  }
  if (input.FileKeyUpdate !== undefined) {
    bodyParams["FileKeyUpdate"] = input.FileKeyUpdate;
  }
  if (input.ObjectVersionUpdate !== undefined) {
    bodyParams["ObjectVersionUpdate"] = input.ObjectVersionUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1S3ReferenceDataSource = (
  input: S3ReferenceDataSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARN !== undefined) {
    bodyParams["BucketARN"] = input.BucketARN;
  }
  if (input.FileKey !== undefined) {
    bodyParams["FileKey"] = input.FileKey;
  }
  return bodyParams;
};

const serializeAws_json1_1S3ReferenceDataSourceUpdate = (
  input: S3ReferenceDataSourceUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BucketARNUpdate !== undefined) {
    bodyParams["BucketARNUpdate"] = input.BucketARNUpdate;
  }
  if (input.FileKeyUpdate !== undefined) {
    bodyParams["FileKeyUpdate"] = input.FileKeyUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1SecurityGroupIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1SourceSchema = (
  input: SourceSchema,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RecordColumns !== undefined) {
    bodyParams["RecordColumns"] = serializeAws_json1_1RecordColumns(
      input.RecordColumns,
      context
    );
  }
  if (input.RecordEncoding !== undefined) {
    bodyParams["RecordEncoding"] = input.RecordEncoding;
  }
  if (input.RecordFormat !== undefined) {
    bodyParams["RecordFormat"] = serializeAws_json1_1RecordFormat(
      input.RecordFormat,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SqlApplicationConfiguration = (
  input: SqlApplicationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Inputs !== undefined) {
    bodyParams["Inputs"] = serializeAws_json1_1Inputs(input.Inputs, context);
  }
  if (input.Outputs !== undefined) {
    bodyParams["Outputs"] = serializeAws_json1_1Outputs(input.Outputs, context);
  }
  if (input.ReferenceDataSources !== undefined) {
    bodyParams[
      "ReferenceDataSources"
    ] = serializeAws_json1_1ReferenceDataSources(
      input.ReferenceDataSources,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SqlApplicationConfigurationUpdate = (
  input: SqlApplicationConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputUpdates !== undefined) {
    bodyParams["InputUpdates"] = serializeAws_json1_1InputUpdates(
      input.InputUpdates,
      context
    );
  }
  if (input.OutputUpdates !== undefined) {
    bodyParams["OutputUpdates"] = serializeAws_json1_1OutputUpdates(
      input.OutputUpdates,
      context
    );
  }
  if (input.ReferenceDataSourceUpdates !== undefined) {
    bodyParams[
      "ReferenceDataSourceUpdates"
    ] = serializeAws_json1_1ReferenceDataSourceUpdates(
      input.ReferenceDataSourceUpdates,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SqlRunConfiguration = (
  input: SqlRunConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InputId !== undefined) {
    bodyParams["InputId"] = input.InputId;
  }
  if (input.InputStartingPositionConfiguration !== undefined) {
    bodyParams[
      "InputStartingPositionConfiguration"
    ] = serializeAws_json1_1InputStartingPositionConfiguration(
      input.InputStartingPositionConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SqlRunConfigurations = (
  input: Array<SqlRunConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SqlRunConfiguration(entry, context));
  }
  return contents;
};

const serializeAws_json1_1StartApplicationRequest = (
  input: StartApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.RunConfiguration !== undefined) {
    bodyParams["RunConfiguration"] = serializeAws_json1_1RunConfiguration(
      input.RunConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StopApplicationRequest = (
  input: StopApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  return bodyParams;
};

const serializeAws_json1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateApplicationRequest = (
  input: UpdateApplicationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ApplicationConfigurationUpdate !== undefined) {
    bodyParams[
      "ApplicationConfigurationUpdate"
    ] = serializeAws_json1_1ApplicationConfigurationUpdate(
      input.ApplicationConfigurationUpdate,
      context
    );
  }
  if (input.ApplicationName !== undefined) {
    bodyParams["ApplicationName"] = input.ApplicationName;
  }
  if (input.CloudWatchLoggingOptionUpdates !== undefined) {
    bodyParams[
      "CloudWatchLoggingOptionUpdates"
    ] = serializeAws_json1_1CloudWatchLoggingOptionUpdates(
      input.CloudWatchLoggingOptionUpdates,
      context
    );
  }
  if (input.CurrentApplicationVersionId !== undefined) {
    bodyParams["CurrentApplicationVersionId"] =
      input.CurrentApplicationVersionId;
  }
  if (input.RunConfigurationUpdate !== undefined) {
    bodyParams[
      "RunConfigurationUpdate"
    ] = serializeAws_json1_1RunConfigurationUpdate(
      input.RunConfigurationUpdate,
      context
    );
  }
  if (input.ServiceExecutionRoleUpdate !== undefined) {
    bodyParams["ServiceExecutionRoleUpdate"] = input.ServiceExecutionRoleUpdate;
  }
  return bodyParams;
};

const serializeAws_json1_1VpcConfiguration = (
  input: VpcConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1VpcConfigurationUpdate = (
  input: VpcConfigurationUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIdUpdates !== undefined) {
    bodyParams["SecurityGroupIdUpdates"] = serializeAws_json1_1SecurityGroupIds(
      input.SecurityGroupIdUpdates,
      context
    );
  }
  if (input.SubnetIdUpdates !== undefined) {
    bodyParams["SubnetIdUpdates"] = serializeAws_json1_1SubnetIds(
      input.SubnetIdUpdates,
      context
    );
  }
  if (input.VpcConfigurationId !== undefined) {
    bodyParams["VpcConfigurationId"] = input.VpcConfigurationId;
  }
  return bodyParams;
};

const serializeAws_json1_1VpcConfigurationUpdates = (
  input: Array<VpcConfigurationUpdate>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1VpcConfigurationUpdate(entry, context));
  }
  return contents;
};

const serializeAws_json1_1VpcConfigurations = (
  input: Array<VpcConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1VpcConfiguration(entry, context));
  }
  return contents;
};

const deserializeAws_json1_1AddApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationCloudWatchLoggingOptionResponse => {
  let contents: any = {
    __type: "AddApplicationCloudWatchLoggingOptionResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    CloudWatchLoggingOptionDescriptions: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.CloudWatchLoggingOptionDescriptions !== undefined &&
    output.CloudWatchLoggingOptionDescriptions !== null
  ) {
    contents.CloudWatchLoggingOptionDescriptions = deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(
      output.CloudWatchLoggingOptionDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AddApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputProcessingConfigurationResponse => {
  let contents: any = {
    __type: "AddApplicationInputProcessingConfigurationResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    InputId: undefined,
    InputProcessingConfigurationDescription: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (output.InputId !== undefined && output.InputId !== null) {
    contents.InputId = output.InputId;
  }
  if (
    output.InputProcessingConfigurationDescription !== undefined &&
    output.InputProcessingConfigurationDescription !== null
  ) {
    contents.InputProcessingConfigurationDescription = deserializeAws_json1_1InputProcessingConfigurationDescription(
      output.InputProcessingConfigurationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AddApplicationInputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationInputResponse => {
  let contents: any = {
    __type: "AddApplicationInputResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    InputDescriptions: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.InputDescriptions !== undefined &&
    output.InputDescriptions !== null
  ) {
    contents.InputDescriptions = deserializeAws_json1_1InputDescriptions(
      output.InputDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AddApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationOutputResponse => {
  let contents: any = {
    __type: "AddApplicationOutputResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    OutputDescriptions: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.OutputDescriptions !== undefined &&
    output.OutputDescriptions !== null
  ) {
    contents.OutputDescriptions = deserializeAws_json1_1OutputDescriptions(
      output.OutputDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AddApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationReferenceDataSourceResponse => {
  let contents: any = {
    __type: "AddApplicationReferenceDataSourceResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    ReferenceDataSourceDescriptions: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.ReferenceDataSourceDescriptions !== undefined &&
    output.ReferenceDataSourceDescriptions !== null
  ) {
    contents.ReferenceDataSourceDescriptions = deserializeAws_json1_1ReferenceDataSourceDescriptions(
      output.ReferenceDataSourceDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AddApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): AddApplicationVpcConfigurationResponse => {
  let contents: any = {
    __type: "AddApplicationVpcConfigurationResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    VpcConfigurationDescription: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.VpcConfigurationDescription !== undefined &&
    output.VpcConfigurationDescription !== null
  ) {
    contents.VpcConfigurationDescription = deserializeAws_json1_1VpcConfigurationDescription(
      output.VpcConfigurationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ApplicationCodeConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationCodeConfigurationDescription => {
  let contents: any = {
    __type: "ApplicationCodeConfigurationDescription",
    CodeContentDescription: undefined,
    CodeContentType: undefined
  };
  if (
    output.CodeContentDescription !== undefined &&
    output.CodeContentDescription !== null
  ) {
    contents.CodeContentDescription = deserializeAws_json1_1CodeContentDescription(
      output.CodeContentDescription,
      context
    );
  }
  if (output.CodeContentType !== undefined && output.CodeContentType !== null) {
    contents.CodeContentType = output.CodeContentType;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationConfigurationDescription => {
  let contents: any = {
    __type: "ApplicationConfigurationDescription",
    ApplicationCodeConfigurationDescription: undefined,
    ApplicationSnapshotConfigurationDescription: undefined,
    EnvironmentPropertyDescriptions: undefined,
    FlinkApplicationConfigurationDescription: undefined,
    RunConfigurationDescription: undefined,
    SqlApplicationConfigurationDescription: undefined,
    VpcConfigurationDescriptions: undefined
  };
  if (
    output.ApplicationCodeConfigurationDescription !== undefined &&
    output.ApplicationCodeConfigurationDescription !== null
  ) {
    contents.ApplicationCodeConfigurationDescription = deserializeAws_json1_1ApplicationCodeConfigurationDescription(
      output.ApplicationCodeConfigurationDescription,
      context
    );
  }
  if (
    output.ApplicationSnapshotConfigurationDescription !== undefined &&
    output.ApplicationSnapshotConfigurationDescription !== null
  ) {
    contents.ApplicationSnapshotConfigurationDescription = deserializeAws_json1_1ApplicationSnapshotConfigurationDescription(
      output.ApplicationSnapshotConfigurationDescription,
      context
    );
  }
  if (
    output.EnvironmentPropertyDescriptions !== undefined &&
    output.EnvironmentPropertyDescriptions !== null
  ) {
    contents.EnvironmentPropertyDescriptions = deserializeAws_json1_1EnvironmentPropertyDescriptions(
      output.EnvironmentPropertyDescriptions,
      context
    );
  }
  if (
    output.FlinkApplicationConfigurationDescription !== undefined &&
    output.FlinkApplicationConfigurationDescription !== null
  ) {
    contents.FlinkApplicationConfigurationDescription = deserializeAws_json1_1FlinkApplicationConfigurationDescription(
      output.FlinkApplicationConfigurationDescription,
      context
    );
  }
  if (
    output.RunConfigurationDescription !== undefined &&
    output.RunConfigurationDescription !== null
  ) {
    contents.RunConfigurationDescription = deserializeAws_json1_1RunConfigurationDescription(
      output.RunConfigurationDescription,
      context
    );
  }
  if (
    output.SqlApplicationConfigurationDescription !== undefined &&
    output.SqlApplicationConfigurationDescription !== null
  ) {
    contents.SqlApplicationConfigurationDescription = deserializeAws_json1_1SqlApplicationConfigurationDescription(
      output.SqlApplicationConfigurationDescription,
      context
    );
  }
  if (
    output.VpcConfigurationDescriptions !== undefined &&
    output.VpcConfigurationDescriptions !== null
  ) {
    contents.VpcConfigurationDescriptions = deserializeAws_json1_1VpcConfigurationDescriptions(
      output.VpcConfigurationDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ApplicationDetail = (
  output: any,
  context: __SerdeContext
): ApplicationDetail => {
  let contents: any = {
    __type: "ApplicationDetail",
    ApplicationARN: undefined,
    ApplicationConfigurationDescription: undefined,
    ApplicationDescription: undefined,
    ApplicationName: undefined,
    ApplicationStatus: undefined,
    ApplicationVersionId: undefined,
    CloudWatchLoggingOptionDescriptions: undefined,
    CreateTimestamp: undefined,
    LastUpdateTimestamp: undefined,
    RuntimeEnvironment: undefined,
    ServiceExecutionRole: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationConfigurationDescription !== undefined &&
    output.ApplicationConfigurationDescription !== null
  ) {
    contents.ApplicationConfigurationDescription = deserializeAws_json1_1ApplicationConfigurationDescription(
      output.ApplicationConfigurationDescription,
      context
    );
  }
  if (
    output.ApplicationDescription !== undefined &&
    output.ApplicationDescription !== null
  ) {
    contents.ApplicationDescription = output.ApplicationDescription;
  }
  if (output.ApplicationName !== undefined && output.ApplicationName !== null) {
    contents.ApplicationName = output.ApplicationName;
  }
  if (
    output.ApplicationStatus !== undefined &&
    output.ApplicationStatus !== null
  ) {
    contents.ApplicationStatus = output.ApplicationStatus;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.CloudWatchLoggingOptionDescriptions !== undefined &&
    output.CloudWatchLoggingOptionDescriptions !== null
  ) {
    contents.CloudWatchLoggingOptionDescriptions = deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(
      output.CloudWatchLoggingOptionDescriptions,
      context
    );
  }
  if (output.CreateTimestamp !== undefined && output.CreateTimestamp !== null) {
    contents.CreateTimestamp = new Date(
      Math.round(output.CreateTimestamp * 1000)
    );
  }
  if (
    output.LastUpdateTimestamp !== undefined &&
    output.LastUpdateTimestamp !== null
  ) {
    contents.LastUpdateTimestamp = new Date(
      Math.round(output.LastUpdateTimestamp * 1000)
    );
  }
  if (
    output.RuntimeEnvironment !== undefined &&
    output.RuntimeEnvironment !== null
  ) {
    contents.RuntimeEnvironment = output.RuntimeEnvironment;
  }
  if (
    output.ServiceExecutionRole !== undefined &&
    output.ServiceExecutionRole !== null
  ) {
    contents.ServiceExecutionRole = output.ServiceExecutionRole;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationRestoreConfiguration = (
  output: any,
  context: __SerdeContext
): ApplicationRestoreConfiguration => {
  let contents: any = {
    __type: "ApplicationRestoreConfiguration",
    ApplicationRestoreType: undefined,
    SnapshotName: undefined
  };
  if (
    output.ApplicationRestoreType !== undefined &&
    output.ApplicationRestoreType !== null
  ) {
    contents.ApplicationRestoreType = output.ApplicationRestoreType;
  }
  if (output.SnapshotName !== undefined && output.SnapshotName !== null) {
    contents.SnapshotName = output.SnapshotName;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationSnapshotConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ApplicationSnapshotConfigurationDescription => {
  let contents: any = {
    __type: "ApplicationSnapshotConfigurationDescription",
    SnapshotsEnabled: undefined
  };
  if (
    output.SnapshotsEnabled !== undefined &&
    output.SnapshotsEnabled !== null
  ) {
    contents.SnapshotsEnabled = output.SnapshotsEnabled;
  }
  return contents;
};

const deserializeAws_json1_1ApplicationSummaries = (
  output: any,
  context: __SerdeContext
): Array<ApplicationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ApplicationSummary(entry, context)
  );
};

const deserializeAws_json1_1ApplicationSummary = (
  output: any,
  context: __SerdeContext
): ApplicationSummary => {
  let contents: any = {
    __type: "ApplicationSummary",
    ApplicationARN: undefined,
    ApplicationName: undefined,
    ApplicationStatus: undefined,
    ApplicationVersionId: undefined,
    RuntimeEnvironment: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (output.ApplicationName !== undefined && output.ApplicationName !== null) {
    contents.ApplicationName = output.ApplicationName;
  }
  if (
    output.ApplicationStatus !== undefined &&
    output.ApplicationStatus !== null
  ) {
    contents.ApplicationStatus = output.ApplicationStatus;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.RuntimeEnvironment !== undefined &&
    output.RuntimeEnvironment !== null
  ) {
    contents.RuntimeEnvironment = output.RuntimeEnvironment;
  }
  return contents;
};

const deserializeAws_json1_1CSVMappingParameters = (
  output: any,
  context: __SerdeContext
): CSVMappingParameters => {
  let contents: any = {
    __type: "CSVMappingParameters",
    RecordColumnDelimiter: undefined,
    RecordRowDelimiter: undefined
  };
  if (
    output.RecordColumnDelimiter !== undefined &&
    output.RecordColumnDelimiter !== null
  ) {
    contents.RecordColumnDelimiter = output.RecordColumnDelimiter;
  }
  if (
    output.RecordRowDelimiter !== undefined &&
    output.RecordRowDelimiter !== null
  ) {
    contents.RecordRowDelimiter = output.RecordRowDelimiter;
  }
  return contents;
};

const deserializeAws_json1_1CheckpointConfigurationDescription = (
  output: any,
  context: __SerdeContext
): CheckpointConfigurationDescription => {
  let contents: any = {
    __type: "CheckpointConfigurationDescription",
    CheckpointInterval: undefined,
    CheckpointingEnabled: undefined,
    ConfigurationType: undefined,
    MinPauseBetweenCheckpoints: undefined
  };
  if (
    output.CheckpointInterval !== undefined &&
    output.CheckpointInterval !== null
  ) {
    contents.CheckpointInterval = output.CheckpointInterval;
  }
  if (
    output.CheckpointingEnabled !== undefined &&
    output.CheckpointingEnabled !== null
  ) {
    contents.CheckpointingEnabled = output.CheckpointingEnabled;
  }
  if (
    output.ConfigurationType !== undefined &&
    output.ConfigurationType !== null
  ) {
    contents.ConfigurationType = output.ConfigurationType;
  }
  if (
    output.MinPauseBetweenCheckpoints !== undefined &&
    output.MinPauseBetweenCheckpoints !== null
  ) {
    contents.MinPauseBetweenCheckpoints = output.MinPauseBetweenCheckpoints;
  }
  return contents;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescription = (
  output: any,
  context: __SerdeContext
): CloudWatchLoggingOptionDescription => {
  let contents: any = {
    __type: "CloudWatchLoggingOptionDescription",
    CloudWatchLoggingOptionId: undefined,
    LogStreamARN: undefined,
    RoleARN: undefined
  };
  if (
    output.CloudWatchLoggingOptionId !== undefined &&
    output.CloudWatchLoggingOptionId !== null
  ) {
    contents.CloudWatchLoggingOptionId = output.CloudWatchLoggingOptionId;
  }
  if (output.LogStreamARN !== undefined && output.LogStreamARN !== null) {
    contents.LogStreamARN = output.LogStreamARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1CloudWatchLoggingOptionDescriptions = (
  output: any,
  context: __SerdeContext
): Array<CloudWatchLoggingOptionDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CloudWatchLoggingOptionDescription(entry, context)
  );
};

const deserializeAws_json1_1CodeContentDescription = (
  output: any,
  context: __SerdeContext
): CodeContentDescription => {
  let contents: any = {
    __type: "CodeContentDescription",
    CodeMD5: undefined,
    CodeSize: undefined,
    S3ApplicationCodeLocationDescription: undefined,
    TextContent: undefined
  };
  if (output.CodeMD5 !== undefined && output.CodeMD5 !== null) {
    contents.CodeMD5 = output.CodeMD5;
  }
  if (output.CodeSize !== undefined && output.CodeSize !== null) {
    contents.CodeSize = output.CodeSize;
  }
  if (
    output.S3ApplicationCodeLocationDescription !== undefined &&
    output.S3ApplicationCodeLocationDescription !== null
  ) {
    contents.S3ApplicationCodeLocationDescription = deserializeAws_json1_1S3ApplicationCodeLocationDescription(
      output.S3ApplicationCodeLocationDescription,
      context
    );
  }
  if (output.TextContent !== undefined && output.TextContent !== null) {
    contents.TextContent = output.TextContent;
  }
  return contents;
};

const deserializeAws_json1_1CodeValidationException = (
  output: any,
  context: __SerdeContext
): CodeValidationException => {
  let contents: any = {
    __type: "CodeValidationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateApplicationResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationResponse => {
  let contents: any = {
    __type: "CreateApplicationResponse",
    ApplicationDetail: undefined
  };
  if (
    output.ApplicationDetail !== undefined &&
    output.ApplicationDetail !== null
  ) {
    contents.ApplicationDetail = deserializeAws_json1_1ApplicationDetail(
      output.ApplicationDetail,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): CreateApplicationSnapshotResponse => {
  let contents: any = {
    __type: "CreateApplicationSnapshotResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteApplicationCloudWatchLoggingOptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationCloudWatchLoggingOptionResponse => {
  let contents: any = {
    __type: "DeleteApplicationCloudWatchLoggingOptionResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined,
    CloudWatchLoggingOptionDescriptions: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.CloudWatchLoggingOptionDescriptions !== undefined &&
    output.CloudWatchLoggingOptionDescriptions !== null
  ) {
    contents.CloudWatchLoggingOptionDescriptions = deserializeAws_json1_1CloudWatchLoggingOptionDescriptions(
      output.CloudWatchLoggingOptionDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteApplicationInputProcessingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationInputProcessingConfigurationResponse => {
  let contents: any = {
    __type: "DeleteApplicationInputProcessingConfigurationResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteApplicationOutputResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationOutputResponse => {
  let contents: any = {
    __type: "DeleteApplicationOutputResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteApplicationReferenceDataSourceResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationReferenceDataSourceResponse => {
  let contents: any = {
    __type: "DeleteApplicationReferenceDataSourceResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  return contents;
};

const deserializeAws_json1_1DeleteApplicationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationResponse => {
  let contents: any = {
    __type: "DeleteApplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationSnapshotResponse => {
  let contents: any = {
    __type: "DeleteApplicationSnapshotResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteApplicationVpcConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteApplicationVpcConfigurationResponse => {
  let contents: any = {
    __type: "DeleteApplicationVpcConfigurationResponse",
    ApplicationARN: undefined,
    ApplicationVersionId: undefined
  };
  if (output.ApplicationARN !== undefined && output.ApplicationARN !== null) {
    contents.ApplicationARN = output.ApplicationARN;
  }
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  return contents;
};

const deserializeAws_json1_1DescribeApplicationResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationResponse => {
  let contents: any = {
    __type: "DescribeApplicationResponse",
    ApplicationDetail: undefined
  };
  if (
    output.ApplicationDetail !== undefined &&
    output.ApplicationDetail !== null
  ) {
    contents.ApplicationDetail = deserializeAws_json1_1ApplicationDetail(
      output.ApplicationDetail,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeApplicationSnapshotResponse = (
  output: any,
  context: __SerdeContext
): DescribeApplicationSnapshotResponse => {
  let contents: any = {
    __type: "DescribeApplicationSnapshotResponse",
    SnapshotDetails: undefined
  };
  if (output.SnapshotDetails !== undefined && output.SnapshotDetails !== null) {
    contents.SnapshotDetails = deserializeAws_json1_1SnapshotDetails(
      output.SnapshotDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DestinationSchema = (
  output: any,
  context: __SerdeContext
): DestinationSchema => {
  let contents: any = {
    __type: "DestinationSchema",
    RecordFormatType: undefined
  };
  if (
    output.RecordFormatType !== undefined &&
    output.RecordFormatType !== null
  ) {
    contents.RecordFormatType = output.RecordFormatType;
  }
  return contents;
};

const deserializeAws_json1_1DiscoverInputSchemaResponse = (
  output: any,
  context: __SerdeContext
): DiscoverInputSchemaResponse => {
  let contents: any = {
    __type: "DiscoverInputSchemaResponse",
    InputSchema: undefined,
    ParsedInputRecords: undefined,
    ProcessedInputRecords: undefined,
    RawInputRecords: undefined
  };
  if (output.InputSchema !== undefined && output.InputSchema !== null) {
    contents.InputSchema = deserializeAws_json1_1SourceSchema(
      output.InputSchema,
      context
    );
  }
  if (
    output.ParsedInputRecords !== undefined &&
    output.ParsedInputRecords !== null
  ) {
    contents.ParsedInputRecords = deserializeAws_json1_1ParsedInputRecords(
      output.ParsedInputRecords,
      context
    );
  }
  if (
    output.ProcessedInputRecords !== undefined &&
    output.ProcessedInputRecords !== null
  ) {
    contents.ProcessedInputRecords = deserializeAws_json1_1ProcessedInputRecords(
      output.ProcessedInputRecords,
      context
    );
  }
  if (output.RawInputRecords !== undefined && output.RawInputRecords !== null) {
    contents.RawInputRecords = deserializeAws_json1_1RawInputRecords(
      output.RawInputRecords,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EnvironmentPropertyDescriptions = (
  output: any,
  context: __SerdeContext
): EnvironmentPropertyDescriptions => {
  let contents: any = {
    __type: "EnvironmentPropertyDescriptions",
    PropertyGroupDescriptions: undefined
  };
  if (
    output.PropertyGroupDescriptions !== undefined &&
    output.PropertyGroupDescriptions !== null
  ) {
    contents.PropertyGroupDescriptions = deserializeAws_json1_1PropertyGroups(
      output.PropertyGroupDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FlinkApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): FlinkApplicationConfigurationDescription => {
  let contents: any = {
    __type: "FlinkApplicationConfigurationDescription",
    CheckpointConfigurationDescription: undefined,
    JobPlanDescription: undefined,
    MonitoringConfigurationDescription: undefined,
    ParallelismConfigurationDescription: undefined
  };
  if (
    output.CheckpointConfigurationDescription !== undefined &&
    output.CheckpointConfigurationDescription !== null
  ) {
    contents.CheckpointConfigurationDescription = deserializeAws_json1_1CheckpointConfigurationDescription(
      output.CheckpointConfigurationDescription,
      context
    );
  }
  if (
    output.JobPlanDescription !== undefined &&
    output.JobPlanDescription !== null
  ) {
    contents.JobPlanDescription = output.JobPlanDescription;
  }
  if (
    output.MonitoringConfigurationDescription !== undefined &&
    output.MonitoringConfigurationDescription !== null
  ) {
    contents.MonitoringConfigurationDescription = deserializeAws_json1_1MonitoringConfigurationDescription(
      output.MonitoringConfigurationDescription,
      context
    );
  }
  if (
    output.ParallelismConfigurationDescription !== undefined &&
    output.ParallelismConfigurationDescription !== null
  ) {
    contents.ParallelismConfigurationDescription = deserializeAws_json1_1ParallelismConfigurationDescription(
      output.ParallelismConfigurationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InAppStreamNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InputDescription = (
  output: any,
  context: __SerdeContext
): InputDescription => {
  let contents: any = {
    __type: "InputDescription",
    InAppStreamNames: undefined,
    InputId: undefined,
    InputParallelism: undefined,
    InputProcessingConfigurationDescription: undefined,
    InputSchema: undefined,
    InputStartingPositionConfiguration: undefined,
    KinesisFirehoseInputDescription: undefined,
    KinesisStreamsInputDescription: undefined,
    NamePrefix: undefined
  };
  if (
    output.InAppStreamNames !== undefined &&
    output.InAppStreamNames !== null
  ) {
    contents.InAppStreamNames = deserializeAws_json1_1InAppStreamNames(
      output.InAppStreamNames,
      context
    );
  }
  if (output.InputId !== undefined && output.InputId !== null) {
    contents.InputId = output.InputId;
  }
  if (
    output.InputParallelism !== undefined &&
    output.InputParallelism !== null
  ) {
    contents.InputParallelism = deserializeAws_json1_1InputParallelism(
      output.InputParallelism,
      context
    );
  }
  if (
    output.InputProcessingConfigurationDescription !== undefined &&
    output.InputProcessingConfigurationDescription !== null
  ) {
    contents.InputProcessingConfigurationDescription = deserializeAws_json1_1InputProcessingConfigurationDescription(
      output.InputProcessingConfigurationDescription,
      context
    );
  }
  if (output.InputSchema !== undefined && output.InputSchema !== null) {
    contents.InputSchema = deserializeAws_json1_1SourceSchema(
      output.InputSchema,
      context
    );
  }
  if (
    output.InputStartingPositionConfiguration !== undefined &&
    output.InputStartingPositionConfiguration !== null
  ) {
    contents.InputStartingPositionConfiguration = deserializeAws_json1_1InputStartingPositionConfiguration(
      output.InputStartingPositionConfiguration,
      context
    );
  }
  if (
    output.KinesisFirehoseInputDescription !== undefined &&
    output.KinesisFirehoseInputDescription !== null
  ) {
    contents.KinesisFirehoseInputDescription = deserializeAws_json1_1KinesisFirehoseInputDescription(
      output.KinesisFirehoseInputDescription,
      context
    );
  }
  if (
    output.KinesisStreamsInputDescription !== undefined &&
    output.KinesisStreamsInputDescription !== null
  ) {
    contents.KinesisStreamsInputDescription = deserializeAws_json1_1KinesisStreamsInputDescription(
      output.KinesisStreamsInputDescription,
      context
    );
  }
  if (output.NamePrefix !== undefined && output.NamePrefix !== null) {
    contents.NamePrefix = output.NamePrefix;
  }
  return contents;
};

const deserializeAws_json1_1InputDescriptions = (
  output: any,
  context: __SerdeContext
): Array<InputDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InputDescription(entry, context)
  );
};

const deserializeAws_json1_1InputLambdaProcessorDescription = (
  output: any,
  context: __SerdeContext
): InputLambdaProcessorDescription => {
  let contents: any = {
    __type: "InputLambdaProcessorDescription",
    ResourceARN: undefined,
    RoleARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1InputParallelism = (
  output: any,
  context: __SerdeContext
): InputParallelism => {
  let contents: any = {
    __type: "InputParallelism",
    Count: undefined
  };
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  return contents;
};

const deserializeAws_json1_1InputProcessingConfigurationDescription = (
  output: any,
  context: __SerdeContext
): InputProcessingConfigurationDescription => {
  let contents: any = {
    __type: "InputProcessingConfigurationDescription",
    InputLambdaProcessorDescription: undefined
  };
  if (
    output.InputLambdaProcessorDescription !== undefined &&
    output.InputLambdaProcessorDescription !== null
  ) {
    contents.InputLambdaProcessorDescription = deserializeAws_json1_1InputLambdaProcessorDescription(
      output.InputLambdaProcessorDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InputStartingPositionConfiguration = (
  output: any,
  context: __SerdeContext
): InputStartingPositionConfiguration => {
  let contents: any = {
    __type: "InputStartingPositionConfiguration",
    InputStartingPosition: undefined
  };
  if (
    output.InputStartingPosition !== undefined &&
    output.InputStartingPosition !== null
  ) {
    contents.InputStartingPosition = output.InputStartingPosition;
  }
  return contents;
};

const deserializeAws_json1_1InvalidApplicationConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidApplicationConfigurationException => {
  let contents: any = {
    __type: "InvalidApplicationConfigurationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgumentException = (
  output: any,
  context: __SerdeContext
): InvalidArgumentException => {
  let contents: any = {
    __type: "InvalidArgumentException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1JSONMappingParameters = (
  output: any,
  context: __SerdeContext
): JSONMappingParameters => {
  let contents: any = {
    __type: "JSONMappingParameters",
    RecordRowPath: undefined
  };
  if (output.RecordRowPath !== undefined && output.RecordRowPath !== null) {
    contents.RecordRowPath = output.RecordRowPath;
  }
  return contents;
};

const deserializeAws_json1_1KinesisFirehoseInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseInputDescription => {
  let contents: any = {
    __type: "KinesisFirehoseInputDescription",
    ResourceARN: undefined,
    RoleARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1KinesisFirehoseOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseOutputDescription => {
  let contents: any = {
    __type: "KinesisFirehoseOutputDescription",
    ResourceARN: undefined,
    RoleARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1KinesisStreamsInputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsInputDescription => {
  let contents: any = {
    __type: "KinesisStreamsInputDescription",
    ResourceARN: undefined,
    RoleARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1KinesisStreamsOutputDescription = (
  output: any,
  context: __SerdeContext
): KinesisStreamsOutputDescription => {
  let contents: any = {
    __type: "KinesisStreamsOutputDescription",
    ResourceARN: undefined,
    RoleARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1LambdaOutputDescription = (
  output: any,
  context: __SerdeContext
): LambdaOutputDescription => {
  let contents: any = {
    __type: "LambdaOutputDescription",
    ResourceARN: undefined,
    RoleARN: undefined
  };
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RoleARN !== undefined && output.RoleARN !== null) {
    contents.RoleARN = output.RoleARN;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListApplicationSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationSnapshotsResponse => {
  let contents: any = {
    __type: "ListApplicationSnapshotsResponse",
    NextToken: undefined,
    SnapshotSummaries: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.SnapshotSummaries !== undefined &&
    output.SnapshotSummaries !== null
  ) {
    contents.SnapshotSummaries = deserializeAws_json1_1SnapshotSummaries(
      output.SnapshotSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListApplicationsResponse = (
  output: any,
  context: __SerdeContext
): ListApplicationsResponse => {
  let contents: any = {
    __type: "ListApplicationsResponse",
    ApplicationSummaries: undefined,
    NextToken: undefined
  };
  if (
    output.ApplicationSummaries !== undefined &&
    output.ApplicationSummaries !== null
  ) {
    contents.ApplicationSummaries = deserializeAws_json1_1ApplicationSummaries(
      output.ApplicationSummaries,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1MappingParameters = (
  output: any,
  context: __SerdeContext
): MappingParameters => {
  let contents: any = {
    __type: "MappingParameters",
    CSVMappingParameters: undefined,
    JSONMappingParameters: undefined
  };
  if (
    output.CSVMappingParameters !== undefined &&
    output.CSVMappingParameters !== null
  ) {
    contents.CSVMappingParameters = deserializeAws_json1_1CSVMappingParameters(
      output.CSVMappingParameters,
      context
    );
  }
  if (
    output.JSONMappingParameters !== undefined &&
    output.JSONMappingParameters !== null
  ) {
    contents.JSONMappingParameters = deserializeAws_json1_1JSONMappingParameters(
      output.JSONMappingParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MonitoringConfigurationDescription = (
  output: any,
  context: __SerdeContext
): MonitoringConfigurationDescription => {
  let contents: any = {
    __type: "MonitoringConfigurationDescription",
    ConfigurationType: undefined,
    LogLevel: undefined,
    MetricsLevel: undefined
  };
  if (
    output.ConfigurationType !== undefined &&
    output.ConfigurationType !== null
  ) {
    contents.ConfigurationType = output.ConfigurationType;
  }
  if (output.LogLevel !== undefined && output.LogLevel !== null) {
    contents.LogLevel = output.LogLevel;
  }
  if (output.MetricsLevel !== undefined && output.MetricsLevel !== null) {
    contents.MetricsLevel = output.MetricsLevel;
  }
  return contents;
};

const deserializeAws_json1_1OutputDescription = (
  output: any,
  context: __SerdeContext
): OutputDescription => {
  let contents: any = {
    __type: "OutputDescription",
    DestinationSchema: undefined,
    KinesisFirehoseOutputDescription: undefined,
    KinesisStreamsOutputDescription: undefined,
    LambdaOutputDescription: undefined,
    Name: undefined,
    OutputId: undefined
  };
  if (
    output.DestinationSchema !== undefined &&
    output.DestinationSchema !== null
  ) {
    contents.DestinationSchema = deserializeAws_json1_1DestinationSchema(
      output.DestinationSchema,
      context
    );
  }
  if (
    output.KinesisFirehoseOutputDescription !== undefined &&
    output.KinesisFirehoseOutputDescription !== null
  ) {
    contents.KinesisFirehoseOutputDescription = deserializeAws_json1_1KinesisFirehoseOutputDescription(
      output.KinesisFirehoseOutputDescription,
      context
    );
  }
  if (
    output.KinesisStreamsOutputDescription !== undefined &&
    output.KinesisStreamsOutputDescription !== null
  ) {
    contents.KinesisStreamsOutputDescription = deserializeAws_json1_1KinesisStreamsOutputDescription(
      output.KinesisStreamsOutputDescription,
      context
    );
  }
  if (
    output.LambdaOutputDescription !== undefined &&
    output.LambdaOutputDescription !== null
  ) {
    contents.LambdaOutputDescription = deserializeAws_json1_1LambdaOutputDescription(
      output.LambdaOutputDescription,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OutputId !== undefined && output.OutputId !== null) {
    contents.OutputId = output.OutputId;
  }
  return contents;
};

const deserializeAws_json1_1OutputDescriptions = (
  output: any,
  context: __SerdeContext
): Array<OutputDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OutputDescription(entry, context)
  );
};

const deserializeAws_json1_1ParallelismConfigurationDescription = (
  output: any,
  context: __SerdeContext
): ParallelismConfigurationDescription => {
  let contents: any = {
    __type: "ParallelismConfigurationDescription",
    AutoScalingEnabled: undefined,
    ConfigurationType: undefined,
    CurrentParallelism: undefined,
    Parallelism: undefined,
    ParallelismPerKPU: undefined
  };
  if (
    output.AutoScalingEnabled !== undefined &&
    output.AutoScalingEnabled !== null
  ) {
    contents.AutoScalingEnabled = output.AutoScalingEnabled;
  }
  if (
    output.ConfigurationType !== undefined &&
    output.ConfigurationType !== null
  ) {
    contents.ConfigurationType = output.ConfigurationType;
  }
  if (
    output.CurrentParallelism !== undefined &&
    output.CurrentParallelism !== null
  ) {
    contents.CurrentParallelism = output.CurrentParallelism;
  }
  if (output.Parallelism !== undefined && output.Parallelism !== null) {
    contents.Parallelism = output.Parallelism;
  }
  if (
    output.ParallelismPerKPU !== undefined &&
    output.ParallelismPerKPU !== null
  ) {
    contents.ParallelismPerKPU = output.ParallelismPerKPU;
  }
  return contents;
};

const deserializeAws_json1_1ParsedInputRecord = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ParsedInputRecords = (
  output: any,
  context: __SerdeContext
): Array<Array<string>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParsedInputRecord(entry, context)
  );
};

const deserializeAws_json1_1ProcessedInputRecords = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PropertyGroup = (
  output: any,
  context: __SerdeContext
): PropertyGroup => {
  let contents: any = {
    __type: "PropertyGroup",
    PropertyGroupId: undefined,
    PropertyMap: undefined
  };
  if (output.PropertyGroupId !== undefined && output.PropertyGroupId !== null) {
    contents.PropertyGroupId = output.PropertyGroupId;
  }
  if (output.PropertyMap !== undefined && output.PropertyMap !== null) {
    contents.PropertyMap = deserializeAws_json1_1PropertyMap(
      output.PropertyMap,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PropertyGroups = (
  output: any,
  context: __SerdeContext
): Array<PropertyGroup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PropertyGroup(entry, context)
  );
};

const deserializeAws_json1_1PropertyMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1RawInputRecords = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RecordColumn = (
  output: any,
  context: __SerdeContext
): RecordColumn => {
  let contents: any = {
    __type: "RecordColumn",
    Mapping: undefined,
    Name: undefined,
    SqlType: undefined
  };
  if (output.Mapping !== undefined && output.Mapping !== null) {
    contents.Mapping = output.Mapping;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.SqlType !== undefined && output.SqlType !== null) {
    contents.SqlType = output.SqlType;
  }
  return contents;
};

const deserializeAws_json1_1RecordColumns = (
  output: any,
  context: __SerdeContext
): Array<RecordColumn> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RecordColumn(entry, context)
  );
};

const deserializeAws_json1_1RecordFormat = (
  output: any,
  context: __SerdeContext
): RecordFormat => {
  let contents: any = {
    __type: "RecordFormat",
    MappingParameters: undefined,
    RecordFormatType: undefined
  };
  if (
    output.MappingParameters !== undefined &&
    output.MappingParameters !== null
  ) {
    contents.MappingParameters = deserializeAws_json1_1MappingParameters(
      output.MappingParameters,
      context
    );
  }
  if (
    output.RecordFormatType !== undefined &&
    output.RecordFormatType !== null
  ) {
    contents.RecordFormatType = output.RecordFormatType;
  }
  return contents;
};

const deserializeAws_json1_1ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): ReferenceDataSourceDescription => {
  let contents: any = {
    __type: "ReferenceDataSourceDescription",
    ReferenceId: undefined,
    ReferenceSchema: undefined,
    S3ReferenceDataSourceDescription: undefined,
    TableName: undefined
  };
  if (output.ReferenceId !== undefined && output.ReferenceId !== null) {
    contents.ReferenceId = output.ReferenceId;
  }
  if (output.ReferenceSchema !== undefined && output.ReferenceSchema !== null) {
    contents.ReferenceSchema = deserializeAws_json1_1SourceSchema(
      output.ReferenceSchema,
      context
    );
  }
  if (
    output.S3ReferenceDataSourceDescription !== undefined &&
    output.S3ReferenceDataSourceDescription !== null
  ) {
    contents.S3ReferenceDataSourceDescription = deserializeAws_json1_1S3ReferenceDataSourceDescription(
      output.S3ReferenceDataSourceDescription,
      context
    );
  }
  if (output.TableName !== undefined && output.TableName !== null) {
    contents.TableName = output.TableName;
  }
  return contents;
};

const deserializeAws_json1_1ReferenceDataSourceDescriptions = (
  output: any,
  context: __SerdeContext
): Array<ReferenceDataSourceDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReferenceDataSourceDescription(entry, context)
  );
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceProvisionedThroughputExceededException = (
  output: any,
  context: __SerdeContext
): ResourceProvisionedThroughputExceededException => {
  let contents: any = {
    __type: "ResourceProvisionedThroughputExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1RunConfigurationDescription = (
  output: any,
  context: __SerdeContext
): RunConfigurationDescription => {
  let contents: any = {
    __type: "RunConfigurationDescription",
    ApplicationRestoreConfigurationDescription: undefined
  };
  if (
    output.ApplicationRestoreConfigurationDescription !== undefined &&
    output.ApplicationRestoreConfigurationDescription !== null
  ) {
    contents.ApplicationRestoreConfigurationDescription = deserializeAws_json1_1ApplicationRestoreConfiguration(
      output.ApplicationRestoreConfigurationDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1S3ApplicationCodeLocationDescription = (
  output: any,
  context: __SerdeContext
): S3ApplicationCodeLocationDescription => {
  let contents: any = {
    __type: "S3ApplicationCodeLocationDescription",
    BucketARN: undefined,
    FileKey: undefined,
    ObjectVersion: undefined
  };
  if (output.BucketARN !== undefined && output.BucketARN !== null) {
    contents.BucketARN = output.BucketARN;
  }
  if (output.FileKey !== undefined && output.FileKey !== null) {
    contents.FileKey = output.FileKey;
  }
  if (output.ObjectVersion !== undefined && output.ObjectVersion !== null) {
    contents.ObjectVersion = output.ObjectVersion;
  }
  return contents;
};

const deserializeAws_json1_1S3ReferenceDataSourceDescription = (
  output: any,
  context: __SerdeContext
): S3ReferenceDataSourceDescription => {
  let contents: any = {
    __type: "S3ReferenceDataSourceDescription",
    BucketARN: undefined,
    FileKey: undefined,
    ReferenceRoleARN: undefined
  };
  if (output.BucketARN !== undefined && output.BucketARN !== null) {
    contents.BucketARN = output.BucketARN;
  }
  if (output.FileKey !== undefined && output.FileKey !== null) {
    contents.FileKey = output.FileKey;
  }
  if (
    output.ReferenceRoleARN !== undefined &&
    output.ReferenceRoleARN !== null
  ) {
    contents.ReferenceRoleARN = output.ReferenceRoleARN;
  }
  return contents;
};

const deserializeAws_json1_1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SnapshotDetails = (
  output: any,
  context: __SerdeContext
): SnapshotDetails => {
  let contents: any = {
    __type: "SnapshotDetails",
    ApplicationVersionId: undefined,
    SnapshotCreationTimestamp: undefined,
    SnapshotName: undefined,
    SnapshotStatus: undefined
  };
  if (
    output.ApplicationVersionId !== undefined &&
    output.ApplicationVersionId !== null
  ) {
    contents.ApplicationVersionId = output.ApplicationVersionId;
  }
  if (
    output.SnapshotCreationTimestamp !== undefined &&
    output.SnapshotCreationTimestamp !== null
  ) {
    contents.SnapshotCreationTimestamp = new Date(
      Math.round(output.SnapshotCreationTimestamp * 1000)
    );
  }
  if (output.SnapshotName !== undefined && output.SnapshotName !== null) {
    contents.SnapshotName = output.SnapshotName;
  }
  if (output.SnapshotStatus !== undefined && output.SnapshotStatus !== null) {
    contents.SnapshotStatus = output.SnapshotStatus;
  }
  return contents;
};

const deserializeAws_json1_1SnapshotSummaries = (
  output: any,
  context: __SerdeContext
): Array<SnapshotDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SnapshotDetails(entry, context)
  );
};

const deserializeAws_json1_1SourceSchema = (
  output: any,
  context: __SerdeContext
): SourceSchema => {
  let contents: any = {
    __type: "SourceSchema",
    RecordColumns: undefined,
    RecordEncoding: undefined,
    RecordFormat: undefined
  };
  if (output.RecordColumns !== undefined && output.RecordColumns !== null) {
    contents.RecordColumns = deserializeAws_json1_1RecordColumns(
      output.RecordColumns,
      context
    );
  }
  if (output.RecordEncoding !== undefined && output.RecordEncoding !== null) {
    contents.RecordEncoding = output.RecordEncoding;
  }
  if (output.RecordFormat !== undefined && output.RecordFormat !== null) {
    contents.RecordFormat = deserializeAws_json1_1RecordFormat(
      output.RecordFormat,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SqlApplicationConfigurationDescription = (
  output: any,
  context: __SerdeContext
): SqlApplicationConfigurationDescription => {
  let contents: any = {
    __type: "SqlApplicationConfigurationDescription",
    InputDescriptions: undefined,
    OutputDescriptions: undefined,
    ReferenceDataSourceDescriptions: undefined
  };
  if (
    output.InputDescriptions !== undefined &&
    output.InputDescriptions !== null
  ) {
    contents.InputDescriptions = deserializeAws_json1_1InputDescriptions(
      output.InputDescriptions,
      context
    );
  }
  if (
    output.OutputDescriptions !== undefined &&
    output.OutputDescriptions !== null
  ) {
    contents.OutputDescriptions = deserializeAws_json1_1OutputDescriptions(
      output.OutputDescriptions,
      context
    );
  }
  if (
    output.ReferenceDataSourceDescriptions !== undefined &&
    output.ReferenceDataSourceDescriptions !== null
  ) {
    contents.ReferenceDataSourceDescriptions = deserializeAws_json1_1ReferenceDataSourceDescriptions(
      output.ReferenceDataSourceDescriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StartApplicationResponse = (
  output: any,
  context: __SerdeContext
): StartApplicationResponse => {
  let contents: any = {
    __type: "StartApplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1StopApplicationResponse = (
  output: any,
  context: __SerdeContext
): StopApplicationResponse => {
  let contents: any = {
    __type: "StopApplicationResponse"
  };
  return contents;
};

const deserializeAws_json1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UnableToDetectSchemaException = (
  output: any,
  context: __SerdeContext
): UnableToDetectSchemaException => {
  let contents: any = {
    __type: "UnableToDetectSchemaException",
    Message: undefined,
    ProcessedInputRecords: undefined,
    RawInputRecords: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (
    output.ProcessedInputRecords !== undefined &&
    output.ProcessedInputRecords !== null
  ) {
    contents.ProcessedInputRecords = deserializeAws_json1_1ProcessedInputRecords(
      output.ProcessedInputRecords,
      context
    );
  }
  if (output.RawInputRecords !== undefined && output.RawInputRecords !== null) {
    contents.RawInputRecords = deserializeAws_json1_1RawInputRecords(
      output.RawInputRecords,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  let contents: any = {
    __type: "UnsupportedOperationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateApplicationResponse = (
  output: any,
  context: __SerdeContext
): UpdateApplicationResponse => {
  let contents: any = {
    __type: "UpdateApplicationResponse",
    ApplicationDetail: undefined
  };
  if (
    output.ApplicationDetail !== undefined &&
    output.ApplicationDetail !== null
  ) {
    contents.ApplicationDetail = deserializeAws_json1_1ApplicationDetail(
      output.ApplicationDetail,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1VpcConfigurationDescription = (
  output: any,
  context: __SerdeContext
): VpcConfigurationDescription => {
  let contents: any = {
    __type: "VpcConfigurationDescription",
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    VpcConfigurationId: undefined,
    VpcId: undefined
  };
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_json1_1SecurityGroupIds(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIds(
      output.SubnetIds,
      context
    );
  }
  if (
    output.VpcConfigurationId !== undefined &&
    output.VpcConfigurationId !== null
  ) {
    contents.VpcConfigurationId = output.VpcConfigurationId;
  }
  if (output.VpcId !== undefined && output.VpcId !== null) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_json1_1VpcConfigurationDescriptions = (
  output: any,
  context: __SerdeContext
): Array<VpcConfigurationDescription> => {
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
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
