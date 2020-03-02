import {
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput
} from "../commands/AssociateServiceQuotaTemplateCommand";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
} from "../commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput
} from "../commands/DisassociateServiceQuotaTemplateCommand";
import {
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput
} from "../commands/GetAWSDefaultServiceQuotaCommand";
import {
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput
} from "../commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput
} from "../commands/GetRequestedServiceQuotaChangeCommand";
import {
  GetServiceQuotaCommandInput,
  GetServiceQuotaCommandOutput
} from "../commands/GetServiceQuotaCommand";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
} from "../commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput
} from "../commands/ListAWSDefaultServiceQuotasCommand";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
} from "../commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput
} from "../commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
} from "../commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import {
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput
} from "../commands/ListServiceQuotasCommand";
import {
  ListServicesCommandInput,
  ListServicesCommandOutput
} from "../commands/ListServicesCommand";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
} from "../commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput
} from "../commands/RequestServiceQuotaIncreaseCommand";
import {
  AWSServiceAccessNotEnabledException,
  AccessDeniedException,
  AssociateServiceQuotaTemplateRequest,
  AssociateServiceQuotaTemplateResponse,
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
  DependencyAccessDeniedException,
  DisassociateServiceQuotaTemplateRequest,
  DisassociateServiceQuotaTemplateResponse,
  ErrorReason,
  GetAWSDefaultServiceQuotaRequest,
  GetAWSDefaultServiceQuotaResponse,
  GetAssociationForServiceQuotaTemplateRequest,
  GetAssociationForServiceQuotaTemplateResponse,
  GetRequestedServiceQuotaChangeRequest,
  GetRequestedServiceQuotaChangeResponse,
  GetServiceQuotaIncreaseRequestFromTemplateRequest,
  GetServiceQuotaIncreaseRequestFromTemplateResponse,
  GetServiceQuotaRequest,
  GetServiceQuotaResponse,
  IllegalArgumentException,
  InvalidPaginationTokenException,
  InvalidResourceStateException,
  ListAWSDefaultServiceQuotasRequest,
  ListAWSDefaultServiceQuotasResponse,
  ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
  ListRequestedServiceQuotaChangeHistoryRequest,
  ListRequestedServiceQuotaChangeHistoryResponse,
  ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ListServiceQuotaIncreaseRequestsInTemplateResponse,
  ListServiceQuotasRequest,
  ListServiceQuotasResponse,
  ListServicesRequest,
  ListServicesResponse,
  MetricInfo,
  NoAvailableOrganizationException,
  NoSuchResourceException,
  OrganizationNotInAllFeaturesModeException,
  PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse,
  QuotaExceededException,
  QuotaPeriod,
  RequestServiceQuotaIncreaseRequest,
  RequestServiceQuotaIncreaseResponse,
  RequestedServiceQuotaChange,
  ResourceAlreadyExistsException,
  ServiceException,
  ServiceInfo,
  ServiceQuota,
  ServiceQuotaIncreaseRequestInTemplate,
  ServiceQuotaTemplateNotInUseException,
  TemplatesNotAvailableInRegionException,
  TooManyRequestsException
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

export async function serializeAws_json1_1AssociateServiceQuotaTemplateCommand(
  input: AssociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.AssociateServiceQuotaTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateServiceQuotaTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(
  input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateServiceQuotaTemplateCommand(
  input: DisassociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateServiceQuotaTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAWSDefaultServiceQuotaCommand(
  input: GetAWSDefaultServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAWSDefaultServiceQuotaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(
  input: GetAssociationForServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRequestedServiceQuotaChangeCommand(
  input: GetRequestedServiceQuotaChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.GetRequestedServiceQuotaChange";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRequestedServiceQuotaChangeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetServiceQuotaCommand(
  input: GetServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ServiceQuotasV20190624.GetServiceQuota";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetServiceQuotaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand(
  input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAWSDefaultServiceQuotasCommand(
  input: ListAWSDefaultServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAWSDefaultServiceQuotasRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListServiceQuotasCommand(
  input: ListServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ServiceQuotasV20190624.ListServiceQuotas";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServiceQuotasRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListServicesCommand(
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "ServiceQuotasV20190624.ListServices";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(
  input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RequestServiceQuotaIncreaseCommand(
  input: RequestServiceQuotaIncreaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "ServiceQuotasV20190624.RequestServiceQuotaIncrease";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RequestServiceQuotaIncreaseRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateServiceQuotaTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateServiceQuotaTemplateResponse(
    data,
    context
  );
  const response: AssociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateServiceQuotaTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.servicequotas#OrganizationNotInAllFeaturesModeException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse(
    data,
    context
  );
  const response: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse(
    data,
    context
  );
  const response: DisassociateServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateServiceQuotaTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaTemplateNotInUseException":
    case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse(
    data,
    context
  );
  const response: GetAWSDefaultServiceQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAWSDefaultServiceQuotaResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse(
    data,
    context
  );
  const response: GetAssociationForServiceQuotaTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAssociationForServiceQuotaTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaTemplateNotInUseException":
    case "com.amazonaws.servicequotas#ServiceQuotaTemplateNotInUseException":
      response = {
        ...(await deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse(
    data,
    context
  );
  const response: GetRequestedServiceQuotaChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRequestedServiceQuotaChangeResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1GetServiceQuotaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetServiceQuotaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceQuotaResponse(data, context);
  const response: GetServiceQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceQuotaResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetServiceQuotaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse(
    data,
    context
  );
  const response: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceQuotaIncreaseRequestFromTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse(
    data,
    context
  );
  const response: ListAWSDefaultServiceQuotasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAWSDefaultServiceQuotasResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse(
    data,
    context
  );
  const response: ListRequestedServiceQuotaChangeHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRequestedServiceQuotaChangeHistoryResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse(
    data,
    context
  );
  const response: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse(
    data,
    context
  );
  const response: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServiceQuotaIncreaseRequestsInTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListServiceQuotasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServiceQuotasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServiceQuotasResponse(data, context);
  const response: ListServiceQuotasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServiceQuotasResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServiceQuotasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1ListServicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListServicesResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListServicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.servicequotas#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse(
    data,
    context
  );
  const response: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutServiceQuotaIncreaseRequestIntoTemplateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> {
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
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAvailableOrganizationException":
    case "com.amazonaws.servicequotas#NoAvailableOrganizationException":
      response = {
        ...(await deserializeAws_json1_1NoAvailableOrganizationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "QuotaExceededException":
    case "com.amazonaws.servicequotas#QuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1QuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TemplatesNotAvailableInRegionException":
    case "com.amazonaws.servicequotas#TemplatesNotAvailableInRegionException":
      response = {
        ...(await deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_json1_1RequestServiceQuotaIncreaseCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RequestServiceQuotaIncreaseResponse(
    data,
    context
  );
  const response: RequestServiceQuotaIncreaseCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RequestServiceQuotaIncreaseResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DependencyAccessDeniedException":
    case "com.amazonaws.servicequotas#DependencyAccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1DependencyAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IllegalArgumentException":
    case "com.amazonaws.servicequotas#IllegalArgumentException":
      response = {
        ...(await deserializeAws_json1_1IllegalArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.servicequotas#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoSuchResourceException":
    case "com.amazonaws.servicequotas#NoSuchResourceException":
      response = {
        ...(await deserializeAws_json1_1NoSuchResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "QuotaExceededException":
    case "com.amazonaws.servicequotas#QuotaExceededException":
      response = {
        ...(await deserializeAws_json1_1QuotaExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.servicequotas#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.servicequotas#ServiceException":
      response = {
        ...(await deserializeAws_json1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.servicequotas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AWSServiceAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AWSServiceAccessNotEnabledException(
    body,
    context
  );
  const contents: AWSServiceAccessNotEnabledException = {
    name: "AWSServiceAccessNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DependencyAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyAccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DependencyAccessDeniedException(
    body,
    context
  );
  const contents: DependencyAccessDeniedException = {
    name: "DependencyAccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IllegalArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IllegalArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IllegalArgumentException(
    body,
    context
  );
  const contents: IllegalArgumentException = {
    name: "IllegalArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(
    body,
    context
  );
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceStateException(
    body,
    context
  );
  const contents: InvalidResourceStateException = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NoAvailableOrganizationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAvailableOrganizationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAvailableOrganizationException(
    body,
    context
  );
  const contents: NoAvailableOrganizationException = {
    name: "NoAvailableOrganizationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NoSuchResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoSuchResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoSuchResourceException(
    body,
    context
  );
  const contents: NoSuchResourceException = {
    name: "NoSuchResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(
    body,
    context
  );
  const contents: OrganizationNotInAllFeaturesModeException = {
    name: "OrganizationNotInAllFeaturesModeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1QuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<QuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1QuotaExceededException(
    body,
    context
  );
  const contents: QuotaExceededException = {
    name: "QuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceException(
    body,
    context
  );
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceQuotaTemplateNotInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaTemplateNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceQuotaTemplateNotInUseException(
    body,
    context
  );
  const contents: ServiceQuotaTemplateNotInUseException = {
    name: "ServiceQuotaTemplateNotInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TemplatesNotAvailableInRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemplatesNotAvailableInRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TemplatesNotAvailableInRegionException(
    body,
    context
  );
  const contents: TemplatesNotAvailableInRegionException = {
    name: "TemplatesNotAvailableInRegionException",
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

const serializeAws_json1_1AssociateServiceQuotaTemplateRequest = (
  input: AssociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsRegion !== undefined) {
    bodyParams["AwsRegion"] = input.AwsRegion;
  }
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateServiceQuotaTemplateRequest = (
  input: DisassociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetAWSDefaultServiceQuotaRequest = (
  input: GetAWSDefaultServiceQuotaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest = (
  input: GetAssociationForServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetRequestedServiceQuotaChangeRequest = (
  input: GetRequestedServiceQuotaChangeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RequestId !== undefined) {
    bodyParams["RequestId"] = input.RequestId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: GetServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsRegion !== undefined) {
    bodyParams["AwsRegion"] = input.AwsRegion;
  }
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1GetServiceQuotaRequest = (
  input: GetServiceQuotaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1ListAWSDefaultServiceQuotasRequest = (
  input: ListAWSDefaultServiceQuotasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest = (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest = (
  input: ListRequestedServiceQuotaChangeHistoryRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  if (input.Status !== undefined) {
    bodyParams["Status"] = input.Status;
  }
  return bodyParams;
};

const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest = (
  input: ListServiceQuotaIncreaseRequestsInTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsRegion !== undefined) {
    bodyParams["AwsRegion"] = input.AwsRegion;
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1ListServiceQuotasRequest = (
  input: ListServiceQuotasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1ListServicesRequest = (
  input: ListServicesRequest,
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

const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest = (
  input: PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AwsRegion !== undefined) {
    bodyParams["AwsRegion"] = input.AwsRegion;
  }
  if (input.DesiredValue !== undefined) {
    bodyParams["DesiredValue"] = input.DesiredValue;
  }
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const serializeAws_json1_1RequestServiceQuotaIncreaseRequest = (
  input: RequestServiceQuotaIncreaseRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DesiredValue !== undefined) {
    bodyParams["DesiredValue"] = input.DesiredValue;
  }
  if (input.QuotaCode !== undefined) {
    bodyParams["QuotaCode"] = input.QuotaCode;
  }
  if (input.ServiceCode !== undefined) {
    bodyParams["ServiceCode"] = input.ServiceCode;
  }
  return bodyParams;
};

const deserializeAws_json1_1AWSServiceAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): AWSServiceAccessNotEnabledException => {
  let contents: any = {
    __type: "AWSServiceAccessNotEnabledException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1AssociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): AssociateServiceQuotaTemplateResponse => {
  let contents: any = {
    __type: "AssociateServiceQuotaTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceQuotaIncreaseRequestFromTemplateResponse => {
  let contents: any = {
    __type: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1DependencyAccessDeniedException = (
  output: any,
  context: __SerdeContext
): DependencyAccessDeniedException => {
  let contents: any = {
    __type: "DependencyAccessDeniedException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): DisassociateServiceQuotaTemplateResponse => {
  let contents: any = {
    __type: "DisassociateServiceQuotaTemplateResponse"
  };
  return contents;
};

const deserializeAws_json1_1ErrorReason = (
  output: any,
  context: __SerdeContext
): ErrorReason => {
  let contents: any = {
    __type: "ErrorReason",
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

const deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetAWSDefaultServiceQuotaResponse => {
  let contents: any = {
    __type: "GetAWSDefaultServiceQuotaResponse",
    Quota: undefined
  };
  if (output.Quota !== undefined && output.Quota !== null) {
    contents.Quota = deserializeAws_json1_1ServiceQuota(output.Quota, context);
  }
  return contents;
};

const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetAssociationForServiceQuotaTemplateResponse => {
  let contents: any = {
    __type: "GetAssociationForServiceQuotaTemplateResponse",
    ServiceQuotaTemplateAssociationStatus: undefined
  };
  if (
    output.ServiceQuotaTemplateAssociationStatus !== undefined &&
    output.ServiceQuotaTemplateAssociationStatus !== null
  ) {
    contents.ServiceQuotaTemplateAssociationStatus =
      output.ServiceQuotaTemplateAssociationStatus;
  }
  return contents;
};

const deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse = (
  output: any,
  context: __SerdeContext
): GetRequestedServiceQuotaChangeResponse => {
  let contents: any = {
    __type: "GetRequestedServiceQuotaChangeResponse",
    RequestedQuota: undefined
  };
  if (output.RequestedQuota !== undefined && output.RequestedQuota !== null) {
    contents.RequestedQuota = deserializeAws_json1_1RequestedServiceQuotaChange(
      output.RequestedQuota,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaIncreaseRequestFromTemplateResponse => {
  let contents: any = {
    __type: "GetServiceQuotaIncreaseRequestFromTemplateResponse",
    ServiceQuotaIncreaseRequestInTemplate: undefined
  };
  if (
    output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
    output.ServiceQuotaIncreaseRequestInTemplate !== null
  ) {
    contents.ServiceQuotaIncreaseRequestInTemplate = deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(
      output.ServiceQuotaIncreaseRequestInTemplate,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaResponse => {
  let contents: any = {
    __type: "GetServiceQuotaResponse",
    Quota: undefined
  };
  if (output.Quota !== undefined && output.Quota !== null) {
    contents.Quota = deserializeAws_json1_1ServiceQuota(output.Quota, context);
  }
  return contents;
};

const deserializeAws_json1_1IllegalArgumentException = (
  output: any,
  context: __SerdeContext
): IllegalArgumentException => {
  let contents: any = {
    __type: "IllegalArgumentException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  let contents: any = {
    __type: "InvalidPaginationTokenException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  let contents: any = {
    __type: "InvalidResourceStateException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListAWSDefaultServiceQuotasResponse => {
  let contents: any = {
    __type: "ListAWSDefaultServiceQuotasResponse",
    NextToken: undefined,
    Quotas: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Quotas !== undefined && output.Quotas !== null) {
    contents.Quotas = deserializeAws_json1_1ServiceQuotaListDefinition(
      output.Quotas,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryByQuotaResponse => {
  let contents: any = {
    __type: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse",
    NextToken: undefined,
    RequestedQuotas: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.RequestedQuotas !== undefined && output.RequestedQuotas !== null) {
    contents.RequestedQuotas = deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(
      output.RequestedQuotas,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryResponse => {
  let contents: any = {
    __type: "ListRequestedServiceQuotaChangeHistoryResponse",
    NextToken: undefined,
    RequestedQuotas: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.RequestedQuotas !== undefined && output.RequestedQuotas !== null) {
    contents.RequestedQuotas = deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(
      output.RequestedQuotas,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotaIncreaseRequestsInTemplateResponse => {
  let contents: any = {
    __type: "ListServiceQuotaIncreaseRequestsInTemplateResponse",
    NextToken: undefined,
    ServiceQuotaIncreaseRequestInTemplateList: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (
    output.ServiceQuotaIncreaseRequestInTemplateList !== undefined &&
    output.ServiceQuotaIncreaseRequestInTemplateList !== null
  ) {
    contents.ServiceQuotaIncreaseRequestInTemplateList = deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList(
      output.ServiceQuotaIncreaseRequestInTemplateList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotasResponse => {
  let contents: any = {
    __type: "ListServiceQuotasResponse",
    NextToken: undefined,
    Quotas: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Quotas !== undefined && output.Quotas !== null) {
    contents.Quotas = deserializeAws_json1_1ServiceQuotaListDefinition(
      output.Quotas,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListServicesResponse = (
  output: any,
  context: __SerdeContext
): ListServicesResponse => {
  let contents: any = {
    __type: "ListServicesResponse",
    NextToken: undefined,
    Services: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Services !== undefined && output.Services !== null) {
    contents.Services = deserializeAws_json1_1ServiceInfoListDefinition(
      output.Services,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1MetricDimensionsMapDefinition = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1MetricInfo = (
  output: any,
  context: __SerdeContext
): MetricInfo => {
  let contents: any = {
    __type: "MetricInfo",
    MetricDimensions: undefined,
    MetricName: undefined,
    MetricNamespace: undefined,
    MetricStatisticRecommendation: undefined
  };
  if (
    output.MetricDimensions !== undefined &&
    output.MetricDimensions !== null
  ) {
    contents.MetricDimensions = deserializeAws_json1_1MetricDimensionsMapDefinition(
      output.MetricDimensions,
      context
    );
  }
  if (output.MetricName !== undefined && output.MetricName !== null) {
    contents.MetricName = output.MetricName;
  }
  if (output.MetricNamespace !== undefined && output.MetricNamespace !== null) {
    contents.MetricNamespace = output.MetricNamespace;
  }
  if (
    output.MetricStatisticRecommendation !== undefined &&
    output.MetricStatisticRecommendation !== null
  ) {
    contents.MetricStatisticRecommendation =
      output.MetricStatisticRecommendation;
  }
  return contents;
};

const deserializeAws_json1_1NoAvailableOrganizationException = (
  output: any,
  context: __SerdeContext
): NoAvailableOrganizationException => {
  let contents: any = {
    __type: "NoAvailableOrganizationException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NoSuchResourceException = (
  output: any,
  context: __SerdeContext
): NoSuchResourceException => {
  let contents: any = {
    __type: "NoSuchResourceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  let contents: any = {
    __type: "OrganizationNotInAllFeaturesModeException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse = (
  output: any,
  context: __SerdeContext
): PutServiceQuotaIncreaseRequestIntoTemplateResponse => {
  let contents: any = {
    __type: "PutServiceQuotaIncreaseRequestIntoTemplateResponse",
    ServiceQuotaIncreaseRequestInTemplate: undefined
  };
  if (
    output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
    output.ServiceQuotaIncreaseRequestInTemplate !== null
  ) {
    contents.ServiceQuotaIncreaseRequestInTemplate = deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(
      output.ServiceQuotaIncreaseRequestInTemplate,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1QuotaExceededException = (
  output: any,
  context: __SerdeContext
): QuotaExceededException => {
  let contents: any = {
    __type: "QuotaExceededException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1QuotaPeriod = (
  output: any,
  context: __SerdeContext
): QuotaPeriod => {
  let contents: any = {
    __type: "QuotaPeriod",
    PeriodUnit: undefined,
    PeriodValue: undefined
  };
  if (output.PeriodUnit !== undefined && output.PeriodUnit !== null) {
    contents.PeriodUnit = output.PeriodUnit;
  }
  if (output.PeriodValue !== undefined && output.PeriodValue !== null) {
    contents.PeriodValue = output.PeriodValue;
  }
  return contents;
};

const deserializeAws_json1_1RequestServiceQuotaIncreaseResponse = (
  output: any,
  context: __SerdeContext
): RequestServiceQuotaIncreaseResponse => {
  let contents: any = {
    __type: "RequestServiceQuotaIncreaseResponse",
    RequestedQuota: undefined
  };
  if (output.RequestedQuota !== undefined && output.RequestedQuota !== null) {
    contents.RequestedQuota = deserializeAws_json1_1RequestedServiceQuotaChange(
      output.RequestedQuota,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1RequestedServiceQuotaChange = (
  output: any,
  context: __SerdeContext
): RequestedServiceQuotaChange => {
  let contents: any = {
    __type: "RequestedServiceQuotaChange",
    CaseId: undefined,
    Created: undefined,
    DesiredValue: undefined,
    GlobalQuota: undefined,
    Id: undefined,
    LastUpdated: undefined,
    QuotaArn: undefined,
    QuotaCode: undefined,
    QuotaName: undefined,
    Requester: undefined,
    ServiceCode: undefined,
    ServiceName: undefined,
    Status: undefined,
    Unit: undefined
  };
  if (output.CaseId !== undefined && output.CaseId !== null) {
    contents.CaseId = output.CaseId;
  }
  if (output.Created !== undefined && output.Created !== null) {
    contents.Created = new Date(Math.round(output.Created * 1000));
  }
  if (output.DesiredValue !== undefined && output.DesiredValue !== null) {
    contents.DesiredValue = output.DesiredValue;
  }
  if (output.GlobalQuota !== undefined && output.GlobalQuota !== null) {
    contents.GlobalQuota = output.GlobalQuota;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.LastUpdated !== undefined && output.LastUpdated !== null) {
    contents.LastUpdated = new Date(Math.round(output.LastUpdated * 1000));
  }
  if (output.QuotaArn !== undefined && output.QuotaArn !== null) {
    contents.QuotaArn = output.QuotaArn;
  }
  if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
    contents.QuotaCode = output.QuotaCode;
  }
  if (output.QuotaName !== undefined && output.QuotaName !== null) {
    contents.QuotaName = output.QuotaName;
  }
  if (output.Requester !== undefined && output.Requester !== null) {
    contents.Requester = output.Requester;
  }
  if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
    contents.ServiceCode = output.ServiceCode;
  }
  if (output.ServiceName !== undefined && output.ServiceName !== null) {
    contents.ServiceName = output.ServiceName;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition = (
  output: any,
  context: __SerdeContext
): Array<RequestedServiceQuotaChange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RequestedServiceQuotaChange(entry, context)
  );
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceException = (
  output: any,
  context: __SerdeContext
): ServiceException => {
  let contents: any = {
    __type: "ServiceException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ServiceInfo = (
  output: any,
  context: __SerdeContext
): ServiceInfo => {
  let contents: any = {
    __type: "ServiceInfo",
    ServiceCode: undefined,
    ServiceName: undefined
  };
  if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
    contents.ServiceCode = output.ServiceCode;
  }
  if (output.ServiceName !== undefined && output.ServiceName !== null) {
    contents.ServiceName = output.ServiceName;
  }
  return contents;
};

const deserializeAws_json1_1ServiceInfoListDefinition = (
  output: any,
  context: __SerdeContext
): Array<ServiceInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceInfo(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuota = (
  output: any,
  context: __SerdeContext
): ServiceQuota => {
  let contents: any = {
    __type: "ServiceQuota",
    Adjustable: undefined,
    ErrorReason: undefined,
    GlobalQuota: undefined,
    Period: undefined,
    QuotaArn: undefined,
    QuotaCode: undefined,
    QuotaName: undefined,
    ServiceCode: undefined,
    ServiceName: undefined,
    Unit: undefined,
    UsageMetric: undefined,
    Value: undefined
  };
  if (output.Adjustable !== undefined && output.Adjustable !== null) {
    contents.Adjustable = output.Adjustable;
  }
  if (output.ErrorReason !== undefined && output.ErrorReason !== null) {
    contents.ErrorReason = deserializeAws_json1_1ErrorReason(
      output.ErrorReason,
      context
    );
  }
  if (output.GlobalQuota !== undefined && output.GlobalQuota !== null) {
    contents.GlobalQuota = output.GlobalQuota;
  }
  if (output.Period !== undefined && output.Period !== null) {
    contents.Period = deserializeAws_json1_1QuotaPeriod(output.Period, context);
  }
  if (output.QuotaArn !== undefined && output.QuotaArn !== null) {
    contents.QuotaArn = output.QuotaArn;
  }
  if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
    contents.QuotaCode = output.QuotaCode;
  }
  if (output.QuotaName !== undefined && output.QuotaName !== null) {
    contents.QuotaName = output.QuotaName;
  }
  if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
    contents.ServiceCode = output.ServiceCode;
  }
  if (output.ServiceName !== undefined && output.ServiceName !== null) {
    contents.ServiceName = output.ServiceName;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  if (output.UsageMetric !== undefined && output.UsageMetric !== null) {
    contents.UsageMetric = deserializeAws_json1_1MetricInfo(
      output.UsageMetric,
      context
    );
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate => {
  let contents: any = {
    __type: "ServiceQuotaIncreaseRequestInTemplate",
    AwsRegion: undefined,
    DesiredValue: undefined,
    GlobalQuota: undefined,
    QuotaCode: undefined,
    QuotaName: undefined,
    ServiceCode: undefined,
    ServiceName: undefined,
    Unit: undefined
  };
  if (output.AwsRegion !== undefined && output.AwsRegion !== null) {
    contents.AwsRegion = output.AwsRegion;
  }
  if (output.DesiredValue !== undefined && output.DesiredValue !== null) {
    contents.DesiredValue = output.DesiredValue;
  }
  if (output.GlobalQuota !== undefined && output.GlobalQuota !== null) {
    contents.GlobalQuota = output.GlobalQuota;
  }
  if (output.QuotaCode !== undefined && output.QuotaCode !== null) {
    contents.QuotaCode = output.QuotaCode;
  }
  if (output.QuotaName !== undefined && output.QuotaName !== null) {
    contents.QuotaName = output.QuotaName;
  }
  if (output.ServiceCode !== undefined && output.ServiceCode !== null) {
    contents.ServiceCode = output.ServiceCode;
  }
  if (output.ServiceName !== undefined && output.ServiceName !== null) {
    contents.ServiceName = output.ServiceName;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList = (
  output: any,
  context: __SerdeContext
): Array<ServiceQuotaIncreaseRequestInTemplate> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuotaListDefinition = (
  output: any,
  context: __SerdeContext
): Array<ServiceQuota> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceQuota(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuotaTemplateNotInUseException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaTemplateNotInUseException => {
  let contents: any = {
    __type: "ServiceQuotaTemplateNotInUseException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TemplatesNotAvailableInRegionException = (
  output: any,
  context: __SerdeContext
): TemplatesNotAvailableInRegionException => {
  let contents: any = {
    __type: "TemplatesNotAvailableInRegionException",
    Message: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
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
