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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateLedgerCommand(
  input: CreateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ledgers";
  let body: any = {};
  const bodyParams: any = {};
  if (input.DeletionProtection !== undefined) {
    bodyParams["DeletionProtection"] = input.DeletionProtection;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.PermissionsMode !== undefined) {
    bodyParams["PermissionsMode"] = input.PermissionsMode;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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

export async function serializeAws_restJson1_1DeleteLedgerCommand(
  input: DeleteLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeJournalS3ExportCommand(
  input: DescribeJournalS3ExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ledgers/{Name}/journal-s3-exports/{ExportId}";
  if (input.ExportId !== undefined) {
    const labelValue: any = input.ExportId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExportId.");
    }
    resolvedPath = resolvedPath.replace("{ExportId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ExportId.");
  }
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeLedgerCommand(
  input: DescribeLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ExportJournalToS3Command(
  input: ExportJournalToS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ledgers/{Name}/journal-s3-exports";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ExclusiveEndTime !== undefined) {
    bodyParams["ExclusiveEndTime"] = Math.round(
      input.ExclusiveEndTime.getTime() / 1000
    );
  }
  if (input.InclusiveStartTime !== undefined) {
    bodyParams["InclusiveStartTime"] = Math.round(
      input.InclusiveStartTime.getTime() / 1000
    );
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.S3ExportConfiguration !== undefined) {
    bodyParams[
      "S3ExportConfiguration"
    ] = serializeAws_restJson1_1S3ExportConfiguration(
      input.S3ExportConfiguration,
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

export async function serializeAws_restJson1_1GetBlockCommand(
  input: GetBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ledgers/{Name}/block";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.BlockAddress !== undefined) {
    bodyParams["BlockAddress"] = serializeAws_restJson1_1ValueHolder(
      input.BlockAddress,
      context
    );
  }
  if (input.DigestTipAddress !== undefined) {
    bodyParams["DigestTipAddress"] = serializeAws_restJson1_1ValueHolder(
      input.DigestTipAddress,
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

export async function serializeAws_restJson1_1GetDigestCommand(
  input: GetDigestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ledgers/{Name}/digest";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetRevisionCommand(
  input: GetRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ledgers/{Name}/revision";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.BlockAddress !== undefined) {
    bodyParams["BlockAddress"] = serializeAws_restJson1_1ValueHolder(
      input.BlockAddress,
      context
    );
  }
  if (input.DigestTipAddress !== undefined) {
    bodyParams["DigestTipAddress"] = serializeAws_restJson1_1ValueHolder(
      input.DigestTipAddress,
      context
    );
  }
  if (input.DocumentId !== undefined) {
    bodyParams["DocumentId"] = input.DocumentId;
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

export async function serializeAws_restJson1_1ListJournalS3ExportsCommand(
  input: ListJournalS3ExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/journal-s3-exports";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListJournalS3ExportsForLedgerCommand(
  input: ListJournalS3ExportsForLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ledgers/{Name}/journal-s3-exports";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListLedgersCommand(
  input: ListLedgersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/ledgers";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["max_results"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["next_token"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateLedgerCommand(
  input: UpdateLedgerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ledgers/{Name}";
  if (input.Name !== undefined) {
    const labelValue: any = input.Name.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.DeletionProtection !== undefined) {
    bodyParams["DeletionProtection"] = input.DeletionProtection;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PATCH",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateLedgerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateLedgerCommandError(output, context);
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
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      data.CreationDateTime % 1 != 0
        ? Math.round(data.CreationDateTime * 1000)
        : data.CreationDateTime
    );
  }
  if (data.DeletionProtection !== undefined) {
    contents.DeletionProtection = data.DeletionProtection;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateLedgerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLedgerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.ledger.v20190102#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.ledger.v20190102#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ledger.v20190102#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteLedgerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLedgerCommandError(output, context);
  }
  const contents: DeleteLedgerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteLedgerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLedgerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.ledger.v20190102#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.ledger.v20190102#ResourcePreconditionNotMetException":
      response = await deserializeAws_restJson1_1ResourcePreconditionNotMetExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeJournalS3ExportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeJournalS3ExportCommandError(
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
  if (data.ExportDescription !== undefined) {
    contents.ExportDescription = deserializeAws_restJson1_1JournalS3ExportDescription(
      data.ExportDescription,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeJournalS3ExportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJournalS3ExportCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeLedgerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeLedgerCommandError(
      output,
      context
    );
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
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      data.CreationDateTime % 1 != 0
        ? Math.round(data.CreationDateTime * 1000)
        : data.CreationDateTime
    );
  }
  if (data.DeletionProtection !== undefined) {
    contents.DeletionProtection = data.DeletionProtection;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeLedgerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLedgerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ExportJournalToS3Command(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ExportJournalToS3CommandError(
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
  if (data.ExportId !== undefined) {
    contents.ExportId = data.ExportId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExportJournalToS3CommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportJournalToS3CommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.ledger.v20190102#ResourcePreconditionNotMetException":
      response = await deserializeAws_restJson1_1ResourcePreconditionNotMetExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBlockCommandError(output, context);
  }
  const contents: GetBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBlockResponse",
    Block: undefined,
    Proof: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Block !== undefined) {
    contents.Block = deserializeAws_restJson1_1ValueHolder(data.Block, context);
  }
  if (data.Proof !== undefined) {
    contents.Proof = deserializeAws_restJson1_1ValueHolder(data.Proof, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBlockCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.ledger.v20190102#ResourcePreconditionNotMetException":
      response = await deserializeAws_restJson1_1ResourcePreconditionNotMetExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetDigestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDigestCommandError(output, context);
  }
  const contents: GetDigestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDigestResponse",
    Digest: undefined,
    DigestTipAddress: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Digest !== undefined) {
    contents.Digest = context.base64Decoder(data.Digest);
  }
  if (data.DigestTipAddress !== undefined) {
    contents.DigestTipAddress = deserializeAws_restJson1_1ValueHolder(
      data.DigestTipAddress,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDigestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDigestCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.ledger.v20190102#ResourcePreconditionNotMetException":
      response = await deserializeAws_restJson1_1ResourcePreconditionNotMetExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRevisionCommandError(output, context);
  }
  const contents: GetRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRevisionResponse",
    Proof: undefined,
    Revision: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Proof !== undefined) {
    contents.Proof = deserializeAws_restJson1_1ValueHolder(data.Proof, context);
  }
  if (data.Revision !== undefined) {
    contents.Revision = deserializeAws_restJson1_1ValueHolder(
      data.Revision,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ResourcePreconditionNotMetException":
    case "com.amazonaws.ledger.v20190102#ResourcePreconditionNotMetException":
      response = await deserializeAws_restJson1_1ResourcePreconditionNotMetExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListJournalS3ExportsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJournalS3ExportsCommandError(
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
  if (data.JournalS3Exports !== undefined) {
    contents.JournalS3Exports = deserializeAws_restJson1_1JournalS3ExportList(
      data.JournalS3Exports,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJournalS3ExportsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListJournalS3ExportsForLedgerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJournalS3ExportsForLedgerCommandError(
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
  if (data.JournalS3Exports !== undefined) {
    contents.JournalS3Exports = deserializeAws_restJson1_1JournalS3ExportList(
      data.JournalS3Exports,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListJournalS3ExportsForLedgerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJournalS3ExportsForLedgerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListLedgersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListLedgersCommandError(output, context);
  }
  const contents: ListLedgersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLedgersResponse",
    Ledgers: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Ledgers !== undefined) {
    contents.Ledgers = deserializeAws_restJson1_1LedgerList(
      data.Ledgers,
      context
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListLedgersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLedgersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
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
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateLedgerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateLedgerCommandError(output, context);
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
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      data.CreationDateTime % 1 != 0
        ? Math.round(data.CreationDateTime * 1000)
        : data.CreationDateTime
    );
  }
  if (data.DeletionProtection !== undefined) {
    contents.DeletionProtection = data.DeletionProtection;
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.State !== undefined) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateLedgerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLedgerCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.ledger.v20190102#InvalidParameterException":
      response = await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
        output,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.ledger.v20190102#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
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
        __type: `com.amazonaws.ledger.v20190102#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    __type: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ParameterName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ParameterName !== undefined) {
    contents.ParameterName = data.ParameterName;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourcePreconditionNotMetExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourcePreconditionNotMetException> => {
  const contents: ResourcePreconditionNotMetException = {
    name: "ResourcePreconditionNotMetException",
    __type: "ResourcePreconditionNotMetException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    ResourceName: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined) {
    contents.ResourceName = data.ResourceName;
  }
  if (data.ResourceType !== undefined) {
    contents.ResourceType = data.ResourceType;
  }
  return contents;
};

const serializeAws_restJson1_1S3EncryptionConfiguration = (
  input: S3EncryptionConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KmsKeyArn !== undefined) {
    bodyParams["KmsKeyArn"] = input.KmsKeyArn;
  }
  if (input.ObjectEncryptionType !== undefined) {
    bodyParams["ObjectEncryptionType"] = input.ObjectEncryptionType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3ExportConfiguration = (
  input: S3ExportConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Bucket !== undefined) {
    bodyParams["Bucket"] = input.Bucket;
  }
  if (input.EncryptionConfiguration !== undefined) {
    bodyParams[
      "EncryptionConfiguration"
    ] = serializeAws_restJson1_1S3EncryptionConfiguration(
      input.EncryptionConfiguration,
      context
    );
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1ValueHolder = (
  input: ValueHolder,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.IonText !== undefined) {
    bodyParams["IonText"] = input.IonText;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1JournalS3ExportDescription = (
  output: any,
  context: __SerdeContext
): JournalS3ExportDescription => {
  let contents: any = {
    __type: "JournalS3ExportDescription",
    ExclusiveEndTime: undefined,
    ExportCreationTime: undefined,
    ExportId: undefined,
    InclusiveStartTime: undefined,
    LedgerName: undefined,
    RoleArn: undefined,
    S3ExportConfiguration: undefined,
    Status: undefined
  };
  if (output.ExclusiveEndTime !== undefined) {
    contents.ExclusiveEndTime = new Date(
      output.ExclusiveEndTime % 1 != 0
        ? Math.round(output.ExclusiveEndTime * 1000)
        : output.ExclusiveEndTime
    );
  }
  if (output.ExportCreationTime !== undefined) {
    contents.ExportCreationTime = new Date(
      output.ExportCreationTime % 1 != 0
        ? Math.round(output.ExportCreationTime * 1000)
        : output.ExportCreationTime
    );
  }
  if (output.ExportId !== undefined) {
    contents.ExportId = output.ExportId;
  }
  if (output.InclusiveStartTime !== undefined) {
    contents.InclusiveStartTime = new Date(
      output.InclusiveStartTime % 1 != 0
        ? Math.round(output.InclusiveStartTime * 1000)
        : output.InclusiveStartTime
    );
  }
  if (output.LedgerName !== undefined) {
    contents.LedgerName = output.LedgerName;
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  if (output.S3ExportConfiguration !== undefined) {
    contents.S3ExportConfiguration = deserializeAws_restJson1_1S3ExportConfiguration(
      output.S3ExportConfiguration,
      context
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1JournalS3ExportList = (
  output: any,
  context: __SerdeContext
): Array<JournalS3ExportDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1JournalS3ExportDescription(entry, context)
  );
};

const deserializeAws_restJson1_1LedgerList = (
  output: any,
  context: __SerdeContext
): Array<LedgerSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LedgerSummary(entry, context)
  );
};

const deserializeAws_restJson1_1LedgerSummary = (
  output: any,
  context: __SerdeContext
): LedgerSummary => {
  let contents: any = {
    __type: "LedgerSummary",
    CreationDateTime: undefined,
    Name: undefined,
    State: undefined
  };
  if (output.CreationDateTime !== undefined) {
    contents.CreationDateTime = new Date(
      output.CreationDateTime % 1 != 0
        ? Math.round(output.CreationDateTime * 1000)
        : output.CreationDateTime
    );
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_restJson1_1S3EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): S3EncryptionConfiguration => {
  let contents: any = {
    __type: "S3EncryptionConfiguration",
    KmsKeyArn: undefined,
    ObjectEncryptionType: undefined
  };
  if (output.KmsKeyArn !== undefined) {
    contents.KmsKeyArn = output.KmsKeyArn;
  }
  if (output.ObjectEncryptionType !== undefined) {
    contents.ObjectEncryptionType = output.ObjectEncryptionType;
  }
  return contents;
};

const deserializeAws_restJson1_1S3ExportConfiguration = (
  output: any,
  context: __SerdeContext
): S3ExportConfiguration => {
  let contents: any = {
    __type: "S3ExportConfiguration",
    Bucket: undefined,
    EncryptionConfiguration: undefined,
    Prefix: undefined
  };
  if (output.Bucket !== undefined) {
    contents.Bucket = output.Bucket;
  }
  if (output.EncryptionConfiguration !== undefined) {
    contents.EncryptionConfiguration = deserializeAws_restJson1_1S3EncryptionConfiguration(
      output.EncryptionConfiguration,
      context
    );
  }
  if (output.Prefix !== undefined) {
    contents.Prefix = output.Prefix;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ValueHolder = (
  output: any,
  context: __SerdeContext
): ValueHolder => {
  let contents: any = {
    __type: "ValueHolder",
    IonText: undefined
  };
  if (output.IonText !== undefined) {
    contents.IonText = output.IonText;
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
