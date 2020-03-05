import {
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput
} from "../commands/DescribeServicesCommand";
import {
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput
} from "../commands/GetAttributeValuesCommand";
import {
  GetProductsCommandInput,
  GetProductsCommandOutput
} from "../commands/GetProductsCommand";
import {
  AttributeValue,
  DescribeServicesRequest,
  DescribeServicesResponse,
  ExpiredNextTokenException,
  Filter,
  GetAttributeValuesRequest,
  GetAttributeValuesResponse,
  GetProductsRequest,
  GetProductsResponse,
  InternalErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  NotFoundException,
  Service
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  LazyJsonString as __LazyJsonString,
  SmithyException as __SmithyException
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1DescribeServicesCommand(
  input: DescribeServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPriceListService.DescribeServices";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAttributeValuesCommand(
  input: GetAttributeValuesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPriceListService.GetAttributeValues";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAttributeValuesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetProductsCommand(
  input: GetProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSPriceListService.GetProducts";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProductsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1DescribeServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeServicesResponse(data, context);
  const response: DescribeServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeServicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServicesCommandOutput> {
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
    case "ExpiredNextTokenException":
    case "com.amazonaws.awspricelistservice#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awspricelistservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awspricelistservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awspricelistservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awspricelistservice#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetAttributeValuesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttributeValuesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAttributeValuesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAttributeValuesResponse(data, context);
  const response: GetAttributeValuesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAttributeValuesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAttributeValuesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAttributeValuesCommandOutput> {
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
    case "ExpiredNextTokenException":
    case "com.amazonaws.awspricelistservice#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awspricelistservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awspricelistservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awspricelistservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awspricelistservice#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetProductsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProductsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetProductsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProductsResponse(data, context);
  const response: GetProductsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProductsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetProductsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProductsCommandOutput> {
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
    case "ExpiredNextTokenException":
    case "com.amazonaws.awspricelistservice#ExpiredNextTokenException":
      response = {
        ...(await deserializeAws_json1_1ExpiredNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awspricelistservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.awspricelistservice#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.awspricelistservice#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.awspricelistservice#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
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

const deserializeAws_json1_1ExpiredNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExpiredNextTokenException(
    body,
    context
  );
  const contents: ExpiredNextTokenException = {
    name: "ExpiredNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(
    body,
    context
  );
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
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

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    body,
    context
  );
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1DescribeServicesRequest = (
  input: DescribeServicesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FormatVersion !== undefined) {
    bodyParams["FormatVersion"] = input.FormatVersion;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Field !== undefined) {
    bodyParams["Field"] = input.Field;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Filter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1GetAttributeValuesRequest = (
  input: GetAttributeValuesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1GetProductsRequest = (
  input: GetProductsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.FormatVersion !== undefined) {
    bodyParams["FormatVersion"] = input.FormatVersion;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const deserializeAws_json1_1AttributeNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AttributeValue = (
  output: any,
  context: __SerdeContext
): AttributeValue => {
  let contents: any = {
    __type: "AttributeValue",
    Value: undefined
  };
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1AttributeValueList = (
  output: any,
  context: __SerdeContext
): Array<AttributeValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttributeValue(entry, context)
  );
};

const deserializeAws_json1_1DescribeServicesResponse = (
  output: any,
  context: __SerdeContext
): DescribeServicesResponse => {
  let contents: any = {
    __type: "DescribeServicesResponse",
    FormatVersion: undefined,
    NextToken: undefined,
    Services: undefined
  };
  if (output.FormatVersion !== undefined && output.FormatVersion !== null) {
    contents.FormatVersion = output.FormatVersion;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Services !== undefined && output.Services !== null) {
    contents.Services = deserializeAws_json1_1ServiceList(
      output.Services,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ExpiredNextTokenException = (
  output: any,
  context: __SerdeContext
): ExpiredNextTokenException => {
  let contents: any = {
    __type: "ExpiredNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1GetAttributeValuesResponse = (
  output: any,
  context: __SerdeContext
): GetAttributeValuesResponse => {
  let contents: any = {
    __type: "GetAttributeValuesResponse",
    AttributeValues: undefined,
    NextToken: undefined
  };
  if (output.AttributeValues !== undefined && output.AttributeValues !== null) {
    contents.AttributeValues = deserializeAws_json1_1AttributeValueList(
      output.AttributeValues,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1GetProductsResponse = (
  output: any,
  context: __SerdeContext
): GetProductsResponse => {
  let contents: any = {
    __type: "GetProductsResponse",
    FormatVersion: undefined,
    NextToken: undefined,
    PriceList: undefined
  };
  if (output.FormatVersion !== undefined && output.FormatVersion !== null) {
    contents.FormatVersion = output.FormatVersion;
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.PriceList !== undefined && output.PriceList !== null) {
    contents.PriceList = deserializeAws_json1_1PriceList(
      output.PriceList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PriceList = (
  output: any,
  context: __SerdeContext
): Array<__LazyJsonString | string> => {
  return (output || []).map((entry: any) => new __LazyJsonString(entry));
};

const deserializeAws_json1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  let contents: any = {
    __type: "Service",
    AttributeNames: undefined,
    ServiceCode: undefined
  };
  if (output.AttributeNames !== undefined && output.AttributeNames !== null) {
    contents.AttributeNames = deserializeAws_json1_1AttributeNameList(
      output.AttributeNames,
      context
    );
  }
  if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
    contents.ServiceCode = output.ServiceCode;
  }
  return contents;
};

const deserializeAws_json1_1ServiceList = (
  output: any,
  context: __SerdeContext
): Array<Service> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Service(entry, context)
  );
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
