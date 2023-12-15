// smithy-typescript generated code
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import { GetWorkloadCommandInput, GetWorkloadCommandOutput } from "../commands/GetWorkloadCommand";
import {
  ListDeploymentEventsCommandInput,
  ListDeploymentEventsCommandOutput,
} from "../commands/ListDeploymentEventsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListWorkloadDeploymentPatternsCommandInput,
  ListWorkloadDeploymentPatternsCommandOutput,
} from "../commands/ListWorkloadDeploymentPatternsCommand";
import { ListWorkloadsCommandInput, ListWorkloadsCommandOutput } from "../commands/ListWorkloadsCommand";
import { LaunchWizardServiceException as __BaseException } from "../models/LaunchWizardServiceException";
import {
  DeploymentData,
  DeploymentDataSummary,
  DeploymentEventDataSummary,
  DeploymentFilter,
  InternalServerException,
  ResourceLimitException,
  ResourceNotFoundException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createDeployment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      deploymentPatternName: [],
      dryRun: [],
      name: [],
      specifications: (_) => _json(_),
      workloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeploymentCommand
 */
export const se_DeleteDeploymentCommand = async (
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteDeployment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      deploymentId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getDeployment");
  let body: any;
  body = JSON.stringify(
    take(input, {
      deploymentId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorkloadCommand
 */
export const se_GetWorkloadCommand = async (
  input: GetWorkloadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getWorkload");
  let body: any;
  body = JSON.stringify(
    take(input, {
      workloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeploymentEventsCommand
 */
export const se_ListDeploymentEventsCommand = async (
  input: ListDeploymentEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listDeploymentEvents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      deploymentId: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listDeployments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkloadDeploymentPatternsCommand
 */
export const se_ListWorkloadDeploymentPatternsCommand = async (
  input: ListWorkloadDeploymentPatternsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listWorkloadDeploymentPatterns");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      workloadName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorkloadsCommand
 */
export const se_ListWorkloadsCommand = async (
  input: ListWorkloadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listWorkloads");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deploymentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceLimitException":
    case "com.amazonaws.launchwizard#ResourceLimitException":
      throw await de_ResourceLimitExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.launchwizard#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDeploymentCommand
 */
export const de_DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
    statusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeploymentCommandError
 */
const de_DeleteDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.launchwizard#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deployment: (_) => de_DeploymentData(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentCommandError
 */
const de_GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.launchwizard#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetWorkloadCommand
 */
export const de_GetWorkloadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkloadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    workload: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkloadCommandError
 */
const de_GetWorkloadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkloadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.launchwizard#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDeploymentEventsCommand
 */
export const de_ListDeploymentEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeploymentEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deploymentEvents: (_) => de_DeploymentEventDataSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentEventsCommandError
 */
const de_ListDeploymentEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.launchwizard#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deployments: (_) => de_DeploymentDataSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentsCommandError
 */
const de_ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorkloadDeploymentPatternsCommand
 */
export const de_ListWorkloadDeploymentPatternsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadDeploymentPatternsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkloadDeploymentPatternsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workloadDeploymentPatterns: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadDeploymentPatternsCommandError
 */
const de_ListWorkloadDeploymentPatternsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadDeploymentPatternsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.launchwizard#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorkloadsCommand
 */
export const de_ListWorkloadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkloadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    workloads: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkloadsCommandError
 */
const de_ListWorkloadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkloadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.launchwizard#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.launchwizard#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
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
 * deserializeAws_restJson1ResourceLimitExceptionRes
 */
const de_ResourceLimitExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceLimitException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DeploymentFilter omitted.

// se_DeploymentFilterList omitted.

// se_DeploymentFilterValues omitted.

// se_DeploymentSpecifications omitted.

/**
 * deserializeAws_restJson1DeploymentData
 */
const de_DeploymentData = (output: any, context: __SerdeContext): DeploymentData => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    patternName: __expectString,
    resourceGroup: __expectString,
    specifications: _json,
    status: __expectString,
    workloadName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentDataSummary
 */
const de_DeploymentDataSummary = (output: any, context: __SerdeContext): DeploymentDataSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    id: __expectString,
    name: __expectString,
    patternName: __expectString,
    status: __expectString,
    workloadName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentDataSummaryList
 */
const de_DeploymentDataSummaryList = (output: any, context: __SerdeContext): DeploymentDataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentDataSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentEventDataSummary
 */
const de_DeploymentEventDataSummary = (output: any, context: __SerdeContext): DeploymentEventDataSummary => {
  return take(output, {
    description: __expectString,
    name: __expectString,
    status: __expectString,
    statusReason: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentEventDataSummaryList
 */
const de_DeploymentEventDataSummaryList = (output: any, context: __SerdeContext): DeploymentEventDataSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentEventDataSummary(entry, context);
    });
  return retVal;
};

// de_DeploymentSpecifications omitted.

// de_WorkloadData omitted.

// de_WorkloadDataSummary omitted.

// de_WorkloadDataSummaryList omitted.

// de_WorkloadDeploymentPatternDataSummary omitted.

// de_WorkloadDeploymentPatternDataSummaryList omitted.

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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

// HttpBindingProtocolGenerator

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

// RestJsonProtocolGenerator
