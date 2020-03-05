import {
  DeleteReportDefinitionCommandInput,
  DeleteReportDefinitionCommandOutput
} from "../commands/DeleteReportDefinitionCommand";
import {
  DescribeReportDefinitionsCommandInput,
  DescribeReportDefinitionsCommandOutput
} from "../commands/DescribeReportDefinitionsCommand";
import {
  ModifyReportDefinitionCommandInput,
  ModifyReportDefinitionCommandOutput
} from "../commands/ModifyReportDefinitionCommand";
import {
  PutReportDefinitionCommandInput,
  PutReportDefinitionCommandOutput
} from "../commands/PutReportDefinitionCommand";
import {
  AdditionalArtifact,
  DeleteReportDefinitionRequest,
  DeleteReportDefinitionResponse,
  DescribeReportDefinitionsRequest,
  DescribeReportDefinitionsResponse,
  DuplicateReportNameException,
  InternalErrorException,
  ModifyReportDefinitionRequest,
  ModifyReportDefinitionResponse,
  PutReportDefinitionRequest,
  PutReportDefinitionResponse,
  ReportDefinition,
  ReportLimitReachedException,
  SchemaElement,
  ValidationException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1DeleteReportDefinitionCommand(
  input: DeleteReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrigamiServiceGatewayService.DeleteReportDefinition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteReportDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeReportDefinitionsCommand(
  input: DescribeReportDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrigamiServiceGatewayService.DescribeReportDefinitions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeReportDefinitionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ModifyReportDefinitionCommand(
  input: ModifyReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrigamiServiceGatewayService.ModifyReportDefinition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyReportDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutReportDefinitionCommand(
  input: PutReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSOrigamiServiceGatewayService.PutReportDefinition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutReportDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1DeleteReportDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteReportDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReportDefinitionResponse(
    data,
    context
  );
  const response: DeleteReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteReportDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteReportDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awsorigamiservicegateway#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeReportDefinitionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportDefinitionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeReportDefinitionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeReportDefinitionsResponse(
    data,
    context
  );
  const response: DescribeReportDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeReportDefinitionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeReportDefinitionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportDefinitionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ModifyReportDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReportDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyReportDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyReportDefinitionResponse(
    data,
    context
  );
  const response: ModifyReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyReportDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ModifyReportDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReportDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awsorigamiservicegateway#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutReportDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReportDefinitionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutReportDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutReportDefinitionResponse(data, context);
  const response: PutReportDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutReportDefinitionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutReportDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReportDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DuplicateReportNameException":
    case "com.amazonaws.awsorigamiservicegateway#DuplicateReportNameException":
      response = {
        ...(await deserializeAws_json1_1DuplicateReportNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.awsorigamiservicegateway#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReportLimitReachedException":
    case "com.amazonaws.awsorigamiservicegateway#ReportLimitReachedException":
      response = {
        ...(await deserializeAws_json1_1ReportLimitReachedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.awsorigamiservicegateway#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

const deserializeAws_json1_1DuplicateReportNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateReportNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateReportNameException(
    body,
    context
  );
  const contents: DuplicateReportNameException = {
    name: "DuplicateReportNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(
    body,
    context
  );
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ReportLimitReachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReportLimitReachedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReportLimitReachedException(
    body,
    context
  );
  const contents: ReportLimitReachedException = {
    name: "ReportLimitReachedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ValidationException(
    body,
    context
  );
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AdditionalArtifactList = (
  input: Array<AdditionalArtifact | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeleteReportDefinitionRequest = (
  input: DeleteReportDefinitionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ReportName !== undefined) {
    bodyParams["ReportName"] = input.ReportName;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeReportDefinitionsRequest = (
  input: DescribeReportDefinitionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyReportDefinitionRequest = (
  input: ModifyReportDefinitionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ReportDefinition !== undefined) {
    bodyParams["ReportDefinition"] = serializeAws_json1_1ReportDefinition(
      input.ReportDefinition,
      context
    );
  }
  if (input.ReportName !== undefined) {
    bodyParams["ReportName"] = input.ReportName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutReportDefinitionRequest = (
  input: PutReportDefinitionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ReportDefinition !== undefined) {
    bodyParams["ReportDefinition"] = serializeAws_json1_1ReportDefinition(
      input.ReportDefinition,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ReportDefinition = (
  input: ReportDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalArtifacts !== undefined) {
    bodyParams[
      "AdditionalArtifacts"
    ] = serializeAws_json1_1AdditionalArtifactList(
      input.AdditionalArtifacts,
      context
    );
  }
  if (input.AdditionalSchemaElements !== undefined) {
    bodyParams[
      "AdditionalSchemaElements"
    ] = serializeAws_json1_1SchemaElementList(
      input.AdditionalSchemaElements,
      context
    );
  }
  if (input.Compression !== undefined) {
    bodyParams["Compression"] = input.Compression;
  }
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  if (input.RefreshClosedReports !== undefined) {
    bodyParams["RefreshClosedReports"] = input.RefreshClosedReports;
  }
  if (input.ReportName !== undefined) {
    bodyParams["ReportName"] = input.ReportName;
  }
  if (input.ReportVersioning !== undefined) {
    bodyParams["ReportVersioning"] = input.ReportVersioning;
  }
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Prefix !== undefined) {
    bodyParams["S3Prefix"] = input.S3Prefix;
  }
  if (input.S3Region !== undefined) {
    bodyParams["S3Region"] = input.S3Region;
  }
  if (input.TimeUnit !== undefined) {
    bodyParams["TimeUnit"] = input.TimeUnit;
  }
  return bodyParams;
};

const serializeAws_json1_1SchemaElementList = (
  input: Array<SchemaElement | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_json1_1AdditionalArtifactList = (
  output: any,
  context: __SerdeContext
): Array<AdditionalArtifact | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeleteReportDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteReportDefinitionResponse => {
  let contents: any = {
    __type: "DeleteReportDefinitionResponse",
    ResponseMessage: undefined
  };
  if (output.ResponseMessage !== undefined && output.ResponseMessage !== null) {
    contents.ResponseMessage = output.ResponseMessage;
  }
  return contents;
};

const deserializeAws_json1_1DescribeReportDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReportDefinitionsResponse => {
  let contents: any = {
    __type: "DescribeReportDefinitionsResponse",
    NextToken: undefined,
    ReportDefinitions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ReportDefinitions !== undefined &&
    output.ReportDefinitions !== null
  ) {
    contents.ReportDefinitions = deserializeAws_json1_1ReportDefinitionList(
      output.ReportDefinitions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DuplicateReportNameException = (
  output: any,
  context: __SerdeContext
): DuplicateReportNameException => {
  let contents: any = {
    __type: "DuplicateReportNameException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ModifyReportDefinitionResponse = (
  output: any,
  context: __SerdeContext
): ModifyReportDefinitionResponse => {
  let contents: any = {
    __type: "ModifyReportDefinitionResponse"
  };
  return contents;
};

const deserializeAws_json1_1PutReportDefinitionResponse = (
  output: any,
  context: __SerdeContext
): PutReportDefinitionResponse => {
  let contents: any = {
    __type: "PutReportDefinitionResponse"
  };
  return contents;
};

const deserializeAws_json1_1ReportDefinition = (
  output: any,
  context: __SerdeContext
): ReportDefinition => {
  let contents: any = {
    __type: "ReportDefinition",
    AdditionalArtifacts: undefined,
    AdditionalSchemaElements: undefined,
    Compression: undefined,
    Format: undefined,
    RefreshClosedReports: undefined,
    ReportName: undefined,
    ReportVersioning: undefined,
    S3Bucket: undefined,
    S3Prefix: undefined,
    S3Region: undefined,
    TimeUnit: undefined
  };
  if (
    output.AdditionalArtifacts !== undefined &&
    output.AdditionalArtifacts !== null
  ) {
    contents.AdditionalArtifacts = deserializeAws_json1_1AdditionalArtifactList(
      output.AdditionalArtifacts,
      context
    );
  }
  if (
    output.AdditionalSchemaElements !== undefined &&
    output.AdditionalSchemaElements !== null
  ) {
    contents.AdditionalSchemaElements = deserializeAws_json1_1SchemaElementList(
      output.AdditionalSchemaElements,
      context
    );
  }
  if (output.Compression !== undefined && output.Compression !== null) {
    contents.Compression = output.Compression;
  }
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (
    output.RefreshClosedReports !== undefined &&
    output.RefreshClosedReports !== null
  ) {
    contents.RefreshClosedReports = output.RefreshClosedReports;
  }
  if (output.ReportName !== undefined && output.ReportName !== null) {
    contents.ReportName = output.ReportName;
  }
  if (
    output.ReportVersioning !== undefined &&
    output.ReportVersioning !== null
  ) {
    contents.ReportVersioning = output.ReportVersioning;
  }
  if (output.S3Bucket !== undefined && output.S3Bucket !== null) {
    contents.S3Bucket = output.S3Bucket;
  }
  if (output.S3Prefix !== undefined && output.S3Prefix !== null) {
    contents.S3Prefix = output.S3Prefix;
  }
  if (output.S3Region !== undefined && output.S3Region !== null) {
    contents.S3Region = output.S3Region;
  }
  if (output.TimeUnit !== undefined && output.TimeUnit !== null) {
    contents.TimeUnit = output.TimeUnit;
  }
  return contents;
};

const deserializeAws_json1_1ReportDefinitionList = (
  output: any,
  context: __SerdeContext
): Array<ReportDefinition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReportDefinition(entry, context)
  );
};

const deserializeAws_json1_1ReportLimitReachedException = (
  output: any,
  context: __SerdeContext
): ReportLimitReachedException => {
  let contents: any = {
    __type: "ReportLimitReachedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SchemaElementList = (
  output: any,
  context: __SerdeContext
): Array<SchemaElement | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  let contents: any = {
    __type: "ValidationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
