import {
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput
} from "../commands/DeleteObjectCommand";
import {
  DescribeObjectCommandInput,
  DescribeObjectCommandOutput
} from "../commands/DescribeObjectCommand";
import {
  GetObjectCommandInput,
  GetObjectCommandOutput
} from "../commands/GetObjectCommand";
import {
  ListItemsCommandInput,
  ListItemsCommandOutput
} from "../commands/ListItemsCommand";
import {
  PutObjectCommandInput,
  PutObjectCommandOutput
} from "../commands/PutObjectCommand";
import {
  ContainerNotFoundException,
  InternalServerError,
  Item,
  ObjectNotFoundException,
  RequestedRangeNotSatisfiableException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1DeleteObjectCommand(
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeObjectCommand(
  input: DescribeObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "HEAD",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetObjectCommand(
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.Range !== undefined) {
    headers["Range"] = input.Range;
  }
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListItemsCommand(
  input: ListItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.Path !== undefined) {
    query["Path"] = input.Path;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1PutObjectCommand(
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  headers["x-amz-content-sha256"] = "UNSIGNED_PAYLOAD";
  if (input.CacheControl !== undefined) {
    headers["Cache-Control"] = input.CacheControl;
  }
  if (input.ContentType !== undefined) {
    headers["Content-Type"] = input.ContentType;
  }
  if (input.StorageClass !== undefined) {
    headers["x-amz-storage-class"] = input.StorageClass;
  }
  let resolvedPath = "/{Path+}";
  if (input.Path !== undefined) {
    const labelValue: string = input.Path;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Path.");
    }
    resolvedPath = resolvedPath.replace(
      "{Path+}",
      labelValue
        .split("/")
        .map(segment => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: Path.");
  }
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1DeleteObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteObjectResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastore.object#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ObjectNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1DescribeObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeObjectCommandError(
      output,
      context
    );
  }
  const contents: DescribeObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeObjectResponse",
    CacheControl: undefined,
    ContentLength: undefined,
    ContentType: undefined,
    ETag: undefined,
    LastModified: undefined
  };
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastore.object#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ObjectNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1GetObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
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
    LastModified: undefined
  };
  if (output.headers["cache-control"] !== undefined) {
    contents.CacheControl = output.headers["cache-control"];
  }
  if (output.headers["content-length"] !== undefined) {
    contents.ContentLength = parseInt(output.headers["content-length"], 10);
  }
  if (output.headers["content-range"] !== undefined) {
    contents.ContentRange = output.headers["content-range"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.ContentType = output.headers["content-type"];
  }
  if (output.headers["etag"] !== undefined) {
    contents.ETag = output.headers["etag"];
  }
  if (output.headers["last-modified"] !== undefined) {
    contents.LastModified = new Date(output.headers["last-modified"]);
  }
  const data: any = output.body;
  contents.Body = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastore.object#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ObjectNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestedRangeNotSatisfiableException":
    case "com.amazonaws.mediastore.object#RequestedRangeNotSatisfiableException":
      response = {
        ...(await deserializeAws_restJson1_1RequestedRangeNotSatisfiableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1ListItemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListItemsCommandError(output, context);
  }
  const contents: ListItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListItemsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1_1ItemList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListItemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

export async function deserializeAws_restJson1_1PutObjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutObjectCommandError(output, context);
  }
  const contents: PutObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutObjectResponse",
    ContentSHA256: undefined,
    ETag: undefined,
    StorageClass: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ContentSHA256 !== undefined && data.ContentSHA256 !== null) {
    contents.ContentSHA256 = data.ContentSHA256;
  }
  if (data.ETag !== undefined && data.ETag !== null) {
    contents.ETag = data.ETag;
  }
  if (data.StorageClass !== undefined && data.StorageClass !== null) {
    contents.StorageClass = data.StorageClass;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutObjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastore.object#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ContainerNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastore.object#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1ContainerNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const contents: ContainerNotFoundException = {
    name: "ContainerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ObjectNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const contents: ObjectNotFoundException = {
    name: "ObjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestedRangeNotSatisfiableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RequestedRangeNotSatisfiableException> => {
  const contents: RequestedRangeNotSatisfiableException = {
    name: "RequestedRangeNotSatisfiableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
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
    Type: undefined
  };
  if (output.ContentLength !== undefined && output.ContentLength !== null) {
    contents.ContentLength = output.ContentLength;
  }
  if (output.ContentType !== undefined && output.ContentType !== null) {
    contents.ContentType = output.ContentType;
  }
  if (output.ETag !== undefined && output.ETag !== null) {
    contents.ETag = output.ETag;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = new Date(Math.round(output.LastModified * 1000));
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ItemList = (
  output: any,
  context: __SerdeContext
): Array<Item> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Item(entry, context)
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
