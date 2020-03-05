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

export async function serializeAws_json1_1CheckDomainAvailabilityCommand(
  input: CheckDomainAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.CheckDomainAvailability";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CheckDomainAvailabilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CheckDomainTransferabilityCommand(
  input: CheckDomainTransferabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Domains_v20140515.CheckDomainTransferability";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CheckDomainTransferabilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTagsForDomainCommand(
  input: DeleteTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.DeleteTagsForDomain";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTagsForDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableDomainAutoRenewCommand(
  input: DisableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.DisableDomainAutoRenew";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableDomainAutoRenewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisableDomainTransferLockCommand(
  input: DisableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Domains_v20140515.DisableDomainTransferLock";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisableDomainTransferLockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableDomainAutoRenewCommand(
  input: EnableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.EnableDomainAutoRenew";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableDomainAutoRenewRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EnableDomainTransferLockCommand(
  input: EnableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.EnableDomainTransferLock";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EnableDomainTransferLockRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetContactReachabilityStatusCommand(
  input: GetContactReachabilityStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Domains_v20140515.GetContactReachabilityStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetContactReachabilityStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDomainDetailCommand(
  input: GetDomainDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.GetDomainDetail";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDomainDetailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDomainSuggestionsCommand(
  input: GetDomainSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.GetDomainSuggestions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDomainSuggestionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOperationDetailCommand(
  input: GetOperationDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.GetOperationDetail";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOperationDetailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDomainsCommand(
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.ListDomains";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOperationsCommand(
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.ListOperations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOperationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForDomainCommand(
  input: ListTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.ListTagsForDomain";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RegisterDomainCommand(
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.RegisterDomain";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RegisterDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RenewDomainCommand(
  input: RenewDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.RenewDomain";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RenewDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ResendContactReachabilityEmailCommand(
  input: ResendContactReachabilityEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Domains_v20140515.ResendContactReachabilityEmail";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ResendContactReachabilityEmailRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RetrieveDomainAuthCodeCommand(
  input: RetrieveDomainAuthCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.RetrieveDomainAuthCode";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RetrieveDomainAuthCodeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TransferDomainCommand(
  input: TransferDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.TransferDomain";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TransferDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDomainContactCommand(
  input: UpdateDomainContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.UpdateDomainContact";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDomainContactRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDomainContactPrivacyCommand(
  input: UpdateDomainContactPrivacyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "Route53Domains_v20140515.UpdateDomainContactPrivacy";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDomainContactPrivacyRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDomainNameserversCommand(
  input: UpdateDomainNameserversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.UpdateDomainNameservers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDomainNameserversRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateTagsForDomainCommand(
  input: UpdateTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.UpdateTagsForDomain";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateTagsForDomainRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ViewBillingCommand(
  input: ViewBillingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "Route53Domains_v20140515.ViewBilling";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ViewBillingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CheckDomainAvailabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> {
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
}

async function deserializeAws_json1_1CheckDomainAvailabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1CheckDomainTransferabilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> {
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
}

async function deserializeAws_json1_1CheckDomainTransferabilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1DeleteTagsForDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteTagsForDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1DisableDomainAutoRenewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> {
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
}

async function deserializeAws_json1_1DisableDomainAutoRenewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1DisableDomainTransferLockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> {
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
}

async function deserializeAws_json1_1DisableDomainTransferLockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1EnableDomainAutoRenewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> {
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
}

async function deserializeAws_json1_1EnableDomainAutoRenewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1EnableDomainTransferLockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> {
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
}

async function deserializeAws_json1_1EnableDomainTransferLockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1GetContactReachabilityStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> {
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
}

async function deserializeAws_json1_1GetContactReachabilityStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1GetDomainDetailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> {
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
}

async function deserializeAws_json1_1GetDomainDetailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1GetDomainSuggestionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> {
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
}

async function deserializeAws_json1_1GetDomainSuggestionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1GetOperationDetailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> {
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
}

async function deserializeAws_json1_1GetOperationDetailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export async function deserializeAws_json1_1ListDomainsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDomainsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export async function deserializeAws_json1_1ListOperationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> {
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
}

async function deserializeAws_json1_1ListOperationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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

export async function deserializeAws_json1_1ListTagsForDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> {
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
}

async function deserializeAws_json1_1ListTagsForDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1RegisterDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> {
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
}

async function deserializeAws_json1_1RegisterDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> {
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
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#DomainLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1DomainLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1RenewDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> {
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
}

async function deserializeAws_json1_1RenewDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1ResendContactReachabilityEmailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> {
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
}

async function deserializeAws_json1_1ResendContactReachabilityEmailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1RetrieveDomainAuthCodeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> {
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
}

async function deserializeAws_json1_1RetrieveDomainAuthCodeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1TransferDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> {
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
}

async function deserializeAws_json1_1TransferDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> {
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
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#DomainLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1DomainLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1UpdateDomainContactCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateDomainContactCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1UpdateDomainContactPrivacyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateDomainContactPrivacyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1UpdateDomainNameserversCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateDomainNameserversCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> {
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
    case "DuplicateRequest":
    case "com.amazonaws.route53domains.v20140515#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains.v20140515#TLDRulesViolation":
      response = {
        ...(await deserializeAws_json1_1TLDRulesViolationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1UpdateTagsForDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateTagsForDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains.v20140515#OperationLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1OperationLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains.v20140515#UnsupportedTLD":
      response = {
        ...(await deserializeAws_json1_1UnsupportedTLDResponse(
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

export async function deserializeAws_json1_1ViewBillingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> {
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
}

async function deserializeAws_json1_1ViewBillingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> {
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
    case "InvalidInput":
    case "com.amazonaws.route53domains.v20140515#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(
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
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.IdnLangCode !== undefined) {
    bodyParams["IdnLangCode"] = input.IdnLangCode;
  }
  return bodyParams;
};

const serializeAws_json1_1CheckDomainTransferabilityRequest = (
  input: CheckDomainTransferabilityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AuthCode !== undefined) {
    bodyParams["AuthCode"] = input.AuthCode;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1ContactDetail = (
  input: ContactDetail,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AddressLine1 !== undefined) {
    bodyParams["AddressLine1"] = input.AddressLine1;
  }
  if (input.AddressLine2 !== undefined) {
    bodyParams["AddressLine2"] = input.AddressLine2;
  }
  if (input.City !== undefined) {
    bodyParams["City"] = input.City;
  }
  if (input.ContactType !== undefined) {
    bodyParams["ContactType"] = input.ContactType;
  }
  if (input.CountryCode !== undefined) {
    bodyParams["CountryCode"] = input.CountryCode;
  }
  if (input.Email !== undefined) {
    bodyParams["Email"] = input.Email;
  }
  if (input.ExtraParams !== undefined) {
    bodyParams["ExtraParams"] = serializeAws_json1_1ExtraParamList(
      input.ExtraParams,
      context
    );
  }
  if (input.Fax !== undefined) {
    bodyParams["Fax"] = input.Fax;
  }
  if (input.FirstName !== undefined) {
    bodyParams["FirstName"] = input.FirstName;
  }
  if (input.LastName !== undefined) {
    bodyParams["LastName"] = input.LastName;
  }
  if (input.OrganizationName !== undefined) {
    bodyParams["OrganizationName"] = input.OrganizationName;
  }
  if (input.PhoneNumber !== undefined) {
    bodyParams["PhoneNumber"] = input.PhoneNumber;
  }
  if (input.State !== undefined) {
    bodyParams["State"] = input.State;
  }
  if (input.ZipCode !== undefined) {
    bodyParams["ZipCode"] = input.ZipCode;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTagsForDomainRequest = (
  input: DeleteTagsForDomainRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.TagsToDelete !== undefined) {
    bodyParams["TagsToDelete"] = serializeAws_json1_1TagKeyList(
      input.TagsToDelete,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DisableDomainAutoRenewRequest = (
  input: DisableDomainAutoRenewRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1DisableDomainTransferLockRequest = (
  input: DisableDomainTransferLockRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableDomainAutoRenewRequest = (
  input: EnableDomainAutoRenewRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1EnableDomainTransferLockRequest = (
  input: EnableDomainTransferLockRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1ExtraParam = (
  input: ExtraParam,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1ExtraParamList = (
  input: Array<ExtraParam>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ExtraParam(entry, context));
  }
  return contents;
};

const serializeAws_json1_1GetContactReachabilityStatusRequest = (
  input: GetContactReachabilityStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDomainDetailRequest = (
  input: GetDomainDetailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDomainSuggestionsRequest = (
  input: GetDomainSuggestionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.OnlyAvailable !== undefined) {
    bodyParams["OnlyAvailable"] = input.OnlyAvailable;
  }
  if (input.SuggestionCount !== undefined) {
    bodyParams["SuggestionCount"] = input.SuggestionCount;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOperationDetailRequest = (
  input: GetOperationDetailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OperationId !== undefined) {
    bodyParams["OperationId"] = input.OperationId;
  }
  return bodyParams;
};

const serializeAws_json1_1GlueIpList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListDomainsRequest = (
  input: ListDomainsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    bodyParams["MaxItems"] = input.MaxItems;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOperationsRequest = (
  input: ListOperationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    bodyParams["MaxItems"] = input.MaxItems;
  }
  if (input.SubmittedSince !== undefined) {
    bodyParams["SubmittedSince"] = Math.round(
      input.SubmittedSince.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForDomainRequest = (
  input: ListTagsForDomainRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  return bodyParams;
};

const serializeAws_json1_1Nameserver = (
  input: Nameserver,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.GlueIps !== undefined) {
    bodyParams["GlueIps"] = serializeAws_json1_1GlueIpList(
      input.GlueIps,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1NameserverList = (
  input: Array<Nameserver>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Nameserver(entry, context));
  }
  return contents;
};

const serializeAws_json1_1RegisterDomainRequest = (
  input: RegisterDomainRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminContact !== undefined) {
    bodyParams["AdminContact"] = serializeAws_json1_1ContactDetail(
      input.AdminContact,
      context
    );
  }
  if (input.AutoRenew !== undefined) {
    bodyParams["AutoRenew"] = input.AutoRenew;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.DurationInYears !== undefined) {
    bodyParams["DurationInYears"] = input.DurationInYears;
  }
  if (input.IdnLangCode !== undefined) {
    bodyParams["IdnLangCode"] = input.IdnLangCode;
  }
  if (input.PrivacyProtectAdminContact !== undefined) {
    bodyParams["PrivacyProtectAdminContact"] = input.PrivacyProtectAdminContact;
  }
  if (input.PrivacyProtectRegistrantContact !== undefined) {
    bodyParams["PrivacyProtectRegistrantContact"] =
      input.PrivacyProtectRegistrantContact;
  }
  if (input.PrivacyProtectTechContact !== undefined) {
    bodyParams["PrivacyProtectTechContact"] = input.PrivacyProtectTechContact;
  }
  if (input.RegistrantContact !== undefined) {
    bodyParams["RegistrantContact"] = serializeAws_json1_1ContactDetail(
      input.RegistrantContact,
      context
    );
  }
  if (input.TechContact !== undefined) {
    bodyParams["TechContact"] = serializeAws_json1_1ContactDetail(
      input.TechContact,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1RenewDomainRequest = (
  input: RenewDomainRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CurrentExpiryYear !== undefined) {
    bodyParams["CurrentExpiryYear"] = input.CurrentExpiryYear;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.DurationInYears !== undefined) {
    bodyParams["DurationInYears"] = input.DurationInYears;
  }
  return bodyParams;
};

const serializeAws_json1_1ResendContactReachabilityEmailRequest = (
  input: ResendContactReachabilityEmailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.domainName !== undefined) {
    bodyParams["domainName"] = input.domainName;
  }
  return bodyParams;
};

const serializeAws_json1_1RetrieveDomainAuthCodeRequest = (
  input: RetrieveDomainAuthCodeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
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

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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

const serializeAws_json1_1TransferDomainRequest = (
  input: TransferDomainRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminContact !== undefined) {
    bodyParams["AdminContact"] = serializeAws_json1_1ContactDetail(
      input.AdminContact,
      context
    );
  }
  if (input.AuthCode !== undefined) {
    bodyParams["AuthCode"] = input.AuthCode;
  }
  if (input.AutoRenew !== undefined) {
    bodyParams["AutoRenew"] = input.AutoRenew;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.DurationInYears !== undefined) {
    bodyParams["DurationInYears"] = input.DurationInYears;
  }
  if (input.IdnLangCode !== undefined) {
    bodyParams["IdnLangCode"] = input.IdnLangCode;
  }
  if (input.Nameservers !== undefined) {
    bodyParams["Nameservers"] = serializeAws_json1_1NameserverList(
      input.Nameservers,
      context
    );
  }
  if (input.PrivacyProtectAdminContact !== undefined) {
    bodyParams["PrivacyProtectAdminContact"] = input.PrivacyProtectAdminContact;
  }
  if (input.PrivacyProtectRegistrantContact !== undefined) {
    bodyParams["PrivacyProtectRegistrantContact"] =
      input.PrivacyProtectRegistrantContact;
  }
  if (input.PrivacyProtectTechContact !== undefined) {
    bodyParams["PrivacyProtectTechContact"] = input.PrivacyProtectTechContact;
  }
  if (input.RegistrantContact !== undefined) {
    bodyParams["RegistrantContact"] = serializeAws_json1_1ContactDetail(
      input.RegistrantContact,
      context
    );
  }
  if (input.TechContact !== undefined) {
    bodyParams["TechContact"] = serializeAws_json1_1ContactDetail(
      input.TechContact,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDomainContactPrivacyRequest = (
  input: UpdateDomainContactPrivacyRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminPrivacy !== undefined) {
    bodyParams["AdminPrivacy"] = input.AdminPrivacy;
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.RegistrantPrivacy !== undefined) {
    bodyParams["RegistrantPrivacy"] = input.RegistrantPrivacy;
  }
  if (input.TechPrivacy !== undefined) {
    bodyParams["TechPrivacy"] = input.TechPrivacy;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDomainContactRequest = (
  input: UpdateDomainContactRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdminContact !== undefined) {
    bodyParams["AdminContact"] = serializeAws_json1_1ContactDetail(
      input.AdminContact,
      context
    );
  }
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.RegistrantContact !== undefined) {
    bodyParams["RegistrantContact"] = serializeAws_json1_1ContactDetail(
      input.RegistrantContact,
      context
    );
  }
  if (input.TechContact !== undefined) {
    bodyParams["TechContact"] = serializeAws_json1_1ContactDetail(
      input.TechContact,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDomainNameserversRequest = (
  input: UpdateDomainNameserversRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.FIAuthKey !== undefined) {
    bodyParams["FIAuthKey"] = input.FIAuthKey;
  }
  if (input.Nameservers !== undefined) {
    bodyParams["Nameservers"] = serializeAws_json1_1NameserverList(
      input.Nameservers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateTagsForDomainRequest = (
  input: UpdateTagsForDomainRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DomainName !== undefined) {
    bodyParams["DomainName"] = input.DomainName;
  }
  if (input.TagsToUpdate !== undefined) {
    bodyParams["TagsToUpdate"] = serializeAws_json1_1TagList(
      input.TagsToUpdate,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ViewBillingRequest = (
  input: ViewBillingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.End !== undefined) {
    bodyParams["End"] = Math.round(input.End.getTime() / 1000);
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    bodyParams["MaxItems"] = input.MaxItems;
  }
  if (input.Start !== undefined) {
    bodyParams["Start"] = Math.round(input.Start.getTime() / 1000);
  }
  return bodyParams;
};

const deserializeAws_json1_1BillingRecord = (
  output: any,
  context: __SerdeContext
): BillingRecord => {
  let contents: any = {
    __type: "BillingRecord",
    BillDate: undefined,
    DomainName: undefined,
    InvoiceId: undefined,
    Operation: undefined,
    Price: undefined
  };
  if (output.BillDate !== undefined && output.BillDate !== null) {
    contents.BillDate = new Date(Math.round(output.BillDate * 1000));
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.InvoiceId !== undefined && output.InvoiceId !== null) {
    contents.InvoiceId = output.InvoiceId;
  }
  if (output.Operation !== undefined && output.Operation !== null) {
    contents.Operation = output.Operation;
  }
  if (output.Price !== undefined && output.Price !== null) {
    contents.Price = output.Price;
  }
  return contents;
};

const deserializeAws_json1_1BillingRecords = (
  output: any,
  context: __SerdeContext
): Array<BillingRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BillingRecord(entry, context)
  );
};

const deserializeAws_json1_1CheckDomainAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainAvailabilityResponse => {
  let contents: any = {
    __type: "CheckDomainAvailabilityResponse",
    Availability: undefined
  };
  if (output.Availability !== undefined && output.Availability !== null) {
    contents.Availability = output.Availability;
  }
  return contents;
};

const deserializeAws_json1_1CheckDomainTransferabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainTransferabilityResponse => {
  let contents: any = {
    __type: "CheckDomainTransferabilityResponse",
    Transferability: undefined
  };
  if (output.Transferability !== undefined && output.Transferability !== null) {
    contents.Transferability = deserializeAws_json1_1DomainTransferability(
      output.Transferability,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ContactDetail = (
  output: any,
  context: __SerdeContext
): ContactDetail => {
  let contents: any = {
    __type: "ContactDetail",
    AddressLine1: undefined,
    AddressLine2: undefined,
    City: undefined,
    ContactType: undefined,
    CountryCode: undefined,
    Email: undefined,
    ExtraParams: undefined,
    Fax: undefined,
    FirstName: undefined,
    LastName: undefined,
    OrganizationName: undefined,
    PhoneNumber: undefined,
    State: undefined,
    ZipCode: undefined
  };
  if (output.AddressLine1 !== undefined && output.AddressLine1 !== null) {
    contents.AddressLine1 = output.AddressLine1;
  }
  if (output.AddressLine2 !== undefined && output.AddressLine2 !== null) {
    contents.AddressLine2 = output.AddressLine2;
  }
  if (output.City !== undefined && output.City !== null) {
    contents.City = output.City;
  }
  if (output.ContactType !== undefined && output.ContactType !== null) {
    contents.ContactType = output.ContactType;
  }
  if (output.CountryCode !== undefined && output.CountryCode !== null) {
    contents.CountryCode = output.CountryCode;
  }
  if (output.Email !== undefined && output.Email !== null) {
    contents.Email = output.Email;
  }
  if (output.ExtraParams !== undefined && output.ExtraParams !== null) {
    contents.ExtraParams = deserializeAws_json1_1ExtraParamList(
      output.ExtraParams,
      context
    );
  }
  if (output.Fax !== undefined && output.Fax !== null) {
    contents.Fax = output.Fax;
  }
  if (output.FirstName !== undefined && output.FirstName !== null) {
    contents.FirstName = output.FirstName;
  }
  if (output.LastName !== undefined && output.LastName !== null) {
    contents.LastName = output.LastName;
  }
  if (
    output.OrganizationName !== undefined &&
    output.OrganizationName !== null
  ) {
    contents.OrganizationName = output.OrganizationName;
  }
  if (output.PhoneNumber !== undefined && output.PhoneNumber !== null) {
    contents.PhoneNumber = output.PhoneNumber;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.ZipCode !== undefined && output.ZipCode !== null) {
    contents.ZipCode = output.ZipCode;
  }
  return contents;
};

const deserializeAws_json1_1DeleteTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): DeleteTagsForDomainResponse => {
  let contents: any = {
    __type: "DeleteTagsForDomainResponse"
  };
  return contents;
};

const deserializeAws_json1_1DisableDomainAutoRenewResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainAutoRenewResponse => {
  let contents: any = {
    __type: "DisableDomainAutoRenewResponse"
  };
  return contents;
};

const deserializeAws_json1_1DisableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainTransferLockResponse => {
  let contents: any = {
    __type: "DisableDomainTransferLockResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1DomainLimitExceeded = (
  output: any,
  context: __SerdeContext
): DomainLimitExceeded => {
  let contents: any = {
    __type: "DomainLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1DomainStatusList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DomainSuggestion = (
  output: any,
  context: __SerdeContext
): DomainSuggestion => {
  let contents: any = {
    __type: "DomainSuggestion",
    Availability: undefined,
    DomainName: undefined
  };
  if (output.Availability !== undefined && output.Availability !== null) {
    contents.Availability = output.Availability;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  return contents;
};

const deserializeAws_json1_1DomainSuggestionsList = (
  output: any,
  context: __SerdeContext
): Array<DomainSuggestion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainSuggestion(entry, context)
  );
};

const deserializeAws_json1_1DomainSummary = (
  output: any,
  context: __SerdeContext
): DomainSummary => {
  let contents: any = {
    __type: "DomainSummary",
    AutoRenew: undefined,
    DomainName: undefined,
    Expiry: undefined,
    TransferLock: undefined
  };
  if (output.AutoRenew !== undefined && output.AutoRenew !== null) {
    contents.AutoRenew = output.AutoRenew;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.Expiry !== undefined && output.Expiry !== null) {
    contents.Expiry = new Date(Math.round(output.Expiry * 1000));
  }
  if (output.TransferLock !== undefined && output.TransferLock !== null) {
    contents.TransferLock = output.TransferLock;
  }
  return contents;
};

const deserializeAws_json1_1DomainSummaryList = (
  output: any,
  context: __SerdeContext
): Array<DomainSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DomainSummary(entry, context)
  );
};

const deserializeAws_json1_1DomainTransferability = (
  output: any,
  context: __SerdeContext
): DomainTransferability => {
  let contents: any = {
    __type: "DomainTransferability",
    Transferable: undefined
  };
  if (output.Transferable !== undefined && output.Transferable !== null) {
    contents.Transferable = output.Transferable;
  }
  return contents;
};

const deserializeAws_json1_1DuplicateRequest = (
  output: any,
  context: __SerdeContext
): DuplicateRequest => {
  let contents: any = {
    __type: "DuplicateRequest",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1EnableDomainAutoRenewResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainAutoRenewResponse => {
  let contents: any = {
    __type: "EnableDomainAutoRenewResponse"
  };
  return contents;
};

const deserializeAws_json1_1EnableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainTransferLockResponse => {
  let contents: any = {
    __type: "EnableDomainTransferLockResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1ExtraParam = (
  output: any,
  context: __SerdeContext
): ExtraParam => {
  let contents: any = {
    __type: "ExtraParam",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1ExtraParamList = (
  output: any,
  context: __SerdeContext
): Array<ExtraParam> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ExtraParam(entry, context)
  );
};

const deserializeAws_json1_1GetContactReachabilityStatusResponse = (
  output: any,
  context: __SerdeContext
): GetContactReachabilityStatusResponse => {
  let contents: any = {
    __type: "GetContactReachabilityStatusResponse",
    domainName: undefined,
    status: undefined
  };
  if (output.domainName !== undefined && output.domainName !== null) {
    contents.domainName = output.domainName;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1GetDomainDetailResponse = (
  output: any,
  context: __SerdeContext
): GetDomainDetailResponse => {
  let contents: any = {
    __type: "GetDomainDetailResponse",
    AbuseContactEmail: undefined,
    AbuseContactPhone: undefined,
    AdminContact: undefined,
    AdminPrivacy: undefined,
    AutoRenew: undefined,
    CreationDate: undefined,
    DnsSec: undefined,
    DomainName: undefined,
    ExpirationDate: undefined,
    Nameservers: undefined,
    RegistrantContact: undefined,
    RegistrantPrivacy: undefined,
    RegistrarName: undefined,
    RegistrarUrl: undefined,
    RegistryDomainId: undefined,
    Reseller: undefined,
    StatusList: undefined,
    TechContact: undefined,
    TechPrivacy: undefined,
    UpdatedDate: undefined,
    WhoIsServer: undefined
  };
  if (
    output.AbuseContactEmail !== undefined &&
    output.AbuseContactEmail !== null
  ) {
    contents.AbuseContactEmail = output.AbuseContactEmail;
  }
  if (
    output.AbuseContactPhone !== undefined &&
    output.AbuseContactPhone !== null
  ) {
    contents.AbuseContactPhone = output.AbuseContactPhone;
  }
  if (output.AdminContact !== undefined && output.AdminContact !== null) {
    contents.AdminContact = deserializeAws_json1_1ContactDetail(
      output.AdminContact,
      context
    );
  }
  if (output.AdminPrivacy !== undefined && output.AdminPrivacy !== null) {
    contents.AdminPrivacy = output.AdminPrivacy;
  }
  if (output.AutoRenew !== undefined && output.AutoRenew !== null) {
    contents.AutoRenew = output.AutoRenew;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (output.DnsSec !== undefined && output.DnsSec !== null) {
    contents.DnsSec = output.DnsSec;
  }
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
    contents.ExpirationDate = new Date(
      Math.round(output.ExpirationDate * 1000)
    );
  }
  if (output.Nameservers !== undefined && output.Nameservers !== null) {
    contents.Nameservers = deserializeAws_json1_1NameserverList(
      output.Nameservers,
      context
    );
  }
  if (
    output.RegistrantContact !== undefined &&
    output.RegistrantContact !== null
  ) {
    contents.RegistrantContact = deserializeAws_json1_1ContactDetail(
      output.RegistrantContact,
      context
    );
  }
  if (
    output.RegistrantPrivacy !== undefined &&
    output.RegistrantPrivacy !== null
  ) {
    contents.RegistrantPrivacy = output.RegistrantPrivacy;
  }
  if (output.RegistrarName !== undefined && output.RegistrarName !== null) {
    contents.RegistrarName = output.RegistrarName;
  }
  if (output.RegistrarUrl !== undefined && output.RegistrarUrl !== null) {
    contents.RegistrarUrl = output.RegistrarUrl;
  }
  if (
    output.RegistryDomainId !== undefined &&
    output.RegistryDomainId !== null
  ) {
    contents.RegistryDomainId = output.RegistryDomainId;
  }
  if (output.Reseller !== undefined && output.Reseller !== null) {
    contents.Reseller = output.Reseller;
  }
  if (output.StatusList !== undefined && output.StatusList !== null) {
    contents.StatusList = deserializeAws_json1_1DomainStatusList(
      output.StatusList,
      context
    );
  }
  if (output.TechContact !== undefined && output.TechContact !== null) {
    contents.TechContact = deserializeAws_json1_1ContactDetail(
      output.TechContact,
      context
    );
  }
  if (output.TechPrivacy !== undefined && output.TechPrivacy !== null) {
    contents.TechPrivacy = output.TechPrivacy;
  }
  if (output.UpdatedDate !== undefined && output.UpdatedDate !== null) {
    contents.UpdatedDate = new Date(Math.round(output.UpdatedDate * 1000));
  }
  if (output.WhoIsServer !== undefined && output.WhoIsServer !== null) {
    contents.WhoIsServer = output.WhoIsServer;
  }
  return contents;
};

const deserializeAws_json1_1GetDomainSuggestionsResponse = (
  output: any,
  context: __SerdeContext
): GetDomainSuggestionsResponse => {
  let contents: any = {
    __type: "GetDomainSuggestionsResponse",
    SuggestionsList: undefined
  };
  if (output.SuggestionsList !== undefined && output.SuggestionsList !== null) {
    contents.SuggestionsList = deserializeAws_json1_1DomainSuggestionsList(
      output.SuggestionsList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetOperationDetailResponse = (
  output: any,
  context: __SerdeContext
): GetOperationDetailResponse => {
  let contents: any = {
    __type: "GetOperationDetailResponse",
    DomainName: undefined,
    Message: undefined,
    OperationId: undefined,
    Status: undefined,
    SubmittedDate: undefined,
    Type: undefined
  };
  if (output.DomainName !== undefined && output.DomainName !== null) {
    contents.DomainName = output.DomainName;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.SubmittedDate !== undefined && output.SubmittedDate !== null) {
    contents.SubmittedDate = new Date(Math.round(output.SubmittedDate * 1000));
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1GlueIpList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InvalidInput = (
  output: any,
  context: __SerdeContext
): InvalidInput => {
  let contents: any = {
    __type: "InvalidInput",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListDomainsResponse = (
  output: any,
  context: __SerdeContext
): ListDomainsResponse => {
  let contents: any = {
    __type: "ListDomainsResponse",
    Domains: undefined,
    NextPageMarker: undefined
  };
  if (output.Domains !== undefined && output.Domains !== null) {
    contents.Domains = deserializeAws_json1_1DomainSummaryList(
      output.Domains,
      context
    );
  }
  if (output.NextPageMarker !== undefined && output.NextPageMarker !== null) {
    contents.NextPageMarker = output.NextPageMarker;
  }
  return contents;
};

const deserializeAws_json1_1ListOperationsResponse = (
  output: any,
  context: __SerdeContext
): ListOperationsResponse => {
  let contents: any = {
    __type: "ListOperationsResponse",
    NextPageMarker: undefined,
    Operations: undefined
  };
  if (output.NextPageMarker !== undefined && output.NextPageMarker !== null) {
    contents.NextPageMarker = output.NextPageMarker;
  }
  if (output.Operations !== undefined && output.Operations !== null) {
    contents.Operations = deserializeAws_json1_1OperationSummaryList(
      output.Operations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForDomainResponse => {
  let contents: any = {
    __type: "ListTagsForDomainResponse",
    TagList: undefined
  };
  if (output.TagList !== undefined && output.TagList !== null) {
    contents.TagList = deserializeAws_json1_1TagList(output.TagList, context);
  }
  return contents;
};

const deserializeAws_json1_1Nameserver = (
  output: any,
  context: __SerdeContext
): Nameserver => {
  let contents: any = {
    __type: "Nameserver",
    GlueIps: undefined,
    Name: undefined
  };
  if (output.GlueIps !== undefined && output.GlueIps !== null) {
    contents.GlueIps = deserializeAws_json1_1GlueIpList(
      output.GlueIps,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_json1_1NameserverList = (
  output: any,
  context: __SerdeContext
): Array<Nameserver> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Nameserver(entry, context)
  );
};

const deserializeAws_json1_1OperationLimitExceeded = (
  output: any,
  context: __SerdeContext
): OperationLimitExceeded => {
  let contents: any = {
    __type: "OperationLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OperationSummary = (
  output: any,
  context: __SerdeContext
): OperationSummary => {
  let contents: any = {
    __type: "OperationSummary",
    OperationId: undefined,
    Status: undefined,
    SubmittedDate: undefined,
    Type: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.SubmittedDate !== undefined && output.SubmittedDate !== null) {
    contents.SubmittedDate = new Date(Math.round(output.SubmittedDate * 1000));
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1OperationSummaryList = (
  output: any,
  context: __SerdeContext
): Array<OperationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OperationSummary(entry, context)
  );
};

const deserializeAws_json1_1RegisterDomainResponse = (
  output: any,
  context: __SerdeContext
): RegisterDomainResponse => {
  let contents: any = {
    __type: "RegisterDomainResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1RenewDomainResponse = (
  output: any,
  context: __SerdeContext
): RenewDomainResponse => {
  let contents: any = {
    __type: "RenewDomainResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1ResendContactReachabilityEmailResponse = (
  output: any,
  context: __SerdeContext
): ResendContactReachabilityEmailResponse => {
  let contents: any = {
    __type: "ResendContactReachabilityEmailResponse",
    domainName: undefined,
    emailAddress: undefined,
    isAlreadyVerified: undefined
  };
  if (output.domainName !== undefined && output.domainName !== null) {
    contents.domainName = output.domainName;
  }
  if (output.emailAddress !== undefined && output.emailAddress !== null) {
    contents.emailAddress = output.emailAddress;
  }
  if (
    output.isAlreadyVerified !== undefined &&
    output.isAlreadyVerified !== null
  ) {
    contents.isAlreadyVerified = output.isAlreadyVerified;
  }
  return contents;
};

const deserializeAws_json1_1RetrieveDomainAuthCodeResponse = (
  output: any,
  context: __SerdeContext
): RetrieveDomainAuthCodeResponse => {
  let contents: any = {
    __type: "RetrieveDomainAuthCodeResponse",
    AuthCode: undefined
  };
  if (output.AuthCode !== undefined && output.AuthCode !== null) {
    contents.AuthCode = output.AuthCode;
  }
  return contents;
};

const deserializeAws_json1_1TLDRulesViolation = (
  output: any,
  context: __SerdeContext
): TLDRulesViolation => {
  let contents: any = {
    __type: "TLDRulesViolation",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
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

const deserializeAws_json1_1TransferDomainResponse = (
  output: any,
  context: __SerdeContext
): TransferDomainResponse => {
  let contents: any = {
    __type: "TransferDomainResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1UnsupportedTLD = (
  output: any,
  context: __SerdeContext
): UnsupportedTLD => {
  let contents: any = {
    __type: "UnsupportedTLD",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateDomainContactPrivacyResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactPrivacyResponse => {
  let contents: any = {
    __type: "UpdateDomainContactPrivacyResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateDomainContactResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactResponse => {
  let contents: any = {
    __type: "UpdateDomainContactResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateDomainNameserversResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainNameserversResponse => {
  let contents: any = {
    __type: "UpdateDomainNameserversResponse",
    OperationId: undefined
  };
  if (output.OperationId !== undefined && output.OperationId !== null) {
    contents.OperationId = output.OperationId;
  }
  return contents;
};

const deserializeAws_json1_1UpdateTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): UpdateTagsForDomainResponse => {
  let contents: any = {
    __type: "UpdateTagsForDomainResponse"
  };
  return contents;
};

const deserializeAws_json1_1ViewBillingResponse = (
  output: any,
  context: __SerdeContext
): ViewBillingResponse => {
  let contents: any = {
    __type: "ViewBillingResponse",
    BillingRecords: undefined,
    NextPageMarker: undefined
  };
  if (output.BillingRecords !== undefined && output.BillingRecords !== null) {
    contents.BillingRecords = deserializeAws_json1_1BillingRecords(
      output.BillingRecords,
      context
    );
  }
  if (output.NextPageMarker !== undefined && output.NextPageMarker !== null) {
    contents.NextPageMarker = output.NextPageMarker;
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
