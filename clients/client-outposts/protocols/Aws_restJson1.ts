import {
  CreateOutpostCommandInput,
  CreateOutpostCommandOutput
} from "../commands/CreateOutpostCommand";
import {
  GetOutpostCommandInput,
  GetOutpostCommandOutput
} from "../commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput
} from "../commands/GetOutpostInstanceTypesCommand";
import {
  ListOutpostsCommandInput,
  ListOutpostsCommandOutput
} from "../commands/ListOutpostsCommand";
import {
  ListSitesCommandInput,
  ListSitesCommandOutput
} from "../commands/ListSitesCommand";
import {
  AccessDeniedException,
  InstanceTypeItem,
  InternalServerException,
  NotFoundException,
  Outpost,
  ServiceQuotaExceededException,
  Site,
  ValidationException
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

export const serializeAws_restJson1CreateOutpostCommand = async (
  input: CreateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/outposts";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZone !== undefined && {
      AvailabilityZone: input.AvailabilityZone
    }),
    ...(input.AvailabilityZoneId !== undefined && {
      AvailabilityZoneId: input.AvailabilityZoneId
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.SiteId !== undefined && { SiteId: input.SiteId })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetOutpostCommand = async (
  input: GetOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/outposts/{OutpostId}";
  if (input.OutpostId !== undefined) {
    const labelValue: string = input.OutpostId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace(
      "{OutpostId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
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

export const serializeAws_restJson1GetOutpostInstanceTypesCommand = async (
  input: GetOutpostInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/outposts/{OutpostId}/instanceTypes";
  if (input.OutpostId !== undefined) {
    const labelValue: string = input.OutpostId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace(
      "{OutpostId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
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

export const serializeAws_restJson1ListOutpostsCommand = async (
  input: ListOutpostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/outposts";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
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

export const serializeAws_restJson1ListSitesCommand = async (
  input: ListSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/sites";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      MaxResults: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
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

export const deserializeAws_restJson1CreateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateOutpostCommandError(output, context);
  }
  const contents: CreateOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOutpostOutput",
    Outpost: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Outpost !== undefined && data.Outpost !== null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.outposts#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1GetOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetOutpostCommandError(output, context);
  }
  const contents: GetOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOutpostOutput",
    Outpost: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Outpost !== undefined && data.Outpost !== null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1GetOutpostInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetOutpostInstanceTypesCommandError(
      output,
      context
    );
  }
  const contents: GetOutpostInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOutpostInstanceTypesOutput",
    InstanceTypes: undefined,
    NextToken: undefined,
    OutpostArn: undefined,
    OutpostId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.InstanceTypes !== undefined && data.InstanceTypes !== null) {
    contents.InstanceTypes = deserializeAws_restJson1InstanceTypeListDefinition(
      data.InstanceTypes,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.OutpostArn !== undefined && data.OutpostArn !== null) {
    contents.OutpostArn = data.OutpostArn;
  }
  if (data.OutpostId !== undefined && data.OutpostId !== null) {
    contents.OutpostId = data.OutpostId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetOutpostInstanceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListOutpostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListOutpostsCommandError(output, context);
  }
  const contents: ListOutpostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOutpostsOutput",
    NextToken: undefined,
    Outposts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Outposts !== undefined && data.Outposts !== null) {
    contents.Outposts = deserializeAws_restJson1outpostListDefinition(
      data.Outposts,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOutpostsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

export const deserializeAws_restJson1ListSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListSitesCommandError(output, context);
  }
  const contents: ListSitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSitesOutput",
    NextToken: undefined,
    Sites: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Sites !== undefined && data.Sites !== null) {
    contents.Sites = deserializeAws_restJson1siteListDefinition(
      data.Sites,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
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

const deserializeAws_restJson1InstanceTypeItem = (
  output: any,
  context: __SerdeContext
): InstanceTypeItem => {
  return {
    __type: "InstanceTypeItem",
    InstanceType:
      output.InstanceType !== undefined && output.InstanceType !== null
        ? output.InstanceType
        : undefined
  } as any;
};

const deserializeAws_restJson1InstanceTypeListDefinition = (
  output: any,
  context: __SerdeContext
): InstanceTypeItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InstanceTypeItem(entry, context)
  );
};

const deserializeAws_restJson1Outpost = (
  output: any,
  context: __SerdeContext
): Outpost => {
  return {
    __type: "Outpost",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    AvailabilityZoneId:
      output.AvailabilityZoneId !== undefined &&
      output.AvailabilityZoneId !== null
        ? output.AvailabilityZoneId
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    LifeCycleStatus:
      output.LifeCycleStatus !== undefined && output.LifeCycleStatus !== null
        ? output.LifeCycleStatus
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    OutpostArn:
      output.OutpostArn !== undefined && output.OutpostArn !== null
        ? output.OutpostArn
        : undefined,
    OutpostId:
      output.OutpostId !== undefined && output.OutpostId !== null
        ? output.OutpostId
        : undefined,
    OwnerId:
      output.OwnerId !== undefined && output.OwnerId !== null
        ? output.OwnerId
        : undefined,
    SiteId:
      output.SiteId !== undefined && output.SiteId !== null
        ? output.SiteId
        : undefined
  } as any;
};

const deserializeAws_restJson1outpostListDefinition = (
  output: any,
  context: __SerdeContext
): Outpost[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Outpost(entry, context)
  );
};

const deserializeAws_restJson1Site = (
  output: any,
  context: __SerdeContext
): Site => {
  return {
    __type: "Site",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    SiteId:
      output.SiteId !== undefined && output.SiteId !== null
        ? output.SiteId
        : undefined
  } as any;
};

const deserializeAws_restJson1siteListDefinition = (
  output: any,
  context: __SerdeContext
): Site[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Site(entry, context)
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
