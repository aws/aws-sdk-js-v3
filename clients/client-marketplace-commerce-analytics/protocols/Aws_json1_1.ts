import {
  GenerateDataSetCommandInput,
  GenerateDataSetCommandOutput
} from "../commands/GenerateDataSetCommand";
import {
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput
} from "../commands/StartSupportDataExportCommand";
import {
  GenerateDataSetRequest,
  GenerateDataSetResult,
  MarketplaceCommerceAnalyticsException,
  StartSupportDataExportRequest,
  StartSupportDataExportResult
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

export async function serializeAws_json1_1GenerateDataSetCommand(
  input: GenerateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GenerateDataSetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartSupportDataExportCommand(
  input: StartSupportDataExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "MarketplaceCommerceAnalytics20150701.StartSupportDataExport";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartSupportDataExportRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1GenerateDataSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataSetResult(data, context);
  const response: GenerateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataSetResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataSetCommandOutput> {
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
    case "MarketplaceCommerceAnalyticsException":
    case "com.amazon.aws.marketplace.businessintelligenceservice.v20150701#MarketplaceCommerceAnalyticsException":
      response = {
        ...(await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(
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

export async function deserializeAws_json1_1StartSupportDataExportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSupportDataExportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartSupportDataExportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartSupportDataExportResult(data, context);
  const response: StartSupportDataExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSupportDataExportResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartSupportDataExportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSupportDataExportCommandOutput> {
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
    case "MarketplaceCommerceAnalyticsException":
    case "com.amazon.aws.marketplace.businessintelligenceservice.v20150701#MarketplaceCommerceAnalyticsException":
      response = {
        ...(await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(
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

const deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MarketplaceCommerceAnalyticsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MarketplaceCommerceAnalyticsException(
    body,
    context
  );
  const contents: MarketplaceCommerceAnalyticsException = {
    name: "MarketplaceCommerceAnalyticsException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CustomerDefinedValues = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1GenerateDataSetRequest = (
  input: GenerateDataSetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.customerDefinedValues !== undefined) {
    bodyParams[
      "customerDefinedValues"
    ] = serializeAws_json1_1CustomerDefinedValues(
      input.customerDefinedValues,
      context
    );
  }
  if (input.dataSetPublicationDate !== undefined) {
    bodyParams["dataSetPublicationDate"] = Math.round(
      input.dataSetPublicationDate.getTime() / 1000
    );
  }
  if (input.dataSetType !== undefined) {
    bodyParams["dataSetType"] = input.dataSetType;
  }
  if (input.destinationS3BucketName !== undefined) {
    bodyParams["destinationS3BucketName"] = input.destinationS3BucketName;
  }
  if (input.destinationS3Prefix !== undefined) {
    bodyParams["destinationS3Prefix"] = input.destinationS3Prefix;
  }
  if (input.roleNameArn !== undefined) {
    bodyParams["roleNameArn"] = input.roleNameArn;
  }
  if (input.snsTopicArn !== undefined) {
    bodyParams["snsTopicArn"] = input.snsTopicArn;
  }
  return bodyParams;
};

const serializeAws_json1_1StartSupportDataExportRequest = (
  input: StartSupportDataExportRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.customerDefinedValues !== undefined) {
    bodyParams[
      "customerDefinedValues"
    ] = serializeAws_json1_1CustomerDefinedValues(
      input.customerDefinedValues,
      context
    );
  }
  if (input.dataSetType !== undefined) {
    bodyParams["dataSetType"] = input.dataSetType;
  }
  if (input.destinationS3BucketName !== undefined) {
    bodyParams["destinationS3BucketName"] = input.destinationS3BucketName;
  }
  if (input.destinationS3Prefix !== undefined) {
    bodyParams["destinationS3Prefix"] = input.destinationS3Prefix;
  }
  if (input.fromDate !== undefined) {
    bodyParams["fromDate"] = Math.round(input.fromDate.getTime() / 1000);
  }
  if (input.roleNameArn !== undefined) {
    bodyParams["roleNameArn"] = input.roleNameArn;
  }
  if (input.snsTopicArn !== undefined) {
    bodyParams["snsTopicArn"] = input.snsTopicArn;
  }
  return bodyParams;
};

const deserializeAws_json1_1GenerateDataSetResult = (
  output: any,
  context: __SerdeContext
): GenerateDataSetResult => {
  let contents: any = {
    __type: "GenerateDataSetResult",
    dataSetRequestId: undefined
  };
  if (
    output.dataSetRequestId !== undefined &&
    output.dataSetRequestId !== null
  ) {
    contents.dataSetRequestId = output.dataSetRequestId;
  }
  return contents;
};

const deserializeAws_json1_1MarketplaceCommerceAnalyticsException = (
  output: any,
  context: __SerdeContext
): MarketplaceCommerceAnalyticsException => {
  let contents: any = {
    __type: "MarketplaceCommerceAnalyticsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StartSupportDataExportResult = (
  output: any,
  context: __SerdeContext
): StartSupportDataExportResult => {
  let contents: any = {
    __type: "StartSupportDataExportResult",
    dataSetRequestId: undefined
  };
  if (
    output.dataSetRequestId !== undefined &&
    output.dataSetRequestId !== null
  ) {
    contents.dataSetRequestId = output.dataSetRequestId;
  }
  return contents;
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
