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

export const serializeAws_json1_1AssociateServiceQuotaTemplateCommand = async (
  input: AssociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.AssociateServiceQuotaTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateServiceQuotaTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateServiceQuotaTemplateCommand = async (
  input: DisassociateServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.DisassociateServiceQuotaTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateServiceQuotaTemplateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = async (
  input: GetAssociationForServiceQuotaTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAWSDefaultServiceQuotaCommand = async (
  input: GetAWSDefaultServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAWSDefaultServiceQuotaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRequestedServiceQuotaChangeCommand = async (
  input: GetRequestedServiceQuotaChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRequestedServiceQuotaChangeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceQuotaCommand = async (
  input: GetServiceQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.GetServiceQuota"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetServiceQuotaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  input: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAWSDefaultServiceQuotasCommand = async (
  input: ListAWSDefaultServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListAWSDefaultServiceQuotasRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServiceQuotasCommand = async (
  input: ListServiceQuotasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.ListServiceQuotas"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServiceQuotasRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.ListServices"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListServicesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target":
      "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest(
      input,
      context
    )
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RequestServiceQuotaIncreaseCommand = async (
  input: RequestServiceQuotaIncreaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "ServiceQuotasV20190624.RequestServiceQuotaIncrease"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RequestServiceQuotaIncreaseRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1AssociateServiceQuotaTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceQuotaTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1DisassociateServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1DisassociateServiceQuotaTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceQuotaTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetAWSDefaultServiceQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> => {
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
};

const deserializeAws_json1_1GetAWSDefaultServiceQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAWSDefaultServiceQuotaCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetRequestedServiceQuotaChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> => {
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
};

const deserializeAws_json1_1GetRequestedServiceQuotaChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRequestedServiceQuotaChangeCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetServiceQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> => {
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
};

const deserializeAws_json1_1GetServiceQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListAWSDefaultServiceQuotasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
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
};

const deserializeAws_json1_1ListAWSDefaultServiceQuotasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAWSDefaultServiceQuotasCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
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
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
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
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListServiceQuotasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> => {
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
};

const deserializeAws_json1_1ListServiceQuotasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceQuotasCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
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
};

const deserializeAws_json1_1ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> => {
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
};

const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "AWSServiceAccessNotEnabledException":
    case "com.amazonaws.servicequotas#AWSServiceAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1AWSServiceAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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

export const deserializeAws_json1_1RequestServiceQuotaIncreaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> => {
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
};

const deserializeAws_json1_1RequestServiceQuotaIncreaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestServiceQuotaIncreaseCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.servicequotas#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
        name: errorCode,
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
  return {};
};

const serializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion !== undefined && { AwsRegion: input.AwsRegion }),
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1DisassociateServiceQuotaTemplateRequest = (
  input: DisassociateServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAssociationForServiceQuotaTemplateRequest = (
  input: GetAssociationForServiceQuotaTemplateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetAWSDefaultServiceQuotaRequest = (
  input: GetAWSDefaultServiceQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1GetRequestedServiceQuotaChangeRequest = (
  input: GetRequestedServiceQuotaChangeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RequestId !== undefined && { RequestId: input.RequestId })
  };
};

const serializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateRequest = (
  input: GetServiceQuotaIncreaseRequestFromTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion !== undefined && { AwsRegion: input.AwsRegion }),
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1GetServiceQuotaRequest = (
  input: GetServiceQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1ListAWSDefaultServiceQuotasRequest = (
  input: ListAWSDefaultServiceQuotasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaRequest = (
  input: ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode }),
    ...(input.Status !== undefined && { Status: input.Status })
  };
};

const serializeAws_json1_1ListRequestedServiceQuotaChangeHistoryRequest = (
  input: ListRequestedServiceQuotaChangeHistoryRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode }),
    ...(input.Status !== undefined && { Status: input.Status })
  };
};

const serializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateRequest = (
  input: ListServiceQuotaIncreaseRequestsInTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion !== undefined && { AwsRegion: input.AwsRegion }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1ListServiceQuotasRequest = (
  input: ListServiceQuotasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1ListServicesRequest = (
  input: ListServicesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateRequest = (
  input: PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsRegion !== undefined && { AwsRegion: input.AwsRegion }),
    ...(input.DesiredValue !== undefined && {
      DesiredValue: input.DesiredValue
    }),
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const serializeAws_json1_1RequestServiceQuotaIncreaseRequest = (
  input: RequestServiceQuotaIncreaseRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DesiredValue !== undefined && {
      DesiredValue: input.DesiredValue
    }),
    ...(input.QuotaCode !== undefined && { QuotaCode: input.QuotaCode }),
    ...(input.ServiceCode !== undefined && { ServiceCode: input.ServiceCode })
  };
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1AssociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): AssociateServiceQuotaTemplateResponse => {
  return {
    __type: "AssociateServiceQuotaTemplateResponse"
  } as any;
};

const deserializeAws_json1_1AWSServiceAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): AWSServiceAccessNotEnabledException => {
  return {
    __type: "AWSServiceAccessNotEnabledException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): DeleteServiceQuotaIncreaseRequestFromTemplateResponse => {
  return {
    __type: "DeleteServiceQuotaIncreaseRequestFromTemplateResponse"
  } as any;
};

const deserializeAws_json1_1DependencyAccessDeniedException = (
  output: any,
  context: __SerdeContext
): DependencyAccessDeniedException => {
  return {
    __type: "DependencyAccessDeniedException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): DisassociateServiceQuotaTemplateResponse => {
  return {
    __type: "DisassociateServiceQuotaTemplateResponse"
  } as any;
};

const deserializeAws_json1_1ErrorReason = (
  output: any,
  context: __SerdeContext
): ErrorReason => {
  return {
    __type: "ErrorReason",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined
  } as any;
};

const deserializeAws_json1_1GetAssociationForServiceQuotaTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetAssociationForServiceQuotaTemplateResponse => {
  return {
    __type: "GetAssociationForServiceQuotaTemplateResponse",
    ServiceQuotaTemplateAssociationStatus:
      output.ServiceQuotaTemplateAssociationStatus !== undefined &&
      output.ServiceQuotaTemplateAssociationStatus !== null
        ? output.ServiceQuotaTemplateAssociationStatus
        : undefined
  } as any;
};

const deserializeAws_json1_1GetAWSDefaultServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetAWSDefaultServiceQuotaResponse => {
  return {
    __type: "GetAWSDefaultServiceQuotaResponse",
    Quota:
      output.Quota !== undefined && output.Quota !== null
        ? deserializeAws_json1_1ServiceQuota(output.Quota, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1GetRequestedServiceQuotaChangeResponse = (
  output: any,
  context: __SerdeContext
): GetRequestedServiceQuotaChangeResponse => {
  return {
    __type: "GetRequestedServiceQuotaChangeResponse",
    RequestedQuota:
      output.RequestedQuota !== undefined && output.RequestedQuota !== null
        ? deserializeAws_json1_1RequestedServiceQuotaChange(
            output.RequestedQuota,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetServiceQuotaIncreaseRequestFromTemplateResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaIncreaseRequestFromTemplateResponse => {
  return {
    __type: "GetServiceQuotaIncreaseRequestFromTemplateResponse",
    ServiceQuotaIncreaseRequestInTemplate:
      output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
      output.ServiceQuotaIncreaseRequestInTemplate !== null
        ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(
            output.ServiceQuotaIncreaseRequestInTemplate,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetServiceQuotaResponse = (
  output: any,
  context: __SerdeContext
): GetServiceQuotaResponse => {
  return {
    __type: "GetServiceQuotaResponse",
    Quota:
      output.Quota !== undefined && output.Quota !== null
        ? deserializeAws_json1_1ServiceQuota(output.Quota, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1IllegalArgumentException = (
  output: any,
  context: __SerdeContext
): IllegalArgumentException => {
  return {
    __type: "IllegalArgumentException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  return {
    __type: "InvalidPaginationTokenException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidResourceStateException = (
  output: any,
  context: __SerdeContext
): InvalidResourceStateException => {
  return {
    __type: "InvalidResourceStateException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAWSDefaultServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListAWSDefaultServiceQuotasResponse => {
  return {
    __type: "ListAWSDefaultServiceQuotasResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Quotas:
      output.Quotas !== undefined && output.Quotas !== null
        ? deserializeAws_json1_1ServiceQuotaListDefinition(
            output.Quotas,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryByQuotaResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryByQuotaResponse => {
  return {
    __type: "ListRequestedServiceQuotaChangeHistoryByQuotaResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    RequestedQuotas:
      output.RequestedQuotas !== undefined && output.RequestedQuotas !== null
        ? deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(
            output.RequestedQuotas,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRequestedServiceQuotaChangeHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListRequestedServiceQuotaChangeHistoryResponse => {
  return {
    __type: "ListRequestedServiceQuotaChangeHistoryResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    RequestedQuotas:
      output.RequestedQuotas !== undefined && output.RequestedQuotas !== null
        ? deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition(
            output.RequestedQuotas,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListServiceQuotaIncreaseRequestsInTemplateResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotaIncreaseRequestsInTemplateResponse => {
  return {
    __type: "ListServiceQuotaIncreaseRequestsInTemplateResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    ServiceQuotaIncreaseRequestInTemplateList:
      output.ServiceQuotaIncreaseRequestInTemplateList !== undefined &&
      output.ServiceQuotaIncreaseRequestInTemplateList !== null
        ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList(
            output.ServiceQuotaIncreaseRequestInTemplateList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListServiceQuotasResponse = (
  output: any,
  context: __SerdeContext
): ListServiceQuotasResponse => {
  return {
    __type: "ListServiceQuotasResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Quotas:
      output.Quotas !== undefined && output.Quotas !== null
        ? deserializeAws_json1_1ServiceQuotaListDefinition(
            output.Quotas,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListServicesResponse = (
  output: any,
  context: __SerdeContext
): ListServicesResponse => {
  return {
    __type: "ListServicesResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_json1_1ServiceInfoListDefinition(
            output.Services,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1MetricDimensionsMapDefinition = (
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

const deserializeAws_json1_1MetricInfo = (
  output: any,
  context: __SerdeContext
): MetricInfo => {
  return {
    __type: "MetricInfo",
    MetricDimensions:
      output.MetricDimensions !== undefined && output.MetricDimensions !== null
        ? deserializeAws_json1_1MetricDimensionsMapDefinition(
            output.MetricDimensions,
            context
          )
        : undefined,
    MetricName:
      output.MetricName !== undefined && output.MetricName !== null
        ? output.MetricName
        : undefined,
    MetricNamespace:
      output.MetricNamespace !== undefined && output.MetricNamespace !== null
        ? output.MetricNamespace
        : undefined,
    MetricStatisticRecommendation:
      output.MetricStatisticRecommendation !== undefined &&
      output.MetricStatisticRecommendation !== null
        ? output.MetricStatisticRecommendation
        : undefined
  } as any;
};

const deserializeAws_json1_1NoAvailableOrganizationException = (
  output: any,
  context: __SerdeContext
): NoAvailableOrganizationException => {
  return {
    __type: "NoAvailableOrganizationException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1NoSuchResourceException = (
  output: any,
  context: __SerdeContext
): NoSuchResourceException => {
  return {
    __type: "NoSuchResourceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  return {
    __type: "OrganizationNotInAllFeaturesModeException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1PutServiceQuotaIncreaseRequestIntoTemplateResponse = (
  output: any,
  context: __SerdeContext
): PutServiceQuotaIncreaseRequestIntoTemplateResponse => {
  return {
    __type: "PutServiceQuotaIncreaseRequestIntoTemplateResponse",
    ServiceQuotaIncreaseRequestInTemplate:
      output.ServiceQuotaIncreaseRequestInTemplate !== undefined &&
      output.ServiceQuotaIncreaseRequestInTemplate !== null
        ? deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(
            output.ServiceQuotaIncreaseRequestInTemplate,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1QuotaExceededException = (
  output: any,
  context: __SerdeContext
): QuotaExceededException => {
  return {
    __type: "QuotaExceededException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1QuotaPeriod = (
  output: any,
  context: __SerdeContext
): QuotaPeriod => {
  return {
    __type: "QuotaPeriod",
    PeriodUnit:
      output.PeriodUnit !== undefined && output.PeriodUnit !== null
        ? output.PeriodUnit
        : undefined,
    PeriodValue:
      output.PeriodValue !== undefined && output.PeriodValue !== null
        ? output.PeriodValue
        : undefined
  } as any;
};

const deserializeAws_json1_1RequestedServiceQuotaChange = (
  output: any,
  context: __SerdeContext
): RequestedServiceQuotaChange => {
  return {
    __type: "RequestedServiceQuotaChange",
    CaseId:
      output.CaseId !== undefined && output.CaseId !== null
        ? output.CaseId
        : undefined,
    Created:
      output.Created !== undefined && output.Created !== null
        ? new Date(Math.round(output.Created * 1000))
        : undefined,
    DesiredValue:
      output.DesiredValue !== undefined && output.DesiredValue !== null
        ? output.DesiredValue
        : undefined,
    GlobalQuota:
      output.GlobalQuota !== undefined && output.GlobalQuota !== null
        ? output.GlobalQuota
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? new Date(Math.round(output.LastUpdated * 1000))
        : undefined,
    QuotaArn:
      output.QuotaArn !== undefined && output.QuotaArn !== null
        ? output.QuotaArn
        : undefined,
    QuotaCode:
      output.QuotaCode !== undefined && output.QuotaCode !== null
        ? output.QuotaCode
        : undefined,
    QuotaName:
      output.QuotaName !== undefined && output.QuotaName !== null
        ? output.QuotaName
        : undefined,
    Requester:
      output.Requester !== undefined && output.Requester !== null
        ? output.Requester
        : undefined,
    ServiceCode:
      output.ServiceCode !== undefined && output.ServiceCode !== null
        ? output.ServiceCode
        : undefined,
    ServiceName:
      output.ServiceName !== undefined && output.ServiceName !== null
        ? output.ServiceName
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1RequestedServiceQuotaChangeHistoryListDefinition = (
  output: any,
  context: __SerdeContext
): RequestedServiceQuotaChange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RequestedServiceQuotaChange(entry, context)
  );
};

const deserializeAws_json1_1RequestServiceQuotaIncreaseResponse = (
  output: any,
  context: __SerdeContext
): RequestServiceQuotaIncreaseResponse => {
  return {
    __type: "RequestServiceQuotaIncreaseResponse",
    RequestedQuota:
      output.RequestedQuota !== undefined && output.RequestedQuota !== null
        ? deserializeAws_json1_1RequestedServiceQuotaChange(
            output.RequestedQuota,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceException = (
  output: any,
  context: __SerdeContext
): ServiceException => {
  return {
    __type: "ServiceException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceInfo = (
  output: any,
  context: __SerdeContext
): ServiceInfo => {
  return {
    __type: "ServiceInfo",
    ServiceCode:
      output.ServiceCode !== undefined && output.ServiceCode !== null
        ? output.ServiceCode
        : undefined,
    ServiceName:
      output.ServiceName !== undefined && output.ServiceName !== null
        ? output.ServiceName
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceInfoListDefinition = (
  output: any,
  context: __SerdeContext
): ServiceInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceInfo(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuota = (
  output: any,
  context: __SerdeContext
): ServiceQuota => {
  return {
    __type: "ServiceQuota",
    Adjustable:
      output.Adjustable !== undefined && output.Adjustable !== null
        ? output.Adjustable
        : undefined,
    ErrorReason:
      output.ErrorReason !== undefined && output.ErrorReason !== null
        ? deserializeAws_json1_1ErrorReason(output.ErrorReason, context)
        : undefined,
    GlobalQuota:
      output.GlobalQuota !== undefined && output.GlobalQuota !== null
        ? output.GlobalQuota
        : undefined,
    Period:
      output.Period !== undefined && output.Period !== null
        ? deserializeAws_json1_1QuotaPeriod(output.Period, context)
        : undefined,
    QuotaArn:
      output.QuotaArn !== undefined && output.QuotaArn !== null
        ? output.QuotaArn
        : undefined,
    QuotaCode:
      output.QuotaCode !== undefined && output.QuotaCode !== null
        ? output.QuotaCode
        : undefined,
    QuotaName:
      output.QuotaName !== undefined && output.QuotaName !== null
        ? output.QuotaName
        : undefined,
    ServiceCode:
      output.ServiceCode !== undefined && output.ServiceCode !== null
        ? output.ServiceCode
        : undefined,
    ServiceName:
      output.ServiceName !== undefined && output.ServiceName !== null
        ? output.ServiceName
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined,
    UsageMetric:
      output.UsageMetric !== undefined && output.UsageMetric !== null
        ? deserializeAws_json1_1MetricInfo(output.UsageMetric, context)
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate => {
  return {
    __type: "ServiceQuotaIncreaseRequestInTemplate",
    AwsRegion:
      output.AwsRegion !== undefined && output.AwsRegion !== null
        ? output.AwsRegion
        : undefined,
    DesiredValue:
      output.DesiredValue !== undefined && output.DesiredValue !== null
        ? output.DesiredValue
        : undefined,
    GlobalQuota:
      output.GlobalQuota !== undefined && output.GlobalQuota !== null
        ? output.GlobalQuota
        : undefined,
    QuotaCode:
      output.QuotaCode !== undefined && output.QuotaCode !== null
        ? output.QuotaCode
        : undefined,
    QuotaName:
      output.QuotaName !== undefined && output.QuotaName !== null
        ? output.QuotaName
        : undefined,
    ServiceCode:
      output.ServiceCode !== undefined && output.ServiceCode !== null
        ? output.ServiceCode
        : undefined,
    ServiceName:
      output.ServiceName !== undefined && output.ServiceName !== null
        ? output.ServiceName
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplateList = (
  output: any,
  context: __SerdeContext
): ServiceQuotaIncreaseRequestInTemplate[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceQuotaIncreaseRequestInTemplate(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuotaListDefinition = (
  output: any,
  context: __SerdeContext
): ServiceQuota[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ServiceQuota(entry, context)
  );
};

const deserializeAws_json1_1ServiceQuotaTemplateNotInUseException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaTemplateNotInUseException => {
  return {
    __type: "ServiceQuotaTemplateNotInUseException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1TemplatesNotAvailableInRegionException = (
  output: any,
  context: __SerdeContext
): TemplatesNotAvailableInRegionException => {
  return {
    __type: "TemplatesNotAvailableInRegionException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    __type: "TooManyRequestsException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
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
