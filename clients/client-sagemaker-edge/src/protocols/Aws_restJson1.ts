// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import {
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
} from "../commands/GetDeviceRegistrationCommand";
import { SendHeartbeatCommandInput, SendHeartbeatCommandOutput } from "../commands/SendHeartbeatCommand";
import {
  Checksum,
  Definition,
  DeploymentModel,
  DeploymentResult,
  EdgeDeployment,
  EdgeMetric,
  InternalServiceException,
  Model,
} from "../models/models_0";
import { SagemakerEdgeServiceException as __BaseException } from "../models/SagemakerEdgeServiceException";

/**
 * serializeAws_restJson1GetDeploymentsCommand
 */
export const se_GetDeploymentsCommand = async (
  input: GetDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDeployments";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceFleetName != null && { DeviceFleetName: input.DeviceFleetName }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
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
 * serializeAws_restJson1GetDeviceRegistrationCommand
 */
export const se_GetDeviceRegistrationCommand = async (
  input: GetDeviceRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDeviceRegistration";
  let body: any;
  body = JSON.stringify({
    ...(input.DeviceFleetName != null && { DeviceFleetName: input.DeviceFleetName }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
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
 * serializeAws_restJson1SendHeartbeatCommand
 */
export const se_SendHeartbeatCommand = async (
  input: SendHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SendHeartbeat";
  let body: any;
  body = JSON.stringify({
    ...(input.AgentMetrics != null && { AgentMetrics: se_EdgeMetrics(input.AgentMetrics, context) }),
    ...(input.AgentVersion != null && { AgentVersion: input.AgentVersion }),
    ...(input.DeploymentResult != null && { DeploymentResult: se_DeploymentResult(input.DeploymentResult, context) }),
    ...(input.DeviceFleetName != null && { DeviceFleetName: input.DeviceFleetName }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.Models != null && { Models: se_Models(input.Models, context) }),
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
 * deserializeAws_restJson1GetDeploymentsCommand
 */
export const de_GetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Deployments != null) {
    contents.Deployments = de_EdgeDeployments(data.Deployments, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentsCommandError
 */
const de_GetDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.sagemakeredge#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDeviceRegistrationCommand
 */
export const de_GetDeviceRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeviceRegistrationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CacheTTL != null) {
    contents.CacheTTL = __expectString(data.CacheTTL);
  }
  if (data.DeviceRegistration != null) {
    contents.DeviceRegistration = __expectString(data.DeviceRegistration);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceRegistrationCommandError
 */
const de_GetDeviceRegistrationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceRegistrationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.sagemakeredge#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SendHeartbeatCommand
 */
export const de_SendHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendHeartbeatCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SendHeartbeatCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SendHeartbeatCommandError
 */
const de_SendHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.sagemakeredge#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1DeploymentModel
 */
const se_DeploymentModel = (input: DeploymentModel, context: __SerdeContext): any => {
  return {
    ...(input.DesiredState != null && { DesiredState: input.DesiredState }),
    ...(input.ModelHandle != null && { ModelHandle: input.ModelHandle }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.ModelVersion != null && { ModelVersion: input.ModelVersion }),
    ...(input.RollbackFailureReason != null && { RollbackFailureReason: input.RollbackFailureReason }),
    ...(input.State != null && { State: input.State }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusReason != null && { StatusReason: input.StatusReason }),
  };
};

/**
 * serializeAws_restJson1DeploymentModels
 */
const se_DeploymentModels = (input: DeploymentModel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeploymentModel(entry, context);
    });
};

/**
 * serializeAws_restJson1DeploymentResult
 */
const se_DeploymentResult = (input: DeploymentResult, context: __SerdeContext): any => {
  return {
    ...(input.DeploymentEndTime != null && { DeploymentEndTime: Math.round(input.DeploymentEndTime.getTime() / 1000) }),
    ...(input.DeploymentModels != null && { DeploymentModels: se_DeploymentModels(input.DeploymentModels, context) }),
    ...(input.DeploymentName != null && { DeploymentName: input.DeploymentName }),
    ...(input.DeploymentStartTime != null && {
      DeploymentStartTime: Math.round(input.DeploymentStartTime.getTime() / 1000),
    }),
    ...(input.DeploymentStatus != null && { DeploymentStatus: input.DeploymentStatus }),
    ...(input.DeploymentStatusMessage != null && { DeploymentStatusMessage: input.DeploymentStatusMessage }),
  };
};

/**
 * serializeAws_restJson1EdgeMetric
 */
const se_EdgeMetric = (input: EdgeMetric, context: __SerdeContext): any => {
  return {
    ...(input.Dimension != null && { Dimension: input.Dimension }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

/**
 * serializeAws_restJson1EdgeMetrics
 */
const se_EdgeMetrics = (input: EdgeMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EdgeMetric(entry, context);
    });
};

/**
 * serializeAws_restJson1Model
 */
const se_Model = (input: Model, context: __SerdeContext): any => {
  return {
    ...(input.LatestInference != null && { LatestInference: Math.round(input.LatestInference.getTime() / 1000) }),
    ...(input.LatestSampleTime != null && { LatestSampleTime: Math.round(input.LatestSampleTime.getTime() / 1000) }),
    ...(input.ModelMetrics != null && { ModelMetrics: se_EdgeMetrics(input.ModelMetrics, context) }),
    ...(input.ModelName != null && { ModelName: input.ModelName }),
    ...(input.ModelVersion != null && { ModelVersion: input.ModelVersion }),
  };
};

/**
 * serializeAws_restJson1Models
 */
const se_Models = (input: Model[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Model(entry, context);
    });
};

/**
 * deserializeAws_restJson1Checksum
 */
const de_Checksum = (output: any, context: __SerdeContext): Checksum => {
  return {
    Sum: __expectString(output.Sum),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1Definition
 */
const de_Definition = (output: any, context: __SerdeContext): Definition => {
  return {
    Checksum: output.Checksum != null ? de_Checksum(output.Checksum, context) : undefined,
    ModelHandle: __expectString(output.ModelHandle),
    S3Url: __expectString(output.S3Url),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1Definitions
 */
const de_Definitions = (output: any, context: __SerdeContext): Definition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Definition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EdgeDeployment
 */
const de_EdgeDeployment = (output: any, context: __SerdeContext): EdgeDeployment => {
  return {
    Definitions: output.Definitions != null ? de_Definitions(output.Definitions, context) : undefined,
    DeploymentName: __expectString(output.DeploymentName),
    FailureHandlingPolicy: __expectString(output.FailureHandlingPolicy),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1EdgeDeployments
 */
const de_EdgeDeployments = (output: any, context: __SerdeContext): EdgeDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EdgeDeployment(entry, context);
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
