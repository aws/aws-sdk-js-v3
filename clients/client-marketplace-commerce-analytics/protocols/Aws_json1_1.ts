import {
  GenerateDataSetCommandInput,
  GenerateDataSetCommandOutput,
} from "../commands/GenerateDataSetCommand";
import {
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
} from "../commands/StartSupportDataExportCommand";
import {
  GenerateDataSetRequest,
  GenerateDataSetResult,
  MarketplaceCommerceAnalyticsException,
  StartSupportDataExportRequest,
  StartSupportDataExportResult,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_json1_1GenerateDataSetCommand(
  input: GenerateDataSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "MarketplaceCommerceAnalytics20150701.GenerateDataSet";
  let body: any = {};
  const wrappedBody: any = {
    GenerateDataSetRequest: serializeAws_json1_1GenerateDataSetRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GenerateDataSet",
    headers: headers,
    body: body,
  });
}

export async function serializeAws_json1_1StartSupportDataExportCommand(
  input: StartSupportDataExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport";
  let body: any = {};
  const wrappedBody: any = {
    StartSupportDataExportRequest: serializeAws_json1_1StartSupportDataExportRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartSupportDataExport",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1GenerateDataSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateDataSetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GenerateDataSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateDataSetResult(data, context);
  const response: GenerateDataSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GenerateDataSetResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GenerateDataSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GenerateDataSetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "MarketplaceCommerceAnalyticsException":
    case "com.amazon.aws.marketplace.businessintelligenceservice.v20150701#MarketplaceCommerceAnalyticsException":
      response = await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.aws.marketplace.businessintelligenceservice.v20150701#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartSupportDataExportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSupportDataExportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartSupportDataExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1StartSupportDataExportResult(data, context);
  const response: StartSupportDataExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartSupportDataExportResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartSupportDataExportCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<StartSupportDataExportCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "MarketplaceCommerceAnalyticsException":
    case "com.amazon.aws.marketplace.businessintelligenceservice.v20150701#MarketplaceCommerceAnalyticsException":
      response = await deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse(parsedOutput, context);
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.aws.marketplace.businessintelligenceservice.v20150701#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1MarketplaceCommerceAnalyticsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MarketplaceCommerceAnalyticsException> => {
  const deserialized: any = deserializeAws_json1_1MarketplaceCommerceAnalyticsException(output.body, context);
  const contents: MarketplaceCommerceAnalyticsException = {
    __type: "MarketplaceCommerceAnalyticsException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CustomerDefinedValues = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
}

const serializeAws_json1_1GenerateDataSetRequest = (
  input: GenerateDataSetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.customerDefinedValues !== undefined) {
    bodyParams['customerDefinedValues'] = serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context);
  }
  if (input.dataSetPublicationDate !== undefined) {
    bodyParams['dataSetPublicationDate'] = Math.round(input.dataSetPublicationDate.getTime() / 1000);
  }
  if (input.dataSetType !== undefined) {
    bodyParams['dataSetType'] = input.dataSetType;
  }
  if (input.destinationS3BucketName !== undefined) {
    bodyParams['destinationS3BucketName'] = input.destinationS3BucketName;
  }
  if (input.destinationS3Prefix !== undefined) {
    bodyParams['destinationS3Prefix'] = input.destinationS3Prefix;
  }
  if (input.roleNameArn !== undefined) {
    bodyParams['roleNameArn'] = input.roleNameArn;
  }
  if (input.snsTopicArn !== undefined) {
    bodyParams['snsTopicArn'] = input.snsTopicArn;
  }
  return bodyParams;
}

const serializeAws_json1_1StartSupportDataExportRequest = (
  input: StartSupportDataExportRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.customerDefinedValues !== undefined) {
    bodyParams['customerDefinedValues'] = serializeAws_json1_1CustomerDefinedValues(input.customerDefinedValues, context);
  }
  if (input.dataSetType !== undefined) {
    bodyParams['dataSetType'] = input.dataSetType;
  }
  if (input.destinationS3BucketName !== undefined) {
    bodyParams['destinationS3BucketName'] = input.destinationS3BucketName;
  }
  if (input.destinationS3Prefix !== undefined) {
    bodyParams['destinationS3Prefix'] = input.destinationS3Prefix;
  }
  if (input.fromDate !== undefined) {
    bodyParams['fromDate'] = Math.round(input.fromDate.getTime() / 1000);
  }
  if (input.roleNameArn !== undefined) {
    bodyParams['roleNameArn'] = input.roleNameArn;
  }
  if (input.snsTopicArn !== undefined) {
    bodyParams['snsTopicArn'] = input.snsTopicArn;
  }
  return bodyParams;
}

const deserializeAws_json1_1GenerateDataSetResult = (
  output: any,
  context: __SerdeContext
): GenerateDataSetResult => {
  let contents: any = {
    __type: "GenerateDataSetResult",
    dataSetRequestId: undefined,
  };
  if (output.dataSetRequestId !== undefined) {
    contents.dataSetRequestId = output.dataSetRequestId;
  }
  return contents;
}

const deserializeAws_json1_1MarketplaceCommerceAnalyticsException = (
  output: any,
  context: __SerdeContext
): MarketplaceCommerceAnalyticsException => {
  let contents: any = {
    __type: "MarketplaceCommerceAnalyticsException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1StartSupportDataExportResult = (
  output: any,
  context: __SerdeContext
): StartSupportDataExportResult => {
  let contents: any = {
    __type: "StartSupportDataExportResult",
    dataSetRequestId: undefined,
  };
  if (output.dataSetRequestId !== undefined) {
    contents.dataSetRequestId = output.dataSetRequestId;
  }
  return contents;
}

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
