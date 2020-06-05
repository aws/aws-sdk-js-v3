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

export const serializeAws_json1_1CreateCertificateAuthorityCommand = async (
  input: CreateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.CreateCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = async (
  input: CreateCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.CreateCertificateAuthorityAuditReport"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePermissionCommand = async (
  input: CreatePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.CreatePermission"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePermissionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateAuthorityCommand = async (
  input: DeleteCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.DeleteCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePermissionCommand = async (
  input: DeletePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.DeletePermission"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePermissionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateAuthorityCommand = async (
  input: DescribeCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.DescribeCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = async (
  input: DescribeCertificateAuthorityAuditReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.DescribeCertificateAuthorityAuditReport"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateCommand = async (
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.GetCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateAuthorityCertificateCommand = async (
  input: GetCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.GetCertificateAuthorityCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateAuthorityCertificateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateAuthorityCsrCommand = async (
  input: GetCertificateAuthorityCsrCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.GetCertificateAuthorityCsr"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateAuthorityCsrRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCertificateAuthorityCertificateCommand = async (
  input: ImportCertificateAuthorityCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.ImportCertificateAuthorityCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportCertificateAuthorityCertificateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1IssueCertificateCommand = async (
  input: IssueCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.IssueCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1IssueCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCertificateAuthoritiesCommand = async (
  input: ListCertificateAuthoritiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.ListCertificateAuthorities"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCertificateAuthoritiesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.ListPermissions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPermissionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.ListTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreCertificateAuthorityCommand = async (
  input: RestoreCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.RestoreCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RestoreCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RevokeCertificateCommand = async (
  input: RevokeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.RevokeCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RevokeCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagCertificateAuthorityCommand = async (
  input: TagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.TagCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TagCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagCertificateAuthorityCommand = async (
  input: UntagCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.UntagCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCertificateAuthorityCommand = async (
  input: UpdateCertificateAuthorityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ACMPrivateCA.UpdateCertificateAuthority"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCertificateAuthorityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1CreateCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityCommandOutput> => {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> => {
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
};

const deserializeAws_json1_1CreateCertificateAuthorityAuditReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCertificateAuthorityAuditReportCommandOutput> => {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1CreatePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreatePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePermissionCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DeleteCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateAuthorityCommandOutput> => {
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
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DeletePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePermissionCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DescribeCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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

export const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateAuthorityAuditReportCommandOutput> => {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> => {
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
};

const deserializeAws_json1_1GetCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetCertificateAuthorityCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> => {
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
};

const deserializeAws_json1_1GetCertificateAuthorityCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCertificateCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetCertificateAuthorityCsrCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> => {
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
};

const deserializeAws_json1_1GetCertificateAuthorityCsrCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCertificateAuthorityCsrCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> => {
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
};

const deserializeAws_json1_1ImportCertificateAuthorityCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateAuthorityCertificateCommandOutput> => {
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
    case "CertificateMismatchException":
    case "com.amazonaws.acmpca#CertificateMismatchException":
      response = {
        ...(await deserializeAws_json1_1CertificateMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1IssueCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> => {
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
};

const deserializeAws_json1_1IssueCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IssueCertificateCommandOutput> => {
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
    case "InvalidArgsException":
    case "com.amazonaws.acmpca#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListCertificateAuthoritiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> => {
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
};

const deserializeAws_json1_1ListCertificateAuthoritiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificateAuthoritiesCommandOutput> => {
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
    case "InvalidNextTokenException":
    case "com.amazonaws.acmpca#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1RestoreCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1RestoreCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCertificateAuthorityCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1RevokeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RevokeCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RevokeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RevokeCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeCertificateCommandOutput> => {
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
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1TagCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1TagCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagCertificateAuthorityCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1UntagCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1UntagCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagCertificateAuthorityCommandOutput> => {
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
    case "InvalidArnException":
    case "com.amazonaws.acmpca#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1UpdateCertificateAuthorityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateCertificateAuthorityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateAuthorityCommandOutput> => {
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
    case "com.amazonaws.acmpca#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

const serializeAws_json1_1ActionList = (
  input: (ActionType | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ASN1Subject = (
  input: ASN1Subject,
  context: __SerdeContext
): any => {
  return {
    ...(input.CommonName !== undefined && { CommonName: input.CommonName }),
    ...(input.Country !== undefined && { Country: input.Country }),
    ...(input.DistinguishedNameQualifier !== undefined && {
      DistinguishedNameQualifier: input.DistinguishedNameQualifier
    }),
    ...(input.GenerationQualifier !== undefined && {
      GenerationQualifier: input.GenerationQualifier
    }),
    ...(input.GivenName !== undefined && { GivenName: input.GivenName }),
    ...(input.Initials !== undefined && { Initials: input.Initials }),
    ...(input.Locality !== undefined && { Locality: input.Locality }),
    ...(input.Organization !== undefined && {
      Organization: input.Organization
    }),
    ...(input.OrganizationalUnit !== undefined && {
      OrganizationalUnit: input.OrganizationalUnit
    }),
    ...(input.Pseudonym !== undefined && { Pseudonym: input.Pseudonym }),
    ...(input.SerialNumber !== undefined && {
      SerialNumber: input.SerialNumber
    }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.Surname !== undefined && { Surname: input.Surname }),
    ...(input.Title !== undefined && { Title: input.Title })
  };
};

const serializeAws_json1_1CertificateAuthorityConfiguration = (
  input: CertificateAuthorityConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyAlgorithm !== undefined && {
      KeyAlgorithm: input.KeyAlgorithm
    }),
    ...(input.SigningAlgorithm !== undefined && {
      SigningAlgorithm: input.SigningAlgorithm
    }),
    ...(input.Subject !== undefined && {
      Subject: serializeAws_json1_1ASN1Subject(input.Subject, context)
    })
  };
};

const serializeAws_json1_1CreateCertificateAuthorityAuditReportRequest = (
  input: CreateCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditReportResponseFormat !== undefined && {
      AuditReportResponseFormat: input.AuditReportResponseFormat
    }),
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.S3BucketName !== undefined && {
      S3BucketName: input.S3BucketName
    })
  };
};

const serializeAws_json1_1CreateCertificateAuthorityRequest = (
  input: CreateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityConfiguration !== undefined && {
      CertificateAuthorityConfiguration: serializeAws_json1_1CertificateAuthorityConfiguration(
        input.CertificateAuthorityConfiguration,
        context
      )
    }),
    ...(input.CertificateAuthorityType !== undefined && {
      CertificateAuthorityType: input.CertificateAuthorityType
    }),
    ...(input.IdempotencyToken !== undefined && {
      IdempotencyToken: input.IdempotencyToken
    }),
    ...(input.RevocationConfiguration !== undefined && {
      RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(
        input.RevocationConfiguration,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CreatePermissionRequest = (
  input: CreatePermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions !== undefined && {
      Actions: serializeAws_json1_1ActionList(input.Actions, context)
    }),
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.Principal !== undefined && { Principal: input.Principal }),
    ...(input.SourceAccount !== undefined && {
      SourceAccount: input.SourceAccount
    })
  };
};

const serializeAws_json1_1CrlConfiguration = (
  input: CrlConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomCname !== undefined && { CustomCname: input.CustomCname }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.ExpirationInDays !== undefined && {
      ExpirationInDays: input.ExpirationInDays
    }),
    ...(input.S3BucketName !== undefined && {
      S3BucketName: input.S3BucketName
    })
  };
};

const serializeAws_json1_1DeleteCertificateAuthorityRequest = (
  input: DeleteCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.PermanentDeletionTimeInDays !== undefined && {
      PermanentDeletionTimeInDays: input.PermanentDeletionTimeInDays
    })
  };
};

const serializeAws_json1_1DeletePermissionRequest = (
  input: DeletePermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.Principal !== undefined && { Principal: input.Principal }),
    ...(input.SourceAccount !== undefined && {
      SourceAccount: input.SourceAccount
    })
  };
};

const serializeAws_json1_1DescribeCertificateAuthorityAuditReportRequest = (
  input: DescribeCertificateAuthorityAuditReportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditReportId !== undefined && {
      AuditReportId: input.AuditReportId
    }),
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    })
  };
};

const serializeAws_json1_1DescribeCertificateAuthorityRequest = (
  input: DescribeCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    })
  };
};

const serializeAws_json1_1GetCertificateAuthorityCertificateRequest = (
  input: GetCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    })
  };
};

const serializeAws_json1_1GetCertificateAuthorityCsrRequest = (
  input: GetCertificateAuthorityCsrRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    })
  };
};

const serializeAws_json1_1GetCertificateRequest = (
  input: GetCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    })
  };
};

const serializeAws_json1_1ImportCertificateAuthorityCertificateRequest = (
  input: ImportCertificateAuthorityCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate !== undefined && {
      Certificate: context.base64Encoder(input.Certificate)
    }),
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.CertificateChain !== undefined && {
      CertificateChain: context.base64Encoder(input.CertificateChain)
    })
  };
};

const serializeAws_json1_1IssueCertificateRequest = (
  input: IssueCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.Csr !== undefined && { Csr: context.base64Encoder(input.Csr) }),
    ...(input.IdempotencyToken !== undefined && {
      IdempotencyToken: input.IdempotencyToken
    }),
    ...(input.SigningAlgorithm !== undefined && {
      SigningAlgorithm: input.SigningAlgorithm
    }),
    ...(input.TemplateArn !== undefined && { TemplateArn: input.TemplateArn }),
    ...(input.Validity !== undefined && {
      Validity: serializeAws_json1_1Validity(input.Validity, context)
    })
  };
};

const serializeAws_json1_1ListCertificateAuthoritiesRequest = (
  input: ListCertificateAuthoritiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListPermissionsRequest = (
  input: ListPermissionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1RestoreCertificateAuthorityRequest = (
  input: RestoreCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    })
  };
};

const serializeAws_json1_1RevocationConfiguration = (
  input: RevocationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CrlConfiguration !== undefined && {
      CrlConfiguration: serializeAws_json1_1CrlConfiguration(
        input.CrlConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1RevokeCertificateRequest = (
  input: RevokeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.CertificateSerial !== undefined && {
      CertificateSerial: input.CertificateSerial
    }),
    ...(input.RevocationReason !== undefined && {
      RevocationReason: input.RevocationReason
    })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagCertificateAuthorityRequest = (
  input: TagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UntagCertificateAuthorityRequest = (
  input: UntagCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1UpdateCertificateAuthorityRequest = (
  input: UpdateCertificateAuthorityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.RevocationConfiguration !== undefined && {
      RevocationConfiguration: serializeAws_json1_1RevocationConfiguration(
        input.RevocationConfiguration,
        context
      )
    }),
    ...(input.Status !== undefined && { Status: input.Status })
  };
};

const serializeAws_json1_1Validity = (
  input: Validity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const deserializeAws_json1_1ActionList = (
  output: any,
  context: __SerdeContext
): (ActionType | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ASN1Subject = (
  output: any,
  context: __SerdeContext
): ASN1Subject => {
  return {
    __type: "ASN1Subject",
    CommonName:
      output.CommonName !== undefined && output.CommonName !== null
        ? output.CommonName
        : undefined,
    Country:
      output.Country !== undefined && output.Country !== null
        ? output.Country
        : undefined,
    DistinguishedNameQualifier:
      output.DistinguishedNameQualifier !== undefined &&
      output.DistinguishedNameQualifier !== null
        ? output.DistinguishedNameQualifier
        : undefined,
    GenerationQualifier:
      output.GenerationQualifier !== undefined &&
      output.GenerationQualifier !== null
        ? output.GenerationQualifier
        : undefined,
    GivenName:
      output.GivenName !== undefined && output.GivenName !== null
        ? output.GivenName
        : undefined,
    Initials:
      output.Initials !== undefined && output.Initials !== null
        ? output.Initials
        : undefined,
    Locality:
      output.Locality !== undefined && output.Locality !== null
        ? output.Locality
        : undefined,
    Organization:
      output.Organization !== undefined && output.Organization !== null
        ? output.Organization
        : undefined,
    OrganizationalUnit:
      output.OrganizationalUnit !== undefined &&
      output.OrganizationalUnit !== null
        ? output.OrganizationalUnit
        : undefined,
    Pseudonym:
      output.Pseudonym !== undefined && output.Pseudonym !== null
        ? output.Pseudonym
        : undefined,
    SerialNumber:
      output.SerialNumber !== undefined && output.SerialNumber !== null
        ? output.SerialNumber
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    Surname:
      output.Surname !== undefined && output.Surname !== null
        ? output.Surname
        : undefined,
    Title:
      output.Title !== undefined && output.Title !== null
        ? output.Title
        : undefined
  } as any;
};

const deserializeAws_json1_1CertificateAuthorities = (
  output: any,
  context: __SerdeContext
): CertificateAuthority[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CertificateAuthority(entry, context)
  );
};

const deserializeAws_json1_1CertificateAuthority = (
  output: any,
  context: __SerdeContext
): CertificateAuthority => {
  return {
    __type: "CertificateAuthority",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CertificateAuthorityConfiguration:
      output.CertificateAuthorityConfiguration !== undefined &&
      output.CertificateAuthorityConfiguration !== null
        ? deserializeAws_json1_1CertificateAuthorityConfiguration(
            output.CertificateAuthorityConfiguration,
            context
          )
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    FailureReason:
      output.FailureReason !== undefined && output.FailureReason !== null
        ? output.FailureReason
        : undefined,
    LastStateChangeAt:
      output.LastStateChangeAt !== undefined &&
      output.LastStateChangeAt !== null
        ? new Date(Math.round(output.LastStateChangeAt * 1000))
        : undefined,
    NotAfter:
      output.NotAfter !== undefined && output.NotAfter !== null
        ? new Date(Math.round(output.NotAfter * 1000))
        : undefined,
    NotBefore:
      output.NotBefore !== undefined && output.NotBefore !== null
        ? new Date(Math.round(output.NotBefore * 1000))
        : undefined,
    RestorableUntil:
      output.RestorableUntil !== undefined && output.RestorableUntil !== null
        ? new Date(Math.round(output.RestorableUntil * 1000))
        : undefined,
    RevocationConfiguration:
      output.RevocationConfiguration !== undefined &&
      output.RevocationConfiguration !== null
        ? deserializeAws_json1_1RevocationConfiguration(
            output.RevocationConfiguration,
            context
          )
        : undefined,
    Serial:
      output.Serial !== undefined && output.Serial !== null
        ? output.Serial
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1CertificateAuthorityConfiguration = (
  output: any,
  context: __SerdeContext
): CertificateAuthorityConfiguration => {
  return {
    __type: "CertificateAuthorityConfiguration",
    KeyAlgorithm:
      output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null
        ? output.KeyAlgorithm
        : undefined,
    SigningAlgorithm:
      output.SigningAlgorithm !== undefined && output.SigningAlgorithm !== null
        ? output.SigningAlgorithm
        : undefined,
    Subject:
      output.Subject !== undefined && output.Subject !== null
        ? deserializeAws_json1_1ASN1Subject(output.Subject, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CertificateMismatchException = (
  output: any,
  context: __SerdeContext
): CertificateMismatchException => {
  return {
    __type: "CertificateMismatchException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityAuditReportResponse => {
  return {
    __type: "CreateCertificateAuthorityAuditReportResponse",
    AuditReportId:
      output.AuditReportId !== undefined && output.AuditReportId !== null
        ? output.AuditReportId
        : undefined,
    S3Key:
      output.S3Key !== undefined && output.S3Key !== null
        ? output.S3Key
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): CreateCertificateAuthorityResponse => {
  return {
    __type: "CreateCertificateAuthorityResponse",
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined &&
      output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CrlConfiguration = (
  output: any,
  context: __SerdeContext
): CrlConfiguration => {
  return {
    __type: "CrlConfiguration",
    CustomCname:
      output.CustomCname !== undefined && output.CustomCname !== null
        ? output.CustomCname
        : undefined,
    Enabled:
      output.Enabled !== undefined && output.Enabled !== null
        ? output.Enabled
        : undefined,
    ExpirationInDays:
      output.ExpirationInDays !== undefined && output.ExpirationInDays !== null
        ? output.ExpirationInDays
        : undefined,
    S3BucketName:
      output.S3BucketName !== undefined && output.S3BucketName !== null
        ? output.S3BucketName
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCertificateAuthorityAuditReportResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityAuditReportResponse => {
  return {
    __type: "DescribeCertificateAuthorityAuditReportResponse",
    AuditReportStatus:
      output.AuditReportStatus !== undefined &&
      output.AuditReportStatus !== null
        ? output.AuditReportStatus
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    S3BucketName:
      output.S3BucketName !== undefined && output.S3BucketName !== null
        ? output.S3BucketName
        : undefined,
    S3Key:
      output.S3Key !== undefined && output.S3Key !== null
        ? output.S3Key
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCertificateAuthorityResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateAuthorityResponse => {
  return {
    __type: "DescribeCertificateAuthorityResponse",
    CertificateAuthority:
      output.CertificateAuthority !== undefined &&
      output.CertificateAuthority !== null
        ? deserializeAws_json1_1CertificateAuthority(
            output.CertificateAuthority,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetCertificateAuthorityCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCertificateResponse => {
  return {
    __type: "GetCertificateAuthorityCertificateResponse",
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? output.Certificate
        : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null
        ? output.CertificateChain
        : undefined
  } as any;
};

const deserializeAws_json1_1GetCertificateAuthorityCsrResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateAuthorityCsrResponse => {
  return {
    __type: "GetCertificateAuthorityCsrResponse",
    Csr:
      output.Csr !== undefined && output.Csr !== null ? output.Csr : undefined
  } as any;
};

const deserializeAws_json1_1GetCertificateResponse = (
  output: any,
  context: __SerdeContext
): GetCertificateResponse => {
  return {
    __type: "GetCertificateResponse",
    Certificate:
      output.Certificate !== undefined && output.Certificate !== null
        ? output.Certificate
        : undefined,
    CertificateChain:
      output.CertificateChain !== undefined && output.CertificateChain !== null
        ? output.CertificateChain
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArgsException = (
  output: any,
  context: __SerdeContext
): InvalidArgsException => {
  return {
    __type: "InvalidArgsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidArnException = (
  output: any,
  context: __SerdeContext
): InvalidArnException => {
  return {
    __type: "InvalidArnException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPolicyException = (
  output: any,
  context: __SerdeContext
): InvalidPolicyException => {
  return {
    __type: "InvalidPolicyException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
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
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  return {
    __type: "InvalidStateException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (
  output: any,
  context: __SerdeContext
): InvalidTagException => {
  return {
    __type: "InvalidTagException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1IssueCertificateResponse = (
  output: any,
  context: __SerdeContext
): IssueCertificateResponse => {
  return {
    __type: "IssueCertificateResponse",
    CertificateArn:
      output.CertificateArn !== undefined && output.CertificateArn !== null
        ? output.CertificateArn
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListCertificateAuthoritiesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificateAuthoritiesResponse => {
  return {
    __type: "ListCertificateAuthoritiesResponse",
    CertificateAuthorities:
      output.CertificateAuthorities !== undefined &&
      output.CertificateAuthorities !== null
        ? deserializeAws_json1_1CertificateAuthorities(
            output.CertificateAuthorities,
            context
          )
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPermissionsResponse = (
  output: any,
  context: __SerdeContext
): ListPermissionsResponse => {
  return {
    __type: "ListPermissionsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_json1_1PermissionList(output.Permissions, context)
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
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1MalformedCertificateException = (
  output: any,
  context: __SerdeContext
): MalformedCertificateException => {
  return {
    __type: "MalformedCertificateException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1MalformedCSRException = (
  output: any,
  context: __SerdeContext
): MalformedCSRException => {
  return {
    __type: "MalformedCSRException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Permission = (
  output: any,
  context: __SerdeContext
): Permission => {
  return {
    __type: "Permission",
    Actions:
      output.Actions !== undefined && output.Actions !== null
        ? deserializeAws_json1_1ActionList(output.Actions, context)
        : undefined,
    CertificateAuthorityArn:
      output.CertificateAuthorityArn !== undefined &&
      output.CertificateAuthorityArn !== null
        ? output.CertificateAuthorityArn
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? output.Policy
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? output.Principal
        : undefined,
    SourceAccount:
      output.SourceAccount !== undefined && output.SourceAccount !== null
        ? output.SourceAccount
        : undefined
  } as any;
};

const deserializeAws_json1_1PermissionAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): PermissionAlreadyExistsException => {
  return {
    __type: "PermissionAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PermissionList = (
  output: any,
  context: __SerdeContext
): Permission[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Permission(entry, context)
  );
};

const deserializeAws_json1_1RequestAlreadyProcessedException = (
  output: any,
  context: __SerdeContext
): RequestAlreadyProcessedException => {
  return {
    __type: "RequestAlreadyProcessedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RequestFailedException = (
  output: any,
  context: __SerdeContext
): RequestFailedException => {
  return {
    __type: "RequestFailedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RequestInProgressException = (
  output: any,
  context: __SerdeContext
): RequestInProgressException => {
  return {
    __type: "RequestInProgressException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1RevocationConfiguration = (
  output: any,
  context: __SerdeContext
): RevocationConfiguration => {
  return {
    __type: "RevocationConfiguration",
    CrlConfiguration:
      output.CrlConfiguration !== undefined && output.CrlConfiguration !== null
        ? deserializeAws_json1_1CrlConfiguration(
            output.CrlConfiguration,
            context
          )
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

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  return {
    __type: "TooManyTagsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
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
