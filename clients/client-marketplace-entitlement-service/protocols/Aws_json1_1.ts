import {
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput,
} from "../commands/GetEntitlementsCommand";
import {
  Entitlement,
  EntitlementValue,
  GetEntitlementsRequest,
  GetEntitlementsResult,
  InternalServiceErrorException,
  InvalidParameterException,
  ThrottlingException,
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

export async function serializeAws_json1_1GetEntitlementsCommand(
  input: GetEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/x-amz-json-1.1";
  headers['X-Amz-Target'] = "AWSMPEntitlementService.GetEntitlements";
  let body: any = {};
  const wrappedBody: any = {
    GetEntitlementsRequest: serializeAws_json1_1GetEntitlementsRequest(input, context),
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEntitlements",
    headers: headers,
    body: body,
  });
}

export async function deserializeAws_json1_1GetEntitlementsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEntitlementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context)
  let contents: any = {};
  contents = deserializeAws_json1_1GetEntitlementsResult(data, context);
  const response: GetEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEntitlementsResult",
    ...contents,
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetEntitlementsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetEntitlementsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split('#');
  errorCode = (errorTypeParts[1] === undefined) ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.entitlement#InternalServiceErrorException":
      response = await deserializeAws_json1_1InternalServiceErrorExceptionResponse(parsedOutput, context);
      break;
    case "InvalidParameterException":
    case "com.amazonaws.marketplace.entitlement#InvalidParameterException":
      response = await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.entitlement#ThrottlingException":
      response = await deserializeAws_json1_1ThrottlingExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.marketplace.entitlement#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(output.body, context);
  const contents: InternalServiceErrorException = {
    __type: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(output.body, context);
  const contents: InvalidParameterException = {
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const deserialized: any = deserializeAws_json1_1ThrottlingException(output.body, context);
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1FilterValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_json1_1GetEntitlementFilters = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1FilterValueList(input[key], context);
  });
  return mapParams;
}

const serializeAws_json1_1GetEntitlementsRequest = (
  input: GetEntitlementsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams['Filter'] = serializeAws_json1_1GetEntitlementFilters(input.Filter, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  if (input.ProductCode !== undefined) {
    bodyParams['ProductCode'] = input.ProductCode;
  }
  return bodyParams;
}

const deserializeAws_json1_1Entitlement = (
  output: any,
  context: __SerdeContext
): Entitlement => {
  let contents: any = {
    __type: "Entitlement",
    CustomerIdentifier: undefined,
    Dimension: undefined,
    ExpirationDate: undefined,
    ProductCode: undefined,
    Value: undefined,
  };
  if (output.CustomerIdentifier !== undefined) {
    contents.CustomerIdentifier = output.CustomerIdentifier;
  }
  if (output.Dimension !== undefined) {
    contents.Dimension = output.Dimension;
  }
  if (output.ExpirationDate !== undefined) {
    contents.ExpirationDate = new Date(output.ExpirationDate % 1 != 0 ? Math.round(output.ExpirationDate * 1000) : output.ExpirationDate);
  }
  if (output.ProductCode !== undefined) {
    contents.ProductCode = output.ProductCode;
  }
  if (output.Value !== undefined) {
    contents.Value = deserializeAws_json1_1EntitlementValue(output.Value, context);
  }
  return contents;
}

const deserializeAws_json1_1EntitlementList = (
  output: any,
  context: __SerdeContext
): Array<Entitlement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Entitlement(entry, context)
  );
}

const deserializeAws_json1_1EntitlementValue = (
  output: any,
  context: __SerdeContext
): EntitlementValue => {
  let contents: any = {
    __type: "EntitlementValue",
    BooleanValue: undefined,
    DoubleValue: undefined,
    IntegerValue: undefined,
    StringValue: undefined,
  };
  if (output.BooleanValue !== undefined) {
    contents.BooleanValue = output.BooleanValue;
  }
  if (output.DoubleValue !== undefined) {
    contents.DoubleValue = output.DoubleValue;
  }
  if (output.IntegerValue !== undefined) {
    contents.IntegerValue = output.IntegerValue;
  }
  if (output.StringValue !== undefined) {
    contents.StringValue = output.StringValue;
  }
  return contents;
}

const deserializeAws_json1_1GetEntitlementsResult = (
  output: any,
  context: __SerdeContext
): GetEntitlementsResult => {
  let contents: any = {
    __type: "GetEntitlementsResult",
    Entitlements: undefined,
    NextToken: undefined,
  };
  if (output.Entitlements !== undefined) {
    contents.Entitlements = deserializeAws_json1_1EntitlementList(output.Entitlements, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
}

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  let contents: any = {
    __type: "InternalServiceErrorException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  return contents;
}

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    message: undefined,
  };
  if (output.message !== undefined) {
    contents.message = output.message;
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
