import {
  CreateBackupCommandInput,
  CreateBackupCommandOutput
} from "../commands/CreateBackupCommand";
import {
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput
} from "../commands/CreateFileSystemCommand";
import {
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput
} from "../commands/CreateFileSystemFromBackupCommand";
import {
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput
} from "../commands/DeleteBackupCommand";
import {
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput
} from "../commands/DeleteFileSystemCommand";
import {
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput
} from "../commands/DescribeBackupsCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput
} from "../commands/DescribeFileSystemsCommand";
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
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput
} from "../commands/UpdateFileSystemCommand";
import {
  ActiveDirectoryBackupAttributes,
  ActiveDirectoryError,
  Backup,
  BackupFailureDetails,
  BackupInProgress,
  BackupNotFound,
  BackupRestoring,
  BadRequest,
  CreateBackupRequest,
  CreateBackupResponse,
  CreateFileSystemFromBackupRequest,
  CreateFileSystemFromBackupResponse,
  CreateFileSystemLustreConfiguration,
  CreateFileSystemRequest,
  CreateFileSystemResponse,
  CreateFileSystemWindowsConfiguration,
  DataRepositoryConfiguration,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteFileSystemRequest,
  DeleteFileSystemResponse,
  DeleteFileSystemWindowsConfiguration,
  DeleteFileSystemWindowsResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeFileSystemsRequest,
  DescribeFileSystemsResponse,
  FileSystem,
  FileSystemFailureDetails,
  FileSystemMaintenanceOperation,
  FileSystemNotFound,
  Filter,
  IncompatibleParameterError,
  InternalServerError,
  InvalidExportPath,
  InvalidImportPath,
  InvalidNetworkSettings,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LustreFileSystemConfiguration,
  MissingFileSystemConfiguration,
  NotServiceResourceError,
  ResourceDoesNotSupportTagging,
  ResourceNotFound,
  SelfManagedActiveDirectoryAttributes,
  SelfManagedActiveDirectoryConfiguration,
  SelfManagedActiveDirectoryConfigurationUpdates,
  ServiceLimitExceeded,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  UnsupportedOperation,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateFileSystemLustreConfiguration,
  UpdateFileSystemRequest,
  UpdateFileSystemResponse,
  UpdateFileSystemWindowsConfiguration,
  WindowsFileSystemConfiguration
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

export async function serializeAws_json1_1CreateBackupCommand(
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.CreateBackup";
  let body: any = {};
  const wrappedBody: any = {
    CreateBackupRequest: serializeAws_json1_1CreateBackupRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateFileSystemCommand(
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.CreateFileSystem";
  let body: any = {};
  const wrappedBody: any = {
    CreateFileSystemRequest: serializeAws_json1_1CreateFileSystemRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateFileSystem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateFileSystemFromBackupCommand(
  input: CreateFileSystemFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup";
  let body: any = {};
  const wrappedBody: any = {
    CreateFileSystemFromBackupRequest: serializeAws_json1_1CreateFileSystemFromBackupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateFileSystemFromBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteBackupCommand(
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DeleteBackup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteBackupRequest: serializeAws_json1_1DeleteBackupRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteBackup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteFileSystemCommand(
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DeleteFileSystem";
  let body: any = {};
  const wrappedBody: any = {
    DeleteFileSystemRequest: serializeAws_json1_1DeleteFileSystemRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteFileSystem",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeBackupsCommand(
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DescribeBackups";
  let body: any = {};
  const wrappedBody: any = {
    DescribeBackupsRequest: serializeAws_json1_1DescribeBackupsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeBackups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeFileSystemsCommand(
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.DescribeFileSystems";
  let body: any = {};
  const wrappedBody: any = {
    DescribeFileSystemsRequest: serializeAws_json1_1DescribeFileSystemsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeFileSystems",
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
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.ListTagsForResource";
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

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceRequest: serializeAws_json1_1TagResourceRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceRequest: serializeAws_json1_1UntagResourceRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateFileSystemCommand(
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSSimbaAPIService_v20180301.UpdateFileSystem";
  let body: any = {};
  const wrappedBody: any = {
    UpdateFileSystemRequest: serializeAws_json1_1UpdateFileSystemRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateFileSystem",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_1CreateBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBackupResponse(
    data.CreateBackupResponse,
    context
  );
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupInProgress":
    case "com.amazonaws.simba.api.v20180301#BackupInProgress":
      response = await deserializeAws_json1_1BackupInProgressResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
      response = await deserializeAws_json1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
      response = await deserializeAws_json1_1IncompatibleParameterErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
      response = await deserializeAws_json1_1ServiceLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.simba.api.v20180301#UnsupportedOperation":
      response = await deserializeAws_json1_1UnsupportedOperationResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileSystemResponse(
    data.CreateFileSystemResponse,
    context
  );
  const response: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFileSystemResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.simba.api.v20180301#ActiveDirectoryError":
      response = await deserializeAws_json1_1ActiveDirectoryErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
      response = await deserializeAws_json1_1IncompatibleParameterErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidExportPath":
    case "com.amazonaws.simba.api.v20180301#InvalidExportPath":
      response = await deserializeAws_json1_1InvalidExportPathResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidImportPath":
    case "com.amazonaws.simba.api.v20180301#InvalidImportPath":
      response = await deserializeAws_json1_1InvalidImportPathResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNetworkSettings":
    case "com.amazonaws.simba.api.v20180301#InvalidNetworkSettings":
      response = await deserializeAws_json1_1InvalidNetworkSettingsResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.simba.api.v20180301#MissingFileSystemConfiguration":
      response = await deserializeAws_json1_1MissingFileSystemConfigurationResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
      response = await deserializeAws_json1_1ServiceLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateFileSystemFromBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateFileSystemFromBackupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileSystemFromBackupResponse(
    data.CreateFileSystemFromBackupResponse,
    context
  );
  const response: CreateFileSystemFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFileSystemFromBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateFileSystemFromBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.simba.api.v20180301#ActiveDirectoryError":
      response = await deserializeAws_json1_1ActiveDirectoryErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupNotFound":
    case "com.amazonaws.simba.api.v20180301#BackupNotFound":
      response = await deserializeAws_json1_1BackupNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
      response = await deserializeAws_json1_1IncompatibleParameterErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNetworkSettings":
    case "com.amazonaws.simba.api.v20180301#InvalidNetworkSettings":
      response = await deserializeAws_json1_1InvalidNetworkSettingsResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.simba.api.v20180301#MissingFileSystemConfiguration":
      response = await deserializeAws_json1_1MissingFileSystemConfigurationResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
      response = await deserializeAws_json1_1ServiceLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteBackupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(
    data.DeleteBackupResponse,
    context
  );
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteBackupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupInProgress":
    case "com.amazonaws.simba.api.v20180301#BackupInProgress":
      response = await deserializeAws_json1_1BackupInProgressResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupNotFound":
    case "com.amazonaws.simba.api.v20180301#BackupNotFound":
      response = await deserializeAws_json1_1BackupNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "BackupRestoring":
    case "com.amazonaws.simba.api.v20180301#BackupRestoring":
      response = await deserializeAws_json1_1BackupRestoringResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
      response = await deserializeAws_json1_1IncompatibleParameterErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileSystemResponse(
    data.DeleteFileSystemResponse,
    context
  );
  const response: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFileSystemResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
      response = await deserializeAws_json1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
      response = await deserializeAws_json1_1IncompatibleParameterErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceLimitExceeded":
    case "com.amazonaws.simba.api.v20180301#ServiceLimitExceeded":
      response = await deserializeAws_json1_1ServiceLimitExceededResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeBackupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(
    data.DescribeBackupsResponse,
    context
  );
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeBackupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.simba.api.v20180301#BackupNotFound":
      response = await deserializeAws_json1_1BackupNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
      response = await deserializeAws_json1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeFileSystemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeFileSystemsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileSystemsResponse(
    data.DescribeFileSystemsResponse,
    context
  );
  const response: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFileSystemsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeFileSystemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
      response = await deserializeAws_json1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1ListTagsForResourceResponse(
    data.ListTagsForResourceResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "NotServiceResourceError":
    case "com.amazonaws.simba.api.v20180301#NotServiceResourceError":
      response = await deserializeAws_json1_1NotServiceResourceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.simba.api.v20180301#ResourceDoesNotSupportTagging":
      response = await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFound":
    case "com.amazonaws.simba.api.v20180301#ResourceNotFound":
      response = await deserializeAws_json1_1ResourceNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(
    data.TagResourceResponse,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "NotServiceResourceError":
    case "com.amazonaws.simba.api.v20180301#NotServiceResourceError":
      response = await deserializeAws_json1_1NotServiceResourceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.simba.api.v20180301#ResourceDoesNotSupportTagging":
      response = await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFound":
    case "com.amazonaws.simba.api.v20180301#ResourceNotFound":
      response = await deserializeAws_json1_1ResourceNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(
    data.UntagResourceResponse,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "NotServiceResourceError":
    case "com.amazonaws.simba.api.v20180301#NotServiceResourceError":
      response = await deserializeAws_json1_1NotServiceResourceErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.simba.api.v20180301#ResourceDoesNotSupportTagging":
      response = await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFound":
    case "com.amazonaws.simba.api.v20180301#ResourceNotFound":
      response = await deserializeAws_json1_1ResourceNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateFileSystemCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFileSystemResponse(
    data.UpdateFileSystemResponse,
    context
  );
  const response: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFileSystemResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateFileSystemCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.simba.api.v20180301#BadRequest":
      response = await deserializeAws_json1_1BadRequestResponse(
        parsedOutput,
        context
      );
      break;
    case "FileSystemNotFound":
    case "com.amazonaws.simba.api.v20180301#FileSystemNotFound":
      response = await deserializeAws_json1_1FileSystemNotFoundResponse(
        parsedOutput,
        context
      );
      break;
    case "IncompatibleParameterError":
    case "com.amazonaws.simba.api.v20180301#IncompatibleParameterError":
      response = await deserializeAws_json1_1IncompatibleParameterErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "InternalServerError":
    case "com.amazonaws.simba.api.v20180301#InternalServerError":
      response = await deserializeAws_json1_1InternalServerErrorResponse(
        parsedOutput,
        context
      );
      break;
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.simba.api.v20180301#MissingFileSystemConfiguration":
      response = await deserializeAws_json1_1MissingFileSystemConfigurationResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperation":
    case "com.amazonaws.simba.api.v20180301#UnsupportedOperation":
      response = await deserializeAws_json1_1UnsupportedOperationResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.simba.api.v20180301#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1ActiveDirectoryErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ActiveDirectoryError> => {
  const deserialized: any = deserializeAws_json1_1ActiveDirectoryError(
    output.body,
    context
  );
  const contents: ActiveDirectoryError = {
    __type: "ActiveDirectoryError",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BackupInProgressResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BackupInProgress> => {
  const deserialized: any = deserializeAws_json1_1BackupInProgress(
    output.body,
    context
  );
  const contents: BackupInProgress = {
    __type: "BackupInProgress",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BackupNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BackupNotFound> => {
  const deserialized: any = deserializeAws_json1_1BackupNotFound(
    output.body,
    context
  );
  const contents: BackupNotFound = {
    __type: "BackupNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BackupRestoringResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BackupRestoring> => {
  const deserialized: any = deserializeAws_json1_1BackupRestoring(
    output.body,
    context
  );
  const contents: BackupRestoring = {
    __type: "BackupRestoring",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1BadRequestResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const deserialized: any = deserializeAws_json1_1BadRequest(
    output.body,
    context
  );
  const contents: BadRequest = {
    __type: "BadRequest",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1FileSystemNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const deserialized: any = deserializeAws_json1_1FileSystemNotFound(
    output.body,
    context
  );
  const contents: FileSystemNotFound = {
    __type: "FileSystemNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IncompatibleParameterErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IncompatibleParameterError> => {
  const deserialized: any = deserializeAws_json1_1IncompatibleParameterError(
    output.body,
    context
  );
  const contents: IncompatibleParameterError = {
    __type: "IncompatibleParameterError",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const deserialized: any = deserializeAws_json1_1InternalServerError(
    output.body,
    context
  );
  const contents: InternalServerError = {
    __type: "InternalServerError",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidExportPathResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidExportPath> => {
  const deserialized: any = deserializeAws_json1_1InvalidExportPath(
    output.body,
    context
  );
  const contents: InvalidExportPath = {
    __type: "InvalidExportPath",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidImportPathResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidImportPath> => {
  const deserialized: any = deserializeAws_json1_1InvalidImportPath(
    output.body,
    context
  );
  const contents: InvalidImportPath = {
    __type: "InvalidImportPath",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNetworkSettingsResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNetworkSettings> => {
  const deserialized: any = deserializeAws_json1_1InvalidNetworkSettings(
    output.body,
    context
  );
  const contents: InvalidNetworkSettings = {
    __type: "InvalidNetworkSettings",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MissingFileSystemConfigurationResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MissingFileSystemConfiguration> => {
  const deserialized: any = deserializeAws_json1_1MissingFileSystemConfiguration(
    output.body,
    context
  );
  const contents: MissingFileSystemConfiguration = {
    __type: "MissingFileSystemConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotServiceResourceErrorResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotServiceResourceError> => {
  const deserialized: any = deserializeAws_json1_1NotServiceResourceError(
    output.body,
    context
  );
  const contents: NotServiceResourceError = {
    __type: "NotServiceResourceError",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceDoesNotSupportTagging> => {
  const deserialized: any = deserializeAws_json1_1ResourceDoesNotSupportTagging(
    output.body,
    context
  );
  const contents: ResourceDoesNotSupportTagging = {
    __type: "ResourceDoesNotSupportTagging",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFound(
    output.body,
    context
  );
  const contents: ResourceNotFound = {
    __type: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceLimitExceededResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceLimitExceeded> => {
  const deserialized: any = deserializeAws_json1_1ServiceLimitExceeded(
    output.body,
    context
  );
  const contents: ServiceLimitExceeded = {
    __type: "ServiceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedOperation(
    output.body,
    context
  );
  const contents: UnsupportedOperation = {
    __type: "UnsupportedOperation",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1BackupIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CreateBackupRequest = (
  input: CreateBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.FileSystemId !== undefined) {
    bodyParams["FileSystemId"] = input.FileSystemId;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFileSystemFromBackupRequest = (
  input: CreateFileSystemFromBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.WindowsConfiguration !== undefined) {
    bodyParams[
      "WindowsConfiguration"
    ] = serializeAws_json1_1CreateFileSystemWindowsConfiguration(
      input.WindowsConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFileSystemLustreConfiguration = (
  input: CreateFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ExportPath !== undefined) {
    bodyParams["ExportPath"] = input.ExportPath;
  }
  if (input.ImportPath !== undefined) {
    bodyParams["ImportPath"] = input.ImportPath;
  }
  if (input.ImportedFileChunkSize !== undefined) {
    bodyParams["ImportedFileChunkSize"] = input.ImportedFileChunkSize;
  }
  if (input.WeeklyMaintenanceStartTime !== undefined) {
    bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFileSystemRequest = (
  input: CreateFileSystemRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.FileSystemType !== undefined) {
    bodyParams["FileSystemType"] = input.FileSystemType;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.LustreConfiguration !== undefined) {
    bodyParams[
      "LustreConfiguration"
    ] = serializeAws_json1_1CreateFileSystemLustreConfiguration(
      input.LustreConfiguration,
      context
    );
  }
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_json1_1SecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.StorageCapacity !== undefined) {
    bodyParams["StorageCapacity"] = input.StorageCapacity;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_json1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  if (input.WindowsConfiguration !== undefined) {
    bodyParams[
      "WindowsConfiguration"
    ] = serializeAws_json1_1CreateFileSystemWindowsConfiguration(
      input.WindowsConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateFileSystemWindowsConfiguration = (
  input: CreateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ActiveDirectoryId !== undefined) {
    bodyParams["ActiveDirectoryId"] = input.ActiveDirectoryId;
  }
  if (input.AutomaticBackupRetentionDays !== undefined) {
    bodyParams["AutomaticBackupRetentionDays"] =
      input.AutomaticBackupRetentionDays;
  }
  if (input.CopyTagsToBackups !== undefined) {
    bodyParams["CopyTagsToBackups"] = input.CopyTagsToBackups;
  }
  if (input.DailyAutomaticBackupStartTime !== undefined) {
    bodyParams["DailyAutomaticBackupStartTime"] =
      input.DailyAutomaticBackupStartTime;
  }
  if (input.DeploymentType !== undefined) {
    bodyParams["DeploymentType"] = input.DeploymentType;
  }
  if (input.PreferredSubnetId !== undefined) {
    bodyParams["PreferredSubnetId"] = input.PreferredSubnetId;
  }
  if (input.SelfManagedActiveDirectoryConfiguration !== undefined) {
    bodyParams[
      "SelfManagedActiveDirectoryConfiguration"
    ] = serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(
      input.SelfManagedActiveDirectoryConfiguration,
      context
    );
  }
  if (input.ThroughputCapacity !== undefined) {
    bodyParams["ThroughputCapacity"] = input.ThroughputCapacity;
  }
  if (input.WeeklyMaintenanceStartTime !== undefined) {
    bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteBackupRequest = (
  input: DeleteBackupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupId !== undefined) {
    bodyParams["BackupId"] = input.BackupId;
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFileSystemRequest = (
  input: DeleteFileSystemRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.FileSystemId !== undefined) {
    bodyParams["FileSystemId"] = input.FileSystemId;
  }
  if (input.WindowsConfiguration !== undefined) {
    bodyParams[
      "WindowsConfiguration"
    ] = serializeAws_json1_1DeleteFileSystemWindowsConfiguration(
      input.WindowsConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteFileSystemWindowsConfiguration = (
  input: DeleteFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FinalBackupTags !== undefined) {
    bodyParams["FinalBackupTags"] = serializeAws_json1_1Tags(
      input.FinalBackupTags,
      context
    );
  }
  if (input.SkipFinalBackup !== undefined) {
    bodyParams["SkipFinalBackup"] = input.SkipFinalBackup;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBackupsRequest = (
  input: DescribeBackupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackupIds !== undefined) {
    bodyParams["BackupIds"] = serializeAws_json1_1BackupIds(
      input.BackupIds,
      context
    );
  }
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeFileSystemsRequest = (
  input: DescribeFileSystemsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FileSystemIds !== undefined) {
    bodyParams["FileSystemIds"] = serializeAws_json1_1FileSystemIds(
      input.FileSystemIds,
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

const serializeAws_json1_1DnsIps = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1FileSystemIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1FilterValues(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1SecurityGroupIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1SelfManagedActiveDirectoryConfiguration = (
  input: SelfManagedActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DnsIps !== undefined) {
    bodyParams["DnsIps"] = serializeAws_json1_1DnsIps(input.DnsIps, context);
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FileSystemAdministratorsGroup !== undefined) {
    bodyParams["FileSystemAdministratorsGroup"] =
      input.FileSystemAdministratorsGroup;
  }
  if (input.OrganizationalUnitDistinguishedName !== undefined) {
    bodyParams["OrganizationalUnitDistinguishedName"] =
      input.OrganizationalUnitDistinguishedName;
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates = (
  input: SelfManagedActiveDirectoryConfigurationUpdates,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DnsIps !== undefined) {
    bodyParams["DnsIps"] = serializeAws_json1_1DnsIps(input.DnsIps, context);
  }
  if (input.Password !== undefined) {
    bodyParams["Password"] = input.Password;
  }
  if (input.UserName !== undefined) {
    bodyParams["UserName"] = input.UserName;
  }
  return bodyParams;
};

const serializeAws_json1_1SubnetIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
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

const serializeAws_json1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1Tags(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeys(input.TagKeys, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateFileSystemLustreConfiguration = (
  input: UpdateFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.WeeklyMaintenanceStartTime !== undefined) {
    bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateFileSystemRequest = (
  input: UpdateFileSystemRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams["ClientRequestToken"] = input.ClientRequestToken;
  }
  if (input.FileSystemId !== undefined) {
    bodyParams["FileSystemId"] = input.FileSystemId;
  }
  if (input.LustreConfiguration !== undefined) {
    bodyParams[
      "LustreConfiguration"
    ] = serializeAws_json1_1UpdateFileSystemLustreConfiguration(
      input.LustreConfiguration,
      context
    );
  }
  if (input.WindowsConfiguration !== undefined) {
    bodyParams[
      "WindowsConfiguration"
    ] = serializeAws_json1_1UpdateFileSystemWindowsConfiguration(
      input.WindowsConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateFileSystemWindowsConfiguration = (
  input: UpdateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AutomaticBackupRetentionDays !== undefined) {
    bodyParams["AutomaticBackupRetentionDays"] =
      input.AutomaticBackupRetentionDays;
  }
  if (input.DailyAutomaticBackupStartTime !== undefined) {
    bodyParams["DailyAutomaticBackupStartTime"] =
      input.DailyAutomaticBackupStartTime;
  }
  if (input.SelfManagedActiveDirectoryConfiguration !== undefined) {
    bodyParams[
      "SelfManagedActiveDirectoryConfiguration"
    ] = serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(
      input.SelfManagedActiveDirectoryConfiguration,
      context
    );
  }
  if (input.WeeklyMaintenanceStartTime !== undefined) {
    bodyParams["WeeklyMaintenanceStartTime"] = input.WeeklyMaintenanceStartTime;
  }
  return bodyParams;
};

const deserializeAws_json1_1ActiveDirectoryBackupAttributes = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryBackupAttributes => {
  let contents: any = {
    __type: "ActiveDirectoryBackupAttributes",
    ActiveDirectoryId: undefined,
    DomainName: undefined
  };
  if (output.ActiveDirectoryId !== undefined) {
    contents.ActiveDirectoryId = output.ActiveDirectoryId;
  }
  if (output.DomainName !== undefined) {
    contents.DomainName = output.DomainName;
  }
  return contents;
};

const deserializeAws_json1_1ActiveDirectoryError = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryError => {
  let contents: any = {
    __type: "ActiveDirectoryError",
    ActiveDirectoryId: undefined,
    Message: undefined,
    Type: undefined
  };
  if (output.ActiveDirectoryId !== undefined) {
    contents.ActiveDirectoryId = output.ActiveDirectoryId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1Backup = (
  output: any,
  context: __SerdeContext
): Backup => {
  let contents: any = {
    __type: "Backup",
    BackupId: undefined,
    CreationTime: undefined,
    DirectoryInformation: undefined,
    FailureDetails: undefined,
    FileSystem: undefined,
    KmsKeyId: undefined,
    Lifecycle: undefined,
    ProgressPercent: undefined,
    ResourceARN: undefined,
    Tags: undefined,
    Type: undefined
  };
  if (output.BackupId !== undefined) {
    contents.BackupId = output.BackupId;
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DirectoryInformation !== undefined) {
    contents.DirectoryInformation = deserializeAws_json1_1ActiveDirectoryBackupAttributes(
      output.DirectoryInformation,
      context
    );
  }
  if (output.FailureDetails !== undefined) {
    contents.FailureDetails = deserializeAws_json1_1BackupFailureDetails(
      output.FailureDetails,
      context
    );
  }
  if (output.FileSystem !== undefined) {
    contents.FileSystem = deserializeAws_json1_1FileSystem(
      output.FileSystem,
      context
    );
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.Lifecycle !== undefined) {
    contents.Lifecycle = output.Lifecycle;
  }
  if (output.ProgressPercent !== undefined) {
    contents.ProgressPercent = output.ProgressPercent;
  }
  if (output.ResourceARN !== undefined) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1BackupFailureDetails = (
  output: any,
  context: __SerdeContext
): BackupFailureDetails => {
  let contents: any = {
    __type: "BackupFailureDetails",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1BackupInProgress = (
  output: any,
  context: __SerdeContext
): BackupInProgress => {
  let contents: any = {
    __type: "BackupInProgress",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1BackupNotFound = (
  output: any,
  context: __SerdeContext
): BackupNotFound => {
  let contents: any = {
    __type: "BackupNotFound",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1BackupRestoring = (
  output: any,
  context: __SerdeContext
): BackupRestoring => {
  let contents: any = {
    __type: "BackupRestoring",
    FileSystemId: undefined,
    Message: undefined
  };
  if (output.FileSystemId !== undefined) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Backups = (
  output: any,
  context: __SerdeContext
): Array<Backup> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Backup(entry, context)
  );
};

const deserializeAws_json1_1BadRequest = (
  output: any,
  context: __SerdeContext
): BadRequest => {
  let contents: any = {
    __type: "BadRequest",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateBackupResponse => {
  let contents: any = {
    __type: "CreateBackupResponse",
    Backup: undefined
  };
  if (output.Backup !== undefined) {
    contents.Backup = deserializeAws_json1_1Backup(output.Backup, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateFileSystemFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemFromBackupResponse => {
  let contents: any = {
    __type: "CreateFileSystemFromBackupResponse",
    FileSystem: undefined
  };
  if (output.FileSystem !== undefined) {
    contents.FileSystem = deserializeAws_json1_1FileSystem(
      output.FileSystem,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateFileSystemResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemResponse => {
  let contents: any = {
    __type: "CreateFileSystemResponse",
    FileSystem: undefined
  };
  if (output.FileSystem !== undefined) {
    contents.FileSystem = deserializeAws_json1_1FileSystem(
      output.FileSystem,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataRepositoryConfiguration = (
  output: any,
  context: __SerdeContext
): DataRepositoryConfiguration => {
  let contents: any = {
    __type: "DataRepositoryConfiguration",
    ExportPath: undefined,
    ImportPath: undefined,
    ImportedFileChunkSize: undefined
  };
  if (output.ExportPath !== undefined) {
    contents.ExportPath = output.ExportPath;
  }
  if (output.ImportPath !== undefined) {
    contents.ImportPath = output.ImportPath;
  }
  if (output.ImportedFileChunkSize !== undefined) {
    contents.ImportedFileChunkSize = output.ImportedFileChunkSize;
  }
  return contents;
};

const deserializeAws_json1_1DeleteBackupResponse = (
  output: any,
  context: __SerdeContext
): DeleteBackupResponse => {
  let contents: any = {
    __type: "DeleteBackupResponse",
    BackupId: undefined,
    Lifecycle: undefined
  };
  if (output.BackupId !== undefined) {
    contents.BackupId = output.BackupId;
  }
  if (output.Lifecycle !== undefined) {
    contents.Lifecycle = output.Lifecycle;
  }
  return contents;
};

const deserializeAws_json1_1DeleteFileSystemResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemResponse => {
  let contents: any = {
    __type: "DeleteFileSystemResponse",
    FileSystemId: undefined,
    Lifecycle: undefined,
    WindowsResponse: undefined
  };
  if (output.FileSystemId !== undefined) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.Lifecycle !== undefined) {
    contents.Lifecycle = output.Lifecycle;
  }
  if (output.WindowsResponse !== undefined) {
    contents.WindowsResponse = deserializeAws_json1_1DeleteFileSystemWindowsResponse(
      output.WindowsResponse,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteFileSystemWindowsResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemWindowsResponse => {
  let contents: any = {
    __type: "DeleteFileSystemWindowsResponse",
    FinalBackupId: undefined,
    FinalBackupTags: undefined
  };
  if (output.FinalBackupId !== undefined) {
    contents.FinalBackupId = output.FinalBackupId;
  }
  if (output.FinalBackupTags !== undefined) {
    contents.FinalBackupTags = deserializeAws_json1_1Tags(
      output.FinalBackupTags,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  let contents: any = {
    __type: "DescribeBackupsResponse",
    Backups: undefined,
    NextToken: undefined
  };
  if (output.Backups !== undefined) {
    contents.Backups = deserializeAws_json1_1Backups(output.Backups, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DescribeFileSystemsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemsResponse => {
  let contents: any = {
    __type: "DescribeFileSystemsResponse",
    FileSystems: undefined,
    NextToken: undefined
  };
  if (output.FileSystems !== undefined) {
    contents.FileSystems = deserializeAws_json1_1FileSystems(
      output.FileSystems,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1DnsIps = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FileSystem = (
  output: any,
  context: __SerdeContext
): FileSystem => {
  let contents: any = {
    __type: "FileSystem",
    CreationTime: undefined,
    DNSName: undefined,
    FailureDetails: undefined,
    FileSystemId: undefined,
    FileSystemType: undefined,
    KmsKeyId: undefined,
    Lifecycle: undefined,
    LustreConfiguration: undefined,
    NetworkInterfaceIds: undefined,
    OwnerId: undefined,
    ResourceARN: undefined,
    StorageCapacity: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcId: undefined,
    WindowsConfiguration: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DNSName !== undefined) {
    contents.DNSName = output.DNSName;
  }
  if (output.FailureDetails !== undefined) {
    contents.FailureDetails = deserializeAws_json1_1FileSystemFailureDetails(
      output.FailureDetails,
      context
    );
  }
  if (output.FileSystemId !== undefined) {
    contents.FileSystemId = output.FileSystemId;
  }
  if (output.FileSystemType !== undefined) {
    contents.FileSystemType = output.FileSystemType;
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.Lifecycle !== undefined) {
    contents.Lifecycle = output.Lifecycle;
  }
  if (output.LustreConfiguration !== undefined) {
    contents.LustreConfiguration = deserializeAws_json1_1LustreFileSystemConfiguration(
      output.LustreConfiguration,
      context
    );
  }
  if (output.NetworkInterfaceIds !== undefined) {
    contents.NetworkInterfaceIds = deserializeAws_json1_1NetworkInterfaceIds(
      output.NetworkInterfaceIds,
      context
    );
  }
  if (output.OwnerId !== undefined) {
    contents.OwnerId = output.OwnerId;
  }
  if (output.ResourceARN !== undefined) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.StorageCapacity !== undefined) {
    contents.StorageCapacity = output.StorageCapacity;
  }
  if (output.SubnetIds !== undefined) {
    contents.SubnetIds = deserializeAws_json1_1SubnetIds(
      output.SubnetIds,
      context
    );
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  if (output.VpcId !== undefined) {
    contents.VpcId = output.VpcId;
  }
  if (output.WindowsConfiguration !== undefined) {
    contents.WindowsConfiguration = deserializeAws_json1_1WindowsFileSystemConfiguration(
      output.WindowsConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FileSystemFailureDetails = (
  output: any,
  context: __SerdeContext
): FileSystemFailureDetails => {
  let contents: any = {
    __type: "FileSystemFailureDetails",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1FileSystemMaintenanceOperations = (
  output: any,
  context: __SerdeContext
): Array<FileSystemMaintenanceOperation | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1FileSystemNotFound = (
  output: any,
  context: __SerdeContext
): FileSystemNotFound => {
  let contents: any = {
    __type: "FileSystemNotFound",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1FileSystems = (
  output: any,
  context: __SerdeContext
): Array<FileSystem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FileSystem(entry, context)
  );
};

const deserializeAws_json1_1IncompatibleParameterError = (
  output: any,
  context: __SerdeContext
): IncompatibleParameterError => {
  let contents: any = {
    __type: "IncompatibleParameterError",
    Message: undefined,
    Parameter: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Parameter !== undefined) {
    contents.Parameter = output.Parameter;
  }
  return contents;
};

const deserializeAws_json1_1InternalServerError = (
  output: any,
  context: __SerdeContext
): InternalServerError => {
  let contents: any = {
    __type: "InternalServerError",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidExportPath = (
  output: any,
  context: __SerdeContext
): InvalidExportPath => {
  let contents: any = {
    __type: "InvalidExportPath",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidImportPath = (
  output: any,
  context: __SerdeContext
): InvalidImportPath => {
  let contents: any = {
    __type: "InvalidImportPath",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNetworkSettings = (
  output: any,
  context: __SerdeContext
): InvalidNetworkSettings => {
  let contents: any = {
    __type: "InvalidNetworkSettings",
    InvalidSecurityGroupId: undefined,
    InvalidSubnetId: undefined,
    Message: undefined
  };
  if (output.InvalidSecurityGroupId !== undefined) {
    contents.InvalidSecurityGroupId = output.InvalidSecurityGroupId;
  }
  if (output.InvalidSubnetId !== undefined) {
    contents.InvalidSubnetId = output.InvalidSubnetId;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined) {
    contents.Tags = deserializeAws_json1_1Tags(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1LustreFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): LustreFileSystemConfiguration => {
  let contents: any = {
    __type: "LustreFileSystemConfiguration",
    DataRepositoryConfiguration: undefined,
    WeeklyMaintenanceStartTime: undefined
  };
  if (output.DataRepositoryConfiguration !== undefined) {
    contents.DataRepositoryConfiguration = deserializeAws_json1_1DataRepositoryConfiguration(
      output.DataRepositoryConfiguration,
      context
    );
  }
  if (output.WeeklyMaintenanceStartTime !== undefined) {
    contents.WeeklyMaintenanceStartTime = output.WeeklyMaintenanceStartTime;
  }
  return contents;
};

const deserializeAws_json1_1MissingFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): MissingFileSystemConfiguration => {
  let contents: any = {
    __type: "MissingFileSystemConfiguration",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NetworkInterfaceIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1NotServiceResourceError = (
  output: any,
  context: __SerdeContext
): NotServiceResourceError => {
  let contents: any = {
    __type: "NotServiceResourceError",
    Message: undefined,
    ResourceARN: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.ResourceARN !== undefined) {
    contents.ResourceARN = output.ResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1ResourceDoesNotSupportTagging = (
  output: any,
  context: __SerdeContext
): ResourceDoesNotSupportTagging => {
  let contents: any = {
    __type: "ResourceDoesNotSupportTagging",
    Message: undefined,
    ResourceARN: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.ResourceARN !== undefined) {
    contents.ResourceARN = output.ResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFound = (
  output: any,
  context: __SerdeContext
): ResourceNotFound => {
  let contents: any = {
    __type: "ResourceNotFound",
    Message: undefined,
    ResourceARN: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.ResourceARN !== undefined) {
    contents.ResourceARN = output.ResourceARN;
  }
  return contents;
};

const deserializeAws_json1_1SelfManagedActiveDirectoryAttributes = (
  output: any,
  context: __SerdeContext
): SelfManagedActiveDirectoryAttributes => {
  let contents: any = {
    __type: "SelfManagedActiveDirectoryAttributes",
    DnsIps: undefined,
    DomainName: undefined,
    FileSystemAdministratorsGroup: undefined,
    OrganizationalUnitDistinguishedName: undefined,
    UserName: undefined
  };
  if (output.DnsIps !== undefined) {
    contents.DnsIps = deserializeAws_json1_1DnsIps(output.DnsIps, context);
  }
  if (output.DomainName !== undefined) {
    contents.DomainName = output.DomainName;
  }
  if (output.FileSystemAdministratorsGroup !== undefined) {
    contents.FileSystemAdministratorsGroup =
      output.FileSystemAdministratorsGroup;
  }
  if (output.OrganizationalUnitDistinguishedName !== undefined) {
    contents.OrganizationalUnitDistinguishedName =
      output.OrganizationalUnitDistinguishedName;
  }
  if (output.UserName !== undefined) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_json1_1ServiceLimitExceeded = (
  output: any,
  context: __SerdeContext
): ServiceLimitExceeded => {
  let contents: any = {
    __type: "ServiceLimitExceeded",
    Limit: undefined,
    Message: undefined
  };
  if (output.Limit !== undefined) {
    contents.Limit = output.Limit;
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedOperation = (
  output: any,
  context: __SerdeContext
): UnsupportedOperation => {
  let contents: any = {
    __type: "UnsupportedOperation",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateFileSystemResponse = (
  output: any,
  context: __SerdeContext
): UpdateFileSystemResponse => {
  let contents: any = {
    __type: "UpdateFileSystemResponse",
    FileSystem: undefined
  };
  if (output.FileSystem !== undefined) {
    contents.FileSystem = deserializeAws_json1_1FileSystem(
      output.FileSystem,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1WindowsFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): WindowsFileSystemConfiguration => {
  let contents: any = {
    __type: "WindowsFileSystemConfiguration",
    ActiveDirectoryId: undefined,
    AutomaticBackupRetentionDays: undefined,
    CopyTagsToBackups: undefined,
    DailyAutomaticBackupStartTime: undefined,
    DeploymentType: undefined,
    MaintenanceOperationsInProgress: undefined,
    PreferredFileServerIp: undefined,
    PreferredSubnetId: undefined,
    RemoteAdministrationEndpoint: undefined,
    SelfManagedActiveDirectoryConfiguration: undefined,
    ThroughputCapacity: undefined,
    WeeklyMaintenanceStartTime: undefined
  };
  if (output.ActiveDirectoryId !== undefined) {
    contents.ActiveDirectoryId = output.ActiveDirectoryId;
  }
  if (output.AutomaticBackupRetentionDays !== undefined) {
    contents.AutomaticBackupRetentionDays = output.AutomaticBackupRetentionDays;
  }
  if (output.CopyTagsToBackups !== undefined) {
    contents.CopyTagsToBackups = output.CopyTagsToBackups;
  }
  if (output.DailyAutomaticBackupStartTime !== undefined) {
    contents.DailyAutomaticBackupStartTime =
      output.DailyAutomaticBackupStartTime;
  }
  if (output.DeploymentType !== undefined) {
    contents.DeploymentType = output.DeploymentType;
  }
  if (output.MaintenanceOperationsInProgress !== undefined) {
    contents.MaintenanceOperationsInProgress = deserializeAws_json1_1FileSystemMaintenanceOperations(
      output.MaintenanceOperationsInProgress,
      context
    );
  }
  if (output.PreferredFileServerIp !== undefined) {
    contents.PreferredFileServerIp = output.PreferredFileServerIp;
  }
  if (output.PreferredSubnetId !== undefined) {
    contents.PreferredSubnetId = output.PreferredSubnetId;
  }
  if (output.RemoteAdministrationEndpoint !== undefined) {
    contents.RemoteAdministrationEndpoint = output.RemoteAdministrationEndpoint;
  }
  if (output.SelfManagedActiveDirectoryConfiguration !== undefined) {
    contents.SelfManagedActiveDirectoryConfiguration = deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(
      output.SelfManagedActiveDirectoryConfiguration,
      context
    );
  }
  if (output.ThroughputCapacity !== undefined) {
    contents.ThroughputCapacity = output.ThroughputCapacity;
  }
  if (output.WeeklyMaintenanceStartTime !== undefined) {
    contents.WeeklyMaintenanceStartTime = output.WeeklyMaintenanceStartTime;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
