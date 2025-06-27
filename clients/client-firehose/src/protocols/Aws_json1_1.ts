// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
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
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
} from "../commands/CreateDeliveryStreamCommand";
import {
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
} from "../commands/DeleteDeliveryStreamCommand";
import {
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput,
} from "../commands/DescribeDeliveryStreamCommand";
import {
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
} from "../commands/ListDeliveryStreamsCommand";
import {
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
} from "../commands/ListTagsForDeliveryStreamCommand";
import { PutRecordBatchCommandInput, PutRecordBatchCommandOutput } from "../commands/PutRecordBatchCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "../commands/PutRecordCommand";
import {
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput,
} from "../commands/StartDeliveryStreamEncryptionCommand";
import {
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput,
} from "../commands/StopDeliveryStreamEncryptionCommand";
import { TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput } from "../commands/TagDeliveryStreamCommand";
import {
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput,
} from "../commands/UntagDeliveryStreamCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "../commands/UpdateDestinationCommand";
import { FirehoseServiceException as __BaseException } from "../models/FirehoseServiceException";
import {
  _Record,
  AmazonOpenSearchServerlessBufferingHints,
  AmazonOpenSearchServerlessDestinationConfiguration,
  AmazonOpenSearchServerlessDestinationUpdate,
  AmazonOpenSearchServerlessRetryOptions,
  AmazonopensearchserviceBufferingHints,
  AmazonopensearchserviceDestinationConfiguration,
  AmazonopensearchserviceDestinationUpdate,
  AmazonopensearchserviceRetryOptions,
  AuthenticationConfiguration,
  BufferingHints,
  CatalogConfiguration,
  CloudWatchLoggingOptions,
  ConcurrentModificationException,
  CopyCommand,
  CreateDeliveryStreamInput,
  DatabaseColumnList,
  DatabaseList,
  DatabaseSnapshotInfo,
  DatabaseSourceAuthenticationConfiguration,
  DatabaseSourceConfiguration,
  DatabaseSourceDescription,
  DatabaseSourceVPCConfiguration,
  DatabaseTableList,
  DataFormatConversionConfiguration,
  DeleteDeliveryStreamInput,
  DeliveryStreamDescription,
  DeliveryStreamEncryptionConfigurationInput,
  DescribeDeliveryStreamInput,
  DescribeDeliveryStreamOutput,
  Deserializer,
  DestinationDescription,
  DestinationTableConfiguration,
  DirectPutSourceConfiguration,
  DocumentIdOptions,
  DynamicPartitioningConfiguration,
  ElasticsearchBufferingHints,
  ElasticsearchDestinationConfiguration,
  ElasticsearchDestinationUpdate,
  ElasticsearchRetryOptions,
  EncryptionConfiguration,
  ExtendedS3DestinationConfiguration,
  ExtendedS3DestinationDescription,
  ExtendedS3DestinationUpdate,
  HiveJsonSerDe,
  HttpEndpointBufferingHints,
  HttpEndpointCommonAttribute,
  HttpEndpointConfiguration,
  HttpEndpointDestinationConfiguration,
  HttpEndpointDestinationUpdate,
  HttpEndpointRequestConfiguration,
  HttpEndpointRetryOptions,
  IcebergDestinationConfiguration,
  IcebergDestinationUpdate,
  InputFormatConfiguration,
  InvalidArgumentException,
  InvalidKMSResourceException,
  InvalidSourceException,
  KinesisStreamSourceConfiguration,
  KinesisStreamSourceDescription,
  KMSEncryptionConfig,
  LimitExceededException,
  ListDeliveryStreamsInput,
  ListTagsForDeliveryStreamInput,
  MSKSourceConfiguration,
  MSKSourceDescription,
  OpenXJsonSerDe,
  OrcSerDe,
  OutputFormatConfiguration,
  ParquetSerDe,
  PartitionField,
  PartitionSpec,
  ProcessingConfiguration,
  Processor,
  ProcessorParameter,
  PutRecordBatchInput,
  PutRecordInput,
  RedshiftDestinationConfiguration,
  RedshiftDestinationUpdate,
  RedshiftRetryOptions,
  ResourceInUseException,
  ResourceNotFoundException,
  RetryOptions,
  S3DestinationConfiguration,
  S3DestinationUpdate,
  SchemaConfiguration,
  SchemaEvolutionConfiguration,
  SecretsManagerConfiguration,
  Serializer,
  ServiceUnavailableException,
  SnowflakeBufferingHints,
  SnowflakeDestinationConfiguration,
  SnowflakeDestinationUpdate,
  SnowflakeRetryOptions,
  SnowflakeRoleConfiguration,
  SnowflakeVpcConfiguration,
  SourceDescription,
  SplunkBufferingHints,
  SplunkDestinationConfiguration,
  SplunkDestinationUpdate,
  SplunkRetryOptions,
  StartDeliveryStreamEncryptionInput,
  StopDeliveryStreamEncryptionInput,
  TableCreationConfiguration,
  Tag,
  TagDeliveryStreamInput,
  UntagDeliveryStreamInput,
  UpdateDestinationInput,
  VpcConfiguration,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateDeliveryStreamCommand
 */
export const se_CreateDeliveryStreamCommand = async (
  input: CreateDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeliveryStream");
  let body: any;
  body = JSON.stringify(se_CreateDeliveryStreamInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeliveryStreamCommand
 */
export const se_DeleteDeliveryStreamCommand = async (
  input: DeleteDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeliveryStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeliveryStreamCommand
 */
export const se_DescribeDeliveryStreamCommand = async (
  input: DescribeDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeliveryStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeliveryStreamsCommand
 */
export const se_ListDeliveryStreamsCommand = async (
  input: ListDeliveryStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeliveryStreams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForDeliveryStreamCommand
 */
export const se_ListTagsForDeliveryStreamCommand = async (
  input: ListTagsForDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForDeliveryStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRecordCommand
 */
export const se_PutRecordCommand = async (
  input: PutRecordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRecord");
  let body: any;
  body = JSON.stringify(se_PutRecordInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutRecordBatchCommand
 */
export const se_PutRecordBatchCommand = async (
  input: PutRecordBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutRecordBatch");
  let body: any;
  body = JSON.stringify(se_PutRecordBatchInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartDeliveryStreamEncryptionCommand
 */
export const se_StartDeliveryStreamEncryptionCommand = async (
  input: StartDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDeliveryStreamEncryption");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopDeliveryStreamEncryptionCommand
 */
export const se_StopDeliveryStreamEncryptionCommand = async (
  input: StopDeliveryStreamEncryptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopDeliveryStreamEncryption");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagDeliveryStreamCommand
 */
export const se_TagDeliveryStreamCommand = async (
  input: TagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagDeliveryStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagDeliveryStreamCommand
 */
export const se_UntagDeliveryStreamCommand = async (
  input: UntagDeliveryStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagDeliveryStream");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDestinationCommand
 */
export const se_UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDestination");
  let body: any;
  body = JSON.stringify(se_UpdateDestinationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateDeliveryStreamCommand
 */
export const de_CreateDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeliveryStreamCommand
 */
export const de_DeleteDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeliveryStreamCommand
 */
export const de_DescribeDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeliveryStreamOutput(data, context);
  const response: DescribeDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDeliveryStreamsCommand
 */
export const de_ListDeliveryStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeliveryStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDeliveryStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForDeliveryStreamCommand
 */
export const de_ListTagsForDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutRecordCommand
 */
export const de_PutRecordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutRecordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutRecordBatchCommand
 */
export const de_PutRecordBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRecordBatchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutRecordBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartDeliveryStreamEncryptionCommand
 */
export const de_StartDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopDeliveryStreamEncryptionCommand
 */
export const de_StopDeliveryStreamEncryptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDeliveryStreamEncryptionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopDeliveryStreamEncryptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagDeliveryStreamCommand
 */
export const de_TagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagDeliveryStreamCommand
 */
export const de_UntagDeliveryStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagDeliveryStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagDeliveryStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDestinationCommand
 */
export const de_UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidArgumentException":
    case "com.amazonaws.firehose#InvalidArgumentException":
      throw await de_InvalidArgumentExceptionRes(parsedOutput, context);
    case "InvalidKMSResourceException":
    case "com.amazonaws.firehose#InvalidKMSResourceException":
      throw await de_InvalidKMSResourceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.firehose#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.firehose#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.firehose#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "InvalidSourceException":
    case "com.amazonaws.firehose#InvalidSourceException":
      throw await de_InvalidSourceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.firehose#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.firehose#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
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
 * deserializeAws_json1_1InvalidKMSResourceExceptionRes
 */
const de_InvalidKMSResourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKMSResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidKMSResourceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSourceExceptionRes
 */
const de_InvalidSourceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSourceException({
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

// se_AmazonOpenSearchServerlessBufferingHints omitted.

// se_AmazonOpenSearchServerlessDestinationConfiguration omitted.

// se_AmazonOpenSearchServerlessDestinationUpdate omitted.

// se_AmazonOpenSearchServerlessRetryOptions omitted.

// se_AmazonopensearchserviceBufferingHints omitted.

// se_AmazonopensearchserviceDestinationConfiguration omitted.

// se_AmazonopensearchserviceDestinationUpdate omitted.

// se_AmazonopensearchserviceRetryOptions omitted.

// se_AuthenticationConfiguration omitted.

// se_BufferingHints omitted.

// se_CatalogConfiguration omitted.

// se_CloudWatchLoggingOptions omitted.

// se_ColumnToJsonKeyMappings omitted.

// se_CopyCommand omitted.

/**
 * serializeAws_json1_1CreateDeliveryStreamInput
 */
const se_CreateDeliveryStreamInput = (input: CreateDeliveryStreamInput, context: __SerdeContext): any => {
  return take(input, {
    AmazonOpenSearchServerlessDestinationConfiguration: _json,
    AmazonopensearchserviceDestinationConfiguration: _json,
    DatabaseSourceConfiguration: _json,
    DeliveryStreamEncryptionConfigurationInput: _json,
    DeliveryStreamName: [],
    DeliveryStreamType: [],
    DirectPutSourceConfiguration: _json,
    ElasticsearchDestinationConfiguration: _json,
    ExtendedS3DestinationConfiguration: (_) => se_ExtendedS3DestinationConfiguration(_, context),
    HttpEndpointDestinationConfiguration: _json,
    IcebergDestinationConfiguration: _json,
    KinesisStreamSourceConfiguration: _json,
    MSKSourceConfiguration: (_) => se_MSKSourceConfiguration(_, context),
    RedshiftDestinationConfiguration: _json,
    S3DestinationConfiguration: _json,
    SnowflakeDestinationConfiguration: _json,
    SplunkDestinationConfiguration: _json,
    Tags: _json,
  });
};

// se_DatabaseColumnIncludeOrExcludeList omitted.

// se_DatabaseColumnList omitted.

// se_DatabaseIncludeOrExcludeList omitted.

// se_DatabaseList omitted.

// se_DatabaseSourceAuthenticationConfiguration omitted.

// se_DatabaseSourceConfiguration omitted.

// se_DatabaseSourceVPCConfiguration omitted.

// se_DatabaseSurrogateKeyList omitted.

// se_DatabaseTableIncludeOrExcludeList omitted.

// se_DatabaseTableList omitted.

/**
 * serializeAws_json1_1DataFormatConversionConfiguration
 */
const se_DataFormatConversionConfiguration = (
  input: DataFormatConversionConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    Enabled: [],
    InputFormatConfiguration: _json,
    OutputFormatConfiguration: (_) => se_OutputFormatConfiguration(_, context),
    SchemaConfiguration: _json,
  });
};

// se_DeleteDeliveryStreamInput omitted.

// se_DeliveryStreamEncryptionConfigurationInput omitted.

// se_DescribeDeliveryStreamInput omitted.

// se_Deserializer omitted.

// se_DestinationTableConfiguration omitted.

// se_DestinationTableConfigurationList omitted.

// se_DirectPutSourceConfiguration omitted.

// se_DocumentIdOptions omitted.

// se_DynamicPartitioningConfiguration omitted.

// se_ElasticsearchBufferingHints omitted.

// se_ElasticsearchDestinationConfiguration omitted.

// se_ElasticsearchDestinationUpdate omitted.

// se_ElasticsearchRetryOptions omitted.

// se_EncryptionConfiguration omitted.

/**
 * serializeAws_json1_1ExtendedS3DestinationConfiguration
 */
const se_ExtendedS3DestinationConfiguration = (
  input: ExtendedS3DestinationConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    BucketARN: [],
    BufferingHints: _json,
    CloudWatchLoggingOptions: _json,
    CompressionFormat: [],
    CustomTimeZone: [],
    DataFormatConversionConfiguration: (_) => se_DataFormatConversionConfiguration(_, context),
    DynamicPartitioningConfiguration: _json,
    EncryptionConfiguration: _json,
    ErrorOutputPrefix: [],
    FileExtension: [],
    Prefix: [],
    ProcessingConfiguration: _json,
    RoleARN: [],
    S3BackupConfiguration: _json,
    S3BackupMode: [],
  });
};

/**
 * serializeAws_json1_1ExtendedS3DestinationUpdate
 */
const se_ExtendedS3DestinationUpdate = (input: ExtendedS3DestinationUpdate, context: __SerdeContext): any => {
  return take(input, {
    BucketARN: [],
    BufferingHints: _json,
    CloudWatchLoggingOptions: _json,
    CompressionFormat: [],
    CustomTimeZone: [],
    DataFormatConversionConfiguration: (_) => se_DataFormatConversionConfiguration(_, context),
    DynamicPartitioningConfiguration: _json,
    EncryptionConfiguration: _json,
    ErrorOutputPrefix: [],
    FileExtension: [],
    Prefix: [],
    ProcessingConfiguration: _json,
    RoleARN: [],
    S3BackupMode: [],
    S3BackupUpdate: _json,
  });
};

// se_HiveJsonSerDe omitted.

// se_HttpEndpointBufferingHints omitted.

// se_HttpEndpointCommonAttribute omitted.

// se_HttpEndpointCommonAttributesList omitted.

// se_HttpEndpointConfiguration omitted.

// se_HttpEndpointDestinationConfiguration omitted.

// se_HttpEndpointDestinationUpdate omitted.

// se_HttpEndpointRequestConfiguration omitted.

// se_HttpEndpointRetryOptions omitted.

// se_IcebergDestinationConfiguration omitted.

// se_IcebergDestinationUpdate omitted.

// se_InputFormatConfiguration omitted.

// se_KinesisStreamSourceConfiguration omitted.

// se_KMSEncryptionConfig omitted.

// se_ListDeliveryStreamsInput omitted.

// se_ListOfNonEmptyStrings omitted.

// se_ListOfNonEmptyStringsWithoutWhitespace omitted.

// se_ListTagsForDeliveryStreamInput omitted.

/**
 * serializeAws_json1_1MSKSourceConfiguration
 */
const se_MSKSourceConfiguration = (input: MSKSourceConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AuthenticationConfiguration: _json,
    MSKClusterARN: [],
    ReadFromTimestamp: (_) => _.getTime() / 1_000,
    TopicName: [],
  });
};

// se_OpenXJsonSerDe omitted.

/**
 * serializeAws_json1_1OrcSerDe
 */
const se_OrcSerDe = (input: OrcSerDe, context: __SerdeContext): any => {
  return take(input, {
    BlockSizeBytes: [],
    BloomFilterColumns: _json,
    BloomFilterFalsePositiveProbability: __serializeFloat,
    Compression: [],
    DictionaryKeyThreshold: __serializeFloat,
    EnablePadding: [],
    FormatVersion: [],
    PaddingTolerance: __serializeFloat,
    RowIndexStride: [],
    StripeSizeBytes: [],
  });
};

/**
 * serializeAws_json1_1OutputFormatConfiguration
 */
const se_OutputFormatConfiguration = (input: OutputFormatConfiguration, context: __SerdeContext): any => {
  return take(input, {
    Serializer: (_) => se_Serializer(_, context),
  });
};

// se_ParquetSerDe omitted.

// se_PartitionField omitted.

// se_PartitionFields omitted.

// se_PartitionSpec omitted.

// se_ProcessingConfiguration omitted.

// se_Processor omitted.

// se_ProcessorList omitted.

// se_ProcessorParameter omitted.

// se_ProcessorParameterList omitted.

/**
 * serializeAws_json1_1PutRecordBatchInput
 */
const se_PutRecordBatchInput = (input: PutRecordBatchInput, context: __SerdeContext): any => {
  return take(input, {
    DeliveryStreamName: [],
    Records: (_) => se_PutRecordBatchRequestEntryList(_, context),
  });
};

/**
 * serializeAws_json1_1PutRecordBatchRequestEntryList
 */
const se_PutRecordBatchRequestEntryList = (input: _Record[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se__Record(entry, context);
    });
};

/**
 * serializeAws_json1_1PutRecordInput
 */
const se_PutRecordInput = (input: PutRecordInput, context: __SerdeContext): any => {
  return take(input, {
    DeliveryStreamName: [],
    Record: (_) => se__Record(_, context),
  });
};

/**
 * serializeAws_json1_1_Record
 */
const se__Record = (input: _Record, context: __SerdeContext): any => {
  return take(input, {
    Data: context.base64Encoder,
  });
};

// se_RedshiftDestinationConfiguration omitted.

// se_RedshiftDestinationUpdate omitted.

// se_RedshiftRetryOptions omitted.

// se_RetryOptions omitted.

// se_S3DestinationConfiguration omitted.

// se_S3DestinationUpdate omitted.

// se_SchemaConfiguration omitted.

// se_SchemaEvolutionConfiguration omitted.

// se_SecretsManagerConfiguration omitted.

// se_SecurityGroupIdList omitted.

/**
 * serializeAws_json1_1Serializer
 */
const se_Serializer = (input: Serializer, context: __SerdeContext): any => {
  return take(input, {
    OrcSerDe: (_) => se_OrcSerDe(_, context),
    ParquetSerDe: _json,
  });
};

// se_SnowflakeBufferingHints omitted.

// se_SnowflakeDestinationConfiguration omitted.

// se_SnowflakeDestinationUpdate omitted.

// se_SnowflakeRetryOptions omitted.

// se_SnowflakeRoleConfiguration omitted.

// se_SnowflakeVpcConfiguration omitted.

// se_SplunkBufferingHints omitted.

// se_SplunkDestinationConfiguration omitted.

// se_SplunkDestinationUpdate omitted.

// se_SplunkRetryOptions omitted.

// se_StartDeliveryStreamEncryptionInput omitted.

// se_StopDeliveryStreamEncryptionInput omitted.

// se_SubnetIdList omitted.

// se_TableCreationConfiguration omitted.

// se_Tag omitted.

// se_TagDeliveryStreamInput omitted.

// se_TagDeliveryStreamInputTagList omitted.

// se_TagKeyList omitted.

// se_UntagDeliveryStreamInput omitted.

/**
 * serializeAws_json1_1UpdateDestinationInput
 */
const se_UpdateDestinationInput = (input: UpdateDestinationInput, context: __SerdeContext): any => {
  return take(input, {
    AmazonOpenSearchServerlessDestinationUpdate: _json,
    AmazonopensearchserviceDestinationUpdate: _json,
    CurrentDeliveryStreamVersionId: [],
    DeliveryStreamName: [],
    DestinationId: [],
    ElasticsearchDestinationUpdate: _json,
    ExtendedS3DestinationUpdate: (_) => se_ExtendedS3DestinationUpdate(_, context),
    HttpEndpointDestinationUpdate: _json,
    IcebergDestinationUpdate: _json,
    RedshiftDestinationUpdate: _json,
    S3DestinationUpdate: _json,
    SnowflakeDestinationUpdate: _json,
    SplunkDestinationUpdate: _json,
  });
};

// se_VpcConfiguration omitted.

// de_AmazonOpenSearchServerlessBufferingHints omitted.

// de_AmazonOpenSearchServerlessDestinationDescription omitted.

// de_AmazonOpenSearchServerlessRetryOptions omitted.

// de_AmazonopensearchserviceBufferingHints omitted.

// de_AmazonopensearchserviceDestinationDescription omitted.

// de_AmazonopensearchserviceRetryOptions omitted.

// de_AuthenticationConfiguration omitted.

// de_BufferingHints omitted.

// de_CatalogConfiguration omitted.

// de_CloudWatchLoggingOptions omitted.

// de_ColumnToJsonKeyMappings omitted.

// de_ConcurrentModificationException omitted.

// de_CopyCommand omitted.

// de_CreateDeliveryStreamOutput omitted.

// de_DatabaseColumnIncludeOrExcludeList omitted.

// de_DatabaseColumnList omitted.

// de_DatabaseIncludeOrExcludeList omitted.

// de_DatabaseList omitted.

/**
 * deserializeAws_json1_1DatabaseSnapshotInfo
 */
const de_DatabaseSnapshotInfo = (output: any, context: __SerdeContext): DatabaseSnapshotInfo => {
  return take(output, {
    FailureDescription: _json,
    Id: __expectString,
    RequestTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RequestedBy: __expectString,
    Status: __expectString,
    Table: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatabaseSnapshotInfoList
 */
const de_DatabaseSnapshotInfoList = (output: any, context: __SerdeContext): DatabaseSnapshotInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatabaseSnapshotInfo(entry, context);
    });
  return retVal;
};

// de_DatabaseSourceAuthenticationConfiguration omitted.

/**
 * deserializeAws_json1_1DatabaseSourceDescription
 */
const de_DatabaseSourceDescription = (output: any, context: __SerdeContext): DatabaseSourceDescription => {
  return take(output, {
    Columns: _json,
    DatabaseSourceAuthenticationConfiguration: _json,
    DatabaseSourceVPCConfiguration: _json,
    Databases: _json,
    Endpoint: __expectString,
    Port: __expectInt32,
    SSLMode: __expectString,
    SnapshotInfo: (_: any) => de_DatabaseSnapshotInfoList(_, context),
    SnapshotWatermarkTable: __expectString,
    SurrogateKeys: _json,
    Tables: _json,
    Type: __expectString,
  }) as any;
};

// de_DatabaseSourceVPCConfiguration omitted.

// de_DatabaseTableIncludeOrExcludeList omitted.

// de_DatabaseTableList omitted.

/**
 * deserializeAws_json1_1DataFormatConversionConfiguration
 */
const de_DataFormatConversionConfiguration = (
  output: any,
  context: __SerdeContext
): DataFormatConversionConfiguration => {
  return take(output, {
    Enabled: __expectBoolean,
    InputFormatConfiguration: _json,
    OutputFormatConfiguration: (_: any) => de_OutputFormatConfiguration(_, context),
    SchemaConfiguration: _json,
  }) as any;
};

// de_DeleteDeliveryStreamOutput omitted.

/**
 * deserializeAws_json1_1DeliveryStreamDescription
 */
const de_DeliveryStreamDescription = (output: any, context: __SerdeContext): DeliveryStreamDescription => {
  return take(output, {
    CreateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeliveryStreamARN: __expectString,
    DeliveryStreamEncryptionConfiguration: _json,
    DeliveryStreamName: __expectString,
    DeliveryStreamStatus: __expectString,
    DeliveryStreamType: __expectString,
    Destinations: (_: any) => de_DestinationDescriptionList(_, context),
    FailureDescription: _json,
    HasMoreDestinations: __expectBoolean,
    LastUpdateTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: (_: any) => de_SourceDescription(_, context),
    VersionId: __expectString,
  }) as any;
};

// de_DeliveryStreamEncryptionConfiguration omitted.

// de_DeliveryStreamNameList omitted.

/**
 * deserializeAws_json1_1DescribeDeliveryStreamOutput
 */
const de_DescribeDeliveryStreamOutput = (output: any, context: __SerdeContext): DescribeDeliveryStreamOutput => {
  return take(output, {
    DeliveryStreamDescription: (_: any) => de_DeliveryStreamDescription(_, context),
  }) as any;
};

// de_Deserializer omitted.

/**
 * deserializeAws_json1_1DestinationDescription
 */
const de_DestinationDescription = (output: any, context: __SerdeContext): DestinationDescription => {
  return take(output, {
    AmazonOpenSearchServerlessDestinationDescription: _json,
    AmazonopensearchserviceDestinationDescription: _json,
    DestinationId: __expectString,
    ElasticsearchDestinationDescription: _json,
    ExtendedS3DestinationDescription: (_: any) => de_ExtendedS3DestinationDescription(_, context),
    HttpEndpointDestinationDescription: _json,
    IcebergDestinationDescription: _json,
    RedshiftDestinationDescription: _json,
    S3DestinationDescription: _json,
    SnowflakeDestinationDescription: _json,
    SplunkDestinationDescription: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DestinationDescriptionList
 */
const de_DestinationDescriptionList = (output: any, context: __SerdeContext): DestinationDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DestinationDescription(entry, context);
    });
  return retVal;
};

// de_DestinationTableConfiguration omitted.

// de_DestinationTableConfigurationList omitted.

// de_DirectPutSourceDescription omitted.

// de_DocumentIdOptions omitted.

// de_DynamicPartitioningConfiguration omitted.

// de_ElasticsearchBufferingHints omitted.

// de_ElasticsearchDestinationDescription omitted.

// de_ElasticsearchRetryOptions omitted.

// de_EncryptionConfiguration omitted.

/**
 * deserializeAws_json1_1ExtendedS3DestinationDescription
 */
const de_ExtendedS3DestinationDescription = (
  output: any,
  context: __SerdeContext
): ExtendedS3DestinationDescription => {
  return take(output, {
    BucketARN: __expectString,
    BufferingHints: _json,
    CloudWatchLoggingOptions: _json,
    CompressionFormat: __expectString,
    CustomTimeZone: __expectString,
    DataFormatConversionConfiguration: (_: any) => de_DataFormatConversionConfiguration(_, context),
    DynamicPartitioningConfiguration: _json,
    EncryptionConfiguration: _json,
    ErrorOutputPrefix: __expectString,
    FileExtension: __expectString,
    Prefix: __expectString,
    ProcessingConfiguration: _json,
    RoleARN: __expectString,
    S3BackupDescription: _json,
    S3BackupMode: __expectString,
  }) as any;
};

// de_FailureDescription omitted.

// de_HiveJsonSerDe omitted.

// de_HttpEndpointBufferingHints omitted.

// de_HttpEndpointCommonAttribute omitted.

// de_HttpEndpointCommonAttributesList omitted.

// de_HttpEndpointDescription omitted.

// de_HttpEndpointDestinationDescription omitted.

// de_HttpEndpointRequestConfiguration omitted.

// de_HttpEndpointRetryOptions omitted.

// de_IcebergDestinationDescription omitted.

// de_InputFormatConfiguration omitted.

// de_InvalidArgumentException omitted.

// de_InvalidKMSResourceException omitted.

// de_InvalidSourceException omitted.

/**
 * deserializeAws_json1_1KinesisStreamSourceDescription
 */
const de_KinesisStreamSourceDescription = (output: any, context: __SerdeContext): KinesisStreamSourceDescription => {
  return take(output, {
    DeliveryStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KinesisStreamARN: __expectString,
    RoleARN: __expectString,
  }) as any;
};

// de_KMSEncryptionConfig omitted.

// de_LimitExceededException omitted.

// de_ListDeliveryStreamsOutput omitted.

// de_ListOfNonEmptyStrings omitted.

// de_ListOfNonEmptyStringsWithoutWhitespace omitted.

// de_ListTagsForDeliveryStreamOutput omitted.

// de_ListTagsForDeliveryStreamOutputTagList omitted.

/**
 * deserializeAws_json1_1MSKSourceDescription
 */
const de_MSKSourceDescription = (output: any, context: __SerdeContext): MSKSourceDescription => {
  return take(output, {
    AuthenticationConfiguration: _json,
    DeliveryStartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MSKClusterARN: __expectString,
    ReadFromTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TopicName: __expectString,
  }) as any;
};

// de_OpenXJsonSerDe omitted.

/**
 * deserializeAws_json1_1OrcSerDe
 */
const de_OrcSerDe = (output: any, context: __SerdeContext): OrcSerDe => {
  return take(output, {
    BlockSizeBytes: __expectInt32,
    BloomFilterColumns: _json,
    BloomFilterFalsePositiveProbability: __limitedParseDouble,
    Compression: __expectString,
    DictionaryKeyThreshold: __limitedParseDouble,
    EnablePadding: __expectBoolean,
    FormatVersion: __expectString,
    PaddingTolerance: __limitedParseDouble,
    RowIndexStride: __expectInt32,
    StripeSizeBytes: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1OutputFormatConfiguration
 */
const de_OutputFormatConfiguration = (output: any, context: __SerdeContext): OutputFormatConfiguration => {
  return take(output, {
    Serializer: (_: any) => de_Serializer(_, context),
  }) as any;
};

// de_ParquetSerDe omitted.

// de_PartitionField omitted.

// de_PartitionFields omitted.

// de_PartitionSpec omitted.

// de_ProcessingConfiguration omitted.

// de_Processor omitted.

// de_ProcessorList omitted.

// de_ProcessorParameter omitted.

// de_ProcessorParameterList omitted.

// de_PutRecordBatchOutput omitted.

// de_PutRecordBatchResponseEntry omitted.

// de_PutRecordBatchResponseEntryList omitted.

// de_PutRecordOutput omitted.

// de_RedshiftDestinationDescription omitted.

// de_RedshiftRetryOptions omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_RetryOptions omitted.

// de_S3DestinationDescription omitted.

// de_SchemaConfiguration omitted.

// de_SchemaEvolutionConfiguration omitted.

// de_SecretsManagerConfiguration omitted.

// de_SecurityGroupIdList omitted.

/**
 * deserializeAws_json1_1Serializer
 */
const de_Serializer = (output: any, context: __SerdeContext): Serializer => {
  return take(output, {
    OrcSerDe: (_: any) => de_OrcSerDe(_, context),
    ParquetSerDe: _json,
  }) as any;
};

// de_ServiceUnavailableException omitted.

// de_SnowflakeBufferingHints omitted.

// de_SnowflakeDestinationDescription omitted.

// de_SnowflakeRetryOptions omitted.

// de_SnowflakeRoleConfiguration omitted.

// de_SnowflakeVpcConfiguration omitted.

/**
 * deserializeAws_json1_1SourceDescription
 */
const de_SourceDescription = (output: any, context: __SerdeContext): SourceDescription => {
  return take(output, {
    DatabaseSourceDescription: (_: any) => de_DatabaseSourceDescription(_, context),
    DirectPutSourceDescription: _json,
    KinesisStreamSourceDescription: (_: any) => de_KinesisStreamSourceDescription(_, context),
    MSKSourceDescription: (_: any) => de_MSKSourceDescription(_, context),
  }) as any;
};

// de_SplunkBufferingHints omitted.

// de_SplunkDestinationDescription omitted.

// de_SplunkRetryOptions omitted.

// de_StartDeliveryStreamEncryptionOutput omitted.

// de_StopDeliveryStreamEncryptionOutput omitted.

// de_SubnetIdList omitted.

// de_TableCreationConfiguration omitted.

// de_Tag omitted.

// de_TagDeliveryStreamOutput omitted.

// de_UntagDeliveryStreamOutput omitted.

// de_UpdateDestinationOutput omitted.

// de_VpcConfigurationDescription omitted.

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
    "x-amz-target": `Firehose_20150804.${operation}`,
  };
}
