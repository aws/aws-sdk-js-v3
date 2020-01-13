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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateOutpostCommand(
  input: CreateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/outposts";
  let body: any = {};
  const bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["AvailabilityZone"] = input.AvailabilityZone;
  }
  if (input.AvailabilityZoneId !== undefined) {
    bodyParams["AvailabilityZoneId"] = input.AvailabilityZoneId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.SiteId !== undefined) {
    bodyParams["SiteId"] = input.SiteId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetOutpostCommand(
  input: GetOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/outposts/{OutpostId}";
  if (input.OutpostId !== undefined) {
    const labelValue: any = input.OutpostId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace("{OutpostId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetOutpostInstanceTypesCommand(
  input: GetOutpostInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/outposts/{OutpostId}/instanceTypes";
  if (input.OutpostId !== undefined) {
    const labelValue: any = input.OutpostId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace("{OutpostId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListOutpostsCommand(
  input: ListOutpostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/outposts";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListSitesCommand(
  input: ListSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/sites";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken.toString();
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

export async function deserializeAws_restJson1_1CreateOutpostCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateOutpostCommandError(output, context);
  }
  const contents: CreateOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateOutpostOutput",
    Outpost: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Outpost !== undefined) {
    contents.Outpost = deserializeAws_restJson1_1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateOutpostCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts.olaf.service.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts.olaf.service.model#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.outposts.olaf.service.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.outposts.olaf.service.model#ServiceQuotaExceededException":
      response = await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.outposts.olaf.service.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.outposts.olaf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetOutpostCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetOutpostCommandError(output, context);
  }
  const contents: GetOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOutpostOutput",
    Outpost: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Outpost !== undefined) {
    contents.Outpost = deserializeAws_restJson1_1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetOutpostCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts.olaf.service.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts.olaf.service.model#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.outposts.olaf.service.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.outposts.olaf.service.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.outposts.olaf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetOutpostInstanceTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1GetOutpostInstanceTypesCommandError(
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
  if (data.InstanceTypes !== undefined) {
    contents.InstanceTypes = deserializeAws_restJson1_1InstanceTypeListDefinition(
      data.InstanceTypes,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.OutpostArn !== undefined) {
    contents.OutpostArn = data.OutpostArn;
  }
  if (data.OutpostId !== undefined) {
    contents.OutpostId = data.OutpostId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetOutpostInstanceTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts.olaf.service.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts.olaf.service.model#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.outposts.olaf.service.model#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.outposts.olaf.service.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.outposts.olaf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListOutpostsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListOutpostsCommandError(output, context);
  }
  const contents: ListOutpostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOutpostsOutput",
    NextToken: undefined,
    Outposts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Outposts !== undefined) {
    contents.Outposts = deserializeAws_restJson1_1outpostListDefinition(
      data.Outposts,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListOutpostsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts.olaf.service.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts.olaf.service.model#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.outposts.olaf.service.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.outposts.olaf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListSitesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListSitesCommandError(output, context);
  }
  const contents: ListSitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSitesOutput",
    NextToken: undefined,
    Sites: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Sites !== undefined) {
    contents.Sites = deserializeAws_restJson1_1siteListDefinition(
      data.Sites,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSitesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts.olaf.service.model#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerException":
    case "com.amazonaws.outposts.olaf.service.model#InternalServerException":
      response = await deserializeAws_restJson1_1InternalServerExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazonaws.outposts.olaf.service.model#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.outposts.olaf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    __type: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    __type: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InstanceTypeItem = (
  output: any,
  context: __SerdeContext
): InstanceTypeItem => {
  let contents: any = {
    __type: "InstanceTypeItem",
    InstanceType: undefined
  };
  if (output.InstanceType !== undefined) {
    contents.InstanceType = output.InstanceType;
  }
  return contents;
};

const deserializeAws_restJson1_1InstanceTypeListDefinition = (
  output: any,
  context: __SerdeContext
): Array<InstanceTypeItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InstanceTypeItem(entry, context)
  );
};

const deserializeAws_restJson1_1Outpost = (
  output: any,
  context: __SerdeContext
): Outpost => {
  let contents: any = {
    __type: "Outpost",
    AvailabilityZone: undefined,
    AvailabilityZoneId: undefined,
    Description: undefined,
    LifeCycleStatus: undefined,
    Name: undefined,
    OutpostArn: undefined,
    OutpostId: undefined,
    OwnerId: undefined,
    SiteId: undefined
  };
  if (output.AvailabilityZone !== undefined) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.AvailabilityZoneId !== undefined) {
    contents.AvailabilityZoneId = output.AvailabilityZoneId;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.LifeCycleStatus !== undefined) {
    contents.LifeCycleStatus = output.LifeCycleStatus;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.OutpostArn !== undefined) {
    contents.OutpostArn = output.OutpostArn;
  }
  if (output.OutpostId !== undefined) {
    contents.OutpostId = output.OutpostId;
  }
  if (output.OwnerId !== undefined) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.SiteId !== undefined) {
    contents.SiteId = output.SiteId;
  }
  return contents;
};

const deserializeAws_restJson1_1Site = (
  output: any,
  context: __SerdeContext
): Site => {
  let contents: any = {
    __type: "Site",
    AccountId: undefined,
    Description: undefined,
    Name: undefined,
    SiteId: undefined
  };
  if (output.AccountId !== undefined) {
    contents.AccountId = output.AccountId;
  }
  if (output.Description !== undefined) {
    contents.Description = output.Description;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.SiteId !== undefined) {
    contents.SiteId = output.SiteId;
  }
  return contents;
};

const deserializeAws_restJson1_1outpostListDefinition = (
  output: any,
  context: __SerdeContext
): Array<Outpost> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Outpost(entry, context)
  );
};

const deserializeAws_restJson1_1siteListDefinition = (
  output: any,
  context: __SerdeContext
): Array<Site> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Site(entry, context)
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
  return context.streamCollector(streamBody) || new Uint8Array();
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
