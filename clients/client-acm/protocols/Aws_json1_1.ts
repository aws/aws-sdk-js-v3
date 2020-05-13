import {
  AddTagsToCertificateCommandInput,
  AddTagsToCertificateCommandOutput
} from "../commands/AddTagsToCertificateCommand";
import {
  DeleteCertificateCommandInput,
  DeleteCertificateCommandOutput
} from "../commands/DeleteCertificateCommand";
import {
  DescribeCertificateCommandInput,
  DescribeCertificateCommandOutput
} from "../commands/DescribeCertificateCommand";
import {
  ExportCertificateCommandInput,
  ExportCertificateCommandOutput
} from "../commands/ExportCertificateCommand";
import {
  GetCertificateCommandInput,
  GetCertificateCommandOutput
} from "../commands/GetCertificateCommand";
import {
  ImportCertificateCommandInput,
  ImportCertificateCommandOutput
} from "../commands/ImportCertificateCommand";
import {
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput
} from "../commands/ListCertificatesCommand";
import {
  ListTagsForCertificateCommandInput,
  ListTagsForCertificateCommandOutput
} from "../commands/ListTagsForCertificateCommand";
import {
  RemoveTagsFromCertificateCommandInput,
  RemoveTagsFromCertificateCommandOutput
} from "../commands/RemoveTagsFromCertificateCommand";
import {
  RenewCertificateCommandInput,
  RenewCertificateCommandOutput
} from "../commands/RenewCertificateCommand";
import {
  RequestCertificateCommandInput,
  RequestCertificateCommandOutput
} from "../commands/RequestCertificateCommand";
import {
  ResendValidationEmailCommandInput,
  ResendValidationEmailCommandOutput
} from "../commands/ResendValidationEmailCommand";
import {
  UpdateCertificateOptionsCommandInput,
  UpdateCertificateOptionsCommandOutput
} from "../commands/UpdateCertificateOptionsCommand";
import {
  AddTagsToCertificateRequest,
  CertificateDetail,
  CertificateOptions,
  CertificateStatus,
  CertificateSummary,
  DeleteCertificateRequest,
  DescribeCertificateRequest,
  DescribeCertificateResponse,
  DomainValidation,
  DomainValidationOption,
  ExportCertificateRequest,
  ExportCertificateResponse,
  ExtendedKeyUsage,
  ExtendedKeyUsageName,
  Filters,
  GetCertificateRequest,
  GetCertificateResponse,
  ImportCertificateRequest,
  ImportCertificateResponse,
  InvalidArgsException,
  InvalidArnException,
  InvalidDomainValidationOptionsException,
  InvalidParameterException,
  InvalidStateException,
  InvalidTagException,
  KeyAlgorithm,
  KeyUsage,
  KeyUsageName,
  LimitExceededException,
  ListCertificatesRequest,
  ListCertificatesResponse,
  ListTagsForCertificateRequest,
  ListTagsForCertificateResponse,
  RemoveTagsFromCertificateRequest,
  RenewCertificateRequest,
  RenewalSummary,
  RequestCertificateRequest,
  RequestCertificateResponse,
  RequestInProgressException,
  ResendValidationEmailRequest,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceRecord,
  Tag,
  TagPolicyException,
  TooManyTagsException,
  UpdateCertificateOptionsRequest
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

export const serializeAws_json1_1AddTagsToCertificateCommand = async (
  input: AddTagsToCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.AddTagsToCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AddTagsToCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCertificateCommand = async (
  input: DeleteCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.DeleteCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCertificateCommand = async (
  input: DescribeCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.DescribeCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ExportCertificateCommand = async (
  input: ExportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.ExportCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ExportCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCertificateCommand = async (
  input: GetCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.GetCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportCertificateCommand = async (
  input: ImportCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.ImportCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ImportCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCertificatesCommand = async (
  input: ListCertificatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.ListCertificates"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCertificatesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForCertificateCommand = async (
  input: ListTagsForCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.ListTagsForCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsFromCertificateCommand = async (
  input: RemoveTagsFromCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.RemoveTagsFromCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTagsFromCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RenewCertificateCommand = async (
  input: RenewCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.RenewCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RenewCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RequestCertificateCommand = async (
  input: RequestCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.RequestCertificate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RequestCertificateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResendValidationEmailCommand = async (
  input: ResendValidationEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.ResendValidationEmail"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResendValidationEmailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCertificateOptionsCommand = async (
  input: UpdateCertificateOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "CertificateManager.UpdateCertificateOptions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCertificateOptionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsToCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsToCertificateCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: AddTagsToCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsToCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.certificatemanager#TooManyTagsException":
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

export const deserializeAws_json1_1DeleteCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.certificatemanager#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCertificateResponse(data, context);
  const response: DescribeCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

export const deserializeAws_json1_1ExportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ExportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ExportCertificateResponse(data, context);
  const response: ExportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ExportCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazon.certificatemanager#RequestInProgressException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestInProgressException":
    case "com.amazon.certificatemanager#RequestInProgressException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

export const deserializeAws_json1_1ImportCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ImportCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportCertificateResponse(data, context);
  const response: ImportCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCertificateCommandOutput> => {
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
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
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
    case "com.amazon.certificatemanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.certificatemanager#TooManyTagsException":
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

export const deserializeAws_json1_1ListCertificatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCertificatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCertificatesResponse(data, context);
  const response: ListCertificatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCertificatesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCertificatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCertificatesCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArgsException":
      response = {
        ...(await deserializeAws_json1_1InvalidArgsExceptionResponse(
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

export const deserializeAws_json1_1ListTagsForCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForCertificateResponse(
    data,
    context
  );
  const response: ListTagsForCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

export const deserializeAws_json1_1RemoveTagsFromCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsFromCertificateCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RemoveTagsFromCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsFromCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(
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

export const deserializeAws_json1_1RenewCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RenewCertificateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RenewCertificateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RenewCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

export const deserializeAws_json1_1RequestCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RequestCertificateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RequestCertificateResponse(data, context);
  const response: RequestCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RequestCertificateResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RequestCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCertificateCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDomainValidationOptionsException":
    case "com.amazon.certificatemanager#InvalidDomainValidationOptionsException":
      response = {
        ...(await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.certificatemanager#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagException":
    case "com.amazon.certificatemanager#InvalidTagException":
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
    case "com.amazon.certificatemanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazon.certificatemanager#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.certificatemanager#TooManyTagsException":
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

export const deserializeAws_json1_1ResendValidationEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResendValidationEmailCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: ResendValidationEmailCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResendValidationEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendValidationEmailCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidArnExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDomainValidationOptionsException":
    case "com.amazon.certificatemanager#InvalidDomainValidationOptionsException":
      response = {
        ...(await deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazon.certificatemanager#InvalidStateException":
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
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateCertificateOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCertificateOptionsCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UpdateCertificateOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCertificateOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCertificateOptionsCommandOutput> => {
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
    case "com.amazon.certificatemanager#InvalidArnException":
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
    case "com.amazon.certificatemanager#InvalidStateException":
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
    case "com.amazon.certificatemanager#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.certificatemanager#ResourceNotFoundException":
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

const deserializeAws_json1_1InvalidDomainValidationOptionsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDomainValidationOptionsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDomainValidationOptionsException(
    body,
    context
  );
  const contents: InvalidDomainValidationOptionsException = {
    name: "InvalidDomainValidationOptionsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
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

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyException(
    body,
    context
  );
  const contents: TagPolicyException = {
    name: "TagPolicyException",
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

const serializeAws_json1_1AddTagsToCertificateRequest = (
  input: AddTagsToCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1CertificateOptions = (
  input: CertificateOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateTransparencyLoggingPreference !== undefined && {
      CertificateTransparencyLoggingPreference:
        input.CertificateTransparencyLoggingPreference
    })
  };
};

const serializeAws_json1_1CertificateStatuses = (
  input: (CertificateStatus | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DeleteCertificateRequest = (
  input: DeleteCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    })
  };
};

const serializeAws_json1_1DescribeCertificateRequest = (
  input: DescribeCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    })
  };
};

const serializeAws_json1_1DomainList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1DomainValidationOption = (
  input: DomainValidationOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.ValidationDomain !== undefined && {
      ValidationDomain: input.ValidationDomain
    })
  };
};

const serializeAws_json1_1DomainValidationOptionList = (
  input: DomainValidationOption[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1DomainValidationOption(entry, context)
  );
};

const serializeAws_json1_1ExportCertificateRequest = (
  input: ExportCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.Passphrase !== undefined && {
      Passphrase: context.base64Encoder(input.Passphrase)
    })
  };
};

const serializeAws_json1_1ExtendedKeyUsageFilterList = (
  input: (ExtendedKeyUsageName | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Filters = (
  input: Filters,
  context: __SerdeContext
): any => {
  return {
    ...(input.extendedKeyUsage !== undefined && {
      extendedKeyUsage: serializeAws_json1_1ExtendedKeyUsageFilterList(
        input.extendedKeyUsage,
        context
      )
    }),
    ...(input.keyTypes !== undefined && {
      keyTypes: serializeAws_json1_1KeyAlgorithmList(input.keyTypes, context)
    }),
    ...(input.keyUsage !== undefined && {
      keyUsage: serializeAws_json1_1KeyUsageFilterList(input.keyUsage, context)
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
    })
  };
};

const serializeAws_json1_1ImportCertificateRequest = (
  input: ImportCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate !== undefined && {
      Certificate: context.base64Encoder(input.Certificate)
    }),
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.CertificateChain !== undefined && {
      CertificateChain: context.base64Encoder(input.CertificateChain)
    }),
    ...(input.PrivateKey !== undefined && {
      PrivateKey: context.base64Encoder(input.PrivateKey)
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1KeyAlgorithmList = (
  input: (KeyAlgorithm | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1KeyUsageFilterList = (
  input: (KeyUsageName | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListCertificatesRequest = (
  input: ListCertificatesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateStatuses !== undefined && {
      CertificateStatuses: serializeAws_json1_1CertificateStatuses(
        input.CertificateStatuses,
        context
      )
    }),
    ...(input.Includes !== undefined && {
      Includes: serializeAws_json1_1Filters(input.Includes, context)
    }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForCertificateRequest = (
  input: ListTagsForCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    })
  };
};

const serializeAws_json1_1RemoveTagsFromCertificateRequest = (
  input: RemoveTagsFromCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1RenewCertificateRequest = (
  input: RenewCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    })
  };
};

const serializeAws_json1_1RequestCertificateRequest = (
  input: RequestCertificateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn !== undefined && {
      CertificateAuthorityArn: input.CertificateAuthorityArn
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.DomainValidationOptions !== undefined && {
      DomainValidationOptions: serializeAws_json1_1DomainValidationOptionList(
        input.DomainValidationOptions,
        context
      )
    }),
    ...(input.IdempotencyToken !== undefined && {
      IdempotencyToken: input.IdempotencyToken
    }),
    ...(input.Options !== undefined && {
      Options: serializeAws_json1_1CertificateOptions(input.Options, context)
    }),
    ...(input.SubjectAlternativeNames !== undefined && {
      SubjectAlternativeNames: serializeAws_json1_1DomainList(
        input.SubjectAlternativeNames,
        context
      )
    }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    }),
    ...(input.ValidationMethod !== undefined && {
      ValidationMethod: input.ValidationMethod
    })
  };
};

const serializeAws_json1_1ResendValidationEmailRequest = (
  input: ResendValidationEmailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.Domain !== undefined && { Domain: input.Domain }),
    ...(input.ValidationDomain !== undefined && {
      ValidationDomain: input.ValidationDomain
    })
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1UpdateCertificateOptionsRequest = (
  input: UpdateCertificateOptionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateArn !== undefined && {
      CertificateArn: input.CertificateArn
    }),
    ...(input.Options !== undefined && {
      Options: serializeAws_json1_1CertificateOptions(input.Options, context)
    })
  };
};

const deserializeAws_json1_1CertificateDetail = (
  output: any,
  context: __SerdeContext
): CertificateDetail => {
  let contents: any = {
    __type: "CertificateDetail",
    CertificateArn: undefined,
    CertificateAuthorityArn: undefined,
    CreatedAt: undefined,
    DomainName: undefined,
    DomainValidationOptions: undefined,
    ExtendedKeyUsages: undefined,
    FailureReason: undefined,
    ImportedAt: undefined,
    InUseBy: undefined,
    IssuedAt: undefined,
    Issuer: undefined,
    KeyAlgorithm: undefined,
    KeyUsages: undefined,
    NotAfter: undefined,
    NotBefore: undefined,
    Options: undefined,
    RenewalEligibility: undefined,
    RenewalSummary: undefined,
    RevocationReason: undefined,
    RevokedAt: undefined,
    Serial: undefined,
    SignatureAlgorithm: undefined,
    Status: undefined,
    Subject: undefined,
    SubjectAlternativeNames: undefined,
    Type: undefined
  };
  if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
    contents.CertificateArn = output.CertificateArn;
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
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (
    output.DomainValidationOptions !== undefined &&
    output.DomainValidationOptions !== null
  ) {
    contents.DomainValidationOptions = deserializeAws_json1_1DomainValidationList(
      output.DomainValidationOptions,
      context
    );
  }
  if (
    output.ExtendedKeyUsages !== undefined &&
    output.ExtendedKeyUsages !== null
  ) {
    contents.ExtendedKeyUsages = deserializeAws_json1_1ExtendedKeyUsageList(
      output.ExtendedKeyUsages,
      context
    );
  }
  if (output.FailureReason !== undefined && output.FailureReason !== null) {
    contents.FailureReason = output.FailureReason;
  }
  if (output.ImportedAt !== undefined && output.ImportedAt !== null) {
    contents.ImportedAt = new Date(Math.round(output.ImportedAt * 1000));
  }
  if (output.InUseBy !== undefined && output.InUseBy !== null) {
    contents.InUseBy = deserializeAws_json1_1InUseList(output.InUseBy, context);
  }
  if (output.IssuedAt !== undefined && output.IssuedAt !== null) {
    contents.IssuedAt = new Date(Math.round(output.IssuedAt * 1000));
  }
  if (output.Issuer !== undefined && output.Issuer !== null) {
    contents.Issuer = output.Issuer;
  }
  if (output.KeyAlgorithm !== undefined && output.KeyAlgorithm !== null) {
    contents.KeyAlgorithm = output.KeyAlgorithm;
  }
  if (output.KeyUsages !== undefined && output.KeyUsages !== null) {
    contents.KeyUsages = deserializeAws_json1_1KeyUsageList(
      output.KeyUsages,
      context
    );
  }
  if (output.NotAfter !== undefined && output.NotAfter !== null) {
    contents.NotAfter = new Date(Math.round(output.NotAfter * 1000));
  }
  if (output.NotBefore !== undefined && output.NotBefore !== null) {
    contents.NotBefore = new Date(Math.round(output.NotBefore * 1000));
  }
  if (output.Options !== undefined && output.Options !== null) {
    contents.Options = deserializeAws_json1_1CertificateOptions(
      output.Options,
      context
    );
  }
  if (
    output.RenewalEligibility !== undefined &&
    output.RenewalEligibility !== null
  ) {
    contents.RenewalEligibility = output.RenewalEligibility;
  }
  if (output.RenewalSummary !== undefined && output.RenewalSummary !== null) {
    contents.RenewalSummary = deserializeAws_json1_1RenewalSummary(
      output.RenewalSummary,
      context
    );
  }
  if (
    output.RevocationReason !== undefined &&
    output.RevocationReason !== null
  ) {
    contents.RevocationReason = output.RevocationReason;
  }
  if (output.RevokedAt !== undefined && output.RevokedAt !== null) {
    contents.RevokedAt = new Date(Math.round(output.RevokedAt * 1000));
  }
  if (output.Serial !== undefined && output.Serial !== null) {
    contents.Serial = output.Serial;
  }
  if (
    output.SignatureAlgorithm !== undefined &&
    output.SignatureAlgorithm !== null
  ) {
    contents.SignatureAlgorithm = output.SignatureAlgorithm;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Subject !== undefined && output.Subject !== null) {
    contents.Subject = output.Subject;
  }
  if (
    output.SubjectAlternativeNames !== undefined &&
    output.SubjectAlternativeNames !== null
  ) {
    contents.SubjectAlternativeNames = deserializeAws_json1_1DomainList(
      output.SubjectAlternativeNames,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1CertificateOptions = (
  output: any,
  context: __SerdeContext
): CertificateOptions => {
  let contents: any = {
    __type: "CertificateOptions",
    CertificateTransparencyLoggingPreference: undefined
  };
  if (
    output.CertificateTransparencyLoggingPreference !== undefined &&
    output.CertificateTransparencyLoggingPreference !== null
  ) {
    contents.CertificateTransparencyLoggingPreference =
      output.CertificateTransparencyLoggingPreference;
  }
  return contents;
};

const deserializeAws_json1_1CertificateSummary = (
  output: any,
  context: __SerdeContext
): CertificateSummary => {
  let contents: any = {
    __type: "CertificateSummary",
    CertificateArn: undefined,
    DomainName: undefined
  };
  if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
    contents.CertificateArn = output.CertificateArn;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  return contents;
};

const deserializeAws_json1_1CertificateSummaryList = (
  output: any,
  context: __SerdeContext
): CertificateSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CertificateSummary(entry, context)
  );
};

const deserializeAws_json1_1DescribeCertificateResponse = (
  output: any,
  context: __SerdeContext
): DescribeCertificateResponse => {
  let contents: any = {
    __type: "DescribeCertificateResponse",
    Certificate: undefined
  };
  if (output.Certificate !== undefined && output.Certificate !== null) {
    contents.Certificate = deserializeAws_json1_1CertificateDetail(
      output.Certificate,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DomainList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DomainValidation = (
  output: any,
  context: __SerdeContext
): DomainValidation => {
  let contents: any = {
    __type: "DomainValidation",
    DomainName: undefined,
    ResourceRecord: undefined,
    ValidationDomain: undefined,
    ValidationEmails: undefined,
    ValidationMethod: undefined,
    ValidationStatus: undefined
  };
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.ResourceRecord !== undefined && output.ResourceRecord !== null) {
    contents.ResourceRecord = deserializeAws_json1_1ResourceRecord(
      output.ResourceRecord,
      context
    );
  }
  if (
    output.ValidationDomain !== undefined &&
    output.ValidationDomain !== null
  ) {
    contents.ValidationDomain = output.ValidationDomain;
  }
  if (
    output.ValidationEmails !== undefined &&
    output.ValidationEmails !== null
  ) {
    contents.ValidationEmails = deserializeAws_json1_1ValidationEmailList(
      output.ValidationEmails,
      context
    );
  }
  if (
    output.ValidationMethod !== undefined &&
    output.ValidationMethod !== null
  ) {
    contents.ValidationMethod = output.ValidationMethod;
  }
  if (
    output.ValidationStatus !== undefined &&
    output.ValidationStatus !== null
  ) {
    contents.ValidationStatus = output.ValidationStatus;
  }
  return contents;
};

const deserializeAws_json1_1DomainValidationList = (
  output: any,
  context: __SerdeContext
): DomainValidation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainValidation(entry, context)
  );
};

const deserializeAws_json1_1ExportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ExportCertificateResponse => {
  let contents: any = {
    __type: "ExportCertificateResponse",
    Certificate: undefined,
    CertificateChain: undefined,
    PrivateKey: undefined
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
  if (output.PrivateKey !== undefined && output.PrivateKey !== null) {
    contents.PrivateKey = output.PrivateKey;
  }
  return contents;
};

const deserializeAws_json1_1ExtendedKeyUsage = (
  output: any,
  context: __SerdeContext
): ExtendedKeyUsage => {
  let contents: any = {
    __type: "ExtendedKeyUsage",
    Name: undefined,
    OID: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.OID !== undefined && output.OID !== null) {
    contents.OID = output.OID;
  }
  return contents;
};

const deserializeAws_json1_1ExtendedKeyUsageList = (
  output: any,
  context: __SerdeContext
): ExtendedKeyUsage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExtendedKeyUsage(entry, context)
  );
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

const deserializeAws_json1_1ImportCertificateResponse = (
  output: any,
  context: __SerdeContext
): ImportCertificateResponse => {
  let contents: any = {
    __type: "ImportCertificateResponse",
    CertificateArn: undefined
  };
  if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
    contents.CertificateArn = output.CertificateArn;
  }
  return contents;
};

const deserializeAws_json1_1InUseList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_json1_1InvalidDomainValidationOptionsException = (
  output: any,
  context: __SerdeContext
): InvalidDomainValidationOptionsException => {
  let contents: any = {
    __type: "InvalidDomainValidationOptionsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
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

const deserializeAws_json1_1KeyUsage = (
  output: any,
  context: __SerdeContext
): KeyUsage => {
  let contents: any = {
    __type: "KeyUsage",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1KeyUsageList = (
  output: any,
  context: __SerdeContext
): KeyUsage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1KeyUsage(entry, context)
  );
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

const deserializeAws_json1_1ListCertificatesResponse = (
  output: any,
  context: __SerdeContext
): ListCertificatesResponse => {
  let contents: any = {
    __type: "ListCertificatesResponse",
    CertificateSummaryList: undefined,
    NextToken: undefined
  };
  if (
    output.CertificateSummaryList !== undefined &&
    output.CertificateSummaryList !== null
  ) {
    contents.CertificateSummaryList = deserializeAws_json1_1CertificateSummaryList(
      output.CertificateSummaryList,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForCertificateResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForCertificateResponse => {
  let contents: any = {
    __type: "ListTagsForCertificateResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1RenewalSummary = (
  output: any,
  context: __SerdeContext
): RenewalSummary => {
  let contents: any = {
    __type: "RenewalSummary",
    DomainValidationOptions: undefined,
    RenewalStatus: undefined,
    RenewalStatusReason: undefined,
    UpdatedAt: undefined
  };
  if (
    output.DomainValidationOptions !== undefined &&
    output.DomainValidationOptions !== null
  ) {
    contents.DomainValidationOptions = deserializeAws_json1_1DomainValidationList(
      output.DomainValidationOptions,
      context
    );
  }
  if (output.RenewalStatus !== undefined && output.RenewalStatus !== null) {
    contents.RenewalStatus = output.RenewalStatus;
  }
  if (
    output.RenewalStatusReason !== undefined &&
    output.RenewalStatusReason !== null
  ) {
    contents.RenewalStatusReason = output.RenewalStatusReason;
  }
  if (output.UpdatedAt !== undefined && output.UpdatedAt !== null) {
    contents.UpdatedAt = new Date(Math.round(output.UpdatedAt * 1000));
  }
  return contents;
};

const deserializeAws_json1_1RequestCertificateResponse = (
  output: any,
  context: __SerdeContext
): RequestCertificateResponse => {
  let contents: any = {
    __type: "RequestCertificateResponse",
    CertificateArn: undefined
  };
  if (output.CertificateArn !== undefined && output.CertificateArn !== null) {
    contents.CertificateArn = output.CertificateArn;
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

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
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

const deserializeAws_json1_1ResourceRecord = (
  output: any,
  context: __SerdeContext
): ResourceRecord => {
  let contents: any = {
    __type: "ResourceRecord",
    Name: undefined,
    Type: undefined,
    Value: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
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
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagPolicyException = (
  output: any,
  context: __SerdeContext
): TagPolicyException => {
  let contents: any = {
    __type: "TagPolicyException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
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

const deserializeAws_json1_1ValidationEmailList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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
