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

export async function serializeAws_restJson1_1GetSnapshotBlockCommand(
  input: GetSnapshotBlockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/snapshots/{SnapshotId}/blocks/{BlockIndex}";
  if (input.BlockIndex !== undefined) {
    const labelValue: string = input.BlockIndex.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BlockIndex.");
    }
    resolvedPath = resolvedPath.replace(
      "{BlockIndex}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BlockIndex.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace(
      "{SnapshotId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {};
  if (input.BlockToken !== undefined) {
    query["blockToken"] = input.BlockToken;
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
    const labelValue: string = input.SecondSnapshotId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SecondSnapshotId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SecondSnapshotId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: SecondSnapshotId."
    );
  }
  const query: any = {};
  if (input.FirstSnapshotId !== undefined) {
    query["firstSnapshotId"] = input.FirstSnapshotId;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["pageToken"] = input.NextToken;
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
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace(
      "{SnapshotId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["pageToken"] = input.NextToken;
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
  if (output.headers["x-amz-checksum"] !== undefined) {
    contents.Checksum = output.headers["x-amz-checksum"];
  }
  if (output.headers["x-amz-checksum-algorithm"] !== undefined) {
    contents.ChecksumAlgorithm = output.headers["x-amz-checksum-algorithm"];
  }
  if (output.headers["x-amz-data-length"] !== undefined) {
    contents.DataLength = parseInt(output.headers["x-amz-data-length"], 10);
  }
  const data: any = output.body;
  contents.BlockData = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSnapshotBlockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotBlockCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazon.zeppelindataservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.zeppelindataservice#ValidationException":
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
  if (data.BlockSize !== undefined && data.BlockSize !== null) {
    contents.BlockSize = data.BlockSize;
  }
  if (data.ChangedBlocks !== undefined && data.ChangedBlocks !== null) {
    contents.ChangedBlocks = deserializeAws_restJson1_1ChangedBlocks(
      data.ChangedBlocks,
      context
    );
  }
  if (data.ExpiryTime !== undefined && data.ExpiryTime !== null) {
    contents.ExpiryTime = new Date(Math.round(data.ExpiryTime * 1000));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
    contents.VolumeSize = data.VolumeSize;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListChangedBlocksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListChangedBlocksCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazon.zeppelindataservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.zeppelindataservice#ValidationException":
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
  if (data.BlockSize !== undefined && data.BlockSize !== null) {
    contents.BlockSize = data.BlockSize;
  }
  if (data.Blocks !== undefined && data.Blocks !== null) {
    contents.Blocks = deserializeAws_restJson1_1Blocks(data.Blocks, context);
  }
  if (data.ExpiryTime !== undefined && data.ExpiryTime !== null) {
    contents.ExpiryTime = new Date(Math.round(data.ExpiryTime * 1000));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.VolumeSize !== undefined && data.VolumeSize !== null) {
    contents.VolumeSize = data.VolumeSize;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSnapshotBlocksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotBlocksCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazon.zeppelindataservice#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazon.zeppelindataservice#ValidationException":
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

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
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
    Message: undefined,
    Reason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Reason !== undefined && data.Reason !== null) {
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
  if (output.BlockIndex !== undefined && output.BlockIndex !== null) {
    contents.BlockIndex = output.BlockIndex;
  }
  if (output.BlockToken !== undefined && output.BlockToken !== null) {
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
  if (output.BlockIndex !== undefined && output.BlockIndex !== null) {
    contents.BlockIndex = output.BlockIndex;
  }
  if (output.FirstBlockToken !== undefined && output.FirstBlockToken !== null) {
    contents.FirstBlockToken = output.FirstBlockToken;
  }
  if (
    output.SecondBlockToken !== undefined &&
    output.SecondBlockToken !== null
  ) {
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
