import {
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput
} from "../commands/AddTagsToResourceCommand";
import {
  CreateHapgCommandInput,
  CreateHapgCommandOutput
} from "../commands/CreateHapgCommand";
import {
  CreateHsmCommandInput,
  CreateHsmCommandOutput
} from "../commands/CreateHsmCommand";
import {
  CreateLunaClientCommandInput,
  CreateLunaClientCommandOutput
} from "../commands/CreateLunaClientCommand";
import {
  DeleteHapgCommandInput,
  DeleteHapgCommandOutput
} from "../commands/DeleteHapgCommand";
import {
  DeleteHsmCommandInput,
  DeleteHsmCommandOutput
} from "../commands/DeleteHsmCommand";
import {
  DeleteLunaClientCommandInput,
  DeleteLunaClientCommandOutput
} from "../commands/DeleteLunaClientCommand";
import {
  DescribeHapgCommandInput,
  DescribeHapgCommandOutput
} from "../commands/DescribeHapgCommand";
import {
  DescribeHsmCommandInput,
  DescribeHsmCommandOutput
} from "../commands/DescribeHsmCommand";
import {
  DescribeLunaClientCommandInput,
  DescribeLunaClientCommandOutput
} from "../commands/DescribeLunaClientCommand";
import {
  GetConfigCommandInput,
  GetConfigCommandOutput
} from "../commands/GetConfigCommand";
import {
  ListAvailableZonesCommandInput,
  ListAvailableZonesCommandOutput
} from "../commands/ListAvailableZonesCommand";
import {
  ListHapgsCommandInput,
  ListHapgsCommandOutput
} from "../commands/ListHapgsCommand";
import {
  ListHsmsCommandInput,
  ListHsmsCommandOutput
} from "../commands/ListHsmsCommand";
import {
  ListLunaClientsCommandInput,
  ListLunaClientsCommandOutput
} from "../commands/ListLunaClientsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ModifyHapgCommandInput,
  ModifyHapgCommandOutput
} from "../commands/ModifyHapgCommand";
import {
  ModifyHsmCommandInput,
  ModifyHsmCommandOutput
} from "../commands/ModifyHsmCommand";
import {
  ModifyLunaClientCommandInput,
  ModifyLunaClientCommandOutput
} from "../commands/ModifyLunaClientCommand";
import {
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput
} from "../commands/RemoveTagsFromResourceCommand";
import {
  AddTagsToResourceRequest,
  AddTagsToResourceResponse,
  CloudHsmInternalException,
  CloudHsmServiceException,
  CreateHapgRequest,
  CreateHapgResponse,
  CreateHsmRequest,
  CreateHsmResponse,
  CreateLunaClientRequest,
  CreateLunaClientResponse,
  DeleteHapgRequest,
  DeleteHapgResponse,
  DeleteHsmRequest,
  DeleteHsmResponse,
  DeleteLunaClientRequest,
  DeleteLunaClientResponse,
  DescribeHapgRequest,
  DescribeHapgResponse,
  DescribeHsmRequest,
  DescribeHsmResponse,
  DescribeLunaClientRequest,
  DescribeLunaClientResponse,
  GetConfigRequest,
  GetConfigResponse,
  InvalidRequestException,
  ListAvailableZonesRequest,
  ListAvailableZonesResponse,
  ListHapgsRequest,
  ListHapgsResponse,
  ListHsmsRequest,
  ListHsmsResponse,
  ListLunaClientsRequest,
  ListLunaClientsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ModifyHapgRequest,
  ModifyHapgResponse,
  ModifyHsmRequest,
  ModifyHsmResponse,
  ModifyLunaClientRequest,
  ModifyLunaClientResponse,
  RemoveTagsFromResourceRequest,
  RemoveTagsFromResourceResponse,
  Tag
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

export const serializeAws_json1_1AddTagsToResourceCommand = async (
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.AddTagsToResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHapgCommand = async (
  input: CreateHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.CreateHapg"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.CreateHsm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateLunaClientCommand = async (
  input: CreateLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.CreateLunaClient"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateLunaClientRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHapgCommand = async (
  input: DeleteHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.DeleteHapg"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.DeleteHsm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteLunaClientCommand = async (
  input: DeleteLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.DeleteLunaClient"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteLunaClientRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHapgCommand = async (
  input: DescribeHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.DescribeHapg"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeHapgRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeHsmCommand = async (
  input: DescribeHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.DescribeHsm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeLunaClientCommand = async (
  input: DescribeLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.DescribeLunaClient"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeLunaClientRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConfigCommand = async (
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.GetConfig"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAvailableZonesCommand = async (
  input: ListAvailableZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ListAvailableZones"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAvailableZonesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHapgsCommand = async (
  input: ListHapgsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ListHapgs"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHapgsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListHsmsCommand = async (
  input: ListHsmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ListHsms"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListHsmsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListLunaClientsCommand = async (
  input: ListLunaClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ListLunaClients"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListLunaClientsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyHapgCommand = async (
  input: ModifyHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ModifyHapg"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyHapgRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyHsmCommand = async (
  input: ModifyHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ModifyHsm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ModifyHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ModifyLunaClientCommand = async (
  input: ModifyLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.ModifyLunaClient"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ModifyLunaClientRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromResourceCommand = async (
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CloudHsmFrontendService.RemoveTagsFromResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsToResourceResponse(data, context);
  const response: AddTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsToResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHapgResponse(data, context);
  const response: CreateHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHapgResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHsmResponse(data, context);
  const response: CreateHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateHsmResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1CreateLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateLunaClientResponse(data, context);
  const response: CreateLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateLunaClientResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHapgResponse(data, context);
  const response: DeleteHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHapgResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteHsmResponse(data, context);
  const response: DeleteHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteHsmResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeleteLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteLunaClientResponse(data, context);
  const response: DeleteLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteLunaClientResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHapgResponse(data, context);
  const response: DescribeHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHapgResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeHsmResponse(data, context);
  const response: DescribeHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeHsmResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DescribeLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeLunaClientCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeLunaClientResponse(data, context);
  const response: DescribeLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLunaClientResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConfigResponse(data, context);
  const response: GetConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConfigResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListAvailableZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAvailableZonesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAvailableZonesResponse(data, context);
  const response: ListAvailableZonesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAvailableZonesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAvailableZonesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListHapgsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListHapgsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHapgsResponse(data, context);
  const response: ListHapgsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHapgsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHapgsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListHsmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListHsmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListHsmsResponse(data, context);
  const response: ListHsmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListHsmsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListHsmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListLunaClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListLunaClientsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListLunaClientsResponse(data, context);
  const response: ListLunaClientsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLunaClientsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListLunaClientsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ModifyHapgCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyHapgCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyHapgResponse(data, context);
  const response: ModifyHapgCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyHapgResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyHapgCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ModifyHsmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyHsmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyHsmResponse(data, context);
  const response: ModifyHsmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyHsmResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyHsmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1ModifyLunaClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ModifyLunaClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ModifyLunaClientResponse(data, context);
  const response: ModifyLunaClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ModifyLunaClientResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ModifyLunaClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> => {
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
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
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

export const deserializeAws_json1_1RemoveTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsFromResourceResponse(
    data,
    context
  );
  const response: RemoveTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsFromResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> => {
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
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

const deserializeAws_json1_1CloudHsmInternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmInternalException(
    body,
    context
  );
  const contents: CloudHsmInternalException = {
    name: "CloudHsmInternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmServiceException(
    body,
    context
  );
  const contents: CloudHsmServiceException = {
    name: "CloudHsmServiceException",
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

const serializeAws_json1_1AddTagsToResourceRequest = (
  input: AddTagsToResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagList !== undefined && {
      TagList: serializeAws_json1_1TagList(input.TagList, context)
    })
  };
};

const serializeAws_json1_1CreateHapgRequest = (
  input: CreateHapgRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Label !== undefined && { Label: input.Label })
  };
};

const serializeAws_json1_1CreateHsmRequest = (
  input: CreateHsmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientToken !== undefined && { ClientToken: input.ClientToken }),
    ...(input.EniIp !== undefined && { EniIp: input.EniIp }),
    ...(input.ExternalId !== undefined && { ExternalId: input.ExternalId }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn }),
    ...(input.SshKey !== undefined && { SshKey: input.SshKey }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId }),
    ...(input.SubscriptionType !== undefined && {
      SubscriptionType: input.SubscriptionType
    }),
    ...(input.SyslogIp !== undefined && { SyslogIp: input.SyslogIp })
  };
};

const serializeAws_json1_1CreateLunaClientRequest = (
  input: CreateLunaClientRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.Label !== undefined && { Label: input.Label })
  };
};

const serializeAws_json1_1DeleteHapgRequest = (
  input: DeleteHapgRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HapgArn !== undefined && { HapgArn: input.HapgArn })
  };
};

const serializeAws_json1_1DeleteHsmRequest = (
  input: DeleteHsmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HsmArn !== undefined && { HsmArn: input.HsmArn })
  };
};

const serializeAws_json1_1DeleteLunaClientRequest = (
  input: DeleteLunaClientRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientArn !== undefined && { ClientArn: input.ClientArn })
  };
};

const serializeAws_json1_1DescribeHapgRequest = (
  input: DescribeHapgRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HapgArn !== undefined && { HapgArn: input.HapgArn })
  };
};

const serializeAws_json1_1DescribeHsmRequest = (
  input: DescribeHsmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HsmArn !== undefined && { HsmArn: input.HsmArn }),
    ...(input.HsmSerialNumber !== undefined && {
      HsmSerialNumber: input.HsmSerialNumber
    })
  };
};

const serializeAws_json1_1DescribeLunaClientRequest = (
  input: DescribeLunaClientRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateFingerprint !== undefined && {
      CertificateFingerprint: input.CertificateFingerprint
    }),
    ...(input.ClientArn !== undefined && { ClientArn: input.ClientArn })
  };
};

const serializeAws_json1_1GetConfigRequest = (
  input: GetConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClientArn !== undefined && { ClientArn: input.ClientArn }),
    ...(input.ClientVersion !== undefined && {
      ClientVersion: input.ClientVersion
    }),
    ...(input.HapgList !== undefined && {
      HapgList: serializeAws_json1_1HapgList(input.HapgList, context)
    })
  };
};

const serializeAws_json1_1HapgList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListAvailableZonesRequest = (
  input: ListAvailableZonesRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ListHapgsRequest = (
  input: ListHapgsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListHsmsRequest = (
  input: ListHsmsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListLunaClientsRequest = (
  input: ListLunaClientsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1ModifyHapgRequest = (
  input: ModifyHapgRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HapgArn !== undefined && { HapgArn: input.HapgArn }),
    ...(input.Label !== undefined && { Label: input.Label }),
    ...(input.PartitionSerialList !== undefined && {
      PartitionSerialList: serializeAws_json1_1PartitionSerialList(
        input.PartitionSerialList,
        context
      )
    })
  };
};

const serializeAws_json1_1ModifyHsmRequest = (
  input: ModifyHsmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EniIp !== undefined && { EniIp: input.EniIp }),
    ...(input.ExternalId !== undefined && { ExternalId: input.ExternalId }),
    ...(input.HsmArn !== undefined && { HsmArn: input.HsmArn }),
    ...(input.IamRoleArn !== undefined && { IamRoleArn: input.IamRoleArn }),
    ...(input.SubnetId !== undefined && { SubnetId: input.SubnetId }),
    ...(input.SyslogIp !== undefined && { SyslogIp: input.SyslogIp })
  };
};

const serializeAws_json1_1ModifyLunaClientRequest = (
  input: ModifyLunaClientRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate !== undefined && { Certificate: input.Certificate }),
    ...(input.ClientArn !== undefined && { ClientArn: input.ClientArn })
  };
};

const serializeAws_json1_1PartitionSerialList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1RemoveTagsFromResourceRequest = (
  input: RemoveTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeyList !== undefined && {
      TagKeyList: serializeAws_json1_1TagKeyList(input.TagKeyList, context)
    })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1AddTagsToResourceResponse = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResponse => {
  return {
    __type: "AddTagsToResourceResponse",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1AZList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ClientList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CloudHsmInternalException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalException => {
  return {
    __type: "CloudHsmInternalException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    retryable:
      output.retryable !== undefined && output.retryable !== null
        ? output.retryable
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmServiceException = (
  output: any,
  context: __SerdeContext
): CloudHsmServiceException => {
  return {
    __type: "CloudHsmServiceException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    retryable:
      output.retryable !== undefined && output.retryable !== null
        ? output.retryable
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateHapgResponse = (
  output: any,
  context: __SerdeContext
): CreateHapgResponse => {
  return {
    __type: "CreateHapgResponse",
    HapgArn:
      output.HapgArn !== undefined && output.HapgArn !== null
        ? output.HapgArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateHsmResponse = (
  output: any,
  context: __SerdeContext
): CreateHsmResponse => {
  return {
    __type: "CreateHsmResponse",
    HsmArn:
      output.HsmArn !== undefined && output.HsmArn !== null
        ? output.HsmArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateLunaClientResponse = (
  output: any,
  context: __SerdeContext
): CreateLunaClientResponse => {
  return {
    __type: "CreateLunaClientResponse",
    ClientArn:
      output.ClientArn !== undefined && output.ClientArn !== null
        ? output.ClientArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteHapgResponse = (
  output: any,
  context: __SerdeContext
): DeleteHapgResponse => {
  return {
    __type: "DeleteHapgResponse",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteHsmResponse = (
  output: any,
  context: __SerdeContext
): DeleteHsmResponse => {
  return {
    __type: "DeleteHsmResponse",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteLunaClientResponse = (
  output: any,
  context: __SerdeContext
): DeleteLunaClientResponse => {
  return {
    __type: "DeleteLunaClientResponse",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeHapgResponse = (
  output: any,
  context: __SerdeContext
): DescribeHapgResponse => {
  return {
    __type: "DescribeHapgResponse",
    HapgArn:
      output.HapgArn !== undefined && output.HapgArn !== null
        ? output.HapgArn
        : undefined,
    HapgSerial:
      output.HapgSerial !== undefined && output.HapgSerial !== null
        ? output.HapgSerial
        : undefined,
    HsmsLastActionFailed:
      output.HsmsLastActionFailed !== undefined &&
      output.HsmsLastActionFailed !== null
        ? deserializeAws_json1_1HsmList(output.HsmsLastActionFailed, context)
        : undefined,
    HsmsPendingDeletion:
      output.HsmsPendingDeletion !== undefined &&
      output.HsmsPendingDeletion !== null
        ? deserializeAws_json1_1HsmList(output.HsmsPendingDeletion, context)
        : undefined,
    HsmsPendingRegistration:
      output.HsmsPendingRegistration !== undefined &&
      output.HsmsPendingRegistration !== null
        ? deserializeAws_json1_1HsmList(output.HsmsPendingRegistration, context)
        : undefined,
    Label:
      output.Label !== undefined && output.Label !== null
        ? output.Label
        : undefined,
    LastModifiedTimestamp:
      output.LastModifiedTimestamp !== undefined &&
      output.LastModifiedTimestamp !== null
        ? output.LastModifiedTimestamp
        : undefined,
    PartitionSerialList:
      output.PartitionSerialList !== undefined &&
      output.PartitionSerialList !== null
        ? deserializeAws_json1_1PartitionSerialList(
            output.PartitionSerialList,
            context
          )
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeHsmResponse = (
  output: any,
  context: __SerdeContext
): DescribeHsmResponse => {
  return {
    __type: "DescribeHsmResponse",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    EniId:
      output.EniId !== undefined && output.EniId !== null
        ? output.EniId
        : undefined,
    EniIp:
      output.EniIp !== undefined && output.EniIp !== null
        ? output.EniIp
        : undefined,
    HsmArn:
      output.HsmArn !== undefined && output.HsmArn !== null
        ? output.HsmArn
        : undefined,
    HsmType:
      output.HsmType !== undefined && output.HsmType !== null
        ? output.HsmType
        : undefined,
    IamRoleArn:
      output.IamRoleArn !== undefined && output.IamRoleArn !== null
        ? output.IamRoleArn
        : undefined,
    Partitions:
      output.Partitions !== undefined && output.Partitions !== null
        ? deserializeAws_json1_1PartitionList(output.Partitions, context)
        : undefined,
    SerialNumber:
      output.SerialNumber !== undefined && output.SerialNumber !== null
        ? output.SerialNumber
        : undefined,
    ServerCertLastUpdated:
      output.ServerCertLastUpdated !== undefined &&
      output.ServerCertLastUpdated !== null
        ? output.ServerCertLastUpdated
        : undefined,
    ServerCertUri:
      output.ServerCertUri !== undefined && output.ServerCertUri !== null
        ? output.ServerCertUri
        : undefined,
    SoftwareVersion:
      output.SoftwareVersion !== undefined && output.SoftwareVersion !== null
        ? output.SoftwareVersion
        : undefined,
    SshKeyLastUpdated:
      output.SshKeyLastUpdated !== undefined &&
      output.SshKeyLastUpdated !== null
        ? output.SshKeyLastUpdated
        : undefined,
    SshPublicKey:
      output.SshPublicKey !== undefined && output.SshPublicKey !== null
        ? output.SshPublicKey
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusDetails:
      output.StatusDetails !== undefined && output.StatusDetails !== null
        ? output.StatusDetails
        : undefined,
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? output.SubnetId
        : undefined,
    SubscriptionEndDate:
      output.SubscriptionEndDate !== undefined &&
      output.SubscriptionEndDate !== null
        ? output.SubscriptionEndDate
        : undefined,
    SubscriptionStartDate:
      output.SubscriptionStartDate !== undefined &&
      output.SubscriptionStartDate !== null
        ? output.SubscriptionStartDate
        : undefined,
    SubscriptionType:
      output.SubscriptionType !== undefined && output.SubscriptionType !== null
        ? output.SubscriptionType
        : undefined,
    VendorName:
      output.VendorName !== undefined && output.VendorName !== null
        ? output.VendorName
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeLunaClientResponse = (
  output: any,
  context: __SerdeContext
): DescribeLunaClientResponse => {
  return {
    __type: "DescribeLunaClientResponse",
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? output.Certificate
        : undefined,
    CertificateFingerprint:
      output.CertificateFingerprint !== undefined &&
      output.CertificateFingerprint !== null
        ? output.CertificateFingerprint
        : undefined,
    ClientArn:
      output.ClientArn !== undefined && output.ClientArn !== null
        ? output.ClientArn
        : undefined,
    Label:
      output.Label !== undefined && output.Label !== null
        ? output.Label
        : undefined,
    LastModifiedTimestamp:
      output.LastModifiedTimestamp !== undefined &&
      output.LastModifiedTimestamp !== null
        ? output.LastModifiedTimestamp
        : undefined
  } as any;
};

const deserializeAws_json1_1GetConfigResponse = (
  output: any,
  context: __SerdeContext
): GetConfigResponse => {
  return {
    __type: "GetConfigResponse",
    ConfigCred:
      output.ConfigCred !== undefined && output.ConfigCred !== null
        ? output.ConfigCred
        : undefined,
    ConfigFile:
      output.ConfigFile !== undefined && output.ConfigFile !== null
        ? output.ConfigFile
        : undefined,
    ConfigType:
      output.ConfigType !== undefined && output.ConfigType !== null
        ? output.ConfigType
        : undefined
  } as any;
};

const deserializeAws_json1_1HapgList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HsmList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined,
    retryable:
      output.retryable !== undefined && output.retryable !== null
        ? output.retryable
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAvailableZonesResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableZonesResponse => {
  return {
    __type: "ListAvailableZonesResponse",
    AZList:
      output.AZList !== undefined && output.AZList !== null
        ? deserializeAws_json1_1AZList(output.AZList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListHapgsResponse = (
  output: any,
  context: __SerdeContext
): ListHapgsResponse => {
  return {
    __type: "ListHapgsResponse",
    HapgList:
      output.HapgList !== undefined && output.HapgList !== null
        ? deserializeAws_json1_1HapgList(output.HapgList, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListHsmsResponse = (
  output: any,
  context: __SerdeContext
): ListHsmsResponse => {
  return {
    __type: "ListHsmsResponse",
    HsmList:
      output.HsmList !== undefined && output.HsmList !== null
        ? deserializeAws_json1_1HsmList(output.HsmList, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListLunaClientsResponse = (
  output: any,
  context: __SerdeContext
): ListLunaClientsResponse => {
  return {
    __type: "ListLunaClientsResponse",
    ClientList:
      output.ClientList !== undefined && output.ClientList !== null
        ? deserializeAws_json1_1ClientList(output.ClientList, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ModifyHapgResponse = (
  output: any,
  context: __SerdeContext
): ModifyHapgResponse => {
  return {
    __type: "ModifyHapgResponse",
    HapgArn:
      output.HapgArn !== undefined && output.HapgArn !== null
        ? output.HapgArn
        : undefined
  } as any;
};

const deserializeAws_json1_1ModifyHsmResponse = (
  output: any,
  context: __SerdeContext
): ModifyHsmResponse => {
  return {
    __type: "ModifyHsmResponse",
    HsmArn:
      output.HsmArn !== undefined && output.HsmArn !== null
        ? output.HsmArn
        : undefined
  } as any;
};

const deserializeAws_json1_1ModifyLunaClientResponse = (
  output: any,
  context: __SerdeContext
): ModifyLunaClientResponse => {
  return {
    __type: "ModifyLunaClientResponse",
    ClientArn:
      output.ClientArn !== undefined && output.ClientArn !== null
        ? output.ClientArn
        : undefined
  } as any;
};

const deserializeAws_json1_1PartitionList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PartitionSerialList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RemoveTagsFromResourceResponse = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResponse => {
  return {
    __type: "RemoveTagsFromResourceResponse",
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined
  } as any;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
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
