import {
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "../commands/DeleteObjectCommand";
import {
  DescribeObjectCommandInput,
  DescribeObjectCommandOutput,
} from "../commands/DescribeObjectCommand";
import {
  GetObjectCommandInput,
  GetObjectCommandOutput,
} from "../commands/GetObjectCommand";
import {
  ListItemsCommandInput,
  ListItemsCommandOutput,
} from "../commands/ListItemsCommand";
import {
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "../commands/PutObjectCommand";
import {
  ContainerNotFoundException,
  InternalServerError,
  Item,
  ObjectNotFoundException,
  RequestedRangeNotSatisfiableException,
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

export async function serializeAws_restJson1_1DeleteObjectCommand(
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: any = input.Path.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: Path.');
    }
    resolvedPath = resolvedPath.replace('{Path}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: Path.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1DescribeObjectCommand(
  input: DescribeObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: any = input.Path.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: Path.');
    }
    resolvedPath = resolvedPath.replace('{Path}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: Path.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "HEAD",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1GetObjectCommand(
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  if (input.Range !== undefined) {
    headers["Range"] = input.Range.toString();
  }
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: any = input.Path.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: Path.');
    }
    resolvedPath = resolvedPath.replace('{Path}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: Path.');
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
  });
}

export async function serializeAws_restJson1_1ListItemsCommand(
  input: ListItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "";
  let resolvedPath = "/";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query['MaxResults'] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query['NextToken'] = input.NextToken.toString();
  }
  if (input.Path !== undefined) {
    query['Path'] = input.Path.toString();
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query,
  });
}

export async function serializeAws_restJson1_1PutObjectCommand(
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/octet-stream";
  headers['x-amz-content-sha256'] = 'UNSIGNED_PAYLOAD';
  if (input.CacheControl !== undefined) {
    headers["Cache-Control"] = input.CacheControl.toString();
  }
  if (input.ContentType !== undefined) {
    headers["Content-Type"] = input.ContentType.toString();
  }
  if (input.StorageClass !== undefined) {
    headers["x-amz-storage-class"] = input.StorageClass.toString();
  }
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: any = input.Path.toString();
    if (labelValue.length <= 0) {
      throw new Error('Empty value provided for input HTTP label: Path.');
    }
    resolvedPath = resolvedPath.replace('{Path}', labelValue);
  } else {
    throw new Error('No value provided for input HTTP label: Path.');
  }
  let body: any = {};
  if (input.Body !== undefined) {
    body = input.Body;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function deserializeAws_restJson1_1DeleteObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteObjectResponse",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastore.object#ObjectNotFoundException":
      response = await deserializeAws_restJson1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediastore.object#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeObjectCommandError(output, context);
  }
  const contents: DescribeObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeObjectResponse",
    CacheControl: undefined,
    ContentLength: undefined,
    ContentType: undefined,
    ETag: undefined,
    LastModified: undefined,
  };
  if (output.headers["Cache-Control"] !== undefined) {
    contents.CacheControl = output.headers['Cache-Control'];
  }
  if (output.headers["Content-Length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers['Content-Length'], 10);
  }
  if (output.headers["Content-Type"] !== undefined) {
    contents.ContentType = output.headers['Content-Type'];
  }
  if (output.headers["ETag"] !== undefined) {
    contents.ETag = output.headers['ETag'];
  }
  if (output.headers["Last-Modified"] !== undefined) {
    contents.LastModified = new Date(output.headers['Last-Modified']);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastore.object#ObjectNotFoundException":
      response = await deserializeAws_restJson1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediastore.object#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1GetObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetObjectCommandError(output, context);
  }
  const contents: GetObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetObjectResponse",
    Body: undefined,
    CacheControl: undefined,
    ContentLength: undefined,
    ContentRange: undefined,
    ContentType: undefined,
    ETag: undefined,
    LastModified: undefined,
  };
  if (output.headers["Cache-Control"] !== undefined) {
    contents.CacheControl = output.headers['Cache-Control'];
  }
  if (output.headers["Content-Length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers['Content-Length'], 10);
  }
  if (output.headers["Content-Range"] !== undefined) {
    contents.ContentRange = output.headers['Content-Range'];
  }
  if (output.headers["Content-Type"] !== undefined) {
    contents.ContentType = output.headers['Content-Type'];
  }
  if (output.headers["ETag"] !== undefined) {
    contents.ETag = output.headers['ETag'];
  }
  if (output.headers["Last-Modified"] !== undefined) {
    contents.LastModified = new Date(output.headers['Last-Modified']);
  }
  const data: any = output.body;
  contents.Body = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<GetObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastore.object#ObjectNotFoundException":
      response = await deserializeAws_restJson1_1ObjectNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "RequestedRangeNotSatisfiableException":
    case "com.amazonaws.mediastore.object#RequestedRangeNotSatisfiableException":
      response = await deserializeAws_restJson1_1RequestedRangeNotSatisfiableExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediastore.object#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListItemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListItemsCommandError(output, context);
  }
  const contents: ListItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListItemsResponse",
    Items: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined) {
    contents.Items = deserializeAws_restJson1_1ItemList(data.Items, context);
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListItemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListItemsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediastore.object#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutObjectCommandError(output, context);
  }
  const contents: PutObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutObjectResponse",
    ContentSHA256: undefined,
    ETag: undefined,
    StorageClass: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ContentSHA256 !== undefined) {
    contents.ContentSHA256 = data.ContentSHA256;
  }
  if (data.ETag !== undefined) {
    contents.ETag = data.ETag;
  }
  if (data.StorageClass !== undefined) {
    contents.StorageClass = data.StorageClass;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<PutObjectCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = await deserializeAws_restJson1_1InternalServerErrorResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.mediastore.object#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1ContainerNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const contents: ContainerNotFoundException = {
    __type: "ContainerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ObjectNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const contents: ObjectNotFoundException = {
    __type: "ObjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestedRangeNotSatisfiableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestedRangeNotSatisfiableException> => {
  const contents: RequestedRangeNotSatisfiableException = {
    __type: "RequestedRangeNotSatisfiableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1Item = (
  output: any,
  context: __SerdeContext
): Item => {
  let contents: any = {
    __type: "Item",
    ContentLength: undefined,
    ContentType: undefined,
    ETag: undefined,
    LastModified: undefined,
    Name: undefined,
    Type: undefined,
  };
  if (output.ContentLength !== undefined) {
    contents.ContentLength = output.ContentLength;
  }
  if (output.ContentType !== undefined) {
    contents.ContentType = output.ContentType;
  }
  if (output.ETag !== undefined) {
    contents.ETag = output.ETag;
  }
  if (output.LastModified !== undefined) {
    contents.LastModified = new Date(output.LastModified % 1 != 0 ? Math.round(output.LastModified * 1000) : output.LastModified);
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
}

const deserializeAws_restJson1_1ItemList = (
  output: any,
  context: __SerdeContext
): Array<Item> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Item(entry, context)
  );
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
