import {
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput
} from "../commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput
} from "../commands/CreateCertificateAuthorityCommand";
import {
  CreatePermissionCommandInput,
  CreatePermissionCommandOutput
} from "../commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput
} from "../commands/DeleteCertificateAuthorityCommand";
import {
  DeletePermissionCommandInput,
  DeletePermissionCommandOutput
} from "../commands/DeletePermissionCommand";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput
} from "../commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput
} from "../commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput
} from "../commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput
} from "../commands/GetCertificateAuthorityCsrCommand";
import {
  GetCertificateCommandInput,
  GetCertificateCommandOutput
} from "../commands/GetCertificateCommand";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput
} from "../commands/ImportCertificateAuthorityCertificateCommand";
import {
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput
} from "../commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput
} from "../commands/ListCertificateAuthoritiesCommand";
import {
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput
} from "../commands/ListPermissionsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput
} from "../commands/RestoreCertificateAuthorityCommand";
import {
  RevokeCertificateCommandInput,
  RevokeCertificateCommandOutput
} from "../commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput
} from "../commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput
} from "../commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput
} from "../commands/UpdateCertificateAuthorityCommand";
import {
  ASN1Subject,
  ActionType,
  CertificateAuthority,
  CertificateAuthorityConfiguration,
  CertificateMismatchException,
  ConcurrentModificationException,
  CreateCertificateAuthorityAuditReportRequest,
  CreateCertificateAuthorityAuditReportResponse,
  CreateCertificateAuthorityRequest,
  CreateCertificateAuthorityResponse,
  CreatePermissionRequest,
  CrlConfiguration,
  DeleteCertificateAuthorityRequest,
  DeletePermissionRequest,
  DescribeCertificateAuthorityAuditReportRequest,
  DescribeCertificateAuthorityAuditReportResponse,
  DescribeCertificateAuthorityRequest,
  DescribeCertificateAuthorityResponse,
  GetCertificateAuthorityCertificateRequest,
  GetCertificateAuthorityCertificateResponse,
  GetCertificateAuthorityCsrRequest,
  GetCertificateAuthorityCsrResponse,
  GetCertificateRequest,
  GetCertificateResponse,
  ImportCertificateAuthorityCertificateRequest,
  InvalidArgsException,
  InvalidArnException,
  InvalidNextTokenException,
  InvalidPolicyException,
  InvalidRequestException,
  InvalidStateException,
  InvalidTagException,
  IssueCertificateRequest,
  IssueCertificateResponse,
  LimitExceededException,
  ListCertificateAuthoritiesRequest,
  ListCertificateAuthoritiesResponse,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListTagsRequest,
  ListTagsResponse,
  MalformedCSRException,
  MalformedCertificateException,
  Permission,
  PermissionAlreadyExistsException,
  RequestAlreadyProcessedException,
  RequestFailedException,
  RequestInProgressException,
  ResourceNotFoundException,
  RestoreCertificateAuthorityRequest,
  RevocationConfiguration,
  RevokeCertificateRequest,
  Tag,
  TagCertificateAuthorityRequest,
  TooManyTagsException,
  UntagCertificateAuthorityRequest,
  UpdateCertificateAuthorityRequest,
  Validity
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

export async function serializeAws_json1_1CreateCertificateAuthorityCommand(
  input: CreateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.CreateCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(
  input: CreateCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ACMPrivateCA.CreateCertificateAuthorityAuditReport";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreatePermissionCommand(
  input: CreatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.CreatePermission";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePermissionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteCertificateAuthorityCommand(
  input: DeleteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.DeleteCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeletePermissionCommand(
  input: DeletePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.DeletePermission";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePermissionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCertificateAuthorityCommand(
  input: DescribeCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.DescribeCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(
  input: DescribeCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ACMPrivateCA.DescribeCertificateAuthorityAuditReport";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetCertificateCommand(
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetCertificateAuthorityCertificateCommand(
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificateAuthorityCertificate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateAuthorityCertificateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetCertificateAuthorityCsrCommand(
  input: GetCertificateAuthorityCsrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.GetCertificateAuthorityCsr";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateAuthorityCsrRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ImportCertificateAuthorityCertificateCommand(
  input: ImportCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ACMPrivateCA.ImportCertificateAuthorityCertificate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1IssueCertificateCommand(
  input: IssueCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.IssueCertificate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1IssueCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListCertificateAuthoritiesCommand(
  input: ListCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.ListCertificateAuthorities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCertificateAuthoritiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPermissionsCommand(
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.ListPermissions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.ListTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RestoreCertificateAuthorityCommand(
  input: RestoreCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.RestoreCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RestoreCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RevokeCertificateCommand(
  input: RevokeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.RevokeCertificate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RevokeCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagCertificateAuthorityCommand(
  input: TagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.TagCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TagCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagCertificateAuthorityCommand(
  input: UntagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.UntagCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateCertificateAuthorityCommand(
  input: UpdateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ACMPrivateCA.UpdateCertificateAuthority";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityResponse(
    data,
    context
  );
  const response: CreateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCertificateAuthorityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = {
        ...(await deserializeAws_json1_1InvalidPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
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

export async function deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse(
    data,
    context
  );
  const response: CreateCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCertificateAuthorityAuditReportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1CreatePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreatePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PermissionAlreadyExistsException":
    case "com.amazonaws.acmpca#PermissionAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DeleteCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCertificateAuthorityCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DeletePermissionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePermissionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateAuthorityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityResponse(
    data,
    context
  );
  const response: DescribeCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateAuthorityResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse(
    data,
    context
  );
  const response: DescribeCertificateAuthorityAuditReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateAuthorityAuditReportResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateResponse(data, context);
  const response: GetCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetCertificateAuthorityCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCertificateResponse(
    data,
    context
  );
  const response: GetCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateAuthorityCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetCertificateAuthorityCsrCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCertificateAuthorityCsrResponse(
    data,
    context
  );
  const response: GetCertificateAuthorityCsrCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCertificateAuthorityCsrResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetCertificateAuthorityCsrCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: ImportCertificateAuthorityCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> {
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
    case "CertificateMismatchException":
    case "com.amazonaws.acmpca#CertificateMismatchException":
      response = {
        ...(await deserializeAws_json1_1CertificateMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedCertificateException":
    case "com.amazonaws.acmpca#MalformedCertificateException":
      response = {
        ...(await deserializeAws_json1_1MalformedCertificateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1IssueCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1IssueCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IssueCertificateResponse(data, context);
  const response: IssueCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IssueCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1IssueCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MalformedCSRException":
    case "com.amazonaws.acmpca#MalformedCSRException":
      response = {
        ...(await deserializeAws_json1_1MalformedCSRExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1ListCertificateAuthoritiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCertificateAuthoritiesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificateAuthoritiesResponse(
    data,
    context
  );
  const response: ListCertificateAuthoritiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCertificateAuthoritiesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListCertificateAuthoritiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
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

export async function deserializeAws_json1_1ListPermissionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListPermissionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1RestoreCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RestoreCertificateAuthorityCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RestoreCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RestoreCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1RevokeCertificateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RevokeCertificateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.acmpca#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.acmpca#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestAlreadyProcessedException":
    case "com.amazonaws.acmpca#RequestAlreadyProcessedException":
      response = {
        ...(await deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestFailedException":
    case "com.amazonaws.acmpca#RequestFailedException":
      response = {
        ...(await deserializeAws_json1_1RequestFailedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazonaws.acmpca#RequestInProgressException":
      response = {
        ...(await deserializeAws_json1_1RequestInProgressExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1TagCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagCertificateAuthorityCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: TagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.acmpca#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
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

export async function deserializeAws_json1_1UntagCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagCertificateAuthorityCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UntagCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazonaws.acmpca#InvalidTagException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1UpdateCertificateAuthorityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCertificateAuthorityCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateCertificateAuthorityCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateCertificateAuthorityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPolicyException":
    case "com.amazonaws.acmpca#InvalidPolicyException":
      response = {
        ...(await deserializeAws_json1_1InvalidPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.acmpca#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.acmpca#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1CertificateMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CertificateMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CertificateMismatchException(
    body,
    context
  );
  const contents: CertificateMismatchException = {
    name: "CertificateMismatchException",
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

const deserializeAws_json1_1InvalidArgsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArgsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArgsException(
    body,
    context
  );
  const contents: InvalidArgsException = {
    name: "InvalidArgsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidArnException(
    body,
    context
  );
  const contents: InvalidArnException = {
    name: "InvalidArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPolicyException(
    body,
    context
  );
  const contents: InvalidPolicyException = {
    name: "InvalidPolicyException",
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

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(
    body,
    context
  );
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(
    body,
    context
  );
  const contents: InvalidTagException = {
    name: "InvalidTagException",
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

const deserializeAws_json1_1MalformedCSRExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCSRException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedCSRException(
    body,
    context
  );
  const contents: MalformedCSRException = {
    name: "MalformedCSRException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MalformedCertificateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedCertificateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MalformedCertificateException(
    body,
    context
  );
  const contents: MalformedCertificateException = {
    name: "MalformedCertificateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PermissionAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PermissionAlreadyExistsException(
    body,
    context
  );
  const contents: PermissionAlreadyExistsException = {
    name: "PermissionAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestAlreadyProcessedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestAlreadyProcessedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestAlreadyProcessedException(
    body,
    context
  );
  const contents: RequestAlreadyProcessedException = {
    name: "RequestAlreadyProcessedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestFailedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestFailedException(
    body,
    context
  );
  const contents: RequestFailedException = {
    name: "RequestFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1RequestInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestInProgressException(
    body,
    context
  );
  const contents: RequestInProgressException = {
    name: "RequestInProgressException",
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

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    body,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ASN1Subject = (
  input: ASN1Subject,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CommonName !== undefined) {
    bodyParams["CommonName"] = input.CommonName;
  }
  if (input.Country !== undefined) {
    bodyParams["Country"] = input.Country;
  }
  if (input.DistinguishedNameQualifier !== undefined) {
    bodyParams["DistinguishedNameQualifier"] = input.DistinguishedNameQualifier;
  }
  if (input.GenerationQualifier !== undefined) {
    bodyParams["GenerationQualifier"] = input.GenerationQualifier;
  }
  if (input.GivenName !== undefined) {
    bodyParams["GivenName"] = input.GivenName;
  }
  if (input.Initials !== undefined) {
    bodyParams["Initials"] = input.Initials;
  }
  if (input.Locality !== undefined) {
    bodyParams["Locality"] = input.Locality;
  }
  if (input.Organization !== undefined) {
    bodyParams["Organization"] = input.Organization;
  }
  if (input.OrganizationalUnit !== undefined) {
    bodyParams["OrganizationalUnit"] = input.OrganizationalUnit;
  }
  if (input.Pseudonym !== undefined) {
    bodyParams["Pseudonym"] = input.Pseudonym;
  }
  if (input.SerialNumber !== undefined) {
    bodyParams["SerialNumber"] = input.SerialNumber;
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.Surname !== undefined) {
    bodyParams["Surname"] = input.Surname;
  }
  if (input.Title !== undefined) {
    bodyParams["Title"] = input.Title;
  }
  return bodyParams;
};

const serializeAws_json1_1ActionList = (
  input: Array<ActionType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CertificateAuthorityConfiguration = (
  input: CertificateAuthorityConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KeyAlgorithm !== undefined) {
    bodyParams["KeyAlgorithm"] = input.KeyAlgorithm;
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  if (input.Subject !== undefined) {
    bodyParams["Subject"] = serializeAws_json1_1ASN1Subject(
      input.Subject,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = (
  input: CreateCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuditReportResponseFormat !== undefined) {
    bodyParams["AuditReportResponseFormat"] = input.AuditReportResponseFormat;
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.S3BucketName !== undefined) {
    bodyParams["S3BucketName"] = input.S3BucketName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCertificateAuthorityRequest = (
  input: CreateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityConfiguration !== undefined) {
    bodyParams[
      "CertificateAuthorityConfiguration"
    ] = serializeAws_json1_1CertificateAuthorityConfiguration(
      input.CertificateAuthorityConfiguration,
      context
    );
  }
  if (input.CertificateAuthorityType !== undefined) {
    bodyParams["CertificateAuthorityType"] = input.CertificateAuthorityType;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.RevocationConfiguration !== undefined) {
    bodyParams[
      "RevocationConfiguration"
    ] = serializeAws_json1_1RevocationConfiguration(
      input.RevocationConfiguration,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePermissionRequest = (
  input: CreatePermissionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Actions !== undefined) {
    bodyParams["Actions"] = serializeAws_json1_1ActionList(
      input.Actions,
      context
    );
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.SourceAccount !== undefined) {
    bodyParams["SourceAccount"] = input.SourceAccount;
  }
  return bodyParams;
};

const serializeAws_json1_1CrlConfiguration = (
  input: CrlConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CustomCname !== undefined) {
    bodyParams["CustomCname"] = input.CustomCname;
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.ExpirationInDays !== undefined) {
    bodyParams["ExpirationInDays"] = input.ExpirationInDays;
  }
  if (input.S3BucketName !== undefined) {
    bodyParams["S3BucketName"] = input.S3BucketName;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCertificateAuthorityRequest = (
  input: DeleteCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.PermanentDeletionTimeInDays !== undefined) {
    bodyParams["PermanentDeletionTimeInDays"] =
      input.PermanentDeletionTimeInDays;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePermissionRequest = (
  input: DeletePermissionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.SourceAccount !== undefined) {
    bodyParams["SourceAccount"] = input.SourceAccount;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = (
  input: DescribeCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuditReportId !== undefined) {
    bodyParams["AuditReportId"] = input.AuditReportId;
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCertificateAuthorityRequest = (
  input: DescribeCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateAuthorityCertificateRequest = (
  input: GetCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateAuthorityCsrRequest = (
  input: GetCertificateAuthorityCsrRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetCertificateRequest = (
  input: GetCertificateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateArn !== undefined) {
    bodyParams["CertificateArn"] = input.CertificateArn;
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = (
  input: ImportCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Certificate !== undefined) {
    bodyParams["Certificate"] = context.base64Encoder(input.Certificate);
  }
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.CertificateChain !== undefined) {
    bodyParams["CertificateChain"] = context.base64Encoder(
      input.CertificateChain
    );
  }
  return bodyParams;
};

const serializeAws_json1_1IssueCertificateRequest = (
  input: IssueCertificateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Csr !== undefined) {
    bodyParams["Csr"] = context.base64Encoder(input.Csr);
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.SigningAlgorithm !== undefined) {
    bodyParams["SigningAlgorithm"] = input.SigningAlgorithm;
  }
  if (input.TemplateArn !== undefined) {
    bodyParams["TemplateArn"] = input.TemplateArn;
  }
  if (input.Validity !== undefined) {
    bodyParams["Validity"] = serializeAws_json1_1Validity(
      input.Validity,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListCertificateAuthoritiesRequest = (
  input: ListCertificateAuthoritiesRequest,
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

const serializeAws_json1_1ListPermissionsRequest = (
  input: ListPermissionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1RestoreCertificateAuthorityRequest = (
  input: RestoreCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  return bodyParams;
};

const serializeAws_json1_1RevocationConfiguration = (
  input: RevocationConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CrlConfiguration !== undefined) {
    bodyParams["CrlConfiguration"] = serializeAws_json1_1CrlConfiguration(
      input.CrlConfiguration,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RevokeCertificateRequest = (
  input: RevokeCertificateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.CertificateSerial !== undefined) {
    bodyParams["CertificateSerial"] = input.CertificateSerial;
  }
  if (input.RevocationReason !== undefined) {
    bodyParams["RevocationReason"] = input.RevocationReason;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagCertificateAuthorityRequest = (
  input: TagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1UntagCertificateAuthorityRequest = (
  input: UntagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateCertificateAuthorityRequest = (
  input: UpdateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CertificateAuthorityArn !== undefined) {
    bodyParams["CertificateAuthorityArn"] = input.CertificateAuthorityArn;
  }
  if (input.RevocationConfiguration !== undefined) {
    bodyParams[
      "RevocationConfiguration"
    ] = serializeAws_json1_1RevocationConfiguration(
      input.RevocationConfiguration,
      context
    );
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1Validity = (
  input: Validity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const deserializeAws_json1_1ASN1Subject = (
  output: any,
  context: __SerdeContext
): ASN1Subject => {
  let contents: any = {
    __type: "ASN1Subject",
    CommonName: undefined,
    Country: undefined,
    DistinguishedNameQualifier: undefined,
    GenerationQualifier: undefined,
    GivenName: undefined,
    Initials: undefined,
    Locality: undefined,
    Organization: undefined,
    OrganizationalUnit: undefined,
    Pseudonym: undefined,
    SerialNumber: undefined,
    State: undefined,
    Surname: undefined,
    Title: undefined
  };
  if (output.CommonName !== undefined && output.CommonName !== null) {
    contents.CommonName = output.CommonName;
  }
  if (output.Country !== undefined && output.Country !== null) {
    contents.Country = output.Country;
  }
  if (
    output.DistinguishedNameQualifier !== undefined &&
    output.DistinguishedNameQualifier !== null
  ) {
    contents.DistinguishedNameQualifier = output.DistinguishedNameQualifier;
  }
  if (
    output.GenerationQualifier !== undefined &&
    output.GenerationQualifier !== null
  ) {
    contents.GenerationQualifier = output.GenerationQualifier;
  }
  if (output.GivenName !== undefined && output.GivenName !== null) {
    contents.GivenName = output.GivenName;
  }
  if (output.Initials !== undefined && output.Initials !== null) {
    contents.Initials = output.Initials;
  }
  if (output.Locality !== undefined && output.Locality !== null) {
    contents.Locality = output.Locality;
  }
  if (output.Organization !== undefined && output.Organization !== null) {
    contents.Organization = output.Organization;
  }
  if (
    output.OrganizationalUnit !== undefined &&
    output.OrganizationalUnit !== null
  ) {
    contents.OrganizationalUnit = output.OrganizationalUnit;
  }
  if (output.Pseudonym !== undefined && output.Pseudonym !== null) {
    contents.Pseudonym = output.Pseudonym;
  }
  if (output.SerialNumber !== undefined && output.SerialNumber !== null) {
    contents.SerialNumber = output.SerialNumber;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.Surname !== undefined && output.Surname !== null) {
    contents.Surname = output.Surname;
  }
  if (output.Title !== undefined && output.Title !== null) {
    contents.Title = output.Title;
  }
  return contents;
};

const deserializeAws_json1_1ActionList = (
  output: any,
  context: __SerdeContext
): Array<ActionType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CertificateAuthorities = (
  output: any,
  context: __SerdeContext
): Array<CertificateAuthority> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CertificateAuthority(entry, context)
  );
};

const deserializeAws_json1_1CertificateAuthority = (
  output: any,
  context: __SerdeContext
): CertificateAuthority => {
  let contents: any = {
    __type: "CertificateAuthority",
    Arn: undefined,
    CertificateAuthorityConfiguration: undefined,
    CreatedAt: undefined,
    FailureReason: undefined,
    LastStateChangeAt: undefined,
    NotAfter: undefined,
    NotBefore: undefined,
    RestorableUntil: undefined,
    RevocationConfiguration: undefined,
    Serial: undefined,
    Status: undefined,
    Type: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (
    output.CertificateAuthorityConfiguration !== undefined &&
    output.CertificateAuthorityConfiguration !== null
  ) {
    contents.CertificateAuthorityConfiguration = deserializeAws_json1_1CertificateAuthorityConfiguration(
      output.CertificateAuthorityConfiguration,
      context
    );
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (
    output.LastStateChangeAt !== undefined &&
    output.LastStateChangeAt !== null
  ) {
    contents.LastStateChangeAt = new Date(
      Math.round(output.LastStateChangeAt * 1000)
    );
  }
  if (output.NotAfter !== undefined && output.NotAfter !== null) {
    contents.NotAfter = new Date(Math.round(output.NotAfter * 1000));
  }
  if (output.NotBefore !== undefined && output.NotBefore !== null) {
    contents.NotBefore = new Date(Math.round(output.NotBefore * 1000));
  }
  if (output.RestorableUntil !== undefined && output.RestorableUntil !== null) {
    contents.RestorableUntil = new Date(
      Math.round(output.RestorableUntil * 1000)
    );
  }
  if (
    output.RevocationConfiguration !== undefined &&
    output.RevocationConfiguration !== null
  ) {
    contents.RevocationConfiguration = deserializeAws_json1_1RevocationConfiguration(
      output.RevocationConfiguration,
      context
    );
  }
  if (output.Serial !== undefined && output.Serial !== null) {
    contents.Serial = output.Serial;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1CertificateAuthorityConfiguration = (
  output: any,
  context: __SerdeContext
): CertificateAuthorityConfiguration => {
  let contents: any = {
    __type: "CertificateAuthorityConfiguration",
    KeyAlgorithm: undefined,
    SigningAlgorithm: undefined,
    Subject: undefined
  };
  if (output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null) {
    contents.KeyAlgorithm = output.KeyAlgorithm;
  }
  if (
    output.SigningAlgorithm !== undefined &&
    output.SigningAlgorithm !== null
  ) {
    contents.SigningAlgorithm = output.SigningAlgorithm;
  }
  if (output.Subject !== undefined && output.Subject !== null) {
    contents.Subject = deserializeAws_json1_1ASN1Subject(
      output.Subject,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CertificateMismatchException = (
  output: any,
  context: __SerdeContext
): CertificateMismatchException => {
  let contents: any = {
    __type: "CertificateMismatchException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityAuditReportResponse => {
  let contents: any = {
    __type: "CreateCertificateAuthorityAuditReportResponse",
    AuditReportId: undefined,
    S3Key: undefined
  };
  if (output.AuditReportId !== undefined && output.AuditReportId !== null) {
    contents.AuditReportId = output.AuditReportId;
  }
  if (output.S3Key !== undefined && output.S3Key !== null) {
    contents.S3Key = output.S3Key;
  }
  return contents;
};

const deserializeAws_json1_1CreateCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityResponse => {
  let contents: any = {
    __type: "CreateCertificateAuthorityResponse",
    CertificateAuthorityArn: undefined
  };
  if (
    output.CertificateAuthorityArn !== undefined &&
    output.CertificateAuthorityArn !== null
  ) {
    contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
  }
  return contents;
};

const deserializeAws_json1_1CrlConfiguration = (
  output: any,
  context: __SerdeContext
): CrlConfiguration => {
  let contents: any = {
    __type: "CrlConfiguration",
    CustomCname: undefined,
    Enabled: undefined,
    ExpirationInDays: undefined,
    S3BucketName: undefined
  };
  if (output.CustomCname !== undefined && output.CustomCname !== null) {
    contents.CustomCname = output.CustomCname;
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (
    output.ExpirationInDays !== undefined &&
    output.ExpirationInDays !== null
  ) {
    contents.ExpirationInDays = output.ExpirationInDays;
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityAuditReportResponse => {
  let contents: any = {
    __type: "DescribeCertificateAuthorityAuditReportResponse",
    AuditReportStatus: undefined,
    CreatedAt: undefined,
    S3BucketName: undefined,
    S3Key: undefined
  };
  if (
    output.AuditReportStatus !== undefined &&
    output.AuditReportStatus !== null
  ) {
    contents.AuditReportStatus = output.AuditReportStatus;
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3Key !== undefined && output.S3Key !== null) {
    contents.S3Key = output.S3Key;
  }
  return contents;
};

const deserializeAws_json1_1DescribeCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityResponse => {
  let contents: any = {
    __type: "DescribeCertificateAuthorityResponse",
    CertificateAuthority: undefined
  };
  if (
    output.CertificateAuthority !== undefined &&
    output.CertificateAuthority !== null
  ) {
    contents.CertificateAuthority = deserializeAws_json1_1CertificateAuthority(
      output.CertificateAuthority,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCertificateResponse => {
  let contents: any = {
    __type: "GetCertificateAuthorityCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined
  };
  if (output.Certificate !== undefined && output.Certificate !== null) {
    contents.Certificate = output.Certificate;
  }
  if (
    output.CertificateChain !== undefined &&
    output.CertificateChain !== null
  ) {
    contents.CertificateChain = output.CertificateChain;
  }
  return contents;
};

const deserializeAws_json1_1GetCertificateAuthorityCsrResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCsrResponse => {
  let contents: any = {
    __type: "GetCertificateAuthorityCsrResponse",
    Csr: undefined
  };
  if (output.Csr !== undefined && output.Csr !== null) {
    contents.Csr = output.Csr;
  }
  return contents;
};

const deserializeAws_json1_1GetCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateResponse => {
  let contents: any = {
    __type: "GetCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined
  };
  if (output.Certificate !== undefined && output.Certificate !== null) {
    contents.Certificate = output.Certificate;
  }
  if (
    output.CertificateChain !== undefined &&
    output.CertificateChain !== null
  ) {
    contents.CertificateChain = output.CertificateChain;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArgsException = (
  output: any,
  context: __SerdeContext
): InvalidArgsException => {
  let contents: any = {
    __type: "InvalidArgsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  let contents: any = {
    __type: "InvalidArnException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPolicyException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyException => {
  let contents: any = {
    __type: "InvalidPolicyException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  let contents: any = {
    __type: "InvalidStateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  let contents: any = {
    __type: "InvalidTagException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IssueCertificateResponse = (
  output: any,
  context: __SerdeContext
): IssueCertificateResponse => {
  let contents: any = {
    __type: "IssueCertificateResponse",
    CertificateArn: undefined
  };
  if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
    contents.CertificateArn = output.CertificateArn;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListCertificateAuthoritiesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificateAuthoritiesResponse => {
  let contents: any = {
    __type: "ListCertificateAuthoritiesResponse",
    CertificateAuthorities: undefined,
    NextToken: undefined
  };
  if (
    output.CertificateAuthorities !== undefined &&
    output.CertificateAuthorities !== null
  ) {
    contents.CertificateAuthorities = deserializeAws_json1_1CertificateAuthorities(
      output.CertificateAuthorities,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  let contents: any = {
    __type: "ListPermissionsResponse",
    NextToken: undefined,
    Permissions: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Permissions !== undefined && output.Permissions !== null) {
    contents.Permissions = deserializeAws_json1_1PermissionList(
      output.Permissions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  let contents: any = {
    __type: "ListTagsResponse",
    NextToken: undefined,
    Tags: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1MalformedCSRException = (
  output: any,
  context: __SerdeContext
): MalformedCSRException => {
  let contents: any = {
    __type: "MalformedCSRException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1MalformedCertificateException = (
  output: any,
  context: __SerdeContext
): MalformedCertificateException => {
  let contents: any = {
    __type: "MalformedCertificateException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Permission = (
  output: any,
  context: __SerdeContext
): Permission => {
  let contents: any = {
    __type: "Permission",
    Actions: undefined,
    CertificateAuthorityArn: undefined,
    CreatedAt: undefined,
    Policy: undefined,
    Principal: undefined,
    SourceAccount: undefined
  };
  if (output.Actions !== undefined && output.Actions !== null) {
    contents.Actions = deserializeAws_json1_1ActionList(
      output.Actions,
      context
    );
  }
  if (
    output.CertificateAuthorityArn !== undefined &&
    output.CertificateAuthorityArn !== null
  ) {
    contents.CertificateAuthorityArn = output.CertificateAuthorityArn;
  }
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.Policy !== undefined && output.Policy !== null) {
    contents.Policy = output.Policy;
  }
  if (output.Principal !== undefined && output.Principal !== null) {
    contents.Principal = output.Principal;
  }
  if (output.SourceAccount !== undefined && output.SourceAccount !== null) {
    contents.SourceAccount = output.SourceAccount;
  }
  return contents;
};

const deserializeAws_json1_1PermissionAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PermissionAlreadyExistsException => {
  let contents: any = {
    __type: "PermissionAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PermissionList = (
  output: any,
  context: __SerdeContext
): Array<Permission> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Permission(entry, context)
  );
};

const deserializeAws_json1_1RequestAlreadyProcessedException = (
  output: any,
  context: __SerdeContext
): RequestAlreadyProcessedException => {
  let contents: any = {
    __type: "RequestAlreadyProcessedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RequestFailedException = (
  output: any,
  context: __SerdeContext
): RequestFailedException => {
  let contents: any = {
    __type: "RequestFailedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RequestInProgressException = (
  output: any,
  context: __SerdeContext
): RequestInProgressException => {
  let contents: any = {
    __type: "RequestInProgressException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1RevocationConfiguration = (
  output: any,
  context: __SerdeContext
): RevocationConfiguration => {
  let contents: any = {
    __type: "RevocationConfiguration",
    CrlConfiguration: undefined
  };
  if (
    output.CrlConfiguration !== undefined &&
    output.CrlConfiguration !== null
  ) {
    contents.CrlConfiguration = deserializeAws_json1_1CrlConfiguration(
      output.CrlConfiguration,
      context
    );
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
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
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

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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
