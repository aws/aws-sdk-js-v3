import {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput
} from "../commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput
} from "../commands/BatchRevokePermissionsCommand";
import {
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput
} from "../commands/DeregisterResourceCommand";
import {
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput
} from "../commands/DescribeResourceCommand";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput
} from "../commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput
} from "../commands/GetEffectivePermissionsForPathCommand";
import {
  GrantPermissionsCommandInput,
  GrantPermissionsCommandOutput
} from "../commands/GrantPermissionsCommand";
import {
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
} from "../commands/ListPermissionsCommand";
import {
  ListResourcesCommandInput,
  ListResourcesCommandOutput
} from "../commands/ListResourcesCommand";
import {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput
} from "../commands/PutDataLakeSettingsCommand";
import {
  RegisterResourceCommandInput,
  RegisterResourceCommandOutput
} from "../commands/RegisterResourceCommand";
import {
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput
} from "../commands/RevokePermissionsCommand";
import {
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput
} from "../commands/UpdateResourceCommand";
import {
  AlreadyExistsException,
  BatchGrantPermissionsRequest,
  BatchGrantPermissionsResponse,
  BatchPermissionsFailureEntry,
  BatchPermissionsRequestEntry,
  BatchRevokePermissionsRequest,
  BatchRevokePermissionsResponse,
  CatalogResource,
  ColumnWildcard,
  ConcurrentModificationException,
  DataLakePrincipal,
  DataLakeSettings,
  DataLocationResource,
  DatabaseResource,
  DeregisterResourceRequest,
  DeregisterResourceResponse,
  DescribeResourceRequest,
  DescribeResourceResponse,
  EntityNotFoundException,
  ErrorDetail,
  FilterCondition,
  GetDataLakeSettingsRequest,
  GetDataLakeSettingsResponse,
  GetEffectivePermissionsForPathRequest,
  GetEffectivePermissionsForPathResponse,
  GrantPermissionsRequest,
  GrantPermissionsResponse,
  InternalServiceException,
  InvalidInputException,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListResourcesRequest,
  ListResourcesResponse,
  OperationTimeoutException,
  Permission,
  PrincipalPermissions,
  PrincipalResourcePermissions,
  PutDataLakeSettingsRequest,
  PutDataLakeSettingsResponse,
  RegisterResourceRequest,
  RegisterResourceResponse,
  Resource,
  ResourceInfo,
  RevokePermissionsRequest,
  RevokePermissionsResponse,
  TableResource,
  TableWithColumnsResource,
  UpdateResourceRequest,
  UpdateResourceResponse
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

export const serializeAws_json1_1BatchGrantPermissionsCommand = async (
  input: BatchGrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.BatchGrantPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchGrantPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1BatchRevokePermissionsCommand = async (
  input: BatchRevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.BatchRevokePermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1BatchRevokePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterResourceCommand = async (
  input: DeregisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.DeregisterResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeregisterResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeResourceCommand = async (
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.DescribeResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataLakeSettingsCommand = async (
  input: GetDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.GetDataLakeSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDataLakeSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEffectivePermissionsForPathCommand = async (
  input: GetEffectivePermissionsForPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.GetEffectivePermissionsForPath"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetEffectivePermissionsForPathRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GrantPermissionsCommand = async (
  input: GrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.GrantPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GrantPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.ListPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.ListResources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListResourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutDataLakeSettingsCommand = async (
  input: PutDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.PutDataLakeSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutDataLakeSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterResourceCommand = async (
  input: RegisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.RegisterResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokePermissionsCommand = async (
  input: RevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.RevokePermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RevokePermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSLakeFormation.UpdateResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1BatchGrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchGrantPermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchGrantPermissionsResponse(data, context);
  const response: BatchGrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGrantPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchGrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
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
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1BatchRevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1BatchRevokePermissionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1BatchRevokePermissionsResponse(
    data,
    context
  );
  const response: BatchRevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchRevokePermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1BatchRevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
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
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1DeregisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeregisterResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterResourceResponse(data, context);
  const response: DeregisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
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
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
  const response: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
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
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1GetDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDataLakeSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataLakeSettingsResponse(data, context);
  const response: GetDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataLakeSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
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
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1GetEffectivePermissionsForPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEffectivePermissionsForPathCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEffectivePermissionsForPathResponse(
    data,
    context
  );
  const response: GetEffectivePermissionsForPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEffectivePermissionsForPathResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEffectivePermissionsForPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
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
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1GrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GrantPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GrantPermissionsResponse(data, context);
  const response: GrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GrantPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.michigan.common.exceptions#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPermissionsResponse(data, context);
  const response: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
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
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListResourcesResponse(data, context);
  const response: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListResourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
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
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1PutDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutDataLakeSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutDataLakeSettingsResponse(data, context);
  const response: PutDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDataLakeSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
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
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1RegisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterResourceResponse(data, context);
  const response: RegisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
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
    case "AlreadyExistsException":
    case "com.amazonaws.michigan.common.exceptions#AlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1AlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

export const deserializeAws_json1_1RevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokePermissionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RevokePermissionsResponse(data, context);
  const response: RevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokePermissionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.michigan.common.exceptions#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
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

export const deserializeAws_json1_1UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
  const response: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
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
    case "EntityNotFoundException":
    case "com.amazonaws.michigan.common.exceptions#EntityNotFoundException":
      response = {
        ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.michigan.common.exceptions#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInputException":
    case "com.amazonaws.michigan.common.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationTimeoutException":
    case "com.amazonaws.michigan.common.exceptions#OperationTimeoutException":
      response = {
        ...(await deserializeAws_json1_1OperationTimeoutExceptionResponse(
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

const deserializeAws_json1_1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AlreadyExistsException(
    body,
    context
  );
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1EntityNotFoundException(
    body,
    context
  );
  const contents: EntityNotFoundException = {
    name: "EntityNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(
    body,
    context
  );
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationTimeoutException(
    body,
    context
  );
  const contents: OperationTimeoutException = {
    name: "OperationTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BatchGrantPermissionsRequest = (
  input: BatchGrantPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.Entries !== undefined && {
      Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(
        input.Entries,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchPermissionsRequestEntry = (
  input: BatchPermissionsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Permissions !== undefined && {
      Permissions: serializeAws_json1_1PermissionList(
        input.Permissions,
        context
      )
    }),
    ...(input.PermissionsWithGrantOption !== undefined && {
      PermissionsWithGrantOption: serializeAws_json1_1PermissionList(
        input.PermissionsWithGrantOption,
        context
      )
    }),
    ...(input.Principal !== undefined && {
      Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context)
    }),
    ...(input.Resource !== undefined && {
      Resource: serializeAws_json1_1Resource(input.Resource, context)
    })
  };
};

const serializeAws_json1_1BatchPermissionsRequestEntryList = (
  input: BatchPermissionsRequestEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1BatchPermissionsRequestEntry(entry, context)
  );
};

const serializeAws_json1_1BatchRevokePermissionsRequest = (
  input: BatchRevokePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.Entries !== undefined && {
      Entries: serializeAws_json1_1BatchPermissionsRequestEntryList(
        input.Entries,
        context
      )
    })
  };
};

const serializeAws_json1_1CatalogResource = (
  input: CatalogResource,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ColumnNames = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ColumnWildcard = (
  input: ColumnWildcard,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExcludedColumnNames !== undefined && {
      ExcludedColumnNames: serializeAws_json1_1ColumnNames(
        input.ExcludedColumnNames,
        context
      )
    })
  };
};

const serializeAws_json1_1DataLakePrincipal = (
  input: DataLakePrincipal,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataLakePrincipalIdentifier !== undefined && {
      DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier
    })
  };
};

const serializeAws_json1_1DataLakePrincipalList = (
  input: DataLakePrincipal[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1DataLakePrincipal(entry, context)
  );
};

const serializeAws_json1_1DataLakeSettings = (
  input: DataLakeSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreateDatabaseDefaultPermissions !== undefined && {
      CreateDatabaseDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(
        input.CreateDatabaseDefaultPermissions,
        context
      )
    }),
    ...(input.CreateTableDefaultPermissions !== undefined && {
      CreateTableDefaultPermissions: serializeAws_json1_1PrincipalPermissionsList(
        input.CreateTableDefaultPermissions,
        context
      )
    }),
    ...(input.DataLakeAdmins !== undefined && {
      DataLakeAdmins: serializeAws_json1_1DataLakePrincipalList(
        input.DataLakeAdmins,
        context
      )
    })
  };
};

const serializeAws_json1_1DataLocationResource = (
  input: DataLocationResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1DatabaseResource = (
  input: DatabaseResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeregisterResourceRequest = (
  input: DeregisterResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1DescribeResourceRequest = (
  input: DescribeResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1GetDataLakeSettingsRequest = (
  input: GetDataLakeSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId })
  };
};

const serializeAws_json1_1GetEffectivePermissionsForPathRequest = (
  input: GetEffectivePermissionsForPathRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1GrantPermissionsRequest = (
  input: GrantPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.Permissions !== undefined && {
      Permissions: serializeAws_json1_1PermissionList(
        input.Permissions,
        context
      )
    }),
    ...(input.PermissionsWithGrantOption !== undefined && {
      PermissionsWithGrantOption: serializeAws_json1_1PermissionList(
        input.PermissionsWithGrantOption,
        context
      )
    }),
    ...(input.Principal !== undefined && {
      Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context)
    }),
    ...(input.Resource !== undefined && {
      Resource: serializeAws_json1_1Resource(input.Resource, context)
    })
  };
};

const serializeAws_json1_1ListPermissionsRequest = (
  input: ListPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Principal !== undefined && {
      Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context)
    }),
    ...(input.Resource !== undefined && {
      Resource: serializeAws_json1_1Resource(input.Resource, context)
    }),
    ...(input.ResourceType !== undefined && {
      ResourceType: input.ResourceType
    })
  };
};

const serializeAws_json1_1ListResourcesRequest = (
  input: ListResourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterConditionList !== undefined && {
      FilterConditionList: serializeAws_json1_1FilterConditionList(
        input.FilterConditionList,
        context
      )
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1PermissionList = (
  input: (Permission | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1PrincipalPermissions = (
  input: PrincipalPermissions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Permissions !== undefined && {
      Permissions: serializeAws_json1_1PermissionList(
        input.Permissions,
        context
      )
    }),
    ...(input.Principal !== undefined && {
      Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context)
    })
  };
};

const serializeAws_json1_1PrincipalPermissionsList = (
  input: PrincipalPermissions[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1PrincipalPermissions(entry, context)
  );
};

const serializeAws_json1_1PutDataLakeSettingsRequest = (
  input: PutDataLakeSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.DataLakeSettings !== undefined && {
      DataLakeSettings: serializeAws_json1_1DataLakeSettings(
        input.DataLakeSettings,
        context
      )
    })
  };
};

const serializeAws_json1_1RegisterResourceRequest = (
  input: RegisterResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.UseServiceLinkedRole !== undefined && {
      UseServiceLinkedRole: input.UseServiceLinkedRole
    })
  };
};

const serializeAws_json1_1Resource = (
  input: Resource,
  context: __SerdeContext
): any => {
  return {
    ...(input.Catalog !== undefined && {
      Catalog: serializeAws_json1_1CatalogResource(input.Catalog, context)
    }),
    ...(input.DataLocation !== undefined && {
      DataLocation: serializeAws_json1_1DataLocationResource(
        input.DataLocation,
        context
      )
    }),
    ...(input.Database !== undefined && {
      Database: serializeAws_json1_1DatabaseResource(input.Database, context)
    }),
    ...(input.Table !== undefined && {
      Table: serializeAws_json1_1TableResource(input.Table, context)
    }),
    ...(input.TableWithColumns !== undefined && {
      TableWithColumns: serializeAws_json1_1TableWithColumnsResource(
        input.TableWithColumns,
        context
      )
    })
  };
};

const serializeAws_json1_1RevokePermissionsRequest = (
  input: RevokePermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && { CatalogId: input.CatalogId }),
    ...(input.Permissions !== undefined && {
      Permissions: serializeAws_json1_1PermissionList(
        input.Permissions,
        context
      )
    }),
    ...(input.PermissionsWithGrantOption !== undefined && {
      PermissionsWithGrantOption: serializeAws_json1_1PermissionList(
        input.PermissionsWithGrantOption,
        context
      )
    }),
    ...(input.Principal !== undefined && {
      Principal: serializeAws_json1_1DataLakePrincipal(input.Principal, context)
    }),
    ...(input.Resource !== undefined && {
      Resource: serializeAws_json1_1Resource(input.Resource, context)
    })
  };
};

const serializeAws_json1_1TableResource = (
  input: TableResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseName !== undefined && {
      DatabaseName: input.DatabaseName
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1TableWithColumnsResource = (
  input: TableWithColumnsResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.ColumnNames !== undefined && {
      ColumnNames: serializeAws_json1_1ColumnNames(input.ColumnNames, context)
    }),
    ...(input.ColumnWildcard !== undefined && {
      ColumnWildcard: serializeAws_json1_1ColumnWildcard(
        input.ColumnWildcard,
        context
      )
    }),
    ...(input.DatabaseName !== undefined && {
      DatabaseName: input.DatabaseName
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1UpdateResourceRequest = (
  input: UpdateResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn })
  };
};

const serializeAws_json1_1FilterCondition = (
  input: FilterCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComparisonOperator !== undefined && {
      ComparisonOperator: input.ComparisonOperator
    }),
    ...(input.Field !== undefined && { Field: input.Field }),
    ...(input.StringValueList !== undefined && {
      StringValueList: serializeAws_json1_1StringValueList(
        input.StringValueList,
        context
      )
    })
  };
};

const serializeAws_json1_1FilterConditionList = (
  input: FilterCondition[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1FilterCondition(entry, context)
  );
};

const serializeAws_json1_1StringValueList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1BatchGrantPermissionsResponse = (
  output: any,
  context: __SerdeContext
): BatchGrantPermissionsResponse => {
  let contents: any = {
    __type: "BatchGrantPermissionsResponse",
    Failures: undefined
  };
  if (output.Failures !== undefined && output.Failures !== null) {
    contents.Failures = deserializeAws_json1_1BatchPermissionsFailureList(
      output.Failures,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchPermissionsFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry => {
  let contents: any = {
    __type: "BatchPermissionsFailureEntry",
    Error: undefined,
    RequestEntry: undefined
  };
  if (output.Error !== undefined && output.Error !== null) {
    contents.Error = deserializeAws_json1_1ErrorDetail(output.Error, context);
  }
  if (output.RequestEntry !== undefined && output.RequestEntry !== null) {
    contents.RequestEntry = deserializeAws_json1_1BatchPermissionsRequestEntry(
      output.RequestEntry,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchPermissionsFailureList = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchPermissionsFailureEntry(entry, context)
  );
};

const deserializeAws_json1_1BatchPermissionsRequestEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsRequestEntry => {
  let contents: any = {
    __type: "BatchPermissionsRequestEntry",
    Id: undefined,
    Permissions: undefined,
    PermissionsWithGrantOption: undefined,
    Principal: undefined,
    Resource: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_json1_1PermissionList(
      output.Permissions,
      context
    );
  }
  if (
    output.PermissionsWithGrantOption !== undefined &&
    output.PermissionsWithGrantOption !== null
  ) {
    contents.PermissionsWithGrantOption = deserializeAws_json1_1PermissionList(
      output.PermissionsWithGrantOption,
      context
    );
  }
  if (output.Principal !== undefined && output.Principal !== null) {
    contents.Principal = deserializeAws_json1_1DataLakePrincipal(
      output.Principal,
      context
    );
  }
  if (output.Resource !== undefined && output.Resource !== null) {
    contents.Resource = deserializeAws_json1_1Resource(
      output.Resource,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchRevokePermissionsResponse = (
  output: any,
  context: __SerdeContext
): BatchRevokePermissionsResponse => {
  let contents: any = {
    __type: "BatchRevokePermissionsResponse",
    Failures: undefined
  };
  if (output.Failures !== undefined && output.Failures !== null) {
    contents.Failures = deserializeAws_json1_1BatchPermissionsFailureList(
      output.Failures,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CatalogResource = (
  output: any,
  context: __SerdeContext
): CatalogResource => {
  let contents: any = {
    __type: "CatalogResource"
  };
  return contents;
};

const deserializeAws_json1_1ColumnNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ColumnWildcard = (
  output: any,
  context: __SerdeContext
): ColumnWildcard => {
  let contents: any = {
    __type: "ColumnWildcard",
    ExcludedColumnNames: undefined
  };
  if (
    output.ExcludedColumnNames !== undefined &&
    output.ExcludedColumnNames !== null
  ) {
    contents.ExcludedColumnNames = deserializeAws_json1_1ColumnNames(
      output.ExcludedColumnNames,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataLakePrincipal = (
  output: any,
  context: __SerdeContext
): DataLakePrincipal => {
  let contents: any = {
    __type: "DataLakePrincipal",
    DataLakePrincipalIdentifier: undefined
  };
  if (
    output.DataLakePrincipalIdentifier !== undefined &&
    output.DataLakePrincipalIdentifier !== null
  ) {
    contents.DataLakePrincipalIdentifier = output.DataLakePrincipalIdentifier;
  }
  return contents;
};

const deserializeAws_json1_1DataLakePrincipalList = (
  output: any,
  context: __SerdeContext
): DataLakePrincipal[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataLakePrincipal(entry, context)
  );
};

const deserializeAws_json1_1DataLakeSettings = (
  output: any,
  context: __SerdeContext
): DataLakeSettings => {
  let contents: any = {
    __type: "DataLakeSettings",
    CreateDatabaseDefaultPermissions: undefined,
    CreateTableDefaultPermissions: undefined,
    DataLakeAdmins: undefined
  };
  if (
    output.CreateDatabaseDefaultPermissions !== undefined &&
    output.CreateDatabaseDefaultPermissions !== null
  ) {
    contents.CreateDatabaseDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(
      output.CreateDatabaseDefaultPermissions,
      context
    );
  }
  if (
    output.CreateTableDefaultPermissions !== undefined &&
    output.CreateTableDefaultPermissions !== null
  ) {
    contents.CreateTableDefaultPermissions = deserializeAws_json1_1PrincipalPermissionsList(
      output.CreateTableDefaultPermissions,
      context
    );
  }
  if (output.DataLakeAdmins !== undefined && output.DataLakeAdmins !== null) {
    contents.DataLakeAdmins = deserializeAws_json1_1DataLakePrincipalList(
      output.DataLakeAdmins,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataLocationResource = (
  output: any,
  context: __SerdeContext
): DataLocationResource => {
  let contents: any = {
    __type: "DataLocationResource",
    ResourceArn: undefined
  };
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  return contents;
};

const deserializeAws_json1_1DatabaseResource = (
  output: any,
  context: __SerdeContext
): DatabaseResource => {
  let contents: any = {
    __type: "DatabaseResource",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1DeregisterResourceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterResourceResponse => {
  let contents: any = {
    __type: "DeregisterResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeResourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeResourceResponse => {
  let contents: any = {
    __type: "DescribeResourceResponse",
    ResourceInfo: undefined
  };
  if (output.ResourceInfo !== undefined && output.ResourceInfo !== null) {
    contents.ResourceInfo = deserializeAws_json1_1ResourceInfo(
      output.ResourceInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDataLakeSettingsResponse = (
  output: any,
  context: __SerdeContext
): GetDataLakeSettingsResponse => {
  let contents: any = {
    __type: "GetDataLakeSettingsResponse",
    DataLakeSettings: undefined
  };
  if (
    output.DataLakeSettings !== undefined &&
    output.DataLakeSettings !== null
  ) {
    contents.DataLakeSettings = deserializeAws_json1_1DataLakeSettings(
      output.DataLakeSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetEffectivePermissionsForPathResponse = (
  output: any,
  context: __SerdeContext
): GetEffectivePermissionsForPathResponse => {
  let contents: any = {
    __type: "GetEffectivePermissionsForPathResponse",
    NextToken: undefined,
    Permissions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_json1_1PrincipalResourcePermissionsList(
      output.Permissions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GrantPermissionsResponse = (
  output: any,
  context: __SerdeContext
): GrantPermissionsResponse => {
  let contents: any = {
    __type: "GrantPermissionsResponse"
  };
  return contents;
};

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  let contents: any = {
    __type: "ListPermissionsResponse",
    NextToken: undefined,
    PrincipalResourcePermissions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.PrincipalResourcePermissions !== undefined &&
    output.PrincipalResourcePermissions !== null
  ) {
    contents.PrincipalResourcePermissions = deserializeAws_json1_1PrincipalResourcePermissionsList(
      output.PrincipalResourcePermissions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListResourcesResponse = (
  output: any,
  context: __SerdeContext
): ListResourcesResponse => {
  let contents: any = {
    __type: "ListResourcesResponse",
    NextToken: undefined,
    ResourceInfoList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ResourceInfoList !== undefined &&
    output.ResourceInfoList !== null
  ) {
    contents.ResourceInfoList = deserializeAws_json1_1ResourceInfoList(
      output.ResourceInfoList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PermissionList = (
  output: any,
  context: __SerdeContext
): (Permission | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1PrincipalPermissions = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions => {
  let contents: any = {
    __type: "PrincipalPermissions",
    Permissions: undefined,
    Principal: undefined
  };
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_json1_1PermissionList(
      output.Permissions,
      context
    );
  }
  if (output.Principal !== undefined && output.Principal !== null) {
    contents.Principal = deserializeAws_json1_1DataLakePrincipal(
      output.Principal,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PrincipalPermissions(entry, context)
  );
};

const deserializeAws_json1_1PrincipalResourcePermissions = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions => {
  let contents: any = {
    __type: "PrincipalResourcePermissions",
    Permissions: undefined,
    PermissionsWithGrantOption: undefined,
    Principal: undefined,
    Resource: undefined
  };
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_json1_1PermissionList(
      output.Permissions,
      context
    );
  }
  if (
    output.PermissionsWithGrantOption !== undefined &&
    output.PermissionsWithGrantOption !== null
  ) {
    contents.PermissionsWithGrantOption = deserializeAws_json1_1PermissionList(
      output.PermissionsWithGrantOption,
      context
    );
  }
  if (output.Principal !== undefined && output.Principal !== null) {
    contents.Principal = deserializeAws_json1_1DataLakePrincipal(
      output.Principal,
      context
    );
  }
  if (output.Resource !== undefined && output.Resource !== null) {
    contents.Resource = deserializeAws_json1_1Resource(
      output.Resource,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PrincipalResourcePermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PrincipalResourcePermissions(entry, context)
  );
};

const deserializeAws_json1_1PutDataLakeSettingsResponse = (
  output: any,
  context: __SerdeContext
): PutDataLakeSettingsResponse => {
  let contents: any = {
    __type: "PutDataLakeSettingsResponse"
  };
  return contents;
};

const deserializeAws_json1_1RegisterResourceResponse = (
  output: any,
  context: __SerdeContext
): RegisterResourceResponse => {
  let contents: any = {
    __type: "RegisterResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    Catalog: undefined,
    DataLocation: undefined,
    Database: undefined,
    Table: undefined,
    TableWithColumns: undefined
  };
  if (output.Catalog !== undefined && output.Catalog !== null) {
    contents.Catalog = deserializeAws_json1_1CatalogResource(
      output.Catalog,
      context
    );
  }
  if (output.DataLocation !== undefined && output.DataLocation !== null) {
    contents.DataLocation = deserializeAws_json1_1DataLocationResource(
      output.DataLocation,
      context
    );
  }
  if (output.Database !== undefined && output.Database !== null) {
    contents.Database = deserializeAws_json1_1DatabaseResource(
      output.Database,
      context
    );
  }
  if (output.Table !== undefined && output.Table !== null) {
    contents.Table = deserializeAws_json1_1TableResource(output.Table, context);
  }
  if (
    output.TableWithColumns !== undefined &&
    output.TableWithColumns !== null
  ) {
    contents.TableWithColumns = deserializeAws_json1_1TableWithColumnsResource(
      output.TableWithColumns,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RevokePermissionsResponse = (
  output: any,
  context: __SerdeContext
): RevokePermissionsResponse => {
  let contents: any = {
    __type: "RevokePermissionsResponse"
  };
  return contents;
};

const deserializeAws_json1_1TableResource = (
  output: any,
  context: __SerdeContext
): TableResource => {
  let contents: any = {
    __type: "TableResource",
    DatabaseName: undefined,
    Name: undefined
  };
  if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1TableWithColumnsResource = (
  output: any,
  context: __SerdeContext
): TableWithColumnsResource => {
  let contents: any = {
    __type: "TableWithColumnsResource",
    ColumnNames: undefined,
    ColumnWildcard: undefined,
    DatabaseName: undefined,
    Name: undefined
  };
  if (output.ColumnNames !== undefined && output.ColumnNames !== null) {
    contents.ColumnNames = deserializeAws_json1_1ColumnNames(
      output.ColumnNames,
      context
    );
  }
  if (output.ColumnWildcard !== undefined && output.ColumnWildcard !== null) {
    contents.ColumnWildcard = deserializeAws_json1_1ColumnWildcard(
      output.ColumnWildcard,
      context
    );
  }
  if (output.DatabaseName !== undefined && output.DatabaseName !== null) {
    contents.DatabaseName = output.DatabaseName;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1UpdateResourceResponse = (
  output: any,
  context: __SerdeContext
): UpdateResourceResponse => {
  let contents: any = {
    __type: "UpdateResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1AlreadyExistsException = (
  output: any,
  context: __SerdeContext
): AlreadyExistsException => {
  let contents: any = {
    __type: "AlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1EntityNotFoundException = (
  output: any,
  context: __SerdeContext
): EntityNotFoundException => {
  let contents: any = {
    __type: "EntityNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ErrorDetail = (
  output: any,
  context: __SerdeContext
): ErrorDetail => {
  let contents: any = {
    __type: "ErrorDetail",
    ErrorCode: undefined,
    ErrorMessage: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.ErrorMessage !== undefined && output.ErrorMessage !== null) {
    contents.ErrorMessage = output.ErrorMessage;
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OperationTimeoutException = (
  output: any,
  context: __SerdeContext
): OperationTimeoutException => {
  let contents: any = {
    __type: "OperationTimeoutException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInfo = (
  output: any,
  context: __SerdeContext
): ResourceInfo => {
  let contents: any = {
    __type: "ResourceInfo",
    LastModified: undefined,
    ResourceArn: undefined,
    RoleArn: undefined
  };
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = new Date(Math.round(output.LastModified * 1000));
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInfoList = (
  output: any,
  context: __SerdeContext
): ResourceInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceInfo(entry, context)
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
