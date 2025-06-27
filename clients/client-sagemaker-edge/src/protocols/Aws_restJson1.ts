// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetDeployments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceFleetName: [],
      DeviceName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceRegistrationCommand
 */
export const se_GetDeviceRegistrationCommand = async (
  input: GetDeviceRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetDeviceRegistration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceFleetName: [],
      DeviceName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendHeartbeatCommand
 */
export const se_SendHeartbeatCommand = async (
  input: SendHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/SendHeartbeat");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1GetDeploymentsCommand
 */
export const de_GetDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetDeviceRegistrationCommand
 */
export const de_GetDeviceRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceRegistrationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1SendHeartbeatCommand
 */
export const de_SendHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendHeartbeatCommandOutput> => {
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      }) as never;
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
    DeploymentEndTime: (_) => _.getTime() / 1_000,
    DeploymentModels: _json,
    DeploymentName: [],
    DeploymentStartTime: (_) => _.getTime() / 1_000,
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
    Timestamp: (_) => _.getTime() / 1_000,
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
    LatestInference: (_) => _.getTime() / 1_000,
    LatestSampleTime: (_) => _.getTime() / 1_000,
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
