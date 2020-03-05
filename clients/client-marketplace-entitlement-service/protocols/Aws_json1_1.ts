import {
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput
} from "../commands/GetEntitlementsCommand";
import {
  Entitlement,
  EntitlementValue,
  GetEntitlementsRequest,
  GetEntitlementsResult,
  InternalServiceErrorException,
  InvalidParameterException,
  ThrottlingException
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

export async function serializeAws_json1_1GetEntitlementsCommand(
  input: GetEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSMPEntitlementService.GetEntitlements";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetEntitlementsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1GetEntitlementsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEntitlementsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEntitlementsResult(data, context);
  const response: GetEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEntitlementsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetEntitlementsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> {
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
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplace.entitlement#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.marketplace.entitlement#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplace.entitlement#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
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

const deserializeAws_json1_1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceErrorException(
    body,
    context
  );
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ThrottlingException(
    body,
    context
  );
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1FilterValueList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GetEntitlementFilters = (
  input: { [key: string]: Array<string> },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = serializeAws_json1_1FilterValueList(input[key], context);
  });
  return mapParams;
};

const serializeAws_json1_1GetEntitlementsRequest = (
  input: GetEntitlementsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1GetEntitlementFilters(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ProductCode !== undefined) {
    bodyParams["ProductCode"] = input.ProductCode;
  }
  return bodyParams;
};

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
    Value: undefined
  };
  if (
    output.CustomerIdentifier !== undefined &&
    output.CustomerIdentifier !== null
  ) {
    contents.CustomerIdentifier = output.CustomerIdentifier;
  }
  if (output.Dimension !== undefined && output.Dimension !== null) {
    contents.Dimension = output.Dimension;
  }
  if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
    contents.ExpirationDate = new Date(
      Math.round(output.ExpirationDate * 1000)
    );
  }
  if (output.ProductCode !== undefined && output.ProductCode !== null) {
    contents.ProductCode = output.ProductCode;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = deserializeAws_json1_1EntitlementValue(
      output.Value,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EntitlementList = (
  output: any,
  context: __SerdeContext
): Array<Entitlement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Entitlement(entry, context)
  );
};

const deserializeAws_json1_1EntitlementValue = (
  output: any,
  context: __SerdeContext
): EntitlementValue => {
  let contents: any = {
    __type: "EntitlementValue",
    BooleanValue: undefined,
    DoubleValue: undefined,
    IntegerValue: undefined,
    StringValue: undefined
  };
  if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
    contents.BooleanValue = output.BooleanValue;
  }
  if (output.DoubleValue !== undefined && output.DoubleValue !== null) {
    contents.DoubleValue = output.DoubleValue;
  }
  if (output.IntegerValue !== undefined && output.IntegerValue !== null) {
    contents.IntegerValue = output.IntegerValue;
  }
  if (output.StringValue !== undefined && output.StringValue !== null) {
    contents.StringValue = output.StringValue;
  }
  return contents;
};

const deserializeAws_json1_1GetEntitlementsResult = (
  output: any,
  context: __SerdeContext
): GetEntitlementsResult => {
  let contents: any = {
    __type: "GetEntitlementsResult",
    Entitlements: undefined,
    NextToken: undefined
  };
  if (output.Entitlements !== undefined && output.Entitlements !== null) {
    contents.Entitlements = deserializeAws_json1_1EntitlementList(
      output.Entitlements,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  let contents: any = {
    __type: "InternalServiceErrorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  let contents: any = {
    __type: "ThrottlingException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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
