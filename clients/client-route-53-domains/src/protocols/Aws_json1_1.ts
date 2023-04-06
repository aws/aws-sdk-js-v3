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

/**
 * serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand
 */
export const se_AcceptDomainTransferFromAnotherAwsAccountCommand = async (
  input: AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(se_AcceptDomainTransferFromAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateDelegationSignerToDomainCommand
 */
export const se_AssociateDelegationSignerToDomainCommand = async (
  input: AssociateDelegationSignerToDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.AssociateDelegationSignerToDomain",
  };
  let body: any;
  body = JSON.stringify(se_AssociateDelegationSignerToDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand
 */
export const se_CancelDomainTransferToAnotherAwsAccountCommand = async (
  input: CancelDomainTransferToAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(se_CancelDomainTransferToAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckDomainAvailabilityCommand
 */
export const se_CheckDomainAvailabilityCommand = async (
  input: CheckDomainAvailabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.CheckDomainAvailability",
  };
  let body: any;
  body = JSON.stringify(se_CheckDomainAvailabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CheckDomainTransferabilityCommand
 */
export const se_CheckDomainTransferabilityCommand = async (
  input: CheckDomainTransferabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.CheckDomainTransferability",
  };
  let body: any;
  body = JSON.stringify(se_CheckDomainTransferabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DeleteDomain",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsForDomainCommand
 */
export const se_DeleteTagsForDomainCommand = async (
  input: DeleteTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DeleteTagsForDomain",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTagsForDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableDomainAutoRenewCommand
 */
export const se_DisableDomainAutoRenewCommand = async (
  input: DisableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DisableDomainAutoRenew",
  };
  let body: any;
  body = JSON.stringify(se_DisableDomainAutoRenewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableDomainTransferLockCommand
 */
export const se_DisableDomainTransferLockCommand = async (
  input: DisableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DisableDomainTransferLock",
  };
  let body: any;
  body = JSON.stringify(se_DisableDomainTransferLockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateDelegationSignerFromDomainCommand
 */
export const se_DisassociateDelegationSignerFromDomainCommand = async (
  input: DisassociateDelegationSignerFromDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.DisassociateDelegationSignerFromDomain",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateDelegationSignerFromDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableDomainAutoRenewCommand
 */
export const se_EnableDomainAutoRenewCommand = async (
  input: EnableDomainAutoRenewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.EnableDomainAutoRenew",
  };
  let body: any;
  body = JSON.stringify(se_EnableDomainAutoRenewRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableDomainTransferLockCommand
 */
export const se_EnableDomainTransferLockCommand = async (
  input: EnableDomainTransferLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.EnableDomainTransferLock",
  };
  let body: any;
  body = JSON.stringify(se_EnableDomainTransferLockRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetContactReachabilityStatusCommand
 */
export const se_GetContactReachabilityStatusCommand = async (
  input: GetContactReachabilityStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetContactReachabilityStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetContactReachabilityStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainDetailCommand
 */
export const se_GetDomainDetailCommand = async (
  input: GetDomainDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetDomainDetail",
  };
  let body: any;
  body = JSON.stringify(se_GetDomainDetailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDomainSuggestionsCommand
 */
export const se_GetDomainSuggestionsCommand = async (
  input: GetDomainSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetDomainSuggestions",
  };
  let body: any;
  body = JSON.stringify(se_GetDomainSuggestionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationDetailCommand
 */
export const se_GetOperationDetailCommand = async (
  input: GetOperationDetailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.GetOperationDetail",
  };
  let body: any;
  body = JSON.stringify(se_GetOperationDetailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListDomains",
  };
  let body: any;
  body = JSON.stringify(se_ListDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOperationsCommand
 */
export const se_ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListOperations",
  };
  let body: any;
  body = JSON.stringify(se_ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPricesCommand
 */
export const se_ListPricesCommand = async (
  input: ListPricesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListPrices",
  };
  let body: any;
  body = JSON.stringify(se_ListPricesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForDomainCommand
 */
export const se_ListTagsForDomainCommand = async (
  input: ListTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ListTagsForDomain",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PushDomainCommand
 */
export const se_PushDomainCommand = async (
  input: PushDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.PushDomain",
  };
  let body: any;
  body = JSON.stringify(se_PushDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDomainCommand
 */
export const se_RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RegisterDomain",
  };
  let body: any;
  body = JSON.stringify(se_RegisterDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand
 */
export const se_RejectDomainTransferFromAnotherAwsAccountCommand = async (
  input: RejectDomainTransferFromAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(se_RejectDomainTransferFromAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RenewDomainCommand
 */
export const se_RenewDomainCommand = async (
  input: RenewDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RenewDomain",
  };
  let body: any;
  body = JSON.stringify(se_RenewDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendContactReachabilityEmailCommand
 */
export const se_ResendContactReachabilityEmailCommand = async (
  input: ResendContactReachabilityEmailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ResendContactReachabilityEmail",
  };
  let body: any;
  body = JSON.stringify(se_ResendContactReachabilityEmailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendOperationAuthorizationCommand
 */
export const se_ResendOperationAuthorizationCommand = async (
  input: ResendOperationAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ResendOperationAuthorization",
  };
  let body: any;
  body = JSON.stringify(se_ResendOperationAuthorizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetrieveDomainAuthCodeCommand
 */
export const se_RetrieveDomainAuthCodeCommand = async (
  input: RetrieveDomainAuthCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.RetrieveDomainAuthCode",
  };
  let body: any;
  body = JSON.stringify(se_RetrieveDomainAuthCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TransferDomainCommand
 */
export const se_TransferDomainCommand = async (
  input: TransferDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.TransferDomain",
  };
  let body: any;
  body = JSON.stringify(se_TransferDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TransferDomainToAnotherAwsAccountCommand
 */
export const se_TransferDomainToAnotherAwsAccountCommand = async (
  input: TransferDomainToAnotherAwsAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount",
  };
  let body: any;
  body = JSON.stringify(se_TransferDomainToAnotherAwsAccountRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainContactCommand
 */
export const se_UpdateDomainContactCommand = async (
  input: UpdateDomainContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateDomainContact",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDomainContactRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainContactPrivacyCommand
 */
export const se_UpdateDomainContactPrivacyCommand = async (
  input: UpdateDomainContactPrivacyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateDomainContactPrivacy",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDomainContactPrivacyRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainNameserversCommand
 */
export const se_UpdateDomainNameserversCommand = async (
  input: UpdateDomainNameserversCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateDomainNameservers",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDomainNameserversRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTagsForDomainCommand
 */
export const se_UpdateTagsForDomainCommand = async (
  input: UpdateTagsForDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.UpdateTagsForDomain",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTagsForDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ViewBillingCommand
 */
export const se_ViewBillingCommand = async (
  input: ViewBillingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53Domains_v20140515.ViewBilling",
  };
  let body: any;
  body = JSON.stringify(se_ViewBillingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommand
 */
export const de_AcceptDomainTransferFromAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptDomainTransferFromAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptDomainTransferFromAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptDomainTransferFromAnotherAwsAccountResponse(data, context);
  const response: AcceptDomainTransferFromAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountCommandError
 */
const de_AcceptDomainTransferFromAnotherAwsAccountCommandError = async (
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
      throw await de_DomainLimitExceededRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1AssociateDelegationSignerToDomainCommand
 */
export const de_AssociateDelegationSignerToDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDelegationSignerToDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateDelegationSignerToDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateDelegationSignerToDomainResponse(data, context);
  const response: AssociateDelegationSignerToDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateDelegationSignerToDomainCommandError
 */
const de_AssociateDelegationSignerToDomainCommandError = async (
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
      throw await de_DnssecLimitExceededRes(parsedOutput, context);
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommand
 */
export const de_CancelDomainTransferToAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDomainTransferToAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelDomainTransferToAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelDomainTransferToAnotherAwsAccountResponse(data, context);
  const response: CancelDomainTransferToAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountCommandError
 */
const de_CancelDomainTransferToAnotherAwsAccountCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CheckDomainAvailabilityCommand
 */
export const de_CheckDomainAvailabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainAvailabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckDomainAvailabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckDomainAvailabilityResponse(data, context);
  const response: CheckDomainAvailabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CheckDomainAvailabilityCommandError
 */
const de_CheckDomainAvailabilityCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1CheckDomainTransferabilityCommand
 */
export const de_CheckDomainTransferabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CheckDomainTransferabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CheckDomainTransferabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CheckDomainTransferabilityResponse(data, context);
  const response: CheckDomainTransferabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CheckDomainTransferabilityCommandError
 */
const de_CheckDomainTransferabilityCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDomainResponse(data, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DeleteTagsForDomainCommand
 */
export const de_DeleteTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsForDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTagsForDomainResponse(data, context);
  const response: DeleteTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTagsForDomainCommandError
 */
const de_DeleteTagsForDomainCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DisableDomainAutoRenewCommand
 */
export const de_DisableDomainAutoRenewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainAutoRenewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableDomainAutoRenewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableDomainAutoRenewResponse(data, context);
  const response: DisableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableDomainAutoRenewCommandError
 */
const de_DisableDomainAutoRenewCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DisableDomainTransferLockCommand
 */
export const de_DisableDomainTransferLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableDomainTransferLockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableDomainTransferLockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisableDomainTransferLockResponse(data, context);
  const response: DisableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisableDomainTransferLockCommandError
 */
const de_DisableDomainTransferLockCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommand
 */
export const de_DisassociateDelegationSignerFromDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDelegationSignerFromDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateDelegationSignerFromDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateDelegationSignerFromDomainResponse(data, context);
  const response: DisassociateDelegationSignerFromDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateDelegationSignerFromDomainCommandError
 */
const de_DisassociateDelegationSignerFromDomainCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1EnableDomainAutoRenewCommand
 */
export const de_EnableDomainAutoRenewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainAutoRenewCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableDomainAutoRenewCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableDomainAutoRenewResponse(data, context);
  const response: EnableDomainAutoRenewCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableDomainAutoRenewCommandError
 */
const de_EnableDomainAutoRenewCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1EnableDomainTransferLockCommand
 */
export const de_EnableDomainTransferLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableDomainTransferLockCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableDomainTransferLockCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EnableDomainTransferLockResponse(data, context);
  const response: EnableDomainTransferLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EnableDomainTransferLockCommandError
 */
const de_EnableDomainTransferLockCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetContactReachabilityStatusCommand
 */
export const de_GetContactReachabilityStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContactReachabilityStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetContactReachabilityStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetContactReachabilityStatusResponse(data, context);
  const response: GetContactReachabilityStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetContactReachabilityStatusCommandError
 */
const de_GetContactReachabilityStatusCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetDomainDetailCommand
 */
export const de_GetDomainDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainDetailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDomainDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDomainDetailResponse(data, context);
  const response: GetDomainDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDomainDetailCommandError
 */
const de_GetDomainDetailCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetDomainSuggestionsCommand
 */
export const de_GetDomainSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainSuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDomainSuggestionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDomainSuggestionsResponse(data, context);
  const response: GetDomainSuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDomainSuggestionsCommandError
 */
const de_GetDomainSuggestionsCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1GetOperationDetailCommand
 */
export const de_GetOperationDetailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationDetailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOperationDetailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOperationDetailResponse(data, context);
  const response: GetOperationDetailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOperationDetailCommandError
 */
const de_GetOperationDetailCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListOperationsCommand
 */
export const de_ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOperationsCommandError
 */
const de_ListOperationsCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListPricesCommand
 */
export const de_ListPricesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPricesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPricesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPricesResponse(data, context);
  const response: ListPricesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPricesCommandError
 */
const de_ListPricesCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ListTagsForDomainCommand
 */
export const de_ListTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForDomainResponse(data, context);
  const response: ListTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForDomainCommandError
 */
const de_ListTagsForDomainCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1PushDomainCommand
 */
export const de_PushDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PushDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PushDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PushDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PushDomainCommandError
 */
const de_PushDomainCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1RegisterDomainCommand
 */
export const de_RegisterDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterDomainResponse(data, context);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterDomainCommandError
 */
const de_RegisterDomainCommandError = async (
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
      throw await de_DomainLimitExceededRes(parsedOutput, context);
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommand
 */
export const de_RejectDomainTransferFromAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectDomainTransferFromAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectDomainTransferFromAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectDomainTransferFromAnotherAwsAccountResponse(data, context);
  const response: RejectDomainTransferFromAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountCommandError
 */
const de_RejectDomainTransferFromAnotherAwsAccountCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1RenewDomainCommand
 */
export const de_RenewDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RenewDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RenewDomainResponse(data, context);
  const response: RenewDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RenewDomainCommandError
 */
const de_RenewDomainCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ResendContactReachabilityEmailCommand
 */
export const de_ResendContactReachabilityEmailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendContactReachabilityEmailCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResendContactReachabilityEmailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResendContactReachabilityEmailResponse(data, context);
  const response: ResendContactReachabilityEmailCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResendContactReachabilityEmailCommandError
 */
const de_ResendContactReachabilityEmailCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ResendOperationAuthorizationCommand
 */
export const de_ResendOperationAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendOperationAuthorizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResendOperationAuthorizationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResendOperationAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResendOperationAuthorizationCommandError
 */
const de_ResendOperationAuthorizationCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1RetrieveDomainAuthCodeCommand
 */
export const de_RetrieveDomainAuthCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetrieveDomainAuthCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetrieveDomainAuthCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RetrieveDomainAuthCodeResponse(data, context);
  const response: RetrieveDomainAuthCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RetrieveDomainAuthCodeCommandError
 */
const de_RetrieveDomainAuthCodeCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1TransferDomainCommand
 */
export const de_TransferDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TransferDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TransferDomainResponse(data, context);
  const response: TransferDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TransferDomainCommandError
 */
const de_TransferDomainCommandError = async (
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
      throw await de_DomainLimitExceededRes(parsedOutput, context);
    case "DuplicateRequest":
    case "com.amazonaws.route53domains#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommand
 */
export const de_TransferDomainToAnotherAwsAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TransferDomainToAnotherAwsAccountCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TransferDomainToAnotherAwsAccountCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TransferDomainToAnotherAwsAccountResponse(data, context);
  const response: TransferDomainToAnotherAwsAccountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TransferDomainToAnotherAwsAccountCommandError
 */
const de_TransferDomainToAnotherAwsAccountCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateDomainContactCommand
 */
export const de_UpdateDomainContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainContactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainContactResponse(data, context);
  const response: UpdateDomainContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDomainContactCommandError
 */
const de_UpdateDomainContactCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateDomainContactPrivacyCommand
 */
export const de_UpdateDomainContactPrivacyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainContactPrivacyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainContactPrivacyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainContactPrivacyResponse(data, context);
  const response: UpdateDomainContactPrivacyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDomainContactPrivacyCommandError
 */
const de_UpdateDomainContactPrivacyCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateDomainNameserversCommand
 */
export const de_UpdateDomainNameserversCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainNameserversCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainNameserversCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDomainNameserversResponse(data, context);
  const response: UpdateDomainNameserversCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDomainNameserversCommandError
 */
const de_UpdateDomainNameserversCommandError = async (
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
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.route53domains#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "TLDRulesViolation":
    case "com.amazonaws.route53domains#TLDRulesViolation":
      throw await de_TLDRulesViolationRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1UpdateTagsForDomainCommand
 */
export const de_UpdateTagsForDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTagsForDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTagsForDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTagsForDomainResponse(data, context);
  const response: UpdateTagsForDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateTagsForDomainCommandError
 */
const de_UpdateTagsForDomainCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationLimitExceeded":
    case "com.amazonaws.route53domains#OperationLimitExceeded":
      throw await de_OperationLimitExceededRes(parsedOutput, context);
    case "UnsupportedTLD":
    case "com.amazonaws.route53domains#UnsupportedTLD":
      throw await de_UnsupportedTLDRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1ViewBillingCommand
 */
export const de_ViewBillingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ViewBillingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ViewBillingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ViewBillingResponse(data, context);
  const response: ViewBillingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ViewBillingCommandError
 */
const de_ViewBillingCommandError = async (
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
      throw await de_InvalidInputRes(parsedOutput, context);
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

/**
 * deserializeAws_json1_1DnssecLimitExceededRes
 */
const de_DnssecLimitExceededRes = async (parsedOutput: any, context: __SerdeContext): Promise<DnssecLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DnssecLimitExceeded(body, context);
  const exception = new DnssecLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DomainLimitExceededRes
 */
const de_DomainLimitExceededRes = async (parsedOutput: any, context: __SerdeContext): Promise<DomainLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DomainLimitExceeded(body, context);
  const exception = new DomainLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateRequestRes
 */
const de_DuplicateRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<DuplicateRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateRequest(body, context);
  const exception = new DuplicateRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputRes
 */
const de_InvalidInputRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidInput> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInput(body, context);
  const exception = new InvalidInput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationLimitExceededRes
 */
const de_OperationLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationLimitExceeded(body, context);
  const exception = new OperationLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TLDRulesViolationRes
 */
const de_TLDRulesViolationRes = async (parsedOutput: any, context: __SerdeContext): Promise<TLDRulesViolation> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TLDRulesViolation(body, context);
  const exception = new TLDRulesViolation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedTLDRes
 */
const de_UnsupportedTLDRes = async (parsedOutput: any, context: __SerdeContext): Promise<UnsupportedTLD> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnsupportedTLD(body, context);
  const exception = new UnsupportedTLD({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountRequest
 */
const se_AcceptDomainTransferFromAnotherAwsAccountRequest = (
  input: AcceptDomainTransferFromAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Password != null && { Password: input.Password }),
  };
};

/**
 * serializeAws_json1_1AssociateDelegationSignerToDomainRequest
 */
const se_AssociateDelegationSignerToDomainRequest = (
  input: AssociateDelegationSignerToDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.SigningAttributes != null && {
      SigningAttributes: se_DnssecSigningAttributes(input.SigningAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_1CancelDomainTransferToAnotherAwsAccountRequest
 */
const se_CancelDomainTransferToAnotherAwsAccountRequest = (
  input: CancelDomainTransferToAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1CheckDomainAvailabilityRequest
 */
const se_CheckDomainAvailabilityRequest = (input: CheckDomainAvailabilityRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.IdnLangCode != null && { IdnLangCode: input.IdnLangCode }),
  };
};

/**
 * serializeAws_json1_1CheckDomainTransferabilityRequest
 */
const se_CheckDomainTransferabilityRequest = (
  input: CheckDomainTransferabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthCode != null && { AuthCode: input.AuthCode }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1Consent
 */
const se_Consent = (input: Consent, context: __SerdeContext): any => {
  return {
    ...(input.Currency != null && { Currency: input.Currency }),
    ...(input.MaxPrice != null && { MaxPrice: __serializeFloat(input.MaxPrice) }),
  };
};

/**
 * serializeAws_json1_1ContactDetail
 */
const se_ContactDetail = (input: ContactDetail, context: __SerdeContext): any => {
  return {
    ...(input.AddressLine1 != null && { AddressLine1: input.AddressLine1 }),
    ...(input.AddressLine2 != null && { AddressLine2: input.AddressLine2 }),
    ...(input.City != null && { City: input.City }),
    ...(input.ContactType != null && { ContactType: input.ContactType }),
    ...(input.CountryCode != null && { CountryCode: input.CountryCode }),
    ...(input.Email != null && { Email: input.Email }),
    ...(input.ExtraParams != null && { ExtraParams: se_ExtraParamList(input.ExtraParams, context) }),
    ...(input.Fax != null && { Fax: input.Fax }),
    ...(input.FirstName != null && { FirstName: input.FirstName }),
    ...(input.LastName != null && { LastName: input.LastName }),
    ...(input.OrganizationName != null && { OrganizationName: input.OrganizationName }),
    ...(input.PhoneNumber != null && { PhoneNumber: input.PhoneNumber }),
    ...(input.State != null && { State: input.State }),
    ...(input.ZipCode != null && { ZipCode: input.ZipCode }),
  };
};

/**
 * serializeAws_json1_1DeleteDomainRequest
 */
const se_DeleteDomainRequest = (input: DeleteDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1DeleteTagsForDomainRequest
 */
const se_DeleteTagsForDomainRequest = (input: DeleteTagsForDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.TagsToDelete != null && { TagsToDelete: se_TagKeyList(input.TagsToDelete, context) }),
  };
};

/**
 * serializeAws_json1_1DisableDomainAutoRenewRequest
 */
const se_DisableDomainAutoRenewRequest = (input: DisableDomainAutoRenewRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1DisableDomainTransferLockRequest
 */
const se_DisableDomainTransferLockRequest = (input: DisableDomainTransferLockRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1DisassociateDelegationSignerFromDomainRequest
 */
const se_DisassociateDelegationSignerFromDomainRequest = (
  input: DisassociateDelegationSignerFromDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DnssecSigningAttributes
 */
const se_DnssecSigningAttributes = (input: DnssecSigningAttributes, context: __SerdeContext): any => {
  return {
    ...(input.Algorithm != null && { Algorithm: input.Algorithm }),
    ...(input.Flags != null && { Flags: input.Flags }),
    ...(input.PublicKey != null && { PublicKey: input.PublicKey }),
  };
};

/**
 * serializeAws_json1_1EnableDomainAutoRenewRequest
 */
const se_EnableDomainAutoRenewRequest = (input: EnableDomainAutoRenewRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1EnableDomainTransferLockRequest
 */
const se_EnableDomainTransferLockRequest = (input: EnableDomainTransferLockRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1ExtraParam
 */
const se_ExtraParam = (input: ExtraParam, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1ExtraParamList
 */
const se_ExtraParamList = (input: ExtraParam[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExtraParam(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterCondition
 */
const se_FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Operator != null && { Operator: input.Operator }),
    ...(input.Values != null && { Values: se_Values(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1FilterConditions
 */
const se_FilterConditions = (input: FilterCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterCondition(entry, context);
    });
};

/**
 * serializeAws_json1_1GetContactReachabilityStatusRequest
 */
const se_GetContactReachabilityStatusRequest = (
  input: GetContactReachabilityStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1GetDomainDetailRequest
 */
const se_GetDomainDetailRequest = (input: GetDomainDetailRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1GetDomainSuggestionsRequest
 */
const se_GetDomainSuggestionsRequest = (input: GetDomainSuggestionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.OnlyAvailable != null && { OnlyAvailable: input.OnlyAvailable }),
    ...(input.SuggestionCount != null && { SuggestionCount: input.SuggestionCount }),
  };
};

/**
 * serializeAws_json1_1GetOperationDetailRequest
 */
const se_GetOperationDetailRequest = (input: GetOperationDetailRequest, context: __SerdeContext): any => {
  return {
    ...(input.OperationId != null && { OperationId: input.OperationId }),
  };
};

/**
 * serializeAws_json1_1GlueIpList
 */
const se_GlueIpList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListDomainsRequest
 */
const se_ListDomainsRequest = (input: ListDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FilterConditions != null && { FilterConditions: se_FilterConditions(input.FilterConditions, context) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.SortCondition != null && { SortCondition: se_SortCondition(input.SortCondition, context) }),
  };
};

/**
 * serializeAws_json1_1ListOperationsRequest
 */
const se_ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.SortBy != null && { SortBy: input.SortBy }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
    ...(input.Status != null && { Status: se_OperationStatusList(input.Status, context) }),
    ...(input.SubmittedSince != null && { SubmittedSince: Math.round(input.SubmittedSince.getTime() / 1000) }),
    ...(input.Type != null && { Type: se_OperationTypeList(input.Type, context) }),
  };
};

/**
 * serializeAws_json1_1ListPricesRequest
 */
const se_ListPricesRequest = (input: ListPricesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.Tld != null && { Tld: input.Tld }),
  };
};

/**
 * serializeAws_json1_1ListTagsForDomainRequest
 */
const se_ListTagsForDomainRequest = (input: ListTagsForDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1Nameserver
 */
const se_Nameserver = (input: Nameserver, context: __SerdeContext): any => {
  return {
    ...(input.GlueIps != null && { GlueIps: se_GlueIpList(input.GlueIps, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1NameserverList
 */
const se_NameserverList = (input: Nameserver[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Nameserver(entry, context);
    });
};

/**
 * serializeAws_json1_1OperationStatusList
 */
const se_OperationStatusList = (input: (OperationStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OperationTypeList
 */
const se_OperationTypeList = (input: (OperationType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PushDomainRequest
 */
const se_PushDomainRequest = (input: PushDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Target != null && { Target: input.Target }),
  };
};

/**
 * serializeAws_json1_1RegisterDomainRequest
 */
const se_RegisterDomainRequest = (input: RegisterDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdminContact != null && { AdminContact: se_ContactDetail(input.AdminContact, context) }),
    ...(input.AutoRenew != null && { AutoRenew: input.AutoRenew }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DurationInYears != null && { DurationInYears: input.DurationInYears }),
    ...(input.IdnLangCode != null && { IdnLangCode: input.IdnLangCode }),
    ...(input.PrivacyProtectAdminContact != null && { PrivacyProtectAdminContact: input.PrivacyProtectAdminContact }),
    ...(input.PrivacyProtectRegistrantContact != null && {
      PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact,
    }),
    ...(input.PrivacyProtectTechContact != null && { PrivacyProtectTechContact: input.PrivacyProtectTechContact }),
    ...(input.RegistrantContact != null && { RegistrantContact: se_ContactDetail(input.RegistrantContact, context) }),
    ...(input.TechContact != null && { TechContact: se_ContactDetail(input.TechContact, context) }),
  };
};

/**
 * serializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountRequest
 */
const se_RejectDomainTransferFromAnotherAwsAccountRequest = (
  input: RejectDomainTransferFromAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1RenewDomainRequest
 */
const se_RenewDomainRequest = (input: RenewDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.CurrentExpiryYear != null && { CurrentExpiryYear: input.CurrentExpiryYear }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DurationInYears != null && { DurationInYears: input.DurationInYears }),
  };
};

/**
 * serializeAws_json1_1ResendContactReachabilityEmailRequest
 */
const se_ResendContactReachabilityEmailRequest = (
  input: ResendContactReachabilityEmailRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domainName != null && { domainName: input.domainName }),
  };
};

/**
 * serializeAws_json1_1ResendOperationAuthorizationRequest
 */
const se_ResendOperationAuthorizationRequest = (
  input: ResendOperationAuthorizationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.OperationId != null && { OperationId: input.OperationId }),
  };
};

/**
 * serializeAws_json1_1RetrieveDomainAuthCodeRequest
 */
const se_RetrieveDomainAuthCodeRequest = (input: RetrieveDomainAuthCodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1SortCondition
 */
const se_SortCondition = (input: SortCondition, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TransferDomainRequest
 */
const se_TransferDomainRequest = (input: TransferDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdminContact != null && { AdminContact: se_ContactDetail(input.AdminContact, context) }),
    ...(input.AuthCode != null && { AuthCode: input.AuthCode }),
    ...(input.AutoRenew != null && { AutoRenew: input.AutoRenew }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DurationInYears != null && { DurationInYears: input.DurationInYears }),
    ...(input.IdnLangCode != null && { IdnLangCode: input.IdnLangCode }),
    ...(input.Nameservers != null && { Nameservers: se_NameserverList(input.Nameservers, context) }),
    ...(input.PrivacyProtectAdminContact != null && { PrivacyProtectAdminContact: input.PrivacyProtectAdminContact }),
    ...(input.PrivacyProtectRegistrantContact != null && {
      PrivacyProtectRegistrantContact: input.PrivacyProtectRegistrantContact,
    }),
    ...(input.PrivacyProtectTechContact != null && { PrivacyProtectTechContact: input.PrivacyProtectTechContact }),
    ...(input.RegistrantContact != null && { RegistrantContact: se_ContactDetail(input.RegistrantContact, context) }),
    ...(input.TechContact != null && { TechContact: se_ContactDetail(input.TechContact, context) }),
  };
};

/**
 * serializeAws_json1_1TransferDomainToAnotherAwsAccountRequest
 */
const se_TransferDomainToAnotherAwsAccountRequest = (
  input: TransferDomainToAnotherAwsAccountRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
  };
};

/**
 * serializeAws_json1_1UpdateDomainContactPrivacyRequest
 */
const se_UpdateDomainContactPrivacyRequest = (
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

/**
 * serializeAws_json1_1UpdateDomainContactRequest
 */
const se_UpdateDomainContactRequest = (input: UpdateDomainContactRequest, context: __SerdeContext): any => {
  return {
    ...(input.AdminContact != null && { AdminContact: se_ContactDetail(input.AdminContact, context) }),
    ...(input.Consent != null && { Consent: se_Consent(input.Consent, context) }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.RegistrantContact != null && { RegistrantContact: se_ContactDetail(input.RegistrantContact, context) }),
    ...(input.TechContact != null && { TechContact: se_ContactDetail(input.TechContact, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDomainNameserversRequest
 */
const se_UpdateDomainNameserversRequest = (input: UpdateDomainNameserversRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.FIAuthKey != null && { FIAuthKey: input.FIAuthKey }),
    ...(input.Nameservers != null && { Nameservers: se_NameserverList(input.Nameservers, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateTagsForDomainRequest
 */
const se_UpdateTagsForDomainRequest = (input: UpdateTagsForDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.TagsToUpdate != null && { TagsToUpdate: se_TagList(input.TagsToUpdate, context) }),
  };
};

/**
 * serializeAws_json1_1Values
 */
const se_Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ViewBillingRequest
 */
const se_ViewBillingRequest = (input: ViewBillingRequest, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: Math.round(input.End.getTime() / 1000) }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.MaxItems != null && { MaxItems: input.MaxItems }),
    ...(input.Start != null && { Start: Math.round(input.Start.getTime() / 1000) }),
  };
};

/**
 * deserializeAws_json1_1AcceptDomainTransferFromAnotherAwsAccountResponse
 */
const de_AcceptDomainTransferFromAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): AcceptDomainTransferFromAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateDelegationSignerToDomainResponse
 */
const de_AssociateDelegationSignerToDomainResponse = (
  output: any,
  context: __SerdeContext
): AssociateDelegationSignerToDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1BillingRecord
 */
const de_BillingRecord = (output: any, context: __SerdeContext): BillingRecord => {
  return {
    BillDate:
      output.BillDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.BillDate))) : undefined,
    DomainName: __expectString(output.DomainName),
    InvoiceId: __expectString(output.InvoiceId),
    Operation: __expectString(output.Operation),
    Price: __limitedParseDouble(output.Price),
  } as any;
};

/**
 * deserializeAws_json1_1BillingRecords
 */
const de_BillingRecords = (output: any, context: __SerdeContext): BillingRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BillingRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CancelDomainTransferToAnotherAwsAccountResponse
 */
const de_CancelDomainTransferToAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): CancelDomainTransferToAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1CheckDomainAvailabilityResponse
 */
const de_CheckDomainAvailabilityResponse = (output: any, context: __SerdeContext): CheckDomainAvailabilityResponse => {
  return {
    Availability: __expectString(output.Availability),
  } as any;
};

/**
 * deserializeAws_json1_1CheckDomainTransferabilityResponse
 */
const de_CheckDomainTransferabilityResponse = (
  output: any,
  context: __SerdeContext
): CheckDomainTransferabilityResponse => {
  return {
    Transferability:
      output.Transferability != null ? de_DomainTransferability(output.Transferability, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ContactDetail
 */
const de_ContactDetail = (output: any, context: __SerdeContext): ContactDetail => {
  return {
    AddressLine1: __expectString(output.AddressLine1),
    AddressLine2: __expectString(output.AddressLine2),
    City: __expectString(output.City),
    ContactType: __expectString(output.ContactType),
    CountryCode: __expectString(output.CountryCode),
    Email: __expectString(output.Email),
    ExtraParams: output.ExtraParams != null ? de_ExtraParamList(output.ExtraParams, context) : undefined,
    Fax: __expectString(output.Fax),
    FirstName: __expectString(output.FirstName),
    LastName: __expectString(output.LastName),
    OrganizationName: __expectString(output.OrganizationName),
    PhoneNumber: __expectString(output.PhoneNumber),
    State: __expectString(output.State),
    ZipCode: __expectString(output.ZipCode),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDomainResponse
 */
const de_DeleteDomainResponse = (output: any, context: __SerdeContext): DeleteDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTagsForDomainResponse
 */
const de_DeleteTagsForDomainResponse = (output: any, context: __SerdeContext): DeleteTagsForDomainResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisableDomainAutoRenewResponse
 */
const de_DisableDomainAutoRenewResponse = (output: any, context: __SerdeContext): DisableDomainAutoRenewResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisableDomainTransferLockResponse
 */
const de_DisableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): DisableDomainTransferLockResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateDelegationSignerFromDomainResponse
 */
const de_DisassociateDelegationSignerFromDomainResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDelegationSignerFromDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1DnssecKey
 */
const de_DnssecKey = (output: any, context: __SerdeContext): DnssecKey => {
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

/**
 * deserializeAws_json1_1DnssecKeyList
 */
const de_DnssecKeyList = (output: any, context: __SerdeContext): DnssecKey[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DnssecKey(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DnssecLimitExceeded
 */
const de_DnssecLimitExceeded = (output: any, context: __SerdeContext): DnssecLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DomainLimitExceeded
 */
const de_DomainLimitExceeded = (output: any, context: __SerdeContext): DomainLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DomainPrice
 */
const de_DomainPrice = (output: any, context: __SerdeContext): DomainPrice => {
  return {
    ChangeOwnershipPrice:
      output.ChangeOwnershipPrice != null ? de_PriceWithCurrency(output.ChangeOwnershipPrice, context) : undefined,
    Name: __expectString(output.Name),
    RegistrationPrice:
      output.RegistrationPrice != null ? de_PriceWithCurrency(output.RegistrationPrice, context) : undefined,
    RenewalPrice: output.RenewalPrice != null ? de_PriceWithCurrency(output.RenewalPrice, context) : undefined,
    RestorationPrice:
      output.RestorationPrice != null ? de_PriceWithCurrency(output.RestorationPrice, context) : undefined,
    TransferPrice: output.TransferPrice != null ? de_PriceWithCurrency(output.TransferPrice, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DomainPriceList
 */
const de_DomainPriceList = (output: any, context: __SerdeContext): DomainPrice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainPrice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainStatusList
 */
const de_DomainStatusList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1DomainSuggestion
 */
const de_DomainSuggestion = (output: any, context: __SerdeContext): DomainSuggestion => {
  return {
    Availability: __expectString(output.Availability),
    DomainName: __expectString(output.DomainName),
  } as any;
};

/**
 * deserializeAws_json1_1DomainSuggestionsList
 */
const de_DomainSuggestionsList = (output: any, context: __SerdeContext): DomainSuggestion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainSuggestion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    AutoRenew: __expectBoolean(output.AutoRenew),
    DomainName: __expectString(output.DomainName),
    Expiry: output.Expiry != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expiry))) : undefined,
    TransferLock: __expectBoolean(output.TransferLock),
  } as any;
};

/**
 * deserializeAws_json1_1DomainSummaryList
 */
const de_DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DomainTransferability
 */
const de_DomainTransferability = (output: any, context: __SerdeContext): DomainTransferability => {
  return {
    Transferable: __expectString(output.Transferable),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateRequest
 */
const de_DuplicateRequest = (output: any, context: __SerdeContext): DuplicateRequest => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EnableDomainAutoRenewResponse
 */
const de_EnableDomainAutoRenewResponse = (output: any, context: __SerdeContext): EnableDomainAutoRenewResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1EnableDomainTransferLockResponse
 */
const de_EnableDomainTransferLockResponse = (
  output: any,
  context: __SerdeContext
): EnableDomainTransferLockResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1ExtraParam
 */
const de_ExtraParam = (output: any, context: __SerdeContext): ExtraParam => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1ExtraParamList
 */
const de_ExtraParamList = (output: any, context: __SerdeContext): ExtraParam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExtraParam(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetContactReachabilityStatusResponse
 */
const de_GetContactReachabilityStatusResponse = (
  output: any,
  context: __SerdeContext
): GetContactReachabilityStatusResponse => {
  return {
    domainName: __expectString(output.domainName),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1GetDomainDetailResponse
 */
const de_GetDomainDetailResponse = (output: any, context: __SerdeContext): GetDomainDetailResponse => {
  return {
    AbuseContactEmail: __expectString(output.AbuseContactEmail),
    AbuseContactPhone: __expectString(output.AbuseContactPhone),
    AdminContact: output.AdminContact != null ? de_ContactDetail(output.AdminContact, context) : undefined,
    AdminPrivacy: __expectBoolean(output.AdminPrivacy),
    AutoRenew: __expectBoolean(output.AutoRenew),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DnsSec: __expectString(output.DnsSec),
    DnssecKeys: output.DnssecKeys != null ? de_DnssecKeyList(output.DnssecKeys, context) : undefined,
    DomainName: __expectString(output.DomainName),
    ExpirationDate:
      output.ExpirationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpirationDate)))
        : undefined,
    Nameservers: output.Nameservers != null ? de_NameserverList(output.Nameservers, context) : undefined,
    RegistrantContact:
      output.RegistrantContact != null ? de_ContactDetail(output.RegistrantContact, context) : undefined,
    RegistrantPrivacy: __expectBoolean(output.RegistrantPrivacy),
    RegistrarName: __expectString(output.RegistrarName),
    RegistrarUrl: __expectString(output.RegistrarUrl),
    RegistryDomainId: __expectString(output.RegistryDomainId),
    Reseller: __expectString(output.Reseller),
    StatusList: output.StatusList != null ? de_DomainStatusList(output.StatusList, context) : undefined,
    TechContact: output.TechContact != null ? de_ContactDetail(output.TechContact, context) : undefined,
    TechPrivacy: __expectBoolean(output.TechPrivacy),
    UpdatedDate:
      output.UpdatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedDate)))
        : undefined,
    WhoIsServer: __expectString(output.WhoIsServer),
  } as any;
};

/**
 * deserializeAws_json1_1GetDomainSuggestionsResponse
 */
const de_GetDomainSuggestionsResponse = (output: any, context: __SerdeContext): GetDomainSuggestionsResponse => {
  return {
    SuggestionsList:
      output.SuggestionsList != null ? de_DomainSuggestionsList(output.SuggestionsList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOperationDetailResponse
 */
const de_GetOperationDetailResponse = (output: any, context: __SerdeContext): GetOperationDetailResponse => {
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

/**
 * deserializeAws_json1_1GlueIpList
 */
const de_GlueIpList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1InvalidInput
 */
const de_InvalidInput = (output: any, context: __SerdeContext): InvalidInput => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListDomainsResponse
 */
const de_ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return {
    Domains: output.Domains != null ? de_DomainSummaryList(output.Domains, context) : undefined,
    NextPageMarker: __expectString(output.NextPageMarker),
  } as any;
};

/**
 * deserializeAws_json1_1ListOperationsResponse
 */
const de_ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextPageMarker: __expectString(output.NextPageMarker),
    Operations: output.Operations != null ? de_OperationSummaryList(output.Operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPricesResponse
 */
const de_ListPricesResponse = (output: any, context: __SerdeContext): ListPricesResponse => {
  return {
    NextPageMarker: __expectString(output.NextPageMarker),
    Prices: output.Prices != null ? de_DomainPriceList(output.Prices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForDomainResponse
 */
const de_ListTagsForDomainResponse = (output: any, context: __SerdeContext): ListTagsForDomainResponse => {
  return {
    TagList: output.TagList != null ? de_TagList(output.TagList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Nameserver
 */
const de_Nameserver = (output: any, context: __SerdeContext): Nameserver => {
  return {
    GlueIps: output.GlueIps != null ? de_GlueIpList(output.GlueIps, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1NameserverList
 */
const de_NameserverList = (output: any, context: __SerdeContext): Nameserver[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Nameserver(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperationLimitExceeded
 */
const de_OperationLimitExceeded = (output: any, context: __SerdeContext): OperationLimitExceeded => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OperationSummary
 */
const de_OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
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

/**
 * deserializeAws_json1_1OperationSummaryList
 */
const de_OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OperationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PriceWithCurrency
 */
const de_PriceWithCurrency = (output: any, context: __SerdeContext): PriceWithCurrency => {
  return {
    Currency: __expectString(output.Currency),
    Price: __limitedParseDouble(output.Price),
  } as any;
};

/**
 * deserializeAws_json1_1RegisterDomainResponse
 */
const de_RegisterDomainResponse = (output: any, context: __SerdeContext): RegisterDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1RejectDomainTransferFromAnotherAwsAccountResponse
 */
const de_RejectDomainTransferFromAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): RejectDomainTransferFromAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1RenewDomainResponse
 */
const de_RenewDomainResponse = (output: any, context: __SerdeContext): RenewDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1ResendContactReachabilityEmailResponse
 */
const de_ResendContactReachabilityEmailResponse = (
  output: any,
  context: __SerdeContext
): ResendContactReachabilityEmailResponse => {
  return {
    domainName: __expectString(output.domainName),
    emailAddress: __expectString(output.emailAddress),
    isAlreadyVerified: __expectBoolean(output.isAlreadyVerified),
  } as any;
};

/**
 * deserializeAws_json1_1RetrieveDomainAuthCodeResponse
 */
const de_RetrieveDomainAuthCodeResponse = (output: any, context: __SerdeContext): RetrieveDomainAuthCodeResponse => {
  return {
    AuthCode: __expectString(output.AuthCode),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TLDRulesViolation
 */
const de_TLDRulesViolation = (output: any, context: __SerdeContext): TLDRulesViolation => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TransferDomainResponse
 */
const de_TransferDomainResponse = (output: any, context: __SerdeContext): TransferDomainResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1TransferDomainToAnotherAwsAccountResponse
 */
const de_TransferDomainToAnotherAwsAccountResponse = (
  output: any,
  context: __SerdeContext
): TransferDomainToAnotherAwsAccountResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Password: __expectString(output.Password),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedTLD
 */
const de_UnsupportedTLD = (output: any, context: __SerdeContext): UnsupportedTLD => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDomainContactPrivacyResponse
 */
const de_UpdateDomainContactPrivacyResponse = (
  output: any,
  context: __SerdeContext
): UpdateDomainContactPrivacyResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDomainContactResponse
 */
const de_UpdateDomainContactResponse = (output: any, context: __SerdeContext): UpdateDomainContactResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDomainNameserversResponse
 */
const de_UpdateDomainNameserversResponse = (output: any, context: __SerdeContext): UpdateDomainNameserversResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTagsForDomainResponse
 */
const de_UpdateTagsForDomainResponse = (output: any, context: __SerdeContext): UpdateTagsForDomainResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ViewBillingResponse
 */
const de_ViewBillingResponse = (output: any, context: __SerdeContext): ViewBillingResponse => {
  return {
    BillingRecords: output.BillingRecords != null ? de_BillingRecords(output.BillingRecords, context) : undefined,
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
