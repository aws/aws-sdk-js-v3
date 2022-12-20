// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  AcceptDomainTransferFromAnotherAwsAccountCommandOutput,
} from "../commands/AcceptDomainTransferFromAnotherAwsAccountCommand";
import {
  AssociateDelegationSignerToDomainCommandInput,
  AssociateDelegationSignerToDomainCommandOutput,
} from "../commands/AssociateDelegationSignerToDomainCommand";
import {
  CancelDomainTransferToAnotherAwsAccountCommandInput,
  CancelDomainTransferToAnotherAwsAccountCommandOutput,
} from "../commands/CancelDomainTransferToAnotherAwsAccountCommand";
import {
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput,
} from "../commands/CheckDomainAvailabilityCommand";
import {
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
} from "../commands/CheckDomainTransferabilityCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteTagsForDomainCommandInput,
  DeleteTagsForDomainCommandOutput,
} from "../commands/DeleteTagsForDomainCommand";
import {
  DisableDomainAutoRenewCommandInput,
  DisableDomainAutoRenewCommandOutput,
} from "../commands/DisableDomainAutoRenewCommand";
import {
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput,
} from "../commands/DisableDomainTransferLockCommand";
import {
  DisassociateDelegationSignerFromDomainCommandInput,
  DisassociateDelegationSignerFromDomainCommandOutput,
} from "../commands/DisassociateDelegationSignerFromDomainCommand";
import {
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
} from "../commands/EnableDomainAutoRenewCommand";
import {
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput,
} from "../commands/EnableDomainTransferLockCommand";
import {
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
} from "../commands/GetContactReachabilityStatusCommand";
import { GetDomainDetailCommandInput, GetDomainDetailCommandOutput } from "../commands/GetDomainDetailCommand";
import {
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput,
} from "../commands/GetDomainSuggestionsCommand";
import { GetOperationDetailCommandInput, GetOperationDetailCommandOutput } from "../commands/GetOperationDetailCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { ListPricesCommandInput, ListPricesCommandOutput } from "../commands/ListPricesCommand";
import { ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput } from "../commands/ListTagsForDomainCommand";
import { PushDomainCommandInput, PushDomainCommandOutput } from "../commands/PushDomainCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "../commands/RegisterDomainCommand";
import {
  RejectDomainTransferFromAnotherAwsAccountCommandInput,
  RejectDomainTransferFromAnotherAwsAccountCommandOutput,
} from "../commands/RejectDomainTransferFromAnotherAwsAccountCommand";
import { RenewDomainCommandInput, RenewDomainCommandOutput } from "../commands/RenewDomainCommand";
import {
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
} from "../commands/ResendContactReachabilityEmailCommand";
import {
  ResendOperationAuthorizationCommandInput,
  ResendOperationAuthorizationCommandOutput,
} from "../commands/ResendOperationAuthorizationCommand";
import {
  RetrieveDomainAuthCodeCommandInput,
  RetrieveDomainAuthCodeCommandOutput,
} from "../commands/RetrieveDomainAuthCodeCommand";
import { TransferDomainCommandInput, TransferDomainCommandOutput } from "../commands/TransferDomainCommand";
import {
  TransferDomainToAnotherAwsAccountCommandInput,
  TransferDomainToAnotherAwsAccountCommandOutput,
} from "../commands/TransferDomainToAnotherAwsAccountCommand";
import {
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput,
} from "../commands/UpdateDomainContactCommand";
import {
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput,
} from "../commands/UpdateDomainContactPrivacyCommand";
import {
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
} from "../commands/UpdateDomainNameserversCommand";
import {
  UpdateTagsForDomainCommandInput,
  UpdateTagsForDomainCommandOutput,
} from "../commands/UpdateTagsForDomainCommand";
import { ViewBillingCommandInput, ViewBillingCommandOutput } from "../commands/ViewBillingCommand";
import {
  AcceptDomainTransferFromAnotherAwsAccountRequest,
  AcceptDomainTransferFromAnotherAwsAccountResponse,
  AssociateDelegationSignerToDomainRequest,
  AssociateDelegationSignerToDomainResponse,
  BillingRecord,
  CancelDomainTransferToAnotherAwsAccountRequest,
  CancelDomainTransferToAnotherAwsAccountResponse,
  CheckDomainAvailabilityRequest,
  CheckDomainAvailabilityResponse,
  CheckDomainTransferabilityRequest,
  CheckDomainTransferabilityResponse,
  Consent,
  ContactDetail,
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteTagsForDomainRequest,
  DeleteTagsForDomainResponse,
  DisableDomainAutoRenewRequest,
  DisableDomainAutoRenewResponse,
  DisableDomainTransferLockRequest,
  DisableDomainTransferLockResponse,
  DisassociateDelegationSignerFromDomainRequest,
  DisassociateDelegationSignerFromDomainResponse,
  DnssecKey,
  DnssecLimitExceeded,
  DnssecSigningAttributes,
  DomainLimitExceeded,
  DomainPrice,
  DomainSuggestion,
  DomainSummary,
  DomainTransferability,
  DuplicateRequest,
  EnableDomainAutoRenewRequest,
  EnableDomainAutoRenewResponse,
  EnableDomainTransferLockRequest,
  EnableDomainTransferLockResponse,
  ExtraParam,
  FilterCondition,
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
  ListPricesRequest,
  ListPricesResponse,
  ListTagsForDomainRequest,
  ListTagsForDomainResponse,
  Nameserver,
  OperationLimitExceeded,
  OperationStatus,
  OperationSummary,
  OperationType,
  PriceWithCurrency,
  PushDomainRequest,
  RegisterDomainRequest,
  RegisterDomainResponse,
  RejectDomainTransferFromAnotherAwsAccountRequest,
  RejectDomainTransferFromAnotherAwsAccountResponse,
  RenewDomainRequest,
  RenewDomainResponse,
  ResendContactReachabilityEmailRequest,
  ResendContactReachabilityEmailResponse,
  ResendOperationAuthorizationRequest,
  RetrieveDomainAuthCodeRequest,
  RetrieveDomainAuthCodeResponse,
  SortCondition,
  Tag,
  TLDRulesViolation,
  TransferDomainRequest,
  TransferDomainResponse,
  TransferDomainToAnotherAwsAccountRequest,
  TransferDomainToAnotherAwsAccountResponse,
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
  ViewBillingResponse,
} from "../models/models_0";
import { Route53DomainsServiceException as __BaseException } from "../models/Route53DomainsServiceException";

export const serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = async (
  input: AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDelegationSignerToDomainCommand = async (
  input: AssociateDelegationSignerToDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.AssociateDelegationSignerToDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateDelegationSignerToDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = async (
  input: CancelDomainTransferToAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckDomainAvailabilityCommand = async (
  input: CheckDomainAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.CheckDomainAvailability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckDomainAvailabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CheckDomainTransferabilityCommand = async (
  input: CheckDomainTransferabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.CheckDomainTransferability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CheckDomainTransferabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsForDomainCommand = async (
  input: DeleteTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DeleteTagsForDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsForDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableDomainAutoRenewCommand = async (
  input: DisableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DisableDomainAutoRenew",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableDomainAutoRenewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableDomainTransferLockCommand = async (
  input: DisableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DisableDomainTransferLock",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableDomainTransferLockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDelegationSignerFromDomainCommand = async (
  input: DisassociateDelegationSignerFromDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DisassociateDelegationSignerFromDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateDelegationSignerFromDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableDomainAutoRenewCommand = async (
  input: EnableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.EnableDomainAutoRenew",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableDomainAutoRenewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableDomainTransferLockCommand = async (
  input: EnableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.EnableDomainTransferLock",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableDomainTransferLockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetContactReachabilityStatusCommand = async (
  input: GetContactReachabilityStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetContactReachabilityStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetContactReachabilityStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainDetailCommand = async (
  input: GetDomainDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetDomainDetail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDomainDetailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDomainSuggestionsCommand = async (
  input: GetDomainSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetDomainSuggestions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDomainSuggestionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationDetailCommand = async (
  input: GetOperationDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetOperationDetail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationDetailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListDomains",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPricesCommand = async (
  input: ListPricesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListPrices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPricesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForDomainCommand = async (
  input: ListTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListTagsForDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PushDomainCommand = async (
  input: PushDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.PushDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PushDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RegisterDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = async (
  input: RejectDomainTransferFromAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RenewDomainCommand = async (
  input: RenewDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RenewDomain",
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
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ResendContactReachabilityEmail",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResendContactReachabilityEmailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResendOperationAuthorizationCommand = async (
  input: ResendOperationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ResendOperationAuthorization",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResendOperationAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RetrieveDomainAuthCodeCommand = async (
  input: RetrieveDomainAuthCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RetrieveDomainAuthCode",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RetrieveDomainAuthCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TransferDomainCommand = async (
  input: TransferDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.TransferDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TransferDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = async (
  input: TransferDomainToAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TransferDomainToAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainContactCommand = async (
  input: UpdateDomainContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateDomainContact",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDomainContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainContactPrivacyCommand = async (
  input: UpdateDomainContactPrivacyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateDomainContactPrivacy",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDomainContactPrivacyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDomainNameserversCommand = async (
  input: UpdateDomainNameserversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateDomainNameservers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDomainNameserversRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTagsForDomainCommand = async (
  input: UpdateTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateTagsForDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTagsForDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ViewBillingCommand = async (
  input: ViewBillingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ViewBilling",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ViewBillingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDomainTransferFromAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountResponse(data, context);
  const response: AcceptDomainTransferFromAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDomainTransferFromAnotherAwsAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains#DomainLimitExceeded":
      throw await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1AssociateDelegationSignerToDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegationSignerToDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateDelegationSignerToDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDelegationSignerToDomainResponse(data, context);
  const response: AssociateDelegationSignerToDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateDelegationSignerToDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegationSignerToDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DnssecLimitExceeded":
    case "com.amazonaws.route53domains#DnssecLimitExceeded":
      throw await deserializeAws_json1_1DnssecLimitExceededResponse(parsedOutput, context);
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDomainTransferToAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountResponse(data, context);
  const response: CancelDomainTransferToAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDomainTransferToAnotherAwsAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CheckDomainAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckDomainAvailabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckDomainAvailabilityResponse(data, context);
  const response: CheckDomainAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckDomainAvailabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1CheckDomainTransferabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CheckDomainTransferabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CheckDomainTransferabilityResponse(data, context);
  const response: CheckDomainTransferabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CheckDomainTransferabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDomainResponse(data, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DeleteTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsForDomainResponse(data, context);
  const response: DeleteTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DisableDomainAutoRenewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableDomainAutoRenewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableDomainAutoRenewResponse(data, context);
  const response: DisableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableDomainAutoRenewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DisableDomainTransferLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisableDomainTransferLockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisableDomainTransferLockResponse(data, context);
  const response: DisableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableDomainTransferLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegationSignerFromDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDelegationSignerFromDomainResponse(data, context);
  const response: DisassociateDelegationSignerFromDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegationSignerFromDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1EnableDomainAutoRenewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableDomainAutoRenewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableDomainAutoRenewResponse(data, context);
  const response: EnableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableDomainAutoRenewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1EnableDomainTransferLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EnableDomainTransferLockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EnableDomainTransferLockResponse(data, context);
  const response: EnableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableDomainTransferLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetContactReachabilityStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetContactReachabilityStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetContactReachabilityStatusResponse(data, context);
  const response: GetContactReachabilityStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetContactReachabilityStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDomainDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDomainDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainDetailResponse(data, context);
  const response: GetDomainDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainDetailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetDomainSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDomainSuggestionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDomainSuggestionsResponse(data, context);
  const response: GetDomainSuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDomainSuggestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1GetOperationDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOperationDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationDetailResponse(data, context);
  const response: GetOperationDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationDetailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListPricesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPricesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPricesResponse(data, context);
  const response: ListPricesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPricesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ListTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForDomainResponse(data, context);
  const response: ListTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1PushDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PushDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PushDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PushDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PushDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PushDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RegisterDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterDomainResponse(data, context);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains#DomainLimitExceeded":
      throw await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context);
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDomainTransferFromAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountResponse(data, context);
  const response: RejectDomainTransferFromAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDomainTransferFromAnotherAwsAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RenewDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RenewDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RenewDomainResponse(data, context);
  const response: RenewDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RenewDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ResendContactReachabilityEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResendContactReachabilityEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ResendContactReachabilityEmailResponse(data, context);
  const response: ResendContactReachabilityEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResendContactReachabilityEmailCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ResendOperationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendOperationAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResendOperationAuthorizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResendOperationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResendOperationAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendOperationAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1RetrieveDomainAuthCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RetrieveDomainAuthCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RetrieveDomainAuthCodeResponse(data, context);
  const response: RetrieveDomainAuthCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RetrieveDomainAuthCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1TransferDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TransferDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TransferDomainResponse(data, context);
  const response: TransferDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TransferDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainLimitExceeded":
    case "com.amazonaws.route53domains#DomainLimitExceeded":
      throw await deserializeAws_json1_1DomainLimitExceededResponse(parsedOutput, context);
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainToAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TransferDomainToAnotherAwsAccountResponse(data, context);
  const response: TransferDomainToAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainToAnotherAwsAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDomainContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDomainContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainContactResponse(data, context);
  const response: UpdateDomainContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDomainContactPrivacyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDomainContactPrivacyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainContactPrivacyResponse(data, context);
  const response: UpdateDomainContactPrivacyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainContactPrivacyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateDomainNameserversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDomainNameserversCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDomainNameserversResponse(data, context);
  const response: UpdateDomainNameserversCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDomainNameserversCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await deserializeAws_json1_1TLDRulesViolationResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1UpdateTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTagsForDomainResponse(data, context);
  const response: UpdateTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTagsForDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await deserializeAws_json1_1OperationLimitExceededResponse(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await deserializeAws_json1_1UnsupportedTLDResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_json1_1ViewBillingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ViewBillingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ViewBillingResponse(data, context);
  const response: ViewBillingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ViewBillingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const deserializeAws_json1_1DnssecLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DnssecLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DnssecLimitExceeded(body, context);
  const exception = new DnssecLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DomainLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DomainLimitExceeded(body, context);
  const exception = new DomainLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DuplicateRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRequest(body, context);
  const exception = new DuplicateRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInput(body, context);
  const exception = new InvalidInput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationLimitExceeded(body, context);
  const exception = new OperationLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TLDRulesViolationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TLDRulesViolation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TLDRulesViolation(body, context);
  const exception = new TLDRulesViolation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedTLDResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedTLD> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedTLD(body, context);
  const exception = new UnsupportedTLD({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountRequest = (
  input: AcceptDomainTransferFromAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Password != null && { Password: input.Password }),
  };
};

const serializeAws_json1_1AssociateDelegationSignerToDomainRequest = (
  input: AssociateDelegationSignerToDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.SigningAttributes != null && {
      SigningAttributes: serializeAws_json1_1DnssecSigningAttributes(input.SigningAttributes, context),
    }),
  };
};

const serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountRequest = (
  input: CancelDomainTransferToAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1CheckDomainAvailabilityRequest = (
  input: CheckDomainAvailabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.IdnLangCode != null && { IdnLangCode: input.IdnLangCode }),
  };
};

const serializeAws_json1_1CheckDomainTransferabilityRequest = (
  input: CheckDomainTransferabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthCode != null && { AuthCode: input.AuthCode }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1Consent = (input: Consent, context: __SerdeContext): any => {
  return {
    ...(input.Currency != null && { Currency: input.Currency }),
    ...(input.MaxPrice != null && { MaxPrice: __serializeFloat(input.MaxPrice) }),
  };
};

const serializeAws_json1_1ContactDetail = (input: ContactDetail, context: __SerdeContext): any => {
  return {
    ...(input.AddressLine1 != null && { AddressLine1: input.AddressLine1 }),
    ...(input.AddressLine2 != null && { AddressLine2: input.AddressLine2 }),
    ...(input.City != null && { City: input.City }),
    ...(input.ContactType != null && { ContactType: input.ContactType }),
    ...(input.CountryCode != null && { CountryCode: input.CountryCode }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.ExtraParams != null && { ExtraParams: serializeAws_json1_1ExtraParamList(input.ExtraParams, context) }),
    ...(input.Fax != null && { Fax: input.Fax }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.State != null && { State: input.State }),
    ...(input.ZipCode != null && { ZipCode: input.ZipCode }),
  };
};

const serializeAws_json1_1DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1DeleteTagsForDomainRequest = (
  input: DeleteTagsForDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.TagsToDelete != null && { TagsToDelete: serializeAws_json1_1TagKeyList(input.TagsToDelete, context) }),
  };
};

const serializeAws_json1_1DisableDomainAutoRenewRequest = (
  input: DisableDomainAutoRenewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1DisableDomainTransferLockRequest = (
  input: DisableDomainTransferLockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1DisassociateDelegationSignerFromDomainRequest = (
  input: DisassociateDelegationSignerFromDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DnssecSigningAttributes = (input: DnssecSigningAttributes, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { Algorithm: input.Algorithm }),
    ...(input.Flags != null && { Flags: input.Flags }),
    ...(input.PublicKey != null && { PublicKey: input.PublicKey }),
  };
};

const serializeAws_json1_1EnableDomainAutoRenewRequest = (
  input: EnableDomainAutoRenewRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1EnableDomainTransferLockRequest = (
  input: EnableDomainTransferLockRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1ExtraParam = (input: ExtraParam, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1ExtraParamList = (input: ExtraParam[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ExtraParam(entry, context);
    });
};

const serializeAws_json1_1FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1FilterConditions = (input: FilterCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FilterCondition(entry, context);
    });
};

const serializeAws_json1_1GetContactReachabilityStatusRequest = (
  input: GetContactReachabilityStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1GetDomainDetailRequest = (input: GetDomainDetailRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1GetDomainSuggestionsRequest = (
  input: GetDomainSuggestionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OnlyAvailable != null && { OnlyAvailable: input.OnlyAvailable }),
    ...(input.SuggestionCount != null && { SuggestionCount: input.SuggestionCount }),
  };
};

const serializeAws_json1_1GetOperationDetailRequest = (
  input: GetOperationDetailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperationId != null && { OperationId: input.OperationId }),
  };
};

const serializeAws_json1_1GlueIpList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListDomainsRequest = (input: ListDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FilterConditions != null && {
      FilterConditions: serializeAws_json1_1FilterConditions(input.FilterConditions, context),
    }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.SortCondition != null && {
      SortCondition: serializeAws_json1_1SortCondition(input.SortCondition, context),
    }),
  };
};

const serializeAws_json1_1ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
    ...(input.Status != null && { Status: serializeAws_json1_1OperationStatusList(input.Status, context) }),
    ...(input.SubmittedSince != null && { SubmittedSince: Math.round(input.SubmittedSince.getTime() / 1000) }),
    ...(input.Type != null && { Type: serializeAws_json1_1OperationTypeList(input.Type, context) }),
  };
};

const serializeAws_json1_1ListPricesRequest = (input: ListPricesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.Tld != null && { Tld: input.Tld }),
  };
};

const serializeAws_json1_1ListTagsForDomainRequest = (
  input: ListTagsForDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1Nameserver = (input: Nameserver, context: __SerdeContext): any => {
  return {
    ...(input.GlueIps != null && { GlueIps: serializeAws_json1_1GlueIpList(input.GlueIps, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1NameserverList = (input: Nameserver[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Nameserver(entry, context);
    });
};

const serializeAws_json1_1OperationStatusList = (input: (OperationStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OperationTypeList = (input: (OperationType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1PushDomainRequest = (input: PushDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

const serializeAws_json1_1RegisterDomainRequest = (input: RegisterDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdminContact != null && { AdminContact: serializeAws_json1_1ContactDetail(input.AdminContact, context) }),
    ...(input.AutoRenew != null && { AutoRenew: input.AutoRenew }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DurationInYears != null && { DurationInYears: input.DurationInYears }),
    ...(input.IdnLangCode != null && { IdnLangCode: input.IdnLangCode }),
    ...(input.PrivacyProtectAdminContact != null && { PrivacyProtectAdminContact: input.PrivacyProtectAdminContact }),
    ...(input.PrivacyProtectRegistrantContact != null && {
      PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact,
    }),
    ...(input.PrivacyProtectTechContact != null && { PrivacyProtectTechContact: input.PrivacyProtectTechContact }),
    ...(input.RegistrantContact != null && {
      RegistrantContact: serializeAws_json1_1ContactDetail(input.RegistrantContact, context),
    }),
    ...(input.TechContact != null && { TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context) }),
  };
};

const serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountRequest = (
  input: RejectDomainTransferFromAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1RenewDomainRequest = (input: RenewDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.CurrentExpiryYear != null && { CurrentExpiryYear: input.CurrentExpiryYear }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DurationInYears != null && { DurationInYears: input.DurationInYears }),
  };
};

const serializeAws_json1_1ResendContactReachabilityEmailRequest = (
  input: ResendContactReachabilityEmailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

const serializeAws_json1_1ResendOperationAuthorizationRequest = (
  input: ResendOperationAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperationId != null && { OperationId: input.OperationId }),
  };
};

const serializeAws_json1_1RetrieveDomainAuthCodeRequest = (
  input: RetrieveDomainAuthCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1SortCondition = (input: SortCondition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TransferDomainRequest = (input: TransferDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdminContact != null && { AdminContact: serializeAws_json1_1ContactDetail(input.AdminContact, context) }),
    ...(input.AuthCode != null && { AuthCode: input.AuthCode }),
    ...(input.AutoRenew != null && { AutoRenew: input.AutoRenew }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DurationInYears != null && { DurationInYears: input.DurationInYears }),
    ...(input.IdnLangCode != null && { IdnLangCode: input.IdnLangCode }),
    ...(input.Nameservers != null && { Nameservers: serializeAws_json1_1NameserverList(input.Nameservers, context) }),
    ...(input.PrivacyProtectAdminContact != null && { PrivacyProtectAdminContact: input.PrivacyProtectAdminContact }),
    ...(input.PrivacyProtectRegistrantContact != null && {
      PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact,
    }),
    ...(input.PrivacyProtectTechContact != null && { PrivacyProtectTechContact: input.PrivacyProtectTechContact }),
    ...(input.RegistrantContact != null && {
      RegistrantContact: serializeAws_json1_1ContactDetail(input.RegistrantContact, context),
    }),
    ...(input.TechContact != null && { TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context) }),
  };
};

const serializeAws_json1_1TransferDomainToAnotherAwsAccountRequest = (
  input: TransferDomainToAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

const serializeAws_json1_1UpdateDomainContactPrivacyRequest = (
  input: UpdateDomainContactPrivacyRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminPrivacy != null && { AdminPrivacy: input.AdminPrivacy }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.RegistrantPrivacy != null && { RegistrantPrivacy: input.RegistrantPrivacy }),
    ...(input.TechPrivacy != null && { TechPrivacy: input.TechPrivacy }),
  };
};

const serializeAws_json1_1UpdateDomainContactRequest = (
  input: UpdateDomainContactRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdminContact != null && { AdminContact: serializeAws_json1_1ContactDetail(input.AdminContact, context) }),
    ...(input.Consent != null && { Consent: serializeAws_json1_1Consent(input.Consent, context) }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.RegistrantContact != null && {
      RegistrantContact: serializeAws_json1_1ContactDetail(input.RegistrantContact, context),
    }),
    ...(input.TechContact != null && { TechContact: serializeAws_json1_1ContactDetail(input.TechContact, context) }),
  };
};

const serializeAws_json1_1UpdateDomainNameserversRequest = (
  input: UpdateDomainNameserversRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.FIAuthKey != null && { FIAuthKey: input.FIAuthKey }),
    ...(input.Nameservers != null && { Nameservers: serializeAws_json1_1NameserverList(input.Nameservers, context) }),
  };
};

const serializeAws_json1_1UpdateTagsForDomainRequest = (
  input: UpdateTagsForDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.TagsToUpdate != null && { TagsToUpdate: serializeAws_json1_1TagList(input.TagsToUpdate, context) }),
  };
};

const serializeAws_json1_1Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ViewBillingRequest = (input: ViewBillingRequest, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: Math.round(input.End.getTime() / 1000) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.Start != null && { Start: Math.round(input.Start.getTime() / 1000) }),
  };
};

const deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): AcceptDomainTransferFromAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1AssociateDelegationSignerToDomainResponse = (
  output: any,
  context: __SerdeContext
): AssociateDelegationSignerToDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1BillingRecord = (output: any, context: __SerdeContext): BillingRecord => {
  return {
    BillDate:
      output.BillDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.BillDate))) : undefined,
    DomainName: __expectString(output.DomainName),
    InvoiceId: __expectString(output.InvoiceId),
    Operation: __expectString(output.Operation),
    Price: __limitedParseDouble(output.Price),
  } as any;
};

const deserializeAws_json1_1BillingRecords = (output: any, context: __SerdeContext): BillingRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BillingRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): CancelDomainTransferToAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1CheckDomainAvailabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainAvailabilityResponse => {
  return {
    Availability: __expectString(output.Availability),
  } as any;
};

const deserializeAws_json1_1CheckDomainTransferabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainTransferabilityResponse => {
  return {
    Transferability:
      output.Transferability != null
        ? deserializeAws_json1_1DomainTransferability(output.Transferability, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ContactDetail = (output: any, context: __SerdeContext): ContactDetail => {
  return {
    AddressLine1: __expectString(output.AddressLine1),
    AddressLine2: __expectString(output.AddressLine2),
    City: __expectString(output.City),
    ContactType: __expectString(output.ContactType),
    CountryCode: __expectString(output.CountryCode),
    Email: __expectString(output.Email),
    ExtraParams:
      output.ExtraParams != null ? deserializeAws_json1_1ExtraParamList(output.ExtraParams, context) : undefined,
    Fax: __expectString(output.Fax),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    OrganizationName: __expectString(output.OrganizationName),
    PhoneNumber: __expectString(output.PhoneNumber),
    State: __expectString(output.State),
    ZipCode: __expectString(output.ZipCode),
  } as any;
};

const deserializeAws_json1_1DeleteDomainResponse = (output: any, context: __SerdeContext): DeleteDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1DeleteTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): DeleteTagsForDomainResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisableDomainAutoRenewResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainAutoRenewResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainTransferLockResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1DisassociateDelegationSignerFromDomainResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDelegationSignerFromDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1DnssecKey = (output: any, context: __SerdeContext): DnssecKey => {
  return {
    Algorithm: __expectInt32(output.Algorithm),
    Digest: __expectString(output.Digest),
    DigestType: __expectInt32(output.DigestType),
    Flags: __expectInt32(output.Flags),
    Id: __expectString(output.Id),
    KeyTag: __expectInt32(output.KeyTag),
    PublicKey: __expectString(output.PublicKey),
  } as any;
};

const deserializeAws_json1_1DnssecKeyList = (output: any, context: __SerdeContext): DnssecKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DnssecKey(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DnssecLimitExceeded = (output: any, context: __SerdeContext): DnssecLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DomainLimitExceeded = (output: any, context: __SerdeContext): DomainLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1DomainPrice = (output: any, context: __SerdeContext): DomainPrice => {
  return {
    ChangeOwnershipPrice:
      output.ChangeOwnershipPrice != null
        ? deserializeAws_json1_1PriceWithCurrency(output.ChangeOwnershipPrice, context)
        : undefined,
    Name: __expectString(output.Name),
    RegistrationPrice:
      output.RegistrationPrice != null
        ? deserializeAws_json1_1PriceWithCurrency(output.RegistrationPrice, context)
        : undefined,
    RenewalPrice:
      output.RenewalPrice != null ? deserializeAws_json1_1PriceWithCurrency(output.RenewalPrice, context) : undefined,
    RestorationPrice:
      output.RestorationPrice != null
        ? deserializeAws_json1_1PriceWithCurrency(output.RestorationPrice, context)
        : undefined,
    TransferPrice:
      output.TransferPrice != null ? deserializeAws_json1_1PriceWithCurrency(output.TransferPrice, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DomainPriceList = (output: any, context: __SerdeContext): DomainPrice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainPrice(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DomainStatusList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1DomainSuggestion = (output: any, context: __SerdeContext): DomainSuggestion => {
  return {
    Availability: __expectString(output.Availability),
    DomainName: __expectString(output.DomainName),
  } as any;
};

const deserializeAws_json1_1DomainSuggestionsList = (output: any, context: __SerdeContext): DomainSuggestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainSuggestion(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    AutoRenew: __expectBoolean(output.AutoRenew),
    DomainName: __expectString(output.DomainName),
    Expiry: output.Expiry != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expiry))) : undefined,
    TransferLock: __expectBoolean(output.TransferLock),
  } as any;
};

const deserializeAws_json1_1DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DomainSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DomainTransferability = (output: any, context: __SerdeContext): DomainTransferability => {
  return {
    Transferable: __expectString(output.Transferable),
  } as any;
};

const deserializeAws_json1_1DuplicateRequest = (output: any, context: __SerdeContext): DuplicateRequest => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1EnableDomainAutoRenewResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainAutoRenewResponse => {
  return {} as any;
};

const deserializeAws_json1_1EnableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainTransferLockResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1ExtraParam = (output: any, context: __SerdeContext): ExtraParam => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1ExtraParamList = (output: any, context: __SerdeContext): ExtraParam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExtraParam(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetContactReachabilityStatusResponse = (
  output: any,
  context: __SerdeContext
): GetContactReachabilityStatusResponse => {
  return {
    domainName: __expectString(output.domainName),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1GetDomainDetailResponse = (
  output: any,
  context: __SerdeContext
): GetDomainDetailResponse => {
  return {
    AbuseContactEmail: __expectString(output.AbuseContactEmail),
    AbuseContactPhone: __expectString(output.AbuseContactPhone),
    AdminContact:
      output.AdminContact != null ? deserializeAws_json1_1ContactDetail(output.AdminContact, context) : undefined,
    AdminPrivacy: __expectBoolean(output.AdminPrivacy),
    AutoRenew: __expectBoolean(output.AutoRenew),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DnsSec: __expectString(output.DnsSec),
    DnssecKeys: output.DnssecKeys != null ? deserializeAws_json1_1DnssecKeyList(output.DnssecKeys, context) : undefined,
    DomainName: __expectString(output.DomainName),
    ExpirationDate:
      output.ExpirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationDate)))
        : undefined,
    Nameservers:
      output.Nameservers != null ? deserializeAws_json1_1NameserverList(output.Nameservers, context) : undefined,
    RegistrantContact:
      output.RegistrantContact != null
        ? deserializeAws_json1_1ContactDetail(output.RegistrantContact, context)
        : undefined,
    RegistrantPrivacy: __expectBoolean(output.RegistrantPrivacy),
    RegistrarName: __expectString(output.RegistrarName),
    RegistrarUrl: __expectString(output.RegistrarUrl),
    RegistryDomainId: __expectString(output.RegistryDomainId),
    Reseller: __expectString(output.Reseller),
    StatusList:
      output.StatusList != null ? deserializeAws_json1_1DomainStatusList(output.StatusList, context) : undefined,
    TechContact:
      output.TechContact != null ? deserializeAws_json1_1ContactDetail(output.TechContact, context) : undefined,
    TechPrivacy: __expectBoolean(output.TechPrivacy),
    UpdatedDate:
      output.UpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedDate)))
        : undefined,
    WhoIsServer: __expectString(output.WhoIsServer),
  } as any;
};

const deserializeAws_json1_1GetDomainSuggestionsResponse = (
  output: any,
  context: __SerdeContext
): GetDomainSuggestionsResponse => {
  return {
    SuggestionsList:
      output.SuggestionsList != null
        ? deserializeAws_json1_1DomainSuggestionsList(output.SuggestionsList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationDetailResponse = (
  output: any,
  context: __SerdeContext
): GetOperationDetailResponse => {
  return {
    DomainName: __expectString(output.DomainName),
    LastUpdatedDate:
      output.LastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDate)))
        : undefined,
    Message: __expectString(output.Message),
    OperationId: __expectString(output.OperationId),
    Status: __expectString(output.Status),
    StatusFlag: __expectString(output.StatusFlag),
    SubmittedDate:
      output.SubmittedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmittedDate)))
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1GlueIpList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_json1_1InvalidInput = (output: any, context: __SerdeContext): InvalidInput => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return {
    Domains: output.Domains != null ? deserializeAws_json1_1DomainSummaryList(output.Domains, context) : undefined,
    NextPageMarker: __expectString(output.NextPageMarker),
  } as any;
};

const deserializeAws_json1_1ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextPageMarker: __expectString(output.NextPageMarker),
    Operations:
      output.Operations != null ? deserializeAws_json1_1OperationSummaryList(output.Operations, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListPricesResponse = (output: any, context: __SerdeContext): ListPricesResponse => {
  return {
    NextPageMarker: __expectString(output.NextPageMarker),
    Prices: output.Prices != null ? deserializeAws_json1_1DomainPriceList(output.Prices, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForDomainResponse => {
  return {
    TagList: output.TagList != null ? deserializeAws_json1_1TagList(output.TagList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Nameserver = (output: any, context: __SerdeContext): Nameserver => {
  return {
    GlueIps: output.GlueIps != null ? deserializeAws_json1_1GlueIpList(output.GlueIps, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1NameserverList = (output: any, context: __SerdeContext): Nameserver[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Nameserver(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OperationLimitExceeded = (output: any, context: __SerdeContext): OperationLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return {
    DomainName: __expectString(output.DomainName),
    LastUpdatedDate:
      output.LastUpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedDate)))
        : undefined,
    Message: __expectString(output.Message),
    OperationId: __expectString(output.OperationId),
    Status: __expectString(output.Status),
    StatusFlag: __expectString(output.StatusFlag),
    SubmittedDate:
      output.SubmittedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.SubmittedDate)))
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OperationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PriceWithCurrency = (output: any, context: __SerdeContext): PriceWithCurrency => {
  return {
    Currency: __expectString(output.Currency),
    Price: __limitedParseDouble(output.Price),
  } as any;
};

const deserializeAws_json1_1RegisterDomainResponse = (output: any, context: __SerdeContext): RegisterDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): RejectDomainTransferFromAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1RenewDomainResponse = (output: any, context: __SerdeContext): RenewDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1ResendContactReachabilityEmailResponse = (
  output: any,
  context: __SerdeContext
): ResendContactReachabilityEmailResponse => {
  return {
    domainName: __expectString(output.domainName),
    emailAddress: __expectString(output.emailAddress),
    isAlreadyVerified: __expectBoolean(output.isAlreadyVerified),
  } as any;
};

const deserializeAws_json1_1RetrieveDomainAuthCodeResponse = (
  output: any,
  context: __SerdeContext
): RetrieveDomainAuthCodeResponse => {
  return {
    AuthCode: __expectString(output.AuthCode),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TLDRulesViolation = (output: any, context: __SerdeContext): TLDRulesViolation => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TransferDomainResponse = (output: any, context: __SerdeContext): TransferDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1TransferDomainToAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): TransferDomainToAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Password: __expectString(output.Password),
  } as any;
};

const deserializeAws_json1_1UnsupportedTLD = (output: any, context: __SerdeContext): UnsupportedTLD => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UpdateDomainContactPrivacyResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactPrivacyResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1UpdateDomainContactResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1UpdateDomainNameserversResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainNameserversResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1UpdateTagsForDomainResponse = (
  output: any,
  context: __SerdeContext
): UpdateTagsForDomainResponse => {
  return {} as any;
};

const deserializeAws_json1_1ViewBillingResponse = (output: any, context: __SerdeContext): ViewBillingResponse => {
  return {
    BillingRecords:
      output.BillingRecords != null ? deserializeAws_json1_1BillingRecords(output.BillingRecords, context) : undefined,
    NextPageMarker: __expectString(output.NextPageMarker),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
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
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
