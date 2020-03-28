import {
  DeleteTerminologyCommandInput,
  DeleteTerminologyCommandOutput
} from "../commands/DeleteTerminologyCommand";
import {
  DescribeTextTranslationJobCommandInput,
  DescribeTextTranslationJobCommandOutput
} from "../commands/DescribeTextTranslationJobCommand";
import {
  GetTerminologyCommandInput,
  GetTerminologyCommandOutput
} from "../commands/GetTerminologyCommand";
import {
  ImportTerminologyCommandInput,
  ImportTerminologyCommandOutput
} from "../commands/ImportTerminologyCommand";
import {
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput
} from "../commands/ListTerminologiesCommand";
import {
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput
} from "../commands/ListTextTranslationJobsCommand";
import {
  StartTextTranslationJobCommandInput,
  StartTextTranslationJobCommandOutput
} from "../commands/StartTextTranslationJobCommand";
import {
  StopTextTranslationJobCommandInput,
  StopTextTranslationJobCommandOutput
} from "../commands/StopTextTranslationJobCommand";
import {
  TranslateTextCommandInput,
  TranslateTextCommandOutput
} from "../commands/TranslateTextCommand";
import {
  AppliedTerminology,
  DeleteTerminologyRequest,
  DescribeTextTranslationJobRequest,
  DescribeTextTranslationJobResponse,
  DetectedLanguageLowConfidenceException,
  EncryptionKey,
  GetTerminologyRequest,
  GetTerminologyResponse,
  ImportTerminologyRequest,
  ImportTerminologyResponse,
  InputDataConfig,
  InternalServerException,
  InvalidFilterException,
  InvalidParameterValueException,
  InvalidRequestException,
  JobDetails,
  LimitExceededException,
  ListTerminologiesRequest,
  ListTerminologiesResponse,
  ListTextTranslationJobsRequest,
  ListTextTranslationJobsResponse,
  OutputDataConfig,
  ResourceNotFoundException,
  ServiceUnavailableException,
  StartTextTranslationJobRequest,
  StartTextTranslationJobResponse,
  StopTextTranslationJobRequest,
  StopTextTranslationJobResponse,
  Term,
  TerminologyData,
  TerminologyDataLocation,
  TerminologyProperties,
  TextSizeLimitExceededException,
  TextTranslationJobFilter,
  TextTranslationJobProperties,
  TooManyRequestsException,
  TranslateTextRequest,
  TranslateTextResponse,
  UnsupportedLanguagePairException
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
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_json1_1DeleteTerminologyCommand(
  input: DeleteTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.DeleteTerminology";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTerminologyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTextTranslationJobCommand(
  input: DescribeTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.DescribeTextTranslationJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTextTranslationJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTerminologyCommand(
  input: GetTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShineFrontendService_20170701.GetTerminology";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetTerminologyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ImportTerminologyCommand(
  input: ImportTerminologyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.ImportTerminology";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportTerminologyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTerminologiesCommand(
  input: ListTerminologiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.ListTerminologies";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTerminologiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTextTranslationJobsCommand(
  input: ListTextTranslationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.ListTextTranslationJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTextTranslationJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartTextTranslationJobCommand(
  input: StartTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.StartTextTranslationJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartTextTranslationJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopTextTranslationJobCommand(
  input: StopTextTranslationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShineFrontendService_20170701.StopTextTranslationJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopTextTranslationJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TranslateTextCommand(
  input: TranslateTextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShineFrontendService_20170701.TranslateText";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TranslateTextRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1DeleteTerminologyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTerminologyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTerminologyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTerminologyCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1DescribeTextTranslationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTextTranslationJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTextTranslationJobResponse(
    data,
    context
  );
  const response: DescribeTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTextTranslationJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTextTranslationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTextTranslationJobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1GetTerminologyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTerminologyResponse(data, context);
  const response: GetTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTerminologyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTerminologyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTerminologyCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.shine#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1ImportTerminologyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportTerminologyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportTerminologyResponse(data, context);
  const response: ImportTerminologyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportTerminologyResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportTerminologyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportTerminologyCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.shine#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.shine#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1ListTerminologiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTerminologiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTerminologiesResponse(data, context);
  const response: ListTerminologiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTerminologiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTerminologiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTerminologiesCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.shine#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1ListTextTranslationJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTextTranslationJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTextTranslationJobsResponse(
    data,
    context
  );
  const response: ListTextTranslationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTextTranslationJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTextTranslationJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTextTranslationJobsCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidFilterException":
    case "com.amazonaws.shine#InvalidFilterException":
      response = {
        ...(await deserializeAws_json1_1InvalidFilterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.shine#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1StartTextTranslationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartTextTranslationJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartTextTranslationJobResponse(
    data,
    context
  );
  const response: StartTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartTextTranslationJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartTextTranslationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTextTranslationJobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.shine#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.shine#UnsupportedLanguagePairException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(
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
}

export async function deserializeAws_json1_1StopTextTranslationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopTextTranslationJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopTextTranslationJobResponse(
    data,
    context
  );
  const response: StopTextTranslationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopTextTranslationJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopTextTranslationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTextTranslationJobCommandOutput> {
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
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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
}

export async function deserializeAws_json1_1TranslateTextCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TranslateTextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TranslateTextResponse(data, context);
  const response: TranslateTextCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TranslateTextResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TranslateTextCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslateTextCommandOutput> {
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
    case "DetectedLanguageLowConfidenceException":
    case "com.amazonaws.shine#DetectedLanguageLowConfidenceException":
      response = {
        ...(await deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.shine#InternalServerException":
      response = {
        ...(await deserializeAws_json1_1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.shine#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shine#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.shine#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_json1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TextSizeLimitExceededException":
    case "com.amazonaws.shine#TextSizeLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TextSizeLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.shine#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedLanguagePairException":
    case "com.amazonaws.shine#UnsupportedLanguagePairException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse(
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
}

const deserializeAws_json1_1DetectedLanguageLowConfidenceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DetectedLanguageLowConfidenceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DetectedLanguageLowConfidenceException(
    body,
    context
  );
  const contents: DetectedLanguageLowConfidenceException = {
    name: "DetectedLanguageLowConfidenceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(
    body,
    context
  );
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidFilterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFilterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidFilterException(
    body,
    context
  );
  const contents: InvalidFilterException = {
    name: "InvalidFilterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterValueException(
    body,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceUnavailableException(
    body,
    context
  );
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TextSizeLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TextSizeLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TextSizeLimitExceededException(
    body,
    context
  );
  const contents: TextSizeLimitExceededException = {
    name: "TextSizeLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(
    body,
    context
  );
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedLanguagePairExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedLanguagePairException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedLanguagePairException(
    body,
    context
  );
  const contents: UnsupportedLanguagePairException = {
    name: "UnsupportedLanguagePairException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1DeleteTerminologyRequest = (
  input: DeleteTerminologyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTextTranslationJobRequest = (
  input: DescribeTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionKey = (
  input: EncryptionKey,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["Id"] = input.Id;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTerminologyRequest = (
  input: GetTerminologyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.TerminologyDataFormat !== undefined) {
    bodyParams["TerminologyDataFormat"] = input.TerminologyDataFormat;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportTerminologyRequest = (
  input: ImportTerminologyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.EncryptionKey !== undefined) {
    bodyParams["EncryptionKey"] = serializeAws_json1_1EncryptionKey(
      input.EncryptionKey,
      context
    );
  }
  if (input.MergeStrategy !== undefined) {
    bodyParams["MergeStrategy"] = input.MergeStrategy;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.TerminologyData !== undefined) {
    bodyParams["TerminologyData"] = serializeAws_json1_1TerminologyData(
      input.TerminologyData,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputDataConfig = (
  input: InputDataConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ContentType !== undefined) {
    bodyParams["ContentType"] = input.ContentType;
  }
  if (input.S3Uri !== undefined) {
    bodyParams["S3Uri"] = input.S3Uri;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTerminologiesRequest = (
  input: ListTerminologiesRequest,
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

const serializeAws_json1_1ListTextTranslationJobsRequest = (
  input: ListTextTranslationJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Filter !== undefined) {
    bodyParams["Filter"] = serializeAws_json1_1TextTranslationJobFilter(
      input.Filter,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1OutputDataConfig = (
  input: OutputDataConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Uri !== undefined) {
    bodyParams["S3Uri"] = input.S3Uri;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StartTextTranslationJobRequest = (
  input: StartTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ClientToken === undefined) {
    input.ClientToken = generateIdempotencyToken();
  }
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.DataAccessRoleArn !== undefined) {
    bodyParams["DataAccessRoleArn"] = input.DataAccessRoleArn;
  }
  if (input.InputDataConfig !== undefined) {
    bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(
      input.InputDataConfig,
      context
    );
  }
  if (input.JobName !== undefined) {
    bodyParams["JobName"] = input.JobName;
  }
  if (input.OutputDataConfig !== undefined) {
    bodyParams["OutputDataConfig"] = serializeAws_json1_1OutputDataConfig(
      input.OutputDataConfig,
      context
    );
  }
  if (input.SourceLanguageCode !== undefined) {
    bodyParams["SourceLanguageCode"] = input.SourceLanguageCode;
  }
  if (input.TargetLanguageCodes !== undefined) {
    bodyParams[
      "TargetLanguageCodes"
    ] = serializeAws_json1_1TargetLanguageCodeStringList(
      input.TargetLanguageCodes,
      context
    );
  }
  if (input.TerminologyNames !== undefined) {
    bodyParams["TerminologyNames"] = serializeAws_json1_1ResourceNameList(
      input.TerminologyNames,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1StopTextTranslationJobRequest = (
  input: StopTextTranslationJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobId !== undefined) {
    bodyParams["JobId"] = input.JobId;
  }
  return bodyParams;
};

const serializeAws_json1_1TargetLanguageCodeStringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TerminologyData = (
  input: TerminologyData,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.File !== undefined) {
    bodyParams["File"] = context.base64Encoder(input.File);
  }
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  return bodyParams;
};

const serializeAws_json1_1TextTranslationJobFilter = (
  input: TextTranslationJobFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.JobName !== undefined) {
    bodyParams["JobName"] = input.JobName;
  }
  if (input.JobStatus !== undefined) {
    bodyParams["JobStatus"] = input.JobStatus;
  }
  if (input.SubmittedAfterTime !== undefined) {
    bodyParams["SubmittedAfterTime"] = Math.round(
      input.SubmittedAfterTime.getTime() / 1000
    );
  }
  if (input.SubmittedBeforeTime !== undefined) {
    bodyParams["SubmittedBeforeTime"] = Math.round(
      input.SubmittedBeforeTime.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1TranslateTextRequest = (
  input: TranslateTextRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SourceLanguageCode !== undefined) {
    bodyParams["SourceLanguageCode"] = input.SourceLanguageCode;
  }
  if (input.TargetLanguageCode !== undefined) {
    bodyParams["TargetLanguageCode"] = input.TargetLanguageCode;
  }
  if (input.TerminologyNames !== undefined) {
    bodyParams["TerminologyNames"] = serializeAws_json1_1ResourceNameList(
      input.TerminologyNames,
      context
    );
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const deserializeAws_json1_1AppliedTerminology = (
  output: any,
  context: __SerdeContext
): AppliedTerminology => {
  let contents: any = {
    __type: "AppliedTerminology",
    Name: undefined,
    Terms: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Terms !== undefined && output.Terms !== null) {
    contents.Terms = deserializeAws_json1_1TermList(output.Terms, context);
  }
  return contents;
};

const deserializeAws_json1_1AppliedTerminologyList = (
  output: any,
  context: __SerdeContext
): Array<AppliedTerminology> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AppliedTerminology(entry, context)
  );
};

const deserializeAws_json1_1DescribeTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeTextTranslationJobResponse => {
  let contents: any = {
    __type: "DescribeTextTranslationJobResponse",
    TextTranslationJobProperties: undefined
  };
  if (
    output.TextTranslationJobProperties !== undefined &&
    output.TextTranslationJobProperties !== null
  ) {
    contents.TextTranslationJobProperties = deserializeAws_json1_1TextTranslationJobProperties(
      output.TextTranslationJobProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DetectedLanguageLowConfidenceException = (
  output: any,
  context: __SerdeContext
): DetectedLanguageLowConfidenceException => {
  let contents: any = {
    __type: "DetectedLanguageLowConfidenceException",
    DetectedLanguageCode: undefined,
    Message: undefined
  };
  if (
    output.DetectedLanguageCode !== undefined &&
    output.DetectedLanguageCode !== null
  ) {
    contents.DetectedLanguageCode = output.DetectedLanguageCode;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EncryptionKey = (
  output: any,
  context: __SerdeContext
): EncryptionKey => {
  let contents: any = {
    __type: "EncryptionKey",
    Id: undefined,
    Type: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1GetTerminologyResponse = (
  output: any,
  context: __SerdeContext
): GetTerminologyResponse => {
  let contents: any = {
    __type: "GetTerminologyResponse",
    TerminologyDataLocation: undefined,
    TerminologyProperties: undefined
  };
  if (
    output.TerminologyDataLocation !== undefined &&
    output.TerminologyDataLocation !== null
  ) {
    contents.TerminologyDataLocation = deserializeAws_json1_1TerminologyDataLocation(
      output.TerminologyDataLocation,
      context
    );
  }
  if (
    output.TerminologyProperties !== undefined &&
    output.TerminologyProperties !== null
  ) {
    contents.TerminologyProperties = deserializeAws_json1_1TerminologyProperties(
      output.TerminologyProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ImportTerminologyResponse = (
  output: any,
  context: __SerdeContext
): ImportTerminologyResponse => {
  let contents: any = {
    __type: "ImportTerminologyResponse",
    TerminologyProperties: undefined
  };
  if (
    output.TerminologyProperties !== undefined &&
    output.TerminologyProperties !== null
  ) {
    contents.TerminologyProperties = deserializeAws_json1_1TerminologyProperties(
      output.TerminologyProperties,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InputDataConfig = (
  output: any,
  context: __SerdeContext
): InputDataConfig => {
  let contents: any = {
    __type: "InputDataConfig",
    ContentType: undefined,
    S3Uri: undefined
  };
  if (output.ContentType !== undefined && output.ContentType !== null) {
    contents.ContentType = output.ContentType;
  }
  if (output.S3Uri !== undefined && output.S3Uri !== null) {
    contents.S3Uri = output.S3Uri;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  let contents: any = {
    __type: "InternalServerException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidFilterException = (
  output: any,
  context: __SerdeContext
): InvalidFilterException => {
  let contents: any = {
    __type: "InvalidFilterException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1JobDetails = (
  output: any,
  context: __SerdeContext
): JobDetails => {
  let contents: any = {
    __type: "JobDetails",
    DocumentsWithErrorsCount: undefined,
    InputDocumentsCount: undefined,
    TranslatedDocumentsCount: undefined
  };
  if (
    output.DocumentsWithErrorsCount !== undefined &&
    output.DocumentsWithErrorsCount !== null
  ) {
    contents.DocumentsWithErrorsCount = output.DocumentsWithErrorsCount;
  }
  if (
    output.InputDocumentsCount !== undefined &&
    output.InputDocumentsCount !== null
  ) {
    contents.InputDocumentsCount = output.InputDocumentsCount;
  }
  if (
    output.TranslatedDocumentsCount !== undefined &&
    output.TranslatedDocumentsCount !== null
  ) {
    contents.TranslatedDocumentsCount = output.TranslatedDocumentsCount;
  }
  return contents;
};

const deserializeAws_json1_1LanguageCodeStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListTerminologiesResponse = (
  output: any,
  context: __SerdeContext
): ListTerminologiesResponse => {
  let contents: any = {
    __type: "ListTerminologiesResponse",
    NextToken: undefined,
    TerminologyPropertiesList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.TerminologyPropertiesList !== undefined &&
    output.TerminologyPropertiesList !== null
  ) {
    contents.TerminologyPropertiesList = deserializeAws_json1_1TerminologyPropertiesList(
      output.TerminologyPropertiesList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTextTranslationJobsResponse = (
  output: any,
  context: __SerdeContext
): ListTextTranslationJobsResponse => {
  let contents: any = {
    __type: "ListTextTranslationJobsResponse",
    NextToken: undefined,
    TextTranslationJobPropertiesList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.TextTranslationJobPropertiesList !== undefined &&
    output.TextTranslationJobPropertiesList !== null
  ) {
    contents.TextTranslationJobPropertiesList = deserializeAws_json1_1TextTranslationJobPropertiesList(
      output.TextTranslationJobPropertiesList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1OutputDataConfig = (
  output: any,
  context: __SerdeContext
): OutputDataConfig => {
  let contents: any = {
    __type: "OutputDataConfig",
    S3Uri: undefined
  };
  if (output.S3Uri !== undefined && output.S3Uri !== null) {
    contents.S3Uri = output.S3Uri;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNameList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceUnavailableException = (
  output: any,
  context: __SerdeContext
): ServiceUnavailableException => {
  let contents: any = {
    __type: "ServiceUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1StartTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): StartTextTranslationJobResponse => {
  let contents: any = {
    __type: "StartTextTranslationJobResponse",
    JobId: undefined,
    JobStatus: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  return contents;
};

const deserializeAws_json1_1StopTextTranslationJobResponse = (
  output: any,
  context: __SerdeContext
): StopTextTranslationJobResponse => {
  let contents: any = {
    __type: "StopTextTranslationJobResponse",
    JobId: undefined,
    JobStatus: undefined
  };
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  return contents;
};

const deserializeAws_json1_1TargetLanguageCodeStringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Term = (
  output: any,
  context: __SerdeContext
): Term => {
  let contents: any = {
    __type: "Term",
    SourceText: undefined,
    TargetText: undefined
  };
  if (output.SourceText !== undefined && output.SourceText !== null) {
    contents.SourceText = output.SourceText;
  }
  if (output.TargetText !== undefined && output.TargetText !== null) {
    contents.TargetText = output.TargetText;
  }
  return contents;
};

const deserializeAws_json1_1TermList = (
  output: any,
  context: __SerdeContext
): Array<Term> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Term(entry, context)
  );
};

const deserializeAws_json1_1TerminologyDataLocation = (
  output: any,
  context: __SerdeContext
): TerminologyDataLocation => {
  let contents: any = {
    __type: "TerminologyDataLocation",
    Location: undefined,
    RepositoryType: undefined
  };
  if (output.Location !== undefined && output.Location !== null) {
    contents.Location = output.Location;
  }
  if (output.RepositoryType !== undefined && output.RepositoryType !== null) {
    contents.RepositoryType = output.RepositoryType;
  }
  return contents;
};

const deserializeAws_json1_1TerminologyProperties = (
  output: any,
  context: __SerdeContext
): TerminologyProperties => {
  let contents: any = {
    __type: "TerminologyProperties",
    Arn: undefined,
    CreatedAt: undefined,
    Description: undefined,
    EncryptionKey: undefined,
    LastUpdatedAt: undefined,
    Name: undefined,
    SizeBytes: undefined,
    SourceLanguageCode: undefined,
    TargetLanguageCodes: undefined,
    TermCount: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.EncryptionKey !== undefined && output.EncryptionKey !== null) {
    contents.EncryptionKey = deserializeAws_json1_1EncryptionKey(
      output.EncryptionKey,
      context
    );
  }
  if (output.LastUpdatedAt !== undefined && output.LastUpdatedAt !== null) {
    contents.LastUpdatedAt = new Date(Math.round(output.LastUpdatedAt * 1000));
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.SizeBytes !== undefined && output.SizeBytes !== null) {
    contents.SizeBytes = output.SizeBytes;
  }
  if (
    output.SourceLanguageCode !== undefined &&
    output.SourceLanguageCode !== null
  ) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (
    output.TargetLanguageCodes !== undefined &&
    output.TargetLanguageCodes !== null
  ) {
    contents.TargetLanguageCodes = deserializeAws_json1_1LanguageCodeStringList(
      output.TargetLanguageCodes,
      context
    );
  }
  if (output.TermCount !== undefined && output.TermCount !== null) {
    contents.TermCount = output.TermCount;
  }
  return contents;
};

const deserializeAws_json1_1TerminologyPropertiesList = (
  output: any,
  context: __SerdeContext
): Array<TerminologyProperties> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TerminologyProperties(entry, context)
  );
};

const deserializeAws_json1_1TextSizeLimitExceededException = (
  output: any,
  context: __SerdeContext
): TextSizeLimitExceededException => {
  let contents: any = {
    __type: "TextSizeLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TextTranslationJobProperties = (
  output: any,
  context: __SerdeContext
): TextTranslationJobProperties => {
  let contents: any = {
    __type: "TextTranslationJobProperties",
    DataAccessRoleArn: undefined,
    EndTime: undefined,
    InputDataConfig: undefined,
    JobDetails: undefined,
    JobId: undefined,
    JobName: undefined,
    JobStatus: undefined,
    Message: undefined,
    OutputDataConfig: undefined,
    SourceLanguageCode: undefined,
    SubmittedTime: undefined,
    TargetLanguageCodes: undefined,
    TerminologyNames: undefined
  };
  if (
    output.DataAccessRoleArn !== undefined &&
    output.DataAccessRoleArn !== null
  ) {
    contents.DataAccessRoleArn = output.DataAccessRoleArn;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
    contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(
      output.InputDataConfig,
      context
    );
  }
  if (output.JobDetails !== undefined && output.JobDetails !== null) {
    contents.JobDetails = deserializeAws_json1_1JobDetails(
      output.JobDetails,
      context
    );
  }
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobName !== undefined && output.JobName !== null) {
    contents.JobName = output.JobName;
  }
  if (output.JobStatus !== undefined && output.JobStatus !== null) {
    contents.JobStatus = output.JobStatus;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (
    output.OutputDataConfig !== undefined &&
    output.OutputDataConfig !== null
  ) {
    contents.OutputDataConfig = deserializeAws_json1_1OutputDataConfig(
      output.OutputDataConfig,
      context
    );
  }
  if (
    output.SourceLanguageCode !== undefined &&
    output.SourceLanguageCode !== null
  ) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (output.SubmittedTime !== undefined && output.SubmittedTime !== null) {
    contents.SubmittedTime = new Date(Math.round(output.SubmittedTime * 1000));
  }
  if (
    output.TargetLanguageCodes !== undefined &&
    output.TargetLanguageCodes !== null
  ) {
    contents.TargetLanguageCodes = deserializeAws_json1_1TargetLanguageCodeStringList(
      output.TargetLanguageCodes,
      context
    );
  }
  if (
    output.TerminologyNames !== undefined &&
    output.TerminologyNames !== null
  ) {
    contents.TerminologyNames = deserializeAws_json1_1ResourceNameList(
      output.TerminologyNames,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1TextTranslationJobPropertiesList = (
  output: any,
  context: __SerdeContext
): Array<TextTranslationJobProperties> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TextTranslationJobProperties(entry, context)
  );
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  let contents: any = {
    __type: "TooManyRequestsException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TranslateTextResponse = (
  output: any,
  context: __SerdeContext
): TranslateTextResponse => {
  let contents: any = {
    __type: "TranslateTextResponse",
    AppliedTerminologies: undefined,
    SourceLanguageCode: undefined,
    TargetLanguageCode: undefined,
    TranslatedText: undefined
  };
  if (
    output.AppliedTerminologies !== undefined &&
    output.AppliedTerminologies !== null
  ) {
    contents.AppliedTerminologies = deserializeAws_json1_1AppliedTerminologyList(
      output.AppliedTerminologies,
      context
    );
  }
  if (
    output.SourceLanguageCode !== undefined &&
    output.SourceLanguageCode !== null
  ) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (
    output.TargetLanguageCode !== undefined &&
    output.TargetLanguageCode !== null
  ) {
    contents.TargetLanguageCode = output.TargetLanguageCode;
  }
  if (output.TranslatedText !== undefined && output.TranslatedText !== null) {
    contents.TranslatedText = output.TranslatedText;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedLanguagePairException = (
  output: any,
  context: __SerdeContext
): UnsupportedLanguagePairException => {
  let contents: any = {
    __type: "UnsupportedLanguagePairException",
    Message: undefined,
    SourceLanguageCode: undefined,
    TargetLanguageCode: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (
    output.SourceLanguageCode !== undefined &&
    output.SourceLanguageCode !== null
  ) {
    contents.SourceLanguageCode = output.SourceLanguageCode;
  }
  if (
    output.TargetLanguageCode !== undefined &&
    output.TargetLanguageCode !== null
  ) {
    contents.TargetLanguageCode = output.TargetLanguageCode;
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
