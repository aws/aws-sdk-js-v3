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

export const serializeAws_json1_1DeleteReportDefinitionCommand = async (
  input: DeleteReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSOrigamiServiceGatewayService.DeleteReportDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteReportDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeReportDefinitionsCommand = async (
  input: DescribeReportDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSOrigamiServiceGatewayService.DescribeReportDefinitions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeReportDefinitionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyReportDefinitionCommand = async (
  input: ModifyReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSOrigamiServiceGatewayService.ModifyReportDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyReportDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutReportDefinitionCommand = async (
  input: PutReportDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSOrigamiServiceGatewayService.PutReportDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutReportDefinitionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1DeleteReportDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportDefinitionCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteReportDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.costandusagereportservice#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1DescribeReportDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportDefinitionsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeReportDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
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

export const deserializeAws_json1_1ModifyReportDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReportDefinitionCommandOutput> => {
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
};

const deserializeAws_json1_1ModifyReportDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyReportDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.costandusagereportservice#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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

export const deserializeAws_json1_1PutReportDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReportDefinitionCommandOutput> => {
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
};

const deserializeAws_json1_1PutReportDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutReportDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DuplicateReportNameException":
    case "com.amazonaws.costandusagereportservice#DuplicateReportNameException":
      response = {
        ...(await deserializeAws_json1_1DuplicateReportNameExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.costandusagereportservice#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ReportLimitReachedException":
    case "com.amazonaws.costandusagereportservice#ReportLimitReachedException":
      response = {
        ...(await deserializeAws_json1_1ReportLimitReachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.amazonaws.costandusagereportservice#ValidationException":
      response = {
        ...(await deserializeAws_json1_1ValidationExceptionResponse(
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
  input: (AdditionalArtifact | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DeleteReportDefinitionRequest = (
  input: DeleteReportDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReportName !== undefined && { ReportName: input.ReportName })
  };
};

const serializeAws_json1_1DescribeReportDefinitionsRequest = (
  input: DescribeReportDefinitionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ModifyReportDefinitionRequest = (
  input: ModifyReportDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReportDefinition !== undefined && {
      ReportDefinition: serializeAws_json1_1ReportDefinition(
        input.ReportDefinition,
        context
      )
    }),
    ...(input.ReportName !== undefined && { ReportName: input.ReportName })
  };
};

const serializeAws_json1_1PutReportDefinitionRequest = (
  input: PutReportDefinitionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReportDefinition !== undefined && {
      ReportDefinition: serializeAws_json1_1ReportDefinition(
        input.ReportDefinition,
        context
      )
    })
  };
};

const serializeAws_json1_1ReportDefinition = (
  input: ReportDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalArtifacts !== undefined && {
      AdditionalArtifacts: serializeAws_json1_1AdditionalArtifactList(
        input.AdditionalArtifacts,
        context
      )
    }),
    ...(input.AdditionalSchemaElements !== undefined && {
      AdditionalSchemaElements: serializeAws_json1_1SchemaElementList(
        input.AdditionalSchemaElements,
        context
      )
    }),
    ...(input.Compression !== undefined && { Compression: input.Compression }),
    ...(input.Format !== undefined && { Format: input.Format }),
    ...(input.RefreshClosedReports !== undefined && {
      RefreshClosedReports: input.RefreshClosedReports
    }),
    ...(input.ReportName !== undefined && { ReportName: input.ReportName }),
    ...(input.ReportVersioning !== undefined && {
      ReportVersioning: input.ReportVersioning
    }),
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Prefix !== undefined && { S3Prefix: input.S3Prefix }),
    ...(input.S3Region !== undefined && { S3Region: input.S3Region }),
    ...(input.TimeUnit !== undefined && { TimeUnit: input.TimeUnit })
  };
};

const serializeAws_json1_1SchemaElementList = (
  input: (SchemaElement | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1AdditionalArtifactList = (
  output: any,
  context: __SerdeContext
): (AdditionalArtifact | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeleteReportDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DeleteReportDefinitionResponse => {
  return {
    __type: "DeleteReportDefinitionResponse",
    ResponseMessage:
      output.ResponseMessage !== undefined && output.ResponseMessage !== null
        ? output.ResponseMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeReportDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): DescribeReportDefinitionsResponse => {
  return {
    __type: "DescribeReportDefinitionsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ReportDefinitions:
      output.ReportDefinitions !== undefined &&
      output.ReportDefinitions !== null
        ? deserializeAws_json1_1ReportDefinitionList(
            output.ReportDefinitions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DuplicateReportNameException = (
  output: any,
  context: __SerdeContext
): DuplicateReportNameException => {
  return {
    __type: "DuplicateReportNameException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  return {
    __type: "InternalErrorException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ModifyReportDefinitionResponse = (
  output: any,
  context: __SerdeContext
): ModifyReportDefinitionResponse => {
  return {
    __type: "ModifyReportDefinitionResponse"
  } as any;
};

const deserializeAws_json1_1PutReportDefinitionResponse = (
  output: any,
  context: __SerdeContext
): PutReportDefinitionResponse => {
  return {
    __type: "PutReportDefinitionResponse"
  } as any;
};

const deserializeAws_json1_1ReportDefinition = (
  output: any,
  context: __SerdeContext
): ReportDefinition => {
  return {
    __type: "ReportDefinition",
    AdditionalArtifacts:
      output.AdditionalArtifacts !== undefined &&
      output.AdditionalArtifacts !== null
        ? deserializeAws_json1_1AdditionalArtifactList(
            output.AdditionalArtifacts,
            context
          )
        : undefined,
    AdditionalSchemaElements:
      output.AdditionalSchemaElements !== undefined &&
      output.AdditionalSchemaElements !== null
        ? deserializeAws_json1_1SchemaElementList(
            output.AdditionalSchemaElements,
            context
          )
        : undefined,
    Compression:
      output.Compression !== undefined && output.Compression !== null
        ? output.Compression
        : undefined,
    Format:
      output.Format !== undefined && output.Format !== null
        ? output.Format
        : undefined,
    RefreshClosedReports:
      output.RefreshClosedReports !== undefined &&
      output.RefreshClosedReports !== null
        ? output.RefreshClosedReports
        : undefined,
    ReportName:
      output.ReportName !== undefined && output.ReportName !== null
        ? output.ReportName
        : undefined,
    ReportVersioning:
      output.ReportVersioning !== undefined && output.ReportVersioning !== null
        ? output.ReportVersioning
        : undefined,
    S3Bucket:
      output.S3Bucket !== undefined && output.S3Bucket !== null
        ? output.S3Bucket
        : undefined,
    S3Prefix:
      output.S3Prefix !== undefined && output.S3Prefix !== null
        ? output.S3Prefix
        : undefined,
    S3Region:
      output.S3Region !== undefined && output.S3Region !== null
        ? output.S3Region
        : undefined,
    TimeUnit:
      output.TimeUnit !== undefined && output.TimeUnit !== null
        ? output.TimeUnit
        : undefined
  } as any;
};

const deserializeAws_json1_1ReportDefinitionList = (
  output: any,
  context: __SerdeContext
): ReportDefinition[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ReportDefinition(entry, context)
  );
};

const deserializeAws_json1_1ReportLimitReachedException = (
  output: any,
  context: __SerdeContext
): ReportLimitReachedException => {
  return {
    __type: "ReportLimitReachedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1SchemaElementList = (
  output: any,
  context: __SerdeContext
): (SchemaElement | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ValidationException = (
  output: any,
  context: __SerdeContext
): ValidationException => {
  return {
    __type: "ValidationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
