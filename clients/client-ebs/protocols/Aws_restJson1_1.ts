import {
  GetSnapshotBlockCommandInput,
  GetSnapshotBlockCommandOutput
} from "../commands/GetSnapshotBlockCommand";
import {
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput
} from "../commands/ListChangedBlocksCommand";
import {
  ListSnapshotBlocksCommandInput,
  ListSnapshotBlocksCommandOutput
} from "../commands/ListSnapshotBlocksCommand";
import {
  Block,
  ChangedBlock,
  ResourceNotFoundException,
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

export async function serializeAws_restJson1_1GetSnapshotBlockCommand(
  input: GetSnapshotBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
  if (input.BlockIndex !== undefined) {
    const labelValue: any = input.BlockIndex.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BlockIndex.");
    }
    resolvedPath = resolvedPath.replace("{BlockIndex}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: BlockIndex.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: any = input.SnapshotId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {};
  if (input.BlockToken !== undefined) {
    query["blockToken"] = input.BlockToken.toString();
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

export async function serializeAws_restJson1_1ListChangedBlocksCommand(
  input: ListChangedBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/snapshots/{SecondSnapshotId}/changedblocks";
  if (input.SecondSnapshotId !== undefined) {
    const labelValue: any = input.SecondSnapshotId.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SecondSnapshotId."
      );
    }
    resolvedPath = resolvedPath.replace("{SecondSnapshotId}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: SecondSnapshotId."
    );
  }
  const query: any = {};
  if (input.FirstSnapshotId !== undefined) {
    query["firstSnapshotId"] = input.FirstSnapshotId.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["pageToken"] = input.NextToken.toString();
  }
  if (input.StartingBlockIndex !== undefined) {
    query["startingBlockIndex"] = input.StartingBlockIndex.toString();
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

export async function serializeAws_restJson1_1ListSnapshotBlocksCommand(
  input: ListSnapshotBlocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/snapshots/{SnapshotId}/blocks";
  if (input.SnapshotId !== undefined) {
    const labelValue: any = input.SnapshotId.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["pageToken"] = input.NextToken.toString();
  }
  if (input.StartingBlockIndex !== undefined) {
    query["startingBlockIndex"] = input.StartingBlockIndex.toString();
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

export async function deserializeAws_restJson1_1GetSnapshotBlockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotBlockCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSnapshotBlockCommandError(
      output,
      context
    );
  }
  const contents: GetSnapshotBlockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSnapshotBlockResponse",
    BlockData: undefined,
    Checksum: undefined,
    ChecksumAlgorithm: undefined,
    DataLength: undefined
  };
  if (output.headers["x-amz-Checksum"] !== undefined) {
    contents.Checksum = output.headers["x-amz-Checksum"];
  }
  if (output.headers["x-amz-Checksum-Algorithm"] !== undefined) {
    contents.ChecksumAlgorithm = output.headers["x-amz-Checksum-Algorithm"];
  }
  if (output.headers["x-amz-Data-Length"] !== undefined) {
    contents.DataLength = parseInt(output.headers["x-amz-Data-Length"], 10);
  }
  const data: any = output.body;
  contents.BlockData = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSnapshotBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotBlockCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazon.zeppelindataservice#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.zeppelindataservice#ValidationException":
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
        __type: `com.amazon.zeppelindataservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListChangedBlocksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListChangedBlocksCommandError(
      output,
      context
    );
  }
  const contents: ListChangedBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListChangedBlocksResponse",
    BlockSize: undefined,
    ChangedBlocks: undefined,
    ExpiryTime: undefined,
    NextToken: undefined,
    VolumeSize: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BlockSize !== undefined) {
    contents.BlockSize = data.BlockSize;
  }
  if (data.ChangedBlocks !== undefined) {
    contents.ChangedBlocks = deserializeAws_restJson1_1ChangedBlocks(
      data.ChangedBlocks,
      context
    );
  }
  if (data.ExpiryTime !== undefined) {
    contents.ExpiryTime = new Date(
      data.ExpiryTime % 1 != 0
        ? Math.round(data.ExpiryTime * 1000)
        : data.ExpiryTime
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.VolumeSize !== undefined) {
    contents.VolumeSize = data.VolumeSize;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListChangedBlocksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazon.zeppelindataservice#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.zeppelindataservice#ValidationException":
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
        __type: `com.amazon.zeppelindataservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListSnapshotBlocksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSnapshotBlocksCommandError(
      output,
      context
    );
  }
  const contents: ListSnapshotBlocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSnapshotBlocksResponse",
    BlockSize: undefined,
    Blocks: undefined,
    ExpiryTime: undefined,
    NextToken: undefined,
    VolumeSize: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BlockSize !== undefined) {
    contents.BlockSize = data.BlockSize;
  }
  if (data.Blocks !== undefined) {
    contents.Blocks = deserializeAws_restJson1_1Blocks(data.Blocks, context);
  }
  if (data.ExpiryTime !== undefined) {
    contents.ExpiryTime = new Date(
      data.ExpiryTime % 1 != 0
        ? Math.round(data.ExpiryTime * 1000)
        : data.ExpiryTime
    );
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.VolumeSize !== undefined) {
    contents.VolumeSize = data.VolumeSize;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSnapshotBlocksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazon.zeppelindataservice#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ValidationException":
    case "com.amazon.zeppelindataservice#ValidationException":
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
        __type: `com.amazon.zeppelindataservice#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    __type: "ResourceNotFoundException",
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
    name: "ValidationException",
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
    Reason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  if (data.Reason !== undefined) {
    contents.Reason = data.Reason;
  }
  return contents;
};

const deserializeAws_restJson1_1Block = (
  output: any,
  context: __SerdeContext
): Block => {
  let contents: any = {
    __type: "Block",
    BlockIndex: undefined,
    BlockToken: undefined
  };
  if (output.BlockIndex !== undefined) {
    contents.BlockIndex = output.BlockIndex;
  }
  if (output.BlockToken !== undefined) {
    contents.BlockToken = output.BlockToken;
  }
  return contents;
};

const deserializeAws_restJson1_1Blocks = (
  output: any,
  context: __SerdeContext
): Array<Block> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Block(entry, context)
  );
};

const deserializeAws_restJson1_1ChangedBlock = (
  output: any,
  context: __SerdeContext
): ChangedBlock => {
  let contents: any = {
    __type: "ChangedBlock",
    BlockIndex: undefined,
    FirstBlockToken: undefined,
    SecondBlockToken: undefined
  };
  if (output.BlockIndex !== undefined) {
    contents.BlockIndex = output.BlockIndex;
  }
  if (output.FirstBlockToken !== undefined) {
    contents.FirstBlockToken = output.FirstBlockToken;
  }
  if (output.SecondBlockToken !== undefined) {
    contents.SecondBlockToken = output.SecondBlockToken;
  }
  return contents;
};

const deserializeAws_restJson1_1ChangedBlocks = (
  output: any,
  context: __SerdeContext
): Array<ChangedBlock> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ChangedBlock(entry, context)
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
