import {
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput
} from "../commands/CheckDomainAvailabilityCommand";
import {
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput
} from "../commands/CheckDomainTransferabilityCommand";
import {
  DeleteTagsForDomainCommandInput,
  DeleteTagsForDomainCommandOutput
} from "../commands/DeleteTagsForDomainCommand";
import {
  DisableDomainAutoRenewCommandInput,
  DisableDomainAutoRenewCommandOutput
} from "../commands/DisableDomainAutoRenewCommand";
import {
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput
} from "../commands/DisableDomainTransferLockCommand";
import {
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput
} from "../commands/EnableDomainAutoRenewCommand";
import {
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput
} from "../commands/EnableDomainTransferLockCommand";
import {
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput
} from "../commands/GetContactReachabilityStatusCommand";
import {
  GetDomainDetailCommandInput,
  GetDomainDetailCommandOutput
} from "../commands/GetDomainDetailCommand";
import {
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput
} from "../commands/GetDomainSuggestionsCommand";
import {
  GetOperationDetailCommandInput,
  GetOperationDetailCommandOutput
} from "../commands/GetOperationDetailCommand";
import {
  ListDomainsCommandInput,
  ListDomainsCommandOutput
} from "../commands/ListDomainsCommand";
import {
  ListOperationsCommandInput,
  ListOperationsCommandOutput
} from "../commands/ListOperationsCommand";
import {
  ListTagsForDomainCommandInput,
  ListTagsForDomainCommandOutput
} from "../commands/ListTagsForDomainCommand";
import {
  RegisterDomainCommandInput,
  RegisterDomainCommandOutput
} from "../commands/RegisterDomainCommand";
import {
  RenewDomainCommandInput,
  RenewDomainCommandOutput
} from "../commands/RenewDomainCommand";
import {
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput
} from "../commands/ResendContactReachabilityEmailCommand";
import {
  RetrieveDomainAuthCodeCommandInput,
  RetrieveDomainAuthCodeCommandOutput
} from "../commands/RetrieveDomainAuthCodeCommand";
import {
  TransferDomainCommandInput,
  TransferDomainCommandOutput
} from "../commands/TransferDomainCommand";
import {
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput
} from "../commands/UpdateDomainContactCommand";
import {
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput
} from "../commands/UpdateDomainContactPrivacyCommand";
import {
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput
} from "../commands/UpdateDomainNameserversCommand";
import {
  UpdateTagsForDomainCommandInput,
  UpdateTagsForDomainCommandOutput
} from "../commands/UpdateTagsForDomainCommand";
import {
  ViewBillingCommandInput,
  ViewBillingCommandOutput
} from "../commands/ViewBillingCommand";
import {
  BillingRecord,
  CheckDomainAvailabilityRequest,
  CheckDomainAvailabilityResponse,
  CheckDomainTransferabilityRequest,
  CheckDomainTransferabilityResponse,
  ContactDetail,
  DeleteTagsForDomainRequest,
  DeleteTagsForDomainResponse,
  DisableDomainAutoRenewRequest,
  DisableDomainAutoRenewResponse,
  DisableDomainTransferLockRequest,
  DisableDomainTransferLockResponse,
  DomainLimitExceeded,
  DomainSuggestion,
  DomainSummary,
  DomainTransferability,
  DuplicateRequest,
  EnableDomainAutoRenewRequest,
  EnableDomainAutoRenewResponse,
  EnableDomainTransferLockRequest,
  EnableDomainTransferLockResponse,
  ExtraParam,
  GetContactReachabilityStatusRequest,
  GetContactReachabilityStatusResponse,
  GetDomainDetailRequest,
  GetDomainDetailResponse,
  GetDomainSuggestionsRequest,
  GetDomainSuggestionsResponse,
  GetOperationDetailRequest,
  GetOperationDetailResponse,
  InvalidInput,
  ListDomainsRequest,
  ListDomainsResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  ListTagsForDomainRequest,
  ListTagsForDomainResponse,
  Nameserver,
  OperationLimitExceeded,
  OperationSummary,
  RegisterDomainRequest,
  RegisterDomainResponse,
  RenewDomainRequest,
  RenewDomainResponse,
  ResendContactReachabilityEmailRequest,
  ResendContactReachabilityEmailResponse,
  RetrieveDomainAuthCodeRequest,
  RetrieveDomainAuthCodeResponse,
  TLDRulesViolation,
  Tag,
  TransferDomainRequest,
  TransferDomainResponse,
  UnsupportedTLD,
  UpdateDomainContactPrivacyRequest,
  UpdateDomainContactPrivacyResponse,
  UpdateDomainContactRequest,
  UpdateDomainContactResponse,
  UpdateDomainNameserversRequest,
  UpdateDomainNameserversResponse,
  UpdateTagsForDomainRequest,
  UpdateTagsForDomainResponse,
  ViewBillingRequest,
  ViewBillingResponse
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

export const serializeAws_json1_1CheckDomainAvailabilityCommand = async (
  input: CheckDomainAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.CheckDomainAvailability"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CheckDomainAvailabilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckDomainTransferabilityCommand = async (
  input: CheckDomainTransferabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.CheckDomainTransferability"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CheckDomainTransferabilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsForDomainCommand = async (
  input: DeleteTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.DeleteTagsForDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTagsForDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableDomainAutoRenewCommand = async (
  input: DisableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.DisableDomainAutoRenew"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableDomainAutoRenewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableDomainTransferLockCommand = async (
  input: DisableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.DisableDomainTransferLock"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableDomainTransferLockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableDomainAutoRenewCommand = async (
  input: EnableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.EnableDomainAutoRenew"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableDomainAutoRenewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableDomainTransferLockCommand = async (
  input: EnableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.EnableDomainTransferLock"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableDomainTransferLockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactReachabilityStatusCommand = async (
  input: GetContactReachabilityStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.GetContactReachabilityStatus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetContactReachabilityStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainDetailCommand = async (
  input: GetDomainDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.GetDomainDetail"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDomainDetailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainSuggestionsCommand = async (
  input: GetDomainSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.GetDomainSuggestions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDomainSuggestionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationDetailCommand = async (
  input: GetOperationDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.GetOperationDetail"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOperationDetailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.ListDomains"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.ListOperations"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOperationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForDomainCommand = async (
  input: ListTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.ListTagsForDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.RegisterDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RenewDomainCommand = async (
  input: RenewDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.RenewDomain"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RenewDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResendContactReachabilityEmailCommand = async (
  input: ResendContactReachabilityEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.ResendContactReachabilityEmail"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResendContactReachabilityEmailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetrieveDomainAuthCodeCommand = async (
  input: RetrieveDomainAuthCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.RetrieveDomainAuthCode"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetrieveDomainAuthCodeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TransferDomainCommand = async (
  input: TransferDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.TransferDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TransferDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainContactCommand = async (
  input: UpdateDomainContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.UpdateDomainContact"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDomainContactRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainContactPrivacyCommand = async (
  input: UpdateDomainContactPrivacyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.UpdateDomainContactPrivacy"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDomainContactPrivacyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainNameserversCommand = async (
  input: UpdateDomainNameserversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.UpdateDomainNameservers"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDomainNameserversRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTagsForDomainCommand = async (
  input: UpdateTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.UpdateTagsForDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateTagsForDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ViewBillingCommand = async (
  input: ViewBillingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "Route53Domains_v20140515.ViewBilling"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ViewBillingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CheckDomainAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CheckDomainAvailabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckDomainAvailabilityResponse(
    data,
    context
  );
  const response: CheckDomainAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CheckDomainAvailabilityResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckDomainAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1CheckDomainTransferabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CheckDomainTransferabilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckDomainTransferabilityResponse(
    data,
    context
  );
  const response: CheckDomainTransferabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CheckDomainTransferabilityResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckDomainTransferabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1DeleteTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTagsForDomainCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsForDomainResponse(data, context);
  const response: DeleteTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTagsForDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1DisableDomainAutoRenewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableDomainAutoRenewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableDomainAutoRenewResponse(
    data,
    context
  );
  const response: DisableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableDomainAutoRenewResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableDomainAutoRenewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1DisableDomainTransferLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableDomainTransferLockCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableDomainTransferLockResponse(
    data,
    context
  );
  const response: DisableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableDomainTransferLockResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableDomainTransferLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> => {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1EnableDomainAutoRenewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableDomainAutoRenewCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableDomainAutoRenewResponse(data, context);
  const response: EnableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableDomainAutoRenewResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableDomainAutoRenewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1EnableDomainTransferLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableDomainTransferLockCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableDomainTransferLockResponse(
    data,
    context
  );
  const response: EnableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableDomainTransferLockResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableDomainTransferLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> => {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1GetContactReachabilityStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetContactReachabilityStatusCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactReachabilityStatusResponse(
    data,
    context
  );
  const response: GetContactReachabilityStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetContactReachabilityStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactReachabilityStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1GetDomainDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDomainDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainDetailResponse(data, context);
  const response: GetDomainDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainDetailResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainDetailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1GetDomainSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDomainSuggestionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainSuggestionsResponse(data, context);
  const response: GetDomainSuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainSuggestionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainSuggestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1GetOperationDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOperationDetailCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationDetailResponse(data, context);
  const response: GetOperationDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOperationDetailResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationDetailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export const deserializeAws_json1_1ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export const deserializeAws_json1_1ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOperationsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export const deserializeAws_json1_1ListTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForDomainResponse(data, context);
  const response: ListTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1RegisterDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RegisterDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterDomainResponse(data, context);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
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
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains#DomainLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1DomainLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1RenewDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RenewDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RenewDomainResponse(data, context);
  const response: RenewDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RenewDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RenewDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> => {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1ResendContactReachabilityEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ResendContactReachabilityEmailCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResendContactReachabilityEmailResponse(
    data,
    context
  );
  const response: ResendContactReachabilityEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ResendContactReachabilityEmailResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResendContactReachabilityEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1RetrieveDomainAuthCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RetrieveDomainAuthCodeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetrieveDomainAuthCodeResponse(
    data,
    context
  );
  const response: RetrieveDomainAuthCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RetrieveDomainAuthCodeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetrieveDomainAuthCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1TransferDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TransferDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TransferDomainResponse(data, context);
  const response: TransferDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TransferDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TransferDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> => {
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
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains#DomainLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1DomainLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1UpdateDomainContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDomainContactCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainContactResponse(data, context);
  const response: UpdateDomainContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainContactResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> => {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1UpdateDomainContactPrivacyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDomainContactPrivacyCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainContactPrivacyResponse(
    data,
    context
  );
  const response: UpdateDomainContactPrivacyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainContactPrivacyResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainContactPrivacyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> => {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1UpdateDomainNameserversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDomainNameserversCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainNameserversResponse(
    data,
    context
  );
  const response: UpdateDomainNameserversCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDomainNameserversResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainNameserversCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> => {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1UpdateTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTagsForDomainCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTagsForDomainResponse(data, context);
  const response: UpdateTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTagsForDomainResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTagsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export const deserializeAws_json1_1ViewBillingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ViewBillingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ViewBillingResponse(data, context);
  const response: ViewBillingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ViewBillingResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ViewBillingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> => {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

const deserializeAws_json1_1DomainLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DomainLimitExceeded(
    body,
    context
  );
  const contents: DomainLimitExceeded = {
    name: "DomainLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRequest(
    body,
    context
  );
  const contents: DuplicateRequest = {
    name: "DuplicateRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInput(body, context);
  const contents: InvalidInput = {
    name: "InvalidInput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationLimitExceeded(
    body,
    context
  );
  const contents: OperationLimitExceeded = {
    name: "OperationLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TLDRulesViolationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TLDRulesViolation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TLDRulesViolation(
    body,
    context
  );
  const contents: TLDRulesViolation = {
    name: "TLDRulesViolation",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedTLDResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedTLD> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedTLD(body, context);
  const contents: UnsupportedTLD = {
    name: "UnsupportedTLD",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1CheckDomainAvailabilityRequest = (
  input: CheckDomainAvailabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.IdnLangCode !== undefined && { IdnLangCode: input.IdnLangCode })
  };
};

const serializeAws_json1_1CheckDomainTransferabilityRequest = (
  input: CheckDomainTransferabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthCode !== undefined && { AuthCode: input.AuthCode }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1ContactDetail = (
  input: ContactDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressLine1 !== undefined && {
      AddressLine1: input.AddressLine1
    }),
    ...(input.AddressLine2 !== undefined && {
      AddressLine2: input.AddressLine2
    }),
    ...(input.City !== undefined && { City: input.City }),
    ...(input.ContactType !== undefined && { ContactType: input.ContactType }),
    ...(input.CountryCode !== undefined && { CountryCode: input.CountryCode }),
    ...(input.Email !== undefined && { Email: input.Email }),
    ...(input.ExtraParams !== undefined && {
      ExtraParams: serializeAws_json1_1ExtraParamList(
        input.ExtraParams,
        context
      )
    }),
    ...(input.Fax !== undefined && { Fax: input.Fax }),
    ...(input.FirstName !== undefined && { FirstName: input.FirstName }),
    ...(input.LastName !== undefined && { LastName: input.LastName }),
    ...(input.OrganizationName !== undefined && {
      OrganizationName: input.OrganizationName
    }),
    ...(input.PhoneNumber !== undefined && { PhoneNumber: input.PhoneNumber }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.ZipCode !== undefined && { ZipCode: input.ZipCode })
  };
};

const serializeAws_json1_1DeleteTagsForDomainRequest = (
  input: DeleteTagsForDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.TagsToDelete !== undefined && {
      TagsToDelete: serializeAws_json1_1TagKeyList(input.TagsToDelete, context)
    })
  };
};

const serializeAws_json1_1DisableDomainAutoRenewRequest = (
  input: DisableDomainAutoRenewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1DisableDomainTransferLockRequest = (
  input: DisableDomainTransferLockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1EnableDomainAutoRenewRequest = (
  input: EnableDomainAutoRenewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1EnableDomainTransferLockRequest = (
  input: EnableDomainTransferLockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1ExtraParam = (
  input: ExtraParam,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1ExtraParamList = (
  input: ExtraParam[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ExtraParam(entry, context));
};

const serializeAws_json1_1GetContactReachabilityStatusRequest = (
  input: GetContactReachabilityStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName !== undefined && { domainName: input.domainName })
  };
};

const serializeAws_json1_1GetDomainDetailRequest = (
  input: GetDomainDetailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1GetDomainSuggestionsRequest = (
  input: GetDomainSuggestionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.OnlyAvailable !== undefined && {
      OnlyAvailable: input.OnlyAvailable
    }),
    ...(input.SuggestionCount !== undefined && {
      SuggestionCount: input.SuggestionCount
    })
  };
};

const serializeAws_json1_1GetOperationDetailRequest = (
  input: GetOperationDetailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperationId !== undefined && { OperationId: input.OperationId })
  };
};

const serializeAws_json1_1GlueIpList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ListDomainsRequest = (
  input: ListDomainsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems })
  };
};

const serializeAws_json1_1ListOperationsRequest = (
  input: ListOperationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems }),
    ...(input.SubmittedSince !== undefined && {
      SubmittedSince: Math.round(input.SubmittedSince.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1ListTagsForDomainRequest = (
  input: ListTagsForDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
  };
};

const serializeAws_json1_1Nameserver = (
  input: Nameserver,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlueIps !== undefined && {
      GlueIps: serializeAws_json1_1GlueIpList(input.GlueIps, context)
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1NameserverList = (
  input: Nameserver[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Nameserver(entry, context));
};

const serializeAws_json1_1RegisterDomainRequest = (
  input: RegisterDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminContact !== undefined && {
      AdminContact: serializeAws_json1_1ContactDetail(
        input.AdminContact,
        context
      )
    }),
    ...(input.AutoRenew !== undefined && { AutoRenew: input.AutoRenew }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.DurationInYears !== undefined && {
      DurationInYears: input.DurationInYears
    }),
    ...(input.IdnLangCode !== undefined && { IdnLangCode: input.IdnLangCode }),
    ...(input.PrivacyProtectAdminContact !== undefined && {
      PrivacyProtectAdminContact: input.PrivacyProtectAdminContact
    }),
    ...(input.PrivacyProtectRegistrantContact !== undefined && {
      PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact
    }),
    ...(input.PrivacyProtectTechContact !== undefined && {
      PrivacyProtectTechContact: input.PrivacyProtectTechContact
    }),
    ...(input.RegistrantContact !== undefined && {
      RegistrantContact: serializeAws_json1_1ContactDetail(
        input.RegistrantContact,
        context
      )
    }),
    ...(input.TechContact !== undefined && {
      TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context)
    })
  };
};

const serializeAws_json1_1RenewDomainRequest = (
  input: RenewDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CurrentExpiryYear !== undefined && {
      CurrentExpiryYear: input.CurrentExpiryYear
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.DurationInYears !== undefined && {
      DurationInYears: input.DurationInYears
    })
  };
};

const serializeAws_json1_1ResendContactReachabilityEmailRequest = (
  input: ResendContactReachabilityEmailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName !== undefined && { domainName: input.domainName })
  };
};

const serializeAws_json1_1RetrieveDomainAuthCodeRequest = (
  input: RetrieveDomainAuthCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName })
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

const serializeAws_json1_1TransferDomainRequest = (
  input: TransferDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminContact !== undefined && {
      AdminContact: serializeAws_json1_1ContactDetail(
        input.AdminContact,
        context
      )
    }),
    ...(input.AuthCode !== undefined && { AuthCode: input.AuthCode }),
    ...(input.AutoRenew !== undefined && { AutoRenew: input.AutoRenew }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.DurationInYears !== undefined && {
      DurationInYears: input.DurationInYears
    }),
    ...(input.IdnLangCode !== undefined && { IdnLangCode: input.IdnLangCode }),
    ...(input.Nameservers !== undefined && {
      Nameservers: serializeAws_json1_1NameserverList(
        input.Nameservers,
        context
      )
    }),
    ...(input.PrivacyProtectAdminContact !== undefined && {
      PrivacyProtectAdminContact: input.PrivacyProtectAdminContact
    }),
    ...(input.PrivacyProtectRegistrantContact !== undefined && {
      PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact
    }),
    ...(input.PrivacyProtectTechContact !== undefined && {
      PrivacyProtectTechContact: input.PrivacyProtectTechContact
    }),
    ...(input.RegistrantContact !== undefined && {
      RegistrantContact: serializeAws_json1_1ContactDetail(
        input.RegistrantContact,
        context
      )
    }),
    ...(input.TechContact !== undefined && {
      TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context)
    })
  };
};

const serializeAws_json1_1UpdateDomainContactPrivacyRequest = (
  input: UpdateDomainContactPrivacyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminPrivacy !== undefined && {
      AdminPrivacy: input.AdminPrivacy
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.RegistrantPrivacy !== undefined && {
      RegistrantPrivacy: input.RegistrantPrivacy
    }),
    ...(input.TechPrivacy !== undefined && { TechPrivacy: input.TechPrivacy })
  };
};

const serializeAws_json1_1UpdateDomainContactRequest = (
  input: UpdateDomainContactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminContact !== undefined && {
      AdminContact: serializeAws_json1_1ContactDetail(
        input.AdminContact,
        context
      )
    }),
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.RegistrantContact !== undefined && {
      RegistrantContact: serializeAws_json1_1ContactDetail(
        input.RegistrantContact,
        context
      )
    }),
    ...(input.TechContact !== undefined && {
      TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context)
    })
  };
};

const serializeAws_json1_1UpdateDomainNameserversRequest = (
  input: UpdateDomainNameserversRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.FIAuthKey !== undefined && { FIAuthKey: input.FIAuthKey }),
    ...(input.Nameservers !== undefined && {
      Nameservers: serializeAws_json1_1NameserverList(
        input.Nameservers,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateTagsForDomainRequest = (
  input: UpdateTagsForDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName !== undefined && { DomainName: input.DomainName }),
    ...(input.TagsToUpdate !== undefined && {
      TagsToUpdate: serializeAws_json1_1TagList(input.TagsToUpdate, context)
    })
  };
};

const serializeAws_json1_1ViewBillingRequest = (
  input: ViewBillingRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.End !== undefined && {
      End: Math.round(input.End.getTime() / 1000)
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems }),
    ...(input.Start !== undefined && {
      Start: Math.round(input.Start.getTime() / 1000)
    })
  };
};

const deserializeAws_json1_1BillingRecord = (
  output: any,
  context: __SerdeContext
): BillingRecord => {
  return {
    __type: "BillingRecord",
    BillDate:
      output.BillDate !== undefined && output.BillDate !== null
        ? new Date(Math.round(output.BillDate * 1000))
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    InvoiceId:
      output.InvoiceId !== undefined && output.InvoiceId !== null
        ? output.InvoiceId
        : undefined,
    Operation:
      output.Operation !== undefined && output.Operation !== null
        ? output.Operation
        : undefined,
    Price:
      output.Price !== undefined && output.Price !== null
        ? output.Price
        : undefined
  } as any;
};

const deserializeAws_json1_1BillingRecords = (
  output: any,
  context: __SerdeContext
): BillingRecord[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BillingRecord(entry, context)
  );
};

const deserializeAws_json1_1CheckDomainAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainAvailabilityResponse => {
  return {
    __type: "CheckDomainAvailabilityResponse",
    Availability:
      output.Availability !== undefined && output.Availability !== null
        ? output.Availability
        : undefined
  } as any;
};

const deserializeAws_json1_1CheckDomainTransferabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainTransferabilityResponse => {
  return {
    __type: "CheckDomainTransferabilityResponse",
    Transferability:
      output.Transferability !== undefined && output.Transferability !== null
        ? deserializeAws_json1_1DomainTransferability(
            output.Transferability,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ContactDetail = (
  output: any,
  context: __SerdeContext
): ContactDetail => {
  return {
    __type: "ContactDetail",
    AddressLine1:
      output.AddressLine1 !== undefined && output.AddressLine1 !== null
        ? output.AddressLine1
        : undefined,
    AddressLine2:
      output.AddressLine2 !== undefined && output.AddressLine2 !== null
        ? output.AddressLine2
        : undefined,
    City:
      output.City !== undefined && output.City !== null
        ? output.City
        : undefined,
    ContactType:
      output.ContactType !== undefined && output.ContactType !== null
        ? output.ContactType
        : undefined,
    CountryCode:
      output.CountryCode !== undefined && output.CountryCode !== null
        ? output.CountryCode
        : undefined,
    Email:
      output.Email !== undefined && output.Email !== null
        ? output.Email
        : undefined,
    ExtraParams:
      output.ExtraParams !== undefined && output.ExtraParams !== null
        ? deserializeAws_json1_1ExtraParamList(output.ExtraParams, context)
        : undefined,
    Fax:
      output.Fax !== undefined && output.Fax !== null ? output.Fax : undefined,
    FirstName:
      output.FirstName !== undefined && output.FirstName !== null
        ? output.FirstName
        : undefined,
    LastName:
      output.LastName !== undefined && output.LastName !== null
        ? output.LastName
        : undefined,
    OrganizationName:
      output.OrganizationName !== undefined && output.OrganizationName !== null
        ? output.OrganizationName
        : undefined,
    PhoneNumber:
      output.PhoneNumber !== undefined && output.PhoneNumber !== null
        ? output.PhoneNumber
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    ZipCode:
      output.ZipCode !== undefined && output.ZipCode !== null
        ? output.ZipCode
        : undefined
  } as any;
};

const deserializeAws_json1_1DeleteTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): DeleteTagsForDomainResponse => {
  return {
    __type: "DeleteTagsForDomainResponse"
  } as any;
};

const deserializeAws_json1_1DisableDomainAutoRenewResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainAutoRenewResponse => {
  return {
    __type: "DisableDomainAutoRenewResponse"
  } as any;
};

const deserializeAws_json1_1DisableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainTransferLockResponse => {
  return {
    __type: "DisableDomainTransferLockResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1DomainLimitExceeded = (
  output: any,
  context: __SerdeContext
): DomainLimitExceeded => {
  return {
    __type: "DomainLimitExceeded",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1DomainStatusList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DomainSuggestion = (
  output: any,
  context: __SerdeContext
): DomainSuggestion => {
  return {
    __type: "DomainSuggestion",
    Availability:
      output.Availability !== undefined && output.Availability !== null
        ? output.Availability
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined
  } as any;
};

const deserializeAws_json1_1DomainSuggestionsList = (
  output: any,
  context: __SerdeContext
): DomainSuggestion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainSuggestion(entry, context)
  );
};

const deserializeAws_json1_1DomainSummary = (
  output: any,
  context: __SerdeContext
): DomainSummary => {
  return {
    __type: "DomainSummary",
    AutoRenew:
      output.AutoRenew !== undefined && output.AutoRenew !== null
        ? output.AutoRenew
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    Expiry:
      output.Expiry !== undefined && output.Expiry !== null
        ? new Date(Math.round(output.Expiry * 1000))
        : undefined,
    TransferLock:
      output.TransferLock !== undefined && output.TransferLock !== null
        ? output.TransferLock
        : undefined
  } as any;
};

const deserializeAws_json1_1DomainSummaryList = (
  output: any,
  context: __SerdeContext
): DomainSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainSummary(entry, context)
  );
};

const deserializeAws_json1_1DomainTransferability = (
  output: any,
  context: __SerdeContext
): DomainTransferability => {
  return {
    __type: "DomainTransferability",
    Transferable:
      output.Transferable !== undefined && output.Transferable !== null
        ? output.Transferable
        : undefined
  } as any;
};

const deserializeAws_json1_1DuplicateRequest = (
  output: any,
  context: __SerdeContext
): DuplicateRequest => {
  return {
    __type: "DuplicateRequest",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1EnableDomainAutoRenewResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainAutoRenewResponse => {
  return {
    __type: "EnableDomainAutoRenewResponse"
  } as any;
};

const deserializeAws_json1_1EnableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainTransferLockResponse => {
  return {
    __type: "EnableDomainTransferLockResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1ExtraParam = (
  output: any,
  context: __SerdeContext
): ExtraParam => {
  return {
    __type: "ExtraParam",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1ExtraParamList = (
  output: any,
  context: __SerdeContext
): ExtraParam[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExtraParam(entry, context)
  );
};

const deserializeAws_json1_1GetContactReachabilityStatusResponse = (
  output: any,
  context: __SerdeContext
): GetContactReachabilityStatusResponse => {
  return {
    __type: "GetContactReachabilityStatusResponse",
    domainName:
      output.domainName !== undefined && output.domainName !== null
        ? output.domainName
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDomainDetailResponse = (
  output: any,
  context: __SerdeContext
): GetDomainDetailResponse => {
  return {
    __type: "GetDomainDetailResponse",
    AbuseContactEmail:
      output.AbuseContactEmail !== undefined &&
      output.AbuseContactEmail !== null
        ? output.AbuseContactEmail
        : undefined,
    AbuseContactPhone:
      output.AbuseContactPhone !== undefined &&
      output.AbuseContactPhone !== null
        ? output.AbuseContactPhone
        : undefined,
    AdminContact:
      output.AdminContact !== undefined && output.AdminContact !== null
        ? deserializeAws_json1_1ContactDetail(output.AdminContact, context)
        : undefined,
    AdminPrivacy:
      output.AdminPrivacy !== undefined && output.AdminPrivacy !== null
        ? output.AdminPrivacy
        : undefined,
    AutoRenew:
      output.AutoRenew !== undefined && output.AutoRenew !== null
        ? output.AutoRenew
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    DnsSec:
      output.DnsSec !== undefined && output.DnsSec !== null
        ? output.DnsSec
        : undefined,
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? new Date(Math.round(output.ExpirationDate * 1000))
        : undefined,
    Nameservers:
      output.Nameservers !== undefined && output.Nameservers !== null
        ? deserializeAws_json1_1NameserverList(output.Nameservers, context)
        : undefined,
    RegistrantContact:
      output.RegistrantContact !== undefined &&
      output.RegistrantContact !== null
        ? deserializeAws_json1_1ContactDetail(output.RegistrantContact, context)
        : undefined,
    RegistrantPrivacy:
      output.RegistrantPrivacy !== undefined &&
      output.RegistrantPrivacy !== null
        ? output.RegistrantPrivacy
        : undefined,
    RegistrarName:
      output.RegistrarName !== undefined && output.RegistrarName !== null
        ? output.RegistrarName
        : undefined,
    RegistrarUrl:
      output.RegistrarUrl !== undefined && output.RegistrarUrl !== null
        ? output.RegistrarUrl
        : undefined,
    RegistryDomainId:
      output.RegistryDomainId !== undefined && output.RegistryDomainId !== null
        ? output.RegistryDomainId
        : undefined,
    Reseller:
      output.Reseller !== undefined && output.Reseller !== null
        ? output.Reseller
        : undefined,
    StatusList:
      output.StatusList !== undefined && output.StatusList !== null
        ? deserializeAws_json1_1DomainStatusList(output.StatusList, context)
        : undefined,
    TechContact:
      output.TechContact !== undefined && output.TechContact !== null
        ? deserializeAws_json1_1ContactDetail(output.TechContact, context)
        : undefined,
    TechPrivacy:
      output.TechPrivacy !== undefined && output.TechPrivacy !== null
        ? output.TechPrivacy
        : undefined,
    UpdatedDate:
      output.UpdatedDate !== undefined && output.UpdatedDate !== null
        ? new Date(Math.round(output.UpdatedDate * 1000))
        : undefined,
    WhoIsServer:
      output.WhoIsServer !== undefined && output.WhoIsServer !== null
        ? output.WhoIsServer
        : undefined
  } as any;
};

const deserializeAws_json1_1GetDomainSuggestionsResponse = (
  output: any,
  context: __SerdeContext
): GetDomainSuggestionsResponse => {
  return {
    __type: "GetDomainSuggestionsResponse",
    SuggestionsList:
      output.SuggestionsList !== undefined && output.SuggestionsList !== null
        ? deserializeAws_json1_1DomainSuggestionsList(
            output.SuggestionsList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1GetOperationDetailResponse = (
  output: any,
  context: __SerdeContext
): GetOperationDetailResponse => {
  return {
    __type: "GetOperationDetailResponse",
    DomainName:
      output.DomainName !== undefined && output.DomainName !== null
        ? output.DomainName
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    SubmittedDate:
      output.SubmittedDate !== undefined && output.SubmittedDate !== null
        ? new Date(Math.round(output.SubmittedDate * 1000))
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1GlueIpList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InvalidInput = (
  output: any,
  context: __SerdeContext
): InvalidInput => {
  return {
    __type: "InvalidInput",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDomainsResponse = (
  output: any,
  context: __SerdeContext
): ListDomainsResponse => {
  return {
    __type: "ListDomainsResponse",
    Domains:
      output.Domains !== undefined && output.Domains !== null
        ? deserializeAws_json1_1DomainSummaryList(output.Domains, context)
        : undefined,
    NextPageMarker:
      output.NextPageMarker !== undefined && output.NextPageMarker !== null
        ? output.NextPageMarker
        : undefined
  } as any;
};

const deserializeAws_json1_1ListOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListOperationsResponse => {
  return {
    __type: "ListOperationsResponse",
    NextPageMarker:
      output.NextPageMarker !== undefined && output.NextPageMarker !== null
        ? output.NextPageMarker
        : undefined,
    Operations:
      output.Operations !== undefined && output.Operations !== null
        ? deserializeAws_json1_1OperationSummaryList(output.Operations, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForDomainResponse => {
  return {
    __type: "ListTagsForDomainResponse",
    TagList:
      output.TagList !== undefined && output.TagList !== null
        ? deserializeAws_json1_1TagList(output.TagList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Nameserver = (
  output: any,
  context: __SerdeContext
): Nameserver => {
  return {
    __type: "Nameserver",
    GlueIps:
      output.GlueIps !== undefined && output.GlueIps !== null
        ? deserializeAws_json1_1GlueIpList(output.GlueIps, context)
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1NameserverList = (
  output: any,
  context: __SerdeContext
): Nameserver[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Nameserver(entry, context)
  );
};

const deserializeAws_json1_1OperationLimitExceeded = (
  output: any,
  context: __SerdeContext
): OperationLimitExceeded => {
  return {
    __type: "OperationLimitExceeded",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1OperationSummary = (
  output: any,
  context: __SerdeContext
): OperationSummary => {
  return {
    __type: "OperationSummary",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    SubmittedDate:
      output.SubmittedDate !== undefined && output.SubmittedDate !== null
        ? new Date(Math.round(output.SubmittedDate * 1000))
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1OperationSummaryList = (
  output: any,
  context: __SerdeContext
): OperationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OperationSummary(entry, context)
  );
};

const deserializeAws_json1_1RegisterDomainResponse = (
  output: any,
  context: __SerdeContext
): RegisterDomainResponse => {
  return {
    __type: "RegisterDomainResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1RenewDomainResponse = (
  output: any,
  context: __SerdeContext
): RenewDomainResponse => {
  return {
    __type: "RenewDomainResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1ResendContactReachabilityEmailResponse = (
  output: any,
  context: __SerdeContext
): ResendContactReachabilityEmailResponse => {
  return {
    __type: "ResendContactReachabilityEmailResponse",
    domainName:
      output.domainName !== undefined && output.domainName !== null
        ? output.domainName
        : undefined,
    emailAddress:
      output.emailAddress !== undefined && output.emailAddress !== null
        ? output.emailAddress
        : undefined,
    isAlreadyVerified:
      output.isAlreadyVerified !== undefined &&
      output.isAlreadyVerified !== null
        ? output.isAlreadyVerified
        : undefined
  } as any;
};

const deserializeAws_json1_1RetrieveDomainAuthCodeResponse = (
  output: any,
  context: __SerdeContext
): RetrieveDomainAuthCodeResponse => {
  return {
    __type: "RetrieveDomainAuthCodeResponse",
    AuthCode:
      output.AuthCode !== undefined && output.AuthCode !== null
        ? output.AuthCode
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

const deserializeAws_json1_1TLDRulesViolation = (
  output: any,
  context: __SerdeContext
): TLDRulesViolation => {
  return {
    __type: "TLDRulesViolation",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TransferDomainResponse = (
  output: any,
  context: __SerdeContext
): TransferDomainResponse => {
  return {
    __type: "TransferDomainResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1UnsupportedTLD = (
  output: any,
  context: __SerdeContext
): UnsupportedTLD => {
  return {
    __type: "UnsupportedTLD",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateDomainContactPrivacyResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactPrivacyResponse => {
  return {
    __type: "UpdateDomainContactPrivacyResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateDomainContactResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactResponse => {
  return {
    __type: "UpdateDomainContactResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateDomainNameserversResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainNameserversResponse => {
  return {
    __type: "UpdateDomainNameserversResponse",
    OperationId:
      output.OperationId !== undefined && output.OperationId !== null
        ? output.OperationId
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): UpdateTagsForDomainResponse => {
  return {
    __type: "UpdateTagsForDomainResponse"
  } as any;
};

const deserializeAws_json1_1ViewBillingResponse = (
  output: any,
  context: __SerdeContext
): ViewBillingResponse => {
  return {
    __type: "ViewBillingResponse",
    BillingRecords:
      output.BillingRecords !== undefined && output.BillingRecords !== null
        ? deserializeAws_json1_1BillingRecords(output.BillingRecords, context)
        : undefined,
    NextPageMarker:
      output.NextPageMarker !== undefined && output.NextPageMarker !== null
        ? output.NextPageMarker
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
