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
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateIndexCommandInput, CreateIndexCommandOutput } from "../commands/CreateIndexCommand";
import { CreateVectorBucketCommandInput, CreateVectorBucketCommandOutput } from "../commands/CreateVectorBucketCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "../commands/DeleteIndexCommand";
import { DeleteVectorBucketCommandInput, DeleteVectorBucketCommandOutput } from "../commands/DeleteVectorBucketCommand";
import {
  DeleteVectorBucketPolicyCommandInput,
  DeleteVectorBucketPolicyCommandOutput,
} from "../commands/DeleteVectorBucketPolicyCommand";
import { DeleteVectorsCommandInput, DeleteVectorsCommandOutput } from "../commands/DeleteVectorsCommand";
import { GetIndexCommandInput, GetIndexCommandOutput } from "../commands/GetIndexCommand";
import { GetVectorBucketCommandInput, GetVectorBucketCommandOutput } from "../commands/GetVectorBucketCommand";
import {
  GetVectorBucketPolicyCommandInput,
  GetVectorBucketPolicyCommandOutput,
} from "../commands/GetVectorBucketPolicyCommand";
import { GetVectorsCommandInput, GetVectorsCommandOutput } from "../commands/GetVectorsCommand";
import { ListIndexesCommandInput, ListIndexesCommandOutput } from "../commands/ListIndexesCommand";
import { ListVectorBucketsCommandInput, ListVectorBucketsCommandOutput } from "../commands/ListVectorBucketsCommand";
import { ListVectorsCommandInput, ListVectorsCommandOutput } from "../commands/ListVectorsCommand";
import {
  PutVectorBucketPolicyCommandInput,
  PutVectorBucketPolicyCommandOutput,
} from "../commands/PutVectorBucketPolicyCommand";
import { PutVectorsCommandInput, PutVectorsCommandOutput } from "../commands/PutVectorsCommand";
import { QueryVectorsCommandInput, QueryVectorsCommandOutput } from "../commands/QueryVectorsCommand";
import {
  AccessDeniedException,
  ConflictException,
  EncryptionConfiguration,
  GetOutputVector,
  Index,
  IndexSummary,
  InternalServerException,
  KmsDisabledException,
  KmsInvalidKeyUsageException,
  KmsInvalidStateException,
  KmsNotFoundException,
  ListOutputVector,
  MetadataConfiguration,
  NotFoundException,
  PutInputVector,
  QueryOutputVector,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  TooManyRequestsException,
  ValidationException,
  VectorBucket,
  VectorBucketSummary,
  VectorData,
} from "../models/models_0";
import { S3VectorsServiceException as __BaseException } from "../models/S3VectorsServiceException";

/**
 * serializeAws_restJson1CreateIndexCommand
 */
export const se_CreateIndexCommand = async (
  input: CreateIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateIndex");
  let body: any;
  body = JSON.stringify(
    take(input, {
      dataType: [],
      dimension: [],
      distanceMetric: [],
      indexName: [],
      metadataConfiguration: (_) => _json(_),
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVectorBucketCommand
 */
export const se_CreateVectorBucketCommand = async (
  input: CreateVectorBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateVectorBucket");
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionConfiguration: (_) => _json(_),
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteIndexCommand
 */
export const se_DeleteIndexCommand = async (
  input: DeleteIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteIndex");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexArn: [],
      indexName: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVectorBucketCommand
 */
export const se_DeleteVectorBucketCommand = async (
  input: DeleteVectorBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteVectorBucket");
  let body: any;
  body = JSON.stringify(
    take(input, {
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVectorBucketPolicyCommand
 */
export const se_DeleteVectorBucketPolicyCommand = async (
  input: DeleteVectorBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteVectorBucketPolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteVectorsCommand
 */
export const se_DeleteVectorsCommand = async (
  input: DeleteVectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteVectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexArn: [],
      indexName: [],
      keys: (_) => _json(_),
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIndexCommand
 */
export const se_GetIndexCommand = async (
  input: GetIndexCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetIndex");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexArn: [],
      indexName: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVectorBucketCommand
 */
export const se_GetVectorBucketCommand = async (
  input: GetVectorBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetVectorBucket");
  let body: any;
  body = JSON.stringify(
    take(input, {
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVectorBucketPolicyCommand
 */
export const se_GetVectorBucketPolicyCommand = async (
  input: GetVectorBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetVectorBucketPolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVectorsCommand
 */
export const se_GetVectorsCommand = async (
  input: GetVectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetVectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexArn: [],
      indexName: [],
      keys: (_) => _json(_),
      returnData: [],
      returnMetadata: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIndexesCommand
 */
export const se_ListIndexesCommand = async (
  input: ListIndexesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListIndexes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      prefix: [],
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVectorBucketsCommand
 */
export const se_ListVectorBucketsCommand = async (
  input: ListVectorBucketsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListVectorBuckets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      prefix: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListVectorsCommand
 */
export const se_ListVectorsCommand = async (
  input: ListVectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListVectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexArn: [],
      indexName: [],
      maxResults: [],
      nextToken: [],
      returnData: [],
      returnMetadata: [],
      segmentCount: [],
      segmentIndex: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVectorBucketPolicyCommand
 */
export const se_PutVectorBucketPolicyCommand = async (
  input: PutVectorBucketPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutVectorBucketPolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      policy: [],
      vectorBucketArn: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutVectorsCommand
 */
export const se_PutVectorsCommand = async (
  input: PutVectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutVectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      indexArn: [],
      indexName: [],
      vectorBucketName: [],
      vectors: (_) => se_PutVectorsInputList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1QueryVectorsCommand
 */
export const se_QueryVectorsCommand = async (
  input: QueryVectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/QueryVectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => se_Document(_, context),
      indexArn: [],
      indexName: [],
      queryVector: (_) => se_VectorData(_, context),
      returnDistance: [],
      returnMetadata: [],
      topK: [],
      vectorBucketName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateIndexCommand
 */
export const de_CreateIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIndexCommandOutput> => {
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
 * deserializeAws_restJson1CreateVectorBucketCommand
 */
export const de_CreateVectorBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVectorBucketCommandOutput> => {
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
 * deserializeAws_restJson1DeleteIndexCommand
 */
export const de_DeleteIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIndexCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVectorBucketCommand
 */
export const de_DeleteVectorBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorBucketCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVectorBucketPolicyCommand
 */
export const de_DeleteVectorBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorBucketPolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteVectorsCommand
 */
export const de_DeleteVectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVectorsCommandOutput> => {
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
 * deserializeAws_restJson1GetIndexCommand
 */
export const de_GetIndexCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIndexCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    index: (_) => de_Index(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVectorBucketCommand
 */
export const de_GetVectorBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorBucketCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    vectorBucket: (_) => de_VectorBucket(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVectorBucketPolicyCommand
 */
export const de_GetVectorBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorBucketPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVectorsCommand
 */
export const de_GetVectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    vectors: (_) => de_GetVectorsOutputList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIndexesCommand
 */
export const de_ListIndexesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    indexes: (_) => de_ListIndexesOutputList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVectorBucketsCommand
 */
export const de_ListVectorBucketsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVectorBucketsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    vectorBuckets: (_) => de_ListVectorBucketsOutputList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVectorsCommand
 */
export const de_ListVectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    vectors: (_) => de_ListVectorsOutputList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutVectorBucketPolicyCommand
 */
export const de_PutVectorBucketPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVectorBucketPolicyCommandOutput> => {
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
 * deserializeAws_restJson1PutVectorsCommand
 */
export const de_PutVectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutVectorsCommandOutput> => {
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
 * deserializeAws_restJson1QueryVectorsCommand
 */
export const de_QueryVectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryVectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    vectors: (_) => de_QueryVectorsOutputList(_, context),
  });
  Object.assign(contents, doc);
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
    case "com.amazonaws.s3vectors#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.s3vectors#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.s3vectors#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.s3vectors#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.s3vectors#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.s3vectors#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.s3vectors#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.s3vectors#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "KmsDisabledException":
    case "com.amazonaws.s3vectors#KmsDisabledException":
      throw await de_KmsDisabledExceptionRes(parsedOutput, context);
    case "KmsInvalidKeyUsageException":
    case "com.amazonaws.s3vectors#KmsInvalidKeyUsageException":
      throw await de_KmsInvalidKeyUsageExceptionRes(parsedOutput, context);
    case "KmsInvalidStateException":
    case "com.amazonaws.s3vectors#KmsInvalidStateException":
      throw await de_KmsInvalidStateExceptionRes(parsedOutput, context);
    case "KmsNotFoundException":
    case "com.amazonaws.s3vectors#KmsNotFoundException":
      throw await de_KmsNotFoundExceptionRes(parsedOutput, context);
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
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KmsDisabledExceptionRes
 */
const de_KmsDisabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsDisabledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new KmsDisabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KmsInvalidKeyUsageExceptionRes
 */
const de_KmsInvalidKeyUsageExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsInvalidKeyUsageException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new KmsInvalidKeyUsageException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KmsInvalidStateExceptionRes
 */
const de_KmsInvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsInvalidStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new KmsInvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1KmsNotFoundExceptionRes
 */
const de_KmsNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new KmsNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyRequestsException({
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
    fieldList: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DeleteVectorsInputList omitted.

// se_EncryptionConfiguration omitted.

/**
 * serializeAws_restJson1Float32VectorData
 */
const se_Float32VectorData = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_GetVectorsInputList omitted.

// se_MetadataConfiguration omitted.

// se_NonFilterableMetadataKeys omitted.

/**
 * serializeAws_restJson1PutInputVector
 */
const se_PutInputVector = (input: PutInputVector, context: __SerdeContext): any => {
  return take(input, {
    data: (_) => se_VectorData(_, context),
    key: [],
    metadata: (_) => se_VectorMetadata(_, context),
  });
};

/**
 * serializeAws_restJson1PutVectorsInputList
 */
const se_PutVectorsInputList = (input: PutInputVector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PutInputVector(entry, context);
    });
};

/**
 * serializeAws_restJson1VectorData
 */
const se_VectorData = (input: VectorData, context: __SerdeContext): any => {
  return VectorData.visit(input, {
    float32: (value) => ({ float32: se_Float32VectorData(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1VectorMetadata
 */
const se_VectorMetadata = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// de_EncryptionConfiguration omitted.

/**
 * deserializeAws_restJson1Float32VectorData
 */
const de_Float32VectorData = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseFloat32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GetOutputVector
 */
const de_GetOutputVector = (output: any, context: __SerdeContext): GetOutputVector => {
  return take(output, {
    data: (_: any) => de_VectorData(__expectUnion(_), context),
    key: __expectString,
    metadata: (_: any) => de_VectorMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GetVectorsOutputList
 */
const de_GetVectorsOutputList = (output: any, context: __SerdeContext): GetOutputVector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetOutputVector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Index
 */
const de_Index = (output: any, context: __SerdeContext): Index => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataType: __expectString,
    dimension: __expectInt32,
    distanceMetric: __expectString,
    indexArn: __expectString,
    indexName: __expectString,
    metadataConfiguration: _json,
    vectorBucketName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IndexSummary
 */
const de_IndexSummary = (output: any, context: __SerdeContext): IndexSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    indexArn: __expectString,
    indexName: __expectString,
    vectorBucketName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ListIndexesOutputList
 */
const de_ListIndexesOutputList = (output: any, context: __SerdeContext): IndexSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IndexSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOutputVector
 */
const de_ListOutputVector = (output: any, context: __SerdeContext): ListOutputVector => {
  return take(output, {
    data: (_: any) => de_VectorData(__expectUnion(_), context),
    key: __expectString,
    metadata: (_: any) => de_VectorMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ListVectorBucketsOutputList
 */
const de_ListVectorBucketsOutputList = (output: any, context: __SerdeContext): VectorBucketSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VectorBucketSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListVectorsOutputList
 */
const de_ListVectorsOutputList = (output: any, context: __SerdeContext): ListOutputVector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ListOutputVector(entry, context);
    });
  return retVal;
};

// de_MetadataConfiguration omitted.

// de_NonFilterableMetadataKeys omitted.

/**
 * deserializeAws_restJson1QueryOutputVector
 */
const de_QueryOutputVector = (output: any, context: __SerdeContext): QueryOutputVector => {
  return take(output, {
    data: (_: any) => de_VectorData(__expectUnion(_), context),
    distance: __limitedParseFloat32,
    key: __expectString,
    metadata: (_: any) => de_VectorMetadata(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1QueryVectorsOutputList
 */
const de_QueryVectorsOutputList = (output: any, context: __SerdeContext): QueryOutputVector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_QueryOutputVector(entry, context);
    });
  return retVal;
};

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

/**
 * deserializeAws_restJson1VectorBucket
 */
const de_VectorBucket = (output: any, context: __SerdeContext): VectorBucket => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionConfiguration: _json,
    vectorBucketArn: __expectString,
    vectorBucketName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VectorBucketSummary
 */
const de_VectorBucketSummary = (output: any, context: __SerdeContext): VectorBucketSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vectorBucketArn: __expectString,
    vectorBucketName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1VectorData
 */
const de_VectorData = (output: any, context: __SerdeContext): VectorData => {
  if (output.float32 != null) {
    return {
      float32: de_Float32VectorData(output.float32, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1VectorMetadata
 */
const de_VectorMetadata = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

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
