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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AddTagsToResourceCommand(
  input: AddTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.AddTagsToResource";
  let body: any = {};
  const wrappedBody: any = {
    AddTagsToResourceRequest: serializeAws_json1_1AddTagsToResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AddTagsToResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateHapgCommand(
  input: CreateHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.CreateHapg";
  let body: any = {};
  const wrappedBody: any = {
    CreateHapgRequest: serializeAws_json1_1CreateHapgRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateHapg",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateHsmCommand(
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.CreateHsm";
  let body: any = {};
  const wrappedBody: any = {
    CreateHsmRequest: serializeAws_json1_1CreateHsmRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateHsm",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateLunaClientCommand(
  input: CreateLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.CreateLunaClient";
  let body: any = {};
  const wrappedBody: any = {
    CreateLunaClientRequest: serializeAws_json1_1CreateLunaClientRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateLunaClient",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteHapgCommand(
  input: DeleteHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.DeleteHapg";
  let body: any = {};
  const wrappedBody: any = {
    DeleteHapgRequest: serializeAws_json1_1DeleteHapgRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteHapg",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteHsmCommand(
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.DeleteHsm";
  let body: any = {};
  const wrappedBody: any = {
    DeleteHsmRequest: serializeAws_json1_1DeleteHsmRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteHsm",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteLunaClientCommand(
  input: DeleteLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.DeleteLunaClient";
  let body: any = {};
  const wrappedBody: any = {
    DeleteLunaClientRequest: serializeAws_json1_1DeleteLunaClientRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteLunaClient",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeHapgCommand(
  input: DescribeHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.DescribeHapg";
  let body: any = {};
  const wrappedBody: any = {
    DescribeHapgRequest: serializeAws_json1_1DescribeHapgRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeHapg",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeHsmCommand(
  input: DescribeHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.DescribeHsm";
  let body: any = {};
  const wrappedBody: any = {
    DescribeHsmRequest: serializeAws_json1_1DescribeHsmRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeHsm",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeLunaClientCommand(
  input: DescribeLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.DescribeLunaClient";
  let body: any = {};
  const wrappedBody: any = {
    DescribeLunaClientRequest: serializeAws_json1_1DescribeLunaClientRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeLunaClient",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetConfigCommand(
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.GetConfig";
  let body: any = {};
  const wrappedBody: any = {
    GetConfigRequest: serializeAws_json1_1GetConfigRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetConfig",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListAvailableZonesCommand(
  input: ListAvailableZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ListAvailableZones";
  let body: any = {};
  const wrappedBody: any = {
    ListAvailableZonesRequest: serializeAws_json1_1ListAvailableZonesRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListAvailableZones",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListHapgsCommand(
  input: ListHapgsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ListHapgs";
  let body: any = {};
  const wrappedBody: any = {
    ListHapgsRequest: serializeAws_json1_1ListHapgsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListHapgs",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListHsmsCommand(
  input: ListHsmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ListHsms";
  let body: any = {};
  const wrappedBody: any = {
    ListHsmsRequest: serializeAws_json1_1ListHsmsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListHsms",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListLunaClientsCommand(
  input: ListLunaClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ListLunaClients";
  let body: any = {};
  const wrappedBody: any = {
    ListLunaClientsRequest: serializeAws_json1_1ListLunaClientsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListLunaClients",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceRequest: serializeAws_json1_1ListTagsForResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ModifyHapgCommand(
  input: ModifyHapgCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ModifyHapg";
  let body: any = {};
  const wrappedBody: any = {
    ModifyHapgRequest: serializeAws_json1_1ModifyHapgRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyHapg",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ModifyHsmCommand(
  input: ModifyHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ModifyHsm";
  let body: any = {};
  const wrappedBody: any = {
    ModifyHsmRequest: serializeAws_json1_1ModifyHsmRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyHsm",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ModifyLunaClientCommand(
  input: ModifyLunaClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.ModifyLunaClient";
  let body: any = {};
  const wrappedBody: any = {
    ModifyLunaClientRequest: serializeAws_json1_1ModifyLunaClientRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ModifyLunaClient",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemoveTagsFromResourceCommand(
  input: RemoveTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudHsmFrontendService.RemoveTagsFromResource";
  let body: any = {};
  const wrappedBody: any = {
    RemoveTagsFromResourceRequest: serializeAws_json1_1RemoveTagsFromResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemoveTagsFromResource",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1AddTagsToResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> {
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
}

async function deserializeAws_json1_1AddTagsToResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateHapgCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> {
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
}

async function deserializeAws_json1_1CreateHapgCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHapgCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateHsmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> {
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
}

async function deserializeAws_json1_1CreateHsmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHsmCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1CreateLunaClientCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> {
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
}

async function deserializeAws_json1_1CreateLunaClientCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLunaClientCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteHapgCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteHapgCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHapgCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteHsmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteHsmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHsmCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DeleteLunaClientCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteLunaClientCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLunaClientCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeHapgCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeHapgCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHapgCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeHsmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeHsmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHsmCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1DescribeLunaClientCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeLunaClientCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLunaClientCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1GetConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> {
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
}

async function deserializeAws_json1_1GetConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListAvailableZonesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> {
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
}

async function deserializeAws_json1_1ListAvailableZonesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAvailableZonesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListHapgsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> {
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
}

async function deserializeAws_json1_1ListHapgsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHapgsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListHsmsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> {
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
}

async function deserializeAws_json1_1ListHsmsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHsmsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListLunaClientsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> {
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
}

async function deserializeAws_json1_1ListLunaClientsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLunaClientsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ModifyHapgCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> {
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
}

async function deserializeAws_json1_1ModifyHapgCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHapgCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ModifyHsmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> {
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
}

async function deserializeAws_json1_1ModifyHsmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyHsmCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1ModifyLunaClientCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> {
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
}

async function deserializeAws_json1_1ModifyLunaClientCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ModifyLunaClientCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_json1_1RemoveTagsFromResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> {
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
}

async function deserializeAws_json1_1RemoveTagsFromResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudHsmInternalException":
    case "com.amazonaws.cloudhsm#CloudHsmInternalException":
      response = await deserializeAws_json1_1CloudHsmInternalExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsm#CloudHsmServiceException":
      response = await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazonaws.cloudhsm#InvalidRequestException":
      response = await deserializeAws_json1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.cloudhsm#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

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
    __type: "CloudHsmInternalException",
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
    __type: "CloudHsmServiceException",
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
    __type: "InvalidRequestException",
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
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagList !== undefined) {
    bodyParams["TagList"] = serializeAws_json1_1TagList(input.TagList, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateHapgRequest = (
  input: CreateHapgRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Label !== undefined) {
    bodyParams["Label"] = input.Label;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateHsmRequest = (
  input: CreateHsmRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientToken !== undefined) {
    bodyParams["ClientToken"] = input.ClientToken;
  }
  if (input.EniIp !== undefined) {
    bodyParams["EniIp"] = input.EniIp;
  }
  if (input.ExternalId !== undefined) {
    bodyParams["ExternalId"] = input.ExternalId;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.SshKey !== undefined) {
    bodyParams["SshKey"] = input.SshKey;
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  if (input.SubscriptionType !== undefined) {
    bodyParams["SubscriptionType"] = input.SubscriptionType;
  }
  if (input.SyslogIp !== undefined) {
    bodyParams["SyslogIp"] = input.SyslogIp;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateLunaClientRequest = (
  input: CreateLunaClientRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Certificate !== undefined) {
    bodyParams["Certificate"] = input.Certificate;
  }
  if (input.Label !== undefined) {
    bodyParams["Label"] = input.Label;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteHapgRequest = (
  input: DeleteHapgRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HapgArn !== undefined) {
    bodyParams["HapgArn"] = input.HapgArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteHsmRequest = (
  input: DeleteHsmRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HsmArn !== undefined) {
    bodyParams["HsmArn"] = input.HsmArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteLunaClientRequest = (
  input: DeleteLunaClientRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientArn !== undefined) {
    bodyParams["ClientArn"] = input.ClientArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeHapgRequest = (
  input: DescribeHapgRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HapgArn !== undefined) {
    bodyParams["HapgArn"] = input.HapgArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeHsmRequest = (
  input: DescribeHsmRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HsmArn !== undefined) {
    bodyParams["HsmArn"] = input.HsmArn;
  }
  if (input.HsmSerialNumber !== undefined) {
    bodyParams["HsmSerialNumber"] = input.HsmSerialNumber;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeLunaClientRequest = (
  input: DescribeLunaClientRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateFingerprint !== undefined) {
    bodyParams["CertificateFingerprint"] = input.CertificateFingerprint;
  }
  if (input.ClientArn !== undefined) {
    bodyParams["ClientArn"] = input.ClientArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetConfigRequest = (
  input: GetConfigRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientArn !== undefined) {
    bodyParams["ClientArn"] = input.ClientArn;
  }
  if (input.ClientVersion !== undefined) {
    bodyParams["ClientVersion"] = input.ClientVersion;
  }
  if (input.HapgList !== undefined) {
    bodyParams["HapgList"] = serializeAws_json1_1HapgList(
      input.HapgList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1HapgList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ListAvailableZonesRequest = (
  input: ListAvailableZonesRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1ListHapgsRequest = (
  input: ListHapgsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListHsmsRequest = (
  input: ListHsmsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListLunaClientsRequest = (
  input: ListLunaClientsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyHapgRequest = (
  input: ModifyHapgRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.HapgArn !== undefined) {
    bodyParams["HapgArn"] = input.HapgArn;
  }
  if (input.Label !== undefined) {
    bodyParams["Label"] = input.Label;
  }
  if (input.PartitionSerialList !== undefined) {
    bodyParams["PartitionSerialList"] = serializeAws_json1_1PartitionSerialList(
      input.PartitionSerialList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyHsmRequest = (
  input: ModifyHsmRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EniIp !== undefined) {
    bodyParams["EniIp"] = input.EniIp;
  }
  if (input.ExternalId !== undefined) {
    bodyParams["ExternalId"] = input.ExternalId;
  }
  if (input.HsmArn !== undefined) {
    bodyParams["HsmArn"] = input.HsmArn;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.SubnetId !== undefined) {
    bodyParams["SubnetId"] = input.SubnetId;
  }
  if (input.SyslogIp !== undefined) {
    bodyParams["SyslogIp"] = input.SyslogIp;
  }
  return bodyParams;
};

const serializeAws_json1_1ModifyLunaClientRequest = (
  input: ModifyLunaClientRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Certificate !== undefined) {
    bodyParams["Certificate"] = input.Certificate;
  }
  if (input.ClientArn !== undefined) {
    bodyParams["ClientArn"] = input.ClientArn;
  }
  return bodyParams;
};

const serializeAws_json1_1PartitionSerialList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1RemoveTagsFromResourceRequest = (
  input: RemoveTagsFromResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.TagKeyList !== undefined) {
    bodyParams["TagKeyList"] = serializeAws_json1_1TagKeyList(
      input.TagKeyList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const deserializeAws_json1_1AZList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AddTagsToResourceResponse = (
  output: any,
  context: __SerdeContext
): AddTagsToResourceResponse => {
  let contents: any = {
    __type: "AddTagsToResourceResponse",
    Status: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1ClientList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CloudHsmInternalException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalException => {
  let contents: any = {
    __type: "CloudHsmInternalException",
    message: undefined,
    retryable: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.retryable !== undefined) {
    contents.retryable = output.retryable;
  }
  return contents;
};

const deserializeAws_json1_1CloudHsmServiceException = (
  output: any,
  context: __SerdeContext
): CloudHsmServiceException => {
  let contents: any = {
    __type: "CloudHsmServiceException",
    message: undefined,
    retryable: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.retryable !== undefined) {
    contents.retryable = output.retryable;
  }
  return contents;
};

const deserializeAws_json1_1CreateHapgResponse = (
  output: any,
  context: __SerdeContext
): CreateHapgResponse => {
  let contents: any = {
    __type: "CreateHapgResponse",
    HapgArn: undefined
  };
  if (output.HapgArn !== undefined) {
    contents.HapgArn = output.HapgArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateHsmResponse = (
  output: any,
  context: __SerdeContext
): CreateHsmResponse => {
  let contents: any = {
    __type: "CreateHsmResponse",
    HsmArn: undefined
  };
  if (output.HsmArn !== undefined) {
    contents.HsmArn = output.HsmArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateLunaClientResponse = (
  output: any,
  context: __SerdeContext
): CreateLunaClientResponse => {
  let contents: any = {
    __type: "CreateLunaClientResponse",
    ClientArn: undefined
  };
  if (output.ClientArn !== undefined) {
    contents.ClientArn = output.ClientArn;
  }
  return contents;
};

const deserializeAws_json1_1DeleteHapgResponse = (
  output: any,
  context: __SerdeContext
): DeleteHapgResponse => {
  let contents: any = {
    __type: "DeleteHapgResponse",
    Status: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DeleteHsmResponse = (
  output: any,
  context: __SerdeContext
): DeleteHsmResponse => {
  let contents: any = {
    __type: "DeleteHsmResponse",
    Status: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DeleteLunaClientResponse = (
  output: any,
  context: __SerdeContext
): DeleteLunaClientResponse => {
  let contents: any = {
    __type: "DeleteLunaClientResponse",
    Status: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeHapgResponse = (
  output: any,
  context: __SerdeContext
): DescribeHapgResponse => {
  let contents: any = {
    __type: "DescribeHapgResponse",
    HapgArn: undefined,
    HapgSerial: undefined,
    HsmsLastActionFailed: undefined,
    HsmsPendingDeletion: undefined,
    HsmsPendingRegistration: undefined,
    Label: undefined,
    LastModifiedTimestamp: undefined,
    PartitionSerialList: undefined,
    State: undefined
  };
  if (output.HapgArn !== undefined) {
    contents.HapgArn = output.HapgArn;
  }
  if (output.HapgSerial !== undefined) {
    contents.HapgSerial = output.HapgSerial;
  }
  if (output.HsmsLastActionFailed !== undefined) {
    contents.HsmsLastActionFailed = deserializeAws_json1_1HsmList(
      output.HsmsLastActionFailed,
      context
    );
  }
  if (output.HsmsPendingDeletion !== undefined) {
    contents.HsmsPendingDeletion = deserializeAws_json1_1HsmList(
      output.HsmsPendingDeletion,
      context
    );
  }
  if (output.HsmsPendingRegistration !== undefined) {
    contents.HsmsPendingRegistration = deserializeAws_json1_1HsmList(
      output.HsmsPendingRegistration,
      context
    );
  }
  if (output.Label !== undefined) {
    contents.Label = output.Label;
  }
  if (output.LastModifiedTimestamp !== undefined) {
    contents.LastModifiedTimestamp = output.LastModifiedTimestamp;
  }
  if (output.PartitionSerialList !== undefined) {
    contents.PartitionSerialList = deserializeAws_json1_1PartitionSerialList(
      output.PartitionSerialList,
      context
    );
  }
  if (output.State !== undefined) {
    contents.State = output.State;
  }
  return contents;
};

const deserializeAws_json1_1DescribeHsmResponse = (
  output: any,
  context: __SerdeContext
): DescribeHsmResponse => {
  let contents: any = {
    __type: "DescribeHsmResponse",
    AvailabilityZone: undefined,
    EniId: undefined,
    EniIp: undefined,
    HsmArn: undefined,
    HsmType: undefined,
    IamRoleArn: undefined,
    Partitions: undefined,
    SerialNumber: undefined,
    ServerCertLastUpdated: undefined,
    ServerCertUri: undefined,
    SoftwareVersion: undefined,
    SshKeyLastUpdated: undefined,
    SshPublicKey: undefined,
    Status: undefined,
    StatusDetails: undefined,
    SubnetId: undefined,
    SubscriptionEndDate: undefined,
    SubscriptionStartDate: undefined,
    SubscriptionType: undefined,
    VendorName: undefined,
    VpcId: undefined
  };
  if (output.AvailabilityZone !== undefined) {
    contents.AvailabilityZone = output.AvailabilityZone;
  }
  if (output.EniId !== undefined) {
    contents.EniId = output.EniId;
  }
  if (output.EniIp !== undefined) {
    contents.EniIp = output.EniIp;
  }
  if (output.HsmArn !== undefined) {
    contents.HsmArn = output.HsmArn;
  }
  if (output.HsmType !== undefined) {
    contents.HsmType = output.HsmType;
  }
  if (output.IamRoleArn !== undefined) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.Partitions !== undefined) {
    contents.Partitions = deserializeAws_json1_1PartitionList(
      output.Partitions,
      context
    );
  }
  if (output.SerialNumber !== undefined) {
    contents.SerialNumber = output.SerialNumber;
  }
  if (output.ServerCertLastUpdated !== undefined) {
    contents.ServerCertLastUpdated = output.ServerCertLastUpdated;
  }
  if (output.ServerCertUri !== undefined) {
    contents.ServerCertUri = output.ServerCertUri;
  }
  if (output.SoftwareVersion !== undefined) {
    contents.SoftwareVersion = output.SoftwareVersion;
  }
  if (output.SshKeyLastUpdated !== undefined) {
    contents.SshKeyLastUpdated = output.SshKeyLastUpdated;
  }
  if (output.SshPublicKey !== undefined) {
    contents.SshPublicKey = output.SshPublicKey;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.StatusDetails !== undefined) {
    contents.StatusDetails = output.StatusDetails;
  }
  if (output.SubnetId !== undefined) {
    contents.SubnetId = output.SubnetId;
  }
  if (output.SubscriptionEndDate !== undefined) {
    contents.SubscriptionEndDate = output.SubscriptionEndDate;
  }
  if (output.SubscriptionStartDate !== undefined) {
    contents.SubscriptionStartDate = output.SubscriptionStartDate;
  }
  if (output.SubscriptionType !== undefined) {
    contents.SubscriptionType = output.SubscriptionType;
  }
  if (output.VendorName !== undefined) {
    contents.VendorName = output.VendorName;
  }
  if (output.VpcId !== undefined) {
    contents.VpcId = output.VpcId;
  }
  return contents;
};

const deserializeAws_json1_1DescribeLunaClientResponse = (
  output: any,
  context: __SerdeContext
): DescribeLunaClientResponse => {
  let contents: any = {
    __type: "DescribeLunaClientResponse",
    Certificate: undefined,
    CertificateFingerprint: undefined,
    ClientArn: undefined,
    Label: undefined,
    LastModifiedTimestamp: undefined
  };
  if (output.Certificate !== undefined) {
    contents.Certificate = output.Certificate;
  }
  if (output.CertificateFingerprint !== undefined) {
    contents.CertificateFingerprint = output.CertificateFingerprint;
  }
  if (output.ClientArn !== undefined) {
    contents.ClientArn = output.ClientArn;
  }
  if (output.Label !== undefined) {
    contents.Label = output.Label;
  }
  if (output.LastModifiedTimestamp !== undefined) {
    contents.LastModifiedTimestamp = output.LastModifiedTimestamp;
  }
  return contents;
};

const deserializeAws_json1_1GetConfigResponse = (
  output: any,
  context: __SerdeContext
): GetConfigResponse => {
  let contents: any = {
    __type: "GetConfigResponse",
    ConfigCred: undefined,
    ConfigFile: undefined,
    ConfigType: undefined
  };
  if (output.ConfigCred !== undefined) {
    contents.ConfigCred = output.ConfigCred;
  }
  if (output.ConfigFile !== undefined) {
    contents.ConfigFile = output.ConfigFile;
  }
  if (output.ConfigType !== undefined) {
    contents.ConfigType = output.ConfigType;
  }
  return contents;
};

const deserializeAws_json1_1HapgList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1HsmList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    message: undefined,
    retryable: undefined
  };
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.retryable !== undefined) {
    contents.retryable = output.retryable;
  }
  return contents;
};

const deserializeAws_json1_1ListAvailableZonesResponse = (
  output: any,
  context: __SerdeContext
): ListAvailableZonesResponse => {
  let contents: any = {
    __type: "ListAvailableZonesResponse",
    AZList: undefined
  };
  if (output.AZList !== undefined) {
    contents.AZList = deserializeAws_json1_1AZList(output.AZList, context);
  }
  return contents;
};

const deserializeAws_json1_1ListHapgsResponse = (
  output: any,
  context: __SerdeContext
): ListHapgsResponse => {
  let contents: any = {
    __type: "ListHapgsResponse",
    HapgList: undefined,
    NextToken: undefined
  };
  if (output.HapgList !== undefined) {
    contents.HapgList = deserializeAws_json1_1HapgList(
      output.HapgList,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListHsmsResponse = (
  output: any,
  context: __SerdeContext
): ListHsmsResponse => {
  let contents: any = {
    __type: "ListHsmsResponse",
    HsmList: undefined,
    NextToken: undefined
  };
  if (output.HsmList !== undefined) {
    contents.HsmList = deserializeAws_json1_1HsmList(output.HsmList, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListLunaClientsResponse = (
  output: any,
  context: __SerdeContext
): ListLunaClientsResponse => {
  let contents: any = {
    __type: "ListLunaClientsResponse",
    ClientList: undefined,
    NextToken: undefined
  };
  if (output.ClientList !== undefined) {
    contents.ClientList = deserializeAws_json1_1ClientList(
      output.ClientList,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    TagList: undefined
  };
  if (output.TagList !== undefined) {
    contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
  }
  return contents;
};

const deserializeAws_json1_1ModifyHapgResponse = (
  output: any,
  context: __SerdeContext
): ModifyHapgResponse => {
  let contents: any = {
    __type: "ModifyHapgResponse",
    HapgArn: undefined
  };
  if (output.HapgArn !== undefined) {
    contents.HapgArn = output.HapgArn;
  }
  return contents;
};

const deserializeAws_json1_1ModifyHsmResponse = (
  output: any,
  context: __SerdeContext
): ModifyHsmResponse => {
  let contents: any = {
    __type: "ModifyHsmResponse",
    HsmArn: undefined
  };
  if (output.HsmArn !== undefined) {
    contents.HsmArn = output.HsmArn;
  }
  return contents;
};

const deserializeAws_json1_1ModifyLunaClientResponse = (
  output: any,
  context: __SerdeContext
): ModifyLunaClientResponse => {
  let contents: any = {
    __type: "ModifyLunaClientResponse",
    ClientArn: undefined
  };
  if (output.ClientArn !== undefined) {
    contents.ClientArn = output.ClientArn;
  }
  return contents;
};

const deserializeAws_json1_1PartitionList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PartitionSerialList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RemoveTagsFromResourceResponse = (
  output: any,
  context: __SerdeContext
): RemoveTagsFromResourceResponse => {
  let contents: any = {
    __type: "RemoveTagsFromResourceResponse",
    Status: undefined
  };
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
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
