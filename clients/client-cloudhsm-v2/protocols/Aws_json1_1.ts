import {
  CopyBackupToRegionCommandInput,
  CopyBackupToRegionCommandOutput
} from "../commands/CopyBackupToRegionCommand";
import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateHsmCommandInput,
  CreateHsmCommandOutput
} from "../commands/CreateHsmCommand";
import {
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput
} from "../commands/DeleteBackupCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DeleteHsmCommandInput,
  DeleteHsmCommandOutput
} from "../commands/DeleteHsmCommand";
import {
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
} from "../commands/DescribeBackupsCommand";
import {
  DescribeClustersCommandInput,
  DescribeClustersCommandOutput
} from "../commands/DescribeClustersCommand";
import {
  InitializeClusterCommandInput,
  InitializeClusterCommandOutput
} from "../commands/InitializeClusterCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  RestoreBackupCommandInput,
  RestoreBackupCommandOutput
} from "../commands/RestoreBackupCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  Backup,
  Certificates,
  CloudHsmAccessDeniedException,
  CloudHsmInternalFailureException,
  CloudHsmInvalidRequestException,
  CloudHsmResourceNotFoundException,
  CloudHsmServiceException,
  CloudHsmTagException,
  Cluster,
  CopyBackupToRegionRequest,
  CopyBackupToRegionResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateHsmRequest,
  CreateHsmResponse,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteHsmRequest,
  DeleteHsmResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DestinationBackup,
  Hsm,
  InitializeClusterRequest,
  InitializeClusterResponse,
  ListTagsRequest,
  ListTagsResponse,
  RestoreBackupRequest,
  RestoreBackupResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse
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

export const serializeAws_json1_1CopyBackupToRegionCommand = async (
  input: CopyBackupToRegionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.CopyBackupToRegion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CopyBackupToRegionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.CreateCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateHsmCommand = async (
  input: CreateHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.CreateHsm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.DeleteBackup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteBackupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.DeleteCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteHsmCommand = async (
  input: DeleteHsmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.DeleteHsm"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteHsmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.DescribeBackups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBackupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeClustersCommand = async (
  input: DescribeClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.DescribeClusters"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeClustersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InitializeClusterCommand = async (
  input: InitializeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.InitializeCluster"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1InitializeClusterRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.ListTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreBackupCommand = async (
  input: RestoreBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.RestoreBackup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RestoreBackupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "BaldrApiService.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CopyBackupToRegionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CopyBackupToRegionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyBackupToRegionResponse(data, context);
  const response: CopyBackupToRegionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyBackupToRegionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyBackupToRegionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupToRegionCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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

export const deserializeAws_json1_1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateClusterResponse(data, context);
  const response: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
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

export const deserializeAws_json1_1DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
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

export const deserializeAws_json1_1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteClusterResponse(data, context);
  const response: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
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

export const deserializeAws_json1_1DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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

export const deserializeAws_json1_1DescribeClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeClustersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeClustersResponse(data, context);
  const response: DescribeClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClustersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClustersCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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

export const deserializeAws_json1_1InitializeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InitializeClusterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InitializeClusterResponse(data, context);
  const response: InitializeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitializeClusterResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InitializeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitializeClusterCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
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

export const deserializeAws_json1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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

export const deserializeAws_json1_1RestoreBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreBackupResponse(data, context);
  const response: RestoreBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestoreBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreBackupCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "CloudHsmAccessDeniedException":
    case "com.amazonaws.cloudhsmv2#CloudHsmAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInternalFailureException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInternalFailureException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmInvalidRequestException":
    case "com.amazonaws.cloudhsmv2#CloudHsmInvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmResourceNotFoundException":
    case "com.amazonaws.cloudhsmv2#CloudHsmResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmServiceException":
    case "com.amazonaws.cloudhsmv2#CloudHsmServiceException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudHsmTagException":
    case "com.amazonaws.cloudhsmv2#CloudHsmTagException":
      response = {
        ...(await deserializeAws_json1_1CloudHsmTagExceptionResponse(
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

const deserializeAws_json1_1CloudHsmAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmAccessDeniedException(
    body,
    context
  );
  const contents: CloudHsmAccessDeniedException = {
    name: "CloudHsmAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmInternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInternalFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmInternalFailureException(
    body,
    context
  );
  const contents: CloudHsmInternalFailureException = {
    name: "CloudHsmInternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmInvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmInvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmInvalidRequestException(
    body,
    context
  );
  const contents: CloudHsmInvalidRequestException = {
    name: "CloudHsmInvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudHsmResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmResourceNotFoundException(
    body,
    context
  );
  const contents: CloudHsmResourceNotFoundException = {
    name: "CloudHsmResourceNotFoundException",
    $fault: "client",
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

const deserializeAws_json1_1CloudHsmTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudHsmTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudHsmTagException(
    body,
    context
  );
  const contents: CloudHsmTagException = {
    name: "CloudHsmTagException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CopyBackupToRegionRequest = (
  input: CopyBackupToRegionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && { BackupId: input.BackupId }),
    ...(input.DestinationRegion !== undefined && {
      DestinationRegion: input.DestinationRegion
    }),
    ...(input.TagList !== undefined && {
      TagList: serializeAws_json1_1TagList(input.TagList, context)
    })
  };
};

const serializeAws_json1_1CreateClusterRequest = (
  input: CreateClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HsmType !== undefined && { HsmType: input.HsmType }),
    ...(input.SourceBackupId !== undefined && {
      SourceBackupId: input.SourceBackupId
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context)
    }),
    ...(input.TagList !== undefined && {
      TagList: serializeAws_json1_1TagList(input.TagList, context)
    })
  };
};

const serializeAws_json1_1CreateHsmRequest = (
  input: CreateHsmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZone !== undefined && {
      AvailabilityZone: input.AvailabilityZone
    }),
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.IpAddress !== undefined && { IpAddress: input.IpAddress })
  };
};

const serializeAws_json1_1DeleteBackupRequest = (
  input: DeleteBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && { BackupId: input.BackupId })
  };
};

const serializeAws_json1_1DeleteClusterRequest = (
  input: DeleteClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId })
  };
};

const serializeAws_json1_1DeleteHsmRequest = (
  input: DeleteHsmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.EniId !== undefined && { EniId: input.EniId }),
    ...(input.EniIp !== undefined && { EniIp: input.EniIp }),
    ...(input.HsmId !== undefined && { HsmId: input.HsmId })
  };
};

const serializeAws_json1_1DescribeBackupsRequest = (
  input: DescribeBackupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.SortAscending !== undefined && {
      SortAscending: input.SortAscending
    })
  };
};

const serializeAws_json1_1DescribeClustersRequest = (
  input: DescribeClustersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1Filters = (
  input: { [key: string]: string[] },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string[] }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1Strings(value, context)
    }),
    {}
  );
};

const serializeAws_json1_1InitializeClusterRequest = (
  input: InitializeClusterRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterId !== undefined && { ClusterId: input.ClusterId }),
    ...(input.SignedCert !== undefined && { SignedCert: input.SignedCert }),
    ...(input.TrustAnchor !== undefined && { TrustAnchor: input.TrustAnchor })
  };
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId })
  };
};

const serializeAws_json1_1RestoreBackupRequest = (
  input: RestoreBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId !== undefined && { BackupId: input.BackupId })
  };
};

const serializeAws_json1_1Strings = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SubnetIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
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

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.TagList !== undefined && {
      TagList: serializeAws_json1_1TagList(input.TagList, context)
    })
  };
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceId !== undefined && { ResourceId: input.ResourceId }),
    ...(input.TagKeyList !== undefined && {
      TagKeyList: serializeAws_json1_1TagKeyList(input.TagKeyList, context)
    })
  };
};

const deserializeAws_json1_1Backup = (
  output: any,
  context: __SerdeContext
): Backup => {
  return {
    __type: "Backup",
    BackupId:
      output.BackupId !== undefined && output.BackupId !== null
        ? output.BackupId
        : undefined,
    BackupState:
      output.BackupState !== undefined && output.BackupState !== null
        ? output.BackupState
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    CopyTimestamp:
      output.CopyTimestamp !== undefined && output.CopyTimestamp !== null
        ? new Date(Math.round(output.CopyTimestamp * 1000))
        : undefined,
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    DeleteTimestamp:
      output.DeleteTimestamp !== undefined && output.DeleteTimestamp !== null
        ? new Date(Math.round(output.DeleteTimestamp * 1000))
        : undefined,
    SourceBackup:
      output.SourceBackup !== undefined && output.SourceBackup !== null
        ? output.SourceBackup
        : undefined,
    SourceCluster:
      output.SourceCluster !== undefined && output.SourceCluster !== null
        ? output.SourceCluster
        : undefined,
    SourceRegion:
      output.SourceRegion !== undefined && output.SourceRegion !== null
        ? output.SourceRegion
        : undefined,
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Backups = (
  output: any,
  context: __SerdeContext
): Backup[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Backup(entry, context)
  );
};

const deserializeAws_json1_1Certificates = (
  output: any,
  context: __SerdeContext
): Certificates => {
  return {
    __type: "Certificates",
    AwsHardwareCertificate:
      output.AwsHardwareCertificate !== undefined &&
      output.AwsHardwareCertificate !== null
        ? output.AwsHardwareCertificate
        : undefined,
    ClusterCertificate:
      output.ClusterCertificate !== undefined &&
      output.ClusterCertificate !== null
        ? output.ClusterCertificate
        : undefined,
    ClusterCsr:
      output.ClusterCsr !== undefined && output.ClusterCsr !== null
        ? output.ClusterCsr
        : undefined,
    HsmCertificate:
      output.HsmCertificate !== undefined && output.HsmCertificate !== null
        ? output.HsmCertificate
        : undefined,
    ManufacturerHardwareCertificate:
      output.ManufacturerHardwareCertificate !== undefined &&
      output.ManufacturerHardwareCertificate !== null
        ? output.ManufacturerHardwareCertificate
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmAccessDeniedException = (
  output: any,
  context: __SerdeContext
): CloudHsmAccessDeniedException => {
  return {
    __type: "CloudHsmAccessDeniedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmInternalFailureException = (
  output: any,
  context: __SerdeContext
): CloudHsmInternalFailureException => {
  return {
    __type: "CloudHsmInternalFailureException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmInvalidRequestException = (
  output: any,
  context: __SerdeContext
): CloudHsmInvalidRequestException => {
  return {
    __type: "CloudHsmInvalidRequestException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): CloudHsmResourceNotFoundException => {
  return {
    __type: "CloudHsmResourceNotFoundException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmServiceException = (
  output: any,
  context: __SerdeContext
): CloudHsmServiceException => {
  return {
    __type: "CloudHsmServiceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1CloudHsmTagException = (
  output: any,
  context: __SerdeContext
): CloudHsmTagException => {
  return {
    __type: "CloudHsmTagException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1Cluster = (
  output: any,
  context: __SerdeContext
): Cluster => {
  return {
    __type: "Cluster",
    BackupPolicy:
      output.BackupPolicy !== undefined && output.BackupPolicy !== null
        ? output.BackupPolicy
        : undefined,
    Certificates:
      output.Certificates !== undefined && output.Certificates !== null
        ? deserializeAws_json1_1Certificates(output.Certificates, context)
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    HsmType:
      output.HsmType !== undefined && output.HsmType !== null
        ? output.HsmType
        : undefined,
    Hsms:
      output.Hsms !== undefined && output.Hsms !== null
        ? deserializeAws_json1_1Hsms(output.Hsms, context)
        : undefined,
    PreCoPassword:
      output.PreCoPassword !== undefined && output.PreCoPassword !== null
        ? output.PreCoPassword
        : undefined,
    SecurityGroup:
      output.SecurityGroup !== undefined && output.SecurityGroup !== null
        ? output.SecurityGroup
        : undefined,
    SourceBackupId:
      output.SourceBackupId !== undefined && output.SourceBackupId !== null
        ? output.SourceBackupId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateMessage:
      output.StateMessage !== undefined && output.StateMessage !== null
        ? output.StateMessage
        : undefined,
    SubnetMapping:
      output.SubnetMapping !== undefined && output.SubnetMapping !== null
        ? deserializeAws_json1_1ExternalSubnetMapping(
            output.SubnetMapping,
            context
          )
        : undefined,
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
};

const deserializeAws_json1_1Clusters = (
  output: any,
  context: __SerdeContext
): Cluster[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Cluster(entry, context)
  );
};

const deserializeAws_json1_1CopyBackupToRegionResponse = (
  output: any,
  context: __SerdeContext
): CopyBackupToRegionResponse => {
  return {
    __type: "CopyBackupToRegionResponse",
    DestinationBackup:
      output.DestinationBackup !== undefined &&
      output.DestinationBackup !== null
        ? deserializeAws_json1_1DestinationBackup(
            output.DestinationBackup,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateClusterResponse = (
  output: any,
  context: __SerdeContext
): CreateClusterResponse => {
  return {
    __type: "CreateClusterResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateHsmResponse = (
  output: any,
  context: __SerdeContext
): CreateHsmResponse => {
  return {
    __type: "CreateHsmResponse",
    Hsm:
      output.Hsm !== undefined && output.Hsm !== null
        ? deserializeAws_json1_1Hsm(output.Hsm, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteBackupResponse = (
  output: any,
  context: __SerdeContext
): DeleteBackupResponse => {
  return {
    __type: "DeleteBackupResponse",
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteClusterResponse = (
  output: any,
  context: __SerdeContext
): DeleteClusterResponse => {
  return {
    __type: "DeleteClusterResponse",
    Cluster:
      output.Cluster !== undefined && output.Cluster !== null
        ? deserializeAws_json1_1Cluster(output.Cluster, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteHsmResponse = (
  output: any,
  context: __SerdeContext
): DeleteHsmResponse => {
  return {
    __type: "DeleteHsmResponse",
    HsmId:
      output.HsmId !== undefined && output.HsmId !== null
        ? output.HsmId
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  return {
    __type: "DescribeBackupsResponse",
    Backups:
      output.Backups !== undefined && output.Backups !== null
        ? deserializeAws_json1_1Backups(output.Backups, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeClustersResponse = (
  output: any,
  context: __SerdeContext
): DescribeClustersResponse => {
  return {
    __type: "DescribeClustersResponse",
    Clusters:
      output.Clusters !== undefined && output.Clusters !== null
        ? deserializeAws_json1_1Clusters(output.Clusters, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1DestinationBackup = (
  output: any,
  context: __SerdeContext
): DestinationBackup => {
  return {
    __type: "DestinationBackup",
    CreateTimestamp:
      output.CreateTimestamp !== undefined && output.CreateTimestamp !== null
        ? new Date(Math.round(output.CreateTimestamp * 1000))
        : undefined,
    SourceBackup:
      output.SourceBackup !== undefined && output.SourceBackup !== null
        ? output.SourceBackup
        : undefined,
    SourceCluster:
      output.SourceCluster !== undefined && output.SourceCluster !== null
        ? output.SourceCluster
        : undefined,
    SourceRegion:
      output.SourceRegion !== undefined && output.SourceRegion !== null
        ? output.SourceRegion
        : undefined
  } as any;
};

const deserializeAws_json1_1ExternalSubnetMapping = (
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

const deserializeAws_json1_1Hsm = (
  output: any,
  context: __SerdeContext
): Hsm => {
  return {
    __type: "Hsm",
    AvailabilityZone:
      output.AvailabilityZone !== undefined && output.AvailabilityZone !== null
        ? output.AvailabilityZone
        : undefined,
    ClusterId:
      output.ClusterId !== undefined && output.ClusterId !== null
        ? output.ClusterId
        : undefined,
    EniId:
      output.EniId !== undefined && output.EniId !== null
        ? output.EniId
        : undefined,
    EniIp:
      output.EniIp !== undefined && output.EniIp !== null
        ? output.EniIp
        : undefined,
    HsmId:
      output.HsmId !== undefined && output.HsmId !== null
        ? output.HsmId
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateMessage:
      output.StateMessage !== undefined && output.StateMessage !== null
        ? output.StateMessage
        : undefined,
    SubnetId:
      output.SubnetId !== undefined && output.SubnetId !== null
        ? output.SubnetId
        : undefined
  } as any;
};

const deserializeAws_json1_1Hsms = (
  output: any,
  context: __SerdeContext
): Hsm[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Hsm(entry, context)
  );
};

const deserializeAws_json1_1InitializeClusterResponse = (
  output: any,
  context: __SerdeContext
): InitializeClusterResponse => {
  return {
    __type: "InitializeClusterResponse",
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateMessage:
      output.StateMessage !== undefined && output.StateMessage !== null
        ? output.StateMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  return {
    __type: "ListTagsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RestoreBackupResponse = (
  output: any,
  context: __SerdeContext
): RestoreBackupResponse => {
  return {
    __type: "RestoreBackupResponse",
    Backup:
      output.Backup !== undefined && output.Backup !== null
        ? deserializeAws_json1_1Backup(output.Backup, context)
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

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
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
