import {
  CreateLedgerCommandInput,
  CreateLedgerCommandOutput
} from "../commands/CreateLedgerCommand";
import {
  DeleteLedgerCommandInput,
  DeleteLedgerCommandOutput
} from "../commands/DeleteLedgerCommand";
import {
  DescribeJournalS3ExportCommandInput,
  DescribeJournalS3ExportCommandOutput
} from "../commands/DescribeJournalS3ExportCommand";
import {
  DescribeLedgerCommandInput,
  DescribeLedgerCommandOutput
} from "../commands/DescribeLedgerCommand";
import {
  ExportJournalToS3CommandInput,
  ExportJournalToS3CommandOutput
} from "../commands/ExportJournalToS3Command";
import {
  GetBlockCommandInput,
  GetBlockCommandOutput
} from "../commands/GetBlockCommand";
import {
  GetDigestCommandInput,
  GetDigestCommandOutput
} from "../commands/GetDigestCommand";
import {
  GetRevisionCommandInput,
  GetRevisionCommandOutput
} from "../commands/GetRevisionCommand";
import {
  ListJournalS3ExportsCommandInput,
  ListJournalS3ExportsCommandOutput
} from "../commands/ListJournalS3ExportsCommand";
import {
  ListJournalS3ExportsForLedgerCommandInput,
  ListJournalS3ExportsForLedgerCommandOutput
} from "../commands/ListJournalS3ExportsForLedgerCommand";
import {
  ListLedgersCommandInput,
  ListLedgersCommandOutput
} from "../commands/ListLedgersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateLedgerCommandInput,
  UpdateLedgerCommandOutput
} from "../commands/UpdateLedgerCommand";
import {
  InvalidParameterException,
  JournalS3ExportDescription,
  LedgerSummary,
  LimitExceededException,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourcePreconditionNotMetException,
  S3EncryptionConfiguration,
  S3ExportConfiguration,
  ValueHolder
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

export const serializeAws_restJson1CreateLedgerCommand = async (
  input: CreateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ledgers";
  let body: any;
  body = JSON.stringify({
    ...(input.DeletionProtection !== undefined && {
      DeletionProtection: input.DeletionProtection
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.PermissionsMode !== undefined && {
      PermissionsMode: input.PermissionsMode
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
    })
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

export const serializeAws_restJson1DeleteLedgerCommand = async (
  input: DeleteLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1DescribeJournalS3ExportCommand = async (
  input: DescribeJournalS3ExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ledgers/{Name}/journal-s3-exports/{ExportId}";
  if (input.ExportId !== undefined) {
    const labelValue: string = input.ExportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExportId.");
    }
    resolvedPath = resolvedPath.replace(
      "{ExportId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ExportId.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1DescribeLedgerCommand = async (
  input: DescribeLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1ExportJournalToS3Command = async (
  input: ExportJournalToS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ledgers/{Name}/journal-s3-exports";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ExclusiveEndTime !== undefined && {
      ExclusiveEndTime: Math.round(input.ExclusiveEndTime.getTime() / 1000)
    }),
    ...(input.InclusiveStartTime !== undefined && {
      InclusiveStartTime: Math.round(input.InclusiveStartTime.getTime() / 1000)
    }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.S3ExportConfiguration !== undefined && {
      S3ExportConfiguration: serializeAws_restJson1S3ExportConfiguration(
        input.S3ExportConfiguration,
        context
      )
    })
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

export const serializeAws_restJson1GetBlockCommand = async (
  input: GetBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ledgers/{Name}/block";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BlockAddress !== undefined && {
      BlockAddress: serializeAws_restJson1ValueHolder(
        input.BlockAddress,
        context
      )
    }),
    ...(input.DigestTipAddress !== undefined && {
      DigestTipAddress: serializeAws_restJson1ValueHolder(
        input.DigestTipAddress,
        context
      )
    })
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

export const serializeAws_restJson1GetDigestCommand = async (
  input: GetDigestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ledgers/{Name}/digest";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
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

export const serializeAws_restJson1GetRevisionCommand = async (
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ledgers/{Name}/revision";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BlockAddress !== undefined && {
      BlockAddress: serializeAws_restJson1ValueHolder(
        input.BlockAddress,
        context
      )
    }),
    ...(input.DigestTipAddress !== undefined && {
      DigestTipAddress: serializeAws_restJson1ValueHolder(
        input.DigestTipAddress,
        context
      )
    }),
    ...(input.DocumentId !== undefined && { DocumentId: input.DocumentId })
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

export const serializeAws_restJson1ListJournalS3ExportsCommand = async (
  input: ListJournalS3ExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/journal-s3-exports";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      max_results: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken })
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

export const serializeAws_restJson1ListJournalS3ExportsForLedgerCommand = async (
  input: ListJournalS3ExportsForLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ledgers/{Name}/journal-s3-exports";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && {
      max_results: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken })
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

export const serializeAws_restJson1ListLedgersCommand = async (
  input: ListLedgersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/ledgers";
  const query: any = {
    ...(input.MaxResults !== undefined && {
      max_results: input.MaxResults.toString()
    }),
    ...(input.NextToken !== undefined && { next_token: input.NextToken })
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
    })
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1UpdateLedgerCommand = async (
  input: UpdateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.DeletionProtection !== undefined && {
      DeletionProtection: input.DeletionProtection
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1CreateLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateLedgerCommandError(output, context);
  }
  const contents: CreateLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLedgerResponse",
    Arn: undefined,
    CreationDateTime: undefined,
    DeletionProtection: undefined,
    Name: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
    contents.CreationDateTime = new Date(
      Math.round(data.CreationDateTime * 1000)
    );
  }
  if (
    data.DeletionProtection !== undefined &&
    data.DeletionProtection !== null
  ) {
    contents.DeletionProtection = data.DeletionProtection;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.qldb#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.qldb#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.qldb#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
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

export const deserializeAws_restJson1DeleteLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteLedgerCommandError(output, context);
  }
  const contents: DeleteLedgerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.qldb#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(
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

export const deserializeAws_restJson1DescribeJournalS3ExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeJournalS3ExportCommandError(
      output,
      context
    );
  }
  const contents: DescribeJournalS3ExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeJournalS3ExportResponse",
    ExportDescription: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ExportDescription !== undefined && data.ExportDescription !== null) {
    contents.ExportDescription = deserializeAws_restJson1JournalS3ExportDescription(
      data.ExportDescription,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJournalS3ExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1DescribeLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeLedgerCommandError(output, context);
  }
  const contents: DescribeLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLedgerResponse",
    Arn: undefined,
    CreationDateTime: undefined,
    DeletionProtection: undefined,
    Name: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
    contents.CreationDateTime = new Date(
      Math.round(data.CreationDateTime * 1000)
    );
  }
  if (
    data.DeletionProtection !== undefined &&
    data.DeletionProtection !== null
  ) {
    contents.DeletionProtection = data.DeletionProtection;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1ExportJournalToS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ExportJournalToS3CommandError(
      output,
      context
    );
  }
  const contents: ExportJournalToS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportJournalToS3Response",
    ExportId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ExportId !== undefined && data.ExportId !== null) {
    contents.ExportId = data.ExportId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportJournalToS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(
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

export const deserializeAws_restJson1GetBlockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetBlockCommandError(output, context);
  }
  const contents: GetBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBlockResponse",
    Block: undefined,
    Proof: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Block !== undefined && data.Block !== null) {
    contents.Block = deserializeAws_restJson1ValueHolder(data.Block, context);
  }
  if (data.Proof !== undefined && data.Proof !== null) {
    contents.Proof = deserializeAws_restJson1ValueHolder(data.Proof, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBlockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(
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

export const deserializeAws_restJson1GetDigestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDigestCommandError(output, context);
  }
  const contents: GetDigestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDigestResponse",
    Digest: undefined,
    DigestTipAddress: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Digest !== undefined && data.Digest !== null) {
    contents.Digest = context.base64Decoder(data.Digest);
  }
  if (data.DigestTipAddress !== undefined && data.DigestTipAddress !== null) {
    contents.DigestTipAddress = deserializeAws_restJson1ValueHolder(
      data.DigestTipAddress,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDigestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(
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

export const deserializeAws_restJson1GetRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetRevisionCommandError(output, context);
  }
  const contents: GetRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRevisionResponse",
    Proof: undefined,
    Revision: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Proof !== undefined && data.Proof !== null) {
    contents.Proof = deserializeAws_restJson1ValueHolder(data.Proof, context);
  }
  if (data.Revision !== undefined && data.Revision !== null) {
    contents.Revision = deserializeAws_restJson1ValueHolder(
      data.Revision,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.qldb#ResourcePreconditionNotMetException":
      response = {
        ...(await deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse(
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

export const deserializeAws_restJson1ListJournalS3ExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJournalS3ExportsCommandError(
      output,
      context
    );
  }
  const contents: ListJournalS3ExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJournalS3ExportsResponse",
    JournalS3Exports: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.JournalS3Exports !== undefined && data.JournalS3Exports !== null) {
    contents.JournalS3Exports = deserializeAws_restJson1JournalS3ExportList(
      data.JournalS3Exports,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJournalS3ExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError(
      output,
      context
    );
  }
  const contents: ListJournalS3ExportsForLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJournalS3ExportsForLedgerResponse",
    JournalS3Exports: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.JournalS3Exports !== undefined && data.JournalS3Exports !== null) {
    contents.JournalS3Exports = deserializeAws_restJson1JournalS3ExportList(
      data.JournalS3Exports,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJournalS3ExportsForLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListLedgersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListLedgersCommandError(output, context);
  }
  const contents: ListLedgersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLedgersResponse",
    Ledgers: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Ledgers !== undefined && data.Ledgers !== null) {
    contents.Ledgers = deserializeAws_restJson1LedgerList(
      data.Ledgers,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLedgersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_restJson1UpdateLedgerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateLedgerCommandError(output, context);
  }
  const contents: UpdateLedgerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateLedgerResponse",
    Arn: undefined,
    CreationDateTime: undefined,
    DeletionProtection: undefined,
    Name: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.CreationDateTime !== undefined && data.CreationDateTime !== null) {
    contents.CreationDateTime = new Date(
      Math.round(data.CreationDateTime * 1000)
    );
  }
  if (
    data.DeletionProtection !== undefined &&
    data.DeletionProtection !== null
  ) {
    contents.DeletionProtection = data.DeletionProtection;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLedgerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.qldb#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.qldb#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
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

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ParameterName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ParameterName !== undefined && data.ParameterName !== null) {
    contents.ParameterName = data.ParameterName;
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1ResourcePreconditionNotMetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePreconditionNotMetException> => {
  const contents: ResourcePreconditionNotMetException = {
    name: "ResourcePreconditionNotMetException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const serializeAws_restJson1S3EncryptionConfiguration = (
  input: S3EncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyArn !== undefined && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.ObjectEncryptionType !== undefined && {
      ObjectEncryptionType: input.ObjectEncryptionType
    })
  };
};

const serializeAws_restJson1S3ExportConfiguration = (
  input: S3ExportConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket !== undefined && { Bucket: input.Bucket }),
    ...(input.EncryptionConfiguration !== undefined && {
      EncryptionConfiguration: serializeAws_restJson1S3EncryptionConfiguration(
        input.EncryptionConfiguration,
        context
      )
    }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix })
  };
};

const serializeAws_restJson1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1ValueHolder = (
  input: ValueHolder,
  context: __SerdeContext
): any => {
  return {
    ...(input.IonText !== undefined && { IonText: input.IonText })
  };
};

const deserializeAws_restJson1JournalS3ExportDescription = (
  output: any,
  context: __SerdeContext
): JournalS3ExportDescription => {
  return {
    __type: "JournalS3ExportDescription",
    ExclusiveEndTime:
      output.ExclusiveEndTime !== undefined && output.ExclusiveEndTime !== null
        ? new Date(Math.round(output.ExclusiveEndTime * 1000))
        : undefined,
    ExportCreationTime:
      output.ExportCreationTime !== undefined &&
      output.ExportCreationTime !== null
        ? new Date(Math.round(output.ExportCreationTime * 1000))
        : undefined,
    ExportId:
      output.ExportId !== undefined && output.ExportId !== null
        ? output.ExportId
        : undefined,
    InclusiveStartTime:
      output.InclusiveStartTime !== undefined &&
      output.InclusiveStartTime !== null
        ? new Date(Math.round(output.InclusiveStartTime * 1000))
        : undefined,
    LedgerName:
      output.LedgerName !== undefined && output.LedgerName !== null
        ? output.LedgerName
        : undefined,
    RoleArn:
      output.RoleArn !== undefined && output.RoleArn !== null
        ? output.RoleArn
        : undefined,
    S3ExportConfiguration:
      output.S3ExportConfiguration !== undefined &&
      output.S3ExportConfiguration !== null
        ? deserializeAws_restJson1S3ExportConfiguration(
            output.S3ExportConfiguration,
            context
          )
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_restJson1JournalS3ExportList = (
  output: any,
  context: __SerdeContext
): JournalS3ExportDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1JournalS3ExportDescription(entry, context)
  );
};

const deserializeAws_restJson1LedgerList = (
  output: any,
  context: __SerdeContext
): LedgerSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1LedgerSummary(entry, context)
  );
};

const deserializeAws_restJson1LedgerSummary = (
  output: any,
  context: __SerdeContext
): LedgerSummary => {
  return {
    __type: "LedgerSummary",
    CreationDateTime:
      output.CreationDateTime !== undefined && output.CreationDateTime !== null
        ? new Date(Math.round(output.CreationDateTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_restJson1S3EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): S3EncryptionConfiguration => {
  return {
    __type: "S3EncryptionConfiguration",
    KmsKeyArn:
      output.KmsKeyArn !== undefined && output.KmsKeyArn !== null
        ? output.KmsKeyArn
        : undefined,
    ObjectEncryptionType:
      output.ObjectEncryptionType !== undefined &&
      output.ObjectEncryptionType !== null
        ? output.ObjectEncryptionType
        : undefined
  } as any;
};

const deserializeAws_restJson1S3ExportConfiguration = (
  output: any,
  context: __SerdeContext
): S3ExportConfiguration => {
  return {
    __type: "S3ExportConfiguration",
    Bucket:
      output.Bucket !== undefined && output.Bucket !== null
        ? output.Bucket
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration !== undefined &&
      output.EncryptionConfiguration !== null
        ? deserializeAws_restJson1S3EncryptionConfiguration(
            output.EncryptionConfiguration,
            context
          )
        : undefined,
    Prefix:
      output.Prefix !== undefined && output.Prefix !== null
        ? output.Prefix
        : undefined
  } as any;
};

const deserializeAws_restJson1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1ValueHolder = (
  output: any,
  context: __SerdeContext
): ValueHolder => {
  return {
    __type: "ValueHolder",
    IonText:
      output.IonText !== undefined && output.IonText !== null
        ? output.IonText
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
