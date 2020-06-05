import {
  GetEntitlementsCommandInput,
  GetEntitlementsCommandOutput
} from "../commands/GetEntitlementsCommand";
import {
  Entitlement,
  EntitlementValue,
  GetEntitlementFilterName,
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

export const serializeAws_json1_1GetEntitlementsCommand = async (
  input: GetEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSMPEntitlementService.GetEntitlements"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetEntitlementsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1GetEntitlementsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> => {
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
};

const deserializeAws_json1_1GetEntitlementsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEntitlementsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.marketplaceentitlementservice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.marketplaceentitlementservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.marketplaceentitlementservice#ThrottlingException":
      response = {
        ...(await deserializeAws_json1_1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
};

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
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetEntitlementFilters = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (
      acc: { [key: string]: string[] },
      [key, value]: [GetEntitlementFilterName | string, any]
    ) => ({
      ...acc,
      [key]: serializeAws_json1_1FilterValueList(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1GetEntitlementsRequest = (
  input: GetEntitlementsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filter !== undefined && {
      Filter: serializeAws_json1_1GetEntitlementFilters(input.Filter, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ProductCode !== undefined && { ProductCode: input.ProductCode })
  };
};

const deserializeAws_json1_1Entitlement = (
  output: any,
  context: __SerdeContext
): Entitlement => {
  return {
    __type: "Entitlement",
    CustomerIdentifier:
      output.CustomerIdentifier !== undefined &&
      output.CustomerIdentifier !== null
        ? output.CustomerIdentifier
        : undefined,
    Dimension:
      output.Dimension !== undefined && output.Dimension !== null
        ? output.Dimension
        : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(Math.round(output.ExpirationDate * 1000))
        : undefined,
    ProductCode:
      output.ProductCode !== undefined && output.ProductCode !== null
        ? output.ProductCode
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? deserializeAws_json1_1EntitlementValue(output.Value, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EntitlementList = (
  output: any,
  context: __SerdeContext
): Entitlement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Entitlement(entry, context)
  );
};

const deserializeAws_json1_1EntitlementValue = (
  output: any,
  context: __SerdeContext
): EntitlementValue => {
  return {
    __type: "EntitlementValue",
    BooleanValue:
      output.BooleanValue !== undefined && output.BooleanValue !== null
        ? output.BooleanValue
        : undefined,
    DoubleValue:
      output.DoubleValue !== undefined && output.DoubleValue !== null
        ? output.DoubleValue
        : undefined,
    IntegerValue:
      output.IntegerValue !== undefined && output.IntegerValue !== null
        ? output.IntegerValue
        : undefined,
    StringValue:
      output.StringValue !== undefined && output.StringValue !== null
        ? output.StringValue
        : undefined
  } as any;
};

const deserializeAws_json1_1GetEntitlementsResult = (
  output: any,
  context: __SerdeContext
): GetEntitlementsResult => {
  return {
    __type: "GetEntitlementsResult",
    Entitlements:
      output.Entitlements !== undefined && output.Entitlements !== null
        ? deserializeAws_json1_1EntitlementList(output.Entitlements, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    __type: "InternalServiceErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ThrottlingException = (
  output: any,
  context: __SerdeContext
): ThrottlingException => {
  return {
    __type: "ThrottlingException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
