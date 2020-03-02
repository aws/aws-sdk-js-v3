import {
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput
} from "../commands/AssociateRepositoryCommand";
import {
  DescribeRepositoryAssociationCommandInput,
  DescribeRepositoryAssociationCommandOutput
} from "../commands/DescribeRepositoryAssociationCommand";
import {
  DisassociateRepositoryCommandInput,
  DisassociateRepositoryCommandOutput
} from "../commands/DisassociateRepositoryCommand";
import {
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput
} from "../commands/ListRepositoryAssociationsCommand";
import {
  AccessDeniedException,
  CodeCommitRepository,
  ConflictException,
  InternalServerException,
  NotFoundException,
  Repository,
  RepositoryAssociation,
  RepositoryAssociationSummary,
  ThrottlingException,
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
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1AssociateRepositoryCommand(
  input: AssociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/associations";
  let body: any;
  const bodyParams: any = {};
  if (input.ClientRequestToken === undefined) {
    input.ClientRequestToken = generateIdempotencyToken();
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.Repository !== undefined) {
    bodyParams["Repository"] = serializeAws_restJson1_1Repository(
      input.Repository,
      context
    );
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

export async function serializeAws_restJson1_1DescribeRepositoryAssociationCommand(
  input: DescribeRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/associations/{AssociationArn}";
  if (input.AssociationArn !== undefined) {
    const labelValue: string = input.AssociationArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: AssociationArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{AssociationArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: AssociationArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DisassociateRepositoryCommand(
  input: DisassociateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/associations/{AssociationArn}";
  if (input.AssociationArn !== undefined) {
    const labelValue: string = input.AssociationArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: AssociationArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{AssociationArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: AssociationArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListRepositoryAssociationsCommand(
  input: ListRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/associations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["MaxResults"] = input.MaxResults.toString();
  }
  if (input.Names !== undefined) {
    query["Name"] = input.Names;
  }
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.Owners !== undefined) {
    query["Owner"] = input.Owners;
  }
  if (input.ProviderTypes !== undefined) {
    query["ProviderType"] = input.ProviderTypes;
  }
  if (input.States !== undefined) {
    query["State"] = input.States;
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

export async function deserializeAws_restJson1_1AssociateRepositoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AssociateRepositoryCommandError(
      output,
      context
    );
  }
  const contents: AssociateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateRepositoryResponse",
    RepositoryAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.RepositoryAssociation !== undefined &&
    data.RepositoryAssociation !== null
  ) {
    contents.RepositoryAssociation = deserializeAws_restJson1_1RepositoryAssociation(
      data.RepositoryAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AssociateRepositoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateRepositoryCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.guru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.guru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.guru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.guru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.guru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeRepositoryAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRepositoryAssociationCommandError(
      output,
      context
    );
  }
  const contents: DescribeRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRepositoryAssociationResponse",
    RepositoryAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.RepositoryAssociation !== undefined &&
    data.RepositoryAssociation !== null
  ) {
    contents.RepositoryAssociation = deserializeAws_restJson1_1RepositoryAssociation(
      data.RepositoryAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRepositoryAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.guru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.guru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.guru#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.guru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.guru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DisassociateRepositoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DisassociateRepositoryCommandError(
      output,
      context
    );
  }
  const contents: DisassociateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateRepositoryResponse",
    RepositoryAssociation: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.RepositoryAssociation !== undefined &&
    data.RepositoryAssociation !== null
  ) {
    contents.RepositoryAssociation = deserializeAws_restJson1_1RepositoryAssociation(
      data.RepositoryAssociation,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DisassociateRepositoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRepositoryCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.guru#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1AccessDeniedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.guru#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.guru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.guru#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.guru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.guru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListRepositoryAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRepositoryAssociationsCommandError(
      output,
      context
    );
  }
  const contents: ListRepositoryAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRepositoryAssociationsResponse",
    NextToken: undefined,
    RepositoryAssociationSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.RepositoryAssociationSummaries !== undefined &&
    data.RepositoryAssociationSummaries !== null
  ) {
    contents.RepositoryAssociationSummaries = deserializeAws_restJson1_1RepositoryAssociationSummaries(
      data.RepositoryAssociationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRepositoryAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoryAssociationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.guru#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.guru#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.guru#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
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

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
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

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
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

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
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

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
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

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
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

const serializeAws_restJson1_1CodeCommitRepository = (
  input: CodeCommitRepository,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Repository = (
  input: Repository,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CodeCommit !== undefined) {
    bodyParams["CodeCommit"] = serializeAws_restJson1_1CodeCommitRepository(
      input.CodeCommit,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1RepositoryAssociation = (
  output: any,
  context: __SerdeContext
): RepositoryAssociation => {
  let contents: any = {
    __type: "RepositoryAssociation",
    AssociationArn: undefined,
    AssociationId: undefined,
    CreatedTimeStamp: undefined,
    LastUpdatedTimeStamp: undefined,
    Name: undefined,
    Owner: undefined,
    ProviderType: undefined,
    State: undefined,
    StateReason: undefined
  };
  if (output.AssociationArn !== undefined && output.AssociationArn !== null) {
    contents.AssociationArn = output.AssociationArn;
  }
  if (output.AssociationId !== undefined && output.AssociationId !== null) {
    contents.AssociationId = output.AssociationId;
  }
  if (
    output.CreatedTimeStamp !== undefined &&
    output.CreatedTimeStamp !== null
  ) {
    contents.CreatedTimeStamp = new Date(
      Math.round(output.CreatedTimeStamp * 1000)
    );
  }
  if (
    output.LastUpdatedTimeStamp !== undefined &&
    output.LastUpdatedTimeStamp !== null
  ) {
    contents.LastUpdatedTimeStamp = new Date(
      Math.round(output.LastUpdatedTimeStamp * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Owner !== undefined && output.Owner !== null) {
    contents.Owner = output.Owner;
  }
  if (output.ProviderType !== undefined && output.ProviderType !== null) {
    contents.ProviderType = output.ProviderType;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.StateReason !== undefined && output.StateReason !== null) {
    contents.StateReason = output.StateReason;
  }
  return contents;
};

const deserializeAws_restJson1_1RepositoryAssociationSummaries = (
  output: any,
  context: __SerdeContext
): Array<RepositoryAssociationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RepositoryAssociationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1RepositoryAssociationSummary = (
  output: any,
  context: __SerdeContext
): RepositoryAssociationSummary => {
  let contents: any = {
    __type: "RepositoryAssociationSummary",
    AssociationArn: undefined,
    AssociationId: undefined,
    LastUpdatedTimeStamp: undefined,
    Name: undefined,
    Owner: undefined,
    ProviderType: undefined,
    State: undefined
  };
  if (output.AssociationArn !== undefined && output.AssociationArn !== null) {
    contents.AssociationArn = output.AssociationArn;
  }
  if (output.AssociationId !== undefined && output.AssociationId !== null) {
    contents.AssociationId = output.AssociationId;
  }
  if (
    output.LastUpdatedTimeStamp !== undefined &&
    output.LastUpdatedTimeStamp !== null
  ) {
    contents.LastUpdatedTimeStamp = new Date(
      Math.round(output.LastUpdatedTimeStamp * 1000)
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Owner !== undefined && output.Owner !== null) {
    contents.Owner = output.Owner;
  }
  if (output.ProviderType !== undefined && output.ProviderType !== null) {
    contents.ProviderType = output.ProviderType;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
