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

export const serializeAws_restJson1DeleteObjectCommand = async (
  input: DeleteObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeObjectCommand = async (
  input: DescribeObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "HEAD",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetObjectCommand = async (
  input: GetObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.Range) && { Range: input.Range! })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListItemsCommand = async (
  input: ListItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Path !== undefined && { Path: input.Path })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1PutObjectCommand = async (
  input: PutObjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    "x-amz-content-sha256": "UNSIGNED_PAYLOAD",
    ...(isSerializableHeaderValue(input.CacheControl) && {
      "Cache-Control": input.CacheControl!
    }),
    ...(isSerializableHeaderValue(input.ContentType) && {
      "Content-Type": input.ContentType!
    }),
    ...(isSerializableHeaderValue(input.StorageClass) && {
      "x-amz-storage-class": input.StorageClass!
    })
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1DeleteObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteObjectCommandError(output, context);
  }
  const contents: DeleteObjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteObjectResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ObjectNotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeObjectCommandError(output, context);
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
};

const deserializeAws_restJson1DescribeObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ObjectNotFoundExceptionResponse(
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

export const deserializeAws_restJson1GetObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetObjectCommandError(output, context);
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
};

const deserializeAws_restJson1GetObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ObjectNotFoundException":
    case "com.amazonaws.mediastoredata#ObjectNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ObjectNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestedRangeNotSatisfiableException":
    case "com.amazonaws.mediastoredata#RequestedRangeNotSatisfiableException":
      response = {
        ...(await deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionResponse(
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

export const deserializeAws_restJson1ListItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListItemsCommandError(output, context);
  }
  const contents: ListItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListItemsResponse",
    Items: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Items !== undefined && data.Items !== null) {
    contents.Items = deserializeAws_restJson1ItemList(data.Items, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

export const deserializeAws_restJson1PutObjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutObjectCommandError(output, context);
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
};

const deserializeAws_restJson1PutObjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutObjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ContainerNotFoundException":
    case "com.amazonaws.mediastoredata#ContainerNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ContainerNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerError":
    case "com.amazonaws.mediastoredata#InternalServerError":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorResponse(
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

const deserializeAws_restJson1ContainerNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ContainerNotFoundException> => {
  const contents: ContainerNotFoundException = {
    name: "ContainerNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const contents: InternalServerError = {
    name: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ObjectNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ObjectNotFoundException> => {
  const contents: ObjectNotFoundException = {
    name: "ObjectNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1RequestedRangeNotSatisfiableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestedRangeNotSatisfiableException> => {
  const contents: RequestedRangeNotSatisfiableException = {
    name: "RequestedRangeNotSatisfiableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1Item = (
  output: any,
  context: __SerdeContext
): Item => {
  return {
    __type: "Item",
    ContentLength:
      output.ContentLength !== undefined && output.ContentLength !== null
        ? output.ContentLength
        : undefined,
    ContentType:
      output.ContentType !== undefined && output.ContentType !== null
        ? output.ContentType
        : undefined,
    ETag:
      output.ETag !== undefined && output.ETag !== null
        ? output.ETag
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? new Date(Math.round(output.LastModified * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1ItemList = (
  output: any,
  context: __SerdeContext
): Item[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Item(entry, context)
  );
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
