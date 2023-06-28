// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput } from "../commands/GetDeploymentsCommand";
import {
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
} from "../commands/GetDeviceRegistrationCommand";
import { SendHeartbeatCommandInput, SendHeartbeatCommandOutput } from "../commands/SendHeartbeatCommand";
import { DeploymentModel, DeploymentResult, EdgeMetric, InternalServiceException, Model } from "../models/models_0";
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
  body = JSON.stringify(
    take(input, {
      DeviceFleetName: [],
      DeviceName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      DeviceFleetName: [],
      DeviceName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AgentMetrics: (_) => se_EdgeMetrics(_, context),
      AgentVersion: [],
      DeploymentResult: (_) => se_DeploymentResult(_, context),
      DeviceFleetName: [],
      DeviceName: [],
      Models: (_) => se_Models(_, context),
    })
  );
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
  const doc = take(data, {
    Deployments: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CacheTTL: __expectString,
    DeviceRegistration: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DeploymentModel omitted.

// se_DeploymentModels omitted.

/**
 * serializeAws_restJson1DeploymentResult
 */
const se_DeploymentResult = (input: DeploymentResult, context: __SerdeContext): any => {
  return take(input, {
    DeploymentEndTime: (_) => Math.round(_.getTime() / 1000),
    DeploymentModels: _json,
    DeploymentName: [],
    DeploymentStartTime: (_) => Math.round(_.getTime() / 1000),
    DeploymentStatus: [],
    DeploymentStatusMessage: [],
  });
};

/**
 * serializeAws_restJson1EdgeMetric
 */
const se_EdgeMetric = (input: EdgeMetric, context: __SerdeContext): any => {
  return take(input, {
    Dimension: [],
    MetricName: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
    Value: __serializeFloat,
  });
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
  return take(input, {
    LatestInference: (_) => Math.round(_.getTime() / 1000),
    LatestSampleTime: (_) => Math.round(_.getTime() / 1000),
    ModelMetrics: (_) => se_EdgeMetrics(_, context),
    ModelName: [],
    ModelVersion: [],
  });
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

// de_Checksum omitted.

// de_Definition omitted.

// de_Definitions omitted.

// de_EdgeDeployment omitted.

// de_EdgeDeployments omitted.

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
